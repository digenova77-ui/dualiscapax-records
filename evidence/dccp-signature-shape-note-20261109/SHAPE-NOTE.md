# INTERPRETIVE NOTE — the signature field's shape, its reading, and its refusal word

EVIDENCE STATUS: This note records an interpretation of the ratified text, reached by two seats in agreement (the seat that carried the analysis and the reviewing witness) and verified line-by-line against the ratified bytes at this seat. It amends no text, changes no implementation, and decides nothing: the questions it leaves open remain open for their own decision records. Where this note states what the ratified text says, the citations are to the text at `9ce2156a…`, fetched and checked for this note.
SOURCE DIGESTS: ratified protocol `9ce2156ab95138083bad2b4a8b919cd50fa0e31ff3fbfd4beafb2d4dbf30f688` · implementation of record `63c604fa628dc811ce5c2b901fbe8ea55fed8f87390892da7a55de810418130a` at shelf commit `538af3d8…`.
SCOPE: three things that must not be collapsed — field shape, signature validity, refusal vocabulary — as they concern assessment rows C2 and C3 and the open hex-case question.
UNRESOLVED DEPENDENCIES: a specification decision, with its own dated record, if a refusal vocabulary for shape failure is ever to be prescribed · the `message-node.ts` divergence, carried below as an interoperability observation.
AUTHORIZATION BOUNDARY: an interpretation is not an amendment, and no reading of this note grants authorization. A match under a key is not a permission; Trinity remains the authorization gate.

## What the ratified text says

**The shape is normative.** §2's table: `signature` is required — "128 hexadecimal characters encoding a 64-byte Ed25519 signature over the preimage. The implementation writes lowercase. The signature is not part of the preimage." Each pair of characters is one byte: 128 characters are exactly 64 bytes, the first 32 `R`, the last 32 `S` little-endian. A string that is not 128 hexadecimal characters does not yet have an `R` and an `S`; §5 does not start. `abcd` is four characters — there is no 64-byte signature for the curve checks to run on.

**The shape failure has no prescribed place in §6.** §6 step 2 enumerates its `FIELD` conditions — `v` is not `1`, `to` is empty, `content_sha256` or `prev` is not 64 lowercase hex, `at` present and empty — and the signature is not among them. §6 step 5 runs §5 "on the preimage bytes, the 64-byte signature, and the 32-byte public key," which presupposes the 64 bytes exist. And §6 step 5 is explicit that a §5 refusal "is that section's result word. It is not `SIGNATURE`." So `SIGNATURE` is not a §5 result — a point the ratified text settles — while the word for refusing a malformed shape before §5 is a question the text never takes up.

**The case question is asymmetric, by the text's own words.** The hash fields are specified as "64 lowercase hexadecimal characters," and §6 step 2 refuses anything else as `FIELD`; §3 adds "Hexadecimal encodings of hashes are lowercase." The signature row says only "128 hexadecimal characters" and assigns lowercase to the *writing* ("The implementation writes lowercase") — it does not say a reader refuses `A-F`. Uppercase is a case question, not a length question. And because the signature is not part of the preimage, its spelling cannot change the message identity: it changes only whether 64 bytes can be read, and then whether §5 accepts them.

## Dispositions

- **C2 (short spelling → `SIGNATURE`): withdrawn as an implementation defect.** The shape rejection is required; the particular word is unspecified by the ratified text, and the implementation's carried word contradicts nothing in it. The row remains in the record as an observation.
- **C3 (uppercase signature hex accepted): withdrawn as an implementation defect.** Accepting `A-F` is consistent with the stated hexadecimal alphabet; no demonstrated contradiction with the ratified text. An observation, not a nonconformance.

## What remains open — stated precisely

1. **The refusal vocabulary for signature-shape failure: UNSPECIFIED.** The implementation's `SIGNATURE` stands as a carried behavior, neither prescribed nor contradicted. Prescribing a word is a specification decision requiring its own dated record; nothing in this note performs it, and the carried word must not be silently promoted into a protocol requirement.
2. **Hex case, narrowed but not closed.** For the *signature* field, the reading above holds: writing is lowercase, reading `A-F` is not refused by the text. For the hash fields, case is closed by the text (lowercase, `FIELD` otherwise). What remains open: `message-node.ts` refuses an uppercase signature spelling as `FIELD` while the shelf implementation accepts it (its `SIG_HEX` admits `A-F`) — two behaviors on an input the text does not govern the reading of. Neither contradicts the text; they diverge from each other. An interoperability observation, carried until a decision record names the reading behavior.
3. **Unicode normalization: untouched by this note** — open exactly as ratified.
