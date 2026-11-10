# Witness run of the conformance matrix

**Status:** Additive. Does not edit the ratification record, the addendum, the reconciliation, the ratified text, or the builder's assessment.
**Date:** 2026-11-09
**Seat:** this seat did not build `c469a469`.

## What was checked before the run

The auditor's two defects are present on `b948c008`:

- `evidence/dccp-conformance-assessment-20261109/assessment.mjs` imports `./message-under-test.ts`. That path returns 404 at that commit.
- Row B31 computes `log1` and then calls `append` on the original empty `log`, the same call as B30.

`evidence/dccp-message-reconciled-20261109/message.ts` is 10,755 bytes, SHA-256 `558fe94e6b4ef03f91ae16dc7765fd098042664cb5b1a2b5b8fbacf6629f2ecf`. The copy run here hashed to the same digest before the tests.

## What this run changed

The builder's assessment files were not edited. This directory is a new copy with two changes only:

1. The import points at `../dccp-message-reconciled-20261109/message.ts`.
2. B31 appends `second` to a log whose tip is a different message (`other`), not to the empty log.

## Result

Node 22.23.3. `@noble/curves` 2.4.0. 34 rows, 34 pass, 0 fail. Defined-domain rows 31. Carry rows 3. The raw output is `run-output.txt` beside this note.

B31 returning `PREV` is the foreign-log refusal. It is not the empty-log refusal from B30.

## What this run does not do

It does not re-execute the builder's original script, because that script cannot resolve its import. It does not change hex case or Unicode normalization. It does not decide the carry rows. C2 still returns `SIGNATURE` for a short signature spelling, and C3 still matches uppercase signature hex. Those remain open. A pass is not a permission.
