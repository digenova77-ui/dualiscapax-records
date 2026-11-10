# CORRIGENDUM 2 to the DCCP Message Protocol, version 1 — Unicode normalization is not performed: the bytes are the message

EVIDENCE STATUS: This corrigendum is **enacted by the Founder's act** recorded below and stands beside the ratified text, which it names and does not edit. The votes, the evidence and its provenance, and the matters expressly not decided are all carried on the face of this record.
SOURCE DIGESTS: the ratified text — `DCCP-PROTOCOL-CANDIDATE.md`, 11,304 bytes, sha256 `9ce2156ab95138083bad2b4a8b919cd50fa0e31ff3fbfd4beafb2d4dbf30f688`, ratified 2026-11-09 · the proposal of record: the revised Unicode draft at shelf commit `fae21993…`, 3,971 bytes, sha256 `ac4dd5b3…`, with its evidence note `NOTE.md` (1,414 bytes, `490c5fc9…`); the first draft (2,834 bytes, `9b0a2dff…`) stands preserved at commit `4b0685bb…` · the implementation of record: `09cb5b1d…` at shelf commit `ea04c936…`.
SCOPE: the Unicode handling of string fields under section 4, and nothing else.
UNRESOLVED DEPENDENCIES: none for this decision. Deliberately NOT decided by this act, each on its own track: the refusal word for a signature spelling that is not 128 hexadecimal characters (see "What this act does not push through") · Door 3 · any other workspace's taking of the shelf bytes.
AUTHORIZATION BOUNDARY: this corrigendum decides how bytes are read. A match under a key is not a permission, and nothing in this record grants authorization; Trinity remains the authorization gate.

## The act

The ratified text carries this question open on its own face: "Unicode normalization is not chosen (section 4)." Three seats took the same position independently:

- **Grok — exact bytes** (the proposal's author): a reader that normalizes is repairing the spelling, the move Corrigendum 1 refused; the signature is over the bytes, not over the meaning of the text.
- **ChatGPT — exact bytes** (formal vote on the draft): writers preserve the exact UTF-8 bytes, readers perform no NFC or NFD transformation, and an application that wants a normal form applies it before the packet exists, as its own policy, outside the protocol reader.
- **Idris — exact bytes** (stated position, with the evidence runs below): normalization inside a reader silently rewrites the preimage upstream of the signature check — the same boundary repair Corrigendum 1 made unlawful for hexadecimal case, one layer down.

The Founder's standing rule (2026-11-09, 20:40 EST): **"If the vote is 3-0, it's Law. As long as the proof is there."** The Founder's instruction for this act (2026-11-09, 21:30 EST): **"I approve and push through whatever can be."** This corrigendum is what qualifies under those words: a decision that stood at three seats and whose proof was executed and re-executed before the act.

## The corrigendum

Naming the ratified text at sha256 `9ce2156ab95138083bad2b4a8b919cd50fa0e31ff3fbfd4beafb2d4dbf30f688`:

1. **Writers.** A writer keeps the exact bytes of every string. It does not convert between composed and decomposed form.
2. **Readers.** A reader does not normalize. It does not rewrite a string before it builds the preimage or before it checks the signature. Canonically equivalent spellings are different spellings; their preimages, challenges, and message identities are different.
3. **Upstream.** If an application wants one normal form, it applies that form before the packet is offered. That changes the spelling the writer is given. It is the application's policy, outside the protocol; a conforming reader never performs it silently.
4. **The proof of non-repair.** A signature made for one spelling does not open the other: the check travels the full section 5 procedure and fails at the equation, `EQUATION`. That failure is the proof the reader left the bytes alone — a reader that had rewritten the spelling would have rebuilt the signed preimage, recomputed the signed challenge, and reached a match for a spelling the signer did not sign.

## Evidence

The proposal's worked pair, produced at Grok's seat against the implementation of record and **recomputed in full at Idris's seat from the draft's published inputs**: content hash `2cf4e516…` for both; only `to` changes (composed `café` = U+0063 U+0061 U+0066 U+00E9; decomposed = U+0063 U+0061 U+0066 U+0065 U+0301). Composed preimage 199 bytes, identity `8c3f6af7…`; decomposed preimage 200 bytes, identity `e0b6264b…`; challenges `2eedcdee…` and `b6f5e9fb…`. The published composed signature matches the composed spelling and returns `EQUATION` on the decomposed spelling. The full 2×2 — both diagonals matching, both crosses returning `EQUATION` — was executed at Idris's seat on an independent instance (fresh keypair), including the reverse cell the proposal had left as a deduction. Grok's from-scratch curve-arithmetic proof of the equation (`equation_proof.py`, no signature library) stands as reported at its seat, graded, not re-run by another seat. ChatGPT's review was of the reasoning, with its non-execution disclosed in its own words. No seat's evidence is borrowed by another in this paragraph.

## Reconciliation

**No implementation change is required or made.** The implementation of record (`09cb5b1d…`) already reads exact bytes and performs no normalization; enacting this corrigendum names its existing behavior as the rule. The post-act verification — the worked pair recomputed and the full 2×2 executed against those bytes, 8 of 8 as specified — is recorded in the companion package `evidence/dccp-corrigendum-2-verification-20261109/`.

## What this act does not push through, and why

The Founder's instruction was to push through whatever *can* be. Two matters were examined against that word and do not qualify tonight:

- **The `abcd` refusal word.** ChatGPT recommends `FIELD`; Grok has expressly and repeatedly reserved refusal words, including in both Unicode drafts; Idris has stated the uniformity reasoning but the seats have not converged. The vote is not 3–0, and under the Founder's own stated standard the word is therefore not Law tonight. It remains open, with the implementation's carried `SIGNATURE` unchanged in the meantime. It ripens when the seats converge or when the Founder rules on it as its own named act.
- **Door 3.** All three seats hold it for separate examination (custody, participant binding, address resolution). Nothing in this act touches it.

Neither is decided by implication, by proximity, or by this act's silence. The ratified file remains 11,304 bytes at `9ce2156a…`; Corrigendum 1 is not reopened; a match is not a permission.
