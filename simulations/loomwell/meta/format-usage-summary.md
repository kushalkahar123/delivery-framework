# Format-usage summary — Loomwell engagement

> Format: Notion sub-page on Projects DB row (extracted from `meta/timeline.md` tail).
> Audience: Internal — framework audit. Surfaced in the visualizer Meta tray.
> Purpose: Confirm the framework's *format vocabulary* held end-to-end across one engagement.

---

## Why this exists

A framework's "format vocabulary" — the implicit answer to *"where does each artifact live?"* — is the part of a process most prone to silent drift. Decision logs slip into Slack. Sign-offs creep into email when they should be in-doc. Long-form thinking gets crammed into a chat thread.

This audit checks that **every** artifact this engagement produced had a natural home in the format vocabulary the framework specifies. The answer for Loomwell P0–P2:

> **The framework's format vocabulary held. No artifact was forced into the wrong tool.**

---

## Per-format use

| Format | # uses in this engagement | Representative examples |
|---|---|---|
| **Notion** (page / table / DB row) | 14 | Intake row, Calibrate Note, Stakeholder Map, Don't Break inventory, Requirements Doc, sign-off blocks |
| **Notion sub-page** (internal scratch) | 3 | Solo product walk, Review Worksheet, Strategic Bets |
| **Zoho Meeting** (recorded) | 5 | Sales call, Calibrate, Kickoff, Working sync, Clarification, Positioning checkpoint |
| **Zoho Mail** | 8 threads | Inbound, Pre-Read, Recap, Don't Break sign-off, Requirements sign-off, P2 close |
| **Zoho Cliq** | 4 threads | Prep, Founder consult, Internal noise, P3 handoff |
| **PDF** | 1 | Kickoff Pre-Read attachment |
| **Figma file** | 2 | Loomwell — current state v1, Marcus's pillar file (client-side) |
| **Projects DB field** | ~7 | Track, problem statement, client type, Redesign+ flag, phase, P0/P1/P2 closed dates |

---

## Friction points logged

Three minor format frictions surfaced. None escalated.

1. **Sign-off mechanism for the "Don't break" inventory** — Notion sign-off block vs. email reply. Resolved by accepting either; Priya used Notion, Marcus used email. **Framework note:** sign-off mechanism should be specified as "Notion comment-trail *or* email reply" not "Notion comment-trail."

2. **The pillar file Marcus shared on Thu 30 Apr** — Figma file, but referenced inside the kickoff Zoho Meeting and never lived as a DC artifact. **Framework note:** client-authored input artifacts should be link-referenced from Recap, not folded into DC's Notion.

3. **The retro doc** — Notion sub-page (correct format), but the *audience* boundary between internal-DC-only and shareable-with-client wasn't named at the start. **Framework note:** retro audience should be specified at template level (default: internal-only).

---

## Where format chose the medium

A handful of decisions felt natural specifically because the format chose the medium, not the other way around:

- **The Calibrate Note in Notion** (not PDF) — because future P1/P2 docs were going to cross-link into it, and PDFs don't.
- **The Don't Break inventory in Notion** — because individual rows needed independent sign-off, not the whole list.
- **The Pre-Read as PDF** — because the audience was the client, and a PDF reads like a document; Notion reads like a workspace.
- **The Recap email** — because async, broadcast, dated, and acknowledgement-able by 👍.

Each of these is a small choice. The framework specifying them removes one decision per artifact across an engagement.

---

## What this audit does NOT cover

- Whether *the artifacts themselves* are correct (separate audit — that's the Requirements Doc sign-off + the retro).
- Cross-engagement consistency (n=1; revisit at n=3).
- Internal-DC tooling beyond what surfaces at the client boundary.
