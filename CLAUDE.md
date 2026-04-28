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

## Worktree Discipline

When working from a `.claude/worktrees/<name>/` path, ALL commands (`npm run dev`, `npm install`, `npx playwright test`, edits, git ops) must run inside that worktree directory — never the main checkout.

If a dev server is already running on port 3000, confirm its `cwd` matches the current worktree before reusing it:

```bash
lsof -p $(lsof -ti:3000) 2>/dev/null | grep cwd
```

If it points at a different worktree (or the main checkout), kill it (`lsof -ti:3000 | xargs kill -9`) and start a fresh one from the current worktree. A stale server from another branch will serve outdated code and waste verification time.

After `npm install`/`npm uninstall`, always restart the dev server (`rm -rf .next && npm run dev`) — Next.js dev mode caches compiled modules and will keep serving removed packages until restarted.

## Browser Verification

**Never use `preview_start` or any `preview_*` tools.** Use Playwright instead.

`playwright.config.ts` is configured with `reuseExistingServer: true` — it starts `npm run dev` automatically if nothing is on port 3000, and reuses an already-running server if one exists.

**To run tests:**
```bash
npx playwright test
```

**For one-off assertions** (touch targets, computed styles, layout checks), write an inline Node script:
```bash
node -e "
const { chromium } = require('@playwright/test');
(async () => {
  const b = await chromium.launch();
  const page = await b.newPage();
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:3000');
  const box = await page.locator('button[aria-label=\"Toggle navigation\"]').boundingBox();
  console.log(box);
  await b.close();
})();
"
```

Tests live in `tests/`. Run a single file: `npx playwright test tests/nav.spec.ts`.
