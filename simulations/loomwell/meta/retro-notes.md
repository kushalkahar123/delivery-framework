# Retro — Loomwell P0 → P2

> Format: Notion sub-page on Projects DB row → `Loomwell / Retro / P0-P2`.
> Authored: Kushal, 2026-05-18 (Mon, today). Reviewed by Gerwin and Devina in Cliq before sharing in team channel.
> Audience: Internal — DC team. Lessons-learned channel.

---

## What worked

### 1. The "case study" lock at Kickoff Block 6 (Devina's note)

Priya was wavering toward "story" as the universal term. Marcus held the line — "case study" stays. Every downstream decision (delta table, voice-sample pairs, empty-state copy, positioning delta table) trades on a single locked term. That's worth tens of hours of rework saved.

**Lesson:** when a term is the load-bearing word for the product, lock it in the Don't Break inventory at P1. Don't let it stay open to P2.

### 2. Eng (Devon) in the room from Kickoff, not P2

Custom-domain *routing semantics* — a real eng-feasibility surface — landed at Kickoff Block 3 because Devon was there. If he'd only joined P2 we'd have spent a week designing IA that conflicted with the routing model.

**Lesson:** pull eng into Kickoff even when there's no obvious eng question. The surfaces that aren't obvious are the ones eng catches.

### 3. Marcus's pillar framework treated as *input*, not *deliverable*

The risk going in was that DC and Marcus would produce parallel positioning artifacts that didn't merge. The Kickoff Block 2 frame — *"pillars are input, surface application is DC, messages are co-owned"* — defused this in 10 minutes. Marcus signed off cleanly at P2.

**Lesson:** when the client comes in with a half-built positioning artifact, *first call at Kickoff is the integration question*. Frame the boundary explicitly.

### 4. Founder consultation as a *strengthening pass*, not a decision pass

Devina's Cliq comments on the Calibrate Note draft made the success-metric framing 30% sharper (qualitative-method → 4-of-5 reader-test pass/fail). The Founder consult didn't change the engagement; it tightened the language so P2 sign-off had something measurable to point at.

**Lesson:** use the Founder consult to push craft, not to make decisions. The DM had already decided.

### 5. Same-day Recap with the "story I heard you want this product to tell" opener (DS variation)

Priya replied 👍 within 3 hours. Marcus replied next morning with "this reads cleanly." That opener — the framework-mandated story articulation for DS — is what made the Recap feel earned rather than transactional.

**Lesson:** the DS-specific Recap opener is non-negotiable. Don't skip it for any Direction/Story client.

---

## What we'd do differently

### 1. Send the Calibrate Note to Priya 24h earlier

Drafted Sat, locked Mon AM after Devina consult, shared Tue. The Founder consult was correct timing-wise, but we could have done the Founder consult on Saturday and shared Monday AM, gaining a full business day of Priya's read-time before the Pre-Read landed Wednesday.

### 2. Brought "case study" to Don't Break P1 *as a category*, not just one row

"Case study" got locked. But three other terms ("studio" vs "workspace", "story" vs "case study", "doc" vs "case study") came up later in P2. Could have made a dedicated "Locked terms" section in the Don't Break inventory at P1.

### 3. Got Marcus's pillar file 48h before Kickoff, not 4h before

Marcus offered to send early. Kushal asked for "Friday morning" — meaning 4h ahead of the call. Should have asked for Thursday. Reading a pillar framework with 4h vs 48h is the difference between "understand it" and "have an opinion on it."

### 4. Run the Review Worksheet questions past Devon async *before* the clarification call

Two of the five clarification questions (Q3 Stripe metadata, Q5 routing) were Devon-async-answerable. Could have closed them before the call, freeing the call for the messier Priya-Marcus questions.

### 5. Over-spec'd the reader test slightly at P2

The reader-test protocol (§4) is detailed enough that we may be over-committing at P2. The framework's "qualitative pass/fail" was enough; we added 4 of 5 / 2 of 3 scoring details that could have lived in a P3 sub-doc. Trade-off: it gave Priya confidence at sign-off, but raised execution stakes.

---

## What surprised us

- **Priya's "writing-first" breach definition was the cleanest deliverable of the engagement.** It took 20 seconds in the clarification call. Four criteria. We've already started using its shape on another DS engagement Gerwin is shadowing.
- **The empty state being the single highest-leverage surface.** Going in, the homepage was the assumed leverage point. The audit revealed the empty state ranks above it: it gets 100% of paid-user traffic, it's the first non-marketing surface a user reads, and it currently contradicts the positioning ("doc"). Now baked into framework intuitions: *always audit empty states on Positioning engagements.*
- **The customer-facing manifesto / about page being Priya-authored, not DC-authored.** Surfaced late in P2 (Priya's 15 May note). Right call by Priya. Worth noting in framework: *founder-authored copy is a real surface category in DS engagements — Section 5 Out column should explicitly accommodate it.*

---

## Framework-level observations (for craft-dc)

| Where | Observation |
|---|---|
| `redesign/p0-calibrate.md` DS variation | The "brand-coherence-debt as a distinct category from structural-vs-surface" framing held perfectly. Don't soften it back to a 2-axis model. |
| `redesign/p1-kickoff.md` Positioning lens | Pre-Read ask for "3 reference brands you want to sound like now" was load-bearing — Priya brought four, one of which (NYT Magazine voice) became the most-cited reference in P2. Keep the ask. |
| `redesign/p2-requirements.md` DS+Positioning | The "every delta traces to a pillar" rule (delta-table Pillar column) is what stopped scope drift. Marcus enforced it row-by-row. Without that rule the engagement would have absorbed 2–3 visual-system asks. |
| `redesign/p2-requirements.md` no-analytics case | The qualitative-pass-fail reader-test substitution worked. Worth turning into a re-usable protocol template under `templates/` — Kushal to draft. |
| All three Redesign docs | Pillar 1 *naming* stayed open across P0, P1, and into P2 — and that was *fine*. Concept-locked-name-open is a valid state. Worth noting in framework as not a gate failure. |

---

## Template asks (to feed `craft-dc/templates/`)

1. **DS Calibrate Note template** with first-10-seconds-observation section + brand-coherence-observation section pre-stubbed.
2. **Reader-test protocol template** (qualitative pass/fail) for no-analytics Redesigns.
3. **Positioning delta table template** with mandatory Pillar column.
4. **"Locked terms" section** for Don't Break inventory.

Kushal owns drafts; will share in `#design-team` for review.
