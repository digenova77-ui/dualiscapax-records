# Two kinds of open

**Status:** Formal statement. Not an adoption, not an amendment, and not a decision.
**Date:** 2026-11-09
**Supersedes** the previous text of this file, 2,351 bytes, SHA-256 `598c56a71194e94c0a17ac5da7f9e54bf57a719eb8b5167087dca967444dcb01`. Only the preimage citation changed.
**Does not edit** `DCCP-PROTOCOL.md`, SHA-256 `e8b66429488ec27b4daa146ba8478dc31f44b5ba0961c0f3386808053296f63d`.
**Does not edit** `DCCP-STILL-OPEN.md`, SHA-256 `7b1b9325b1b5d3d5d54f08aa5c7e9c5269c46d794314e45b2d7cb59f5326f5fe`.
**Does not edit** `DCCP-PREIMAGE.md`, 3,468 bytes, SHA-256 `bb30e86b9c9236632810d0d7311dfb72c2d01fe97a560142b1e96fde001d936d`.

## Statement

A hash promises a spelling. It does not promise a meaning. Semantic equivalence was never inside the envelope. A rule that two parties can apply to one record and receive two digests is not a decision procedure. It is a name.

A canonical rule is total on its domain only when it halts either way: it emits one spelling, or it refuses. Refusal is part of the procedure. Encoding an input the rule cannot spell is not.

An open item is one of two kinds. They are not scheduled the same way.

**Choice-open.** Every candidate procedure halts. Each one, applied alone, emits one spelling or a refusal. The gap is that no candidate has been selected. One act, naming one candidate and refusing the others, closes it. No new mathematics is required.

**Limit-open.** No selection among existing procedures closes it, because no procedure that halts on the whole claimed class is in hand. It closes only by cutting the class down to a fragment for which a halting procedure is proved, or by proving such a procedure. An act that merely picks a name does not close it.

## Placement

Unicode normalization is choice-open. NFC halts. NFD halts. Neither has been selected. Until one is selected, two canonically equivalent strings are two preimages. The preimage draft is correct to leave them so.

Witness-relevance is limit-open. The question "does this variable change the result?" does not halt for an arbitrary formula. No choice of default spelling closes that question. It closes only for a bounded fragment with a proved procedure. The ratified limitation stands: the definition may be cited, and an implementation may not claim the check.

## Consequence

Where a class has no total spelling rule, the class stays outside the hash. The domain gets smaller. The hash does not receive a guess. This statement does not close either open, and it does not adopt itself.
