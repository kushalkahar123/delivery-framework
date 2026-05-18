# Loomwell — craft-dc worked example

> A simulated end-to-end engagement run through `craft-dc` P0 → P1 → P2.
> Purpose: validate the framework on the **(Redesign · Positioning · Direction/Story)** slice and produce a teaching artifact that a Manager can read top-to-bottom to understand how the layered docs come together in practice.

---

## The engagement at a glance

**Client:** Loomwell — a SaaS for independent creative professionals to package their work as story-driven case studies. Live since 2022. ~800 active users. Founder-funded; no analytics tooling beyond Stripe + a Tally waitlist.

**The triple (set at intake):**

```
Track:              Redesign
Problem statement:  Product Positioning
Client type:        Direction / Story
Redesign+ flag:     Raised at sales? — no. Ruled out at P0 (no analytics, no surgical metric).
Beauty overlay:     No (Priya talks story, not aesthetics — though she'll bring references)
```

**Why this slice is interesting:** it sits cleanly inside `craft-dc` but stresses the parts of the framework that craft-v2/core couldn't handle — Direction/Story as a full client type rather than an escalation, Positioning as a problem-statement lens, and Redesign track separation from intake.

---

## Cast

### Client side — Loomwell

| Person | Role | Voice |
|---|---|---|
| **Priya Raman** | Founder & CEO, ex-creative-director (10 yrs at agencies, last at Wieden+Kennedy Delhi). Solo founder. | Narrative-first. Talks in stories and references. Sends 2-paragraph emails. Calls her users "the kind of designer who used to keep a leather journal." |
| **Marcus Chen** | Brand consultant Priya hired Q1 2026 to "fix the positioning". Not full-time; on retainer. **Positioning decider.** | Crisp. Frameworks-driven. Ex-Koto. Will push back on anything that doesn't trace to a positioning pillar. |
| **Devon Reyes** | Fractional engineer (15 hrs/wk). Built the v1 with Priya. **Eng POC.** | Pragmatic. Will tell you what's expensive before you ask. |

### DC side

| Person | Role |
|---|---|
| **Kushal Kahar** | Design Manager (DM). Owns this engagement end-to-end through P2. |
| **Gerwin Machado** | Senior Designer (SD). Joins from P1. |
| **Devina Coutinho** | Founder. Consulted on Redesign+ ruling at P0. Otherwise hands-off. |

---

## Timeline

Today is **2026-05-18** (Monday). The engagement is mid-handoff from P2 to P3 — Requirements Doc was signed off Friday, P3 kickoff invite is on calendars for next week.

| Date | Phase | Event | Where it lives |
|---|---|---|---|
| 2026-04-18 (Sat) | — | Priya's inbound email | `00-sales-handoff/inbound-email-thread.md` |
| 2026-04-20 (Mon) | — | Sales call w/ Priya | `00-sales-handoff/sales-handoff-doc.md` |
| 2026-04-22 (Wed) | Intake | Kushal routes the engagement | `00-intake/intake-summary.md` |
| 2026-04-23 (Thu) | P0 prep | Internal Cliq prep + solo product walk | `p0-calibrate/prep-cliq-thread.md`, `p0-calibrate/solo-product-walk-notes.md` |
| 2026-04-24 (Fri) | P0 | Calibrate call w/ Priya | `p0-calibrate/calibrate-call-transcript.md` |
| 2026-04-27 (Mon) | P0 | Founder consult on Redesign+ ruling | `p0-calibrate/founder-consultation.md` |
| 2026-04-27 (Mon) | P0 | Calibrate Note finalized | `p0-calibrate/calibrate-note.md` |
| 2026-04-29 (Wed) | P1 prep | Pre-Read sent | `p1-kickoff/kickoff-prereading-email.md` |
| 2026-05-01 (Fri) | P1 | Kickoff call (90 min) | `p1-kickoff/kickoff-call-transcript.md` |
| 2026-05-01 (Fri) | P1 | Recap email (same-day) | `p1-kickoff/recap-email.md` |
| 2026-05-05 (Tue) | P1 | "Don't break" full sign-off (within 48h business) | `p1-kickoff/dont-break-signoff-email.md` |
| 2026-05-05 → 12 | P2 | Current-state inventory + Review Worksheet | `p2-requirements/current-state-inventory.md`, `p2-requirements/review-worksheet.md` |
| 2026-05-12 (Tue) | P2 | Clarification call + inventory share-back | `p2-requirements/clarification-call-transcript.md` |
| 2026-05-13 (Wed) | P2 | Requirements Doc v1 shared | `p2-requirements/requirements-doc.md` |
| 2026-05-15 (Fri) | P2 | Sign-offs collected (Priya, Marcus, Devon) | `p2-requirements/signoff-emails.md` |
| 2026-05-22 (Fri) | P3 | P3 kickoff (out of scope here) | — |

Full event ledger with formats: [`meta/timeline.md`](./meta/timeline.md).

---

## How to read this

If you've never walked a craft-dc engagement before, read in this order:

1. **`00-sales-handoff/`** — what came over the wall from Sales.
2. **`00-intake/intake-summary.md`** — Kushal's 5-minute routing decision.
3. **`p0-calibrate/`** — read the call transcript first, then the Calibrate Note. The note will make more sense once you've heard the call.
4. **`p1-kickoff/`** — Pre-Read → Kickoff transcript → Recap → 48h Don't Break sign-off. Note the cadence of comms.
5. **`p2-requirements/`** — Current-state inventory first (it's the work that made the Requirements Doc possible), then the Requirements Doc itself, then sign-offs.
6. **`meta/retro-notes.md`** — what we'd do differently. Useful if you're about to run a similar engagement.

If you're auditing the **framework** rather than the project, jump to each Exit Gate and check the deliverables row-by-row against what's in the folders.

---

## What this simulation does NOT cover

- **P3+ delivery** — out of scope; craft-dc Phase 2 will absorb those.
- **Pricing, contracts, sales process** — picked up upstream of `00-sales-handoff/`.
- **Beauty overlay artifacts** — Priya is Direction/Story without a visual overlay; she defers visual taste to Marcus.
- **Redesign+ artifacts** — Redesign+ flag ruled out at P0 (see Calibrate Note §7). The simulation walks the standard Redesign track.
