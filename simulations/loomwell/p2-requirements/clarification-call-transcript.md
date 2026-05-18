# Clarification call — Loomwell × DC

> Format: Zoho Meeting (recorded). Transcript edited.
> Date: 2026-05-12 (Tue), 16:00–16:48 IST. 48 min — over by 3 minutes; close call.
> Attendees: Priya, Marcus, Devon · Kushal, Gerwin.
> Audience: Internal (recording filed; resolutions feed Requirements Doc).
> Confirmation: Recording filed; disagreements on inventory resolved live.

---

## 0:00 — Frame

**Kushal:** Three things in 45 minutes. **One**, you've all read the current-state inventory we shared yesterday — we'll walk through it together for any disagreements. **Two**, five clarification questions we need to close before the Requirements Doc lands tomorrow. **Three**, anything you want to surface.

## 3:00 — Inventory share-back

**Kushal:** Inventory has 16 surfaces audited, 13 mis-positioned, 2 protected, 2 don't-exist. Anyone disagree with any classification?

**Marcus:** S-09 and S-10 — reader pages — you've got them as protected. I agree functionally. But the *cover image typography* could be a P3-or-later surface for pillar-3 application. Not for P2.

**Kushal:** Captured as P3-or-later. Not P2 scope.

**Devon:** F-10 transactional email — "templates copy in scope" — I just want to call out, there are 14 templates total in SendGrid, not just welcome / magic-link / receipt. Are all 14 in scope?

**Kushal:** Gerwin?

**Gerwin:** I audited 14. Three are voice-critical (welcome, magic-link, password-reset). Five are voice-relevant (publish-confirmation, billing-success, billing-failed, custom-domain-verified, account-deleted-confirmation). Six are utility (export-ready, webhook-failure-internal, etc.) where voice work has near-zero return. I'd put 8 in scope, 6 out.

**Devon:** Eight is doable.

**Marcus:** I want a sample-pair (current vs target) for two of them in the Requirements Doc so we anchor the voice. Magic-link and welcome.

**Kushal:** Done. Two sample-pairs in §7 of Requirements Doc.

**Priya:** Tier names — S-04. You've flagged them as in scope but I want to push back on the naming examples in the inventory. "In the Room" felt too on-the-nose. Don't lock those in the Requirements Doc.

**Kushal:** Won't lock. Will keep the *direction* (outcome-led naming) and remove the examples. Question 1 covers this.

## 8:30 — Q1: tier names — how far?

**Kushal:** Tier naming: display-only or Stripe-metadata-too?

**Devon:** Stripe metadata change is meaningful — current subscriptions are keyed by `plan_id` mapped to names. If we change names, I either keep the old `plan_id` and just change display labels (easy, 2h), or I migrate to new `plan_id`s and run a job (3 days work, customer-facing risk).

**Priya:** Display only.

**Marcus:** Display only is fine for this engagement. Real-name change can come later.

**Kushal:** Locked: display-only tier rename in P2/P3 scope. Stripe metadata untouched. Devon — 2h work.

## 13:00 — Q2: "About / Why Loomwell" page

**Kushal:** Marketing-site page or product-side surface?

**Priya:** Marketing-site. `/why-loomwell` or `/for-senior-creatives`. Not behind login.

**Marcus:** Agreed. Has to be visible to a cold visitor. This is pillar 1's home.

**Kushal:** Path: `/for-senior-creatives` placeholder; final slug a P3 call. Locked: marketing-site, public, in-IA.

## 16:00 — Q3 already answered (Stripe metadata).

## 16:30 — Q4: "writing-first" breach definition

**Kushal:** Priya — articulate. What would count as breaking the writing-first promise?

**Priya:** *(thinks 20 sec)* If a redesign idea makes any of these true, we've broken it.
1. The case-study editor adds visual-asset features that push users to start with images instead of words.
2. Marketing site leads with screenshots of the editor rather than examples of *reading*.
3. Empty state shows a visual canvas instead of a written exemplar.
4. The reader view defaults to a gallery / grid mode instead of a top-to-bottom read.

**Marcus:** That's a clean four-point test. Adopt it.

**Kushal:** Gerwin — capture verbatim. Goes in §2 of Requirements Doc as a positive constraint.

**Gerwin:** Captured.

## 23:30 — Q5: custom-domain routing

**Kushal:** Devon — propose a shape.

**Devon:** Current state: `loomwell.studio/<arbitrary>` is partly reader (`/c/<slug>`), partly app (`/app/*`), partly marketing (`/`, `/pricing`, `/about` doesn't exist). Custom domains map to a single user's published case studies at `<custom>/<slug>`.

The risk: if IA adds `/for-senior-creatives`, `/read`, etc., we *might* shadow user slugs. Today `/c/<slug>` is the case-study namespace — clean separation. New marketing routes can shadow.

Proposal: lock the marketing-site namespace to a few reserved paths — `/`, `/pricing`, `/for-senior-creatives` (or final naming), `/read` (the curated case-studies page), `/auth/*`, `/app/*`, `/settings/*`, `/c/<slug>`. Anything outside these is treated as 404. That's safe.

**Kushal:** Locks the marketing IA shape into a fixed set of paths. I like it. Gerwin?

**Gerwin:** Yes. Adding to Requirements Doc §6 as part of the IA delta.

**Marcus:** Practical impact: I can never name a campaign page `/pitch` or `/winning` later?

**Devon:** You can. You just add it to the reserved list. The work is "explicit, not creeping."

**Marcus:** Good.

## 35:00 — Q6: embeddable case-study preview

**Kushal:** P2 or P3?

**Devon:** P2 spec, P3 build. If we spec at P2 (target frame in Figma, Devon estimate) it's clear scope. Build is 1–2 days; happens after IA Audit First-Win lands at P3.

**Kushal:** Locked: **P2 spec, P3 build.** Goes in §7 as a flow requirement.

## 39:00 — Anything else

**Priya:** One worry. The Requirements Doc has 13 sections. I'm not going to read 30 pages on Wednesday. Can you give me a 1-page summary at the top?

**Kushal:** Yes. Section 0 — Executive summary, ~1 page. Will trace to every section that follows. Gerwin writes; I review.

**Marcus:** I'll read all 13. Especially §3, §6, §8.

**Devon:** I'll read §11 and §6 carefully.

**Kushal:** Good. Doc tomorrow EOD. 48h review window opens Wed. Sign-off Fri.

## 42:00 — Reader-test protocol

**Kushal:** Before we close — reader test for the success metric. Five unaffiliated target-user readers, sourced by DC (network, not your customers — avoids bias). We show them three surfaces: redesigned homepage, redesigned empty state, redesigned pricing. We ask "what does Loomwell do, and who is it for?" within 10 seconds of each surface. Score: clear / partial / wrong. Pass criterion: 4 of 5 clear on at least 2 of 3 surfaces.

**Priya:** Five is small. Why not 10?

**Kushal:** Five for the binary at P2 (pass/fail), 10 for the validation at P3 post-delivery. Different purpose. Five is enough to detect "broken." Ten gives confidence.

**Priya:** Okay.

**Marcus:** I want the protocol in the Requirements Doc. So future-Marcus knows what was promised.

**Kushal:** §4 sub-section.

## 47:00 — Close

**Kushal:** Doc by EOD tomorrow. Sign-off Fri 16:00 IST. Positioning checkpoint #1 same window. Thanks all.

---

## Post-call notes (Kushal + Gerwin, 17:30)

Resolved:
- Q1 display-only tier rename
- Q2 marketing-site "about" page at `/for-senior-creatives`
- Q3 Stripe metadata untouched
- Q4 four-point writing-first breach test (Priya verbatim)
- Q5 reserved marketing-IA namespace (Devon)
- Q6 embeddable preview = P2 spec, P3 build

Inventory disagreements resolved:
- 8 transactional templates in scope (not 14)
- Reader cover-typography = P3-or-later, not P2
- Pricing tier *naming examples* removed; direction stays

New deliverable to write: **executive summary at top of Requirements Doc** (§0). Gerwin drafts tonight.

Cleared to draft Requirements Doc v1 in the morning. Targeting 14:00 IST share on Wednesday.
