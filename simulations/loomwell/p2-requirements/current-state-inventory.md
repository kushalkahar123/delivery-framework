# Current-state inventory — Loomwell

> Format: Notion page in Projects DB row → `Loomwell / P2 / Current-state inventory`. Linked as Appendix A of the Requirements Doc. A Figma diagram + screenshot catalog lives alongside (Figma file: `Loomwell — current state v1`).
> Authored: Gerwin Machado (SD) with Kushal review. Drafted 5–11 May; reviewed in clarification call 12 May.
> Audience: Client (full team reviews at clarification call).
> Confirmation: Reviewed as part of Requirements Doc sign-off (15 May).

---

## §1 — Flows (current)

| # | Flow | Entry point | Steps | Owners | Annotations |
|---|---|---|---|---|---|
| F-01 | Marketing browse | `/` (homepage) | Home → Features → Pricing → Login/Signup | — | **Positioning gap.** No "Who this is for" or "Why Loomwell" surface. No exemplar reachable. |
| F-02 | Signup | `/signup` | Email → password → "company / role" field → empty workspace | Devon | Outdated role-framing copy. Empty workspace = blank editor with no exemplar. |
| F-03 | Editor (create) | `/app/new` | Empty state → cover → sections → publish | Priya/Devon | **Protected.** Empty-state copy in scope ("Create your first doc"). |
| F-04 | Editor (edit) | `/app/<id>/edit` | Same as F-03 with autosave/versioning | Priya/Devon | Protected internals. |
| F-05 | Publish | `/app/<id>/publish` | Settings → privacy → publish → share modal | Devon | Functional. Share modal copy is voiceless — in scope for voice. |
| F-06 | Reader (web) | `/c/<slug>` or `<custom-domain>` | Cover → ToC → content → footer | — | **Protected.** Reading experience untouched. |
| F-07 | Account / settings | `/settings` | Account → Workspace → Billing → Domains → Notifications | Devon | "Workspace" term Notion-coded; voice voiceless. Microcopy in scope. |
| F-08 | Pricing → checkout | `/pricing` → Stripe checkout | Features grid → tier → Stripe → success | Devon | **Pricing page narrative in scope**; Stripe checkout protected. |
| F-09 | Auth (reset / magic link) | `/auth/*` | Email → link → set new password | Devon | **Protected.** Transactional copy in scope per Don't Break sign-off addendum. |
| F-10 | Transactional email | Trigger → SendGrid → user inbox | n/a | Devon | Templates *integration* protected; **copy in scope** (per 5 May sign-off). |

**Flows in scope (voice/copy or IA touch):** F-01, F-02, F-03 (empty state only), F-05 (share modal copy), F-07 (microcopy), F-08 (page narrative), F-09 (transactional copy), F-10 (template copy).

**Flows protected:** F-04 (editor internals), F-06 (reader), Stripe internals of F-08, auth internals of F-09.

## §2 — Screens (current — primary surfaces audited)

Catalog lives in Figma file `Loomwell — current state v1`. Summary here.

| # | Screen | URL | First-10-second read | Pillar fit (target) | Status |
|---|---|---|---|---|---|
| S-01 | Homepage hero | `/` | "Portfolio tool. Generic." | Pillar 2 (for the pitch) | ✗ Mis-positioned |
| S-02 | Homepage 2nd fold | `/` | "Built for designers" | Pillar 1 (senior hands) | ✗ Audience wrong |
| S-03 | Homepage features section | `/` | Feature list | Pillar 3 (reads not browses) — should embody | ✗ Features-first |
| S-04 | Pricing page | `/pricing` | "$ for storage" | Pillar 2 | ✗ Outcomes-absent |
| S-05 | Signup | `/signup` | "Company / role" | — | ✗ Outdated framing |
| S-06 | Empty state | `/app/new` | "Create your first doc" | Pillar 3 | ✗ Notion-coded; no exemplar |
| S-07 | Settings → Workspace | `/settings/workspace` | "Workspace name" | — | ✗ Vocabulary off |
| S-08 | Share modal (publish) | post-publish | "Share link" | — | ✗ Voiceless |
| S-09 | Reader (case study) | `/c/<slug>` | Strong — reads well | Pillar 3 ✓ | **✓ Protected**, no change |
| S-10 | Custom-domain reader | `<custom>` | Strong | Pillar 3 ✓ | **✓ Protected** |
| S-11 | 404 | `/404` | Voiceless | Pillar 1 (small touch) | ✗ Voice missing |
| S-12 | Magic-link email | inbox | Voiceless | — | ✗ Voice missing |
| S-13 | Stripe receipt email | inbox | Voiceless | — | ✗ Voice missing |
| S-14 | Welcome email | inbox | Voiceless / generic | Pillar 1 | ✗ Voice missing |
| S-15 | Customer-facing "About" page | (none) | — | Pillar 1 | ❍ **Surface doesn't exist** — new surface required |
| S-16 | "Read a Loomwell case study" page | (none) | — | Pillar 3 | ❍ **Surface doesn't exist** — new surface required |

**16 surfaces audited. 13 mis-positioned or voiceless. 2 protected. 2 do not exist (need creating).**

## §3 — Components & voice samples (current)

### Microcopy samples (verbatim from current product)

| Where | Current copy | Issue |
|---|---|---|
| Homepage hero | "A faster, cleaner home for your case studies." | Generic SaaS. Says nothing about audience or outcome. |
| Homepage 2nd fold | "Built for designers." | Wrong audience; product-led framing. |
| Empty state CTA | "Create your first doc" | Wrong term ("doc"); no exemplar. |
| Empty state body | "Start typing to add your first section." | Mechanical; not narrative. |
| Settings → Workspace name | "Workspace name" | Notion-era vocabulary. |
| Pricing tier names | "Solo", "Studio", "Team" | Generic; no positioning. |
| Share modal | "Your case study is published. Share the link below." | Functional; voiceless. |
| 404 | "Page not found." | Voiceless. |
| Magic-link email subject | "Your sign-in link" | Functional. |
| Magic-link email body | "Click the link below to sign in. Expires in 10 minutes." | Functional; voiceless. |
| Welcome email subject | "Welcome to Loomwell" | Generic. |
| Welcome email body | (3 paragraphs of feature explanation) | No narrative welcome. Doesn't establish opinion. |
| Editor — section nudge | "Start with the brief, not the outcome." | ✓ Good. **Sample of pillar 3 voice already alive.** |
| Editor — section nudge | "What did you make? What changed because of it?" | ✓ Good. **Pillar 3 voice.** |
| Editor — autosave indicator | "Saved." | ✓ Fine — minimal is right here. |

**Voice today reads as:** utility-SaaS / functional / Notion-adjacent in marketing & settings; **already-Loomwell** inside the editor (pillar 3 voice alive there).

### Tone analysis across surfaces

| Surface cluster | Tone today | Tone target |
|---|---|---|
| Marketing (homepage, pricing) | Utility-SaaS, neutral, audience-vague | Opinionated, narrative, audience-specific |
| Onboarding (signup, empty state) | Mechanical, Notion-coded | Story-first, exemplar-led |
| Settings / account | Neutral, vocabulary-drifted | Voice-consistent with editor |
| Editor (internals) | Opinionated, narrator-voice | **Preserved as-is** ✓ |
| Reader | Quiet, content-first | **Preserved as-is** ✓ |
| Transactional email | Voiceless | Lightly voiced (pillar 1) |

The editor and reader are voice-correct *today*. The drift is in everything *around* them.

### Narrative pillars expressed today (gap analysis)

| Pillar (target) | Surfaces where pillar lands today | Surfaces where it should land but doesn't |
|---|---|---|
| **P1: Made by senior hands** | Editor narrator voice; nowhere else. | Homepage, signup welcome, welcome email, about page (doesn't exist). |
| **P2: For the pitch, not the portfolio** | Implicitly in editor; nowhere explicit. | Homepage hero, pricing page, share modal, every marketing CTA. |
| **P3: Reads, not browses** | Reader experience; editor nudges. | "Read a Loomwell case study" page (doesn't exist), empty state exemplar (doesn't exist), pricing framing. |

## §4 — Permissions / roles (current)

| Role | Capabilities | In scope? |
|---|---|---|
| Free user | 1 case study, watermarked | Pricing positioning change may shift tier semantics — **flag for P2** |
| Solo (paid) | Unlimited case studies, no custom domain | Tier names in scope (S-04) |
| Studio (paid) | + Custom domains, password-protect | Tier names in scope |
| Team (paid) | + Multiple editors | Tier names in scope; underlying capability untouched |
| Admin (internal) | n/a | Out |

**Flag:** Tier *names* (Solo/Studio/Team) and *positioning copy* in scope. Tier *capabilities* protected (Stripe-tied).

## §5 — Integrations (current)

| Integration | Purpose | Status |
|---|---|---|
| Stripe | Billing, subscriptions, webhooks | **Protected** (contracts, internals); **in scope** for pricing-page copy and receipt-email voice |
| SendGrid | Transactional email | **Integration protected**; **template copy in scope** |
| Cloudflare | Custom-domain routing | **Protected**; routing-semantics flag from Devon (P2 IA discussion) |
| Tally | Waitlist form | Out (no longer in active use) |
| Plausible / GA / Mixpanel / PostHog | Analytics | **Not installed.** Implication for success metric (qualitative pass/fail). |

## §6 — Instrumentation (current)

**None at web/product level.** Stripe only.

This shapes:
- Success metric framing in Requirements Doc §4 — qualitative pass/fail.
- Strategic Bets §8 — no metric-lift bets; bets must be evaluable by reader test or stakeholder review.
- P3 deliverable shape — IA Audit First-Win, not Metric Diagnosis.

---

## §7 — Findings summary

**Top 5 findings from the inventory:**

1. **The editor voice is already Loomwell. Everything else drifted around it.** The brand-coherence work isn't *inventing* a voice — it's *spreading* the editor's voice to the surfaces that lost it.
2. **Two surfaces don't exist that need to** — "About / Why Loomwell" page (Pillar 1 home) and "Read a Loomwell case study" page (Pillar 3 home). Without them, pillars 1 and 3 have nowhere to live on the marketing site.
3. **The empty state is the single highest-leverage microcopy fix.** Highest-traffic post-signup surface; current copy actively contradicts the positioning.
4. **Pricing tier names are dead weight.** "Solo/Studio/Team" are generic; the engagement is an opportunity to shift to outcome-led naming (e.g., "Soloist / In the Room / Studio of Studios" — directional, not final).
5. **Transactional email is in scope and was nearly out.** Priya's 5 May reply pulled it in correctly. Welcome email in particular is the first non-marketing surface a new user reads.

---

## §8 — Side-by-side appendix (Figma)

Lives in Figma file `Loomwell — current state v1`:
- 16 screens captured at current state.
- 6 of them paired with a *blank target frame* labelled "P3 to fill" — these are the highest-leverage surfaces.
- Voice samples annotated inline.

---

*Inventory locked for clarification call 12 May. Open questions surfaced into Review Worksheet (see `review-worksheet.md`).*
