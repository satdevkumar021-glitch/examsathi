# 🎓 ExamSathi (परीक्षा साथी · ਪ੍ਰੀਖਿਆ ਸਾਥੀ)

> **An open-source, authoritative exam preparation platform & multilingual learning engine for state and central government examinations.**

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Pages-2088FF?style=for-the-badge&logo=github-actions)](https://github.com/features/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Languages](https://img.shields.io/badge/Languages-Hindi%20%7C%20Punjabi%20%7C%20English-success?style=for-the-badge)](#trilingual-architecture)

---

## 🌟 Overview

**ExamSathi** is a modern, mobile-first educational web platform designed to streamline competitive exam preparation for government recruitment examinations in **Punjab, Rajasthan, and Central Government**. 

Unlike generic exam apps, ExamSathi bridges the gap between **official government syllabus notifications** and **academic study material** by providing direct integration with state board textbooks (PSEB), central textbooks (NCERT), open-school modules (NIOS), spaced repetition flashcards, and computer-based mock tests.

### 🏛️ Targeted Examination Bodies & Boards
* **Punjab Government:**
  * **Education Recruitment Board (ERB):** Punjab Master Cadre (SST, Science, Math, Punjabi, Hindi, English), Lecturer Cadre, ETT (Elementary Teacher Training - 6635 posts).
  * **PSSSB:** Punjab Subordinate Services Selection Board (Clerk, Senior Assistant, Patwari).
  * **Punjab Police Recruitment Board:** Police Constable & Sub-Inspector (SI).
* **Rajasthan Government:**
  * **RBSE / RSMSSB:** REET (Level 1 & 2), 3rd Grade Teacher, Rajasthan Patwar, Rajasthan Police.
* **Central Government:**
  * **CBSE / CTET:** Central Teacher Eligibility Test (Paper 1 & Paper 2).
  * **Staff Selection Commission (SSC):** SSC CHSL (10+2), SSC CGL, SSC GD Constable.

---

## 🏗️ Architecture & Engineering Highlights

```
examsathi-web/
├── .github/workflows/deploy.yml   # Automated CI/CD deployment to GitHub Pages
├── firebase.json                  # Firebase Hosting rewrite rules for single-page routing
├── next.config.ts                 # Next.js 16 SSG export configuration with dynamic basePath
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── (auth)/                # Auth flows (login, register)
│   │   ├── (dashboard)/           # Protected dashboard layout & shell
│   │   │   ├── dashboard/         # Main learner analytics dashboard
│   │   │   ├── exams/             # State-wise exam discovery portal
│   │   │   ├── study/             # Exam > Subject > Chapter hierarchy
│   │   │   ├── lesson/            # 6-Tab study room (theory, PDFs, flashcards, MCQs, videos, notes)
│   │   │   ├── mock-test/         # CBT examination engine with question palette
│   │   │   ├── results/           # Performance breakdown & accuracy analytics
│   │   │   ├── profile/           # Learner streak, badges, and preferences
│   │   │   └── typing-practice/   # PSSSB Punjabi (Raavi) & English typing simulator
│   │   ├── layout.tsx             # Root layout with responsive mobile viewport
│   │   └── page.tsx               # High-converting landing & welcome screen
│   ├── components/                # Reusable UI components
│   │   ├── layout/                # BottomNav, TopHeader, LanguageToggle
│   │   └── ui/                    # 3D FlipCard, StreakBadge, QuestionCard
│   └── lib/
│       ├── data/                  # Single Source of Truth Domain Data
│       │   ├── exams.ts           # Authoritative syllabus tree (80+ syllabus nodes)
│       │   ├── lessons.ts         # Aggregated lesson repository with alias resolution
│       │   ├── questions.ts       # 360+ trilingual MCQs with detailed explanations
│       │   └── lessons/           # Domain-specific academic modules
│       │       ├── reference_sst.ts  # 29 Punjab Master Cadre Social Science lessons
│       │       ├── science.ts        # Physics, Chemistry & Biology modules
│       │       ├── mathematics.ts    # Arithmetic & Quantitative Aptitude
│       │       ├── punjabi.ts        # Compulsory Paper A, Gurmukhi & Literature
│       │       ├── hindi.ts          # Hindi Sahitya Ka Itihas & Vyakaran
│       │       ├── english.ts        # Grammar & Literature modules
│       │       ├── patwari_police.ts # Punjab Land Measurements & Law Basics (BNS 2023)
│       │       ├── pedagogy.ts       # Child Development (Piaget, Vygotsky, Kohlberg)
│       │       └── rajasthan.ts      # Rajasthan Art, Culture & Geography
│       └── store.ts               # Zustand global state manager
```

### 1. 100% Static Site Generation (SSG) with Zero Server Footprint
* Built using Next.js 16 with `output: 'export'`.
* Every dynamic route (`/exams/[state]`, `/study/[exam]/[subject]`, `/lesson/[topicId]`, `/mock-test/[testId]`, `/results/[attemptId]`) implements `generateStaticParams()` on server wrappers, compiling **94 static HTML/CSS/JS pages** at build time.
* Enables free, lightning-fast hosting on **GitHub Pages**, **Firebase Hosting**, **Vercel**, or **Cloudflare Pages** without requiring a Node.js server.

### 2. Trilingual Learning Engine (हिंदी · ਪੰਜਾਬੀ · English)
* Instant, client-side toggle across all 3 languages without reloading the page.
* Fully localized lesson theory, mnemonics, flashcard prompts/answers, and mock test question stems.
* Specially formatted Gurmukhi typography designed for Punjabi Paper A qualifying candidates.

### 3. The 6-Tab Comprehensive Pedagogy Framework
Every topic in ExamSathi provides a dedicated study room with 6 interactive tabs:
1. **📖 Theory & Syllabus Mapping:** Structured conceptual breakdowns, historical timelines, and official government notification badges.
2. **📄 Official PDFs & Textbooks:** One-click direct downloads and previews for official **PSEB Punjabi textbooks**, **NCERT modules**, **NIOS study guides**, and official department notifications.
3. **🃏 3D Spaced Repetition Flashcards:** Interactive cards with 3D CSS perspective transforms, powered by the **FSRS (Free Spaced Repetition Scheduler)** review algorithm (*Again 1m, Hard 10m, Good 1d, Easy 4d*).
4. **🎯 Topic-Wise Practice MCQs:** Authentic questions from previous years (PYQs) with instant evaluation and detailed explanations.
5. **🎥 Curated Video Lectures:** Verified educational YouTube lectures embedded directly into the lesson.
6. **📝 Interactive Personal Notes:** Auto-saved markdown notepad persisted locally in `localStorage`.

### 4. Computer-Based Test (CBT) Engine
* Full-screen timer with countdown warning.
* Interactive question palette color-coded by state: *Answered (Green)*, *Marked for Review (Amber)*, *Unanswered (Slate)*.
* Comprehensive performance analytics post-submission (Accuracy %, Time per question, Sectional breakdown, Weak-area diagnostics).

---

## 🚀 Getting Started Locally

### Prerequisites
* Node.js 18.x or higher
* npm or yarn

### Installation
```bash
# 1. Clone repository
git clone https://github.com/satdevkumar/examsathi.git
cd examsathi/examsathi-web

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build & Export
```bash
npm run build
```
This generates the optimized static export in the `/out` directory.

---

## 🔒 Security & Privacy Compliance

* **Zero Sensitive Data:** Clean repository history with no hardcoded credentials, secret keys, or personal identifiers.
* **Client-First Architecture:** User progress, streak tracking, test results, and notes are managed client-side via LocalStorage/SessionStorage, ensuring complete user privacy.
* **Content Integrity:** All book references and syllabus links point strictly to official government portals (`punjab.gov.in`, `pseb.ac.in`, `ncert.nic.in`, `nios.ac.in`, `ctet.nic.in`).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
