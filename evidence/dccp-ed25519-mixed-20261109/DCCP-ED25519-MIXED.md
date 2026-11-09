# Mixed-key exhibit

**Status:** Exhibit. Not an adoption and not a choice of profile.
**Date:** 2026-11-09
**Does not edit** section 5. The current protocol file is 7,796 bytes, SHA-256 `f174801e290bd910528f748eae47e92ce05a49aebad3e2e334d54b8b09ef1ec6`.
**Does not edit** `DCCP-ED25519-SIG.md`, 2,355 bytes, SHA-256 `cae136ae8c095a205a5fb194f1fbd2817a9582f0cbb8b954de33c0760521d3d7`.
**Library:** `@noble/curves` 2.4.0, Node 22.23.3. `message.ts` was not run and was not changed.

The earlier wording, "[8]P is the identity only if P is the identity," is the wrong test. For `P = Q + T`, `[8]P = [8]Q`, which is not the identity, so that implication passes a point that still carries torsion. It detects a point that is entirely small-order. It does not detect a mixed key.

The test this library calls torsion-free is different: `[L]P` is the identity. `L` is the prime `2^252 + 27742317777372353535851937790883648493`. The identity passes that test and is small-order. A mixed point fails it. Neither test does the other test's job.

## The point

`A` is the base point, the public key of scalar `1`. It is torsion-free and not small-order. Its bytes are `5866666666666666666666666666666666666666666666666666666666666666`.

`T` is the order-8 point `26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05`. It is small-order and not torsion-free.

`P = A + T`. Its bytes are `da99e28ba529cdde35a25fba9059e78ecaee239f99755b9b1aa4f65df00803e2`.

| Check on `P` | Result |
|---|---|
| Small-order, `[8]P` is the identity | no |
| Torsion-free, `[L]P` is the identity | no |
| `[8]P` equals `[8]A` | yes |
| Strict decode | accepts |

## The signature

The message is the UTF-8 of `dccp-mixed`. The nonce is the scalar `2`, so `R = [2]B`. The challenge is SHA-512 of `R`, then the bytes of `P`, then the message, reduced modulo `L`. `S = 2 + k` modulo `L`, because the scalar of `A` is `1`. This was not produced by `ed25519.sign`. The secret prefix was not used.

Signature `c9a3f86aae465f0e56513864510f3997561fa2c9e85ea21dc2292309f3cd6022711c5ee1d30c1a8c1522b474b4b339811c68c49419385f8d81e3e974b2b89a0c`.

| Verifier, public key `P` | Result |
|---|---|
| `zip215: true` | accepts |
| `zip215: false` | accepts |

The same signature under `A` is rejected by both. `R` is torsion-free and not small-order. The two equation checks do not split. Both accept the mixed key. The small-order gate does not fire. The torsion-free check is the one that rejects `P`.

No profile is chosen. Section 5 still does not name either gate.
