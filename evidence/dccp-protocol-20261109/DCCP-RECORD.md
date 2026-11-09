# Dual record — proposed semantics

**Status:** Proposal. Not an implementation, not an amendment, and not an authorization.
**Date:** 2026-11-09
**Does not edit** `DCCP-PROTOCOL.md`, whose digest remains `e8b66429488ec27b4daa146ba8478dc31f44b5ba0961c0f3386808053296f63d`. Packets under that text still have one `prev`.

This record connects a citation graph, a scarce claim, and a measured-energy reference. It does not become those things. A parent hash is not the parent. An evidence hash is not a sensor. A settlement edge is not permission. A token debit is not a joule.

## 1. Identity

The record's identity is the SHA-256 of its preimage. The preimage is defined only after the fields below are fixed. This file does not choose a JSON encoder. Finding 1 of the message draft remains open, and this proposal inherits it: two encoders that escape differently have not yet agreed. Until that wording exists, an identity is only comparable between programs that already produce the same bytes.

The signature, if one is added later, is outside the preimage. A match proves that a key signed the preimage. It does not prove a person, a time, a delivery, or a permission.

## 2. Parents

A parent is 64 lowercase hexadecimal characters. The parent list is a set written in lexicographic order, with no duplicates and no gap.

| Bytes | Result |
|---|---|
| Not 64 lowercase hex | `BAD_PARENT`. The record is not an identity. |
| The same hash twice | `DUPLICATE_PARENT`. |
| Not in lexicographic order | `UNSORTED`. The set may be real. This spelling is not. |
| The record's own identity | `SELF`. |
| Empty | A root. A root may be cited. A root cannot carry a settlement edge, because it names no scarce predecessor. |

A parent hash that this holder does not have is `UNHELD`. The record may be stored. It does not order anything. Order exists only for a parent whose bytes this holder has, and whose identity recomputes to that hash. A hash that does not recompute is `HASH_MISMATCH`, and that parent orders nothing.

Citing a parent means "these bytes were seen." It does not mean the parent was true, authorized, or the unique previous event.

## 3. Scarce claim

A claim names one subject and one predecessor. The predecessor is the identity of the record that last settled that subject, or 64 zeroes when the subject has no settled record. A claim with no subject is ordinary mail. Mail has parents and no settlement edge.

Two records that name the same subject and the same predecessor, and do not cite each other, are a conflict. Neither wins. The subject stays at the predecessor. Neither record is deleted.

A claim that cites the other claim as a parent is ordered by that citation. The later one is not a rival. It is a child. It still does not settle unless section 4 passes.

## 4. When a claim is uncontested

A holder cannot prove that no rival exists. A quiet neighborhood is not the network.

| View | State | Meaning |
|---|---|---|
| This holder has a rival for the same subject and predecessor | `CONFLICT` | No settlement edge. The subject does not move. |
| This holder has exactly one claim, and some record it holds does not cite that claim | `PENDING` | One claim has been seen. Absence elsewhere is not known. |
| Every tip this holder has cites the claim, and no rival is in the held graph | `BURIED` | Uncontested inside this view only. |
| A later record arrives that cites a rival | `CONFLICT` | `BURIED` is withdrawn. The subject returns to the predecessor. Nothing already stored is erased. |

There is no `DURABLE` state in this proposal. A partition can bury a different claim on each side. When a record arrives that cites both, both burials withdraw. Calling either one final would be the false step.

## 5. Evidence

The settlement edge may cite one evidence hash. The hash is not the reading.

The cited bytes are admissible only when they are the publication [heardJoules](src/dccp/sensor.ts) already accepts: one named sensor, a finite non-negative sample, and the heard mark. A typed number does not carry that mark. Two sensors are not one drop. A rise is not a saving. The drop is the earlier microjoule count minus the later one, and only a positive drop is admissible.

Admissible means the bytes have that shape. It does not mean the instrument was honest, calibrated, or the only instrument. A lying publisher can still produce a well-shaped reading. This proposal does not promote that reading to physical truth. The failure for a bad shape is `NOT_EVIDENCE`. The failure for a missing body is `UNHELD`, as with any parent.

## 6. Settlement edge

The edge is absent, or it is one. It is present in the record only as a statement the signer made. The holder's acceptance is separate.

The holder accepts the edge only when all of these hold:

1. The record is a claim, not mail and not a root.
2. The view is `BURIED`, not `PENDING` and not `CONFLICT`.
3. The evidence hash is held and admissible, and the drop is positive.
4. The toll rules in [fuelSaved](src/dccp/token.ts) would burn: rings seen, port meter read, surplus agreed, office holding, whole toll, sufficient balance.

Acceptance still does not authorize an act. [govern](src/dccp/govern.ts) is not asked to allow one.

The debit, if the caller keeps the returned book, is provisional. [writeFuel](src/dccp/ledger-journal.ts) refuses a live balance. A process that exits loses the book. That loss is not a reversal of a durable payment, because no durable payment was created. The failure is `NOT_DURABLE`.

A later `CONFLICT` does not claw back a book that was already discarded, and it does not mint a refund. There is no refund, because there was no settled payment. A caller that acted on a provisional book acted outside this proposal.

## 7. What this record refuses to be

- A rewrite of a one-parent packet.
- A sequence number. Lowest `seq` is not a parent. [creditDag](src/dccp/cost.ts) is not this rule.
- An authorization, an identity, or a clock.
- A proof that the joules were real beyond the shape of a heard reading.
- An irreversible economic operation.
- A committee that breaks ties.

## 8. Failure list

`BAD_PARENT`, `DUPLICATE_PARENT`, `UNSORTED`, `SELF`, `UNHELD`, `HASH_MISMATCH`, `CONFLICT`, `PENDING`, `BURIED`, `NOT_EVIDENCE`, `NOT_DURABLE`.

`BURIED` is the strongest success this proposal names. It is not final.
