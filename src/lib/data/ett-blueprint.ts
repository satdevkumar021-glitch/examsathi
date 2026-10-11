// ============================================================================
// ExamSathi — Punjab ETT (Elementary Teacher Training) Recruitment Blueprint
// Covers Trust Levels, 4 Source Problems Audit, Machine-Translation Decoder,
// Per-Year Two-Paper Pattern JSON Store (Paper A Qualifying + Paper B Merit),
// Expanded B → I → A Topic Tree, AI Content Prompts, OMR Strategy & Pipeline
// ============================================================================

export interface EttTrustRow {
  part: { en: string; pa: string; hi: string };
  source: { en: string; pa: string; hi: string };
  trust: { en: string; pa: string; hi: string };
  badge: 'verify' | 'draft' | 'method' | 'ready';
}

export interface EttExamDisambiguationItem {
  examName: { en: string; pa: string; hi: string };
  conductingBody: { en: string; pa: string; hi: string };
  purpose: { en: string; pa: string; hi: string };
  patternSummary: { en: string; pa: string; hi: string };
  isThisBlueprint: boolean;
}

export interface EttSourceProblem {
  id: number;
  title: { en: string; pa: string; hi: string };
  coachingClaim: { en: string; pa: string; hi: string };
  archivalResolution: { en: string; pa: string; hi: string };
  status: 'resolved-with-archive' | 'verify-on-next-notification';
}

export interface EttCorruptedTermRow {
  corruptedCoachingText: string;
  subject: { en: string; pa: string; hi: string };
  authenticGurmukhiTerm: string;
  authenticHindiTerm: string;
  correctEnglishTerm: string;
  whyCorrupted: { en: string; pa: string; hi: string };
  mappedTopicId: string;
}

export interface EttBlueprintModule {
  topicId: string;
  paper: 'Paper A (Qualifying)' | 'Paper B (Merit)';
  subject: { en: string; pa: string; hi: string };
  marksWeight: string;
  title: { en: string; pa: string; hi: string };
  officialHeadingsCovered: { en: string[]; pa: string[]; hi: string[] };
  levelBreakdown: {
    B: { en: string; pa: string; hi: string };
    I: { en: string; pa: string; hi: string };
    A: { en: string; pa: string; hi: string };
  };
  sixtySecondShortcut: { en: string; pa: string; hi: string };
  classMapping: string;
  questionCount: number;
}

export const ETT_EXAM_DISAMBIGUATION: EttExamDisambiguationItem[] = [
  {
    examName: {
      en: '1. Punjab ETT Teacher Recruitment Exam (5994 / 6635 Cadre)',
      pa: '1. ਪੰਜਾਬ ਈ.ਟੀ.ਟੀ. (ETT) ਅਧਿਆਪਕ ਭਰਤੀ ਪ੍ਰੀਖਿਆ (5994 / 6635 ਕਾਡਰ)',
      hi: '1. पंजाब ई.टी.टी. (ETT) शिक्षक भर्ती परीक्षा (5994 / 6635 कैडर)',
    },
    conductingBody: {
      en: 'Education Recruitment Board (ERB), Dept. of School Education, Punjab (educationrecruitmentboard.com / erd.punjab.gov.in)',
      pa: 'ਐਜੂਕੇਸ਼ਨ ਰਿਕਰੂਟਮੈਂਟ ਬੋਰਡ (ERB), ਸਕੂਲ ਸਿੱਖਿਆ ਵਿਭਾਗ, ਪੰਜਾਬ',
      hi: 'एजुकेशन रिक्रूटमेंट बोर्ड (ERB), स्कूल शिक्षा विभाग, पंजाब',
    },
    purpose: {
      en: 'Direct government recruitment of Primary School Teachers (Classes 1–5) after completing ETT/D.El.Ed and qualifying PSTET Paper 1.',
      pa: 'ETT/D.El.Ed ਅਤੇ PSTET ਪੇਪਰ-1 ਪਾਸ ਕਰਨ ਤੋਂ ਬਾਅਦ ਸਰਕਾਰੀ ਪ੍ਰਾਇਮਰੀ ਸਕੂਲਾਂ (ਜਮਾਤ 1–5) ਵਿੱਚ ਅਧਿਆਪਕ ਦੀ ਸਿੱਧੀ ਭਰਤੀ।',
      hi: 'ETT/D.El.Ed और PSTET पेपर-1 उत्तीर्ण करने के बाद सरकारी प्राथमिक विद्यालयों (कक्षा 1–5) में शिक्षक की सीधी भर्ती।',
    },
    patternSummary: {
      en: 'Two OMR Papers: Paper A (Punjabi Qualifying: 100 Qs, 100 Marks) + Paper B (Merit: 100 Qs, 200 Marks across 6 subjects). No Child Pedagogy section in 5994 Paper B!',
      pa: 'ਦੋ OMR ਪੇਪਰ: ਪੇਪਰ A (ਪੰਜਾਬੀ ਯੋਗਤਾ: 100 ਸਵਾਲ, 100 ਅੰਕ) + ਪੇਪਰ B (ਮੈਰਿਟ: 6 ਵਿਸ਼ਿਆਂ ਵਿੱਚ 100 ਸਵਾਲ, 200 ਅੰਕ)। 5994 ਪੇਪਰ B ਵਿੱਚ ਬਾਲ ਮਨੋਵਿਗਿਆਨ (CDP) ਸ਼ਾਮਲ ਨਹੀਂ ਸੀ!',
      hi: 'दो OMR पेपर: पेपर A (पंजाबी अर्हता: 100 प्रश्न, 100 अंक) + पेपर B (मेरिट: 6 विषयों में 100 प्रश्न, 200 अंक)। 5994 पेपर B में बाल विकास (CDP) शामिल नहीं था!',
    },
    isThisBlueprint: true,
  },
  {
    examName: {
      en: '2. Punjab D.El.Ed / ETT Combined Entrance Test (CET)',
      pa: '2. ਪੰਜਾਬ D.El.Ed / ETT ਦਾਖ਼ਲਾ ਪ੍ਰੀਖਿਆ (CET)',
      hi: '2. पंजाब D.El.Ed / ETT संयुक्त प्रवेश परीक्षा (CET)',
    },
    conductingBody: {
      en: 'SCERT Punjab (ssapunjab.org)',
      pa: 'SCERT ਪੰਜਾਬ (ssapunjab.org)',
      hi: 'SCERT पंजाब (ssapunjab.org)',
    },
    purpose: {
      en: 'Admission test to enter the 2-year D.El.Ed (ETT) teacher training diploma course in DIETs and private colleges.',
      pa: 'DIETs ਅਤੇ ਕਾਲਜਾਂ ਵਿੱਚ 2-ਸਾਲਾ D.El.Ed (ETT) ਡਿਪਲੋਮਾ ਕੋਰਸ ਵਿੱਚ ਦਾਖ਼ਲੇ ਲਈ ਪ੍ਰੀਖਿਆ।',
      hi: 'DIETs और कॉलेजों में 2-वर्षीय D.El.Ed (ETT) डिप्लोमा कोर्स में प्रवेश के लिए परीक्षा।',
    },
    patternSummary: {
      en: 'Entrance syllabus includes General Awareness, Teaching Potential, General Mental Ability, English, Punjabi, Hindi, Maths, Science & Social Studies.',
      pa: 'ਇਸ ਵਿੱਚ ਜਨਰਲ ਅਵੇਅਰਨੈੱਸ, ਅਧਿਆਪਨ ਸਮਰੱਥਾ, ਮਾਨਸਿਕ ਯੋਗਤਾ, ਭਾਸ਼ਾਵਾਂ, ਗਣਿਤ, ਵਿਗਿਆਨ ਅਤੇ ਸਮਾਜਿਕ ਸਿੱਖਿਆ ਸ਼ਾਮਲ ਹੁੰਦੀ ਹੈ।',
      hi: 'इसमें सामान्य जागरूकता, शिक्षण क्षमता, मानसिक योग्यता, भाषाएँ, गणित, विज्ञान और सामाजिक अध्ययन शामिल हैं।',
    },
    isThisBlueprint: false,
  },
  {
    examName: {
      en: '3. PSTET Paper 1 (Punjab State Teacher Eligibility Test)',
      pa: '3. ਪੀ.ਐੱਸ.ਟੈੱਟ ਪੇਪਰ 1 (PSTET Paper 1 — ਯੋਗਤਾ ਪ੍ਰੀਖਿਆ)',
      hi: '3. पी.एस.टेट पेपर 1 (PSTET Paper 1 — पात्रता परीक्षा)',
    },
    conductingBody: {
      en: 'PSEB / SCERT Punjab (pstet.pseb.ac.in)',
      pa: 'PSEB / SCERT ਪੰਜਾਬ (pstet.pseb.ac.in)',
      hi: 'PSEB / SCERT पंजाब (pstet.pseb.ac.in)',
    },
    purpose: {
      en: 'Qualifying eligibility certificate required BEFORE applying for the ERB ETT 5994/6635 Teacher Recruitment Exam.',
      pa: 'ETT ਅਧਿਆਪਕ ਭਰਤੀ ਪ੍ਰੀਖਿਆ ਲਈ ਅਪਲਾਈ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਲਾਜ਼ਮੀ ਯੋਗਤਾ ਸਰਟੀਫਿਕੇਟ ਪ੍ਰੀਖਿਆ।',
      hi: 'ETT शिक्षक भर्ती परीक्षा में आवेदन करने से पहले आवश्यक पात्रता प्रमाणपत्र परीक्षा।',
    },
    patternSummary: {
      en: '150 MCQs (150 Marks): Child Development & Pedagogy (30), Punjabi (30), English (30), Mathematics (30), Environmental Studies (30).',
      pa: '150 ਸਵਾਲ (150 ਅੰਕ): ਬਾਲ ਵਿਕਾਸ ਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ (30), ਪੰਜਾਬੀ (30), ਅੰਗਰੇਜ਼ੀ (30), ਗਣਿਤ (30), ਵਾਤਾਵਰਨ ਅਧਿਐਨ (30)।',
      hi: '150 प्रश्न (150 अंक): बाल विकास एवं शिक्षाशास्त्र (30), पंजाबी (30), अंग्रेज़ी (30), गणित (30), पर्यावरण अध्ययन (30)।',
    },
    isThisBlueprint: false,
  },
];

export const ETT_TRUST_LEVELS: EttTrustRow[] = [
  {
    part: {
      en: 'Section 1: Exam Pattern (Paper A + Paper B)',
      pa: 'ਭਾਗ 1: ਪ੍ਰੀਖਿਆ ਪੈਟਰਨ (ਪੇਪਰ A + ਪੇਪਰ B)',
      hi: 'अनुभाग 1: परीक्षा पैटर्न (पेपर A + पेपर B)',
    },
    source: {
      en: 'Coaching-site summary (CareerPower, updated June 2026) of ERB notification for 5,994 ETT posts + archival PDF inspection',
      pa: '5,994 ETT ਅਸਾਮੀਆਂ ਲਈ ERB ਨੋਟੀਫਿਕੇਸ਼ਨ ਦਾ ਕੋਚਿੰਗ ਸਾਰ (CareerPower, ਜੂਨ 2026) + ਪੁਰਾਣੇ PDF ਦੀ ਜਾਂਚ',
      hi: '5,994 ETT पदों हेतु ERB अधिसूचना का कोचिंग सारांश (CareerPower, जून 2026) + पुराने PDF का निरीक्षण',
    },
    trust: {
      en: 'Verify against official ERB notification & syllabus PDF (erd.punjab.gov.in / educationrecruitmentboard.com). See 100 vs 200 marks discrepancy below.',
      pa: 'ਅਧਿਕਾਰਤ ERB ਨੋਟੀਫਿਕੇਸ਼ਨ ਅਤੇ ਸਿਲੇਬਸ PDF ਨਾਲ ਪੁਸ਼ਟੀ ਕਰੋ। ਹੇਠਾਂ 100 ਬਨਾਮ 200 ਅੰਕਾਂ ਦਾ ਅੰਤਰ ਦੇਖੋ।',
      hi: 'आधिकारिक ERB अधिसूचना और पाठ्यक्रम PDF से सत्यापित करें। नीचे 100 बनाम 200 अंकों का अंतर देखें।',
    },
    badge: 'verify',
  },
  {
    part: {
      en: 'Section 2: Official Syllabus Headings',
      pa: 'ਭਾਗ 2: ਸਿਲੇਬਸ ਦੇ ਮੁੱਖ ਸਿਰਲੇਖ',
      hi: 'अनुभाग 2: पाठ्यक्रम के मुख्य शीर्षक',
    },
    source: {
      en: 'Coaching summary cross-checked against 4-page archival scan (SyllabusPaperB01_12_2022.pdf, SHA-256: f88a56...)',
      pa: '4-ਪੰਨਿਆਂ ਦੇ ਪੁਰਾਣੇ ਸਕੈਨ (SyllabusPaperB01_12_2022.pdf) ਨਾਲ ਮਿਲਾਇਆ ਗਿਆ ਕੋਚਿੰਗ ਸਾਰ',
      hi: '4-पृष्ठ के पुराने स्कैन (SyllabusPaperB01_12_2022.pdf) से मिलान किया गया कोचिंग सारांश',
    },
    trust: {
      en: 'Coaching text had machine-translation corruption ("Uptasha", "Metter", "Directional Numerals") and omitted Social Studies; corrected via archival scan.',
      pa: 'ਕੋਚਿੰਗ ਟੈਕਸਟ ਵਿੱਚ ਮਸ਼ੀਨੀ ਅਨੁਵਾਦ ਦੀਆਂ ਗਲਤੀਆਂ ਸਨ ਅਤੇ ਸਮਾਜਿਕ ਸਿੱਖਿਆ ਗਾਇਬ ਸੀ; ਪੁਰਾਣੇ ਸਕੈਨ ਰਾਹੀਂ ਸੁਧਾਰਿਆ ਗਿਆ।',
      hi: 'कोचिंग पाठ में मशीनी अनुवाद की त्रुटियाँ थीं और सामाजिक अध्ययन गायब था; पुराने स्कैन से सुधारा गया।',
    },
    badge: 'verify',
  },
  {
    part: {
      en: 'Section 3: Expanded Topic Tree (Level B → I → A)',
      pa: 'ਭਾਗ 3: ਵਿਸਤ੍ਰਿਤ ਵਿਸ਼ਾ ਰੁੱਖ (ਪੱਧਰ B → I → A)',
      hi: 'अनुभाग 3: विस्तारित विषय वृक्ष (स्तर B → I → A)',
    },
    source: {
      en: 'Curriculum expansion from standard Punjabi, Hindi, English grammar & Class 9–10 PSEB/NCERT textbooks',
      pa: 'ਮਿਆਰੀ ਪੰਜਾਬੀ, ਹਿੰਦੀ, ਅੰਗਰੇਜ਼ੀ ਵਿਆਕਰਨ ਅਤੇ ਜਮਾਤ 9–10 PSEB/NCERT ਕਿਤਾਬਾਂ ਤੋਂ ਵਿਸਤਾਰ',
      hi: 'मानक पंजाबी, हिंदी, अंग्रेज़ी व्याकरण और कक्षा 9–10 PSEB/NCERT पाठ्यपुस्तकों से विस्तार',
    },
    trust: {
      en: 'Draft teaching breakdown. Validated against the 96 archival Paper B headings and Paper A Punjabi syllabus.',
      pa: 'ਡਰਾਫਟ ਅਧਿਐਨ ਵੰਡ। ਪੇਪਰ B ਦੇ 96 ਸਿਰਲੇਖਾਂ ਅਤੇ ਪੇਪਰ A ਪੰਜਾਬੀ ਸਿਲੇਬਸ ਨਾਲ ਮਿਲਾਇਆ ਗਿਆ।',
      hi: 'ड्राफ्ट अध्ययन विभाजन। पेपर B के 96 शीर्षकों और पेपर A पंजाबी पाठ्यक्रम से मिलान किया गया।',
    },
    badge: 'draft',
  },
  {
    part: {
      en: 'Section 4: Past-Paper Analysis Method',
      pa: 'ਭਾਗ 4: ਪੁਰਾਣੇ ਪੇਪਰਾਂ ਦੇ ਵਿਸ਼ਲੇਸ਼ਣ ਦੀ ਵਿਧੀ',
      hi: 'अनुभाग 4: पिछले प्रश्नपत्रों के विश्लेषण की विधि',
    },
    source: {
      en: 'Method only — no fabricated question counts or AI memory recall allowed',
      pa: 'ਸਿਰਫ਼ ਵਿਧੀ — ਬਿਨਾਂ ਅਸਲ ਪੇਪਰਾਂ ਦੇ ਕੋਈ ਫ਼ੀਸਦੀ ਜਾਂ ਅੰਦਾਜ਼ਾ ਨਹੀਂ',
      hi: 'केवल विधि — बिना वास्तविक प्रश्नपत्रों के कोई प्रतिशत या अनुमान नहीं',
    },
    trust: {
      en: 'Never let an AI recall old ETT questions from memory. Tag only scanned official OMR papers & answer keys.',
      pa: 'ਕਦੇ ਵੀ AI ਨੂੰ ਯਾਦਦਾਸ਼ਤ ਤੋਂ ਪੁਰਾਣੇ ਸਵਾਲ ਨਾ ਬਣਾਉਣ ਦਿਓ। ਸਿਰਫ਼ ਅਧਿਕਾਰਤ OMR ਪੇਪਰ ਅਤੇ ਉੱਤਰ ਕੁੰਜੀਆਂ ਵਰਤੋ।',
      hi: 'कभी भी AI को स्मृति से पुराने प्रश्न न बनाने दें। केवल आधिकारिक OMR प्रश्नपत्र और उत्तर कुंजियाँ उपयोग करें।',
    },
    badge: 'method',
  },
  {
    part: {
      en: 'Sections 5–8: Prompts, Student Strategy, OMR Guide & Pipeline',
      pa: 'ਭਾਗ 5–8: ਪ੍ਰੌਂਪਟ, ਵਿਦਿਆਰਥੀ ਰਣਨੀਤੀ, OMR ਗਾਈਡ ਅਤੇ ਪਾਈਪਲਾਈਨ',
      hi: 'अनुभाग 5–8: प्रॉम्प्ट, छात्र रणनीति, OMR गाइड और पाइपलाइन',
    },
    source: {
      en: 'ExamSathi ETT Curriculum Architecture',
      pa: 'ExamSathi ETT ਪਾਠਕ੍ਰਮ ਡਿਜ਼ਾਈਨ',
      hi: 'ExamSathi ETT पाठ्यक्रम डिज़ाइन',
    },
    trust: {
      en: 'Active in ExamSathi with 14 complete trilingual B → I → A lessons, 60-second shortcuts & 150 ETT-scoped MCQs.',
      pa: '14 ਸੰਪੂਰਨ ਤਿੰਨ-ਭਾਸ਼ਾਈ ਪਾਠਾਂ, 60-ਸਕਿੰਟ ਸ਼ਾਰਟਕੱਟਾਂ ਅਤੇ 150 ETT ਸਵਾਲਾਂ ਨਾਲ ਸਰਗਰਮ।',
      hi: '14 संपूर्ण त्रिभाषी पाठों, 60-सेकंड शॉर्टकट और 150 ETT प्रश्नों के साथ सक्रिय।',
    },
    badge: 'ready',
  },
];

export const ETT_SOURCE_PROBLEMS: EttSourceProblem[] = [
  {
    id: 1,
    title: {
      en: 'Problem 1: Marks Do Not Add Up (100 Marks vs 200 Marks in Paper B)',
      pa: 'ਸਮੱਸਿਆ 1: ਅੰਕਾਂ ਦਾ ਜੋੜ ਮੇਲ ਨਹੀਂ ਖਾਂਦਾ (ਪੇਪਰ B ਵਿੱਚ 100 ਅੰਕ ਬਨਾਮ 200 ਅੰਕ)',
      hi: 'समस्या 1: अंकों का योग मेल नहीं खाता (पेपर B में 100 अंक बनाम 200 अंक)',
    },
    coachingClaim: {
      en: 'Coaching prose states "each paper has 100 questions for 100 marks (1 mark each)", while the table right below it lists Paper B as 100 questions for 200 marks (2 marks per question) + Paper A (100 marks) = 300 total.',
      pa: 'ਕੋਚਿੰਗ ਲੇਖ ਦੀ ਇਬਾਰਤ ਕਹਿੰਦੀ ਹੈ "ਹਰੇਕ ਪੇਪਰ ਵਿੱਚ 100 ਸਵਾਲ 100 ਅੰਕਾਂ ਦੇ ਹਨ (1 ਅੰਕ ਪ੍ਰਤੀ ਸਵਾਲ)", ਪਰ ਹੇਠਾਂ ਦਿੱਤੀ ਸਾਰਣੀ ਪੇਪਰ B ਨੂੰ 100 ਸਵਾਲ = 200 ਅੰਕ (2 ਅੰਕ ਪ੍ਰਤੀ ਸਵਾਲ) + ਪੇਪਰ A (100 ਅੰਕ) = ਕੁੱਲ 300 ਅੰਕ ਦਿਖਾਉਂਦੀ ਹੈ।',
      hi: 'कोचिंग लेख का पाठ कहता है "प्रत्येक पेपर में 100 प्रश्न 100 अंकों के हैं (1 अंक प्रति प्रश्न)", जबकि नीचे दी गई तालिका पेपर B को 100 प्रश्न = 200 अंक (2 अंक प्रति प्रश्न) + पेपर A (100 अंक) = कुल 300 अंक दिखाती है।',
    },
    archivalResolution: {
      en: 'Visual inspection of the 4-page 5994 archival PDF (SyllabusPaperB01_12_2022.pdf) confirms the subject headings explicitly state: Punjabi (40 Marks) + English (20 Marks) + Hindi (20 Marks) + General Science (40 Marks) + Social Science (40 Marks) + Mathematics (40 Marks) = 200 Marks across 100 questions (2 marks/question) in Paper B, while Paper A is 100 questions for 100 marks (1 mark/question). Both are stored in our per-year pattern schema.',
      pa: '5994 ਭਰਤੀ ਦੇ 4-ਪੰਨਿਆਂ ਦੇ ਪੁਰਾਣੇ PDF (SyllabusPaperB01_12_2022.pdf) ਦੀ ਜਾਂਚ ਤੋਂ ਪੁਸ਼ਟੀ ਹੁੰਦੀ ਹੈ ਕਿ ਪੇਪਰ B ਦੇ ਵਿਸ਼ਾ ਸਿਰਲੇਖ ਸਪੱਸ਼ਟ ਤੌਰ ਤੇ 200 ਅੰਕ ਦੱਸਦੇ ਹਨ: ਪੰਜਾਬੀ (40) + ਅੰਗਰੇਜ਼ੀ (20) + ਹਿੰਦੀ (20) + ਜਨਰਲ ਸਾਇੰਸ (40) + ਸਮਾਜਿਕ ਵਿਗਿਆਨ (40) + ਗਣਿਤ (40) = 200 ਅੰਕ (100 ਸਵਾਲ, 2 ਅੰਕ ਪ੍ਰਤੀ ਸਵਾਲ), ਜਦਕਿ ਪੇਪਰ A 100 ਸਵਾਲ = 100 ਅੰਕ ਹੈ।',
      hi: '5994 भर्ती के 4-पृष्ठ के पुराने PDF (SyllabusPaperB01_12_2022.pdf) के निरीक्षण से पुष्टि होती है कि पेपर B के विषय शीर्षक स्पष्ट रूप से 200 अंक दर्शाते हैं: पंजाबी (40) + अंग्रेज़ी (20) + हिंदी (20) + सामान्य विज्ञान (40) + सामाजिक विज्ञान (40) + गणित (40) = 200 अंक (100 प्रश्न, 2 अंक प्रति प्रश्न), जबकि पेपर A 100 प्रश्न = 100 अंक है।',
    },
    status: 'resolved-with-archive',
  },
  {
    id: 2,
    title: {
      en: 'Problem 2: Social Studies is in the Exam Pattern (20 Qs / 40 Marks) but Omitted from Coaching Topic Lists',
      pa: 'ਸਮੱਸਿਆ 2: ਸਮਾਜਿਕ ਸਿੱਖਿਆ (20 ਸਵਾਲ / 40 ਅੰਕ) ਪੈਟਰਨ ਵਿੱਚ ਹੈ ਪਰ ਕੋਚਿੰਗ ਸਿਲੇਬਸ ਸੂਚੀ ਵਿੱਚੋਂ ਗਾਇਬ ਹੈ',
      hi: 'समस्या 2: सामाजिक अध्ययन (20 प्रश्न / 40 अंक) पैटर्न में है पर कोचिंग पाठ्यक्रम सूची से गायब है',
    },
    coachingClaim: {
      en: 'The coaching article pattern table allocates 20 questions (40 marks = 20% of merit) to Social Studies, yet its syllabus section only lists Punjabi, English, Hindi, Mathematics and General Science.',
      pa: 'ਕੋਚਿੰਗ ਲੇਖ ਦੀ ਸਾਰਣੀ ਸਮਾਜਿਕ ਸਿੱਖਿਆ ਨੂੰ 20 ਸਵਾਲ (40 ਅੰਕ = ਮੈਰਿਟ ਦਾ 20%) ਦਿੰਦੀ ਹੈ, ਪਰ ਸਿਲੇਬਸ ਸੂਚੀ ਵਿੱਚ ਸਿਰਫ਼ ਪੰਜਾਬੀ, ਅੰਗਰੇਜ਼ੀ, ਹਿੰਦੀ, ਗਣਿਤ ਅਤੇ ਸਾਇੰਸ ਹੀ ਦਿੱਤੇ ਹਨ।',
      hi: 'कोचिंग लेख की तालिका सामाजिक अध्ययन को 20 प्रश्न (40 अंक = मेरिट का 20%) देती है, किंतु पाठ्यक्रम सूची में केवल पंजाबी, अंग्रेज़ी, हिंदी, गणित और विज्ञान ही दिए हैं।',
    },
    archivalResolution: {
      en: 'Pages 2–3 of the archival 5994 Paper B PDF contain all 28 official Social Science headings across 4 sub-branches: Geography (8 units), Economics (4 units), History of Punjab (9 units from physical features & Guru Nanak Dev Ji to 1947 struggle), and Civics (7 units). We have mapped all 28 units and authored a complete B → I → A Social Studies module.',
      pa: 'ਪੁਰਾਣੇ 5994 ਪੇਪਰ B PDF ਦੇ ਪੰਨਾ 2–3 ਉੱਤੇ ਸਮਾਜਿਕ ਵਿਗਿਆਨ ਦੇ ਸਾਰੇ 28 ਅਧਿਕਾਰਤ ਸਿਰਲੇਖ ਮੌਜੂਦ ਹਨ: ਭੂਗੋਲ (8 ਇਕਾਈਆਂ), ਅਰਥਸ਼ਾਸਤਰ (4 ਇਕਾਈਆਂ), ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ (9 ਇਕਾਈਆਂ) ਅਤੇ ਨਾਗਰਿਕ ਸ਼ਾਸਤਰ (7 ਇਕਾਈਆਂ)। ਇਹ ਸਾਰੇ 28 ਸਿਰਲੇਖ ਹੇਠਾਂ ਦਰਜ ਕੀਤੇ ਗਏ ਹਨ।',
      hi: 'पुराने 5994 पेपर B PDF के पृष्ठ 2–3 पर सामाजिक विज्ञान के सभी 28 आधिकारिक शीर्षक मौजूद हैं: भूगोल (8 इकाइयाँ), अर्थशास्त्र (4 इकाइयाँ), पंजाब का इतिहास (9 इकाइयाँ) और नागरिक शास्त्र (7 इकाइयाँ)। ये सभी 28 शीर्षक नीचे मैप किए गए हैं।',
    },
    status: 'resolved-with-archive',
  },
  {
    id: 3,
    title: {
      en: 'Problem 3: Machine-Translated & Corrupted Syllabus Text in Coaching Articles',
      pa: 'ਸਮੱਸਿਆ 3: ਕੋਚਿੰਗ ਵੈੱਬਸਾਈਟਾਂ ਉੱਤੇ ਮਸ਼ੀਨੀ ਅਨੁਵਾਦ ਨਾਲ ਵਿਗੜਿਆ ਸਿਲੇਬਸ ਟੈਕਸਟ',
      hi: 'समस्या 3: कोचिंग वेबसाइटों पर मशीनी अनुवाद से विकृत पाठ्यक्रम पाठ',
    },
    coachingClaim: {
      en: 'Coaching summaries contain garbled English terms such as "Uptasha", "Metter", "Two Exponential Equations", and "Directional Numerals" caused by running Google Translate on Gurmukhi/Hindi PDFs.',
      pa: 'ਕੋਚਿੰਗ ਲੇਖਾਂ ਵਿੱਚ ਗੁਰਮੁਖੀ PDF ਦੇ ਮਸ਼ੀਨੀ ਅਨੁਵਾਦ ਕਾਰਨ "Uptasha", "Metter", "Two Exponential Equations" ਅਤੇ "Directional Numerals" ਵਰਗੇ ਗਲਤ ਸ਼ਬਦ ਲਿਖੇ ਹੋਏ ਹਨ।',
      hi: 'कोचिंग लेखों में गुरुमुखी PDF के मशीनी अनुवाद के कारण "Uptasha", "Metter", "Two Exponential Equations" और "Directional Numerals" जैसे विकृत शब्द लिखे हैं।',
    },
    archivalResolution: {
      en: 'Decoded every corrupted term against the original Gurmukhi/Hindi/English NCERT & PSEB syllabus headings (see the Machine-Translation Decoder Table below).',
      pa: 'ਹਰੇਕ ਵਿਗੜੇ ਸ਼ਬਦ ਨੂੰ ਅਸਲ ਗੁਰਮੁਖੀ ਅਤੇ PSEB/NCERT ਪਾਠਕ੍ਰਮ ਦੇ ਸਹੀ ਸ਼ਬਦਾਂ ਨਾਲ ਸੁਧਾਰਿਆ ਗਿਆ ਹੈ (ਹੇਠਾਂ ਡੀਕੋਡਰ ਸਾਰਣੀ ਦੇਖੋ)।',
      hi: 'प्रत्येक विकृत शब्द को मूल गुरुमुखी और PSEB/NCERT पाठ्यक्रम की सही शब्दावली से सुधारा गया है (नीचे डिकोडर तालिका देखें)।',
    },
    status: 'resolved-with-archive',
  },
  {
    id: 4,
    title: {
      en: 'Problem 4: Missing Operational Details (Paper A Qualifying Threshold, Negative Marking & Same-Day Schedule)',
      pa: 'ਸਮੱਸਿਆ 4: ਅਧੂਰੀਆਂ ਸ਼ਰਤਾਂ (ਪੇਪਰ A ਦੇ ਪਾਸ ਅੰਕ, ਨੈਗੇਟਿਵ ਮਾਰਕਿੰਗ ਅਤੇ ਪੇਪਰਾਂ ਦਾ ਸਮਾਂ)',
      hi: 'समस्या 4: अधूरी शर्तें (पेपर A के उत्तीर्णांक, नकारात्मक अंकन और परीक्षा कार्यक्रम)',
    },
    coachingClaim: {
      en: 'Coaching summary omits the qualifying percentage for Paper A, whether negative marking applies, and whether Paper A and Paper B are held on the same day.',
      pa: 'ਕੋਚਿੰਗ ਸਾਰ ਵਿੱਚ ਪੇਪਰ A ਦੇ ਘੱਟੋ-ਘੱਟ ਪਾਸ ਅੰਕ, ਨੈਗੇਟਿਵ ਮਾਰਕਿੰਗ ਅਤੇ ਦੋਵੇਂ ਪੇਪਰ ਇੱਕੋ ਦਿਨ ਹੋਣ ਬਾਰੇ ਜਾਣਕਾਰੀ ਨਹੀਂ ਦਿੱਤੀ ਗਈ।',
      hi: 'कोचिंग सारांश में पेपर A के न्यूनतम उत्तीर्णांक, नकारात्मक अंकन और दोनों पेपर एक ही दिन होने के बारे में जानकारी नहीं दी गई है।',
    },
    archivalResolution: {
      en: 'In the 5994 recruitment rules: (a) Paper A (Punjabi) requires 50% qualifying marks (50/100) for all categories and its marks are NOT added to final merit; (b) Negative marking was 0 (none) in 5994 ETT OMR exams; (c) Paper A (morning shift) and Paper B (afternoon shift) are typically scheduled on the same weekend/day. Always re-verify on the new advertisement PDF.',
      pa: '5994 ਭਰਤੀ ਨਿਯਮਾਂ ਅਨੁਸਾਰ: (a) ਪੇਪਰ A (ਪੰਜਾਬੀ) ਵਿੱਚ ਘੱਟੋ-ਘੱਟ 50% ਅੰਕ (100 ਵਿੱਚੋਂ 50) ਲਾਜ਼ਮੀ ਹਨ ਅਤੇ ਇਸ ਦੇ ਅੰਕ ਮੈਰਿਟ ਵਿੱਚ ਨਹੀਂ ਜੁੜਦੇ; (b) 5994 ਭਰਤੀ ਵਿੱਚ ਕੋਈ ਨੈਗੇਟਿਵ ਮਾਰਕਿੰਗ (0) ਨਹੀਂ ਸੀ; (c) ਪੇਪਰ A ਅਤੇ ਪੇਪਰ B ਆਮ ਤੌਰ ਤੇ ਸਵੇਰ ਅਤੇ ਸ਼ਾਮ ਦੀਆਂ ਸ਼ਿਫਟਾਂ ਵਿੱਚ ਲਏ ਜਾਂਦੇ ਹਨ। ਨਵੇਂ ਇਸ਼ਤਿਹਾਰ ਵਿੱਚ ਇਸ ਦੀ ਦੁਬਾਰਾ ਪੁਸ਼ਟੀ ਕਰੋ।',
      hi: '5994 भर्ती नियमों के अनुसार: (a) पेपर A (पंजाबी) में न्यूनतम 50% अंक (100 में से 50) अनिवार्य हैं और इसके अंक मेरिट में नहीं जुड़ते; (b) 5994 भर्ती में कोई नकारात्मक अंकन (0) नहीं था; (c) पेपर A और पेपर B सामान्यतः सुबह और दोपहर की पाली में आयोजित होते हैं। नए विज्ञापन में पुनः पुष्टि करें।',
    },
    status: 'verify-on-next-notification',
  },
];

export const ETT_CORRUPTED_TEXT_DECODER: EttCorruptedTermRow[] = [
  {
    corruptedCoachingText: '"Uptasha"',
    subject: { en: 'Paper A: Punjabi', pa: 'ਪੇਪਰ A: ਪੰਜਾਬੀ', hi: 'पेपर A: पंजाबी' },
    authenticGurmukhiTerm: 'ਉਪਭਾਸ਼ਾ (ਉਪਭਾਸ਼ਾਵਾਂ)',
    authenticHindiTerm: 'उपभाषा (बोलियाँ)',
    correctEnglishTerm: 'Sub-dialects / Regional Dialects of Punjabi (Majhi, Malwai, Doabi, Puadhi)',
    whyCorrupted: {
      en: 'OCR misread Gurmukhi "ਉਪਭਾਸ਼ਾ" (Upbhasha) as "Uptasha" due to the loop of ਭ (bh) resembling ਤ (t).',
      pa: 'ਗੁਰਮੁਖੀ ਸ਼ਬਦ "ਉਪਭਾਸ਼ਾ" ਨੂੰ OCR ਨੇ ਗਲਤੀ ਨਾਲ "Uptasha" ਪੜ੍ਹ ਲਿਆ।',
      hi: 'गुरुमुखी शब्द "ਉਪਭਾਸ਼ਾ" (उपभाषा) को OCR ने भ्रमवश "Uptasha" पढ़ लिया।',
    },
    mappedTopicId: 'ett-paper-a-punjabi-script-phonetics-dialects',
  },
  {
    corruptedCoachingText: '"Metter"',
    subject: { en: 'Paper B: General Science', pa: 'ਪੇਪਰ B: ਜਨਰਲ ਸਾਇੰਸ', hi: 'पेपर B: सामान्य विज्ञान' },
    authenticGurmukhiTerm: 'ਸਾਡੇ ਆਲੇ-ਦੁਆਲੇ ਦਾ ਪਦਾਰਥ (Matter)',
    authenticHindiTerm: 'हमारे आस-पास के पदार्थ (Matter)',
    correctEnglishTerm: 'Matter in Our Surroundings (States of Matter — Class 9 Science Ch. 1)',
    whyCorrupted: {
      en: 'Phonetic transliteration of English "Matter" written in Gurmukhi ("ਮੈਟਰ") back into English as "Metter".',
      pa: 'ਗੁਰਮੁਖੀ ਵਿੱਚ ਲਿਖੇ "ਮੈਟਰ" (ਪਦਾਰਥ) ਦਾ ਗਲਤ ਅੰਗਰੇਜ਼ੀ ਸਪੈਲਿੰਗ "Metter"।',
      hi: 'गुरुमुखी में लिखे "ਮੈਟਰ" (पदार्थ) की गलत अंग्रेज़ी वर्तनी "Metter"।',
    },
    mappedTopicId: 'ett-science-acids',
  },
  {
    corruptedCoachingText: '"Two Exponential Equations"',
    subject: { en: 'Paper B: Mathematics', pa: 'ਪੇਪਰ B: ਗਣਿਤ', hi: 'पेपर B: गणित' },
    authenticGurmukhiTerm: 'ਦੋ ਚਲਾਂ ਵਾਲੇ ਰੇਖੀ ਸਮੀਕਰਨ / ਦੋ ਘਾਤੀ ਸਮੀਕਰਨ',
    authenticHindiTerm: 'दो चरों वाले रैखिक समीकरण / द्विघात समीकरण',
    correctEnglishTerm: 'Linear Equations in Two Variables & Quadratic Equations (Class 10 Maths Ch. 3 & Ch. 4)',
    whyCorrupted: {
      en: 'Machine translation of Gurmukhi "ਦੋ ਘਾਤੀ ਸਮੀਕਰਨ" (Do Ghati Samikaran = Quadratic Equations, where "Ghat" means power/exponent) into "Two Exponential Equations"!',
      pa: 'ਗੁਰਮੁਖੀ ਦੇ "ਦੋ ਘਾਤੀ ਸਮੀਕਰਨ" (Quadratic Equations) ਵਿੱਚ "ਘਾਤ" ਦਾ ਮਸ਼ੀਨੀ ਅਨੁਵਾਦ "Exponential" ਕਰ ਦਿੱਤਾ ਗਿਆ!',
      hi: 'गुरुमुखी के "ਦੋ ਘਾਤੀ ਸਮੀਕਰਨ" (द्विघात समीकरण) में "घात" का मशीनी अनुवाद "Exponential" कर दिया गया!',
    },
    mappedTopicId: 'ett-math-4',
  },
  {
    corruptedCoachingText: '"Directional Numerals"',
    subject: { en: 'Paper B: Mathematics', pa: 'ਪੇਪਰ B: ਗਣਿਤ', hi: 'पेपर B: गणित' },
    authenticGurmukhiTerm: 'ਨਿਰਦੇਸ਼ ਅੰਕ ਜਿਆਮਿਤੀ',
    authenticHindiTerm: 'निर्देशांक ज्यामिति',
    correctEnglishTerm: 'Coordinate Geometry (Class 9 Ch. 3 & Class 10 Ch. 7)',
    whyCorrupted: {
      en: 'Word-by-word machine translation of "ਨਿਰਦੇਸ਼" (Nirdesh = Direction) + "ਅੰਕ" (Ank = Numeral) instead of "Coordinate Geometry"!',
      pa: '"ਨਿਰਦੇਸ਼ ਅੰਕ ਜਿਆਮਿਤੀ" (Coordinate Geometry) ਵਿੱਚ "ਨਿਰਦੇਸ਼" (Direction) + "ਅੰਕ" (Numeral) ਦਾ ਸ਼ਬਦशः ਮਸ਼ੀਨੀ ਅਨੁਵਾਦ "Directional Numerals" ਕਰ ਦਿੱਤਾ ਗਿਆ!',
      hi: '"निर्देशांक ज्यामिति" में "निर्देश" (Direction) + "अंक" (Numeral) का शब्दशः मशीनी अनुवाद "Directional Numerals" कर दिया गया!',
    },
    mappedTopicId: 'ett-math-11',
  },
  {
    corruptedCoachingText: '"Causal Forms"',
    subject: { en: 'Paper A: Punjabi', pa: 'ਪੇਪਰ A: ਪੰਜਾਬੀ', hi: 'पेपर A: पंजाबी' },
    authenticGurmukhiTerm: 'ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ (ਪਹਿਲੀ ਤੇ ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ)',
    authenticHindiTerm: 'प्रेरणार्थक क्रिया (प्रथम एवं द्वितीय प्रेरणार्थक)',
    correctEnglishTerm: 'Causative Verbs (e.g., ਪੜ੍ਹਨਾ → ਪੜ੍ਹਾਉਣਾ → ਪੜ੍ਹਵਾਉਣਾ)',
    whyCorrupted: {
      en: 'Translated "ਪ੍ਰੇਰਨਾਰਥਕ ਰੂਪ" as "Causal forms" without explaining First and Second Causative Verb inflections in Punjabi grammar.',
      pa: '"ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ ਰੂਪ" ਨੂੰ ਸਿੱਧਾ "Causal forms" ਲਿਖ ਦਿੱਤਾ ਗਿਆ।',
      hi: '"प्रेरणार्थक क्रिया रूप" को अस्पष्ट रूप से "Causal forms" लिख दिया गया।',
    },
    mappedTopicId: 'ett-paper-a-punjabi-grammar-vocabulary-idioms',
  },
  {
    corruptedCoachingText: '"Inflecting and Uninflected Word Classes"',
    subject: { en: 'Paper B: Hindi', pa: 'ਪੇਪਰ B: ਹਿੰਦੀ', hi: 'पेपर B: हिंदी' },
    authenticGurmukhiTerm: 'ਵਿਕਾਰੀ ਅਤੇ ਅਵਿਕਾਰੀ (ਅਵਯ) ਸ਼ਬਦ',
    authenticHindiTerm: 'विकारी और अविकारी (अव्यय) शब्द',
    correctEnglishTerm: 'Vikari (Declinable: संज्ञा, सर्वनाम, विशेषण, क्रिया) & Avikari (Indeclinable: क्रियाविशेषण, संबंधबोधक, समुच्चयबोधक, विस्मयादिबोधक)',
    whyCorrupted: {
      en: 'Academic English paraphrase of standard Hindi grammar headings "विकारी शब्द" and "अविकारी शब्द".',
      pa: 'ਹਿੰਦੀ ਵਿਆਕਰਨ ਦੇ "ਵਿਕਾਰੀ ਸ਼ਬਦ" ਅਤੇ "ਅਵਿਕਾਰੀ ਸ਼ਬਦ" ਦਾ ਅੰਗਰੇਜ਼ੀ ਅਨੁਵਾਦ।',
      hi: 'हिंदी व्याकरण के मानक शीर्षकों "विकारी शब्द" और "अविकारी शब्द" का अंग्रेज़ी अनुवाद।',
    },
    mappedTopicId: 'ett-hindi-4',
  },
];

export const ETT_EXAM_PATTERN_JSON = {
  exam: 'Punjab ETT Teacher Recruitment (ERB Punjab)',
  recruitment_reference: '5994 Posts (Archival Baseline) / 2026 Cycle',
  year: 2026,
  mode: 'Offline OMR-based objective MCQ test',
  papers: [
    {
      id: 'A',
      name: 'Paper A — Compulsory Punjabi Language (Qualifying)',
      qualifying: true,
      qualifying_marks_threshold: '50% (50 out of 100 marks — verify on latest notice)',
      counted_in_merit: false,
      questions: 100,
      marks: 100,
      marks_per_question: 1,
      minutes: 100,
      sections: [{ subject: 'Punjabi Language, Script & Grammar', q: 100, marks: 100 }],
    },
    {
      id: 'B',
      name: 'Paper B — Subject Merit Paper',
      qualifying: false,
      counted_in_merit: true,
      questions: 100,
      marks: 200,
      marks_per_question: 2,
      coaching_text_discrepancy_note:
        'Coaching prose states 100 marks (1 mark/Q), whereas coaching table & archival PDF (SyllabusPaperB01_12_2022.pdf) show 200 marks (2 marks/Q).',
      minutes: 100,
      sections: [
        { subject: 'Punjabi', q: 20, marks: 40, share_percent: 20 },
        { subject: 'English', q: 10, marks: 20, share_percent: 10 },
        { subject: 'Hindi', q: 10, marks: 20, share_percent: 10 },
        { subject: 'General Science', q: 20, marks: 40, share_percent: 20 },
        { subject: 'Social Studies', q: 20, marks: 40, share_percent: 20 },
        { subject: 'Mathematics', q: 20, marks: 40, share_percent: 20 },
      ],
    },
  ],
  negative_marking: '0 in 5994 archival recruitment — verify on upcoming official notification',
  source: 'https://educationrecruitmentboard.com/ETT5994/ (Archival Mirror: SyllabusPaperB01_12_2022.pdf)',
  verified: false,
};

export const ETT_BLUEPRINT_MODULES: EttBlueprintModule[] = [
  // ======================== PAPER A: QUALIFYING PUNJABI ========================
  {
    topicId: 'ett-paper-a-punjabi-script-phonetics-dialects',
    paper: 'Paper A (Qualifying)',
    subject: {
      en: 'Paper A: Punjabi Language & Script',
      pa: 'ਪੇਪਰ A: ਪੰਜਾਬੀ ਭਾਸ਼ਾ, ਉਪਭਾਸ਼ਾਵਾਂ ਅਤੇ ਗੁਰਮੁਖੀ ਲਿਪੀ',
      hi: 'पेपर A: पंजाबी भाषा, उपभाषाएँ और गुरुमुखी लिपि',
    },
    marksWeight: 'Paper A: ~35–40 of 100 Marks (Qualifying Gate)',
    title: {
      en: 'Punjabi I: Language, Dialects (Upbhasha), Gurmukhi Script, Phonetics & Standard Spelling (Level B → I → A)',
      pa: 'ਪੰਜਾਬੀ I: ਭਾਸ਼ਾ, ਉਪਭਾਸ਼ਾਵਾਂ (ਮਾਝੀ, ਮਲਵਈ, ਦੁਆਬੀ, ਪੁਆਧੀ), ਗੁਰਮੁਖੀ ਲਿਪੀ, ਧੁਨੀ ਬੋਧ ਅਤੇ ਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ (Level B → I → A)',
      hi: 'पंजाबी I: भाषा, उपभाषाएँ (माझी, मलवई, दोआबी, पुआधी), गुरुमुखी लिपि, ध्वनि बोध और शुद्ध वर्तनी (Level B → I → A)',
    },
    officialHeadingsCovered: {
      en: [
        'Language and dialects ("Uptasha" = ਉਪਭਾਸ਼ਾ: Majhi, Malwai, Doabi, Puadhi)',
        'Script and Gurmukhi (35 Akhari + 6 Navin Toli = 41 letters)',
        'Phonemic awareness: 3 Vowel Bearers (ੳ, ਅ, ੲ), 10 Vowel Phonemes, 10 Laga-Matra, 3 Lagakhar & 3 Dutt Akhar',
        'Correct Gurmukhi spelling rules (ਸ਼ੁੱਧ-ਅਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ)',
      ],
      pa: [
        'ਭਾਸ਼ਾ ਅਤੇ ਪੰਜਾਬੀ ਦੀਆਂ ਉਪਭਾਸ਼ਾਵਾਂ (ਮਾਝੀ, ਮਲਵਈ, ਦੁਆਬੀ, ਪੁਆਧੀ)',
        'ਗੁਰਮੁਖੀ ਲਿਪੀ (35 ਅੱਖਰੀ + 6 ਨਵੀਨ ਟੋਲੀ = 41 ਅੱਖਰ)',
        'ਧੁਨੀ ਬੋਧ: 3 ਸਵਰ ਵਾਹਕ (ੳ, ਅ, ੲ), 10 ਸਵਰ ਧੁਨੀਆਂ, 10 ਲਗਾਂ, 3 ਲਗਾਖਰ (ਬਿੰਦੀ, ਟਿੱਪੀ, ਅੱਧਕ) ਅਤੇ 3 ਦੁੱਤ ਅੱਖਰ (ਹ, ਰ, ਵ)',
        'ਸ਼ੁੱਧ-ਅਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ ਨਿਯਮ',
      ],
      hi: [
        'भाषा और पंजाबी की उपभाषाएँ (माझी, मलवई, दोआबी, पुआधी)',
        'गुरुमुखी लिपि (35 अक्खरी + 6 नवीन टोली = 41 वर्ण)',
        'ध्वनि बोध: 3 स्वर वाहक (ੳ, ਅ, ੲ), 10 स्वर ध्वनियाँ, 10 लगां, 3 लगाखर (बिंदी, टिप्पी, अद्धक) और 3 दुत्त अक्खर (ਹ, ਰ, ਵ)',
        'शुद्ध-अशुद्ध वर्तनी नियम',
      ],
    },
    levelBreakdown: {
      B: {
        en: '41 Gurmukhi letters across 8 Vargs, 3 vowel bearers (ੳ, ਅ, ੲ), 10 Laga-Matra names & signs.',
        pa: '8 ਵਰਗਾਂ ਵਿੱਚ 41 ਗੁਰਮੁਖੀ ਅੱਖਰ, 3 ਸਵਰ ਵਾਹਕ (ੳ, ਅ, ੲ), 10 ਲਗਾਂ ਦੇ ਨਾਂ ਅਤੇ ਚਿੰਨ੍ਹ।',
        hi: '8 वर्गों में 41 गुरुमुखी वर्ण, 3 स्वर वाहक (ੳ, ਅ, ੲ), 10 मात्राओं के नाम व चिह्न।',
      },
      I: {
        en: 'District-wise map of Majhi (4 districts), Doabi (4), Malwai (15) & Puadhi; 5 nasal consonants (ਙ, ਞ, ਣ, ਨ, ਮ); Bindi (6 lagas) vs Tippi (4 lagas) vs Addhak (3 lagas).',
        pa: 'ਮਾਝੀ (4 ਜ਼ਿਲ੍ਹੇ), ਦੁਆਬੀ (4), ਮਲਵਈ (15) ਅਤੇ ਪੁਆਧੀ ਦਾ ਖੇਤਰ; 5 ਅਨੁਨਾਸਿਕ ਵਿਅੰਜਨ; ਬਿੰਦੀ (6 ਲਗਾਂ), ਟਿੱਪੀ (4 ਲਗਾਂ) ਅਤੇ ਅੱਧਕ (3 ਲਗਾਂ)।',
        hi: 'माझी (4 ज़िले), दोआबी (4), मलवई (15) और पुआधी का क्षेत्र; 5 अनुनासिक व्यंजन; बिंदी (6 मात्राएँ), टिप्पी (4 मात्राएँ) और अद्धक (3 मात्राएँ)।',
      },
      A: {
        en: 'Tonal consonants (ਘ, ਝ, ਢ, ਧ, ਭ) in Punjabi; Laga compatibility exceptions with ੳ-ਅ-ੲ; tricky Shudh-Ashudh orthography rules.',
        pa: 'ਪੰਜਾਬੀ ਦੀਆਂ ਸੁਰ-ਯੁਕਤ ਧੁਨੀਆਂ (ਘ, ਝ, ਢ, ਧ, ਭ); ੳ-ਅ-ੲ ਨਾਲ ਲਗਾਂ ਦੇ ਨਿਯਮ ਅਤੇ ਔਖੇ ਸ਼ੁੱਧ-ਅਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ।',
        hi: 'पंजाबी की सुर-युक्त ध्वनियाँ (ਘ, ਝ, ਢ, ਧ, ਭ); ੳ-ਅ-ੲ के साथ मात्राओं के नियम और कठिन शुद्ध-अशुद्ध शब्द।',
      },
    },
    sixtySecondShortcut: {
      en: '3–4–3 Vowel Bearer Rule: ੳ takes 3 round/lower lagas (ਔਂਕੜ, ਦੁਲੈਂਕੜ, ਹੋੜਾ); ਅ takes 4 open lagas (ਮੁਕਤਾ, ਕੰਨਾ, ਦੁਲਾਵਾਂ, ਕਨੌੜਾ); ੲ takes 3 front lagas (ਸਿਹਾਰੀ, ਬਿਹਾਰੀ, ਲਾਂ). Total = 3 + 4 + 3 = 10!',
      pa: '3–4–3 ਸਵਰ ਵਾਹਕ ਟ੍ਰਿਕ: ੳ ਨਾਲ 3 ਲਗਾਂ (ਔਂਕੜ, ਦੁਲੈਂਕੜ, ਹੋੜਾ), ਅ ਨਾਲ 4 ਲਗਾਂ (ਮੁਕਤਾ, ਕੰਨਾ, ਦੁਲਾਵਾਂ, ਕਨੌੜਾ), ੲ ਨਾਲ 3 ਲਗਾਂ (ਸਿਹਾਰੀ, ਬਿਹਾਰੀ, ਲਾਂ) ਲੱਗਦੀਆਂ ਹਨ (3+4+3 = 10)!',
      hi: '3–4–3 स्वर वाहक ट्रिक: ੳ के साथ 3 मात्राएँ (औंकड़, दुलैंकड़, होड़ा), ਅ के साथ 4 मात्राएँ (मुक्ता, कन्ना, दुलावां, कनौड़ा), ੲ के साथ 3 मात्राएँ (सिहारी, बिहारी, लां) लगती हैं (3+4+3 = 10)!',
    },
    classMapping: 'PSEB Punjabi Vyakaran (Classes 6–10)',
    questionCount: 10,
  },
  {
    topicId: 'ett-paper-a-punjabi-grammar-vocabulary-idioms',
    paper: 'Paper A (Qualifying)',
    subject: {
      en: 'Paper A: Punjabi Grammar & Vocabulary',
      pa: 'ਪੇਪਰ A: ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਅਤੇ ਸ਼ਬਦ ਭੰਡਾਰ',
      hi: 'पेपर A: पंजाबी व्याकरण और शब्द भंडार',
    },
    marksWeight: 'Paper A: ~60–65 of 100 Marks (Qualifying Gate)',
    title: {
      en: 'Punjabi II: 8 Word Classes, Word Formation, Vocabulary, Causative Verbs & Punctuation (Level B → I → A)',
      pa: 'ਪੰਜਾਬੀ II: 8 ਸ਼ਬਦ ਭੇਦ, ਅਗੇਤਰ-ਪਿਛੇਤਰ, ਸ਼ਬਦ ਭੰਡਾਰ, ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ ਅਤੇ ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ (Level B → I → A)',
      hi: 'पंजाबी II: 8 शब्द भेद, उपसर्ग-प्रत्यय, शब्द भंडार, प्रेरणार्थक क्रिया और विराम चिह्न (Level B → I → A)',
    },
    officialHeadingsCovered: {
      en: [
        'Word knowledge: Noun (5), Pronoun (6), Adjective (5), Verb, Adverb (8), Conjunction, Postposition, Interjection',
        'Word formation: Root words (ਮੂਲ ਸ਼ਬਦ), Prefixes (ਅਗੇਤਰ), Suffixes (ਪਿਛੇਤਰ) & Compound words (ਸਮਾਸੀ ਸ਼ਬਦ)',
        'Vocabulary: Synonyms, Antonyms, Polysemous words (ਬਹੁ-ਅਰਥਕ) & One-word substitution (ਬਹੁਤੇ ਸ਼ਬਦਾਂ ਦੀ ਥਾਂ ਇੱਕ ਸ਼ਬਦ)',
        'Grammar: Gender, Number, Tense, Causative forms (ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ) & 13 Punctuation marks (ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ)',
      ],
      pa: [
        'ਸ਼ਬਦ ਬੋਧ: ਨਾਂਵ (5), ਪੜਨਾਂਵ (6), ਵਿਸ਼ੇਸ਼ਣ (5), ਕਿਰਿਆ, ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ (8), ਸੰਬੰਧਕ, ਯੋਜਕ, ਵਿਸਮਕ',
        'ਸ਼ਬਦ ਰਚਨਾ: ਮੂਲ ਸ਼ਬਦ, ਅਗੇਤਰ, ਪਿਛੇਤਰ ਅਤੇ ਸਮਾਸੀ ਸ਼ਬਦ',
        'ਸ਼ਬਦ ਭੰਡਾਰ: ਸਮਾਨਾਰਥਕ, ਵਿਰੋਧਾਰਥਕ, ਬਹੁ-ਅਰਥਕ ਸ਼ਬਦ ਅਤੇ ਬਹੁਤੇ ਸ਼ਬਦਾਂ ਦੀ ਥਾਂ ਇੱਕ ਸ਼ਬਦ',
        'ਵਿਆਕਰਨ: ਲਿੰਗ, ਵਚਨ, ਕਾਲ, ਪਹਿਲੀ ਤੇ ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ ਅਤੇ 13 ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ',
      ],
      hi: [
        'शब्द बोध: संज्ञा (5), सर्वनाम (6), विशेषण (5), क्रिया, क्रियाविशेषण (8), संबंधक, योजक, विस्मयादिबोधक',
        'शब्द रचना: मूल शब्द, उपसर्ग (अगेतर), प्रत्यय (पिछेतर) और सामासिक शब्द',
        'शब्द भंडार: समानार्थक, विपरीतार्थक, अनेकार्थी शब्द और वाक्यांश के लिए एक शब्द',
        'व्याकरण: लिंग, वचन, काल, प्रथम व द्वितीय प्रेरणार्थक क्रिया और 13 विराम चिह्न',
      ],
    },
    levelBreakdown: {
      B: {
        en: 'Identifying 5 types of Noun, 6 types of Pronoun, Gender/Number rules, common Synonyms & Antonyms.',
        pa: 'ਨਾਂਵ ਦੀਆਂ 5 ਕਿਸਮਾਂ, ਪੜਨਾਂਵ ਦੀਆਂ 6 ਕਿਸਮਾਂ, ਲਿੰਗ/ਵਚਨ ਨਿਯਮ, ਸਮਾਨਾਰਥਕ ਅਤੇ ਵਿਰੋਧਾਰਥਕ ਸ਼ਬਦ।',
        hi: 'संज्ञा के 5 भेद, सर्वनाम के 6 भेद, लिंग/वचन नियम, समानार्थक और विपरीतार्थक शब्द।',
      },
      I: {
        en: 'First vs Second Causative Verbs (ਪੜ੍ਹਨਾ → ਪੜ੍ਹਾਉਣਾ → ਪੜ੍ਹਵਾਉਣਾ); Complete vs Incomplete Postpositions (ਪੂਰਨ/ਅਪੂਰਨ ਸੰਬੰਧਕ); Prefix/Suffix root extraction.',
        pa: 'ਪਹਿਲੀ ਬਨਾਮ ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ (ਪੜ੍ਹਨਾ → ਪੜ੍ਹਾਉਣਾ → ਪੜ੍ਹਵਾਉਣਾ); ਪੂਰਨ ਅਤੇ ਅਪੂਰਨ ਸੰਬੰਧਕ; ਅਗੇਤਰ-ਪਿਛੇਤਰ ਨਿਖੇੜ।',
        hi: 'प्रथम बनाम द्वितीय प्रेरणार्थक क्रिया (ਪੜ੍ਹਨਾ → ਪੜ੍ਹਾਉਣਾ → ਪੜ੍ਹਵਾਉਣਾ); पूर्ण व अपूर्ण संबंधक; अगेतर-पिछेतर पृथक्करण।',
      },
      A: {
        en: 'Distinguishing Pronominal Adjective (ਪੜਨਾਂਵੀ ਵਿਸ਼ੇਸ਼ਣ) from Demonstrative Pronoun (ਨਿਸ਼ਚੇਵਾਚਕ ਪੜਨਾਂਵ); Nijvachak Pronoun (ਆਪ) vs Purakhvachak; Chhut Marori (’) vs Comma.',
        pa: 'ਪੜਨਾਂਵੀ ਵਿਸ਼ੇਸ਼ਣ ਬਨਾਮ ਨਿਸ਼ਚੇਵਾਚਕ ਪੜਨਾਂਵ ਦਾ ਫ਼ਰਕ; ਨਿਜਵਾਚਕ ਪੜਨਾਂਵ (ਆਪ) ਦੀ ਪਛਾਣ; ਛੁੱਟ ਮਰੋੜੀ (’) ਅਤੇ ਦੁਬਿੰਦੀ ਡੈਸ਼ (:-)।',
        hi: 'सार्वनामिक विशेषण बनाम निश्चयवाचक सर्वनाम का अंतर; निजवाचक सर्वनाम (ਆਪ) की पहचान; छुट मरोड़ी (’) और दुबिंदी डैश (:-)।',
      },
    },
    sixtySecondShortcut: {
      en: 'Pronoun vs Pronominal Adjective Test: If "ਇਹ/ਉਹ" is followed IMMEDIATELY by the noun it qualifies ("ਇਹ ਕਿਤਾਬ ਮੇਰੀ ਹੈ"), it is a Pronominal Adjective (ਪੜਨਾਂਵੀ ਵਿਸ਼ੇਸ਼ਣ); if followed by another word ("ਇਹ ਮੇਰੀ ਕਿਤਾਬ ਹੈ"), it is a Pronoun (ਪੜਨਾਂਵ)!',
      pa: 'ਪੜਨਾਂਵ ਬਨਾਮ ਪੜਨਾਂਵੀ ਵਿਸ਼ੇਸ਼ਣ ਟ੍ਰਿਕ: ਜੇ "ਇਹ/ਉਹ" ਤੋਂ ਤੁਰੰਤ ਬਾਅਦ ਨਾਂਵ ਆਵੇ ("ਇਹ ਕਿਤਾਬ ਮੇਰੀ ਹੈ") ਤਾਂ ਪੜਨਾਂਵੀ ਵਿਸ਼ੇਸ਼ਣ ਹੈ; ਜੇ ਨਾਂਵ ਤੁਰੰਤ ਬਾਅਦ ਨਾ ਹੋਵੇ ("ਇਹ ਮੇਰੀ ਕਿਤਾਬ ਹੈ") ਤਾਂ ਪੜਨਾਂਵ ਹੈ!',
      hi: 'सर्वनाम बनाम सार्वनामिक विशेषण ट्रिक: यदि "ਇਹ/ਉਹ" के तुरंत बाद संज्ञा आए ("ਇਹ ਕਿਤਾਬ ਮੇਰੀ ਹੈ") तो पੜਨਾਂਵੀ विशेषण है; यदि संज्ञा तुरंत बाद न हो ("ਇਹ ਮੇਰੀ ਕਿਤਾਬ ਹੈ") तो पੜਨਾਂਵ है!',
    },
    classMapping: 'PSEB Punjabi Vyakaran (Classes 8–10)',
    questionCount: 10,
  },

  // ======================== PAPER B: MERIT SUBJECTS ========================
  {
    topicId: 'ett-punjabi-1',
    paper: 'Paper B (Merit)',
    subject: {
      en: 'Paper B: Punjabi (20 Qs · 40 Marks)',
      pa: 'ਪੇਪਰ B: ਪੰਜਾਬੀ (20 ਸਵਾਲ · 40 ਅੰਕ)',
      hi: 'पेपर B: पंजाबी (20 प्रश्न · 40 अंक)',
    },
    marksWeight: 'Paper B: ~16–20 of 40 Punjabi Marks',
    title: {
      en: 'Paper B Punjabi I: Folk Literature (ਲੋਕ ਸਾਹਿਤ), Cultural Traditions, Festivals, Fairs & Ornaments (Level B → I → A)',
      pa: 'ਪੇਪਰ B ਪੰਜਾਬੀ I: ਲੋਕ ਸਾਹਿਤ (ਸੁਹਾਗ, ਘੋੜੀਆਂ, ਸਿੱਠਣੀਆਂ, ਅਲਾਹੁਣੀਆਂ), ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ, ਮੇਲੇ, ਤਿਉਹਾਰ ਅਤੇ ਗਹਿਣੇ (Level B → I → A)',
      hi: 'पेपर B पंजाबी I: लोक साहित्य (सुहाग, घोड़ियाँ, सिट्ठनियाँ, अलाहुनियाँ), पंजाबी संस्कृति, मेले, त्योहार और आभूषण (Level B → I → A)',
    },
    officialHeadingsCovered: {
      en: [
        'Archival Unit 1 (ett-punjabi-1): Folk literature (ਲੋਕ ਸਾਹਿਤ)',
        'Archival Unit 2 (ett-punjabi-2): Punjabi cultural traditions (ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ)',
      ],
      pa: [
        'ਪੁਰਾਣੀ ਇਕਾਈ 1 (ett-punjabi-1): ਲੋਕ ਸਾਹਿਤ',
        'ਪੁਰਾਣੀ ਇਕਾਈ 2 (ett-punjabi-2): ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ',
      ],
      hi: [
        'पुरानी इकाई 1 (ett-punjabi-1): लोक साहित्य',
        'पुरानी इकाई 2 (ett-punjabi-2): पंजाबी संस्कृति',
      ],
    },
    levelBreakdown: {
      B: {
        en: 'Wedding songs: Suhag (bride’s home) vs Ghorian (groom’s home); Bhangra & Giddha; Desi calendar months (Chet to Phaggan).',
        pa: 'ਵਿਆਹ ਦੇ ਲੋਕ ਗੀਤ: ਸੁਹਾਗ (ਕੁੜੀ ਦੇ ਘਰ) ਬਨਾਮ ਘੋੜੀਆਂ (ਮੁੰਡੇ ਦੇ ਘਰ); ਭੰਗੜਾ ਤੇ ਗਿੱਧਾ; 12 ਦੇਸੀ ਮਹੀਨੇ (ਚੇਤ ਤੋਂ ਫੱਗਣ)।',
        hi: 'विवाह लोकगीत: सुहाग (वधू पक्ष) बनाम घोड़ियाँ (वर पक्ष); भांगड़ा व गिद्धा; 12 देसी महीने (चेत से फग्गन)।',
      },
      I: {
        en: 'Sithnian (satirical songs), Chhand Paraga, Alahunian (chorus mourning) vs Keerne (solo mourning), Mahiya (1.5 lines) & Tappa; Chhapar, Jarag, Roshni & Maghi fairs.',
        pa: 'ਸਿੱਠਣੀਆਂ, ਛੰਦ ਪਰਾਗਾ, ਅਲਾਹੁਣੀਆਂ ਬਨਾਮ ਕੀਰਨੇ, ਮਾਹੀਆ (ਡੇਢ ਤੁਕੀ) ਅਤੇ ਟੱਪਾ; ਛਪਾਰ, ਜਰਗ, ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ ਅਤੇ ਮਾਘੀ ਦੇ ਮੇਲੇ।',
        hi: 'सिट्ठनियाँ, छंद परागा, अलाहुनियाँ बनाम कीरने, माहिया (डेढ़ पंक्ति) और टप्पा; छपार, जरग, जगराओं की रोशनी और माघी मेले।',
      },
      A: {
        en: 'Phulkari varieties: Bagh vs Chope (maternal grandmother’s gift at Chura) vs Suber (worn during Pheras with 5 motifs) vs Til Patra; exact head/ear/neck/wrist ornaments.',
        pa: 'ਫੁਲਕਾਰੀ ਦੀਆਂ ਕਿਸਮਾਂ: ਬਾਗ਼ ਬਨਾਮ ਚੋਪ (ਨਾਨਕਿਆਂ ਵੱਲੋਂ ਚੂੜੇ ਵੇਲੇ) ਬਨਾਮ ਸੁਬਰ (ਫੇਰਿਆਂ ਵੇਲੇ 5 ਬੂਟੀਆਂ ਵਾਲਾ) ਬਨਾਮ ਤਿਲ ਪੱਤਰਾ; ਸਿਰ, ਕੰਨ, ਗਲ ਅਤੇ ਗੁੱਟ ਦੇ ਗਹਿਣੇ।',
        hi: 'फुलकारी के प्रकार: बाग़ बनाम चोप (नानिहाल द्वारा चूड़े के समय) बनाम सुबर (फेरों के समय 5 बूटियों वाला) बनाम तिल पत्तरा; सिर, कान, गले और कलाई के आभूषण।',
      },
    },
    sixtySecondShortcut: {
      en: 'Fair-to-Month Memory Code: Jarag (Chet — Seetla Mata), Vaisakhi (Vaisakh), Teeyan (Sawan), Chhapar (Bhadon — Gugga Pir), Maghi (Magh — Muktsar), Jagraon Roshni (Phaggan — Baba Mohkam Din)!',
      pa: 'ਮੇਲੇ ਅਤੇ ਦੇਸੀ ਮਹੀਨੇ ਟ੍ਰਿਕ: ਜਰਗ (ਚੇਤ — ਸੀਤਲਾ ਮਾਤਾ), ਵਿਸਾਖੀ (ਵਿਸਾਖ), ਤੀਆਂ (ਸਾਉਣ), ਛਪਾਰ (ਭਾਦੋਂ — ਗੁੱਗਾ ਪੀਰ), ਮਾਘੀ (ਮਾਘ — ਮੁਕਤਸਰ), ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ (ਫੱਗਣ)!',
      hi: 'मेले और देसी महीने ट्रिक: जरग (चेत — शीतला माता), बैसाखी (वैसाख), तियाँ (सावन), छपार (भादों — गुग्गा पीर), माघी (माघ — मुक्तसर), जगराओं की रोशनी (फग्गन)!',
    },
    classMapping: 'PSEB Punjabi Lazmi & Sahit Mala (Classes 9–12)',
    questionCount: 10,
  },
  {
    topicId: 'ett-punjabi-3',
    paper: 'Paper B (Merit)',
    subject: {
      en: 'Paper B: Punjabi (20 Qs · 40 Marks)',
      pa: 'ਪੇਪਰ B: ਪੰਜਾਬੀ (20 ਸਵਾਲ · 40 ਅੰਕ)',
      hi: 'पेपर B: पंजाबी (20 प्रश्न · 40 अंक)',
    },
    marksWeight: 'Paper B: ~20–24 of 40 Punjabi Marks',
    title: {
      en: 'Paper B Punjabi II: Idioms & Proverbs (ਮੁਹਾਵਰੇ ਅਤੇ ਅਖਾਣ), English-to-Punjabi Translation & Sentence Transformation (Level B → I → A)',
      pa: 'ਪੇਪਰ B ਪੰਜਾਬੀ II: ਮੁਹਾਵਰੇ ਅਤੇ ਅਖਾਣ, ਅੰਗਰੇਜ਼ੀ ਤੋਂ ਪੰਜਾਬੀ ਅਨੁਵਾਦ ਅਤੇ ਵਾਕ ਰੂਪਾਂਤਰਣ (Level B → I → A)',
      hi: 'पेपर B पंजाबी II: मुहावरे और लोकोक्तियाँ, अंग्रेज़ी से पंजाबी अनुवाद और वाक्य रूपांतरण (Level B → I → A)',
    },
    officialHeadingsCovered: {
      en: [
        'Archival Unit 3 (ett-punjabi-3): Idiomatic and proverbial usage (ਮੁਹਾਵਰਿਆਂ ਅਤੇ ਅਖਾਣਾਂ ਦੀ ਵਰਤੋਂ)',
        'Archival Unit 4 (ett-punjabi-4): Rendering English into Punjabi (ਅੰਗਰੇਜ਼ੀ ਤੋਂ ਪੰਜਾਬੀ ਅਨੁਵਾਦ)',
        'Archival Unit 5 (ett-punjabi-5): Rewriting sentences / Sentence transformation (ਵਾਕ ਰੂਪਾਂਤਰਣ)',
      ],
      pa: [
        'ਪੁਰਾਣੀ ਇਕਾਈ 3 (ett-punjabi-3): ਮੁਹਾਵਰਿਆਂ ਅਤੇ ਅਖਾਣਾਂ ਦੀ ਵਰਤੋਂ',
        'ਪੁਰਾਣੀ ਇਕਾਈ 4 (ett-punjabi-4): ਅੰਗਰੇਜ਼ੀ ਤੋਂ ਪੰਜਾਬੀ ਅਨੁਵਾਦ',
        'ਪੁਰਾਣੀ ਇਕਾਈ 5 (ett-punjabi-5): ਵਾਕ ਰੂਪਾਂਤਰਣ (ਵਾਕ ਵਟਾਂਦਰਾ)',
      ],
      hi: [
        'पुरानी इकाई 3 (ett-punjabi-3): मुहावरे और कहावतों का प्रयोग',
        'पुरानी इकाई 4 (ett-punjabi-4): अंग्रेज़ी से पंजाबी अनुवाद',
        'पुरानी इकाई 5 (ett-punjabi-5): वाक्य रूपांतरण',
      ],
    },
    levelBreakdown: {
      B: {
        en: 'Core difference between Muhavra (ends in ਣਾ/ਣੀ/ਣੇ verb) and Akhan (complete standalone proverb); Simple (ਸਧਾਰਨ) sentences.',
        pa: 'ਮੁਹਾਵਰੇ (ਅੰਤ ਵਿੱਚ ਣਾ/ਣੀ/ਣੇ) ਅਤੇ ਅਖਾਣ (ਪੂਰਾ ਸੁਤੰਤਰ ਵਾਕ) ਵਿੱਚ ਮੁੱਢਲਾ ਫ਼ਰਕ; ਸਧਾਰਨ ਵਾਕ।',
        hi: 'मुहावरे (अंत में ਣਾ/ਣੀ/ਣੇ) और अखाण (पूर्ण स्वतंत्र वाक्य) में मूल अंतर; साधारण वाक्य।',
      },
      I: {
        en: 'Simple (ਸਧਾਰਨ) vs Compound (ਸੰਯੁਕਤ — ਅਤੇ, ਪਰ, ਸਗੋਂ) vs Complex (ਮਿਸ਼ਰਤ — ਕਿ, ਕਿਉਂਕਿ, ਜੇ...ਤਾਂ) sentence identification & conversion.',
        pa: 'ਸਧਾਰਨ, ਸੰਯੁਕਤ (ਅਤੇ, ਪਰ, ਸਗੋਂ) ਅਤੇ ਮਿਸ਼ਰਤ ਵਾਕ (ਕਿ, ਕਿਉਂਕਿ, ਜੇ...ਤਾਂ) ਦੀ ਪਛਾਣ ਅਤੇ ਆਪਸੀ ਵਟਾਂਦਰਾ।',
        hi: 'साधारण, संयुक्त (ਅਤੇ, ਪਰ, ਸਗੋਂ) और मिश्रित वाक्य (ਕਿ, ਕਿਉਂਕਿ, ਜੇ...ਤਾਂ) की पहचान और परस्पर रूपांतरण।',
      },
      A: {
        en: 'Affirmative ↔ Negative transformation without altering meaning; Kartari ↔ Karmani voice; idiomatic proverb equivalents between English and Punjabi.',
        pa: 'ਅਰਥ ਬਦਲੇ ਬਿਨਾਂ ਹਾਂ-ਵਾਚਕ ↔ ਨਾਂਹ-ਵਾਚਕ ਵਾਕ ਵਟਾਂਦਰਾ; ਕਰਤਰੀ ↔ ਕਰਮਣੀ ਵਾਚ; ਅੰਗਰੇਜ਼ੀ ਅਖਾਣਾਂ ਦਾ ਪੰਜਾਬੀ ਰੂਪਾਂਤਰਣ।',
        hi: 'अर्थ बदले बिना सकारात्मक ↔ नकारात्मक वाक्य रूपांतरण; कर्तृ ↔ कर्मवाच्य; अंग्रेज़ी कहावतों का पंजाबी अनुवाद।',
      },
    },
    sixtySecondShortcut: {
      en: 'Conjunction Scanner for Sentences: No conjunction + 1 verb = Simple (ਸਧਾਰਨ); "ਅਤੇ / ਪਰ / ਜਾਂ / ਸਗੋਂ" = Compound (ਸੰਯੁਕਤ); Starts or links with "ਕਿ / ਕਿਉਂਕਿ / ਜੇ...ਤਾਂ / ਜਦੋਂ...ਉਦੋਂ / ਜਿਹੜਾ" = Complex (ਮਿਸ਼ਰਤ)!',
      pa: 'ਵਾਕ ਪਛਾਣ ਟ੍ਰਿਕ: 1 ਕਿਰਿਆ = ਸਧਾਰਨ ਵਾਕ; "ਅਤੇ / ਪਰ / ਜਾਂ / ਸਗੋਂ" = ਸੰਯੁਕਤ ਵਾਕ; "ਕਿ / ਕਿਉਂਕਿ / ਜੇ...ਤਾਂ / ਜਦੋਂ...ਉਦੋਂ / ਜਿਹੜਾ" = ਮਿਸ਼ਰਤ ਵਾਕ!',
      hi: 'वाक्य पहचान ट्रिक: 1 क्रिया = साधारण वाक्य; "ਅਤੇ / ਪਰ / ਜਾਂ / ਸਗੋਂ" = संयुक्त वाक्य; "ਕਿ / ਕਿਉਂਕਿ / ਜੇ...ਤਾਂ / ਜਦੋਂ...ਉਦੋਂ / ਜਿਹੜਾ" = मिश्रित वाक्य!',
    },
    classMapping: 'PSEB Punjabi Vyakaran & Rachna (Classes 9–10)',
    questionCount: 10,
  },
  {
    topicId: 'ett-math-2',
    paper: 'Paper B (Merit)',
    subject: {
      en: 'Paper B: Mathematics (20 Qs · 40 Marks)',
      pa: 'ਪੇਪਰ B: ਗਣਿਤ (20 ਸਵਾਲ · 40 ਅੰਕ)',
      hi: 'पेपर B: गणित (20 प्रश्न · 40 अंक)',
    },
    marksWeight: 'Paper B: ~8–10 of 40 Maths Marks',
    title: {
      en: 'Mathematics I: Number System, Real Numbers, Euclid’s Lemma, HCF/LCM, Exponents & Polynomials (Level B → I → A)',
      pa: 'ਗਣਿਤ I: ਸੰਖਿਆ ਪ੍ਰਣਾਲੀ, ਵਾਸਤਵਿਕ ਸੰਖਿਆਵਾਂ, ਯੂਕਲਿਡ ਵੰਡ ਪ੍ਰਮੇਯ, ਮ.ਸ.ਵ./ਲ.ਸ.ਵ., ਘਾਤ ਅੰਕ ਅਤੇ ਬਹੁਪਦ (Level B → I → A)',
      hi: 'गणित I: संख्या पद्धति, वास्तविक संख्याएँ, यूक्लिड विभाजन प्रमेयिका, HCF/LCM, घातांक और बहुपद (Level B → I → A)',
    },
    officialHeadingsCovered: {
      en: [
        'Archival Unit 1 (ett-math-1): Number systems and their properties',
        'Archival Unit 2 (ett-math-2): Working with real numbers (Euclid’s division, HCF & LCM)',
        'Archival Unit 3 (ett-math-3): Polynomial expressions & Exponents',
      ],
      pa: [
        'ਪੁਰਾਣੀ ਇਕਾਈ 1 (ett-math-1): ਸੰਖਿਆ ਪ੍ਰਣਾਲੀਆਂ ਅਤੇ ਗੁਣ',
        'ਪੁਰਾਣੀ ਇਕਾਈ 2 (ett-math-2): ਵਾਸਤਵਿਕ ਸੰਖਿਆਵਾਂ ਨਾਲ ਕਿਰਿਆਵਾਂ (HCF ਅਤੇ LCM)',
        'ਪੁਰਾਣੀ ਇਕਾਈ 3 (ett-math-3): ਬਹੁਪਦੀ ਬੀਜਗਣਿਤਕ ਵਿਅੰਜਕ ਅਤੇ ਘਾਤ ਅੰਕ',
      ],
      hi: [
        'पुरानी इकाई 1 (ett-math-1): संख्या पद्धतियाँ और गुण',
        'पुरानी इकाई 2 (ett-math-2): वास्तविक संख्याओं पर संक्रियाएँ (HCF और LCM)',
        'पुरानी इकाई 3 (ett-math-3): बहुपद व्यंजक और घातांक',
      ],
    },
    levelBreakdown: {
      B: {
        en: 'Rational vs Irrational numbers, Prime factorisation, HCF × LCM = a × b, degree of polynomial & Remainder Theorem P(a).',
        pa: 'ਪਰਿਮੇਯ ਅਤੇ ਅਪਰਿਮੇਯ ਸੰਖਿਆਵਾਂ, ਅਭਾਜ ਗੁਣਨਖੰਡ, HCF × LCM = a × b, ਬਹੁਪਦ ਦੀ ਘਾਤ ਅਤੇ ਬਾਕੀ ਪ੍ਰਮੇਯ P(a)।',
        hi: 'परिमेय व अपरिमेय संख्याएँ, अभाज्य गुणनखंड, HCF × LCM = a × b, बहुपद की घात और शेषफल प्रमेय P(a)।',
      },
      I: {
        en: 'Terminating decimal places via 2^m × 5^n; recurring decimal 0.ab̄ to p/q; quadratic zeros α + β = -b/a and αβ = c/a.',
        pa: '2^m × 5^n ਰਾਹੀਂ ਸ਼ਾਂਤ ਦਸ਼ਮਲਵ ਸਥਾਨ; ਆਵਰਤੀ ਦਸ਼ਮਲਵ ਨੂੰ p/q ਵਿੱਚ ਬਦਲਣਾ; ਸਿਫ਼ਰਾਂ ਦਾ ਜੋੜ α + β = -b/a ਅਤੇ ਗੁਣਨਫਲ αβ = c/a।',
        hi: '2^m × 5^n द्वारा शांत दशमलव स्थान; आवर्ती दशमलव को p/q में बदलना; शून्यकों का योग α + β = -b/a और गुणनफल αβ = c/a।',
      },
      A: {
        en: 'HCF/LCM remainder word problems; symmetric root expressions (1/α + 1/β = -b/c, α² + β²); surd rationalisation.',
        pa: 'HCF/LCM ਬਾਕੀ ਵਾਲੇ ਸ਼ਬਦੀ ਸਵਾਲ; ਸਿਫ਼ਰਾਂ ਦੇ ਸਮਮਿਤ ਵਿਅੰਜਕ (1/α + 1/β = -b/c, α² + β²); ਕਰਨੀਆਂ ਦਾ ਪਰਿਮੇਯਕਰਨ।',
        hi: 'HCF/LCM शेषफल शब्द समस्याएँ; शून्यकों के सममित व्यंजक (1/α + 1/β = -b/c, α² + β²); करणियों का परिमेयकरण।',
      },
    },
    sixtySecondShortcut: {
      en: 'Decimal Termination Shortcut: Reduce p/q to lowest terms and factor q = 2^m × 5^n. It terminates after exactly max(m, n) decimal places! And 1/α + 1/β for ax² + bx + c is simply -b/c in 2 seconds!',
      pa: 'ਦਸ਼ਮਲਵ ਸ਼ਾਰਟਕੱਟ: p/q ਨੂੰ ਸਰਲ ਰੂਪ ਵਿੱਚ ਲਿਖ ਕੇ ਹਰ q = 2^m × 5^n ਦੇ ਗੁਣਨਖੰਡ ਬਣਾਓ। ਦਸ਼ਮਲਵ ਪੂਰੇ max(m, n) ਅੰਕਾਂ ਬਾਅਦ ਖ਼ਤਮ ਹੋਵੇਗਾ! ਅਤੇ 1/α + 1/β = -b/c!',
      hi: 'दशमलव शॉर्टकट: p/q को सरलतम रूप में लिखकर हर q = 2^m × 5^n के गुणनखंड करें। दशमलव ठीक max(m, n) स्थानों बाद समाप्त होगा! और 1/α + 1/β = -b/c!',
    },
    classMapping: 'NCERT / PSEB Class 9 Ch. 1–2 & Class 10 Ch. 1–2',
    questionCount: 10,
  },
  {
    topicId: 'ett-math-4',
    paper: 'Paper B (Merit)',
    subject: {
      en: 'Paper B: Mathematics (20 Qs · 40 Marks)',
      pa: 'ਪੇਪਰ B: ਗਣਿਤ (20 ਸਵਾਲ · 40 ਅੰਕ)',
      hi: 'पेपर B: गणित (20 प्रश्न · 40 अंक)',
    },
    marksWeight: 'Paper B: ~10–12 of 40 Maths Marks',
    title: {
      en: 'Mathematics II: Linear Equations in Two Variables, Quadratic Equations & Arithmetic Progressions (Level B → I → A)',
      pa: 'ਗਣਿਤ II: ਦੋ ਚਲਾਂ ਵਾਲੇ ਰੇਖੀ ਸਮੀਕਰਨ, ਦੋ ਘਾਤੀ ਸਮੀਕਰਨ ਅਤੇ ਅੰਕਗਣਿਤਕ ਲੜੀਆਂ (AP) (Level B → I → A)',
      hi: 'गणित II: दो चरों वाले रैखिक समीकरण, द्विघात समीकरण और समांतर श्रेणियाँ (AP) (Level B → I → A)',
    },
    officialHeadingsCovered: {
      en: [
        'Archival Unit 4 (ett-math-4): Linear equations in two variables (decoded from "Two Exponential Equations")',
        'Archival Unit 5 (ett-math-5): Solving quadratic equations (ਦੋ ਘਾਤੀ ਸਮੀਕਰਨਾਂ)',
        'Archival Unit 6 (ett-math-6): Arithmetic sequences (ਅੰਕਗਣਿਤਕ ਲੜੀਆਂ)',
      ],
      pa: [
        'ਪੁਰਾਣੀ ਇਕਾਈ 4 (ett-math-4): ਦੋ ਚਲਾਂ ਦੀਆਂ ਰੇਖੀ ਸਮੀਕਰਨਾਂ ਅਤੇ ਜੋੜੇ',
        'ਪੁਰਾਣੀ ਇਕਾਈ 5 (ett-math-5): ਦੋ ਘਾਤੀ ਸਮੀਕਰਨਾਂ ਹੱਲ ਕਰਨਾ',
        'ਪੁਰਾਣੀ ਇਕਾਈ 6 (ett-math-6): ਅੰਕਗਣਿਤਕ ਲੜੀਆਂ (AP)',
      ],
      hi: [
        'पुरानी इकाई 4 (ett-math-4): दो चरों के रैखिक समीकरण और युग्म',
        'पुरानी इकाई 5 (ett-math-5): द्विघात समीकरण हल करना',
        'पुरानी इकाई 6 (ett-math-6): समांतर श्रेणियाँ (AP)',
      ],
    },
    levelBreakdown: {
      B: {
        en: 'Consistency ratios (a₁/a₂ vs b₁/b₂ vs c₁/c₂), Discriminant D = b² - 4ac, AP nth term aₙ = a + (n-1)d.',
        pa: 'ਸੰਗਤਤਾ ਅਨੁਪਾਤ (a₁/a₂ ਬਨਾਮ b₁/b₂ ਬਨਾਮ c₁/c₂), ਵਿਵੇਚਕ D = b² - 4ac, AP ਦਾ nਵਾਂ ਪਦ aₙ = a + (n-1)d।',
        hi: 'संगतता अनुपात (a₁/a₂ बनाम b₁/b₂ बनाम c₁/c₂), विविक्तकर D = b² - 4ac, AP का nवाँ पद aₙ = a + (n-1)d।',
      },
      I: {
        en: 'Finding unknown k for parallel/infinite linear systems and equal quadratic roots (D = 0); AP sum Sₙ = (n/2)[2a + (n-1)d].',
        pa: 'ਸਮਾਂਤਰ/ਅਨੰਤ ਰੇਖਾਵਾਂ ਅਤੇ ਬਰਾਬਰ ਮੂਲਾਂ (D = 0) ਲਈ k ਦਾ ਮੁੱਲ ਕੱਢਣਾ; AP ਦੇ n ਪਦਾਂ ਦਾ ਜੋੜ Sₙ = (n/2)[2a + (n-1)d]।',
        hi: 'समांतर/अनंत रेखाओं और बराबर मूलों (D = 0) के लिए k का मान ज्ञात करना; AP के n पदों का योग Sₙ = (n/2)[2a + (n-1)d]।',
      },
      A: {
        en: 'Recovering aₙ and d directly from quadratic sum Sₙ = An² + Bn; p-th term is q and q-th term is p shortcut.',
        pa: 'Sₙ = An² + Bn ਤੋਂ ਸਿੱਧਾ aₙ ਅਤੇ ਸਾਂਝਾ ਅੰਤਰ d = 2A ਕੱਢਣਾ; ਜੇ pਵਾਂ ਪਦ q ਹੋਵੇ ਅਤੇ qਵਾਂ ਪਦ p ਹੋਵੇ।',
        hi: 'Sₙ = An² + Bn से सीधा aₙ और सार्व अंतर d = 2A निकालना; यदि pवाँ पद q हो और qवाँ पद p हो।',
      },
    },
    sixtySecondShortcut: {
      en: 'AP 5-Second Tricks: (1) If Sₙ = An² + Bn, common difference d is ALWAYS 2A and first term a₁ = A + B! (2) From any two terms aₚ and a_q, d = (aₚ - a_q)/(p - q)!',
      pa: 'AP 5-ਸਕਿੰਟ ਟ੍ਰਿਕਸ: (1) ਜੇ Sₙ = An² + Bn ਹੋਵੇ, ਤਾਂ ਸਾਂਝਾ ਅੰਤਰ d ਹਮੇਸ਼ਾ 2A ਹੁੰਦਾ ਹੈ ਅਤੇ ਪਹਿਲਾ ਪਦ a₁ = A + B! (2) d = (aₚ - a_q)/(p - q)!',
      hi: 'AP 5-सेकंड ट्रिक्स: (1) यदि Sₙ = An² + Bn हो, तो सार्व अंतर d हमेशा 2A होता है और प्रथम पद a₁ = A + B! (2) d = (aₚ - a_q)/(p - q)!',
    },
    classMapping: 'NCERT / PSEB Class 10 Ch. 3, Ch. 4 & Ch. 5',
    questionCount: 10,
  },
  {
    topicId: 'ett-math-11',
    paper: 'Paper B (Merit)',
    subject: {
      en: 'Paper B: Mathematics (20 Qs · 40 Marks)',
      pa: 'ਪੇਪਰ B: ਗਣਿਤ (20 ਸਵਾਲ · 40 ਅੰਕ)',
      hi: 'पेपर B: गणित (20 प्रश्न · 40 अंक)',
    },
    marksWeight: 'Paper B: ~12–14 of 40 Maths Marks',
    title: {
      en: 'Mathematics III: Coordinate Geometry, Triangles, Circles, Trigonometry, Heron’s Formula & 3D Mensuration (Level B → I → A)',
      pa: 'ਗਣਿਤ III: ਨਿਰਦੇਸ਼ ਅੰਕ ਜਿਆਮਿਤੀ, ਤਿਕੋਣ, ਚੱਕਰ, ਤ੍ਰਿਕੋਣਮਿਤੀ, ਹੀਰੋਨ ਸੂਤਰ ਅਤੇ ਖੇਤਰਮਿਤੀ (Level B → I → A)',
      hi: 'गणित III: निर्देशांक ज्यामिति, त्रिभुज, वृत्त, त्रिकोणमिति, हीरोन सूत्र और क्षेत्रमिति (Level B → I → A)',
    },
    officialHeadingsCovered: {
      en: [
        'Archival Units 7–10: Euclidean geometry, Lines & angles, Triangles/quadrilaterals/circles, Areas',
        'Archival Unit 11 (ett-math-11): Coordinate Geometry (decoded from "Directional Numerals")',
        'Archival Units 12–16: Trigonometry, Constructions, Heron’s formula, 3D Solids & Circular sectors',
      ],
      pa: [
        'ਪੁਰਾਣੀਆਂ ਇਕਾਈਆਂ 7–10: ਯੂਕਲਿਡੀ ਜਿਆਮਿਤੀ, ਰੇਖਾਵਾਂ ਤੇ ਕੋਣ, ਤਿਕੋਣ/ਚਤੁਰਭੁਜ/ਚੱਕਰ, ਖੇਤਰਫਲ',
        'ਪੁਰਾਣੀ ਇਕਾਈ 11 (ett-math-11): ਨਿਰਦੇਸ਼ ਅੰਕ ਜਿਆਮਿਤੀ ("Directional Numerals" ਦਾ ਸਹੀ ਰੂਪ)',
        'ਪੁਰਾਣੀਆਂ ਇਕਾਈਆਂ 12–16: ਤ੍ਰਿਕੋਣਮਿਤੀ, ਰਚਨਾਵਾਂ, ਹੀਰੋਨ ਸੂਤਰ, ਠੋਸਾਂ ਦਾ ਸਤ੍ਹਾ ਖੇਤਰਫਲ/ਆਇਤਨ ਅਤੇ ਚੱਕਰ ਖੰਡ',
      ],
      hi: [
        'पुरानी इकाइयाँ 7–10: यूक्लिडीय ज्यामिति, रेखाएँ व कोण, त्रिभुज/चतुर्भुज/वृत्त, क्षेत्रफल',
        'पुरानी इकाई 11 (ett-math-11): निर्देशांक ज्यामिति ("Directional Numerals" का सही रूप)',
        'पुरानी इकाइयाँ 12–16: त्रिकोणमिति, रचनाएँ, हीरोन सूत्र, ठोसों का पृष्ठीय क्षेत्रफल/आयतन और त्रिज्यखंड',
      ],
    },
    levelBreakdown: {
      B: {
        en: 'Distance & midpoint formulas, Thales BPT, Pythagoras triplets, trig table (0°–90°), Heron’s formula, cylinder/cone/sphere formulas.',
        pa: 'ਦੂਰੀ ਅਤੇ ਮੱਧ-ਬਿੰਦੂ ਸੂਤਰ, ਥੈਲਜ਼ ਪ੍ਰਮੇਯ, ਪਾਈਥਾਗੋਰਸ ਤਿੱਕੜੀਆਂ, ਤ੍ਰਿਕੋਣਮਿਤੀ ਸਾਰਣੀ, ਹੀਰੋਨ ਸੂਤਰ, ਵੇਲਣ/ਸ਼ੰਕੂ/ਗੋਲੇ ਦੇ ਸੂਤਰ।',
        hi: 'दूरी और मध्य-बिंदु सूत्र, थेल्स प्रमेय, पाइथागोरस त्रिक, त्रिकोणमिति सारणी, हीरोन सूत्र, बेलन/शंकु/गोले के सूत्र।',
      },
      I: {
        en: 'Section formula & centroid, similar triangle area ratio = (side ratio)², circle tangent length √(d² - r²) & ∠APB + ∠AOB = 180°, sector area.',
        pa: 'ਵੰਡ ਸੂਤਰ ਤੇ ਕੇਂਦਰਕ, ਸਮਰੂਪ ਤਿਕੋਣਾਂ ਦੇ ਖੇਤਰਫਲਾਂ ਦਾ ਅਨੁਪਾਤ = (ਭੁਜਾ ਅਨੁਪਾਤ)², ਸਪਰਸ਼ ਰੇਖਾ ਦੀ ਲੰਬਾਈ √(d² - r²), ਚੱਕਰ ਖੰਡ।',
        hi: 'विभाजन सूत्र व केन्द्रक, समरूप त्रिभुजों के क्षेत्रफलों का अनुपात = (भुजा अनुपात)², स्पर्शरेखा की लंबाई √(d² - r²), त्रिज्यखंड।',
      },
      A: {
        en: 'sec θ + tan θ = p ⇒ sec θ - tan θ = 1/p; 30°–60° tower heights; melting/recasting solids volume conservation & % change in surface area.',
        pa: 'sec θ + tan θ = p ⇒ sec θ - tan θ = 1/p; ਉਚਾਈ ਅਤੇ ਦੂਰੀ ਦੇ ਸਵਾਲ; ਠੋਸਾਂ ਨੂੰ ਪਿਘਲਾ ਕੇ ਬਣਾਉਣ ਵਿੱਚ ਆਇਤਨ ਦੀ ਸੰਭਾਲ।',
        hi: 'sec θ + tan θ = p ⇒ sec θ - tan θ = 1/p; ऊँचाई और दूरी के प्रश्न; ठोसों को पिघलाकर ढालने में आयतन संरक्षण।',
      },
    },
    sixtySecondShortcut: {
      en: 'Similar Triangle & Mensuration Scaling Rule: If linear ratio (side/radius/perimeter) is a : b, then Area/CSA/TSA ratio is ALWAYS a² : b², and Volume ratio is ALWAYS a³ : b³!',
      pa: 'ਸਕੇਲਿੰਗ ਸ਼ਾਰਟਕੱਟ: ਜੇ ਭੁਜਾ/ਅਰਧ-ਵਿਆਸ/ਘੇਰੇ ਦਾ ਅਨੁਪਾਤ a : b ਹੋਵੇ, ਤਾਂ ਖੇਤਰਫਲ ਦਾ ਅਨੁਪਾਤ ਹਮੇਸ਼ਾ a² : b² ਅਤੇ ਆਇਤਨ ਦਾ ਅਨੁਪਾਤ ਹਮੇਸ਼ਾ a³ : b³ ਹੁੰਦਾ ਹੈ!',
      hi: 'स्केलिंग शॉर्टकट: यदि भुजा/त्रिज्या/परिमाप का अनुपात a : b हो, तो क्षेत्रफल का अनुपात हमेशा a² : b² और आयतन का अनुपात हमेशा a³ : b³ होता है!',
    },
    classMapping: 'NCERT / PSEB Class 9 Ch. 3, 6–13 & Class 10 Ch. 6–13',
    questionCount: 10,
  },
  {
    topicId: 'ett-math-17',
    paper: 'Paper B (Merit)',
    subject: {
      en: 'Paper B: Mathematics (20 Qs · 40 Marks)',
      pa: 'ਪੇਪਰ B: ਗਣਿਤ (20 ਸਵਾਲ · 40 ਅੰਕ)',
      hi: 'पेपर B: गणित (20 प्रश्न · 40 अंक)',
    },
    marksWeight: 'Paper B: ~6–8 of 40 Maths Marks',
    title: {
      en: 'Mathematics IV: Statistics (Mean, Median, Mode, Empirical Formula & Ogives) and Probability (Level B → I → A)',
      pa: 'ਗਣਿਤ IV: ਅੰਕੜਾ ਵਿਗਿਆਨ (ਮੱਧਮਾਨ, ਮੱਧਿਕਾ, ਬਹੁਲਕ ਤੇ ਤੋਰਨ) ਅਤੇ ਸੰਭਾਵਨਾ (Level B → I → A)',
      hi: 'गणित IV: सांख्यिकी (माध्य, माध्यिका, बहुलक व तोरण) और प्रायिकता (Level B → I → A)',
    },
    officialHeadingsCovered: {
      en: [
        'Archival Unit 17 (ett-math-17): Interpreting statistical data (Mean, Median, Mode & Ogives)',
        'Archival Unit 18 (ett-math-18): Calculating probability (Sample spaces & events)',
      ],
      pa: [
        'ਪੁਰਾਣੀ ਇਕਾਈ 17 (ett-math-17): ਅੰਕੜਿਆਂ ਦੀ ਵਿਆਖਿਆ (ਮੱਧਮਾਨ, ਮੱਧਿਕਾ, ਬਹੁਲਕ ਅਤੇ ਗ੍ਰਾਫ਼)',
        'ਪੁਰਾਣੀ ਇਕਾਈ 18 (ett-math-18): ਸੰਭਾਵਨਾ ਦੀ ਗਣਨਾ',
      ],
      hi: [
        'पुरानी इकाई 17 (ett-math-17): सांख्यिकीय आँकड़ों की व्याख्या (माध्य, माध्यिका, बहुलक और आलेख)',
        'पुरानी इकाई 18 (ett-math-18): प्रायिकता की गणना',
      ],
    },
    levelBreakdown: {
      B: {
        en: 'Ungrouped Mean, Median (sort first!) & Mode; probability bounds 0 ≤ P(E) ≤ 1 and P(E) + P(not E) = 1.',
        pa: 'ਅਸਮੂਹਿਤ ਅੰਕੜਿਆਂ ਦਾ ਮੱਧਮਾਨ, ਮੱਧਿਕਾ ਅਤੇ ਬਹੁਲਕ; ਸੰਭਾਵਨਾ ਦੀਆਂ ਸੀਮਾਵਾਂ 0 ≤ P(E) ≤ 1 ਅਤੇ P(E) + P(not E) = 1।',
        hi: 'अवर्गीकृत आँकड़ों का माध्य, माध्यिका और बहुलक; प्रायिकता की सीमाएँ 0 ≤ P(E) ≤ 1 और P(E) + P(not E) = 1।',
      },
      I: {
        en: 'Empirical formula Mode = 3 Median − 2 Mean; Grouped Mode/Median formulas; Ogive intersection = Median on x-axis; Coins, 2 Dice (36 outcomes) & 52 Cards.',
        pa: 'ਅਨੁਭਵੀ ਸੂਤਰ ਬਹੁਲਕ = 3 ਮੱਧਿਕਾ − 2 ਮੱਧਮਾਨ; ਤੋਰਨਾਂ ਦਾ ਕਾਟ ਬਿੰਦੂ = x-ਧੁਰੇ ਉੱਤੇ ਮੱਧਿਕਾ; ਸਿੱਕੇ, 2 ਪਾਸੇ (36) ਅਤੇ 52 ਪੱਤੇ।',
        hi: 'आनुभविक सूत्र बहुलक = 3 माध्यिका − 2 माध्य; तोरणों का प्रतिच्छेदन बिंदु = x-अक्ष पर माध्यिका; सिक्के, 2 पासे (36) और 52 पत्ते।',
      },
      A: {
        en: 'Effect of adding/multiplying constant k on Mean; corrected Mean after wrong entry; Leap year 53 Sundays (2/7) vs Ordinary year (1/7).',
        pa: 'ਹਰੇਕ ਪ੍ਰੇਖਣ ਵਿੱਚ k ਜੋੜਨ/ਗੁਣਾ ਕਰਨ ਦਾ ਮੱਧਮਾਨ ਉੱਤੇ ਪ੍ਰਭਾਵ; ਗਲਤ ਅੰਕੜੇ ਤੋਂ ਬਾਅਦ ਸਹੀ ਮੱਧਮਾਨ; ਲੀਪ ਸਾਲ ਵਿੱਚ 53 ਐਤਵਾਰ (2/7)।',
        hi: 'प्रत्येक प्रेक्षण में k जोड़ने/गुणा करने का माध्य पर प्रभाव; गलत प्रविष्टि के बाद सही माध्य; लीप वर्ष में 53 रविवार (2/7)।',
      },
    },
    sixtySecondShortcut: {
      en: 'Two-Dice Sum Triangle: For sum S between 2 and 7, favourable outcomes = S − 1; for sum S between 7 and 12, favourable outcomes = 13 − S (e.g., sum 7 → 6/36 = 1/6; sum 8 → 5/36; sum 11 → 2/36 = 1/18)!',
      pa: 'ਦੋ ਪਾਸਿਆਂ ਦੇ ਜੋੜ ਦੀ ਟ੍ਰਿਕ: ਜੋੜ S (2 ਤੋਂ 7) ਲਈ ਅਨੁਕੂਲ ਨਤੀਜੇ = S − 1; ਅਤੇ ਜੋੜ S (7 ਤੋਂ 12) ਲਈ ਅਨੁਕੂਲ ਨਤੀਜੇ = 13 − S (ਜਿਵੇਂ ਜੋੜ 7 → 6/36 = 1/6; ਜੋੜ 8 → 5/36)!',
      hi: 'दो पासों के योग की ट्रिक: योग S (2 से 7) के लिए अनुकूल परिणाम = S − 1; और योग S (7 से 12) के लिए अनुकूल परिणाम = 13 − S (जैसे योग 7 → 6/36 = 1/6; योग 8 → 5/36)!',
    },
    classMapping: 'NCERT / PSEB Class 9 Ch. 14–15 & Class 10 Ch. 14–15',
    questionCount: 10,
  },
  {
    topicId: 'ett-light-reflection',
    paper: 'Paper B (Merit)',
    subject: {
      en: 'Paper B: General Science (20 Qs · 40 Marks)',
      pa: 'ਪੇਪਰ B: ਜਨਰਲ ਸਾਇੰਸ (20 ਸਵਾਲ · 40 ਅੰਕ)',
      hi: 'पेपर B: सामान्य विज्ञान (20 प्रश्न · 40 अंक)',
    },
    marksWeight: 'Paper B: Archival Physics Subtopic (Light)',
    title: {
      en: 'General Science (Optics): Reflection of Light & Plane Mirrors (Level B → I → A)',
      pa: 'ਜਨਰਲ ਸਾਇੰਸ (ਪ੍ਰਕਾਸ਼): ਪ੍ਰਕਾਸ਼ ਦਾ ਪਰਾਵਰਤਨ ਅਤੇ ਸਮਤਲ ਦਰਪਣ (Level B → I → A)',
      hi: 'सामान्य विज्ञान (प्रकाश): प्रकाश का परावर्तन और समतल दर्पण (Level B → I → A)',
    },
    officialHeadingsCovered: {
      en: ['Archival Science Unit 6 (light): Light reflection and refraction — Reflection and plane mirrors'],
      pa: ['ਪੁਰਾਣੀ ਸਾਇੰਸ ਇਕਾਈ 6 (light): ਪ੍ਰਕਾਸ਼: ਪਰਾਵਰਤਨ ਅਤੇ ਅਪਵਰਤਨ — ਪਰਾਵਰਤਨ ਅਤੇ ਸਮਤਲ ਦਰਪਣ'],
      hi: ['पुरानी विज्ञान इकाई 6 (light): प्रकाश: परावर्तन और अपवर्तन — परावर्तन और समतल दर्पण'],
    },
    levelBreakdown: {
      B: {
        en: 'Laws of reflection (i = r measured from normal), regular vs diffuse reflection.',
        pa: 'ਪਰਾਵਰਤਨ ਦੇ ਨਿਯਮ (ਅਭਿਲੰਬ ਤੋਂ i = r), ਨਿਯਮਿਤ ਅਤੇ ਵਿਸਰਿਤ ਪਰਾਵਰਤਨ।',
        hi: 'परावर्तन के नियम (अभिलंब से i = r), नियमित और विसरित परावर्तन।',
      },
      I: {
        en: 'Plane mirror image properties (virtual, erect, laterally inverted, v = u, m = +1), minimum mirror height H/2.',
        pa: 'ਸਮਤਲ ਦਰਪਣ ਵਿੱਚ ਪ੍ਰਤੀਬਿੰਬ ਦੇ ਗੁਣ (ਆਭਾਸੀ, ਸਿੱਧਾ, ਪਾਸੇ ਦਾ ਉਲਟਾਅ, m = +1), ਘੱਟੋ-ਘੱਟ ਦਰਪਣ ਉਚਾਈ H/2।',
        hi: 'समतल दर्पण में प्रतिबिंब के गुण (आभासी, सीधा, पार्श्व परिवर्तन, m = +1), न्यूनतम दर्पण ऊँचाई H/2।',
      },
      A: {
        en: 'Glancing angle i = 90° − θ, relative speed towards mirror (2v w.r.t. object), multiple images n = (360°/θ) − 1.',
        pa: 'ਦਰਪਣ ਦੀ ਸਤ੍ਹਾ ਤੋਂ ਕੋਣ θ ਹੋਣ ਤੇ i = 90° − θ, ਸਾਪੇਖ ਚਾਲ 2v, ਦੋ ਦਰਪਣਾਂ ਵਿਚਕਾਰ ਪ੍ਰਤੀਬਿੰਬ n = (360°/θ) − 1।',
        hi: 'दर्पण की सतह से कोण θ होने पर i = 90° − θ, सापेक्ष चाल 2v, दो दर्पणों के बीच प्रतिबिंब n = (360°/θ) − 1।',
      },
    },
    sixtySecondShortcut: {
      en: 'Always check whether the given angle θ is with the NORMAL (i = θ) or with the MIRROR SURFACE (i = 90° − θ)!',
      pa: 'ਹਮੇਸ਼ਾ ਵੇਖੋ ਕਿ ਕੋਣ θ ਅਭਿਲੰਬ ਨਾਲ ਦਿੱਤਾ ਹੈ (i = θ) ਜਾਂ ਦਰਪਣ ਦੀ ਸਤ੍ਹਾ ਨਾਲ (i = 90° − θ)!',
      hi: 'हमेशा देखें कि कोण θ अभिलंब के साथ दिया है (i = θ) या दर्पण की सतह के साथ (i = 90° − θ)!',
    },
    classMapping: 'NCERT / PSEB Class 10 Science Ch. 10',
    questionCount: 20,
  },
  {
    topicId: 'ett-science-motion',
    paper: 'Paper B (Merit)',
    subject: {
      en: 'Paper B: General Science (20 Qs · 40 Marks)',
      pa: 'ਪੇਪਰ B: ਜਨਰਲ ਸਾਇੰਸ (20 ਸਵਾਲ · 40 ਅੰਕ)',
      hi: 'पेपर B: सामान्य विज्ञान (20 प्रश्न · 40 अंक)',
    },
    marksWeight: 'Paper B: ~14–16 of 40 Science Marks',
    title: {
      en: 'General Science I (Physics Class 9–10): Motion, Force, Gravitation, Work-Energy, Sound, Electricity, Magnetism & Human Eye (Level B → I → A)',
      pa: 'ਜਨਰਲ ਸਾਇੰਸ I (ਭੌਤਿਕ ਵਿਗਿਆਨ ਜਮਾਤ 9–10): ਗਤੀ, ਬਲ, ਗੁਰੁਤਵਾਕਰਸ਼ਣ, ਕੰਮ ਤੇ ਊਰਜਾ, ਧੁਨੀ, ਬਿਜਲੀ, ਚੁੰਬਕਤਾ ਅਤੇ ਮਨੁੱਖੀ ਅੱਖ (Level B → I → A)',
      hi: 'सामान्य विज्ञान I (भौतिकी कक्षा 9–10): गति, बल, गुरुत्वाकर्षण, कार्य व ऊर्जा, ध्वनि, विद्युत, चुंबकत्व और मानव नेत्र (Level B → I → A)',
    },
    officialHeadingsCovered: {
      en: [
        'Archival Science Units 1–5: Motion, Force & laws of motion, Gravitation, Work & energy, Sound',
        'Archival Science Units 7–9 & 26: Electricity, Magnetism, Sources of energy, The human eye & colourful world',
      ],
      pa: [
        'ਪੁਰਾਣੀਆਂ ਸਾਇੰਸ ਇਕਾਈਆਂ 1–5: ਗਤੀ, ਬਲ ਅਤੇ ਗਤੀ ਦੇ ਨਿਯਮ, ਗੁਰੁਤਵਾਕਰਸ਼ਣ, ਕੰਮ ਅਤੇ ਊਰਜਾ, ਧੁਨੀ',
        'ਪੁਰਾਣੀਆਂ ਸਾਇੰਸ ਇਕਾਈਆਂ 7–9 ਅਤੇ 26: ਬਿਜਲੀ, ਚੁੰਬਕਤਾ, ਊਰਜਾ ਦੇ ਸਰੋਤ, ਮਨੁੱਖੀ ਅੱਖ ਅਤੇ ਰੰਗੀਨ ਸੰਸਾਰ',
      ],
      hi: [
        'पुरानी विज्ञान इकाइयाँ 1–5: गति, बल और गति के नियम, गुरुत्वाकर्षण, कार्य और ऊर्जा, ध्वनि',
        'पुरानी विज्ञान इकाइयाँ 7–9 और 26: विद्युत, चुंबकत्व, ऊर्जा के स्रोत, मानव नेत्र और रंगबिरंगा संसार',
      ],
    },
    levelBreakdown: {
      B: {
        en: 'SI units, 3 Equations of Motion, Newton’s 3 Laws, Weight on Moon = W/6, Audible range 20 Hz–20 kHz, Ohm’s Law V = IR.',
        pa: 'SI ਇਕਾਈਆਂ, ਗਤੀ ਦੀਆਂ 3 ਸਮੀਕਰਨਾਂ, ਨਿਊਟਨ ਦੇ 3 ਨਿਯਮ, ਚੰਦਰਮਾ ਉੱਤੇ ਭਾਰ = W/6, ਸੁਣਨਯੋਗ ਧੁਨੀ 20 Hz–20 kHz, ਓਮ ਦਾ ਨਿਯਮ V = IR।',
        hi: 'SI मात्रक, गति के 3 समीकरण, न्यूटन के 3 नियम, चंद्रमा पर भार = W/6, श्रव्य परास 20 Hz–20 kHz, ओम का नियम V = IR।',
      },
      I: {
        en: 'KE = ½mv² = p²/2m, Echo minimum distance 17.2 m, Myopia (Concave) vs Hypermetropia (Convex), Series vs Parallel resistors, 1 kWh = 3.6 × 10⁶ J.',
        pa: 'KE = ½mv² = p²/2m, ਗੂੰਜ ਲਈ ਘੱਟੋ-ਘੱਟ ਦੂਰੀ 17.2 m, ਨਿਕਟ-ਦ੍ਰਿਸ਼ਟੀ (ਅਵਤਲ) ਬਨਾਮ ਦੂਰ-ਦ੍ਰਿਸ਼ਟੀ (ਉੱਤਲ), ਲੜੀਵਾਰ ਤੇ ਸਮਾਂਤਰ ਪ੍ਰਤੀਰੋਧ, 1 kWh = 3.6 × 10⁶ J।',
        hi: 'KE = ½mv² = p²/2m, प्रतिध्वनि हेतु न्यूनतम दूरी 17.2 m, निकट-दृष्टि (अवतल) बनाम दूर-दृष्टि (उत्तल), श्रेणी व समांतर प्रतिरोध, 1 kWh = 3.6 × 10⁶ J।',
      },
      A: {
        en: 'Wire stretched to n× length ⇒ R’ = n²R; recoil velocity conservation of momentum; Fleming’s Left-Hand (Motor) vs Right-Hand (Generator) rule.',
        pa: 'ਤਾਰ ਨੂੰ ਖਿੱਚ ਕੇ n ਗੁਣਾ ਲੰਬਾ ਕਰਨ ਤੇ R’ = n²R; ਬੰਦੂਕ ਦਾ ਪਿੱਛੇ ਹਟਣਾ; ਫਲੈਮਿੰਗ ਦਾ ਖੱਬਾ ਹੱਥ (ਮੋਟਰ) ਬਨਾਮ ਸੱਜਾ ਹੱਥ (ਜਨਰੇਟਰ) ਨਿਯਮ।',
        hi: 'तार को खींचकर n गुना लंबा करने पर R’ = n²R; बंदूक का प्रतिक्षेप वेग; फ्लेमिंग का वाम-हस्त (मोटर) बनाम दक्षिण-हस्त (जनरेटर) नियम।',
      },
    },
    sixtySecondShortcut: {
      en: 'Wire Stretching vs Folding Rule: If a wire of resistance R is STRETCHED to n times its length, R_new = n²R; if it is FOLDED/DOUBLED on itself to 1/n length, R_new = R / n²!',
      pa: 'ਤਾਰ ਖਿੱਚਣ ਬਨਾਮ ਮੋੜਨ ਦੀ ਟ੍ਰਿਕ: ਜੇ R ਪ੍ਰਤੀਰੋਧ ਵਾਲੀ ਤਾਰ ਨੂੰ ਖਿੱਚ ਕੇ n ਗੁਣਾ ਲੰਬਾ ਕੀਤਾ ਜਾਵੇ ਤਾਂ R_new = n²R; ਅਤੇ ਜੇ ਮੋੜ ਕੇ 1/n ਲੰਬਾਈ ਕੀਤੀ ਜਾਵੇ ਤਾਂ R_new = R / n²!',
      hi: 'तार खींचने बनाम मोड़ने की ट्रिक: यदि R प्रतिरोध के तार को खींचकर n गुना लंबा किया जाए तो R_new = n²R; और मोड़कर 1/n लंबाई किया जाए तो R_new = R / n²!',
    },
    classMapping: 'NCERT / PSEB Class 9 Ch. 8–12 & Class 10 Ch. 10–14',
    questionCount: 10,
  },
  {
    topicId: 'ett-science-acids',
    paper: 'Paper B (Merit)',
    subject: {
      en: 'Paper B: General Science (20 Qs · 40 Marks)',
      pa: 'ਪੇਪਰ B: ਜਨਰਲ ਸਾਇੰਸ (20 ਸਵਾਲ · 40 ਅੰਕ)',
      hi: 'पेपर B: सामान्य विज्ञान (20 प्रश्न · 40 अंक)',
    },
    marksWeight: 'Paper B: ~22–26 of 40 Science Marks',
    title: {
      en: 'General Science II (Chemistry & Biology Class 9–10): Matter, Atoms, Reactions, Acids/Salts, Metals, Carbon, Cell, Life Processes & Heredity (Level B → I → A)',
      pa: 'ਜਨਰਲ ਸਾਇੰਸ II (ਰਸਾਇਣ ਅਤੇ ਜੀਵ ਵਿਗਿਆਨ ਜਮਾਤ 9–10): ਪਦਾਰਥ, ਪਰਮਾਣੂ, ਤੇਜ਼ਾਬ-ਖਾਰ-ਲੂਣ, ਧਾਤਾਂ, ਕਾਰਬਨ, ਸੈੱਲ, ਜੀਵਨ ਕਿਰਿਆਵਾਂ ਅਤੇ ਵਿਰਾਸਤ (Level B → I → A)',
      hi: 'सामान्य विज्ञान II (रसायन व जीव विज्ञान कक्षा 9–10): पदार्थ, परमाणु, अम्ल-क्षार-लवण, धातु, कार्बन, कोशिका, जैव प्रक्रम और आनुवंशिकता (Level B → I → A)',
    },
    officialHeadingsCovered: {
      en: [
        'Archival Chemistry Units 10–15: Matter ("Metter"), Atoms & molecules, Chemical reactions, Acids/bases/salts, Metals & non-metals, Carbon compounds',
        'Archival Biology Units 16–25: Cell, Tissues, Diversity, Why do we fall ill, Natural resources, Food resources, Life processes, Control & coordination, Reproduction, Heredity & evolution',
      ],
      pa: [
        'ਪੁਰਾਣੀਆਂ ਰਸਾਇਣ ਇਕਾਈਆਂ 10–15: ਪਦਾਰਥ ("Metter"), ਪਰਮਾਣੂ ਤੇ ਅਣੂ, ਰਸਾਇਣਕ ਕਿਰਿਆਵਾਂ, ਤੇਜ਼ਾਬ/ਖਾਰ/ਲੂਣ, ਧਾਤਾਂ ਤੇ ਅਧਾਤਾਂ, ਕਾਰਬਨ ਦੇ ਯੋਗਿਕ',
        'ਪੁਰਾਣੀਆਂ ਜੀਵ ਵਿਗਿਆਨ ਇਕਾਈਆਂ 16–25: ਸੈੱਲ, ਟਿਸ਼ੂ, ਵਿਭਿੰਨਤਾ, ਬਿਮਾਰੀਆਂ, ਕੁਦਰਤੀ ਸਰੋਤ, ਭੋਜਨ ਸਰੋਤ, ਜੀਵਨ ਕਿਰਿਆਵਾਂ, ਨਿਯੰਤਰਣ ਤੇ ਤਾਲਮੇਲ, ਪ੍ਰਜਨਨ, ਵਿਰਾਸਤ ਤੇ ਵਿਕਾਸ',
      ],
      hi: [
        'पुरानी रसायन इकाइयाँ 10–15: पदार्थ ("Metter"), परमाणु व अणु, रासायनिक अभिक्रियाएँ, अम्ल/क्षार/लवण, धातु व अधातु, कार्बन एवं उसके यौगिक',
        'पुरानी जीव विज्ञान इकाइयाँ 16–25: कोशिका, ऊतक, विविधता, रोग, प्राकृतिक संसाधन, खाद्य संसाधन, जैव प्रक्रम, नियंत्रण व समन्वय, प्रजनन, आनुवंशिकता व विकास',
      ],
    },
    levelBreakdown: {
      B: {
        en: 'Sublimation, Kelvin T_K = T_C + 273, pH scale, 5 common salts (Baking soda, Washing soda, Bleaching powder, POP), Cell organelles, Xylem vs Phloem.',
        pa: 'ਉਰਧਵਪਾਤਨ (Sublimation), T_K = T_C + 273, pH ਪੈਮਾਨਾ, 5 ਮਹੱਤਵਪੂਰਨ ਲੂਣ (ਮਿੱਠਾ ਸੋਡਾ, ਕੱਪੜੇ ਧੋਣ ਵਾਲਾ ਸੋਡਾ, ਬਲੀਚਿੰਗ ਪਾਊਡਰ, POP), ਸੈੱਲ ਅੰਗ, ਜ਼ਾਈਲਮ ਬਨਾਮ ਫਲੋਇਮ।',
        hi: 'ऊर्ध्वपातन, T_K = T_C + 273, pH पैमाना, 5 प्रमुख लवण (बेकिंग सोडा, धोने का सोडा, विरंजक चूर्ण, POP), कोशिकांग, जाइलम बनाम फ्लोएम।',
      },
      I: {
        en: 'Mole concept, Isotopes (Co-60, I-131), Reactivity series, Amphoteric oxides (Al₂O₃, ZnO), Homologous series (-CH₂- / 14 u), Double circulation, Nephron, Plant & Human hormones.',
        pa: 'ਮੋਲ ਸੰਕਲਪ, ਸਮਸਥਾਨਕ (Co-60, I-131), ਕਿਰਿਆਸ਼ੀਲਤਾ ਲੜੀ, ਉਭਯਧਰਮੀ ਆਕਸਾਈਡ (Al₂O₃, ZnO), ਸਮਜਾਤੀ ਲੜੀ (-CH₂- / 14 u), ਦੋਹਰਾ ਲਹੂ ਗੇੜ, ਨੈਫਰਾਨ, ਪੌਦਾ ਅਤੇ ਮਨੁੱਖੀ ਹਾਰਮੋਨ।',
        hi: 'मोल संकल्पना, समस्थानिक (Co-60, I-131), सक्रियता श्रेणी, उभयधर्मी ऑक्साइड (Al₂O₃, ZnO), समजातीय श्रेणी (-CH₂- / 14 u), दोहरा परिसंचरण, नेफ्रॉन, पादप व मानव हार्मोन।',
      },
      A: {
        en: 'Photolytic decomposition of AgBr, Thermite welding, Esterification vs Saponification, Aerobic vs Yeast/Muscle Anaerobic pathways, Mendel 3:1 & 9:3:3:1 crosses, Homologous vs Analogous organs.',
        pa: 'AgBr ਦਾ ਪ੍ਰਕਾਸ਼ੀ ਅਪਘਟਨ, ਥਰਮਾਈਟ ਕਿਰਿਆ, ਐਸਟਰੀਕਰਨ ਬਨਾਮ ਸਾਬਣੀਕਰਨ, ਆਕਸੀ ਅਤੇ ਅਣ-ਆਕਸੀ ਸਾਹ ਕਿਰਿਆ, ਮੈਂਡਲ ਦੇ 3:1 ਅਤੇ 9:3:3:1 ਅਨੁਪਾਤ, ਸਮजात ਬਨਾਮ ਸਮਰੂਪ ਅੰਗ।',
        hi: 'AgBr का प्रकाशीय अपघटन, थर्माइट अभिक्रिया, एस्टरीकरण बनाम साबुनीकरण, वायवीय व अवायवीय श्वसन, मेंडल के 3:1 व 9:3:3:1 अनुपात, समजात बनाम समरूप अंग।',
      },
    },
    sixtySecondShortcut: {
      en: 'Salt Hydration Memory Code: Gypsum = CaSO₄·2H₂O → heat at 373 K (100°C) → Plaster of Paris = CaSO₄·½H₂O; Washing Soda = Na₂CO₃·10H₂O; Blue Vitriol = CuSO₄·5H₂O; Green Vitriol = FeSO₄·7H₂O!',
      pa: 'ਲੂਣਾਂ ਵਿੱਚ ਪਾਣੀ ਦੇ ਅਣੂ ਟ੍ਰਿਕ: ਜਿਪਸਮ = CaSO₄·2H₂O → 373 K ਤੇ ਗਰਮ → ਪਲਾਸਟਰ ਆਫ਼ ਪੈਰਿਸ = CaSO₄·½H₂O; ਕੱਪੜੇ ਧੋਣ ਵਾਲਾ ਸੋਡਾ = Na₂CO₃·10H₂O; ਨੀਲਾ ਥੋਥਾ = CuSO₄·5H₂O; ਹਰਾ ਕਸੀਸ = FeSO₄·7H₂O!',
      hi: 'लवणों में क्रिस्टलन जल ट्रिक: जिप्सम = CaSO₄·2H₂O → 373 K पर गर्म → प्लास्टर ऑफ पेरिस = CaSO₄·½H₂O; धोने का सोडा = Na₂CO₃·10H₂O; नीला थोथा = CuSO₄·5H₂O; हरा कसीस = FeSO₄·7H₂O!',
    },
    classMapping: 'NCERT / PSEB Class 9 Ch. 1–7, 13–15 & Class 10 Ch. 1–9, 15–16',
    questionCount: 10,
  },
  {
    topicId: 'ett-sst-history-3',
    paper: 'Paper B (Merit)',
    subject: {
      en: 'Paper B: Social Studies (20 Qs · 40 Marks)',
      pa: 'ਪੇਪਰ B: ਸਮਾਜਿਕ ਵਿਗਿਆਨ (20 ਸਵਾਲ · 40 ਅੰਕ)',
      hi: 'पेपर B: सामाजिक विज्ञान (20 प्रश्न · 40 अंक)',
    },
    marksWeight: 'Paper B: All 40 Social Studies Marks (28 Archival Units)',
    title: {
      en: 'Social Studies Complete Blueprint: All 28 Archival Units — Punjab History, Indian Civics, Geography & Economy (Level B → I → A)',
      pa: 'ਸਮਾਜਿਕ ਵਿਗਿਆਨ ਸੰਪੂਰਨ ਬਲੂਪ੍ਰਿੰਟ: 28 ਪੁਰਾਣੀਆਂ ਇਕਾਈਆਂ — ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ, ਨਾਗਰਿਕ ਸ਼ਾਸਤਰ, ਭੂਗੋਲ ਅਤੇ ਅਰਥਸ਼ਾਸਤਰ (Level B → I → A)',
      hi: 'सामाजिक विज्ञान संपूर्ण ब्लूप्रिंट: 28 पुरानी इकाइयाँ — पंजाब का इतिहास, नागरिक शास्त्र, भूगोल और अर्थशास्त्र (Level B → I → A)',
    },
    officialHeadingsCovered: {
      en: [
        'Punjab History (9 Archival Units: ett-sst-history-1 to 9): Physical features, Pre-Nanak Punjab, Guru Nanak Dev Ji, Guru Angad to Guru Tegh Bahadur Ji, Guru Gobind Singh Ji & Khalsa, Banda Singh Bahadur & Sikh Misls, Maharaja Ranjit Singh, Anglo-Sikh Wars & Annexation, Punjab in Freedom Struggle',
        'Civics (7 Archival Units: ett-sst-civics-1 to 7): Democracy, Constitutional Rights, Features, Union Govt, State Govt, Indian Democracy Structure, Foreign Policy & UNO',
        'Geography (8 Archival Units: ett-sst-geography-1 to 8): India Location, Landforms, Climate, Vegetation/Wildlife/Soils, Land Use & Agriculture, Minerals & Energy, Population, Punjab Geography & Farming',
        'Economics (4 Archival Units: ett-sst-economics-1 to 4): Economic Foundations, India’s Economic Framework, Agricultural Development, Industrial Development',
      ],
      pa: [
        'ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ (9 ਇਕਾਈਆਂ): ਭੂਗੋਲਿਕ ਪ੍ਰਭਾਵ, ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਤੋਂ ਪਹਿਲਾਂ ਦਾ ਪੰਜਾਬ, ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ, ਦੂਜੇ ਤੋਂ ਨੌਵੇਂ ਗੁਰੂ ਸਾਹਿਬਾਨ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਤੇ ਖਾਲਸਾ, ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਤੇ ਮਿਸਲਾਂ, ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ, ਅੰਗਰੇਜ਼-ਸਿੱਖ ਯੁੱਧ, ਆਜ਼ਾਦੀ ਸੰਘਰਸ਼ ਵਿੱਚ ਪੰਜਾਬ ਦਾ ਯੋਗਦਾਨ',
        'ਨਾਗਰਿਕ ਸ਼ਾਸਤਰ (7 ਇਕਾਈਆਂ): ਲੋਕਤੰਤਰ, ਸੰਵਿਧਾਨਕ ਅਧਿਕਾਰ, ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ, ਕੇਂਦਰ ਸਰਕਾਰ, ਰਾਜ ਸਰਕਾਰ, ਭਾਰਤੀ ਲੋਕਤੰਤਰ, ਵਿਦੇਸ਼ ਨੀਤੀ ਅਤੇ UNO',
        'ਭੂਗੋਲ (8 ਇਕਾਈਆਂ): ਭਾਰਤ ਦੀ ਸਥਿਤੀ, ਧਰਾਤਲ, ਜਲਵਾਯੂ, ਬਨਸਪਤੀ ਤੇ ਮਿੱਟੀਆਂ, ਖੇਤੀਬਾੜੀ, ਖਣਿਜ ਤੇ ਊਰਜਾ, ਜਨਸੰਖਿਆ, ਪੰਜਾਬ ਦਾ ਭੂਗੋਲ',
        'ਅਰਥਸ਼ਾਸਤਰ (4 ਇਕਾਈਆਂ): ਮੁੱਢਲੀਆਂ ਧਾਰਨਾਵਾਂ, ਭਾਰਤੀ ਅਰਥਵਿਵਸਥਾ, ਖੇਤੀਬਾੜੀ ਵਿਕਾਸ, ਉਦਯੋਗਿਕ ਵਿਕਾਸ',
      ],
      hi: [
        'पंजाब का इतिहास (9 इकाइयाँ): भौगोलिक प्रभाव, गुरु नानक पूर्व पंजाब, गुरु नानक देव जी, दूसरे से नौवें गुरु साहिबान, गुरु गोबिंद सिंह जी व खालसा, बंदा सिंह बहादुर व मिसलें, महाराजा रणजीत सिंह, आंग्ल-सिख युद्ध, स्वतंत्रता संग्राम में पंजाब का योगदान',
        'नागरिक शास्त्र (7 इकाइयाँ): लोकतंत्र, संवैधानिक अधिकार, विशेषताएँ, केंद्र सरकार, राज्य सरकार, भारतीय लोकतंत्र, विदेश नीति और UNO',
        'भूगोल (8 इकाइयाँ): भारत की स्थिति, स्थलाकृति, जलवायु, वनस्पति व मिट्टियाँ, कृषि, खनिज व ऊर्जा, जनसंख्या, पंजाब का भूगोल',
        'अर्थशास्त्र (4 इकाइयाँ): मूल अवधारणाएँ, भारतीय अर्थव्यवस्था, कृषि विकास, औद्योगिक विकास',
      ],
    },
    levelBreakdown: {
      B: {
        en: 'Ten Sikh Gurus chronology & founded towns, Punjab rivers & Doabs, Fundamental Rights (Art 12–35), Punjab seats (117 Vidhan Sabha, 13 Lok Sabha, 7 Rajya Sabha).',
        pa: 'ਦਸ ਸਿੱਖ ਗੁਰੂ ਸਾਹਿਬਾਨ ਅਤੇ ਵਸਾਏ ਨਗਰ, ਪੰਜਾਬ ਦੇ ਦਰਿਆ ਅਤੇ ਦੁਆਬੇ, ਮੌਲਿਕ ਅਧਿਕਾਰ (ਅਨੁਛੇਦ 12–35), ਪੰਜਾਬ ਦੀਆਂ ਸੀਟਾਂ (117 ਵਿਧਾਨ ਸਭਾ, 13 ਲੋਕ ਸਭਾ, 7 ਰਾਜ ਸਭਾ)।',
        hi: 'दस सिख गुरु साहिबान और बसाए नगर, पंजाब की नदियाँ और दोआब, मौलिक अधिकार (अनुच्छेद 12–35), पंजाब की सीटें (117 विधानसभा, 13 लोकसभा, 7 राज्यसभा)।',
      },
      I: {
        en: 'Banda Singh Bahadur (Chappar Chiri 1710, Lohgarh), Ranjit Singh (Treaty of Amritsar 1809), Anglo-Sikh Wars (1845–46, 1848–49, Annexation 29 March 1849), 73rd/74th Amendments, UNO.',
        pa: 'ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ (ਚੱਪੜਚਿੜੀ 1710, ਲੋਹਗੜ੍ਹ), ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ (ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ 1809), ਅੰਗਰੇਜ਼-ਸਿੱਖ ਯੁੱਧ ਅਤੇ 29 ਮਾਰਚ 1849 ਦਾ ਕਬਜ਼ਾ, 73ਵੀਂ/74ਵੀਂ ਸੋਧ, UNO।',
        hi: 'बंदा सिंह बहादुर (चप्पड़चिड़ी 1710, लोहगढ़), महाराजा रणजीत सिंह (अमृतसर की संधि 1809), आंग्ल-सिख युद्ध और 29 मार्च 1849 का विलय, 73वाँ/74वाँ संशोधन, UNO।',
      },
      A: {
        en: 'Punjab freedom movements (Kuka 1857, Ghadar 1913, Komagata Maru 1914, Jallianwala Bagh 1919, Babbar Akali, Praja Mandal), Punjab agro-climatic zones & Green Revolution.',
        pa: 'ਪੰਜਾਬ ਦੀਆਂ ਆਜ਼ਾਦੀ ਲਹਿਰਾਂ (ਕੂਕਾ 1857, ਗ਼ਦਰ 1913, ਕਾਮਾਗਾਟਾਮਾਰੂ 1914, ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ਼ 1919, ਬੱਬਰ ਅਕਾਲੀ, ਪ੍ਰਜਾ ਮੰਡਲ), ਪੰਜਾਬ ਦੇ ਖੇਤੀ-ਜਲਵਾਯੂ ਜ਼ੋਨ ਅਤੇ ਹਰੀ ਕ੍ਰਾਂਤੀ।',
        hi: 'पंजाब के स्वतंत्रता आंदोलन (कूका 1857, ग़दर 1913, कामागाटामारू 1914, जलियाँवाला बाग़ 1919, बब्बर अकाली, प्रजा मंडल), पंजाब के कृषि-जलवायु क्षेत्र और हरित क्रांति।',
      },
    },
    sixtySecondShortcut: {
      en: 'Doab River Code: BIST = Beas + Sutlej; BARI = Beas + Ravi; RACHNA = Ravi + Chenab; CHAJ = Chenab + Jhelum; SINDH SAGAR = Jhelum/Chenab + Indus!',
      pa: 'ਪੰਜ ਦੁਆਬੇ ਟ੍ਰਿਕ: ਬਿਸਤ = ਬਿਆਸ + ਸਤਲੁਜ; ਬਾਰੀ = ਬਿਆਸ + ਰਾਵੀ; ਰਚਨਾ = ਰਾਵੀ + ਚਨਾਬ; ਚੱਜ = ਚਨਾਬ + ਜਿਹਲਮ; ਸਿੰਧ ਸਾਗਰ = ਜਿਹਲਮ + ਸਿੰਧ!',
      hi: 'पाँच दोआब ट्रिक: बिस्त = ब्यास + सतलुज; बारी = ब्यास + रावी; रचना = रावी + चिनाब; चज्ज = चिनाब + झेलम; सिंध सागर = झेलम + सिंधु!',
    },
    classMapping: 'PSEB Social Science Class 9 & Class 10 (Punjab History, Geography, Civics, Economics)',
    questionCount: 10,
  },
  {
    topicId: 'ett-english-2',
    paper: 'Paper B (Merit)',
    subject: {
      en: 'Paper B: English (10 Qs · 20 Marks)',
      pa: 'ਪੇਪਰ B: ਅੰਗਰੇਜ਼ੀ (10 ਸਵਾਲ · 20 ਅੰਕ)',
      hi: 'पेपर B: अंग्रेज़ी (10 प्रश्न · 20 अंक)',
    },
    marksWeight: 'Paper B: All 20 English Marks (4 Archival Units)',
    title: {
      en: 'English Complete Blueprint: Reading Comprehension, Grammar, Voice, Narration, Vocabulary & Punjabi-English Translation (Level B → I → A)',
      pa: 'ਅੰਗਰੇਜ਼ੀ ਸੰਪੂਰਨ ਬਲੂਪ੍ਰਿੰਟ: ਅਣਪੜ੍ਹਿਆ ਪੈਰਾ, ਵਿਆਕਰਨ, ਵਾਚ, ਨੈਰੇਸ਼ਨ, ਸ਼ਬਦਾਵਲੀ ਅਤੇ ਪੰਜਾਬੀ-ਅੰਗਰੇਜ਼ੀ ਅਨੁਵਾਦ (Level B → I → A)',
      hi: 'अंग्रेज़ी संपूर्ण ब्लूप्रिंट: अपठित गद्यांश, व्याकरण, वाच्य, कथन परिवर्तन, शब्दावली और पंजाबी-अंग्रेज़ी अनुवाद (Level B → I → A)',
    },
    officialHeadingsCovered: {
      en: [
        'Archival Unit 1 (ett-english-1): Understanding an unfamiliar passage',
        'Archival Unit 2 (ett-english-2): Grammar — Articles, Prepositions, Determiners, Conjunctions, Modals, Error correction, Tenses, Voice, Narration, Transformation, Clauses',
        'Archival Unit 3 (ett-english-3): Vocabulary — One-word substitution, Antonyms, Synonyms, Idioms & phrases',
        'Archival Unit 4 (ett-english-4): Translation between English and Punjabi (both ways)',
      ],
      pa: [
        'ਪੁਰਾਣੀ ਇਕਾਈ 1 (ett-english-1): ਅਣਪੜ੍ਹੇ ਗੱਦ ਅੰਸ਼ ਨੂੰ ਸਮਝਣਾ',
        'ਪੁਰਾਣੀ ਇਕਾਈ 2 (ett-english-2): ਵਿਆਕਰਨ — ਆਰਟੀਕਲ, ਪ੍ਰੈਪੋਜ਼ੀਸ਼ਨ, ਡਿਟਰਮੀਨਰ, ਕੰਜੰਕਸ਼ਨ, ਮੋਡਲ, ਗਲਤੀ ਸੁਧਾਰ, ਕਾਲ, ਵਾਇਸ, ਨੈਰੇਸ਼ਨ, ਵਾਕ ਵਟਾਂਦਰਾ, ਉਪਵਾਕ',
        'ਪੁਰਾਣੀ ਇਕਾਈ 3 (ett-english-3): ਸ਼ਬਦਾਵਲੀ — ਬਹੁਤੇ ਸ਼ਬਦਾਂ ਦੀ ਥਾਂ ਇੱਕ ਸ਼ਬਦ, ਵਿਰੋਧੀ, ਸਮਾਨਾਰਥਕ, ਮੁਹਾਵਰੇ',
        'ਪੁਰਾਣੀ ਇਕਾਈ 4 (ett-english-4): ਅੰਗਰੇਜ਼ੀ ਅਤੇ ਪੰਜਾਬੀ ਵਿੱਚ ਆਪਸੀ ਅਨੁਵਾਦ',
      ],
      hi: [
        'पुरानी इकाई 1 (ett-english-1): अपरिचित गद्यांश को समझना',
        'पुरानी इकाई 2 (ett-english-2): व्याकरण — आर्टिकल, पूर्वसर्ग, निर्धारक, संयोजक, मोडल, त्रुटि सुधार, काल, वाच्य, नरेशन, वाक्य रूपांतरण, उपवाक्य',
        'पुरानी इकाई 3 (ett-english-3): शब्दावली — वाक्यांश के लिए एक शब्द, विलोम, पर्यायवाची, मुहावरे',
        'पुरानी इकाई 4 (ett-english-4): अंग्रेज़ी और पंजाबी में परस्पर अनुवाद',
      ],
    },
    levelBreakdown: {
      B: {
        en: 'Articles (an hour, a university), Prepositions (at/on/in, since/for, between/among), Determiners (few vs little, some vs any).',
        pa: 'ਆਰਟੀਕਲ (an hour, a university), ਪ੍ਰੈਪੋਜ਼ੀਸ਼ਨ (at/on/in, since/for), ਡਿਟਰਮੀਨਰ (few ਬਨਾਮ little, some ਬਨਾਮ any)।',
        hi: 'आर्टिकल (an hour, a university), पूर्वसर्ग (at/on/in, since/for), निर्धारक (few बनाम little, some बनाम any)।',
      },
      I: {
        en: 'Tenses, Active ↔ Passive Voice (tense-by-tense verb matrix), Direct ↔ Indirect Speech (SON rule & backshift), Modals, Synonyms/Antonyms.',
        pa: 'ਕਾਲ (Tenses), ਐਕਟਿਵ ↔ ਪੈਸਿਵ ਵਾਇਸ, ਡਾਇਰੈਕਟ ↔ ਇਨਡਾਇਰੈਕਟ ਸਪੀਚ (SON ਨਿਯਮ), ਮੋਡਲ, ਸਮਾਨਾਰਥਕ/ਵਿਰੋਧੀ ਸ਼ਬਦ।',
        hi: 'काल (Tenses), एक्टिव ↔ पैसिव वॉइस, डायरेक्ट ↔ इनडायरेक्ट स्पीच (SON नियम), मोडल, पर्यायवाची/विलोम शब्द।',
      },
      A: {
        en: 'Error spotting (neither...nor, one of the + plural noun + singular verb, prefer/senior + to), Clause transformation, Punjabi ↔ English translation.',
        pa: 'ਗਲਤੀ ਲੱਭਣਾ (neither...nor, one of the + ਬਹੁਵਚਨ ਨਾਂਵ + ਇੱਕਵਚਨ ਕਿਰਿਆ, prefer/senior + to), ਉਪਵਾਕ, ਪੰਜਾਬੀ ↔ ਅੰਗਰੇਜ਼ੀ ਅਨੁਵਾਦ।',
        hi: 'त्रुटि पहचान (neither...nor, one of the + बहुवचन संज्ञा + एकवचन क्रिया, prefer/senior + to), उपवाक्य, पंजाबी ↔ अंग्रेज़ी अनुवाद।',
      },
    },
    sixtySecondShortcut: {
      en: 'Voice 3-Second Check: Never change the TENSE in Active ↔ Passive (unlike Narration)! Continuous always adds "being + V3", Perfect always adds "been + V3", Modal always adds "be + V3"!',
      pa: 'ਵਾਇਸ 3-ਸਕਿੰਟ ਟ੍ਰਿਕ: ਐਕਟਿਵ ↔ ਪੈਸਿਵ ਵਿੱਚ ਕਦੇ ਵੀ ਕਾਲ (Tense) ਨਹੀਂ ਬਦਲਦਾ! Continuous ਵਿੱਚ "being + V3", Perfect ਵਿੱਚ "been + V3", ਅਤੇ Modal ਵਿੱਚ "be + V3" ਲੱਗਦਾ ਹੈ!',
      hi: 'वॉइस 3-सेकंड ट्रिक: एक्टिव ↔ पैसिव में कभी भी काल (Tense) नहीं बदलता! Continuous में "being + V3", Perfect में "been + V3", और Modal में "be + V3" लगता है!',
    },
    classMapping: 'PSEB / NCERT English Grammar & Composition (Classes 9–10)',
    questionCount: 10,
  },
  {
    topicId: 'ett-hindi-4',
    paper: 'Paper B (Merit)',
    subject: {
      en: 'Paper B: Hindi (10 Qs · 20 Marks)',
      pa: 'ਪੇਪਰ B: ਹਿੰਦੀ (10 ਸਵਾਲ · 20 ਅੰਕ)',
      hi: 'पेपर B: हिंदी (10 प्रश्न · 20 अंक)',
    },
    marksWeight: 'Paper B: All 20 Hindi Marks (15 Archival Units)',
    title: {
      en: 'Hindi Complete Blueprint: Devanagari Script, Varna, Vikari/Avikari Shabd, Tatsam-Tadbhav, Affixes, Vocabulary & Hindi-to-Punjabi Translation (Level B → I → A)',
      pa: 'ਹਿੰਦੀ ਸੰਪੂਰਨ ਬਲੂਪ੍ਰਿੰਟ: ਦੇਵਨਾਗਰੀ ਲਿਪੀ, ਵਰਣ, ਵਿਕਾਰੀ/ਅਵਿਕਾਰੀ ਸ਼ਬਦ, ਤਤਸਮ-ਤਦਭਵ, ਅਗੇਤਰ-ਪਿਛੇਤਰ, ਸ਼ਬਦਾਵਲੀ ਅਤੇ ਹਿੰਦੀ-ਤੋਂ-ਪੰਜਾਬੀ ਅਨੁਵਾਦ (Level B → I → A)',
      hi: 'हिंदी संपूर्ण ब्लूप्रिंट: देवनागरी लिपि, वर्ण विचार, विकारी/अविकारी शब्द, तत्सम-तद्भव, उपसर्ग-प्रत्यय, शब्दावली और हिंदी-से-पंजाबी अनुवाद (Level B → I → A)',
    },
    officialHeadingsCovered: {
      en: [
        'Archival Units 1–5 (ett-hindi-1 to 5): Language & script, Sounds & letters, Word classification, Inflecting (Vikari) & Uninflected (Avikari) word classes',
        'Archival Units 6–11 (ett-hindi-6 to 11): Synonyms, Tatsam/Tadbhav, Prefixes/Suffixes, One-word substitution, Polysemous words, Antonyms',
        'Archival Units 12–15 (ett-hindi-12 to 15): Correct/incorrect spelling & sentences, Idioms/proverbs, Rendering Hindi into Punjabi',
      ],
      pa: [
        'ਪੁਰਾਣੀਆਂ ਇਕਾਈਆਂ 1–5 (ett-hindi-1 ਤੋਂ 5): ਭਾਸ਼ਾ ਤੇ ਲਿਪੀ, ਧੁਨੀਆਂ ਤੇ ਵਰਣ, ਸ਼ਬਦ ਵਰਗੀਕਰਨ, ਵਿਕਾਰੀ ਅਤੇ ਅਵਿਕਾਰੀ ਸ਼ਬਦ',
        'ਪੁਰਾਣੀਆਂ ਇਕਾਈਆਂ 6–11 (ett-hindi-6 ਤੋਂ 11): ਸਮਾਨਾਰਥਕ, ਤਤਸਮ/ਤਦਭਵ, ਉਪਸਰਗ/ਪ੍ਰਤਿਅ, ਇੱਕ ਸ਼ਬਦ, ਅਨੇਕਾਰਥੀ, ਵਿਲੋਮ ਸ਼ਬਦ',
        'ਪੁਰਾਣੀਆਂ ਇਕਾਈਆਂ 12–15 (ett-hindi-12 ਤੋਂ 15): ਸ਼ੁੱਧ-ਅਸ਼ੁੱਧ ਸ਼ਬਦ ਤੇ ਵਾਕ, ਮੁਹਾਵਰੇ ਤੇ ਲੋਕੋਕਤੀਆਂ, ਹਿੰਦੀ ਤੋਂ ਪੰਜਾਬੀ ਅਨੁਵਾਦ',
      ],
      hi: [
        'पुरानी इकाइयाँ 1–5 (ett-hindi-1 से 5): भाषा और लिपि, ध्वनियाँ और वर्ण, शब्द वर्गीकरण, विकारी और अविकारी शब्द',
        'पुरानी इकाइयाँ 6–11 (ett-hindi-6 से 11): पर्यायवाची, तत्सम/तद्भव, उपसर्ग/प्रत्यय, वाक्यांश के लिए एक शब्द, अनेकार्थी, विलोम',
        'पुरानी इकाइयाँ 12–15 (ett-hindi-12 से 15): शुद्ध-अशुद्ध शब्द व वाक्य, मुहावरे व लोकोक्तियाँ, हिंदी से पंजाबी अनुवाद',
      ],
    },
    levelBreakdown: {
      B: {
        en: 'Devanagari script, 11 Swar & 33 Vyanjan, 4 Sanyukt Vyanjan (क्ष, त्र, ज्ञ, श्र), Rudh/Yaugik/Yogarudh, Vikari vs Avikari.',
        pa: 'ਦੇਵਨਾਗਰੀ ਲਿਪੀ, 11 ਸਵਰ ਅਤੇ 33 ਵਿਅੰਜਨ, 4 ਸੰਯੁਕਤ ਵਿਅੰਜਨ (क्ष, त्र, ज्ञ, श्र), ਰੂੜ੍ਹ/ਯੌਗਿਕ/ਯੋਗਰੂੜ੍ਹ, ਵਿਕਾਰੀ ਬਨਾਮ ਅਵਿਕਾਰੀ।',
        hi: 'देवनागरी लिपि, 11 स्वर व 33 व्यंजन, 4 संयुक्त व्यंजन (क्ष, त्र, ज्ञ, श्र), रूढ़/यौगिक/योगरूढ़, विकारी बनाम अविकारी।',
      },
      I: {
        en: 'Tatsam vs Tadbhav (गोधूम → गेहूँ, हरिद्रा → हल्दी, घृत → घी), Upsarg & Pratyay, Paryayvachi, Vilom, Anekarthi (कनक), Muhavare.',
        pa: 'ਤਤਸਮ ਬਨਾਮ ਤਦਭਵ (गोधूम → गेहूँ, हरिद्रा → हल्दी, घृत → घी), ਉਪਸਰਗ ਤੇ ਪ੍ਰਤਿਅ, ਸਮਾਨਾਰਥਕ, ਵਿਲੋਮ, ਅਨੇਕਾਰਥੀ (कनक), ਮੁਹਾਵਰੇ।',
        hi: 'तत्सम बनाम तद्भव (गोधूम → गेहूँ, हरिद्रा → हल्दी, घृत → घी), उपसर्ग व प्रत्यय, पर्यायवाची, विलोम, अनेकार्थी (कनक), मुहावरे।',
      },
      A: {
        en: 'Alpapran (1,3,5) vs Mahapran (2,4), Aghosh (1,2) vs Saghosh (3,4,5), Shudh Vartani (कवयित्री, उज्ज्वल, आशीर्वाद, संन्यासी), Hindi-to-Punjabi translation.',
        pa: 'ਅਲਪਪ੍ਰਾਣ (1,3,5) ਬਨਾਮ ਮਹਾਪ੍ਰਾਣ (2,4), ਅਘੋਸ਼ (1,2) ਬਨਾਮ ਸਘੋਸ਼ (3,4,5), ਸ਼ੁੱਧ ਵਰतनी (कवयित्री, उज्ज्वल, आशीर्वाद), ਹਿੰਦੀ ਤੋਂ ਪੰਜਾਬੀ ਅਨੁਵਾਦ।',
        hi: 'अल्पप्राण (1,3,5) बनाम महाप्राण (2,4), अघोष (1,2) बनाम सघोष (3,4,5), शुद्ध वर्तनी (कवयित्री, उज्ज्वल, आशीर्वाद, संन्यासी), हिंदी से पंजाबी अनुवाद।',
      },
    },
    sixtySecondShortcut: {
      en: 'Tatsam vs Tadbhav 5-Second Scanner: Words containing ক্ষ (क्ष), त्र, ज्ञ, श्र, ष, ऋ, रेफ (र् as in कर्म/सूर्य), or अं are almost always TATSAM; words containing चंद्रबिंदु (ँ as in गाँव, आँसू, मुँह) or ड़/ढ़ are ALWAYS TADBHAV!',
      pa: 'ਤਤਸਮ-ਤਦਭਵ 5-ਸਕਿੰਟ ਟ੍ਰਿਕ: ਜਿਨ੍ਹਾਂ ਸ਼ਬਦਾਂ ਵਿੱਚ क्ष, त्र, ज्ञ, श्र, ष, ऋ ਜਾਂ ਰੇਫ਼ (र् ਜਿਵੇਂ सूर्य) ਹੋਵੇ ਉਹ ਤਤਸਮ ਹੁੰਦੇ ਹਨ; ਅਤੇ ਚੰਦਰਬਿੰਦੂ (ँ ਜਿਵੇਂ गाँव, आँसू) ਵਾਲੇ ਸ਼ਬਦ ਹਮੇਸ਼ਾ ਤਦਭਵ ਹੁੰਦੇ ਹਨ!',
      hi: 'तत्सम-तद्भव 5-सेकंड ट्रिक: जिन शब्दों में क्ष, त्र, ज्ञ, श्र, ष, ऋ या रेफ (र् जैसे कर्म/सूर्य) हो वे तत्सम होते हैं; और चंद्रबिंदु (ँ जैसे गाँव, आँसू, गेहूँ) वाले शब्द हमेशा तद्भव होते हैं!',
    },
    classMapping: 'PSEB / NCERT Hindi Vyakaran (Classes 8–10)',
    questionCount: 10,
  },
];

export const ETT_PAST_PAPER_CHECKLIST = [
  {
    item: { en: 'Child Development & Pedagogy (CDP)', pa: 'ਬਾਲ ਵਿਕਾਸ ਅਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ (CDP)', hi: 'बाल विकास एवं शिक्षाशास्त्र (CDP)' },
    status: {
      en: 'NOT in 5994 Paper B archival syllabus (unlike PSTET Paper 1 where CDP is 30 marks). Verify when tagging past papers.',
      pa: '5994 ਪੇਪਰ B ਦੇ ਸਿਲੇਬਸ ਵਿੱਚ ਸ਼ਾਮਲ ਨਹੀਂ ਹੈ (PSTET ਪੇਪਰ-1 ਵਿੱਚ 30 ਅੰਕਾਂ ਦਾ ਹੁੰਦਾ ਹੈ)।',
      hi: '5994 पेपर B के पाठ्यक्रम में शामिल नहीं है (PSTET पेपर-1 में 30 अंकों का होता है)।',
    },
  },
  {
    item: { en: 'Punjab History & Culture (Punjab GK)', pa: 'ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ ਅਤੇ ਸੱਭਿਆਚਾਰ (ਪੰਜਾਬ ਜੀ.ਕੇ.)', hi: 'पंजाब का इतिहास और संस्कृति (पंजाब जी.के.)' },
    status: {
      en: 'CONFIRMED inside Paper B Punjabi (Units 1–2: Folk literature & Culture) and Social Science (9 Punjab History units + Unit 8 Punjab Geography).',
      pa: 'ਪੇਪਰ B ਪੰਜਾਬੀ (ਲੋਕ ਸਾਹਿਤ ਤੇ ਸੱਭਿਆਚਾਰ) ਅਤੇ ਸਮਾਜਿਕ ਵਿਗਿਆਨ (ਪੰਜਾਬ ਇਤਿਹਾਸ ਦੀਆਂ 9 ਇਕਾਈਆਂ + ਪੰਜਾਬ ਭੂਗੋਲ) ਵਿੱਚ ਪੁਸ਼ਟੀ ਕੀਤੀ ਗਈ।',
      hi: 'पेपर B पंजाबी (लोक साहित्य व संस्कृति) और सामाजिक विज्ञान (पंजाब इतिहास की 9 इकाइयाँ + पंजाब भूगोल) में पुष्टि की गई।',
    },
  },
  {
    item: { en: 'Current Affairs / Reasoning / Computer Basics', pa: 'ਕਰੰਟ ਅਫੇਅਰਜ਼ / ਰੀਜ਼ਨਿੰਗ / ਕੰਪਿਊਟਰ ਬੇਸਿਕਸ', hi: 'समसामयिकी / रीजनिंग / कंप्यूटर बेसिक्स' },
    status: {
      en: 'NOT listed as separate headings in the 5994 archival PDF. Check actual OMR papers to confirm whether any stray questions appeared under General Studies.',
      pa: '5994 ਪੁਰਾਣੇ PDF ਵਿੱਚ ਵੱਖਰੇ ਵਿਸ਼ੇ ਵਜੋਂ ਦਰਜ ਨਹੀਂ ਹਨ। ਅਸਲ OMR ਪੇਪਰਾਂ ਤੋਂ ਜਾਂਚ ਕਰੋ।',
      hi: '5994 पुराने PDF में अलग विषय के रूप में सूचीबद्ध नहीं हैं। वास्तविक OMR प्रश्नपत्रों से जाँच करें।',
    },
  },
];

export const ETT_STUDENT_STRATEGY = [
  {
    step: 1,
    title: {
      en: '1. Secure Paper A (Punjabi Qualifying) First',
      pa: '1. ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਪੇਪਰ A (ਪੰਜਾਬੀ ਯੋਗਤਾ ਪੇਪਰ) ਪੱਕਾ ਕਰੋ',
      hi: '1. सबसे पहले पेपर A (पंजाबी अर्हता पेपर) सुरक्षित करें',
    },
    detail: {
      en: 'Paper A gates your entire selection: if you do not clear the qualifying threshold in Paper A, your Paper B OMR sheet is not evaluated for merit. Punjabi grammar, Laga-Matra, word classes, and spelling are rule-based—aim for 70+/100 to keep a safe margin.',
      pa: 'ਪੇਪਰ A ਤੋਂ ਬਿਨਾਂ ਪੇਪਰ B ਦੀ ਮੈਰਿਟ ਨਹੀਂ ਬਣਦੀ। ਗੁਰਮੁਖੀ ਲਿਪੀ, ਲਗਾਂ-ਮਾਤਰਾਵਾਂ, ਸ਼ਬਦ ਭੇਦ ਅਤੇ ਸ਼ੁੱਧ-ਅਸ਼ੁੱਧ ਨਿਯਮਾਂ ਉੱਤੇ ਆਧਾਰਿਤ ਹਨ—ਸੁਰੱਖਿਅਤ ਫ਼ਰਕ ਲਈ 100 ਵਿੱਚੋਂ 70+ ਅੰਕਾਂ ਦਾ ਟੀਚਾ ਰੱਖੋ।',
      hi: 'पेपर A उत्तीर्ण किए बिना पेपर B की मेरिट नहीं बनती। गुरुमुखी लिपि, मात्राएँ, शब्द भेद और वर्तनी नियम-आधारित हैं—सुरक्षित अंतर के लिए 100 में से 70+ अंकों का लक्ष्य रखें।',
    },
  },
  {
    step: 2,
    title: {
      en: '2. The 80% Merit Rule in Paper B (Punjabi Counts Twice!)',
      pa: '2. ਪੇਪਰ B ਵਿੱਚ 80% ਮੈਰਿਟ ਨਿਯਮ (ਪੰਜਾਬੀ ਦੁੱਗਣਾ ਫ਼ਾਇਦਾ ਦਿੰਦੀ ਹੈ!)',
      hi: '2. पेपर B में 80% मेरिट नियम (पंजाबी दोगुना लाभ देती है!)',
    },
    detail: {
      en: 'In Paper B (200 marks), Punjabi (40M), Mathematics (40M), General Science (40M), and Social Studies (40M) make up 160 out of 200 marks (80% of merit!). Mastering Punjabi helps you twice (100M in Paper A + 40M in Paper B), while Class 9–10 Maths & Science give near-100% accuracy with concept clarity.',
      pa: 'ਪੇਪਰ B (200 ਅੰਕ) ਵਿੱਚ ਪੰਜਾਬੀ (40), ਗਣਿਤ (40), ਜਨਰਲ ਸਾਇੰਸ (40) ਅਤੇ ਸਮਾਜਿਕ ਸਿੱਖਿਆ (40) ਮਿਲ ਕੇ 200 ਵਿੱਚੋਂ 160 ਅੰਕ (80% ਮੈਰਿਟ!) ਬਣਾਉਂਦੇ ਹਨ। ਪੰਜਾਬੀ ਦੋ ਵਾਰ ਕੰਮ ਆਉਂਦੀ ਹੈ (ਪੇਪਰ A ਵਿੱਚ 100 ਅੰਕ + ਪੇਪਰ B ਵਿੱਚ 40 ਅੰਕ)!',
      hi: 'पेपर B (200 अंक) में पंजाबी (40), गणित (40), सामान्य विज्ञान (40) और सामाजिक विज्ञान (40) मिलकर 200 में से 160 अंक (80% मेरिट!) बनाते हैं। पंजाबी दो बार काम आती है (पेपर A में 100 अंक + पेपर B में 40 अंक)!',
    },
  },
  {
    step: 3,
    title: {
      en: '3. Daily 90-Minute Library Rhythm',
      pa: '3. ਰੋਜ਼ਾਨਾ 90-ਮਿੰਟ ਦਾ ਅਧਿਐਨ ਚੱਕਰ',
      hi: '3. दैनिक 90-मिनट का अध्ययन चक्र',
    },
    detail: {
      en: 'Follow a strict 4-block study session: 35–45 mins B → I → A Lesson Study → 15 mins 3D Flip-Cards → 20 mins Timed Topic Mini Mock (1 min/question) → 10 mins Mistake Notebook review.',
      pa: 'ਰੋਜ਼ਾਨਾ 4-ਪੜਾਵੀ ਅਭਿਆਸ ਕਰੋ: 35–45 ਮਿੰਟ B → I → A ਪਾਠ ਅਧਿਐਨ → 15 ਮਿੰਟ ਫਲੈਸ਼ਕਾਰਡ → 20 ਮਿੰਟ ਟੌਪਿਕ ਮਿਨੀ ਮੌਕ (1 ਮਿੰਟ/ਸਵਾਲ) → 10 ਮਿੰਟ ਗਲਤੀਆਂ ਦੀ ਸਮੀਖਿਆ।',
      hi: 'दैनिक 4-चरणीय अभ्यास करें: 35–45 मिनट B → I → A पाठ अध्ययन → 15 मिनट फ्लैशकार्ड → 20 मिनट टॉपिक मिनी मॉक (1 मिनट/प्रश्न) → 10 मिनट त्रुटि समीक्षा।',
    },
  },
  {
    step: 4,
    title: {
      en: '4. Offline OMR Bubbling Discipline (100 Questions in 100 Minutes)',
      pa: '4. ਆਫ਼ਲਾਈਨ OMR ਸ਼ੀਟ ਭਰਨ ਦਾ ਅਭਿਆਸ (100 ਮਿੰਟਾਂ ਵਿੱਚ 100 ਸਵਾਲ)',
      hi: '4. ऑफ़लाइन OMR शीट भरने का अभ्यास (100 मिनट में 100 प्रश्न)',
    },
    detail: {
      en: 'Punjab ETT is an offline OMR test. Bubbling 100 circles neatly takes 8–10 minutes of physical time, leaving ~54 seconds per question. Bubble in batches of 10 questions (never leave all 100 bubbles for the last 5 minutes!), and if there is 0 negative marking (confirm on admit card), never leave any OMR row blank.',
      pa: 'ETT ਪ੍ਰੀਖਿਆ ਆਫ਼ਲਾਈਨ OMR ਸ਼ੀਟ ਉੱਤੇ ਹੁੰਦੀ ਹੈ। 100 ਗੋਲੇ ਭਰਨ ਵਿੱਚ 8–10 ਮਿੰਟ ਲੱਗ ਜਾਂਦੇ ਹਨ। ਹਰੇਕ 10 ਸਵਾਲਾਂ ਤੋਂ ਬਾਅਦ OMR ਗੋਲੇ ਭਰੋ (ਆਖ਼ਰੀ 5 ਮਿੰਟਾਂ ਲਈ ਪੂਰੀ ਸ਼ੀਟ ਨਾ ਛੱਡੋ!), ਅਤੇ ਜੇ ਨੈਗੇਟਿਵ ਮਾਰਕਿੰਗ 0 ਹੈ ਤਾਂ ਕੋਈ ਵੀ ਸਵਾਲ ਖਾਲੀ ਨਾ ਛੱਡੋ।',
      hi: 'ETT परीक्षा ऑफ़लाइन OMR शीट पर होती है। 100 गोले भरने में 8–10 मिनट लगते हैं। प्रत्येक 10 प्रश्नों के बाद OMR गोले भरें (अंतिम 5 मिनट के लिए पूरी शीट न छोड़ें!), और यदि नकारात्मक अंकन 0 है तो कोई भी प्रश्न खाली न छोड़ें।',
    },
  },
];
