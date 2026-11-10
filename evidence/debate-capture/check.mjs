import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.argv[2] ?? process.cwd();
const LABELS = new Set(["Grok:", "ChatGPT:"]);
const gapLine = /^\[GAP\] ordinal ([1-9][0-9]*): (.+)$/;

function fail(message) {
  console.error(message);
  process.exit(1);
}

const source = (await readFile(join(root, "SOURCE.txt"), "utf8")).replace(/\n$/, "");
if (source !== "account-json" && source !== "rendering") fail("bad SOURCE");

const completenessLines = (await readFile(join(root, "COMPLETENESS.txt"), "utf8"))
  .replace(/\n$/, "")
  .split("\n");
const completeness = completenessLines[0];
if (completeness !== "COMPLETE" && completeness !== "PARTIAL") fail("bad COMPLETENESS");
if (completeness === "COMPLETE" && completenessLines.length !== 1) fail("COMPLETE takes no second line");
if (completeness === "PARTIAL" && (completenessLines.length !== 2 || completenessLines[1] === "")) {
  fail("PARTIAL needs one reason line");
}
if (source === "rendering" && completeness === "COMPLETE") fail("a rendering cannot be COMPLETE");

const exportBytes = await readFile(join(root, "export.txt"));
const declared = (await readFile(join(root, "DIGEST.txt"), "utf8")).replace(/\n$/, "");
const recomputed = createHash("sha256").update(exportBytes).digest("hex");
if (declared !== recomputed) fail(`digest mismatch ${declared} ${recomputed}`);

const text = exportBytes.toString("utf8");
const kept = [];
const gaps = [];
for (const line of text.split("\n")) {
  const match = gapLine.exec(line);
  if (match) gaps.push(Number(match[1]));
  else kept.push(line);
}
if (kept.at(-1) === "") kept.pop();
if (completeness === "COMPLETE" && gaps.length > 0) fail("COMPLETE contains a GAP");

const body = kept.join("\n") + (kept.length ? "\n" : "");
if (!LABELS.has(body.split("\n")[0])) fail("export does not start with a speaker label");
const turns = [];
let current = null;
for (const line of body.replace(/\n$/, "").split("\n")) {
  if (LABELS.has(line)) {
    if (current) turns.push(current);
    current = [line];
  } else if (!current) {
    fail("text before the first speaker label");
  } else {
    current.push(line);
  }
}
if (current) turns.push(current);

const speakers = turns.map((turn) => turn[0].slice(0, -1));
console.log(
  JSON.stringify({
    bytes: exportBytes.length,
    digest: recomputed,
    source,
    completeness,
    contentTurns: turns.length,
    speakers,
    gaps,
  }),
);
