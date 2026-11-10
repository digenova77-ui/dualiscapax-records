// Corrigendum 2 — consolidated conformance verification, run after the
// Founder's act against the shelf implementation of record (09cb5b1d…).
// Part A recomputes the draft's published worked pair from its inputs.
// Part B runs the full 2x2 with a fresh keypair (independent instance).
import { ed25519 } from '@noble/curves/ed25519.js';
import { preimage, envelopeHash, checkSignature, seal, open } from './message.ts';
const CS = '2cf4e516f8993de759d75c3ab20faeb3dd4388a5b9904009e62dc24f45736844';
const base = { v: '1', class: 'EVIDENCE', content_sha256: CS, prev: '0'.repeat(64) };
const pub = Uint8Array.from(Buffer.from('b32ba44f72d63cbaf95309b024e3ae0d7eecfeea65267904b4a46f80910387f2', 'hex'));
const sig = Uint8Array.from(Buffer.from('c5353063cc64603279ef91aa62ab01995a6db140fa0ba968f06565b66b4724e1dfbd18d282d64ace73c0dba08167c5d5aad5ffb6bdd0c5db2d5c41d146d7130c', 'hex'));
const fC = { ...base, to: 'café' }, fD = { ...base, to: 'café' };
console.log('A1 composed identity   :', envelopeHash(fC), envelopeHash(fC) === '8c3f6af75d8e6c12e90f50ccf50473401391f8fe067ad0bc9e02813063f2224b' ? 'OK' : 'MISMATCH');
console.log('A2 decomposed identity :', envelopeHash(fD), envelopeHash(fD) === 'e0b6264b1de7dd76fac53499fa7a20dd489a93c81c93a7b3fec579e9665d6cc1' ? 'OK' : 'MISMATCH');
console.log('A3 sig over composed   :', checkSignature(preimage(fC), sig, pub) === null ? 'MATCH OK' : 'FAIL');
console.log('A4 sig over decomposed :', checkSignature(preimage(fD), sig, pub), '(expect EQUATION)');
const secret = ed25519.utils.randomSecretKey();
const publicKey = ed25519.getPublicKey(secret);
const content = new TextEncoder().encode('corrigendum 2 verification content');
const envD = seal(content, { class: 'EVIDENCE', prev: '0'.repeat(64), to: 'café' }, secret);
const envC = seal(content, { class: 'EVIDENCE', prev: '0'.repeat(64), to: 'café' }, secret);
console.log('B1 decomposed x decomposed:', open(envD, content, publicKey).match === true ? 'MATCH OK' : 'FAIL');
console.log('B2 decomposed x composed  :', JSON.stringify(open({ ...envD, to: 'café' }, content, publicKey)), '(expect EQUATION)');
console.log('B3 composed x composed    :', open(envC, content, publicKey).match === true ? 'MATCH OK' : 'FAIL');
console.log('B4 composed x decomposed  :', JSON.stringify(open({ ...envC, to: 'café' }, content, publicKey)), '(expect EQUATION)');
