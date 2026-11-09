# DCCP message protocol

**Status:** DRAFT. Not ratified. Not an authorization. Not a conformance claim against REF-004.
**Version:** 1
**Section 4** was replaced on 2026-11-09. The previous text of this file is 5,341 bytes, SHA-256 `e8b66429488ec27b4daa146ba8478dc31f44b5ba0961c0f3386808053296f63d`. The byte rule is the one in `DCCP-PREIMAGE.md`, 3,468 bytes, SHA-256 `bb30e86b9c9236632810d0d7311dfb72c2d01fe97a560142b1e96fde001d936d`.
**One implementation:** `src/dccp/message.ts` still builds a preimage with `JSON.stringify`. It has not been changed to this section. The in-memory desk in `src/dccp/post.ts` is not part of this protocol.

This document specifies the packet two independent programs need in order to check one message. It does not specify who may hold a key, who a name belongs to, or which acts a message may cause.

## 1. What a check means

A successful check proves only that the given 32-byte Ed25519 public key signed the preimage defined in section 4, and that the accompanying content bytes hash to `content_sha256`.

A successful check does not prove permission, identity, clock accuracy, delivery, uniqueness of `prev`, or that a `REQUEST` was executed. A verifier MUST NOT report authorization or execution.

## 2. Packet

A message is two objects, carried together:

1. The content, which is an opaque byte string. It MAY be empty. It is not required to be text.
2. The envelope, which is a JSON object with the fields below and no other signed fields.

| Field | Present | Rule |
|---|---|---|
| `v` | required | The string `1`. A number is not version 1. |
| `class` | required | One of `PUBLIC`, `DIRECT`, `GROUP`, `PROTOCOL`, `EVIDENCE`, `REQUEST`, `RESPONSE`. |
| `to` | required | A non-empty string. It is an address label. It is not a verified identity. |
| `content_sha256` | required | 64 lowercase hexadecimal characters. SHA-256 of the content bytes. |
| `prev` | required | 64 lowercase hexadecimal characters. SHA-256 of the previous message's preimage, or 64 zeroes when the sender is not extending a known message. |
| `at` | omitted or non-empty | If present, a non-empty string inside the preimage. Absence is not `""` and is not `null`. A signed `at` proves the key signed that string. It does not prove the time. |
| `signature` | required | 128 hexadecimal characters encoding a 64-byte Ed25519 signature over the preimage. The implementation writes lowercase. The signature is not part of the preimage. |

Unknown envelope fields are not signed. A verifier MUST NOT treat them as authenticated. `null` is not a legal value for any field in this version.

`REQUEST` names a request. Opening it MUST NOT execute anything.

## 3. Hash

SHA-256 is the hash. Hexadecimal encodings of hashes are lowercase.

`content_sha256` is SHA-256 of the content bytes alone.

The message identity is SHA-256 of the preimage. It does not cover `signature`.

## 4. Preimage

The preimage is the UTF-8 bytes of one JSON object. A refused input has no preimage and no message identity.

Outside strings, the only bytes are U+007B `{`, U+007D `}`, U+0022 QUOTATION MARK, U+003A COLON, and U+002C COMMA. No byte-order mark, no trailing newline, and no whitespace byte outside a string. A program conforms when it emits these bytes. A library call neither excuses a different spelling nor disqualifies a matching one.

The keys that are present, in this order and no other:

`at`, `class`, `content_sha256`, `prev`, `to`, `v`

`at` is included only when the envelope has that field. Absence is not `""` and is not `null`. Every included value is a string. `v` is the one character `1`, not a JSON number. Any other value of `v` is refused, and the encoder emits no bytes. The signature and the public key are not keys. The content bytes are not in the object. Their hash is `content_sha256`.

Between members: one comma. Between a key and a value: one colon. No other byte is inserted there.

A string is a sequence of Unicode scalar values. A lone surrogate is not a string. The encoder refuses it and emits no bytes. It does not emit `\ud800` or `\udfff`. The encoded string is U+0022, then each scalar, then U+0022.

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

Those five exceptions are U+0008, U+0009, U+000A, U+000C, and U+000D. Form feed is `\f`. Carriage return is `\r`. Neither is a `\u` escape. Keys use the same string rule. An encoder that escapes a non-control character, uppercases a hex digit, or inserts a byte this table does not name has produced a different preimage.

This section replaces the previous sentence that named `JSON.stringify`. It does not choose Unicode normalization. Two canonically equivalent strings remain two preimages. The worked example remains 202 bytes, SHA-256 `0f79997cc33a489534563dfe7b0167ac4cd30c025740162469dbb296a76e9729`.

The public key is not in the preimage. The verifier receives it separately. Putting a key in the envelope would not prove who controls it.

## 5. Signature

The signature is Ed25519 over the preimage bytes, using the 32-byte public key supplied to the verifier. The signature is 64 bytes.

A verifier MUST refuse a signature that does not check under that key. A verifier MUST refuse a signature that checks under a different key.

## 6. Verification

The inputs are the content bytes, the envelope, and one 32-byte public key.

1. If `class` is not one of the seven names, refuse `CLASS`.
2. If `v` is not `1`, `to` is empty, `content_sha256` or `prev` is not 64 lowercase hex, or `at` is present and empty, refuse `FIELD`.
3. If SHA-256 of the content is not `content_sha256`, refuse `CONTENT`.
4. Build the preimage by section 4. If section 4 refuses, refuse `FIELD`. Do not check the signature. There is no message identity.
5. If the signature is not a 64-byte Ed25519 signature by the given public key over that preimage, refuse `SIGNATURE`.
6. Otherwise the result is a match, and the message identity is SHA-256 of the preimage.

The result MUST NOT contain an authorization.

Checking one message does not require the previous message to be present. `PREV` applies only when a receiver is checking a log it already holds: the next envelope's `prev` must equal that log's tip. A failed continuity check refuses that envelope for that log. It does not rewrite the earlier message.

The 64-zero value is the tip of an empty log. It is not a message.

## 7. What this protocol does not include

- Key custody, binding a key to a participant, and key replacement. Those remain unresolved. A seat name in one process is not a participant.
- A transport. Any carrier that delivers the content bytes and the envelope unchanged is outside this specification. A carrier is not a witness and not an authority.
- A shared total order, a blockchain, and a global log.
- The 172-byte validation receipt of REF-004. A DCCP message is not that receipt. Matching this draft is not conformance to REF-004.
- The in-memory desk. It is one program's mailbox. Another sandbox MUST be able to check a packet without holding that desk or any secret.

## 8. Status of this draft

Section 4 was replaced by an explicit act on 2026-11-09. The rest of this draft is not a Founder ruling and it does not amend any ratified instrument. `message.ts` has not been changed. A second implementation conforms to this draft only by recomputing section 6 on the same bytes. Agreement with the author's description does not.
