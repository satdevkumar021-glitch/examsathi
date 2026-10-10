# ETT archival mapping: visual verification and strict exam scope

This batch maps the existing 5994-post Paper B archive. It does not certify the upcoming notification, which the user says is still to come. The government publisher remains unreachable; provenance is provisional until the primary copy can be compared.

## Source and method

Four scanned pages of the accessible third-party PDF were rendered with Poppler and visually inspected. The file's extracted text omitted **Work and Energy**, so the former 25-unit science count was corrected to 26. The document itself does not show the filename's date on its scanned heading; the app calls 1 December 2022 an archival filename date.

Publisher: https://educationrecruitmentboard.com/ETT5994/
Mirror: https://entri.app/blog/wp-content/uploads/2022/12/SyllabusPaperB01_12_2022.pdf
SHA-256: `f88a56067d11e63db9acdec68d027fba21f6aa8b6b47478fff9e80beafd29bcd`

| Subject / branch | Archival headings | PDF pages |
|---|---:|---|
| Punjabi | 5 | 1 |
| Science | 26 | 1–2 |
| Mathematics | 18 | 2 |
| SST: Geography | 8 | 2 |
| SST: Economics | 4 | 2–3 |
| SST: Punjab history | 9 | 3 |
| SST: Civics | 7 | 3 |
| English | 4 major headings | 3 |
| Hindi | 15 | 3–4 |
| **Total** | **96** | **1–4** |

The scanned level notes are Punjabi/English through class XII and Science/Mathematics/SST/Hindi through class X. These are archival notes, not new eligibility or recruitment rules. Paper A is separate and its revised notice is still unverified.

## Changes

- Added all 70 remaining headings with English/Hindi/Punjabi labels and page links. Added specific proposed study breakdowns for mathematics, Punjabi, English and selected Hindi grammar units; these are clearly distinguished from the archive's requirements.
- Replaced the generic ETT catalogue with six reference subjects and correct archival marks (200 total) and duration (100 minutes). Question counts and individual-topic weights are not invented.
- ETT practice now intersects this map. Generic TET pedagogy and qualifying Punjabi Paper A questions no longer enter a Paper B mock. Existing questions remain available in their other mapped tracks.
- The science Light unit is divided into five teaching topics, producing **100 catalogue entries** from 96 archival headings. Only reflection/plane mirrors currently has an authored lesson and 20 dedicated original questions. **99 entries remain pending**. This is an honest expansion of the known backlog, not a claim of lesson completion.
- Preserved the old ETT core study URL as a guide to the reorganised map.
- Unknown exam/subject study routes no longer fall back to the first Punjab exam. Lesson links retain the selected exam. Pending cards expose coverage status rather than implying notes/videos/tests already exist.
- Audit reports are dated per run; the 8 October historical report is preserved. The 9 October current audit records 99 missing lessons and 136 topic entries below 50 across the catalogue. No exam reaches the reviewed 1,000-question target.

## Validation

43 tests verify subject counts, scanned-unit retention, unique IDs, multilingual labels, page anchors, no unrelated ETT fallback, pending lesson/question states, finite sets and numeric answers. Lint, TypeScript and a 602-page production static export pass. Production preview verifies the Punjabi mathematics accordion, page 2 link, localized linear-equation breakdown, six-subject study selector and zero-question pending cards.

## Next content work

The source map is available as a provisional archive. Its **lessons and question banks are not complete**. Next work is to finish one defined subtopic at a time with actual explanations, notes, examples, three-language editions, original syllabus-relevant questions and recorded review. Primary-source comparison and revised Paper A mapping remain separate unresolved work. Do not fill unfinished topics with random shared-bank questions or describe numeric variants as distinct concept coverage.

## Release verification

Code commit `cc564c48cf59dcdd0bd53639da842241aa48b17b` was pushed normally to main. GitHub Pages workflow 37970621991 completed successfully. Render deployment `dep-db4iov0m7kps73c02qs0` succeeded and became Live in 2m24s. The live `/syllabus/punjab-ett/` page displays 96 headings, 26 science units, all six subject cards and 18 mathematics headings. Browser interaction verifies the Punjabi linear-equations study breakdown and mirror page-2 source link. Screenshot: `ett-mapping-punjabi-live.png`. The old `/study/punjab-ett/ett-core/` path was verified in the production static preview to guide users to the new map.

The runtime-only dependency audit (`npm audit --omit=dev`) reports zero vulnerabilities. Render's full install reports five high-severity development dependency findings; these remain a separate tooling follow-up, not a runtime-clean claim for all dependencies.
