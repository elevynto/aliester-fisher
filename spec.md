# Specification — Alister Fisher Consulting site

Concrete spec for the single-page site. Derived from `requirements/requirements.md` and the design in `requirements/landing-page.png`. Working conventions live in `CLAUDE.md`.

## 1. Goals

- Communicate what Alister Fisher Consulting Ltd offers (production-ready AI-enabled engineering systems) and convert qualified visitors to a 30-minute call.
- Trivial to update — a non-developer (or future-you) should be able to change a heading by editing one file.
- Single page, static-rendered, fast on mobile, accessible.

## 2. Tech & architecture

| Area | Decision |
|---|---|
| Framework | Next.js (App Router), TypeScript |
| Rendering | Fully static (default RSC, no client components unless interactive) |
| Styling | CSS Modules + CSS custom properties in `app/globals.css` |
| Fonts | `next/font` (self-hosted) |
| Images | `next/image`, with `priority` on the hero profile shot |
| Hosting | Vercel, via GitHub Actions in `.github/workflows/ci.yml` |
| Analytics | None initially |
| Forms / backend | None — CTA is a `mailto:` or external scheduling link |

## 3. Design system

### Colour
- Background: `#191919`
- Border / divider: `rgba(255, 255, 255, 0.14)`
- Foreground text: white at varying opacity (`1.0` headings, `~0.72` body, `~0.5` muted/meta)
- Accent / primary button: solid white background with dark text (matches the "Book a 30-min call" CTA in the mock)

### Layout
- Container `max-width: 800px`, centered.
- Horizontal padding: `clamp(20px, 5vw, 32px)`.
- Vertical rhythm between sections: ~64–96px (use `clamp()`).
- Section dividers: 1px top border using `--border` between content blocks.

### Typography
- One sans-serif family for everything (e.g. Inter via `next/font`).
- Fluid scale via `clamp()`. Rough targets:
  - H1: `clamp(2rem, 4.5vw, 2.75rem)`, tight leading.
  - H2: `clamp(1.375rem, 2.5vw, 1.625rem)`.
  - Body: `1rem`–`1.0625rem`, leading ~1.6.
  - Meta/labels: `0.875rem`, slightly muted.

### Components
- `Button` (primary + secondary variants).
- `Section` wrapper (handles top border + vertical padding).
- `ProfileImage` for the inline portrait (rounded, fixed aspect).

## 4. Page sections (in order)

The mock at `requirements/landing-page.png` defines exact copy. Each item below is one section component in `app/sections/`:

1. **Hero** — Name + role line ("Alister Fisher — AI-Enabled Engineering Consultant"), tagline ("Production-ready AI-enabled engineering systems."), short pitch paragraph, primary CTA "Book a 30-min call", small profile photo inline.
2. **Credibility line** — single muted paragraph (e.g. "21+ years building scalable production systems…").
3. **Problem** — "Most teams are using AI… but not effectively" with a short bulleted list of failure modes.
4. **Solution** — "Turn AI into a reliable part of your engineering system" with a bulleted list of capabilities delivered.
5. **Approach** — "A focused 2–3 day implementation" with named phases (Assess, Integrate, Reinforce, Enable or similar — match the mock).
6. **What you get** — deliverables list.
7. **What this enables** — outcomes list.
8. **About** — short bio paragraph + second portrait + a pull-quote.
9. **Closing CTA** — "Thinking about adopting AI into your engineering workflow?" + repeat of the booking button.
10. **Contact** — email (`mailto:` link). Whatever specific address the mock shows.
11. **Company** — Aliester Fisher Consulting Ltd, "Registered in England and Wales", Company No., VAT No. (use exact values from the mock).

> The exact wording for every section must be lifted verbatim from `requirements/landing-page.png`. Treat that image as canonical copy.

## 5. Assets

Copy from `requirements/` into `public/` at build setup:

| Source | Destination | Use |
|---|---|---|
| `requirements/profile.png` | `public/profile.png` | Hero + About portraits |
| `requirements/og-image.png` | `public/og-image.png` | OG + Twitter card image |
| `requirements/favicon.png` | `public/favicon.png` | Favicon (referenced via metadata `icons`) |

All images served via `next/image` with explicit `width`/`height` and meaningful `alt`. The OG image is referenced as a static URL in the `openGraph.images` array.

## 6. SEO / metadata

Set in `app/layout.tsx` via the App Router `Metadata` API.

- `metadataBase`: the production URL (set once the Vercel domain is known).
- `title.default`: `Alister Fisher — AI-Enabled Engineering Consultant`.
- `title.template`: `%s | Alister Fisher` (future-proofing).
- `description`: ~150–160 chars, lifted from the hero pitch — must contain "AI-enabled engineering", "production-ready", and the consultancy angle.
- `keywords`: omit (Google ignores them; don't bother).
- `openGraph`:
  - `type: "website"`
  - `locale: "en_GB"`
  - `siteName: "Alister Fisher Consulting"`
  - `images`: `[{ url: "/og-image.png", width: 1200, height: 630, alt: "Alister Fisher — AI-Enabled Engineering Consultant" }]`
- `twitter`: `card: "summary_large_image"`, same image + title + description.
- `robots`: `{ index: true, follow: true }`.
- `icons`: `{ icon: "/favicon.png", apple: "/favicon.png" }`.
- `alternates.canonical`: production URL.

Also embed a JSON-LD `<script>` in `layout.tsx` with combined `Person` and `ProfessionalService` schema (name, jobTitle, url, image, sameAs, areaServed, address with the company's registered details).

## 7. Performance & accessibility budget

- LCP < 2.0s on mobile 4G; hero image `priority`.
- CLS < 0.05; all images sized explicitly.
- All interactive elements keyboard reachable with a visible `:focus-visible` outline.
- Colour contrast ≥ 4.5:1 for body text against `#191919`.
- Semantic landmarks; one `<h1>`; heading levels never skip.

## 8. Deployment

- Workflow: `.github/workflows/ci.yml` (already in repo). Triggers on push and PR to `master`; deploys to Vercel production on push to `master`.
- Required GitHub secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`. Setup instructions in `README.md`.
- Local dev: `npm run dev`. Production build smoke-test: `npm run build && npm start`.

## 9. Out of scope

- Tests (explicitly excluded by the brief).
- CMS / dynamic content / multiple pages / i18n.
- Authentication, comments, search, blog.
- Tailwind / component libraries / animation libraries — not needed for this scope.

## 10. Acceptance checklist

- [ ] Page renders identically (to a reasonable degree) to `requirements/landing-page.png` at 375px, 768px, and 1280px widths.
- [ ] Background `#191919`, dividers `rgba(255,255,255,0.14)`, container capped at `800px`.
- [ ] All copy taken verbatim from the design.
- [ ] `profile.png`, `og-image.png`, `favicon.png` present in `public/` and served via `next/image` / metadata.
- [ ] Metadata API populated; sharing the URL in Slack/LinkedIn renders the OG card correctly.
- [ ] JSON-LD validates in Google's Rich Results test.
- [ ] Lighthouse: Performance, Accessibility, Best Practices, SEO all ≥ 95 on mobile.
- [ ] Pushing to `master` deploys to Vercel without manual intervention.
- [ ] `.gitignore` is the standard Next.js template (no `.next/`, `node_modules/`, `.vercel/`, `.env*` tracked).
