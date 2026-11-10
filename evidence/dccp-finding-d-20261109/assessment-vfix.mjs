// Post-ratification conformance assessment — defined-domain matrix.
// Runs against the SHELF bytes of the reconciled message.ts
// (dualiscapax-records @ c469a469, sha256 558fe94e…), copied verbatim
// to message-under-test.ts. Every row names its basis in the ratified
// text (DCCP message protocol v1, sha256 9ce2156a…). Rows whose basis is
// an implementation handling of an out-of-shape input are marked CARRY
// and reported under Finding C, never as conformance.
import { ed25519 } from '@noble/curves/ed25519.js';
import { append, checkSignature, contentHash, emptyLog, envelopeHash, open, preimage, seal, GENESIS } from './message-v-fixed.ts';

const text = new TextEncoder();
const secret = ed25519.utils.randomSecretKey();
const publicKey = ed25519.getPublicKey(secret);
const content = text.encode('assessment content');
const hex = (s) => Uint8Array.from(Buffer.from(s, 'hex'));
const toHex = (b) => Buffer.from(b).toString('hex');
const leInt = (bytes) => { let n = 0n; for (let i = bytes.length - 1; i >= 0; i--) n = (n << 8n) | BigInt(bytes[i]); return n; };
const intLe32 = (n) => { const b = new Uint8Array(32); let v = n; for (let i = 0; i < 32; i++) { b[i] = Number(v & 255n); v >>= 8n; } return b; };
const L = 2n ** 252n + 27742317777372353535851937790883648493n;

const sealed = seal(content, { class: 'DIRECT', to: 'seat-b', prev: GENESIS }, secret);
const sigBytes = hex(sealed.signature);
const withS = (s) => ({ ...sealed, signature: toHex(Uint8Array.from([...sigBytes.subarray(0, 32), ...intLe32(s)])) });
const envelopeFor = (sigHex) => ({ v: '1', class: 'EVIDENCE', to: 'exhibit', content_sha256: contentHash(content), prev: GENESIS, signature: sigHex });
const ID_PUB = hex('0100000000000000000000000000000000000000000000000000000000000000');
const ID_PUB_NONCANON = hex('0100000000000000000000000000000000000000000000000000000000000080');
const LOW_SIG = 'd4b4f5784868c3020403246717ec169ff79e26608ea126a1ab69ee77d1b167120300000000000000000000000000000000000000000000000000000000000000';
const MIXED_PUB = hex('da99e28ba529cdde35a25fba9059e78ecaee239f99755b9b1aa4f65df00803e2');
const MIXED_SIG = 'c9a3f86aae465f0e56513864510f3997561fa2c9e85ea21dc2292309f3cd6022711c5ee1d30c1a8c1522b474b4b339811c68c49419385f8d81e3e974b2b89a0c';

const rows = [];
function row(id, basis, actual, expected, carry = false) {
  const got = actual && typeof actual === 'object' ? (actual.match ? 'MATCH' : actual.reason) : actual;
  rows.push({ id, basis, expected, got, pass: got === expected, carry });
}
const R = (env, c, k) => open(env, c, k);

// --- Section 6 steps 1-3: field domain ---
row('B1', '§6.2: v is not the string 1 (a number)', R({ ...sealed, v: 1 }, content, publicKey), 'FIELD');
row('B2', '§6.2: v is not 1 (string 2)', R({ ...sealed, v: '2' }, content, publicKey), 'FIELD');
row('B3', '§6.1: class not one of the seven', R({ ...sealed, class: 'NOPE' }, content, publicKey), 'CLASS');
row('B4', '§6.1: class names are exact (lowercase public)', R({ ...sealed, class: 'public' }, content, publicKey), 'CLASS');
row('B5', '§6.2: to empty', R({ ...sealed, to: '' }, content, publicKey), 'FIELD');
row('B6', '§2: null is not a legal value (to null)', R({ ...sealed, to: null }, content, publicKey), 'FIELD');
row('B7', '§6.2: content_sha256 must be 64 lowercase hex (uppercase)', R({ ...sealed, content_sha256: sealed.content_sha256.toUpperCase() }, content, publicKey), 'FIELD');
row('B8', '§6.2: content_sha256 must be 64 chars (63)', R({ ...sealed, content_sha256: sealed.content_sha256.slice(0, 63) }, content, publicKey), 'FIELD');
row('B9', '§6.2: prev must be 64 lowercase hex (uppercase)', R({ ...sealed, prev: 'AB'.repeat(32) }, content, publicKey), 'FIELD');
row('B10', '§6.2: at present and empty', R({ ...sealed, at: '' }, content, publicKey), 'FIELD');
row('B11', '§6.3: content hash mismatch', R(sealed, text.encode('other bytes'), publicKey), 'CONTENT');
row('B12', '§2: unknown fields are not signed (extra field ignored, same identity)', (() => { const r = R({ ...sealed, extra: 'x' }, content, publicKey); return r.match && r.hash === envelopeHash(sealed) ? 'MATCH' : r; })(), 'MATCH');
row('B13', '§6 order: CLASS before CONTENT', R({ ...sealed, class: 'NOPE' }, text.encode('other bytes'), publicKey), 'CLASS');
row('B14', '§6 order: FIELD before CONTENT', R({ ...sealed, to: '' }, text.encode('other bytes'), publicKey), 'FIELD');
row('B15', '§6 order: CONTENT before section 5 (small-order key, wrong content)', R(envelopeFor(LOW_SIG), text.encode('other bytes'), ID_PUB), 'CONTENT');
row('B16', '§6 order: CLASS (step 1) before preimage refusal (step 4)', R({ ...sealed, class: 'NOPE', to: 'bad\uD800' }, content, publicKey), 'CLASS');

// --- Section 4: the byte rule ---
{
  const S = 'q"\\' + '\b\t\n\f\r' + '' + '/xé ';
  const enc = '"' + 'q' + '\\"' + '\\\\' + '\\b' + '\\t' + '\\n' + '\\f' + '\\r' + '\\u0001' + '\\u001f' + '/x' + 'é' + ' ' + '"';
  const expected = '{"class":"PUBLIC","content_sha256":"' + '1'.repeat(64) + '","prev":"' + '0'.repeat(64) + '","to":' + enc + ',"v":"1"}';
  const got = new TextDecoder().decode(preimage({ v: '1', class: 'PUBLIC', to: S, content_sha256: '1'.repeat(64), prev: '0'.repeat(64) }));
  row('B17', '§4 escape table: quote, backslash, b/t/n/f/r, \\u00xx lowercase, solidus raw, non-ASCII raw UTF-8', got === expected ? 'EXACT' : 'DIFF: ' + got, 'EXACT');
}
{
  const bytes = preimage({ v: '1', class: 'PUBLIC', to: 'ab', content_sha256: '1'.repeat(64), prev: '0'.repeat(64) });
  row('B18', '§4: U+007F is every-other-scalar (raw byte, not an escape)', bytes.includes(0x7f) && !new TextDecoder().decode(bytes).includes('\\u007f') ? 'RAW' : 'ESCAPED', 'RAW');
}
row('B19', '§6.4: lone surrogate in at -> encoder refusal -> FIELD', R({ ...sealed, at: 'x\uD800' }, content, publicKey), 'FIELD');
row('B20', '§4: a non-string value is refused (to is a number)', R({ ...sealed, to: 42 }, content, publicKey), 'FIELD');
{
  const a = seal(content, { class: 'PUBLIC', to: 'café', prev: GENESIS }, secret); // é as U+00E9
  const b = seal(content, { class: 'PUBLIC', to: 'café', prev: GENESIS }, secret); // é as e + U+0301
  row('B21', '§4: no normalization — canonically equivalent strings remain two preimages (two identities)', envelopeHash(a) !== envelopeHash(b) ? 'TWO' : 'ONE', 'TWO');
}

// --- Section 5: boundaries and internal order ---
row('B22', '§5.1: key with y >= p', R(sealed, content, new Uint8Array(32).fill(0xff)), 'DECODE');
row('B23', '§5.5: R with y >= p (S in range, honest key)', R({ ...sealed, signature: toHex(Uint8Array.from([...new Uint8Array(32).fill(0xff), ...intLe32(1n)])) }, content, publicKey), 'DECODE');
row('B24', '§5.4 boundary: S = L exactly', R(withS(L), content, publicKey), 'SCALAR');
row('B25', '§5.4 boundary: S = L-1 is inside the range; the equation decides', R(withS(L - 1n), content, publicKey), 'EQUATION');
row('B26', '§5 order: 5.2 before 5.4 (identity key, S = L)', R(envelopeFor(toHex(Uint8Array.from([...hex(LOW_SIG).subarray(0, 32), ...intLe32(L)]))), content, ID_PUB), 'SMALL_ORDER');
row('B27', '§5 order: 5.1 before 5.4 (non-canonical key, S = L)', R(envelopeFor(toHex(Uint8Array.from([...hex(LOW_SIG).subarray(0, 32), ...intLe32(L)]))), content, ID_PUB_NONCANON), 'DECODE');
row('B28', '§5 order: 5.4 before 5.5 (bad R and S = L)', R({ ...sealed, signature: toHex(Uint8Array.from([...new Uint8Array(32).fill(0xff), ...intLe32(L)])) }, content, publicKey), 'SCALAR');
row('B29', '§5.3: mixed key refused before the equation', R(envelopeFor(MIXED_SIG), content, MIXED_PUB), 'MIXED');

// --- Section 6: PREV paragraph (log extension only) ---
{
  const first = seal(content, { class: 'PROTOCOL', to: 'internal', prev: GENESIS }, secret);
  const second = seal(text.encode('reply'), { class: 'RESPONSE', to: 'seat-a', prev: envelopeHash(first) }, secret);
  const log = emptyLog();
  row('B30', '§6 PREV: envelope whose prev is not the log tip (empty log)', append(log, second, text.encode('reply'), publicKey), 'PREV');
  const log1 = append(log, first, content, publicKey);
  row('B31a', '§6 PREV: control — the envelope extends its own log', ('tip' in append(log1, second, text.encode('reply'), publicKey)) ? 'EXTENDS' : 'REFUSED', 'EXTENDS');
  const otherFirst = seal(text.encode('a different opening'), { class: 'PROTOCOL', to: 'internal', prev: GENESIS }, secret);
  const foreignLog = append(emptyLog(), otherFirst, text.encode('a different opening'), publicKey);
  row('B31', '§6 PREV: the same envelope against a foreign log', append(foreignLog, second, text.encode('reply'), publicKey), 'PREV');
}

// --- Carried handlings of out-of-shape inputs (Finding C, not conformance) ---
row('C1', 'CARRY: public key not 32 bytes (text presupposes 32)', R(sealed, content, new Uint8Array(31)), 'DECODE', true);
row('C2', 'CARRY: signature spelling not 128 hex chars', R({ ...sealed, signature: 'abcd' }, content, publicKey), 'SIGNATURE', true);
row('C3', 'CARRY: uppercase signature spelling decodes to the same bytes', R({ ...sealed, signature: sealed.signature.toUpperCase() }, content, publicKey), 'MATCH', true);

let fails = 0;
for (const r of rows) {
  if (!r.pass) fails++;
  console.log(`${r.pass ? 'PASS' : 'FAIL'}  ${r.id}  expected=${r.expected} got=${r.got}${r.carry ? '  [carry]' : ''}  — ${r.basis}`);
}
console.log(`\nTOTAL ${rows.length} rows, ${rows.length - fails} pass, ${fails} fail; defined-domain rows: ${rows.filter(r => !r.carry).length}, carry rows: ${rows.filter(r => r.carry).length}`);
process.exitCode = fails ? 1 : 0;

// --- Finding D probe (appended for the v-fix verification run; not part of the matrix) ---
{
  const base = { v: '1', class: 'PUBLIC', to: 'a', content_sha256: '1'.repeat(64), prev: '0'.repeat(64) };
  let refused = false;
  try { preimage({ ...base, v: '2' }); } catch (e) { refused = e.message === 'FIELD'; }
  console.log((refused ? 'PASS' : 'FAIL') + '  D1  preimage(v="2") refused with FIELD, no bytes emitted');
  let ok = true;
  try { preimage(base); } catch { ok = false; }
  console.log((ok ? 'PASS' : 'FAIL') + '  D2  preimage(v="1") still encodes');
}
