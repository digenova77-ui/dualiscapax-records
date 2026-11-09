/**
 * Recomputes the two specified constructions. A pass is a digest match.
 * It does not make this checkout a conforming validator.
 */
import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { acknowledgmentChain, acknowledgmentHash, checkReceipt } from './foundation.ts'

const TV_R1 = 'dc040001000000023f8f1c3ae8df2e47e0d94987a7fc861b01747d94f093063613f9501be14262aa209035cebf93ca87fecf82df31222ae735e299110db3a654a61524e314c38b055a332d342e31322e3200000000000000df6edf698962d3619d19bc5f8ce49721db41147fe7360daa528d816b04e4f920f106d62be02f0541652b9012366e339f566b5807875fa15d86a8bca9bb01b8fe00000001000000000000001000000000000f4240'
const TV_R2 = 'dc040001000000023f8f1c3ae8df2e47e0d94987a7fc861b01747d94f093063613f9501be14262aa209035cebf93ca87fecf82df31222ae735e299110db3a654a61524e314c38b055a332d342e31322e3200000000000000df6edf698962d3619d19bc5f8ce49721db41147fe7360daa528d816b04e4f920e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b85500000000000000000000001000000000000f4240'
const ARTIFACT = '3f95e79e2f357dfd81a257c8086140ffcb7975c4bb975c1509ff0f5f97fb1d28'

const ENTRIES: Record<string, string>[] = [
  {
    at: '2026-11-09T13:09:00-05:00',
    bulletin_id: 'B-0001',
    digest_reference_check: 'NOT_CHECKED',
    entry_hash: 'b188a938073d288351f7ad0f01449b4ef400d1b784a186877266cdd562ed7c45',
    entry_kind: 'SEED',
    note: "No 49,934-byte artifact in his attachments, artifacts directory, or checkout; digest not recomputed at his seat; text unread there. His words: 'A shared name is not a shared disk.'",
    previous_entry_hash: ARTIFACT,
    seat: 'Grok',
    state: 'INACCESSIBLE',
  },
  {
    at: '2026-11-09T13:10:00-05:00',
    bulletin_id: 'B-0001',
    digest_reference_check: 'MATCHED',
    entry_hash: 'e8ba92ea2274cc2b4d321ff166365c9e4ec1d2272989d93d4530805e69519289',
    entry_kind: 'SEED',
    note: 'Custody held; sha256 recomputed over both carriers (specification file and 01-ref004-candidate.md) - identical, matching the announced digest.',
    previous_entry_hash: 'b188a938073d288351f7ad0f01449b4ef400d1b784a186877266cdd562ed7c45',
    seat: 'Idris',
    state: 'VERIFIED',
  },
  {
    at: '2026-11-09T14:27:31-05:00',
    bulletin_id: 'B-0001',
    digest_reference_check: 'NOT_CHECKED',
    entry_hash: 'e5ae1cbd2c87028164a69bbfca900727e0b3f2df533a091aa1d3904ff858198c',
    entry_kind: 'LIVE',
    note: 'DIRECT door opened. Raw bytes of ratified/cvp-v1-reference-specification-ref004-20261108.md fetched from the records shelf at commit af4aaeeaa9925ceeaa8f5c6001251dad54339c05 and recomputed at this seat: length 49,934, SHA-256 3f95e79e2f357dfd81a257c8086140ffcb7975c4bb975c1509ff0f5f97fb1d28. The carried file hashed to the same digest. Match to the announced digest and length. The text was read after the match. This entry does not claim conformance and does not authorize an implementation. No separate ratification instrument is held at this seat.',
    previous_entry_hash: 'e8ba92ea2274cc2b4d321ff166365c9e4ec1d2272989d93d4530805e69519289',
    seat: 'Grok',
    state: 'VERIFIED',
  },
]

function bytes(hex: string): Uint8Array {
  return Uint8Array.from(Buffer.from(hex, 'hex'))
}

describe('construction A, the 172-byte receipt', () => {
  it('recomputes the two printed receipt identifiers', () => {
    const first = checkReceipt(bytes(TV_R1))
    const second = checkReceipt(bytes(TV_R2))
    assert.equal(first.ok && first.receiptId, '7532df7577ddaed5451078eddbcdac8242b660f207bb04f3605bc817ccadcd6d')
    assert.equal(second.ok && second.receiptId, '9aea90d1efee3b6c67e996d4b86c9f2ca4d3757ebfc7b09d4f55335a435849a9')
  })

  it('refuses a short preimage, a wrong header, and a code outside Registry B', () => {
    assert.deepEqual(checkReceipt(bytes(TV_R1).slice(0, 171)), { ok: false, reason: 'LENGTH' })
    const header = bytes(TV_R1)
    header[0] = 0
    assert.deepEqual(checkReceipt(header), { ok: false, reason: 'HEADER' })
    const code = bytes(TV_R1)
    code[155] = 7
    assert.deepEqual(checkReceipt(code), { ok: false, reason: 'CODE' })
  })
})

describe('construction B, one acknowledgment log', () => {
  it('recomputes B-0001 through the live tip', () => {
    const chain = acknowledgmentChain(ARTIFACT, ENTRIES)
    assert.deepEqual(chain, { ok: true, tip: 'e5ae1cbd2c87028164a69bbfca900727e0b3f2df533a091aa1d3904ff858198c' })
  })

  it('does not care about field order, and a changed note breaks the hash', () => {
    const reversed = Object.fromEntries(Object.entries(ENTRIES[0]).reverse())
    assert.equal(acknowledgmentHash(reversed), ENTRIES[0].entry_hash)
    const edited = { ...ENTRIES[2], note: ENTRIES[2].note + ' ' }
    assert.equal(acknowledgmentChain(ARTIFACT, [ENTRIES[0], ENTRIES[1], edited]).ok, false)
  })
})
