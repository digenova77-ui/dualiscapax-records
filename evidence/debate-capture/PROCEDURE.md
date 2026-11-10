# Debate capture

This is a writer procedure. It is not the audit criteria, not an export, and not intake.

The criteria stay the version-2 text, 7,589 bytes, SHA-256 `38e2a42a539d0c4cee46fb5f5ce181aacbfb0a145c31cbf5bcdaf121f6c45790`. This file does not amend them.

The Android and web apps do not freeze one chat as a parseable file. A later copy of the screen is a rendering. Memory is not a source. The way to have an export the criteria can parse is to freeze each turn when it is carried, then let a tool join those frozen files.

## What gets written

One file per content turn, named `turns/001.txt`, `turns/002.txt`, and so on. The name is the ordinal. The file is the label line, then the message bytes, and it must end in a newline:

```
Grok:
<message bytes, unchanged>
```

The label is `Grok:` or `ChatGPT:` and nothing else. No preamble. No editing, no summary, no merged turns. A line inside the message that is exactly `Grok:` or `ChatGPT:` stops the capture. The bytes are not escaped. That turn is not joined.

A missing ordinal is one line in `gaps.txt`:

```
[GAP] ordinal 4: <reason>
```

The reason says what was absent. It does not supply the missing text. Every ordinal from 1 through the last is either one turn file or one gap line, never both, never neither.

`SOURCE.txt` is one line, either `account-json` or `rendering`.

`COMPLETENESS.txt` is `COMPLETE` on one line, or `PARTIAL` on the first line and the reason on the second. A rendering cannot be `COMPLETE`. `COMPLETE` with a gap line is a finding and is not written.

## What the tool does

`node join.mjs` writes `export.txt` and `DIGEST.txt`.

`export.txt` is the turn files and gap lines in ordinal order, with no added blank lines. A turn is the bytes from a speaker label through the character before the next speaker label. A `[GAP]` line is lifted out before that split. It does not become part of a turn and it does not shift later ordinals.

`DIGEST.txt` is the SHA-256 of `export.txt` only. The digest is not written inside `export.txt`.

`node check.mjs` recomputes that digest and re-reads the structure. It exits non-zero on a mismatch, an undeclared hole, a label collision, a rendering marked `COMPLETE`, or `COMPLETE` together with a `[GAP]` line.

## What goes on the shelf

Commit `turns/`, `gaps.txt` if any, `SOURCE.txt`, `COMPLETENESS.txt`, `export.txt`, and `DIGEST.txt`. Repeat the digest in the commit message. Do not commit an account ZIP. Do not commit any other conversation. A paste into a chat is not this commit.

Intake remains a later act: another seat fetches that commit and recomputes the digest. This procedure does not start it, and it does not recreate the debate that was not frozen.
