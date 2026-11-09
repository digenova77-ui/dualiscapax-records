# Signature spelling

**Status:** Draft of a byte rule. Not an adoption and not an amendment.
**Date:** 2026-11-09
**Supersedes** the previous text of this file, 1,293 bytes, SHA-256 `642ab53fe940cf23de0774cd8abb926aac92be6dd266f756504eae16f5d8d219`. Only the preimage citation changed.
**Does not edit** `DCCP-PROTOCOL.md`, SHA-256 `e8b66429488ec27b4daa146ba8478dc31f44b5ba0961c0f3386808053296f63d`.
**Follows** `DCCP-PREIMAGE.md`, 3,468 bytes, SHA-256 `bb30e86b9c9236632810d0d7311dfb72c2d01fe97a560142b1e96fde001d936d`. That file pins the preimage. This file does not change it.

The signature is not part of the preimage. Its own spelling is a separate rule.

## Rule

The signature field is exactly 128 characters from `0-9` and `a-f`. No spaces, no prefix, and no uppercase.

A signer writes lowercase. A verifier refuses any other spelling. The refusal is `SIGNATURE`, which is the reason the existing draft already uses when a signature does not check. This draft does not move that failure into `FIELD`.

A string of the right length and case is only a spelling. It is not yet a signature. The 64 bytes it encodes still have to check under the public key, over the preimage.

## Worked refusal

One hundred twenty-eight characters of `A` are the right length and the wrong case. They are refused before the Ed25519 check. One hundred twenty-eight characters of `a` have the accepted spelling and still prove nothing until they verify.

This draft does not adopt itself.
