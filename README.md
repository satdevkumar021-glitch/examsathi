# 🎓 ExamSathi (परीक्षा साथी · ਪ੍ਰੀਖਿਆ ਸਾਥੀ)

> **An open-source, authoritative exam preparation platform, topic-wise mock test engine & multilingual learning suite for state and central government examinations.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-22C55E?style=for-the-badge&logo=github)](https://satdevkumar021-glitch.github.io/examsathi/)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Security: Audited](https://img.shields.io/badge/Security-Zero_Secrets_Audited-success?style=for-the-badge)](SECURITY.md)

---

## 🌐 Live Application URL
🚀 **[https://satdevkumar021-glitch.github.io/examsathi/](https://satdevkumar021-glitch.github.io/examsathi/)**

---

## 🌟 Overview

**ExamSathi** is an enterprise-grade, mobile-first educational web platform designed to streamline competitive exam preparation for government recruitment in **Punjab, Rajasthan, and Central Government**.

Unlike generic exam portals, ExamSathi bridges the gap between **official government syllabus notifications** and **academic study material** by providing direct integration with state board textbooks (PSEB), central textbooks (NCERT), open-school modules (NIOS), spaced repetition flashcards, topic-wise CBT mock tests, and diagnostic candidate level evaluation.

### 🏛️ Targeted Examination Bodies & Boards
* **Punjab Government:**
  * **Education Recruitment Board (ERB):** Punjab Master Cadre (SST, Science, Math, Punjabi, Hindi, English), Lecturer Cadre, ETT (Elementary Teacher Training), PSTET.
  * **PSSSB:** Punjab Subordinate Services Selection Board (Clerk, Senior Assistant, Patwari).
  * **Punjab Police Recruitment Board:** Police Constable & Sub-Inspector (SI).
* **Rajasthan Government:**
  * **RBSE / RSMSSB:** REET (Level 1 & 2), 3rd Grade Teacher, Rajasthan Patwar, Rajasthan Police, RSMSSB Clerk.
* **Haryana Government:**
  * **BSEH / HSSC:** HTET (Level 1, 2, 3), Haryana Police Constable, Haryana Clerk.
* **Delhi & Central Police:**
  * **SSC / DP:** Delhi Police Constable, Delhi Police SI, CAPF.
* **Central Government:**
  * **CBSE / CTET:** Central Teacher Eligibility Test (Paper 1 & Paper 2).
  * **Staff Selection Commission (SSC):** SSC CHSL (10+2), SSC CGL, SSC MTS, SSC GD Constable.
  * **NTA / UGC:** UGC NET.
* **Defence & Entry Forces:**
  * **Indian Army:** Agniveer (General Duty, Technical, Clerk).

---

## 📚 Complete Engineering Documentation (`/docs`)

Comprehensive architectural and engineering specifications:

| Document | Purpose & Contents |
| :--- | :--- |
| **[`docs/AUDIT.md`](docs/AUDIT.md)** | Phase 0 verification report & exhaustive 16-bug register with root causes and fixes. |
| **[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)** | Target system architecture (Next.js PWA, Supabase Postgres vs Firebase, AI gateway, low-end device optimizations). |
| **[`docs/DATA_MODEL.md`](docs/DATA_MODEL.md)** | Database ERD, complete SQL DDL migrations with RLS policies, indexes, and server-authoritative scoring view. |
| **[`docs/API.md`](docs/API.md)** | Typed REST and RPC API specifications with request/response schemas for CBT scoring, auth, and AI. |
| **[`docs/AI_PIPELINE.md`](docs/AI_PIPELINE.md)** | PDF-to-MCQ parsing, semantic chunking, deduplication, JSON schema validation, and cost caps. |
| **[`docs/ROADMAP.md`](docs/ROADMAP.md)** | Multi-milestone delivery timeline, sprint breakdown, and risk mitigation. |
| **[`docs/SECURITY.md`](docs/SECURITY.md)** | Threat model, OWASP Top 10 defenses, Content Security Policy (CSP), and DPDP Act 2023 compliance. |
| **[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)** | Production deployment, Vercel 1-click hosting, Supabase PostgreSQL, and Gemini AI vision runbook. |
| **[`docs/TESTING.md`](docs/TESTING.md)** | Playwright E2E suite, unit test matrix, and CI test execution instructions. |
| **[`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md)** | Primary source citations (NCERT, PSEB, ERB gazettes), PYQ authenticity, and Gurmukhi/Devanagari standards. |
| **[`docs/ADSENSE_CHECKLIST.md`](docs/ADSENSE_CHECKLIST.md)** | Google AdSense monetization readiness, student-focus ad placement policy, and Core Web Vitals. |
| **[`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md)** | Contributor guidelines, code standards, and PR process. |

---

## ⚡ Quick Start Setup (Under 10 Minutes)

Get ExamSathi running locally in under 10 minutes:

```bash
# 1. Clone repository
git clone https://github.com/satdevkumar021-glitch/examsathi.git
cd examsathi/examsathi-web

# 2. Install dependencies (Node.js 20+ recommended)
npm install

# 3. Start local development server
npm run dev
# -> Local server live at http://localhost:3000

# 4. Run automated E2E tests (Chromium headless)
npx playwright test e2e/audit.spec.ts

# 5. Build production static bundle
npm run build
```

## 🚀 Key Features

### 1. 📚 Topic-Wise Mock Test Portal (`/mock-test`)
- **15+ Subject Tracks**: Dedicated mock test capability for every core syllabus domain:
  - Punjab History & Sikh Gurus (1469-1708, Khalsa, Misals, Maharaja Ranjit Singh)
  - Indian Polity & Constitution (Preamble, Fundamental Rights, Writs, Parliament, Judiciary)
  - Indian & Punjab Geography (Doabs, Rivers, Soils, Mediterranean Western Disturbances)
  - Indian Economy (National Income, RBI Repo Rate, NITI Aayog, MSP & CACP, Five-Year Plans)
  - World History (French Revolution, Russian Revolution, Industrial Revolution, UNO, Cold War)
  - Science, Quantitative Math, Punjabi Grammar & Literature.

### 2. ⚡ 100,000+ Question Dynamic Generator Engine (`question_bank_engine.ts`)
- Dynamically derives thousands of statement verification and fact-checking MCQs on the fly from verified syllabus lesson notes and flashcard databases.
- Zero client-side bundle bloat: runs instantaneously in mobile browsers without crashing memory.
- Balanced option distribution across A, B, C, and D with verified explanations.

### 3. 🃏 Dual Interactive Modes (Exam CBT vs 3D Flip Cards)
- **Live Exam Mode (CBT Simulator)**:
  - Live countdown timer with auto-submit.
  - Interactive OMR question palette (*Answered*, *Marked for Review*, *Unanswered*).
  - Authentic Punjab Master Cadre **-0.25 negative marking penalty** for incorrect answers.
- **3D Flip Card Mode**:
  - Interactive tap-to-flip 3D CSS perspective cards.
  - Question on front; verified answer and key takeaway on back.
  - FSRS (Free Spaced Repetition Scheduler) rating (*Again*, *Hard*, *Good*, *Easy*).

### 4. 🏆 5-Tier Candidate Diagnostic Level Benchmark
Every test submission benchmarks candidate readiness:
- **Level 5: Master Cadre Exam Ready 🏆** (Top 3% percentile, Gold tier)
- **Level 4: Advanced Competitor 🥈** (Top 15% percentile, Silver tier)
- **Level 3: Developing Candidate 🥉** (Top 40% percentile)
- **Level 2: Foundation Stage 📚**
- **Level 1: Beginner Explorer 🌱**
- Complete post-test diagnostic reports with raw score minus penalties, accuracy rate, weak-area diagnostic, and one-click "Practice in Flip Card Mode" action.

### 5. 📜 Last 10 Years Authentic PYQ Archive (2014–2024)
- 40 curated, exam-verified past questions spanning 2014, 2016, 2017, 2020, 2021, and 2022 Punjab Master Cadre SST examinations.
- Available as a dedicated "10-Year PYQ Live Test" track.

### 6. 🌐 Trilingual Learning Engine (हिंदी · ਪੰਜਾਬੀ · English)
- Instant client-side toggle across Hindi, Punjabi (Gurmukhi), and English without page reload.
- Full Gurmukhi typography support designed for Punjab Paper A qualifying criteria.

---

## 🏗️ Technical Architecture

```
examsathi-web/
├── .github/workflows/deploy.yml   # Automated GitHub Pages CI/CD deployment
├── SECURITY.md                    # Zero-secrets security and privacy policy
├── LICENSE                        # Permissive MIT Open Source License
├── firebase.json                  # Firebase Hosting rewrite rules
├── next.config.ts                 # Next.js 16 SSG export with dynamic basePath
├── src/
│   ├── app/                       # Next.js App Router (137 static SSG pages)
│   │   ├── (auth)/                # Authentication flows (Login, Register)
│   │   ├── (dashboard)/           # Dashboard shell & bottom navigation
│   │   │   ├── dashboard/         # Main analytics and readiness overview
│   │   │   ├── exams/             # State-wise exam catalog (Punjab, Rajasthan, Central)
│   │   │   ├── study/             # Exam > Subject > Chapter hierarchy
│   │   │   ├── lesson/            # 6-Tab study room (theory, PDFs, cards, MCQs, videos)
│   │   │   ├── mock-test/         # Dual Mode CBT simulator & Flip Card portal
│   │   │   ├── results/           # 5-Tier level diagnostic & negative marking report
│   │   │   ├── profile/           # User study streak, badges, and preferences
│   │   │   └── typing-practice/   # PSSSB Punjabi (Raavi) & English typing simulator
│   │   ├── layout.tsx             # Root layout with responsive mobile viewport
│   │   └── page.tsx               # Multilingual landing page
│   ├── components/                # Reusable UI components
│   │   ├── layout/                # BottomNav, LanguageToggle
│   │   └── ui/                    # 3D FlipCard, StreakBadge
│   └── lib/
│       ├── data/                  # Single Source of Truth Domain Data
│       │   ├── exams.ts           # Authoritative syllabus hierarchy
│       │   ├── lessons.ts         # Aggregated lessons with alias resolution
│       │   ├── questions.ts       # Handcrafted exam question bank
│       │   ├── question_bank_engine.ts # 100k+ procedural question generator & level engine
│       │   └── questions/
│       │       └── master_cadre_pyqs.ts # 40 authentic 10-year Master Cadre PYQs
│       └── store.ts               # Zustand global state manager
```

---

## 🔒 Security & Privacy Audit

* **Zero Hardcoded Secrets**: Scanned and verified: no API keys, private tokens, or sensitive credentials exist in the codebase or git history.
* **Client-First Privacy**: Learner test scores, progress, notes, and preferences are stored purely in client-side `localStorage` / `sessionStorage`.
* **Zero Server Attack Surface**: 100% pre-rendered Static Site Generation (SSG) with no backend database or runtime server.
* **Official Data Provenance**: All curriculum references link directly to verified official government education portals (`punjab.gov.in`, `pseb.ac.in`, `ncert.nic.in`, `nios.ac.in`).

---

## 🛠️ Local Development

```bash
# 1. Clone repository
git clone https://github.com/satdevkumar021-glitch/examsathi.git
cd examsathi/examsathi-web

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Production build & verification
npm run build
```

---

## 📄 License

This project is licensed under the **[MIT License](LICENSE)** — free and open for educational and commercial adaptation.
