# Redesign — P2 Requirements

> Document **current state + target state + delta**, with an explicit scope freeze. By the end of P2 the engagement knows exactly what's changing, what's not, what success looks like measurably, and whether the Redesign+ track is locked.

---

## Quick reference

| | |
|---|---|
| **Phase** | P2 — Requirements (Redesign) |
| **Duration** | 5–7 days (longer than Launch P2 — current-state inventory is real work) |
| **You own this with** | Senior Designer (consulted), eng POC (consulted), data owner (consulted, mandatory if Redesign+) |
| **Client touchpoint** | One ~45-min clarification call + async review of the Requirements Doc |
| **Inputs** | Calibrate Note, Stakeholder Map, "Don't break" inventory (signed), Cadence, Redesign+ track decision, live product access, analytics access if Redesign+ |
| **Output** | Requirements Doc (current/target/delta), signed by client; Redesign+ track **confirmed** (or ruled out, final); P3 start date |
| **Goes before** | P3 — IA Audit First-Win (standard Redesign) or **Metric Diagnosis First-Win** (Redesign+) |

---

## Intent

For Redesign, Requirements is fundamentally a **delta exercise**. There is a current state, there is a target state, and the engagement is the difference between them. The doc must be unambiguous on all three.

Two artifacts that don't exist in Launch P2:

1. **Current-state inventory** — what the product is *now*, documented enough that "what changed" is traceable.
2. **Metric baselines** — for Redesign+ (and often for standard Redesign too), what the numbers are *today*.

P2 is also the **final confirmation** of the Redesign+ track. P0 raised the flag, P1 made a team-level call, P2 locks it. If P2 surfaces evidence that contradicts the P1 decision, re-route.

---

## Common Spine

### Day 1 — Current-state inventory

The artifact that doesn't exist in Launch. ~1 day of focused work.

Walk the **live product systematically** and document:

| Section | What goes here |
|---|---|
| **Flows** | List every primary user flow. For each: entry points, steps, exit points, branches. |
| **Screens** | Inventory of distinct screen types. Count, not catalog. |
| **Components** | Inventory of the existing visual system. Buttons, inputs, cards, navigation patterns. (For Beauty / surface debt work: this is the core artifact.) |
| **Data model surfaces** | Where the product's data structure is visible to users (lists, detail views, filters, search). |
| **Permissions / roles** | What different user types see / can do. |
| **Integrations** | Third-party touchpoints visible to users. |
| **Instrumentation** | Existing analytics events, what they measure, where the gaps are. |

This is **not a full IA audit** — that's the P3 deliverable for standard Redesign. P2 is a structured inventory, ~70% complete is fine. Goal: traceable starting point for the delta.

For Redesign+: the current-state inventory must include **the specific funnel / flow under diagnosis** in detail — every step, every drop-off point, every instrumentation event.

### Day 1–2 — Review Worksheet + materials audit

Same shape as Launch P2, but tuned for Redesign:

| Section | What goes here |
|---|---|
| What's clear | What the brief, Calibrate Note, and "don't break" inventory tell us unambiguously |
| What's ambiguous | Especially: target-state ambiguity. Clients are often clearer on what to change than what to change *to*. |
| What's missing | Critical missing material — analytics screenshots, user feedback, support data |
| Contradictions | Between Calibrate observations and what the client claims |
| Assumptions we're making | About user behavior, about why current state is current state |
| Questions for clarification call | ≤ 8 |

### Day 2–3 — Target-state articulation

This is the work that doesn't exist in Launch P2 in the same form. The target state is what we're moving the product *to*.

- **Audience target** — has the audience shifted? (Redesign + Positioning often involves an audience pivot.) If yes, what's the new audience sentence?
- **Functional target** — for each in-scope flow, what's the redesigned flow look like at a 1-paragraph description level? (Not screens yet — that's P3.)
- **Visual target** — for Beauty / surface work: what direction are we moving the visual system toward? Reference brands, density philosophy, motion philosophy.
- **Narrative target** — for Direction work: what's the new voice / story?
- **Metric target** — what numbers are we moving, by how much, in what window? (Required for Redesign+; recommended for standard Redesign.)

### Day 3 — Clarification call (45 min)

Sync, recorded. Run through Worksheet questions. Crucially: **share the current-state inventory back** with the client. Surfaces disagreements early ("we don't actually use that flow", or "wait, you missed this flow").

If Redesign+: include a **data review segment** on this call. Walk through the funnel + baseline numbers + drop-off points. The data owner must attend.

### Day 3–4 — Gap analysis (current → target → delta)

For every in-scope flow / surface, document the delta in a structured table:

| Flow / Surface | Current state (1 line) | Target state (1 line) | Delta (what changes) | "Don't break" reference |
|---|---|---|---|---|

The "Don't break" reference column ensures every delta is checked against the inventory from P1. If a delta would break something protected, the conflict surfaces here.

### Day 4 — Scope freeze (with delta)

The Redesign scope freeze is **three-way**:

| In scope (changing) | Out of scope (not touching) | Protected ("don't break") |
|---|---|---|
| Flows / surfaces / behaviors changing | Flows / surfaces explicitly out | Flows / surfaces in scope but with regression constraints |

The third column is what makes Redesign scope different from Launch. A flow can be "in scope to change" while certain aspects of it are "protected from regression". P2 makes that explicit.

### Day 4 — Success metric (often baseline-backed for Redesign)

Same shape as Launch P2, but with baselines from real data:

| Field | Value |
|---|---|
| Primary metric | What we'll watch |
| Time window | When the metric must show up |
| **Baseline (now)** | Today's number from analytics |
| Target | Where we want it to land |
| Counter-metric | What we shouldn't break |
| Measurement plan | How we'll know — instrumentation, dashboards, review cadence |

For **Redesign+**: baseline + target + measurement plan are **first-class deliverables**, not afterthoughts. They become the spine of the engagement.

For **standard Redesign**: baselines may be available or not. If available, use them. If not, document why and treat success qualitatively (with the trade-offs called out).

### Day 4 — Feasibility check with engineering

Sync with eng POC. Walk:

- Scope freeze
- Delta table
- "Don't break" inventory
- Instrumentation needs (especially for Redesign+)
- Deploy strategy (incremental? feature-flagged? big-bang?)

Eng must surface any infeasibility, deploy-collision risks, or "don't break" items they think are at risk.

### Day 4–5 — Redesign+ track final lock

Walk the 4 criteria one final time:

- [ ] Specific broken metric, named, with baseline number from analytics
- [ ] Analytics access **active and used in P2** (not just promised)
- [ ] Scope is surgical (not full overhaul)
- [ ] Drop-off / behavioral hypothesis exists, grounded in data

If 4/4 → **Redesign+ confirmed for P3.** P3 becomes Metric Diagnosis, not IA Audit. Note in Requirements Doc Section 10.

If <4 → **Redesign+ ruled out, final.** Standard Redesign track. Note in Requirements Doc Section 10.

If the P2 evidence flips the P1 decision, that's a finding — surface in the doc and the recap. Better caught now than after P3 has started on the wrong track.

### Day 5–7 — Requirements Doc consolidation + sign-off

The single deliverable. Structure:

```
Requirements Doc — [Project] (v1, for client review)
Date · DM · SD · Track: Redesign / Redesign+ · Problem statement · Client type

1. The product, in our words (current state)
   2–3 sentences. What it is today.

2. Current-state inventory (summary)
   Flows · Screens · Components · Permissions · Integrations · Instrumentation
   (Full inventory linked as appendix.)

3. The audience
   Current audience · Target audience (if shifted) · personas if changing

4. Success metric
   Primary · time window · baseline · target · counter-metric · measurement plan
   (For Redesign+: explicit "this is the metric we're moving" callout.)

5. Scope freeze (three-way)
   In (changing) · Out (not touching) · Protected ("don't break" — link to inventory)

6. Delta table
   Flow / Surface · Current · Target · Delta · "Don't break" reference

7. Requirements by flow
   For each in-scope flow:
     7.1 Flow name + 1-sentence purpose
     7.2 Current-state description
     7.3 Target-state description
     7.4 Functional requirements (numbered)
     7.5 Edge-case requirements (numbered)
     7.6 Regression constraints (what cannot change inside this flow)
     7.7 Open questions

8. Strategic bets
   3–5 bets that shape design.

9. Assumptions and risks
   Assumption · risk if wrong · when we'd know

10. Track confirmation (Redesign+ decision)
    Redesign / Redesign+. 2–3 sentences. P3 path follows from this.

11. Feasibility notes from eng
   Anything flagged · anything re-scoped · deploy strategy

12. P3 path
    Redesign → IA Audit First-Win (~5–7 days). Deliverable: current-state IA audit + revised IA + sign-off call.
    Redesign+ → Metric Diagnosis First-Win (~5–7 days). Deliverable: drop-off map + engagement architecture + sign-off call.

13. Sign-off ask
    Review by [date]. Specifically check: Sections 2 (inventory), 5 (scope),
    6 (delta), 4 (metric), 10 (track).
```

### Day 7 — Share + sign-off

Share via Zoho Mail. Ask for 48h response (Redesign Requirements docs are denser than Launch — give them time).

Sign-off form agreed in P1 (written approval in Notion or email reply). Don't move to P3 on unsigned Requirements.

---

## Per-Client-Type Variations

### System Thinker

**Delta vs Spine**

- **Current-state IA documented** with structural depth. The current-state inventory should include a navigation tree / IA diagram, not just a flow list. Lift the IA-diagram template from existing CRAFT v2 examples.
- Delta table should include a **module column** alongside flow. ST clients trace requirements to modules instinctively.
- Strategic Bets section: **architectural bets** about the redesign (modular vs monolithic, data model changes, API contract changes).
- The clarification call segment with eng should include **architectural review**, not just feasibility.
- **Requirements Doc addition**: a "Module-level delta" appendix showing module-by-module what's changing.

**Pitfall specific to ST**: thin current-state inventory. They will read the inventory line-by-line. Get it right.

### Appreciates Beauty

Beauty overlay always on.

**Delta vs Spine**

- **Current visual system catalogued** as part of the current-state inventory. Components, typography, color, density, motion — documented with screenshots. This is the central artifact for surface-debt Redesign.
- Target-state articulation must include a **visual direction artifact** by end of P2 — even a rough moodboard. Don't wait for P3.
- Delta table should include a **visual-surface column** alongside functional.
- Strategic Bets: visual direction bets (refresh vs reskin vs from-scratch, density evolution, motion philosophy).
- "Don't break" inventory should preserve brand-critical visual assets.
- **Requirements Doc addition**: a "Visual current state → target" section with side-by-side references. This is often what they actually read first.

**Pitfall specific to Beauty**: producing a Requirements doc with thorough functional delta but no visual delta. They'll feel the work is invisible.

### Direction / Story

**Delta vs Spine**

- **Current brand expression mapped** as part of the current-state inventory. Voice samples (microcopy, marketing copy, error messages), tone analysis, narrative pillars expressed today.
- Target-state must include **narrative target**: voice pillars, tone shifts, narrative archetype change.
- Delta table should include a **pillar column** — every delta traces to a narrative pillar. Deltas that don't trace get challenged.
- Strategic Bets: positioning bets (audience shift, narrative archetype shift, voice repositioning).
- **Requirements Doc addition**: a "Voice & narrative current → target" section with copy samples.

**Pitfall specific to Direction**: documenting structural / visual delta thoroughly and leaving narrative thin. They'll feel the brand work isn't real.

### Technical + Insight

**Delta vs Spine**

- **Current data + hypotheses surfaced** as part of the current-state inventory. What analytics exist, what they show, what hypotheses they've already formed.
- The clarification call must include a **discovery share-back** segment — what *you* found in their data that they didn't flag themselves. This is the teaching moment.
- Delta table should include a **hypothesis column** — every delta traces to a hypothesis (or is flagged as un-grounded).
- Strategic Bets: data-grounded bets. Cite their data.
- For Insight + Redesign, **Redesign+ confirmation is the default path** — verify the 4 criteria are met and lock it.
- **Requirements Doc addition**: a "Discovery findings" section (Section 1 sub-block) and "Open hypotheses to investigate in P3" section.

**Pitfall specific to Insight**: producing a Requirements doc with no fresh data interpretation. Restating their own analytics back at them = unmet trust.

---

## Problem-Statement Lens

### Positioning

> Redesign + Positioning: the current product mis-positions; the work is to re-position.

- **Current vs target message** is the load-bearing artifact. Section 1 (current) and Section 3 (target audience) must be tight.
- Add a **message pillars** sub-section: 3 messages the redesigned product must communicate within the first 10 seconds.
- Add a **positioning delta table**: current message → target message → delta for each primary surface (landing, login, empty state, key conversion points).
- Success metric: comprehension / message recall / first-10-seconds-bounce-rate. Baseline available if the live product has analytics.
- "Don't break": existing brand promise, key customer-facing messaging.
- Positioning decider sign-off mandatory (separate from product decider).

### Activation

> Redesign + Activation: users drop in first session; the work is to fix the drop.

- **Current vs target onboarding flow** is the load-bearing artifact. Document the current first-session flow in granular detail.
- Add a **first-session journey delta**: hour 1 → day 1 → day 7 → day 30, current vs target.
- Success metric: time-to-first-meaningful-action, D1 / D7 / D30 retention. **Baselines mandatory** — pull from analytics.
- Often a Redesign+ candidate if analytics + named drop-off step. Lock at P2.
- "Don't break": existing instrumentation events (so we don't lose the baselines).
- Eng POC sign-off mandatory on instrumentation deltas.

### Usability / Conversion

> **Strongest Redesign+ candidacy.** Confirm at P2.

- **Current vs target funnel** is the load-bearing artifact. Full funnel: steps, conversion at each step, drop-off hypothesis at each step.
- Add a **funnel delta** section: current step → target step → instrumentation delta.
- Success metric: conversion at the problem step + overall funnel conversion. **Baselines mandatory** — from analytics.
- For Redesign+ confirmed: this is the engagement spine. Section 4 (Success metric) and Section 6 (Delta table) carry the most weight.
- "Don't break": baseline conversion (don't drop it during the redesign), existing instrumentation.
- Data owner sign-off mandatory.

---

## Deliverables

| # | Artifact | Format | Audience | Confirmation form |
|---|---|---|---|---|
| 1 | **Current-state inventory** | Notion page (Flows / Screens / Components / Data-model surfaces / Permissions / Integrations / Instrumentation) — linked as appendix from Requirements Doc. For Redesign+: includes detailed funnel walk. | Client-facing | Linked from Requirements Doc; client reviews as part of doc sign-off |
| 2 | **Review Worksheet** | Notion page (same 6 sections as Launch P2) | Internal | DM-only; informs clarification call |
| 3 | **Target-state articulation** | Section 1 + 3 + 4 of Requirements Doc — audience target, functional target (per flow, 1-paragraph), visual target (Beauty), narrative target (Direction), metric target | Client-facing | Doc sign-off |
| 4 | **Clarification call (with current-state share-back)** | Zoho Meeting (~45 min, recorded). For Redesign+: includes data review segment — data owner attends. | Client-facing (sync) | Recording filed; disagreements on current-state inventory resolved in call |
| 5 | **Gap analysis (delta table)** | Section 6 of Requirements Doc — Flow/Surface · Current · Target · Delta · "Don't break" reference | Client-facing | Doc sign-off |
| 6 | **Scope freeze (three-way)** | Section 5 of Requirements Doc — In (changing) / Out (not touching) / Protected (regression constraints) | Client-facing | Doc sign-off |
| 7 | **Success metric with baselines** | Section 4 of Requirements Doc — primary / time window / baseline (from analytics) / target / counter-metric / measurement plan. Baselines mandatory if Redesign+. | Client-facing | Doc sign-off + data owner sign-off on baselines |
| 8 | **Requirements by flow** | Section 7 of Requirements Doc — 7.1–7.7 per flow (purpose, current, target, functional reqs, edge cases, regression constraints, open questions) | Client-facing | Doc sign-off |
| 9 | **Strategic Bets (3–5)** | Section 8 of Requirements Doc | Client-facing | Doc sign-off — client confirms or pushes per bet |
| 10 | **Assumptions and risks** | Section 9 of Requirements Doc | Client-facing | Doc sign-off |
| 11 | **Redesign+ track final lock** | Section 10 of Requirements Doc + Projects DB `Track` field locked (`Redesign` or `Redesign+`) | Client-facing | Doc sign-off. If P2 evidence flipped P1's decision, flagged in Section 10 and Recap. |
| 12 | **Eng feasibility notes + deploy strategy** | Section 11 of Requirements Doc — flagged items, re-scoping, deploy strategy (incremental / feature-flagged / big-bang) | Client-facing | Eng POC sign-off on Section 11 |
| 13 | **P3 path statement** | Section 12 of Requirements Doc — explicit "Redesign → IA Audit First-Win" or "Redesign+ → Metric Diagnosis First-Win" | Client-facing | Doc sign-off |
| 14 | **Requirements Doc (full, 13 sections)** | Notion doc — shared via Zoho Mail link with **48h review ask** (Redesign docs are denser than Launch) | Client-facing | **Written sign-off in Notion** (or email reply) by **all required deciders**: product, eng POC, data owner (if Redesign+), positioning decider (if Positioning), visual decider (if Beauty). |
| 15 | **Current-state IA diagram** *(System Thinker variation)* | Figma frame (lift template from existing CRAFT v2 examples) — linked from current-state inventory | Client-facing | Embedded in doc sign-off |
| 16 | **Module-level delta appendix** *(System Thinker variation)* | Notion appendix to Requirements Doc | Client-facing | Embedded in doc sign-off |
| 17 | **Visual current-state catalog** *(Beauty overlay)* | Figma frame — components / typography / color / density / motion — with screenshots | Client-facing | Linked from current-state inventory; embedded in doc sign-off |
| 18 | **Visual direction (rough moodboard)** *(Beauty overlay)* | Figma frame — 6–10 references with 1-line rationale; rough by design (P3 sharpens) | Client-facing | Linked from Section 3 of Requirements Doc |
| 19 | **Visual current → target side-by-side** *(Beauty overlay)* | Figma frame (paired) — current screen + reference target | Client-facing | Linked from Requirements Doc |
| 20 | **Voice & narrative current → target (with copy samples)** *(Direction variation)* | Notion sub-section in Requirements Doc + Figma frame for sample microcopy if needed | Client-facing | Brand decider sign-off |
| 21 | **Discovery findings + Open hypotheses for P3** *(Insight variation)* | Section 1 sub-block + dedicated section in Requirements Doc | Client-facing | Doc sign-off |
| 22 | **Message pillars + positioning delta table** *(Positioning lens)* | Sub-sections in Requirements Doc | Client-facing | Positioning decider sign-off |
| 23 | **First-session journey delta (current → target)** *(Activation lens)* | Sub-section in Requirements Doc (or FigJam if collaborative journey-mapping is happening) | Client-facing | Doc sign-off |
| 24 | **Funnel delta (instrumentation deltas per step)** *(Conversion lens)* | Notion table inside Requirements Doc — current step → target step → instrumentation delta | Client-facing | Doc sign-off + eng POC sign-off on instrumentation |
| 25 | **P3 start date on calendar** | Zoho Meeting invite | Client-facing | Invite accepted |

---

## Exit Gate (Redesign P2)

Move to P3 only when **every** box checks.

- [ ] **Current-state inventory documented** — flows, screens, components, permissions, integrations, instrumentation. Linked as appendix.
- [ ] **Target-state articulated** — audience (if shifted), functional, visual (Beauty), narrative (Direction), metric.
- [ ] **Delta table populated** for every in-scope flow / surface.
- [ ] **Scope frozen three-way** — In (changing) / Out (not touching) / Protected (regression constraints). All three columns non-empty.
- [ ] **Success metric defined** with **baseline + target + measurement plan.** (Baselines mandatory if Redesign+; recommended otherwise.)
- [ ] **"Don't break" inventory** signed at P1 is fully reflected in the Requirements Doc.
- [ ] **Feasibility signed off by eng** — including deploy strategy.
- [ ] **Strategic Bets confirmed** by client.
- [ ] **Problem statement re-confirmed.** If shifted, document the shift.
- [ ] **Client-type confirmation still holding.**
- [ ] **Redesign+ track confirmed or ruled out, final.** If confirmed, P3 = Metric Diagnosis; if ruled out, P3 = IA Audit. Recorded in Section 10 + Projects DB.
- [ ] **Analytics access still active** (for Redesign+).
- [ ] **All sign-offs collected** — product decider, eng POC, data owner if Redesign+, positioning decider if Positioning, visual decider if Beauty.
- [ ] **P3 start date on calendar.**

---

## Pitfalls

- **Thin current-state inventory.** The most common Redesign P2 failure. It gets treated as "boilerplate" and skimped, then P3 discovers things that should have been caught.
- **Empty "Out" or "Protected" column.** Scope creep accelerant. Force the conversation.
- **Delta table with no "Don't break" references.** Means the inventory and the delta aren't talking to each other.
- **Skipping baselines because "we don't have great analytics".** Document what you have, even if rough. Baselines as "Unknown — to be instrumented in P3" is still useful.
- **Redesign+ flag left in limbo at P2.** Lock it. P3 work depends on it.
- **Confirming Redesign+ without active analytics access.** "We'll get you access in P3" is too late.
- **Track flipped at P2 without a clean recap.** If P2 evidence flipped P1's decision, surface that clearly — eat the awkward conversation now.
- **For ST: missing the IA diagram in the current-state inventory.**
- **For Beauty: no visual current-state catalog.**
- **For Direction: structural delta thorough, narrative delta thin.**
- **For Insight: no fresh discovery in the share-back.**
- **Moving to P3 with partial sign-off.** All decision-makers, not just product.
- **Requirements Doc longer than 15 pages.** It's dense, but compress hard. Long Requirements docs don't get read; they get signed without being read, which is worse.

---

## Next

Depending on track:

- **Redesign** → P3 IA Audit First-Win (see `craft-v2/redesign/06-p3-ia-audit-first-win.md` until Phase 2 of craft-dc migration covers P3+)
- **Redesign+** → P3 Metric Diagnosis First-Win (see `craft-v2/redesign-plus/06-p3-metric-diagnosis-first-win.md`)

Carry forward: Requirements Doc (signed), Current-state inventory, Delta table, "Don't break" inventory, Success metric with baseline, Stakeholder Map, Cadence, Calibrate Note.

---

### Technical reference

| | |
|---|---|
| Internal phase ID | P2 (Redesign) |
| Templates | Review Worksheet · Current-state inventory template · Delta table · Requirements Doc · Funnel delta (Conversion) · Journey delta (Activation) · Message delta (Positioning) · IA diagram (ST) · Visual catalog (Beauty) · Voice samples (Direction) · Discovery findings (Insight) |
| RACI | DM: A/R · SD: C · Eng POC: C (feasibility + deploy) · Data owner: C (mandatory if Redesign+) · CL: C (clarification call + sign-off) · F: I |
| Status in Projects DB | `Requirements complete (Redesign)` after written sign-off · Track field: `Redesign` / `Redesign+` locked |
| Carries forward | Requirements Doc · Current-state inventory · Delta table · Success metric with baselines · Redesign+ track locked · All P1 artifacts |
