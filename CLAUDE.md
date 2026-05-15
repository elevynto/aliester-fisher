# CLAUDE.md

Project guide for working in this repo. Read this before making changes.

## What this is

A single-page marketing site for **Alister Fisher Consulting Ltd** — an AI-enabled engineering consultancy. Optimised for simple, infrequent content updates by a single author.

Full feature spec lives in `spec.md`. Source-of-truth design is `requirements/landing-page.png`. Original brief is `requirements/requirements.md`.

## Stack

- **Next.js (App Router)** — single route, mostly static.
- **TypeScript**.
- **CSS Modules** or plain CSS via `app/globals.css` — no Tailwind/CSS-in-JS unless a future feature demands it. Keep dependencies minimal.
- **next/image** for all imagery (profile, og, inline). Always set width/height; mark profile photos `priority`.
- **next/font** for self-hosted fonts (no runtime font requests).
- Deployed to **Vercel** via the workflow at `.github/workflows/ci.yml` on push/merge to `master`.

## Design tokens

Define these once in `app/globals.css` as CSS custom properties — do not hard-code elsewhere.

| Token | Value |
|---|---|
| `--bg` | `#191919` |
| `--border` | `rgba(255, 255, 255, 0.14)` |
| `--container-max` | `800px` |

The container is centered with horizontal padding that scales on small viewports. Layout must be fully responsive (the brief calls this "dynamic sizing") — no fixed pixel widths on inner content, use `clamp()` / relative units for type and spacing.

## File layout

```
app/
  layout.tsx          // <html>, <body>, fonts, metadata defaults
  page.tsx            // the single landing page; composes section components
  globals.css         // tokens + resets + base type
  sections/           // one file per page section (Hero, Problem, Approach, ...)
  components/         // small shared primitives (Button, SectionDivider, etc.)
public/
  profile.png         // copied from requirements/profile.png
  og-image.png        // copied from requirements/og-image.png
  favicon.png         // copied from requirements/favicon.png
```

Keep the page composition flat in `page.tsx` — one `<Section>` per content block, in document order. This is what "simple content updates" means in practice: edit one section file, ship.

## Content updates

Page copy currently lives inline in the section components. If/when copy churn picks up, lift it into a typed `content.ts` module — do **not** add a CMS until there's a reason to.

## SEO / metadata

Use the App Router `Metadata` API in `app/layout.tsx` (and overrides in `page.tsx` if needed). Set:

- `title`, `description`, `metadataBase`
- `openGraph` (title, description, url, siteName, images → `/og-image.png`, locale `en_GB`, type `website`)
- `twitter` (`summary_large_image`, same image)
- `robots` (index, follow)
- `icons` → `/favicon.png`
- `alternates.canonical`

Include `JSON-LD` (`Person` + `ProfessionalService`) inline via a `<script type="application/ld+json">` in `layout.tsx` for richer search results.

## Deployment

- Pushing to `master` triggers `.github/workflows/ci.yml`, which builds and deploys to Vercel using `vercel build --prod && vercel deploy --prebuilt --prod`.
- Required secrets in the GitHub repo: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`. Setup steps are in `README.md`.
- PRs to `master` build but do not deploy to prod — fine for now; revisit if preview deploys are wanted.

## .gitignore

The repo currently ships a near-empty `.gitignore`. Replace it with the standard Next.js template (covers `node_modules/`, `.next/`, `out/`, `.env*`, `.vercel/`, build artefacts, OS junk).

## Conventions

- No tests — the brief explicitly says none are required. Don't add a test harness on a whim.
- Don't introduce backend routes, databases, or auth. If a contact form is added later, route it through a third-party (Formspree, Resend) rather than spinning up a server.
- Don't add analytics without asking; if added, prefer `@vercel/analytics` for zero-config.
- Accessibility: semantic landmarks (`<header>`, `<main>`, `<footer>`), heading order, alt text on images, visible focus states, sufficient contrast against `#191919`.
- Keep Lighthouse scores ≥ 95 across the board — it's a one-page static site, there's no excuse.
- Source-of-truth design must be copied word-for-word and pixel-by-pixel. Make an exact copy.