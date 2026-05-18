# Redesign — P0 Calibrate

> Pre-engagement triage for a Redesign. Same purpose as Launch P0 *but* with a live product in the room. Calibrate must include initial product audit signals and a metric-context check. Output: a signed Calibrate Note, a Proceed / Pause decision, and a Redesign+ flag (raised or ruled out).

---

## Quick reference

| | |
|---|---|
| **Phase** | P0 — Calibrate (Redesign) |
| **Duration** | 2–3 days, mostly async, plus a 45–60-min Founder Intent Call (longer than Launch — includes a live product walkthrough) |
| **You own this with** | Just you; Founder consulted; SD optional shadow for the product walk |
| **Client touchpoint** | One 45–60 min call + one note delivery |
| **Inputs** | Intake summary (`00-intake-routing.md`), inbound materials, contract signed, **access to the live product** |
| **Output** | 1-page Calibrate Note; Proceed / Pause decision; **Redesign+ flag raised or ruled out** |
| **Goes before** | Redesign P1 Kickoff |

---

## Intent

Same shape as Launch P0 — confirm intent, scope hypothesis, risks before committing to Kickoff — but the live product changes everything. Calibrate must:

- **Walk the live product** with the founder, on the call.
- **Distinguish structural debt from surface debt.** What's broken vs what's just dated.
- **Check metric context.** Is there an active metric crisis? If yes, flag Redesign+ candidacy.
- **Re-confirm the problem statement** against observed product reality. Sometimes the stated problem doesn't match what the product shows.

Calibrate locks *intent*. Scope still lives in P2. But Redesign Calibrate also locks **what is not changing** as a first-principles constraint — the existing product is the floor.

---

## Common Spine

### 1. Read the inbound materials + access the live product

Before the call. ~3–4 hours.

- Re-read the **Intake Summary** — track, problem statement, client-type hypothesis, Beauty overlay, **Redesign+ flag** (raised or not at intake).
- Read every artifact the client sent: brief, references, decks, problem-statement form, analytics screenshots if any.
- **Spend 30 minutes inside the live product yourself.** Sign up (or use the test account they provided). Walk the primary flows. Take screenshots / notes.
- Note four things in a scratch doc:
  - **Intent signals** — what they want changed, in their words.
  - **Structural debt observed** — IA, model, flow logic issues.
  - **Surface debt observed** — visual, polish, dated UI issues.
  - **Metric signals** — anything in materials that points to a specific broken metric.

### 2. Founder Intent Call (45–60 min)

Sync, recorded. Longer than Launch P0 because it includes a live product walk.

**Agenda**

| Block | Time | What happens |
|---|---|---|
| **Founder intent** — same 5 questions as Launch P0, but oriented to "what changes and why now" | 15 | What you're redesigning, why now, who for, definition of done, what could blow it up |
| **Live product walkthrough** | 20–25 | Founder walks the product. Share-screen. You ask structural and metric questions as they walk. |
| **Metric context probe** | 5–10 | "Is there a specific metric you're trying to move? What's it doing now?" If yes → Redesign+ candidacy strengthens. |
| **Track sanity check + close** | 5 | Confirm Redesign (or Redesign+ candidate) is the right track. Cover next steps. |

Have **2–3 structural questions ready** for the walkthrough, calibrated to the client type (see Variations). Don't run a full audit — you're scanning, not diagnosing.

### 3. Scope hypothesis (written)

Same shape as Launch — three columns — but the **Out** column has a default constraint: **what is not changing.** For Redesign, this is critical. The live product is the floor. Anything the client doesn't want to touch goes in Out by default.

| In | Out (default = "everything not explicitly In") | Unclear |
|---|---|---|

Push the client: "What are we explicitly *not* touching?" If they say "everything's on the table" — that's a scope-creep risk. Force them to name protected zones.

### 4. Risk surface (top 3)

Redesign-specific risk categories (plus the Launch ones):

- **Don't-break risk** — flows or metrics that must not regress; client hasn't named them.
- **Hidden user impact** — users depend on existing behaviors the client has forgotten about.
- **Analytics access** — Redesign+ needs analytics; if access is unclear, flag now.
- **Stakeholder politics around the redesign** — internal disagreements about *why* we're redesigning.
- **Decision-maker access**, **timeline**, **scope creep** — same as Launch.

Force-rank to three.

### 5. Structural-vs-surface debt classification

After the product walk, write a 1-page classification:

| Category | Observed |
|---|---|
| **Structural debt** | IA, navigation model, data model, permission model, flow logic — what's *fundamentally* broken |
| **Surface debt** | Visual treatment, components, density, dated UI patterns — what's *just dated* |
| **Both** | Where structural and surface debt interact |

The ratio matters:
- **Mostly structural** → Redesign (full overhaul) likely scope.
- **Mostly surface** → Redesign (refresh) likely scope, smaller engagement.
- **Specific structural + metric problem** → **Redesign+ flag raised.**

### 6. Redesign+ candidacy decision

Use the criteria from `00-intake-routing.md` Step 2 and reconfirm against what you observed:

- [ ] Client references a **specific broken metric** repeatedly (Calibrate Note section 2 or 3).
- [ ] Client has **analytics access** they can share (verified — not just claimed).
- [ ] Scope is **surgical** (one flow / funnel / metric), not full overhaul.
- [ ] Live product walk surfaced a clear **drop-off point** or behavioral anomaly that maps to the metric.

If 3 of 4 check → raise Redesign+ flag. If 4/4 → strongly flagged.
If <3 check → Redesign (standard), Redesign+ flag ruled out at P0. Note explicitly in the Calibrate Note.

The flag is **not a commitment**. It's a hypothesis carried into P1 and confirmed (or not) at P2.

### 7. Track sanity check

Re-confirm Redesign is genuinely the right track.

- [ ] **Live product exists with real users.** Verified — not just "we have something".
- [ ] **Not a parallel net-new product** disguised as Redesign. If the client is using "redesign" to mean "build a new thing alongside the old", route the new thing to Launch.
- [ ] **Not a migration-only / dev-port disguised as Redesign.** Pure platform port with no design change is out of scope for craft-dc.

If any box doesn't check — pause Calibrate, escalate to Founder, re-route.

### 8. Output — the Calibrate Note (1 page)

```
Calibrate Note — [Project Name]
Date · DM · Track: Redesign · Redesign+ flag: raised / ruled out
Problem statement · Client-type hypothesis

1. Founder intent (3 sentences)
   What's changing, why now, definition of done.

2. Live product — what we saw
   2–3 sentences. The product as observed, not as described.

3. Structural-vs-surface debt classification
   Structural debt observed · Surface debt observed · Ratio judgment

4. Scope hypothesis
   In · Out (incl. protected zones) · Unclear

5. Top 3 risks
   Each with: risk · why it matters · early-warning signal

6. Metric context
   Active metric crisis? Y/N · Metric named · Analytics access verified · Drop-off hypothesis

7. Redesign+ flag
   Raised / Ruled out. Why.

8. Track confirmation
   Redesign confirmed. (Or: re-routed because of [reason].)

9. Problem statement re-confirmation
   [Positioning / Activation / Usability-Conversion] — confirmed against observed product reality / shifted to [X]

10. Client-type confirmation
    [Type] — confirmed / mixed-pending-P1 / re-classified

11. Decision: Proceed to P1 / Pause / Escalate
    One-sentence rationale.
```

> **Redesign+ callout — P0**
> If Redesign+ is flagged at P0, **carry the flag into P1**, where the "don't break" inventory and metric-diagnosis spike scheduling get locked. Do not fork engagement structure at P0 — stay in the Redesign doc with the flag active.

---

## Per-Client-Type Variations

### System Thinker

**Delta vs Spine**

- During the live product walkthrough, **audit the product's IA on the call.** Two or three pointed questions: "How does this module relate to that one?", "What's the data flow on this screen?", "Why is this a flat list and not a hierarchy?"
- Read their PRD / spec before the call (if any exists). System Thinkers redesigning often have an updated spec; lift structural questions from it.
- Structural-vs-surface ratio judgment for ST tends to lean **structural-heavy** — they're not redesigning for prettiness. Confirm.
- **Calibrate Note addition**: a "Top 3 IA observations" sub-bullet under Section 2. Quote things you saw on the walk.

**Pitfall specific to ST**: doing a surface audit when they wanted a structural one. Get into the IA on the call.

### Appreciates Beauty

Beauty overlay always on.

**Delta vs Spine**

- During the live product walkthrough, **audit the visual system on the call.** Components, typography, color, density, motion. Two or three observations: "The button hierarchy is doing X — is that intentional?", "The typographic rhythm shifts between these two screens — was that a recent change?"
- Open their reference deck before / during the call. If their references look dramatically different from their live product, that's the gap they want closed — name it.
- Structural-vs-surface ratio for Beauty tends to lean **surface-heavy** — but probe whether structural debt is being mistaken for surface debt.
- **Calibrate Note addition**: a "Visual direction signals" sub-section under Section 2 — what their references want vs what the product currently is. The delta is the brief.

**Pitfall specific to Beauty**: leaving the live product walk without one direct visual observation. They wanted you to *see* it.

### Direction / Story

**Delta vs Spine**

- During the live product walkthrough, **audit brand coherence.** Voice in copy, tone in microcopy, narrative coherence across surfaces. "The onboarding sounds friendly but the settings sound clinical — intentional?"
- Spend ~1/3 of the call on the **why now** — why are they redesigning, what story does the redesigned product need to tell, what changed in the company / market that triggered this.
- Structural-vs-surface judgment for Direction is often **neither** — it's brand-coherence debt, which is its own category. Name it explicitly: "voice debt", "narrative debt".
- **Calibrate Note addition**: a "Brand coherence observations" sub-section. Lead with story, not structure.

**Pitfall specific to Direction**: auditing IA when they wanted a brand-coherence read. Listen for whether they describe the problem in structural terms or narrative terms — match.

### Technical + Insight

**Delta vs Spine**

- Before the call, **ask what data they have on the product's current behavior** — analytics, user feedback, session recordings, support tickets. Read whatever they send. Treat it critically.
- During the live product walkthrough, **audit what data they have**, not just what the product is. "You showed me this screen — do you know how users actually use it? Drop-off? Time on screen? Confusion signals?"
- Cite one finding from their data in the first 5 minutes of the call.
- Structural-vs-surface judgment for Insight clients is often **data-grounded** — they may have already identified the structural / surface issue analytically. Validate or push back.
- For Insight + Redesign, **Redesign+ candidacy is high by default** — they're the most likely client type to have analytics and a specific metric. Lean into the flag.
- **Calibrate Note addition**: a "What they've already discovered + our initial read" section.

**Pitfall specific to Insight**: nodding along to their data. They wanted critical engagement on the walk.

---

## Problem-Statement Lens

### Positioning

> Redesign + Positioning means: the live product mis-positions itself. Why?

- **Probe in the call**: *"Why does the current product mis-position? Walk me to the screens where the mis-position is most visible."* Make them point.
- Also probe: *"Has the audience shifted, or has the product shifted, or both?"* — the answer shapes scope.
- **Live product walk addition**: pay special attention to **first 10 seconds of any surface** (landing, login, empty state). That's where positioning lives.
- **Risk specific to Positioning at Redesign**: assuming positioning work is surface-only ("just change the copy"). Positioning at Redesign often requires structural changes too — IA reorganization, flow re-prioritization.
- **Calibrate Note addition**: under Section 2 (Live product — what we saw), a "First 10 seconds" observation per primary surface.

### Activation

> Redesign + Activation means: users arrive but don't reach the first meaningful moment. Where do they drop?

- **Probe in the call**: *"Where do users drop in the first session? Walk me through the funnel."* If they don't know, that's a finding — they may need Insight work first.
- **Live product walk addition**: walk the **first-time user experience** specifically. Sign up fresh if you can. Note every friction point.
- **Risk specific to Activation at Redesign**: redesigning onboarding without knowing where users actually drop. If analytics access is unclear, flag — this becomes a Redesign+ candidacy signal.
- **Calibrate Note addition**: a "First-session friction observed" sub-section.

### Usability / Conversion

> Redesign + Conversion means: a specific funnel step is leaking. **This is the strongest Redesign+ candidacy signal.**

- **Probe in the call**: *"What's the conversion metric, what's the baseline, what's the target, and what step do you think is broken?"* Push for specifics on each.
- **Live product walk addition**: walk the funnel end-to-end. Note: which steps feel friction-heavy, which feel arbitrary, which lack signposting.
- **Strong Redesign+ candidacy** — if they have a named metric, named drop-off step, and analytics access, this is a 4/4 on the Redesign+ check. Flag.
- **Risk specific to Conversion at Redesign**: client expects a numeric lift commitment in P2. craft-dc doesn't lock numeric lift until P3 (Metric Diagnosis if Redesign+, or end of P3 design if standard Redesign). Manage expectations now.
- **Calibrate Note addition**: a "Funnel + drop-off hypothesis" sub-section.

---

## Deliverables

| # | Artifact | Format | Audience | Confirmation form |
|---|---|---|---|---|
| 1 | **Live product walkthrough recording** | Zoho Meeting recording (founder share-screens the product) — saved to Notion project space | Internal | Recording filed; timestamps for key observations noted |
| 2 | **Scratch notes from solo product walk** | Notion sub-page on Projects DB row (intent / structural debt / surface debt / metric signals — 4 lists, with screenshots) | Internal | DM-only |
| 3 | **Calibrate Note (1-pager, 11 sections)** | Notion 1-pager on Projects DB row | Internal (DM owns; Founder consulted) | Founder ack via Cliq or Notion comment |
| 4 | **Founder intent (3 sentences)** | Section 1 of Calibrate Note | Internal | Embedded |
| 5 | **Live product — what we saw** | Section 2 of Calibrate Note (2–3 sentences) | Internal | Embedded |
| 6 | **Structural-vs-surface debt classification** | Section 3 of Calibrate Note — table with observed examples on each side + ratio judgment | Internal | Embedded |
| 7 | **Scope hypothesis (incl. protected zones)** | Section 4 of Calibrate Note — In / Out (with named protected zones) / Unclear | Internal | Embedded |
| 8 | **Top 3 risks with early-warning signals** | Section 5 of Calibrate Note — at least one Redesign-specific (don't-break, hidden user impact, analytics access, stakeholder politics) | Internal | Embedded |
| 9 | **Metric context** | Section 6 of Calibrate Note — active metric crisis Y/N, metric named, analytics access verified, drop-off hypothesis | Internal | Embedded |
| 10 | **Redesign+ flag (raised / ruled out)** | Section 7 of Calibrate Note + Projects DB `Redesign+ Flag` field | Internal | DB field set |
| 11 | **Track confirmation (Redesign)** | Section 8 of Calibrate Note + Projects DB `Track` field | Internal | DB field set |
| 12 | **Problem statement re-confirmation (vs observed product reality)** | Section 9 of Calibrate Note + DB field | Internal | DB field set |
| 13 | **Client-type confirmation** | Section 10 of Calibrate Note + DB field (or `mixed — pending P1`) | Internal | DB field set |
| 14 | **Top 3 IA observations** *(System Thinker variation)* | Sub-bullet under Section 2 of Calibrate Note — quotes from the walk | Internal | Embedded |
| 15 | **Visual direction signals (current vs reference deltas)** *(Beauty overlay)* | Sub-section under Section 2 — reference thumbnails alongside current-product screenshots | Internal | Embedded |
| 16 | **Brand coherence observations** *(Direction variation)* | Sub-section under Section 2 — voice/tone/narrative debt examples | Internal | Embedded |
| 17 | **What they've already discovered + our initial read** *(Insight variation)* | Sub-section under Section 2 | Internal | Embedded |
| 18 | **First 10 seconds observation per surface** *(Positioning lens)* | Sub-section under Section 2 — one observation per primary surface | Internal | Embedded |
| 19 | **First-session friction observed** *(Activation lens)* | Sub-section under Section 2 | Internal | Embedded |
| 20 | **Funnel + drop-off hypothesis** *(Conversion lens)* | Sub-section under Section 6 — funnel sketch (Notion table) | Internal | Embedded |
| 21 | **Proceed / Pause / Escalate decision** | Section 11 of Calibrate Note + Projects DB `P0 Decision` field | Internal | DM + Founder verbal/written ack |

P0 has **no client-facing deliverable.** The founder has had the call; the next thing the broader client team receives is the P1 Kickoff invite + Pre-Read.

---

## Exit Gate (Redesign P0)

Move to P1 Kickoff only when **every** box checks.

- [ ] **Founder intent in 3 sentences, written.** Includes "what's changing and why now".
- [ ] **Live product walked** with the founder. Recording saved. (Verified, not assumed.)
- [ ] **Structural-vs-surface debt classified** with observed examples on both sides.
- [ ] **Scope hypothesis** (in / out / unclear) written. **Out column includes protected zones — non-empty.**
- [ ] **Top 3 risks named** with early-warning signals. At least one risk is Redesign-specific (don't-break, hidden user impact, analytics access, or stakeholder politics).
- [ ] **Metric context probed.** Active metric crisis Y/N · metric named · analytics access verified.
- [ ] **Redesign+ candidacy flagged or ruled out.** Decision recorded in Calibrate Note section 7.
- [ ] **Track still Redesign.** Live product exists; not a stealth-Launch; not a migration-only.
- [ ] **Client type classified** (or flagged "mixed — pending P1").
- [ ] **Problem statement re-confirmed** against observed product reality. If it shifted, document.
- [ ] **Beauty overlay status confirmed.**
- [ ] **Calibrate Note saved** to the Projects DB row.
- [ ] **Decision recorded**: Proceed to P1 / Pause / Escalate.

---

## Pitfalls

- **Not walking the live product on the call.** Single biggest Redesign P0 mistake. The walk is the phase.
- **Treating Calibrate as Requirements.** It's still triage. You're not auditing the product end-to-end — you're scanning for signals. Full audit is P2 (or P3 if Redesign+).
- **Letting the founder describe the product instead of walking it.** Description ≠ walk. Force a share-screen.
- **Missing the structural-vs-surface distinction.** Conflating them produces wrong scope at P2.
- **Empty Out column.** Redesign without protected zones is scope creep waiting to happen. Force the client to name what's not changing.
- **Not verifying analytics access** when Redesign+ is being considered. "We have analytics" without screen-sharing them is not access.
- **Raising Redesign+ flag too aggressively.** A vague metric mention ≠ Redesign+ candidacy. Use the 3-of-4 check; don't flag on vibes.
- **Ruling out Redesign+ too aggressively.** A clear funnel problem + analytics + surgical scope is Redesign+. Don't default to standard Redesign just because it's simpler.
- **For ST: surface audit when they wanted structural.** Get into the IA on the walk.
- **For Beauty: zero visual observations from the walk.** Name one component, one typographic choice, one density issue.
- **For Direction: structural audit when they wanted brand-coherence.** Listen for the framing.
- **For Insight: nodding at their data.** Engage critically.

---

## Next

→ [`redesign/p1-kickoff.md`](./p1-kickoff.md), carrying the Calibrate Note and the Redesign+ flag.

---

### Technical reference

| | |
|---|---|
| Internal phase ID | P0 (Redesign) |
| Templates | Calibrate Note · Product walkthrough script · Structural-vs-surface classification frame |
| RACI | DM: A/R · F: C · SD: I (optional shadow) · CL: R (one 45–60 min call) |
| Status in Projects DB | `Calibrating — Redesign` · Redesign+ flag field |
| Carries forward | Calibrate Note · Intake Summary · Redesign+ flag · Structural-vs-surface classification · Client-type confirmation |
