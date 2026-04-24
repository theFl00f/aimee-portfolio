# Hero Typewriter Effect — Requirements

**Date:** 2026-04-23  
**Status:** Ready for planning

## Problem

The current hero fades "Aimee Marcos," "Graphic Designer," and the tagline in simultaneously. We want the name to feel authored — like someone is typing it live — before the rest of the hero materialises.

## Desired Behaviour (in sequence)

1. **Page loads** → hero section is visible, name area is empty, all other hero elements are invisible.
2. **Typewriter plays** → "Aimee Marcos" types out character by character, with a blinking caret at the end of the current text.
3. **Caret blinks briefly** → after the last character lands, the caret blinks a handful of times (total blinking duration ≤ 5 seconds, per WCAG 2.2.2).
4. **Other elements animate in** → "Graphic Designer" and the tagline swoop in using the same fade-up style as the rest of the site.
5. **Caret fades out** → simultaneously or just before step 4, the caret disappears with a quick fade.

## Scope

**In scope:**
- Typewriter effect on "Aimee Marcos" only
- Blinking caret (appears character-by-character alongside typing, blinks after typing ends)
- Caret fade-out triggers the remaining hero animations
- WCAG 2.2.2 compliance: blinking stops within 5 seconds of starting

**Out of scope:**
- Typing effect on "Graphic Designer" or the tagline
- Persistent cursor / breathing pulse after fade-out
- Reduced-motion handling (document as a known follow-up — prefers-reduced-motion should skip straight to final state)

## Timing (indicative, to be tuned)

| Phase | Target duration |
|---|---|
| Per-character interval | ~55–70 ms (slight natural variation) |
| Full name ("Aimee Marcos", 12 chars) | ~700–900 ms |
| Caret blink dwell | ~1.0–1.5 s (2–3 blinks at 400–500 ms each) |
| Caret fade-out | ~200 ms |
| "Graphic Designer" + tagline fade-up | existing 0.8 s, 0s / 0.12 s offset |

Total blinking content on screen: ≤ 2.5 s (well within 5 s WCAG limit).

## Success Criteria

- Name types out smoothly with no jarring pauses
- Caret is clearly visible and blinks at a readable cadence
- Caret disappears cleanly before or as "Graphic Designer" arrives
- "Graphic Designer" and tagline use the same fade-up timing as the current implementation
- No layout shift during typing (name element reserves full height from the start, or uses a fixed-height container)
- `prefers-reduced-motion` is a documented follow-up (not blocking)

## Files to Modify

- `src/components/Hero/Hero.tsx` — primary change (typewriter state, caret, sequenced animation)
- `src/components/Hero/Hero.module.css` — caret styling (colour, width, height, blink keyframe)
