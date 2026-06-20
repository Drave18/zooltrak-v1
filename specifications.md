# Zoltrak Website Style Specification

## Aesthetic Direction
Industrial editorial tone: "Oxidized Steel & Signal Light." The site reads like a technical journal produced by a systems-driven agency — part engineering report, part growth dossier. It rejects generic agency-minimalism and replaces it with tactile, print-like structure, hard offsets, and document-style precision. The result should feel like proof of competence, not decoration.

## Purpose and Audience
Marketing site for Zoltrak, an AI-first software development and performance marketing agency. Audience is founders, operators, and business decision-makers evaluating a technical partner. The visual language should prioritize credibility, precision, and evidence of results over polish for its own sake.

## Color System
- Ink: #0e0e0e for primary text, borders, and strokes
- Paper: #f4f0e8 as the warm cream base
- Paper Raised: #faf7f2 for surface lifts (cards, panels)
- Signal: #00c853 for CTAs, active states, indicators, result metrics
- Signal Dim: rgba(0, 200, 83, 0.12) for hover tints and highlighted rows
- Rule: #d4cfc5 for dividers and grid lines
- Ink Muted: #6b6b6b for secondary text, captions, metadata

Signal green doubles as the "growth" cue throughout — used specifically on numbers, results, and active UI states so it reads as performance/output, not just brand color.

## Typography
- Display: Playfair Display for headlines, section titles, and service names
- Body/UI: IBM Plex Mono for navigation, body copy, labels, and form fields
- Numbers: Playfair Display italic for stats, results, and pricing/metrics (e.g. "40% reduction," "3x increase")

The display/mono pairing signals editorial authority paired with engineering precision — fitting a firm that does both strategy and build work.

## Layout and Spatial Logic
- 8px base grid for spacing rhythm
- Asymmetric hero split (7/5) — headline/CTA on one side, a tilted "dashboard" or "results" card on the other
- Thick 2px rules separating major sections
- Section numbering as document-style labels (e.g. "§ 01 — Value Proposition," "§ 02 — Services," "§ 03 — Process")
- Depth via hard offsets (box-shadow: 3px 3px 0) instead of soft shadows — applied to project cards, service cards, and CTAs
- Treat each page section like a numbered page in a technical dossier rather than a free-floating scroll block

## Signature Motifs
- Monospace body copy throughout to signal technical precision
- Tilted hero card showing a live-feeling metric/dashboard snapshot (e.g. mock analytics, automation pipeline, or growth chart) with a subtle vertical float
- Crosshatch background grid at low opacity behind hero and section dividers
- Hard-edged cards and chips (service tags, industry filters, results badges) with offset shadows
- Section "§" numbering used consistently across Home, Services, and Projects to reinforce the document/report feel
- Project case studies styled like file dossiers: Client / Industry / Timeline as a monospace metadata row, Challenge–Solution–Results as labeled fields rather than freeform prose

## Motion and Interaction
- Section reveal on scroll: opacity + translateY
- Hero dashboard/metric card floats with a slow 4s loop
- Marquee ticker (client logos or trust stats) at a 40s linear pace
- Bar/stat charts grow on entry with staggered delays — used for results and benefits sections
- Stat counters count up on entry (e.g. projects delivered, average results metrics)
- Service/feature rows highlight with signal underline and Signal Dim tint on hover
- CTA buttons lift with hard shadow shift on hover (shadow grows, button shifts up-left)
- Filter chips on the Projects page snap to active state with signal-green fill and ink border

## Responsiveness
- Single breakpoint at 768px
- Stacked layout on mobile
- Hero dashboard/metric card hidden on small screens; headline and CTAs take full width instead

## Constraints and stack
-Next.js  
-TypeScript 
-Tailwind CSS
- Google Fonts only (Playfair Display, IBM Plex Mono)

## Application Notes (Zoltrak-specific)
- Use Signal green sparingly and intentionally — reserve it for CTAs, active states, and anything representing a result or outcome, so it keeps its "performance" meaning rather than becoming decorative
- The "§" numbering and dossier-style metadata rows are the main device tying Home, Services, and Projects together — keep the numbering sequence consistent across all three pages rather than restarting per page
- Trust indicators and social proof should be styled as a stat strip (count-up numbers in Playfair italic over mono labels) rather than generic badges, to stay consistent with the editorial/technical tone
- Contact form fields should use the same hard-offset card treatment as project/service cards, not a soft rounded default