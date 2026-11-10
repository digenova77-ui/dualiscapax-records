# Proposed corrigendum — signature hexadecimal case

**Status:** Proposal. Not adopted. Not a change to the ratified text. Not a change to any implementation.
**Date:** 2026-11-09
**Names:** DCCP message protocol, version 1, 11,304 bytes, SHA-256 `9ce2156ab95138083bad2b4a8b919cd50fa0e31ff3fbfd4beafb2d4dbf30f688`.
**Review:** Requested. This file does not record a review, and it does not record an act.

## What the ratified text says now

The header carries this open item: the case of the signature's hexadecimal spelling is not decided. Section 5 runs on bytes, and no step in section 6 refuses an uppercase spelling.

The signature field is 128 hexadecimal characters. The implementation writes lowercase. `content_sha256` and `prev` are lowercase. The signature row does not say the reader refuses `A-F`.

## The proposed rule

A signature spelling is 128 characters, each one `0-9` or `a-f`. A character `A-F` is not that spelling. The reader refuses it before section 5. The reader does not lowercase the field and then continue. If another tool printed uppercase, that tool, or the sender, lowercases the spelling before the packet is offered. That changes the spelling. It does not change the 64 signature bytes.

This proposal does not choose the refusal word. `FIELD` is the word the other lowercase hex fields use. Adopting that word would be a second decision.

## What a review is asked to check

1. The proposal names `9ce2156ab95138083bad2b4a8b919cd50fa0e31ff3fbfd4beafb2d4dbf30f688` and does not edit those bytes.
2. The reader rule is refusal, not silent repair.
3. The refusal word is still unset.
4. A lowercase spelling that already passes is unchanged by this rule.
5. The same characters in uppercase never reach section 5.

A match under a key remains not a permission. This proposal grants none.
