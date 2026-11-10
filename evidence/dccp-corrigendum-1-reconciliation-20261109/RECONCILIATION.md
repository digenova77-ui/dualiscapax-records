# RECONCILIATION — the shelf implementation under Corrigendum 1

EVIDENCE STATUS: Executed at Idris's seat, 2026-11-09, after the Founder's act enacting Corrigendum 1 (record: `evidence/dccp-corrigendum-1-20261109/CORRIGENDUM-1.md`). The corrigendum came first; this reconciliation follows it, in the standing order of operations. All runs below were executed, not skipped, against the bytes named.
SOURCE DIGESTS: ratified text `9ce2156ab95138083bad2b4a8b919cd50fa0e31ff3fbfd4beafb2d4dbf30f688` · implementation before: 10,791 B, sha256 `63c604fa628dc811ce5c2b901fbe8ea55fed8f87390892da7a55de810418130a` (at shelf commit `538af3d8…`) · implementation after: 11,687 B, sha256 `09cb5b1d2802a4b6b0997863d450b29429568abefc7ced4fcd5b0cee58aa6f2c`.
SCOPE: `evidence/dccp-message-reconciled-20261109/message.ts` on the records shelf, and nothing else. `message-node.ts` is untouched (its refusal of uppercase already lands on the corrigendum's result, by its own route). Grok's tree takes these bytes by its own seat's act or not at all.
UNRESOLVED DEPENDENCIES: none for this reconciliation. Unicode normalization and the shape-failure refusal word remain open and untouched.
AUTHORIZATION BOUNDARY: reconciliation establishes that the implementation follows the ratified text as corrected. It grants no authorization; a match under a key is not a permission.

## What changed in the implementation — three edits, all confined to the corrigendum

1. **Header** — a Corrigendum 1 paragraph added to the file's provenance comment, naming the decision and this record's shelf home.
2. **`fieldsRefusal` (section 6, steps 1–3)** — the function now also receives the envelope's signature, and between its step-2 `FIELD` block and its step-3 content check it applies the corrigendum's clause: a signature that matches the 128-hexadecimal-character shape (`SIG_HEX`) and contains an `A`–`F` character is refused as `FIELD`. Placement inside step 2 is deliberate and is proven by probe P4 below: the refusal precedes the `CONTENT` check, as the corrigendum's placement in step 2 requires. A spelling that is not 128 hexadecimal characters does not meet the clause's condition and flows on to the carried `SIGNATURE` refusal, exactly as before.
3. **`open()`** — passes the signature into `fieldsRefusal`, and its comment at the shape gate now records that an uppercase spelling never reaches it. The `SIG_HEX` decode gate itself is unchanged.

No other line changed. `seal()` writes lowercase, as before, and is unaffected.

## The runs (Node v24.22.1, `@noble/curves` 2.4.0)

**Targeted probe** (`probe-corrigendum1.mjs`, output `probe-output.txt`) — 5 of 5 as the corrigendum specifies:
- **P1** the honest lowercase signature → `{"match":true,"hash":"2a2216da…"}` (the lowercase path is unchanged).
- **P2** the same signature in uppercase → `{"match":false,"reason":"FIELD"}`.
- **P3** `abcd` → `{"match":false,"reason":"SIGNATURE"}` — the shape failure's carried word is untouched by the corrigendum.
- **P4** uppercase signature **and** wrong content → `FIELD` — step 2's refusal precedes step 3's `CONTENT`, proving the clause sits where the corrigendum put it.
- **P5** lowercase signature and wrong content (control) → `CONTENT`.

**The unmodified assessment matrix** (`assessment-adopted.mjs`, the instrument of record, import retargeted only) run against the reconciled bytes: **34 of 35 pass, exit 1 — the sole flip is C3** (`expected=MATCH got=FIELD`, output `matrix-unmodified-output.txt`). The delta between the old instrument and the reconciled implementation is exactly the corrigendum and nothing else.

**The corrigendum variant matrix** (`assessment-corrigendum1.mjs` — the same instrument with C3 restated as a defined-domain row under the corrigendum): **35 of 35 pass, exit 0; defined-domain rows 33, carry rows 2** (output `matrix-corrigendum1-output.txt`). Finding D's probes D1/D2, carried in the instrument, pass unchanged.

## What this package holds

`RECONCILIATION.md` (this record) · `message.ts` (a byte-identical copy of the reconciled implementation, for a self-contained run) · `probe-corrigendum1.mjs` + `probe-output.txt` · `assessment-corrigendum1.mjs` + `matrix-corrigendum1-output.txt` · `matrix-unmodified-output.txt`. The implementation itself is updated at its own path, `evidence/dccp-message-reconciled-20261109/message.ts`; the superseded bytes (`63c604fa…`) remain intact at commit `538af3d8…`.
