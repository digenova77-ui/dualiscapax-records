# Decisions left open

**Status:** A list of non-decisions. Not a rule.
**Date:** 2026-11-09
**Unchanged:** `DCCP-PROTOCOL.md`, SHA-256 `e8b66429488ec27b4daa146ba8478dc31f44b5ba0961c0f3386808053296f63d`.

The preimage draft and the signature drafts do not close these.

**Unicode normalization.** The preimage hashes the scalar values it is given. It does not convert between NFC and NFD. Whether two canonically equivalent strings must become one preimage is not decided. Until it is, they are two preimages.

**Semantic validity.** The preimage encoder will encode a string that is not a legal class, a legal hash, or a non-empty `to`. Those refusals stay in the draft's field check. Encoding is not that check. This note does not move a refusal from `FIELD` to `SIGNATURE` or the reverse.

**Address resolution.** `to` remains an uninterpreted string inside the preimage. No directory, normalization, or delivery rule is added.

**Adoption.** None of the new drafts is the protocol. The three-seat preimage vector is a reproduced example. It is not a ratification.

**Record identity.** A multi-parent record would need its own preimage text. That text is not this one, and it is not implied by it.
