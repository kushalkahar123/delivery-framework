# Strategic Bets — Loomwell (extracted from Requirements Doc §8)

> Format: Notion sub-page linked from Requirements Doc §8.
> Audience: Client. Full team signs Requirements Doc; this page is the "if you only read one thing" view of the bets.
> Confirmation: Each bet has a per-client confirm line (Priya).

---

## How to read this page

Each bet is structured as:

```
Bet (one sentence) →
  Risk if wrong →
  Mitigation →
  How we'll know (success signal) →
  Confirmed by (decider initials + date)
```

Every bet respects the **writing-first breach definition** (Requirements Doc §2) and the **Don't Break inventory** (signed 5 May).

---

## Bet 1 — Outcome-led pricing display

**Bet:** Renaming pricing tiers from feature-class names ("Solo/Studio/Team") to *outcome-led display names* will land pillar 2 on the highest-intent surface and reduce "what does this cost me to do my pitch" friction.

**Risk if wrong:** Returning visitors lose recognition of their tier.

**Mitigation:** **Display-only.** Stripe `plan_id` and metadata stay. Existing customers see the new label adjacent to (or in place of) the old one in their billing surfaces; underlying subscription unchanged. Reversible by single config flip.

**How we'll know:** Reader test on pricing page (1 of 3 stimuli). Marcus subjective review at first positioning checkpoint.

**Confirmed by:** PR ✓ 15 May / MC ✓ 15 May / DR ✓ 15 May (display-only spec)

---

## Bet 2 — A curated public showcase ("Read a Loomwell case study")

**Bet:** Making the product's *best output* visible to cold visitors is the highest-leverage marketing surface we can build. It bypasses the homepage's positioning problem by *showing* rather than *telling*.

**Risk if wrong:** Curated set is unrepresentative; visitors form a narrower view than the product supports.

**Mitigation:** **Priya curates 3–5 case studies across her sub-archetypes** (design director / product lead / comms lead). Rotation strategy feasible at P3 (no eng change required to rotate). All curated authors give explicit opt-in even if already public.

**How we'll know:** Reader test references this page (its existence affects homepage reader test indirectly via nav). Longer-term qualitative signal: Priya asks new paid signups in her welcome calls what made them sign up — "I saw a case study on the site" is the success signal.

**Confirmed by:** PR ✓ 15 May / MC ✓ 15 May

---

## Bet 3 — Transactional email as positioning surface

**Bet:** The welcome and magic-link emails are the first non-marketing surfaces a user reads. Voicing them is high-leverage and low-cost, and reinforces pillar 1 ("made by senior hands") before the user is even in the product.

**Risk if wrong:** Too much voice in transactional email feels twee; over-cleverness costs trust.

**Mitigation:** Pillar-1-**light** voice direction. Welcome email is the boldest; magic-link is barely-voiced; billing emails are warmth+function only. Marcus reviews every template at the positioning checkpoint before P3 deploy.

**How we'll know:** **Counter-metric reader test** with 4 of 5 existing paid users — "does it still feel like Loomwell?" If counter-metric fails, the voice was too much.

**Confirmed by:** PR ✓ 15 May / MC ✓ 15 May (with note: "I'm watching this one")

---

## Bet 4 — Empty-state exemplar (embeddable case-study preview)

**Bet:** The empty state is the single highest-leverage microcopy surface in the product — every paid user passes through it once. Replacing "Create your first doc" with a *rendered exemplar* of a great Loomwell case study is the moment a new user understands what they're being invited to make.

**Risk if wrong:** Performance — if the embedded preview is slow, the empty state degrades.

**Mitigation:** **Server-side render, cached.** Fallback text-only invitation if the preview component fails. Devon owns the build; P2 spec, P3 build (1–2 days eng).

**How we'll know:** Reader test references this surface. Additionally: time-to-first-publish for new signups (Priya can observe without analytics — she does manual welcome calls with every paid signup).

**Confirmed by:** PR ✓ 15 May / MC ✓ 15 May / DR ✓ 15 May (build feasibility confirmed)

---

## The positive design constraint (governs all 4 bets)

The **opinionated nudging voice trait** of the editor (Don't Break V4, per Marcus) is a positive design constraint — every bet must *reinforce*, not *dilute*, this trait. Specifically: the bets bring the editor's voice **to other surfaces**, they don't replace the editor's voice with marketing-speak.

Test for each bet: *"After this lands, does the editor still feel like the loudest voice in the product, or has marketing overtaken it?"* If marketing overtook it, the bet broke the constraint.

---

## Bets explicitly considered & not made

| Considered | Why not |
|---|---|
| Re-architect editor for outcome-led prompts | Editor protected; not in this engagement. |
| Add analytics + claim metric-lift bet | No analytics this engagement; revisit in 6 months if Priya installs. |
| Brand-system refresh (wordmark + palette) | Out of scope (Calibrate §4, Don't Break). Separate project. |
| Build a "templates" library of case-study structures | Editor change; out. Possibly post-engagement. |
| Paid-user community / Slack channel | Out of scope; not a surface positioning lives on. |

---

*Strategic Bets locked at P2 sign-off 2026-05-15. Bets do not get re-opened at P3 surface work — only the *application* of them is refined.*
