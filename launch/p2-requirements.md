# Launch — P2 Requirements

> Convert the PRD + Calibrate signals + Kickoff agreements into a confirmed Requirements doc. By the end of P2 the engagement has an explicit scope freeze, a defined audience, a defined success metric, and a green-lit move to P3.

---

## Quick reference

| | |
|---|---|
| **Phase** | P2 — Requirements (Launch) |
| **Duration** | 4–5 days |
| **You own this with** | Senior Designer (consulted); engineering POC (consulted on feasibility) |
| **Client touchpoint** | One ~30-min clarification call + async review of the Requirements Doc |
| **Inputs** | Calibrate Note, Stakeholder Map, Cadence agreement, PRD/spec/brief, references |
| **Output** | Requirements Doc, signed by client; P3 start date |
| **Goes before** | P3 (Launch track first-win — typically IA First-Win) |

---

## Intent

Lock the four corners of the engagement: **scope, audience, success metric, and feasibility.** Everything that follows in P3+ depends on this doc being unambiguous and signed.

For Launch specifically: there is no live product to anchor on. Requirements work has to **construct the structural picture** from the PRD + Calibrate signals + first-principles audience definition — and resist scope creep aggressively because there's no existing product to constrain ambition.

---

## Common Spine

### Day 1 — PRD audit + Review Worksheet

Deep-read every artifact the client has produced. ~6 hours. Fill the Review Worksheet:

| Section | What goes here |
|---|---|
| What's clear | Product, scope, user, constraints — bullets on what the PRD answers |
| What's ambiguous | Topic · interpretations · resolution (call / async / assume) |
| What's missing | Critical missing (blocks P3) · important missing (resolve before full-scope build) · nice-to-have |
| Contradictions | Where the PRD contradicts the Calibrate Note, or itself |
| Assumptions we're making | Each: assumption · risk if wrong |
| Questions for clarification call | ≤ 8 total |

Push back early on missing critical material. P2 cannot run on half-information.

### Day 1–2 — Audience definition

For Launch, the audience is often under-defined in the PRD. Work it into a usable form. Two artifacts:

- **Primary audience** in one sentence: who, in what context, with what motivation.
- **2–3 personas**, each on a single Figma frame. Lift the persona template from `craft-v2/core/05-p2-requirements.md` (8 sections: avatar + name + archetype, biography, demographics, behaviors, goals, pain points, jobs-to-be-done, quotes).

Personas at Launch are *hypotheses*, not research. Mark them as such on the frame. They will be tested in P3+.

### Day 2–3 — Success metric definition

Lock what success looks like. Distinct from the problem statement; this is the **measurable outcome**.

| Field | Value |
|---|---|
| Primary metric | What we'll watch most closely |
| Time window | When the metric must show up (90 days post-launch typical) |
| Baseline | What we're betting on (for Launch, this is a forward-looking bet — no historical data) |
| Basis | Where the baseline comes from (competitor benchmark, model, hope — be honest) |
| Counter-metric | What we shouldn't break in pursuit of the primary |

If the baseline is unfounded ("we just want it to work"), flag in the Requirements Doc as a known risk. Don't fake a number.

### Day 3 — Clarification call (30 min)

Sync, recorded. Run through the Worksheet questions list. Don't run more than 8. The call is not a re-kickoff — it's a gap-fill.

### Day 3–4 — Scope freeze

The single most important artifact in P2. Three-column structure:

| In scope | Out of scope | Deferred (post-launch) |
|---|---|---|
| Modules + flows + screens with rough counts | Specific things explicitly excluded | Things we'll do later, named |

For Launch: the **Out** column is often empty in the PRD. You have to construct it. Probe the client: "What is *not* in v1?" Get explicit. An empty Out column is a scope-creep risk.

### Day 4 — Edge case inventory

For each in-scope flow, list:
- 2–3 happy-path requirements
- 2–3 edge-case requirements (empty state, error state, offline state, permissions denied, etc.)

Edge cases at Launch are typically forgotten in the PRD. Surfacing them in P2 prevents P3 design re-work.

### Day 4 — Feasibility check with engineering

30-min sync with the eng POC. Walk the scope freeze. Get:
- Tech stack constraints
- Anything in-scope that's infeasible
- Instrumentation hooks needed for the success metric

If eng surfaces an infeasibility — re-scope or re-defer. Don't ship a Requirements doc that lies about feasibility.

### Day 4–5 — Requirements Doc consolidation

The single deliverable. Structure:

```
Requirements Doc — [Project] (v1, for client review)
Date · DM · SD · Track: Launch · Problem statement · Client type

1. The product, in our words
   2–3 sentences restating the product as we understand it.

2. The audience
   Primary audience sentence + persona links. Mark "v1, hypothesis".

3. Success metric
   Primary · time window · baseline · basis · counter-metric

4. Scope freeze
   In · Out · Deferred. Bulletted, with rough flow/screen counts on In.

5. Requirements by flow
   For each in-scope flow:
     5.1 Flow name + 1-sentence purpose
     5.2 Happy-path requirements (numbered)
     5.3 Edge-case requirements (numbered)
     5.4 Open questions

6. Strategic bets
   3–5 bets that shape design (mobile-first vs responsive-first,
   density philosophy, onboarding depth, etc.). Client confirms or pushes back.

7. Assumptions and risks
   Assumption · risk if wrong · when we'd know

8. Feasibility notes from eng
   Anything flagged · anything re-scoped

9. P3 path
   Launch → IA First-Win. ~5–7 days, deliverable is full IA + sign-off call.

10. Sign-off ask
    Review by [date]. Specifically check: Sections 2, 3, 4 are the
    decisions you can live with for the rest of the engagement.
```

### Day 5 — Share for async review + sign-off

Share via Zoho Mail. Ask for 24h response. Sign-off can be written approval in Notion, or reply-to-email — agree on the form in advance.

If the client wants changes: take them, re-issue v2, lock v2. Don't move to P3 on unsigned Requirements.

---

## Per-Client-Type Variations

### System Thinker

**Delta vs Spine**

- **Structural traceability** is the deliverable shape they trust. Every requirement should map to a module. Add a column to Requirements by Flow: `Module` — and trace it.
- The Strategic Bets section should be **architectural bets**, not aesthetic ones (modular vs monolithic, sync vs eventually-consistent, web-first vs native-first).
- During the clarification call, expect them to push on edge cases with structural depth. Have your edge-case inventory ready *before* the call, not after.
- **Audience hypothesis can be lighter** for ST clients — they often have a strong audience model already. Don't burn a day rebuilding personas they'll dismiss. Confirm theirs, sharpen.
- **Requirements Doc addition**: a "Module → Requirement" traceability matrix as an appendix.

**Pitfall specific to ST**: spending too long on personas at the expense of structural depth. They wanted modules, not user quotes.

### Appreciates Beauty

Beauty overlay always on.

**Delta vs Spine**

- Every functional requirement should imply a **visual surface**. Add a column: `Visual surfaces implied` (screens, components, flows that get visual treatment).
- Strategic Bets must include **visual direction bets**: density, motion philosophy, illustrative vs photographic, brand-led vs neutral.
- Run a **parallel moodboard pass** during P2. Don't wait for P3. Even rough — 6–10 references with 1-line rationale each. Show it at the clarification call.
- The Scope freeze must address **visual scope** explicitly: which screens get bespoke treatment vs which use system defaults.
- **Requirements Doc addition**: a "Visual scope" section (Section 4b) alongside functional scope.

**Pitfall specific to Beauty**: a Requirements doc with zero visual content. They'll review it and feel the work is functional-only — and start anxiously asking when "the design" begins.

### Direction / Story

**Delta vs Spine**

- Every requirement should trace to a **brand pillar / narrative pillar**. Add a column: `Pillar` — and trace it. If a requirement doesn't trace to a pillar, ask whether it's actually in scope.
- The Strategic Bets section should include **positioning bets**: tone (warm vs precise), voice (expert vs friend), narrative archetype (challenger vs incumbent vs craft).
- **Audience definition** is the hot artifact for Direction clients — invest extra time. Personas should include voice & tone signals (how do these users speak? what brands do they buy?).
- The Success Metric should include a **brand metric** alongside the functional one (NPS, brand recall, "would you recommend the company").
- **Requirements Doc addition**: a "Narrative pillars" section (Section 6 sub-block) — 3–5 pillars, each 1–2 sentences. Confirms with the brand decider, not just product decider.

**Pitfall specific to Direction**: producing a Requirements doc that's all functional, no voice. They'll feel the story isn't carrying through.

### Technical + Insight

**Delta vs Spine**

- Every requirement should trace to a **hypothesis or finding**. Add a column: `Hypothesis / finding` — and trace it. Requirements without an analytical anchor get flagged.
- The Strategic Bets section should be **bets grounded in evidence** they've already produced. Cite their data.
- Run a **discovery findings appendix** alongside the Requirements doc — surface 3–5 things you learned from their materials that they didn't flag themselves. This is the teaching moment they want.
- The clarification call should include a **discovery share-back** segment (10 min): "Here's what I found in your data — react." Generates fresh material for the doc.
- **Requirements Doc addition**: a "Discovery findings" section (Section 1 sub-block) and a "Open hypotheses to test in P3" section.

**Pitfall specific to Insight**: producing a Requirements doc with no fresh discovery — just a restatement of what they sent. Reads as you didn't engage critically.

---

## Problem-Statement Lens

### Positioning

> Positioning at Launch means: who is the audience, what's the message, what's the proof.

- **Audience and message requirements dominate** the Requirements doc. Section 2 (Audience) and the positioning bets in Section 6 are the load-bearing sections — invest accordingly.
- Add a **Message pillars** sub-section: 3 messages the product must communicate within the first 10 seconds of any surface.
- Success metric for Positioning: comprehension / message recall / first-10-seconds-bounce-rate. Not just functional conversion.
- Confirm the **positioning decider** is on the sign-off list — often a different person from the product decider.

### Activation

> Activation at Launch means: the first 30 days are the unit of design.

- **User-flow and first-session requirements dominate.** Section 5 (Requirements by flow) should have the onboarding / first-session flow listed first, with the most detail.
- Add a **First-30-day journey** sub-section: hour 1 → day 1 → day 7 → day 30. Each milestone with: user goal, system response, instrumentation point.
- Success metric for Activation: time-to-first-meaningful-action, D1 / D7 / D30 retention. Lock the definition of "meaningful action" in the doc.
- Engineering POC must sign off on instrumentation feasibility — without it, the activation metric is unmeasurable.

### Usability / Conversion

> For Launch this is a forward-looking conversion bet. Re-validate the baseline at P2 exit.

- **Metric instrumentation and funnel requirements dominate.** Lock the funnel definition (steps, intent, success at each step) in Section 3.
- Add a **Funnel definition** sub-section: steps · intent at each step · target conversion at each step · instrumentation point.
- Re-validate the **baseline number and basis** carried from Calibrate Note + P1 Recap. If the basis is still weak ("we're hoping for 5%"), flag in Section 7 (Assumptions and risks) as a top risk.
- Engineering POC must sign off on funnel instrumentation feasibility.

---

## Deliverables

| # | Artifact | Format | Audience | Confirmation form |
|---|---|---|---|---|
| 1 | **Review Worksheet** | Notion page (Sections 1–8: clear / ambiguous / missing / contradictions / assumptions / questions / red flags / track signals) | Internal | DM-only; informs the clarification call |
| 2 | **Personas (2–3)** | Figma frames (one per persona, ~1200×1600, 8 sections each — avatar, biography, demographics, behaviors, goals, pain points, JTBD, quotes) — marked "v1, hypothesis" | Client-facing | Linked from Requirements Doc Section 2; client reviews as part of doc sign-off |
| 3 | **Audience hypothesis** | One-sentence line + persona links — Section 2 of Requirements Doc (Notion) | Client-facing | Doc sign-off |
| 4 | **Success metric definition** | Section 3 of Requirements Doc — primary / time window / baseline / basis / counter-metric | Client-facing | Doc sign-off |
| 5 | **Scope freeze (three columns)** | Section 4 of Requirements Doc — In / Out / Deferred (with rough flow/screen counts) | Client-facing | Doc sign-off |
| 6 | **Requirements by flow** | Section 5 of Requirements Doc — happy-path + edge-case requirements, numbered, per flow | Client-facing | Doc sign-off |
| 7 | **Edge case inventory** | Embedded inside Section 5 per flow | Client-facing | Doc sign-off |
| 8 | **Strategic Bets (3–5)** | Section 6 of Requirements Doc | Client-facing | Doc sign-off — client confirms or pushes back per bet |
| 9 | **Assumptions and risks** | Section 7 of Requirements Doc | Client-facing | Doc sign-off |
| 10 | **Eng feasibility notes** | Section 8 of Requirements Doc + 30-min sync with eng POC (Zoho Meeting, notes captured in Notion) | Client-facing (notes); Internal (sync) | Eng POC sign-off on Section 8 |
| 11 | **Clarification call** | Zoho Meeting (~30 min, recorded) | Client-facing (sync) | Recording filed |
| 12 | **Requirements Doc (full)** | Notion doc with all 10 sections — shared via Zoho Mail link with 24h review ask | Client-facing | **Written sign-off in Notion** (or email reply) by product decider; problem-statement-specific decider also signs if applicable |
| 13 | **Module → Requirement traceability matrix** *(ST variation)* | Notion appendix to Requirements Doc | Client-facing | Doc sign-off |
| 14 | **Visual scope (Section 4b) + parallel moodboard** *(Beauty overlay)* | Section in Requirements Doc + Figma moodboard frame (6–10 references, 1-line rationale each) | Client-facing | Doc sign-off + moodboard linked from Section 4b |
| 15 | **Narrative pillars (3–5)** *(Direction variation)* | Sub-block in Requirements Doc Section 6 | Client-facing | Doc sign-off — brand decider also signs |
| 16 | **Discovery findings appendix + Open hypotheses** *(Insight variation)* | Section 1 sub-block + dedicated "Open hypotheses to test in P3" section in Requirements Doc | Client-facing | Doc sign-off |
| 17 | **Message pillars (3)** *(Positioning lens)* | Sub-section in Requirements Doc Section 2 | Client-facing | Doc sign-off — positioning decider also signs |
| 18 | **First-30-day journey** *(Activation lens)* | Sub-section in Requirements Doc Section 5 (table: hour 1 / day 1 / day 7 / day 30 — goal, response, instrumentation point) | Client-facing | Doc sign-off |
| 19 | **Funnel definition** *(Conversion lens)* | Sub-section in Requirements Doc Section 3 — steps, intent, target at each step, instrumentation point | Client-facing | Doc sign-off + eng POC sign-off on instrumentation |
| 20 | **P3 start date on calendar** | Zoho Meeting invite | Client-facing | Invite accepted |

---

## Exit Gate (Launch P2)

Move to P3 only when **every** box checks.

- [ ] **Scope frozen** — In / Out / Deferred all populated. Out is non-empty.
- [ ] **Audience defined** — primary audience sentence + 2–3 personas (marked as hypothesis for Launch).
- [ ] **Success metric defined** — primary + time window + baseline + basis + counter-metric.
- [ ] **Feasibility signed off by eng** — every in-scope requirement is buildable in the agreed stack.
- [ ] **Strategic Bets confirmed** — client has read and reacted to the 3–5 bets in Section 6.
- [ ] **Problem statement re-confirmed** at the end of P2. If shifted, document in the doc.
- [ ] **Client-type confirmation still holding.** If signals shifted during P2, re-classify and note in the doc.
- [ ] **Track still Launch** — no live product surfaced; no metric crisis surfaced. If either did, re-route.
- [ ] **All 4 corners of the Requirements Doc signed by client** — scope, audience, success metric, feasibility. Written sign-off, not verbal.
- [ ] **P3 start date on calendar.**

---

## Pitfalls

- **Out-of-scope column left empty.** Single biggest source of P3+ scope creep at Launch. Force the client to articulate what's *not* v1.
- **Personas as decoration.** If the personas don't shape any requirement, they're decoration. Either tie each persona to specific requirements, or cut them.
- **Success metric without a baseline.** "Increase conversion" is not a success metric. Lock a number, even if the basis is weak — and call out the weakness.
- **Skipping the feasibility check with engineering.** Requirements that turn out to be unbuildable in P3 destroy trust. Get eng in the room before sign-off.
- **For ST: persona-heavy, structure-light doc.** Flip the weight.
- **For Beauty: functional-only doc with no visual scope.** Beauty client reads it and panics about whether design is happening.
- **For Direction: brand pillars omitted.** They'll feel the story is invisible.
- **For Insight: no fresh discovery findings.** Reads as a restatement of their PRD.
- **Signing off on an unread doc.** "We trust you, just send the doc" is not sign-off. Force a 30-min walkthrough if needed.
- **Moving to P3 on a partial sign-off** — e.g., scope is signed but audience isn't. All four corners must be signed.

---

## Next

→ P3 First-Win for Launch. (See `craft-v2/launch/06-p3-ia-first-win.md` until Phase 2 of craft-dc migration covers P3+.)

Carry forward: Requirements Doc (signed), Stakeholder Map, Cadence, Calibrate Note.

---

### Technical reference

| | |
|---|---|
| Internal phase ID | P2 (Launch) |
| Templates | Review Worksheet · Persona frame · Requirements Doc · Funnel definition (Conversion) · Journey map (Activation) · Message pillars (Positioning) |
| RACI | DM: A/R · SD: C · CL: C (clarification call + sign-off) · F: I · Eng: C (feasibility) |
| Status in Projects DB | `Requirements complete` after written sign-off |
| Carries forward | Requirements Doc · Personas · Strategic Bets · Funnel/Journey/Message pillars (problem-statement-dependent) |
