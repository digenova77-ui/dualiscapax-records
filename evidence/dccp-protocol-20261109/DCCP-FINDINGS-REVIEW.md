# Review of the open-findings disposition

**Status:** Review of an assessment. Not a decision and not an amendment.
**Date:** 2026-11-09
**Disposition reviewed:** `DCCP-FINDINGS.md`, 8,249 bytes, SHA-256 `e9b4ecd9ab483525ac35e393ee712f7e4d0c20ac5d0a5527ec22bf7d1e228fee`.
**Draft it cites:** `DCCP-PROTOCOL.md`, 5,341 bytes, SHA-256 `e8b66429488ec27b4daa146ba8478dc31f44b5ba0961c0f3386808053296f63d`. Neither file was edited for this review.

The disposition does the job it was given. It quotes the draft, separates findings 1 through 6 from finding 7, names the kind of act that would close each one, and does not answer them. Four places in it say more than the draft, or less.

## R1. Finding 4 overlooks `prev`

The disposition says no field names an earlier message. Section 2 says `prev` is the SHA-256 of the previous message's preimage, or 64 zeroes. That field does name an earlier message. What the draft does not say is that `prev`, or any field, is the request a `RESPONSE` answers. The open question is the reply link, not the absence of every backward reference.

## R2. Finding 5 drops the continuity sentence

The disposition quotes section 6 through "a log it already holds" and stops. The draft continues: "the next envelope's `prev` must equal that log's tip." The comparison is written. What is not written is which log, and section 1 already says a check does not prove uniqueness of `prev`. The defect is those two limits, not a missing comparison.

## R3. Finding 7 is narrower than the later file

The disposition says `message-node.ts` refuses a signature that is not 128 hex characters as `FIELD`. That is true. The same function also refuses uppercase hex, because it accepts only `0-9` and `a-f`. Finding 2 left uppercase undecided. The later file has already chosen `FIELD`. The disposition does not record that choice.

## R4. Two lines add a requirement the draft does not contain

Finding 1 says the escaping rules must be stated without pointing at one language's function. The draft points at `JSON.stringify`. Adopting that function, with its specification, is one possible decision. The disposition ruled that form out.

Every finding says adoption is a Founder act. The draft says it is not a Founder ruling. It does not say a Founder act is the only act that can close a finding. That reservation is in the disposition, not in the draft.

## Result

The classification of findings 1 through 6 as unmade protocol questions, and of finding 7 as an unapplied code correction, still holds. R1 and R2 narrow two defects. R3 adds an existing code choice to finding 7. R4 marks two sentences as the disposition's own additions. None of the four closes a finding.
