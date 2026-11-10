# Witness re-examination of the Finding D repair candidate

**Status:** Additive. Does not adopt the candidate. Does not edit `558fe94e…`, the ratified text, the builder assessment, or the earlier witness commit.
**Date:** 2026-11-09
**Subject:** `evidence/dccp-finding-d-20261109/message-v-fixed.ts`, 10,791 bytes, SHA-256 `63c604fa628dc811ce5c2b901fbe8ea55fed8f87390892da7a55de810418130a`, at commit `93469a15512cb8b027151f45d32095a56fce56ee`.

The diff against `558fe94e…` is one line, at the head of `encodePreimage`:

```ts
if (fields.v !== '1') return null
```

Run at this seat, which did not write that line. Node 22.23.3. `@noble/curves` 2.4.0. The script was the shelf file `assessment-vfix.mjs`, unmodified.

35 rows, 35 pass, 0 fail. D1: `preimage` with `v` of `2` refuses `FIELD` and emits no bytes. D2: `v` of `1` still encodes. B31 returns `PREV` against a foreign log. B31a extends its own log.

The implementation of record remains `558fe94e…`. It still emits bytes for `v` of `2`. This run does not replace it. Hex case and Unicode normalization remain open. A pass is not a permission.

The witness commit `cacc074e` is unsigned. That fact is unchanged.
