# Aimee Marcos Portfolio — Claude Instructions

## Design Context

This is a graphic design portfolio (brand register). See `PRODUCT.md` for strategy and `DESIGN.md` for the visual system.

**Key design principles:**
1. The work is the point — every UI element is a stage, never a performance
2. Restraint that breathes — white space is a decision, not a default
3. Editorial eye — typography and layout reflect Aimee's sensibility, not a template
4. Warmth through clarity — rigorous without being cold
5. Earn every animation — motion reveals and guides; decoration is prohibited

**Current palette:** ink-only (oklch(8% 0.008 40) / oklch(97% 0.008 80), hex fallbacks #030101 / #f8f5ef) — warm-tinted near-black on near-white, no accent colors. Color tokens are gated behind `@supports (color: oklch(0% 0 0))` in `globals.css`. The Editorial Monochrome Rule applies.

Before working on any visual feature, load: `PRODUCT.md` + `DESIGN.md`.
