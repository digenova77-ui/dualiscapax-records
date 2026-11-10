# Section 5 draft

**Status:** Draft of a replacement. Not an adoption. Not a profile selected by a library name.
**Date:** 2026-11-09
**Does not edit** `DCCP-PROTOCOL.md`, 7,796 bytes, SHA-256 `f174801e290bd910528f748eae47e92ce05a49aebad3e2e334d54b8b09ef1ec6`. Section 5 of that file still says Ed25519 and does not name these procedures.
**Does not change** `message.ts`. That file still returns `SIGNATURE` for every failure below.
**Exhibits already run:** `DCCP-ED25519-SIG.md`, SHA-256 `cae136ae8c095a205a5fb194f1fbd2817a9582f0cbb8b954de33c0760521d3d7`. `DCCP-ED25519-MIXED.md`, SHA-256 `22d426c881e04b9dace8a262c80e67adf9549ea434c9ec8fa0856791f73d1694`.

`L` is `2^252 + 27742317777372353535851937790883648493`. The field prime `p` is `2^255 - 19`. The cofactor is 8. `B` is the base point.

This draft does not apply the small-order test or the torsion-free test to `R`. Those two tests are specified for the public key only.

## 5. Signature

The signature is 64 bytes. The first 32 are `R`. The last 32 are `S`. The checks run in this order and stop at the first refusal. A refusal has no message identity.

### 5.1 Decode the public key

Read the 32-byte public key as an Ed25519 point. Let `y` be the integer of the low 255 bits, little-endian, and let the top bit be the sign of `x`. Refuse `DECODE` unless `y < p` and the point is on the curve. A non-canonical encoding is `DECODE`. It is not a small-order result and it is not a mixed-point result.

### 5.2 Small-order

Multiply the decoded public key by 8. Refuse `SMALL_ORDER` when the result is the identity. The identity key is this refusal. A mixed key is not.

### 5.3 Torsion-free

Multiply the decoded public key by `L`. Refuse `MIXED` when the result is not the identity. A mixed key is this refusal. The identity is not, because `[L]` of the identity is the identity, and the identity already refused at 5.2.

### 5.4 Scalar

Read the last 32 bytes of the signature as a little-endian integer `S`. The low byte is the first of those 32. Refuse `SCALAR` when `S >= L`. This comparison is on the integer. It is not a comparison of hex strings. `S = 0` is inside the range and is not refused here.

### 5.5 Equation

Read the first 32 bytes as a point by the rule in 5.1. If that read refuses, the result is `DECODE`. The small-order test and the torsion-free test are not applied to `R`.

Let `k` be SHA-512 of the `R` bytes, then the public-key bytes, then the preimage bytes, reduced modulo `L`. The hash input is the received bytes, not a re-encoding of the decoded points.

Refuse `EQUATION` unless `[8][S]B = [8]R + [8][k]A`. Otherwise the signature check passes. The result is a match under this public key. It is not a person, a clock, a unique previous message, or a permission.

A signature that passes under a different public key is a different check. It does not make this check pass.

## What the exhibits do under this draft

| Input | First refusal |
|---|---|
| Honest signature, message `dccp-honest`, key `bb5c6724…` | none |
| That signature with the last byte changed from `00` to `01` | `EQUATION` |
| `S + L` on that honest signature | `SCALAR` |
| LOW-ORDER, identity public key | `SMALL_ORDER` |
| Mixed key `da99e28b…` | `MIXED` |

Both `zip215: true` and `zip215: false` accept the mixed key. This draft does not. That is the change.

## 6. Verification, step 5 only

The other steps of section 6 are unchanged. Step 5 becomes:

5. Run section 5 on the preimage bytes, the 64-byte signature, and the 32-byte public key. A refusal from section 5 is that section's result word. It is not `SIGNATURE`. There is no message identity.
6. Otherwise the result is a match, and the message identity is SHA-256 of the preimage.

This draft does not adopt itself.
