# Weekly working sync #1 — Loomwell

> Format: Notion sub-page on Projects DB row → `Loomwell / P2 / Working syncs / Sync #1`.
> Date: 2026-05-06 (Wed) · 16:00–17:00 IST · Zoho Meeting (recorded, internal).
> Attendees: Kushal (DM), Gerwin (SD), Priya (Loomwell). Marcus optional — did not join (travelling). Devon joined for the last 15 min (eng-feasibility).
> Audience: Internal + Priya. Shared back in Cliq summary same evening.

---

## Agenda (Cliq'd 5 May, 18:30 IST)

1. Inventory progress — where Gerwin is, what's still to capture (15 min)
2. Open questions surfaced by the inventory (15 min)
3. Pre-clarification-call shape — what we'll bring on 12 May (15 min)
4. Eng feasibility — three open items for Devon (last 15 min)

---

## Inventory progress (Gerwin → all)

Captured so far (Figma file `Loomwell — current state v1`, frames 1–24):

- Marketing site: home, pricing, "for designers" page, blog index, blog post.
- Auth: sign-up, sign-in, magic-link landing, password reset.
- App shell: empty workspace, populated workspace, settings → workspace, settings → billing, settings → custom domain.
- Reader-side: case-study cover, case-study body, share modal.

**Still to capture (target Mon 11 May):**

- All 9 transactional emails (welcome, magic-link, password-reset, publish-confirm, billing-success, billing-failed, custom-domain-verified, account-deleted, member-invite).
- 404 / 500 / maintenance pages.
- Empty case-study (in-progress draft state).

**Priya note:** Pull `member-invite` even though we have ~0 multi-user workspaces — it's a positioning surface we shouldn't ignore. Captured.

---

## Open questions surfaced by inventory

Five questions queued for the **clarification call (Tue 12 May, 16:00 IST)**:

| # | Question | Owner | Resolution channel |
|---|---|---|---|
| Q1 | Is the "for designers" marketing page in scope, or replaced? | Priya + Marcus | Live on clarification call |
| Q2 | Does "case study" stay the locked term across all surfaces, or do we let "story" surface in marketing? | Marcus | Live on clarification call |
| Q3 | Stripe metadata — can pricing-tier display names change without touching `plan_id`? | Devon | Async before call (see below) |
| Q4 | What's Priya's archetype framing for the audience? (mid-career creative … but what *sub-archetypes*?) | Priya | Live on clarification call |
| Q5 | Custom-domain routing — does adding new top-level paths (e.g. `/read`) collide with the slug allowlist? | Devon | Async before call (see below) |

**Decision:** Kushal will Cliq Q3 and Q5 to Devon tonight; aim to close async by Fri 8 May so the clarification call can focus on Q1, Q2, Q4 (the messier ones).

---

## Shape of clarification call (Tue 12 May)

- 45 min, all hands (Priya, Marcus, Devon).
- Inventory share-back (10 min) — Gerwin walks the Figma file.
- Questions (25 min) — Q1, Q2, Q4 live; Q3, Q5 read back from async resolutions.
- Requirements Doc preview (10 min) — Kushal shows skeleton with §-numbers; sets expectation for Wed 13 May v1.

Gerwin to share inventory link **Mon 11 May AM** so the team has 24h read-time.

---

## Eng feasibility — Devon (16:42–17:00)

Devon joined for the tail. Three items raised:

1. **Reserved-namespace routing.** If we add `/read` and `/why-loomwell` as top-level paths, conflicts with the `/<slug>` allowlist? Devon: *manageable — needs explicit allowlist entry, ~2h work. No blocker.*
2. **Pricing-tier display rename.** Stripe metadata vs. display label decoupling? Devon: *fully decoupled today. `plan_id` and `display_name` are separate fields. Display change is config-flip, reversible.*
3. **Empty-state embedded preview (a potential P2 bet).** Server-side render feasibility for a curated case-study preview in the empty workspace? Devon: *yes, with caching. 1–2 days build, P3 timeline. Wants to see the curated set before committing.*

All three answers locked. Devon will reply in Cliq with written ack tomorrow.

---

## Decisions made on call

| # | Decision | Decider | Captured in |
|---|---|---|---|
| D1 | Inventory completes Mon 11 May AM | Gerwin (owner) | (this doc) |
| D2 | Clarification call on Tue 12 May, agenda set above | Kushal | (this doc + Cliq) |
| D3 | Stripe `plan_id` stays untouched; display rename only | Devon | Devon's Cliq tomorrow + Requirements §11 |
| D4 | Reserved-namespace allowlist becomes a Requirements row (§11.4) | Devon + Kushal | Requirements Doc |

---

## Blockers

**None.**

---

## Action items

- [ ] **Kushal** — Cliq Q3, Q5 to Devon (tonight).
- [ ] **Gerwin** — complete inventory frames 25–40 by Mon 11 May AM.
- [ ] **Gerwin** — share inventory link in Notion Mon 11 May AM (Priya + Marcus + Devon).
- [ ] **Kushal** — draft Requirements Doc skeleton (§ headings only) by Fri 8 May.
- [ ] **Devon** — written ack on D3, D4 (Wed AM, Cliq).
- [ ] **Priya** — pull a candidate set of 3–5 case studies to feature on a future "Read" page (no commitment yet — bring to clarification call as a thought).

---

*Filed 2026-05-06, 17:18 IST. Cliq summary going out tonight.*
