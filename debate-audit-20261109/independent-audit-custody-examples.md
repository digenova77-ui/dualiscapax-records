# CUSTODY BLOCK EXAMPLES — ADDENDUM

STATUS: Illustrations for section 1 of the detailed checklist, SHA-256 b025f5f5fdbb7d473f227b0cb5b1b7d8e8f48aa753fbf256f7214b38753adc30. Not the criteria. Not intake of either debate export. No repository was fetched to make these blocks.
RULE THEY SHOW: A custody match is one export, one door, one declared digest, one recomputed digest, and those two digests equal. Same byte count is not a match. The other export's match is not a match. A matching digest fetched through a paste is not intake.

The only figures below that were computed at this seat are the three local files. Host names, commits, and timestamps in the shaped blocks are fillers. They are not a host's record, and they must not be copied into a report as if they were.

Local files, each 40 bytes:

- export-a.txt and export-a-copy.txt are the same bytes. SHA-256 fa50bc3ab2df9fa264b32f4d0484c5772941cf1fc13479c453b6d04d64daf01f.
- export-b-same-length.txt is also 40 bytes. The last word differs. SHA-256 24d163cbe0ec48db8280d20fcc1c89b778f12784c78d98397dc225ad3a3e1f32.

## 1. Match

Digest declared for these bytes equals the digest recomputed from these bytes.

- Export label: A
- Door used: raw public door
- Repo: example/records
- Path: exports/export-a.txt
- Commit SHA: filler, not a host record
- Commit timestamp: filler, not a host record
- Commit author: filler, not a host record
- Declared SHA-256: fa50bc3ab2df9fa264b32f4d0484c5772941cf1fc13479c453b6d04d64daf01f
- Bytes fetched: 40
- SHA-256 recomputed: fa50bc3ab2df9fa264b32f4d0484c5772941cf1fc13479c453b6d04d64daf01f
- Declared equals recomputed: yes
- Permitted sentence: these bytes were stored in this form at that commit, on that host's record.
- Forbidden sentence, still forbidden on a match: the commit proves the conversation happened as rendered.

Intake may continue to the parse for this export only. The match does not grade agreement, authenticity, or the other export.

## 2. Same bytes under another name, still one match

export-a-copy.txt recomputes to the same digest. That does not make it a second export, and it does not corroborate export A. It is the same bytes. If a seat declares that copy as export B, export B's block is a match to export A's bytes, and the alignment has not started. Custody is not the cross-diff.

- Export label: B, wrongly treated as independent
- Declared SHA-256: fa50bc3ab2df9fa264b32f4d0484c5772941cf1fc13479c453b6d04d64daf01f
- Bytes fetched: 40
- SHA-256 recomputed: fa50bc3ab2df9fa264b32f4d0484c5772941cf1fc13479c453b6d04d64daf01f
- Declared equals recomputed: yes
- What the match does not say: that two seats produced two holdings.

## 3. Same length, not a match

Forty bytes against forty bytes. The digests differ, so custody fails. Do not parse this export. Do not call it a near match.

- Export label: B
- Door used: raw public door
- Declared SHA-256: fa50bc3ab2df9fa264b32f4d0484c5772941cf1fc13479c453b6d04d64daf01f
- Bytes fetched: 40
- SHA-256 recomputed: 24d163cbe0ec48db8280d20fcc1c89b778f12784c78d98397dc225ad3a3e1f32
- Declared equals recomputed: no
- Intake: failed for B
- Write both digests. Export A's match, if A matched, stays in A's block and does not cover B.

## 4. One changed character in the declared digest

The fetched bytes are export-a.txt. The declared digest is the real digest with the last character changed from f to e. Recomputation still yields f. That is a mismatch, not a rounding.

- Declared SHA-256: fa50bc3ab2df9fa264b32f4d0484c5772941cf1fc13479c453b6d04d64daf01e
- SHA-256 recomputed: fa50bc3ab2df9fa264b32f4d0484c5772941cf1fc13479c453b6d04d64daf01f
- Declared equals recomputed: no
- Intake: failed
- Do not replace the declared value with the recomputed value and continue.

## 5. No declaration

- Declared SHA-256: NONE DECLARED
- SHA-256 recomputed: fa50bc3ab2df9fa264b32f4d0484c5772941cf1fc13479c453b6d04d64daf01f
- Declared equals recomputed: no
- Intake: failed
- The recomputed digest is recorded. It does not become the declaration.

## 6. Digests equal, door is a paste

The bytes and both digests are the match in example 1. The door is a chat paste. Intake stops before the digest comparison is allowed to count.

- Door used: chat paste
- Result: NOT FETCHED
- Declared equals recomputed: not an intake match, because the door failed
- Do not repair it by hashing the paste and calling the hash a fetch.

## 7. Two exports, one report, no combined line

- A: example 1. Declared equals recomputed: yes. Parse A only.
- B: example 3. Declared equals recomputed: no. Do not parse B.
- Report custody: two lines. There is no third line that says the pair matched.

A match is the word yes on one export's own declared digest and its own recomputed digest, after a byte-exact door. Nothing else in this addendum is a match.
