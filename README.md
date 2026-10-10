# Labib.dev Portfolio

A responsive, single-page developer portfolio built with React 19, TypeScript,
Vite, Tailwind CSS v4, Framer Motion, Lucide, React Hook Form, and Zod.
Lightweight native metadata handling covers the page title and SEO tags; a router
is unnecessary because all navigation is between sections on the same page.

## Run locally

Use Node.js 22.12 or later.

```sh
npm install
npm run dev
```

Production commands:

```sh
npx tsc --noEmit
npm run build
npm run preview
```

The existing project does not provide a lint or automated browser-test script.
The production build does not itself run TypeScript's type checker, so run the
type-check command separately before deploying changes.

## Personalization

This portfolio is configured for **Labib** (Md Labebul Islam), Full Stack Web Developer.
The location is set to **Dhaka, Bangladesh · Remote (Worldwide)**, and primary stack to **MERN**.

| Content | Edit here |
| --- | --- |
| Name, role, location, experience, availability, profiles, resume, site URL | `src/data/site.ts` |
| Projects (fields: `id`, `name`, `category`, `description`, `image`, `imageAlt`, `technologies`, `features`, `overview`, `approach`, `liveUrl`) | `src/data/projects.ts` |
| Technical skills | `src/data/skills.ts` |
| Work experience records | `src/data/experience.ts` |
| What I bring (skills & process) | `src/data/services.ts` |
| Design tokens, typography, layout, breakpoints | `src/index.css` |
| Page metadata | `src/components/Seo.tsx` |
| Static browser title and font loading | `index.html` |

Before publication:

- Replace `displayName` and `fullName` with your real information.
- Verify the role, location, experience length, and availability.
- Set your email, GitHub URL, LinkedIn URL, PDF resume URL, and canonical `siteUrl`.
- Set `isExampleIdentity` to `false` only after replacing the example identity.
- Manage project content in `src/data/projects.ts` with accurate live links, screenshots, overview, approach, and feature lists.
- Update the static fallback title in `index.html` to match your name.
- Review remaining narrative text in `src/sections/` for accuracy.

`profileImage` is reserved in the personal configuration. No portrait is shown
by default, since none was provided. The generated workspace photograph is
atmospheric artwork, not a claim about the developer's personal office.

## Projects

Projects are defined in `src/data/projects.ts` as an array of real project objects.
Each project supports the following fields:
`id`, `name`, `category`, `description`, `image`, `imageAlt`, `technologies`, `features`, `overview`, `approach`, and `liveUrl`.

Every project includes a primary "Visit live site" button linking directly to `liveUrl` in a new tab, as well as a full detailed modal presenting the project's background, technical approach, key features, and technology stack.

## Resume

To update the resume, replace public/Labib-Resume.pdf with a file of the same name and redeploy.

## Contact delivery

The contact form uses [Web3Forms](https://web3forms.com) to deliver messages directly to your email inbox without requiring a server backend.

### Setup Instructions

1. Get a free access key at [web3forms.com](https://web3forms.com) (sent to your email).
2. For local development, create a `.env.local` file in the project root:
   ```env
   VITE_CONTACT_ENDPOINT=https://api.web3forms.com/submit
   VITE_WEB3FORMS_KEY=your_access_key
   ```
3. **Deployment (Vercel / Netlify)**: Add `VITE_CONTACT_ENDPOINT` and `VITE_WEB3FORMS_KEY` in your platform's environment settings **before** building/deploying.

> [!NOTE]
> `VITE_` variables are public by design and baked into the static frontend output at build time. The Web3Forms access key is designed to be public (it only routes messages to your inbox). If environment variables are not set, the form seamlessly uses a local draft mode.

## Deploy

On Vercel or Netlify, import the repository, use `npm run build`, and publish
`dist`. Add the optional public contact endpoint to the host's environment
settings and redeploy. This is a static frontend; your email endpoint is deployed
separately.

On any static host, upload the **entire** `dist/` directory. The starter's
single-file Vite plugin inlines application JavaScript and CSS into `index.html`,
but public project thumbnails, the workspace image, favicon, and resume PDF
remain separate files. Do not upload only `index.html`.

The site uses root-relative assets and is ready for a root-domain deployment.
A subdirectory deployment requires adjusting the Vite base and public asset URLs.
For social crawlers that do not execute JavaScript, mirror your final metadata
into static `index.html` or prerender the site as part of your deployment pipeline.

## Accessibility and performance

- Semantic sections, heading structure, a skip link, descriptive controls, and visible focus indicators.
- Native dialogs with focus trapping, Escape dismissal, inert backgrounds, and focus restoration.
- Labeled fields with associated validation messages and announcement regions.
- Framer Motion with user reduced-motion preferences, one-time section reveals, and no continuous background animation.
- Locally served, lightweight SVG project artwork and a roughly 66 KB hero image.
- Lazy-loaded project images and a high-priority, dimensioned hero image.
- No analytics, tracking scripts, authentication secrets, or fabricated performance scores.

## Release checks

TypeScript diagnostics and the production build can be checked in this project.
Browser automation is not configured. Before publishing personal content,
complete the following checks in actual browsers:

- Test at 320, 375, 768, 1024, and 1440 pixels, including 200% text zoom.
- Tab through navigation, mobile navigation, forms, filters, and every preview.
- Check that Escape dismisses dialogs and focus returns to the opener.
- Check mobile menu opening, closing, and section navigation.
- Exercise each project action and empty search result state.
- Check all form validation messages, draft downloads, and clipboard fallback.
- With a real endpoint, test successful delivery, non-2xx responses, invalid JSON, timeouts, and offline behavior.
- Confirm all configured social, repository, demo, and resume URLs.
- Review reduced-motion behavior, contrast, layout overflow, and keyboard focus.
- Run a fresh dependency audit and Lighthouse report on the deployed site. Do not assume a score without measurement.

## Verification status

The production build completed successfully without build warnings, and the
source-edit TypeScript diagnostics reported no errors. A browser automation
runner and a real email endpoint were not available in the implementation
environment, so cross-browser interaction tests, Lighthouse scores, and actual
message delivery have not been verified.

The last dependency installation reported **4 audit advisories: 3 high and 1
low**, including after compatible build-tool updates. The package installer only
exposes a count, not the detailed report. Run `npm audit` locally, inspect the
actual dependency paths and affected versions, and remediate or assess them
before publishing. Do not treat the successful build as a completed security
audit. Avoid exposing the Vite development server publicly; deploy the static
production output instead.