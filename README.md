# Shawon.dev Portfolio

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

## Make it yours

The name **Shawon** is the example name from the brief, not an asserted personal
identity. The location, availability, experience length, and MERN stack are
editable example values. No real employers, dates, achievements, metrics,
testimonials, social accounts, or project repositories have been invented.

| Content | Edit here |
| --- | --- |
| Name, role, location, experience, availability, profiles, resume, site URL | `src/data/site.ts` |
| Projects, screenshots, links, and example labels | `src/data/projects.ts` |
| Technical skills | `src/data/skills.ts` |
| Verified employment, internships, freelance experience | `src/data/experience.ts` |
| Services and work process | `src/data/services.ts` |
| Design tokens, typography, layout, breakpoints | `src/index.css` |
| Page metadata | `src/components/Seo.tsx` |
| Static browser title and font loading | `index.html` |

Before publication:

- Replace `displayName` and `fullName` with your real information.
- Verify the role, location, experience length, and availability.
- Set your email, GitHub URL, LinkedIn URL, PDF resume URL, and canonical `siteUrl`.
- Set `isExampleIdentity` to `false` only after replacing the example identity.
- Replace example project content with real work and set each `isExample` flag accurately.
- Add verified experience records to the empty `experience` array. The current fallback is explicitly a learning-focused example, not an employment record.
- Update the static fallback title in `index.html` to match your name.
- Review remaining narrative text in `src/sections/` for accuracy.

`profileImage` is reserved in the personal configuration. No portrait is shown
by default, since none was provided. The generated workspace photograph is
atmospheric artwork, not a claim about the developer's personal office.

## Project interactions

All four projects are explicitly labeled **interactive concepts**, not client
work or completed full-stack products. Their included previews really work:

- **Cartify:** product search, add to cart, quantity changes, and calculated subtotals.
- **Taskflow:** task creation, text search, status changes, and deletion.
- **Devlog:** article search, topic filters, reading views, and session bookmarks.
- **Overview:** searchable sample directory, status filters, validated member creation, status toggles, removal, and derived member counts.

These previews use in-memory sample data. Closing or switching away from a
preview resets it. They do not implement server authentication, purchasing,
publishing, payments, real invitations, or data persistence. The project detail
views distinguish the working frontend preview from a suggested production
architecture and stack.

Every project has an independent string `id`; you can add as many as you need.
The optional `previewKind` selects one of the four bundled concept sandboxes.
Remove `previewKind` when replacing a concept with a real project, then set its
own `liveUrl` and `repositoryUrl`.

When `liveUrl` or `repositoryUrl` is configured, the relevant card links use the
actual URLs. Otherwise, Live Demo opens the local interactive preview and the
source link explains that no repository is connected. Unconfigured social links
also explain the missing configuration rather than pointing to an invented account.

## Resume

With `resumeUrl` empty, Download Resume opens an honest information dialog and
offers `public/resume-template.md` as a clearly marked editable template.
It does not masquerade as a completed resume. Place your real PDF in `public/`
and set, for example, `resumeUrl: "/resume.pdf"` to enable a real download.
An external PDF URL also works, although cross-origin download behavior depends
on the remote server's headers.

## Contact delivery

**No email service is configured by default. Nothing is silently sent.**

The form validates name, email, subject, and message using React Hook Form and
Zod. Without an endpoint, Prepare Message creates a local draft that can be
downloaded or copied. The success screen explicitly says the draft was **not
sent**. No form data is persisted to local storage, and there is no artificial
success delay.

To enable delivery, create a real backend/serverless endpoint, copy
`.env.example` to `.env.local`, and set `VITE_CONTACT_ENDPOINT` to the endpoint's
public URL. Restart the development server or rebuild the production site after
changing environment variables.

The client sends an HTTPS POST with `Content-Type: application/json` and:

```json
{
  "fullName": "The sender's name",
  "email": "sender@example.com",
  "subject": "A project inquiry",
  "message": "The validated message text."
}
```

The endpoint must return a 2xx JSON response with `{"ok":true}` **only when the
email provider has genuinely accepted the message**. All other responses are
treated as errors. The UI includes a loading state, request timeout, network
failure messages, server-error handling, and a downloadable draft fallback.
A provider acceptance does not guarantee arrival in a recipient's inbox.

Backend responsibilities:

- Validate all fields again on the server. Frontend validation is not a security boundary.
- Keep email-provider keys and recipient configuration in server-only environment variables.
- Never use a `VITE_` prefix for a secret: Vite exposes these values to the browser.
- Use a verified sender address; use the visitor's address only as a validated reply-to.
- Add rate limiting, abuse protection, payload limits, and appropriate origin/CORS restrictions.
- Encode user input safely and do not include untrusted text in raw email headers or HTML.
- Return safe error responses and avoid logging sensitive message contents unnecessarily.

End-to-end delivery cannot be verified until a real backend and sender are configured.

## Deploy

On Vercel or Netlify, import the repository, use `npm run build`, and publish
`dist`. Add the optional public contact endpoint to the host's environment
settings and redeploy. This is a static frontend; your email endpoint is deployed
separately.

On any static host, upload the **entire** `dist/` directory. The starter's
single-file Vite plugin inlines application JavaScript and CSS into `index.html`,
but public project thumbnails, the workspace image, favicon, and resume template
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
- Check all form validation messages, draft downloads, clipboard fallback, and service-to-subject prefilling.
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