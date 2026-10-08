# Exam-by-exam coverage audit — 8 October 2026

All 31 tracks have partial preparation outlines. No track is certified as covering the complete current official syllabus. Shared-topic questions are counted once per exam pool, not as new authoring. Computed variants are separated from authored questions. A topic with 50 variants is not proof of conceptual coverage.

| Exam | Topics | Missing lessons | Authored questions | Generated variants | Distinct pool | Full sets of 50 | Topics below 50 | No PDF | No video |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Punjab Master Cadre | 21 | 0 | 161 | 209 | 370 | 7 | 20 | 6 | 21 |
| Punjab Clerk (PSSSB) | 4 | 0 | 8 | 150 | 158 | 3 | 3 | 2 | 4 |
| Punjab Patwari (PSSSB) | 2 | 0 | 19 | 0 | 19 | 0 | 2 | 1 | 2 |
| Punjab Police (Constable & SI) | 3 | 0 | 55 | 13 | 68 | 1 | 3 | 2 | 3 |
| Punjab ETT (Elementary Teacher) | 3 | 0 | 22 | 0 | 22 | 0 | 3 | 0 | 3 |
| PSTET (Punjab State Teacher Eligibility Test) | 1 | 0 | 20 | 0 | 20 | 0 | 1 | 0 | 1 |
| Punjab Lecturer Cadre (School Education) | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 1 |
| REET Level 1 (Primary Teachers) | 3 | 0 | 23 | 0 | 23 | 0 | 3 | 0 | 3 |
| REET Level 2 (Upper Primary) | 4 | 0 | 24 | 0 | 24 | 0 | 4 | 0 | 4 |
| Rajasthan Police Constable | 2 | 2 | 0 | 0 | 0 | 0 | 2 | 2 | 2 |
| Rajasthan 3rd Grade Teacher (Mains) | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 1 |
| Rajasthan Sub-Inspector (RPSC SI) | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 1 |
| Rajasthan Police Constable | 2 | 0 | 4 | 0 | 4 | 0 | 2 | 1 | 2 |
| HTET Level 1 (PRT) | 2 | 1 | 6 | 3 | 9 | 0 | 2 | 1 | 2 |
| HTET Level 2 (TGT) | 2 | 2 | 0 | 0 | 0 | 0 | 2 | 2 | 2 |
| HTET (Haryana Teacher Eligibility Test) | 3 | 2 | 20 | 0 | 20 | 0 | 3 | 2 | 3 |
| Haryana Police Constable | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 1 |
| Haryana CET Group C (Clerk & Patwari) | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 1 |
| Haryana PRT Primary Teacher (JBT / D.El.Ed Cadre) | 1 | 0 | 20 | 0 | 20 | 0 | 1 | 0 | 1 |
| Delhi Police Constable (Executive) | 2 | 2 | 0 | 0 | 0 | 0 | 2 | 2 | 2 |
| SSC GD Constable (CAPF - BSF, CISF, CRPF, ITBP, SSB) | 2 | 2 | 0 | 150 | 150 | 3 | 1 | 1 | 2 |
| CTET Paper 1 (Classes 1-5) | 5 | 4 | 20 | 150 | 170 | 3 | 4 | 4 | 4 |
| SSC CHSL (10+2 Level) | 4 | 0 | 48 | 150 | 198 | 3 | 3 | 2 | 4 |
| SSC CGL (Combined Graduate Level) | 6 | 0 | 50 | 158 | 208 | 4 | 4 | 1 | 6 |
| SSC MTS (Multi-Tasking Staff & Havaldar) | 2 | 0 | 16 | 150 | 166 | 3 | 1 | 0 | 2 |
| CTET Paper 2 (Upper Primary Classes 6-8) | 5 | 2 | 65 | 0 | 65 | 1 | 5 | 3 | 5 |
| UGC NET Paper 1 (Teaching & Research Aptitude) | 4 | 2 | 22 | 0 | 22 | 0 | 4 | 3 | 4 |
| UTET (Uttarakhand Teacher Eligibility Test) | 2 | 0 | 21 | 0 | 21 | 0 | 2 | 0 | 2 |
| Army Agniveer (General Duty) | 2 | 2 | 0 | 0 | 0 | 0 | 2 | 2 | 2 |
| Indian Army Agniveer General Duty (GD) | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 1 |
| Indian Army Agniveer Clerk / Store Keeper (SKT) | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 1 |

0 repeated authored prompt groups found; practice pools now deduplicate normalized wording. Full topic details and resource URLs are in src/lib/data/coverage-audit.json.

Totals: 28 missing lesson entries, 86 topic entries below 50 questions, and 11 tracks with no eligible questions. These are outline-entry counts, not unique missing topics.

## Fixes and validation

- Persisted chosen exam across study, mock hub, lesson practice and flipcards; explicit legacy aliases resolve to catalogue IDs. Drawer changes update selection rather than retaining an older exam.
- Mock/topic pools now intersect the selected exam outline. Unknown exams and exhausted fresh pools return no questions; no unrelated refill. Normalized question wording is deduplicated, including changed IDs or option order. Completed questions are excluded on fresh attempts; retakes remain explicit. Saved active attempts are checked against the current scope before reuse.
- Six Haryana GK/history questions incorrectly tagged as child pedagogy were moved to Haryana GK. These no longer enter ETT/CTET child-pedagogy practice. Subject and topic cards display actual available counts.
- Added expandable question-to-exam/subject/chapter/topic mappings. These are preparation-outline links, not proof of past-paper provenance or full syllabus completeness.
- CTET Paper 1 now lists its five subject areas using the official September 2026 bulletin: https://ctet.nic.in/document/ctet-sept-2026-information-bulletin/. Added 150 deterministic basic arithmetic variants, clearly separated from authored questions. Lessons, teaching-method questions and language selection remain incomplete.
- Removed generic SST bundles from unrelated lessons, 12 URLs confirmed as HTTP 404, and invalid seeded video IDs. Four additional unavailable videos and an unrelated music video were replaced by labelled publisher searches. Added a verified NCERT Class V fractions video for primary mathematics; embedding availability can vary. Publisher searches are separate from direct video links. Of 55 checked resource URLs, 28 responded successfully and 27 returned access/network errors or 404; reachability does not establish educational relevance.
- Automated tests validate all 31 outline filters, ETT aliases, disjoint successive sets, exhaustion and the Haryana misclassification regression. All 31 tests, ESLint, TypeScript and the 393-route static build passed. Browser checks confirmed saved ETT selection, strict 22-question ETT scope, exhaustion, and two consecutive SSC CGL sets of 50 with zero repeated question prompts (remaining count 208 → 158 → 108). Local guest attempts were disposable and deliberately unanswered.

## Completing the content bank

1. Split combined exams by post, paper, subject option and notification year. Several current catalogue tracks combine different recruitment patterns and some repeat a track under a different ID. Confirm each official syllabus and record source/date before claiming completeness.
2. For every official subtopic, write source-backed teaching notes, worked examples, misconceptions, recap and reviewed flashcards. Current lesson presence and word count do not prove depth.
3. Author and independently review at least 50 distinct questions per topic, with exact subtopic, source, answer rationale and eligibility mappings. Add more where paper weight requires it. Do not treat arithmetic substitutions as 150 independently authored concepts.
4. Import only verified past papers with answer keys and exact year/post/shift attribution. Historical year labels in the existing data remain unverified.
5. Curate a topic-relevant publisher PDF and checked video per topic. Confirm titles/playback and link externally where embedding is unavailable. Directory/search links are supplemental resources, not complete topic coverage.
6. Target 1,000 / 2,000 / 5,000 reviewed unique questions per exam through batches. The current bank cannot supply those targets. Use the finite fresh-set workflow until enough reviewed content exists; section-balanced full official mocks require a verified blueprint and adequate questions in each section.

The remaining content work is not complete. This report exposes shortages rather than claiming that finite existing data meets the requested targets.

## Release verification

Code commit `8a8796151d7b1a8eefbd42bc4f02cbfce3774733` deployed successfully to GitHub Pages (Actions run 37746953838) and Render. Both live coverage pages rendered the audited ETT count of 22. Render `/api/health/` returned HTTP 200 with `status: ok`. Live browser session remained authenticated. See `coverage-ett-live.png`.
