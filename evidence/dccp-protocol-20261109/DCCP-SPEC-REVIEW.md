# DCCP specification review

**Status:** DRAFT review. Not a ruling, not an amendment, and not an adoption.
**Date:** 2026-11-09
**Text reviewed:** `DCCP-PROTOCOL.md`, 5,341 bytes, SHA-256 `e8b66429488ec27b4daa146ba8478dc31f44b5ba0961c0f3386808053296f63d`. The text was not changed.
**Named implementation in that text:** `src/dccp/message.ts`. On the shelf at `096d653da191abc2f57329d49942e44f8182c51a` that file is 3,858 bytes, SHA-256 `13079847dd0528a79099c27bc09fb77e3149d2e0467cf2f1ce3eb80947c2c6ca`.
**Not part of the reviewed text:** `message-node.ts`, `post.ts`, and `DCCP-RECONCILIATION.md`. They were written later. Where one of them disagrees with the draft, the draft is the text under review.

## 1. Question

Can a second program, holding only this draft, check a message the named implementation sealed, and can it know what that check does not mean?

## 2. What a second program can implement from the text

| Clause | Result |
|---|---|
| §2 packet | Content bytes plus one JSON envelope. Empty content is allowed. |
| §2 signed fields | Seven classes. `v` is the string `1`. `to` is a non-empty string. `content_sha256` and `prev` are 64 lowercase hex characters. `at`, if present, is a non-empty string. `null` is forbidden. |
| §3 and §4 identity | SHA-256 of the UTF-8 JSON preimage. Key order is fixed. `at` is omitted when absent. The signature is not hashed. |
| §4 key | The 32-byte public key is an input. It is not in the preimage. |
| §5 and §6 | Ed25519 over that preimage. The result is a match or one of `CLASS`, `FIELD`, `CONTENT`, `SIGNATURE`. A log the receiver already holds may also refuse `PREV`. |
| §1 and §6 | A match is not permission, identity, time, delivery, uniqueness, or execution. |
| §7 | The receipt, the handoff line, a transport, a global order, and the desk are outside this text. |

One honest signature produced by `@noble/curves` 2.4.0 was verified by Node 22.23.3 over the same preimage. That is one pair of implementations. It is not a rule for every signature those libraries might disagree on.

## 3. Findings

**F1. The preimage encoder is named, not specified.** Section 4 says the bytes are `JSON.stringify` of the object. A program that is not that function must still match its escaping. The draft does not state those escaping rules. For strings that need no escape, the bytes are determined. For strings that do, two encoders can differ and both claim to be JSON.

**F2. Signature hex case is looser than the hashes.** `content_sha256` and `prev` must be lowercase. Section 2 says the signature is 128 hexadecimal characters and that the named implementation writes lowercase. It does not say an uppercase signature is invalid. Section 6 puts a bad signature in `SIGNATURE`, not `FIELD`.

**F3. `Ed25519` is not pinned to a verification policy.** The draft does not cite a document, and it does not say whether a non-canonical signature is accepted. The named implementation verifies with cofactored behavior turned off. The draft does not say that.

**F4. A `RESPONSE` does not identify its request.** The class is in the closed list. No field carries the identity of an earlier message. A program cannot implement "this answers that" from this text.

**F5. Replay is not a check.** Section 1 says a match does not prove uniqueness of `prev`. Section 6 checks `prev` only against a log the receiver already holds. The draft does not define which log, and it does not define a replay store.

**F6. `to` is not an address resolution.** The field is a non-empty string. The draft does not define normalization, a directory, or what a receiver does with a label it does not recognize. Delivery is outside the text.

**F7. Later code is not this specification.** `message-node.ts` treats a signature that is not 128 hex characters as `FIELD` during validation. Section 6 of the draft puts signature failure at `SIGNATURE`. The named implementation agrees with the draft on that split. The later file is a divergence, not a revision of the draft.

## 4. What remains unresolved inside the text's own boundary

Key custody, binding a key to a participant, and key replacement are named as unresolved. This review does not supply them.

A message check does not enter Trinity. The draft says the result must not contain an authorization. That boundary is stated. It is not a procedure for the authorization gate.

## 5. Disposition

The draft is sufficient for a second program to check one message whose strings need no JSON escaping, under a public key that program was given, and to refuse the four named failures. It is not sufficient to link a response to a request, to reject a replay, to resolve an address, or to treat a signature as a person.

Do not amend the 5,341-byte text from this review. A change is a new file with a new digest.
