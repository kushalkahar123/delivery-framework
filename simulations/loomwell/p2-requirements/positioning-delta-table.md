# Positioning delta table — Loomwell

> Format: Notion sub-table linked from Requirements Doc §6.
> Authored: Gerwin, reviewed by Marcus row-by-row at positioning checkpoint planning.
> Audience: Client (Marcus signs the table specifically).
> Confirmation: Marcus sign-off via email (`signoff-emails.md`).

---

## Per-surface positioning delta

Every row traces to a pillar OR is marked `(infra)`. Rows that didn't trace were challenged and dropped.

| # | Surface | Current message (verbatim or paraphrase) | Target message (direction) | Pillar | Delta type |
|---|---|---|---|---|---|
| 1 | Homepage hero | "A faster, cleaner home for your case studies." | "For senior creatives turning their work into a story that wins the next room." | **P2** | Copy + block-level structural |
| 2 | Homepage 2nd fold | "Built for designers." | Audience-explicit: "Made for directors, founders, leads, partners — anyone who has to *make the case* for what they've made." | **P1, P2** | Copy |
| 3 | Homepage features section | Features list (storage, custom domain, etc.) | Outcome list: "Pitch for a senior role with a story. Walk an investor through three years of work in one read. Make your portfolio the thing that gets you in the room." | **P3** (reads-not-browses on the surface that *talks about* the product) | Copy + structural (replace grid with prose block) |
| 4 | Homepage embedded preview slot | (does not exist) | Embedded curated case study (1 — rotates) | **P3** | New component |
| 5 | New: "Why Loomwell" page | (does not exist) | Pillar-1 narrative: "This was made by people who have done what you're trying to do." | **P1** | New surface |
| 6 | New: "Read a case study" page | (does not exist) | Pillar-3 showcase: 3–5 curated case studies. "Loomwell at its best, in 8 minutes." | **P3** | New surface |
| 7 | Pricing hero copy | "Simple pricing for every team size." | "Pricing for one job: helping you make the case." | **P2** | Copy |
| 8 | Pricing tier names | Solo / Studio / Team | Direction: outcome-led naming (display only; final P3) | **P2** | Display rename (Stripe metadata untouched per §11) |
| 9 | Pricing per-tier line | (none — features only) | One outcome statement per tier (e.g., Solo: "Walk into one interview a quarter with the case already made.") | **P2** | New copy line |
| 10 | Signup — role field | "What's your role at the company?" | "Where are you in your career?" (with audience archetypes) | **P1** | Copy + field options |
| 11 | Empty state CTA | "Create your first doc" | "Start your first case study. Here's what one looks like." | **P3** | Copy (term locked: "case study") |
| 12 | Empty state body | "Start typing to add your first section." | (Replaced by embedded preview) | **P3** | New component + copy retired |
| 13 | Settings — Workspace name | "Workspace name" | "Studio name" (direction; final P3) | **P1** | Display rename |
| 14 | Settings — generic microcopy (20 items) | Notion-coded vocabulary | Loomwell-consistent voice | **P1** | Copy |
| 15 | Share modal | "Your case study is published. Share the link below." | Voiced: "Your case study is live. Here's the link to put in front of the people who decide." | **P2** | Copy |
| 16 | 404 | "Page not found." | "This page got cut from the case study." | **P1** (voice touch) | Copy |
| 17 | 500 | "Something went wrong." | "We dropped the thread. Working on it." | **P1** (voice touch) | Copy |
| 18 | Email: welcome | "Welcome to Loomwell. Here are some features…" (3 paragraphs) | "You came here to write your story down. We'll make it harder to do it badly." (short, voiced, with a 1-line invitation to the embedded exemplar) | **P1** | Copy |
| 19 | Email: magic-link | "Click the link below to sign in." | "Let yourself back in." | **P1** | Copy |
| 20 | Email: password-reset | "Reset your password using the link below." | "Forgot your way in? Here's a new key." | **P1** | Copy |
| 21 | Email: publish-confirmation | "Your case study has been published." | "It's live. Time to put it in front of someone." | **P2** | Copy |
| 22 | Email: billing-success | "Your payment was successful. Receipt below." | (Light voice — "You're good. Receipt below.") | **P1** | Copy |
| 23 | Email: billing-failed | "Your payment failed. Please update your payment method." | (Helpful voice — clear and warm; positions us as on-their-side) | **P1** | Copy |
| 24 | Email: custom-domain-verified | "Your custom domain has been verified." | "Your domain is live. Pitch URL ready." | **P2** | Copy |
| 25 | Email: account-deleted | "Your account has been deleted." | "Account closed. Your case studies stay yours — exports already sent." | **P1** | Copy |
| 26 | Marketing-site reserved-namespace allowlist | Implicit (any path may exist) | Explicit: `/`, `/pricing`, `/for-senior-creatives`, `/read`, `/auth/*`, `/app/*`, `/settings/*`, `/c/<slug>` | `(infra)` | Config + routing |
| 27 | Nav | Home / Features / Pricing / Login | Home / Why Loomwell / Read / Pricing / Login | `(infra)` + **P1, P3** by content | Structural |

---

## Pillar coverage check

| Pillar | Primary home surfaces | Secondary / supporting surfaces |
|---|---|---|
| **P1 — Made by senior hands** | "Why Loomwell" page (#5), Welcome email (#18) | Signup (#10), 404/500 (#16,17), settings voice (#14), magic-link email (#19), most transactional |
| **P2 — For the pitch, not the portfolio** | Homepage hero (#1), Pricing (#7, 8, 9) | Share modal (#15), publish-confirm email (#21), 2nd-fold (#2), features-section rewrite (#3) |
| **P3 — Reads, not browses** | "Read a case study" page (#6), Empty state (#11, 12), Homepage embedded preview (#4) | Features-section rewrite (#3) — meta-talks about reading |

**All three pillars have at least one primary home and multiple supporting surfaces. No pillar is orphaned.** Locked.

---

## Rows challenged & dropped

| Considered | Why dropped |
|---|---|
| Reader-cover typography refinement | Out of scope (reader is protected). |
| Editor narrator-voice nudges | Already pillar-aligned today; nothing to change. |
| App nav restructure | Editor flow protected — app nav unchanged. |
| Adding analytics for measurement | Marcus's external push; out of this engagement. |
| Brand-system refresh (wordmark, palette) | Explicitly out (Calibrate §4, Don't Break, Requirements §5). |

---

## Marcus's sign-off line

> *"Every delta traces to a pillar. The pillars don't get re-litigated by the surfaces. Locking."* — Marcus, email 15 May 16:42 IST.
