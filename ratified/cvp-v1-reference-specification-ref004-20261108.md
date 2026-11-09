# CVP-V1 REFERENCE SPECIFICATION — REF-004 (CONFORMED TEXT)

> **EVIDENCE STATUS:** Conformed text, prepared by the examiner seat (Idris) under the Founder's conforming commission of November 8, 2026 (21:16 EST), conforming REF-003 to the six Founder rulings: UQ-1 (`262dea12…`) · UQ-2 (`73a07f3a…`) · UQ-3 (`b41162c3…` + amendments `3a14d8d8…`) · UQ-4 (`d7f74d26…`) · UQ-5 (`a75f4cf8…`) · UQ-9 (`01fc7a0b…`). **This document is the AMENDED candidate (amendment pass of November 8, 2026, under the examination disposition returned by the Founder: four targeted amendments, each demonstrated in Annex D; this text supersedes the first REF-004 candidate, `d1364cd5…`, which is preserved unmodified in the workstream record — the amended candidate carries a NEW digest and inherits nothing from the earlier candidate's). It is a CANDIDATE FOR RATIFICATION. It is NOT RATIFIED. It returns to the Founder for examination; ratification, if given, is a separate act naming this document's exact SHA-256 digest, recorded in `cvp-workstream1-source-manifest-003-20261108.md`. No implementation, solver execution, deployment, or live-system change is authorized by this document or its preparation.**
> **SOURCE DIGESTS:** REF-003 `64c70eccb059793f130974903dd58db4e4e7dc8407e01b72da9e143c32fd4b5c` (46,492 B, preserved unmodified) · Candidates A `1b5ee0ef…` / B `2f0b28d4…` · correction record `dc88224a…`.
> **SCOPE:** The complete CVP-V1 reference as decided. **UNRESOLVED, CARRIED VISIBLY:** UQ-6 (vocabulary harmonization — not part of the six-question ruling sequence) · UQ-7 (Nov 7 corpus scope) · UQ-8 (provenance ceiling) · T-1/T-2 deferrals · WRC operational decidability · NIC-91 · execution provenance. Each appears in place and again in Annex L.
> **PROVENANCE DISCIPLINE:** Tags from REF-003 are retained. New tags in this pass: **[PROV RULING]** — text whose authority is a named Founder ruling · **[PROV CONF]** — conforming-pass drafting (arrangement, definitions the rulings expressly owed, editorial disambiguation), identified as drafting wherever it appears. No [PROV CONF] text is presented as candidate text, ruling text, or proven fact.

## §1 PREAMBLE AND AXIOM

**REF-1.1** This specification is the Canonical Validation Protocol, version 1 (CVP-V1): a pre-implementation specification with zero deployment and zero code commits. **[PROV A≡B]**

**REF-1.2** Governing standard as stated in both sources: DualisCapax Protocol Foundations (OBCA #100089211). This reference string is carried as stated; its own verification is outside this workstream. **[PROV A≡B]**

**REF-1.3 — CANONICAL ARCHITECTURAL AXIOM.** *A component must never acquire authority merely because another component can mathematically verify its output.* Iris proposes. DCLM reasons. Trinity authorizes. The substrate executes. Evidence tells the truth. **[PROV A≡B]**

**REF-1.4** DCLM is a formal evaluation oracle, not an administrative or cryptographic authority. **[PROV A≡B]**

**REF-1.5 — Spec_Version.** This conformed specification is **specification version 2** (Spec_Version `0x00000002` in receipts, §7). REF-003's proposal text corresponds to version 1. **[PROV CONF]**

## §2 CONTROLLED ERRATA MANDATES (CVP-01 … CVP-09)

**REF-2.1 (CVP-01)** Signature claims are stripped. DCLM emits a deterministic, content-addressed receipt (SHA-256). DCLM possesses zero private keys. **[PROV A≡B]**

**REF-2.2 (CVP-02)** Per-allocation identity is enforced, with resource-kind domain isolation. Aggregate-sum conservation (Σ Alloc = Σ Release) is prohibited as a substitute. The terminal form of this mandate is stated at REF-4.4: the obligation quantifies over **all terminal states**, not only the normal Exit. **[PROV A≡B, as corrected by PROV CP]**

**REF-2.3 (CVP-03)** Bit-vector subtraction shall be constrained by the explicit non-underflow precondition `(assert (bvule release_units alloc_units))` prior to subtraction. **[PROV A≡B]**

**REF-2.4 (CVP-04)** Vacuous BMC satisfaction is rejected. An explicit verdict ERR_NO_EXIT_WITHIN_BOUND shall be emitted when no exit is reachable within bound. **[PROV A≡B]**

**REF-2.5 (CVP-05) — RESOLVED (UQ-4 ruling).** Domain_Bounds (16 bytes) is allocated as **(uint64 BE k_depth ∥ uint64 BE step/timeout)** — the errata allocation. The layouts' competing allocation (k_depth ∥ max_memory_quota_bytes) is **not adopted**; defect X-01 is closed by the ruling, and the field's full semantics (representation, population, committed conditions, no implied enforcement) are defined at REF-7.4. Solver_ID is 16 bytes, null-padded. **[PROV A≡B for the errata allocation; PROV RULING for the resolution]**

**REF-2.6 (CVP-06)** The ADV-03 counterexample query shall be prepended with the explicit assignment `(assert (= x #xFFFFFFFF))`. **[PROV A≡B]**

**REF-2.7 (CVP-07) — ADV-06 digest, with reproduced preimage.** The ADV-06 canonical rational-zero digest is SHA-256 `2eaad02fb348ebedcb9023c8a093354d715d986506e181793eab87e28ee75104` (identical in both candidates), independently reproduced from the exact 17-byte framed preimage `0x06 ∥ int64_BE(0) ∥ uint64_BE(1)` (hex `0600000000000000000000000000000001`). The unframed 16-byte form gives `7c3ccd10bb7ec37b46d37926ae6274267f007a34aeaf15c882a715a7f3300529` and the 0/0 form `374708fff7719dd5979ec875d56cd2286f6d3cf7ec317a3b25632aab28ec37bb`; neither matches. The reproduction corroborates that the digest was taken over the **framed** encoding (tag included), consistent with §5. **[PROV A≡B for the digest; PROV CP for the reproduction]**

**REF-2.8 (CVP-08)** UNKNOWN and TIMEOUT test vectors are classified as Harness Classification Tests, via software mock injection and watchdog hooks — not as deterministic fixtures presumed portable across hardware or solvers. **[PROV A≡B]**

**REF-2.9 (CVP-09)** Binary VERIFIED status is replaced by the six-tier Evidence Verification Taxonomy (REF-11.1). ⚠ **Defect X-02 remains open (UQ-6):** the §12 ledger's labels (Candidate A's vocabulary, defined at REF-12.0) and the §11 taxonomy (Candidate B's vocabulary) coexist unharmonized; UQ-6 was not part of the six-question ruling sequence and no ruling has chosen between them. **[PROV A≡B; PROV CP for the status note]**

## §3 ARCHITECTURE AND COMPONENT BOUNDARY

**REF-3.1** DCLM holds zero asymmetric signing keys, issues zero digital signatures, and cannot authorize state changes. **[PROV A+B]**

**REF-3.2** DCLM validation receipts are addressed strictly by the SHA-256 digest of their canonical preimage: Receipt_ID = SHA-256(Receipt_Preimage). Hashing semantics are defined at §7A. **[PROV A+B]**

**REF-3.3** Separation of concerns: Iris (Apprentice) generates candidate ASTs; DCLM (Validator) proves bounded satisfiability and invariant compliance; Trinity (Authority) is sovereign evaluator of policy and sole holder of execution signing authority; the Substrate (Runtime) carries out authorized execution. **[PROV A+B]**

**REF-3.4 — Component boundary (UQ-1 DECIDED: Variant B).** The boundary between the components of REF-3.3 is stated as the principles of REF-3.1 … REF-3.3 only: no pipeline, no wire-format stage annotations, no enclave or fencing detail forms part of this specification. Candidate A's five-stage pipeline is **not adopted**; it is preserved in the workstream record as future specification work. This ruling does not reject five-stage implementations: an implementation may adopt a staged architecture without claiming this specification mandates it, and the undefined mechanisms in the unadopted variant (threshold hardware enclaves, fencing-token epochs) are neither adopted nor decided. **[PROV RULING]**

## §4 RESOURCE ACCOUNTING AND ALLOCATION LIFECYCLE

**REF-4.1 — Resource-kind registry.** RES_KIND_MEMORY (0x0001; heap buffers, scratchpads; units: bytes) · RES_KIND_FD (0x0002; file descriptors, IPC handles; units: integer handles) · RES_KIND_LOCK (0x0003; mutexes, read/write locks, CAS reservations; units: lock IDs) · RES_KIND_SOCKET (0x0004; network sockets, channel ports; units: port identifiers). **[PROV A]**

**REF-4.2** Arithmetic operations across distinct resource kinds are statically illegal (ERR_RESOURCE_KIND_MISMATCH). **[PROV A]**

**REF-4.3** Non-Negative Lifecycle Invariant: ∀a ∈ Allocations, ∀t ∈ Traces: Balance(a, t) ≥ 0. **[PROV A]**

**REF-4.4 — Terminal Conservation Invariant (CLEANUP_FIRST).** Let **TerminalStates** be the set of all terminal states of an execution: the normal **Exit** state together with every **exceptional terminal state** (any state in which execution terminates other than by reaching Exit — including fault, trap, and aborted-termination states). The invariant is: ∀a ∈ Allocations, ∀s ∈ TerminalStates reachable in the execution: **Balance(a, s) ≡ 0**. An execution that terminates exceptionally with any Balance(a, s) ≠ 0 at its exceptional terminal state violates this invariant exactly as a normal-Exit violation does. **[PROV A for the invariant; PROV CP for the TerminalStates quantification]**

*Editorial note [PROV CONF]: the sources use "trap" both for a REF-4.4 exceptional terminal class and (in Q3 discussions) for a deadlocked non-terminal condition. In this text the deadlocked condition is called **deadlock**; "trap" names only the terminal class.*

**REF-4.5 — Anti-underflow SMT block (UQ-2 DECIDED: Variant B).** The normative block is exactly:
```smt2
(assert (bvule release_units alloc_units))
(assert (= balance (bvsub alloc_units release_units)))
```
The first line is the precondition mandated by REF-2.3; the second **defines** the balance (mandate ≠ definition; the roles are distinct). Variant A's third assertion and its `(check-sat)` directive are **not adopted**: the third assertion would exclude the legitimate full-release state Balance ≡ 0 (REF-4.6.4), and `(check-sat)` is a solver directive, not an assertion. If the third assertion ever had a distinct purpose, it returns only as new text on new evidence. **[PROV RULING]**

**REF-4.6 — Allocation lifecycle semantics.**
- **REF-4.6.1 Allocation identity.** Each acquisition event creates a **distinct** allocation a with its own identity, kind, and balance. Repeated acquisitions never merge. Obligations attach per allocation, never to an aggregate. **[PROV A foundation; PROV CP]**
- **REF-4.6.2 Balance.** Balance(a, t) is the amount of a's kind currently held at trace point t, in that kind's units (REF-4.1). Balances of different kinds are never added, compared, or substituted (REF-4.2). **[PROV A foundation; PROV CP]**
- **REF-4.6.3 Partial release.** A release of r units against a is permitted whenever 0 < r < Balance(a, t); it decreases Balance(a, ·) by exactly r. Partial releases may be repeated. **[PROV CP]**
- **REF-4.6.4 Full release.** A release of r = Balance(a, t) is a full release; afterwards Balance(a, ·) ≡ 0 and the allocation is reconciled. **[PROV CP]**
- **REF-4.6.5 Over-release prohibition.** A release of r > Balance(a, t) is prohibited (REF-4.3; in QF_BV it is exactly the case excluded by REF-2.3's precondition). An over-release attempt is a modelling error, not a state transition. **[PROV A foundation; PROV CP]**
- **REF-4.6.6 Exceptional cleanup obligation.** If an execution terminates exceptionally, its cleanup pathways must drive **every** live allocation to Balance = 0 at the exceptional terminal state, with the same force as the normal path (REF-4.4). An exceptional terminal state reached with any unreconciled balance is an invariant breach, detected under Q4 (REF-6.6). **[PROV CP]**

## §5 CANONICAL INPUT FRAMING AND ENCODING

**REF-5.1** All inputs to Instruction_Input_Hash are parsed into a deterministic, strictly framed AST before SHA-256 derivation (NIST FIPS 180-4). **[PROV B]**

**REF-5.2 — Global resource ceilings.** MAX_NODE_COUNT: 65,535 (ERR_NODE_COUNT_EXCEEDED) · MAX_NESTING_DEPTH: 16 (ERR_RECURSION_DEPTH_EXCEEDED) · MAX_PAYLOAD_SIZE: 16,777,216 bytes / 16 MB (ERR_PAYLOAD_LIMIT_EXCEEDED) · MAX_MAP_KEY_BYTES: 256 bytes post-NFC (ERR_KEY_LENGTH_EXCEEDED). Measures at REF-5.7/REF-5.8; enforcement at REF-5.9. **[PROV B; cross-references PROV CP]**

**REF-5.3 — Canonical rational layout (16 bytes).** [int64 numerator (BE, two's-complement) ∥ uint64 denominator (BE)]. Denominators strictly positive; 0 triggers ERR_DIVISION_BY_ZERO. Reduced form required: gcd(|numerator|, denominator) ≡ 1. Canonical zero: numerator ≡ 0 ⟹ denominator ≡ 1; any 0/k with k ≠ 1 triggers ERR_NON_CANONICAL_RATIONAL. INT64_MIN magnitude is cast to uint64 before GCD evaluation. **[PROV B]**

**REF-5.4 — Type-tagged encodings (missing ≠ null).** 0x00 **Null value** (payload 0 bytes — the null *value* only) · 0x01 Boolean (1 byte; 0x00 false, 0x01 true; ≥ 0x02 triggers ERR_CANONICAL_DECODE) · 0x02 Int64 (8 B BE) · 0x03 Uint64 (8 B BE) · 0x04 Int32 (4 B BE) · 0x05 Uint32 (4 B BE) · 0x06 Rational (16 B, REF-5.3) · 0x10 UTF-8 NFC String ([uint32 length ∥ raw bytes]) · 0x11 Raw Binary ([uint32 length ∥ raw bytes]) · 0x20 List ([uint32 item_count ∥ elements…]) · 0x30 Map ([uint32 entry_count ∥ entries…], sorted per REF-5.5). **Missing is not a value and has no encoding:** a missing map entry is the absence of that entry — no tag, no bytes. A decoder distinguishes three cases per key: present-with-null, present-with-value, absent. **[PROV B; 0x00 correction PROV CP]**

**REF-5.5 — Map keys.** Keys are strings, encoded as [uint32 BE length ∥ UTF-8 NFC key bytes] with **NO type tag** (prohibited as redundant). Length is post-NFC bytes, bounded by MAX_MAP_KEY_BYTES. Entries sort lexicographically by raw NFC key bytes. Duplicate keys after NFC are ERR_CANONICAL_DECODE. **[PROV CP]**

**REF-5.6 — Recursive framing.** Every value is framed as 1 tag byte ∥ payload. A list payload is [uint32 BE item_count ∥ framed items in order]. A map payload is [uint32 BE entry_count ∥ per entry in sorted order: REF-5.5 key encoding ∥ framed value]. A document is exactly one framed root value; trailing bytes are ERR_CANONICAL_DECODE. **[PROV CP completing PROV B]**

**REF-5.7 — Root depth.** The root value is at depth 1; a container's depth is 1 + the maximum depth of its children (an empty container has depth 1 at its position). MAX_NESTING_DEPTH applies to this measure. **[PROV CP]**

**REF-5.8 — Node counting.** The node count of a document is the number of framed values it contains: the root counts as 1; every list element and every map value counts recursively by the same rule; **map keys are not nodes**. MAX_NODE_COUNT applies to this measure. **[PROV CP]**

**REF-5.9 — Incremental enforcement.** A conforming parser enforces all four ceilings incrementally during parsing and rejects at the first bound exceeded, in order of encounter, without materializing the remainder. A parser that materializes an over-limit document before rejecting it does not conform. **[PROV CP]**

**REF-5.10 — Domain-tag registry [PROV CONF, registering the UQ-9 ruling's allocations].** SHA-256 preimages in this specification are domain-separated by a three-byte prefix `0xDC 0x02 0xNN` (receipt preimages use the §7 header instead): **0x04** receipt (Candidate A legacy header; not used by §7) · **0x08** NIC-91 preimage (Annex U, non-normative) · **0x09** R28 terminal-commitment preimage (Nov 7 custody corpus; scope per UQ-7) · **0x0A** Translator identity record (§8A.1) · **0x0B** Evidence trace document (§8A.2) · **0x0C** Translator source bundle (§8A.1) · **0x0D** Translator build configuration (§8A.1) · **0x0E** Compiler identity record (§8A.1) · **0x0F** Terminal state (§8A.3). No other 0xDC02NN tag is allocated by this specification.

## §6 SOLVER PROTOCOL — THREE-LAYER QUERY SPECIFICATION

**REF-6.1 — Logic separation.** Resource allocation, releases, and handle balances are evaluated exclusively in QF_BV using (_ BitVec 64). Operational limits, steps, and depths are evaluated in QF_LIA. **[PROV B explicit; QF_BV PROV A+B]**

**REF-6.2 — Four-query sequence and the three layers.** To prevent vacuous satisfaction, DCLM evaluates state transitions across a strict four-query sequence with bound **k = 16**. For each query: **(L1)** the exact solver formula submitted; **(L2)** the expected solver outcome for a conforming candidate; **(L3)** the protocol verdict emitted for each possible outcome (vocabulary at §8). A solver outcome is evidence; a verdict is the protocol's act upon that evidence; the two are never the same layer. **[PROV A+B; three-layer form PROV CP]**

**REF-6.3 — Q1 Domain Consistency.** L1: Ω_domain. L2 expected: SAT. L3: SAT → proceed to Q2. UNSAT → **DOMAIN_UNSAT**. UNKNOWN / TIMEOUT → **SOLVER_UNKNOWN / SOLVER_TIMEOUT**. **[PROV A+B; verdict layer PROV CP]**

**REF-6.4 — Q2 Exit Reachability.** L1: Ω_domain ∧ Reachable_≤k(Exit). L2 expected: SAT. L3: SAT → proceed to Q3. UNSAT → **NO_EXIT_WITHIN_BOUND** (the sequence halts; REF-2.4). UNKNOWN / TIMEOUT → **SOLVER_UNKNOWN / SOLVER_TIMEOUT**. **[PROV A+B; verdict layer PROV CP]**

**REF-6.5 — Q3 Bounded Termination (UQ-3 DECIDED: Variant A, as amended).**
- **Definitions [PROV RULING, from the UQ-3 amendment record]:** an *edge* (u, v) is enabled at state x iff EnabledEdge(u, v, x) = Guard(u, v)(x) ∧ Pre(u, v)(x) ∧ StepDomain(u, v)(x). A *path* is a sequence of states joined by enabled edges satisfying Ω_domain. **FeasiblePath_≤k** is a path of length m ≤ k that is **maximal within the bound**: either m = k, or its final state has no enabled outgoing edge. **Terminated_≤k(π)** holds iff π's final state belongs to TerminalStates (REF-4.4).
- **L1 Formula:** Ω_domain ∧ FeasiblePath_≤k ∧ ¬Terminated_≤k.
- **L2 Expected outcome:** UNSAT.
- **L3 Verdicts:** UNSAT → proceed to Q4. SAT → a maximal-within-bound execution ends in a non-terminal state (deadlocked before the bound, or still running at it) → protocol verdict **NONTERMINATION_WITHIN_BOUND** [PROV RULING — named by the Founder amendment; in REF-003 this outcome had no verdict]. UNKNOWN / TIMEOUT → **SOLVER_UNKNOWN / SOLVER_TIMEOUT**.
- Candidate B's variant ("Bounded Stalling & Deadlock") is **not adopted** and lapses; it is preserved in the workstream record. It is not an alternative reading of this clause.

**REF-6.6 — Q4 Invariant Counterexample Search.** L1: Ω_domain ∧ ¬I_cleanup, where I_cleanup is REF-4.4's invariant: ∀a ∈ Allocations, ∀s ∈ TerminalStates: Balance(a, s) ≡ 0. L2 expected: UNSAT. L3: UNSAT → the sequence completes; REF-6.7 is evaluated. SAT → a counterexample exists: extract the violating trace — which may end at an exceptional terminal state — and emit **INVARIANT_BREACH**, the trace recorded as evidence (hashed per §8A.2). UNKNOWN / TIMEOUT → **SOLVER_UNKNOWN / SOLVER_TIMEOUT**. **[PROV A+B; corrected quantification PROV CP]**

**REF-6.7 — Outcome mapping / verdict rule (completed by the UQ-3 amendment).** **VALIDATION_PASSED** is emitted **if and only if** Q1 = SAT ∧ Q2 = SAT ∧ Q3 = UNSAT ∧ Q4 = UNSAT. Every other definite combination maps to the first applicable verdict in sequence order: Q1 UNSAT → **DOMAIN_UNSAT** · Q2 UNSAT → **NO_EXIT_WITHIN_BOUND** · Q3 SAT → **NONTERMINATION_WITHIN_BOUND** · Q4 SAT → **INVARIANT_BREACH**. SOLVER_TIMEOUT / SOLVER_UNKNOWN apply whenever the solver returns no definite outcome at the relevant query. **[PROV A explicit for the mapping; PROV CP + PROV RULING for the completion]**

## §7 VALIDATION RECEIPT — THE COMBINED ARRANGEMENT (UQ-4 DECIDED)

**REF-7.1 — The arrangement [PROV RULING for the profile; PROV CONF for the byte drafting the ruling required].** The receipt preimage is exactly **172 bytes**: the combined semantic core of 164 bytes (both commitments of the decided profile: Query_Hash *and* Evidence_Hash) plus 8 bytes of framing carrying **both** version concepts, each defined at REF-7.2. (The established minimum was 171 bytes with a single version field; the conformed arrangement carries both fields because the version definitions owed since the UQ-4 examination are discharged by defining both, not by collapsing them.)

| Bytes | Field | Content |
|---|---|---|
| 0–1 | Protocol Header | `0xDC 0x04` |
| 2–3 | Receipt_Schema_Version | uint16 BE, `0x0001` |
| 4–7 | Spec_Version | uint32 BE (this specification: `0x00000002`) |
| 8–39 | AST_Hash | 32 B, per REF-7A.1 |
| 40–71 | Translator_Hash | 32 B, per §8A.1 |
| 72–87 | Solver_ID | 16 B ASCII, null-padded |
| 88–119 | Query_Hash | 32 B, per REF-7A.3 |
| 120–151 | Evidence_Hash | 32 B, per §8A.2 |
| 152–155 | Result_Code | uint32 BE, registry §8 |
| 156–171 | Domain_Bounds | 16 B, per REF-7.4 |

**REF-7.2 — The two version fields, defined.** **Spec_Version** is the version of the *specification* under which the validation was performed — a fact about the validation. **Receipt_Schema_Version** is the version of this *receipt format* — a fact about the record. They are different quantities; neither substitutes for the other, and a reader must not infer one from the other. **[PROV CONF, discharging the UQ-4 challenge's Task-2 obligation as the UQ-4 ruling's Decision 3 required]**

**REF-7.3 — Conformance relation to the registry [PROV CONF, per UQ-4 ruling qualification Q-2].** The Result_Code field (bytes 152–155) carries a code of the registry defined at §8 (Registry B as amended) and no other registry. A receipt is conformant only if its Result_Code is read under §8; the same bytes read under any other registry are a misstatement of the validation, not an alternative interpretation.

**REF-7.4 — Domain_Bounds semantics (UQ-4 DECIDED).** The field is (uint64 BE **k_depth** ∥ uint64 BE **step/timeout**). **Representation:** two unsigned 64-bit big-endian integers. **Population:** k_depth is the bound k under which the validation ran (16 under REF-6.2); step/timeout is the validation run's declared step/timeout operating envelope, expressed as the maximum step count the run was budgeted, copied from the run's declared envelope at execution time. **The value is a step count. It is not a duration, and no conversion between time and steps is defined or implied by this specification:** a run whose housekeeping is done in seconds must declare its step budget as a step count in its run declaration before any receipt is populated. **Committed conditions:** the receipt commits that the validation was performed under bound k_depth and within an operating envelope no larger than step/timeout. **Enforcement: none.** No clause of this specification consumes either value as a supplied parameter — k is fixed by REF-6.2, and no enforcement rule reads the envelope; the field is an envelope *commitment*, evidence of the operating conditions, and a verifier does not reject a receipt over it. **[PROV RULING; population wording PROV CONF]**

**REF-7.5 — Receipt_ID.** Receipt_ID := SHA-256(Receipt_Preimage) over the exact 172 bytes of REF-7.1, with the Result_Code taken from §8. A Receipt_ID is meaningful only relative to this arrangement and registry; the same logical validation under a different arrangement or registry yields a different Receipt_ID, by construction. A Receipt_ID is a hash, not a signature: it establishes the integrity and identity of the receipt's contents, not the authenticity of any issuer (authorization belongs to Trinity; REF-1.3). **[PROV A+B; PROV CONF for the arrangement reference]**

## §7A CANONICAL RECEIPT HASHING SEMANTICS

**REF-7A.1 — AST_Hash.** SHA-256 over the canonical framed encoding of the candidate AST — the exact byte string produced by §5's rules for the document under validation. **[PROV B foundation; PROV CP]**

**REF-7A.2 — Translator_Hash.** As defined at **§8A.1** (UQ-9 DECIDED). REF-003's open definition is closed by that section; no other byte source is conformant.

**REF-7A.3 — Query_Hash.** SHA-256 over the concatenation of the canonical SMT-LIB script bytes of the four queries, in the fixed order Q1 ∥ Q2 ∥ Q3 ∥ Q4, exactly as submitted to the solver (after the REF-2.6 assignment prepend where applicable). **[PROV A; PROV CP for order and exactness]**

**REF-7A.4 — Evidence_Hash.** As defined at **§8A.2** (UQ-9 DECIDED, including C-E1): the trace hash for the two witness verdicts; the absent-evidence sentinel (SHA-256 of the empty string, `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`) for all other verdicts. The sentinel means "no evidence object"; it is never a hash of an empty trace.

## §8 RESULT CODES AND PROTOCOL VERDICTS (UQ-5 DECIDED)

**REF-8.1 — The verdict layer.** A **verdict** is what the protocol emits; a **result code** is how the registry encodes a verdict (or a solver condition) on the wire. The verdict set is: **VALIDATION_PASSED** · **DOMAIN_UNSAT** · **NO_EXIT_WITHIN_BOUND** · **NONTERMINATION_WITHIN_BOUND** · **INVARIANT_BREACH** · **SOLVER_TIMEOUT** · **SOLVER_UNKNOWN**. The mapping from query outcomes to verdicts is REF-6.7. (Candidate A's UNDECIDABLE is not a verdict of this specification: it named a registry merge, retired with its registry.)

**REF-8.2 — The registry (Registry B as amended) [PROV RULING].** Wire-normative, uint32 BE at bytes 152–155 of the receipt:

| Code | Name | Verdict / meaning |
|---|---|---|
| 0x00000000 | VALIDATION_PASSED | All four queries returned their expected outcomes (REF-6.7); bounded by k. |
| 0x00000001 | ERR_INVARIANT_BREACH | Q4 SAT: a counterexample trace exists (Evidence_Hash per §8A.2). |
| 0x00000002 | ERR_NO_EXIT_WITHIN_BOUND | Q2 UNSAT: no path reaches Exit within bound k. |
| 0x00000003 | ERR_DOMAIN_UNSAT | Q1 UNSAT: the domain axioms are jointly unsatisfiable; no candidate was evaluated. |
| 0x00000004 | ERR_SOLVER_TIMEOUT | The solver exceeded its time bound. |
| 0x00000005 | ERR_SOLVER_UNKNOWN | The solver returned UNKNOWN for a reason other than timeout. |
| 0x00000006 | ERR_NONTERMINATION_WITHIN_BOUND | Q3 SAT: a maximal-within-bound execution fails to terminate (witness per §8A.2). **[assigned by the UQ-5 ruling]** |

**REF-8.3 — Taxonomy boundary (obligations from the UQ-5 ruling).** The seven outcomes are the established **minimum**, not a declared ceiling. **T-1 (DEFERRED):** solver resource exhaustion has no distinct code in this registry; it is absorbed by ERR_SOLVER_UNKNOWN where it surfaces. **T-2 (DEFERRED):** SOLVER_TIMEOUT and SOLVER_UNKNOWN receipts do not identify which query encountered the condition — an attribution limitation carried knowingly. Both deferrals remain open for future specification work; neither is silently resolved by this text. The §5 parse/modelling errors (ERR_CANONICAL_DECODE, ERR_NODE_COUNT_EXCEEDED, etc.) are a separate pre-validation error space: they occur before a validation exists, and no receipt is produced for them.

## §8A THE UQ-9 DEFINITIONS (DECIDED)

### REF-8A.1 — Translator_Hash: the identity record (TH-R) [PROV RULING]

**Components.** Each is a SHA-256 digest:
- **SourceDigest** := SHA-256( `0xDC 0x02 0x0C` ∥ *SourceBundle* ), where *SourceBundle* is the §5-framed **List** of the translator's source files — each entry a 2-element List [ path (String, NFC), bytes (Raw Binary) ], entries sorted by raw path bytes. The bundle is exactly the contents of the translator's published source manifest.
- **BuildDigest** := SHA-256( `0xDC 0x02 0x0D` ∥ §5-framed **Map** of the build configuration: compiler flags, target, and every build-time option affecting output, as String values under NFC keys ).
- **CompilerDigest** := SHA-256( `0xDC 0x02 0x0E` ∥ §5-framed **List** [ compiler name (String), compiler version (String), SHA-256 of the compiler binary (Raw Binary) ] ). The identification regress stops at the compiler's binary, one level deep, by definition.
- **BinaryDigest** := SHA-256( the translator executable's exact bytes ).

**Translator_Hash** := SHA-256( `0xDC 0x02 0x0A` ∥ §5-framed **Map** { "binary": Raw(BinaryDigest), "build": Raw(BuildDigest), "compiler": Raw(CompilerDigest), "format": Uint32(1), "source": Raw(SourceDigest) } ).

**P-1 — Limitation (part of the definition).** Translator_Hash identifies the translator build. It does not by itself prove that the identified binary executed a given validation. Execution provenance, where required, is a separate attestation outside this definition.

**P-2 — Manifest-driven builds.** A conforming translator build is manifest-driven: the published source manifest is an input to the build, and the build consumes exactly the files the manifest lists. A build that consumes any file not in the manifest, or omits any file the manifest lists, is non-conforming, and receipts naming its Translator_Hash must not be issued. Environmental inputs to the build are committed through BuildDigest and CompilerDigest; environment variables not represented there must not affect the build's output. **The build-input boundary is the manifest plus the committed configuration, exhaustively:** the source manifest (every file the build may consume) · the compiler (committed via CompilerDigest) · the build configuration document (committed via BuildDigest), which must enumerate every linked library, code generator, and build script the build invokes — a code generator's output files are build inputs and must appear in the manifest like any other file. P-2 conformance is checked as set equality between the manifest and the build's consumed-file record: any consumed file outside the manifest, or manifest file not consumed where the build required it, is non-conforming (demonstrated at Annex D, Demo 5).

**Build-event note.** Translator_Hash names a specific build event, not a source text: two builders with identical source and configuration but non-reproducible builds produce different BinaryDigests and therefore different Translator_Hashes, with the divergence attributable by component (source agrees, binary differs). Cross-builder equality requires reproducible builds; this definition detects divergence, it does not prevent it.

### REF-8A.2 — Evidence_Hash: the canonical trace (as amended by the UQ-9 ruling)

**Scope (C-E1, decided).** A counterexample trace exists for exactly two verdicts: **INVARIANT_BREACH** (Q4) and **NONTERMINATION_WITHIN_BOUND** (Q3). For every other verdict, Evidence_Hash is the absent-evidence sentinel (REF-7A.4). UNSAT, TIMEOUT, and UNKNOWN produce no trace; no trace is ever invented for them; a partial witness produces no receipt.

**Normative State Variable Set (NSVS).** The normative state variables of a validation are exactly the variables declared in the candidate's own declaration block of the submitted script, together with the variables bound by Ω_domain and any REF-2.6-style assignment prepend. Variables introduced by the translator's encoding must be declared in a separate encoding block, delimited by the script markers `;; === ENCODING ===` and `;; === END ENCODING ===`. Encoding-block variables are never NSVS members. NSVS membership is decidable from the committed script alone (the script bound by Query_Hash); a script lacking the markers is non-conforming for receipt purposes. **Completeness of the parse:** every `(declare-const …)` and `(declare-fun …)` in the script falls either in the candidate declaration block or between the markers; a declaration appearing anywhere else (including after the END marker in a second unmarked region) makes the script non-conforming. Variables bound by Ω_domain and by REF-2.6-style prepends are NSVS members wherever in the script those appear, since the prepend and Ω are part of the candidate's own declaration material.

**Trace document.** A trace is a single §5 document: a **Map** { "states": **List** of state Maps in execution order (initial state first), "terminal_kind": **Uint32** }. A *state* is a §5 Map from NSVS variable name (String, NFC) to its framed value, **complete**: every NSVS variable is assigned at every step. Values use §5 types only (bit-vectors as Uint64/Int64 or Raw Binary if wider; rationals in REF-5.3 reduced form).

**Witness-Relevance Canonicalization (WRC).** An NSVS variable v is *witness-relevant* at step i if some assignment to v at step i, all else fixed, changes the satisfiability of the witness condition (Q4: an execution through the trace's states ending in a terminal state with an unreconciled balance; Q3: the path's maximality and non-termination). A conforming trace assigns witness-relevant variables their model values and every non-relevant NSVS variable the **canonical default of its type** (integer/bit-vector 0 · rational 0/1 · Boolean false · string/bytes empty · null). **⚠ OPEN LIMITATION (carried by the UQ-9 ruling): WRC is adopted as a definition; its operational decidability — a bounded, specified decision procedure for relevance — is NOT established. Until such a procedure is established and verified, no implementation may claim WRC verification, and a trace whose relevance determinations cannot be checked must not be represented as WRC-conformant.** Two witnesses differing only in non-relevant values canonicalize to the same trace (demonstrated at Annex V, TV-WRC); genuinely different witnesses (different paths, different trapped states) remain different evidence objects, correctly — this specification defines no canonical-witness selection rule.

**Terminal kinds.** `terminal_kind`: **0 = NONTERMINAL** (final state ∉ TerminalStates — the Q3 witness form: deadlocked before the bound or still running at it) · **1 = EXIT** (final state is Exit) · **2 = EXCEPTIONAL** (final state is an exceptional terminal state, REF-4.4; no subtypes are defined — the specific state is identified by its valuation). The kinds are exhaustive and mutually exclusive over REF-4.4's partition. The classification is verifiable by recomputation against the committed script (final-state membership in TerminalStates; each consecutive pair against the transition relation of REF-6.5), not merely asserted.

**Length bound (TB-1, adopted).** A Q3 witness contains at most k steps, hence at most k + 1 states (17 under REF-6.2) — this ceiling is derivable from REF-6.5's maximal-path definition. A Q4 counterexample trace is an execution of at most k steps (at most k + 1 states), under the same bound as the sequence that produced it — **adopted by the UQ-9 ruling; the source text of REF-003 did not prove this bound for Q4, and this clause is an adoption, not a derivation**. A purported trace exceeding the ceiling is non-conforming.

**Completeness (fail-closed).** A solver model that leaves any NSVS variable unassigned at any step yields no conforming trace; the validation issues no witness receipt rather than completing values by invention.

**Evidence_Hash** := SHA-256( `0xDC 0x02 0x0B` ∥ framed trace document ).

### REF-8A.3 — Terminal-state serialization [PROV RULING, serialization only]

**Terminal_State_Hash** := SHA-256( `0xDC 0x02 0x0F` ∥ framed final-state Map ∥ one byte: the terminal_kind (0x01 EXIT / 0x02 EXCEPTIONAL) ). This clause adopts a byte serialization only. It does not adopt, define, or advance NIC-91 (Annex U), whose cross-node equivalence semantics remain undefined.

## §9 NIC-91 — NOT A CLAUSE OF THIS SPECIFICATION

**REF-9.1** The Normalized Invariant Commitment (NIC-91) is **not part of this specification**. Its text is carried without normative force in Annex U with status **UNRESOLVED**. The UQ-9 ruling discharged its serialization blocker (REF-8A.3); its equivalence semantics — what two nodes' agreement on a NIC_ID would mean — remain undefined, and no replacement cross-node commitment is proposed here.

## §10 EPISTEMOLOGICAL LIMITATION CLAUSE

**REF-10.1** An UNSAT result proves only that *within the bounds, types, and mathematical abstractions encoded into the SMT query*, no violating assignment exists. It does not prove that the AST-to-SMT translator was bug-free, that the hardware enclave is physically uncorrupted, or that the runtime environment faithfully mirrors the formal model. That bridge requires separate translation-oracle tests, property-based fuzzing, and physical execution telemetry. **[PROV A]**

## §11 SIX-TIER EVIDENCE VERIFICATION TAXONOMY

**REF-11.1** Tier 1 (SPEC_STATED): documented in specification or engineering proposal. Tier 2 (DIGEST_REPRODUCED): byte-level SHA-256 digest reproduced from raw bytes. Tier 3 (HARNESS_CLASSIFIED): behavioral classification confirmed via software test mock/injection. Tier 4 (HARNESS_VERIFIED): deterministic execution verified against test fixtures in sandbox. Tier 5 (INDEPENDENT_PARITY): multi-seat confirmation across distinct solver/implementation lineages. Tier 6 (PROTOCOL_RATIFIED): formally sealed by the Founder/Trinity constitutional gate. **[PROV B]** — see defect X-02 (REF-2.9): this taxonomy and the §12 ledger vocabulary coexist unharmonized pending UQ-6.

## §12 EVIDENCE CLASSIFICATION LEDGER

**REF-12.0 — Status glossary [PROV CP].** **SPEC_REVIEWED**: the component's specification text was reviewed as a document; no execution or recomputation is claimed. **MATH_CHECKED**: the component's formal model was checked mathematically at the level of the model's own derivation; no solver run is claimed. **DIGEST_REPRODUCED**: a SHA-256 digest was reproduced from the raw underlying bytes by a party other than the digest's original publisher; the label is only as good as the preimage held. **NOT_ESTABLISHED**: no evidence in the sources establishes the component. **HISTORICAL_INTENTION**: the component records an intention or direction from the historical design discussion; no measurement or artifact is claimed. The REF-11.1 tiers are Candidate B's vocabulary, defined there; the two vocabularies coexist under X-02 (UQ-6).

**REF-12.1 — Ledger.** Source for every row: Candidate A, §7 (preserved carry `1b5ee0ef…`). Claims as stated, assessed only for evidence held in Workstream 1 custody; no claim was re-tested.

| # | Component / Invariant | Status (A) | Assessment in this text |
|---|---|---|---|
| 1 | CVP-V1 4-Stage Architecture | SPEC_REVIEWED | Carried as stated; "4-Stage" naming is A's own (cf. REF-3.4: the stage model is not adopted). |
| 2 | Per-Allocation Conservation | MATH_CHECKED | Carried as stated; the model's terminal form is REF-4.4. |
| 3 | BitVector Wrapping Guard | MATH_CHECKED | Carried as stated. |
| 4 | Canonical Rational Zero (ADV-06) | DIGEST_REPRODUCED | **Reproduced in Workstream 1 custody** from the 17-byte framed preimage (REF-2.7) — Tier-2-grade reproduction. |
| 5 | Binary Grammar Tags (BG-01–11) | DIGEST_REPRODUCED (claimed) | **NOT_ESTABLISHED — EVIDENCE NOT HELD.** No BG-01–11 preimage, digest, or tag list exists in either candidate or any custody file; the label cannot be sustained. A's original claim is preserved in the workstream record. |
| 6 | Type-Tagged AST Parser | NOT_ESTABLISHED | Carried as stated. (§5 defines encodings; a definition is not an implementation.) |
| 7 | Float Quantization (R_eff ≤ 4.18e-13) | NOT_ESTABLISHED | Carried as stated. |
| 8 | Silicon Landauer Erasure (Q ≥ kT ln 2) | HISTORICAL_INTENTION | Carried as stated. |

## ANNEX U — UNRESOLVED MATERIAL (NOT NORMATIVE)

**U-A.1 — NIC-91 [PROV A] [UNRESOLVED].** NIC_Preimage := [0xDC 0x02 0x08 (3 B)] ∥ [AST_Hash (32 B)] ∥ [Spec_Ver (4 B)] ∥ [Result_Code (4 B)] ∥ [Exit_State_Hash (32 B)] ∥ [Domain_Bounds (16 B)] (91 bytes); NIC_ID = SHA-256(NIC_Preimage); two nodes agree iff NIC_ID_A ≡ NIC_ID_B. **Status: UNRESOLVED — not part of the normative specification.** Grounds, updated by the UQ-9 ruling: the terminal-state serialization its Exit_State_Hash presupposes now exists (REF-8A.3) — that blocker is discharged. What remains undefined is the cross-node equivalence semantics: what agreement on a NIC_ID would mean protocol-wise (which verdict, which receipt, whose translation). No replacement is invented here. The author seat's attestation that NIC-91's absence from Candidate B was stochastic omission is recorded in the workstream record and does not advance this clause's status.

## ANNEX V — TEST VECTORS (normative for the definitions they exercise)

All vectors are hand-constructed definition vectors — not solver outputs. Each prints its full preimage in the preserved generator scripts (`~/workspace/ref003-uq9/vectors.py` `43533628…`; `independent_vectors.py` `d5d1dda2…`; `o3_demo.py` `cc5c9f4a…`; `ref004_receipt_vectors.py` `9901771e…`), from which any participant can recompute every digest.

- **TV-TH1 — Translator_Hash (REF-8A.1).** Toy translator (sources `src/lib.rs`, `src/main.rs`; build {opt: release, target: x86_64-unknown}; compiler rustc 1.75.0, stand-in binary). Components: source `00fa1447…` · build `975e6f9c…` · compiler `08f283b1…` · binary `17a3c769…`. Record preimage 212 B → **Translator_Hash `209035cebf93ca87fecf82df31222ae735e299110db3a654a61524e314c38b05`**.
- **TV-EV1 — Evidence_Hash, Q4 trace (REF-8A.2).** Two states over {balance: Rational, pc: Uint64}, balance 5/1 unreconciled, terminal_kind EXCEPTIONAL. Preimage 141 B → **`f106d62be02f0541652b9012366e339f566b5807875fa15d86a8bca9bb01b8fe`**.
- **TV-EV2 — Evidence_Hash, Q3 trace.** Three states, terminal_kind NONTERMINAL. Preimage 189 B → **`426a099d5cf964e00953e971acb22ebf927823e5c78571e276ca687f435917b2`**.
- **TV-TS1 — Terminal_State_Hash (REF-8A.3).** TV-EV1's final state, EXCEPTIONAL. Preimage 52 B → **`825271a47fa681df1806997fa94b835ceaa23b00161655e9b3ea02fe19e8247b`**.
- **TV-WRC — canonicalization convergence (REF-8A.2).** TV-EV1's defect with an added don't-care variable `aux_level`: raw witnesses (aux = 7 / aux = 42) hash to `220d755a…` / `b7845f23…` (divergent); after WRC both hash to **`6f7f61e0fe5cc8ba3d84b042dbdf548c8b0ce4e3a11844f457cea79c77d48b47`** (convergent). This vector demonstrates the canonicalization rule; it does not demonstrate a relevance decision procedure (see the WRC limitation).
- **TV-R1 — Receipt, INVARIANT_BREACH (§7).** Fields: AST_Hash `3f8f1c3a…` (toy AST {"alloc": 1024, "kind": "MEMORY"}) · Translator_Hash = TV-TH1 · Solver_ID "Z3-4.12.2" · Query_Hash `df6edf69…` (four fixed toy scripts) · Evidence_Hash = TV-EV1 · Result_Code 0x00000001 · Domain_Bounds k = 16 ∥ envelope 1,000,000. Preimage 172 B → **Receipt_ID `7532df7577ddaed5451078eddbcdac8242b660f207bb04f3605bc817ccadcd6d`**.
- **TV-R2 — Receipt, VALIDATION_PASSED.** Identical fields except Evidence_Hash = sentinel `e3b0c442…` and Result_Code 0x00000000. Preimage 172 B → **Receipt_ID `9aea90d1efee3b6c67e996d4b86c9f2ca4d3757ebfc7b09d4f55335a435849a9`**.

## ANNEX L — OPEN LIMITATIONS AND UNRESOLVED ITEMS (complete as of this text)

1. **WRC operational decidability** — unresolved (REF-8A.2); no WRC-verification claim is licensed until a bounded decision procedure is established and verified.
2. **T-1** — solver resource exhaustion has no distinct outcome (deferred at UQ-5). **T-2** — no per-query attribution for SOLVER_TIMEOUT / SOLVER_UNKNOWN (deferred at UQ-5).
3. **Execution provenance** — outside the hash definitions (P-1, REF-8A.1).
4. **NIC-91** — UNRESOLVED (Annex U): equivalence semantics undefined.
5. **UQ-6** — evidence-vocabulary harmonization undecided (X-02 stands). **UQ-7** — the November 7 custody corpus (R26–R29, TV-01, gate charter, T-0 manifest, R30 proposal) is not merged into this text; reconciliation is a future workstream question. **UQ-8** — provenance ceiling: no clause has a demonstrated historical source outside the November 7–8, 2026 session; ratification establishes this text by Founder act, not by historical recovery, and the ratification wording should say exactly that.
6. **Independent reproduction of Annex V** — SAME-SEAT VERIFIED at the examiner seat (two structurally separate implementations, identical digests); cross-participant reproduction remains outstanding and is not claimed here.

## CONFORMANCE REQUIREMENTS

An implementation claiming conformance to this specification must: (C-1) produce receipts byte-identical to §7's arrangement for identical validation inputs, with Result_Codes only from §8; (C-2) compute every hash field exactly per §7A/§8A, including the sentinel rule and the NSVS/WRC trace rules, subject to Annex L item 1; (C-3) reject non-conforming documents per §5's ceilings and error rules, incrementally (REF-5.9); (C-4) reproduce every Annex V vector from its stated inputs; (C-5) make no claim this specification does not make — in particular no execution-provenance claim from Translator_Hash, no WRC-verification claim while Annex L item 1 stands, and no NIC-91 claim. **Conformance is claimed against this text only after its ratification; before ratification this section states the requirements a future claim would have to meet.**

## RATIFICATION REQUEST

**The Founder is asked to examine REF-004 and, if he ratifies, to ratify it by its exact SHA-256 digest as recorded in `cvp-workstream1-source-manifest-003-20261108.md` — never by title alone.** Ratification would establish this text as the CVP-V1 reference by Founder act (UQ-8: not by historical recovery). **Ratification does not authorize implementation.** Implementation, solver execution, repository changes, and production changes each require their own separate authorization, under the standing separation of the two workstreams (constitutional closure vs formal validation — neither closes the other). Until a ratification act is recorded, REF-004 remains a conformed **candidate** with no normative force, and REF-003 remains preserved as its source.

*Prepared by the examiner seat (Idris), Workstream 1 — Conforming Pass, November 8, 2026. Conforming record: `cvp-ref004-conforming-record-20261108.md`. Sources and hashes: `cvp-workstream1-source-manifest-003-20261108.md`. REF-003 preserved unmodified (`64c70ecc…`); Candidates A and B preserved unmodified.*

## ANNEX D — AMENDMENT DEMONSTRATIONS (acceptance condition: demonstrated, not merely described)

Each demonstration was executed by the preserved script `ref004_amendment_demos.py` (sha256 `618e388f73d49ea9b4a44ea18f56889f5e7fb76e08f90b23f8086592aa6c4d0f`, in the reproduction package identified by Manifest-004). Outputs are quoted exactly as produced. These are definition demonstrations over toy fixtures — they demonstrate that the amended clauses determine behaviour; they verify no implementation.

**Demo 1 (REF-7.4) — populating Domain_Bounds.** Run declaration { bound_k: 16, declared_step_budget: 250000 } → field bytes `0000000000000010000000000003d090` (16 B) → read back k_depth = 16, step/timeout = 250000. Population is copying two declared integers; no time unit exists anywhere in the field, and (as amended) no time-to-steps conversion is defined or implied.

**Demo 2 (REF-8A.2) — NSVS determination and encoding-block exclusion.** Fixture script declaring `balance`, `pc` in the candidate block and `balance@1`, `guard_tmp` between the ENCODING markers → NSVS = [balance, pc]; the trace state built from the solver model contains exactly [balance, pc]. Helpers and step-copies are excluded by rule, not by the extractor's discretion.

**Demo 3 (REF-8A.2) — missing declaration.** A model omitting `pc` → the completeness check names the missing variable and the trace is REJECTED; no receipt is issued (fail-closed, per REF-8A.2).

**Demo 4 (REF-8A.2) — shared vs query-specific variables.** Variables declared in Ω (balance, pc) are NSVS members and appear in every trace; a variable declared only inside a query's encoding block (stall_witness_flag) is not an NSVS member and appears in none. Normativity follows the declaration block, not query usage.

**Demo 2b (REF-8A.2) — parser acceptance matrix.** The demonstration's parser was run against ten fixture scripts: declarations in the candidate block and in the encoding block (accepted, correctly partitioned, for both `declare-const` and `declare-fun`) · a declaration after the END marker (rejected) · missing START marker (rejected) · missing END marker (rejected) · duplicated START marker (rejected) · END before START (rejected) · marker text embedded in a longer line (not a marker; the script then has no valid marker structure and is rejected). All ten outcomes match the specification's permitted regions exactly. A marker is a line whose entire content is the marker string.

**Demo 5 (REF-8A.1 / P-2) — the ACTUAL declared build boundary.** The demonstration declares a complete translator-build boundary and computes its digests exactly as REF-8A.1 defines: manifest [gen/ast_tables.rs, src/lib.rs, src/main.rs] · a build-configuration document naming the code generator `ast-table-gen` (output: gen/ast_tables.rs), the linked library `libz3`, the build script `build.rs`, and the environment-affecting setting RUSTFLAGS · the compiler record. SourceDigest `21a81a23…`, BuildDigest `91f70994…`, CompilerDigest `46be05a5…`, Translator_Hash `7f25fc367e43c0801c1f312166be980d52258626e458f952b0bd15057c225e63` (a different fixture from TV-TH1, hence a different hash — reproducibility is per declared boundary). The conformance check then runs against the FULL boundary: an honest build is CONFORMING; a build consuming an unmanifested file is NON-CONFORMING (file named); a build invoking an UNDECLARED generator (`secret-gen`) is NON-CONFORMING (generator named); a build that never produces a declared generator's output is NON-CONFORMING (output named). The check is not a toy file-list comparison: it covers files, generators, and generator outputs — every element the boundary declares.
