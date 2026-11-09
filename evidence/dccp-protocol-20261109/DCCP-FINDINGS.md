# DCCP open findings disposition

**Status:** Assessment. Not a decision, not an amendment, and not an authorization.
**Date:** 2026-11-09
**Draft:** `DCCP-PROTOCOL.md`, 5,341 bytes, SHA-256 `e8b66429488ec27b4daa146ba8478dc31f44b5ba0961c0f3386808053296f63d`. This file does not edit it.
**Review:** `DCCP-SPEC-REVIEW.md`, SHA-256 `aa339b1e670a691eefd4538126bbd09e406fb240300a3488485ed013d544e869`.

Findings 1 through 6 are protocol questions. Finding 7 is a disagreement between a later program and the draft. None of the seven is answered here.

Key custody stays outside this list. A valid message does not become permission.

## 1. Canonical encoding

**Language.** Section 4: "The preimage is the UTF-8 bytes of one JSON object." "Separators are a comma and a colon, with no extra space. This is `JSON.stringify` of that object after inserting the keys in the order above."

**Defect.** The encoder is named. Its escaping is not written. Two JSON encoders can differ on the same string.

**Decision.** Which escaping rules a second program must match, stated without pointing at one language's function.

**Kind.** Protocol amendment. A new text with a new digest. Not an implementation preference.

**Compatibility.** Messages whose strings need no escape keep the same preimage. Messages that need escapes are the ones implementations can already disagree on.

**Evidence to close.** The escaping rules in the new text, and two independent programs producing the same preimage for one string that requires an escape.

**Authority.** Adopting that text as the protocol is a Founder act. This disposition does not adopt it.

## 2. Signature hex case

**Language.** Section 2, `content_sha256` and `prev`: "64 lowercase hexadecimal characters." Section 2, `signature`: "128 hexadecimal characters encoding a 64-byte Ed25519 signature over the preimage. The implementation writes lowercase." Section 3: "Hexadecimal encodings of hashes are lowercase." Section 6 step 4 refuses `SIGNATURE` when the signature does not check.

**Defect.** Hashes must be lowercase. The signature's letters are not given the same rule.

**Decision.** Whether an uppercase or mixed-case signature is `FIELD`, `SIGNATURE`, or a match.

**Kind.** Protocol amendment. The named implementation already writes lowercase. Choosing the refusal for any other spelling is a rule the draft does not contain.

**Compatibility.** Signatures the named implementation already writes stay inside either choice. Only a different spelling splits.

**Evidence to close.** One sentence in a new text, and one uppercase signature with its expected refusal or match.

**Authority.** Adopting that sentence as the protocol is a Founder act.

## 3. Ed25519 policy

**Language.** Section 5: "The signature is Ed25519 over the preimage bytes, using the 32-byte public key supplied to the verifier. The signature is 64 bytes." Section 6 step 4: "If the signature is not a 64-byte Ed25519 signature by the given public key over that preimage, refuse `SIGNATURE`."

**Defect.** The draft does not cite a verification policy. It does not say whether a non-canonical signature matches.

**Decision.** Which Ed25519 verification rules apply, including non-canonical signatures.

**Kind.** Protocol amendment. Naming the policy the named implementation already uses would still be new text.

**Compatibility.** An ordinary signature that already matched under Node 22.23.3 and `@noble/curves` 2.4.0 is not the open case. The open case is a signature those two rules would not both accept.

**Evidence to close.** A citation in the new text, and one signature that the chosen policy refuses, checked by two programs.

**Authority.** Adopting that policy as the protocol is a Founder act.

## 4. Response linkage

**Language.** Section 2: `class` is "One of `PUBLIC`, `DIRECT`, `GROUP`, `PROTOCOL`, `EVIDENCE`, `REQUEST`, `RESPONSE`." No other field names an earlier message. Section 4 lists the only signed keys.

**Defect.** A `RESPONSE` does not identify the message it answers.

**Decision.** Whether a response must carry the identity of an earlier message, and in which signed field.

**Kind.** Protocol amendment. Adding a signed field changes the preimage of any message that includes it.

**Compatibility.** A new signed field, if it can be absent, does not change the preimage of messages that omit it. A response that omits it would still not identify its request.

**Evidence to close.** The field's name and absence rule in a new text, and two programs agreeing on the preimage of a response that names a message identity.

**Authority.** Adopting the field as the protocol is a Founder act.

## 5. Replay

**Language.** Section 1: a successful check "does not prove permission, identity, clock accuracy, delivery, uniqueness of `prev`, or that a `REQUEST` was executed." Section 6: "Checking one message does not require the previous message to be present. `PREV` applies only when a receiver is checking a log it already holds."

**Defect.** The draft says uniqueness is not proved, and it does not define a duplicate rule or which log `PREV` refers to.

**Decision.** Whether a duplicate message is a valid message seen again, or a refusal, and for which log.

**Kind.** Protocol amendment if a refusal is required. Leaving the current sentence in force is also a decision, and it has not been adopted as one.

**Compatibility.** A replay rule does not change the signature of the first message. It changes what a second presentation of those same bytes means.

**Evidence to close.** The rule in a new text, or an explicit adoption of the current sentence, and two programs giving the same result for the same bytes presented twice.

**Authority.** Adopting either outcome as the protocol is a Founder act.

## 6. Address resolution

**Language.** Section 2: "`to` is a non-empty string. It is an address label. It is not a verified identity." Section 7: "A transport. Any carrier that delivers the content bytes and the envelope unchanged is outside this specification."

**Defect.** The draft does not say how `to` is matched, normalized, or refused.

**Decision.** Whether `to` remains an uninterpreted label, or a receiver must apply a stated matching rule.

**Kind.** Protocol amendment if a matching rule is added. A rule that changes the signed string changes the preimage. A rule that only tells a mailbox which label it accepts does not.

**Compatibility.** Existing envelopes stay verifiable if the signed characters of `to` do not change.

**Evidence to close.** The rule in a new text, and two programs agreeing on one label that matches and one that does not.

**Authority.** Adopting a matching rule as the protocol is a Founder act. Declaring that the current sentence is the whole rule is also a Founder act.

## 7. Code and specification disagreement

**Language.** Section 6 step 4: if the signature is not a 64-byte Ed25519 signature over the preimage, refuse `SIGNATURE`. Step 2's `FIELD` list does not include the signature.

**Defect.** `message-node.ts` refuses a signature that is not 128 hex characters as `FIELD`. `message.ts` and section 6 use `SIGNATURE`.

**Decision.** No protocol decision. The later file follows the draft, or it stays a known divergence.

**Kind.** Implementation correction. Not an amendment, unless someone chooses to change the draft so that `FIELD` is the specified reason. That choice would be a protocol amendment and is not made here.

**Compatibility.** Correcting the later file changes a reason code. It does not change a preimage or a signature. Callers that treated a short signature as `FIELD` would see `SIGNATURE`.

**Evidence to close.** The later file returning `SIGNATURE` for a signature that is not 128 hex characters, with the draft digest still `e8b66429488ec27b4daa146ba8478dc31f44b5ba0961c0f3386808053296f63d`.

**Authority.** Not a Founder act to make the later file match the current draft. A Founder act would be required only to change the draft instead.

## Disposition

Do not edit the 5,341-byte draft from this assessment. Do not treat a preferred reason code, encoder, or field as the protocol. Findings 1 through 6 stay open. Finding 7 is an implementation correction and is not applied in this file.
