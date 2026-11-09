# Inventory, view, and the completeness assertion

**Status:** Assessment. Not an implementation and not an adoption.
**Date:** 2026-11-09
**Cites:** `DCCP-VIEW.md`, 3,031 bytes, SHA-256 `0436adbb232b99d0b7c2d491ff13fd748fa62bd45d7a3fffcee28663377a0bba`. That file is not edited.
**Does not change** `parents.ts` or `claim.ts`.

`claimView` cannot see a record it was not given. The false-view rule is therefore not inside that function. It is the boundary between three objects.

## Inventory

The inventory is every record whose bytes this holder has. It is the store. It is not a label and not a choice. A record that has not arrived is not in it. A record that has arrived and was then left out of a calculation is still in it.

## View

The view is the set passed to `claimView`. It may be the inventory. It may be smaller. The function's `BURIED` means uncontested inside the view. It does not mean uncontested inside the inventory unless the two sets contain the same relevant records.

## Completeness assertion

The assertion is a statement by the holder about those two sets. It is not a result of `claimView`.

| Assertion | When it may be made | What it does not say |
|---|---|---|
| `COMPLETE_FOR_SUBJECT` | Every held record that names the subject, cites such a record, or is cited by one, is in the view. | That no rival exists outside the inventory. |
| `INCOMPLETE` | The holder knows the view is a subset, or a parent is `UNHELD`. | A burial. `BURIED` is void under this assertion. |
| Omitted | The holder returned `BURIED` with no assertion. | Uncontested status. The label is not evidence. |

`COMPLETE_FOR_SUBJECT` binds the sorted identity hashes of the inventory records it covers. A later record can recompute that list. If a hash the holder already had is missing from the list, the assertion was false when it was made. The false burial does not become true by having been believed.

A holder may not assert `COMPLETE_FOR_SUBJECT` while omitting a known rival, a known dependent, or a known parent of either. An incomplete view, where the rival never arrived, can still assert completeness of the inventory. That assertion is honest and still provisional. Partition recovery is the union of inventories, then a new assertion. The old one is not reused.

No assertion authorizes a settlement. `parents.ts` and `claim.ts` remain reported code at this seat. This file does not verify them.
