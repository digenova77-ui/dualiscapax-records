/**
 * The envelope proves a key signed these bytes. It does not authorize.
 */
import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { ed25519 } from '@noble/curves/ed25519.js'
import { append, emptyLog, envelopeHash, open, seal } from './message.ts'

const text = new TextEncoder()
const secret = ed25519.utils.randomSecretKey()
const other = ed25519.utils.randomSecretKey()
const publicKey = ed25519.getPublicKey(secret)
const content = text.encode('the bytes are the message')

describe('internal message envelope', () => {
  it('opens only for the key that signed the exact content', () => {
    const envelope = seal(content, { class: 'DIRECT', to: 'seat-b', prev: '0'.repeat(64) }, secret)
    const opened = open(envelope, content, publicKey)
    assert.equal(opened.match, true)
    if (!opened.match) return
    assert.equal(opened.hash, envelopeHash(envelope))
    assert.equal('authorized' in opened, false)
    assert.equal(open(envelope, text.encode('other bytes'), publicKey).match, false)
    assert.equal(open(envelope, content, ed25519.getPublicKey(other)).match, false)
    const tampered = { ...envelope, class: 'REQUEST' as const }
    assert.deepEqual(open(tampered, content, publicKey), { match: false, reason: 'SIGNATURE' })
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
    assert.deepEqual(append(log, second, secondContent, publicKey), { match: false, reason: 'SIGNATURE' })
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
