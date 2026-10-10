# ExamSathi account email setup

Chosen provider: Resend, using the free plan initially. Account creation, acceptance of terms, domain purchase and new credential entry are completed by the owner.

## Current status

- Supabase project: `nrzuihzvgnmpikwzbqam`, healthy.
- Production Site URL and callback/reset URLs saved.
- Public Supabase build values configured in GitHub Actions variables.
- Email authentication and confirmation enabled; Google disabled.
- Custom SMTP disabled. Default Supabase email sends only to organization members and is unsuitable for general-user registration.
- Resend signup opened for the owner. Domain ownership must be confirmed before DNS setup.

## Next steps

1. Owner creates/signs into a free Resend account.
2. Select a domain the owner controls. A GitHub Pages subdomain cannot be verified as an owned sending domain. A custom website domain is optional for frontend hosting but an owned sending domain is needed here.
3. Add an authentication sending subdomain (for example `auth.examsathi.org`, only if owned) in Resend.
4. Add the exact DNS records Resend supplies at the domain's DNS provider. Preserve existing website and email records. Wait for Resend verification.
5. Create a sending-only Resend API key limited to the verified sending domain. This persistent credential step requires owner confirmation. Keep the key out of source, logs and public frontend variables.
6. Configure Supabase Authentication → Emails → SMTP Settings:
   - Host: `smtp.resend.com`
   - Port: `465`
   - Username: `resend`
   - Password: Resend API key, entered directly into Supabase.
   - Sender name: `ExamSathi`
   - Sender email: an address under the verified sending domain, such as `no-reply@auth.examsathi.org` if that domain is owned and verified.
7. Save SMTP settings; run signup confirmation and recovery tests with owner-controlled test email addresses. The owner enters actual new passwords in the browser.
8. Confirm successful delivery, correct callback paths, rejection of expired links, password update and subsequent sign-in before announcing public registration.

Keep click/open tracking off for authentication links; follow provider guidance for avoiding link rewrites and token consumption by email scanners. Configure SMTP rate limits within the chosen plan's quota.

References:
- https://supabase.com/docs/guides/auth/auth-smtp
- https://resend.com/docs/send-with-supabase-smtp
- https://resend.com/docs/dashboard/domains/introduction
- https://resend.com/pricing
