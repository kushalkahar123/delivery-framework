# Launch — P0 Calibrate

> Pre-engagement triage for a Launch. Not a sales call. Not Requirements. A one-page sanity check that this engagement should run, and how. Output: a signed Calibrate Note and a Proceed / Pause decision.

---

## Quick reference

| | |
|---|---|
| **Phase** | P0 — Calibrate (Launch) |
| **Duration** | 1–2 days, mostly async, plus a 30-min Founder Intent Call |
| **You own this with** | Just you; Founder consulted; Senior Designer not yet engaged |
| **Client touchpoint** | One 30-min call + one note delivery |
| **Inputs** | Intake summary (`00-intake-routing.md`), inbound materials, contract signed |
| **Output** | 1-page Calibrate Note; Proceed / Pause decision |
| **Goes before** | Launch P1 Kickoff |

---

## Intent

Confirm founder intent, scope hypothesis, and risks **before** committing to Kickoff. Calibrate locks *intent*, not scope. Scope lives in P2.

For Launch specifically: verify there is no hidden live product, no metric crisis disguised as a Launch, and that the engagement is shaped right before anyone else's calendar is touched.

---

## Common Spine

The shared body — applies across all 4 client types and all 3 problem statements. Work through this first, then layer the variation and the lens.

### 1. Read the inbound materials

Before the call. ~2–3 hours.

- Re-read the **Intake Summary** from `00-intake-routing.md` — track, problem statement, client-type hypothesis, Beauty overlay flag.
- Read every artifact the client sent: PRD, brief, references, decks, problem-statement form.
- Note three things in a scratch doc:
  - **Intent signals** — what they actually want, in their words.
  - **Scope hints** — what they imply is in / out (often unspoken).
  - **Risk signals** — fuzziness, contradictions, unrealistic timelines, missing decision-makers.

### 2. Founder Intent Call (30 min)

Sync call, recorded. The only client touchpoint in P0.

Cover, in order:

1. **What are you building?** Let them talk for 5 minutes uninterrupted. Don't lead.
2. **Why now?** Surfaces timing pressure, market window, internal politics.
3. **Who's it for?** Primary user in one sentence. Push for specificity.
4. **What does done look like?** Their definition, not yours. Ship date? First user? Demo? Funding milestone?
5. **What could blow this up?** Their version of the risks. Compare to your scratch doc afterward.

Don't run the full Kickoff Question Bank here. That's P1. Calibrate is 5 questions.

### 3. Scope hypothesis (written)

Same day as the call, while it's fresh. ~30 min.

A three-column write-up. Bullets, not paragraphs.

| In | Out | Unclear |
|---|---|---|
| What is in scope based on what they said | What is explicitly out of scope | What you can't tell yet — surfaces P2 work |

This is a *hypothesis*. P2 freezes it. Calibrate just gets it on paper.

### 4. Risk surface (top 3)

The three things most likely to blow the engagement up. Force-rank. Examples by category:

- **Timeline** — unrealistic ship date, marketing window, demo locked.
- **Decision-maker access** — founder is the only signer, founder is travelling, founder is checked out, board involvement unclear.
- **Scope creep** — adjacent products, "and also a marketing site", undefined modules.
- **Fuzzy PMF** — they don't know who the user is, problem isn't validated, no design partners.
- **Misclassification risk** — signals are mixed; might not be the type sales said.

Don't list five. Force three. If you can't cut, the engagement isn't shaped well enough yet — that *is* a risk.

### 5. Track sanity check

Re-confirm Launch is genuinely the right track. Specifically:

- [ ] **No live product.** Not even a throwaway with real users. If there's a live product, route to `redesign/p0-calibrate.md` and re-do P0.
- [ ] **No metric crisis disguised as Launch.** "We launched a v1 and it didn't convert, now we're rebuilding" is Redesign+, not Launch.
- [ ] **Net-new build.** Architecture decisions are still open.

If any box doesn't check — pause Calibrate, escalate to Founder, re-route.

### 6. Output — the Calibrate Note (1 page)

A one-page Notion doc. Lives in the Projects DB row. Shared with the Founder, not the client (the client has already had the call; the Note is internal).

```
Calibrate Note — [Project Name]
Date · DM · Track: Launch · Problem statement · Client-type hypothesis

1. Founder intent (3 sentences)
   What they're building, for whom, why now.

2. Scope hypothesis
   In · Out · Unclear (3 columns, bullets)

3. Top 3 risks
   Each with: risk · why it matters · early-warning signal

4. Track confirmation
   Launch confirmed. (Or: re-routed because of [reason].)

5. Problem statement re-confirmation
   [Positioning / Activation / Usability-Conversion] — confirmed / shifted to [X]

6. Client-type confirmation
   [Type] — confirmed / mixed-pending-P1 / re-classified to [X]

7. Decision: Proceed to P1 / Pause / Escalate
   One-sentence rationale.
```

The Note is the proceed/pause artifact. No Note, no Kickoff.

---

## Per-Client-Type Variations

The Common Spine carries ~80% of the work. Layer the variation on top — it adjusts how you read inbound, how you run the Founder Intent Call, and what gets added to the Calibrate Note.

### System Thinker

The hidden fear: *"Can this agency structure my product correctly?"*

**Delta vs Spine**

- **Read the PRD *before* the call.** Don't skim. They will know. Skipping it = lose them on call 1.
- Come to the call with **structural questions** prepared: modules, scale, dependencies, data flows. Two or three is enough — you're signaling, not interrogating.
- Open the call by referencing **one PRD section by name** within the first three turns. ("Section 3.2 on the permissions model — wanted to ask about…")
- During the 5 questions, listen for whether they speak in flows / modules / scale or in moods / references. Confirms or flags the classification.
- **Calibrate Note addition**: a "PRD anchors" sub-bullet under Scope Hypothesis — list the PRD sections that map to in-scope work. Quote section numbers.

**Pitfall specific to ST**: treating the PRD as background reading. It's the centerpiece. The PRD *is* their first signal of you.

### Appreciates Beauty

The hidden fear: *"Will this look the way I imagined?"*

**Beauty overlay is always on** for this type, even when the problem statement is Activation or Conversion. They will judge you in P0 partly on whether you noticed the visual layer.

**Delta vs Spine**

- **Read their reference deck before the call.** If they didn't send one, ask for it before the call — politely, framed as "want to come prepared to react to references".
- **Open their references on the call.** Share-screen them. React within the first 10 minutes. Specific reactions ("the typography rhythm here is doing X"), not generic ones ("nice").
- The 5 questions stay the same, but listen for **aesthetic anchors**: which competitors do they think look right? Which look wrong? What feeling do they want?
- **Calibrate Note addition**: a "Visual direction signals" subsection alongside Founder Intent. Capture 2–3 anchor references + 1-line reaction to each.

**Pitfall specific to Beauty**: running Calibrate as if visuals are a P3 concern. They aren't, for Beauty. The visual conversation starts now, even if the deliverables come later.

### Direction / Story

The hidden fear: *"Will this agency get my story?"*

**Delta vs Spine**

- Spend roughly **1/3 of the call on the narrative**: what story does this product tell? Why this? Why now? Why them?
- Push them to **articulate positioning before features**. If they jump to features, gently redirect: "Before the *what* — say the *why* in one sentence."
- During the 5 questions, the "Why now?" answer is where most of the gold surfaces. Slow it down. Probe twice.
- **Calibrate Note addition**: the Founder Intent section **leads with the story articulation**, not the spec. Spec follows in Scope Hypothesis. The order matters — it shows them you heard the story first.

**Pitfall specific to Direction**: writing a Calibrate Note that reads like a tech spec. They'll read it and feel unseen. Story first, scope second.

### Technical + Insight

The hidden fear: *"Will this agency teach me something I don't know?"*

**Delta vs Spine**

- Before the call, **ask what research / audits / data they've already done**. Read whatever they send. Treat it critically.
- **Cite one finding from their materials by the second turn of the call.** Not flattery — observation. ("Your churn cohort chart — the dip at week 6 is interesting, what was happening there?")
- During the 5 questions, listen for what they want you to *discover*, not just *build*. The work is partly investigative.
- **Calibrate Note addition**: a "What they've already discovered" section. List their findings + your initial read on each (validate / push back / want to dig deeper).

**Pitfall specific to Insight**: nodding along to their data without engaging with it. They wanted critical engagement. Silence reads as you didn't read it.

---

## Problem-Statement Lens

Layer the lens on top of the variation. The lens shifts which questions matter most in the Founder Intent Call and which risks dominate the Risk Surface.

### Positioning

> The product (planned, for Launch) needs to land with a defined audience and say the right thing.

- **Probe in the call**: *"What three words should land when someone visits day 1?"* If they can't answer, the positioning isn't formed — that *is* the work, but it's a flag.
- Also probe: *"Who is the audience, in one sentence?"* Audience precedes message. No audience = no positioning.
- **Risk specific to Positioning at Launch**: doing positioning work without a defined audience. Force the audience question before the message question.
- **Calibrate Note addition**: under Scope Hypothesis, an explicit "Audience hypothesis" line — single sentence.

### Activation

> Users (future, for Launch) need to reach a first meaningful moment. Onboarding / first-session is the unit of work.

- **Probe in the call**: *"What is the first 30 days a user spends with this product? Walk it through hour by hour."* If they can't, that's the gap.
- Also probe: *"What hypothesized motivation brings a user to this product?"* No motivation hypothesis = no activation design.
- **Risk specific to Activation at Launch**: solving onboarding before there's PMF signal. Launch + Activation means designing onboarding for a user you haven't met yet — name that explicitly.
- **Calibrate Note addition**: under Scope Hypothesis, a "First-30-day hypothesis" line.

### Usability / Conversion

> For Launch this is a **forward-looking conversion bet** — there is no historical baseline.

- **Probe in the call**: *"What's the conversion metric, and what's the baseline you're betting on?"* Push for a number. "We'll figure it out" is not an answer.
- Also probe: *"What's the basis for that number?"* — competitor benchmark? Spreadsheet model? Hope?
- **Risk specific to Conversion at Launch**: committing to a numeric target on an unvalidated product. Surface this as a top-3 risk if the number isn't grounded.
- **Calibrate Note addition**: under Top 3 Risks, an explicit "Numeric target on unvalidated product" risk if applicable.

---

## Deliverables

Every artifact P0 produces, mapped to format, audience, and the form confirmation takes. The Exit Gate below is the sign-off checklist against this table.

| # | Artifact | Format | Audience | Confirmation form |
|---|---|---|---|---|
| 1 | **Founder Intent Call recording** | Zoho Meeting recording (saved to Notion project space) | Internal | Recording filed; transcript optional |
| 2 | **Scratch notes from inbound read** | Notion sub-page on the project row | Internal | DM-only |
| 3 | **Calibrate Note (1-pager)** | Notion 1-pager in Projects DB row (all 7 sections: Founder intent, Scope hypothesis, Top 3 risks, Track confirmation, Problem statement re-confirmation, Client-type confirmation, Decision) | Internal (DM owns; Founder consulted) | Founder ack via Cliq or Notion comment; no client review |
| 4 | **Scope hypothesis (in/out/unclear)** | Section 2 inside the Calibrate Note (Notion table) | Internal | Implicit in Calibrate Note ack |
| 5 | **Top 3 risks with early-warning signals** | Section 3 inside the Calibrate Note | Internal | Implicit in Calibrate Note ack |
| 6 | **Track confirmation (Launch)** | Section 4 inside the Calibrate Note + Projects DB `Track` field | Internal | DB field set; banner in Calibrate Note |
| 7 | **Problem statement re-confirmation** | Section 5 inside the Calibrate Note + Projects DB `Problem Statement` field | Internal | DB field set |
| 8 | **Client-type confirmation** | Section 6 inside the Calibrate Note + Projects DB `Client Type` field (or `mixed — pending P1`) | Internal | DB field set |
| 9 | **Visual direction signals** *(Beauty overlay)* | Sub-section in Calibrate Note + 2–3 reference image thumbnails embedded | Internal | Embedded in Note |
| 10 | **PRD anchors** *(System Thinker variation)* | Sub-bullet in Calibrate Note Section 2; quotes PRD section numbers | Internal | Embedded in Note |
| 11 | **"What they've already discovered"** *(Insight variation)* | Sub-section in Calibrate Note | Internal | Embedded in Note |
| 12 | **Proceed / Pause / Escalate decision** | Section 7 inside Calibrate Note; mirrored in Projects DB `P0 Decision` field | Internal | DM + Founder verbal/written ack |

P0 has **no client-facing deliverable.** The client has had the Founder Intent Call; the next thing they receive is the P1 Kickoff invite + Pre-Read.

---

## Exit Gate (Launch)

Move to P1 Kickoff only when **every** box checks. Launch gates are looser than Redesign gates on current-state context (there is none) and tighter on intent articulation (there's nothing else to anchor on).

- [ ] **Founder vision in 3 sentences, written.** Lives in Calibrate Note section 1.
- [ ] **Scope hypothesis** (in / out / unclear), written in 3 columns.
- [ ] **Top 3 risks named** with early-warning signals.
- [ ] **No live product** confirmed (or only throwaway MVP with no real users). Verified, not assumed.
- [ ] **Client type classified** — or flagged "mixed — pending P1" with both candidates named.
- [ ] **Problem statement re-confirmed.** If shifted from intake, document the shift.
- [ ] **Beauty overlay status confirmed** (always on for Beauty clients; sometimes on for others — note in the Calibrate Note).
- [ ] **Decision recorded**: Proceed to P1 / Pause / Escalate. One-sentence rationale.
- [ ] **Calibrate Note saved** to the Projects DB row.

If any box doesn't check, you are not done with P0. Don't open P1.

---

## Pitfalls

Common failure modes specific to Launch P0.

- **Treating Calibrate as a sales call.** It's not. The contract is signed. This is triage — proceed / pause / escalate. Don't sell, don't pitch, don't reassure. Listen and write.
- **Skipping the Risk Surface because the call felt good.** A warm call is a signal, not a clearance. Force the top-3 list.
- **Committing to scope in the call.** Scope lives in P2. Calibrate locks *intent*. If they push for scope numbers, say: "I'll come back to you with a scope view at end of Week 2 — Kickoff is for getting the team aligned first."
- **Misclassifying client type.** The most common error: reading Beauty as System Thinker because they sent a deck. The deck was *references*, not specs. Look at what's in the deck — moodboards or modules?
- **For Beauty clients: not opening their reference deck on the call.** Single biggest trust loss with Beauty in P0.
- **For Insight clients: not citing their data back to them.** Reads as you didn't engage.
- **Missing the Launch sanity check.** A "Launch" with a live product is the most expensive routing error in craft-dc — it costs you a full re-do of P0–P2. Run the check explicitly, even when it feels obvious.
- **Calibrate Note that's two pages.** It's a one-pager. If it's longer, you're doing P1's job.

---

## Next

→ [`launch/p1-kickoff.md`](./p1-kickoff.md), carrying the Calibrate Note.

---

### Technical reference

| | |
|---|---|
| Internal phase ID | P0 (Launch) |
| Templates | Calibrate Note (1-page Notion) · 5-question Founder Intent Call script |
| RACI | DM: A/R · F: C · SD: — · CL: R (one 30-min call) |
| Status in Projects DB | `Calibrating — Launch` |
| Carries forward | Calibrate Note · Intake Summary · Client-type confirmation (or "mixed — pending P1") |
