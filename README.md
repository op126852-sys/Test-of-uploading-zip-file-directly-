# EXOSIA°

A cinematic, editorial, photography-led promotional website for a premium sci-fi
space series — one continuous immersive vertical experience.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** — dark, near-square-corner design system
- **Framer Motion** — restrained fade-up entrances, staggers, subtle parallax
- **lucide-react** — minimal arrow / menu icons only
- Self-hosted **Inter Variable** grotesk via `@fontsource-variable/inter`

## Structure

```
src/
├── app/                    # layout, page, global styles
├── components/
│   ├── Header.tsx          # absolute micro header + mobile menu overlay
│   ├── HeroSection.tsx     # 100vh astronaut close-up, title, Discover control
│   ├── MissionSection.tsx  # astronaut EVA plate + statement
│   ├── StatsBar.tsx        # 4 / 36 / 18 / 1 Night statistics
│   ├── UpdatesSection.tsx  # dark plate + three editorial stories
│   ├── UpdateCard.tsx      # photo + metadata + title card
│   ├── PremiereSection.tsx # floating astronaut, event details, CTA
│   ├── Footer.tsx          # minimal hairline footer
│   ├── Reveal.tsx          # in-view fade-up wrapper
│   └── ParallaxImage.tsx   # capped ~40px background parallax
└── lib/                    # motion tokens + navigation helpers
public/images/              # AI-generated cinematic photography
```

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Design notes

- Palette: `#06080A / #090B0E / #0D1014` backgrounds, `#F4F4F1` text,
  hairline borders at ~22% white; warmth comes from the photography.
- No glassmorphism, neon, pill nav, large radii (0–4px only), or heavy shadows.
- Fully responsive with bespoke tablet (2-col updates) and mobile
  (stacked layout, 2×2 stats, hamburger menu, per-breakpoint image focal
  points) treatments — not a shrunken desktop.
- Motion: 500–800ms fades with `cubic-bezier(0.22, 1, 0.36, 1)`,
  native smooth scrolling, `prefers-reduced-motion` respected.
