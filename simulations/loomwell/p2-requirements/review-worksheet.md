# Review Worksheet — Loomwell P2

> Format: Notion sub-page on Projects DB row → `Loomwell / P2 / Review Worksheet`.
> Authored: Kushal + Gerwin, 6–11 May.
> Audience: **Internal only. DM/SD scratch.**
> Confirmation: DM-only.

---

## What's clear

- Three pillars are locked (concept). Pillar 1 naming is open. Pillars are input.
- 16 surfaces audited; 13 mis-positioned; 2 protected; 2 don't exist.
- Empty state, homepage hero, pricing tier names are the top-3 leverage points.
- Editor + reader = protected. No structural editor work.
- Transactional email copy = in. Integration = protected.
- "Case study" = locked term.
- Custom-domain routing semantics need P2 IA-discussion (Devon flag).
- Success metric = qualitative pass/fail. 4-of-5 reader test.

## What's ambiguous

| # | Question | For whom | When |
|---|---|---|---|
| Q1 | Does "Pillar 2 → pricing page" mean fully outcome-led tier names, or pillar-led header copy with current tier names retained? Tier *names* in scope, but how far do we push? | Marcus (positioning), Priya (product), Devon (eng — tier names tied to Stripe metadata, not just display) | Clarification call 12 May |
| Q2 | Is the "About / Why Loomwell" page a marketing-site page, or a product-side surface (e.g., shown on first login)? | Priya, Marcus | Clarification call |
| Q3 | Tier-name change: does Stripe metadata need to flip, or just display copy? | Devon | Pre-call async |
| Q4 | "Writing-first promise" breach definition — what's the criterion? | Priya | Async pre-call Loom + reply |
| Q5 | Routing semantics for custom domains vs new `loomwell.studio/<page>` IA — any preferred shape from Devon? | Devon | Pre-call async |
| Q6 | Embeddable case-study preview (surfaced at Kickoff) — P2 spec or P3 spec? | Priya, Devon | Clarification call |

## What's missing

- A **positioning delta table** populated for every in-scope flow/surface (Requirements Doc §6). Currently drafted for 8 of 13 in-scope surfaces. Need 5 more.
- **Reader-test protocol** spec'd at the level of "who, how many, what we ask, scoring." Currently just "4 of 5 unprompted." Need detail in §4.
- **Feasibility notes from Devon** on the 6 highest-leverage surfaces. Sent async; awaiting reply.
- **Pillar 1 naming** still open. Not a P2 blocker.

## Contradictions / tensions logged

| Tension | Where it surfaces | Note |
|---|---|---|
| Marcus: brand-coherence = headline. Kushal: structural+coherence = co-headline. | Calibrate Note §3 (60/35/5) vs Kickoff Block 3 | Deferred to P2 framing. Resolve in Requirements Doc §3 wording. |
| Priya: "story" almost crept in as a term. Marcus: "case study" stays. | Kickoff Block 6 | Resolved in Don't Break. Re-state in Requirements Doc Section 2 as a *positive constraint*. |
| Devon: custom-domain routing is flagged but unchanged feature; IA may force routing change. | Kickoff Block 3 + Q5 | Resolve at clarification call. |
| Brand-system refresh (wordmark/palette) — Priya said "separate project". Could leak into engagement if positioning forces visual change. | Calibrate §4 | Re-state in Requirements Doc §5 (Out column) hard. |

## Assumptions made (need confirming at call)

1. The "About / Why Loomwell" page is **a marketing-site page** at `/about` or `/why`. (Assumed because it's a positioning surface, not a product surface.) Confirm with Priya.
2. The "Read a Loomwell case study" page **renders curated published case studies** (Anand, Sumi, plus 2–3 more Priya chooses). (Assumed Priya curates, not us.) Confirm with Priya.
3. Pricing tier-name change is **display-only** at this engagement; Stripe metadata stays. (Assumed because metadata change has billing/migration implications outside scope.) Confirm with Devon.
4. Reader-test protocol uses **5 unaffiliated target-user readers** sourced by DC (network) **not Priya's customers**. (Assumed to avoid bias.) Confirm with Priya.
5. Pillar 1 *concept* (senior hands) is what we write to in P2, even though *naming* is open. (Confirmed Sat 2 May.)

## Questions to ask in clarification call

Picked from above:

1. (Q1, Q3) Pricing tier naming — how far do we go? Display-only or full Stripe-metadata change?
2. (Q2) "About / Why Loomwell" page — marketing-site or product-side?
3. (Q4) "Writing-first" breach definition — let's articulate together.
4. (Q5) Custom-domain routing — Devon, propose a shape.
5. (Q6) Embeddable case-study preview — P2 or P3?

5 questions. Targeting 45 min. Devon may have async answers already.

## Internal flags for Requirements Doc draft

- §1 (Audience): make the audience shift explicit with the *user-archetype change* (junior portfolio-builder → mid-career narrator). Marcus's pillar 1 lands here.
- §2 (Voice): include the "writing-first breach definition" sub-section.
- §3 (Audience+positioning shift): includes the from-state/to-state already in Recap, structured.
- §4 (Success metric): reader-test protocol detailed.
- §5 (Scope freeze): triple-check the Out column. Re-state brand-system refresh exclusion.
- §6 (Delta table): need to finish 5 remaining surfaces. Marcus reviews this section row-by-row.
- §7 (Requirements by flow): 8 in-scope flows. ~3 pages.
- §8 (Strategic bets): 3–5 bets. Current draft: (a) outcome-led pricing, (b) curated case-study page, (c) transactional voice as a positioning surface, (d) empty-state exemplar.
- §9 (Assumptions + risks): Marcus's pillar 1 naming risk, scope creep risk re-stated.
- §10 (Redesign+ final lock): ruled out, final. One paragraph.
- §11 (Eng feasibility): Devon writes; we draft skeleton.
- §12 (P3 path): IA Audit First-Win paragraph.
- §13 (sign-off block).

Plus: Section 2 sub-section "Voice & narrative current → target" (DS variation). Section 3 sub-section "Message pillars" (Positioning lens). §6 "Pillar column" in delta table.

---

*Worksheet last updated 11 May 22:00. Clarification call tomorrow.*
