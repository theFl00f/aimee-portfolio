---
name: Aimee Marcos Portfolio
description: Graphic design portfolio — editorial restraint, typography-first, work as the hero
colors:
  ink: "oklch(8% 0.008 40)"
  page: "oklch(97% 0.008 80)"
  ash: "oklch(91% 0.007 75)"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(36px, 4.5vw, 62px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  subtitle:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(16px, 2vw, 22px)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.01em"
  section-heading:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  functional-heading:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.5
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.3
  label-micro:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.08em"
rounded:
  card: "6px"
  none: "0px"
spacing:
  card-gap: "8px"
  section-gap: "120px"
  page-padding-desktop: "120px"
  page-padding-tablet: "24px"
  page-padding-mobile: "16px"
  nav-height: "82px"
components:
  work-card:
    backgroundColor: "{colors.ash}"
    rounded: "{rounded.card}"
    padding: "0px"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
---

# Design System: Aimee Marcos Portfolio

## 1. Overview

**Creative North Star: "The Printed Page"**

This portfolio thinks in spreads, not screens. The design logic is borrowed from editorial print: generous white space, a single typeface held to strict weight contrast, borders drawn in one color only. Aimee's work — full-color, conceptually dense, genre-spanning — needs a neutral to land against. The portfolio IS that neutral. It has no aesthetic agenda of its own; it creates the conditions for the work to be seen.

The personality is warm professional: rigorous enough to signal craft, restrained enough to stay out of the work's way. Nothing performs. The typewriter hero names the person. Everything after is curation.

What this system explicitly rejects: Behance-shiny (likes-optimized, trend-chasing); over-animation (scrolljacking, particle effects, motion that upstages the work); generic agency template (dark hero with stat callouts, identical case-study grid). If the portfolio could be mistaken for any other designer's portfolio, it has failed.

**Key Characteristics:**
- Single typeface (Inter), three weights, strict scale
- Ink-only palette — no accent, no tint, no gradient on type
- 8px card grid creates visual compression; 120px page margins create air
- Borders as the only structural signal — no shadow, no blur, no surface lifting
- Motion is earned: the typewriter intro has permission; scroll animations have a low bar; decoration has none

## 2. Colors: The Editorial Monochrome

Black and white are not defaults here — they are the palette. The portfolio is a high-contrast neutral that allows full-color work imagery to carry all the chromatic weight. The moment the UI itself wants color, the work loses.

All neutrals are tinted toward warm hues — never pure `#000` or `#fff`. OKLCH is the canonical format; hex equivalents serve as fallbacks for browsers without OKLCH support.

### Primary
- **Ink** — `oklch(8% 0.008 40)` (fallback `#030101`): all text, all borders, all structural lines. Near-black with a barely perceptible warm-brown undertone — the temperature of old printing ink rather than a digital void.

### Neutral
- **Page** — `oklch(97% 0.008 80)` (fallback `#f8f5ef`): all surfaces, all backgrounds. Near-white with a faint cream warmth — the temperature of uncoated stock, not a monitor's backlight.
- **Ash** — `oklch(91% 0.007 75)` (fallback `#e4e1dc`): card placeholder background — visible only while a cover image loads. Warm gray, consistent with the page temperature.

### Named Rules
**The Editorial Monochrome Rule.** There is no accent color. Introducing any tint — even a muted one — breaks the neutrality that makes the work images read. If a future design reach for a color, ask what it adds that the work doesn't already supply. The answer is almost always: nothing.

**The Warm-Tinted Neutral Rule.** No pure `#000` or `#fff` in any UI surface. Every neutral carries a low-chroma warm hue (≤0.008 chroma, hue 40–80°). The difference is barely perceptible to a casual viewer and unmistakable to anyone trained on it. This is what "The Printed Page" looks like in code.

**The OKLCH-First Rule.** Color tokens are authored in OKLCH and gated behind `@supports (color: oklch(0% 0 0))` in `globals.css`. Hex fallbacks (computed sRGB equivalents) sit at the top of the cascade so legacy browsers degrade gracefully. When introducing a new color, author the OKLCH value first and compute the hex fallback — never the reverse.

**The Scrim Exception.** The one permitted gradient is the card label overlay: `linear-gradient(to top, rgba(0,0,0,0.6), transparent)`. It is functional (legibility), not decorative. It does not set a precedent for gradients elsewhere.

## 3. Typography

**Display Font:** Source Serif 4 (Google Fonts, variable font with optical sizing)
**Body / UI Font:** Inter (Google Fonts)
**Weights in use:** Source Serif 4: 700 (hero name), 600 (section headings); Inter: 400 (body, tagline, descriptions), 500 (labels, nav, card titles), 700 (not currently used)

**Pairing character:** Source Serif 4 carries the personal layer — who Aimee is. Inter carries the functional layer — what she does, how she works. The two families never compete because they occupy different semantic roles. Source Serif 4's optical sizing (`font-optical-sizing: auto`) means the name at 62px reads with display sharpness while remaining warm at heading sizes.

**Semantic rule for the display font:** Source Serif 4 appears on text that describes Aimee as a person or professional identity (her name, her capabilities, her strategic strengths). Inter appears on everything organizational or functional (nav, toolbox, work labels, footer, descriptions).

### Hierarchy
- **Display** (Source Serif 4, 700, clamp(36px, 4.5vw, 62px), lh 1.08, ls -0.02em): Hero name only. Fluid across viewports.
- **Subtitle** (Inter, 400, clamp(16px, 2vw, 22px), lh 1.3, ls +0.01em, 55% opacity): "Graphic Designer" — clarifies without competing. Real size contrast from the name (≈ 3:1 ratio at wide viewports).
- **Section heading** (Source Serif 4, 600, 28px, lh 1.2, ls -0.01em): Capabilities column headings. Identity-layer content only.
- **Functional heading** (Inter, 500, 28px): Toolbox section heading. Stays in Inter — it describes process, not identity.
- **Body** (Inter, 400, 18px, lh 1.6): Hero tagline. Max line length 68ch.
- **Body-small** (Inter, 500, 16px, lh 1.5): List items, capability items, longer passages.
- **Label** (Inter, 500, 14px, lh 1.3): Nav links, card titles, toolbox descriptions, footer.
- **Label-micro** (Inter, 500, 10px, ls 0.08em–0.12em, uppercase): Card categories and section marks (01 / work, 02 / approach, 03 / about). Sole uppercase usage in the system.

### Named Rules
**The Two-Layer Rule.** Source Serif 4 = identity; Inter = function. These roles are absolute — don't apply the serif to nav, buttons, labels, or anything transactional. Don't apply Inter to the hero name or capabilities headings.

**The Hierarchy Ratio Rule.** The name-to-subtitle ratio must remain ≥ 2.5:1 at any viewport width. At 1200px: 54px / 22px ≈ 2.45:1 (acceptable); at 1400px: 62px / 22px ≈ 2.8:1 (ideal). If adjusting clamp values, preserve this ratio.

**The Uppercase Micro Rule.** `text-transform: uppercase` is permitted only at Label-micro (10px card categories and section marks). At any larger size, uppercase text fights the editorial register. Prohibited in headings, nav, body, and button labels.

## 4. Elevation

Surfaces are currently flat. Borders (`1px solid var(--color-ink)`) provide all structural separation; no shadow vocabulary exists in the current system. Cards hover via `transform: scale(1.015)` — scale as implied lift, not a light source simulation.

This is not enshrined as a permanent constraint. A carefully chosen shadow — diffuse, low-opacity, ambient — would be consistent with the editorial register if it served a specific structural need. The bar is: shadow must solve a layering problem that borders cannot. A decorative shadow is prohibited regardless.

**Current elevation vocabulary:**
- **Ground** (default): flat surface, no elevation signal
- **Hover lift**: `transform: scale(1.015)` on work cards — implies interest, not floating
- **Structural divider**: `1px solid var(--color-ink)` — footer border-top, mobile nav border-bottom

## 5. Components

### Navigation
The nav sits at the top of every page at a height of 82px (62px on mobile). Desktop: logo left, three links right. Mobile: logo left, hamburger right — on open, links stack vertically with padding equal to the page margin, separated from content by a 1px border-bottom.

- **Logo:** AM wordmark image, 52px tall
- **Links** (14px / 500 / ink): opacity drops to 0.6 on hover; no underline, no color shift
- **Focus:** `outline: 2px solid var(--color-ink)` with 2px offset — every interactive element follows this pattern
- **Mobile menu:** slides in via `display: none → flex`, no animation (considered: a transition would fight the editorial feel)
- **Mobile fixed position:** header becomes `position: fixed` on mobile; `background: var(--color-bg)` ensures the page content scrolls beneath it cleanly

### Work Cards
Image-first. The photograph or render is the whole card; the label appears only on hover or as a gradient overlay at the base. The card IS the work — metadata is secondary.

- **Shape:** Gently rounded corners (6px radius) — not hard-edged, not pill. Subtle enough to feel considered, minimal enough not to call attention to itself.
- **Background:** Ash (#e8e8e8) placeholder, visible only while the cover image loads
- **Border:** 1px solid ink — structural, not decorative
- **Hover:** `transform: scale(1.015)` on card; `transform: scale(1.04)` on cover image — the image breathes out; the card expands slightly. Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-expo). No shadow on hover.
- **Label overlay:** Gradient scrim (`linear-gradient(to top, rgba(0,0,0,0.6), transparent)`), always visible at card base. Category in Label-micro (10px / uppercase / 0.75 opacity), title in Label (14px / 500).
- **Aspect ratios:** wide-landscape (587:189), square (295:189), portrait (288:386), wide-landscape-tall (601:387) — four variants; the grid uses their proportional differences for rhythm.

### Work Grid
Two-row asymmetric layout. Top row: `2fr 1fr 1fr` (wide lead card, two small). Bottom row: `1fr 1fr 2fr` (two small, wide trail). Gap: 8px throughout — compressed adjacency that creates a sense of a curated spread.

At 1200px: wide card goes full-width, two squares sit below. Below 768px: single column. The asymmetry collapses gracefully without losing the sense of editorial composition.

### Footer
Border-top divider (1px ink), 24px vertical padding, horizontal page margins. Credit text left (14px / 500), LinkedIn icon right (20px). Hover on the LinkedIn link: opacity 0.6. Identical pattern to nav link hover — one system.

## 6. Do's and Don'ts

### Do:
- **Do** let work images be the dominant element on every screen. The UI is the frame; the work is the art.
- **Do** use generous page margins (120px desktop) as a first response to "this feels crowded."
- **Do** use the `cubic-bezier(0.22, 1, 0.36, 1)` easing for all transitions that involve movement. Ease-out-expo reads as physical and considered.
- **Do** follow focus-visible with `outline: 2px solid var(--color-ink)` on every interactive element. The system is high-contrast; accessibility comes for free if you maintain the pattern.
- **Do** use Label-micro (10px / uppercase / 0.08em tracking) only for card category strings. This specificity is the rule.
- **Do** collapse the asymmetric grid gracefully at breakpoints — the editorial composition should survive at every width, even if it simplifies.

### Don't:
- **Don't** introduce an accent color. The Editorial Monochrome rule stands. The work images supply all the color the page needs.
- **Don't** use gradient text (`background-clip: text` with any gradient). This is prohibited regardless of context.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored stripe on any card, callout, or list item. Rewrite with full borders, background tints, or nothing.
- **Don't** add animation that performs rather than communicates. The typewriter has permission; scroll reveals have a low bar; decoration has none. If the motion would be better still, it should be still.
- **Don't** replicate Behance or Dribbble aesthetics — shiny hover effects, drop shadows on every card, gradient overlays as style rather than function.
- **Don't** use scrolljacking, parallax on text, or particle effects. These upstage the work and signal effort in the wrong direction.
- **Don't** use `text-transform: uppercase` above 10px. It belongs to the micro-label role only.
- **Don't** add cards inside cards, or nest containers that already have padding. The grid gap (8px) creates rhythm; additional wrapping destroys it.
- **Don't** add a dark mode speculatively. The Editorial Monochrome was chosen intentionally. A dark variant would require a full design pass, not a CSS variable swap.
