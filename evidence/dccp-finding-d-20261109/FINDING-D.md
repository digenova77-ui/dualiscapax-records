# FINDING D — the exported encoder's missing version gate: defect record and repair candidate

EVIDENCE STATUS: The defect is confirmed at three seats (the reviewing witness that found it, Grok's seat, and the builder's seat by live reproduction). The fix in this package is a CANDIDATE, verified at the builder's seat only. It is not the implementation of record; the reconciled `message.ts` at `558fe94e…` is unchanged everywhere it stands. Adoption is a separate act by the implementation's seat, and the reviewing witness's re-examination follows adoption.
SOURCE DIGESTS: ratified protocol `9ce2156ab95138083bad2b4a8b919cd50fa0e31ff3fbfd4beafb2d4dbf30f688` (§4: "`v` is the one character `1`, not a JSON number. Any other value of `v` is refused, and the encoder emits no bytes.") · implementation of record `558fe94e6b4ef03f91ae16dc7765fd098042664cb5b1a2b5b8fbacf6629f2ecf` · repair candidate (this package's `message-v-fixed.ts`) `63c604fa628dc811ce5c2b901fbe8ea55fed8f87390892da7a55de810418130a`.
SCOPE: exactly one line of the encoder. Nothing else in the candidate differs from the implementation of record.
UNRESOLVED DEPENDENCIES: adoption of the candidate (or an equivalent fix) by the implementation's seat · the reviewing witness's re-examination of the adopted bytes · the two spelling questions, untouched by this record.
AUTHORIZATION BOUNDARY: this record grants no authorization. A successful message check establishes a signature match, not permission to act; Trinity remains the authorization gate.

## The defect

`encodePreimage()` checks that every present value is a string and encodes the six keys in order. It does not check the value of `v`. Called directly, the exported `preimage()` therefore emits bytes for an input §4 refuses:

```
preimage({ v: "2", class: "PUBLIC", to: "a", content_sha256: "1"×64, prev: "0"×64 })
→ the bytes of {"class":"PUBLIC",...,"v":"2"}
```

Reproduced live at the builder's seat against `558fe94e…` before this record was written. The full check is not harmed: `open()` refuses `v` other than `"1"` earlier, as `FIELD`, under §6 — so no message with a wrong version ever opens, and no wrong-version preimage is ever signed by `seal()`. That does not cure the encoder: §4 states the refusal as the encoder's own behavior ("the encoder emits no bytes"), and the exported function is a public surface any caller may use directly. The reviewing witness's disposition on certification is WITHHELD pending this correction.

## The repair candidate

One line, at the head of `encodePreimage()`:

```ts
if (fields.v !== '1') return null
```

`preimage()` already converts a `null` return into its `FIELD` refusal, so the candidate refuses with no bytes emitted, through the existing channel. Verified at the builder's seat (this package's `finding-d-verification-output.txt`): the full repaired matrix against the candidate bytes — **35/35 PASS** — plus two direct probes: **D1** `preimage(v="2")` refused with `FIELD`, no bytes · **D2** `preimage(v="1")` still encodes. Environment: Node v24.22.1, `@noble/curves` 2.4.0.

## Scope of the repair — what was deliberately not folded in

Live probing at the builder's seat also showed the encoder tolerates an absent field (e.g. no `prev`) and ignores unknown keys. Those are not part of Finding D and are not repaired here, on this analysis (the builder seat's, offered for examination, not decided): §4's own text assigns the encoder exactly one value rule — `v` — stated with refusal language inside §4 itself; field presence and the envelope's field set are §2/§6 discipline, enforced in `open()` before the encoder is reached, and an absent `at` is §4-defined behavior rather than a defect. The matrix already exercises the encoder-level refusals §4 does state for strings (lone surrogate, non-string value). If a future decision assigns presence to the encoder as well, it lands as its own change with its own tests — not folded silently into this repair.

## Findings D and E, tracked separately

**Finding D — OPEN.** Defect confirmed; repair candidate prepared and verified at the builder's seat; adoption and witness re-examination outstanding.
**Finding E — ADDRESSED by separate witness evidence.** The witness commit `cacc074e…` runs a copy of the matrix whose B31 appends the second envelope to a log headed by a different message and returns `PREV` (34/34, Node 22.23.3) — verified at the builder's seat from the public door: the witness copy differs from the builder's matrix only in its header note, its import, and the B30/B31 block, and its `WITNESS.md` records the subject digest check before the run. The builder's original assessment remains untouched, as it should. Two qualifications stand on the record: the witness commit is unsigned (its contents, ancestry, and recorded output are verifiable; the runner is not cryptographically authenticated), and the witness seat is not named inside its record — its attribution rests on the lane's own text as carried. The builder's parallel repair package (shelf commit `e90491df…`, self-contained, with the B31a control row) corroborates the same repaired instrument at 35/35.
