# craft-dc — Layered Calibrate / Kickoff / Requirements (P0–P2)

## Context

DC currently runs P0 Calibrate, P1 Kickoff, P2 Requirements out of `craft-v2/core/`. Those docs are System-Thinker-only and treat track (Launch vs Redesign vs Redesign+) as something discovered at the end of P2. In practice, inbound qualification has tightened: clients now arrive with a *problem statement* (one of: **Product Positioning**, **User Activation**, **Usability / Conversion**) and a *track* (Launch or Redesign) known at intake. They span all 4 client archetypes (System Thinker, Appreciates Beauty, Direction / Story, Technical + Insight).

The existing core docs can't carry this. They have no Launch/Redesign split at P0–P2, no per-client-type variation, and no problem-statement lens. This work creates a new `craft-dc/` folder that replaces `craft-v2/core/` for P0–P2 and lays the groundwork for replacing the whole `craft-v2/` framework over time. The intended outcome: a Manager can route any inbound (4 client types × 3 problem statements × 2 tracks) through the first 3 phases without escalating to the Founder, with a fresh layered doc anatomy designed specifically for this multi-axis reality.

---

## Locked Decisions (from grill)

| # | Decision |
|---|---|
| 1 | New folder `craft-dc/` parallel to `craft-v2/`. craft-dc **fully replaces** craft-v2 over time; this work is Phase 1 (P0–P2 only). |
| 2 | **6 process docs**: 3 Launch + 3 Redesign. Launch and Redesign diverge sharply (~50%+) at P0–P2 — justifies separate docs. |
| 3 | **Redesign+** folded into Redesign docs as inline callouts (not a separate track at P0–P2). |
| 4 | Each doc **layers all 4 client types** inline. All 4 client types fully fleshed out (not escalation stubs). |
| 5 | **Client type = primary axis**; **problem statement = secondary lens** within each client-type section. |
| 6 | **Problem statement known at intake** (not surfaced during P0–P2). |
| 7 | **Appreciates Beauty stays in scope** — they still arrive with one of the 3 problem statements but always carry a parallel look-and-feel concern. |
| 8 | **Layering format**: inline annotations (common body + callouts at divergence points). |
| 9 | **Fresh anatomy** for each doc: Intent → Common Spine → Per-Client-Type Variations → Problem-Statement Lens → Exit Gate → Pitfalls. |
| 10 | **Content design**: co-design strawmen on the fly while writing. Plan ships full strawmen for **Launch P0 Calibrate** as the worked example; other 5 docs have skeleton + bullet placeholders. |
| 11 | **Write order**: Launch P0 → P1 → P2, then Redesign P0 → P1 → P2. One doc at a time. |

---

## Folder Structure

```
craft-dc/
  00-craft-dc-dashboard.md          # entry doc, links + scope frame
  00-intake-routing.md               # Launch vs Redesign + problem-statement triage at inbound
  launch/
    p0-calibrate.md
    p1-kickoff.md
    p2-requirements.md
  redesign/
    p0-calibrate.md                  # includes Redesign+ callouts
    p1-kickoff.md                    # includes Redesign+ callouts
    p2-requirements.md               # includes Redesign+ callouts
  templates/
    (per-client-type / per-problem-statement intake forms, agenda templates, requirements doc skeletons — populated as needed)
```

Total: **2 ancillary docs + 6 process docs + templates folder** = 8 docs + templates.

---

## Doc Anatomy (applies to all 6 process docs)

```
## Intent
One-liner: why this phase exists in this track (Launch- or Redesign-specific framing).

## Common Spine
The shared ~80% — activities, questions, signals, artifacts that apply regardless
of client type or problem statement. This is the body the reader follows first.

## Per-Client-Type Variations
### System Thinker
  - Delta callouts vs the Common Spine
### Appreciates Beauty
  - Delta callouts (always with look-and-feel overlay)
### Direction / Story
  - Delta callouts
### Technical + Insight
  - Delta callouts

## Problem-Statement Lens
- Positioning: how this phase shifts when the problem is positioning
- Activation: how this phase shifts when the problem is activation
- Usability / Conversion: how this phase shifts when the problem is conversion

## Exit Gate
Track-specific criteria to leave this phase (Launch and Redesign gates differ).
Includes problem-statement re-confirmation checkbox.

## Pitfalls
Common failure modes specific to this phase × this track.
```

---

## Worked Example — Launch P0 Calibrate (full strawman)

> This is the template the other 5 docs imitate. Other docs ship as skeletons in this plan; their strawmen get designed at write time using this shape.

### Intent
Pre-engagement triage for a Launch engagement: confirm founder intent, scope hypothesis, and risks **before** committing to Kickoff. Not a sales call. Not Requirements. A 1-page sanity check that this engagement should run, and how.

### Common Spine
1. Read inbound materials (PRD / brief / references / problem-statement form).
2. **Founder Intent Call (30 min)** — what are they building, why now, who for, definition of done.
3. **Scope hypothesis** — rough in/out/unclear, written.
4. **Risk surface** — top 3 things that could blow this up (timeline, decision-maker access, scope creep, fuzzy PMF, etc.).
5. **Track sanity check** — confirm Launch is genuinely the right track (no hidden live product, no metric crisis disguised as Launch).
6. **Output** — 1-page Calibrate Note: intent in 3 sentences, scope hypothesis, top 3 risks, problem-statement confirmed, proceed/pause decision.

### Per-Client-Type Variations

**System Thinker**
- Read the PRD *before* the call; come with structural questions (modules, scale, dependencies).
- Trust-signal: respond to PRD detail. Skipping it = lose them on call 1.
- Calibrate Note should reference their PRD sections by name.

**Appreciates Beauty**
- Always-on overlay: even with a functional problem statement, they care how it looks.
- Open their reference deck on the call. If they sent moodboards, react to them in the first 10 minutes.
- Calibrate Note adds a "Visual direction signals" subsection alongside intent.

**Direction / Story**
- Spend 1/3 of the call on the narrative: what story does this product tell? Why this, now?
- Get them talking positioning before features.
- Calibrate Note leads with the story articulation, not the spec.

**Technical + Insight**
- Ask what research / audits / data *they've already done*. They'll trust you if you read their data critically on call 1.
- Reference one finding from their materials by the second turn of the call.
- Calibrate Note includes a "What they've already discovered" section.

### Problem-Statement Lens

- **Positioning** — calibrate around audience-product fit + messaging frame. Probe: "What 3 words should land when someone visits day 1?" Risk: positioning work without a defined audience.
- **Activation** — surface hypothesized user motivation + the first-30-day moment. Risk: solving onboarding before there's PMF signal.
- **Usability / Conversion** — for Launch, this is a forward-looking conversion bet (no historical data). Probe: "What's the conversion metric, and what's the baseline you're betting on?" Risk: committing to numbers on an unvalidated product.

### Exit Gate (Launch-specific)

- [ ] Founder vision in 3 sentences, written
- [ ] Scope hypothesis (in / out / unclear) written
- [ ] Top 3 risks named
- [ ] No live product (or only throwaway MVP) — confirmed Launch, not stealth-Redesign
- [ ] Client type classified (and reviewed if mixed signals)
- [ ] Problem statement re-confirmed: positioning / activation / usability
- [ ] Proceed to P1, or pause

### Pitfalls
- Treating Calibrate as a sales call (it's not — it's triage).
- Skipping risk surface because the call felt good.
- Misclassifying client type (e.g., reading Beauty as System Thinker because they sent a deck — the deck was references, not specs).
- Committing to scope here. Calibrate locks *intent*, not scope. Scope lives in P2.
- For Beauty clients: not opening their reference deck on the call.
- For Insight clients: not citing their data back to them.

---

## Skeletons — Other 5 Docs

Each gets the same 6-section anatomy. Below is the **focus** for each, to be expanded at write time.

### `launch/p1-kickoff.md`
- **Intent**: Convene the working team, lock decision-makers, set rhythm, share the Calibrate Note. Establish trust in the framework.
- **Common Spine focus**: Kickoff agenda, stakeholder map (who decides what), cadence (standup / review / signoff), shared workspace setup, framework walkthrough.
- **Client-type variations**: System Thinker → walk through CRAFT phases in technical depth; Beauty → walk through visual milestones (moodboard/UI dates); Direction → walk through narrative checkpoints; Insight → walk through research/audit checkpoints.
- **Problem-statement lens**: each shifts which milestones matter most.
- **Exit gate**: stakeholder map signed off, cadence agreed, framework understood, no surprise decision-makers, problem statement reconfirmed with full team present.

### `launch/p2-requirements.md`
- **Intent**: Convert the PRD + Calibrate signals into a confirmed Requirements doc that exits with explicit scope, audience, success metric, and a green-lit move to P3.
- **Common Spine focus**: PRD audit, audience definition, success metric definition, scope freeze (in/out), edge-case inventory, feasibility check with engineering.
- **Client-type variations**: System Thinker → structural traceability (every requirement maps to a module); Beauty → visual scope alongside functional (e.g., "this requirement implies these UI surfaces"); Direction → every requirement traced to a brand pillar; Insight → every requirement traced to a hypothesis or finding.
- **Problem-statement lens**: positioning → audience + message requirements dominate; activation → user-flow + first-session requirements dominate; conversion → metric instrumentation + funnel requirements dominate.
- **Exit gate**: scope frozen, success metric defined, all 4 corners of the Requirements doc signed by client.

### `redesign/p0-calibrate.md`
- **Intent**: Same as Launch P0 *but* with a live product in the room. Calibrate must include initial product audit signals and metric-context check.
- **Common Spine focus**: PRD/brief read + **walk the live product on the call**; founder intent on what's changing and why now; structural debt vs surface debt distinction; metric context (if any).
- **Redesign+ callout**: if the client references a specific broken metric repeatedly *and* has analytics access, flag Redesign+ candidacy at this phase. Doesn't commit — flags.
- **Client-type variations**: System Thinker → audit the product's IA on the call; Beauty → audit the visual system; Direction → audit the brand coherence; Insight → audit what data they have on the product's behavior.
- **Problem-statement lens**: positioning → why does the current product mis-position? activation → where do users drop? conversion → what funnel step is broken?
- **Exit gate**: live product walked, structural-vs-surface debt classified, Redesign+ candidacy flagged or ruled out, problem statement reconfirmed against observed product reality.

### `redesign/p1-kickoff.md`
- **Intent**: Convene team + lock decision-makers + agree on what is *not* changing (the existing product is the constraint, unlike Launch).
- **Common Spine focus**: agenda, stakeholder map, cadence, framework walkthrough, **"don't break"** inventory (what cannot regress).
- **Redesign+ callout**: if Redesign+ was flagged in P0, schedule the metric-diagnosis spike in week 1 of P3.
- **Client-type variations**: System Thinker → IA-audit checkpoint dates; Beauty → existing visual system audit; Direction → brand audit; Insight → data audit.
- **Problem-statement lens**: same as Launch P1 but anchored to the live product.
- **Exit gate**: "don't break" list signed, stakeholder map signed, cadence agreed, Redesign+ track confirmed or not.

### `redesign/p2-requirements.md`
- **Intent**: Output a Requirements doc that documents current state + target state + delta, with explicit scope freeze.
- **Common Spine focus**: current-state inventory (flows, screens, components), target-state articulation, gap analysis, scope freeze, success metric (now usually backed by live baselines).
- **Redesign+ callout**: metric baseline + target + measurement plan become first-class deliverables, not afterthoughts. If Redesign+ confirmed, P3 becomes Metric Diagnosis (not IA Audit).
- **Client-type variations**: System Thinker → current-state IA documented; Beauty → current visual system catalogued; Direction → current brand expression mapped; Insight → current data + hypotheses surfaced.
- **Problem-statement lens**: positioning → current vs target message; activation → current vs target onboarding flow; conversion → current funnel + target funnel.
- **Exit gate**: scope frozen, current/target/delta documented, metric baselines captured (if Redesign+), client sign-off, track confirmed (Redesign vs Redesign+).

---

## Ancillaries

### `00-craft-dc-dashboard.md`
Landing/index for the folder. Sections:
- **Scope** — what craft-dc covers (P0–P2 only, all 4 client types, 3 problem statements, 2 tracks).
- **Frame** — the client-type × problem-statement × track frame.
- **How to use** — read 00-intake-routing first, then jump to the matching `launch/` or `redesign/` Pn.
- **Links** — to all 6 process docs and templates.
- **Relationship to craft-v2** — craft-dc supersedes craft-v2/core/ for P0–P2; P3+ still lives in craft-v2 tracks until later migration.

### `00-intake-routing.md`
Decision flow before P0 begins.
- **Step 1** — Inbound qualification gate. Confirm one of the 3 problem statements (positioning / activation / usability-conversion).
- **Step 2** — Track triage. Live product? Yes → Redesign. No → Launch. Edge cases listed.
- **Step 3** — Client-type signal scan (lift the cheatsheet from `craft-v2/core/00-classification.md`).
- **Step 4** — Route to the right P0 doc (`launch/p0-calibrate.md` or `redesign/p0-calibrate.md`).
- **Outputs** — Intake summary: track + problem statement + client-type hypothesis.

### `templates/`
Empty folder at creation. Populated lazily as templates are needed:
- `calibrate-note-template.md`
- `kickoff-agenda-template.md`
- `requirements-doc-template.md`
- Per-client-type variants added as engagements demand.

---

## Critical Files to Read Before / During Writing

| File | Why |
|---|---|
| `craft-v2/core/00-classification.md` | 4-client-type cheatsheet, hidden fears, first-win signals — **lift the signal table** for intake-routing. |
| `craft-v2/core/01-system-thinker-pattern.md` | Source of System Thinker depth. Translate to Common Spine + Variations. |
| `craft-v2/core/02-craft-overview.md` | Framework overview. Keep continuity in language. |
| `craft-v2/core/03-p0-calibrate.md` | Source content for Launch P0 and Redesign P0 (System Thinker layer). |
| `craft-v2/core/04-p1-kickoff.md` | Source content for both P1 docs. |
| `craft-v2/core/05-p2-requirements.md` | Source content for both P2 docs. |
| `craft-v2/launch/00-launch-dashboard.md` | Existing Launch framing — keep continuity at the dashboard layer. |
| `craft-v2/redesign/00-redesign-dashboard.md` | Existing Redesign framing. |
| `craft-v2/redesign-plus/00-redesign-plus-dashboard.md` | What the Redesign+ callouts should anticipate. |
| `craft-v2/shared/DECISIONS.md` | Decisions log — append the craft-dc decision here at end of work. |

---

## Migration Plan for craft-v2

This work is **Phase 1**.

- **Phase 1 (this work)** — Build craft-dc with P0–P2 + ancillaries. `craft-v2/core/03/04/05` (the P0–P2 docs) are marked **deprecated** with a banner pointing to craft-dc; `craft-v2/core/00, 01, 02` (classification, overview, system-thinker pattern) stay live and get linked from craft-dc.
- **Phase 2 (future, out of scope here)** — Migrate P3+ tracks (`craft-v2/launch/`, `craft-v2/redesign/`, `craft-v2/redesign-plus/`) into craft-dc, layered the same way. craft-v2 fully deprecated at end of Phase 2.

---

## Write Order

1. `00-craft-dc-dashboard.md`
2. `00-intake-routing.md`
3. `launch/p0-calibrate.md` ← worked example, anchor for the rest
4. `launch/p1-kickoff.md`
5. `launch/p2-requirements.md`
6. `redesign/p0-calibrate.md`
7. `redesign/p1-kickoff.md`
8. `redesign/p2-requirements.md`
9. Add deprecation banner to `craft-v2/core/03-p0-calibrate.md`, `04-p1-kickoff.md`, `05-p2-requirements.md`.
10. Append decision to `craft-v2/shared/DECISIONS.md`.

Each doc gets its own short grill at write time: I'll propose the Common Spine + 4 Per-Client-Type Variations + 3 Problem-Statement Lens points; you react and refine; then I write.

---

## Verification

The work is done when:
- [ ] All 8 files exist at the paths listed above with the 6-section anatomy.
- [ ] Every process doc has all 4 client types populated (no `TBD` placeholders).
- [ ] Every process doc has all 3 problem-statement lens entries populated.
- [ ] Exit Gates are track-specific (Launch gates ≠ Redesign gates in observable ways).
- [ ] `00-intake-routing.md` produces a deterministic route to one of the 6 docs given any (track, problem statement, client type) triple.
- [ ] `craft-v2/core/03/04/05` carry a deprecation banner linking to the new craft-dc equivalents.
- [ ] A spot check: pick 2 random (track × problem × client-type) triples (e.g., Launch × Activation × Beauty, Redesign × Positioning × Insight) and read end-to-end through intake-routing → P0 → P1 → P2. The path should make sense without external help.
- [ ] `DECISIONS.md` has the craft-dc Phase 1 decision entry.
