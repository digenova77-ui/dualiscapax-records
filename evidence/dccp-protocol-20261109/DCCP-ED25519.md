# Ed25519 verification policy

**Status:** Draft of a check. Not an adoption and not an amendment.
**Date:** 2026-11-09
**Does not edit** `DCCP-PROTOCOL.md`, SHA-256 `e8b66429488ec27b4daa146ba8478dc31f44b5ba0961c0f3386808053296f63d`.
**Reported code, not this draft's authority:** `signatureHolds` calls `ed25519.verify` with `zip215: false`, and `ed25519Point` requires a torsion-free point that is not small order. This text proposes that behavior. The code does not promote the text.

## Inputs

A verifier has the preimage bytes, a 32-byte public key, and a 64-byte signature. The signature bytes are the decoding of the 128 lowercase hex characters in [DCCP-SIG-HEX.md](src/dccp/DCCP-SIG-HEX.md). A wrong spelling never reaches this check.

## Policy

The check is Ed25519 as specified by RFC 8032, not ZIP-215.

The public key is 32 bytes and is a point that is torsion-free and not of small order. The first 32 bytes of the signature are held to the same point rule. The verification rejects a non-canonical encoding. A signature ZIP-215 would accept and RFC 8032 would reject is a refusal here. The reason is `SIGNATURE`.

A match proves that this public key signed this preimage. It does not prove a person, a clock, a unique previous message, or a permission. It does not bury a claim and it does not move a token.

No negative test vector for a non-canonical signature is included. Constructing one is a separate exhibit. This draft does not adopt itself.
