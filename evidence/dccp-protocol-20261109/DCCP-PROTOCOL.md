# DCCP message protocol

**Status:** DRAFT. Not ratified. Not an authorization. Not a conformance claim against REF-004.
**Version:** 1
**One implementation:** `src/dccp/message.ts`. The in-memory desk in `src/dccp/post.ts` is not part of this protocol.

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

The preimage is the UTF-8 bytes of one JSON object. The only keys, in this order, are the fields that are present:

`at`, `class`, `content_sha256`, `prev`, `to`, `v`

`at` is included only when the envelope has that key. Separators are a comma and a colon, with no extra space. This is `JSON.stringify` of that object after inserting the keys in the order above.

The public key is not in the preimage. The verifier receives it separately. Putting a key in the envelope would not prove who controls it.

## 5. Signature

The signature is Ed25519 over the preimage bytes, using the 32-byte public key supplied to the verifier. The signature is 64 bytes.

A verifier MUST refuse a signature that does not check under that key. A verifier MUST refuse a signature that checks under a different key.

## 6. Verification

The inputs are the content bytes, the envelope, and one 32-byte public key.

1. If `class` is not one of the seven names, refuse `CLASS`.
2. If `v` is not `1`, `to` is empty, `content_sha256` or `prev` is not 64 lowercase hex, or `at` is present and empty, refuse `FIELD`.
3. If SHA-256 of the content is not `content_sha256`, refuse `CONTENT`.
4. Rebuild the preimage from section 4. If the signature is not a 64-byte Ed25519 signature by the given public key over that preimage, refuse `SIGNATURE`.
5. Otherwise the result is a match, and the message identity is SHA-256 of the preimage.

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

This text records the packet the current implementation checks. It is not a Founder ruling and it does not amend any ratified instrument. A second implementation conforms to this draft only by recomputing section 6 on the same bytes. Agreement with the author's description does not.
