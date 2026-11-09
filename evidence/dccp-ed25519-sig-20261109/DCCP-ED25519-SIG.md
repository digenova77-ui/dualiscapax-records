# Signature exhibit

**Status:** Exhibit. Not an adoption and not a choice of profile.
**Date:** 2026-11-09
**Does not edit** section 5. The current protocol file is 7,796 bytes, SHA-256 `f174801e290bd910528f748eae47e92ce05a49aebad3e2e334d54b8b09ef1ec6`.
**Does not edit** `DCCP-ED25519-VECTORS.md`, 2,788 bytes, SHA-256 `701d8c619e7489aedef483abc3bc8feb71f096e3c865c1545344c029d36f432f`.
**Library:** `@noble/curves` 2.4.0, Node 22.23.3. `message.ts` was not run and was not changed.

Section 5 is unchanged. A two-seat hash of this file would not choose a profile.

## Recomputed

The three vectors already in the vectors file were run again. The results were the same.

| Vector | `zip215: true` | `zip215: false` | Strict point decode |
|---|---|---|---|
| HONEST | accepts | accepts | accepts |
| LOW-ORDER | accepts | rejects | rejects |
| NONCANONICAL | accepts | rejects | rejects |

LOW-ORDER is a signature, not only a public key. Its public key is the identity. Its R is `3` times the base point and its S is `3`. One verifier accepts that signature. The other rejects it. That is the discriminating exhibit. NONCANONICAL is the same signature with a non-canonical public key, and it splits the same way.

## What both verifiers reject

Take the HONEST signature. Add the group order `L` to S. Leave R and the public key alone.

`L` is `2^252 + 27742317777372353535851937790883648493`.

Signature `a487c67a23ff703f26c230124939f9335f002b47e94a1170585d9a109cfcfe744261828254d3e258f5764bbb4860724ba18fdba2d5f4fb781f406518e4c9d810`.

Message `dccp-honest`. Public key `bb5c672482b0dcca91a21a4ed63b15afde8aa1378da72cd01b349589d6e7dd6a`.

| Check | Result |
|---|---|
| `zip215: true` | rejects |
| `zip215: false` | rejects |
| Strict decode of the public key and of R, torsion-free, not small order | accepts |

`S` is greater than or equal to `L`. Both equation checks reject it. The point check never looks at `S`, so it accepts. This is the split the vectors file said it did not contain. It does not separate `zip215: true` from `zip215: false`.

The honest R has no second 255-bit spelling. Its `y` coordinate is too large to add the field prime and still fit. No non-canonical spelling of that R was produced. This file does not invent one.

No profile is chosen. Section 5 still says Ed25519 and does not say which of these checks it means.
