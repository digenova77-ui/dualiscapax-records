# Join, withdrawal, and the two limits

**Status:** Proposal, continued. Not an implementation and not an adoption.
**Date:** 2026-11-09
**Cites:** `DCCP-RECORD.md`, 6,361 bytes, SHA-256 `a851b87fd96eff4b85f285df1e7b7b90b532f02f8ded3b8b6d57335c42c93528`. That file is not edited.
**Does not edit** `DCCP-PROTOCOL.md`.

## 1. Join

Two holders reconnect by union. A record is its hash. The same hash is the same record, not a conflict to repair. Neither history is deleted, trimmed, or rewritten.

A parent the other side has not delivered is `UNHELD` until the bytes arrive and recompute to that hash. The child waits. It is not dropped.

Tips are recomputed after the union. A tip is a held record that no held record cites. States are recomputed from the joined set. They are not copied from either side's previous label.

If each side had buried a different claim on the same subject and predecessor, the joined view contains both. Both burials become `CONFLICT`. The subject stays at the predecessor. No rule in the join picks the earlier, the larger, or the more cited claim.

## 2. What withdrawal does to dependents

Withdrawal recomputes. It does not erase.

A citation stays true. A child that named a claim as a parent still saw those bytes. The parent remains in the graph. What is withdrawn is the acceptance of that parent's settlement edge, and the acceptance of any later edge that required it.

| Dependent | After the predecessor is withdrawn |
|---|---|
| Mail that only cites the parent | Unchanged. Seeing is not settling. |
| A claim whose predecessor was that settlement | `STALE`. It names a predecessor the joined view does not accept. It stays stored. It does not settle, and it does not become the rival that wins. |
| A provisional token book built while the view was `BURIED` | Still `NOT_DURABLE`. The join does not refund it and does not confirm it. A caller that spent it did so outside the proposal. |
| A cached `BURIED` label | Invalid. A holder that does not recompute is wrong. The label is not a record. |

No dependent is allowed to treat a withdrawn burial as if the new records had not arrived.

## 3. Why a durable settlement is still refused

A scarce claim becomes durable only if a later view can show that no rival exists anywhere, including in a part of the network this holder has not seen. This proposal has no such proof.

A quorum, a clock, a lowest sequence number, and a committee are the usual substitutes. Each one invents a certainty the graph does not contain. None is added here.

The strongest joined state remains `BURIED`: every tip in this view cites the one claim, and this view contains no rival. A third partition can still hold the rival. Therefore no additional local evidence, including a well-shaped joule drop, promotes `BURIED` to a payment. [writeFuel](src/dccp/ledger-journal.ts) continues to refuse a live balance. That refusal matches this limit.

A new claim may cite both rivals as parents and name the original predecessor. That claim has seen the conflict. It is a new claim, not a winner chosen from the two. The other side may produce one too. Two such claims are again `CONFLICT`.

## 4. What a sensor shape still is not

One heard reading is a shape. Two heard readings are the system's own dual, and they are still not an instrument.

| Evidence cited by the claim | Label |
|---|---|
| Missing, typed, a rise, or two devices treated as one | `NOT_EVIDENCE` |
| One heard drop on one named sensor | `SHAPE` |
| Two heard drops, two sensor names, the same span, the two microjoule integers agreeing | `AGREED` |

`AGREED` means two writings match. It does not mean the two names are two instruments, that either was calibrated, or that one publisher did not sign both. Independence is not a field in the reading. This proposal does not add a device identity, and it does not turn `AGREED` into physical truth.

A claim with `SHAPE` or `AGREED` may still be only `PENDING` or `BURIED`. Neither label pays.

## 5. What is still true

The old message draft is unchanged. No code was changed. `BURIED` can be withdrawn. Join keeps both histories. Nothing in this file makes a settlement durable or a meter trustworthy.
