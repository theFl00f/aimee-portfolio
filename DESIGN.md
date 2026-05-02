---
name: Aimee Marcos Portfolio
description: Graphic design portfolio with editorial restraint, typography-first, work as the hero
colors:
  ink: "oklch(8% 0.008 40)"
  ink-muted: "oklch(42% 0.008 40)"
  page: "oklch(97% 0.008 80)"
  page-muted: "oklch(65% 0.008 80)"
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
  nav-height-desktop: "82px"
  nav-height-mobile: "62px"
  touch-target-min: "44px"
components:
  work-card:
    backgroundColor: "{colors.ash}"
    rounded: "{rounded.card}"
    padding: "0px"
  marginalia:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label-micro}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  section-mark:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label-micro}"
---

# Design System: Aimee Marcos Portfolio

## 1. Overview

**Creative North Star: "The Printed Page"**

This portfolio thinks in spreads, not screens. The logic is borrowed from editorial print: generous white space, two typefaces held to strict roles, borders drawn in one color only. Aimee's work, full-color and conceptually dense across genres, needs a neutral to land against. The portfolio IS that neutral. It has no aesthetic agenda of its own; it creates the conditions for the work to be seen.

The personality is warm professional: rigorous enough to signal craft, restrained enough to stay out of the work's way. Nothing performs. The typewriter hero names the person. Everything after is curation.

What this system explicitly rejects: Behance-shiny (likes-optimized, trend-chasing), over-animation (scrolljacking, particle effects, motion that upstages the work), generic agency template (dark hero with stat callouts, identical case-study grid). If the portfolio could be mistaken for any other designer's portfolio, it has failed.

**Key Characteristics:**
- Two typefaces in absolute roles: Source Serif 4 carries identity, Inter carries function
- Ink-only palette, two values plus one muted secondary, no accent and no gradient on type
- 8px card grid creates compression; 120px desktop margins create air; mobile collapses to 16px
- Borders are the only structural signal: no shadow, no blur, no surface lifting
- Motion is earned: the typewriter intro has permission, scroll reveals have a low bar, decoration has none

## 2. Colors: The Editorial Monochrome

Black and white are not defaults here, they are the palette. The portfolio is a high-contrast neutral that allows full-color work imagery to carry all the chromatic weight. The moment the UI itself wants color, the work loses.

All neutrals are tinted toward warm hues, never pure `#000` or `#fff`. OKLCH is the canonical format; sRGB hex equivalents serve as fallbacks for browsers without OKLCH support, gated behind `@supports (color: oklch(0% 0 0))`.

### Primary
- **Ink** (`oklch(8% 0.008 40)`, fallback `#030101`): all primary text, all borders, all structural lines. Near-black with a barely perceptible warm-brown undertone, the temperature of old printing ink rather than a digital void.

### Secondary
- **Ink Muted** (`oklch(42% 0.008 40)`, fallback `#595551`): secondary text on Page or Ash surfaces only — section marks, marginalia kickers, image captions, toolbox row descriptions, hero subtitle. Authored to clear WCAG AA on Page (7.77:1, approaches AAA) and on Ash (6.49:1). Replaces the previous opacity-as-color pattern, which compounded unpredictably and failed contrast at small sizes.
- **Page Muted** (`oklch(65% 0.008 80)`, fallback `#9a9794`): secondary text on Ink surfaces only — case-study intro slab labels (`01 / overview`), category lists, any micro-text reversed onto a dark slab. Mirrors Ink Muted symmetrically (65% vs 42% lightness) and clears WCAG AA (~7:1) against Ink at the same micro-label sizes. Use this token, not Ink Muted, the moment a slab flips to Ink — the same opacity-as-color failure mode applies in reverse.

### Neutral
- **Page** (`oklch(97% 0.008 80)`, fallback `#f8f5ef`): all surfaces and backgrounds. Near-white with a faint cream warmth, the temperature of uncoated stock, not a monitor's backlight.
- **Ash** (`oklch(91% 0.007 75)`, fallback `#e4e1dc`): card placeholder background, visible only while a cover image loads, plus the portrait frame in Contact. Warm gray, consistent with the page temperature.

### Derived surfaces (case-study slabs)

Case-study pages may interpolate along the Ash→Page axis to produce additional warm-tinted slab surfaces, keeping the editorial-print rhythm without introducing new global neutrals. The pattern is `color-mix(in oklch, var(--color-ash) N%, var(--color-page))` with a computed sRGB hex fallback. These derived values stay local to the page module that uses them and carry page-specific names (e.g. `--color-outcome-bg`); they are intentionally NOT promoted to globals, because their meaning is narrative (which slab in the case-study sequence) rather than systemic.

Currently in use on `[slug]/page.module.css`: `--color-outcome-bg` (62% Ash) and `--color-reflections-bg` (48% Ash).

### Named Rules

**The Editorial Monochrome Rule.** There is no accent color. Introducing any tint, even a muted one, breaks the neutrality that makes the work images read. If a future design reaches for a color, ask what it adds that the work doesn't already supply. The answer is almost always: nothing.

**The Warm-Tinted Neutral Rule.** No pure `#000` or `#fff` in any UI surface. Every neutral carries a low-chroma warm hue (≤0.008 chroma, hue 40–80°). The difference is barely perceptible to a casual viewer and unmistakable to anyone trained on it. This is what "The Printed Page" looks like in code.

**The OKLCH-First Rule.** Color tokens are authored in OKLCH and gated behind `@supports (color: oklch(0% 0 0))` in `globals.css`. Hex fallbacks (computed sRGB equivalents) sit at the top of the cascade so legacy browsers degrade gracefully. When introducing a new color, author the OKLCH value first and compute the hex fallback, never the reverse.

**The Color-Not-Opacity Rule.** Secondary emphasis is carried by the Ink Muted token, never by `opacity: 0.55` on Ink. Opacity-as-mute compounds unpredictably (a 0.55 element inside an animated container loses contrast further), and fails AA below 16px. If something needs to read quieter, change the color, not the alpha.

**The Muted-Pairing Rule.** Muted text takes the surface it sits on. Use **Ink Muted** for secondary text on Page or Ash; use **Page Muted** for secondary text on Ink. Crossing these (Ink Muted on a dark slab, Page Muted on a light surface) collapses contrast and breaks the editorial-print read. The pairing is mechanical: identify the surface first, then pick the token.

## 3. Typography

**Display Font:** Source Serif 4 (Google Fonts, variable, optical sizing on)
**Body / UI Font:** Inter (Google Fonts)
**Weights in use:** Source Serif 4 700 (hero name) and 600 (identity-layer headings); Inter 400 (body, tagline, descriptions) and 500 (labels, nav, micro-labels).

**Pairing character:** Source Serif 4 carries the personal layer, who Aimee is. Inter carries the functional layer, what she does, how she works. The two families never compete because they occupy different semantic roles. Source Serif 4's optical sizing (`font-optical-sizing: auto`) means the name at 62px reads with display sharpness while remaining warm at heading sizes.

### Hierarchy
- **Display** (Source Serif 4, 700, `clamp(36px, 4.5vw, 62px)`, lh 1.08, ls -0.02em): hero name only. Fluid across viewports.
- **Subtitle** (Inter, 400, `clamp(16px, 2vw, 22px)`, lh 1.3, ls +0.01em, color Ink Muted): "Graphic Designer" beneath the name. Color carries the muting; opacity does not.
- **Section heading** (Source Serif 4, 600, 28px, lh 1.2, ls -0.01em): identity-layer headings only — capabilities, strategic strengths.
- **Case-study title** (Source Serif 4, 600, `clamp(28px, 3vw, 36px)`, lh 1.15, ls -0.015em): the project name on a work case-study page (h1). Sits between Section heading and Display: serif and 600-weight like Section heading, but fluid and slightly larger because it carries the page's identity. Not 700/Display weight — that role belongs to the hero name on the home page only.
- **Functional heading** (Inter, 500, 28px, lh 1.3): organizational headings — toolbox. Stays in Inter because it describes process, not identity.
- **Body** (Inter, 400, 18px, lh 1.6): hero tagline and primary reading copy. Max line length 68ch.
- **Body small** (Inter, 500, 16px, lh 1.5): list items, capability bullets.
- **Label** (Inter, 500, 14px, lh 1.3): nav links, footer credit, contact CTA, mobile nav links (16px).
- **Label micro** (Inter, 500, 10px, ls 0.08–0.14em, uppercase, color Ink Muted): section marks (`01 / work`, `04 / contact`) and marginalia kickers above each work card. Sole uppercase usage in the system.

### Named Rules

**The Two-Layer Rule.** Source Serif 4 is identity. Inter is function. These roles are absolute. Don't apply the serif to nav, buttons, labels, or anything transactional. Don't apply Inter to the hero name or capabilities headings.

**The Hierarchy Ratio Rule.** The name-to-subtitle ratio must remain ≥ 2.5:1 at any viewport. At 1200px: 54px / 22px ≈ 2.45:1 (acceptable); at 1400px: 62px / 22px ≈ 2.8:1 (ideal). If adjusting clamp values, preserve this ratio.

**The Uppercase Micro Rule.** `text-transform: uppercase` is permitted only at Label micro (10px section marks and marginalia). At any larger size, uppercase text fights the editorial register. Prohibited in headings, nav, body, and button labels.

## 4. Elevation

Surfaces are flat. Borders (`1px solid var(--color-ink)`) provide all structural separation; no shadow vocabulary exists. Cards lift on hover via `transform: scale(1.015)` — scale as implied attention, not a light-source simulation.

This is not enshrined as a permanent constraint. A carefully chosen shadow, diffuse and low-opacity, would be consistent with the editorial register if it served a structural need that borders couldn't. The bar is: shadow must solve a layering problem borders cannot. A decorative shadow is prohibited regardless.

**Current elevation vocabulary:**
- **Ground** (default): flat surface, no elevation signal
- **Hover lift**: `transform: scale(1.015)` on work cards, `transform: scale(1.04)` on the cover image inside; the image breathes out, the card expands slightly
- **Structural divider**: `1px solid var(--color-ink)` — footer border-top, mobile nav border-bottom, toolbox row borders, contact CTA underline

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. The only response to interaction is scale (cards), opacity (links), or border emphasis (focus). No hover shadows. No elevation cascades. If a layout reads as flat and ambiguous, the answer is more whitespace, not more shadow.

## 5. Components

### Navigation
The nav sits at the top of every page at 82px on desktop, 62px on mobile (fixed-positioned at that breakpoint). Desktop: logo left, three text links right. Mobile: logo left, hamburger right; on open, links stack vertically with `padding: 0 var(--page-padding)` and a 1px ink border-bottom separating them from page content.

- **Logo** (Picture component, 52px tall, `alt=""` since the parent link carries the aria-label)
- **Links** (Inter 14px / 500 / Ink): opacity drops to 0.6 on hover; no underline, no color shift
- **Mobile links**: 16px, `min-height: 44px` to meet touch-target minimums
- **Toggle button**: hamburger, `min-width/height: 44px`, `aria-controls="primary-nav"`, `aria-expanded` reflects open state
- **Focus**: `outline: 2px solid var(--color-ink)`, 2px offset on links, 4px offset on logo

### Work Cards
Pure image. The photograph or render fills the card; there is no overlay, no scrim, no in-card label. Project identification happens in the marginalia caption that sits above the card (see below). The card IS the work; everything textual is paratext.

- **Shape**: 6px radius — gently rounded, considered, never pill or hard-edged
- **Background**: Ash placeholder, visible only while the cover image loads
- **Border**: 1px solid Ink, structural not decorative
- **Hover**: `transform: scale(1.015)` on the card; `transform: scale(1.04)` on the cover image inside. Easing `cubic-bezier(0.22, 1, 0.36, 1)`. No shadow on hover.
- **Focus**: `outline: 2px solid var(--color-ink)`, 4px offset
- **Empty cells**: rendered as borderless decorative `aria-hidden="true"` divs at the same aspect ratio, so the asymmetric grid keeps its rhythm without inviting screen-reader attention
- **Aspect ratios**: `wide-landscape` 587/189, `square` 295/189, `portrait` 288/386, `wide-landscape-tall` 601/387

### Marginalia (signature component)
A small uppercase kicker label that floats above each work card cell, naming the project. Inter 500, 10px, letter-spacing 0.14em, uppercase, color Ink Muted. On animation, the caption reveals via animated `clipPath` (left-to-right wipe) after the image's grayscale-to-color "develop" transition — staged like a film slate slotting into place after the print has fixed.

This is the editorial signature. Where a SaaS portfolio would put a title pill on the image, the portfolio puts a typeset margin note above it. The label is a tag, not a banner.

### Section Mark
Numbered section identifiers — `01 / work`, `02 / approach + toolbox`, `04 / contact`. Same Label micro typography as marginalia; same Ink Muted color. Sits at the top of every section as the only structural signal that you've moved between chapters.

### Named Rules

**The Chapter-vs-Paratext Rule.** A case-study page distinguishes two kinds of content blocks, and the typography reflects the distinction:

- **Chapters** carry a numbered Section Mark (`01 / overview`, `02 / outcome`, `03 / reflections`). The number signals narrative position: "you're at this stage of the project's argument." Reserve numbering for the case study's editorial spine.
- **Paratext** sits between chapters and supports them — image galleries, palette swatches, wide brand-collateral spreads. Paratext takes no visible mark, only a `visually-hidden` h2 carrying the accessible name (`<h2 className="visually-hidden">Palette</h2>`). It registers visually as content, not as a chapter.

The rule is mechanical: if a block is part of the narrative argument, number it; if it shows or interacts with the work without advancing the argument, leave it unnumbered. The closing prev/next nav is the one exception — labeled (`more work`) but unnumbered, because it's navigation, not narrative.

### Work Grid
Two-row asymmetric layout. Top row `2fr 1fr 1fr` (wide lead, two squares). Bottom row `1fr 1fr 2fr` (two squares, wide trail). 8px gap throughout — compressed adjacency that creates the sense of a curated spread.

At ≤1200px the wide card spans both columns and the squares sit side-by-side below. At ≤768px every cell stacks. The asymmetry collapses gracefully without losing the editorial composition.

### Hero (signature component)
A typewriter reveal of the name (Source Serif 4 700) followed by a fade-up of the subtitle (Ink Muted) and tagline (Body). Three traits matter:

- **CLS-safe sizer**: an `aria-hidden` span containing the full name sits in a CSS Grid stack with the typed span, so the H1 reserves the final height from frame zero. Measured layout shift across viewports: 0px.
- **Stable accessible name**: the typed span carries `aria-label="Aimee Marcos"` so screen readers announce the heading consistently regardless of how many characters have typed.
- **Reduced motion**: `prefers-reduced-motion: reduce` renders the static state immediately — no typewriter, no fade.

Mobile spacing: hero margins compress to 32px top / 64px bottom (down from 64/100 desktop) so the work grid arrives in viewport faster on small screens.

### Contact / Portrait
Square portrait frame, 240px max desktop, 200px tablet, 160px mobile, in the same vocabulary as work cards: 1px Ink border, 6px radius, Ash background. The portrait image is grayscale-filtered (`filter: grayscale(1) contrast(1.02)`) so it sits in the monochrome system without breaking it. Caption below uses Label micro / Ink Muted.

CTA is a text-with-icon link styled as a single underline (border-bottom 1px Ink), opacity to 0.6 on hover, gap 10→14px on hover (the arrow steps right). LinkedIn icon is inline SVG (no FontAwesome), `currentColor` so it inherits Ink.

### Footer
Border-top divider (1px Ink), 24px vertical padding, page margins. Credit text left (Label / Inter 14px). LinkedIn icon right (20px, inline SVG, inherits Ink). Social link wrapper is `min-width/height: 44px` for touch.

Hover on the icon link: opacity 0.6. Identical pattern to nav-link hover. One system across nav, contact CTA, and footer.

### Skip Link
A keyboard-only "Skip to main content" anchor that is positioned off-screen via `transform: translateY(-100%)` and slides in on `:focus`. Inter 14px / 500, Ink on Page, 1px Ink border-bottom. Not visible to touch or pointer users.

### Brand Palette Chips (case-study paratext)
A swatch grid surfaced on case-study pages that carry a `brandPalette`. Each chip is a `<button>` that copies the hex on click, with a checkmark + "Copied" overlay confirmation. Border `1px solid var(--color-ink)`, no radius. Layout: 5-column grid on desktop (`aspect-ratio: 1/1`), 5-column on tablet (`3/4`), and a single-column stack of paint-chip bands at ≤480px so longer names like "Parchment Light" keep one line.

The chip surface is the brand's own color, not a system token: this is the one place in the design system where saturated client-brand color is allowed onto the page. The chips function as paratext, not chrome — they show the work, they aren't part of it.

**Brand-Fidelity Contrast Exception.** Chip text (15px Source Serif 4 / 600 name + 10px Inter / 600 hex) sits directly on the brand surface color. Most surfaces clear WCAG AA comfortably; the case study can include one chip whose text contrast lands at the AA floor (≥4.5:1) without exceeding it. Marginalia's **Seal Wax** (`#DA2127`) at ~4.57:1 is the canonical example.

This exception is intentional and bounded:

1. **The hex is sacrosanct.** Brand palettes are documentary — they record what was actually shipped to the client. Shifting Seal Wax darker to clear AA more comfortably would falsify the record.
2. **Mitigations are mechanical.** On any `textLight` chip, the hex micro-label is bumped to weight 600 (`PaletteSection.module.css`), adding pixel mass at 10px without touching the surface color. Chip name remains at 15px / 600 / Source Serif 4 — large enough that the AA floor at this ratio is acceptable for short labels.
3. **Floor, not target.** Chips below 4.5:1 are not allowed. If a future case study introduces a brand color that falls below AA, the chip drops the hex/name overlay (image-only swatch) and the value moves to a caption beneath the grid. Don't lift opacity; don't introduce a scrim; don't tint the brand color.
4. **Scope is the chip only.** This exception does not extend to any other UI surface. Body text, labels, nav, and section marks all hold to the standard contrast tokens (Ink / Page / Ink Muted / Page Muted), which clear AA cleanly across the design system.

## 6. Do's and Don'ts

### Do:
- **Do** let work images be the dominant element on every screen. The UI is the frame; the work is the art.
- **Do** use generous page margins (`--page-padding: 120px` desktop, 24px tablet, 16px mobile) as a first response to "this feels crowded."
- **Do** use `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-expo) for all transitions involving movement.
- **Do** follow focus-visible with `outline: 2px solid var(--color-ink)` on every interactive element — 2px offset on inline links, 4px on cards and CTAs.
- **Do** carry secondary emphasis via the Ink Muted token (`var(--color-ink-muted)`), never `opacity: 0.55` on Ink.
- **Do** use Label micro (10px / uppercase / 0.08–0.14em tracking) only for section marks and marginalia kickers. Nothing else.
- **Do** apply the CLS-safe sizer pattern (grid-stacked aria-hidden sizer + typed span) to any future text animation that mutates content over time.
- **Do** ensure every interactive element on mobile is at least 44×44px (`min-width`/`min-height` on hit areas, including icon-only links).

### Don't:
- **Don't** introduce an accent color. The Editorial Monochrome rule stands. The work images supply all the color the page needs.
- **Don't** use gradient text (`background-clip: text` with any gradient). Prohibited regardless of context.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored stripe on any card, callout, or list item. Rewrite with full borders, background tints, or nothing.
- **Don't** add overlay scrims or in-card label gradients on work cards. Cards are pure image; metadata lives in the marginalia caption above.
- **Don't** add animation that performs rather than communicates. The typewriter has permission; scroll reveals have a low bar; decoration has none. If the motion would be better still, it should be still.
- **Don't** replicate Behance or Dribbble aesthetics — shiny hover effects, drop shadows on every card, gradient overlays as style rather than function.
- **Don't** use scrolljacking, parallax on text, or particle effects.
- **Don't** use `text-transform: uppercase` above 10px. It belongs to the micro-label role only.
- **Don't** mute text with `opacity` (the alpha compounds and fails AA). Use the Ink Muted color token.
- **Don't** ship interactive elements smaller than 44×44px on mobile. Wrap icon-only links in a 44px hit area; do not rely on the icon size alone.
- **Don't** use em dashes (—) in any user-facing copy. Use commas, colons, semicolons, periods, or parentheses. (`--` is also banned.)
- **Don't** add cards inside cards, or nest containers that already have padding. The 8px grid gap creates rhythm; additional wrapping destroys it.
- **Don't** add a dark mode speculatively. The Editorial Monochrome was chosen intentionally. A dark variant would require a full design pass, not a CSS variable swap.
