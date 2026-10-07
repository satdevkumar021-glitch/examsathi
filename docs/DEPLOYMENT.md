# ExamSathi deployment

## Current production

GitHub Pages serves the static export at https://satdevkumar021-glitch.github.io/examsathi/.
Pushes to `main` run core tests, build the export and deploy through `.github/workflows/deploy.yml`. Documentation-only release records may use `[skip ci]` in the commit message.

Run `npm ci`, `npm test`, `npm run lint` and `npm run build:static` before publishing. The build script temporarily excludes API routes, restores them in a `finally` block and copies the PDF.js worker into public assets.

## What works on Pages

- Public lessons, syllabus coverage, resources and practice tests.
- Browser extraction of text-based PDF, DOCX, TXT and Markdown documents.
- Local source-grounded recall questions; this is explicitly labelled local practice rather than cloud AI.
- Supabase browser authentication when public URL/key and redirect allowlists are configured.
- Per-account browser progress. **Cross-device study sync is not implemented.**
- Public offline fallback and install prompt where the browser supports them.

Pages does not execute `/api/*`. It cannot provide Gemini generation, image OCR or server publishing.

## Dynamic Next deployment for cloud AI

Deploy this repository to a Next-compatible Node host using `npm run build` and `npm run start` (or the host's Next adapter).

Set:

- `NEXT_PUBLIC_BASE_PATH` to an empty string for a root-domain deployment.
- Public `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Server-only `GEMINI_API_KEY`; optionally `GEMINI_MODEL`.
- Leave `STATIC_EXPORT` unset and do not set `NEXT_PUBLIC_STATIC_EXPORT=true`.

Use a single origin for frontend and API. A separate `NEXT_PUBLIC_API_URL` backend requires an explicit CORS allowlist and has not been end-to-end validated here. Never expose a Gemini or Supabase service-role secret as `NEXT_PUBLIC_*`.

The generation route verifies Supabase identity, consumes an atomic quota, validates model JSON and requires supporting excerpts from the submitted notes. Draft answers still require human review. File extraction runs in the browser; photos/scanned PDFs are unsupported until an OCR service is implemented.

## Supabase

Project: `nrzuihzvgnmpikwzbqam`.

The additive migration `supabase/migrations/202610070001_ai_quota.sql` was applied on 7 October 2026. It enables RLS, blocks direct client access to the quota table and allows authenticated users to consume only their own quota: five requests per UTC day, at least 30 seconds apart. Dashboard policy verification passed.

Do not blindly rerun the legacy `src/lib/db/schema.sql` against an existing project. Review existing triggers, policies and tables before any migration. That schema alone does not enable cloud progress sync.

For email delivery, configure a verified sender domain and custom SMTP provider. Then test confirmation and password-reset messages with a real inbox. Google login requires provider credentials, the Supabase OAuth callback and an enabled `NEXT_PUBLIC_GOOGLE_AUTH_ENABLED` build flag. These service settings remain incomplete.

For each new production origin, update Supabase Site URL and the exact callback/reset-password redirect allowlist before testing authentication.

## Release validation and limits

See `docs/verification/FIX_REPORT_2026-10-07.md`. This distinguishes fixes, browser checks and pending syllabus/content/service work. Passing HTTP checks does not establish that every feature or question is correct.
