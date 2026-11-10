# DCCP message protocol — Ratification Record

**EVIDENCE STATUS:** Founder act received and recorded. The ratified text was fetched from the public shelf and verified byte-exact at the recording seat before this record was written.
**SOURCE DIGESTS:** ratified text `9ce2156ab95138083bad2b4a8b919cd50fa0e31ff3fbfd4beafb2d4dbf30f688` · decided Section 5 `070eb79098257f701ba9e6628618cde97e4a4fc5bfe89120a1dbed8e47f172a4` · preimage byte rule `bb30e86b9c9236632810d0d7311dfb72c2d01fe97a560142b1e96fde001d936d` · predecessor assembly `f174801e290bd910528f748eae47e92ce05a49aebad3e2e334d54b8b09ef1ec6`
**SCOPE:** the DCCP message protocol only — the one text named below. Other mechanisms that share the DCCP name are not in this text and are not ratified by this record.
**UNRESOLVED DEPENDENCIES:** signature hexadecimal case (undecided) · Unicode normalization (unchosen) · key custody and address resolution (outside the text, section 7) · the 2026-11-09 protocol gate's formal remainder (see below).
**AUTHORIZATION BOUNDARY:** this record records the Founder's act; it is not itself the act. It authorizes nothing beyond what the act's own words cover.

## The act

On 2026-11-09 at 19:40 EST, David John Di Genova, Founder, in the main chat, sent the two-seat verification of the candidate — naming its digest in full — and directed:

> Please ratify and reconcile

The ratification is the Founder's act, performed by that message over the one candidate it names. Idris's seat records it and verified the object before recording. No seat ratifies in the Founder's place.

## The object ratified

- File: `DCCP-PROTOCOL-CANDIDATE.md`, on the records shelf at `evidence/dccp-ratification-candidate-20261109/DCCP-PROTOCOL-CANDIDATE.md`
- Size: 11,304 bytes
- SHA-256: `9ce2156ab95138083bad2b4a8b919cd50fa0e31ff3fbfd4beafb2d4dbf30f688`
- Commit: `ad632dc3910aa75a408116fffbc9fc58e0073542` (the shelf's `main` head at the time of the act), parented on the Section 5 decision record `f263ecab4ec1062dfe6849f9b5df744a1d3f40d3`, which sits on the decided Section 5 draft `5e8cb534b60798cd57d6e5d61398ddcc148ebdbe`.

## Verification at the recording seat (2026-11-09, 19:41 EST, before recording)

- The public file was fetched from the raw door at commit `ad632dc3…`: 11,304 bytes, SHA-256 matches the digest above, byte-identical to the assembly custody copy.
- The commit chain was read from the GitHub API: `ad632dc3…` is the `main` head; its parent is `f263ecab…`; that commit's parent is `5e8cb534…`.
- The diff against the 7,796-byte predecessor (`f174801e…`) was re-run: four hunks only — status preamble, Section 5 body, section 6 step 5, section 8 status.
- The procedure blocks 5.1 through 5.5 are byte-identical to the decided `DCCP-SECTION-5.md` (`070eb790…`). The standalone draft's trailing exhibit table is not a procedure and is not carried into the ratified text. The definition of `L` and the sentence about `R` sit inside section 5. The one wording adaptation stands as declared: "This draft does not apply" reads "This section does not apply."
- Section 6 step 5 carries the decided wording; `SIGNATURE` is not one of the result words.
- The candidate's face was read: before this act it said, accurately, that it was not ratified, not an authorization, and not a conformance claim against REF-004, and it listed its opens. Those face statements are its preserved pre-ratification state; this record is what changes the status — the bytes do not change.

## Effect

The text at the digest above **is the ratified DCCP message protocol, version 1**, from the Founder's act of 2026-11-09 19:40 EST.

The ratified text is frozen as of this record. It is not edited in place. Any correction is a separate corrigendum naming this digest, appended to the record — never a silent rewrite of the ratified bytes.

## Carried open — ratified as limitations, not decided by this act

- The case of the signature's hexadecimal spelling is not decided. Section 5 runs on bytes, and no step in section 6 refuses an uppercase spelling.
- Unicode normalization is not chosen (section 4). Two canonically equivalent strings remain two preimages.
- Key custody, binding a key to a participant, and key replacement remain outside the text (section 7). Door 3 is untouched by this act.
- The protocol gate adopted 2026-11-09 15:29 EST: its assessor was never named, and its gap assessment and interoperability proof were never run as formal acts. This ratification does not retroactively complete them; the remainder stands on the record as the gate's remainder.

## What this act is not

- Not conformance to REF-004. REF-004 is untouched and remains frozen under its own digest.
- Not a promotion of any other text, verdict, exhibit, or implementation. Each stands on its own examination.
- Not, by itself, the reconciliation of any implementation. The Founder's same message separately instructed the reconciliation of `message.ts` to the ratified sections 4–6; that work proceeds under that separate instruction and is reported in its own record.
