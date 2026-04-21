# Work Page Fixes Design

**Date:** 2026-04-21
**Scope:** Three fixes to work detail pages — responsive breakpoint system, Marginalia palette squares, Outcome/Reflections image fill.

---

## 1. Responsive Breakpoint System

### Approach
Extend the existing CSS custom property system in `src/app/globals.css`. No per-section hardcoding.

### Four Tiers

| Tier | Breakpoint | `--page-padding` | Full-bleed sections (hero, wide gallery) | Full-width images inside wrapper |
|---|---|---|---|---|
| XL | ≥ 1280px | `120px` | Constrained within wrapper | Constrained within wrapper |
| LG | 1024–1279px | `120px` | Full bleed | Full bleed (break out) |
| MD | 768–1023px | `24px` | Full bleed | Constrained within wrapper |
| SM | < 480px | `16px` | Full bleed | Full bleed |

### CSS Variables

`--page-padding` only changes at MD and SM. XL does not change the padding value — the difference at XL is purely in how full-bleed sections render (constrained vs. breaking out), handled via section-level CSS.

```css
:root {
  --page-padding: 120px; /* LG and XL share the same padding */
}

@media (max-width: 1023px) {
  :root { --page-padding: 24px; } /* MD */
}

@media (max-width: 479px) {
  :root { --page-padding: 16px; } /* SM */
}
```

### Section Classification

**Full-bleed sections** (hero, wide gallery images): currently use negative margins or viewport-width tricks to escape the wrapper. At XL, these are constrained — set `margin: 0` and `width: 100%` so they stay within the padded wrapper. At LG and below, they revert to full bleed.

**Full-width images inside wrapper** (e.g. wide gallery images that currently sit inside `--page-padding`): at LG and SM, use `margin-left: calc(-1 * var(--page-padding))` and `width: calc(100% + 2 * var(--page-padding))` to break out. At XL and MD, they stay within the wrapper (no negative margins).

### Files to Change
- `src/app/globals.css` — add/update media queries for `--page-padding`
- `src/app/work/[slug]/page.module.css` — add breakout rules per tier for each full-bleed and full-width-inside-wrapper section

---

## 2. Marginalia Palette Squares

### Approach
Hardcode the palette for Marginalia directly in the work page, gated on `slug === 'marginalia'`. No data model changes.

### Component: `PaletteSection`

New file: `src/app/work/[slug]/PaletteSection.tsx`

- Renders a single row of 5 color squares using CSS grid (`grid-template-columns: repeat(5, 1fr)`)
- Each square has `aspect-ratio: 1 / 1` so they scale responsively
- Each square has a hex label below it in small text
- The section wrapper is classified as a **full-width images inside wrapper** section — follows the breakout rules from the tier table above

### Colors (Marginalia)

```ts
const MARGINALIA_PALETTE = [
  { hex: '#2B6C4D', label: '#2B6C4D' },
  { hex: '#29333E', label: '#29333E' },
  { hex: '#E8E3D1', label: '#E8E3D1' },
  { hex: '#DA2127', label: '#DA2127' },
  { hex: '#DBB767', label: '#DBB767' },
];
```

### Placement
Rendered in `src/app/work/[slug]/page.tsx` after the two-column gallery section, before the outcome section, when `slug === 'marginalia'`.

### Files to Change
- `src/app/work/[slug]/PaletteSection.tsx` — new component
- `src/app/work/[slug]/page.module.css` — palette section styles
- `src/app/work/[slug]/page.tsx` — conditional render after 2-col gallery

---

## 3. Outcome & Reflections Image Fill

### Problem
Image containers in the Outcome and Reflections sections have a fixed `aspect-ratio: 5 / 3`, so the image doesn't fill the full height of the adjacent text column on taller content.

### Fix
- Remove `aspect-ratio` from the image container in `page.module.css`
- Set `height: 100%` on the container so it stretches to match the text column
- `object-fit: cover` is already applied — cropping happens automatically

### Files to Change
- `src/app/work/[slug]/page.module.css` — remove `aspect-ratio`, add `height: 100%` on outcome/reflections image containers
