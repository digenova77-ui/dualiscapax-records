# Decision record — DCCP Section 5 text (Nov 9, 2026)

**EVIDENCE STATUS:** Founder ruling + second-seat validation,
recorded by Idris (Muse), Nov 9, 2026, 19:24–19:27 EST.
**SOURCE DIGESTS:** `DCCP-SECTION-5.md` 3,757 B, SHA-256
`070eb79098257f701ba9e6628618cde97e4a4fc5bfe89120a1dbed8e47f172a4`
(shelf commit
`5e8cb534b60798cd57d6e5d61398ddcc148ebdbe`, parent
`227370b98b…`) · exhibits `cae136ae…` and `22d426c8…`, both
reproduced at two seats before this record.
**SCOPE:** The Section 5 text of the DCCP draft protocol
only. Not ratification of DCCP-PROTOCOL. Not an
implementation. Not the coin — the Founder named the
exclusion himself ("not the coin, the definition").
**AUTHORIZATION BOUNDARY:** This record executes the
Founder's ruling below. It changes no code.

## The Founder's ruling (his words, 19:24–19:26 EST)

"Push anything that's able to be pushed WITH MERIT. If it's
the decision that stood and can be validated and verified,
it's the decision." — clarified: "actual merit" — and the
character of what qualifies: "honest. reputable. precise."
MERIT here is the definition — standing earned by witnessed
work — not the coin.

## Validation (Idris's seat, from the draft's own text)

The draft's procedure (5.1–5.5) was implemented from its
text and run against every exhibit vector, @noble/curves
2.4.0. Every claimed result reproduces:

| Input | Draft claims | Run |
|---|---|---|
| Honest signature | passes | PASS |
| Honest, last byte changed | `EQUATION` | `EQUATION` |
| `S + L` | `SCALAR` | `SCALAR` |
| LOW-ORDER identity key | `SMALL_ORDER` | `SMALL_ORDER` |
| Non-canonical identity key | `DECODE` (5.1) | `DECODE` |
| Mixed key `da99e28b…` | `MIXED` | `MIXED` |

Scope probe (the draft's stated openness, made observable):
a constructed signature whose `R` carries a torsion piece
passes the draft — the 5.2/5.3 tests apply to the public key
only, exactly as the draft declares on its face. Probe
signature: `543ac908ca97124ab06caab11552257e53aba22a4e66b769
175823a19a0452e0dece8a2169899a67b9735478afb61e3a338217641
17729e56bb2a33dd55dd105` (message `dccp-mixed-r`, key =
base point).

## The decision

Under the Founder's ruling, `DCCP-SECTION-5.md`
(`070eb790…`) **is the decided Section 5 text** for the DCCP
draft protocol: when the protocol text is next assembled,
Section 5 is this text, and section 6 step 5 takes its
result words (`DECODE` · `SMALL_ORDER` · `MIXED` · `SCALAR` ·
`EQUATION`) — `SIGNATURE` is not one of them.

## What this decision is not

- Not ratification of DCCP-PROTOCOL (the draft family stands
  unratified; this decides a section's text inside it).
- Not an implementation: `message.ts` still returns
  `SIGNATURE` for these failures and does not conform.
  Reconciling it is a separate step, not authorized here;
  the construction pause stands for code.
- Not a library profile: the text names procedures, not a
  vendor bundle — that was the exhibit-proven defect it
  replaces.
- Not transferable: the standing of this decision does not
  promote any other text, proposal, or verdict. Each stands
  on its own examination, per the same rule that admitted
  this one.
