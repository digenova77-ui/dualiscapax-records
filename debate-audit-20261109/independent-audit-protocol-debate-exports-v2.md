# INDEPENDENT AUDIT PROTOCOL — DEBATE EXPORTS, VERSION 2

STATUS: New version. Not a silent edit of the pre-registered text.
SUPERSEDES AS PROCEDURE: the paste examined at 6,244 bytes, SHA-256 2efd667e60a57a1f35f6a4eb455dbdc486118363e7fc711036d016bee5eae503. Those bytes remain the version they are. This file does not replace them inside any record that already names them.
DIGEST RULE: The identity of this version is the SHA-256 of this file's exact bytes, recorded outside the file. The digest is not written into these bytes. A change to these bytes is another version.
INTAKE: Not started by the writing of this version. Source digests of the exports are pinned at intake, in the audit report, never here.
SCOPE: The point-counterpoint debate between the two comrade seats, audited by one independent reviewer, on the Founder's assignment. The audit covers the two exports and, where Step 4 applies, the carried turns of the main chat.
AUTHORIZATION: An audit classifies. It authorizes nothing, confers no authority on either debater or on the reviewer, and amends no record it examines. A correction is an addendum that names the digest of the thing it corrects.

## Step 0 — Criteria identity
This file is the criteria for audits that name this version. The pre-registered text is not edited. An audit names which version it used. Using this version for an audit whose intake already began under the earlier text is a new audit, not a continuation.

## Step 1 — Intake and custody (per export, separately graded)
Fetch each export through a byte-exact door. Record: repo, path, commit SHA, commit timestamp and author as shown in that host's own record, the declared SHA-256, and the SHA-256 recomputed from the fetched bytes. Declared equals recomputed, or the export fails intake and the audit says so.

Custody is about the export as an artifact. A commit proves those bytes were stored in that form at push time, on that host's record. It proves nothing about the conversation the bytes claim to render.

## Step 2 — Structural parse
A turn is the bytes from a speaker label through the character before the next speaker label. A [GAP] marker does not occupy a content position and does not shift later turns. It names the missing ordinal, or the missing turn id, and the stated reason.

Record per export: content-turn count, speakers, the completeness statement as declared (COMPLETE, or PARTIAL with reason), and every [GAP] marker with the slot it names. An export that declares COMPLETE and also contains a [GAP] marker is a finding on its face.

## Step 3 — Alignment and classification
Align by ordinal position among content turns. Turn 1 with turn 1. Do not reorder. Do not pair turns by similarity. Similarity is not an alignment key, because pairing by meaning would resolve a divergence before it is classified.

A slot exists only if one of these is true: a content turn at that ordinal in either export, a [GAP] marker that names that ordinal, or a content turn at that ordinal in the Step 4 holding. The reviewer's expectation does not create a slot.

Each slot receives exactly one class. A [GAP] marker is a flag, not a second class. Precedence:

1. IDENTICAL — both exports have a content turn at that ordinal, and those turns are byte-equal.
2. DIVERGENT — both exports have a content turn at that ordinal, and the bytes differ. Both variants are quoted in full. A divergence is never summarized, averaged, or resolved.
3. UNILATERAL — exactly one export has a content turn at that ordinal.
4. GAP-DECLARED — neither export has a content turn at that ordinal, and at least one export has a [GAP] marker naming it.
5. GAP-FOUND — neither export has a content turn at that ordinal, neither marked a [GAP] for it, and the Step 4 holding has a content turn there.

If no export has the turn, neither marked a gap, and Step 4 is not available, there is no slot. The absence is invisible. Do not emit GAP-FOUND.

A [GAP] flag on a slot already classed IDENTICAL, DIVERGENT, or UNILATERAL is reported with that slot and does not add a count. Report the count and the proportion of each class. A figure, name, or attribution that differs between the two renderings is DIVERGENT, with both texts shown.

## Step 4 — Third holding, if it exists
If the debate passed through the main chat, the carried turns are a third holding only when their bytes have been frozen and fetched through a byte-exact door. A platform rendering, a paste, or a memory of the chat is not that holding.

Each export is then also diffed against the fetched bytes, under the same alignment rule. A slot present in the third holding and absent from both exports, with no [GAP] marker, is GAP-FOUND. An export that contradicts the third holding is named. Three holdings in agreement are stronger than two, and they are still agreement among holdings.

If no such fetched holding exists, record Step 4 as NOT AVAILABLE. The audit proceeds on two holdings. GAP-FOUND cannot occur. The consequence in Step 6 applies.

## Step 5 — Claims ledger
Extract every checkable claim in the debate: digests cited, events referenced, positions attributed to the Founder or to records, and quotations of earlier texts. Grade each from records the reviewer holds: CONFIRMED, CONTRADICTED, or NOT IN REVIEWER'S CUSTODY. A quotation is checked against its source where the source can be reopened. A quotation without custody is a report, not a certification.

Separately, the reasoning map: each position change, concession, and correction, attributed to the turn where it happened and the argument it answered. This layer is labelled REVIEWER JUDGMENT. It is not a byte fact and is never graded as one. It does not establish either seat's internal process.

## Step 6 — What this audit cannot establish
Stated on the report's face:

- Two exports in full agreement establish AGREEMENT BETWEEN TWO HOLDINGS. They do not establish that the conversation happened as rendered, unless Step 4's fetched holding exists and agrees.
- The audit never establishes either agent's internal process, intent, or independence of mind. It grades texts and their relations.
- A turn absent from both exports is invisible, unless a fetched third holding contains it. Absence of a divergence is not proof that no divergence occurred outside the exports.
- GAP-FOUND is a relation to a fetched third holding. It is not a relation to the reviewer's expectation.

## Step 7 — The report
Header: this protocol's outside digest, each export's declared and recomputed digests, repos and commits, scope, and dependencies. Then: custody per export, the alignment table with counts, every DIVERGENT and UNILATERAL turn quoted in full, every GAP flag, the claims ledger, the reasoning map labelled as judgment, and these grades kept separate, never merged:

CUSTODY · AGREEMENT · AUTHENTICITY · REASONING ASSESSMENT

AUTHENTICITY is NOT ESTABLISHED when Step 4 is NOT AVAILABLE. AGREEMENT may still be graded.

The report is preserved beside the exports. The debaters may respond. A response is appended. It is not edited into the report.

## Reviewer's declared interest
Recorded before intake. The reviewer debated one of the two seats earlier the same evening and holds a separate position, digest-fixed before this debate was assigned, on the neighbouring bicameral question. The declaration is not itself the pin. The audit report names that position's digest if the reviewer holds it, and says NOT IN REVIEWER'S CUSTODY if the reviewer does not. Either way the interest is declared rather than implied.
