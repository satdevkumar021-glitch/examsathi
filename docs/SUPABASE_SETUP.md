# Supabase setup: authentication first

The current frontend is a Next.js static export on GitHub Pages. Supabase Auth runs directly from the browser. Connecting authentication does **not** enable cloud saving: notes, bookmarks, attempts, XP and progress remain local until database migrations, RLS and sync code are implemented.

## 1. Create or select the project

Create a project in https://supabase.com/dashboard. Save its database password securely; do not put it in frontend environment variables. Keep email confirmation enabled. Email/password authentication is the first launch target; Google is optional.

## 2. Configure public build values

Add these repository Actions variables (legacy Actions secrets are also supported), already referenced by `.github/workflows/deploy.yml`:

- `NEXT_PUBLIC_SUPABASE_URL`: project URL, for example `https://PROJECT.supabase.co`.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: the publishable key (`sb_publishable_…`) or legacy **anon** JWT key. The variable name remains compatible with the existing workflow.

These values are bundled into public frontend JavaScript. Never use a secret key, service-role key, database password or Google OAuth client secret here. Use `.env.local` for local development; it is ignored by Git. Both values must be valid or the application stays in guest mode.

Changes require a fresh build/deploy. GitHub Pages cannot inject environment values after deployment.

## 3. Configure Auth URL settings

For the current GitHub Pages deployment:

- Site URL: `https://satdevkumar021-glitch.github.io/examsathi/`
- Allowed redirect URL: `https://satdevkumar021-glitch.github.io/examsathi/auth/callback/`
- Allowed redirect URL: `https://satdevkumar021-glitch.github.io/examsathi/auth/reset-password/`

For local testing, also allow:

- `http://localhost:3000/auth/callback/`
- `http://localhost:3000/auth/reset-password/`

Use exact production URLs. Retain trailing slashes. The signup confirmation and recovery email templates must honor `{{ .RedirectTo }}` (or use the standard Supabase confirmation link that honors it); a hardcoded Site URL bypasses these pages.

This client uses PKCE. Open email links in the same browser that requested them so the stored verifier is available. Expired, reused and missing-verifier links display a retry message. Callback exchanges are deduplicated across React Strict Mode mounts. Older implicit links are accepted when tokens are present; recovery links must have the recovery type.

## 4. Email delivery

Supabase's default email service is intended for testing and has delivery restrictions. Configure a production SMTP provider and verify its sending domain before inviting general users. Check provider limits in the dashboard.

## 5. Optional Google login

After configuring the provider, set the repository Actions variable `NEXT_PUBLIC_GOOGLE_AUTH_ENABLED=true` and rebuild to enable the Google button.

Enable Google in Supabase Authentication → Providers. Configure the Google client ID and secret **in Supabase**, not in GitHub public environment variables. Set Google's authorized redirect URI to the Supabase callback URI shown in the provider settings (normally `https://PROJECT.supabase.co/auth/v1/callback`). Supabase then redirects back to the application's `/examsathi/auth/callback/` page.

## 6. Release checks

Local automated checks:

```
npm run test:auth
npx tsc --noEmit
npm run build
```

Before public account launch, verify against the actual project:

1. Sign up with a test email, confirm the email in the same browser, land on the dashboard and see the correct account.
2. Sign out, sign in with the correct password, and verify a wrong password is rejected.
3. Reload the dashboard; the account session persists.
4. Request recovery, open the email, verify mismatched passwords are rejected, update the password and sign in with the new password.
5. Open an expired/used link and a reset page without a link; neither should offer an unverified reset form.
6. Sign out from the profile; return to `/examsathi/login/`, then reload and confirm the account is signed out.
7. If Google is enabled, complete its round trip and verify the callback keeps `/examsathi/`.
8. Clear configuration in a test build; guest study remains available and account controls stay disabled.

Authentication is not admin authorization. `useAuth()` drives UI state only. Database RLS and server-side authorization must enforce access when the database and publisher are added.

## Next phase

Add versioned schema migrations and per-user RLS policies, test isolation between two users, then implement cloud sync. Do not promise cross-device progress until those checks pass.

Sources:
- https://supabase.com/docs/guides/auth/passwords
- https://supabase.com/docs/guides/auth/redirect-urls
- https://supabase.com/docs/guides/auth/sessions/pkce-flow
- https://supabase.com/docs/guides/auth/auth-smtp
- https://supabase.com/docs/guides/database/postgres/row-level-security

## Connected project

Project reference: `nrzuihzvgnmpikwzbqam`. Production Site URL and both production callback URLs were saved on 6 October 2026. Email authentication and email confirmation are enabled. Google is currently disabled. Custom SMTP is not enabled. Public email delivery must be configured and tested before general-user launch.
