# Kickoff call transcript — Loomwell × DC

> Format: Zoho Meeting (recorded). Transcript edited for readability.
> Date: 2026-05-01 (Fri), 16:00–17:33 IST.
> Attendees: Priya Raman, Marcus Chen, Devon Reyes (Loomwell). Kushal Kahar (DM), Gerwin Machado (SD) (DC).
> Audience: Internal (recording filed). Recap derived from this transcript.
> Confirmation: Recording filed in Notion; recap email sent same day (see `recap-email.md`).

---

## Block 1 — Intros (0:00–4:30)

**Kushal:** Hi everyone. Quick note — we're recording. Audio stays internal to DC. Used as we write the Recap and Don't Break inventory. Good?

*(All nod / verbal yes.)*

**Kushal:** Quick intros — Priya and Marcus, Devon, you've been on email but let's hear voices. I'm Kushal, I've been your DM since intake, I'll own this engagement through P2. With me is Gerwin — joining from today.

**Gerwin:** Hi all. SD on this. I'll be in the room from now through to P3 delivery. I read the Calibrate Note this morning and walked Loomwell yesterday — I have opinions but I'm going to mostly listen today.

**Priya:** Good. I'm Priya, founder. You've heard most of my story.

**Marcus:** Marcus, brand consultant — Priya and I have been working together since January. I'm based in Singapore, that's why I'm in this weird-looking room.

**Devon:** Devon, engineering. Fractional, 15 hrs/wk. Built v1 with Priya, still do all the eng.

**Kushal:** Good. Let's go.

---

## Block 2 — Marcus's framework, where it ends, where we start (4:30–17:00)

**Kushal:** Putting this first because it's the biggest risk we flagged at P0. Marcus — walk us through where you are.

**Marcus:** *(shares Figma)* Right. So I've been working on three pillars for Loomwell's positioning. The pillars are: **"Made by senior hands"** — the product is opinionated, not a blank canvas. **"For the pitch, not the portfolio"** — outcome-led, not artifact-led. **"Reads, not browses"** — the case studies are written things, not visual things. Each pillar has 4–6 messages I've drafted as variants.

**Kushal:** Good. Before we go further — Priya, do you ratify these pillars? Yes/no/half?

**Priya:** Yes. I've been living with these for two months. They feel right.

**Kushal:** Marcus, the messages — what stage are they at?

**Marcus:** Drafted variants. Not tested. Some are too clever, I know. They need to land on surfaces before they get refined.

**Kushal:** Here's how I'd propose this works. Tell me where I'm wrong. **The pillars are input** — we take them as given, we don't re-derive them. **The messages are also input** — but they're in flight, and we'll refine them surface-by-surface in P2 because the message and the surface co-evolve. **What DC produces is the surface-by-surface application**: where on the homepage does pillar 1 live, what does the empty state say to embody pillar 3, what's the IA shift required for pillar 2 to have a home. The Requirements Doc at P2 will include a positioning delta table that traces every surface change back to a pillar.

**Marcus:** That works for me. As long as the pillars don't get re-litigated at P2 sign-off.

**Kushal:** Pillars are locked. If P2 surfaces a surface where the pillar doesn't land — that's a *surface* problem, not a pillar problem. We'd come back to you and say "this pillar is tricky to land on this surface, here's why, here's what we'd propose instead at the message level". We wouldn't say "let's redo the pillar."

**Marcus:** Good.

**Priya:** I like that. I was worried about it bouncing around.

**Kushal:** Locking in: **Marcus owns pillars. DC owns surface application. Messages are co-owned and refined in P2.** Gerwin, captured?

**Gerwin:** Captured.

**Kushal:** This is going to be the most-cited line in the Recap. Marcus, you'll get the Recap by 8pm tonight.

---

## Block 3 — Calibrate read-back (17:00–26:00)

**Kushal:** Reading back the Calibrate Note in plain language. Stop me if anything's off.

*"Loomwell wants to stop reading like a 2022 Notion alternative and start reading like a 2026 pitching tool for senior creatives. The product itself doesn't change — editor, reading experience, mobile, custom domain, Stripe stay. What changes is the surfaces: marketing site, onboarding, empty states, microcopy, settings vocabulary. There's also a structural piece — the marketing site has no place for the positioning to live, and the showcase case studies aren't visible to new visitors. The debt mix is 60% brand-coherence, 35% structural, 5% surface. Track is Redesign, problem is Positioning, client type is Direction/Story. We've ruled out Redesign+ because there are no analytics. Success at P2 is going to be a qualitative reader-test pass/fail — 4 of 5 unprompted target-user readers state audience + value within 10s of landing — because we can't claim conversion lift without instrumentation."*

Any objections?

**Devon:** One. *"Custom domain stays"* — I want to mildly push. The custom-domain code is fine but the routing on `loomwell.studio/c/<slug>` vs custom domains is going to interact with whatever IA you propose. So *the feature stays* but the *routing assumptions* might need to flex. Flagging early.

**Kushal:** Good flag. Adding to "Unclear" until P2. Custom domain *feature* stays; *routing semantics* TBD.

**Marcus:** "60% brand-coherence" — I'd push that higher. The structural work matters but the work that wins or loses this engagement is the voice work.

**Kushal:** Noted, but I want to push back gently. The structural work has to land for the brand-coherence work to be visible. If we rewrite the homepage but there's still no "Who this is for" page, the rewriting doesn't land. The 60/35 ratio is about effort and risk; the *importance* is closer to 50/50. That's a P2-Requirements-Doc framing fight. Okay to defer?

**Marcus:** Okay to defer.

**Priya:** Read-back is otherwise correct.

---

## Block 4 — Live product walk, together (26:00–52:00)

**Kushal:** Gerwin drives. Priya, narrate. Marcus, Devon — interrupt freely.

**Gerwin:** *(shares loomwell.studio)* Homepage. Priya, what does the hero say today, what should it say?

**Priya:** Today: *"A faster, cleaner home for your case studies."* Should say: something about pitching for the next role. Marcus's pillar 2.

**Marcus:** Pillar 2's working draft is *"Your portfolio doesn't get you in the room. Your story does."* It's too long for a hero but that's the direction.

**Gerwin:** Good. Scroll.

**Priya:** *"Built for designers."* Wrong audience.

**Marcus:** And the wrong framing word — *built for* is product-led, not audience-led.

**Devon:** Note from the eng side — the audience copy on the second fold is hard-coded right now, not a CMS field. If you want to A/B that without a deploy, I'd want to make that a config first. Probably 2 hours of work. Flagging.

**Kushal:** Good flag. Adds to feasibility notes.

**Gerwin:** Sign up. *(creates account, lands in empty state)*

**Priya:** *"Create your first doc."*

**Marcus:** *(audible groan)* Yeah.

**Gerwin:** Empty state shows no exemplar. What if it showed Anand's case study as a preview?

**Priya:** That's what I've been saying. We just never built it.

**Devon:** Embeddable preview of a published case study? That's new code. Not huge — 1–2 days. But new.

**Gerwin:** Flagging — *embeddable case-study preview* as a new surface for P2.

**Kushal:** Captured.

*(Walk continues — settings, pricing, account. Each surface gets a "what it says now / what pillar it should embody / eng feasibility" pass. Captured in Gerwin's running Notion notes.)*

**Gerwin:** Last one. The two showcase case studies — Anand and Sumi — Priya, where do they live for a new visitor on the marketing site?

**Priya:** They don't.

**Gerwin:** That's a Section 4 finding. Marketing-site IA has no surface for the product at its best. New surface required: a "Read a Loomwell case study" page or section.

**Marcus:** Yes. That has to be in the engagement.

**Kushal:** In scope. Locked.

---

## Block 5 — Stakeholder Map (52:00–67:00)

**Kushal:** Sharing the Stakeholder Map I drafted. *(shares Notion)*

We need to fill 5 decider roles: product, positioning, eng/feasibility, "don't break", problem-statement.

| Role | Person | Rationale |
|---|---|---|
| Product decider | Priya | Sole product authority |
| Positioning decider | Marcus | Pillar owner; can veto messaging |
| Eng POC | Devon | Feasibility + deploy |
| "Don't break" decider | Priya | Owns what cannot regress |
| Problem-statement decider | Priya + Marcus jointly | Either can re-open the problem statement at P2 if reality diverges |

Anyone disagree?

**Marcus:** "Don't break" — Priya owns it but I want a heads-up if anything voice-related is on the list. Email-loop me on those rows.

**Kushal:** Good. Adding: positioning-related Don't Break items get Marcus on a CC.

**Devon:** I want eng POC to also be the deploy-risk decider for the actual rollout. That's a P3 thing but flagging.

**Kushal:** Captured for P3.

**Kushal:** Hidden stakeholders? Investors? Co-founder? Board?

**Priya:** None. Founder-funded. No board. I'm it.

**Kushal:** Disagreements between any of these that I should know about?

**Marcus:** Priya and I agree on the pillars. We sometimes disagree on which pillar a given surface should lead with. That'll surface at P2.

**Priya:** That's accurate.

**Kushal:** Good. Captured.

---

## Block 6 — "Don't break" inventory (67:00–82:00)

**Kushal:** Seeding live. We need 5–10 items by end of this block. Full inventory finalized within 48h. Categories: Flow, Feature, Voice/Brand, Integration, Compliance.

I'll prompt by category. Throw in.

**Kushal:** Flows.

**Priya:** Case-study editor flow — top to bottom. Don't touch the rhythm or the keyboard shortcuts.

**Devon:** Authentication flow — passwords, magic link, password reset. Devon-built, don't reshape.

**Kushal:** Features.

**Priya:** Custom domains. Version history. PDF export.

**Devon:** Stripe billing flow and webhook contracts — these don't move.

**Kushal:** Voice / brand.

**Priya:** The brand promise of "writing-first." Don't drift toward visual-first. Even if a redesign idea looks great visually, if it makes the case-study feel less like a *read*, it's wrong.

**Marcus:** The product name "Loomwell." The word "case study" — that's our word, we own it, don't rename to "story" or "project."

**Priya:** Wait — say that again.

**Marcus:** "Case study" stays.

**Priya:** I was wavering on "story" but yes. "Case study" stays.

**Kushal:** Captured. *Trade-off note* — the empty-state line we critiqued — "Create your first doc" — replacing with "case study" not "story." Locked.

**Marcus:** And don't lose the *opinionated* feel of the editor — the way it nudges you toward narrative structure. That's not a feature, it's a feeling.

**Kushal:** Gerwin — capture "opinionated nudging" as a voice trait, not a feature.

**Gerwin:** Captured.

**Kushal:** Integrations?

**Devon:** Stripe webhook contracts (already said). Cloudflare for custom domains. SendGrid for transactional email. None of these change.

**Kushal:** Compliance / privacy?

**Priya:** Nothing exotic. GDPR cookie banner — that's it.

**Kushal:** Good. I've got 12 items seeded. I'll send the formal inventory for sign-off within 48h business — so by Tuesday EOD IST. Priya signs; Marcus CC'd on voice/brand rows.

---

## Block 7 — Cadence, framework, P2 (82:00–92:00)

**Kushal:** Cadence agreement. *(shares draft)*

| Touchpoint | Cadence | Format | Owners |
|---|---|---|---|
| Status Cliq update | Tue + Fri | Zoho Cliq | Kushal → Priya |
| Weekly working sync | Wed 4–5 IST | Zoho Meeting (recorded) | Kushal + Gerwin + Priya + Marcus optional |
| **Positioning checkpoint** | Biweekly Fri | Zoho Meeting | Marcus + Kushal + Priya |
| Async deep-write | Loom as needed | — | DC → all |

The positioning checkpoint is the addition for Positioning-lens engagements. Biweekly. Marcus has veto on messaging. Anyone opposed?

*(All confirm.)*

**Kushal:** Framework. P2 produces a Requirements Doc — 13 sections — that's the artifact. It includes current-state inventory, target-state articulation, message pillars (Marcus's), positioning delta table, scope freeze, success metric, strategic bets, feasibility notes, P3 path. We share it 48h before sign-off ask. Sign-off is from Priya, Marcus, Devon, all written. Then P3 starts.

P3 for Redesign is the **IA Audit First-Win**. Translation: the first thing we deliver in P3 is a current-state IA audit + the revised IA. The revised IA is what makes the surface rewrites *land*.

**Priya:** Clear.

**Marcus:** Clear.

**Kushal:** P2 start: **Mon 5 May**. P2 sign-off target: **Fri 15 May**. P3 kickoff: **Fri 22 May**. Locking these.

---

## Block 8 — Q&A, close (92:00–93:00)

**Kushal:** Questions?

**Priya:** None.

**Marcus:** When's the first positioning checkpoint?

**Kushal:** Fri 15 May, at P2 sign-off.

**Marcus:** Good.

**Kushal:** Recap by 8pm tonight. Don't Break inventory for sign-off by Tue EOD. Wed 6 May we start P2 work. Thanks all. End.

---

## Gerwin's running notes (added during call, internal)

- Embeddable case-study preview = new surface in scope (P2 → P3)
- Audience copy on /. is hard-coded; Devon = 2h to make CMS
- Pillar 2 working line: "Your portfolio doesn't get you in the room. Your story does." — too long for hero
- "Case study" is the locked term. Not "story." Not "doc."
- "Opinionated nudging" is a voice trait, not a feature
- Custom-domain routing semantics need P2 attention
- Marketing-site IA: "Read a Loomwell case study" surface is a new page/section, in scope
- Disagreement risk: Priya/Marcus may diverge on which pillar leads a surface — surface at P2

These feed `current-state-inventory.md` and the P2 Review Worksheet next week.
