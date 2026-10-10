# ExamSathi (परीक्षा साथी) — Academic Content & Verification Guidelines

**Document Version:** 1.0.0  
**Scope:** Lesson Authoring, Question Formulation, PYQ Verification, and Language Translation  
**Official Verification Standard:** Zero-Hallucination / Authoritative Primary Sources Only

---

## 1. Primary Source Authority Hierarchy

Every lesson, question, and explanation in ExamSathi must cite an authoritative, verifiable primary source. Content citations follow this strict priority:

1. **Official State Gazettes & Recruitment Syllabi:**
   - Education Recruitment Board (ERB) Punjab: `erd.punjab.gov.in`
   - Punjab Subordinate Services Selection Board: `sssb.punjab.gov.in`
   - Rajasthan Staff Selection Board (RSMSSB): `rsmssb.rajasthan.gov.in`
   - Central Board of Secondary Education (CBSE/CTET): `ctet.nic.in`
   - Staff Selection Commission: `ssc.gov.in`
2. **Standard State & National Textbooks:**
   - NCERT (National Council of Educational Research and Training): Class 6 to 12
   - Punjab School Education Board (PSEB) Textbooks: History, Punjabi Vyakaran, Civics
   - Rajasthan Board of Secondary Education (RBSE) Textbooks
3. **Statutory Acts & Official Documents:**
   - The Constitution of India (Official Ministry of Law & Justice text)
   - Right to Education Act 2009 (RTE), NEP 2020
   - Bharatiya Nyaya Sanhita (BNS) for Police recruitment tracks

---

## 2. PYQ Authenticity Standard

- **Zero Fabricated PYQs:** Questions tagged as `is_pyq = true` must correspond to actual past-year examination papers conducted between 2004 and 2024.
- **Mandatory Tags:** Every PYQ must specify:
  - Exact Examination Name (e.g. `Punjab Master Cadre SST`)
  - Exam Year (e.g. `2020` or `2022`)
  - Paper / Shift Identifier where applicable.
- **Answer Key Disputes:** If an official board issued an amended/revised answer key after objections, the explanation must explicitly note both the original provisional key and the final approved answer with official rationale.

---

## 3. Linguistic Standards & Typographical Rules

### Gurmukhi (Punjabi) Rules
- **Apostrophe & Character Encoding:** Ensure correct Unicode encoding for Gurmukhi vowels and diacritics. Never use ASCII fonts (like Asees) directly in database fields; all text must be valid Unicode Gurmukhi (`U+0A00` to `U+0A7F`).
- **Subjoined Letters (ਦੂਤ ਅੱਖਰ):** Ensure correct Inscript typing sequences: Base letter + Halant (`੍`) + Subscript consonant (`ਰ`, `ਹ`, `ਵ`), producing `ਪ੍ਰ`, `ਪ੍ਹ`, `ਸ੍ਵ`.
- **Tone & Idiom:** Academic standard Punjabi as prescribed by PSEB and Punjabi University Patiala.

### Devanagari (Hindi) Rules
- **Script Purity:** Never allow foreign script characters (such as Bengali "ও" or unescaped ASCII artifacts) inside Hindi strings.
- **Nomenclature:** Standard terminology approved by the Commission for Scientific and Technical Terminology (CSTT), Government of India.

### Question Formulation Guidelines
1. **Unambiguous Stems:** The question stem must clearly state the required task without deceptive double negatives (e.g. avoid *"Which of the following is NOT untrue"*).
2. **Plausible Distractors:** Distractors must represent genuine conceptual traps or common misconceptions. Avoid trivial options like *"None of the above"* or joke options.
3. **Comprehensive Explanations:**
   - State why the correct option is definitively true with factual citations.
   - Explain why the other three options are incorrect or in what context they would apply.
   - Include an *"Examiner Trap"* callout highlighting subtle pitfalls.
