/**
 * Internal message envelope.
 * A match proves this key signed these bytes. It does not grant permission,
 * prove a clock, bind an identity, or execute a REQUEST.
 */
import { createHash } from 'node:crypto'
import { ed25519 } from '@noble/curves/ed25519.js'
import { signatureHolds } from './sig.ts'

export const CLASSES = ['PUBLIC', 'DIRECT', 'GROUP', 'PROTOCOL', 'EVIDENCE', 'REQUEST', 'RESPONSE'] as const
export type MessageClass = (typeof CLASSES)[number]
const HEX = /^[0-9a-f]{64}$/
export const GENESIS = '0'.repeat(64)

export type MessageFields = {
  v: '1'
  class: MessageClass
  to: string
  content_sha256: string
  prev: string
  at?: string
}

export type Envelope = MessageFields & { signature: string }

export type OpenResult =
  | { match: true; hash: string }
  | { match: false; reason: 'CLASS' | 'FIELD' | 'CONTENT' | 'SIGNATURE' }

function canonical(fields: MessageFields): string {
  const body: Record<string, string> = {}
  for (const key of ['at', 'class', 'content_sha256', 'prev', 'to', 'v'] as const) {
    const value = fields[key]
    if (value !== undefined) body[key] = value
  }
  return JSON.stringify(body)
}

export function contentHash(content: Uint8Array): string {
  return createHash('sha256').update(content).digest('hex')
}

export function preimage(fields: MessageFields): Uint8Array {
  return new TextEncoder().encode(canonical(fields))
}

export function envelopeHash(fields: MessageFields): string {
  return createHash('sha256').update(preimage(fields)).digest('hex')
}

function fieldsHold(fields: MessageFields, content: Uint8Array): OpenResult | null {
  if (!CLASSES.includes(fields.class)) return { match: false, reason: 'CLASS' }
  if (fields.v !== '1' || fields.to.length === 0 || !HEX.test(fields.content_sha256) || !HEX.test(fields.prev)) {
    return { match: false, reason: 'FIELD' }
  }
  if (fields.at !== undefined && fields.at.length === 0) return { match: false, reason: 'FIELD' }
  if (contentHash(content) !== fields.content_sha256) return { match: false, reason: 'CONTENT' }
  return null
}

export function seal(content: Uint8Array, input: Omit<MessageFields, 'v' | 'content_sha256'>, secret: Uint8Array): Envelope {
  const fields: MessageFields = {
    v: '1',
    class: input.class,
    to: input.to,
    content_sha256: contentHash(content),
    prev: input.prev,
    ...(input.at === undefined ? {} : { at: input.at }),
  }
  const refused = fieldsHold(fields, content)
  if (refused) throw new Error(refused.reason)
  const signature = Buffer.from(ed25519.sign(preimage(fields), secret)).toString('hex')
  return { ...fields, signature }
}

export function open(envelope: Envelope, content: Uint8Array, publicKey: Uint8Array): OpenResult {
  const { signature, ...fields } = envelope
  const refused = fieldsHold(fields, content)
  if (refused) return refused
  let raw: Uint8Array
  try {
    raw = Uint8Array.from(Buffer.from(signature, 'hex'))
  } catch {
    return { match: false, reason: 'SIGNATURE' }
  }
  if (raw.length !== 64 || !signatureHolds({ crv: 'Ed25519', raw: publicKey }, preimage(fields), raw)) {
    return { match: false, reason: 'SIGNATURE' }
  }
  return { match: true, hash: envelopeHash(fields) }
}

export type MessageLog = { tip: string; hashes: string[] }

export function emptyLog(): MessageLog {
  return { tip: GENESIS, hashes: [] }
}

/** Accepts the next envelope only when its prev is this log's tip and the signature matches. */
export function append(log: MessageLog, envelope: Envelope, content: Uint8Array, publicKey: Uint8Array): MessageLog | { match: false; reason: OpenResult['reason'] | 'PREV' } {
  if (envelope.prev !== log.tip) return { match: false, reason: 'PREV' }
  const opened = open(envelope, content, publicKey)
  if (!opened.match) return opened
  return { tip: opened.hash, hashes: [...log.hashes, opened.hash] }
}
