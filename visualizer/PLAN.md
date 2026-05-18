# Visualizer audit & repair — craft-dc Loomwell simulation

## Context

The `/visualizer` (React + Vite app at `craft-dc/visualizer/`) was built to walk a reader through the Loomwell simulation as a clickable timeline, with each event rendered through a tool-specific simulator (Notion / Meeting / Cliq / Mail / Figma). The simulation it wraps is the framework's first end-to-end worked example — `(Redesign · Positioning · Direction/Story)` — and the README frames the whole package as "a teaching artifact that a Manager can read top-to-bottom."

On audit, the visualizer has three real defects, and the simulation has two real authoring gaps the visualizer surfaces. Neither set indicates a framework flaw — the framework's Exit Gates correctly called for the artifacts in question; the simulation didn't go all the way; the visualizer faithfully shows where it stopped. This plan repairs the visualizer, repoints/backfills the artifacts the framework promised, and seats Meta content (calendar, retro, format audit) where it belongs.

Intended outcome: a Manager can open the visualizer, scrub the sidebar top-to-bottom, click any event, and read a meaningful artifact for every row — including the framework's Exit Gate deliverables, with the Meta tray providing audit content the README invokes.

---

## Findings

### Defects (visualizer)

1. **Garbage events 35–41 in `src/data.json`.** The build of `data.json` mis-parsed rows from the "Format-usage summary" table at the bottom of `meta/timeline.md`, emitting them as engagement events. Phase strings like `"Format-usage summary…"`, titles like `"3"`, `"5"`, `"8 threads"`.
2. **Empty events with no artifact.** ~13 events have no `artifactPath` (timeline marks them `—`, `(same thread)`, `(filed in Notion)`, `(recording filed)`, `(in same thread)`, `(folded into …)`). Each renders as an empty viewer or with a thread-content miss.
3. **Combo-format events drop one artifact.** Format-routing in `src/components/MainViewer.jsx` is substring-matched and first-wins. `"Zoho Mail + PDF"` (event-12) routes to Mail — the PDF artifact never shows. `"Notion + Figma file"` (event-21) routes to Notion — the Figma side never shows.

### Authoring gaps (simulation)

4. **6 orphan artifacts on disk** that no event surfaces: `p1-kickoff/stakeholder-map.md`, `p1-kickoff/cadence-agreement.md`, `p2-requirements/positioning-delta-table.md`, `p2-requirements/strategic-bets.md`, `meta/calendar-invites.md`, `meta/retro-notes.md`.
5. **2 framework-required artifacts that don't exist on disk:** working sync notes (event-22) and positioning checkpoint transcript (event-29). Both are Exit-Gate-relevant — the framework calls for them; the simulation skipped them.

### Framework verdict

The framework holds. The defects above are visualizer bugs (1–3) and simulation authoring gaps (4–5), not framework gaps. The Exit Gates correctly require stakeholder map, cadence agreement, positioning checkpoint, etc. — those are well-specified deliverables. The simulation produced some of them but didn't catalogue them in the timeline, and skipped others entirely. Backfilling and repointing closes the gap without touching the framework.

---

## Locked decisions

| # | Decision |
|---|---|
| 1 | Visualizer's job = **engagement walkthrough**. Every artifact a reader needs is visible. |
| 2 | Orphan working artifacts (`stakeholder-map`, `cadence-agreement`, `positioning-delta-table`, `strategic-bets`) → **flat events** (each its own sidebar row). |
| 3 | Cross-cutting meta artifacts (`calendar-invites`, `retro-notes`) + the **Format-usage summary** → **"Meta" sidebar section** below P3. |
| 4 | `data.json` maintenance = **hand-edit only**. No generator script. |
| 5 | Empty events: **Group A** (same-thread duplicates) → repoint to existing thread file; **Group B** (Exit-Gate-relevant: weekly sync, positioning checkpoint) → backfill new artifacts; **Group C** (phase markers / acks / distributions) → drop. |
| 6 | Combo-format events: **split into flat single-format events**. Build a small **PDFSimulator** (~50 lines). Author **one new Figma artifact** for event-21 Figma half. |

---

## Implementation steps

### Step 1 — Clean `src/data.json`

- **Delete** events 35–41 (Format-usage-summary garbage).
- **Drop** Group C noise: event-4, 11, 13, 20, 24, 27.
- **Repoint** Group A: event-1, 18, 31, 32 → corresponding thread files.
- **Split** event-12 → 12a (Mail) + 12b (PDF). Split event-21 → 21a (Notion) + 21b (Figma).
- **Add** 4 flat orphan events: stakeholder-map, cadence-agreement, positioning-delta-table, strategic-bets.
- **Backfill** event-22 (working sync notes) and event-29 (positioning checkpoint transcript).
- **Add Meta** section: calendar-invites, retro-notes, format-usage-summary. Tag with `meta: true`.

### Step 2 — Sidebar Meta section

Modify `src/components/TimelineSidebar.jsx` — render `meta: true` events under a final "Meta" group below all phases.

### Step 3 — Author 3 new simulation artifacts

- `p2-requirements/working-sync-1-notes.md` — short Notion-style internal sync notes (2026-05-06).
- `p2-requirements/positioning-checkpoint-transcript.md` — medium transcript (2026-05-15).
- `p2-requirements/current-state-inventory.figma.md` — Figma frame stand-in.
- `meta/format-usage-summary.md` — extracted from `meta/timeline.md`'s tail table.

### Step 4 — Build PDFSimulator

- Create `src/components/simulators/PDFSimulator.jsx` (~50 lines).
- Modify `src/components/MainViewer.jsx` to route `pdf` format → PDFSimulator.

### Step 5 — Verification

`npm run dev`; click every event; verify Meta section; spot-check format coverage and Exit-Gate trace.

---

## What this does NOT do

- Build a `data.json` generator. Hand-edit only.
- Redesign the simulator components beyond adding PDFSimulator.
- Touch the craft-dc framework docs. Framework holds; no edits.
- Extend the simulation to a second engagement. Loomwell only.
