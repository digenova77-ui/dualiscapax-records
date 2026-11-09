/** Node's crypto, loaded only when a function asks. The browser module can be imported. */

export type PublicKey = {
  asymmetricKeyType?: string
  export: (options: object) => { crv?: string; x?: string; toString: (encoding: string) => string }
}

type Hash = {
  update: (data: string | Uint8Array, encoding?: string) => Hash
  digest: (encoding: 'hex') => string
}

type CryptoModule = {
  createHash: (algorithm: 'sha256') => Hash
  createPublicKey: (key: unknown) => PublicKey
  verify: (algorithm: string, data: Uint8Array, key: { key: unknown; dsaEncoding: 'ieee-p1363' }, signature: Uint8Array) => boolean
}

export function nodeCrypto(): CryptoModule | null {
  const proc = globalThis.process as { getBuiltinModule?: (name: string) => Partial<CryptoModule> | undefined } | undefined
  const crypto = proc?.getBuiltinModule?.('node:crypto')
  if (!crypto?.createHash || !crypto.createPublicKey || !crypto.verify) return null
  return crypto as CryptoModule
}

type BrowserDigest = {
  digest: (algorithm: 'SHA-256', data: Uint8Array) => Promise<ArrayBuffer>
}

/** SHA-256 in the browser. A missing subtle, or a hex string that is not 64 lowercase characters, is not a match. */
export async function browserDigestIs(bytes: Uint8Array, expected: string, subtle: BrowserDigest | null = globalThis.crypto?.subtle ?? null): Promise<boolean> {
  if (!/^[0-9a-f]{64}$/.test(expected)) return false
  if (!subtle) return false
  const digest = new Uint8Array(await subtle.digest('SHA-256', bytes))
  let hex = ''
  for (const byte of digest) hex += byte.toString(16).padStart(2, '0')
  return hex === expected
}
