# Contributing to ExamSathi (परीक्षा साथी)

Thank you for your interest in contributing to ExamSathi! This project is dedicated to providing free, high-quality, Indic-first competitive examination preparation for every student.

---

## 1. Code of Conduct & Academic Integrity

- **Factual Accuracy:** All educational contributions must cite primary authoritative sources (NCERT, PSEB, official state gazettes). Never fabricate past-year exam questions.
- **Linguistic Respect:** Maintain grammatical precision in Hindi (Devanagari) and Punjabi (Gurmukhi). Avoid machine-translation artifacts.
- **Inclusivity:** Keep the platform accessible, lightweight, and performant for low-end Android mobile devices on 2G/3G connections.

---

## 2. Development Setup (Under 10 Minutes)

### Prerequisites
- Node.js 20.x or later
- npm 10.x or later

### Setup Steps
```bash
# 1. Clone the repository
git clone https://github.com/satdevkumar021-glitch/examsathi.git
cd examsathi/examsathi-web

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Open in browser
http://localhost:3000
```

---

## 3. Pull Request Guidelines

1. **Link to Bug / Feature:** Reference the corresponding Bug ID (e.g. `Fixes BUG-01`) or Milestone from `docs/ROADMAP.md`.
2. **Type Checking & Linting:** Verify that TypeScript compiles cleanly:
   ```bash
   npx tsc --noEmit
   npm run lint
   ```
3. **E2E Testing:** Run Playwright tests to ensure zero regressions:
   ```bash
   npx playwright test e2e/audit.spec.ts
   ```
4. **Commit Conventions:** Follow Conventional Commits:
   - `fix(cbt): resolve topic alias in question generator (BUG-01)`
   - `feat(exams): add Haryana HTET syllabus catalog (Milestone 3)`
   - `docs(audit): update phase 0 bug register`
