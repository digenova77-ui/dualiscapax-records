/**
 * The envelope proves a key signed these bytes. It does not authorize.
 *
 * Reconciled suite: the two pre-ratification expectations that named
 * SIGNATURE for a signature failure now name section 5's word EQUATION,
 * as the ratified text requires (section 6 step 5). All other original
 * expectations are unchanged. The conformance block is new.
 */
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { describe, it } from 'node:test'
import { ed25519 } from '@noble/curves/ed25519.js'
import { append, checkSignature, contentHash, emptyLog, envelopeHash, open, preimage, seal, GENESIS, type Envelope } from './message.ts'

const text = new TextEncoder()
const secret = ed25519.utils.randomSecretKey()
const other = ed25519.utils.randomSecretKey()
const publicKey = ed25519.getPublicKey(secret)
const content = text.encode('the bytes are the message')

const hex = (s: string) => Uint8Array.from(Buffer.from(s, 'hex'))
const toHex = (b: Uint8Array) => Buffer.from(b).toString('hex')
const leInt = (bytes: Uint8Array) => {
  let n = 0n
  for (let i = bytes.length - 1; i >= 0; i--) n = (n << 8n) | BigInt(bytes[i])
  return n
}
const intLe32 = (n: bigint) => {
  const b = new Uint8Array(32)
  let v = n
  for (let i = 0; i < 32; i++) {
    b[i] = Number(v & 255n)
    v >>= 8n
  }
  return b
}
const L = 2n ** 252n + 27742317777372353535851937790883648493n

function envelopeFor(c: Uint8Array, signatureHex: string): Envelope {
  return { v: '1', class: 'EVIDENCE', to: 'exhibit', content_sha256: contentHash(c), prev: GENESIS, signature: signatureHex }
}

describe('internal message envelope', () => {
  it('opens only for the key that signed the exact content', () => {
    const envelope = seal(content, { class: 'DIRECT', to: 'seat-b', prev: '0'.repeat(64) }, secret)
    const opened = open(envelope, content, publicKey)
    assert.equal(opened.match, true)
    if (!opened.match) return
    assert.equal(opened.hash, envelopeHash(envelope))
    assert.equal('authorized' in opened, false)
    assert.equal(open(envelope, text.encode('other bytes'), publicKey).match, false)
    assert.deepEqual(open(envelope, content, ed25519.getPublicKey(other)), { match: false, reason: 'EQUATION' })
    const tampered = { ...envelope, class: 'REQUEST' as const }
    assert.deepEqual(open(tampered, content, publicKey), { match: false, reason: 'EQUATION' })
  })

  it('keeps a missing timestamp different from an empty one, and chains on the envelope hash', () => {
    const first = seal(content, { class: 'PROTOCOL', to: 'internal', prev: '0'.repeat(64) }, secret)
    assert.equal('at' in first, false)
    assert.throws(() => seal(content, { class: 'PROTOCOL', to: 'internal', prev: '0'.repeat(64), at: '' }, secret))
    const dated = seal(content, { class: 'PROTOCOL', to: 'internal', prev: '0'.repeat(64), at: '2026-11-09T15:16:00-05:00' }, secret)
    assert.notEqual(envelopeHash(first), envelopeHash(dated))
    const secondContent = text.encode('reply')
    const second = seal(secondContent, { class: 'RESPONSE', to: 'seat-a', prev: envelopeHash(first) }, other)
    let log = emptyLog()
    const next = append(log, first, content, publicKey)
    assert.equal('tip' in next, true)
    if (!('tip' in next)) return
    log = next
    assert.deepEqual(append(log, second, secondContent, publicKey), { match: false, reason: 'EQUATION' })
    const accepted = append(log, second, secondContent, ed25519.getPublicKey(other))
    assert.equal('tip' in accepted && accepted.hashes.length, 2)
  })

  it('does not execute a request by opening it', () => {
    const request = seal(text.encode('do the thing'), { class: 'REQUEST', to: 'worker', prev: '0'.repeat(64) }, secret)
    const opened = open(request, text.encode('do the thing'), publicKey)
    assert.equal(opened.match, true)
    assert.equal(JSON.stringify(opened).includes('execut'), false)
  })
})

describe('ratified text conformance', () => {
  it('reproduces the section 4 worked example: 202 bytes, digest 0f79997c…', () => {
    const fields = {
      v: '1' as const,
      class: 'PUBLIC' as const,
      to: 'a"b\\c\nd',
      content_sha256: '1'.repeat(64),
      prev: '0'.repeat(64),
    }
    assert.equal(preimage(fields).length, 202)
    assert.equal(envelopeHash(fields), '0f79997cc33a489534563dfe7b0167ac4cd30c025740162469dbb296a76e9729')
  })

  it('section 5 answers every exhibit vector with the decided word', () => {
    const HONEST_PUB = 'bb5c672482b0dcca91a21a4ed63b15afde8aa1378da72cd01b349589d6e7dd6a'
    const HONEST_SIG = 'a487c67a23ff703f26c230124939f9335f002b47e94a1170585d9a109cfcfe74558d8c253a70d0001fda53186a669336a18fdba2d5f4fb781f406518e4c9d800'
    const SPLUSL_SIG = 'a487c67a23ff703f26c230124939f9335f002b47e94a1170585d9a109cfcfe744261828254d3e258f5764bbb4860724ba18fdba2d5f4fb781f406518e4c9d810'
    const LOW_SIG = 'd4b4f5784868c3020403246717ec169ff79e26608ea126a1ab69ee77d1b167120300000000000000000000000000000000000000000000000000000000000000'
    const ID_PUB = '0100000000000000000000000000000000000000000000000000000000000000'
    const ID_PUB_NONCANON = '0100000000000000000000000000000000000000000000000000000000000080'
    const MIXED_PUB = 'da99e28ba529cdde35a25fba9059e78ecaee239f99755b9b1aa4f65df00803e2'
    const MIXED_SIG = 'c9a3f86aae465f0e56513864510f3997561fa2c9e85ea21dc2292309f3cd6022711c5ee1d30c1a8c1522b474b4b339811c68c49419385f8d81e3e974b2b89a0c'
    assert.equal(checkSignature(text.encode('dccp-honest'), hex(HONEST_SIG), hex(HONEST_PUB)), null)
    assert.equal(checkSignature(text.encode('dccp-honest'), hex(HONEST_SIG.slice(0, -2) + '01'), hex(HONEST_PUB)), 'EQUATION')
    assert.equal(checkSignature(text.encode('dccp-honest'), hex(SPLUSL_SIG), hex(HONEST_PUB)), 'SCALAR')
    assert.equal(checkSignature(text.encode('dccp-low-order'), hex(LOW_SIG), hex(ID_PUB)), 'SMALL_ORDER')
    assert.equal(checkSignature(text.encode('dccp-low-order'), hex(LOW_SIG), hex(ID_PUB_NONCANON)), 'DECODE')
    assert.equal(checkSignature(text.encode('dccp-mixed'), hex(MIXED_SIG), hex(MIXED_PUB)), 'MIXED')
  })

  it('section 5 does not gate R: a torsion-bearing R that satisfies the equation passes', () => {
    const A_BYTES = hex('5866666666666666666666666666666666666666666666666666666666666666')
    const T = ed25519.Point.fromBytes(hex('26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05'))
    const Rmixed = ed25519.Point.BASE.multiply(2n).add(T)
    assert.equal(Rmixed.isTorsionFree(), false)
    const Rbytes = Rmixed.toBytes()
    const msg = text.encode('dccp-mixed-r')
    const k = leInt(new Uint8Array(createHash('sha512').update(Rbytes).update(A_BYTES).update(msg).digest())) % L
    const sig = Uint8Array.from([...Rbytes, ...intLe32((2n + k) % L)])
    assert.equal(checkSignature(msg, sig, A_BYTES), null)
  })

  it('open() returns section 5 words end to end', () => {
    const sealed = seal(content, { class: 'DIRECT', to: 'seat-b', prev: GENESIS }, secret)
    const sigBytes = hex(sealed.signature)
    const sPlusL = Uint8Array.from([...sigBytes.subarray(0, 32), ...intLe32(leInt(sigBytes.subarray(32, 64)) + L)])
    assert.deepEqual(open({ ...sealed, signature: toHex(sPlusL) }, content, publicKey), { match: false, reason: 'SCALAR' })
    const sZero = Uint8Array.from([...sigBytes.subarray(0, 32), ...new Uint8Array(32)])
    // S = 0 is inside the range (5.4 does not refuse it); the equation decides.
    assert.deepEqual(open({ ...sealed, signature: toHex(sZero) }, content, publicKey), { match: false, reason: 'EQUATION' })
    const LOW_SIG = 'd4b4f5784868c3020403246717ec169ff79e26608ea126a1ab69ee77d1b167120300000000000000000000000000000000000000000000000000000000000000'
    const ID_PUB = '0100000000000000000000000000000000000000000000000000000000000000'
    const ID_PUB_NONCANON = '0100000000000000000000000000000000000000000000000000000000000080'
    const MIXED_PUB = 'da99e28ba529cdde35a25fba9059e78ecaee239f99755b9b1aa4f65df00803e2'
    const MIXED_SIG = 'c9a3f86aae465f0e56513864510f3997561fa2c9e85ea21dc2292309f3cd6022711c5ee1d30c1a8c1522b474b4b339811c68c49419385f8d81e3e974b2b89a0c'
    assert.deepEqual(open(envelopeFor(content, LOW_SIG), content, hex(ID_PUB)), { match: false, reason: 'SMALL_ORDER' })
    assert.deepEqual(open(envelopeFor(content, LOW_SIG), content, hex(ID_PUB_NONCANON)), { match: false, reason: 'DECODE' })
    assert.deepEqual(open(envelopeFor(content, MIXED_SIG), content, hex(MIXED_PUB)), { match: false, reason: 'MIXED' })
  })

  it('section 6 refuses in its own order: CLASS, then FIELD, then CONTENT', () => {
    const sealed = seal(content, { class: 'DIRECT', to: 'seat-b', prev: GENESIS }, secret)
    const badClass = { ...sealed, class: 'NOPE' as never }
    assert.deepEqual(open(badClass, text.encode('other bytes'), publicKey), { match: false, reason: 'CLASS' })
    const emptyTo = { ...sealed, to: '' }
    assert.deepEqual(open(emptyTo, text.encode('other bytes'), publicKey), { match: false, reason: 'FIELD' })
    assert.deepEqual(open(sealed, text.encode('other bytes'), publicKey), { match: false, reason: 'CONTENT' })
  })

  it('section 4 refusal is FIELD in open() and an error in seal()/preimage()', () => {
    const fields = { v: '1' as const, class: 'PUBLIC' as const, to: 'bad\uD800', content_sha256: '1'.repeat(64), prev: '0'.repeat(64)}
    assert.throws(() => preimage(fields), /FIELD/)
    assert.throws(() => seal(content, { class: 'PUBLIC', to: 'bad\uD800', prev: GENESIS }, secret), /FIELD/)
    const env: Envelope = { v: '1', class: 'PUBLIC', to: 'bad\uD800', content_sha256: contentHash(content), prev: GENESIS, signature: '00'.repeat(64) }
    assert.deepEqual(open(env, content, publicKey), { match: false, reason: 'FIELD' })
  })

  it('signature spelling: uppercase hex opens the same bytes; a non-hex spelling is the carried SIGNATURE', () => {
    const sealed = seal(content, { class: 'DIRECT', to: 'seat-b', prev: GENESIS }, secret)
    const upper = open({ ...sealed, signature: sealed.signature.toUpperCase() }, content, publicKey)
    assert.equal(upper.match, true)
    if (upper.match) assert.equal(upper.hash, envelopeHash(sealed))
    assert.deepEqual(open({ ...sealed, signature: 'ab'.repeat(10) }, content, publicKey), { match: false, reason: 'SIGNATURE' })
    assert.deepEqual(open({ ...sealed, signature: 'zz'.repeat(64) }, content, publicKey), { match: false, reason: 'SIGNATURE' })
  })
})
