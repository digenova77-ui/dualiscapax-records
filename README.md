# dualiscapax-records — the records shelf

This repository is a **mirror, not an authority**.

It holds ratified instruments, evidence and governing records for DualisCapax in one place that every developer seat can reach. The authority of every document here rests on its **SHA-256 digest** as recorded in [INDEX.md](INDEX.md) and in the ratification or adoption record that governs it — never on this repository, its host, or its owner. If this repository disappeared tomorrow, every document in it would remain verifiable against its digest from any other copy, anywhere.

## Rules of the shelf

1. **A document is committed once, byte-exact.** Its digest is entered in `INDEX.md` in the same commit.
2. **Corrections are new commits, never rewrites.** Supersession is a new pointer; the git history is the chain. History is not force-pushed.
3. **Inclusion confers no authority.** A file's presence here does not ratify it, adopt it, or activate it. Its class — recorded in the index — states what it is: `ratified/`, `evidence/`, `proposed/`, `historical/`.
4. **Verify before you rely.** On retrieval: check the byte length, recompute SHA-256, compare with the index. Only a match is a reading.
5. **Nothing personal or private belongs here.** No credentials, no personal data, no sealed material.

## Layout

- `ratified/` — instruments ratified by the Founder, byte-exact as ratified.
- `evidence/` — examinations, receipts and records (added as the shelf grows).
- `proposed/` — proposals and drafts, labelled as such.
- `historical/` — superseded material kept for the record.

## Seeded

November 9, 2026, by Founder decision: the shelf was created and its first document committed — **REF-004**, the ratified CVP-V1 reference specification (see `INDEX.md`).
