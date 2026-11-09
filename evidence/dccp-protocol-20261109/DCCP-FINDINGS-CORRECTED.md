# DCCP findings examination, corrected

**Status:** Corrected examination. Not a decision, not an amendment, and not an authorization.
**Date:** 2026-11-09
**Draft:** `DCCP-PROTOCOL.md`, 5,341 bytes, SHA-256 `e8b66429488ec27b4daa146ba8478dc31f44b5ba0961c0f3386808053296f63d`. Not edited.
**Historical records, not edited:** `DCCP-FINDINGS.md`, 8,249 bytes, SHA-256 `e9b4ecd9ab483525ac35e393ee712f7e4d0c20ac5d0a5527ec22bf7d1e228fee`. `DCCP-FINDINGS-REVIEW.md`, 2,696 bytes, SHA-256 `fdddfa80a1503d8cf1b21dc090a5cb03f763700a102286c53cd5c2f29dbaf479`.
**Corrections incorporated:** R1, R2, R3, R4. They correct this examination. They do not close a finding.

Findings 1 through 6 are unresolved protocol questions. Finding 7 is an unapplied implementation correction. Key custody is not one of these findings. A valid message is not permission.

This examination does not say who may adopt a later wording. The earlier disposition called that act a Founder act. The draft does not. That attribution is not carried forward. Who may close a finding is a separate question, and it is not answered here.

## 1. Canonical encoding

**Language.** Section 4: "The preimage is the UTF-8 bytes of one JSON object." "Separators are a comma and a colon, with no extra space. This is `JSON.stringify` of that object after inserting the keys in the order above."

**Defect.** The encoder is named. Its escaping rules are not written in the draft. Two JSON encoders can differ on the same string.

**Open question.** Which bytes a second program must produce for a string that needs an escape.

**Kind.** Protocol text, if a rule is added. Not decided here. One possible later wording could name a function. This examination does not forbid that form and does not choose it.

**Evidence that would close it.** A wording of the escaping rules, and two independent programs producing the same preimage for one string that requires an escape.

## 2. Signature hex case

**Language.** Section 2 requires "64 lowercase hexadecimal characters" for `content_sha256` and `prev`. For `signature` it says "128 hexadecimal characters" and "The implementation writes lowercase." Section 6 step 2's `FIELD` list does not include the signature. Step 4 refuses `SIGNATURE` when the signature does not check.

**Defect.** The hashes must be lowercase. The signature's letters are not given that rule.

**Open question.** Whether an uppercase or mixed-case signature is `FIELD`, `SIGNATURE`, or a match.

**Kind.** Protocol text, if a refusal or an acceptance is required. Not decided here.

**Evidence that would close it.** The wording, and one uppercase signature with the result that wording requires, from two programs.

## 3. Ed25519 policy

**Language.** Section 5: "The signature is Ed25519 over the preimage bytes, using the 32-byte public key supplied to the verifier. The signature is 64 bytes." Section 6 step 4 refuses `SIGNATURE` when it is not such a signature.

**Defect.** The draft does not cite a verification policy, and it does not say whether a non-canonical signature matches.

**Open question.** Which Ed25519 verification rules apply.

**Kind.** Protocol text, if a policy is cited. Not decided here.

**Evidence that would close it.** The citation, and one signature for which two programs give the result that policy requires. An ordinary signature that already matched is not that case.

## 4. Response correlation

**Language.** Section 2 includes `RESPONSE` in the class list. Section 2 also says `prev` is the SHA-256 of the previous message's preimage, or 64 zeroes. Section 4 lists `prev` among the signed keys.

**Correction R1.** `prev` names an earlier message. A predecessor is not defined as the request a `RESPONSE` answers. The draft never says that `prev`, or any other field, is that request.

**Open question.** Whether a response must identify the request it answers, and if so by which signed field.

**Kind.** Protocol text, if a correlation rule is added. Not decided here.

**Evidence that would close it.** The wording. If it adds a signed field, two programs agreeing on the preimage of a response that uses it. Messages that omit an absent field keep the preimage they already have.

## 5. Log selection and uniqueness

**Language.** Section 1: a successful check "does not prove permission, identity, clock accuracy, delivery, uniqueness of `prev`, or that a `REQUEST` was executed." Section 6: "Checking one message does not require the previous message to be present. `PREV` applies only when a receiver is checking a log it already holds: the next envelope's `prev` must equal that log's tip. A failed continuity check refuses that envelope for that log. It does not rewrite the earlier message."

**Correction R2.** The comparison is specified. When a receiver is checking a log it holds, the next `prev` must equal that log's tip. What is not specified is which log, and section 1 already says the check does not prove uniqueness.

**Open question.** Which log `PREV` refers to, and whether a second presentation of the same bytes is a match seen again or a refusal.

**Kind.** Protocol text, if either answer is required beyond the sentences above. Not decided here.

**Evidence that would close it.** The wording, and two programs giving the same result for the same bytes presented twice against a named log.

## 6. Address label

**Language.** Section 2: "`to`" is "A non-empty string. It is an address label. It is not a verified identity." Section 7 places a transport outside the specification.

**Defect.** The draft does not say how a label is matched, normalized, or refused.

**Open question.** Whether `to` remains an uninterpreted label, or a stated matching rule applies.

**Kind.** Protocol text, if a matching rule is added. A rule that changes the signed characters changes the preimage. A rule that does not change those characters does not. Not decided here.

**Evidence that would close it.** The wording, and two programs agreeing on one label that matches and one that does not, without changing the signature of an existing envelope whose `to` characters are unchanged.

## 7. Two classification discrepancies

**Language.** Section 6 step 2 refuses `FIELD` for version, empty `to`, hash shape, and empty `at`. Step 4 refuses `SIGNATURE` when the signature is not a 64-byte Ed25519 signature over the preimage.

**Correction R3.** `message-node.ts` does both of the following, and the draft decides neither as `FIELD`:

- A signature that is not 128 hex characters is refused as `FIELD`.
- A signature that uses `A-F` is refused as `FIELD`, because the function accepts only `0-9` and `a-f`.

`message.ts` follows section 6 for a signature that does not verify: the reason is `SIGNATURE`. The uppercase spelling is the case finding 2 leaves open. The later file has chosen `FIELD` for it.

**Kind.** Implementation correction if the later file is brought to section 6. A protocol change only if the draft is edited so that `FIELD` is the specified reason. Neither is applied here.

**Evidence that would close it.** The later file returning `SIGNATURE` for both a short signature and an uppercase signature that otherwise verifies, with the draft digest unchanged. Or a new draft digest that states `FIELD` for those cases. The second of those is a protocol text, and it is not written here.

## What this examination does not do

It does not edit the draft. It does not patch `message-node.ts`. It does not choose a wording. It does not say who has authority to adopt a wording. It does not decide key custody. It does not turn a valid message into permission.
