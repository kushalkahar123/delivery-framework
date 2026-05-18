# Launch — P1 Kickoff

> The first live encounter with the full client team. Convene the working group, lock decision-makers, set rhythm, share the Calibrate Note back to the room. By the end, the client trusts the framework and there are no surprise stakeholders.

---

## Quick reference

| | |
|---|---|
| **Phase** | P1 — Kickoff (Launch) |
| **Duration** | 0.5 day — 60–90 min call + same-day recap |
| **You own this with** | Full client working group (they must attend); Senior Designer shadows if assigned |
| **Client touchpoint** | Sync — Zoho Meeting call + Recap email |
| **Inputs** | Calibrate Note from P0; intake summary; signed contract |
| **Output** | Stakeholder Map · Cadence agreement · Recap email acknowledged |
| **Goes before** | Launch P2 Requirements |

---

## Intent

Convert the (mostly-async, founder-only) Calibrate Note into a **team-acknowledged working agreement.** Establish trust in the craft-dc framework, name every decision-maker, and lock the cadence that will carry P2 → P3.

For Launch specifically: there's no live product in the room. The kickoff has to anchor on **intent and structure**, not on artifact reactions. That makes the Calibrate Note read-back and the framework walkthrough heavier than they would be in a Redesign kickoff.

---

## Common Spine

### 1. Pre-call prep (T-2 days)

- Re-read the Calibrate Note. Re-read the intake summary.
- Send the **agenda + Pre-Read** to the client 48h ahead. The Pre-Read is a 1-pager: what kickoff is for, what to come ready to discuss, who from their side should attend.
- Confirm in writing **who is attending** from the client side. If the founder is the only attendee and they have engineering/product reports, push back — get them in the room.
- Pull up the **Stakeholder Map template** and the **Cadence template** in Notion, ready to fill live.

### 2. Kickoff call (60–90 min, recorded)

State recording permission at the start. Run from a deck or shared Notion doc, not from memory.

**Agenda (90 min default; 60 min compressed)**

| Block | Time (90 / 60) | What happens |
|---|---|---|
| Welcome + roles around the room | 5 / 5 | Names, roles, what they own |
| **Calibrate Note read-back** | 10 / 10 | Read what you heard back to them, in your words. Let them react. This is the trust moment. |
| **Framework walkthrough** | 15 / 10 | How craft-dc P0 → P1 → P2 → P3 will run for *them*. Concrete artifacts at each phase, not abstract framework. |
| **Stakeholder mapping** | 15 / 10 | Fill the map live, names + decisions owned + RACI |
| **Cadence & comms** | 10 / 10 | Standup / review / sign-off rhythm. Lock specific times. |
| **Problem-statement re-confirmation** | 10 / 5 | With the full team in the room — not just the founder — re-confirm the problem statement. |
| **Workspace + access** | 5 / 5 | Figma + Notion + Zoho Cliq access verified live |
| **Open floor** | 10 / 5 | "What are you worried about going into this?" — last question of the call often surfaces the hidden fear |

If a block has to compress further, compress framework walkthrough and open floor. Never compress the Calibrate Note read-back or stakeholder mapping.

### 3. Stakeholder Map (filled live, finalized in Recap)

A Notion table the client can see and react to in real time. Don't ask "who's the decision-maker" — fill rows and let them correct you.

| Role on this engagement | Person (name) | Decisions owned | Reviews | Informed only |
|---|---|---|---|---|
| Primary product decider | | What ships, what doesn't | | |
| Eng POC | | Tech feasibility, instrumentation | | |
| Problem-statement decider | | (See lens) | | |
| Other reviewers | | What they review | | |

The **problem-statement decider** row is the one that gets forgotten. Make sure it's filled — often a different person than the product decider.

### 4. Cadence agreement

Lock specific times, not generalities. Examples:

- Standup — async in Cliq, Mon/Wed/Fri 10:00 IST
- Review — Thursdays 16:00 client time, Zoho Meeting
- Sign-off — written, in the Notion sign-off section, 24h SLA

If the client says "let's figure it out as we go" — push back. Sustained cadence is the single biggest driver of P2/P3 success.

### 5. Same-day Recap email (≤ 4 hours after call)

Send via Zoho Mail. Subject: `[Project] — Kickoff recap & working agreements`. Body:

```
WHAT WE HEARD (Calibrate Note read-back, in 3 lines)

CONFIRMED STAKEHOLDER MAP
[bullet list — name, role, what they decide]

CADENCE
[bullet list — standup, review, sign-off, with day + time]

PROBLEM STATEMENT (confirmed by full team)
[Positioning / Activation / Usability-Conversion] — [one-sentence frame]

WHAT HAPPENS NEXT
- P2 Requirements kicks off [date]
- Discovery doc draft to you by [date]
- P2 exit / P3 start by [date]

THINGS WE NEED FROM YOU
- [specific asks: PRD if not yet shared, dev intros, analytics access if relevant]

If anything here doesn't match what you heard, flag by EOD tomorrow.
```

### 6. Update Projects DB

`Kickoff complete` · Stakeholder Map link · Cadence link · P2 start date · client-type confirmation locked (or `mixed — escalated` if still unresolved after the diagnostic).

---

## Per-Client-Type Variations

### System Thinker

**Delta vs Spine**

- In the **framework walkthrough**, go into technical depth on what each phase outputs. "P2 produces a Requirements doc where every requirement traces to a module — here's an example from a past project." Show the artifact, don't describe it.
- Make sure the **eng POC** is in the room. If they're not, the kickoff is half-run; reschedule the second half with eng present.
- Stakeholder Map should include **who owns architecture decisions** as a distinct line. Sometimes that's the founder, often it's a CTO who wasn't on the sales call.
- During open floor, expect structural questions ("how do you handle X module's edge case?"). Have one or two structural anchors ready to discuss.
- **Recap addition**: link to the sample IA artifact you showed.

**Pitfall specific to ST**: walking the framework as a slide tour. They want the artifact, not the framework.

### Appreciates Beauty

Beauty overlay is always on. Even when the problem statement is Activation or Conversion, visuals must show up somewhere in the kickoff.

**Delta vs Spine**

- Add a **visual milestones track** to the cadence:
  - Moodboard direction review (week 2–3 typical)
  - UI direction review (week 4)
  - Hi-fi reviews (3 dates across P3)
- **Open a moodboard placeholder Figma file during the kickoff.** Even empty. Title it, share access. The act of opening it is the trust signal — they see you've already started thinking visually.
- In the framework walkthrough, lead with what visual artifact comes out of each phase, even if the primary artifact is functional.
- Stakeholder Map should include a **visual decider** line. Often the founder, sometimes a co-founder or design partner. If the visual decider and the product decider are different people, name both.
- **Recap addition**: visual milestone dates as a separate block, not buried in cadence.

**Pitfall specific to Beauty**: running a fully functional kickoff with no visual touchpoint. They leave wondering when the design starts.

### Direction / Story

**Delta vs Spine**

- **Open the call with the story articulation** from the Calibrate Note, not with the agenda. Read it back first, react, then move to agenda. The order signals you heard the story.
- In the framework walkthrough, lead with **narrative checkpoints**: positioning artifact date, voice & tone review date, narrative coherence checkpoint.
- Stakeholder Map should include a **positioning / brand decider** line. Often marketing or the founder, **rarely** the same person as the product decider. Name them explicitly.
- During cadence, add a "narrative sync" — a 15-min check-in (weekly or biweekly) just on whether the work is still telling the right story.
- **Recap addition**: the story articulation as the opening line of the recap.

**Pitfall specific to Direction**: writing a kickoff recap that reads like a project plan. Tell them the story they told you, then the project plan.

### Technical + Insight

**Delta vs Spine**

- In the framework walkthrough, lead with **research / audit checkpoints**: when discovery findings land, when hypotheses get validated, when teaching moments happen.
- Cite **one finding from their materials** in the first 5 minutes of the call. Same principle as P0 — engagement, not flattery.
- Stakeholder Map should include **who owns research / data access** as a distinct line — usually a PM or analyst, sometimes the founder. Without named data ownership, Insight delivery stalls.
- During cadence, include a "discovery share-back" — a recurring slot (weekly typical) where you bring findings to them. Insight clients want regular teaching, not one big reveal.
- **Recap addition**: an "Open hypotheses we'll investigate" section listing 2–3 things you've already flagged from their materials.

**Pitfall specific to Insight**: framing kickoff entirely around build deliverables. They want to know when research lands.

---

## Problem-Statement Lens

### Positioning

- **In the framework walkthrough**, emphasize when the **positioning artifact** lands (typically end of P2 or early P3). Show what it looks like.
- **In cadence**, add a positioning review checkpoint. Weekly is overkill; biweekly works.
- **Stakeholder Map**: the positioning decider is often marketing or founder, distinct from product decider. Confirm explicitly — "Who owns the positioning sign-off?" Don't infer.
- **Pre-Read addition**: ask the client to bring 3 reference brands they wish they sounded like.
- **Recap addition**: capture the 3 reference brands as the positioning anchor.

### Activation

- **In the framework walkthrough**, emphasize when the **first-session / onboarding flow** lands and gets reviewed.
- **In the room**: engineering POC is non-negotiable. Activation work is tightly coupled to instrumentation; designing without eng → unbuildable handoff. If eng can't attend, reschedule.
- **Cadence**: an activation-checkpoint review where the flow gets walked end-to-end with instrumentation overlaid.
- **Pre-Read addition**: ask the client to bring any existing user research, user interviews, or competitive activation studies.
- **Recap addition**: an "activation hypothesis" line — what's the first meaningful moment we're designing toward?

### Usability / Conversion

> For Launch this is a forward-looking conversion bet. There is no historical baseline.

- **In the framework walkthrough**, emphasize when the **conversion target** gets re-validated (P2 exit) and when instrumentation gets locked (P3 handoff).
- **In the room**: eng POC required (instrumentation). Often a marketing or growth lead too — they own the funnel definition.
- **Recap addition**: explicitly lock **the baseline number and the basis** the client is betting on. Carry this from the Calibrate Note. If the Calibrate Note flagged it as a top-3 risk, surface that flag in the recap.
- **Pre-Read addition**: ask the client to bring their funnel definition (steps, target conversion at each step) if they have one. If they don't, that's a P2 finding.

---

## Deliverables

| # | Artifact | Format | Audience | Confirmation form |
|---|---|---|---|---|
| 1 | **Kickoff agenda + Pre-Read** | 1-pager — built as Notion page, exported to **PDF** for email attachment | Client-facing | Sent via Zoho Mail 48h ahead; client acknowledgement requested in email |
| 2 | **Kickoff call** | Zoho Meeting — 60–90 min, recorded (recording saved to Notion project space) | Client-facing (sync) | Recording filed; attendance logged in DB |
| 3 | **Calibrate Note read-back** | Spoken on the call (lifted from internal Calibrate Note); summarized in Recap email | Client-facing (verbal + written) | Client reaction captured in live notes; final form in Recap email |
| 4 | **Stakeholder Map** | Notion table on Projects page (filled live during the call) | Client-facing | Client written ack via Notion comment or Recap-email reply |
| 5 | **Cadence agreement** | Notion table on Projects page (standup / review / sign-off, with day + time) | Client-facing | Captured in Recap email; client reply confirms |
| 6 | **Workspace + access verification** | Live on the call (Figma + Notion + Zoho Cliq) | Client-facing | Verified live; access state in DB |
| 7 | **Recap email** | Zoho Mail (≤4h after the call) — restates Calibrate Note read-back, Stakeholder Map, Cadence, problem statement, next dates, asks | Client-facing | Client reply or thumbs-up within 24h |
| 8 | **Problem-statement re-confirmation (full team)** | Block in Recap email + Projects DB field | Client-facing | Implicit in Recap email reply |
| 9 | **P2 start date on calendar** | Zoho Meeting invite (or Notion deadline) | Client-facing | Invite accepted |
| 10 | **Visual milestones track** *(Beauty overlay)* | Sub-block in Cadence (Notion) + dates in Recap email | Client-facing | Recap reply |
| 11 | **Visual placeholder Figma file** *(Beauty overlay)* | Figma file (titled, empty frames) — opened during the call | Client-facing | Access shared; client opens file |
| 12 | **Narrative checkpoints + positioning decider** *(Direction variation)* | Rows on Stakeholder Map + sub-block in Cadence | Client-facing | Recap reply |
| 13 | **Research / audit checkpoints** *(Insight variation)* | Sub-block in Cadence + "Open hypotheses to investigate" in Recap | Client-facing | Recap reply |
| 14 | **Sample IA artifact** *(System Thinker variation)* | Figma frame from a past Launch — link shown during framework walkthrough | Client-facing | Link added to Recap email |
| 15 | **Client-type confirmation locked** | Projects DB `Client Type` field | Internal | DM updates DB post-call |

---

## Exit Gate (Launch P1)

Move to P2 Requirements only when **every** box checks.

- [ ] **Stakeholder Map signed off** — product decider, eng POC, problem-statement-specific decider, visual decider (if Beauty), positioning decider (if Direction), data owner (if Insight). Names + decisions owned, not titles.
- [ ] **Cadence agreed** — specific days/times for standup, review, sign-off. No "we'll figure it out".
- [ ] **Framework understood** — client can answer "what comes out of P2?" in their own words. Verify by asking.
- [ ] **No surprise decision-makers** — anyone with veto power is named on the map. Probe explicitly: "Is there anyone we haven't named who could block sign-off?"
- [ ] **Problem statement re-confirmed** with the full team present. If it shifted from intake, document the shift in the Recap.
- [ ] **Client-type confirmation locked.** If P0 left it "mixed — pending P1", the P1 diagnostic resolves it. If still unresolved → escalate before P2.
- [ ] **Recap email sent within 4 hours and acknowledged** (reply or thumbs-up).
- [ ] **P2 start date on calendar.**

---

## Pitfalls

- **Skipping the Calibrate Note read-back to save time.** It's the trust moment. Skip it and the client thinks you never heard them in P0.
- **Stakeholder Map as titles instead of names + decisions owned.** "Product team reviews" is not a stakeholder map row. "Priya (Head of Product) signs off on scope changes" is.
- **Letting the call become a re-pitch of the framework.** The contract is signed. Kickoff is about working agreements, not selling.
- **Locking cadence the client can't sustain.** Daily standups on a 3-person founder team will die in week 2. Match cadence to client capacity.
- **Missing the problem-statement-specific decider.** Positioning decider, activation decider, conversion-target owner — these are different people from the product decider, and they show up in P2 with veto power if you don't catch them now.
- **For Beauty: no visual touchpoint in the call.** Single biggest trust loss in P1.
- **For Direction: opening with framework instead of story.** Cold start.
- **For Insight: framing kickoff as build-only.** Add the discovery share-back rhythm.
- **For ST: walking framework slides instead of showing artifacts.** Show, don't tell.
- **Running 90 minutes when the room only has 60.** Compress framework walkthrough and open floor. Never compress Calibrate read-back or stakeholder mapping.

---

## Next

→ [`launch/p2-requirements.md`](./p2-requirements.md), carrying the Calibrate Note, Stakeholder Map, and Cadence agreement.

---

### Technical reference

| | |
|---|---|
| Internal phase ID | P1 (Launch) |
| Templates | Pre-Read 1-pager · Kickoff agenda · Stakeholder Map · Cadence template · Recap email |
| RACI | DM: A/R · CL: R (attends in full) · SD: C if assigned · F: I |
| Status in Projects DB | `Kickoff complete` after Recap acknowledged |
| Carries forward | Calibrate Note · Stakeholder Map · Cadence · Client-type confirmation locked |
