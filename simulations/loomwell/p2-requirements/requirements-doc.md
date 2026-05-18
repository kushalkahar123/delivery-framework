# Requirements Doc — Loomwell (P2)

> Format: Notion page shared via Zoho Mail with a 48h review window. Lives at `Loomwell / P2 / Requirements Doc v1`. Appendices linked.
> Authored: Kushal (DM) + Gerwin (SD). Drafted 12 May, shared 13 May 14:08 IST. **Signed 2026-05-15.**
> Audience: Client. Sign-off from Priya (product), Marcus (positioning), Devon (eng).
> Confirmation: Written sign-off — see `signoff-emails.md`.

---

## §0 — Executive summary

Loomwell is being repositioned from a **2022 Notion-alternative for designers** to a **2026 pitching tool for senior creatives.** The product itself does not change. What changes is **the surfaces that surround it** — marketing site, onboarding, microcopy, transactional email, pricing-page narrative, plus **two new marketing surfaces** that don't exist today (a "Why Loomwell" page and a curated case-study showcase).

The work is grounded in **three locked pillars** (Marcus's framework, ratified at Kickoff):

1. **Made by senior hands** — opinionated, not a blank canvas.
2. **For the pitch, not the portfolio** — outcome-led, not artifact-led.
3. **Reads, not browses** — case studies are written things.

P2 produces this Confirmed Requirements Doc. P3 (IA Audit First-Win) begins after sign-off and produces the revised marketing IA and the surface-by-surface application of the pillars.

**Success criterion at P2:** Reader test — **4 of 5 unprompted target-user readers** correctly state Loomwell's audience and value within 10 seconds, on at least 2 of 3 redesigned surfaces (homepage, empty state, pricing). Qualitative pass/fail; no conversion-lift claim (no analytics).

**Scope freeze (three-way):** see §5.

**Track:** Redesign. **Redesign+ flag:** ruled out (final).

---

## §1 — Audience

### Current audience (legacy)

"Designers building portfolios." Junior to mid-level. Visual-led.

### Target audience (current reality + redesigned framing)

**Mid-career creative professionals narrating their work for the pitch — for a senior role, a board, an investor, or a partnership.**

Sub-archetypes (drawn from Priya's welcome-call notes, 18-month sample):

| Archetype | % of recent paid signups | Pitch context |
|---|---|---|
| Design director moving up (VP, Head of Design) | ~35% | Internal pitch / external interview |
| Product / strategy lead in agency or in-house | ~25% | Board-level case for work led |
| Comms / brand lead pivoting | ~15% | New role pitch |
| Senior IC pitching investor / partnership | ~15% | External pitch |
| Other (consultants, freelancers re-positioning) | ~10% | Re-positioning portfolio |

### Audience shift — explicit

**From:** *Junior designers building a portfolio for the first time.*
**To:** *Senior creatives turning a body of work into a story for the next room.*

This shift drives every surface change downstream.

---

## §2 — Voice & narrative · current → target *(DS variation sub-section)*

### Voice today reads as

Utility-SaaS / functional / Notion-adjacent — in marketing and settings. **Already-Loomwell** in the editor (pillar 3 voice alive there).

### Voice target

Opinionated, narrative, written-for-grownups. **Spread the editor's voice** to the surfaces that lost it.

### Voice sample pairs (current → target draft)

| Surface | Current | Target draft (P2 direction; P3 refines) |
|---|---|---|
| Homepage hero | "A faster, cleaner home for your case studies." | *"For senior creatives who need their work to tell the story."* |
| Empty state CTA | "Create your first doc." | *"Start your first case study. Here's what one looks like."* (with exemplar) |
| Magic-link email subject | "Your sign-in link" | *"Loomwell — let yourself in."* |
| Welcome email opener | "Welcome to Loomwell." | *"You came here to write your story down. We'll make it harder to do it badly."* |
| 404 | "Page not found." | *"This page got cut from the case study."* |

P2 locks **direction**, not final copy. Marcus refines messages at the **positioning checkpoint** during P3.

### "Writing-first" promise — breach definition *(per Priya, clarification call 12 May, verbatim)*

If a redesign idea makes any of these true, the writing-first promise is broken:
1. The case-study editor adds visual-asset features that push users to start with images instead of words.
2. The marketing site leads with screenshots of the editor rather than examples of reading.
3. The empty state shows a visual canvas instead of a written exemplar.
4. The reader view defaults to a gallery / grid mode instead of a top-to-bottom read.

This is a **positive design constraint** every bet in §8 must respect.

### Narrative archetype shift

| | From | To |
|---|---|---|
| Archetype | Utility-tool ("we make a thing for you") | Opinionated-collaborator ("we make you better at telling your story") |
| Voice models referenced | (none — generic SaaS) | NYT Magazine voice but for software (Priya, Kickoff); editor narrator voice already alive in product |
| Tone | Neutral, audience-vague | Opinionated, audience-specific |

---

## §3 — Audience & positioning shift *(Positioning lens sub-section)*

### From-state messaging

- "A faster, cleaner home for your case studies."
- "Built for designers."
- Features-led pricing.
- "Create your first doc."
- (No surface for showcase case studies.)
- (No "who this is for" page.)

### To-state messaging

- "For senior creatives turning their work into a story that wins the next room."
- Audience-led explicit: senior creatives pitching.
- Outcomes-led pricing copy (display only — tier names rename, Stripe metadata untouched).
- Empty state with exemplar.
- Curated case-study showcase at `/read` (placeholder URL; final at P3).
- "Why Loomwell" page at `/for-senior-creatives` (placeholder URL).

### Message pillars *(Positioning lens sub-section)*

The **three messages** the redesigned product must communicate in the first 10 seconds, surface-by-surface:

| Pillar | Plain-language message | Pillar-fit surface (primary) |
|---|---|---|
| **P1 — Made by senior hands** | *"This was made by people who've done what you're trying to do."* | "Why Loomwell" page |
| **P2 — For the pitch, not the portfolio** | *"Loomwell turns your work into the case you make for what you want next."* | Homepage hero, pricing page |
| **P3 — Reads, not browses** | *"Case studies that get read all the way to the end."* | Empty state, "Read a Loomwell case study" page |

Pillar 1 *concept* locked; *naming* (Marcus is still iterating). Will not block P3 — directional name is fine for IA work.

### Positioning delta table

Lives as a sub-doc at `positioning-delta-table.md`. Summarized in §6.

---

## §4 — Success metric

### Primary metric

**Reader-comprehension test (qualitative pass/fail).**

- **Method:** 5 unaffiliated target-user readers (mid-career creative professionals, sourced from DC network — *not* Loomwell customers, to avoid bias).
- **Stimuli:** 3 redesigned surfaces — homepage, empty state, pricing page — shown for 10 seconds each, then closed.
- **Prompt:** "What does Loomwell do, and who is it for?" Asked unprompted, no leading.
- **Scoring:** Clear / Partial / Wrong, scored independently by Kushal and Gerwin. Disagreements arbitrated by Marcus.
- **Pass criterion:** **4 of 5 readers score `Clear` on at least 2 of 3 surfaces.**

### Time window

- **Baseline:** Run on current state during P3 week 1. Establishes the "before."
- **Target:** Run post-P3 delivery (final week of P3). Compares.

### Baseline (current state)

To be measured during P3 week 1. Kushal's prediction based on current copy: 0–1 readers score Clear. Confirms how broken positioning is today.

### Counter-metric

**Editor satisfaction (qualitative reader-test parallel):** 4 of 5 existing paid users say "the editor still feels like Loomwell" after viewing the redesigned surfaces. Guards against the writing-first promise being broken (§2).

### Measurement plan

| Activity | Phase | Owner |
|---|---|---|
| Baseline reader test (current state) | P3 wk 1 | Gerwin, Kushal |
| Target reader test (post-delivery) | P3 final wk | Kushal |
| Counter-metric reader test (paid users) | P3 final wk | Kushal |
| Score arbitration | as needed | Marcus |
| Results writeup | P3 close | Kushal |

### Trade-off called out

No conversion-rate / first-10s-bounce-rate metric — Loomwell has no analytics. If Priya installs analytics during P3 (Marcus has been pushing), a quantitative second-pass measurement is available; otherwise this engagement claims qualitative comprehension only.

---

## §5 — Scope freeze (three-way)

### In

- Homepage (entire page — hero, audience framing, features-section reframe, pricing teaser).
- Pricing page (narrative + tier-name display rename — Stripe metadata untouched).
- Signup page copy (role-field framing).
- Empty state (copy + exemplar surface).
- Settings → Workspace + microcopy across settings.
- Share modal copy.
- 404 + 500 voice.
- Transactional email — **8 templates in scope** (welcome, magic-link, password-reset; publish-confirmation, billing-success, billing-failed, custom-domain-verified, account-deleted-confirmation).
- **New surface: "Why Loomwell" page** at `/for-senior-creatives` (placeholder; P3 final).
- **New surface: "Read a Loomwell case study" page** at `/read` (placeholder).
- **New surface: Embeddable case-study preview** for empty state — P2 spec, P3 build.
- Marketing-site IA — including the reserved-namespace approach (per Devon).
- Pricing tier *display* names.

### Out

- Case-study editor flow internals (F-03, F-04) — protected.
- Reader flow (F-06) — protected.
- Auth flow internals (F-09) — protected (copy in scope).
- Stripe billing internals (F-08) — protected (page narrative in scope).
- Custom-domain feature (Ft1) — protected (routing semantics flexible via reserved namespace).
- Version history (Ft2), PDF export (Ft3), password-protected case studies (Ft4) — protected.
- Stripe webhook contracts (I1), Cloudflare custom-domain infra (I2) — protected.
- 6 utility transactional email templates (export-ready, webhook-failure-internal, etc.) — protected.
- **Brand-system refresh** (wordmark, palette, type system) — separate project, **explicitly out**.
- Mobile / responsive structural changes — protected (responsive carries through new surfaces by default).
- Tier capabilities — protected.
- Stripe metadata — protected.

### Protected (named explicitly — Don't Break inventory enforced)

All items signed off in `dont-break-inventory.md` on 2026-05-05. Reproduced here as canonical reference for P3.

---

## §6 — Gap analysis · delta table

Full table in `positioning-delta-table.md`. Summary by surface:

| # | Surface | Current | Target | Delta type | "Don't break" ref | Pillar |
|---|---|---|---|---|---|---|
| 1 | Homepage hero | Generic SaaS | Audience-led pitch framing | Copy + structural (hero block) | V3 (writing-first) | P2 |
| 2 | Homepage 2nd fold | "Built for designers" | Audience-explicit | Copy | — | P1, P2 |
| 3 | Homepage features section | Features list | Outcomes + read-led | Copy + structural | V3 | P3 |
| 4 | New: "Why Loomwell" page | (does not exist) | Pillar 1's home | New surface | V3, V4 | P1 |
| 5 | New: "Read a case study" page | (does not exist) | Pillar 3's home; curated showcase | New surface | V1 | P3 |
| 6 | Pricing page | Features-led | Outcome-led (display rename + narrative) | Copy + display tier rename | Ft Stripe-metadata | P2 |
| 7 | Signup | "Company / role" | Audience-aware | Copy | — | P1 |
| 8 | Empty state | "Create your first doc" | Exemplar + invitation, locked term "case study" | Copy + new component (embeddable preview) | V1, V4 | P3 |
| 9 | Settings microcopy | "Workspace" + Notion vocab | Loomwell-consistent | Copy | — | P1 |
| 10 | Share modal | Voiceless | Voiced (pillar 1 touch) | Copy | — | P1 |
| 11 | 404 / 500 | Voiceless | Voiced (pillar 1 touch) | Copy | — | P1 |
| 12 | Transactional: welcome | Generic | Voiced welcome (pillar 1) | Copy | — | P1 |
| 13 | Transactional: magic-link | Functional | Light voice | Copy | — | P1 |
| 14 | Transactional: password-reset | Functional | Light voice | Copy | — | P1 |
| 15 | Transactional: publish-confirm | Functional | Voiced (pillar 2 — celebrates the pitch) | Copy | — | P2 |
| 16 | Transactional: billing-success | Functional | Light voice | Copy | — | P1 |
| 17 | Transactional: billing-failed | Functional | Voiced (helpful) | Copy | — | P1 |
| 18 | Transactional: custom-domain-verified | Functional | Light voice | Copy | — | P1 |
| 19 | Transactional: account-deleted | Functional | Light voice | Copy | — | P1 |
| 20 | Marketing-site reserved-namespace IA | Implicit | Explicit allowlist | Structural / config | — | (infrastructure) |

**Every delta traces to a pillar or is infrastructural.** Deltas that didn't trace were challenged and either dropped (cover-typography refinement) or moved to P3-or-later (some pricing tier-naming examples).

---

## §7 — Requirements by flow

### 7.1 — Homepage

- **Purpose:** First-10-seconds audience + value communication.
- **Current:** Generic SaaS hero; wrong-audience second fold; features-led mid-section.
- **Target:** Audience-led hero (pillar 2); audience-explicit second fold (pillar 1+2); outcome-led mid-section; embed of 1 curated case study (pillar 3); pricing-teaser bottom (pillar 2).
- **Functional reqs:**
  - New audience-led hero block (replace existing).
  - New "Who this is for" sub-section in 2nd fold (audience archetypes from §1, distilled).
  - Embed curated case-study preview block (links to `/read`).
  - Removed: feature-grid section.
  - Added: "Why Loomwell" link in nav.
- **Edge cases:** Mobile responsive carries through; ensure case-study preview embed degrades on mobile.
- **Regression constraints:** Stripe checkout entry preserved; nav links preserved (`/login`, `/signup`).
- **Open questions:** None at sign-off.

### 7.2 — Pricing page

- **Purpose:** Outcomes-led conversion surface for paid tiers; pillar 2's secondary home.
- **Current:** Features grid mapped to tiers (Solo/Studio/Team).
- **Target:** Pillar-2-led header copy; outcomes statements per tier; **display tier rename** (direction-locked, names final at P3).
- **Functional reqs:**
  - Display rename (Stripe metadata untouched per Devon).
  - New header copy + sub-header.
  - Per-tier outcome statement (1 line each).
  - Feature list retained but de-emphasized.
- **Regression constraints:** Stripe checkout flow unchanged; tier capability mapping unchanged; pricing currency switching preserved (EU VAT compliance).
- **Open questions:** Final tier names — P3 decision.

### 7.3 — Empty state + embeddable case-study preview *(P2 spec, P3 build)*

- **Purpose:** Pillar 3's primary home; turn the highest-leverage post-signup surface into a positioning surface.
- **Current:** "Create your first doc" + blank editor.
- **Target:** Headline (locked term "case study") + invitation + **embedded preview** of a curated published case study (default: Anand's) with "open" CTA + "start yours" CTA.
- **Functional reqs:**
  - New component: `<CaseStudyPreview slug="anand-product-director" />` — server-side render of a published case study's cover + first 200 words. Devon est. 1–2 days build.
  - Empty-state copy direction: "Start your first case study. Here's what one looks like." (P3 final copy.)
  - Fallback: text-only invitation if preview fails to render.
- **Edge cases:** Loomwell-internal redirect handling if curated study is unpublished.
- **Regression constraints:** Editor itself untouched; entry into editor unchanged.
- **Open questions:** Which curated study is default exemplar — P3 picks. Probably rotation of 3.

### 7.4 — New surface: "Why Loomwell" page (`/for-senior-creatives` placeholder)

- **Purpose:** Pillar 1's home — "made by senior hands."
- **Current:** Does not exist.
- **Target:** Marketing-site page, public, in-nav.
- **Functional reqs:**
  - Page structure: Pillar-1 hero, audience archetypes (from §1), "who built Loomwell and why" section (Priya bio + opinion), 2 curated case-study previews, CTA to signup.
  - Public, indexed.
  - In reserved-namespace allowlist (per §6).
- **Edge cases:** Slug finalization (P3 — `/for-senior-creatives` likely too long; Marcus to refine).
- **Regression constraints:** Doesn't shadow existing routes (covered by reserved-namespace approach).
- **Open questions:** Final slug.

### 7.5 — New surface: "Read a Loomwell case study" page (`/read`)

- **Purpose:** Pillar 3's home — showcase the product at its best to cold visitors.
- **Current:** Does not exist; case studies invisible until signup.
- **Target:** Public marketing-site page; curated grid of published case studies (3–5), with cover + author + 1-line context per. Click → opens the case study at its public URL.
- **Functional reqs:**
  - Page structure: pillar-3 header, curated grid (3–5 case studies; Priya curates), individual case studies link out.
  - Public, indexed.
  - In reserved-namespace allowlist.
- **Edge cases:** Author opt-in — Anand and Sumi already public; Priya gets explicit opt-in for additions.
- **Regression constraints:** Doesn't change underlying case-study URLs.
- **Open questions:** Final curated set — P3 picks (with Priya).

### 7.6 — Settings & microcopy

- **Purpose:** Voice consistency end-to-end inside the app.
- **Current:** "Workspace name", Notion-coded vocabulary throughout.
- **Target:** Replace "Workspace" with "Studio" (direction; final at P3). Apply pillar-1-light voice to all microcopy.
- **Functional reqs:**
  - Audit + rewrite all settings-section microcopy.
  - Audit + rewrite share modal, 404, 500.
- **Regression constraints:** Setting capabilities untouched; only copy/label changes.
- **Open questions:** "Studio" final term — confirm at P3.

### 7.7 — Transactional email (8 templates)

- **Purpose:** Voice across pre/post-login surfaces; first non-marketing surface users meet.
- **Current:** 14 templates total; voiceless / functional.
- **Target:** 8 in scope (welcome, magic-link, password-reset, publish-confirmation, billing-success, billing-failed, custom-domain-verified, account-deleted-confirmation). Voice direction per §2 sample pairs (welcome + magic-link locked as anchor pairs).
- **Functional reqs:**
  - Rewrite 8 template bodies + subjects. Direction at P2; final copy at P3 with Marcus's positioning checkpoint.
  - Test sends to Priya + Marcus + Devon (1 sample of each tone class).
- **Regression constraints:** Send transport (SendGrid contract), trigger logic, dynamic variables — all unchanged.
- **Open questions:** Welcome email length — Priya prefers shorter; Marcus prefers fuller voice intro. Resolve at P3.

---

## §8 — Strategic Bets

Four bets. Every bet respects the writing-first breach definition (§2) and the Don't Break inventory.

### Bet 1 — Outcome-led pricing display

*Bet:* Renaming tiers from feature-class names ("Solo/Studio/Team") to outcome-led display names will land pillar 2 on the highest-intent surface and reduce "what does this cost me to do my pitch" friction.

*Risk if wrong:* Returning visitors lose recognition of their tier.

*Mitigation:* Display-only (Stripe metadata untouched). Existing customers see new label adjacent to old `plan_id`. Reversible.

*How we'll know:* Reader-test on pricing page (one of three surfaces). Marcus review at positioning checkpoint.

### Bet 2 — A curated public showcase ("Read a Loomwell case study")

*Bet:* Making the product's *best output* visible to cold visitors is the highest-leverage marketing surface we can build — it bypasses the homepage's positioning problem by showing rather than telling.

*Risk if wrong:* Curated set is unrepresentative; visitors form a narrower view of Loomwell than the product supports.

*Mitigation:* Priya curates 3–5 across her sub-archetypes (design director, product lead, comms lead). Rotation feasible at P3.

*How we'll know:* Reader test references this page; longer-term, a non-instrumented qualitative read (Priya asks new signups what made them sign up).

### Bet 3 — Transactional email as positioning surface

*Bet:* The welcome email and magic-link email are the first non-marketing surfaces a user reads. Voicing them is high-leverage and low-cost.

*Risk if wrong:* Too much voice in transactional email feels twee; over-cleverness costs trust.

*Mitigation:* Pillar-1-*light* voice direction; Marcus reviews each template at the positioning checkpoint.

*How we'll know:* Counter-metric reader test with paid users — does it still feel like Loomwell or does it feel performative?

### Bet 4 — Empty-state exemplar (the embeddable case-study preview)

*Bet:* The single highest-leverage microcopy surface in the product. Replacing "Create your first doc" with a *rendered exemplar* of a great Loomwell case study is the moment a new user understands what they're being invited to make.

*Risk if wrong:* Performance — if the embedded preview is slow, the empty state degrades.

*Mitigation:* Server-side render, cached; fallback text-only invitation. Devon owns.

*How we'll know:* Reader-test references this surface. Plus: time-to-first-publish for new signups (Priya can observe without analytics — she does welcome calls).

### Positive design constraint (governs all 4 bets)

The **opinionated nudging** voice trait of the editor (Don't Break V4, per Marcus) is a positive constraint — every bet must reinforce, not dilute, this trait. Specifically: the bets bring the editor's voice *to other surfaces*, they don't replace the editor's voice with marketing-speak.

---

## §9 — Assumptions and risks

### Assumptions

1. Pillar 1 *concept* is locked even though *naming* is open. (Marcus, Kickoff + Sat 2 May.)
2. Three pillars are sufficient — no fourth pillar emerges during P3 surface work. (If a fourth emerges, we re-open at the positioning checkpoint.)
3. Reader-test panel can be sourced from DC network within P3 week 1.
4. Stripe metadata can stay unchanged through the engagement. (Devon, clarification call.)
5. The 8 transactional template scope is fixed (no template scope-creep mid-engagement).
6. Visual style remains protected (no wordmark/palette pressure during P3).

### Risks (top 4)

1. **Marcus's pillar 1 naming hangs open and starts blocking surface work in P3.** *Mitigation:* commit to a placeholder name in P3 wk 1; final at the first positioning checkpoint (15 May? — already past — Yes, scheduled Fri 22 May at P3 kickoff). If still open at P3 wk 2, escalate.
2. **Reader-test produces ambiguous results** (e.g., 3 of 5 score Clear). *Mitigation:* tie-break protocol — Marcus arbitrates; if still ambiguous, re-run with 3 new readers.
3. **Priya pulls back on welcome-email voice direction late in P3** (twee fear). *Mitigation:* lock direction at P2 sign-off; send a *sample* to Priya in P3 wk 1, not P3 wk 4. Early signal.
4. **Custom-domain reserved-namespace approach surfaces an unexpected conflict** (e.g., existing case-study slug collides with new marketing path). *Mitigation:* Devon to run a slug audit pre-IA-work.

---

## §10 — Redesign+ track — final lock

**Standard Redesign. Final.**

Re-confirmed at P2: no analytics installed; engagement is not surgical; success metric is qualitative reader-test (not metric-lift). Path to P3: **IA Audit First-Win** (not Metric Diagnosis).

This locks the Projects DB `track` field to `Redesign`. Will not be re-opened.

---

## §11 — Engineering feasibility & deploy strategy

*Authored by Devon, reviewed by Kushal and Gerwin.*

### Per-surface feasibility

| Surface | Build complexity | Est. eng days | Notes |
|---|---|---|---|
| Homepage rewrite | Low | 1–2 | Mostly content + light layout |
| New audience second-fold | Low | 0.5 | New copy block |
| Pricing page narrative + display rename | Low | 0.5 | Tier name = display variable |
| Signup copy | Trivial | 0.25 | Copy only |
| Empty state copy + new exemplar component | **Medium** | **1–2** | New component: server-side rendered case-study preview |
| Settings microcopy | Low | 0.5 | i18n-ready (single locale today) |
| Share modal / 404 / 500 | Trivial | 0.25 | Copy |
| Transactional email (8 templates) | Low | 1 | SendGrid template editor; copy work |
| "Why Loomwell" page | Low | 0.5 | New static page |
| "Read a Loomwell case study" page | Low | 0.5 | New page + curated list config |
| Marketing-site reserved-namespace IA | **Medium** | **1** | Routing changes + slug audit |
| Embeddable case-study preview component | Medium | 1–2 | Reusable React component, server-rendered |

**Total est. eng: 8–11 days** spread across P3. Devon is 15 hrs/wk → ~3 weeks calendar.

### Deploy strategy

1. **Reserved-namespace IA first** (deploy week 1) — unblocks new pages.
2. **New pages and homepage rewrite** (deploy week 2) — public-facing changes go live behind a feature flag for staged rollout.
3. **Empty state + embeddable component** (deploy week 3) — app-side change, no marketing impact.
4. **Settings microcopy + transactional templates** (deploy week 4) — low-risk, no flag.
5. **Reader test runs week 3–4** — both baseline (pre-deploy of homepage) and target (post-deploy).

**Feature-flag approach** for homepage + pricing-page changes (Devon's call) — allows quick revert if early reader-test signal is alarming. Flag retired at end of P3 once 4-of-5 target hit.

### Eng POC sign-off (this section)

Devon: signed via email reply on 2026-05-15 — see `signoff-emails.md`.

---

## §12 — P3 path statement

**Redesign → IA Audit First-Win.**

P3 begins **2026-05-22** (Fri). First deliverable is the **revised marketing-site IA** including the reserved-namespace allowlist, the two new pages spec'd structurally, and the homepage information architecture. From there:

- Wk 1: IA Audit + revised IA + baseline reader test.
- Wk 2: Homepage + "Why Loomwell" + "Read a case study" page drafts.
- Wk 3: Empty state + embeddable component build (Devon).
- Wk 4: Settings + transactional email + target reader test + counter-metric.
- P3 close: results writeup + handoff.

Detailed P3 plan lives outside craft-dc (per `00-craft-dc-dashboard.md` scope note).

---

## §13 — Sign-off block

| Decider | Section ownership | Status |
|---|---|---|
| **Priya Raman** — Product decider, "Don't break" owner | Full document, esp. §1, §2, §5, §8, §9 | **✓ Signed 2026-05-15** |
| **Marcus Chen** — Positioning decider | §2, §3, §6, §8 in particular; can re-open at positioning checkpoint | **✓ Signed 2026-05-15** |
| **Devon Reyes** — Eng POC | §11 (eng feasibility) explicitly; §6 reserved-namespace; §7 functional reqs | **✓ Signed 2026-05-15** |

Sign-off thread: `signoff-emails.md`.

---

## P2 Exit Gate trace

| # | Item | Where it lives |
|---|---|---|
| 1 | Current-state inventory documented | §2, §3, plus Appendix A (`current-state-inventory.md`) |
| 2 | Target-state articulated (functional + narrative + audience + metric) | §1, §2, §3, §4 |
| 3 | Delta table populated for every in-scope flow/surface | §6 (full table in `positioning-delta-table.md`) |
| 4 | Scope frozen three-way (In/Out/Protected); all non-empty | §5 |
| 5 | Success metric defined with baseline + target + measurement plan | §4 |
| 6 | "Don't break" inventory (signed at P1) reflected | §5 protected column; §2, §6 references |
| 7 | Feasibility signed off by eng (including deploy strategy) | §11 |
| 8 | Strategic Bets confirmed by client | §8 |
| 9 | Problem statement re-confirmed | §0, §3 (still Positioning) |
| 10 | Client-type confirmation still holding | (Implicit — every variation is DS-aware) |
| 11 | Redesign+ track confirmed/ruled-out, final | §10 (ruled out, final) |
| 12 | All sign-offs collected | §13 |
| 13 | P3 start date on calendar | §12 — 2026-05-22 |

**All 13 checked. P2 gate passed 2026-05-15.**
