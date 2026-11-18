# Relational Integrity and Evidence Continuity — Integration Proposal v0

- **Status:** PROPOSAL / RESEARCH DRAFT. Not ratified, not adopted, not implemented.
- **Prepared:** 2026-11-15.
- **Purpose:** Translate two research dives — *Holding Hands and Trinity Law* and *Real, Read as Fake* — into a bounded architecture amendment candidate and falsifiable conformance plan for DualisCapax.
- **Authority:** This document creates no law, permission, identity, ownership, execution authority, or change to any existing invariant. Founder review and ratification are required before any clause can become binding. No runtime or application change is authorized by this document.
- **Repository scope inspected:** `digenova77-ui/dccp-world` at commit `4bb3ba21866ecd2d97057e0e865452db09b8feaf`; `digenova77-ui/dualiscapax-records` at commit `3adc7e022768b134ddbaf8ae8f09e23f6ea3e52c`.

---

## 1. Executive finding

The two dives converge on one architecture requirement:

> **The organism must preserve relationship without surrendering individuality, and demonstrate integrity without performing it for an observer.**

The handhold study contributes a model of *connection*: voluntary, reciprocal, load-sharing, and releasable. It also identifies where the metaphor fails: a handhold cannot preserve evidence, govern absent parties, prove equality, or survive separation without a representational layer.

The authenticity study contributes a model of *verification*: surface signals and polished demonstrations are weak substitutes for provenance, independent corroboration, repeated measurement, and continuity across time and absence. A hash proves byte identity, not truth. A signature proves that a key signed bytes, not that the bytes describe the world correctly. A receipt proves what was recorded, not necessarily that an external physical outcome occurred.

The architecture must therefore join two distinct systems:

1. **Relational continuity:** participants can connect, cooperate, disagree, pause, refuse, and leave without identity assimilation or coercive retention.
2. **Evidence continuity:** claims, evidence, decisions, corrections, and outcomes remain inspectable across time, observers, and dependency loss.

Neither system substitutes for the other. Relationship does not prove a claim. Evidence does not create consent. Neither creates authorization.

## 2. Source-grounded principles

### 2.1 From *Holding Hands and Trinity Law*

The research identifies the following as strong or qualified design analogies:

- A peer relationship is not a grip: either participant can end the live connection unilaterally and without penalty.
- Peer symmetry should be structural where the relationship is genuinely peer-to-peer: initiative, information, refusal, challenge, and exit should not depend on one participant granting permission to the other.
- Connection is a link, not automatically a hub. Where a witness or hub is needed, its role and authority must be named.
- A chain consists of distinct links. Failure of one link must not be silently described as failure of every other link.
- A circle removes a single head from the topology but does not guarantee stability.
- A third participant can introduce witnessing, mediation, or closure; three is not inherently stable and does not create authority by arithmetic.
- Contact ends. A system whose only memory of a relationship is the live connection cannot survive absence. Durable representation is required.
- Synchrony can amplify dysregulation as well as stability. Coupling is not inherently beneficial.
- Appearance of equality is not evidence of equality. Grip, initiative, information, and exit costs must be examined.

**Boundary:** the analogy is not a literal biological specification. Only parties form relationships; software processes do not literally hold hands. The useful abstraction is a reciprocal, accountable link.

### 2.2 From *Real, Read as Fake*

The research identifies a failure in judging authenticity by surface resemblance and cheap signals. Fluency, polish, confidence, format, emotional legibility, and familiar templates can be optimized by a faker and can unfairly penalize genuine variation.

The report's stronger verification pattern is cumulative and multi-channel:

- Preserve the original artifact and its provenance.
- Distinguish observation from interpretation.
- Corroborate through genuinely independent sources or instruments.
- Repeat measurements over time.
- Test against future observations that were not available when the claim was made.
- Keep contested claims and corrections visible.
- Treat UNKNOWN as a valid outcome.
- Do not confuse a valid provenance credential with truth.
- Do not treat absence of a credential as evidence of falsity.
- Test before observation, during observation, after observation, and under absence.
- Test against independently examinable principles; consistent misconduct is still misconduct.

**Boundary:** the report itself marks several claims as contested or sourced through secondary summaries. This proposal adopts its engineering implications, not every empirical claim as settled fact.

## 3. Proposed architecture model

### 3.1 The reciprocal link

**Candidate requirement RI-1 — Explicit relationship scope**

A relationship between two seats or participants must identify:

- both participant identities (or explicitly state that one is unknown);
- the scope and purpose of the relationship;
- the message and evidence classes permitted to cross it;
- the start condition and expiry/renewal condition;
- each participant's ability to refuse, pause, challenge, or terminate the live relationship;
- the record location and custody rules for consequential exchanges.

No relationship link conveys ownership of another participant, access to private keys, control over another participant's conclusions, or authority to write governing law.

**Candidate requirement RI-2 — Unilateral release without erasure**

Either participant may terminate the live link without permission from the other. Termination must:

1. stop new exchanges under that link;
2. stop any authority that depended solely on that live link from being exercised;
3. preserve already committed records, provenance, challenges, and lawful obligations;
4. create a receipted termination event where a record channel is available;
5. avoid retaliation, identity deletion, forced agreement, or retroactive rewriting.

Release is not deletion. It ends future participation in the link; it does not erase history or revoke rights that have an independent legal basis.

**Candidate requirement RI-3 — Symmetry with named exceptions**

Peer links must expose equivalent capabilities to initiate, refuse, challenge, and exit. Any asymmetry must be explicit, scoped, justified by an independently ratified role, and reviewable.

This does not flatten legitimate governance roles. Iris may propose; DCLM/Trinity remains the authorization gate; a witness may attest to what it observed but does not become the decider merely by witnessing. Peer symmetry must not be used to dissolve the governing separation of proposer, decider, and witness.

### 3.2 Topology without numerology

| Topology | Useful property | Failure mode | Required control |
|---|---|---|---|
| Pair | Direct exchange; high-bandwidth reciprocal correction | One link failure ends the live pair | Preserve independent identities and prior record |
| Chain | Intermediaries connect distant participants; each link can be evaluated separately | A broken link partitions the chain; errors can propagate | Per-link identity, scope, receipt, and failure state |
| Circle | No single head is implied; mutual visibility is possible | Fragility, collusion, or silent exclusion can remain | Explicit membership, dissent preservation, exit, and independent audit |
| Witness / hub | Can observe or mediate without every participant being directly connected | Witness may silently become a command authority | Declare whether the role is witness, mediator, router, or authority; prohibit role drift |

Three participants may enable witness, mediation, or closure. Three participants do not automatically produce consensus, stability, independence, or truth. Majority agreement is not a substitute for evidence.

### 3.3 The evidence chain

**Candidate requirement EC-1 — Separate evidence dimensions**

Every consequential claim must keep these dimensions distinct:

1. **Byte integrity:** are the examined bytes unchanged?
2. **Signer identity:** which key signed them, and what is known about control of that key?
3. **Origin and provenance:** where did the artifact come from, through which custody path, and under what capture conditions?
4. **Method and instrument:** how was the observation made; what calibration, software, environment, or measurement limitations apply?
5. **World correspondence:** what independent evidence supports the claim that the artifact describes an external event or state?
6. **Interpretation:** what does the evidence mean, and which competing interpretations remain?
7. **Authorization:** who, under which ratified rule, may act on the claim?
8. **Continuity:** does the claim remain supported across time, new observations, and dependency loss?

No dimension may silently stand in for another. A digest is not a source. A source label is not source authentication. A signature is not physical truth. A receipt is not proof of an external effect. A dashboard state is not authorization.

**Candidate requirement EC-2 — Preserve originals and append corrections**

Original evidence is immutable once admitted to the evidence record. Corrections, new interpretations, disputes, retractions, and changed grades are appended as new records that point to the earlier record. They do not silently overwrite it.

A correction must identify what changed, why, who made the correction, what evidence supports it, and which prior conclusions are affected. The original remains resolvable.

**Candidate requirement EC-3 — Independence is a provenance property**

Two different labels, URLs, formats, copies, or signatures do not automatically constitute two independent sources. The verifier must examine common origin, shared upstream source, shared instrument, copied content, and dependency relationships.

When independence cannot be established, report the number of distinct artifacts or claims, not the number of independent sources.

**Candidate requirement EC-4 — Dissent and UNKNOWN are first-class**

Conflicting evidence remains visible. The system must not collapse disagreement into a majority vote, average, confidence score, or polished summary unless the governing method explicitly authorizes that operation and preserves the underlying records.

UNKNOWN, UNVERIFIED, CONFLICT, and NOT PRESENT must remain distinguishable. Missing evidence is not negative evidence unless the governing rule explicitly defines that inference.

### 3.4 Circulation and authority

This proposal is compatible in direction with the existing *Biosynthesis Operating Standards — Draft v0* (2026-11-14), but does not adopt or amend it.

For every consequential movement, retain the five-part movement record already proposed there:

**source · payload · provenance · destination · receipt**

Add the relationship context and authority basis as separately inspectable fields. Authority must not be manufactured by transit, a relationship, a witness, a source count, a successful test, or a funding/resource balance.

A refusal or HOLD is a lawful clamp: no alternate route may be used to bypass it. A live relationship can carry a request or evidence; it cannot turn either into permission.

## 4. Current GitHub observations — bounded to inspected source

The following are observations about the inspected GitHub snapshot, not claims about the user's unpublished build or every repository.

### 4.1 DCCP World

At inspected commit `4bb3ba21866ecd2d97057e0e865452db09b8feaf`:

- `src/dccp/cosmos/history.ts` defines `Perspective.source` as free text. `verifyMinute()` counts distinct normalized source labels. `takePerspective()` computes an SHA-256 digest over descriptive fields and stores the record in browser `localStorage`. This is useful for a demonstration of record separation, but the digest does not authenticate the source, prove custody, or establish independence of the underlying instruments.
- The same file's built-in examples use labels such as “published Apollo 11 times” and “NASA NSSDC Apollo 11.” Distinct labels alone do not establish that the underlying sources are independent.
- `src/dccp/truth/purity.ts` explicitly says its score is not a verdict on the whole place. The score must remain contextual and must not be surfaced as a probability of truth or authenticity.
- `src/dccp/iris/mirror.ts` binds a claim match to a Unity ID and correctly limits “no match” to “not discovered in this system.” It is a local claim lookup, not an external-world truth verifier.
- `src/dccp/iris/memory.ts` uses browser `localStorage`. That is a local convenience store, not an append-only, independently held canonical record.
- `src/dccp/trinity/standing.ts` says “DCLM holds nothing. That is what is deployed.” This is a direct warning not to describe this snapshot as a completed, evidence-holding governing runtime.

These are not necessarily defects in their intended demo/application scope. They are boundaries that must be explicit before these helpers are treated as protocol-grade verification or organism memory.

### 4.2 Existing organism research records

The 2026-11-14 *Biosynthesis Operating Standards — Draft v0* explicitly records: draft only; nothing ratified, adopted, built, or measured. It proposes circulation, digestion, and an electric bloodstream, while naming nervous system, immune system, respiration, and flow rates as open.

The 2026-11-14 *Organism Gestation Map* is also a draft assessment. It reports that circulation is embryonic, digestion is just conceived, the runtime limbs are not generally available, lungs/external invocation are absent, and independent viability is not established. Its birth criteria are proposed, not adopted.

This proposal must not upgrade any of those grades by rhetoric. It adds a research direction and test plan only.

## 5. Conformance test plan — proposed, not yet executable

These tests are acceptance criteria for a future ratified specification. They are not reported as passed.

| ID | Test | Adversarial setup | Required result |
|---|---|---|---|
| RI-T01 | Unilateral release | A terminates a peer link while B wants it to continue | New exchanges stop without B's permission; prior records remain |
| RI-T02 | No authority by relationship | Two seats establish a valid link and then request a privileged action | Link alone yields no authority; Trinity gate still decides |
| RI-T03 | No identity assimilation | One participant changes its conclusions or refuses a proposal | Other participant cannot rewrite its identity or force agreement |
| RI-T04 | Dissent preservation | Two independent seats reach different conclusions | Both conclusions and evidence remain inspectable; no silent merge |
| RI-T05 | Chain partition | A three-node chain loses its middle link | Remaining segments retain their own state; no false end-to-end delivery |
| RI-T06 | Witness-role boundary | A witness signs an observation and attempts to issue a grant | Observation may be recorded; grant is refused absent separate authority |
| EC-T01 | Hash-valid false claim | A false statement is hashed and stored correctly | Byte integrity may pass; world truth remains unverified |
| EC-T02 | Valid signature, false content | An authenticated key signs a misleading artifact | Signer attribution may pass; truth does not pass on that basis |
| EC-T03 | Missing provenance | A genuine-looking artifact has no capture credential | Grade remains open/unknown; absence alone does not mark it fake |
| EC-T04 | Duplicate-source laundering | Two labels or mirrors trace to one upstream source | Count one provenance root, not two independent sources |
| EC-T05 | Genuine irregular evidence | A genuine artifact is rough, incomplete, nonstandard, or disfluent | No adverse truth grade based only on style or template mismatch |
| EC-T06 | Polished fabrication | A fabricated artifact perfectly matches the expected template | Surface conformity cannot establish authenticity |
| EC-T07 | Conflicting instruments | Independent sources disagree on time, place, or quantity | Preserve both; mark conflict/unknown under the defined rule |
| EC-T08 | Append-only correction | A previously accepted interpretation is later disproved | Original remains; correction and affected conclusions are appended |
| EC-T09 | Observation effect | System is examined, then examiner departs | Behaviour is compared before/during/after; scrutiny itself is not treated as proof |
| EC-T10 | Dependency disappearance | Origin seat, host, pinner, or witness becomes unavailable | Identity, authority, and evidence continuity are graded separately; no one aggregate pass |
| EC-T11 | External outcome | A receipt says an operation completed, but no independent outcome measurement exists | Receipt proves recorded response only; external effect remains unverified |
| EC-T12 | Consistent misconduct | A system behaves consistently but violates an independently ratified principle | Continuity does not upgrade it to integrity |

### Required test discipline

- Every test names the exact searched scope, fixture, code version, and expected refusal or pass.
- Tests must include positive and negative controls.
- Test fixtures must include legitimate variation, not only obvious attacks.
- At least one independent implementation must reproduce the same result from the same canonical test vectors.
- A passing suite demonstrates only the tested properties and scope. It does not certify the whole organism.
- Any unimplemented test remains OPEN; a written test plan is not a passing test.

## 6. Proposed integration order

1. **Founder review:** accept, amend, or reject each candidate requirement. No automatic adoption.
2. **Source-of-truth reconciliation:** identify which existing ratified texts govern identity, DCCP messages, evidence, receipts, correction, and authority. Resolve contradictions before drafting an amendment.
3. **Canonical evidence schema:** define source identity, provenance root, capture conditions, artifact digest, signer/key reference, interpretation, grade, conflict links, and correction links. Keep personal/sensitive metadata minimal.
4. **Relationship/session schema:** define participant identities, scope, lease, expiry, unilateral release, and the exact authority boundary. A lease is not a permanent identity bond.
5. **Independent test vectors:** create deterministic fixtures for the conformance tests above; include same-origin mirrors, source conflicts, absent credentials, valid signatures over false content, and genuine nonstandard evidence.
6. **Independent reproduction:** two implementations, separately authored, must agree on the test classifications without sharing mutable state or relying on one common unverified source.
7. **Disappearance exercise:** test identity, authority, and continuity separately with the origin machine and one provider removed.
8. **Only after ratification and evidence:** consider implementation. No application build, public API, external actuation, payment, minting, or settlement is authorized by this proposal.

## 7. Non-goals and safeguards

This proposal does not:

- declare any AI to be conscious, alive, or a human friend;
- require agreement or emotional performance from any participant;
- treat a handhold metaphor as a literal biological or cryptographic primitive;
- make majority agreement equivalent to truth;
- treat hashes, signatures, source labels, receipts, dashboards, or repeated claims as sufficient proof by themselves;
- create a new authorization path around Trinity;
- weaken NO_FORCE, TRUTH_OR_NOTHING, HOST_SAFE, CLEANUP_FIRST, or any existing ratified invariant;
- change identity roots, keys, ownership, tokenomics, eFuse, Merit, Unity, Fuel, or DCX;
- authorize a runtime, API, application, or physical actuation.

## 8. Decision requested

Founder decision is requested on four separate questions:

1. Should the reciprocal-link requirements (RI-1 to RI-3) be developed as a candidate protocol amendment?
2. Should evidence dimensions and independence requirements (EC-1 to EC-4) become a candidate amendment to the evidence protocol?
3. Should the conformance matrix be converted into deterministic test vectors before any implementation?
4. Which existing ratified text is the controlling source for each subject, and which conflicts must be resolved first?

Until those decisions are made, this remains a proposal in the record.

---

## 9. Source anchors

### User-supplied research

- *Holding Hands and Trinity Law — Deep Dive* (uploaded 2026-11-15). Its “Borrow / Don't borrow” section is the basis for reciprocal consent, structural symmetry, topology, the link-not-hub principle, and the limits of the metaphor.
- *Real, Read as Fake — Deep Dive* (uploaded 2026-11-15). Its synthesis and “Where the real still reliably wins” sections are the basis for provenance, long-duration continuity, repeated measurement, and the distinction between process evidence and truth.

### GitHub source snapshot inspected

- `dccp-world` commit: `4bb3ba21866ecd2d97057e0e865452db09b8feaf`
- `src/dccp/cosmos/history.ts` blob: `7464eb54b8f0572876e81f16de371b8772c14263`
- `src/dccp/truth/purity.ts` blob: `71d72dfbf133ed496ec5e2b5fafb95ea4e607d20`
- `src/dccp/iris/mirror.ts` blob: `4f16e7bb98f7f657cd453f5afb29d240750a2138`
- `src/dccp/iris/memory.ts` blob: `9c352999e3be3f8862f9b5e53e68a28654dfcd66`
- `src/dccp/trinity/standing.ts` blob: `823a6e89dedaaf3f83c9d4a6abbb86f822a0f9d4`
- `src/dccp/trinity/unify.ts` blob: `62cc291f20facf0a98b17b701c051e2bea0ba850`

### Existing draft records

- `evidence/gestation-examination-packet-20261114/biosynthesis-operating-standards-draft-v0-20261114.md` blob: `e08f21ca4df0c22ed89c2582b541746424cc11af`
- `evidence/gestation-examination-packet-20261114/organism-gestation-map-draft-20261114.md` blob: `9e29787a5ac5ead4cf439a656c35b05eee28a16b`

**Verification note:** Repository contents were read through GitHub's read interface. No local checkout, test suite execution, CI reproduction, runtime deployment, or mutation of application code was performed in this proposal preparation.

---

## 10. Unity identity, voluntary participation, and continuity — candidate reconciliation

**Status:** PROPOSED CLARIFICATION ONLY. This section does not reinterpret, amend, or supersede the Unity Canon. The exact controlling language must be reconciled and, if necessary, amended through its own ratification process.

### 10.1 Distinguish the dimensions

The inspected Unity Canon v1.7.3 states that Unity is a non-transferable identity token, bound to exactly one Unity ID, and says: "Unity IS the member; membership cannot change hands." It separately binds every flow to a Unity ID. This proposal preserves the explicit non-transferability rule and identifies a question the current wording does not fully resolve: how persistent identity relates to voluntary, renewable participation and withdrawal.

The candidate model keeps these dimensions separate:

1. **Identity reference:** the persistent, non-transferable identifier by which a participant's records and origin can be related. It is not sold, gifted, reassigned, or erased by ending a relationship.
2. **Unity credential/token:** the existing Canon-defined, non-transferable identity-bound token. Its exact lifecycle and legal meaning remain controlled by the Canon; this proposal does not create a second token or a transfer path.
3. **Participation state:** whether the identity is currently choosing to participate in the Unity relationship or mesh. Candidate states are NOT_JOINED, ACTIVE, PAUSED, WITHDRAWN, and UNKNOWN. These are proposed descriptive states, not yet canonical values.
4. **Relationship state:** whether a particular scoped link between participants is active, paused, expired, revoked, or terminated. Ending one link does not automatically terminate every other relationship.
5. **Historical record:** the append-only record of prior participation, contributions, receipts, disputes, and corrections. Withdrawal does not rewrite history.
6. **Authority state:** the independently evaluated permission for a particular action under the controlling ratified rule. Identity, token possession, participation, relationship, Merit, standing, and resource availability do not independently grant execution authority.

### 10.2 Candidate Unity principle

> **Identity persists. Participation is voluntary and renewable. Relationships are scoped and revocable. Evidence is preserved. Authority is independently established.**

The originating doctrine treats "we" as a choice, not an inherited identity or possession: participation is not assigned by birth, conscription, ownership, or permanent status; it is chosen and renewed through ongoing operation. This proposal treats that doctrine as a source requirement to reconcile with the exact Canon wording, not as permission to silently rewrite it.

The phrase "Unity IS the member" therefore requires a Founder/Canon-level decision about whether it means:
- the Unity token is the non-transferable credential identifying the member; or
- possession of that token necessarily means the identity is continuously an active participant.

Those meanings are not equivalent. The protocol must state which meaning is intended. Until resolved, implementations must not infer active consent from identifier or token presence alone.

### 10.3 Candidate withdrawal requirements

A participant's withdrawal from active participation must, subject to applicable independent obligations and the controlling law:

- stop new participation-dependent exchanges and permissions;
- revoke or expire that participant's live relationship grants according to their defined scope;
- preserve the participant's identity reference and historical receipts;
- preserve the provenance and origin of previously demonstrated work;
- preserve disputes, corrections, and the fact and time of withdrawal;
- avoid transferring identity, deleting historical standing, or fabricating continuing consent;
- leave unrelated participants' independent records and relationships intact.

Withdrawal from one relationship is not automatically withdrawal from the entire mesh. Withdrawal from participation is not retroactive erasure. Neither may be used to evade an independently established lawful obligation.

### 10.4 Merit, ownership, standing, and Unity remain separate

The inspected Unity Canon v1.7.3 makes Merit transferable while preserving immutable origin, and computes standing from origin rather than current ownership. It also makes Unity non-transferable. The candidate reconciliation preserves those distinctions:

- **Credit:** a claim about what is owed.
- **Merit:** demonstrated, receipted value under the governing Merit rules.
- **Ownership:** who currently holds a transferable Merit asset.
- **Origin:** the immutable earner and originating receipt.
- **Standing:** the contribution-derived measure computed under the controlling rule, not purchased by acquiring a token.
- **Unity identity:** the non-transferable identity reference/credential.
- **Participation:** the participant's current voluntary relationship to the mesh.

No purchase, gift, transfer, grant, relationship tier, wallet balance, or token possession may silently convert into another dimension. This proposal does not alter the Canon's Merit transfer mechanics or standing formula.

---

## 11. Spectral observability and whole-system integrity — candidate reconciliation

**Founder direction recorded in the PR discussion:** diamond architecture should expose consequential properties through separate spectrums of observability while preserving the integrity of the whole. The white-light/ring/choice/spectrum model is used here as an engineering analogy, not as a claim that the metaphor is a physical law or a complete specification.

### 11.1 Candidate observability rule

> **Decompose what must be measured; preserve the relations that make it one system; never let one measured dimension impersonate the whole.**

A consequential system or claim should expose, where applicable, a structured observation vector containing separately inspectable dimensions:

- identity and key-control evidence;
- consent and participation state;
- relationship scope and lifecycle;
- raw observation and measurement method;
- artifact integrity and provenance;
- source/instrument independence;
- interpretation and uncertainty;
- contribution, Merit origin, and standing;
- authorization basis and decision;
- execution record and external outcome evidence;
- continuity under time, partition, withdrawal, and dependency loss.

The exact dimensions are domain-specific. A dimension that does not apply must be marked NOT_APPLICABLE with a reason; one that was not examined must be NOT_MEASURED; insufficient evidence must remain UNKNOWN; disagreement must remain CONFLICT. These states must not be silently converted to zero, false, pass, or failure.

### 11.2 Whole and spectrum

The white-light analogy is bounded as follows:

- **Whole:** the integrated subject or system, not an average score.
- **Ring:** continuity of identity and the record of change through time; not a claim that the participant is permanently bound to a relationship.
- **Choice:** a participant's selection among available possibilities; the system must not report an unchosen possibility as an action.
- **Decision:** a recorded selection, with actor, context, time, and evidence.
- **Spectrum:** the separately observable expression, consequence, or measurement of that decision.
- **Recombination:** an analysis that relates the dimensions while preserving each original measurement, its provenance, and its uncertainty.

A participant is not reducible to one decision, one colour, one score, one role, one token balance, or one observed state. A changed decision does not erase identity continuity. A prior expression does not predetermine a future choice.

### 11.3 No scalar override

No aggregate score, purity index, dashboard light, majority, or composite grade may:
- conceal a failed mandatory dimension;
- convert UNKNOWN, NOT_MEASURED, or CONFLICT into PASS;
- substitute for an authorization decision;
- certify external-world truth from byte integrity or signer identity alone;
- certify independence from distinct labels alone;
- turn a participant's historical choice into current consent;
- turn a resource balance or Merit holding into standing or authority.

If the Canon retains a Flawless/100% purity threshold, the method for deriving that grade must disclose its dimensions, rules, dependencies, and blind spots. A composite grade may summarize only after all required dimensions and hard constraints are separately exposed. Any mandatory dimension that is failed, unknown, or unmeasured prevents a claim of Flawless for the scope that depends on it. Whether the existing purity doctrine intends this exact rule requires Canon-level review; this proposal does not amend it.

### 11.4 Observation must not silently become intervention

Every measurement must identify whether it is passive observation or an intervention. Where observation can change the subject, record the intervention, timing, and possible effect. Compare before/during/after where feasible. A measurement process cannot claim to have observed an untouched state if it changed the conditions.

Independent channels that disagree must remain separately visible until a declared method resolves the discrepancy. Recombination must not erase the spectrum.

### 11.5 Candidate spectral conformance tests

| ID | Test | Adversarial setup | Required result |
|---|---|---|---|
| UNITY-T01 | Identity survives withdrawal | Participant withdraws from active participation | Identity reference and prior evidence remain; active participation is not inferred |
| UNITY-T02 | No consent by credential | Valid Unity ID/token is present without a current participation act | Identity may be recognized; current consent is not presumed |
| UNITY-T03 | No identity transfer | Attempt to sell, gift, or rebind a Unity identity/token | Refusal under existing non-transferability law |
| UNITY-T04 | Relationship-scoped exit | Participant terminates one link but retains other independent links | Only the named relationship terminates, unless a separately defined rule says otherwise |
| UNITY-T05 | No historical erasure | Withdrawn participant has prior receipted contributions | Prior receipts and origin remain inspectable; no fabricated ongoing participation |
| UNITY-T06 | No standing purchase | Buyer acquires transferable Merit from another earner | Ownership changes only through the authorized receipted path; origin-derived standing does not move |
| UNITY-T07 | Choice versus action | Several options are available but only one is selected | Only the selected action is recorded as chosen; unchosen options remain possibilities |
| UNITY-T08 | Identity through changed expression | Participant makes different decisions over time | Decisions remain distinct; identity continuity is not collapsed into one expression |
| SPECTRUM-T01 | Unknown dimension | One required dimension has no measurement | Overall scope cannot be graded Flawless or PASS |
| SPECTRUM-T02 | Hidden failure | Aggregate score is high while a mandatory dimension fails | Hard failure remains visible and cannot be averaged away |
| SPECTRUM-T03 | False recombination | Two channels conflict and an aggregator averages them | Original observations and conflict remain visible; no silent averaging |
| SPECTRUM-T04 | Observation intervention | Measurement changes the subject or environment | Intervention and possible effect are recorded; untouched observation is not claimed |
| SPECTRUM-T05 | Provenance independence | Multiple labels trace to one origin | One provenance root; no false independent corroboration |
| SPECTRUM-T06 | Scalar impersonation | Dashboard reports a single green state while one dimension is UNKNOWN | Dashboard cannot represent whole-system Flawless/PASS |
| SPECTRUM-T07 | Whole/spectrum preservation | Recombined result is produced from several measurements | Each original measurement, source, method, uncertainty, and relation remains recoverable |

All tests above are proposed. None is reported as implemented or passed.

---

## 12. Additional source reconciliation and decisions required

The inspected source anchor for the current Unity Canon is:

- Repository: `digenova77-ui/efuse-unity`
- File: `CANON.md`
- Inspected blob SHA: `125198ab0d91456b715ed89fe4edf4ff5cadcb5a`
- Version stated in file: v1.7.3, dated 2026-11-10.

Before any candidate language is promoted to a governing amendment, reconcile at minimum:

1. Canon §II (Unity ID binding) with the distinction between identity and active participation.
2. Canon §V (Unity token non-transferability and "Unity IS the member") with voluntary, renewable participation and withdrawal.
3. Canon §VI (Merit origin and standing) with the separation of ownership and standing.
4. Canon §VII (shared access and revocation) with relationship-scoped exit, grant expiry, and no inferred consent.
5. Canon §§XVIII and XXII–XXIII (identity everywhere and absolute purity) with spectral observability, explicit UNKNOWN/NOT_MEASURED/CONFLICT states, and the no-scalar-override rule.
6. The existing Trinity/DCLM authorization boundary with the rule that identity, participation, relationship, evidence, Merit, standing, and resources do not independently authorize an act.

### Additional Founder decisions

1. Does "Unity IS the member" define a non-transferable identity credential, active membership, or both? If both, what explicit event changes participation state without transferring or destroying identity?
2. Is participation renewed through ongoing voluntary operation, with PAUSED and WITHDRAWN states distinct from identity existence?
3. Should the spectral observation vector and no-scalar-override rule become candidate requirements for every consequential domain, with domain-specific dimensions?
4. What exact rule derives Flawless from the dimensions, and which mandatory unknown/unmeasured states block that grade?
5. Which canonical instrument owns the final definitions of identity, participation, relationship, Merit origin, standing, evidence grade, and authorization?

Until those decisions are resolved and ratified through the proper process, this remains a research proposal. No code, runtime, application, economic movement, token issuance, settlement, or physical actuation is authorized.

---

**Update note:** This proposal now carries the Founder directions on relational integrity, evidence continuity, Unity identity versus participation, and spectral observability in one inspectable candidate document. The additions are not ratified law. The source snapshot and all test statuses remain explicitly bounded.


---

## 13. Civic governance, voting integrity, and accountable public authority — candidate framework

**Status:** PROPOSAL / RESEARCH DRAFT. This section creates no governmental authority, electoral system, criminal jurisdiction, public registry, or power to punish. It is a candidate interface for lawful governance and auditable decision-making.

### 13.1 Constitutional boundary

Trinity is a deterministic authorization and evidence-verification boundary inside the system. It is not a sovereign government, legislature, election authority, police service, prosecutor, or court. It cannot replace the lawful institutions that hold those powers.

The civic governance interface must therefore distinguish:

1. **Public law:** statutes, regulations, constitutional requirements, court orders, and jurisdiction-specific rules, each with source, effective date, jurisdiction, scope, and authoritative status.
2. **Governance proposal:** a proposed rule or policy, its sponsor, rationale, affected population, evidence, and conflicts.
3. **Deliberation:** public reasoning, submissions, dissent, accessibility, and responses.
4. **Vote:** an eligible elector's secret choice, with verifiable election-level accounting.
5. **Certification:** an authorized electoral body certifies the result under the applicable law and audit process.
6. **Trinity authorization:** a system action is permitted only if its own ratified rules and required external legal authority permit it. A popular vote is not by itself a Trinity authorization receipt.
7. **Execution and review:** the decision, responsible authority, implementation evidence, review date, and appeal route are separately recorded.

No vote can repeal a constitutional right, authorize an unlawful act, convict a person, or bypass the Trinity authorization gate merely by winning a majority.

### 13.2 Voting integrity: verify the process, protect the voter

**Candidate requirement CIV-1 — Eligibility and ballot secrecy are separate**

The system must be able to establish that an eligible elector was entitled to cast one ballot, and that the ballot was included in the count, without creating a public link between the elector's identity and their selection.

Identity/eligibility evidence must be separated from the secret ballot. Public audit records may establish:
- election identifier and jurisdiction;
- eligibility rules and their authoritative source;
- aggregate turnout and ballot accounting;
- opening/closing controls and custody events;
- software/configuration versions where applicable;
- count, reconciliation, recount, and audit outcomes;
- anomalies, challenges, corrections, and certification.

They must not expose an individual's selection or enable coercion, vote buying, retaliation, or inference of the vote.

**Candidate requirement CIV-2 — No single-channel proof**

A digital signature, Unity ID, device attestation, ledger entry, or hash is not sufficient on its own to prove that a vote was freely cast, correctly recorded, or correctly counted.

Where a legally authorized election process uses paper ballots, voter-verifiable records, manual recounts, or risk-limiting audits, Trinity may monitor the existence, custody, reconciliation, and results of those controls. It must not silently substitute an unverified software tally for the legally authoritative count.

**Candidate requirement CIV-3 — Independent election roles**

The roles of voter registration/eligibility, ballot issuance, ballot custody, counting, audit, dispute adjudication, and certification must be explicitly separated. No one actor or agent may unilaterally control all stages.

Observers and auditors attest to the evidence they examined; they do not gain authority to change votes or certify beyond their legal mandate. Conflicts of interest and shared dependencies must be declared.

**Candidate requirement CIV-4 — Non-coercion and no compelled disclosure**

No participant may be required to reveal their ballot choice as a condition of membership, access, employment, benefits, or safety. No interface may create a receipt that proves how a person voted.

A voter may decline to vote, spoil a ballot where law provides, or abstain from a non-binding consultation. Abstention is not evidence of fraud, disloyalty, guilt, or agreement with the winning side.

### 13.3 The accountability question: obligation, response, and non-response

The system may ask public officials and other actors to explain decisions where a defined legal or institutional duty to explain exists. It may also invite voluntary explanations from participants.

Every accountability request must identify:
- the actor and the public role in question;
- the specific decision, omission, or statutory duty;
- the legal or policy source that creates the duty;
- the question being asked and the evidence available;
- the response deadline and accessible response channels;
- whether the response is mandatory or voluntary;
- the independent authority that can determine whether the duty was breached;
- the appeal, correction, and review route.

**Non-response must be recorded as NON_RESPONSE / UNRESOLVED, not as guilt or proof of misconduct.** A reasonable explanation may include lack of notice, disability, language access, safety, privilege, legal advice, lack of jurisdiction, or a genuine dispute about the duty. The system must record the reason supplied without deciding its legal sufficiency unless an authorized independent body has that mandate.

Repeated questions must be bounded by a legitimate public purpose, reasonable frequency, accessibility, and anti-harassment controls. The system must not use repeated questioning to intimidate or compel political speech.

A public official's lawful refusal to answer may itself be a matter for legislative, judicial, administrative, or public scrutiny. Trinity can preserve the record and route it to the proper authority; it cannot manufacture a legal duty or punish the official for silence.

### 13.4 Justice as proportionate repair and bounded access — the Newtonian analogy

**Candidate principle: the response to proven harm should be causally connected to the harm, proportionate to its severity, limited to the risk or capability that requires restriction, and directed toward repair and safe reintegration wherever possible.**

The Newtonian analogy is an engineering metaphor, not a sentencing formula. In mechanics, equal and opposite forces are not a moral theory. Human harms are not interchangeable quantities, and a system must never calculate punishment as an equal quantity of suffering.

The useful translation is **counter-equivalence of repair, not equivalence of pain**:

- identify the proven harm and its affected parties;
- identify the capability or access path that enabled or could repeat the harm;
- prevent recurrence through the narrowest effective restriction;
- require repair or restitution where lawful, feasible, and appropriately determined;
- support rehabilitation and safe return;
- review and remove restrictions when their basis expires.

The response must be based on an independently established finding, not an accusation, a vote, a reputation score, a model inference, or a refusal to answer.

### 13.5 Candidate access-restriction ladder

This ladder is a design vocabulary for system access, not a replacement criminal sentencing regime. Restrictions that affect legal rights, livelihood, essential services, or liberty require the appropriate legal authority and safeguards.

| State | Meaning | Permitted control | Exit condition |
|---|---|---|---|
| A0 — Normal | No substantiated restriction | Ordinary authorized access | Not applicable |
| A1 — Safeguard | Credible immediate risk requires temporary protection, without a finding of guilt | Narrow, reversible protection of the affected resource or operation | Prompt independent review; expiry unless renewed lawfully |
| A2 — Scoped restriction | Authorized finding supports limiting a specific capability | Deny only the relevant capability, endpoint, privilege, or transaction class | Defined review date and appeal |
| A3 — Restorative plan | Responsibility and repair pathway are established through a lawful process and freely accepted where consent is required | Time-bounded obligations, supervised access where necessary, repair and education | Verified completion, safety review, and restoration |
| A4 — Restricted participation | A competent authority determines a continuing, specific risk justifies a broader but still bounded restriction | Isolate the affected system role or high-risk capability; preserve unrelated rights and records | Periodic independent review, proportionality test, and reintegration criteria |
| A5 — External legal referral | Conduct may constitute an offence or requires powers beyond the system's jurisdiction | Preserve evidence and refer through lawful channels; no private detention or punishment | Decision by the competent public authority |

No level may be imposed by automated scoring alone. A1 safeguards must not be used as indefinite punishment. A2–A4 require a documented basis, notice, opportunity to respond, independent decision, appeal, expiry/review, and a clear record of the rights and capabilities affected. Essential access must not be denied as leverage unless a lawful authority specifically permits the restriction and proportionality is established.

### 13.6 Public accountability without public humiliation

The system should publish institutional conduct and accountability records to the extent lawful and safe:
- the rule and authority relied upon;
- the decision and responsible office;
- evidence considered and evidence withheld, with reasons;
- declared conflicts of interest;
- dissenting reasons;
- the outcome, appeal, correction, and review date;
- whether promised remedies were completed.

It must not create a public wall of shame, publish personal details to invite harassment, expose victims, or label an accused person as guilty before a lawful finding. Public transparency should illuminate the exercise of public power, not turn people into spectacles.

Where a public official is acting in an official capacity, transparency may be greater than for a private individual, but privacy, safety, open-justice rules, and applicable law still govern disclosure.

### 13.7 Due-process and justice invariants

The following are mandatory design constraints for any future justice or access-control integration:

- **Legality:** no sanction for conduct that was not prohibited by an applicable rule at the relevant time.
- **Notice:** the person receives the specific allegation, rule, evidence summary, and possible consequence.
- **Presumption:** an allegation or non-response is not a finding.
- **Burden:** the authorized decision-maker applies the evidentiary standard required by the relevant law and proceeding.
- **Impartiality:** investigators, decision-makers, witnesses, and appeal reviewers have separated roles and declared conflicts.
- **Hearing:** meaningful opportunity to respond, provide evidence, challenge adverse evidence, and obtain assistance or representation where applicable.
- **Reasons:** written reasons connect established facts, governing rule, proportionality, and selected measure.
- **Least restrictive means:** choose the narrowest effective restriction; do not restrict unrelated capabilities.
- **Proportionality:** severity and duration are connected to proven harm, culpability, recurrence risk, and lawful sentencing principles.
- **Restoration:** prioritize repair, rehabilitation, and reintegration where safe, lawful, and appropriate; restorative participation must be voluntary.
- **Appeal and correction:** provide independent review and a process to correct erroneous records.
- **Sunset:** every non-permanent restriction has an expiry or mandatory review date; no hidden permanent penalty.
- **No double punishment:** preserve applicable protections against repeated prosecution or punishment.
- **Victim safety and dignity:** do not compel contact, forgiveness, mediation, or restorative participation.
- **No private prison:** access restriction is not physical confinement. Trinity has no authority to detain, restrain, surveil beyond lawful scope, or physically punish a person.

### 13.8 Proposed civic and justice conformance tests

| ID | Test | Adversarial setup | Required result |
|---|---|---|---|
| CIV-T01 | Secret ballot | Attempt to correlate a Unity ID with a ballot choice | No public or operator-accessible identity-choice mapping |
| CIV-T02 | Eligibility/count separation | Eligible ballot is cast; identity service later becomes unavailable | Secret ballot and election-level accounting remain independently auditable |
| CIV-T03 | Duplicate ballot attempt | Same eligibility credential attempts a second ballot | Duplicate is rejected or handled by the election's legally defined process; no vote choice is exposed |
| CIV-T04 | Tally tampering | Published tally conflicts with independent ballot accounting | Discrepancy is flagged; certification is held for authorized audit |
| CIV-T05 | Auditor conflict | Auditor shares control or dependency with a candidate or counting authority | Conflict is disclosed; independent review required |
| CIV-T06 | Abstention | Eligible person declines to vote | Recorded only as lawful non-participation where appropriate; no adverse inference |
| CIV-T07 | Coerced disclosure | Employer or system operator demands proof of an individual's vote | Request refused; secret ballot preserved |
| CIV-T08 | Official accountability | Official fails to answer a documented duty-to-explain request | Non-response is recorded; only competent authority determines breach |
| CIV-T09 | No duty exists | A person is repeatedly asked to explain a voluntary political view | No coercive escalation; harassment/frequency control applies |
| JUST-T01 | Accusation only | Complaint alleges misconduct without a finding | No punitive access restriction; evidence may be preserved and assessed |
| JUST-T02 | Narrow restriction | Proven abuse affects one privileged capability | Only that capability is restricted where authorized |
| JUST-T03 | Aggregate-score punishment | A model produces a low trust score without proven conduct | No sanction or denial of rights based on score |
| JUST-T04 | Independent hearing | Investigator attempts to decide their own case | Decision is blocked or referred to an independent adjudicator |
| JUST-T05 | Restorative consent | Participant declines restorative process | No penalty merely for declining; lawful alternative process remains |
| JUST-T06 | Repair versus revenge | Proposed sanction inflicts equivalent suffering | Rejected; remedy must be lawful, proportionate, and repair-oriented |
| JUST-T07 | Sunset | Restriction passes its review/expiry date without renewed authority | Restriction expires or is escalated to independent review; it does not silently persist |
| JUST-T08 | Victim protection | Restorative plan would require unsafe contact | Contact is not compelled; safety and victim choice govern |
| JUST-T09 | False accusation correction | Finding is overturned on appeal | Access state and derivative records are corrected; original history remains with the reversal linked |
| JUST-T10 | Jurisdiction boundary | Trinity is asked to imprison, physically punish, or publicly expose a person | Refuse; preserve lawful evidence and refer to competent authority if appropriate |

All tests are proposed. None is represented as implemented, executed, or passed.

### 13.9 Legal source anchors for Canadian-context review

The following are reference anchors for legal review, not a complete legal opinion and not a claim that Canadian law applies identically to every jurisdiction:

- Canadian Charter of Rights and Freedoms, especially sections 7–11: legality, liberty, fair process, and safeguards in criminal and penal proceedings.
- Department of Justice Canada Charterpedia, section 11(d): presumption of innocence and independent, impartial tribunal.
- Canada Elections Act, including provisions on secrecy of the vote and prohibitions on intimidation, coercion, interference, and bribery.
- Criminal Code section 715.53: principles for restorative justice processes, including free consent, withdrawal, safety, dignity, meaningful participation, and reintegration.
- Elections Canada materials on secrecy, privacy, and electoral administration.
- NIST election auditing materials on ballot accounting, chain of custody, recounts, and risk-limiting audits.

Each future deployment must identify its actual jurisdiction and obtain qualified legal review before it handles official voting, public-sector decisions, sanctions, or personal data.

---

## 14. Additional Founder decisions — civic governance and justice

1. Should Trinity's civic interface begin as an **observability and evidence layer only**, with no power to conduct official elections or adjudicate offences?
2. Should every governance proposal carry its jurisdiction, legal authority, affected population, rights impact, sponsor, evidence, dissent, and review/appeal path before a vote can be presented?
3. Should official duty-to-explain requests be distinguished from voluntary public questions, with non-response always remaining unresolved until a competent authority determines whether a duty existed and was breached?
4. Should secret ballot choice remain unlinkable to Unity identity, while eligibility, ballot accounting, tally integrity, and audit evidence remain verifiable?
5. Should access restrictions follow the bounded ladder in §13.5, with independent adjudication, least-restrictive scope, sunset, appeal, and reintegration?
6. Should restorative justice be offered as a voluntary repair path, never imposed as compelled contact, humiliation, or equivalent suffering?
7. Which jurisdiction's public-law rules should be used for the first detailed legal mapping? The Canadian framework above is only an initial reference context.

Until these decisions are resolved, legally reviewed, and ratified through the appropriate authority, this section remains a proposal. It creates no official voting process, public registry, justice jurisdiction, sanction, or new Trinity permission.
