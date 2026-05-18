# Positioning checkpoint #1 — Loomwell × DC

> Format: Zoho Meeting (recorded). Transcript edited for readability.
> Date: 2026-05-15 (Fri) · 15:00–15:42 IST.
> Attendees: Marcus Chen (positioning decider), Priya Raman (founder/product decider), Kushal Kahar (DC, DM).
> Audience: Internal record (recording filed; transcript in Notion sub-page).
> Confirmation: Doubled as Marcus's sign-off conversation for Requirements Doc; written sign-off followed at 16:42 IST.

---

## Pre-call (00:00–02:00)

**Kushal:** Hi both. Recording on. Marcus, this is our first standing positioning checkpoint — biweekly Fri, per cadence. Today's doubling as your sign-off conversation for the Requirements Doc. Priya has signed at 14:03 today. Devon signed async at 15:17 — just before we got on. You're the last one.

**Marcus:** Understood.

**Kushal:** Forty-five minutes. I want to walk the positioning delta table row by row, you push back where you push back, and at the end we either close it or we name what's open. Good?

**Marcus:** Good.

## How we're going to read the delta table (02:00–05:00)

**Marcus:** Before we start. I want to be explicit about what I'm signing for, because it matters for what I'll push on.

**Kushal:** Go.

**Marcus:** I am signing that **every surface delta in this table traces to a pillar, and that no pillar is orphaned in the application.** I am *not* signing the exact copy in the Target column. The copy lands at P3 with reader-test signal. Today I'm signing the *direction* and the *pillar trace*. Right?

**Kushal:** Right. The Target column is "direction" — the final wording lands with reader-test feedback at P3. The Pillar column and the Delta-type column are what you're signing.

**Marcus:** Good. With that frame, let's go.

## Row-by-row walk (05:00–32:00)

**Kushal:** Twenty-seven rows. I'll move fast on the ones I think you'll wave through, slow on the ones I think you'll push on. Stop me anywhere.

**Marcus:** Yeah.

**Kushal:** *(shares positioning-delta-table.md in Notion)* Row 1, Homepage hero. Current: "A faster, cleaner home for your case studies." Target direction: "For senior creatives turning their work into a story that wins the next room." Pillar: P2.

**Marcus:** P2, yes. Direction lands. Move.

**Kushal:** Row 2, second fold. Current: "Built for designers." Target: audience-explicit. Pillars P1 and P2.

**Marcus:** Both pillars hit this row. Good — that's the "for the pitch" line *and* the "by senior hands" reassurance. Keep both as the pillar trace.

**Kushal:** Row 3, homepage features section. Current: feature grid. Target: outcome list. Pillar P3 — *"reads-not-browses"* on the surface that talks about the product.

**Marcus:** *(pause)* I want to be careful here. Pillar 3 is about the reading experience inside the product. Are we sure the homepage features section earns the P3 trace? Or is it a P2 surface dressed in P3 voice?

**Kushal:** Fair pushback. My argument: the *reason* we collapse the feature grid into outcome prose is that the homepage should *read like* what the product produces. A page of bullets contradicts a product that says "we're for reading, not browsing." The structural change — grid to prose — is the P3 trace. The copy is P2.

**Marcus:** *(beat)* Okay. The structural change is the P3 hit. Copy is P2. Note that in the table — split the Delta-type into "P3 structural + P2 copy" rather than just P3.

**Kushal:** Done. Gerwin can update before sign-off.

**Marcus:** Continue.

**Kushal:** Row 4, embedded curated case study on homepage. New component. Pillar 3.

**Marcus:** Pure P3. Move.

**Kushal:** Row 5, "Why Loomwell" page. New surface. Pillar 1 — *"made by senior hands."*

**Marcus:** New page. P1 home. Move.

**Kushal:** Row 6, "Read a case study" page. New surface. Pillar 3 showcase.

**Marcus:** *(reads)* "Loomwell at its best, in 8 minutes." That subhead — is that aspirational or are we committing to that copy?

**Kushal:** Aspirational. Direction.

**Marcus:** Acceptable. Move.

**Kushal:** Rows 7, 8, 9 — pricing page. Hero copy, tier names, per-tier outcome line. Pillar 2 across all three.

**Marcus:** All P2. Note on row 8 — tier rename is display only. Stripe `plan_id` stays.

**Kushal:** Captured in Requirements §11, locked with Devon on 6 May working sync. Stripe metadata is not touched. Display rename is reversible by config.

**Marcus:** Good.

**Kushal:** Row 10, signup role field. Currently "What's your role at the company?" Target: "Where are you in your career?" Pillar 1.

**Marcus:** *(pause)* This one matters more than you've made it look. The signup form is the first moment a paying user tells us who they are. If we ask "role at the company," we encode the 2022 audience assumption — that they have a company. Half your real audience is between roles, or solo, or freelance. The new field language signals we know that. Pillar 1, yes — *"by senior hands"* implies "we get how senior careers actually work, which is not always inside one company."

**Kushal:** Want to push the row up the table? It's currently buried mid-list.

**Marcus:** No, leave the order. But mark it with a star — I want a row-level note on it in the Requirements Doc.

**Kushal:** Will do.

**Kushal:** Row 11, empty state CTA. Current: "Create your first doc." Target: "Start your first case study. Here's what one looks like." Pillar 3. Note: "case study" is the locked term.

**Marcus:** Locked at P1 Don't Break. Don't relitigate. Move.

**Kushal:** Row 12, empty state body — replaced by embedded preview. New component + retired copy.

**Marcus:** Bet 4 from the strategic bets. Acknowledged. Confirmation already in §8.

**Kushal:** Rows 13–14, settings microcopy. Pillar 1 voice.

**Marcus:** P1, yes. Move.

**Kushal:** Row 15, share modal. Pillar 2 — *"for the pitch."*

**Marcus:** P2. Move.

**Kushal:** Rows 16–17, 404 and 500. Voice touches. Pillar 1.

**Marcus:** *(reads)* "This page got cut from the case study." That's the right register. P1 voice. Move.

**Kushal:** Rows 18–25, transactional emails. Welcome, magic-link, password-reset, publish-confirm, billing-success, billing-failed, custom-domain-verified, account-deleted. All Pillar 1, except 21 and 24 which are P2.

**Marcus:** Stop on 18 for a beat. The welcome email is the *boldest* voiced surface in the whole table. It's where the P1 voice meets a person who just paid us money. Are we sure we want the bolder voice on welcome and barely-voiced on magic-link?

**Kushal:** Yes — captured in Bet 3. Welcome is bold; magic-link is barely voiced; billing emails are warmth + function only. The mitigation Bet 3 also commits you to reviewing every template at this checkpoint before P3 deploy.

**Marcus:** Yes. I'll watch this one. Note it in the row.

**Kushal:** Done. Rows 26–27 are infra — reserved-namespace allowlist and nav. Both `(infra)` plus pillar trace for the nav content. Move?

**Marcus:** Move.

## The pillar coverage check (32:00–37:00)

**Marcus:** Now the part I came to push on. Pillar coverage. Read me the bottom of the table.

**Kushal:** *(scrolls)* Pillar 1, *"Made by senior hands"* — primary home is the "Why Loomwell" page and the welcome email. Secondary: signup, 404/500, settings voice, magic-link, most transactional. Pillar 2, *"For the pitch, not the portfolio"* — primary home is the homepage hero and the pricing page rows. Secondary: share modal, publish-confirm email, second-fold, features-section rewrite. Pillar 3, *"Reads, not browses"* — primary home is the "Read a case study" page, the empty state, the homepage embedded preview. Secondary: features-section rewrite — meta-talks about reading.

**Marcus:** Read me the line at the bottom.

**Kushal:** *"All three pillars have at least one primary home and multiple supporting surfaces. No pillar is orphaned."*

**Marcus:** That's the line I came to verify. Every pillar has a primary home that exists as a surface, and at least three secondary surfaces. That's what I needed. *(beat)* What got dropped?

**Kushal:** *(reads from the "Rows challenged & dropped" section)* Reader-cover typography refinement — reader is protected. Editor narrator-voice nudges — already pillar-aligned. App nav restructure — editor flow protected. Adding analytics — out of this engagement. Brand-system refresh — explicitly out per Calibrate §4, Don't Break, Requirements §5.

**Marcus:** Good. All five are the right calls. Especially the brand-system one — I had to talk Priya out of putting that in twice.

**Priya:** *(laughs)* You did.

## Priya's gut-check (37:00–40:00)

**Kushal:** Priya, you've been quiet. Anything biting?

**Priya:** Two things. One small, one less small. Small one: the pricing per-tier lines — *"Walk into one interview a quarter with the case already made"* — I love that, but I want to write those myself. Not as a sign-off blocker — just as a P3 ask. I want the voice on those rows to be mine specifically, not DC's.

**Kushal:** Captured. Founder-authored copy on pricing per-tier lines. Adding to Requirements §5 as a row in the Out column — *"DC writes pricing tier names and pricing hero; Priya writes per-tier outcome lines."*

**Priya:** Yes. Less-small one: the "Why Loomwell" page. I want a paragraph on that page that *I* write — the founder-letter version. Not a designed manifesto. Just text. Maybe 200 words.

**Marcus:** *(beat)* Strongly support that. The "by senior hands" pillar is most-authentic when the founder is on the page. Founder-letter format works.

**Kushal:** Captured. "Why Loomwell" page has a founder-paragraph slot, Priya authors. DC designs around it. P3 work item.

**Priya:** Good.

## Sign-off (40:00–42:00)

**Kushal:** Marcus. Last call. Are we closed?

**Marcus:** *(pause)* Closed. Every delta traces to a pillar. The pillars don't get relitigated by the surfaces. I'll send the sign-off email by EOD with that line.

**Kushal:** Thank you. Priya?

**Priya:** I signed at 14:03. Yes.

**Kushal:** Devon at 15:17. That's all three. The Requirements Doc is locked at end of today. P3 kickoff is Fri 22 May on calendar. Sending a recap email after this call.

**Marcus:** Recap will include the row-3 Delta-type update? The split into P3-structural + P2-copy?

**Kushal:** Yes. Gerwin to update the table this evening; v3 of the doc replaces v2 before P3.

**Marcus:** Good. End recording.

---

## Kushal's post-call annotation (2026-05-15, 16:08 IST)

The pillar-coverage check is what Marcus came to verify — same beat as Calibrate where I'd verified the no-analytics implication. The whole 42 minutes really resolves to: *does the framework of every delta tracing to a pillar hold across 27 rows?* It did. Two row-level pushes (row 3 delta-type split; row 10 row-level note) are real but small.

Priya's "I want to write the founder paragraph and the per-tier lines myself" is the third pattern from this engagement of *founder-authored copy* surfacing — it appeared at Calibrate too (the "Loomwell stays" line about the name). Worth adding to retro: in Direction/Story engagements, founder-authored copy categories should be a scope-row, not an exception.

Marcus's sign-off email came 28 minutes after end-of-call.
