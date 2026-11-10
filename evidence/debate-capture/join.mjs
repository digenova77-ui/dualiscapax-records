import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.argv[2] ?? process.cwd();
const LABELS = new Set(["Grok:", "ChatGPT:"]);
const gapLine = /^\[GAP\] ordinal ([1-9][0-9]*): (.+)$/;

function fail(message) {
  console.error(message);
  process.exit(1);
}

const source = (await readFile(join(root, "SOURCE.txt"), "utf8")).replace(/\n$/, "");
if (source !== "account-json" && source !== "rendering") {
  fail("SOURCE.txt must be account-json or rendering");
}

const completenessRaw = await readFile(join(root, "COMPLETENESS.txt"), "utf8");
const completenessLines = completenessRaw.replace(/\n$/, "").split("\n");
const completeness = completenessLines[0];
if (completeness === "COMPLETE" && completenessLines.length !== 1) {
  fail("COMPLETE takes no second line");
}
if (completeness === "PARTIAL" && (completenessLines.length !== 2 || completenessLines[1] === "")) {
  fail("PARTIAL needs one reason line");
}
if (completeness !== "COMPLETE" && completeness !== "PARTIAL") {
  fail("COMPLETENESS.txt must start with COMPLETE or PARTIAL");
}
if (source === "rendering" && completeness === "COMPLETE") {
  fail("a rendering cannot be COMPLETE");
}

let gapText = "";
try {
  gapText = await readFile(join(root, "gaps.txt"), "utf8");
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
const gaps = new Map();
if (gapText !== "") {
  for (const line of gapText.replace(/\n$/, "").split("\n")) {
    const match = gapLine.exec(line);
    if (!match) fail(`bad gap line: ${line}`);
    const ordinal = Number(match[1]);
    if (gaps.has(ordinal)) fail(`duplicate gap ${ordinal}`);
    gaps.set(ordinal, line);
  }
}
if (completeness === "COMPLETE" && gaps.size > 0) {
  fail("COMPLETE cannot contain a GAP");
}

const names = (await readdir(join(root, "turns"))).filter((name) => /^[0-9]{3}\.txt$/.test(name));
const turns = new Map();
for (const name of names) {
  const ordinal = Number(name.slice(0, 3));
  if (ordinal === 0) fail(`bad ordinal ${name}`);
  const bytes = await readFile(join(root, "turns", name));
  if (bytes.length === 0 || bytes[bytes.length - 1] !== 0x0a) fail(`${name} must end in a newline`);
  const text = bytes.toString("utf8");
  const lines = text.replace(/\n$/, "").split("\n");
  if (!LABELS.has(lines[0])) fail(`${name} label must be Grok: or ChatGPT:`);
  if (lines.slice(1).some((line) => LABELS.has(line))) {
    fail(`${name} contains a speaker label inside the message; not joined`);
  }
  if (gaps.has(ordinal)) fail(`ordinal ${ordinal} is both a turn and a gap`);
  turns.set(ordinal, bytes);
}
if (turns.size === 0 && gaps.size === 0) fail("no turns and no gaps");

const last = Math.max(0, ...turns.keys(), ...gaps.keys());
const parts = [];
for (let ordinal = 1; ordinal <= last; ordinal += 1) {
  if (turns.has(ordinal)) parts.push(turns.get(ordinal));
  else if (gaps.has(ordinal)) parts.push(Buffer.from(`${gaps.get(ordinal)}\n`));
  else fail(`ordinal ${ordinal} is neither a turn nor a GAP`);
}

const exportBytes = Buffer.concat(parts);
await writeFile(join(root, "export.txt"), exportBytes);
const digest = createHash("sha256").update(exportBytes).digest("hex");
await writeFile(join(root, "DIGEST.txt"), `${digest}\n`);
console.log(`${exportBytes.length} ${digest}`);
