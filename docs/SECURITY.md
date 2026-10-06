# ExamSathi (परीक्षा साथी) — Security Architecture & Threat Model

**Document Version:** 1.0.0  
**Scope:** Client Application, Edge Compute, Server-Authoritative Scoring, and Database  
**Compliance:** OWASP Top 10 (2021), India Digital Personal Data Protection (DPDP) Act 2023

---

## 1. OWASP Top 10 Threat Mitigation Matrix

| OWASP Category | Vulnerability Risk in EdTech | ExamSathi Defensive Architecture |
| :--- | :--- | :--- |
| **A01: Broken Access Control** | Unauthorized access to admin CMS or tampering with other candidates' test attempts. | Strict PostgreSQL Row Level Security (RLS) ensures users can only access their own attempts, notes, and private documents. Admin routes are protected by server-side JWT claim checks (`role = 'admin'`). |
| **A02: Cryptographic Failures** | Exposing passwords or tokens in transit or storage. | Passwords never stored in plaintext. Argon2id / bcrypt hashing managed by Supabase Auth. All traffic strictly enforced over HTTPS (TLS 1.3). JWTs stored in `HttpOnly`, `SameSite=Lax`, `Secure` cookies. |
| **A03: Injection (SQL / XSS)** | Malicious SQL in search queries or script injection in user notes / lesson HTML. | 1. Parameterized queries and prepared statements exclusively.<br>2. Lesson HTML rendered through strict DOMPurify sanitizer preventing inline `script`, `onerror`, or iframe injection.<br>3. React JSX automatic escaping on all user-supplied text. |
| **A04: Insecure Design** | Candidates inspecting correct answers before submitting tests. | **Server-Authoritative Scoring:** Raw question objects exposed to the client omit `correct_option` and `explanation`. Scores and solutions are calculated and released exclusively by server RPCs upon submission. |
| **A05: Security Misconfiguration** | Unrestricted CORS, missing security headers, or default passwords. | Comprehensive Content Security Policy (CSP), `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Strict-Transport-Security: max-age=31536000`. |
| **A07: Identification & Auth Failures** | Hardcoded OTP backdoors (e.g. `'123456'`) or brute-force OTP attempts. | Cryptographic 6-digit OTPs with 5-minute expiration, exponential backoff after 3 failed attempts, rate-limited to 3 requests per hour per phone/email. |

---

## 2. Content Security Policy (CSP)

The following CSP header is enforced on all responses:

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: https: blob:; connect-src 'self' https://*.supabase.co https://generativelanguage.googleapis.com; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com; object-src 'none'; base-uri 'self';
```

---

## 3. Data Privacy & DPDP Act 2023 Compliance

ExamSathi is dedicated to free public education while strictly respecting student privacy:
1. **Data Minimization:** No Aadhaar, financial details, or sensitive personal data is ever collected. Only name, email or phone (for login recovery), and study progress are stored.
2. **Right to Erasure:** Candidates can trigger full account and data deletion from `/profile` (`DELETE /api/v1/user/account`), purging all attempts, bookmarks, notes, and uploaded PDFs.
3. **Private Document Isolation:** Notes and PDFs uploaded by students for AI question generation are tagged `is_private = true`. They are strictly isolated via RLS, never accessible to other students or search crawlers, and excluded from LLM training.
