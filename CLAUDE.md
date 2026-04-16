# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a high-performance NFT landing page built with React, TypeScript, Vite, and Tailwind CSS. The project emphasizes visual polish and performance optimization, with particular attention to scroll performance, video loading, and GPU resource management.

## Common Commands

```bash
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # TypeScript type check + Vite production build
npm run preview      # Preview production build locally
```

## Project Architecture

### Layout Structure

The app is organized as a single-page site with sections:
- **Hero** (`src/sections/Hero.tsx`) — Initial landing section
- **About** (`src/sections/About.tsx`) — Project information
- **Collection** (`src/sections/Collection.tsx`) — Main content showcase
- **Cta** (`src/sections/Cta.tsx`) — Call to action

Each section is composed into the root `App.tsx`, which applies global styling and activates the smooth scroll hook.

### Key Components

**LazyVideo** (`src/components/LazyVideo.tsx`)
- Custom video component that defers network/decode until near viewport
- Uses IntersectionObserver to pause playback when off-screen
- Promotes itself to own GPU layer (`willChange: 'transform'` + `translateZ(0)`)
- Why: The page has 7 videos that would otherwise decode simultaneously on mount, destroying performance

**useSmoothScroll** (`src/hooks/useSmoothScroll.ts`)
- Drives Lenis smooth scroll library from a single `requestAnimationFrame` loop
- Automatically disables itself for users with `prefers-reduced-motion` and on touch devices
- Why: iOS/Android momentum scroll is already smooth; Lenis adds overhead on mobile

### Styling Approach

**Tailwind Configuration** (`tailwind.config.js`)
- Custom colors: `cream` (#EFF4FF), `neon` (#6FFF00), `space` (#010828)
- Custom fonts: `grotesk` (Anton), `condiment` (Condiment), `mono` (system monospace)
- Kept minimal — extend only what's needed

**Global Styles** (`src/index.css`)
- **Section Containment**: Each `<section class="section-contain">` gets `contain: layout paint style` and `isolation: isolate` — limits repaint cascades to that section only
- **Liquid Glass Effect**: Semi-transparent frosted glass with gradient mask border; note the `isolation: isolate` on the element and its `::before` to prevent forcing upstream compositing
- **Texture Overlay**: Fixed full-viewport `mix-blend-mode: lighten` overlay; deliberately kept on own GPU layer with `transform: translateZ(0)` and `contain: strict`; opacity is degraded during scroll (see `useSmoothScroll` implementation) because `mix-blend-mode` is the most expensive operation on the page

**Lenis Integration Notes**
- CSS `scroll-behavior` is removed from the document so mobile's native momentum scroll isn't overridden
- Lenis modifies the `<html>` element during initialization; this is expected and safe
- If Lenis stops working, first check that `html.lenis` styles are not being overridden

## Build & Bundling

**Vite Configuration** (`vite.config.ts`)

The build is configured with manual chunk splitting to optimize caching:
```
react: ['react', 'react-dom']     — Rarely changes; long-lived cache
lenis: ['lenis']                  — Stable library; long-lived cache
icons: ['lucide-react']           — Icon library; long-lived cache
```
The rest of the app code is bundled together.

**Output Target**: ES2020 with esbuild minification.

## Performance Principles

This codebase prioritizes paint performance and memory efficiency:

1. **GPU Layers**: Components that animate or scroll (like videos) use `transform: translateZ(0)` to promote to their own compositor layer, so they don't force repaints of surrounding content.

2. **Intersection Observer**: Lazy loading via `IntersectionObserver` (LazyVideo, likely others) defers network and decode until needed.

3. **CSS Containment**: `contain: layout paint style` on sections prevents layout/paint work from cascading between sections.

4. **Scroll Performance**: Lenis is the only scroll driver; during scrolling, the expensive texture overlay opacity is reduced (see useSmoothScroll logs). No scroll event listeners should be added to `window`.

5. **Prefers Reduced Motion**: All scroll and animation features respect `@media (prefers-reduced-motion: reduce)`.

## Adding New Sections

1. Create a new component in `src/sections/SectionName.tsx`
2. Wrap the root element with `className="section-contain"`
3. If using videos, import and use `LazyVideo` instead of native `<video>`
4. Add the section to `App.tsx` composition
5. Style with Tailwind utilities; keep one-off styles in `src/index.css` only if they must be performance-optimized (GPU layers, containment, blend modes)

## Development Tips

- **Video issues?** Check LazyVideo's `rootMargin` (default `'250px'`) — increase if videos start playing too late
- **Scroll stutters?** Profile the browser's Performance tab; look for long tasks and forced repaints. Check that no components are adding scroll event listeners
- **Build size unexpectedly large?** Check that icon/Lenis versions in `package.json` match what's actually used; unused imports still bundle
- **Tailwind classes not working?** Ensure `content` in `tailwind.config.js` matches your file structure

## TypeScript

- Strict mode is enforced via `tsconfig.json`
- React and DOM types are installed as dev dependencies
- Build command runs `tsc -b` for type checking before Vite build; fix all TS errors before building
