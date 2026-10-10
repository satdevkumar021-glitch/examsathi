# ExamSathi remediation — 7 October 2026

This report follows REAUDIT_2026-10-07.md. It records implemented corrections and remaining gaps; it does not certify that every possible defect or syllabus gap is resolved.

## Corrections

| Audit IDs | Result |
|---|---|
| B01–B04 | Unified account-scoped custom-practice transport, persisted generated-question snapshots, recovered saved reviews before current-bank filtering, and preserved topic/duration configuration. Browser verified a saved generated question launches as an exact one-question revision drill. |
| B05–B09 | Roadmap uses actual reviewed SRS IDs, resets answer state on track changes, rotates challenges by date, awards completion XP once, and provides 60 selectable daily plans. Plans expose available content and pending lessons. Browser verified track-switch answer isolation and day 60. |
| B10 | Consumes configured practice duration and removes unsupported full official simulator claims. Full exam-specific official simulations remain a content/product task. |
| B11–B13 | Persistent deadline-based focus timer recovers after reload; pause/resume uses elapsed wall time; study duration stores seconds and rounds only for display. Browser verified running-session reload recovery. |
| B14–B15 | Coach has explicit completion, stop/restart and cleanup. Browser verified five completed breathing cycles. |
| B16–B18 | Profile, roadmap, coach and onboarding read EN/Hindi/Punjabi selection; document language updates; completion controls have names/state and coach uses native accessible disclosures. Source curriculum text may remain English. Other pages still need full translation review; screen-reader certification remains pending. |
| B19–B22 | Removed unsupported rank/archive claims, distinguished local recall from cloud AI drafts, deduplicated vault notes and implemented dated activity streaks and idempotent XP. |
| B23 | Service worker now precaches a self-contained static offline fallback without JS/CSS dependencies. Clean-install offline lifecycle/device testing remains pending. |
| B24–B25 | Sitemap derives from exported routes; robots exclusions include the Pages base path. |
| B26 | ESLint passes with zero warnings/errors after unused-code cleanup. Compatibility underscore arguments and the inapplicable Pages font rule in the App Router root layout have documented scoped configuration. |

## Additional improvements

- Manual JSON study backup/restore includes vault snapshots, notes, attempts, SRS/FSRS and study stats, excluding credentials and identity. Import validates before mutation and rolls back failed writes. This is not automatic cross-device synchronization.
- Replaced Mammoth with bounded DOCX XML extraction through fflate. Browser extracted the four factual paragraphs from a disposable Gandhi DOCX fixture successfully.
- Generated flashcard distractors are distinct and ambiguous “Explain:” prompts are excluded from automatic MCQs.
- Added three original NCERT chapter PDFs to relevant topic resources. This is a targeted addition, not complete resource coverage.

## Verification

- 19 automated regression tests passed, including snapshot revision, timer recovery, streak/XP and backup validation.
- TypeScript check passed; ESLint passed with zero errors and warnings; git diff whitespace check passed.
- Final GitHub Pages static production export succeeded (380 generated pages).
- Browser tested saved generated-question drill, roadmap answer reset and day selection, Punjabi controls, focus-session reload recovery, coach completion and DOCX extraction.
- Production dependency audit: zero vulnerabilities. Five high development-toolchain advisory findings remain in the Next ESLint/fast-glob/micromatch/braces chain; no compatible patched upstream braces release was available. Do not interpret production audit clearance as clearance of the development chain.
- Evidence: fixed-revision-drill.png; live deployment screenshot is saved after deployment verification.

## Remaining work and blockers

| Audit IDs | Status |
|---|---|
| G01–G02 | Dynamic AI hosting/provider credentials, sender domain/custom SMTP and Google OAuth setup and real-service end-to-end verification remain pending. GitHub Pages does not execute the API backend. |
| G03–G05 | Complete reviewed syllabus lessons, adequate unique questions per topic, official exam patterns/PYQ provenance and topic-specific video/resource curation remain incomplete. Available counts are disclosed instead of inventing questions or coverage. |
| G06 | Manual backup/restore added; automatic cloud progress synchronization remains pending. |
| G07–G08 | Server-backed admin publishing/review and scanned-document OCR remain pending. |
| G09 | Production advisories resolved; five development advisories remain upstream as described above. |
| G10 | Physical device, screen-reader, clean offline install, full authentication and real cloud AI matrix remain pending. |
| G11 | Actual AdSense publisher/domain setup remains pending. |

The remaining items require separate implementation, reviewed academic content or account configuration. They are not represented as finished by this release.
