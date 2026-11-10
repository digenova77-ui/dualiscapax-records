# REPAIR OF THE CONFORMANCE ASSESSMENT PACKAGE — additive evidence record

EVIDENCE STATUS: This record repairs the reproducibility of the conformance assessment package at shelf commit `4238b389…`. It changes no earlier record, no ratified byte, and no implementation byte. The original assessment, its matrix, and its recorded output remain exactly as committed; this package supersedes the matrix as the witness's instrument.
SOURCE DIGESTS: ratified protocol `9ce2156ab95138083bad2b4a8b919cd50fa0e31ff3fbfd4beafb2d4dbf30f688` · assessment record `c0d0c665…` · original matrix `d2b14ca9…` · implementation under test (this package's `message.ts`, byte-identical to the reconciliation commit's) `558fe94e6b4ef03f91ae16dc7765fd098042664cb5b1a2b5b8fbacf6629f2ecf` · repaired matrix and both run outputs are hashed in the commit carrying this record and verifiable from the public door.
SCOPE: the assessment package only — its import path and its PREV rows. Findings A and C of the original assessment are untouched; Finding B stands as corrected in count below.
UNRESOLVED DEPENDENCIES: the independent witness run remains outstanding — it is now runnable from this single commit. The two spelling questions and the gate's formal remainder remain open.
AUTHORIZATION BOUNDARY: prepared at the builder's seat on the recommendation of an independent audit (ChatGPT, November 9, 2026). This record grants no authorization and certifies nothing; the witness requirement is unchanged.

## Origin

An independent audit (ChatGPT, ~20:04 EST, November 9, 2026) verified the public record from GitHub directly: the candidate, ratification record, reconciliation, assessment, and addendum all exist; the commit chain is intact (each step `ahead_by: 1`); the candidate, record, and reconciled `message.ts` hashes recompute exactly; the implementation's §4–§6 operations match the ratified procedure on source inspection. It did not execute the suite (its environment lacks `@noble/curves`) and did not discharge the witness requirement. It reported two defects in the assessment package and one wording note. All three were checked at this seat; all three hold.

## Defect A — the matrix was not reproducible as committed

`assessment.mjs` imports `./message-under-test.ts`. That file was never committed: the assessment commit carries only `ASSESSMENT.md`, `assessment.mjs`, and `run-output.txt`. At the builder's seat the file existed — a copy of the shelf implementation bytes (10,755 B, `558fe94e…`) — so the recorded run was real, but a witness fetching the commit could not run it. **Repair:** the repaired matrix imports `./message.ts`, and the subject copy is included in this commit, so the package is self-contained. A witness verifies the subject by its digest before running.

## Defect B — row B31 duplicated B30; the foreign-log scenario was never tested

As committed, B31 called `append` on the original empty log — B30's exact call — and combined it with a vacuous test on the grown log. Two rows, one scenario. The distinct defined-domain count was therefore 30, not 31. Worse, the label misdescribed the geometry: `second` was sealed as `first`'s successor, so against the log `first` heads, `second` is not foreign at all — it is the legitimate next envelope.

**Repair, in two steps, both preserved:**
1. The naive repair (point B31 at the grown log) was run first. It FAILED — `B31 expected=PREV got=undefined` — because the envelope extends its own log, exactly as the construction implies. That run's output is preserved in this package (`repair-run-output-attempt1.txt`, 33/34 as run) as the evidence that exposed the mislabel.
2. The corrected repair adds a control row **B31a** — the envelope extends the log its predecessor heads (EXTENDS, as required) — and rebuilds **B31** against a genuinely foreign log: a log opened by a different first envelope, whose tip the tested envelope's `prev` does not name. B31 now refuses with `PREV` for the reason its label claims.

**Corrected result:** the repaired matrix runs **35/35 rows PASS, 0 fail, exit 0** (32 defined-domain rows including the new control, 3 carry rows), against the byte-identical subject, Node v24.22.1, `@noble/curves` 2.4.0. Finding B's substance is unchanged — PREV refusal is established by B30 and now genuinely by B31 — with its count corrected: the original run established 30 distinct defined-domain cases, not 31.

## Wording note — the checklist's numbering is not execution order

Accepted and recorded: the six-property checklist places signature challenge (property 4) before the key and scalar gates (property 5). The ratified §5 procedure runs the gates first; the challenge is computed inside step 5.5, after them. The checklist stands as a list of properties; execution order is §5's. No text is amended; this note is the clarification of record.

## The witness, restated

Fetch this package at its commit. Verify `message.ts` hashes to `558fe94e…`. Run `node assessment-repaired.mjs` with `@noble/curves` available. Return the raw output, the environment versions, and a verdict in your own name. The author's seat additionally arbitrates its local checkout against Finding C5's digests (original blob `d8f6b040…`, reconciled blob `1740632c…`). Until that run exists, the status remains: ASSESSED AT THE BUILDER'S SEAT — WITNESS OUTSTANDING.
