// Corrigendum 1 — targeted probe against the corrigendum-reconciled message.ts.
import { ed25519 } from '@noble/curves/ed25519.js';
import { seal, open } from './message.ts';
const secret = ed25519.utils.randomSecretKey();
const publicKey = ed25519.getPublicKey(secret);
const content = new TextEncoder().encode('corrigendum 1 probe content');
const env = seal(content, { class: 'EVIDENCE', to: 'corrigendum-1', prev: '0'.repeat(64), at: '2026-11-09T20:40:00-05:00' }, secret);
const show = (label, r) => console.log(label + ': ' + JSON.stringify(r));
console.log('signature (as written, lowercase): ' + env.signature);
show('P1 lowercase honest signature', open(env, content, publicKey));
show('P2 uppercase twin', open({ ...env, signature: env.signature.toUpperCase() }, content, publicKey));
show('P3 abcd (shape failure, word unchanged)', open({ ...env, signature: 'abcd' }, content, publicKey));
const tampered = new TextEncoder().encode('tampered content');
show('P4 uppercase + wrong content (step 2 FIELD precedes step 3 CONTENT)', open({ ...env, signature: env.signature.toUpperCase() }, tampered, publicKey));
show('P5 lowercase + wrong content (control)', open(env, tampered, publicKey));
