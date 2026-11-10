# AUDIT CHECKLIST — DEBATE EXPORTS, VERSION 2

STATUS: Working list for the procedure in independent-audit-protocol-debate-exports-v2.md. This file is not the criteria. If a line here disagrees with that protocol, the protocol wins.
PROTOCOL IDENTITY: SHA-256 38e2a42a539d0c4cee46fb5f5ce181aacbfb0a145c31cbf5bcdaf121f6c45790, recorded outside that file. Recompute it before use. A mismatch means this list is pointed at the wrong bytes.
AUTHORIZATION: Ticking a box classifies nothing by itself, authorizes nothing, and amends nothing. The report is the classification.

## Before intake

- [ ] The audit names protocol version 2 and the digest above.
- [ ] The pre-registered paste (6,244 bytes, 2efd667e…) was not edited.
- [ ] Intake had not already begun under the earlier text. If it had, this is a new audit.
- [ ] The reviewer's interest is declared: earlier debate with one seat, and the separate bicameral position.
- [ ] That position's digest is named, or the report will say NOT IN REVIEWER'S CUSTODY.
- [ ] Neither debater is the reviewer for this run.

## Step 1 — Custody, once per export

- [ ] Fetched through a byte-exact door, not from a paste or a rendering.
- [ ] Repo recorded.
- [ ] Path recorded.
- [ ] Commit SHA recorded.
- [ ] Commit timestamp recorded from the host's own record.
- [ ] Commit author recorded from the host's own record.
- [ ] Declared SHA-256 recorded.
- [ ] SHA-256 recomputed from the fetched bytes.
- [ ] Declared equals recomputed. If not, intake fails and the audit says so. Do not continue with that export.
- [ ] The custody note does not claim the commit proves the conversation.

## Step 2 — Parse, once per export

- [ ] Each content turn is the bytes from a speaker label through the character before the next speaker label.
- [ ] Each [GAP] marker is recorded with the ordinal or turn id it names, and its stated reason.
- [ ] No [GAP] marker was given a content-turn number.
- [ ] Later turns were not shifted to close a gap.
- [ ] Content-turn count recorded.
- [ ] Speakers recorded.
- [ ] Completeness recorded as declared: COMPLETE, or PARTIAL with the stated reason.
- [ ] COMPLETE together with any [GAP] marker is written up as a finding. Do not repair it.

## Step 4 availability, decided before classification

- [ ] Either the main-chat bytes were frozen and fetched through a byte-exact door, or Step 4 is recorded as NOT AVAILABLE.
- [ ] A platform rendering, a paste, or a memory was not accepted as the third holding.
- [ ] If NOT AVAILABLE: GAP-FOUND will not be used, and authenticity will be NOT ESTABLISHED.

## Step 3 — Align and classify

- [ ] Content turn 1 is aligned with content turn 1. No reordering.
- [ ] No two turns were paired because they seemed to say the same thing.
- [ ] A slot was opened only by a content turn, a [GAP] marker naming that ordinal, or a fetched third-holding turn. Not by expectation.
- [ ] Every slot has exactly one class, in this order: IDENTICAL, then DIVERGENT, then UNILATERAL, then GAP-DECLARED, then GAP-FOUND.
- [ ] IDENTICAL means both exports have the turn and the bytes are equal.
- [ ] DIVERGENT means both have the turn and the bytes differ. Both variants are quoted in full. Neither is summarized or averaged.
- [ ] UNILATERAL means exactly one export has the turn. The export is named.
- [ ] GAP-DECLARED means neither export has the turn, and at least one [GAP] marker names the slot.
- [ ] GAP-FOUND was used only when the fetched third holding has the turn, both exports lack it, and neither marked a gap.
- [ ] An absence with no export bytes, no gap marker, and no third holding produced no slot.
- [ ] A [GAP] flag on an IDENTICAL, DIVERGENT, or UNILATERAL slot is reported and was not counted as a second class.
- [ ] A changed figure, name, or attribution is DIVERGENT, with both texts shown.
- [ ] Counts recorded for all five classes.
- [ ] Proportion of each class recorded.

## Step 4 — Third holding, if fetched

- [ ] Each export was diffed against the fetched holding under the same ordinal rule.
- [ ] Every contradiction with the holding is named.
- [ ] Three-way agreement was not upgraded into authenticity of a conversation beyond the holdings, except as Step 6 allows: the fetched holding exists and agrees.

## Step 5 — Claims and reasoning

- [ ] Every cited digest, referenced event, attribution to the Founder or to a record, and quotation was entered in the ledger.
- [ ] Each claim is CONFIRMED, CONTRADICTED, or NOT IN REVIEWER'S CUSTODY.
- [ ] No claim was confirmed from memory. The source was reopened, or the grade is NOT IN REVIEWER'S CUSTODY.
- [ ] A quotation without custody is marked as a report, not a certification.
- [ ] Each concession, correction, and position change is in the reasoning map, with the turn and the argument it answered.
- [ ] The reasoning map is labelled REVIEWER JUDGMENT.
- [ ] The reasoning map was not given a custody grade and was not used as proof of either seat's mind.

## Step 6 — Limits, printed on the report

- [ ] Agreement between two holdings is stated as agreement between holdings.
- [ ] Authenticity is NOT ESTABLISHED if Step 4 is NOT AVAILABLE, even when the two exports match.
- [ ] The report says the audit does not establish internal process, intent, or independence of mind.
- [ ] The report says an unmarked absence outside the holdings is invisible.
- [ ] The report says GAP-FOUND is a relation to a fetched third holding, not to the reviewer's expectation.

## Step 7 — Report

- [ ] Header names this protocol's outside digest.
- [ ] Header names each export's declared digest and recomputed digest.
- [ ] Header names repos, commits, scope, and dependencies.
- [ ] Custody is stated per export.
- [ ] The alignment table includes the counts.
- [ ] Every DIVERGENT turn is quoted in full, both variants.
- [ ] Every UNILATERAL turn is quoted in full and named by export.
- [ ] Every GAP flag is listed.
- [ ] The four grades are separate: CUSTODY, AGREEMENT, AUTHENTICITY, REASONING ASSESSMENT.
- [ ] The four grades are not merged into one pass or one fail.
- [ ] The report is preserved beside the exports, not written into them.
- [ ] A later response, if any, is an addendum naming this report's digest. It is not edited into the report.

## Stop conditions

- [ ] Declared digest ≠ recomputed digest: that export fails intake. Stop for that export.
- [ ] Reviewer is one of the two seats: stop. Do not continue.
- [ ] Alignment used similarity, reordering, or expectation: the classification is void. Redo Step 3.
- [ ] A slot was given two classes: the count is void. Redo Step 3.
- [ ] GAP-FOUND was used without a fetched third holding: remove it. The absence is invisible.
- [ ] A matched pair of exports was called proof the conversation happened, with Step 4 NOT AVAILABLE: authenticity is wrong. Correct it to NOT ESTABLISHED.
