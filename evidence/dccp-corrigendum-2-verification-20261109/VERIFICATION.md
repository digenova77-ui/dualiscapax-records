# VERIFICATION — conformance of the implementation of record to Corrigendum 2

EVIDENCE STATUS: Executed at Idris's seat, 2026-11-09, after the Founder's act enacting Corrigendum 2 (record: `evidence/dccp-corrigendum-2-20261109/CORRIGENDUM-2.md`). Corrigendum 2 required no code change; this record is its reconciliation evidence — the implementation of record already conforms, and the runs below are the demonstration.
SOURCE DIGESTS: ratified text `9ce2156ab95138083bad2b4a8b919cd50fa0e31ff3fbfd4beafb2d4dbf30f688` · implementation under test: `message.ts`, 11,687 bytes, sha256 `09cb5b1d2802a4b6b0997863d450b29429568abefc7ced4fcd5b0cee58aa6f2c` (shelf commit `ea04c936…`, unchanged by this corrigendum) · proposal of record `ac4dd5b3…` at `fae21993…`.
SCOPE: the shelf implementation only. Other workspaces take these bytes, and this rule, by their own acts.
ENVIRONMENT: Node v24.22.1, `@noble/curves` 2.4.0.
AUTHORIZATION BOUNDARY: verification establishes behavior within the tested scope. It grants no authorization; a match under a key is not a permission.

## The run — `verify-corrigendum2.mjs`, 8 of 8 as specified (output: `verify-output.txt`)

**Part A — the proposal's worked pair, recomputed from its published inputs:**
- **A1** composed identity recomputes to `8c3f6af7…` — OK.
- **A2** decomposed identity recomputes to `e0b6264b…` — OK.
- **A3** the published composed signature over the composed preimage — match.
- **A4** the same signature over the decomposed preimage — `EQUATION`, as the corrigendum's clause 4 requires.

**Part B — the full 2×2 on an independent instance (fresh keypair, this seat):**
- **B1** decomposed signature, decomposed spelling — match.
- **B2** decomposed signature, composed spelling — `EQUATION` (the reverse cell; previously a deduction, executed here and in this seat's earlier prep runs).
- **B3** composed signature, composed spelling — match.
- **B4** composed signature, decomposed spelling — `EQUATION`.

## What this package holds

`VERIFICATION.md` (this record) · `verify-corrigendum2.mjs` · `verify-output.txt` · `message.ts` (a byte-identical copy of the implementation under test, for a self-contained run). Earlier prep runs at this seat (the U1–U5 probe and the reverse-direction probe, workspace `dccp-unicode-prep-20261109/`) reached the same results and are superseded as evidence by this consolidated post-act run.
