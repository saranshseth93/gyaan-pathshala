# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Gyaan Pathshala — a single-page multilingual marketing website for a tuition center in Paldi, Ahmedabad, India (Nursery to Class 7). Supports English, Hindi, and Gujarati. Deployed to Hostinger via FTP on push to `main`.

## Commands

- `npm run dev` — start Vite dev server (localhost:5173)
- `npm run build` — production build to `dist/`
- `npm run lint` — ESLint
- `npm run preview` — preview production build

Package manager specified as pnpm in package.json but CI uses `npm ci --legacy-peer-deps`. Use npm for consistency with deployment.

## Architecture

**Single-component app.** All UI lives in `src/App.jsx` — one React component with state for carousel, scroll, mobile menu, and language. No routing, no API calls.

**i18n system** (`src/i18n/`):
- `translations.js` — all text in `en`, `hi`, `gu` objects
- `LanguageContext.jsx` — React context with `useLanguage()` hook returning `{ language, setLanguage, t }`
- `main.jsx` wraps App in `<LanguageProvider>`
- All visible text uses `t.*` references, never hardcoded strings

**Styling:** Custom CSS in `src/App.css` using CSS custom properties (OKLCH colors, fluid typography via clamp, spacing scale). Tailwind CSS 4 imported but utility classes rarely used directly. Design tokens defined in `:root`.

**Icons:** Lucide React for all UI icons. No emojis in UI (except footer heart).

**Images:** All imported via ES modules in App.jsx (carousel JPGs, subject PNGs, standard-image PNGs, WhatsApp icon). Never use `/src/assets/` paths directly.

**shadcn/ui components** in `src/components/ui/` are scaffolded but not used in the main App.

## Key Design Decisions

- **Warm terracotta palette** (OKLCH-based), not the typical blue education theme
- **Phone-first design** — optimized for 6-inch Android screens on mobile data
- **Contact CTAs:** WhatsApp + Phone only. No email, no physical address on the site.
- **Scroll-shrinking nav:** Logo 48px default, 32px after 80px scroll. Nav padding reduces.
- **Carousel:** Clean photos without text overlay. Terracotta hero bar below with rotating caption.
- **Sticky bottom CTA bar** on mobile (WhatsApp + Call). WhatsApp FAB on desktop.

## Key Conventions

- Path alias: `@` maps to `./src` (configured in `vite.config.js`)
- JSX files, not TSX — JavaScript, not TypeScript
- Fonts: Nunito (body) + Outfit (display) via Google Fonts
- Color tokens use OKLCH format
- `prefers-reduced-motion` respected (disables all animations/transitions)
- Touch targets minimum 44x44px

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to Hostinger via FTP on push to `main`. Uses Node 18, `npm ci --legacy-peer-deps`, FTP credentials stored as GitHub secrets (`FTP_HOST`, `FTP_USERNAME`, `FTP_PASSWORD`).
