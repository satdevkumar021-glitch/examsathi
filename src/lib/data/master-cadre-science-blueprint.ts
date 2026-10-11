export interface ScienceAdvertisementPattern {
    exam: string;
    subject: string;
    year: number;
    advertisementRef: string;
    mode: 'CBT' | 'OMR';
    questions: number;
    marks: number;
    minutes: number;
    negative_marking: number;
    branch_weights: string;
    subjectCombinationRule: string;
    qualifyingPaperA: string;
    source: string;
    verified: boolean;
}

export interface ScienceTrustLevelRow {
    part: string;
    source: string;
    trustGuidance: string;
    statusBadge: 'Verify on ERB & PDF' | 'Draft (B→I→H→G/P)' | 'Method Only (No Fake %)' | 'Active Science Pipeline';
}

export interface ScienceRedFlagItem {
    id: string;
    number: number;
    title: { en: string; pa: string; hi: string };
    warningDetail: { en: string; pa: string; hi: string };
    resolutionInApp: { en: string; pa: string; hi: string };
    severity: 'critical' | 'high' | 'medium';
}

export interface ScienceHeadingProxyRow {
    branch: string;
    branchPa: string;
    branchHi: string;
    headingCount: number;
    totalHeadings: number;
    proxySharePercent: number;
    subBranchBreakdown: string;
    cautionNote: string;
}

export interface ScienceConstantRow {
    symbol: string;
    name: { en: string; pa: string; hi: string };
    value: string;
    siUnit: string;
    branch: 'Physics' | 'Chemistry' | 'Biology';
}

export interface ScienceFormulaReactionCard {
    id: string;
    branch: 'Physics' | 'Physical Chemistry' | 'Inorganic Chemistry' | 'Organic Chemistry' | 'Biology';
    levelTag: 'B/I' | 'H' | 'G' | 'P';
    front: { en: string; pa: string; hi: string };
    back: { en: string; pa: string; hi: string };
    examTip: { en: string; pa: string; hi: string };
}

export interface ScienceBlueprintDomain {
    domainId: 'foundation-lab' | 'physics' | 'physical-chemistry' | 'inorganic-chemistry' | 'organic-chemistry' | 'botany' | 'zoology' | 'punjabi-paper-a';
    subjectRouteId: 'science' | 'punjabi-paper-a-subject';
    domainTitle: { en: string; pa: string; hi: string };
    officialHeadingCount: number;
    officialHeadings: string[];
    topics: Array<{
        topicId: string;
        officialHeadingsCovered: string;
        levelBadges: Array<'B' | 'I' | 'H' | 'G' | 'P'>;
        levelProgression: {
            foundationBI: string;
            higherSecondaryH: string;
            graduationG: string;
            postgradPFlag?: string;
        };
    }>;
}

export const MASTER_CADRE_SCIENCE_TRUST_LEVELS: ScienceTrustLevelRow[] = [
    {
        part: 'Section 1: Exam Pattern (Per-Advertisement Store)',
        source: 'Summary of Education Recruitment Board (ERB) Punjab notification by CareerPower (updated June 2026) + ERB 2022/2020 official archives',
        trustGuidance: 'Verify against the official ERB notification and the Science syllabus PDF on educationrecruitmentboard.com before publishing.',
        statusBadge: 'Verify on ERB & PDF'
    },
    {
        part: 'Section 2: Syllabus Headings (64 Broad Headings)',
        source: 'Physical Chemistry (13), Inorganic Chemistry (12), Organic Chemistry (13), Zoology (8), Botany (8), Physics (10)',
        trustGuidance: 'Contains postgraduate-looking headings (Quantum Mechanics, NMR/MS, Organometallics, Condensed Matter) that also appear in PSSSB Advt. 04/2023. Verify against official ERB Science PDF.',
        statusBadge: 'Verify on ERB & PDF'
    },
    {
        part: 'Section 3: Expanded Topic Tree (B → I → H → G → P)',
        source: 'Structured draft from Class 6–10 PSEB/NCERT (B/I), Class 11–12 (H), B.Sc. Graduation (G), and flagged M.Sc. (P) coverage',
        trustGuidance: 'Draft validated against NCERT/PSEB & B.Sc. curriculum. Prioritize B → I → H → G before spending months on P-only topics.',
        statusBadge: 'Draft (B→I→H→G/P)'
    },
    {
        part: 'Section 4: Past-Paper Analysis & Weightage Proxy',
        source: 'Methodology only — zero invented PYQs or fabricated historical branch percentages',
        trustGuidance: 'Never let an AI recall past questions from memory. Heading count (Chem 59%, Bio 25%, Phy 16%) is shown strictly as a content-volume proxy, NOT exam weightage.',
        statusBadge: 'Method Only (No Fake %)'
    },
    {
        part: 'Sections 5–8: Numerical Verifier, Formula/Reaction Cards & Pipeline',
        source: 'ExamSathi Science Curriculum Engine (KaTeX equations, code-verified numericals, trilingual B/I/H/G/P MCQs)',
        trustGuidance: 'Every numerical MCQ is verified by executable calculation; all 18 Science topics include trilingual lessons, flip cards, and 10+ Topic Mini Mock MCQs.',
        statusBadge: 'Active Science Pipeline'
    }
];

export const MASTER_CADRE_SCIENCE_RED_FLAGS: ScienceRedFlagItem[] = [
    {
        id: 'rf-msc-depth',
        number: 1,
        severity: 'critical',
        title: {
            en: 'Red Flag 1: Listed Headings Look Like M.Sc. / CSIR-NET Depth (PSSSB Advt. 04/2023 Copy Warning)',
            pa: 'ਰੈੱਡ ਫਲੈਗ 1: ਸਿਲੇਬਸ ਸਿਰਲੇਖ M.Sc. ਪੱਧਰ ਦੇ ਲੱਗਦੇ ਹਨ (PSSSB Advt. 04/2023 ਕਾਪੀ ਚੇਤਾਵਨੀ)',
            hi: 'रेड फ्लैग 1: सूचीबद्ध शीर्षक M.Sc. स्तर के दिखते हैं (PSSSB Advt. 04/2023 कॉपी चेतावनी)'
        },
        warningDetail: {
            en: 'Headings like Quantum Mechanics, Electromagnetic Theory, IR/UV/MS/NMR Spectroscopy, Organometallic Compounds, and Condensed Matter Physics are postgraduate (P) topics. The exact same heading style appears in an unrelated PSSSB syllabus (Deputy Ranger & Lab Assistant, Advt. 04/2023), while the notification describes the level as "graduation level and some secondary level concepts".',
            pa: 'ਕੁਆਂਟਮ ਮਕੈਨਿਕਸ, ਇਲੈਕਟ੍ਰੋਮੈਗਨੈਟਿਕ ਥਿਊਰੀ, IR/UV/MS/NMR ਸਪੈਕਟ੍ਰੋਸਕੋਪੀ, ਔਰਗੈਨੋਮੈਟਾਲਿਕ ਯੌਗਿਕ ਅਤੇ ਕੰਡੈਂਸਡ ਮੈਟਰ ਫਿਜ਼ਿਕਸ M.Sc. ਪੱਧਰ ਦੇ ਵਿਸ਼ੇ ਹਨ। ਇਹੀ ਸੂਚੀ PSSSB Advt. 04/2023 ਵਿੱਚ ਵੀ ਮਿਲਦੀ ਹੈ, ਜਦਕਿ ਇਮਤਿਹਾਨ ਦਾ ਪੱਧਰ ਗ੍ਰੈਜੂਏਸ਼ਨ ਅਤੇ ਸੈਕੰਡਰੀ ਪੱਧਰ ਦੱਸਿਆ ਗਿਆ ਹੈ।',
            hi: 'क्वांटम यांत्रिकी, विद्युतचुंबकीय सिद्धांत, IR/UV/MS/NMR स्पेक्ट्रोस्कोपी, ऑर्गेनोमेटेलिक यौगिक और कंडेंस्ड मैटर फिजिक्स स्नातकोत्तर (M.Sc.) विषय हैं। यही सूची PSSSB Advt. 04/2023 में भी दिखती है, जबकि अधिसूचना में स्तर "स्नातक एवं माध्यमिक अवधारणाएं" बताया गया है।'
        },
        resolutionInApp: {
            en: 'Every lesson builds strictly upward: Level B/I (Class 6–10) → Level H (Class 11–12) → Level G (B.Sc. Graduation) → Level P (Flagged Postgraduate Essentials). Students master the high-yield Class 6–12 & B.Sc. core first before touching P-tagged extensions.',
            pa: 'ਹਰ ਪਾਠ B/I (ਜਮਾਤ 6–10) → H (ਜਮਾਤ 11–12) → G (B.Sc. ਗ੍ਰੈਜੂਏਸ਼ਨ) → P (ਪੋਸਟ-ਗ੍ਰੈਜੂਏਟ ਫਲੈਗਡ) ਕ੍ਰਮ ਵਿੱਚ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ ਤਾਂ ਜੋ ਵਿਦਿਆਰਥੀ ਪਹਿਲਾਂ ਮੁੱਖ ਅਧਾਰ ਪੱਕਾ ਕਰਨ।',
            hi: 'प्रत्येक पाठ B/I (कक्षा 6–10) → H (कक्षा 11–12) → G (B.Sc. स्नातक) → P (स्नातकोत्तर चिह्नित) क्रम में निर्मित है ताकि छात्र पहले मुख्य आधार मजबूत करें।'
        }
    },
    {
        id: 'rf-branch-marks',
        number: 2,
        severity: 'critical',
        title: {
            en: 'Red Flag 2: Marks per Branch Are Not Given in the Heading Summary',
            pa: 'ਰੈੱਡ ਫਲੈਗ 2: ਹਰੇਕ ਸ਼ਾਖਾ (Physics/Chemistry/Biology) ਦੇ ਅੰਕ ਸਪੱਸ਼ਟ ਨਹੀਂ ਹਨ',
            hi: 'रेड फ्लैग 2: प्रत्येक शाखा (भौतिकी/रसायन/जीव विज्ञान) का अंक विभाजन नहीं दिया गया है'
        },
        warningDetail: {
            en: 'Physics, Chemistry (Physical, Inorganic, Organic), Zoology, and Botany are listed, but the coaching summary does not state how the 150 questions split among them.',
            pa: 'ਫਿਜ਼ਿਕਸ, ਕੈਮਿਸਟਰੀ (ਫਿਜ਼ੀਕਲ, ਇਨਔਰਗੈਨਿਕ, ਔਰਗੈਨਿਕ), ਜ਼ੂਆਲੋਜੀ ਅਤੇ ਬੌਟਨੀ ਦਿੱਤੇ ਗਏ ਹਨ, ਪਰ 150 ਪ੍ਰਸ਼ਨਾਂ ਦੀ ਵੰਡ ਨਹੀਂ ਦੱਸੀ ਗਈ।',
            hi: 'भौतिकी, रसायन (भौतिक, अकार्बनिक, कार्बनिक), जंतु विज्ञान और वनस्पति विज्ञान सूचीबद्ध हैं, किंतु 150 प्रश्नों का शाखा-वार विभाजन नहीं दिया गया है।'
        },
        resolutionInApp: {
            en: 'We display the 64-heading count breakdown (Chemistry 38, Biology 16, Physics 10) strictly labelled as a "Content Volume Proxy — NOT Exam Weightage", alongside the archived ERB 2022/2020 rule (any 3 subjects out of Physics, Chemistry, Botany, Zoology, Mathematics × 50 marks each = 150 marks).',
            pa: 'ਅਸੀਂ 64-ਸਿਰਲੇਖਾਂ ਦੇ ਅਨੁਪਾਤ (ਕੈਮਿਸਟਰੀ 38, ਬਾਇਓਲੋਜੀ 16, ਫਿਜ਼ਿਕਸ 10) ਨੂੰ ਸਿਰਫ਼ "ਸਮੱਗਰੀ ਅਨੁਪਾਤ (ਨਾ ਕਿ ਪੇਪਰ ਵੇਟੇਜ)" ਵਜੋਂ ਅਤੇ ERB 2022 ਦੇ ਨਿਯਮ (5 ਵਿੱਚੋਂ ਕੋਈ 3 ਵਿਸ਼ੇ × 50 ਅੰਕ = 150 ਅੰਕ) ਨਾਲ ਸਪੱਸ਼ਟ ਦਿਖਾਉਂਦੇ ਹਾਂ।',
            hi: 'हम 64-शीर्षक अनुपात (रसायन 38, जीव विज्ञान 16, भौतिकी 10) को स्पष्ट रूप से "सामग्री विस्तार प्रॉक्सी (परीक्षा अंकभार नहीं)" के रूप में तथा ERB 2022 नियम (5 में से कोई 3 विषय × 50 अंक = 150 अंक) के साथ दर्शाते हैं।'
        }
    },
    {
        id: 'rf-combined-vs-choice',
        number: 3,
        severity: 'high',
        title: {
            en: 'Red Flag 3: Combined Science Paper vs Medical/Non-Medical Subject Combination',
            pa: 'ਰੈੱਡ ਫਲੈਗ 3: ਸਾਂਝਾ ਸਾਇੰਸ ਪੇਪਰ ਬਨਾਮ ਮੈਡੀਕਲ/ਨਾਨ-ਮੈਡੀਕਲ ਵਿਸ਼ਾ ਚੋਣ',
            hi: 'रेड फ्लैग 3: संयुक्त विज्ञान प्रश्नपत्र बनाम मेडिकल/नॉन-मेडिकल विषय संयोजन'
        },
        warningDetail: {
            en: 'Coaching summaries do not clarify how Biology is handled for Physics/Chemistry/Maths (Non-Medical) background candidates vs Botany/Zoology/Chemistry (Medical) candidates.',
            pa: 'ਕੋਚਿੰਗ ਸੰਖੇਪ ਇਹ ਸਪੱਸ਼ਟ ਨਹੀਂ ਕਰਦੇ ਕਿ ਨਾਨ-ਮੈਡੀਕਲ (PCM) ਅਤੇ ਮੈਡੀਕਲ (CBZ) ਉਮੀਦਵਾਰਾਂ ਲਈ ਵਿਸ਼ਿਆਂ ਦੀ ਚੋਣ ਕਿਵੇਂ ਹੁੰਦੀ ਹੈ।',
            hi: 'कोचिंग सारांश यह स्पष्ट नहीं करते कि नॉन-मेडिकल (PCM) और मेडिकल (CBZ) पृष्ठभूमि के अभ्यर्थियों के लिए जीव विज्ञान/गणित का चयन कैसे होता है।'
        },
        resolutionInApp: {
            en: 'ExamSathi stores the combination rule per advertisement and lets candidates filter Topic Mini Mocks by individual branch (Physics, Physical/Inorganic/Organic Chemistry, Botany, Zoology, Foundation/Lab) so both Medical (CBZ) and Non-Medical (PCM) candidates can drill their exact combination.',
            pa: 'ExamSathi ਵਿੱਚ ਹਰੇਕ ਸ਼ਾਖਾ (Physics, Chemistry, Botany, Zoology) ਦੇ ਵੱਖਰੇ ਮਿੰਨੀ-ਮੌਕ ਅਤੇ ਪਾਠ ਹਨ ਤਾਂ ਜੋ ਮੈਡੀਕਲ ਤੇ ਨਾਨ-ਮੈਡੀਕਲ ਦੋਵੇਂ ਉਮੀਦਵਾਰ ਆਪਣੀ ਲੋੜ ਅਨੁਸਾਰ ਤਿਆਰੀ ਕਰ ਸਕਣ।',
            hi: 'ExamSathi में प्रत्येक शाखा (भौतिकी, रसायन, वनस्पति, जंतु विज्ञान) के पृथक मिनी-मॉक और पाठ उपलब्ध हैं ताकि मेडिकल एवं नॉन-मेडिकल दोनों अभ्यर्थी अपने संयोजन के अनुसार अभ्यास कर सकें।'
        }
    },
    {
        id: 'rf-pedagogy-lab',
        number: 4,
        severity: 'medium',
        title: {
            en: 'Red Flag 4: Science Pedagogy, Lab Safety & Class 6–10 PSEB Teaching Base',
            pa: 'ਰੈੱਡ ਫਲੈਗ 4: ਸਾਇੰਸ ਪੈਡਾਗੋਜੀ, ਲੈਬ ਸੁਰੱਖਿਆ ਅਤੇ ਜਮਾਤ 6–10 PSEB ਅਧਾਰ',
            hi: 'रेड फ्लैग 4: विज्ञान शिक्षाशास्त्र, प्रयोगशाला सुरक्षा एवं कक्षा 6–10 PSEB आधार'
        },
        warningDetail: {
            en: 'Pedagogy, laboratory apparatus, qualitative tests, and Class 6–10 school science facts are not explicitly separated in the 64 headings, yet Master Cadre recruits teachers for Classes 6–10.',
            pa: '64 ਸਿਰਲੇਖਾਂ ਵਿੱਚ ਲੈਬ ਸੁਰੱਖਿਆ, ਉਪਕਰਣ ਅਤੇ ਜਮਾਤ 6–10 ਦੇ ਸਿੱਧੇ ਤੱਥ ਵੱਖਰੇ ਨਹੀਂ ਲਿਖੇ ਗਏ, ਜਦਕਿ ਭਰਤੀ ਜਮਾਤ 6–10 ਦੇ ਅਧਿਆਪਕਾਂ ਲਈ ਹੈ।',
            hi: '64 शीर्षकों में प्रयोगशाला सुरक्षा, उपकरण और कक्षा 6–10 के तथ्य अलग से नहीं लिखे हैं, जबकि भर्ती कक्षा 6–10 के शिक्षकों के लिए है।'
        },
        resolutionInApp: {
            en: 'We include a dedicated Module 0 (`sci-foundation-class6-10-lab`) covering Class 6–10 PSEB/NCERT core concepts, SI units, fundamental constants, volumetric/qualitative lab safety, and Punjab/Indian scientists.',
            pa: 'ਅਸੀਂ ਮੋਡਿਊਲ 0 (`sci-foundation-class6-10-lab`) ਵਿੱਚ ਜਮਾਤ 6–10 ਵਿਗਿਆਨ, SI ਇਕਾਈਆਂ, ਲੈਬ ਸੁਰੱਖਿਆ, ਫਲੇਮ ਟੈਸਟ ਅਤੇ ਪੰਜਾਬ/ਭਾਰਤੀ ਵਿਗਿਆਨੀਆਂ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸ਼ਾਮਲ ਕੀਤਾ ਹੈ।',
            hi: 'हमने मॉड्यूल 0 (`sci-foundation-class6-10-lab`) में कक्षा 6–10 विज्ञान, SI मात्रक, प्रयोगशाला सुरक्षा, फ्लेम टेस्ट और पंजाब/भारतीय वैज्ञानिकों को पूर्ण रूप से शामिल किया है।'
        }
    },
    {
        id: 'rf-per-ad-pattern',
        number: 5,
        severity: 'medium',
        title: {
            en: 'Red Flag 5: Exam Patterns & Negative Marking Rules Can Change Across Advertisements',
            pa: 'ਰੈੱਡ ਫਲੈਗ 5: ਵੱਖ-ਵੱਖ ਭਰਤੀ ਇਸ਼ਤਿਹਾਰਾਂ ਵਿੱਚ ਇਮਤਿਹਾਨ ਪੈਟਰਨ ਬਦਲ ਸਕਦਾ ਹੈ',
            hi: 'रेड फ्लैग 5: विभिन्न भर्ती विज्ञापनों के बीच परीक्षा पैटर्न बदल सकता है'
        },
        warningDetail: {
            en: 'Never hard-code a single exam pattern across all years. Store the pattern per advertisement with verification flags.',
            pa: 'ਸਾਰੇ ਸਾਲਾਂ ਲਈ ਇੱਕੋ ਪੈਟਰਨ ਹਾਰਡ-ਕੋਡ ਨਾ ਕਰੋ; ਹਰੇਕ ਇਸ਼ਤਿਹਾਰ (Advertisement) ਅਨੁਸਾਰ ਪੈਟਰਨ ਸਟੋਰ ਕਰੋ।',
            hi: 'सभी वर्षों के लिए एक ही पैटर्न हार्ड-कोड न करें; प्रत्येक विज्ञापन (Advertisement) के अनुसार पैटर्न संग्रहीत करें।'
        },
        resolutionInApp: {
            en: 'Stored per advertisement in `MASTER_CADRE_SCIENCE_PATTERNS_BY_AD` with explicit JSON schema (`negative_marking: 0`, `branch_weights`, `verified` flag). Because negative marking is 0, our test strategy coach instructs candidates to attempt all 150 MCQs using option elimination.',
            pa: '`MASTER_CADRE_SCIENCE_PATTERNS_BY_AD` ਵਿੱਚ ਹਰੇਕ ਭਰਤੀ ਦਾ ਰਿਕਾਰਡ ਮੌਜੂਦ ਹੈ। 0 ਨੈਗੇਟਿਵ ਮਾਰਕਿੰਗ ਕਾਰਨ ਸਾਰੇ 150 ਪ੍ਰਸ਼ਨ ਹੱਲ ਕਰਨ ਦੀ ਰਣਨੀਤੀ ਦਿੱਤੀ ਗਈ ਹੈ।',
            hi: '`MASTER_CADRE_SCIENCE_PATTERNS_BY_AD` में प्रत्येक भर्ती का रिकॉर्ड संग्रहीत है। शून्य नकारात्मक अंकन के कारण सभी 150 प्रश्न हल करने की रणनीति दी गई है।'
        }
    }
];

export const MASTER_CADRE_SCIENCE_HEADING_PROXY: ScienceHeadingProxyRow[] = [
    {
        branch: 'Chemistry (Physical + Inorganic + Organic)',
        branchPa: 'ਰਸਾਇਣ ਵਿਗਿਆਨ (Physical + Inorganic + Organic)',
        branchHi: 'रसायन विज्ञान (भौतिक + अकार्बनिक + कार्बनिक)',
        headingCount: 38,
        totalHeadings: 64,
        proxySharePercent: 59.4,
        subBranchBreakdown: 'Physical Chemistry: 13 headings • Inorganic Chemistry: 12 headings • Organic Chemistry: 13 headings',
        cautionNote: 'PROXY ONLY (38/64 headings) — Shows breadth of chemistry syllabus text, NOT the share of questions in the 150-MCQ exam.'
    },
    {
        branch: 'Biology (Zoology + Botany)',
        branchPa: 'ਜੀਵ ਵਿਗਿਆਨ (Zoology + Botany)',
        branchHi: 'जीव विज्ञान (जंतु विज्ञान + वनस्पति विज्ञान)',
        headingCount: 16,
        totalHeadings: 64,
        proxySharePercent: 25.0,
        subBranchBreakdown: 'Zoology: 8 headings • Botany: 8 headings (identical broad macro-headings applied to animals and plants)',
        cautionNote: 'PROXY ONLY (16/64 headings) — Biology headings are compact macro-titles covering vast NCERT Class 11–12 & B.Sc. chapters.'
    },
    {
        branch: 'Physics',
        branchPa: 'ਭੌਤਿਕ ਵਿਗਿਆਨ (Physics)',
        branchHi: 'भौतिक विज्ञान (Physics)',
        headingCount: 10,
        totalHeadings: 64,
        proxySharePercent: 15.6,
        subBranchBreakdown: '10 broad headings (Mechanics, EM Theory, Quantum, Thermo/Stat, Electronics, Experimental, Atomic/Molecular, Condensed Matter, Nuclear/Particle, Math Methods)',
        cautionNote: 'PROXY ONLY (10/64 headings) — In ERB 4161/3704, Physics carries a full 50-mark equal section when chosen as one of the 3 subjects!'
    }
];

export const MASTER_CADRE_SCIENCE_PATTERNS_BY_AD: ScienceAdvertisementPattern[] = [
    {
        exam: 'Punjab Master Cadre',
        subject: 'Science',
        year: 2026,
        advertisementRef: 'Reported 2026 Cycle (CareerPower June 2026 Summary — Verify Official ERB PDF)',
        mode: 'CBT',
        questions: 150,
        marks: 150,
        minutes: 150,
        negative_marking: 0,
        branch_weights: 'unknown - derive from past papers or official subject-choice notification (64 syllabus headings: Chem 38, Bio 16, Phy 10)',
        subjectCombinationRule: 'Verify in official notification whether combined 150-MCQ Science paper or 3 subjects × 50 MCQs each out of Physics, Chemistry, Botany, Zoology, Mathematics.',
        qualifyingPaperA: 'Compulsory Punjabi Paper-A (50 MCQs, 50 Marks, 50% = 25 marks minimum qualifying, no negative marking)',
        source: 'https://educationrecruitmentboard.com/',
        verified: false
    },
    {
        exam: 'Punjab Master Cadre',
        subject: 'Science (4161 Recruitment Cycle)',
        year: 2022,
        advertisementRef: 'ERB Punjab Master Cadre 4161 (Syllabus PDF 04-05-2022)',
        mode: 'OMR',
        questions: 150,
        marks: 150,
        minutes: 150,
        negative_marking: 0,
        branch_weights: 'Equal 50 marks per chosen subject (3 subjects × 50 questions = 150 questions)',
        subjectCombinationRule: 'Candidates opt for any 3 subjects out of 5 (Physics, Chemistry, Botany, Zoology, Mathematics) as per B.Sc. combination × 50 marks each = 150 marks.',
        qualifyingPaperA: 'Punjabi at Matriculation level mandatory; separate Paper-A added in subsequent state recruitment rules',
        source: 'https://erd.punjab.gov.in/master2022/Docs/ScienceSyllabus04_05_2022.pdf',
        verified: true
    },
    {
        exam: 'Punjab Master Cadre',
        subject: 'Science (3704 Recruitment Cycle)',
        year: 2020,
        advertisementRef: 'ERB Punjab Master Cadre 3704 (Exam held Dec 2020 / Jan 2021)',
        mode: 'OMR',
        questions: 150,
        marks: 150,
        minutes: 150,
        negative_marking: 0,
        branch_weights: 'Equal 50 marks per chosen subject (3 subjects × 50 questions = 150 questions)',
        subjectCombinationRule: 'Any 3 subjects out of Physics, Chemistry, Botany, Zoology, Mathematics (50 marks each = 150 marks).',
        qualifyingPaperA: 'Punjabi at Matriculation level mandatory',
        source: 'https://educationrecruitmentboard.com/',
        verified: true
    },
    {
        exam: 'Punjab Master Cadre',
        subject: 'Science (3582 & 6060 Cycles)',
        year: 2017,
        advertisementRef: 'Directorate of Education Recruitment Board Punjab (2016–2017)',
        mode: 'OMR',
        questions: 150,
        marks: 150,
        minutes: 150,
        negative_marking: 0,
        branch_weights: '3 subjects × 50 questions each = 150 questions',
        subjectCombinationRule: '3 subjects out of Physics, Chemistry, Botany, Zoology, Mathematics.',
        qualifyingPaperA: 'Punjabi at Matriculation level mandatory',
        source: 'https://educationrecruitmentboard.com/',
        verified: true
    }
];

export const MASTER_CADRE_SCIENCE_UNITS_AND_CONSTANTS: ScienceConstantRow[] = [
    {
        symbol: 'c',
        name: { en: 'Speed of light in vacuum', pa: 'ਖਲਾਅ ਵਿੱਚ ਪ੍ਰਕਾਸ਼ ਦੀ ਚਾਲ', hi: 'निर्वात में प्रकाश की चाल' },
        value: '2.998 × 10⁸ (≈ 3 × 10⁸)',
        siUnit: 'm s⁻¹',
        branch: 'Physics'
    },
    {
        symbol: 'h',
        name: { en: 'Planck’s constant', pa: 'ਪਲਾਂਕ ਸਥਿਰਾਂਕ', hi: 'प्लांक नियतांक' },
        value: '6.626 × 10⁻³⁴',
        siUnit: 'J s',
        branch: 'Physics'
    },
    {
        symbol: 'e',
        name: { en: 'Elementary charge', pa: 'ਮੁੱਢਲਾ ਚਾਰਜ', hi: 'मूल आवेश' },
        value: '1.602 × 10⁻¹⁹',
        siUnit: 'C (Coulomb)',
        branch: 'Physics'
    },
    {
        symbol: 'G',
        name: { en: 'Universal gravitational constant', pa: 'ਸਰਵਵਿਆਪੀ ਗੁਰੂਤਾਕਰਸ਼ਣ ਸਥਿਰਾਂਕ', hi: 'सार्वत्रिक गुरुत्वाकर्षण नियतांक' },
        value: '6.674 × 10⁻¹¹',
        siUnit: 'N m² kg⁻²',
        branch: 'Physics'
    },
    {
        symbol: 'N_A',
        name: { en: 'Avogadro constant', pa: 'ਐਵੋਗਾਡਰੋ ਸਥਿਰਾਂਕ', hi: 'आवोगाद्रो नियतांक' },
        value: '6.022 × 10²³',
        siUnit: 'mol⁻¹',
        branch: 'Chemistry'
    },
    {
        symbol: 'R',
        name: { en: 'Universal gas constant', pa: 'ਸਰਵਵਿਆਪੀ ਗੈਸ ਸਥਿਰਾਂਕ', hi: 'सार्वत्रिक गैस नियतांक' },
        value: '8.314 J mol⁻¹ K⁻¹  |  0.0821 L atm mol⁻¹ K⁻¹',
        siUnit: 'J mol⁻¹ K⁻¹',
        branch: 'Chemistry'
    },
    {
        symbol: 'F',
        name: { en: 'Faraday constant (N_A × e)', pa: 'ਫੈਰਾਡੇ ਸਥਿਰਾਂਕ', hi: 'फैराडे नियतांक' },
        value: '96,485 (≈ 96,500)',
        siUnit: 'C mol⁻¹',
        branch: 'Chemistry'
    },
    {
        symbol: 'k_B',
        name: { en: 'Boltzmann constant (R / N_A)', pa: 'ਬੋਲਟਜ਼ਮੈਨ ਸਥਿਰਾਂਕ', hi: 'बोल्ट्ज़मान नियतांक' },
        value: '1.3806 × 10⁻²³',
        siUnit: 'J K⁻¹',
        branch: 'Physics'
    },
    {
        symbol: 'R_H',
        name: { en: 'Rydberg constant for Hydrogen', pa: 'ਰਿਡਬਰਗ ਸਥਿਰਾਂਕ', hi: 'रिडबर्ग नियतांक' },
        value: '1.097 × 10⁷',
        siUnit: 'm⁻¹',
        branch: 'Chemistry'
    },
    {
        symbol: 'Ψ_w (Pure H₂O)',
        name: { en: 'Water potential of pure water at STP', pa: 'ਸ਼ੁੱਧ ਪਾਣੀ ਦਾ ਵਾਟਰ ਪੋਟੈਂਸ਼ੀਅਲ', hi: 'शुद्ध जल का जल विभव' },
        value: '0 (Maximum)',
        siUnit: 'MPa (or bar)',
        branch: 'Biology'
    }
];

export const MASTER_CADRE_SCIENCE_FORMULA_CARDS: ScienceFormulaReactionCard[] = [
    {
        id: 'card-sci-1',
        branch: 'Physics',
        levelTag: 'H',
        front: {
            en: 'Einstein’s Photoelectric Equation & Stopping Potential (V₀)',
            pa: 'ਆਈਨਸਟਾਈਨ ਦੀ ਫੋਟੋਇਲੈਕਟ੍ਰਿਕ ਸਮੀਕਰਨ ਅਤੇ ਸਟਾਪਿੰਗ ਪੋਟੈਂਸ਼ੀਅਲ (V₀)',
            hi: 'आइंस्टीन का प्रकाश-विद्युत समीकरण एवं निरोधी विभव (V₀)'
        },
        back: {
            en: 'K_max = eV₀ = hν − φ₀ = hc(1/λ − 1/λ₀). Above threshold ν₀, K_max depends linearly on frequency ν and is independent of intensity.',
            pa: 'K_max = eV₀ = hν − φ₀। ਥ੍ਰੈਸ਼ਹੋਲਡ ਆਵਿਰਤੀ (ν₀) ਤੋਂ ਉੱਪਰ, K_max ਸਿਰਫ਼ ਆਵਿਰਤੀ (ν) ਉੱਤੇ ਨਿਰਭਰ ਕਰਦੀ ਹੈ, ਤੀਬਰਤਾ ਉੱਤੇ ਨਹੀਂ।',
            hi: 'K_max = eV₀ = hν − φ₀। देहली आवृत्ति (ν₀) से ऊपर, अधिकतम गतिज ऊर्जा केवल आवृत्ति (ν) पर निर्भर करती है, तीव्रता पर नहीं।'
        },
        examTip: {
            en: 'Doubling intensity doubles photocurrent, NOT stopping potential V₀.',
            pa: 'ਤੀਬਰਤਾ ਦੁੱਗਣੀ ਕਰਨ ਨਾਲ ਫੋਟੋ-ਕਰੰਟ ਦੁੱਗਣਾ ਹੁੰਦਾ ਹੈ, V₀ ਨਹੀਂ ਬਦਲਦਾ।',
            hi: 'तीव्रता दोगुनी करने पर प्रकाश-धारा दोगुनी होती है, निरोधी विभव V₀ नहीं बदलता।'
        }
    },
    {
        id: 'card-sci-2',
        branch: 'Physical Chemistry',
        levelTag: 'H',
        front: {
            en: 'Nernst Equation at 298 K (25°C) & Gibbs Free Energy Relation',
            pa: '298 K ਉੱਤੇ ਨਰਨਸਟ ਸਮੀਕਰਨ (Nernst Equation) ਅਤੇ ਗਿਬਸ ਊਰਜਾ',
            hi: '298 K पर नर्नस्ट समीकरण (Nernst Equation) एवं गिब्स मुक्त ऊर्जा'
        },
        back: {
            en: 'E_cell = E°_cell − (0.0591 / n) log₁₀ Q, and ΔG° = −nFE°_cell = −2.303 RT log₁₀ K_eq.',
            pa: 'E_cell = E°_cell − (0.0591 / n) log₁₀ Q, ਅਤੇ ΔG° = −nFE°_cell। ਸੰਤੁਲਨ ਉੱਤੇ E_cell = 0 ਪਰ E°_cell ≠ 0।',
            hi: 'E_cell = E°_cell − (0.0591 / n) log₁₀ Q, तथा ΔG° = −nFE°_cell। साम्यावस्था पर E_cell = 0 होता है, किंतु E°_cell ≠ 0।'
        },
        examTip: {
            en: 'At chemical equilibrium, Q = K_eq and E_cell = 0, so E°_cell = (0.0591/n) log K_eq.',
            pa: 'ਸੰਤੁਲਨ ਵੇਲੇ Q = K_eq ਅਤੇ E_cell = 0 ਹੁੰਦਾ ਹੈ।',
            hi: 'साम्यावस्था पर Q = K_eq तथा E_cell = 0 होता है।'
        }
    },
    {
        id: 'card-sci-3',
        branch: 'Inorganic Chemistry',
        levelTag: 'G',
        front: {
            en: 'Crystal Field Stabilization Energy (CFSE) & Spin-Only Magnetic Moment',
            pa: 'ਕ੍ਰਿਸਟਲ ਫੀਲਡ ਸਟੇਬਿਲਾਈਜ਼ੇਸ਼ਨ ਊਰਜਾ (CFSE) ਅਤੇ ਚੁੰਬਕੀ ਆਘੂਰਨ (μ)',
            hi: 'क्रिस्टल क्षेत्र स्थायीकरण ऊर्जा (CFSE) एवं प्रचक्रण चुंबकीय आघूर्ण (μ)'
        },
        back: {
            en: 'Octahedral CFSE = [−0.4 n(t₂g) + 0.6 n(e_g)] Δ₀ + mP; Tetrahedral Δ_t = (4/9)Δ₀; Spin-only μ = √[n(n+2)] BM.',
            pa: 'Octahedral CFSE = [−0.4 n(t₂g) + 0.6 n(e_g)] Δ₀; μ = √[n(n+2)] BM (ਜਿੱਥੇ n = ਅਯੁਗਮਿਤ ਇਲੈਕਟ੍ਰਾਨ)।',
            hi: 'अष्टफलकीय CFSE = [−0.4 n(t₂g) + 0.6 n(e_g)] Δ₀; μ = √[n(n+2)] BM (जहाँ n = अयुग्मित इलेक्ट्रॉन संख्या)।'
        },
        examTip: {
            en: '[Ni(CN)₄]²⁻ (d⁸, strong field CN⁻) is dsp² square planar with n = 0 (diamagnetic), whereas [NiCl₄]²⁻ is sp³ tetrahedral with n = 2 (μ = 2.83 BM).',
            pa: '[Ni(CN)₄]²⁻ ਡਾਇਆਮੈਗਨੈਟਿਕ (μ = 0) ਹੈ ਜਦਕਿ [NiCl₄]²⁻ ਪੈਰਾਮੈਗਨੈਟਿਕ (μ = 2.83 BM) ਹੈ।',
            hi: '[Ni(CN)₄]²⁻ प्रतिचुंबकीय (μ = 0) है जबकि [NiCl₄]²⁻ अनुचुंबकीय (μ = 2.83 BM) है।'
        }
    },
    {
        id: 'card-sci-4',
        branch: 'Organic Chemistry',
        levelTag: 'G',
        front: {
            en: 'Reimer–Tiemann vs Kolbe’s Reaction & Carbonyl IR Stretching Order',
            pa: 'ਰਾਈਮਰ-ਟੀਮਾਨ ਬਨਾਮ ਕੋਲਬੇ ਪ੍ਰਤੀਕਿਰਿਆ ਅਤੇ C=O IR ਸਟ੍ਰੈਚਿੰਗ ਕ੍ਰਮ',
            hi: 'राइमर-टीमान बनाम कोल्बे अभिक्रिया एवं C=O IR कंपनी आवृत्ति क्रम'
        },
        back: {
            en: 'Phenol + CHCl₃/aq. NaOH → Salicylaldehyde (via :CCl₂ electrophile). Phenol + CO₂/NaOH → Salicylic acid. IR ν(C=O): Acid chloride (~1800) > Ester (~1735) > Aldehyde (~1725) > Ketone (~1715) > Amide (~1660 cm⁻¹).',
            pa: 'ਫੀਨੋਲ + CHCl₃/NaOH → ਸੈਲੀਸਿਲਐਲਡੀਹਾਈਡ (:CCl₂ ਰਾਹੀਂ)। IR C=O: ਐਸਿਡ ਕਲੋਰਾਈਡ (1800) > ਐਸਟਰ (1735) > ਐਲਡੀਹਾਈਡ (1725) > ਕੀਟੋਨ (1715) > ਐਮਾਈਡ (1660 cm⁻¹)।',
            hi: 'फीनॉल + CHCl₃/NaOH → सैलिसिलैल्डिहाइड (:CCl₂ मध्यवर्ती)। IR C=O: अम्ल क्लोराइड (1800) > एस्टर (1735) > एल्डिहाइड (1725) > कीटोन (1715) > एमाइड (1660 cm⁻¹)।'
        },
        examTip: {
            en: 'Amide has the lowest C=O stretching frequency because strong +M resonance from −NH₂ weakens the C=O double bond character.',
            pa: 'ਐਮਾਈਡ ਵਿੱਚ −NH₂ ਦੇ +M ਪ੍ਰਭਾਵ ਕਾਰਨ C=O ਬਾਂਡ ਦੀ ਆਵਿਰਤੀ ਸਭ ਤੋਂ ਘੱਟ (~1660 cm⁻¹) ਹੁੰਦੀ ਹੈ।',
            hi: 'एमाइड में −NH₂ के प्रबल +M अनुनाद प्रभाव के कारण C=O बंध की आवृत्ति सबसे कम (~1660 cm⁻¹) होती है।'
        }
    },
    {
        id: 'card-sci-5',
        branch: 'Biology',
        levelTag: 'H',
        front: {
            en: 'C₃ (Calvin) vs C₄ (Hatch–Slack) ATP/NADPH Budget & Photorespiration Organelles',
            pa: 'C₃ ਬਨਾਮ C₄ ਚੱਕਰ ਦਾ ATP/NADPH ਬਜਟ ਅਤੇ ਫੋਟੋਰੈਸਪੀਰੇਸ਼ਨ ਅੰਗ',
            hi: 'C₃ बनाम C₄ चक्र का ATP/NADPH बजट एवं प्रकाश-श्वसन कोशिकांग'
        },
        back: {
            en: 'Per glucose (6 CO₂): C₃ requires 18 ATP + 12 NADPH; C₄ requires 30 ATP + 12 NADPH (2 extra ATP per CO₂ in mesophyll PPDK regeneration). Photorespiration sequence: Chloroplast → Peroxisome → Mitochondria.',
            pa: 'ਪ੍ਰਤੀ ਗਲੂਕੋਜ਼: C₃ = 18 ATP + 12 NADPH; C₄ = 30 ATP + 12 NADPH। ਫੋਟੋਰੈਸਪੀਰੇਸ਼ਨ ਕ੍ਰਮ: ਕਲੋਰੋਪਲਾਸਟ → ਪੈਰੋਕਸੀਸੋਮ → ਮਾਈਟੋਕੌਂਡਰੀਆ।',
            hi: 'प्रति ग्लूकोज: C₃ = 18 ATP + 12 NADPH; C₄ = 30 ATP + 12 NADPH। प्रकाश-श्वसन क्रम: हरितलवक (Chloroplast) → पेरॉक्सीसोम → माइटोकॉन्ड्रिया।'
        },
        examTip: {
            en: 'In C₄ plants (maize, sugarcane), mesophyll cells have PEPCase (no RuBisCO) and bundle-sheath cells have RuBisCO (Kranz anatomy).',
            pa: 'C₄ ਪੌਦਿਆਂ (ਮੱਕੀ, ਗੰਨਾ) ਵਿੱਚ ਮੀਜ਼ੋਫਿਲ ਸੈੱਲਾਂ ਵਿੱਚ PEPCase ਅਤੇ ਬੰਡਲ-ਸ਼ੀਥ ਸੈੱਲਾਂ ਵਿੱਚ RuBisCO ਹੁੰਦਾ ਹੈ।',
            hi: 'C₄ पादपों (मक्का, गन्ना) में पर्णमध्योतक (Mesophyll) में PEPCase तथा पूल-आच्छद (Bundle-sheath) में RuBisCO होता है।'
        }
    }
];

export const MASTER_CADRE_SCIENCE_BLUEPRINT_DOMAINS: ScienceBlueprintDomain[] = [
    {
        domainId: 'foundation-lab',
        subjectRouteId: 'science',
        domainTitle: {
            en: '0. Foundation Science (Class 6–10 Base), SI Units, Lab Safety & Scientific Discoveries',
            pa: '0. ਮੁੱਢਲਾ ਵਿਗਿਆਨ (ਜਮਾਤ 6–10 ਅਧਾਰ), SI ਇਕਾਈਆਂ, ਲੈਬ ਸੁਰੱਖਿਆ ਅਤੇ ਵਿਗਿਆਨਕ ਖੋਜਾਂ',
            hi: '0. आधारभूत विज्ञान (कक्षा 6–10 आधार), SI मात्रक, प्रयोगशाला सुरक्षा एवं वैज्ञानिक खोजें'
        },
        officialHeadingCount: 1,
        officialHeadings: [
            'General Science Foundation (Classes 6–10 PSEB/NCERT) & Practical/Experimental Laboratory Principles'
        ],
        topics: [
            {
                topicId: 'sci-foundation-class6-10-lab',
                officialHeadingsCovered: 'Class 6–10 PSEB/NCERT Base; Experimental techniques & Practical chemistry principles; Lab safety & Scientists',
                levelBadges: ['B', 'I'],
                levelProgression: {
                    foundationBI: '7 SI Base Units, Fundamental Constants (c, h, N_A, F, R, G), Acid-Base Indicators, Burette/Pipette Meniscus, Safe Acid Dilution, Flame Test & Lassaigne’s Test, Hargobind Khorana & Ruchi Ram Sahni',
                    higherSecondaryH: 'Dimensional analysis, vernier calliper/screw gauge least count, systematic vs random error propagation',
                    graduationG: 'Qualitative inorganic/organic salt analysis principles and standard laboratory safety protocols'
                }
            }
        ]
    },
    {
        domainId: 'physics',
        subjectRouteId: 'science',
        domainTitle: {
            en: '1. Physics (All 10 Official ERB Headings)',
            pa: '1. ਭੌਤਿਕ ਵਿਗਿਆਨ (ਸਾਰੇ 10 ਸਰਕਾਰੀ ERB ਵਿਸ਼ੇ)',
            hi: '1. भौतिक विज्ञान (सभी 10 आधिकारिक ERB विषय)'
        },
        officialHeadingCount: 10,
        officialHeadings: [
            'Mathematical methods',
            'Classical mechanics',
            'Electromagnetic theory',
            'Quantum mechanics',
            'Thermodynamics and statistical physics',
            'Electronics and experimental methods',
            'Experimental techniques and data analysis',
            'Atomic and molecular physics',
            'Condensed matter physics',
            'Nuclear and particle physics'
        ],
        topics: [
            {
                topicId: 'physics-concepts',
                officialHeadingsCovered: 'Classical mechanics; Experimental techniques and data analysis',
                levelBadges: ['B', 'I', 'H', 'G', 'P'],
                levelProgression: {
                    foundationBI: 'Units & Measurement, Motion, Newton’s Laws, Friction, Work-Energy-Power (1 HP = 746 W), Gravitation (g = 9.8 m/s², v_e = 11.2 km/s)',
                    higherSecondaryH: 'Projectile Motion, Rotational Dynamics, Moment of Inertia (Parallel/Perpendicular Axis Theorems), Kepler’s Laws, Elasticity & Fluid Mechanics',
                    graduationG: 'Central force motion, conservative forces, inertial vs non-inertial frames (Coriolis & centrifugal forces)',
                    postgradPFlag: 'Lagrangian (L = T − V) & Hamiltonian (H = T + V) cyclic coordinates & canonical momentum [P-Flagged]'
                }
            },
            {
                topicId: 'sci-phy-waves-optics',
                officialHeadingsCovered: 'Classical mechanics (Oscillations & Waves); Electromagnetic theory (Geometrical & Wave Optics)',
                levelBadges: ['I', 'H', 'G'],
                levelProgression: {
                    foundationBI: 'Spherical Mirrors & Thin Lenses (1/v − 1/u = 1/f), Power in Dioptres, Human Eye Defects (Myopia/Hypermetropia), Sound Echo & Ultrasound',
                    higherSecondaryH: 'SHM (Pendulum & Spring), Standing Waves in Organ Pipes, Beats, Doppler Effect, Total Internal Reflection, Prism & Lensmaker’s Formula',
                    graduationG: 'Young’s Double Slit Interference (β = λD/d), Newton’s Rings, Single-Slit & Grating Diffraction (R = nN), Brewster’s Law (n = tan i_p) & Malus’s Law'
                }
            },
            {
                topicId: 'sci-phy-thermo-statistical',
                officialHeadingsCovered: 'Thermodynamics and statistical physics',
                levelBadges: ['I', 'H', 'G', 'P'],
                levelProgression: {
                    foundationBI: 'Temperature Scales (°C, °F, K; −40° equality), Specific Heat, Latent Heat of Fusion & Vaporisation, Thermal Expansion (α:β:γ = 1:2:3)',
                    higherSecondaryH: 'Zeroth, First & Second Laws, Isothermal vs Adiabatic Work, Carnot Efficiency (η = 1 − T_C/T_H), Kinetic Theory (v_rms > v_avg > v_mp), Equipartition of Energy',
                    graduationG: 'Entropy (ΔS = ∫dQ/T), Four Thermodynamic Potentials (U, H, F, G), Four Maxwell Relations, Clausius-Clapeyron Equation & Joule-Thomson Effect',
                    postgradPFlag: 'Maxwell-Boltzmann vs Bose-Einstein (integral spin bosons) vs Fermi-Dirac (half-integral spin fermions) distributions [P-Flagged]'
                }
            },
            {
                topicId: 'sci-phy-electromagnetism-circuits',
                officialHeadingsCovered: 'Electromagnetic theory',
                levelBadges: ['I', 'H', 'G', 'P'],
                levelProgression: {
                    foundationBI: 'Ohm’s Law (V = IR), Series/Parallel Resistors, Joule Heating (H = I²Rt), Commercial kWh Unit, Magnetic Field Lines & Fleming’s Rules',
                    higherSecondaryH: 'Gauss’s Law, Capacitance with Dielectric, Kirchhoff’s Laws, Wheatstone Bridge, Biot-Savart & Ampere’s Laws, Lorentz Force, Faraday’s EMI, Series LCR Resonance',
                    graduationG: 'Displacement Current, All Four Maxwell’s Equations (Differential & Integral Forms), EM Wave Speed c = 1/√(μ₀ε₀)',
                    postgradPFlag: 'Poynting Vector S = (E × B)/μ₀, radiation pressure & boundary conditions at dielectric interfaces [P-Flagged]'
                }
            },
            {
                topicId: 'sci-phy-modern-quantum-nuclear',
                officialHeadingsCovered: 'Quantum mechanics; Atomic and molecular physics; Nuclear and particle physics',
                levelBadges: ['H', 'G', 'P'],
                levelProgression: {
                    foundationBI: 'Atomic constituents (e, p, n), isotopes/isobars/isotones, nuclear fission vs fusion basics',
                    higherSecondaryH: 'Photoelectric Effect, de Broglie Wavelength (12.27/√V Å), Bohr Hydrogen Spectrum, Nuclear Radius (R = R₀A¹/³), Binding Energy & Radioactive Half-Life (T₁/₂ = 0.693/λ)',
                    graduationG: 'Compton Shift, Heisenberg Uncertainty, Schrödinger Wave Equation, Particle in 1D Box (E_n ∝ n²/L²), 1D Harmonic Oscillator Zero-Point Energy (½ℏω), Raman & Zeeman Effects',
                    postgradPFlag: 'L-S vs j-j coupling, Term Symbols ²ˢ⁺¹L_J, Nuclear Shell Model Magic Numbers (2, 8, 20, 28, 50, 82, 126) & Quark Model (uud proton, udd neutron) [P-Flagged]'
                }
            },
            {
                topicId: 'sci-phy-electronics-solid-math',
                officialHeadingsCovered: 'Condensed matter physics; Electronics and experimental methods; Mathematical methods',
                levelBadges: ['H', 'G', 'P'],
                levelProgression: {
                    foundationBI: 'Conductors, insulators, semiconductors, binary numbers & basic circuit instruments (ammeter vs voltmeter)',
                    higherSecondaryH: 'Intrinsic/Extrinsic Semiconductors, PN Diode, Zener Regulator, BJT (β = α/(1−α)), Universal Logic Gates (NAND/NOR) & De Morgan’s Theorems',
                    graduationG: 'SC/BCC/FCC Crystal Packing (52%, 68%, 74%), Miller Indices, Bragg’s Law (2d sinθ = nλ), Vector Calculus (Grad, Div, Curl) & Matrix Eigenvalues',
                    postgradPFlag: 'Superconductivity, Meissner Effect (χ = −1), BCS Cooper Pairs, Hall Coefficient R_H = −1/(ne) & Fourier/Dirac Delta Basics [P-Flagged]'
                }
            }
        ]
    },
    {
        domainId: 'physical-chemistry',
        subjectRouteId: 'science',
        domainTitle: {
            en: '2A. Physical Chemistry (All 13 Official ERB Headings)',
            pa: '2A. ਭੌਤਿਕ ਰਸਾਇਣ ਵਿਗਿਆਨ (Physical Chemistry — ਸਾਰੇ 13 ਸਰਕਾਰੀ ERB ਵਿਸ਼ੇ)',
            hi: '2A. भौतिक रसायन विज्ञान (Physical Chemistry — सभी 13 आधिकारिक ERB विषय)'
        },
        officialHeadingCount: 13,
        officialHeadings: [
            'Basic principles of chemistry',
            'Atomic structure',
            'States of matter',
            'Chemical bonding and molecular structure',
            'Spectroscopy principles and applications',
            'Thermodynamics',
            'Equilibrium',
            'Redox reactions and electrochemistry',
            'Chemical kinetics',
            'Surface chemistry',
            'Solid state',
            'Catalysis',
            'Solutions'
        ],
        topics: [
            {
                topicId: 'sci-chem-physical-states-thermo-eq',
                officialHeadingsCovered: 'Basic principles of chemistry; Atomic structure; States of matter; Chemical bonding and molecular structure; Thermodynamics; Equilibrium',
                levelBadges: ['B', 'I', 'H', 'G'],
                levelProgression: {
                    foundationBI: 'Laws of Chemical Combination, Mole Concept, Molarity vs Molality, pH Scale (Sorensen), Octet Rule',
                    higherSecondaryH: 'Quantum Numbers & Nodes (n−l−1, l), VSEPR Geometries, MOT Bond Order (O₂⁺ > O₂ > O₂⁻ > O₂²⁻), van der Waals Gas Equation, Gibbs Spontaneity (ΔG = ΔH − TΔS)',
                    graduationG: 'Critical Constants (Z_c = 3/8 = 0.375), K_p = K_c(RT)^Δn, Henderson-Hasselbalch Buffer Equation & Solubility Product (K_sp = 27S⁴, 108S⁵)'
                }
            },
            {
                topicId: 'sci-chem-electro-kinetics-surface-solids',
                officialHeadingsCovered: 'Redox reactions and electrochemistry; Chemical kinetics; Solutions; Solid state; Surface chemistry; Catalysis; Spectroscopy principles and applications',
                levelBadges: ['H', 'G', 'P'],
                levelProgression: {
                    foundationBI: 'Oxidation-reduction definitions, rusting of iron, true solutions vs colloids (Tyndall effect) vs suspensions',
                    higherSecondaryH: 'Nernst Equation, Faraday’s Laws, Kohlrausch’s Law, Zero & First Order Kinetics (t_99.9% = 10 × t₁/₂), Arrhenius Equation, 4 Colligative Properties & van ’t Hoff Factor i',
                    graduationG: 'Schottky vs Frenkel Defects (AgBr shows both), Freundlich & Langmuir Isotherms, Hardy-Schulze Coagulation Rule, Michaelis-Menten Enzyme Catalysis',
                    postgradPFlag: 'Beer-Lambert Law (A = εcl) & Rotational/Vibrational/Raman Spectroscopy Selection Rules [P-Flagged]'
                }
            }
        ]
    },
    {
        domainId: 'inorganic-chemistry',
        subjectRouteId: 'science',
        domainTitle: {
            en: '2B. Inorganic Chemistry (All 12 Official ERB Headings)',
            pa: '2B. ਅਕਾਰਬਨਿਕ ਰਸਾਇਣ ਵਿਗਿਆਨ (Inorganic Chemistry — ਸਾਰੇ 12 ਸਰਕਾਰੀ ERB ਵਿਸ਼ੇ)',
            hi: '2B. अकार्बनिक रसायन विज्ञान (Inorganic Chemistry — सभी 12 आधिकारिक ERB विषय)'
        },
        officialHeadingCount: 12,
        officialHeadings: [
            'Chemical periodicity',
            'General principles and processes of isolation of metals',
            'Hydrogen',
            's-block',
            'p-block',
            'd- and f-block',
            'Coordination and organometallic compounds',
            'Environmental chemistry',
            'Nuclear chemistry',
            'Analytical chemistry',
            'Bioinorganic chemistry',
            'Physical characterisation of inorganic compounds'
        ],
        topics: [
            {
                topicId: 'chemistry-concepts',
                officialHeadingsCovered: 'Chemical periodicity; General principles and processes of isolation of metals; Hydrogen; s-block; p-block; Environmental chemistry',
                levelBadges: ['B', 'I', 'H', 'G'],
                levelProgression: {
                    foundationBI: 'Modern Periodic Table (Moseley Z-basis, 7 periods, 18 groups), Periodic Trends (F highest EN = 4.0, Cl highest EA), Metals & Non-Metals, Hard vs Soft Water',
                    higherSecondaryH: 'Metallurgy (Froth Flotation, Ellingham Diagram, Mond & Van Arkel Processes), Diborane 3c-2e Banana Bonds, Interhalogens, Xenon Fluorides (XeF₂, XeF₄, XeF₆)',
                    graduationG: 'Diagonal Relationships (Li-Mg, Be-Al), Silicates & Silicones, BOD/COD, Photochemical vs Classical Smog & Montreal Protocol'
                }
            },
            {
                topicId: 'sci-chem-inorganic-coord-bio-nuclear',
                officialHeadingsCovered: 'd- and f-block; Coordination and organometallic compounds; Bioinorganic chemistry; Nuclear chemistry; Analytical chemistry; Physical characterisation',
                levelBadges: ['H', 'G', 'P'],
                levelProgression: {
                    foundationBI: 'Transition metals overview, biological roles of Iron (Hb), Magnesium (Chlorophyll), Cobalt (Vit B₁₂) and Zinc',
                    higherSecondaryH: 'Lanthanoid Contraction (Zr/Hf radii), KMnO₄ & K₂Cr₂O₇ Equivalent Weights, Werner’s Theory, VBT & CFT ([Ni(CN)₄]²⁻ vs [NiCl₄]²⁻), Spin-Only μ = √[n(n+2)] BM',
                    graduationG: 'Octahedral vs Tetrahedral CFSE, Jahn-Teller Distortion, Trans Effect, Qualitative Cation Group Reagents (Groups I–VI) & Complexometric EDTA Titration',
                    postgradPFlag: '18-Electron Organometallic Rule, Metal Carbonyl π-Backbonding Order, Wilkinson’s & Ziegler-Natta Catalysts, Hemoglobin Cooperativity & Cisplatin [P-Flagged]'
                }
            }
        ]
    },
    {
        domainId: 'organic-chemistry',
        subjectRouteId: 'science',
        domainTitle: {
            en: '2C. Organic Chemistry (All 13 Official ERB Headings)',
            pa: '2C. ਕਾਰਬਨਿਕ ਰਸਾਇਣ ਵਿਗਿਆਨ (Organic Chemistry — ਸਾਰੇ 13 ਸਰਕਾਰੀ ERB ਵਿਸ਼ੇ)',
            hi: '2C. कार्बनिक रसायन विज्ञान (Organic Chemistry — सभी 13 आधिकारिक ERB विषय)'
        },
        officialHeadingCount: 13,
        officialHeadings: [
            'Purification and characterisation',
            'Basic principles',
            'Hydrocarbons',
            'Halogen compounds',
            'Oxygen compounds',
            'Nitrogen compounds',
            'Polymers',
            'Biomolecules',
            'Chemistry in everyday life',
            'Common reagents',
            'Selective organic transformations (chemo-, regio-, stereo-, enantioselectivity, protecting groups)',
            'IR, UV, MS, NMR characterisation',
            'Practical chemistry principles'
        ],
        topics: [
            {
                topicId: 'sci-chem-organic-goc-hydrocarbons-halides',
                officialHeadingsCovered: 'Purification and characterisation; Basic principles; Hydrocarbons; Halogen compounds; Oxygen compounds (Alcohols, Phenols, Ethers); Practical chemistry principles',
                levelBadges: ['I', 'H', 'G'],
                levelProgression: {
                    foundationBI: 'Carbon catenation, alkanes/alkenes/alkynes, ethanol vs ethanoic acid, esterification & saponification',
                    higherSecondaryH: 'Kjeldahl/Dumas/Carius Analysis, Inductive/Mesomeric/Hyperconjugation, Hückel (4n+2)π Aromaticity, Markovnikov vs Kharasch Peroxide Effect (HBr only), S_N1 vs S_N2, Lucas Test',
                    graduationG: 'CIP R/S & E/Z Stereochemistry, Birch vs Lindlar Reduction, Reimer-Tiemann (:CCl₂), Kolbe’s Reaction, Williamson Ether Synthesis & Pinacol-Pinacolone Rearrangement'
                }
            },
            {
                topicId: 'sci-chem-organic-carbonyls-reagents-spectro',
                officialHeadingsCovered: 'Oxygen compounds (Carbonyls & Acids); Nitrogen compounds; Common reagents; Selective organic transformations; Polymers; Biomolecules; Chemistry in everyday life; IR, UV, MS, NMR characterisation',
                levelBadges: ['H', 'G', 'P'],
                levelProgression: {
                    foundationBI: 'Everyday polymers (Nylon, Polythene, Bakelite, Rubber), Carbohydrates, Proteins, Vitamins & Drug classifications (analgesics, antibiotics, antiseptics)',
                    higherSecondaryH: 'Aldol vs Cannizzaro, Clemmensen vs Wolff-Kishner, Tollens/Fehling/Iodoform Tests, Amine Aqueous Basicity Order, Gabriel Phthalimide, Hoffmann Bromamide, Carbylamine & Hinsberg Tests',
                    graduationG: 'Wittig & Perkin Reactions, Baeyer-Villiger Oxidation, Chemoselectivity (NaBH₄ vs LiAlH₄ vs DIBAL-H vs PCC) & Protecting Groups (Cyclic Acetals, Boc, TMS)',
                    postgradPFlag: 'IR Carbonyl Stretching Order (1800 to 1660 cm⁻¹), Woodward-Fieser UV Rules, ¹H NMR Chemical Shifts (δ) & (n+1) Spin-Spin Splitting, Mass Spec M+2 Peaks [P-Flagged]'
                }
            }
        ]
    },
    {
        domainId: 'botany',
        subjectRouteId: 'science',
        domainTitle: {
            en: '3A. Botany (All 8 Official ERB Headings)',
            pa: '3A. ਬਨਸਪਤੀ ਵਿਗਿਆਨ (Botany — ਸਾਰੇ 8 ਸਰਕਾਰੀ ERB ਵਿਸ਼ੇ)',
            hi: '3A. वनस्पति विज्ञान (Botany — सभी 8 आधिकारिक ERB विषय)'
        },
        officialHeadingCount: 8,
        officialHeadings: [
            'Diversity in the living world',
            'Structural organisation in plants',
            'Plant physiology',
            'Reproduction',
            'Cell biology, genetics and evolution',
            'Biology and human welfare',
            'Biotechnology and its applications',
            'Ecology and environment'
        ],
        topics: [
            {
                topicId: 'sci-bio-diversity-plant-structural',
                officialHeadingsCovered: 'Diversity in the living world (Botany); Structural organisation in plants; Reproduction (Plants)',
                levelBadges: ['B', 'I', 'H', 'G'],
                levelProgression: {
                    foundationBI: 'Parts of a flower, pollination & fertilization, xylem vs phloem transport, fibrous vs tap root, simple classification of plants',
                    higherSecondaryH: 'Whittaker 5 Kingdoms, Viruses/Viroids/Lichens, Algae (Chloro/Phaeo/Rhodophyceae), Bryophytes, Heterosporous Pteridophytes (Selaginella/Salvinia), Gymnosperms (n endosperm) vs Angiosperms (3n endosperm)',
                    graduationG: 'Stele Evolution, Dicot vs Monocot Anatomy, Secondary Growth, Polygonum 7-Celled 8-Nucleate Embryo Sac, Double Fertilization (Nawaschin), Apomixis & Polyembryony'
                }
            },
            {
                topicId: 'sci-bio-plant-physiology-ecology',
                officialHeadingsCovered: 'Plant physiology; Ecology and environment',
                levelBadges: ['B', 'I', 'H', 'G'],
                levelProgression: {
                    foundationBI: 'Photosynthesis equation, stomatal transpiration, food chains & food webs, biodegradable vs non-biodegradable, ozone layer & greenhouse effect',
                    higherSecondaryH: 'Water Potential (Ψ_w = Ψ_s + Ψ_p), Z-Scheme Photophosphorylation, C₃ vs C₄ (Kranz Anatomy) vs CAM, Photorespiration, Krebs Cycle & RQ Values, 5 Phytohormones (Auxin, GA₃, Cytokinin, Ethylene, ABA)',
                    graduationG: 'Nitrogenase (16 ATP per N₂ & Leghemoglobin), Lindeman’s 10% Energy Law, Ecological Pyramids, Species-Area Curve, Biodiversity Conservation & Punjab’s 6 Ramsar Wetlands'
                }
            }
        ]
    },
    {
        domainId: 'zoology',
        subjectRouteId: 'science',
        domainTitle: {
            en: '3B. Zoology & Cell/Molecular Biology (All 8 Official ERB Headings)',
            pa: '3B. ਜੰਤੂ ਵਿਗਿਆਨ ਅਤੇ ਸੈੱਲ/ਮੌਲੀਕਿਊਲਰ ਬਾਇਓਲੋਜੀ (Zoology — ਸਾਰੇ 8 ਸਰਕਾਰੀ ERB ਵਿਸ਼ੇ)',
            hi: '3B. जंतु विज्ञान एवं कोशिका/आणविक जीव विज्ञान (Zoology — सभी 8 आधिकारिक ERB विषय)'
        },
        officialHeadingCount: 8,
        officialHeadings: [
            'Diversity in the living world',
            'Structural organisation in animals',
            'Animal physiology',
            'Reproduction',
            'Cell biology, genetics and evolution',
            'Biology and human welfare',
            'Biotechnology and its applications',
            'Ecology and environment'
        ],
        topics: [
            {
                topicId: 'sci-bio-zoology-diversity-human-physiology',
                officialHeadingsCovered: 'Diversity in the living world (Zoology); Structural organisation in animals; Animal physiology; Reproduction (Animals & Human)',
                levelBadges: ['B', 'I', 'H', 'G'],
                levelProgression: {
                    foundationBI: 'Human digestive, respiratory, circulatory (4-chambered heart) and excretory (nephron) systems, asexual vs sexual reproduction',
                    higherSecondaryH: 'Phyla Diagnostic Structures (Choanocytes, Cnidoblasts, Flame Cells, Nephridia, Malpighian Tubules, Radula, Water Vascular System), Chondrichthyes vs Osteichthyes, Animal Tissues',
                    graduationG: 'Oxygen-Hb Bohr Shift, Cardiac Output (5 L/min) & ECG (P-QRS-T), Nephron Counter-Current & RAAS, Sliding Filament Contraction (Troponin-C, A-band constant), Action Potential, Endocrine & Menstrual Cycle LH Surge'
                }
            },
            {
                topicId: 'biology-concepts',
                officialHeadingsCovered: 'Cell biology, genetics and evolution; Biology and human welfare; Biotechnology and its applications',
                levelBadges: ['B', 'I', 'H', 'G'],
                levelProgression: {
                    foundationBI: 'Cell Theory (Schleiden, Schwann, Virchow), Organelles (Mitochondria, Chloroplast, Ribosome, Lysosome), ABO Blood Groups (O− universal donor, AB+ universal recipient)',
                    higherSecondaryH: 'Mitosis vs Meiosis, Mendelian Ratios (3:1, 9:3:3:1), Incomplete Dominance & Codominance, Watson-Crick DNA, Central Dogma, Lac Operon, Hardy-Weinberg Equilibrium (p² + 2pq + q² = 1)',
                    graduationG: 'Innate vs Adaptive Immunity (IgG, IgA, IgM, IgE, IgD), Restriction Endonucleases, pBR322 Vector, PCR (Taq Polymerase), Bt Cotton (cry genes), RNAi & Gene Therapy (ADA)'
                }
            }
        ]
    },
    {
        domainId: 'punjabi-paper-a',
        subjectRouteId: 'punjabi-paper-a-subject',
        domainTitle: {
            en: '4. Compulsory Qualifying Paper-A: Punjabi Language & Gurmukhi Grammar',
            pa: '4. ਲਾਜ਼ਮੀ ਕੁਆਲੀਫਾਇੰਗ ਪੇਪਰ-ਏ: ਪੰਜਾਬੀ ਭਾਸ਼ਾ, ਗੁਰਮੁਖੀ ਵਿਆਕਰਨ ਅਤੇ ਸਾਹਿਤ',
            hi: '4. अनिवार्य अर्हता पेपर-ए: पंजाबी भाषा, गुरमुखी व्याकरण एवं साहित्य'
        },
        officialHeadingCount: 1,
        officialHeadings: [
            'Compulsory Punjabi Qualifying Paper-A (50 Questions, 50 Marks, Minimum 50% = 25 Marks Qualifying)'
        ],
        topics: [
            {
                topicId: 'punjabi-paper-a',
                officialHeadingsCovered: 'Gurmukhi Orthography (35 Akhar + 6 Naveen Toli), Laga-Matra, Lagaakhar, Grammar, Idioms, Gurbani/Sufi/Qissa Sahit & Official Punjabi Vocabulary',
                levelBadges: ['B', 'I', 'H'],
                levelProgression: {
                    foundationBI: 'Gurmukhi 41 Akhar, 10 Laga-Matra, 3 Lagaakhar (Bindi, Tippi, Addak), Naav,arnaav, Visheshan, Kiriya',
                    higherSecondaryH: 'Muhavare, Akhaan, Synonyms/Antonyms, Gurmat/Sufi/Qissa Poetry & English-to-Punjabi Official Administrative Terms',
                    graduationG: 'Qualifying Paper-A mastery (50% threshold required before Paper-B Science merit evaluation)'
                }
            }
        ]
    }
];

export const MASTER_CADRE_SCIENCE_TEACHING_ITEMS_CHECK = [
    {
        item: 'Class 6–10 PSEB/NCERT Foundation Facts Asked Directly',
        status: 'Confirmed — Covered in Module 0 & Level B/I of Every Branch',
        note: 'Because Master Cadre recruits teachers for Classes 6–10, direct questions on school-level indicators, lenses, circuits, alloys, cell organelles, and vitamins appear regularly.'
    },
    {
        item: 'Laboratory Safety, Volumetric Apparatus & Qualitative Salt Analysis',
        status: 'Included in Module 0 (sci-foundation-class6-10-lab) & Organic/Inorganic Modules',
        note: 'Covers burette meniscus reading (upper for KMnO₄), flame test colours, Lassaigne’s test, brown ring test, chromyl chloride test, and group cation reagents.'
    },
    {
        item: 'M.Sc. / Postgraduate-Level Headings (Quantum, NMR/MS, Organometallics, Condensed Matter)',
        status: 'Flagged with [P] Badge — Covered after Class 11–12 (H) & Graduation (G) Base',
        note: 'High-yield graduation/postgraduate essentials (1D box energy, Maxwell equations, 18-electron rule, CFSE, IR/NMR shifts, Bragg’s law, Meissner effect) are taught clearly without drowning students in months of M.Sc. derivations.'
    },
    {
        item: 'Science Pedagogy & Teaching Methodology',
        status: 'Verify against Official ERB Notification PDF per Cycle',
        note: 'Historical ERB Master Cadre papers (2017, 2020, 2022) focused 100% on subject domain (3 × 50 = 150 MCQs); verify if any new notification adds pedagogy.'
    }
];

export const MASTER_CADRE_SCIENCE_STUDENT_STRATEGY = [
    {
        step: 1,
        title: { en: 'Build the Class 6–12 Base First (B → I → H)', pa: 'ਪਹਿਲਾਂ ਜਮਾਤ 6–12 ਦਾ ਅਧਾਰ ਪੱਕਾ ਕਰੋ (B → I → H)', hi: 'सबसे पहले कक्षा 6–12 का आधार मजबूत करें (B → I → H)' },
        detail: {
            en: 'NCERT/PSEB Class 6–10 Science and Class 11–12 Physics, Chemistry, and Biology form 70%+ of the conceptual backbone. Master Level B, I, and H before graduation/postgraduate extensions.',
            pa: 'NCERT/PSEB ਜਮਾਤ 6–10 ਵਿਗਿਆਨ ਅਤੇ ਜਮਾਤ 11–12 ਫਿਜ਼ਿਕਸ, ਕੈਮਿਸਟਰੀ ਤੇ ਬਾਇਓਲੋਜੀ ਮੁੱਖ ਅਧਾਰ ਹਨ। ਗ੍ਰੈਜੂਏਸ਼ਨ/M.Sc. ਵਿਸ਼ਿਆਂ ਤੋਂ ਪਹਿਲਾਂ ਇਹਨਾਂ ਨੂੰ ਪੱਕਾ ਕਰੋ।',
            hi: 'NCERT/PSEB कक्षा 6–10 विज्ञान और कक्षा 11–12 भौतिकी, रसायन एवं जीव विज्ञान मुख्य आधार हैं। स्नातक/स्नातकोत्तर विषयों से पहले इन्हें पक्का करें।'
        }
    },
    {
        step: 2,
        title: { en: 'Zero Negative Marking: Attempt All 150 Questions', pa: 'ਜ਼ੀਰੋ ਨੈਗੇਟਿਵ ਮਾਰਕਿੰਗ: ਸਾਰੇ 150 ਪ੍ਰਸ਼ਨ ਹੱਲ ਕਰੋ', hi: 'शून्य नकारात्मक अंकन: सभी 150 प्रश्न हल करें' },
        detail: {
            en: 'There is NO penalty for wrong or unanswered questions. Never leave a bubble/option blank—use dimensional analysis or option elimination first, then make an informed choice.',
            pa: 'ਗਲਤ ਉੱਤਰ ਲਈ ਕੋਈ ਅੰਕ ਨਹੀਂ ਕੱਟਿਆ ਜਾਂਦਾ। ਕੋਈ ਵੀ ਪ੍ਰਸ਼ਨ ਖਾਲੀ ਨਾ ਛੱਡੋ — ਪਹਿਲਾਂ ਗਲਤ ਵਿਕਲਪ ਹਟਾਓ (Elimination) ਅਤੇ ਫਿਰ ਉੱਤਰ ਚੁਣੋ।',
            hi: 'गलत उत्तर के लिए कोई ऋणात्मक अंकन नहीं है। कोई भी प्रश्न खाली न छोड़ें — पहले विकल्प विलोपन (Elimination) का प्रयोग करें और सभी 150 प्रश्न हल करें।'
        }
    },
    {
        step: 3,
        title: { en: 'Two-Pass Time Management (150 Mins for 150 MCQs)', pa: 'ਸਮਾਂ ਪ੍ਰਬੰਧਨ: 150 ਮਿੰਟਾਂ ਵਿੱਚ 2-ਪਾਸ ਰਣਨੀਤੀ', hi: 'समय प्रबंधन: 150 मिनट में 2-पास रणनीति' },
        detail: {
            en: 'Pass 1 (First 80 mins): Solve direct Biology, Inorganic/Organic Chemistry, and conceptual Physics questions in ~35 seconds each. Pass 2 (Next 70 mins): Solve multi-step Physics and Physical Chemistry numericals.',
            pa: 'ਪਹਿਲੇ 80 ਮਿੰਟਾਂ ਵਿੱਚ ਬਾਇਓਲੋਜੀ, ਇਨਔਰਗੈਨਿਕ/ਔਰਗੈਨਿਕ ਕੈਮਿਸਟਰੀ ਅਤੇ ਸਿਧਾਂਤਕ ਪ੍ਰਸ਼ਨ ਤੇਜ਼ੀ ਨਾਲ ਹੱਲ ਕਰੋ। ਅਗਲੇ 70 ਮਿੰਟਾਂ ਵਿੱਚ ਫਿਜ਼ਿਕਸ ਅਤੇ ਫਿਜ਼ੀਕਲ ਕੈਮਿਸਟਰੀ ਦੇ ਨਿਊਮੈਰੀਕਲ ਹੱਲ ਕਰੋ।',
            hi: 'प्रथम 80 मिनट में जीव विज्ञान, अकार्बनिक/कार्बनिक रसायन और सैद्धांतिक प्रश्न तेजी से हल करें। अगले 70 मिनट में भौतिकी व भौतिक रसायन के संख्यात्मक प्रश्न हल करें।'
        }
    },
    {
        step: 4,
        title: { en: 'Daily Numericals + Spaced-Repetition Flip Cards', pa: 'ਰੋਜ਼ਾਨਾ ਨਿਊਮੈਰੀਕਲ ਅਭਿਆਸ ਅਤੇ ਫਲਿੱਪ-ਕਾਰਡ ਦੁਹਰਾਈ', hi: 'दैनिक संख्यात्मक अभ्यास एवं फ्लिप-कार्ड पुनरावृत्ति' },
        detail: {
            en: 'Practice 15 numericals daily (Optics, Thermodynamics, LCR, Nernst, Kinetics, Colligative, Genetics/ATP) and review Flip Cards for Named Reactions, Reagents, Periodic Trends, and Phyla Characteristics.',
            pa: 'ਰੋਜ਼ਾਨਾ 15 ਨਿਊਮੈਰੀਕਲ ਹੱਲ ਕਰੋ ਅਤੇ ਨੇਮਡ ਰਿਐਕਸ਼ਨਜ਼, ਰੀਏਜੈਂਟਸ, ਆਵਰਤੀ ਸਾਰਣੀ ਅਤੇ ਜੀਵ ਵਿਗਿਆਨ ਵਰਗੀਕਰਨ ਲਈ ਫਲਿੱਪ-ਕਾਰਡ ਵਰਤੋ।',
            hi: 'प्रतिदिन 15 संख्यात्मक प्रश्न हल करें तथा नेम्ड रिएक्शन, अभिकर्मक, आवर्त प्रवृत्तियों और जंतु/पादप वर्गीकरण के लिए फ्लिप-कार्ड दोहराएं।'
        }
    }
];
