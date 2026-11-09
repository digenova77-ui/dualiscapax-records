# Spelling is not a bad signature

**Status:** Correction of a draft. Not an adoption.
**Date:** 2026-11-09
**Corrects** the previous text of `DCCP-SIG-HEX.md`, 1,293 bytes, SHA-256 `642ab53fe940cf23de0774cd8abb926aac92be6dd266f756504eae16f5d8d219`. That text refused a bad spelling as `SIGNATURE`. The spelling file has since changed only its preimage citation. It is now 1,478 bytes, SHA-256 `9854d2f15944481e4a3b28728b058d80b0336a9dc9db364ed13a5bb988e292c2`. This correction does not edit it.

A signature field is examined in this order.

1. If it is not exactly 128 characters from `0-9` and `a-f`, the verdict is `MALFORMED`. No curve operation runs.
2. If the spelling is accepted and the 64 bytes do not check under the stated profile, the verdict is `SIGNATURE`.

`MALFORMED` is not `FIELD`. The existing draft uses `FIELD` for the version, the address, the hashes, and an empty `at`. `MALFORMED` is not `SIGNATURE` either. It is a new word, and it is not in the protocol until a later text adopts it.

One hundred twenty-eight characters of `A` are `MALFORMED`. One hundred twenty-eight characters of `a` are not `MALFORMED` and are not yet valid. This correction does not adopt itself.
