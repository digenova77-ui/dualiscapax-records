/** One signature check. A match is these bytes under this public key. It is not a seat. */

import { ed25519 } from '@noble/curves/ed25519.js'
import { secp256k1 } from '@noble/curves/secp256k1.js'
import { nodeCrypto, type PublicKey } from './node-crypto.ts'

export type PublicSig =
  | { crv: 'Ed25519'; raw: Uint8Array }
  | { crv: 'P-256' | 'P-384'; x: string; y: string; hash: 'sha256' | 'sha384' }
  | { crv: 'secp256k1'; raw: Uint8Array }

export function ed25519Point(bytes: Uint8Array): boolean {
  if (bytes.length !== 32) return false
  try {
    const point = ed25519.Point.fromBytes(bytes, false)
    return point.isTorsionFree() && !point.isSmallOrder()
  } catch {
    return false
  }
}

export function ed25519Raw(publicKey: PublicKey): Uint8Array | null {
  if (publicKey.asymmetricKeyType !== 'ed25519') return null
  try {
    const jwk = publicKey.export({ format: 'jwk' })
    if (jwk.crv !== 'Ed25519' || typeof jwk.x !== 'string') return null
    const raw = Buffer.from(jwk.x, 'base64url')
    return raw.length === 32 ? new Uint8Array(raw) : null
  } catch {
    return null
  }
}

const ORDER = {
  'P-256': 0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551n,
  'P-384': 0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973n,
} as const

const FIELD = {
  'P-256': {
    p: 0xffffffff00000001000000000000000000000000ffffffffffffffffffffffffn,
    b: 0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604bn,
    wide: 32,
  },
  'P-384': {
    p: 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffffn,
    b: 0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aefn,
    wide: 48,
  },
} as const

function fieldCoord(text: string, wide: number, p: bigint): bigint | null {
  const raw = Buffer.from(text, 'base64url')
  if (raw.length !== wide || raw.toString('base64url') !== text) return null
  const n = BigInt(`0x${raw.toString('hex')}`)
  return n < p ? n : null
}

/** One spelling of a NIST point. The coordinate is the full field width, and it is on the curve. */
export function ecPoint(crv: 'P-256' | 'P-384', x: string, y: string): boolean {
  if (typeof x !== 'string' || typeof y !== 'string' || x.length === 0 || y.length === 0) return false
  const field = FIELD[crv]
  const X = fieldCoord(x, field.wide, field.p)
  const Y = fieldCoord(y, field.wide, field.p)
  if (X == null || Y == null) return false
  const left = (Y * Y) % field.p
  const right = ((((X * X) % field.p) * X) + (field.p - 3n) * X + field.b) % field.p
  return left === right
}

function ecdsaLowS(signature: Uint8Array, half: number, order: bigint): boolean {
  const s = BigInt(`0x${Buffer.from(signature.subarray(half)).toString('hex')}`)
  return s > 0n && s <= order / 2n
}
/** True only when this public key signed this exact byte string.
 * secp256k1 takes the 32-byte digest the caller already chose.
 * Every ECDSA signature must use the low S. The flipped form is refused.
 */
export function signatureHolds(key: PublicSig, message: Uint8Array, signature: Uint8Array): boolean {
  if (!(message instanceof Uint8Array) || !(signature instanceof Uint8Array)) return false
  try {
    if (key.crv === 'secp256k1') {
      if (key.raw.length !== 33 || message.length !== 32 || signature.length !== 64) return false
      return secp256k1.verify(signature, message, key.raw, { prehash: false, lowS: true })
    }
    if (key.crv === 'Ed25519') {
      if (!ed25519Point(key.raw) || signature.length !== 64 || !ed25519Point(signature.subarray(0, 32))) return false
      return ed25519.verify(signature, message, key.raw, { zip215: false })
    }
    const hash = key.crv === 'P-256' ? 'sha256' : 'sha384'
    const wide = key.crv === 'P-256' ? 64 : 96
    if (key.hash !== hash || signature.length !== wide || !ecPoint(key.crv, key.x, key.y)) return false
    if (!ecdsaLowS(signature, wide / 2, ORDER[key.crv])) return false
    const crypto = nodeCrypto()
    if (!crypto) return false
    const pub = crypto.createPublicKey({
      key: { kty: 'EC', crv: key.crv, x: key.x, y: key.y },
      format: 'jwk',
    })
    return crypto.verify(hash, message, { key: pub, dsaEncoding: 'ieee-p1363' }, signature)
  } catch {
    return false
  }
}
