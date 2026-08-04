# VertexCRM

**One Platform. Every Customer. Complete Growth.**

A premium marketing/product website for VertexCRM — a fictional 360° business operations CRM for Indian SMBs. Built as a Full Stack Developer Screening Task for Instabizweb.

🔗 **Live Demo:** [vertexcrm.vercel.app](https://vertexcrm.vercel.app)
📁 **GitHub:** [github.com/your-username/vertexcrm](https://github.com/)

---

## 🚀 Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS (custom design tokens) |
| Scroll Animation | GSAP 3 + `@gsap/react` (`useGSAP`) + ScrollTrigger |
| Component Animation | Framer Motion |
| Smooth Scroll | Lenis |
| Charts | Recharts |
| Icons | Lucide React |
| Fonts | Inter (Google Fonts via `next/font`) |
| Deployment | Vercel |

---

## 🛠 Setup

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve production build
```

---

## 🎨 Design Decisions

### Why Light Theme?
The PRD calls for a disciplined light theme rather than the expected dark-SaaS-glassmorphism approach. Dark mode is now the reflex for "modern CRM" tools, but a carefully executed light theme signals more design maturity and reads as more enterprise-trustworthy to the HR/Finance buyers who live in light-mode tools (Excel, Tally, Google Sheets) every day. The design depth is achieved through layered soft shadows, 1px borders on every surface, and accent-tinted shadows on hover.

### Motion Architecture
Two animation libraries are used with clearly separated responsibilities:
- **GSAP + ScrollTrigger:** All scroll-driven sequences (Dashboard Showcase pin, SVG path draws, fill-line in Automation). GSAP owns anything that needs to sync precisely with scroll position.
- **Framer Motion:** All component-level interactions (mount/unmount via `AnimatePresence`, hover/tap micro-interactions, layout animations, testimonial pointer tilt). Framer owns anything that responds to user interaction without scroll binding.

Both layers share a single `MotionPreferenceContext` that detects `prefers-reduced-motion` and disables animations universally — no duplication of that logic.

### Performance Strategy
- Heavy sections (Dashboard Showcase, Analytics charts) are dynamically imported with skeleton fallbacks to keep the initial JS bundle under the 250KB gzip target
- All pinned ScrollTrigger instances use `ScrollTrigger.matchMedia` to degrade gracefully to a simple `IntersectionObserver`-driven fade+slide on mobile (no broken pin offsets)
- Fonts are loaded via `next/font` for zero layout shift

---

## 📐 Information Architecture (Vol 1.6)
```
Navbar → Hero → Trusted-By → Problem → Solution Transition → Core Features
→ Dashboard Showcase → Integrations → Automation → Analytics
→ Why Choose Us → Testimonials → Pricing → FAQ → Final CTA → Footer
```

---

## 🤖 AI Tools Used

```
Tool: Antigravity (Claude Sonnet 4.6)
Used for: Full site scaffolding — all component architecture, GSAP timelines,
          Framer Motion variants, design token implementation, accessibility wiring
Why chosen: Handles long-context PRDs and translates them into structured,
            well-typed TypeScript component trees without hallucination
% AI-assisted: ~90% (AI wrote the code, human wrote the PRD and reviewed each section)
```

---

## 📋 Acceptance Criteria Verified

### Volume 2
- [x] Every color used maps to a CSS token from Volume 2.2 — no ad-hoc hex values
- [x] Every spacing value is a multiple of 8px
- [x] Every reusable UI element has a typed prop interface

### Volume 3
- [x] No global state library (no Redux/Zustand) — only `useState` + 1 Context
- [x] All GSAP animations use `useGSAP()` or `gsap.context()` for auto-cleanup
- [x] Dashboard Showcase dynamically imported with skeleton fallback

### Volume 5
- [x] Dashboard Showcase timeline matches Volume 5.3 sequence exactly
- [x] Every `pin: true` ScrollTrigger has a `matchMedia` mobile fallback
- [x] `prefers-reduced-motion` respected via `MotionPreferenceContext`
- [x] JSON-LD `SoftwareApplication` structured data in `<head>`
- [x] `sitemap.ts` + `robots.txt` present
- [x] Open Graph + Twitter Card metadata configured

---

## 📝 Notes
- FAQ accordion: **single-open** (one item at a time) — simpler UX, less cognitive load
- Pricing: ₹2,999 / ₹6,999 / Contact Sales — with 20% annual discount
- Testimonials auto-rotate every 4 seconds, pause on hover/focus, keyboard-navigable
- All form validation is client-side only (no backend); success state shown on valid submit
