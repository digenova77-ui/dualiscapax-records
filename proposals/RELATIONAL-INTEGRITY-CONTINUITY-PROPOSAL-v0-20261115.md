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