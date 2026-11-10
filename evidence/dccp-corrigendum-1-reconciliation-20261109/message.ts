/**
 * Internal message envelope — reconciled to the ratified DCCP message protocol.
 *
 * Ratified text: DCCP-PROTOCOL-CANDIDATE.md, 11,304 bytes, SHA-256
 * 9ce2156ab95138083bad2b4a8b919cd50fa0e31ff3fbfd4beafb2d4dbf30f688,
 * ratified by Founder act 2026-11-09 (ratification record on the records shelf).
 *
 * Corrigendum 1 (Founder act, 2026-11-09) decides the signature's
 * hexadecimal case, which the ratified text carries as not decided:
 * a reader accepts only lowercase; a signature spelling of 128
 * hexadecimal characters containing an uppercase character is refused
 * as FIELD at section 6 step 2. See the corrigendum record on the
 * records shelf.
 *
 * A match proves this key signed these bytes. It does not grant permission,
 * prove a clock, bind an identity, or execute a REQUEST.
 */
import { createHash } from 'node:crypto'
import { ed25519 } from '@noble/curves/ed25519.js'

export const CLASSES = ['PUBLIC', 'DIRECT', 'GROUP', 'PROTOCOL', 'EVIDENCE', 'REQUEST', 'RESPONSE'] as const
export type MessageClass = (typeof CLASSES)[number]
const HEX64 = /^[0-9a-f]{64}$/
const SIG_HEX = /^[0-9a-fA-F]{128}$/
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

/**
 * Refusal words. CLASS, FIELD and CONTENT are section 6 steps 1-4.
 * DECODE, SMALL_ORDER, MIXED, SCALAR and EQUATION are section 5's own words,
 * in section 5's order (section 6 step 5). SIGNATURE is not a word of the
 * ratified text: it is carried from the previous implementation for exactly
 * one input the text does not name — a signature spelling that is not 128
 * hexadecimal characters, which cannot be decoded into the 64 bytes
 * section 5 runs on. See the reconciliation report.
 */
export type Refusal =
  | 'CLASS'
  | 'FIELD'
  | 'CONTENT'
  | 'DECODE'
  | 'SMALL_ORDER'
  | 'MIXED'
  | 'SCALAR'
  | 'EQUATION'
  | 'SIGNATURE'

export type OpenResult =
  | { match: true; hash: string }
  | { match: false; reason: Refusal }

/* ------------------------------------------------------------------ */
/* Section 4 — the preimage byte rule.                                 */
/* The encoder emits the exact bytes of the ratified section 4 or      */
/* refuses and emits nothing. A lone surrogate is not a string and     */
/* is refused. Unicode normalization is not chosen by the text: two    */
/* canonically equivalent strings remain two preimages.                */
/* ------------------------------------------------------------------ */

const KEY_ORDER = ['at', 'class', 'content_sha256', 'prev', 'to', 'v'] as const

function encodeString(value: string): string | null {
  let out = '"'
  for (const ch of value) {
    const cp = ch.codePointAt(0) as number
    if (cp >= 0xd800 && cp <= 0xdfff) return null
    switch (cp) {
      case 0x22: out += '\\"'; break
      case 0x5c: out += '\\\\'; break
      case 0x08: out += '\\b'; break
      case 0x09: out += '\\t'; break
      case 0x0a: out += '\\n'; break
      case 0x0c: out += '\\f'; break
      case 0x0d: out += '\\r'; break
      default:
        out += cp < 0x20 ? '\\u00' + cp.toString(16).padStart(2, '0') : ch
    }
  }
  return out + '"'
}

function encodePreimage(fields: MessageFields): string | null {
  if (fields.v !== '1') return null
  const parts: string[] = []
  for (const key of KEY_ORDER) {
    const value = fields[key]
    if (value === undefined) continue
    if (typeof value !== 'string') return null
    const k = encodeString(key)
    const v = encodeString(value)
    if (k === null || v === null) return null
    parts.push(k + ':' + v)
  }
  return '{' + parts.join(',') + '}'
}

export function contentHash(content: Uint8Array): string {
  return createHash('sha256').update(content).digest('hex')
}

/** The section 4 preimage bytes. Throws Error('FIELD') when section 4 refuses. */
export function preimage(fields: MessageFields): Uint8Array {
  const text = encodePreimage(fields)
  if (text === null) throw new Error('FIELD')
  return new TextEncoder().encode(text)
}

export function envelopeHash(fields: MessageFields): string {
  return createHash('sha256').update(preimage(fields)).digest('hex')
}

/* ------------------------------------------------------------------ */
/* Section 5 — the signature procedure, in its own order.              */
/* The small-order and torsion-free tests apply to the public key      */
/* only, never to R. The equation is the cofactored equation over      */
/* the received bytes.                                                 */
/* ------------------------------------------------------------------ */

const L = 2n ** 252n + 27742317777372353535851937790883648493n
const P_FIELD = 2n ** 255n - 19n

function leInt(bytes: Uint8Array): bigint {
  let n = 0n
  for (let i = bytes.length - 1; i >= 0; i--) n = (n << 8n) | BigInt(bytes[i])
  return n
}

type Point = ReturnType<typeof ed25519.Point.fromBytes>

/** 5.1's read: refuse unless y < p, the point is on the curve, and the
 *  encoding is canonical (x = 0 with the sign bit set is not). */
function decodeStrict(bytes: Uint8Array): Point | null {
  const y = leInt(bytes) & ((1n << 255n) - 1n)
  if (y >= P_FIELD) return null
  let pt: Point
  try {
    pt = ed25519.Point.fromBytes(bytes)
  } catch {
    return null
  }
  const sign = (bytes[31] & 0x80) !== 0
  if (pt.toAffine().x === 0n && sign) return null
  return pt
}

export type Section5Refusal = 'DECODE' | 'SMALL_ORDER' | 'MIXED' | 'SCALAR' | 'EQUATION'

/**
 * Section 5 run on the preimage bytes, the 64-byte signature and the
 * 32-byte public key. Returns the first refusal word, or null on a match.
 * A public key that is not 32 bytes cannot be read by 5.1: DECODE.
 * A signature that is not 64 bytes is a programming error, not a protocol
 * input — protocol inputs arrive as spellings and are gated in open().
 */
export function checkSignature(preimageBytes: Uint8Array, signature: Uint8Array, publicKey: Uint8Array): Section5Refusal | null {
  if (publicKey.length !== 32) return 'DECODE'
  if (signature.length !== 64) throw new RangeError('section 5 runs on a 64-byte signature')
  const A = decodeStrict(publicKey)
  if (!A) return 'DECODE' // 5.1
  if (A.isSmallOrder()) return 'SMALL_ORDER' // 5.2: [8]A is the identity
  if (!A.isTorsionFree()) return 'MIXED' // 5.3: [L]A is not the identity
  const S = leInt(signature.subarray(32, 64))
  if (S >= L) return 'SCALAR' // 5.4: the integer comparison, not a hex comparison
  const Rbytes = signature.subarray(0, 32)
  const R = decodeStrict(Rbytes)
  if (!R) return 'DECODE' // 5.5: R is read by 5.1's rule, and by no other test
  const kBytes = createHash('sha512').update(Rbytes).update(publicKey).update(preimageBytes).digest()
  const k = leInt(new Uint8Array(kBytes)) % L
  // A scalar reduced to 0 modulo L is the identity, not an error:
  // noble's multiply() refuses 0, so the zero case is named here.
  // (S = 0 reaches this line — 5.4 does not refuse it; the equation decides.)
  const IDENTITY: Point = decodeStrict(Uint8Array.from([1, ...new Array(31).fill(0)])) as Point
  const mulModL = (pt: Point, scalar: bigint): Point => (scalar === 0n ? IDENTITY : pt.multiply(scalar))
  const lhs = mulModL(ed25519.Point.BASE, (8n * S) % L)
  const rhs = R.multiply(8n).add(mulModL(A, (8n * k) % L))
  return lhs.equals(rhs) ? null : 'EQUATION' // 5.5: [8][S]B = [8]R + [8][k]A
}

/* ------------------------------------------------------------------ */
/* Section 6 — verification, steps in order.                           */
/* ------------------------------------------------------------------ */

/** Steps 1-3 (step 4's refusal is raised by the encoder in open/seal).
 *  The signature parameter is read only by Corrigendum 1's step-2 clause. */
function fieldsRefusal(fields: MessageFields, content: Uint8Array, signature?: string): Refusal | null {
  if (!CLASSES.includes(fields.class)) return 'CLASS'
  if (
    fields.v !== '1' ||
    typeof fields.to !== 'string' ||
    fields.to.length === 0 ||
    !HEX64.test(fields.content_sha256) ||
    !HEX64.test(fields.prev) ||
    (fields.at !== undefined && (typeof fields.at !== 'string' || fields.at.length === 0))
  ) {
    return 'FIELD'
  }
  // Corrigendum 1 (Founder act, 2026-11-09), section 6 step 2: a signature
  // spelling of 128 hexadecimal characters that contains an uppercase
  // character is refused as FIELD. A spelling that is not 128 hexadecimal
  // characters is not this clause's case; open() refuses it further down,
  // as SIGNATURE (carried) — its word remains a separate, open decision.
  if (typeof signature === 'string' && SIG_HEX.test(signature) && /[A-F]/.test(signature)) {
    return 'FIELD'
  }
  if (contentHash(content) !== fields.content_sha256) return 'CONTENT'
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
  const refused = fieldsRefusal(fields, content)
  if (refused) throw new Error(refused)
  // preimage() throws Error('FIELD') when section 4 refuses (step 4).
  // The implementation writes the signature lowercase (section 2).
  const signature = Buffer.from(ed25519.sign(preimage(fields), secret)).toString('hex')
  return { ...fields, signature }
}

export function open(envelope: Envelope, content: Uint8Array, publicKey: Uint8Array): OpenResult {
  // Only the six signed fields are read. Unknown fields are not signed
  // and must not be treated as authenticated (section 2).
  const fields: MessageFields = {
    v: envelope.v,
    class: envelope.class,
    to: envelope.to,
    content_sha256: envelope.content_sha256,
    prev: envelope.prev,
    ...(envelope.at === undefined ? {} : { at: envelope.at }),
  }
  const refused = fieldsRefusal(fields, content, envelope.signature)
  if (refused) return { match: false, reason: refused }
  const pre = encodePreimage(fields)
  if (pre === null) return { match: false, reason: 'FIELD' } // step 4
  const preimageBytes = new TextEncoder().encode(pre)
  const signature = envelope.signature
  // A spelling that is not 128 hex characters cannot be decoded into the
  // 64 bytes section 5 runs on: SIGNATURE (carried). An uppercase spelling
  // never reaches this line: Corrigendum 1 refuses it as FIELD at step 2.
  if (typeof signature !== 'string' || !SIG_HEX.test(signature)) {
    return { match: false, reason: 'SIGNATURE' }
  }
  const raw = Uint8Array.from(Buffer.from(signature, 'hex'))
  const refusal = checkSignature(preimageBytes, raw, publicKey)
  if (refusal) return { match: false, reason: refusal } // step 5: section 5's word
  return { match: true, hash: createHash('sha256').update(preimageBytes).digest('hex') } // step 6
}

export type MessageLog = { tip: string; hashes: string[] }

export function emptyLog(): MessageLog {
  return { tip: GENESIS, hashes: [] }
}

/** Accepts the next envelope only when its prev is this log's tip and the signature matches. */
export function append(log: MessageLog, envelope: Envelope, content: Uint8Array, publicKey: Uint8Array): MessageLog | { match: false; reason: Refusal | 'PREV' } {
  if (envelope.prev !== log.tip) return { match: false, reason: 'PREV' }
  const opened = open(envelope, content, publicKey)
  if (!opened.match) return opened
  return { tip: opened.hash, hashes: [...log.hashes, opened.hash] }
}
