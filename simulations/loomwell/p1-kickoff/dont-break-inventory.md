# "Don't break" inventory — Loomwell

> Format: Notion table on Projects DB row.
> Seeded: live on Kickoff call, 2026-05-01.
> Finalized & signed: 2026-05-05 (Tue, within 48h business per framework).
> Audience: Client (Priya signs; Marcus CC'd on voice/brand rows).
> Confirmation: Notion sign-off block (Priya: ✓ 5 May 17:42 IST). Marcus replied "agreed on voice rows" via email. See `dont-break-signoff-email.md`.

---

## Sign-off block

| Decider | Status | Timestamp |
|---|---|---|
| Priya Raman (primary) | **✓ Signed** | 2026-05-05 17:42 IST |
| Marcus Chen (voice/brand rows only) | **✓ Agreed** (email) | 2026-05-05 19:08 IST |

---

## Inventory

### Flow

| # | Item | Why it's protected | Surfacing notes |
|---|---|---|---|
| F1 | Case-study editor flow (cover → sections → publish) | Editor UX is *the product*. Keyboard shortcuts, autosave rhythm, slash-commands are muscle memory for the ~800 users. | Any P2 proposal that touches editor internals is **out of scope**, route to a separate post-engagement project. |
| F2 | Auth flow (signup, magic link, password reset) | Devon-built, stable, no user complaints. | Out of scope. Confirmed by Devon. |
| F3 | Stripe billing flow (checkout, upgrade, cancel) | Stable, revenue-critical, webhook contracts in production. | Out of scope. Confirmed by Devon. |
| F4 | Reader flow (`/c/<slug>` rendering, cover, table of contents, footnotes) | The reading experience is what the product is *for*. | Visual / typographic refinements may surface but functional reading flow is protected. |

### Feature

| # | Item | Why protected | Surfacing notes |
|---|---|---|---|
| Ft1 | Custom domains | Premium feature; live for ~80 paid customers. | **Feature stays.** Routing semantics flexible — flagged by Devon for P2 attention. |
| Ft2 | Version history | Used heavily by pitch-prep users (Priya cited "Anand redrafted 14 times"). | Out of scope. |
| Ft3 | PDF export | Used for offline-pitch scenarios. | Out of scope. |
| Ft4 | Password-protected case studies | NDA / pre-launch use. ~30 customers rely on it. | Out of scope. |

### Voice / brand · *Marcus CC'd*

| # | Item | Why protected | Surfacing notes |
|---|---|---|---|
| V1 | The word **"case study"** | Loomwell's load-bearing term. Not "doc", not "story", not "project." | All copy must use "case study" — locked term. |
| V2 | The product name **"Loomwell"** | Owned, recognized by user base. | Not re-branding. |
| V3 | The brand promise **"writing-first"** | Differentiator vs Behance / Notion. | Any redesign idea that makes case studies feel less like a *read* fails this check. |
| V4 | The **opinionated nudging** voice trait in the editor | Editor copy gently pushes users toward narrative structure (e.g., "*Start with the brief, not the outcome*"). | Marcus calls this "the editor's narrator voice." Preserved. |
| V5 | Domain `loomwell.studio` | Brand asset. | Confirmed. |

### Integration / technical

| # | Item | Why protected | Surfacing notes |
|---|---|---|---|
| I1 | Stripe webhook contracts | Production billing depends on these. | Out of scope. |
| I2 | Cloudflare custom-domain infra | Stability of ~80 customer domains. | Out of scope (separate from F flow). |
| I3 | SendGrid transactional templates | Auth, billing, magic-link emails. | Templates may get voice-refresh in scope if positioning lens demands; transport contract untouched. *Flagged for P2.* |

### Compliance / legal

| # | Item | Why protected | Surfacing notes |
|---|---|---|---|
| C1 | GDPR cookie banner | EU customers, Tally-form for waitlist. | Out of scope. |
| C2 | Stripe-compliant pricing display | EU VAT, currency. | Out of scope. |

---

## Items considered and rejected

The following were proposed but **did not make** the protected list. Recorded for trail.

| Item | Why not protected |
|---|---|
| The "Built for designers" tagline | Priya recognized it as the wrong audience framing. Actively in scope to change. |
| The empty-state "Create your first doc" copy | Locked to change. |
| The marketing-site IA shape (Home → Features → Pricing → Login) | In scope; positioning surfaces will require IA changes. |
| The pricing page features-first framing | In scope (tentatively); positioning-led framing under consideration for P2. |

---

## Notes for P2

- **SendGrid transactional templates (I3)** flagged as edge case: integration is protected but copy may be in-scope under positioning. P2 to clarify whether transactional email voice work is in or out.
- **Custom-domain routing semantics (Ft1)** flagged by Devon at Kickoff for P2 IA-discussion.
- **Reader flow (F4) typography refinements** — protected functionally, but if the IA or onboarding pushes a new entry-point to the reader view, that's a *positioning* change worth noting at P2 even though the flow is protected.

---

*Inventory locked for the engagement on 2026-05-05. Any addition or removal during P2 or P3 requires a new sign-off by Priya (and Marcus for voice rows).*
