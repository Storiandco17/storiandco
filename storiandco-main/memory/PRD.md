# Stori & Co. — PRD

## Original Problem Statement
Luxury marketing agency landing page for **Stori & Co.** — a studio-engine that builds high-performance brand identities for fashion, lifestyle and beauty brands. Positioning: "Where High-Art Meets High-Performance".

User-confirmed choices:
- Contact form submissions persisted in MongoDB.
- "Book Consultation" CTA scrolls to the in-page contact form.
- Instagram: https://www.instagram.com/storiandco?igsh=dDJueXZ3dHhyeHJr
- Keep single-page experience (no multi-route).
- Verticals: fashion, lifestyle, beauty only (e-commerce and pets removed per user direction).

## Stack & Architecture
- Backend: FastAPI + Motor (MongoDB) — endpoints `/api/`, `/api/status` (paginated), `/api/contact` POST/GET (paginated).
- Frontend: React (CRA) + Tailwind + shadcn/ui (Select, Checkbox, Sonner). Single page at `/`.
- Reveal-on-scroll via IntersectionObserver (`useReveal` hook).
- Logo served locally as WebP + PNG (responsive `srcset`), preloaded for LCP.

## Design System
- Palette: `#0A0A0A` obsidian / `#C5A26B` champagne gold / `#E5E5E5` silver borders / `#FFFFFF` text.
- Fonts: Cormorant Garamond (serif italic display), JetBrains Mono (body/tech), Inter (wide caps).
- Motifs: 0.5pt hairline borders, blueprint grid, corner brackets, animated grain.

## What's been implemented (2026-05-15)
- Hero with optimized local logo (transparent WebP, 14 KB), eyebrow, tagline, services strip, gold CTA + ghost CTA, scroll cue.
- Nav (fixed, blurs on scroll, 4 anchor links, 44 px+ tap targets, `aria-label="Primary"`).
- About / Manifesto (3 Operating Pillars, infinite ticker — fashion/beauty/lifestyle only).
- Process section (4 phases: Discovery → Architecture → Build → Scale, with deliverables).
- Services 2×2 grid (Paid Advertising, Content Strategy, Social Media Management with Instagram/Facebook/WhatsApp/Pinterest, Website Building with Custom Web/Mobile App/Shopify).
- Contact form → POST `/api/contact` → success toast + "SIGNAL RECEIVED" panel.
- Footer with status bar, navigate links, Instagram, copyright.

## Performance & SEO
- Hero logo 2 MB → 14 KB (WebP, transparent bg, srcset).
- Fonts: preconnect + preload + `display=swap`.
- JSON-LD `MarketingAgency` schema with address (Pune, IN), service types, sameAs Instagram.
- Canonical, robots (`index, follow, max-image-preview:large`), `robots.txt`, `sitemap.xml`.
- OpenGraph + Twitter cards with dimensions.
- Single H1, proper H2/H3 hierarchy, all sections `aria-labelledby` heading IDs.
- `<picture>` + responsive `srcset` + `fetchPriority="high"` + `decoding="async"`.

## Testing
- Iteration 1 (initial build): 100% backend + 100% frontend (12 flows).
- Iteration 2 (perf + SEO regression): 100% backend + 100% frontend (14 flows).

## Backlog (P1/P2)
- P1: Admin dashboard at `/admin` (protected) to view contact submissions (`GET /api/contact` already paginated).
- P1: Transactional email confirmation on submit (Resend / SendGrid) — needs sending domain.
- P2: Case studies / portfolio editorial section.
- P2: FAQ accordion + pricing tier teasers.
- P2: Convert to multi-route (`/about`, `/services`, `/contact`) if per-page SEO becomes important.

## Next Action Items
- Deploy.
- Once a domain is live, swap canonical and JSON-LD URLs from `storiandco.in` to the actual production URL.
