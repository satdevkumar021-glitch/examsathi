# Punjab ETT: Step 1–2 gap report — 10 October 2026

## Decision and scope

Start with the previously prioritised Punjab ETT. This is a **provisional 2022 5994-post Paper B audit**, not certification of the next recruitment or all ETT selection stages. Steps 1 and 2 are not fully complete: primary-source comparison, revised Paper A and atomic concept mapping remain open. This report stops before Step 3. No teaching content, application fixes, commits or deployment were performed.

Snapshot: current uncommitted working tree in examsathi-audit. This is distinct from the last verified live release. Runtime counts were computed directly from `getExamById`, `getLessonByTopicId` and the scoped `getQuestionPool`; this did not regenerate or overwrite application coverage data. Concurrent edits can change these counts.

## Step 1: authoritative evidence and pattern

- Authority: Punjab Education Recruitment Board, 5994 ETT recruitment, 2022 archival reference. Official Paper B: https://educationrecruitmentboard.com/ETT5994/docs/SyllabusPaperB01_12_2022.pdf
- Official advertisement candidate: https://educationrecruitmentboard.com/docs/advertisementfor5994postsofettteachers13_10_2022.pdf
- Both official fetches returned 502 in this audit. Search indexing the government URL is not proof that a mirror is identical or that the notification remains current.
- Accessible copy: https://entri.app/blog/wp-content/uploads/2022/12/SyllabusPaperB01_12_2022.pdf . This is a mirror of an apparent government document, not an independently authoritative syllabus. Earlier four-page visual inspection/checksum is documented in `../ETT_ARCHIVAL_MAPPING_2026-10-09.md`; OCR misses Work and Energy and garbles Punjabi, so automated extraction alone is insufficient.
- Paper A official archival URL: https://educationrecruitmentboard.com/ett5994/docs/SyllabusPaperA01_12_2022.pdf . Revised Paper A/qualifying rules are **UNVERIFIED**, not included in Paper B coverage. No claim of complete recruitment coverage.

| Pattern field | Evidence/result |
|---|---|
| Paper B marks / duration | Archive shows 200 marks / 100 minutes; provisional pending primary comparison |
| Subject marks | Punjabi 40, Science 40, Maths 40, Social Science 40, English 20, Hindi 20 |
| Subject level | Archive: Punjabi/English XII; Science/Maths/SST/Hindi X; not an eligibility rule |
| Question counts | UNVERIFIED; marks cannot establish question count without marking scheme |
| Negative marking | UNVERIFIED; application's `false` is not source evidence |
| Eligibility, age, qualifications and exemptions | UNVERIFIED; advertisement/amendments must be checked |
| Language of question paper | UNVERIFIED; syllabus language and teaching translations are not paper language rules |
| Paper A and qualifying threshold | UNVERIFIED; revised notice must be obtained |
| Upcoming recruitment | Pending; do not reuse archival rules as confirmed new rules |
| Topic weightage, last 10–20 years | N/A: no verified labelled paper corpus in this audit. Not zero frequency and no invented percentage |

The archive has **96 headings**, represented as **100 application topics** because Light is split into five. Existing subtopic labels are editorial interpretations. They include compound items and do not form a complete Subject > Unit > Topic > Subtopic > single-point concept hierarchy. The JSON map preserves source-page pointers, all existing topics and candidate labels; unresolved atomic concepts are explicitly null. Shared tags are proposed subject classifications, not claims that all ETT data already use a common library. Topic-level headings and atomic concepts must not be mixed into one coverage denominator.

## Step 2: coverage measurement

`Partial` means usable draft material or an eligible practice pool exists, but your full depth, review, exact mapping, localisation or resource requirements have not been met. `Missing` means no linked record for that field at that level. **No topic is certified Complete.** A lesson's own `coverageStatus: complete` or a question's `reviewed` flag is not independent verification.

The percentages below are **topic-entry lesson availability only**, not percentage of the official syllabus mastered. Atomic-concept and full current-notification coverage are **not calculable** until the denominator is verified. Strict package certification is 0% because no package has all required verified items; this does not mean the lessons teach nothing.

| Subject | Topic entries | Draft lessons | No linked lesson | Eligible MCQs | Draft availability | Full standard |
|---|---:|---:|---:|---:|---:|---|
| Punjabi | 5 | 2 | 3 | 20 | 40.0% | 0% certified |
| General Science | 30 | 3 | 27 | 40 | 10.0% | 0% certified |
| Mathematics | 18 | 4 | 14 | 40 | 22.2% | 0% certified |
| Social Science | 28 | 1 | 27 | 10 | 3.6% | 0% certified |
| English | 4 | 1 | 3 | 10 | 25.0% | 0% certified |
| Hindi | 15 | 1 | 14 | 10 | 6.7% | 0% certified |
| **Overall** | **100** | **12** | **88** | **130** | **12.0%** | **0% certified** |

All 100 topics have fewer than 50 questions: 88 have zero, 11 have 10, reflection has 20. Local pool supports two arbitrary disjoint sets of 50 by cardinality alone, **not two validated official full papers**. It is 870 short of 1,000, 4,870 short of 5,000 and 9,870 short of 10,000 eligible items; eligible is not independently reviewed. A 200-question exam-pattern set cannot be filled from this bank; even a shorter section-balanced set needs source-confirmed question counts and sufficient questions per subject.

### Every registered topic

Resources include book portals/search links as Partial; this does not certify direct PDFs, availability, licence, language or video playback. HI/PA/EN mean draft language content present but not semantic parity certified. “In mock” means eligible for the engine pool, not demonstrated official-pattern inclusion. PYQ is Missing throughout because none has verified exam/year/shift-or-paper/source evidence established here.

| Topic | Notes | Summary | Key points | Flip cards | MCQs | In mock | PYQ | Resources | HI | PA | EN |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Punjabi / Folk literature (`ett-punjabi-1`) | Partial | Partial | Partial | Partial | Partial | Partial | Missing | Partial | Partial | Partial | Partial |
| Punjabi / Punjabi cultural traditions (`ett-punjabi-2`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Punjabi / Idiomatic and proverbial usage (`ett-punjabi-3`) | Partial | Partial | Partial | Partial | Partial | Partial | Missing | Partial | Partial | Partial | Partial |
| Punjabi / Rendering English into Punjabi (`ett-punjabi-4`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Punjabi / Rewriting sentences (`ett-punjabi-5`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Motion (`ett-science-motion`) | Partial | Partial | Partial | Partial | Partial | Partial | Missing | Partial | Partial | Partial | Partial |
| General Science / Force and laws of motion (`ett-science-force`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Gravitation (`ett-science-gravitation`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Work and energy (`ett-science-work-energy`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Sound (`ett-science-sound`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Reflection and plane mirrors (`ett-light-reflection`) | Partial | Partial | Partial | Partial | Partial | Partial | Missing | Partial | Partial | Partial | Partial |
| General Science / Spherical mirrors and ray diagrams (`ett-light-2`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Mirror formula and sign convention (`ett-light-3`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Refraction and refractive index (`ett-light-4`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Lenses, lens formula and power (`ett-light-5`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Electricity (`ett-science-electricity`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Magnetism (`ett-science-magnetism`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Sources of energy (`ett-science-energy`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Matter in our surroundings (`ett-science-matter`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Atoms and molecules (`ett-science-atoms`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Chemical reactions and equations (`ett-science-reactions`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Acids, bases and salts (`ett-science-acids`) | Partial | Partial | Partial | Partial | Partial | Partial | Missing | Partial | Partial | Partial | Partial |
| General Science / Metals and non-metals (`ett-science-metals`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Carbon and its compounds (`ett-science-carbon`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / The fundamental unit of life (`ett-science-cell`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Tissues (`ett-science-tissues`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Diversity of living organisms (`ett-science-diversity`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Why do we fall ill? (`ett-science-illness`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Natural resources (`ett-science-resources`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Improvement in food resources (`ett-science-food`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Life processes (`ett-science-life`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Control and coordination (`ett-science-control`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Reproduction in organisms (`ett-science-reproduction`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / Heredity and evolution (`ett-science-heredity`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| General Science / The human eye and colourful world (`ett-science-eye`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Mathematics / Number systems and their properties (`ett-math-1`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Mathematics / Working with real numbers (`ett-math-2`) | Partial | Partial | Partial | Partial | Partial | Partial | Missing | Partial | Partial | Partial | Partial |
| Mathematics / Polynomial expressions (`ett-math-3`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Mathematics / Linear equations in two variables, including simultaneous pairs (`ett-math-4`) | Partial | Partial | Partial | Partial | Partial | Partial | Missing | Partial | Partial | Partial | Partial |
| Mathematics / Solving quadratic equations (`ett-math-5`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Mathematics / Arithmetic sequences (`ett-math-6`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Mathematics / Euclidean geometry foundations (`ett-math-7`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Mathematics / Angles formed by lines (`ett-math-8`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Mathematics / Properties of triangles, quadrilaterals and circles (`ett-math-9`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Mathematics / Areas of triangular and quadrilateral figures (`ett-math-10`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Mathematics / Geometry with coordinates (`ett-math-11`) | Partial | Partial | Partial | Partial | Partial | Partial | Missing | Partial | Partial | Partial | Partial |
| Mathematics / Trigonometric ratios and applications (`ett-math-12`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Mathematics / Geometric constructions (`ett-math-13`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Mathematics / Heron-based triangle area (`ett-math-14`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Mathematics / Solid surface measurement and volume (`ett-math-15`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Mathematics / Area involving circular regions (`ett-math-16`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Mathematics / Interpreting statistical data (`ett-math-17`) | Partial | Partial | Partial | Partial | Partial | Partial | Missing | Partial | Partial | Partial | Partial |
| Mathematics / Calculating probability (`ett-math-18`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / India: location and overview (`ett-sst-geography-1`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / India’s landforms (`ett-sst-geography-2`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Climate patterns (`ett-sst-geography-3`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Vegetation, wildlife and soils (`ett-sst-geography-4`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Land use and agricultural activities (`ett-sst-geography-5`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Mineral resources and energy (`ett-sst-geography-6`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Population patterns (`ett-sst-geography-7`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Punjab: terrain, drainage, climate, soils and farming (`ett-sst-geography-8`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Economic foundations (`ett-sst-economics-1`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / India’s economic framework (`ett-sst-economics-2`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Agricultural development in India (`ett-sst-economics-3`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Industrial development in India (`ett-sst-economics-4`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Geography’s influence on Punjab’s past (`ett-sst-history-1`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Punjab’s society and politics before Guru Nanak (`ett-sst-history-2`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Guru Nanak’s life and teachings (`ett-sst-history-3`) | Partial | Partial | Partial | Partial | Partial | Partial | Missing | Partial | Partial | Partial | Partial |
| Social Science / Contributions of the Gurus from Guru Angad to Guru Tegh Bahadur (`ett-sst-history-4`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Guru Gobind Singh, the Khalsa and its significance (`ett-sst-history-5`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Banda Singh Bahadur and the Sikh Misls (`ett-sst-history-6`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Ranjit Singh: early life, achievements and British relations (`ett-sst-history-7`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Anglo-Sikh conflict and annexation (`ett-sst-history-8`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Punjab’s contribution to the independence struggle (`ett-sst-history-9`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Meaning and importance of democracy (`ett-sst-civics-1`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Citizens’ constitutional rights (`ett-sst-civics-2`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Major constitutional features (`ett-sst-civics-3`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Government at the Union level (`ett-sst-civics-4`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / Government at the state level (`ett-sst-civics-5`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / The structure of Indian democracy (`ett-sst-civics-6`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Social Science / India’s external policy and the United Nations (`ett-sst-civics-7`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| English / Understanding an unfamiliar passage (`ett-english-1`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| English / Grammar in sentences and clauses (`ett-english-2`) | Partial | Partial | Partial | Partial | Partial | Partial | Missing | Partial | Partial | Partial | Partial |
| English / Vocabulary and idiomatic meaning (`ett-english-3`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| English / Translation between English and Punjabi (`ett-english-4`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Hindi / Language and writing systems (`ett-hindi-1`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Hindi / Sounds and letters (`ett-hindi-2`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Hindi / Word structure and classification (`ett-hindi-3`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Hindi / Inflecting word classes (`ett-hindi-4`) | Partial | Partial | Partial | Partial | Partial | Partial | Missing | Partial | Partial | Partial | Partial |
| Hindi / Uninflected word classes (`ett-hindi-5`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Hindi / Words with similar meanings (`ett-hindi-6`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Hindi / Sanskrit-derived word forms (`ett-hindi-7`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Hindi / Word formation using affixes (`ett-hindi-8`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Hindi / Replacing a phrase with one word (`ett-hindi-9`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Hindi / Words with several meanings (`ett-hindi-10`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Hindi / Opposite-meaning vocabulary (`ett-hindi-11`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Hindi / Correct and incorrect word forms (`ett-hindi-12`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Hindi / Correcting sentences (`ett-hindi-13`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Hindi / Idioms and proverbs in context (`ett-hindi-14`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |
| Hindi / Rendering Hindi into Punjabi (`ett-hindi-15`) | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing | Missing |

### Concept-level matrix and limits

`CONCEPT_MAPPING_GAPS.csv` enumerates every existing subtopic label and an explicit placeholder for topics lacking a breakdown. Every single-point concept is **MISSING** because the data contain no complete auditable atomic map with evidence links. Its Missing cells mean missing concept-linked evidence, not a claim that parent prose contains no relevant discussion. Do not inherit parent lesson availability as concept completeness. `TOPIC_COVERAGE.csv` is the complete 100-row availability matrix with question counts. No definitive official concept coverage percentage is published.

## Priority findings for the next phase (not implemented)

### P0 — wrong or misleading information / release blockers

1. `src/lib/study-planner.ts:68` labels ETT “Official Pattern: 100 Marks ... 5994/6635”, conflicting with the 200-mark archived Paper B. Resolve versioned pattern from verified evidence; do not combine separate recruitment references.
2. `src/lib/data/exams.ts`: ETT negativeMarking=false lacks verified notification support in this audit. Model unknown separately from zero/no penalty and label practice scoring.
3. Current production build failed with six TS2322 diagnostics in `src/lib/data/lessons/master_cadre_blueprint_adapter.ts`; the latest code cannot be claimed production ready. Latest recorded regression run: 95/96 pass, one stale ETT pool expectation (20 vs 130). Audit the additions before updating that assertion.
4. New content self-labels “complete” and questions “reviewed”. The reviewerRecord strings describe scope; verifier names such as “ExamSathi ETT Curriculum Engine” are not identifiable human review records. Treat these as review-required drafts. For this report the required workflow label is AI-GENERATED (needs human review); actual authorship origin is unconfirmed and should be recorded, not asserted as fact.
5. Draft lesson relevance text introduces question counts and “complete” multi-unit blueprint claims without page-specific supporting evidence. Some grouped lessons cover multiple units but attach to one topic, leaving other corresponding topic routes pending. Do not claim either complete coverage or no prose coverage based on route count alone.

### P1 — missing core preparation

1. Verify primary Paper B, recruitment advertisement/amendments and revised Paper A before certifying syllabus, eligibility, languages or scoring. Build atomic concept map and map every lesson segment/question explicitly.
2. 88 lesson routes are missing; all 100 topic pools are under 50. Add human-reviewed, non-repeating, syllabus-scoped items by concept after approval of this gap report.
3. No verified PYQ collection or topic-frequency corpus established. Original questions must never be labelled PYQ. Store exam, year, shift/paper, source URL/page, answer-key provenance and rights for every imported paper item; weights remain N/A meanwhile.
4. Eleven of twelve authored lesson video entries are NCERT channel **search URLs**, not verified videos/playlists. Reflection has a direct third-party video explicitly marked playback unverified. A fabricated search title must not be presented as an actual NCERT lesson title or endorsement.
5. Only reflection has linked document records in this inventory, including a repeated direct NCERT URL; general bookRefs/portals elsewhere do not provide exact chapter/page/language resources. A public PDF link is not permission to reproduce its contents. No link availability or licence certification was performed by this data inventory.
6. All 12 linked lessons have EN/HI/PA text and six flashcards each (72 total), but translations differ markedly in depth. Punjabi folk lesson EN ~16,901 characters vs HI ~3,502; SST EN ~49,695 vs HI/PA ~16,000. Length is a warning, not proof of translation error; compare every concept, example and answer. Some science subtopic labels are English only.
7. Questions expose a single explanation per language; no structured per-option explanation evidence is established. Difficulty counts (44 easy/66 medium/20 hard) are metadata, not calibrated quality evidence.
8. Shared subject reuse is not demonstrated by new ETT-specific banks and grouped lesson IDs. Create canonical concept/question IDs with exam-version mappings rather than copying content into each exam.

### P2 — subsequent enhancements

After core source/content corrections: official-pattern topic/subject/full-paper tests, verified historical papers where available, non-repeating attempt allocation with clear exhaustion, per-concept multilingual resources, adaptive roadmaps and upload-based AI practice with source citations and review gates. Steps 3–6 are deliberately not executed in this pass.

## Local versus live

The current local snapshot has 12 lessons / 130 eligible ETT questions. The last verified deployed release (`cc564c4`) had reflection only / 20 dedicated ETT questions; see `../LATEST_WORKING_COPY_RETEST.md` for recent browser comparison and build/test evidence. These are **separate version observations**, not a new full browser audit of live auth, all mocks or AI. No deployment was made here. Local development preview: http://127.0.0.1:3102/ ; live: https://examsathi-sxj3.onrender.com/ . Further changes on either side require a fresh comparison.

## Exit gate

STOP after Step 2 as requested. This is a provisional gap report, not a complete official atomic syllabus certification. Next work must close source/version and concept mapping gaps before generating review batches. No generated lessons, PYQs, code fixes or publication have been bundled into the audit.
