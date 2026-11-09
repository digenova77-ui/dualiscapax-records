# Message preimage bytes

**Status:** Draft of a byte rule. Not an adoption, not an amendment, and not a permission.
**Date:** 2026-11-09
**Supersedes** the previous text of this file, 2,750 bytes, SHA-256 `98a7440189439bd80eb384ea255d54da202d560bcbcb67d25e7ef3f0bf609894`. The worked example is unchanged.
**Does not edit** `DCCP-PROTOCOL.md`, SHA-256 `e8b66429488ec27b4daa146ba8478dc31f44b5ba0961c0f3386808053296f63d`.
**Applies to** the envelope fields that draft already names. It does not add a parent list, a settlement, or a record.

The preimage is the UTF-8 bytes of one JSON object. Outside strings, the only bytes are U+007B `{`, U+007D `}`, U+0022 QUOTATION MARK, U+003A COLON, and U+002C COMMA. No byte-order mark and no trailing newline. No whitespace byte appears outside a string. A program conforms when it emits these bytes. A library call neither excuses a different spelling nor disqualifies a matching one.

## 1. Keys

The keys that are present, in this order and no other:

`at`, `class`, `content_sha256`, `prev`, `to`, `v`

`at` is included only when the envelope has that field. Absence is not `""` and is not `null`. Every included value is a string. `v`, when present, is the one character `1`, not a JSON number. Any other value of `v` is refused, and the encoder emits no bytes. The signature and the public key are not keys. The content bytes are not in the object. Their hash is `content_sha256`.

Between members: one comma. Between a key and a value: one colon. No other byte is inserted there.

## 2. String bytes

A string is a sequence of Unicode scalar values. A lone surrogate is not a string. The encoder refuses it and emits no bytes. It does not emit `\ud800` or `\udfff`.

The encoded string is U+0022, then each scalar, then U+0022.

| Scalar | Bytes inside the string |
|---|---|
| U+0022 QUOTATION MARK | `\"` |
| U+005C REVERSE SOLIDUS | `\\` |
| U+0008 | `\b` |
| U+0009 | `\t` |
| U+000A | `\n` |
| U+000C | `\f` |
| U+000D | `\r` |
| U+0000 through U+001F, except U+0008, U+0009, U+000A, U+000C, and U+000D | `\u00xx`, four lowercase hexadecimal digits |
| U+002F SOLIDUS | the solidus itself, not `\/` |
| every other scalar | its UTF-8 bytes, not a `\u` escape |

Those five exceptions are the short controls in the rows above. Form feed is `\f`. Carriage return is `\r`. Neither is a `\u` escape.

Keys are ASCII. They use the same string rule. An encoder that escapes a non-control character, uppercases a hex digit, or inserts a byte this table does not name has produced a different preimage.

## 3. What is hashed

The message identity is SHA-256 of those UTF-8 bytes. The signature is not an input. A match of that digest is not a person, a clock, a unique previous message, or a permission. A refused input has no identity.

## 4. Worked bytes

This object has no `at`. The `to` string is `a`, a quotation mark, `b`, a reverse solidus, `c`, a line feed, `d`.

```text
{"class":"PUBLIC","content_sha256":"1111111111111111111111111111111111111111111111111111111111111111","prev":"0000000000000000000000000000000000000000000000000000000000000000","to":"a\"b\\c\nd","v":"1"}
```

Those characters are 202 UTF-8 bytes. Their SHA-256 is `0f79997cc33a489534563dfe7b0167ac4cd30c025740162469dbb296a76e9729`.

A program that escapes the solidus, emits whitespace outside a string, or uses `\u000a` in place of `\n` will not produce that digest. This draft does not change the older draft, and it does not adopt itself.
