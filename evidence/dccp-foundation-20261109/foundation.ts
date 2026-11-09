/**
 * Checkers for the two constructions that have already been specified.
 * A match is a recomputed digest. It is not a signature, not identity,
 * and not permission. This module does not authorize anything.
 */
import { createHash } from 'node:crypto'

const RECEIPT_LENGTH = 172
const CODES = new Set([0, 1, 2, 3, 4, 5, 6])

export type ReceiptRefusal = 'LENGTH' | 'HEADER' | 'VERSION' | 'CODE'

export function checkReceipt(preimage: Uint8Array): { ok: true; receiptId: string } | { ok: false; reason: ReceiptRefusal } {
  if (preimage.length !== RECEIPT_LENGTH) return { ok: false, reason: 'LENGTH' }
  if (preimage[0] !== 0xdc || preimage[1] !== 0x04) return { ok: false, reason: 'HEADER' }
  const view = new DataView(preimage.buffer, preimage.byteOffset, preimage.byteLength)
  if (view.getUint16(2) !== 1 || view.getUint32(4) !== 2) return { ok: false, reason: 'VERSION' }
  if (!CODES.has(view.getUint32(152))) return { ok: false, reason: 'CODE' }
  return { ok: true, receiptId: createHash('sha256').update(preimage).digest('hex') }
}

export function acknowledgmentHash(entry: Record<string, string>): string {
  const body: Record<string, string> = {}
  for (const key of Object.keys(entry).sort()) {
    if (key !== 'entry_hash') body[key] = entry[key]
  }
  return createHash('sha256').update(JSON.stringify(body), 'utf8').digest('hex')
}

export function acknowledgmentChain(artifact: string, entries: readonly Record<string, string>[]): { ok: true; tip: string } | { ok: false; reason: 'LINK' | 'HASH'; index: number } {
  let previous = artifact
  for (let index = 0; index < entries.length; index++) {
    const entry = entries[index]
    if (entry.previous_entry_hash !== previous) return { ok: false, reason: 'LINK', index }
    if (acknowledgmentHash(entry) !== entry.entry_hash) return { ok: false, reason: 'HASH', index }
    previous = entry.entry_hash
  }
  return { ok: true, tip: previous }
}
