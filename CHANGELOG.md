# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2026-05-10

### Added

#### New Frontend Design (Editorial Edition)
- Complete redesign implementing editorial/architectural aesthetic
- Custom color palette: bone (#F2EFE9), ink (#0F0F0A), klein-blue (#0028FF)
- Three new font families via Google Fonts:
  - Cormorant Garamond (serif) - for headings and accents
  - Syne (sans-serif) - for bold display text
  - IBM Plex Mono (monospace) - for technical elements

#### New Components
- **Header** (`src/components/sections/header.tsx`)
  - Fixed navigation with backdrop blur
  - Mobile responsive hamburger menu
  - Architectural border styling
  - Klein-blue accent on Contact button

- **Hero** (`src/components/sections/hero.tsx`)
  - Large typography with reveal animations
  - Animated SVG data visualization (spinning circles)
  - Live network latency display (1-4ms random)
  - Two CTA buttons with hover effects
  - Blueprint card with system status

- **Marquee** (`src/components/sections/marquee.tsx`)
  - Animated text band with 30s infinite scroll
  - Seven feature highlights: Offline AI, Voice Powered, Privacy Focused, etc.
  - Dark background (ink) with bone text

- **Feature Table** (`src/components/sections/feature-table.tsx`)
  - Comparison matrix with official logos
  - Columns: OpenClaw, ArcIntelligence, Legacy Models
  - Hover-invert effect on rows
  - Custom logo containers with noise texture

- **Features Grid** (`src/components/sections/features-grid.tsx`)
  - Four-category grid: Comms & Admin, Life Operations, Finance & Markets, Business Strategy
  - Each category has 5 feature items with ↬ bullets
  - Dark background with light cards
  - Hover transitions to klein-blue

- **Support Section** (`src/components/sections/support-section.tsx`)
  - Four donation tiers: Supporter ($9.99), Champion ($19.99), Legendary ($39.99), Elite ($69.99)
  - Elite tier with gold gradient (amber) background
  - Embedded Apache License modal

- **Footer** (`src/components/sections/footer.tsx`)
  - Large background text "ARC" watermark
  - Social links: YouTube, Instagram, X (Twitter)
  - Directory and Legal sections
  - License modal with full Apache 2.0 text

- **Scroll Manager** (`src/components/scroll-manager.tsx`)
  - IntersectionObserver-based scroll reveal animations
  - Staggered reveals for grid elements
  - Applied to h2, h3, grid items, table rows

#### Global Enhancements
- **Grid Background**: Visible 4rem blueprint grid pattern
- **Custom Scrollbar**: 6px width, bone track, ink thumb, klein-blue hover
- **Selection Highlight**: Klein-blue background with bone text
- **Smooth Scroll**: scroll-smooth enabled on html element
- **Hydration Warning Suppression**: Added suppressHydrationWarning

### Changed

#### Layout & Configuration
- `next.config.ts`: Disabled Turbopack (added webpack flag to scripts)
- `package.json`: Updated dev and build scripts to use `--webpack`
- `layout.tsx`: Added Google Fonts with CSS variables, scroll-smooth class
- `globals.css`: Complete rewrite with editorial theme variables

#### Existing Components Updated
- **Header**: Complete rewrite with new styling
- **Hero**: Complete rewrite with animations and SVG
- **Feature Table**: Complete rewrite with logos and new structure
- **Footer**: Complete rewrite with license modal

### Removed
- Old UI components no longer used in main page
- Previous dark theme implementation
- Legacy styling from globals.css

### Fixed
- Hydration mismatch for latency display (client-only rendering)
- Hydration mismatch for SVG lines (client-only rendering)
- Elite tier styling (gold gradient applied)
- Scroll reveal animations not triggering

---

## [1.x.x] - Previous Versions

*Previous changelog entries not documented in this file.*

---

## Migration Notes

### For Users Upgrading from v1.x
1. Clear browser cache to ensure new fonts load correctly
2. New design uses light theme (bone background) vs previous dark theme
3. Scroll behavior now includes smooth scrolling
4. Network latency displays 1-4ms (randomized) instead of accumulating

### For Developers
- All new components are Client Components ("use client")
- Font variables: `--font-serif`, `--font-sans`, `--font-mono`
- Color variables: `--color-bone`, `--color-ink`, `--color-klein-blue`
- Utility classes: `.arch-border`, `.text-mask`, `.hover-invert`, `.btn-editorial`, `.btn-outline`

---

## Dependencies Added
- (none - using existing next/font/google)

## Dependencies Updated
- None (all dependencies were pre-existing)

---

## Known Issues
- Turbopack not supported on Windows x64; using Webpack fallback
- SVG animation may have slight performance impact on low-end devices
- Elite tier gold gradient may need fine-tuning for accessibility

---

## Credits
- Design inspiration: Editorial/architectural aesthetic
- Fonts: Google Fonts (Cormorant Garamond, Syne, IBM Plex Mono)
- Logos: Local assets in `/public/logos/`