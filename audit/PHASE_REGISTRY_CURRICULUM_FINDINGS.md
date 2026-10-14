# Registry and curriculum findings for master-prompt sections 1–7, 11 and 12

Date: 2026-10-11. Environment: local source working tree at `/Users/satdevkumar/Desktop/exam-saathi/examsathi-audit`; Git HEAD `063e043d6515910051a668e875bcfe582bd654e0` plus uncommitted changes. This is a source/data audit, not a live deployment or human curriculum review. No external source was newly fetched or certified. Section numbers below refer to `docs/EXAMSATHI_MASTER_AI_PROMPT.md`.

## Method and current counts

Executed the loader from `audit/scripts/analyze.mjs` against current TypeScript modules, with additional in-memory aggregates for metadata, translations and resources. Its result was held in `/tmp/registry-current.json`; no tracked snapshot was overwritten. The unchanged standard loader can be rerun with `node audit/scripts/analyze.mjs > /tmp/examsathi-current-snapshot.json`.

| Measure | Current result | Interpretation |
|---|---:|---|
| Exported catalogue entries / distinct IDs | 37 / 37 | No duplicate IDs in `ALL_EXAMS` |
| Static `ALL_QUESTIONS` rows / engine identities | 2,283 / 2,270 | 13 extra rows by the engine's current identity rules; not a full semantic audit |
| Question review statuses | 573 reviewed; 50 draft; 1,660 absent | These are stored labels, not independently validated reviewer decisions |
| Question origin statuses | 870 authored-original; 50 computed-variant; 14 pyq-style; 9 verified-pyq; 1,340 absent | “Static” does not mean authored or verified |
| Questions missing concept group / learning objective | 2,224 / 2,224 | Objective-level eligibility cannot yet be enforced for most rows |
| Punjabi / Hindi prompts exactly equal to English | 641 / 641 | A translation audit queue, not automatic proof each is wrong; target-language examples may intentionally match |
| Questions missing Punjabi prompt | 0 | Field presence alone does not establish translation quality |
| Exported lesson entries | 167 | Includes reused/aliased and foundation material; not 167 complete official topics |
| Lesson editorial status | 8 reviewed; 101 authored; 58 absent | Review evidence is not established by these labels |
| Lesson entries with sections / prerequisites / objectives | 28 / 31 / 31 | Counts measure field presence only |
| Lessons with worked examples / misconceptions / quick revision | 63 / 63 / 63 | Does not measure level, correctness or translation parity |
| Lessons with editorial record / source array | 52 / 64 | Other source mechanisms may exist; missing metadata still needs reconciliation |
| Resource-table rows / document-map topics / video-map topics | 10 / 28 / 1 | Distinct inventories; do not sum as unique resources |
| Coarse engine topic leakage / orphan static rows | 0 / 0 | Passes the current alias-based boundary only; does not prove level, version or objective fit |

Priority catalogue mappings computed now:

| Exam ID | Registered topics | Pending | No static question match | No lesson | Pool / static-like pool* |
|---|---:|---:|---:|---:|---:|
| punjab-ett | 100 | 88 | 88 | 88 | 167 / 167 |
| punjab-clerk | 43 | 0 | 0 | 0 | 2,599 / 1,296 |
| punjab-master-cadre-sst | 37 | 0 | 0 | 0 | 850 / 755 |
| punjab-master-cadre-science | 18 | 0 | 0 | 0 | 471 / 395 |
| punjab-master-cadre-math | 2 | 0 | 0 | 0 | 224 / 74 |
| punjab-master-cadre-punjabi | 2 | 0 | 0 | 0 | 73 / 73 |
| punjab-master-cadre-hindi | 3 | 0 | 0 | 0 | 126 / 124 |
| punjab-master-cadre-english | 2 | 0 | 0 | 0 | 148 / 148 |
| reet-level1 | 5 | 0 | 1 | 0 | 353 / 191 |
| reet-level2-sst | 8 | 0 | 0 | 0 | 522 / 478 |
| reet-level2-science-math | 7 | 0 | 0 | 0 | 467 / 299 |

*The existing loader calls this `poolAuthored` but implements an ID-prefix exclusion for `gen-`, `quant-`, `reason-`, `land-`. It is not a review/origin-based authored count. It includes reused questions and is not an official syllabus denominator. In particular, larger Clerk pool counts include computed practice and shared topics, while its fixed 200-question pack is a different product.

## Catalogue identities and version gaps

Current exported IDs, grouped by catalogue state:

- Punjab: `punjab-master-cadre-sst`, `punjab-master-cadre-science`, `punjab-master-cadre-math`, `punjab-master-cadre-punjabi`, `punjab-master-cadre-hindi`, `punjab-master-cadre-english`, `punjab-clerk`, `punjab-patwari`, `punjab-police`, `punjab-ett`, `punjab-pstet`, `punjab-lecturer-cadre`.
- Rajasthan: `reet-level1`, `reet-level2-sst`, `reet-level2-science-math`, `rajasthan-police`, `rajasthan-3rd-grade`, `rajasthan-police-si`, `rajasthan-police-constable`.
- Haryana: `htet-l1`, `htet-l2`, `haryana-htet`, `haryana-police-constable`, `haryana-cet-clerk`, `haryana-ett-prt`.
- Delhi: `delhi-police-constable`.
- Central: `central-capf-gd`, `ctet-paper1`, `ssc-chsl`, `ssc-cgl`, `ssc-mts`, `ctet-paper2`, `ugc-net`, `utet-teaching`.
- Defence: `army-agniveer`, `army-agniveer-gd`, `army-agniveer-clerk`.

`exams.ts` still contains two source definitions with `id: 'ugc-net'`, but `UGC_NET_EXAM` is explicitly unused (`void UGC_NET_EXAM`). Do not repeat the old claim that the current export has duplicate UGC NET topics without a fresh topic-level check. Generic/specific families (`rajasthan-police`/constable, `haryana-htet`/levels, `army-agniveer`/GD/clerk) remain separate IDs. They are candidates for scope clarification, not safe automatic merges: stage and post differences can be legitimate.

`Exam` has no required notification, recruitment year, syllabus version ID, paper/stage ID, subject-choice rule, provenance record ID, checksum, amendment/supersession relationship or verification status beyond optional `provisional-archive`. `Question` has optional free-form `examId`, not a required list of exam-version/objective mappings. `getQuestionPool` accepts exam/topic, difficulty, PYQ switches and exclusions; it has no version/paper/language/review eligibility input. Most scope is therefore topic aliases, not the versioned curriculum graph required by the prompt.

## Phase-by-phase comparison

| Section | Implemented evidence | Remaining gap / safest next step |
|---|---|---|
| 1 Purpose and learners | ETT, Clerk, six separately named Master Cadre tracks and three REET tracks exist; lesson/question models carry EN/HI/PA | Verify separate recruitment tracks and depth before describing readiness. Give each step a version context and an honest readiness indicator; do not equate field presence with usable editions |
| 2 Inspect and preserve | Existing audit scripts, registers, verification artefacts, Git history and test files | Reports mix baselines and old counts. Tie generated artefacts to HEAD, working-tree fingerprint, generation time and method; keep live vs local evidence separate |
| 3 Provenance and atomic mapping | Official source CSV, SST source manifest, ETT evidence map, atomic JSON, optional topic source pages, archival labels | Only four exam IDs occur in the atomic map. No universal version graph or verified denominator. Add schema and evidence references first; retain unknowns rather than inventing headings |
| 4 Complete topic package | Lesson schema supports prerequisites, objectives, examples, misconceptions, revision sheets, cards and sources; 167 exported entries | These are optional and sparsely populated; translation parity and editorial audit need distinct statuses. Complete and review one verified objective package before scaling |
| 5 Questions | Stable IDs, options, correct key, reasoning, optional origin/PYQ/rights/concept metadata; normalized and confirmed-equivalence identity logic | Most rows lack objective/concept metadata; review status is not a publication gate; year-only PYQ selection persists. Separate source-supported PYQs from practice and computed variants |
| 6 Mocks | Engine scopes to registered topic IDs, returns finite pools and accepts exposure exclusions; Clerk has deterministic four disjoint numbered sets of 50 | No version, objective, language or review eligibility gate in general engine; section/choice rules absent from its config. Distinguish fixed revision packs, custom practice and official simulations; independently test quota/exhaustion and historical snapshot behavior |
| 7 Resources | Document/video maps and a 10-row resource table; URL/publisher/language/locator/access/checked fields available; rejected links filtered in lesson assembly | Verification labels lack per-check evidence and embedding outcomes; no exam-version resource mapping or exact video timestamp field. Audit actual content and rights, then expose honest supplementary/unavailable statuses |
| 11 Deep testing | Existing core, batch and e2e test suites; executable static data loader | This sub-audit ran loader/metadata checks only. Browser exam-isolation paths, credentials/user isolation, persistence failures, accessibility, live content and resource playback remain untested here |
| 12 Evidence/release | Evidence registers, backlog and deployment reports exist | Some reports assert obsolete defects/statuses. Require source/retest date, environment, commit and acceptance criterion per finding; do not mark a platform phase complete from a source audit or successful build |

## Source claims versus recorded evidence

1. **SST:** atomic map references the government-hosted 2022 PDF with SHA-256 and the recorded TLS transport caveat. Its 25 headings and 260 concept candidates cover the history audit scope; the map explicitly says Geography/Economics/Civics are not yet decomposed there. `official-provenance.ts` sets the whole SST record `verified-official` while the same record notes its 50-mark Punjabi Paper A is not established for 2022 and comes from later reported rules. Split verified syllabus headings from provisional pattern fields and exact cycles. `recruitmentYear: '2022 / Ongoing Cycles'` is not a stable version key.
2. **ETT:** the map has 100 headings and 221 concept candidates. It records official-host failure, inspected mirror hash and no established primary equality. Current ETT catalogue correctly uses `provisional-archive`; 88 topics remain explicitly pending. Preserve this caveat and distinguish Paper A from archival Paper B. Do not count candidate concepts as authored/reviewed teaching material.
3. **Clerk:** atomic map currently has 38 headings, while the live source loader finds 43 topics after the additional practice subject. Its baseline is the unverified mirror for Advt 11/2025; Advt 02/2026 remains a draft claim without an artefact in this map. The five extra practice topics must not silently enlarge the official syllabus denominator. Regenerate display inventories separately from the official mapping and mark editorial additions.
4. **Science and other Master Cadre tracks:** current provenance now marks Science/Math/Punjabi/Hindi/English `unresolved-verification`, correcting older register prose claiming they are all verified. Science atomic map has 18 app headings and zero concept decompositions, with `CLAIMED_NOT_VERIFIED`. Source verification and subject-choice research remain open; source existence alone cannot validate the app's higher-depth outline.
5. **REET:** current provenance has three `verified-official` records pointing to the exact REET-2024 PDF and page 6 with 5-OMR-option/blank-answer notes. Older audit prose saying these records only reference the homepage is obsolete. The interface still has no checksum/page-reference fields or machine-readable blank/disqualification policy. Existing evidence should be reconciled before relying on record-level verification for every rule. This audit did not independently fetch the PDF.
6. **Section totals:** fresh loader finds nine `totalMarks != sum(sections.marks)` records: six Master Cadre tracks, Clerk, Patwari and Lecturer. Qualifying sections and merit totals share one array. Treat this as a confirmed model inconsistency; whether it is displayed or affects current scoring requires route retest. Model separate qualifying/merit papers instead of summing them blindly.

## Confirmed high-priority foundational findings

| ID / priority | Evidence and reproduction | Learner impact / expected behavior | Safe fix and acceptance criterion | Status |
|---|---|---|---|---|
| REG-01 / P1 | Inspect `getQuestionPool`: only topic/exam/year/difficulty/exclusion filtering; no `reviewStatus` eligibility filter | Draft/unreviewed material can enter a general public pool; reviewed simulation must use reviewed, supported questions | Centralize eligibility policy with an explicit labelled unreviewed-practice mode. Fixtures prove draft excluded from reviewed mode and scarce pools return honest insufficiency | Confirmed source defect; implementation/retest pending |
| REG-02 / P1 | PYQ branch in same function selects any year-labelled non-`gen-` row in 2004–2024/2014–2024 | Year-labelled practice can be represented as PYQ, while newer years are silently unavailable | Require valid origin and paper/question/key source evidence; inventory years actually verified; preserve practice elsewhere. Tests reject year-only records | Confirmed source defect; implementation/retest pending |
| REG-03 / P1 | SST provenance has verified-official plus explicitly unestablished Paper A in the same record | One verification badge can imply unsupported current rules | Per-field source/status and immutable notification version; verified archival headings cannot certify current Paper A | Confirmed data inconsistency; UI impact untested |
| REG-04 / P2 | `Exam`/engine configuration lack version/paper/objective mapping; 2,224 static rows lack objectives | Topic-level success cannot establish official coverage or exact paper fit | Add backward-compatible version registry and explicit mappings; unresolved rows excluded from official-pattern certification. No speculative mass remapping | Confirmed model gap |
| REG-05 / P2 | 641 HI and PA prompts equal EN; only 31 lessons have objectives and 52 editorial records | Missing editions/depth may appear usable without assessment | Queue exact-equality cases for content-aware translation review; expose edition availability and package readiness separately | Confirmed audit indicators; individual translation defects require review |
| REG-06 / P2 | `punjabiVyakaranPseb` title says grammar while URL filename says `Samajik Sikhya-10(Punjabi) Bhag-I`; typing resource cites homepage while asserting exact rules | A publisher-hosted URL can lead to an unrelated topic or imply unsupported exam rules | Mark these pending topic/rule verification; retain evidence of actual chapter/pages and notification before verified display | Confirmed source metadata mismatch/insufficient locator; remote content not retested |
| REG-07 / P2 | `TOPIC_VIDEOS` stores source language as “Source language varies”; verification comment has no playback evidence | Learner cannot assess edition fit or successful embedded playback | Separate content-fit, language and embed checks; external watch fallback with availability/date and evidence | Confirmed metadata gap; playback untested |
| REG-08 / P2 | Atomic Clerk map 38 vs current 43; reports retain obsolete verified-status, lesson and coverage claims | Operators may prioritize wrong gaps or repeat resolved bugs | Reconcile generated artefacts against one fingerprint; keep authoritative headings separate from editorial practice subjects | Confirmed stale artefact |

Additional review caution: `generateProceduralQuestions` assigns `reviewStatus: 'reviewed'` automatically to derived flashcard questions. Generated provenance is correctly labelled computed practice, but generated status should not manufacture a review decision. `clerk-revision-sets.ts` honestly labels new material as AI-generated with review pending in `examTag`, yet its adapter omits structured `reviewStatus` and does not carry the input source/review fields into the `Question`. Preserve the visible practice availability the user authorized while introducing distinct structured authoring, automated validation and independent review fields; do not silently reinterpret original AI content as reviewed.

## Small implementation batches and acceptance

1. Add non-destructive registry validation and current-source reporting: unique exported IDs, qualified duplicate-definition checks, unresolved version fields, separate merit/qualifying totals, source-status contradictions, stale fingerprint detection. Acceptance: output names exact rows and preserves all existing content; no automatic catalogue merge.
2. Add a minimal immutable exam-version/source schema linked to existing evidence files. Start with archival SST and ETT, keeping transport/mirror caveats and all unknown values. Acceptance: every verified claim resolves to document/hash/page/status; no “ongoing cycles” reuse as a verified current notification.
3. Add question publication/eligibility policy and truthful PYQ classification. Acceptance: reviewed pools reject missing/draft status and invalid PYQ provenance; clearly labelled unreviewed original practice remains accessible by explicit practice policy; tiny banks show a smaller set rather than unrelated fallback.
4. Reconcile atomic/current coverage and translation queues. Acceptance: official denominator never grows when a revision-pack topic is added; shared lessons/questions counted once as authored assets and separately as mappings; readiness metrics report independent lesson/edition/question/card/resource statuses.
5. Audit one priority topic package and its resource content/rights; test exam-isolation and failure cases on that package. Acceptance: source-supported objectives, full trilingual reasoning, explicit editorial evidence and working topic-relevant resources; no bulk-generated count targets substituted for review.

No production files were edited for this report. No browser, live deployment, external PDF, resource playback, human reviewer, authentication or database-policy test is claimed. The current checkpoint is a reviewable foundational backlog, not completion of phases 1–7/11/12.
