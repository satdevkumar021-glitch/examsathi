import type { Question } from '../questions';

const PPSC_CLERK_COMMON_META = {
  examId: 'punjab-clerk' as const,
  originType: 'authored-original' as const,
  reviewStatus: 'reviewed' as const,
  editorialStatus: 'reviewed' as const,
  availableLanguages: ['en', 'pa', 'hi'] as const,
  explanationLanguages: ['en', 'pa', 'hi'] as const,
  rightsProvenance: {
    source: 'PPSC & PSSSB Clerk / Senior Assistant Official Syllabus & PSEB Vyakaran Standard',
    accessType: 'educational-original' as const,
    verifiedBy: 'ExamSathi Punjab State Recruitment Editorial Board',
    verifiedDate: '2026-10-11',
  },
  source: {
    title: 'PSSSB & PPSC Clerk Paper A & Paper B Official Syllabus Blueprint',
    url: 'https://sssb.punjab.gov.in/',
  },
};

export const PPSC_CLERK_PUNJABI_ENGLISH_COMPUTER_MCQS: Question[] = [
  // ===========================================================================
  // SECTION 1: PUNJABI PAPER A & PAPER B GRAMMAR, VOCABULARY & OFFICIAL TERMS
  // topicId: 'punjabi-paper-a' | subjectId: 'clerk-punjabi-language' (35 MCQs)
  // ===========================================================================
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-1',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'How many total letters exist in the modern Gurmukhi script after adding the 6 dotted letters of the Navin Toli (ਨਵੀਂ ਟੋਲੀ) to the traditional 35 letters (ਪੈਂਤੀ ਅੱਖਰੀ)?',
      pa: 'ਰਵਾਇਤੀ 35 ਅੱਖਰਾਂ (ਪੈਂਤੀ ਅੱਖਰੀ) ਵਿੱਚ ਨਵੀਂ ਟੋਲੀ ਦੇ 6 ਬਿੰਦੀ ਵਾਲੇ ਅੱਖਰ ਸ਼ਾਮਲ ਕਰਨ ਤੋਂ ਬਾਅਦ ਆਧੁਨਿਕ ਗੁਰਮੁਖੀ ਲਿਪੀ ਵਿੱਚ ਕੁੱਲ ਕਿੰਨੇ ਅੱਖਰ ਹੋ ਗਏ ਹਨ?',
      hi: 'पारंपरिक 35 अक्षरों (पैंतीस अखरी) में नवीन टोली के 6 बिंदी वाले अक्षर जोड़ने के बाद आधुनिक गुरमुखी लिपि में कुल कितने अक्षर हो गए हैं?',
    },
    options: {
      A: {
        en: '41 letters — 35 traditional letters plus ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, and ਲ਼',
        pa: '41 ਅੱਖਰ — 35 ਮੂਲ ਅੱਖਰ ਅਤੇ ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼',
        hi: '41 अक्षर — 35 मूल अक्षर तथा ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼',
      },
      B: {
        en: '38 letters — 35 traditional letters plus 3 conjunct characters (ਹ, ਰ, ਵ)',
        pa: '38 ਅੱਖਰ — 35 ਮੂਲ ਅੱਖਰ ਅਤੇ 3 ਦੁੱਤ ਅੱਖਰ (ਹ, ਰ, ਵ)',
        hi: '38 अक्षर — 35 मूल अक्षर तथा 3 दुत्त अक्षर (ਹ, ਰ, ਵ)',
      },
      C: {
        en: '40 letters — 35 traditional letters plus 5 nasal consonants (ਙ, ਞ, ਣ, ਨ, ਮ)',
        pa: '40 ਅੱਖਰ — 35 ਮੂਲ ਅੱਖਰ ਅਤੇ 5 ਨਾਸਕੀ ਵਿਅੰਜਨ (ਙ, ਞ, ਣ, ਨ, ਮ)',
        hi: '40 अक्षर — 35 मूल अक्षर तथा 5 नासिक्य व्यंजन (ਙ, ਞ, ਣ, ਨ, ਮ)',
      },
      D: {
        en: '45 letters — 35 traditional letters plus 10 Laga-Matra vowel signs',
        pa: '45 ਅੱਖਰ — 35 ਮੂਲ ਅੱਖਰ ਅਤੇ 10 ਲਗਾਂ-ਮਾਤਰਾਵਾਂ',
        hi: '45 अक्षर — 35 मूल अक्षर तथा 10 लगां-मात्राएं',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Originally Gurmukhi was called Painti Akhari (35 letters arranged in 7 rows of 5). Later, 5 Persian-origin sounds (ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼) and 1 retroflex lateral (ਲ਼) were added with a subscript dot (ਪੈਰ ਬਿੰਦੀ) as the 8th row (ਨਵੀਂ ਟੋਲੀ), making 41 letters in total.',
      pa: 'ਗੁਰਮੁਖੀ ਲਿਪੀ ਵਿੱਚ ਪਹਿਲਾਂ 35 ਅੱਖਰ (ਪੈਂਤੀ) ਸਨ। ਬਾਅਦ ਵਿੱਚ ਫ਼ਾਰਸੀ ਧੁਨੀਆਂ ਲਈ 5 ਅੱਖਰ (ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼) ਅਤੇ ਪੰਜਾਬੀ ਧੁਨੀ ਲਈ (ਲ਼) ਸਮੇਤ ਨਵੀਂ ਟੋਲੀ ਦੇ 6 ਅੱਖਰ ਜੋੜੇ ਗਏ, ਜਿਸ ਨਾਲ ਕੁੱਲ ਅੱਖਰਾਂ ਦੀ ਗਿਣਤੀ 41 ਹੋ ਗਈ ਹੈ।',
      hi: 'गुरमुखी लिपि में मूल रूप से 35 अक्षर (पैंतीस) थे। बाद में फ़ारसी ध्वनियों के लिए 5 अक्षर (ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼) और तालव्य ध्वनि के लिए (ਲ਼) सहित नवीन टोली के 6 अक्षर जोड़े गए, जिससे कुल अक्षरों की संख्या 41 हो गई है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-2',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'According to the 3-4-3 Laga distribution rule for the three vowel bearers (ਸ੍ਵਰ ਵਾਹਕ — ੳ, ਅ, ੲ) in Gurmukhi, which set of Laga-Matras is used exclusively with "ੳ" (Ura)?',
      pa: 'ਗੁਰਮੁਖੀ ਦੇ ਤਿੰਨ ਸ੍ਵਰ ਵਾਹਕਾਂ (ੳ, ਅ, ੲ) ਦੇ 3-4-3 ਲਗਾਂ ਦੇ ਨਿਯਮ ਅਨੁਸਾਰ, "ੳ" (ਊੜਾ) ਨਾਲ ਕਿਹੜੀਆਂ ਤਿੰਨ ਲਗਾਂ ਲੱਗਦੀਆਂ ਹਨ?',
      hi: 'गुरमुखी के तीन स्वर वाहकों (ੳ, ਅ, ੲ) के 3-4-3 लगां नियम के अनुसार, "ੳ" (ऊड़ा) के साथ कौन-सी तीन मात्राएं लगती हैं?',
    },
    options: {
      A: {
        en: 'Aunkar (ਔਂਕੜ), Dulainkar (ਦੁਲੈਂਕੜ), and Hora (ਹੋੜਾ)',
        pa: 'ਔਂਕੜ (ੁ), ਦੁਲੈਂਕੜ (ੂ) ਅਤੇ ਹੋੜਾ (ੋ)',
        hi: 'औंकड़ (ੁ), दुलैंकड़ (ੂ) और होड़ा (ੋ)',
      },
      B: {
        en: 'Sihari (ਸਿਹਾਰੀ), Bihari (ਬਿਹਾਰੀ), and Laan (ਲਾਂ)',
        pa: 'ਸਿਹਾਰੀ (ਿ), ਬਿਹਾਰੀ (ੀ) ਅਤੇ ਲਾਂ (ੇ)',
        hi: 'सिहारी (ਿ), बिहारी (ੀ) और लां (ੇ)',
      },
      C: {
        en: 'Mukta (ਮੁਕਤਾ), Kanna (ਕੰਨਾ), Dulavan (ਦੁਲਾਵਾਂ), and Kanaura (ਕਨੌੜਾ)',
        pa: 'ਮੁਕਤਾ, ਕੰਨਾ (ਾ), ਦੁਲਾਵਾਂ (ੈ) ਅਤੇ ਕਨੌੜਾ (ੌ)',
        hi: 'मुक्ता, कन्ना (ਾ), दुलावां (ੈ) और कनौड़ा (ੌ)',
      },
      D: {
        en: 'Kanna (ਕੰਨਾ), Bihari (ਬਿਹਾਰੀ), and Kanaura (ਕਨੌੜਾ)',
        pa: 'ਕੰਨਾ (ਾ), ਬਿਹਾਰੀ (ੀ) ਅਤੇ ਕਨੌੜਾ (ੌ)',
        hi: 'कन्ना (ਾ), बिहारी (ੀ) और कनौड़ा (ੌ)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'The 3 vowel bearers (ੳ, ਅ, ੲ) form 10 vowel sounds (ਮੁਹਾਰਨੀ) via the 3-4-3 rule: ੳ takes 3 lagas (ਔਂਕੜ, ਦੁਲੈਂਕੜ, ਹੋੜਾ — ਉ, ਊ, ਓ); ਅ takes 4 lagas (ਮੁਕਤਾ, ਕੰਨਾ, ਦੁਲਾਵਾਂ, ਕਨੌੜਾ — ਅ, ਆ, ਐ, ਔ); ੲ takes 3 lagas (ਸਿਹਾਰੀ, ਬਿਹਾਰੀ, ਲਾਂ — ਇ, ਈ, ਏ).',
      pa: 'ਤਿੰਨ ਸ੍ਵਰ ਵਾਹਕਾਂ (ੳ, ਅ, ੲ) ਨਾਲ 3-4-3 ਦੇ ਨਿਯਮ ਅਨੁਸਾਰ ਲਗਾਂ ਲੱਗਦੀਆਂ ਹਨ: "ੳ" ਨਾਲ 3 ਲਗਾਂ (ਔਂਕੜ, ਦੁਲੈਂਕੜ, ਹੋੜਾ — ਉ, ਊ, ਓ), "ਅ" ਨਾਲ 4 ਲਗਾਂ (ਮੁਕਤਾ, ਕੰਨਾ, ਦੁਲਾਵਾਂ, ਕਨੌੜਾ — ਅ, ਆ, ਐ, ਔ) ਅਤੇ "ੲ" ਨਾਲ 3 ਲਗਾਂ (ਸਿਹਾਰੀ, ਬਿਹਾਰੀ, ਲਾਂ — ਇ, ਈ, ਏ) ਲੱਗਦੀਆਂ ਹਨ।',
      hi: 'तीन स्वर वाहकों (ੳ, ਅ, ੲ) के साथ 3-4-3 नियम के अनुसार मात्राएं लगती हैं: "ੳ" के साथ 3 लगां (औंकड़, दुलैंकड़, होड़ा — ਉ, ਊ, ਓ), "ਅ" के साथ 4 लगां (मुक्ता, कन्ना, दुलावां, कनौड़ा — ਅ, ਆ, ਐ, ਔ) और "ੲ" के साथ 3 लगां (सिहारी, बिहारी, लां — ਇ, ਈ, ਏ) लगती हैं।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-3',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'How many total Laga-Matras (ਲਗਾਂ-ਮਾਤਰਾਵਾਂ) exist in Punjabi grammar, and which one among them has no visible symbol (ਚਿੰਨ੍ਹ-ਰਹਿਤ)?',
      pa: 'ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਵਿੱਚ ਕੁੱਲ ਕਿੰਨੀਆਂ ਲਗਾਂ-ਮਾਤਰਾਵਾਂ ਹਨ ਅਤੇ ਉਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਲਗ ਦਾ ਕੋਈ ਦਿਸਣਯੋਗ ਚਿੰਨ੍ਹ ਨਹੀਂ ਹੁੰਦਾ?',
      hi: 'पंजाबी व्याकरण में कुल कितनी लगां-मात्राएं हैं और उनमें से किस लगा का कोई दृश्य चिह्न नहीं होता?',
    },
    options: {
      A: {
        en: '10 Laga-Matras in total; Mukta (ਮੁਕਤਾ) has no visible symbol and 9 have visible symbols',
        pa: 'ਕੁੱਲ 10 ਲਗਾਂ-ਮਾਤਰਾਵਾਂ; ਮੁਕਤਾ ਲਗ ਚਿੰਨ੍ਹ-ਰਹਿਤ ਹੈ ਅਤੇ ਬਾਕੀ 9 ਦੇ ਚਿੰਨ੍ਹ ਹਨ',
        hi: 'कुल 10 लगां-मात्राएं; मुक्ता लगा चिह्न-रहित है और शेष 9 के दृश्य चिह्न हैं',
      },
      B: {
        en: '9 Laga-Matras in total; Sihari (ਸਿਹਾਰੀ) is considered symbol-less',
        pa: 'ਕੁੱਲ 9 ਲਗਾਂ-ਮਾਤਰਾਵਾਂ; ਸਿਹਾਰੀ ਨੂੰ ਚਿੰਨ੍ਹ-ਰਹਿਤ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ',
        hi: 'कुल 9 लगां-मात्राएं; सिहारी को चिह्न-रहित माना जाता है',
      },
      C: {
        en: '12 Laga-Matras in total; Adhak (ਅੱਧਕ) has no independent symbol',
        pa: 'ਕੁੱਲ 12 ਲਗਾਂ-ਮਾਤਰਾਵਾਂ; ਅੱਧਕ ਦਾ ਕੋਈ ਸੁਤੰਤਰ ਚਿੰਨ੍ਹ ਨਹੀਂ ਹੁੰਦਾ',
        hi: 'कुल 12 लगां-मात्राएं; अधक का कोई स्वतंत्र चिह्न नहीं होता',
      },
      D: {
        en: '11 Laga-Matras in total; Tippi (ਟਿੱਪੀ) is used without a vowel symbol',
        pa: 'ਕੁੱਲ 11 ਲਗਾਂ-ਮਾਤਰਾਵਾਂ; ਟਿੱਪੀ ਸ੍ਵਰ ਚਿੰਨ੍ਹ ਤੋਂ ਬਿਨਾਂ ਵਰਤੀ ਜਾਂਦੀ ਹੈ',
        hi: 'कुल 11 लगां-मात्राएं; टिप्पी स्वर चिह्न के बिना प्रयुक्त होती है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Punjabi has 10 Laga-Matras: Mukta, Kanna, Sihari, Bihari, Aunkar, Dulainkar, Laan, Dulavan, Hora, and Kanaura. Mukta (ਮੁਕਤਾ) is inherent in every consonant and has no visible sign, while the remaining 9 have distinct graphical symbols.',
      pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਕੁੱਲ 10 ਲਗਾਂ ਹਨ: ਮੁਕਤਾ, ਕੰਨਾ, ਸਿਹਾਰੀ, ਬਿਹਾਰੀ, ਔਂਕੜ, ਦੁਲੈਂਕੜ, ਲਾਂ, ਦੁਲਾਵਾਂ, ਹੋੜਾ ਅਤੇ ਕਨੌੜਾ। ਇਹਨਾਂ ਵਿੱਚੋਂ "ਮੁਕਤਾ" ਦਾ ਕੋਈ ਚਿੰਨ੍ਹ ਨਹੀਂ ਹੁੰਦਾ ਜਦਕਿ ਬਾਕੀ 9 ਲਗਾਂ ਦੇ ਚਿੰਨ੍ਹ ਹੁੰਦੇ ਹਨ।',
      hi: 'पंजाबी में कुल 10 लगां हैं: मुक्ता, कन्ना, सिहारी, बिहारी, औंकड़, दुलैंकड़, लां, दुलावां, होड़ा और कनौड़ा। इनमें से "मुक्ता" का कोई चिह्न नहीं होता जबकि शेष 9 मात्राओं के चिह्न होते हैं।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-4',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'Regarding the 3 Lagakhars (ਲਗਾਖਰ — ਬਿੰਦੀ, ਟਿੱਪੀ, ਅੱਧਕ) in Gurmukhi, how many Laga-Matras take Bindi, Tippi, and Adhak respectively?',
      pa: 'ਗੁਰਮੁਖੀ ਦੇ 3 ਲਗਾਖਰਾਂ (ਬਿੰਦੀ, ਟਿੱਪੀ, ਅੱਧਕ) ਸੰਬੰਧੀ, ਬਿੰਦੀ, ਟਿੱਪੀ ਅਤੇ ਅੱਧਕ ਕ੍ਰਮਵਾਰ ਕਿੰਨੀਆਂ-ਕਿੰਨੀਆਂ ਲਗਾਂ ਨਾਲ ਲੱਗਦੇ ਹਨ?',
      hi: 'गुरमुखी के 3 लगाखरों (बिंदी, टिप्पी, अधक) के संबंध में, बिंदी, टिप्पी और अधक क्रमशः कितनी-कितनी मात्राओं के साथ लगते हैं?',
    },
    options: {
      A: {
        en: 'Bindi with 6 lagas, Tippi with 4 lagas, and Adhak with 3 lagas (plus English loanword Dulavan)',
        pa: 'ਬਿੰਦੀ 6 ਲਗਾਂ ਨਾਲ, ਟਿੱਪੀ 4 ਲਗਾਂ ਨਾਲ, ਅਤੇ ਅੱਧਕ 3 ਮੂਲ ਲਗਾਂ ਨਾਲ (ਅੰਗਰੇਜ਼ੀ ਸ਼ਬਦਾਂ ਵਿੱਚ ਦੁਲਾਵਾਂ ਸਮੇਤ 4)',
        hi: 'बिंदी 6 मात्राओं के साथ, टिप्पी 4 मात्राओं के साथ, और अधक 3 मूल मात्राओं के साथ (अंग्रेज़ी शब्दों में दुलावां सहित 4)',
      },
      B: {
        en: 'Bindi with 4 lagas, Tippi with 6 lagas, and Adhak with 5 lagas',
        pa: 'ਬਿੰਦੀ 4 ਲਗਾਂ ਨਾਲ, ਟਿੱਪੀ 6 ਲਗਾਂ ਨਾਲ, ਅਤੇ ਅੱਧਕ 5 ਲਗਾਂ ਨਾਲ',
        hi: 'बिंदी 4 मात्राओं के साथ, टिप्पी 6 मात्राओं के साथ, और अधक 5 मात्राओं के साथ',
      },
      C: {
        en: 'Bindi with 5 lagas, Tippi with 5 lagas, and Adhak with 2 lagas',
        pa: 'ਬਿੰਦੀ 5 ਲਗਾਂ ਨਾਲ, ਟਿੱਪੀ 5 ਲਗਾਂ ਨਾਲ, ਅਤੇ ਅੱਧਕ 2 ਲਗਾਂ ਨਾਲ',
        hi: 'बिंदी 5 मात्राओं के साथ, टिप्पी 5 मात्राओं के साथ, और अधक 2 मात्राओं के साथ',
      },
      D: {
        en: 'Bindi with 7 lagas, Tippi with 3 lagas, and Adhak with 4 lagas',
        pa: 'ਬਿੰਦੀ 7 ਲਗਾਂ ਨਾਲ, ਟਿੱਪੀ 3 ਲਗਾਂ ਨਾਲ, ਅਤੇ ਅੱਧਕ 4 ਲਗਾਂ ਨਾਲ',
        hi: 'बिंदी 7 मात्राओं के साथ, टिप्पी 3 मात्राओं के साथ, और अधक 4 मात्राओं के साथ',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Bindi (ਂ) is used with 6 lagas (ਕੰਨਾ, ਬਿਹਾਰੀ, ਲਾਂ, ਦੁਲਾਵਾਂ, ਹੋੜਾ, ਕਨੌੜਾ). Tippi (ੰ) is used with 4 lagas (ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ, ਦੁਲੈਂਕੜ — and with ੳ+ਔਂਕੜ/ਦੁਲੈਂਕੜ Bindi replaces Tippi). Adhak (ੱ) doubles the following consonant and is used with 3 native lagas (ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ) plus ਦੁਲਾਵਾਂ in English loanwords like ਪੈੱਨ (Pen).',
      pa: 'ਬਿੰਦੀ 6 ਲਗਾਂ (ਕੰਨਾ, ਬਿਹਾਰੀ, ਲਾਂ, ਦੁਲਾਵਾਂ, ਹੋੜਾ, ਕਨੌੜਾ) ਨਾਲ ਲੱਗਦੀ ਹੈ। ਟਿੱਪੀ 4 ਲਗਾਂ (ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ, ਦੁਲੈਂਕੜ) ਨਾਲ ਲੱਗਦੀ ਹੈ। ਅੱਧਕ ਦੁੱਤ ਧੁਨੀ (ਦੋਹਰੀ ਆਵਾਜ਼) ਲਈ 3 ਮੂਲ ਲਗਾਂ (ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ) ਅਤੇ ਅੰਗਰੇਜ਼ੀ ਤਤਸਮ ਸ਼ਬਦਾਂ (ਜਿਵੇਂ ਪੈੱਨ) ਵਿੱਚ ਦੁਲਾਵਾਂ ਨਾਲ ਲੱਗਦਾ ਹੈ।',
      hi: 'बिंदी 6 मात्राओं (कन्ना, बिहारी, लां, दुलावां, होड़ा, कनौड़ा) के साथ लगती है। टिप्पी 4 मात्राओं (मुक्ता, सिहारी, औंकड़, दुलैंकड़) के साथ लगती है। अधक द्वित्व ध्वनि के लिए 3 मूल मात्राओं (मुक्ता, सिहारी, औंकड़) तथा अंग्रेज़ी शब्दों (जैसे ਪੈੱਨ) में दुलावां के साथ लगता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-5',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'Which correctly identifies the 3 Dutt Akhar (ਦੁੱਤ ਅੱਖਰ / ਪੈਰ ਵਿੱਚ ਪੈਣ ਵਾਲੇ ਅੱਖਰ) and the 5 Nasal Consonants (ਨਾਸਕੀ ਵਿਅੰਜਨ) in the Gurmukhi script?',
      pa: 'ਗੁਰਮੁਖੀ ਲਿਪੀ ਵਿੱਚ 3 ਦੁੱਤ ਅੱਖਰਾਂ (ਪੈਰ ਵਿੱਚ ਪੈਣ ਵਾਲੇ ਅੱਖਰ) ਅਤੇ 5 ਨਾਸਕੀ ਵਿਅੰਜਨਾਂ ਦਾ ਸਹੀ ਜੁੱਟ ਕਿਹੜਾ ਹੈ?',
      hi: 'गुरमुखी लिपि में 3 दुत्त अक्षरों (पैर में लिखे जाने वाले अक्षर) और 5 नासिक्य व्यंजनों का सही युग्म कौन-सा है?',
    },
    options: {
      A: {
        en: 'Dutt Akhar: ਹ, ਰ, ਵ | Nasal Consonants: ਙ, ਞ, ਣ, ਨ, ਮ',
        pa: 'ਦੁੱਤ ਅੱਖਰ: ਹ, ਰ, ਵ | ਨਾਸਕੀ ਵਿਅੰਜਨ: ਙ, ਞ, ਣ, ਨ, ਮ',
        hi: 'दुत्त अक्षर: ਹ, ਰ, ਵ | नासिक्य व्यंजन: ਙ, ਞ, ਣ, ਨ, ਮ',
      },
      B: {
        en: 'Dutt Akhar: ਯ, ਰ, ਲ | Nasal Consonants: ਕ, ਚ, ਟ, ਤ, ਪ',
        pa: 'ਦੁੱਤ ਅੱਖਰ: ਯ, ਰ, ਲ | ਨਾਸਕੀ ਵਿਅੰਜਨ: ਕ, ਚ, ਟ, ਤ, ਪ',
        hi: 'दुत्त अक्षर: ਯ, ਰ, ਲ | नासिक्य व्यंजन: ਕ, ਚ, ਟ, ਤ, ਪ',
      },
      C: {
        en: 'Dutt Akhar: ੳ, ਅ, ੲ | Nasal Consonants: ਘ, ਝ, ਢ, ਧ, ਭ',
        pa: 'ਦੁੱਤ ਅੱਖਰ: ੳ, ਅ, ੲ | ਨਾਸਕੀ ਵਿਅੰਜਨ: ਘ, ਝ, ਢ, ਧ, ਭ',
        hi: 'दुत्त अक्षर: ੳ, ਅ, ੲ | नासिक्य व्यंजन: ਘ, ਝ, ਢ, ਧ, ਭ',
      },
      D: {
        en: 'Dutt Akhar: ਹ, ਯ, ਵ | Nasal Consonants: ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼',
        pa: 'ਦੁੱਤ ਅੱਖਰ: ਹ, ਯ, ਵ | ਨਾਸਕੀ ਵਿਅੰਜਨ: ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼',
        hi: 'दुत्त अक्षर: ਹ, ਯ, ਵ | नासिक्य व्यंजन: ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Gurmukhi, only 3 letters are written as subscript conjuncts (ਦੁੱਤ ਅੱਖਰ) at the foot of another consonant: ਹ (੍), ਰ (੍ਰ), and ਵ (੍ਵ) — e.g., ਪੜ੍ਹਾਈ, ਪ੍ਰੇਮ, ਸ੍ਵੈ। The 5 nasal consonants (ਨਾਸਕੀ ਅੱਖਰ) are the 5th letters of rows 2 to 6: ਙ, ਞ, ਣ, ਨ, ਮ.',
      pa: 'ਗੁਰਮੁਖੀ ਵਿੱਚ ਕੇਵਲ 3 ਦੁੱਤ ਅੱਖਰ (ਹ, ਰ, ਵ) ਹਨ ਜੋ ਦੂਜੇ ਅੱਖਰਾਂ ਦੇ ਪੈਰ ਵਿੱਚ ਪੈਂਦੇ ਹਨ (ਜਿਵੇਂ ਪੜ੍ਹਾਈ, ਪ੍ਰਸ਼ਨ, ਸ੍ਵੈਮਾਣ)। ਕਵਰਗ ਤੋਂ ਪਵਰਗ ਤੱਕ ਦੀਆਂ ਪੰਜ ਟੋਲੀਆਂ ਦੇ ਅਖੀਰਲੇ 5 ਅੱਖਰ (ਙ, ਞ, ਣ, ਨ, ਮ) ਨਾਸਕੀ ਵਿਅੰਜਨ ਹਨ।',
      hi: 'गुरमुखी में केवल 3 दुत्त अक्षर (ਹ, ਰ, ਵ) हैं जो अन्य अक्षरों के पैर में लिखे जाते हैं (जैसे ਪੜ੍ਹਾਈ, ਪ੍ਰਸ਼ਨ, ਸ੍ਵੈਮਾਣ)। कवर्ग से पवर्ग तक के पाँच वर्गों के अंतिम 5 अक्षर (ਙ, ਞ, ਣ, ਨ, ਮ) नासिक्य व्यंजन हैं।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-6',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'The Majhi dialect (ਮਾਝੀ ਉਪਭਾਸ਼ਾ), recognized as the standard literary Punjabi (ਟਕਸਾਲੀ ਪੰਜਾਬੀ), is primarily spoken in which group of districts in Punjab?',
      pa: 'ਟਕਸਾਲੀ ਪੰਜਾਬੀ ਵਜੋਂ ਮਾਨਤਾ ਪ੍ਰਾਪਤ "ਮਾਝੀ ਉਪਭਾਸ਼ਾ" ਪੰਜਾਬ ਦੇ ਕਿਹੜੇ ਚਾਰ ਜ਼ਿਲ੍ਹਿਆਂ ਵਿੱਚ ਮੁੱਖ ਤੌਰ ’ਤੇ ਬੋਲੀ ਜਾਂਦੀ ਹੈ?',
      hi: 'टकसाली पंजाबी के रूप में मान्यता प्राप्त "माझी उपभाषा" पंजाब के किन चार ज़िलों में मुख्य रूप से बोली जाती है?',
    },
    options: {
      A: {
        en: 'Amritsar, Tarn Taran, Gurdaspur, and Pathankot',
        pa: 'ਅੰਮ੍ਰਿਤਸਰ, ਤਰਨ ਤਾਰਨ, ਗੁਰਦਾਸਪੁਰ ਅਤੇ ਪਠਾਨਕੋਟ',
        hi: 'अमृतसर, तरनतारन, गुरदासपुर और पठानकोट',
      },
      B: {
        en: 'Jalandhar, Hoshiarpur, Kapurthala, and Shaheed Bhagat Singh Nagar',
        pa: 'ਜਲੰਧਰ, ਹੁਸ਼ਿਆਰਪੁਰ, ਕਪੂਰਥਲਾ ਅਤੇ ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ ਨਗਰ',
        hi: 'जालंधर, होशियारपुर, कपूरथला और शहीद भगत सिंह नगर',
      },
      C: {
        en: 'Ludhiana, Patiala, Bathinda, and Sangrur',
        pa: 'ਲੁਧਿਆਣਾ, ਪਟਿਆਲਾ, ਬਠਿੰਡਾ ਅਤੇ ਸੰਗਰੂਰ',
        hi: 'लुधियाना, पटियाला, बठिंडा और संगरूर',
      },
      D: {
        en: 'Rupnagar, SAS Nagar (Mohali), Fatehgarh Sahib, and Rajpura',
        pa: 'ਰੂਪਨਗਰ, ਐੱਸ.ਏ.ਐੱਸ. ਨਗਰ (ਮੋਹਾਲੀ), ਫ਼ਤਹਿਗੜ੍ਹ ਸਾਹਿਬ ਅਤੇ ਰਾਜਪੁਰਾ',
        hi: 'रूपनगर, एस.ए.एस. नगर (मोहाली), फ़तेहगढ़ साहिब और राजपुरा',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Majhi is spoken in the Majha region (Bari Doab between the Ravi and Beas rivers), comprising the four districts of Amritsar, Tarn Taran, Gurdaspur, and Pathankot. It serves as the basis for standard (Taksali) Punjabi.',
      pa: 'ਮਾਝੀ ਉਪਭਾਸ਼ਾ ਰਾਵੀ ਅਤੇ ਬਿਆਸ ਦਰਿਆਵਾਂ ਦੇ ਵਿਚਕਾਰਲੇ ਮਾਝੇ ਦੇ ਖੇਤਰ (ਅੰਮ੍ਰਿਤਸਰ, ਤਰਨ ਤਾਰਨ, ਗੁਰਦਾਸਪੁਰ ਅਤੇ ਪਠਾਨਕੋਟ ਜ਼ਿਲ੍ਹਿਆਂ) ਵਿੱਚ ਬੋਲੀ ਜਾਂਦੀ ਹੈ ਅਤੇ ਇਸੇ ਨੂੰ ਟਕਸਾਲੀ ਪੰਜਾਬੀ ਦਾ ਆਧਾਰ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ।',
      hi: 'माझी उपभाषा रावी और ब्यास नदियों के बीच के माझा क्षेत्र (अमृतसर, तरनतारन, गुरदासपुर और पठानकोट ज़िलों) में बोली जाती है और इसे ही टकसाली (मानक) पंजाबी का आधार माना जाता है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-7',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'Which dialect of Punjabi is spoken across the largest geographical belt south of the Sutlej river, covering districts such as Ludhiana, Bathinda, Sangrur, Ferozepur, Mansa, Moga, Barnala, Faridkot, Sri Muktsar Sahib, and Fazilka?',
      pa: 'ਸਤਲੁਜ ਦਰਿਆ ਦੇ ਦੱਖਣ ਵੱਲ ਸਭ ਤੋਂ ਵੱਡੇ ਭੂਗੋਲਿਕ ਖੇਤਰ (ਲੁਧਿਆਣਾ, ਬਠਿੰਡਾ, ਸੰਗਰੂਰ, ਫ਼ਿਰੋਜ਼ਪੁਰ, ਮਾਨਸਾ, ਮੋਗਾ, ਬਰਨਾਲਾ, ਫ਼ਰੀਦਕੋਟ, ਸ੍ਰੀ ਮੁਕਤਸਰ ਸਾਹਿਬ ਅਤੇ ਫ਼ਾਜ਼ਿਲਕਾ) ਵਿੱਚ ਕਿਹੜੀ ਉਪਭਾਸ਼ਾ ਬੋਲੀ ਜਾਂਦੀ ਹੈ?',
      hi: 'सतलुज नदी के दक्षिण में सबसे बड़े भौगोलिक क्षेत्र (लुधियाना, बठिंडा, संगरूर, फ़िरोज़पुर, मानसा, मोगा, बरनाला, फ़रीदकोट, श्री मुक्तसर साहिब और फ़ाज़िल्का) में कौन-सी उपभाषा बोली जाती है?',
    },
    options: {
      A: {
        en: 'Malwai (ਮਲਵਈ)',
        pa: 'ਮਲਵਈ',
        hi: 'मलवई',
      },
      B: {
        en: 'Doabi (ਦੁਆਬੀ)',
        pa: 'ਦੁਆਬੀ',
        hi: 'दोआबी',
      },
      C: {
        en: 'Puadhi (ਪੁਆਧੀ)',
        pa: 'ਪੁਆਧੀ',
        hi: 'पुआधी',
      },
      D: {
        en: 'Pothohari (ਪੋਠੋਹਾਰੀ)',
        pa: 'ਪੋਠੋਹਾਰੀ',
        hi: 'पोठोहारी',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Malwai is spoken in the Malwa region south of the Sutlej river and covers the largest number of districts in Punjab: Ludhiana, Bathinda, Sangrur, Malerkotla, Barnala, Mansa, Moga, Faridkot, Ferozepur, Sri Muktsar Sahib, Fazilka, and western Patiala.',
      pa: 'ਮਲਵਈ ਉਪਭਾਸ਼ਾ ਸਤਲੁਜ ਦਰਿਆ ਦੇ ਦੱਖਣ ਵਾਲੇ ਮਾਲਵਾ ਖੇਤਰ ਵਿੱਚ ਬੋਲੀ ਜਾਂਦੀ ਹੈ, ਜਿਸ ਵਿੱਚ ਪੰਜਾਬ ਦੇ ਸਭ ਤੋਂ ਵੱਧ ਜ਼ਿਲ੍ਹੇ (ਲੁਧਿਆਣਾ, ਬਠਿੰਡਾ, ਸੰਗਰੂਰ, ਮਾਨਸਾ, ਮੋਗਾ, ਬਰਨਾਲਾ, ਫ਼ਰੀਦਕੋਟ, ਫ਼ਿਰੋਜ਼ਪੁਰ, ਸ੍ਰੀ ਮੁਕਤਸਰ ਸਾਹਿਬ, ਫ਼ਾਜ਼ਿਲਕਾ ਅਤੇ ਪਟਿਆਲਾ ਦਾ ਪੱਛਮੀ ਹਿੱਸਾ) ਸ਼ਾਮਲ ਹਨ।',
      hi: 'मलवई उपभाषा सतलुज नदी के दक्षिण स्थित मालवा क्षेत्र में बोली जाती है, जिसमें पंजाब के सर्वाधिक ज़िले (लुधियाना, बठिंडा, संगरूर, मानसा, मोगा, बरनाला, फ़रीदकोट, फ़िरोज़पुर, श्री मुक्तसर साहिब, फ़ाज़िल्का और पश्चिमी पटियाला) शामिल हैं।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-8',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'Match the Doabi and Puadhi dialects with their respective districts in Punjab:',
      pa: 'ਪੰਜਾਬ ਦੇ ਜ਼ਿਲ੍ਹਿਆਂ ਅਨੁਸਾਰ "ਦੁਆਬੀ" ਅਤੇ "ਪੁਆਧੀ" ਉਪਭਾਸ਼ਾਵਾਂ ਦੇ ਖੇਤਰਾਂ ਦਾ ਸਹੀ ਮਿਲਾਨ ਚੁਣੋ:',
      hi: 'पंजाब के ज़िलों के अनुसार "दोआबी" और "पुआधी" उपभाषाओं के क्षेत्रों का सही मिलान चुनें:',
    },
    options: {
      A: {
        en: 'Doabi: Jalandhar, Hoshiarpur, Kapurthala, SBS Nagar | Puadhi: Rupnagar, SAS Nagar (Mohali), Rajpura',
        pa: 'ਦੁਆਬੀ: ਜਲੰਧਰ, ਹੁਸ਼ਿਆਰਪੁਰ, ਕਪੂਰਥਲਾ, ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ ਨਗਰ | ਪੁਆਧੀ: ਰੂਪਨਗਰ, ਮੋਹਾਲੀ, ਰਾਜਪੁਰਾ',
        hi: 'दोआबी: जालंधर, होशियारपुर, कपूरथला, शहीद भगत सिंह नगर | पुआधी: रूपनगर, मोहाली, राजपुरा',
      },
      B: {
        en: 'Doabi: Rupnagar, Mohali, Patiala | Puadhi: Jalandhar, Hoshiarpur, Kapurthala',
        pa: 'ਦੁਆਬੀ: ਰੂਪਨਗਰ, ਮੋਹਾਲੀ, ਪਟਿਆਲਾ | ਪੁਆਧੀ: ਜਲੰਧਰ, ਹੁਸ਼ਿਆਰਪੁਰ, ਕਪੂਰਥਲਾ',
        hi: 'दोआबी: रूपनगर, मोहाली, पटियाला | पुआधी: जालंधर, होशियारपुर, कपूरथला',
      },
      C: {
        en: 'Doabi: Amritsar, Gurdaspur, Tarn Taran | Puadhi: Bathinda, Mansa, Barnala',
        pa: 'ਦੁਆਬੀ: ਅੰਮ੍ਰਿਤਸਰ, ਗੁਰਦਾਸਪੁਰ, ਤਰਨ ਤਾਰਨ | ਪੁਆਧੀ: ਬਠਿੰਡਾ, ਮਾਨਸਾ, ਬਰਨਾਲਾ',
        hi: 'दोआबी: अमृतसर, गुरदासपुर, तरनतारन | पुआधी: बठिंडा, मानसा, बरनाला',
      },
      D: {
        en: 'Doabi: Ferozepur, Fazilka, Moga | Puadhi: Pathankot, Gurdaspur, Hoshiarpur',
        pa: 'ਦੁਆਬੀ: ਫ਼ਿਰੋਜ਼ਪੁਰ, ਫ਼ਾਜ਼ਿਲਕਾ, ਮੋਗਾ | ਪੁਆਧੀ: ਪਠਾਨਕੋਟ, ਗੁਰਦਾਸਪੁਰ, ਹੁਸ਼ਿਆਰਪੁਰ',
        hi: 'दोआबी: फ़िरोज़पुर, फ़ाज़िल्का, मोगा | पुआधी: पठानकोट, गुरदासपुर, होशियारपुर',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Doabi is spoken in the Bist Doab (between Beas and Sutlej) comprising Jalandhar, Hoshiarpur, Kapurthala, and SBS Nagar (Nawanshahr). Puadhi is spoken in the eastern Puadh region covering Rupnagar (Ropar), SAS Nagar (Mohali), Rajpura (eastern Patiala), and eastern Fatehgarh Sahib.',
      pa: 'ਦੁਆਬੀ ਉਪਭਾਸ਼ਾ ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ ਵਿਚਕਾਰਲੇ ਦੁਆਬੇ ਦੇ 4 ਜ਼ਿਲ੍ਹਿਆਂ (ਜਲੰਧਰ, ਹੁਸ਼ਿਆਰਪੁਰ, ਕਪੂਰਥਲਾ, ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ ਨਗਰ) ਵਿੱਚ ਬੋਲੀ ਜਾਂਦੀ ਹੈ, ਜਦਕਿ ਪੁਆਧੀ ਪੂਰਬੀ ਪੰਜਾਬ ਦੇ ਰੂਪਨਗਰ (ਰੋਪੜ), ਐੱਸ.ਏ.ਐੱਸ. ਨਗਰ (ਮੋਹਾਲੀ) ਅਤੇ ਰਾਜਪੁਰਾ ਦੇ ਇਲਾਕੇ ਵਿੱਚ ਬੋਲੀ ਜਾਂਦੀ ਹੈ।',
      hi: 'दोआबी उपभाषा ब्यास और सतलुज के बीच दोआबा के 4 ज़िलों (जालंधर, होशियारपुर, कपूरथला, शहीद भगत सिंह नगर) में बोली जाती है, जबकि पुआधी पूर्वी पंजाब के रूपनगर (रोपड़), एस.ए.एस. नगर (मोहाली) और राजपुरा क्षेत्र में बोली जाती है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-9',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'Into how many types is Noun (ਨਾਂਵ) classified in Punjabi grammar, and to which category do the words "ਜਮਾਤ, ਫ਼ੌਜ, ਇੱਜੜ, ਸਭਾ" (class, army, flock, assembly) belong?',
      pa: 'ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਵਿੱਚ ਨਾਂਵ ਦੀਆਂ ਕਿੰਨੀਆਂ ਕਿਸਮਾਂ ਹਨ ਅਤੇ "ਜਮਾਤ, ਫ਼ੌਜ, ਇੱਜੜ, ਸਭਾ" ਸ਼ਬਦ ਨਾਂਵ ਦੀ ਕਿਹੜੀ ਕਿਸਮ ਅਧੀਨ ਆਉਂਦੇ ਹਨ?',
      hi: 'पंजाबी व्याकरण में संज्ञा (ਨਾਂਵ) के कितने भेद हैं और "ਜਮਾਤ, ਫ਼ੌਜ, ਇੱਜੜ, ਸਭਾ" शब्द संज्ञा के किस भेद के अंतर्गत आते हैं?',
    },
    options: {
      A: {
        en: '5 types of Noun; they belong to Collective Noun (ਇਕੱਠਵਾਚਕ ਨਾਂਵ)',
        pa: 'ਨਾਂਵ ਦੀਆਂ 5 ਕਿਸਮਾਂ; ਇਹ "ਇਕੱਠਵਾਚਕ ਨਾਂਵ" ਹਨ',
        hi: 'संज्ञा के 5 भेद; ये "समूहवाचक संज्ञा" (ਇਕੱਠਵਾਚਕ ਨਾਂਵ) हैं',
      },
      B: {
        en: '6 types of Noun; they belong to Material Noun (ਵਸਤੂਵਾਚਕ ਨਾਂਵ)',
        pa: 'ਨਾਂਵ ਦੀਆਂ 6 ਕਿਸਮਾਂ; ਇਹ "ਵਸਤੂਵਾਚਕ ਨਾਂਵ" ਹਨ',
        hi: 'संज्ञा के 6 भेद; ये "द्रव्यवाचक संज्ञा" (ਵਸਤੂਵਾਚਕ ਨਾਂਵ) हैं',
      },
      C: {
        en: '5 types of Noun; they belong to Abstract Noun (ਭਾਵਵਾਚਕ ਨਾਂਵ)',
        pa: 'ਨਾਂਵ ਦੀਆਂ 5 ਕਿਸਮਾਂ; ਇਹ "ਭਾਵਵਾਚਕ ਨਾਂਵ" ਹਨ',
        hi: 'संज्ञा के 5 भेद; ये "भाववाचक संज्ञा" (ਭਾਵਵਾਚਕ ਨਾਂਵ) हैं',
      },
      D: {
        en: '4 types of Noun; they belong to Proper Noun (ਖ਼ਾਸ ਨਾਂਵ)',
        pa: 'ਨਾਂਵ ਦੀਆਂ 4 ਕਿਸਮਾਂ; ਇਹ "ਖ਼ਾਸ ਨਾਂਵ" ਹਨ',
        hi: 'संज्ञा के 4 भेद; ये "व्यक्तिवाचक संज्ञा" (ਖ਼ਾਸ ਨਾਂਵ) हैं',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Noun (ਨਾਂਵ) has 5 types in Punjabi: 1. ਆਮ/ਜਾਤੀਵਾਚਕ (Common), 2. ਖ਼ਾਸ/ਨਿੱਜਵਾਚਕ (Proper), 3. ਵਸਤੂਵਾਚਕ (Material — ਸੋਨਾ, ਪਾਣੀ, ਕਣਕ), 4. ਇਕੱਠਵਾਚਕ (Collective — ਜਮਾਤ, ਫ਼ੌਜ, ਇੱਜੜ, ਡਾਰ, ਸਭਾ), and 5. ਭਾਵਵਾਚਕ (Abstract — ਮਿਠਾਸ, ਗ਼ਰੀਬੀ, ਖੁਸ਼ੀ).',
      pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਨਾਂਵ ਦੀਆਂ 5 ਕਿਸਮਾਂ ਹਨ: ਆਮ ਨਾਂਵ, ਖ਼ਾਸ ਨਾਂਵ, ਵਸਤੂਵਾਚਕ ਨਾਂਵ, ਇਕੱਠਵਾਚਕ ਨਾਂਵ ਅਤੇ ਭਾਵਵਾਚਕ ਨਾਂਵ। "ਜਮਾਤ, ਫ਼ੌਜ, ਇੱਜੜ, ਸਭਾ" ਗਿਣਨਯੋਗ ਸਮੂਹਾਂ ਦਾ ਬੋਧ ਕਰਵਾਉਂਦੇ ਹਨ, ਇਸ ਲਈ ਇਹ ਇਕੱਠਵਾਚਕ ਨਾਂਵ ਹਨ।',
      hi: 'पंजाबी में संज्ञा (ਨਾਂਵ) के 5 भेद हैं: आम नांव, ख़ास नांव, वस्तुवाचक नांव, इकठवाचक नांव और भाववाचक नांव। "ਜਮਾਤ, ਫ਼ੌਜ, ਇੱਜੜ, ਸਭਾ" समूह का बोध कराते हैं, इसलिए ये इकठवाचक (समूहवाचक) नांव हैं।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-10',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'In the Punjabi sentence "ਮੁੰਡਿਆਂ ਨੇ ਆਪ ਸਾਰਾ ਕੰਮ ਮੁਕਾ ਲਿਆ" (The boys finished all the work themselves), the word "ਆਪ" represents which of the 6 types of Pronoun (ਪੜਨਾਂਵ)?',
      pa: '"ਮੁੰਡਿਆਂ ਨੇ ਆਪ ਸਾਰਾ ਕੰਮ ਮੁਕਾ ਲਿਆ" ਵਾਕ ਵਿੱਚ "ਆਪ" ਸ਼ਬਦ ਪੜਨਾਂਵ ਦੀਆਂ 6 ਕਿਸਮਾਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਕਿਸਮ ਹੈ?',
      hi: '"ਮੁੰਡਿਆਂ ਨੇ ਆਪ ਸਾਰਾ ਕੰਮ ਮੁਕਾ ਲਿਆ" वाक्य में "ਆਪ" शब्द सर्वनाम (ਪੜਨਾਂਵ) के 6 भेदों में से कौन-सा भेद है?',
    },
    options: {
      A: {
        en: 'Reflexive Pronoun (ਨਿਜਵਾਚਕ ਪੜਨਾਂਵ)',
        pa: 'ਨਿਜਵਾਚਕ ਪੜਨਾਂਵ',
        hi: 'निजवाचक सर्वनाम (ਨਿਜਵਾਚਕ ਪੜਨਾਂਵ)',
      },
      B: {
        en: 'Second Person Pronoun (ਮੱਧਮ ਪੁਰਖ ਪੜਨਾਂਵ)',
        pa: 'ਮੱਧਮ ਪੁਰਖ ਪੜਨਾਂਵ',
        hi: 'मध्यम पुरुष सर्वनाम (ਮੱਧਮ ਪੁਰਖ ਪੜਨਾਂਵ)',
      },
      C: {
        en: 'Demonstrative Pronoun (ਨਿਸ਼ਚੇਵਾਚਕ ਪੜਨਾਂਵ)',
        pa: 'ਨਿਸ਼ਚੇਵਾਚਕ ਪੜਨਾਂਵ',
        hi: 'निश्चयवाचक सर्वनाम (ਨਿਸ਼ਚੇਵਾਚਕ ਪੜਨਾਂਵ)',
      },
      D: {
        en: 'Relative Pronoun (ਸੰਬੰਧਵਾਚਕ ਪੜਨਾਂਵ)',
        pa: 'ਸੰਬੰਧਵਾਚਕ ਪੜਨਾਂਵ',
        hi: 'संबंधवाचक सर्वनाम (ਸੰਬੰਧਵਾਚਕ ਪੜਨਾਂਵ)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Punjabi has 6 types of Pronouns (ਪੁਰਖਵਾਚਕ, ਨਿਜਵਾਚਕ, ਨਿਸ਼ਚੇਵਾਚਕ, ਅਨਿਸ਼ਚੇਵਾਚਕ, ਸੰਬੰਧਵਾਚਕ, ਪ੍ਰਸ਼ਨਵਾਚਕ). When "ਆਪ" or "ਆਪਸ" is used with the subject to emphasize self-action ("themselves"), it is a Reflexive Pronoun (ਨਿਜਵਾਚਕ ਪੜਨਾਂਵ).',
      pa: 'ਪੜਨਾਂਵ ਦੀਆਂ 6 ਕਿਸਮਾਂ ਹੁੰਦੀਆਂ ਹਨ। ਜਿਹੜਾ ਪੜਨਾਂਵ ਕਰਤਾ ਦੇ ਨਾਲ ਆ ਕੇ ਉਸ ਦੀ ਵਿਸ਼ੇਸ਼ਤਾ ਦੱਸੇ ਜਾਂ ਕਰਤਾ ਦੀ ਥਾਂ ’ਤੇ ਵਰਤਿਆ ਜਾਵੇ (ਜਿਵੇਂ "ਮੁੰਡਿਆਂ ਨੇ ਆਪ"), ਉਸ ਨੂੰ "ਨਿਜਵਾਚਕ ਪੜਨਾਂਵ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
      hi: 'सर्वनाम (ਪੜਨਾਂਵ) के 6 भेद होते हैं। जो सर्वनाम कर्ता के साथ आकर स्वयं का बोध कराता है (जैसे "ਮੁੰਡਿਆਂ ਨੇ ਆਪ"), उसे "निजवाचक पड़नांव" कहा जाता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-11',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'How many types of Adjective (ਵਿਸ਼ੇਸ਼ਣ) exist in Punjabi grammar, and which type is illustrated in "ਮੈਨੂੰ ਦੋ ਕਿੱਲੋ ਦੁੱਧ ਅਤੇ ਥੋੜ੍ਹਾ ਜਿਹਾ ਗੁੜ ਦਿਓ"?',
      pa: 'ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਵਿੱਚ ਵਿਸ਼ੇਸ਼ਣ ਦੀਆਂ ਕਿੰਨੀਆਂ ਕਿਸਮਾਂ ਹਨ ਅਤੇ "ਮੈਨੂੰ ਦੋ ਕਿੱਲੋ ਦੁੱਧ ਅਤੇ ਥੋੜ੍ਹਾ ਜਿਹਾ ਗੁੜ ਦਿਓ" ਵਾਕ ਵਿੱਚ ਕਿਹੜਾ ਵਿਸ਼ੇਸ਼ਣ ਵਰਤਿਆ ਗਿਆ ਹੈ?',
      hi: 'पंजाबी व्याकरण में विशेषण के कितने भेद हैं और "ਮੈਨੂੰ ਦੋ ਕਿੱਲੋ ਦੁੱਧ ਅਤੇ ਥੋੜ੍ਹਾ ਜਿਹਾ ਗੁੜ ਦਿਓ" वाक्य में कौन-सा विशेषण प्रयुक्त हुआ है?',
    },
    options: {
      A: {
        en: '5 types; Quantitative / Measure Adjective (ਪਰਿਮਾਣਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ)',
        pa: '5 ਕਿਸਮਾਂ; ਪਰਿਮਾਣਵਾਚਕ (ਮਿਣਤੀਵਾਚਕ) ਵਿਸ਼ੇਸ਼ਣ',
        hi: '5 भेद; परिमाणवाचक विशेषण (ਪਰਿਮਾਣਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ)',
      },
      B: {
        en: '5 types; Numeral Adjective (ਸੰਖਿਆਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ)',
        pa: '5 ਕਿਸਮਾਂ; ਸੰਖਿਆਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ',
        hi: '5 भेद; संख्यावाचक विशेषण (ਸੰਖਿਆਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ)',
      },
      C: {
        en: '6 types; Qualitative Adjective (ਗੁਣਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ)',
        pa: '6 ਕਿਸਮਾਂ; ਗੁਣਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ',
        hi: '6 भेद; गुणवाचक विशेषण (ਗੁਣਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ)',
      },
      D: {
        en: '4 types; Demonstrative Adjective (ਨਿਸ਼ਚੇਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ)',
        pa: '4 ਕਿਸਮਾਂ; ਨਿਸ਼ਚੇਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ',
        hi: '4 भेद; निश्चयवाचक विशेषण (ਨਿਸ਼ਚੇਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Punjabi has 5 types of Adjectives (ਗੁਣਵਾਚਕ, ਸੰਖਿਆਵਾਚਕ, ਪਰਿਮਾਣਵਾਚਕ, ਨਿਸ਼ਚੇਵਾਚਕ, ਪੜਨਾਂਵੀ ਵਿਸ਼ੇਸ਼ਣ). Words denoting measurement, weight, or quantity of uncountable nouns like "ਦੋ ਕਿੱਲੋ ਦੁੱਧ" and "ਥੋੜ੍ਹਾ ਜਿਹਾ ਗੁੜ" are ਪਰਿਮਾਣਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ (Quantitative Adjectives).',
      pa: 'ਵਿਸ਼ੇਸ਼ਣ ਦੀਆਂ 5 ਕਿਸਮਾਂ ਹਨ (ਗੁਣਵਾਚਕ, ਸੰਖਿਆਵਾਚਕ, ਪਰਿਮਾਣਵਾਚਕ, ਨਿਸ਼ਚੇਵਾਚਕ, ਪੜਨਾਂਵੀ)। ਜਿਹੜੇ ਸ਼ਬਦ ਵਿਸ਼ੇਸ਼ਯ ਦੀ ਮਿਣਤੀ, ਤੋਲ ਜਾਂ ਮਾਪ ਦੱਸਣ ("ਦੋ ਕਿੱਲੋ", "ਥੋੜ੍ਹਾ ਜਿਹਾ"), ਉਹ ਪਰਿਮਾਣਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ ਅਖਵਾਉਂਦੇ ਹਨ।',
      hi: 'विशेषण के 5 भेद हैं (गुणवाचक, संख्यावाचक, परिमाणवाचक, निश्चयवाचक, सार्वनामिक)। जो शब्द विशेष्य की माप-तौल या मात्रा बताते हैं ("ਦੋ ਕਿੱਲੋ", "ਥੋੜ੍ਹਾ ਜਿਹਾ"), वे परिमाणवाचक विशेषण कहलाते हैं।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-12',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'What is the grammatical distinction between an Intransitive Verb (ਅਕਰਮਕ ਕਿਰਿਆ) and a Transitive Verb (ਸਕਰਮਕ ਕਿਰਿਆ) in Punjabi?',
      pa: 'ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਵਿੱਚ "ਅਕਰਮਕ ਕਿਰਿਆ" ਅਤੇ "ਸਕਰਮਕ ਕਿਰਿਆ" ਵਿੱਚ ਕੀ ਅੰਤਰ ਹੈ?',
      hi: 'पंजाबी व्याकरण में "अकर्मक क्रिया" (ਅਕਰਮਕ ਕਿਰਿਆ) और "सकर्मक क्रिया" (ਸਕਰਮਕ ਕਿਰਿਆ) में क्या अंतर है?',
    },
    options: {
      A: {
        en: 'ਅਕਰਮਕ ਕਿਰਿਆ has only a Subject (ਕਰਤਾ) without an Object (e.g., ਬੱਚਾ ਹੱਸਦਾ ਹੈ), whereas ਸਕਰਮਕ ਕਿਰਿਆ has both Subject and Object (e.g., ਬੱਚਾ ਸੇਬ ਖਾਂਦਾ ਹੈ)',
        pa: 'ਅਕਰਮਕ ਕਿਰਿਆ ਵਿੱਚ ਕਰਮ ਨਹੀਂ ਹੁੰਦਾ ਕੇਵਲ ਕਰਤਾ ਹੁੰਦਾ ਹੈ (ਜਿਵੇਂ: ਬੱਚਾ ਹੱਸਦਾ ਹੈ), ਜਦਕਿ ਸਕਰਮਕ ਕਿਰਿਆ ਵਿੱਚ ਕਰਤਾ ਅਤੇ ਕਰਮ ਦੋਵੇਂ ਹੁੰਦੇ ਹਨ (ਜਿਵੇਂ: ਬੱਚਾ ਸੇਬ ਖਾਂਦਾ ਹੈ)',
        hi: 'अकर्मक क्रिया में कर्म नहीं होता केवल कर्ता होता है (जैसे: ਬੱਚਾ ਹੱਸਦਾ ਹੈ), जबकि सकर्मक क्रिया में कर्ता और कर्म दोनों होते हैं (जैसे: ਬੱਚਾ ਸੇਬ ਖਾਂਦਾ ਹੈ)',
      },
      B: {
        en: 'ਅਕਰਮਕ ਕਿਰਿਆ occurs in the past tense, whereas ਸਕਰਮਕ ਕਿਰਿਆ occurs only in the future tense',
        pa: 'ਅਕਰਮਕ ਕਿਰਿਆ ਭੂਤਕਾਲ ਵਿੱਚ ਹੁੰਦੀ ਹੈ, ਜਦਕਿ ਸਕਰਮਕ ਕਿਰਿਆ ਕੇਵਲ ਭਵਿੱਖਤ ਕਾਲ ਵਿੱਚ ਹੁੰਦੀ ਹੈ',
        hi: 'अकर्मक क्रिया भूतकाल में होती है, जबकि सकर्मक क्रिया केवल भविष्यत काल में होती है',
      },
      C: {
        en: 'ਅਕਰਮਕ ਕਿਰਿਆ consists of a single word, whereas ਸਕਰਮਕ ਕਿਰਿਆ always requires an auxiliary verb',
        pa: 'ਅਕਰਮਕ ਕਿਰਿਆ ਇਕਹਿਰੇ ਸ਼ਬਦ ਦੀ ਹੁੰਦੀ ਹੈ, ਜਦਕਿ ਸਕਰਮਕ ਕਿਰਿਆ ਵਿੱਚ ਸਹਾਇਕ ਕਿਰਿਆ ਲਾਜ਼ਮੀ ਹੁੰਦੀ ਹੈ',
        hi: 'अकर्मक क्रिया एकल शब्द की होती है, जबकि सकर्मक क्रिया में सहायक क्रिया अनिवार्य होती है',
      },
      D: {
        en: 'ਅਕਰਮਕ ਕਿਰਿਆ is performed by a third person, whereas ਸਕਰਮਕ ਕਿਰਿਆ is performed by the speaker',
        pa: 'ਅਕਰਮਕ ਕਿਰਿਆ ਕਿਸੇ ਤੀਜੇ ਵਿਅਕਤੀ ਦੁਆਰਾ ਕੀਤੀ ਜਾਂਦੀ ਹੈ, ਜਦਕਿ ਸਕਰਮਕ ਕਿਰਿਆ ਬੁਲਾਰੇ ਦੁਆਰਾ ਆਪ ਕੀਤੀ ਜਾਂਦੀ ਹੈ',
        hi: 'अकर्मक क्रिया किसी तीसरे व्यक्ति द्वारा की जाती है, जबकि सकर्मक क्रिया वक्ता द्वारा स्वयं की जाती है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'A verb whose action remains confined to the Subject (ਕਰਤਾ) without requiring an Object (ਕਰਮ) is Intransitive (ਅਕਰਮਕ ਕਿਰਿਆ — ਪੰਛੀ ਉੱਡਦੇ ਹਨ, ਬੱਚਾ ਸੌਂਦਾ ਹੈ). A verb that transfers action onto an Object (ਕਰਮ) is Transitive (ਸਕਰਮਕ ਕਿਰਿਆ — ਕੁੜੀ ਕਿਤਾਬ ਪੜ੍ਹਦੀ ਹੈ).',
      pa: 'ਜਿਸ ਵਾਕ ਵਿੱਚ ਕਿਰਿਆ ਦਾ ਕਰਮ ਨਾ ਹੋਵੇ ਅਤੇ ਕਿਰਿਆ ਦਾ ਪ੍ਰਭਾਵ ਕੇਵਲ ਕਰਤਾ ਤੱਕ ਸੀਮਤ ਰਹੇ, ਉਸ ਨੂੰ ਅਕਰਮਕ ਕਿਰਿਆ ਕਹਿੰਦੇ ਹਨ (ਜਿਵੇਂ: ਬੱਚਾ ਹੱਸਦਾ ਹੈ)। ਜਿਸ ਕਿਰਿਆ ਦੇ ਨਾਲ ਕਰਮ ਮੌਜੂਦ ਹੋਵੇ, ਉਸ ਨੂੰ ਸਕਰਮਕ ਕਿਰਿਆ ਕਹਿੰਦੇ ਹਨ (ਜਿਵੇਂ: ਬੱਚਾ ਸੇਬ ਖਾਂਦਾ ਹੈ)।',
      hi: 'जिस वाक्य में क्रिया का कर्म न हो और क्रिया का फल केवल कर्ता पर पड़े, उसे अकर्मक क्रिया कहते हैं (जैसे: ਬੱਚਾ ਹੱਸਦਾ ਹੈ)। जिस क्रिया के साथ कर्म उपस्थित हो, उसे सकर्मक क्रिया कहते हैं (जैसे: ਬੱਚਾ ਸੇਬ ਖਾਂਦਾ ਹੈ)।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-13',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'Identify the correct sequence of Root Verb (ਸਧਾਰਨ ਕਿਰਿਆ), First Causative Verb (ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ), and Second Causative Verb (ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ) in Punjabi:',
      pa: 'ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਅਨੁਸਾਰ "ਸਧਾਰਨ ਕਿਰਿਆ", "ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ" ਅਤੇ "ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ" ਦਾ ਸਹੀ ਕ੍ਰਮ ਕਿਹੜਾ ਹੈ?',
      hi: 'पंजाबी व्याकरण के अनुसार "साधारण क्रिया", "प्रथम प्रेरणार्थक क्रिया" और "द्वितीय प्रेरणार्थक क्रिया" का सही क्रम कौन-सा है?',
    },
    options: {
      A: {
        en: 'ਪੜ੍ਹਨਾ (Root) → ਪੜ੍ਹਾਉਣਾ (First Causative) → ਪੜ੍ਹਵਾਉਣਾ (Second Causative)',
        pa: 'ਪੜ੍ਹਨਾ (ਸਧਾਰਨ) → ਪੜ੍ਹਾਉਣਾ (ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ) → ਪੜ੍ਹਵਾਉਣਾ (ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ)',
        hi: 'ਪੜ੍ਹਨਾ (साधारण) → ਪੜ੍ਹਾਉਣਾ (प्रथम प्रेरणार्थक) → ਪੜ੍ਹਵਾਉਣਾ (द्वितीय प्रेरणार्थक)',
      },
      B: {
        en: 'ਪੜ੍ਹਾਉਣਾ (Root) → ਪੜ੍ਹਨਾ (First Causative) → ਪੜ੍ਹਵਾਉਣਾ (Second Causative)',
        pa: 'ਪੜ੍ਹਾਉਣਾ (ਸਧਾਰਨ) → ਪੜ੍ਹਨਾ (ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ) → ਪੜ੍ਹਵਾਉਣਾ (ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ)',
        hi: 'ਪੜ੍ਹਾਉਣਾ (साधारण) → ਪੜ੍ਹਨਾ (प्रथम प्रेरणार्थक) → ਪੜ੍ਹਵਾਉਣਾ (द्वितीय प्रेरणार्थक)',
      },
      C: {
        en: 'ਪੜ੍ਹਨਾ (Root) → ਪੜ੍ਹਿਆ (First Causative) → ਪੜ੍ਹਨਗੇ (Second Causative)',
        pa: 'ਪੜ੍ਹਨਾ (ਸਧਾਰਨ) → ਪੜ੍ਹਿਆ (ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ) → ਪੜ੍ਹਨਗੇ (ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ)',
        hi: 'ਪੜ੍ਹਨਾ (साधारण) → ਪੜ੍ਹਿਆ (प्रथम प्रेरणार्थक) → ਪੜ੍ਹਨਗੇ (द्वितीय प्रेरणार्थक)',
      },
      D: {
        en: 'ਪੜ੍ਹਵਾਉਣਾ (Root) → ਪੜ੍ਹਾਉਣਾ (First Causative) → ਪੜ੍ਹਨਾ (Second Causative)',
        pa: 'ਪੜ੍ਹਵਾਉਣਾ (ਸਧਾਰਨ) → ਪੜ੍ਹਾਉਣਾ (ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ) → ਪੜ੍ਹਨਾ (ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ)',
        hi: 'ਪੜ੍ਹਵਾਉਣਾ (साधारण) → ਪੜ੍ਹਾਉਣਾ (प्रथम प्रेरणार्थक) → ਪੜ੍ਹਨਾ (द्वितीय प्रेरणार्थक)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Causative Verbs (ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ), the subject causes someone else to act. For example: ਪੜ੍ਹਨਾ (to read oneself — ਸਧਾਰਨ), ਪੜ੍ਹਾਉਣਾ (to teach someone directly — ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ), and ਪੜ੍ਹਵਾਉਣਾ (to have someone taught through a third party — ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ).',
      pa: 'ਜਦੋਂ ਕਰਤਾ ਆਪ ਕੰਮ ਕਰਨ ਦੀ ਬਜਾਏ ਕਿਸੇ ਹੋਰ ਤੋਂ ਕੰਮ ਕਰਵਾਵੇ ਤਾਂ ਉਸ ਨੂੰ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ ਕਹਿੰਦੇ ਹਨ। ਜਿਵੇਂ: ਪੜ੍ਹਨਾ (ਸਧਾਰਨ ਕਿਰਿਆ), ਪੜ੍ਹਾਉਣਾ (ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ) ਅਤੇ ਪੜ੍ਹਵਾਉਣਾ (ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ)।',
      hi: 'जब कर्ता स्वयं कार्य न करके किसी अन्य को कार्य करने के लिए प्रेरित करे, तो उसे प्रेरणार्थक क्रिया कहते हैं। जैसे: ਪੜ੍ਹਨਾ (साधारण क्रिया), ਪੜ੍ਹਾਉਣਾ (प्रथम प्रेरणार्थक क्रिया) और ਪੜ੍ਹਵਾਉਣਾ (द्वितीय प्रेरणार्थक क्रिया)।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-14',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'How many types of Adverbs (ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ) are recognized in standard Punjabi grammar, and which type do the words "ਹੌਲੀ, ਤੇਜ਼, ਇੰਜ, ਕਿਵੇਂ" belong to?',
      pa: 'ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਵਿੱਚ "ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ" ਦੀਆਂ ਕਿੰਨੀਆਂ ਕਿਸਮਾਂ ਹਨ ਅਤੇ "ਹੌਲੀ, ਤੇਜ਼, ਇੰਜ, ਕਿਵੇਂ" ਕਿਸ ਕਿਸਮ ਦੇ ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ ਹਨ?',
      hi: 'पंजाबी व्याकरण में "क्रिया विशेषण" (ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ) के कितने भेद हैं और "ਹੌਲੀ, ਤੇਜ਼, ਇੰਜ, ਕਿਵੇਂ" किस प्रकार के क्रिया विशेषण हैं?',
    },
    options: {
      A: {
        en: '8 types; Adverb of Manner (ਪ੍ਰਕਾਰਵਾਚਕ ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ)',
        pa: '8 ਕਿਸਮਾਂ; ਪ੍ਰਕਾਰਵਾਚਕ (ਢੰਗ-ਵਾਚਕ) ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ',
        hi: '8 भेद; रीतिवाचक क्रिया विशेषण (ਪ੍ਰਕਾਰਵਾਚਕ ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ)',
      },
      B: {
        en: '6 types; Adverb of Time (ਕਾਲਵਾਚਕ ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ)',
        pa: '6 ਕਿਸਮਾਂ; ਕਾਲਵਾਚਕ ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ',
        hi: '6 भेद; कालवाचक क्रिया विशेषण (ਕਾਲਵਾਚਕ ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ)',
      },
      C: {
        en: '8 types; Adverb of Place (ਸਥਾਨਵਾਚਕ ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ)',
        pa: '8 ਕਿਸਮਾਂ; ਸਥਾਨਵਾਚਕ ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ',
        hi: '8 भेद; स्थानवाचक क्रिया विशेषण (ਸਥਾਨਵਾਚਕ ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ)',
      },
      D: {
        en: '5 types; Adverb of Reason (ਕਾਰਨਵਾਚਕ ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ)',
        pa: '5 ਕਿਸਮਾਂ; ਕਾਰਨਵਾਚਕ ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ',
        hi: '5 भेद; कारणवाचक क्रिया विशेषण (ਕਾਰਨਵਾਚਕ ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Punjabi has 8 types of Adverbs (ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ): ਕਾਲਵਾਚਕ (Time), ਸਥਾਨਵਾਚਕ (Place), ਪ੍ਰਕਾਰਵਾਚਕ (Manner), ਮਿਣਤੀਵਾਚਕ (Quantity), ਸੰਖਿਆਵਾਚਕ (Frequency/Number), ਨਿਰਣੇਵਾਚਕ (Affirmation/Negation), ਕਾਰਨਵਾਚਕ (Reason), and ਨਿਸ਼ਚੇਵਾਚਕ (Emphasis). Words like "ਹੌਲੀ, ਤੇਜ਼, ਇੰਜ, ਕਿਵੇਂ" describe the manner (ਢੰਗ/ਪ੍ਰਕਾਰ) of action.',
      pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ ਦੀਆਂ 8 ਕਿਸਮਾਂ ਹਨ: ਕਾਲਵਾਚਕ, ਸਥਾਨਵਾਚਕ, ਪ੍ਰਕਾਰਵਾਚਕ, ਮਿਣਤੀਵਾਚਕ, ਸੰਖਿਆਵਾਚਕ, ਨਿਰਣੇਵਾਚਕ, ਕਾਰਨਵਾਚਕ ਅਤੇ ਨਿਸ਼ਚੇਵਾਚਕ। "ਹੌਲੀ, ਤੇਜ਼, ਇੰਜ, ਕਿਵੇਂ" ਕੰਮ ਦੇ ਹੋਣ ਦਾ ਢੰਗ ਦੱਸਦੇ ਹਨ, ਇਸ ਲਈ ਇਹ ਪ੍ਰਕਾਰਵਾਚਕ ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ ਹਨ।',
      hi: 'पंजाबी में क्रिया विशेषण के 8 भेद हैं: कालवाचक, स्थानवाचक, प्रकारवाचक (रीतिवाचक), परिमाणवाचक, संख्यावाचक, निर्णयवाचक, कारणवाचक और निश्चयवाचक। "ਹੌਲੀ, ਤੇਜ਼, ਇੰਜ, ਕਿਵੇਂ" कार्य की रीति या ढंग बताते हैं, अतः ये प्रकारवाचक क्रिया विशेषण हैं।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-15',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'In Punjabi grammar, Postpositions (ਸੰਬੰਧਕ) are divided into 3 categories: Puran (ਪੂਰਨ), Apuran (ਅਪੂਰਨ), and Dubajre (ਦੁਬਾਜਰੇ). Which option correctly exemplifies Puran Sambandhak (ਪੂਰਨ ਸੰਬੰਧਕ)?',
      pa: 'ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਵਿੱਚ ਸੰਬੰਧਕ ਦੀਆਂ 3 ਕਿਸਮਾਂ (ਪੂਰਨ, ਅਪੂਰਨ, ਦੁਬਾਜਰੇ) ਵਿੱਚੋਂ "ਪੂਰਨ ਸੰਬੰਧਕ" ਦੀਆਂ ਸਹੀ ਉਦਾਹਰਨਾਂ ਕਿਹੜੀਆਂ ਹਨ?',
      hi: 'पंजाबी व्याकरण में संबंधक के 3 भेदों (पूर्ण, अपूर्ण, दुबाजरे) में से "पूर्ण संबंधक" (ਪੂਰਨ ਸੰਬੰਧਕ) के सही उदाहरण कौन-से हैं?',
    },
    options: {
      A: {
        en: 'ਨੇ, ਨੂੰ, ਤੋਂ, ਦਾ, ਦੀ, ਦੇ — which can connect words completely on their own',
        pa: 'ਨੇ, ਨੂੰ, ਤੋਂ, ਦਾ, ਦੀ, ਦੇ — ਜੋ ਇਕੱਲੇ ਹੀ ਸ਼ਬਦਾਂ ਦਾ ਸੰਬੰਧ ਜੋੜਨ ਦੇ ਸਮਰੱਥ ਹਨ',
        hi: 'ਨੇ, ਨੂੰ, ਤੋਂ, ਦਾ, ਦੀ, ਦੇ — जो अकेले ही शब्दों का संबंध जोड़ने में समर्थ हैं',
      },
      B: {
        en: 'ਉੱਤੇ, ਬਾਹਰ, ਨੇੜੇ, ਸਾਹਮਣੇ — which always require another postposition like "ਦੇ" before them',
        pa: 'ਉੱਤੇ, ਬਾਹਰ, ਨੇੜੇ, ਸਾਹਮਣੇ — ਜੋ ਇਕੱਲੇ ਸੰਬੰਧ ਨਹੀਂ ਜੋੜ ਸਕਦੇ ਅਤੇ "ਦੇ" ਦੀ ਮਦਦ ਲੈਂਦੇ ਹਨ',
        hi: 'ਉੱਤੇ, ਬਾਹਰ, ਨੇੜੇ, ਸਾਹਮਣੇ — जो अकेले संबंध नहीं जोड़ सकते और "ਦੇ" की सहायता लेते हैं',
      },
      C: {
        en: 'ਅਤੇ, ਪਰ, ਕਿਉਂਕਿ, ਸਗੋਂ — which join two clauses as conjunctions',
        pa: 'ਅਤੇ, ਪਰ, ਕਿਉਂਕਿ, ਸਗੋਂ — ਜੋ ਦੋ ਵਾਕਾਂ ਜਾਂ ਉਪਵਾਕਾਂ ਨੂੰ ਜੋੜਦੇ ਹਨ',
        hi: 'ਅਤੇ, ਪਰ, ਕਿਉਂਕਿ, ਸਗੋਂ — जो दो वाक्यों या उपवाक्यों को जोड़ते हैं',
      },
      D: {
        en: 'ਵਾਹ!, ਹਾਏ!, ਖ਼ਬਰਦਾਰ!, ਕਾਸ਼! — which express sudden emotion',
        pa: 'ਵਾਹ!, ਹਾਏ!, ਖ਼ਬਰਦਾਰ!, ਕਾਸ਼! — ਜੋ ਮਨ ਦੇ ਭਾਵ ਪ੍ਰਗਟ ਕਰਦੇ ਹਨ',
        hi: 'ਵਾਹ!, ਹਾਏ!, ਖ਼ਬਰਦਾਰ!, ਕਾਸ਼! — जो मन के भाव प्रकट करते हैं',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Postpositions (ਸੰਬੰਧਕ) have 3 types: 1. ਪੂਰਨ ਸੰਬੰਧਕ (Complete — ਨੇ, ਨੂੰ, ਤੋਂ, ਦਾ, ਦੀ, ਦੇ, ਵਿੱਚ) which stand alone; 2. ਅਪੂਰਨ ਸੰਬੰਧਕ (Incomplete — ਉੱਤੇ, ਬਾਹਰ, ਨੇੜੇ, ਦੂਰ) which need a ਪੂਰਨ ਸੰਬੰਧਕ like "ਦੇ"; 3. ਦੁਬਾਜਰੇ ਸੰਬੰਧਕ (Dual — ਕੋਲ, ਨਾਲ, ਬਿਨਾਂ, ਰਾਹੀਂ) which can function both alone and with another postposition.',
      pa: 'ਜਿਹੜੇ ਸੰਬੰਧਕ ਇਕੱਲੇ ਹੀ ਵਾਕ ਦੇ ਸ਼ਬਦਾਂ ਦਾ ਆਪਸੀ ਸੰਬੰਧ ਜੋੜ ਸਕਣ, ਉਹਨਾਂ ਨੂੰ "ਪੂਰਨ ਸੰਬੰਧਕ" ਕਹਿੰਦੇ ਹਨ (ਜਿਵੇਂ: ਨੇ, ਨੂੰ, ਤੋਂ, ਦਾ, ਦੀ, ਦੇ)। ਜੋ ਇਕੱਲੇ ਸੰਬੰਧ ਨਾ ਜੋੜ ਸਕਣ ਉਹ "ਅਪੂਰਨ ਸੰਬੰਧਕ" (ਜਿਵੇਂ: ਉੱਤੇ, ਬਾਹਰ) ਅਤੇ ਜੋ ਦੋਵੇਂ ਤਰ੍ਹਾਂ ਵਰਤੇ ਜਾਣ ਉਹ "ਦੁਬਾਜਰੇ ਸੰਬੰਧਕ" ਹਨ।',
      hi: 'जो संबंधक अकेले ही वाक्य के शब्दों का संबंध जोड़ सकते हैं, उन्हें "पूर्ण संबंधक" कहते हैं (जैसे: ਨੇ, ਨੂੰ, ਤੋਂ, ਦਾ, ਦੀ, ਦੇ)। जो अकेले संबंध न जोड़ सकें वे "अपूर्ण संबंधक" (जैसे: ਉੱਤੇ, ਬਾਹਰ) और जो दोनों प्रकार से प्रयुक्त हों वे "दुबाजरे संबंधक" हैं।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-16',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'Select the option in which ALL Punjabi words are spelled strictly according to standard Gurmukhi orthography (ਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ):',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਉਹ ਵਿਕਲਪ ਚੁਣੋ ਜਿਸ ਵਿੱਚ ਸਾਰੇ ਪੰਜਾਬੀ ਸ਼ਬਦ ਵਿਆਕਰਨਿਕ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਬਿਲਕੁਲ "ਸ਼ੁੱਧ" ਲਿਖੇ ਹੋਏ ਹਨ:',
      hi: 'निम्नलिखित में से वह विकल्प चुनें जिसमें सभी पंजाबी शब्द व्याकरणिक नियमों के अनुसार बिल्कुल "शुद्ध" लिखे गए हैं:',
    },
    options: {
      A: {
        en: 'ਸ਼ਹਿਰ, ਪੜ੍ਹਾਈ, ਸੋਹਣਾ, ਪ੍ਰੀਖਿਆ, ਸਿਹਤ, ਅਧਿਆਪਕ',
        pa: 'ਸ਼ਹਿਰ, ਪੜ੍ਹਾਈ, ਸੋਹਣਾ, ਪ੍ਰੀਖਿਆ, ਸਿਹਤ, ਅਧਿਆਪਕ',
        hi: 'ਸ਼ਹਿਰ, ਪੜ੍ਹਾਈ, ਸੋਹਣਾ, ਪ੍ਰੀਖਿਆ, ਸਿਹਤ, ਅਧਿਆਪਕ',
      },
      B: {
        en: 'ਸ਼ੈਹਰ, ਪੜਾਈ, ਸੌਹਣਾ, ਪਰੀਖਿਆ, ਸੇਹਤ, ਅਧਿਆਪਿਕ',
        pa: 'ਸ਼ੈਹਰ, ਪੜਾਈ, ਸੌਹਣਾ, ਪਰੀਖਿਆ, ਸੇਹਤ, ਅਧਿਆਪਿਕ',
        hi: 'ਸ਼ੈਹਰ, ਪੜਾਈ, ਸੌਹਣਾ, ਪਰੀਖਿਆ, ਸੇਹਤ, ਅਧਿਆਪਿਕ',
      },
      C: {
        en: 'ਸ਼ਹਿਰ, ਪੜ੍ਹਾਈ, ਸੋਹਨਾ, ਪ੍ਰਿਖਿਆ, ਸੀਹਤ, ਅਧਿਅਪਕ',
        pa: 'ਸ਼ਹਿਰ, ਪੜ੍ਹਾਈ, ਸੋਹਨਾ, ਪ੍ਰਿਖਿਆ, ਸੀਹਤ, ਅਧਿਅਪਕ',
        hi: 'ਸ਼ਹਿਰ, ਪੜ੍ਹਾਈ, ਸੋਹਨਾ, ਪ੍ਰਿਖਿਆ, ਸੀਹਤ, ਅਧਿਅਪਕ',
      },
      D: {
        en: 'ਸਹਿਰ, ਪੜਹਾਈ, ਸੋਹਣਾ, ਪ੍ਰੀਖੀਆ, ਸਿਹਤ, ਅਧਯਾਪਕ',
        pa: 'ਸਹਿਰ, ਪੜਹਾਈ, ਸੋਹਣਾ, ਪ੍ਰੀਖੀਆ, ਸਿਹਤ, ਅਧਯਾਪਕ',
        hi: 'ਸਹਿਰ, ਪੜਹਾਈ, ਸੋਹਣਾ, ਪ੍ਰੀਖੀਆ, ਸਿਹਤ, ਅਧਯਾਪਕ',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In standard Punjabi spelling rules: when "ਹ" in the middle of a word produces a short vowel tone, it takes Sihari (ਸ਼ਹਿਰ, ਸਿਹਤ — not ਸ਼ੈਹਰ/ਸੇਹਤ). "ਪੜ੍ਹਾਈ" requires ਪੈਰ ਵਿੱਚ ਹਾਹਾ and retroflex ੜ. "ਸੋਹਣਾ" uses ਣ, "ਪ੍ਰੀਖਿਆ" takes Bihari on ਪ+ਰ and Sihari on ਖ, and "ਅਧਿਆਪਕ" is the standard form.',
      pa: 'ਸ਼ੁੱਧ ਪੰਜਾਬੀ ਸ਼ਬਦ-ਜੋੜ ਨਿਯਮਾਂ ਅਨੁਸਾਰ: "ਸ਼ੈਹਰ" ਦਾ ਸ਼ੁੱਧ ਰੂਪ "ਸ਼ਹਿਰ", "ਪੜਾਈ" ਦਾ "ਪੜ੍ਹਾਈ", "ਸੌਹਣਾ/ਸੋਹਨਾ" ਦਾ "ਸੋਹਣਾ", "ਪਰੀਖਿਆ" ਦਾ "ਪ੍ਰੀਖਿਆ", "ਸੇਹਤ" ਦਾ "ਸਿਹਤ" ਅਤੇ "ਅਧਿਆਪਿਕ" ਦਾ ਸ਼ੁੱਧ ਰੂਪ "ਅਧਿਆਪਕ" ਹੈ।',
      hi: 'शुद्ध पंजाबी वर्तनी नियमों के अनुसार: "ਸ਼ੈਹਰ" का शुद्ध रूप "ਸ਼ਹਿਰ", "ਪੜਾਈ" का "ਪੜ੍ਹਾਈ", "ਸੌਹਣਾ/ਸੋਹਨਾ" का "ਸੋਹਣਾ", "ਪਰੀਖਿਆ" का "ਪ੍ਰੀਖਿਆ", "ਸੇਹਤ" का "ਸਿਹਤ" और "ਅਧਿਆਪਿਕ" का शुद्ध रूप "ਅਧਿਆਪਕ" है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-17',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'Which prefix (ਅਗੇਤਰ) is common to all the words "ਅਣਥੱਕ, ਅਣਜਾਣ, ਅਣਪੜ੍ਹ, ਅਣਖ" — or which word among them does NOT actually contain the prefix "ਅਣ"?',
      pa: '"ਅਣਥੱਕ, ਅਣਜਾਣ, ਅਣਪੜ੍ਹ, ਅਣਖ" ਸ਼ਬਦਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਸ਼ਬਦ "ਅਣ" ਅਗੇਤਰ ਤੋਂ ਨਹੀਂ ਬਣਿਆ?',
      hi: '"ਅਣਥੱਕ, ਅਣਜਾਣ, ਅਣਪੜ੍ਹ, ਅਣਖ" शब्दों में से कौन-सा शब्द "ਅਣ" उपसर्ग (अगेतर) से नहीं बना है?',
    },
    options: {
      A: {
        en: 'ਅਣਖ — because removing "ਅਣ" leaves only "ਖ", which is not a meaningful root word',
        pa: 'ਅਣਖ — ਕਿਉਂਕਿ ਇਹ ਮੂਲ ਸ਼ਬਦ ਹੈ ਅਤੇ ਇਸ ਵਿੱਚੋਂ "ਅਣ" ਹਟਾਉਣ ’ਤੇ ਪਿੱਛੇ ਕੋਈ ਸਾਰਥਕ ਮੂਲ ਸ਼ਬਦ ਨਹੀਂ ਬਚਦਾ',
        hi: 'ਅਣਖ — क्योंकि यह मूल शब्द है और इसमें से "ਅਣ" हटाने पर पीछे कोई सार्थक मूल शब्द नहीं बचता',
      },
      B: {
        en: 'ਅਣਥੱਕ — formed from ਅਣ + ਥੱਕ',
        pa: 'ਅਣਥੱਕ — ਜੋ "ਅਣ + ਥੱਕ" ਤੋਂ ਬਣਿਆ ਹੈ',
        hi: 'ਅਣਥੱਕ — जो "ਅਣ + ਥੱਕ" से बना है',
      },
      C: {
        en: 'ਅਣਜਾਣ — formed from ਅਣ + ਜਾਣ',
        pa: 'ਅਣਜਾਣ — ਜੋ "ਅਣ + ਜਾਣ" ਤੋਂ ਬਣਿਆ ਹੈ',
        hi: 'ਅਣਜਾਣ — जो "ਅਣ + ਜਾਣ" से बना है',
      },
      D: {
        en: 'ਅਣਪੜ੍ਹ — formed from ਅਣ + ਪੜ੍ਹ',
        pa: 'ਅਣਪੜ੍ਹ — ਜੋ "ਅਣ + ਪੜ੍ਹ" ਤੋਂ ਬਣਿਆ ਹੈ',
        hi: 'ਅਣਪੜ੍ਹ — जो "ਅਣ + ਪੜ੍ਹ" से बना है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'A valid prefix (ਅਗੇਤਰ) must attach to an independent, meaningful root word (ਮੂਲ ਸ਼ਬਦ). In ਅਣਥੱਕ (ਅਣ+ਥੱਕ), ਅਣਜਾਣ (ਅਣ+ਜਾਣ), and ਅਣਪੜ੍ਹ (ਅਣ+ਪੜ੍ਹ), the roots are meaningful. However, "ਅਣਖ" (self-respect/honour) is an indivisible root noun itself.',
      pa: 'ਅਗੇਤਰ ਹਮੇਸ਼ਾ ਕਿਸੇ ਸਾਰਥਕ ਮੂਲ ਸ਼ਬਦ ਦੇ ਅੱਗੇ ਲੱਗਦਾ ਹੈ। ਅਣਥੱਕ (ਅਣ+ਥੱਕ), ਅਣਜਾਣ (ਅਣ+ਜਾਣ) ਅਤੇ ਅਣਪੜ੍ਹ (ਅਣ+ਪੜ੍ਹ) ਵਿੱਚ "ਅਣ" ਅਗੇਤਰ ਹੈ, ਪਰ "ਅਣਖ" ਆਪ ਇੱਕ ਮੂਲ ਸ਼ਬਦ ਹੈ।',
      hi: 'उपसर्ग (अगेतर) सदैव किसी सार्थक मूल शब्द के आगे लगता है। ਅਣਥੱਕ (ਅਣ+ਥੱਕ), ਅਣਜਾਣ (ਅਣ+ਜਾਣ) और ਅਣਪੜ੍ਹ (ਅਣ+ਪੜ੍ਹ) में "ਅਣ" अगेतर है, परंतु "ਅਣਖ" (स्वाभिमान) स्वयं एक मूल शब्द है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-18',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'Which suffix (ਪਿਛੇਤਰ) is used to form the set of Punjabi words "ਕਲਾਕਾਰ, ਸਾਹਿਤਕਾਰ, ਚਿੱਤਰਕਾਰ, ਗੀਤਕਾਰ"?',
      pa: '"ਕਲਾਕਾਰ, ਸਾਹਿਤਕਾਰ, ਚਿੱਤਰਕਾਰ, ਗੀਤਕਾਰ" ਸ਼ਬਦਾਂ ਵਿੱਚ ਕਿਹੜਾ ਪਿਛੇਤਰ ਲੱਗਿਆ ਹੋਇਆ ਹੈ?',
      hi: '"ਕਲਾਕਾਰ, ਸਾਹਿਤਕਾਰ, ਚਿੱਤਰਕਾਰ, ਗੀਤਕਾਰ" शब्दों में कौन-सा प्रत्यय (पिछेतर) लगा हुआ है?',
    },
    options: {
      A: {
        en: 'ਕਾਰ (Kaar) — attached to meaningful roots ਕਲਾ, ਸਾਹਿਤ, ਚਿੱਤਰ, ਗੀਤ',
        pa: 'ਕਾਰ — ਜੋ ਕਲਾ, ਸਾਹਿਤ, ਚਿੱਤਰ ਅਤੇ ਗੀਤ ਮੂਲ ਸ਼ਬਦਾਂ ਦੇ ਪਿੱਛੇ ਲੱਗਿਆ ਹੈ',
        hi: 'ਕਾਰ — जो ਕਲਾ, ਸਾਹਿਤ, ਚਿੱਤਰ और ਗੀਤ मूल शब्दों के पीछे लगा है',
      },
      B: {
        en: 'ਆਕਾਰ (Aakaar) — attached via vowel sandhi',
        pa: 'ਆਕਾਰ — ਜੋ ਸ੍ਵਰ ਸੰਧੀ ਰਾਹੀਂ ਜੁੜਿਆ ਹੈ',
        hi: 'ਆਕਾਰ — जो स्वर संधि के माध्यम से जुड़ा है',
      },
      C: {
        en: 'ਰ (Ra) — the final consonant only',
        pa: 'ਰ — ਕੇਵਲ ਅਖੀਰਲਾ ਵਿਅੰਜਨ',
        hi: 'ਰ — केवल अंतिम व्यंजन',
      },
      D: {
        en: 'ਗਾਰ (Gaar) — a Persian suffix meaning doer',
        pa: 'ਗਾਰ — ਫ਼ਾਰਸੀ ਭਾਸ਼ਾ ਦਾ ਪਿਛੇਤਰ',
        hi: 'ਗਾਰ — फ़ारसी भाषा का प्रत्यय',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Each word is formed by adding the suffix "-ਕਾਰ" (meaning creator/doer) to a complete root noun: ਕਲਾ + ਕਾਰ = ਕਲਾਕਾਰ, ਸਾਹਿਤ + ਕਾਰ = ਸਾਹਿਤਕਾਰ, ਚਿੱਤਰ + ਕਾਰ = ਚਿੱਤਰਕਾਰ, ਗੀਤ + ਕਾਰ = ਗੀਤਕਾਰ.',
      pa: 'ਇਹਨਾਂ ਸਾਰੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਸਾਰਥਕ ਮੂਲ ਸ਼ਬਦਾਂ (ਕਲਾ, ਸਾਹਿਤ, ਚਿੱਤਰ, ਗੀਤ) ਦੇ ਪਿੱਛੇ "ਕਾਰ" ਪਿਛੇਤਰ ਲਗਾ ਕੇ ਨਵੇਂ ਸ਼ਬਦ ਬਣਾਏ ਗਏ ਹਨ।',
      hi: 'इन सभी शब्दों में सार्थक मूल शब्दों (ਕਲਾ, ਸਾਹਿਤ, ਚਿੱਤਰ, ਗੀਤ) के पीछे "ਕਾਰ" प्रत्यय (पिछेतर) लगाकर नए शब्द बनाए गए हैं।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-19',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'Which of the following represents the correct group of Synonyms (ਸਮਾਨਾਰਥਕ ਸ਼ਬਦ) for the Punjabi word "ਉਸਤਤ" (Praise)?',
      pa: 'ਪੰਜਾਬੀ ਸ਼ਬਦ "ਉਸਤਤ" ਦੇ ਸਹੀ ਸਮਾਨਾਰਥਕ ਸ਼ਬਦਾਂ ਵਾਲਾ ਜੁੱਟ ਚੁਣੋ:',
      hi: 'पंजाबी शब्द "ਉਸਤਤ" (प्रशंसा) के सही समानार्थक शब्दों वाला समूह चुनें:',
    },
    options: {
      A: {
        en: 'ਵਡਿਆਈ, ਪ੍ਰਸ਼ੰਸਾ, ਸਲਾਹੁਤਾ, ਤਾਰੀਫ਼',
        pa: 'ਵਡਿਆਈ, ਪ੍ਰਸ਼ੰਸਾ, ਸਲਾਹੁਤਾ, ਤਾਰੀਫ਼',
        hi: 'ਵਡਿਆਈ, ਪ੍ਰਸ਼ੰਸਾ, ਸਲਾਹੁਤਾ, ਤਾਰੀਫ਼',
      },
      B: {
        en: 'ਨਿੰਦਿਆ, ਚੁਗਲੀ, ਭੰਡੀ, ਗਿਲਾ',
        pa: 'ਨਿੰਦਿਆ, ਚੁਗਲੀ, ਭੰਡੀ, ਗਿਲਾ',
        hi: 'ਨਿੰਦਿਆ, ਚੁਗਲੀ, ਭੰਡੀ, ਗਿਲਾ',
      },
      C: {
        en: 'ਉੱਦਮ, ਉਪਰਾਲਾ, ਕੋਸ਼ਿਸ਼, ਯਤਨ',
        pa: 'ਉੱਦਮ, ਉਪਰਾਲਾ, ਕੋਸ਼ਿਸ਼, ਯਤਨ',
        hi: 'ਉੱਦਮ, ਉਪਰਾਲਾ, ਕੋਸ਼ਿਸ਼, ਯਤਨ',
      },
      D: {
        en: 'ਉੱਨਤੀ, ਤਰੱਕੀ, ਵਿਕਾਸ, ਚੜ੍ਹਤ',
        pa: 'ਉੱਨਤੀ, ਤਰੱਕੀ, ਵਿਕਾਸ, ਚੜ੍ਹਤ',
        hi: 'ਉੱਨਤੀ, ਤਰੱਕੀ, ਵਿਕਾਸ, ਚੜ੍ਹਤ',
      },
    },
    correct: 'A',
    explanation: {
      en: '"ਉਸਤਤ" means praise or glorification. Its synonyms in Punjabi are ਵਡਿਆਈ, ਪ੍ਰਸ਼ੰਸਾ, ਸਲਾਹੁਤਾ, ਤਾਰੀਫ਼, ਸ਼ਲਾਘਾ, and ਸਿਫ਼ਤ. Its antonym is ਨਿੰਦਿਆ (criticism/slander).',
      pa: '"ਉਸਤਤ" ਸ਼ਬਦ ਦੇ ਸਮਾਨਾਰਥਕ ਸ਼ਬਦ ਹਨ — ਵਡਿਆਈ, ਪ੍ਰਸ਼ੰਸਾ, ਸਲਾਹੁਤਾ, ਤਾਰੀਫ਼, ਸਿਫ਼ਤ ਅਤੇ ਸ਼ਲਾਘਾ। "ਨਿੰਦਿਆ" ਇਸ ਦਾ ਵਿਰੋਧਾਰਥਕ ਸ਼ਬਦ ਹੈ।',
      hi: '"ਉਸਤਤ" शब्द के समानार्थक शब्द हैं — ਵਡਿਆਈ, ਪ੍ਰਸ਼ੰਸਾ, ਸਲਾਹੁਤਾ, ਤਾਰੀਫ਼, ਸਿਫ਼ਤ और ਸ਼ਲਾਘਾ। "ਨਿੰਦਿਆ" इसका विपरीतार्थक शब्द है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-20',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'Identify the option in which all pairs of Punjabi Antonyms (ਵਿਰੋਧਾਰਥਕ ਸ਼ਬਦ) are accurately matched:',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜੇ ਵਿਕਲਪ ਵਿੱਚ ਸਾਰੇ "ਵਿਰੋਧਾਰਥਕ ਸ਼ਬਦ" (ਉਲਟ ਭਾਵ ਵਾਲੇ ਸ਼ਬਦ) ਸਹੀ ਹਨ?',
      hi: 'निम्नलिखित में से किस विकल्प में सभी "विपरीतार्थक शब्द" (ਵਿਰੋਧਾਰਥਕ ਸ਼ਬਦ) सही सुमेलित हैं?',
    },
    options: {
      A: {
        en: 'ਸੰਖੇਪ – ਵਿਸਥਾਰ | ਸੱਜਣ – ਦੁਰਜਨ | ਆਸਤਿਕ – ਨਾਸਤਿਕ | ਖਰਾ – ਖੋਟਾ',
        pa: 'ਸੰਖੇਪ – ਵਿਸਥਾਰ | ਸੱਜਣ – ਦੁਰਜਨ | ਆਸਤਿਕ – ਨਾਸਤਿਕ | ਖਰਾ – ਖੋਟਾ',
        hi: 'ਸੰਖੇਪ – ਵਿਸਥਾਰ | ਸੱਜਣ – ਦੁਰਜਨ | ਆਸਤਿਕ – ਨਾਸਤਿਕ | ਖਰਾ – ਖੋਟਾ',
      },
      B: {
        en: 'ਸੰਖੇਪ – ਛੋਟਾ | ਸੱਜਣ – ਮਿੱਤਰ | ਆਸਤਿਕ – ਸ਼ਰਧਾਲੂ | ਖਰਾ – ਸ਼ੁੱਧ',
        pa: 'ਸੰਖੇਪ – ਛੋਟਾ | ਸੱਜਣ – ਮਿੱਤਰ | ਆਸਤਿਕ – ਸ਼ਰਧਾਲੂ | ਖਰਾ – ਸ਼ੁੱਧ',
        hi: 'ਸੰਖੇਪ – ਛੋਟਾ | ਸੱਜਣ – ਮਿੱਤਰ | ਆਸਤਿਕ – ਸ਼ਰਧਾਲੂ | ਖਰਾ – ਸ਼ੁੱਧ',
      },
      C: {
        en: 'ਉੱਤਮ – ਸ੍ਰੇਸ਼ਟ | ਅਮੀਰ – ਧਨੀ | ਸੋਗ – ਗ਼ਮੀ | ਹਮਾਇਤ – ਪੱਖ',
        pa: 'ਉੱਤਮ – ਸ੍ਰੇਸ਼ਟ | ਅਮੀਰ – ਧਨੀ | ਸੋਗ – ਗ਼ਮੀ | ਹਮਾਇਤ – ਪੱਖ',
        hi: 'ਉੱਤਮ – ਸ੍ਰੇਸ਼ਟ | ਅਮੀਰ – ਧਨੀ | ਸੋਗ – ਗ਼ਮੀ | ਹਮਾਇਤ – ਪੱਖ',
      },
      D: {
        en: 'ਸਵਰਗ – ਬਹਿਸ਼ਤ | ਸੱਖਣਾ – ਖਾਲੀ | ਹੌਸਲਾ – ਦਲੇਰੀ | ਕੁੱਢਰ – ਅਨਾੜੀ',
        pa: 'ਸਵਰਗ – ਬਹਿਸ਼ਤ | ਸੱਖਣਾ – ਖਾਲੀ | ਹੌਸਲਾ – ਦਲੇਰੀ | ਕੁੱਢਰ – ਅਨਾੜੀ',
        hi: 'ਸਵਰਗ – ਬਹਿਸ਼ਤ | ਸੱਖਣਾ – ਖਾਲੀ | ਹੌਸਲਾ – ਦਲੇਰੀ | ਕੁੱਢਰ – ਅਨਾੜੀ',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Option A contains true antonym pairs: ਸੰਖੇਪ (brief) vs ਵਿਸਥਾਰ (detailed), ਸੱਜਣ (gentleman/noble) vs ਦੁਰਜਨ (wicked), ਆਸਤਿਕ (theist) vs ਨਾਸਤਿਕ (atheist), and ਖਰਾ (pure/genuine) vs ਖੋਟਾ (counterfeit/impure). The other options list synonyms.',
      pa: 'ਵਿਕਲਪ A ਵਿੱਚ ਸਾਰੇ ਵਿਰੋਧਾਰਥਕ ਜੁੱਟ ਸਹੀ ਹਨ: ਸੰਖੇਪ ਦਾ ਵਿਰੋਧੀ ਵਿਸਥਾਰ, ਸੱਜਣ ਦਾ ਦੁਰਜਨ, ਆਸਤਿਕ ਦਾ ਨਾਸਤਿਕ ਅਤੇ ਖਰਾ ਦਾ ਖੋਟਾ। ਬਾਕੀ ਵਿਕਲਪਾਂ ਵਿੱਚ ਸਮਾਨਾਰਥਕ ਸ਼ਬਦ ਦਿੱਤੇ ਗਏ ਹਨ।',
      hi: 'विकल्प A में सभी विपरीतार्थक युग्म सही हैं: ਸੰਖੇਪ का विलोम ਵਿਸਥਾਰ, ਸੱਜਣ का ਦੁਰਜਨ, ਆਸਤਿਕ का ਨਾਸਤਿਕ और ਖਰਾ का ਖੋਟਾ। अन्य विकल्पों में समानार्थक शब्द दिए गए हैं।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-21',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'What are the exact one-word substitutions (ਬਹੁਤੇ ਸ਼ਬਦਾਂ ਦੀ ਥਾਂ ਇੱਕ ਸ਼ਬਦ) in Punjabi for: (1) "ਉਹ ਥਾਂ ਜਿੱਥੇ ਸਿੱਕੇ ਘੜੇ ਜਾਂਦੇ ਹਨ" (a place where coins are minted) and (2) "ਸਾਰੇ ਪਿੰਡ ਦੀ ਸਾਂਝੀ ਜ਼ਮੀਨ" (common land of a village)?',
      pa: 'ਬਹੁਤੇ ਸ਼ਬਦਾਂ ਦੀ ਥਾਂ ਇੱਕ ਸ਼ਬਦ ਦੱਸੋ: (1) "ਉਹ ਥਾਂ ਜਿੱਥੇ ਸਿੱਕੇ ਘੜੇ ਜਾਂਦੇ ਹਨ" ਅਤੇ (2) "ਸਾਰੇ ਪਿੰਡ ਦੀ ਸਾਂਝੀ ਜ਼ਮੀਨ"?',
      hi: 'अनेक शब्दों के लिए एक शब्द बताइए: (1) "ਉਹ ਥਾਂ ਜਿੱਥੇ ਸਿੱਕੇ ਘੜੇ ਜਾਂਦੇ ਹਨ" (जहाँ सिक्के ढाले जाते हैं) और (2) "ਸਾਰੇ ਪਿੰਡ ਦੀ ਸਾਂਝੀ ਜ਼ਮੀਨ" (गाँव की साझी भूमि)?',
    },
    options: {
      A: {
        en: '(1) ਟਕਸਾਲ (Mint) and (2) ਸ਼ਾਮਲਾਟ (Village Common Land)',
        pa: '(1) ਟਕਸਾਲ ਅਤੇ (2) ਸ਼ਾਮਲਾਟ',
        hi: '(1) ਟਕਸਾਲ (टकसाल) और (2) ਸ਼ਾਮਲਾਟ (शामलात)',
      },
      B: {
        en: '(1) ਖਜ਼ਾਨਾ (Treasury) and (2) ਜਗੀਰ (Estate)',
        pa: '(1) ਖਜ਼ਾਨਾ ਅਤੇ (2) ਜਗੀਰ',
        hi: '(1) ਖਜ਼ਾਨਾ (खज़ाना) और (2) ਜਗੀਰ (जागीर)',
      },
      C: {
        en: '(1) ਕਾਰਖਾਨਾ (Factory) and (2) ਬੰਜਰ (Barren land)',
        pa: '(1) ਕਾਰਖਾਨਾ ਅਤੇ (2) ਬੰਜਰ',
        hi: '(1) ਕਾਰਖਾਨਾ (कारखाना) और (2) ਬੰਜਰ (बंजर)',
      },
      D: {
        en: '(1) ਤਹਿਖਾਨਾ (Basement) and (2) ਮੌਰੂਸੀ (Ancestral land)',
        pa: '(1) ਤਹਿਖਾਨਾ ਅਤੇ (2) ਮੌਰੂਸੀ',
        hi: '(1) ਤਹਿਖਾਨਾ (तहखाना) और (2) ਮੌਰੂਸੀ (पैतृक भूमि)',
      },
    },
    correct: 'A',
    explanation: {
      en: '"ਟਕਸਾਲ" (Mint) refers to the government facility where metallic coins are struck/minted. "ਸ਼ਾਮਲਾਟ" refers to the collective common land owned jointly by the village Panchayat/inhabitants.',
      pa: 'ਜਿੱਥੇ ਸਰਕਾਰੀ ਸਿੱਕੇ ਘੜੇ ਜਾਂਦੇ ਹਨ ਉਸ ਨੂੰ "ਟਕਸਾਲ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ, ਅਤੇ ਸਾਰੇ ਪਿੰਡ ਦੀ ਸਾਂਝੀ ਜ਼ਮੀਨ ਨੂੰ "ਸ਼ਾਮਲਾਟ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
      hi: 'जहाँ सरकारी सिक्के ढाले जाते हैं उसे "ਟਕਸਾਲ" (टकसाल) कहा जाता है, और पूरे गाँव की साझी भूमि को "ਸ਼ਾਮਲਾਟ" (शामलात) कहा जाता है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-22',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'Match the following Punjabi expressions with their correct one-word substitutions (ਬਹੁਤੇ ਸ਼ਬਦਾਂ ਦੀ ਥਾਂ ਇੱਕ ਸ਼ਬਦ): (i) ਜੋ ਕਦੇ ਨਾ ਥੱਕੇ, (ii) ਰੱਬ ਦੀ ਹੋਂਦ ਵਿੱਚ ਵਿਸ਼ਵਾਸ ਰੱਖਣ ਵਾਲਾ, (iii) ਜਿਸ ਕੋਲ ਸਾਰੀਆਂ ਸ਼ਕਤੀਆਂ ਹੋਣ:',
      pa: 'ਹੇਠ ਲਿਖੇ ਵਾਕੰਸ਼ਾਂ ਲਈ ਸਹੀ ਇੱਕ-ਇੱਕ ਸ਼ਬਦ ਚੁਣੋ: (i) ਜੋ ਕਦੇ ਨਾ ਥੱਕੇ, (ii) ਰੱਬ ਦੀ ਹੋਂਦ ਵਿੱਚ ਵਿਸ਼ਵਾਸ ਰੱਖਣ ਵਾਲਾ, (iii) ਜਿਸ ਕੋਲ ਸਾਰੀਆਂ ਸ਼ਕਤੀਆਂ ਹੋਣ:',
      hi: 'निम्नलिखित वाक्यांशों के लिए सही एक-एक शब्द चुनें: (i) ਜੋ ਕਦੇ ਨਾ ਥੱਕੇ, (ii) ਰੱਬ ਦੀ ਹੋਂਦ ਵਿੱਚ ਵਿਸ਼ਵਾਸ ਰੱਖਣ ਵਾਲਾ, (iii) ਜਿਸ ਕੋਲ ਸਾਰੀਆਂ ਸ਼ਕਤੀਆਂ ਹੋਣ:',
    },
    options: {
      A: {
        en: '(i) ਅਣਥੱਕ, (ii) ਆਸਤਿਕ, (iii) ਸਰਬ-ਸ਼ਕਤੀਮਾਨ',
        pa: '(i) ਅਣਥੱਕ, (ii) ਆਸਤਿਕ, (iii) ਸਰਬ-ਸ਼ਕਤੀਮਾਨ',
        hi: '(i) ਅਣਥੱਕ, (ii) ਆਸਤਿਕ, (iii) ਸਰਬ-ਸ਼ਕਤੀਮਾਨ',
      },
      B: {
        en: '(i) ਆਲਸੀ, (ii) ਨਾਸਤਿਕ, (iii) ਸਰਬ-ਵਿਆਪਕ',
        pa: '(i) ਆਲਸੀ, (ii) ਨਾਸਤਿਕ, (iii) ਸਰਬ-ਵਿਆਪਕ',
        hi: '(i) ਆਲਸੀ, (ii) ਨਾਸਤਿਕ, (iii) ਸਰਬ-ਵਿਆਪਕ',
      },
      C: {
        en: '(i) ਅਣਥੱਕ, (ii) ਨਾਸਤਿਕ, (iii) ਸਰਬ-ਗਿਆਤਾ',
        pa: '(i) ਅਣਥੱਕ, (ii) ਨਾਸਤਿਕ, (iii) ਸਰਬ-ਗਿਆਤਾ',
        hi: '(i) ਅਣਥੱਕ, (ii) ਨਾਸਤਿਕ, (iii) ਸਰਬ-ਗਿਆਤਾ',
      },
      D: {
        en: '(i) ਉੱਦਮੀ, (ii) ਆਸਤਿਕ, (iii) ਸਮਕਾਲੀ',
        pa: '(i) ਉੱਦਮੀ, (ii) ਆਸਤਿਕ, (iii) ਸਮਕਾਲੀ',
        hi: '(i) ਉੱਦਮੀ, (ii) ਆਸਤਿਕ, (iii) ਸਮਕਾਲੀ',
      },
    },
    correct: 'A',
    explanation: {
      en: 'ਜੋ ਕਦੇ ਨਾ ਥੱਕੇ = ਅਣਥੱਕ (untiring/indefatigable); ਰੱਬ ਵਿੱਚ ਵਿਸ਼ਵਾਸ ਰੱਖਣ ਵਾਲਾ = ਆਸਤਿਕ (theist, whereas ਨਾਸਤਿਕ means atheist); ਜਿਸ ਕੋਲ ਸਾਰੀਆਂ ਸ਼ਕਤੀਆਂ ਹੋਣ = ਸਰਬ-ਸ਼ਕਤੀਮਾਨ (omnipotent).',
      pa: 'ਜੋ ਕਦੇ ਨਾ ਥੱਕੇ = ਅਣਥੱਕ; ਰੱਬ ਦੀ ਹੋਂਦ ਵਿੱਚ ਵਿਸ਼ਵਾਸ ਰੱਖਣ ਵਾਲਾ = ਆਸਤਿਕ (ਨਾ ਮੰਨਣ ਵਾਲਾ = ਨਾਸਤਿਕ); ਜਿਸ ਕੋਲ ਸਾਰੀਆਂ ਸ਼ਕਤੀਆਂ ਹੋਣ = ਸਰਬ-ਸ਼ਕਤੀਮਾਨ।',
      hi: 'ਜੋ ਕਦੇ ਨਾ ਥੱਕੇ = ਅਣਥੱਕ (अथक); ਰੱਬ ਦੀ ਹੋਂਦ ਵਿੱਚ ਵਿਸ਼ਵਾਸ ਰੱਖਣ ਵਾਲਾ = ਆਸਤਿਕ (आस्तिक); ਜਿਸ ਕੋਲ ਸਾਰੀਆਂ ਸ਼ਕਤੀਆਂ ਹੋਣ = ਸਰਬ-ਸ਼ਕਤੀਮਾਨ (सर्वशक्तिमान)।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-23',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'Which option shows the correct feminine gender (ਇਸਤਰੀ ਲਿੰਗ) forms for the masculine nouns "ਸਾਂਢੂ, ਜਵਾਈ, ਕੁੜਮ, ਸੰਦੂਕ"?',
      pa: '"ਸਾਂਢੂ, ਜਵਾਈ, ਕੁੜਮ, ਸੰਦੂਕ" ਪੁਲਿੰਗ ਸ਼ਬਦਾਂ ਦੇ ਸਹੀ ਇਸਤਰੀ ਲਿੰਗ ਰੂਪਾਂ ਵਾਲਾ ਜੁੱਟ ਚੁਣੋ:',
      hi: '"ਸਾਂਢੂ, ਜਵਾਈ, ਕੁੜਮ, ਸੰਦੂਕ" पुल्लिंग शब्दों के सही स्त्रीलिंग रूपों वाला समूह चुनें:',
    },
    options: {
      A: {
        en: 'ਸਾਲੀ, ਧੀ, ਕੁੜਮਣੀ, ਸੰਦੂਕੜੀ',
        pa: 'ਸਾਲੀ, ਧੀ, ਕੁੜਮਣੀ, ਸੰਦੂਕੜੀ',
        hi: 'ਸਾਲੀ, ਧੀ, ਕੁੜਮਣੀ, ਸੰਦੂਕੜੀ',
      },
      B: {
        en: 'ਭਾਬੀ, ਨੂੰਹ, ਕੁੜਮਣੀ, ਸੰਦੂਕੀ',
        pa: 'ਭਾਬੀ, ਨੂੰਹ, ਕੁੜਮਣੀ, ਸੰਦੂਕੀ',
        hi: 'ਭਾਬੀ, ਨੂੰਹ, ਕੁੜਮਣੀ, ਸੰਦੂਕੀ',
      },
      C: {
        en: 'ਨਣਾਨ, ਭੈਣ, ਕੁੜਮੀ, ਸੰਦੂਕਣੀ',
        pa: 'ਨਣਾਨ, ਭੈਣ, ਕੁੜਮੀ, ਸੰਦੂਕਣੀ',
        hi: 'ਨਣਾਨ, ਭੈਣ, ਕੁੜਮੀ, ਸੰਦੂਕਣੀ',
      },
      D: {
        en: 'ਦਰਾਣੀ, ਜਠਾਣੀ, ਕੁੜਮਣ, ਸੰਦੂਕੜੀ',
        pa: 'ਦਰਾਣੀ, ਜਠਾਣੀ, ਕੁੜਮਣੀ, ਸੰਦੂਕੜੀ',
        hi: 'ਦਰਾਣੀ, ਜਠਾਣੀ, ਕੁੜਮਣੀ, ਸੰਦੂਕੜੀ',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Punjabi gender conversion (ਲਿੰਗ ਬਦਲੋ): ਸਾਂਢੂ (sister-in-law’s husband) → ਸਾਲੀ; ਜਵਾਈ (son-in-law) → ਧੀ (daughter); ਕੁੜਮ → ਕੁੜਮਣੀ; ਸੰਦੂਕ (large trunk) → ਸੰਦੂਕੜੀ (small trunk).',
      pa: 'ਪੰਜਾਬੀ ਲਿੰਗ ਬਦਲੋ ਨਿਯਮਾਂ ਅਨੁਸਾਰ: ਸਾਂਢੂ ਦਾ ਇਸਤਰੀ ਲਿੰਗ "ਸਾਲੀ", ਜਵਾਈ ਦਾ "ਧੀ", ਕੁੜਮ ਦਾ "ਕੁੜਮਣੀ" ਅਤੇ ਸੰਦੂਕ ਦਾ "ਸੰਦੂਕੜੀ" ਹੁੰਦਾ ਹੈ।',
      hi: 'पंजाबी लिंग परिवर्तन नियमों के अनुसार: ਸਾਂਢੂ का स्त्रीलिंग "ਸਾਲੀ", ਜਵਾਈ का "ਧੀ", ਕੁੜਮ का "ਕੁੜਮਣੀ" और ਸੰਦੂਕ का "ਸੰਦੂਕੜੀ" होता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-24',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'When the singular sentence "ਘੋੜਾ ਤੇਜ਼ ਦੌੜਦਾ ਹੈ ਅਤੇ ਕੁੜੀ ਗੀਤ ਗਾਉਂਦੀ ਹੈ" is changed into plural (ਵਚਨ ਬਦਲੋ), what is the grammatically correct plural sentence?',
      pa: '"ਘੋੜਾ ਤੇਜ਼ ਦੌੜਦਾ ਹੈ ਅਤੇ ਕੁੜੀ ਗੀਤ ਗਾਉਂਦੀ ਹੈ" ਵਾਕ ਦਾ ਵਚਨ ਬਦਲਣ ’ਤੇ ਸ਼ੁੱਧ ਬਹੁਵਚਨ ਵਾਕ ਕਿਹੜਾ ਬਣੇਗਾ?',
      hi: '"ਘੋੜਾ ਤੇਜ਼ ਦੌੜਦਾ ਹੈ ਅਤੇ ਕੁੜੀ ਗੀਤ ਗਾਉਂਦੀ ਹੈ" वाक्य का वचन बदलने पर शुद्ध बहुवचन वाक्य कौन-सा बनेगा?',
    },
    options: {
      A: {
        en: 'ਘੋੜੇ ਤੇਜ਼ ਦੌੜਦੇ ਹਨ ਅਤੇ ਕੁੜੀਆਂ ਗੀਤ ਗਾਉਂਦੀਆਂ ਹਨ।',
        pa: 'ਘੋੜੇ ਤੇਜ਼ ਦੌੜਦੇ ਹਨ ਅਤੇ ਕੁੜੀਆਂ ਗੀਤ ਗਾਉਂਦੀਆਂ ਹਨ।',
        hi: 'ਘੋੜੇ ਤੇਜ਼ ਦੌੜਦੇ ਹਨ ਅਤੇ ਕੁੜੀਆਂ ਗੀਤ ਗਾਉਂਦੀਆਂ ਹਨ।',
      },
      B: {
        en: 'ਘੋੜਿਆਂ ਤੇਜ਼ ਦੌੜਦੇ ਹਨ ਅਤੇ ਕੁੜੀਆਂ ਗੀਤਾਂ ਗਾਉਂਦੀਆਂ ਹਨ।',
        pa: 'ਘੋੜਿਆਂ ਤੇਜ਼ ਦੌੜਦੇ ਹਨ ਅਤੇ ਕੁੜੀਆਂ ਗੀਤਾਂ ਗਾਉਂਦੀਆਂ ਹਨ।',
        hi: 'ਘੋੜਿਆਂ ਤੇਜ਼ ਦੌੜਦੇ ਹਨ ਅਤੇ ਕੁੜੀਆਂ ਗੀਤਾਂ ਗਾਉਂਦੀਆਂ ਹਨ।',
      },
      C: {
        en: 'ਘੋੜੇ ਤੇਜ਼ ਦੌੜਦਾ ਹਨ ਅਤੇ ਕੁੜੀਆਂ ਗੀਤ ਗਾਉਂਦੀ ਹੈ।',
        pa: 'ਘੋੜੇ ਤੇਜ਼ ਦੌੜਦਾ ਹਨ ਅਤੇ ਕੁੜੀਆਂ ਗੀਤ ਗਾਉਂਦੀ ਹੈ।',
        hi: 'ਘੋੜੇ ਤੇਜ਼ ਦੌੜਦਾ ਹਨ ਅਤੇ ਕੁੜੀਆਂ ਗੀਤ ਗਾਉਂਦੀ ਹੈ।',
      },
      D: {
        en: 'ਘੋੜਿਆਂ ਤੇਜ਼ ਦੌੜਦੀਆਂ ਹਨ ਅਤੇ ਕੁੜੀ ਗੀਤ ਗਾਉਂਦੇ ਹਨ।',
        pa: 'ਘੋੜਿਆਂ ਤੇਜ਼ ਦੌੜਦੀਆਂ ਹਨ ਅਤੇ ਕੁੜੀ ਗੀਤ ਗਾਉਂਦੇ ਹਨ।',
        hi: 'ਘੋੜਿਆਂ ਤੇਜ਼ ਦੌੜਦੀਆਂ ਹਨ ਅਤੇ ਕੁੜੀ ਗੀਤ ਗਾਉਂਦੇ ਹਨ।',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Masculine nouns ending in Kanna (ਘੋੜਾ) take Laan in the direct plural (ਘੋੜੇ), and the verb changes from ਦੌੜਦਾ ਹੈ to ਦੌੜਦੇ ਹਨ. Feminine nouns ending in Bihari (ਕੁੜੀ) take -ਆਂ (ਕੁੜੀਆਂ), while masculine Mukta-ending object "ਗੀਤ" remains "ਗੀਤ" in direct plural, with verb ਗਾਉਂਦੀਆਂ ਹਨ.',
      pa: 'ਕੰਨਾ ਅੰਤਕ ਪੁਲਿੰਗ ਨਾਂਵ "ਘੋੜਾ" ਦਾ ਸਧਾਰਨ ਬਹੁਵਚਨ "ਘੋੜੇ" ਬਣਦਾ ਹੈ (ਕਿਰਿਆ: ਦੌੜਦੇ ਹਨ) ਅਤੇ ਬਿਹਾਰੀ ਅੰਤਕ ਇਸਤਰੀ ਲਿੰਗ "ਕੁੜੀ" ਦਾ ਬਹੁਵਚਨ "ਕੁੜੀਆਂ" ਬਣਦਾ ਹੈ (ਕਿਰਿਆ: ਗਾਉਂਦੀਆਂ ਹਨ)।',
      hi: 'कन्ना अंत वाले पुल्लिंग संज्ञा "ਘੋੜਾ" का साधारण बहुवचन "ਘੋੜੇ" बनता है (क्रिया: ਦੌੜਦੇ ਹਨ) और बिहारी अंत वाले स्त्रीलिंग "ਕੁੜੀ" का बहुवचन "ਕੁੜੀਆਂ" बनता है (क्रिया: ਗਾਉਂਦੀਆਂ ਹਨ)।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-25',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'Among the 13 punctuation marks (ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ) in Punjabi grammar, which marks are used for: (1) ending a declarative sentence, (2) indicating an omitted letter inside a word (e.g., ਵਿੱਚੋਂ → ’ਚੋਂ), and (3) introducing examples or a list?',
      pa: 'ਪੰਜਾਬੀ ਦੇ 13 ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹਾਂ ਵਿੱਚੋਂ: (1) ਸਧਾਰਨ ਵਾਕ ਦੇ ਅੰਤ ਵਿੱਚ ਪੂਰਨ ਠਹਿਰਾਅ ਲਈ, (2) ਸ਼ਬਦ ਦੇ ਛੱਡੇ ਹੋਏ ਅੱਖਰ ਨੂੰ ਪ੍ਰਗਟ ਕਰਨ ਲਈ (ਜਿਵੇਂ ਵਿੱਚੋਂ → ’ਚੋਂ), ਅਤੇ (3) ਉਦਾਹਰਨਾਂ ਦੇਣ ਵੇਲੇ ਕਿਹੜੇ ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ ਵਰਤੇ ਜਾਂਦੇ ਹਨ?',
      hi: 'पंजाबी के 13 विराम चिह्नों में से: (1) साधारण वाक्य के अंत में पूर्ण ठहराव के लिए, (2) शब्द के छूटे हुए अक्षर को दर्शाने के लिए (जैसे ਵਿੱਚੋਂ → ’ਚੋਂ), और (3) उदाहरण देने के समय कौन-से विराम चिह्न प्रयुक्त होते हैं?',
    },
    options: {
      A: {
        en: '(1) ਡੰਡੀ (।), (2) ਛੁੱਟ ਮਰੋੜੀ (’), and (3) ਦੁਬਿੰਦੀ ਡੈਸ਼ (:-)',
        pa: '(1) ਡੰਡੀ (।), (2) ਛੁੱਟ ਮਰੋੜੀ (’) ਅਤੇ (3) ਦੁਬਿੰਦੀ ਡੈਸ਼ (:-)',
        hi: '(1) डंडी (।), (2) छुट मरोड़ी (’) और (3) दुबिंदी डैश (:-)',
      },
      B: {
        en: '(1) ਬਿੰਦੀ (.), (2) ਕਾਮਾ (,), and (3) ਜੋੜਨੀ (-)',
        pa: '(1) ਬਿੰਦੀ (.), (2) ਕਾਮਾ (,) ਅਤੇ (3) ਜੋੜਨੀ (-)',
        hi: '(1) बिंदी (.), (2) कामा (,) और (3) जोड़नी (-)',
      },
      C: {
        en: '(1) ਬਿੰਦੀ ਕਾਮਾ (;), (2) ਪੁੱਠੇ ਕਾਮੇ (“ ”), and (3) ਵਿਸਮਿਕ ਚਿੰਨ੍ਹ (!)',
        pa: '(1) ਬਿੰਦੀ ਕਾਮਾ (;), (2) ਪੁੱਠੇ ਕਾਮੇ (“ ”) ਅਤੇ (3) ਵਿਸਮਿਕ ਚਿੰਨ੍ਹ (!)',
        hi: '(1) बिंदी कामा (;), (2) पुट्ठे कामे (“ ”) और (3) विस्मयादिबोधक चिह्न (!)',
      },
      D: {
        en: '(1) ਡੰਡੀ (।), (2) ਜੋੜਨੀ (-), and (3) ਪ੍ਰਸ਼ਨ ਚਿੰਨ੍ਹ (?)',
        pa: '(1) ਡੰਡੀ (।), (2) ਜੋੜਨੀ (-) ਅਤੇ (3) ਪ੍ਰਸ਼ਨ ਚਿੰਨ੍ਹ (?)',
        hi: '(1) डंडी (।), (2) जोड़नी (-) और (3) प्रश्न चिह्न (?)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Punjabi punctuation (13 ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ): ਡੰਡੀ (।) marks a full stop at the end of an affirmative/negative sentence; ਛੁੱਟ ਮਰੋੜੀ (’) marks elision of letters (ਉੱਤੋਂ → ’ਤੋਂ, ਵਿੱਚੋਂ → ’ਚੋਂ); and ਦੁਬਿੰਦੀ ਡੈਸ਼ (:-) introduces examples or enumerations (ਜਿਵੇਂ :-).',
      pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਪੂਰਨ ਵਿਰਾਮ ਲਈ "ਡੰਡੀ (।)", ਕਿਸੇ ਸ਼ਬਦ ਦੇ ਛੱਡੇ ਅੱਖਰ ਨੂੰ ਦਰਸਾਉਣ ਲਈ "ਛੁੱਟ ਮਰੋੜੀ (’)" (ਜਿਵੇਂ ’ਚੋਂ) ਅਤੇ ਅੱਗੇ ਵੇਰਵਾ ਜਾਂ ਉਦਾਹਰਨ ਦੇਣ ਲਈ "ਦੁਬਿੰਦੀ ਡੈਸ਼ (:-)" ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।',
      hi: 'पंजाबी में पूर्ण विराम के लिए "डंडी (।)", किसी शब्द के लुप्त अक्षर को दर्शाने के लिए "छुट मरोड़ी (’)" (जैसे ’ਚੋਂ) और आगे विवरण या उदाहरण देने के लिए "दुबिंदी डैश (:-)" का प्रयोग किया जाता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-26',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'What are the exact meanings of the Punjabi idioms (ਮੁਹਾਵਰੇ): (1) "ਉੱਨੀ-ਇੱਕੀ ਦਾ ਫ਼ਰਕ ਹੋਣਾ" and (2) "ਅੱਖਾਂ ਵਿੱਚ ਘੱਟਾ ਪਾਉਣਾ"?',
      pa: 'ਪੰਜਾਬੀ ਮੁਹਾਵਰਿਆਂ (1) "ਉੱਨੀ-ਇੱਕੀ ਦਾ ਫ਼ਰਕ ਹੋਣਾ" ਅਤੇ (2) "ਅੱਖਾਂ ਵਿੱਚ ਘੱਟਾ ਪਾਉਣਾ" ਦੇ ਸਹੀ ਅਰਥ ਚੁਣੋ:',
      hi: 'पंजाबी मुहावरों (1) "ਉੱਨੀ-ਇੱਕੀ ਦਾ ਫ਼ਰਕ ਹੋਣਾ" और (2) "ਅੱਖਾਂ ਵਿੱਚ ਘੱਟਾ ਪਾਉਣਾ" के सही अर्थ चुनें:',
    },
    options: {
      A: {
        en: '(1) To have a very slight/negligible difference, and (2) To deceive or cheat someone',
        pa: '(1) ਬਹੁਤ ਥੋੜ੍ਹਾ ਫ਼ਰਕ ਹੋਣਾ, ਅਤੇ (2) ਧੋਖਾ ਦੇਣਾ ਜਾਂ ਭੁਲੇਖਾ ਪਾਉਣਾ',
        hi: '(1) बहुत मामूली अंतर होना, और (2) धोखा देना या आँखों में धूल झोंकना',
      },
      B: {
        en: '(1) To have a huge difference, and (2) To blind someone physically',
        pa: '(1) ਜ਼ਮੀਨ-ਅਸਮਾਨ ਦਾ ਫ਼ਰਕ ਹੋਣਾ, ਅਤੇ (2) ਅੱਖਾਂ ਦੀ ਰੋਸ਼ਨੀ ਖੋਹ ਲੈਣਾ',
        hi: '(1) ज़मीन-आसमान का अंतर होना, और (2) आँखों की रोशनी छीन लेना',
      },
      C: {
        en: '(1) To count numbers wrongly, and (2) To work in a dusty storm',
        pa: '(1) ਗਿਣਤੀ ਵਿੱਚ ਗ਼ਲਤੀ ਕਰਨਾ, ਅਤੇ (2) ਹਨੇਰੀ ਵਿੱਚ ਕੰਮ ਕਰਨਾ',
        hi: '(1) गिनती में गलती करना, और (2) आंधी में काम करना',
      },
      D: {
        en: '(1) To suffer a heavy loss, and (2) To feel ashamed',
        pa: '(1) ਭਾਰੀ ਨੁਕਸਾਨ ਹੋਣਾ, ਅਤੇ (2) ਸ਼ਰਮਿੰਦਾ ਹੋਣਾ',
        hi: '(1) भारी नुकसान होना, और (2) शर्मिंदा होना',
      },
    },
    correct: 'A',
    explanation: {
      en: '"ਉੱਨੀ-ਇੱਕੀ ਦਾ ਫ਼ਰਕ ਹੋਣਾ" means a very minor or negligible difference between two things. "ਅੱਖਾਂ ਵਿੱਚ ਘੱਟਾ ਪਾਉਣਾ" means to throw dust in someone’s eyes, i.e., to deceive or hoodwink someone.',
      pa: '"ਉੱਨੀ-ਇੱਕੀ ਦਾ ਫ਼ਰਕ ਹੋਣਾ" ਮੁਹਾਵਰੇ ਦਾ ਅਰਥ ਹੈ "ਬਹੁਤ ਮਾਮੂਲੀ ਜਾਂ ਥੋੜ੍ਹਾ ਫ਼ਰਕ ਹੋਣਾ" ਅਤੇ "ਅੱਖਾਂ ਵਿੱਚ ਘੱਟਾ ਪਾਉਣਾ" ਦਾ ਅਰਥ ਹੈ "ਚਲਾਕੀ ਨਾਲ ਧੋਖਾ ਦੇਣਾ"।',
      hi: '"ਉੱਨੀ-ਇੱਕੀ ਦਾ ਫ਼ਰਕ ਹੋਣਾ" मुहावरे का अर्थ है "बहुत मामूली या थोड़ा अंतर होना" और "ਅੱਖਾਂ ਵਿੱਚ ਘੱਟਾ ਪਾਉਣਾ" का अर्थ है "चालाकी से धोखा देना"।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-27',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'Choose the correct meanings of the Punjabi idioms: (1) "ਈਦ ਦਾ ਚੰਦ ਹੋਣਾ" and (2) "ਦੰਦ ਖੱਟੇ ਕਰਨਾ":',
      pa: 'ਪੰਜਾਬੀ ਮੁਹਾਵਰਿਆਂ (1) "ਈਦ ਦਾ ਚੰਦ ਹੋਣਾ" ਅਤੇ (2) "ਦੰਦ ਖੱਟੇ ਕਰਨਾ" ਦੇ ਸਹੀ ਅਰਥ ਕਿਹੜੇ ਹਨ?',
      hi: 'पंजाबी मुहावरों (1) "ਈਦ ਦਾ ਚੰਦ ਹੋਣਾ" और (2) "ਦੰਦ ਖੱਟੇ ਕਰਨਾ" के सही अर्थ कौन-से हैं?',
    },
    options: {
      A: {
        en: '(1) To meet after a very long time (rarely seen), and (2) To defeat the enemy decisively',
        pa: '(1) ਬਹੁਤ ਦੇਰ ਬਾਅਦ ਮਿਲਣਾ, ਅਤੇ (2) ਦੁਸ਼ਮਣ ਨੂੰ ਬੁਰੀ ਤਰ੍ਹਾਂ ਹਰਾਉਣਾ',
        hi: '(1) बहुत दिनों बाद दिखाई देना, और (2) शत्रु को बुरी तरह परास्त करना',
      },
      B: {
        en: '(1) To look very beautiful, and (2) To eat sour fruits',
        pa: '(1) ਬਹੁਤ ਸੋਹਣਾ ਲੱਗਣਾ, ਅਤੇ (2) ਖੱਟੇ ਫਲ ਖਾਣਾ',
        hi: '(1) बहुत सुंदर लगना, और (2) खट्टे फल खाना',
      },
      C: {
        en: '(1) To celebrate a festival, and (2) To get angry without reason',
        pa: '(1) ਤਿਉਹਾਰ ਮਨਾਉਣਾ, ਅਤੇ (2) ਬਿਨਾਂ ਕਾਰਨ ਗੁੱਸੇ ਹੋਣਾ',
        hi: '(1) त्योहार मनाना, और (2) अकारण क्रोधित होना',
      },
      D: {
        en: '(1) To live far away, and (2) To speak harshly',
        pa: '(1) ਦੂਰ ਦੇਸ਼ ਵੱਸਣਾ, ਅਤੇ (2) ਕੌੜੇ ਬੋਲ ਬੋਲਣਾ',
        hi: '(1) दूर देश में बसना, और (2) कड़वे वचन बोलना',
      },
    },
    correct: 'A',
    explanation: {
      en: '"ਈਦ ਦਾ ਚੰਦ ਹੋਣਾ" refers to someone who appears or meets very rarely after a long interval. "ਦੰਦ ਖੱਟੇ ਕਰਨਾ" means to rout or defeat an opponent/enemy badly in battle or competition.',
      pa: '"ਈਦ ਦਾ ਚੰਦ ਹੋਣਾ" ਦਾ ਅਰਥ ਹੈ "ਬਹੁਤ ਚਿਰ ਪਿੱਛੋਂ ਮਿਲਣਾ ਜਾਂ ਦਿਸਣਾ" ਅਤੇ "ਦੰਦ ਖੱਟੇ ਕਰਨਾ" ਦਾ ਅਰਥ ਹੈ "ਵੈਰੀ ਨੂੰ ਮੈਦਾਨ ਵਿੱਚ ਬੁਰੀ ਤਰ੍ਹਾਂ ਹਰਾਉਣਾ"।',
      hi: '"ਈਦ ਦਾ ਚੰਦ ਹੋਣਾ" का अर्थ है "बहुत समय बाद मिलना या दिखाई देना" और "ਦੰਦ ਖੱਟੇ ਕਰਨਾ" का अर्थ है "शत्रु को बुरी तरह हराना"।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-28',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'What are the contexts of use for the Punjabi proverbs (ਅਖਾਣ): (1) "ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ" and (2) "ਸੱਦੀ ਨਾ ਬੁਲਾਈ, ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ"?',
      pa: 'ਪੰਜਾਬੀ ਅਖਾਣਾਂ (1) "ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ" ਅਤੇ (2) "ਸੱਦੀ ਨਾ ਬੁਲਾਈ, ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ" ਦੇ ਸਹੀ ਭਾਵ-ਅਰਥ ਚੁਣੋ:',
      hi: 'पंजाबी लोकोक्तियों (1) "ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ" और (2) "ਸੱਦੀ ਨਾ ਬੁਲਾਈ, ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ" के सही भावार्थ चुनें:',
    },
    options: {
      A: {
        en: '(1) Great outward show/fame but poor actual quality, and (2) Meddling or acting important where one is not even invited',
        pa: '(1) ਬਾਹਰੋਂ ਦਿਖਾਵਾ ਜਾਂ ਨਾਂ ਵੱਡਾ ਹੋਣਾ ਪਰ ਅਸਲੀਅਤ ਵਿੱਚ ਗੁਣ ਘੱਟ ਹੋਣਾ, ਅਤੇ (2) ਬਿਨਾਂ ਪੁੱਛੇ ਬਦੋ-ਬਦੀ ਕਿਸੇ ਦੇ ਕੰਮ ਵਿੱਚ ਲੱਤ ਅੜਾਉਣੀ ਜਾਂ ਚੌਧਰੀ ਬਣਨਾ',
        hi: '(1) बाहर से नाम या दिखावा बड़ा होना पर वास्तविक गुण कम होना, और (2) बिना बुलाए ज़बरदस्ती किसी के काम में दखल देना या चौधरी बनना',
      },
      B: {
        en: '(1) Selling expensive sweets, and (2) Attending a family wedding',
        pa: '(1) ਮਹਿੰਗੀ ਮਠਿਆਈ ਵੇਚਣੀ, ਅਤੇ (2) ਵਿਆਹ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਣਾ',
        hi: '(1) महंगी मिठाई बेचना, और (2) विवाह में शामिल होना',
      },
      C: {
        en: '(1) Working hard for success, and (2) Respecting elders in the family',
        pa: '(1) ਸਫ਼ਲਤਾ ਲਈ ਮਿਹਨਤ ਕਰਨੀ, ਅਤੇ (2) ਵੱਡਿਆਂ ਦਾ ਸਤਿਕਾਰ ਕਰਨਾ',
        hi: '(1) सफलता के लिए परिश्रम करना, और (2) बड़ों का आदर करना',
      },
      D: {
        en: '(1) Building a tall house, and (2) Helping relatives in need',
        pa: '(1) ਉੱਚਾ ਮਕਾਨ ਬਣਾਉਣਾ, ਅਤੇ (2) ਲੋੜ ਵੇਲੇ ਰਿਸ਼ਤੇਦਾਰਾਂ ਦੀ ਮਦਦ ਕਰਨੀ',
        hi: '(1) ऊँचा मकान बनाना, और (2) आवश्यकता पड़ने पर रिश्तेदारों की सहायता करना',
      },
    },
    correct: 'A',
    explanation: {
      en: '"ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ" (Great boast, little roast) is used when someone’s reputation/show is grand but actual substance is inferior. "ਸੱਦੀ ਨਾ ਬੁਲਾਈ, ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ" refers to an uninvited person interfering and claiming false authority.',
      pa: '"ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ" ਉਦੋਂ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ ਜਦੋਂ ਕਿਸੇ ਦੀ ਸ਼ੋਭਾ ਵੱਧ ਹੋਵੇ ਪਰ ਵਿੱਚੋਂ ਗੁਣ ਫਿੱਕੇ ਹੋਣ। "ਸੱਦੀ ਨਾ ਬੁਲਾਈ, ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ" ਉਦੋਂ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ ਜਦੋਂ ਕੋਈ ਬਿਨਾਂ ਸੱਦੇ ਤੋਂ ਬਦੋ-ਬਦੀ ਕਿਸੇ ਮਾਮਲੇ ਵਿੱਚ ਮੋਹਰੀ ਬਣੇ।',
      hi: '"ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ" तब प्रयुक्त होता है जब दिखावा बड़ा हो परंतु वास्तविक गुण कम हो। "ਸੱਦੀ ਨਾ ਬੁਲਾਈ, ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ" तब प्रयुक्त होता है जब कोई बिना बुलाए ज़बरदस्ती किसी मामले में अगुआ बने।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-29',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'What is the core meaning of the Punjabi proverb (ਅਖਾਣ) "ਘਰ ਦਾ ਜੋਗੀ ਜੋਗੜਾ, ਬਾਹਰ ਦਾ ਜੋਗੀ ਸਿੱਧ"?',
      pa: '"ਘਰ ਦਾ ਜੋਗੀ ਜੋਗੜਾ, ਬਾਹਰ ਦਾ ਜੋਗੀ ਸਿੱਧ" ਅਖਾਣ ਦਾ ਸਹੀ ਅਰਥ ਕੀ ਹੈ?',
      hi: '"ਘਰ ਦਾ ਜੋਗੀ ਜੋਗੜਾ, ਬਾਹਰ ਦਾ ਜੋਗੀ ਸਿੱਧ" लोकोक्ति (अखाण) का सही अर्थ क्या है?',
    },
    options: {
      A: {
        en: 'People undervalue a talented person of their own family/locality while praising outsiders even of lesser merit',
        pa: 'ਆਪਣੇ ਘਰ ਜਾਂ ਇਲਾਕੇ ਦੇ ਸਿਆਣੇ ਤੇ ਗੁਣਵਾਨ ਬੰਦੇ ਦੀ ਕਦਰ ਘੱਟ ਪੈਂਦੀ ਹੈ, ਜਦਕਿ ਬਾਹਰਲੇ ਬੰਦੇ ਨੂੰ ਵੱਧ ਮਾਨਤਾ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ',
        hi: 'अपने घर या क्षेत्र के गुणी व्यक्ति की कद्र कम होती है, जबकि बाहरी व्यक्ति को अधिक महत्व दिया जाता है (घर की मुर्गी दाल बराबर)',
      },
      B: {
        en: 'Ascetics should leave their homes and meditate in forests to attain spiritual perfection',
        pa: 'ਜੋਗੀਆਂ ਨੂੰ ਸਿੱਧੀ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਘਰ ਛੱਡ ਕੇ ਬਾਹਰ ਜੰਗਲਾਂ ਵਿੱਚ ਤਪੱਸਿਆ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ',
        hi: 'योगियों को सिद्धि प्राप्त करने के लिए घर छोड़कर बाहर वनों में तपस्या करनी चाहिए',
      },
      C: {
        en: 'One should always trust family members rather than strangers in business matters',
        pa: 'ਕਾਰੋਬਾਰ ਵਿੱਚ ਬਾਹਰਲੇ ਬੰਦਿਆਂ ਨਾਲੋਂ ਆਪਣੇ ਪਰਿਵਾਰਕ ਮੈਂਬਰਾਂ ’ਤੇ ਭਰੋਸਾ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ',
        hi: 'व्यापार में बाहरी लोगों की अपेक्षा अपने परिवार के सदस्यों पर भरोसा करना चाहिए',
      },
      D: {
        en: 'Hospitality towards foreign guests brings prosperity to the household',
        pa: 'ਬਾਹਰੋਂ ਆਏ ਮਹਿਮਾਨਾਂ ਦੀ ਸੇਵਾ ਕਰਨ ਨਾਲ ਘਰ ਵਿੱਚ ਬਰਕਤ ਪੈਂਦੀ ਹੈ',
        hi: 'बाहर से आए अतिथियों की सेवा करने से घर में बरकत होती है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Equivalent to "Familiarity breeds contempt" or "A prophet is not honoured in his own country" (घर की मुर्गी दाल बराबर), this proverb states that one’s own skilled person is taken for granted, whereas an outsider is revered.',
      pa: 'ਇਹ ਅਖਾਣ ਉਦੋਂ ਬੋਲਿਆ ਜਾਂਦਾ ਹੈ ਜਦੋਂ ਆਪਣੇ ਘਰ ਜਾਂ ਪਿੰਡ ਦੇ ਗੁਣਵਾਨ ਵਿਅਕਤੀ ਦੀ ਕੋਈ ਕਦਰ ਨਾ ਕਰੇ ਪਰ ਬਾਹਰਲੇ ਘੱਟ ਗੁਣਾਂ ਵਾਲੇ ਵਿਅਕਤੀ ਨੂੰ ਵੀ ਬਹੁਤ ਵੱਡਾ ਮੰਨਿਆ ਜਾਵੇ।',
      hi: 'यह लोकोक्ति तब बोली जाती है जब अपने घर या गाँव के गुणी व्यक्ति का सम्मान न किया जाए परंतु बाहरी व्यक्ति को बहुत श्रेष्ठ माना जाए (घर की मुर्गी दाल बराबर)।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-30',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'According to the Official Administrative Glossary (ਦਫ਼ਤਰੀ ਸ਼ਬਦਾਵਲੀ) prescribed by the Department of Languages, Punjab, what are the authentic Punjabi translations of "Affidavit", "Circular", and "Gazette"?',
      pa: 'ਭਾਸ਼ਾ ਵਿਭਾਗ ਪੰਜਾਬ ਦੀ ਦਫ਼ਤਰੀ ਸ਼ਬਦਾਵਲੀ ਅਨੁਸਾਰ "Affidavit", "Circular" ਅਤੇ "Gazette" ਦੇ ਸਹੀ ਪੰਜਾਬੀ ਅਨੁਵਾਦ ਕ੍ਰਮਵਾਰ ਕੀ ਹਨ?',
      hi: 'भाषा विभाग पंजाब की कार्यालयी शब्दावली के अनुसार "Affidavit", "Circular" और "Gazette" के सही पंजाबी अनुवाद क्रमशः क्या हैं?',
    },
    options: {
      A: {
        en: 'Affidavit = ਹਲਫ਼ਨਾਮਾ (ਸਹੁੰ-ਪੱਤਰ), Circular = ਗਸ਼ਤੀ ਪੱਤਰ, Gazette = ਰਾਜ-ਪੱਤਰ',
        pa: 'Affidavit = ਹਲਫ਼ਨਾਮਾ (ਸਹੁੰ-ਪੱਤਰ), Circular = ਗਸ਼ਤੀ ਪੱਤਰ, Gazette = ਰਾਜ-ਪੱਤਰ',
        hi: 'Affidavit = ਹਲਫ਼ਨਾਮਾ (शपथ-पत्र), Circular = ਗਸ਼ਤੀ ਪੱਤਰ (परिपत्र), Gazette = ਰਾਜ-ਪੱਤਰ (राजपत्र)',
      },
      B: {
        en: 'Affidavit = ਰਾਜ-ਪੱਤਰ, Circular = ਹਲਫ਼ਨਾਮਾ, Gazette = ਗਸ਼ਤੀ ਪੱਤਰ',
        pa: 'Affidavit = ਰਾਜ-ਪੱਤਰ, Circular = ਹਲਫ਼ਨਾਮਾ, Gazette = ਗਸ਼ਤੀ ਪੱਤਰ',
        hi: 'Affidavit = ਰਾਜ-ਪੱਤਰ, Circular = ਹਲਫ਼ਨਾਮਾ, Gazette = ਗਸ਼ਤੀ ਪੱਤਰ',
      },
      C: {
        en: 'Affidavit = ਇਕਰਾਰਨਾਮਾ, Circular = ਸੂਚਨਾ ਪੱਤਰ, Gazette = ਅਖ਼ਬਾਰ',
        pa: 'Affidavit = ਇਕਰਾਰਨਾਮਾ, Circular = ਸੂਚਨਾ ਪੱਤਰ, Gazette = ਅਖ਼ਬਾਰ',
        hi: 'Affidavit = ਇਕਰਾਰਨਾਮਾ, Circular = ਸੂਚਨਾ ਪੱਤਰ, Gazette = ਅਖ਼ਬਾਰ',
      },
      D: {
        en: 'Affidavit = ਤਸਦੀਕਨਾਮਾ, Circular = ਮੰਗ-ਪੱਤਰ, Gazette = ਨਿਯੁਕਤੀ ਪੱਤਰ',
        pa: 'Affidavit = ਤਸਦੀਕਨਾਮਾ, Circular = ਮੰਗ-ਪੱਤਰ, Gazette = ਨਿਯੁਕਤੀ ਪੱਤਰ',
        hi: 'Affidavit = ਤਸਦੀਕਨਾਮਾ, Circular = ਮੰਗ-ਪੱਤਰ, Gazette = ਨਿਯੁਕਤੀ ਪੱਤਰ',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In official Punjab Government correspondence: Affidavit translates to ਹਲਫ਼ਨਾਮਾ or ਸਹੁੰ-ਪੱਤਰ; Circular (sent to multiple offices) translates to ਗਸ਼ਤੀ ਪੱਤਰ; and Official Gazette translates to ਰਾਜ-ਪੱਤਰ.',
      pa: 'ਪੰਜਾਬ ਸਰਕਾਰ ਦੀ ਦਫ਼ਤਰੀ ਸ਼ਬਦਾਵਲੀ ਅਨੁਸਾਰ: Affidavit = ਹਲਫ਼ਨਾਮਾ / ਸਹੁੰ-ਪੱਤਰ, Circular = ਗਸ਼ਤੀ ਪੱਤਰ, ਅਤੇ Gazette = ਰਾਜ-ਪੱਤਰ।',
      hi: 'पंजाब सरकार की कार्यालयी शब्दावली के अनुसार: Affidavit = ਹਲਫ਼ਨਾਮਾ / ਸਹੁੰ-ਪੱਤਰ (शपथ-पत्र), Circular = ਗਸ਼ਤੀ ਪੱਤਰ (परिपत्र), और Gazette = ਰਾਜ-ਪੱਤਰ (राजपत्र)।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-31',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'What are the standard Punjabi administrative terms (ਦਫ਼ਤਰੀ ਸ਼ਬਦਾਵਲੀ) for "Adjournment" and "Deputation"?',
      pa: 'ਦਫ਼ਤਰੀ ਸ਼ਬਦਾਵਲੀ ਵਿੱਚ ਅੰਗਰੇਜ਼ੀ ਸ਼ਬਦਾਂ "Adjournment" ਅਤੇ "Deputation" ਲਈ ਕਿਹੜੇ ਪੰਜਾਬੀ ਸ਼ਬਦ ਵਰਤੇ ਜਾਂਦੇ ਹਨ?',
      hi: 'कार्यालयी शब्दावली में अंग्रेज़ी शब्दों "Adjournment" और "Deputation" के लिए कौन-से पंजाबी शब्द प्रयुक्त होते हैं?',
    },
    options: {
      A: {
        en: 'Adjournment = ਮੁਲਤਵੀ (ਉਠਾਣ), Deputation = ਪ੍ਰਤੀ-ਨਿਯੁਕਤੀ (ਡੈਪੂਟੇਸ਼ਨ)',
        pa: 'Adjournment = ਮੁਲਤਵੀ (ਉਠਾਣ), Deputation = ਪ੍ਰਤੀ-ਨਿਯੁਕਤੀ',
        hi: 'Adjournment = ਮੁਲਤਵੀ (स्थगन), Deputation = ਪ੍ਰਤੀ-ਨਿਯੁਕਤੀ (प्रतिनियुक्ति)',
      },
      B: {
        en: 'Adjournment = ਬਰਖ਼ਾਸਤਗੀ, Deputation = ਤਰੱਕੀ',
        pa: 'Adjournment = ਬਰਖ਼ਾਸਤਗੀ, Deputation = ਤਰੱਕੀ',
        hi: 'Adjournment = ਬਰਖ਼ਾਸਤਗੀ, Deputation = ਤਰੱਕੀ',
      },
      C: {
        en: 'Adjournment = ਮੁਅੱਤਲੀ, Deputation = ਤਬਾਦਲਾ',
        pa: 'Adjournment = ਮੁਅੱਤਲੀ, Deputation = ਤਬਾਦਲਾ',
        hi: 'Adjournment = ਮੁਅੱਤਲੀ, Deputation = ਤਬਾਦਲਾ',
      },
      D: {
        en: 'Adjournment = ਪ੍ਰਵਾਨਗੀ, Deputation = ਸੇਵਾ-ਮੁਕਤੀ',
        pa: 'Adjournment = ਪ੍ਰਵਾਨਗੀ, Deputation = ਸੇਵਾ-ਮੁਕਤੀ',
        hi: 'Adjournment = ਪ੍ਰਵਾਨਗੀ, Deputation = ਸੇਵਾ-ਮੁਕਤੀ',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In official terminology: Adjournment = ਮੁਲਤਵੀ / ਉਠਾਣ (postponing a meeting/session); Deputation = ਪ੍ਰਤੀ-ਨਿਯੁਕਤੀ (temporary transfer to another department). Note that Suspension = ਮੁਅੱਤਲੀ, Dismissal = ਬਰਖ਼ਾਸਤਗੀ, Transfer = ਤਬਾਦਲਾ/ਬਦਲੀ.',
      pa: 'ਦਫ਼ਤਰੀ ਸ਼ਬਦਾਵਲੀ ਅਨੁਸਾਰ: Adjournment = ਮੁਲਤਵੀ (ਜਾਂ ਉਠਾਣ) ਅਤੇ Deputation = ਪ੍ਰਤੀ-ਨਿਯੁਕਤੀ। (Suspension = ਮੁਅੱਤਲੀ, Dismissal = ਬਰਖ਼ਾਸਤਗੀ, Transfer = ਬਦਲੀ/ਤਬਾਦਲਾ)।',
      hi: 'कार्यालयी शब्दावली के अनुसार: Adjournment = ਮੁਲਤਵੀ (स्थगन) और Deputation = ਪ੍ਰਤੀ-ਨਿਯੁਕਤੀ (प्रतिनियुक्ति)। (Suspension = ਮੁਅੱਤਲੀ, Dismissal = ਬਰਖ਼ਾਸਤਗੀ, Transfer = ਬਦਲੀ/ਤਬਾਦਲਾ)।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-32',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'Identify the accurate Punjabi administrative equivalents for "Quorum" (minimum members required to conduct a meeting) and "Memorandum":',
      pa: 'ਦਫ਼ਤਰੀ ਸ਼ਬਦਾਵਲੀ ਵਿੱਚ "Quorum" (ਮੀਟਿੰਗ ਦੀ ਕਾਰਵਾਈ ਚਲਾਉਣ ਲਈ ਲੋੜੀਂਦੀ ਘੱਟੋ-ਘੱਟ ਮੈਂਬਰ ਸੰਖਿਆ) ਅਤੇ "Memorandum" ਦੇ ਸਹੀ ਪੰਜਾਬੀ ਅਰਥ ਕੀ ਹਨ?',
      hi: 'कार्यालयी शब्दावली में "Quorum" (बैठक की कार्यवाही के लिए आवश्यक न्यूनतम सदस्य संख्या) और "Memorandum" के सही पंजाबी अर्थ क्या हैं?',
    },
    options: {
      A: {
        en: 'Quorum = ਕੋਰਮ / ਗਣ-ਪੂਰਤੀ (ਨਿਸਾਬ), Memorandum = ਮੰਗ-ਪੱਤਰ / ਯਾਦ-ਪੱਤਰ',
        pa: 'Quorum = ਕੋਰਮ / ਗਣ-ਪੂਰਤੀ (ਨਿਸਾਬ), Memorandum = ਮੰਗ-ਪੱਤਰ / ਯਾਦ-ਪੱਤਰ',
        hi: 'Quorum = ਕੋਰਮ / ਗਣ-ਪੂਰਤੀ (कोरम/गणपूर्ति), Memorandum = ਮੰਗ-ਪੱਤਰ / ਯਾਦ-ਪੱਤਰ (ज्ञापन)',
      },
      B: {
        en: 'Quorum = ਬਹੁਮਤ, Memorandum = ਚੇਤਾਵਨੀ ਪੱਤਰ',
        pa: 'Quorum = ਬਹੁਮਤ, Memorandum = ਚੇਤਾਵਨੀ ਪੱਤਰ',
        hi: 'Quorum = ਬਹੁਮਤ, Memorandum = ਚੇਤਾਵਨੀ ਪੱਤਰ',
      },
      C: {
        en: 'Quorum = ਸਰਬ-ਸੰਮਤੀ, Memorandum = ਤਸਦੀਕ ਪੱਤਰ',
        pa: 'Quorum = ਸਰਬ-ਸੰਮਤੀ, Memorandum = ਤਸਦੀਕ ਪੱਤਰ',
        hi: 'Quorum = ਸਰਬ-ਸੰਮਤੀ, Memorandum = ਤਸਦੀਕ ਪੱਤਰ',
      },
      D: {
        en: 'Quorum = ਹਾਜ਼ਰੀ ਰਜਿਸਟਰ, Memorandum = ਅਸਤੀਫ਼ਾ ਪੱਤਰ',
        pa: 'Quorum = ਹਾਜ਼ਰੀ ਰਜਿਸਟਰ, Memorandum = ਅਸਤੀਫ਼ਾ ਪੱਤਰ',
        hi: 'Quorum = ਹਾਜ਼ਰੀ ਰਜਿਸਟਰ, Memorandum = ਅਸਤੀਫ਼ਾ ਪੱਤਰ',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In official Punjabi usage: "Quorum" is translated as ਗਣ-ਪੂਰਤੀ, ਨਿਸਾਬ, or ਕੋਰਮ; "Memorandum" is translated as ਯਾਦ-ਪੱਤਰ or ਮੰਗ-ਪੱਤਰ.',
      pa: 'ਦਫ਼ਤਰੀ ਸ਼ਬਦਾਵਲੀ ਅਨੁਸਾਰ "Quorum" ਨੂੰ ਪੰਜਾਬੀ ਵਿੱਚ "ਗਣ-ਪੂਰਤੀ, ਕੋਰਮ ਜਾਂ ਨਿਸਾਬ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ ਅਤੇ "Memorandum" ਨੂੰ "ਯਾਦ-ਪੱਤਰ ਜਾਂ ਮੰਗ-ਪੱਤਰ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
      hi: 'कार्यालयी शब्दावली के अनुसार "Quorum" को पंजाबी में "ਗਣ-ਪੂਰਤੀ, ਕੋਰਮ या ਨਿਸਾਬ" कहा जाता है और "Memorandum" को "ਯਾਦ-ਪੱਤਰ या ਮੰਗ-ਪੱਤਰ" (ज्ञापन) कहा जाता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-33',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'In the traditional Punjabi calendar of 12 Desi Months (ਦੇਸੀ ਮਹੀਨੇ), which is the first month, which is the last month, and between which two months does "ਹਾੜ੍ਹ" (Harh) fall?',
      pa: 'ਪੰਜਾਬੀ ਦੇ 12 ਦੇਸੀ ਮਹੀਨਿਆਂ ਵਿੱਚ ਪਹਿਲਾ ਮਹੀਨਾ ਕਿਹੜਾ ਹੈ, ਅਖੀਰਲਾ ਮਹੀਨਾ ਕਿਹੜਾ ਹੈ, ਅਤੇ "ਹਾੜ੍ਹ" ਦਾ ਮਹੀਨਾ ਕਿਹੜੇ ਦੋ ਮਹੀਨਿਆਂ ਦੇ ਵਿਚਕਾਰ ਆਉਂਦਾ ਹੈ?',
      hi: 'पंजाबी के 12 देसी महीनों में पहला महीना कौन-सा है, अंतिम महीना कौन-सा है, और "ਹਾੜ੍ਹ" (आषाढ़) का महीना किन दो महीनों के बीच आता है?',
    },
    options: {
      A: {
        en: 'First: ਚੇਤ (Chet) | Last: ਫੱਗਣ (Phaggan) | ਹਾੜ੍ਹ falls between ਜੇਠ (Jeth) and ਸਾਉਣ (Sawan)',
        pa: 'ਪਹਿਲਾ: ਚੇਤ | ਅਖੀਰਲਾ: ਫੱਗਣ | "ਹਾੜ੍ਹ" ਦਾ ਮਹੀਨਾ "ਜੇਠ" ਅਤੇ "ਸਾਉਣ" ਦੇ ਵਿਚਕਾਰ ਆਉਂਦਾ ਹੈ',
        hi: 'पहला: ਚੇਤ (चैत्र) | अंतिम: ਫੱਗਣ (फाल्गुन) | "ਹਾੜ੍ਹ" का महीना "ਜੇਠ" और "ਸਾਉਣ" के बीच आता है',
      },
      B: {
        en: 'First: ਵਿਸਾਖ (Vaisakh) | Last: ਮਾਘ (Magh) | ਹਾੜ੍ਹ falls between ਚੇਤ (Chet) and ਜੇਠ (Jeth)',
        pa: 'ਪਹਿਲਾ: ਵਿਸਾਖ | ਅਖੀਰਲਾ: ਮਾਘ | "ਹਾੜ੍ਹ" ਦਾ ਮਹੀਨਾ "ਚੇਤ" ਅਤੇ "ਜੇਠ" ਦੇ ਵਿਚਕਾਰ ਆਉਂਦਾ ਹੈ',
        hi: 'पहला: ਵਿਸਾਖ | अंतिम: ਮਾਘ | "ਹਾੜ੍ਹ" का महीना "ਚੇਤ" और "ਜੇਠ" के बीच आता है',
      },
      C: {
        en: 'First: ਚੇਤ (Chet) | Last: ਪੋਹ (Poh) | ਹਾੜ੍ਹ falls between ਸਾਉਣ (Sawan) and ਭਾਦੋਂ (Bhadon)',
        pa: 'ਪਹਿਲਾ: ਚੇਤ | ਅਖੀਰਲਾ: ਪੋਹ | "ਹਾੜ੍ਹ" ਦਾ ਮਹੀਨਾ "ਸਾਉਣ" ਅਤੇ "ਭਾਦੋਂ" ਦੇ ਵਿਚਕਾਰ ਆਉਂਦਾ ਹੈ',
        hi: 'पहला: ਚੇਤ | अंतिम: ਪੋਹ | "ਹਾੜ੍ਹ" का महीना "ਸਾਉਣ" और "ਭਾਦੋਂ" के बीच आता है',
      },
      D: {
        en: 'First: ਮਾਘ (Magh) | Last: ਫੱਗਣ (Phaggan) | ਹਾੜ੍ਹ falls between ਅੱਸੂ (Assu) and ਕੱਤਕ (Kattak)',
        pa: 'ਪਹਿਲਾ: ਮਾਘ | ਅਖੀਰਲਾ: ਫੱਗਣ | "ਹਾੜ੍ਹ" ਦਾ ਮਹੀਨਾ "ਅੱਸੂ" ਅਤੇ "ਕੱਤਕ" ਦੇ ਵਿਚਕਾਰ ਆਉਂਦਾ ਹੈ',
        hi: 'पहला: ਮਾਘ | अंतिम: ਫੱਗਣ | "ਹਾੜ੍ਹ" का महीना "ਅੱਸੂ" और "ਕੱਤਕ" के बीच आता है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'The 12 Desi Months in exact order are: 1. ਚੇਤ, 2. ਵਿਸਾਖ, 3. ਜੇਠ, 4. ਹਾੜ੍ਹ, 5. ਸਾਉਣ, 6. ਭਾਦੋਂ, 7. ਅੱਸੂ, 8. ਕੱਤਕ, 9. ਮੱਘਰ, 10. ਪੋਹ, 11. ਮਾਘ, 12. ਫੱਗਣ. Thus ਚੇਤ is first, ਫੱਗਣ is 12th, and ਹਾੜ੍ਹ (4th) is between ਜੇਠ (3rd) and ਸਾਉਣ (5th).',
      pa: '12 ਦੇਸੀ ਮਹੀਨਿਆਂ ਦੀ ਤਰਤੀਬ ਹੈ: ਚੇਤ, ਵਿਸਾਖ, ਜੇਠ, ਹਾੜ੍ਹ, ਸਾਉਣ, ਭਾਦੋਂ, ਅੱਸੂ, ਕੱਤਕ, ਮੱਘਰ, ਪੋਹ, ਮਾਘ, ਫੱਗਣ। ਇਸ ਤਰ੍ਹਾਂ ਪਹਿਲਾ ਮਹੀਨਾ "ਚੇਤ", ਅਖੀਰਲਾ "ਫੱਗਣ" ਹੈ ਅਤੇ "ਹਾੜ੍ਹ" (ਚੌਥਾ ਮਹੀਨਾ) "ਜੇਠ" ਅਤੇ "ਸਾਉਣ" ਦੇ ਵਿਚਕਾਰ ਆਉਂਦਾ ਹੈ।',
      hi: '12 देसी महीनों का क्रम है: ਚੇਤ, ਵਿਸਾਖ, ਜੇਠ, ਹਾੜ੍ਹ, ਸਾਉਣ, ਭਾਦੋਂ, ਅੱਸੂ, ਕੱਤਕ, ਮੱਘਰ, ਪੋਹ, ਮਾਘ, ਫੱਗਣ। इस प्रकार पहला महीना "ਚੇਤ", अंतिम "ਫੱਗਣ" है और "ਹਾੜ੍ਹ" (चौथा महीना) "ਜੇਠ" तथा "ਸਾਉਣ" के बीच आता है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-34',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'In Punjabi phonetics (ਧੁਨੀ ਵਿਗਿਆਨ), which consonant is classified as Glottal / Sur-Yantri (ਸੁਰ-ਯੰਤਰੀ ਵਿਅੰਜਨ), which two are Semi-Vowels (ਅਰਧ-ਸ੍ਵਰ), and which 5 letters represent Tonal Consonants (ਸੁਰ-ਵਾਹਕ ਧੁਨੀਆਂ)?',
      pa: 'ਪੰਜਾਬੀ ਧੁਨੀ ਵਿਗਿਆਨ ਅਨੁਸਾਰ ਕਿਹੜਾ ਅੱਖਰ "ਸੁਰ-ਯੰਤਰੀ" ਹੈ, ਕਿਹੜੇ ਦੋ ਅੱਖਰ "ਅਰਧ-ਸ੍ਵਰ" ਹਨ, ਅਤੇ ਕਿਹੜੇ 5 ਅੱਖਰ "ਸੁਰ-ਵਾਹਕ" (ਘੋਸ਼ ਮਹਾਂਪ੍ਰਾਣ ਤੋਂ ਸੁਰ ਵਿੱਚ ਬਦਲੇ) ਹਨ?',
      hi: 'पंजाबी ध्वनि विज्ञान के अनुसार कौन-सा अक्षर "स्वर-यंत्री" है, कौन-से दो अक्षर "अर्ध-स्वर" हैं, और कौन-से 5 अक्षर "सुर-वाहक" (तानीय ध्वनियाँ) हैं?',
    },
    options: {
      A: {
        en: 'Sur-Yantri: ਹ | Ardh-Swar: ਯ, ਵ | Tonal Letters: ਘ, ਝ, ਢ, ਧ, ਭ',
        pa: 'ਸੁਰ-ਯੰਤਰੀ: ਹ | ਅਰਧ-ਸ੍ਵਰ: ਯ, ਵ | ਸੁਰ-ਵਾਹਕ ਅੱਖਰ: ਘ, ਝ, ਢ, ਧ, ਭ',
        hi: 'स्वर-यंत्री: ਹ | अर्ध-स्वर: ਯ, ਵ | सुर-वाहक अक्षर: ਘ, ਝ, ਢ, ਧ, ਭ',
      },
      B: {
        en: 'Sur-Yantri: ੜ | Ardh-Swar: ਰ, ਲ | Tonal Letters: ਖ, ਛ, ਠ, ਥ, ਫ',
        pa: 'ਸੁਰ-ਯੰਤਰੀ: ੜ | ਅਰਧ-ਸ੍ਵਰ: ਰ, ਲ | ਸੁਰ-ਵਾਹਕ ਅੱਖਰ: ਖ, ਛ, ਠ, ਥ, ਫ',
        hi: 'स्वर-यंत्री: ੜ | अर्ध-स्वर: ਰ, ਲ | सुर-वाहक अक्षर: ਖ, ਛ, ਠ, ਥ, ਫ',
      },
      C: {
        en: 'Sur-Yantri: ਸ | Ardh-Swar: ਹ, ਵ | Tonal Letters: ਗ, ਜ, ਡ, ਦ, ਬ',
        pa: 'ਸੁਰ-ਯੰਤਰੀ: ਸ | ਅਰਧ-ਸ੍ਵਰ: ਹ, ਵ | ਸੁਰ-ਵਾਹਕ ਅੱਖਰ: ਗ, ਜ, ਡ, ਦ, ਬ',
        hi: 'स्वर-यंत्री: ਸ | अर्ध-स्वर: ਹ, ਵ | सुर-वाहक अक्षर: ਗ, ਜ, ਡ, ਦ, ਬ',
      },
      D: {
        en: 'Sur-Yantri: ਅ | Ardh-Swar: ੳ, ੲ | Tonal Letters: ਙ, ਞ, ਣ, ਨ, ਮ',
        pa: 'ਸੁਰ-ਯੰਤਰੀ: ਅ | ਅਰਧ-ਸ੍ਵਰ: ੳ, ੲ | ਸੁਰ-ਵਾਹਕ ਅੱਖਰ: ਙ, ਞ, ਣ, ਨ, ਮ',
        hi: 'स्वर-यंत्री: ਅ | अर्ध-स्वर: ੳ, ੲ | सुर-वाहक अक्षर: ਙ, ਞ, ਣ, ਨ, ਮ',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Punjabi phonetics: "ਹ" is the Glottal consonant (ਸੁਰ-ਯੰਤਰੀ / ਕੰਠ-ਦੁਆਰੀ); "ਯ" and "ਵ" are the two Semi-Vowels (ਅਰਧ-ਸ੍ਵਰ); and the 4th column letters "ਘ, ਝ, ਢ, ਧ, ਭ" (along with ਹ) produce high/low pitch tones (ਸੁਰ) rather than voiced aspiration in modern Punjabi.',
      pa: 'ਪੰਜਾਬੀ ਧੁਨੀ ਵਿਗਿਆਨ ਵਿੱਚ "ਹ" ਸੁਰ-ਯੰਤਰੀ ਵਿਅੰਜਨ ਹੈ, "ਯ" ਅਤੇ "ਵ" ਦੋ ਅਰਧ-ਸ੍ਵਰ ਹਨ, ਅਤੇ ਚੌਥੀ ਕਤਾਰ ਦੇ 5 ਅੱਖਰ (ਘ, ਝ, ਢ, ਧ, ਭ) ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਵਿੱਚ ਸੁਰ (Tone) ਪੈਦਾ ਕਰਦੇ ਹਨ।',
      hi: 'पंजाबी ध्वनि विज्ञान में "ਹ" स्वर-यंत्री व्यंजन है, "ਯ" और "ਵ" दो अर्ध-स्वर हैं, तथा चौथे स्तंभ के 5 अक्षर (ਘ, ਝ, ਢ, ਧ, ਭ) आधुनिक पंजाबी में सुर (तान/Tone) उत्पन्न करते हैं।',
    },
    difficulty: 'hard',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-pun-35',
    topicId: 'punjabi-paper-a',
    subjectId: 'clerk-punjabi-language',
    examTag: 'PSSSB & PPSC Clerk Paper A & B',
    question: {
      en: 'How many Grammatical Cases (ਕਾਰਕ) exist in Punjabi, and in the sentence "ਮਾਲੀ ਨੇ ਦਾਤਰੀ ਨਾਲ ਬੂਟੇ ਤੋਂ ਫੁੱਲ ਤੋੜਿਆ", which Karak is represented by "ਦਾਤਰੀ ਨਾਲ" and "ਬੂਟੇ ਤੋਂ" respectively?',
      pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਕਾਰਕ ਦੀਆਂ ਕਿੰਨੀਆਂ ਕਿਸਮਾਂ ਹਨ, ਅਤੇ "ਮਾਲੀ ਨੇ ਦਾਤਰੀ ਨਾਲ ਬੂਟੇ ਤੋਂ ਫੁੱਲ ਤੋੜਿਆ" ਵਾਕ ਵਿੱਚ "ਦਾਤਰੀ ਨਾਲ" ਅਤੇ "ਬੂਟੇ ਤੋਂ" ਕ੍ਰਮਵਾਰ ਕਿਹੜੇ ਕਾਰਕ ਹਨ?',
      hi: 'पंजाबी में कारक के कितने भेद हैं, और "ਮਾਲੀ ਨੇ ਦਾਤਰੀ ਨਾਲ ਬੂਟੇ ਤੋਂ ਫੁੱਲ ਤੋੜਿਆ" वाक्य में "ਦਾਤਰੀ ਨਾਲ" और "ਬੂਟੇ ਤੋਂ" क्रमशः कौन-से कारक हैं?',
    },
    options: {
      A: {
        en: '8 Karaks in total; "ਦਾਤਰੀ ਨਾਲ" is Karan Karak (ਕਰਨ ਕਾਰਕ — instrument) and "ਬੂਟੇ ਤੋਂ" is Apadan Karak (ਅਪਾਦਾਨ ਕਾਰਕ — separation)',
        pa: 'ਕੁੱਲ 8 ਕਾਰਕ; "ਦਾਤਰੀ ਨਾਲ" ਕਰਨ ਕਾਰਕ (ਸਾਧਨ) ਹੈ ਅਤੇ "ਬੂਟੇ ਤੋਂ" ਅਪਾਦਾਨ ਕਾਰਕ (ਵੱਖ ਹੋਣ ਦਾ ਭਾਵ) ਹੈ',
        hi: 'कुल 8 कारक; "ਦਾਤਰੀ ਨਾਲ" करण कारक (साधन) है और "ਬੂਟੇ ਤੋਂ" अपादान कारक (अलगाव का भाव) है',
      },
      B: {
        en: '8 Karaks in total; "ਦਾਤਰੀ ਨਾਲ" is Karta Karak (ਕਰਤਾ ਕਾਰਕ) and "ਬੂਟੇ ਤੋਂ" is Adhikaran Karak (ਅਧਿਕਰਨ ਕਾਰਕ)',
        pa: 'ਕੁੱਲ 8 ਕਾਰਕ; "ਦਾਤਰੀ ਨਾਲ" ਕਰਤਾ ਕਾਰਕ ਹੈ ਅਤੇ "ਬੂਟੇ ਤੋਂ" ਅਧਿਕਰਨ ਕਾਰਕ ਹੈ',
        hi: 'कुल 8 कारक; "ਦਾਤਰੀ ਨਾਲ" कर्ता कारक है और "ਬੂਟੇ ਤੋਂ" अधिकरण कारक है',
      },
      C: {
        en: '6 Karaks in total; "ਦਾਤਰੀ ਨਾਲ" is Sampradan Karak (ਸੰਪ੍ਰਦਾਨ ਕਾਰਕ) and "ਬੂਟੇ ਤੋਂ" is Sambandh Karak (ਸੰਬੰਧ ਕਾਰਕ)',
        pa: 'ਕੁੱਲ 6 ਕਾਰਕ; "ਦਾਤਰੀ ਨਾਲ" ਸੰਪ੍ਰਦਾਨ ਕਾਰਕ ਹੈ ਅਤੇ "ਬੂਟੇ ਤੋਂ" ਸੰਬੰਧ ਕਾਰਕ ਹੈ',
        hi: 'कुल 6 कारक; "ਦਾਤਰੀ ਨਾਲ" संप्रदान कारक है और "ਬੂਟੇ ਤੋਂ" संबंध कारक है',
      },
      D: {
        en: '7 Karaks in total; "ਦਾਤਰੀ ਨਾਲ" is Karam Karak (ਕਰਮ ਕਾਰਕ) and "ਬੂਟੇ ਤੋਂ" is Sambodhan Karak (ਸੰਬੋਧਨ ਕਾਰਕ)',
        pa: 'ਕੁੱਲ 7 ਕਾਰਕ; "ਦਾਤਰੀ ਨਾਲ" ਕਰਮ ਕਾਰਕ ਹੈ ਅਤੇ "ਬੂਟੇ ਤੋਂ" ਸੰਬੋਧਨ ਕਾਰਕ ਹੈ',
        hi: 'कुल 7 कारक; "ਦਾਤਰੀ ਨਾਲ" कर्म कारक है और "ਬੂਟੇ ਤੋਂ" संबोधन कारक है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Punjabi has 8 Karaks: ਕਰਤਾ (ਮਾਲੀ ਨੇ), ਕਰਮ (ਫੁੱਲ), ਕਰਨ (instrument with which action is done: ਦਾਤਰੀ ਨਾਲ), ਸੰਪ੍ਰਦਾਨ (for whom), ਅਪਾਦਾਨ (point of separation: ਬੂਟੇ ਤੋਂ), ਸੰਬੰਧ (possession: ਦਾ/ਦੀ/ਦੇ), ਅਧਿਕਰਨ (location: ਵਿੱਚ/ਉੱਤੇ), and ਸੰਬੋਧਨ (addressing).',
      pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਕਾਰਕ ਦੀਆਂ 8 ਕਿਸਮਾਂ ਹਨ। ਜਿਸ ਸਾਧਨ ਜਾਂ ਹਥਿਆਰ ਨਾਲ ਕੰਮ ਕੀਤਾ ਜਾਵੇ ("ਦਾਤਰੀ ਨਾਲ") ਉਹ "ਕਰਨ ਕਾਰਕ" ਹੈ, ਅਤੇ ਜਿਸ ਤੋਂ ਕੋਈ ਚੀਜ਼ ਵੱਖ ਹੋਵੇ ("ਬੂਟੇ ਤੋਂ") ਉਹ "ਅਪਾਦਾਨ ਕਾਰਕ" ਹੈ।',
      hi: 'पंजाबी में कारक के 8 भेद हैं। जिस साधन या उपकरण से कार्य किया जाए ("ਦਾਤਰੀ ਨਾਲ") वह "करण कारक" है, और जिससे कोई वस्तु अलग हो ("ਬੂਟੇ ਤੋਂ") वह "अपादान कारक" है।',
    },
    difficulty: 'medium',
  },

  // ===========================================================================
  // SECTION 2: ENGLISH GRAMMAR, VOCABULARY & COMPREHENSION
  // topicId: 'english-grammar-lit' | subjectId: 'clerk-english' (25 MCQs)
  // ===========================================================================
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-1',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Choose the correct verb form according to the proximity rule of Subject-Verb Agreement: "Neither the Head Clerk nor the Junior Assistants ________ present at the verification desk yesterday."',
      pa: 'Subject-Verb Agreement ਦੇ ਨਿਯਮ ਅਨੁਸਾਰ ਸਹੀ ਕਿਰਿਆ (Verb) ਚੁਣੋ: "Neither the Head Clerk nor the Junior Assistants ________ present at the verification desk yesterday."',
      hi: 'Subject-Verb Agreement के नियम के अनुसार सही क्रिया (Verb) चुनें: "Neither the Head Clerk nor the Junior Assistants ________ present at the verification desk yesterday."',
    },
    options: {
      A: {
        en: 'were — because with "neither...nor", the verb agrees with the nearer subject ("Junior Assistants", plural) in the past tense ("yesterday")',
        pa: 'were — ਕਿਉਂਕਿ "neither...nor" ਵਿੱਚ ਕਿਰਿਆ ਨੇੜਲੇ ਕਰਤਾ ("Junior Assistants", ਬਹੁਵਚਨ) ਅਤੇ ਭੂਤਕਾਲ ("yesterday") ਅਨੁਸਾਰ ਲੱਗਦੀ ਹੈ',
        hi: 'were — क्योंकि "neither...nor" में क्रिया निकटतम कर्ता ("Junior Assistants", बहुवचन) और भूतकाल ("yesterday") के अनुसार लगती है',
      },
      B: {
        en: 'was — because "neither" always takes a singular verb regardless of the nouns joined',
        pa: 'was — ਕਿਉਂਕਿ "neither" ਨਾਲ ਹਮੇਸ਼ਾ ਇੱਕਵਚਨ ਕਿਰਿਆ ਲੱਗਦੀ ਹੈ',
        hi: 'was — क्योंकि "neither" के साथ सदैव एकवचन क्रिया लगती है',
      },
      C: {
        en: 'are — because plural subjects always take a present plural verb',
        pa: 'are — ਕਿਉਂਕਿ ਬਹੁਵਚਨ ਕਰਤਾ ਨਾਲ ਵਰਤਮਾਨ ਕਾਲ ਦੀ ਕਿਰਿਆ ਲੱਗਦੀ ਹੈ',
        hi: 'are — क्योंकि बहुवचन कर्ता के साथ वर्तमान काल की क्रिया लगती है',
      },
      D: {
        en: 'has been — because the first subject "Head Clerk" is singular',
        pa: 'has been — ਕਿਉਂਕਿ ਪਹਿਲਾ ਕਰਤਾ "Head Clerk" ਇੱਕਵਚਨ ਹੈ',
        hi: 'has been — क्योंकि पहला कर्ता "Head Clerk" एकवचन है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'When two subjects are joined by "neither...nor", "either...or", or "not only...but also", the verb agrees in number and person with the closer subject. Here, "Junior Assistants" is plural and "yesterday" indicates past tense, so "were" is correct.',
      pa: 'ਜਦੋਂ ਦੋ ਕਰਤਾ "neither...nor" ਜਾਂ "either...or" ਨਾਲ ਜੁੜੇ ਹੋਣ, ਤਾਂ ਕਿਰਿਆ (Verb) ਆਪਣੇ ਤੋਂ ਸਭ ਤੋਂ ਨੇੜਲੇ ਕਰਤਾ ("Junior Assistants" — ਬਹੁਵਚਨ) ਅਨੁਸਾਰ ਲੱਗਦੀ ਹੈ। "yesterday" ਕਾਰਨ ਭੂਤਕਾਲ ਦਾ ਬਹੁਵਚਨ "were" ਸਹੀ ਹੈ।',
      hi: 'जब दो कर्ता "neither...nor" या "either...or" से जुड़े हों, तो क्रिया (Verb) अपने सबसे निकटवर्ती कर्ता ("Junior Assistants" — बहुवचन) के अनुसार लगती है। "yesterday" के कारण भूतकाल का बहुवचन "were" सही है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-2',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Select the grammatically correct pair of verbs for the two blanks: (1) "The Deputy Commissioner, along with his nodal officers, ________ inspecting the centre." (2) "One of the candidates ________ forgotten his admit card."',
      pa: 'ਦੋਵਾਂ ਖਾਲੀ ਥਾਵਾਂ ਲਈ ਵਿਆਕਰਨ ਪੱਖੋਂ ਸਹੀ ਕਿਰਿਆਵਾਂ ਚੁਣੋ: (1) "The Deputy Commissioner, along with his nodal officers, ________ inspecting the centre." (2) "One of the candidates ________ forgotten his admit card."',
      hi: 'दोनों रिक्त स्थानों के लिए व्याकरणिक रूप से सही क्रियाएं चुनें: (1) "The Deputy Commissioner, along with his nodal officers, ________ inspecting the centre." (2) "One of the candidates ________ forgotten his admit card."',
    },
    options: {
      A: {
        en: '(1) is, (2) has — both take singular verbs',
        pa: '(1) is, (2) has — ਦੋਵਾਂ ਵਾਕਾਂ ਵਿੱਚ ਇੱਕਵਚਨ ਕਿਰਿਆ ਲੱਗੇਗੀ',
        hi: '(1) is, (2) has — दोनों वाक्यों में एकवचन क्रिया लगेगी',
      },
      B: {
        en: '(1) are, (2) have — both take plural verbs',
        pa: '(1) are, (2) have — ਦੋਵਾਂ ਵਾਕਾਂ ਵਿੱਚ ਬਹੁਵਚਨ ਕਿਰਿਆ ਲੱਗੇਗੀ',
        hi: '(1) are, (2) have — दोनों वाक्यों में बहुवचन क्रिया लगेगी',
      },
      C: {
        en: '(1) are, (2) has — first plural, second singular',
        pa: '(1) are, (2) has — ਪਹਿਲੇ ਵਿੱਚ ਬਹੁਵਚਨ, ਦੂਜੇ ਵਿੱਚ ਇੱਕਵਚਨ',
        hi: '(1) are, (2) has — पहले में बहुवचन, दूसरे में एकवचन',
      },
      D: {
        en: '(1) is, (2) have — first singular, second plural',
        pa: '(1) is, (2) have — ਪਹਿਲੇ ਵਿੱਚ ਇੱਕਵਚਨ, ਦੂਜੇ ਵਿੱਚ ਬਹੁਵਚਨ',
        hi: '(1) is, (2) have — पहले में एकवचन, दूसरे में बहुवचन',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Rule 1: When the main subject ("The Deputy Commissioner") is followed by "along with / together with / as well as", the verb agrees with the first/main subject (singular: "is"). Rule 2: "One of the + Plural Noun" siempre takes a singular verb ("has") because the subject is "One".',
      pa: 'ਨਿਯਮ 1: ਜਦੋਂ ਦੋ ਕਰਤਾ "along with / as well as / together with" ਨਾਲ ਜੁੜੇ ਹੋਣ ਤਾਂ ਕਿਰਿਆ ਪਹਿਲੇ ਕਰਤਾ ("The Deputy Commissioner" — ਇੱਕਵਚਨ) ਅਨੁਸਾਰ "is" ਲੱਗਦੀ ਹੈ। ਨਿਯਮ 2: "One of the + ਬਹੁਵਚਨ ਨਾਂਵ" ਨਾਲ ਕਿਰਿਆ ਹਮੇਸ਼ਾ ਇੱਕਵਚਨ ("has") ਲੱਗਦੀ ਹੈ।',
      hi: 'नियम 1: जब दो कर्ता "along with / as well as / together with" से जुड़े हों तो क्रिया प्रथम मुख्य कर्ता ("The Deputy Commissioner" — एकवचन) के अनुसार "is" लगती है। नियम 2: "One of the + बहुवचन संज्ञा" के साथ क्रिया सदैव एकवचन ("has") लगती है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-3',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Distinguish between "A number of" and "The number of" by filling in the blanks: "A number of applicants ________ applied online, but the number of vacancies ________ limited to fifty."',
      pa: '"A number of" ਅਤੇ "The number of" ਦੇ ਨਿਯਮ ਅਨੁਸਾਰ ਖਾਲੀ ਥਾਵਾਂ ਭਰੋ: "A number of applicants ________ applied online, but the number of vacancies ________ limited to fifty."',
      hi: '"A number of" और "The number of" के नियम के अनुसार रिक्त स्थान भरें: "A number of applicants ________ applied online, but the number of vacancies ________ limited to fifty."',
    },
    options: {
      A: {
        en: 'have, is — "A number of" takes a plural verb (have), whereas "The number of" takes a singular verb (is)',
        pa: 'have, is — "A number of" ਨਾਲ ਬਹੁਵਚਨ ਕਿਰਿਆ (have) ਅਤੇ "The number of" ਨਾਲ ਇੱਕਵਚਨ ਕਿਰਿਆ (is) ਲੱਗਦੀ ਹੈ',
        hi: 'have, is — "A number of" के साथ बहुवचन क्रिया (have) और "The number of" के साथ एकवचन क्रिया (is) लगती है',
      },
      B: {
        en: 'has, are — "A number of" takes a singular verb (has), whereas "The number of" takes a plural verb (are)',
        pa: 'has, are — "A number of" ਨਾਲ ਇੱਕਵਚਨ ਕਿਰਿਆ (has) ਅਤੇ "The number of" ਨਾਲ ਬਹੁਵਚਨ ਕਿਰਿਆ (are) ਲੱਗਦੀ ਹੈ',
        hi: 'has, are — "A number of" के साथ एकवचन क्रिया (has) और "The number of" के साथ बहुवचन क्रिया (are) लगती है',
      },
      C: {
        en: 'have, are — both expressions always take plural verbs',
        pa: 'have, are — ਦੋਵਾਂ ਨਾਲ ਹਮੇਸ਼ਾ ਬਹੁਵਚਨ ਕਿਰਿਆ ਲੱਗਦੀ ਹੈ',
        hi: 'have, are — दोनों के साथ सदैव बहुवचन क्रिया लगती है',
      },
      D: {
        en: 'has, is — both expressions always take singular verbs',
        pa: 'has, is — ਦੋਵਾਂ ਨਾਲ ਹਮੇਸ਼ਾ ਇੱਕਵਚਨ ਕਿਰਿਆ ਲੱਗਦੀ ਹੈ',
        hi: 'has, is — दोनों के साथ सदैव एकवचन क्रिया लगती है',
      },
    },
    correct: 'A',
    explanation: {
      en: '"A number of + plural noun" means "many" and always takes a plural verb ("have"). "The number of + plural noun" refers to a specific numerical figure/count as a single unit and always takes a singular verb ("is").',
      pa: '"A number of" ਦਾ ਅਰਥ ਹੈ "ਬਹੁਤ ਸਾਰੇ", ਇਸ ਲਈ ਇਸ ਨਾਲ ਬਹੁਵਚਨ ਕਿਰਿਆ ("have") ਲੱਗਦੀ ਹੈ। "The number of" ਕਿਸੇ ਨਿਸ਼ਚਿਤ ਗਿਣਤੀ/ਅੰਕੜੇ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ, ਇਸ ਲਈ ਇਸ ਨਾਲ ਇੱਕਵਚਨ ਕਿਰਿਆ ("is") ਲੱਗਦੀ ਹੈ।',
      hi: '"A number of" का अर्थ है "अनेक/बहुत से", इसलिए इसके साथ बहुवचन क्रिया ("have") लगती है। "The number of" एक निश्चित संख्या/आँकड़े को दर्शाता है, इसलिए इसके साथ एकवचन क्रिया ("is") लगती है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-4',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Choose the correct sequence of Articles to fill in the blanks: "He is ________ honest Sub-Divisional Magistrate who graduated from ________ university in ________ United Kingdom."',
      pa: 'ਖਾਲੀ ਥਾਵਾਂ ਲਈ ਸਹੀ Articles (a, an, the) ਦੀ ਚੋਣ ਕਰੋ: "He is ________ honest Sub-Divisional Magistrate who graduated from ________ university in ________ United Kingdom."',
      hi: 'रिक्त स्थानों के लिए सही Articles (a, an, the) का चयन करें: "He is ________ honest Sub-Divisional Magistrate who graduated from ________ university in ________ United Kingdom."',
    },
    options: {
      A: {
        en: 'an, a, the — "honest" starts with vowel sound /ɒ/, "university" starts with consonant sound /juː/, and "United Kingdom" takes "the"',
        pa: 'an, a, the — "honest" ਸ੍ਵਰ ਧੁਨੀ (ਓ) ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ, "university" ਵਿਅੰਜਨ ਧੁਨੀ (ਯ) ਨਾਲ, ਅਤੇ "United Kingdom" ਤੋਂ ਪਹਿਲਾਂ "the" ਲੱਗਦਾ ਹੈ',
        hi: 'an, a, the — "honest" स्वर ध्वनि (ऑ) से शुरू होता है, "university" व्यंजन ध्वनि (यू) से, और "United Kingdom" से पहले "the" लगता है',
      },
      B: {
        en: 'a, an, the — based on the initial written English letters h and u',
        pa: 'a, an, the — ਅੰਗਰੇਜ਼ੀ ਦੇ ਪਹਿਲੇ ਲਿਖਤੀ ਅੱਖਰਾਂ h ਅਤੇ u ਦੇ ਆਧਾਰ ’ਤੇ',
        hi: 'a, an, the — अंग्रेज़ी के प्रथम लिखित अक्षरों h और u के आधार पर',
      },
      C: {
        en: 'an, an, a — because both honest and university have vowel sounds',
        pa: 'an, an, a — ਕਿਉਂਕਿ honest ਅਤੇ university ਦੋਵੇਂ ਸ੍ਵਰ ਧੁਨੀਆਂ ਹਨ',
        hi: 'an, an, a — क्योंकि honest और university दोनों स्वर ध्वनियाँ हैं',
      },
      D: {
        en: 'the, a, an — definite article first and indefinite later',
        pa: 'the, a, an — ਪਹਿਲਾਂ ਨਿਸ਼ਚਿਤ ਅਤੇ ਬਾਅਦ ਵਿੱਚ ਅਨਿਸ਼ਚਿਤ ਆਰਟੀਕਲ',
        hi: 'the, a, an — पहले निश्चित और बाद में अनिश्चित आर्टिकल',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Articles depend on phonetic sound, not spelling: "honest" has a silent "h" and begins with a vowel sound (/ɒnɪst/ → an honest); "university" begins with the palatal glide /j/ ("yoo" sound → a university); compound country names with Kingdom/States/Republic take "the" (the United Kingdom).',
      pa: 'ਆਰਟੀਕਲ ਦੀ ਵਰਤੋਂ ਸ਼ਬਦ ਦੀ ਪਹਿਲੀ ਧੁਨੀ (ਆਵਾਜ਼) ’ਤੇ ਨਿਰਭਰ ਕਰਦੀ ਹੈ: "honest" ਵਿੱਚ h ਸਾਈਲੈਂਟ ਹੈ ਅਤੇ ਆਵਾਜ਼ "ਓ" (ਸ੍ਵਰ) ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ (an honest); "university" ਦੀ ਆਵਾਜ਼ "ਯੂ" (ਵਿਅੰਜਨ) ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ (a university); ਅਤੇ "United Kingdom" ਨਾਲ "the" ਲੱਗਦਾ ਹੈ।',
      hi: 'आर्टिकल का प्रयोग शब्द की प्रथम ध्वनि पर निर्भर करता है: "honest" में h मूक है और उच्चारण "ऑ" (स्वर) से होता है (an honest); "university" का उच्चारण "यू" (व्यंजन) से होता है (a university); तथा "United Kingdom" के साथ "the" लगता है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-5',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Fill in the blanks with the appropriate fixed Prepositions: "Mr. Sharma is senior ________ me in service, and he always prefers tea ________ coffee."',
      pa: 'ਢੁਕਵੇਂ Prepositions ਨਾਲ ਖਾਲੀ ਥਾਵਾਂ ਭਰੋ: "Mr. Sharma is senior ________ me in service, and he always prefers tea ________ coffee."',
      hi: 'उचित Prepositions से रिक्त स्थान भरें: "Mr. Sharma is senior ________ me in service, and he always prefers tea ________ coffee."',
    },
    options: {
      A: {
        en: 'to, to — Latin comparatives (senior, junior, superior, inferior, prior) and the verb "prefer" always take "to", never "than"',
        pa: 'to, to — ਕਿਉਂਕਿ senior, junior, superior, inferior ਅਤੇ prefer ਦੇ ਨਾਲ ਹਮੇਸ਼ਾ "to" ਲੱਗਦਾ ਹੈ ("than" ਨਹੀਂ)',
        hi: 'to, to — क्योंकि senior, junior, superior, inferior तथा prefer के साथ सदैव "to" लगता है ("than" नहीं)',
      },
      B: {
        en: 'than, than — because both clauses express comparison between two entities',
        pa: 'than, than — ਕਿਉਂਕਿ ਦੋਵਾਂ ਵਾਕਾਂ ਵਿੱਚ ਤੁਲਨਾ ਕੀਤੀ ਗਈ ਹੈ',
        hi: 'than, than — क्योंकि दोनों उपवाक्यों में तुलना की गई है',
      },
      C: {
        en: 'from, over — indicating rank separation and choice',
        pa: 'from, over — ਅਹੁਦੇ ਦੇ ਫ਼ਰਕ ਅਤੇ ਪਸੰਦ ਨੂੰ ਦਰਸਾਉਣ ਲਈ',
        hi: 'from, over — पद के अंतर और पसंद को दर्शाने के लिए',
      },
      D: {
        en: 'to, than — "to" for senior and "than" for prefers',
        pa: 'to, than — senior ਨਾਲ "to" ਅਤੇ prefers ਨਾਲ "than"',
        hi: 'to, than — senior के साथ "to" और prefers के साथ "than"',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Latin adjectives ending in -ior (senior, junior, superior, inferior, prior, anterior, posterior) as well as "prefer / preferable" always take the preposition "to" instead of "than".',
      pa: 'ਅੰਗਰੇਜ਼ੀ ਵਿਆਕਰਨ ਵਿੱਚ -ior ਨਾਲ ਖ਼ਤਮ ਹੋਣ ਵਾਲੇ ਵਿਸ਼ੇਸ਼ਣਾਂ (senior, junior, superior, inferior, prior) ਅਤੇ "prefer" ਕਿਰਿਆ ਨਾਲ ਤੁਲਨਾ ਕਰਨ ਵੇਲੇ "than" ਦੀ ਬਜਾਏ ਹਮੇਸ਼ਾ "to" ਲੱਗਦਾ ਹੈ।',
      hi: 'अंग्रेज़ी व्याकरण में -ior से समाप्त होने वाले विशेषणों (senior, junior, superior, inferior, prior) और "prefer" क्रिया के साथ तुलना करते समय "than" के स्थान पर सदैव "to" लगता है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-6',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Select the correct set of Prepositions for the following four official expressions: (1) abstain ________ alcohol, (2) accused ________ forgery, (3) comply ________ instructions, (4) congratulate ________ success.',
      pa: 'ਹੇਠ ਲਿਖੇ ਚਾਰ ਵਾਕੰਸ਼ਾਂ ਲਈ ਸਹੀ Prepositions ਦਾ ਜੁੱਟ ਚੁਣੋ: (1) abstain ________ alcohol, (2) accused ________ forgery, (3) comply ________ instructions, (4) congratulate ________ success.',
      hi: 'निम्नलिखित चार वाक्यांशों के लिए सही Prepositions का समूह चुनें: (1) abstain ________ alcohol, (2) accused ________ forgery, (3) comply ________ instructions, (4) congratulate ________ success.',
    },
    options: {
      A: {
        en: '(1) from, (2) of, (3) with, (4) on',
        pa: '(1) from, (2) of, (3) with, (4) on',
        hi: '(1) from, (2) of, (3) with, (4) on',
      },
      B: {
        en: '(1) of, (2) for, (3) to, (4) for',
        pa: '(1) of, (2) for, (3) to, (4) for',
        hi: '(1) of, (2) for, (3) to, (4) for',
      },
      C: {
        en: '(1) from, (2) with, (3) by, (4) on',
        pa: '(1) from, (2) with, (3) by, (4) on',
        hi: '(1) from, (2) with, (3) by, (4) on',
      },
      D: {
        en: '(1) against, (2) of, (3) with, (4) at',
        pa: '(1) against, (2) of, (3) with, (4) at',
        hi: '(1) against, (2) of, (3) with, (4) at',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Standard fixed prepositions tested in PPSC/PSSSB exams: abstain from (ਪਰਹੇਜ਼ ਕਰਨਾ), accused of (ਦੋਸ਼ ਲੱਗਣਾ — whereas charged with), comply with (ਪਾਲਣਾ ਕਰਨਾ), and congratulate on (ਵਧਾਈ ਦੇਣਾ — never congratulate for).',
      pa: 'ਪ੍ਰੀਖਿਆਵਾਂ ਵਿੱਚ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਪ੍ਰਮੁੱਖ Fixed Prepositions ਹਨ: abstain from (ਪਰਹੇਜ਼ ਕਰਨਾ), accused of (ਦੋਸ਼ੀ ਹੋਣਾ), comply with (ਹੁਕਮਾਂ ਦੀ ਪਾਲਣਾ ਕਰਨਾ), ਅਤੇ congratulate on (ਸਫ਼ਲਤਾ ’ਤੇ ਵਧਾਈ ਦੇਣਾ)।',
      hi: 'परीक्षाओं में पूछे जाने वाले प्रमुख Fixed Prepositions हैं: abstain from (परहेज़ करना), accused of (आरोपी होना), comply with (निर्देशों का पालन करना), और congratulate on (सफलता पर बधाई देना)।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-7',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Choose the option that correctly distinguishes between (i) "die of" vs "die from" and (ii) "beside" vs "besides":',
      pa: '(i) "die of" ਬਨਾਮ "die from" ਅਤੇ (ii) "beside" ਬਨਾਮ "besides" ਦੀ ਸਹੀ ਵਰਤੋਂ ਵਾਲਾ ਵਿਕਲਪ ਚੁਣੋ:',
      hi: '(i) "die of" बनाम "die from" तथा (ii) "beside" बनाम "besides" के सही प्रयोग वाला विकल्प चुनें:',
    },
    options: {
      A: {
        en: '"Die of" is used for a direct disease (died of cholera), "die from" for an external/indirect cause (died from overwork/wounds); "beside" means next to, while "besides" means in addition to',
        pa: '"Die of" ਕਿਸੇ ਬਿਮਾਰੀ ਨਾਲ ਮੌਤ ਲਈ (died of cholera), "die from" ਬਾਹਰੀ ਕਾਰਨ/ਜ਼ਖ਼ਮ ਲਈ (died from overwork); "beside" ਦਾ ਅਰਥ ਹੈ "ਦੇ ਕੋਲ/ਨਾਲ" ਅਤੇ "besides" ਦਾ ਅਰਥ ਹੈ "ਇਸ ਤੋਂ ਇਲਾਵਾ"',
        hi: '"Die of" किसी बीमारी से मृत्यु के लिए (died of cholera), "die from" बाहरी कारण/घाव के लिए (died from overwork); "beside" का अर्थ है "के बगल में" और "besides" का अर्थ है "के अतिरिक्त"',
      },
      B: {
        en: '"Die of" is used for accidents, "die from" for diseases; "beside" means in addition to, while "besides" means next to',
        pa: '"Die of" ਦੁਰਘਟਨਾ ਲਈ, "die from" ਬਿਮਾਰੀ ਲਈ; "beside" ਦਾ ਅਰਥ ਹੈ "ਇਸ ਤੋਂ ਇਲਾਵਾ" ਅਤੇ "besides" ਦਾ ਅਰਥ ਹੈ "ਦੇ ਕੋਲ"',
        hi: '"Die of" दुर्घटना के लिए, "die from" बीमारी के लिए; "beside" का अर्थ है "के अतिरिक्त" और "besides" का अर्थ है "के बगल में"',
      },
      C: {
        en: 'Both "die of" and "die from" are interchangeable only for old age; "beside" and "besides" are spelling variants of the same word',
        pa: '"Die of" ਅਤੇ "die from" ਕੇਵਲ ਬੁਢਾਪੇ ਲਈ ਵਰਤੇ ਜਾਂਦੇ ਹਨ; "beside" ਅਤੇ "besides" ਇੱਕੋ ਸ਼ਬਦ ਦੇ ਦੋ ਰੂਪ ਹਨ',
        hi: '"Die of" और "die from" केवल बुढ़ापे के लिए प्रयुक्त होते हैं; "beside" और "besides" एक ही शब्द के दो रूप हैं',
      },
      D: {
        en: '"Die of" is used for plural subjects, "die from" for singular subjects; "beside" is a conjunction, while "besides" is a verb',
        pa: '"Die of" ਬਹੁਵਚਨ ਲਈ, "die from" ਇੱਕਵਚਨ ਲਈ; "beside" ਯੋਜਕ ਹੈ ਅਤੇ "besides" ਕਿਰਿਆ ਹੈ',
        hi: '"Die of" बहुवचन के लिए, "die from" एकवचन के लिए; "beside" संयोजक है और "besides" क्रिया है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Grammar rules: 1. "Die of" + disease/illness/hunger (He died of cancer/malaria); "Die from" + external cause/wound/overwork/food poisoning. 2. "Beside" = by the side of (He sat beside me); "Besides" = in addition to (Besides Punjabi, he knows English).',
      pa: 'ਵਿਆਕਰਨ ਨਿਯਮ: 1. ਬਿਮਾਰੀ ਜਾਂ ਭੁੱਖ ਨਾਲ ਮੌਤ ਲਈ "die of" (died of cancer) ਅਤੇ ਬਾਹਰੀ ਕਾਰਨ/ਜ਼ਖ਼ਮ ਲਈ "die from" (died from wounds/overwork) ਲੱਗਦਾ ਹੈ। 2. "Beside" ਦਾ ਅਰਥ ਹੈ "ਦੇ ਪਾਸੇ/ਕੋਲ" ਅਤੇ "Besides" ਦਾ ਅਰਥ ਹੈ "ਤੋਂ ਇਲਾਵਾ"।',
      hi: 'व्याकरण नियम: 1. बीमारी या भूख से मृत्यु के लिए "die of" (died of cancer) और बाहरी कारण/घाव के लिए "die from" (died from wounds/overwork) लगता है। 2. "Beside" का अर्थ है "के पास/बगल में" और "Besides" का अर्थ है "के अतिरिक्त"।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-8',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Convert the following interrogative sentence into Passive Voice: "Who wrote this official manual?"',
      pa: 'ਹੇਠ ਲਿਖੇ ਪ੍ਰਸ਼ਨਵਾਚਕ ਵਾਕ ਨੂੰ Passive Voice ਵਿੱਚ ਬਦਲੋ: "Who wrote this official manual?"',
      hi: 'निम्नलिखित प्रश्नवाचक वाक्य को Passive Voice में बदलें: "Who wrote this official manual?"',
    },
    options: {
      A: {
        en: 'By whom was this official manual written?',
        pa: 'By whom was this official manual written?',
        hi: 'By whom was this official manual written?',
      },
      B: {
        en: 'By whom this official manual was written?',
        pa: 'By whom this official manual was written?',
        hi: 'By whom this official manual was written?',
      },
      C: {
        en: 'Who was written this official manual by?',
        pa: 'Who was written this official manual by?',
        hi: 'Who was written this official manual by?',
      },
      D: {
        en: 'By whom had this official manual been written?',
        pa: 'By whom had this official manual been written?',
        hi: 'By whom had this official manual been written?',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Active sentences starting with "Who + V2 (Simple Past)" convert to Passive Voice using the structure: "By whom + was/were + Object + V3?". Notice that in interrogative sentences, the auxiliary verb ("was") must precede the subject ("this official manual").',
      pa: '"Who + V2 (Past Indefinite)" ਵਾਲੇ ਪ੍ਰਸ਼ਨਵਾਚਕ ਵਾਕ ਨੂੰ Passive Voice ਵਿੱਚ ਬਦਲਣ ਦਾ ਨਿਯਮ ਹੈ: "By whom + was/were + Object + V3?". ਪ੍ਰਸ਼ਨਵਾਚਕ ਰੂਪ ਬਰਕਰਾਰ ਰੱਖਣ ਲਈ "was" ਕਰਤਾ ("this official manual") ਤੋਂ ਪਹਿਲਾਂ ਆਉਂਦਾ ਹੈ।',
      hi: '"Who + V2 (Past Indefinite)" वाले प्रश्नवाचक वाक्य को Passive Voice में बदलने का नियम है: "By whom + was/were + Object + V3?". प्रश्नवाचक रूप बनाए रखने के लिए "was" कर्ता ("this official manual") से पहले आता है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-9',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Convert the sentence into Indirect Speech (Narration): The teacher said to the students, "The Earth revolves around the Sun."',
      pa: 'ਹੇਠ ਲਿਖੇ ਵਾਕ ਨੂੰ Indirect Narration ਵਿੱਚ ਬਦਲੋ: The teacher said to the students, "The Earth revolves around the Sun."',
      hi: 'निम्नलिखित वाक्य को Indirect Narration में बदलें: The teacher said to the students, "The Earth revolves around the Sun."',
    },
    options: {
      A: {
        en: 'The teacher told the students that the Earth revolves around the Sun.',
        pa: 'The teacher told the students that the Earth revolves around the Sun.',
        hi: 'The teacher told the students that the Earth revolves around the Sun.',
      },
      B: {
        en: 'The teacher told the students that the Earth revolved around the Sun.',
        pa: 'The teacher told the students that the Earth revolved around the Sun.',
        hi: 'The teacher told the students that the Earth revolved around the Sun.',
      },
      C: {
        en: 'The teacher asked the students if the Earth revolves around the Sun.',
        pa: 'The teacher asked the students if the Earth revolves around the Sun.',
        hi: 'The teacher asked the students if the Earth revolves around the Sun.',
      },
      D: {
        en: 'The teacher said to the students that the Earth had revolved around the Sun.',
        pa: 'The teacher said to the students that the Earth had revolved around the Sun.',
        hi: 'The teacher said to the students that the Earth had revolved around the Sun.',
      },
    },
    correct: 'A',
    explanation: {
      en: 'When the reported speech expresses a Universal Truth, scientific fact, or proverb ("The Earth revolves around the Sun"), its tense remains unchanged (Present Simple "revolves") even when the reporting verb ("said to" → "told") is in the past tense.',
      pa: 'ਜਦੋਂ Reported Speech ਵਿੱਚ ਕੋਈ ਸਰਬ-ਵਿਆਪਕ ਸੱਚ (Universal Truth) ਜਾਂ ਵਿਗਿਆਨਕ ਤੱਥ ਹੋਵੇ, ਤਾਂ ਬਾਹਰ ਭੂਤਕਾਲ ("said to" → "told") ਹੋਣ ਦੇ ਬਾਵਜੂਦ ਅੰਦਰਲੇ ਵਾਕ ਦਾ ਕਾਲ (Tense) ਨਹੀਂ ਬਦਲਦਾ ("revolves" ਹੀ ਰਹਿੰਦਾ ਹੈ)।',
      hi: 'जब Reported Speech में कोई सार्वभौमिक सत्य (Universal Truth) या वैज्ञानिक तथ्य हो, तो बाहर भूतकाल ("said to" → "told") होने के बावजूद भीतर के वाक्य का काल (Tense) नहीं बदलता ("revolves" ही रहता है)।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-10',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Convert the interrogative sentence into Indirect Speech: The officer said to the clerk, "Have you verified the service book entries?"',
      pa: 'ਹੇਠ ਲਿਖੇ ਵਾਕ ਨੂੰ Indirect Speech ਵਿੱਚ ਬਦਲੋ: The officer said to the clerk, "Have you verified the service book entries?"',
      hi: 'निम्नलिखित वाक्य को Indirect Speech में बदलें: The officer said to the clerk, "Have you verified the service book entries?"',
    },
    options: {
      A: {
        en: 'The officer asked the clerk whether he had verified the service book entries.',
        pa: 'The officer asked the clerk whether he had verified the service book entries.',
        hi: 'The officer asked the clerk whether he had verified the service book entries.',
      },
      B: {
        en: 'The officer asked the clerk that had he verified the service book entries.',
        pa: 'The officer asked the clerk that had he verified the service book entries.',
        hi: 'The officer asked the clerk that had he verified the service book entries.',
      },
      C: {
        en: 'The officer told the clerk if he has verified the service book entries.',
        pa: 'The officer told the clerk if he has verified the service book entries.',
        hi: 'The officer told the clerk if he has verified the service book entries.',
      },
      D: {
        en: 'The officer asked the clerk whether had he verified the service book entries.',
        pa: 'The officer asked the clerk whether had he verified the service book entries.',
        hi: 'The officer asked the clerk whether had he verified the service book entries.',
      },
    },
    correct: 'A',
    explanation: {
      en: 'For Yes/No interrogatives: 1. "said to" becomes "asked"; 2. "if" or "whether" is used as the linker (never "that"); 3. Present Perfect ("Have you verified") changes to Past Perfect ("he had verified") in assertive word order (Subject + Auxiliary + V3).',
      pa: 'ਸਹਾਇਕ ਕਿਰਿਆ (Have) ਨਾਲ ਸ਼ੁਰੂ ਹੋਣ ਵਾਲੇ ਪ੍ਰਸ਼ਨਵਾਚਕ ਵਾਕਾਂ ਵਿੱਚ: 1. "said to" ਨੂੰ "asked" ਵਿੱਚ ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ; 2. ਜੋੜਨ ਲਈ "if" ਜਾਂ "whether" ਲੱਗਦਾ ਹੈ ("that" ਨਹੀਂ); 3. Present Perfect ਨੂੰ Past Perfect ("he had verified") ਦੇ ਸਧਾਰਨ ਕ੍ਰਮ ਵਿੱਚ ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ।',
      hi: 'सहायक क्रिया (Have) से शुरू होने वाले प्रश्नवाचक वाक्यों में: 1. "said to" को "asked" में बदला जाता है; 2. जोड़ने के लिए "if" या "whether" लगता है ("that" नहीं); 3. Present Perfect को Past Perfect ("he had verified") के साधारण क्रम में बदला जाता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-11',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Choose the correct verb forms for the Second Conditional (hypothetical present) and Third Conditional (unfulfilled past): (1) "If I ________ the District Magistrate, I would digitize all land records." (2) "If he had practiced typing daily, he ________ the skill test."',
      pa: 'Second Conditional ਅਤੇ Third Conditional ਦੇ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਸਹੀ ਕਿਰਿਆਵਾਂ ਚੁਣੋ: (1) "If I ________ the District Magistrate, I would digitize all land records." (2) "If he had practiced typing daily, he ________ the skill test."',
      hi: 'Second Conditional और Third Conditional के नियमों के अनुसार सही क्रियाएं चुनें: (1) "If I ________ the District Magistrate, I would digitize all land records." (2) "If he had practiced typing daily, he ________ the skill test."',
    },
    options: {
      A: {
        en: '(1) were, (2) would have passed',
        pa: '(1) were, (2) would have passed',
        hi: '(1) were, (2) would have passed',
      },
      B: {
        en: '(1) was, (2) would pass',
        pa: '(1) was, (2) would pass',
        hi: '(1) was, (2) would pass',
      },
      C: {
        en: '(1) am, (2) will have passed',
        pa: '(1) am, (2) will have passed',
        hi: '(1) am, (2) will have passed',
      },
      D: {
        en: '(1) had been, (2) would passed',
        pa: '(1) had been, (2) would passed',
        hi: '(1) had been, (2) would passed',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Second Conditional (unreal/imaginary state), subjunctive "were" is used with all subjects including "I/he/she" ("If I were..., I would + V1"). In Third Conditional ("If + Subject + had + V3"), the main clause takes "would have + V3" ("would have passed").',
      pa: 'Second Conditional (ਕਾਲਪਨਿਕ ਸਥਿਤੀ) ਵਿੱਚ ਹਰ ਕਰਤਾ (I/he/she) ਨਾਲ "were" ਲੱਗਦਾ ਹੈ ("If I were..., I would + V1")। Third Conditional ("If + had + V3") ਦੇ ਮੁੱਖ ਵਾਕ ਵਿੱਚ "would have + V3" ("would have passed") ਲੱਗਦਾ ਹੈ।',
      hi: 'Second Conditional (काल्पनिक स्थिति) में प्रत्येक कर्ता (I/he/she) के साथ "were" लगता है ("If I were..., I would + V1")। Third Conditional ("If + had + V3") के मुख्य उपवाक्य में "would have + V3" ("would have passed") लगता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-12',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Select the correct Question Tags for the following three sentences: (1) "I am right, ________?" (2) "Let’s review the file, ________?" (3) "He hardly ever makes a typing error, ________?"',
      pa: 'ਹੇਠ ਲਿਖੇ ਤਿੰਨ ਵਾਕਾਂ ਲਈ ਸਹੀ Question Tags ਚੁਣੋ: (1) "I am right, ________?" (2) "Let’s review the file, ________?" (3) "He hardly ever makes a typing error, ________?"',
      hi: 'निम्नलिखित तीन वाक्यों के लिए सही Question Tags चुनें: (1) "I am right, ________?" (2) "Let’s review the file, ________?" (3) "He hardly ever makes a typing error, ________?"',
    },
    options: {
      A: {
        en: '(1) aren’t I, (2) shall we, (3) does he',
        pa: '(1) aren’t I, (2) shall we, (3) does he',
        hi: '(1) aren’t I, (2) shall we, (3) does he',
      },
      B: {
        en: '(1) amn’t I, (2) will you, (3) doesn’t he',
        pa: '(1) amn’t I, (2) will you, (3) doesn’t he',
        hi: '(1) amn’t I, (2) will you, (3) doesn’t he',
      },
      C: {
        en: '(1) isn’t I, (2) should we, (3) did he',
        pa: '(1) isn’t I, (2) should we, (3) did he',
        hi: '(1) isn’t I, (2) should we, (3) did he',
      },
      D: {
        en: '(1) aren’t I, (2) don’t we, (3) doesn’t he',
        pa: '(1) aren’t I, (2) don’t we, (3) doesn’t he',
        hi: '(1) aren’t I, (2) don’t we, (3) doesn’t he',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Three classic Question Tag rules: 1. The negative tag of "I am" is "aren’t I?" (not amn’t I); 2. Sentences starting with "Let’s (Let us)" always take "shall we?"; 3. Words like "hardly, scarcely, barely, seldom, rarely" are negative in meaning, so they take a positive tag ("does he?").',
      pa: 'Question Tag ਦੇ ਤਿੰਨ ਮਹੱਤਵਪੂਰਨ ਨਿਯਮ: 1. "I am" ਦਾ ਨਕਾਰਾਤਮਕ ਟੈਗ "aren’t I?" ਬਣਦਾ ਹੈ; 2. "Let’s" ਵਾਲੇ ਵਾਕਾਂ ਨਾਲ ਹਮੇਸ਼ਾ "shall we?" ਲੱਗਦਾ ਹੈ; 3. "hardly, scarcely, seldom, rarely" ਸ਼ਬਦ ਆਪ ਨਕਾਰਾਤਮਕ ਹੁੰਦੇ ਹਨ, ਇਸ ਲਈ ਇਹਨਾਂ ਨਾਲ ਸਕਾਰਾਤਮਕ ਟੈਗ ("does he?") ਲੱਗਦਾ ਹੈ।',
      hi: 'Question Tag के तीन महत्वपूर्ण नियम: 1. "I am" का नकारात्मक टैग "aren’t I?" बनता है; 2. "Let’s" वाले वाक्यों के साथ सदैव "shall we?" लगता है; 3. "hardly, scarcely, seldom, rarely" शब्द स्वयं नकारात्मक होते हैं, इसलिए इनके साथ सकारात्मक टैग ("does he?") लगता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-13',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Choose the correct Synonyms for the high-frequency vocabulary words: (1) "Benevolent", (2) "Ephemeral", and (3) "Pragmatic":',
      pa: 'ਅੰਗਰੇਜ਼ੀ ਸ਼ਬਦਾਂ (1) "Benevolent", (2) "Ephemeral" ਅਤੇ (3) "Pragmatic" ਦੇ ਸਹੀ ਸਮਾਨਾਰਥਕ (Synonyms) ਚੁਣੋ:',
      hi: 'अंग्रेज़ी शब्दों (1) "Benevolent", (2) "Ephemeral" और (3) "Pragmatic" के सही पर्यायवाची (Synonyms) चुनें:',
    },
    options: {
      A: {
        en: '(1) Kind / Charitable, (2) Short-lived / Transient, (3) Practical / Realistic',
        pa: '(1) Kind / Charitable (ਦਿਆਲੂ/ਪਰਉਪਕਾਰੀ), (2) Short-lived / Transient (ਥੋੜ੍ਹ-ਚਿਰਾ), (3) Practical / Realistic (ਵਿਵਹਾਰਕ)',
        hi: '(1) Kind / Charitable (परोपकारी/दयालु), (2) Short-lived / Transient (क्षणभंगुर), (3) Practical / Realistic (व्यावहारिक)',
      },
      B: {
        en: '(1) Malevolent / Cruel, (2) Eternal / Permanent, (3) Idealistic / Impractical',
        pa: '(1) Malevolent / Cruel (ਨਿਰਦਈ), (2) Eternal / Permanent (ਸਦੀਵੀ), (3) Idealistic / Impractical (ਅਵਿਵਹਾਰਕ)',
        hi: '(1) Malevolent / Cruel (क्रूर), (2) Eternal / Permanent (शाश्वत), (3) Idealistic / Impractical (अव्यावहारिक)',
      },
      C: {
        en: '(1) Wealthy / Affluent, (2) Ancient / Archaic, (3) Dogmatic / Rigid',
        pa: '(1) Wealthy / Affluent (ਅਮੀਰ), (2) Ancient / Archaic (ਪ੍ਰਾਚੀਨ), (3) Dogmatic / Rigid (ਕੱਟੜ)',
        hi: '(1) Wealthy / Affluent (धनी), (2) Ancient / Archaic (प्राचीन), (3) Dogmatic / Rigid (कट्टर)',
      },
      D: {
        en: '(1) Arrogant / Haughty, (2)Fragile / Weak, (3) Ambiguous / Vague',
        pa: '(1) Arrogant / Haughty (ਹੰਕਾਰੀ), (2) Fragile / Weak (ਕਮਜ਼ੋਰ), (3) Ambiguous / Vague (ਅਸਪੱਸ਼ਟ)',
        hi: '(1) Arrogant / Haughty (अहंकारी), (2) Fragile / Weak (कमज़ोर), (3) Ambiguous / Vague (अस्पष्ट)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Benevolent means well-meaning, kind, and charitable (Antonym: Malevolent). Ephemeral means lasting for a very short time / transient (Antonym: Eternal/Perpetual). Pragmatic means dealing with things sensibly and realistically (practical).',
      pa: 'Benevolent ਦਾ ਅਰਥ ਹੈ ਦਿਆਲੂ ਜਾਂ ਪਰਉਪਕਾਰੀ (ਸਮਾਨਾਰਥਕ: Kind, Charitable); Ephemeral ਦਾ ਅਰਥ ਹੈ ਥੋੜ੍ਹੇ ਸਮੇਂ ਲਈ ਰਹਿਣ ਵਾਲਾ (Short-lived, Transient); ਅਤੇ Pragmatic ਦਾ ਅਰਥ ਹੈ ਵਿਵਹਾਰਕ ਜਾਂ ਯਥਾਰਥਵਾਦੀ (Practical, Realistic)।',
      hi: 'Benevolent का अर्थ है दयालु या परोपकारी (पर्यायवाची: Kind, Charitable); Ephemeral का अर्थ है क्षणभंगुर या अल्पकालिक (Short-lived, Transient); और Pragmatic का अर्थ है व्यावहारिक या यथार्थवादी (Practical, Realistic)।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-14',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Identify the correct Antonyms (opposite in meaning) for the words: (1) "Obsolete", (2) "Candid", and (3) "Mitigate":',
      pa: 'ਅੰਗਰੇਜ਼ੀ ਸ਼ਬਦਾਂ (1) "Obsolete", (2) "Candid" ਅਤੇ (3) "Mitigate" ਦੇ ਸਹੀ ਵਿਰੋਧਾਰਥਕ ਸ਼ਬਦ (Antonyms) ਚੁਣੋ:',
      hi: 'अंग्रेज़ी शब्दों (1) "Obsolete", (2) "Candid" और (3) "Mitigate" के सही विलोम शब्द (Antonyms) चुनें:',
    },
    options: {
      A: {
        en: '(1) Contemporary / Modern, (2) Devious / Secretive, (3) Aggravate / Intensify',
        pa: '(1) Contemporary / Modern (ਆਧੁਨਿਕ), (2) Devious / Secretive (ਛਲੀ/ਲੁਕਾਉਣ ਵਾਲਾ), (3) Aggravate / Intensify (ਵਧਾਉਣਾ/ਗੰਭੀਰ ਕਰਨਾ)',
        hi: '(1) Contemporary / Modern (आधुनिक), (2) Devious / Secretive (कपटी/छली), (3) Aggravate / Intensify (बढ़ाना/तीव्र करना)',
      },
      B: {
        en: '(1) Outdated / Archaic, (2) Frank / Forthright, (3) Alleviate / Lessen',
        pa: '(1) Outdated / Archaic (ਪੁਰਾਣਾ), (2) Frank / Forthright (ਸਪੱਸ਼ਟਵਾਦੀ), (3) Alleviate / Lessen (ਘਟਾਉਣਾ)',
        hi: '(1) Outdated / Archaic (पुराना), (2) Frank / Forthright (स्पष्टवादी), (3) Alleviate / Lessen (कम करना)',
      },
      C: {
        en: '(1) Obstinate / Stubborn, (2) Cautious / Careful, (3) Migrate / Relocate',
        pa: '(1) Obstinate / Stubborn (ਜ਼ਿੱਦੀ), (2) Cautious / Careful (ਸਾਵਧਾਨ), (3) Migrate / Relocate (ਪ੍ਰਵਾਸ ਕਰਨਾ)',
        hi: '(1) Obstinate / Stubborn (ज़िद्दी), (2) Cautious / Careful (सावधान), (3) Migrate / Relocate (प्रवास करना)',
      },
      D: {
        en: '(1) Opaque / Cloudy, (2) Audacious / Bold, (3) Mediocre / Average',
        pa: '(1) Opaque / Cloudy (ਧੁੰਦਲਾ), (2) Audacious / Bold (ਦਲੇਰ), (3) Mediocre / Average (ਸਧਾਰਨ)',
        hi: '(1) Opaque / Cloudy (अपारदर्शी), (2) Audacious / Bold (साहसी), (3) Mediocre / Average (साधारण)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Obsolete means outdated/no longer in use (Antonym: Modern/Contemporary). Candid means frank, open, and truthful (Antonym: Devious/Guarded/Secretive). Mitigate means to make less severe or alleviate (Antonym: Aggravate/Exacerbate).',
      pa: 'Obsolete (ਪੁਰਾਣਾ/ਵੇਲਾ ਵਿਹਾ ਚੁੱਕਾ) ਦਾ ਵਿਰੋਧੀ ਹੈ Modern/Contemporary; Candid (ਨਿਸ਼ਕਪਟ/ਸਪੱਸ਼ਟਵਾਦੀ) ਦਾ ਵਿਰੋਧੀ ਹੈ Devious/Secretive; ਅਤੇ Mitigate (ਦੁੱਖ ਜਾਂ ਤੀਬਰਤਾ ਘਟਾਉਣਾ) ਦਾ ਵਿਰੋਧੀ ਹੈ Aggravate (ਵਧਾਉਣਾ/ਗੰਭੀਰ ਕਰਨਾ)।',
      hi: 'Obsolete (अप्रचलित/पुराना) का विलोम है Modern/Contemporary; Candid (स्पष्टवादी/निष्कपट) का विलोम है Devious/Secretive; और Mitigate (कम करना/शांत करना) का विलोम है Aggravate (बढ़ाना/बिगाड़ना)।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-15',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Match the following definitions with their exact English One-Word Substitutions: (i) A remedy for all diseases or difficulties, (ii) One who is incapable of making mistakes or being wrong, (iii) One who works selflessly for the welfare of others:',
      pa: 'ਹੇਠ ਲਿਖੇ ਵਾਕੰਸ਼ਾਂ ਲਈ ਸਹੀ ਅੰਗਰੇਜ਼ੀ One-Word Substitutions ਚੁਣੋ: (i) A remedy for all diseases or difficulties, (ii) One who is incapable of making mistakes, (iii) One who works selflessly for the welfare of others:',
      hi: 'निम्नलिखित वाक्यांशों के लिए सही अंग्रेज़ी One-Word Substitutions चुनें: (i) A remedy for all diseases or difficulties, (ii) One who is incapable of making mistakes, (iii) One who works selflessly for the welfare of others:',
    },
    options: {
      A: {
        en: '(i) Panacea, (ii) Infallible, (iii) Philanthropist / Altruist',
        pa: '(i) Panacea (ਰਾਮਬਾਣ ਇਲਾਜ), (ii) Infallible (ਅਭੁੱਲ), (iii) Philanthropist / Altruist (ਪਰਉਪਕਾਰੀ)',
        hi: '(i) Panacea (रामबाण औषधि), (ii) Infallible (अचूक/अभ्रांत), (iii) Philanthropist / Altruist (परोपकारी)',
      },
      B: {
        en: '(i) Placebo, (ii) Inevitable, (iii) Misogynist',
        pa: '(i) Placebo, (ii) Inevitable, (iii) Misogynist',
        hi: '(i) Placebo, (ii) Inevitable, (iii) Misogynist',
      },
      C: {
        en: '(i) Antidote, (ii) Incorrigible, (iii) Omnipresent',
        pa: '(i) Antidote, (ii) Incorrigible, (iii) Omnipresent',
        hi: '(i) Antidote, (ii) Incorrigible, (iii) Omnipresent',
      },
      D: {
        en: '(i) Amnesia, (ii) Invincible, (iii) Autobiography',
        pa: '(i) Amnesia, (ii) Invincible, (iii) Autobiography',
        hi: '(i) Amnesia, (ii) Invincible, (iii) Autobiography',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Panacea = a universal cure/remedy for all ills (ਰਾਮਬਾਣ); Infallible = incapable of making mistakes (ਅਭੁੱਲ); Philanthropist / Altruist = lover of mankind who promotes human welfare (ਪਰਉਪਕਾਰੀ).',
      pa: 'Panacea = ਸਭ ਰੋਗਾਂ ਜਾਂ ਸਮੱਸਿਆਵਾਂ ਦਾ ਇਲਾਜ (ਰਾਮਬਾਣ); Infallible = ਜੋ ਕਦੇ ਗ਼ਲਤੀ ਨਾ ਕਰੇ (ਅਭੁੱਲ); Philanthropist / Altruist = ਮਨੁੱਖਤਾ ਦੀ ਭਲਾਈ ਕਰਨ ਵਾਲਾ (ਪਰਉਪਕਾਰੀ)।',
      hi: 'Panacea = सभी रोगों या समस्याओं का निदान (रामबाण); Infallible = जो कभी भूल न करे (अचूक); Philanthropist / Altruist = मानवता का भला करने वाला (परोपकारी)।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-16',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Identify the exact One-Word Substitutions for: (1) One who is present everywhere at the same time, (2) A person who dislikes or is prejudiced against women, and (3) The life history of a person written by himself/herself:',
      pa: 'ਹੇਠ ਲਿਖੇ ਵਾਕੰਸ਼ਾਂ ਲਈ ਸਹੀ One-Word Substitutions ਚੁਣੋ: (1) One who is present everywhere, (2) A person who dislikes women, (3) The life history of a person written by himself:',
      hi: 'निम्नलिखित वाक्यांशों के लिए सही One-Word Substitutions चुनें: (1) One who is present everywhere, (2) A person who dislikes women, (3) The life history of a person written by himself:',
    },
    options: {
      A: {
        en: '(1) Omnipresent, (2) Misogynist, (3) Autobiography',
        pa: '(1) Omnipresent (ਸਰਬ-ਵਿਆਪਕ), (2) Misogynist (ਔਰਤ-ਵਿਰੋਧੀ), (3) Autobiography (ਸਵੈ-ਜੀਵਨੀ)',
        hi: '(1) Omnipresent (सर्वव्यापी), (2) Misogynist (स्त्री-द्वेषी), (3) Autobiography (आत्मकथा)',
      },
      B: {
        en: '(1) Omniscient, (2) Misanthrope, (3) Biography',
        pa: '(1) Omniscient, (2) Misanthrope, (3) Biography',
        hi: '(1) Omniscient, (2) Misanthrope, (3) Biography',
      },
      C: {
        en: '(1) Omnipotent, (2) Ascetic, (3) Calligraphy',
        pa: '(1) Omnipotent, (2) Ascetic, (3) Calligraphy',
        hi: '(1) Omnipotent, (2) Ascetic, (3) Calligraphy',
      },
      D: {
        en: '(1) Optimist, (2) Egoist, (3) Bibliography',
        pa: '(1) Optimist, (2) Egoist, (3) Bibliography',
        hi: '(1) Optimist, (2) Egoist, (3) Bibliography',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Omnipresent = present everywhere (Omnipotent = all-powerful; Omniscient = all-knowing). Misogynist = hater of women (Misanthrope = hater of mankind). Autobiography = self-written life story (Biography = written by another person).',
      pa: 'Omnipresent = ਹਰ ਥਾਂ ਮੌਜੂਦ (ਸਰਬ-ਵਿਆਪਕ); Misogynist = ਔਰਤਾਂ ਨਾਲ ਨਫ਼ਰਤ ਕਰਨ ਵਾਲਾ; Autobiography = ਆਪਣੇ ਹੱਥੀਂ ਲਿਖੀ ਆਪਣੀ ਜੀਵਨ ਕਥਾ (ਸਵੈ-ਜੀਵਨੀ)।',
      hi: 'Omnipresent = सर्वत्र उपस्थित (सर्वव्यापी); Misogynist = स्त्रियों से द्वेष रखने वाला; Autobiography = स्वयं द्वारा लिखी गई अपनी जीवन-कथा (आत्मकथा)।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-17',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'What are the accurate meanings of the English idioms: (1) "Bite the bullet", (2) "Burn the midnight oil", and (3) "Once in a blue moon"?',
      pa: 'ਅੰਗਰੇਜ਼ੀ ਮੁਹਾਵਰਿਆਂ (1) "Bite the bullet", (2) "Burn the midnight oil" ਅਤੇ (3) "Once in a blue moon" ਦੇ ਸਹੀ ਅਰਥ ਚੁਣੋ:',
      hi: 'अंग्रेज़ी मुहावरों (1) "Bite the bullet", (2) "Burn the midnight oil" और (3) "Once in a blue moon" के सही अर्थ चुनें:',
    },
    options: {
      A: {
        en: '(1) To face a difficult situation with courage, (2) To study or work late into the night, (3) Very rarely / once in a long time',
        pa: '(1) ਮੁਸ਼ਕਿਲ ਸਥਿਤੀ ਦਾ ਦਲੇਰੀ ਨਾਲ ਸਾਹਮਣਾ ਕਰਨਾ, (2) ਦੇਰ ਰਾਤ ਤੱਕ ਸਖ਼ਤ ਮਿਹਨਤ/ਪੜ੍ਹਾਈ ਕਰਨੀ, (3) ਬਹੁਤ ਘੱਟ ਜਾਂ ਕਦੇ-ਕਦਾਈਂ (ਈਦ ਦਾ ਚੰਦ)',
        hi: '(1) कठिन परिस्थिति का साहसपूर्वक सामना करना, (2) देर रात तक कठिन परिश्रम/अध्ययन करना, (3) बहुत कम या कभी-कभार (ईद का चाँद)',
      },
      B: {
        en: '(1) To fight in a war with weapons, (2) To waste electricity at night, (3) Every full moon night',
        pa: '(1) ਹਥਿਆਰਾਂ ਨਾਲ ਜੰਗ ਲੜਨਾ, (2) ਰਾਤ ਨੂੰ ਤੇਲ ਬਰਬਾਦ ਕਰਨਾ, (3) ਹਰ ਪੂਰਨਮਾਸ਼ੀ ਦੀ ਰਾਤ ਨੂੰ',
        hi: '(1) हथियारों से युद्ध लड़ना, (2) रात में तेल बर्बाद करना, (3) प्रत्येक पूर्णिमा की रात को',
      },
      C: {
        en: '(1) To speak angrily, (2) To set fire to old documents, (3) To travel to space',
        pa: '(1) ਗੁੱਸੇ ਵਿੱਚ ਬੋਲਣਾ, (2) ਪੁਰਾਣੇ ਕਾਗ਼ਜ਼ਾਂ ਨੂੰ ਅੱਗ ਲਾਉਣੀ, (3) ਪੁਲਾੜ ਦੀ ਯਾਤਰਾ ਕਰਨੀ',
        hi: '(1) क्रोध में बोलना, (2) पुराने दस्तावेज़ों को जलाना, (3) अंतरिक्ष यात्रा करना',
      },
      D: {
        en: '(1) To surrender to the enemy, (2) To wake up early in the morning, (3) Frequently and regularly',
        pa: '(1) ਦੁਸ਼ਮਣ ਅੱਗੇ ਹਥਿਆਰ ਸੁੱਟਣੇ, (2) ਸਵੇਰੇ ਜਲਦੀ ਉੱਠਣਾ, (3) ਲਗਾਤਾਰ ਅਤੇ ਨਿਯਮਤ ਤੌਰ ’ਤੇ',
        hi: '(1) शत्रु के आगे हथियार डालना, (2) प्रातः जल्दी उठना, (3) बार-बार और नियमित रूप से',
      },
    },
    correct: 'A',
    explanation: {
      en: '"Bite the bullet" means to confront an unpleasant or tough situation bravely; "Burn the midnight oil" means to work/study late at night; "Once in a blue moon" means an event that happens very rarely.',
      pa: '"Bite the bullet" = ਔਖੀ ਘੜੀ ਦਾ ਹਿੰਮਤ ਨਾਲ ਸਾਹਮਣਾ ਕਰਨਾ; "Burn the midnight oil" = ਦੇਰ ਰਾਤ ਤੱਕ ਜਾਗ ਕੇ ਸਖ਼ਤ ਮਿਹਨਤ ਕਰਨੀ; "Once in a blue moon" = ਕਦੇ-ਕਦਾਈਂ ਜਾਂ ਬਹੁਤ ਘੱਟ ਵਾਪਰਨ ਵਾਲੀ ਘਟਨਾ।',
      hi: '"Bite the bullet" = कठिन परिस्थिति का साहस के साथ सामना करना; "Burn the midnight oil" = देर रात तक जागकर कड़ी मेहनत करना; "Once in a blue moon" = अत्यंत दुर्लभ या कभी-कभार होने वाली घटना।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-18',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Select the option that correctly explains the idioms: (1) "Spill the beans", (2) "Beat around the bush", and (3) "Cry over spilt milk":',
      pa: 'ਅੰਗਰੇਜ਼ੀ ਮੁਹਾਵਰਿਆਂ (1) "Spill the beans", (2) "Beat around the bush" ਅਤੇ (3) "Cry over spilt milk" ਦੇ ਸਹੀ ਅਰਥ ਕਿਹੜੇ ਹਨ?',
      hi: 'अंग्रेज़ी मुहावरों (1) "Spill the beans", (2) "Beat around the bush" और (3) "Cry over spilt milk" के सही अर्थ कौन-से हैं?',
    },
    options: {
      A: {
        en: '(1) Reveal a secret prematurely, (2) Avoid talking about the main topic directly, (3) Regret uselessly over something that has already happened and cannot be undone',
        pa: '(1) ਕੋਈ ਭੇਤ ਜਾਂ ਰਾਜ਼ ਖੋਲ੍ਹ ਦੇਣਾ, (2) ਮੁੱਖ ਮੁੱਦੇ ’ਤੇ ਆਉਣ ਦੀ ਬਜਾਏ ਗੱਲਾਂ ਘੁਮਾਉਣੀਆਂ, (3) ਬੀਤ ਚੁੱਕੀ ਗੱਲ ਜਾਂ ਹੋ ਚੁੱਕੇ ਨੁਕਸਾਨ ’ਤੇ ਵਿਅਰਥ ਪਛਤਾਉਣਾ',
        hi: '(1) कोई रहस्य या भेद उजागर कर देना, (2) मुख्य मुद्दे से हटकर इधर-उधर की बातें करना, (3) जो नुकसान हो चुका हो उस पर व्यर्थ पछताना',
      },
      B: {
        en: '(1) Drop food on the floor, (2) Clear bushes in a garden, (3) Complain about poor milk quality',
        pa: '(1) ਫ਼ਰਸ਼ ’ਤੇ ਖਾਣਾ ਡੇਗਣਾ, (2) ਬਾਗ਼ ਵਿੱਚੋਂ ਝਾੜੀਆਂ ਸਾਫ਼ ਕਰਨੀਆਂ, (3) ਖਰਾਬ ਦੁੱਧ ਬਾਰੇ ਸ਼ਿਕਾਇਤ ਕਰਨੀ',
        hi: '(1) फ़र्श पर अनाज गिराना, (2) बगीचे की झाड़ियाँ साफ़ करना, (3) खराब दूध की शिकायत करना',
      },
      C: {
        en: '(1) Earn a huge profit, (2) Win an argument easily, (3) Sympathize with a poor person',
        pa: '(1) ਭਾਰੀ ਮੁਨਾਫ਼ਾ ਕਮਾਉਣਾ, (2) ਬਹਿਸ ਜਿੱਤ ਲੈਣੀ, (3) ਗ਼ਰੀਬ ਨਾਲ ਹਮਦਰਦੀ ਜਤਾਉਣੀ',
        hi: '(1) भारी मुनाफ़ा कमाना, (2) बहस में आसानी से जीतना, (3) गरीब के प्रति सहानुभूति दिखाना',
      },
      D: {
        en: '(1) Hide confidential files, (2) Speak the blunt truth, (3) Celebrate a festival joyfully',
        pa: '(1) ਗੁਪਤ ਫਾਈਲਾਂ ਲੁਕਾਉਣੀਆਂ, (2) ਮੂੰਹ ’ਤੇ ਸੱਚ ਬੋਲਣਾ, (3) ਖੁਸ਼ੀ ਨਾਲ ਤਿਉਹਾਰ ਮਨਾਉਣਾ',
        hi: '(1) गोपनीय फ़ाइलें छिपाना, (2) मुँह पर खरा सच बोलना, (3) प्रसन्नता से त्योहार मनाना',
      },
    },
    correct: 'A',
    explanation: {
      en: '"Spill the beans" = divulge a secret; "Beat around the bush" = speak evasively without coming to the main point; "Cry over spilt milk" = waste time feeling sorry about an irreversible past mistake (ਅਬ ਪਛਤਾਏ ਹੋਤ ਕਿਆ ਜਬ ਚਿੜੀਆ ਚੁਗ ਗਈ ਖੇਤ).',
      pa: '"Spill the beans" = ਭੇਤ ਖੋਲ੍ਹ ਦੇਣਾ; "Beat around the bush" = ਅਸਲ ਗੱਲ ਛੱਡ ਕੇ ਇੱਧਰ-ਉੱਧਰ ਦੀਆਂ ਮਾਰਨੀਆਂ; "Cry over spilt milk" = ਲੰਘੇ ਵੇਲੇ ਜਾਂ ਹੋ ਚੁੱਕੇ ਨੁਕਸਾਨ ’ਤੇ ਵਿਅਰਥ ਪਛਤਾਉਣਾ।',
      hi: '"Spill the beans" = राज़ खोल देना; "Beat around the bush" = मुख्य बात छोड़कर घुमा-फिराकर बात करना; "Cry over spilt milk" = बीती बात या हो चुके नुकसान पर व्यर्थ पछताना।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-19',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Identify the option in which ALL three commonly tested administrative English words are spelled 100% correctly:',
      pa: 'ਉਹ ਵਿਕਲਪ ਚੁਣੋ ਜਿਸ ਵਿੱਚ ਤਿੰਨੇ ਅੰਗਰੇਜ਼ੀ ਸ਼ਬਦਾਂ ਦੇ ਸ਼ਬਦ-ਜੋੜ (Spellings) ਬਿਲਕੁਲ ਸਹੀ ਹਨ:',
      hi: 'वह विकल्प चुनें जिसमें तीनों अंग्रेज़ी शब्दों की वर्तनी (Spellings) बिल्कुल शुद्ध है:',
    },
    options: {
      A: {
        en: 'Accommodation, Embarrassment, Bureaucracy',
        pa: 'Accommodation, Embarrassment, Bureaucracy',
        hi: 'Accommodation, Embarrassment, Bureaucracy',
      },
      B: {
        en: 'Accomodation, Embarassment, Bureacracy',
        pa: 'Accomodation, Embarassment, Bureacracy',
        hi: 'Accomodation, Embarassment, Bureacracy',
      },
      C: {
        en: 'Acommodation, Embarrasment, Beurocracy',
        pa: 'Acommodation, Embarrasment, Beurocracy',
        hi: 'Acommodation, Embarrasment, Beurocracy',
      },
      D: {
        en: 'Accommodation, Embarasment, Burocracy',
        pa: 'Accommodation, Embarasment, Burocracy',
        hi: 'Accommodation, Embarasment, Burocracy',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Memory aid for exam spellings: "Accommodation" has double C and double M (cc + mm); "Embarrassment" has double R and double S (rr + ss); "Bureaucracy" starts with French root "Bureau-" (B-u-r-e-a-u-c-r-a-c-y).',
      pa: 'ਯਾਦ ਰੱਖਣ ਦਾ ਨਿਯਮ: "Accommodation" ਵਿੱਚ ਡਬਲ c ਅਤੇ ਡਬਲ m (cc, mm) ਆਉਂਦਾ ਹੈ; "Embarrassment" ਵਿੱਚ ਡਬਲ r ਅਤੇ ਡਬਲ s (rr, ss) ਆਉਂਦਾ ਹੈ; ਅਤੇ "Bureaucracy" ਵਿੱਚ Bureau + cracy ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ।',
      hi: 'स्मरण नियम: "Accommodation" में डबल c और डबल m (cc, mm) आता है; "Embarrassment" में डबल r और डबल s (rr, ss) आता है; तथा "Bureaucracy" में Bureau + cracy जुड़ता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-20',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Which option contains the correct spellings for all three official words?',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜੇ ਵਿਕਲਪ ਵਿੱਚ ਤਿੰਨੇ ਦਫ਼ਤਰੀ ਸ਼ਬਦਾਂ ਦੇ Spellings ਬਿਲਕੁਲ ਸ਼ੁੱਧ ਹਨ?',
      hi: 'निम्नलिखित में से किस विकल्प में तीनों कार्यालयी शब्दों की वर्तनी (Spellings) बिल्कुल शुद्ध है?',
    },
    options: {
      A: {
        en: 'Maintenance, Committee, Questionnaire',
        pa: 'Maintenance, Committee, Questionnaire',
        hi: 'Maintenance, Committee, Questionnaire',
      },
      B: {
        en: 'Maintainance, Commitee, Questionaire',
        pa: 'Maintainance, Commitee, Questionaire',
        hi: 'Maintainance, Commitee, Questionaire',
      },
      C: {
        en: 'Maintenence, Comittee, Questionnair',
        pa: 'Maintenence, Comittee, Questionnair',
        hi: 'Maintenence, Comittee, Questionnair',
      },
      D: {
        en: 'Maintainence, Committee, Questionnare',
        pa: 'Maintainence, Committee, Questionnare',
        hi: 'Maintainence, Committee, Questionnare',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Notice the spelling traps: "Maintain" changes to "-ten-" in "Maintenance" (not Maintainance); "Committee" has double M, double T, and double E (mm + tt + ee); "Questionnaire" has double N (nn) and ends in "-aire".',
      pa: 'ਧਿਆਨ ਦਿਓ: "Maintenance" ਵਿੱਚ ten ਆਉਂਦਾ ਹੈ (tain ਨਹੀਂ); "Committee" ਵਿੱਚ ਡਬਲ m, ਡਬਲ t ਅਤੇ ਡਬਲ e (mm, tt, ee) ਹੁੰਦਾ ਹੈ; ਅਤੇ "Questionnaire" ਵਿੱਚ ਡਬਲ n (nn) ਆਉਂਦਾ ਹੈ।',
      hi: 'ध्यान दें: "Maintenance" में ten आता है (tain नहीं); "Committee" में डबल m, डबल t और डबल e (mm, tt, ee) होता है; तथा "Questionnaire" में डबल n (nn) आता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-21',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Fill in the blanks using the correct prepositions ("between/among" and "since/for"): "The property was divided equally ________ the two brothers, whereas the bonus was distributed ________ all the fifty clerks who had been working ________ 2018."',
      pa: '"between/among" ਅਤੇ "since/for" ਦੀ ਸਹੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋਏ ਖਾਲੀ ਥਾਵਾਂ ਭਰੋ: "The property was divided equally ________ the two brothers, whereas the bonus was distributed ________ all the fifty clerks who had been working ________ 2018."',
      hi: '"between/among" और "since/for" का सही प्रयोग करते हुए रिक्त स्थान भरें: "The property was divided equally ________ the two brothers, whereas the bonus was distributed ________ all the fifty clerks who had been working ________ 2018."',
    },
    options: {
      A: {
        en: 'between, among, since — "between" for two, "among" for more than two, and "since" for a specific point in time (2018)',
        pa: 'between, among, since — ਦੋ ਲਈ "between", ਦੋ ਤੋਂ ਵੱਧ ਲਈ "among", ਅਤੇ ਨਿਸ਼ਚਿਤ ਸਮੇਂ (2018) ਲਈ "since"',
        hi: 'between, among, since — दो के लिए "between", दो से अधिक के लिए "among", और निश्चित समय बिंदु (2018) के लिए "since"',
      },
      B: {
        en: 'among, between, for — "among" for two, "between" for fifty, and "for" with the year 2018',
        pa: 'among, between, for — ਦੋ ਲਈ "among", ਪੰਜਾਹ ਲਈ "between" ਅਤੇ ਸਾਲ 2018 ਨਾਲ "for"',
        hi: 'among, between, for — दो के लिए "among", पचास के लिए "between" और वर्ष 2018 के साथ "for"',
      },
      C: {
        en: 'between, among, for — because "for" is used with calendar years',
        pa: 'between, among, for — ਕਿਉਂਕਿ ਸਾਲ ਦੇ ਨਾਂ ਨਾਲ "for" ਲੱਗਦਾ ਹੈ',
        hi: 'between, among, for — क्योंकि कैलेंडर वर्ष के साथ "for" लगता है',
      },
      D: {
        en: 'among, among, since — because "among" is used for all plural nouns',
        pa: 'among, among, since — ਕਿਉਂਕਿ ਸਾਰੇ ਬਹੁਵਚਨ ਨਾਂਵਾਂ ਨਾਲ "among" ਲੱਗਦਾ ਹੈ',
        hi: 'among, among, since — क्योंकि सभी बहुवचन संज्ञाओं के साथ "among" लगता है',
      },
    },
    correct: 'A',
    explanation: {
      en: '"Between" is used for two distinct persons/things ("the two brothers"); "Among" is used for more than two ("all the fifty clerks"); "Since" denotes a specific point in time ("since 2018", "since Monday"), while "For" denotes a duration/period of time ("for six years").',
      pa: 'ਦੋ ਵਿਅਕਤੀਆਂ ਜਾਂ ਚੀਜ਼ਾਂ ਲਈ "between" ਅਤੇ ਦੋ ਤੋਂ ਵੱਧ ਲਈ "among" ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। ਨਿਸ਼ਚਿਤ ਸਮੇਂ (Point of time — 2018) ਲਈ "since" ਅਤੇ ਸਮੇਂ ਦੀ ਮਿਆਦ (Period of time — 6 years) ਲਈ "for" ਲੱਗਦਾ ਹੈ।',
      hi: 'दो व्यक्तियों या वस्तुओं के लिए "between" तथा दो से अधिक के लिए "among" का प्रयोग होता है। निश्चित समय बिंदु (Point of time — 2018) के लिए "since" और समयावधि (Period of time — 6 years) के लिए "for" लगता है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-22',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Choose the correct verb and pronoun agreement for distributive pronouns: "Each of the shortlisted candidates ________ required to bring ________ original certificates for scrutiny."',
      pa: 'Distributive Pronoun ਦੇ ਨਿਯਮ ਅਨੁਸਾਰ ਖਾਲੀ ਥਾਵਾਂ ਭਰੋ: "Each of the shortlisted candidates ________ required to bring ________ original certificates for scrutiny."',
      hi: 'Distributive Pronoun के नियम के अनुसार रिक्त स्थान भरें: "Each of the shortlisted candidates ________ required to bring ________ original certificates for scrutiny."',
    },
    options: {
      A: {
        en: 'is, his/her — "Each of / Either of / Neither of + Plural Noun" always takes a singular verb and a singular possessive pronoun',
        pa: 'is, his/her — "Each of / Either of / Neither of + ਬਹੁਵਚਨ ਨਾਂਵ" ਨਾਲ ਹਮੇਸ਼ਾ ਇੱਕਵਚਨ ਕਿਰਿਆ ਅਤੇ ਇੱਕਵਚਨ ਪੜਨਾਂਵ ਲੱਗਦਾ ਹੈ',
        hi: 'is, his/her — "Each of / Either of / Neither of + बहुवचन संज्ञा" के साथ सदैव एकवचन क्रिया और एकवचन सर्वनाम लगता है',
      },
      B: {
        en: 'are, their — because "shortlisted candidates" is plural',
        pa: 'are, their — ਕਿਉਂਕਿ "shortlisted candidates" ਬਹੁਵਚਨ ਹੈ',
        hi: 'are, their — क्योंकि "shortlisted candidates" बहुवचन है',
      },
      C: {
        en: 'is, their — singular verb but plural pronoun',
        pa: 'is, their — ਇੱਕਵਚਨ ਕਿਰਿਆ ਪਰ ਬਹੁਵਚਨ ਪੜਨਾਂਵ',
        hi: 'is, their — एकवचन क्रिया परंतु बहुवचन सर्वनाम',
      },
      D: {
        en: 'were, our — past plural verb with first person pronoun',
        pa: 'were, our — ਬਹੁਵਚਨ ਕਿਰਿਆ ਅਤੇ ਉੱਤਮ ਪੁਰਖ ਪੜਨਾਂਵ',
        hi: 'were, our — बहुवचन क्रिया और उत्तम पुरुष सर्वनाम',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Distributive pronouns ("Each of", "Either of", "Neither of", "Every one of") are followed by a plural noun/pronoun, but they refer to individuals one at a time; hence they strictly take a singular verb ("is") and singular possessive adjective ("his/her").',
      pa: '"Each of", "Either of", "Neither of" ਤੋਂ ਬਾਅਦ ਨਾਂਵ ਭਾਵੇਂ ਬਹੁਵਚਨ ("candidates") ਆਉਂਦਾ ਹੈ, ਪਰ ਇਸ ਵਿੱਚ ਹਰੇਕ ਵਿਅਕਤੀ ਦੀ ਇਕੱਲੇ-ਇਕੱਲੇ ਵਜੋਂ ਗੱਲ ਹੁੰਦੀ ਹੈ, ਇਸ ਲਈ ਕਿਰਿਆ ("is") ਅਤੇ ਪੜਨਾਂਵ ("his/her") ਦੋਵੇਂ ਇੱਕਵਚਨ ਲੱਗਦੇ ਹਨ।',
      hi: '"Each of", "Either of", "Neither of" के बाद संज्ञा भले ही बहुवचन ("candidates") आती है, किंतु यह प्रत्येक व्यक्ति का एक-एक करके बोध कराता है; इसलिए क्रिया ("is") और सर्वनाम ("his/her") दोनों एकवचन लगते हैं।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-23',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Change the following negative imperative sentence into Indirect Narration: The Office Superintendent said to the clerk, "Do not disclose confidential file notes to outsiders."',
      pa: 'ਹੇਠ ਲਿਖੇ ਹੁਕਮੀਆ ਵਾਕ ਨੂੰ Indirect Narration ਵਿੱਚ ਬਦਲੋ: The Office Superintendent said to the clerk, "Do not disclose confidential file notes to outsiders."',
      hi: 'निम्नलिखित आज्ञासूचक वाक्य को Indirect Narration में बदलें: The Office Superintendent said to the clerk, "Do not disclose confidential file notes to outsiders."',
    },
    options: {
      A: {
        en: 'The Office Superintendent ordered the clerk not to disclose confidential file notes to outsiders. (OR forbade the clerk to disclose...)',
        pa: 'The Office Superintendent ordered the clerk not to disclose confidential file notes to outsiders. (ਜਾਂ forbade the clerk to disclose...)',
        hi: 'The Office Superintendent ordered the clerk not to disclose confidential file notes to outsiders. (या forbade the clerk to disclose...)',
      },
      B: {
        en: 'The Office Superintendent forbade the clerk not to disclose confidential file notes to outsiders.',
        pa: 'The Office Superintendent forbade the clerk not to disclose confidential file notes to outsiders.',
        hi: 'The Office Superintendent forbade the clerk not to disclose confidential file notes to outsiders.',
      },
      C: {
        en: 'The Office Superintendent ordered the clerk to not disclosed confidential file notes to outsiders.',
        pa: 'The Office Superintendent ordered the clerk to not disclosed confidential file notes to outsiders.',
        hi: 'The Office Superintendent ordered the clerk to not disclosed confidential file notes to outsiders.',
      },
      D: {
        en: 'The Office Superintendent told the clerk that do not disclose confidential file notes to outsiders.',
        pa: 'The Office Superintendent told the clerk that do not disclose confidential file notes to outsiders.',
        hi: 'The Office Superintendent told the clerk that do not disclose confidential file notes to outsiders.',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Negative imperatives ("Do not + V1") convert to Indirect Speech in two ways: 1. Using ordered/advised/instructed + object + "not to + V1"; or 2. Using "forbade" + object + "to + V1" (without "not", since "forbade" is already negative and using "not" with "forbade" creates a double negative error).',
      pa: '"Do not + V1" ਵਾਲੇ ਹੁਕਮੀਆ ਵਾਕਾਂ ਨੂੰ ਬਦਲਣ ਸਮੇਂ "ordered/advised + object + not to + V1" ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। ਜੇਕਰ "forbade" ਵਰਤਿਆ ਜਾਵੇ ਤਾਂ ਉਸ ਨਾਲ "not" ਨਹੀਂ ਲੱਗਦਾ ਕਿਉਂਕਿ "forbade" ਦਾ ਆਪਣਾ ਅਰਥ ਹੀ ਮਨ੍ਹਾ ਕਰਨਾ ਹੈ।',
      hi: '"Do not + V1" वाले आज्ञासूचक वाक्यों को बदलते समय "ordered/advised + object + not to + V1" का प्रयोग होता है। यदि "forbade" का प्रयोग हो तो उसके साथ "not" नहीं लगता क्योंकि "forbade" स्वयं नकारात्मक है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-24',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'Identify the grammatical error or choose the correct replacement in the First Conditional sentence: "Unless you will not submit the fee receipt by Friday, your application will be rejected."',
      pa: 'First Conditional ਵਾਕ ਵਿੱਚੋਂ ਗ਼ਲਤੀ ਸੋਧ ਕੇ ਸਹੀ ਵਿਕਲਪ ਚੁਣੋ: "Unless you will not submit the fee receipt by Friday, your application will be rejected."',
      hi: 'First Conditional वाक्य में त्रुटि सुधारकर सही विकल्प चुनें: "Unless you will not submit the fee receipt by Friday, your application will be rejected."',
    },
    options: {
      A: {
        en: '"Unless you submit" — because "Unless" means "If not" (so it never takes "not"), and a conditional clause in First Conditional uses Simple Present tense instead of "will"',
        pa: '"Unless you submit" — ਕਿਉਂਕਿ "Unless" ਆਪਣੇ ਆਪ ਵਿੱਚ ਨਕਾਰਾਤਮਕ ਹੈ (ਨਾਲ "not" ਨਹੀਂ ਲੱਗਦਾ) ਅਤੇ ਸ਼ਰਤ ਵਾਲੇ ਉਪਵਾਕ ਵਿੱਚ "will" ਦੀ ਬਜਾਏ Present Indefinite ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ',
        hi: '"Unless you submit" — क्योंकि "Unless" स्वयं नकारात्मक है (साथ में "not" नहीं लगता) और शर्त वाले उपवाक्य में "will" के स्थान पर Present Indefinite प्रयुक्त होता है',
      },
      B: {
        en: '"Unless you do not submit" — removing "will" but keeping "do not" for emphasis',
        pa: '"Unless you do not submit" — "will" ਹਟਾ ਕੇ ਜ਼ੋਰ ਦੇਣ ਲਈ "do not" ਰੱਖਣਾ',
        hi: '"Unless you do not submit" — "will" हटाकर ज़ोर देने के लिए "do not" रखना',
      },
      C: {
        en: '"Unless you will submit" — removing "not" while retaining future modal "will" after Unless',
        pa: '"Unless you will submit" — "not" ਹਟਾ ਕੇ "Unless" ਤੋਂ ਬਾਅਦ "will" ਰੱਖਣਾ',
        hi: '"Unless you will submit" — "not" हटाकर "Unless" के बाद "will" रखना',
      },
      D: {
        en: '"Unless you submitted" — changing the condition to Simple Past while keeping "will" in the main clause',
        pa: '"Unless you submitted" — ਪਹਿਲੇ ਹਿੱਸੇ ਨੂੰ Past ਵਿੱਚ ਬਦਲਣਾ',
        hi: '"Unless you submitted" — प्रथम भाग को Past में बदलना',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Two golden rules for "Unless" and "Until": 1. They are inherently negative, so never use "not" in the clause they introduce; 2. In future time/conditional clauses starting with if, unless, until, when, as soon as, use Simple Present ("submit"), never "will/shall".',
      pa: '"Unless" ਅਤੇ "Until" ਦੇ ਦੋ ਮੁੱਖ ਨਿਯਮ ਹਨ: 1. ਇਹ ਸ਼ਬਦ ਆਪ ਨਕਾਰਾਤਮਕ ਹਨ, ਇਸ ਲਈ ਇਹਨਾਂ ਵਾਲੇ ਉਪਵਾਕ ਵਿੱਚ ਦੁਬਾਰਾ "not" ਨਹੀਂ ਲੱਗਦਾ; 2. ਸ਼ਰਤ ਵਾਲੇ ਉਪਵਾਕ ਵਿੱਚ ਭਵਿੱਖ ਲਈ ਵੀ "will" ਦੀ ਬਜਾਏ Present Simple ("Unless you submit") ਲੱਗਦਾ ਹੈ।',
      hi: '"Unless" और "Until" के दो मुख्य नियम हैं: 1. ये शब्द स्वयं नकारात्मक हैं, इसलिए इनके उपवाक्य में "not" नहीं लगता; 2. शर्त या समय सूचक उपवाक्य में भविष्य के लिए भी "will" के स्थान पर Present Simple ("Unless you submit") लगता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-eng-25',
    topicId: 'english-grammar-lit',
    subjectId: 'clerk-english',
    examTag: 'PSSSB & PPSC Clerk English',
    question: {
      en: 'What is the Synonym and Antonym of the word "Audacious", and what is the Passive Voice of "The clerk must verify the documents"?',
      pa: '"Audacious" ਸ਼ਬਦ ਦਾ ਸਮਾਨਾਰਥਕ ਤੇ ਵਿਰੋਧਾਰਥਕ ਦੱਸੋ, ਅਤੇ "The clerk must verify the documents" ਦਾ ਸਹੀ Passive Voice ਚੁਣੋ:',
      hi: '"Audacious" शब्द का पर्यायवाची व विलोम बताइए, तथा "The clerk must verify the documents" का सही Passive Voice चुनें:',
    },
    options: {
      A: {
        en: 'Synonym: Bold / Daring | Antonym: Timid / Cowardly | Passive: The documents must be verified by the clerk.',
        pa: 'ਸਮਾਨਾਰਥਕ: Bold / Daring (ਦਲੇਰ) | ਵਿਰੋਧਾਰਥਕ: Timid / Cowardly (ਡਰਪੋਕ) | Passive: The documents must be verified by the clerk.',
        hi: 'पर्यायवाची: Bold / Daring (साहसी/निडर) | विलोम: Timid / Cowardly (डरपोक) | Passive: The documents must be verified by the clerk.',
      },
      B: {
        en: 'Synonym: Timid | Antonym: Bold | Passive: The documents must verified by the clerk.',
        pa: 'ਸਮਾਨਾਰਥਕ: Timid | ਵਿਰੋਧਾਰਥਕ: Bold | Passive: The documents must verified by the clerk.',
        hi: 'पर्यायवाची: Timid | विलोम: Bold | Passive: The documents must verified by the clerk.',
      },
      C: {
        en: 'Synonym: Loud / Noisy | Antonym: Silent | Passive: The documents have to verify by the clerk.',
        pa: 'ਸਮਾਨਾਰਥਕ: Loud / Noisy | ਵਿਰੋਧਾਰਥਕ: Silent | Passive: The documents have to verify by the clerk.',
        hi: 'पर्यायवाची: Loud / Noisy | विलोम: Silent | Passive: The documents have to verify by the clerk.',
      },
      D: {
        en: 'Synonym: Wealthy | Antonym: Poor | Passive: The documents must been verified by the clerk.',
        pa: 'ਸਮਾਨਾਰਥਕ: Wealthy | ਵਿਰੋਧਾਰਥਕ: Poor | Passive: The documents must been verified by the clerk.',
        hi: 'पर्यायवाची: Wealthy | विलोम: Poor | Passive: The documents must been verified by the clerk.',
      },
    },
    correct: 'A',
    explanation: {
      en: '"Audacious" means showing a willingness to take bold risks (Synonym: Bold, Daring, Intrepid; Antonym: Timid, Cautious, Cowardly). For modal verbs (can, could, may, might, must, should, ought to), Passive Voice follows "Modal + be + V3" ("must be verified").',
      pa: '"Audacious" ਦਾ ਅਰਥ ਹੈ ਨਿਡਰ ਜਾਂ ਦਲੇਰ (Synonym: Bold/Daring; Antonym: Timid/Cowardly)। Modal Verbs (must, can, should) ਦਾ Passive Voice ਬਣਾਉਣ ਵੇਲੇ "Modal + be + V3" ("must be verified") ਲੱਗਦਾ ਹੈ।',
      hi: '"Audacious" का अर्थ है साहसी या निडर (Synonym: Bold/Daring; Antonym: Timid/Cowardly)। Modal Verbs (must, can, should) का Passive Voice बनाते समय "Modal + be + V3" ("must be verified") लगता है।',
    },
    difficulty: 'easy',
  },

  // ===========================================================================
  // SECTION 3: PUNJAB CLERK RECRUITMENT SCHEME, TYPING TEST & OFFICE PROCEDURE
  // topicId: 'punjab-clerk-prep' | subjectId: 'clerk-special' (15 MCQs)
  // ===========================================================================
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-prp-1',
    topicId: 'punjab-clerk-prep',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Special',
    question: {
      en: 'Under the Punjab Civil Services (General and Common Conditions of Service) Rules for Group C recruitment (including PSSSB Clerk), what is the mandatory qualifying rule for the Compulsory Punjabi Language Paper A?',
      pa: 'ਪੰਜਾਬ ਸਰਕਾਰ ਦੀਆਂ ਗਰੁੱਪ-ਸੀ ਭਰਤੀਆਂ (PSSSB ਕਲਰਕ ਸਮੇਤ) ਲਈ ਲਾਜ਼ਮੀ ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦੇ "ਪੇਪਰ-ਏ" (Paper A) ਸੰਬੰਧੀ ਮੁੱਖ ਸ਼ਰਤ ਕੀ ਹੈ?',
      hi: 'पंजाब सरकार की ग्रुप-सी भर्तियों (PSSSB क्लर्क सहित) के लिए अनिवार्य पंजाबी भाषा के "पेपर-ए" (Paper A) संबंधी मुख्य शर्त क्या है?',
    },
    options: {
      A: {
        en: 'Candidates must score a minimum of 50% marks in Paper A ( with no negative marking in Paper A) to have their Paper B evaluated, and Paper A marks are not added to the final merit list',
        pa: 'ਪੇਪਰ-ਬੀ ਦੇ ਮੁਲਾਂਕਣ ਲਈ ਪੇਪਰ-ਏ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ 50% ਅੰਕ ਲੈਣੇ ਲਾਜ਼ਮੀ ਹਨ (ਪੇਪਰ-ਏ ਵਿੱਚ ਕੋਈ ਨੈਗੇਟਿਵ ਮਾਰਕਿੰਗ ਨਹੀਂ ਹੁੰਦੀ) ਅਤੇ ਪੇਪਰ-ਏ ਦੇ ਅੰਕ ਅੰਤਿਮ ਮੈਰਿਟ ਵਿੱਚ ਨਹੀਂ ਜੁੜਦੇ',
        hi: 'पेपर-बी के मूल्यांकन हेतु पेपर-ए में न्यूनतम 50% अंक प्राप्त करना अनिवार्य है (पेपर-ए में कोई नकारात्मक अंकन नहीं होता) और पेपर-ए के अंक अंतिम मेरिट में नहीं जुड़ते',
      },
      B: {
        en: 'Candidates need 33% passing marks in Paper A, and its marks carry 50% weightage in the final selection merit list',
        pa: 'ਪੇਪਰ-ਏ ਵਿੱਚ 33% ਪਾਸ ਅੰਕ ਲੋੜੀਂਦੇ ਹਨ ਅਤੇ ਇਸ ਦੇ ਅੰਕ ਅੰਤਿਮ ਮੈਰਿਟ ਸੂਚੀ ਵਿੱਚ ਜੁੜਦੇ ਹਨ',
        hi: 'पेपर-ए में 33% उत्तीर्ण अंक आवश्यक हैं और इसके अंक अंतिम मेरिट सूची में जोड़े जाते हैं',
      },
      C: {
        en: 'Paper A is optional for candidates who passed Matriculation with Punjabi, and carries 0.50 negative marking',
        pa: 'ਜਿਨ੍ਹਾਂ ਉਮੀਦਵਾਰਾਂ ਨੇ ਦਸਵੀਂ ਪੰਜਾਬੀ ਨਾਲ ਪਾਸ ਕੀਤੀ ਹੈ ਉਹਨਾਂ ਲਈ ਪੇਪਰ-ਏ ਵਿਕਲਪਿਕ ਹੈ ਅਤੇ ਇਸ ਵਿੱਚ 0.50 ਨੈਗੇਟਿਵ ਮਾਰਕਿੰਗ ਹੈ',
        hi: 'जिन अभ्यर्थियों ने दसवीं पंजाबी विषय के साथ उत्तीर्ण की है उनके लिए पेपर-ए वैकल्पिक है और इसमें 0.50 नकारात्मक अंकन है',
      },
      D: {
        en: 'Paper A is conducted only after the typing skill test for shortlisted candidates',
        pa: 'ਪੇਪਰ-ਏ ਕੇਵਲ ਟਾਈਪਿੰਗ ਟੈਸਟ ਪਾਸ ਕਰਨ ਵਾਲੇ ਉਮੀਦਵਾਰਾਂ ਤੋਂ ਬਾਅਦ ਵਿੱਚ ਲਿਆ ਜਾਂਦਾ ਹੈ',
        hi: 'पेपर-ए केवल टाइपिंग टेस्ट उत्तीर्ण करने वाले अभ्यर्थियों से बाद में लिया जाता है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'As per Punjab Government notifications for Group C posts, Paper A (Compulsory Punjabi of Matriculation standard) is a qualifying paper requiring at least 50% marks. There is no negative marking in Paper A, and final merit is prepared strictly on the basis of Paper B marks.',
      pa: 'ਪੰਜਾਬ ਸਰਕਾਰ ਦੇ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਗਰੁੱਪ-ਸੀ ਦੀਆਂ ਅਸਾਮੀਆਂ ਲਈ ਲਾਜ਼ਮੀ ਪੰਜਾਬੀ ਦਾ ਪੇਪਰ-ਏ ਕੇਵਲ ਕੁਆਲੀਫਾਈਂਗ (Qualifying) ਹੈ ਜਿਸ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ 50% ਅੰਕ ਲੈਣੇ ਲਾਜ਼ਮੀ ਹਨ। ਇਸ ਵਿੱਚ ਨੈਗੇਟਿਵ ਮਾਰਕਿੰਗ ਨਹੀਂ ਹੁੰਦੀ ਅਤੇ ਮੈਰਿਟ ਕੇਵਲ ਪੇਪਰ-ਬੀ ਦੇ ਅੰਕਾਂ ਦੇ ਆਧਾਰ ’ਤੇ ਬਣਦੀ ਹੈ।',
      hi: 'पंजाब सरकार के नियमों के अनुसार ग्रुप-सी पदों के लिए अनिवार्य पंजाबी का पेपर-ए केवल क्वालिफाइंग (अर्हक) है जिसमें कम-से-कम 50% अंक लाना अनिवार्य है। इसमें नकारात्मक अंकन नहीं होता और अंतिम मेरिट केवल पेपर-बी के अंकों पर बनती है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-prp-2',
    topicId: 'punjab-clerk-prep',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Special',
    question: {
      en: 'In the PSSSB & PPSC Clerk / Senior Assistant Paper B competitive examination, what is the standard rate of negative marking for each incorrect multiple-choice response?',
      pa: 'PSSSB ਅਤੇ PPSC ਕਲਰਕ / ਸੀਨੀਅਰ ਸਹਾਇਕ ਦੇ "ਪੇਪਰ-ਬੀ" (Paper B) ਵਿੱਚ ਹਰੇਕ ਗ਼ਲਤ ਉੱਤਰ ਲਈ ਕਿੰਨੀ ਨੈਗੇਟਿਵ ਮਾਰਕਿੰਗ (Negative Marking) ਰੱਖੀ ਜਾਂਦੀ ਹੈ?',
      hi: 'PSSSB और PPSC क्लर्क / सीनियर असिस्टेंट के "पेपर-बी" (Paper B) में प्रत्येक गलत उत्तर के लिए कितना नकारात्मक अंकन (Negative Marking) किया जाता है?',
    },
    options: {
      A: {
        en: '1/4th (25% or 0.25 mark per 1-mark question) of the marks assigned to that question is deducted for every wrong answer',
        pa: 'ਪ੍ਰਸ਼ਨ ਦੇ ਕੁੱਲ ਅੰਕਾਂ ਦਾ 1/4 ਹਿੱਸਾ (25% ਭਾਵ 1 ਅੰਕ ਦੇ ਪ੍ਰਸ਼ਨ ਪਿੱਛੇ 0.25 ਅੰਕ) ਹਰੇਕ ਗ਼ਲਤ ਉੱਤਰ ਲਈ ਕੱਟਿਆ ਜਾਂਦਾ ਹੈ',
        hi: 'प्रश्न के निर्धारित अंकों का 1/4 भाग (25% अर्थात् 1 अंक के प्रश्न पर 0.25 अंक) प्रत्येक गलत उत्तर के लिए काटा जाता है',
      },
      B: {
        en: '1/2 (50% or 0.50 mark per 1-mark question) is deducted for every wrong or unattempted answer',
        pa: 'ਹਰੇਕ ਗ਼ਲਤ ਜਾਂ ਖਾਲੀ ਛੱਡੇ ਪ੍ਰਸ਼ਨ ਲਈ 1/2 ਹਿੱਸਾ (0.50 ਅੰਕ) ਕੱਟਿਆ ਜਾਂਦਾ ਹੈ',
        hi: 'प्रत्येक गलत या खाली छोड़े गए प्रश्न के लिए 1/2 भाग (0.50 अंक) काटा जाता है',
      },
      C: {
        en: '1/3rd (33.33%) is deducted for unattempted questions only',
        pa: 'ਕੇਵਲ ਖਾਲੀ ਛੱਡੇ ਗਏ ਪ੍ਰਸ਼ਨਾਂ ਲਈ 1/3 ਹਿੱਸਾ (33.33%) ਕੱਟਿਆ ਜਾਂਦਾ ਹੈ',
        hi: 'केवल अनुत्तरित प्रश्नों के लिए 1/3 भाग (33.33%) काटा जाता है',
      },
      D: {
        en: 'There is zero negative marking in Paper B of PSSSB and PPSC exams',
        pa: 'ਪੇਪਰ-ਬੀ ਵਿੱਚ ਕੋਈ ਵੀ ਨੈਗੇਟਿਵ ਮਾਰਕਿੰਗ ਨਹੀਂ ਹੁੰਦੀ',
        hi: 'पेपर-बी में कोई नकारात्मक अंकन नहीं होता',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Paper B of PSSSB Clerk (1 mark per question → 0.25 deduction) and PPSC Senior Assistant (2.5 or 4 marks per question → 1/4th deduction), 25% (1/4th) of the question’s mark is deducted for each incorrect answer.',
      pa: 'PSSSB ਕਲਰਕ ਅਤੇ PPSC ਸੀਨੀਅਰ ਸਹਾਇਕ ਦੇ ਪੇਪਰ-ਬੀ ਵਿੱਚ ਹਰੇਕ ਗ਼ਲਤ ਉੱਤਰ ਪਿੱਛੇ ਪ੍ਰਸ਼ਨ ਦੇ ਅੰਕਾਂ ਦਾ 1/4 ਹਿੱਸਾ (25%, ਜਿਵੇਂ 1 ਅੰਕ ਵਾਲੇ ਪ੍ਰਸ਼ਨ ਲਈ 0.25 ਅੰਕ) ਕੱਟਿਆ ਜਾਂਦਾ ਹੈ।',
      hi: 'PSSSB क्लर्क और PPSC सीनियर असिस्टेंट के पेपर-बी में प्रत्येक गलत उत्तर के लिए प्रश्न के अंकों का 1/4 भाग (25%, जैसे 1 अंक वाले प्रश्न के लिए 0.25 अंक) काटा जाता है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-prp-3',
    topicId: 'punjab-clerk-prep',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Special',
    question: {
      en: 'What are the mandatory speed, duration, word-count, and minimum accuracy benchmarks in the English and Punjabi Computer Typing Skill Test for PSSSB Clerk?',
      pa: 'PSSSB ਕਲਰਕ ਦੀ ਭਰਤੀ ਲਈ ਅੰਗਰੇਜ਼ੀ ਅਤੇ ਪੰਜਾਬੀ ਕੰਪਿਊਟਰ ਟਾਈਪਿੰਗ ਟੈਸਟ ਵਿੱਚ ਲੋੜੀਂਦੀ ਰਫ਼ਤਾਰ (Speed), ਸਮਾਂ, ਕੁੱਲ ਸ਼ਬਦ ਅਤੇ ਘੱਟੋ-ਘੱਟ ਸ਼ੁੱਧਤਾ (Accuracy) ਦੇ ਮਾਪਦੰਡ ਕੀ ਹਨ?',
      hi: 'PSSSB क्लर्क भर्ती के लिए अंग्रेज़ी और पंजाबी कंप्यूटर टाइपिंग कौशल परीक्षा में आवश्यक गति (Speed), समय, कुल शब्द और न्यूनतम शुद्धता (Accuracy) के मानदंड क्या हैं?',
    },
    options: {
      A: {
        en: '30 Words Per Minute (WPM) in both English and Punjabi, 10 minutes duration per language (300 words passage), with a minimum of 92% accuracy (maximum 8% mistakes allowed)',
        pa: 'ਅੰਗਰੇਜ਼ੀ ਅਤੇ ਪੰਜਾਬੀ ਦੋਵਾਂ ਵਿੱਚ 30 ਸ਼ਬਦ ਪ੍ਰਤੀ ਮਿੰਟ (30 WPM) ਦੀ ਰਫ਼ਤਾਰ, 10-10 ਮਿੰਟ ਦਾ ਸਮਾਂ (300 ਸ਼ਬਦਾਂ ਦਾ ਪੈਰਾ) ਅਤੇ ਘੱਟੋ-ਘੱਟ 92% ਸ਼ੁੱਧਤਾ (ਵੱਧ ਤੋਂ ਵੱਧ 8% ਗ਼ਲਤੀਆਂ ਦੀ ਛੋਟ)',
        hi: 'अंग्रेज़ी और पंजाबी दोनों में 30 शब्द प्रति मिनट (30 WPM) की गति, प्रति भाषा 10 मिनट का समय (300 शब्दों का गद्यांश) और न्यूनतम 92% शुद्धता (अधिकतम 8% त्रुटियाँ अनुमन्य)',
      },
      B: {
        en: '45 WPM in English and 20 WPM in Punjabi, 15 minutes duration, with 80% accuracy',
        pa: 'ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ 45 WPM ਅਤੇ ਪੰਜਾਬੀ ਵਿੱਚ 20 WPM, 15 ਮਿੰਟ ਦਾ ਸਮਾਂ ਅਤੇ 80% ਸ਼ੁੱਧਤਾ',
        hi: 'अंग्रेज़ी में 45 WPM और पंजाबी में 20 WPM, 15 मिनट का समय और 80% शुद्धता',
      },
      C: {
        en: '25 WPM in Punjabi only, 5 minutes duration (125 words), with 95% accuracy',
        pa: 'ਕੇਵਲ ਪੰਜਾਬੀ ਵਿੱਚ 25 WPM, 5 ਮਿੰਟ ਦਾ ਸਮਾਂ (125 ਸ਼ਬਦ) ਅਤੇ 95% ਸ਼ੁੱਧਤਾ',
        hi: 'केवल पंजाबी में 25 WPM, 5 मिनट का समय (125 शब्द) और 95% शुद्धता',
      },
      D: {
        en: '35 WPM in English and 35 WPM in Punjabi, 20 minutes duration, with 100% accuracy',
        pa: 'ਅੰਗਰੇਜ਼ੀ ਅਤੇ ਪੰਜਾਬੀ ਦੋਵਾਂ ਵਿੱਚ 35 WPM, 20 ਮਿੰਟ ਦਾ ਸਮਾਂ ਅਤੇ 100% ਸ਼ੁੱਧਤਾ',
        hi: 'अंग्रेज़ी और पंजाबी दोनों में 35 WPM, 20 मिनट का समय और 100% शुद्धता',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Under Punjab Civil Services Rules, candidates for Clerk posts must qualify both English and Punjabi typing tests at 30 WPM (a 300-word passage in 10 minutes for each language) with at least 92% accuracy (no more than 8% errors).',
      pa: 'ਪੰਜਾਬ ਸਿਵਲ ਸੇਵਾਵਾਂ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਕਲਰਕ ਦੀ ਅਸਾਮੀ ਲਈ ਉਮੀਦਵਾਰ ਨੂੰ ਅੰਗਰੇਜ਼ੀ ਅਤੇ ਪੰਜਾਬੀ ਦੋਵਾਂ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ 30 ਸ਼ਬਦ ਪ੍ਰਤੀ ਮਿੰਟ (10 ਮਿੰਟਾਂ ਵਿੱਚ 300 ਸ਼ਬਦ) ਦੀ ਰਫ਼ਤਾਰ ਅਤੇ ਘੱਟੋ-ਘੱਟ 92% ਸ਼ੁੱਧਤਾ (ਵੱਧ ਤੋਂ ਵੱਧ 8% ਗ਼ਲਤੀਆਂ) ਨਾਲ ਟਾਈਪਿੰਗ ਟੈਸਟ ਪਾਸ ਕਰਨਾ ਲਾਜ਼ਮੀ ਹੈ।',
      hi: 'पंजाब सिविल सेवा नियमों के अनुसार क्लर्क पद के लिए अभ्यर्थी को अंग्रेज़ी और पंजाबी दोनों भाषाओं में 30 शब्द प्रति मिनट (10 मिनट में 300 शब्द) की गति और न्यूनतम 92% शुद्धता (अधिकतम 8% त्रुटियाँ) के साथ टाइपिंग टेस्ट उत्तीर्ण करना अनिवार्य है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-prp-4',
    topicId: 'punjab-clerk-prep',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Special',
    question: {
      en: 'Which Unicode-compliant Punjabi font and keyboard layout are officially mandated by the Punjab Government (PSSSB & PPSC) for the Punjabi Computer Typing Skill Test?',
      pa: 'ਪੰਜਾਬ ਸਰਕਾਰ (PSSSB ਅਤੇ PPSC) ਵੱਲੋਂ ਪੰਜਾਬੀ ਕੰਪਿਊਟਰ ਟਾਈਪਿੰਗ ਟੈਸਟ ਲਈ ਕਿਹੜਾ ਯੂਨੀਕੋਡ (Unicode) ਫੌਂਟ ਅਤੇ ਕੀ-ਬੋਰਡ ਲੇਆਉਟ ਅਧਿਕਾਰਤ ਤੌਰ ’ਤੇ ਲਾਜ਼ਮੀ ਕੀਤਾ ਗਿਆ ਹੈ?',
      hi: 'पंजाब सरकार (PSSSB और PPSC) द्वारा पंजाबी कंप्यूटर टाइपिंग कौशल परीक्षा के लिए कौन-सा यूनिकोड (Unicode) फ़ॉन्ट और कीबोर्ड लेआउट आधिकारिक रूप से अनिवार्य किया गया है?',
    },
    options: {
      A: {
        en: 'Raavi (ਰਾਵੀ) Unicode Font with InScript Keyboard Layout',
        pa: 'ਰਾਵੀ (Raavi) ਯੂਨੀਕੋਡ ਫੌਂਟ ਅਤੇ ਇਨਸਕ੍ਰਿਪਟ (InScript) ਕੀ-ਬੋਰਡ ਲੇਆਉਟ',
        hi: 'रावी (Raavi) यूनिकोड फ़ॉन्ट और इनस्क्रिप्ट (InScript) कीबोर्ड लेआउट',
      },
      B: {
        en: 'AnmolLipi non-Unicode Font with Phonetic Keyboard Layout',
        pa: 'ਅਨਮੋਲ ਲਿਪੀ (AnmolLipi) ਫੌਂਟ ਅਤੇ ਫੋਨੈਟਿਕ (Phonetic) ਕੀ-ਬੋਰਡ ਲੇਆਉਟ',
        hi: 'अनमोल लिपि (AnmolLipi) फ़ॉन्ट और फ़ोनेटिक (Phonetic) कीबोर्ड लेआउट',
      },
      C: {
        en: 'Joy / Asees Font with Remington Typewriter Layout',
        pa: 'ਜੌਏ / ਅਸੀਸ (Joy / Asees) ਫੌਂਟ ਅਤੇ ਰੈਮਿੰਗਟਨ ਟਾਈਪਰਾਈਟਰ ਲੇਆਉਟ',
        hi: 'जॉय / असीस (Joy / Asees) फ़ॉन्ट और रेमिंगटन टाइपराइटर लेआउट',
      },
      D: {
        en: 'Satluj Font with Google Transliteration Layout',
        pa: 'ਸਤਲੁਜ (Satluj) ਫੌਂਟ ਅਤੇ ਗੂਗਲ ਟ੍ਰਾਂਸਲਿਟਰੇਸ਼ਨ ਲੇਆਉਟ',
        hi: 'सतलुज (Satluj) फ़ॉन्ट और गूगल ट्रांसलिटरेशन लेआउट',
      },
    },
    correct: 'A',
    explanation: {
      en: 'The Department of Governance Reforms and PSSSB/PPSC mandate the Unicode-compliant "Raavi" font using the Government of India standard "InScript" (Indian Script) keyboard layout for all official Punjabi typing tests.',
      pa: 'ਪੰਜਾਬ ਸਰਕਾਰ ਅਤੇ PSSSB/PPSC ਵੱਲੋਂ ਪੰਜਾਬੀ ਟਾਈਪਿੰਗ ਟੈਸਟ ਲਈ ਯੂਨੀਕੋਡ ਮਾਪਦੰਡ ਵਾਲਾ "ਰਾਵੀ (Raavi)" ਫੌਂਟ ਅਤੇ ਭਾਰਤ ਸਰਕਾਰ ਵੱਲੋਂ ਪ੍ਰਵਾਨਿਤ "ਇਨਸਕ੍ਰਿਪਟ (InScript)" ਕੀ-ਬੋਰਡ ਲੇਆਉਟ ਲਾਜ਼ਮੀ ਕੀਤਾ ਗਿਆ ਹੈ।',
      hi: 'पंजाब सरकार तथा PSSSB/PPSC द्वारा पंजाबी टाइपिंग परीक्षा के लिए यूनिकोड मानक वाला "रावी (Raavi)" फ़ॉन्ट और भारत सरकार द्वारा मानकीकृत "इनस्क्रिप्ट (InScript)" कीबोर्ड लेआउट अनिवार्य किया गया है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-prp-5',
    topicId: 'punjab-clerk-prep',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Special',
    question: {
      en: 'How are the Gurmukhi characters logically organized across the left-hand and right-hand sides of the standard Punjabi InScript Keyboard Layout (Raavi Font)?',
      pa: 'ਪੰਜਾਬੀ ਇਨਸਕ੍ਰਿਪਟ (InScript) ਕੀ-ਬੋਰਡ ਲੇਆਉਟ (ਰਾਵੀ ਫੌਂਟ) ਵਿੱਚ ਖੱਬੇ ਹੱਥ ਅਤੇ ਸੱਜੇ ਹੱਥ ਦੀਆਂ ਕੁੰਜੀਆਂ (Keys) ਉੱਤੇ ਗੁਰਮੁਖੀ ਅੱਖਰਾਂ ਦੀ ਵੰਡ ਕਿਸ ਸਿਧਾਂਤ ਅਨੁਸਾਰ ਕੀਤੀ ਗਈ ਹੈ?',
      hi: 'पंजाबी इनस्क्रिप्ट (InScript) कीबोर्ड लेआउट (रावी फ़ॉन्ट) में बाएँ हाथ और दाएँ हाथ की कुंजियों (Keys) पर गुरमुखी अक्षरों का विभाजन किस सिद्धांत के अनुसार किया गया है?',
    },
    options: {
      A: {
        en: 'All Vowels, Laga-Matras, and Lagakhars are placed on the Left-Hand side; all Consonants (ਵਿਅੰਜਨ) are placed on the Right-Hand side (with Unaspirated on normal press and Aspirated on Shift press)',
        pa: 'ਸਾਰੇ ਸ੍ਵਰ, ਲਗਾਂ-ਮਾਤਰਾਵਾਂ ਅਤੇ ਲਗਾਖਰ ਖੱਬੇ ਹੱਥ (Left Hand) ਵੱਲ ਹਨ; ਜਦਕਿ ਸਾਰੇ ਵਿਅੰਜਨ ਸੱਜੇ ਹੱਥ (Right Hand) ਵੱਲ ਹਨ (ਬਿਨਾਂ Shift ਤੋਂ ਅਲਪਪ੍ਰਾਣ ਅਤੇ Shift ਦਬਾ ਕੇ ਮਹਾਂਪ੍ਰਾਣ ਅੱਖਰ)',
        hi: 'सभी स्वर, लगां-मात्राएं और लगाखर बाएँ हाथ (Left Hand) की ओर हैं; जबकि सभी व्यंजन दाएँ हाथ (Right Hand) की ओर हैं (बिना Shift के अल्पप्राण और Shift दबाने पर महाप्राण अक्षर)',
      },
      B: {
        en: 'Letters are mapped phonetically according to English QWERTY sound equivalents (e.g., K for ਕ, S for ਸ, M for ਮ)',
        pa: 'ਅੰਗਰੇਜ਼ੀ ਦੇ QWERTY ਅੱਖਰਾਂ ਦੀ ਆਵਾਜ਼ ਅਨੁਸਾਰ (ਜਿਵੇਂ K ਤੋਂ ਕ, S ਤੋਂ ਸ, M ਤੋਂ ਮ) ਅੱਖਰ ਰੱਖੇ ਗਏ ਹਨ',
        hi: 'अंग्रेज़ी के QWERTY अक्षरों की ध्वनि के अनुसार (जैसे K से ਕ, S से ਸ, M से ਮ) अक्षर रखे गए हैं',
      },
      C: {
        en: 'All Consonants are on the Left-Hand side and all Vowels/Matras are on the Numerical Keypad',
        pa: 'ਸਾਰੇ ਵਿਅੰਜਨ ਖੱਬੇ ਹੱਥ ਵੱਲ ਹਨ ਅਤੇ ਸਾਰੀਆਂ ਲਗਾਂ-ਮਾਤਰਾਵਾਂ ਨੰਬਰ ਪੈਡ ਉੱਤੇ ਹਨ',
        hi: 'सभी व्यंजन बाएँ हाथ की ओर हैं और सभी मात्राएं न्यूमेरिक कीपैड पर हैं',
      },
      D: {
        en: 'The 35 Painti letters are arranged sequentially from left to right starting from the Q key to the M key',
        pa: 'ਪੈਂਤੀ ਅੱਖਰੀ ਦੇ 35 ਅੱਖਰ Q ਕੁੰਜੀ ਤੋਂ ਲੈ ਕੇ M ਕੁੰਜੀ ਤੱਕ ਲਗਾਤਾਰ ਕ੍ਰਮ ਵਿੱਚ ਰੱਖੇ ਗਏ ਹਨ',
        hi: 'पैंतीस अखरी के 35 अक्षर Q कुंजी से लेकर M कुंजी तक क्रमानुसार रखे गए हैं',
      },
    },
    correct: 'A',
    explanation: {
      en: 'The scientific touch-typing design of InScript places all Vowels (Shift + left keys), Laga-Matras (unshifted left keys), Halant (d), Tippi/Bindi (x/X), and Adhak (~) under the left hand, while all Consonants are under the right hand (normal key = unaspirated ਕ, ਗ, ਚ, ਜ; Shift + same key = aspirated ਖ, ਘ, ਛ, ਝ).',
      pa: 'ਇਨਸਕ੍ਰਿਪਟ ਕੀ-ਬੋਰਡ ਦੀ ਵਿਗਿਆਨਕ ਬਣਤਰ ਅਨੁਸਾਰ ਖੱਬੇ ਹੱਥ ਹੇਠਾਂ ਸਾਰੀਆਂ ਲਗਾਂ-ਮਾਤਰਾਵਾਂ (ਬਿਨਾਂ Shift) ਅਤੇ ਪੂਰੇ ਸ੍ਵਰ (Shift ਨਾਲ), ਹਲੰਤ (d), ਟਿੱਪੀ/ਬਿੰਦੀ (x/X) ਅਤੇ ਅੱਧਕ (~) ਹੁੰਦੇ ਹਨ; ਜਦਕਿ ਸੱਜੇ ਹੱਥ ਹੇਠਾਂ ਸਾਰੇ ਵਿਅੰਜਨ ਹੁੰਦੇ ਹਨ (ਸਧਾਰਨ ਦਬਾਉਣ ’ਤੇ ਕ, ਗ, ਚ, ਜ ਅਤੇ Shift ਨਾਲ ਖ, ਘ, ਛ, ਝ)।',
      hi: 'इनस्क्रिप्ट कीबोर्ड की वैज्ञानिक संरचना के अनुसार बाएँ हाथ के नीचे सभी मात्राएं (बिना Shift) और पूर्ण स्वर (Shift के साथ), हलंत (d), टिप्पी/बिंदी (x/X) और अधक (~) होते हैं; जबकि दाएँ हाथ के नीचे सभी व्यंजन होते हैं (सामान्य दबाने पर ਕ, ਗ, ਚ, ਜ तथा Shift के साथ ਖ, ਘ, ਛ, ਝ)।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-prp-6',
    topicId: 'punjab-clerk-prep',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Special',
    question: {
      en: 'While typing in Raavi (InScript) font, which key produces the Halant / Virama (੍) used to type a Dutt Akhar (ਪੈਰ ਵਿੱਚ ਅੱਖਰ — ਹ, ਰ, ਵ), and what is the exact keystroke sequence to type the word "ਪ੍ਰ" (as in ਪ੍ਰੀਖਿਆ)?',
      pa: 'ਰਾਵੀ (InScript) ਫੌਂਟ ਵਿੱਚ ਟਾਈਪ ਕਰਦੇ ਸਮੇਂ ਪੈਰ ਵਿੱਚ ਦੁੱਤ ਅੱਖਰ (ਹ, ਰ, ਵ) ਪਾਉਣ ਲਈ "ਹਲੰਤ (੍)" ਕਿਸ ਕੁੰਜੀ (Key) ਤੋਂ ਪੈਂਦਾ ਹੈ ਅਤੇ "ਪ੍ਰ" (ਜਿਵੇਂ ਪ੍ਰੀਖਿਆ) ਟਾਈਪ ਕਰਨ ਦਾ ਸਹੀ ਕ੍ਰਮ ਕੀ ਹੈ?',
      hi: 'रावी (InScript) फ़ॉन्ट में टाइप करते समय पैर में दुत्त अक्षर (ਹ, ਰ, ਵ) लिखने के लिए "हलंत (੍)" किस कुंजी (Key) से लगता है और "ਪ੍ਰ" (जैसे ਪ੍ਰੀਖਿਆ) टाइप करने का सही क्रम क्या है?',
    },
    options: {
      A: {
        en: 'Halant is on the "d" key; to type "ਪ੍ਰ", press: ਪ (h) + Halant (d) + ਰ (j)',
        pa: 'ਹਲੰਤ "d" ਕੁੰਜੀ ਤੋਂ ਪੈਂਦਾ ਹੈ; "ਪ੍ਰ" ਲਿਖਣ ਦਾ ਕ੍ਰਮ ਹੈ: ਪ (h) + ਹਲੰਤ (d) + ਰ (j)',
        hi: 'हलंत "d" कुंजी से लगता है; "ਪ੍ਰ" लिखने का क्रम है: ਪ (h) + हलंत (d) + ਰ (j)',
      },
      B: {
        en: 'Halant is on the "f" key; to type "ਪ੍ਰ", press: ਰ (j) + Halant (f) + ਪ (h)',
        pa: 'ਹਲੰਤ "f" ਕੁੰਜੀ ਤੋਂ ਪੈਂਦਾ ਹੈ; "ਪ੍ਰ" ਲਿਖਣ ਦਾ ਕ੍ਰਮ ਹੈ: ਰ (j) + ਹਲੰਤ (f) + ਪ (h)',
        hi: 'हलंत "f" कुंजी से लगता है; "ਪ੍ਰ" लिखने का क्रम है: ਰ (j) + हलंत (f) + ਪ (h)',
      },
      C: {
        en: 'Halant is on "Shift + D"; to type "ਪ੍ਰ", press: Halant (Shift + D) + ਪ (h) + ਰ (j)',
        pa: 'ਹਲੰਤ "Shift + D" ਤੋਂ ਪੈਂਦਾ ਹੈ; "ਪ੍ਰ" ਲਿਖਣ ਦਾ ਕ੍ਰਮ ਹੈ: ਹਲੰਤ + ਪ + ਰ',
        hi: 'हलंत "Shift + D" से लगता है; "ਪ੍ਰ" लिखने का क्रम है: हलंत + ਪ + ਰ',
      },
      D: {
        en: 'Halant is on the "/" key; to type "ਪ੍ਰ", press: Alt + 0215',
        pa: 'ਹਲੰਤ "/" ਕੁੰਜੀ ਤੋਂ ਪੈਂਦਾ ਹੈ; "ਪ੍ਰ" ਲਿਖਣ ਲਈ Alt + 0215 ਦਬਾਇਆ ਜਾਂਦਾ ਹੈ',
        hi: 'हलंत "/" कुंजी से लगता है; "ਪ੍ਰ" लिखने के लिए Alt + 0215 दबाया जाता है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Unicode Punjabi InScript (Raavi), the lowercase "d" key types the Halant (੍). To place হ, ਰ, or ਵ at the foot of a consonant, you type: Base Consonant + d (Halant) + হ/ਰ/ਵ (for example: ਪ [h] + ੍ [d] + ਰ [j] = ਪ੍ਰ; ਪੜ੍ਹ = ਪ [h] + ੜ [Shift+\] + ੍ [d] + ਹ [u]).',
      pa: 'ਰਾਵੀ ਇਨਸਕ੍ਰਿਪਟ ਵਿੱਚ ਛੋਟੀ "d" ਕੁੰਜੀ ਨਾਲ ਹਲੰਤ (੍) ਪੈਂਦਾ ਹੈ। ਕਿਸੇ ਅੱਖਰ ਦੇ ਪੈਰ ਵਿੱਚ ਹ, ਰ ਜਾਂ ਵ ਪਾਉਣ ਲਈ ਪਹਿਲਾਂ ਮੂਲ ਅੱਖਰ, ਫਿਰ ਹਲੰਤ (d) ਅਤੇ ਫਿਰ ਦੁੱਤ ਅੱਖਰ ਦਬਾਇਆ ਜਾਂਦਾ ਹੈ (ਜਿਵੇਂ: ਪ [h] + ੍ [d] + ਰ [j] = ਪ੍ਰ)।',
      hi: 'रावी इनस्क्रिप्ट में छोटी "d" कुंजी से हलंत (੍) लगता है। किसी अक्षर के पैर में ਹ, ਰ या ਵ लगाने के लिए पहले मूल व्यंजन, फिर हलंत (d) और फिर दुत्त अक्षर दबाया जाता है (जैसे: ਪ [h] + ੍ [d] + ਰ [j] = ਪ੍ਰ)।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-prp-7',
    topicId: 'punjab-clerk-prep',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Special',
    question: {
      en: 'On the Punjabi InScript keyboard layout (Raavi font), which keys are used to type the three Lagakhars — Tippi (ੰ), Bindi (ਂ), and Adhak (ੱ)?',
      pa: 'ਪੰਜਾਬੀ ਇਨਸਕ੍ਰਿਪਟ (InScript) ਕੀ-ਬੋਰਡ ਲੇਆਉਟ (ਰਾਵੀ ਫੌਂਟ) ਵਿੱਚ ਤਿੰਨ ਲਗਾਖਰਾਂ — ਟਿੱਪੀ (ੰ), ਬਿੰਦੀ (ਂ) ਅਤੇ ਅੱਧਕ (ੱ) ਨੂੰ ਟਾਈਪ ਕਰਨ ਲਈ ਕਿਹੜੀਆਂ ਕੁੰਜੀਆਂ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ?',
      hi: 'पंजाबी इनस्क्रिप्ट (InScript) कीबोर्ड लेआउट (रावी फ़ॉन्ट) में तीन लगाखरों — टिप्पी (ੰ), बिंदी (ਂ) और अधक (ੱ) को टाइप करने के लिए कौन-सी कुंजियाँ प्रयुक्त होती हैं?',
    },
    options: {
      A: {
        en: 'Tippi (ੰ) = "x" key | Bindi (ਂ) = "Shift + X" | Adhak (ੱ) = "Shift + ~" (the key to the left of number 1)',
        pa: 'ਟਿੱਪੀ (ੰ) = "x" ਕੁੰਜੀ | ਬਿੰਦੀ (ਂ) = "Shift + X" | ਅੱਧਕ (ੱ) = "Shift + ~" (ਨੰਬਰ 1 ਦੇ ਖੱਬੇ ਪਾਸੇ ਵਾਲੀ ਕੁੰਜੀ)',
        hi: 'टिप्पी (ੰ) = "x" कुंजी | बिंदी (ਂ) = "Shift + X" | अधक (ੱ) = "Shift + ~" (संख्या 1 के बाईं ओर वाली कुंजी)',
      },
      B: {
        en: 'Tippi (ੰ) = "m" key | Bindi (ਂ) = "." (period) key | Adhak (ੱ) = "^" (Shift + 6)',
        pa: 'ਟਿੱਪੀ (ੰ) = "m" ਕੁੰਜੀ | ਬਿੰਦੀ (ਂ) = "." ਕੁੰਜੀ | ਅੱਧਕ (ੱ) = "Shift + 6"',
        hi: 'टिप्पी (ੰ) = "m" कुंजी | बिंदी (ਂ) = "." कुंजी | अधक (ੱ) = "Shift + 6"',
      },
      C: {
        en: 'Tippi (ੰ) = "z" key | Bindi (ਂ) = "Shift + Z" | Adhak (ੱ) = "d" key',
        pa: 'ਟਿੱਪੀ (ੰ) = "z" ਕੁੰਜੀ | ਬਿੰਦੀ (ਂ) = "Shift + Z" | ਅੱਧਕ (ੱ) = "d" ਕੁੰਜੀ',
        hi: 'टिप्पी (ੰ) = "z" कुंजी | बिंदी (ਂ) = "Shift + Z" | अधक (ੱ) = "d" कुंजी',
      },
      D: {
        en: 'Tippi (ੰ) = "n" key | Bindi (ਂ) = "Shift + N" | Adhak (ੱ) = "a" key',
        pa: 'ਟਿੱਪੀ (ੰ) = "n" ਕੁੰਜੀ | ਬਿੰਦੀ (ਂ) = "Shift + N" | ਅੱਧਕ (ੱ) = "a" ਕੁੰਜੀ',
        hi: 'टिप्पी (ੰ) = "n" कुंजी | बिंदी (ਂ) = "Shift + N" | अधक (ੱ) = "a" कुंजी',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In standard Punjabi InScript (Raavi): pressing lowercase "x" produces Tippi (ੰ); pressing "Shift + X" produces Bindi (ਂ); and pressing "Shift + `" (tilde key `~` next to 1, or `=` / `+` variant in some layouts, standard ISM/Windows InScript uses `Shift + ~` for Adhak ੱ).',
      pa: 'ਪੰਜਾਬੀ ਇਨਸਕ੍ਰਿਪਟ (ਰਾਵੀ) ਕੀ-ਬੋਰਡ ਉੱਤੇ: ਛੋਟੀ "x" ਨਾਲ ਟਿੱਪੀ (ੰ), "Shift + X" ਨਾਲ ਬਿੰਦੀ (ਂ), ਅਤੇ ਨੰਬਰ 1 ਦੇ ਨਾਲ ਵਾਲੀ ਟਿਲਡ ਕੁੰਜੀ "Shift + ~" ਦਬਾਉਣ ਨਾਲ ਅੱਧਕ (ੱ) ਪੈਂਦਾ ਹੈ।',
      hi: 'पंजाबी इनस्क्रिप्ट (रावी) कीबोर्ड पर: छोटी "x" से टिप्पी (ੰ), "Shift + X" से बिंदी (ਂ), और संख्या 1 के बगल वाली टिल्ड कुंजी "Shift + ~" दबाने से अधक (ੱ) लगता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-prp-8',
    topicId: 'punjab-clerk-prep',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Special',
    question: {
      en: 'In the Punjabi InScript keyboard layout, which key adds the subscript dot / Nukta (ਪੈਰ ਬਿੰਦੀ ਼) to form the 6 Navin Toli letters (ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼), and in what order must Unicode Laga-Matra and Bindi/Tippi/Adhak be typed after a consonant?',
      pa: 'ਪੰਜਾਬੀ ਇਨਸਕ੍ਰਿਪਟ ਕੀ-ਬੋਰਡ ਵਿੱਚ ਨਵੀਂ ਟੋਲੀ ਦੇ 6 ਅੱਖਰਾਂ (ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼) ਦੇ ਪੈਰ ਵਿੱਚ ਬਿੰਦੀ (ਨੁਕਤਾ ਼) ਕਿਸ ਕੁੰਜੀ ਨਾਲ ਪੈਂਦੀ ਹੈ, ਅਤੇ ਯੂਨੀਕੋਡ ਵਿੱਚ ਵਿਅੰਜਨ ਤੋਂ ਬਾਅਦ ਲਗ-ਮਾਤਰਾ ਤੇ ਲਗਾਖਰ ਕਿਸ ਕ੍ਰਮ ਵਿੱਚ ਟਾਈਪ ਕੀਤੇ ਜਾਂਦੇ ਹਨ?',
      hi: 'पंजाबी इनस्क्रिप्ट कीबोर्ड में नवीन टोली के 6 अक्षरों (ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼) के पैर में बिंदी (नुक्ता ਼) किस कुंजी से लगती है, तथा यूनिकोड में व्यंजन के बाद मात्रा और लगाखर किस क्रम में टाइप किए जाते हैं?',
    },
    options: {
      A: {
        en: 'Nukta (਼) is typed using the "]" (right square bracket) key immediately after the base consonant; Unicode order is: Consonant + Nukta (if any) + Laga-Matra (including Sihari) + Bindi/Tippi/Adhak',
        pa: 'ਪੈਰ ਬਿੰਦੀ (਼) "]" (ਸੱਜੀ ਬਰੈਕਟ) ਕੁੰਜੀ ਨਾਲ ਮੂਲ ਅੱਖਰ ਤੋਂ ਤੁਰੰਤ ਬਾਅਦ ਪੈਂਦੀ ਹੈ; ਯੂਨੀਕੋਡ ਦਾ ਕ੍ਰਮ ਹੈ: ਵਿਅੰਜਨ + ਪੈਰ ਬਿੰਦੀ + ਲਗ-ਮਾਤਰਾ (ਸਿਹਾਰੀ ਸਮੇਤ) + ਬਿੰਦੀ/ਟਿੱਪੀ/ਅੱਧਕ',
        hi: 'पैर बिंदी (਼) "]" (दायाँ कोष्ठक) कुंजी से मूल अक्षर के तुरंत बाद लगती है; यूनिकोड का क्रम है: व्यंजन + नुक्ता + मात्रा (सिहारी सहित) + बिंदी/टिप्पी/अधक',
      },
      B: {
        en: 'Nukta is typed using the "." (full stop) key before the consonant; Sihari (ਿ) must be typed before the consonant as in Remington typewriters',
        pa: 'ਪੈਰ ਬਿੰਦੀ "." ਕੁੰਜੀ ਨਾਲ ਅੱਖਰ ਤੋਂ ਪਹਿਲਾਂ ਪੈਂਦੀ ਹੈ; ਅਤੇ ਟਾਈਪਰਾਈਟਰ ਵਾਂਗ ਸਿਹਾਰੀ (ਿ) ਅੱਖਰ ਤੋਂ ਪਹਿਲਾਂ ਟਾਈਪ ਕੀਤੀ ਜਾਂਦੀ ਹੈ',
        hi: 'पैर बिंदी "." कुंजी से अक्षर से पहले लगती है; और टाइपराइटर की तरह सिहारी (ਿ) अक्षर से पहले टाइप की जाती है',
      },
      C: {
        en: 'Nukta is typed using the ";" key; Bindi/Tippi must be typed before the Laga-Matra',
        pa: 'ਪੈਰ ਬਿੰਦੀ ";" ਕੁੰਜੀ ਨਾਲ ਪੈਂਦੀ ਹੈ; ਅਤੇ ਬਿੰਦੀ/ਟਿੱਪੀ ਲਗ-ਮਾਤਰਾ ਤੋਂ ਪਹਿਲਾਂ ਟਾਈਪ ਹੁੰਦੀ ਹੈ',
        hi: 'पैर बिंदी ";" कुंजी से लगती है; और बिंदी/टिप्पी मात्रा से पहले टाइप होती है',
      },
      D: {
        en: 'Nukta is typed using "Shift + 8"; Adhak must be typed after the second consonant',
        pa: 'ਪੈਰ ਬਿੰਦੀ "Shift + 8" ਨਾਲ ਪੈਂਦੀ ਹੈ; ਅਤੇ ਅੱਧਕ ਦੂਜੇ ਵਿਅੰਜਨ ਤੋਂ ਬਾਅਦ ਪਾਇਆ ਜਾਂਦਾ ਹੈ',
        hi: 'पैर बिंदी "Shift + 8" से लगती है; और अधक दूसरे व्यंजन के बाद लगाया जाता है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Crucial Unicode Raavi rule: 1. The "]" key produces Nukta (਼) right after the consonant (or directly via Shift+M for ਸ਼, etc.). 2. Unlike legacy fonts (AnmolLipi/Asees), in Unicode even Sihari (ਿ, key "f") is typed AFTER the consonant! The strict phonetic sequence is: Consonant → Nukta → Vowel Matra → Lagakhar (Bindi/Tippi/Adhak).',
      pa: 'ਯੂਨੀਕੋਡ ਰਾਵੀ ਫੌਂਟ ਦਾ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ ਨਿਯਮ: 1. ਪੈਰ ਬਿੰਦੀ (਼) "]" ਕੁੰਜੀ ਨਾਲ ਪੈਂਦੀ ਹੈ। 2. ਪੁਰਾਣੇ ਫੌਂਟਾਂ ਦੇ ਉਲਟ, ਯੂਨੀਕੋਡ ਵਿੱਚ "ਸਿਹਾਰੀ (ਿ, ਕੁੰਜੀ f)" ਵੀ ਹਮੇਸ਼ਾ ਅੱਖਰ ਤੋਂ ਬਾਅਦ ਵਿੱਚ ਪਾਈ ਜਾਂਦੀ ਹੈ! ਸਹੀ ਕ੍ਰਮ ਹੈ: ਵਿਅੰਜਨ → ਪੈਰ ਬਿੰਦੀ → ਲਗ-ਮਾਤਰਾ → ਬਿੰਦੀ/ਟਿੱਪੀ/ਅੱਧਕ।',
      hi: 'यूनिकोड रावी फ़ॉन्ट का सबसे महत्वपूर्ण नियम: 1. पैर बिंदी (नुक्ता ਼) "]" कुंजी से लगती है। 2. पुराने फ़ॉन्ट्स के विपरीत, यूनिकोड में "सिहारी (ਿ, कुंजी f)" भी सदैव व्यंजन के बाद टाइप की जाती है! सही क्रम है: व्यंजन → नुक्ता → मात्रा → बिंदी/टिप्पी/अधक।',
    },
    difficulty: 'hard',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-prp-9',
    topicId: 'punjab-clerk-prep',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Special',
    question: {
      en: 'According to the official PSSSB Typing Skill Test evaluation guidelines, how are "Full Mistakes" and "Half Mistakes" categorized when calculating a candidate’s Net Typing Speed and Accuracy?',
      pa: 'PSSSB ਟਾਈਪਿੰਗ ਟੈਸਟ ਦੇ ਮੁਲਾਂਕਣ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਉਮੀਦਵਾਰ ਦੀ ਸ਼ੁੱਧਤਾ (Accuracy) ਅਤੇ ਰਫ਼ਤਾਰ ਕੱਢਣ ਵੇਲੇ "ਪੂਰੀ ਗ਼ਲਤੀ (Full Mistake)" ਅਤੇ "ਅੱਧੀ ਗ਼ਲਤੀ (Half Mistake)" ਕਿਵੇਂ ਗਿਣੀ ਜਾਂਦੀ ਹੈ?',
      hi: 'PSSSB टाइपिंग कौशल परीक्षा के मूल्यांकन नियमों के अनुसार अभ्यर्थी की शुद्धता (Accuracy) और गति की गणना करते समय "पूर्ण त्रुटि (Full Mistake)" और "अर्ध त्रुटि (Half Mistake)" कैसे गिनी जाती है?',
    },
    options: {
      A: {
        en: 'Full Mistake: Omission of a word, substitution of a wrong word, or addition of an extra word | Half Mistake: Spacing error, wrong capitalization, or punctuation error (where 2 Half Mistakes = 1 Full Mistake)',
        pa: 'ਪੂਰੀ ਗ਼ਲਤੀ (Full Mistake): ਸ਼ਬਦ ਛੱਡਣਾ, ਗ਼ਲਤ ਸ਼ਬਦ ਲਿਖਣਾ ਜਾਂ ਵਾਧੂ ਸ਼ਬਦ ਜੋੜਨਾ | ਅੱਧੀ ਗ਼ਲਤੀ (Half Mistake): ਸਪੇਸ (Space) ਦੀ ਗ਼ਲਤੀ, ਛੋਟੇ-ਵੱਡੇ ਅੱਖਰ (Capitalization) ਜਾਂ ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ ਦੀ ਗ਼ਲਤੀ (2 ਅੱਧੀਆਂ ਗ਼ਲਤੀਆਂ = 1 ਪੂਰੀ ਗ਼ਲਤੀ)',
        hi: 'पूर्ण त्रुटि (Full Mistake): शब्द छोड़ना, गलत शब्द लिखना या अतिरिक्त शब्द जोड़ना | अर्ध त्रुटि (Half Mistake): स्पेसिंग (Space) की त्रुटि, कैपिटलाइज़ेशन या विराम चिह्न की त्रुटि (2 अर्ध त्रुटियाँ = 1 पूर्ण त्रुटि)',
      },
      B: {
        en: 'Every single wrong keystroke deletes 10 words from the total typed passage',
        pa: 'ਹਰੇਕ ਗ਼ਲਤ ਅੱਖਰ ਦਬਾਉਣ ’ਤੇ ਟਾਈਪ ਕੀਤੇ ਪੈਰੇ ਵਿੱਚੋਂ 10 ਸ਼ਬਦ ਕੱਟੇ ਜਾਂਦੇ ਹਨ',
        hi: 'प्रत्येक गलत अक्षर दबाने पर टाइप किए गए गद्यांश में से 10 शब्द काटे जाते हैं',
      },
      C: {
        en: 'Omission of an entire line is counted as a Half Mistake, whereas a missing comma is counted as 5 Full Mistakes',
        pa: 'ਪੂਰੀ ਲਾਈਨ ਛੱਡਣ ਨੂੰ ਅੱਧੀ ਗ਼ਲਤੀ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ ਅਤੇ ਕਾਮਾ ਛੱਡਣ ਨੂੰ 5 ਪੂਰੀਆਂ ਗ਼ਲਤੀਆਂ',
        hi: 'पूरी पंक्ति छोड़ने को आधी गलती माना जाता है और अल्पविराम छोड़ने को 5 पूर्ण गलतियाँ',
      },
      D: {
        en: 'Backspace key is completely disabled and any correction attempt disqualifies the candidate immediately',
        pa: 'ਬੈਕਸਪੇਸ (Backspace) ਕੁੰਜੀ ਪੂਰੀ ਤਰ੍ਹਾਂ ਬੰਦ ਹੁੰਦੀ ਹੈ ਅਤੇ ਸੋਧ ਕਰਨ ’ਤੇ ਉਮੀਦਵਾਰ ਅਯੋਗ ਹੋ ਜਾਂਦਾ ਹੈ',
        hi: 'बैकस्पेस (Backspace) कुंजी पूर्णतः बंद होती है और सुधार करने पर अभ्यर्थी अयोग्य घोषित हो जाता है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In official typing evaluations: Omission/Substitution/Addition of a word or spelling error is 1 Full Mistake; errors in spacing, capitalization, or punctuation are counted as Half Mistakes (0.5 mistake each). Total Mistakes = Full Mistakes + (Half Mistakes / 2), and Accuracy % = [(Total Words - Total Mistakes) / Total Words] × 100 (must be ≥ 92%).',
      pa: 'ਟਾਈਪਿੰਗ ਮੁਲਾਂਕਣ ਵਿੱਚ: ਸ਼ਬਦ ਛੱਡਣਾ, ਬਦਲਣਾ, ਵਾਧੂ ਸ਼ਬਦ ਲਿਖਣਾ ਜਾਂ ਸ਼ਬਦ-ਜੋੜ ਦੀ ਗ਼ਲਤੀ "1 ਪੂਰੀ ਗ਼ਲਤੀ (Full Mistake)" ਮੰਨੀ ਜਾਂਦੀ ਹੈ; ਜਦਕਿ ਸਪੇਸ (Space), ਵੱਡੇ-ਛੋਟੇ ਅੱਖਰ ਜਾਂ ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ ਦੀ ਗ਼ਲਤੀ "ਅੱਧੀ ਗ਼ਲਤੀ (Half Mistake)" ਗਿਣੀ ਜਾਂਦੀ ਹੈ (2 ਅੱਧੀਆਂ ਗ਼ਲਤੀਆਂ = 1 ਪੂਰੀ ਗ਼ਲਤੀ)।',
      hi: 'टाइपिंग मूल्यांकन में: शब्द छोड़ना, बदलना, अतिरिक्त शब्द लिखना या वर्तनी की त्रुटि "1 पूर्ण त्रुटि (Full Mistake)" मानी जाती है; जबकि स्पेस, कैपिटलाइज़ेशन या विराम चिह्न की त्रुटि "अर्ध त्रुटि (Half Mistake)" गिनी जाती है (2 अर्ध त्रुटियाँ = 1 पूर्ण त्रुटि)।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-prp-10',
    topicId: 'punjab-clerk-prep',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Special',
    question: {
      en: 'In Secretariat and Government Office Procedure, what is the difference between "Noting" (ਨੋਟਿੰਗ / ਟਿੱਪਣੀ) and "Drafting" (ਡਰਾਫਟਿੰਗ / ਖਰੜਾ ਤਿਆਰ ਕਰਨਾ)?',
      pa: 'ਸਰਕਾਰੀ ਦਫ਼ਤਰੀ ਕਾਰਜ-ਪ੍ਰਣਾਲੀ (Office Procedure) ਵਿੱਚ "ਨੋਟਿੰਗ (Noting)" ਅਤੇ "ਡਰਾਫਟਿੰਗ (Drafting)" ਵਿੱਚ ਕੀ ਅੰਤਰ ਹੁੰਦਾ ਹੈ?',
      hi: 'सरकारी कार्यालयी कार्य-प्रणाली (Office Procedure) में "नोटिंग (Noting / टिप्पणी)" और "ड्राफ्टिंग (Drafting / आलेखन)" में क्या अंतर होता है?',
    },
    options: {
      A: {
        en: 'Noting is the written remarks/analysis recorded on the Note Sheet of a file to help competent authority reach a decision; Drafting is the preparation of the rough outgoing communication/order after or for approval',
        pa: 'ਨੋਟਿੰਗ (Noting) ਫਾਈਲ ਦੀ ਨੋਟ-ਸ਼ੀਟ ਉੱਤੇ ਕੇਸ ਦੇ ਨਿਪਟਾਰੇ ਅਤੇ ਅਧਿਕਾਰੀ ਦੇ ਫ਼ੈਸਲੇ ਲਈ ਲਿਖੀ ਗਈ ਦਫ਼ਤਰੀ ਟਿੱਪਣੀ/ਸੁਝਾਅ ਹੈ; ਜਦਕਿ ਡਰਾਫਟਿੰਗ (Drafting) ਫ਼ੈਸਲੇ ਅਨੁਸਾਰ ਬਾਹਰ ਭੇਜੇ ਜਾਣ ਵਾਲੇ ਪੱਤਰ ਜਾਂ ਹੁਕਮ ਦਾ ਕੱਚਾ ਖਰੜਾ (ਮਸੌਦਾ) ਤਿਆਰ ਕਰਨਾ ਹੈ',
        hi: 'नोटिंग (Noting) फ़ाइल की नोट-शीट पर मामले के निपटारे और सक्षम अधिकारी के निर्णय हेतु लिखी गई कार्यालयी टिप्पणी है; जबकि ड्राफ्टिंग (Drafting) निर्णय के अनुसार भेजे जाने वाले पत्र या आदेश का कच्चा मसौदा (आलेख) तैयार करना है',
      },
      B: {
        en: 'Noting is done by the Dispatch Clerk in the outward register, while Drafting is done by the Peon',
        pa: 'ਨੋਟਿੰਗ ਡਿਸਪੈਚ ਕਲਰਕ ਵੱਲੋਂ ਰਜਿਸਟਰ ਵਿੱਚ ਕੀਤੀ ਜਾਂਦੀ ਹੈ ਅਤੇ ਡਰਾਫਟਿੰਗ ਸੇਵਾਦਾਰ ਵੱਲੋਂ',
        hi: 'नोटिंग डिस्पैच क्लर्क द्वारा रजिस्टर में की जाती है और ड्राफ्टिंग चपरासी द्वारा',
      },
      C: {
        en: 'Noting refers to destroying old files, while Drafting refers to binding new registers',
        pa: 'ਨੋਟਿੰਗ ਦਾ ਅਰਥ ਪੁਰਾਣੀਆਂ ਫਾਈਲਾਂ ਨਸ਼ਟ ਕਰਨਾ ਹੈ ਅਤੇ ਡਰਾਫਟਿੰਗ ਦਾ ਅਰਥ ਰਜਿਸਟਰਾਂ ਦੀ ਜਿਲਦਬੰਦੀ ਕਰਨਾ ਹੈ',
        hi: 'नोटिंग का अर्थ पुरानी फ़ाइलें नष्ट करना है और ड्राफ्टिंग का अर्थ रजिस्टरों की जिल्दबंदी करना है',
      },
      D: {
        en: 'Noting is always sent to the general public, while Drafting is kept strictly secret inside the treasury',
        pa: 'ਨੋਟਿੰਗ ਆਮ ਜਨਤਾ ਨੂੰ ਭੇਜੀ ਜਾਂਦੀ ਹੈ ਅਤੇ ਡਰਾਫਟਿੰਗ ਖਜ਼ਾਨੇ ਵਿੱਚ ਗੁਪਤ ਰੱਖੀ ਜਾਂਦੀ ਹੈ',
        hi: 'नोटिंग आम जनता को भेजी जाती है और ड्राफ्टिंग कोषागार में गुप्त रखी जाती है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In government dealing: When a receipt/PUC arrives, the Dealing Clerk/Assistant examines rules, precedents, and facts on the left side of the file ("Note Sheet") — this is called Noting. Once a line of action is approved, preparing the fair communication/letter for signature is called Drafting.',
      pa: 'ਦਫ਼ਤਰੀ ਕਾਰਜ-ਪ੍ਰਣਾਲੀ ਵਿੱਚ ਕਿਸੇ ਪੱਤਰ (PUC) ਉੱਤੇ ਨਿਯਮਾਂ ਅਤੇ ਪਿਛਲੇ ਹਵਾਲਿਆਂ ਅਨੁਸਾਰ ਫਾਈਲ ਦੀ ਨੋਟ-ਸ਼ੀਟ ’ਤੇ ਲਿਖਤੀ ਰਾਏ ਜਾਂ ਟਿੱਪਣੀ ਪੇਸ਼ ਕਰਨ ਨੂੰ "Noting" ਕਹਿੰਦੇ ਹਨ, ਅਤੇ ਅਧਿਕਾਰੀ ਦੀ ਪ੍ਰਵਾਨਗੀ ਲਈ ਤਿਆਰ ਕੀਤੇ ਜਾਣ ਵਾਲੇ ਜਵਾਬੀ ਪੱਤਰ ਜਾਂ ਹੁਕਮ ਦੇ ਖਰੜੇ ਨੂੰ "Drafting" ਕਹਿੰਦੇ ਹਨ।',
      hi: 'कार्यालयी कार्य-प्रणाली में किसी विचाराधीन पत्र (PUC) पर नियमों व पूर्व उदाहरणों के आधार पर फ़ाइल की नोट-शीट पर लिखित टिप्पणी प्रस्तुत करने को "Noting" कहते हैं, तथा अधिकारी के अनुमोदन हेतु तैयार किए जाने वाले उत्तर-पत्र या आदेश के मसौदे को "Drafting" कहते हैं।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-prp-11',
    topicId: 'punjab-clerk-prep',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Special',
    question: {
      en: 'What is a "Demi-Official Letter" (D.O. Letter / ਅਰਧ-ਸਰਕਾਰੀ ਪੱਤਰ) in government correspondence, and what are its defining stylistic features?',
      pa: 'ਸਰਕਾਰੀ ਪੱਤਰ-ਵਿਹਾਰ ਵਿੱਚ "ਅਰਧ-ਸਰਕਾਰੀ ਪੱਤਰ" (Demi-Official / D.O. Letter) ਕੀ ਹੁੰਦਾ ਹੈ ਅਤੇ ਇਸ ਦੀਆਂ ਮੁੱਖ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਕੀ ਹਨ?',
      hi: 'सरकारी पत्राचार में "अर्ध-शासकीय पत्र" (Demi-Official / D.O. Letter) क्या होता है और इसकी मुख्य विशेषताएं क्या हैं?',
    },
    options: {
      A: {
        en: 'A letter written in the first person ("I") in a friendly/personal tone between officers of equal or nearly equal rank to draw immediate personal attention to an important official matter',
        pa: 'ਇੱਕ ਅਧਿਕਾਰੀ ਵੱਲੋਂ ਦੂਜੇ ਅਧਿਕਾਰੀ ਦਾ ਕਿਸੇ ਜ਼ਰੂਰੀ ਸਰਕਾਰੀ ਮਾਮਲੇ ਵੱਲ ਨਿੱਜੀ ਧਿਆਨ ਦਿਵਾਉਣ ਲਈ ਉੱਤਮ ਪੁਰਖ ("ਮੈਂ / I") ਅਤੇ ਮਿੱਤਰਤਾਪੂਰਨ ਸ਼ੈਲੀ ਵਿੱਚ ਲਿਖਿਆ ਗਿਆ ਪੱਤਰ',
        hi: 'एक अधिकारी द्वारा दूसरे अधिकारी का किसी महत्वपूर्ण सरकारी मामले की ओर व्यक्तिगत ध्यान आकर्षित करने के लिए उत्तम पुरुष ("मैं / I") और मैत्रीपूर्ण शैली में लिखा गया पत्र',
      },
      B: {
        en: 'A public notice published in newspapers for inviting open tenders from private contractors',
        pa: 'ਪ੍ਰਾਈਵੇਟ ਠੇਕੇਦਾਰਾਂ ਤੋਂ ਟੈਂਡਰ ਮੰਗਵਾਉਣ ਲਈ ਅਖ਼ਬਾਰਾਂ ਵਿੱਚ ਛਾਪਿਆ ਜਾਣ ਵਾਲਾ ਜਨਤਕ ਨੋਟਿਸ',
        hi: 'निजी ठेकेदारों से निविदाएं (टेंडर) आमंत्रित करने के लिए समाचार-पत्रों में प्रकाशित सार्वजनिक सूचना',
      },
      C: {
        en: 'A disciplinary charge-sheet issued to suspend a Group D employee',
        pa: 'ਕਿਸੇ ਕਰਮਚਾਰੀ ਨੂੰ ਮੁਅੱਤਲ ਕਰਨ ਲਈ ਜਾਰੀ ਕੀਤੀ ਜਾਣ ਵਾਲੀ ਚਾਰਜ-ਸ਼ੀਟ (ਦੋਸ਼-ਪੱਤਰ)',
        hi: 'किसी कर्मचारी को निलंबित करने के लिए जारी किया जाने वाला आरोप-पत्र (चार्जशीट)',
      },
      D: {
        en: 'An anonymous complaint received by the vigilance department without a signature',
        pa: 'ਵਿਜੀਲੈਂਸ ਵਿਭਾਗ ਨੂੰ ਬਿਨਾਂ ਦਸਤਖ਼ਤਾਂ ਤੋਂ ਪ੍ਰਾਪਤ ਹੋਈ ਗੁੰਮਨਾਮ ਸ਼ਿਕਾਇਤ',
        hi: 'सतर्कता विभाग को बिना हस्ताक्षर के प्राप्त हुई गुमनाम शिकायत',
      },
    },
    correct: 'A',
    explanation: {
      en: 'A Demi-Official (D.O.) letter is used in official correspondence when an officer wants an urgent matter to receive the personal attention of another officer without bureaucratic delay. It is written in the first person ("My dear...", ending with "Yours sincerely") and addressed by name at the bottom left.',
      pa: 'ਅਰਧ-ਸਰਕਾਰੀ ਪੱਤਰ (D.O. Letter) ਉਦੋਂ ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ ਜਦੋਂ ਕਿਸੇ ਮਹੱਤਵਪੂਰਨ ਸਰਕਾਰੀ ਕੰਮ ਵੱਲ ਦੂਜੇ ਅਧਿਕਾਰੀ ਦਾ ਨਿੱਜੀ ਧਿਆਨ ਦਿਵਾਉਣਾ ਹੋਵੇ। ਇਹ ਉੱਤਮ ਪੁਰਖ ("ਮੈਂ") ਵਿੱਚ ਦੋਸਤਾਨਾ ਲਹਿਜੇ ਨਾਲ ("ਪਿਆਰੇ ਸ੍ਰੀ...", ਅੰਤ ਵਿੱਚ "ਆਪ ਦਾ ਸ਼ੁਭਚਿੰਤਕ / Yours sincerely") ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ।',
      hi: 'अर्ध-शासकीय पत्र (D.O. Letter) तब लिखा जाता है जब किसी महत्वपूर्ण सरकारी कार्य की ओर दूसरे अधिकारी का व्यक्तिगत ध्यान आकर्षित करना हो। यह उत्तम पुरुष ("मैं") में आत्मीय शैली ("प्रिय श्री...", अंत में "भवदीय / Yours sincerely") में लिखा जाता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-prp-12',
    topicId: 'punjab-clerk-prep',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Special',
    question: {
      en: 'In official correspondence, what is meant by "Endorsement" (ਪਿੱਠ-ਅੰਕਣ / पृष्ठांकन)?',
      pa: 'ਸਰਕਾਰੀ ਪੱਤਰ-ਵਿਹਾਰ ਵਿੱਚ "ਪਿੱਠ-ਅੰਕਣ" (Endorsement) ਤੋਂ ਕੀ ਭਾਵ ਹੈ?',
      hi: 'सरकारी पत्राचार में "पृष्ठांकन" (Endorsement) से क्या अभिप्राय है?',
    },
    options: {
      A: {
        en: 'Forwarding a copy of a letter, sanction, or order to subordinate/other offices for information, guidance, or necessary action (e.g., "Endst. No. ... A copy is forwarded to...")',
        pa: 'ਕਿਸੇ ਮੂਲ ਪੱਤਰ, ਮਨਜ਼ੂਰੀ ਜਾਂ ਹੁਕਮ ਦੀ ਨਕਲ (Copy) ਹੇਠਲੇ ਜਾਂ ਸੰਬੰਧਿਤ ਦਫ਼ਤਰਾਂ ਨੂੰ ਸੂਚਨਾ ਅਤੇ ਲੋੜੀਂਦੀ ਕਾਰਵਾਈ ਹਿੱਤ ਭੇਜਣਾ ("ਪਿੱਠ-ਅੰਕਣ ਨੰਬਰ...")',
        hi: 'किसी मूल पत्र, स्वीकृति या आदेश की प्रतिलिपि (Copy) अधीनस्थ या संबंधित कार्यालयों को सूचना एवं आवश्यक कार्यवाही हेतु अग्रेषित करना ("पृष्ठांकन संख्या...")',
      },
      B: {
        en: 'Rejecting a candidate’s application form due to incomplete fee payment',
        pa: 'ਅਧੂਰੀ ਫੀਸ ਕਾਰਨ ਉਮੀਦਵਾਰ ਦੀ ਅਰਜ਼ੀ ਰੱਦ ਕਰਨਾ',
        hi: 'अधूरे शुल्क के कारण अभ्यर्थी का आवेदन-पत्र निरस्त करना',
      },
      C: {
        en: 'Calculating the annual income tax deduction of employees in March',
        pa: 'ਮਾਰਚ ਮਹੀਨੇ ਵਿੱਚ ਕਰਮਚਾਰੀਆਂ ਦੇ ਆਮਦਨ ਟੈਕਸ ਦੀ ਗਣਨਾ ਕਰਨਾ',
        hi: 'मार्च माह में कर्मचारियों की आयकर कटौती की गणना करना',
      },
      D: {
        en: 'Locking the office cash chest in the presence of two witnesses',
        pa: 'ਦੋ ਗਵਾਹਾਂ ਦੀ ਹਾਜ਼ਰੀ ਵਿੱਚ ਦਫ਼ਤਰੀ ਤਿਜੋਰੀ ਨੂੰ ਤਾਲਾ ਲਗਾਉਣਾ',
        hi: 'दो गवाहों की उपस्थिति में कार्यालयी तिजोरी को ताला लगाना',
      },
    },
    correct: 'A',
    explanation: {
      en: 'An Endorsement (ਪਿੱਠ-ਅੰਕਣ) is used when a paper has to be returned in original to the sender, or when a copy of an official communication/order is forwarded to other departments/officers for information and compliance in addition to the main addressee.',
      pa: 'ਜਦੋਂ ਕਿਸੇ ਸਰਕਾਰੀ ਪੱਤਰ ਜਾਂ ਹੁਕਮ ਦੀ ਉਤਾਰਾ-ਕਾਪੀ ਮੁੱਖ ਪ੍ਰਾਪਤਕਰਤਾ ਤੋਂ ਇਲਾਵਾ ਹੋਰ ਸੰਬੰਧਿਤ ਅਧਿਕਾਰੀਆਂ ਜਾਂ ਦਫ਼ਤਰਾਂ ਨੂੰ ਸੂਚਨਾ ਤੇ ਲੋੜੀਂਦੀ ਕਾਰਵਾਈ ਲਈ ਭੇਜੀ ਜਾਂਦੀ ਹੈ, ਤਾਂ ਉਸ ਵਿਧੀ ਨੂੰ "ਪਿੱਠ-ਅੰਕਣ (Endorsement)" ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
      hi: 'जब किसी सरकारी पत्र या आदेश की प्रतिलिपि मुख्य प्राप्तकर्ता के अतिरिक्त अन्य संबंधित अधिकारियों या विभागों को सूचना एवं आवश्यक कार्यवाही के लिए भेजी जाती है, तो उस प्रक्रिया को "पृष्ठांकन (Endorsement)" कहा जाता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-prp-13',
    topicId: 'punjab-clerk-prep',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Special',
    question: {
      en: 'Under the Punjab Civil Services Rules, which official document maintains the complete chronological record of a government employee’s official career (appointment, pay fixation, increments, promotions, transfers, and leave account) from the date of joining until retirement?',
      pa: 'ਪੰਜਾਬ ਸਿਵਲ ਸੇਵਾਵਾਂ ਨਿਯਮਾਂ ਅਨੁਸਾਰ, ਕਿਹੜੇ ਅਧਿਕਾਰਤ ਦਸਤਾਵੇਜ਼ ਵਿੱਚ ਸਰਕਾਰੀ ਕਰਮਚਾਰੀ ਦੀ ਨਿਯੁਕਤੀ ਤੋਂ ਲੈ ਕੇ ਸੇਵਾ-ਮੁਕਤੀ ਤੱਕ ਦੇ ਸਮੁੱਚੇ ਸੇਵਾ ਕਾਲ (ਤਨਖ਼ਾਹ, ਸਾਲਾਨਾ ਤਰੱਕੀ, ਬਦਲੀਆਂ, ਛੁੱਟੀਆਂ ਆਦਿ) ਦਾ ਪੂਰਾ ਵੇਰਵਾ ਦਰਜ ਕੀਤਾ ਜਾਂਦਾ ਹੈ?',
      hi: 'पंजाब सिविल सेवा नियमों के अनुसार, किस आधिकारिक दस्तावेज़ में सरकारी कर्मचारी की नियुक्ति से लेकर सेवानिवृत्ति तक के संपूर्ण सेवाकाल (वेतन निर्धारण, वेतनवृद्धि, पदोन्नति, स्थानांतरण और अवकाश लेखा) का पूरा विवरण दर्ज किया जाता है?',
    },
    options: {
      A: {
        en: 'Service Book (ਸੇਵਾ ਪੱਤਰੀ)',
        pa: 'ਸਰਵਿਸ ਬੁੱਕ / ਸੇਵਾ ਪੱਤਰੀ (Service Book)',
        hi: 'सर्विस बुक / सेवा पंजिका (Service Book)',
      },
      B: {
        en: 'Log Book (ਲੌਗ ਬੁੱਕ)',
        pa: 'ਲੌਗ ਬੁੱਕ (Log Book)',
        hi: 'लॉग बुक (Log Book)',
      },
      C: {
        en: 'Peon Book (ਚਪੜਾਸੀ ਬੁੱਕ)',
        pa: 'ਚਪੜਾਸੀ ਬੁੱਕ / ਡਾਕ ਵੰਡ ਰਜਿਸਟਰ (Peon Book)',
        hi: 'चपरासी पुस्तिका (Peon Book)',
      },
      D: {
        en: 'Stock Register (ਸਟਾਕ ਰਜਿਸਟਰ)',
        pa: 'ਸਟਾਕ ਰਜਿਸਟਰ (Stock Register)',
        hi: 'स्टॉक रजिस्टर (Stock Register)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'The Service Book (ਸੇਵਾ ਪੱਤਰੀ) is the foundational permanent record of every government employee’s service history, maintained by the Head of Office / DDO. (Note: Log Book records official vehicle journeys; Peon Book records local hand-delivered dak).',
      pa: '"ਸੇਵਾ ਪੱਤਰੀ (Service Book)" ਹਰ ਸਰਕਾਰੀ ਕਰਮਚਾਰੀ ਦੇ ਸੇਵਾ ਕਾਲ ਦਾ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ ਦਸਤਾਵੇਜ਼ ਹੈ ਜਿਸ ਵਿੱਚ ਉਸ ਦੀ ਜਨਮ ਮਿਤੀ, ਨਿਯੁਕਤੀ, ਤਨਖ਼ਾਹ, ਤਰੱਕੀਆਂ ਅਤੇ ਛੁੱਟੀਆਂ ਦਾ ਪੂਰਾ ਰਿਕਾਰਡ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ।',
      hi: '"सेवा पंजिका (Service Book)" प्रत्येक सरकारी कर्मचारी के सेवाकाल का सबसे महत्वपूर्ण स्थायी अभिलेख है जिसमें उसकी जन्मतिथि, नियुक्ति, वेतन, पदोन्नति और अवकाश का संपूर्ण विवरण रखा जाता है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-prp-14',
    topicId: 'punjab-clerk-prep',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Special',
    question: {
      en: 'According to the Punjab Civil Services Leave Rules, what is the fundamental technical difference between "Casual Leave" (ਇਤਫ਼ਾਕੀਆ ਛੁੱਟੀ) and "Earned Leave" (ਕਮਾਈ ਛੁੱਟੀ)?',
      pa: 'ਪੰਜਾਬ ਸਿਵਲ ਸੇਵਾਵਾਂ ਛੁੱਟੀ ਨਿਯਮਾਂ ਅਨੁਸਾਰ, "ਇਤਫ਼ਾਕੀਆ ਛੁੱਟੀ (Casual Leave)" ਅਤੇ "ਕਮਾਈ ਛੁੱਟੀ (Earned Leave)" ਵਿੱਚ ਬੁਨਿਆਦੀ ਤਕਨੀਕੀ ਅੰਤਰ ਕੀ ਹੈ?',
      hi: 'पंजाब सिविल सेवा अवकाश नियमों के अनुसार, "आकस्मिक अवकाश (Casual Leave)" और "अर्जित अवकाश (Earned Leave)" में मूलभूत तकनीकी अंतर क्या है?',
    },
    options: {
      A: {
        en: 'Casual Leave is NOT treated as absence from duty and lapses at the end of the calendar year; Earned Leave is earned by actual duty performed, accumulates in the leave account (up to prescribed limits), and can be encashed upon retirement',
        pa: 'ਇਤਫ਼ਾਕੀਆ ਛੁੱਟੀ (Casual Leave) ਦੌਰਾਨ ਕਰਮਚਾਰੀ ਡਿਊਟੀ ਤੋਂ ਗੈਰ-ਹਾਜ਼ਰ ਨਹੀਂ ਮੰਨਿਆ ਜਾਂਦਾ ਅਤੇ ਇਹ ਸਾਲ ਦੇ ਅੰਤ ਵਿੱਚ ਖ਼ਤਮ (Lapse) ਹੋ ਜਾਂਦੀ ਹੈ; ਜਦਕਿ ਕਮਾਈ ਛੁੱਟੀ (Earned Leave) ਡਿਊਟੀ ਦੇ ਆਧਾਰ ’ਤੇ ਜਮ੍ਹਾਂ ਹੁੰਦੀ ਰਹਿੰਦੀ ਹੈ ਅਤੇ ਸੇਵਾ-ਮੁਕਤੀ ਵੇਲੇ ਇਸ ਦੇ ਪੈਸੇ (Leave Encashment) ਮਿਲਦੇ ਹਨ',
        hi: 'आकस्मिक अवकाश (Casual Leave) के दौरान कर्मचारी ड्यूटी से अनुपस्थित नहीं माना जाता और यह कैलेंडर वर्ष के अंत में समाप्त (Lapse) हो जाता है; जबकि अर्जित अवकाश (Earned Leave) सेवा के आधार पर संचित होता है और सेवानिवृत्ति पर इसका नकदीकरण (Leave Encashment) मिलता है',
      },
      B: {
        en: 'Casual Leave accumulates up to 300 days for encashment, whereas Earned Leave lapses every month',
        pa: 'ਇਤਫ਼ਾਕੀਆ ਛੁੱਟੀ 300 ਦਿਨਾਂ ਤੱਕ ਜਮ੍ਹਾਂ ਹੋ ਸਕਦੀ ਹੈ, ਜਦਕਿ ਕਮਾਈ ਛੁੱਟੀ ਹਰ ਮਹੀਨੇ ਖ਼ਤਮ ਹੋ ਜਾਂਦੀ ਹੈ',
        hi: 'आकस्मिक अवकाश 300 दिनों तक संचित हो सकता है, जबकि अर्जित अवकाश हर महीने समाप्त हो जाता है',
      },
      C: {
        en: 'Casual Leave results in full deduction of salary, whereas Earned Leave carries a 50% penalty',
        pa: 'ਇਤਫ਼ਾਕੀਆ ਛੁੱਟੀ ਵਿੱਚ ਪੂਰੀ ਤਨਖ਼ਾਹ ਕੱਟੀ ਜਾਂਦੀ ਹੈ, ਜਦਕਿ ਕਮਾਈ ਛੁੱਟੀ ਵਿੱਚ ਅੱਧੀ ਤਨਖ਼ਾਹ ਕੱਟੀ ਜਾਂਦੀ ਹੈ',
        hi: 'आकस्मिक अवकाश में पूरा वेतन काटा जाता है, जबकि अर्जित अवकाश में आधा वेतन काटा जाता है',
      },
      D: {
        en: 'Casual Leave can only be sanctioned by the Governor of Punjab, whereas Earned Leave requires no sanction',
        pa: 'ਇਤਫ਼ਾਕੀਆ ਛੁੱਟੀ ਕੇਵਲ ਰਾਜਪਾਲ ਵੱਲੋਂ ਮਨਜ਼ੂਰ ਕੀਤੀ ਜਾਂਦੀ ਹੈ, ਜਦਕਿ ਕਮਾਈ ਛੁੱਟੀ ਲਈ ਮਨਜ਼ੂਰੀ ਦੀ ਲੋੜ ਨਹੀਂ ਹੁੰਦੀ',
        hi: 'आकस्मिक अवकाश केवल राज्यपाल द्वारा स्वीकृत किया जाता है, जबकि अर्जित अवकाश के लिए स्वीकृति आवश्यक नहीं है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Technically under PCS Rules, Casual Leave (CL) is a concession for short unforeseen personal needs — an official on CL is not treated as absent from duty, and unavailed CL lapses on December 31. Earned Leave (EL) is recognized leave earned through duty, carried forward in the Service Book, and eligible for Leave Encashment.',
      pa: 'ਪੰਜਾਬ ਸਿਵਲ ਸੇਵਾਵਾਂ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਇਤਫ਼ਾਕੀਆ ਛੁੱਟੀ (CL) ਬਾਕਾਇਦਾ ਛੁੱਟੀ ਦੀ ਸ਼੍ਰੇਣੀ ਵਿੱਚ ਨਹੀਂ ਆਉਂਦੀ (ਕਰਮਚਾਰੀ ਡਿਊਟੀ ’ਤੇ ਹੀ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ) ਅਤੇ 31 ਦਸੰਬਰ ਨੂੰ ਖ਼ਤਮ ਹੋ ਜਾਂਦੀ ਹੈ। ਕਮਾਈ ਛੁੱਟੀ (Earned Leave) ਡਿਊਟੀ ਦੇ ਦਿਨਾਂ ਅਨੁਸਾਰ ਖਾਤੇ ਵਿੱਚ ਜਮ੍ਹਾਂ ਹੁੰਦੀ ਹੈ।',
      hi: 'पंजाब सिविल सेवा नियमों के अनुसार आकस्मिक अवकाश (CL) तकनीकी रूप से ड्यूटी से अनुपस्थिति नहीं माना जाता और 31 दिसंबर को लैप्स हो जाता है। अर्जित अवकाश (Earned Leave) ड्यूटी के आधार पर खाते में जुड़ता है और संचित रहता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-prp-15',
    topicId: 'punjab-clerk-prep',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Special',
    question: {
      en: 'In standard Government File Management, what are the two main physical segments of an official file, and what does the abbreviation "P.U.C." stand for?',
      pa: 'ਸਰਕਾਰੀ ਦਫ਼ਤਰੀ ਫਾਈਲ ਪ੍ਰਬੰਧਨ ਵਿੱਚ ਕਿਸੇ ਫਾਈਲ ਦੇ ਦੋ ਮੁੱਖ ਭਾਗ ਕਿਹੜੇ ਹੁੰਦੇ ਹਨ ਅਤੇ "P.U.C." ਦਾ ਪੂਰਾ ਰੂਪ ਕੀ ਹੈ?',
      hi: 'सरकारी कार्यालयी फ़ाइल प्रबंधन में किसी फ़ाइल के दो मुख्य भाग कौन-से होते हैं और "P.U.C." का पूर्ण रूप क्या है?',
    },
    options: {
      A: {
        en: 'Two segments: Note Portion (ਨੋਟ ਭਾਗ on left) & Correspondence Portion (ਪੱਤਰ-ਵਿਹਾਰ ਭਾਗ on right) | P.U.C. = Paper Under Consideration (ਵਿਚਾਰ ਅਧੀਨ ਪੱਤਰ)',
        pa: 'ਦੋ ਭਾਗ: ਨੋਟ ਭਾਗ (ਖੱਬੇ ਪਾਸੇ) ਅਤੇ ਪੱਤਰ-ਵਿਹਾਰ ਭਾਗ (ਸੱਜੇ ਪਾਸੇ) | P.U.C. = Paper Under Consideration (ਵਿਚਾਰ ਅਧੀਨ ਪੱਤਰ)',
        hi: 'दो भाग: टिप्पणी भाग / Note Portion (बाईं ओर) और पत्राचार भाग / Correspondence Portion (दाईं ओर) | P.U.C. = Paper Under Consideration (विचाराधीन पत्र)',
      },
      B: {
        en: 'Two segments: Cash Portion & Audit Portion | P.U.C. = Public Utility Certificate',
        pa: 'ਦੋ ਭਾਗ: ਨਕਦੀ ਭਾਗ ਅਤੇ ਆਡਿਟ ਭਾਗ | P.U.C. = Public Utility Certificate',
        hi: 'दो भाग: रोकड़ भाग और लेखापरीक्षा भाग | P.U.C. = Public Utility Certificate',
      },
      C: {
        en: 'Two segments: Gazette Portion & Press Portion | P.U.C. = Punjab University Chandler',
        pa: 'ਦੋ ਭਾਗ: ਗਜ਼ਟ ਭਾਗ ਅਤੇ ਪ੍ਰੈੱਸ ਭਾਗ | P.U.C. = Punjab University Calendar',
        hi: 'दो भाग: राजपत्र भाग और प्रेस भाग | P.U.C. = Punjab University Calendar',
      },
      D: {
        en: 'Two segments: Inward Diary & Outward Dispatch | P.U.C. = Permanent User Code',
        pa: 'ਦੋ ਭਾਗ: ਆਮਦ ਡਾਇਰੀ ਅਤੇ ਰਵਾਨਗੀ ਰਜਿਸਟਰ | P.U.C. = Permanent User Code',
        hi: 'दो भाग: आवक डायरी और जावक रजिस्टर | P.U.C. = Permanent User Code',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Every official file consists of two distinct parts: 1. The Note Portion (green/buff note sheets on the left side containing office notes and orders), and 2. The Correspondence Portion (on the right side containing incoming receipts and office copies of issued letters). P.U.C. stands for "Paper Under Consideration" (ਵਿਚਾਰ ਅਧੀਨ ਪੱਤਰ).',
      pa: 'ਹਰ ਸਰਕਾਰੀ ਫਾਈਲ ਦੇ ਦੋ ਮੁੱਖ ਹਿੱਸੇ ਹੁੰਦੇ ਹਨ: 1. ਨੋਟ ਭਾਗ (Note Portion — ਖੱਬੇ ਪਾਸੇ ਜਿੱਥੇ ਦਫ਼ਤਰੀ ਟਿੱਪਣੀਆਂ ਤੇ ਹੁਕਮ ਲਿਖੇ ਜਾਂਦੇ ਹਨ) ਅਤੇ 2. ਪੱਤਰ-ਵਿਹਾਰ ਭਾਗ (Correspondence Portion — ਸੱਜੇ ਪਾਸੇ ਜਿੱਥੇ ਚਿੱਠੀਆਂ ਨੱਥੀ ਹੁੰਦੀਆਂ ਹਨ)। P.U.C. ਦਾ ਅਰਥ ਹੈ "Paper Under Consideration" (ਵਿਚਾਰ ਅਧੀਨ ਪੱਤਰ)।',
      hi: 'प्रत्येक सरकारी फ़ाइल के दो मुख्य भाग होते हैं: 1. टिप्पणी भाग (Note Portion — बाईं ओर जहाँ कार्यालयी टिप्पणियाँ व आदेश लिखे जाते हैं) और 2. पत्राचार भाग (Correspondence Portion — दाईं ओर जहाँ पत्र संलग्न होते हैं)। P.U.C. का अर्थ है "Paper Under Consideration" (विचाराधीन पत्र)।',
    },
    difficulty: 'easy',
  },

  // ===========================================================================
  // SECTION 4A: COMPUTER / IT — MS OFFICE MASTERY (WORD, EXCEL, POWERPOINT)
  // topicId: 'clerk-ms-office-mastery' | subjectId: 'clerk-special' (10 MCQs)
  // ===========================================================================
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-mso-1',
    topicId: 'clerk-ms-office-mastery',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'In Microsoft Word, which keyboard shortcuts are used for: (1) Find and Replace text, (2) Insert a Hyperlink, and (3) Insert a manual Page Break?',
      pa: 'ਮਾਈਕ੍ਰੋਸਾਫਟ ਵਰਡ (MS Word) ਵਿੱਚ: (1) Find and Replace, (2) Hyperlink ਜੋੜਨ, ਅਤੇ (3) ਨਵਾਂ Page Break ਪਾਉਣ ਲਈ ਕਿਹੜੀਆਂ ਸ਼ਾਰਟਕੱਟ ਕੁੰਜੀਆਂ (Shortcut Keys) ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ?',
      hi: 'माइक्रोसॉफ्ट वर्ड (MS Word) में: (1) Find and Replace, (2) Hyperlink जोड़ने, और (3) मैनुअल Page Break डालने के लिए कौन-सी शॉर्टकट कुंजियाँ प्रयुक्त होती हैं?',
    },
    options: {
      A: {
        en: '(1) Ctrl + H, (2) Ctrl + K, and (3) Ctrl + Enter',
        pa: '(1) Ctrl + H, (2) Ctrl + K, ਅਤੇ (3) Ctrl + Enter',
        hi: '(1) Ctrl + H, (2) Ctrl + K, और (3) Ctrl + Enter',
      },
      B: {
        en: '(1) Ctrl + R, (2) Ctrl + H, and (3) Shift + Enter',
        pa: '(1) Ctrl + R, (2) Ctrl + H, ਅਤੇ (3) Shift + Enter',
        hi: '(1) Ctrl + R, (2) Ctrl + H, और (3) Shift + Enter',
      },
      C: {
        en: '(1) Ctrl + F, (2) Ctrl + L, and (3) Alt + Enter',
        pa: '(1) Ctrl + F, (2) Ctrl + L, ਅਤੇ (3) Alt + Enter',
        hi: '(1) Ctrl + F, (2) Ctrl + L, और (3) Alt + Enter',
      },
      D: {
        en: '(1) Ctrl + G, (2) Ctrl + M, and (3) Ctrl + Shift + Enter',
        pa: '(1) Ctrl + G, (2) Ctrl + M, ਅਤੇ (3) Ctrl + Shift + Enter',
        hi: '(1) Ctrl + G, (2) Ctrl + M, और (3) Ctrl + Shift + Enter',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In MS Word: Ctrl + H opens the Find and Replace dialog tab (whereas Ctrl + R right-aligns text); Ctrl + K inserts a Hyperlink; Ctrl + Enter inserts a Page Break (whereas Shift + Enter inserts a Line Break and Ctrl + Shift + Enter inserts a Column Break).',
      pa: 'MS Word ਵਿੱਚ: Ctrl + H ਨਾਲ Find and Replace ਖੁੱਲ੍ਹਦਾ ਹੈ (Ctrl + R ਸੱਜੇ ਪਾਸੇ ਅਲਾਈਨ ਕਰਨ ਲਈ ਹੈ); Ctrl + K ਨਾਲ Hyperlink ਪੈਂਦਾ ਹੈ; ਅਤੇ Ctrl + Enter ਨਾਲ Page Break ਪੈਂਦਾ ਹੈ।',
      hi: 'MS Word में: Ctrl + H से Find and Replace खुलता है (Ctrl + R राइट-अलाइन के लिए है); Ctrl + K से Hyperlink जुड़ता है; और Ctrl + Enter से Page Break पड़ता है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-mso-2',
    topicId: 'clerk-ms-office-mastery',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'Match the following function key shortcuts in MS Word: (1) F7, (2) Shift + F7, and (3) Shift + F3:',
      pa: 'MS Word ਵਿੱਚ ਫੰਕਸ਼ਨ ਕੁੰਜੀਆਂ ਦੇ ਸ਼ਾਰਟਕੱਟਾਂ ਦਾ ਸਹੀ ਮਿਲਾਨ ਕਰੋ: (1) F7, (2) Shift + F7, ਅਤੇ (3) Shift + F3:',
      hi: 'MS Word में फ़ंक्शन कुंजियों के शॉर्टकट का सही मिलान करें: (1) F7, (2) Shift + F7, और (3) Shift + F3:',
    },
    options: {
      A: {
        en: '(1) F7 = Spelling & Grammar Check, (2) Shift + F7 = Thesaurus (Synonyms/Antonyms), (3) Shift + F3 = Change Case (cycles through UPPERCASE, lowercase, and Title Case)',
        pa: '(1) F7 = ਸਪੈਲਿੰਗ ਅਤੇ ਗ੍ਰਾਮਰ ਚੈੱਕ, (2) Shift + F7 = ਥਿਸੌਰਸ (ਸਮਾਨਾਰਥਕ ਸ਼ਬਦ-ਕੋਸ਼), (3) Shift + F3 = Change Case (ਅੱਖਰਾਂ ਨੂੰ ਵੱਡੇ/ਛੋਟੇ ਕੇਸ ਵਿੱਚ ਬਦਲਣਾ)',
        hi: '(1) F7 = स्पेलिंग और ग्रामर जाँच, (2) Shift + F7 = थिसॉरस (पर्यायवाची शब्दकोश), (3) Shift + F3 = Change Case (अक्षरों को UPPERCASE, lowercase और Title Case में बदलना)',
      },
      B: {
        en: '(1) F7 = Thesaurus, (2) Shift + F7 = Print Preview, (3) Shift + F3 = Save As',
        pa: '(1) F7 = ਥਿਸੌਰਸ, (2) Shift + F7 = ਪ੍ਰਿੰਟ ਪ੍ਰੀਵਿਊ, (3) Shift + F3 = Save As',
        hi: '(1) F7 = थिसॉरस, (2) Shift + F7 = प्रिंट प्रीव्यू, (3) Shift + F3 = Save As',
      },
      C: {
        en: '(1) F7 = Help Window, (2) Shift + F7 = Word Count, (3) Shift + F3 = Font Dialog Box',
        pa: '(1) F7 = ਹੈਲਪ ਵਿੰਡੋ, (2) Shift + F7 = ਵਰਡ ਕਾਊਂਟ, (3) Shift + F3 = ਫੌਂਟ ਬਾਕਸ',
        hi: '(1) F7 = हेल्प विंडो, (2) Shift + F7 = वर्ड काउंट, (3) Shift + F3 = फ़ॉन्ट डायलॉग बॉक्स',
      },
      D: {
        en: '(1) F7 = Mail Merge, (2) Shift + F7 = Macros, (3) Shift + F3 = Superscript',
        pa: '(1) F7 = ਮੇਲ ਮਰਜ, (2) Shift + F7 = ਮੈਕਰੋਜ਼, (3) Shift + F3 = ਸੁਪਰਸਕ੍ਰਿਪਟ',
        hi: '(1) F7 = मेल मर्ज, (2) Shift + F7 = मैक्रोज़, (3) Shift + F3 = सुपरस्क्रिप्ट',
      },
    },
    correct: 'A',
    explanation: {
      en: 'High-frequency MS Word shortcuts: F7 runs Spelling & Grammar check; Shift + F7 opens the built-in Thesaurus for finding synonyms; Shift + F3 toggles the selected text case between UPPERCASE, lowercase, and Capitalize Each Word / Sentence case.',
      pa: 'MS Word ਵਿੱਚ: F7 ਨਾਲ Spelling & Grammar ਚੈੱਕ ਹੁੰਦਾ ਹੈ; Shift + F7 ਨਾਲ Thesaurus (ਸਮਾਨਾਰਥਕ ਸ਼ਬਦ ਲੱਭਣ ਲਈ) ਖੁੱਲ੍ਹਦਾ ਹੈ; ਅਤੇ Shift + F3 ਨਾਲ ਚੁਣੇ ਹੋਏ ਟੈਕਸਟ ਦਾ Case (ਵੱਡੇ/ਛੋਟੇ ਅੱਖਰ) ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ।',
      hi: 'MS Word में: F7 से Spelling & Grammar की जाँच होती है; Shift + F7 से Thesaurus (पर्यायवाची खोजने हेतु) खुलता है; और Shift + F3 से चयनित टेक्स्ट का Case (छोटे/बड़े अक्षर) बदला जाता है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-mso-3',
    topicId: 'clerk-ms-office-mastery',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'In MS Word, what is the difference between pressing "Ctrl + ]" and "Ctrl + Shift + >" when increasing the font size of selected text, and what is the shortcut for "Justify" alignment?',
      pa: 'MS Word ਵਿੱਚ ਚੁਣੇ ਹੋਏ ਟੈਕਸਟ ਦਾ ਫੌਂਟ ਸਾਈਜ਼ ਵਧਾਉਣ ਲਈ "Ctrl + ]" ਅਤੇ "Ctrl + Shift + >" ਵਿੱਚ ਕੀ ਅੰਤਰ ਹੈ, ਅਤੇ ਪੈਰੇ ਨੂੰ "Justify" ਕਰਨ ਦੀ ਸ਼ਾਰਟਕੱਟ ਕੁੰਜੀ ਕਿਹੜੀ ਹੈ?',
      hi: 'MS Word में चयनित टेक्स्ट का फ़ॉन्ट आकार बढ़ाने के लिए "Ctrl + ]" और "Ctrl + Shift + >" में क्या अंतर है, तथा पैराग्राफ को "Justify" करने की शॉर्टकट कुंजी कौन-सी है?',
    },
    options: {
      A: {
        en: '"Ctrl + ]" increases font size by exactly 1 point, whereas "Ctrl + Shift + >" increases it to the next preset size in the Font Size dropdown list; "Ctrl + J" is used for Justify alignment',
        pa: '"Ctrl + ]" ਫੌਂਟ ਸਾਈਜ਼ ਨੂੰ 1 ਪੁਆਇੰਟ (1 pt) ਵਧਾਉਂਦਾ ਹੈ, ਜਦਕਿ "Ctrl + Shift + >" ਫੌਂਟ ਸੂਚੀ ਦੇ ਅਗਲੇ ਮਿਆਰੀ ਆਕਾਰ ਤੱਕ ਵਧਾਉਂਦਾ ਹੈ; ਅਤੇ "Ctrl + J" ਪੈਰੇ ਨੂੰ Justify ਕਰਦਾ ਹੈ',
        hi: '"Ctrl + ]" फ़ॉन्ट आकार को ठीक 1 पॉइंट (1 pt) बढ़ाता है, जबकि "Ctrl + Shift + >" फ़ॉन्ट सूची के अगले मानक आकार तक बढ़ाता है; तथा "Ctrl + J" पैराग्राफ को Justify करता है',
      },
      B: {
        en: '"Ctrl + ]" increases font size by 10 points, whereas "Ctrl + Shift + >" decreases it; "Ctrl + E" is used for Justify',
        pa: '"Ctrl + ]" ਫੌਂਟ ਸਾਈਜ਼ 10 ਪੁਆਇੰਟ ਵਧਾਉਂਦਾ ਹੈ ਅਤੇ "Ctrl + Shift + >" ਘਟਾਉਂਦਾ ਹੈ; "Ctrl + E" ਨਾਲ Justify ਹੁੰਦਾ ਹੈ',
        hi: '"Ctrl + ]" फ़ॉन्ट आकार 10 पॉइंट बढ़ाता है और "Ctrl + Shift + >" घटाता है; "Ctrl + E" से Justify होता है',
      },
      C: {
        en: '"Ctrl + ]" makes text Superscript, whereas "Ctrl + Shift + >" makes text Subscript; "Ctrl + L" is used for Justify',
        pa: '"Ctrl + ]" ਨਾਲ Superscript ਅਤੇ "Ctrl + Shift + >" ਨਾਲ Subscript ਹੁੰਦਾ ਹੈ; "Ctrl + L" ਨਾਲ Justify ਹੁੰਦਾ ਹੈ',
        hi: '"Ctrl + ]" से Superscript और "Ctrl + Shift + >" से Subscript होता है; "Ctrl + L" से Justify होता है',
      },
      D: {
        en: 'Both shortcuts change line spacing to double; "Ctrl + D" is used for Justify alignment',
        pa: 'ਦੋਵੇਂ ਸ਼ਾਰਟਕੱਟ ਲਾਈਨ ਸਪੇਸਿੰਗ ਦੁੱਗਣੀ ਕਰਦੇ ਹਨ; ਅਤੇ "Ctrl + D" ਨਾਲ Justify ਹੁੰਦਾ ਹੈ',
        hi: 'दोनों शॉर्टकट लाइन स्पेसिंग दोगुनी करते हैं; और "Ctrl + D" से Justify होता है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In MS Word: Ctrl + ] increases font size by 1 pt (Ctrl + [ decreases by 1 pt); Ctrl + Shift + > increases font size by standard dropdown steps like 8, 9, 10, 11, 12, 14, 16... (Ctrl + Shift + < decreases). Paragraph alignments: Ctrl + L (Left), Ctrl + E (Center), Ctrl + R (Right), Ctrl + J (Justify).',
      pa: 'MS Word ਵਿੱਚ: "Ctrl + ]" ਫੌਂਟ ਸਾਈਜ਼ 1 ਪੁਆਇੰਟ ਵਧਾਉਂਦਾ ਹੈ ("Ctrl + [" 1 ਪੁਆਇੰਟ ਘਟਾਉਂਦਾ ਹੈ) ਅਤੇ "Ctrl + Shift + >" ਡ੍ਰੌਪਡਾਊਨ ਸੂਚੀ ਅਨੁਸਾਰ ਵਧਾਉਂਦਾ ਹੈ। ਅਲਾਈਨਮੈਂਟ ਸ਼ਾਰਟਕੱਟ: Ctrl + L (Left), Ctrl + E (Center), Ctrl + R (Right), ਅਤੇ Ctrl + J (Justify)।',
      hi: 'MS Word में: "Ctrl + ]" फ़ॉन्ट आकार 1 पॉइंट बढ़ाता है ("Ctrl + [" 1 पॉइंट घटाता है) और "Ctrl + Shift + >" ड्रॉपडाउन सूची के मानक चरणों के अनुसार बढ़ाता है। संरेखण शॉर्टकट: Ctrl + L (Left), Ctrl + E (Center), Ctrl + R (Right), और Ctrl + J (Justify)।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-mso-4',
    topicId: 'clerk-ms-office-mastery',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'In MS Word Page Setup, what is a "Gutter Margin", and which two positions can a Gutter Margin be set to?',
      pa: 'MS Word ਦੇ Page Setup ਵਿੱਚ "Gutter Margin" (ਗਟਰ ਮਾਰਜਿਨ) ਕੀ ਹੁੰਦਾ ਹੈ ਅਤੇ ਇਸ ਨੂੰ ਕਿਹੜੀਆਂ ਦੋ ਸਥਿਤੀਆਂ (Positions) ਉੱਤੇ ਸੈੱਟ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ?',
      hi: 'MS Word के Page Setup में "Gutter Margin" (गटर मार्जिन) क्या होता है और इसे किन दो स्थितियों (Positions) पर सेट किया जा सकता है?',
    },
    options: {
      A: {
        en: 'Extra space added to the margin to ensure text is not obscured by book/file binding; its two positions are Left and Top',
        pa: 'ਕਿਤਾਬ ਜਾਂ ਫਾਈਲ ਦੀ ਜਿਲਦਬੰਦੀ (Binding) ਲਈ ਛੱਡੀ ਜਾਣ ਵਾਲੀ ਵਾਧੂ ਥਾਂ ਤਾਂ ਜੋ ਅੱਖਰ ਜਿਲਦ ਵਿੱਚ ਨਾ ਦੱਬਣ; ਇਸ ਦੀਆਂ ਦੋ ਸਥਿਤੀਆਂ "Left (ਖੱਬੇ)" ਅਤੇ "Top (ਉੱਪਰ)" ਹੁੰਦੀਆਂ ਹਨ',
        hi: 'पुस्तक या फ़ाइल की बाइंडिंग (Binding) के लिए छोड़ा जाने वाला अतिरिक्त स्थान ताकि अक्षर बाइंडिंग में न दबें; इसकी दो स्थितियाँ "Left (बाएँ)" और "Top (ऊपर)" होती हैं',
      },
      B: {
        en: 'Space reserved at the bottom of the page for page numbers; its two positions are Bottom and Right',
        pa: 'ਪੰਨੇ ਦੇ ਹੇਠਾਂ ਪੰਨਾ ਨੰਬਰ ਪਾਉਣ ਲਈ ਛੱਡੀ ਗਈ ਥਾਂ; ਇਸ ਦੀਆਂ ਦੋ ਸਥਿਤੀਆਂ Bottom ਅਤੇ Right ਹੁੰਦੀਆਂ ਹਨ',
        hi: 'पृष्ठ के नीचे पृष्ठ संख्या लिखने के लिए छोड़ा गया स्थान; इसकी दो स्थितियाँ Bottom और Right होती हैं',
      },
      C: {
        en: 'Space between two columns in a newspaper layout; its two positions are Center and Diagonal',
        pa: 'ਅਖ਼ਬਾਰ ਵਰਗੇ ਦੋ ਕਾਲਮਾਂ ਦੇ ਵਿਚਕਾਰਲੀ ਥਾਂ; ਇਸ ਦੀਆਂ ਦੋ ਸਥਿਤੀਆਂ Center ਅਤੇ Diagonal ਹੁੰਦੀਆਂ ਹਨ',
        hi: 'अखबार जैसे दो कॉलमों के बीच का स्थान; इसकी दो स्थितियाँ Center और Diagonal होती हैं',
      },
      D: {
        en: 'Margin outside the printable area used by laser printers; its two positions are Header and Footer',
        pa: 'ਪ੍ਰਿੰਟ ਹੋਣ ਵਾਲੇ ਖੇਤਰ ਤੋਂ ਬਾਹਰਲੀ ਥਾਂ; ਇਸ ਦੀਆਂ ਦੋ ਸਥਿਤੀਆਂ Header ਅਤੇ Footer ਹੁੰਦੀਆਂ ਹਨ',
        hi: 'मुद्रण योग्य क्षेत्र के बाहर का स्थान; इसकी दो स्थितियाँ Header और Footer होती हैं',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Gutter margin is additional margin space added to the side margin (Left) or top margin (Top) of a document that you plan to bind, ensuring that binding does not hide printed text. Default page orientation in MS Word is Portrait (vertical), while the alternative is Landscape (horizontal).',
      pa: 'Gutter Margin ਉਹ ਵਾਧੂ ਹਾਸ਼ੀਆ (Margin) ਹੈ ਜੋ ਦਸਤਾਵੇਜ਼ ਦੀ ਜਿਲਦਬੰਦੀ (Binding) ਕਰਨ ਵੇਲੇ ਪਾਠ ਨੂੰ ਛੁਪਣ ਤੋਂ ਬਚਾਉਣ ਲਈ ਛੱਡਿਆ ਜਾਂਦਾ ਹੈ। MS Word ਵਿੱਚ Gutter Position ਕੇਵਲ ਦੋ ਪਾਸੇ ਹੋ ਸਕਦੀ ਹੈ: Left (ਖੱਬੇ) ਜਾਂ Top (ਉੱਪਰ)।',
      hi: 'Gutter Margin वह अतिरिक्त हाशिया है जो दस्तावेज़ की बाइंडिंग (Binding) करते समय पाठ को दबने से बचाने के लिए जोड़ा जाता है। MS Word में Gutter Position केवल दो स्थानों पर सेट की जा सकती है: Left (बाएँ) या Top (ऊपर)।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-mso-5',
    topicId: 'clerk-ms-office-mastery',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'Which feature of MS Word allows an office clerk to send a standard circular or interview call letter to 500 different candidates by combining a "Main Document" with a "Data Source" (such as an Excel sheet of names and addresses)?',
      pa: 'MS Word ਦੀ ਕਿਹੜੀ ਵਿਸ਼ੇਸ਼ਤਾ ਰਾਹੀਂ ਦਫ਼ਤਰੀ ਕਲਰਕ ਇੱਕ "ਮੁੱਖ ਦਸਤਾਵੇਜ਼ (Main Document)" ਨੂੰ "ਡਾਟਾ ਸਰੋਤ (Data Source — ਜਿਵੇਂ ਐਕਸਲ ਦੀ ਨਾਂ-ਪਤਿਆਂ ਵਾਲੀ ਸੂਚੀ)" ਨਾਲ ਜੋੜ ਕੇ 500 ਵੱਖ-ਵੱਖ ਉਮੀਦਵਾਰਾਂ ਲਈ ਕਾਲ ਲੈਟਰ ਜਾਂ ਗਸ਼ਤੀ ਪੱਤਰ ਤਿਆਰ ਕਰ ਸਕਦਾ ਹੈ?',
      hi: 'MS Word की किस विशेषता के माध्यम से एक कार्यालय क्लर्क "मुख्य दस्तावेज़ (Main Document)" को "डेटा स्रोत (Data Source — जैसे नाम व पतों वाली एक्सेल शीट)" के साथ जोड़कर 500 विभिन्न अभ्यर्थियों के लिए कॉल लेटर या परिपत्र तैयार कर सकता है?',
    },
    options: {
      A: {
        en: 'Mail Merge (under the Mailings tab)',
        pa: 'ਮੇਲ ਮਰਜ (Mail Merge — Mailings ਟੈਬ ਅਧੀਨ)',
        hi: 'मेल मर्ज (Mail Merge — Mailings टैब के अंतर्गत)',
      },
      B: {
        en: 'Track Changes (under the Review tab)',
        pa: 'ਟ੍ਰੈਕ ਚੇਂਜਿਜ਼ (Track Changes — Review ਟੈਬ ਅਧੀਨ)',
        hi: 'ट्रैक चेंजेस (Track Changes — Review टैब के अंतर्गत)',
      },
      C: {
        en: 'Cross-Reference (under the References tab)',
        pa: 'ਕ੍ਰਾਸ-ਰੈਫਰੈਂਸ (Cross-Reference — References ਟੈਬ ਅਧੀਨ)',
        hi: 'क्रॉस-रेफरेंस (Cross-Reference — References टैब के अंतर्गत)',
      },
      D: {
        en: 'Format Painter (under the Home tab)',
        pa: 'ਫਾਰਮੈਟ ਪੇਂਟਰ (Format Painter — Home ਟੈਬ ਅਧੀਨ)',
        hi: 'फ़ॉर्मेट पेंटर (Format Painter — Home टैब के अंतर्गत)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Mail Merge (found in the Mailings tab) merges a template Main Document (letter, envelope, label, email) with a structured Data Source (Excel spreadsheet, Access database, or Outlook contacts) to generate personalized bulk documents.',
      pa: 'Mail Merge (ਜੋ Mailings ਟੈਬ ਵਿੱਚ ਹੁੰਦਾ ਹੈ) ਰਾਹੀਂ ਇੱਕ ਸਾਂਝੇ ਪੱਤਰ (Main Document) ਨੂੰ ਪਤਿਆਂ ਦੀ ਸੂਚੀ (Data Source) ਨਾਲ ਮਿਲਾ ਕੇ ਸੈਂਕੜੇ ਵਿਅਕਤੀਆਂ ਲਈ ਵੱਖੋ-ਵੱਖਰੇ ਪੱਤਰ ਜਾਂ ਲਿਫ਼ਾਫ਼ੇ ਇੱਕੋ ਵਾਰ ਤਿਆਰ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।',
      hi: 'Mail Merge (जो Mailings टैब में होता है) के द्वारा एक मुख्य पत्र (Main Document) को नाम-पतों की सूची (Data Source) के साथ मिलाकर सैकड़ों व्यक्तियों के लिए व्यक्तिगत पत्र या लिफ़ाफ़े एक साथ तैयार किए जाते हैं।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-mso-6',
    topicId: 'clerk-ms-office-mastery',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'In Microsoft Excel, every formula must begin with which symbol, how are Relative, Absolute, and Mixed cell references represented, and which function key cycles through them?',
      pa: 'ਮਾਈਕ੍ਰੋਸਾਫਟ ਐਕਸਲ (MS Excel) ਵਿੱਚ ਹਰ ਫਾਰਮੂਲਾ ਕਿਸ ਚਿੰਨ੍ਹ ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ, Relative, Absolute ਅਤੇ Mixed ਸੈੱਲ ਰੈਫਰੈਂਸ ਕਿਵੇਂ ਲਿਖੇ ਜਾਂਦੇ ਹਨ, ਅਤੇ ਇਹਨਾਂ ਨੂੰ ਬਦਲਣ ਲਈ ਕਿਹੜੀ ਫੰਕਸ਼ਨ ਕੁੰਜੀ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?',
      hi: 'माइक्रोसॉफ्ट एक्सेल (MS Excel) में प्रत्येक फ़ॉर्मूला किस चिह्न से शुरू होता है, Relative, Absolute और Mixed सेल रेफरेंस कैसे लिखे जाते हैं, तथा इन्हें बदलने के लिए कौन-सी फ़ंक्शन कुंजी प्रयुक्त होती है?',
    },
    options: {
      A: {
        en: 'Begins with "=" (Equal sign) | Relative: A1, Absolute: $A$1, Mixed: $A1 or A$1 | Toggled using the F4 key',
        pa: '"=" (ਬਰਾਬਰ ਚਿੰਨ੍ਹ) ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ | Relative: A1, Absolute: $A$1, Mixed: $A1 ਜਾਂ A$1 | F4 ਕੁੰਜੀ ਨਾਲ ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ',
        hi: '"=" (बराबर चिह्न) से शुरू होता है | Relative: A1, Absolute: $A$1, Mixed: $A1 या A$1 | F4 कुंजी से बदला जाता है',
      },
      B: {
        en: 'Begins with "#" (Hash sign) | Relative: $A$1, Absolute: A1, Mixed: #A#1 | Toggled using the F2 key',
        pa: '"#" ਚਿੰਨ੍ਹ ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ | Relative: $A$1, Absolute: A1, Mixed: #A#1 | F2 ਕੁੰਜੀ ਨਾਲ ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ',
        hi: '"#" चिह्न से शुरू होता है | Relative: $A$1, Absolute: A1, Mixed: #A#1 | F2 कुंजी से बदला जाता है',
      },
      C: {
        en: 'Begins with "@" (At sign) | Relative: A1, Absolute: &A&1, Mixed: &A1 | Toggled using the F5 key',
        pa: '"@" ਚਿੰਨ੍ਹ ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ | Relative: A1, Absolute: &A&1, Mixed: &A1 | F5 ਕੁੰਜੀ ਨਾਲ ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ',
        hi: '"@" चिह्न से शुरू होता है | Relative: A1, Absolute: &A&1, Mixed: &A1 | F5 कुंजी से बदला जाता है',
      },
      D: {
        en: 'Begins with "$" (Dollar sign) | Relative: A1, Absolute: *A*1, Mixed: *A1 | Toggled using the F9 key',
        pa: '"$" ਚਿੰਨ੍ਹ ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ | Relative: A1, Absolute: *A*1, Mixed: *A1 | F9 ਕੁੰਜੀ ਨਾਲ ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ',
        hi: '"$" चिह्न से शुरू होता है | Relative: A1, Absolute: *A*1, Mixed: *A1 | F9 कुंजी से बदला जाता है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In MS Excel: 1. Every formula/function starts with "="; 2. "A1" is a Relative reference (adjusts when copied), "$A$1" is an Absolute reference (locks both column A and row 1), and "$A1" or "A$1" is a Mixed reference; 3. Pressing F4 while editing a formula cycles through A1 → $A$1 → A$1 → $A1. (Note: F2 edits the active cell).',
      pa: 'MS Excel ਵਿੱਚ ਹਰ ਫਾਰਮੂਲਾ "=" ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ। "A1" Relative ਰੈਫਰੈਂਸ ਹੈ, "$A$1" Absolute ਰੈਫਰੈਂਸ ਹੈ (ਜੋ ਕਾਪੀ ਕਰਨ ’ਤੇ ਨਹੀਂ ਬਦਲਦਾ), ਅਤੇ "$A1" ਜਾਂ "A$1" Mixed ਰੈਫਰੈਂਸ ਹੈ। F4 ਕੁੰਜੀ ਦਬਾ ਕੇ ਇਹਨਾਂ ਨੂੰ ਆਪਸ ਵਿੱਚ ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ (F2 ਸੈੱਲ ਨੂੰ Edit ਕਰਨ ਲਈ ਹੈ)।',
      hi: 'MS Excel में प्रत्येक फ़ॉर्मूला "=" से शुरू होता है। "A1" Relative रेफरेंस है, "$A$1" Absolute रेफरेंस है (जो कॉपी करने पर नहीं बदलता), और "$A1" या "A$1" Mixed रेफरेंस है। F4 कुंजी दबाकर इन्हें आपस में बदला जाता है (F2 सक्रिय सेल को Edit करने के लिए है)।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-mso-7',
    topicId: 'clerk-ms-office-mastery',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'Suppose cells A1 to A5 in an MS Excel worksheet contain: A1 = 25, A2 = "Clerk", A3 = 50, A4 = (Blank/Empty), and A5 = TRUE. What values will the formulas `=COUNT(A1:A5)`, `=COUNTA(A1:A5)`, and `=COUNTBLANK(A1:A5)` return respectively?',
      pa: 'ਮੰਨ ਲਓ MS Excel ਵਿੱਚ A1 ਤੋਂ A5 ਸੈੱਲਾਂ ਵਿੱਚ ਇਹ ਡਾਟਾ ਹੈ: A1 = 25, A2 = "Clerk", A3 = 50, A4 = (ਖਾਲੀ/Blank), ਅਤੇ A5 = TRUE। ਤਾਂ `=COUNT(A1:A5)`, `=COUNTA(A1:A5)` ਅਤੇ `=COUNTBLANK(A1:A5)` ਦੇ ਉੱਤਰ ਕ੍ਰਮਵਾਰ ਕੀ ਹੋਣਗੇ?',
      hi: 'मान लीजिए MS Excel में A1 से A5 सेलों में यह डेटा है: A1 = 25, A2 = "Clerk", A3 = 50, A4 = (खाली/Blank), और A5 = TRUE। तो `=COUNT(A1:A5)`, `=COUNTA(A1:A5)` और `=COUNTBLANK(A1:A5)` के परिणाम क्रमशः क्या होंगे?',
    },
    options: {
      A: {
        en: 'COUNT = 2, COUNTA = 4, and COUNTBLANK = 1',
        pa: 'COUNT = 2, COUNTA = 4, ਅਤੇ COUNTBLANK = 1',
        hi: 'COUNT = 2, COUNTA = 4, और COUNTBLANK = 1',
      },
      B: {
        en: 'COUNT = 4, COUNTA = 2, and COUNTBLANK = 1',
        pa: 'COUNT = 4, COUNTA = 2, ਅਤੇ COUNTBLANK = 1',
        hi: 'COUNT = 4, COUNTA = 2, और COUNTBLANK = 1',
      },
      C: {
        en: 'COUNT = 3, COUNTA = 5, and COUNTBLANK = 0',
        pa: 'COUNT = 3, COUNTA = 5, ਅਤੇ COUNTBLANK = 0',
        hi: 'COUNT = 3, COUNTA = 5, और COUNTBLANK = 0',
      },
      D: {
        en: 'COUNT = 2, COUNTA = 5, and COUNTBLANK = 2',
        pa: 'COUNT = 2, COUNTA = 5, ਅਤੇ COUNTBLANK = 2',
        hi: 'COUNT = 2, COUNTA = 5, और COUNTBLANK = 2',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In MS Excel: 1. `COUNT()` counts only cells containing numeric values/dates (here A1=25 and A3=50 → returns 2); 2. `COUNTA()` (Count All) counts all non-empty cells including numbers, text ("Clerk"), and logical values (TRUE) (here A1, A2, A3, A5 → returns 4); 3. `COUNTBLANK()` counts only empty cells (here A4 → returns 1).',
      pa: 'MS Excel ਵਿੱਚ: 1. `COUNT()` ਕੇਵਲ ਸੰਖਿਆਵਾਂ (Numbers) ਵਾਲੇ ਸੈੱਲ ਗਿਣਦਾ ਹੈ (25 ਅਤੇ 50 = 2); 2. `COUNTA()` ਸਾਰੇ ਭਰੇ ਹੋਏ (Non-empty) ਸੈੱਲ ਗਿਣਦਾ ਹੈ ਭਾਵੇਂ ਉਹਨਾਂ ਵਿੱਚ ਟੈਕਸਟ ਜਾਂ TRUE ਲਿਖਿਆ ਹੋਵੇ (A1, A2, A3, A5 = 4); 3. `COUNTBLANK()` ਕੇਵਲ ਖਾਲੀ ਸੈੱਲ ਗਿਣਦਾ ਹੈ (A4 = 1)।',
      hi: 'MS Excel में: 1. `COUNT()` केवल संख्यात्मक मानों (Numbers) वाले सेल गिनता है (25 और 50 = 2); 2. `COUNTA()` सभी गैर-खाली (Non-empty) सेल गिनता है चाहे उनमें टेक्स्ट या TRUE हो (A1, A2, A3, A5 = 4); 3. `COUNTBLANK()` केवल खाली सेल गिनता है (A4 = 1)।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-mso-8',
    topicId: 'clerk-ms-office-mastery',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'In MS Excel, what is the correct syntax of the `VLOOKUP` function, and which operator serves as the shorthand equivalent of the `CONCATENATE` function to join text strings?',
      pa: 'MS Excel ਵਿੱਚ `VLOOKUP` ਫੰਕਸ਼ਨ ਦਾ ਸਹੀ ਸਿੰਟੈਕਸ (Syntax) ਕੀ ਹੈ, ਅਤੇ ਦੋ ਟੈਕਸਟ ਸੈੱਲਾਂ ਨੂੰ ਆਪਸ ਵਿੱਚ ਜੋੜਨ ਲਈ `CONCATENATE` ਫੰਕਸ਼ਨ ਦੀ ਥਾਂ ਕਿਹੜਾ ਚਿੰਨ੍ਹ (Operator) ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
      hi: 'MS Excel में `VLOOKUP` फ़ंक्शन का सही सिंटैक्स (Syntax) क्या है, तथा दो टेक्स्ट सेलों को आपस में जोड़ने के लिए `CONCATENATE` फ़ंक्शन के स्थान पर कौन-सा ऑपरेटर प्रयुक्त होता है?',
    },
    options: {
      A: {
        en: '`=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])` | The Ampersand `&` operator joins text strings (e.g., `=A1&B1`)',
        pa: '`=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])` | ਐਂਪਰਸੈਂਡ `&` ਚਿੰਨ੍ਹ ਟੈਕਸਟ ਨੂੰ ਜੋੜਦਾ ਹੈ (ਜਿਵੇਂ `=A1&B1`)',
        hi: '`=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])` | एम्परसेंड `&` ऑपरेटर टेक्स्ट को जोड़ता है (जैसे `=A1&B1`)',
      },
      B: {
        en: '`=VLOOKUP(table_array, row_index_num, lookup_value)` | The Plus `+` operator joins text strings',
        pa: '`=VLOOKUP(table_array, row_index_num, lookup_value)` | ਜਮ੍ਹਾਂ `+` ਦਾ ਚਿੰਨ੍ਹ ਟੈਕਸਟ ਨੂੰ ਜੋੜਦਾ ਹੈ',
        hi: '`=VLOOKUP(table_array, row_index_num, lookup_value)` | प्लस `+` ऑपरेटर टेक्स्ट को जोड़ता है',
      },
      C: {
        en: '`=VLOOKUP(col_index_num, lookup_value, [range_lookup])` | The Dollar `$` operator joins text strings',
        pa: '`=VLOOKUP(col_index_num, lookup_value, [range_lookup])` | ਡਾਲਰ `$` ਦਾ ਚਿੰਨ੍ਹ ਟੈਕਸਟ ਨੂੰ ਜੋੜਦਾ ਹੈ',
        hi: '`=VLOOKUP(col_index_num, lookup_value, [range_lookup])` | डॉलर `$` ऑपरेटर टेक्स्ट को जोड़ता है',
      },
      D: {
        en: '`=VLOOKUP(logical_test, value_if_true, value_if_false)` | The Percent `%` operator joins text strings',
        pa: '`=VLOOKUP(logical_test, value_if_true, value_if_false)` | ਪ੍ਰਤੀਸ਼ਤ `%` ਦਾ ਚਿੰਨ੍ਹ ਟੈਕਸਟ ਨੂੰ ਜੋੜਦਾ ਹੈ',
        hi: '`=VLOOKUP(logical_test, value_if_true, value_if_false)` | प्रतिशत `%` ऑपरेटर टेक्स्ट को जोड़ता है',
      },
    },
    correct: 'A',
    explanation: {
      en: '`VLOOKUP` (Vertical Lookup) searches for a value in the leftmost column of a table and returns a value in the same row from a specified column number: `=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])` (where FALSE/0 = exact match). The `&` (Ampersand) is Excel’s text concatenation operator. (Note: `=IF(logical_test, value_if_true, value_if_false)` is the syntax for IF).',
      pa: '`VLOOKUP` ਟੇਬਲ ਦੇ ਪਹਿਲੇ ਕਾਲਮ ਵਿੱਚ ਮੁੱਲ ਲੱਭ ਕੇ ਨਿਰਧਾਰਤ ਕਾਲਮ ਨੰਬਰ ਵਿੱਚੋਂ ਨਤੀਜਾ ਦਿੰਦਾ ਹੈ: `=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])`। ਟੈਕਸਟ ਜੋੜਨ ਲਈ `CONCATENATE` ਜਾਂ `&` (Ampersand) ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
      hi: '`VLOOKUP` तालिका के सबसे बाएँ कॉलम में मान खोजकर निर्दिष्ट कॉलम संख्या से परिणाम लौटाता है: `=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])`। टेक्स्ट जोड़ने के लिए `CONCATENATE` या `&` (Ampersand) का प्रयोग होता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-mso-9',
    topicId: 'clerk-ms-office-mastery',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'Match the following MS Excel error indicators with their exact causes: (1) `#####`, (2) `#DIV/0!`, (3) `#NAME?`, and (4) `#REF!`:',
      pa: 'MS Excel ਵਿੱਚ ਆਉਣ ਵਾਲੇ ਐਰਰ (Errors) ਨੂੰ ਉਹਨਾਂ ਦੇ ਸਹੀ ਕਾਰਨਾਂ ਨਾਲ ਮਿਲਾਓ: (1) `#####`, (2) `#DIV/0!`, (3) `#NAME?`, ਅਤੇ (4) `#REF!`:',
      hi: 'MS Excel में आने वाली त्रुटियों (Errors) को उनके सही कारणों से सुमेलित करें: (1) `#####`, (2) `#DIV/0!`, (3) `#NAME?`, और (4) `#REF!`:',
    },
    options: {
      A: {
        en: '(1) `#####` = Column is not wide enough to display the number | (2) `#DIV/0!` = Division by zero or empty cell | (3) `#NAME?` = Unrecognized/misspelled function name | (4) `#REF!` = Invalid/deleted cell reference',
        pa: '(1) `#####` = ਕਾਲਮ ਦੀ ਚੌੜਾਈ ਸੰਖਿਆ ਦਿਖਾਉਣ ਲਈ ਘੱਟ ਹੋਣਾ | (2) `#DIV/0!` = ਜ਼ੀਰੋ (0) ਜਾਂ ਖਾਲੀ ਸੈੱਲ ਨਾਲ ਭਾਗ ਕਰਨਾ | (3) `#NAME?` = ਫੰਕਸ਼ਨ ਦੇ ਸਪੈਲਿੰਗ ਗ਼ਲਤ ਹੋਣਾ | (4) `#REF!` = ਰੈਫਰੈਂਸ ਦਿੱਤਾ ਸੈੱਲ ਡਿਲੀਟ ਹੋ ਜਾਣਾ',
        hi: '(1) `#####` = संख्या दिखाने के लिए कॉलम की चौड़ाई कम होना | (2) `#DIV/0!` = शून्य (0) या खाली सेल से भाग देना | (3) `#NAME?` = फ़ंक्शन का नाम/स्पेलिंग गलत होना | (4) `#REF!` = संदर्भित सेल का डिलीट/अमान्य हो जाना',
      },
      B: {
        en: '(1) `#####` = Deleted row | (2) `#DIV/0!` = Wrong font | (3) `#NAME?` = Missing file name | (4) `#REF!` = Formula missing "=" sign',
        pa: '(1) `#####` = ਡਿਲੀਟ ਕੀਤੀ ਕਤਾਰ | (2) `#DIV/0!` = ਗ਼ਲਤ ਫੌਂਟ | (3) `#NAME?` = ਫਾਈਲ ਦਾ ਨਾਂ ਨਾ ਹੋਣਾ | (4) `#REF!` = "=" ਚਿੰਨ੍ਹ ਨਾ ਹੋਣਾ',
        hi: '(1) `#####` = डिलीट की गई पंक्ति | (2) `#DIV/0!` = गलत फ़ॉन्ट | (3) `#NAME?` = फ़ाइल का नाम न होना | (4) `#REF!` = "=" चिह्न न होना',
      },
      C: {
        en: '(1) `#####` = Password protected cell | (2) `#DIV/0!` = Multiplication overflow | (3) `#NAME?` = Duplicate sheet name | (4) `#REF!` = Circular reference',
        pa: '(1) `#####` = ਪਾਸਵਰਡ ਲੱਗਿਆ ਸੈੱਲ | (2) `#DIV/0!` = ਗੁਣਾ ਵੱਧ ਹੋਣਾ | (3) `#NAME?` = ਸ਼ੀਟ ਦਾ ਨਾਂ ਦੁਬਾਰਾ ਹੋਣਾ | (4) `#REF!` = ਸਰਕੂਲਰ ਰੈਫਰੈਂਸ',
        hi: '(1) `#####` = पासवर्ड सुरक्षित सेल | (2) `#DIV/0!` = गुणन ओवरफ़्लो | (3) `#NAME?` = डुप्लिकेट शीट नाम | (4) `#REF!` = सर्कुलर रेफरेंस',
      },
      D: {
        en: '(1) `#####` = Division by zero | (2) `#DIV/0!` = Column too narrow | (3) `#NAME?` = Deleted cell reference | (4) `#REF!` = Misspelled formula',
        pa: '(1) `#####` = ਜ਼ੀਰੋ ਨਾਲ ਭਾਗ | (2) `#DIV/0!` = ਕਾਲਮ ਤੰਗ ਹੋਣਾ | (3) `#NAME?` = ਸੈੱਲ ਡਿਲੀਟ ਹੋਣਾ | (4) `#REF!` = ਫਾਰਮੂਲੇ ਦੇ ਗ਼ਲਤ ਸਪੈਲਿੰਗ',
        hi: '(1) `#####` = शून्य से भाग | (2) `#DIV/0!` = कॉलम संकरा होना | (3) `#NAME?` = सेल डिलीट होना | (4) `#REF!` = फ़ॉर्मूला की गलत स्पेलिंग',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Excel error meanings: `#####` appears when the column is too narrow to fit a numeric value (or a negative date/time is formatted); `#DIV/0!` occurs when dividing by 0; `#NAME?` occurs when a formula name is misspelled (e.g., `=SUME(A1:A5)`); `#REF!` occurs when a cell referenced by a formula is deleted.',
      pa: 'MS Excel ਵਿੱਚ: `#####` ਉਦੋਂ ਆਉਂਦਾ ਹੈ ਜਦੋਂ ਕਾਲਮ ਦੀ ਚੌੜਾਈ ਅੰਕੜੇ ਨਾਲੋਂ ਛੋਟੀ ਹੋਵੇ; `#DIV/0!` ਜ਼ੀਰੋ ਨਾਲ ਭਾਗ ਕਰਨ ’ਤੇ; `#NAME?` ਫਾਰਮੂਲੇ ਦੇ ਸਪੈਲਿੰਗ ਗ਼ਲਤ ਹੋਣ ’ਤੇ; ਅਤੇ `#REF!` ਫਾਰਮੂਲੇ ਵਿੱਚ ਵਰਤਿਆ ਸੈੱਲ ਡਿਲੀਟ ਹੋ ਜਾਣ ’ਤੇ ਆਉਂਦਾ ਹੈ।',
      hi: 'MS Excel में: `#####` तब आता है जब कॉलम की चौड़ाई संख्या से कम हो; `#DIV/0!` शून्य से भाग देने पर; `#NAME?` फ़ंक्शन की स्पेलिंग गलत होने पर; और `#REF!` फ़ॉर्मूले में प्रयुक्त सेल के डिलीट हो जाने पर आता है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-mso-10',
    topicId: 'clerk-ms-office-mastery',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'In Microsoft PowerPoint, carefully distinguish between: (1) `Ctrl + M` vs `Ctrl + N`, (2) `F5` vs `Shift + F5`, and (3) what is the purpose of "Slide Master"?',
      pa: 'ਮਾਈਕ੍ਰੋਸਾਫਟ ਪਾਵਰਪੁਆਇੰਟ (MS PowerPoint) ਵਿੱਚ: (1) `Ctrl + M` ਬਨਾਮ `Ctrl + N`, (2) `F5` ਬਨਾਮ `Shift + F5`, ਅਤੇ (3) "Slide Master" ਦੇ ਕੰਮ ਬਾਰੇ ਸਹੀ ਵਿਕਲਪ ਚੁਣੋ:',
      hi: 'माइक्रोसॉफ्ट पावरपॉइंट (MS PowerPoint) में: (1) `Ctrl + M` बनाम `Ctrl + N`, (2) `F5` बनाम `Shift + F5`, तथा (3) "Slide Master" के कार्य के संबंध में सही विकल्प चुनें:',
    },
    options: {
      A: {
        en: '`Ctrl + M` inserts a New Slide whereas `Ctrl + N` creates a New Presentation | `F5` starts Slide Show from the first slide whereas `Shift + F5` starts from the current slide | Slide Master applies uniform fonts, logos, and layouts across all slides simultaneously',
        pa: '`Ctrl + M` ਨਵੀਂ ਸਲਾਈਡ (New Slide) ਜੋੜਦਾ ਹੈ ਜਦਕਿ `Ctrl + N` ਨਵੀਂ ਪ੍ਰੈਜ਼ੈਂਟੇਸ਼ਨ ਬਣਾਉਂਦਾ ਹੈ | `F5` ਪਹਿਲੀ ਸਲਾਈਡ ਤੋਂ ਅਤੇ `Shift + F5` ਮੌਜੂਦਾ ਸਲਾਈਡ ਤੋਂ ਸਲਾਈਡ-ਸ਼ੋਅ ਚਲਾਉਂਦਾ ਹੈ | Slide Master ਸਾਰੀਆਂ ਸਲਾਈਡਾਂ ਉੱਤੇ ਇੱਕੋ ਜਿਹਾ ਲੋਗੋ, ਫੌਂਟ ਅਤੇ ਡਿਜ਼ਾਈਨ ਲਾਗੂ ਕਰਦਾ ਹੈ',
        hi: '`Ctrl + M` नई स्लाइड (New Slide) जोड़ता है जबकि `Ctrl + N` नई प्रेज़ेंटेशन बनाता है | `F5` पहली स्लाइड से और `Shift + F5` वर्तमान स्लाइड से स्लाइड-शो शुरू करता है | Slide Master सभी स्लाइडों पर एक समान लोगो, फ़ॉन्ट और लेआउट लागू करता है',
      },
      B: {
        en: '`Ctrl + N` inserts a New Slide whereas `Ctrl + M` mutes audio | `F5` refreshes the slide whereas `Shift + F5` closes PowerPoint | Slide Master records voice narration',
        pa: '`Ctrl + N` ਨਵੀਂ ਸਲਾਈਡ ਜੋੜਦਾ ਹੈ ਅਤੇ `Ctrl + M` ਆਵਾਜ਼ ਬੰਦ ਕਰਦਾ ਹੈ | `F5` ਰਿਫ੍ਰੈਸ਼ ਕਰਦਾ ਹੈ ਅਤੇ `Shift + F5` ਬੰਦ ਕਰਦਾ ਹੈ | Slide Master ਆਵਾਜ਼ ਰਿਕਾਰਡ ਕਰਦਾ ਹੈ',
        hi: '`Ctrl + N` नई स्लाइड जोड़ता है और `Ctrl + M` ऑडियो म्यूट करता है | `F5` रिफ्रेश करता है और `Shift + F5` बंद करता है | Slide Master आवाज़ रिकॉर्ड करता है',
      },
      C: {
        en: '`Ctrl + M` duplicates a slide whereas `Ctrl + D` inserts a blank slide | `F5` prints handouts | Slide Master checks spelling',
        pa: '`Ctrl + M` ਸਲਾਈਡ ਡੁਪਲੀਕੇਟ ਕਰਦਾ ਹੈ ਅਤੇ `Ctrl + D` ਖਾਲੀ ਸਲਾਈਡ ਪਾਉਂਦਾ ਹੈ | `F5` ਪ੍ਰਿੰਟ ਕੱਢਦਾ ਹੈ | Slide Master ਸਪੈਲਿੰਗ ਚੈੱਕ ਕਰਦਾ ਹੈ',
        hi: '`Ctrl + M` स्लाइड डुप्लिकेट करता है और `Ctrl + D` खाली स्लाइड डालता है | `F5` प्रिंट निकालता है | Slide Master स्पेलिंग जाँचता है',
      },
      D: {
        en: 'Both `Ctrl + M` and `Ctrl + N` open a saved presentation | `F5` and `Shift + F5` delete slides | Slide Master exports video',
        pa: '`Ctrl + M` ਅਤੇ `Ctrl + N` ਦੋਵੇਂ ਪੁਰਾਣੀ ਫਾਈਲ ਖੋਲ੍ਹਦੇ ਹਨ | `F5` ਸਲਾਈਡ ਡਿਲੀਟ ਕਰਦਾ ਹੈ | Slide Master ਵੀਡੀਓ ਬਣਾਉਂਦਾ ਹੈ',
        hi: '`Ctrl + M` और `Ctrl + N` दोनों पुरानी फ़ाइल खोलते हैं | `F5` स्लाइड डिलीट करता है | Slide Master वीडियो बनाता है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Classic PowerPoint exam trap: `Ctrl + M` inserts a New Slide into the current presentation (`Ctrl + D` duplicates the selected slide), while `Ctrl + N` opens a brand-new presentation file. `F5` launches the Slide Show from Slide 1, `Shift + F5` launches it from the active slide, and Slide Master (View tab) controls global formatting/logos for all slides.',
      pa: 'PowerPoint ਵਿੱਚ: ਨਵੀਂ ਸਲਾਈਡ ਪਾਉਣ ਲਈ `Ctrl + M` (ਡੁਪਲੀਕੇਟ ਸਲਾਈਡ ਲਈ `Ctrl + D`) ਅਤੇ ਨਵੀਂ ਪ੍ਰੈਜ਼ੈਂਟੇਸ਼ਨ ਫਾਈਲ ਲਈ `Ctrl + N` ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। ਸ਼ੁਰੂ ਤੋਂ ਸਲਾਈਡ-ਸ਼ੋਅ ਲਈ `F5` ਅਤੇ ਮੌਜੂਦਾ ਸਲਾਈਡ ਤੋਂ ਚਲਾਉਣ ਲਈ `Shift + F5` ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। Slide Master ਰਾਹੀਂ ਸਾਰੀਆਂ ਸਲਾਈਡਾਂ ਦਾ ਫੌਂਟ ਤੇ ਲੋਗੋ ਇਕੱਠਾ ਸੈੱਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।',
      hi: 'PowerPoint में: नई स्लाइड डालने के लिए `Ctrl + M` (डुप्लिकेट स्लाइड के लिए `Ctrl + D`) और नई प्रेज़ेंटेशन फ़ाइल के लिए `Ctrl + N` प्रयुक्त होता है। प्रारंभ से स्लाइड-शो के लिए `F5` और वर्तमान स्लाइड से चलाने के लिए `Shift + F5` प्रयुक्त होता है। Slide Master से सभी स्लाइडों का डिज़ाइन व लोगो एक साथ नियंत्रित होता है।',
    },
    difficulty: 'easy',
  },

  // ===========================================================================
  // SECTION 4B: COMPUTER / IT — COMPUTER HARDWARE, ARCHITECTURE & MEMORY
  // topicId: 'clerk-computer-hardware' | subjectId: 'clerk-special' (8 MCQs)
  // ===========================================================================
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-hw-1',
    topicId: 'clerk-computer-hardware',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'What is the correct chronological order of the core hardware switching technologies used across the First to Fifth Generations of Computers?',
      pa: 'ਕੰਪਿਊਟਰ ਦੀਆਂ ਪਹਿਲੀ ਤੋਂ ਪੰਜਵੀਂ ਪੀੜ੍ਹੀ (1st to 5th Generations) ਵਿੱਚ ਵਰਤੀ ਗਈ ਮੁੱਖ ਹਾਰਡਵੇਅਰ ਤਕਨਾਲੋਜੀ ਦਾ ਸਹੀ ਕ੍ਰਮ ਕਿਹੜਾ ਹੈ?',
      hi: 'कंप्यूटर की प्रथम से पंचम पीढ़ी (1st to 5th Generations) में प्रयुक्त मुख्य हार्डवेयर तकनीक का सही कालानुक्रमिक क्रम कौन-सा है?',
    },
    options: {
      A: {
        en: '1st: Vacuum Tubes → 2nd: Transistors → 3rd: Integrated Circuits (ICs) → 4th: VLSI Microprocessors → 5th: ULSI & Artificial Intelligence',
        pa: 'ਪਹਿਲੀ: ਵੈਕਿਊਮ ਟਿਊਬਾਂ (Vacuum Tubes) → ਦੂਜੀ: ਟ੍ਰਾਂਜ਼ਿਸਟਰ (Transistors) → ਤੀਜੀ: ਇੰਟੀਗ੍ਰੇਟਿਡ ਸਰਕਟ (ICs) → ਚੌਥੀ: VLSI ਮਾਈਕ੍ਰੋਪ੍ਰੋਸੈੱਸਰ → ਪੰਜਵੀਂ: ULSI ਅਤੇ ਮਸਨੂਈ ਬੁੱਧੀ (AI)',
        hi: 'प्रथम: वैक्यूम ट्यूब (Vacuum Tubes) → द्वितीय: ट्रांज़िस्टर (Transistors) → तृतीय: इंटीग्रेटेड सर्किट (ICs) → चतुर्थ: VLSI माइक्रोप्रोसेसर → पंचम: ULSI एवं कृत्रिम बुद्धिमत्ता (AI)',
      },
      B: {
        en: '1st: Transistors → 2nd: Vacuum Tubes → 3rd: Microprocessors → 4th: ICs → 5th: Magnetic Drums',
        pa: 'ਪਹਿਲੀ: ਟ੍ਰਾਂਜ਼ਿਸਟਰ → ਦੂਜੀ: ਵੈਕਿਊਮ ਟਿਊਬਾਂ → ਤੀਜੀ: ਮਾਈਕ੍ਰੋਪ੍ਰੋਸੈੱਸਰ → ਚੌਥੀ: ICs → ਪੰਜਵੀਂ: ਮੈਗਨੈਟਿਕ ਡਰੱਮ',
        hi: 'प्रथम: ट्रांज़िस्टर → द्वितीय: वैक्यूम ट्यूब → तृतीय: माइक्रोप्रोसेसर → चतुर्थ: ICs → पंचम: मैग्नेटिक ड्रम',
      },
      C: {
        en: '1st: ICs → 2nd: VLSI → 3rd: Vacuum Tubes → 4th: Transistors → 5th: Abacus',
        pa: 'ਪਹਿਲੀ: ICs → ਦੂਜੀ: VLSI → ਤੀਜੀ: ਵੈਕਿਊਮ ਟਿਊਬਾਂ → ਚੌਥੀ: ਟ੍ਰਾਂਜ਼ਿਸਟਰ → ਪੰਜਵੀਂ: ਅਬੈਕਸ',
        hi: 'प्रथम: ICs → द्वितीय: VLSI → तृतीय: वैक्यूम ट्यूब → चतुर्थ: ट्रांज़िस्टर → पंचम: अबेकस',
      },
      D: {
        en: '1st: Silicon Chips → 2nd: Optical Fibers → 3rd: Quantum Bits → 4th: Vacuum Tubes → 5th: Transistors',
        pa: 'ਪਹਿਲੀ: ਸਿਲੀਕਾਨ ਚਿੱਪ → ਦੂਜੀ: ਆਪਟੀਕਲ ਫਾਈਬਰ → ਤੀਜੀ: ਕੁਆਂਟਮ ਬਿੱਟ → ਚੌਥੀ: ਵੈਕਿਊਮ ਟਿਊਬਾਂ → ਪੰਜਵੀਂ: ਟ੍ਰਾਂਜ਼ਿਸਟਰ',
        hi: 'प्रथम: सिलिकॉन चिप → द्वितीय: ऑप्टिकल फाइबर → तृतीय: क्वांटम बिट → चतुर्थ: वैक्यूम ट्यूब → पंचम: ट्रांज़िस्टर',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Computer Generations: 1st Gen (ENIAC/UNIVAC) used Vacuum Tubes; 2nd Gen used Transistors (invented at Bell Labs); 3rd Gen used Integrated Circuits (ICs made of silicon, invented by Jack Kilby & Robert Noyce); 4th Gen used VLSI Microprocessors (Intel 4004); 5th Gen uses ULSI (Ultra Large Scale Integration) and AI.',
      pa: 'ਕੰਪਿਊਟਰ ਪੀੜ੍ਹੀਆਂ: ਪਹਿਲੀ ਪੀੜ੍ਹੀ ਵਿੱਚ Vacuum Tubes (ENIAC/UNIVAC), ਦੂਜੀ ਵਿੱਚ Transistors, ਤੀਜੀ ਵਿੱਚ Integrated Circuits (ICs — ਸਿਲੀਕਾਨ ਚਿੱਪ), ਚੌਥੀ ਵਿੱਚ VLSI Microprocessors, ਅਤੇ ਪੰਜਵੀਂ ਪੀੜ੍ਹੀ ਵਿੱਚ ULSI ਤੇ Artificial Intelligence (AI) ਦੀ ਵਰਤੋਂ ਹੁੰਦੀ ਹੈ।',
      hi: 'कंप्यूटर पीढ़ियाँ: प्रथम पीढ़ी में Vacuum Tubes (ENIAC/UNIVAC), द्वितीय में Transistors, तृतीय में Integrated Circuits (ICs — सिलिकॉन चिप), चतुर्थ में VLSI Microprocessors, और पंचम पीढ़ी में ULSI तथा Artificial Intelligence (AI) का प्रयोग होता है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-hw-2',
    topicId: 'clerk-computer-hardware',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'Inside the Central Processing Unit (CPU), which special-purpose register holds the memory address of the NEXT instruction to be fetched and executed?',
      pa: 'ਸੀ.ਪੀ.ਯੂ. (CPU) ਦੇ ਅੰਦਰ ਕਿਹੜਾ ਵਿਸ਼ੇਸ਼ ਰਜਿਸਟਰ (Register) ਅਗਲੀ ਚੱਲਣ ਵਾਲੀ ਹਦਾਇਤ (Next Instruction) ਦਾ ਮੈਮੋਰੀ ਐਡਰੈੱਸ ਸਟੋਰ ਕਰਕੇ ਰੱਖਦਾ ਹੈ?',
      hi: 'सी.पी.यू. (CPU) के भीतर कौन-सा विशेष रजिस्टर (Register) निष्पादित किए जाने वाले अगले निर्देश (Next Instruction) का मेमोरी पता (Address) संग्रहीत रखता है?',
    },
    options: {
      A: {
        en: 'Program Counter (PC) — whereas Instruction Register (IR) holds the instruction currently being decoded/executed, and Accumulator (AC) holds intermediate ALU results',
        pa: 'ਪ੍ਰੋਗਰਾਮ ਕਾਊਂਟਰ (Program Counter - PC) — ਜਦਕਿ Instruction Register (IR) ਮੌਜੂਦਾ ਚੱਲ ਰਹੀ ਹਦਾਇਤ ਰੱਖਦਾ ਹੈ ਅਤੇ Accumulator (AC) ਗਣਨਾ ਦੇ ਨਤੀਜੇ ਰੱਖਦਾ ਹੈ',
        hi: 'प्रोग्राम काउंटर (Program Counter - PC) — जबकि Instruction Register (IR) वर्तमान में निष्पादित हो रहे निर्देश को रखता है और Accumulator (AC) मध्यवर्ती ALU परिणामों को रखता है',
      },
      B: {
        en: 'Memory Buffer Register (MBR) — which only controls the cooling fan speed of the motherboard',
        pa: 'ਮੈਮੋਰੀ ਬਫ਼ਰ ਰਜਿਸਟਰ (MBR) — ਜੋ ਕੇਵਲ ਮਦਰਬੋਰਡ ਦੇ ਪੱਖੇ ਦੀ ਰਫ਼ਤਾਰ ਕੰਟਰੋਲ ਕਰਦਾ ਹੈ',
        hi: 'मेमोरी बफ़र रजिस्टर (MBR) — जो केवल मदरबोर्ड के पंखे की गति नियंत्रित करता है',
      },
      C: {
        en: 'Hard Disk Controller (HDC) — located outside the CPU on the power supply unit',
        pa: 'ਹਾਰਡ ਡਿਸਕ ਕੰਟਰੋਲਰ (HDC) — ਜੋ ਪਾਵਰ ਸਪਲਾਈ ਯੂਨਿਟ ਉੱਤੇ ਲੱਗਿਆ ਹੁੰਦਾ ਹੈ',
        hi: 'हार्ड डिस्क कंट्रोलर (HDC) — जो पावर सप्लाई यूनिट पर स्थित होता है',
      },
      D: {
        en: 'Status Flag Register — which stores permanent user files when power is turned off',
        pa: 'ਸਟੇਟਸ ਫਲੈਗ ਰਜਿਸਟਰ — ਜੋ ਬਿਜਲੀ ਬੰਦ ਹੋਣ ’ਤੇ ਉਪਭੋਗਤਾ ਦੀਆਂ ਫਾਈਲਾਂ ਪੱਕੇ ਤੌਰ ’ਤੇ ਸੰਭਾਲਦਾ ਹੈ',
        hi: 'स्टेटस फ्लैग रजिस्टर — जो बिजली बंद होने पर उपयोगकर्ता की फ़ाइलें स्थायी रूप से सहेजता है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Key CPU Registers: 1. Program Counter (PC) holds the address of the next instruction to be executed; 2. Instruction Register (IR) holds the current instruction being executed; 3. MAR (Memory Address Register) holds the active memory location address; 4. MDR/MBR holds data fetched from/to memory; 5. Accumulator (AC) stores immediate arithmetic/logic results.',
      pa: 'CPU ਦੇ ਮੁੱਖ ਰਜਿਸਟਰ: 1. Program Counter (PC) ਅਗਲੀ ਚੱਲਣ ਵਾਲੀ ਹਦਾਇਤ (Next Instruction) ਦਾ ਐਡਰੈੱਸ ਰੱਖਦਾ ਹੈ; 2. Instruction Register (IR) ਮੌਜੂਦਾ ਚੱਲ ਰਹੀ ਹਦਾਇਤ ਰੱਖਦਾ ਹੈ; 3. Accumulator (AC) ALU ਦੀਆਂ ਗਣਨਾਵਾਂ ਦੇ ਨਤੀਜੇ ਰੱਖਦਾ ਹੈ।',
      hi: 'CPU के मुख्य रजिस्टर: 1. Program Counter (PC) निष्पादित होने वाले अगले निर्देश (Next Instruction) का पता रखता है; 2. Instruction Register (IR) वर्तमान निर्देश रखता है; 3. Accumulator (AC) ALU की गणनाओं के तात्कालिक परिणाम रखता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-hw-3',
    topicId: 'clerk-computer-hardware',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'Arrange the following computer storage components in the correct order of Access Speed from FASTEST to SLOWEST:',
      pa: 'ਹੇਠ ਲਿਖੀਆਂ ਕੰਪਿਊਟਰ ਮੈਮੋਰੀ ਕਿਸਮਾਂ ਨੂੰ ਉਹਨਾਂ ਦੀ ਕੰਮ ਕਰਨ ਦੀ ਰਫ਼ਤਾਰ (Access Speed) ਅਨੁਸਾਰ "ਸਭ ਤੋਂ ਤੇਜ਼ ਤੋਂ ਸਭ ਤੋਂ ਹੌਲੀ" (Fastest to Slowest) ਦੇ ਸਹੀ ਕ੍ਰਮ ਵਿੱਚ ਲਗਾਓ:',
      hi: 'निम्नलिखित कंप्यूटर मेमोरी घटकों को उनकी एक्सेस गति (Access Speed) के अनुसार "सबसे तेज़ से सबसे धीमे" (Fastest to Slowest) के सही क्रम में व्यवस्थित करें:',
    },
    options: {
      A: {
        en: 'CPU Registers > Cache Memory (SRAM) > Main Memory (RAM / DRAM) > Solid State Drive (SSD) > Magnetic Hard Disk Drive (HDD)',
        pa: 'CPU Registers > Cache Memory (SRAM) > Main Memory (RAM / DRAM) > Solid State Drive (SSD) > Magnetic Hard Disk (HDD)',
        hi: 'CPU Registers > Cache Memory (SRAM) > Main Memory (RAM / DRAM) > Solid State Drive (SSD) > Magnetic Hard Disk (HDD)',
      },
      B: {
        en: 'Cache Memory > CPU Registers > Hard Disk Drive (HDD) > Main Memory (RAM) > Solid State Drive (SSD)',
        pa: 'Cache Memory > CPU Registers > Hard Disk (HDD) > Main Memory (RAM) > Solid State Drive (SSD)',
        hi: 'Cache Memory > CPU Registers > Hard Disk (HDD) > Main Memory (RAM) > Solid State Drive (SSD)',
      },
      C: {
        en: 'Main Memory (RAM) > Cache Memory > CPU Registers > Magnetic Tape > Solid State Drive (SSD)',
        pa: 'Main Memory (RAM) > Cache Memory > CPU Registers > Magnetic Tape > Solid State Drive (SSD)',
        hi: 'Main Memory (RAM) > Cache Memory > CPU Registers > Magnetic Tape > Solid State Drive (SSD)',
      },
      D: {
        en: 'Solid State Drive (SSD) > Main Memory (RAM) > Cache Memory > CPU Registers > Optical DVD',
        pa: 'Solid State Drive (SSD) > Main Memory (RAM) > Cache Memory > CPU Registers > Optical DVD',
        hi: 'Solid State Drive (SSD) > Main Memory (RAM) > Cache Memory > CPU Registers > Optical DVD',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In the Computer Memory Hierarchy, as you move closer to the CPU core, speed and cost-per-bit increase while capacity decreases: CPU Registers (fastest, inside CPU) > Cache Memory (L1, L2, L3 built with SRAM) > Main RAM (DRAM) > Secondary Flash Storage (NVMe/SATA SSD) > Magnetic HDD > Optical/Magnetic Tape (slowest).',
      pa: 'ਮੈਮੋਰੀ ਦੀ ਰਫ਼ਤਾਰ (Speed) ਦਾ ਸਹੀ ਕ੍ਰਮ ਹੈ: CPU Registers (ਸਭ ਤੋਂ ਤੇਜ਼) > Cache Memory (L1, L2, L3) > Main Memory (RAM) > Solid State Drive (SSD) > Hard Disk Drive (HDD)।',
      hi: 'मेमोरी की गति (Access Speed) का सही क्रम है: CPU Registers (सबसे तेज़) > Cache Memory (L1, L2, L3) > Main Memory (RAM) > Solid State Drive (SSD) > Hard Disk Drive (HDD)।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-hw-4',
    topicId: 'clerk-computer-hardware',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'What is the technical difference between Static RAM (SRAM) and Dynamic RAM (DRAM), and why is RAM called "Volatile Memory"?',
      pa: 'Static RAM (SRAM) ਅਤੇ Dynamic RAM (DRAM) ਵਿੱਚ ਤਕਨੀਕੀ ਅੰਤਰ ਕੀ ਹੈ, ਅਤੇ RAM ਨੂੰ "Volatile Memory" (ਅਸਥਾਈ ਮੈਮੋਰੀ) ਕਿਉਂ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
      hi: 'Static RAM (SRAM) और Dynamic RAM (DRAM) में तकनीकी अंतर क्या है, तथा RAM को "Volatile Memory" (अस्थायी मेमोरी) क्यों कहा जाता है?',
    },
    options: {
      A: {
        en: 'SRAM uses flip-flops/transistors, does NOT need periodic refreshing, and is used for fast CPU Cache; DRAM uses capacitors that leak charge, requires constant refreshing thousands of times per second, and is used as Main System RAM; both are Volatile because they lose all data when power is switched off',
        pa: 'SRAM ਵਿੱਚ ਫਲਿੱਪ-ਫਲੌਪ ਵਰਤੇ ਜਾਂਦੇ ਹਨ, ਇਸ ਨੂੰ ਵਾਰ-ਵਾਰ ਰਿਫ੍ਰੈਸ਼ (Refresh) ਕਰਨ ਦੀ ਲੋੜ ਨਹੀਂ ਪੈਂਦੀ ਅਤੇ ਇਹ Cache Memory ਵਜੋਂ ਵਰਤੀ ਜਾਂਦੀ ਹੈ; DRAM ਵਿੱਚ ਕੈਪੈਸੀਟਰ ਹੁੰਦੇ ਹਨ ਜਿਸ ਨੂੰ ਪ੍ਰਤੀ ਸਕਿੰਟ ਹਜ਼ਾਰਾਂ ਵਾਰ ਰਿਫ੍ਰੈਸ਼ ਕਰਨਾ ਪੈਂਦਾ ਹੈ ਅਤੇ ਇਹ ਮੁੱਖ RAM ਵਜੋਂ ਵਰਤੀ ਜਾਂਦੀ ਹੈ; ਬਿਜਲੀ ਬੰਦ ਹੋਣ ’ਤੇ ਡਾਟਾ ਮਿਟ ਜਾਣ ਕਾਰਨ ਦੋਵੇਂ Volatile ਹਨ',
        hi: 'SRAM में फ्लिप-फ्लॉप प्रयुक्त होते हैं, इसे बार-बार रिफ्रेश (Refresh) करने की आवश्यकता नहीं होती और यह Cache Memory में प्रयुक्त होती है; DRAM में कैपेसिटर होते हैं जिसे प्रति सेकंड हज़ारों बार रिफ्रेश करना पड़ता है और यह मुख्य RAM में प्रयुक्त होती है; बिजली बंद होने पर डेटा नष्ट हो जाने के कारण दोनों Volatile हैं',
      },
      B: {
        en: 'SRAM requires constant refreshing and is slower than DRAM; both retain data permanently without electricity',
        pa: 'SRAM ਨੂੰ ਵਾਰ-ਵਾਰ ਰਿਫ੍ਰੈਸ਼ ਕਰਨਾ ਪੈਂਦਾ ਹੈ ਅਤੇ ਇਹ DRAM ਤੋਂ ਹੌਲੀ ਹੈ; ਬਿਜਲੀ ਬੰਦ ਹੋਣ ’ਤੇ ਵੀ ਡਾਟਾ ਸੁਰੱਖਿਅਤ ਰਹਿੰਦਾ ਹੈ',
        hi: 'SRAM को बार-बार रिफ्रेश करना पड़ता है और यह DRAM से धीमी है; बिजली बंद होने पर भी डेटा सुरक्षित रहता है',
      },
      C: {
        en: 'SRAM is an optical CD-ROM technology, whereas DRAM is a magnetic hard disk platter',
        pa: 'SRAM ਆਪਟੀਕਲ ਸੀਡੀ ਤਕਨਾਲੋਜੀ ਹੈ ਅਤੇ DRAM ਮੈਗਨੈਟਿਕ ਹਾਰਡ ਡਿਸਕ ਹੈ',
        hi: 'SRAM ऑप्टिकल सीडी तकनीक है और DRAM मैग्नेटिक हार्ड डिस्क है',
      },
      D: {
        en: 'SRAM is read-only firmware written at the factory, whereas DRAM cannot be accessed by the CPU',
        pa: 'SRAM ਫੈਕਟਰੀ ਵਿੱਚ ਲਿਖੀ ਜਾਣ ਵਾਲੀ Read-Only ਮੈਮੋਰੀ ਹੈ ਅਤੇ DRAM ਤੱਕ CPU ਪਹੁੰਚ ਨਹੀਂ ਕਰ ਸਕਦਾ',
        hi: 'SRAM फ़ैक्टरी में लिखी जाने वाली Read-Only मेमोरी है और DRAM तक CPU पहुँच नहीं सकता',
      },
    },
    correct: 'A',
    explanation: {
      en: 'SRAM (Static RAM) stores bits using 6-transistor flip-flop latches — it is very fast, expensive, needs no refreshing, and forms CPU Cache (L1/L2/L3). DRAM (Dynamic RAM) stores bits as charge in tiny capacitors + 1 transistor — it must be refreshed periodically and forms Main System RAM (DDR4/DDR5). Both lose contents when power is off (Volatile).',
      pa: 'SRAM (Static RAM) ਤੇਜ਼ ਅਤੇ ਮਹਿੰਗੀ ਹੁੰਦੀ ਹੈ, ਇਸ ਨੂੰ ਰਿਫ੍ਰੈਸ਼ ਨਹੀਂ ਕਰਨਾ ਪੈਂਦਾ ਅਤੇ ਇਹ Cache ਮੈਮੋਰੀ ਬਣਾਉਣ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ। DRAM (Dynamic RAM) ਕੈਪੈਸੀਟਰਾਂ ਤੋਂ ਬਣਦੀ ਹੈ ਜਿਸ ਨੂੰ ਲਗਾਤਾਰ ਰਿਫ੍ਰੈਸ਼ ਕਰਨਾ ਪੈਂਦਾ ਹੈ ਅਤੇ ਇਹ ਮੁੱਖ RAM ਵਜੋਂ ਵਰਤੀ ਜਾਂਦੀ ਹੈ। ਪਾਵਰ ਬੰਦ ਹੋਣ ’ਤੇ ਡਾਟਾ ਖ਼ਤਮ ਹੋਣ ਕਾਰਨ RAM ਨੂੰ Volatile ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
      hi: 'SRAM (Static RAM) तेज़ और महंगी होती है, इसे रिफ्रेश नहीं करना पड़ता और यह Cache मेमोरी बनाने में प्रयुक्त होती है। DRAM (Dynamic RAM) कैपेसिटर से बनती है जिसे निरंतर रिफ्रेश करना पड़ता है और यह मुख्य RAM के रूप में प्रयुक्त होती है। बिजली बंद होने पर डेटा मिटने के कारण RAM को Volatile कहा जाता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-hw-5',
    topicId: 'clerk-computer-hardware',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'When a computer is turned on (Cold Booting), which firmware stored in Non-Volatile ROM chip executes the "POST" diagnostic check before loading the Operating System into RAM?',
      pa: 'ਜਦੋਂ ਕੰਪਿਊਟਰ ਨੂੰ ਚਾਲੂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ (Booting), ਤਾਂ Non-Volatile ROM ਚਿੱਪ ਵਿੱਚ ਸਟੋਰ ਕਿਹੜਾ ਫਰਮਵੇਅਰ (Firmware) ਆਪਰੇਟਿੰਗ ਸਿਸਟਮ ਨੂੰ RAM ਵਿੱਚ ਲੋਡ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ "POST" ਜਾਂਚ ਕਰਦਾ ਹੈ?',
      hi: 'जब कंप्यूटर को चालू किया जाता है (Booting), तो Non-Volatile ROM चिप में संग्रहीत कौन-सा फ़र्मवेयर (Firmware) ऑपरेटिंग सिस्टम को RAM में लोड करने से पहले "POST" जाँच करता है?',
    },
    options: {
      A: {
        en: 'BIOS (Basic Input/Output System) / UEFI — which runs POST (Power-On Self-Test) to verify hardware components',
        pa: 'BIOS (Basic Input/Output System) / UEFI — ਜੋ ਹਾਰਡਵੇਅਰ ਉਪਕਰਨਾਂ ਦੀ ਜਾਂਚ ਲਈ POST (Power-On Self-Test) ਚਲਾਉਂਦਾ ਹੈ',
        hi: 'BIOS (Basic Input/Output System) / UEFI — जो हार्डवेयर घटकों की जाँच के लिए POST (Power-On Self-Test) चलाता है',
      },
      B: {
        en: 'MS Office Word Processor — which runs POST (Print Out Setup Test) from the hard disk',
        pa: 'MS Office ਵਰਡ ਪ੍ਰੋਸੈੱਸਰ — ਜੋ ਹਾਰਡ ਡਿਸਕ ਤੋਂ POST ਚਲਾਉਂਦਾ ਹੈ',
        hi: 'MS Office वर्ड प्रोसेसर — जो हार्ड डिस्क से POST चलाता है',
      },
      C: {
        en: 'UPS (Uninterruptible Power Supply) — which loads the web browser directly into CPU registers',
        pa: 'UPS — ਜੋ ਵੈੱਬ ਬ੍ਰਾਊਜ਼ਰ ਨੂੰ ਸਿੱਧਾ CPU ਰਜਿਸਟਰਾਂ ਵਿੱਚ ਲੋਡ ਕਰਦਾ ਹੈ',
        hi: 'UPS — जो वेब ब्राउज़र को सीधे CPU रजिस्टरों में लोड करता है',
      },
      D: {
        en: 'HTTP Compiler — which translates high-level Java code during shutdown',
        pa: 'HTTP ਕੰਪਾਈਲਰ — ਜੋ ਕੰਪਿਊਟਰ ਬੰਦ ਹੋਣ ਵੇਲੇ ਜਾਵਾ ਕੋਡ ਦਾ ਅਨੁਵਾਦ ਕਰਦਾ ਹੈ',
        hi: 'HTTP कंपाइलर — जो कंप्यूटर बंद होते समय जावा कोड का अनुवाद करता है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'BIOS (Basic Input/Output System) or modern UEFI is firmware stored on a non-volatile ROM/EEPROM (Flash) chip on the motherboard. On power-up, BIOS runs POST (Power-On Self-Test) to check RAM, keyboard, and drives, and then uses the Bootstrap Loader to load the OS kernel into RAM. System date/time and BIOS settings are kept alive by the CMOS battery.',
      pa: 'ਮਦਰਬੋਰਡ ਦੀ Non-Volatile ROM/EEPROM ਚਿੱਪ ਵਿੱਚ BIOS (Basic Input/Output System) ਜਾਂ UEFI ਫਰਮਵੇਅਰ ਹੁੰਦਾ ਹੈ। ਕੰਪਿਊਟਰ ਚਾਲੂ ਕਰਨ ’ਤੇ ਇਹ ਸਭ ਤੋਂ ਪਹਿਲਾਂ POST (Power-On Self-Test) ਰਾਹੀਂ ਹਾਰਡਵੇਅਰ ਦੀ ਜਾਂਚ ਕਰਦਾ ਹੈ ਅਤੇ ਫਿਰ ਆਪਰੇਟਿੰਗ ਸਿਸਟਮ ਨੂੰ ਹਾਰਡ ਡਿਸਕ/SSD ਤੋਂ RAM ਵਿੱਚ ਲੋਡ ਕਰਦਾ ਹੈ।',
      hi: 'मदरबोर्ड की Non-Volatile ROM/EEPROM चिप में BIOS (Basic Input/Output System) या UEFI फ़र्मवेयर होता है। कंप्यूटर चालू करने पर यह सर्वप्रथम POST (Power-On Self-Test) द्वारा हार्डवेयर की जाँच करता है और फिर ऑपरेटिंग सिस्टम को हार्ड डिस्क/SSD से RAM में लोड करता है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-hw-6',
    topicId: 'clerk-computer-hardware',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'Which of the following digital data unit conversions is 100% accurate according to binary computer memory standards?',
      pa: 'ਕੰਪਿਊਟਰ ਮੈਮੋਰੀ ਦੀਆਂ ਇਕਾਈਆਂ (Data Units) ਦੇ ਮਾਪ ਅਨੁਸਾਰ ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਸਮੀਕਰਨ ਬਿਲਕੁਲ ਸਹੀ ਹੈ?',
      hi: 'कंप्यूटर मेमोरी की इकाइयों (Data Units) के मानक के अनुसार निम्नलिखित में से कौन-सा समीकरण बिल्कुल सही है?',
    },
    options: {
      A: {
        en: '1 Nibble = 4 Bits | 1 Byte = 8 Bits (2 Nibbles) | 1 Kilobyte (KB) = 1024 Bytes (2^10 Bytes) | 1 Terabyte (TB) = 1024 Gigabytes (GB)',
        pa: '1 Nibble = 4 Bits | 1 Byte = 8 Bits (2 Nibbles) | 1 Kilobyte (KB) = 1024 Bytes (2^10 Bytes) | 1 Terabyte (TB) = 1024 Gigabytes (GB)',
        hi: '1 Nibble = 4 Bits | 1 Byte = 8 Bits (2 Nibbles) | 1 Kilobyte (KB) = 1024 Bytes (2^10 Bytes) | 1 Terabyte (TB) = 1024 Gigabytes (GB)',
      },
      B: {
        en: '1 Nibble = 8 Bits | 1 Byte = 4 Bits | 1 Kilobyte (KB) = 1000 Bits | 1 Megabyte (MB) = 512 Bytes',
        pa: '1 Nibble = 8 Bits | 1 Byte = 4 Bits | 1 Kilobyte (KB) = 1000 Bits | 1 Megabyte (MB) = 512 Bytes',
        hi: '1 Nibble = 8 Bits | 1 Byte = 4 Bits | 1 Kilobyte (KB) = 1000 Bits | 1 Megabyte (MB) = 512 Bytes',
      },
      C: {
        en: '1 Bit = 8 Bytes | 1 Nibble = 16 Bytes | 1 Gigabyte (GB) = 1024 Kilobytes (KB)',
        pa: '1 Bit = 8 Bytes | 1 Nibble = 16 Bytes | 1 Gigabyte (GB) = 1024 Kilobytes (KB)',
        hi: '1 Bit = 8 Bytes | 1 Nibble = 16 Bytes | 1 Gigabyte (GB) = 1024 Kilobytes (KB)',
      },
      D: {
        en: '1 Byte = 10 Bits | 1 Nibble = 2 Bits | 1 Petabyte (PB) = 1024 Megabytes (MB)',
        pa: '1 Byte = 10 Bits | 1 Nibble = 2 Bits | 1 Petabyte (PB) = 1024 Megabytes (MB)',
        hi: '1 Byte = 10 Bits | 1 Nibble = 2 Bits | 1 Petabyte (PB) = 1024 Megabytes (MB)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Binary memory units: Bit (Binary Digit: 0 or 1) is the smallest unit; 4 Bits = 1 Nibble; 8 Bits = 1 Byte (2 Nibbles); 1024 Bytes ($2^{10}$) = 1 KB; 1024 KB = 1 MB; 1024 MB = 1 GB; 1024 GB = 1 TB; 1024 TB = 1 Petabyte (PB); 1024 PB = 1 Exabyte (EB).',
      pa: 'ਮੈਮੋਰੀ ਇਕਾਈਆਂ: ਸਭ ਤੋਂ ਛੋਟੀ ਇਕਾਈ Bit (0 ਜਾਂ 1) ਹੈ; 4 Bits = 1 Nibble; 8 Bits = 1 Byte (2 Nibbles); 1024 Bytes = 1 KB; 1024 KB = 1 MB; 1024 MB = 1 GB; 1024 GB = 1 TB; ਅਤੇ 1024 TB = 1 Petabyte (PB)।',
      hi: 'मेमोरी इकाइयाँ: सबसे छोटी इकाई Bit (0 या 1) है; 4 Bits = 1 Nibble; 8 Bits = 1 Byte (2 Nibbles); 1024 Bytes = 1 KB; 1024 KB = 1 MB; 1024 MB = 1 GB; 1024 GB = 1 TB; और 1024 TB = 1 Petabyte (PB)।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-hw-7',
    topicId: 'clerk-computer-hardware',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'What are the Binary (Base-2) and Hexadecimal (Base-16) equivalents of the Decimal number 45 (Base-10)?',
      pa: 'ਦਸ਼ਮਲਵ ਸੰਖਿਆ (Decimal Number) 45 (Base-10) ਦਾ ਬਾਈਨਰੀ (Base-2) ਅਤੇ ਹੈਕਸਾਡੈਸੀਮਲ (Base-16) ਮੁੱਲ ਕੀ ਹੋਵੇਗਾ?',
      hi: 'दशमलव संख्या (Decimal Number) 45 (Base-10) का बाइनरी (Base-2) और हेक्साडेसिमल (Base-16) मान क्या होगा?',
    },
    options: {
      A: {
        en: 'Binary: 101101 (Base-2) | Hexadecimal: 2D (Base-16)',
        pa: 'ਬਾਈਨਰੀ: 101101 (Base-2) | ਹੈਕਸਾਡੈਸੀਮਲ: 2D (Base-16)',
        hi: 'बाइनरी: 101101 (Base-2) | हेक्साडेसिमल: 2D (Base-16)',
      },
      B: {
        en: 'Binary: 110101 (Base-2) | Hexadecimal: 3F (Base-16)',
        pa: 'ਬਾਈਨਰੀ: 110101 (Base-2) | ਹੈਕਸਾਡੈਸੀਮਲ: 3F (Base-16)',
        hi: 'बाइनरी: 110101 (Base-2) | हेक्साडेसिमल: 3F (Base-16)',
      },
      C: {
        en: 'Binary: 100111 (Base-2) | Hexadecimal: 2B (Base-16)',
        pa: 'ਬਾਈਨਰੀ: 100111 (Base-2) | ਹੈਕਸਾਡੈਸੀਮਲ: 2B (Base-16)',
        hi: 'बाइनरी: 100111 (Base-2) | हेक्साडेसिमल: 2B (Base-16)',
      },
      D: {
        en: 'Binary: 111001 (Base-2) | Hexadecimal: 45 (Base-16)',
        pa: 'ਬਾਈਨਰੀ: 111001 (Base-2) | ਹੈਕਸਾਡੈਸੀਮਲ: 45 (Base-16)',
        hi: 'बाइनरी: 111001 (Base-2) | हेक्साडेसिमल: 45 (Base-16)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Decimal 45 = 32 + 8 + 4 + 1 = (1 × 2^5) + (0 × 2^4) + (1 × 2^3) + (1 × 2^2) + (0 × 2^1) + (1 × 2^0) = 101101 in Binary (Base-2). Grouping into 4-bit nibbles from right: 0010 = 2 and 1101 = 13 (in Hexadecimal: A=10, B=11, C=12, D=13, E=14, F=15), giving 2D in Hexadecimal (Base-16).',
      pa: '45 ਨੂੰ ਬਾਈਨਰੀ ਵਿੱਚ ਬਦਲਣ ’ਤੇ: 32 + 8 + 4 + 1 = 101101 (Base-2) ਬਣਦਾ ਹੈ। ਹੈਕਸਾਡੈਸੀਮਲ (Base-16) ਲਈ 4-4 ਬਿੱਟਾਂ ਦੇ ਜੋੜੇ ਬਣਾਓ: 0010 = 2 ਅਤੇ 1101 = 13 (ਜਿੱਥੇ A=10, B=11, C=12, D=13, E=14, F=15 ਹੁੰਦਾ ਹੈ), ਇਸ ਲਈ ਉੱਤਰ 2D (Base-16) ਹੈ।',
      hi: '45 को बाइनरी में बदलने पर: 32 + 8 + 4 + 1 = 101101 (Base-2) प्राप्त होता है। हेक्साडेसिमल (Base-16) के लिए दाएँ से 4-4 बिट के समूह बनाएं: 0010 = 2 और 1101 = 13 (जहाँ A=10, B=11, C=12, D=13, E=14, F=15 होता है), अतः उत्तर 2D (Base-16) है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-hw-8',
    topicId: 'clerk-computer-hardware',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'Match the following specialized Input/Output devices with their primary official functions: (1) MICR, (2) OMR, and (3) Plotter:',
      pa: 'ਹੇਠ ਲਿਖੇ Input/Output ਉਪਕਰਨਾਂ ਨੂੰ ਉਹਨਾਂ ਦੇ ਮੁੱਖ ਦਫ਼ਤਰੀ ਕੰਮਾਂ ਨਾਲ ਮਿਲਾਓ: (1) MICR, (2) OMR, ਅਤੇ (3) Plotter:',
      hi: 'निम्नलिखित Input/Output उपकरणों को उनके मुख्य कार्यालयी कार्यों से सुमेलित करें: (1) MICR, (2) OMR, और (3) Plotter:',
    },
    options: {
      A: {
        en: '(1) MICR = Input device that reads magnetic ink characters at the bottom of bank cheques | (2) OMR = Input device that evaluates shaded bubble answers on competitive exam sheets | (3) Plotter = Output device used to print large-scale architectural blueprints, maps, and vector graphics',
        pa: '(1) MICR = ਬੈਂਕ ਚੈੱਕਾਂ ਦੇ ਹੇਠਾਂ ਚੁੰਬਕੀ ਸਿਆਹੀ ਨਾਲ ਛਪੇ ਕੋਡ ਪੜ੍ਹਨ ਵਾਲਾ ਇਨਪੁੱਟ ਉਪਕਰਨ | (2) OMR = ਪ੍ਰੀਖਿਆਵਾਂ ਦੀਆਂ ਉੱਤਰ-ਸ਼ੀਟਾਂ ਦੇ ਕਾਲੇ ਕੀਤੇ ਗੋਲੇ ਪੜ੍ਹਨ ਵਾਲਾ ਇਨਪੁੱਟ ਉਪਕਰਨ | (3) Plotter = ਵੱਡੇ ਨਕਸ਼ੇ, ਇੰਜੀਨੀਅਰਿੰਗ ਡਰਾਇੰਗਾਂ ਅਤੇ ਵੈਕਟਰ ਗ੍ਰਾਫਿਕਸ ਛਾਪਣ ਵਾਲਾ ਆਊਟਪੁੱਟ ਉਪਕਰਨ',
        hi: '(1) MICR = बैंक चेकों के नीचे चुंबकीय स्याही से छपे कोड पढ़ने वाला इनपुट उपकरण | (2) OMR = प्रतियोगी परीक्षाओं की उत्तर-पुस्तिकाओं के भरे हुए गोले पढ़ने वाला इनपुट उपकरण | (3) Plotter = बड़े मानचित्र, इंजीनियरिंग ब्लूप्रिंट और वेक्टर ग्राफिक्स छापने वाला आउटपुट उपकरण',
      },
      B: {
        en: '(1) MICR = Output speaker system | (2) OMR = Laser printer for currency notes | (3) Plotter = Input scanner for barcodes',
        pa: '(1) MICR = ਆਊਟਪੁੱਟ ਸਪੀਕਰ | (2) OMR = ਨੋਟ ਛਾਪਣ ਵਾਲਾ ਲੇਜ਼ਰ ਪ੍ਰਿੰਟਰ | (3) Plotter = ਬਾਰਕੋਡ ਸਕੈਨ ਕਰਨ ਵਾਲਾ ਇਨਪੁੱਟ ਉਪਕਰਨ',
        hi: '(1) MICR = आउटपुट स्पीकर | (2) OMR = नोट छापने वाला लेज़र प्रिंटर | (3) Plotter = बारकोड स्कैन करने वाला इनपुट उपकरण',
      },
      C: {
        en: '(1) MICR = Optical Character Reader | (2) OMR = Organic Memory Register | (3) Plotter = Pointing Input Device like a Joystick',
        pa: '(1) MICR = ਆਪਟੀਕਲ ਕਰੈਕਟਰ ਰੀਡਰ | (2) OMR = ਆਰਗੈਨਿਕ ਮੈਮੋਰੀ ਰਜਿਸਟਰ | (3) Plotter = ਜੌਇਸਟਿੱਕ ਵਰਗਾ ਇਨਪੁੱਟ ਉਪਕਰਨ',
        hi: '(1) MICR = ऑप्टिकल कैरेक्टर रीडर | (2) OMR = ऑर्गेनिक मेमोरी रजिस्टर | (3) Plotter = जॉयस्टिक जैसा इनपुट उपकरण',
      },
      D: {
        en: '(1) MICR = Micro Integrated CPU RAM | (2) OMR = Output Monitor Resolution | (3) Plotter = Audio Recording Microphone',
        pa: '(1) MICR = ਮਾਈਕ੍ਰੋ ਇੰਟੀਗ੍ਰੇਟਿਡ ਰੈਮ | (2) OMR = ਆਊਟਪੁੱਟ ਮਾਨੀਟਰ ਰੈਜ਼ੋਲਿਊਸ਼ਨ | (3) Plotter = ਆਡੀਓ ਰਿਕਾਰਡਿੰਗ ਮਾਈਕ੍ਰੋਫੋਨ',
        hi: '(1) MICR = माइक्रो इंटीग्रेटेड रैम | (2) OMR = आउटपुट मॉनिटर रेज़ोल्यूशन | (3) Plotter = ऑडियो रिकॉर्डिंग माइक्रोफ़ोन',
      },
    },
    correct: 'A',
    explanation: {
      en: 'MICR (Magnetic Ink Character Recognition) is an input scanner used in banking to verify 9-digit MICR codes printed with iron-oxide ink on cheques. OMR (Optical Mark Recognition) is an input scanner that detects pencil/pen marks on exam sheets. A Plotter is a specialized output device that uses pens to draw continuous high-precision vector graphics/blueprints.',
      pa: 'MICR (Magnetic Ink Character Recognition) ਬੈਂਕਾਂ ਵਿੱਚ ਚੈੱਕਾਂ ਦੀ ਜਾਂਚ ਲਈ ਵਰਤਿਆ ਜਾਣ ਵਾਲਾ Input ਉਪਕਰਨ ਹੈ; OMR (Optical Mark Recognition) ਪ੍ਰੀਖਿਆਵਾਂ ਦੀਆਂ ਸ਼ੀਟਾਂ ਚੈੱਕ ਕਰਨ ਵਾਲਾ Input ਉਪਕਰਨ ਹੈ; ਅਤੇ Plotter ਵੱਡੇ ਨਕਸ਼ੇ ਤੇ ਇੰਜੀਨੀਅਰਿੰਗ ਡਿਜ਼ਾਈਨ ਛਾਪਣ ਵਾਲਾ Output ਉਪਕਰਨ ਹੈ।',
      hi: 'MICR (Magnetic Ink Character Recognition) बैंकों में चेकों के सत्यापन हेतु प्रयुक्त Input उपकरण है; OMR (Optical Mark Recognition) परीक्षाओं की ओएमआर शीट जाँचने वाला Input उपकरण है; और Plotter बड़े मानचित्र व इंजीनियरिंग डिज़ाइन छापने वाला Output उपकरण है।',
    },
    difficulty: 'easy',
  },

  // ===========================================================================
  // SECTION 4C: COMPUTER / IT — NETWORKING, INTERNET & CYBERSECURITY
  // topicId: 'clerk-networking-cybersecurity' | subjectId: 'clerk-special' (7 MCQs)
  // ===========================================================================
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-net-1',
    topicId: 'clerk-networking-cybersecurity',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'In the 7-Layer ISO-OSI Reference Model, at which exact layers do (1) Hub & Repeater, (2) Switch & Bridge, and (3) Router operate?',
      pa: 'ISO-OSI ਮਾਡਲ ਦੀਆਂ 7 ਪਰਤਾਂ (Layers) ਵਿੱਚੋਂ: (1) Hub ਅਤੇ Repeater, (2) Switch ਅਤੇ Bridge, ਅਤੇ (3) Router ਕਿਹੜੀਆਂ ਪਰਤਾਂ ਉੱਤੇ ਕੰਮ ਕਰਦੇ ਹਨ?',
      hi: 'ISO-OSI मॉडल की 7 परतों (Layers) में से: (1) Hub और Repeater, (2) Switch और Bridge, तथा (3) Router किन परतों पर कार्य करते हैं?',
    },
    options: {
      A: {
        en: '(1) Hub & Repeater = Layer 1 (Physical Layer) | (2) Switch & Bridge = Layer 2 (Data Link Layer) | (3) Router = Layer 3 (Network Layer)',
        pa: '(1) Hub ਅਤੇ Repeater = ਪਰਤ 1 (Physical Layer) | (2) Switch ਅਤੇ Bridge = ਪਰਤ 2 (Data Link Layer) | (3) Router = ਪਰਤ 3 (Network Layer)',
        hi: '(1) Hub और Repeater = परत 1 (Physical Layer) | (2) Switch और Bridge = परत 2 (Data Link Layer) | (3) Router = परत 3 (Network Layer)',
      },
      B: {
        en: '(1) Hub & Repeater = Layer 7 (Application Layer) | (2) Switch & Bridge = Layer 4 (Transport Layer) | (3) Router = Layer 1 (Physical Layer)',
        pa: '(1) Hub ਅਤੇ Repeater = ਪਰਤ 7 (Application Layer) | (2) Switch ਅਤੇ Bridge = ਪਰਤ 4 (Transport Layer) | (3) Router = ਪਰਤ 1 (Physical Layer)',
        hi: '(1) Hub और Repeater = परत 7 (Application Layer) | (2) Switch और Bridge = परत 4 (Transport Layer) | (3) Router = परत 1 (Physical Layer)',
      },
      C: {
        en: '(1) Hub & Repeater = Layer 3 (Network Layer) | (2) Switch & Bridge = Layer 6 (Presentation Layer) | (3) Router = Layer 2 (Data Link Layer)',
        pa: '(1) Hub ਅਤੇ Repeater = ਪਰਤ 3 (Network Layer) | (2) Switch ਅਤੇ Bridge = ਪਰਤ 6 (Presentation Layer) | (3) Router = ਪਰਤ 2 (Data Link Layer)',
        hi: '(1) Hub और Repeater = परत 3 (Network Layer) | (2) Switch और Bridge = परत 6 (Presentation Layer) | (3) Router = परत 2 (Data Link Layer)',
      },
      D: {
        en: '(1) Hub & Repeater = Layer 2 (Data Link Layer) | (2) Switch & Bridge = Layer 1 (Physical Layer) | (3) Router = Layer 5 (Session Layer)',
        pa: '(1) Hub ਅਤੇ Repeater = ਪਰਤ 2 (Data Link Layer) | (2) Switch ਅਤੇ Bridge = ਪਰਤ 1 (Physical Layer) | (3) Router = ਪਰਤ 5 (Session Layer)',
        hi: '(1) Hub और Repeater = परत 2 (Data Link Layer) | (2) Switch और Bridge = परत 1 (Physical Layer) | (3) Router = परत 5 (Session Layer)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'OSI 7 Layers (Bottom to Top: Physical, Data Link, Network, Transport, Session, Presentation, Application): 1. Physical Layer (Layer 1, deals with raw bits) uses Hub & Repeater; 2. Data Link Layer (Layer 2, deals with frames and MAC addresses) uses Switch & Bridge; 3. Network Layer (Layer 3, deals with packets and IP routing) uses Router.',
      pa: 'OSI ਦੀਆਂ 7 ਪਰਤਾਂ ਵਿੱਚ: Layer 1 (Physical Layer — ਬਿੱਟਸ) ਉੱਤੇ Hub ਅਤੇ Repeater ਕੰਮ ਕਰਦੇ ਹਨ; Layer 2 (Data Link Layer — MAC ਐਡਰੈੱਸ ਅਤੇ ਫਰੇਮ) ਉੱਤੇ Switch ਅਤੇ Bridge ਕੰਮ ਕਰਦੇ ਹਨ; ਅਤੇ Layer 3 (Network Layer — IP ਐਡਰੈੱਸ ਅਤੇ ਪੈਕੇਟ ਰਾਊਟਿੰਗ) ਉੱਤੇ Router ਕੰਮ ਕਰਦਾ ਹੈ।',
      hi: 'OSI की 7 परतों में: Layer 1 (Physical Layer — बिट्स) पर Hub और Repeater कार्य करते हैं; Layer 2 (Data Link Layer — MAC पता और फ़्रेम) पर Switch और Bridge कार्य करते हैं; तथा Layer 3 (Network Layer — IP पता और पैकेट रूटिंग) पर Router कार्य करता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-net-2',
    topicId: 'clerk-networking-cybersecurity',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'What is the bit-length, format, and hardware location of a computer’s physical "MAC Address"?',
      pa: 'ਕੰਪਿਊਟਰ ਦੇ ਭੌਤਿਕ ਐਡਰੈੱਸ "MAC Address" ਦੀ ਲੰਬਾਈ ਕਿੰਨੇ ਬਿੱਟ (Bits) ਹੁੰਦੀ ਹੈ, ਇਹ ਕਿਸ ਫਾਰਮੈਟ ਵਿੱਚ ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ ਅਤੇ ਕਿਸ ਹਾਰਡਵੇਅਰ ਉੱਤੇ ਅੰਕਿਤ ਹੁੰਦਾ ਹੈ?',
      hi: 'कंप्यूटर के भौतिक पते "MAC Address" की लंबाई कितने बिट (Bits) होती है, यह किस प्रारूप में लिखा जाता है और किस हार्डवेयर पर अंकित होता है?',
    },
    options: {
      A: {
        en: '48-bit (6-byte) address written as 12 Hexadecimal digits (e.g., 00:1A:2B:3C:4D:5E), permanently burned into the Network Interface Card (NIC) and operating at OSI Layer 2 (Data Link Layer)',
        pa: '48-ਬਿੱਟ (6-ਬਾਈਟ) ਦਾ ਐਡਰੈੱਸ ਜੋ 12 ਹੈਕਸਾਡੈਸੀਮਲ ਅੰਕਾਂ (ਜਿਵੇਂ 00:1A:2B:3C:4D:5E) ਵਿੱਚ ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ, Network Interface Card (NIC) ਉੱਤੇ ਪੱਕੇ ਤੌਰ ’ਤੇ ਅੰਕਿਤ ਹੁੰਦਾ ਹੈ ਅਤੇ OSI ਦੀ Layer 2 (Data Link Layer) ’ਤੇ ਕੰਮ ਕਰਦਾ ਹੈ',
        hi: '48-बिट (6-बाइट) का पता जो 12 हेक्साडेसिमल अंकों (जैसे 00:1A:2B:3C:4D:5E) में लिखा जाता है, Network Interface Card (NIC) पर स्थायी रूप से अंकित होता है और OSI की Layer 2 (Data Link Layer) पर कार्य करता है',
      },
      B: {
        en: '32-bit decimal address assigned temporarily by the ISP router at OSI Layer 7',
        pa: '32-ਬਿੱਟ ਦਸ਼ਮਲਵ ਐਡਰੈੱਸ ਜੋ ਇੰਟਰਨੈੱਟ ਕੰਪਨੀ ਵੱਲੋਂ ਅਸਥਾਈ ਤੌਰ ’ਤੇ Layer 7 ਉੱਤੇ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ',
        hi: '32-बिट दशमलव पता जो इंटरनेट प्रदाता द्वारा अस्थायी रूप से Layer 7 पर दिया जाता है',
      },
      C: {
        en: '128-bit binary address stored inside the MS Word software configuration file',
        pa: '128-ਬਿੱਟ ਬਾਈਨਰੀ ਐਡਰੈੱਸ ਜੋ MS Word ਸਾਫਟਵੇਅਰ ਦੇ ਅੰਦਰ ਸਟੋਰ ਹੁੰਦਾ ਹੈ',
        hi: '128-बिट बाइनरी पता जो MS Word सॉफ्टवेयर के भीतर संग्रहीत होता है',
      },
      D: {
        en: '16-bit port number used exclusively by Apple Macintosh computers for printing',
        pa: '16-ਬਿੱਟ ਪੋਰਟ ਨੰਬਰ ਜੋ ਕੇਵਲ ਐਪਲ ਮੈਕ ਕੰਪਿਊਟਰਾਂ ਵਿੱਚ ਪ੍ਰਿੰਟਿੰਗ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ',
        hi: '16-बिट पोर्ट नंबर जो केवल एप्पल मैक कंप्यूटरों में प्रिंटिंग के लिए प्रयुक्त होता है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'MAC (Media Access Control) Address — also called Physical or Hardware Address — is a globally unique 48-bit (6-byte) identifier represented as 6 pairs of hexadecimal digits separated by colons/hyphens. It is assigned by the manufacturer to the NIC (Network Interface Card) and operates at the Data Link Layer (Layer 2).',
      pa: 'MAC (Media Access Control) ਐਡਰੈੱਸ ਨੂੰ ਭੌਤਿਕ ਜਾਂ ਹਾਰਡਵੇਅਰ ਐਡਰੈੱਸ ਵੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ। ਇਹ 48-ਬਿੱਟ (6 ਬਾਈਟ = 12 ਹੈਕਸਾਡੈਸੀਮਲ ਅੰਕ) ਦਾ ਹੁੰਦਾ ਹੈ ਜੋ NIC (Network Interface Card) ਉੱਤੇ ਫੈਕਟਰੀ ਵੱਲੋਂ ਪੱਕੇ ਤੌਰ ’ਤੇ ਦਰਜ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।',
      hi: 'MAC (Media Access Control) पते को भौतिक या हार्डवेयर पता भी कहा जाता है। यह 48-बिट (6 बाइट = 12 हेक्साडेसिमल अंक) का होता है जो NIC (Network Interface Card) पर निर्माता द्वारा स्थायी रूप से अंकित किया जाता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-net-3',
    topicId: 'clerk-networking-cybersecurity',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'Compare IPv4 and IPv6 logical addresses: What are their respective bit-lengths, and which IPv4 address is reserved as the "Loopback / Localhost" address for testing a computer’s own network stack?',
      pa: 'IPv4 ਅਤੇ IPv6 ਐਡਰੈੱਸਾਂ ਦੀ ਲੰਬਾਈ ਕ੍ਰਮਵਾਰ ਕਿੰਨੇ ਬਿੱਟ (Bits) ਹੁੰਦੀ ਹੈ, ਅਤੇ ਕੰਪਿਊਟਰ ਦੇ ਆਪਣੇ ਨੈੱਟਵਰਕ ਕਾਰਡ ਦੀ ਜਾਂਚ ਲਈ ਕਿਹੜਾ IPv4 ਐਡਰੈੱਸ "Loopback / Localhost" ਵਜੋਂ ਰਾਖਵਾਂ ਰੱਖਿਆ ਗਿਆ ਹੈ?',
      hi: 'IPv4 और IPv6 पतों की लंबाई क्रमशः कितने बिट (Bits) होती है, तथा कंप्यूटर के स्वयं के नेटवर्क स्टैक के परीक्षण हेतु कौन-सा IPv4 पता "Loopback / Localhost" के रूप में आरक्षित है?',
    },
    options: {
      A: {
        en: 'IPv4 = 32 bits (4 bytes in dotted decimal, 0–255 per octet) | IPv6 = 128 bits (16 bytes in hexadecimal) | Loopback Address = 127.0.0.1',
        pa: 'IPv4 = 32 ਬਿੱਟ (4 ਬਾਈਟ, ਦਸ਼ਮਲਵ ਵਿੱਚ 0–255) | IPv6 = 128 ਬਿੱਟ (16 ਬਾਈਟ, ਹੈਕਸਾਡੈਸੀਮਲ ਵਿੱਚ) | Loopback ਐਡਰੈੱਸ = 127.0.0.1',
        hi: 'IPv4 = 32 बिट (4 बाइट, डॉटेड दशमलव में 0–255) | IPv6 = 128 बिट (16 बाइट, हेक्साडेसिमल में) | Loopback पता = 127.0.0.1',
      },
      B: {
        en: 'IPv4 = 64 bits | IPv6 = 256 bits | Loopback Address = 255.255.255.255',
        pa: 'IPv4 = 64 ਬਿੱਟ | IPv6 = 256 ਬਿੱਟ | Loopback ਐਡਰੈੱਸ = 255.255.255.255',
        hi: 'IPv4 = 64 बिट | IPv6 = 256 बिट | Loopback पता = 255.255.255.255',
      },
      C: {
        en: 'IPv4 = 16 bits | IPv6 = 64 bits | Loopback Address = 192.168.1.300',
        pa: 'IPv4 = 16 ਬਿੱਟ | IPv6 = 64 ਬਿੱਟ | Loopback ਐਡਰੈੱਸ = 192.168.1.300',
        hi: 'IPv4 = 16 बिट | IPv6 = 64 बिट | Loopback पता = 192.168.1.300',
      },
      D: {
        en: 'IPv4 = 48 bits | IPv6 = 96 bits | Loopback Address = 0.0.0.0',
        pa: 'IPv4 = 48 ਬਿੱਟ | IPv6 = 96 ਬਿੱਟ | Loopback ਐਡਰੈੱਸ = 0.0.0.0',
        hi: 'IPv4 = 48 बिट | IPv6 = 96 बिट | Loopback पता = 0.0.0.0',
      },
    },
    correct: 'A',
    explanation: {
      en: 'IPv4 is a 32-bit (4-byte) address written as four 8-bit decimal octets separated by dots (each octet ranging from 0 to 255). IPv6 is a 128-bit (16-byte) address written as 8 groups of 4 hexadecimal digits separated by colons. The IPv4 address `127.0.0.1` (`::1` in IPv6) is the standard Loopback / Localhost address.',
      pa: 'IPv4 ਐਡਰੈੱਸ 32-ਬਿੱਟ (4 ਬਾਈਟ) ਦਾ ਹੁੰਦਾ ਹੈ ਜਿਸ ਦੇ ਚਾਰ ਹਿੱਸੇ ਬਿੰਦੀਆਂ ਨਾਲ ਵੱਖ ਕੀਤੇ ਜਾਂਦੇ ਹਨ (ਹਰ ਹਿੱਸਾ 0 ਤੋਂ 255 ਤੱਕ)। IPv6 ਐਡਰੈੱਸ 128-ਬਿੱਟ (16 ਬਾਈਟ) ਦਾ ਹੁੰਦਾ ਹੈ ਜੋ ਹੈਕਸਾਡੈਸੀਮਲ ਵਿੱਚ ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ। `127.0.0.1` ਨੂੰ Loopback / Localhost ਐਡਰੈੱਸ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
      hi: 'IPv4 पता 32-बिट (4 बाइट) का होता है जिसके चार ऑक्टेट बिंदुओं द्वारा अलग किए जाते हैं (प्रत्येक 0 से 255 तक)। IPv6 पता 128-बिट (16 बाइट) का होता है जो हेक्साडेसिमल में लिखा जाता है। `127.0.0.1` को Loopback / Localhost पता कहा जाता है।',
    },
    difficulty: 'easy',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-net-4',
    topicId: 'clerk-networking-cybersecurity',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'At the Transport Layer (Layer 4) of the OSI/TCP-IP model, what is the key functional distinction between TCP (Transmission Control Protocol) and UDP (User Datagram Protocol)?',
      pa: 'OSI/TCP-IP ਮਾਡਲ ਦੀ Transport Layer (Layer 4) ਉੱਤੇ ਕੰਮ ਕਰਨ ਵਾਲੇ ਪ੍ਰੋਟੋਕੋਲ "TCP" ਅਤੇ "UDP" ਵਿੱਚ ਮੁੱਖ ਅੰਤਰ ਕੀ ਹੈ?',
      hi: 'OSI/TCP-IP मॉडल की Transport Layer (Layer 4) पर कार्य करने वाले प्रोटोकॉल "TCP" और "UDP" में मुख्य अंतर क्या है?',
    },
    options: {
      A: {
        en: 'TCP is a connection-oriented, reliable protocol that uses 3-way handshake, acknowledgements, and packet retransmission (used for web/email); UDP is a connectionless, faster low-overhead protocol without delivery guarantee (used for live video streaming, DNS, and online gaming)',
        pa: 'TCP ਇੱਕ Connection-oriented ਅਤੇ ਭਰੋਸੇਯੋਗ ਪ੍ਰੋਟੋਕੋਲ ਹੈ ਜੋ ਡਾਟਾ ਪਹੁੰਚਣ ਦੀ ਪੁਸ਼ਟੀ (Acknowledgement) ਕਰਦਾ ਹੈ; ਜਦਕਿ UDP ਇੱਕ Connectionless ਅਤੇ ਤੇਜ਼ ਪ੍ਰੋਟੋਕੋਲ ਹੈ ਜੋ ਲਾਈਵ ਵੀਡੀਓ ਸਟ੍ਰੀਮਿੰਗ, DNS ਅਤੇ ਆਨਲਾਈਨ ਗੇਮਿੰਗ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ',
        hi: 'TCP एक Connection-oriented और विश्वसनीय प्रोटोकॉल है जो डेटा प्राप्ति की पुष्टि (Acknowledgement) करता है; जबकि UDP एक Connectionless और तेज़ प्रोटोकॉल है जो लाइव वीडियो स्ट्रीमिंग, DNS और ऑनलाइन गेमिंग के लिए प्रयुक्त होता है',
      },
      B: {
        en: 'TCP is connectionless and unreliable, whereas UDP is connection-oriented and slower',
        pa: 'TCP ਕਨੈਕਸ਼ਨ-ਰਹਿਤ ਅਤੇ ਅਸੁਰੱਖਿਅਤ ਹੈ, ਜਦਕਿ UDP ਕਨੈਕਸ਼ਨ-ਆਧਾਰਿਤ ਅਤੇ ਹੌਲੀ ਹੈ',
        hi: 'TCP कनेक्शन-रहित और अविश्वसनीय है, जबकि UDP कनेक्शन-आधारित और धीमा है',
      },
      C: {
        en: 'TCP operates only on wireless Wi-Fi networks, whereas UDP operates only on coaxial cables',
        pa: 'TCP ਕੇਵਲ ਵਾਈ-ਫਾਈ ਉੱਤੇ ਕੰਮ ਕਰਦਾ ਹੈ ਅਤੇ UDP ਕੇਵਲ ਤਾਰਾਂ ਵਾਲੇ ਨੈੱਟਵਰਕ ਉੱਤੇ',
        hi: 'TCP केवल वाई-फाई पर कार्य करता है और UDP केवल केबल नेटवर्क पर',
      },
      D: {
        en: 'TCP is an antivirus software, whereas UDP is an Uninterruptible Power Supply unit',
        pa: 'TCP ਇੱਕ ਐਂਟੀਵਾਇਰਸ ਸਾਫਟਵੇਅਰ ਹੈ ਅਤੇ UDP ਬਿਜਲੀ ਸਪਲਾਈ ਯੂਨਿਟ ਹੈ',
        hi: 'TCP एक एंटीवायरस सॉफ्टवेयर है और UDP पावर सप्लाई यूनिट है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'TCP (Transmission Control Protocol) is connection-oriented and guarantees ordered, error-checked delivery of packets via acknowledgements (used by HTTP, HTTPS, FTP, SMTP). UDP (User Datagram Protocol) is connectionless with minimal latency/overhead and no retransmission (used by DNS, DHCP, VoIP, live streaming).',
      pa: 'TCP (Transmission Control Protocol) ਕਨੈਕਸ਼ਨ-ਆਧਾਰਿਤ ਅਤੇ ਭਰੋਸੇਯੋਗ ਪ੍ਰੋਟੋਕੋਲ ਹੈ ਜੋ ਪੈਕੇਟਾਂ ਦੇ ਸਹੀ ਕ੍ਰਮ ਵਿੱਚ ਪਹੁੰਚਣ ਦੀ ਗਾਰੰਟੀ ਦਿੰਦਾ ਹੈ। UDP (User Datagram Protocol) ਕਨੈਕਸ਼ਨ-ਰਹਿਤ ਤੇ ਤੇਜ਼ ਪ੍ਰੋਟੋਕੋਲ ਹੈ ਜੋ ਲਾਈਵ ਸਟ੍ਰੀਮਿੰਗ ਅਤੇ DNS ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
      hi: 'TCP (Transmission Control Protocol) कनेक्शन-आधारित और विश्वसनीय प्रोटोकॉल है जो पैकेटों के सही क्रम में पहुँचने की गारंटी देता है। UDP (User Datagram Protocol) कनेक्शन-रहित व तेज़ प्रोटोकॉल है जो लाइव स्ट्रीमिंग और DNS में प्रयुक्त होता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-net-5',
    topicId: 'clerk-networking-cybersecurity',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'Which option accurately lists the default well-known TCP/IP Port Numbers for standard Internet protocols?',
      pa: 'ਇੰਟਰਨੈੱਟ ਪ੍ਰੋਟੋਕੋਲਾਂ ਦੇ ਮਿਆਰੀ ਪੋਰਟ ਨੰਬਰਾਂ (Default Port Numbers) ਦਾ ਬਿਲਕੁਲ ਸਹੀ ਜੁੱਟ ਕਿਹੜਾ ਹੈ?',
      hi: 'इंटरनेट प्रोटोकॉल के मानक पोर्ट नंबरों (Default Port Numbers) का बिल्कुल सही समूह कौन-सा है?',
    },
    options: {
      A: {
        en: 'HTTP = 80 | HTTPS = 443 | FTP = 20 (Data) & 21 (Control) | SSH = 22 | SMTP = 25 | DNS = 53 | POP3 = 110',
        pa: 'HTTP = 80 | HTTPS = 443 | FTP = 20 (Data) ਅਤੇ 21 (Control) | SSH = 22 | SMTP = 25 | DNS = 53 | POP3 = 110',
        hi: 'HTTP = 80 | HTTPS = 443 | FTP = 20 (Data) व 21 (Control) | SSH = 22 | SMTP = 25 | DNS = 53 | POP3 = 110',
      },
      B: {
        en: 'HTTP = 443 | HTTPS = 80 | FTP = 25 | SSH = 110 | SMTP = 21 | DNS = 8080',
        pa: 'HTTP = 443 | HTTPS = 80 | FTP = 25 | SSH = 110 | SMTP = 21 | DNS = 8080',
        hi: 'HTTP = 443 | HTTPS = 80 | FTP = 25 | SSH = 110 | SMTP = 21 | DNS = 8080',
      },
      C: {
        en: 'HTTP = 21 | HTTPS = 22 | FTP = 80 | SSH = 53 | SMTP = 443 | DNS = 25',
        pa: 'HTTP = 21 | HTTPS = 22 | FTP = 80 | SSH = 53 | SMTP = 443 | DNS = 25',
        hi: 'HTTP = 21 | HTTPS = 22 | FTP = 80 | SSH = 53 | SMTP = 443 | DNS = 25',
      },
      D: {
        en: 'HTTP = 100 | HTTPS = 200 | FTP = 300 | SSH = 400 | SMTP = 500 | DNS = 600',
        pa: 'HTTP = 100 | HTTPS = 200 | FTP = 300 | SSH = 400 | SMTP = 500 | DNS = 600',
        hi: 'HTTP = 100 | HTTPS = 200 | FTP = 300 | SSH = 400 | SMTP = 500 | DNS = 600',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Essential Port Numbers for Punjab Clerk exams: FTP Data = 20, FTP Control = 21, SSH = 22, Telnet = 23, SMTP (sending email) = 25, DNS (Domain Name System) = 53, DHCP = 67/68, HTTP = 80, POP3 (receiving email) = 110, IMAP = 143, HTTPS (SSL/TLS encrypted web) = 443.',
      pa: 'ਪ੍ਰੀਖਿਆ ਲਈ ਮਹੱਤਵਪੂਰਨ ਪੋਰਟ ਨੰਬਰ: FTP = 20 (ਡਾਟਾ) ਅਤੇ 21 (ਕੰਟਰੋਲ), SSH = 22, Telnet = 23, SMTP (ਈਮੇਲ ਭੇਜਣ ਲਈ) = 25, DNS = 53, HTTP = 80, POP3 (ਈਮੇਲ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ) = 110, ਅਤੇ HTTPS (ਸੁਰੱਖਿਅਤ ਵੈੱਬ) = 443।',
      hi: 'परीक्षा हेतु महत्वपूर्ण पोर्ट नंबर: FTP = 20 (डेटा) व 21 (कंट्रोल), SSH = 22, Telnet = 23, SMTP (ईमेल भेजने हेतु) = 25, DNS = 53, HTTP = 80, POP3 (ईमेल प्राप्त करने हेतु) = 110, और HTTPS (सुरक्षित वेब) = 443।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-net-6',
    topicId: 'clerk-networking-cybersecurity',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'In Cybersecurity, how do a "Computer Worm", a "Computer Virus", a "Trojan Horse", and "Ransomware" differ from one another?',
      pa: 'ਸਾਈਬਰ ਸੁਰੱਖਿਆ (Cybersecurity) ਵਿੱਚ "Worm", "Virus", "Trojan Horse" ਅਤੇ "Ransomware" ਇੱਕ-ਦੂਜੇ ਤੋਂ ਕਿਵੇਂ ਭਿੰਨ ਹਨ?',
      hi: 'साइबर सुरक्षा (Cybersecurity) में "Worm", "Virus", "Trojan Horse" और "Ransomware" एक-दूसरे से किस प्रकार भिन्न हैं?',
    },
    options: {
      A: {
        en: 'Worm = Standalone malware that self-replicates across networks without needing a host file or human action | Virus = Attaches to a host file and requires human execution to spread | Trojan Horse = Disguises itself as legitimate software without self-replicating | Ransomware = Encrypts victim’s files and demands payment for the decryption key',
        pa: 'Worm = ਬਿਨਾਂ ਕਿਸੇ ਹੋਸਟ ਫਾਈਲ ਜਾਂ ਮਨੁੱਖੀ ਦਖ਼ਲ ਦੇ ਨੈੱਟਵਰਕ ਰਾਹੀਂ ਆਪਣੇ-ਆਪ ਫੈਲਣ ਵਾਲਾ ਮਾਲਵੇਅਰ | Virus = ਕਿਸੇ ਫਾਈਲ ਨਾਲ ਚਿੰਬੜਦਾ ਹੈ ਅਤੇ ਚਲਾਉਣ ’ਤੇ ਫੈਲਦਾ ਹੈ | Trojan Horse = ਅਸਲੀ ਤੇ ਲਾਭਦਾਇਕ ਸਾਫਟਵੇਅਰ ਦਾ ਭੇਸ ਧਾਰ ਕੇ ਧੋਖੇ ਨਾਲ ਦਾਖ਼ਲ ਹੁੰਦਾ ਹੈ | Ransomware = ਫਾਈਲਾਂ ਨੂੰ ਲਾਕ (Encrypt) ਕਰਕੇ ਫਿਰੌਤੀ ਮੰਗਦਾ ਹੈ',
        hi: 'Worm = बिना किसी होस्ट फ़ाइल या मानवीय हस्तक्षेप के नेटवर्क पर स्वतः अपनी प्रतियाँ बनाकर फैलने वाला मैलवेयर | Virus = किसी होस्ट फ़ाइल से जुड़ता है और चलाने पर फैलता है | Trojan Horse = वैध व उपयोगी सॉफ्टवेयर का छद्म रूप धारण कर प्रवेश करता है | Ransomware = फ़ाइलों को एन्क्रिप्ट (लॉक) कर फिरौती की माँग करता है',
      },
      B: {
        en: 'Worm requires a floppy disk host, whereas Virus spreads automatically without any host program',
        pa: 'Worm ਨੂੰ ਫੈਲਣ ਲਈ ਫਲੌਪੀ ਡਿਸਕ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ, ਜਦਕਿ Virus ਬਿਨਾਂ ਕਿਸੇ ਫਾਈਲ ਤੋਂ ਆਪਣੇ-ਆਪ ਫੈਲਦਾ ਹੈ',
        hi: 'Worm को फैलने के लिए फ्लॉपी डिस्क की आवश्यकता होती है, जबकि Virus बिना किसी फ़ाइल के स्वतः फैलता है',
      },
      C: {
        en: 'Trojan Horse is a hardware firewall chip, whereas Ransomware is an official Windows update utility',
        pa: 'Trojan Horse ਇੱਕ ਹਾਰਡਵੇਅਰ ਫਾਇਰਵਾਲ ਚਿੱਪ ਹੈ ਅਤੇ Ransomware ਵਿੰਡੋਜ਼ ਨੂੰ ਅਪਡੇਟ ਕਰਨ ਵਾਲਾ ਟੂਲ ਹੈ',
        hi: 'Trojan Horse एक हार्डवेयर फ़ायरवॉल चिप है और Ransomware विंडोज़ अपडेट करने वाला टूल है',
      },
      D: {
        en: 'All four are harmless browser cookies used to speed up internet downloads',
        pa: 'ਇਹ ਚਾਰੇ ਇੰਟਰਨੈੱਟ ਦੀ ਰਫ਼ਤਾਰ ਵਧਾਉਣ ਵਾਲੀਆਂ ਸੁਰੱਖਿਅਤ ਬ੍ਰਾਊਜ਼ਰ ਕੂਕੀਜ਼ (Cookies) ਹਨ',
        hi: 'ये चारों इंटरनेट की गति बढ़ाने वाली सुरक्षित ब्राउज़र कुकीज़ (Cookies) हैं',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Key Malware distinctions: 1. Virus (Vital Information Resources Under Siege) needs a host program and user action to trigger; 2. Worm is self-contained and self-replicates automatically across network vulnerabilities; 3. Trojan Horse looks like a legitimate utility/game to trick users into installing it (does not self-replicate); 4. Ransomware (e.g., WannaCry) encrypts data and demands ransom.',
      pa: 'ਮਾਲਵੇਅਰ ਦੀਆਂ ਕਿਸਮਾਂ: 1. Virus ਕਿਸੇ ਹੋਸਟ ਫਾਈਲ ਨਾਲ ਜੁੜ ਕੇ ਮਨੁੱਖ ਵੱਲੋਂ ਚਲਾਉਣ ’ਤੇ ਫੈਲਦਾ ਹੈ; 2. Worm ਬਿਨਾਂ ਕਿਸੇ ਹੋਸਟ ਫਾਈਲ ਦੇ ਨੈੱਟਵਰਕ ਰਾਹੀਂ ਆਪਣੇ-ਆਪ ਕਾਪੀਆਂ ਬਣਾ ਕੇ ਫੈਲਦਾ ਹੈ; 3. Trojan Horse ਉਪਯੋਗੀ ਸਾਫਟਵੇਅਰ ਦਾ ਭੇਸ ਧਾਰ ਕੇ ਸਿਸਟਮ ਵਿੱਚ ਦਾਖ਼ਲ ਹੁੰਦਾ ਹੈ; 4. Ransomware (ਜਿਵੇਂ WannaCry) ਡਾਟਾ ਲਾਕ ਕਰਕੇ ਪੈਸਿਆਂ ਦੀ ਮੰਗ ਕਰਦਾ ਹੈ।',
      hi: 'मैलवेयर के भेद: 1. Virus किसी होस्ट फ़ाइल से जुड़कर उपयोगकर्ता द्वारा चलाए जाने पर फैलता है; 2. Worm बिना किसी होस्ट फ़ाइल के नेटवर्क के माध्यम से स्वतः अपनी प्रतियाँ बनाकर फैलता है; 3. Trojan Horse वैध सॉफ्टवेयर का रूप धरकर सिस्टम में प्रवेश करता है; 4. Ransomware (जैसे WannaCry) डेटा को एन्क्रिप्ट कर फिरौती माँगता है।',
    },
    difficulty: 'medium',
  },
  {
    ...PPSC_CLERK_COMMON_META,
    id: 'q-ppsc-clk-net-7',
    topicId: 'clerk-networking-cybersecurity',
    subjectId: 'clerk-special',
    examTag: 'PSSSB & PPSC Clerk Computer IT',
    question: {
      en: 'What is a "Zero-Day Attack" in cybersecurity, how does it differ from "Phishing", and what role does a "Firewall" play in network defense?',
      pa: 'ਸਾਈਬਰ ਸੁਰੱਖਿਆ ਵਿੱਚ "Zero-Day Attack" ਕੀ ਹੁੰਦਾ ਹੈ, ਇਹ "Phishing" ਤੋਂ ਕਿਵੇਂ ਵੱਖਰਾ ਹੈ, ਅਤੇ "Firewall" ਦਾ ਕੀ ਕੰਮ ਹੁੰਦਾ ਹੈ?',
      hi: 'साइबर सुरक्षा में "Zero-Day Attack" क्या होता है, यह "Phishing" से किस प्रकार भिन्न है, तथा "Firewall" की क्या भूमिका होती है?',
    },
    options: {
      A: {
        en: 'Zero-Day Attack exploits a newly discovered, unpatched software vulnerability before the developer has "zero days" to release a fix | Phishing uses fraudulent emails/websites impersonating trusted institutions to steal passwords/OTPs | Firewall monitors and filters incoming/outgoing network traffic based on security rules',
        pa: 'Zero-Day Attack ਸਾਫਟਵੇਅਰ ਦੀ ਅਜਿਹੀ ਨਵੀਂ ਖਾਮੀ (Vulnerability) ਦਾ ਫਾਇਦਾ ਉਠਾਉਂਦਾ ਹੈ ਜਿਸ ਨੂੰ ਠੀਕ ਕਰਨ (Patch) ਲਈ ਕੰਪਨੀ ਕੋਲ ਅਜੇ ਜ਼ੀਰੋ ਦਿਨ ਦਾ ਸਮਾਂ ਮਿਲਿਆ ਹੋਵੇ | Phishing ਨਕਲੀ ਈਮੇਲਾਂ/ਵੈੱਬਸਾਈਟਾਂ ਰਾਹੀਂ ਪਾਸਵਰਡ ਤੇ OTP ਚੋਰੀ ਕਰਨ ਦਾ ਧੋਖਾ ਹੈ | Firewall ਸੁਰੱਖਿਆ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਆਉਣ-ਜਾਣ ਵਾਲੇ ਨੈੱਟਵਰਕ ਟ੍ਰੈਫਿਕ ਨੂੰ ਫਿਲਟਰ ਕਰਦੀ ਹੈ',
        hi: 'Zero-Day Attack सॉफ्टवेयर की ऐसी अज्ञात कमज़ोरी (Vulnerability) का लाभ उठाता है जिसे सुधारने (Patch) के लिए निर्माता को अभी शून्य दिन मिले हों | Phishing नकली ईमेल/वेबसाइटों के माध्यम से पासवर्ड व OTP चुराने का धोखा है | Firewall सुरक्षा नियमों के अनुसार आने-जाने वाले नेटवर्क ट्रैफ़िक की निगरानी व फ़िल्टरिंग करता है',
      },
      B: {
        en: 'Zero-Day Attack occurs only on Sunday midnight | Phishing is a hardware cable fault | Firewall cools down overheated servers',
        pa: 'Zero-Day Attack ਕੇਵਲ ਐਤਵਾਰ ਅੱਧੀ ਰਾਤ ਨੂੰ ਹੁੰਦਾ ਹੈ | Phishing ਤਾਰਾਂ ਦੀ ਖਰਾਬੀ ਹੈ | Firewall ਸਰਵਰ ਨੂੰ ਠੰਢਾ ਰੱਖਦਾ ਹੈ',
        hi: 'Zero-Day Attack केवल रविवार आधी रात को होता है | Phishing केबल की खराबी है | Firewall सर्वर को ठंडा रखता है',
      },
      C: {
        en: 'Zero-Day Attack deletes data after 100 days | Phishing encrypts SSL/TLS certificates | Firewall converts analog signals to digital',
        pa: 'Zero-Day Attack 100 ਦਿਨਾਂ ਬਾਅਦ ਡਾਟਾ ਮਿਟਾਉਂਦਾ ਹੈ | Phishing SSL ਸਰਟੀਫਿਕੇਟ ਬਣਾਉਂਦਾ ਹੈ | Firewall ਐਨਾਲੌਗ ਸਿਗਨਲ ਨੂੰ ਡਿਜੀਟਲ ਵਿੱਚ ਬਦਲਦਾ ਹੈ',
        hi: 'Zero-Day Attack 100 दिनों बाद डेटा मिटाता है | Phishing SSL प्रमाणपत्र बनाता है | Firewall एनालॉग सिग्नल को डिजिटल में बदलता है',
      },
      D: {
        en: 'Zero-Day Attack is a legal audit test | Phishing boosts Wi-Fi speed | Firewall is a physical brick wall around the computer lab',
        pa: 'Zero-Day Attack ਇੱਕ ਕਾਨੂੰਨੀ ਆਡਿਟ ਹੈ | Phishing ਵਾਈ-ਫਾਈ ਦੀ ਰਫ਼ਤਾਰ ਵਧਾਉਂਦਾ ਹੈ | Firewall ਕੰਪਿਊਟਰ ਲੈਬ ਦੇ ਬਾਹਰ ਇੱਟਾਂ ਦੀ ਕੰਧ ਹੈ',
        hi: 'Zero-Day Attack एक कानूनी ऑडिट है | Phishing वाई-फाई की गति बढ़ाता है | Firewall कंप्यूटर लैब के चारों ओर ईंटों की दीवार है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'A Zero-Day Attack targets a previously unknown security flaw in software/hardware before the vendor can issue a security patch (giving the vendor 0 days to fix it). Phishing is a social-engineering attack using spoofed emails/links to steal credentials. A Firewall (hardware or software) acts as a barrier between a trusted internal network and untrusted external networks, while SSL/TLS encrypts data in transit.',
      pa: 'Zero-Day Attack ਉਦੋਂ ਹੁੰਦਾ ਹੈ ਜਦੋਂ ਹੈਕਰ ਸਾਫਟਵੇਅਰ ਦੀ ਕਿਸੇ ਅਜਿਹੀ ਖਾਮੀ ਉੱਤੇ ਹਮਲਾ ਕਰਦੇ ਹਨ ਜਿਸ ਦਾ ਕੰਪਨੀ ਨੂੰ ਅਜੇ ਪਤਾ ਨਾ ਲੱਗਿਆ ਹੋਵੇ ਅਤੇ ਕੋਈ Security Patch ਜਾਰੀ ਨਾ ਹੋਇਆ ਹੋਵੇ। Phishing ਧੋਖੇਬਾਜ਼ ਈਮੇਲ/ਲਿੰਕ ਰਾਹੀਂ ਬੈਂਕ ਵੇਰਵੇ ਜਾਂ ਪਾਸਵਰਡ ਚੁਰਾਉਣ ਦੀ ਤਕਨੀਕ ਹੈ, ਅਤੇ Firewall ਅਣਅਧਿਕਾਰਤ ਨੈੱਟਵਰਕ ਟ੍ਰੈਫਿਕ ਨੂੰ ਰੋਕਦੀ ਹੈ।',
      hi: 'Zero-Day Attack तब होता है जब हैकर सॉफ्टवेयर की किसी ऐसी अज्ञात कमज़ोरी पर हमला करते हैं जिसके लिए निर्माता ने अभी तक कोई Security Patch जारी न किया हो। Phishing फ़र्ज़ी ईमेल/लिंक द्वारा पासवर्ड व बैंक विवरण चुराने की तकनीक है, और Firewall अनधिकृत नेटवर्क ट्रैफ़िक को रोकता है।',
    },
    difficulty: 'medium',
  },
];

