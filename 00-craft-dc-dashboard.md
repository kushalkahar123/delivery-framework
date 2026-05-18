# craft-dc — Dashboard

> The entry doc for craft-dc. Read this before opening any phase doc.

craft-dc is DC's layered delivery framework for **P0 Calibrate, P1 Kickoff, and P2 Requirements**. It supersedes `craft-v2/core/03–05` for those three phases. P3+ still lives in `craft-v2/launch/`, `craft-v2/redesign/`, and `craft-v2/redesign-plus/` until a later migration.

---

## Scope

craft-dc covers the first three phases of every engagement:

| Phase | What it is |
|---|---|
| **P0 — Calibrate** | Pre-engagement triage. 1-page Calibrate Note. Proceed / pause decision. |
| **P1 — Kickoff** | Convene the team, lock decision-makers, set cadence, share the Calibrate Note. |
| **P2 — Requirements** | Confirmed Requirements doc with explicit scope, audience, success metric, exit-to-P3. |

It does **not** cover sales / handoff (upstream of P0) or P3+ delivery work (downstream of P2).

---

## The frame

Every inbound is qualified along three axes. All three are known by the end of intake routing — not at the end of P2.

```
                  Client Type (primary axis)
                  ─────────────────────────
                  System Thinker
                  Appreciates Beauty
                  Direction / Story
                  Technical + Insight

                  Problem Statement (secondary lens)
                  ─────────────────────────
                  Product Positioning
                  User Activation
                  Usability / Conversion

                  Track (chosen at intake)
                  ─────────────────────────
                  Launch
                  Redesign     (Redesign+ flagged inline)
```

- **Client type is the primary axis.** Each process doc is layered with all 4 client types fully fleshed out — not stubs, not escalations.
- **Problem statement is a secondary lens** applied within each client-type section.
- **Track is chosen at intake**, not at the end of P2. Launch and Redesign diverge sharply across P0–P2, which is why they live in separate docs.
- **Redesign+ is folded into Redesign** as inline callouts. It's flagged at P0, sometimes confirmed at P2, and only fully forks at P3.

---

## How to use

1. **Start at `00-intake-routing.md`.** This is the decision flow before P0 begins. It produces the triple `(track, problem statement, client-type hypothesis)`.
2. **Route to the right P0 doc**:
   - Launch → `launch/p0-calibrate.md`
   - Redesign (or Redesign+ candidate) → `redesign/p0-calibrate.md`
3. **Walk the phase**: read the Common Spine first, then jump to your client-type section, then read the relevant problem-statement lens, then run the exit gate.
4. **Exit each phase only when the gate is signed off.** Gates are track-specific.
5. **Pull templates from `templates/`** as needed. The folder is populated lazily — if a template you want doesn't exist, create it.

---

## Doc anatomy

All 6 process docs share the same 7-section shape:

| Section | What goes here |
|---|---|
| **Intent** | One-liner. Why this phase exists in this track. |
| **Common Spine** | The shared ~80%. Activities, questions, signals, artifacts that hold regardless of client type or problem statement. |
| **Per-Client-Type Variations** | Delta callouts vs the Spine, for all 4 types. |
| **Problem-Statement Lens** | How this phase shifts under Positioning / Activation / Usability-Conversion. |
| **Deliverables** | Every artifact produced — mapped to **format** (Notion / Figma / FigJam / PDF / Zoho Mail / Zoho Meeting / DB field), **audience** (internal vs client-facing), and **confirmation form** (sign-off mechanism). Includes per-client-type and per-lens artifacts. |
| **Exit Gate** | Track-specific sign-off checklist against the Deliverables table. Includes problem-statement re-confirmation. |
| **Pitfalls** | Common failure modes specific to this phase × this track. |

If you're writing or editing a phase doc, preserve this shape. Every exit-gate item must trace to a row in the Deliverables table; every row must specify format + audience + confirmation.

### Format vocabulary

| Format | When to use |
|---|---|
| **Notion page / table** | Default for written artifacts: Calibrate Notes, Stakeholder Maps, "Don't break" inventories, Requirements Docs, cadence tables, current-state inventories |
| **Notion sub-page on Projects DB row** | Internal-only working artifacts (scratch notes, Review Worksheets) |
| **Projects DB field** | Discrete state: track, problem statement, client type, Redesign+ flag, P0 decision |
| **Figma frame / file** | Visual artifacts: personas, moodboards, IA diagrams, visual catalogs, side-by-side current/target |
| **FigJam** | Collaborative journey-mapping or funnel-mapping (use sparingly; default to Notion tables) |
| **PDF** | Fixed-format client-facing pre-reads attached to email |
| **Zoho Mail** | All written client comms (Pre-Read attachment, Recap email, doc-share, sign-off ask) |
| **Zoho Meeting (recorded)** | All sync touchpoints; recording filed in Notion project space |
| **Zoho Cliq** | Async team chat; lightweight Founder consultation |
| **Loom** | Async walkthroughs (rare in P0–P2; more common from P3 onward) |

---

## Links

**Ancillaries**
- [`00-intake-routing.md`](./00-intake-routing.md) — read first, every inbound

**Launch track**
- [`launch/p0-calibrate.md`](./launch/p0-calibrate.md)
- [`launch/p1-kickoff.md`](./launch/p1-kickoff.md)
- [`launch/p2-requirements.md`](./launch/p2-requirements.md)

**Redesign track** (includes Redesign+ callouts)
- [`redesign/p0-calibrate.md`](./redesign/p0-calibrate.md)
- [`redesign/p1-kickoff.md`](./redesign/p1-kickoff.md)
- [`redesign/p2-requirements.md`](./redesign/p2-requirements.md)

**Templates**
- [`templates/`](./templates/) — Calibrate Note, Kickoff agenda, Requirements doc, per-client-type variants (populated as needed)

---

## Relationship to craft-v2

craft-dc is **Phase 1** of the craft-v2 replacement.

| craft-v2 file | Status under craft-dc |
|---|---|
| `craft-v2/core/00-classification.md` | **Live.** Linked from `00-intake-routing.md` for the client-type signal cheatsheet. |
| `craft-v2/core/00-core-dashboard.md` | Live. Operational scaffolding still applies. |
| `craft-v2/core/01-system-thinker-pattern.md` | Live. Reference doc for the System Thinker layer. |
| `craft-v2/core/02-craft-overview.md` | Live. Continuity of framework language. |
| `craft-v2/core/03-p0-calibrate.md` | **Deprecated.** Banner points to `craft-dc/launch/p0-calibrate.md` and `craft-dc/redesign/p0-calibrate.md`. |
| `craft-v2/core/04-p1-kickoff.md` | **Deprecated.** Banner points to the craft-dc P1 docs. |
| `craft-v2/core/05-p2-requirements.md` | **Deprecated.** Banner points to the craft-dc P2 docs. |
| `craft-v2/launch/` · `redesign/` · `redesign-plus/` | Live for P3+ until Phase 2 migration. |
| `craft-v2/shared/` | Live. Escalation, templates library, decisions log still authoritative. |

**Phase 2 (future, out of scope here)** — migrate P3+ into craft-dc with the same layering shape; deprecate `craft-v2/` fully.

---

## What's different from craft-v2/core for P0–P2

| Dimension | craft-v2/core | craft-dc |
|---|---|---|
| Client types covered | System Thinker only (others escalate) | All 4, fully populated |
| Track decision | At P2 exit gate | At intake (before P0) |
| Problem statement | Not modeled | Known at intake, used as a lens in every phase |
| Launch vs Redesign | Same docs, divergence at P3 | Separate docs from P0 |
| Redesign+ | Separate track | Inline callouts inside Redesign docs at P0–P2 |
| Doc anatomy | Operational (steps, templates, exit gate) | Layered (Intent → Spine → Variations → Lens → Gate → Pitfalls) |

The intent: a Manager can route any inbound (4 × 3 × 2 = 24 combinations) through the first 3 phases without escalating to the Founder.
