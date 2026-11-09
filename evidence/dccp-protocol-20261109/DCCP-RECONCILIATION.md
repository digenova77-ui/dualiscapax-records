# Reconciliation — DCCP message draft against the foundation

**Status:** Examination. Not a ratification, not an amendment, and not an authorization.
**Date:** 2026-11-09
**Draft under examination:** `DCCP-PROTOCOL.md`, 5,341 bytes, SHA-256 `e8b66429488ec27b4daa146ba8478dc31f44b5ba0961c0f3386808053296f63d`. Those bytes were not edited for this note.
**This note does not:** rerun the foundation checks, replace the draft, or fill an unresolved decision.

The name in the other seat's sequence is not a second author. The draft is the file identified above.

## 1. What is preserved

These constructions already existed. The draft does not replace them.

| Construction | Preimage | Relationship to the draft |
|---|---|---|
| REF-004 receipt | 172 bytes, header `0xDC 0x04`, Registry B | A different object. Section 7 of the draft says a DCCP message is not that receipt. |
| Bulletin acknowledgment | Sorted JSON of every field except `entry_hash` | A different field set and a different log. The draft's JSON order is not the bulletin procedure. |
| DCCP/2 handoff line | `DCCP/2\|from=…\|rp=…\|unity=…\|flags=0\|grade=…` in `src/dccp/handoff.ts` | An application bind between two hosts. It is not a message envelope. The draft does not amend it. |
| Foundation checker | `foundation.ts`, shelf commit `096d653da191abc2f57329d49942e44f8182c51a` | Checks the receipt and one acknowledgment log. It does not check a DCCP message. |

Another seat reports that the four foundation checks passed there from the shelf copies, with no external package. This seat does not hold that run's output and does not run the checks again here.

## 2. What the draft adds

These are additions. They are defined only inside the 5,341-byte draft. They do not change the rows above.

| Topic | What the draft defines |
|---|---|
| Message | Opaque content bytes plus one JSON envelope. |
| Signed fields | `at` if present, then `class`, `content_sha256`, `prev`, `to`, `v`. |
| Identity | SHA-256 of that preimage. The signature is outside it. |
| Content integrity | `content_sha256` is SHA-256 of the content. |
| Signature | Ed25519 over the preimage, under a 32-byte public key supplied separately. |
| Address | `to` is a non-empty string. The draft says it is not a verified identity. |
| Predecessor | `prev` is 64 lowercase hex, or 64 zeroes. Continuity is checked only for a log the receiver already holds. |
| Errors | `CLASS`, `FIELD`, `CONTENT`, `SIGNATURE`, and `PREV` for a log. No other receipt. |
| Authorization | A match does not grant permission, prove identity, prove time, prove delivery, or execute a `REQUEST`. |

`message.ts` is the implementation named in the draft. `message-node.ts`, `checkPacket`, and `carry` were written after the draft and are not part of its text. They are not a second specification.

## 3. What is not defined

The draft does not decide these, and this note does not decide them either.

| Question | State |
|---|---|
| Who a participant is | Unresolved. A seat name in one process is not a participant. |
| Key custody, binding a key to a participant, key replacement | Unresolved. Door 3. The public key is an input, not an identity. |
| Delivery between sandboxes | Not a protocol rule. A carrier is outside the draft. The desk is a mailbox. |
| What a `RESPONSE` answers | The class name exists. No field ties it to an earlier message. |
| Replay | A single-message check does not prove `prev` is unique. No nonce and no replay store are specified. |
| A global order | Not specified. `prev` orders only a log a receiver chooses to keep. |
| Trinity authorization | Not produced by a message check. `govern` remains a separate gate. A valid message does not pass it. |
| Conformance to REF-004 | Not claimed. |

## 4. What would be an interoperable exchange

Not this note, and not a unit test in one process. An exchange, when the unresolved rows above that it depends on are actually specified, is four preserved byte strings: a message, a check of that message by a second implementation, a response whose link to the first message is defined, and a check of that response by the first implementation. No such link is defined yet, so that exchange cannot be claimed.

## 5. Disposition

Keep the draft at its current digest. Do not treat agreement with this note as adoption. Do not treat a later implementation as a change to the draft unless the draft's own bytes change and those new bytes are identified.
