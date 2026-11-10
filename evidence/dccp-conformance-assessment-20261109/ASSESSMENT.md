# Post-ratification conformance assessment — DCCP Message Protocol v1

**EVIDENCE STATUS:** Builder-seat assessment, executed against the public shelf bytes. **The independent witness run is outstanding** — under the standing separation, no seat grades its own work into a verdict. Until a separate seat re-runs the matrix cold, the status is: ASSESSED AT THE BUILDER'S SEAT — WITNESS OUTSTANDING. This is not a certification.
**SOURCE DIGESTS:** ratified text `9ce2156ab95138083bad2b4a8b919cd50fa0e31ff3fbfd4beafb2d4dbf30f688` · implementation under assessment (shelf bytes) `558fe94e6b4ef03f91ae16dc7765fd098042664cb5b1a2b5b8fbacf6629f2ecf` · assessment matrix `d2b14ca90eb0308b0cfc0c1d1859193729a1c70f6d5c46559b6ffd15b2764614`
**SCOPE:** the reconciled `message.ts` only, against the frozen ratified text. The ratified text was not reopened, and nothing in this assessment accommodates implementation convenience into it.
**UNRESOLVED DEPENDENCIES:** signature hex case and the malformed-signature refusal word — not defects against the ratified text; a prescription of either would be its own later record · the independent witness run.
**AUTHORIZATION BOUNDARY:** this assessment is evidence about implementation behavior. It confers no authority and amends nothing.

Established on the Founder's recommended next step (2026-11-09, 19:48 EST), with the three findings kept separate.

## Finding A — Protocol integrity: the implementation follows the frozen digest

- The ratified text was re-fetched at assessment time from its commit `ad632dc3910aa75a408116fffbc9fc58e0073542`: SHA-256 `9ce2156a…` — the frozen object is unchanged.
- The implementation under assessment was re-fetched from the shelf at commit `c469a469a43eb3ce77856dd9998876a6a19242ab`: SHA-256 `558fe94e…`. The matrix below ran against **those** bytes, not a work copy.
- The implementation names its governing text by digest in its own header (the ratified digest string is present in the shelf bytes).
- The shelf chain is intact: the reconciliation commit `c469a469…` sits on the ratification-record commit `aba3a3f2…`, which sits on the candidate commit `ad632dc3…`.
- The test suite shipped with the implementation was previously re-run against the public bytes: 10/10.

**A: HOLDS** — the bytes assessed are the bytes on record, under the digest that was ratified.

## Finding B — Defined-domain conformance: every specified input class produces the prescribed behavior

The matrix (`assessment.mjs`, committed with this record so any seat can re-run it cold) enumerates the input classes the ratified text specifies, with each row's basis cited to its section. Run at the builder's seat, Node v24.22.1, @noble/curves 2.4.0, exit 0:

**34 rows, 34 pass, 0 fail — of which 31 defined-domain rows:**

- Section 6 steps 1–3 domain (B1–B16): `v` as a number and as a wrong string, unknown and lowercased class names, empty `to`, a `null` field value, uppercase and short `content_sha256`, uppercase `prev`, present-and-empty `at`, content mismatch, an unknown extra field ignored with the identity unchanged — and the refusal order across steps (CLASS before FIELD before CONTENT before section 5; CLASS before a step-4 preimage refusal).
- Section 4 byte rule (B17–B21): a composite escape battery matched byte-for-byte against the section's table written out independently in the matrix (quote, backslash, the five named escapes, `\u00xx` lowercase, solidus raw, non-ASCII as raw UTF-8); U+007F raw, not escaped; a lone surrogate in `at` refused as `FIELD`; a non-string value refused; and the text's stated normalization consequence — two canonically equivalent strings, two identities.
- Section 5 boundaries and internal order (B22–B29): a key with `y ≥ p` and an `R` with `y ≥ p` both `DECODE`; `S = L` is `SCALAR` while `S = L−1` passes the scalar gate and falls to the equation; the gate order proven by construction (5.1 before 5.4, 5.2 before 5.4, 5.4 before 5.5's read of `R`); the mixed key refused at 5.3.
- Section 6 PREV paragraph (B30–B31): `prev` enforced only against a log the receiver holds — refused for a fresh log and for a foreign log alike.

**B: HOLDS over the enumerated domain** — every input class the text specifies that the matrix enumerates. The enumeration is the matrix's own scope; a class not enumerated is not claimed.

## Finding C — Unresolved-domain disclosure: unspecified and divergent cases, isolated

None of the following is claimed as conformance. Each is isolated, with its observed behavior on record:

- **C1 — Public key not 32 bytes.** The text presupposes a 32-byte key. The implementation returns `DECODE` (matrix row C1). An implementation handling of an out-of-shape input, not a textual prescription.
Updated 2026-11-09. C2 and C3 are not defects against the ratified text. The shape is normative. The refusal word is not. Accepting `A-F` agrees with the hexadecimal alphabet. A later act may still prescribe a refusal word or a lowercase-only reader. That act has not been taken.

| Row | Disposition |
| --- | --- |
| C2 — short signature returns `SIGNATURE` | Shape rejection is appropriate. The refusal word is unspecified. No demonstrated contradiction with the ratified text. |
| C3 — uppercase signature hex accepted | Consistent with the stated hexadecimal alphabet. No demonstrated contradiction with the ratified text. |
- **C4 — Unicode normalization.** None is performed (demonstrated by B21, which is the text's stated consequence). Whether normalization should be chosen remains open.
- **C5 — The author's checkout (the Founder's safeguard, checked against digests, not commit identifiers).** `scarlet-xenon-lion-dove` is private (the public API returns 404), so the check ran through the authenticated connector's directory listing — per-file git blob digests and sizes, not commit names alone. At its head `89e5b92e4b3861677bf19d9379c50f7fa6d5faa9` (unchanged through the DCCP work), `src/dccp/` holds 292 entries and **no `message.ts`, no `message-node.ts`, no `post.ts`, no `foundation.ts`, and no DCCP protocol texts** — the messaging files were never pushed to that tree; the implementation of record is the shelf's foundation-set copy. The result is therefore **absent**, neither matching nor divergent. For any future seat-side report, the arbitration digests are: original `message.ts` — 3,858 bytes, git blob `d8f6b040decab486ac84c90819fb3451b01660a6` (SHA-256 `13079847…`); reconciled `message.ts` — 10,755 bytes, git blob `1740632c11abc5925bc1e25c7fcb55d8dafc1bb2` (SHA-256 `558fe94e…`). The author's *local* checkout is not visible from outside; if that seat reports a blob digest for its file, it can be arbitrated against those two numbers immediately.

## The completing event

An independent witness — a seat that did not build the reconciliation — re-runs `assessment.mjs` cold against the shelf bytes and returns its own verdict. The author's seat is the natural witness: it can also arbitrate its local tree against Finding C5's digests in the same pass. Until that run is recorded, this assessment stands as the builder seat's findings, and no stronger word is used for it.
