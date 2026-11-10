# Reconciliation of `message.ts` to the ratified DCCP message protocol

**EVIDENCE STATUS:** Executed and tested at Idris's seat. All results below were run, not described: 10/10 reconciled tests, 4/4 foundation checks, 18/18 differential spellings.
**SOURCE DIGESTS:** ratified text `9ce2156ab95138083bad2b4a8b919cd50fa0e31ff3fbfd4beafb2d4dbf30f688` · ratification record `3fff75d4c7112b5105ec2cbbf23297af06866005ca153b054b8d9188d766abdc` (shelf commit `aba3a3f28660c63a9c7042a77b49b985c6690ede`) · previous `message.ts` `13079847dd0528a79099c27bc09fb77e3149d2e0467cf2f1ce3eb80947c2c6ca` · reconciled `message.ts` `558fe94e6b4ef03f91ae16dc7765fd098042664cb5b1a2b5b8fbacf6629f2ecf`
**SCOPE:** the one implementation the ratified text names — `message.ts` — reconciled to sections 4, 5 and 6 of the ratified text. Nothing else was changed.
**UNRESOLVED DEPENDENCIES:** signature hexadecimal case (carried open, below) · the word for a signature spelling that is not 128 hex characters (carried, below) · `message-node.ts` divergence (named, untouched).
**AUTHORIZATION BOUNDARY:** the Founder's message of 2026-11-09 19:40 EST separately instructed this reconciliation ("Please ratify and reconcile"). The ratification and the reconciliation are two acts; this report covers only the second. This report authorizes nothing.

## What diverged, and what the reconciled code does

1. **Preimage (section 4).** The previous implementation built the preimage with `JSON.stringify`. The reconciled implementation carries the section 4 byte-rule encoder itself: fixed key order, the section's exact escape table, `\u00xx` in lowercase for the remaining control characters, the solidus unescaped, and **refusal** — a lone surrogate is not a string, the encoder emits no bytes, and section 6 step 4 maps the refusal to `FIELD` (`seal`/`preimage` raise it as an error). A differential run against the old `JSON.stringify` canonical form over 18 ordinary strings (quotes, backslash, controls, solidus, accented, CJK, emoji, U+2028) is byte-identical 18/18: the only spelling that changes is the one the ratified text refuses.
2. **Signature check (section 5).** The previous implementation delegated to `signatureHolds` in `sig.ts`, which diverged from section 5 in three ways: it applied the torsion-free and small-order tests to `R` (section 5 applies them to the public key only); it verified with the strict non-cofactored equation (section 5.5 requires the cofactored equation `[8][S]B = [8]R + [8][k]A` over the received bytes); and it collapsed every failure into one boolean, which `open()` reported as `SIGNATURE`. The reconciled implementation runs section 5's own ordered procedure — 5.1 strict decode of the key (`DECODE`), 5.2 small-order (`SMALL_ORDER`), 5.3 torsion-free (`MIXED`), 5.4 the scalar value comparison (`SCALAR`), 5.5 decode of `R` and the cofactored equation (`EQUATION`) — and section 6 step 5 returns that word. `SIGNATURE` is no longer returned for any failure of a decodable signature.
3. **Unknown fields (section 2).** `open()` now reads only the six signed fields by name. Unknown envelope fields were already excluded from the preimage; they are now excluded structurally, not incidentally.
4. **A defect the reconciliation caught.** The first run of the new suite failed 9/10: with `S = 0`, the scalar `0` reached the point multiplication and the library refused it (`RangeError: invalid scalar`), escaping `open()` as a throw. Section 5.4 does not refuse `S = 0` — the equation must decide. The reconciled code names the identity point for a scalar that reduces to 0 modulo `L` (the same hazard existed for `k ≡ 0`). After the fix: 10/10.

## Carried, not decided

- **Hexadecimal case.** The ratified text does not decide it. The reconciled implementation decodes either case to the same bytes (section 5 runs on bytes; no step refuses an uppercase spelling) and writes lowercase, as section 2 states. An uppercase-spelling test asserts the match and the identical message identity.
- **The malformed-spelling word.** A signature spelling that is not 128 hexadecimal characters cannot be decoded into the 64 bytes section 5 runs on, and the ratified text names no word for it. The implementation carries the previous word `SIGNATURE` for exactly that input class, flagged here and in the code. It is a carry, not a decision; a future decision or corrigendum can name it.
- **Unicode normalization.** The encoder performs none. Two canonically equivalent strings remain two preimages, as the text states.

## Not changed

- The ratified text. These files conform to it; they do not amend it.
- `foundation.ts`, `sig.ts`, `node-crypto.ts`, `post.ts` — untouched. (`sig.ts`'s Ed25519 helper remains as it was for its other callers; its divergence from section 5 is named above, not hidden.)
- `message-node.ts` — untouched. Its refusal of an uppercase signature spelling as `FIELD` remains divergent from the ratified text's silence; it stands with the hex-case question.
- The author's checkout copy at `src/dccp/message.ts` is that seat's tree. This package is the reconciled implementation, tested and committed to the records shelf as evidence, in exact bytes any seat can fetch from the public door. Whether and when the author's tree takes these bytes is that seat's act.

## Test evidence (Node v24.22.1, @noble/curves 2.4.0)

- `node --test message.test.ts` — **10 pass, 0 fail, 0 skipped.** The three original tests stand with two declared word changes (`SIGNATURE` → `EQUATION` where the old suite named the collapsed word). The conformance suite adds: the section 4 worked example (202 bytes, digest `0f79997cc33a489534563dfe7b0167ac4cd30c025740162469dbb296a76e9729`); all six section 5 exhibit vectors with their decided words; the torsion-bearing-`R` probe passing, as the decided text declares; section 5 words end-to-end through `open()` (`SCALAR`, `SMALL_ORDER`, `DECODE`, `MIXED`, `EQUATION`, and `S = 0` reaching the equation); section 6's refusal order (CLASS → FIELD → CONTENT); section 4 refusal as `FIELD`; the spelling behaviors carried above.
- `node --test foundation.test.ts` (the foundation set, untouched) — **4 pass, 0 fail.** The Receipt_IDs and the B-0001 chain are unaffected.
- Differential preimage check — **18/18 byte-identical**, one intended refusal (lone surrogate).

## What this is not

Not an amendment of the ratified text · not conformance to REF-004 · not an authorization result — no result of `open()` contains one, and the suite asserts it · not execution of any `REQUEST` — opening one still does nothing but check it.
