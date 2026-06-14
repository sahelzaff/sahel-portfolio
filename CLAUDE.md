# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Next.js, localhost:3000)
npm run dev:reset    # Wipe .next cache then start dev
npm run build        # Production build (static export → out/)
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
```

No test suite exists.

## Architecture

Single-page portfolio (one route: `app/page.tsx`). All page sections are rendered inline in that file — Hero, Marquee, About, Skills, Work, Tools, Contact. There is no routing.

### Data layer

**`lib/content.ts`** is the single source of truth for all copy, numbers, and lists. To change any text or add/remove projects, skills, tools, or stats, edit this file only. **`lib/types.ts`** holds the TypeScript types for every exported array.

### Components

Client-side widgets that would break SSR live in `components/`:

- **`ScrollEffects`** — mounts Lenis smooth scroll, wires GSAP + ScrollTrigger for all reveal animations, progress bar, active nav highlight, custom cursor, and scroll-driven contact section reveal. Renders `null`. This is the animation backbone; all GSAP logic lives here.
- **`HeroTerminal`** — animated typewriter terminal card cycling through three PowerShell script sequences.
- **`LoaderScreen`** — boot-sequence splash that slides away on first load and sets `document.body.dataset.loaded = "true"`.
- **`ProjectList`** — accordion row list; clicking a row expands a problem/build/outcome drawer.
- **`ToolsGrid`** — bento-style tool icon grid with hover states.
- **`MobileNav`** — hamburger drawer for mobile.
- **`Altimeter`** — fixed aviation altitude gauge driven by raw scroll position (0 → 35,000 ft); reads scroll directly, independent of GSAP/Lenis.
- **`HudCorners`** / **`RunwayGrid`** — purely decorative aviation-HUD overlays (corner brackets, perspective runway SVG). No logic; styled via `globals.css`.
- **`ThemeScript`** / **`ThemeToggle`** — see Theme system below.

### Animation contract (data attributes)

`ScrollEffects` reads `data-*` attributes set in `page.tsx` JSX to drive GSAP. This is the coupling between layout and animation:

| Attribute | Purpose |
|---|---|
| `data-reveal="up|left|right"` | Fade + translate in on scroll |
| `data-stat-value`, `data-stat-suffix`, `data-stat-prefix`, `data-stat-decimals` | Counter animation targets |
| `data-section-id` | Active nav link highlight |
| `data-nav-link` | Nav links toggled `data-active` |
| `data-site-nav` | Nav background blur on scroll |
| `data-cursor="text"` | Cursor switches to text mode |

### Theme system

Dark/light theming is driven by a `data-theme` attribute on `<html>`, not a class. Three pieces:

- **`ThemeScript`** — inline blocking `<script>` rendered in `<head>` (`app/layout.tsx`). Reads `localStorage.theme` and sets `data-theme` before paint to prevent FOUC. `<html>`/`<body>` use `suppressHydrationWarning` because of this.
- **`ThemeToggle`** — button (in the nav) that flips `data-theme`, persists to `localStorage`, and animates the swap via the View Transitions API (`document.startViewTransition`, with a no-transition fallback). Renders a placeholder until mounted to avoid hydration mismatch.
- **CSS** — base tokens live in `@theme inline`; `[data-theme="light"]` overrides re-map the same token vars (and patch specific components like `.terminal-float`, `#contact`, `.loader-*`). View-transition keyframes are under `::view-transition-old/new(root)`.

To support a new section in light mode, add a `[data-theme="light"] <selector>` override in `globals.css` rather than hardcoding colours.

### Styling

Tailwind CSS v4. Design tokens are defined with `@theme inline` in `app/globals.css` — not in a `tailwind.config`. Custom utility classes (`.eyebrow`, `.button-outline`, `.button-solid`, `.button-dark`, `.nav-link`, `.marquee-*`, `.terminal-*`, `.skill-bar-fill`, `.altimeter-*`, `.hud-*`) are also defined there. All keyframe animations are in `globals.css`.

**Colour tokens (dark / default):** `ink` (#04080F), `paper` (#C8DFF4), `teal` (#F5A000), `amber` (#29ABE2), `surface` (#091422), `muted` (#1F3A56).

> ⚠️ The token **names are legacy and no longer describe their values**: the design was reworked into an aviation/HUD palette, so `teal` is now amber-orange (#F5A000) and `amber` is now sky-blue (#29ABE2). Use the token name (`teal`/`amber`), not the colour you expect. This palette shift means parts of `Design/blueprint.md` (original teal/amber rationale) are now historical.

**Fonts:** `font-display` = Cabinet Grotesk (local woff2, `public/fonts/`), `font-body` = General Sans (local), `font-mono` = Geist Mono (Google).

### Deployment

Push to `main` → GitHub Actions runs lint + typecheck + build → SCP `out/` to EC2 → reload Nginx. Secrets: `EC2_HOST`, `EC2_USER`, `EC2_SSH_KEY`, `DEPLOY_PATH`.

## Design intent

The `Design/blueprint.md` file is the original creative brief and remains the canonical reference for visual decisions (colour rationale, animation philosophy, section-by-section breakdown). Consult it before changing any visual direction.
