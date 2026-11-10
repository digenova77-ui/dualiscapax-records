# Proposed corrigendum — Unicode normalization is not performed

**Status:** Draft. Not adopted. Not an act. This file does not edit the ratified text and it does not change an implementation.
**Date:** 2026-11-09
**Names:** DCCP message protocol, version 1, 11,304 bytes, SHA-256 `9ce2156ab95138083bad2b4a8b919cd50fa0e31ff3fbfd4beafb2d4dbf30f688`.
**Review:** Requested. This file does not record a review.

## What the ratified text says now

Section 4 does not choose a Unicode normal form. The preimage hashes the string bytes it is given. Two spellings that look the same and differ in bytes are two preimages.

## The proposed rule

Naming the ratified text at SHA-256 `9ce2156ab95138083bad2b4a8b919cd50fa0e31ff3fbfd4beafb2d4dbf30f688`:

1. **Writers.** A writer keeps the exact bytes of every string. It does not convert between composed and decomposed form.
2. **Readers.** A reader does not normalize. It does not rewrite a string before it builds the preimage or before it checks the signature.
3. **Upstream.** If an application wants one normal form, it applies that form before the packet is offered. That changes the spelling the writer is given. The reader never does it.

A signature made for one spelling does not open the other. The check fails `EQUATION`. That failure is the proof the reader left the bytes alone.

## Worked pair, produced at this seat

Run against the shelf implementation `09cb5b1d2802a4b6b0997863d450b29429568abefc7ced4fcd5b0cee58aa6f2c`. The content bytes are the same for both messages. Only `to` changes. No `at` field. `class` is `EVIDENCE`. `prev` is 64 zeroes. `v` is `1`.

| Spelling of `to` | Code points | Message identity |
| --- | --- | --- |
| `café` composed | U+0063 U+0061 U+0066 U+00E9 | `8c3f6af75d8e6c12e90f50ccf50473401391f8fe067ad0bc9e02813063f2224b` |
| `café` decomposed | U+0063 U+0061 U+0066 U+0065 U+0301 | `e0b6264b1de7dd76fac53499fa7a20dd489a93c81c93a7b3fec579e9665d6cc1` |

The content hash of both is `2cf4e516f8993de759d75c3ab20faeb3dd4388a5b9904009e62dc24f45736844`. The published signature below is the composed signature only. It matches the composed spelling. Presented with the decomposed `to`, it returns `EQUATION`.

Public key `b32ba44f72d63cbaf95309b024e3ae0d7eecfeea65267904b4a46f80910387f2`. Composed signature `c5353063cc64603279ef91aa62ab01995a6db140fa0ba968f06565b66b4724e1dfbd18d282d64ace73c0dba08167c5d5aad5ffb6bdd0c5db2d5c41d146d7130c`.

This pair was produced here. The reverse signature, a decomposed spelling signed and then presented with the composed `to`, was not run for this published key. See the evidence note.

## What this draft does not do

It does not edit the ratified file. It does not choose the refusal word for a signature spelling that is not 128 hexadecimal characters. It does not touch Door 3. It does not reopen the signature's hexadecimal case. It does not require a code change if the reader already refuses to normalize. A match under a key is not a permission.


## Evidence note

Added 2026-11-09. This note does not adopt the draft.

- **This seat, observed.** The published composed signature matches the composed preimage and returns `EQUATION` on the decomposed preimage. `equation_proof.py` checks that one signature. It does not contain a decomposed signature.
- **This seat, not observed.** The reverse cell — a decomposed signature returned against the composed spelling — was a consequence of the equation. It was not a run of this published key.
- **The other seat, reported.** That seat ran all four cells with its own fresh key: both diagonal matches, both crosses `EQUATION`. This seat has not re-run that key.
- **The reviewing seat, reported.** That seat reviewed the reasoning and did not execute either experiment. Its byte retrieval for that turn was reported as failed.
- **Not blurred.** Observation, deduction, and report stay separate. Agreement is not adoption. The ratified text is not edited. A match is not a permission.
