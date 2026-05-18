# Redesign — P1 Kickoff

> Convene the team, lock decision-makers, set rhythm, and **agree on what is not changing.** Unlike Launch P1, Redesign Kickoff carries an existing product as a hard constraint. The "don't break" inventory is the load-bearing artifact.

---

## Quick reference

| | |
|---|---|
| **Phase** | P1 — Kickoff (Redesign) |
| **Duration** | 0.5–1 day — 75–90 min call + same-day recap + "don't break" inventory follow-up |
| **You own this with** | Full client working group (mandatory); SD shadows if assigned; **eng POC required** (more critical than Launch — existing tech is a constraint) |
| **Client touchpoint** | Sync — Zoho Meeting call + Recap email + "don't break" sign-off |
| **Inputs** | Calibrate Note (with Redesign+ flag), Intake Summary, signed contract, live product access |
| **Output** | Stakeholder Map · Cadence agreement · **"Don't break" inventory** · Recap email acknowledged · Redesign+ track confirmed or ruled out for the team |
| **Goes before** | Redesign P2 Requirements |

---

## Intent

Same scaffolding as Launch P1 — stakeholder map, cadence, framework walkthrough, Calibrate Note read-back — **plus** two Redesign-specific artifacts:

1. **"Don't break" inventory** — what cannot regress. The existing product is the floor. Anything not explicitly opened-for-change is protected.
2. **Redesign+ track confirmation** (if flagged at P0) — the full team confirms or rules out the Redesign+ direction. If confirmed, schedule the metric-diagnosis spike in week 1 of P3.

Redesign Kickoff is structurally heavier than Launch Kickoff because the artifact constraints are real. Plan for 75–90 min.

---

## Common Spine

### 1. Pre-call prep (T-2 days)

- Re-read the Calibrate Note. **Re-walk the live product** for 20 minutes — the team should see you've been inside it recently.
- Send agenda + Pre-Read 48h ahead. The Pre-Read includes a **"come ready to discuss what cannot change"** prompt.
- Confirm attendance: product decider, eng POC, and — if Redesign+ flagged — anyone who owns analytics / data access.
- Pull up: Stakeholder Map template, Cadence template, and the **"Don't break" inventory** template in Notion.

### 2. Kickoff call (75–90 min, recorded)

State recording permission. Run from a deck or shared Notion doc.

**Agenda (90 min default)**

| Block | Time | What happens |
|---|---|---|
| Welcome + roles around the room | 5 | Names, roles, what they own — including eng / data owner if Redesign+ |
| **Calibrate Note read-back** | 10 | Read what you heard. Includes structural-vs-surface classification + Redesign+ flag if raised. |
| **Live product walk-through, together** | 15 | You drive this time. Walk what you'll be touching, with the full team in the room. Surfaces hidden stakeholders. |
| **Framework walkthrough** | 10 | How craft-dc P0 → P1 → P2 → P3 will run for *them*. Concrete artifacts. |
| **Stakeholder mapping** | 10 | Live, in Notion. Names + decisions owned. |
| **"Don't break" surfacing** | 15 | Live conversation. What flows, metrics, users, integrations cannot regress? |
| **Cadence & comms** | 10 | Standup / review / sign-off rhythm. |
| **Redesign+ track decision** (if flagged) | 5–10 | Confirm or rule out the flag with the team. If confirmed, lock the P3 metric-diagnosis spike. |
| **Problem statement re-confirmation** | 5 | Full team confirms. |
| **Open floor** | 5 | "What are you most worried about?" |

If the room is 60 min, skip the framework walkthrough (carry it async) and trim Open Floor — never trim "Don't break" or live product walk.

### 3. "Don't break" inventory (filled live, finalized async)

The artifact unique to Redesign Kickoff. Notion table, owned by you, signed by the client within 48h of the call.

| Category | What cannot regress | Why |
|---|---|---|
| **Flows** | Specific flows / journeys that must continue working | E.g., "checkout flow", "admin export" |
| **Metrics** | Numbers we cannot move backwards on | E.g., "checkout conversion is 2.1% — don't drop below 1.9%" |
| **User cohorts** | User groups whose experience cannot degrade | E.g., "power users using keyboard shortcuts" |
| **Integrations** | External systems / APIs / partners that depend on current behavior | E.g., "Slack integration on the notifications screen" |
| **Compliance / regulatory** | Anything that must not change for legal reasons | E.g., "consent flow at signup" |

For each row, name the **decider** who owns sign-off if a "don't break" is later challenged.

The "don't break" list is not exhaustive at the kickoff — it's seeded. P2 fleshes it out. But P1 must surface the **top 5–10 obvious ones**, signed.

### 4. Stakeholder Map (filled live)

Same shape as Launch, plus Redesign-specific rows:

| Role on this engagement | Person (name) | Decisions owned |
|---|---|---|
| Primary product decider | | What ships, what doesn't |
| Eng POC | | Tech feasibility, deploy windows, instrumentation |
| Problem-statement decider | | (See lens) |
| **"Don't break" decider** | | Who decides if a protected zone can open for change |
| **Analytics / data owner** *(if Redesign+ flagged)* | | Who provides analytics access, owns metric truth |
| Other reviewers | | What they review |

### 5. Cadence agreement

Same as Launch, plus:

- **Live product release cadence** — does the existing product still ship while we redesign? If yes, what's the deploy window we shouldn't collide with?
- **If Redesign+ flagged**: a recurring "metric review" slot — weekly during P3 minimum.

### 6. Redesign+ track decision

If P0 raised the flag, P1 confirms it. Walk the team through the Redesign+ criteria:

- [ ] Specific broken metric, named and agreed
- [ ] Analytics access available (verified — data owner named)
- [ ] Surgical scope (not full overhaul)
- [ ] Drop-off / behavioral anomaly hypothesis exists

If all 4 confirmed → **Redesign+ track confirmed.** Note that P3 will be Metric Diagnosis, not IA Audit. Schedule the metric-diagnosis spike for week 1 of P3.

If <4 confirmed → **Redesign+ flag ruled out** at P1. Note in the Recap. Engagement continues as standard Redesign.

### 7. Same-day Recap email (≤ 4 hours after call)

```
WHAT WE HEARD (Calibrate Note read-back, in 3 lines)

CONFIRMED STAKEHOLDER MAP
[bullet list — including "don't break" decider and data owner if Redesign+]

CADENCE
[standup, review, sign-off, with day + time]
[release-cadence note]
[metric review slot if Redesign+]

"DON'T BREAK" SEED LIST
[top 5–10 items from the kickoff; full list to be finalized by EOD + 2 days]

REDESIGN+ TRACK DECISION
Confirmed / Ruled out. Reasoning.
[If confirmed: P3 metric-diagnosis spike scheduled for week of (date)]

PROBLEM STATEMENT (confirmed by full team)
[Positioning / Activation / Usability-Conversion]

WHAT HAPPENS NEXT
- P2 Requirements kicks off [date]
- "Don't break" inventory finalized for sign-off by [date + 2]
- Discovery doc draft to you by [date]

THINGS WE NEED FROM YOU
- "Don't break" inventory sign-off by [date + 2]
- [If Redesign+: analytics access setup by [date]]
- [other asks]

If anything here doesn't match what you heard, flag by EOD tomorrow.
```

### 8. Update Projects DB

`Kickoff complete (Redesign)` · Stakeholder Map link · "Don't break" inventory link · Cadence link · **Redesign+ track field** (confirmed / ruled out) · P2 start date.

---

## Per-Client-Type Variations

### System Thinker

**Delta vs Spine**

- The live product walk-through (Block 3) becomes an **IA-audit checkpoint preview.** Point at specific IA issues you noted in P0; let the team react. Often surfaces hidden disagreements.
- Framework walkthrough: emphasize that **P3 = IA First-Win** for standard Redesign, or **P3 = Metric Diagnosis** for Redesign+. ST clients want the artifact clarity.
- Stakeholder Map: **architecture decider** as a distinct row if it's not the same as the product decider.
- "Don't break" inventory should include **structural protections** explicitly: data model, permission model, API contracts.
- **Recap addition**: link to your P0 IA-observation notes.

**Pitfall specific to ST**: skipping the live product walk in the kickoff because "they already know it". They want to see *your* read.

### Appreciates Beauty

Beauty overlay always on.

**Delta vs Spine**

- During the live product walk-through, **flag visual debt observed at P0** — components, typography, density, motion issues. Be specific.
- Add **visual milestones** to cadence (same as Launch P1):
  - Existing visual system audit (week 1)
  - Moodboard / direction review (week 2)
  - UI direction review (week 4)
  - Hi-fi reviews
- Open a **placeholder Figma file** during the kickoff with two frames: "Current state — what we observed" and "Direction — TBD". Visible commitment.
- Stakeholder Map: visual decider as a distinct row.
- "Don't break" inventory should include **brand assets / visual elements** the client wants preserved (logo treatment, key colors, etc.).
- **Recap addition**: visual milestone dates as a separate block.

**Pitfall specific to Beauty**: running the live product walk as a functional audit only. Note one visual thing per surface walked.

### Direction / Story

**Delta vs Spine**

- During the live product walk-through, **flag brand-coherence debt** — voice shifts, tone mismatches, narrative incoherence. Show, don't tell.
- Open the call with the **story articulation** from the Calibrate Note. For Redesign + Direction: "Here's the story I heard you want this product to tell — and here's where the current product doesn't tell it yet."
- Framework walkthrough: lead with **narrative checkpoints** + positioning artifact.
- Stakeholder Map: positioning / brand decider as a distinct row. **Often a different person from the product decider in Redesign** — marketing, founder, comms lead.
- "Don't break" inventory should include **brand elements** that must not regress (voice traits, key messaging, brand promise).
- **Recap addition**: the story articulation as the opening line.

**Pitfall specific to Direction**: structural-audit framing when the live product is fine structurally but feels off narratively. Match the framing to what they actually want.

### Technical + Insight

**Delta vs Spine**

- During the live product walk-through, **cite data findings** alongside product observations. "On this screen you mentioned a 40% drop-off — let's walk it together."
- Framework walkthrough: emphasize **discovery share-back rhythm** and (if Redesign+) the metric-diagnosis spike.
- Stakeholder Map: **analytics / data owner** is a hard requirement, not optional. If they can't name one, escalate before P2.
- **Redesign+ candidacy is highest for Insight clients.** Lean into the flag at the kickoff — the team is often relieved when you take the metric problem seriously.
- "Don't break" inventory should include **measurement instrumentation** — don't lose existing analytics events.
- **Recap addition**: an "Open hypotheses to investigate in P2" section.

**Pitfall specific to Insight**: ruling out Redesign+ to "keep things simple". If the data supports it, run Redesign+.

---

## Problem-Statement Lens

### Positioning

- **Live product walk** focuses on first-10-second surfaces (landing, login, empty states, marketing touchpoints).
- **Cadence** adds a positioning review checkpoint (biweekly).
- **Stakeholder Map**: positioning decider explicit. Marketing / founder, distinct from product decider.
- **"Don't break"** must include positioning-related elements the client doesn't want changed (existing brand promise, key customer-facing messaging).
- **Pre-Read addition**: ask the client to bring 3 reference brands they want to sound like *now* (vs the brands they sounded like at launch).
- **Recap addition**: capture the positioning shift — from-state to to-state.

### Activation

- **Live product walk** focuses on **first-session experience.** Sign up fresh on the call if you can.
- **Cadence** adds an activation-checkpoint review where the first-session flow gets walked end-to-end.
- **Stakeholder Map**: data owner is critical (activation work requires drop-off data). If no analytics, flag Redesign+ candidacy strongly.
- **"Don't break"** must include **existing activation events / instrumentation** — don't lose the data you're using to diagnose.
- **Pre-Read addition**: ask the client to bring existing onboarding analytics if they have any.
- **Recap addition**: an "activation hypothesis" — what we think the broken step is.

### Usability / Conversion

> Strongest Redesign+ candidacy. Confirm or rule out at this kickoff.

- **Live product walk** focuses on the **specific funnel** the client referenced at P0. Walk all steps with the team.
- **Cadence** adds a **funnel review** slot — weekly during P3 if Redesign+.
- **Stakeholder Map**: data owner mandatory. Eng POC mandatory (instrumentation). Funnel owner (often marketing / growth) explicit.
- **"Don't break"** must include the **baseline conversion** — what the metric is *now* — so we can measure improvement, and so we don't accidentally degrade it before we fix it.
- **Pre-Read addition**: ask the client to share the funnel definition + recent analytics screenshots before the call.
- **Recap addition**: the funnel definition + baseline + target, locked. Often the most quoted-back artifact in the engagement.

---

## Deliverables

| # | Artifact | Format | Audience | Confirmation form |
|---|---|---|---|---|
| 1 | **Kickoff agenda + Pre-Read** | 1-pager — Notion page exported to **PDF** for email attachment. Includes "come ready to discuss what cannot change" prompt | Client-facing | Sent via Zoho Mail 48h ahead; acknowledgement requested |
| 2 | **Kickoff call** | Zoho Meeting (75–90 min, recorded) | Client-facing (sync) | Recording filed |
| 3 | **Calibrate Note read-back** | Spoken on the call (lifted from internal Calibrate Note); summarized in Recap email — includes structural-vs-surface classification + Redesign+ flag | Client-facing (verbal + written) | Captured in live notes; final form in Recap email |
| 4 | **Live product walk-through together** | Zoho Meeting share-screen, DM drives — recording is the artifact | Client-facing (sync) | Recording filed; hidden stakeholders / disagreements logged |
| 5 | **Stakeholder Map** | Notion table on Projects page (filled live) — includes "don't break" decider + data owner if Redesign+ | Client-facing | Client written ack via Notion comment or Recap-email reply |
| 6 | **"Don't break" inventory (seeded)** | Notion table on Projects page — top 5–10 items captured live (Flow / Metric / User cohort / Integration / Compliance) with decider per row | Client-facing | **Full inventory signed by client within 48h** of Recap (Notion sign-off block or email reply) |
| 7 | **Cadence agreement** | Notion table — includes release-cadence note + metric-review slot if Redesign+ | Client-facing | Captured in Recap; reply confirms |
| 8 | **Redesign+ track decision** | Notion section on Projects page + DB `Redesign+ Track` field + line in Recap | Client-facing | **Confirmed or ruled out, final at P1.** If confirmed, P3 metric-diagnosis spike scheduled (Zoho Meeting invite). |
| 9 | **Problem-statement re-confirmation (full team)** | Block in Recap + DB field | Client-facing | Recap reply |
| 10 | **Recap email** | Zoho Mail (≤4h after call) — Calibrate read-back, Stakeholder Map, Cadence, "Don't break" seed, Redesign+ decision, problem statement, next dates, asks | Client-facing | Client reply or thumbs-up within 24h |
| 11 | **P2 start date on calendar** | Zoho Meeting invite | Client-facing | Invite accepted |
| 12 | **IA observations (from P0) link** *(System Thinker variation)* | Notion link in Recap email | Client-facing | Recap reply |
| 13 | **Visual placeholder Figma file (2 frames: "Current state" + "Direction TBD")** *(Beauty overlay)* | Figma file — opened during the call | Client-facing | Access shared on the call |
| 14 | **Visual milestones track** *(Beauty overlay)* | Sub-block in Cadence (Notion) + dates in Recap | Client-facing | Recap reply |
| 15 | **Story articulation** *(Direction variation)* | Opening line of Recap email (lifted from Calibrate Note) | Client-facing | Recap reply |
| 16 | **Open hypotheses to investigate in P2** *(Insight variation)* | Sub-section in Recap | Client-facing | Recap reply |
| 17 | **Positioning shift (from-state → to-state)** *(Positioning lens)* | Sub-block in Recap | Client-facing | Recap reply |
| 18 | **Activation hypothesis (broken step)** *(Activation lens)* | Sub-block in Recap | Client-facing | Recap reply |
| 19 | **Funnel definition + baseline + target** *(Conversion lens)* | Notion table linked from Recap; carried from Calibrate Note + reviewed live | Client-facing | Captured in Recap; data owner sign-off on baseline |
| 20 | **Client-type confirmation locked** | Projects DB `Client Type` field | Internal | DM updates DB post-call (and post-diagnostic if P0 was "mixed") |

---

## Exit Gate (Redesign P1)

Move to P2 Requirements only when **every** box checks.

- [ ] **Stakeholder Map signed off** — product decider, eng POC, problem-statement decider, "don't break" decider, data owner (if Redesign+), visual decider (if Beauty), positioning decider (if Direction).
- [ ] **"Don't break" inventory seeded** — top 5–10 items captured at the kickoff; **full inventory signed by client within 48h of recap.**
- [ ] **Cadence agreed** — including release-cadence note and metric-review slot (if Redesign+).
- [ ] **Framework understood** — client can answer "what comes out of P2?" and "what does P3 look like for us?" (IA Audit vs Metric Diagnosis depending on Redesign+ track).
- [ ] **Live product walked together** with the full team.
- [ ] **Problem statement re-confirmed** by full team — against observed product reality.
- [ ] **Redesign+ track decision finalized** — confirmed or ruled out. If confirmed, metric-diagnosis spike scheduled. If ruled out, reasoning recorded.
- [ ] **Client-type confirmation locked.** If mixed at P0, P1 diagnostic resolves it.
- [ ] **Recap email sent within 4 hours and acknowledged.**
- [ ] **P2 start date on calendar.**

---

## Pitfalls

- **Skipping the live product walk because "we already saw it in P0".** P0 was with the founder. P1 is with the team. Different signals surface.
- **"Don't break" inventory as an afterthought.** If it's not seeded live in the kickoff, it won't get signed in 48h. Force the conversation.
- **Empty "don't break" list.** "Nothing's protected, do what you want" is not a gift — it's a scope-creep accelerant. Push until 5–10 items surface.
- **Skipping the Redesign+ track decision at P1.** Leaving the flag in limbo into P2 produces wrong P2 work. Decide.
- **Locking Redesign+ without verified analytics access.** "We'll get you access" is not access. If access isn't live by end of P1, flag — Redesign+ can't run without it.
- **Stakeholder Map missing the data owner** when Redesign+ is confirmed. Engagement will stall in P2.
- **Cadence that ignores the existing product's release schedule.** Two deploy collisions and trust erodes.
- **For ST: skipping the live product walk together.** They need to see your read.
- **For Beauty: no visual debt called out on the walk.** They wanted you to see it.
- **For Direction: structural framing when the work is narrative.**
- **For Insight: ruling out Redesign+ for simplicity.** Match the track to the evidence.
- **Letting the kickoff run past 90 min.** Trust falls off after that. Push the rest async.

---

## Next

→ [`redesign/p2-requirements.md`](./p2-requirements.md), carrying the Calibrate Note, Stakeholder Map, "Don't break" inventory, Cadence, and Redesign+ track confirmation.

---

### Technical reference

| | |
|---|---|
| Internal phase ID | P1 (Redesign) |
| Templates | Pre-Read 1-pager · Kickoff agenda · Stakeholder Map · "Don't break" inventory · Cadence template · Recap email |
| RACI | DM: A/R · CL: R (full team) · SD: C if assigned · Eng POC: R (mandatory) · Data owner: R if Redesign+ · F: I |
| Status in Projects DB | `Kickoff complete (Redesign)` after Recap acknowledged + "Don't break" sign-off received · Redesign+ track field updated |
| Carries forward | All P0 outputs · Stakeholder Map · "Don't break" inventory · Cadence · Redesign+ track decision (confirmed / ruled out) |
