import type { BlueprintLessonInput } from './master_cadre_blueprint_adapter';

export const ETT_PUNJABI_LANGUAGES_BLUEPRINT_LESSONS: BlueprintLessonInput[] = [
    // =========================================================================
    // 1. ETT PAPER A PUNJABI I: SCRIPT, PHONETICS, DIALECTS (UPBHASHA) & SPELLING
    // =========================================================================
    {
        topicId: 'ett-paper-a-punjabi-script-phonetics-dialects',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 100,
            editorialNote: 'Level B -> I -> A complete blueprint for ETT Paper A Qualifying Punjabi I: Decoding corrupted coaching term "Uptasha" -> Upbhasha (Majhi, Malwai, Doabi, Puadhi), Gurmukhi Script (41 letters, 7+1 Vargs), 3 Vowel Bearers (3-4-3 Laga rule), 10 Vowel Phonemes, 5 Nasal Consonants, 3 Lagakhar (Bindi, Tippi, Addhak), 3 Dutt Akhar, and Standard Spelling Rules.'
        },
        bookRefs: [
            {
                title: 'ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਅਤੇ ਲੇਖ ਰਚਨਾ (Modern Punjabi Grammar & Composition)',
                author: 'ਪੰਜਾਬ ਸਕੂਲ ਸਿੱਖਿਆ ਬੋਰਡ (PSEB), ਮੋਹਾਲੀ (Class 9–12)',
                chapter: 'ਭਾਸ਼ਾ ਤੇ ਪੰਜਾਬੀ ਦੀਆਂ ਉਪ-ਭਾਸ਼ਾਵਾਂ, ਧੁਨੀ ਬੋਧ, ਲਿਪੀ ਬੋਧ ਅਤੇ ਸ਼ੁੱਧ-ਅਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ',
                relevance: 'Authoritative PSEB reference for ETT Paper A (100 Marks Qualifying) and Paper B Punjabi grammar.'
            },
            {
                title: 'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦਾ ਵਿਆਕਰਨ (Punjabi Language Grammar)',
                author: 'ਪੰਜਾਬੀ ਯੂਨੀਵਰਸਿਟੀ, ਪਟਿਆਲਾ (Punjabi University, Patiala)',
                chapter: 'ਗੁਰਮੁਖੀ ਲਿਪੀ, ਸਵਰ-ਵਿਅੰਜਨ ਵਿਉਂਤ ਅਤੇ ਟਕਸਾਲੀ ਪੰਜਾਬੀ',
                relevance: 'Standard academic benchmark for Gurmukhi orthography, Navin Toli (ਲ਼), and tonal phonology.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Class 6–8 Foundation]
1. **Language (*Bhasha / Bolli*) & Decoding "Uptasha" $\\to$ *Upbhasha* (Regional Dialects):**
   - Many local coaching PDFs misprint **ਉਪਭਾਸ਼ਾ (*Upbhasha* — Dialect)** as *"Uptasha"* due to OCR corruption. An **ਉਪਭਾਸ਼ਾ (Dialect)** is a regional variety of a language spoken in a specific geographical tract (*Doab* or *Khitta*).
   - Punjabi belongs to the **Indo-Aryan branch** of the Indo-European family, evolved from **Vedic/Classical Sanskrit $\\to$ Prakrit $\\to$ Shauraseni / Takki Apabhramsha**.
   - **Taksali Punjabi (ਟਕਸਾਲੀ / ਮਿਆਰੀ ਪੰਜਾਬੀ):** The standard literary and administrative form of Punjabi in Indian Punjab is based on the **Majhi (ਮਾਝੀ)** dialect.
2. **Gurmukhi Script (ਗੁਰਮੁਖੀ ਲਿਪੀ) Fundamentals:**
   - Derived from the ancient **Brāhmī script** family, written **left-to-right**, and **standardized by the Second Sikh Guru, Sri Guru Angad Dev Ji (Bhai Lehna Ji)**.
   - Traditional Gurmukhi is called **Painti Akhari (ਪੈਂਤੀ ਅੱਖਰੀ — 35 letters)** arranged in **7 Vargs** of 5 letters each (\`ਮੁੱਖ ਵਰਗ, ਕਵਰਗ, ਚਵਰਗ, ਟਵਰਗ, ਤਵਰਗ, ਪਵਰਗ, ਅੰਤਿਮ ਵਰਗ\`).
   - Adding the **8th Varg — Navin Toli (ਨਵੀਨ ਟੋਲੀ — 6 letters with a dot/bindi at the foot: \`ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼\` for Perso-Arabic sounds + \`ਲ਼\` retroflex lateral added by Punjabi University, Patiala)** brings the total to **41 letters**.

---

### [Level I: Intermediate — Class 9–10 Core & ETT Paper A Matrix]
1. **The 4 Major Dialects (*Upbhashavan*) of Eastern (Indian) Punjab:**
   | Dialect (ਉਪਭਾਸ਼ਾ) | Geographic Tract | Districts Covered | Diagnostic Linguistic Markers |
   |---|---|---|---|
   | **Majhi (ਮਾਝੀ — ਟਕਸਾਲੀ)** | **Bari Doab** (between **Ravi** & **Beas**) | **Amritsar, Tarn Taran, Gurdaspur, Pathankot** | Standard literary base; uses \`ਹੈ, ਸੀ, ਵਾਹਵਾ, ਕਿੱਥੇ, ਆਉਣ ਡਿਹਾ\`; strong tonal laryngeal \`ਹ\` |
   | **Malwai (ਮਲਵਈ)** | South of **River Sutlej** (Malwa tract) | **Ludhiana, Patiala, Bathinda, Sangrur, Ferozepur, Fazilka, Mansa, Moga, Barnala, Faridkot, Sri Muktsar Sahib, Malerkotla** | Initial \`ਵ \\to ਬ\` (\`ਵੱਡਾ \\to ਬੱਡਾ\`); \`ਤੁਹਾਡਾ \\to ਥੋਡਾ\`, \`ਤੁਹਾਨੂੰ \\to ਥੋਨੂੰ\`; uses \`ਬਈ, ਜਮਾਂ, ਤੀ (ਸੀ), ਮਖਿਆ\` |
   | **Doabi (ਦੁਆਬੀ)** | **Bist Doab** (between **Beas** & **Sutlej**) | **Jalandhar, Hoshiarpur, Kapurthala, SBS Nagar (Nawanshahr)** | Initial \`ਵ \\to ਬ\` (\`ਵੱਛਾ \\to ਬੱਛਾ\`); \`ਜ਼ \\to ਜ\`; past markers \`ਸੀਗਾ, ਸੀਗੀ, ਸੀਗੇ\`; medial \`ਰ\` elision (\`ਪੁੱਤਰ \\to ਪੁੱਤ\`) |
   | **Puadhi (ਪੁਆਧੀ)** | Eastern foothill tract (*Puadh*) near Ghaggar | **Rupnagar (Ropar), SAS Nagar (Mohali), eastern Patiala (Rajpura), parts of Fatehgarh Sahib & Ambala** | Influences of Bangru/Haryanvi; uses \`ਹਮ, ਥਮ, ਮ੍ਹਾਰਾ, ਥਾਰਾ, ਗੈਲ (ਨਾਲ), ਬੀਚ (ਵਿੱਚ), ਯੋ (ਇਹ), ਜਾਣਾ ਹਾ\` |
   - **Western (Lehndi/Pakistani) & Pahari Dialects:** **Multani, Pothohari, Lehndi, Jangli, Dhani, Shahpuri**, and **Dogri** (spoken in Jammu/hills).
2. **3 Vowel Bearers (ਸਵਰ ਵਾਹਕ), 10 Vowel Phonemes & The 3–4–3 Laga Rule:**
   - **3 Vowel Bearers (\`ੳ, ਅ, ੲ\`):** Never act as consonants; they carry the **10 Laga-Matra (ਲਗਾਂ-ਮਾਤਰਾ)** to produce the **10 Vowel Phonemes (10 ਸਵਰ ਧੁਨੀਆਂ: \`ਅ, ਆ, ਇ, ਈ, ਉ, ਊ, ਏ, ਐ, ਓ, ਔ\`)**.
   - **The 3–4–3 Distribution Rule:**
     | Vowel Bearer | Number of Lagas | Attached Lagas | Resulting Vowel Forms |
     |---|---|---|---|
     | **ੳ (Ura)** | **3 Lagas** | ਔਂਕੜ (\`ੁ\`), ਦੁਲੈਂਕੜ (\`ੂ\`), ਹੋੜਾ (\`ੋ\`) | **ਉ, ਊ, ਓ** (Open-top \`ਓ\` needs no Kana) |
     | **ਅ (Aira)** | **4 Lagas** | ਮੁਕਤਾ (no sign), ਕੰਨਾ (\`ਾ\`), ਦੁਲਾਵਾਂ (\`ੈ\`), ਕਨੌੜਾ (\`ੌ\`) | **ਅ, ਆ, ਐ, ਔ** |
     | **ੲ (Iri)** | **3 Lagas** | ਸਿਹਾਰੀ (\`ਿ\`), ਬਿਹਾਰੀ (\`ੀ\`), ਲਾਂ (\`ੇ\`) | **ਇ, ਈ, ਏ** |
3. **Nasal Consonants (ਅਨੁਨਾਸਿਕ), Lagakhar (ਲਗਾਖਰ) & Dutt Akhar (ਦੁੱਤ ਅੱਖਰ):**
   - **5 Nasal Consonants (ਅਨੁਨਾਸਿਕ ਵਿਅੰਜਨ):** **\`ਙ, ਞ, ਣ, ਨ, ਮ\`** (5th letter of \`ਕਵਰਗ, ਚਵਰਗ, ਟਵਰਗ, ਤਵਰਗ, ਪਵਰਗ\`). Note: **\`ਙ\`** and **\`ਞ\`** never start a word in Punjabi (\`ਣ\` also never begins a standard word).
   - **3 Lagakhar (ਲਗਾਖਰ — Diacritics):**
     1. **Bindi (\`ਂ\`):** Nasalization sign used with **6 Lagas** — \`ਕੰਨਾ (ਾ), ਬਿਹਾਰੀ (ੀ), ਲਾਂ (ੇ), ਦੁਲਾਵਾਂ (ੈ), ਹੋੜਾ (ੋ), ਕਨੌੜਾ (ੌ)\` (plus on \`ੳ\` vowels \`ਉਂ, ਊਂ\`).
     2. **Tippi (\`ੰ\`):** Nasalization sign used with **4 Lagas** — \`ਮੁਕਤਾ, ਸਿਹਾਰੀ (ਿ), ਔਂਕੜ (ੁ), ਦੁਲੈਂਕੜ (ੂ)\` (with consonants).
     3. **Addhak (\`ੱ\`):** Doubles/geminates the following consonant sound (ਦੁੱਤਤਾ/ਦਬਾਅ); used with **3 Lagas** — \`ਮੁਕਤਾ (ਸੱਤ), ਸਿਹਾਰੀ (ਵਿੱਚ), ਔਂਕੜ (ਕੁੱਤਾ)\` (plus English loanwords with Dulavan like \`ਪੈੱਨ\`).
   - **3 Dutt Akhar (ਦੁੱਤ ਅੱਖਰ / ਪੈਰ ਵਿੱਚ ਪੈਣ ਵਾਲੇ ਅੱਖਰ — Subjoined Consonants):** Only **3 letters** are written at the foot of another consonant: **\`ਹ ( ੍ਹ )\`** (e.g., \`ਪੜ੍ਹਾਈ, ਜੜ੍ਹ\`), **\`ਰ ( ੍ਰ )\`** (e.g., \`ਪ੍ਰੇਮ, ਪ੍ਰੀਖਿਆ\`), and **\`ਵ ( ्व )\`** (e.g., \`ਸ੍ਵੈ, ਸ੍ਵਰਗ\`).

---

### [Level A: Advanced — Tricky Phonetics & ETT Paper A Spelling Mastery]
1. **Tonal Phonology of Punjabi (ਸੁਰ ਯੰਤਰਮੁਖੀ / ਧੁਨੀ ਵਿਉਂਤ):**
   - Unlike Hindi, Punjabi is a **tonal language (ਸੁਰਾਤਮਕ ਭਾਸ਼ਾ)** with **3 tones**: High-falling (\`ਉੱਚੀ ਸੁਰ\`), Low-rising (\`ਨੀਵੀਂ ਸੁਰ\`), and Level (\`ਪੱਧਰੀ ਸੁਰ\`).
   - Voiced aspirated consonants (\`ਘ, ਝ, ਢ, ਧ, ਭ\`) and **\`ਹ\`** convert into tone depending on word position: initial \`ਘੋੜਾ\` carries a low-rising tone (\`ਕੋੜਾ\` with low tone), whereas medial/final \`ਹ\` (\`ਸ਼ਹਿਰ, ਪੜ੍ਹਾਈ, ਚੜ੍ਹ\`) induces a high tone on the preceding vowel.
2. **Standard Punjabi Spelling Rules (ਸ਼ੁੱਧ-ਅਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ — High-Yield ETT Traps):**
   - **Short Sihari (\`ਿ\`) before \`ਹ\` Rule:** When \`ਹ\` is preceded by a consonant with an \`'ਐ'\`-like sound (\`ਸ਼ਹਿਰ, ਨਹਿਰ, ਲਹਿਰ, ਮਹਿਲ, ਪਹਿਲਾਂ\`), it is written with a **Sihari (\`ਿ\`) on the consonant before \`ਹ\`**, never Dulavan (\`ੈ\`) (\`ਸੈਹਰ\` $\\to$ **ਸ਼ਹਿਰ**).
   - **Short Aunkar (\`ੁ\`) before \`ਹ\` Rule:** Words with an \`'ਓ'\`-like tonal sound before \`ਹ\` take **Hora (\`ੋ\`)** in modern standard spelling (\`ਸੁਹਣਾ\` $\\to$ **ਸੋਹਣਾ**, \`ਮੁਹਰਾ\` $\\to$ **ਮੋਹਰਾ**), while words with an \`'ਔ'\`-like sound take \`ੁ\` before \`ਹ\` (\`ਬਹੁਤ, ਸਹੁਰਾ, ਵਿਹੁ\`).
   - **High-Yield Incorrect vs Correct Table:**
     | Incorrect (ਅਸ਼ੁੱਧ) | Correct (ਸ਼ੁੱਧ — ਟਕਸਾਲੀ) | Orthographic Rule |
     |---|---|---|
     | ਸਹਿਰ / ਸੈਹਰ | **ਸ਼ਹਿਰ** | Perso-Arabic \`ਸ਼\` (with bindi) + Sihari before \`ਹ\` |
     | ਪੜਾਈ | **ਪੜ੍ਹਾਈ** | Tonal \`ੜ\` requires subjoined \`੍ਹ\` (\`ੜ੍ਹ\`) |
     | ਸੁਹਣਾ | **ਸੋਹਣਾ** | Modern standard uses Hora (\`ੋ\`) on \`ਸ\` |
     | ਗਯਾਨ / ਵਿਗਯਾਨ | **ਗਿਆਨ / ਵਿਗਿਆਨ** | Sanskrit \`ज्ञ\` adapts to \`ਗਿ + ਆ\` in Gurmukhi |
     | ਪਰੀਖਿਆ | **ਪ੍ਰੀਖਿਆ** | Subjoined \`੍ਰ\` + Bihari (\`ੀ\`) on \`ਪ\` |
     | ਅਧਿਆਪਿਕ / ਅਧਯਾਪਕ | **ਅਧਿਆਪਕ** | Sihari on \`ਧ\` + \`ਆ\` on \`ਅ\` |
     | ਸੇਹਤ / ਮੇਹਨਤ | **ਸਿਹਤ / ਮਿਹਨਤ** | Sihari on initial consonant before \`ਹ\` |`,
            pa: `### [Level B: Basic — Class 6–8 ਬੁਨਿਆਦੀ ਪੱਧਰ]
1. **ਭਾਸ਼ਾ ਅਤੇ ਉਪਭਾਸ਼ਾ ("Uptasha" $\\to$ ਉਪਭਾਸ਼ਾ):**
   - ਕਈ ਕੋਚਿੰਗ ਨੋਟਸ ਵਿੱਚ ਛਪਾਈ ਦੀ ਗਲਤੀ ਕਾਰਨ **'ਉਪਭਾਸ਼ਾ'** ਨੂੰ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ *"Uptasha"* ਲਿਖ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ। ਕਿਸੇ ਭਾਸ਼ਾ ਦੇ ਖੇਤਰੀ ਰੂਪ ਨੂੰ ਜੋ ਕਿਸੇ ਵਿਸ਼ੇਸ਼ ਭੂਗੋਲਿਕ ਖਿੱਤੇ (ਜਿਵੇਂ ਮਾਝਾ, ਮਾਲਵਾ, ਦੁਆਬਾ, ਪੁਆਧ) ਵਿੱਚ ਬੋਲਿਆ ਜਾਂਦਾ ਹੈ, **ਉਪਭਾਸ਼ਾ** ਕਿਹਾ ਜਾਂਦਾ ਹੈ।
   - ਪੰਜਾਬੀ ਭਾਸ਼ਾ **ਹਿੰਦ-ਆਰੀਆਈ (Indo-Aryan)** ਭਾਸ਼ਾ ਪਰਿਵਾਰ ਵਿੱਚੋਂ ਹੈ ਅਤੇ ਇਸ ਦੀ **ਟਕਸਾਲੀ (ਮਿਆਰੀ/Standard) ਵੰਨਗੀ ਮਾਝੀ ਉਪਭਾਸ਼ਾ** ਉੱਤੇ ਆਧਾਰਿਤ ਹੈ।
2. **ਗੁਰਮੁਖੀ ਲਿਪੀ (Gurmukhi Script) ਦੀ ਮੁੱਢਲੀ ਜਾਣਕਾਰੀ:**
   - ਗੁਰਮੁਖੀ ਲਿਪੀ ਪ੍ਰਾਚੀਨ **ਬ੍ਰਹਮੀ ਲਿਪੀ** ਤੋਂ ਵਿਕਸਿਤ ਹੋਈ ਹੈ, ਖੱਬੇ ਤੋਂ ਸੱਜੇ ਲਿਖੀ ਜਾਂਦੀ ਹੈ ਅਤੇ ਇਸ ਨੂੰ **ਦੂਜੇ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ** ਨੇ ਤਰਤੀਬ ਦੇ ਕੇ ਮਿਆਰੀ ਰੂਪ ਬਖ਼ਸ਼ਿਆ।
   - ਮੂਲ ਗੁਰਮੁਖੀ ਵਿੱਚ **35 ਅੱਖਰ (ਪੈਂਤੀ ਅੱਖਰੀ)** ਸਨ ਜੋ **7 ਵਰਗਾਂ** (\`ਮੁੱਖ ਵਰਗ, ਕਵਰਗ, ਚਵਰਗ, ਟਵਰਗ, ਤਵਰਗ, ਪਵਰਗ, ਅੰਤਿਮ ਵਰਗ\`) ਵਿੱਚ ਵੰਡੇ ਹੋਏ ਸਨ।
   - ਫ਼ਾਰਸੀ-ਅਰਬੀ ਧੁਨੀਆਂ ਲਈ **5 ਬਿੰਦੀ ਵਾਲੇ ਅੱਖਰ (\`ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼\`)** ਅਤੇ ਪੰਜਾਬੀ ਯੂਨੀਵਰਸਿਟੀ ਪਟਿਆਲਾ ਵੱਲੋਂ ਜੋੜੇ ਗਏ ਤਾਲਵੀ **\`ਲ਼\`** ਸਮੇਤ **8ਵੇਂ ਵਰਗ (ਨਵੀਨ ਟੋਲੀ — 6 ਅੱਖਰ)** ਨਾਲ ਹੁਣ ਕੁੱਲ **41 ਅੱਖਰ** ਹਨ।

---

### [Level I: Intermediate — Class 9–10 ਮੱਧ ਪੱਧਰ ਅਤੇ ETT Paper A ਮੈਟ੍ਰਿਕਸ]
1. **ਪੂਰਬੀ (ਭਾਰਤੀ) ਪੰਜਾਬ ਦੀਆਂ 4 ਪ੍ਰਮੁੱਖ ਉਪਭਾਸ਼ਾਵਾਂ:**
   | ਉਪਭਾਸ਼ਾ | ਭੂਗੋਲਿਕ ਖਿੱਤਾ | ਪ੍ਰਮੁੱਖ ਜ਼ਿਲ੍ਹੇ | ਭਾਸ਼ਾਈ ਪਛਾਣ ਚਿੰਨ੍ਹ |
   |---|---|---|---|
   | **ਮਾਝੀ (ਟਕਸਾਲੀ)** | **ਬਾਰੀ ਦੁਆਬ** (ਰਾਵੀ ਅਤੇ ਬਿਆਸ ਵਿਚਕਾਰ) | **ਅੰਮ੍ਰਿਤਸਰ, ਤਰਨ ਤਾਰਨ, ਗੁਰਦਾਸਪੁਰ, ਪਠਾਨਕੋਟ** | ਮਿਆਰੀ ਸਾਹਿਤਕ ਆਧਾਰ; \`ਹੈ, ਸੀ, ਵਾਹਵਾ, ਕਿੱਥੇ, ਆਉਣ ਡਿਹਾ\`; ਸੁਰਾਤਮਕ \`ਹ\` ਦੀ ਪ੍ਰਧਾਨਤਾ |
   | **ਮਲਵਈ** | **ਸਤਲੁਜ ਦਰਿਆ** ਦੇ ਦੱਖਣ ਵੱਲ (ਮਾਲਵਾ) | **ਲੁਧਿਆਣਾ, ਪਟਿਆਲਾ, ਬਠਿੰਡਾ, ਸੰਗਰੂਰ, ਫ਼ਿਰੋਜ਼ਪੁਰ, ਫ਼ਾਜ਼ਿਲਕਾ, ਮਾਨਸਾ, ਮੋਗਾ, ਬਰਨਾਲਾ, ਫ਼ਰੀਦਕੋਟ, ਸ੍ਰੀ ਮੁਕਤਸਰ ਸਾਹਿਬ, ਮਾਲੇਰਕੋਟਲਾ** | ਸ਼ਬਦ ਦੇ ਸ਼ੁਰੂ ਵਿੱਚ \`ਵ \\to ਬ\` (\`ਵੱਡਾ \\to ਬੱਡਾ\`); \`ਤੁਹਾਡਾ \\to ਥੋਡਾ\`, \`ਤੁਹਾਨੂੰ \\to ਥੋਨੂੰ\`; \`ਬਈ, ਜਮਾਂ, ਤੀ (ਸੀ), ਮਖਿਆ\` |
   | **ਦੁਆਬੀ** | **ਬਿਸਤ ਦੁਆਬ** (ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ ਵਿਚਕਾਰ) | **ਜਲੰਧਰ, ਹੁਸ਼ਿਆਰਪੁਰ, ਕਪੂਰਥਲਾ, ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ ਨਗਰ (ਨਵਾਂਸ਼ਹਿਰ)** | ਸ਼ੁਰੂ ਵਿੱਚ \`ਵ \\to ਬ\` (\`ਵੱਛਾ \\to ਬੱਛਾ\`); \`ਜ਼ \\to ਜ\`; ਭੂਤਕਾਲ ਲਈ \`ਸੀਗਾ, ਸੀਗੀ, ਸੀਗੇ\`; ਵਿਚਕਾਰਲੇ \`ਰ\` ਦਾ ਲੋਪ (\`ਪੁੱਤਰ \\to ਪੁੱਤ\`) |
   | **ਪੁਆਧੀ** | ਪੂਰਬੀ ਘੱਗਰ/ਨੀਮ-ਪਹਾੜੀ ਖਿੱਤਾ (ਪੁਆਧ) | **ਰੂਪਨਗਰ (ਰੋਪੜ), ਮੋਹਾਲੀ (SAS Nagar), ਪੂਰਬੀ ਪਟਿਆਲਾ (ਰਾਜਪੁਰਾ), ਫ਼ਤਹਿਗੜ੍ਹ ਸਾਹਿਬ ਦਾ ਪੂਰਬੀ ਹਿੱਸਾ, ਅੰਬਾਲਾ** | ਬਾਂਗਰੂ/ਹਰਿਆਣਵੀ ਪ੍ਰਭਾਵ; \`ਹਮ, ਥਮ, ਮ੍ਹਾਰਾ, ਥਾਰਾ, ਗੈਲ (ਨਾਲ), ਬੀਚ (ਵਿੱਚ), ਯੋ (ਇਹ), ਜਾਣਾ ਹਾ\` |
   - **ਪੱਛਮੀ (ਲਹਿੰਦੀ/ਪਾਕਿਸਤਾਨੀ) ਅਤੇ ਪਹਾੜੀ ਉਪਭਾਸ਼ਾਵਾਂ:** **ਮੁਲਤਾਨੀ, ਪੋਠੋਹਾਰੀ, ਲਹਿੰਦੀ, ਜਾਂਗਲੀ, ਧਾਨੀ, ਸ਼ਾਹਪੁਰੀ** ਅਤੇ **ਡੋਗਰੀ**।
2. **3 ਸਵਰ ਵਾਹਕ (\`ੳ, ਅ, ੲ\`), 10 ਸਵਰ ਧੁਨੀਆਂ ਅਤੇ 3–4–3 ਲਗਾਂ ਦਾ ਨਿਯਮ:**
   - **3 ਸਵਰ ਵਾਹਕ (\`ੳ, ਅ, ੲ\`)** ਨਾਲ **10 ਲਗਾਂ** ਲੱਗ ਕੇ **10 ਸਵਰ ਧੁਨੀਆਂ (\`ਅ, ਆ, ਇ, ਈ, ਉ, ਊ, ਏ, ਐ, ਓ, ਔ\`)** ਬਣਦੀਆਂ ਹਨ:
     | ਸਵਰ ਵਾਹਕ | ਲਗਾਂ ਦੀ ਗਿਣਤੀ | ਲੱਗਣ ਵਾਲੀਆਂ ਲਗਾਂ | ਬਣਨ ਵਾਲੇ ਸਵਰ ਰੂਪ |
     |---|---|---|---|
     | **ੳ (ਊੜਾ)** | **3 ਲਗਾਂ** | ਔਂਕੜ (\`ੁ\`), ਦੁਲੈਂਕੜ (\`ੂ\`), ਹੋੜਾ (\`ੋ\`) | **ਉ, ਊ, ਓ** |
     | **ਅ (ਐੜਾ)** | **4 ਲਗਾਂ** | ਮੁਕਤਾ (ਕੋਈ ਚਿੰਨ੍ਹ ਨਹੀਂ), ਕੰਨਾ (\`ਾ\`), ਦੁਲਾਵਾਂ (\`ੈ\`), ਕਨੌੜਾ (\`ੌ\`) | **ਅ, ਆ, ਐ, ਔ** |
     | **ੲ (ੲੀੜੀ)** | **3 ਲਗਾਂ** | ਸਿਹਾਰੀ (\`ਿ\`), ਬਿਹਾਰੀ (\`ੀ\`), ਲਾਂ (\`ੇ\`) | **ਇ, ਈ, ਏ** |
3. **ਅਨੁਨਾਸਿਕ ਵਿਅੰਜਨ, ਲਗਾਖਰ ਅਤੇ ਦੁੱਤ ਅੱਖਰ:**
   - **5 ਅਨੁਨਾਸਿਕ (ਨਾਸਕੀ) ਵਿਅੰਜਨ:** **\`ਙ, ਞ, ਣ, ਨ, ਮ\`** (ਕਵਰਗ ਤੋਂ ਪਵਰਗ ਤੱਕ ਦਾ ਪੰਜਵਾਂ ਅੱਖਰ)। **\`ਙ, ਞ, ਣ\`** ਤੋਂ ਪੰਜਾਬੀ ਦਾ ਕੋਈ ਸ਼ਬਦ ਸ਼ੁਰੂ ਨਹੀਂ ਹੁੰਦਾ।
   - **3 ਲਗਾਖਰ (\`ਬਿੰਦੀ ਂ\`, \`ਟਿੱਪੀ ੰ\`, \`ਅੱਧਕ ੱ\`):**
     1. **ਬਿੰਦੀ (\`ਂ\`) — 6 ਲਗਾਂ ਨਾਲ:** \`ਕੰਨਾ, ਬਿਹਾਰੀ, ਲਾਂ, ਦੁਲਾਵਾਂ, ਹੋੜਾ, ਕਨੌੜਾ\` (ਅਤੇ \`ੳ\` ਦੇ ਸਵਰਾਂ \`ਉਂ, ਊਂ\` ਨਾਲ)।
     2. **ਟਿੱਪੀ (\`ੰ\`) — 4 ਲਗਾਂ ਨਾਲ:** \`ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ, ਦੁਲੈਂਕੜ\` (ਵਿਅੰਜਨਾਂ ਨਾਲ)।
     3. **ਅੱਧਕ (\`ੱ\`) — 3 ਲਗਾਂ ਨਾਲ:** ਆਵਾਜ਼ ਦੇ ਦਬਾਅ/ਦੁੱਤਤਾ ਲਈ \`ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ\` (ਅਤੇ ਅੰਗਰੇਜ਼ੀ ਦੇ ਤਤਸਮ ਸ਼ਬਦਾਂ ਜਿਵੇਂ \`ਪੈੱਨ, ਬੈੱਡ\` ਵਿੱਚ ਦੁਲਾਵਾਂ ਨਾਲ)।
   - **3 ਦੁੱਤ ਅੱਖਰ (ਪੈਰ ਵਿੱਚ ਪੈਣ ਵਾਲੇ ਅੱਖਰ):** ਕੇਵਲ **\`ਹ ( ੍ਹ )\`**, **\`ਰ ( ੍ਰ )\`** ਅਤੇ **\`ਵ ( ्व )\`**।

---

### [Level A: Advanced — ਧੁਨੀ ਵਿਉਂਤ ਅਤੇ ਸ਼ੁੱਧ-ਅਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ]
1. **ਪੰਜਾਬੀ ਦੀ ਸੁਰਾਤਮਕ ਵਿਸ਼ੇਸ਼ਤਾ (Tonal System):**
   - ਪੰਜਾਬੀ ਇੱਕ **ਸੁਰ-ਪ੍ਰਧਾਨ (Tonal) ਭਾਸ਼ਾ** ਹੈ ਜਿਸ ਵਿੱਚ **3 ਸੁਰਾਂ** (\`ਉੱਚੀ, ਨੀਵੀਂ, ਪੱਧਰੀ\`) ਹਨ। **\`ਘ, ਝ, ਢ, ਧ, ਭ\`** ਅਤੇ **\`ਹ\`** ਸ਼ਬਦ ਵਿੱਚ ਆਪਣੀ ਸਥਿਤੀ ਅਨੁਸਾਰ ਸੁਰ ਵਿੱਚ ਬਦਲ ਜਾਂਦੇ ਹਨ।
2. **ਸ਼ੁੱਧ-ਅਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜਾਂ ਦੇ ਮਿਆਰੀ ਨਿਯਮ:**
   | ਅਸ਼ੁੱਧ ਸ਼ਬਦ | ਸ਼ੁੱਧ (ਟਕਸਾਲੀ) ਸ਼ਬਦ | ਵਿਆਕਰਨਿਕ ਨਿਯਮ |
   |---|---|---|
   | ਸਹਿਰ / ਸੈਹਰ | **ਸ਼ਹਿਰ** | ਫ਼ਾਰਸੀ ਧੁਨੀ ਲਈ \`ਸ਼\` (ਪੈਰ ਬਿੰਦੀ) + \`ਹ\` ਤੋਂ ਪਹਿਲਾਂ ਸਿਹਾਰੀ (\`ਿ\`) |
   | ਪੜਾਈ | **ਪੜ੍ਹਾਈ** | ਸੁਰਾਤਮਕ ਧੁਨੀ ਲਈ \`ੜ\` ਦੇ ਪੈਰ ਵਿੱਚ \`੍ਹ\` (\`ੜ੍ਹ\`) |
   | ਸੁਹਣਾ | **ਸੋਹਣਾ** | ਮਿਆਰੀ ਸ਼ਬਦ-ਜੋੜ ਵਿੱਚ \`ਸ\` ਨੂੰ ਹੋੜਾ (\`ੋ\`) ਲੱਗਦਾ ਹੈ |
   | ਗਯਾਨ / ਵਿਗਯਾਨ | **ਗਿਆਨ / ਵਿਗਿਆਨ** | ਸੰਸਕ੍ਰਿਤ \`ज्ञ\` ਪੰਜਾਬੀ ਵਿੱਚ \`ਗਿ + ਆ\` ਕਰਕੇ ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ |
   | ਪਰੀਖਿਆ | **ਪ੍ਰੀਖਿਆ** | \`ਪ\` ਦੇ ਪੈਰ ਵਿੱਚ \`੍ਰ\` ਅਤੇ ਬਿਹਾਰੀ (\`ੀ\`) |
   | ਅਧਿਆਪਿਕ / ਅਧਯਾਪਕ | **ਅਧਿਆਪਕ** | \`ਧ\` ਨੂੰ ਸਿਹਾਰੀ + \`ਆ\` |
   | ਸੇਹਤ / ਮੇਹਨਤ | **ਸਿਹਤ / ਮਿਹਨਤ** | \`ਹ\` ਤੋਂ ਪਹਿਲਾਂ ਵਾਲੇ ਅੱਖਰ ਨੂੰ ਸਿਹਾਰੀ (\`ਿ\`) ਲੱਗਦੀ ਹੈ |`,
            hi: `### [Level B: Basic — Class 6–8 आधारभूत स्तर]
1. **भाषा और उपभाषा ("Uptasha" $\\to$ उपभाषा / ਉਪਭਾਸ਼ਾ):**
   - कई कोचिंग नोट्स में मुद्रण त्रुटि (OCR error) के कारण **'उपभाषा' (ਉਪਭਾਸ਼ਾ)** को *"Uptasha"* लिख दिया जाता है। किसी भाषा के क्षेत्रीय रूप को **उपभाषा (Dialect)** कहते हैं।
   - पंजाबी **हिंद-आर्य (Indo-Aryan)** भाषा परिवार की भाषा है और इसकी **मानक/टकसाली (ਟਕਸਾਲੀ) शैली माझी (ਮਾਝੀ) उपभाषा** पर आधारित है।
2. **गुरमुखी लिपि (ਗੁਰਮੁਖੀ ਲਿਪੀ) का परिचय:**
   - यह प्राचीन **ब्राह्मी लिपि** से विकसित हुई है, बाएँ से दाएँ लिखी जाती है तथा **द्वितीय सिख गुरु श्री गुरु अंगद देव जी** द्वारा इसे मानक रूप प्रदान किया गया।
   - मूल गुरमुखी में **35 अक्षर (ਪੈਂਤੀ ਅੱਖਰੀ — 7 वर्ग)** थे। फ़ारसी-अरबी ध्वनियों के **5 बिंदी वाले अक्षर (\`ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼\`)** और पंजाबी यूनिवर्सिटी पटियाला द्वारा जोड़े गए **\`ਲ਼\`** सहित **8वें वर्ग (ਨਵੀਨ ਟੋਲੀ — 6 अक्षर)** को मिलाकर कुल **41 अक्षर** हैं।

---

### [Level I: Intermediate — Class 9–10 मध्यम स्तर एवं ETT Paper A मैट्रिक्स]
1. **पूर्वी (भारतीय) पंजाब की 4 प्रमुख उपभाषाएँ:**
   | उपभाषा | भौगोलिक क्षेत्र | प्रमुख जिले | भाषाई पहचान चिह्न |
   |---|---|---|---|
   | **माझी (ਮਾਝੀ — टकसाली)** | **बारी दोआब** (रावी और ब्यास के बीच) | **अमृतसर, तरन तारन, गुरदासपुर, पठानकोट** | मानक साहित्यिक आधार; \`ਹੈ, ਸੀ, ਵਾਹਵਾ, ਕਿੱਥੇ\`; स्वरात्मक \`ਹ\` की प्रधानता |
   | **मलवई (ਮਲਵਈ)** | **सतलुज नदी** के दक्षिण में (मालवा) | **लुधियाना, पटियाला, बठिंडा, संगरूर, फ़िरोज़पुर, फ़ाज़िल्का, मानसा, मोगा, बरनाला, फ़रीदकोट, मुक्तसर** | प्रारंभिक \`ਵ \\to ਬ\`; \`ਤੁਹਾਡਾ \\to ਥੋਡਾ\`; \`ਬਈ, ਜਮਾਂ, ਤੀ (ਸੀ)\` |
   | **दोआबी (ਦੁਆਬੀ)** | **बिस्त दोआब** (ब्यास और सतलुज के बीच) | **जालंधर, होशियारपुर, कपूरथला, नवांशहर (SBS नगर)** | प्रारंभिक \`ਵ \\to ਬ\` (\`ਵੱਛਾ \\to ਬੱਛਾ\`); भूतकाल में \`ਸੀਗਾ, ਸੀਗੇ\` |
   | **पुआधी (ਪੁਆਧੀ)** | पूर्वी घग्गर/शिवालिक क्षेत्र (पुआध) | **रूपनगर (रोपड़), मोहाली (SAS नगर), राजपुरा (पूर्वी पटियाला), अंबाला** | हरियाणवी/बांगरू प्रभाव; \`ਹਮ, ਥਮ, ਮ੍ਹਾਰਾ, ਥਾਰਾ, ਗੈਲ (ਨਾਲ), ਬੀਚ (ਵਿੱਚ)\` |
2. **3 स्वर वाहक (\`ੳ, ਅ, ੲ\`), 10 स्वर ध्वनियाँ और 3–4–3 लगां का नियम:**
   - **\`ੳ\` के साथ 3 लगां** (\`ਔਂਕੜ, ਦੁਲੈਂਕੜ, ਹੋੜਾ\` $\\to$ \`ਉ, ਊ, ਓ\`), **\`ਅ\` के साथ 4 लगां** (\`ਮੁਕਤਾ, ਕੰਨਾ, ਦੁਲਾਵਾਂ, ਕਨੌੜਾ\` $\\to$ \`ਅ, ਆ, ਐ, ਔ\`) और **\`ੲ\` के साथ 3 लगां** (\`ਸਿਹਾਰੀ, ਬਿਹਾਰੀ, ਲਾਂ\` $\\to$ \`ਇ, ਈ, ਏ\`) लगती हैं।
3. **5 अनुनासिक व्यंजन (\`ਙ, ਞ, ਣ, ਨ, ਮ\`), 3 लगाखर (\`ਬਿੰਦੀ ਂ\` — 6 लगां, \`ਟਿੱਪੀ ੰ\` — 4 लगां, \`ਅੱਧਕ ੱ\` — 3 लगां) और 3 दुत्त अक्षर (\`ਹ, ਰ, ਵ\`)।**

---

### [Level A: Advanced — ध्वनि व्यवस्था एवं शुद्ध-अशुद्ध शब्द-जोड़]
1. **पंजाबी की स्वरात्मक (Tonal) विशेषता:** पंजाबी में **3 सुर (\`ਉੱਚੀ, ਨੀਵੀਂ, ਪੱਧਰੀ\`)** होते हैं; \`ਘ, ਝ, ਢ, ਧ, ਭ\` और \`ਹ\` सुर में परिवर्तित होते हैं।
2. **मानक वर्तनी (ਸ਼ੁੱਧ-ਅਸ਼ੁੱਧ) नियम:** \`ਸਹਿਰ \\to ਸ਼ਹਿਰ\`, \`ਪੜਾਈ \\to ਪੜ੍ਹਾਈ\`, \`ਸੁਹਣਾ \\to ਸੋਹਣਾ\`, \`ਗਯਾਨ \\to ਗਿਆਨ\`, \`ਪਰੀਖਿਆ \\to ਪ੍ਰੀਖਿਆ\`, \`ਸੇਹਤ \\to ਸਿਹਤ\`, \`ਮੇਹਨਤ \\to ਮਿਹਨਤ\`।`
        },
        keyNotes: {
            en: [
                '**Decoding "Uptasha":** Corrupted coaching text for **ਉਪਭਾਸ਼ਾ (Upbhasha / Regional Dialect)** — the 4 Eastern Punjab dialects are **Majhi** (Bari Doab: Amritsar, Tarn Taran, Gurdaspur, Pathankot), **Malwai** (south of Sutlej: 12+ districts), **Doabi** (Bist Doab: Jalandhar, Hoshiarpur, Kapurthala, SBS Nagar), and **Puadhi** (Ropar, Mohali, Rajpura).',
                '**Standard (Taksali) Punjabi:** **Majhi (ਮਾਝੀ)** is the official literary and textbook standard (*Taksali Boli*) of Punjabi.',
                '**Gurmukhi Script Structure:** Standardized by **Sri Guru Angad Dev Ji**; **35 traditional letters (Painti Akhari)** in 7 Vargs + **6 Navin Toli letters (`ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼`)** in the 8th Varg = **41 letters total**.',
                '**The 3–4–3 Vowel Bearer Rule:** **3 Vowel Bearers (`ੳ, ਅ, ੲ`)** carry **10 Lagas** to form **10 Vowel Phonemes** — `ੳ` takes **3** (`ੁ, ੂ, ੋ`), `ਅ` takes **4** (`ਮੁਕਤਾ, ਾ, ੈ, ੌ`), and `ੲ` takes **3** (`ਿ, ੀ, ੇ`).',
                '**3 Lagakhar & Their Laga Counts:** **Bindi (`ਂ`)** is used with **6 Lagas** (`ਾ, ੀ, ੇ, ੈ, ੋ, ੌ`); **Tippi (`ੰ`)** with **4 Lagas** (`ਮੁਕਤਾ, ਿ, ੁ, ੂ`); **Addhak (`ੱ`)** with **3 Lagas** (`ਮੁਕਤਾ, ਿ, ੁ` + English loanwords with `ੈ`).',
                '**5 Nasals & 3 Dutt Akhar:** **5 Nasal Consonants (`ਙ, ਞ, ਣ, ਨ, ਮ`)** where `ਙ, ਞ, ਣ` never start a word; **3 Dutt Akhar (subjoined letters)** written at the foot of consonants are **`ਹ ( ੍ਹ ), ਰ ( ੍ਰ ), ਵ ( ्व )`**.'
            ],
            pa: [
                '**"Uptasha" ਦਾ ਅਸਲ ਅਰਥ:** ਇਹ **ਉਪਭਾਸ਼ਾ (Dialect)** ਸ਼ਬਦ ਦਾ ਵਿਗੜਿਆ ਰੂਪ ਹੈ; ਪੂਰਬੀ ਪੰਜਾਬ ਦੀਆਂ 4 ਮੁੱਖ ਉਪਭਾਸ਼ਾਵਾਂ **ਮਾਝੀ, ਮਲਵਈ, ਦੁਆਬੀ ਅਤੇ ਪੁਆਧੀ** ਹਨ।',
                '**ਟਕਸਾਲੀ ਪੰਜਾਬੀ:** **ਮਾਝੀ ਉਪਭਾਸ਼ਾ** (ਅੰਮ੍ਰਿਤਸਰ, ਤਰਨ ਤਾਰਨ, ਗੁਰਦਾਸਪੁਰ, ਪਠਾਨਕੋਟ — ਬਾਰੀ ਦੁਆਬ) ਨੂੰ ਪੰਜਾਬੀ ਦੀ ਟਕਸਾਲੀ/ਮਿਆਰੀ ਭਾਸ਼ਾ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ।',
                '**ਗੁਰਮੁਖੀ ਵਰਣਮਾਲਾ:** **ਸ੍ਰੀ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ** ਵੱਲੋਂ ਮਿਆਰੀ ਰੂਪ; ਮੂਲ **35 ਅੱਖਰ (7 ਵਰਗ)** + **6 ਨਵੀਨ ਟੋਲੀ ਦੇ ਅੱਖਰ (`ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼`)** = ਕੁੱਲ **41 ਅੱਖਰ**।',
                '**3–4–3 ਸਵਰ ਵਾਹਕ ਨਿਯਮ:** **3 ਸਵਰ ਵਾਹਕ (`ੳ, ਅ, ੲ`)** ਅਤੇ **10 ਲਗਾਂ** ਮਿਲ ਕੇ **10 ਸਵਰ ਧੁਨੀਆਂ** ਬਣਾਉਂਦੇ ਹਨ — `ੳ` ਨਾਲ **3** (`ੁ, ੂ, ੋ`), `ਅ` ਨਾਲ **4** (`ਮੁਕਤਾ, ਾ, ੈ, ੌ`), ਅਤੇ `ੲ` ਨਾਲ **3** (`ਿ, ੀ, ੇ`) ਲਗਾਂ ਲੱਗਦੀਆਂ ਹਨ।',
                '**3 ਲਗਾਖਰਾਂ ਦੀ ਵਰਤੋਂ:** **ਬਿੰਦੀ (`ਂ`)** **6 ਲਗਾਂ** ਨਾਲ, **ਟਿੱਪੀ (`ੰ`)** **4 ਲਗਾਂ** ਨਾਲ ਅਤੇ **ਅੱਧਕ (`ੱ`)** **3 ਲਗਾਂ** (`ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ`) ਨਾਲ ਲੱਗਦਾ ਹੈ।',
                '**5 ਅਨੁਨਾਸਿਕ ਅਤੇ 3 ਦੁੱਤ ਅੱਖਰ:** **5 ਨਾਸਕੀ ਵਿਅੰਜਨ (`ਙ, ਞ, ਣ, ਨ, ਮ`)** ਜਿਨ੍ਹਾਂ ਵਿੱਚੋਂ `ਙ, ਞ, ਣ` ਤੋਂ ਕੋਈ ਸ਼ਬਦ ਸ਼ੁਰੂ ਨਹੀਂ ਹੁੰਦਾ; ਪੈਰ ਵਿੱਚ ਪੈਣ ਵਾਲੇ **3 ਦੁੱਤ ਅੱਖਰ `ਹ, ਰ, ਵ`** ਹਨ।'
            ],
            hi: [
                '**"Uptasha" का वास्तविक अर्थ:** यह **उपभाषा (ਉਪਭਾਸ਼ਾ)** शब्द की मुद्रण त्रुटि है; पूर्वी पंजाब की 4 मुख्य उपभाषाएँ **माझी, मलवई, दोआबी और पुआधी** हैं।',
                '**टकसाली पंजाबी:** **माझी उपभाषा** (अमृतसर, तरन तारन, गुरदासपुर, पठानकोट — बारी दोआब) को मानक/टकसाली पंजाबी माना जाता है।',
                '**गुरमुखी वर्णमाला:** **श्री गुरु अंगद देव जी** द्वारा मानकीकृत; मूल **35 अक्षर (7 वर्ग)** + **6 नवीन टोली अक्षर (`ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼`)** = कुल **41 अक्षर**।',
                '**3–4–3 स्वर वाहक नियम:** **3 स्वर वाहक (`ੳ, ਅ, ੲ`)** और **10 लगां** मिलकर **10 स्वर ध्वनियाँ** बनाते हैं — `ੳ` के साथ **3** (`ੁ, ੂ, ੋ`), `ਅ` के साथ **4** (`ਮੁਕਤਾ, ਾ, ੈ, ੌ`), और `ੲ` के साथ **3** (`ਿ, ੀ, ੇ`)।',
                '**3 लगाखर:** **बिंदी (`ਂ`)** **6 लगां** के साथ, **टिप्पी (`ੰ`)** **4 लगां** के साथ और **अद्धक (`ੱ`)** **3 लगां** (`ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ`) के साथ प्रयुक्त होता है।',
                '**5 अनुनासिक एवं 3 दुत्त अक्षर:** **5 नासिक्य व्यंजन (`ਙ, ਞ, ਣ, ਨ, ਮ`)** तथा पैर में लिखे जाने वाले **3 दुत्त अक्षर `ਹ, ਰ, ਵ`** हैं।'
            ]
        },
        quickRevisionSheet: {
            en: [
                '**4 Eastern Punjab Dialects:** Majhi (Ravi–Beas: Amritsar, Tarn Taran, Gurdaspur, Pathankot) | Doabi (Beas–Sutlej: Jalandhar, Hoshiarpur, Kapurthala, SBS Nagar) | Malwai (South of Sutlej: 12+ districts) | Puadhi (Ropar, Mohali, Rajpura).',
                '**Gurmukhi Numbers at a Glance:** Traditional Letters = **35** | Navin Toli = **6** (`ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼`) | Total Letters = **41** | Vargs = **8** | Pure Consonants = **32** (`ਕ` to `ੜ` + 6 Navin = 38 total consonants).',
                '**Vowel & Laga Formula:** Vowel Bearers = **3 (`ੳ, ਅ, ੲ`)** | Vowel Phonemes = **10** | Laga-Matra = **10** (`ਮੁਕਤਾ` has no symbol + 9 visible signs) | **3–4–3 Rule:** `ੳ(3) + ਅ(4) + ੲ(3) = 10`.',
                '**Lagakhar & Dutt Akhar Formula:** Bindi (`ਂ`) = **6 Lagas** | Tippi (`ੰ`) = **4 Lagas** | Addhak (`ੱ`) = **3 Lagas** | Nasal Consonants = **5 (`ਙ, ਞ, ਣ, ਨ, ਮ`)** | Dutt Akhar = **3 (`ਹ, ਰ, ਵ`)**.',
                '**Top 6 Spelling Corrections:** `ਸਹਿਰ \\to ਸ਼ਹਿਰ`, `ਪੜਾਈ \\to ਪੜ੍ਹਾਈ`, `ਸੁਹਣਾ \\to ਸੋਹਣਾ`, `ਗਯਾਨ \\to ਗਿਆਨ`, `ਪਰੀਖਿਆ \\to ਪ੍ਰੀਖਿਆ`, `ਮੇਹਨਤ \\to ਮਿਹਨਤ`.'
            ],
            pa: [
                '**ਪੂਰਬੀ ਪੰਜਾਬ ਦੀਆਂ 4 ਉਪਭਾਸ਼ਾਵਾਂ:** ਮਾਝੀ (ਰਾਵੀ-ਬਿਆਸ: ਅੰਮ੍ਰਿਤਸਰ, ਤਰਨ ਤਾਰਨ, ਗੁਰਦਾਸਪੁਰ, ਪਠਾਨਕੋਟ) | ਦੁਆਬੀ (ਬਿਆਸ-ਸਤਲੁਜ: ਜਲੰਧਰ, ਹੁਸ਼ਿਆਰਪੁਰ, ਕਪੂਰਥਲਾ, ਨਵਾਂਸ਼ਹਿਰ) | ਮਲਵਈ (ਸਤਲੁਜ ਦੇ ਦੱਖਣ) | ਪੁਆਧੀ (ਰੋਪੜ, ਮੋਹਾਲੀ, ਰਾਜਪੁਰਾ)।',
                '**ਗੁਰਮੁਖੀ ਅੰਕੜੇ:** ਪੈਂਤੀ ਅੱਖਰੀ = **35** | ਨਵੀਨ ਟੋਲੀ = **6** (`ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼`) | ਕੁੱਲ ਅੱਖਰ = **41** | ਕੁੱਲ ਵਰਗ = **8** | ਸ਼ੁੱਧ ਵਿਅੰਜਨ (`ਕ` ਤੋਂ `ੜ`) = **32** (ਨਵੀਨ ਟੋਲੀ ਸਮੇਤ 38)।',
                '**ਸਵਰ ਅਤੇ ਲਗਾਂ ਦਾ ਸੂਤਰ:** ਸਵਰ ਵਾਹਕ = **3 (`ੳ, ਅ, ੲ`)** | ਸਵਰ ਧੁਨੀਆਂ = **10** | ਲਗਾਂ = **10** (`ਮੁਕਤਾ` ਚਿੰਨ੍ਹ-ਰਹਿਤ + 9 ਚਿੰਨ੍ਹ) | **3–4–3 ਨਿਯਮ:** `ੳ(3) + ਅ(4) + ੲ(3) = 10`।',
                '**ਲਗਾਖਰ ਅਤੇ ਦੁੱਤ ਅੱਖਰ ਸੂਤਰ:** ਬਿੰਦੀ (`ਂ`) = **6 ਲਗਾਂ** | ਟਿੱਪੀ (`ੰ`) = **4 ਲਗਾਂ** | ਅੱਧਕ (`ੱ`) = **3 ਲਗਾਂ** | ਅਨੁਨਾਸਿਕ = **5 (`ਙ, ਞ, ਣ, ਨ, ਮ`)** | ਦੁੱਤ ਅੱਖਰ = **3 (`ਹ, ਰ, ਵ`)**।',
                '**ਪ੍ਰਮੁੱਖ ਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ:** `ਸਹਿਰ \\to ਸ਼ਹਿਰ`, `ਪੜਾਈ \\to ਪੜ੍ਹਾਈ`, `ਸੁਹਣਾ \\to ਸੋਹਣਾ`, `ਗਯਾਨ \\to ਗਿਆਨ`, `ਪਰੀਖਿਆ \\to ਪ੍ਰੀਖਿਆ`, `ਮੇਹਨਤ \\to ਮਿਹਨਤ`।'
            ],
            hi: [
                '**पूर्वी पंजाब की 4 उपभाषाएँ:** माझी (रावी-ब्यास: अमृतसर, तरन तारन, गुरदासपुर, पठानकोट) | दोआबी (ब्यास-सतलुज: जालंधर, होशियारपुर, कपूरथला, नवांशहर) | मलवई (सतलुज के दक्षिण) | पुआधी (रोपड़, मोहाली, राजपुरा)।',
                '**गुरमुखी आंकड़े:** पैंतीस अक्षरी = **35** | नवीन टोली = **6** (`ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼`) | कुल अक्षर = **41** | कुल वर्ग = **8**।',
                '**स्वर एवं लगां सूत्र:** स्वर वाहक = **3 (`ੳ, ਅ, ੲ`)** | स्वर ध्वनियाँ = **10** | लगां = **10** | **3–4–3 नियम:** `ੳ(3) + ਅ(4) + ੲ(3) = 10`।',
                '**लगाखर एवं दुत्त अक्षर सूत्र:** बिंदी (`ਂ`) = **6 लगां** | टिप्पी (`ੰ`) = **4 लगां** | अद्धक (`ੱ`) = **3 लगां** | अनुनासिक = **5 (`ਙ, ਞ, ਣ, ਨ, ਮ`)** | दुत्त अक्षर = **3 (`ਹ, ਰ, ਵ`)**।',
                '**प्रमुख शुद्ध वर्तनी:** `ਸਹਿਰ \\to ਸ਼ਹਿਰ`, `ਪੜਾਈ \\to ਪੜ੍ਹਾਈ`, `ਸੁਹਣਾ \\to ਸੋਹਣਾ`, `ਗਯਾਨ \\to ਗਿਆਨ`, `ਪਰੀਖਿਆ \\to ਪ੍ਰੀਖਿਆ`, `ਮੇਹਨਤ \\to ਮਿਹਨਤ`।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Punjabi has only 3 Vowel sounds because it has 3 vowel letters (`ੳ, ਅ, ੲ`). Correction: **`ੳ, ਅ, ੲ` are 3 Vowel Bearers (ਸਵਰ ਵਾਹਕ)**, whereas Punjabi has **10 Vowel Phonemes (10 ਸਵਰ ਧੁਨੀਆਂ: `ਅ, ਆ, ਇ, ਈ, ਉ, ਊ, ਏ, ਐ, ਓ, ਔ`)** formed by attaching the 10 Lagas to those 3 bearers.',
                'Misconception: All 6 letters of the Navin Toli (`ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼`) were created for Persian/Arabic loanwords. Correction: Only the first **5 letters (`ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼`)** represent Perso-Arabic sounds; the **6th letter (`ਲ਼`)** represents an indigenous Punjabi retroflex lateral sound and was added later by **Punjabi University, Patiala**.',
                'Misconception: Rupnagar (Ropar) and SAS Nagar (Mohali) speak Malwai dialect. Correction: Rupnagar (Ropar), SAS Nagar (Mohali), and Rajpura (eastern Patiala) belong to the **Puadhi (ਪੁਆਧੀ)** dialect zone.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਪੰਜਾਬੀ ਵਿੱਚ ਸਵਰ ਧੁਨੀਆਂ ਕੇਵਲ 3 ਹਨ ਕਿਉਂਕਿ `ੳ, ਅ, ੲ` ਤਿੰਨ ਅੱਖਰ ਹਨ। ਸੁਧਾਰ: **`ੳ, ਅ, ੲ` ਕੇਵਲ 3 ਸਵਰ ਵਾਹਕ ਹਨ**, ਜਦਕਿ ਇਨ੍ਹਾਂ ਨਾਲ 10 ਲਗਾਂ ਲੱਗ ਕੇ ਪੰਜਾਬੀ ਵਿੱਚ **10 ਸਵਰ ਧੁਨੀਆਂ (`ਅ, ਆ, ਇ, ਈ, ਉ, ਊ, ਏ, ਐ, ਓ, ਔ`)** ਬਣਦੀਆਂ ਹਨ।',
                'ਭੁਲੇਖਾ: ਨਵੀਨ ਟੋਲੀ ਦੇ ਸਾਰੇ 6 ਅੱਖਰ (`ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼`) ਫ਼ਾਰਸੀ ਭਾਸ਼ਾ ਦੀਆਂ ਧੁਨੀਆਂ ਲਈ ਬਣਾਏ ਗਏ ਸਨ। ਸੁਧਾਰ: ਪਹਿਲੇ **5 ਅੱਖਰ (`ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼`)** ਫ਼ਾਰਸੀ-ਅਰਬੀ ਧੁਨੀਆਂ ਲਈ ਬਣੇ ਸਨ, ਪਰ 6ਵਾਂ ਅੱਖਰ **`ਲ਼`** ਪੰਜਾਬੀ ਦੀ ਆਪਣੀ ਉਲਟ-ਜੀਭੀ ਧੁਨੀ ਲਈ **ਪੰਜਾਬੀ ਯੂਨੀਵਰਸਿਟੀ, ਪਟਿਆਲਾ** ਵੱਲੋਂ ਬਾਅਦ ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ।',
                'ਭੁਲੇਖਾ: ਰੂਪਨਗਰ (ਰੋਪੜ) ਅਤੇ ਮੋਹਾਲੀ (SAS Nagar) ਵਿੱਚ ਮਲਵਈ ਉਪਭਾਸ਼ਾ ਬੋਲੀ ਜਾਂਦੀ ਹੈ। ਸੁਧਾਰ: ਰੂਪਨਗਰ, ਮੋਹਾਲੀ ਅਤੇ ਰਾਜਪੁਰਾ (ਪੂਰਬੀ ਪਟਿਆਲਾ) ਵਿੱਚ **ਪੁਆਧੀ ਉਪਭਾਸ਼ਾ** ਬੋਲੀ ਜਾਂਦੀ ਹੈ।'
            ],
            hi: [
                'भ्रांति: पंजाबी में केवल 3 स्वर ध्वनियाँ हैं क्योंकि `ੳ, ਅ, ੲ` तीन अक्षर हैं। सुधार: **`ੳ, ਅ, ੲ` केवल 3 स्वर वाहक (Vowel Bearers) हैं**, जबकि इन पर 10 लगां लगने से पंजाबी में **10 स्वर ध्वनियाँ (`ਅ, ਆ, ਇ, ਈ, ਉ, ਊ, ਏ, ਐ, ਓ, ਔ`)** बनती हैं।',
                'भ्रांति: नवीन टोली के सभी 6 अक्षर (`ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼`) फ़ारसी ध्वनियों के लिए बनाए गए थे। सुधार: प्रथम **5 अक्षर (`ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼`)** फ़ारसी-अरबी ध्वनियों के लिए बने थे, जबकि 6वाँ अक्षर **`ਲ਼`** पंजाबी की अपनी मूर्धन्य ध्वनि के लिए **पंजाबी यूनिवर्सिटी, पटियाला** द्वारा जोड़ा गया।',
                'भ्रांति: रूपनगर (रोपड़) और मोहाली में मलवई उपभाषा बोली जाती है। सुधार: रूपनगर, मोहाली और राजपुरा में **पुआधी (ਪੁਆਧੀ) उपभाषा** बोली जाती है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: '[ETT Paper A Qualifying Pattern] Which dialect of Punjabi is spoken in the Bist Doab region (between River Beas and River Sutlej), and which districts are included in it?',
                    pa: '[ETT Paper A ਪੈਟਰਨ] ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ ਦਰਿਆਵਾਂ ਦੇ ਵਿਚਕਾਰਲੇ ਇਲਾਕੇ (ਬਿਸਤ ਦੁਆਬ) ਵਿੱਚ ਪੰਜਾਬੀ ਦੀ ਕਿਹੜੀ ਉਪਭਾਸ਼ਾ ਬੋਲੀ ਜਾਂਦੀ ਹੈ ਅਤੇ ਇਸ ਵਿੱਚ ਕਿਹੜੇ ਜ਼ਿਲ੍ਹੇ ਸ਼ਾਮਲ ਹਨ?',
                    hi: '[ETT Paper A पैटर्न] ब्यास और सतलुज नदियों के बीच के क्षेत्र (बिस्त दोआब) में पंजाबी की कौन-सी उपभाषा बोली जाती है और इसमें कौन-से जिले शामिल हैं?'
                },
                solutionSteps: {
                    en: [
                        'Identify the geographical river tract: The land between **Beas** and **Sutlej** is called **Bist Doab**.',
                        'Match the dialect: The dialect spoken in Bist Doab is **Doabi (ਦੁਆਬੀ)**.',
                        'List the 4 districts of Doaba: **Jalandhar, Hoshiarpur, Kapurthala, and Shaheed Bhagat Singh Nagar (Nawanshahr)**.'
                    ],
                    pa: [
                        'ਭੂਗੋਲਿਕ ਖਿੱਤੇ ਦੀ ਪਛਾਣ ਕਰੋ: **ਬਿਆਸ** ਅਤੇ **ਸਤਲੁਜ** ਦਰਿਆਵਾਂ ਦੇ ਵਿਚਕਾਰਲੇ ਇਲਾਕੇ ਨੂੰ **ਬਿਸਤ ਦੁਆਬ (ਦੁਆਬਾ)** ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
                        'ਉਪਭਾਸ਼ਾ ਦਾ ਮਿਲਾਨ ਕਰੋ: ਦੁਆਬੇ ਦੇ ਖਿੱਤੇ ਵਿੱਚ **ਦੁਆਬੀ ਉਪਭਾਸ਼ਾ** ਬੋਲੀ ਜਾਂਦੀ ਹੈ।',
                        'ਦੁਆਬੇ ਦੇ 4 ਜ਼ਿਲ੍ਹੇ: **ਜਲੰਧਰ, ਹੁਸ਼ਿਆਰਪੁਰ, ਕਪੂਰਥਲਾ ਅਤੇ ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ ਨਗਰ (ਨਵਾਂਸ਼ਹਿਰ)**।'
                    ],
                    hi: [
                        'भौगोलिक दोआब की पहचान करें: **ब्यास** और **सतलुज** नदियों के बीच के क्षेत्र को **बिस्त दोआब** कहा जाता है।',
                        'उपभाषा का मिलान करें: इस क्षेत्र में **दोआबी (ਦੁਆਬੀ)** उपभाषा बोली जाती है।',
                        'दोआबा के 4 जिले: **जालंधर, होशियारपुर, कपूरथला और शहीद भगत सिंह नगर (नवांशहर)**।'
                    ]
                },
                finalAnswer: {
                    en: 'Doabi (ਦੁਆਬੀ) dialect — spoken in Jalandhar, Hoshiarpur, Kapurthala, and SBS Nagar (Nawanshahr).',
                    pa: 'ਦੁਆਬੀ ਉਪਭਾਸ਼ਾ — ਜਲੰਧਰ, ਹੁਸ਼ਿਆਰਪੁਰ, ਕਪੂਰਥਲਾ ਅਤੇ ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ ਨਗਰ (ਨਵਾਂਸ਼ਹਿਰ)।',
                    hi: 'दोआबी (ਦੁਆਬੀ) उपभाषा — जालंधर, होशियारपुर, कपूरथला और शहीद भगत सिंह नगर (नवांशहर)।'
                }
            },
            {
                problem: {
                    en: '[ETT Paper A Orthography MCQ] Which of the following sets of Lagas can be used with the vowel bearer `ੳ` (Ura), and why is `ੳ` never used with Mukta?',
                    pa: '[ETT Paper A ਲਿਪੀ ਬੋਧ MCQ] ਸਵਰ ਵਾਹਕ `ੳ` (ਊੜਾ) ਨਾਲ ਹੇਠ ਲਿਖੀਆਂ ਵਿੱਚੋਂ ਕਿਹੜੀਆਂ ਲਗਾਂ ਲੱਗਦੀਆਂ ਹਨ, ਅਤੇ `ੳ` ਕਦੇ ਵੀ ਮੁਕਤਾ ਕਿਉਂ ਨਹੀਂ ਹੁੰਦਾ?',
                    hi: '[ETT Paper A लिपि बोध MCQ] स्वर वाहक `ੳ` (ऊड़ा) के साथ कौन-सी लगां लगती हैं, और `ੳ` कभी मुक्ता क्यों नहीं होता?'
                },
                solutionSteps: {
                    en: [
                        'Apply the **3–4–3 Vowel Bearer Rule**: `ੳ` takes 3 Lagas, `ਅ` takes 4 Lagas, `ੲ` takes 3 Lagas.',
                        'Identify the 3 rounded back-vowel Lagas that attach to `ੳ`: **Aunkar (`ੁ`), Dulainkar (`ੂ`), and Hora (`ੋ`)**, forming **`ਉ, ਊ, ਓ`**.',
                        'Note that `ੳ` cannot stand alone as a Mukta vowel because the inherent unrounded mid-central Mukta vowel sound is represented exclusively by **`ਅ`**.'
                    ],
                    pa: [
                        '**3–4–3 ਸਵਰ ਵਾਹਕ ਨਿਯਮ** ਲਾਗੂ ਕਰੋ: `ੳ` ਨਾਲ 3 ਲਗਾਂ, `ਅ` ਨਾਲ 4 ਲਗਾਂ ਅਤੇ `ੲ` ਨਾਲ 3 ਲਗਾਂ ਲੱਗਦੀਆਂ ਹਨ।',
                        '`ੳ` ਨਾਲ ਲੱਗਣ ਵਾਲੀਆਂ 3 ਲਗਾਂ ਹਨ: **ਔਂਕੜ (`ੁ`), ਦੁਲੈਂਕੜ (`ੂ`) ਅਤੇ ਹੋੜਾ (`ੋ`)**, ਜਿਨ੍ਹਾਂ ਨਾਲ **`ਉ, ਊ, ਓ`** ਬਣਦੇ ਹਨ।',
                        '`ੳ` ਕਦੇ ਵੀ ਮੁਕਤਾ (ਬਿਨਾਂ ਲਗ ਤੋਂ) ਨਹੀਂ ਆਉਂਦਾ ਕਿਉਂਕਿ ਮੁਕਤਾ ਸਵਰ ਧੁਨੀ ਕੇਵਲ **`ਅ` (ਐੜਾ)** ਦੁਆਰਾ ਪ੍ਰਗਟ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।'
                    ],
                    hi: [
                        '**3–4–3 स्वर वाहक नियम** लागू करें: `ੳ` के साथ 3, `ਅ` के साथ 4 और `ੲ` के साथ 3 लगां लगती हैं।',
                        '`ੳ` के साथ लगने वाली 3 लगां हैं: **औंकड़ (`ੁ`), दुलैंकड़ (`ੂ`) और होड़ा (`ੋ`)**, जिनसे **`ਉ, ਊ, ਓ`** बनते हैं।',
                        '`ੳ` कभी मुक्ता (बिना मात्रा के) प्रयुक्त नहीं होता क्योंकि मुक्ता स्वर ध्वनि केवल **`ਅ` (ऐड़ा)** से व्यक्त होती है।'
                    ]
                },
                finalAnswer: {
                    en: '`ੳ` takes 3 Lagas — Aunkar (`ੁ`), Dulainkar (`ੂ`), and Hora (`ੋ`) to form `ਉ, ਊ, ਓ`; Mukta belongs exclusively to `ਅ`.',
                    pa: '`ੳ` ਨਾਲ 3 ਲਗਾਂ — ਔਂਕੜ (`ੁ`), ਦੁਲੈਂਕੜ (`ੂ`) ਅਤੇ ਹੋੜਾ (`ੋ`) ਲੱਗਦੀਆਂ ਹਨ (`ਉ, ਊ, ਓ`); ਮੁਕਤਾ ਕੇਵਲ `ਅ` ਨਾਲ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
                    hi: '`ੳ` के साथ 3 लगां — औंकड़ (`ੁ`), दुलैंकड़ (`ੂ`) और होड़ा (`ੋ`) लगती हैं (`ਉ, ਊ, ਓ`); मुक्ता केवल `ਅ` के साथ प्रयुक्त होता है।'
                }
            }
        ],
        flashcards: [
            {
                id: 'ett-pa-a1-fc-1',
                question: {
                    en: 'Which dialect is the basis of Standard/Taksali Punjabi (ਟਕਸਾਲੀ ਪੰਜਾਬੀ) and in which 4 districts of Punjab is it spoken?',
                    pa: 'ਟਕਸਾਲੀ (ਮਿਆਰੀ) ਪੰਜਾਬੀ ਦਾ ਆਧਾਰ ਕਿਹੜੀ ਉਪਭਾਸ਼ਾ ਹੈ ਅਤੇ ਇਹ ਪੰਜਾਬ ਦੇ ਕਿਹੜੇ 4 ਜ਼ਿਲ੍ਹਿਆਂ ਵਿੱਚ ਬੋਲੀ ਜਾਂਦੀ ਹੈ?',
                    hi: 'टकसाली (मानक) पंजाबी का आधार कौन-सी उपभाषा है और यह पंजाब के किन 4 जिलों में बोली जाती है?'
                },
                answer: {
                    en: 'Majhi (ਮਾਝੀ) dialect — spoken in Amritsar, Tarn Taran, Gurdaspur, and Pathankot (Bari Doab between Ravi and Beas).',
                    pa: 'ਮਾਝੀ ਉਪਭਾਸ਼ਾ — ਅੰਮ੍ਰਿਤਸਰ, ਤਰਨ ਤਾਰਨ, ਗੁਰਦਾਸਪੁਰ ਅਤੇ ਪਠਾਨਕੋਟ (ਰਾਵੀ ਅਤੇ ਬਿਆਸ ਵਿਚਕਾਰ ਬਾਰੀ ਦੁਆਬ)।',
                    hi: 'माझी (ਮਾਝੀ) उपभाषा — अमृतसर, तरन तारन, गुरदासपुर और पठानकोट (रावी और ब्यास के बीच बारी दोआब)।'
                }
            },
            {
                id: 'ett-pa-a1-fc-2',
                question: {
                    en: 'How many total letters are in the modern Gurmukhi alphabet, and which 6 letters form the 8th Varg (Navin Toli)?',
                    pa: 'ਆਧੁਨਿਕ ਗੁਰਮੁਖੀ ਵਰਣਮਾਲਾ ਵਿੱਚ ਕੁੱਲ ਕਿੰਨੇ ਅੱਖਰ ਹਨ ਅਤੇ 8ਵੇਂ ਵਰਗ (ਨਵੀਨ ਟੋਲੀ) ਵਿੱਚ ਕਿਹੜੇ 6 ਅੱਖਰ ਹਨ?',
                    hi: 'आधुनिक गुरमुखी वर्णमाला में कुल कितने अक्षर हैं और 8वें वर्ग (नवीन टोली) में कौन-से 6 अक्षर हैं?'
                },
                answer: {
                    en: '41 letters total (35 Painti Akhari + 6 Navin Toli: ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼).',
                    pa: 'ਕੁੱਲ 41 ਅੱਖਰ (35 ਮੂਲ ਅੱਖਰ + 6 ਨਵੀਨ ਟੋਲੀ ਦੇ ਅੱਖਰ: ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼)।',
                    hi: 'कुल 41 अक्षर (35 मूल अक्षर + 6 नवीन टोली अक्षर: ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼)।'
                }
            },
            {
                id: 'ett-pa-a1-fc-3',
                question: {
                    en: 'State the 3–4–3 Laga distribution rule for the 3 Gurmukhi Vowel Bearers (`ੳ, ਅ, ੲ`).',
                    pa: 'ਗੁਰਮੁਖੀ ਦੇ 3 ਸਵਰ ਵਾਹਕਾਂ (`ੳ, ਅ, ੲ`) ਨਾਲ ਲੱਗਣ ਵਾਲੀਆਂ ਲਗਾਂ ਦਾ 3–4–3 ਨਿਯਮ ਦੱਸੋ।',
                    hi: 'गुरमुखी के 3 स्वर वाहकों (`ੳ, ਅ, ੲ`) के साथ लगने वाली लगां का 3–4–3 नियम बताइए।'
                },
                answer: {
                    en: '`ੳ` takes 3 Lagas (ਉ, ਊ, ਓ); `ਅ` takes 4 Lagas (ਅ, ਆ, ਐ, ਔ); `ੲ` takes 3 Lagas (ਇ, ਈ, ਏ) — totaling 10 Vowel Phonemes.',
                    pa: '`ੳ` ਨਾਲ 3 ਲਗਾਂ (ਉ, ਊ, ਓ); `ਅ` ਨਾਲ 4 ਲਗਾਂ (ਅ, ਆ, ਐ, ਔ); `ੲ` ਨਾਲ 3 ਲਗਾਂ (ਇ, ਈ, ਏ) — ਕੁੱਲ 10 ਸਵਰ ਧੁਨੀਆਂ।',
                    hi: '`ੳ` के साथ 3 लगां (ਉ, ਊ, ਓ); `ਅ` के साथ 4 लगां (ਅ, ਆ, ਐ, ਔ); `ੲ` के साथ 3 लगां (ਇ, ਈ, ਏ) — कुल 10 स्वर ध्वनियाँ।'
                }
            },
            {
                id: 'ett-pa-a1-fc-4',
                question: {
                    en: 'How many Lagas take Bindi (`ਂ`), Tippi (`ੰ`), and Addhak (`ੱ`) respectively in Gurmukhi?',
                    pa: 'ਗੁਰਮੁਖੀ ਵਿੱਚ ਬਿੰਦੀ (`ਂ`), ਟਿੱਪੀ (`ੰ`) ਅਤੇ ਅੱਧਕ (`ੱ`) ਕ੍ਰਮਵਾਰ ਕਿੰਨੀਆਂ-ਕਿੰਨੀਆਂ ਲਗਾਂ ਨਾਲ ਲੱਗਦੇ ਹਨ?',
                    hi: 'गुरमुखी में बिंदी (`ਂ`), टिप्पी (`ੰ`) और अद्धक (`ੱ`) क्रमशः कितनी-कितनी लगां के साथ लगते हैं?'
                },
                answer: {
                    en: 'Bindi (`ਂ`) with 6 Lagas (ਕੰਨਾ, ਬਿਹਾਰੀ, ਲਾਂ, ਦੁਲਾਵਾਂ, ਹੋੜਾ, ਕਨੌੜਾ); Tippi (`ੰ`) with 4 Lagas (ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ, ਦੁਲੈਂਕੜ); Addhak (`ੱ`) with 3 Lagas (ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ).',
                    pa: 'ਬਿੰਦੀ (`ਂ`) 6 ਲਗਾਂ ਨਾਲ (ਕੰਨਾ, ਬਿਹਾਰੀ, ਲਾਂ, ਦੁਲਾਵਾਂ, ਹੋੜਾ, ਕਨੌੜਾ); ਟਿੱਪੀ (`ੰ`) 4 ਲਗਾਂ ਨਾਲ (ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ, ਦੁਲੈਂਕੜ); ਅੱਧਕ (`ੱ`) 3 ਲਗਾਂ ਨਾਲ (ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ)।',
                    hi: 'बिंदी (`ਂ`) 6 लगां के साथ (ਕੰਨਾ, ਬਿਹਾਰੀ, ਲਾਂ, ਦੁਲਾਵਾਂ, ਹੋੜਾ, ਕਨੌੜਾ); टिप्पी (`ੰ`) 4 लगां के साथ (ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ, ਦੁਲੈਂਕੜ); अद्धक (`ੱ`) 3 लगां के साथ (ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ)।'
                }
            },
            {
                id: 'ett-pa-a1-fc-5',
                question: {
                    en: 'Which 5 letters are Nasal Consonants (ਅਨੁਨਾਸਿਕ ਵਿਅੰਜਨ) and which 3 letters are Dutt Akhar (ਦੁੱਤ ਅੱਖਰ) in Gurmukhi?',
                    pa: 'ਗੁਰਮੁਖੀ ਵਿੱਚ 5 ਅਨੁਨਾਸਿਕ (ਨਾਸਕੀ) ਵਿਅੰਜਨ ਅਤੇ 3 ਦੁੱਤ ਅੱਖਰ (ਪੈਰ ਵਿੱਚ ਪੈਣ ਵਾਲੇ ਅੱਖਰ) ਕਿਹੜੇ ਹਨ?',
                    hi: 'गुरमुखी में 5 अनुनासिक व्यंजन और 3 दुत्त अक्षर (पैर में लगने वाले अक्षर) कौन-से हैं?'
                },
                answer: {
                    en: '5 Nasal Consonants: `ਙ, ਞ, ਣ, ਨ, ਮ` (where ਙ, ਞ, ਣ never start a word). 3 Dutt Akhar: `ਹ ( ੍ਹ ), ਰ ( ੍ਰ ), ਵ ( ्व )`.',
                    pa: '5 ਅਨੁਨਾਸਿਕ ਵਿਅੰਜਨ: `ਙ, ਞ, ਣ, ਨ, ਮ` (ਙ, ਞ, ਣ ਤੋਂ ਸ਼ਬਦ ਸ਼ੁਰੂ ਨਹੀਂ ਹੁੰਦਾ)। 3 ਦੁੱਤ ਅੱਖਰ: `ਹ ( ੍ਹ ), ਰ ( ੍ਰ ), ਵ ( ्व )`।',
                    hi: '5 अनुनासिक व्यंजन: `ਙ, ਞ, ਣ, ਨ, ਮ`। 3 दुत्त अक्षर: `ਹ ( ੍ਹ ), ਰ ( ੍ਰ ), ਵ ( ्व )`।'
                }
            },
            {
                id: 'ett-pa-a1-fc-6',
                question: {
                    en: 'Which dialect uses pronouns and postpositions like `ਹਮ, ਥਮ, ਮ੍ਹਾਰਾ, ਥਾਰਾ, ਗੈਲ (ਨਾਲ), ਬੀਚ (ਵਿੱਚ)` and is spoken in Rupnagar (Ropar), Mohali, and Rajpura?',
                    pa: 'ਕਿਹੜੀ ਉਪਭਾਸ਼ਾ ਵਿੱਚ `ਹਮ, ਥਮ, ਮ੍ਹਾਰਾ, ਥਾਰਾ, ਗੈਲ (ਨਾਲ), ਬੀਚ (ਵਿੱਚ)` ਸ਼ਬਦ ਵਰਤੇ ਜਾਂਦੇ ਹਨ ਅਤੇ ਇਹ ਰੋਪੜ, ਮੋਹਾਲੀ ਤੇ ਰਾਜਪੁਰਾ ਵਿੱਚ ਬੋਲੀ ਜਾਂਦੀ ਹੈ?',
                    hi: 'किस उपभाषा में `ਹਮ, ਥਮ, ਮ੍ਹਾਰਾ, ਥਾਰਾ, ਗੈਲ (ਨਾਲ), ਬੀਚ (ਵਿੱਚ)` शब्दों का प्रयोग होता है और यह रोपड़, मोहाली तथा राजपुरा में बोली जाती है?'
                },
                answer: {
                    en: 'Puadhi (ਪੁਆਧੀ) dialect.',
                    pa: 'ਪੁਆਧੀ ਉਪਭਾਸ਼ਾ।',
                    hi: 'पुआधी (ਪੁਆਧੀ) उपभाषा।'
                }
            }
        ]
    },

    // =========================================================================
    // 2. ETT PAPER A PUNJABI II: GRAMMAR, WORD CLASSES, VOCABULARY & PUNCTUATION
    // =========================================================================
    {
        topicId: 'ett-paper-a-punjabi-grammar-vocabulary-idioms',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 100,
            editorialNote: 'Level B -> I -> A blueprint for ETT Paper A Qualifying Punjabi II: 8 Word Classes (Vikari & Avikari), Noun (5), Pronoun (6), Adjective (5), Verb & Causative Forms (Prernarthak Kirya), Adverbs (8), Postpositions (3), Conjunctions (2), Interjections (9), Word Formation (Agetar/Pichhetar/Samasi), Vocabulary (Synonyms, Antonyms, Polysemous, One-Word), and 13 Punctuation Marks.'
        },
        bookRefs: [
            {
                title: 'ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਅਤੇ ਲੇਖ ਰਚਨਾ (Modern Punjabi Grammar)',
                author: 'ਪੰਜਾਬ ਸਕੂਲ ਸਿੱਖਿਆ ਬੋਰਡ (PSEB), ਮੋਹਾਲੀ (Class 9–12)',
                chapter: 'ਸ਼ਬਦ ਬੋਧ (ਨਾਂਵ, ਪੜਨਾਂਵ, ਵਿਸ਼ੇਸ਼ਣ, ਕਿਰਿਆ), ਸ਼ਬਦ ਰਚਨਾ, ਸ਼ਬਦ ਭੰਡਾਰ ਅਤੇ ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ',
                relevance: 'Direct source for ETT Paper A & B questions on word classes, causative verbs, prefixes/suffixes, and punctuation.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Class 6–8 Foundation]
1. **8 Word Classes in Punjabi (ਸ਼ਬਦ ਭੇਦ — 8 ਪ੍ਰਕਾਰ):**
   - Based on inflection for gender/number/case (**ਰੂਪ ਦੇ ਆਧਾਰ 'ਤੇ**), words are divided into **2 categories**:
     1. **Vikari Shabd (ਵਿਕਾਰੀ ਸ਼ਬਦ — Inflected/Variable, 4 types):** Change form according to gender, number, or case — **ਨਾਂਵ (Noun), ਪੜਨਾਂਵ (Pronoun), ਵਿਸ਼ੇਸ਼ਣ (Adjective), ਕਿਰਿਆ (Verb)**.
     2. **Avikari Shabd (ਅਵਿਕਾਰੀ ਸ਼ਬਦ — Uninflected/Invariant, 4 types):** Never change form — **ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ (Adverb), ਸੰਬੰਧਕ (Postposition), ਯੋਜਕ (Conjunction), ਵਿਸਮਕ (Interjection)**.
2. **Noun (ਨਾਂਵ — 5 Types) & Pronoun (ਪੜਨਾਂਵ — 6 Types):**
   - **5 Types of Noun (ਨਾਂਵ):**
     1. **ਖਾਸ / ਨਿੱਜਵਾਚਕ ਨਾਂਵ (Proper Noun):** \`ਅੰਮ੍ਰਿਤਸਰ, ਸਤਲੁਜ, ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ, ਹਿਮਾਲਿਆ\`
     2. **ਆਮ / ਜਾਤੀਵਾਚਕ ਨਾਂਵ (Common Noun):** \`ਮੁੰਡਾ, ਕੁੜੀ, ਸ਼ਹਿਰ, ਦਰਿਆ, ਕਿਤਾਬ, ਪਹਾੜ\`
     3. **ਇਕੱਠਵਾਚਕ ਨਾਂਵ (Collective Noun):** \`ਜਮਾਤ, ਫ਼ੌਜ, ਇੱਜੜ, ਡਾਰ, ਸਭਾ, ਟੋਲੀ, ਜਥਾ\`
     4. **ਵਸਤੂਵਾਚਕ ਨਾਂਵ (Material Noun):** Measured/weighed substances — \`ਸੋਨਾ, ਚਾਂਦੀ, ਪਾਣੀ, ਦੁੱਧ, ਤੇਲ, ਕਣਕ, ਰੇਤ\`
     5. **ਭਾਵਵਾਚਕ ਨਾਂਵ (Abstract Noun):** Felt, neither seen nor touched — \`ਮਿਠਾਸ, ਬਚਪਨ, ਗ਼ਰੀਬੀ, ਖੁਸ਼ੀ, ਸੱਚਾਈ, ਪਿਆਰ\`
   - **6 Types of Pronoun (ਪੜਨਾਂਵ):**
     1. **ਪੁਰਖਵਾਚਕ (Personal — 3 subtypes):** **ਉੱਤਮ ਪੁਰਖ (1st Person):** \`ਮੈਂ, ਅਸੀਂ, ਮੇਰਾ, ਸਾਡਾ\`; **ਮੱਧਮ ਪੁਰਖ (2nd Person):** \`ਤੂੰ, ਤੁਸੀਂ, ਤੇਰਾ, ਤੁਹਾਡਾ\`; **ਅਨਯ ਪੁਰਖ (3rd Person):** \`ਉਹ, ਇਹ, ਉਨ੍ਹਾਂ\`.
     2. **ਨਿਸ਼ਚੇਵਾਚਕ (Demonstrative):** \`ਇਹ, ਉਹ, ਆਹ, ਔਹ\` (pointing out without noun).
     3. **ਅਨਿਸ਼ਚੇਵਾਚਕ (Indefinite):** \`ਕੋਈ, ਕੁਝ, ਸਰਬੱਤ, ਕਈ, ਸਭ, ਵਿਰਲਾ\`.
     4. **ਸੰਬੰਧਵਾਚਕ (Relative):** \`ਜੋ-ਸੋ, ਜਿਹੜਾ, ਜਿਸ, ਜਿਨ੍ਹਾਂ\`.
     5. **ਪ੍ਰਸ਼ਨਵਾਚਕ (Interrogative):** \`ਕੌਣ, ਕੀ, ਕਿਸ, ਕਿਹੜਾ\`.
     6. **ਨਿਜਵਾਚਕ (Reflexive):** **\`ਆਪ\`** (used with the subject to refer back to the subject, e.g., \`ਮੈਂ ਆਪ ਜਾਵਾਂਗਾ\`, \`ਉਹ ਆਪ ਆਇਆ\`).

---

### [Level I: Intermediate — Class 9–10 Core & ETT Paper A Matrix]
1. **Adjective (ਵਿਸ਼ੇਸ਼ਣ — 5 Types) & Verb (ਕਿਰਿਆ) with Causative Forms:**
   - **5 Types of Adjective (ਵਿਸ਼ੇਸ਼ਣ):**
     1. **ਗੁਣਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ (Qualitative):** Has **3 degrees of comparison (ਤੁਲਨਾਤਮਕ ਅਵਸਥਾਵਾਂ)** — **ਸਧਾਰਨ** (\`ਚੰਗਾ\`), **ਅਧਿਕਤਰ** (\`ਇਸ ਤੋਂ ਚੰਗਾ\`), **ਅਧਿਕਤਮ** (\`ਸਭ ਤੋਂ ਚੰਗਾ\`).
     2. **ਸੰਖਿਆਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ (Numeral — 7 subtypes):** ਸਧਾਰਨ (\`ਇੱਕ, ਦੋ\`), ਕਰਮਵਾਚੀ (\`ਪਹਿਲਾ, ਦੂਜਾ\`), ਸਮੁੱਚਤਾਵਾਚੀ (\`ਦੋਵੇਂ, ਚਾਰੇ\`), ਕਸਰੀ (\`ਅੱਧਾ, ਪੌਣਾ, ਸਵਾ, ਢਾਈ\`), ਗੁਣਵਾਚੀ (\`ਦੁੱਗਣਾ, ਚੌਗੁਣਾ\`), ਨਿਖੇੜਵਾਚੀ (\`ਇੱਕ-ਇੱਕ, ਦੋ-ਦੋ\`), ਅਨਿਸ਼ਚਿਤ (\`ਕਈ, ਕੁਝ\`).
     3. **ਪਰਿਮਾਣਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ (Quantitative):** \`ਥੋੜ੍ਹਾ ਪਾਣੀ, ਦੋ ਕਿੱਲੋ ਖੰਡ, ਬਹੁਤ ਦੁੱਧ\`.
     4. **ਨਿਸ਼ਚੇਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ (Demonstrative Adjective):** Followed immediately by a noun (\`ਇਹ ਘਰ ਮੇਰਾ ਹੈ\` vs Pronoun \`ਇਹ ਮੇਰਾ ਘਰ ਹੈ\`).
     5. **ਪੜਨਾਂਵੀ ਵਿਸ਼ੇਸ਼ਣ (Pronominal Adjective):** \`ਕਿਹੜੀ ਕਿਤਾਬ, ਮੇਰਾ ਭਰਾ, ਤੁਹਾਡਾ ਸਕੂਲ\`.
   - **Verb (ਕਿਰਿਆ):** **ਅਕਰਮਕ ਕਿਰਿਆ (Intransitive — no object, e.g., \`ਬੱਚਾ ਹੱਸਦਾ ਹੈ\`)** vs **ਸਕਰਮਕ ਕਿਰਿਆ (Transitive — has object, e.g., \`ਬੱਚਾ ਸੇਬ ਖਾਂਦਾ ਹੈ\`)**.
   - **Causative Verbs (ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ — High-Yield ETT Table):**
     | ਸਧਾਰਨ ਕਿਰਿਆ (Base Verb) | ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ (1st Causative) | ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ (2nd Causative) |
     |---|---|---|
     | **ਪੜ੍ਹਨਾ** (to read) | **ਪੜ੍ਹਾਉਣਾ** (to teach) | **ਪੜ੍ਹਵਾਉਣਾ** (to get someone taught) |
     | **ਲਿਖਣਾ** (to write) | **ਲਿਖਾਉਣਾ** (to dictate/make write) | **ਲਿਖਵਾਉਣਾ** (to get written via 3rd person) |
     | **ਕਰਨਾ** (to do) | **ਕਰਾਉਣਾ** (to assist/make do) | **ਕਰਵਾਉਣਾ** (to get done by someone) |
     | **ਸੁਣਨਾ** (to hear) | **ਸੁਣਾਉਣਾ** (to narrate/tell) | **ਸੁਣਵਾਉਣਾ** (to get narrated) |
     | **ਖਾਣਾ** (to eat) | **ਖਵਾਉਣਾ** (to feed) | **ਖੁਆਉਣਾ** (to get fed) |
     | **ਪੀਣਾ** (to drink) | **ਪਿਆਉਣਾ** (to make drink) | **ਪਿਲਾਉਣਾ / ਪਿਆਉਣਾ** (to get someone to give drink) |
     | **ਉੱਠਣਾ** (to rise) | **ਉਠਾਉਣਾ** (to wake/lift) | **ਉਠਵਾਉਣਾ** (to get lifted) |
2. **Avikari Word Classes (ਅਵਿਕਾਰੀ ਸ਼ਬਦ):**
   - **ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ (Adverb — 8 types):** ਕਾਲਵਾਚਕ (\`ਅੱਜ, ਕੱਲ੍ਹ, ਸਵੇਰੇ\`), ਸਥਾਨਵਾਚਕ (\`ਇੱਥੇ, ਉੱਥੇ, ਅੰਦਰ, ਬਾਹਰ\`), ਪ੍ਰਕਾਰਵਾਚਕ (\`ਹੌਲੀ, ਤੇਜ਼, ਇਉਂ\`), ਪਰਿਮਾਣਵਾਚਕ (\`ਥੋੜ੍ਹਾ, ਬਹੁਤਾ, ਘੱਟ\`), ਸੰਖਿਆਵਾਚਕ (\`ਇੱਕ-ਇੱਕ ਕਰਕੇ, ਘੜੀ-ਮੁੜੀ\`), ਨਿਰਣਾਵਾਚਕ (\`ਹਾਂ ਜੀ, ਬਿਲਕੁਲ, ਨਹੀਂ\`), ਕਾਰਨਵਾਚਕ (\`ਇਸ ਲਈ, ਕਿਉਂਕਿ\`), ਨਿਸ਼ਚੇਵਾਚਕ (\`ਜ਼ਰੂਰ, ਬੇਸ਼ੱਕ\`).
   - **ਸੰਬੰਧਕ (Postposition — 3 types):** **ਪੂਰਨ ਸੰਬੰਧਕ** (stand alone work alone: \`ਨੇ, ਨੂੰ, ਤੋਂ, ਦਾ, ਦੇ, ਦੀ, ਦੀਆਂ\`), **ਅਪੂਰਨ ਸੰਬੰਧਕ** (cannot function without \`ਦੇ/ਤੋਂ\`: \`ਉੱਤੇ, ਹੇਠਾਂ, ਨੇੜੇ, ਦੂਰ, ਬਾਹਰ, ਅੰਦਰ, ਸਾਹਮਣੇ\`), **ਦੁਬਾਜਰੇ ਸੰਬੰਧਕ** (work both ways: \`ਵਿੱਚ, ਨਾਲ, ਲਈ, ਬਿਨਾਂ, ਰਾਹੀਂ\`).
   - **ਯੋਜਕ (Conjunction — 2 types):** **ਸਮਾਨ ਯੋਜਕ** (\`ਅਤੇ, ਤੇ, ਪਰ, ਸਗੋਂ, ਜਾਂ, ਇਸ ਲਈ\`) vs **ਅਧੀਨ ਯੋਜਕ** (\`ਕਿ, ਕਿਉਂਕਿ, ਜੇ...ਤਾਂ, ਭਾਵੇਂ...ਫਿਰ ਵੀ, ਜਦੋਂ\`).
   - **ਵਿਸਮਕ (Interjection — 9 types):** ਪ੍ਰਸ਼ੰਸਾਵਾਚਕ (\`ਸ਼ਾਬਾਸ਼! ਵਾਹ!\`), ਸ਼ੋਕਵਾਚਕ (\`ਹਾਏ! ਅਫ਼ਸੋਸ!\`), ਹੈਰਾਨੀਵਾਚਕ (\`ਹੈਂ! ਅੱਛਾ!\`), ਇੱਛਾਵਾਚਕ (\`ਕਾਸ਼! ਜੀਵੇ!\`), ਸੰਬੋਧਨੀ (\`ਓਏ! ਨੀ! ਵੇ!\`), ਸਤਿਕਾਰਵਾਚਕ (\`ਜੀ ਆਇਆਂ ਨੂੰ! ਧੰਨ ਭਾਗ!\`), ਫਿਟਕਾਰਵਾਚਕ (\`ਦੁਰ ਫਿੱਟੇ ਮੂੰਹ! ਲੱਖ ਲਾਹਨਤ!\`), ਅਸੀਸਵਾਚਕ (\`ਜੁਗ-ਜੁਗ ਜੀਵੇਂ! ਭਲਾ ਹੋਵੇ!\`), ਸੂਚਨਾਵਾਚਕ (\`ਖ਼ਬਰਦਾਰ! ਹੁਸ਼ਿਆਰ!\`).

---

### [Level A: Advanced — Word Formation, Vocabulary & 13 Punctuation Marks]
1. **Word Formation (ਸ਼ਬਦ ਰਚਨਾ): Mool (ਮੂਲ) vs Rachit (ਰਚਿਤ — ਅਗੇਤਰ, ਪਿਛੇਤਰ, ਸਮਾਸੀ):**
   - **ਅਗੇਤਰ (Prefixes):** \`ਅਣ\` (\`ਅਣਥੱਕ, ਅਣਪੜ੍ਹ\`), \`ਬੇ\` (\`ਬੇਅਕਲ, ਬੇਈਮਾਨ\`), \`ਸਹਿ\` (\`ਸਹਿਯੋਗ, ਸਹਿਪਾਠੀ\`), \`ਉਪ\` (\`ਉਪਭਾਸ਼ਾ, ਉਪਨਾਮ\`), \`ਮਹਾਂ\` (\`ਮਹਾਂਵੀਰ, ਮਹਾਂਪੁਰਖ\`), \`ਦੁਰ\` (\`ਦੁਰਘਟਨਾ, ਦੁਰਗਤੀ\`), \`ਨਿ\` (\`ਨਿਡਰ, ਨਿਹੱਥਾ\`).
   - **ਪਿਛੇਤਰ (Suffixes):** \`ਆਈ\` (\`ਪੜ੍ਹਾਈ, ਲਿਖਾਈ, ਮਿਠਿਆਈ\`), \`ਵਾਨ\` (\`ਗੱਡੀਵਾਨ, ਧਨਵਾਨ\`), \`ਦਾਰ\` (\`ਈਮਾਨਦਾਰ, ਜ਼ਿੰਮੇਵਾਰ/ਥਾਣੇਦਾਰ\`), \`ਪਣ\` (\`ਬਚਪਨ, ਪਾਗਲਪਣ\`), \`ਗਾਰ\` (\`ਮਦਦਗਾਰ, ਗੁਨਾਹਗਾਰ\`), \`ਕਾਰ\` (\`ਕਲਾਕਾਰ, ਸਾਹਿਤਕਾਰ\`).
   - **ਸਮਾਸੀ ਸ਼ਬਦ (Compound Words):** Joined by hyphen (\`ਜੋੜਨੀ -\`), e.g., \`ਦਿਨ-ਰਾਤ, ਮਾਤਾ-ਪਿਤਾ, ਲੋਕ-ਗੀਤ, ਹੱਥ-ਖੱਡੀ, ਸਵੈ-ਜੀਵਨੀ\`.
2. **Vocabulary (ਸ਼ਬਦ ਭੰਡਾਰ) — Synonyms, Antonyms, Polysemous & One-Word Substitution:**
   - **ਬਹੁ-ਅਰਥਕ ਸ਼ਬਦ (Polysemous Words):**
     - **\`ਵੱਟ\`:** 1. ਖੇਤ ਦੀ ਬੰਨ੍ਹੀ (ridge), 2. ਗੁੱਸਾ/ਗਰਮੀ (anger/sultriness), 3. ਕੱਪੜੇ ਦਾ ਸਲਵੱਟ (crease), 4. ਰੱਸੀ ਵੱਟਣਾ (twisting).
     - **\`ਹਾਰ\`:** 1. ਫੁੱਲਾਂ ਦੀ ਮਾਲਾ (garland), 2. ਪਰਾਜੈ/ਜਿੱਤ ਦਾ ਉਲਟ (defeat), 3. ਥੱਕ ਜਾਣਾ (exhaustion).
     - **\`ਉੱਤਰ\`:** 1. ਜਵਾਬ (answer), 2. ਇੱਕ ਦਿਸ਼ਾ (North direction), 3. ਹੇਠਾਂ ਆਉਣਾ (descend).
     - **\`ਕੱਚਾ\`:** 1. ਅਣਪੱਕਿਆ ਫਲ (unripe), 2. ਮਿੱਟੀ ਦਾ ਘਰ/ਰਾਹ (unpaved), 3. ਘੱਟ ਉਬਲਿਆ ਦੁੱਧ (unboiled).
   - **ਬਹੁਤੇ ਸ਼ਬਦਾਂ ਦੀ ਥਾਂ ਇੱਕ ਸ਼ਬਦ (One-Word Substitution):**
     - \`ਜੋ ਕਦੇ ਨਾ ਥੱਕੇ\` = **ਅਣਥੱਕ** | \`ਜਿੱਥੇ ਸਿੱਕੇ ਘੜੇ ਜਾਣ\` = **ਟਕਸਾਲ** | \`ਪਿੰਡ ਦੀ ਸਾਂਝੀ ਬੈਠਣ ਵਾਲੀ ਥਾਂ\` = **ਸੱਥ** | \`ਪਿੰਡ ਦੀ ਸਾਂਝੀ ਜ਼ਮੀਨ\` = **ਸ਼ਾਮਲਾਟ** | \`ਜੋ ਰੱਬ ਨੂੰ ਮੰਨੇ\` = **ਆਸਤਕ** | \`ਜੋ ਰੱਬ ਨੂੰ ਨਾ ਮੰਨੇ\` = **ਨਾਸਤਕ** | \`ਆਪਣੀ ਜੀਵਨੀ ਆਪ ਲਿਖਣੀ\` = **ਸਵੈ-ਜੀਵਨੀ** | \`ਚਾਰ ਪੈਰਾਂ ਵਾਲਾ ਜਾਨਵਰ\` = **ਚੌਪਾਇਆ**.
3. **All 13 Punctuation Marks (13 ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ):**
   | ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ (Name) | Symbol | Primary Usage in Punjabi |
   |---|---|---|
   | **1. ਡੰਡੀ (Full Stop)** | **।** | At the end of a declarative/imperative sentence |
   | **2. ਪ੍ਰਸ਼ਨ ਚਿੰਨ੍ਹ (Question Mark)** | **?** | At the end of an interrogative sentence |
   | **3. ਵਿਸਮਿਕ ਚਿੰਨ੍ਹ (Exclamation)** | **!** | After interjections (\`ਵਾਹ!\`, \`ਹਾਏ!\`, \`ਖ਼ਬਰਦਾਰ!\`) |
   | **4. ਕੌਮਾ (Comma)** | **,** | Short pause between coordinates (\`ਰਾਮ, ਸ਼ਾਮ ਅਤੇ ਮੋਹਨ\`) |
   | **5. ਬਿੰਦੀ ਕੌਮਾ (Semicolon)** | **;** | Longer pause than comma between related clauses |
   | **6. ਦੁਬਿੰਦੀ (Colon)** | **:** | Before explanation, dialogue, or abbreviation expansion |
   | **7. ਦੁਬਿੰਦੀ ਡੈਸ਼ (Colon-Dash)** | **:-** | Before giving examples or a numbered list (\`ਜਿਵੇਂ:-\`) |
   | **8. ਡੈਸ਼ (Dash)** | **—** | Apposition or dramatic pause |
   | **9. ਜੋੜਨੀ (Hyphen)** | **-** | Joining compound words (\`ਸਮਾਸੀ ਸ਼ਬਦ: ਦਿਨ-ਰਾਤ, ਦੁੱਖ-ਸੁੱਖ\`) |
   | **10. ਪੁੱਠੇ ਕੌਮੇ (Inverted Commas)** | **‘ ’ / “ ”** | **Single \`‘ ’\`** for book/poem titles (\`‘ਜਪੁਜੀ ਸਾਹਿਬ’\`); **Double \`“ ”\`** for exact direct speech |
   | **11. ਬ੍ਰੈਕਟ (Brackets)** | **( ) / [ ]** | Clarifying meaning or numbering |
   | **12. ਛੁੱਟ ਮਰੋੜੀ (Apostrophe)** | **’** | Showing omitted letter (\`ਵਿੱਚੋਂ \\to ’ਚੋਂ\`, \`ਉੱਤੇ \\to ’ਤੇ\`) |
   | **13. ਬਿੰਦੀ (Period/Dot)** | **.** | Abbreviations (\`ਡਾ., ਪ੍ਰੋ., ਬੀ.ਏ., ਐੱਮ.ਏ.\`) and decimals |`,
            pa: `### [Level B: Basic — Class 6–8 ਬੁਨਿਆਦੀ ਪੱਧਰ]
1. **ਸ਼ਬਦ ਭੇਦ (8 ਪ੍ਰਕਾਰ — ਵਿਕਾਰੀ ਅਤੇ ਅਵਿਕਾਰੀ):**
   - ਰੂਪ ਦੇ ਆਧਾਰ 'ਤੇ ਸ਼ਬਦ **2 ਤਰ੍ਹਾਂ** ਦੇ ਹੁੰਦੇ ਹਨ:
     1. **ਵਿਕਾਰੀ ਸ਼ਬਦ (4):** ਜੋ ਲਿੰਗ, ਵਚਨ, ਕਾਰਕ ਅਨੁਸਾਰ ਰੂਪ ਬਦਲ ਲੈਂਦੇ ਹਨ — **ਨਾਂਵ, ਪੜਨਾਂਵ, ਵਿਸ਼ੇਸ਼ਣ, ਕਿਰਿਆ**।
     2. **ਅਵਿਕਾਰੀ ਸ਼ਬਦ (4):** ਜੋ ਕਦੇ ਰੂਪ ਨਹੀਂ ਬਦਲਦੇ — **ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ, ਸੰਬੰਧਕ, ਯੋਜਕ, ਵਿਸਮਕ**।
2. **ਨਾਂਵ (5 ਕਿਸਮਾਂ) ਅਤੇ ਪੜਨਾਂਵ (6 ਕਿਸਮਾਂ):**
   - **ਨਾਂਵ ਦੀਆਂ 5 ਕਿਸਮਾਂ:** 1. **ਖਾਸ/ਨਿੱਜਵਾਚਕ** (\`ਅੰਮ੍ਰਿਤਸਰ, ਸਤਲੁਜ\`), 2. **ਆਮ/ਜਾਤੀਵਾਚਕ** (\`ਮੁੰਡਾ, ਸ਼ਹਿਰ\`), 3. **ਇਕੱਠਵਾਚਕ** (\`ਜਮਾਤ, ਫ਼ੌਜ, ਇੱਜੜ, ਡਾਰ\`), 4. **ਵਸਤੂਵਾਚਕ** (\`ਸੋਨਾ, ਪਾਣੀ, ਕਣਕ, ਤੇਲ\`), 5. **ਭਾਵਵਾਚਕ** (\`ਮਿਠਾਸ, ਬਚਪਨ, ਗ਼ਰੀਬੀ, ਖੁਸ਼ੀ\`)।
   - **ਪੜਨਾਂਵ ਦੀਆਂ 6 ਕਿਸਮਾਂ:** 1. **ਪੁਰਖਵਾਚਕ** (ਉੱਤਮ ਪੁਰਖ: \`ਮੈਂ, ਅਸੀਂ\`; ਮੱਧਮ ਪੁਰਖ: \`ਤੂੰ, ਤੁਸੀਂ\`; ਅਨਯ ਪੁਰਖ: \`ਉਹ, ਇਹ\`), 2. **ਨਿਸ਼ਚੇਵਾਚਕ** (\`ਇਹ, ਉਹ\`), 3. **ਅਨਿਸ਼ਚੇਵਾਚਕ** (\`ਕੋਈ, ਕੁਝ, ਸਰਬੱਤ, ਸਭ\`), 4. **ਸੰਬੰਧਵਾਚਕ** (\`ਜੋ-ਸੋ, ਜਿਹੜਾ\`), 5. **ਪ੍ਰਸ਼ਨਵਾਚਕ** (\`ਕੌਣ, ਕੀ, ਕਿਸ\`), 6. **ਨਿਜਵਾਚਕ** (**\`ਆਪ\`** — ਕਰਤਾ ਦੇ ਨਾਲ ਆ ਕੇ ਕਰਤਾ ਦੀ ਥਾਂ ਵਰਤੇ ਜਾਣ ਵਾਲੇ, ਜਿਵੇਂ \`ਮੈਂ ਆਪ ਜਾਵਾਂਗਾ\`)।

---

### [Level I: Intermediate — Class 9–10 ਮੱਧ ਪੱਧਰ]
1. **ਵਿਸ਼ੇਸ਼ਣ (5 ਕਿਸਮਾਂ) ਅਤੇ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ:**
   - **ਵਿਸ਼ੇਸ਼ਣ ਦੀਆਂ 5 ਕਿਸਮਾਂ:** 1. **ਗੁਣਵਾਚਕ** (3 ਅਵਸਥਾਵਾਂ: ਸਧਾਰਨ, ਅਧਿਕਤਰ, ਅਧਿਕਤਮ), 2. **ਸੰਖਿਆਵਾਚਕ** (7 ਉਪ-ਭੇਦ), 3. **ਪਰਿਮਾਣਵਾਚਕ**, 4. **ਨਿਸ਼ਚੇਵਾਚਕ**, 5. **ਪੜਨਾਂਵੀ ਵਿਸ਼ੇਸ਼ਣ**।
   - **ਕਿਰਿਆ (ਅਕਰਮਕ ਬਨਾਮ ਸਕਰਮਕ) ਅਤੇ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ ਸਾਰਣੀ:**
     | ਸਧਾਰਨ ਕਿਰਿਆ | ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ | ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ |
     |---|---|---|
     | **ਪੜ੍ਹਨਾ** | **ਪੜ੍ਹਾਉਣਾ** | **ਪੜ੍ਹਵਾਉਣਾ** |
     | **ਲਿਖਣਾ** | **ਲਿਖਾਉਣਾ** | **ਲਿਖਵਾਉਣਾ** |
     | **ਕਰਨਾ** | **ਕਰਾਉਣਾ** | **ਕਰਵਾਉਣਾ** |
     | **ਸੁਣਨਾ** | **ਸੁਣਾਉਣਾ** | **ਸੁਣਵਾਉਣਾ** |
     | **ਖਾਣਾ** | **ਖਵਾਉਣਾ** | **ਖੁਆਉਣਾ** |
2. **ਅਵਿਕਾਰੀ ਸ਼ਬਦ ਭੇਦ:**
   - **ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ (8 ਕਿਸਮਾਂ):** ਕਾਲਵਾਚਕ, ਸਥਾਨਵਾਚਕ, ਪ੍ਰਕਾਰਵਾਚਕ, ਪਰਿਮਾਣਵਾਚਕ, ਸੰਖਿਆਵਾਚਕ, ਨਿਰਣਾਵਾਚਕ, ਕਾਰਨਵਾਚਕ, ਨਿਸ਼ਚੇਵਾਚਕ।
   - **ਸੰਬੰਧਕ (3 ਕਿਸਮਾਂ):** **ਪੂਰਨ ਸੰਬੰਧਕ** (\`ਨੇ, ਨੂੰ, ਤੋਂ, ਦਾ, ਦੇ, ਦੀ\`), **ਅਪੂਰਨ ਸੰਬੰਧਕ** (\`ਉੱਤੇ, ਹੇਠਾਂ, ਨੇੜੇ, ਦੂਰ, ਸਾਹਮਣੇ\`), **ਦੁਬਾਜਰੇ ਸੰਬੰਧਕ** (\`ਵਿੱਚ, ਨਾਲ, ਲਈ, ਬਿਨਾਂ\`)।
   - **ਯੋਜਕ (2 ਕਿਸਮਾਂ):** **ਸਮਾਨ ਯੋਜਕ** (\`ਅਤੇ, ਤੇ, ਪਰ, ਜਾਂ, ਸਗੋਂ\`) ਅਤੇ **ਅਧੀਨ ਯੋਜਕ** (\`ਕਿ, ਕਿਉਂਕਿ, ਜੇ...ਤਾਂ, ਭਾਵੇਂ\`)।
   - **ਵਿਸਮਕ (9 ਕਿਸਮਾਂ):** ਪ੍ਰਸ਼ੰਸਾਵਾਚਕ, ਸ਼ੋਕਵਾਚਕ, ਹੈਰਾਨੀਵਾਚਕ, ਇੱਛਾਵਾਚਕ, ਸੰਬੋਧਨੀ, ਸਤਿਕਾਰਵਾਚਕ, ਫਿਟਕਾਰਵਾਚਕ, ਅਸੀਸਵਾਚਕ, ਸੂਚਨਾਵਾਚਕ।

---

### [Level A: Advanced — ਸ਼ਬਦ ਰਚਨਾ, ਸ਼ਬਦ ਭੰਡਾਰ ਅਤੇ 13 ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ]
1. **ਸ਼ਬਦ ਰਚਨਾ:** **ਅਗੇਤਰ** (\`ਅਣਥੱਕ, ਬੇਅਕਲ, ਸਹਿਯੋਗ, ਉਪਭਾਸ਼ਾ, ਨਿਡਰ\`), **ਪਿਛੇਤਰ** (\`ਪੜ੍ਹਾਈ, ਗੱਡੀਵਾਨ, ਈਮਾਨਦਾਰ, ਬਚਪਨ, ਮਦਦਗਾਰ, ਕਲਾਕਾਰ\`) ਅਤੇ **ਸਮਾਸੀ ਸ਼ਬਦ** (\`ਦਿਨ-ਰਾਤ, ਮਾਤਾ-ਪਿਤਾ\`)।
2. **ਬਹੁ-ਅਰਥਕ ਸ਼ਬਦ ਅਤੇ ਬਹੁਤੇ ਸ਼ਬਦਾਂ ਦੀ ਥਾਂ ਇੱਕ ਸ਼ਬਦ:**
   - **\`ਵੱਟ\`** (ਖੇਤ ਦੀ ਬੰਨ੍ਹੀ, ਗੁੱਸਾ, ਸਲਵੱਟ), **\`ਹਾਰ\`** (ਮਾਲਾ, ਪਰਾਜੈ), **\`ਉੱਤਰ\`** (ਜਵਾਬ, ਦਿਸ਼ਾ, ਹੇਠਾਂ ਉਤਰਨਾ)।
   - \`ਜਿੱਥੇ ਸਿੱਕੇ ਘੜੇ ਜਾਣ\` = **ਟਕਸਾਲ** | \`ਪਿੰਡ ਦੀ ਸਾਂਝੀ ਥਾਂ\` = **ਸੱਥ / ਸ਼ਾਮਲਾਟ** | \`ਜੋ ਕਦੇ ਨਾ ਥੱਕੇ\` = **ਅਣਥੱਕ**।
3. **13 ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ:**
   - **ਡੰਡੀ (\`।\`)**, **ਪ੍ਰਸ਼ਨ ਚਿੰਨ੍ਹ (\`?\`)**, **ਵਿਸਮਿਕ ਚਿੰਨ੍ਹ (\`!\`)**, **ਕੌਮਾ (\`,\`)**, **ਬਿੰਦੀ ਕੌਮਾ (\`;\`)**, **ਦੁਬਿੰਦੀ (\`:\`)**, **ਦੁਬਿੰਦੀ ਡੈਸ਼ (\`:-\`)**, **ਡੈਸ਼ (\`—\`)**, **ਜੋੜਨੀ (\`-\`)** (ਸਮਾਸੀ ਸ਼ਬਦਾਂ ਵਿੱਚ), **ਪੁੱਠੇ ਕੌਮੇ (\`‘ ’\` ਪੁਸਤਕ/ਰਚਨਾ ਦੇ ਨਾਂ ਲਈ; \`“ ”\` ਕਿਸੇ ਦੇ ਕਹੇ ਬੋਲਾਂ ਲਈ)**, **ਬ੍ਰੈਕਟ (\`( )\`)**, **ਛੁੱਟ ਮਰੋੜੀ (\`’\` — ਅੱਖਰ ਛੱਡਣ ਸਮੇਂ ਜਿਵੇਂ \`’ਚੋਂ\`)**, **ਬਿੰਦੀ (\`.\`)** (ਸੰਖੇਪ ਰੂਪ ਜਿਵੇਂ \`ਡਾ., ਪ੍ਰੋ.\`)।`,
            hi: `### [Level B: Basic — Class 6–8 आधारभूत स्तर]
1. **शब्द भेद (8 प्रकार — विकारी और अविकारी):**
   - **विकारी शब्द (4):** **ਨਾਂਵ (संज्ञा — 5 भेद), ਪੜਨਾਂਵ (सर्वनाम — 6 भेद), ਵਿਸ਼ੇਸ਼ਣ (विशेषण — 5 भेद), ਕਿਰਿਆ (क्रिया)**।
   - **अविकारी शब्द (4):** **ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ (8 भेद), ਸੰਬੰਧਕ (3 भेद: पूर्ण, अपूर्ण, दुबाजरे), ਯੋਜਕ (2 भेद: समान, अधीन), ਵਿਸਮਕ (9 भेद)**।

---

### [Level I: Intermediate — Class 9–10 मध्यम स्तर]
1. **प्रेरणार्थक क्रिया (ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ) तालिका:**
   - \`ਪੜ੍ਹਨਾ \\to ਪੜ੍ਹਾਉਣਾ (प्रथम) \\to ਪੜ੍ਹਵਾਉਣਾ (द्वितीय)\`
   - \`ਲਿਖਣਾ \\to ਲਿਖਾਉਣਾ \\to ਲਿਖਵਾਉਣਾ\`
   - \`ਖਾਣਾ \\to ਖਵਾਉਣਾ \\to ਖੁਆਉਣਾ\`

---

### [Level A: Advanced — शब्द रचना, शब्द भंडार एवं 13 विश्राम चिह्न]
1. **अगेतर (उपसर्ग) व पिछेतर (प्रत्यय):** \`ਅਣਥੱਕ, ਬੇਈਮਾਨ, ਉਪਭਾਸ਼ਾ, ਪੜ੍ਹਾਈ, ਈਮਾਨਦਾਰ, ਕਲਾਕਾਰ\`।
2. **बहु-अर्थक शब्द व एक शब्द:** **\`ਵੱਟ\`** (मेड़, क्रोध, सलवट), **\`ਹਾਰ\`** (माला, पराजय); \`ਜਿੱਥੇ ਸਿੱਕੇ ਘੜੇ ਜਾਣ\` = **ਟਕਸਾਲ**।
3. **13 विश्राम चिह्न:** **ਡੰਡੀ (\`।\`)**, **ਪ੍ਰਸ਼ਨ ਚਿੰਨ੍ਹ (\`?\`)**, **ਵਿਸਮਿਕ (\`!\`)**, **ਕੌਮਾ (\`,\`)**, **ਬਿੰਦੀ ਕੌਮਾ (\`;\`)**, **ਦੁਬਿੰਦੀ (\`:\`)**, **ਦੁਬਿੰਦੀ ਡੈਸ਼ (\`:-\`)**, **ਡੈਸ਼ (\`—\`)**, **ਜੋੜਨੀ (\`-\`)**, **ਪੁੱਠੇ ਕੌਮੇ (\`‘ ’ / “ ”\`)**, **ਬ੍ਰੈਕਟ (\`( )\`)**, **ਛੁੱਟ ਮਰੋੜੀ (\`’\`)**, **ਬਿੰਦੀ (\`.\`)**।`
        },
        keyNotes: {
            en: [
                '**8 Word Classes (ਸ਼ਬਦ ਭੇਦ) & Subtype Counts:** **Vikari (4):** Noun (**5**), Pronoun (**6**), Adjective (**5**), Verb (**2** main: Intransitive/Transitive). **Avikari (4):** Adverb (**8**), Postposition (**3**), Conjunction (**2**), Interjection (**9**).',
                '**Nijvachak Pronoun Trap (`ਆਪ`):** In `ਮੈਂ ਆਪ ਜਾਵਾਂਗਾ` or `ਉਹ ਆਪ ਆਇਆ`, **`ਆਪ`** is a **ਨਿਜਵਾਚਕ ਪੜਨਾਂਵ (Reflexive Pronoun)** because it accompanies the subject to emphasize self-action.',
                '**Causative Verb (ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ) Pattern:** Base verb (`ਪੜ੍ਹਨਾ`) $\\to$ **1st Causative (`ਪੜ੍ਹਾਉਣਾ` — subject makes someone act directly)** $\\to$ **2nd Causative (`ਪੜ੍ਹਵਾਉਣਾ` — subject gets the work done through a third agent)**.',
                '**Postpositions (ਸੰਬੰਧਕ — 3 Types):** **ਪੂਰਨ ਸੰਬੰਧਕ** (`ਨੇ, ਨੂੰ, ਤੋਂ, ਦਾ`) stand alone; **ਅਪੂਰਨ ਸੰਬੰਧਕ** (`ਉੱਤੇ, ਹੇਠਾਂ, ਨੇੜੇ, ਦੂਰ`) require `ਦੇ/ਤੋਂ`; **ਦੁਬਾਜਰੇ ਸੰਬੰਧਕ** (`ਵਿੱਚ, ਨਾਲ, ਲਈ, ਬਿਨਾਂ`) function both with and without `ਦੇ`.',
                '**Chhutt Marodi (`’`) vs Jodni (`-`):** **ਛੁੱਟ ਮਰੋੜੀ (`’`)** marks omitted characters in contracted forms (`ਵਿੱਚੋਂ \\to ’ਚੋਂ`, `ਉੱਤੇ \\to ’ਤੇ`), whereas **ਜੋੜਨੀ (`-`)** joins compound words (`ਦਿਨ-ਰਾਤ, ਮਾਤਾ-ਪਿਤਾ`).',
                '**Single (`‘ ’`) vs Double (`“ ”`) Inverted Commas:** **Single (`‘ ’`)** encloses titles of books/poems (`‘ਜਪੁਜੀ ਸਾਹਿਬ’`) or nicknames, whereas **Double (`“ ”`)** encloses verbatim spoken quotations.'
            ],
            pa: [
                '**8 ਸ਼ਬਦ ਭੇਦ ਅਤੇ ਉਪ-ਭੇਦ:** **ਵਿਕਾਰੀ (4):** ਨਾਂਵ (**5**), ਪੜਨਾਂਵ (**6**), ਵਿਸ਼ੇਸ਼ਣ (**5**), ਕਿਰਿਆ (**2**)। **ਅਵਿਕਾਰੀ (4):** ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ (**8**), ਸੰਬੰਧਕ (**3**), ਯੋਜਕ (**2**), ਵਿਸਮਕ (**9**)।',
                '**ਨਿਜਵਾਚਕ ਪੜਨਾਂਵ ਦੀ ਪਛਾਣ (`ਆਪ`):** ਜਿਹੜਾ ਪੜਨਾਂਵ ਕਰਤਾ ਦੇ ਨਾਲ ਆ ਕੇ ਉਸੇ ਦੀ ਥਾਂ ਵਰਤਿਆ ਜਾਵੇ (ਜਿਵੇਂ `ਮੈਂ ਆਪ ਜਾਵਾਂਗਾ`), ਉਸ ਨੂੰ **ਨਿਜਵਾਚਕ ਪੜਨਾਂਵ** ਕਹਿੰਦੇ ਹਨ।',
                '**ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ ਦਾ ਨਿਯਮ:** ਸਧਾਰਨ ਕਿਰਿਆ (`ਪੜ੍ਹਨਾ`) $\\to$ **ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ (`ਪੜ੍ਹਾਉਣਾ`)** $\\to$ **ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ (`ਪੜ੍ਹਵਾਉਣਾ` — ਕਿਸੇ ਤੀਜੇ ਵਿਅਕਤੀ ਰਾਹੀਂ ਕੰਮ ਕਰਵਾਉਣਾ)**।',
                '**ਸੰਬੰਧਕ ਦੀਆਂ 3 ਕਿਸਮਾਂ:** **ਪੂਰਨ** (`ਨੇ, ਨੂੰ, ਤੋਂ, ਦਾ`), **ਅਪੂਰਨ** (`ਉੱਤੇ, ਹੇਠਾਂ, ਨੇੜੇ, ਦੂਰ`), ਅਤੇ **ਦੁਬਾਜਰੇ** (`ਵਿੱਚ, ਨਾਲ, ਲਈ, ਬਿਨਾਂ`)।',
                '**ਛੁੱਟ ਮਰੋੜੀ (`’`) ਬਨਾਮ ਜੋੜਨੀ (`-`):** **ਛੁੱਟ ਮਰੋੜੀ (`’`)** ਸ਼ਬਦ ਦੇ ਛੱਡੇ ਹੋਏ ਅੱਖਰਾਂ ਨੂੰ ਦਰਸਾਉਂਦੀ ਹੈ (`ਵਿੱਚੋਂ \\to ’ਚੋਂ`), ਜਦਕਿ **ਜੋੜਨੀ (`-`)** ਸਮਾਸੀ ਸ਼ਬਦਾਂ (`ਦਿਨ-ਰਾਤ`) ਨੂੰ ਜੋੜਦੀ ਹੈ।',
                '**ਇਕਹਿਰੇ (`‘ ’`) ਬਨਾਮ ਦੂਹਰੇ (`“ ”`) ਪੁੱਠੇ ਕੌਮੇ:** **ਇਕਹਿਰੇ ਪੁੱਠੇ ਕੌਮੇ (`‘ ’`)** ਪੁਸਤਕ, ਕਵਿਤਾ ਜਾਂ ਉਪਨਾਮ ਲਈ ਅਤੇ **ਦੂਹਰੇ ਪੁੱਠੇ ਕੌਮੇ (`“ ”`)** ਕਿਸੇ ਦੇ ਕਹੇ ਸ਼ਬਦਾਂ ਨੂੰ ਹੂ-ਬ-ਹੂ ਲਿਖਣ ਲਈ ਵਰਤੇ ਜਾਂਦੇ ਹਨ।'
            ],
            hi: [
                '**8 शब्द भेद एवं उप-भेद:** **विकारी (4):** संज्ञा (**5**), सर्वनाम (**6**), विशेषण (**5**), क्रिया (**2**)। **अविकारी (4):** क्रिया विशेषण (**8**), संबंधक (**3**), योजक (**2**), विस्मयादिबोधक (**9**)।',
                '**निजवाचक सर्वनाम (`ਆਪ`):** कर्ता के साथ आकर स्वयं का बोध कराने वाला शब्द (जैसे `ਮੈਂ ਆਪ ਜਾਵਾਂਗਾ`) **ਨਿਜਵਾਚਕ ਪੜਨਾਂਵ** कहलाता है।',
                '**प्रेरणार्थक क्रिया नियम:** साधारण क्रिया (`ਪੜ੍ਹਨਾ`) $\\to$ **प्रथम प्रेरणार्थक (`ਪੜ੍ਹਾਉਣਾ`)** $\\to$ **द्वितीय प्रेरणार्थक (`ਪੜ੍ਹਵਾਉਣਾ`)**।',
                '**संबंधक के 3 भेद:** **पूर्ण** (`ਨੇ, ਨੂੰ, ਤੋਂ, ਦਾ`), **अपूर्ण** (`ਉੱਤੇ, ਹੇਠਾਂ, ਨੇੜੇ, ਦੂਰ`), तथा **दुबाजरे** (`ਵਿੱਚ, ਨਾਲ, ਲਈ, ਬਿਨਾਂ`)।',
                '**छुट मरोड़ी (`’`) बनाम जोड़नी (`-`):** **ਛੁੱਟ ਮਰੋੜੀ (`’`)** लुप्त अक्षरों के लिए (`ਵਿੱਚੋਂ \\to ’ਚੋਂ`) और **ਜੋੜਨੀ (`-`)** सामासिक शब्दों (`ਦਿਨ-ਰਾਤ`) के लिए प्रयुक्त होती है।',
                '**इकहरे (`‘ ’`) बनाम दोहरे (`“ ”`) उद्धरण चिह्न:** **इकहरे (`‘ ’`)** पुस्तक/रचना के नाम के लिए तथा **दोहरे (`“ ”`)** प्रत्यक्ष कथन के लिए प्रयुक्त होते हैं।'
            ]
        },
        quickRevisionSheet: {
            en: [
                '**Subtype Numbers Formula:** Noun = **5** | Pronoun = **6** | Adjective = **5** | Verb = **2** | Adverb = **8** | Postposition = **3** | Conjunction = **2** | Interjection = **9** | Punctuation Marks = **13**.',
                '**5 Noun Types:** ਖਾਸ (ਅੰਮ੍ਰਿਤਸਰ) | ਆਮ (ਮੁੰਡਾ) | ਇਕੱਠਵਾਚਕ (ਜਮਾਤ, ਫ਼ੌਜ, ਇੱਜੜ, ਡਾਰ) | ਵਸਤੂਵਾਚਕ (ਸੋਨਾ, ਪਾਣੀ, ਕਣਕ) | ਭਾਵਵਾਚਕ (ਮਿਠਾਸ, ਬਚਪਨ, ਗ਼ਰੀਬੀ).',
                '**Causative Verb Triplets:** `ਪੜ੍ਹਨਾ-ਪੜ੍ਹਾਉਣਾ-ਪੜ੍ਹਵਾਉਣਾ` | `ਲਿਖਣਾ-ਲਿਖਾਉਣਾ-ਲਿਖਵਾਉਣਾ` | `ਸੁਣਨਾ-ਸੁਣਾਉਣਾ-ਸੁਣਵਾਉਣਾ` | `ਖਾਣਾ-ਖਵਾਉਣਾ-ਖੁਆਉਣਾ`.',
                '**Key One-Word Substitutions:** Mint = **ਟਕਸਾਲ** | Never tires = **ਅਣਥੱਕ** | Village gathering place = **ਸੱਥ** | Village common land = **ਸ਼ਾਮਲਾਟ**.',
                '**Punctuation Quick Check:** `:-` = **ਦੁਬਿੰਦੀ ਡੈਸ਼** | `-` = **ਜੋੜਨੀ** | `’` = **ਛੁੱਟ ਮਰੋੜੀ** | `.` = **ਬਿੰਦੀ** (for `ਡਾ., ਪ੍ਰੋ.`).'
            ],
            pa: [
                '**ਉਪ-ਭੇਦਾਂ ਦੀ ਗਿਣਤੀ ਦਾ ਸੂਤਰ:** ਨਾਂਵ = **5** | ਪੜਨਾਂਵ = **6** | ਵਿਸ਼ੇਸ਼ਣ = **5** | ਕਿਰਿਆ = **2** | ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ = **8** | ਸੰਬੰਧਕ = **3** | ਯੋਜਕ = **2** | ਵਿਸਮਕ = **9** | ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ = **13**।',
                '**ਨਾਂਵ ਦੀਆਂ 5 ਕਿਸਮਾਂ:** ਖਾਸ (ਅੰਮ੍ਰਿਤਸਰ) | ਆਮ (ਮੁੰਡਾ) | ਇਕੱਠਵਾਚਕ (ਜਮਾਤ, ਫ਼ੌਜ, ਇੱਜੜ, ਡਾਰ) | ਵਸਤੂਵਾਚਕ (ਸੋਨਾ, ਪਾਣੀ, ਕਣਕ) | ਭਾਵਵਾਚਕ (ਮਿਠਾਸ, ਬਚਪਨ, ਗ਼ਰੀਬੀ)।',
                '**ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ ਤਿਕੜੀ:** `ਪੜ੍ਹਨਾ-ਪੜ੍ਹਾਉਣਾ-ਪੜ੍ਹਵਾਉਣਾ` | `ਲਿਖਣਾ-ਲਿਖਾਉਣਾ-ਲਿਖਵਾਉਣਾ` | `ਸੁਣਨਾ-ਸੁਣਾਉਣਾ-ਸੁਣਵਾਉਣਾ` | `ਖਾਣਾ-ਖਵਾਉਣਾ-ਖੁਆਉਣਾ`।',
                '**ਬਹੁਤੇ ਸ਼ਬਦਾਂ ਦੀ ਥਾਂ ਇੱਕ ਸ਼ਬਦ:** ਸਿੱਕੇ ਘੜਨ ਵਾਲੀ ਥਾਂ = **ਟਕਸਾਲ** | ਜੋ ਕਦੇ ਨਾ ਥੱਕੇ = **ਅਣਥੱਕ** | ਪਿੰਡ ਦੀ ਸਾਂਝੀ ਬੈਠਕ = **ਸੱਥ** | ਪਿੰਡ ਦੀ ਸਾਂਝੀ ਜ਼ਮੀਨ = **ਸ਼ਾਮਲਾਟ**।',
                '**ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ ਪਛਾਣ:** `:-` = **ਦੁਬਿੰਦੀ ਡੈਸ਼** | `-` = **ਜੋੜਨੀ** | `’` = **ਛੁੱਟ ਮਰੋੜੀ** | `.` = **ਬਿੰਦੀ** (`ਡਾ., ਪ੍ਰੋ.`)।'
            ],
            hi: [
                '**उप-भेदों की संख्या का सूत्र:** संज्ञा = **5** | सर्वनाम = **6** | विशेषण = **5** | क्रिया = **2** | क्रिया विशेषण = **8** | संबंधक = **3** | योजक = **2** | विस्मयादिबोधक = **9** | विश्राम चिह्न = **13**।',
                '**संज्ञा के 5 भेद:** ख़ास (अमृतसर) | आम (लड़का) | इकठवाचक (कक्षा, सेना, रेवड़) | वस्तुवाचक (सोना, पानी, गेहूँ) | भाववाचक (मिठास, बचपन, गरीबी)।',
                '**प्रेरणार्थक क्रिया त्रिक:** `ਪੜ੍ਹਨਾ-ਪੜ੍ਹਾਉਣਾ-ਪੜ੍ਹਵਾਉਣਾ` | `ਲਿਖਣਾ-ਲਿਖਾਉਣਾ-ਲਿਖਵਾਉਣਾ` | `ਸੁਣਨਾ-ਸੁਣਾਉਣਾ-ਸੁਣਵਾਉਣਾ` | `ਖਾਣਾ-ਖਵਾਉਣਾ-ਖੁਆਉਣਾ`।',
                '**वाक्यांश के लिए एक शब्द:** सिक्के ढालने का स्थान = **ਟਕਸਾਲ** | जो कभी न थके = **ਅਣਥੱਕ** | गाँव की चौपाल = **ਸੱਥ** | गाँव की साझी भूमि = **ਸ਼ਾਮਲਾਟ**।',
                '**विश्राम चिह्न पहचान:** `:-` = **ਦੁਬਿੰਦੀ ਡੈਸ਼** | `-` = **ਜੋੜਨੀ** | `’` = **ਛੁੱਟ ਮਰੋੜੀ** | `.` = **ਬਿੰਦੀ** (`ਡਾ., ਪ੍ਰੋ.`)।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: In `ਇਹ ਘਰ ਮੇਰਾ ਹੈ` and `ਇਹ ਮੇਰਾ ਘਰ ਹੈ`, the word `ਇਹ` is a Demonstrative Pronoun (ਨਿਸ਼ਚੇਵਾਚਕ ਪੜਨਾਂਵ) in both sentences. Correction: In **`ਇਹ ਘਰ ਮੇਰਾ ਹੈ`**, `ਇਹ` comes immediately before the noun `ਘਰ` to qualify it, so it is a **ਨਿਸ਼ਚੇਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ (Demonstrative Adjective)**; in **`ਇਹ ਮੇਰਾ ਘਰ ਹੈ`**, `ਇਹ` stands in place of the noun, so it is a **ਨਿਸ਼ਚੇਵਾਚਕ ਪੜਨਾਂਵ (Demonstrative Pronoun)**.',
                'Misconception: `ਫ਼ੌਜ` (Army) and `ਜਮਾਤ` (Class) are Common Nouns (ਆਮ ਨਾਂਵ). Correction: Both denote a group or collection of individuals as a single unit, so they are **ਇਕੱਠਵਾਚਕ ਨਾਂਵ (Collective Nouns)**.',
                'Misconception: Full forms of abbreviations like `ਡਾ.` or `ਪ੍ਰੋ.` use Dandi (`।`). Correction: Abbreviations in Gurmukhi always use **Bindi (`.`)**, never Dandi (`।`).'
            ],
            pa: [
                'ਭੁਲੇਖਾ: `ਇਹ ਘਰ ਮੇਰਾ ਹੈ` ਅਤੇ `ਇਹ ਮੇਰਾ ਘਰ ਹੈ` ਦੋਵਾਂ ਵਾਕਾਂ ਵਿੱਚ `ਇਹ` ਨਿਸ਼ਚੇਵਾਚਕ ਪੜਨਾਂਵ ਹੈ। ਸੁਧਾਰ: **`ਇਹ ਘਰ ਮੇਰਾ ਹੈ`** ਵਿੱਚ `ਇਹ` ਨਾਂਵ (`ਘਰ`) ਦੇ ਬਿਲਕੁਲ ਅੱਗੇ ਆ ਕੇ ਉਸ ਵੱਲ ਇਸ਼ਾਰਾ ਕਰਦਾ ਹੈ, ਇਸ ਲਈ ਇਹ **ਨਿਸ਼ਚੇਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ** ਹੈ; ਜਦਕਿ **`ਇਹ ਮੇਰਾ ਘਰ ਹੈ`** ਵਿੱਚ `ਇਹ` **ਨਿਸ਼ਚੇਵਾਚਕ ਪੜਨਾਂਵ** ਹੈ।',
                'ਭੁਲੇਖਾ: `ਫ਼ੌਜ, ਜਮਾਤ, ਇੱਜੜ, ਡਾਰ` ਆਮ ਨਾਂਵ (ਜਾਤੀਵਾਚਕ ਨਾਂਵ) ਹਨ। ਸੁਧਾਰ: ਇਹ ਸਮੂਹ ਜਾਂ ਇਕੱਠ ਨੂੰ ਪ੍ਰਗਟ ਕਰਦੇ ਹਨ, ਇਸ ਲਈ ਇਹ **ਇਕੱਠਵਾਚਕ ਨਾਂਵ** ਹਨ।',
                'ਭੁਲੇਖਾ: ਸੰਖੇਪ ਸ਼ਬਦਾਂ (ਜਿਵੇਂ `ਡਾ, ਪ੍ਰੋ`) ਦੇ ਪਿੱਛੇ ਡੰਡੀ (`।`) ਲੱਗਦੀ ਹੈ। ਸੁਧਾਰ: ਸੰਖੇਪ ਸ਼ਬਦਾਂ (`ਡਾ., ਪ੍ਰੋ., ਬੀ.ਏ.`) ਦੇ ਪਿੱਛੇ ਹਮੇਸ਼ਾ **ਬਿੰਦੀ (`.`)** ਲੱਗਦੀ ਹੈ।'
            ],
            hi: [
                'भ्रांति: `ਇਹ ਘਰ ਮੇਰਾ ਹੈ` और `ਇਹ ਮੇਰਾ ਘਰ ਹੈ` दोनों वाक्यों में `ਇਹ` निश्चयवाचक सर्वनाम है। सुधार: **`ਇਹ ਘਰ ਮੇਰਾ ਹੈ`** में `ਇਹ` संज्ञा (`ਘਰ`) से ठीक पहले आकर उसकी विशेषता बताता है, अतः यह **ਨਿਸ਼ਚੇਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ (सार्वनामिक विशेषण)** है; जबकि **`ਇਹ ਮੇਰਾ ਘਰ ਹੈ`** में यह **ਨਿਸ਼ਚੇਵਾਚਕ ਪੜਨਾਂਵ** है।',
                'भ्रांति: `ਫ਼ੌਜ, ਜਮਾਤ, ਇੱਜੜ, ਡਾਰ` जातिवाचक संज्ञा हैं। सुधार: ये समूह का बोध कराते हैं, अतः **ਇਕੱਠਵਾਚਕ ਨਾਂਵ (समूहवाचक संज्ञा)** हैं।',
                'भ्रांति: संक्षिप्त शब्दों (जैसे `ਡਾ, ਪ੍ਰੋ`) के पीछे डंडी (`।`) लगती है। सुधार: संक्षिप्त रूपों (`ਡਾ., ਪ੍ਰੋ., ਬੀ.ਏ.`) के बाद सदैव **बिंदी (`.`)** लगती है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: '[ETT Paper A & B Grammar MCQ] Identify the First Causative (ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ) and Second Causative (ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ) verb forms of the base verb `ਲਿਖਣਾ` (to write), and classify the verb in the sentence: "ਅਧਿਆਪਕ ਨੇ ਮੋਹਨ ਤੋਂ ਚਿੱਠੀ ਲਿਖਵਾਈ।"',
                    pa: '[ETT Paper A & B ਵਿਆਕਰਨ MCQ] ਸਧਾਰਨ ਕਿਰਿਆ `ਲਿਖਣਾ` ਦੀ ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ ਅਤੇ ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ ਦੱਸੋ, ਅਤੇ ਵਾਕ "ਅਧਿਆਪਕ ਨੇ ਮੋਹਨ ਤੋਂ ਚਿੱਠੀ ਲਿਖਵਾਈ" ਵਿੱਚ ਕਿਰਿਆ ਦੀ ਕਿਸਮ ਪਛਾਣੋ।',
                    hi: '[ETT Paper A & B व्याकरण MCQ] साधारण क्रिया `ਲਿਖਣਾ` की प्रथम प्रेरणार्थक और द्वितीय प्रेरणार्थक क्रिया बताइए, तथा वाक्य "ਅਧਿਆਪਕ ਨੇ ਮੋਹਨ ਤੋਂ ਚਿੱਠੀ ਲਿਖਵਾਈ" में क्रिया का भेद पहचानिए।'
                },
                solutionSteps: {
                    en: [
                        'Base Verb (ਸਧਾਰਨ ਕਿਰਿਆ): **`ਲਿਖਣਾ`** (the subject writes himself).',
                        'First Causative (ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ): **`ਲਿਖਾਉਣਾ`** (the subject dictates/helps someone write directly).',
                        'Second Causative (ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ): **`ਲਿਖਵਾਉਣਾ`** (the subject gets the letter written through another person).',
                        'In `"ਅਧਿਆਪਕ ਨੇ ਮੋਹਨ ਤੋਂ ਚਿੱਠੀ ਲਿਖਵਾਈ"`, the teacher gets the letter written by Mohan (`ਲਿਖਵਾਈ`), so it is a **ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ (Second Causative Verb)**.'
                    ],
                    pa: [
                        'ਸਧਾਰਨ ਕਿਰਿਆ: **`ਲਿਖਣਾ`** (ਕਰਤਾ ਆਪ ਲਿਖਦਾ ਹੈ)।',
                        'ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ: **`ਲਿਖਾਉਣਾ`** (ਕਰਤਾ ਆਪ ਕੋਲ ਬੈਠ ਕੇ ਲਿਖਾਉਂਦਾ ਹੈ)।',
                        'ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ: **`ਲਿਖਵਾਉਣਾ`** (ਕਰਤਾ ਕਿਸੇ ਤੀਜੇ ਵਿਅਕਤੀ ਤੋਂ ਕੰਮ ਕਰਵਾਉਂਦਾ ਹੈ)।',
                        'ਵਾਕ `"ਅਧਿਆਪਕ ਨੇ ਮੋਹਨ ਤੋਂ ਚਿੱਠੀ ਲਿਖਵਾਈ"` ਵਿੱਚ `ਲਿਖਵਾਈ` ਸ਼ਬਦ **ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ** ਹੈ।'
                    ],
                    hi: [
                        'साधारण क्रिया: **`ਲਿਖਣਾ`** (कर्ता स्वयं लिखता है)।',
                        'प्रथम प्रेरणार्थक क्रिया: **`ਲਿਖਾਉਣਾ`**।',
                        'द्वितीय प्रेरणार्थक क्रिया: **`ਲਿਖਵਾਉਣਾ`** (कर्ता किसी अन्य से कार्य करवाता है)।',
                        'वाक्य `"ਅਧਿਆਪਕ ਨੇ ਮੋਹਨ ਤੋਂ ਚਿੱਠੀ ਲਿਖਵਾਈ"` में `ਲਿਖਵਾਈ` **ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ (द्वितीय प्रेरणार्थक क्रिया)** है।'
                    ]
                },
                finalAnswer: {
                    en: '1st Causative: ਲਿਖਾਉਣਾ | 2nd Causative: ਲਿਖਵਾਉਣਾ | Sentence verb `ਲਿਖਵਾਈ` is ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ.',
                    pa: 'ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ: ਲਿਖਾਉਣਾ | ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ: ਲਿਖਵਾਉਣਾ | ਵਾਕ ਵਿੱਚ `ਲਿਖਵਾਈ` ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ ਹੈ।',
                    hi: 'प्रथम प्रेरणार्थक: ਲਿਖਾਉਣਾ | द्वितीय प्रेरणार्थक: ਲਿਖਵਾਉਣਾ | वाक्य में `ਲਿਖਵਾਈ` द्वितीय प्रेरणार्थक क्रिया है।'
                }
            },
            {
                problem: {
                    en: '[ETT Paper A Punctuation MCQ] Which punctuation mark is used in the word `’ਚੋਂ` (contracted from `ਵਿੱਚੋਂ`), and how does it differ from the mark used in `ਦਿਨ-ਰਾਤ`?',
                    pa: '[ETT Paper A ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ MCQ] ਸ਼ਬਦ `’ਚੋਂ` (`ਵਿੱਚੋਂ` ਦਾ ਸੰਖੇਪ ਰੂਪ) ਵਿੱਚ ਕਿਹੜਾ ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ ਵਰਤਿਆ ਗਿਆ ਹੈ ਅਤੇ ਇਹ `ਦਿਨ-ਰਾਤ` ਵਿੱਚ ਵਰਤੇ ਚਿੰਨ੍ਹ ਤੋਂ ਕਿਵੇਂ ਵੱਖਰਾ ਹੈ?',
                    hi: '[ETT Paper A विश्राम चिह्न MCQ] शब्द `’ਚੋਂ` (`ਵਿੱਚੋਂ` का संक्षिप्त रूप) में कौन-सा विश्राम चिह्न प्रयुक्त हुआ है और यह `ਦਿਨ-ਰਾਤ` में प्रयुक्त चिह्न से कैसे भिन्न है?'
                },
                solutionSteps: {
                    en: [
                        'Analyze `’ਚੋਂ`: The initial letters `ਵਿੱ` of `ਵਿੱਚੋਂ` are omitted. The mark **`’`** placed at the top to indicate omitted letters is called **ਛੁੱਟ ਮਰੋੜੀ (Apostrophe)**.',
                        'Analyze `ਦਿਨ-ਰਾਤ`: Two words are joined to form a compound word (`ਸਮਾਸੀ ਸ਼ਬਦ`). The short horizontal mark **`-`** is called **ਜੋੜਨੀ (Hyphen)**.'
                    ],
                    pa: [
                        '`’ਚੋਂ` ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ: ਇੱਥੇ `ਵਿੱਚੋਂ` ਸ਼ਬਦ ਦੇ ਪਹਿਲੇ ਅੱਖਰ `ਵਿੱ` ਛੱਡੇ ਗਏ ਹਨ। ਅੱਖਰ ਛੱਡਣ ਨੂੰ ਦਰਸਾਉਣ ਵਾਲੇ ਚਿੰਨ੍ਹ **`’`** ਨੂੰ **ਛੁੱਟ ਮਰੋੜੀ** ਕਹਿੰਦੇ ਹਨ।',
                        '`ਦਿਨ-ਰਾਤ` ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ: ਦੋ ਸ਼ਬਦਾਂ ਨੂੰ ਜੋੜ ਕੇ ਸਮਾਸੀ ਸ਼ਬਦ ਬਣਾਉਣ ਵਾਲੇ ਚਿੰਨ੍ਹ **`-`** ਨੂੰ **ਜੋੜਨੀ** ਕਹਿੰਦੇ ਹਨ।'
                    ],
                    hi: [
                        '`’ਚੋਂ` का विश्लेषण: यहाँ `ਵਿੱਚੋਂ` शब्द के प्रारंभिक अक्षर `ਵਿੱ` का लोप हुआ है। लुप्त अक्षर दर्शाने वाले चिह्न **`’`** को **ਛੁੱਟ ਮਰੋੜੀ (लोप चिह्न)** कहते हैं।',
                        '`ਦਿਨ-ਰਾਤ` का विश्लेषण: सामासिक शब्द बनाने वाले चिह्न **`-`** को **ਜੋੜਨੀ (योजक चिह्न)** कहते हैं।'
                    ]
                },
                finalAnswer: {
                    en: '`’ਚੋਂ` uses ਛੁੱਟ ਮਰੋੜੀ (`’` — Apostrophe for omitted letters), whereas `ਦਿਨ-ਰਾਤ` uses ਜੋੜਨੀ (`-` — Hyphen for compound words).',
                    pa: '`’ਚੋਂ` ਵਿੱਚ ਛੁੱਟ ਮਰੋੜੀ (`’`) ਅਤੇ `ਦਿਨ-ਰਾਤ` ਵਿੱਚ ਜੋੜਨੀ (`-`) ਦੀ ਵਰਤੋਂ ਹੋਈ ਹੈ।',
                    hi: '`’ਚੋਂ` में ਛੁੱਟ ਮਰੋੜੀ (`’`) तथा `ਦਿਨ-ਰਾਤ` में ਜੋੜਨੀ (`-`) का प्रयोग हुआ है।'
                }
            }
        ],
        flashcards: [
            {
                id: 'ett-pa-a2-fc-1',
                question: {
                    en: 'How many word classes (ਸ਼ਬਦ ਭੇਦ) exist in Punjabi grammar, and which 4 are Vikari (ਵਿਕਾਰੀ)?',
                    pa: 'ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਵਿੱਚ ਸ਼ਬਦ ਭੇਦ ਕਿੰਨੀ ਤਰ੍ਹਾਂ ਦੇ ਹੁੰਦੇ ਹਨ ਅਤੇ 4 ਵਿਕਾਰੀ ਸ਼ਬਦ ਭੇਦ ਕਿਹੜੇ ਹਨ?',
                    hi: 'पंजाबी व्याकरण में शब्द भेद कितने प्रकार के होते हैं और 4 विकारी शब्द भेद कौन-से हैं?'
                },
                answer: {
                    en: '8 word classes total. The 4 Vikari (inflected) classes are: ਨਾਂਵ (Noun), ਪੜਨਾਂਵ (Pronoun), ਵਿਸ਼ੇਸ਼ਣ (Adjective), and ਕਿਰਿਆ (Verb).',
                    pa: 'ਕੁੱਲ 8 ਸ਼ਬਦ ਭੇਦ। 4 ਵਿਕਾਰੀ ਸ਼ਬਦ ਭੇਦ ਹਨ: ਨਾਂਵ, ਪੜਨਾਂਵ, ਵਿਸ਼ੇਸ਼ਣ ਅਤੇ ਕਿਰਿਆ।',
                    hi: 'कुल 8 शब्द भेद। 4 विकारी शब्द भेद हैं: ਨਾਂਵ (संज्ञा), ਪੜਨਾਂਵ (सर्वनाम), ਵਿਸ਼ੇਸ਼ਣ (विशेषण) और ਕਿਰਿਆ (क्रिया)।'
                }
            },
            {
                id: 'ett-pa-a2-fc-2',
                question: {
                    en: 'Classify the nouns `ਇੱਜੜ`, `ਸੋਨਾ`, and `ਮਿਠਾਸ` into their exact Punjabi noun subtypes.',
                    pa: '`ਇੱਜੜ`, `ਸੋਨਾ` ਅਤੇ `ਮਿਠਾਸ` ਨਾਂਵ ਦੀਆਂ ਕਿਹੜੀਆਂ-ਕਿਹੜੀਆਂ ਕਿਸਮਾਂ ਹਨ?',
                    hi: '`ਇੱਜੜ`, `ਸੋਨਾ` और `ਮਿਠਾਸ` संज्ञा के कौन-कौन से भेद हैं?'
                },
                answer: {
                    en: '`ਇੱਜੜ` = ਇਕੱਠਵਾਚਕ ਨਾਂਵ (Collective Noun); `ਸੋਨਾ` = ਵਸਤੂਵਾਚਕ ਨਾਂਵ (Material Noun); `ਮਿਠਾਸ` = ਭਾਵਵਾਚਕ ਨਾਂਵ (Abstract Noun).',
                    pa: '`ਇੱਜੜ` = ਇਕੱਠਵਾਚਕ ਨਾਂਵ; `ਸੋਨਾ` = ਵਸਤੂਵਾਚਕ ਨਾਂਵ; `ਮਿਠਾਸ` = ਭਾਵਵਾਚਕ ਨਾਂਵ।',
                    hi: '`ਇੱਜੜ` = ਇਕੱਠਵਾਚਕ ਨਾਂਵ (समूहवाचक); `ਸੋਨਾ` = ਵਸਤੂਵਾਚਕ ਨਾਂਵ (द्रव्यवाचक); `ਮਿਠਾਸ` = ਭਾਵਵਾਚਕ ਨਾਂਵ (भाववाचक)।'
                }
            },
            {
                id: 'ett-pa-a2-fc-3',
                question: {
                    en: 'What are the 3 types of Postpositions (ਸੰਬੰਧਕ) in Punjabi? Give two examples of each.',
                    pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਸੰਬੰਧਕ ਦੀਆਂ 3 ਕਿਸਮਾਂ ਕਿਹੜੀਆਂ ਹਨ? ਹਰੇਕ ਦੀਆਂ ਦੋ ਉਦਾਹਰਨਾਂ ਦਿਓ।',
                    hi: 'पंजाबी में संबंधक के 3 भेद कौन-से हैं? प्रत्येक के दो उदाहरण दीजिए।'
                },
                answer: {
                    en: '1. ਪੂਰਨ ਸੰਬੰਧਕ (`ਨੇ, ਨੂੰ, ਤੋਂ, ਦਾ`); 2. ਅਪੂਰਨ ਸੰਬੰਧਕ (`ਉੱਤੇ, ਹੇਠਾਂ, ਨੇੜੇ, ਦੂਰ`); 3. ਦੁਬਾਜਰੇ ਸੰਬੰਧਕ (`ਵਿੱਚ, ਨਾਲ, ਲਈ, ਬਿਨਾਂ`).',
                    pa: '1. ਪੂਰਨ ਸੰਬੰਧਕ (`ਨੇ, ਨੂੰ, ਤੋਂ, ਦਾ`); 2. ਅਪੂਰਨ ਸੰਬੰਧਕ (`ਉੱਤੇ, ਹੇਠਾਂ, ਨੇੜੇ, ਦੂਰ`); 3. ਦੁਬਾਜਰੇ ਸੰਬੰਧਕ (`ਵਿੱਚ, ਨਾਲ, ਲਈ, ਬਿਨਾਂ`)।',
                    hi: '1. पूर्ण संबंधक (`ਨੇ, ਨੂੰ, ਤੋਂ, ਦਾ`); 2. अपूर्ण संबंधक (`ਉੱਤੇ, ਹੇਠਾਂ, ਨੇੜੇ, ਦੂਰ`); 3. दुबाजरे संबंधक (`ਵਿੱਚ, ਨਾਲ, ਲਈ, ਬਿਨਾਂ`)।'
                }
            },
            {
                id: 'ett-pa-a2-fc-4',
                question: {
                    en: 'Give at least three distinct meanings of the polysemous Punjabi word `ਵੱਟ` (ਬਹੁ-ਅਰਥਕ ਸ਼ਬਦ).',
                    pa: 'ਬਹੁ-ਅਰਥਕ ਸ਼ਬਦ `ਵੱਟ` ਦੇ ਘੱਟੋ-ਘੱਟ ਤਿੰਨ ਵੱਖ-ਵੱਖ ਅਰਥ ਦੱਸੋ।',
                    hi: 'अनेकार्थी पंजाबी शब्द `ਵੱਟ` के कम-से-कम तीन भिन्न अर्थ बताइए।'
                },
                answer: {
                    en: '1. ਖੇਤ ਦੀ ਬੰਨ੍ਹੀ (boundary ridge of a field), 2. ਗੁੱਸਾ ਜਾਂ ਹੁੰਮਸ (anger/sultriness), 3. ਕੱਪੜੇ ਦਾ ਸਲਵੱਟ (wrinkle/crease), 4. ਰੱਸੀ ਵੱਟਣਾ (to twist rope).',
                    pa: '1. ਖੇਤ ਦੀ ਬੰਨ੍ਹੀ, 2. ਗੁੱਸਾ ਜਾਂ ਹੁੰਮਸ, 3. ਕੱਪੜੇ ਦਾ ਸਲਵੱਟ, 4. ਰੱਸੀ ਵੱਟਣਾ।',
                    hi: '1. खेत की मेड़ (ਬੰਨ੍ਹੀ), 2. क्रोध या उमस, 3. कपड़े की सलवट, 4. रस्सी बटना।'
                }
            },
            {
                id: 'ett-pa-a2-fc-5',
                question: {
                    en: 'Give the one-word substitution (ਬਹੁਤੇ ਸ਼ਬਦਾਂ ਦੀ ਥਾਂ ਇੱਕ ਸ਼ਬਦ) for: (a) ਜਿੱਥੇ ਸਿੱਕੇ ਘੜੇ ਜਾਣ, (b) ਪਿੰਡ ਦੀ ਸਾਂਝੀ ਬੈਠਣ ਵਾਲੀ ਥਾਂ.',
                    pa: 'ਬਹੁਤੇ ਸ਼ਬਦਾਂ ਦੀ ਥਾਂ ਇੱਕ ਸ਼ਬਦ ਦੱਸੋ: (a) ਜਿੱਥੇ ਸਿੱਕੇ ਘੜੇ ਜਾਣ, (b) ਪਿੰਡ ਦੀ ਸਾਂਝੀ ਬੈਠਣ ਵਾਲੀ ਥਾਂ।',
                    hi: 'वाक्यांश के लिए एक शब्द बताइए: (a) ਜਿੱਥੇ ਸਿੱਕੇ ਘੜੇ ਜਾਣ (जहाँ सिक्के ढाले जाएँ), (b) ਪਿੰਡ ਦੀ ਸਾਂਝੀ ਬੈਠਣ ਵਾਲੀ ਥਾਂ।'
                },
                answer: {
                    en: '(a) ਟਕਸਾਲ (Mint), (b) ਸੱਥ (Village assembly platform; common village land is ਸ਼ਾਮਲਾਟ).',
                    pa: '(a) ਟਕਸਾਲ, (b) ਸੱਥ (ਅਤੇ ਪਿੰਡ ਦੀ ਸਾਂਝੀ ਜ਼ਮੀਨ ਨੂੰ ਸ਼ਾਮਲਾਟ ਕਹਿੰਦੇ ਹਨ)।',
                    hi: '(a) ਟਕਸਾਲ (टकसाल), (b) ਸੱਥ (चौपाल; और गाँव की साझी ज़मीन को ਸ਼ਾਮਲਾਟ कहते हैं)।'
                }
            },
            {
                id: 'ett-pa-a2-fc-6',
                question: {
                    en: 'When do we use Single Inverted Commas (`‘ ’`) vs Double Inverted Commas (`“ ”`) in Punjabi punctuation?',
                    pa: 'ਪੰਜਾਬੀ ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹਾਂ ਵਿੱਚ ਇਕਹਿਰੇ ਪੁੱਠੇ ਕੌਮੇ (`‘ ’`) ਅਤੇ ਦੂਹਰੇ ਪੁੱਠੇ ਕੌਮੇ (`“ ”`) ਕਦੋਂ ਵਰਤੇ ਜਾਂਦੇ ਹਨ?',
                    hi: 'पंजाबी विश्राम चिह्नों में इकहरे (`‘ ’`) और दोहरे (`“ ”`) उद्धरण चिह्न कब प्रयुक्त होते हैं?'
                },
                answer: {
                    en: 'Single (`‘ ’`) is used for book/poem titles or pen-names (e.g., ‘ਜਪੁਜੀ ਸਾਹਿਬ’), while Double (`“ ”`) is used for direct speech quotations.',
                    pa: 'ਇਕਹਿਰੇ ਪੁੱਠੇ ਕੌਮੇ (`‘ ’`) ਕਿਸੇ ਪੁਸਤਕ, ਰਚਨਾ ਜਾਂ ਉਪਨਾਮ ਲਈ ਅਤੇ ਦੂਹਰੇ ਪੁੱਠੇ ਕੌਮੇ (`“ ”`) ਕਿਸੇ ਦੇ ਕਹੇ ਬੋਲਾਂ ਨੂੰ ਜਿਉਂ ਦਾ ਤਿਉਂ ਲਿਖਣ ਲਈ ਵਰਤੇ ਜਾਂਦੇ ਹਨ।',
                    hi: 'इकहरे (`‘ ’`) किसी पुस्तक, रचना या उपनाम के लिए तथा दोहरे (`“ ”`) किसी के प्रत्यक्ष कथन को ज्यों-का-त्यों लिखने के लिए प्रयुक्त होते हैं।'
                }
            }
        ]
    },

    // =========================================================================
    // 3. ETT PAPER B PUNJABI I: FOLK LITERATURE, CULTURE, CUSTOMS & FESTIVALS
    // =========================================================================
    {
        topicId: 'ett-punjabi-1',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 100,
            editorialNote: 'Level B -> I -> A blueprint for ETT Paper B Merit Punjabi I (ett-punjabi-1): Punjabi Folk Literature (Suhag, Ghorian, Sithnian, Alahunian, Keerne, Tappa, Mahiya, Bolian, Dhola, Jugni, Kikli, Bujhartan), 12 Desi Months, Major Fairs (Chhapar, Jarag, Roshni, Maghi, Hola Mahalla, Teeyan), Folk Dances, Phulkari (Bagh, Chop, Subar), and Traditional Ornaments.'
        },
        bookRefs: [
            {
                title: 'ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਅਤੇ ਲੋਕ ਸਾਹਿਤ (Punjabi Culture & Folk Literature)',
                author: 'ਡਾ. ਵਣਜਾਰਾ ਬੇਦੀ (Dr. Sohinder Singh Wanjara Bedi) / PSEB Class 11–12 Lazmi Punjabi',
                chapter: 'ਲੋਕ-ਗੀਤ (ਸੁਹਾਗ, ਘੋੜੀਆਂ, ਸਿੱਠਣੀਆਂ, ਅਲਾਹੁਣੀਆਂ), ਪੰਜਾਬ ਦੇ ਮੇਲੇ ਤੇ ਤਿਉਹਾਰ, ਲੋਕ-ਨਾਚ ਅਤੇ ਲੋਕ-ਕਲਾਵਾਂ',
                relevance: 'Core reference for ETT Paper A & Paper B folk songs, marriage/death rituals, fairs, dances, and ornaments.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Class 6–8 Foundation]
1. **Punjabi Folk Literature (ਲੋਕ ਸਾਹਿਤ) — Definition & Core Genres:**
   - Folk literature is the oral collective heritage of the community (\`ਲੋਕ-ਸਮੂਹ ਦੀ ਸਾਂਝੀ ਰਚਨਾ\`), transmitted anonymously from generation to generation (\`ਮੌਖਿਕ ਪਰੰਪਰਾ\`).
   - **Dr. Sohinder Singh Wanjara Bedi** compiled the monumental 8-volume **ਪੰਜਾਬੀ ਲੋਕਧਾਰਾ ਵਿਸ਼ਵਕੋਸ਼ (Encyclopedia of Punjabi Folklore)**.
2. **Marriage & Mourning Ritual Folk Songs (ਵਿਆਹ ਅਤੇ ਸ਼ੋਕ ਦੇ ਲੋਕ-ਗੀਤ):**
   | Folk Song Genre | Occasion / Side | Who Sings & Core Theme |
   |---|---|---|
   | **ਸੁਹਾਗ (Suhag)** | **Bride's Home (ਕੁੜੀ ਦੇ ਘਰ)** | Sung by women during marriage days; expresses the daughter's affection for her parents (\`ਪੇਕੇ\`), blessings of \`ਬਾਬਲ/ਵੀਰ\`, and hopes for a virtuous groom & in-laws (\`ਸਹੁਰੇ\`). |
   | **ਘੋੜੀਆਂ (Ghorian)** | **Groom's Home (ਮੁੰਡੇ ਦੇ ਘਰ)** | Sung by sisters/women at the groom's house when he mounts the ceremonial mare (\`ਘੋੜੀ ਚੜ੍ਹਨ ਵੇਲੇ\`); praises the brother's status, lineage (\`ਨਾਨਕੇ/ਦਾਦਕੇ\`), and ornaments. |
   | **ਸਿੱਠਣੀਆਂ (Sithnian)** | **Both Sides (Mainly Bride's)** | **Humorous, satirical teasing songs (\`ਹਾਸ-ਵਿਅੰਗ\`)** sung by women of the bride's village to mock the groom, \`ਬਰਾਤ\` (wedding party), and \`ਕੁੜਮ/ਕੁੜਮਣੀ\` (in-laws). |
   | **ਛੰਦ ਪਰਾਗਾ (Chhand Paraga)** | **Bride's Home (\`ਸਾਲੀਆਂ\` vs \`ਲਾੜਾ\`)** | Poetic verses recited by the **groom (\`ਲਾੜਾ\`)** to his bride's sisters (\`ਸਾਲੀਆਂ\`) inside the bridal chamber during \`ਕਲੀਰੇ/ਛੰਦ ਸੁਣਨ ਦੀ ਰਸਮ\`. |
   | **ਅਲਾਹੁਣੀਆਂ (Alahunian)** | **Mourning / Death (\`ਮੌਤ ਸਮੇਂ\`)** | **Group elegy (\`ਸਮੂਹਿਕ ਸ਼ੋਕ ਗੀਤ\`)** led by a professional woman (**\`ਨਾਇਣ\` or \`ਮਰਾਸਣ\`**) while women beat their thighs/chests (\`ਸਿਆਪਾ\`) in a circle (\`ਪਿੜ\`) praising the deceased's life. |
   | **ਕੀਰਨੇ (Keerne)** | **Mourning / Death (\`ਮੌਤ ਸਮੇਂ\`)** | **Solo, spontaneous, intense cry of grief (\`ਇਕੱਲੀ ਔਰਤ ਵੱਲੋਂ\`)** sung by a close female relative without a professional leader. |

---

### [Level I: Intermediate — Class 9–10 Core & ETT Paper B Matrix]
1. **Lyrical Folk Forms (ਕਾਵਿ-ਰੂਪ) & Riddles:**
   - **ਟੱਪਾ (Tappa):** The **smallest 1-line (two-hemistich) folk poetic unit** (\`ਇੱਕ ਤੁਕੀਆ ਲੋਕ-ਗੀਤ\`), e.g., *"ਬਾਰੀ ਬਰਸੀ ਖੱਟਣ ਗਿਆ ਸੀ..."* or *"ਕੋਠੇ 'ਤੇ ਕਿੱਲ ਮਾਹੀਆ..."*; forms the base of Giddha bolis.
   - **ਮਾਹੀਆ (Mahiya):** A **1.5-line (3-hemistich / ਡੇਢ ਤੁਕੀਆ)** romantic folk song originating in the **Pothohar / Western Punjab** region; the first line is a symbolic nature image to rhyme with the second meaningful line.
   - **ਬੋਲੀਆਂ (Bolian):** Divided into **ਲੰਮੀਆਂ ਬੋਲੀਆਂ** (long narrative verses sung by a group, with the last line picked up in fast dance tempo \`ਤੋੜਾ\`) and **ਨਿੱਕੀਆਂ ਬੋਲੀਆਂ / ਟੱਪੇ**.
   - **ਢੋਲਾ (Dhola):** Ancient narrative ballad form of the **Sandra / Bar (Jangli & Multani)** tracts.
   - **ਬੁਝਾਰਤਾਂ (Bujhartan — Riddles) & ਬਾਤਾਂ (Folk Tales):** Sharpen children's intellect (\`ਬੌਧਿਕ ਕਸਰਤ\`), e.g., *"ਨਿੱਕੀ ਜਿਹੀ ਕੁੜੀ, ਲੈ ਪਰਾਂਦਾ ਤੁਰੀ"* $\\to$ **ਸੂਈ-ਧਾਗਾ (Needle & Thread)**; *"ਆਰ ਢਾਂਗਾ ਪਾਰ ਢਾਂਗਾ, ਵਿੱਚ ਟੱਲਮ-ਟੱਲੀਆਂ..."* $\\to$ **ਖੂਹ ਦੀਆਂ ਟਿੰਡਾਂ**.
2. **12 Desi Calendar Months (12 ਦੇਸੀ ਮਹੀਨੇ) & Major Fairs of Punjab:**
   - **12 Desi Months in Order:** **1. ਚੇਤ (March–April — New Year starts \`1 ਚੇਤ\`), 2. ਵਿਸਾਖ, 3. ਜੇਠ, 4. ਹਾੜ੍ਹ, 5. ਸਾਉਣ, 6. ਭਾਦੋਂ, 7. ਅੱਸੂ, 8. ਕੱਤਕ, 9. ਮੱਘਰ, 10. ਪੋਹ, 11. ਮਾਘ, 12. ਫੱਗਣ**.
   - **High-Yield Fairs (ਪੰਜਾਬ ਦੇ ਪ੍ਰਮੁੱਖ ਮੇਲੇ):**
     | Fair Name (ਮੇਲਾ) | Location / District | Desi Month / Date | Dedicated To / Key Ritual |
     |---|---|---|---|
     | **ਛਪਾਰ ਦਾ ਮੇਲਾ (Chhapar)** | Chhapar (**Ludhiana**) | **ਭਾਦੋਂ ਸੁਦੀ 14** (*Anant Chaudas*) | **Gugga Pir (\`ਗੁੱਗਾ ਪੀਰ ਦੀ ਮਾੜੀ\`)**; people scoop earth (\`ਮਿੱਟੀ ਕੱਢਣਾ\`) 7 times |
     | **ਜਰਗ ਦਾ ਮੇਲਾ (Jarag)** | Jarag, Payal (**Ludhiana**) | **ਚੇਤ** (Chet Tuesdays) | **Seetla Mata (\`ਸੀਤਲਾ ਮਾਤਾ\`)**; also called **\`ਬਾਸੜੀਏ ਦਾ ਮੇਲਾ\`** because sweet \`ਗੁਲਗੁਲੇ\` cooked the previous night (**\`ਬਾਸੜਿਆ\`**) are offered and donkeys (Seetla Mata's mount) are decorated |
     | **ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ (Roshni)** | Jagraon (**Ludhiana**) | **14 to 16 ਫੱਗਣ** | Sufi Saint **Hazrat Baba Mohkam Din (\`ਬਾਬਾ ਮੋਹਕਮ ਦੀਨ\`)**; thousands of earthen lamps (\`ਚਿਰਾਗ਼\`) are lit at the *Mazar* |
     | **ਮਾਘੀ ਦਾ ਮੇਲਾ (Maghi)** | **Sri Muktsar Sahib** | **1 ਮਾਘ** (13/14 Jan) | Martyrdom of the **40 Muktas (\`ਚਾਲੀ ਮੁਕਤੇ\`)** & Bhai Maha Singh (1705 CE) |
     | **ਹੋਲਾ ਮਹੱਲਾ (Hola Mahalla)** | **Sri Anandpur Sahib** | **ਚੇਤ ਵਦੀ 1** (day after Holi) | Started by **Sri Guru Gobind Singh Ji (1701 CE)** for martial exercises |
     | **ਤੀਆਂ ਦਾ ਤਿਉਹਾਰ (Teeyan)** | Across Punjab (esp. Malwa) | **ਸਾਉਣ ਸੁਦੀ 3 (ਤੀਜ) ਤੋਂ ਪੁੰਨਿਆ** | Newly married daughters return to maternal home (\`ਪੇਕੇ\`); swings (\`ਪੀਂਘਾਂ\`) & Giddha |

---

### [Level A: Advanced — Folk Dances, Phulkari Varieties & Traditional Ornaments]
1. **Folk Dances of Punjab (ਪੰਜਾਬ ਦੇ ਲੋਕ-ਨਾਚ):**
   - **Men's Dances (ਮਰਦਾਂ ਦੇ ਲੋਕ-ਨਾਚ):**
     - **ਭੰਗੜਾ (Bhangra):** Harvest celebratory dance (originally Sialkot/Gurdaspur/Gujranwala) accompanied by **\`ਢੋਲ\` (Dhol)**, \`ਬੋਲੀਆਂ\`, \` Chimta\`, \`Sapp\`, \`Kato\`.
     - **ਝੂਮਰ (Jhumar):** Graceful, rhythmic circular dance of the **Sandal Bar (\`ਸਾਂਦਲ ਬਾਰ\`)** region (\`ਝੂਮ-ਝੂਮ ਕੇ ਨੱਚਣਾ\` — 3 beats: \`ਧੀਮੀ, ਤੇਜ਼, ਤਿੰਨ ਤਾਲ\`).
     - **ਮਲਵਈ ਗਿੱਧਾ (Malwai Giddha / ਬਾਬਿਆਂ ਦਾ ਗਿੱਧਾ):** Performed by men of Malwa using traditional instruments (\`ਤੂੰਬੀ, ਅਲਗੋਜ਼ੇ, ਬੁਗਦੂ, ਚਿਮਟਾ, ਸੱਪ, ਕਾਟੋ, ਘੜਾ\`).
     - **ਲੁੱਡੀ (Luddi):** Victory dance (\`ਜਿੱਤ ਦਾ ਨਾਚ\`) with snake-like hand movements.
   - **Women's Dances (ਇਸਤਰੀਆਂ ਦੇ ਲੋਕ-ਨਾਚ):**
     - **ਗਿੱਧਾ (Giddha):** Queen of women's folk dances; performed in a circle (\`ਪਿੜ\`) with hand-clapping (\`ਤਾੜੀ\`) and \`ਬੋਲੀਆਂ\` without mandatory instruments (except \`ਢੋਲਕੀ\`).
     - **ਸੰਮੀ (Sammi):** Ancient lyrical dance of **Sandal Bar / West Punjab** performed by women in a circle without clapping hands at chest level (\`ਹੱਥ ਉੱਪਰ ਅਤੇ ਹੇਠਾਂ ਲਹਿਰਾ ਕੇ\`).
     - **ਕਿੱਕਲੀ (Kikli):** Recreational spinning dance of young girls holding hands crosswise (\`ਕਲੀ-ਜੋਟਾ\`).
2. **Phulkari (ਫੁਲਕਾਰੀ) Varieties & Traditional Ornaments (ਗਹਿਣੇ):**
   - **Phulkari Types:**
     - **ਬਾਗ਼ (Bagh):** Silk thread (\`ਪੱਟ\`) embroidery covers the **entire base cloth (\`ਖੱਦਰ\`)** so no base fabric is visible.
     - **ਚੋਪ (Chop):** Gifted by the **maternal grandparents (\`ਨਾਨਕੇ\`)** to the bride during the \`ਚੂੜਾ ਚੜ੍ਹਾਉਣ\` ceremony; embroidered with golden-yellow silk on red cloth using a reversible stitch (\`ਦੋ-ਪਾਸੜ ਤੋਪਾ\`) along the borders without a central veil motif.
     - **ਸੁਬਰ (Subar):** Red Phulkari worn by the bride during **Pheras (\`ਲਾਵਾਂ/ਫੇਰਿਆਂ ਸਮੇਂ\`)**, featuring **5 floral motifs** in the center and 4 corners.
     - **ਤਿਲ ਪੱਤਰਾ (Til Patra):** Sparse dotted embroidery gifted to domestic helpers at weddings.
     - **ਨੀਲਕ (Neelak):** Embroidered on black/dark blue khaddar.
   - **Traditional Ornaments (ਪੰਜਾਬੀ ਗਹਿਣੇ — Body Part Matrix):**
     - **Head/Forehead (ਸਿਰ/ਮੱਥੇ ਦੇ):** Women — \`ਸੱਗੀ ਫੁੱਲ, ਸ਼ਿੰਗਾਰ ਪੱਟੀ, ਟਿੱਕਾ, ਬਘਿਆੜੀ, ਦਾਉਣੀ, ਚੌਂਕ\`; Men — \`ਕਲਗੀ, ਸਰਪੇਚ\`.
     - **Ears (ਕੰਨਾਂ ਦੇ):** Women — \`ਪਿੱਪਲ ਪੱਤੀਆਂ, ਬੁੰਦੇ, ਕਾਂਟੇ, ਝੁਮਕੇ, ਡੇਢੂ, ਲੋਟਣ, ਕੋਕਰੂ\`; Men — **\`ਨੱਤੀਆਂ, ਮੁਰਕੀਆਂ\`**.
     - **Nose (ਨੱਕ ਦੇ):** Women — \`ਨੱਥ, ਲੌਂਗ, ਕੋਕਾ, ਮਛਲੀ, ਨੁਕਰਾ\`.
     - **Neck (ਗਲ ਦੇ):** Women — \`ਰਾਣੀ ਹਾਰ, ਹਮੇਲ, ਚੰਪਾਕਲੀ, ਤਵੀਤੜੀ, ਹੱਸ, ਗੁਲੂਬੰਦ, ਮਾਲਾ\`; Men — **\`ਕੈਂਠਾ, ਤਵੀਤ\`**.
     - **Wrists/Arms (ਬਾਹਾਂ/ਗੁੱਟ ਦੇ):** Women — **\`ਗੋਖੜੂ\`**, \`ਕੰਗਣ, ਚੂੜੀਆਂ, ਪਹੁੰਚੀ, ਬਾਜ਼ੂਬੰਦ, ਕਲੀਰੇ\`; Men — \`ਕੜਾ\`.
     - **Feet/Ankles (ਪੈਰਾਂ ਦੇ):** Women — \`ਪਾਇਲ/ਪੰਜੇਬ, ਝਾਂਜਰਾਂ, ਬਿੱਛੂਏ, ਲੱਛੇ\`.`,
            pa: `### [Level B: Basic — Class 6–8 ਬੁਨਿਆਦੀ ਪੱਧਰ]
1. **ਪੰਜਾਬੀ ਲੋਕ ਸਾਹਿਤ (Folk Literature):**
   - ਲੋਕ-ਸਮੂਹ ਦੀ ਸਾਂਝੀ ਮੌਖਿਕ ਰਚਨਾ ਜੋ ਪੀੜ੍ਹੀ-ਦਰ-ਪੀੜ੍ਹੀ ਚੱਲਦੀ ਹੈ। **ਡਾ. ਸੋਹਿੰਦਰ ਸਿੰਘ ਵਣਜਾਰਾ ਬੇਦੀ** ਨੇ 8 ਜਿਲਦਾਂ ਵਿੱਚ **'ਪੰਜਾਬੀ ਲੋਕਧਾਰਾ ਵਿਸ਼ਵਕੋਸ਼'** ਰਚਿਆ।
2. **ਵਿਆਹ ਅਤੇ ਸ਼ੋਕ ਦੇ ਪ੍ਰਮੁੱਖ ਲੋਕ-ਗੀਤ:**
   | ਲੋਕ-ਗੀਤ ਵੰਨਗੀ | ਮੌਕਾ / ਧਿਰ | ਕੌਣ ਗਾਉਂਦਾ ਹੈ ਅਤੇ ਮੁੱਖ ਵਿਸ਼ਾ |
   |---|---|---|
   | **ਸੁਹਾਗ** | **ਵਿਆਹ (ਕੁੜੀ ਦੇ ਘਰ)** | ਵਿਆਹ ਵਾਲੀ ਕੁੜੀ ਦੇ ਘਰ ਇਸਤਰੀਆਂ ਵੱਲੋਂ; ਧੀ ਦੇ ਪੇਕੇ ਪਰਿਵਾਰ (ਬਾਬਲ, ਚਾਚੇ, ਵੀਰ) ਨਾਲ ਪਿਆਰ ਅਤੇ ਚੰਗੇ ਵਰ/ਸਹੁਰੇ ਘਰ ਦੀ ਕਾਮਨਾ |
   | **ਘੋੜੀਆਂ** | **ਵਿਆਹ (ਮੁੰਡੇ ਦੇ ਘਰ)** | ਵਿਆਹ ਵਾਲੇ ਮੁੰਡੇ ਦੇ ਘਰ ਭੈਣਾਂ/ਇਸਤਰੀਆਂ ਵੱਲੋਂ; ਲਾੜੇ ਦੇ ਸ਼ਿੰਗਾਰ, ਖਾਨਦਾਨ (ਨਾਨਕੇ-ਦਾਦਕੇ) ਦੀ ਵਡਿਆਈ |
   | **ਸਿੱਠਣੀਆਂ** | **ਵਿਆਹ (ਕੁੜੀ ਦੇ ਪਿੰਡ ਵੱਲੋਂ)** | **ਹਾਸ-ਵਿਅੰਗ (ਠੱਠਾ-ਮਖੌਲ)** ਦੇ ਗੀਤ ਜੋ ਕੁੜੀ ਪੱਖ ਦੀਆਂ ਔਰਤਾਂ ਲਾੜੇ, ਬਰਾਤੀਆਂ ਅਤੇ ਕੁੜਮ-ਕੁੜਮਣੀ ਨੂੰ ਸੰਬੋਧਿਤ ਕਰਕੇ ਗਾਉਂਦੀਆਂ ਹਨ |
   | **ਛੰਦ ਪਰਾਗਾ** | **ਵਿਆਹ (ਲਾੜੇ ਵੱਲੋਂ)** | ਲਾੜੇ ਵੱਲੋਂ ਸਾਲੀਆਂ ਅੱਗੇ ਸੁਣਾਏ ਜਾਣ ਵਾਲੇ ਕਾਵਿ-ਬੰਦ |
   | **ਅਲਾਹੁਣੀਆਂ** | **ਮੌਤ ਸਮੇਂ (ਸਮੂਹਿਕ ਸ਼ੋਕ ਗੀਤ)** | ਕਿਸੇ ਬਜ਼ੁਰਗ ਦੀ ਮੌਤ 'ਤੇ **ਨਾਇਣ ਜਾਂ ਮਰਾਸਣ** ਦੀ ਅਗਵਾਈ ਵਿੱਚ ਔਰਤਾਂ ਵੱਲੋਂ ਪਿੜ ਬੰਨ੍ਹ ਕੇ ਸਿਆਪਾ ਕਰਦਿਆਂ ਗਾਇਆ ਜਾਣ ਵਾਲਾ ਸਮੂਹਿਕ ਸ਼ੋਕ ਗੀਤ |
   | **ਕੀਰਨੇ** | **ਮੌਤ ਸਮੇਂ (ਇਕੱਲੀ ਔਰਤ ਵੱਲੋਂ)** | ਮ੍ਰਿਤਕ ਦੇ ਨੇੜਲੇ ਰਿਸ਼ਤੇਦਾਰ ਵੱਲੋਂ ਇਕੱਲੇ ਤੌਰ 'ਤੇ ਹੂਕ/ਦਰਦ ਭਰੇ ਬੋਲਾਂ ਵਿੱਚ ਪਾਇਆ ਜਾਣ ਵਾਲਾ ਵਿਰਲਾਪ |

---

### [Level I: Intermediate — Class 9–10 ਮੱਧ ਪੱਧਰ]
1. **ਕਾਵਿ-ਰੂਪ ਅਤੇ ਬੁਝਾਰਤਾਂ:**
   - **ਟੱਪਾ:** ਪੰਜਾਬੀ ਲੋਕ-ਕਾਵਿ ਦੀ **ਸਭ ਤੋਂ ਛੋਟੀ ਇੱਕ-ਤੁਕੀ (ਦੋ-ਚਰਣੀ) ਇਕਾਈ**।
   - **ਮਾਹੀਆ:** **ਪੋਠੋਹਾਰ** ਦੇ ਇਲਾਕੇ ਦਾ ਪ੍ਰਸਿੱਧ **ਡੇਢ-ਤੁਕੀਆ (ਤਿੰਨ-ਚਰਣੀ)** ਪਿਆਰ ਗੀਤ।
   - **ਬੋਲੀਆਂ:** ਲੰਮੀਆਂ ਬੋਲੀਆਂ (ਅਖੀਰਲੀ ਤੁਕ 'ਤੇ ਤੋੜਾ) ਅਤੇ ਨਿੱਕੀਆਂ ਬੋਲੀਆਂ।
   - **ਢੋਲਾ:** ਸਾਂਦਲ ਬਾਰ / ਜਾਂਗਲੀ ਇਲਾਕੇ ਦਾ ਬਿਰਤਾਂਤਕ ਲੋਕ-ਗੀਤ।
2. **12 ਦੇਸੀ ਮਹੀਨੇ ਅਤੇ ਪੰਜਾਬ ਦੇ ਪ੍ਰਮੁੱਖ ਮੇਲੇ:**
   - **12 ਦੇਸੀ ਮਹੀਨੇ:** **ਚੇਤ (ਨਵਾਂ ਸਾਲ), ਵਿਸਾਖ, ਜੇਠ, ਹਾੜ੍ਹ, ਸਾਉਣ, ਭਾਦੋਂ, ਅੱਸੂ, ਕੱਤਕ, ਮੱਘਰ, ਪੋਹ, ਮਾਘ, ਫੱਗਣ**।
   - **ਪ੍ਰਮੁੱਖ ਮੇਲੇ:**
     - **ਛਪਾਰ ਦਾ ਮੇਲਾ (ਲੁਧਿਆਣਾ):** **ਭਾਦੋਂ ਸੁਦੀ 14** ਨੂੰ **ਗੁੱਗਾ ਪੀਰ ਦੀ ਮਾੜੀ** 'ਤੇ ਲੱਗਦਾ ਹੈ (ਮਿੱਟੀ ਕੱਢਣ ਦੀ ਰਸਮ)।
     - **ਜਰਗ ਦਾ ਮੇਲਾ (ਲੁਧਿਆਣਾ):** **ਚੇਤ** ਦੇ ਮਹੀਨੇ **ਸੀਤਲਾ ਮਾਤਾ** ਨੂੰ ਸਮਰਪਿਤ; ਇਸ ਨੂੰ **'ਬਾਸੜੀਏ ਦਾ ਮੇਲਾ'** ਵੀ ਕਹਿੰਦੇ ਹਨ ਕਿਉਂਕਿ ਇੱਕ ਰਾਤ ਪਹਿਲਾਂ ਪਕਾਏ ਮਿੱਠੇ **ਗੁਲਗੁਲੇ** ਭੇਟ ਕੀਤੇ ਜਾਂਦੇ ਹਨ ਅਤੇ ਖੋਤਿਆਂ (ਸੀਤਲਾ ਮਾਤਾ ਦੀ ਸਵਾਰੀ) ਨੂੰ ਸ਼ਿੰਗਾਰਿਆ ਜਾਂਦਾ ਹੈ।
     - **ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ (ਲੁਧਿਆਣਾ):** **14 ਤੋਂ 16 ਫੱਗਣ** ਨੂੰ ਸੂਫ਼ੀ ਫ਼ਕੀਰ **ਹਜ਼ਰਤ ਬਾਬਾ ਮੋਹਕਮ ਦੀਨ** ਦੀ ਮਜ਼ਾਰ 'ਤੇ।
     - **ਮਾਘੀ ਦਾ ਮੇਲਾ (ਸ੍ਰੀ ਮੁਕਤਸਰ ਸਾਹਿਬ):** **1 ਮਾਘ** (40 ਮੁਕਤਿਆਂ ਦੀ ਸ਼ਹੀਦੀ)।
     - **ਹੋਲਾ ਮਹੱਲਾ (ਸ੍ਰੀ ਅਨੰਦਪੁਰ ਸਾਹਿਬ):** **ਚੇਤ ਵਦੀ 1** (ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਵੱਲੋਂ 1701 ਵਿੱਚ ਸ਼ੁਰੂ)।
     - **ਤੀਆਂ:** **ਸਾਉਣ ਸੁਦੀ ਤੀਜ (3) ਤੋਂ ਪੁੰਨਿਆ** ਤੱਕ।

---

### [Level A: Advanced — ਲੋਕ-ਨਾਚ, ਫੁਲਕਾਰੀ ਅਤੇ ਪੰਜਾਬੀ ਗਹਿਣੇ]
1. **ਲੋਕ-ਨਾਚ:**
   - **ਮਰਦਾਂ ਦੇ ਨਾਚ:** **ਭੰਗੜਾ, ਝੂਮਰ (ਸਾਂਦਲ ਬਾਰ), ਲੁੱਡੀ (ਜਿੱਤ ਦਾ ਨਾਚ), ਮਲਵਈ ਗਿੱਧਾ (ਬਾਬਿਆਂ ਦਾ ਗਿੱਧਾ)**।
   - **ਇਸਤਰੀਆਂ ਦੇ ਨਾਚ:** **ਗਿੱਧਾ, ਸੰਮੀ (ਸਾਂਦਲ ਬਾਰ), ਕਿੱਕਲੀ**।
2. **ਫੁਲਕਾਰੀ ਦੀਆਂ ਕਿਸਮਾਂ ਅਤੇ ਰਵਾਇਤੀ ਗਹਿਣੇ:**
   - **ਬਾਗ਼:** ਜਦੋਂ ਖੱਦਰ ਦੇ ਪੂਰੇ ਕੱਪੜੇ ਉੱਤੇ ਪੱਟ (ਰੇਸ਼ਮੀ ਧਾਗੇ) ਦੀ ਕਢਾਈ ਹੋਵੇ ਅਤੇ ਹੇਠਲਾ ਕੱਪੜਾ ਬਿਲਕੁਲ ਨਾ ਦਿਸੇ।
   - **ਚੋਪ:** ਵਿਆਹ ਸਮੇਂ **ਨਾਨਕਿਆਂ ਵੱਲੋਂ ਚੂੜਾ ਚੜ੍ਹਾਉਣ ਵੇਲੇ** ਕੁੜੀ ਨੂੰ ਦਿੱਤੀ ਜਾਣ ਵਾਲੀ ਫੁਲਕਾਰੀ (ਕੰਨੀਆਂ ਉੱਤੇ ਪੀਲੇ ਪੱਟ ਨਾਲ ਦੋ-ਪਾਸੜ ਤੋਪਾ)।
   - **ਸੁਬਰ:** **ਫੇਰਿਆਂ (ਲਾਵਾਂ) ਸਮੇਂ** ਵਿਆਹੁਲੀ ਕੁੜੀ ਵੱਲੋਂ ਲਈ ਜਾਣ ਵਾਲੀ ਲਾਲ ਫੁਲਕਾਰੀ ਜਿਸ ਦੇ ਵਿਚਕਾਰ 5 ਫੁੱਲ ਕੱਢੇ ਹੁੰਦੇ ਹਨ।
   - **ਪ੍ਰਮੁੱਖ ਗਹਿਣੇ:** **ਸਿਰ/ਮੱਥੇ ਦੇ:** \`ਸੱਗੀ ਫੁੱਲ, ਸ਼ਿੰਗਾਰ ਪੱਟੀ, ਟਿੱਕਾ, ਬਘਿਆੜੀ, ਦਾਉਣੀ\`; **ਕੰਨਾਂ ਦੇ:** \`ਪਿੱਪਲ ਪੱਤੀਆਂ, ਬੁੰਦੇ, ਕਾਂਟੇ, ਲੋਟਣ\` ਅਤੇ ਮਰਦਾਂ ਦੀਆਂ **\`ਨੱਤੀਆਂ, ਮੁਰਕੀਆਂ\`**; **ਗਲ ਦੇ:** \`ਰਾਣੀ ਹਾਰ, ਹਮੇਲ, ਚੰਪਾਕਲੀ, ਤਵੀਤੜੀ\` ਅਤੇ ਮਰਦਾਂ ਦਾ **\`ਕੈਂਠਾ\`**; **ਗੁੱਟ/ਬਾਹਾਂ ਦੇ:** **\`ਗੋਖੜੂ\`**, \`ਕੰਗਣ, ਚੂੜੀਆਂ, ਪਹੁੰਚੀ\`।`,
            hi: `### [Level B: Basic — Class 6–8 आधारभूत स्तर]
1. **पंजाबी लोक साहित्य (ਲੋਕ ਸਾਹਿਤ):**
   - **डॉ. वणजारा बेदी** ने 8 खंडों में **'ਪੰਜਾਬੀ ਲੋਕਧਾਰਾ ਵਿਸ਼ਵਕੋਸ਼'** की रचना की।
   - **विवाह के लोक-गीत:** **ਸੁਹਾਗ (सुहाग)** वधू के घर में, **ਘੋੜੀਆਂ (घोड़ियाँ)** वर के घर में बहनों द्वारा तथा **ਸਿੱਠਣੀਆਂ (सिठणियाँ)** हास्य-व्यंग्य के रूप में बारात/समधियों के लिए गाई जाती हैं।
   - **शोक गीत:** **ਅਲਾਹੁਣੀਆਂ** (\`ਨਾਇਣ/ਮਰਾਸਣ\` के नेतृत्व में सामूहिक शोक गीत) तथा **ਕੀਰਨੇ** (एकल करुण विलाप)।

---

### [Level I: Intermediate — Class 9–10 मध्यम स्तर]
1. **काव्य रूप व 12 देसी महीने:**
   - **ਟੱਪਾ** (एक-पंक्ति की सबसे छोटी इकाई), **ਮਾਹੀਆ** (पोठोहार का डेढ़-पंक्ति का गीत), **ਬੋਲੀਆਂ**, **ਢੋਲਾ**।
   - **12 देसी महीने:** \`ਚੇਤ, ਵਿਸਾਖ, ਜੇਠ, ਹਾੜ੍ਹ, ਸਾਉਣ, ਭਾਦੋਂ, ਅੱਸੂ, ਕੱਤਕ, ਮੱਘਰ, ਪੋਹ, ਮਾਘ, ਫੱਗਣ\`।
   - **प्रमुख मेले:** **ਛਪਾਰ ਦਾ ਮੇਲਾ** (लुधियाना, भादों सुदी 14, गुग्गा पीर), **ਜਰਗ ਦਾ ਮੇਲਾ / ਬਾਸੜੀਏ ਦਾ ਮੇਲਾ** (लुधियाना, चेत, सीतला माता — मीठे गुलगुले), **ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ** (14–16 फग्गण, बाबा मोहकम दीन), **ਮਾਘੀ ਦਾ ਮੇਲਾ** (श्री मुक्तसर साहिब, 1 माघ), **ਹੋਲਾ ਮਹੱਲਾ** (श्री आनंदपुर साहिब, चेत वदी 1)।

---

### [Level A: Advanced — लोक नृत्य, फुलकारी एवं आभूषण]
1. **लोक नृत्य:** पुरुष (**ਭੰਗੜਾ, ਝੂਮਰ, ਲੁੱਡੀ, ਮਲਵਈ ਗਿੱਧਾ**) बनाम महिला (**ਗਿੱਧਾ, ਸੰਮੀ, ਕਿੱਕਲੀ**)।
2. **फुलकारी व आभूषण:** **ਬਾਗ਼** (पूरे कपड़े पर कढ़ाई), **ਚੋਪ** (नानके द्वारा चूड़ा रस्म पर), **ਸੁਬਰ** (फेरों के समय); आभूषण — सिर (\`ਸੱਗੀ ਫੁੱਲ, ਸ਼ਿੰਗਾਰ ਪੱਟੀ\`), कान (\`ਪਿੱਪਲ ਪੱਤੀਆਂ, ਨੱਤੀਆਂ [पुरुष]\`), गला (\`ਕੈਂਠਾ [पुरुष], ਹਮੇਲ, ਤਵੀਤੜੀ\`), कलाई (\`ਗੋਖੜੂ, ਪਹੁੰਚੀ\`)।`
        },
        keyNotes: {
            en: [
                '**Suhag vs Ghorian vs Sithnian:** **ਸੁਹਾਗ** is sung at the **bride’s home (`ਕੁੜੀ ਦੇ ਘਰ`)**, **ਘੋੜੀਆਂ** at the **groom’s home (`ਮੁੰਡੇ ਦੇ ਘਰ`)** by sisters, and **ਸਿੱਠਣੀਆਂ** are **satirical teasing songs (`ਹਾਸ-ਵਿਅੰਗ`)** mocking the groom’s party (`ਬਰਾਤ/ਕੁੜਮ`).',
                '**Alahunian vs Keerne:** **ਅਲਾਹੁਣੀਆਂ** is a **group mourning song (`ਸਮੂਹਿਕ ਸ਼ੋਕ-ਗੀਤ`)** led by a professional `ਨਾਇਣ/ਮਰਾਸਣ` with rhythmic `ਸਿਆਪਾ`, whereas **ਕੀਰਨਾ** is a **solo lament** by a bereaved woman.',
                '**Tappa vs Mahiya:** **ਟੱਪਾ** is the **smallest 1-line (2-hemistich) folk unit** of Punjabi poetry, while **ਮਾਹੀਆ** is a **1.5-line (3-hemistich) Pothohari love verse**.',
                '**Top 3 Ludhiana Rural Fairs:** **ਛਪਾਰ ਦਾ ਮੇਲਾ** (Bhadon Sudi 14 — **Gugga Pir**), **ਜਰਗ ਦਾ ਮੇਲਾ / ਬਾਸੜੀਏ ਦਾ ਮੇਲਾ** (Chet — **Seetla Mata**, offering stale sweet `ਗੁਲਗੁਲੇ`), and **ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ** (14–16 Phaggan — **Baba Mohkam Din**).',
                '**Bagh vs Chop vs Subar (Phulkari):** **ਬਾਗ਼** covers the entire khaddar surface; **ਚੋਪ** is gifted by **`ਨਾਨਕੇ` (maternal grandparents)** at the Chura ceremony; **ਸੁਬਰ** (with 5 central flowers) is worn by the bride during **Pheras (`ਲਾਵਾਂ/ਫੇਰੇ`)**.',
                '**High-Yield Ornament Locations:** **`ਸੱਗੀ ਫੁੱਲ, ਸ਼ਿੰਗਾਰ ਪੱਟੀ, ਬਘਿਆੜੀ`** = Head/Forehead | **`ਪਿੱਪਲ ਪੱਤੀਆਂ, ਬੁੰਦੇ, ਨੱਤੀਆਂ (men)`** = Ears | **`ਕੈਂਠਾ (men), ਰਾਣੀ ਹਾਰ, ਹਮੇਲ, ਤਵੀਤੜੀ`** = Neck | **`ਗੋਖੜੂ, ਪਹੁੰਚੀ`** = Wrists.'
            ],
            pa: [
                '**ਸੁਹਾਗ ਬਨਾਮ ਘੋੜੀਆਂ ਬਨਾਮ ਸਿੱਠਣੀਆਂ:** **ਸੁਹਾਗ** ਵਿਆਹ ਵਾਲੀ **ਕੁੜੀ ਦੇ ਘਰ**, **ਘੋੜੀਆਂ** ਵਿਆਹ ਵਾਲੇ **ਮੁੰਡੇ ਦੇ ਘਰ** ਭੈਣਾਂ ਵੱਲੋਂ ਅਤੇ **ਸਿੱਠਣੀਆਂ** ਕੁੜੀ ਪੱਖ ਵੱਲੋਂ ਬਰਾਤ/ਕੁੜਮਾਂ ਨੂੰ **ਹਾਸ-ਵਿਅੰਗ (ਮਖੌਲ)** ਵਜੋਂ ਗਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ।',
                '**ਅਲਾਹੁਣੀਆਂ ਬਨਾਮ ਕੀਰਨੇ:** **ਅਲਾਹੁਣੀਆਂ** ਮੌਤ ਸਮੇਂ **ਨਾਇਣ/ਮਰਾਸਣ** ਦੀ ਅਗਵਾਈ ਵਿੱਚ ਸਿਆਪਾ ਕਰਦਿਆਂ ਸਮੂਹ ਵਿੱਚ ਗਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ, ਜਦਕਿ **ਕੀਰਨਾ** ਇਕੱਲੀ ਔਰਤ ਵੱਲੋਂ ਪਾਇਆ ਜਾਣ ਵਾਲਾ ਵਿਰਲਾਪ ਹੈ।',
                '**ਟੱਪਾ ਬਨਾਮ ਮਾਹੀਆ:** **ਟੱਪਾ** ਪੰਜਾਬੀ ਲੋਕ-ਕਾਵਿ ਦੀ **ਸਭ ਤੋਂ ਛੋਟੀ ਇੱਕ-ਤੁਕੀ ਇਕਾਈ** ਹੈ, ਜਦਕਿ **ਮਾਹੀਆ** ਪੋਠੋਹਾਰ ਦਾ ਪ੍ਰਸਿੱਧ **ਡੇਢ-ਤੁਕੀਆ (ਤਿੰਨ-ਚਰਣੀ)** ਕਾਵਿ-ਰੂਪ ਹੈ।',
                '**ਲੁਧਿਆਣਾ ਜ਼ਿਲ੍ਹੇ ਦੇ 3 ਇਤਿਹਾਸਕ ਮੇਲੇ:** **ਛਪਾਰ ਦਾ ਮੇਲਾ** (ਭਾਦੋਂ ਸੁਦੀ 14 — **ਗੁੱਗਾ ਪੀਰ**), **ਜਰਗ ਦਾ ਮੇਲਾ / ਬਾਸੜੀਏ ਦਾ ਮੇਲਾ** (ਚੇਤ — **ਸੀਤਲਾ ਮਾਤਾ**, ਬੇਹੇ ਗੁਲਗੁਲੇ), ਅਤੇ **ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ** (14–16 ਫੱਗਣ — **ਬਾਬਾ ਮੋਹਕਮ ਦੀਨ**)।',
                '**ਬਾਗ਼, ਚੋਪ ਅਤੇ ਸੁਬਰ (ਫੁਲਕਾਰੀ):** **ਬਾਗ਼** ਵਿੱਚ ਪੂਰਾ ਕੱਪੜਾ ਕਢਾਈ ਨਾਲ ਢਕਿਆ ਹੁੰਦਾ ਹੈ; **ਚੋਪ** ਕੁੜੀ ਦੇ **ਨਾਨਕਿਆਂ** ਵੱਲੋਂ ਚੂੜਾ ਚੜ੍ਹਾਉਣ ਸਮੇਂ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ; **ਸੁਬਰ** ਕੁੜੀ **ਫੇਰਿਆਂ (ਲਾਵਾਂ) ਸਮੇਂ** ਲੈਂਦੀ ਹੈ।',
                '**ਪ੍ਰਮੁੱਖ ਗਹਿਣਿਆਂ ਦੇ ਅੰਗ:** **`ਸੱਗੀ ਫੁੱਲ, ਸ਼ਿੰਗਾਰ ਪੱਟੀ, ਬਘਿਆੜੀ`** = ਸਿਰ/ਮੱਥਾ | **`ਪਿੱਪਲ ਪੱਤੀਆਂ, ਬੁੰਦੇ, ਨੱਤੀਆਂ (ਮਰਦ)`** = ਕੰਨ | **`ਕੈਂਠਾ (ਮਰਦ), ਹਮੇਲ, ਤਵੀਤੜੀ`** = ਗਲ | **`ਗੋਖੜੂ, ਪਹੁੰਚੀ`** = ਗੁੱਟ/ਬਾਂਹ।'
            ],
            hi: [
                '**सुहाग बनाम घोड़ियाँ बनाम सिठणियाँ:** **ਸੁਹਾਗ** लड़की के घर, **ਘੋੜੀਆਂ** लड़के के घर बहनों द्वारा तथा **ਸਿੱਠਣੀਆਂ** बारात/समधियों से हास्य-व्यंग्य करने के लिए गाई जाती हैं।',
                '**अलाहुणियाँ बनाम कीरने:** **ਅਲਾਹੁਣੀਆਂ** मृत्यु पर `ਨਾਇਣ/ਮਰਾਸਣ` की अगुवाई में सामूहिक रूप से गाई जाती हैं, जबकि **ਕੀਰਨਾ** एकल विलाप है।',
                '**टप्पा बनाम माहिया:** **ਟੱਪਾ** सबसे छोटी एक-पंक्ति की इकाई है, जबकि **ਮਾਹੀਆ** पोठोहार का डेढ़-पंक्ति का लोक-गीत है।',
                '**लुधियाना के 3 प्रसिद्ध मेले:** **ਛਪਾਰ ਦਾ ਮੇਲਾ** (भादों सुदी 14 — **गुग्गा पीर**), **ਜਰਗ ਦਾ ਮੇਲਾ / ਬਾਸੜੀਏ ਦਾ ਮੇਲਾ** (चेत — **सीतला माता**), तथा **ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ** (14–16 फग्गण — **बाबा मोहकम दीन**)।',
                '**बाग़, चोप और सुबर (फुलकारी):** **ਬਾਗ਼** में पूरा कपड़ा कढ़ाई से ढका होता है; **ਚੋਪ** **नानके** द्वारा चूड़ा रस्म पर दिया जाता है; **ਸੁਬਰ** वधू **फेरों के समय** ओढ़ती है।',
                '**आभूषण एवं अंग:** **`ਸੱਗੀ ਫੁੱਲ, ਸ਼ਿੰਗਾਰ ਪੱਟੀ`** = सिर/माथा | **`ਪਿੱਪਲ ਪੱਤੀਆਂ, ਨੱਤੀਆਂ (पुरुष)`** = कान | **`ਕੈਂਠਾ (पुरुष), ਹਮੇਲ`** = गला | **`ਗੋਖੜੂ, ਪਹੁੰਚੀ`** = कलाई।'
            ]
        },
        quickRevisionSheet: {
            en: [
                '**Folk Songs Quick Map:** Bride = **ਸੁਹਾਗ** | Groom = **ਘੋੜੀਆਂ** | Satire/Mockery = **ਸਿੱਠਣੀਆਂ** | Groom to Sisters-in-law = **ਛੰਦ ਪਰਾਗਾ** | Group Mourning = **ਅਲਾਹੁਣੀਆਂ** | Solo Mourning = **ਕੀਰਨੇ**.',
                '**12 Desi Months Sequence:** `ਚੇਤ (1) -> ਵਿਸਾਖ (2) -> ਜੇਠ (3) -> ਹਾੜ੍ਹ (4) -> ਸਾਉਣ (5) -> ਭਾਦੋਂ (6) -> ਅੱਸੂ (7) -> ਕੱਤਕ (8) -> ਮੱਘਰ (9) -> ਪੋਹ (10) -> ਮਾਘ (11) -> ਫੱਗਣ (12)`.',
                '**Fairs & Deities/Saints:** Chhapar = **Gugga Pir (Bhadon)** | Jarag = **Seetla Mata / Basria (Chet)** | Jagraon Roshni = **Baba Mohkam Din (Phaggan)** | Teeyan = **Sawan**.',
                '**Folk Dances by Gender:** Men = **ਭੰਗੜਾ, ਝੂਮਰ, ਲੁੱਡੀ, ਮਲਵਈ ਗਿੱਧਾ** | Women = **ਗਿੱਧਾ, ਸੰਮੀ, ਕਿੱਕਲੀ**.',
                '**Ornaments Trap Check:** `ਗੋਖੜੂ` = **Wrist (ਗੁੱਟ)** | `ਸੱਗੀ ਫੁੱਲ` = **Head (ਸਿਰ)** | `ਪਿੱਪਲ ਪੱਤੀਆਂ` = **Ears (ਕੰਨ)** | `ਕੈਂਠਾ` = **Men’s Neck (ਮਰਦਾਂ ਦੇ ਗਲ ਦਾ)** | `ਨੱਤੀਆਂ` = **Men’s Ears (ਮਰਦਾਂ ਦੇ ਕੰਨਾਂ ਦਾ)**.'
            ],
            pa: [
                '**ਲੋਕ-ਗੀਤ ਸੂਤਰ:** ਕੁੜੀ ਦੇ ਘਰ = **ਸੁਹਾਗ** | ਮੁੰਡੇ ਦੇ ਘਰ = **ਘੋੜੀਆਂ** | ਹਾਸ-ਵਿਅੰਗ = **ਸਿੱਠਣੀਆਂ** | ਲਾੜੇ ਵੱਲੋਂ ਸਾਲੀਆਂ ਨੂੰ = **ਛੰਦ ਪਰਾਗਾ** | ਸਮੂਹਿਕ ਸ਼ੋਕ ਗੀਤ = **ਅਲਾਹੁਣੀਆਂ** | ਇਕੱਲਾ ਵਿਰਲਾਪ = **ਕੀਰਨੇ**।',
                '**12 ਦੇਸੀ ਮਹੀਨੇ:** `ਚੇਤ (1) -> ਵਿਸਾਖ (2) -> ਜੇਠ (3) -> ਹਾੜ੍ਹ (4) -> ਸਾਉਣ (5) -> ਭਾਦੋਂ (6) -> ਅੱਸੂ (7) -> ਕੱਤਕ (8) -> ਮੱਘਰ (9) -> ਪੋਹ (10) -> ਮਾਘ (11) -> ਫੱਗਣ (12)`।',
                '**ਮੇਲੇ ਅਤੇ ਸਬੰਧ:** ਛਪਾਰ ਦਾ ਮੇਲਾ = **ਗੁੱਗਾ ਪੀਰ (ਭਾਦੋਂ)** | ਜਰਗ ਦਾ ਮੇਲਾ = **ਸੀਤਲਾ ਮਾਤਾ / ਬਾਸੜੀਆ (ਚੇਤ)** | ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ = **ਬਾਬਾ ਮੋਹਕਮ ਦੀਨ (ਫੱਗਣ)** | ਤੀਆਂ = **ਸਾਉਣ**।',
                '**ਲੋਕ-ਨਾਚ ਵੰਡ:** ਮਰਦਾਂ ਦੇ = **ਭੰਗੜਾ, ਝੂਮਰ, ਲੁੱਡੀ, ਮਲਵਈ ਗਿੱਧਾ** | ਔਰਤਾਂ ਦੇ = **ਗਿੱਧਾ, ਸੰਮੀ, ਕਿੱਕਲੀ**।',
                '**ਗਹਿਣਿਆਂ ਦੀ ਪਛਾਣ:** `ਗੋਖੜੂ` = **ਗੁੱਟ (ਬਾਂਹ)** | `ਸੱਗੀ ਫੁੱਲ` = **ਸਿਰ** | `ਪਿੱਪਲ ਪੱਤੀਆਂ` = **ਕੰਨ** | `ਕੈਂਠਾ` = **ਮਰਦਾਂ ਦੇ ਗਲ ਦਾ** | `ਨੱਤੀਆਂ` = **ਮਰਦਾਂ ਦੇ ਕੰਨਾਂ ਦਾ**।'
            ],
            hi: [
                '**लोक-गीत सूत्र:** वधू पक्ष = **ਸੁਹਾਗ** | वर पक्ष = **ਘੋੜੀਆਂ** | हास्य-व्यंग्य = **ਸਿੱਠਣੀਆਂ** | सामूहिक शोक गीत = **ਅਲਾਹੁਣੀਆਂ** | एकल विलाप = **ਕੀਰਨੇ**।',
                '**12 देसी महीने:** `ਚੇਤ (1) -> ਵਿਸਾਖ (2) -> ਜੇਠ (3) -> ਹਾੜ੍ਹ (4) -> ਸਾਉਣ (5) -> ਭਾਦੋਂ (6) -> ਅੱਸੂ (7) -> ਕੱਤਕ (8) -> ਮੱਘਰ (9) -> ਪੋਹ (10) -> ਮਾਘ (11) -> ਫੱਗਣ (12)`।',
                '**मेले एवं संबंध:** छपार = **गुग्गा पीर (भादों)** | जरग = **सीतला माता / बासड़िया (चेत)** | जगरावां की रौशनी = **बाबा मोहकम दीन (फग्गण)** | तियां = **सावन**।',
                '**लोक-नृत्य विभाजन:** पुरुष = **ਭੰਗੜਾ, ਝੂਮਰ, ਲੁੱਡੀ, ਮਲਵਈ ਗਿੱਧਾ** | महिला = **ਗਿੱਧਾ, ਸੰਮੀ, ਕਿੱਕਲੀ**।',
                '**आभूषण पहचान:** `ਗੋਖੜੂ` = **कलाई** | `ਸੱਗੀ ਫੁੱਲ` = **सिर** | `ਪਿੱਪਲ ਪੱਤੀਆਂ` = **कान** | `ਕੈਂਠਾ` = **पुरुषों के गले का** | `ਨੱਤੀਆਂ` = **पुरुषों के कान का**।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: `ਗੋਖੜੂ` (Gokhru) is an ornament worn on the feet or ears. Correction: **`ਗੋਖੜੂ` is a heavy gold/silver bracelet worn by women on the wrist (`ਗੁੱਟ/ਬਾਂਹ ਦਾ ਗਹਿਣਾ`)**.',
                'Misconception: Chhapar Fair (`ਛਪਾਰ ਦਾ ਮੇਲਾ`) is dedicated to Seetla Mata, while Jarag Fair (`ਜਰਗ ਦਾ ਮੇਲਾ`) is dedicated to Gugga Pir. Correction: It is the exact opposite — **Chhapar Fair (Bhadon) is held at `ਗੁੱਗਾ ਪੀਰ ਦੀ ਮਾੜੀ` (Gugga Pir)**, whereas **Jarag Fair (Chet, `ਬਾਸੜੀਏ ਦਾ ਮੇਲਾ`) is dedicated to `ਸੀਤਲਾ ਮਾਤਾ` (Seetla Mata)**.',
                'Misconception: `ਲੁੱਡੀ` (Luddi) and `ਝੂਮਰ` (Jhumar) are exclusively women’s folk dances in Punjab. Correction: Both **`ਝੂਮਰ` (Sandal Bar dance)** and **`ਲੁੱਡੀ` (victory dance)** are primarily **men’s folk dances (`ਮਰਦਾਂ ਦੇ ਲੋਕ-ਨਾਚ`)** in traditional Punjabi folklore.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: `ਗੋਖੜੂ` ਪੈਰਾਂ ਜਾਂ ਕੰਨਾਂ ਦਾ ਗਹਿਣਾ ਹੈ। ਸੁਧਾਰ: **`ਗੋਖੜੂ` ਔਰਤਾਂ ਦੇ ਗੁੱਟ (ਬਾਂਹ) ਉੱਤੇ ਪਹਿਨਿਆ ਜਾਣ ਵਾਲਾ ਦੰਦਿਆਂ ਵਾਲਾ ਭਾਰੀ ਗਹਿਣਾ ਹੈ**।',
                'ਭੁਲੇਖਾ: ਛਪਾਰ ਦਾ ਮੇਲਾ ਸੀਤਲਾ ਮਾਤਾ ਨਾਲ ਅਤੇ ਜਰਗ ਦਾ ਮੇਲਾ ਗੁੱਗਾ ਪੀਰ ਨਾਲ ਸਬੰਧਤ ਹੈ। ਸੁਧਾਰ: **ਛਪਾਰ ਦਾ ਮੇਲਾ (ਭਾਦੋਂ) ਗੁੱਗਾ ਪੀਰ ਦੀ ਮਾੜੀ** ਉੱਤੇ ਲੱਗਦਾ ਹੈ, ਜਦਕਿ **ਜਰਗ ਦਾ ਮੇਲਾ (ਚੇਤ, ਬਾਸੜੀਏ ਦਾ ਮੇਲਾ) ਸੀਤਲਾ ਮਾਤਾ** ਦੀ ਪੂਜਾ ਨਾਲ ਸਬੰਧਤ ਹੈ।',
                'ਭੁਲੇਖਾ: `ਝੂਮਰ` ਅਤੇ `ਲੁੱਡੀ` ਕੇਵਲ ਔਰਤਾਂ ਦੇ ਲੋਕ-ਨਾਚ ਹਨ। ਸੁਧਾਰ: ਰਵਾਇਤੀ ਪੰਜਾਬੀ ਲੋਕਧਾਰਾ ਵਿੱਚ **`ਝੂਮਰ` (ਸਾਂਦਲ ਬਾਰ ਦਾ ਨਾਚ)** ਅਤੇ **`ਲੁੱਡੀ` (ਜਿੱਤ ਦਾ ਨਾਚ)** ਮੁੱਖ ਤੌਰ ਤੇ **ਮਰਦਾਂ ਦੇ ਲੋਕ-ਨਾਚ** ਹਨ।'
            ],
            hi: [
                'भ्रांति: `ਗੋਖੜੂ` (गोखरू) पैरों या कानों का आभूषण है। सुधार: **`ਗੋਖੜੂ` महिलाओं द्वारा कलाई (`ਗੁੱਟ`) में पहना जाने वाला आभूषण है**।',
                'भ्रांति: छपार का मेला सीतला माता से और जरग का मेला गुग्गा पीर से संबंधित है। सुधार: **छपार का मेला (भादों) गुग्गा पीर की माड़ी** पर लगता है, जबकि **जरग का मेला (चेत, बासड़िए का मेला) सीतला माता** को समर्पित है।',
                'भ्रांति: `ਝੂਮਰ` और `ਲੁੱਡੀ` केवल महिलाओं के लोक-नृत्य हैं। सुधार: पारंपरिक पंजाबी लोकधारा में **`ਝੂਮਰ` (सांदल बार)** और **`ਲੁੱਡੀ` (विजय नृत्य)** मुख्य रूप से **पुरुषों के लोक-नृत्य** हैं।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: '[ETT Paper B Punjabi Culture MCQ] Match the following Punjabi cultural items with their exact category:\n(A) ਚੋਪ (Chop) — 1. ਸੀਤਲਾ ਮਾਤਾ ਦਾ ਮੇਲਾ (ਬਾਸੜੀਆ)\n(B) ਜਰਗ ਦਾ ਮੇਲਾ — 2. ਨਾਨਕਿਆਂ ਵੱਲੋਂ ਚੂੜਾ ਚੜ੍ਹਾਉਣ ਸਮੇਂ ਦਿੱਤੀ ਜਾਣ ਵਾਲੀ ਫੁਲਕਾਰੀ\n(C) ਅਲਾਹੁਣੀਆਂ — 3. ਔਰਤਾਂ ਦੇ ਗੁੱਟ ਦਾ ਗਹਿਣਾ\n(D) ਗੋਖੜੂ — 4. ਮੌਤ ਸਮੇਂ ਨਾਇਣ ਦੀ ਅਗਵਾਈ ਵਿੱਚ ਗਾਇਆ ਜਾਣ ਵਾਲਾ ਸਮੂਹਿਕ ਸ਼ੋਕ-ਗੀਤ',
                    pa: '[ETT Paper B ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ MCQ] ਹੇਠ ਲਿਖਿਆਂ ਦਾ ਸਹੀ ਮਿਲਾਨ ਕਰੋ:\n(A) ਚੋਪ — 1. ਸੀਤਲਾ ਮਾਤਾ ਦਾ ਮੇਲਾ (ਬਾਸੜੀਆ)\n(B) ਜਰਗ ਦਾ ਮੇਲਾ — 2. ਨਾਨਕਿਆਂ ਵੱਲੋਂ ਚੂੜਾ ਚੜ੍ਹਾਉਣ ਸਮੇਂ ਦਿੱਤੀ ਜਾਣ ਵਾਲੀ ਫੁਲਕਾਰੀ\n(C) ਅਲਾਹੁਣੀਆਂ — 3. ਔਰਤਾਂ ਦੇ ਗੁੱਟ ਦਾ ਗਹਿਣਾ\n(D) ਗੋਖੜੂ — 4. ਮੌਤ ਸਮੇਂ ਨਾਇਣ ਦੀ ਅਗਵਾਈ ਵਿੱਚ ਗਾਇਆ ਜਾਣ ਵਾਲਾ ਸਮੂਹਿਕ ਸ਼ੋਕ-ਗੀਤ',
                    hi: '[ETT Paper B पंजाबी संस्कृति MCQ] निम्नलिखित का सही मिलान कीजिए:\n(A) ਚੋਪ — 1. सीतला माता का मेला (बासड़िया)\n(B) ਜਰਗ ਦਾ ਮੇਲਾ — 2. नानके द्वारा चूड़ा रस्म के समय दी जाने वाली फुलकारी\n(C) ਅਲਾਹੁਣੀਆਂ — 3. महिलाओं की कलाई का आभूषण\n(D) ਗੋਖੜੂ — 4. मृत्यु के समय नाइण के नेतृत्व में गाया जाने वाला सामूहिक शोक-गीत'
                },
                solutionSteps: {
                    en: [
                        '**(A) ਚੋਪ (Chop):** A special red Phulkari gifted by the maternal grandparents (`ਨਾਨਕੇ`) during the bride’s Chura ceremony $\\to$ **2**.',
                        '**(B) ਜਰਗ ਦਾ ਮੇਲਾ (Jarag Fair):** Held in Chet in Ludhiana district to worship Seetla Mata with stale sweet gulgule (`ਬਾਸੜੀਆ`) $\\to$ **1**.',
                        '**(C) ਅਲਾਹੁਣੀਆਂ (Alahunian):** Collective mourning song led by a `ਨਾਇਣ/ਮਰਾਸਣ` at the death of an elder $\\to$ **4**.',
                        '**(D) ਗੋਖੜੂ (Gokhru):** Traditional serrated gold/silver ornament worn by women on the wrist (`ਗੁੱਟ`) $\\to$ **3**.'
                    ],
                    pa: [
                        '**(A) ਚੋਪ:** ਵਿਆਹ ਸਮੇਂ ਨਾਨਕਿਆਂ ਵੱਲੋਂ ਚੂੜਾ ਚੜ੍ਹਾਉਣ ਵੇਲੇ ਦਿੱਤੀ ਜਾਣ ਵਾਲੀ ਵਿਸ਼ੇਸ਼ ਫੁਲਕਾਰੀ $\\to$ **2**।',
                        '**(B) ਜਰਗ ਦਾ ਮੇਲਾ:** ਚੇਤ ਮਹੀਨੇ ਸੀਤਲਾ ਮਾਤਾ ਦੀ ਪੂਜਾ ਨਾਲ ਸਬੰਧਤ (ਬਾਸੜੀਏ ਦਾ ਮੇਲਾ) $\\to$ **1**।',
                        '**(C) ਅਲਾਹੁਣੀਆਂ:** ਮੌਤ ਸਮੇਂ ਨਾਇਣ/ਮਰਾਸਣ ਦੀ ਅਗਵਾਈ ਵਿੱਚ ਗਾਇਆ ਜਾਣ ਵਾਲਾ ਸਮੂਹਿਕ ਸ਼ੋਕ-ਗੀਤ $\\to$ **4**।',
                        '**(D) ਗੋਖੜੂ:** ਔਰਤਾਂ ਦੇ ਗੁੱਟ (ਬਾਂਹ) ਦਾ ਰਵਾਇਤੀ ਗਹਿਣਾ $\\to$ **3**।'
                    ],
                    hi: [
                        '**(A) ਚੋਪ:** विवाह के समय नानके पक्ष द्वारा चूड़ा चढ़ाते समय दी जाने वाली फुलकारी $\\to$ **2**।',
                        '**(B) ਜਰਗ ਦਾ ਮੇਲਾ:** चेत मास में सीतला माता को समर्पित बासड़िए का मेला $\\to$ **1**।',
                        '**(C) ਅਲਾਹੁਣੀਆਂ:** मृत्यु के समय नाइण के नेतृत्व में गाया जाने वाला सामूहिक शोक-गीत $\\to$ **4**।',
                        '**(D) ਗੋਖੜੂ:** महिलाओं की कलाई (`ਗੁੱਟ`) का पारंपरिक आभूषण $\\to$ **3**।'
                    ]
                },
                finalAnswer: {
                    en: 'A–2, B–1, C–4, D–3.',
                    pa: 'A–2, B–1, C–4, D–3।',
                    hi: 'A–2, B–1, C–4, D–3।'
                }
            },
            {
                problem: {
                    en: '[ETT Paper B Folk Literature MCQ] Differentiate between `ਸੁਹਾਗ`, `ਘੋੜੀਆਂ`, and `ਸਿੱਠਣੀਆਂ` in Punjabi marriage traditions.',
                    pa: '[ETT Paper B ਲੋਕ ਸਾਹਿਤ MCQ] ਪੰਜਾਬੀ ਵਿਆਹ ਦੀਆਂ ਰਸਮਾਂ ਵਿੱਚ `ਸੁਹਾਗ`, `ਘੋੜੀਆਂ` ਅਤੇ `ਸਿੱਠਣੀਆਂ` ਵਿੱਚ ਕੀ ਅੰਤਰ ਹੈ?',
                    hi: '[ETT Paper B लोक साहित्य MCQ] पंजाबी विवाह परंपरा में `ਸੁਹਾਗ`, `ਘੋੜੀਆਂ` और `ਸਿੱਠਣੀਆਂ` में क्या अंतर है?'
                },
                solutionSteps: {
                    en: [
                        '**ਸੁਹਾਗ (Suhag):** Sung at the **bride’s home (`ਕੁੜੀ ਦੇ ਘਰ`)** expressing the daughter’s tender feelings toward her father (`ਬਾਬਲ`), mother, and brothers, and wishing for a noble husband.',
                        '**ਘੋੜੀਆਂ (Ghorian):** Sung at the **groom’s home (`ਮੁੰਡੇ ਦੇ ਘਰ`)** by his sisters when he mounts the ceremonial mare (`ਘੋੜੀ`).',
                        '**ਸਿੱਠਣੀਆਂ (Sithnian):** Humorous and satirical songs (`ਹਾਸ-ਵਿਅੰਗ ਦੇ ਗੀਤ`) sung by women to tease the wedding party (`ਬਰਾਤ`) and in-laws (`ਕੁੜਮ/ਕੁੜਮਣੀ`).'
                    ],
                    pa: [
                        '**ਸੁਹਾਗ:** ਵਿਆਹ ਵਾਲੀ **ਕੁੜੀ ਦੇ ਘਰ** ਗਾਏ ਜਾਣ ਵਾਲੇ ਗੀਤ ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਧੀ ਦੇ ਬਾਬਲ, ਮਾਂ ਤੇ ਵੀਰਾਂ ਪ੍ਰਤੀ ਪਿਆਰ ਅਤੇ ਚੰਗੇ ਸਹੁਰੇ ਘਰ ਦੀ ਕਾਮਨਾ ਹੁੰਦੀ ਹੈ।',
                        '**ਘੋੜੀਆਂ:** ਵਿਆਹ ਵਾਲੇ **ਮੁੰਡੇ ਦੇ ਘਰ** ਭੈਣਾਂ ਵੱਲੋਂ ਲਾੜੇ ਦੇ ਘੋੜੀ ਚੜ੍ਹਨ ਅਤੇ ਸਿਹਰਾ ਬੰਨ੍ਹਣ ਸਮੇਂ ਗਾਏ ਜਾਣ ਵਾਲੇ ਗੀਤ।',
                        '**ਸਿੱਠਣੀਆਂ:** ਵਿਆਹ ਸਮੇਂ ਕੁੜੀ ਪੱਖ ਦੀਆਂ ਔਰਤਾਂ ਵੱਲੋਂ ਬਰਾਤ ਅਤੇ ਕੁੜਮ-ਕੁੜਮਣੀ ਨੂੰ ਕੀਤੇ ਜਾਣ ਵਾਲੇ **ਮਿੱਠੇ ਹਾਸ-ਵਿਅੰਗ (ਮਖੌਲ)** ਦੇ ਗੀਤ।'
                    ],
                    hi: [
                        '**ਸੁਹਾਗ (सुहाग):** वधू के घर गाए जाने वाले गीत जिनमें बेटी के माता-पिता व भाइयों के प्रति स्नेह तथा अच्छे वर की कामना होती है।',
                        '**ਘੋੜੀਆਂ (घोड़ियाँ):** वर के घर बहनों द्वारा दूल्हे के घोड़ी चढ़ने के समय गाए जाने वाले गीत।',
                        '**ਸਿੱਠਣੀਆਂ (सिठणियाँ):** वधू पक्ष की स्त्रियों द्वारा बारात और समधियों से किए जाने वाले मीठे हास्य-व्यंग्य के गीत।'
                    ]
                },
                finalAnswer: {
                    en: 'Suhag = Bride’s home; Ghorian = Groom’s home; Sithnian = Satirical/teasing songs for the Baraat and in-laws.',
                    pa: 'ਸੁਹਾਗ = ਕੁੜੀ ਦੇ ਘਰ; ਘੋੜੀਆਂ = ਮੁੰਡੇ ਦੇ ਘਰ; ਸਿੱਠਣੀਆਂ = ਬਰਾਤ/ਕੁੜਮਾਂ ਲਈ ਹਾਸ-ਵਿਅੰਗ ਦੇ ਗੀਤ।',
                    hi: 'ਸੁਹਾਗ = वधू के घर; ਘੋੜੀਆਂ = वर के घर; ਸਿੱਠਣੀਆਂ = बारात/समधियों के लिए हास्य-व्यंग्य गीत।'
                }
            }
        ],
        flashcards: [
            {
                id: 'ett-pa-b1-fc-1',
                question: {
                    en: 'Which folk songs are sung at the bride’s house (`ਕੁੜੀ ਦੇ ਘਰ`) vs the groom’s house (`ਮੁੰਡੇ ਦੇ ਘਰ`) during a Punjabi wedding?',
                    pa: 'ਪੰਜਾਬੀ ਵਿਆਹ ਵਿੱਚ ਕੁੜੀ ਦੇ ਘਰ ਅਤੇ ਮੁੰਡੇ ਦੇ ਘਰ ਕਿਹੜੇ-ਕਿਹੜੇ ਲੋਕ-ਗੀਤ ਗਾਏ ਜਾਂਦੇ ਹਨ?',
                    hi: 'पंजाबी विवाह में लड़की के घर और लड़के के घर कौन-कौन से लोक-गीत गाए जाते हैं?'
                },
                answer: {
                    en: 'Bride’s house: ਸੁਹਾਗ (Suhag). Groom’s house: ਘੋੜੀਆਂ (Ghorian). Humorous teasing of Baraat/in-laws: ਸਿੱਠਣੀਆਂ (Sithnian).',
                    pa: 'ਕੁੜੀ ਦੇ ਘਰ: ਸੁਹਾਗ। ਮੁੰਡੇ ਦੇ ਘਰ: ਘੋੜੀਆਂ। ਬਰਾਤ/ਕੁੜਮਾਂ ਨਾਲ ਹਾਸ-ਵਿਅੰਗ: ਸਿੱਠਣੀਆਂ।',
                    hi: 'लड़की के घर: ਸੁਹਾਗ (सुहाग)। लड़के के घर: ਘੋੜੀਆਂ (घोड़ियाँ)। बारात/समधियों से हास्य-व्यंग्य: ਸਿੱਠਣੀਆਂ (सिठणियाँ)।'
                }
            },
            {
                id: 'ett-pa-b1-fc-2',
                question: {
                    en: 'What is the smallest 1-line poetic unit of Punjabi folk songs, and what is the 1.5-line Pothohari folk form called?',
                    pa: 'ਪੰਜਾਬੀ ਲੋਕ-ਗੀਤਾਂ ਦੀ ਸਭ ਤੋਂ ਛੋਟੀ ਇੱਕ-ਤੁਕੀ ਇਕਾਈ ਕਿਹੜੀ ਹੈ ਅਤੇ ਪੋਠੋਹਾਰ ਦੇ ਡੇਢ-ਤੁਕੀਏ ਲੋਕ-ਗੀਤ ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?',
                    hi: 'पंजाबी लोक-गीतों की सबसे छोटी एक-पंक्ति की इकाई कौन-सी है और पोठोहार के डेढ़-पंक्ति के लोक-गीत को क्या कहते हैं?'
                },
                answer: {
                    en: 'Smallest 1-line unit: ਟੱਪਾ (Tappa). 1.5-line (3-hemistich) Pothohari form: ਮਾਹੀਆ (Mahiya).',
                    pa: 'ਸਭ ਤੋਂ ਛੋਟੀ ਇੱਕ-ਤੁਕੀ ਇਕਾਈ: ਟੱਪਾ। ਡੇਢ-ਤੁਕੀਆ ਪੋਠੋਹਾਰੀ ਲੋਕ-ਗੀਤ: ਮਾਹੀਆ।',
                    hi: 'सबसे छोटी एक-पंक्ति की इकाई: ਟੱਪਾ (टप्पा)। डेढ़-पंक्ति का पोठोहारी लोक-गीत: ਮਾਹੀਆ (माहिया)।'
                }
            },
            {
                id: 'ett-pa-b1-fc-3',
                question: {
                    en: 'Which fair of Punjab is also known as `ਬਾਸੜੀਏ ਦਾ ਮੇਲਾ` (Basria Fair), in which Desi month is it held, and who is worshipped there?',
                    pa: 'ਪੰਜਾਬ ਦੇ ਕਿਹੜੇ ਮੇਲੇ ਨੂੰ `ਬਾਸੜੀਏ ਦਾ ਮੇਲਾ` ਵੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ, ਇਹ ਕਿਹੜੇ ਦੇਸੀ ਮਹੀਨੇ ਲੱਗਦਾ ਹੈ ਅਤੇ ਇੱਥੇ ਕਿਸ ਦੀ ਪੂਜਾ ਹੁੰਦੀ ਹੈ?',
                    hi: 'पंजाब के किस मेले को `ਬਾਸੜੀਏ ਦਾ ਮੇਲਾ` भी कहा जाता है, यह किस देसी महीने में लगता है और यहाँ किसकी पूजा होती है?'
                },
                answer: {
                    en: 'Jarag Fair (`ਜਰਗ ਦਾ ਮੇਲਾ`, Ludhiana) — held in the month of `ਚੇਤ` (Chet) in honour of `ਸੀਤਲਾ ਮਾਤਾ` (Seetla Mata), where sweet gulgule cooked a night earlier (`ਬਾਸੜੀਆ`) are offered.',
                    pa: 'ਜਰਗ ਦਾ ਮੇਲਾ (ਲੁਧਿਆਣਾ) — ਇਹ `ਚੇਤ` ਮਹੀਨੇ ਵਿੱਚ `ਸੀਤਲਾ ਮਾਤਾ` ਦੀ ਪੂਜਾ ਲਈ ਲੱਗਦਾ ਹੈ ਅਤੇ ਇੱਥੇ ਇੱਕ ਰਾਤ ਪਹਿਲਾਂ ਪਕਾਏ ਮਿੱਠੇ ਗੁਲਗੁਲੇ (`ਬਾਸੜੀਆ`) ਭੇਟ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।',
                    hi: 'जरग का मेला (`ਜਰਗ ਦਾ ਮੇਲਾ`, लुधियाना) — यह `ਚੇਤ` मास में `ਸੀਤਲਾ ਮਾਤਾ` की पूजा के लिए लगता है जहाँ एक रात पहले बनाए गए मीठे गुलगुले (`ਬਾਸੜੀਆ`) चढ़ाए जाते हैं।'
                }
            },
            {
                id: 'ett-pa-b1-fc-4',
                question: {
                    en: 'List all 12 Desi Calendar Months (ਦੇਸੀ ਮਹੀਨੇ) of Punjab in exact chronological order.',
                    pa: 'ਪੰਜਾਬੀ ਦੇਸੀ ਕੈਲੰਡਰ ਦੇ 12 ਮਹੀਨਿਆਂ ਦੇ ਨਾਂ ਤਰਤੀਬਵਾਰ ਦੱਸੋ।',
                    hi: 'पंजाबी देसी कैलेंडर के 12 महीनों के नाम क्रमानुसार बताइए।'
                },
                answer: {
                    en: '1. ਚੇਤ, 2. ਵਿਸਾਖ, 3. ਜੇਠ, 4. ਹਾੜ੍ਹ, 5. ਸਾਉਣ, 6. ਭਾਦੋਂ, 7. ਅੱਸੂ, 8. ਕੱਤਕ, 9. ਮੱਘਰ, 10. ਪੋਹ, 11. ਮਾਘ, 12. ਫੱਗਣ.',
                    pa: '1. ਚੇਤ, 2. ਵਿਸਾਖ, 3. ਜੇਠ, 4. ਹਾੜ੍ਹ, 5. ਸਾਉਣ, 6. ਭਾਦੋਂ, 7. ਅੱਸੂ, 8. ਕੱਤਕ, 9. ਮੱਘਰ, 10. ਪੋਹ, 11. ਮਾਘ, 12. ਫੱਗਣ।',
                    hi: '1. ਚੇਤ, 2. ਵਿਸਾਖ, 3. ਜੇਠ, 4. ਹਾੜ੍ਹ, 5. ਸਾਉਣ, 6. ਭਾਦੋਂ, 7. ਅੱਸੂ, 8. ਕੱਤਕ, 9. ਮੱਘਰ, 10. ਪੋਹ, 11. ਮਾਘ, 12. ਫੱਗਣ।'
                }
            },
            {
                id: 'ett-pa-b1-fc-5',
                question: {
                    en: 'Distinguish between `ਬਾਗ਼`, `ਚੋਪ`, and `ਸੁਬਰ` in Punjabi Phulkari art.',
                    pa: 'ਪੰਜਾਬੀ ਫੁਲਕਾਰੀ ਕਲਾ ਵਿੱਚ `ਬਾਗ਼`, `ਚੋਪ` ਅਤੇ `ਸੁਬਰ` ਵਿੱਚ ਕੀ ਫ਼ਰਕ ਹੈ?',
                    hi: 'पंजाबी फुलकारी कला में `ਬਾਗ਼`, `ਚੋਪ` और `ਸੁਬਰ` में क्या अंतर है?'
                },
                answer: {
                    en: '`ਬਾਗ਼` = embroidery covers the entire cloth leaving no base visible; `ਚੋਪ` = gifted by maternal grandparents (`ਨਾਨਕੇ`) at Chura ceremony; `ਸੁਬਰ` = worn by the bride during Pheras (`ਲਾਵਾਂ/ਫੇਰਿਆਂ ਸਮੇਂ`).',
                    pa: '`ਬਾਗ਼` = ਪੂਰੇ ਖੱਦਰ ਉੱਤੇ ਸੰਘਣੀ ਕਢਾਈ; `ਚੋਪ` = ਨਾਨਕਿਆਂ ਵੱਲੋਂ ਚੂੜਾ ਚੜ੍ਹਾਉਣ ਸਮੇਂ ਦਿੱਤੀ ਜਾਣ ਵਾਲੀ ਫੁਲਕਾਰੀ; `ਸੁਬਰ` = ਲਾਵਾਂ/ਫੇਰਿਆਂ ਸਮੇਂ ਕੁੜੀ ਵੱਲੋਂ ਲਈ ਜਾਣ ਵਾਲੀ 5 ਫੁੱਲਾਂ ਵਾਲੀ ਫੁਲਕਾਰੀ।',
                    hi: '`ਬਾਗ਼` = पूरे कपड़े पर सघन कढ़ाई; `ਚੋਪ` = नानके द्वारा चूड़ा रस्म पर दी जाने वाली फुलकारी; `ਸੁਬਰ` = फेरों के समय वधू द्वारा ओढ़ी जाने वाली फुलकारी।'
                }
            },
            {
                id: 'ett-pa-b1-fc-6',
                question: {
                    en: 'On which body parts are the traditional Punjabi ornaments `ਸੱਗੀ ਫੁੱਲ`, `ਪਿੱਪਲ ਪੱਤੀਆਂ`, `ਕੈਂਠਾ`, and `ਗੋਖੜੂ` worn?',
                    pa: 'ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਵਿੱਚ `ਸੱਗੀ ਫੁੱਲ`, `ਪਿੱਪਲ ਪੱਤੀਆਂ`, `ਕੈਂਠਾ` ਅਤੇ `ਗੋਖੜੂ` ਗਹਿਣੇ ਸਰੀਰ ਦੇ ਕਿਹੜੇ-ਕਿਹੜੇ ਅੰਗਾਂ ਉੱਤੇ ਪਹਿਨੇ ਜਾਂਦੇ ਹਨ?',
                    hi: 'पंजाबी संस्कृति में `ਸੱਗੀ ਫੁੱਲ`, `ਪਿੱਪਲ ਪੱਤੀਆਂ`, `ਕੈਂਠਾ` और `ਗੋਖੜੂ` आभूषण शरीर के किन-किन अंगों पर पहने जाते हैं?'
                },
                answer: {
                    en: '`ਸੱਗੀ ਫੁੱਲ` = Women’s Head (ਸਿਰ); `ਪਿੱਪਲ ਪੱਤੀਆਂ` = Women’s Ears (ਕੰਨ); `ਕੈਂਠਾ` = Men’s Neck (ਮਰਦਾਂ ਦੇ ਗਲ); `ਗੋਖੜੂ` = Women’s Wrist (ਗੁੱਟ/ਬਾਂਹ).',
                    pa: '`ਸੱਗੀ ਫੁੱਲ` = ਔਰਤਾਂ ਦੇ ਸਿਰ ਦਾ; `ਪਿੱਪਲ ਪੱਤੀਆਂ` = ਔਰਤਾਂ ਦੇ ਕੰਨਾਂ ਦਾ; `ਕੈਂਠਾ` = ਮਰਦਾਂ ਦੇ ਗਲ ਦਾ; `ਗੋਖੜੂ` = ਔਰਤਾਂ ਦੇ ਗੁੱਟ (ਬਾਂਹ) ਦਾ।',
                    hi: '`ਸੱਗੀ ਫੁੱਲ` = महिलाओं के सिर का; `ਪਿੱਪਲ ਪੱਤੀਆਂ` = महिलाओं के कान का; `ਕੈਂਠਾ` = पुरुषों के गले का; `ਗੋਖੜੂ` = महिलाओं की कलाई का।'
                }
            }
        ]
    },

    // =========================================================================
    // 4. ETT PAPER B PUNJABI II: IDIOMS & PROVERBS, TRANSLATION & SENTENCES
    // =========================================================================
    {
        topicId: 'ett-punjabi-3',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 100,
            editorialNote: 'Level B -> I -> A blueprint for ETT Paper B Merit Punjabi II (ett-punjabi-3): Idioms (Muhavare) vs Proverbs (Akhan / Lokoktiyan), Sentence Types by Structure (Sadharan, Sanyukt, Mishrat) and by Meaning/Function (Affirmative <-> Negative, Active <-> Passive), and English-to-Punjabi Translation (SVO -> SOV).'
        },
        bookRefs: [
            {
                title: 'ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਅਤੇ ਲੇਖ ਰਚਨਾ (Modern Punjabi Grammar & Composition)',
                author: 'ਪੰਜਾਬ ਸਕੂਲ ਸਿੱਖਿਆ ਬੋਰਡ (PSEB), ਮੋਹਾਲੀ (Class 10–12)',
                chapter: 'ਮੁਹਾਵਰੇ ਅਤੇ ਅਖਾਣ, ਵਾਕ ਬੋਧ, ਵਾਕ ਵਟਾਂਦਰਾ ਅਤੇ ਅੰਗਰੇਜ਼ੀ ਤੋਂ ਪੰਜਾਬੀ ਅਨੁਵਾਦ',
                relevance: 'Official PSEB syllabus source for ETT Paper A & B idioms, proverbs, sentence transformation, and translation.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Class 6–8 Foundation]
1. **Idioms (\`ਮੁਹਾਵਰੇ\`) vs Proverbs (\`ਅਖਾਣ / ਲੋਕੋਕਤੀਆਂ\`) — The Golden Structural Rule:**
   | Feature | **ਮੁਹਾਵਰਾ (Idiom)** | **ਅਖਾਣ / ਲੋਕੋਕਤੀ (Proverb)** |
   |---|---|---|
   | **Grammatical Status** | An **incomplete phrase (\`ਵਾਕੰਸ਼\`)** that must be conjugated inside a sentence | A **complete, independent sentence (\`ਪੂਰਨ ਸੁਤੰਤਰ ਵਾਕ\`)** that stands on its own |
   | **Ending Marker** | Almost always ends with an **infinitive verb suffix (\`ਣਾ, ਣੀ, ਣੇ, ਣਾ\`)**, e.g., \`ਪਾਣੀ-ਪਾਣੀ ਹੋਣਾ\`, \`ਹੱਥ ਪੀਲੇ ਕਰਨਾ\` | Ends like a poetic or rhythmic statement without mandatory \`ਣਾ\`, e.g., \`ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ\` |
   | **Flexibility** | Inflects according to tense/gender/number when used (\`ਉਹ ਪਾਣੀ-ਪਾਣੀ ਹੋ ਗਿਆ\`) | Remains **invariant (\`ਅਪਰਿਵਰਤਨਸ਼ੀਲ\`)**; quoted verbatim as folk wisdom |
2. **High-Yield Punjabi Idioms (\`ਮੁਹਾਵਰੇ\`) Matrix:**
   | ਮੁਹਾਵਰਾ (Idiom) | ਅਰਥ (Meaning in Punjabi & English) |
   |---|---|
   | **ਉੱਨੀ-ਇੱਕੀ ਦਾ ਫ਼ਰਕ ਹੋਣਾ** | ਬਹੁਤ ਮਾਮੂਲੀ ਫ਼ਰਕ ਹੋਣਾ (Very minor difference) |
   | **ਅੱਖਾਂ ਵਿੱਚ ਘੱਟਾ ਪਾਉਣਾ** | ਧੋਖਾ ਦੇਣਾ (To deceive / throw dust in eyes) |
   | **ਈਦ ਦਾ ਚੰਦ ਹੋਣਾ** | ਬਹੁਤ ਦੇਰ ਬਾਅਦ ਮਿਲਣਾ ਜਾਂ ਦਿਸਣਾ (To be seen very rarely) |
   | **ਪਾਣੀ-ਪਾਣੀ ਹੋਣਾ** | ਬਹੁਤ ਸ਼ਰਮਿੰਦਾ ਹੋਣਾ (To feel deeply ashamed) |
   | **ਹੱਥ ਪੀਲੇ ਕਰਨਾ** | ਧੀ ਦਾ ਵਿਆਹ ਕਰਨਾ (To get a daughter married) |
   | **ਘਿਓ ਦੇ ਦੀਵੇ ਬਾਲਣਾ** | ਬਹੁਤ ਖ਼ੁਸ਼ੀ ਮਨਾਉਣਾ (To celebrate joyously) |
   | **ਦੰਦ ਖੱਟੇ ਕਰਨਾ** | ਬੁਰੀ ਤਰ੍ਹਾਂ ਹਰਾ ਦੇਣਾ (To defeat soundly) |
   | **ਨੱਕ ਵਿੱਚ ਦਮ ਕਰਨਾ** | ਬਹੁਤ ਤੰਗ ਜਾਂ ਪਰੇਸ਼ਾਨ ਕਰਨਾ (To pester/harass) |
   | **ਲੋਹੇ ਦੇ ਚਣੇ ਚੱਬਣਾ** | ਬਹੁਤ ਔਖਾ ਕੰਮ ਕਰਨਾ (To perform an extremely hard task) |
   | **ਗੁਲਛੱਰੇ ਉਡਾਉਣਾ** | ਮੌਜ-ਮਸਤੀ ਕਰਨਾ / ਐਸ਼ ਉਡਾਉਣਾ (To squander in merrymaking) |

---

### [Level I: Intermediate — Class 9–10 Core & ETT Paper B Matrix]
1. **High-Yield Punjabi Proverbs (\`ਅਖਾਣ / ਲੋਕੋਕਤੀਆਂ\`) Matrix:**
   | ਅਖਾਣ (Proverb) | ਅਰਥ ਅਤੇ ਵਰਤੋਂ (Meaning & Context) |
   |---|---|
   | **ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ** | ਬਾਹਰੋਂ ਦਿਖਾਵਾ ਵੱਧ ਪਰ ਅਸਲੀਅਤ/ਗੁਣਵੱਤਾ ਘੱਟ (Great boast, little roast) |
   | **ਸੱਦੀ ਨਾ ਬੁਲਾਈ, ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ** | ਬਿਨਾਂ ਪੁੱਛੇ ਬਦੋਬਦੀ ਚੌਧਰੀ ਬਣਨਾ (An uninvited meddler claiming authority) |
   | **ਆਪੇ ਮੈਂ ਰੱਜੀ ਪੁੱਜੀ, ਆਪੇ ਮੇਰੇ ਬੱਚੇ ਜੀਣ** | ਆਪਣੀ ਤਾਰੀਫ਼ ਆਪੇ ਕਰੀ ਜਾਣੀ (Self-praise is no recommendation) |
   | **ਘਰ ਦਾ ਜੋਗੀ ਜੋਗੜਾ, ਬਾਹਰ ਦਾ ਜੋਗੀ ਸਿੱਧ** | ਆਪਣੀ ਜਾਂ ਘਰ ਦੀ ਚੀਜ਼/ਵਿਅਕਤੀ ਦੀ ਕਦਰ ਨਾ ਹੋਣੀ ਤੇ ਬਾਹਰਲੇ ਦੀ ਵਡਿਆਈ ਕਰਨੀ (Familiarity breeds contempt) |
   | **ਚੋਰਾਂ ਦੇ ਕੱਪੜੇ, ਡਾਂਗਾਂ ਦੇ ਗਜ਼** | ਮੁਫ਼ਤ ਜਾਂ ਪਰਾਏ ਮਾਲ ਨੂੰ ਬੇਦਰਦੀ ਨਾਲ ਵਰਤਣਾ (Spending ill-gotten/free wealth recklessly) |
   | **ਸੌ ਹੱਥ ਰੱਸਾ, ਸਿਰੇ 'ਤੇ ਗੰਢ** | ਲੰਬੀ-ਚੌੜੀ ਗੱਲਬਾਤ ਦਾ ਅੰਤਿਮ ਨਿਚੋੜ ਜਾਂ ਸਿੱਟਾ (The ultimate crux of a long matter) |
   | **ਗੰਗਾ ਗਏ ਗੰਗਾ ਰਾਮ, ਜਮਨਾ ਗਏ ਜਮਨਾ ਦਾਸ** | ਮੌਕਾਪ੍ਰਸਤ ਜਾਂ ਅਸੂਲ-ਰਹਿਤ ਬੰਦਾ ਜੋ ਸਮੇਂ ਅਨੁਸਾਰ ਬਦਲ ਜਾਵੇ (An opportunist without fixed principles) |
   | **ਕੁੱਛੜ ਕੁੜੀ ਸ਼ਹਿਰ ਢਿੰਡੋਰਾ** | ਚੀਜ਼ ਕੋਲ ਹੋਣੀ ਪਰ ਲੱਭਣ ਲਈ ਬਾਹਰ ਭਟਕਣਾ (Searching everywhere for what is in one's own hands) |
2. **Sentence Structure (\`ਬਣਤਰ ਦੇ ਆਧਾਰ 'ਤੇ ਵਾਕ ਦੀਆਂ 3 ਕਿਸਮਾਂ\`) & Transformation (\`ਵਾਕ ਵਟਾਂਦਰਾ\`):**
   - **Every sentence has 2 parts:** **ਉਦੇਸ਼ (Subject)** and **ਵਿਧੇਅ (Predicate)**.
   - **3 Structural Types:**
     | ਵਾਕ ਦੀ ਕਿਸਮ | ਬਣਤਰ ਅਤੇ ਪਛਾਣ ਚਿੰਨ੍ਹ | ਉਦਾਹਰਨ |
     |---|---|---|
     | **1. ਸਧਾਰਨ ਵਾਕ (Simple Sentence)** | Only **1 independent clause (\`1 ਕਿਰਿਆ\`)**; no conjunctions | \`ਮਿਹਨਤੀ ਵਿਦਿਆਰਥੀ ਸਫ਼ਲ ਹੁੰਦਾ ਹੈ।\` |
     | **2. ਸੰਯੁਕਤ ਵਾਕ (Compound Sentence)** | **2+ independent clauses (\`ਸੁਤੰਤਰ ਉਪਵਾਕ\`)** joined by **ਸਮਾਨ ਯੋਜਕ** (\`ਅਤੇ, ਤੇ, ਪਰ, ਸਗੋਂ, ਜਾਂ, ਇਸ ਲਈ\`) | \`ਬੱਦਲ ਗੱਜੇ **ਪਰ** ਮੀਂਹ ਨਾ ਪਿਆ।\` |
     | **3. ਮਿਸ਼ਰਤ ਵਾਕ (Complex Sentence)** | **1 Principal Clause (\`ਪ੍ਰਧਾਨ ਉਪਵਾਕ\`)** + **1+ Subordinate Clauses (\`ਅਧੀਨ ਉਪਵਾਕ\`)** joined by **ਅਧੀਨ ਯੋਜਕ** (\`ਕਿ, ਕਿਉਂਕਿ, ਜੇ...ਤਾਂ, ਜਦੋਂ...ਉਦੋਂ, ਜਿਹੜਾ...ਉਹ, ਭਾਵੇਂ...ਫਿਰ ਵੀ\`) | \`ਅਧਿਆਪਕ ਨੇ ਕਿਹਾ **ਕਿ** ਮਿਹਨਤ ਦਾ ਫਲ ਮਿੱਠਾ ਹੁੰਦਾ ਹੈ।\` |

---

### [Level A: Advanced — Functional Sentence Transformation & English-to-Punjabi Translation]
1. **Sentence Transformation by Meaning/Voice (\`ਅਰਥ ਅਤੇ ਵਾਚ ਅਨੁਸਾਰ ਵਾਕ ਵਟਾਂਦਰਾ\`):**
   - **Affirmative $\\leftrightarrow$ Negative (\`ਹਾਂ-ਵਾਚਕ \\leftrightarrow ਨਾਂਹ-ਵਾਚਕ\`):**
     - Rule 1 (Grammatical Negation): \`ਉਹ ਸਕੂਲ ਜਾਂਦਾ ਹੈ।\` $\\to$ \`ਉਹ ਸਕੂਲ ਨਹੀਂ ਜਾਂਦਾ ਹੈ।\`
     - Rule 2 (Meaning-Preserving Transformation \`ਅਰਥ ਬਦਲੇ ਬਿਨਾਂ\`): Use antonym + \`ਨਹੀਂ\`, e.g., \`ਉਹ ਸਿਆਣਾ ਹੈ।\` $\\to$ \`ਉਹ ਮੂਰਖ ਨਹੀਂ ਹੈ।\` (\`He is wise\` $\\to$ \`He is not foolish\`).
   - **Active $\\leftrightarrow$ Passive Voice (\`ਕਰਤਰੀ ਵਾਚ \\leftrightarrow ਕਰਮਣੀ ਵਾਚ\`):**
     - \`ਰਾਮ ਨੇ ਰੋਟੀ ਖਾਧੀ।\` (ਕਰਤਰੀ ਵਾਚ) $\\to$ \`ਰਾਮ ਤੋਂ (ਦੁਆਰਾ) ਰੋਟੀ ਖਾਧੀ ਗਈ।\` (ਕਰਮਣੀ ਵਾਚ).
   - **Simple $\\to$ Compound $\\to$ Complex Transformation:**
     - **Simple (\`ਸਧਾਰਨ\`):** \`ਬਿਮਾਰ ਹੋਣ ਕਾਰਨ ਉਹ ਸਕੂਲ ਨਹੀਂ ਆਇਆ।\`
     - **Compound (\`ਸੰਯੁਕਤ\`):** \`ਉਹ ਬਿਮਾਰ ਸੀ **ਇਸ ਲਈ** ਸਕੂਲ ਨਹੀਂ ਆਇਆ।\`
     - **Complex (\`ਮਿਸ਼ਰਤ\`):** \`ਉਹ ਸਕੂਲ ਨਹੀਂ ਆਇਆ **ਕਿਉਂਕਿ** ਉਹ ਬਿਮਾਰ ਸੀ।\`
2. **English-to-Punjabi Translation (\`ਅੰਗਰੇਜ਼ੀ ਤੋਂ ਪੰਜਾਬੀ ਅਨੁਵਾਦ\`) Blueprint:**
   - **Core Syntax Shift:** English follows **SVO** (\`Subject + Verb + Object\`: *Ram reads a book*), whereas Punjabi follows **SOV** (\`ਕਰਤਾ + ਕਰਮ + ਕਿਰਿਆ\`: *ਰਾਮ ਕਿਤਾਬ ਪੜ੍ਹਦਾ ਹੈ*).
   - **High-Yield Proverbial, Modal & Administrative Translations:**
     | English Sentence / Proverb | Authentic Punjabi Translation |
     |---|---|
     | **Honesty is the best policy.** | **ਇਮਾਨਦਾਰੀ ਸਭ ਤੋਂ ਉੱਤਮ ਨੀਤੀ ਹੈ।** |
     | **All that glitters is not gold.** | **ਹਰ ਚਮਕਦੀ ਚੀਜ਼ ਸੋਨਾ ਨਹੀਂ ਹੁੰਦੀ।** |
     | **A rolling stone gathers no moss.** | **ਧੋਬੀ ਦਾ ਕੁੱਤਾ ਨਾ ਘਰ ਦਾ ਨਾ ਘਾਟ ਦਾ।** |
     | **Might is right.** | **ਜਿਸ ਦੀ ਲਾਠੀ ਉਸ ਦੀ ਮੱਝ।** |
     | **Tit for tat.** | **ਜੈਸੇ ਨੂੰ ਤੈਸਾ / ਅਦਲੇ ਦਾ ਬਦਲਾ।** |
     | **Knowledge is power.** | **ਗਿਆਨ ਹੀ ਸ਼ਕਤੀ ਹੈ।** |
     | **It has been raining since morning.** | **ਸਵੇਰ ਤੋਂ ਮੀਂਹ ਪੈ ਰਿਹਾ ਹੈ।** |
     | **Walk carefully lest you should fall.** | **ਧਿਆਨ ਨਾਲ ਚੱਲੋ ਅਜਿਹਾ ਨਾ ਹੋਵੇ ਕਿ ਤੁਸੀਂ ਡਿੱਗ ਪਵੋ।** |`,
            pa: `### [Level B: Basic — Class 6–8 ਬੁਨਿਆਦੀ ਪੱਧਰ]
1. **ਮੁਹਾਵਰੇ ਬਨਾਮ ਅਖਾਣ (ਲੋਕੋਕਤੀਆਂ) — ਮੁੱਖ ਪਛਾਣ ਨਿਯਮ:**
   - **ਮੁਹਾਵਰਾ (Idiom):** ਇਹ ਇੱਕ **ਅਧੂਰਾ ਵਾਕੰਸ਼** ਹੁੰਦਾ ਹੈ ਜਿਸ ਦੇ ਅੰਤ ਵਿੱਚ ਆਮ ਤੌਰ 'ਤੇ **\`ਣਾ, ਣੀ, ਣੇ\`** ਆਉਂਦਾ ਹੈ (ਜਿਵੇਂ \`ਪਾਣੀ-ਪਾਣੀ ਹੋਣਾ, ਹੱਥ ਪੀਲੇ ਕਰਨਾ\`) ਅਤੇ ਵਾਕ ਵਿੱਚ ਵਰਤਣ ਸਮੇਂ ਕਾਲ/ਲਿੰਗ/ਵਚਨ ਅਨੁਸਾਰ ਬਦਲ ਜਾਂਦਾ ਹੈ।
   - **ਅਖਾਣ (Proverb):** ਇਹ ਆਪਣੇ ਆਪ ਵਿੱਚ ਇੱਕ **ਪੂਰਨ ਸੁਤੰਤਰ ਵਾਕ** ਹੁੰਦਾ ਹੈ ਜਿਸ ਵਿੱਚ ਸਦੀਆਂ ਦਾ ਲੋਕ-ਤਜਰਬਾ ਤੇ ਸੱਚ ਸਮੋਇਆ ਹੁੰਦਾ ਹੈ (ਜਿਵੇਂ \`ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ\`)।
2. **ਪ੍ਰਮੁੱਖ ਮੁਹਾਵਰੇ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਅਰਥ:**
   - **\`ਉੱਨੀ-ਇੱਕੀ ਦਾ ਫ਼ਰਕ ਹੋਣਾ\`** = ਬਹੁਤ ਮਾਮੂਲੀ ਫ਼ਰਕ ਹੋਣਾ | **\`ਅੱਖਾਂ ਵਿੱਚ ਘੱਟਾ ਪਾਉਣਾ\`** = ਧੋਖਾ ਦੇਣਾ | **\`ਈਦ ਦਾ ਚੰਦ ਹੋਣਾ\`** = ਬਹੁਤ ਦੇਰ ਬਾਅਦ ਮਿਲਣਾ | **\`ਪਾਣੀ-ਪਾਣੀ ਹੋਣਾ\`** = ਸ਼ਰਮਿੰਦਾ ਹੋਣਾ | **\`ਹੱਥ ਪੀਲੇ ਕਰਨਾ\`** = ਵਿਆਹ ਕਰਨਾ | **\`ਘਿਓ ਦੇ ਦੀਵੇ ਬਾਲਣਾ\`** = ਬਹੁਤ ਖ਼ੁਸ਼ੀ ਮਨਾਉਣਾ | **\`ਦੰਦ ਖੱਟੇ ਕਰਨਾ\`** = ਬੁਰੀ ਤਰ੍ਹਾਂ ਹਰਾ ਦੇਣਾ | **\`ਨੱਕ ਵਿੱਚ ਦਮ ਕਰਨਾ\`** = ਬਹੁਤ ਤੰਗ ਕਰਨਾ।

---

### [Level I: Intermediate — Class 9–10 ਮੱਧ ਪੱਧਰ]
1. **ਪ੍ਰਮੁੱਖ ਅਖਾਣ (ਲੋਕੋਕਤੀਆਂ) ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਅਰਥ:**
   - **\`ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ\`** = ਬਾਹਰੋਂ ਦਿਖਾਵਾ ਵੱਧ ਪਰ ਅਸਲੀਅਤ ਘੱਟ।
   - **\`ਸੱਦੀ ਨਾ ਬੁਲਾਈ, ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ\`** = ਬਿਨਾਂ ਪੁੱਛੇ ਬਦੋਬਦੀ ਚੌਧਰੀ ਬਣਨਾ।
   - **\`ਆਪੇ ਮੈਂ ਰੱਜੀ ਪੁੱਜੀ, ਆਪੇ ਮੇਰੇ ਬੱਚੇ ਜੀਣ\`** = ਆਪਣੀ ਤਾਰੀਫ਼ ਆਪੇ ਕਰਨੀ।
   - **\`ਘਰ ਦਾ ਜੋਗੀ ਜੋਗੜਾ, ਬਾਹਰ ਦਾ ਜੋਗੀ ਸਿੱਧ\`** = ਆਪਣੀ ਚੀਜ਼ ਦੀ ਕਦਰ ਨਾ ਹੋਣੀ ਤੇ ਬਾਹਰਲੇ ਦੀ ਵਡਿਆਈ ਕਰਨੀ।
   - **\`ਚੋਰਾਂ ਦੇ ਕੱਪੜੇ, ਡਾਂਗਾਂ ਦੇ ਗਜ਼\`** = ਮੁਫ਼ਤ ਦੇ ਮਾਲ ਨੂੰ ਬੇਦਰਦੀ ਨਾਲ ਵਰਤਣਾ।
   - **\`ਸੌ ਹੱਥ ਰੱਸਾ, ਸਿਰੇ 'ਤੇ ਗੰਢ\`** = ਲੰਬੀ ਗੱਲਬਾਤ ਦਾ ਅੰਤਿਮ ਨਿਚੋੜ।
   - **\`ਗੰਗਾ ਗਏ ਗੰਗਾ ਰਾਮ, ਜਮਨਾ ਗਏ ਜਮਨਾ ਦਾਸ\`** = ਮੌਕਾਪ੍ਰਸਤ ਜਾਂ ਬੇਅਸੂਲਾ ਬੰਦਾ।
2. **ਬਣਤਰ ਦੇ ਆਧਾਰ 'ਤੇ ਵਾਕ ਦੀਆਂ 3 ਕਿਸਮਾਂ:**
   | ਵਾਕ ਦੀ ਕਿਸਮ | ਪਛਾਣ ਅਤੇ ਯੋਜਕ | ਉਦਾਹਰਨ |
   |---|---|---|
   | **1. ਸਧਾਰਨ ਵਾਕ** | ਕੇਵਲ **ਇੱਕ ਉਦੇਸ਼** ਅਤੇ **ਇੱਕ ਵਿਧੇਅ (ਇੱਕ ਕਿਰਿਆ)** | \`ਬੱਚੇ ਮੈਦਾਨ ਵਿੱਚ ਖੇਡ ਰਹੇ ਹਨ।\` |
   | **2. ਸੰਯੁਕਤ ਵਾਕ** | ਦੋ ਜਾਂ ਵੱਧ **ਸੁਤੰਤਰ ਉਪਵਾਕ** ਜੋ **ਸਮਾਨ ਯੋਜਕਾਂ** (\`ਅਤੇ, ਤੇ, ਪਰ, ਸਗੋਂ, ਜਾਂ, ਇਸ ਲਈ\`) ਨਾਲ ਜੁੜੇ ਹੋਣ | \`ਬੱਦਲ ਗੱਜੇ **ਪਰ** ਮੀਂਹ ਨਾ ਪਿਆ।\` |
   | **3. ਮਿਸ਼ਰਤ ਵਾਕ** | ਇੱਕ **ਪ੍ਰਧਾਨ ਉਪਵਾਕ** + ਇੱਕ ਜਾਂ ਵੱਧ **ਅਧੀਨ ਉਪਵਾਕ** ਜੋ **ਅਧੀਨ ਯੋਜਕਾਂ** (\`ਕਿ, ਕਿਉਂਕਿ, ਜੇ...ਤਾਂ, ਜਦੋਂ, ਜਿਹੜਾ, ਭਾਵੇਂ\`) ਨਾਲ ਜੁੜੇ ਹੋਣ | \`ਅਧਿਆਪਕ ਨੇ ਕਿਹਾ **ਕਿ** ਮਿਹਨਤ ਦਾ ਫਲ ਮਿੱਠਾ ਹੁੰਦਾ ਹੈ।\` |

---

### [Level A: Advanced — ਵਾਕ ਵਟਾਂਦਰਾ ਅਤੇ ਅੰਗਰੇਜ਼ੀ ਤੋਂ ਪੰਜਾਬੀ ਅਨੁਵਾਦ]
1. **ਵਾਕ ਵਟਾਂਦਰਾ (Sentence Transformation):**
   - **ਸਧਾਰਨ $\\to$ ਸੰਯੁਕਤ $\\to$ ਮਿਸ਼ਰਤ:**
     - **ਸਧਾਰਨ:** \`ਬਿਮਾਰ ਹੋਣ ਕਾਰਨ ਉਹ ਸਕੂਲ ਨਹੀਂ ਆਇਆ।\`
     - **ਸੰਯੁਕਤ:** \`ਉਹ ਬਿਮਾਰ ਸੀ **ਇਸ ਲਈ** ਸਕੂਲ ਨਹੀਂ ਆਇਆ।\`
     - **ਮਿਸ਼ਰਤ:** \`ਉਹ ਸਕੂਲ ਨਹੀਂ ਆਇਆ **ਕਿਉਂਕਿ** ਉਹ ਬਿਮਾਰ ਸੀ।\`
   - **ਕਰਤਰੀ ਵਾਚ $\\leftrightarrow$ ਕਰਮਣੀ ਵਾਚ:** \`ਰਾਮ ਨੇ ਰੋਟੀ ਖਾਧੀ।\` $\\to$ \`ਰਾਮ ਤੋਂ ਰੋਟੀ ਖਾਧੀ ਗਈ।\`
   - **ਹਾਂ-ਵਾਚਕ $\\leftrightarrow$ ਨਾਂਹ-ਵਾਚਕ (ਅਰਥ ਬਦਲੇ ਬਿਨਾਂ):** \`ਉਹ ਸਿਆਣਾ ਹੈ।\` $\\to$ \`ਉਹ ਮੂਰਖ ਨਹੀਂ ਹੈ।\`
2. **ਅੰਗਰੇਜ਼ੀ ਤੋਂ ਪੰਜਾਬੀ ਅਨੁਵਾਦ (SVO $\\to$ SOV):**
   - \`Honesty is the best policy\` $\\to$ **ਇਮਾਨਦਾਰੀ ਸਭ ਤੋਂ ਉੱਤਮ ਨੀਤੀ ਹੈ।**
   - \`All that glitters is not gold\` $\\to$ **ਹਰ ਚਮਕਦੀ ਚੀਜ਼ ਸੋਨਾ ਨਹੀਂ ਹੁੰਦੀ।**
   - \`A rolling stone gathers no moss\` $\\to$ **ਧੋਬੀ ਦਾ ਕੁੱਤਾ ਨਾ ਘਰ ਦਾ ਨਾ ਘਾਟ ਦਾ।**
   - \`Knowledge is power\` $\\to$ **ਗਿਆਨ ਹੀ ਸ਼ਕਤੀ ਹੈ।**
   - \`It has been raining since morning\` $\\to$ **ਸਵੇਰ ਤੋਂ ਮੀਂਹ ਪੈ ਰਿਹਾ ਹੈ।**`,
            hi: `### [Level B: Basic — Class 6–8 आधारभूत स्तर]
1. **मुहावरे (\`ਮੁਹਾਵਰੇ\`) बनाम अखाण/लोकोक्तियाँ (\`ਅਖਾਣ\`):**
   - **मुहावरा:** एक वाक्यांश है जिसके अंत में प्रायः **\`ਣਾ, ਣੀ, ਣੇ\`** आता है (\`ਪਾਣੀ-ਪਾਣੀ ਹੋਣਾ\` = लज्जित होना; \`ਹੱਥ ਪੀਲੇ ਕਰਨਾ\` = विवाह करना; \`ਈਦ ਦਾ ਚੰਦ ਹੋਣਾ\` = बहुत दिनों बाद दिखना)।
   - **अखाण (लोकोक्ति):** एक पूर्ण स्वतंत्र वाक्य होता है (\`ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ\` = दिखावा अधिक, वास्तविकता कम; \`ਸੱਦੀ ਨਾ ਬੁਲਾਈ ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ\` = बिना बुलाए चौधरी बनना)।

---

### [Level I: Intermediate — Class 9–10 मध्यम स्तर]
1. **रचना के आधार पर वाक्य के 3 भेद:**
   - **1. ਸਧਾਰਨ ਵਾਕ (सरल वाक्य):** एक उद्देश्य और एक विधेय (\`ਬੱਚੇ ਖੇਡ ਰਹੇ ਹਨ।\`)।
   - **2. ਸੰਯੁਕਤ ਵਾਕ (संयुक्त वाक्य):** दो स्वतंत्र उपवाक्य जो **समान योजक** (\`ਅਤੇ, ਤੇ, ਪਰ, ਸਗੋਂ, ਜਾਂ, ਇਸ ਲਈ\`) से जुड़े हों (\`ਬੱਦਲ ਗੱਜੇ ਪਰ ਮੀਂਹ ਨਾ ਪਿਆ।\`)।
   - **3. ਮਿਸ਼ਰਤ ਵਾਕ (मिश्रित वाक्य):** एक प्रधान उपवाक्य और एक या अधिक अधीन उपवाक्य जो **अधीन योजक** (\`ਕਿ, ਕਿਉਂਕਿ, ਜੇ...ਤਾਂ, ਜਦੋਂ, ਜਿਹੜਾ, ਭਾਵੇਂ\`) से जुड़े हों।

---

### [Level A: Advanced — वाक्य रूपांतरण एवं अंग्रेज़ी से पंजाबी अनुवाद]
1. **वाच्य एवं वाक्य परिवर्तन:** \`ਰਾਮ ਨੇ ਰੋਟੀ ਖਾਧੀ\` (कर्तृवाच्य) $\\to$ \`ਰਾਮ ਤੋਂ ਰੋਟੀ ਖਾਧੀ ਗਈ\` (कर्मवाच्य)।
2. **अंग्रेज़ी से पंजाबी अनुवाद (SVO $\\to$ SOV):**
   - \`Honesty is the best policy\` $\\to$ **ਇਮਾਨਦਾਰੀ ਸਭ ਤੋਂ ਉੱਤਮ ਨੀਤੀ ਹੈ।**
   - \`A rolling stone gathers no moss\` $\\to$ **ਧੋਬੀ ਦਾ ਕੁੱਤਾ ਨਾ ਘਰ ਦਾ ਨਾ ਘਾਟ ਦਾ।**
   - \`All that glitters is not gold\` $\\to$ **ਹਰ ਚਮਕਦੀ ਚੀਜ਼ ਸੋਨਾ ਨਹੀਂ ਹੁੰਦੀ।**`
        },
        keyNotes: {
            en: [
                '**Idiom vs Proverb Identification Rule:** A **ਮੁਹਾਵਰਾ (Idiom)** is a phrase ending in an infinitive verb (`ਣਾ, ਣੀ, ਣੇ`, e.g., `ਅੱਖਾਂ ਵਿੱਚ ਘੱਟਾ ਪਾਉਣਾ`), whereas an **ਅਖਾਣ (Proverb)** is a complete standalone sentence (`ਘਰ ਦਾ ਜੋਗੀ ਜੋਗੜਾ, ਬਾਹਰ ਦਾ ਜੋਗੀ ਸਿੱਧ`).',
                '**3 Sentence Types by Structure (`ਬਣਤਰ ਅਨੁਸਾਰ`):** **1. ਸਧਾਰਨ ਵਾਕ (Simple)** = 1 finite verb; **2. ਸੰਯੁਕਤ ਵਾਕ (Compound)** = joined by **ਸਮਾਨ ਯੋਜਕ** (`ਅਤੇ, ਤੇ, ਪਰ, ਸਗੋਂ, ਜਾਂ, ਇਸ ਲਈ`); **3. ਮਿਸ਼ਰਤ ਵਾਕ (Complex)** = joined by **ਅਧੀਨ ਯੋਜਕ** (`ਕਿ, ਕਿਉਂਕਿ, ਜੇ...ਤਾਂ, ਜਦੋਂ, ਜਿਹੜਾ, ਭਾਵੇਂ`).',
                '**Subject & Predicate:** Every Punjabi sentence consists of **ਉਦੇਸ਼ (Subject — about whom something is said)** and **ਵਿਧੇਅ (Predicate — what is said about the subject)**.',
                '**Active to Passive (`ਕਰਤਰੀ \\to ਕਰਮਣੀ`):** Replace subject postposition `ਨੇ` with `ਤੋਂ / ਦੁਆਰਾ` and convert the verb to passive (`ਖਾਧੀ \\to ਖਾਧੀ ਗਈ`).',
                '**English SVO to Punjabi SOV:** English places the verb before the object (`Subject + Verb + Object`), while Punjabi places the verb at the end (`ਕਰਤਾ + ਕਰਮ + ਕਿਰਿਆ`).',
                '**Proverbial Translation Equivalents:** Proverb translations use cultural equivalents, not literal word-for-word translation (e.g., *A rolling stone gathers no moss* = **`ਧੋਬੀ ਦਾ ਕੁੱਤਾ ਨਾ ਘਰ ਦਾ ਨਾ ਘਾਟ ਦਾ`**; *Might is right* = **`ਜਿਸ ਦੀ ਲਾਠੀ ਉਸ ਦੀ ਮੱਝ`**).'
            ],
            pa: [
                '**ਮੁਹਾਵਰੇ ਅਤੇ ਅਖਾਣ ਦੀ ਪਛਾਣ:** **ਮੁਹਾਵਰਾ** ਇੱਕ ਵਾਕੰਸ਼ ਹੁੰਦਾ ਹੈ ਜਿਸ ਦੇ ਅੰਤ ਵਿੱਚ `ਣਾ, ਣੀ, ਣੇ` ਆਉਂਦਾ ਹੈ (`ਅੱਖਾਂ ਵਿੱਚ ਘੱਟਾ ਪਾਉਣਾ`), ਜਦਕਿ **ਅਖਾਣ** ਇੱਕ ਪੂਰਾ ਸੁਤੰਤਰ ਵਾਕ ਹੁੰਦਾ ਹੈ (`ਘਰ ਦਾ ਜੋਗੀ ਜੋਗੜਾ, ਬਾਹਰ ਦਾ ਜੋਗੀ ਸਿੱਧ`)।',
                '**ਬਣਤਰ ਅਨੁਸਾਰ ਵਾਕ ਦੀਆਂ 3 ਕਿਸਮਾਂ:** **1. ਸਧਾਰਨ ਵਾਕ** (ਇੱਕ ਕਿਰਿਆ), **2. ਸੰਯੁਕਤ ਵਾਕ** (ਸਮਾਨ ਯੋਜਕ: `ਅਤੇ, ਤੇ, ਪਰ, ਸਗੋਂ, ਜਾਂ, ਇਸ ਲਈ`), **3. ਮਿਸ਼ਰਤ ਵਾਕ** (ਅਧੀਨ ਯੋਜਕ: `ਕਿ, ਕਿਉਂਕਿ, ਜੇ...ਤਾਂ, ਜਦੋਂ, ਜਿਹੜਾ, ਭਾਵੇਂ`)।',
                '**ਉਦੇਸ਼ ਅਤੇ ਵਿਧੇਅ:** ਵਾਕ ਵਿੱਚ ਜਿਸ ਬਾਰੇ ਕੁਝ ਕਿਹਾ ਜਾਵੇ ਉਹ **ਉਦੇਸ਼ (Subject)** ਅਤੇ ਜੋ ਕੁਝ ਕਿਹਾ ਜਾਵੇ ਉਹ **ਵਿਧੇਅ (Predicate)** ਹੁੰਦਾ ਹੈ।',
                '**ਕਰਤਰੀ ਤੋਂ ਕਰਮਣੀ ਵਾਚ:** ਕਰਤਾ ਦੇ ਨਾਲ ਲੱਗੇ `ਨੇ` ਨੂੰ `ਤੋਂ / ਦੁਆਰਾ` ਵਿੱਚ ਬਦਲ ਕੇ ਕਿਰਿਆ ਦਾ ਰੂਪ ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ (`ਰਾਮ ਨੇ ਰੋਟੀ ਖਾਧੀ \\to ਰਾਮ ਤੋਂ ਰੋਟੀ ਖਾਧੀ ਗਈ`)।',
                '**ਅੰਗਰੇਜ਼ੀ SVO ਤੋਂ ਪੰਜਾਬੀ SOV ਤਰਤੀਬ:** ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ `Subject + Verb + Object` ਹੁੰਦਾ ਹੈ, ਜਦਕਿ ਪੰਜਾਬੀ ਵਿੱਚ `ਕਰਤਾ + ਕਰਮ + ਕਿਰਿਆ` ਦੀ ਤਰਤੀਬ ਹੁੰਦੀ ਹੈ।',
                '**ਅਖਾਣਾਂ ਦਾ ਅਨੁਵਾਦ:** ਅੰਗਰੇਜ਼ੀ ਅਖਾਣਾਂ ਦਾ ਸ਼ਬਦੀ ਅਨੁਵਾਦ ਨਹੀਂ ਸਗੋਂ ਭਾਵ ਅਨੁਸਾਰ ਢੁਕਵਾਂ ਪੰਜਾਬੀ ਅਖਾਣ ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ (ਜਿਵੇਂ *A rolling stone gathers no moss* = **`ਧੋਬੀ ਦਾ ਕੁੱਤਾ ਨਾ ਘਰ ਦਾ ਨਾ ਘਾਟ ਦਾ`**)।'
            ],
            hi: [
                '**मुहावरा बनाम अखाण पहचान:** **ਮੁਹਾਵਰਾ** एक वाक्यांश है जिसके अंत में `ਣਾ, ਣੀ, ਣੇ` आता है, जबकि **ਅਖਾਣ** एक पूर्ण स्वतंत्र वाक्य है।',
                '**रचना के अनुसार 3 वाक्य भेद:** **1. ਸਧਾਰਨ ਵਾਕ** (सरल), **2. ਸੰਯੁਕਤ ਵਾਕ** (समान योजक: `ਅਤੇ, ਤੇ, ਪਰ, ਸਗੋਂ, ਜਾਂ, ਇਸ ਲਈ`), **3. ਮਿਸ਼ਰਤ ਵਾਕ** (अधीन योजक: `ਕਿ, ਕਿਉਂਕਿ, ਜੇ...ਤਾਂ, ਜਦੋਂ, ਜਿਹੜਾ, ਭਾਵੇਂ`)।',
                '**उद्देश्य और विधेय:** वाक्य के दो मुख्य अंग **ਉਦੇਸ਼ (Subject)** और **ਵਿਧੇਅ (Predicate)** होते हैं।',
                '**कर्तृवाच्य से कर्मवाच्य:** `ਰਾਮ ਨੇ ਰੋਟੀ ਖਾਧੀ \\to ਰਾਮ ਤੋਂ ਰੋਟੀ ਖਾਧੀ ਗਈ`।',
                '**SVO से SOV क्रम:** अंग्रेज़ी में `Subject + Verb + Object` तथा पंजाबी में `ਕਰਤਾ + ਕਰਮ + ਕਿਰਿਆ` क्रम होता है।',
                '**लोकोक्ति अनुवाद:** *A rolling stone gathers no moss* = **`ਧੋਬੀ ਦਾ ਕੁੱਤਾ ਨਾ ਘਰ ਦਾ ਨਾ ਘਾਟ ਦਾ`**; *Might is right* = **`ਜਿਸ ਦੀ ਲਾਠੀ ਉਸ ਦੀ ਮੱਝ`**।'
            ]
        },
        quickRevisionSheet: {
            en: [
                '**Saman Yojak (Compound Sentence Markers):** `ਅਤੇ, ਤੇ, ਪਰ, ਸਗੋਂ, ਜਾਂ, ਚਾਹੇ, ਇਸ ਲਈ, ਪਰੰਤੂ`.',
                '**Adheen Yojak (Complex Sentence Markers):** `ਕਿ, ਕਿਉਂਕਿ, ਜੇ...ਤਾਂ, ਜਦੋਂ...ਉਦੋਂ, ਜਿਹੜਾ...ਉਹ, ਭਾਵੇਂ...ਫਿਰ ਵੀ, ਤਾਂ ਜੋ`.',
                '**Top 5 Idioms:** `ਉੱਨੀ-ਇੱਕੀ ਦਾ ਫ਼ਰਕ ਹੋਣਾ` = ਮਾਮੂਲੀ ਫ਼ਰਕ | `ਪਾਣੀ-ਪਾਣੀ ਹੋਣਾ` = ਸ਼ਰਮਿੰਦਾ ਹੋਣਾ | `ਹੱਥ ਪੀਲੇ ਕਰਨਾ` = ਵਿਆਹ ਕਰਨਾ | `ਦੰਦ ਖੱਟੇ ਕਰਨਾ` = ਹਰਾ ਦੇਣਾ | `ਈਦ ਦਾ ਚੰਦ ਹੋਣਾ` = ਬਹੁਤ ਦੇਰ ਬਾਅਦ ਮਿਲਣਾ.',
                '**Top 5 Proverbs:** `ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ` = ਦਿਖਾਵਾ ਵੱਧ ਅਸਲੀਅਤ ਘੱਟ | `ਸੱਦੀ ਨਾ ਬੁਲਾਈ ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ` = ਬਦੋਬਦੀ ਚੌਧਰੀ ਬਣਨਾ | `ਚੋਰਾਂ ਦੇ ਕੱਪੜੇ ਡਾਂਗਾਂ ਦੇ ਗਜ਼` = ਮੁਫ਼ਤ ਦੇ ਮਾਲ ਦੀ ਬੇਕਦਰੀ | `ਸੌ ਹੱਥ ਰੱਸਾ ਸਿਰੇ ਤੇ ਗੰਢ` = ਗੱਲ ਦਾ ਨਿਚੋੜ.',
                '**Top 4 Translations:** *Honesty is the best policy* = `ਇਮਾਨਦਾਰੀ ਸਭ ਤੋਂ ਉੱਤਮ ਨੀਤੀ ਹੈ` | *All that glitters is not gold* = `ਹਰ ਚਮਕਦੀ ਚੀਜ਼ ਸੋਨਾ ਨਹੀਂ ਹੁੰਦੀ` | *A rolling stone gathers no moss* = `ਧੋਬੀ ਦਾ ਕੁੱਤਾ ਨਾ ਘਰ ਦਾ ਨਾ ਘਾਟ ਦਾ` | *Might is right* = `ਜਿਸ ਦੀ ਲਾਠੀ ਉਸ ਦੀ ਮੱਝ`.'
            ],
            pa: [
                '**ਸੰਯੁਕਤ ਵਾਕ ਦੇ ਪਛਾਣ ਸ਼ਬਦ (ਸਮਾਨ ਯੋਜਕ):** `ਅਤੇ, ਤੇ, ਪਰ, ਸਗੋਂ, ਜਾਂ, ਚਾਹੇ, ਇਸ ਲਈ, ਪਰੰਤੂ`।',
                '**ਮਿਸ਼ਰਤ ਵਾਕ ਦੇ ਪਛਾਣ ਸ਼ਬਦ (ਅਧੀਨ ਯੋਜਕ):** `ਕਿ, ਕਿਉਂਕਿ, ਜੇ...ਤਾਂ, ਜਦੋਂ...ਉਦੋਂ, ਜਿਹੜਾ...ਉਹ, ਭਾਵੇਂ...ਫਿਰ ਵੀ, ਤਾਂ ਜੋ`।',
                '**ਪ੍ਰਮੁੱਖ 5 ਮੁਹਾਵਰੇ:** `ਉੱਨੀ-ਇੱਕੀ ਦਾ ਫ਼ਰਕ ਹੋਣਾ` = ਮਾਮੂਲੀ ਫ਼ਰਕ | `ਪਾਣੀ-ਪਾਣੀ ਹੋਣਾ` = ਸ਼ਰਮਿੰਦਾ ਹੋਣਾ | `ਹੱਥ ਪੀਲੇ ਕਰਨਾ` = ਵਿਆਹ ਕਰਨਾ | `ਦੰਦ ਖੱਟੇ ਕਰਨਾ` = ਹਰਾ ਦੇਣਾ | `ਈਦ ਦਾ ਚੰਦ ਹੋਣਾ` = ਬਹੁਤ ਦੇਰ ਬਾਅਦ ਮਿਲਣਾ।',
                '**ਪ੍ਰਮੁੱਖ 5 ਅਖਾਣ:** `ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ` = ਦਿਖਾਵਾ ਵੱਧ ਅਸਲੀਅਤ ਘੱਟ | `ਸੱਦੀ ਨਾ ਬੁਲਾਈ ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ` = ਬਦੋਬਦੀ ਚੌਧਰੀ ਬਣਨਾ | `ਚੋਰਾਂ ਦੇ ਕੱਪੜੇ ਡਾਂਗਾਂ ਦੇ ਗਜ਼` = ਮੁਫ਼ਤ ਦੇ ਮਾਲ ਦੀ ਬੇਕਦਰੀ | `ਸੌ ਹੱਥ ਰੱਸਾ ਸਿਰੇ ਤੇ ਗੰਢ` = ਗੱਲ ਦਾ ਨਿਚੋੜ।',
                '**ਪ੍ਰਮੁੱਖ 4 ਅਨੁਵਾਦ:** *Honesty is the best policy* = `ਇਮਾਨਦਾਰੀ ਸਭ ਤੋਂ ਉੱਤਮ ਨੀਤੀ ਹੈ` | *All that glitters is not gold* = `ਹਰ ਚਮਕਦੀ ਚੀਜ਼ ਸੋਨਾ ਨਹੀਂ ਹੁੰਦੀ` | *A rolling stone gathers no moss* = `ਧੋਬੀ ਦਾ ਕੁੱਤਾ ਨਾ ਘਰ ਦਾ ਨਾ ਘਾਟ ਦਾ` | *Might is right* = `ਜਿਸ ਦੀ ਲਾਠੀ ਉਸ ਦੀ ਮੱਝ`।'
            ],
            hi: [
                '**संयुक्त वाक्य पहचान (समान योजक):** `ਅਤੇ, ਤੇ, ਪਰ, ਸਗੋਂ, ਜਾਂ, ਚਾਹੇ, ਇਸ ਲਈ, ਪਰੰਤੂ`।',
                '**मिश्रित वाक्य पहचान (अधीन योजक):** `ਕਿ, ਕਿਉਂਕਿ, ਜੇ...ਤਾਂ, ਜਦੋਂ...ਉਦੋਂ, ਜਿਹੜਾ...ਉਹ, ਭਾਵੇਂ...ਫਿਰ ਵੀ, ਤਾਂ ਜੋ`।',
                '**शीर्ष 5 मुहावरे:** `ਉੱਨੀ-ਇੱਕੀ ਦਾ ਫ਼ਰਕ ਹੋਣਾ` = मामूली अंतर | `ਪਾਣੀ-ਪਾਣੀ ਹੋਣਾ` = शर्मिंदा होना | `ਹੱਥ ਪੀਲੇ ਕਰਨਾ` = विवाह करना | `ਦੰਦ ਖੱਟੇ ਕਰਨਾ` = हरा देना | `ਈਦ ਦਾ ਚੰਦ ਹੋਣਾ` = बहुत दिनों बाद मिलना।',
                '**शीर्ष 5 अखाण:** `ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ` = दिखावा अधिक गुण कम | `ਸੱਦੀ ਨਾ ਬੁਲਾਈ ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ` = बिना पूछे चौधरी बनना | `ਚੋਰਾਂ ਦੇ ਕੱਪੜੇ ਡਾਂਗਾਂ ਦੇ ਗਜ਼` = मुफ़्त के माल का दुरुपयोग | `ਸੌ ਹੱਥ ਰੱਸਾ ਸਿਰੇ ਤੇ ਗੰਢ` = बात का निचोड़।',
                '**शीर्ष 4 अनुवाद:** *Honesty is the best policy* = `ਇਮਾਨਦਾਰੀ ਸਭ ਤੋਂ ਉੱਤਮ ਨੀਤੀ ਹੈ` | *All that glitters is not gold* = `ਹਰ ਚਮਕਦੀ ਚੀਜ਼ ਸੋਨਾ ਨਹੀਂ ਹੁੰਦੀ`।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Any long sentence joined by a conjunction is a Complex Sentence (`ਮਿਸ਼ਰਤ ਵਾਕ`). Correction: If the clauses are independent and joined by **`ਅਤੇ, ਤੇ, ਪਰ, ਜਾਂ, ਸਗੋਂ, ਇਸ ਲਈ`**, it is a **Compound Sentence (`ਸੰਯੁਕਤ ਵਾਕ`)**; it is a **Complex Sentence (`ਮਿਸ਼ਰਤ ਵਾਕ`)** only when joined by subordinating conjunctions like **`ਕਿ, ਕਿਉਂਕਿ, ਜੇ...ਤਾਂ, ਜਦੋਂ, ਜਿਹੜਾ, ਭਾਵੇਂ`**.',
                'Misconception: `ਗੰਗਾ ਗਏ ਗੰਗਾ ਰਾਮ, ਜਮਨਾ ਗਏ ਜਮਨਾ ਦਾਸ` is an idiom (`ਮੁਹਾਵਰਾ`). Correction: It does not end in `ਣਾ/ਣੀ` and is a complete standalone sentence expressing folk wisdom about an opportunist, so it is a **Proverb (`ਅਖਾਣ`)**.',
                'Misconception: Translating *"It has been raining since morning"* into Punjabi uses the Simple Present (`ਸਵੇਰ ਤੋਂ ਮੀਂਹ ਪੈਂਦਾ ਹੈ`). Correction: Present Perfect Continuous with `since/for` translates into Punjabi continuous aspect with time marker: **`ਸਵੇਰ ਤੋਂ ਮੀਂਹ ਪੈ ਰਿਹਾ ਹੈ।`**'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਯੋਜਕ ਨਾਲ ਜੁੜਿਆ ਹਰ ਲੰਬਾ ਵਾਕ ਮਿਸ਼ਰਤ ਵਾਕ ਹੁੰਦਾ ਹੈ। ਸੁਧਾਰ: ਜੇਕਰ ਦੋ ਸੁਤੰਤਰ ਉਪਵਾਕ **`ਅਤੇ, ਤੇ, ਪਰ, ਸਗੋਂ, ਜਾਂ, ਇਸ ਲਈ`** (ਸਮਾਨ ਯੋਜਕ) ਨਾਲ ਜੁੜੇ ਹੋਣ ਤਾਂ ਉਹ **ਸੰਯੁਕਤ ਵਾਕ** ਹੁੰਦਾ ਹੈ; **ਮਿਸ਼ਰਤ ਵਾਕ** ਵਿੱਚ **`ਕਿ, ਕਿਉਂਕਿ, ਜੇ...ਤਾਂ, ਜਦੋਂ, ਜਿਹੜਾ, ਭਾਵੇਂ`** (ਅਧੀਨ ਯੋਜਕ) ਲੱਗਦੇ ਹਨ।',
                'ਭੁਲੇਖਾ: `ਗੰਗਾ ਗਏ ਗੰਗਾ ਰਾਮ, ਜਮਨਾ ਗਏ ਜਮਨਾ ਦਾਸ` ਇੱਕ ਮੁਹਾਵਰਾ ਹੈ। ਸੁਧਾਰ: ਇਹ ਇੱਕ ਪੂਰਨ ਵਾਕ ਹੈ ਜੋ ਮੌਕਾਪ੍ਰਸਤ ਬੰਦੇ ਦੇ ਸੁਭਾਅ ਨੂੰ ਪ੍ਰਗਟਾਉਂਦਾ ਹੈ, ਇਸ ਲਈ ਇਹ **ਅਖਾਣ (ਲੋਕੋਕਤੀ)** ਹੈ।',
                'ਭੁਲੇਖਾ: *"It has been raining since morning"* ਦਾ ਅਨੁਵਾਦ `ਸਵੇਰ ਤੋਂ ਮੀਂਹ ਪੈਂਦਾ ਹੈ` ਹੁੰਦਾ ਹੈ। ਸੁਧਾਰ: ਇਸ ਦਾ ਸ਼ੁੱਧ ਪੰਜਾਬੀ ਅਨੁਵਾਦ **`ਸਵੇਰ ਤੋਂ ਮੀਂਹ ਪੈ ਰਿਹਾ ਹੈ`** ਹੁੰਦਾ ਹੈ।'
            ],
            hi: [
                'भ्रांति: योजक से जुड़ा प्रत्येक लंबा वाक्य मिश्रित वाक्य (`ਮਿਸ਼ਰਤ ਵਾਕ`) होता है। सुधार: यदि स्वतंत्र उपवाक्य **`ਅਤੇ, ਤੇ, ਪਰ, ਸਗੋਂ, ਜਾਂ, ਇਸ ਲਈ`** से जुड़े हों तो वह **ਸੰਯੁਕਤ ਵਾਕ** है; **ਮਿਸ਼ਰਤ ਵਾਕ** में **`ਕਿ, ਕਿਉਂਕਿ, ਜੇ...ਤਾਂ, ਜਦੋਂ, ਜਿਹੜਾ, ਭਾਵੇਂ`** का प्रयोग होता है।',
                'भ्रांति: `ਗੰਗਾ ਗਏ ਗੰਗਾ ਰਾਮ, ਜਮਨਾ ਗਏ ਜਮਨਾ ਦਾਸ` एक मुहावरा है। सुधार: यह एक पूर्ण वाक्य है, अतः यह **ਅਖਾਣ (लोकोक्ति)** है।',
                'भ्रांति: *"It has been raining since morning"* का अनुवाद `ਸਵੇਰ ਤੋਂ ਮੀਂਹ ਪੈਂਦਾ ਹੈ` होता है। सुधार: इसका शुद्ध अनुवाद **`ਸਵੇਰ ਤੋਂ ਮੀਂਹ ਪੈ ਰਿਹਾ ਹੈ`** है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: '[ETT Paper B Sentence Transformation MCQ] Classify the following three sentences as ਸਧਾਰਨ (Simple), ਸੰਯੁਕਤ (Compound), or ਮਿਸ਼ਰਤ (Complex):\n(1) ਮਿਹਨਤ ਕਰਨ ਵਾਲੇ ਵਿਦਿਆਰਥੀ ਪਾਸ ਹੋ ਜਾਂਦੇ ਹਨ।\n(2) ਉਸ ਨੇ ਬਹੁਤ ਮਿਹਨਤ ਕੀਤੀ ਪਰ ਉਹ ਪਾਸ ਨਾ ਹੋ ਸਕਿਆ।\n(3) ਜਿਹੜੇ ਵਿਦਿਆਰਥੀ ਮਿਹਨਤ ਕਰਦੇ ਹਨ, ਉਹ ਜ਼ਰੂਰ ਪਾਸ ਹੁੰਦੇ ਹਨ।',
                    pa: '[ETT Paper B ਵਾਕ ਬੋਧ MCQ] ਹੇਠ ਲਿਖੇ ਤਿੰਨ ਵਾਕਾਂ ਨੂੰ ਸਧਾਰਨ, ਸੰਯੁਕਤ ਜਾਂ ਮਿਸ਼ਰਤ ਵਾਕ ਵਿੱਚ ਵੰਡੋ:\n(1) ਮਿਹਨਤ ਕਰਨ ਵਾਲੇ ਵਿਦਿਆਰਥੀ ਪਾਸ ਹੋ ਜਾਂਦੇ ਹਨ।\n(2) ਉਸ ਨੇ ਬਹੁਤ ਮਿਹਨਤ ਕੀਤੀ ਪਰ ਉਹ ਪਾਸ ਨਾ ਹੋ ਸਕਿਆ।\n(3) ਜਿਹੜੇ ਵਿਦਿਆਰਥੀ ਮਿਹਨਤ ਕਰਦੇ ਹਨ, ਉਹ ਜ਼ਰੂਰ ਪਾਸ ਹੁੰਦੇ ਹਨ।',
                    hi: '[ETT Paper B वाक्य बोध MCQ] निम्नलिखित तीन वाक्यों को साधारण, संयुक्त या मिश्रित वाक्य में वर्गीकृत कीजिए:\n(1) ਮਿਹਨਤ ਕਰਨ ਵਾਲੇ ਵਿਦਿਆਰਥੀ ਪਾਸ ਹੋ ਜਾਂਦੇ ਹਨ।\n(2) ਉਸ ਨੇ ਬਹੁਤ ਮਿਹਨਤ ਕੀਤੀ ਪਰ ਉਹ ਪਾਸ ਨਾ ਹੋ ਸਕਿਆ।\n(3) ਜਿਹੜੇ ਵਿਦਿਆਰਥੀ ਮਿਹਨਤ ਕਰਦੇ ਹਨ, ਉਹ ਜ਼ਰੂਰ ਪਾਸ ਹੁੰਦੇ ਹਨ।'
                },
                solutionSteps: {
                    en: [
                        'Sentence (1) has a single finite verb (`ਪਾਸ ਹੋ ਜਾਂਦੇ ਹਨ`) and no clause-joining conjunction $\\to$ **ਸਧਾਰਨ ਵਾਕ (Simple Sentence)**.',
                        'Sentence (2) has two independent clauses joined by the coordinating conjunction **`ਪਰ` (ਸਮਾਨ ਯੋਜਕ)** $\\to$ **ਸੰਯੁਕਤ ਵਾਕ (Compound Sentence)**.',
                        'Sentence (3) has a subordinate clause starting with **`ਜਿਹੜੇ`** and a principal clause starting with **`ਉਹ`** $\\to$ **ਮਿਸ਼ਰਤ ਵਾਕ (Complex Sentence)**.'
                    ],
                    pa: [
                        'ਵਾਕ (1) ਵਿੱਚ ਕੇਵਲ ਇੱਕ ਮੁੱਖ ਕਿਰਿਆ (`ਪਾਸ ਹੋ ਜਾਂਦੇ ਹਨ`) ਹੈ ਅਤੇ ਕੋਈ ਉਪਵਾਕ ਨਹੀਂ ਹੈ $\\to$ **ਸਧਾਰਨ ਵਾਕ**।',
                        'ਵਾਕ (2) ਵਿੱਚ ਦੋ ਸੁਤੰਤਰ ਉਪਵਾਕ ਸਮਾਨ ਯੋਜਕ **`ਪਰ`** ਨਾਲ ਜੁੜੇ ਹੋਏ ਹਨ $\\to$ **ਸੰਯੁਕਤ ਵਾਕ**।',
                        'ਵਾਕ (3) ਵਿੱਚ **`ਜਿਹੜੇ...ਉਹ`** ਅਧੀਨ ਯੋਜਕ ਨਾਲ ਪ੍ਰਧਾਨ ਅਤੇ ਅਧੀਨ ਉਪਵਾਕ ਜੁੜੇ ਹਨ $\\to$ **ਮਿਸ਼ਰਤ ਵਾਕ**।'
                    ],
                    hi: [
                        'वाक्य (1) में केवल एक मुख्य क्रिया है $\\to$ **ਸਧਾਰਨ ਵਾਕ (सरल वाक्य)**।',
                        'वाक्य (2) में दो स्वतंत्र उपवाक्य समान योजक **`ਪਰ`** से जुड़े हैं $\\to$ **ਸੰਯੁਕਤ ਵਾਕ (संयुक्त वाक्य)**।',
                        'वाक्य (3) में **`ਜਿਹੜੇ...ਉਹ`** से प्रधान और आश्रित उपवाक्य जुड़े हैं $\\to$ **ਮਿਸ਼ਰਤ ਵਾਕ (मिश्रित वाक्य)**।'
                    ]
                },
                finalAnswer: {
                    en: '(1) ਸਧਾਰਨ ਵਾਕ (Simple), (2) ਸੰਯੁਕਤ ਵਾਕ (Compound), (3) ਮਿਸ਼ਰਤ ਵਾਕ (Complex).',
                    pa: '(1) ਸਧਾਰਨ ਵਾਕ, (2) ਸੰਯੁਕਤ ਵਾਕ, (3) ਮਿਸ਼ਰਤ ਵਾਕ।',
                    hi: '(1) ਸਧਾਰਨ ਵਾਕ, (2) ਸੰਯੁਕਤ ਵਾਕ, (3) ਮਿਸ਼ਰਤ ਵਾਕ।'
                }
            },
            {
                problem: {
                    en: '[ETT Paper B Idiom & Proverb MCQ] What is the exact meaning of the Punjabi proverb `"ਚੋਰਾਂ ਦੇ ਕੱਪੜੇ, ਡਾਂਗਾਂ ਦੇ ਗਜ਼"` and the idiom `"ਘਿਓ ਦੇ ਦੀਵੇ ਬਾਲਣਾ"`?',
                    pa: '[ETT Paper B ਮੁਹਾਵਰੇ ਅਤੇ ਅਖਾਣ MCQ] ਪੰਜਾਬੀ ਅਖਾਣ `"ਚੋਰਾਂ ਦੇ ਕੱਪੜੇ, ਡਾਂਗਾਂ ਦੇ ਗਜ਼"` ਅਤੇ ਮੁਹਾਵਰੇ `"ਘਿਓ ਦੇ ਦੀਵੇ ਬਾਲਣਾ"` ਦਾ ਸਹੀ ਅਰਥ ਦੱਸੋ।',
                    hi: '[ETT Paper B मुहावरे एवं अखाण MCQ] पंजाबी अखाण `"ਚੋਰਾਂ ਦੇ ਕੱਪੜੇ, ਡਾਂਗਾਂ ਦੇ ਗਜ਼"` और मुहावरे `"ਘਿਓ ਦੇ ਦੀਵੇ ਬਾਲਣਾ"` का सही अर्थ बताइए।'
                },
                solutionSteps: {
                    en: [
                        'Analyze `"ਚੋਰਾਂ ਦੇ ਕੱਪੜੇ, ਡਾਂਗਾਂ ਦੇ ਗਜ਼"`: Just as thieves measure stolen cloth roughly with sticks instead of a proper yardstick, this proverb means **spending or wasting free/ill-gotten property recklessly (`ਮੁਫ਼ਤ ਦੇ ਮਾਲ ਨੂੰ ਬੇਦਰਦੀ ਨਾਲ ਵਰਤਣਾ`)**.',
                        'Analyze `"ਘਿਓ ਦੇ ਦੀਵੇ ਬਾਲਣਾ"`: Lighting lamps of clarified butter (as on Diwali) symbolizes **celebrating extreme joy or victory (`ਬਹੁਤ ਖ਼ੁਸ਼ੀ ਮਨਾਉਣਾ`)**.'
                    ],
                    pa: [
                        '`"ਚੋਰਾਂ ਦੇ ਕੱਪੜੇ, ਡਾਂਗਾਂ ਦੇ ਗਜ਼"` ਦਾ ਅਰਥ ਹੈ **ਮੁਫ਼ਤ ਜਾਂ ਬਿਨਾਂ ਮਿਹਨਤ ਤੋਂ ਮਿਲੇ ਮਾਲ ਨੂੰ ਬੇਦਰਦੀ/ਬੇਪਰਵਾਹੀ ਨਾਲ ਵਰਤਣਾ**।',
                        '`"ਘਿਓ ਦੇ ਦੀਵੇ ਬਾਲਣਾ"` ਮੁਹਾਵਰੇ ਦਾ ਅਰਥ ਹੈ **ਬਹੁਤ ਜ਼ਿਆਦਾ ਖ਼ੁਸ਼ੀ ਮਨਾਉਣਾ**।'
                    ],
                    hi: [
                        '`"ਚੋਰਾਂ ਦੇ ਕੱਪੜੇ, ਡਾਂਗਾਂ ਦੇ ਗਜ਼"` का अर्थ है **मुफ़्त या बिना मेहनत के मिले माल को बेदर्दी से लुटाना (`ਮੁਫ਼ਤ ਦੇ ਮਾਲ ਨੂੰ ਬੇਦਰਦੀ ਨਾਲ ਵਰਤਣਾ`)**।',
                        '`"ਘਿਓ ਦੇ ਦੀਵੇ ਬਾਲਣਾ"` मुहावरे का अर्थ है **बहुत अधिक ख़ुशी मनाना (`ਬਹੁਤ ਖ਼ੁਸ਼ੀ ਮਨਾਉਣਾ`)**।'
                    ]
                },
                finalAnswer: {
                    en: '`ਚੋਰਾਂ ਦੇ ਕੱਪੜੇ, ਡਾਂਗਾਂ ਦੇ ਗਜ਼` = ਮੁਫ਼ਤ ਦੇ ਮਾਲ ਨੂੰ ਬੇਦਰਦੀ ਨਾਲ ਵਰਤਣਾ; `ਘਿਓ ਦੇ ਦੀਵੇ ਬਾਲਣਾ` = ਬਹੁਤ ਖ਼ੁਸ਼ੀ ਮਨਾਉਣਾ.',
                    pa: '`ਚੋਰਾਂ ਦੇ ਕੱਪੜੇ, ਡਾਂਗਾਂ ਦੇ ਗਜ਼` = ਮੁਫ਼ਤ ਦੇ ਮਾਲ ਨੂੰ ਬੇਦਰਦੀ ਨਾਲ ਵਰਤਣਾ; `ਘਿਓ ਦੇ ਦੀਵੇ ਬਾਲਣਾ` = ਬਹੁਤ ਖ਼ੁਸ਼ੀ ਮਨਾਉਣਾ।',
                    hi: '`ਚੋਰਾਂ ਦੇ ਕੱਪੜੇ, ਡਾਂਗਾਂ ਦੇ ਗਜ਼` = ਮੁਫ਼ਤ ਦੇ ਮਾਲ ਨੂੰ ਬੇਦਰਦੀ ਨਾਲ ਵਰਤਣਾ; `ਘਿਓ ਦੇ ਦੀਵੇ ਬਾਲਣਾ` = ਬਹੁਤ ਖ਼ੁਸ਼ੀ ਮਨਾਉਣਾ।'
                }
            }
        ],
        flashcards: [
            {
                id: 'ett-pa-b2-fc-1',
                question: {
                    en: 'How can you structurally distinguish a Punjabi `ਮੁਹਾਵਰਾ` (Idiom) from an `ਅਖਾਣ` (Proverb)?',
                    pa: 'ਤੁਸੀਂ ਬਣਤਰ ਦੇ ਆਧਾਰ ਉੱਤੇ ਪੰਜਾਬੀ `ਮੁਹਾਵਰੇ` ਅਤੇ `ਅਖਾਣ` ਵਿੱਚ ਕਿਵੇਂ ਫ਼ਰਕ ਕਰ ਸਕਦੇ ਹੋ?',
                    hi: 'आप संरचना के आधार पर पंजाबी `ਮੁਹਾਵਰਾ` (मुहावरा) और `ਅਖਾਣ` (लोकोक्ति) में कैसे अंतर कर सकते हैं?'
                },
                answer: {
                    en: 'A `ਮੁਹਾਵਰਾ` is a phrase ending in `ਣਾ, ਣੀ, ਣੇ` (e.g., `ਪਾਣੀ-ਪਾਣੀ ਹੋਣਾ`) that inflects inside a sentence, whereas an `ਅਖਾਣ` is a complete standalone sentence (e.g., `ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ`).',
                    pa: '`ਮੁਹਾਵਰਾ` ਇੱਕ ਵਾਕੰਸ਼ ਹੁੰਦਾ ਹੈ ਜਿਸ ਦੇ ਅੰਤ ਵਿੱਚ `ਣਾ, ਣੀ, ਣੇ` ਆਉਂਦਾ ਹੈ, ਜਦਕਿ `ਅਖਾਣ` ਇੱਕ ਪੂਰਨ ਸੁਤੰਤਰ ਵਾਕ ਹੁੰਦਾ ਹੈ।',
                    hi: '`ਮੁਹਾਵਰਾ` एक वाक्यांश है जिसके अंत में `ਣਾ, ਣੀ, ਣੇ` आता है, जबकि `ਅਖਾਣ` एक पूर्ण स्वतंत्र वाक्य होता है।'
                }
            },
            {
                id: 'ett-pa-b2-fc-2',
                question: {
                    en: 'What is the meaning of the Punjabi proverb `"ਸੱਦੀ ਨਾ ਬੁਲਾਈ, ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ"`?',
                    pa: 'ਪੰਜਾਬੀ ਅਖਾਣ `"ਸੱਦੀ ਨਾ ਬੁਲਾਈ, ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ"` ਦਾ ਕੀ ਅਰਥ ਹੈ?',
                    hi: 'पंजाबी अखाण `"ਸੱਦੀ ਨਾ ਬੁਲਾਈ, ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ"` का क्या अर्थ है?'
                },
                answer: {
                    en: 'ਬਿਨਾਂ ਪੁੱਛੇ ਬਦੋਬਦੀ ਚੌਧਰੀ ਬਣਨਾ (To meddle or claim authority where one is neither invited nor needed).',
                    pa: 'ਬਿਨਾਂ ਪੁੱਛੇ ਬਦੋਬਦੀ ਚੌਧਰੀ ਬਣਨਾ ਜਾਂ ਬਿਨਾਂ ਬੁਲਾਏ ਕਿਸੇ ਦੇ ਕੰਮ ਵਿੱਚ ਦਖ਼ਲ ਦੇਣਾ।',
                    hi: 'ਬਿਨਾਂ ਪੁੱਛੇ ਬਦੋਬਦੀ ਚੌਧਰੀ ਬਣਨਾ (बिना बुलाए अधिकार जताना या चौधरी बनना)।'
                }
            },
            {
                id: 'ett-pa-b2-fc-3',
                question: {
                    en: 'Name the 3 types of Punjabi sentences based on structure (`ਬਣਤਰ ਦੇ ਆਧਾਰ ਉੱਤੇ`).',
                    pa: 'ਬਣਤਰ ਦੇ ਆਧਾਰ ਉੱਤੇ ਪੰਜਾਬੀ ਵਾਕ ਦੀਆਂ 3 ਕਿਸਮਾਂ ਦੇ ਨਾਂ ਦੱਸੋ।',
                    hi: 'रचना (ਬਣਤਰ) के आधार पर पंजाबी वाक्य के 3 भेदों के नाम बताइए।'
                },
                answer: {
                    en: '1. ਸਧਾਰਨ ਵਾਕ (Simple Sentence), 2. ਸੰਯੁਕਤ ਵਾਕ (Compound Sentence), 3. ਮਿਸ਼ਰਤ ਵਾਕ (Complex Sentence).',
                    pa: '1. ਸਧਾਰਨ ਵਾਕ, 2. ਸੰਯੁਕਤ ਵਾਕ, 3. ਮਿਸ਼ਰਤ ਵਾਕ।',
                    hi: '1. ਸਧਾਰਨ ਵਾਕ (सरल वाक्य), 2. ਸੰਯੁਕਤ ਵਾਕ (संयुक्त वाक्य), 3. ਮਿਸ਼ਰਤ ਵਾਕ (मिश्रित वाक्य)।'
                }
            },
            {
                id: 'ett-pa-b2-fc-4',
                question: {
                    en: 'Which type of sentence is `"ਅਧਿਆਪਕ ਨੇ ਕਿਹਾ ਕਿ ਸੱਚ ਦੀ ਹਮੇਸ਼ਾ ਜਿੱਤ ਹੁੰਦੀ ਹੈ"`, and why?',
                    pa: '`"ਅਧਿਆਪਕ ਨੇ ਕਿਹਾ ਕਿ ਸੱਚ ਦੀ ਹਮੇਸ਼ਾ ਜਿੱਤ ਹੁੰਦੀ ਹੈ"` ਬਣਤਰ ਅਨੁਸਾਰ ਕਿਹੋ ਜਿਹਾ ਵਾਕ ਹੈ ਅਤੇ ਕਿਉਂ?',
                    hi: '`"ਅਧਿਆਪਕ ਨੇ ਕਿਹਾ ਕਿ ਸੱਚ ਦੀ ਹਮੇਸ਼ਾ ਜਿੱਤ ਹੁੰਦੀ ਹੈ"` रचना के अनुसार कैसा वाक्य है और क्यों?'
                },
                answer: {
                    en: 'ਮਿਸ਼ਰਤ ਵਾਕ (Complex Sentence), because a principal clause (`ਅਧਿਆਪਕ ਨੇ ਕਿਹਾ`) is joined to a subordinate clause by the subordinating conjunction `ਕਿ` (ਅਧੀਨ ਯੋਜਕ).',
                    pa: 'ਮਿਸ਼ਰਤ ਵਾਕ, ਕਿਉਂਕਿ ਇਸ ਵਿੱਚ ਪ੍ਰਧਾਨ ਉਪਵਾਕ (`ਅਧਿਆਪਕ ਨੇ ਕਿਹਾ`) ਅਧੀਨ ਯੋਜਕ `ਕਿ` ਰਾਹੀਂ ਅਧੀਨ ਉਪਵਾਕ ਨਾਲ ਜੁੜਿਆ ਹੋਇਆ ਹੈ।',
                    hi: 'ਮਿਸ਼ਰਤ ਵਾਕ (मिश्रित वाक्य), क्योंकि इसमें प्रधान उपवाक्य अधीन योजक `ਕਿ` द्वारा आश्रित उपवाक्य से जुड़ा है।'
                }
            },
            {
                id: 'ett-pa-b2-fc-5',
                question: {
                    en: 'Give the standard Punjabi translation of the English proverbs: (a) "A rolling stone gathers no moss", (b) "All that glitters is not gold".',
                    pa: 'ਅੰਗਰੇਜ਼ੀ ਅਖਾਣਾਂ ਦਾ ਢੁਕਵਾਂ ਪੰਜਾਬੀ ਅਨੁਵਾਦ ਦੱਸੋ: (a) "A rolling stone gathers no moss", (b) "All that glitters is not gold".',
                    hi: 'अंग्रेज़ी कहावतों का सटीक पंजाबी अनुवाद बताइए: (a) "A rolling stone gathers no moss", (b) "All that glitters is not gold".'
                },
                answer: {
                    en: '(a) ਧੋਬੀ ਦਾ ਕੁੱਤਾ ਨਾ ਘਰ ਦਾ ਨਾ ਘਾਟ ਦਾ। (b) ਹਰ ਚਮਕਦੀ ਚੀਜ਼ ਸੋਨਾ ਨਹੀਂ ਹੁੰਦੀ।',
                    pa: '(a) ਧੋਬੀ ਦਾ ਕੁੱਤਾ ਨਾ ਘਰ ਦਾ ਨਾ ਘਾਟ ਦਾ। (b) ਹਰ ਚਮਕਦੀ ਚੀਜ਼ ਸੋਨਾ ਨਹੀਂ ਹੁੰਦੀ।',
                    hi: '(a) ਧੋਬੀ ਦਾ ਕੁੱਤਾ ਨਾ ਘਰ ਦਾ ਨਾ ਘਾਟ ਦਾ। (b) ਹਰ ਚਮਕਦੀ ਚੀਜ਼ ਸੋਨਾ ਨਹੀਂ ਹੁੰਦੀ।'
                }
            },
            {
                id: 'ett-pa-b2-fc-6',
                question: {
                    en: 'Transform the sentence `"ਉਹ ਸਿਆਣਾ ਹੈ"` into a Negative sentence (`ਨਾਂਹ-ਵਾਚਕ ਵਾਕ`) without changing its meaning.',
                    pa: 'ਵਾਕ `"ਉਹ ਸਿਆਣਾ ਹੈ"` ਦਾ ਅਰਥ ਬਦਲੇ ਬਿਨਾਂ ਇਸ ਨੂੰ `ਨਾਂਹ-ਵਾਚਕ ਵਾਕ` ਵਿੱਚ ਬਦਲੋ।',
                    hi: 'वाक्य `"ਉਹ ਸਿਆਣਾ ਹੈ"` का अर्थ बदले बिना इसे नकारात्मक वाक्य (`ਨਾਂਹ-ਵਾਚਕ ਵਾਕ`) में बदलिए।'
                },
                answer: {
                    en: 'ਉਹ ਮੂਰਖ ਨਹੀਂ ਹੈ। (Replacing `ਸਿਆਣਾ` with its antonym `ਮੂਰਖ` + `ਨਹੀਂ` preserves the original meaning).',
                    pa: 'ਉਹ ਮੂਰਖ ਨਹੀਂ ਹੈ।',
                    hi: 'ਉਹ ਮੂਰਖ ਨਹੀਂ ਹੈ।'
                }
            }
        ]
    },

    // =========================================================================
    // 5. ETT PAPER B ENGLISH COMPLETE BLUEPRINT: GRAMMAR, VOICE, NARRATION & VOCAB
    // =========================================================================
    {
        topicId: 'ett-english-2',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 100,
            editorialNote: 'Level B -> I -> A complete blueprint for ETT Paper B English (ett-english-1 to ett-english-4): Articles, Prepositions, Determiners, Subject-Verb Agreement, Modals, Conditionals, Active & Passive Voice, Direct & Indirect Narration (SON rule & backshift), Vocabulary (Synonyms, Antonyms, One-Word, Idioms), Unseen Passage strategy, and Bidirectional Translation.'
        },
        bookRefs: [
            {
                title: 'A Practical English Grammar & Composition (PSEB Class 10 & 12)',
                author: 'Punjab School Education Board (PSEB), Mohali',
                chapter: 'Determiners, Articles, Prepositions, Modals, Voice, Narration, Vocabulary & Translation',
                relevance: 'Official PSEB textbook prescribed for ETT Paper B English (10–15 Marks).'
            },
            {
                title: 'High School English Grammar and Composition',
                author: 'Wren & Martin',
                chapter: 'Subject-Verb Concord, Active/Passive Voice, Direct/Indirect Speech & Idioms',
                relevance: 'Standard reference for tricky grammar MCQs in Punjab teaching recruitment exams.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Class 6–8 Foundation]
1. **Articles (\`a, an, the\` & Zero Article) — Vowel Sound vs Consonant Letter Rule:**
   - Choice between **\`a\`** and **\`an\`** depends on the **initial phonetic sound**, NEVER the spelling letter:
     - **Use \`an\` before vowel sounds:** \`an hour, an honest man, an heir, an honour\` (silent *h*); \`an MLA, an MP, an FIR, an SDO, an X-ray, an LLB\` (begin with vowel sound */ɛm/, /ɛf/, /ɛs/, /ɛks/, /ɛl/*).
     - **Use \`a\` before consonant sounds (\`/juː/\` or \`/w/\`):** \`a university, a union, a unique book, a European, a useful cow, a ewe, a one-rupee note, a one-eyed man\`.
   - **Definite Article \`the\`:** Used before superlatives (\`the best\`), ordinals (\`the first\`), musical instruments (\`play the flute\`), rivers/seas/mountain ranges (\`the Sutlej, the Himalayas\` — *not* single peaks like *Mount Everest*), holy books (\`the Adi Granth, the Gita\`), newspapers (\`The Tribune\`), and \`the + adjective\` denoting a whole class (\`the rich, the poor\`).
   - **Zero Article (No Article):** Before proper nouns, languages (\`English, Punjabi\`), meals (\`have breakfast\`), sports (\`play cricket\`), and diseases (\`malaria, cancer\` — except *the measles, the mumps*).
2. **High-Yield Prepositions & Determiners:**
   - **Preposition Confusables Matrix:**
     | Pair / Rule | Exact Grammatical Distinction & Exam Examples |
     |---|---|
     | **at / on / in (Time)** | **\`at\`** = exact clock time/night (\`at 5 PM, at dawn, at night\`); **\`on\`** = day/date (\`on Monday, on 15th August\`); **\`in\`** = month/year/season (\`in March, in 2026, in winter\`) |
     | **since vs for** | **\`since\`** = point of time (\`since morning, since 1995, since Monday\`); **\`for\`** = period/duration (\`for two hours, for five years\`) |
     | **between vs among** | **\`between\`** = 2 persons/things (\`between Ram and Shyam\`); **\`among\`** = more than 2 (\`among the five brothers\`) |
     | **beside vs besides** | **\`beside\`** = by the side of (\`Sit beside me\`); **\`besides\`** = in addition to (\`Besides Punjabi, he knows Hindi\`) |
     | **in vs into / on vs upon** | **\`in/on\`** = static rest (\`in the room, on the table\`); **\`into/upon\`** = motion (\`jumped into the river, sprang upon the prey\`) |
     | **die of vs die from** | **\`die of\`** = direct disease/hunger/thirst (\`died of cancer/cholera\`); **\`die from\`** = external cause/wound/overwork (\`died from overwork/loss of blood\`) |
     | **Latin Comparatives (\`to\`)** | **\`senior, junior, superior, inferior, prior, prefer, elder\`** ALWAYS take **\`to\`** (NEVER *than*!): *He is senior **to** me. I prefer tea **to** coffee.* |
     | **Fixed Prepositions** | \`abstain from, fond of, accuse of, guilty of, congratulate on, agree with (a person), agree to (a proposal), blind in (one eye), blind to (faults), deal in (goods/trade), deal with (a person/matter)\` |
   - **Determiners (\`few/little\` & \`some/any\`):**
     - **\`some\`** = affirmative sentences & polite offers; **\`any\`** = negative & interrogative sentences.
     - **\`few / a few / the few\`** (Countable plural nouns) vs **\`little / a little / the little\`** (Uncountable nouns):
       - **Bare \`few / little\`** = *hardly any (negative)*: \`There is little water in the pitcher (almost none).\`
       - **\`a few / a little\`** = *some, though not much (positive)*: \`A little knowledge is a dangerous thing.\`
       - **\`the few / the little\`** = *not many/much, but all that is available*: \`He spent the little money he had.\`

---

### [Level I: Intermediate — Class 9–10 Core & ETT Paper B Matrix]
1. **Subject-Verb Concord & Conditional Clauses:**
   - **Rule 1 (\`as well as / along with\`):** When two subjects are joined by \`as well as, along with, together with, in addition to, accompanied by\`, the verb agrees with the **FIRST subject** (*The teacher, along with the students, **is** present*).
   - **Rule 2 (\`neither...nor / either...or\`):** When joined by \`neither...nor, either...or, not only...but also\`, the verb agrees with the **NEAREST subject** (*Neither the teacher nor the students **were** present*).
   - **Rule 3 (\`Each / Every / One of the\`):** \`Each of / Every one of / Either of / Neither of / One of + Plural Noun\` ALWAYS takes a **Singular Verb** (*One of my friends **is** a doctor*).
   - **Rule 4 (\`A number of\` vs \`The number of\`):** \`A number of boys **are** absent\` (plural) vs \`The number of boys **is** fifty\` (singular).
   - **3 Golden Conditional Patterns:**
     | Type | If-Clause (Condition) | Main Clause (Result) | Example |
     |---|---|---|---|
     | **Type 1 (Open/Probable)** | \`If + Simple Present (V1/V1+s)\` | \`will / shall / can / may + V1\` | *If you **work** hard, you **will pass**.* |
     | **Type 2 (Unreal/Imaginary)** | \`If + Simple Past (V2 / were)\` | \`would / could / might + V1\` | *If I **were** a bird, I **would fly**.* |
     | **Type 3 (Impossible Past)** | \`If + Past Perfect (had + V3)\` | \`would / could + have + V3\` | *If he **had worked** hard, he **would have passed**.* |
2. **Active & Passive Voice (\`ਕਰਤਰੀ ਅਤੇ ਕਰਮਣੀ ਵਾਚ\`):**
   - **Core Tense Conversion Formula (\`Object -> Subject\` + \`Be-form + V3\` + \`by + Agent\`):**
     | Tense / Pattern | Active Voice Structure | Passive Voice Structure |
     |---|---|---|
     | **Simple Present** | \`V1 / do, does + V1\` | \`is / am / are + V3\` |
     | **Simple Past** | \`V2 / did + V1\` | \`was / were + V3\` |
     | **Simple Future** | \`will / shall + V1\` | \`will / shall + be + V3\` |
     | **Present / Past Continuous** | \`is/am/are/was/were + V-ing\` | \`is/am/are/was/were + **being** + V3\` |
     | **Present / Past / Future Perfect** | \`has/have/had/will have + V3\` | \`has/have/had/will have + **been** + V3\` |
     | **Modals (\`can, must, should\`)** | \`Modal + V1\` | \`Modal + **be** + V3\` |
     | **Imperative Sentences** | \`V1 + Object\` (*Open the door*) | \`**Let** + Object + **be** + V3\` (*Let the door be opened*) |
     | **Interrogative (\`Who\`)** | \`Who + V2 + Object?\` (*Who wrote this?*) | \`**By whom** + aux + Object + V3?\` (*By whom was this written?*) |
   - **Verbs NOT taking \`by\` in Passive:** \`known **to** me\`, \`surprised/astonished/amazed/alarmed **at**\`, \`satisfied/pleased/disgusted **with**\`, \`interested/contained **in**\`, \`married **to**\`.

---

### [Level A: Advanced — Narration, Vocabulary & Bidirectional Translation]
1. **Direct & Indirect Narration (\`SON Rule\` & Backshift Matrix):**
   - **Pronoun Change — The \`SON / 1-2-3\` Rule:**
     - **1st Person (\`I, we\`)** changes according to **S**ubject of Reporting Verb.
     - **2nd Person (\`you\`)** changes according to **O**bject of Reporting Verb.
     - **3rd Person (\`he, she, it, they\`)** $\\to$ **N**o Change.
   - **Tense Backshift (when Reporting Verb is in Past, e.g., \`said / told\`):**
     - \`V1 -> V2\` | \`is/am/are -> was/were\` | \`has/have -> had\` | \`V2 (Simple Past) -> had + V3 (Past Perfect)\` | \`will/shall -> would\` | \`can -> could\` | \`may -> might\`.
     - **CRITICAL EXCEPTION:** If the Reported Speech states a **Universal Truth, Habitual Fact, or Proverb**, the tense **NEVER changes** (*The teacher said, "The earth moves round the sun" $\\to$ The teacher said that the earth **moves** round the sun*).
   - **Time/Place Shifts:** \`now -> then\`, \`this -> that\`, \`these -> those\`, \`here -> there\`, \`today -> that day\`, \`yesterday -> the previous day\`, \`tomorrow -> the next day / the following day\`, \`ago -> before\`.
   - **Interrogative & Imperative Narration:**
     - **Yes/No Questions:** Use \`asked / inquired\` + **\`if\` or \`whether\`** + statement order (\`Subject + Verb\`, no question mark!).
     - **Wh-Questions:** Retain the **Wh-word** (\`what, where, why, how\`) + statement order (\`He asked me what I was doing\`).
     - **Imperatives:** Use \`ordered / requested / advised + object + to + V1\`; \`Don't...\` $\\to$ \`not to + V1\` or \`forbade + object + to + V1\` (never use *not* after *forbade*!).
2. **High-Yield ETT Vocabulary (One-Word Substitutions & Idioms):**
   - **One-Word Substitutions:**
     - **Omnipresent** (present everywhere) | **Omniscient** (knows everything) | **Omnipotent** (all-powerful)
     - **Philanthropist** (lover of mankind) | **Misanthrope** (hater of mankind)
     - **Optimist** (looks at the bright side) | **Pessimist** (looks at the dark side)
     - **Teetotaller** (abstains completely from alcohol) | **Infallible** (incapable of making mistakes)
     - **Autobiography** (life story written by oneself) | **Biography** (life story written by another)
     - **Ephemeral / Transitory** (lasting for a very short time) | **Illegible** (handwriting that cannot be read)
   - **Idioms & Phrases:**
     - **At the eleventh hour** = at the last possible moment | **To burn the midnight oil** = to study/work late into the night | **A white elephant** = a costly but useless possession | **Once in a blue moon** = very rarely | **To bury the hatchet** = to make peace and end enmity | **A bolt from the blue** = a sudden unexpected shock.`,
            pa: `### [Level B: Basic — Class 6–8 ਬੁਨਿਆਦੀ ਪੱਧਰ]
1. **Articles (\`a, an, the\`) — ਸਵਰ ਆਵਾਜ਼ (Vowel Sound) ਦਾ ਮੁੱਖ ਨਿਯਮ:**
   - **\`a\`** ਅਤੇ **\`an\`** ਦੀ ਚੋਣ ਅੰਗਰੇਜ਼ੀ ਦੇ ਅੱਖਰ (\`a, e, i, o, u\`) ਦੇਖ ਕੇ ਨਹੀਂ, ਸਗੋਂ ਸ਼ਬਦ ਦੀ **ਪਹਿਲੀ ਧੁਨੀ (ਉਚਾਰਨ ਆਵਾਜ਼)** ਅਨੁਸਾਰ ਹੁੰਦੀ ਹੈ:
     - **ਸਵਰ ਆਵਾਜ਼ (Vowel Sound) ਤੋਂ ਪਹਿਲਾਂ \`an\`:** \`an hour, an honest man, an heir\` (ਇੱਥੇ *h* ਸਾਈਲੈਂਟ ਹੈ); \`an MLA, an MP, an FIR, an SDO, an X-ray\` (ਉਚਾਰਨ \`'ਐ'\` ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ)।
     - **ਵਿਅੰਜਨ ਆਵਾਜ਼ (\`ਯ\` ਜਾਂ \`ਵ\`) ਤੋਂ ਪਹਿਲਾਂ \`a\`:** \`a university, a union, a unique thing, a European, a useful book, a one-rupee note, a one-eyed man\`।
2. **Prepositions ਅਤੇ Determiners ਦੇ ਪ੍ਰਮੁੱਖ ਨਿਯਮ:**
   - **\`at\` (ਘੜੀ ਦਾ ਸਮਾਂ: \`at 5 PM, at night\`)**, **\`on\` (ਦਿਨ/ਮਿਤੀ: \`on Monday, on 15th August\`)**, **\`in\` (ਮਹੀਨਾ/ਸਾਲ: \`in March, in 2026\`)**।
   - **\`since\` (ਨਿਸ਼ਚਿਤ ਸਮਾਂ ਬਿੰਦੂ: \`since morning, since 1995\`)** ਬਨਾਮ **\`for\` (ਸਮੇਂ ਦੀ ਮਿਆਦ: \`for two hours, for five years\`)**।
   - **\`senior, junior, superior, inferior, prior, prefer\`** ਦੇ ਨਾਲ ਹਮੇਸ਼ਾ **\`to\`** ਲੱਗਦਾ ਹੈ, ਕਦੇ ਵੀ \`than\` ਨਹੀਂ ਲੱਗਦਾ (*I prefer tea **to** coffee*)।
   - **\`die of\` (ਬਿਮਾਰੀ ਨਾਲ ਮੌਤ: \`died of cancer\`)** ਬਨਾਮ **\`die from\` (ਬਾਹਰੀ ਕਾਰਨ/ਜ਼ਖ਼ਮ: \`died from overwork\`)**।
   - **\`few\` (ਗਿਣਨਯੋਗ)** ਅਤੇ **\`little\` (ਅਣਗਿਣਤ)**: ਇਕੱਲਾ \`little/few\` = ਨਾ ਦੇ ਬਰਾਬਰ (ਨਾਂਹ-ਵਾਚਕ); \`a little/a few\` = ਥੋੜ੍ਹਾ ਜਿਹਾ (ਹਾਂ-ਵਾਚਕ); \`the little/the few\` = ਜਿੰਨਾ ਵੀ ਥੋੜ੍ਹਾ ਸੀ ਉਹ ਸਾਰਾ।

---

### [Level I: Intermediate — Class 9–10 ਮੱਧ ਪੱਧਰ ਅਤੇ ETT Paper B ਮੈਟ੍ਰਿਕਸ]
1. **Subject-Verb Agreement ਅਤੇ Conditionals:**
   - **\`as well as, along with, together with\`** ਨਾਲ ਜੁੜੇ ਦੋ ਕਰਤਾਵਾਂ ਵਿੱਚ ਕਿਰਿਆ **ਪਹਿਲੇ Subject** ਅਨੁਸਾਰ ਲੱਗਦੀ ਹੈ।
   - **\`neither...nor, either...or, not only...but also\`** ਵਿੱਚ ਕਿਰਿਆ **ਨੇੜਲੇ (ਦੂਜੇ) Subject** ਅਨੁਸਾਰ ਲੱਗਦੀ ਹੈ।
   - **\`One of the / Each of the / Neither of the + Plural Noun\`** ਦੇ ਨਾਲ ਹਮੇਸ਼ਾ **Singular Verb (\`is/was/has\`)** ਲੱਗਦੀ ਹੈ।
   - **3 Conditional ਸੂਤਰ:**
     1. \`If + V1 (Present), ... will + V1\` (*If he works hard, he will pass*).
     2. \`If + V2 / were (Past), ... would + V1\` (*If I were a king, I would help the poor*).
     3. \`If + had + V3 (Past Perfect), ... would have + V3\` (*If you had worked hard, you would have passed*).
2. **Active & Passive Voice ਦੇ ਸੂਤਰ:**
   - **Continuous Tenses:** \`is/am/are/was/were + being + V3\`.
   - **Perfect Tenses:** \`has/have/had + been + V3\`.
   - **Modals:** \`can/must/should + be + V3\`.
   - **\`Who\` ਵਾਲੇ ਪ੍ਰਸ਼ਨ:** \`Who wrote this book?\` $\\to$ \`By whom was this book written?\`
   - **ਬਿਨਾਂ \`by\` ਵਾਲੇ Passive ਸ਼ਬਦ:** \`known to\`, \`surprised at\`, \`satisfied with\`, \`contained in\`।

---

### [Level A: Advanced — Narration (Direct/Indirect) ਅਤੇ Vocabulary]
1. **Direct & Indirect Narration (\`SON / 123\` ਨਿਯਮ):**
   - **1st Person (\`I, we\`)** $\\to$ Subject ਅਨੁਸਾਰ; **2nd Person (\`you\`)** $\\to$ Object ਅਨੁਸਾਰ; **3rd Person** $\\to$ ਕੋਈ ਬਦਲਾਅ ਨਹੀਂ।
   - **Universal Truth (ਸਦੀਵੀ ਸੱਚ):** ਜੇਕਰ Reported Speech ਵਿੱਚ ਸਦੀਵੀ ਸੱਚ ਹੋਵੇ (\`The sun rises in the east\`), ਤਾਂ **Tense ਕਦੇ ਨਹੀਂ ਬਦਲਦਾ**।
   - **\`forbade\` ਦਾ ਨਿਯਮ:** \`forbade\` ਸ਼ਬਦ ਆਪ ਹੀ ਨਾਂਹ-ਵਾਚਕ ਹੈ, ਇਸ ਲਈ ਇਸ ਤੋਂ ਬਾਅਦ \`not\` ਨਹੀਂ ਲੱਗਦਾ (*He forbade me to smoke*)।
2. **High-Yield Vocabulary & Idioms:**
   - **Omnipresent** (ਸਰਵ-ਵਿਆਪਕ), **Omniscient** (ਸਰਵ-ਗਿਆਤਾ), **Philanthropist** (ਮਨੁੱਖਤਾ ਪ੍ਰੇਮੀ/ਦਾਨੀ), **Teetotaller** (ਸ਼ਰਾਬ ਤੋਂ ਦੂਰ ਰਹਿਣ ਵਾਲਾ), **Optimist** (ਆਸ਼ਾਵਾਦੀ), **Pessimist** (ਨਿਰਾਸ਼ਾਵਾਦੀ)।
   - **At the eleventh hour** (ਆਖ਼ਰੀ ਮੌਕੇ 'ਤੇ), **A white elephant** (ਮਹਿੰਗੀ ਪਰ ਬੇਕਾਰ ਚੀਜ਼), **Once in a blue moon** (ਈਦ ਦਾ ਚੰਦ ਹੋਣਾ / ਬਹੁਤ ਘੱਟ)।`,
            hi: `### [Level B: Basic — Class 6–8 आधारभूत स्तर]
1. **Articles (\`a, an, the\`) — ध्वनि का नियम:**
   - **\`an\`** स्वर ध्वनि से पहले लगता है: \`an hour, an honest man, an MLA, an FIR, an SDO\`।
   - **\`a\`** व्यंजन ध्वनि (\`/juː/\` या \`/w/\`) से पहले लगता है: \`a university, a union, a European, a one-rupee note, a one-eyed man\`।
2. **Prepositions एवं Determiners:**
   - **\`senior, junior, superior, inferior, prior, prefer\`** के साथ सदैव **\`to\`** लगता है (\`than\` कभी नहीं)।
   - **\`since\`** (निश्चित समय बिंदु) बनाम **\`for\`** (समयावधि); **\`between\`** (2 के बीच) बनाम **\`among\`** (2 से अधिक के बीच); **\`beside\`** (बगल में) बनाम **\`besides\`** (के अतिरिक्त)।

---

### [Level I: Intermediate — Class 9–10 मध्यम स्तर]
1. **Subject-Verb Agreement व Conditionals:**
   - \`as well as / along with\` में प्रथम कर्ता के अनुसार क्रिया लगती है; \`neither...nor / either...or\` में निकटतम कर्ता के अनुसार।
   - \`One of the + Plural Noun + Singular Verb\`।
2. **Active & Passive Voice:** \`Who wrote this? -> By whom was this written?\`; \`known to, surprised at, satisfied with, contained in\`।

---

### [Level A: Advanced — Narration एवं Vocabulary]
1. **Narration (\`SON/123\` नियम):** Universal Truth का Tense कभी नहीं बदलता; \`Yes/No\` प्रश्नों में \`if/whether\` लगता है।
2. **Vocabulary:** **Omnipresent, Omniscient, Philanthropist, Teetotaller, Optimist, Pessimist**; Idioms: **At the eleventh hour, A white elephant, To burn the midnight oil, Once in a blue moon**।`
        },
        keyNotes: {
            en: [
                '**Article Phonetic Trap:** Use **`a`** before `/juː/` and `/w/` sounds (`a university, a union, a European, a one-eyed man, a one-rupee note`) and **`an`** before silent *h* or vowel-initial abbreviations (`an hour, an honest man, an MLA, an FIR, an SDO`).',
                '**Preposition Golden Traps:** **`senior, junior, superior, inferior, prefer, prior, elder`** ALWAYS take **`to`** (never *than*); **`die of`** a disease (`died of cholera`) vs **`die from`** an external cause (`died from overwork`).',
                '**Subject-Verb Agreement Rules:** `as well as / along with / together with` agrees with the **first subject**; `neither...nor / either...or` agrees with the **nearest subject**; `One of the + Plural Noun` takes a **Singular Verb**.',
                '**3 Conditional Templates:** (1) `If + V1, ... will + V1`; (2) `If + V2/were, ... would + V1`; (3) `If + had + V3, ... would have + V3`.',
                '**Passive Exceptions (No `by`):** `He is known **to** me` | `I was surprised **at** his behaviour` | `The jug is filled **with** water` | `Smoke filled the room -> The room was filled **with** smoke`.',
                '**Narration Traps:** Universal truths keep their Present tense even after `said`; interrogative indirect clauses take statement word order (`asked where he **was** going`, never *was he*); never use `not` after `forbade`/`unless`/`until`/`lest`.'
            ],
            pa: [
                '**Article ਧੁਨੀ ਨਿਯਮ:** `a university, a union, a European, a one-eyed man` ਨਾਲ **`a`** ਲੱਗਦਾ ਹੈ, ਜਦਕਿ `an hour, an honest man, an MLA, an FIR` ਨਾਲ **`an`** ਲੱਗਦਾ ਹੈ।',
                '**Preposition ਦੇ ਪੱਕੇ ਨਿਯਮ:** **`senior, junior, superior, inferior, prefer`** ਨਾਲ ਹਮੇਸ਼ਾ **`to`** ਲੱਗਦਾ ਹੈ (`than` ਨਹੀਂ); ਬਿਮਾਰੀ ਨਾਲ ਮੌਤ ਲਈ **`die of`** ਅਤੇ ਬਾਹਰੀ ਕਾਰਨ ਲਈ **`die from`** ਲੱਗਦਾ ਹੈ।',
                '**Subject-Verb Agreement:** `as well as / along with` ਵਿੱਚ ਪਹਿਲੇ Subject ਅਨੁਸਾਰ ਕਿਰਿਆ ਲੱਗਦੀ ਹੈ; `neither...nor / either...or` ਵਿੱਚ ਨੇੜਲੇ Subject ਅਨੁਸਾਰ; `One of the + Plural Noun` ਨਾਲ ਹਮੇਸ਼ਾ **Singular Verb** ਲੱਗਦੀ ਹੈ।',
                '**3 Conditional ਸੂਤਰ:** (1) `If + V1, ... will + V1`; (2) `If + V2/were, ... would + V1`; (3) `If + had + V3, ... would have + V3`।',
                '**Passive ਵਿੱਚ `by` ਨਾ ਲੈਣ ਵਾਲੀਆਂ ਕਿਰਿਆਵਾਂ:** `known **to**`, `surprised **at**`, `satisfied/pleased/filled **with**`, `contained/interested **in**`।',
                '**Narration ਦੇ ਮੁੱਖ ਨਿਯਮ:** Universal Truth (ਸਦੀਵੀ ਸੱਚ) ਦਾ Tense ਕਦੇ ਨਹੀਂ ਬਦਲਦਾ; ਪ੍ਰਸ਼ਨਵਾਚਕ Indirect ਵਾਕ ਵਿੱਚ Subject ਤੋਂ ਬਾਅਦ Helping Verb ਆਉਂਦਾ ਹੈ (`where he was`); `forbade, unless, until, lest` ਤੋਂ ਬਾਅਦ `not` ਨਹੀਂ ਲੱਗਦਾ।'
            ],
            hi: [
                '**Article ध्वनि नियम:** `a university, a union, a European, a one-eyed man` के साथ **`a`** तथा `an hour, an honest man, an MLA, an FIR` के साथ **`an`** लगता है।',
                '**Preposition नियम:** **`senior, junior, superior, inferior, prefer`** के साथ सदैव **`to`** लगता है (`than` नहीं); बीमारी से मृत्यु के लिए **`die of`** लगती है।',
                '**Subject-Verb Agreement:** `as well as / along with` में पहले कर्ता के अनुसार; `neither...nor / either...or` में निकटतम कर्ता के अनुसार; `One of the + Plural Noun` के साथ **Singular Verb**।',
                '**3 Conditional सूत्र:** (1) `If + V1, ... will + V1`; (2) `If + V2/were, ... would + V1`; (3) `If + had + V3, ... would have + V3`।',
                '**Passive में `by` के अपवाद:** `known **to**`, `surprised **at**`, `satisfied/pleased/filled **with**`, `contained/interested **in**`।',
                '**Narration नियम:** Universal Truth का Tense कभी नहीं बदलता; `forbade, unless, until, lest` के साथ `not` नहीं लगता।'
            ]
        },
        quickRevisionSheet: {
            en: [
                '**Articles Check:** `a university, a European, a one-rupee note` vs `an hour, an honest man, an MLA, an FIR`.',
                '**Prepositions Check:** `senior/junior/prefer + to` | `since` (point) vs `for` (period) | `between` (2) vs `among` (>2) | `beside` (next to) vs `besides` (in addition to).',
                '**Voice Quick Table:** `V1 -> is/am/are + V3` | `V2 -> was/were + V3` | `V-ing -> being + V3` | `has/had + V3 -> has/had + been + V3` | `Who -> By whom`.',
                '**Narration Shifts:** `today -> that day` | `yesterday -> the previous day` | `tomorrow -> the next day` | `now -> then` | `here -> there` | `lest + should`.',
                '**Top Idioms:** *At the eleventh hour* (last moment) | *A white elephant* (costly & useless) | *Burn the midnight oil* (work late) | *Once in a blue moon* (very rarely) | *Bury the hatchet* (make peace).'
            ],
            pa: [
                '**Articles ਸੂਤਰ:** `a university, a European, a one-rupee note` ਬਨਾਮ `an hour, an honest man, an MLA, an FIR`।',
                '**Prepositions ਸੂਤਰ:** `senior/junior/prefer + to` | `since` (ਨਿਸ਼ਚਿਤ ਸਮਾਂ) ਬਨਾਮ `for` (ਮਿਆਦ) | `between` (2) ਬਨਾਮ `among` (2 ਤੋਂ ਵੱਧ) | `beside` (ਕੋਲ) ਬਨਾਮ `besides` (ਇਸ ਤੋਂ ਇਲਾਵਾ)।',
                '**Voice ਸੂਤਰ:** `V1 -> is/am/are + V3` | `V2 -> was/were + V3` | `V-ing -> being + V3` | `has/had + V3 -> has/had + been + V3` | `Who -> By whom`।',
                '**Narration ਬਦਲਾਅ:** `today -> that day` | `yesterday -> the previous day` | `tomorrow -> the next day` | `now -> then` | `here -> there` | `lest + should`।',
                '**ਪ੍ਰਮੁੱਖ Idioms:** *At the eleventh hour* (ਆਖ਼ਰੀ ਸਮੇਂ) | *A white elephant* (ਮਹਿੰਗੀ ਪਰ ਬੇਕਾਰ ਵਸਤੂ) | *Once in a blue moon* (ਬਹੁਤ ਘੱਟ)।'
            ],
            hi: [
                '**Articles सूत्र:** `a university, a European, a one-rupee note` बनाम `an hour, an honest man, an MLA, an FIR`।',
                '**Prepositions सूत्र:** `senior/junior/prefer + to` | `since` (निश्चित समय) बनाम `for` (अवधि) | `between` (2) बनाम `among` (2 से अधिक) | `beside` (पास) बनाम `besides` (के अतिरिक्त)।',
                '**Voice सूत्र:** `V1 -> is/am/are + V3` | `V2 -> was/were + V3` | `V-ing -> being + V3` | `has/had + V3 -> has/had + been + V3` | `Who -> By whom`।',
                '**Narration परिवर्तन:** `today -> that day` | `yesterday -> the previous day` | `tomorrow -> the next day` | `now -> then` | `here -> there`।',
                '**प्रमुख Idioms:** *At the eleventh hour* (अंतिम क्षण में) | *A white elephant* (महँगी पर बेकार वस्तु) | *Once in a blue moon* (ईद का चाँद)।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: In Passive Voice, *"I know him"* becomes *"He is known by me"*. Correction: The verb **`know`** never takes `by` in the passive voice; it always takes **`to`** — **`"He is known to me."`**',
                'Misconception: We write *"He is senior than me"* and *"I prefer coffee than tea"*. Correction: Latin comparatives (**`senior, junior, superior, inferior, prior`**) and **`prefer`** ALWAYS take **`to`**, never `than`: **`"He is senior to me"`** and **`"I prefer coffee to tea."`**',
                'Misconception: In Indirect Speech, *"He said to me, ’Where are you going?’"* becomes *"He asked me where was I going."* Correction: An indirect question becomes a declarative clause (`Subject + Verb`), so the auxiliary verb comes **after** the subject: **`"He asked me where I was going."`**'
            ],
            pa: [
                'ਭੁਲੇਖਾ: *"I know him"* ਦਾ Passive Voice *"He is known by me"* ਬਣਦਾ ਹੈ। ਸੁਧਾਰ: **`know`** ਕਿਰਿਆ ਦੇ Passive ਵਿੱਚ ਕਦੇ ਵੀ `by` ਨਹੀਂ ਲੱਗਦਾ, ਸਗੋਂ ਹਮੇਸ਼ਾ **`to`** ਲੱਗਦਾ ਹੈ — **`"He is known to me."`**',
                'ਭੁਲੇਖਾ: *"He is senior than me"* ਅਤੇ *"I prefer coffee than tea"* ਸਹੀ ਹਨ। ਸੁਧਾਰ: **`senior, junior, superior, inferior, prefer`** ਦੇ ਨਾਲ ਹਮੇਸ਼ਾ **`to`** ਲੱਗਦਾ ਹੈ (`than` ਕਦੇ ਨਹੀਂ): **`"He is senior to me"`** ਅਤੇ **`"I prefer coffee to tea."`**',
                'ਭੁਲੇਖਾ: *"He said to me, ’Where are you going?’"* ਦਾ Indirect *"He asked me where was I going"* ਬਣਦਾ ਹੈ। ਸੁਧਾਰ: Indirect Speech ਵਿੱਚ ਪ੍ਰਸ਼ਨ ਸਧਾਰਨ ਵਾਕ ਬਣ ਜਾਂਦਾ ਹੈ, ਇਸ ਲਈ Subject (`I`) ਪਹਿਲਾਂ ਅਤੇ Verb (`was`) ਬਾਅਦ ਵਿੱਚ ਆਉਂਦਾ ਹੈ: **`"He asked me where I was going."`**'
            ],
            hi: [
                'भ्रांति: *"I know him"* का Passive Voice *"He is known by me"* बनता है। सुधार: **`know`** के Passive में `by` नहीं बल्कि **`to`** लगता है — **`"He is known to me."`**',
                'भ्रांति: *"He is senior than me"* और *"I prefer coffee than tea"* सही हैं। सुधार: **`senior, junior, superior, inferior, prefer`** के साथ सदैव **`to`** लगता है (`than` नहीं): **`"He is senior to me."`**',
                'भ्रांति: *"He said to me, ’Where are you going?’"* का Indirect *"He asked me where was I going"* बनता है। सुधार: Indirect में प्रश्न साधारण वाक्य के क्रम (`Subject + Verb`) में आता है: **`"He asked me where I was going."`**'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: '[ETT Paper B English Grammar MCQ] Convert the following sentences as directed:\n(a) Change into Passive Voice: "Who taught you English?"\n(b) Change into Indirect Speech: The teacher said to the students, "The sun rises in the east."',
                    pa: '[ETT Paper B ਅੰਗਰੇਜ਼ੀ ਵਿਆਕਰਨ MCQ] ਹੇਠ ਲਿਖੇ ਵਾਕਾਂ ਨੂੰ ਨਿਰਦੇਸ਼ ਅਨੁਸਾਰ ਬਦਲੋ:\n(a) Passive Voice ਵਿੱਚ ਬਦਲੋ: "Who taught you English?"\n(b) Indirect Speech ਵਿੱਚ ਬਦਲੋ: The teacher said to the students, "The sun rises in the east."',
                    hi: '[ETT Paper B अंग्रेज़ी व्याकरण MCQ] निम्नलिखित वाक्यों को निर्देशानुसार बदलिए:\n(a) Passive Voice में बदलिए: "Who taught you English?"\n(b) Indirect Speech में बदलिए: The teacher said to the students, "The sun rises in the east."'
                },
                solutionSteps: {
                    en: [
                        'For (a): `taught` is Simple Past (`V2`), and `Who` is the subject. In Passive Voice, `Who` changes to **`By whom`**, followed by `were/was + Object + V3`: **"By whom were you taught English?"** (or *"By whom was English taught to you?"*).',
                        'For (b): `"The sun rises in the east"` is a **Universal Truth**. Even though the reporting verb `said to` (`told`) is in the past tense, the tense of a universal truth **does not change**: **"The teacher told the students that the sun rises in the east."**'
                    ],
                    pa: [
                        '(a) ਵਿੱਚ `taught` Simple Past (`V2`) ਹੈ। Passive Voice ਵਿੱਚ `Who` ਨੂੰ **`By whom`** ਵਿੱਚ ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ: **"By whom were you taught English?"** (ਜਾਂ *"By whom was English taught to you?"*)।',
                        '(b) ਵਿੱਚ `"The sun rises in the east"` ਇੱਕ **ਸਦੀਵੀ ਸੱਚ (Universal Truth)** ਹੈ, ਇਸ ਲਈ ਇਸ ਦਾ Tense ਨਹੀਂ ਬਦਲਦਾ: **"The teacher told the students that the sun rises in the east."**'
                    ],
                    hi: [
                        '(a) में `taught` Simple Past (`V2`) है। Passive में `Who` को **`By whom`** में बदलते हैं: **"By whom were you taught English?"**',
                        '(b) में `"The sun rises in the east"` एक **सार्वभौमिक सत्य (Universal Truth)** है, अतः इसका Tense नहीं बदलता: **"The teacher told the students that the sun rises in the east."**'
                    ]
                },
                finalAnswer: {
                    en: '(a) By whom were you taught English? | (b) The teacher told the students that the sun rises in the east.',
                    pa: '(a) By whom were you taught English? | (b) The teacher told the students that the sun rises in the east.',
                    hi: '(a) By whom were you taught English? | (b) The teacher told the students that the sun rises in the east.'
                }
            },
            {
                problem: {
                    en: '[ETT Paper B Fill-in-the-Blanks MCQ] Fill in the blanks with the exact article, preposition, and verb:\n1. He is ___ honest officer with ___ university degree.\n2. She is junior ___ me ___ two years.\n3. Neither the principal nor the teachers ___ (was/were) present.',
                    pa: '[ETT Paper B ਖਾਲੀ ਥਾਵਾਂ ਭਰੋ MCQ] ਸਹੀ Article, Preposition ਅਤੇ Verb ਭਰੋ:\n1. He is ___ honest officer with ___ university degree.\n2. She is junior ___ me ___ two years.\n3. Neither the principal nor the teachers ___ (was/were) present.',
                    hi: '[ETT Paper B रिक्त स्थान MCQ] सही Article, Preposition और Verb भरिए:\n1. He is ___ honest officer with ___ university degree.\n2. She is junior ___ me ___ two years.\n3. Neither the principal nor the teachers ___ (was/were) present.'
                },
                solutionSteps: {
                    en: [
                        'In (1): `honest` starts with a silent *h* (vowel sound `/ɒ/`), so it takes **`an`**; `university` starts with a consonant sound `/juː/`, so it takes **`a`**.',
                        'In (2): Latin comparative `junior` always takes **`to`**, and age/rank difference takes **`by`** (`junior to me by two years`).',
                        'In (3): With `neither...nor`, the verb agrees with the nearest subject (`the teachers` — plural), so **`were`** is correct.'
                    ],
                    pa: [
                        '(1) ਵਿੱਚ `honest` ਦੀ ਆਵਾਜ਼ ਸਵਰ (`ਔ`) ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ ਇਸ ਲਈ **`an`** ਲੱਗੇਗਾ; `university` ਦੀ ਆਵਾਜ਼ ਵਿਅੰਜਨ (`ਯੂ`) ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ ਇਸ ਲਈ **`a`** ਲੱਗੇਗਾ।',
                        '(2) ਵਿੱਚ `junior` ਦੇ ਨਾਲ ਹਮੇਸ਼ਾ **`to`** ਲੱਗਦਾ ਹੈ ਅਤੇ ਅੰਤਰ ਲਈ **`by`** ਲੱਗਦਾ ਹੈ।',
                        '(3) ਵਿੱਚ `neither...nor` ਦੇ ਨਿਯਮ ਅਨੁਸਾਰ ਨੇੜਲੇ Subject (`the teachers` — ਬਹੁਵਚਨ) ਅਨੁਸਾਰ **`were`** ਲੱਗੇਗਾ।'
                    ],
                    hi: [
                        '(1) में `honest` स्वर ध्वनि से शुरू होता है अतः **`an`**, और `university` व्यंजन ध्वनि (`यू`) से शुरू होता है अतः **`a`** लगेगा।',
                        '(2) में `junior` के साथ **`to`** तथा अंतर के लिए **`by`** लगेगा।',
                        '(3) में `neither...nor` में निकटतम कर्ता (`the teachers`) के अनुसार **`were`** लगेगा।'
                    ]
                },
                finalAnswer: {
                    en: '1. an, a | 2. to, by | 3. were.',
                    pa: '1. an, a | 2. to, by | 3. were.',
                    hi: '1. an, a | 2. to, by | 3. were.'
                }
            }
        ],
        flashcards: [
            {
                id: 'ett-eng-fc-1',
                question: {
                    en: 'Which indefinite articles (`a` or `an`) are used before: (1) European, (2) one-eyed man, (3) MLA, (4) hour?',
                    pa: 'ਹੇਠ ਲਿਖੇ ਸ਼ਬਦਾਂ ਤੋਂ ਪਹਿਲਾਂ `a` ਜਾਂ `an` ਵਿੱਚੋਂ ਕੀ ਲੱਗੇਗਾ: (1) European, (2) one-eyed man, (3) MLA, (4) hour?',
                    hi: 'निम्नलिखित से पहले `a` या `an` में से क्या लगेगा: (1) European, (2) one-eyed man, (3) MLA, (4) hour?'
                },
                answer: {
                    en: '(1) a European (`/juː/` sound), (2) a one-eyed man (`/w/` sound), (3) an MLA (`/ɛm/` vowel sound), (4) an hour (silent h).',
                    pa: '(1) a European, (2) a one-eyed man, (3) an MLA, (4) an hour.',
                    hi: '(1) a European, (2) a one-eyed man, (3) an MLA, (4) an hour.'
                }
            },
            {
                id: 'ett-eng-fc-2',
                question: {
                    en: 'Which preposition always follows `senior, junior, superior, inferior, prior, prefer` — and what is the difference between `beside` and `besides`?',
                    pa: '`senior, junior, superior, inferior, prior, prefer` ਤੋਂ ਬਾਅਦ ਹਮੇਸ਼ਾ ਕਿਹੜਾ Preposition ਲੱਗਦਾ ਹੈ, ਅਤੇ `beside` ਤੇ `besides` ਵਿੱਚ ਕੀ ਫ਼ਰਕ ਹੈ?',
                    hi: '`senior, junior, superior, inferior, prior, prefer` के बाद सदैव कौन-सा Preposition लगता है, और `beside` तथा `besides` में क्या अंतर है?'
                },
                answer: {
                    en: 'They always take `to` (never `than`). `beside` means "by the side of" (ਕੋਲ), whereas `besides` means "in addition to" (ਇਸ ਤੋਂ ਇਲਾਵਾ).',
                    pa: 'ਇਨ੍ਹਾਂ ਨਾਲ ਹਮੇਸ਼ਾ `to` ਲੱਗਦਾ ਹੈ (`than` ਕਦੇ ਨਹੀਂ)। `beside` ਦਾ ਅਰਥ ਹੈ "ਕੋਲ/ਨੇੜੇ", ਜਦਕਿ `besides` ਦਾ ਅਰਥ ਹੈ "ਇਸ ਤੋਂ ਇਲਾਵਾ"।',
                    hi: 'इनके साथ सदैव `to` लगता है (`than` कभी नहीं)। `beside` का अर्थ है "बगल में/पास", जबकि `besides` का अर्थ है "के अतिरिक्त"।',
                }
            },
            {
                id: 'ett-eng-fc-3',
                question: {
                    en: 'State the 3 Conditional Clause formulas in English grammar.',
                    pa: 'ਅੰਗਰੇਜ਼ੀ ਵਿਆਕਰਨ ਵਿੱਚ 3 Conditional Clauses ਦੇ ਸੂਤਰ ਦੱਸੋ।',
                    hi: 'अंग्रेज़ी व्याकरण में 3 Conditional Clauses के सूत्र बताइए।'
                },
                answer: {
                    en: 'Type 1: `If + V1, ... will + V1`. Type 2: `If + V2/were, ... would + V1`. Type 3: `If + had + V3, ... would have + V3`.',
                    pa: 'Type 1: `If + V1, ... will + V1`। Type 2: `If + V2/were, ... would + V1`। Type 3: `If + had + V3, ... would have + V3`।',
                    hi: 'Type 1: `If + V1, ... will + V1`। Type 2: `If + V2/were, ... would + V1`। Type 3: `If + had + V3, ... would have + V3`।'
                }
            },
            {
                id: 'ett-eng-fc-4',
                question: {
                    en: 'What is the Passive Voice of: (a) "I know him", (b) "Open the window"?',
                    pa: 'Passive Voice ਬਣਾਓ: (a) "I know him", (b) "Open the window"?',
                    hi: 'Passive Voice बनाइए: (a) "I know him", (b) "Open the window"?'
                },
                answer: {
                    en: '(a) "He is known to me." (`know` takes `to`, not `by`). (b) "Let the window be opened." (`Let + Object + be + V3`).',
                    pa: '(a) "He is known to me." (`know` ਨਾਲ `to` ਲੱਗਦਾ ਹੈ)। (b) "Let the window be opened."',
                    hi: '(a) "He is known to me." (`know` के साथ `to` लगता है)। (b) "Let the window be opened."'
                }
            },
            {
                id: 'ett-eng-fc-5',
                question: {
                    en: 'What do the one-word substitutions `Philanthropist`, `Teetotaller`, and `Omniscient` mean?',
                    pa: '`Philanthropist`, `Teetotaller` ਅਤੇ `Omniscient` ਸ਼ਬਦਾਂ ਦੇ ਕੀ ਅਰਥ ਹਨ?',
                    hi: '`Philanthropist`, `Teetotaller` और `Omniscient` शब्दों के क्या अर्थ हैं?'
                },
                answer: {
                    en: '`Philanthropist` = One who loves and helps mankind; `Teetotaller` = One who completely abstains from alcoholic drinks; `Omniscient` = One who knows everything.',
                    pa: '`Philanthropist` = ਮਨੁੱਖਤਾ ਨਾਲ ਪਿਆਰ ਕਰਨ ਵਾਲਾ (ਪਰਉਪਕਾਰੀ); `Teetotaller` = ਸ਼ਰਾਬ ਤੋਂ ਬਿਲਕੁਲ ਦੂਰ ਰਹਿਣ ਵਾਲਾ; `Omniscient` = ਸਭ ਕੁਝ ਜਾਣਨ ਵਾਲਾ (ਸਰਵ-ਗਿਆਤਾ)।',
                    hi: '`Philanthropist` = मानव-प्रेमी/परोपकारी; `Teetotaller` = मदिरा से पूर्णतः दूर रहने वाला; `Omniscient` = सर्वज्ञ (सब कुछ जानने वाला)।'
                }
            },
            {
                id: 'ett-eng-fc-6',
                question: {
                    en: 'What is the meaning of the English idioms `"At the eleventh hour"` and `"A white elephant"`?',
                    pa: 'ਅੰਗਰੇਜ਼ੀ ਮੁਹਾਵਰੇ `"At the eleventh hour"` ਅਤੇ `"A white elephant"` ਦਾ ਕੀ ਅਰਥ ਹੈ?',
                    hi: 'अंग्रेज़ी मुहावरे `"At the eleventh hour"` और `"A white elephant"` का क्या अर्थ है?'
                },
                answer: {
                    en: '"At the eleventh hour" = at the very last moment; "A white elephant" = a very expensive but useless possession.',
                    pa: '"At the eleventh hour" = ਬਿਲਕੁਲ ਆਖ਼ਰੀ ਮੌਕੇ ਉੱਤੇ; "A white elephant" = ਬਹੁਤ ਮਹਿੰਗੀ ਪਰ ਬੇਕਾਰ ਚੀਜ਼।',
                    hi: '"At the eleventh hour" = अंतिम क्षण में; "A white elephant" = बहुत महँगी परंतु अनुपयोगी वस्तु।'
                }
            }
        ]
    },

    // =========================================================================
    // 6. ETT PAPER B HINDI COMPLETE BLUEPRINT: VARNA, SHABD, GRAMMAR & TRANSLATION
    // =========================================================================
    {
        topicId: 'ett-hindi-4',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 100,
            editorialNote: 'Level B -> I -> A complete blueprint for ETT Paper B Hindi (ett-hindi-1 to ett-hindi-15): Bhasha & Devanagari Lipi, Varna Vichar (11 Swar, 33 Vyanjan, 4 Sanyukt Vyanjan, Alpapran/Mahapran, Aghosh/Saghosh), Tatsam-Tadbhav, Rudh-Yaugik-Yogrudh, Vikari & Avikari Shabd, Upsarg-Pratyay, Vocabulary, Shudh-Ashudh Vartani, Muhavare, and Hindi-to-Punjabi Translation.'
        },
        bookRefs: [
            {
                title: 'हिंदी व्याकरण एवं रचना (Hindi Grammar & Composition — PSEB Class 9–12)',
                author: 'पंजाब स्कूल शिक्षा बोर्ड (PSEB), मोहाली',
                chapter: 'भाषा और लिपि, वर्ण-विचार, शब्द-विचार (तत्सम-तद्भव, विकारी-अविकारी), उपसर्ग-प्रत्यय, वर्तनी, मुहावरे तथा हिंदी से पंजाबी अनुवाद',
                relevance: 'Official PSEB Hindi syllabus benchmark for ETT Paper B Hindi section.'
            },
            {
                title: 'आधुनिक हिंदी व्याकरण और रचना',
                author: 'डॉ. वासुदेवनंदन प्रसाद / कामताप्रसाद गुरु',
                chapter: 'वर्णमाला, उच्चारण स्थान, शब्द-भेद और वाक्य-शुद्धि',
                relevance: 'Authoritative reference for Varna articulation, Alpapran/Mahapran, and Tatsam-Tadbhav.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Class 6–8 Foundation]
1. **Hindi Language & Devanagari Script (\`भाषा और देवनागरी लिपि\` — \`ett-hindi-1\`):**
   - Hindi is written in the **Devanagari script (\`देवनागरी लिपि\`)**, which evolved from the **Northern Brāhmī script (\`ब्राह्मी लिपि\`)** and is **syllabic (\`आक्षरिक\`)**, written **left-to-right**.
   - Under **Article 343(1)** of the Indian Constitution, Hindi in Devanagari script was adopted as the **Official Language of the Union (\`संघ की राजभाषा\`)** on **14 September 1949** (celebrated annually as **राष्ट्रीय हिंदी दिवस**).
2. **Varna Vichar (\`वर्ण-विचार\` — \`ett-hindi-2\`): 52 Total Varnas in Standard Hindi:**
   - **11 Swar (\`स्वर\` — Vowels):**
     - **ह्रस्व स्वर (4 Short Vowels — 1 Matra):** **\`अ, इ, उ, ऋ\`** (also called *मूल स्वर*).
     - **दीर्घ स्वर (7 Long Vowels — 2 Matras):** **\`आ, ई, ऊ, ए, ऐ, ओ, औ\`** (of which \`ए, ऐ, ओ, औ\` are *संयुक्त स्वर* — \`अ+इ=ए\`, \`अ+ए=ऐ\`, \`अ+उ=ओ\`, \`अ+ओ=औ\`).
     - **अयोगवाह (2 Ayogvah):** **\`अं\` (अनुस्वार)** and **\`अः\` (विसर्ग)** — neither pure vowels nor consonants.
   - **33 Mool Vyanjan (\`मूल व्यंजन\`) + Additional Letters (= 52 Total):**
     - **स्पर्श व्यंजन (25 Stop Consonants):** 5 Vargs (\`कवर्ग, चवर्ग, टवर्ग, तवर्ग, पवर्ग\` — from **\`क\`** to **\`म\`**).
     - **अंतःस्थ व्यंजन (4 Semivowels):** **\`य, र, ल, व\`** (\`य, व\` are *अर्धस्वर*; \`र\` is *लुंठित/प्रकंपित*; \`ल\` is *पार्श्विक*).
     - **ऊष्म / संघर्षी व्यंजन (4 Fricatives):** **\`श, ष, स, ह\`**.
     - **संयुक्त व्यंजन (4 Conjunct Consonants — High-Yield Decomposition Trap):**
       - **\`क्ष = क् + ष\`** (NOT \`क + श\`!)
       - **\`त्र = त् + र\`**
       - **\`ज्ञ = ज् + ञ\`**
       - **\`श्र = श् + र\`**
     - **उत्क्षिप्त / द्विगुण व्यंजन (2 Flaps):** **\`ड़, ढ़\`** (never start a word).

---

### [Level I: Intermediate — Class 9–10 Core & ETT Paper B Matrix]
1. **Place of Articulation (\`उच्चारण स्थान\`), Alpapran/Mahapran & Aghosh/Saghosh:**
   | Varg / Group | उच्चारण स्थान (Articulation) | अल्पप्राण (1, 3, 5) | महाप्राण (2, 4) | अघोष (1, 2) | सघोष / घोष (3, 4, 5) |
   |---|---|---|---|---|---|
   | **कवर्ग (+ अ, आ, ह, विसर्ग)** | **कंठ्य (Velar/Glottal)** | क, ग, ङ | ख, घ | क, ख | ग, घ, ङ (ह) |
   | **चवर्ग (+ इ, ई, य, श)** | **तालव्य (Palatal)** | च, ज, ञ (य) | छ, झ (श) | च, छ (श) | ज, झ, ञ (य) |
   | **टवर्ग (+ ऋ, र, ष)** | **मूर्धन्य (Retroflex)** | ट, ड, ण (र) | ठ, ढ (ष) | ट, ठ (ष) | ड, ढ, ण (र) |
   | **तवर्ग (+ ल, स)** | **दन्त्य (Dental)** | त, द, न (ल) | थ, ध (स) | त, थ (स) | द, ध, न (ल) |
   | **पवर्ग (+ उ, ऊ)** | **ओष्ठ्य (Labial)** | प, ब, म | फ, भ | प, फ | ब, भ, म |
   | **व (Labio-dental)** | **दन्तोष्ठ्य** | व | — | — | व |
   | **ए, ऐ / ओ, औ** | **कंठतालव्य / कंठोष्ठ्य** | सभी स्वर अल्पप्राण | — | — | सभी 11 स्वर सघोष |
2. **Shabd Vichar: Tatsam-Tadbhav & Rudh-Yaugik-Yogrudh (\`ett-hindi-3\`):**
   - **By Origin (\`उत्पत्ति/स्रोत के आधार पर — 4 भेद\`):**
     1. **तत्सम (Tatsam):** Pure Sanskrit words used unchanged (\`अग्नि, सूर्य, दुग्ध, ग्राम, अश्रु, कर्पूर\`).
     2. **तद्भव (Tadbhav):** Evolved from Sanskrit through Prakrit (\`आग, सूरज, दूध, गाँव, आँसू, कपूर\`).
     3. **देशज (Indigenous):** \`लोटा, पगड़ी, खटिया, झाड़ू, थैला, जूता, खिड़की\`.
     4. **विदेशज (Foreign):** Arabic/Persian (\`अदालत, किताब, चश्मा\`), English (\`स्कूल, स्टेशन\`), Portuguese (\`अलमारी, आलपिन, चाबी, तौलिया, गमला\`).
   - **High-Yield Tatsam $\\to$ Tadbhav Table:**
     | तत्सम (Tatsam) | तद्भव (Tadbhav) | तत्सम (Tatsam) | तद्भव (Tadbhav) |
     |---|---|---|---|
     | **अग्नि** | **आग** | **गोधूम** | **गेहूँ** |
     | **दुग्ध** | **दूध** | **हरिद्रा** | **हल्दी** |
     | **दधि** | **दही** | **अश्रु** | **आँसू** |
     | **घृत** | **घी** | **ग्राम** | **गाँव** |
     | **सूर्य** | **सूरज** | **कर्पूर** | **कपूर** |
     | **कर्ण** | **कान** | **मयूर** | **मोर** |
     | **हस्त** | **हाथ** | **आम्र** | **आम** |
   - **By Structure (\`रचना/बनावट के आधार पर — 3 भेद\`):**
     1. **रूढ़ (Root/Indivisible):** Meaningful units that become meaningless if split (\`जल, दिन, घर, कमल, हाथ\`).
     2. **यौगिक (Compound):** Formed by two meaningful units (\`उपसर्ग/प्रत्यय/संधि\`) keeping literal meaning (\`विद्यालय = विद्या+आलय, पुस्तकालय, रसोईघर, सामाजिक\`).
     3. **योगरूढ़ (Bahuvrihi Compound):** Compound words that acquire a **specialized third meaning** (\`पंकज\` = born in mud $\\to$ specifically **Lotus**; \`दशानन\` $\\to$ **Ravana**; \`लम्बोदर\` $\\to$ **Ganesha**; \`पीताम्बर\` $\\to$ **Vishnu/Krishna**).
3. **Vikari (\`ett-hindi-4\`) & Avikari (\`ett-hindi-5\`) Words + Upsarg/Pratyay:**
   - **विकारी शब्द (4):** **संज्ञा (5 भेद)**, **सर्वनाम (6 भेद — 11 मूल सर्वनाम: \`मैं, तू, आप, यह, वह, जो, सो, कोई, कुछ, कौन, क्या\`)**, **विशेषण (4 भेद: \`गुणवाचक, संख्यावाचक, परिमाणवाचक, सार्वनामिक\`)**, **क्रिया (\`अकर्मक, सकर्मक, प्रेरणार्थक, पूर्वकालिक — पढ़कर, खाकर\`)**।
   - **अविकारी / अव्यय (4):** **क्रियाविशेषण (4 भेद: \`कालवाचक, स्थानवाचक, रीतिवाचक, परिमाणवाचक\`)**, **संबंधबोधक**, **समुच्चयबोधक**, **विस्मयादिबोधक**।

---

### [Level A: Advanced — Vocabulary, Shudh Vartani & Hindi-to-Punjabi Translation (\`ett-hindi-6\` to \`ett-hindi-15\`)]
1. **High-Yield Shudh-Ashudh Vartani (\`शुद्ध-अशुद्ध वर्तनी\` — Top ETT Traps):**
   | अशुद्ध वर्तनी (Incorrect) | शुद्ध वर्तनी (Correct) | Orthographic Rule |
   |---|---|---|
   | कवियित्री / कवयत्री | **कवयित्री** | No Matra on \`व\`; short \`इ\` on \`य\` |
   | उज्वल / उज्जवल | **उज्ज्वल** | **Both \`ज्\` are half** (\`उत् + ज्वल = उज्ज्वल\`) |
   | आर्शीवाद | **आशीर्वाद** | रेफ (\`र्\`) goes on **\`वा\`** (\`आशीः + वाद\`), after the sound of \`शी\` |
   | सन्यासी | **संन्यासी** | Takes both Anusvara (\`ं\`) and half \`न्\` (\`सम् + न्यासी\`) |
   | वाल्मीकी | **वाल्मीकि** | Long \`मी\` + short \`कि\` |
   | प्रज्वल्लित | **प्रज्वलित** | Single \`ल\` (\`प्र + ज्वलित\`) |
   | एतिहासिक | **ऐतिहासिक** | \`इतिहास + इक\` $\\to$ initial \`इ\` becomes Vriddhi **\`ऐ\`** |
2. **Paryayvachi, Anekarthi (\`अनेकार्थी\`) & Muhavare:**
   - **पर्यायवाची:** **कमल** (\`पंकज, जलज, नीरज, सरोज, अरविंद, राजीव\`); **बादल** (\`जलद, नीरद, वारिद, मेघ, पयोद\` — note **\`ज\` = Lotus**, **\`द\` = Cloud**, **\`धि\` = Ocean \`जलधि\`**); **सूर्य** (\`दिनकर, दिवाकर, भानु, भास्कर, आदित्य\`); **अग्नि** (\`अनिल = हवा\` vs **\`अनल = आग\`**, \`पावक, हुताशन, कृशानु\`).
   - **अनेकार्थी शब्द:** **\`कनक\`** = सोना (gold), धतूरा (thorn-apple), गेहूँ (wheat); **\`हरि\`** = विष्णु, सिंह, बंदर, सूर्य, मेंढक; **\`कर\`** = हाथ, टैक्स (tax), किरण (ray), हाथी की सूँड़; **\`अंबर\`** = आकाश, वस्त्र।
   - **मुहावरे एवं लोकोक्तियाँ:** \`नौ दो ग्यारह होना\` (भाग जाना), \`आँखों का तारा\` (बहुत प्यारा), \`अंगूठा दिखाना\` (साफ़ इनकार करना), \`अधजल गगरी छलकत जाए\` (ओछा आदमी अधिक इतराता है), \`आम के आम गुठलियों के दाम\` (दोहरा लाभ)।
3. **Hindi-to-Punjabi Translation (\`हिंदी से पंजाबी अनुवाद\` — \`ett-hindi-15\`):**
   | हिंदी वाक्य (Hindi) | पंजाबी अनुवाद (Punjabi Translation) |
   |---|---|
   | **परिश्रम ही सफलता की कुंजी है।** | **ਮਿਹਨਤ ਹੀ ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ ਹੈ।** |
   | **सत्य की सदैव विजय होती है।** | **ਸੱਚ ਦੀ ਹਮੇਸ਼ਾ ਜਿੱਤ ਹੁੰਦੀ ਹੈ।** |
   | **विद्यार्थी देश का भविष्य हैं।** | **ਵਿਦਿਆਰਥੀ ਦੇਸ਼ ਦਾ ਭਵਿੱਖ ਹਨ।** |
   | **हमें अपने बड़ों का आदर करना चाहिए।** | **ਸਾਨੂੰ ਆਪਣੇ ਵੱਡਿਆਂ ਦਾ ਸਤਿਕਾਰ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ।** |
   | **स्वास्थ्य ही सबसे बड़ा धन है।** | **ਸਿਹਤ ਹੀ ਸਭ ਤੋਂ ਵੱਡਾ ਧਨ ਹੈ।** |
   | **समय किसी की प्रतीक्षा नहीं करता।** | **ਸਮਾਂ ਕਿਸੇ ਦੀ ਉਡੀਕ ਨਹੀਂ ਕਰਦਾ।** |`,
            pa: `### [Level B: Basic — Class 6–8 ਬੁਨਿਆਦੀ ਪੱਧਰ]
1. **ਹਿੰਦੀ ਭਾਸ਼ਾ ਅਤੇ ਦੇਵਨਾਗਰੀ ਲਿਪੀ (\`ett-hindi-1\`):**
   - ਹਿੰਦੀ **ਦੇਵਨਾਗਰੀ ਲਿਪੀ (\`देवनागरी लिपि\`)** ਵਿੱਚ ਲਿਖੀ ਜਾਂਦੀ ਹੈ ਜੋ ਪ੍ਰਾਚੀਨ **ਬ੍ਰਹਮੀ ਲਿਪੀ** ਤੋਂ ਵਿਕਸਿਤ ਹੋਈ ਹੈ ਅਤੇ ਖੱਬੇ ਤੋਂ ਸੱਜੇ ਲਿਖੀ ਜਾਂਦੀ ਹੈ।
   - ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੇ **ਅਨੁਛੇਦ 343(1)** ਅਧੀਨ **14 ਸਤੰਬਰ 1949** ਨੂੰ ਹਿੰਦੀ ਨੂੰ ਸੰਘ ਦੀ ਰਾਜਭਾਸ਼ਾ ਐਲਾਨਿਆ ਗਿਆ (**14 ਸਤੰਬਰ = ਹਿੰਦੀ ਦਿਵਸ**)।
2. **ਵਰਣ-ਵਿਚਾਰ (\`वर्ण-विचार\` — \`ett-hindi-2\`): ਮਿਆਰੀ ਹਿੰਦੀ ਵਿੱਚ ਕੁੱਲ 52 ਵਰਣ:**
   - **11 ਸਵਰ (\`स्वर\`):** **4 ਹ੍ਰਸਵ/ਮੂਲ ਸਵਰ (\`अ, इ, उ, ऋ\`)** + **7 ਦੀਰਘ ਸਵਰ (\`आ, ई, ऊ, ए, ऐ, ओ, औ\`)**; **2 ਅਯੋਗਵਾਹ (\`अं\` ਅਨੁਸਵਾਰ, \`अः\` ਵਿਸਰਗ)**।
   - **33 ਮੂਲ ਵਿਅੰਜਨ:** **25 ਸਪਰਸ਼ ਵਿਅੰਜਨ** (\`क\` ਤੋਂ \`म\` — 5 ਵਰਗ), **4 ਅੰਤਸਥ (\`य, र, ल, व\`)**, **4 ਊਸ਼ਮ (\`श, ष, स, ह\`)**।
   - **4 ਸੰਯੁਕਤ ਵਿਅੰਜਨ (ਪ੍ਰੀਖਿਆ ਲਈ ਅਤਿ ਮਹੱਤਵਪੂਰਨ):**
     - **\`क्ष = क् + ष\`** | **\`त्र = त् + र\`** | **\`ज्ञ = ज् + ञ\`** | **\`श्र = श् + र\`**
   - **2 ਉਤਕਸ਼ਿਪਤ / ਦ੍ਵਿਗੁਣ ਵਿਅੰਜਨ:** **\`ड़, ढ़\`**।

---

### [Level I: Intermediate — Class 9–10 ਮੱਧ ਪੱਧਰ ਅਤੇ ETT Paper B ਮੈਟ੍ਰਿਕਸ]
1. **ਉਚਾਰਨ ਸਥਾਨ, ਅਲਪਪ੍ਰਾਣ-ਮਹਾਪ੍ਰਾਣ ਅਤੇ ਅਘੋਸ਼-ਸਘੋਸ਼:**
   - **ਅਲਪਪ੍ਰਾਣ:** ਹਰੇਕ ਵਰਗ ਦਾ **1, 3, 5ਵਾਂ ਵਰਣ** + \`य, र, ल, व\` + ਸਾਰੇ ਸਵਰ।
   - **ਮਹਾਪ੍ਰਾਣ:** ਹਰੇਕ ਵਰਗ ਦਾ **2, 4ਵਾਂ ਵਰਣ** + \`श, ष, स, ह\`।
   - **ਅਘੋਸ਼:** ਹਰੇਕ ਵਰਗ ਦਾ **1, 2ਰਾ ਵਰਣ** + \`श, ष, स\`।
   - **ਸਘੋਸ਼ (ਘੋਸ਼):** ਹਰੇਕ ਵਰਗ ਦਾ **3, 4, 5ਵਾਂ ਵਰਣ** + \`य, र, ल, व, ह\` + ਸਾਰੇ 11 ਸਵਰ।
2. **ਸ਼ਬਦ-ਵਿਚਾਰ (\`ett-hindi-3\` ਤੋਂ \`ett-hindi-5\`):**
   - **ਉਤਪੱਤੀ ਦੇ ਆਧਾਰ 'ਤੇ (4 ਭੇਦ):** **ਤਤਸਮ (Tatsam — ਸੰਸਕ੍ਰਿਤ ਮੂਲ)** ਬਨਾਮ **ਤਦਭਵ (Tadbhav — ਵਿਕਸਿਤ ਹਿੰਦੀ)**: \`अग्नि -> आग\`, \`दुग्ध -> दूध\`, \`दधि -> दही\`, \`घृत -> घी\`, \`गोधूम -> गेहूँ\`, \`हरिद्रा -> हल्दी\`, \`अश्रु -> आँसू\`, \`ग्राम -> गाँव\`, \`कर्ण -> कान\`, \`मयूर -> मोर\`।
   - **ਰਚਨਾ/ਬਣਾਵਟ ਦੇ ਆਧਾਰ 'ਤੇ (3 ਭੇਦ):** **1. ਰੂੜ੍ਹ** (\`जल, घर, दिन\`), **2. ਯੌਗਿਕ** (\`विद्यालय, पुस्तकालय\`), **3. ਯੋਗਰੂੜ੍ਹ** (ਵਿਸ਼ੇਸ਼ ਤੀਜਾ ਅਰਥ ਦੇਣ ਵਾਲੇ ਬਹੁਵ੍ਰੀਹੀ ਸ਼ਬਦ: \`पंकज = कमल\`, \`दशानन = रावण\`, \`लम्बोदर = गणेश\`)।
   - **ਵਿਕਾਰੀ (4):** ਸੰਗਿਆ (5), ਸਰਵਨਾਮ (6 ਭੇਦ — 11 ਮੂਲ ਸਰਵਨਾਮ), ਵਿਸ਼ੇਸ਼ਣ (4 ਭੇਦ), ਕਿਰਿਆ। **ਅਵਿਕਾਰੀ/ਅਵਯ (4):** ਕਿਰਿਆ-ਵਿਸ਼ੇਸ਼ਣ (4), ਸੰਬੰਧਬੋਧਕ, ਸਮੁੱਚਯਬੋਧਕ, ਵਿਸਮਿਆਦਿਬੋਧਕ।

---

### [Level A: Advanced — ਸ਼ੁੱਧ ਵਰਣ-ਜੋੜ, ਸ਼ਬਦ ਭੰਡਾਰ ਅਤੇ ਹਿੰਦੀ ਤੋਂ ਪੰਜਾਬੀ ਅਨੁਵਾਦ]
1. **ਪ੍ਰਮੁੱਖ ਸ਼ੁੱਧ-ਅਸ਼ੁੱਧ ਸ਼ਬਦ (\`शुद्ध वर्तनी\`):**
   - \`कवियित्री ->\` **कवयित्री** | \`उज्वल ->\` **उज्ज्वल** (ਦੋਵੇਂ \`ज्\` ਅੱਧੇ) | \`आर्शीवाद ->\` **आशीर्वाद** | \`सन्यासी ->\` **संन्यासी** | \`वाल्मीकी ->\` **वाल्मीकि** | \`एतिहासिक ->\` **ऐतिहासिक**।
2. **ਪਰਿਆਇਵਾਚੀ ਅਤੇ ਅਨੇਕਾਰਥੀ ਸ਼ਬਦ:**
   - ਪਾਣੀ (\`जल/नीर/वारि\`) ਦੇ ਪਿੱਛੇ **\`ज\`** ਲੱਗੇ ਤਾਂ **ਕਮਲ** (\`जलज, नीरज, पंकज\`), **\`द\`** ਲੱਗੇ ਤਾਂ **ਬੱਦਲ** (\`जलद, नीरद, वारिद\`), ਅਤੇ **\`धि\`** ਲੱਗੇ ਤਾਂ **ਸਮੁੰਦਰ** (\`जलधि, नीरधि, वारिधि\`)।
   - **\`अनल\`** = ਅੱਗ (\`अग्नि\`) ਬਨਾਮ **\`अनिल\`** = ਹਵਾ (\`वायु\`)।
   - **\`कनक\`** = ਸੋਨਾ, ਧਤੂਰਾ, ਕਣਕ | **\`कर\`** = ਹੱਥ, ਟੈਕਸ, ਕਿਰਨ।
3. **ਹਿੰਦੀ ਤੋਂ ਪੰਜਾਬੀ ਅਨੁਵਾਦ (\`ett-hindi-15\`):**
   - \`परिश्रम ही सफलता की कुंजी है।\` $\\to$ **ਮਿਹਨਤ ਹੀ ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ ਹੈ।**
   - \`सत्य की सदैव विजय होती है।\` $\\to$ **ਸੱਚ ਦੀ ਹਮੇਸ਼ਾ ਜਿੱਤ ਹੁੰਦੀ ਹੈ।**
   - \`समय किसी की प्रतीक्षा नहीं करता।\` $\\to$ **ਸਮਾਂ ਕਿਸੇ ਦੀ ਉਡੀਕ ਨਹੀਂ ਕਰਦਾ।**`,
            hi: `### [Level B: Basic — Class 6–8 आधारभूत स्तर]
1. **भाषा, देवनागरी लिपि एवं वर्ण-विचार (\`ett-hindi-1\`, \`ett-hindi-2\`):**
   - हिंदी **देवनागरी लिपि** (ब्राह्मी से विकसित, बाएँ से दाएँ) में लिखी जाती है। **अनुच्छेद 343(1)** के अंतर्गत **14 सितंबर 1949** को राजभाषा बनी (**14 सितंबर = हिंदी दिवस**)।
   - **वर्णमाला (कुल 52 वर्ण):** **11 स्वर** (4 ह्रस्व: \`अ, इ, उ, ऋ\` + 7 दीर्घ: \`आ, ई, ऊ, ए, ऐ, ओ, औ\`), **2 अयोगवाह (\`अं, अः\`)**, **33 मूल व्यंजन** (25 स्पर्श \`क\` से \`म\` + 4 अंतःस्थ \`य, र, ल, व\` + 4 ऊष्म \`श, ष, स, ह\`), **4 संयुक्त व्यंजन (\`क्ष = क्+ष\`, \`त्र = त्+र\`, \`ज्ञ = ज्+ञ\`, \`श्र = श्+र\`)**, तथा **2 उत्क्षिप्त/द्विगुण व्यंजन (\`ड़, ढ़\`)**।

---

### [Level I: Intermediate — Class 9–10 मध्यम स्तर एवं ETT Paper B मैट्रिक्स]
1. **उच्चारण स्थान, अल्पप्राण-महाप्राण एवं अघोष-सघोष:**
   - **अल्पप्राण:** प्रत्येक वर्ग का **1, 3, 5वाँ वर्ण** + \`य, र, ल, व\` + सभी स्वर।
   - **महाप्राण:** प्रत्येक वर्ग का **2, 4वाँ वर्ण** + \`श, ष, स, ह\`।
   - **अघोष:** प्रत्येक वर्ग का **1, 2रा वर्ण** + \`श, ष, स\`।
   - **सघोष (घोष):** प्रत्येक वर्ग का **3, 4, 5वाँ वर्ण** + \`य, र, ल, व, ह\` + सभी 11 स्वर।
2. **शब्द-विचार: तत्सम-तद्भव, रूढ़-यौगिक-योगरूढ़ एवं विकारी-अविकारी (\`ett-hindi-3\` से \`ett-hindi-5\`):**
   - **तत्सम $\\to$ तद्भव:** \`अग्नि -> आग\`, \`दुग्ध -> दूध\`, \`दधि -> दही\`, \`घृत -> घी\`, \`गोधूम -> गेहूँ\`, \`हरिद्रा -> हल्दी\`, \`अश्रु -> आँसू\`, \`ग्राम -> गाँव\`, \`कर्ण -> कान\`, \`हस्त -> हाथ\`, \`मयूर -> मोर\`, \`कर्पूर -> कपूर\`।
   - **रचना के आधार पर (3 भेद):** **1. रूढ़** (\`जल, घर, दिन\`), **2. यौगिक** (\`विद्यालय, पुस्तकालय\`), **3. योगरूढ़** (विशेष अर्थ देने वाले बहुव्रीहि शब्द: \`पंकज, दशानन, लम्बोदर, पीताम्बर\`)।
   - **विकारी (4):** संज्ञा (5), सर्वनाम (6 भेद, 11 मूल सर्वनाम), विशेषण (4 भेद: गुणवाचक, संख्यावाचक, परिमाणवाचक, सार्वनामिक), क्रिया (\`अकर्मक, सकर्मक, प्रेरणार्थक, पूर्वकालिक\`)।
   - **अविकारी/अव्यय (4):** क्रियाविशेषण (4 भेद), संबंधबोधक, समुच्चयबोधक, विस्मयादिबोधक।

---

### [Level A: Advanced — शुद्ध वर्तनी, शब्द-भंडार एवं हिंदी से पंजाबी अनुवाद (\`ett-hindi-6\` से \`ett-hindi-15\`)]
1. **उच्च-स्तरीय शुद्ध वर्तनी:** **कवयित्री, उज्ज्वल, आशीर्वाद, संन्यासी, वाल्मीकि, प्रज्वलित, ऐतिहासिक**।
2. **पर्यायवाची ट्रिक (\`ज / द / धि\`):** \`नीर/जल/वारि\` + **\`ज\` = कमल (\`जलज, नीरज\`)** | + **\`द\` = बादल (\`जलद, नीरद\`)** | + **\`धि\` = समुद्र (\`जलधि, नीरधि\`)**; **\`अनल\` = आग** बनाम **\`अनिल\` = हवा**।
3. **हिंदी से पंजाबी अनुवाद (\`ett-hindi-15\`):**
   - \`परिश्रम ही सफलता की कुंजी है।\` $\\to$ **ਮਿਹਨਤ ਹੀ ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ ਹੈ।**
   - \`सत्य की सदैव विजय होती है।\` $\\to$ **ਸੱਚ ਦੀ ਹਮੇਸ਼ਾ ਜਿੱਤ ਹੁੰਦੀ ਹੈ।**
   - \`स्वास्थ्य ही सबसे बड़ा धन है।\` $\\to$ **ਸਿਹਤ ਹੀ ਸਭ ਤੋਂ ਵੱਡਾ ਧਨ ਹੈ।**`
        },
        keyNotes: {
            en: [
                '**Hindi Varna Counts:** **11 Swar** (4 Hrasva `अ, इ, उ, ऋ` + 7 Dirgha `आ, ई, ऊ, ए, ऐ, ओ, औ`), **2 Ayogvah (`अं, अः`)**, **33 Mool Vyanjan** (25 Sparsh + 4 Antastha + 4 Ushma), **4 Sanyukt Vyanjan (`क्ष, त्र, ज्ञ, श्र`)**, **2 Uchhipt (`ड़, ढ़`)** = **52 Total Varnas**.',
                '**4 Sanyukt Vyanjan Decomposition Formula:** **`क्ष = क् + ष`**, **`त्र = त् + र`**, **`ज्ञ = ज् + ञ`**, **`श्र = श् + र`** (remember the Halant on the first consonant!).',
                '**Alpapran/Mahapran & Aghosh/Saghosh Code:** **Alpapran = 1, 3, 5 + य,र,ल,व** | **Mahapran = 2, 4 + श,ष,स,ह** | **Aghosh = 1, 2 + श,ष,स** | **Saghosh = 3, 4, 5 + य,र,ल,व,ह + 11 Swar**.',
                '**Rudh vs Yaugik vs Yogrudh:** **`जल, घर`** = रूढ़ (indivisible); **`विद्यालय, हिमालय`** = यौगिक (literal compound); **`पंकज, दशानन, लम्बोदर, जलज`** = योगरूढ़ (specialized Bahuvrihi third meaning).',
                '**Top 7 Spelling (Vartani) Classics:** **कवयित्री**, **उज्ज्वल** (two half `ज्`), **आशीर्वाद** (`र्` on `वा`), **संन्यासी**, **वाल्मीकि**, **प्रज्वलित**, **ऐतिहासिक**.',
                '**Lotus / Cloud / Ocean Suffix Trick:** Root word for water (`जल, नीर, वारि, पय, तोय`) + **`ज` = Lotus (`जलज`)** | + **`द` = Cloud (`जलद`)** | + **`धि` = Ocean (`जलधि`)**.'
            ],
            pa: [
                '**ਹਿੰਦੀ ਵਰਣਮਾਲਾ ਅੰਕੜੇ:** **11 ਸਵਰ** (4 ਹ੍ਰਸਵ `अ, इ, उ, ऋ` + 7 ਦੀਰਘ), **2 ਅਯੋਗਵਾਹ (`अं, अः`)**, **33 ਮੂਲ ਵਿਅੰਜਨ** (25 ਸਪਰਸ਼ + 4 ਅੰਤਸਥ + 4 ਊਸ਼ਮ), **4 ਸੰਯੁਕਤ ਵਿਅੰਜਨ (`क्ष, त्र, ज्ञ, श्र`)**, **2 ਦ੍ਵਿਗੁਣ (`ड़, ढ़`)** = **ਕੁੱਲ 52 ਵਰਣ**।',
                '**4 ਸੰਯੁਕਤ ਵਿਅੰਜਨ ਤੋੜਨ ਦਾ ਸੂਤਰ:** **`क्ष = क् + ष`**, **`त्र = त् + र`**, **`ज्ञ = ज् + ञ`**, **`श्र = श् + र`**।',
                '**ਅਲਪਪ੍ਰਾਣ/ਮਹਾਪ੍ਰਾਣ ਅਤੇ ਅਘੋਸ਼/ਸਘੋਸ਼ ਕੋਡ:** **ਅਲਪਪ੍ਰਾਣ = 1, 3, 5 + य,र,ल,व** | **ਮਹਾਪ੍ਰਾਣ = 2, 4 + श,ष,स,ह** | **ਅਘੋਸ਼ = 1, 2 + श,ष,स** | **ਸਘੋਸ਼ = 3, 4, 5 + य,र,ल,व,ह + 11 ਸਵਰ**।',
                '**ਰੂੜ੍ਹ, ਯੌਗਿਕ ਅਤੇ ਯੋਗਰੂੜ੍ਹ:** **`जल, घर`** = ਰੂੜ੍ਹ; **`विद्यालय`** = ਯੌਗਿਕ; **`पंकज, दशानन, लम्बोदर`** = ਯੋਗਰੂੜ੍ਹ (ਵਿਸ਼ੇਸ਼ ਤੀਜਾ ਅਰਥ)।',
                '**ਪ੍ਰਮੁੱਖ 7 ਸ਼ੁੱਧ ਹਿੰਦੀ ਸ਼ਬਦ:** **कवयित्री**, **उज्ज्वल** (ਦੋ ਅੱਧੇ `ज्`), **आशीर्वाद**, **संन्यासी**, **वाल्मीकि**, **प्रज्वलित**, **ऐतिहासिक**।',
                '**ਕਮਲ / ਬੱਦਲ / ਸਮੁੰਦਰ ਟ੍ਰਿਕ:** ਪਾਣੀ ਦੇ ਸ਼ਬਦ (`जल, नीर, वारि`) + **`ज` = ਕਮਲ (`जलज`)** | + **`द` = ਬੱਦਲ (`जलद`)** | + **`धि` = ਸਮੁੰਦਰ (`जलधि`)**।'
            ],
            hi: [
                '**हिंदी वर्णमाला आंकड़े:** **11 स्वर** (4 ह्रस्व `अ, इ, उ, ऋ` + 7 दीर्घ), **2 अयोगवाह (`अं, अः`)**, **33 मूल व्यंजन**, **4 संयुक्त व्यंजन (`क्ष, त्र, ज्ञ, श्र`)**, **2 द्विगुण (`ड़, ढ़`)** = **कुल 52 वर्ण**।',
                '**4 संयुक्त व्यंजन विच्छेद सूत्र:** **`क्ष = क् + ष`**, **`त्र = त् + र`**, **`ज्ञ = ज् + ञ`**, **`श्र = श् + र`**।',
                '**अल्पप्राण/महाप्राण व अघोष/सघोष कोड:** **अल्पप्राण = 1, 3, 5 + य,र,ल,व** | **महाप्राण = 2, 4 + श,ष,स,ह** | **अघोष = 1, 2 + श,ष,स** | **सघोष = 3, 4, 5 + य,र,ल,व,ह + 11 स्वर**।',
                '**रूढ़, यौगिक एवं योगरूढ़:** **`जल, घर`** = रूढ़; **`विद्यालय`** = यौगिक; **`पंकज, दशानन, लम्बोदर`** = योगरूढ़।',
                '**शीर्ष 7 शुद्ध वर्तनी:** **कवयित्री**, **उज्ज्वल**, **आशीर्वाद**, **संन्यासी**, **वाल्मीकि**, **प्रज्वलित**, **ऐतिहासिक**।',
                '**कमल / बादल / समुद्र ट्रिक:** जल के पर्याय (`जल, नीर, वारि`) + **`ज` = कमल (`जलज`)** | + **`द` = बादल (`जलद`)** | + **`धि` = समुद्र (`जलधि`)**।'
            ]
        },
        quickRevisionSheet: {
            en: [
                '**Articulation Map:** `कवर्ग, ह` = **कंठ्य** | `चवर्ग, य, श` = **तालव्य** | `टवर्ग, र, ष` = **मूर्धन्य** | `तवर्ग, ल, स` = **दन्त्य** | `पवर्ग` = **ओष्ठ्य** | `व` = **दन्तोष्ठ्य**.',
                '**Tatsam -> Tadbhav Rapid Fire:** `गोधूम -> गेहूँ` | `हरिद्रा -> हल्दी` | `घृत -> घी` | `दधि -> दही` | `दुग्ध -> दूध` | `अश्रु -> आँसू` | `कर्पूर -> कपूर`.',
                '**Hindi Subtype Numbers:** Swar = **11** | Mool Vyanjan = **33** | Total Varnas = **52** | Sangya = **5** | Sarvanam = **6 (11 Mool)** | Visheshan = **4** | Kriya-Visheshan = **4**.',
                '**Confusable Pairs:** `अनल` (Fire) vs `अनिल` (Wind) | `जलज` (Lotus) vs `जलद` (Cloud) | `कनक` = Gold / Dhatura / Wheat.',
                '**Hindi -> Punjabi Key Terms:** `परिश्रम -> ਮਿਹਨਤ` | `सफलता -> ਸਫ਼ਲਤਾ` | `प्रतीक्षा -> ਉਡੀਕ` | `स्वास्थ्य -> ਸਿਹਤ` | `भविष्य -> ਭਵਿੱਖ`.'
            ],
            pa: [
                '**ਉਚਾਰਨ ਸਥਾਨ ਸੂਤਰ:** `कवर्ग, ह` = **कंठ्य** | `चवर्ग, य, श` = **तालव्य** | `टवर्ग, र, ष` = **मूर्धन्य** | `तवर्ग, ल, स` = **दन्त्य** | `पवर्ग` = **ओष्ठ्य** | `व` = **दन्तोष्ठ्य**।',
                '**ਤਤਸਮ -> ਤਦਭਵ ਸੂਤਰ:** `गोधूम -> गेहूँ` | `हरिद्रा -> हल्दी` | `घृत -> घी` | `दधि -> दही` | `दुग्ध -> दूध` | `अश्रु -> आँसू` | `कर्पूर -> कपूर`।',
                '**ਹਿੰਦੀ ਵਿਆਕਰਨ ਅੰਕੜੇ:** ਸਵਰ = **11** | ਮੂਲ ਵਿਅੰਜਨ = **33** | ਕੁੱਲ ਵਰਣ = **52** | ਸੰਗਿਆ = **5** | ਸਰਵਨਾਮ = **6 (11 ਮੂਲ)** | ਵਿਸ਼ੇਸ਼ਣ = **4** | ਕਿਰਿਆ-ਵਿਸ਼ੇਸ਼ਣ = **4**।',
                '**ਭੁਲੇਖਾ ਪਾਊ ਸ਼ਬਦ:** `अनल` (ਅੱਗ) ਬਨਾਮ `अनिल` (ਹਵਾ) | `जलज` (ਕਮਲ) ਬਨਾਮ `जलद` (ਬੱਦਲ) | `कनक` = ਸੋਨਾ / ਧਤੂਰਾ / ਕਣਕ।',
                '**ਹਿੰਦੀ -> ਪੰਜਾਬੀ ਅਨੁਵਾਦ ਸ਼ਬਦ:** `परिश्रम -> ਮਿਹਨਤ` | `सफलता -> ਸਫ਼ਲਤਾ` | `प्रतीक्षा -> ਉਡੀਕ` | `स्वास्थ्य -> ਸਿਹਤ` | `भविष्य -> ਭਵਿੱਖ`।'
            ],
            hi: [
                '**उच्चारण स्थान सूत्र:** `कवर्ग, ह` = **कंठ्य** | `चवर्ग, य, श` = **तालव्य** | `टवर्ग, र, ष` = **मूर्धन्य** | `तवर्ग, ल, स` = **दन्त्य** | `पवर्ग` = **ओष्ठ्य** | `व` = **दन्तोष्ठ्य**।',
                '**तत्सम -> तद्भव सूत्र:** `गोधूम -> गेहूँ` | `हरिद्रा -> हल्दी` | `घृत -> घी` | `दधि -> दही` | `दुग्ध -> दूध` | `अश्रु -> आँसू` | `कर्पूर -> कपूर`।',
                '**हिंदी व्याकरण आंकड़े:** स्वर = **11** | मूल व्यंजन = **33** | कुल वर्ण = **52** | संज्ञा = **5** | सर्वनाम = **6 (11 मूल)** | विशेषण = **4** | क्रिया-विशेषण = **4**।',
                '**युग्म शब्द:** `अनल` (आग) बनाम `अनिल` (हवा) | `जलज` (कमल) बनाम `जलद` (बादल) | `कनक` = सोना / धतूरा / गेहूँ।',
                '**हिंदी -> पंजाबी अनुवाद शब्द:** `परिश्रम -> ਮਿਹਨਤ` | `सफलता -> ਸਫ਼ਲਤਾ` | `प्रतीक्षा -> ਉਡੀਕ` | `स्वास्थ्य -> ਸਿਹਤ` | `भविष्य -> ਭਵਿੱਖ`।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: `क्ष` is decomposed as `क् + श` and `ज्ञ` is decomposed as `ग + य`. Correction: In Sanskrit/Hindi phonology, **`क्ष = क् + ष`** (Velar `क्` + Retroflex `ष`) and **`ज्ञ = ज् + ञ`** (Palatal `ज्` + Palatal nasal `ञ`).',
                'Misconception: The correct spelling of "bright/radiant" is `उज्वल` or `उज्जवल`. Correction: Derived from `उत् + ज्वल` by consonant sandhi (`त् + ज् = ज्ज्`), **both `ज्` are half (`उज्ज्वल`)**.',
                'Misconception: `ह` (Ha) is an Aghosh consonant like `श, ष, स`. Correction: While `श, ष, स` are **अघोष महाप्राण**, **`ह` is a सघोष (घोष) महाप्राण** consonant.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: `क्ष` ਦਾ ਵਿਛੇਦ `क् + श` ਅਤੇ `ज्ञ` ਦਾ ਵਿਛੇਦ `ग + य` ਹੁੰਦਾ ਹੈ। ਸੁਧਾਰ: ਮਿਆਰੀ ਹਿੰਦੀ ਵਿਆਕਰਨ ਵਿੱਚ **`क्ष = क् + ष`** ਅਤੇ **`ज्ञ = ज् + ञ`** ਹੁੰਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: `उज्वल` ਜਾਂ `उज्जवल` ਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ ਹੈ। ਸੁਧਾਰ: `उत् + ज्वल` ਦੀ ਵਿਅੰਜਨ ਸੰਧੀ ਨਾਲ ਦੋਵੇਂ `ज्` ਅੱਧੇ ਹੋ ਜਾਂਦੇ ਹਨ, ਇਸ ਲਈ ਸ਼ੁੱਧ ਸ਼ਬਦ **`उज्ज्वल`** ਹੈ।',
                'ਭੁਲੇਖਾ: `श, ष, स` ਵਾਂਗ `ह` ਵੀ ਅਘੋਸ਼ ਵਿਅੰਜਨ ਹੈ। ਸੁਧਾਰ: `श, ष, स` **ਅਘੋਸ਼ ਮਹਾਪ੍ਰਾਣ** ਹਨ, ਪਰ **`ह` ਸਘੋਸ਼ (ਘੋਸ਼) ਮਹਾਪ੍ਰਾਣ** ਵਿਅੰਜਨ ਹੈ।'
            ],
            hi: [
                'भ्रांति: `क्ष` का वर्ण-विच्छेद `क् + श` और `ज्ञ` का `ग + य` होता है। सुधार: मानक हिंदी व्याकरण में **`क्ष = क् + ष`** तथा **`ज्ञ = ज् + ञ`** होता है।',
                'भ्रांति: `उज्वल` या `उज्जवल` शुद्ध वर्तनी है। सुधार: `उत् + ज्वल` व्यंजन संधि के कारण **दोनों `ज्` आधे होते हैं — `उज्ज्वल`**।',
                'भ्रांति: `श, ष, स` की भाँति `ह` भी अघोष व्यंजन है। सुधार: `श, ष, स` **अघोष महाप्राण** हैं, जबकि **`ह` सघोष (घोष) महाप्राण** व्यंजन है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: '[ETT Paper B Hindi Grammar MCQ] Answer the following:\n(a) Classify the words `विद्यालय`, `जल`, and `पंकज` on the basis of structure (`रचना/बनावट के आधार पर`).\n(b) Give the Tadbhav (`तद्भव`) forms of `गोधूम` and `हरिद्रा`.',
                    pa: '[ETT Paper B ਹਿੰਦੀ ਵਿਆਕਰਨ MCQ] ਹੇਠ ਲਿਖਿਆਂ ਦੇ ਉੱਤਰ ਦਿਓ:\n(a) ਰਚਨਾ ਦੇ ਆਧਾਰ ਉੱਤੇ `विद्यालय`, `जल` ਅਤੇ `पंकज` ਸ਼ਬਦਾਂ ਦੀ ਕਿਸਮ ਦੱਸੋ।\n(b) `गोधूम` ਅਤੇ `हरिद्रा` ਦੇ ਤਦਭਵ (`तद्भव`) ਰੂਪ ਲਿਖੋ।',
                    hi: '[ETT Paper B हिंदी व्याकरण MCQ] निम्नलिखित के उत्तर दीजिए:\n(a) रचना/बनावट के आधार पर `विद्यालय`, `जल` और `पंकज` शब्दों का भेद बताइए।\n(b) `गोधूम` और `हरिद्रा` के तद्भव रूप लिखिए।'
                },
                solutionSteps: {
                    en: [
                        'In (a): **`जल`** cannot be split into meaningful parts $\\to$ **रूढ़ (Root word)**; **`विद्यालय`** (`विद्या + आलय`) is a compound keeping its literal meaning $\\to$ **यौगिक (Compound word)**; **`पंकज`** (`पंक + ज` = born in mud) refers specifically to the **Lotus**, so it is **योगरूढ़ (Specialized compound)**.',
                        'In (b): The Tatsam word **`गोधूम`** becomes **`गेहूँ`** (wheat) in Tadbhav, and **`हरिद्रा`** becomes **`हल्दी`** (turmeric).'
                    ],
                    pa: [
                        '(a) ਵਿੱਚ: **`जल`** ਦੇ ਸਾਰਥਕ ਟੁਕੜੇ ਨਹੀਂ ਹੋ ਸਕਦੇ $\\to$ **रूढ़ शब्द**; **`विद्यालय`** (`विद्या + आलय`) ਦੋ ਸ਼ਬਦਾਂ ਦੇ ਜੋੜ ਤੋਂ ਬਣਿਆ ਹੈ $\\to$ **यौगिक शब्द**; **`पंकज`** (ਚਿੱਕੜ ਵਿੱਚ ਉੱਗਣ ਵਾਲਾ ਅਰਥਾਤ ਵਿਸ਼ੇਸ਼ ਤੌਰ ਤੇ **ਕਮਲ**) $\\to$ **योगरूढ़ शब्द**।',
                        '(b) ਵਿੱਚ: **`गोधूम`** ਦਾ ਤਦਭਵ **`गेहूँ`** (ਕਣਕ) ਅਤੇ **`हरिद्रा`** ਦਾ ਤਦਭਵ **`हल्दी`** (ਹਲਦੀ) ਹੈ।'
                    ],
                    hi: [
                        '(a) में: **`जल`** के सार्थक खंड नहीं हो सकते $\\to$ **रूढ़ शब्द**; **`विद्यालय`** (`विद्या + आलय`) दो सार्थक शब्दों के योग से बना है $\\to$ **यौगिक शब्द**; **`पंकज`** विशेष तीसरे अर्थ (**कमल**) में रूढ़ है $\\to$ **योगरूढ़ शब्द**।',
                        '(b) में: **`गोधूम`** का तद्भव **`गेहूँ`** तथा **`हरिद्रा`** का तद्भव **`हल्दी`** है।'
                    ]
                },
                finalAnswer: {
                    en: '(a) जल = रूढ़, विद्यालय = यौगिक, पंकज = योगरूढ़ | (b) गोधूम -> गेहूँ, हरिद्रा -> हल्दी.',
                    pa: '(a) जल = रूढ़, विद्यालय = यौगिक, पंकज = योगरूढ़ | (b) गोधूम -> गेहूँ, हरिद्रा -> हल्दी।',
                    hi: '(a) जल = रूढ़, विद्यालय = यौगिक, पंकज = योगरूढ़ | (b) गोधूम -> गेहूँ, हरिद्रा -> हल्दी।'
                }
            },
            {
                problem: {
                    en: '[ETT Paper B Orthography & Translation MCQ] Identify the correctly spelled Hindi words from `(कवियित्री / कवयित्री)` and `(उज्वल / उज्ज्वल)`, and translate into Punjabi: `"परिश्रम ही सफलता की कुंजी है।"`',
                    pa: '[ETT Paper B ਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ ਅਤੇ ਅਨੁਵਾਦ MCQ] `(कवियित्री / कवयित्री)` ਅਤੇ `(उज्वल / उज्ज्वल)` ਵਿੱਚੋਂ ਸ਼ੁੱਧ ਹਿੰਦੀ ਸ਼ਬਦ ਚੁਣੋ, ਅਤੇ ਪੰਜਾਬੀ ਵਿੱਚ ਅਨੁਵਾਦ ਕਰੋ: `"परिश्रम ही सफलता की कुंजी है।"`',
                    hi: '[ETT Paper B वर्तनी एवं अनुवाद MCQ] `(कवियित्री / कवयित्री)` और `(उज्वल / उज्ज्वल)` में से शुद्ध शब्द चुनिए, तथा पंजाबी में अनुवाद कीजिए: `"परिश्रम ही सफलता की कुंजी है।"`'
                },
                solutionSteps: {
                    en: [
                        'The feminine of `कवि` is **`कवयित्री`** (no matra on `व`, short `इ` on `य`).',
                        'From `उत् + ज्वल`, both `ज्` are half: **`उज्ज्वल`**.',
                        'Hindi `"परिश्रम ही सफलता की कुंजी है।"` translates into standard Punjabi as **`"ਮਿਹਨਤ ਹੀ ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ ਹੈ।"`**'
                    ],
                    pa: [
                        '`कवि` ਦਾ ਇਸਤਰੀ ਲਿੰਗ ਸ਼ੁੱਧ ਰੂਪ **`कवयित्री`** ਹੈ।',
                        '`उत् + ज्वल` ਤੋਂ ਬਣਿਆ ਸ਼ੁੱਧ ਸ਼ਬਦ **`उज्ज्वल`** (ਦੋਵੇਂ `ज्` ਅੱਧੇ) ਹੈ।',
                        '`"परिश्रम ही सफलता की कुंजी है।"` ਦਾ ਪੰਜਾਬੀ ਅਨੁਵਾਦ **`"ਮਿਹਨਤ ਹੀ ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ ਹੈ।"`** ਹੈ।'
                    ],
                    hi: [
                        '`कवि` का शुद्ध स्त्रीलिंग रूप **`कवयित्री`** है।',
                        '`उत् + ज्वल` से बना शुद्ध शब्द **`उज्ज्वल`** (दोनों `ज्` आधे) है।',
                        '`"परिश्रम ही सफलता की कुंजी है।"` का पंजाबी अनुवाद **`"ਮਿਹਨਤ ਹੀ ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ ਹੈ।"`** है।'
                    ]
                },
                finalAnswer: {
                    en: 'Correct spellings: कवयित्री, उज्ज्वल | Punjabi Translation: ਮਿਹਨਤ ਹੀ ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ ਹੈ।',
                    pa: 'ਸ਼ੁੱਧ ਸ਼ਬਦ: कवयित्री, उज्ज्वल | ਪੰਜਾਬੀ ਅਨੁਵਾਦ: ਮਿਹਨਤ ਹੀ ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ ਹੈ।',
                    hi: 'शुद्ध वर्तनी: कवयित्री, उज्ज्वल | पंजाबी अनुवाद: ਮਿਹਨਤ ਹੀ ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ ਹੈ।'
                }
            }
        ],
        flashcards: [
            {
                id: 'ett-hin-fc-1',
                question: {
                    en: 'How many Swar (स्वर) and Mool Vyanjan (मूल व्यंजन) are in Hindi, and what is the constituent breakdown of the 4 Sanyukt Vyanjans (`क्ष, त्र, ज्ञ, श्र`)?',
                    pa: 'ਹਿੰਦੀ ਵਿੱਚ ਕਿੰਨੇ ਸਵਰ ਅਤੇ ਮੂਲ ਵਿਅੰਜਨ ਹਨ, ਅਤੇ 4 ਸੰਯੁਕਤ ਵਿਅੰਜਨਾਂ (`क्ष, त्र, ज्ञ, श्र`) ਦਾ ਵਰਣ-ਵਿਛੇਦ ਕੀ ਹੈ?',
                    hi: 'हिंदी में कितने स्वर और मूल व्यंजन हैं, तथा 4 संयुक्त व्यंजनों (`क्ष, त्र, ज्ञ, श्र`) का वर्ण-विच्छेद क्या है?'
                },
                answer: {
                    en: '11 Swar and 33 Mool Vyanjan (52 total Varnas). Breakdown: `क्ष = क् + ष`, `त्र = त् + र`, `ज्ञ = ज् + ञ`, `श्र = श् + र`.',
                    pa: '11 ਸਵਰ ਅਤੇ 33 ਮੂਲ ਵਿਅੰਜਨ (ਕੁੱਲ 52 ਵਰਣ)। ਵਿਛੇਦ: `क्ष = क् + ष`, `त्र = त् + र`, `ज्ञ = ज् + ञ`, `श्र = श् + र`।',
                    hi: '11 स्वर और 33 मूल व्यंजन (कुल 52 वर्ण)। विच्छेद: `क्ष = क् + ष`, `त्र = त् + र`, `ज्ञ = ज् + ञ`, `श्र = श् + र`।'
                }
            },
            {
                id: 'ett-hin-fc-2',
                question: {
                    en: 'Which positions in a consonant Varg are Alpapran (अल्पप्राण) vs Mahapran (महाप्राण), and which are Aghosh (अघोष) vs Saghosh (सघोष)?',
                    pa: 'ਹਿੰਦੀ ਵਿਅੰਜਨ ਵਰਗ ਵਿੱਚ ਕਿਹੜੇ ਵਰਣ ਅਲਪਪ੍ਰਾਣ ਬਨਾਮ ਮਹਾਪ੍ਰਾਣ ਅਤੇ ਕਿਹੜੇ ਅਘੋਸ਼ ਬਨਾਮ ਸਘੋਸ਼ ਹੁੰਦੇ ਹਨ?',
                    hi: 'व्यंजन वर्ग में कौन-से वर्ण अल्पप्राण बनाम महाप्राण तथा कौन-से अघोष बनाम सघोष होते हैं?'
                },
                answer: {
                    en: 'Alpapran: 1st, 3rd, 5th (+ य,र,ल,व). Mahapran: 2nd, 4th (+ श,ष,स,ह). Aghosh: 1st, 2nd (+ श,ष,स). Saghosh: 3rd, 4th, 5th (+ य,र,ल,व,ह + all 11 Swar).',
                    pa: 'ਅਲਪਪ੍ਰਾਣ: 1, 3, 5ਵਾਂ (+ य,र,ल,व)। ਮਹਾਪ੍ਰਾਣ: 2, 4ਵਾਂ (+ श,ष,स,ह)। ਅਘੋਸ਼: 1, 2ਰਾ (+ श,ष,स)। ਸਘੋਸ਼: 3, 4, 5ਵਾਂ (+ य,र,ल,व,ह + ਸਾਰੇ 11 ਸਵਰ)।',
                    hi: 'अल्पप्राण: 1, 3, 5वाँ (+ य,र,ल,व)। महाप्राण: 2, 4वाँ (+ श,ष,स,ह)। अघोष: 1, 2रा (+ श,ष,स)। सघोष: 3, 4, 5वाँ (+ य,र,ल,व,ह + सभी 11 स्वर)।'
                }
            },
            {
                id: 'ett-hin-fc-3',
                question: {
                    en: 'Give the Tadbhav (तद्भव) forms of the Tatsam words: `गोधूम`, `हरिद्रा`, `घृत`, `अश्रु`, and `दधि`.',
                    pa: 'ਤਤਸਮ ਸ਼ਬਦਾਂ `गोधूम`, `हरिद्रा`, `घृत`, `अश्रु` ਅਤੇ `दधि` ਦੇ ਤਦਭਵ ਰੂਪ ਦੱਸੋ।',
                    hi: 'तत्सम शब्दों `गोधूम`, `हरिद्रा`, `घृत`, `अश्रु` और `दधि` के तद्भव रूप बताइए।'
                },
                answer: {
                    en: '`गोधूम -> गेहूँ`, `हरिद्रा -> हल्दी`, `घृत -> घी`, `अश्रु -> आँसू`, `दधि -> दही`.',
                    pa: '`गोधूम -> गेहूँ`, `हरिद्रा -> हल्दी`, `घृत -> घी`, `अश्रु -> आँसू`, `दधि -> दही`।',
                    hi: '`गोधूम -> गेहूँ`, `हरिद्रा -> हल्दी`, `घृत -> घी`, `अश्रु -> आँसू`, `दधि -> दही`।'
                }
            },
            {
                id: 'ett-hin-fc-4',
                question: {
                    en: 'What is the difference between `जलज`, `जलद`, and `जलधि` in Hindi vocabulary?',
                    pa: 'ਹਿੰਦੀ ਸ਼ਬਦਾਵਲੀ ਵਿੱਚ `जलज`, `जलद` ਅਤੇ `जलधि` ਵਿੱਚ ਕੀ ਅੰਤਰ ਹੈ?',
                    hi: 'हिंदी शब्दावली में `जलज`, `जलद` और `जलधि` में क्या अंतर है?'
                },
                answer: {
                    en: '`जलज` (born in water) = कमल (Lotus); `जलद` (giver of water) = बादल (Cloud); `जलधि` (reservoir of water) = समुद्र (Ocean).',
                    pa: '`जलज` = ਕਮਲ (Lotus); `जलद` = ਬੱਦਲ (Cloud); `जलधि` = ਸਮੁੰਦਰ (Ocean)।',
                    hi: '`जलज` = कमल; `जलद` = बादल; `जलधि` = समुद्र।'
                }
            },
            {
                id: 'ett-hin-fc-5',
                question: {
                    en: 'Write the standard correct Hindi spellings (शुद्ध वर्तनी) for: (a) कवियित्री, (b) उज्वल, (c) आर्शीवाद, (d) सन्यासी.',
                    pa: 'ਹੇਠ ਲਿਖੇ ਸ਼ਬਦਾਂ ਦੀ ਸ਼ੁੱਧ ਹਿੰਦੀ ਵਰਣ-ਜੋੜ (शुद्ध वर्तनी) ਲਿਖੋ: (a) कवियित्री, (b) उज्वल, (c) आर्शीवाद, (d) सन्यासी।',
                    hi: 'निम्नलिखित की शुद्ध वर्तनी लिखिए: (a) कवियित्री, (b) उज्वल, (c) आर्शीवाद, (d) सन्यासी।'
                },
                answer: {
                    en: '(a) कवयित्री, (b) उज्ज्वल (two half ज्), (c) आशीर्वाद, (d) संन्यासी.',
                    pa: '(a) कवयित्री, (b) उज्ज्वल, (c) आशीर्वाद, (d) संन्यासी।',
                    hi: '(a) कवयित्री, (b) उज्ज्वल, (c) आशीर्वाद, (d) संन्यासी।'
                }
            },
            {
                id: 'ett-hin-fc-6',
                question: {
                    en: 'Give the three distinct meanings of the Hindi polysemous word `कनक` (अनेकार्थी शब्द) and translate `"सत्य की सदैव विजय होती है"` into Punjabi.',
                    pa: 'ਹਿੰਦੀ ਦੇ ਅਨੇਕਾਰਥੀ ਸ਼ਬਦ `कनक` ਦੇ ਤਿੰਨ ਅਰਥ ਦੱਸੋ ਅਤੇ `"सत्य की सदैव विजय होती है"` ਦਾ ਪੰਜਾਬੀ ਅਨੁਵਾਦ ਕਰੋ।',
                    hi: 'अनेकार्थी शब्द `कनक` के तीन अर्थ बताइए और `"सत्य की सदैव विजय होती है"` का पंजाबी में अनुवाद कीजिए।'
                },
                answer: {
                    en: '`कनक` = 1. सोना (Gold), 2. धतूरा (Thorn-apple), 3. गेहूँ (Wheat). Translation: "ਸੱਚ ਦੀ ਹਮੇਸ਼ਾ ਜਿੱਤ ਹੁੰਦੀ ਹੈ।"',
                    pa: '`कनक` = 1. ਸੋਨਾ, 2. ਧਤੂਰਾ, 3. ਕਣਕ। ਪੰਜਾਬੀ ਅਨੁਵਾਦ: "ਸੱਚ ਦੀ ਹਮੇਸ਼ਾ ਜਿੱਤ ਹੁੰਦੀ ਹੈ।"',
                    hi: '`कनक` = 1. सोना, 2. धतूरा, 3. गेहूँ। पंजाबी अनुवाद: "ਸੱਚ ਦੀ ਹਮੇਸ਼ਾ ਜਿੱਤ ਹੁੰਦੀ ਹੈ।"'
                }
            }
        ]
    }
];
