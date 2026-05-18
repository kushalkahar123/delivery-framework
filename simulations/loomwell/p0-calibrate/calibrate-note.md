# Calibrate Note — Loomwell

> Format: Notion 1-pager, lives as a sub-page of the Projects DB row.
> Authored: Kushal, drafted 2026-04-25, locked 2026-04-27 after Founder ack via Cliq.
> Audience: **Internal.** Shared read-only with Priya as a courtesy, not for sign-off.
> Confirmation: Founder (Devina) ack via Cliq — see `founder-consultation.md`.

---

## §1 — Founder intent (3 sentences)

Priya wants Loomwell to **stop reading like a 2022 Notion alternative and start reading like a 2026 pitching tool for senior creatives** — the audience the product actually serves now. What's changing: the surfaces (marketing site, onboarding, microcopy, IA, empty states) must tell the new story coherently; the product itself stays. Why now: the user base shifted under Loomwell over the past 18 months from junior designers building portfolios to mid-career creatives narrating their work for pitches — and none of the surfaces have caught up.

## §2 — Live product — what we saw

Walked the live product with Priya (recording filed, 24 Apr, 58 min). Five surfaces audited: marketing site, signup, empty state in editor, settings, pricing page. Two real case studies (Anand, Sumi) reviewed for product-at-its-best comparison.

**Brand coherence observations** *(DS variation)*:

- **Homepage hero** says *"A faster, cleaner home for your case studies"* — generic SaaS framing. Voice is mid-2010s utility, not 2026 narrative.
- **Second fold** says *"Built for designers"* — narrows audience but to the wrong audience. Real users are mid-career multi-disciplinary creatives.
- **Empty state** says *"Create your first doc"* — *doc*. The product is about case studies as stories; the empty state uses the most Notion-coded word possible.
- **Settings** uses *"Workspace name"* — Notion-era vocabulary.
- **Pricing** lists features (storage, custom domain) instead of outcomes (pitches won, narratives told).

**Voice today reads as: utility SaaS / Notion-adjacent / faceless.**
**Voice should read as: opinionated, narrative, written-for-grownups.**

**First-10-seconds observation per primary surface** *(Positioning lens)*:

| Surface | What a new visitor walks away with in 10s | What they should walk away with |
|---|---|---|
| Homepage (`/`) | "It's a portfolio tool. Built for designers." | "It's how senior creatives turn their work into a story that wins them the next role." |
| Empty state (`/app/new`) | "Make a doc." | "Here's what a Loomwell case study looks like — now write yours." |
| Pricing (`/pricing`) | "$ for storage and custom domains." | "$ for the outcome — pitches landed, narratives that move." |

**Structural observations** (supporting, not headline): no "Who this is for" page; no marketing-site surface for the showcase case studies (Anand, Sumi); onboarding offers no exemplar before the blank editor.

## §3 — Debt classification

| Category | Severity | Examples observed |
|---|---|---|
| **Brand-coherence** *(DS-distinct category)* | **Heavy** | Hero copy, second-fold audience framing, empty-state copy, settings vocabulary, pricing framing |
| **Structural** | Moderate | Marketing IA lacks "Why Loomwell" / "Who for"; showcase case studies invisible to new visitors; onboarding has no exemplar surface |
| **Surface (visual)** | Light | Type system, palette, layout all clean. Not the bottleneck. |

**Ratio: 60 brand-coherence / 35 structural / 5 surface.** This is **not** a structural-vs-surface engagement — it's a brand-coherence engagement with structural support work. Naming it explicitly so the framing doesn't slip back to "IA audit + visual refresh."

## §4 — Scope hypothesis

| In | Out (protected) | Unclear (P1/P2 to resolve) |
|---|---|---|
| Marketing site narrative + IA | Case-study editor (any internals) | Whether onboarding flow needs structural change or copy-only |
| Onboarding voice + exemplar surface | Reading experience for case-study readers | Whether pricing page is in-scope as positioning surface or out as commercial |
| Empty states + microcopy across product | Custom domain feature | Whether Marcus's pillar framework is *input* (we work from it) or *deliverable* (we produce one) |
| Settings / account voice | Stripe billing | |
| Pricing page narrative *(tentative)* | Wordmark + palette (separate Priya/Marcus project) | |
| | Product name "Loomwell" | |

## §5 — Top 3 risks (with early-warning signals)

1. **Marcus's pillar framework pre-exists in half-form and we end up producing parallel work that doesn't merge.**
   - *Early warning:* he arrives at Kickoff with a deck he wants to walk through; or, our Requirements Doc and his deck disagree on a pillar.
   - *Mitigation:* Stakeholder Map agenda item #1 at Kickoff — "where does Marcus's work end and ours begin?" Made explicit per Devina's note.

2. **Priya emotionally attached to "Built for designers" framing despite knowing it's wrong.** ★ Redesign-specific risk.
   - *Early warning:* she defends the line when we propose to remove it at P2; or, signs off but reverts post-launch.
   - *Mitigation:* validate the audience shift with a target-user reader test at P2 so the data (qualitative) — not Kushal — is what tells her.

3. **Scope creep into brand-system refresh (wordmark, palette).**
   - *Early warning:* moodboarding language enters the Kickoff; Marcus opens visual references.
   - *Mitigation:* Out column already lists it; re-state at P1 and P2 exit gates.

## §6 — Metric context

- **Crisis?** No. Retention is good (Priya's claim, Stripe confirms paying users persist). NPS reportedly very high. Acquisition is the soft spot; can't quantify without analytics.
- **Specific broken metric?** Not named. Priya's framing is qualitative ("they don't get what we are in the first ten seconds").
- **Analytics verified?** **No analytics.** Confirmed on call (twice) and by inspection (no analytics script on loomwell.studio). Stripe + Tally only.
- **Drop-off point mapped?** No — no instrumentation.

**Implication for success metric (per Devina consult):** P2 success metric will be a **qualitative pass/fail**: *"4 of 5 unprompted target-user readers correctly state product audience + value within 10 seconds of landing on the redesigned homepage."* Method: reader-test protocol run by DC at P2 baseline and post-P3 delivery. Trade-off: cannot claim conversion-rate lift. Priya accepted this on call.

## §7 — Redesign+ flag

**Ruled out.** Criteria check:

| Criterion | Met? |
|---|---|
| Client references a specific broken metric repeatedly | ✗ |
| Client has analytics access they can share | ✗ |
| Scope is surgical (one flow/funnel/metric) | ✗ |
| Live product walk surfaced clear drop-off point | ✗ (uninstrumented) |

**0 of 4.** Ruled out cleanly. Will not re-evaluate at P1 or P2 — recorded as ruled-out, not deferred.

## §8 — Track confirmation

**Redesign.** Live product since 2022, real revenue, real users, no migration. Not stealth-Launch; not Redesign+. Standard Redesign track.

## §9 — Problem statement re-confirmation

**Sales tagged:** Product Positioning.
**P0 observed reality:** Confirmed Product Positioning. Priya's framing on call ("the surfaces don't tell the right story; first ten seconds is wrong") and the live product walk (audience-framing copy mismatch, empty-state copy, IA gap for positioning surfaces) align cleanly with the Positioning lens. Not Activation (people who get past the homepage activate fine — Priya's claim, retention supports). Not Usability/Conversion (no specific flow leak named; engagement isn't surgical).

## §10 — Client-type confirmation

**Direction / Story.** Confirmed. Signals from call: narrative-first framing throughout; "story" used as the load-bearing word; references brands by voice/narrative (W+K, Mira write-up) not visual aesthetic; defers visual decisions to Marcus; cares about microcopy. No System Thinker tells (no PRD, no module/scale talk). No Beauty tells (no visual references, no aesthetic emotional language). Some Insight tells (curious, references our writing) but soft.

**Beauty overlay?** No. Visual style is protected, not redesigned. Visual taste delegated to Marcus.

## §11 — What's next

- **2026-04-28 (Tue):** Share this note with Priya read-only via Notion link in Zoho Mail.
- **2026-04-29 (Wed):** Send Kickoff Pre-Read (PDF + Notion link) for Fri 1 May Kickoff. Pre-Read asks Priya to bring **3 reference brands she wants to sound like now** *(Positioning lens addition)* — vs the brands she sounded like at launch.
- **2026-04-29 (Wed):** Confirm Marcus attendance.
- **2026-05-01 (Fri):** Kickoff. Stakeholder Map agenda item #1: "Where does Marcus's framework end and ours begin?"

---

## Exit Gate — P0 (Redesign)

| # | Item | Status |
|---|---|---|
| 1 | Founder intent in 3 sentences (incl. "what's changing and why now") | ✓ §1 |
| 2 | Live product walked with founder; recording saved | ✓ §2; recording in Notion |
| 3 | Structural-vs-surface debt classified with observed examples | ✓ §3 (named brand-coherence as distinct DS-aware category) |
| 4 | Scope hypothesis (In/Out/Unclear); Out column non-empty | ✓ §4 |
| 5 | Top 3 risks with early-warning signals; ≥1 Redesign-specific | ✓ §5 (risk 2 is Redesign-specific) |
| 6 | Metric context probed (crisis Y/N, metric named, analytics verified) | ✓ §6 |
| 7 | Redesign+ candidacy flagged or ruled out | ✓ §7 (ruled out, 0/4) |
| 8 | Track still Redesign (not stealth-Launch, not migration-only) | ✓ §8 |
| 9 | Client type classified | ✓ §10 (DS, confident) |
| 10 | Problem statement re-confirmed vs observed reality | ✓ §9 |
| 11 | Beauty overlay status confirmed | ✓ §10 (No) |

**All 11 checked. P0 gate passed. 2026-04-27.** Founder ack via Cliq (Devina 👍, see `founder-consultation.md`).
