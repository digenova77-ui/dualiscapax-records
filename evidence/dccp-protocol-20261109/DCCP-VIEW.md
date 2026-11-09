# Views, rivals, missing parents, and join

**Status:** Assessment. Not an implementation, not a settlement, and not an adoption.
**Date:** 2026-11-09
**Code it describes:** `claim.ts` and `parents.ts`, as they stand. It does not change them.
**Invariant:** A holder may not call a view uncontested if that view omits evidence the holder already has about the same scarce subject. Even a complete honest view is provisional. It does not authorize.

## Three different gaps

| Gap | What happened | What the holder may say |
|---|---|---|
| Incomplete view | A record exists somewhere and has not arrived. A partition. | Only what the held bytes support. `BURIED` here can be withdrawn. |
| Incomplete evidence | A parent hash is cited and the bytes are not held. | `UNHELD` for that parent. The child waits. No burial. |
| False view | A rival is already held and is left out of the calculation. | Nothing. This is not partial knowledge. It manufactures certainty. |

The first two are limits of what arrived. The third is a lie about what arrived.

## What the held bytes can decide

`checkParents` refuses to order a parent whose bytes are absent or whose bytes hash to a different digest. That is the incomplete-evidence case. The record may be stored. The missing parent is not treated as false.

`claimView` recomputes from the records it is given. It does not read a previous label. Two claims on the same subject and predecessor, neither citing the other, are `CONFLICT`. A missing parent anywhere in that set blocks `BURIED`. One claim that every given tip cites is `BURIED` for that set only. A claim whose predecessor is one of those conflicted records is `STALE`.

`BURIED` from that function means "uncontested inside the set that was passed." It does not mean "uncontested inside everything this holder has," unless the caller passed everything it has. The function cannot see a record it was not given. A holder that drops a known rival and then believes the label has built the false view. The label does not survive that omission. The invariant is on the holder, not on the word `BURIED`.

## Join

Join is the union of held bytes, then the same recomputation. Labels are not merged and not kept. The same hash is the same record. A parent that still has no bytes stays `UNHELD`, and burial stays blocked.

If each side had buried a different claim, both claims are in the union. The recomputation returns `CONFLICT` for both. The subject stays at the predecessor. No side's old label is evidence.

A dependent that named one of those claims as its predecessor becomes `STALE` only because the predecessor is in the joined set and is conflicted. A dependent whose predecessor never arrives is not stale and not buried. It waits.

## What remains refused

A view does not prove the rest of the network is empty. A recomputed `BURIED` does not become a payment, a permission, or a durable settlement. A sensor shape is not part of this interaction. Nine passing tests at one seat are not an independent verification.
