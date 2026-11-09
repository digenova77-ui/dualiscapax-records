# Six technical decision questions

**Status:** Questions only. No answer is adopted.
**Date:** 2026-11-09
**Baseline:** `DCCP-FINDINGS-CORRECTED.md`. The original disposition and its review remain historical records.
**Draft:** `DCCP-PROTOCOL.md`, SHA-256 `e8b66429488ec27b4daa146ba8478dc31f44b5ba0961c0f3386808053296f63d`. Not edited.

These six questions are findings 1 through 6. Finding 7 is not among them. It is an implementation correction, and it is not applied. Key custody is not among them. Trinity authorization is not among them. A wording that answers a question is not adopted by writing the question down.

1. **Encoding.** For a string that JSON must escape, which exact preimage bytes does section 4 require?

2. **Signature spelling.** Is an uppercase or mixed-case signature hex a match, a `SIGNATURE` refusal, or a `FIELD` refusal?

3. **Verification policy.** Which Ed25519 rules decide a match, including a non-canonical signature?

4. **Reply link.** Must a `RESPONSE` identify the request it answers, and if so in which signed field? `prev` remains a predecessor unless a later text says it is that request.

5. **Log and duplicate.** Which log must the next `prev` equal, and is a second presentation of the same bytes a match seen again or a refusal? The draft already requires that, for a log the receiver holds, the next `prev` equal that log's tip.

6. **Label.** Does `to` stay an uninterpreted non-empty string, or does a stated matching rule apply without treating the label as an identity?

Who may adopt an answer is not asked here. That authority is not stated in the draft, and this file does not supply it.
