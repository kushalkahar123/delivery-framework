# Solo product walk — Loomwell

> Format: Notion sub-page on Projects DB row → `Loomwell / P0 scratch`.
> Authored: Kushal, 2026-04-23 (Thu) AM. Spent 90 min in the product before the call.
> Audience: Internal — DM only. Not shared with client.
> Confirmation: DM-only working artifact.

---

Four lists, per the framework spine. Live product surfaces walked: marketing site (loomwell.studio), signup, empty state, case-study editor, settings, account, two real case studies (Anand, Sumi), the public-facing case-study reader view.

## 1. Intent (what I think the product is *trying* to do)

- Help mid-career creatives present their work as **story**, not portfolio.
- Win on **writing-first** UX (not visuals-first like Behance / Dribbble).
- Differentiate from Notion-as-portfolio: opinionated structure, not free-form.

The two case studies Priya pointed at deliver this. The product can do it. It's not a product problem.

## 2. Debt (what I saw that's broken / off)

**Brand coherence — heavy.**
- Homepage hero: *"A faster, cleaner home for your case studies."* — generic, could be a portfolio tool, could be Notion.
- Homepage second fold: *"Built for designers."* — narrows audience but to the wrong audience (the actual users are mid-career multi-discipline creatives — design directors, product folks, comms leads pivoting).
- Empty state in editor: *"Create your first doc"*. **Doc.** The whole product is about case studies as stories; the empty state calls them docs.
- Signup flow: asks for "company / role" — outdated framing. Most users are between roles when they sign up.
- Settings → "Workspace name" — the product isn't a workspace, it's a portfolio. "Workspace" is a Notion-era word.
- Pricing page: lists features (storage, custom domain, etc.) instead of outcomes (pitches won, response rate).

**Structural — moderate.**
- Marketing IA goes Home → Features → Pricing → Login. Standard SaaS shape. No "Why Loomwell" / "Who this is for" / "How it changes a pitch" page. The *positioning* has nowhere to live.
- Onboarding goes: signup → empty workspace → blank editor. No moment of "here's what a great Loomwell case study looks like".
- The two showcase case studies (Anand, Sumi) are nowhere on the marketing site. They live in the product. New visitors literally cannot see Loomwell at its best.

**Surface — light.**
- Visual design is fine. Type system, color, layout all clean. Not the bottleneck.
- Editor UX is well-considered.
- Mobile experience for readers (people viewing the case study) is fine.

**Brand coherence : structural : surface ≈ 60 : 35 : 5.** Brand-coherence-heavy with real structural debt underneath. Surface is not the problem.

## 3. Metrics (what's measurable?)

- Stripe MRR (~$11k). Stripe-level only — no funnel.
- Tally waitlist (no longer in use — they're open signups).
- **No web analytics.** No GA, no Plausible, no Mixpanel, no PostHog. Confirmed by inspecting the page source — no analytics script.
- Stripe shows ~800 paid, ~$11k MRR, but no acquisition or activation data. Cannot say where visitors drop off.

**Implication for Redesign+:** can't be raised. No metric to diagnose. No funnel to map. Ruling out at P0 exit gate.

**Implication for success metric at P2:** will be **qualitative** — message recall, comprehension test with target users, internal-team blind read. Need to call out the trade-off explicitly in Requirements Doc Section 4.

## 4. Risks (early-warning signals)

1. **Marcus's positioning framework might already exist and we'll have to integrate, not produce.** Early-warning: at P1 he shows up with a deck.
2. **Priya may want to keep "Built for designers" framing even though it's wrong.** It's the line she launched with and there's emotional attachment. Early-warning: she pushes back when I read the homepage line back to her.
3. **Scope creep into a brand-system refresh.** Priya may surface "while we're at it, the wordmark needs work." Early-warning: she opens the moodboarding language in the Kickoff. Lock scope hard at P2.
4. **No-analytics handicaps the success metric.** Will surface at P2; calling it out at P0 so it's not a P2 surprise.

---

## Pre-call questions I want to ask (3 max — picking 3 from this list)

- *"Why now? What changed in the company or market that made the surfaces stop telling the right story?"*
- *"When new visitors don't get it, what specifically do they say? Walk me to the screen."*
- *"What about the current product — voice, microcopy, IA — would you fight to keep, and what's already dead to you?"*
- *"How does what Marcus is producing relate to what we'd produce?"*

**Picking:**
1. The "why now" probe (DS spine).
2. The "walk me to the screen" probe (Positioning lens).
3. The "what would you fight to keep" — seeds the Don't Break inventory and tests how attached she is to the legacy framing.

Marcus question goes to P1, not P0 — wrong room.
