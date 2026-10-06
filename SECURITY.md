# 🛡️ Security Policy — ExamSathi

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

---

## 🔒 Security Architecture & Guarantees

ExamSathi is architected with strict security, privacy, and integrity standards:

1. **Zero Server Attack Surface (100% Static Export)**:
   - All pages are statically generated at build time (`output: 'export'`).
   - No backend runtime servers, SQL databases, or vulnerable server-side endpoints exist.
   
2. **Client-Side Privacy**:
   - User progress, streak counts, test scores, diagnostic levels, and notes are persisted exclusively on the client machine via `localStorage` and `sessionStorage`.
   - No personal candidate data or behavioral telemetry is transmitted to third-party tracking services.

3. **Zero Secrets in Source Code**:
   - The repository contains no API keys, credentials, private tokens, or access credentials.
   - All external resource links point to official public government domains (`punjab.gov.in`, `pseb.ac.in`, `ncert.nic.in`, `nios.ac.in`).

4. **MIT License Open Governance**:
   - Complete codebase transparency under the permissive MIT License.

---

## 🚨 Reporting a Vulnerability

If you discover a potential security vulnerability within ExamSathi, please report it responsibly:

1. Open an issue on GitHub tagged with `[Security]` or contact the maintainer directly.
2. Provide a detailed summary, steps to reproduce, and potential impact.
3. We will review and patch vulnerabilities promptly.
