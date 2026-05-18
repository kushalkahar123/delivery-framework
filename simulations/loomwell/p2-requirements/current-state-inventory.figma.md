# Loomwell — Current State (Figma file)

> Format: Figma file `Loomwell — current state v1` (Loomwell workspace, DC project folder).
> Authored: Gerwin Machado, 2026-05-05 → 2026-05-11. Reviewed by Kushal daily.
> Audience: Client (Priya, Marcus, Devon). Shared as a read-only Figma link with the Notion `current-state-inventory.md` doc.
> Confirmation: Walked through by Gerwin in the Clarification call (2026-05-12); Priya and Marcus ack'd in the call.

---

## File structure

```
Loomwell — current state v1
├─ Page 1: Marketing site (frames 1–10)
├─ Page 2: Auth surfaces (frames 11–14)
├─ Page 3: App shell — empty + populated (frames 15–20)
├─ Page 4: Reader-side (frames 21–24)
├─ Page 5: Transactional emails (frames 25–33)
├─ Page 6: Error & maintenance (frames 34–36)
├─ Page 7: Member-invite + multi-user (frames 37–38)
└─ Page 8: Annotation board — pillar overlay (frame 39)
```

Total: **40 frames**. Every product surface a new visitor or a paid user can see, captured at fidelity.

---

## Annotation system

Each frame carries three sticker types overlaid in the top-right:

- 🔴 **Brand-coherence break** — voice / message contradicts the engagement's positioning direction.
- 🟡 **Structural-positioning gap** — no surface exists to carry a needed positioning beat.
- 🟢 **Protected** — surface is in scope but explicitly **not changing** (per Don't Break inventory).

Sticker counts across the file:

| Sticker | Count | Where concentrated |
|---|---|---|
| 🔴 | 27 | Marketing site (8), transactional emails (10), empty state (3), settings (4), 404/500 (2) |
| 🟡 | 4 | Marketing site (no "Why Loomwell" / "Read" pages); empty state (no exemplar slot); footer (no founder-paragraph slot) |
| 🟢 | 12 | Reader-side (all 4 frames), editor-related app frames, custom-domain settings, billing, wordmark |

The 🔴 + 🟡 counts seed the 27 rows in `positioning-delta-table.md`.

---

## Frame index (annotated)

### Page 1 — Marketing site

| Frame | Surface | Stickers |
|---|---|---|
| 01 | Homepage hero ("A faster, cleaner home…") | 🔴 |
| 02 | Homepage 2nd fold ("Built for designers") | 🔴 |
| 03 | Homepage features grid | 🔴 |
| 04 | Homepage testimonials strip | 🔴 (light) |
| 05 | Homepage footer | (none — neutral) |
| 06 | Pricing hero + tier grid | 🔴 🔴 (hero + per-tier framing) |
| 07 | "For Designers" landing page | 🔴 |
| 08 | Blog index | 🔴 (light — voice off) |
| 09 | Blog post — typography sample | 🟢 (reader-adjacent type system protected) |
| 10 | (Missing: "Why Loomwell") | 🟡 |

### Page 2 — Auth surfaces

| Frame | Surface | Stickers |
|---|---|---|
| 11 | Sign-up — role field | 🔴 |
| 12 | Sign-in | (none) |
| 13 | Magic-link landing | 🔴 (light) |
| 14 | Password reset | (none) |

### Page 3 — App shell

| Frame | Surface | Stickers |
|---|---|---|
| 15 | Empty workspace ("Create your first doc") | 🔴 🟡 (copy + missing exemplar slot) |
| 16 | Populated workspace | 🟢 |
| 17 | Settings → Workspace | 🔴 |
| 18 | Settings → Billing | 🟢 |
| 19 | Settings → Custom domain | 🟢 |
| 20 | Settings → Members | 🔴 (light — voice) |

### Page 4 — Reader-side

| Frame | Surface | Stickers |
|---|---|---|
| 21 | Case-study cover (reader view) | 🟢 |
| 22 | Case-study body — typography | 🟢 |
| 23 | Reader nav / TOC | 🟢 |
| 24 | Share modal | 🔴 |

### Page 5 — Transactional emails (rendered HTML mocks)

| Frame | Surface | Stickers |
|---|---|---|
| 25 | Welcome | 🔴 |
| 26 | Magic-link | 🔴 |
| 27 | Password reset | 🔴 |
| 28 | Publish confirmation | 🔴 |
| 29 | Billing success | 🔴 (light) |
| 30 | Billing failed | 🔴 (light) |
| 31 | Custom-domain verified | 🔴 |
| 32 | Account deleted | 🔴 |
| 33 | Member invite | 🔴 |

### Page 6 — Error & maintenance

| Frame | Surface | Stickers |
|---|---|---|
| 34 | 404 ("Page not found") | 🔴 |
| 35 | 500 ("Something went wrong") | 🔴 |
| 36 | Maintenance / planned outage | (none) |

### Page 7 — Member-invite + multi-user

| Frame | Surface | Stickers |
|---|---|---|
| 37 | Invite modal (in-app) | 🔴 |
| 38 | Invite-accepted landing | 🔴 (light) |

### Page 8 — Annotation board (pillar overlay)

Frame 39 is the **synthesis board** — a single canvas with all 40 frames at thumbnail scale, color-coded by which **pillar** the change-direction primarily lands. This is the canvas Gerwin walks in the clarification call.

| Pillar | Color | Surfaces (thumbnail count) |
|---|---|---|
| **P1 — Made by senior hands** | warm-grey | 13 |
| **P2 — For the pitch, not the portfolio** | accent | 7 |
| **P3 — Reads, not browses** | green | 5 |
| Mixed / supporting | cool-grey | 7 |
| Protected (no change) | (frame-only, no color) | 12 |

The visual takeaway from the board: **P1 has the largest surface footprint** (the voice-and-microcopy spread), **P2 anchors the marketing-site beats**, **P3 hits the highest-leverage surfaces in low count** (homepage embedded preview, empty state, the new "Read" page).

---

## What's deliberately **not** in this file

- The **case-study editor** — protected; not captured frame-by-frame in this audit. Documented in Don't Break inventory.
- **Marcus's pillar Figma file** — separate file, client-side, referenced by link not copied.
- **Future-state designs** — this is the *current* state. Future designs land at P3 in a separate file.
- **Mobile reader frames** — type-system inherited from desktop frames 21–24; not duplicated.

---

## Hand-off note (Gerwin → Kushal, Cliq 2026-05-11)

> File is at fidelity. The synthesis board (frame 39) is the only thing I'd want one more pass on — Marcus will probably push on the color-coding when he sees it. I'd rather hear his pushback live in the clarification call than pre-empt it.
