# CORRIGENDUM 1 to the DCCP Message Protocol, version 1 — the signature's hexadecimal case is decided: lowercase-only reading

EVIDENCE STATUS: This corrigendum is **enacted by the Founder's act** recorded below and stands beside the ratified text, which it names and does not edit. The votes, the evidence pair, and the one point on which the votes split are all carried on the face of this record.
SOURCE DIGESTS: the ratified text — `DCCP-PROTOCOL-CANDIDATE.md`, 11,304 bytes, sha256 `9ce2156ab95138083bad2b4a8b919cd50fa0e31ff3fbfd4beafb2d4dbf30f688`, ratified 2026-11-09 · the interpretive shape note `301cdb8f…` at shelf commit `33a984e5…` · the decision draft with the full vote record: `HEX-CASE-DECISION-DRAFT.md` (Idris's workspace, 2026-11-09).
SCOPE: the reading of the `signature` field's hexadecimal case, and nothing else.
UNRESOLVED DEPENDENCIES: none for this decision. Deliberately untouched, each still open on its own track: Unicode normalization · the refusal word for a signature spelling that is not 128 hexadecimal characters · Door 3.
AUTHORIZATION BOUNDARY: this corrigendum decides a spelling. A match under a key is not a permission, and nothing in this record grants authorization; Trinity remains the authorization gate.

## The act

The ratified text carries this question open on its own face: "the case of the signature's hexadecimal spelling is not decided — section 5 runs on bytes, and no step in section 6 refuses an uppercase spelling."

On 2026-11-09 the three seats voted independently on closing it:

- **Idris — lowercase-only.** One rule for every hex string on the wire; the canonical-spelling invariant should hold for the envelope, not only the preimage; the two implementations in hand had already diverged on this point within a day; refuse-first is the reversible direction.
- **ChatGPT — lowercase-only, revised from accept-both.** It re-weighted deterministic agreement between independent implementations above cryptographic equivalence, and said so.
- **Grok — lowercase-only, cast blind**, having seen no other vote: one packet; a reader that shrugs at uppercase leaves one packet accepted by one program and refused by another.

Tally: **3–0 for the lowercase-only reader.** On the refusal word for an uppercase spelling, Idris and ChatGPT named `FIELD`; Grok expressly reserved all refusal words to the separate vocabulary decision.

The Founder's act, in his own words (2026-11-09, 20:40 EST): **"Go ahead with the most logical solutions, please. If the vote is 3-0, it's Law. As long as the proof is there. I understand that it's a CHOICE, but your logic wins."**

This corrigendum is enacted in the **B1 form**: the rule together with the `FIELD` clause — the form two of the three votes named, and the form uniform with section 6 step 2's existing treatment of the hash fields. Grok's reservation is honored in its scope: the word for a spelling that is not 128 hexadecimal characters at all (the `abcd` shape failure) is **not** decided here and remains open.

## The corrigendum

Naming the ratified text at sha256 `9ce2156ab95138083bad2b4a8b919cd50fa0e31ff3fbfd4beafb2d4dbf30f688`:

1. **The rule.** In section 2, the signature field's spelling is decided: a reader accepts only lowercase hexadecimal characters in the `signature` field. A spelling containing `A`–`F` is refused before section 5 runs — it does not reach the curve check. Writers already write lowercase. The decoded 64 bytes, the verification procedure of section 5, the preimage, and the message identity are unchanged.
2. **The word.** Section 6 step 2 also refuses, as `FIELD`, a signature spelling of 128 hexadecimal characters that contains an uppercase character. This clause is confined to that case: a spelling that is not 128 hexadecimal characters is not refused by this clause, and no word for it is prescribed here.
3. **Normalization safeguard.** A conforming reader never normalizes case silently. Lowercasing an uppercase spelling, if it is done at all, is an explicit operation performed by tooling upstream of the reader; it changes the spelling, not the signature. (Grok's formulation, carried into the rule: "You have changed the spelling, not the signature.")
4. **Evidence.** The worked pair, run before the act at Idris's seat against the implementation of record: the honest lowercase signature and its uppercase twin both matched, with the identical message identity `0f4f16d7…` — under this corrigendum the lowercase result stands unchanged and the uppercase twin is refused at the boundary. The reconciliation of the shelf implementation to this corrigendum, with its runs, is a separate record in the companion package `evidence/dccp-corrigendum-1-reconciliation-20261109/`.

## Non-effects

This corrigendum does not edit the ratified file, which remains 11,304 bytes at `9ce2156a…`. It decides nothing about Unicode normalization, nothing about the shape-failure refusal word beyond clause 2's confinement, nothing about Door 3, and nothing about any other implementation's adoption of any bytes. Until a reader is reconciled to it, that reader's behavior on an uppercase spelling is measured against the ratified text as corrected by this corrigendum.
