# Ed25519 vectors

**Status:** Distinguishing vectors. Not an adoption and not a profile name.
**Date:** 2026-11-09
**Library:** `@noble/curves` 2.4.0, Node 22.23.3. Another seat can recompute these calls.
**Corrects the claim** in `DCCP-ED25519.md`, SHA-256 `4eac1d3d41d1771b60c43a00e662f469a125d7c92918219a21d9c5c7d9683ea3`, that "RFC 8032" names one behavior. That file is not edited.

Three checks are not one check.

| Check | What it does here |
|---|---|
| `zip215: true` | Decodes under ZIP-215 and checks the cofactored equation. It does not ban a small-order public key. |
| `zip215: false` | Decodes under the stricter point rule and rejects a small-order public key, then checks the same cofactored equation. |
| Point rule | `fromBytes(strict)` succeeds, the point is torsion-free, and it is not small order. This is an extra gate. It is not the equation. |

The message bytes are the UTF-8 of the name in the first column. The signature and the public key are lowercase hex.

## HONEST

Message `dccp-honest`.

Public key `bb5c672482b0dcca91a21a4ed63b15afde8aa1378da72cd01b349589d6e7dd6a`.

Signature `a487c67a23ff703f26c230124939f9335f002b47e94a1170585d9a109cfcfe74558d8c253a70d0001fda53186a669336a18fdba2d5f4fb781f406518e4c9d800`.

| Check | Result |
|---|---|
| `zip215: true` | accepts |
| `zip215: false` | accepts |
| Point rule on the public key and on R | accepts |

## LOW-ORDER

Message `dccp-low-order`.

Public key `0100000000000000000000000000000000000000000000000000000000000000`. This is the identity point.

Signature `d4b4f5784868c3020403246717ec169ff79e26608ea126a1ab69ee77d1b167120300000000000000000000000000000000000000000000000000000000000000`. R is `3` times the base point, and S is `3`.

| Check | Result |
|---|---|
| `zip215: true` | accepts |
| `zip215: false` | rejects |
| Point rule on the public key | rejects, because the point is small order |

RFC 8032 states the cofactored equation and does not, in that equation, ban this key. The rejection comes from the extra small-order gate, not from the name RFC 8032.

## NONCANONICAL

Message `dccp-low-order`. Same signature as LOW-ORDER.

Public key `0100000000000000000000000000000000000000000000000000000000000080`. The identity with the sign bit set: `x = 0` and `x_0 = 1`.

| Check | Result |
|---|---|
| `zip215: true` | accepts |
| `zip215: false` | rejects |
| Point rule | rejects, because strict decoding throws |

## What was not found

No vector in this set is accepted by the point rule and rejected by the cofactored equation. The point rule is stricter than that equation. A document that needs the opposite split has to exhibit it. This one does not invent it.

These results describe `@noble/curves` 2.4.0. They do not adopt a profile, and they do not change the message draft.
