# AUDIT CHECKLIST — DEBATE EXPORTS, VERSION 2, DETAILED

STATUS: Working list for independent-audit-protocol-debate-exports-v2.md. Not the criteria. If a line here disagrees with that protocol, the protocol wins.
PROTOCOL: SHA-256 38e2a42a539d0c4cee46fb5f5ce181aacbfb0a145c31cbf5bcdaf121f6c45790, outside that file. Recompute before use.
EARLIER LIST: The short checklist remains at 6,876 bytes, SHA-256 c41fbfd4baad2f3733d83fe358ebcf3c99953aea19ebcbdee025ae72af704297. This file does not erase it.
AUTHORIZATION: Filling a field classifies nothing by itself, authorizes nothing, and amends nothing. The report is the classification. This list defines no numeric pass mark. The protocol does not give one.

## 0. Identity, filled before any fetch

- Protocol file path used:
- Protocol SHA-256 recomputed at this seat:
- Recomputed digest equals 38e2a42a…: yes / no. If no, stop. The list is pointed at the wrong criteria.
- Audit name:
- Reviewer seat:
- Debater A:
- Debater B:
- Reviewer is neither debater: yes / no. If no, stop.
- Earlier text (6,244 bytes, 2efd667e…) still unchanged: yes / no. If no, stop and name the change. Do not repair it here.
- Intake already begun under the earlier text: yes / no. If yes, this run is a new audit. Say so in the header.
- Reviewer debated one debater earlier the same evening: declared in the report: yes / no.
- Separate bicameral position: digest named / NOT IN REVIEWER'S CUSTODY.

## 1. Custody, one block per export

Repeat the whole block. Do not average the two exports into one custody line.

Export label (A or B):

- Door used (raw public door, or the connector for a covered private repo). A paste, a chat rendering, or a retyped copy is not a door. If that is all this seat holds, write NOT FETCHED and stop for this export.
- Repo:
- Path:
- Commit SHA:
- Commit timestamp, copied from the host's own record:
- Commit author, copied from the host's own record:
- Declared SHA-256, copied as declared. If the export declares none, write NONE DECLARED. That is an intake failure.
- Bytes fetched, count:
- SHA-256 recomputed at this seat over those exact bytes:
- Declared equals recomputed: yes / no.
- If no: intake fails for this export. Write the two digests. Do not parse it. Do not let the other export's match cover it.
- Custody sentence that is permitted: these bytes were stored in this form at that commit, on that host's record.
- Custody sentence that is forbidden: the commit proves the conversation happened as rendered.

## 2. Parse, one block per export that passed intake

A content turn is the file's bytes from a speaker label through the character before the next speaker label. The label is inside the turn. Encoding is the file's own bytes. Do not normalize newlines, case, or Unicode before comparing.

A [GAP] marker is an annotation. It does not receive a content ordinal. It does not close up, and it does not push later content turns to new ordinals.

- Content-turn count:
- Ordinal 1 speaker:
- Last ordinal speaker:
- Full speaker set:
- Completeness word as written in the export: COMPLETE / PARTIAL / absent.
- If PARTIAL, the reason copied verbatim:
- If the completeness word is absent, write ABSENT. Do not infer COMPLETE.
- [GAP] markers, one line each: the ordinal or turn id it names, and the reason copied verbatim.
- COMPLETE is declared, and at least one [GAP] marker exists: yes / no. If yes, this is a finding on its face. Quote the completeness line and the marker. Do not delete the marker and do not downgrade the declaration.
- PARTIAL with no marker: record it. It is not automatically that finding.
- A marker that does not name an ordinal or a turn id: quote it and write SLOT NOT NAMED. Do not invent the number it probably meant.

## 3. Third holding, decided before any slot is classed

- Did the debate pass through the main chat: unknown / yes / no. Unknown is not a fetch.
- Were those carried turns frozen as bytes and fetched through a byte-exact door: yes / no.
- If yes, record the same custody fields as Step 1 for that holding: door, location, declared digest, recomputed digest, match.
- If the match fails, the holding is not fetched. Do not use it.
- A chat window, a pasted copy, or the reviewer's memory: rejected as the holding: yes. Write the rejection. Do not partially accept it.
- Step 4 status: FETCHED / NOT AVAILABLE.
- If NOT AVAILABLE, write this sentence in the worksheet before classification: GAP-FOUND will not be used. Authenticity will be NOT ESTABLISHED.

## 4. Slot decision, applied in order, once per ordinal

Start at ordinal 1. Continue through the last content ordinal present in either export, the highest ordinal named by a gap marker, and, only if Step 4 is FETCHED, the last content ordinal of the third holding. Then stop. Do not add an ordinal because a turn seems missing.

For ordinal N, answer in this order and stop at the first class:

1. Do both exports have a content turn at N?
   - Yes, and the turn bytes are equal: class IDENTICAL.
   - Yes, and any byte differs, including a speaker label, a space, a newline, a figure, a name, or an attribution: class DIVERGENT. Copy both turns in full into the report. No ellipsis. No summary. No choice of the better wording.
2. If not both: does exactly one export have a content turn at N?
   - Yes: class UNILATERAL. Name the export. Copy that turn in full.
3. If neither export has a content turn at N: does at least one [GAP] marker name N?
   - Yes: class GAP-DECLARED. Copy each marker and its reason.
4. If neither export has the turn and neither marker names N: is Step 4 FETCHED, and does that holding have a content turn at N?
   - Yes: class GAP-FOUND. Copy the holding's turn in full. Name both exports as lacking it.
5. Otherwise: no slot. Write nothing for N. Do not emit GAP-FOUND. The reviewer's belief that a turn belonged here is not an input.

After the class, still record flags. A flag is not another class and is not another count.

- Export A marked a [GAP] for this same N: flag A, copied verbatim.
- Export B marked a [GAP] for this same N: flag B, copied verbatim.
- A flag on IDENTICAL, DIVERGENT, or UNILATERAL is listed beside the slot. It does not increment GAP-DECLARED.

Forbidden moves, any one of which voids Step 3 and requires it to be redone:

- Reordering turns so that similar paragraphs line up.
- Pairing turn N in one export with turn M in the other because the subject matches.
- Ignoring whitespace, labels, or punctuation before calling the bytes equal.
- Splitting one speaker's bytes into two turns to improve the match.
- Treating a gap marker as the content turn that "would have been" there.
- Opening a slot from expectation when both exports and, if fetched, the holding are silent.

Illustration only. Not evidence, and not criteria. Export A turn 1 is "Alice: yes". Export B turn 1 is "Alice: yes". Class IDENTICAL. Export B turn 2 is "Alice: the count is 4". Export A has no turn 2 and marks [GAP] at 2, reason "not in this seat's log". Class UNILATERAL to B, flag A. The flag is not a second class. Neither export has turn 9, and neither marks it. With Step 4 NOT AVAILABLE, turn 9 is not a slot.

## 5. Count

- Slots classed:
- IDENTICAL, count and proportion (count divided by slots, fraction shown, not rounded to a pass):
- DIVERGENT, count and proportion:
- UNILATERAL, count and proportion, with how many belong to A and how many to B:
- GAP-DECLARED, count and proportion:
- GAP-FOUND, count and proportion. If Step 4 is NOT AVAILABLE, this count is 0 or the classification is void.
- Flags reported beside a class, count. These are not inside the five proportions.
- The five proportions use the same denominator. A flag-only note must not change that denominator.

## 6. Claims ledger, one row per checkable claim

Enter a row when the debate cites a digest, names an event, attributes a position to the Founder or to a record, or quotes an earlier text. Do not enter a row for a conclusion that has no checkable object.

Columns for each row:

- Export, or both, and the ordinal.
- Claim, copied verbatim from the turn. Do not paraphrase the claim and then grade the paraphrase.
- Kind: digest / event / attribution / quotation.
- Source that would decide it:
- Source reopened at this seat: yes / no.
- If yes, source location and the digest or bytes actually read:
- Grade: CONFIRMED / CONTRADICTED / NOT IN REVIEWER'S CUSTODY.
- CONFIRMED is permitted only when the reopened source matches the claim.
- CONTRADICTED is permitted only when the reopened source disagrees with the claim. Quote the source's conflicting bytes.
- NOT IN REVIEWER'S CUSTODY is the grade when the source was not reopened, including when the reviewer remembers it. Memory is not custody.
- A quotation whose source is not in custody is marked report, not certification. That mark is not a fourth grade. The grade remains NOT IN REVIEWER'S CUSTODY.

## 7. Reasoning map, labelled judgment

One row per concession, correction, or position change. None of these rows receives a custody grade.

- Ordinal where the change appears:
- Seat that changed:
- Earlier position, cited by ordinal:
- Later position, copied:
- Argument it answers, cited by ordinal:
- Reviewer's note. Permitted: the transcript shows a change after a stated argument, or the transcript shows the same words appearing without that argument in between.
- Forbidden in this note: the seat therefore thought, intended, mirrored, or possessed an independent mind. The protocol does not allow the map to establish internal process.

If there are no such rows, write NONE OBSERVED. Do not fill the map to make the debate look worked through.

## 8. Limits, copied onto the report's face

- Two exports that agree establish agreement between two holdings. They do not, by that agreement, establish that the conversation happened as rendered.
- Authenticity is NOT ESTABLISHED when Step 4 is NOT AVAILABLE. This remains true if every aligned turn is IDENTICAL.
- Authenticity may be graded only when a fetched third holding exists. Even then, agreement among three holdings is agreement among holdings. Write that limit beside any stronger sentence.
- The audit does not establish either agent's internal process, intent, or independence of mind.
- A turn absent from both exports is invisible unless a fetched third holding contains it.
- Absence of a divergence is not proof that no divergence occurred outside the exports.
- GAP-FOUND is a relation to the fetched holding. It is not a relation to the reviewer's expectation.

## 9. Report assembly, in this order

- Header: protocol version 2 and the outside digest 38e2a42a…, recomputed again at assembly.
- Header: each export's declared digest, recomputed digest, repo, path, commit, timestamp, author.
- Header: third holding FETCHED with the same fields, or NOT AVAILABLE.
- Header: scope, and the dependencies that were not in custody.
- Reviewer's declared interest, including the bicameral position's digest or NOT IN REVIEWER'S CUSTODY.
- Custody per export, including any intake failure.
- Structural findings, including COMPLETE-with-a-gap, quoted.
- Alignment table: ordinal, class, flag if any, which export.
- Counts and proportions.
- Every DIVERGENT slot, both turns in full.
- Every UNILATERAL slot, the turn in full, export named.
- Every GAP-DECLARED slot and every GAP-FOUND slot, sources quoted.
- Every flag, even on slots already quoted.
- Claims ledger.
- Reasoning map, with the heading REVIEWER JUDGMENT.
- The Step 6 limits, uncut.
- Four separate lines. Do not combine them into one verdict:
  - CUSTODY: per export, digests match, or intake failed.
  - AGREEMENT: the five counts. No threshold word unless the protocol later defines one. It has not.
  - AUTHENTICITY: NOT ESTABLISHED if Step 4 is NOT AVAILABLE. Otherwise state the relation to the fetched holding and keep the holdings limit.
  - REASONING ASSESSMENT: judgment only. Not a byte grade.
- Where the report is preserved, beside the exports, not inside them.
- Report's own SHA-256, recorded outside the report.

## 10. After the report

- A debater's response is a new artifact.
- The addendum names the report digest it responds to.
- The report's bytes are not edited to absorb the response.
- A correction of the report is an addendum naming that digest. It is not a quiet replacement.

## 11. Stop conditions

- Protocol digest does not recompute to 38e2a42a…: stop before intake.
- Reviewer is one of the two debaters: stop.
- An export's declared digest does not equal its recomputed digest: that export fails intake. Do not parse it.
- No declared digest: that export fails intake.
- Alignment reordered turns, paired by similarity, or normalized bytes before comparing: void the classification and redo Step 3 from the fetched bytes.
- A slot has two classes, or a gap flag was given its own class count: void the counts and redo Step 3.
- GAP-FOUND appears while Step 4 is NOT AVAILABLE: remove those slots. They were never slots.
- A slot was created because the reviewer expected a turn: remove it.
- AUTHENTICITY says anything but NOT ESTABLISHED while Step 4 is NOT AVAILABLE: correct the grade. Do not correct it by fetching a paste and calling the paste a holding.
- The four grades are folded into one pass or one fail: split them again.
- A claim is CONFIRMED or CONTRADICTED without the source reopened in this audit: change it to NOT IN REVIEWER'S CUSTODY.
