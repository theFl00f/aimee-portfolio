# Work Page Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix responsive breakpoints across work detail pages, add palette squares to Marginalia, and make Outcome/Reflections images fill their column height.

**Architecture:** All styling uses CSS Modules + CSS custom properties — no Tailwind. The `--page-padding` variable in `globals.css` drives horizontal spacing globally. Full-bleed vs. constrained behavior is controlled per-section via media queries in `page.module.css`. The palette is hardcoded in a new `PaletteSection` component, gated on `slug === 'marginalia'`.

**Tech Stack:** Next.js 14, React 18, CSS Modules, no test infrastructure (visual verification via `npm run dev`)

---

## File Map

| File | Change |
|---|---|
| `src/app/globals.css` | Update `--page-padding` breakpoints: `max-width: 768px` → `max-width: 1023px`, add SM at `max-width: 479px` |
| `src/app/work/[slug]/page.module.css` | Add XL hero constraint, LG/SM galleryWide breakout, fix sectionImageWrap height |
| `src/app/work/[slug]/page.tsx` | Import + conditionally render `PaletteSection` after gallery |
| `src/app/work/[slug]/PaletteSection.tsx` | New — renders 5 Marginalia color swatches |
| `src/app/work/[slug]/PaletteSection.module.css` | New — palette grid styles + LG/SM breakout rules |

---

## Breakpoint Reference

| Tier | Breakpoint | `--page-padding` | Full-bleed sections (hero) | Full-width images inside wrapper (galleryWide, PaletteSection) |
|---|---|---|---|---|
| XL | ≥ 1280px | `120px` | Constrained within wrapper | Constrained within wrapper |
| LG | 1024–1279px | `120px` | Full bleed | Full bleed (break out) |
| MD | 768–1023px | `24px` | Full bleed | Constrained within wrapper |
| SM | < 480px | `16px` | Full bleed | Full bleed |

---

## Task 1: Update `--page-padding` breakpoints in globals.css

**Files:**
- Modify: `src/app/globals.css:11-13`

- [ ] **Step 1: Replace the single mobile breakpoint with two-tier breakpoints**

Current (lines 11–13):
```css
@media (max-width: 768px) {
  :root { --page-padding: 24px; }
}
```

Replace with:
```css
@media (max-width: 1023px) {
  :root { --page-padding: 24px; }
}

@media (max-width: 479px) {
  :root { --page-padding: 16px; }
}
```

> Note: XL (≥1280px) shares the same `120px` as LG — no variable change needed at XL, only section-level CSS changes.

- [ ] **Step 2: Verify the variable cascades correctly**

Run dev server: `npm run dev`

Resize browser to:
- 1400px wide → check padding is ~120px on work page
- 900px wide → check padding is ~24px
- 400px wide → check padding is ~16px

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "fix: update --page-padding breakpoints to 4-tier system"
```

---

## Task 2: Constrain hero at XL in page.module.css

**Files:**
- Modify: `src/app/work/[slug]/page.module.css`

- [ ] **Step 1: Add XL media query to constrain the hero**

Append to `src/app/work/[slug]/page.module.css` (after the existing `@media (max-width: 768px)` block):

```css
/* ── XL: constrain full-bleed sections within wrapper ── */

@media (min-width: 1280px) {
  .hero {
    margin: 0 var(--page-padding);
    width: calc(100% - 2 * var(--page-padding));
    border-radius: 4px;
  }
}
```

- [ ] **Step 2: Verify at XL**

At 1400px wide, the hero on a work page should no longer go edge-to-edge — it should have 120px inset on each side with rounded corners.

At 1279px wide (LG), the hero should return to full bleed (no inset).

- [ ] **Step 3: Commit**

```bash
git add src/app/work/[slug]/page.module.css
git commit -m "fix: constrain hero within wrapper at XL breakpoint"
```

---

## Task 3: Add LG and SM breakout for galleryWide in page.module.css

**Files:**
- Modify: `src/app/work/[slug]/page.module.css`

- [ ] **Step 1: Add LG breakout rule**

Append to `src/app/work/[slug]/page.module.css` (after the XL block from Task 2):

```css
/* ── LG: full-width images inside wrapper break out ── */

@media (min-width: 1024px) and (max-width: 1279px) {
  .galleryWide {
    padding-left: 0;
    padding-right: 0;
  }

  .wideImg {
    border-radius: 0;
  }
}
```

- [ ] **Step 2: Add SM breakout rule**

Append immediately after the LG block:

```css
/* ── SM: full-width images break out, text padding shrinks ── */

@media (max-width: 479px) {
  .galleryWide {
    padding-left: 0;
    padding-right: 0;
  }

  .wideImg {
    border-radius: 0;
  }
}
```

> Note: The existing `@media (max-width: 768px)` rule sets `.galleryWide { padding: 12px var(--page-padding) 0; }` — this applies at MD (480–767px) and keeps wide images constrained there. The SM rule at `max-width: 479px` comes after, overriding the horizontal padding for the smallest screens. CSS cascade order matters here: SM rule must appear after the 768px rule.

- [ ] **Step 3: Verify all tiers on a work page with wideImages**

Use any work page that has `wideImages` — check `src/data/work.ts` to find one. Resize to:
- 1400px (XL): wide images stay inside 120px margins
- 1100px (LG): wide images go edge-to-edge, no border-radius
- 900px (MD): wide images back inside 24px margins
- 400px (SM): wide images go edge-to-edge

- [ ] **Step 4: Commit**

```bash
git add src/app/work/[slug]/page.module.css
git commit -m "fix: wide gallery images break out at LG and SM breakpoints"
```

---

## Task 4: Fix Outcome and Reflections image fill

**Files:**
- Modify: `src/app/work/[slug]/page.module.css:113-137`

- [ ] **Step 1: Make section rows stretch to full height**

Current (lines 113–120):
```css
.outcomeSection,
.reflectionsSection {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  padding: 48px var(--page-padding);
  align-items: start;
}
```

Change `align-items: start` to `align-items: stretch`:
```css
.outcomeSection,
.reflectionsSection {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  padding: 48px var(--page-padding);
  align-items: stretch;
}
```

- [ ] **Step 2: Remove fixed aspect-ratio from image container and fill height**

Current (lines 131–137):
```css
.sectionImageWrap {
  position: relative;
  aspect-ratio: 5 / 3;
  overflow: hidden;
  border-radius: 4px;
  background: var(--color-placeholder);
}
```

Replace with:
```css
.sectionImageWrap {
  position: relative;
  height: 100%;
  min-height: 280px;
  overflow: hidden;
  border-radius: 4px;
  background: var(--color-placeholder);
}
```

> `min-height: 280px` prevents the container from collapsing if the text column is very short. Adjust if needed after visual check.

- [ ] **Step 3: Verify on Outcome and Reflections sections**

On any work page at desktop width: the image in the Outcome and Reflections sections should fill the full height of the text column beside it, cropping as needed.

At mobile (stacked 1-col), the image should use its `min-height` since there's no adjacent column.

- [ ] **Step 4: Commit**

```bash
git add src/app/work/[slug]/page.module.css
git commit -m "fix: outcome and reflections images fill full column height"
```

---

## Task 5: Create PaletteSection component and wire into Marginalia

**Files:**
- Create: `src/app/work/[slug]/PaletteSection.tsx`
- Create: `src/app/work/[slug]/PaletteSection.module.css`
- Modify: `src/app/work/[slug]/page.tsx`

- [ ] **Step 1: Create PaletteSection.tsx**

```tsx
import styles from './PaletteSection.module.css';

const PALETTE = ['#2B6C4D', '#29333E', '#E8E3D1', '#DA2127', '#DBB767'];

export default function PaletteSection() {
  return (
    <div className={styles.paletteSection}>
      <div className={styles.grid}>
        {PALETTE.map((hex) => (
          <div key={hex} className={styles.item}>
            <div className={styles.swatch} style={{ background: hex }} />
            <span className={styles.label}>{hex}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create PaletteSection.module.css**

```css
/* PaletteSection.module.css */

.paletteSection {
  padding: 12px var(--page-padding) 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}

.item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.swatch {
  aspect-ratio: 1 / 1;
  width: 100%;
  border-radius: 4px;
}

.label {
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text);
  opacity: 0.5;
}

/* LG: break out of margins */
@media (min-width: 1024px) and (max-width: 1279px) {
  .paletteSection {
    padding-left: 0;
    padding-right: 0;
  }

  .swatch {
    border-radius: 0;
  }
}

/* SM: break out of margins */
@media (max-width: 479px) {
  .paletteSection {
    padding-left: 0;
    padding-right: 0;
  }

  .swatch {
    border-radius: 0;
  }
}
```

- [ ] **Step 3: Add import and conditional render in page.tsx**

In `src/app/work/[slug]/page.tsx`, add import after line 5:
```tsx
import PaletteSection from './PaletteSection';
```

Then in the JSX, after the gallery 2-col block (after line 51, the closing `)`):
```tsx
      {/* Palette — Marginalia only */}
      {params.slug === 'marginalia' && <PaletteSection />}
```

Full updated block for reference (lines 43–67 after edit):
```tsx
      {/* Gallery 2-col (Marginalia logo panels only) */}
      {item.galleryImages.length > 0 && (
        <div className={styles.gallery}>
          {item.galleryImages.map((src) => (
            <div key={src} className={styles.galleryItem}>
              <Image src={src} alt={`${item.title} gallery`} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.galleryImg} />
            </div>
          ))}
        </div>
      )}

      {/* Palette — Marginalia only */}
      {params.slug === 'marginalia' && <PaletteSection />}

      {/* Gallery wide — full content-width, natural aspect ratio */}
      {item.wideImages && item.wideImages.length > 0 && (
```

- [ ] **Step 4: Verify on Marginalia work page**

Navigate to `/work/marginalia`. Below the two logo panel images, 5 color squares should appear in a single row, each 1:1 aspect ratio with a hex label below. Resize to verify:
- 1400px (XL): squares constrained within 120px margins, have border-radius
- 1100px (LG): squares go edge-to-edge, no border-radius
- 900px (MD): squares back within 24px margins
- 400px (SM): squares go edge-to-edge

Verify the palette does NOT appear on other work pages (Mycelium, SAP GPO).

- [ ] **Step 5: Commit**

```bash
git add src/app/work/[slug]/PaletteSection.tsx src/app/work/[slug]/PaletteSection.module.css src/app/work/[slug]/page.tsx
git commit -m "feat: add Marginalia palette section with 5 color swatches"
```
