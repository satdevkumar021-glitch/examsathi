# ExamSathi (परीक्षा साथी) — Google AdSense Monetization & Compliance Checklist

**Document Version:** 1.0.0  
**Purpose:** Ensure ExamSathi achieves 100% Google AdSense approval while preserving an ad-free, high-focus learning environment for test takers.

---

## 1. Google AdSense Approval Prerequisites

- [ ] **Custom Domain Setup:** Deploy on production domain (e.g., `examsathi.in` / `examsathi.org`) with SSL/TLS active.
- [ ] **Essential Legal & Transparency Pages:**
  - [ ] `/privacy-policy`: Explicitly states cookie usage, Google AdSense personalization, and DPDP Act 2023 data rights.
  - [ ] `/terms`: Outlines acceptable platform use, copyright, and free access model.
  - [ ] `/about`: Explains mission, verified educational sources, and founding team.
  - [ ] `/contact`: Provides working contact email, grievance officer details, and feedback channels.
- [ ] **`ads.txt` Integration:** Hosted at root domain (`/ads.txt`) with authorized publisher IDs.
- [ ] **Cookie Consent Banner:** Lightweight, non-intrusive consent banner allowing users to accept or customize analytics and ad cookies.

---

## 2. Ad Placement Rules (Strict Student-Focus Policy)

To protect candidate concentration during high-stakes preparation:

### Prohibited Ad Zones (Zero Ads Permitted) 🚫
1. **Live CBT Mock Test Interface (`/mock-test/[testId]`):** Absolutely zero banner, interstitial, or sticky ads during timed tests.
2. **Raavi & English Typing Practice Screen (`/typing-practice`):** No ads causing layout shifts or visual distraction during speed drills.
3. **Authentication & Profile Security Pages (`/login`, `/register`, `/forgot-password`, `/profile`):** Clean, ad-free transactional interfaces.
4. **Administrative CMS Portal (`/admin`):** Ad-free.

### Permitted Ad Zones (Non-Intrusive Placements) ✅
1. **Lesson Reader Endpoints (`/lesson/[topicId]`):** A single bottom banner slot located below the lesson content, after study notes.
2. **Results & Analytics Scorecards (`/results/[attemptId]`):** A responsive display ad below the weak-area diagnostic report.
3. **Daily GK & Current Affairs Pages (`/daily-gk`):** Inline banner between historical events and the daily quote.

---

## 3. Core Web Vitals & Technical Protections

1. **Cumulative Layout Shift (CLS < 0.1):** All ad containers must have fixed `min-height` reservation (e.g., `min-h-[250px]` or `min-h-[90px]`) to prevent layout shifts when ads load asynchronously.
2. **Feature Flag Isolation:** The ad delivery layer is wrapped behind an environment variable flag (`NEXT_PUBLIC_ENABLE_ADS=false`). The entire platform builds and functions flawlessly with ads disabled.
3. **Lazy Loading:** All ad scripts load with `async` / `defer` attributes after the main bundle executes.
