# craft-dc — Intake Routing

> Read this **before P0**, every new inbound. Five minutes here determines which of the 6 process docs you run, which client-type layer you read, and which problem-statement lens applies.

The output of this doc is a triple:

```
(track, problem statement, client-type hypothesis)
```

Once you have the triple, route to the matching P0 doc and start the phase.

---

## Step 1 — Confirm the problem statement

Every inbound that reaches craft-dc has been qualified into exactly one of three problem statements at the sales stage. If the sales handoff doesn't name one — **stop, escalate to the Founder.** Don't guess.

| Problem statement | What it means | Typical client phrasing |
|---|---|---|
| **Product Positioning** | The product (live or planned) isn't landing with the right audience or saying the right thing. | "Nobody gets what we do." · "We need to nail the message before we ship more." · "Our audience is wrong." |
| **User Activation** | Users arrive but don't reach the first meaningful moment. Onboarding / first-session is broken or undefined. | "People sign up and never come back." · "First-week retention is dead." · "I don't know what 'aha' looks like for us." |
| **Usability / Conversion** | A specific flow or funnel is leaking. Or, for Launch, a forward bet on a conversion metric. | "Checkout converts at 1.2%." · "Our funnel breaks at step 3." · "I need this flow to convert." |

**Re-confirm on the inbound qualification doc** before opening P0. The problem statement carries through every phase as a lens — getting it wrong at intake means re-doing P0–P2.

---

## Step 2 — Triage the track

Walk this decision sequentially.

```
1. Is there a live product (any version, any user base)?
   ├─ NO  → Launch
   └─ YES → continue
2. Is the live product a throwaway MVP / internal prototype with no real users?
   ├─ YES → Launch (treat as net-new)
   └─ NO  → continue
3. Does the client reference a specific broken metric repeatedly, AND do they have analytics?
   ├─ YES → Redesign+ candidate (route to Redesign doc; carry the flag into P0)
   └─ NO  → Redesign
```

### Track edge cases

| Situation | Route |
|---|---|
| Client says "redesign" but there's no live product | Launch. Their "redesign" is a re-spec. |
| Client says "launch" but they have a working v1 with paying users | Redesign. Sales misread it. Flag to Founder. |
| Live product exists but client wants a parallel new product / new vertical | Treat the new product as Launch. Note the live product as adjacent context. |
| Two distinct asks (e.g., "fix onboarding AND build the new dashboard") | Escalate. Don't bundle. Pick one as the engagement; the other is post-engagement. |
| Client has analytics + a broken metric but the fix is full-product overhaul, not surgical | Redesign, not Redesign+. Redesign+ is for surgical metric work. |
| Migration / platform port with no design change | Out of scope for craft-dc. Escalate. |

### Redesign+ flag at intake

If step 3 returns "YES" — note **Redesign+ candidate** in the inbound row. This is a *flag*, not a commitment. The flag is:

- Re-evaluated at the Redesign P0 exit gate (live product walked, structural-vs-surface debt classified).
- Confirmed or ruled out at the Redesign P2 exit gate.
- Only fully forks the engagement at P3 (Metric Diagnosis instead of IA Audit).

Across P0–P2 you stay in the Redesign doc with the Redesign+ callouts active.

---

## Step 3 — Client-type signal scan

Lift the cheatsheet from `craft-v2/core/00-classification.md` and run it against the inbound materials + sales notes. Find the row where ≥3 signals match.

| Type | Strongest tells | Hidden fear | First-win artifact |
|---|---|---|---|
| **System Thinker** | Sends PRD / spec ahead of call · Speaks in flows, modules, scale · Technical founder / CTO · Asks "how does X scale" · Treats design as structural before aesthetic | *"Can this agency structure my product correctly?"* | **Track-dependent** — Launch: full IA · Redesign: current-state IA audit + revised IA · Redesign+: metric diagnosis + engagement architecture |
| **Appreciates Beauty** | Shares references first · Talks "feel", "polish", taste · Non-technical · Emotional language about aesthetics · "Make it look like X but better" | *"Will this look the way I imagined?"* | Moodboard / visual direction |
| **Direction / Story** | Talks brand, positioning, narrative, coherence · Has a story they want told · Cares about voice and meaning · Often founder-led pre-product | *"Will this agency get my story?"* | Positioning artifact |
| **Technical + Insight** | Technical, but asks for research, data, audits · Values discovery · "What did you find?" · Wants you to teach them something | *"Will this agency teach me something I don't know?"* | Audit / insight finding |

> **Note on Appreciates Beauty under craft-dc.** Unlike craft-v2, Beauty stays in scope. They still arrive with one of the 3 problem statements, but they always carry a parallel look-and-feel concern. Every craft-dc doc has a Beauty variation with the visual overlay baked in — see the Per-Client-Type Variations sections.

### When signals are mixed

If two rows tie, or no row hits ≥3, **mark the client-type hypothesis as "mixed — pending P1"** and proceed to P0 with both candidates noted. Run the 5-question diagnostic (Section 2 of `craft-v2/core/00-classification.md`) during the Kickoff. Confirm the type by the P1 exit gate at the latest.

If still mixed after P1 diagnostic → escalate to Founder.

---

## Step 4 — Route

Take the triple `(track, problem statement, client-type hypothesis)` and route:

| Track | Doc |
|---|---|
| **Launch** | [`launch/p0-calibrate.md`](./launch/p0-calibrate.md) |
| **Redesign** | [`redesign/p0-calibrate.md`](./redesign/p0-calibrate.md) |
| **Redesign+ candidate** | [`redesign/p0-calibrate.md`](./redesign/p0-calibrate.md) — carry the flag |

Within the doc:

1. Read the **Common Spine** first.
2. Jump to your **client-type variation**.
3. Read the **problem-statement lens** for your problem statement.
4. Work the **Exit Gate** when ready to leave the phase.

---

## Output — Intake summary

**Format:** Notion — row in Projects DB (one row per engagement). All fields below are columns/sub-fields on that row.
**Audience:** Internal (DM owns; Founder consulted; Sales handoff visible).
**Confirmation:** DM sets the row to status `Routed — P0 ready`; Founder ack via Cliq if escalation triggers were considered.

```
Intake summary

Client:                 [name]
Engagement:             [project name]
Date of intake:         [YYYY-MM-DD]

Track:                  Launch / Redesign / Redesign+ candidate
Problem statement:      Positioning / Activation / Usability-Conversion
Client-type hypothesis: System Thinker / Appreciates Beauty /
                        Direction-Story / Technical-Insight / mixed-pending-P1

Beauty overlay?         Yes / No   (independent of primary type — Beauty
                                    clients always Yes; others sometimes Yes)

Redesign+ flag:         (Redesign only) raised / not raised / N/A
Inbound materials:      [list — PRD, references, deck, analytics access, etc.]
Sales notes link:       [link]

Routed to:              craft-dc/[track]/p0-calibrate.md
```

---

## Pitfalls at intake

- **Routing on what the client called it** instead of what's in front of you. "Redesign" with no live product = Launch.
- **Skipping problem-statement re-confirmation.** Sales sometimes captures a stale or aspirational problem statement. If P0 surfaces a different one — that's a P0 finding, not a routing error.
- **Locking the client-type hypothesis too early.** If signals are mixed, say so. The P1 diagnostic exists for this.
- **Forgetting the Redesign+ flag once raised.** It travels with the engagement; check it every exit gate until P2.
- **Bundling two engagements.** A "redesign and also launch the new thing" is two engagements. Don't route as one.

---

## When to escalate before P0

| Trigger | Action |
|---|---|
| Sales handoff has no problem statement | Escalate — do not pick one for them. |
| Track is genuinely ambiguous after Step 2 (e.g., paying users + parallel net-new product) | Escalate. Founder picks. |
| Client-type signals fully contradict each other (e.g., sent PRD AND insists on moodboard-first) | Note as mixed, escalate if you can't run P1 to resolve. |
| Inbound is a category craft-dc doesn't model (pure brand, pure dev-shop work, migration-only) | Escalate. craft-dc isn't the framework. |

Full escalation rules in [`craft-v2/shared/15-escalation.md`](../craft-v2/shared/15-escalation.md).

---

## Next

→ The P0 Calibrate doc for your track. Carry the Intake Summary in.
