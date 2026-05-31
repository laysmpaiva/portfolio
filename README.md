# Lays Paiva — Portfolio

Personal portfolio for a growth marketer focused on **SaaS, startups & AI**.
Neobrutalist / scrapbook style, built with **Astro** + **GSAP**.

## Stack
- [Astro](https://astro.build) — static site
- [GSAP](https://gsap.com) + ScrollTrigger — scroll reveals, stat counters, parallax
- Hand-rolled neobrutalist design system (`src/styles/global.css`)
- Google Fonts: Space Grotesk, Space Mono, Caveat

## Content
- `src/data/content.ts` — all copy, case studies, capabilities, tooling
- `src/data/showcase.json` — **managed ad spend windowed to tenure per client**
  (pulled from Pipeboard / Meta, account-level over each client's date span —
  not lifetime account totals). Total managed ≈ $1.35M.
- `public/creatives/` — real ad creatives (downloaded from Google Drive)
- `public/lays.jpg` — hero photo (**add this file**; falls back to a placeholder)

## Develop
```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## Deploy
Pushes to `main` auto-deploy to GitHub Pages via `.github/workflows/deploy.yml`.
Repo is a user site → served at the root domain.
