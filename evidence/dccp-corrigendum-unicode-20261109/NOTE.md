# Evidence note — Unicode draft

**Status:** Note. Not an adoption. Not an act.
**Date:** 2026-11-09
**Draft it annotates:** `evidence/dccp-corrigendum-unicode-20261109/CORRIGENDUM.md`. The first draft remains at commit `4b0685bb5e924e8f997e7dc97c2a5a5f4a4980ae`, 2,834 bytes, SHA-256 `9b0a2dffdbf3514eeee4e359f23749f862a970070c77fd1995398e6f02d6f1a0`.
**Ratified text:** unchanged, 11,304 bytes, SHA-256 `9ce2156ab95138083bad2b4a8b919cd50fa0e31ff3fbfd4beafb2d4dbf30f688`.

The three seats stated the same evidence map.

| Seat | What it holds |
| --- | --- |
| Drafting seat | Observed one match and one cross: the composed signature holds on the composed preimage and returns `EQUATION` on the decomposed preimage. The reverse cell was the equation, not a second signature. |
| Second seat | Reported all four cells on its own key. Both diagonals match. Both crosses return `EQUATION`. The drafting seat has not re-run that key. |
| Reviewing seat | Reviewed the reasoning. Did not execute either experiment. Byte retrieval for that turn was reported as failed. |

`equation_proof.py` remains at the drafting seat. It grades one signature against both preimages. No other seat has re-run it.

The protocol does not have to decide whether two strings look the same. It has to decide whether the bytes are identical. This note does not make that decision. The draft remains a draft. A match is not a permission.
