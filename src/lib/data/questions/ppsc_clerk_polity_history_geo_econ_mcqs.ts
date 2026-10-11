import type { Question } from '../questions';

const PPSC_CLERK_COMMON_META = {
  examId: 'punjab-clerk' as const,
  subjectId: 'clerk-general-awareness' as const,
  examTag: 'PPSC / PSSSB Clerk & Senior Assistant',
  originType: 'authored-original' as const,
  reviewStatus: 'reviewed' as const,
  editorialStatus: 'reviewed' as const,
  availableLanguages: ['en', 'pa', 'hi'] as const,
  explanationLanguages: ['en', 'pa', 'hi'] as const,
  rightsProvenance: {
    source: 'NCERT / Laxmikanth / PSEB Curriculum & PPSC-PSSSB Ministerial Syllabus Blueprint',
    accessType: 'educational-original' as const,
    verifiedBy: 'ExamSathi Punjab Ministerial Curriculum Engine',
    verifiedDate: '2026-10-11',
  },
  source: {
    title: 'NCERT & PPSC / PSSSB Clerk-cum-Data Entry Operator General Awareness Syllabus',
    url: 'https://sssb.punjab.gov.in/',
  },
};

export const PPSC_CLERK_POLITY_HISTORY_GEO_ECON_MCQS: Question[] = [
  // ===========================================================================
  // 1. INDIAN CONSTITUTION & POLITY (topicId: 'constitution') — 20 MCQs
  // ===========================================================================
  {
    id: 'q-ppsc-clk-pol-1',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which Schedule of the Indian Constitution deals with the allocation of seats in the Rajya Sabha (Council of States) to the States and Union Territories?',
      pa: 'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੀ ਕਿਹੜੀ ਅਨੁਸੂਚੀ ਰਾਜਾਂ ਅਤੇ ਕੇਂਦਰ ਸ਼ਾਸਿਤ ਪ੍ਰਦੇਸ਼ਾਂ ਨੂੰ ਰਾਜ ਸਭਾ ਵਿੱਚ ਸੀਟਾਂ ਦੀ ਵੰਡ ਨਾਲ ਸਬੰਧਤ ਹੈ?',
      hi: 'भारतीय संविधान की कौन-सी अनुसूची राज्यों और केंद्र शासित प्रदेशों को राज्य सभा में सीटों के आवंटन से संबंधित है?',
    },
    options: {
      A: {
        en: 'Fourth Schedule',
        pa: 'ਚੌਥੀ ਅਨੁਸੂਚੀ',
        hi: 'चौथी अनुसूची',
      },
      B: {
        en: 'Third Schedule',
        pa: 'ਤੀਜੀ ਅਨੁਸੂਚੀ',
        hi: 'तीसरी अनुसूची',
      },
      C: {
        en: 'Seventh Schedule',
        pa: 'ਸੱਤਵੀਂ ਅਨੁਸੂਚੀ',
        hi: 'सातवीं अनुसूची',
      },
      D: {
        en: 'Eighth Schedule',
        pa: 'ਅੱਠਵੀਂ ਅਨੁਸੂਚੀ',
        hi: 'आठवीं अनुसूची',
      },
    },
    correct: 'A',
    explanation: {
      en: 'The Fourth Schedule of the Indian Constitution specifies the allocation of seats in the Rajya Sabha to States and Union Territories (Punjab has 7 Rajya Sabha seats). Third Schedule covers Oaths/Affirmations, Seventh covers Union/State/Concurrent Lists, and Eighth covers 22 recognized languages.',
      pa: 'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੀ ਚੌਥੀ ਅਨੁਸੂਚੀ ਰਾਜਾਂ ਅਤੇ ਕੇਂਦਰ ਸ਼ਾਸਿਤ ਪ੍ਰਦੇਸ਼ਾਂ ਨੂੰ ਰਾਜ ਸਭਾ ਵਿੱਚ ਸੀਟਾਂ ਦੀ ਵੰਡ (ਪੰਜਾਬ ਦੀਆਂ 7 ਰਾਜ ਸਭਾ ਸੀਟਾਂ ਹਨ) ਨਾਲ ਸਬੰਧਤ ਹੈ। ਤੀਜੀ ਅਨੁਸੂਚੀ ਸਹੁੰ ਚੁੱਕਣ, ਸੱਤਵੀਂ ਅਨੁਸੂਚੀ ਸ਼ਕਤੀਆਂ ਦੀ ਵੰਡ ਅਤੇ ਅੱਠਵੀਂ ਅਨੁਸੂਚੀ 22 ਮਾਨਤਾ ਪ੍ਰਾਪਤ ਭਾਸ਼ਾਵਾਂ ਨਾਲ ਸਬੰਧਤ ਹੈ।',
      hi: 'भारतीय संविधान की चौथी अनुसूची राज्यों और केंद्र शासित प्रदेशों को राज्य सभा में सीटों के आवंटन (पंजाब में 7 राज्य सभा सीटें हैं) से संबंधित है। तीसरी अनुसूची शपथ, सातवीं अनुसूची शक्तियों के विभाजन और आठवीं अनुसूची 22 भाषाओं से संबंधित है।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-pol-2',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'From which country’s constitution did the framers of the Indian Constitution borrow the concept of "Procedure Established by Law" and the "Concurrent List" respectively?',
      pa: 'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੇ ਨਿਰਮਾਤਾਵਾਂ ਨੇ ਕ੍ਰਮਵਾਰ "ਕਾਨੂੰਨ ਦੁਆਰਾ ਸਥਾਪਿਤ ਪ੍ਰਕਿਰਿਆ" ਅਤੇ "ਸਮਵਰਤੀ ਸੂਚੀ" ਦਾ ਸੰਕਲਪ ਕਿਹੜੇ ਦੇਸ਼ਾਂ ਦੇ ਸੰਵਿਧਾਨ ਤੋਂ ਲਿਆ ਹੈ?',
      hi: 'भारतीय संविधान के निर्माताओं ने क्रमशः "विधि द्वारा स्थापित प्रक्रिया" और "समवर्ती सूची" की अवधारणा किन देशों के संविधान से ली है?',
    },
    options: {
      A: {
        en: 'United Kingdom and Canada',
        pa: 'ਯੂਨਾਈਟਿਡ ਕਿੰਗਡਮ ਅਤੇ ਕੈਨੇਡਾ',
        hi: 'यूनाइटेड किंगडम और कनाडा',
      },
      B: {
        en: 'Japan and Australia',
        pa: 'ਜਾਪਾਨ ਅਤੇ ਆਸਟ੍ਰੇਲੀਆ',
        hi: 'जापान और ऑस्ट्रेलिया',
      },
      C: {
        en: 'United States of America and Ireland',
        pa: 'ਸੰਯੁਕਤ ਰਾਜ ਅਮਰੀਕਾ ਅਤੇ ਆਇਰਲੈਂਡ',
        hi: 'संयुक्त राज्य अमेरिका और आयरलैंड',
      },
      D: {
        en: 'Weimar Constitution of Germany and South Africa',
        pa: 'ਜਰਮਨੀ ਦਾ ਵਾਈਮਰ ਸੰਵਿਧਾਨ ਅਤੇ ਦੱਖਣੀ ਅਫ਼ਰੀਕਾ',
        hi: 'जर्मनी का वाइमर संविधान और दक्षिण अफ्रीका',
      },
    },
    correct: 'B',
    explanation: {
      en: 'The concept of "Procedure Established by Law" (Article 21) was borrowed from the Japanese Constitution, while the Concurrent List, freedom of trade/commerce, and joint sitting of the two Houses of Parliament (Article 108) were borrowed from the Australian Constitution.',
      pa: '"ਕਾਨੂੰਨ ਦੁਆਰਾ ਸਥਾਪਿਤ ਪ੍ਰਕਿਰਿਆ" (ਅਨੁਛੇਦ 21) ਜਾਪਾਨ ਦੇ ਸੰਵਿਧਾਨ ਤੋਂ ਅਤੇ "ਸਮਵਰਤੀ ਸੂਚੀ" ਤੇ ਸੰਸਦ ਦੇ ਦੋਵਾਂ ਸਦਨਾਂ ਦੀ ਸਾਂਝੀ ਬੈਠਕ (ਅਨੁਛੇਦ 108) ਆਸਟ੍ਰੇਲੀਆ ਦੇ ਸੰਵਿਧਾਨ ਤੋਂ ਲਈ ਗਈ ਹੈ।',
      hi: '"विधि द्वारा स्थापित प्रक्रिया" (अनुच्छेद 21) जापान के संविधान से तथा "समवर्ती सूची" और संसद के दोनों सदनों की संयुक्त बैठक (अनुच्छेद 108) ऑस्ट्रेलिया के संविधान से ली गई है।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-pol-3',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which three words were inserted into the Preamble of the Indian Constitution by the 42nd Constitutional Amendment Act, 1976?',
      pa: '42ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 1976 ਦੁਆਰਾ ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੀ ਪ੍ਰਸਤਾਵਨਾ (Preamble) ਵਿੱਚ ਕਿਹੜੇ ਤਿੰਨ ਸ਼ਬਦ ਜੋੜੇ ਗਏ ਸਨ?',
      hi: '42वें संविधान संशोधन अधिनियम, 1976 द्वारा भारतीय संविधान की प्रस्तावना (Preamble) में कौन-से तीन शब्द जोड़े गए थे?',
    },
    options: {
      A: {
        en: 'Sovereign, Democratic, and Republic',
        pa: 'ਪ੍ਰਭੂਸੱਤਾ ਸੰਪੰਨ, ਲੋਕਤੰਤਰੀ ਅਤੇ ਗਣਰਾਜ',
        hi: 'संप्रभु, लोकतांत्रिक और गणराज्य',
      },
      B: {
        en: 'Liberty, Equality, and Fraternity',
        pa: 'ਸੁਤੰਤਰਤਾ, ਸਮਾਨਤਾ ਅਤੇ ਭਾਈਚਾਰਾ',
        hi: 'स्वतंत्रता, समानता और बंधुत्व',
      },
      C: {
        en: 'Socialist, Secular, and Integrity',
        pa: 'ਸਮਾਜਵਾਦੀ, ਧਰਮ-ਨਿਰਪੱਖ ਅਤੇ ਅਖੰਡਤਾ',
        hi: 'समाजवादी, पंथनिरपेक्ष और अखंडता',
      },
      D: {
        en: 'Justice, Unity, and Dignity',
        pa: 'ਨਿਆਂ, ਏਕਤਾ ਅਤੇ ਗੌਰਵ',
        hi: 'न्याय, एकता और गरिमा',
      },
    },
    correct: 'C',
    explanation: {
      en: 'The Preamble has been amended only once so far, by the 42nd Constitutional Amendment Act (1976), which added three new words—Socialist, Secular, and Integrity—to the Preamble.',
      pa: 'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੀ ਪ੍ਰਸਤਾਵਨਾ ਵਿੱਚ ਹੁਣ ਤੱਕ ਸਿਰਫ਼ ਇੱਕ ਵਾਰ 42ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 1976 ਰਾਹੀਂ ਸੋਧ ਕੀਤੀ ਗਈ ਹੈ, ਜਿਸ ਤਹਿਤ "ਸਮਾਜਵਾਦੀ" (Socialist), "ਧਰਮ-ਨਿਰਪੱਖ" (Secular) ਅਤੇ "ਅਖੰਡਤਾ" (Integrity) ਸ਼ਬਦ ਜੋੜੇ ਗਏ ਸਨ।',
      hi: 'भारतीय संविधान की प्रस्तावना में अब तक केवल एक बार 42वें संविधान संशोधन अधिनियम, 1976 द्वारा संशोधन किया गया है, जिसके तहत "समाजवादी", "पंथनिरपेक्ष" और "अखंडता" शब्द जोड़े गए थे।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-pol-4',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Under Article 32 of the Indian Constitution, which prerogative writ is issued by a higher court to a lower court or tribunal to prevent it from exceeding its jurisdiction?',
      pa: 'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੇ ਅਨੁਛੇਦ 32 ਦੇ ਤਹਿਤ, ਕਿਸੇ ਉੱਚ ਅਦਾਲਤ ਦੁਆਰਾ ਹੇਠਲੀ ਅਦਾਲਤ ਜਾਂ ਟ੍ਰਿਬਿਊਨਲ ਨੂੰ ਆਪਣੇ ਅਧਿਕਾਰ ਖੇਤਰ ਤੋਂ ਬਾਹਰ ਜਾਣ ਤੋਂ ਰੋਕਣ ਲਈ ਕਿਹੜੀ ਰਿੱਟ ਜਾਰੀ ਕੀਤੀ ਜਾਂਦੀ ਹੈ?',
      hi: 'भारतीय संविधान के अनुच्छेद 32 के अंतर्गत, किसी उच्च न्यायालय द्वारा निचली अदालत या अधिकरण को अपने अधिकार क्षेत्र से बाहर जाने से रोकने के लिए कौन-सी रिट जारी की जाती है?',
    },
    options: {
      A: {
        en: 'Mandamus (We Command)',
        pa: 'ਪਰਮਾਦੇਸ਼ (Mandamus)',
        hi: 'परमादेश (Mandamus)',
      },
      B: {
        en: 'Quo-Warranto (By What Authority)',
        pa: 'ਅਧਿਕਾਰ-ਪ੍ਰਿੱਛਾ (Quo-Warranto)',
        hi: 'अधिकार-पृच्छा (Quo-Warranto)',
      },
      C: {
        en: 'Habeas Corpus (To Have the Body of)',
        pa: 'ਬੰਦੀ ਪ੍ਰਤੱਖੀਕਰਨ (Habeas Corpus)',
        hi: 'बंदी प्रत्यक्षीकरण (Habeas Corpus)',
      },
      D: {
        en: 'Prohibition (To Forbid)',
        pa: 'ਮਨਾਹੀ / ਪ੍ਰਤੀਸ਼ੇਧ (Prohibition)',
        hi: 'प्रतिषेध (Prohibition)',
      },
    },
    correct: 'D',
    explanation: {
      en: 'The writ of Prohibition ("to forbid") is issued by a higher court to a lower court or tribunal to prevent the latter from exceeding its jurisdiction or usurping a jurisdiction that it does not possess. While Prohibition is preventive, Certiorari is both preventive and curative.',
      pa: 'ਪ੍ਰਤੀਸ਼ੇਧ (Prohibition - ਰੋਕਣਾ) ਰਿੱਟ ਉੱਚ ਅਦਾਲਤ ਵੱਲੋਂ ਹੇਠਲੀ ਅਦਾਲਤ ਜਾਂ ਟ੍ਰਿਬਿਊਨਲ ਨੂੰ ਆਪਣੇ ਅਧਿਕਾਰ ਖੇਤਰ ਦੀ ਉਲੰਘਣਾ ਕਰਨ ਤੋਂ ਰੋਕਣ ਲਈ ਜਾਰੀ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।',
      hi: 'प्रतिषेध (Prohibition - मना करना) रिट उच्च न्यायालय द्वारा अधीनस्थ न्यायालय या अधिकरण को अपने न्यायक्षेत्र से बाहर कार्य करने से रोकने के लिए जारी की जाती है।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-pol-5',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which Article of the Indian Constitution abolished "Untouchability" and forbade its practice in any form?',
      pa: 'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੇ ਕਿਸ ਅਨੁਛੇਦ ਨੇ "ਛੂਤ-ਛਾਤ" (Untouchability) ਨੂੰ ਖ਼ਤਮ ਕੀਤਾ ਅਤੇ ਕਿਸੇ ਵੀ ਰੂਪ ਵਿੱਚ ਇਸ ਦੇ ਅਭਿਆਸ ਤੇ ਪਾਬੰਦੀ ਲਗਾਈ?',
      hi: 'भारतीय संविधान के किस अनुच्छेद ने "अस्पृश्यता" (Untouchability) का अंत किया और किसी भी रूप में इसके आचरण को निषिद्ध किया?',
    },
    options: {
      A: {
        en: 'Article 17',
        pa: 'ਅਨੁਛੇਦ 17',
        hi: 'अनुच्छेद 17',
      },
      B: {
        en: 'Article 15',
        pa: 'ਅਨੁਛੇਦ 15',
        hi: 'अनुच्छेद 15',
      },
      C: {
        en: 'Article 18',
        pa: 'ਅਨੁਛੇਦ 18',
        hi: 'अनुच्छेद 18',
      },
      D: {
        en: 'Article 23',
        pa: 'ਅਨੁਛੇਦ 23',
        hi: 'अनुच्छेद 23',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Article 17 under Right to Equality (Articles 14–18) abolishes Untouchability and makes its practice a punishable offence. Article 15 prohibits discrimination, Article 18 abolishes titles, and Article 23 prohibits traffic in human beings and forced labour (begar).',
      pa: 'ਸਮਾਨਤਾ ਦੇ ਅਧਿਕਾਰ (ਅਨੁਛੇਦ 14-18) ਦੇ ਤਹਿਤ ਅਨੁਛੇਦ 17 ਛੂਤ-ਛਾਤ ਨੂੰ ਖ਼ਤਮ ਕਰਦਾ ਹੈ ਅਤੇ ਇਸ ਦੇ ਅਭਿਆਸ ਨੂੰ ਕਾਨੂੰਨ ਅਨੁਸਾਰ ਦੰਡਯੋਗ ਅਪਰਾਧ ਬਣਾਉਂਦਾ ਹੈ। ਅਨੁਛੇਦ 18 ਖਿਤਾਬਾਂ ਦੇ ਖਾਤਮੇ ਨਾਲ ਸਬੰਧਤ ਹੈ।',
      hi: 'समानता के अधिकार (अनुच्छेद 14–18) के अंतर्गत अनुच्छेद 17 अस्पृश्यता का अंत करता है और इसके आचरण को दंडनीय अपराध घोषित करता है। अनुच्छेद 18 उपाधियों के अंत से संबंधित है।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-pol-6',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Match the following Directive Principles of State Policy (Part IV) with their respective Articles correctly:',
      pa: 'ਰਾਜ ਦੀ ਨੀਤੀ ਦੇ ਨਿਰਦੇਸ਼ਕ ਸਿਧਾਂਤਾਂ (ਭਾਗ IV) ਦਾ ਉਹਨਾਂ ਦੇ ਸਬੰਧਤ ਅਨੁਛੇਦਾਂ ਨਾਲ ਸਹੀ ਮਿਲਾਨ ਵਾਲਾ ਵਿਕਲਪ ਚੁਣੋ:',
      hi: 'राज्य के नीति निदेशक तत्वों (भाग IV) का उनके संबंधित अनुच्छेदों के साथ सही मिलान वाला विकल्प चुनें:',
    },
    options: {
      A: {
        en: 'Article 39A: Uniform Civil Code; Article 44: Free Legal Aid',
        pa: 'ਅਨੁਛੇਦ 39A: ਯੂਨੀਫਾਰਮ ਸਿਵਲ ਕੋਡ; ਅਨੁਛੇਦ 44: ਮੁਫ਼ਤ ਕਾਨੂੰਨੀ ਸਹਾਇਤਾ',
        hi: 'अनुच्छेद 39A: समान नागरिक संहिता; अनुच्छेद 44: निःशुल्क विधिक सहायता',
      },
      B: {
        en: 'Article 40: Organization of Village Panchayats; Article 44: Uniform Civil Code',
        pa: 'ਅਨੁਛੇਦ 40: ਗ੍ਰਾਮ ਪੰਚਾਇਤਾਂ ਦਾ ਗਠਨ; ਅਨੁਛੇਦ 44: ਯੂਨੀਫਾਰਮ ਸਿਵਲ ਕੋਡ (ਸਮਾਨ ਨਾਗਰਿਕ ਸੰਹਿਤਾ)',
        hi: 'अनुच्छेद 40: ग्राम पंचायतों का संगठन; अनुच्छेद 44: समान नागरिक संहिता (Uniform Civil Code)',
      },
      C: {
        en: 'Article 48: Separation of Judiciary from Executive; Article 50: Agriculture and Animal Husbandry',
        pa: 'ਅਨੁਛੇਦ 48: ਨਿਆਂਪਾਲਿਕਾ ਦਾ ਕਾਰਜਪਾਲਿਕਾ ਤੋਂ ਨਿਖੇੜਾ; ਅਨੁਛੇਦ 50: ਖੇਤੀਬਾੜੀ ਅਤੇ ਪਸ਼ੂ ਪਾਲਣ',
        hi: 'अनुच्छेद 48: कार्यपालिका से न्यायपालिका का पृथक्करण; अनुच्छेद 50: कृषि और पशुपालन',
      },
      D: {
        en: 'Article 45: International Peace; Article 51: Early Childhood Care',
        pa: 'ਅਨੁਛੇਦ 45: ਅੰਤਰਰਾਸ਼ਟਰੀ ਸ਼ਾਂਤੀ; ਅਨੁਛੇਦ 51: ਮੁੱਢਲੀ ਬਾਲ ਸੰਭਾਲ',
        hi: 'अनुच्छेद 45: अंतर्राष्ट्रीय शांति; अनुच्छेद 51: प्रारंभिक बाल्यावस्था देखभाल',
      },
    },
    correct: 'B',
    explanation: {
      en: 'In Part IV (Articles 36–51), Article 40 directs the State to organize village panchayats, and Article 44 directs the State to secure a Uniform Civil Code (UCC). Article 39A provides Equal Justice and Free Legal Aid, Article 50 separates judiciary from executive, and Article 51 promotes international peace.',
      pa: 'ਭਾਗ IV (ਅਨੁਛੇਦ 36–51) ਵਿੱਚ ਅਨੁਛੇਦ 40 ਗ੍ਰਾਮ ਪੰਚਾਇਤਾਂ ਦੇ ਗਠਨ ਅਤੇ ਅਨੁਛੇਦ 44 ਨਾਗਰਿਕਾਂ ਲਈ ਸਮਾਨ ਨਾਗਰਿਕ ਸੰਹਿਤਾ (Uniform Civil Code) ਨਾਲ ਸਬੰਧਤ ਹੈ। ਅਨੁਛੇਦ 39A ਮੁਫ਼ਤ ਕਾਨੂੰਨੀ ਸਹਾਇਤਾ ਅਤੇ ਅਨੁਛੇਦ 50 ਕਾਰਜਪਾਲਿਕਾ ਤੋਂ ਨਿਆਂਪਾਲਿਕਾ ਦੇ ਨਿਖੇੜੇ ਨਾਲ ਸਬੰਧਤ ਹੈ।',
      hi: 'भाग IV (अनुच्छेद 36–51) में अनुच्छेद 40 ग्राम पंचायतों के संगठन और अनुच्छेद 44 समान नागरिक संहिता (UCC) से संबंधित है। अनुच्छेद 39A निःशुल्क विधिक सहायता और अनुच्छेद 50 कार्यपालिका से न्यायपालिका के पृथक्करण से संबंधित है।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-pol-7',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which Constitutional Amendment Act added the 11th Fundamental Duty under Article 51A(k) and inserted Article 21A (Right to Education for children aged 6 to 14 years)?',
      pa: 'ਕਿਸ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ ਨੇ ਅਨੁਛੇਦ 51A(k) ਦੇ ਤਹਿਤ 11ਵਾਂ ਮੌਲਿਕ ਕਰਤੱਵ ਜੋੜਿਆ ਅਤੇ ਅਨੁਛੇਦ 21A (6 ਤੋਂ 14 ਸਾਲ ਦੇ ਬੱਚਿਆਂ ਲਈ ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ) ਸ਼ਾਮਲ ਕੀਤਾ?',
      hi: 'किस संविधान संशोधन अधिनियम ने अनुच्छेद 51A(k) के तहत 11वां मौलिक कर्तव्य जोड़ा और अनुच्छेद 21A (6 से 14 वर्ष के बच्चों के लिए शिक्षा का अधिकार) सम्मिलित किया?',
    },
    options: {
      A: {
        en: '42nd Constitutional Amendment Act, 1976',
        pa: '42ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 1976',
        hi: '42वां संविधान संशोधन अधिनियम, 1976',
      },
      B: {
        en: '44th Constitutional Amendment Act, 1978',
        pa: '44ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 1978',
        hi: '44वां संविधान संशोधन अधिनियम, 1978',
      },
      C: {
        en: '86th Constitutional Amendment Act, 2002',
        pa: '86ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 2002',
        hi: '86वां संविधान संशोधन अधिनियम, 2002',
      },
      D: {
        en: '61st Constitutional Amendment Act, 1988',
        pa: '61ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 1988',
        hi: '61वां संविधान संशोधन अधिनियम, 1988',
      },
    },
    correct: 'C',
    explanation: {
      en: 'While the first 10 Fundamental Duties (Part IVA, Article 51A) were added by the 42nd Amendment (1976) on the recommendation of the Swaran Singh Committee, the 11th Fundamental Duty—requiring parents/guardians to provide education opportunities to children aged 6–14—along with Article 21A was added by the 86th Amendment Act, 2002.',
      pa: 'ਪਹਿਲੇ 10 ਮੌਲਿਕ ਕਰਤੱਵ ਸਵਰਨ ਸਿੰਘ ਕਮੇਟੀ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ 42ਵੀਂ ਸੋਧ (1976) ਰਾਹੀਂ ਜੋੜੇ ਗਏ ਸਨ, ਜਦਕਿ 11ਵਾਂ ਮੌਲਿਕ ਕਰਤੱਵ [ਅਨੁਛੇਦ 51A(k)] ਅਤੇ ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ (ਅਨੁਛੇਦ 21A) 86ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 2002 ਰਾਹੀਂ ਜੋੜੇ ਗਏ।',
      hi: 'प्रथम 10 मौलिक कर्तव्य स्वर्ण सिंह समिति की सिफारिश पर 42वें संशोधन (1976) द्वारा जोड़े गए थे, जबकि 11वां मौलिक कर्तव्य [अनुच्छेद 51A(k)] और शिक्षा का अधिकार (अनुच्छेद 21A) 86वें संविधान संशोधन अधिनियम, 2002 द्वारा जोड़े गए।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-pol-8',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Under which Articles of the Indian Constitution do the President of India and the Governor of a State respectively exercise the power to promulgate Ordinances when the Legislature is not in session?',
      pa: 'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੇ ਕਿਹੜੇ ਅਨੁਛੇਦਾਂ ਤਹਿਤ ਕ੍ਰਮਵਾਰ ਭਾਰਤ ਦਾ ਰਾਸ਼ਟਰਪਤੀ ਅਤੇ ਰਾਜ ਦਾ ਰਾਜਪਾਲ ਵਿਧਾਨ ਮੰਡਲ ਦੇ ਸੈਸ਼ਨ ਵਿੱਚ ਨਾ ਹੋਣ ਤੇ ਆਰਡੀਨੈਂਸ (Ordinance) ਜਾਰੀ ਕਰਨ ਦੀ ਸ਼ਕਤੀ ਰੱਖਦੇ ਹਨ?',
      hi: 'भारतीय संविधान के किन अनुच्छेदों के अंतर्गत क्रमशः भारत के राष्ट्रपति और राज्य के राज्यपाल विधानमंडल के सत्र में न होने पर अध्यादेश (Ordinance) जारी करने की शक्ति रखते हैं?',
    },
    options: {
      A: {
        en: 'Article 72 and Article 161',
        pa: 'ਅਨੁਛੇਦ 72 ਅਤੇ ਅਨੁਛੇਦ 161',
        hi: 'अनुच्छेद 72 और अनुच्छेद 161',
      },
      B: {
        en: 'Article 52 and Article 153',
        pa: 'ਅਨੁਛੇਦ 52 ਅਤੇ ਅਨੁਛੇਦ 153',
        hi: 'अनुच्छेद 52 और अनुच्छेद 153',
      },
      C: {
        en: 'Article 61 and Article 200',
        pa: 'ਅਨੁਛੇਦ 61 ਅਤੇ ਅਨੁਛੇਦ 200',
        hi: 'अनुच्छेद 61 और अनुच्छेद 200',
      },
      D: {
        en: 'Article 123 and Article 213',
        pa: 'ਅਨੁਛੇਦ 123 ਅਤੇ ਅਨੁਛੇਦ 213',
        hi: 'अनुच्छेद 123 और अनुच्छेद 213',
      },
    },
    correct: 'D',
    explanation: {
      en: 'Article 123 empowers the President to promulgate ordinances during the recess of Parliament, whereas Article 213 empowers the Governor to promulgate ordinances during the recess of the State Legislature. Articles 72 and 161 deal with the pardoning powers of the President and Governor respectively.',
      pa: 'ਅਨੁਛੇਦ 123 ਰਾਸ਼ਟਰਪਤੀ ਨੂੰ ਸੰਸਦ ਦੇ ਸੈਸ਼ਨ ਨਾ ਹੋਣ ਸਮੇਂ ਆਰਡੀਨੈਂਸ ਜਾਰੀ ਕਰਨ ਦੀ ਸ਼ਕਤੀ ਦਿੰਦਾ ਹੈ ਅਤੇ ਅਨੁਛੇਦ 213 ਰਾਜਪਾਲ ਨੂੰ ਰਾਜ ਵਿਧਾਨ ਮੰਡਲ ਦੇ ਸੈਸ਼ਨ ਨਾ ਹੋਣ ਸਮੇਂ ਆਰਡੀਨੈਂਸ ਜਾਰੀ ਕਰਨ ਦੀ ਸ਼ਕਤੀ ਦਿੰਦਾ ਹੈ। ਅਨੁਛੇਦ 72 ਅਤੇ 161 ਮੁਆਫ਼ੀ ਦੀਆਂ ਸ਼ਕਤੀਆਂ ਨਾਲ ਸਬੰਧਤ ਹਨ।',
      hi: 'अनुच्छेद 123 राष्ट्रपति को संसद के विश्रांति काल में अध्यादेश जारी करने की शक्ति देता है, जबकि अनुच्छेद 213 राज्यपाल को राज्य विधानमंडल के विश्रांति काल में अध्यादेश जारी करने की शक्ति देता है। अनुच्छेद 72 और 161 क्षमादान शक्तियों से संबंधित हैं।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-pol-9',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'How does the pardoning power of the President under Article 72 differ from that of a State Governor under Article 161 of the Indian Constitution?',
      pa: 'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੇ ਅਨੁਛੇਦ 72 ਤਹਿਤ ਰਾਸ਼ਟਰਪਤੀ ਦੀ ਸਜ਼ਾ ਮੁਆਫ਼ੀ ਦੀ ਸ਼ਕਤੀ ਅਨੁਛੇਦ 161 ਤਹਿਤ ਰਾਜਪਾਲ ਦੀ ਸ਼ਕਤੀ ਤੋਂ ਕਿਵੇਂ ਵੱਖਰੀ ਹੈ?',
      hi: 'भारतीय संविधान के अनुच्छेद 72 के अंतर्गत राष्ट्रपति की क्षमादान शक्ति अनुच्छेद 161 के अंतर्गत राज्यपाल की शक्ति से किस प्रकार भिन्न है?',
    },
    options: {
      A: {
        en: 'Only the President can grant a complete pardon (absolving guilt) in cases of death sentence and sentences by Court Martial',
        pa: 'ਸਿਰਫ਼ ਰਾਸ਼ਟਰਪਤੀ ਹੀ ਮੌਤ ਦੀ ਸਜ਼ਾ (ਫ਼ਾਂਸੀ) ਅਤੇ ਸੈਨਿਕ ਅਦਾਲਤ (Court Martial) ਦੀਆਂ ਸਜ਼ਾਵਾਂ ਨੂੰ ਪੂਰਨ ਤੌਰ ਤੇ ਮੁਆਫ਼ ਕਰ ਸਕਦਾ ਹੈ',
        hi: 'केवल राष्ट्रपति ही मृत्युदंड और सैन्य न्यायालय (Court Martial) द्वारा दिए गए दंड को पूर्णतः क्षमा (Pardon) कर सकते हैं',
      },
      B: {
        en: 'The Governor cannot commute or remit any sentence under state laws',
        pa: 'ਰਾਜਪਾਲ ਰਾਜ ਦੇ ਕਾਨੂੰਨਾਂ ਅਧੀਨ ਕਿਸੇ ਵੀ ਸਜ਼ਾ ਨੂੰ ਘੱਟ ਜਾਂ ਮੁਆਫ਼ ਨਹੀਂ ਕਰ ਸਕਦਾ',
        hi: 'राज्यपाल राज्य के कानूनों के तहत किसी भी सजा को कम या परिहार नहीं कर सकते',
      },
      C: {
        en: 'Only the Governor can pardon sentences passed by military courts-martial',
        pa: 'ਸਿਰਫ਼ ਰਾਜਪਾਲ ਹੀ ਸੈਨਿਕ ਅਦਾਲਤਾਂ ਦੁਆਰਾ ਦਿੱਤੀਆਂ ਸਜ਼ਾਵਾਂ ਨੂੰ ਮੁਆਫ਼ ਕਰ ਸਕਦਾ ਹੈ',
        hi: 'केवल राज्यपाल ही सैन्य न्यायालयों द्वारा सुनाई गई सजा को माफ कर सकते हैं',
      },
      D: {
        en: 'The President exercises Article 72 powers at personal discretion without Cabinet advice',
        pa: 'ਰਾਸ਼ਟਰਪਤੀ ਮੰਤਰੀ ਮੰਡਲ ਦੀ ਸਲਾਹ ਤੋਂ ਬਿਨਾਂ ਨਿੱਜੀ ਵਿਵੇਕ ਨਾਲ ਅਨੁਛੇਦ 72 ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ',
        hi: 'राष्ट्रपति मंत्रिमंडल की सलाह के बिना व्यक्तिगत विवेक से अनुच्छेद 72 का प्रयोग करते हैं',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Under Article 72, the President is the only authority who can grant pardon in all cases where the sentence is a sentence of death and in cases of punishment by a Court Martial. While a Governor (Article 161) can suspend, remit, or commute a death sentence, the Governor cannot pardon a death sentence or Court Martial sentence.',
      pa: 'ਅਨੁਛੇਦ 72 ਦੇ ਤਹਿਤ ਸਿਰਫ਼ ਰਾਸ਼ਟਰਪਤੀ ਹੀ ਮੌਤ ਦੀ ਸਜ਼ਾ (Death Sentence) ਅਤੇ ਸੈਨਿਕ ਅਦਾਲਤ (Court Martial) ਦੁਆਰਾ ਦਿੱਤੀ ਸਜ਼ਾ ਨੂੰ ਪੂਰਨ ਤੌਰ ਤੇ ਮੁਆਫ਼ (Pardon) ਕਰ ਸਕਦਾ ਹੈ। ਰਾਜਪਾਲ (ਅਨੁਛੇਦ 161) ਮੌਤ ਦੀ ਸਜ਼ਾ ਨੂੰ ਪੂਰਨ ਮੁਆਫ਼ ਨਹੀਂ ਕਰ ਸਕਦਾ।',
      hi: 'अनुच्छेद 72 के तहत केवल राष्ट्रपति ही मृत्युदंड (Death Sentence) और सैन्य न्यायालय (Court Martial) द्वारा दिए गए दंड को पूर्ण क्षमा (Pardon) दे सकते हैं। राज्यपाल (अनुच्छेद 161) मृत्युदंड को पूर्णतः क्षमा नहीं कर सकते।',
    },
    difficulty: 'hard',
  },
  {
    id: 'q-ppsc-clk-pol-10',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which of the following statements is correct regarding a Money Bill defined under Article 110 and a Joint Sitting of Parliament under Article 108?',
      pa: 'ਅਨੁਛੇਦ 110 ਦੇ ਤਹਿਤ ਪਰਿਭਾਸ਼ਿਤ ਧਨ ਬਿੱਲ (Money Bill) ਅਤੇ ਅਨੁਛੇਦ 108 ਦੇ ਤਹਿਤ ਸੰਸਦ ਦੀ ਸਾਂਝੀ ਬੈਠਕ ਬਾਰੇ ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਕਥਨ ਸਹੀ ਹੈ?',
      hi: 'अनुच्छेद 110 के तहत परिभाषित धन विधेयक (Money Bill) और अनुच्छेद 108 के तहत संसद की संयुक्त बैठक के संबंध में निम्नलिखित में से कौन-सा कथन सही है?',
    },
    options: {
      A: {
        en: 'A Money Bill can be introduced in either House of Parliament and is presided over by the Vice-President in a joint sitting',
        pa: 'ਧਨ ਬਿੱਲ ਸੰਸਦ ਦੇ ਕਿਸੇ ਵੀ ਸਦਨ ਵਿੱਚ ਪੇਸ਼ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ ਅਤੇ ਸਾਂਝੀ ਬੈਠਕ ਦੀ ਪ੍ਰਧਾਨਗੀ ਉਪ-ਰਾਸ਼ਟਰਪਤੀ ਕਰਦਾ ਹੈ',
        hi: 'धन विधेयक संसद के किसी भी सदन में पेश किया जा सकता है और संयुक्त बैठक की अध्यक्षता उपराष्ट्रपति करते हैं',
      },
      B: {
        en: 'A Money Bill can only be introduced in the Lok Sabha with the prior recommendation of the President, and there is no provision for a Joint Sitting on a Money Bill',
        pa: 'ਧਨ ਬਿੱਲ ਸਿਰਫ਼ ਰਾਸ਼ਟਰਪਤੀ ਦੀ ਪੂਰਵ ਸਿਫ਼ਾਰਸ਼ ਨਾਲ ਲੋਕ ਸਭਾ ਵਿੱਚ ਹੀ ਪੇਸ਼ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ ਅਤੇ ਧਨ ਬਿੱਲ ਤੇ ਸਾਂਝੀ ਬੈਠਕ ਦਾ ਕੋਈ ਉਪਬੰਧ ਨਹੀਂ ਹੈ',
        hi: 'धन विधेयक केवल राष्ट्रपति की पूर्व सिफारिश से लोक सभा में ही पेश किया जा सकता है और धन विधेयक पर संयुक्त बैठक का कोई प्रावधान नहीं है',
      },
      C: {
        en: 'The Rajya Sabha can detain or amend a Money Bill for up to 6 months',
        pa: 'ਰਾਜ ਸਭਾ ਧਨ ਬਿੱਲ ਨੂੰ 6 ਮਹੀਨਿਆਂ ਤੱਕ ਰੋਕ ਸਕਦੀ ਹੈ ਜਾਂ ਸੋਧ ਸਕਦੀ ਹੈ',
        hi: 'राज्य सभा धन विधेयक को 6 महीने तक रोक या संशोधित कर सकती है',
      },
      D: {
        en: 'The Supreme Court decides whether a bill is a Money Bill when a dispute arises in Parliament',
        pa: 'ਸੰਸਦ ਵਿੱਚ ਵਿਵਾਦ ਹੋਣ ਤੇ ਸੁਪਰੀਮ ਕੋਰਟ ਫੈਸਲਾ ਕਰਦੀ ਹੈ ਕਿ ਕੋਈ ਬਿੱਲ ਧਨ ਬਿੱਲ ਹੈ ਜਾਂ ਨਹੀਂ',
        hi: 'संसद में विवाद होने पर सर्वोच्च न्यायालय तय करता है कि कोई विधेयक धन विधेयक है या नहीं',
      },
    },
    correct: 'B',
    explanation: {
      en: 'Under Articles 109 and 110, a Money Bill can only be introduced in the Lok Sabha on the prior recommendation of the President. The Speaker of the Lok Sabha certifies a Money Bill. The Rajya Sabha can only detain it for a maximum of 14 days, so no deadlock or Joint Sitting (Article 108) is applicable to Money Bills or Constitutional Amendment Bills (Article 368).',
      pa: 'ਅਨੁਛੇਦ 109 ਅਤੇ 110 ਅਨੁਸਾਰ ਧਨ ਬਿੱਲ ਰਾਸ਼ਟਰਪਤੀ ਦੀ ਪੂਰਵ ਸਿਫ਼ਾਰਸ਼ ਨਾਲ ਸਿਰਫ਼ ਲੋਕ ਸਭਾ ਵਿੱਚ ਪੇਸ਼ ਹੁੰਦਾ ਹੈ ਅਤੇ ਲੋਕ ਸਭਾ ਦਾ ਸਪੀਕਰ ਇਸ ਨੂੰ ਤਸਦੀਕ ਕਰਦਾ ਹੈ। ਰਾਜ ਸਭਾ ਇਸ ਨੂੰ ਵੱਧ ਤੋਂ ਵੱਧ 14 ਦਿਨਾਂ ਲਈ ਰੋਕ ਸਕਦੀ ਹੈ, ਇਸ ਲਈ ਧਨ ਬਿੱਲ ਤੇ ਸਾਂਝੀ ਬੈਠਕ (ਅਨੁਛੇਦ 108) ਨਹੀਂ ਬੁਲਾਈ ਜਾਂਦੀ।',
      hi: 'अनुच्छेद 109 और 110 के अनुसार धन विधेयक राष्ट्रपति की पूर्व सिफारिश से केवल लोक सभा में पेश किया जाता है और लोक सभा अध्यक्ष इसका प्रमाणन करते हैं। राज्य सभा इसे अधिकतम 14 दिनों तक रोक सकती है, अतः धन विधेयक पर संयुक्त बैठक (अनुच्छेद 108) का प्रावधान नहीं है।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-pol-11',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which Article of the Indian Constitution refers to the Union Budget as the "Annual Financial Statement"?',
      pa: 'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦਾ ਕਿਹੜਾ ਅਨੁਛੇਦ ਕੇਂਦਰੀ ਬਜਟ ਨੂੰ "ਸਾਲਾਨਾ ਵਿੱਤੀ ਵੇਰਵਾ" (Annual Financial Statement) ਵਜੋਂ ਦਰਸਾਉਂਦਾ ਹੈ?',
      hi: 'भारतीय संविधान का कौन-सा अनुच्छेद केंद्रीय बजट को "वार्षिक वित्तीय विवरण" (Annual Financial Statement) के रूप में संदर्भित करता है?',
    },
    options: {
      A: {
        en: 'Article 110',
        pa: 'ਅਨੁਛੇਦ 110',
        hi: 'अनुच्छेद 110',
      },
      B: {
        en: 'Article 116',
        pa: 'ਅਨੁਛੇਦ 116',
        hi: 'अनुच्छेद 116',
      },
      C: {
        en: 'Article 112',
        pa: 'ਅਨੁਛੇਦ 112',
        hi: 'अनुच्छेद 112',
      },
      D: {
        en: 'Article 266',
        pa: 'ਅਨੁਛੇਦ 266',
        hi: 'अनुच्छेद 266',
      },
    },
    correct: 'C',
    explanation: {
      en: 'The term "Budget" is nowhere used in the Constitution. Instead, Article 112 refers to it as the "Annual Financial Statement" for the Union (and Article 202 for the States). Article 110 deals with Money Bills, Article 116 with Vote on Account, and Article 266 with the Consolidated Fund of India.',
      pa: 'ਸੰਵਿਧਾਨ ਵਿੱਚ "ਬਜਟ" ਸ਼ਬਦ ਦੀ ਵਰਤੋਂ ਕਿਤੇ ਨਹੀਂ ਕੀਤੀ ਗਈ। ਇਸ ਦੀ ਬਜਾਏ ਅਨੁਛੇਦ 112 ਵਿੱਚ ਕੇਂਦਰ ਲਈ (ਅਤੇ ਅਨੁਛੇਦ 202 ਵਿੱਚ ਰਾਜਾਂ ਲਈ) "ਸਾਲਾਨਾ ਵਿੱਤੀ ਵੇਰਵਾ" (Annual Financial Statement) ਸ਼ਬਦ ਵਰਤਿਆ ਗਿਆ ਹੈ।',
      hi: 'संविधान में कहीं भी "बजट" शब्द का प्रयोग नहीं किया गया है। इसके स्थान पर अनुच्छेद 112 में संघ के लिए (और अनुच्छेद 202 में राज्यों के लिए) "वार्षिक वित्तीय विवरण" (Annual Financial Statement) का उल्लेख है।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-pol-12',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Under which Article can the President of India seek the advisory opinion of the Supreme Court on any question of law or fact of public importance?',
      pa: 'ਭਾਰਤ ਦਾ ਰਾਸ਼ਟਰਪਤੀ ਕਿਸ ਅਨੁਛੇਦ ਦੇ ਤਹਿਤ ਜਨਤਕ ਮਹੱਤਵ ਵਾਲੇ ਕਾਨੂੰਨ ਜਾਂ ਤੱਥ ਦੇ ਕਿਸੇ ਵੀ ਪ੍ਰਸ਼ਨ ਤੇ ਸੁਪਰੀਮ ਕੋਰਟ ਤੋਂ ਸਲਾਹਕਾਰੀ ਰਾਏ (Advisory Opinion) ਮੰਗ ਸਕਦਾ ਹੈ?',
      hi: 'भारत के राष्ट्रपति किस अनुच्छेद के अंतर्गत सार्वजनिक महत्व के किसी विधि या तथ्य के प्रश्न पर सर्वोच्च न्यायालय से परामर्शदात्री राय (Advisory Opinion) मांग सकते हैं?',
    },
    options: {
      A: {
        en: 'Article 124',
        pa: 'ਅਨੁਛੇਦ 124',
        hi: 'अनुच्छेद 124',
      },
      B: {
        en: 'Article 131',
        pa: 'ਅਨੁਛੇਦ 131',
        hi: 'अनुच्छेद 131',
      },
      C: {
        en: 'Article 137',
        pa: 'ਅਨੁਛੇਦ 137',
        hi: 'अनुच्छेद 137',
      },
      D: {
        en: 'Article 143',
        pa: 'ਅਨੁਛੇਦ 143',
        hi: 'अनुच्छेद 143',
      },
    },
    correct: 'D',
    explanation: {
      en: 'Article 143 confers Advisory Jurisdiction on the Supreme Court, allowing the President to seek its opinion. Article 124 provides for the establishment and constitution of the Supreme Court, Article 131 deals with Original Jurisdiction, and Article 137 empowers the Supreme Court to review its own judgments.',
      pa: 'ਅਨੁਛੇਦ 143 ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਸਲਾਹਕਾਰੀ ਅਧਿਕਾਰ ਖੇਤਰ (Advisory Jurisdiction) ਨਾਲ ਸਬੰਧਤ ਹੈ, ਜਿਸ ਤਹਿਤ ਰਾਸ਼ਟਰਪਤੀ ਸੁਪਰੀਮ ਕੋਰਟ ਤੋਂ ਰਾਏ ਮੰਗ ਸਕਦਾ ਹੈ। ਅਨੁਛੇਦ 124 ਸੁਪਰੀਮ ਕੋਰਟ ਦੀ ਸਥਾਪਨਾ ਅਤੇ ਅਨੁਛੇਦ 131 ਮੂਲ ਅਧਿਕਾਰ ਖੇਤਰ ਨਾਲ ਸਬੰਧਤ ਹੈ।',
      hi: 'अनुच्छेद 143 सर्वोच्च न्यायालय के परामर्शदात्री क्षेत्राधिकार (Advisory Jurisdiction) से संबंधित है, जिसके तहत राष्ट्रपति सर्वोच्च न्यायालय से राय मांग सकते हैं। अनुच्छेद 124 सर्वोच्च न्यायालय की स्थापना और अनुच्छेद 131 मूल क्षेत्राधिकार से संबंधित है।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-pol-13',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Why is the writ jurisdiction of a High Court under Article 226 considered wider in territorial/subject scope than that of the Supreme Court under Article 32?',
      pa: 'ਅਨੁਛੇਦ 226 ਦੇ ਤਹਿਤ ਹਾਈ ਕੋਰਟ ਦਾ ਰਿੱਟ ਅਧਿਕਾਰ ਖੇਤਰ ਅਨੁਛੇਦ 32 ਦੇ ਤਹਿਤ ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਰਿੱਟ ਅਧਿਕਾਰ ਖੇਤਰ ਨਾਲੋਂ ਵਧੇਰੇ ਵਿਆਪਕ ਕਿਉਂ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ?',
      hi: 'अनुच्छेद 226 के अंतर्गत उच्च न्यायालय का रिट क्षेत्राधिकार अनुच्छेद 32 के अंतर्गत सर्वोच्च न्यायालय के रिट क्षेत्राधिकार की तुलना में अधिक व्यापक क्यों माना जाता है?',
    },
    options: {
      A: {
        en: 'High Courts can issue writs not only for the enforcement of Fundamental Rights but also for "any other purpose" (ordinary legal rights)',
        pa: 'ਹਾਈ ਕੋਰਟ ਨਾ ਸਿਰਫ਼ ਮੌਲਿਕ ਅਧਿਕਾਰਾਂ ਨੂੰ ਲਾਗੂ ਕਰਨ ਲਈ ਸਗੋਂ "ਕਿਸੇ ਹੋਰ ਉਦੇਸ਼" (ਸਧਾਰਨ ਕਾਨੂੰਨੀ ਅਧਿਕਾਰਾਂ) ਲਈ ਵੀ ਰਿੱਟ ਜਾਰੀ ਕਰ ਸਕਦੀ ਹੈ',
        hi: 'उच्च न्यायालय न केवल मौलिक अधिकारों के प्रवर्तन के लिए बल्कि "किसी अन्य उद्देश्य" (साधारण विधिक अधिकारों) के लिए भी रिट जारी कर सकता है',
      },
      B: {
        en: 'High Courts can issue writs against foreign governments outside India',
        pa: 'ਹਾਈ ਕੋਰਟ ਭਾਰਤ ਤੋਂ ਬਾਹਰ ਵਿਦੇਸ਼ੀ ਸਰਕਾਰਾਂ ਵਿਰੁੱਧ ਰਿੱਟ ਜਾਰੀ ਕਰ ਸਕਦੀ ਹੈ',
        hi: 'उच्च न्यायालय भारत के बाहर विदेशी सरकारों के विरुद्ध रिट जारी कर सकता है',
      },
      C: {
        en: 'The Supreme Court cannot issue the writ of Certiorari or Quo-Warranto',
        pa: 'ਸੁਪਰੀਮ ਕੋਰਟ ਸਰਟੀਓਰਾਰੀ ਜਾਂ ਅਧਿਕਾਰ-ਪ੍ਰਿੱਛਾ ਰਿੱਟ ਜਾਰੀ ਨਹੀਂ ਕਰ ਸਕਦੀ',
        hi: 'सर्वोच्च न्यायालय उत्प्रेषण या अधिकार-पृच्छा रिट जारी नहीं कर सकता',
      },
      D: {
        en: 'Article 226 is itself a Fundamental Right in Part III of the Constitution',
        pa: 'ਅਨੁਛੇਦ 226 ਖੁਦ ਸੰਵਿਧਾਨ ਦੇ ਭਾਗ III ਵਿੱਚ ਇੱਕ ਮੌਲਿਕ ਅਧਿਕਾਰ ਹੈ',
        hi: 'अनुच्छेद 226 स्वयं संविधान के भाग III में एक मौलिक अधिकार है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'The Supreme Court under Article 32 can issue writs ONLY for the enforcement of Fundamental Rights, whereas a High Court under Article 226 can issue writs both for the enforcement of Fundamental Rights and for "any other purpose" (i.e., enforcement of an ordinary legal right).',
      pa: 'ਸੁਪਰੀਮ ਕੋਰਟ ਅਨੁਛੇਦ 32 ਤਹਿਤ ਸਿਰਫ਼ ਮੌਲਿਕ ਅਧਿਕਾਰਾਂ ਨੂੰ ਲਾਗੂ ਕਰਨ ਲਈ ਹੀ ਰਿੱਟ ਜਾਰੀ ਕਰ ਸਕਦੀ ਹੈ, ਜਦਕਿ ਹਾਈ ਕੋਰਟ ਅਨੁਛੇਦ 226 ਤਹਿਤ ਮੌਲਿਕ ਅਧਿਕਾਰਾਂ ਦੇ ਨਾਲ-ਨਾਲ "ਕਿਸੇ ਹੋਰ ਉਦੇਸ਼" (ਸਧਾਰਨ ਕਾਨੂੰਨੀ ਅਧਿਕਾਰਾਂ) ਲਈ ਵੀ ਰਿੱਟ ਜਾਰੀ ਕਰ ਸਕਦੀ ਹੈ।',
      hi: 'सर्वोच्च न्यायालय अनुच्छेद 32 के तहत केवल मौलिक अधिकारों के प्रवर्तन के लिए रिट जारी कर सकता है, जबकि उच्च न्यायालय अनुच्छेद 226 के तहत मौलिक अधिकारों के साथ-साथ "किसी अन्य उद्देश्य" (साधारण कानूनी अधिकारों) के लिए भी रिट जारी कर सकता है।',
    },
    difficulty: 'hard',
  },
  {
    id: 'q-ppsc-clk-pol-14',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which Committee appointed in 1957 recommended the establishment of a three-tier Panchayati Raj system (Gram Panchayat, Panchayat Samiti, and Zila Parishad) in India?',
      pa: '1957 ਵਿੱਚ ਨਿਯੁਕਤ ਕੀਤੀ ਗਈ ਕਿਸ ਕਮੇਟੀ ਨੇ ਭਾਰਤ ਵਿੱਚ ਤਿੰਨ-ਪੱਧਰੀ ਪੰਚਾਇਤੀ ਰਾਜ ਪ੍ਰਣਾਲੀ (ਗ੍ਰਾਮ ਪੰਚਾਇਤ, ਪੰਚਾਇਤ ਸੰਮਤੀ ਅਤੇ ਜ਼ਿਲ੍ਹਾ ਪ੍ਰੀਸ਼ਦ) ਸਥਾਪਿਤ ਕਰਨ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਕੀਤੀ ਸੀ?',
      hi: '1957 में नियुक्त किस समिति ने भारत में त्रि-स्तरीय पंचायती राज व्यवस्था (ग्राम पंचायत, पंचायत समिति और जिला परिषद) स्थापित करने की सिफारिश की थी?',
    },
    options: {
      A: {
        en: 'Ashok Mehta Committee',
        pa: 'ਅਸ਼ੋਕ ਮਹਿਤਾ ਕਮੇਟੀ',
        hi: 'अशोक मेहता समिति',
      },
      B: {
        en: 'Balwant Rai Mehta Committee',
        pa: 'ਬਲਵੰਤ ਰਾਏ ਮਹਿਤਾ ਕਮੇਟੀ',
        hi: 'बलवंत राय मेहता समिति',
      },
      C: {
        en: 'Sarkaria Commission',
        pa: 'ਸਰਕਾਰੀਆ ਕਮਿਸ਼ਨ',
        hi: 'सरकारिया आयोग',
      },
      D: {
        en: 'Fazl Ali Commission',
        pa: 'ਫ਼ਜ਼ਲ ਅਲੀ ਕਮਿਸ਼ਨ',
        hi: 'फजल अली आयोग',
      },
    },
    correct: 'B',
    explanation: {
      en: 'The Balwant Rai Mehta Committee (1957) recommended the three-tier Panchayati Raj scheme ("Democratic Decentralization"), first inaugurated at Nagaur, Rajasthan on 2 October 1959. The Ashok Mehta Committee (1977) later recommended a two-tier system.',
      pa: 'ਬਲਵੰਤ ਰਾਏ ਮਹਿਤਾ ਕਮੇਟੀ (1957) ਨੇ ਤਿੰਨ-ਪੱਧਰੀ ਪੰਚਾਇਤੀ ਰਾਜ ਪ੍ਰਣਾਲੀ ("ਲੋਕਤੰਤਰੀ ਵਿਕੇਂਦਰੀਕਰਨ") ਦੀ ਸਿਫ਼ਾਰਸ਼ ਕੀਤੀ ਸੀ, ਜਿਸ ਦੀ ਸ਼ੁਰੂਆਤ 2 ਅਕਤੂਬਰ 1959 ਨੂੰ ਨਾਗੌਰ (ਰਾਜਸਥਾਨ) ਤੋਂ ਹੋਈ। ਅਸ਼ੋਕ ਮਹਿਤਾ ਕਮੇਟੀ (1977) ਨੇ ਦੋ-ਪੱਧਰੀ ਪ੍ਰਣਾਲੀ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਕੀਤੀ ਸੀ।',
      hi: 'बलवंत राय मेहता समिति (1957) ने त्रि-स्तरीय पंचायती राज प्रणाली ("लोकतांत्रिक विकेंद्रीकरण") की सिफारिश की थी, जिसका उद्घाटन 2 अक्टूबर 1959 को राजस्थान के नागौर में हुआ। अशोक मेहता समिति (1977) ने द्वि-स्तरीय प्रणाली की सिफारिश की थी।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-pol-15',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Under Part IX (73rd Amendment Act, 1992) and the 11th Schedule of the Indian Constitution, how many functional items are placed within the purview of Panchayats, and which Article mandates reservation of seats for SCs/STs and Women?',
      pa: 'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੇ ਭਾਗ IX (73ਵੀਂ ਸੋਧ ਐਕਟ, 1992) ਅਤੇ 11ਵੀਂ ਅਨੁਸੂਚੀ ਦੇ ਤਹਿਤ ਪੰਚਾਇਤਾਂ ਦੇ ਅਧਿਕਾਰ ਖੇਤਰ ਵਿੱਚ ਕਿੰਨੇ ਵਿਸ਼ੇ ਰੱਖੇ ਗਏ ਹਨ ਅਤੇ ਕਿਹੜਾ ਅਨੁਛੇਦ ਅਨੁਸੂਚਿਤ ਜਾਤੀਆਂ/ਜਨਜਾਤੀਆਂ ਅਤੇ ਔਰਤਾਂ ਲਈ ਰਾਖਵੇਂਕਰਨ ਦੀ ਵਿਵਸਥਾ ਕਰਦਾ ਹੈ?',
      hi: 'भारतीय संविधान के भाग IX (73वां संशोधन अधिनियम, 1992) और 11वीं अनुसूची के अंतर्गत पंचायतों के कार्यक्षेत्र में कितने विषय रखे गए हैं और कौन-सा अनुच्छेद अनुसूचित जाति/जनजाति तथा महिलाओं के लिए सीटों के आरक्षण का प्रावधान करता है?',
    },
    options: {
      A: {
        en: '18 functional items and Article 243I',
        pa: '18 ਵਿਸ਼ੇ ਅਤੇ ਅਨੁਛੇਦ 243I',
        hi: '18 विषय और अनुच्छेद 243I',
      },
      B: {
        en: '25 functional items and Article 243K',
        pa: '25 ਵਿਸ਼ੇ ਅਤੇ ਅਨੁਛੇਦ 243K',
        hi: '25 विषय और अनुच्छेद 243K',
      },
      C: {
        en: '29 functional items and Article 243D',
        pa: '29 ਵਿਸ਼ੇ ਅਤੇ ਅਨੁਛੇਦ 243D',
        hi: '29 विषय और अनुच्छेद 243D',
      },
      D: {
        en: '29 functional items and Article 243B',
        pa: '29 ਵਿਸ਼ੇ ਅਤੇ ਅਨੁਛੇਦ 243B',
        hi: '29 विषय और अनुच्छेद 243B',
      },
    },
    correct: 'C',
    explanation: {
      en: 'The 73rd Constitutional Amendment Act, 1992 (effective 24 April 1993) added the 11th Schedule containing 29 functional items for Panchayats (whereas the 74th Amendment added the 12th Schedule with 18 items for Municipalities). Article 243D provides for reservation of seats in Panchayats, Article 243I for State Finance Commission, and Article 243K for State Election Commission.',
      pa: '73ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 1992 ਰਾਹੀਂ ਜੋੜੀ ਗਈ 11ਵੀਂ ਅਨੁਸੂਚੀ ਵਿੱਚ ਪੰਚਾਇਤਾਂ ਲਈ 29 ਵਿਸ਼ੇ ਹਨ (ਜਦਕਿ 12ਵੀਂ ਅਨੁਸੂਚੀ ਵਿੱਚ ਨਗਰਪਾਲਿਕਾਵਾਂ ਲਈ 18 ਵਿਸ਼ੇ ਹਨ)। ਅਨੁਛੇਦ 243D ਪੰਚਾਇਤਾਂ ਵਿੱਚ ਰਾਖਵੇਂਕਰਨ, 243I ਰਾਜ ਵਿੱਤ ਕਮਿਸ਼ਨ ਅਤੇ 243K ਰਾਜ ਚੋਣ ਕਮਿਸ਼ਨ ਨਾਲ ਸਬੰਧਤ ਹੈ।',
      hi: '73वें संविधान संशोधन अधिनियम, 1992 द्वारा जोड़ी गई 11वीं अनुसूची में पंचायतों के लिए 29 विषय हैं (जबकि 12वीं अनुसूची में नगरपालिकाओं के लिए 18 विषय हैं)। अनुच्छेद 243D पंचायतों में सीटों के आरक्षण, 243I राज्य वित्त आयोग और 243K राज्य चुनाव आयोग से संबंधित है।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-pol-16',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which of the following pairs of Constitutional Bodies and their respective Articles in the Indian Constitution is NOT correctly matched?',
      pa: 'ਸੰਵਿਧਾਨਕ ਸੰਸਥਾਵਾਂ ਅਤੇ ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਵਿੱਚ ਉਹਨਾਂ ਦੇ ਸਬੰਧਤ ਅਨੁਛੇਦਾਂ ਦੇ ਹੇਠ ਲਿਖੇ ਜੋੜਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਸਹੀ ਸੁਮੇਲ ਨਹੀਂ ਹੈ?',
      hi: 'संवैधानिक निकायों और भारतीय संविधान में उनके संबंधित अनुच्छेदों के निम्नलिखित युग्मों में से कौन-सा सही सुमेलित नहीं है?',
    },
    options: {
      A: {
        en: 'Attorney General for India — Article 76',
        pa: 'ਭਾਰਤ ਦਾ ਅਟਾਰਨੀ ਜਨਰਲ — ਅਨੁਛੇਦ 76',
        hi: 'भारत का महान्यायवादी (Attorney General) — अनुच्छेद 76',
      },
      B: {
        en: 'Comptroller and Auditor General of India (CAG) — Article 148',
        pa: 'ਭਾਰਤ ਦਾ ਕੰਪਟਰੋਲਰ ਅਤੇ ਆਡੀਟਰ ਜਨਰਲ (CAG) — ਅਨੁਛੇਦ 148',
        hi: 'भारत का नियंत्रक एवं महालेखापरीक्षक (CAG) — अनुच्छेद 148',
      },
      C: {
        en: 'Finance Commission of India — Article 280',
        pa: 'ਭਾਰਤ ਦਾ ਵਿੱਤ ਕਮਿਸ਼ਨ — ਅਨੁਛੇਦ 280',
        hi: 'भारत का वित्त आयोग — अनुच्छेद 280',
      },
      D: {
        en: 'Election Commission of India — Article 315',
        pa: 'ਭਾਰਤ ਦਾ ਚੋਣ ਕਮਿਸ਼ਨ — ਅਨੁਛੇਦ 315',
        hi: 'भारत का निर्वाचन आयोग — अनुच्छेद 315',
      },
    },
    correct: 'D',
    explanation: {
      en: 'The Election Commission of India is established under Article 324 (Part XV), whereas Article 315 deals with the Union and State Public Service Commissions (UPSC and SPSC like PPSC). Article 76 establishes the Attorney General, Article 148 the CAG, and Article 280 the Finance Commission.',
      pa: 'ਭਾਰਤ ਦਾ ਚੋਣ ਕਮਿਸ਼ਨ ਅਨੁਛੇਦ 324 (ਭਾਗ XV) ਦੇ ਤਹਿਤ ਸਥਾਪਿਤ ਕੀਤਾ ਗਿਆ ਹੈ, ਜਦਕਿ ਅਨੁਛੇਦ 315 ਸੰਘ ਅਤੇ ਰਾਜ ਲੋਕ ਸੇਵਾ ਕਮਿਸ਼ਨਾਂ (UPSC ਅਤੇ PPSC) ਨਾਲ ਸਬੰਧਤ ਹੈ। ਅਨੁਛੇਦ 76 ਅਟਾਰਨੀ ਜਨਰਲ, 148 ਕੈਗ (CAG) ਅਤੇ 280 ਵਿੱਤ ਕਮਿਸ਼ਨ ਨਾਲ ਸਬੰਧਤ ਹੈ।',
      hi: 'भारत का निर्वाचन आयोग अनुच्छेद 324 (भाग XV) के अंतर्गत स्थापित है, जबकि अनुच्छेद 315 संघ और राज्य लोक सेवा आयोगों (UPSC और SPSC) से संबंधित है। अनुच्छेद 76 महान्यायवादी, अनुच्छेद 148 CAG और अनुच्छेद 280 वित्त आयोग से संबंधित है।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-pol-17',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Under which Article of the Indian Constitution is the Goods and Services Tax (GST) Council constituted by the President, and who serves as its ex-officio Chairperson?',
      pa: 'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੇ ਕਿਸ ਅਨੁਛੇਦ ਦੇ ਤਹਿਤ ਰਾਸ਼ਟਰਪਤੀ ਦੁਆਰਾ ਵਸਤੂ ਅਤੇ ਸੇਵਾ ਕਰ (GST) ਕੌਂਸਲ ਦਾ ਗਠਨ ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਅਤੇ ਇਸ ਦਾ ਪਦੇਨ (ex-officio) ਚੇਅਰਪਰਸਨ ਕੌਣ ਹੁੰਦਾ ਹੈ?',
      hi: 'भारतीय संविधान के किस अनुच्छेद के अंतर्गत राष्ट्रपति द्वारा वस्तु एवं सेवा कर (GST) परिषद का गठन किया जाता है, और इसका पदेन (ex-officio) अध्यक्ष कौन होता है?',
    },
    options: {
      A: {
        en: 'Article 279A; the Union Finance Minister',
        pa: 'ਅਨੁਛੇਦ 279A; ਕੇਂਦਰੀ ਵਿੱਤ ਮੰਤਰੀ',
        hi: 'अनुच्छेद 279A; केंद्रीय वित्त मंत्री',
      },
      B: {
        en: 'Article 246A; the Prime Minister of India',
        pa: 'ਅਨੁਛੇਦ 246A; ਭਾਰਤ ਦਾ ਪ੍ਰਧਾਨ ਮੰਤਰੀ',
        hi: 'अनुच्छेद 246A; भारत के प्रधानमंत्री',
      },
      C: {
        en: 'Article 269A; the Governor of the Reserve Bank of India',
        pa: 'ਅਨੁਛੇਦ 269A; ਭਾਰਤੀ ਰਿਜ਼ਰਵ ਬੈਂਕ ਦਾ ਗਵਰਨਰ',
        hi: 'अनुच्छेद 269A; भारतीय रिजर्व बैंक के गवर्नर',
      },
      D: {
        en: 'Article 280A; the Chairperson of the Finance Commission',
        pa: 'ਅਨੁਛੇਦ 280A; ਵਿੱਤ ਕਮਿਸ਼ਨ ਦਾ ਚੇਅਰਪਰਸਨ',
        hi: 'अनुच्छेद 280A; वित्त आयोग के अध्यक्ष',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Inserted by the 101st Constitutional Amendment Act, 2016, Article 279A empowers the President to constitute the GST Council. The Union Finance Minister is the ex-officio Chairperson of the GST Council, where the Centre has 1/3rd voting weightage and States collectively have 2/3rd weightage.',
      pa: '101ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 2016 ਦੁਆਰਾ ਜੋੜੇ ਗਏ ਅਨੁਛੇਦ 279A ਦੇ ਤਹਿਤ ਜੀ.ਐੱਸ.ਟੀ. (GST) ਕੌਂਸਲ ਦਾ ਗਠਨ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਅਤੇ ਕੇਂਦਰੀ ਵਿੱਤ ਮੰਤਰੀ ਇਸ ਦਾ ਪਦੇਨ ਚੇਅਰਪਰਸਨ ਹੁੰਦਾ ਹੈ।',
      hi: '101वें संविधान संशोधन अधिनियम, 2016 द्वारा जोड़े गए अनुच्छेद 279A के अंतर्गत जीएसटी (GST) परिषद का गठन किया जाता है और केंद्रीय वित्त मंत्री इसके पदेन अध्यक्ष होते हैं।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-pol-18',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which Constitutional Amendment Act deleted the Right to Property from the list of Fundamental Rights (Articles 19(1)(f) and 31) and made it a constitutional/legal right under Article 300A in Part XII?',
      pa: 'ਕਿਸ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ ਨੇ ਸੰਪਤੀ ਦੇ ਅਧਿਕਾਰ ਨੂੰ ਮੌਲਿਕ ਅਧਿਕਾਰਾਂ ਦੀ ਸੂਚੀ (ਅਨੁਛੇਦ 19(1)(f) ਅਤੇ 31) ਵਿੱਚੋਂ ਹਟਾ ਕੇ ਭਾਗ XII ਦੇ ਅਨੁਛੇਦ 300A ਤਹਿਤ ਇੱਕ ਕਾਨੂੰਨੀ/ਸੰਵਿਧਾਨਕ ਅਧਿਕਾਰ ਬਣਾ ਦਿੱਤਾ?',
      hi: 'किस संविधान संशोधन अधिनियम ने संपत्ति के अधिकार को मौलिक अधिकारों की सूची (अनुच्छेद 19(1)(f) और 31) से हटाकर भाग XII के अनुच्छेद 300A के तहत एक विधिक/संवैधानिक अधिकार बना दिया?',
    },
    options: {
      A: {
        en: '1st Constitutional Amendment Act, 1951',
        pa: 'ਪਹਿਲੀ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 1951',
        hi: 'प्रथम संविधान संशोधन अधिनियम, 1951',
      },
      B: {
        en: '44th Constitutional Amendment Act, 1978',
        pa: '44ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 1978',
        hi: '44वां संविधान संशोधन अधिनियम, 1978',
      },
      C: {
        en: '52nd Constitutional Amendment Act, 1985',
        pa: '52ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 1985',
        hi: '52वां संविधान संशोधन अधिनियम, 1985',
      },
      D: {
        en: '91st Constitutional Amendment Act, 2003',
        pa: '91ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 2003',
        hi: '91वां संविधान संशोधन अधिनियम, 2003',
      },
    },
    correct: 'B',
    explanation: {
      en: 'The 44th Constitutional Amendment Act, 1978 abolished the Right to Property as a Fundamental Right by repealing Article 19(1)(f) and Article 31, and inserted Article 300A in Part XII ("No person shall be deprived of his property save by authority of law").',
      pa: '44ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 1978 ਨੇ ਸੰਪਤੀ ਦੇ ਅਧਿਕਾਰ ਨੂੰ ਮੌਲਿਕ ਅਧਿਕਾਰਾਂ (ਅਨੁਛੇਦ 19(1)(f) ਅਤੇ 31) ਵਿੱਚੋਂ ਕੱਢ ਕੇ ਭਾਗ XII ਦੇ ਅਨੁਛੇਦ 300A ਤਹਿਤ ਕਾਨੂੰਨੀ/ਸੰਵਿਧਾਨਕ ਅਧਿਕਾਰ ਬਣਾ ਦਿੱਤਾ।',
      hi: '44वें संविधान संशोधन अधिनियम, 1978 ने संपत्ति के अधिकार को मौलिक अधिकारों (अनुच्छेद 19(1)(f) और 31) से हटाकर भाग XII के अनुच्छेद 300A के तहत एक विधिक/संवैधानिक अधिकार बना दिया।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-pol-19',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which pair of Constitutional Amendments is correctly matched with its landmark electoral or legislative reform?',
      pa: 'ਸੰਵਿਧਾਨਕ ਸੋਧਾਂ ਦਾ ਕਿਹੜਾ ਜੋੜਾ ਉਸ ਦੇ ਇਤਿਹਾਸਕ ਚੋਣ ਜਾਂ ਵਿਧਾਨਕ ਸੁਧਾਰ ਨਾਲ ਸਹੀ ਮੇਲ ਖਾਂਦਾ ਹੈ?',
      hi: 'संविधान संशोधनों का कौन-सा युग्म उसके ऐतिहासिक चुनावी या विधायी सुधार के साथ सही सुमेलित है?',
    },
    options: {
      A: {
        en: '52nd Amendment (1985): Lowered voting age from 21 to 18; 61st Amendment (1988): Tenth Schedule',
        pa: '52ਵੀਂ ਸੋਧ (1985): ਵੋਟ ਪਾਉਣ ਦੀ ਉਮਰ 21 ਤੋਂ 18 ਸਾਲ ਕੀਤੀ; 61ਵੀਂ ਸੋਧ (1988): ਦਸਵੀਂ ਅਨੁਸੂਚੀ',
        hi: '52वां संशोधन (1985): मतदान आयु 21 से 18 वर्ष; 61वां संशोधन (1988): दसवीं अनुसूची',
      },
      B: {
        en: '91st Amendment (2003): Added Ninth Schedule; 1st Amendment (1951): Capped Council of Ministers at 15%',
        pa: '91ਵੀਂ ਸੋਧ (2003): ਨੌਵੀਂ ਅਨੁਸੂਚੀ ਜੋੜੀ; ਪਹਿਲੀ ਸੋਧ (1951): ਮੰਤਰੀ ਪ੍ਰੀਸ਼ਦ ਦਾ ਆਕਾਰ 15% ਤੱਕ ਸੀਮਤ ਕੀਤਾ',
        hi: '91वां संशोधन (2003): नौवीं अनुसूची जोड़ी; प्रथम संशोधन (1951): मंत्रिपरिषद का आकार 15% तक सीमित किया',
      },
      C: {
        en: '61st Amendment (1988): Reduced voting age from 21 to 18 years under Article 326; 91st Amendment (2003): Capped Council of Ministers at 15% of the strength of the Popular House',
        pa: '61ਵੀਂ ਸੋਧ (1988): ਅਨੁਛੇਦ 326 ਤਹਿਤ ਵੋਟ ਪਾਉਣ ਦੀ ਉਮਰ 21 ਤੋਂ ਘਟਾ ਕੇ 18 ਸਾਲ ਕੀਤੀ; 91ਵੀਂ ਸੋਧ (2003): ਮੰਤਰੀ ਪ੍ਰੀਸ਼ਦ ਦੀ ਗਿਣਤੀ ਹੇਠਲੇ ਸਦਨ ਦੀ ਕੁੱਲ ਗਿਣਤੀ ਦੇ 15% ਤੱਕ ਸੀਮਤ ਕੀਤੀ',
        hi: '61वां संशोधन (1988): अनुच्छेद 326 के तहत मतदान की आयु 21 से घटाकर 18 वर्ष की; 91वां संशोधन (2003): मंत्रिपरिषद का आकार लोकप्रिय सदन की कुल संख्या के 15% तक सीमित किया',
      },
      D: {
        en: '101st Amendment (2016): Women’s Reservation in Lok Sabha; 106th Amendment (2023): Goods and Services Tax',
        pa: '101ਵੀਂ ਸੋਧ (2016): ਲੋਕ ਸਭਾ ਵਿੱਚ ਮਹਿਲਾ ਰਾਖਵਾਂਕਰਨ; 106ਵੀਂ ਸੋਧ (2023): ਵਸਤੂ ਅਤੇ ਸੇਵਾ ਕਰ (GST)',
        hi: '101वां संशोधन (2016): लोक सभा में महिला आरक्षण; 106वां संशोधन (2023): वस्तु एवं सेवा कर (GST)',
      },
    },
    correct: 'C',
    explanation: {
      en: 'The 61st Amendment Act, 1988 amended Article 326 to reduce the voting age from 21 to 18 years. The 91st Amendment Act, 2003 capped the total number of ministers, including the PM/CM, at 15% of the total strength of the Lok Sabha / State Legislative Assembly (and a minimum of 12 in States). The 52nd Amendment (1985) added the 10th Schedule (Anti-Defection Law).',
      pa: '61ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ (1988) ਨੇ ਅਨੁਛੇਦ 326 ਵਿੱਚ ਸੋਧ ਕਰਕੇ ਵੋਟ ਪਾਉਣ ਦੀ ਉਮਰ 21 ਤੋਂ ਘਟਾ ਕੇ 18 ਸਾਲ ਕੀਤੀ। 91ਵੀਂ ਸੋਧ (2003) ਨੇ ਮੰਤਰੀ ਮੰਡਲ ਦਾ ਆਕਾਰ ਲੋਕ ਸਭਾ/ਵਿਧਾਨ ਸਭਾ ਦੀ ਕੁੱਲ ਗਿਣਤੀ ਦੇ 15% ਤੱਕ ਸੀਮਤ ਕੀਤਾ। 52ਵੀਂ ਸੋਧ (1985) ਨੇ ਦਲ-ਬਦਲੀ ਵਿਰੋਧੀ ਕਾਨੂੰਨ (10ਵੀਂ ਅਨੁਸੂਚੀ) ਜੋੜਿਆ।',
      hi: '61वें संविधान संशोधन (1988) ने अनुच्छेद 326 में संशोधन कर मतदान की आयु 21 से घटाकर 18 वर्ष की। 91वें संशोधन (2003) ने मंत्रिपरिषद के आकार को लोक सभा/विधान सभा की कुल संख्या के 15% तक सीमित किया। 52वें संशोधन (1985) ने दलबदल विरोधी कानून (10वीं अनुसूची) जोड़ा।',
    },
    difficulty: 'hard',
  },
  {
    id: 'q-ppsc-clk-pol-20',
    topicId: 'constitution',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'What is the primary provision of the 106th Constitutional Amendment Act, 2023 (Nari Shakti Vandan Adhiniyam)?',
      pa: '106ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 2023 (ਨਾਰੀ ਸ਼ਕਤੀ ਵੰਦਨ ਅਧਿਨਿਯਮ) ਦਾ ਮੁੱਖ ਉਪਬੰਧ ਕੀ ਹੈ?',
      hi: '106वें संविधान संशोधन अधिनियम, 2023 (नारी शक्ति वंदन अधिनियम) का मुख्य प्रावधान क्या है?',
    },
    options: {
      A: {
        en: '10% reservation for Economically Weaker Sections (EWS) in public employment',
        pa: 'ਸਰਕਾਰੀ ਨੌਕਰੀਆਂ ਵਿੱਚ ਆਰਥਿਕ ਤੌਰ ਤੇ ਕਮਜ਼ੋਰ ਵਰਗਾਂ (EWS) ਲਈ 10% ਰਾਖਵਾਂਕਰਨ',
        hi: 'सरकारी नौकरियों में आर्थिक रूप से कमजोर वर्गों (EWS) के लिए 10% आरक्षण',
      },
      B: {
        en: 'Constitutional status to the National Commission for Backward Classes (NCBC)',
        pa: 'ਰਾਸ਼ਟਰੀ ਪੱਛੜੀਆਂ ਸ਼੍ਰੇਣੀਆਂ ਕਮਿਸ਼ਨ (NCBC) ਨੂੰ ਸੰਵਿਧਾਨਕ ਦਰਜਾ',
        hi: 'राष्ट्रीय पिछड़ा वर्ग आयोग (NCBC) को संवैधानिक दर्जा',
      },
      C: {
        en: 'Extension of SC/ST reservation in the Lok Sabha for another ten years',
        pa: 'ਲੋਕ ਸਭਾ ਵਿੱਚ SC/ST ਰਾਖਵੇਂਕਰਨ ਨੂੰ ਹੋਰ ਦਸ ਸਾਲਾਂ ਲਈ ਵਧਾਉਣਾ',
        hi: 'लोक सभा में SC/ST आरक्षण को अगले दस वर्षों के लिए बढ़ाना',
      },
      D: {
        en: 'One-third (33%) reservation of seats for women in the Lok Sabha, State Legislative Assemblies, and the Legislative Assembly of NCT of Delhi',
        pa: 'ਲੋਕ ਸਭਾ, ਰਾਜ ਵਿਧਾਨ ਸਭਾਵਾਂ ਅਤੇ ਦਿੱਲੀ ਵਿਧਾਨ ਸਭਾ ਵਿੱਚ ਔਰਤਾਂ ਲਈ ਇੱਕ-ਤਿਹਾਈ (33%) ਸੀਟਾਂ ਦਾ ਰਾਖਵਾਂਕਰਨ',
        hi: 'लोक सभा, राज्य विधान सभाओं और राष्ट्रीय राजधानी क्षेत्र दिल्ली की विधान सभा में महिलाओं के लिए एक-तिहाई (33%) सीटों का आरक्षण',
      },
    },
    correct: 'D',
    explanation: {
      en: 'The 106th Constitutional Amendment Act, 2023 (Nari Shakti Vandan Adhiniyam) inserts Articles 330A, 332A, and 334A and amends Article 239AA to reserve one-third (33%) of all seats for women in the Lok Sabha, State Legislative Assemblies, and the Delhi Legislative Assembly for a period of 15 years after the first census and delimitation following the Act.',
      pa: '106ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 2023 (ਨਾਰੀ ਸ਼ਕਤੀ ਵੰਦਨ ਅਧਿਨਿਯਮ) ਤਹਿਤ ਅਨੁਛੇਦ 330A, 332A ਅਤੇ 334A ਜੋੜ ਕੇ ਲੋਕ ਸਭਾ, ਰਾਜ ਵਿਧਾਨ ਸਭਾਵਾਂ ਅਤੇ ਦਿੱਲੀ ਵਿਧਾਨ ਸਭਾ ਵਿੱਚ ਔਰਤਾਂ ਲਈ ਇੱਕ-ਤਿਹਾਈ (33%) ਸੀਟਾਂ ਰਾਖਵੀਆਂ ਕੀਤੀਆਂ ਗਈਆਂ ਹਨ।',
      hi: '106वें संविधान संशोधन अधिनियम, 2023 (नारी शक्ति वंदन अधिनियम) के तहत अनुच्छेद 330A, 332A और 334A जोड़कर लोक सभा, राज्य विधान सभाओं और दिल्ली विधान सभा में महिलाओं के लिए एक-तिहाई (33%) सीटें आरक्षित करने का प्रावधान किया गया है।',
    },
    difficulty: 'medium',
  },

  // ===========================================================================
  // 2. MODERN INDIAN HISTORY & FREEDOM STRUGGLE (topicId: 'modern-india') — 20 MCQs
  // ===========================================================================
  {
    id: 'q-ppsc-clk-his-1',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which pair of centres of the Revolt of 1857 and their prominent Indian leaders is correctly matched?',
      pa: '1857 ਦੇ ਵਿਦਰੋਹ ਦੇ ਕੇਂਦਰਾਂ ਅਤੇ ਉਹਨਾਂ ਦੇ ਪ੍ਰਮੁੱਖ ਭਾਰਤੀ ਨੇਤਾਵਾਂ ਦਾ ਕਿਹੜਾ ਜੋੜਾ ਸਹੀ ਸੁਮੇਲ ਖਾਂਦਾ ਹੈ?',
      hi: '1857 के विद्रोह के केंद्रों और उनके प्रमुख भारतीय नेताओं का कौन-सा युग्म सही सुमेलित है?',
    },
    options: {
      A: {
        en: 'Kanpur: Nana Saheb & Tatya Tope; Bihar (Arrah/Jagdishpur): Babu Kunwar Singh; Lucknow: Begum Hazrat Mahal',
        pa: 'ਕਾਨਪੁਰ: ਨਾਨਾ ਸਾਹਿਬ ਅਤੇ ਤਾਂਤੀਆ ਟੋਪੇ; ਬਿਹਾਰ (ਆਰਾ/ਜਗਦੀਸ਼ਪੁਰ): ਬਾਬੂ ਕੁੰਵਰ ਸਿੰਘ; ਲਖਨਊ: ਬੇਗਮ ਹਜ਼ਰਤ ਮਹਿਲ',
        hi: 'कानपुर: नाना साहेब और तात्या टोपे; बिहार (आरा/जगदीशपुर): बाबू कुंवर सिंह; लखनऊ: बेगम हजरत महल',
      },
      B: {
        en: 'Jhansi: Khan Bahadur Khan; Bareilly: Maulvi Ahmadullah; Delhi: Liyaqat Ali',
        pa: 'ਝਾਂਸੀ: ਖਾਨ ਬਹਾਦਰ ਖਾਨ; ਬਰੇਲੀ: ਮੌਲਵੀ ਅਹਿਮਦੁੱਲਾ; ਦਿੱਲੀ: ਲਿਆਕਤ ਅਲੀ',
        hi: 'झांसी: खान बहादुर खान; बरेली: मौलवी अहमदुल्लाह; दिल्ली: लियाकत अली',
      },
      C: {
        en: 'Lucknow: Rani Lakshmibai; Kanpur: General Bakht Khan; Arrah: Bahadur Shah Zafar',
        pa: 'ਲਖਨਊ: ਰਾਣੀ ਲਕਸ਼ਮੀਬਾਈ; ਕਾਨਪੁਰ: ਜਨਰਲ ਬਖ਼ਤ ਖਾਨ; ਆਰਾ: ਬਹਾਦਰ ਸ਼ਾਹ ਜ਼ਫ਼ਰ',
        hi: 'लखनऊ: रानी लक्ष्मीबाई; कानपुर: जनरल बख्त खान; आरा: बहादुर शाह जफर',
      },
      D: {
        en: 'Faizabad: Babu Kunwar Singh; Allahabad: Begum Hazrat Mahal; Delhi: Nana Saheb',
        pa: 'ਫੈਜ਼ਾਬਾਦ: ਬਾਬੂ ਕੁੰਵਰ ਸਿੰਘ; ਇਲਾਹਾਬਾਦ: ਬੇਗਮ ਹਜ਼ਰਤ ਮਹਿਲ; ਦਿੱਲੀ: ਨਾਨਾ ਸਾਹਿਬ',
        hi: 'फैजाबाद: बाबू कुंवर सिंह; इलाहाबाद: बेगम हजरत महल; दिल्ली: नाना साहेब',
      },
    },
    correct: 'A',
    explanation: {
      en: 'During the Revolt of 1857, Nana Saheb (assisted by Tatya Tope and Azimullah Khan) led the uprising at Kanpur, Begum Hazrat Mahal led at Lucknow (Awadh), and Zamindar Babu Kunwar Singh led at Jagdishpur/Arrah in Bihar. General Bakht Khan led in Delhi, Rani Lakshmibai in Jhansi, Khan Bahadur Khan in Bareilly, Maulvi Ahmadullah in Faizabad, and Maulvi Liyaqat Ali in Allahabad.',
      pa: '1857 ਦੇ ਵਿਦਰੋਹ ਦੌਰਾਨ ਕਾਨਪੁਰ ਵਿੱਚ ਨਾਨਾ ਸਾਹਿਬ (ਅਤੇ ਤਾਂਤੀਆ ਟੋਪੇ), ਲਖਨਊ ਵਿੱਚ ਬੇਗਮ ਹਜ਼ਰਤ ਮਹਿਲ ਅਤੇ ਬਿਹਾਰ ਦੇ ਜਗਦੀਸ਼ਪੁਰ (ਆਰਾ) ਵਿੱਚ ਬਾਬੂ ਕੁੰਵਰ ਸਿੰਘ ਨੇ ਅਗਵਾਈ ਕੀਤੀ। ਦਿੱਲੀ ਵਿੱਚ ਜਨਰਲ ਬਖ਼ਤ ਖਾਨ, ਝਾਂਸੀ ਵਿੱਚ ਰਾਣੀ ਲਕਸ਼ਮੀਬਾਈ ਅਤੇ ਬਰੇਲੀ ਵਿੱਚ ਖਾਨ ਬਹਾਦਰ ਖਾਨ ਪ੍ਰਮੁੱਖ ਨੇਤਾ ਸਨ।',
      hi: '1857 के विद्रोह के दौरान कानपुर में नाना साहेब (एवं तात्या टोपे), लखनऊ में बेगम हजरत महल और बिहार के जगदीशपुर (आरा) में बाबू कुंवर सिंह ने नेतृत्व किया। दिल्ली में जनरल बख्त खान, झांसी में रानी लक्ष्मीबाई और बरेली में खान बहादुर खान प्रमुख नेता थे।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-his-2',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Who founded the "Satyashodhak Samaj" in 1873 in Pune and authored the landmark anti-caste work "Gulamgiri"?',
      pa: '1873 ਵਿੱਚ ਪੁਣੇ ਵਿਖੇ "ਸਤਿਆਸ਼ੋਧਕ ਸਮਾਜ" ਦੀ ਸਥਾਪਨਾ ਕਿਸ ਨੇ ਕੀਤੀ ਅਤੇ ਜਾਤੀਵਾਦ ਵਿਰੋਧੀ ਪ੍ਰਸਿੱਧ ਪੁਸਤਕ "ਗੁਲਾਮਗਿਰੀ" ਕਿਸ ਨੇ ਲਿਖੀ?',
      hi: '1873 में पुणे में "सत्यशोधक समाज" की स्थापना किसने की और जाति-प्रथा विरोधी प्रसिद्ध पुस्तक "गुलामगिरी" की रचना किसने की?',
    },
    options: {
      A: {
        en: 'Raja Ram Mohan Roy',
        pa: 'ਰਾਜਾ ਰਾਮ ਮੋਹਨ ਰਾਏ',
        hi: 'राजा राममोहन राय',
      },
      B: {
        en: 'Mahatma Jyotirao Phule',
        pa: 'ਮਹਾਤਮਾ ਜੋਤੀਰਾਓ ਫੂਲੇ',
        hi: 'महात्मा ज्योतिराव फुले',
      },
      C: {
        en: 'Swami Dayananda Saraswati',
        pa: 'ਸਵਾਮੀ ਦਯਾਨੰਦ ਸਰਸਵਤੀ',
        hi: 'स्वामी दयानंद सरस्वती',
      },
      D: {
        en: 'Atmaram Pandurang',
        pa: 'ਆਤਮਾਰਾਮ ਪਾਂਡੂਰੰਗ',
        hi: 'आत्माराम पांडुरंग',
      },
    },
    correct: 'B',
    explanation: {
      en: 'Mahatma Jyotirao Phule founded the Satyashodhak Samaj (Truth-Seekers’ Society) on 24 September 1873 in Pune and wrote Gulamgiri (1873). Raja Ram Mohan Roy founded the Brahmo Samaj (1828), Swami Dayananda Saraswati founded the Arya Samaj (1875, Bombay; HQ shifted to Lahore in 1877), and Atmaram Pandurang founded the Prarthana Samaj (1867).',
      pa: 'ਮਹਾਤਮਾ ਜੋਤੀਰਾਓ ਫੂਲੇ ਨੇ 24 ਸਤੰਬਰ 1873 ਨੂੰ ਪੁਣੇ ਵਿੱਚ "ਸਤਿਆਸ਼ੋਧਕ ਸਮਾਜ" ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ ਅਤੇ "ਗੁਲਾਮਗਿਰੀ" (1873) ਪੁਸਤਕ ਲਿਖੀ। ਰਾਜਾ ਰਾਮ ਮੋਹਨ ਰਾਏ ਨੇ ਬ੍ਰਹਮੋ ਸਮਾਜ (1828) ਅਤੇ ਸਵਾਮੀ ਦਯਾਨੰਦ ਸਰਸਵਤੀ ਨੇ ਆਰੀਆ ਸਮਾਜ (1875) ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ।',
      hi: 'महात्मा ज्योतिराव फुले ने 24 सितंबर 1873 को पुणे में "सत्यशोधक समाज" की स्थापना की और "गुलामगिरी" (1873) पुस्तक लिखी। राजा राममोहन राय ने ब्रह्म समाज (1828) और स्वामी दयानंद सरस्वती ने आर्य समाज (1875) की स्थापना की।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-his-3',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Where was the first Sri Guru Singh Sabha established in October 1873 under the presidentship of Sardar Thakur Singh Sandhawalia and secretaryship of Giani Gian Singh?',
      pa: 'ਅਕਤੂਬਰ 1873 ਵਿੱਚ ਸਰਦਾਰ ਠਾਕੁਰ ਸਿੰਘ ਸੰਧਾਵਾਲੀਆ ਦੀ ਪ੍ਰਧਾਨਗੀ ਅਤੇ ਗਿਆਨੀ ਗਿਆਨ ਸਿੰਘ ਦੇ ਸਕੱਤਰ ਵਜੋਂ ਪਹਿਲੀ "ਸ੍ਰੀ ਗੁਰੂ ਸਿੰਘ ਸਭਾ" ਕਿੱਥੇ ਸਥਾਪਿਤ ਕੀਤੀ ਗਈ ਸੀ?',
      hi: 'अक्टूबर 1873 में सरदार ठाकुर सिंह संधावालिया की अध्यक्षता और ज्ञानी ज्ञान सिंह के सचिव पद के तहत प्रथम "श्री गुरु सिंह सभा" कहाँ स्थापित की गई थी?',
    },
    options: {
      A: {
        en: 'Lahore',
        pa: 'ਲਾਹੌਰ',
        hi: 'लाहौर',
      },
      B: {
        en: 'Rawalpindi',
        pa: 'ਰਾਵਲਪਿੰਡੀ',
        hi: 'रावलपिंडी',
      },
      C: {
        en: 'Amritsar',
        pa: 'ਅੰਮ੍ਰਿਤਸਰ',
        hi: 'अमृतसर',
      },
      D: {
        en: 'Tarn Taran',
        pa: 'ਤਰਨ ਤਾਰਨ',
        hi: 'तरन तारन',
      },
    },
    correct: 'C',
    explanation: {
      en: 'The first Sri Guru Singh Sabha was founded at Amritsar on 1 October 1873 with Sardar Thakur Singh Sandhawalia as President and Giani Gian Singh as Secretary. Later, on 2 November 1879, the Lahore Singh Sabha was formed under Prof. Gurmukh Singh and Diwan Buta Singh.',
      pa: 'ਪਹਿਲੀ ਸ੍ਰੀ ਗੁਰੂ ਸਿੰਘ ਸਭਾ 1 ਅਕਤੂਬਰ 1873 ਨੂੰ ਅੰਮ੍ਰਿਤਸਰ ਵਿਖੇ ਸਰਦਾਰ ਠਾਕੁਰ ਸਿੰਘ ਸੰਧਾਵਾਲੀਆ (ਪ੍ਰਧਾਨ) ਅਤੇ ਗਿਆਨੀ ਗਿਆਨ ਸਿੰਘ (ਸਕੱਤਰ) ਦੀ ਅਗਵਾਈ ਹੇਠ ਸਥਾਪਿਤ ਹੋਈ ਸੀ। ਬਾਅਦ ਵਿੱਚ 2 ਨਵੰਬਰ 1879 ਨੂੰ ਪ੍ਰੋ. ਗੁਰਮੁਖ ਸਿੰਘ ਦੀ ਅਗਵਾਈ ਵਿੱਚ ਲਾਹੌਰ ਸਿੰਘ ਸਭਾ ਬਣੀ।',
      hi: 'प्रथम श्री गुरु सिंह सभा की स्थापना 1 अक्टूबर 1873 को अमृतसर में सरदार ठाकुर सिंह संधावालिया (अध्यक्ष) और ज्ञानी ज्ञान सिंह (सचिव) के नेतृत्व में हुई थी। बाद में 2 नवंबर 1879 को प्रो. गुरमुख सिंह के नेतृत्व में लाहौर सिंह सभा का गठन हुआ।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-his-4',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Who presided over the first session of the Indian National Congress held at Gokuldas Tejpal Sanskrit College, Bombay in December 1885, and how many delegates attended it?',
      pa: 'ਦਸੰਬਰ 1885 ਵਿੱਚ ਬੰਬਈ ਦੇ ਗੋਕੁਲਦਾਸ ਤੇਜਪਾਲ ਸੰਸਕ੍ਰਿਤ ਕਾਲਜ ਵਿਖੇ ਹੋਏ ਇੰਡੀਅਨ ਨੈਸ਼ਨਲ ਕਾਂਗਰਸ ਦੇ ਪਹਿਲੇ ਇਜਲਾਸ ਦੀ ਪ੍ਰਧਾਨਗੀ ਕਿਸ ਨੇ ਕੀਤੀ ਅਤੇ ਇਸ ਵਿੱਚ ਕਿੰਨੇ ਪ੍ਰਤੀਨਿਧੀਆਂ ਨੇ ਭਾਗ ਲਿਆ?',
      hi: 'दिसंबर 1885 में बॉम्बे के गोकुलदास तेजपाल संस्कृत कॉलेज में आयोजित भारतीय राष्ट्रीय कांग्रेस के प्रथम अधिवेशन की अध्यक्षता किसने की और इसमें कितने प्रतिनिधियों ने भाग लिया?',
    },
    options: {
      A: {
        en: 'Dadabhai Naoroji; 100 delegates',
        pa: 'ਦਾਦਾਭਾਈ ਨੌਰੋਜੀ; 100 ਪ੍ਰਤੀਨਿਧੀ',
        hi: 'दादाभाई नौरोजी; 100 प्रतिनिधि',
      },
      B: {
        en: 'Allan Octavian Hume; 85 delegates',
        pa: 'ਐਲਨ ਔਕਟੇਵੀਅਨ ਹਿਊਮ; 85 ਪ੍ਰਤੀਨਿਧੀ',
        hi: 'एलन ऑक्टेवियन ह्यूम; 85 प्रतिनिधि',
      },
      C: {
        en: 'Badruddin Tyabji; 78 delegates',
        pa: 'ਬਦਰੂਦੀਨ ਤੈਯਬਜੀ; 78 ਪ੍ਰਤੀਨਿਧੀ',
        hi: 'बदरुद्दीन तैयबजी; 78 प्रतिनिधि',
      },
      D: {
        en: 'Womesh Chunder Bonnerjee (W.C. Bonnerjee); 72 delegates',
        pa: 'ਵੋਮੇਸ਼ ਚੰਦਰ ਬੈਨਰਜੀ (W.C. Bonnerjee); 72 ਪ੍ਰਤੀਨਿਧੀ',
        hi: 'व्योमेश चंद्र बनर्जी (W.C. Bonnerjee); 72 प्रतिनिधि',
      },
    },
    correct: 'D',
    explanation: {
      en: 'Founded through the initiative of A.O. Hume during the viceroyalty of Lord Dufferin, the first session of the Indian National Congress (December 28–31, 1885) at Bombay was presided over by Womesh Chunder Bonnerjee and attended by 72 delegates.',
      pa: 'ਏ.ਓ. ਹਿਊਮ ਦੀ ਪਹਿਲਕਦਮੀ ਨਾਲ ਲਾਰਡ ਡਫ਼ਰਿਨ ਦੇ ਕਾਰਜਕਾਲ ਦੌਰਾਨ 28–31 ਦਸੰਬਰ 1885 ਨੂੰ ਬੰਬਈ ਵਿਖੇ ਹੋਏ ਇੰਡੀਅਨ ਨੈਸ਼ਨਲ ਕਾਂਗਰਸ ਦੇ ਪਹਿਲੇ ਇਜਲਾਸ ਦੀ ਪ੍ਰਧਾਨਗੀ ਵੋਮੇਸ਼ ਚੰਦਰ ਬੈਨਰਜੀ (W.C. Bonnerjee) ਨੇ ਕੀਤੀ ਸੀ ਅਤੇ ਇਸ ਵਿੱਚ 72 ਪ੍ਰਤੀਨਿਧੀਆਂ ਨੇ ਹਿੱਸਾ ਲਿਆ ਸੀ।',
      hi: 'ए.ओ. ह्यूम की पहल पर लॉर्ड डफरिन के वायसराय काल में 28–31 दिसंबर 1885 को बॉम्बे में आयोजित भारतीय राष्ट्रीय कांग्रेस के प्रथम अधिवेशन की अध्यक्षता व्योमेश चंद्र बनर्जी (W.C. Bonnerjee) ने की थी और इसमें 72 प्रतिनिधियों ने भाग लिया था।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-his-5',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which of the following historic sessions of the Indian National Congress (INC) is correctly matched with its President and key resolution/event?',
      pa: 'ਇੰਡੀਅਨ ਨੈਸ਼ਨਲ ਕਾਂਗਰਸ (INC) ਦੇ ਹੇਠ ਲਿਖੇ ਇਤਿਹਾਸਕ ਇਜਲਾਸਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਆਪਣੇ ਪ੍ਰਧਾਨ ਅਤੇ ਮੁੱਖ ਮਤੇ/ਘਟਨਾ ਨਾਲ ਸਹੀ ਮੇਲ ਖਾਂਦਾ ਹੈ?',
      hi: 'भारतीय राष्ट्रीय कांग्रेस (INC) के निम्नलिखित ऐतिहासिक अधिवेशनों में से कौन-सा अपने अध्यक्ष और मुख्य प्रस्ताव/घटना के साथ सही सुमेलित है?',
    },
    options: {
      A: {
        en: '1907 Surat Session (Rash Behari Ghosh — Split between Moderates & Extremists); 1916 Lucknow Session (Ambica Charan Mazumdar — Lucknow Pact & Congress Reunion); 1924 Belgaum Session (Mahatma Gandhi — only session presided by Gandhi)',
        pa: '1907 ਸੂਰਤ ਇਜਲਾਸ (ਰਾਸ ਬਿਹਾਰੀ ਘੋਸ਼ — ਨਰਮ ਦਲ ਤੇ ਗਰਮ ਦਲ ਦੀ ਵੰਡ); 1916 ਲਖਨਊ ਇਜਲਾਸ (ਅੰਬਿਕਾ ਚਰਨ ਮਜ਼ੂਮਦਾਰ — ਲਖਨਊ ਸਮਝੌਤਾ); 1924 ਬੇਲਗਾਮ ਇਜਲਾਸ (ਮਹਾਤਮਾ ਗਾਂਧੀ — ਗਾਂਧੀ ਜੀ ਦੁਆਰਾ ਪ੍ਰਧਾਨਗੀ ਕੀਤਾ ਇੱਕੋ-ਇੱਕ ਇਜਲਾਸ)',
        hi: '1907 सूरत अधिवेशन (रास बिहारी घोष — नरम दल व गरम दल में विभाजन); 1916 लखनऊ अधिवेशन (अंबिका चरण मजूमदार — लखनऊ समझौता); 1924 बेलगाम अधिवेशन (महात्मा गांधी — गांधीजी द्वारा अध्यक्षता किया गया एकमात्र अधिवेशन)',
      },
      B: {
        en: '1907 Surat Session (Lala Lajpat Rai); 1916 Lucknow Session (Annie Besant); 1924 Belgaum Session (Vallabhbhai Patel)',
        pa: '1907 ਸੂਰਤ ਇਜਲਾਸ (ਲਾਲਾ ਲਾਜਪਤ ਰਾਏ); 1916 ਲਖਨਊ ਇਜਲਾਸ (ਐਨੀ ਬੇਸੈਂਟ); 1924 ਬੇਲਗਾਮ ਇਜਲਾਸ (ਵੱਲਭਭਾਈ ਪਟੇਲ)',
        hi: '1907 सूरत अधिवेशन (लाला लाजपत राय); 1916 लखनऊ अधिवेशन (एनी बेसेंट); 1924 बेलगाम अधिवेशन (वल्लभभाई पटेल)',
      },
      C: {
        en: '1929 Lahore Session (Subhas Chandra Bose); 1931 Karachi Session (Jawaharlal Nehru); 1938 Haripura Session (Motilal Nehru)',
        pa: '1929 ਲਾਹੌਰ ਇਜਲਾਸ (ਸੁਭਾਸ਼ ਚੰਦਰ ਬੋਸ); 1931 ਕਰਾਚੀ ਇਜਲਾਸ (ਜਵਾਹਰ ਲਾਲ ਨਹਿਰੂ); 1938 ਹਰੀਪੁਰਾ ਇਜਲਾਸ (ਮੋਤੀ ਲਾਲ ਨਹਿਰੂ)',
        hi: '1929 लाहौर अधिवेशन (सुभाष चंद्र बोस); 1931 कराची अधिवेशन (जवाहरलाल नेहरू); 1938 हरिपुरा अधिवेशन (मोतीलाल नेहरू)',
      },
      D: {
        en: '1916 Lucknow Session (Sarojini Naidu); 1924 Belgaum Session (C.R. Das); 1931 Karachi Session (Rajendra Prasad)',
        pa: '1916 ਲਖਨਊ ਇਜਲਾਸ (ਸਰੋਜਨੀ ਨਾਇਡੂ); 1924 ਬੇਲਗਾਮ ਇਜਲਾਸ (ਸੀ.ਆਰ. ਦਾਸ); 1931 ਕਰਾਚੀ ਇਜਲਾਸ (ਰਾਜੇਂਦਰ ਪ੍ਰਸਾਦ)',
        hi: '1916 लखनऊ अधिवेशन (सरोजिनी नायडू); 1924 बेलगाम अधिवेशन (सी.आर. दास); 1931 कराची अधिवेशन (राजेंद्र प्रसाद)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Rash Behari Ghosh presided over the 1907 Surat Session (Moderates-Extremists split); Ambica Charan Mazumdar presided over the 1916 Lucknow Session (reunion of Congress and Congress-League Lucknow Pact); Mahatma Gandhi presided over only one INC session—1924 Belgaum. Additionally, 1929 Lahore (Jawaharlal Nehru — Purna Swaraj), 1931 Karachi (Sardar Patel — Fundamental Rights & National Economic Programme), and 1938 Haripura (Subhas Chandra Bose — National Planning Committee) are major milestones.',
      pa: '1907 ਦੇ ਸੂਰਤ ਇਜਲਾਸ ਦੀ ਪ੍ਰਧਾਨਗੀ ਰਾਸ ਬਿਹਾਰੀ ਘੋਸ਼ ਨੇ ਕੀਤੀ; 1916 ਦੇ ਲਖਨਊ ਇਜਲਾਸ ਦੀ ਪ੍ਰਧਾਨਗੀ ਅੰਬਿਕਾ ਚਰਨ ਮਜ਼ੂਮਦਾਰ ਨੇ ਕੀਤੀ ਅਤੇ 1924 ਦੇ ਬੇਲਗਾਮ ਇਜਲਾਸ ਦੀ ਪ੍ਰਧਾਨਗੀ ਮਹਾਤਮਾ ਗਾਂਧੀ ਨੇ ਕੀਤੀ। ਇਸ ਤੋਂ ਇਲਾਵਾ 1929 ਲਾਹੌਰ (ਜਵਾਹਰ ਲਾਲ ਨਹਿਰੂ - ਪੂਰਨ ਸਵਰਾਜ), 1931 ਕਰਾਚੀ (ਸਰਦਾਰ ਪਟੇਲ - ਮੌਲਿਕ ਅਧਿਕਾਰ ਮਤਾ) ਅਤੇ 1938 ਹਰੀਪੁਰਾ (ਸੁਭਾਸ਼ ਚੰਦਰ ਬੋਸ) ਪ੍ਰਮੁੱਖ ਇਜਲਾਸ ਹਨ।',
      hi: '1907 के सूरत अधिवेशन की अध्यक्षता रास बिहारी घोष ने की; 1916 के लखनऊ अधिवेशन की अध्यक्षता अंबिका चरण मजूमदार ने की और 1924 के बेलगाम अधिवेशन की अध्यक्षता महात्मा गांधी ने की। इसके अतिरिक्त 1929 लाहौर (जवाहरलाल नेहरू - पूर्ण स्वराज), 1931 कराची (सरदार पटेल - मौलिक अधिकार प्रस्ताव) और 1938 हरिपुरा (सुभाष चंद्र बोस) प्रमुख अधिवेशन हैं।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-his-6',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'During which session of the Indian National Congress, held on the banks of the River Ravi in December 1929, was the resolution of "Purna Swaraj" (Complete Independence) passed under the presidentship of Jawaharlal Nehru?',
      pa: 'ਦਸੰਬਰ 1929 ਵਿੱਚ ਰਾਵੀ ਦਰਿਆ ਦੇ ਕੰਢੇ ਹੋਏ ਇੰਡੀਅਨ ਨੈਸ਼ਨਲ ਕਾਂਗਰਸ ਦੇ ਕਿਸ ਇਜਲਾਸ ਵਿੱਚ ਜਵਾਹਰ ਲਾਲ ਨਹਿਰੂ ਦੀ ਪ੍ਰਧਾਨਗੀ ਹੇਠ "ਪੂਰਨ ਸਵਰਾਜ" (ਪੂਰਨ ਆਜ਼ਾਦੀ) ਦਾ ਮਤਾ ਪਾਸ ਕੀਤਾ ਗਿਆ ਸੀ?',
      hi: 'दिसंबर 1929 में रावी नदी के तट पर आयोजित भारतीय राष्ट्रीय कांग्रेस के किस अधिवेशन में जवाहरलाल नेहरू की अध्यक्षता में "पूर्ण स्वराज" (पूर्ण स्वतंत्रता) का प्रस्ताव पारित किया गया था?',
    },
    options: {
      A: {
        en: 'Amritsar Session, 1919',
        pa: 'ਅੰਮ੍ਰਿਤਸਰ ਇਜਲਾਸ, 1919',
        hi: 'अमृतसर अधिवेशन, 1919',
      },
      B: {
        en: 'Lahore Session, 1929',
        pa: 'ਲਾਹੌਰ ਇਜਲਾਸ, 1929',
        hi: 'लाहौर अधिवेशन, 1929',
      },
      C: {
        en: 'Karachi Session, 1931',
        pa: 'ਕਰਾਚੀ ਇਜਲਾਸ, 1931',
        hi: 'कराची अधिवेशन, 1931',
      },
      D: {
        en: 'Tripuri Session, 1939',
        pa: 'ਤ੍ਰਿਪੁਰੀ ਇਜਲਾਸ, 1939',
        hi: 'त्रिपुरी अधिवेशन, 1939',
      },
    },
    correct: 'B',
    explanation: {
      en: 'At the historic Lahore Session of the INC in December 1929 on the banks of the River Ravi, Jawaharlal Nehru hoisted the tricolour at midnight on 31 December 1929 and the Congress declared "Purna Swaraj" as its goal, calling for 26 January 1930 to be celebrated as the first Independence Day (Purna Swaraj Day).',
      pa: 'ਦਸੰਬਰ 1929 ਵਿੱਚ ਰਾਵੀ ਦਰਿਆ ਦੇ ਕੰਢੇ ਹੋਏ ਲਾਹੌਰ ਇਜਲਾਸ ਵਿੱਚ ਜਵਾਹਰ ਲਾਲ ਨਹਿਰੂ ਦੀ ਪ੍ਰਧਾਨਗੀ ਹੇਠ "ਪੂਰਨ ਸਵਰਾਜ" ਦਾ ਮਤਾ ਪਾਸ ਕੀਤਾ ਗਿਆ ਅਤੇ 26 ਜਨਵਰੀ 1930 ਨੂੰ ਪਹਿਲੇ ਸੁਤੰਤਰਤਾ ਦਿਵਸ (ਪੂਰਨ ਸਵਰਾਜ ਦਿਵਸ) ਵਜੋਂ ਮਨਾਉਣ ਦਾ ਐਲਾਨ ਕੀਤਾ ਗਿਆ।',
      hi: 'दिसंबर 1929 में रावी नदी के तट पर हुए लाहौर अधिवेशन में जवाहरलाल नेहरू की अध्यक्षता में "पूर्ण स्वराज" का प्रस्ताव पारित किया गया और 26 जनवरी 1930 को प्रथम स्वतंत्रता दिवस (पूर्ण स्वराज दिवस) के रूप में मनाने की घोषणा की गई।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-his-7',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'On which date did the Partition of Bengal ordered by Viceroy Lord Curzon officially come into effect, triggering the Swadeshi and Boycott Movement after the Town Hall meeting of 7 August 1905?',
      pa: 'ਵਾਇਸਰਾਏ ਲਾਰਡ ਕਰਜ਼ਨ ਦੁਆਰਾ ਹੁਕਮ ਦਿੱਤੀ ਗਈ ਬੰਗਾਲ ਦੀ ਵੰਡ ਕਿਸ ਮਿਤੀ ਨੂੰ ਅਧਿਕਾਰਤ ਤੌਰ ਤੇ ਲਾਗੂ ਹੋਈ, ਜਿਸ ਵਿਰੁੱਧ 7 ਅਗਸਤ 1905 ਦੀ ਟਾਊਨ ਹਾਲ ਮੀਟਿੰਗ ਤੋਂ ਸਵਦੇਸ਼ੀ ਅਤੇ ਬਾਈਕਾਟ ਅੰਦੋਲਨ ਚੱਲਿਆ?',
      hi: 'वायसराय लॉर्ड कर्जन द्वारा घोषित बंगाल का विभाजन किस तिथि को आधिकारिक रूप से प्रभावी हुआ, जिसके विरोध में 7 अगस्त 1905 की टाउन हॉल बैठक से स्वदेशी और बहिष्कार आंदोलन चला?',
    },
    options: {
      A: {
        en: '20 July 1905',
        pa: '20 ਜੁਲਾਈ 1905',
        hi: '20 जुलाई 1905',
      },
      B: {
        en: '7 August 1905',
        pa: '7 ਅਗਸਤ 1905',
        hi: '7 अगस्त 1905',
      },
      C: {
        en: '16 October 1905',
        pa: '16 ਅਕਤੂਬਰ 1905',
        hi: '16 अक्टूबर 1905',
      },
      D: {
        en: '12 December 1911',
        pa: '12 ਦਸੰਬਰ 1911',
        hi: '12 दिसंबर 1911',
      },
    },
    correct: 'C',
    explanation: {
      en: 'Lord Curzon announced the Partition of Bengal on 19/20 July 1905, the Swadeshi Movement was formally proclaimed at Calcutta Town Hall on 7 August 1905, and the Partition officially took effect on 16 October 1905 (observed as a day of mourning and Raksha Bandhan across Bengal). It was later annulled on 12 December 1911 by Lord Hardinge II.',
      pa: 'ਲਾਰਡ ਕਰਜ਼ਨ ਨੇ ਜੁਲਾਈ 1905 ਵਿੱਚ ਬੰਗਾਲ ਦੀ ਵੰਡ ਦਾ ਐਲਾਨ ਕੀਤਾ, 7 ਅਗਸਤ 1905 ਨੂੰ ਕਲਕੱਤਾ ਟਾਊਨ ਹਾਲ ਤੋਂ ਸਵਦੇਸ਼ੀ ਅੰਦੋਲਨ ਸ਼ੁਰੂ ਹੋਇਆ ਅਤੇ 16 ਅਕਤੂਬਰ 1905 ਨੂੰ ਬੰਗਾਲ ਦੀ ਵੰਡ ਲਾਗੂ ਹੋਈ (ਜਿਸ ਨੂੰ ਸੋਗ ਦਿਵਸ ਅਤੇ ਰੱਖੜੀ ਦਿਵਸ ਵਜੋਂ ਮਨਾਇਆ ਗਿਆ)।',
      hi: 'लॉर्ड कर्जन ने जुलाई 1905 में बंगाल विभाजन की घोषणा की, 7 अगस्त 1905 को कलकत्ता टाउन हॉल से स्वदेशी आंदोलन प्रारंभ हुआ और 16 अक्टूबर 1905 को बंगाल विभाजन प्रभावी हुआ (जिसे शोक दिवस और रक्षाबंधन दिवस के रूप में मनाया गया)।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-his-8',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Who spearheaded the "Pagri Sambhal Jatta" agrarian movement in Punjab in 1907 against the Punjab Colonisation of Land Bill and Bari Doab water rate hikes, and who composed its iconic anthem?',
      pa: '1907 ਵਿੱਚ ਪੰਜਾਬ ਕਾਲੋਨਾਈਜ਼ੇਸ਼ਨ ਬਿੱਲ ਅਤੇ ਬਾਰੀ ਦੁਆਬ ਦੇ ਆਬਿਆਨੇ (ਪਾਣੀ ਦੀਆਂ ਦਰਾਂ) ਵਿੱਚ ਵਾਧੇ ਵਿਰੁੱਧ ਪੰਜਾਬ ਵਿੱਚ "ਪਗੜੀ ਸੰਭਾਲ ਜੱਟਾ" ਕਿਸਾਨ ਅੰਦੋਲਨ ਦੀ ਅਗਵਾਈ ਕਿਸ ਨੇ ਕੀਤੀ ਅਤੇ ਇਹ ਪ੍ਰਸਿੱਧ ਗੀਤ ਕਿਸ ਨੇ ਲਿਖਿਆ?',
      hi: '1907 में पंजाब कॉलोनाइजेशन बिल और बारी दोआब की जल दरों में वृद्धि के विरुद्ध पंजाब में "पगड़ी संभाल जट्टा" किसान आंदोलन का नेतृत्व किसने किया और यह प्रसिद्ध गीत किसने लिखा?',
    },
    options: {
      A: {
        en: 'Baba Sohan Singh Bhakna and Lala Hardayal',
        pa: 'ਬਾਬਾ ਸੋਹਣ ਸਿੰਘ ਭਕਨਾ ਅਤੇ ਲਾਲਾ ਹਰਦਿਆਲ',
        hi: 'बाबा सोहन सिंह भकना और लाला हरदयाल',
      },
      B: {
        en: 'Saifuddin Kitchlew and Dr. Satyapal',
        pa: 'ਸੈਫ਼ੂਦੀਨ ਕਿਚਲੂ ਅਤੇ ਡਾ. ਸੱਤਿਆਪਾਲ',
        hi: 'सैफुद्दीन किचलू और डॉ. सत्यपाल',
      },
      C: {
        en: 'Baba Gurdit Singh and Bhai Parmanand',
        pa: 'ਬਾਬਾ ਗੁਰਦਿੱਤ ਸਿੰਘ ਅਤੇ ਭਾਈ ਪਰਮਾਨੰਦ',
        hi: 'बाबा गुरदित्त सिंह और भाई परमानंद',
      },
      D: {
        en: 'Sardar Ajit Singh (along with Lala Lajpat Rai) and Banke Dayal (Editor of Jhang Syal)',
        pa: 'ਸਰਦਾਰ ਅਜੀਤ ਸਿੰਘ (ਲਾਲਾ ਲਾਜਪਤ ਰਾਏ ਸਮੇਤ) ਅਤੇ ਬਾਂਕੇ ਦਿਆਲ ("ਝੰਗ ਸਿਆਲ" ਦੇ ਸੰਪਾਦਕ)',
        hi: 'सरदार अजीत सिंह (लाला लाजपत राय सहित) और बांके दयाल ("झंग सियाल" के संपादक)',
      },
    },
    correct: 'D',
    explanation: {
      en: 'In 1907, Sardar Ajit Singh (uncle of Shaheed Bhagat Singh and founder of Bharat Mata Society / Anjuman-i-Muhibban-i-Watan) and Lala Lajpat Rai led the "Pagri Sambhal Jatta" movement against the Chenab/Punjab Colonisation Bill. The poem "Pagri Sambhal Jatta" was composed and recited by Banke Dayal, editor of Jhang Syal, at the Lyallpur rally in March 1907.',
      pa: '1907 ਵਿੱਚ ਸਰਦਾਰ ਅਜੀਤ ਸਿੰਘ (ਭਾਰਤ ਮਾਤਾ ਸੁਸਾਇਟੀ/ਅੰਜੁਮਨ-ਏ-ਮੁਹਿੱਬਾਨ-ਏ-ਵਤਨ ਦੇ ਸੰਸਥਾਪਕ) ਅਤੇ ਲਾਲਾ ਲਾਜਪਤ ਰਾਏ ਨੇ "ਪਗੜੀ ਸੰਭਾਲ ਜੱਟਾ" ਲਹਿਰ ਦੀ ਅਗਵਾਈ ਕੀਤੀ। ਇਹ ਗੀਤ ਮਾਰਚ 1907 ਦੀ ਲਾਇਲਪੁਰ ਰੈਲੀ ਵਿੱਚ "ਝੰਗ ਸਿਆਲ" ਦੇ ਸੰਪਾਦਕ ਬਾਂਕੇ ਦਿਆਲ ਨੇ ਪੇਸ਼ ਕੀਤਾ ਸੀ।',
      hi: '1907 में सरदार अजीत सिंह (अंजुमन-ए-मुहिब्बान-ए-वतन / भारत माता सोसायटी के संस्थापक) और लाला लाजपत राय ने "पगड़ी संभाल जट्टा" आंदोलन का नेतृत्व किया। यह गीत मार्च 1907 की लायलपुर रैली में "झंग सियाल" के संपादक बांके दयाल ने प्रस्तुत किया था।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-his-9',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Where was the headquarters ("Yugantar Ashram") of the Ghadar Party established in 1913, and who were its founding President, General Secretary, and young Punjabi editor of the Ghadar newspaper?',
      pa: '1913 ਵਿੱਚ ਗ਼ਦਰ ਪਾਰਟੀ ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ("ਯੁਗਾਂਤਰ ਆਸ਼ਰਮ") ਕਿੱਥੇ ਸਥਾਪਿਤ ਕੀਤਾ ਗਿਆ ਸੀ, ਅਤੇ ਇਸ ਦੇ ਸੰਸਥਾਪਕ ਪ੍ਰਧਾਨ, ਜਨਰਲ ਸਕੱਤਰ ਅਤੇ "ਗ਼ਦਰ" ਅਖ਼ਬਾਰ ਦੇ ਨੌਜਵਾਨ ਪੰਜਾਬੀ ਸੰਪਾਦਕ ਕੌਣ ਸਨ?',
      hi: '1913 में गदर पार्टी का मुख्यालय ("युगांतर आश्रम") कहाँ स्थापित किया गया था, और इसके संस्थापक अध्यक्ष, महासचिव तथा "गदर" अखबार के युवा पंजाबी संपादक कौन थे?',
    },
    options: {
      A: {
        en: 'San Francisco (USA); Founding President: Baba Sohan Singh Bhakna, General Secretary: Lala Hardayal, Punjabi Editor/Martyr: Kartar Singh Sarabha',
        pa: 'ਸੈਨ ਫਰਾਂਸਿਸਕੋ (ਅਮਰੀਕਾ); ਸੰਸਥਾਪਕ ਪ੍ਰਧਾਨ: ਬਾਬਾ ਸੋਹਣ ਸਿੰਘ ਭਕਨਾ, ਜਨਰਲ ਸਕੱਤਰ: ਲਾਲਾ ਹਰਦਿਆਲ, ਪੰਜਾਬੀ ਸੰਪਾਦਕ/ਸ਼ਹੀਦ: ਕਰਤਾਰ ਸਿੰਘ ਸਰਾਭਾ',
        hi: 'सैन फ्रांसिस्को (अमेरिका); संस्थापक अध्यक्ष: बाबा सोहन सिंह भकना, महासचिव: लाला हरदयाल, पंजाबी संपादक/शहीद: करतार सिंह सराभा',
      },
      B: {
        en: 'Vancouver (Canada); Founding President: Lala Hardayal, General Secretary: Baba Gurdit Singh, Editor: Udham Singh',
        pa: 'ਵੈਨਕੂਵਰ (ਕੈਨੇਡਾ); ਸੰਸਥਾਪਕ ਪ੍ਰਧਾਨ: ਲਾਲਾ ਹਰਦਿਆਲ, ਜਨਰਲ ਸਕੱਤਰ: ਬਾਬਾ ਗੁਰਦਿੱਤ ਸਿੰਘ, ਸੰਪਾਦਕ: ਊਧਮ ਸਿੰਘ',
        hi: 'वैंकूवर (कनाडा); संस्थापक अध्यक्ष: लाला हरदयाल, महासचिव: बाबा गुरदित्त सिंह, संपादक: उधम सिंह',
      },
      C: {
        en: 'London (UK); Founding President: Shyamji Krishna Varma, General Secretary: Madan Lal Dhingra, Editor: Ajit Singh',
        pa: 'ਲੰਡਨ (ਯੂ.ਕੇ.); ਸੰਸਥਾਪਕ ਪ੍ਰਧਾਨ: ਸ਼ਿਆਮਜੀ ਕ੍ਰਿਸ਼ਨ ਵਰਮਾ, ਜਨਰਲ ਸਕੱਤਰ: ਮਦਨ ਲਾਲ ਢੀਂਗਰਾ, ਸੰਪਾਦਕ: ਅਜੀਤ ਸਿੰਘ',
        hi: 'लंदन (यू.के.); संस्थापक अध्यक्ष: श्यामजी कृष्ण वर्मा, महासचिव: मदन लाल ढींगरा, संपादक: अजीत सिंह',
      },
      D: {
        en: 'Tokyo (Japan); Founding President: Rash Behari Bose, General Secretary: Barkatullah, Editor: Bhai Parmanand',
        pa: 'ਟੋਕੀਓ (ਜਾਪਾਨ); ਸੰਸਥਾਪਕ ਪ੍ਰਧਾਨ: ਰਾਸ ਬਿਹਾਰੀ ਬੋਸ, ਜਨਰਲ ਸਕੱਤਰ: ਬਰਕਤੁੱਲਾ, ਸੰਪਾਦਕ: ਭਾਈ ਪਰਮਾਨੰਦ',
        hi: 'टोक्यो (जापान); संस्थापक अध्यक्ष: रास बिहारी बोस, महासचिव: बरकतुल्लाह, संपादक: भाई परमानंद',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Originally formed as the Pacific Coast Hindi Association at Astoria (Oregon) in April/May 1913, the Ghadar Party set up its headquarters "Yugantar Ashram" at San Francisco, USA. Baba Sohan Singh Bhakna was its founding President, Lala Hardayal its General Secretary, and 19-year-old revolutionary Kartar Singh Sarabha (martyred on 16 November 1915 in the First Lahore Conspiracy Case) worked on the Gurmukhi edition of the Ghadar newspaper.',
      pa: 'ਗ਼ਦਰ ਪਾਰਟੀ (ਪੈਸੀਫਿਕ ਕੋਸਟ ਹਿੰਦੀ ਐਸੋਸੀਏਸ਼ਨ) ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ "ਯੁਗਾਂਤਰ ਆਸ਼ਰਮ" ਸੈਨ ਫਰਾਂਸਿਸਕੋ (ਅਮਰੀਕਾ) ਵਿਖੇ ਸੀ। ਬਾਬਾ ਸੋਹਣ ਸਿੰਘ ਭਕਨਾ ਇਸ ਦੇ ਸੰਸਥਾਪਕ ਪ੍ਰਧਾਨ, ਲਾਲਾ ਹਰਦਿਆਲ ਜਨਰਲ ਸਕੱਤਰ ਸਨ ਅਤੇ ਸ਼ਹੀਦ ਕਰਤਾਰ ਸਿੰਘ ਸਰਾਭਾ (16 ਨਵੰਬਰ 1915 ਨੂੰ ਲਾਹੌਰ ਸਾਜ਼ਿਸ਼ ਕੇਸ ਵਿੱਚ ਸ਼ਹੀਦ) ਨੇ ਗੁਰਮੁਖੀ ਵਿੱਚ "ਗ਼ਦਰ" ਅਖ਼ਬਾਰ ਛਾਪਣ ਵਿੱਚ ਮੁੱਖ ਭੂਮਿਕਾ ਨਿਭਾਈ।',
      hi: 'गदर पार्टी (पैसिफिक कोस्ट हिंदी एसोसिएशन) का मुख्यालय "युगांतर आश्रम" सैन फ्रांसिस्को (अमेरिका) में था। बाबा सोहन सिंह भकना इसके संस्थापक अध्यक्ष, लाला हरदयाल महासचिव थे और शहीद करतार सिंह सराभा (16 नवंबर 1915 को प्रथम लाहौर षड्यंत्र केस में शहीद) ने गुरुमुखी में "गदर" अखबार के प्रकाशन में प्रमुख भूमिका निभाई।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-his-10',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'What was the name of the Japanese steamship chartered by Baba Gurdit Singh in 1914 (renamed "Guru Nanak Jahaz") to challenge Canada’s discriminatory "Continuous Passage" immigration law, and at which port near Calcutta did the tragic firing take place upon its forced return?',
      pa: '1914 ਵਿੱਚ ਕੈਨੇਡਾ ਦੇ ਪੱਖਪਾਤੀ "ਨਿਰੰਤਰ ਯਾਤਰਾ" (Continuous Passage) ਕਾਨੂੰਨ ਨੂੰ ਚੁਣੌਤੀ ਦੇਣ ਲਈ ਬਾਬਾ ਗੁਰਦਿੱਤ ਸਿੰਘ ਦੁਆਰਾ ਕਿਰਾਏ ਤੇ ਲਏ ਗਏ ਜਾਪਾਨੀ ਜਹਾਜ਼ (ਜਿਸ ਦਾ ਨਾਂ "ਗੁਰੂ ਨਾਨਕ ਜਹਾਜ਼" ਰੱਖਿਆ ਗਿਆ) ਦਾ ਕੀ ਨਾਂ ਸੀ ਅਤੇ ਕਲਕੱਤੇ ਨੇੜੇ ਕਿਸ ਬੰਦਰਗਾਹ ਤੇ ਵਾਪਸੀ ਸਮੇਂ ਗੋਲੀਬਾਰੀ ਹੋਈ?',
      hi: '1914 में कनाडा के भेदभावपूर्ण "निरंतर यात्रा" (Continuous Passage) कानून को चुनौती देने के लिए बाबा गुरदित्त सिंह द्वारा किराए पर लिए गए जापानी जहाज (जिसे "गुरु नानक जहाज" नाम दिया गया) का नाम क्या था और कलकत्ता के पास किस बंदरगाह पर वापसी के समय गोलीबारी हुई?',
    },
    options: {
      A: {
        en: 'Tosa Maru; Diamond Harbour',
        pa: 'ਤੋਸਾ ਮਾਰੂ; ਡਾਇਮੰਡ ਹਾਰਬਰ',
        hi: 'तोसा मारू; डायमंड हार्बर',
      },
      B: {
        en: 'Komagata Maru; Budge Budge Ghat (29 September 1914)',
        pa: 'ਕਾਮਾਗਾਟਾਮਾਰੂ; ਬਜ-ਬਜ ਘਾਟ (29 ਸਤੰਬਰ 1914)',
        hi: 'कामागाटामारू; बज-बज घाट (29 सितंबर 1914)',
      },
      C: {
        en: 'Korea Maru; Haldia Port',
        pa: 'ਕੋਰੀਆ ਮਾਰੂ; ਹਲਦੀਆ ਬੰਦਰਗਾਹ',
        hi: 'कोरिया मारू; हल्दिया बंदरगाह',
      },
      D: {
        en: 'Nippon Maru; Chittagong Port',
        pa: 'ਨਿੱਪਨ ਮਾਰੂ; ਚਟਗਾਂਵ ਬੰਦਰਗਾਹ',
        hi: 'निप्पॉन मारू; चटगांव बंदरगाह',
      },
    },
    correct: 'B',
    explanation: {
      en: 'Baba Gurdit Singh of Sarhali (Amritsar) chartered the Japanese steamship Komagata Maru (renamed Guru Nanak Jahaz) from Hong Kong to Vancouver in 1914 with 376 passengers. Turned back from Vancouver, the ship reached Budge Budge Ghat near Calcutta on 29 September 1914, where British police firing killed 19 passengers.',
      pa: 'ਬਾਬਾ ਗੁਰਦਿੱਤ ਸਿੰਘ ਸਰਹਾਲੀ ਨੇ 1914 ਵਿੱਚ 376 ਯਾਤਰੀਆਂ ਨਾਲ ਜਾਪਾਨੀ ਜਹਾਜ਼ "ਕਾਮਾਗਾਟਾਮਾਰੂ" (ਗੁਰੂ ਨਾਨਕ ਜਹਾਜ਼) ਹਾਂਗਕਾਂਗ ਤੋਂ ਵੈਨਕੂਵਰ ਲਿਜਾਇਆ ਸੀ। ਵੈਨਕੂਵਰ ਤੋਂ ਵਾਪਸ ਮੋੜੇ ਜਾਣ ਮਗਰੋਂ 29 ਸਤੰਬਰ 1914 ਨੂੰ ਕਲਕੱਤੇ ਨੇੜੇ ਬਜ-ਬਜ ਘਾਟ ਤੇ ਅੰਗਰੇਜ਼ ਪੁਲਿਸ ਦੀ ਗੋਲੀਬਾਰੀ ਵਿੱਚ 19 ਯਾਤਰੀ ਸ਼ਹੀਦ ਹੋਏ।',
      hi: 'बाबा गुरदित्त सिंह सरहाली ने 1914 में 376 यात्रियों के साथ जापानी जहाज "कामागाटामारू" (गुरु नानक जहाज) हांगकांग से वैंकूवर ले जाया था। वैंकूवर से लौटाए जाने के बाद 29 सितंबर 1914 को कलकत्ता के पास बज-बज घाट पर ब्रिटिश पुलिस की गोलीबारी में 19 यात्री शहीद हुए।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-his-11',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'The Jallianwala Bagh Massacre on Baisakhi Day (13 April 1919) took place during a peaceful public gathering protesting against the Rowlatt Act and the arrest of which two prominent Punjab Congress leaders?',
      pa: 'ਵਿਸਾਖੀ ਵਾਲੇ ਦਿਨ (13 ਅਪ੍ਰੈਲ 1919) ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ ਦਾ ਸਾਕਾ ਰੌਲਟ ਐਕਟ ਅਤੇ ਪੰਜਾਬ ਦੇ ਕਿਹੜੇ ਦੋ ਪ੍ਰਮੁੱਖ ਨੇਤਾਵਾਂ ਦੀ ਗ੍ਰਿਫ਼ਤਾਰੀ ਦੇ ਵਿਰੋਧ ਵਿੱਚ ਹੋ ਰਹੀ ਸ਼ਾਂਤਮਈ ਸਭਾ ਦੌਰਾਨ ਵਾਪਰਿਆ ਸੀ?',
      hi: 'बैसाखी के दिन (13 अप्रैल 1919) जलियांवाला बाग हत्याकांड रौलेट एक्ट और पंजाब के किन दो प्रमुख नेताओं की गिरफ्तारी के विरोध में आयोजित शांतिपूर्ण सभा के दौरान हुआ था?',
    },
    options: {
      A: {
        en: 'Lala Lajpat Rai and Sardar Ajit Singh',
        pa: 'ਲਾਲਾ ਲਾਜਪਤ ਰਾਏ ਅਤੇ ਸਰਦਾਰ ਅਜੀਤ ਸਿੰਘ',
        hi: 'लाला लाजपत राय और सरदार अजीत सिंह',
      },
      B: {
        en: 'Master Tara Singh and Baba Kharak Singh',
        pa: 'ਮਾਸਟਰ ਤਾਰਾ ਸਿੰਘ ਅਤੇ ਬਾਬਾ ਖੜਕ ਸਿੰਘ',
        hi: 'मास्टर तारा सिंह और बाबा खड़क सिंह',
      },
      C: {
        en: 'Dr. Saifuddin Kitchlew and Dr. Satyapal',
        pa: 'ਡਾ. ਸੈਫ਼ੂਦੀਨ ਕਿਚਲੂ ਅਤੇ ਡਾ. ਸੱਤਿਆਪਾਲ',
        hi: 'डॉ. सैफुद्दीन किचलू और डॉ. सत्यपाल',
      },
      D: {
        en: 'Chaudhary Chhotu Ram and Fazl-i-Husain',
        pa: 'ਚੌਧਰੀ ਛੋਟੂ ਰਾਮ ਅਤੇ ਫ਼ਜ਼ਲ-ਏ-ਹੁਸੈਨ',
        hi: 'चौधरी छोटू राम और फजल-ए-हुसैन',
      },
    },
    correct: 'C',
    explanation: {
      en: 'On 10 April 1919, the British administration in Amritsar arrested Dr. Saifuddin Kitchlew and Dr. Satyapal for leading protests against the Rowlatt Act (Anarchical and Revolutionary Crimes Act, 1919). On 13 April 1919, Brigadier-General Reginald Dyer ordered firing on the peaceful crowd at Jallianwala Bagh while Sir Michael O’Dwyer was Lieutenant Governor of Punjab.',
      pa: '10 ਅਪ੍ਰੈਲ 1919 ਨੂੰ ਅੰਮ੍ਰਿਤਸਰ ਵਿੱਚ ਰੌਲਟ ਐਕਟ ਵਿਰੁੱਧ ਅੰਦੋਲਨ ਦੀ ਅਗਵਾਈ ਕਰਨ ਵਾਲੇ ਡਾ. ਸੈਫ਼ੂਦੀਨ ਕਿਚਲੂ ਅਤੇ ਡਾ. ਸੱਤਿਆਪਾਲ ਨੂੰ ਗ੍ਰਿਫ਼ਤਾਰ ਕੀਤਾ ਗਿਆ ਸੀ। ਉਹਨਾਂ ਦੀ ਗ੍ਰਿਫ਼ਤਾਰੀ ਦੇ ਵਿਰੋਧ ਵਿੱਚ 13 ਅਪ੍ਰੈਲ 1919 ਨੂੰ ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ ਵਿੱਚ ਜੁੜੀ ਭੀੜ ਤੇ ਜਨਰਲ ਰੇਜੀਨਾਲਡ ਡਾਇਰ ਨੇ ਗੋਲੀਆਂ ਚਲਵਾਈਆਂ।',
      hi: '10 अप्रैल 1919 को अमृतसर में रौलेट एक्ट के विरुद्ध आंदोलन का नेतृत्व करने वाले डॉ. सैफुद्दीन किचलू और डॉ. सत्यपाल को गिरफ्तार किया गया था। उनकी गिरफ्तारी के विरोध में 13 अप्रैल 1919 को जलियांवाला बाग में एकत्रित भीड़ पर जनरल रेजिनाल्ड डायर ने गोलियां चलवाईं।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-his-12',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'On 13 March 1940, at Caxton Hall in London, Shaheed Udham Singh ("Ram Mohammad Singh Azad") assassinated which former British official to avenge the Jallianwala Bagh Massacre of 1919?',
      pa: '13 ਮਾਰਚ 1940 ਨੂੰ ਲੰਡਨ ਦੇ ਕੈਕਸਟਨ ਹਾਲ ਵਿਖੇ ਸ਼ਹੀਦ ਊਧਮ ਸਿੰਘ ("ਰਾਮ ਮੁਹੰਮਦ ਸਿੰਘ ਆਜ਼ਾਦ") ਨੇ 1919 ਦੇ ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ ਸਾਕੇ ਦਾ ਬਦਲਾ ਲੈਣ ਲਈ ਕਿਸ ਸਾਬਕਾ ਅੰਗਰੇਜ਼ ਅਧਿਕਾਰੀ ਨੂੰ ਗੋਲੀ ਮਾਰੀ ਸੀ?',
      hi: '13 मार्च 1940 को लंदन के कैक्सटन हॉल में शहीद उधम सिंह ("राम मोहम्मद सिंह आजाद") ने 1919 के जलियांवाला बाग हत्याकांड का बदला लेने के लिए किस पूर्व ब्रिटिश अधिकारी की हत्या की थी?',
    },
    options: {
      A: {
        en: 'Brigadier-General Reginald Dyer',
        pa: 'ਬ੍ਰਿਗੇਡੀਅਰ-ਜਨਰਲ ਰੇਜੀਨਾਲਡ ਡਾਇਰ',
        hi: 'ब्रिगेडियर-जनरल रेजिनाल्ड डायर',
      },
      B: {
        en: 'Lord Chelmsford',
        pa: 'ਲਾਰਡ ਚੈਮਸਫੋਰਡ',
        hi: 'लॉर्ड चेम्सफोर्ड',
      },
      C: {
        en: 'John Saunders',
        pa: 'ਜੌਨ ਸਾਂਡਰਸ',
        hi: 'जॉन सॉन्डर्स',
      },
      D: {
        en: 'Sir Michael O’Dwyer (former Lieutenant Governor of Punjab)',
        pa: 'ਸਰ ਮਾਈਕਲ ਓਡਵਾਇਰ (ਪੰਜਾਬ ਦਾ ਸਾਬਕਾ ਲੈਫਟੀਨੈਂਟ ਗਵਰਨਰ)',
        hi: 'सर माइकल ओ’ड्वायर (पंजाब के पूर्व लेफ्टिनेंट गवर्नर)',
      },
    },
    correct: 'D',
    explanation: {
      en: 'Brigadier-General Reginald Dyer (who ordered the firing at the Bagh) had died of natural causes in 1927. On 13 March 1940 at Caxton Hall, London, Shaheed Udham Singh shot dead Sir Michael O’Dwyer, who was the Lieutenant Governor of Punjab in 1919 and had endorsed the massacre. Udham Singh was martyred at Pentonville Prison on 31 July 1940.',
      pa: 'ਬ੍ਰਿਗੇਡੀਅਰ-ਜਨਰਲ ਰੇਜੀਨਾਲਡ ਡਾਇਰ ਦੀ ਮੌਤ 1927 ਵਿੱਚ ਬਿਮਾਰੀ ਕਾਰਨ ਹੋ ਚੁੱਕੀ ਸੀ। ਸ਼ਹੀਦ ਊਧਮ ਸਿੰਘ ਨੇ 13 ਮਾਰਚ 1940 ਨੂੰ ਲੰਡਨ ਦੇ ਕੈਕਸਟਨ ਹਾਲ ਵਿੱਚ ਪੰਜਾਬ ਦੇ ਸਾਬਕਾ ਲੈਫਟੀਨੈਂਟ ਗਵਰਨਰ ਸਰ ਮਾਈਕਲ ਓਡਵਾਇਰ ਨੂੰ ਗੋਲੀ ਮਾਰ ਕੇ ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ ਸਾਕੇ ਦਾ ਬਦਲਾ ਲਿਆ ਅਤੇ 31 ਜੁਲਾਈ 1940 ਨੂੰ ਪੈਂਟਨਵਿਲੇ ਜੇਲ੍ਹ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪ੍ਰਾਪਤ ਕੀਤੀ।',
      hi: 'ब्रिगेडियर-जनरल रेजिनाल्ड डायर की मृत्यु 1927 में ही हो चुकी थी। शहीद उधम सिंह ने 13 मार्च 1940 को लंदन के कैक्सटन हॉल में पंजाब के पूर्व लेफ्टिनेंट गवर्नर सर माइकल ओ’ड्वायर को गोली मारकर जलियांवाला बाग कांड का बदला लिया और 31 जुलाई 1940 को पेंटनविले जेल में शहीद हुए।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-his-13',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Following which violent incident in Gorakhpur district of the United Provinces on 4/5 February 1922 did Mahatma Gandhi call off the Non-Cooperation Movement through the Bardoli Resolution on 12 February 1922?',
      pa: 'ਸੰਯੁਕਤ ਪ੍ਰਾਂਤ ਦੇ ਗੋਰਖਪੁਰ ਜ਼ਿਲ੍ਹੇ ਵਿੱਚ 4/5 ਫਰਵਰੀ 1922 ਨੂੰ ਵਾਪਰੀ ਕਿਸ ਹਿੰਸਕ ਘਟਨਾ ਤੋਂ ਬਾਅਦ ਮਹਾਤਮਾ ਗਾਂਧੀ ਨੇ 12 ਫਰਵਰੀ 1922 ਨੂੰ ਬਾਰਦੋਲੀ ਮਤੇ ਰਾਹੀਂ ਨਾ-ਮਿਲਵਰਤਣ ਅੰਦੋਲਨ ਵਾਪਸ ਲੈ ਲਿਆ ਸੀ?',
      hi: 'संयुक्त प्रांत के गोरखपुर जिले में 4/5 फरवरी 1922 को हुई किस हिंसक घटना के बाद महात्मा गांधी ने 12 फरवरी 1922 को बारदोली प्रस्ताव के माध्यम से असहयोग आंदोलन वापस ले लिया था?',
    },
    options: {
      A: {
        en: 'Chauri Chaura Incident',
        pa: 'ਚੌਰੀ ਚੌਰਾ ਦੀ ਘਟਨਾ',
        hi: 'चौरी चौरा कांड',
      },
      B: {
        en: 'Kakori Train Action',
        pa: 'ਕਾਕੋਰੀ ਟ੍ਰੇਨ ਐਕਸ਼ਨ',
        hi: 'काकोरी ट्रेन एक्शन',
      },
      C: {
        en: 'Moplah Rebellion in Malabar',
        pa: 'ਮਾਲਾਬਾਰ ਦਾ ਮੋਪਲਾ ਵਿਦਰੋਹ',
        hi: 'मालाबार का मोपला विद्रोह',
      },
      D: {
        en: 'Chittagong Armoury Raid',
        pa: 'ਚਟਗਾਂਵ ਅਸਲਾਖਾਨਾ ਛਾਪਾ',
        hi: 'चटगांव शस्त्रागार छापा',
      },
    },
    correct: 'A',
    explanation: {
      en: 'The Non-Cooperation Movement (launched on 1 August 1920) was abruptly suspended by Mahatma Gandhi on 12 February 1922 at Bardoli after an angry crowd set fire to a police station at Chauri Chaura in Gorakhpur district (UP) on 4/5 February 1922, resulting in the deaths of 22 policemen.',
      pa: '4/5 ਫਰਵਰੀ 1922 ਨੂੰ ਉੱਤਰ ਪ੍ਰਦੇਸ਼ ਦੇ ਗੋਰਖਪੁਰ ਜ਼ਿਲ੍ਹੇ ਦੇ ਚੌਰੀ ਚੌਰਾ ਵਿਖੇ ਭੀੜ ਵੱਲੋਂ ਪੁਲਿਸ ਥਾਣੇ ਨੂੰ ਅੱਗ ਲਗਾਉਣ (ਜਿਸ ਵਿੱਚ 22 ਪੁਲਿਸ ਕਰਮਚਾਰੀ ਮਾਰੇ ਗਏ) ਦੀ ਘਟਨਾ ਕਾਰਨ ਮਹਾਤਮਾ ਗਾਂਧੀ ਨੇ 12 ਫਰਵਰੀ 1922 ਨੂੰ ਨਾ-ਮਿਲਵਰਤਣ ਅੰਦੋਲਨ ਵਾਪਸ ਲੈ ਲਿਆ।',
      hi: '4/5 फरवरी 1922 को उत्तर प्रदेश के गोरखपुर जिले के चौरी चौरा में भीड़ द्वारा पुलिस थाने में आग लगाने (जिसमें 22 पुलिसकर्मी मारे गए) की घटना के कारण महात्मा गांधी ने 12 फरवरी 1922 को असहयोग आंदोलन स्थगित कर दिया।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-his-14',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which youth organization was founded by Shaheed Bhagat Singh (along with Bhagwati Charan Vohra, Sukhdev, and Ram Kishan) at Lahore in March 1926, before the Hindustan Republican Association was reorganized as HSRA at Feroz Shah Kotla (Delhi) in September 1928?',
      pa: 'ਸਤੰਬਰ 1928 ਵਿੱਚ ਫ਼ਿਰੋਜ਼ਸ਼ਾਹ ਕੋਟਲਾ (ਦਿੱਲੀ) ਵਿਖੇ ਐੱਚ.ਐੱਸ.ਆਰ.ਏ. (HSRA) ਦੇ ਪੁਨਰਗਠਨ ਤੋਂ ਪਹਿਲਾਂ, ਮਾਰਚ 1926 ਵਿੱਚ ਲਾਹੌਰ ਵਿਖੇ ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ (ਭਗਵਤੀ ਚਰਨ ਵੋਹਰਾ ਅਤੇ ਸੁਖਦੇਵ ਸਮੇਤ) ਨੇ ਕਿਸ ਨੌਜਵਾਨ ਜਥੇਬੰਦੀ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ ਸੀ?',
      hi: 'सितंबर 1928 में फिरोजशाह कोटला (दिल्ली) में एचएसआरए (HSRA) के पुनर्गठन से पहले, मार्च 1926 में लाहौर में शहीद भगत सिंह (भगवती चरण वोहरा और सुखदेव सहित) ने किस युवा संगठन की स्थापना की थी?',
    },
    options: {
      A: {
        en: 'Abhinav Bharat Society',
        pa: 'ਅਭਿਨਵ ਭਾਰਤ ਸੁਸਾਇਟੀ',
        hi: 'अभिनव भारत सोसायटी',
      },
      B: {
        en: 'Naujawan Bharat Sabha',
        pa: 'ਨੌਜਵਾਨ ਭਾਰਤ ਸਭਾ',
        hi: 'नौजवान भारत सभा',
      },
      C: {
        en: 'Anushilan Samiti',
        pa: 'ਅਨੁਸ਼ੀਲਨ ਸੰਮਤੀ',
        hi: 'अनुशीलन समिति',
      },
      D: {
        en: 'Kirti Kisan Party',
        pa: 'ਕਿਰਤੀ ਕਿਸਾਨ ਪਾਰਟੀ',
        hi: 'कीर्ति किसान पार्टी',
      },
    },
    correct: 'B',
    explanation: {
      en: 'Shaheed Bhagat Singh founded the Naujawan Bharat Sabha in March 1926 at Lahore (with Ram Kishan as President and Bhagat Singh as General Secretary). In September 1928, at Feroz Shah Kotla in Delhi, Chandrashekhar Azad, Bhagat Singh, Sukhdev, and Bhagwati Charan Vohra reorganized the HRA into the Hindustan Socialist Republican Association (HSRA).',
      pa: 'ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ ਨੇ ਮਾਰਚ 1926 ਵਿੱਚ ਲਾਹੌਰ ਵਿਖੇ "ਨੌਜਵਾਨ ਭਾਰਤ ਸਭਾ" ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ (ਰਾਮ ਕਿਸ਼ਨ ਪ੍ਰਧਾਨ ਅਤੇ ਭਗਤ ਸਿੰਘ ਜਨਰਲ ਸਕੱਤਰ ਸਨ)। ਸਤੰਬਰ 1928 ਵਿੱਚ ਦਿੱਲੀ ਦੇ ਫ਼ਿਰੋਜ਼ਸ਼ਾਹ ਕੋਟਲਾ ਵਿਖੇ ਚੰਦਰਸ਼ੇਖਰ ਆਜ਼ਾਦ, ਭਗਤ ਸਿੰਘ ਅਤੇ ਸੁਖਦੇਵ ਨੇ ਹਿੰਦੁਸਤਾਨ ਸੋਸ਼ਲਿਸਟ ਰਿਪਬਲਿਕਨ ਐਸੋਸੀਏਸ਼ਨ (HSRA) ਦਾ ਗਠਨ ਕੀਤਾ।',
      hi: 'शहीद भगत सिंह ने मार्च 1926 में लाहौर में "नौजवान भारत सभा" की स्थापना की (राम किशन अध्यक्ष और भगत सिंह महासचिव थे)। सितंबर 1928 में दिल्ली के फिरोजशाह कोटला में चंद्रशेखर आजाद, भगत सिंह और सुखदेव ने हिंदुस्तान सोशलिस्ट रिपब्लिकन एसोसिएशन (HSRA) का गठन किया।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-his-15',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Arrange the following historical events connected with Lala Lajpat Rai, Shaheed Bhagat Singh, Sukhdev, and Rajguru in exact chronological order:',
      pa: 'ਲਾਲਾ ਲਾਜਪਤ ਰਾਏ, ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ, ਸੁਖਦੇਵ ਅਤੇ ਰਾਜਗੁਰੂ ਨਾਲ ਸਬੰਧਤ ਹੇਠ ਲਿਖੀਆਂ ਇਤਿਹਾਸਕ ਘਟਨਾਵਾਂ ਨੂੰ ਸਹੀ ਕਾਲਕ੍ਰਮ ਅਨੁਸਾਰ ਲਗਾਓ:',
      hi: 'लाला लाजपत राय, शहीद भगत सिंह, सुखदेव और राजगुरु से संबंधित निम्नलिखित ऐतिहासिक घटनाओं को सही कालक्रमानुसार व्यवस्थित करें:',
    },
    options: {
      A: {
        en: 'Central Legislative Assembly Bombing (1928) -> Anti-Simon Protest at Lahore (1929) -> Assassination of Saunders (1930) -> Martyrdom (1931)',
        pa: 'ਕੇਂਦਰੀ ਅਸੈਂਬਲੀ ਬੰਬ ਕਾਂਡ (1928) -> ਲਾਹੌਰ ਵਿੱਚ ਸਾਈਮਨ ਕਮਿਸ਼ਨ ਵਿਰੋਧ (1929) -> ਸਾਂਡਰਸ ਦਾ ਕਤਲ (1930) -> ਸ਼ਹੀਦੀ (1931)',
        hi: 'केंद्रीय असेंबली बम कांड (1928) -> लाहौर में साइमन कमीशन विरोध (1929) -> सॉन्डर्स वध (1930) -> शहादत (1931)',
      },
      B: {
        en: 'Assassination of Saunders (Oct 1928) -> Anti-Simon Protest at Lahore (Dec 1928) -> Martyrdom (1930) -> Central Assembly Bombing (1931)',
        pa: 'ਸਾਂਡਰਸ ਦਾ ਕਤਲ (ਅਕਤੂਬਰ 1928) -> ਲਾਹੌਰ ਵਿੱਚ ਸਾਈਮਨ ਵਿਰੋਧ (ਦਸੰਬਰ 1928) -> ਸ਼ਹੀਦੀ (1930) -> ਕੇਂਦਰੀ ਅਸੈਂਬਲੀ ਬੰਬ ਕਾਂਡ (1931)',
        hi: 'सॉन्डर्स वध (अक्टूबर 1928) -> लाहौर में साइमन विरोध (दिसंबर 1928) -> शहादत (1930) -> केंद्रीय असेंबली बम कांड (1931)',
      },
      C: {
        en: 'Anti-Simon Commission protest at Lahore & Lala Lajpat Rai’s martyrdom (Oct–Nov 1928) -> Assassination of J.P. Saunders at Lahore (17 Dec 1928) -> Central Legislative Assembly Bombing by Bhagat Singh & B.K. Dutt (8 April 1929) -> Martyrdom at Lahore Central Jail (23 March 1931)',
        pa: 'ਲਾਹੌਰ ਵਿੱਚ ਸਾਈਮਨ ਕਮਿਸ਼ਨ ਵਿਰੁੱਧ ਪ੍ਰਦਰਸ਼ਨ ਅਤੇ ਲਾਲਾ ਲਾਜਪਤ ਰਾਏ ਦੀ ਸ਼ਹੀਦੀ (ਅਕਤੂਬਰ-ਨਵੰਬਰ 1928) -> ਜੇ.ਪੀ. ਸਾਂਡਰਸ ਦਾ ਕਤਲ (17 ਦਸੰਬਰ 1928) -> ਭਗਤ ਸਿੰਘ ਅਤੇ ਬੀ.ਕੇ. ਦੱਤ ਵੱਲੋਂ ਕੇਂਦਰੀ ਅਸੈਂਬਲੀ ਵਿੱਚ ਬੰਬ ਸੁੱਟਣਾ (8 ਅਪ੍ਰੈਲ 1929) -> ਲਾਹੌਰ ਸੈਂਟਰਲ ਜੇਲ੍ਹ ਵਿੱਚ ਸ਼ਹੀਦੀ (23 ਮਾਰਚ 1931)',
        hi: 'लाहौर में साइमन कमीशन विरोध और लाला लाजपत राय की शहादत (अक्टूबर-नवंबर 1928) -> जे.पी. सॉन्डर्स वध (17 दिसंबर 1928) -> भगत सिंह और बी.के. दत्त द्वारा केंद्रीय असेंबली में बम फेंकना (8 अप्रैल 1929) -> लाहौर सेंट्रल जेल में शहादत (23 मार्च 1931)',
      },
      D: {
        en: 'Central Assembly Bombing (April 1928) -> Anti-Simon Protest (Oct 1928) -> Saunders Assassination (Dec 1928) -> Martyrdom (23 March 1931)',
        pa: 'ਕੇਂਦਰੀ ਅਸੈਂਬਲੀ ਬੰਬ ਕਾਂਡ (ਅਪ੍ਰੈਲ 1928) -> ਸਾਈਮਨ ਵਿਰੋਧ (ਅਕਤੂਬਰ 1928) -> ਸਾਂਡਰਸ ਦਾ ਕਤਲ (ਦਸੰਬਰ 1928) -> ਸ਼ਹੀਦੀ (23 ਮਾਰਚ 1931)',
        hi: 'केंद्रीय असेंबली बम कांड (अप्रैल 1928) -> साइमन विरोध (अक्टूबर 1928) -> सॉन्डर्स वध (दिसंबर 1928) -> शहादत (23 मार्च 1931)',
      },
    },
    correct: 'C',
    explanation: {
      en: 'On 30 October 1928, Lala Lajpat Rai was brutally lathi-charged on the orders of James A. Scott during the anti-Simon Commission protest at Lahore and passed away on 17 November 1928. To avenge his death, Bhagat Singh, Rajguru, and Chandrashekhar Azad shot Assistant Superintendent J.P. Saunders on 17 December 1928. On 8 April 1929, Bhagat Singh and Batukeshwar Dutt threw non-lethal smoke bombs in the Central Legislative Assembly against the Public Safety Bill and Trade Disputes Bill. Finally, Bhagat Singh, Sukhdev, and Rajguru were executed on 23 March 1931 in the Second Lahore Conspiracy Case.',
      pa: '30 ਅਕਤੂਬਰ 1928 ਨੂੰ ਲਾਹੌਰ ਵਿੱਚ ਸਾਈਮਨ ਕਮਿਸ਼ਨ ਵਿਰੋਧੀ ਪ੍ਰਦਰਸ਼ਨ ਦੌਰਾਨ ਲਾਠੀਚਾਰਜ ਨਾਲ ਜ਼ਖ਼ਮੀ ਹੋਏ ਲਾਲਾ ਲਾਜਪਤ ਰਾਏ 17 ਨਵੰਬਰ 1928 ਨੂੰ ਸ਼ਹੀਦ ਹੋਏ। ਇਸ ਦਾ ਬਦਲਾ ਲੈਣ ਲਈ 17 ਦਸੰਬਰ 1928 ਨੂੰ ਜੇ.ਪੀ. ਸਾਂਡਰਸ ਨੂੰ ਮਾਰਿਆ ਗਿਆ। 8 ਅਪ੍ਰੈਲ 1929 ਨੂੰ ਭਗਤ ਸਿੰਘ ਅਤੇ ਬਟੁਕੇਸ਼ਵਰ ਦੱਤ ਨੇ ਕੇਂਦਰੀ ਅਸੈਂਬਲੀ ਵਿੱਚ ਬੰਬ ਸੁੱਟਿਆ ਅਤੇ 23 ਮਾਰਚ 1931 ਨੂੰ ਭਗਤ ਸਿੰਘ, ਸੁਖਦੇਵ ਤੇ ਰਾਜਗੁਰੂ ਨੂੰ ਫਾਂਸੀ ਦਿੱਤੀ ਗਈ।',
      hi: '30 अक्टूबर 1928 को लाहौर में साइमन कमीशन के विरोध में लाठीचार्ज से घायल लाला लाजपत राय 17 नवंबर 1928 को शहीद हुए। इसके प्रतिशोध में 17 दिसंबर 1928 को जे.पी. सॉन्डर्स का वध किया गया। 8 अप्रैल 1929 को भगत सिंह और बटुकेश्वर दत्त ने केंद्रीय असेंबली में बम फेंका और 23 मार्च 1931 को भगत सिंह, सुखदेव व राजगुरु को फांसी दी गई।',
    },
    difficulty: 'hard',
  },
  {
    id: 'q-ppsc-clk-his-16',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'On 12 March 1930, Mahatma Gandhi began the historic Dandi Salt March with 78 followers from Sabarmati Ashram to Dandi (240 miles), breaking the salt law on 6 April 1930. Which pact signed on 5 March 1931 paved the way for the Congress to attend the Second Round Table Conference?',
      pa: '12 ਮਾਰਚ 1930 ਨੂੰ ਮਹਾਤਮਾ ਗਾਂਧੀ ਨੇ 78 ਸਾਥੀਆਂ ਨਾਲ ਸਾਬਰਮਤੀ ਆਸ਼ਰਮ ਤੋਂ ਡਾਂਡੀ (240 ਮੀਲ) ਤੱਕ ਨਮਕ ਮਾਰਚ ਸ਼ੁਰੂ ਕਰਕੇ 6 ਅਪ੍ਰੈਲ 1930 ਨੂੰ ਨਮਕ ਕਾਨੂੰਨ ਤੋੜਿਆ। 5 ਮਾਰਚ 1931 ਨੂੰ ਹੋਏ ਕਿਸ ਸਮਝੌਤੇ ਨੇ ਕਾਂਗਰਸ ਦੇ ਦੂਜੀ ਗੋਲਮੇਜ਼ ਕਾਨਫਰੰਸ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਣ ਦਾ ਰਾਹ ਪੱਧਰਾ ਕੀਤਾ?',
      hi: '12 मार्च 1930 को महात्मा गांधी ने 78 अनुयायियों के साथ साबरमती आश्रम से दांडी (240 मील) तक दांडी मार्च शुरू कर 6 अप्रैल 1930 को नमक कानून तोड़ा। 5 मार्च 1931 को हस्ताक्षरित किस समझौते ने कांग्रेस के दूसरे गोलमेज सम्मेलन में भाग लेने का मार्ग प्रशस्त किया?',
    },
    options: {
      A: {
        en: 'Lucknow Pact',
        pa: 'ਲਖਨਊ ਸਮਝੌਤਾ',
        hi: 'लखनऊ समझौता',
      },
      B: {
        en: 'Poona Pact',
        pa: 'ਪੂਨਾ ਸਮਝੌਤਾ',
        hi: 'पूना पैक्ट',
      },
      C: {
        en: 'Simla Agreement',
        pa: 'ਸ਼ਿਮਲਾ ਸਮਝੌਤਾ',
        hi: 'शिमला समझौता',
      },
      D: {
        en: 'Gandhi-Irwin Pact (Delhi Pact)',
        pa: 'ਗਾਂਧੀ-ਇਰਵਿਨ ਸਮਝੌਤਾ (ਦਿੱਲੀ ਪੈਕਟ)',
        hi: 'गांधी-इरविन समझौता (दिल्ली पैक्ट)',
      },
    },
    correct: 'D',
    explanation: {
      en: 'Following the Dandi March (12 March – 6 April 1930) that launched the Civil Disobedience Movement, the Gandhi-Irwin Pact (also called the Delhi Pact) was signed on 5 March 1931 between Mahatma Gandhi and Viceroy Lord Irwin. Under it, the Congress suspended the Civil Disobedience Movement and Mahatma Gandhi attended the Second Round Table Conference in London (Sept–Dec 1931) as the sole Congress representative.',
      pa: 'ਡਾਂਡੀ ਮਾਰਚ (12 ਮਾਰਚ – 6 ਅਪ੍ਰੈਲ 1930) ਨਾਲ ਸ਼ੁਰੂ ਹੋਏ ਸਿਵਲ ਨਾ-ਫੁਰਮਾਨੀ ਅੰਦੋਲਨ ਤੋਂ ਬਾਅਦ 5 ਮਾਰਚ 1931 ਨੂੰ ਮਹਾਤਮਾ ਗਾਂਧੀ ਅਤੇ ਵਾਇਸਰਾਏ ਲਾਰਡ ਇਰਵਿਨ ਵਿਚਕਾਰ "ਗਾਂਧੀ-ਇਰਵਿਨ ਸਮਝੌਤਾ" (ਦਿੱਲੀ ਪੈਕਟ) ਹੋਇਆ, ਜਿਸ ਤਹਿਤ ਗਾਂਧੀ ਜੀ ਨੇ ਦੂਜੀ ਗੋਲਮੇਜ਼ ਕਾਨਫਰੰਸ (1931) ਵਿੱਚ ਕਾਂਗਰਸ ਦੇ ਇਕਲੌਤੇ ਪ੍ਰਤੀਨਿਧੀ ਵਜੋਂ ਹਿੱਸਾ ਲਿਆ।',
      hi: 'दांडी मार्च (12 मार्च – 6 अप्रैल 1930) से प्रारंभ सविनय अवज्ञा आंदोलन के बाद 5 मार्च 1931 को महात्मा गांधी और वायसराय लॉर्ड इरविन के बीच "गांधी-इरविन समझौता" (दिल्ली पैक्ट) हुआ, जिसके तहत गांधीजी ने दूसरे गोलमेज सम्मेलन (1931) में कांग्रेस के एकमात्र प्रतिनिधि के रूप में भाग लिया।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-his-17',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'The Poona Pact of 24 September 1932 was signed at Yerwada Central Jail between Mahatma Gandhi and Dr. B.R. Ambedkar in response to which announcement by British Prime Minister Ramsay MacDonald?',
      pa: '24 ਸਤੰਬਰ 1932 ਦਾ "ਪੂਨਾ ਸਮਝੌਤਾ" ਯਰਵਦਾ ਸੈਂਟਰਲ ਜੇਲ੍ਹ ਵਿਖੇ ਮਹਾਤਮਾ ਗਾਂਧੀ ਅਤੇ ਡਾ. ਬੀ.ਆਰ. ਅੰਬੇਡਕਰ ਵਿਚਕਾਰ ਬ੍ਰਿਟਿਸ਼ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਰੈਮਜ਼ੇ ਮੈਕਡੋਨਲਡ ਦੇ ਕਿਸ ਐਲਾਨ ਦੇ ਜਵਾਬ ਵਿੱਚ ਹੋਇਆ ਸੀ?',
      hi: '24 सितंबर 1932 का "पूना समझौता" (Poona Pact) यरवदा सेंट्रल जेल में महात्मा गांधी और डॉ. बी.आर. अंबेडकर के बीच ब्रिटिश प्रधानमंत्री रैम्से मैकडोनाल्ड की किस घोषणा के प्रत्युत्तर में हुआ था?',
    },
    options: {
      A: {
        en: 'The Communal Award (16 August 1932), which had proposed separate electorates for the Depressed Classes',
        pa: 'ਕਮਿਊਨਲ ਅਵਾਰਡ / ਫਿਰਕੂ ਪੰਚਾਇਤ (16 ਅਗਸਤ 1932), ਜਿਸ ਨੇ ਦੱਬੇ-ਕੁਚਲੇ ਵਰਗਾਂ (Depressed Classes) ਲਈ ਵੱਖਰੇ ਚੋਣ ਮੰਡਲ ਦੀ ਤਜਵੀਜ਼ ਰੱਖੀ ਸੀ',
        hi: 'सांप्रदायिक पंचाट / कम्युनल अवार्ड (16 अगस्त 1932), जिसने दलित वर्गों (Depressed Classes) के लिए पृथक निर्वाचक मंडल का प्रस्ताव रखा था',
      },
      B: {
        en: 'The August Offer of 1940',
        pa: '1940 ਦੀ ਅਗਸਤ ਪੇਸ਼ਕਸ਼',
        hi: '1940 का अगस्त प्रस्ताव',
      },
      C: {
        en: 'The Cripps Mission Proposals of 1942',
        pa: '1942 ਦੀਆਂ ਕ੍ਰਿਪਸ ਮਿਸ਼ਨ ਤਜਵੀਜ਼ਾਂ',
        hi: '1942 के क्रिप्स मिशन प्रस्ताव',
      },
      D: {
        en: 'The Wavell Plan of 1945',
        pa: '1945 ਦੀ ਵੇਵਲ ਯੋਜਨਾ',
        hi: '1945 की वेवेल योजना',
      },
    },
    correct: 'A',
    explanation: {
      en: 'On 16 August 1932, British PM Ramsay MacDonald announced the Communal Award, granting separate electorates to the Depressed Classes (Scheduled Castes). Mahatma Gandhi undertook a fast unto death in Yerwada Jail, leading to the Poona Pact (24 September 1932) between Dr. B.R. Ambedkar and Madan Mohan Malaviya (on behalf of Gandhi/Hindus), which replaced separate electorates with increased reserved seats (from 71 to 147 in provincial legislatures) under joint electorates.',
      pa: '16 ਅਗਸਤ 1932 ਨੂੰ ਬ੍ਰਿਟਿਸ਼ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਰੈਮਜ਼ੇ ਮੈਕਡੋਨਲਡ ਨੇ ਕਮਿਊਨਲ ਅਵਾਰਡ (ਫਿਰਕੂ ਪੰਚਾਇਤ) ਰਾਹੀਂ ਦਲਿਤ ਵਰਗਾਂ ਲਈ ਵੱਖਰੇ ਚੋਣ ਮੰਡਲ ਦਾ ਐਲਾਨ ਕੀਤਾ। ਇਸ ਦੇ ਵਿਰੋਧ ਵਿੱਚ ਮਹਾਤਮਾ ਗਾਂਧੀ ਦੇ ਮਰਨ ਵਰਤ ਮਗਰੋਂ 24 ਸਤੰਬਰ 1932 ਨੂੰ ਯਰਵਦਾ ਜੇਲ੍ਹ ਵਿੱਚ ਡਾ. ਬੀ.ਆਰ. ਅੰਬੇਡਕਰ ਅਤੇ ਗਾਂਧੀ ਜੀ ਵਿਚਕਾਰ ਪੂਨਾ ਸਮਝੌਤਾ ਹੋਇਆ, ਜਿਸ ਤਹਿਤ ਸਾਂਝੇ ਚੋਣ ਮੰਡਲ ਵਿੱਚ ਰਾਖਵੀਆਂ ਸੀਟਾਂ 71 ਤੋਂ ਵਧਾ ਕੇ 147 ਕਰ ਦਿੱਤੀਆਂ ਗਈਆਂ।',
      hi: '16 अगस्त 1932 को ब्रिटिश प्रधानमंत्री रैम्से मैकडोनाल्ड ने सांप्रदायिक पंचाट (Communal Award) द्वारा दलित वर्गों के लिए पृथक निर्वाचक मंडल की घोषणा की। इसके विरोध में महात्मा गांधी के आमरण अनशन के बाद 24 सितंबर 1932 को यरवदा जेल में डॉ. बी.आर. अंबेडकर और गांधीजी के मध्य पूना समझौता हुआ, जिसके तहत संयुक्त निर्वाचक मंडल में आरक्षित सीटें 71 से बढ़ाकर 147 कर दी गईं।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-his-18',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'At which venue in Bombay was the Quit India Resolution ("Bharat Chhodo") passed on 8 August 1942, where Mahatma Gandhi gave the clarion call of "Do or Die" (Karo ya Maro)?',
      pa: '8 ਅਗਸਤ 1942 ਨੂੰ ਬੰਬਈ ਦੇ ਕਿਸ ਮੈਦਾਨ ਵਿੱਚ "ਭਾਰਤ ਛੱਡੋ" (Quit India) ਮਤਾ ਪਾਸ ਕੀਤਾ ਗਿਆ ਸੀ, ਜਿੱਥੇ ਮਹਾਤਮਾ ਗਾਂਧੀ ਨੇ "ਕਰੋ ਜਾਂ ਮਰੋ" ਦਾ ਨਾਅਰਾ ਦਿੱਤਾ ਸੀ?',
      hi: '8 अगस्त 1942 को बॉम्बे के किस मैदान में "भारत छोड़ो" (Quit India) प्रस्ताव पारित किया गया था, जहाँ महात्मा गांधी ने "करो या मरो" का नारा दिया था?',
    },
    options: {
      A: {
        en: 'Azad Maidan, Pune',
        pa: 'ਆਜ਼ਾਦ ਮੈਦਾਨ, ਪੁਣੇ',
        hi: 'आजाद मैदान, पुणे',
      },
      B: {
        en: 'Gowalia Tank Maidan (August Kranti Maidan), Bombay',
        pa: 'ਗੋਵਾਲੀਆ ਟੈਂਕ ਮੈਦਾਨ (ਅਗਸਤ ਕ੍ਰਾਂਤੀ ਮੈਦਾਨ), ਬੰਬਈ',
        hi: 'गोवालिया टैंक मैदान (अगस्त क्रांति मैदान), बॉम्बे',
      },
      C: {
        en: 'Ramlila Maidan, Delhi',
        pa: 'ਰਾਮਲੀਲਾ ਮੈਦਾਨ, ਦਿੱਲੀ',
        hi: 'रामलीला मैदान, दिल्ली',
      },
      D: {
        en: 'Brigade Parade Ground, Calcutta',
        pa: 'ਬ੍ਰਿਗੇਡ ਪਰੇਡ ਗਰਾਊਂਡ, ਕਲਕੱਤਾ',
        hi: 'ब्रिगेड परेड ग्राउंड, कलकत्ता',
      },
    },
    correct: 'B',
    explanation: {
      en: 'Following the failure of the Cripps Mission, the All India Congress Committee (AICC) met at Gowalia Tank Maidan (now August Kranti Maidan) in Bombay on 8 August 1942 and ratified the Quit India Resolution. Mahatma Gandhi gave the mantra "Do or Die", and Aruna Asaf Ali hoisted the Indian Tricolour at the Maidan on 9 August 1942 after top leaders were arrested under Operation Zero Hour.',
      pa: 'ਕ੍ਰਿਪਸ ਮਿਸ਼ਨ ਦੀ ਅਸਫਲਤਾ ਤੋਂ ਬਾਅਦ 8 ਅਗਸਤ 1942 ਨੂੰ ਬੰਬਈ ਦੇ ਗੋਵਾਲੀਆ ਟੈਂਕ ਮੈਦਾਨ (ਅਗਸਤ ਕ੍ਰਾਂਤੀ ਮੈਦਾਨ) ਵਿੱਚ ਭਾਰਤ ਛੱਡੋ ਮਤਾ ਪਾਸ ਕੀਤਾ ਗਿਆ ਅਤੇ ਮਹਾਤਮਾ ਗਾਂਧੀ ਨੇ "ਕਰੋ ਜਾਂ ਮਰੋ" ਦਾ ਨਾਅਰਾ ਦਿੱਤਾ। 9 ਅਗਸਤ 1942 ਨੂੰ ਵੱਡੇ ਨੇਤਾਵਾਂ ਦੀ ਗ੍ਰਿਫ਼ਤਾਰੀ ਤੋਂ ਬਾਅਦ ਅਰੁਣਾ ਆਸਫ਼ ਅਲੀ ਨੇ ਉੱਥੇ ਤਿਰੰਗਾ ਲਹਿਰਾਇਆ।',
      hi: 'क्रिप्स मिशन की विफलता के बाद 8 अगस्त 1942 को बॉम्बे के गोवालिया टैंक मैदान (अगस्त क्रांति मैदान) में भारत छोड़ो प्रस्ताव पारित किया गया और महात्मा गांधी ने "करो या मरो" का नारा दिया। 9 अगस्त 1942 को शीर्ष नेताओं की गिरफ्तारी के बाद अरुणा आसफ अली ने वहां तिरंगा फहराया।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-his-19',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Who first conceived and formed the First Indian National Army (Azad Hind Fauj) in Malaya/Singapore in 1942 before Netaji Subhas Chandra Bose assumed supreme command in 1943 and formed the Provisional Government of Free India (Arzi Hukumat-e-Azad Hind)?',
      pa: '1943 ਵਿੱਚ ਨੇਤਾਜੀ ਸੁਭਾਸ਼ ਚੰਦਰ ਬੋਸ ਵੱਲੋਂ ਆਜ਼ਾਦ ਹਿੰਦ ਫ਼ੌਜ ਦੀ ਸਰਵਉੱਚ ਕਮਾਨ ਸੰਭਾਲਣ ਅਤੇ "ਆਰਜ਼ੀ ਹਕੂਮਤ-ਏ-ਆਜ਼ਾਦ ਹਿੰਦ" ਬਣਾਉਣ ਤੋਂ ਪਹਿਲਾਂ, 1942 ਵਿੱਚ ਮਲਾਇਆ/ਸਿੰਗਾਪੁਰ ਵਿਖੇ ਪਹਿਲੀ ਆਜ਼ਾਦ ਹਿੰਦ ਫ਼ੌਜ (INA) ਦਾ ਗਠਨ ਕਿਸ ਪੰਜਾਬੀ ਫ਼ੌਜੀ ਅਫ਼ਸਰ ਨੇ ਕੀਤਾ ਸੀ?',
      hi: '1943 में नेताजी सुभाष चंद्र बोस द्वारा आजाद हिंद फौज की सर्वोच्च कमान संभालने और "आरजी हुकूमत-ए-आजाद हिंद" के गठन से पहले, 1942 में मलाया/सिंगापुर में प्रथम आजाद हिंद फौज (INA) का गठन किस पंजाबी सैन्य अधिकारी ने किया था?',
    },
    options: {
      A: {
        en: 'Colonel Prem Kumar Sahgal',
        pa: 'ਕਰਨਲ ਪ੍ਰੇਮ ਕੁਮਾਰ ਸਹਿਗਲ',
        hi: 'कर्नल प्रेम कुमार सहगल',
      },
      B: {
        en: 'Major General Shah Nawaz Khan',
        pa: 'ਮੇਜਰ ਜਨਰਲ ਸ਼ਾਹ ਨਵਾਜ਼ ਖਾਨ',
        hi: 'मेजर जनरल शाह नवाज खान',
      },
      C: {
        en: 'Captain (General) Mohan Singh (with Giani Pritam Singh and Rash Behari Bose)',
        pa: 'ਕੈਪਟਨ (ਜਨਰਲ) ਮੋਹਨ ਸਿੰਘ (ਗਿਆਨੀ ਪ੍ਰੀਤਮ ਸਿੰਘ ਅਤੇ ਰਾਸ ਬਿਹਾਰੀ ਬੋਸ ਦੇ ਸਹਿਯੋਗ ਨਾਲ)',
        hi: 'कैप्टन (जनरल) मोहन सिंह (ज्ञानी प्रीतम सिंह और रास बिहारी बोस के सहयोग से)',
      },
      D: {
        en: 'Colonel Gurbaksh Singh Dhillon',
        pa: 'ਕਰਨਲ ਗੁਰਬਖ਼ਸ਼ ਸਿੰਘ ਢਿੱਲੋਂ',
        hi: 'कर्नल गुरबख्श सिंह ढिल्लों',
      },
    },
    correct: 'C',
    explanation: {
      en: 'The First Indian National Army (INA) was formed in 1942 by Captain (later General) Mohan Singh of the 1/14th Punjab Regiment from Indian prisoners of war in Malaya/Singapore with the help of Giani Pritam Singh and Rash Behari Bose. In July–October 1943, Netaji Subhas Chandra Bose took command of the INA in Singapore, raised the Rani of Jhansi Regiment (led by Capt. Lakshmi Swaminathan/Sahgal), and gave the slogans "Jai Hind" and "Chalo Dilli".',
      pa: 'ਪਹਿਲੀ ਆਜ਼ਾਦ ਹਿੰਦ ਫ਼ੌਜ (INA) ਦਾ ਗਠਨ 1942 ਵਿੱਚ ਕੈਪਟਨ (ਜਨਰਲ) ਮੋਹਨ ਸਿੰਘ ਨੇ ਮਲਾਇਆ/ਸਿੰਗਾਪੁਰ ਵਿੱਚ ਭਾਰਤੀ ਜੰਗੀ ਕੈਦੀਆਂ ਨਾਲ ਗਿਆਨੀ ਪ੍ਰੀਤਮ ਸਿੰਘ ਅਤੇ ਰਾਸ ਬਿਹਾਰੀ ਬੋਸ ਦੇ ਸਹਿਯੋਗ ਨਾਲ ਕੀਤਾ ਸੀ। 1943 ਵਿੱਚ ਨੇਤਾਜੀ ਸੁਭਾਸ਼ ਚੰਦਰ ਬੋਸ ਨੇ ਸਿੰਗਾਪੁਰ ਵਿਖੇ ਇਸ ਦੀ ਕਮਾਨ ਸੰਭਾਲੀ ਅਤੇ "ਜੈ ਹਿੰਦ" ਤੇ "ਦਿੱਲੀ ਚਲੋ" ਦਾ ਨਾਅਰਾ ਦਿੱਤਾ।',
      hi: 'प्रथम आजाद हिंद फौज (INA) का गठन 1942 में कैप्टन (जनरल) मोहन सिंह ने मलाया/सिंगापुर में भारतीय युद्धबंदियों को संगठित कर ज्ञानी प्रीतम सिंह और रास बिहारी बोस के सहयोग से किया था। 1943 में नेताजी सुभाष चंद्र बोस ने सिंगापुर में इसकी सर्वोच्च कमान संभाली और "जय हिंद" तथा "दिल्ली चलो" का नारा दिया।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-his-20',
    topicId: 'modern-india',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Who were the three British Cabinet members of the Cabinet Mission that arrived in India in March 1946 to formulate a plan for the transfer of power and the setting up of the Constituent Assembly, before the Mountbatten Plan of 3 June 1947 partitioned British India?',
      pa: '3 ਜੂਨ 1947 ਦੀ ਮਾਊਂਟਬੈਟਨ ਯੋਜਨਾ (ਜਿਸ ਤਹਿਤ ਭਾਰਤ ਦੀ ਵੰਡ ਹੋਈ) ਤੋਂ ਪਹਿਲਾਂ, ਮਾਰਚ 1946 ਵਿੱਚ ਸੱਤਾ ਦੇ ਤਬਾਦਲੇ ਅਤੇ ਸੰਵਿਧਾਨ ਸਭਾ ਦੇ ਗਠਨ ਲਈ ਭਾਰਤ ਆਏ ਕੈਬਨਿਟ ਮਿਸ਼ਨ ਦੇ ਤਿੰਨ ਬ੍ਰਿਟਿਸ਼ ਕੈਬਨਿਟ ਮੈਂਬਰ ਕੌਣ ਸਨ?',
      hi: '3 जून 1947 की माउंटबेटन योजना (जिसके तहत भारत का विभाजन हुआ) से पहले, मार्च 1946 में सत्ता हस्तांतरण और संविधान सभा के गठन हेतु भारत आए कैबिनेट मिशन के तीन ब्रिटिश कैबिनेट सदस्य कौन थे?',
    },
    options: {
      A: {
        en: 'Lord Wavell, Clement Attlee, and Sir Cyril Radcliffe',
        pa: 'ਲਾਰਡ ਵੇਵਲ, ਕਲੀਮੈਂਟ ਐਟਲੀ ਅਤੇ ਸਰ ਸਿਰਿਲ ਰੈੱਡਕਲਿਫ਼',
        hi: 'लॉर्ड वेवेल, क्लीमेंट एटली और सर सिरिल रैडक्लिफ',
      },
      B: {
        en: 'Lord Mountbatten, Sir John Simon, and Lord Linlithgow',
        pa: 'ਲਾਰਡ ਮਾਊਂਟਬੈਟਨ, ਸਰ ਜੌਨ ਸਾਈਮਨ ਅਤੇ ਲਾਰਡ ਲਿਨਲਿਥਗੋ',
        hi: 'लॉर्ड माउंटबेटन, सर जॉन साइमन और लॉर्ड लिनलिथगो',
      },
      C: {
        en: 'Anthony Eden, Ernest Bevin, and Harold Laski',
        pa: 'ਐਂਥਨੀ ਈਡਨ, ਅਰਨੈਸਟ ਬੇਵਿਨ ਅਤੇ ਹੈਰੋਲਡ ਲਾਸਕੀ',
        hi: 'एंथनी ईडन, अर्नेस्ट बेविन और हैरोल्ड लास्की',
      },
      D: {
        en: 'Lord Pethick-Lawrence (Secretary of State for India), Sir Stafford Cripps (President of the Board of Trade), and A.V. Alexander (First Lord of the Admiralty)',
        pa: 'ਲਾਰਡ ਪੈਥਿਕ-ਲਾਰੈਂਸ (ਭਾਰਤ ਸਕੱਤਰ), ਸਰ ਸਟੈਫੋਰਡ ਕ੍ਰਿਪਸ (ਬੋਰਡ ਆਫ਼ ਟ੍ਰੇਡ ਦੇ ਪ੍ਰਧਾਨ) ਅਤੇ ਏ.ਵੀ. ਅਲੈਗਜ਼ੈਂਡਰ (ਐਡਮਿਰਲਟੀ ਦੇ ਫਸਟ ਲਾਰਡ)',
        hi: 'लॉर्ड पेथिक-लॉरेंस (भारत सचिव), सर स्टैफोर्ड क्रिप्स (बोर्ड ऑफ ट्रेड के अध्यक्ष) और ए.वी. अलेक्जेंडर (एडमिरल्टी के फर्स्ट लॉर्ड)',
      },
    },
    correct: 'D',
    explanation: {
      en: 'Sent by British PM Clement Attlee in March 1946, the three-member Cabinet Mission comprised Lord Pethick-Lawrence (Chairman), Sir Stafford Cripps, and A.V. Alexander. It rejected the demand for a separate Pakistan and proposed a three-tier federal Union and the Constituent Assembly. Later, on 3 June 1947, Lord Mountbatten announced the 3 June Plan (Mountbatten Plan) leading to the Indian Independence Act, 1947 and the Radcliffe Line.',
      pa: 'ਬ੍ਰਿਟਿਸ਼ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਕਲੀਮੈਂਟ ਐਟਲੀ ਦੁਆਰਾ ਮਾਰਚ 1946 ਵਿੱਚ ਭੇਜੇ ਗਏ ਤਿੰਨ-ਮੈਂਬਰੀ ਕੈਬਨਿਟ ਮਿਸ਼ਨ ਵਿੱਚ ਲਾਰਡ ਪੈਥਿਕ-ਲਾਰੈਂਸ (ਚੇਅਰਮੈਨ), ਸਰ ਸਟੈਫੋਰਡ ਕ੍ਰਿਪਸ ਅਤੇ ਏ.ਵੀ. ਅਲੈਗਜ਼ੈਂਡਰ ਸ਼ਾਮਲ ਸਨ। ਬਾਅਦ ਵਿੱਚ 3 ਜੂਨ 1947 ਨੂੰ ਲਾਰਡ ਮਾਊਂਟਬੈਟਨ ਯੋਜਨਾ (3 ਜੂਨ ਪਲਾਨ) ਦੇ ਆਧਾਰ ਤੇ ਭਾਰਤੀ ਸੁਤੰਤਰਤਾ ਐਕਟ, 1947 ਪਾਸ ਹੋਇਆ।',
      hi: 'ब्रिटिश प्रधानमंत्री क्लीमेंट एटली द्वारा मार्च 1946 में भेजे गए तीन-सदस्यीय कैबिनेट मिशन में लॉर्ड पेथिक-लॉरेंस (अध्यक्ष), सर स्टैफोर्ड क्रिप्स और ए.वी. अलेक्जेंडर शामिल थे। बाद में 3 जून 1947 की माउंटबेटन योजना (3 जून प्लान) के आधार पर भारतीय स्वतंत्रता अधिनियम, 1947 पारित हुआ।',
    },
    difficulty: 'hard',
  },

  // ===========================================================================
  // 3. PHYSICAL, INDIAN & PUNJAB GEOGRAPHY (topicId: 'physical-geography') — 20 MCQs
  // ===========================================================================
  {
    id: 'q-ppsc-clk-geo-1',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'What is the longitude of the Standard Meridian of India that determines Indian Standard Time (IST, 5 hours 30 minutes ahead of GMT), and through how many Indian states does it pass?',
      pa: 'ਭਾਰਤ ਦੇ ਮਿਆਰੀ ਮਧਿਆਨ (Standard Meridian) ਦਾ ਦਿਸ਼ਾਂਤਰ ਕੀ ਹੈ ਜੋ ਭਾਰਤੀ ਮਿਆਰੀ ਸਮਾਂ (IST, GMT ਤੋਂ 5 ਘੰਟੇ 30 ਮਿੰਟ ਅੱਗੇ) ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ, ਅਤੇ ਇਹ ਭਾਰਤ ਦੇ ਕਿੰਨੇ ਰਾਜਾਂ ਵਿੱਚੋਂ ਲੰਘਦਾ ਹੈ?',
      hi: 'भारत की मानक याम्योत्तर (Standard Meridian) का देशांतर क्या है जो भारतीय मानक समय (IST, GMT से 5 घंटे 30 मिनट आगे) निर्धारित करता है, और यह भारत के कितने राज्यों से होकर गुजरती है?',
    },
    options: {
      A: {
        en: '82°30′ E longitude (passing near Mirzapur in Uttar Pradesh); passes through 5 states (Uttar Pradesh, Madhya Pradesh, Chhattisgarh, Odisha, and Andhra Pradesh)',
        pa: '82°30′ ਪੂਰਬੀ ਦਿਸ਼ਾਂਤਰ (ਉੱਤਰ ਪ੍ਰਦੇਸ਼ ਦੇ ਮਿਰਜ਼ਾਪੁਰ ਨੇੜਿਓਂ); ਇਹ 5 ਰਾਜਾਂ (ਉੱਤਰ ਪ੍ਰਦੇਸ਼, ਮੱਧ ਪ੍ਰਦੇਸ਼, ਛੱਤੀਸਗੜ੍ਹ, ਉੜੀਸਾ ਅਤੇ ਆਂਧਰਾ ਪ੍ਰਦੇਸ਼) ਵਿੱਚੋਂ ਲੰਘਦੀ ਹੈ',
        hi: '82°30′ पूर्वी देशांतर (उत्तर प्रदेश के मिर्जापुर के निकट से); यह 5 राज्यों (उत्तर प्रदेश, मध्य प्रदेश, छत्तीसगढ़, ओडिशा और आंध्र प्रदेश) से होकर गुजरती है',
      },
      B: {
        en: '85°30′ E longitude; passes through 8 states',
        pa: '85°30′ ਪੂਰਬੀ ਦਿਸ਼ਾਂਤਰ; ਇਹ 8 ਰਾਜਾਂ ਵਿੱਚੋਂ ਲੰਘਦੀ ਹੈ',
        hi: '85°30′ पूर्वी देशांतर; यह 8 राज्यों से होकर गुजरती है',
      },
      C: {
        en: '23°30′ N latitude; passes through 7 states',
        pa: '23°30′ ਉੱਤਰੀ ਅਕਸ਼ਾਂਸ਼; ਇਹ 7 ਰਾਜਾਂ ਵਿੱਚੋਂ ਲੰਘਦੀ ਹੈ',
        hi: '23°30′ उत्तरी अक्षांश; यह 7 राज्यों से होकर गुजरती है',
      },
      D: {
        en: '75°30′ E longitude; passes through 6 states',
        pa: '75°30′ ਪੂਰਬੀ ਦਿਸ਼ਾਂਤਰ; ਇਹ 6 ਰਾਜਾਂ ਵਿੱਚੋਂ ਲੰਘਦੀ ਹੈ',
        hi: '75°30′ पूर्वी देशांतर; यह 6 राज्यों से होकर गुजरती है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'The Standard Meridian of India is 82°30′ E, passing near Mirzapur (Naini/Prayagraj) in Uttar Pradesh, which makes IST = GMT + 5:30. It passes through 5 states: Uttar Pradesh, Madhya Pradesh, Chhattisgarh, Odisha, and Andhra Pradesh. The Tropic of Cancer (23°30′ N) passes through 8 Indian states.',
      pa: 'ਭਾਰਤ ਦੀ ਮਿਆਰੀ ਮਧਿਆਨ ਰੇਖਾ 82°30′ ਪੂਰਬੀ ਦਿਸ਼ਾਂਤਰ ਹੈ ਜੋ ਉੱਤਰ ਪ੍ਰਦੇਸ਼ ਦੇ ਮਿਰਜ਼ਾਪੁਰ (ਨੈਨੀ) ਨੇੜਿਓਂ ਲੰਘਦੀ ਹੈ ਅਤੇ 5 ਰਾਜਾਂ (ਉੱਤਰ ਪ੍ਰਦੇਸ਼, ਮੱਧ ਪ੍ਰਦੇਸ਼, ਛੱਤੀਸਗੜ੍ਹ, ਉੜੀਸਾ ਅਤੇ ਆਂਧਰਾ ਪ੍ਰਦੇਸ਼) ਵਿੱਚੋਂ ਗੁਜ਼ਰਦੀ ਹੈ। ਕਰਕ ਰੇਖਾ (23°30′ N) 8 ਰਾਜਾਂ ਵਿੱਚੋਂ ਲੰਘਦੀ ਹੈ।',
      hi: 'भारत की मानक याम्योत्तर रेखा 82°30′ पूर्वी देशांतर है जो उत्तर प्रदेश के मिर्जापुर (नैनी) के निकट से गुजरती है और 5 राज्यों (उत्तर प्रदेश, मध्य प्रदेश, छत्तीसगढ़, ओडिशा और आंध्र प्रदेश) से होकर जाती है। कर्क रेखा (23°30′ N) 8 राज्यों से गुजरती है।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-geo-2',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'With which neighbouring country does India share its longest land frontier (4,096.7 km), and which Indian state has the longest mainland coastline?',
      pa: 'ਭਾਰਤ ਆਪਣੀ ਸਭ ਤੋਂ ਲੰਬੀ ਜ਼ਮੀਨੀ ਸਰਹੱਦ (4,096.7 ਕਿਲੋਮੀਟਰ) ਕਿਸ ਗੁਆਂਢੀ ਦੇਸ਼ ਨਾਲ ਸਾਂਝੀ ਕਰਦਾ ਹੈ, ਅਤੇ ਭਾਰਤ ਦੇ ਕਿਸ ਰਾਜ ਦੀ ਮੁੱਖ ਭੂਮੀ ਦੀ ਤੱਟ ਰੇਖਾ ਸਭ ਤੋਂ ਲੰਬੀ ਹੈ?',
      hi: 'भारत अपनी सबसे लंबी स्थलीय सीमा (4,096.7 किमी) किस पड़ोसी देश के साथ साझा करता है, और भारत के किस राज्य की मुख्य भूमि की तटरेखा सबसे लंबी है?',
    },
    options: {
      A: {
        en: 'China (3,488 km) and Andhra Pradesh',
        pa: 'ਚੀਨ (3,488 ਕਿ.ਮੀ.) ਅਤੇ ਆਂਧਰਾ ਪ੍ਰਦੇਸ਼',
        hi: 'चीन (3,488 किमी) और आंध्र प्रदेश',
      },
      B: {
        en: 'Bangladesh (4,096.7 km) and Gujarat',
        pa: 'ਬੰਗਲਾਦੇਸ਼ (4,096.7 ਕਿ.ਮੀ.) ਅਤੇ ਗੁਜਰਾਤ',
        hi: 'बांग्लादेश (4,096.7 किमी) और गुजरात',
      },
      C: {
        en: 'Pakistan (3,323 km) and Tamil Nadu',
        pa: 'ਪਾਕਿਸਤਾਨ (3,323 ਕਿ.ਮੀ.) ਅਤੇ ਤਮਿਲਨਾਡੂ',
        hi: 'पाकिस्तान (3,323 किमी) और तमिलनाडु',
      },
      D: {
        en: 'Nepal (1,751 km) and Maharashtra',
        pa: 'ਨੇਪਾਲ (1,751 ਕਿ.ਮੀ.) ਅਤੇ ਮਹਾਰਾਸ਼ਟਰ',
        hi: 'नेपाल (1,751 किमी) और महाराष्ट्र',
      },
    },
    correct: 'B',
    explanation: {
      en: 'India shares its longest international land border with Bangladesh (4,096.7 km), followed by China (3,488 km) and Pakistan (3,323 km). Among India’s 9 coastal states, Gujarat has the longest coastline (approx. 1,600 km), followed by Andhra Pradesh and Tamil Nadu.',
      pa: 'ਭਾਰਤ ਆਪਣੀ ਸਭ ਤੋਂ ਲੰਬੀ ਅੰਤਰਰਾਸ਼ਟਰੀ ਜ਼ਮੀਨੀ ਸਰਹੱਦ ਬੰਗਲਾਦੇਸ਼ (4,096.7 ਕਿ.ਮੀ.) ਨਾਲ ਸਾਂਝੀ ਕਰਦਾ ਹੈ। ਭਾਰਤ ਦੇ 9 ਤੱਟਵਰਤੀ ਰਾਜਾਂ ਵਿੱਚੋਂ ਗੁਜਰਾਤ ਦੀ ਤੱਟ ਰੇਖਾ ਸਭ ਤੋਂ ਲੰਬੀ ਹੈ, ਜਿਸ ਤੋਂ ਬਾਅਦ ਆਂਧਰਾ ਪ੍ਰਦੇਸ਼ ਦਾ ਸਥਾਨ ਆਉਂਦਾ ਹੈ।',
      hi: 'भारत अपनी सबसे लंबी अंतर्राष्ट्रीय स्थलीय सीमा बांग्लादेश (4,096.7 किमी) के साथ साझा करता है। भारत के 9 तटीय राज्यों में गुजरात की तटरेखा सबसे लंबी है, जिसके बाद आंध्र प्रदेश का स्थान आता है।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-geo-3',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which of the following pairs of Himalayan mountain passes and their locations/features is correctly matched?',
      pa: 'ਹਿਮਾਲੀਅਨ ਪਰਬਤੀ ਦੱਰਿਆਂ (Mountain Passes) ਅਤੇ ਉਹਨਾਂ ਦੀ ਸਥਿਤੀ/ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਦਾ ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਜੋੜਾ ਸਹੀ ਮੇਲ ਖਾਂਦਾ ਹੈ?',
      hi: 'हिमालयी पर्वतीय दर्रों (Mountain Passes) और उनकी स्थिति/विशेषताओं का निम्नलिखित में से कौन-सा युग्म सही सुमेलित है?',
    },
    options: {
      A: {
        en: 'Zoji La: Sikkim; Nathu La: Himachal Pradesh; Shipki La: Uttarakhand',
        pa: 'ਜ਼ੋਜੀ ਲਾ: ਸਿੱਕਮ; ਨਾਥੂ ਲਾ: ਹਿਮਾਚਲ ਪ੍ਰਦੇਸ਼; ਸ਼ਿਪਕੀ ਲਾ: ਉੱਤਰਾਖੰਡ',
        hi: 'ज़ोजी ला: सिक्किम; नाथू ला: हिमाचल प्रदेश; शिपकी ला: उत्तराखंड',
      },
      B: {
        en: 'Rohtang Pass: Arunachal Pradesh; Shipki La: Ladakh; Nathu La: Jammu & Kashmir',
        pa: 'ਰੋਹਤਾਂਗ ਦੱਰਾ: ਅਰੁਣਾਚਲ ਪ੍ਰਦੇਸ਼; ਸ਼ਿਪਕੀ ਲਾ: ਲੱਦਾਖ; ਨਾਥੂ ਲਾ: ਜੰਮੂ ਅਤੇ ਕਸ਼ਮੀਰ',
        hi: 'रोहतांग दर्रा: अरुणाचल प्रदेश; शिपकी ला: लद्दाख; नाथू ला: जम्मू और कश्मीर',
      },
      C: {
        en: 'Zoji La (connects Srinagar to Leh); Shipki La (Himachal Pradesh — Sutlej River enters India here); Nathu La (Sikkim — connects Gangtok to Chumbi Valley in Tibet); Rohtang Pass (Pir Panjal Range in Himachal Pradesh connecting Kullu to Lahaul-Spiti)',
        pa: 'ਜ਼ੋਜੀ ਲਾ (ਸ੍ਰੀਨਗਰ ਨੂੰ ਲੇਹ ਨਾਲ ਜੋੜਦਾ ਹੈ); ਸ਼ਿਪਕੀ ਲਾ (ਹਿਮਾਚਲ ਪ੍ਰਦੇਸ਼ — ਸਤਲੁਜ ਦਰਿਆ ਇੱਥੋਂ ਭਾਰਤ ਵਿੱਚ ਪ੍ਰਵੇਸ਼ ਕਰਦਾ ਹੈ); ਨਾਥੂ ਲਾ (ਸਿੱਕਮ — ਤਿੱਬਤ ਦੀ ਚੁੰਬੀ ਘਾਟੀ ਨਾਲ ਜੋੜਦਾ ਹੈ); ਰੋਹਤਾਂਗ ਦੱਰਾ (ਹਿਮਾਚਲ ਪ੍ਰਦੇਸ਼ ਵਿੱਚ ਕੁੱਲੂ ਨੂੰ ਲਾਹੌਲ-ਸਪਿਤੀ ਨਾਲ ਜੋੜਦਾ ਹੈ)',
        hi: 'ज़ोजी ला (श्रीनगर को लेह से जोड़ता है); शिपकी ला (हिमाचल प्रदेश — सतलुज नदी यहीं से भारत में प्रवेश करती है); नाथू ला (सिक्किम — तिब्बत की चुंबी घाटी से जोड़ता है); रोहतांग दर्रा (हिमाचल प्रदेश में कुल्लू को लाहौल-स्पीति से जोड़ता है)',
      },
      D: {
        en: 'Shipki La: Entry point of River Brahmaputra; Nathu La: Entry point of River Indus',
        pa: 'ਸ਼ਿਪਕੀ ਲਾ: ਬ੍ਰਹਮਪੁੱਤਰ ਨਦੀ ਦਾ ਪ੍ਰਵੇਸ਼ ਦੁਆਰ; ਨਾਥੂ ਲਾ: ਸਿੰਧੂ ਨਦੀ ਦਾ ਪ੍ਰਵੇਸ਼ ਦੁਆਰ',
        hi: 'शिपकी ला: ब्रह्मपुत्र नदी का प्रवेश द्वार; नाथू ला: सिंधु नदी का प्रवेश द्वार',
      },
    },
    correct: 'C',
    explanation: {
      en: 'Zoji La connects Srinagar with Kargil and Leh; Shipki La in Kinnaur district (Himachal Pradesh) is the pass through which the Sutlej River enters India from Tibet; Nathu La and Jelep La are in Sikkim; and Rohtang Pass in the Pir Panjal range (Himachal Pradesh) connects Kullu Valley with Lahaul and Spiti valleys.',
      pa: 'ਜ਼ੋਜੀ ਲਾ ਸ੍ਰੀਨਗਰ ਨੂੰ ਕਾਰਗਿਲ ਅਤੇ ਲੇਹ ਨਾਲ ਜੋੜਦਾ ਹੈ; ਹਿਮਾਚਲ ਪ੍ਰਦੇਸ਼ ਦੇ ਕਿੰਨੌਰ ਜ਼ਿਲ੍ਹੇ ਵਿੱਚ ਸ਼ਿਪਕੀ ਲਾ ਦੱਰੇ ਰਾਹੀਂ ਸਤਲੁਜ ਦਰਿਆ ਤਿੱਬਤ ਤੋਂ ਭਾਰਤ ਵਿੱਚ ਦਾਖਲ ਹੁੰਦਾ ਹੈ; ਨਾਥੂ ਲਾ ਅਤੇ ਜੇਲੇਪ ਲਾ ਸਿੱਕਮ ਵਿੱਚ ਹਨ; ਅਤੇ ਰੋਹਤਾਂਗ ਦੱਰਾ ਕੁੱਲੂ ਘਾਟੀ ਨੂੰ ਲਾਹੌਲ-ਸਪਿਤੀ ਨਾਲ ਜੋੜਦਾ ਹੈ।',
      hi: 'ज़ोजी ला श्रीनगर को कारगिल और लेह से जोड़ता है; हिमाचल प्रदेश के किन्नौर जिले में शिपकी ला दर्रे से सतलुज नदी तिब्बत से भारत में प्रवेश करती है; नाथू ला और जेलेप ला सिक्किम में हैं; तथा रोहतांग दर्रा कुल्लू घाटी को लाहौल-स्पीति से जोड़ता है।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-geo-4',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Arrange the three parallel ranges of the Himalayas from North to South in the correct sequence:',
      pa: 'ਹਿਮਾਲਿਆ ਦੀਆਂ ਤਿੰਨ ਸਮਾਨਾਂਤਰ ਪਰਬਤ ਲੜੀਆਂ ਨੂੰ ਉੱਤਰ ਤੋਂ ਦੱਖਣ ਵੱਲ ਸਹੀ ਕ੍ਰਮ ਵਿੱਚ ਲਗਾਓ:',
      hi: 'हिमालय की तीन समानांतर पर्वत श्रेणियों को उत्तर से दक्षिण की ओर सही क्रम में व्यवस्थित करें:',
    },
    options: {
      A: {
        en: 'Shiwalik -> Himachal -> Himadri',
        pa: 'ਸ਼ਿਵਾਲਿਕ -> ਹਿਮਾਚਲ -> ਹਿਮਾਦਰੀ',
        hi: 'शिवालिक -> हिमाचल -> हिमाद्री',
      },
      B: {
        en: 'Himachal -> Himadri -> Shiwalik',
        pa: 'ਹਿਮਾਚਲ -> ਹਿਮਾਦਰੀ -> ਸ਼ਿਵਾਲਿਕ',
        hi: 'हिमाचल -> हिमाद्री -> शिवालिक',
      },
      C: {
        en: 'Shiwalik -> Himadri -> Himachal',
        pa: 'ਸ਼ਿਵਾਲਿਕ -> ਹਿਮਾਦਰੀ -> ਹਿਮਾਚਲ',
        hi: 'शिवालिक -> हिमाद्री -> हिमाचल',
      },
      D: {
        en: 'Himadri (Greater Himalayas) -> Himachal (Lesser/Middle Himalayas) -> Shiwalik (Outer Himalayas)',
        pa: 'ਹਿਮਾਦਰੀ (ਮਹਾਨ ਹਿਮਾਲਿਆ) -> ਹਿਮਾਚਲ (ਲਘੂ/ਮੱਧ ਹਿਮਾਲਿਆ) -> ਸ਼ਿਵਾਲਿਕ (ਬਾਹਰੀ ਹਿਮਾਲਿਆ)',
        hi: 'हिमाद्री (वृहद हिमालय) -> हिमाचल (लघु/मध्य हिमालय) -> शिवालिक (बाह्य हिमालय)',
      },
    },
    correct: 'D',
    explanation: {
      en: 'From North to South (south of the Trans-Himalayan Karakoram-Ladakh-Zaskar ranges), the three longitudinal ranges of the Himalayas are: (1) Himadri or Greater/Inner Himalayas (average height 6,000 m), (2) Himachal or Lesser/Middle Himalayas (Pir Panjal, Dhauladhar), and (3) Shiwalik or Outer Himalayas (which border the northeastern sub-mountainous Kandi tract of Punjab).',
      pa: 'ਉੱਤਰ ਤੋਂ ਦੱਖਣ ਵੱਲ ਹਿਮਾਲਿਆ ਦੀਆਂ ਤਿੰਨ ਮੁੱਖ ਲੜੀਆਂ ਹਨ: (1) ਹਿਮਾਦਰੀ ਜਾਂ ਮਹਾਨ ਹਿਮਾਲਿਆ, (2) ਹਿਮਾਚਲ ਜਾਂ ਮੱਧ ਹਿਮਾਲਿਆ, ਅਤੇ (3) ਸ਼ਿਵਾਲਿਕ ਜਾਂ ਬਾਹਰੀ ਹਿਮਾਲਿਆ (ਜੋ ਪੰਜਾਬ ਦੇ ਉੱਤਰ-ਪੂਰਬੀ ਕੰਢੀ ਖੇਤਰ ਨਾਲ ਲੱਗਦੀਆਂ ਹਨ)।',
      hi: 'उत्तर से दक्षिण की ओर हिमालय की तीन मुख्य श्रेणियां हैं: (1) हिमाद्री या वृहद हिमालय, (2) हिमाचल या लघु/मध्य हिमालय, और (3) शिवालिक या बाह्य हिमालय (जो पंजाब के उत्तर-पूर्वी कंडी क्षेत्र से सटी हैं)।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-geo-5',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which two major Peninsular rivers of India flow westward through rift valleys and form estuaries (rather than deltas) before draining into the Arabian Sea (Gulf of Khambhat)?',
      pa: 'ਭਾਰਤ ਦੀਆਂ ਕਿਹੜੀਆਂ ਦੋ ਪ੍ਰਮੁੱਖ ਪ੍ਰਾਇਦੀਪੀ ਨਦੀਆਂ ਭ੍ਰੰਸ਼ ਘਾਟੀਆਂ (Rift Valleys) ਵਿੱਚੋਂ ਪੱਛਮ ਵੱਲ ਵਗਦੀਆਂ ਹਨ ਅਤੇ ਅਰਬ ਸਾਗਰ (ਖੰਭਾਤ ਦੀ ਖਾੜੀ) ਵਿੱਚ ਡਿੱਗਣ ਤੋਂ ਪਹਿਲਾਂ ਡੈਲਟਾ ਦੀ ਬਜਾਏ ਐਸਚੁਅਰੀ (Estuary / ਜਵਾਰਨਦਮੁਖ) ਬਣਾਉਂਦੀਆਂ ਹਨ?',
      hi: 'भारत की कौन-सी दो प्रमुख प्रायद्वीपीय नदियां भ्रंश घाटियों (Rift Valleys) से होकर पश्चिम की ओर बहती हैं और अरब सागर (खंभात की खाड़ी) में गिरने से पहले डेल्टा के बजाय ज्वारनदमुख (Estuary) बनाती हैं?',
    },
    options: {
      A: {
        en: 'Narmada and Tapi (Tapti)',
        pa: 'ਨਰਮਦਾ ਅਤੇ ਤਾਪੀ (ਤਾਪਤੀ)',
        hi: 'नर्मदा और तापी (ताप्ती)',
      },
      B: {
        en: 'Godavari and Krishna',
        pa: 'ਗੋਦਾਵਰੀ ਅਤੇ ਕ੍ਰਿਸ਼ਨਾ',
        hi: 'गोदावरी और कृष्णा',
      },
      C: {
        en: 'Mahanadi and Kaveri',
        pa: 'ਮਹਾਨਦੀ ਅਤੇ ਕਾਵੇਰੀ',
        hi: 'महानदी और कावेरी',
      },
      D: {
        en: 'Subarnarekha and Brahmani',
        pa: 'ਸੁਵਰਨਰੇਖਾ ਅਤੇ ਬ੍ਰਾਹਮਣੀ',
        hi: 'स्वर्णरेखा और ब्राह्मणी',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Narmada (originating at Amarkantak Plateau and flowing between the Vindhya and Satpura ranges) and Tapi/Tapti (originating at Multai in Betul district, MP, south of the Satpuras) are the two major west-flowing peninsular rivers that flow through rift valleys and form estuaries in the Arabian Sea. Godavari, Krishna, Kaveri, and Mahanadi flow east into the Bay of Bengal and form deltas.',
      pa: 'ਨਰਮਦਾ (ਅਮਰਕੰਟਕ ਪਠਾਰ ਤੋਂ ਨਿਕਲ ਕੇ ਵਿੰਧਿਆ ਅਤੇ ਸਤਪੁੜਾ ਵਿਚਕਾਰ ਵਗਦੀ ਹੈ) ਅਤੇ ਤਾਪੀ (ਸਤਪੁੜਾ ਦੇ ਦੱਖਣ ਵਿੱਚ ਬੈਤੂਲ ਜ਼ਿਲ੍ਹੇ ਦੇ ਮੁਲਤਾਈ ਤੋਂ ਨਿਕਲਦੀ ਹੈ) ਭ੍ਰੰਸ਼ ਘਾਟੀਆਂ ਵਿੱਚੋਂ ਪੱਛਮ ਵੱਲ ਵਗਣ ਵਾਲੀਆਂ ਦੋ ਮੁੱਖ ਨਦੀਆਂ ਹਨ ਜੋ ਅਰਬ ਸਾਗਰ ਵਿੱਚ ਐਸਚੁਅਰੀ ਬਣਾਉਂਦੀਆਂ ਹਨ।',
      hi: 'नर्मदा (अमरकंटक पठार से निकलकर विंध्य और सतपुड़ा के बीच बहती है) और तापी (सतपुड़ा के दक्षिण में बैतूल जिले के मुलताई से निकलती है) भ्रंश घाटियों से होकर पश्चिम की ओर बहने वाली दो प्रमुख नदियां हैं जो अरब सागर में ज्वारनदमुख (Estuary) बनाती हैं।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-geo-6',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which river is the longest Peninsular river of India (1,465 km), originates from Trimbakeshwar in Nashik district of Maharashtra, and is popularly known as the "Dakshin Ganga" or "Vridha Ganga"?',
      pa: 'ਭਾਰਤ ਦੀ ਸਭ ਤੋਂ ਲੰਬੀ ਪ੍ਰਾਇਦੀਪੀ ਨਦੀ (1,465 ਕਿ.ਮੀ.) ਕਿਹੜੀ ਹੈ, ਜੋ ਮਹਾਰਾਸ਼ਟਰ ਦੇ ਨਾਸਿਕ ਜ਼ਿਲ੍ਹੇ ਦੇ ਤ੍ਰਿੰਬਕੇਸ਼ਵਰ ਤੋਂ ਨਿਕਲਦੀ ਹੈ ਅਤੇ ਜਿਸ ਨੂੰ "ਦੱਖਣ ਗੰਗਾ" ਜਾਂ "ਬਿਰਧ ਗੰਗਾ" ਵਜੋਂ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?',
      hi: 'भारत की सबसे लंबी प्रायद्वीपीय नदी (1,465 किमी) कौन-सी है, जो महाराष्ट्र के नासिक जिले के त्र्यंबकेश्वर से निकलती है और जिसे "दक्षिण गंगा" या "वृद्ध गंगा" के नाम से जाना जाता है?',
    },
    options: {
      A: {
        en: 'Kaveri River',
        pa: 'ਕਾਵੇਰੀ ਨਦੀ',
        hi: 'कावेरी नदी',
      },
      B: {
        en: 'Godavari River',
        pa: 'ਗੋਦਾਵਰੀ ਨਦੀ',
        hi: 'गोदावरी नदी',
      },
      C: {
        en: 'Krishna River',
        pa: 'ਕ੍ਰਿਸ਼ਨਾ ਨਦੀ',
        hi: 'कृष्णा नदी',
      },
      D: {
        en: 'Mahanadi River',
        pa: 'ਮਹਾਨਦੀ ਨਦੀ',
        hi: 'महानदी नदी',
      },
    },
    correct: 'B',
    explanation: {
      en: 'The Godavari is the largest and longest Peninsular river system (1,465 km). It rises from the slopes of the Western Ghats at Trimbakeshwar (Nashik district, Maharashtra) and is called "Dakshin Ganga" or "Vridha Ganga" due to its age, size, and length. Its major tributaries include Pravara, Purna, Manjra, Penganga, Wardha, Wainganga, Indravati, and Sabari.',
      pa: 'ਗੋਦਾਵਰੀ ਪ੍ਰਾਇਦੀਪੀ ਭਾਰਤ ਦੀ ਸਭ ਤੋਂ ਵੱਡੀ ਅਤੇ ਲੰਬੀ ਨਦੀ (1,465 ਕਿ.ਮੀ.) ਹੈ। ਇਹ ਮਹਾਰਾਸ਼ਟਰ ਦੇ ਨਾਸਿਕ ਜ਼ਿਲ੍ਹੇ ਵਿੱਚ ਤ੍ਰਿੰਬਕੇਸ਼ਵਰ ਤੋਂ ਨਿਕਲਦੀ ਹੈ ਅਤੇ ਆਪਣੇ ਆਕਾਰ ਤੇ ਲੰਬਾਈ ਕਾਰਨ "ਦੱਖਣ ਗੰਗਾ" ਜਾਂ "ਬਿਰਧ ਗੰਗਾ" ਕਹਾਉਂਦੀ ਹੈ।',
      hi: 'गोदावरी प्रायद्वीपीय भारत की सबसे बड़ी और लंबी नदी (1,465 किमी) है। यह महाराष्ट्र के नासिक जिले में त्र्यंबकेश्वर से निकलती है और अपने आकार व लंबाई के कारण "दक्षिण गंगा" या "वृद्ध गंगा" कहलाती है।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-geo-7',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'What is the exact total geographical area of present-day Indian Punjab ( accounting for 1.54% of India’s total geographical area), and how many administrative districts and divisions does it currently have?',
      pa: 'ਮੌਜੂਦਾ ਭਾਰਤੀ ਪੰਜਾਬ ਦਾ ਕੁੱਲ ਭੂਗੋਲਿਕ ਖੇਤਰਫਲ (ਜੋ ਭਾਰਤ ਦੇ ਕੁੱਲ ਭੂਗੋਲਿਕ ਖੇਤਰਫਲ ਦਾ 1.54% ਹੈ) ਕਿੰਨਾ ਹੈ, ਅਤੇ ਵਰਤਮਾਨ ਵਿੱਚ ਇਸ ਵਿੱਚ ਕਿੰਨੇ ਪ੍ਰਸ਼ਾਸਕੀ ਜ਼ਿਲ੍ਹੇ ਅਤੇ ਡਿਵੀਜ਼ਨਾਂ (ਮੰਡਲ) ਹਨ?',
      hi: 'वर्तमान भारतीय पंजाब का कुल भौगोलिक क्षेत्रफल (जो भारत के कुल भौगोलिक क्षेत्रफल का 1.54% है) कितना है, और वर्तमान में इसमें कितने प्रशासनिक जिले तथा मंडल (Divisions) हैं?',
    },
    options: {
      A: {
        en: '44,212 sq km; 22 Districts and 4 Divisions',
        pa: '44,212 ਵਰਗ ਕਿ.ਮੀ.; 22 ਜ਼ਿਲ੍ਹੇ ਅਤੇ 4 ਡਿਵੀਜ਼ਨਾਂ',
        hi: '44,212 वर्ग किमी; 22 जिले और 4 मंडल',
      },
      B: {
        en: '55,673 sq km; 24 Districts and 6 Divisions',
        pa: '55,673 ਵਰਗ ਕਿ.ਮੀ.; 24 ਜ਼ਿਲ੍ਹੇ ਅਤੇ 6 ਡਿਵੀਜ਼ਨਾਂ',
        hi: '55,673 वर्ग किमी; 24 जिले और 6 मंडल',
      },
      C: {
        en: '50,362 sq km; 23 Districts (23rd being Malerkotla) and 5 Administrative Divisions (Jalandhar, Patiala, Ferozepur, Faridkot, and Rupnagar)',
        pa: '50,362 ਵਰਗ ਕਿ.ਮੀ.; 23 ਜ਼ਿਲ੍ਹੇ (23ਵਾਂ ਜ਼ਿਲ੍ਹਾ ਮਾਲੇਰਕੋਟਲਾ) ਅਤੇ 5 ਪ੍ਰਸ਼ਾਸਕੀ ਡਿਵੀਜ਼ਨਾਂ (ਜਲੰਧਰ, ਪਟਿਆਲਾ, ਫ਼ਿਰੋਜ਼ਪੁਰ, ਫ਼ਰੀਦਕੋਟ ਅਤੇ ਰੂਪਨਗਰ)',
        hi: '50,362 वर्ग किमी; 23 जिले (23वां जिला मालेरकोटला) और 5 प्रशासनिक मंडल (जालंधर, पटियाला, फिरोजपुर, फरीदकोट और रूपनगर)',
      },
      D: {
        en: '50,362 sq km; 20 Districts and 3 Divisions',
        pa: '50,362 ਵਰਗ ਕਿ.ਮੀ.; 20 ਜ਼ਿਲ੍ਹੇ ਅਤੇ 3 ਡਿਵੀਜ਼ਨਾਂ',
        hi: '50,362 वर्ग किमी; 20 जिले और 3 मंडल',
      },
    },
    correct: 'C',
    explanation: {
      en: 'Following the Punjab Reorganisation Act of 1 November 1966, present-day Punjab has a geographical area of 50,362 sq km (1.54% of India’s area), extending from 29°30′ N to 32°32′ N latitude and 73°55′ E to 76°50′ E longitude. With Malerkotla carved out of Sangrur in May/June 2021, Punjab has 23 districts across 5 administrative divisions.',
      pa: '1 ਨਵੰਬਰ 1966 ਦੇ ਪੁਨਰਗਠਨ ਤੋਂ ਬਾਅਦ ਮੌਜੂਦਾ ਪੰਜਾਬ ਦਾ ਖੇਤਰਫਲ 50,362 ਵਰਗ ਕਿ.ਮੀ. (ਭਾਰਤ ਦੇ ਖੇਤਰਫਲ ਦਾ 1.54%) ਹੈ। 2021 ਵਿੱਚ ਸੰਗਰੂਰ ਤੋਂ ਵੱਖ ਕਰਕੇ ਬਣਾਏ ਗਏ 23ਵੇਂ ਜ਼ਿਲ੍ਹੇ ਮਾਲੇਰਕੋਟਲਾ ਸਮੇਤ ਪੰਜਾਬ ਵਿੱਚ ਕੁੱਲ 23 ਜ਼ਿਲ੍ਹੇ ਅਤੇ 5 ਪ੍ਰਸ਼ਾਸਕੀ ਡਿਵੀਜ਼ਨਾਂ ਹਨ।',
      hi: '1 नवंबर 1966 के पुनर्गठन के बाद वर्तमान पंजाब का क्षेत्रफल 50,362 वर्ग किमी (भारत के क्षेत्रफल का 1.54%) है। 2021 में संगरूर से अलग कर बनाए गए 23वें जिले मालेरकोटला सहित पंजाब में कुल 23 जिले और 5 प्रशासनिक मंडल हैं।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-geo-8',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Match the three traditional socio-geographic regions of Indian Punjab—Majha, Doaba, and Malwa—with their bounding rivers and number of districts:',
      pa: 'ਭਾਰਤੀ ਪੰਜਾਬ ਦੇ ਤਿੰਨ ਰਵਾਇਤੀ ਭੂਗੋਲਿਕ ਖੇਤਰਾਂ — ਮਾਝਾ, ਦੁਆਬਾ ਅਤੇ ਮਾਲਵਾ — ਦਾ ਉਹਨਾਂ ਦੇ ਹੱਦਬੰਦੀ ਵਾਲੇ ਦਰਿਆਵਾਂ ਅਤੇ ਜ਼ਿਲ੍ਹਿਆਂ ਦੀ ਗਿਣਤੀ ਨਾਲ ਸਹੀ ਮਿਲਾਨ ਕਰੋ:',
      hi: 'भारतीय पंजाब के तीन पारंपरिक भौगोलिक क्षेत्रों — माझा, दोआबा और मालवा — का उनकी सीमा बनाने वाली नदियों और जिलों की संख्या के साथ सही मिलान करें:',
    },
    options: {
      A: {
        en: 'Majha: Between Beas and Sutlej (4 districts); Doaba: Between Ravi and Beas (4 districts); Malwa: North of Ravi (15 districts)',
        pa: 'ਮਾਝਾ: ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ ਵਿਚਕਾਰ (4 ਜ਼ਿਲ੍ਹੇ); ਦੁਆਬਾ: ਰਾਵੀ ਅਤੇ ਬਿਆਸ ਵਿਚਕਾਰ (4 ਜ਼ਿਲ੍ਹੇ); ਮਾਲਵਾ: ਰਾਵੀ ਦੇ ਉੱਤਰ ਵੱਲ (15 ਜ਼ਿਲ੍ਹੇ)',
        hi: 'माझा: ब्यास और सतलुज के बीच (4 जिले); दोआबा: रावी और ब्यास के बीच (4 जिले); मालवा: रावी के उत्तर में (15 जिले)',
      },
      B: {
        en: 'Majha: South of Sutlej (15 districts); Doaba: Between Ravi and Chenab (4 districts); Malwa: Between Beas and Sutlej (4 districts)',
        pa: 'ਮਾਝਾ: ਸਤਲੁਜ ਦੇ ਦੱਖਣ ਵੱਲ (15 ਜ਼ਿਲ੍ਹੇ); ਦੁਆਬਾ: ਰਾਵੀ ਅਤੇ ਚਨਾਬ ਵਿਚਕਾਰ (4 ਜ਼ਿਲ੍ਹੇ); ਮਾਲਵਾ: ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ ਵਿਚਕਾਰ (4 ਜ਼ਿਲ੍ਹੇ)',
        hi: 'माझा: सतलुज के दक्षिण में (15 जिले); दोआबा: रावी और चिनाब के बीच (4 जिले); मालवा: ब्यास और सतलुज के बीच (4 जिले)',
      },
      C: {
        en: 'Majha: Between Sutlej and Ghaggar (8 districts); Doaba: Between Beas and Ravi (8 districts); Malwa: Between Ravi and Jhelum (7 districts)',
        pa: 'ਮਾਝਾ: ਸਤਲੁਜ ਅਤੇ ਘੱਗਰ ਵਿਚਕਾਰ (8 ਜ਼ਿਲ੍ਹੇ); ਦੁਆਬਾ: ਬਿਆਸ ਅਤੇ ਰਾਵੀ ਵਿਚਕਾਰ (8 ਜ਼ਿਲ੍ਹੇ); ਮਾਲਵਾ: ਰਾਵੀ ਅਤੇ ਜੇਹਲਮ ਵਿਚਕਾਰ (7 ਜ਼ਿਲ੍ਹੇ)',
        hi: 'माझा: सतलुज और घग्गर के बीच (8 जिले); दोआबा: ब्यास और रावी के बीच (8 जिले); मालवा: रावी और झेलम के बीच (7 जिले)',
      },
      D: {
        en: 'Majha (Upper Bari Doab between Ravi and Beas — 4 districts: Amritsar, Tarn Taran, Gurdaspur, Pathankot); Doaba (Bist Jalandhar Doab between Beas and Sutlej — 4 districts: Jalandhar, Hoshiarpur, Kapurthala, SBS Nagar); Malwa (South of River Sutlej up to Ghaggar — 15 districts)',
        pa: 'ਮਾਝਾ (ਰਾਵੀ ਅਤੇ ਬਿਆਸ ਵਿਚਕਾਰ ਅੱਪਰ ਬਾਰੀ ਦੁਆਬ — 4 ਜ਼ਿਲ੍ਹੇ: ਅੰਮ੍ਰਿਤਸਰ, ਤਰਨ ਤਾਰਨ, ਗੁਰਦਾਸਪੁਰ, ਪਠਾਨਕੋਟ); ਦੁਆਬਾ (ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ ਵਿਚਕਾਰ ਬਿਸਤ ਦੁਆਬ — 4 ਜ਼ਿਲ੍ਹੇ: ਜਲੰਧਰ, ਹੁਸ਼ਿਆਰਪੁਰ, ਕਪੂਰਥਲਾ, ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ ਨਗਰ); ਮਾਲਵਾ (ਸਤਲੁਜ ਦਰਿਆ ਦੇ ਦੱਖਣ ਵੱਲ ਘੱਗਰ ਤੱਕ — 15 ਜ਼ਿਲ੍ਹੇ)',
        hi: 'माझा (रावी और ब्यास के बीच अपर बारी दोआब — 4 जिले: अमृतसर, तरन तारन, गुरदासपुर, पठानकोट); दोआबा (ब्यास और सतलुज के बीच बिस्त दोआब — 4 जिले: जालंधर, होशियारपुर, कपूरथला, शहीद भगत सिंह नगर); मालवा (सतलुज नदी के दक्षिण में घग्गर तक — 15 जिले)',
      },
    },
    correct: 'D',
    explanation: {
      en: 'Indian Punjab comprises three main regions: (1) Majha (between Ravi and Beas) with 4 districts (Amritsar, Tarn Taran, Gurdaspur, Pathankot); (2) Doaba (between Beas and Sutlej) with 4 districts (Jalandhar, Hoshiarpur, Kapurthala, Shaheed Bhagat Singh Nagar); and (3) Malwa (south of the Sutlej river) with 15 districts (including the eastern Puadh sub-region).',
      pa: 'ਭਾਰਤੀ ਪੰਜਾਬ ਦੇ ਤਿੰਨ ਮੁੱਖ ਖੇਤਰ ਹਨ: (1) ਮਾਝਾ (ਰਾਵੀ ਅਤੇ ਬਿਆਸ ਵਿਚਕਾਰ — 4 ਜ਼ਿਲ੍ਹੇ: ਅੰਮ੍ਰਿਤਸਰ, ਤਰਨ ਤਾਰਨ, ਗੁਰਦਾਸਪੁਰ, ਪਠਾਨਕੋਟ), (2) ਦੁਆਬਾ (ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ ਵਿਚਕਾਰ — 4 ਜ਼ਿਲ੍ਹੇ: ਜਲੰਧਰ, ਹੁਸ਼ਿਆਰਪੁਰ, ਕਪੂਰਥਲਾ, ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ ਨਗਰ), ਅਤੇ (3) ਮਾਲਵਾ (ਸਤਲੁਜ ਦੇ ਦੱਖਣ ਵੱਲ — 15 ਜ਼ਿਲ੍ਹੇ)।',
      hi: 'भारतीय पंजाब के तीन मुख्य क्षेत्र हैं: (1) माझा (रावी और ब्यास के बीच — 4 जिले: अमृतसर, तरन तारन, गुरदासपुर, पठानकोट), (2) दोआबा (ब्यास और सतलुज के बीच — 4 जिले: जालंधर, होशियारपुर, कपूरथला, शहीद भगत सिंह नगर), और (3) मालवा (सतलुज के दक्षिण में — 15 जिले)।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-geo-9',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which of the following correctly lists all five classical Doabs of undivided Punjab (named during Emperor Akbar’s reign by Raja Todar Mal) along with their enclosing rivers?',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਵਿਕਲਪ ਅਣਵੰਡੇ ਪੰਜਾਬ ਦੇ ਪੰਜਾਂ ਦੁਆਬਾਂ (ਅਕਬਰ ਦੇ ਸਮੇਂ ਰਾਜਾ ਟੋਡਰ ਮੱਲ ਦੁਆਰਾ ਰੱਖੇ ਨਾਵਾਂ ਅਨੁਸਾਰ) ਅਤੇ ਉਹਨਾਂ ਦੇ ਦਰਿਆਵਾਂ ਨੂੰ ਸਹੀ ਰੂਪ ਵਿੱਚ ਦਰਸਾਉਂਦਾ ਹੈ?',
      hi: 'निम्नलिखित में से कौन-सा विकल्प अविभाजित पंजाब के पांचों दोआबों (अकबर के काल में राजा टोडरमल द्वारा रखे गए नामों के अनुसार) और उनकी नदियों को सही रूप में दर्शाता है?',
    },
    options: {
      A: {
        en: 'Bist Doab (Beas–Sutlej), Bari Doab (Beas–Ravi), Rechna Doab (Ravi–Chenab), Chaj/Jech Doab (Chenab–Jhelum), and Sindh Sagar Doab (Jhelum/Chenab–Indus)',
        pa: 'ਬਿਸਤ ਦੁਆਬ (ਬਿਆਸ–ਸਤਲੁਜ), ਬਾਰੀ ਦੁਆਬ (ਬਿਆਸ–ਰਾਵੀ), ਰਚਨਾ ਦੁਆਬ (ਰਾਵੀ–ਚਨਾਬ), ਚੱਜ ਦੁਆਬ (ਚਨਾਬ–ਜੇਹਲਮ), ਅਤੇ ਸਿੰਧ ਸਾਗਰ ਦੁਆਬ (ਜੇਹਲਮ/ਚਨਾਬ–ਸਿੰਧ)',
        hi: 'बिस्त दोआब (ब्यास–सतलुज), बारी दोआब (ब्यास–रावी), रचना दोआब (रावी–चिनाब), चज दोआब (चिनाब–झेलम), और सिंध सागर दोआब (झेलम/चिनाब–सिंधु)',
      },
      B: {
        en: 'Bist Doab (Beas–Ravi), Bari Doab (Beas–Sutlej), Rechna Doab (Chenab–Jhelum), Chaj Doab (Ravi–Chenab), and Sindh Sagar Doab (Sutlej–Indus)',
        pa: 'ਬਿਸਤ ਦੁਆਬ (ਬਿਆਸ–ਰਾਵੀ), ਬਾਰੀ ਦੁਆਬ (ਬਿਆਸ–ਸਤਲੁਜ), ਰਚਨਾ ਦੁਆਬ (ਚਨਾਬ–ਜੇਹਲਮ), ਚੱਜ ਦੁਆਬ (ਰਾਵੀ–ਚਨਾਬ), ਅਤੇ ਸਿੰਧ ਸਾਗਰ ਦੁਆਬ (ਸਤਲੁਜ–ਸਿੰਧ)',
        hi: 'बिस्त दोआब (ब्यास–रावी), बारी दोआब (ब्यास–सतलुज), रचना दोआब (चिनाब–झेलम), चज दोआब (रावी–चिनाब), और सिंध सागर दोआब (सतलुज–सिंधु)',
      },
      C: {
        en: 'Bist Doab (Sutlej–Ghaggar), Bari Doab (Ravi–Chenab), Rechna Doab (Beas–Ravi), Chaj Doab (Jhelum–Indus), and Sindh Sagar Doab (Chenab–Jhelum)',
        pa: 'ਬਿਸਤ ਦੁਆਬ (ਸਤਲੁਜ–ਘੱਗਰ), ਬਾਰੀ ਦੁਆਬ (ਰਾਵੀ–ਚਨਾਬ), ਰਚਨਾ ਦੁਆਬ (ਬਿਆਸ–ਰਾਵੀ), ਚੱਜ ਦੁਆਬ (ਜੇਹਲਮ–ਸਿੰਧ), ਅਤੇ ਸਿੰਧ ਸਾਗਰ ਦੁਆਬ (ਚਨਾਬ–ਜੇਹਲਮ)',
        hi: 'बिस्त दोआब (सतलुज–घग्गर), बारी दोआब (रावी–चिनाब), रचना दोआब (ब्यास–रावी), चज दोआब (झेलम–सिंधु), और सिंध सागर दोआब (चिनाब–झेलम)',
      },
      D: {
        en: 'Bist Doab (Beas–Chenab), Bari Doab (Ravi–Sutlej), Rechna Doab (Ravi–Jhelum), Chaj Doab (Chenab–Indus), and Sindh Sagar Doab (Beas–Indus)',
        pa: 'ਬਿਸਤ ਦੁਆਬ (ਬਿਆਸ–ਚਨਾਬ), ਬਾਰੀ ਦੁਆਬ (ਰਾਵੀ–ਸਤਲੁਜ), ਰਚਨਾ ਦੁਆਬ (ਰਾਵੀ–ਜੇਹਲਮ), ਚੱਜ ਦੁਆਬ (ਚਨਾਬ–ਸਿੰਧ), ਅਤੇ ਸਿੰਧ ਸਾਗਰ ਦੁਆਬ (ਬਿਆਸ–ਸਿੰਧ)',
        hi: 'बिस्त दोआब (ब्यास–चिनाब), बारी दोआब (रावी–सतलुज), रचना दोआब (रावी–झेलम), चज दोआब (चिनाब–सिंधु), और सिंध सागर दोआब (ब्यास–सिंधु)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Each Doab’s name is an acronym formed from the first letters of its two bounding rivers: Bist = Beas + Sutlej; Bari = Beas + Ravi; Rechna = Ravi + Chenab; Chaj (or Jech) = Chenab + Jhelum; and Sindh Sagar = between Jhelum/Chenab and the Indus (Sindh) River.',
      pa: 'ਹਰੇਕ ਦੁਆਬ ਦਾ ਨਾਂ ਉਸ ਦੇ ਦੋ ਦਰਿਆਵਾਂ ਦੇ ਪਹਿਲੇ ਅੱਖਰਾਂ ਤੋਂ ਬਣਿਆ ਹੈ: ਬਿਸਤ = ਬਿਆਸ + ਸਤਲੁਜ; ਬਾਰੀ = ਬਿਆਸ + ਰਾਵੀ; ਰਚਨਾ = ਰਾਵੀ + ਚਨਾਬ; ਚੱਜ = ਚਨਾਬ + ਜੇਹਲਮ; ਅਤੇ ਸਿੰਧ ਸਾਗਰ = ਜੇਹਲਮ/ਚਨਾਬ ਅਤੇ ਸਿੰਧ ਦਰਿਆ ਦੇ ਵਿਚਕਾਰਲਾ ਇਲਾਕਾ।',
      hi: 'प्रत्येक दोआब का नाम उसकी दो नदियों के प्रथम अक्षरों से मिलकर बना है: बिस्त = ब्यास + सतलुज; बारी = ब्यास + रावी; रचना = रावी + चिनाब; चज = चिनाब + झेलम; और सिंध सागर = झेलम/चिनाब तथा सिंधु नदी के बीच का क्षेत्र।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-geo-10',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which pair of major dams and reservoirs on the rivers of the Punjab basin (Sutlej, Beas, and Ravi) is correctly matched?',
      pa: 'ਪੰਜਾਬ ਬੇਸਿਨ ਦੇ ਦਰਿਆਵਾਂ (ਸਤਲੁਜ, ਬਿਆਸ ਅਤੇ ਰਾਵੀ) ਉੱਤੇ ਬਣੇ ਪ੍ਰਮੁੱਖ ਡੈਮਾਂ ਅਤੇ ਜਲ-ਭੰਡਾਰਾਂ ਦਾ ਕਿਹੜਾ ਜੋੜਾ ਸਹੀ ਸੁਮੇਲ ਖਾਂਦਾ ਹੈ?',
      hi: 'पंजाब बेसिन की नदियों (सतलुज, ब्यास और रावी) पर निर्मित प्रमुख बांधों और जलाशयों का कौन-सा युग्म सही सुमेलित है?',
    },
    options: {
      A: {
        en: 'Bhakra Dam: River Beas; Pong Dam: River Ravi; Ranjit Sagar Dam: River Sutlej',
        pa: 'ਭਾਖੜਾ ਡੈਮ: ਬਿਆਸ ਦਰਿਆ; ਪੌਂਗ ਡੈਮ: ਰਾਵੀ ਦਰਿਆ; ਰਣਜੀਤ ਸਾਗਰ ਡੈਮ: ਸਤਲੁਜ ਦਰਿਆ',
        hi: 'भाखड़ा बांध: ब्यास नदी; पोंग बांध: रावी नदी; रणजीत सागर बांध: सतलुज नदी',
      },
      B: {
        en: 'Bhakra-Nangal Dam (Gobind Sagar Reservoir) & Nathpa Jhakri: River Sutlej; Pong Dam (Maharana Pratap Sagar) & Pandoh Dam: River Beas; Ranjit Sagar (Thein) Dam & Shahpurkandi Barrage: River Ravi',
        pa: 'ਭਾਖੜਾ-ਨੰਗਲ ਡੈਮ (ਗੋਬਿੰਦ ਸਾਗਰ ਝੀਲ) ਅਤੇ ਨਾਥਪਾ ਝਾਕੜੀ: ਸਤਲੁਜ ਦਰਿਆ; ਪੌਂਗ ਡੈਮ (ਮਹਾਰਾਣਾ ਪ੍ਰਤਾਪ ਸਾਗਰ) ਅਤੇ ਪੰਡੋਹ ਡੈਮ: ਬਿਆਸ ਦਰਿਆ; ਰਣਜੀਤ ਸਾਗਰ (ਥੀਨ) ਡੈਮ ਅਤੇ ਸ਼ਾਹਪੁਰਕੰਢੀ ਬੈਰਾਜ: ਰਾਵੀ ਦਰਿਆ',
        hi: 'भाखड़ा-नांगल बांध (गोबिंद सागर जलाशय) और नाथपा झाकड़ी: सतलुज नदी; पोंग बांध (महाराणा प्रताप सागर) और पंडोह बांध: ब्यास नदी; रणजीत सागर (थीन) बांध और शाहपुरकंडी बैराज: रावी नदी',
      },
      C: {
        en: 'Pandoh Dam: River Ravi; Thein Dam: River Beas; Nangal Dam: River Ghaggar',
        pa: 'ਪੰਡੋਹ ਡੈਮ: ਰਾਵੀ ਦਰਿਆ; ਥੀਨ ਡੈਮ: ਬਿਆਸ ਦਰਿਆ; ਨੰਗਲ ਡੈਮ: ਘੱਗਰ ਨਦੀ',
        hi: 'पंडोह बांध: रावी नदी; थीन बांध: ब्यास नदी; नांगल बांध: घग्गर नदी',
      },
      D: {
        en: 'Gobind Sagar Reservoir: River Ravi; Maharana Pratap Sagar: River Sutlej; Thein Dam: River Chenab',
        pa: 'ਗੋਬਿੰਦ ਸਾਗਰ ਝੀਲ: ਰਾਵੀ ਦਰਿਆ; ਮਹਾਰਾਣਾ ਪ੍ਰਤਾਪ ਸਾਗਰ: ਸਤਲੁਜ ਦਰਿਆ; ਥੀਨ ਡੈਮ: ਚਨਾਬ ਦਰਿਆ',
        hi: 'गोबिंद सागर जलाशय: रावी नदी; महाराणा प्रताप सागर: सतलुज नदी; थीन बांध: चिनाब नदी',
      },
    },
    correct: 'B',
    explanation: {
      en: 'On River Sutlej lie Bhakra Dam (forming Gobind Sagar reservoir in Bilaspur, HP), Nangal Dam (Rupnagar, Punjab), Koldam, and Nathpa Jhakri. On River Beas lie Pong Dam (forming Maharana Pratap Sagar in Kangra, HP) and Pandoh Dam (Mandi, HP). On River Ravi lie Ranjit Sagar Dam (also called Thein Dam, near Pathankot on the Punjab–J&K border) and the downstream Shahpurkandi Dam project.',
      pa: 'ਸਤਲੁਜ ਦਰਿਆ ਉੱਤੇ ਭਾਖੜਾ ਡੈਮ (ਗੋਬਿੰਦ ਸਾਗਰ ਝੀਲ), ਨੰਗਲ ਡੈਮ, ਕੋਲਡੈਮ ਅਤੇ ਨਾਥਪਾ ਝਾਕੜੀ ਸਥਿਤ ਹਨ। ਬਿਆਸ ਦਰਿਆ ਉੱਤੇ ਪੌਂਗ ਡੈਮ (ਮਹਾਰਾਣਾ ਪ੍ਰਤਾਪ ਸਾਗਰ) ਅਤੇ ਪੰਡੋਹ ਡੈਮ ਹਨ। ਰਾਵੀ ਦਰਿਆ ਉੱਤੇ ਪਠਾਨਕੋਟ ਨੇੜੇ ਰਣਜੀਤ ਸਾਗਰ ਡੈਮ (ਥੀਨ ਡੈਮ) ਅਤੇ ਸ਼ਾਹਪੁਰਕੰਢੀ ਡੈਮ ਸਥਿਤ ਹਨ।',
      hi: 'सतलुज नदी पर भाखड़ा बांध (गोबिंद सागर जलाशय), नांगल बांध, कोलडैम और नाथपा झाकड़ी स्थित हैं। ब्यास नदी पर पोंग बांध (महाराणा प्रताप सागर) और पंडोह बांध हैं। रावी नदी पर पठानकोट के निकट रणजीत सागर बांध (थीन बांध) और शाहपुरकंडी बांध स्थित हैं।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-geo-11',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'At which confluence in Tarn Taran / Ferozepur region of Punjab does the River Beas merge into the River Sutlej, from where the Indira Gandhi Canal (Rajasthan Canal) and Ferozepur Feeder take off?',
      pa: 'ਪੰਜਾਬ ਦੇ ਤਰਨ ਤਾਰਨ / ਫ਼ਿਰੋਜ਼ਪੁਰ ਖੇਤਰ ਵਿੱਚ ਕਿਸ ਸੰਗਮ ਅਸਥਾਨ ਤੇ ਬਿਆਸ ਦਰਿਆ ਸਤਲੁਜ ਦਰਿਆ ਵਿੱਚ ਮਿਲਦਾ ਹੈ, ਜਿੱਥੋਂ ਇੰਦਰਾ ਗਾਂਧੀ ਨਹਿਰ (ਰਾਜਸਥਾਨ ਨਹਿਰ) ਅਤੇ ਫ਼ਿਰੋਜ਼ਪੁਰ ਫੀਡਰ ਨਿਕਲਦੇ ਹਨ?',
      hi: 'पंजाब के तरन तारन / फिरोजपुर क्षेत्र में किस संगम स्थल पर ब्यास नदी सतलुज नदी में मिलती है, जहाँ से इंदिरा गांधी नहर (राजस्थान नहर) और फिरोजपुर फीडर निकलती हैं?',
    },
    options: {
      A: {
        en: 'Ropar Headworks',
        pa: 'ਰੋਪੜ ਹੈੱਡਵਰਕਸ',
        hi: 'रोपड़ हेडवर्क्स',
      },
      B: {
        en: 'Madhopur Headworks',
        pa: 'ਮਾਧੋਪੁਰ ਹੈੱਡਵਰਕਸ',
        hi: 'माधोपुर हेडवर्क्स',
      },
      C: {
        en: 'Harike Pattan (Harike Barrage / Confluence)',
        pa: 'ਹਰੀਕੇ ਪੱਤਣ (ਹਰੀਕੇ ਬੈਰਾਜ / ਸੰਗਮ)',
        hi: 'हरिके पत्तन (हरिके बैराज / संगम)',
      },
      D: {
        en: 'Hussainiwala Headworks',
        pa: 'ਹੁਸੈਨੀਵਾਲਾ ਹੈੱਡਵਰਕਸ',
        hi: 'हुसैनीवाला हेडवर्क्स',
      },
    },
    correct: 'C',
    explanation: {
      en: 'The River Beas originates from Beas Kund near Rohtang Pass (HP) and merges exclusively within India into the River Sutlej at Harike Pattan (on the border of Tarn Taran, Ferozepur, and Kapurthala districts). The Harike Barrage built here in 1952–53 feeds the Indira Gandhi Canal (India’s longest canal) and creates the Harike Wetland (Ramsar site).',
      pa: 'ਬਿਆਸ ਦਰਿਆ ਰੋਹਤਾਂਗ ਦੱਰੇ ਨੇੜੇ ਬਿਆਸ ਕੁੰਡ ਤੋਂ ਨਿਕਲ ਕੇ ਹਰੀਕੇ ਪੱਤਣ (ਤਰਨ ਤਾਰਨ ਅਤੇ ਫ਼ਿਰੋਜ਼ਪੁਰ ਦੀ ਹੱਦ) ਵਿਖੇ ਸਤਲੁਜ ਦਰਿਆ ਵਿੱਚ ਮਿਲ ਜਾਂਦਾ ਹੈ। ਇੱਥੇ ਬਣੇ ਹਰੀਕੇ ਬੈਰਾਜ ਤੋਂ ਭਾਰਤ ਦੀ ਸਭ ਤੋਂ ਲੰਬੀ ਇੰਦਰਾ ਗਾਂਧੀ ਨਹਿਰ (ਰਾਜਸਥਾਨ ਫੀਡਰ) ਨਿਕਲਦੀ ਹੈ।',
      hi: 'ब्यास नदी रोहतांग दर्रे के पास ब्यास कुंड से निकलकर हरिके पत्तन (तरन तारन और फिरोजपुर की सीमा) पर सतलुज नदी में मिल जाती है। यहाँ निर्मित हरिके बैराज से भारत की सबसे लंबी इंदिरा गांधी नहर (राजस्थान फीडर) निकलती है।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-geo-12',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'In the context of the Indo-Gangetic and Punjab Alluvial Plains, how are "Bhangar", "Khadar" (locally called "Bet" in Punjab), and "Kandi" tracts distinguished?',
      pa: 'ਸਿੰਧ-ਗੰਗਾ ਅਤੇ ਪੰਜਾਬ ਦੇ ਜਲੌਢ ਮੈਦਾਨਾਂ ਦੇ ਸੰਦਰਭ ਵਿੱਚ "ਭਾਂਗਰ", "ਖਾਦਰ" (ਪੰਜਾਬ ਵਿੱਚ ਸਥਾਨਕ ਤੌਰ ਤੇ "ਬੇਟ") ਅਤੇ "ਕੰਢੀ" ਖੇਤਰਾਂ ਵਿੱਚ ਕੀ ਅੰਤਰ ਹੈ?',
      hi: 'सिंधु-गंगा और पंजाब के जलोढ़ मैदानों के संदर्भ में "भांगर", "खादर" (पंजाब में स्थानीय रूप से "बेट") और "कंडी" क्षेत्रों में क्या अंतर है?',
    },
    options: {
      A: {
        en: 'Bhangar is newer floodplain alluvium; Khadar is volcanic rock; Kandi is desert sand',
        pa: 'ਭਾਂਗਰ ਨਵੀਂ ਜਲੌਢ ਮਿੱਟੀ ਹੈ; ਖਾਦਰ ਜਵਾਲਾਮੁਖੀ ਚੱਟਾਨ ਹੈ; ਕੰਢੀ ਮਾਰੂਥਲੀ ਰੇਤ ਹੈ',
        hi: 'भांगर नवीन जलोढ़ मिट्टी है; खादर ज्वालामुखी चट्टान है; कंडी मरुस्थलीय रेत है',
      },
      B: {
        en: 'Khadar contains calcareous kankar nodules on high terraces; Bhangar is renewed every year by floods',
        pa: 'ਖਾਦਰ ਵਿੱਚ ਉੱਚੇ ਮੈਦਾਨਾਂ ਤੇ ਚੂਨੇ ਦੇ ਕੰਕਰ ਹੁੰਦੇ ਹਨ; ਭਾਂਗਰ ਹਰ ਸਾਲ ਹੜ੍ਹਾਂ ਨਾਲ ਨਵੀਂ ਹੁੰਦੀ ਹੈ',
        hi: 'खादर में ऊंचे मैदानों पर चूने के कंकड़ होते हैं; भांगर हर साल बाढ़ से नवीनीकृत होती है',
      },
      C: {
        en: 'Kandi lies in southwestern Bathinda-Mansa; Bet lies on the crest of the Shiwalik hills',
        pa: 'ਕੰਢੀ ਦੱਖਣ-ਪੱਛਮੀ ਬਠਿੰਡਾ-ਮਾਨਸਾ ਵਿੱਚ ਹੈ; ਬੇਟ ਸ਼ਿਵਾਲਿਕ ਪਹਾੜੀਆਂ ਦੀ ਚੋਟੀ ਤੇ ਹੈ',
        hi: 'कंडी दक्षिण-पश्चिमी बठिंडा-मानसा में है; बेट शिवालिक पहाड़ियों के शिखर पर है',
      },
      D: {
        en: 'Bhangar is older alluvium above flood level containing calcareous nodules (kankar); Khadar (called "Bet" in Punjab) is newer, fertile floodplain alluvium renewed annually; and "Kandi" is the dissected sub-mountainous piedmont belt along the Shiwalik foothills infused with seasonal torrents ("Choes")',
        pa: 'ਭਾਂਗਰ ਹੜ੍ਹਾਂ ਦੇ ਪੱਧਰ ਤੋਂ ਉੱਚੀ ਪੁਰਾਣੀ ਜਲੌਢ ਮਿੱਟੀ ਹੈ ਜਿਸ ਵਿੱਚ ਕੰਕਰ ਮਿਲਦੇ ਹਨ; ਖਾਦਰ (ਪੰਜਾਬ ਵਿੱਚ "ਬੇਟ") ਦਰਿਆਵਾਂ ਦੇ ਕੰਢੇ ਹਰ ਸਾਲ ਨਵੀਂ ਹੋਣ ਵਾਲੀ ਉਪਜਾਊ ਜਲੌਢ ਮਿੱਟੀ ਹੈ; ਅਤੇ "ਕੰਢੀ" ਸ਼ਿਵਾਲਿਕ ਦੀਆਂ ਪਹਾੜੀਆਂ ਦੇ ਪੈਰਾਂ ਵਿੱਚ ਮੌਸਮੀ ਖੱਡਾਂ ("ਚੋਅ") ਵਾਲਾ ਨੀਮ-ਪਹਾੜੀ ਖੇਤਰ ਹੈ',
        hi: 'भांगर बाढ़ के स्तर से ऊपर स्थित पुरानी जलोढ़ मिट्टी है जिसमें कंकड़ पाए जाते हैं; खादर (पंजाब में "बेट") नदियों के किनारे प्रतिवर्ष नवीनीकृत होने वाली उपजाऊ नवीन जलोढ़ मिट्टी है; और "कंडी" शिवालिक की तलहटी के साथ मौसमी खड्डों ("चो") वाला उप-पर्वतीय क्षेत्र है',
      },
    },
    correct: 'D',
    explanation: {
      en: 'Alluvial soils cover over 40% of India. Bhangar is the older alluvium situated above the floodplains and contains calcareous concretions called "Kankar". Khadar is the newer, finer, and more fertile alluvium deposited annually on floodplains—locally called "Bet" in Punjab. Along the eastern border of Punjab at the foot of the Shiwaliks lies the "Kandi" (Bhabar-like) piedmont zone dissected by seasonal streams called "Choes" (especially in Hoshiarpur and Rupnagar).',
      pa: 'ਭਾਂਗਰ ਹੜ੍ਹ ਦੇ ਮੈਦਾਨਾਂ ਤੋਂ ਉੱਚੀ ਪੁਰਾਣੀ ਜਲੌਢ ਮਿੱਟੀ ਹੈ ਜਿਸ ਵਿੱਚ ਚੂਨੇ ਦੇ ਕੰਕਰ ਹੁੰਦੇ ਹਨ। ਖਾਦਰ ਦਰਿਆਵਾਂ ਦੇ ਨਾਲ ਲੱਗਦੀ ਨਵੀਂ ਅਤੇ ਵਧੇਰੇ ਉਪਜਾਊ ਜਲੌਢ ਮਿੱਟੀ ਹੈ ਜਿਸ ਨੂੰ ਪੰਜਾਬ ਵਿੱਚ "ਬੇਟ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ। ਸ਼ਿਵਾਲਿਕ ਪਹਾੜੀਆਂ ਦੇ ਪੈਰਾਂ ਵਿੱਚ ਪਠਾਨਕੋਟ, ਹੁਸ਼ਿਆਰਪੁਰ ਅਤੇ ਰੂਪਨਗਰ ਦੇ ਨਾਲ ਲੱਗਦੀ ਪੱਟੀ ਨੂੰ "ਕੰਢੀ" ਖੇਤਰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ ਜਿੱਥੇ ਮੌਸਮੀ ਬਰਸਾਤੀ ਨਾਲੇ ("ਚੋਅ") ਵਗਦੇ ਹਨ।',
      hi: 'भांगर बाढ़ के मैदानों से ऊंची पुरानी जलोढ़ मिट्टी है जिसमें चूने के कंकड़ पाए जाते हैं। खादर नदियों के साथ लगने वाली नवीन और अधिक उपजाऊ जलोढ़ मिट्टी है जिसे पंजाब में "बेट" कहा जाता है। शिवालिक की तलहटी में पठानकोट, होशियारपुर और रूपनगर के साथ लगने वाली पट्टी को "कंडी" क्षेत्र कहा जाता है जहाँ मौसमी बरसाती नाले ("चो") बहते हैं।',
    },
    difficulty: 'hard',
  },
  {
    id: 'q-ppsc-clk-geo-13',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which Indian soil type is derived from the weathering of Deccan Trap basaltic lava rocks, is popularly called "Regur Soil" or "Black Cotton Soil", and exhibits "self-ploughing" due to high clay content and moisture retention?',
      pa: 'ਭਾਰਤ ਦੀ ਕਿਹੜੀ ਮਿੱਟੀ ਦੀ ਕਿਸਮ ਦੱਖਣ ਟ੍ਰੈਪ ਦੀਆਂ ਬੇਸਾਲਟ ਲਾਵਾ ਚੱਟਾਨਾਂ ਦੇ ਟੁੱਟਣ-ਭੱਜਣ ਤੋਂ ਬਣੀ ਹੈ, ਜਿਸ ਨੂੰ "ਰੇਗੁਰ ਮਿੱਟੀ" ਜਾਂ "ਕਾਲੀ ਕਪਾਹ ਮਿੱਟੀ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ ਅਤੇ ਜੋ ਨਮੀ ਸੰਭਾਲਣ ਤੇ ਤਰੇੜਾਂ ਪੈਣ ਕਾਰਨ "ਸਵੈ-ਵਹਾਈ" (self-ploughing) ਦਾ ਗੁਣ ਦਿਖਾਉਂਦੀ ਹੈ?',
      hi: 'भारत की कौन-सी मृदा दक्कन ट्रैप की बेसाल्टिक लावा चट्टानों के अपक्षय से बनी है, जिसे "रेगुर मिट्टी" या "काली कपास मिट्टी" कहा जाता है और जो उच्च नमी धारण क्षमता व दरारों के कारण "स्वतः जुताई" (self-ploughing) का गुण प्रदर्शित करती है?',
    },
    options: {
      A: {
        en: 'Black Soil (Regur / Vertisols)',
        pa: 'ਕਾਲੀ ਮਿੱਟੀ (ਰੇਗੁਰ / ਵਰਟੀਸੋਲ)',
        hi: 'काली मिट्टी (रेगुर / वर्टिसोल)',
      },
      B: {
        en: 'Laterite Soil',
        pa: 'ਲੈਟਰਾਈਟ ਮਿੱਟੀ',
        hi: 'लैटेराइट मिट्टी',
      },
      C: {
        en: 'Red and Yellow Soil',
        pa: 'ਲਾਲ ਅਤੇ ਪੀਲੀ ਮਿੱਟੀ',
        hi: 'लाल और पीली मिट्टी',
      },
      D: {
        en: 'Peaty and Marshy Soil',
        pa: 'ਪੀਟ ਅਤੇ ਦਲਦਲੀ ਮਿੱਟੀ',
        hi: 'पीट और दलदली मिट्टी',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Black Soil (also known as Regur Soil or Black Cotton Soil, internationally classified as Vertisols) covers the Deccan Plateau (Maharashtra, western MP, Gujarat, Andhra Pradesh, northern Karnataka). Rich in iron, lime, calcium, potash, aluminium, and magnesium carbonates (with titaniferous magnetite giving the black colour), it swells when wet and develops deep cracks when dry ("self-ploughing").',
      pa: 'ਕਾਲੀ ਮਿੱਟੀ (ਜਿਸ ਨੂੰ ਰੇਗੁਰ ਮਿੱਟੀ ਜਾਂ ਕਾਲੀ ਕਪਾਹ ਮਿੱਟੀ ਵੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ) ਦੱਖਣ ਦੇ ਪਠਾਰ (ਮਹਾਰਾਸ਼ਟਰ, ਗੁਜਰਾਤ, ਮੱਧ ਪ੍ਰਦੇਸ਼) ਵਿੱਚ ਪਾਈ ਜਾਂਦੀ ਹੈ। ਇਹ ਕਪਾਹ ਦੀ ਖੇਤੀ ਲਈ ਸਭ ਤੋਂ ਉੱਤਮ ਹੈ ਅਤੇ ਗਿੱਲੀ ਹੋਣ ਤੇ ਫੁੱਲ ਜਾਂਦੀ ਹੈ ਤੇ ਸੁੱਕਣ ਤੇ ਡੂੰਘੀਆਂ ਤਰੇੜਾਂ ਪੈਣ ਕਾਰਨ "ਸਵੈ-ਵਹਾਈ" (self-ploughing) ਵਾਲੀ ਮਿੱਟੀ ਅਖਵਾਉਂਦੀ ਹੈ।',
      hi: 'काली मिट्टी (जिसे रेगुर मिट्टी या काली कपास मिट्टी भी कहा जाता है) दक्कन के पठार (महाराष्ट्र, गुजरात, मध्य प्रदेश) में पाई जाती है। यह कपास की खेती के लिए सर्वोत्तम है तथा गीली होने पर चिपचिपी हो जाती है और सूखने पर गहरी दरारें पड़ने के कारण "स्वतः जुताई" (self-ploughing) वाली मिट्टी कहलाती है।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-geo-14',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which soil type develops in regions of high temperature and heavy rainfall due to intense leaching (washing away of silica and lime while leaving behind iron oxide and aluminium compounds) and is ideal for growing cashew nuts, tea, and coffee after manuring?',
      pa: 'ਕਿਹੜੀ ਮਿੱਟੀ ਉੱਚ ਤਾਪਮਾਨ ਅਤੇ ਭਾਰੀ ਵਰਖਾ ਵਾਲੇ ਖੇਤਰਾਂ ਵਿੱਚ ਤੀਬਰ ਲੀਚਿੰਗ (ਸਿਲੀਕਾ ਅਤੇ ਚੂਨੇ ਦੇ ਰੁੜ੍ਹ ਜਾਣ ਅਤੇ ਲੋਹੇ ਤੇ ਐਲੂਮੀਨੀਅਮ ਆਕਸਾਈਡ ਦੇ ਬਚਣ) ਕਾਰਨ ਬਣਦੀ ਹੈ ਅਤੇ ਕਾਜੂ, ਚਾਹ ਤੇ ਕੌਫੀ ਦੀ ਕਾਸ਼ਤ ਲਈ ਢੁਕਵੀਂ ਹੁੰਦੀ ਹੈ?',
      hi: 'कौन-सी मिट्टी उच्च तापमान और भारी वर्षा वाले क्षेत्रों में तीव्र निक्षालन/लीचिंग (सिलिका और चूने के बह जाने तथा लौह एवं एल्यूमीनियम ऑक्साइड के शेष रहने) के कारण विकसित होती है और काजू, चाय तथा कॉफी की खेती के लिए उपयुक्त होती है?',
    },
    options: {
      A: {
        en: 'Arid / Desert Soil',
        pa: 'ਮਾਰੂਥਲੀ ਮਿੱਟੀ',
        hi: 'शुष्क / मरुस्थलीय मिट्टी',
      },
      B: {
        en: 'Laterite Soil',
        pa: 'ਲੈਟਰਾਈਟ ਮਿੱਟੀ',
        hi: 'लैटेराइट मिट्टी',
      },
      C: {
        en: 'Saline and Alkaline Soil (Kallar / Usara)',
        pa: 'ਲੂਣੀ ਅਤੇ ਖਾਰੀ ਮਿੱਟੀ (ਕੱਲਰ / ਉਸਰ)',
        hi: 'लवणीय और क्षारीय मिट्टी (कल्लर / ऊसर)',
      },
      D: {
        en: 'Khadar Alluvial Soil',
        pa: 'ਖਾਦਰ ਜਲੌਢ ਮਿੱਟੀ',
        hi: 'खादर जलोढ़ मिट्टी',
      },
    },
    correct: 'B',
    explanation: {
      en: 'Derived from the Latin word "later" meaning brick, Laterite soil forms in tropical areas with alternating wet and dry seasons and heavy rainfall (>200 cm), causing intense leaching of lime and silica. Found in the Western Ghats, Kerala, Tamil Nadu, Karnataka, Odisha, and Meghalaya, it is widely used to cut bricks and supports tea, coffee, rubber, and cashew nuts.',
      pa: 'ਲਾਤੀਨੀ ਸ਼ਬਦ "Later" (ਇੱਟ) ਤੋਂ ਬਣੀ ਲੈਟਰਾਈਟ ਮਿੱਟੀ ਭਾਰੀ ਵਰਖਾ ਅਤੇ ਉੱਚ ਤਾਪਮਾਨ ਵਾਲੇ ਖੇਤਰਾਂ (ਪੱਛਮੀ ਘਾਟ, ਕੇਰਲ, ਕਰਨਾਟਕ, ਤਮਿਲਨਾਡੂ, ਮੇਘਾਲਿਆ) ਵਿੱਚ ਤੀਬਰ ਲੀਚਿੰਗ (ਨਿਕਸ਼ਾਲਨ) ਕਾਰਨ ਬਣਦੀ ਹੈ। ਇਹ ਚਾਹ, ਕੌਫੀ, ਰਬੜ ਅਤੇ ਕਾਜੂ ਦੀ ਖੇਤੀ ਲਈ ਮਹੱਤਵਪੂਰਨ ਹੈ।',
      hi: 'लैटिन शब्द "Later" (ईंट) से बनी लैटेराइट मिट्टी भारी वर्षा और उच्च तापमान वाले क्षेत्रों (पश्चिमी घाट, केरल, कर्नाटक, तमिलनाडु, मेघालय) में तीव्र निक्षालन (Leaching) के कारण बनती है। यह चाय, कॉफी, रबड़ और काजू की खेती के लिए महत्वपूर्ण है।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-geo-15',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which weather phenomenon originating over the Mediterranean Sea and brought to northwest India by the Subtropical Westerly Jet Stream provides crucial winter rainfall (locally called "Mahawat") beneficial for Rabi crops like wheat in Punjab and Haryana?',
      pa: 'ਭੂ-ਮੱਧ ਸਾਗਰ (Mediterranean Sea) ਤੋਂ ਪੈਦਾ ਹੋਣ ਵਾਲਾ ਅਤੇ ਪੱਛਮੀ ਜੈੱਟ ਸਟ੍ਰੀਮ ਦੁਆਰਾ ਉੱਤਰ-ਪੱਛਮੀ ਭਾਰਤ ਵਿੱਚ ਲਿਆਂਦਾ ਜਾਣ ਵਾਲਾ ਕਿਹੜਾ ਮੌਸਮੀ ਵਰਤਾਰਾ ਪੰਜਾਬ ਅਤੇ ਹਰਿਆਣਾ ਵਿੱਚ ਕਣਕ ਵਰਗੀਆਂ ਹਾੜ੍ਹੀ (Rabi) ਦੀਆਂ ਫ਼ਸਲਾਂ ਲਈ ਲਾਹੇਵੰਦ ਸਰਦੀਆਂ ਦੀ ਵਰਖਾ ("ਮਹਾਵਤ") ਲਿਆਉਂਦਾ ਹੈ?',
      hi: 'भूमध्य सागर (Mediterranean Sea) से उत्पन्न होने वाला और उपोष्णकटिबंधीय पश्चिमी जेट स्ट्रीम द्वारा उत्तर-पश्चिम भारत में लाया जाने वाला कौन-सा मौसमी तंत्र पंजाब और हरियाणा में गेहूं जैसी रबी फसलों के लिए लाभकारी शीतकालीन वर्षा ("मावट") प्रदान करता है?',
    },
    options: {
      A: {
        en: 'Mango Showers (Pre-Monsoon Convectional Rain)',
        pa: 'ਅੰਬਾਂ ਦੀ ਵਾਛੜ (ਮੈਂਗੋ ਸ਼ਾਵਰ)',
        hi: 'आम्र वर्षा (मैंगो शावर)',
      },
      B: {
        en: 'Kal Baisakhi / Nor’westers',
        pa: 'ਕਾਲ ਵਿਸਾਖੀ / ਨੌਰਵੈਸਟਰਜ਼',
        hi: 'काल बैसाखी / नॉर्वेस्टर्स',
      },
      C: {
        en: 'Western Disturbances (Extratropical Cyclones from the Mediterranean)',
        pa: 'ਪੱਛਮੀ ਗੜਬੜੀਆਂ (Western Disturbances)',
        hi: 'पश्चिमी विक्षोभ (Western Disturbances)',
      },
      D: {
        en: 'October Heat and Tropical Cyclones of the Bay of Bengal',
        pa: 'ਅਕਤੂਬਰ ਦੀ ਗਰਮੀ ਅਤੇ ਬੰਗਾਲ ਦੀ ਖਾੜੀ ਦੇ ਚੱਕਰਵਾਤ',
        hi: 'अक्टूबर हीट और बंगाल की खाड़ी के उष्णकटिबंधीय चक्रवात',
      },
    },
    correct: 'C',
    explanation: {
      en: 'Western Disturbances are shallow extratropical cyclonic depressions originating over the Mediterranean Sea (gathering moisture from the Caspian Sea and Persian Gulf) and steered into northwest India by the Subtropical Westerly Jet Stream during winter (Dec–Feb). Though small in volume, this winter rain ("Mahawat") is vital for Rabi wheat cultivation in Punjab, Haryana, and western UP.',
      pa: 'ਪੱਛਮੀ ਗੜਬੜੀਆਂ (Western Disturbances) ਭੂ-ਮੱਧ ਸਾਗਰ ਤੋਂ ਉੱਠਣ ਵਾਲੇ ਸ਼ੀਤ-ਊਸ਼ਣ ਚੱਕਰਵਾਤ ਹਨ ਜੋ ਪੱਛਮੀ ਜੈੱਟ ਸਟ੍ਰੀਮ ਰਾਹੀਂ ਸਰਦੀਆਂ (ਦਸੰਬਰ-ਫਰਵਰੀ) ਵਿੱਚ ਪੰਜਾਬ, ਹਰਿਆਣਾ ਅਤੇ ਉੱਤਰ-ਪੱਛਮੀ ਭਾਰਤ ਵਿੱਚ ਮੀਂਹ ਪਾਉਂਦੇ ਹਨ। ਇਹ ਸਰਦੀਆਂ ਦੀ ਵਰਖਾ ਹਾੜ੍ਹੀ ਦੀ ਮੁੱਖ ਫ਼ਸਲ ਕਣਕ ਲਈ ਬੇਹੱਦ ਲਾਹੇਵੰਦ ਹੁੰਦੀ ਹੈ।',
      hi: 'पश्चिमी विक्षोभ (Western Disturbances) भूमध्य सागर से उत्पन्न होने वाले शीतोष्ण कटिबंधीय चक्रवात हैं जो पश्चिमी जेट स्ट्रीम द्वारा शीतकाल (दिसंबर-फरवरी) में पंजाब, हरियाणा और उत्तर-पश्चिम भारत में वर्षा लाते हैं। यह शीतकालीन वर्षा ("मावट") रबी की मुख्य फसल गेहूं के लिए अत्यंत लाभकारी होती है।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-geo-16',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'While most of India receives rainfall from the Southwest Monsoon between June and September, which Indian state coast (the Coromandel Coast) receives the bulk of its annual rainfall during October–December from the Retreating (Northeast) Monsoon winds picking up moisture over the Bay of Bengal?',
      pa: 'ਜਿੱਥੇ ਭਾਰਤ ਦੇ ਜ਼ਿਆਦਾਤਰ ਹਿੱਸੇ ਵਿੱਚ ਜੂਨ ਤੋਂ ਸਤੰਬਰ ਦੌਰਾਨ ਦੱਖਣ-ਪੱਛਮੀ ਮਾਨਸੂਨ ਨਾਲ ਵਰਖਾ ਹੁੰਦੀ ਹੈ, ਉੱਥੇ ਭਾਰਤ ਦੇ ਕਿਸ ਰਾਜ ਦੇ ਤੱਟ (ਕੋਰੋਮੰਡਲ ਤੱਟ) ਤੇ ਅਕਤੂਬਰ-ਦਸੰਬਰ ਦੌਰਾਨ ਬੰਗਾਲ ਦੀ ਖਾੜੀ ਤੋਂ ਨਮੀ ਲੈਣ ਵਾਲੀਆਂ ਪਰਤਦੀਆਂ (ਉੱਤਰ-ਪੂਰਬੀ) ਮਾਨਸੂਨ ਪੌਣਾਂ ਨਾਲ ਸਭ ਤੋਂ ਵੱਧ ਵਰਖਾ ਹੁੰਦੀ ਹੈ?',
      hi: 'जहाँ भारत के अधिकांश भाग में जून से सितंबर के बीच दक्षिण-पश्चिम मानसून से वर्षा होती है, वहीं भारत के किस राज्य के तट (कोरोमंडल तट) पर अक्टूबर–दिसंबर के दौरान बंगाल की खाड़ी से नमी ग्रहण करने वाली लौटती (उत्तर-पूर्वी) मानसून पवनों से सर्वाधिक वर्षा होती है?',
    },
    options: {
      A: {
        en: 'Kerala (Malabar Coast)',
        pa: 'ਕੇਰਲ (ਮਾਲਾਬਾਰ ਤੱਟ)',
        hi: 'केरल (मालाबार तट)',
      },
      B: {
        en: 'Goa and Maharashtra (Konkan Coast)',
        pa: 'ਗੋਆ ਅਤੇ ਮਹਾਰਾਸ਼ਟਰ (ਕੋਂਕਣ ਤੱਟ)',
        hi: 'गोवा और महाराष्ट्र (कोंकण तट)',
      },
      C: {
        en: 'Gujarat (Kathiawar Coast)',
        pa: 'ਗੁਜਰਾਤ (ਕਾਠੀਆਵਾੜ ਤੱਟ)',
        hi: 'गुजरात (काठियावाड़ तट)',
      },
      D: {
        en: 'Tamil Nadu (Coromandel Coast)',
        pa: 'ਤਮਿਲਨਾਡੂ (ਕੋਰੋਮੰਡਲ ਤੱਟ)',
        hi: 'तमिलनाडु (कोरोमंडल तट)',
      },
    },
    correct: 'D',
    explanation: {
      en: 'The Coromandel Coast of Tamil Nadu lies in the rain-shadow area of the Arabian Sea branch and runs parallel to the Bay of Bengal branch during the summer Southwest Monsoon. However, during October–December, the Retreating (Northeast) Monsoon winds blow over the Bay of Bengal, pick up moisture, and strike the Coromandel Coast of Tamil Nadu, giving winter rainfall.',
      pa: 'ਤਮਿਲਨਾਡੂ ਦਾ ਕੋਰੋਮੰਡਲ ਤੱਟ ਗਰਮੀਆਂ ਦੇ ਦੱਖਣ-ਪੱਛਮੀ ਮਾਨਸੂਨ ਦੌਰਾਨ ਵਰਖਾ-ਛਾਂ (Rain-shadow) ਖੇਤਰ ਵਿੱਚ ਪੈਂਦਾ ਹੈ, ਪਰ ਅਕਤੂਬਰ-ਦਸੰਬਰ ਦੌਰਾਨ ਪਰਤਦੇ ਮਾਨਸੂਨ (ਉੱਤਰ-ਪੂਰਬੀ ਮਾਨਸੂਨ) ਦੀਆਂ ਪੌਣਾਂ ਬੰਗਾਲ ਦੀ ਖਾੜੀ ਤੋਂ ਨਮੀ ਲੈ ਕੇ ਤਮਿਲਨਾਡੂ ਦੇ ਤੱਟ ਤੇ ਭਾਰੀ ਸਰਦ ਰੁੱਤ ਦੀ ਵਰਖਾ ਕਰਦੀਆਂ ਹਨ।',
      hi: 'तमिलनाडु का कोरोमंडल तट ग्रीष्मकालीन दक्षिण-पश्चिम मानसून के दौरान वृष्टि-छाया (Rain-shadow) क्षेत्र में पड़ता है, किंतु अक्टूबर–दिसंबर के दौरान लौटते मानसून (उत्तर-पूर्वी मानसून) की पवनें बंगाल की खाड़ी से नमी लेकर तमिलनाडु के कोरोमंडल तट पर भारी शीतकालीन वर्षा करती हैं।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-geo-17',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which of the following correctly classifies Indian agricultural crops into Kharif (Sauni / ਸੌਣੀ), Rabi (Haari / ਹਾੜ੍ਹੀ), and Zaid seasons?',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਵਿਕਲਪ ਭਾਰਤੀ ਖੇਤੀਬਾੜੀ ਦੀਆਂ ਫ਼ਸਲਾਂ ਨੂੰ ਸਾਉਣੀ (Kharif), ਹਾੜ੍ਹੀ (Rabi) ਅਤੇ ਜ਼ਾਇਦ (Zaid) ਰੁੱਤਾਂ ਵਿੱਚ ਸਹੀ ਰੂਪ ਵਿੱਚ ਵੰਡਦਾ ਹੈ?',
      hi: 'निम्नलिखित में से कौन-सा विकल्प भारतीय कृषि फसलों को खरीफ (साउनी), रबी (हाड़ी) और जायद ऋतुओं में सही रूप से वर्गीकृत करता है?',
    },
    options: {
      A: {
        en: 'Kharif (Sauni — June to Oct): Paddy (Rice), Cotton, Maize, Bajra, Groundnut; Rabi (Haari — Oct/Nov to March/April): Wheat, Gram (Chana), Barley, Mustard, Linseed; Zaid (April to June): Watermelon, Muskmelon, Cucumber, Fodder crops',
        pa: 'ਸਾਉਣੀ (Kharif — ਜੂਨ ਤੋਂ ਅਕਤੂਬਰ): ਝੋਨਾ (ਚੌਲ), ਕਪਾਹ/ਨਰਮਾ, ਮੱਕੀ, ਬਾਜਰਾ, ਮੂੰਗਫਲੀ; ਹਾੜ੍ਹੀ (Rabi — ਅਕਤੂਬਰ/ਨਵੰਬਰ ਤੋਂ ਮਾਰਚ/ਅਪ੍ਰੈਲ): ਕਣਕ, ਛੋਲੇ, ਜੌਂ, ਸਰ੍ਹੋਂ, ਅਲਸੀ; ਜ਼ਾਇਦ (ਅਪ੍ਰੈਲ ਤੋਂ ਜੂਨ): ਤਰਬੂਜ਼, ਖਰਬੂਜ਼ਾ, ਖੀਰਾ, ਚਾਰਾ ਫ਼ਸਲਾਂ',
        hi: 'खरीफ (साउनी — जून से अक्टूबर): धान (चावल), कपास, मक्का, बाजरा, मूंगफली; रबी (हाड़ी — अक्टूबर/नवंबर से मार्च/अप्रैल): गेहूं, चना, जौ, सरसों, अलसी; जायद (अप्रैल से जून): तरबूज, खरबूजा, खीरा, चारा फसलें',
      },
      B: {
        en: 'Kharif: Wheat, Mustard, Barley; Rabi: Paddy, Cotton, Maize; Zaid: Sugarcane and Tea',
        pa: 'ਸਾਉਣੀ: ਕਣਕ, ਸਰ੍ਹੋਂ, ਜੌਂ; ਹਾੜ੍ਹੀ: ਝੋਨਾ, ਕਪਾਹ, ਮੱਕੀ; ਜ਼ਾਇਦ: ਗੰਨਾ ਅਤੇ ਚਾਹ',
        hi: 'खरीफ: गेहूं, सरसों, जौ; रबी: धान, कपास, मक्का; जायद: गन्ना और चाय',
      },
      C: {
        en: 'Kharif: Gram, Peas, Mustard; Rabi: Jowar, Bajra, Tur (Arhar); Zaid: Wheat and Cotton',
        pa: 'ਸਾਉਣੀ: ਛੋਲੇ, ਮਟਰ, ਸਰ੍ਹੋਂ; ਹਾੜ੍ਹੀ: ਜਵਾਰ, ਬਾਜਰਾ, ਅਰਹਰ; ਜ਼ਾਇਦ: ਕਣਕ ਅਤੇ ਕਪਾਹ',
        hi: 'खरीफ: चना, मटर, सरसों; रबी: ज्वार, बाजरा, अरहर; जायद: गेहूं और कपास',
      },
      D: {
        en: 'Kharif: Barley and Linseed; Rabi: Groundnut and Jute; Zaid: Mustard and Gram',
        pa: 'ਸਾਉਣੀ: ਜੌਂ ਅਤੇ ਅਲਸੀ; ਹਾੜ੍ਹੀ: ਮੂੰਗਫਲੀ ਅਤੇ ਪਟਸਨ; ਜ਼ਾਇਦ: ਸਰ੍ਹੋਂ ਅਤੇ ਛੋਲੇ',
        hi: 'खरीफ: जौ और अलसी; रबी: मूंगफली और जूट; जायद: सरसों और चना',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Punjab and across northern India, Kharif (Sauni / ਸੌਣੀ) crops are sown with the onset of monsoon in June–July and harvested in Sept–Oct (Paddy, Cotton, Maize, Bajra, Jowar, Tur, Moong, Urad, Groundnut, Soybean). Rabi (Haari / ਹਾੜ੍ਹੀ) crops are sown in Oct–Nov and harvested in March–April (Wheat, Barley, Gram, Peas, Mustard, Linseed). Zaid is the short summer season between Rabi and Kharif (Watermelon, Muskmelon, Cucumber).',
      pa: 'ਪੰਜਾਬ ਵਿੱਚ ਸਾਉਣੀ (Kharif) ਦੀਆਂ ਫ਼ਸਲਾਂ ਜੂਨ-ਜੁਲਾਈ ਵਿੱਚ ਬੀਜੀਆਂ ਜਾਂਦੀਆਂ ਹਨ ਅਤੇ ਸਤੰਬਰ-ਅਕਤੂਬਰ ਵਿੱਚ ਵੱਢੀਆਂ ਜਾਂਦੀਆਂ ਹਨ (ਝੋਨਾ, ਨਰਮਾ/ਕਪਾਹ, ਮੱਕੀ, ਬਾਜਰਾ, ਮੂੰਗਫਲੀ)। ਹਾੜ੍ਹੀ (Rabi) ਦੀਆਂ ਫ਼ਸਲਾਂ ਅਕਤੂਬਰ-ਨਵੰਬਰ ਵਿੱਚ ਬੀਜੀਆਂ ਜਾਂਦੀਆਂ ਹਨ ਅਤੇ ਮਾਰਚ-ਅਪ੍ਰੈਲ ਵਿੱਚ ਵੱਢੀਆਂ ਜਾਂਦੀਆਂ ਹਨ (ਕਣਕ, ਜੌਂ, ਛੋਲੇ, ਸਰ੍ਹੋਂ, ਮਟਰ)।',
      hi: 'पंजाब और उत्तर भारत में खरीफ (साउनी) की फसलें जून-जुलाई में बोई जाती हैं और सितंबर-अक्टूबर में काटी जाती हैं (धान, कपास, मक्का, बाजरा, मूंगफली)। रबी (हाड़ी) की फसलें अक्टूबर-नवंबर में बोई जाती हैं और मार्च-अप्रैल में काटी जाती हैं (गेहूं, जौ, चना, सरसों, मटर)।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-geo-18',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which mineral-rich plateau covering Jharkhand, northern Odisha, and parts of West Bengal and Chhattisgarh is known as the "Ruhr of India" (or Mineral Heartland of India)?',
      pa: 'ਝਾਰਖੰਡ, ਉੱਤਰੀ ਉੜੀਸਾ ਅਤੇ ਪੱਛਮੀ ਬੰਗਾਲ ਤੇ ਛੱਤੀਸਗੜ੍ਹ ਦੇ ਹਿੱਸਿਆਂ ਵਿੱਚ ਫੈਲੇ ਖਣਿਜਾਂ ਨਾਲ ਭਰਪੂਰ ਕਿਸ ਪਠਾਰ ਨੂੰ "ਭਾਰਤ ਦਾ ਰੂਰ" (Ruhr of India) ਜਾਂ ਭਾਰਤ ਦਾ ਖਣਿਜ ਦਿਲ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
      hi: 'झारखंड, उत्तरी ओडिशा तथा पश्चिम बंगाल और छत्तीसगढ़ के कुछ हिस्सों में फैले खनिज-संपन्न किस पठार को "भारत का रूर" (Ruhr of India) कहा जाता है?',
    },
    options: {
      A: {
        en: 'Malwa Plateau',
        pa: 'ਮਾਲਵਾ ਪਠਾਰ',
        hi: 'मालवा का पठार',
      },
      B: {
        en: 'Chotanagpur Plateau',
        pa: 'ਛੋਟਾਨਾਗਪੁਰ ਪਠਾਰ',
        hi: 'छोटानागपुर का पठार',
      },
      C: {
        en: 'Bundelkhand Plateau',
        pa: 'ਬੁੰਦੇਲਖੰਡ ਪਠਾਰ',
        hi: 'बुंदेलखंड का पठार',
      },
      D: {
        en: 'Shillong (Karbi-Meghalaya) Plateau',
        pa: 'ਸ਼ਿਲਾਂਗ (ਕਾਰਬੀ-ਮੇਘਾਲਿਆ) ਪਠਾਰ',
        hi: 'शिलांग (कार्बी-मेघालय) का पठार',
      },
    },
    correct: 'B',
    explanation: {
      en: 'The Chotanagpur Plateau (drained by the Damodar, Subarnarekha, and Barakar rivers) is called the "Ruhr of India" because of its vast concentration of Gondwana coal (Jharia, Bokaro, Raniganj), iron ore (Singhbhum), mica (Koderma), bauxite, copper, and uranium (Jaduguda).',
      pa: 'ਛੋਟਾਨਾਗਪੁਰ ਦੇ ਪਠਾਰ (ਦਾਮੋਦਰ ਨਦੀ ਘਾਟੀ) ਨੂੰ ਕੋਲਾ (ਝਰੀਆ, ਬੋਕਾਰੋ, ਰਾਣੀਗੰਜ), ਲੋਹਾ (ਸਿੰਘਭੂਮ), ਅਬਰਕ (ਕੋਡਰਮਾ), ਬਾਕਸਾਈਟ, ਤਾਂਬਾ ਅਤੇ ਯੂਰੇਨੀਅਮ (ਜਾਦੂਗੁੜਾ) ਦੇ ਵਿਸ਼ਾਲ ਭੰਡਾਰਾਂ ਕਾਰਨ "ਭਾਰਤ ਦਾ ਰੂਰ" (Ruhr of India) ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
      hi: 'छोटानागपुर के पठार (दामोदर नदी घाटी) को कोयला (झरिया, बोकारो, रानीगंज), लौह अयस्क (सिंहभूम), अभ्रक (कोडरमा), बॉक्साइट, तांबा और यूरेनियम (जादूगुड़ा) के विशाल भंडारों के कारण "भारत का रूर" (Ruhr of India) कहा जाता है।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-geo-19',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which of the following pairs of major mineral mines in India and the mineral extracted from them is correctly matched?',
      pa: 'ਭਾਰਤ ਦੀਆਂ ਪ੍ਰਮੁੱਖ ਖਣਿਜ ਖਾਣਾਂ ਅਤੇ ਉਹਨਾਂ ਵਿੱਚੋਂ ਕੱਢੇ ਜਾਣ ਵਾਲੇ ਖਣਿਜਾਂ ਦੇ ਹੇਠ ਲਿਖੇ ਜੋੜਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਸਹੀ ਸੁਮੇਲ ਖਾਂਦਾ ਹੈ?',
      hi: 'भारत की प्रमुख खनिज खदानों और उनसे निकाले जाने वाले खनिजों के निम्नलिखित युग्मों में से कौन-सा सही सुमेलित है?',
    },
    options: {
      A: {
        en: 'Khetri (Rajasthan): Iron Ore; Bailadila (Chhattisgarh): Gold; Kolar (Karnataka): Copper',
        pa: 'ਖੇਤੜੀ (ਰਾਜਸਥਾਨ): ਲੋਹਾ; ਬੈਲਾਡਿਲਾ (ਛੱਤੀਸਗੜ੍ਹ): ਸੋਨਾ; ਕੋਲਾਰ (ਕਰਨਾਟਕ): ਤਾਂਬਾ',
        hi: 'खेतड़ी (राजस्थान): लौह अयस्क; बैलाडिला (छत्तीसगढ़): सोना; कोलार (कर्नाटक): तांबा',
      },
      B: {
        en: 'Jaduguda (Jharkhand): Diamond; Panna (Madhya Pradesh): Uranium; Digboi (Assam): Bauxite',
        pa: 'ਜਾਦੂਗੁੜਾ (ਝਾਰਖੰਡ): ਹੀਰਾ; ਪੰਨਾ (ਮੱਧ ਪ੍ਰਦੇਸ਼): ਯੂਰੇਨੀਅਮ; ਡਿਗਬੋਈ (ਅਸਾਮ): ਬਾਕਸਾਈਟ',
        hi: 'जादूगुड़ा (झारखंड): हीरा; पन्ना (मध्य प्रदेश): यूरेनियम; डिगबोई (असम): बॉक्साइट',
      },
      C: {
        en: 'Khetri & Malanjkhand: Copper; Bailadila (Chhattisgarh) & Kudremukh (Karnataka): Iron Ore; Jaduguda (Jharkhand): Uranium; Panchpatmali (Koraput, Odisha): Bauxite',
        pa: 'ਖੇਤੜੀ (ਰਾਜਸਥਾਨ) ਅਤੇ ਮਲਾਂਜਖੰਡ (ਮੱਧ ਪ੍ਰਦੇਸ਼): ਤਾਂਬਾ; ਬੈਲਾਡਿਲਾ (ਛੱਤੀਸਗੜ੍ਹ) ਅਤੇ ਕੁਦਰੇਮੁਖ (ਕਰਨਾਟਕ): ਲੋਹਾ (Iron Ore); ਜਾਦੂਗੁੜਾ (ਝਾਰਖੰਡ): ਯੂਰੇਨੀਅਮ; ਪੰਚਪਤਮਾਲੀ (ਕੋਰਾਪੁਟ, ਉੜੀਸਾ): ਬਾਕਸਾਈਟ',
        hi: 'खेतड़ी (राजस्थान) और मलांजखंड (मध्य प्रदेश): तांबा; बैलाडिला (छत्तीसगढ़) और कुद्रेमुख (कर्नाटक): लौह अयस्क; जादूगुड़ा (झारखंड): यूरेनियम; पंचपतमाली (कोरापुट, ओडिशा): बॉक्साइट',
      },
      D: {
        en: 'Neyveli (Tamil Nadu): Gold; Jharia (Jharkhand): Petroleum; Mumbai High: Anthracite Coal',
        pa: 'ਨੇਵੇਲੀ (ਤਮਿਲਨਾਡੂ): ਸੋਨਾ; ਝਰੀਆ (ਝਾਰਖੰਡ): ਪੈਟਰੋਲੀਅਮ; ਮੁੰਬਈ ਹਾਈ: ਐਂਥਰਾਸਾਈਟ ਕੋਲਾ',
        hi: 'नेवेली (तमिलनाडु): सोना; झरिया (झारखंड): पेट्रोलियम; मुंबई हाई: एंथ्रेसाइट कोयला',
      },
    },
    correct: 'C',
    explanation: {
      en: 'Khetri (Rajasthan) and Malanjkhand (MP) are famous for Copper; Bailadila (Chhattisgarh), Mayurbhanj/Keonjhar (Odisha), and Kudremukh/Ballari (Karnataka) for Iron Ore; Jaduguda (Jharkhand) and Tummalapalle (AP) for Uranium; Panchpatmali in Koraput (Odisha) for Bauxite (Odisha is India’s largest Bauxite producer); Panna (MP) for Diamonds; Kolar & Hutti (Karnataka) for Gold; and Neyveli (Tamil Nadu) for Lignite coal.',
      pa: 'ਖੇਤੜੀ (ਰਾਜਸਥਾਨ) ਅਤੇ ਮਲਾਂਜਖੰਡ (ਮੱਧ ਪ੍ਰਦੇਸ਼) ਤਾਂਬੇ ਲਈ; ਬੈਲਾਡਿਲਾ (ਛੱਤੀਸਗੜ੍ਹ) ਅਤੇ ਕੁਦਰੇਮੁਖ (ਕਰਨਾਟਕ) ਲੋਹੇ ਲਈ; ਜਾਦੂਗੁੜਾ (ਝਾਰਖੰਡ) ਯੂਰੇਨੀਅਮ ਲਈ; ਪੰਚਪਤਮਾਲੀ (ਕੋਰਾਪੁਟ, ਉੜੀਸਾ) ਬਾਕਸਾਈਟ ਲਈ; ਪੰਨਾ (ਮੱਧ ਪ੍ਰਦੇਸ਼) ਹੀਰੇ ਲਈ ਅਤੇ ਨੇਵੇਲੀ (ਤਮਿਲਨਾਡੂ) ਲਿਗਨਾਈਟ ਕੋਲੇ ਲਈ ਪ੍ਰਸਿੱਧ ਹਨ।',
      hi: 'खेतड़ी (राजस्थान) और मलांजखंड (मध्य प्रदेश) तांबे के लिए; बैलाडिला (छत्तीसगढ़) और कुद्रेमुख (कर्नाटक) लौह अयस्क के लिए; जादूगुड़ा (झारखंड) यूरेनियम के लिए; पंचपतमाली (कोरापुट, ओडिशा) बॉक्साइट के लिए; पन्ना (मध्य प्रदेश) हीरे के लिए और नेवेली (तमिलनाडु) लिग्नाइट कोयले के लिए प्रसिद्ध हैं।',
    },
    difficulty: 'hard',
  },
  {
    id: 'q-ppsc-clk-geo-20',
    topicId: 'physical-geography',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which seasonal river enters Punjab near Mubarakpur (SAS Nagar / Mohali), flows along the southern border of Patiala, Sangrur, and Mansa districts before entering Rajasthan’s Hanumangarh district, and is often called the "Sorrow of Southern Malwa" during monsoon floods?',
      pa: 'ਕਿਹੜੀ ਮੌਸਮੀ ਨਦੀ ਮੁਬਾਰਕਪੁਰ (ਮੋਹਾਲੀ / ਐੱਸ.ਏ.ਐੱਸ. ਨਗਰ) ਨੇੜੇ ਪੰਜਾਬ ਵਿੱਚ ਪ੍ਰਵੇਸ਼ ਕਰਦੀ ਹੈ, ਪਟਿਆਲਾ, ਸੰਗਰੂਰ ਅਤੇ ਮਾਨਸਾ ਜ਼ਿਲ੍ਹਿਆਂ ਦੇ ਦੱਖਣੀ ਹਿੱਸੇ ਵਿੱਚੋਂ ਵਗਦੀ ਹੋਈ ਰਾਜਸਥਾਨ ਦੇ ਹਨੂੰਮਾਨਗੜ੍ਹ ਵਿੱਚ ਜਾਂਦੀ ਹੈ ਅਤੇ ਮਾਨਸੂਨ ਦੇ ਹੜ੍ਹਾਂ ਕਾਰਨ ਦੱਖਣੀ ਮਾਲਵੇ ਵਿੱਚ ਤਬਾਹੀ ਮਚਾਉਂਦੀ ਹੈ?',
      hi: 'कौन-सी मौसमी नदी मुबारकपुर (मोहाली / एस.ए.एस. नगर) के पास पंजाब में प्रवेश करती है, पटियाला, संगरूर और मानसा जिलों के दक्षिणी भाग से बहती हुई राजस्थान के हनुमानगढ़ में प्रवेश करती है और मानसूनी बाढ़ के कारण दक्षिणी मालवा में तबाही मचाती है?',
    },
    options: {
      A: {
        en: 'Kali Bein',
        pa: 'ਕਾਲੀ ਵੇਈਂ',
        hi: 'काली बेईं',
      },
      B: {
        en: 'Sakki Kiran Nala',
        pa: 'ਸੱਕੀ ਕਿਰਨ ਨਾਲਾ',
        hi: 'सक्की किरन नाला',
      },
      C: {
        en: 'Chakki River',
        pa: 'ਚੱਕੀ ਖੱਡ / ਨਦੀ',
        hi: 'चक्की नदी',
      },
      D: {
        en: 'Ghaggar River',
        pa: 'ਘੱਗਰ ਨਦੀ',
        hi: 'घग्गर नदी',
      },
    },
    correct: 'D',
    explanation: {
      en: 'The Ghaggar is an inland-draining seasonal river originating in the Dagshai hills of the Shiwalik range (Sirmaur district, Himachal Pradesh). It enters Punjab near Mubarakpur (Mohali), flows through Patiala, Sangrur, and Mansa (along with Haryana) before disappearing in the Thar Desert beyond Hanumangarh (Rajasthan). Kali Bein flows in Doaba, Chakki is a tributary of the Beas in Pathankot, and Sakki Kiran Nala is a tributary of the Ravi in Majha.',
      pa: 'ਘੱਗਰ ਨਦੀ ਹਿਮਾਚਲ ਪ੍ਰਦੇਸ਼ ਦੀਆਂ ਸ਼ਿਵਾਲਿਕ ਪਹਾੜੀਆਂ (ਡਗਸ਼ਈ) ਤੋਂ ਨਿਕਲਣ ਵਾਲੀ ਇੱਕ ਮੌਸਮੀ ਨਦੀ ਹੈ ਜੋ ਮੁਬਾਰਕਪੁਰ (ਮੋਹਾਲੀ) ਨੇੜੇ ਪੰਜਾਬ ਵਿੱਚ ਦਾਖਲ ਹੋ ਕੇ ਪਟਿਆਲਾ, ਸੰਗਰੂਰ ਅਤੇ ਮਾਨਸਾ ਜ਼ਿਲ੍ਹਿਆਂ ਵਿੱਚੋਂ ਲੰਘਦੀ ਹੋਈ ਰਾਜਸਥਾਨ ਦੇ ਥਾਰ ਮਾਰੂਥਲ ਵਿੱਚ ਲੁਪਤ ਹੋ ਜਾਂਦੀ ਹੈ।',
      hi: 'घग्गर नदी हिमाचल प्रदेश की शिवालिक पहाड़ियों (डगशाई) से निकलने वाली एक मौसमी नदी है जो मुबारकपुर (मोहाली) के पास पंजाब में प्रवेश कर पटियाला, संगरूर और मानसा जिलों से बहती हुई राजस्थान के थार मरुस्थल में लुप्त हो जाती है।',
    },
    difficulty: 'hard',
  },

  // ===========================================================================
  // 4. ENVIRONMENT, ECOLOGY & BIODIVERSITY (topicId: 'sst-geo-environment') — 20 MCQs
  // ===========================================================================
  {
    id: 'q-ppsc-clk-env-1',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'According to Raymond Lindeman’s Ten Percent Law (1942) of energy flow in an ecosystem, why is the Pyramid of Energy always upright, and how much energy reaches the tertiary consumer if producers trap 10,000 Joules of solar energy to form net primary productivity?',
      pa: 'ਰੇਮੰਡ ਲਿੰਡੇਮੈਨ ਦੇ ਊਰਜਾ ਪ੍ਰਵਾਹ ਦੇ "ਦਸ ਪ੍ਰਤੀਸ਼ਤ ਨਿਯਮ" (1942) ਅਨੁਸਾਰ, ਕਿਸੇ ਪਰਿਸਥਿਤੀ ਤੰਤਰ ਵਿੱਚ ਊਰਜਾ ਦਾ ਪਿਰਾਮਿਡ ਹਮੇਸ਼ਾ ਸਿੱਧਾ (upright) ਕਿਉਂ ਹੁੰਦਾ ਹੈ, ਅਤੇ ਜੇਕਰ ਉਤਪਾਦਕ (ਪੌਦੇ) 10,000 ਜੂਲ ਭੋਜਨ ਊਰਜਾ ਤਿਆਰ ਕਰਦੇ ਹਨ ਤਾਂ ਤੀਜੇ ਦਰਜੇ ਦੇ ਖਪਤਕਾਰ (Tertiary Consumer) ਤੱਕ ਕਿੰਨੀ ਊਰਜਾ ਪਹੁੰਚੇਗੀ?',
      hi: 'रेमंड लिंडेमान के ऊर्जा प्रवाह के "दस प्रतिशत नियम" (1942) के अनुसार, किसी पारिस्थितिकी तंत्र में ऊर्जा का पिरामिड सदैव सीधा (upright) क्यों होता है, और यदि उत्पादक (पौधे) 10,000 जूल खाद्य ऊर्जा संचित करते हैं तो तृतीयक उपभोक्ता (Tertiary Consumer) तक कितनी ऊर्जा पहुँचेगी?',
    },
    options: {
      A: {
        en: 'Because only 10% of energy is transferred to each successive trophic level while 90% is lost as metabolic heat; 10 Joules reach the tertiary consumer (10,000 J -> 1,000 J -> 100 J -> 10 J)',
        pa: 'ਕਿਉਂਕਿ ਹਰੇਕ ਅਗਲੇ ਪੋਸ਼ਣ ਪੱਧਰ (Trophic Level) ਤੇ ਸਿਰਫ਼ 10% ਊਰਜਾ ਹੀ ਟ੍ਰਾਂਸਫਰ ਹੁੰਦੀ ਹੈ ਅਤੇ 90% ਤਾਪ ਵਜੋਂ ਖ਼ਰਚ ਹੋ ਜਾਂਦੀ ਹੈ; ਤੀਜੇ ਦਰਜੇ ਦੇ ਖਪਤਕਾਰ ਤੱਕ 10 ਜੂਲ ਊਰਜਾ ਪਹੁੰਚੇਗੀ (10,000 J -> 1,000 J -> 100 J -> 10 J)',
        hi: 'क्योंकि प्रत्येक अगले पोषण स्तर (Trophic Level) पर केवल 10% ऊर्जा ही स्थानांतरित होती है और 90% ऊष्मा के रूप में क्षय हो जाती है; तृतीयक उपभोक्ता तक 10 जूल ऊर्जा पहुँचेगी (10,000 J -> 1,000 J -> 100 J -> 10 J)',
      },
      B: {
        en: 'Because 90% of energy is transferred upward; 1,000 Joules reach the tertiary consumer',
        pa: 'ਕਿਉਂਕਿ 90% ਊਰਜਾ ਅਗਲੇ ਪੱਧਰ ਤੇ ਜਾਂਦੀ ਹੈ; ਤੀਜੇ ਦਰਜੇ ਦੇ ਖਪਤਕਾਰ ਤੱਕ 1,000 ਜੂਲ ਊਰਜਾ ਪਹੁੰਚੇਗੀ',
        hi: 'क्योंकि 90% ऊर्जा अगले स्तर पर जाती है; तृतीयक उपभोक्ता तक 1,000 जूल ऊर्जा पहुँचेगी',
      },
      C: {
        en: 'Because energy flow is bidirectional; 100 Joules reach the tertiary consumer',
        pa: 'ਕਿਉਂਕਿ ਊਰਜਾ ਦਾ ਪ੍ਰਵਾਹ ਦੋ-ਦਿਸ਼ਾਵੀ ਹੁੰਦਾ ਹੈ; ਤੀਜੇ ਦਰਜੇ ਦੇ ਖਪਤਕਾਰ ਤੱਕ 100 ਜੂਲ ਊਰਜਾ ਪਹੁੰਚੇਗੀ',
        hi: 'क्योंकि ऊर्जा का प्रवाह द्वि-दिशात्मक होता है; तृतीयक उपभोक्ता तक 100 जूल ऊर्जा पहुँचेगी',
      },
      D: {
        en: 'Because decomposers return 100% of energy to producers; 1 Joule reaches the tertiary consumer',
        pa: 'ਕਿਉਂਕਿ ਨਿਖੇੜਕ 100% ਊਰਜਾ ਉਤਪਾਦਕਾਂ ਨੂੰ ਵਾਪਸ ਕਰ ਦਿੰਦੇ ਹਨ; 1 ਜੂਲ ਊਰਜਾ ਪਹੁੰਚੇਗੀ',
        hi: 'क्योंकि अपघटक 100% ऊर्जा उत्पादकों को लौटा देते हैं; 1 जूल ऊर्जा पहुँचेगी',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Energy flow in an ecosystem is strictly unidirectional and obeys Lindeman’s 10% Law: only 10% of organic energy is transferred from one trophic level to the next, while 90% is lost in respiration/heat. Thus, from Producers (T1 = 10,000 J) -> Primary Consumers/Herbivores (T2 = 1,000 J) -> Secondary Consumers (T3 = 100 J) -> Tertiary Consumers (T4 = 10 J). Hence, the Pyramid of Energy is NEVER inverted.',
      pa: 'ਪਰਿਸਥਿਤੀ ਤੰਤਰ ਵਿੱਚ ਊਰਜਾ ਦਾ ਪ੍ਰਵਾਹ ਹਮੇਸ਼ਾ ਇੱਕ-ਦਿਸ਼ਾਵੀ ਹੁੰਦਾ ਹੈ ਅਤੇ ਲਿੰਡੇਮੈਨ ਦੇ 10% ਨਿਯਮ ਅਨੁਸਾਰ ਹਰੇਕ ਅਗਲੇ ਪੋਸ਼ਣ ਪੱਧਰ ਤੇ ਸਿਰਫ਼ 10% ਊਰਜਾ ਪਹੁੰਚਦੀ ਹੈ: ਉਤਪਾਦਕ (10,000 J) -> ਪ੍ਰਾਇਮਰੀ ਖਪਤਕਾਰ (1,000 J) -> ਸੈਕੰਡਰੀ ਖਪਤਕਾਰ (100 J) -> ਤੀਜੇ ਦਰਜੇ ਦੇ ਖਪਤਕਾਰ (10 J)। ਇਸੇ ਕਾਰਨ ਊਰਜਾ ਦਾ ਪਿਰਾਮਿਡ ਹਮੇਸ਼ਾ ਸਿੱਧਾ (Upright) ਹੁੰਦਾ ਹੈ।',
      hi: 'पारिस्थितिकी तंत्र में ऊर्जा का प्रवाह सदैव एकदिशीय होता है और लिंडेमान के 10% नियम के अनुसार प्रत्येक अगले पोषण स्तर पर केवल 10% ऊर्जा पहुँचती है: उत्पादक (10,000 J) -> प्राथमिक उपभोक्ता (1,000 J) -> द्वितीयक उपभोक्ता (100 J) -> तृतीयक उपभोक्ता (10 J)। इसीलिए ऊर्जा का पिरामिड सदैव सीधा (Upright) होता है।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-env-2',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'In the biogeochemical Nitrogen Cycle, which bacteria are respectively responsible for (i) symbiotic nitrogen fixation in legume root nodules, (ii) oxidation of ammonia to nitrites and nitrates (nitrification), and (iii) reduction of nitrates back to atmospheric nitrogen gas (denitrification)?',
      pa: 'ਨਾਈਟ੍ਰੋਜਨ ਚੱਕਰ (Nitrogen Cycle) ਵਿੱਚ ਕ੍ਰਮਵਾਰ (i) ਫਲੀਦਾਰ ਪੌਦਿਆਂ ਦੀਆਂ ਜੜ੍ਹਾਂ ਦੀਆਂ ਗੰਢਾਂ ਵਿੱਚ ਸਹਿਜੀਵੀ ਨਾਈਟ੍ਰੋਜਨ ਸਥਿਰੀਕਰਨ, (ii) ਅਮੋਨੀਆ ਨੂੰ ਨਾਈਟ੍ਰਾਈਟ ਤੇ ਨਾਈਟ੍ਰੇਟ ਵਿੱਚ ਬਦਲਣ (Nitrification), ਅਤੇ (iii) ਨਾਈਟ੍ਰੇਟ ਨੂੰ ਵਾਪਸ ਨਾਈਟ੍ਰੋਜਨ ਗੈਸ ਵਿੱਚ ਬਦਲਣ (Denitrification) ਲਈ ਕਿਹੜੇ ਜੀਵਾਣੂ (ਬੈਕਟੀਰੀਆ) ਜ਼ਿੰਮੇਵਾਰ ਹਨ?',
      hi: 'नाइट्रोजन चक्र (Nitrogen Cycle) में क्रमशः (i) फलीदार पौधों की जड़ों की ग्रंथियों में सहजीवी नाइट्रोजन स्थिरीकरण, (ii) अमोनिया को नाइट्राइट व नाइट्रेट में बदलने (Nitrification), तथा (iii) नाइट्रेट को वापस वायुमंडलीय नाइट्रोजन गैस में बदलने (Denitrification) के लिए कौन-से जीवाणु जिम्मेदार हैं?',
    },
    options: {
      A: {
        en: '(i) Pseudomonas; (ii) Rhizobium; (iii) Azotobacter',
        pa: '(i) ਸੂਡੋਮੋਨਾਸ; (ii) ਰਾਈਜ਼ੋਬੀਅਮ; (iii) ਐਜ਼ੋਟੋਬੈਕਟਰ',
        hi: '(i) स्यूडोमोनास; (ii) राइजोबियम; (iii) एजोटोबैक्टर',
      },
      B: {
        en: '(i) Rhizobium; (ii) Nitrosomonas and Nitrobacter; (iii) Pseudomonas and Thiobacillus',
        pa: '(i) ਰਾਈਜ਼ੋਬੀਅਮ; (ii) ਨਾਈਟ੍ਰੋਸੋਮੋਨਾਸ ਅਤੇ ਨਾਈਟ੍ਰੋਬੈਕਟਰ; (iii) ਸੂਡੋਮੋਨਾਸ ਅਤੇ ਥਾਇਓਬੈਸੀਲਸ',
        hi: '(i) राइजोबियम; (ii) नाइट्रोसोमोनास और नाइट्रोबैक्टर; (iii) स्यूडोमोनास और थायोबैसिलस',
      },
      C: {
        en: '(i) Nitrobacter; (ii) Clostridium; (iii) Anabaena',
        pa: '(i) ਨਾਈਟ੍ਰੋਬੈਕਟਰ; (ii) ਕਲੋਸਟ੍ਰੀਡੀਅਮ; (iii) ਐਨਾਬੀਨਾ',
        hi: '(i) नाइट्रोबैक्टर; (ii) क्लोस्ट्रीडियम; (iii) एनाबीना',
      },
      D: {
        en: '(i) Lactobacillus; (ii) Methanobacterium; (iii) Escherichia coli',
        pa: '(i) ਲੈਕਟੋਬੈਸੀਲਸ; (ii) ਮਿਥੈਨੋਬੈਕਟੀਰੀਅਮ; (iii) ਈ. ਕੋਲਾਈ',
        hi: '(i) लैक्टोबैसिलस; (ii) मिथेनोबैक्टीरियम; (iii) ई. कोलाई',
      },
    },
    correct: 'B',
    explanation: {
      en: 'In the Nitrogen Cycle: (1) Rhizobium fixes atmospheric N2 symbiotically in root nodules of leguminous plants (while Azotobacter, Clostridium, Anabaena, and Nostoc are free-living/cyanobacterial fixers); (2) Nitrosomonas oxidizes ammonia to nitrite (NO2-) and Nitrobacter oxidizes nitrite to nitrate (NO3-); and (3) Pseudomonas and Thiobacillus carry out denitrification, converting nitrates back to N2 gas.',
      pa: 'ਨਾਈਟ੍ਰੋਜਨ ਚੱਕਰ ਵਿੱਚ: (1) ਰਾਈਜ਼ੋਬੀਅਮ ਫਲੀਦਾਰ ਪੌਦਿਆਂ ਦੀਆਂ ਜੜ੍ਹਾਂ ਵਿੱਚ ਸਹਿਜੀਵੀ ਨਾਈਟ੍ਰੋਜਨ ਸਥਿਰੀਕਰਨ ਕਰਦਾ ਹੈ; (2) ਨਾਈਟ੍ਰੋਸੋਮੋਨਾਸ ਅਮੋਨੀਆ ਨੂੰ ਨਾਈਟ੍ਰਾਈਟ ਵਿੱਚ ਅਤੇ ਨਾਈਟ੍ਰੋਬੈਕਟਰ ਨਾਈਟ੍ਰਾਈਟ ਨੂੰ ਨਾਈਟ੍ਰੇਟ ਵਿੱਚ ਬਦਲਦਾ ਹੈ; ਅਤੇ (3) ਸੂਡੋਮੋਨਾਸ ਅਤੇ ਥਾਇਓਬੈਸੀਲਸ ਡੀਨਾਈਟ੍ਰੀਫਿਕੇਸ਼ਨ ਰਾਹੀਂ ਨਾਈਟ੍ਰੇਟ ਨੂੰ ਵਾਪਸ ਨਾਈਟ੍ਰੋਜਨ ਗੈਸ ਵਿੱਚ ਬਦਲਦੇ ਹਨ।',
      hi: 'नाइट्रोजन चक्र में: (1) राइजोबियम फलीदार पौधों की जड़ों में सहजीवी नाइट्रोजन स्थिरीकरण करता है; (2) नाइट्रोसोमोनास अमोनिया को नाइट्राइट में और नाइट्रोबैक्टर नाइट्राइट को नाइट्रेट में बदलता है; तथा (3) स्यूडोमोनास और थायोबैसिलस विनाइट्रीकरण (Denitrification) द्वारा नाइट्रेट को वापस नाइट्रोजन गैस में बदलते हैं।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-env-3',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Among the six Kyoto Protocol greenhouse gases, which gas contributes the largest share to total anthropogenic radiative forcing (due to its massive emission volume), and which synthetic gas has the highest 100-year Global Warming Potential (GWP) per molecule?',
      pa: 'ਕਿਓਟੋ ਪ੍ਰੋਟੋਕੋਲ ਦੀਆਂ ਛੇ ਗ੍ਰੀਨਹਾਊਸ ਗੈਸਾਂ ਵਿੱਚੋਂ, ਕਿਹੜੀ ਗੈਸ ਮਨੁੱਖੀ ਗਤੀਵਿਧੀਆਂ ਰਾਹੀਂ ਕੁੱਲ ਆਲਮੀ ਤਪਸ਼ (Global Warming) ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਪ੍ਰਤੀਸ਼ਤ ਯੋਗਦਾਨ ਪਾਉਂਦੀ ਹੈ, ਅਤੇ ਕਿਸ ਗੈਸ ਦੀ ਪ੍ਰਤੀ ਅਣੂ ਗਲੋਬਲ ਵਾਰਮਿੰਗ ਸਮਰੱਥਾ (GWP) ਸਭ ਤੋਂ ਵੱਧ ਹੈ?',
      hi: 'क्योटो प्रोटोकॉल की छह ग्रीनहाउस गैसों में से, कौन-सी गैस मानवीय गतिविधियों से कुल वैश्विक तापन (Global Warming) में सर्वाधिक प्रतिशत योगदान देती है, और किस सिंथेटिक गैस की प्रति अणु ग्लोबल वार्मिंग क्षमता (GWP) सर्वाधिक है?',
    },
    options: {
      A: {
        en: 'Methane (CH4) and Nitrous Oxide (N2O)',
        pa: 'ਮੀਥੇਨ (CH4) ਅਤੇ ਨਾਈਟ੍ਰਸ ਆਕਸਾਈਡ (N2O)',
        hi: 'मीथेन (CH4) और नाइट्रस ऑक्साइड (N2O)',
      },
      B: {
        en: 'Ozone (O3) and Carbon Monoxide (CO)',
        pa: 'ਓਜ਼ੋਨ (O3) ਅਤੇ ਕਾਰਬਨ ਮੋਨੋਆਕਸਾਈਡ (CO)',
        hi: 'ओजोन (O3) और कार्बन मोनोऑक्साइड (CO)',
      },
      C: {
        en: 'Carbon Dioxide (CO2 — largest share ~60–75% of anthropogenic warming) and Sulphur Hexafluoride (SF6 — highest GWP ~23,500 times CO2)',
        pa: 'ਕਾਰਬਨ ਡਾਈਆਕਸਾਈਡ (CO2 — ਕੁੱਲ ਮਨੁੱਖੀ ਤਪਸ਼ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ~60–75% ਹਿੱਸਾ) ਅਤੇ ਸਲਫ਼ਰ ਹੈਕਸਾਫਲੋਰਾਈਡ (SF6 — ਸਭ ਤੋਂ ਵੱਧ GWP, CO2 ਨਾਲੋਂ ~23,500 ਗੁਣਾ ਵੱਧ)',
        hi: 'कार्बन डाइऑक्साइड (CO2 — कुल मानवीय तापन में सर्वाधिक ~60–75% हिस्सा) और सल्फर हेक्साफ्लोराइड (SF6 — सर्वाधिक GWP, CO2 से ~23,500 गुना अधिक)',
      },
      D: {
        en: 'Sulphur Dioxide (SO2) and Nitrogen Dioxide (NO2)',
        pa: 'ਸਲਫ਼ਰ ਡਾਈਆਕਸਾਈਡ (SO2) ਅਤੇ ਨਾਈਟ੍ਰੋਜਨ ਡਾਈਆਕਸਾਈਡ (NO2)',
        hi: 'सल्फर डाइऑक्साइड (SO2) और नाइट्रोजन डाइऑक्साइड (NO2)',
      },
    },
    correct: 'C',
    explanation: {
      en: 'While water vapour is the most abundant natural greenhouse gas, Carbon Dioxide (CO2, baseline GWP = 1) accounts for the largest share (~60–75%) of anthropogenic global warming, followed by Methane (CH4, ~16–20%, GWP ~28) and Nitrous Oxide (N2O, ~6%, GWP ~265). Per unit mass, Sulphur Hexafluoride (SF6, used in electrical switchgear) has the highest GWP (~22,800–23,500 times that of CO2) and an atmospheric lifetime of 3,200 years.',
      pa: 'ਮਨੁੱਖੀ ਗਤੀਵਿਧੀਆਂ ਰਾਹੀਂ ਹੋਣ ਵਾਲੀ ਗਲੋਬਲ ਵਾਰਮਿੰਗ ਵਿੱਚ ਕਾਰਬਨ ਡਾਈਆਕਸਾਈਡ (CO2, ਅਧਾਰ GWP = 1) ਦਾ ਯੋਗਦਾਨ ਸਭ ਤੋਂ ਵੱਧ (~60-75%) ਹੈ, ਜਿਸ ਤੋਂ ਬਾਅਦ ਮੀਥੇਨ (CH4) ਅਤੇ ਨਾਈਟ੍ਰਸ ਆਕਸਾਈਡ (N2O) ਆਉਂਦੀਆਂ ਹਨ। ਪ੍ਰਤੀ ਅਣੂ ਤਾਪ ਸੋਖਣ ਦੀ ਸਮਰੱਥਾ (GWP) ਸਲਫ਼ਰ ਹੈਕਸਾਫਲੋਰਾਈਡ (SF6) ਦੀ ਸਭ ਤੋਂ ਵੱਧ (CO2 ਨਾਲੋਂ ਲਗਭਗ 23,500 ਗੁਣਾ) ਹੈ।',
      hi: 'मानवीय गतिविधियों से होने वाली ग्लोबल वार्मिंग में कार्बन डाइऑक्साइड (CO2, आधार GWP = 1) का योगदान सर्वाधिक (~60-75%) है, जिसके बाद मीथेन (CH4) और नाइट्रस ऑक्साइड (N2O) का स्थान है। प्रति इकाई द्रव्यमान ग्लोबल वार्मिंग क्षमता (GWP) सल्फर हेक्साफ्लोराइड (SF6) की सर्वाधिक (CO2 से लगभग 23,500 गुना) है।',
    },
    difficulty: 'hard',
  },
  {
    id: 'q-ppsc-clk-env-4',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'In which atmospheric layer is the protective Ozone Layer (measured in Dobson Units) concentrated, which international treaty signed on 16 September 1987 phased out Ozone Depleting Substances (CFCs/Halons), and which later amendment (2016) mandated the phase-down of Hydrofluorocarbons (HFCs)?',
      pa: 'ਵਾਯੂਮੰਡਲ ਦੀ ਕਿਸ ਪਰਤ ਵਿੱਚ ਸੁਰੱਖਿਆਤਮਕ ਓਜ਼ੋਨ ਪਰਤ (ਜਿਸ ਨੂੰ ਡੌਬਸਨ ਯੂਨਿਟ ਵਿੱਚ ਮਾਪਿਆ ਜਾਂਦਾ ਹੈ) ਪਾਈ ਜਾਂਦੀ ਹੈ, 16 ਸਤੰਬਰ 1987 ਨੂੰ ਸਹੀਬੰਦ ਹੋਈ ਕਿਸ ਅੰਤਰਰਾਸ਼ਟਰੀ ਸੰਧੀ ਨੇ ਓਜ਼ੋਨ ਨੂੰ ਨੁਕਸਾਨ ਪਹੁੰਚਾਉਣ ਵਾਲੇ ਪਦਾਰਥਾਂ (CFCs) ਤੇ ਰੋਕ ਲਗਾਈ, ਅਤੇ 2016 ਦੀ ਕਿਸ ਸੋਧ ਨੇ HFCs ਨੂੰ ਘਟਾਉਣ ਦਾ ਟੀਚਾ ਰੱਖਿਆ?',
      hi: 'वायुमंडल की किस परत में सुरक्षात्मक ओजोन परत (जिसे डॉब्सन इकाई में मापा जाता है) केंद्रित है, 16 सितंबर 1987 को हस्ताक्षरित किस अंतर्राष्ट्रीय संधि ने ओजोन क्षयकारी पदार्थों (CFCs) को चरणबद्ध रूप से समाप्त किया, और 2016 के किस संशोधन ने हाइड्रोफ्लोरोकार्बन (HFCs) को घटाने का प्रावधान किया?',
    },
    options: {
      A: {
        en: 'Troposphere; Stockholm Convention (2001); Basel Amendment',
        pa: 'ਟ੍ਰੋਪੋਸਫੀਅਰ; ਸਟਾਕਹੋਮ ਕਨਵੈਨਸ਼ਨ (2001); ਬੇਸਲ ਸੋਧ',
        hi: 'क्षोभमंडल; स्टॉकहोम कन्वेंशन (2001); बेसल संशोधन',
      },
      B: {
        en: 'Mesosphere; Cartagena Protocol (2000); Nagoya Amendment',
        pa: 'ਮੈਸੋਸਫੀਅਰ; ਕਾਰਟਾਜੇਨਾ ਪ੍ਰੋਟੋਕੋਲ (2000); ਨਾਗੋਯਾ ਸੋਧ',
        hi: 'मध्यमंडल; कार्टाजेना प्रोटोकॉल (2000); नागोया संशोधन',
      },
      C: {
        en: 'Thermosphere; Minamata Convention (2013); Doha Amendment',
        pa: 'ਥਰਮੋਸਫੀਅਰ; ਮਿਨਾਮਾਤਾ ਕਨਵੈਨਸ਼ਨ (2013); ਦੋਹਾ ਸੋਧ',
        hi: 'तापमंडल; मिनामाता कन्वेंशन (2013); दोहा संशोधन',
      },
      D: {
        en: 'Stratosphere; Montreal Protocol (16 September 1987 — celebrated as World Ozone Day); Kigali Amendment (2016)',
        pa: 'ਸਮਤਾਪ ਮੰਡਲ (Stratosphere); ਮਾਂਟਰੀਅਲ ਪ੍ਰੋਟੋਕੋਲ (16 ਸਤੰਬਰ 1987 — ਵਿਸ਼ਵ ਓਜ਼ੋਨ ਦਿਵਸ); ਕਿਗਾਲੀ ਸੋਧ (2016)',
        hi: 'समताप मंडल (Stratosphere); मॉन्ट्रियल प्रोटोकॉल (16 सितंबर 1987 — विश्व ओजोन दिवस); किगाली संशोधन (2016)',
      },
    },
    correct: 'D',
    explanation: {
      en: 'About 90% of atmospheric ozone resides in the lower Stratosphere (15–35 km altitude) and shields Earth from harmful UV-B radiation. Following the Vienna Convention (1985), the Montreal Protocol on Substances that Deplete the Ozone Layer was signed on 16 September 1987 (hence 16 September is World Ozone Day) to phase out CFCs and Halons (chlorine free radicals destroy ozone). In October 2016, the Kigali Amendment (Rwanda) to the Montreal Protocol was adopted to phase down high-GWP Hydrofluorocarbons (HFCs).',
      pa: 'ਓਜ਼ੋਨ ਪਰਤ ਸਮਤਾਪ ਮੰਡਲ (Stratosphere) ਵਿੱਚ ਪਾਈ ਜਾਂਦੀ ਹੈ ਅਤੇ ਇਸ ਦੀ ਮੋਟਾਈ ਡੌਬਸਨ ਯੂਨਿਟ (DU) ਵਿੱਚ ਮਾਪੀ ਜਾਂਦੀ ਹੈ। 16 ਸਤੰਬਰ 1987 ਨੂੰ ਓਜ਼ੋਨ ਪਰਤ ਦੀ ਸੁਰੱਖਿਆ ਲਈ "ਮਾਂਟਰੀਅਲ ਪ੍ਰੋਟੋਕੋਲ" ਉੱਤੇ ਦਸਤਖ਼ਤ ਹੋਏ (ਇਸੇ ਲਈ 16 ਸਤੰਬਰ ਨੂੰ ਵਿਸ਼ਵ ਓਜ਼ੋਨ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ) ਅਤੇ 2016 ਦੀ "ਕਿਗਾਲੀ ਸੋਧ" ਰਾਹੀਂ ਹਾਈਡ੍ਰੋਫਲੋਰੋਕਾਰਬਨ (HFCs) ਨੂੰ ਘਟਾਉਣ ਦਾ ਸਮਝੌਤਾ ਹੋਇਆ।',
      hi: 'ओजोन परत समताप मंडल (Stratosphere) में पाई जाती है और इसकी मोटाई डॉब्सन यूनिट (DU) में मापी जाती है। 16 सितंबर 1987 को ओजोन परत के संरक्षण हेतु "मॉन्ट्रियल प्रोटोकॉल" पर हस्ताक्षर हुए (इसीलिए 16 सितंबर को विश्व ओजोन दिवस मनाया जाता है) और 2016 के "किगाली संशोधन" द्वारा हाइड्रोफ्लोरोकार्बन (HFCs) को चरणबद्ध रूप से कम करने का समझौता हुआ।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-env-5',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'How does the Kyoto Protocol (adopted at COP-3 in 1997, entered into force in 2005) differ from the Paris Climate Agreement (adopted at COP-21 in December 2015) under the UNFCCC?',
      pa: 'UNFCCC ਦੇ ਤਹਿਤ ਕਿਓਟੋ ਪ੍ਰੋਟੋਕੋਲ (1997 ਵਿੱਚ COP-3 ਵਿਖੇ ਅਪਣਾਇਆ ਗਿਆ, 2005 ਵਿੱਚ ਲਾਗੂ) ਅਤੇ ਪੈਰਿਸ ਜਲਵਾਯੂ ਸਮਝੌਤੇ (ਦਸੰਬਰ 2015 ਵਿੱਚ COP-21 ਵਿਖੇ ਅਪਣਾਇਆ ਗਿਆ) ਵਿੱਚ ਮੁੱਖ ਅੰਤਰ ਕੀ ਹੈ?',
      hi: 'UNFCCC के अंतर्गत क्योटो प्रोटोकॉल (1997 में COP-3 में अपनाया गया, 2005 में लागू) और पेरिस जलवायु समझौते (दिसंबर 2015 में COP-21 में अपनाया गया) में मुख्य अंतर क्या है?',
    },
    options: {
      A: {
        en: 'The Kyoto Protocol set top-down legally binding emission reduction targets only for developed (Annex-I) countries under "Common But Differentiated Responsibilities", whereas the Paris Agreement requires all countries (developed and developing) to submit bottom-up Nationally Determined Contributions (NDCs) to hold global warming well below 2°C (and pursue 1.5°C) above pre-industrial levels',
        pa: 'ਕਿਓਟੋ ਪ੍ਰੋਟੋਕੋਲ ਨੇ ਸਿਰਫ਼ ਵਿਕਸਤ (Annex-I) ਦੇਸ਼ਾਂ ਲਈ ਕਾਨੂੰਨੀ ਤੌਰ ਤੇ ਲਾਜ਼ਮੀ ਨਿਕਾਸੀ ਕਟੌਤੀ ਦੇ ਟੀਚੇ ਰੱਖੇ ਸਨ, ਜਦਕਿ ਪੈਰਿਸ ਸਮਝੌਤੇ ਤਹਿਤ ਸਾਰੇ ਦੇਸ਼ਾਂ (ਵਿਕਸਤ ਅਤੇ ਵਿਕਾਸਸ਼ੀਲ) ਵੱਲੋਂ ਆਲਮੀ ਤਾਪਮਾਨ ਵਾਧੇ ਨੂੰ ਉਦਯੋਗਿਕ ਕ੍ਰਾਂਤੀ ਤੋਂ ਪਹਿਲਾਂ ਦੇ ਪੱਧਰ ਨਾਲੋਂ 2°C ਤੋਂ ਹੇਠਾਂ (ਅਤੇ 1.5°C ਤੱਕ) ਰੱਖਣ ਲਈ "ਰਾਸ਼ਟਰੀ ਪੱਧਰ ਤੇ ਨਿਰਧਾਰਤ ਯੋਗਦਾਨ" (NDCs) ਪੇਸ਼ ਕੀਤੇ ਜਾਂਦੇ ਹਨ',
        hi: 'क्योटो प्रोटोकॉल ने केवल विकसित (Annex-I) देशों के लिए कानूनी रूप से बाध्यकारी उत्सर्जन कटौती लक्ष्य निर्धारित किए थे, जबकि पेरिस समझौते के तहत सभी देशों (विकसित और विकासशील) को वैश्विक तापमान वृद्धि को पूर्व-औद्योगिक स्तर से 2°C से काफी नीचे (और 1.5°C तक) सीमित रखने हेतु "राष्ट्रीय स्तर पर निर्धारित योगदान" (NDCs) प्रस्तुत करने होते हैं',
      },
      B: {
        en: 'The Kyoto Protocol banned nuclear weapons, whereas the Paris Agreement banned plastic waste',
        pa: 'ਕਿਓਟੋ ਪ੍ਰੋਟੋਕੋਲ ਨੇ ਪ੍ਰਮਾਣੂ ਹਥਿਆਰਾਂ ਤੇ ਪਾਬੰਦੀ ਲਗਾਈ, ਜਦਕਿ ਪੈਰਿਸ ਸਮਝੌਤੇ ਨੇ ਪਲਾਸਟਿਕ ਕਚਰੇ ਤੇ ਪਾਬੰਦੀ ਲਗਾਈ',
        hi: 'क्योटो प्रोटोकॉल ने परमाणु हथियारों पर प्रतिबंध लगाया, जबकि पेरिस समझौते ने प्लास्टिक कचरे पर प्रतिबंध लगाया',
      },
      C: {
        en: 'The Kyoto Protocol applied only to developing nations like India and China, exempting the USA and Europe',
        pa: 'ਕਿਓਟੋ ਪ੍ਰੋਟੋਕੋਲ ਸਿਰਫ਼ ਭਾਰਤ ਅਤੇ ਚੀਨ ਵਰਗੇ ਵਿਕਾਸਸ਼ੀਲ ਦੇਸ਼ਾਂ ਤੇ ਲਾਗੂ ਹੁੰਦਾ ਸੀ',
        hi: 'क्योटो प्रोटोकॉल केवल भारत और चीन जैसे विकासशील देशों पर लागू होता था',
      },
      D: {
        en: 'The Paris Agreement regulates transboundary movement of hazardous waste, whereas Kyoto regulates wetland birds',
        pa: 'ਪੈਰਿਸ ਸਮਝੌਤਾ ਖ਼ਤਰਨਾਕ ਕਚਰੇ ਦੀ ਆਵਾਜਾਈ ਨੂੰ ਨਿਯੰਤਰਿਤ ਕਰਦਾ ਹੈ ਅਤੇ ਕਿਓਟੋ ਜਲ-ਪੰਛੀਆਂ ਨੂੰ',
        hi: 'पेरिस समझौता खतरनाक कचरे के सीमा-पार आवागमन को नियंत्रित करता है और क्योटो आर्द्रभूमि पक्षियों को',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Adopted on 11 December 1997 in Kyoto (Japan) and effective 16 February 2005, the Kyoto Protocol operationalized the UNFCCC by binding only Annex-I (developed) countries to reduce GHG emissions (introducing Carbon Credits, Clean Development Mechanism, and Joint Implementation). The Paris Agreement (COP-21, 12 December 2015) universalized climate action through bottom-up Nationally Determined Contributions (NDCs) from all 190+ parties to limit global temperature rise to well below 2°C, preferably 1.5°C.',
      pa: '1997 ਦੇ ਕਿਓਟੋ ਪ੍ਰੋਟੋਕੋਲ (2005 ਵਿੱਚ ਲਾਗੂ) ਨੇ ਸਿਰਫ਼ ਵਿਕਸਤ (Annex-I) ਦੇਸ਼ਾਂ ਉੱਤੇ ਗ੍ਰੀਨਹਾਊਸ ਗੈਸਾਂ ਘਟਾਉਣ ਦੀ ਕਾਨੂੰਨੀ ਜ਼ਿੰਮੇਵਾਰੀ ਪਾਈ ਸੀ। ਇਸ ਦੇ ਉਲਟ 2015 ਦੇ ਪੈਰਿਸ ਜਲਵਾਯੂ ਸਮਝੌਤੇ (COP-21) ਤਹਿਤ ਸਾਰੇ ਦੇਸ਼ ਆਪਣੇ "ਰਾਸ਼ਟਰੀ ਪੱਧਰ ਤੇ ਨਿਰਧਾਰਤ ਯੋਗਦਾਨ" (NDCs) ਤੈਅ ਕਰਦੇ ਹਨ ਤਾਂ ਜੋ ਆਲਮੀ ਤਾਪਮਾਨ ਵਾਧੇ ਨੂੰ 2°C ਤੋਂ ਹੇਠਾਂ (ਤਰਜੀਹੀ ਤੌਰ ਤੇ 1.5°C ਤੱਕ) ਸੀਮਤ ਰੱਖਿਆ ਜਾ ਸਕੇ।',
      hi: '1997 के क्योटो प्रोटोकॉल (2005 में लागू) ने केवल विकसित (Annex-I) देशों पर ग्रीनहाउस गैस उत्सर्जन घटाने की बाध्यकारी जिम्मेदारी डाली थी। इसके विपरीत 2015 के पेरिस जलवायु समझौते (COP-21) के तहत सभी देश अपने "राष्ट्रीय स्तर पर निर्धारित योगदान" (NDCs) तय करते हैं ताकि वैश्विक तापमान वृद्धि को 2°C से काफी नीचे (प्राथमिकता से 1.5°C तक) सीमित रखा जा सके।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-env-6',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'On which date and in which country was the Ramsar Convention on Wetlands of International Importance signed, and what is the purpose of the "Montreux Record" maintained under this convention?',
      pa: 'ਅੰਤਰਰਾਸ਼ਟਰੀ ਮਹੱਤਵ ਵਾਲੀਆਂ ਜਲਗਾਹਾਂ (Wetlands) ਬਾਰੇ "ਰਾਮਸਰ ਕਨਵੈਨਸ਼ਨ" ਕਿਸ ਮਿਤੀ ਨੂੰ ਅਤੇ ਕਿਸ ਦੇਸ਼ ਵਿੱਚ ਸਹੀਬੰਦ ਹੋਈ ਸੀ, ਅਤੇ ਇਸ ਕਨਵੈਨਸ਼ਨ ਅਧੀਨ ਰੱਖੇ ਜਾਂਦੇ "ਮੋਂਟ੍ਰੇਕਸ ਰਿਕਾਰਡ" (Montreux Record) ਦਾ ਕੀ ਉਦੇਸ਼ ਹੈ?',
      hi: 'अंतर्राष्ट्रीय महत्व की आर्द्रभूमियों (Wetlands) पर "रामसर कन्वेंशन" किस तिथि को और किस देश में हस्ताक्षरित हुआ था, तथा इस कन्वेंशन के अंतर्गत रखे जाने वाले "मॉन्ट्रेक्स रिकॉर्ड" (Montreux Record) का उद्देश्य क्या है?',
    },
    options: {
      A: {
        en: '5 June 1972 in Sweden; a register of extinct marine mammals',
        pa: '5 ਜੂਨ 1972 ਨੂੰ ਸਵੀਡਨ ਵਿੱਚ; ਲੁਪਤ ਹੋ ਚੁੱਕੇ ਸਮੁੰਦਰੀ ਜੀਵਾਂ ਦਾ ਰਜਿਸਟਰ',
        hi: '5 जून 1972 को स्वीडन में; विलुप्त समुद्री स्तनधारियों का रजिस्टर',
      },
      B: {
        en: '2 February 1971 in Ramsar (Iran — celebrated as World Wetlands Day); the Montreux Record is a register of Ramsar wetland sites where changes in ecological character have occurred, are occurring, or are likely to occur due to pollution or human interference (in India, Keoladeo National Park and Loktak Lake are listed in it)',
        pa: '2 ਫਰਵਰੀ 1971 ਨੂੰ ਰਾਮਸਰ (ਈਰਾਨ — ਵਿਸ਼ਵ ਵੈੱਟਲੈਂਡਜ਼ ਦਿਵਸ) ਵਿਖੇ; "ਮੋਂਟ੍ਰੇਕਸ ਰਿਕਾਰਡ" ਉਹਨਾਂ ਰਾਮਸਰ ਜਲਗਾਹਾਂ ਦਾ ਰਜਿਸਟਰ ਹੈ ਜਿੱਥੇ ਮਨੁੱਖੀ ਦਖ਼ਲ ਜਾਂ ਪ੍ਰਦੂਸ਼ਣ ਕਾਰਨ ਪਰਿਸਥਿਤੀ ਸਰੂਪ ਵਿੱਚ ਗੰਭੀਰ ਵਿਗਾੜ ਆਇਆ ਹੈ (ਭਾਰਤ ਦੀਆਂ ਕੇਵਲਾਦੇਵ ਨੈਸ਼ਨਲ ਪਾਰਕ ਅਤੇ ਲੋਕਤਕ ਝੀਲ ਇਸ ਵਿੱਚ ਸ਼ਾਮਲ ਹਨ)',
        hi: '2 फरवरी 1971 को रामसर (ईरान — विश्व आर्द्रभूमि दिवस) में; "मॉन्ट्रेक्स रिकॉर्ड" उन रामसर स्थलों का रजिस्टर है जहाँ मानवीय हस्तक्षेप या प्रदूषण के कारण पारिस्थितिक स्वरूप में नकारात्मक परिवर्तन हुआ है या होने की संभावना है (भारत के केवलादेव राष्ट्रीय उद्यान और लोकटक झील इसमें शामिल हैं)',
      },
      C: {
        en: '22 May 1992 in Brazil; a register of coral reefs in the Pacific Ocean',
        pa: '22 ਮਈ 1992 ਨੂੰ ਬ੍ਰਾਜ਼ੀਲ ਵਿੱਚ; ਪ੍ਰਸ਼ਾਂਤ ਮਹਾਂਸਾਗਰ ਦੀਆਂ ਮੂੰਗਾ ਚੱਟਾਨਾਂ ਦਾ ਰਜਿਸਟਰ',
        hi: '22 मई 1992 को ब्राजील में; प्रशांत महासागर की प्रवाल भित्तियों का रजिस्टर',
      },
      D: {
        en: '22 April 1970 in Switzerland; a list of alpine glaciers',
        pa: '22 ਅਪ੍ਰੈਲ 1970 ਨੂੰ ਸਵਿਟਜ਼ਰਲੈਂਡ ਵਿੱਚ; ਗਲੇਸ਼ੀਅਰਾਂ ਦੀ ਸੂਚੀ',
        hi: '22 अप्रैल 1970 को स्विट्जरलैंड में; हिमनदों की सूची',
      },
    },
    correct: 'B',
    explanation: {
      en: 'The Convention on Wetlands was signed on 2 February 1971 in the Iranian city of Ramsar on the shores of the Caspian Sea (2 February is celebrated annually as World Wetlands Day; India joined in 1982 with Chilika Lake and Keoladeo National Park as its first sites). The Montreux Record is a priority register of Ramsar sites facing severe ecological degradation: in India, Keoladeo National Park (Rajasthan) and Loktak Lake (Manipur) are currently on the Montreux Record (Chilika Lake was removed from it in 2002 after successful restoration).',
      pa: 'ਰਾਮਸਰ ਕਨਵੈਨਸ਼ਨ 2 ਫਰਵਰੀ 1971 ਨੂੰ ਈਰਾਨ ਦੇ ਸ਼ਹਿਰ ਰਾਮਸਰ ਵਿਖੇ ਸਹੀਬੰਦ ਹੋਈ ਸੀ (2 ਫਰਵਰੀ ਨੂੰ ਵਿਸ਼ਵ ਵੈੱਟਲੈਂਡਜ਼ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ)। "ਮੋਂਟ੍ਰੇਕਸ ਰਿਕਾਰਡ" ਉਹਨਾਂ ਰਾਮਸਰ ਜਲਗਾਹਾਂ ਦੀ ਸੂਚੀ ਹੈ ਜਿਨ੍ਹਾਂ ਦੇ ਪਰਿਸਥਿਤੀ ਸਰੂਪ ਨੂੰ ਮਨੁੱਖੀ ਗਤੀਵਿਧੀਆਂ ਜਾਂ ਪ੍ਰਦੂਸ਼ਣ ਕਾਰਨ ਖ਼ਤਰਾ ਪੈਦਾ ਹੋ ਗਿਆ ਹੈ (ਭਾਰਤ ਵਿੱਚ ਕੇਵਲਾਦੇਵ ਨੈਸ਼ਨਲ ਪਾਰਕ ਅਤੇ ਲੋਕਤਕ ਝੀਲ ਇਸ ਵਿੱਚ ਦਰਜ ਹਨ; ਚਿਲਿਕਾ ਝੀਲ ਨੂੰ 2002 ਵਿੱਚ ਇਸ ਸੂਚੀ ਵਿੱਚੋਂ ਬਾਹਰ ਕੱਢ ਲਿਆ ਗਿਆ ਸੀ)।',
      hi: 'रामसर कन्वेंशन पर 2 फरवरी 1971 को ईरान के रामसर शहर में हस्ताक्षर किए गए थे (2 फरवरी को विश्व आर्द्रभूमि दिवस मनाया जाता है)। "मॉन्ट्रेक्स रिकॉर्ड" उन रामसर आर्द्रभूमियों की सूची है जिनके पारिस्थितिक स्वरूप में मानवीय हस्तक्षेप या प्रदूषण से गंभीर परिवर्तन हुआ है (भारत में केवलादेव राष्ट्रीय उद्यान और लोकटक झील इसमें शामिल हैं; चिल्का झील को सुधार के बाद 2002 में इससे हटा दिया गया था)।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-env-7',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'How many Wetlands of International Importance (Ramsar Sites) are located in Punjab, and which of the following options correctly lists all of them along with their districts/rivers?',
      pa: 'ਪੰਜਾਬ ਵਿੱਚ ਅੰਤਰਰਾਸ਼ਟਰੀ ਮਹੱਤਵ ਵਾਲੀਆਂ ਕਿੰਨੀਆਂ ਰਾਮਸਰ ਜਲਗਾਹਾਂ (Ramsar Wetlands) ਹਨ, ਅਤੇ ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਵਿਕਲਪ ਉਹਨਾਂ ਸਾਰੀਆਂ ਦੇ ਨਾਂ ਅਤੇ ਜ਼ਿਲ੍ਹੇ/ਦਰਿਆ ਸਹੀ ਦਰਸਾਉਂਦਾ ਹੈ?',
      hi: 'पंजाब में अंतर्राष्ट्रीय महत्व की कितनी रामसर आर्द्रभूमियां (Ramsar Wetlands) स्थित हैं, और निम्नलिखित में से कौन-सा विकल्प उन सभी के नाम और जिले/नदियां सही रूप में दर्शाता है?',
    },
    options: {
      A: {
        en: '4 Ramsar Sites: Harike, Kanjli, Ropar, and Sukhna Lake',
        pa: '4 ਰਾਮਸਰ ਜਲਗਾਹਾਂ: ਹਰੀਕੇ, ਕਾਂਜਲੀ, ਰੋਪੜ ਅਤੇ ਸੁਖਨਾ ਝੀਲ',
        hi: '4 रामसर स्थल: हरिके, कांजली, रोपड़ और सुखना झील',
      },
      B: {
        en: '5 Ramsar Sites: Harike, Ranjit Sagar, Pong Dam, Gobind Sagar, and Kanjli',
        pa: '5 ਰਾਮਸਰ ਜਲਗਾਹਾਂ: ਹਰੀਕੇ, ਰਣਜੀਤ ਸਾਗਰ, ਪੌਂਗ ਡੈਮ, ਗੋਬਿੰਦ ਸਾਗਰ ਅਤੇ ਕਾਂਜਲੀ',
        hi: '5 रामसर स्थल: हरिके, रणजीत सागर, पोंग बांध, गोबिंद सागर और कांजली',
      },
      C: {
        en: '6 Ramsar Sites: (1) Harike Wetland (Tarn Taran/Ferozepur/Kapurthala — Beas-Sutlej confluence, 1990), (2) Kanjli Wetland (Kapurthala — Kali Bein, 2002), (3) Ropar Wetland (Rupnagar — Sutlej, 2002), (4) Keshopur-Miani Community Reserve (Gurdaspur, 2019), (5) Nangal Wildlife Sanctuary (Rupnagar — Sutlej, 2019), and (6) Beas Conservation Reserve (185 km stretch from Talwara to Harike, 2019)',
        pa: '6 ਰਾਮਸਰ ਜਲਗਾਹਾਂ: (1) ਹਰੀਕੇ ਪੱਤਣ (ਤਰਨ ਤਾਰਨ/ਫ਼ਿਰੋਜ਼ਪੁਰ/ਕਪੂਰਥਲਾ — ਬਿਆਸ-ਸਤਲੁਜ ਸੰਗਮ, 1990), (2) ਕਾਂਜਲੀ ਜਲਗਾਹ (ਕਪੂਰਥਲਾ — ਕਾਲੀ ਵੇਈਂ, 2002), (3) ਰੋਪੜ ਜਲਗਾਹ (ਰੂਪਨਗਰ — ਸਤਲੁਜ, 2002), (4) ਕੇਸ਼ੋਪੁਰ-ਮਿਆਣੀ ਕਮਿਊਨਿਟੀ ਰਿਜ਼ਰਵ (ਗੁਰਦਾਸਪੁਰ, 2019), (5) ਨੰਗਲ ਜੰਗਲੀ ਜੀਵ ਰੱਖ (ਰੂਪਨਗਰ — ਸਤਲੁਜ, 2019), ਅਤੇ (6) ਬਿਆਸ ਕੰਜ਼ਰਵੇਸ਼ਨ ਰਿਜ਼ਰਵ (ਤਲਵਾੜਾ ਤੋਂ ਹਰੀਕੇ ਤੱਕ 185 ਕਿ.ਮੀ. ਬਿਆਸ ਦਰਿਆ, 2019)',
        hi: '6 रामसर स्थल: (1) हरिके आर्द्रभूमि (तरन तारन/फिरोजपुर/कपूरथला — ब्यास-सतलुज संगम, 1990), (2) कांजली आर्द्रभूमि (कपूरथला — काली बेईं, 2002), (3) रोपड़ आर्द्रभूमि (रूपनगर — सतलुज, 2002), (4) केशोपुर-मियानी कम्युनिटी रिजर्व (गुरदासपुर, 2019), (5) नांगल वन्यजीव अभयारण्य (रूपनगर — सतलुज, 2019), और (6) ब्यास कंजर्वेशन रिजर्व (तलवाड़ा से हरिके तक 185 किमी ब्यास नदी, 2019)',
      },
      D: {
        en: '7 Ramsar Sites including Siswan Dam and Chhatbir Zoo',
        pa: '7 ਰਾਮਸਰ ਜਲਗਾਹਾਂ ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਸਿਸਵਾਂ ਡੈਮ ਅਤੇ ਛੱਤਬੀੜ ਚਿੜੀਆਘਰ ਸ਼ਾਮਲ ਹਨ',
        hi: '7 रामसर स्थल जिनमें सिसवां बांध और छतबीड़ चिड़ियाघर शामिल हैं',
      },
    },
    correct: 'C',
    explanation: {
      en: 'Punjab has 6 Ramsar Wetlands: Harike Wetland (designated in 1990 at the Beas-Sutlej confluence), Kanjli Wetland (2002, on Kali Bein in Kapurthala), Ropar Wetland (2002, on Sutlej in Rupnagar), and three sites added in 2019—Keshopur-Miani Community Reserve (Gurdaspur, India’s first community reserve to be declared a Ramsar site), Nangal Wildlife Sanctuary (Rupnagar, on Sutlej), and Beas Conservation Reserve (185 km stretch of River Beas hosting India’s only population of the endangered Indus River Dolphin, Platanista minor).',
      pa: 'ਪੰਜਾਬ ਵਿੱਚ ਕੁੱਲ 6 ਰਾਮਸਰ ਵੈੱਟਲੈਂਡਜ਼ (ਜਲਗਾਹਾਂ) ਹਨ: (1) ਹਰੀਕੇ (1990, ਬਿਆਸ-ਸਤਲੁਜ ਸੰਗਮ), (2) ਕਾਂਜਲੀ (2002, ਕਪੂਰਥਲਾ ਵਿੱਚ ਕਾਲੀ ਵੇਈਂ ਉੱਤੇ), (3) ਰੋਪੜ (2002, ਸਤਲੁਜ ਉੱਤੇ), ਅਤੇ 2019 ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤੀਆਂ ਤਿੰਨ ਜਲਗਾਹਾਂ — (4) ਕੇਸ਼ੋਪੁਰ-ਮਿਆਣੀ ਕਮਿਊਨਿਟੀ ਰਿਜ਼ਰਵ (ਗੁਰਦਾਸਪੁਰ), (5) ਨੰਗਲ ਜੰਗਲੀ ਜੀਵ ਰੱਖ (ਰੂਪਨਗਰ), ਅਤੇ (6) ਬਿਆਸ ਕੰਜ਼ਰਵੇਸ਼ਨ ਰਿਜ਼ਰਵ (ਜਿੱਥੇ ਦੁਰਲੱਭ ਸਿੰਧ ਡੌਲਫਿਨ / ਭੁੱਲਣ ਪਾਈ ਜਾਂਦੀ ਹੈ)।',
      hi: 'पंजाब में कुल 6 रामसर आर्द्रभूमियां हैं: (1) हरिके (1990, ब्यास-सतलुज संगम), (2) कांजली (2002, कपूरथला में काली बेईं पर), (3) रोपड़ (2002, सतलुज पर), तथा 2019 में जोड़े गए तीन स्थल — (4) केशोपुर-मियानी कम्युनिटी रिजर्व (गुरदासपुर), (5) नांगल वन्यजीव अभयारण्य (रूपनगर), और (6) ब्यास कंजर्वेशन रिजर्व (जहाँ दुर्लभ सिंधु डॉल्फिन / भुल्लन पाई जाती है)।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-env-8',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Who coined the term "Biodiversity Hotspot" in 1988, and which four global Biodiversity Hotspots extend into Indian territory?',
      pa: '1988 ਵਿੱਚ "ਬਾਇਓਡਾਇਵਰਸਿਟੀ ਹੌਟਸਪੌਟ" (ਜੈਵ-ਵਿਭਿੰਨਤਾ ਹੌਟਸਪੌਟ) ਸ਼ਬਦ ਕਿਸ ਨੇ ਘੜਿਆ ਸੀ, ਅਤੇ ਵਿਸ਼ਵ ਦੇ ਕਿਹੜੇ ਚਾਰ ਜੈਵ-ਵਿਭਿੰਨਤਾ ਹੌਟਸਪੌਟ ਭਾਰਤ ਦੇ ਖੇਤਰ ਵਿੱਚ ਫੈਲੇ ਹੋਏ ਹਨ?',
      hi: '1988 में "बायोडायवर्सिटी हॉटस्पॉट" (जैव-विविधता हॉटस्पॉट) शब्द किसने दिया था, और विश्व के कौन-से चार जैव-विविधता हॉटस्पॉट भारतीय क्षेत्र में फैले हुए हैं?',
    },
    options: {
      A: {
        en: 'Ernst Haeckel; Thar Desert, Gangetic Plains, Deccan Plateau, and Vindhya Range',
        pa: 'ਅਰਨਸਟ ਹੈਕਲ; ਥਾਰ ਮਾਰੂਥਲ, ਗੰਗਾ ਦੇ ਮੈਦਾਨ, ਦੱਖਣ ਦਾ ਪਠਾਰ ਅਤੇ ਵਿੰਧਿਆ ਪਰਬਤ',
        hi: 'अर्न्स्ट हेकेल; थार मरुस्थल, गंगा का मैदान, दक्कन का पठार और विंध्य श्रेणी',
      },
      B: {
        en: 'Arthur Tansley; Aravalli Hills, Eastern Ghats, Malwa Plateau, and Rann of Kutch',
        pa: 'ਆਰਥਰ ਟੈਂਸਲੇ; ਅਰਾਵਲੀ ਪਹਾੜੀਆਂ, ਪੂਰਬੀ ਘਾਟ, ਮਾਲਵਾ ਪਠਾਰ ਅਤੇ ਕੱਛ ਦਾ ਰਣ',
        hi: 'आर्थर टैंसले; अरावली पहाड़ियां, पूर्वी घाट, मालवा पठार और कच्छ का रण',
      },
      C: {
        en: 'Edward O. Wilson; Chotanagpur, Bundelkhand, Coromandel, and Konkan',
        pa: 'ਐਡਵਰਡ ਓ. ਵਿਲਸਨ; ਛੋਟਾਨਾਗਪੁਰ, ਬੁੰਦੇਲਖੰਡ, ਕੋਰੋਮੰਡਲ ਅਤੇ ਕੋਂਕਣ',
        hi: 'एडवर्ड ओ. विल्सन; छोटानागपुर, बुंदेलखंड, कोरोमंडल और कोंकण',
      },
      D: {
        en: 'Norman Myers; (1) The Himalayas, (2) Indo-Burma (Northeast India & Andaman), (3) The Western Ghats & Sri Lanka, and (4) Sundaland (including the Nicobar Islands)',
        pa: 'ਨੌਰਮਨ ਮਾਇਰਸ (Norman Myers); (1) ਹਿਮਾਲਿਆ, (2) ਇੰਡੋ-ਬਰਮਾ (ਉੱਤਰ-ਪੂਰਬੀ ਭਾਰਤ), (3) ਪੱਛਮੀ ਘਾਟ ਅਤੇ ਸ੍ਰੀਲੰਕਾ, ਅਤੇ (4) ਸੁੰਡਾਲੈਂਡ (ਨਿਕੋਬਾਰ ਟਾਪੂ ਸਮੂਹ ਸਮੇਤ)',
        hi: 'नॉर्मन मायर्स (Norman Myers); (1) हिमालय, (2) इंडो-बर्मा (उत्तर-पूर्वी भारत), (3) पश्चिमी घाट एवं श्रीलंका, और (4) सुंडालैंड (निकोबार द्वीप समूह सहित)',
      },
    },
    correct: 'D',
    explanation: {
      en: 'British ecologist Norman Myers coined "Biodiversity Hotspot" in 1988 (requiring at least 1,500 endemic vascular plant species and loss of >=70% of original habitat). India hosts 4 of the world’s 36 biodiversity hotspots: (1) The Himalayas, (2) Indo-Burma, (3) Western Ghats & Sri Lanka, and (4) Sundaland (which includes the Nicobar group of islands). Note: Ernst Haeckel coined "Ecology" (1866), Arthur Tansley coined "Ecosystem" (1935), and Walter G. Rosen / E.O. Wilson popularized "Biodiversity".',
      pa: 'ਨੌਰਮਨ ਮਾਇਰਸ (Norman Myers) ਨੇ 1988 ਵਿੱਚ "ਬਾਇਓਡਾਇਵਰਸਿਟੀ ਹੌਟਸਪੌਟ" ਸ਼ਬਦ ਦਿੱਤਾ ਸੀ। ਭਾਰਤ ਵਿੱਚ ਵਿਸ਼ਵ ਦੇ 4 ਪ੍ਰਮੁੱਖ ਜੈਵ-ਵਿਭਿੰਨਤਾ ਹੌਟਸਪੌਟ ਹਨ: (1) ਹਿਮਾਲਿਆ, (2) ਇੰਡੋ-ਬਰਮਾ, (3) ਪੱਛਮੀ ਘਾਟ ਅਤੇ ਸ੍ਰੀਲੰਕਾ, ਅਤੇ (4) ਸੁੰਡਾਲੈਂਡ (ਨਿਕੋਬਾਰ ਟਾਪੂ)। (ਅਰਨਸਟ ਹੈਕਲ ਨੇ "Ecology" ਅਤੇ ਆਰਥਰ ਟੈਂਸਲੇ ਨੇ "Ecosystem" ਸ਼ਬਦ ਦਿੱਤਾ ਸੀ)।',
      hi: 'नॉर्मन मायर्स (Norman Myers) ने 1988 में "बायोडायवर्सिटी हॉटस्पॉट" शब्द प्रतिपादित किया था। भारत में विश्व के 4 प्रमुख जैव-विविधता हॉटस्पॉट स्थित हैं: (1) हिमालय, (2) इंडो-बर्मा, (3) पश्चिमी घाट और श्रीलंका, तथा (4) सुंडालैंड (निकोबार द्वीप समूह)। (अर्न्स्ट हेकेल ने "Ecology" और आर्थर टैंसले ने "Ecosystem" शब्द दिया था)।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-env-9',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which of the following correctly distinguishes between "In-situ" (on-site) and "Ex-situ" (off-site) biodiversity conservation methods?',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਵਿਕਲਪ ਜੈਵ-ਵਿਭਿੰਨਤਾ ਦੀ ਸੰਭਾਲ ਦੇ "ਇਨ-ਸੀਟੂ" (In-situ — ਕੁਦਰਤੀ ਨਿਵਾਸ ਵਿੱਚ) ਅਤੇ "ਐਕਸ-ਸੀਟੂ" (Ex-situ — ਕੁਦਰਤੀ ਨਿਵਾਸ ਤੋਂ ਬਾਹਰ) ਤਰੀਕਿਆਂ ਵਿੱਚ ਸਹੀ ਅੰਤਰ ਕਰਦਾ ਹੈ?',
      hi: 'निम्नलिखित में से कौन-सा विकल्प जैव-विविधता संरक्षण की "स्व-स्थाने" (In-situ — प्राकृतिक आवास में) और "बाह्य-स्थाने" (Ex-situ — प्राकृतिक आवास से बाहर) विधियों के बीच सही अंतर स्पष्ट करता है?',
    },
    options: {
      A: {
        en: 'In-situ: Biosphere Reserves, National Parks, Wildlife Sanctuaries, Community Reserves, and Sacred Groves; Ex-situ: Botanical Gardens, Zoological Parks (Zoos), Seed/Gene Banks, Cryopreservation (in liquid nitrogen at -196°C), and Tissue Culture',
        pa: 'ਇਨ-ਸੀਟੂ (In-situ): ਬਾਇਓਸਫੀਅਰ ਰਿਜ਼ਰਵ, ਨੈਸ਼ਨਲ ਪਾਰਕ, ਜੰਗਲੀ ਜੀਵ ਰੱਖਾਂ (Wildlife Sanctuaries), ਕਮਿਊਨਿਟੀ ਰਿਜ਼ਰਵ ਅਤੇ ਪਵਿੱਤਰ ਉਪਵਣ (Sacred Groves); ਐਕਸ-ਸੀਟੂ (Ex-situ): ਬੋਟੈਨੀਕਲ ਗਾਰਡਨ, ਚਿੜੀਆਘਰ, ਬੀਜ/ਜੀਨ ਬੈਂਕ ਅਤੇ ਕ੍ਰਾਇਓਪ੍ਰੀਜ਼ਰਵੇਸ਼ਨ (-196°C ਤੇ ਤਰਲ ਨਾਈਟ੍ਰੋਜਨ ਵਿੱਚ ਸੰਭਾਲ)',
        hi: 'स्व-स्थाने (In-situ): बायोस्फीयर रिजर्व, राष्ट्रीय उद्यान, वन्यजीव अभयारण्य, सामुदायिक रिजर्व और पवित्र उपवन (Sacred Groves); बाह्य-स्थाने (Ex-situ): वनस्पति उद्यान, चिड़ियाघर, बीज/जीन बैंक और क्रायोप्रिजर्वेशन (-196°C पर द्रव नाइट्रोजन में संरक्षण)',
      },
      B: {
        en: 'In-situ: Seed Banks, Zoos, and Aquariums; Ex-situ: National Parks and Sacred Groves',
        pa: 'ਇਨ-ਸੀਟੂ: ਬੀਜ ਬੈਂਕ, ਚਿੜੀਆਘਰ ਅਤੇ ਐਕੁਏਰੀਅਮ; ਐਕਸ-ਸੀਟੂ: ਨੈਸ਼ਨਲ ਪਾਰਕ ਅਤੇ ਪਵਿੱਤਰ ਉਪਵਣ',
        hi: 'स्व-स्थाने: बीज बैंक, चिड़ियाघर और एक्वेरियम; बाह्य-स्थाने: राष्ट्रीय उद्यान और पवित्र उपवन',
      },
      C: {
        en: 'In-situ: Cryopreservation and Botanical Gardens; Ex-situ: Biosphere Reserves and Ramsar Wetlands',
        pa: 'ਇਨ-ਸੀਟੂ: ਕ੍ਰਾਇਓਪ੍ਰੀਜ਼ਰਵੇਸ਼ਨ ਅਤੇ ਬੋਟੈਨੀਕਲ ਗਾਰਡਨ; ਐਕਸ-ਸੀਟੂ: ਬਾਇਓਸਫੀਅਰ ਰਿਜ਼ਰਵ ਅਤੇ ਰਾਮਸਰ ਜਲਗਾਹਾਂ',
        hi: 'स्व-स्थाने: क्रायोप्रिजर्वेशन और वनस्पति उद्यान; बाह्य-स्थाने: बायोस्फीयर रिजर्व और रामसर आर्द्रभूमि',
      },
      D: {
        en: 'In-situ: Pollen Banks and DNA Libraries; Ex-situ: Tiger Reserves and Elephant Corridors',
        pa: 'ਇਨ-ਸੀਟੂ: ਪਰਾਗ ਬੈਂਕ ਅਤੇ ਡੀ.ਐੱਨ.ਏ. ਲਾਇਬ੍ਰੇਰੀਆਂ; ਐਕਸ-ਸੀਟੂ: ਟਾਈਗਰ ਰਿਜ਼ਰਵ ਅਤੇ ਹਾਥੀ ਗਲਿਆਰੇ',
        hi: 'स्व-स्थाने: पराग बैंक और डीएनए लाइब्रेरी; बाह्य-स्थाने: टाइगर रिजर्व और हाथी गलियारे',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In-situ conservation protects species inside their natural habitats: Biosphere Reserves, National Parks, Wildlife Sanctuaries, Conservation/Community Reserves, and Sacred Groves. Ex-situ conservation protects threatened plants and animals outside their natural habitats: Botanical Gardens, Zoological Parks (e.g., Chhatbir Zoo in Mohali), Aquariums, Seed Banks, Gene Banks, and Cryopreservation of gametes/tissues in liquid nitrogen at -196°C.',
      pa: 'ਇਨ-ਸੀਟੂ (In-situ) ਸੰਭਾਲ ਵਿੱਚ ਜੀਵਾਂ ਨੂੰ ਉਹਨਾਂ ਦੇ ਕੁਦਰਤੀ ਨਿਵਾਸ ਸਥਾਨ ਵਿੱਚ ਹੀ ਸੁਰੱਖਿਅਤ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ (ਜਿਵੇਂ ਬਾਇਓਸਫੀਅਰ ਰਿਜ਼ਰਵ, ਨੈਸ਼ਨਲ ਪਾਰਕ, ਜੰਗਲੀ ਜੀਵ ਰੱਖਾਂ ਅਤੇ ਪਵਿੱਤਰ ਉਪਵਣ)। ਐਕਸ-ਸੀਟੂ (Ex-situ) ਸੰਭਾਲ ਵਿੱਚ ਜੀਵਾਂ ਜਾਂ ਪੌਦਿਆਂ ਨੂੰ ਕੁਦਰਤੀ ਨਿਵਾਸ ਤੋਂ ਬਾਹਰ ਵਿਸ਼ੇਸ਼ ਥਾਵਾਂ ਤੇ ਸੁਰੱਖਿਅਤ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ (ਜਿਵੇਂ ਬੋਟੈਨੀਕਲ ਗਾਰਡਨ, ਚਿੜੀਆਘਰ, ਬੀਜ ਬੈਂਕ ਅਤੇ -196°C ਤਰਲ ਨਾਈਟ੍ਰੋਜਨ ਵਿੱਚ ਕ੍ਰਾਇਓਪ੍ਰੀਜ਼ਰਵੇਸ਼ਨ)।',
      hi: 'स्व-स्थाने (In-situ) संरक्षण में प्रजातियों को उनके प्राकृतिक आवास के भीतर ही संरक्षित किया जाता है (जैसे बायोस्फीयर रिजर्व, राष्ट्रीय उद्यान, वन्यजीव अभयारण्य और पवित्र उपवन)। बाह्य-स्थाने (Ex-situ) संरक्षण में संकटग्रस्त पादपों व जंतुओं को प्राकृतिक आवास से बाहर संरक्षित किया जाता है (जैसे वनस्पति उद्यान, चिड़ियाघर, बीज/जीन बैंक और -196°C द्रव नाइट्रोजन में क्रायोप्रिजर्वेशन)।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-env-10',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Match the following landmark Indian environmental statutes and conservation initiatives with their exact years of enactment or launch:',
      pa: 'ਭਾਰਤ ਦੇ ਹੇਠ ਲਿਖੇ ਪ੍ਰਮੁੱਖ ਵਾਤਾਵਰਣ ਕਾਨੂੰਨਾਂ ਅਤੇ ਸੰਭਾਲ ਪ੍ਰੋਜੈਕਟਾਂ ਦਾ ਉਹਨਾਂ ਦੇ ਲਾਗੂ/ਸ਼ੁਰੂ ਹੋਣ ਦੇ ਸਹੀ ਸਾਲਾਂ ਨਾਲ ਮਿਲਾਨ ਕਰੋ:',
      hi: 'भारत के निम्नलिखित प्रमुख पर्यावरण कानूनों और संरक्षण परियोजनाओं का उनके लागू/प्रारंभ होने के सही वर्षों के साथ मिलान करें:',
    },
    options: {
      A: {
        en: 'Wildlife Protection Act: 1986; Project Tiger: 1992; Environment Protection Act: 1972; Biological Diversity Act: 1980',
        pa: 'ਜੰਗਲੀ ਜੀਵ ਸੁਰੱਖਿਆ ਐਕਟ: 1986; ਪ੍ਰੋਜੈਕਟ ਟਾਈਗਰ: 1992; ਵਾਤਾਵਰਣ ਸੁਰੱਖਿਆ ਐਕਟ: 1972; ਜੈਵ-ਵਿਭਿੰਨਤਾ ਐਕਟ: 1980',
        hi: 'वन्यजीव संरक्षण अधिनियम: 1986; प्रोजेक्ट टाइगर: 1992; पर्यावरण संरक्षण अधिनियम: 1972; जैव-विविधता अधिनियम: 1980',
      },
      B: {
        en: 'Wildlife (Protection) Act: 1972; Project Tiger: 1973 (launched from Jim Corbett National Park); Water (Prevention & Control of Pollution) Act: 1974; Forest (Conservation) Act: 1980; Environment (Protection) Act: 1986; Project Elephant: 1992; Biological Diversity Act: 2002; National Green Tribunal (NGT) Act: 2010',
        pa: 'ਜੰਗਲੀ ਜੀਵ (ਸੁਰੱਖਿਆ) ਐਕਟ: 1972; ਪ੍ਰੋਜੈਕਟ ਟਾਈਗਰ: 1973 (ਜਿਮ ਕਾਰਬੇਟ ਨੈਸ਼ਨਲ ਪਾਰਕ ਤੋਂ ਸ਼ੁਰੂ); ਜਲ ਪ੍ਰਦੂਸ਼ਣ ਰੋਕਥਾਮ ਐਕਟ: 1974; ਜੰਗਲਾਤ (ਸੰਭਾਲ) ਐਕਟ: 1980; ਵਾਤਾਵਰਣ (ਸੁਰੱਖਿਆ) ਐਕਟ: 1986; ਪ੍ਰੋਜੈਕਟ ਐਲੀਫੈਂਟ: 1992; ਜੈਵ-ਵਿਭਿੰਨਤਾ ਐਕਟ: 2002; ਨੈਸ਼ਨਲ ਗ੍ਰੀਨ ਟ੍ਰਿਬਿਊਨਲ (NGT) ਐਕਟ: 2010',
        hi: 'वन्यजीव (संरक्षण) अधिनियम: 1972; प्रोजेक्ट टाइगर: 1973 (जिम कॉर्बेट राष्ट्रीय उद्यान से प्रारंभ); जल प्रदूषण निवारण अधिनियम: 1974; वन (संरक्षण) अधिनियम: 1980; पर्यावरण (संरक्षण) अधिनियम: 1986; प्रोजेक्ट एलीफेंट: 1992; जैव-विविधता अधिनियम: 2002; राष्ट्रीय हरित अधिकरण (NGT) अधिनियम: 2010',
      },
      C: {
        en: 'Wildlife Protection Act: 1974; Project Tiger: 1980; Environment Protection Act: 2002',
        pa: 'ਜੰਗਲੀ ਜੀਵ ਸੁਰੱਖਿਆ ਐਕਟ: 1974; ਪ੍ਰੋਜੈਕਟ ਟਾਈਗਰ: 1980; ਵਾਤਾਵਰਣ ਸੁਰੱਖਿਆ ਐਕਟ: 2002',
        hi: 'वन्यजीव संरक्षण अधिनियम: 1974; प्रोजेक्ट टाइगर: 1980; पर्यावरण संरक्षण अधिनियम: 2002',
      },
      D: {
        en: 'Wildlife Protection Act: 1980; Project Tiger: 1972; Environment Protection Act: 1992',
        pa: 'ਜੰਗਲੀ ਜੀਵ ਸੁਰੱਖਿਆ ਐਕਟ: 1980; ਪ੍ਰੋਜੈਕਟ ਟਾਈਗਰ: 1972; ਵਾਤਾਵਰਣ ਸੁਰੱਖਿਆ ਐਕਟ: 1992',
        hi: 'वन्यजीव संरक्षण अधिनियम: 1980; प्रोजेक्ट टाइगर: 1972; पर्यावरण संरक्षण अधिनियम: 1992',
      },
    },
    correct: 'B',
    explanation: {
      en: 'Key Indian environmental milestones frequently asked in PPSC/PSSSB exams: Wildlife (Protection) Act = 1972; Project Tiger = 1 April 1973; Water Act = 1974; Forest (Conservation) Act = 1980; Air (Prevention & Control of Pollution) Act = 1981; Environment (Protection) Act = 1986 (enacted under Article 253 in the wake of the 1984 Bhopal Gas Tragedy, known as the "Umbrella Legislation"); Project Elephant = 1992; Biological Diversity Act = 2002; and National Green Tribunal (NGT) Act = 2010.',
      pa: 'ਪ੍ਰਮੁੱਖ ਭਾਰਤੀ ਵਾਤਾਵਰਣ ਕਾਨੂੰਨ ਅਤੇ ਪ੍ਰੋਜੈਕਟ: ਜੰਗਲੀ ਜੀਵ (ਸੁਰੱਖਿਆ) ਐਕਟ = 1972; ਪ੍ਰੋਜੈਕਟ ਟਾਈਗਰ = 1 ਅਪ੍ਰੈਲ 1973; ਜਲ ਪ੍ਰਦੂਸ਼ਣ ਐਕਟ = 1974; ਜੰਗਲਾਤ ਸੰਭਾਲ ਐਕਟ = 1980; ਹਵਾ ਪ੍ਰਦੂਸ਼ਣ ਐਕਟ = 1981; ਵਾਤਾਵਰਣ (ਸੁਰੱਖਿਆ) ਐਕਟ = 1986 (ਭੋਪਾਲ ਗੈਸ ਦੁਖਾਂਤ 1984 ਤੋਂ ਬਾਅਦ ਅਨੁਛੇਦ 253 ਤਹਿਤ ਬਣਿਆ "ਛਤਰੀ ਕਾਨੂੰਨ"); ਪ੍ਰੋਜੈਕਟ ਐਲੀਫੈਂਟ = 1992; ਜੈਵ-ਵਿਭਿੰਨਤਾ ਐਕਟ = 2002; ਅਤੇ NGT ਐਕਟ = 2010।',
      hi: 'प्रमुख भारतीय पर्यावरण कानून और परियोजनाएं: वन्यजीव (संरक्षण) अधिनियम = 1972; प्रोजेक्ट टाइगर = 1 अप्रैल 1973; जल अधिनियम = 1974; वन (संरक्षण) अधिनियम = 1980; वायु अधिनियम = 1981; पर्यावरण (संरक्षण) अधिनियम = 1986 (1984 की भोपाल गैस त्रासदी के बाद अनुच्छेद 253 के तहत पारित "छाता विधान"); प्रोजेक्ट एलीफेंट = 1992; जैव-विविधता अधिनियम = 2002; और NGT अधिनियम = 2010।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-env-11',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'What happens to a freshwater lake when agricultural runoff rich in nitrates and phosphates causes "Eutrophication" (algal bloom), and how does it affect Biochemical Oxygen Demand (BOD) and Dissolved Oxygen (DO)?',
      pa: 'ਜਦੋਂ ਖੇਤੀਬਾੜੀ ਦੇ ਵਹਾਅ ਵਿੱਚ ਮੌਜੂਦ ਨਾਈਟ੍ਰੇਟ ਅਤੇ ਫਾਸਫੇਟ ਕਾਰਨ ਕਿਸੇ ਝੀਲ ਵਿੱਚ "ਯੂਟ੍ਰੋਫਿਕੇਸ਼ਨ" (Eutrophication / ਕਾਈ ਦਾ ਤੇਜ਼ੀ ਨਾਲ ਵਧਣਾ) ਹੁੰਦਾ ਹੈ, ਤਾਂ ਪਾਣੀ ਦੀ "ਬਾਇਓਕੈਮੀਕਲ ਆਕਸੀਜਨ ਡਿਮਾਂਡ" (BOD) ਅਤੇ "ਘੁਲੀ ਹੋਈ ਆਕਸੀਜਨ" (DO) ਉੱਤੇ ਕੀ ਪ੍ਰਭਾਵ ਪੈਂਦਾ ਹੈ?',
      hi: 'जब कृषि अपवाह में मौजूद नाइट्रेट और फॉस्फेट के कारण किसी झील में "सुपोषण" (Eutrophication / शैवाल प्रस्फुटन) होता है, तो जल की "जैव-रासायनिक ऑक्सीजन मांग" (BOD) और "घुलित ऑक्सीजन" (DO) पर क्या प्रभाव पड़ता है?',
    },
    options: {
      A: {
        en: 'BOD decreases sharply and Dissolved Oxygen (DO) increases, boosting fish populations',
        pa: 'BOD ਘਟ ਜਾਂਦੀ ਹੈ ਅਤੇ ਘੁਲੀ ਹੋਈ ਆਕਸੀਜਨ (DO) ਵਧ ਜਾਂਦੀ ਹੈ, ਜਿਸ ਨਾਲ ਮੱਛੀਆਂ ਦੀ ਗਿਣਤੀ ਵਧਦੀ ਹੈ',
        hi: 'BOD तेजी से घटती है और घुलित ऑक्सीजन (DO) बढ़ जाती है, जिससे मछलियों की संख्या बढ़ती है',
      },
      B: {
        en: 'Both BOD and Dissolved Oxygen remain completely unchanged',
        pa: 'BOD ਅਤੇ ਘੁਲੀ ਹੋਈ ਆਕਸੀਜਨ ਦੋਵੇਂ ਬਿਲਕੁਲ ਸਥਿਰ ਰਹਿੰਦੇ ਹਨ',
        hi: 'BOD और घुलित ऑक्सीजन दोनों पूर्णतः अपरिवर्तित रहते हैं',
      },
      C: {
        en: 'Nutrient enrichment triggers dense algal blooms; as aerobic bacteria decompose the organic matter, Biochemical Oxygen Demand (BOD) rises sharply while Dissolved Oxygen (DO) plummets, causing hypoxia and mass mortality of fish',
        pa: 'ਪੋਸ਼ਕ ਤੱਤਾਂ (ਨਾਈਟ੍ਰੇਟ ਤੇ ਫਾਸਫੇਟ) ਦੀ ਬਹੁਤਾਤ ਨਾਲ ਕਾਈ (Algal Bloom) ਵਧ ਜਾਂਦੀ ਹੈ; ਜੈਵਿਕ ਪਦਾਰਥਾਂ ਨੂੰ ਗਾਲਣ ਵਾਲੇ ਜੀਵਾਣੂਆਂ ਕਾਰਨ ਬਾਇਓਕੈਮੀਕਲ ਆਕਸੀਜਨ ਡਿਮਾਂਡ (BOD) ਬਹੁਤ ਵਧ ਜਾਂਦੀ ਹੈ ਅਤੇ ਪਾਣੀ ਵਿੱਚ ਘੁਲੀ ਹੋਈ ਆਕਸੀਜਨ (DO) ਘਟ ਜਾਂਦੀ ਹੈ, ਜਿਸ ਨਾਲ ਜਲ-ਜੀਵ ਅਤੇ ਮੱਛੀਆਂ ਮਰਨ ਲੱਗਦੀਆਂ ਹਨ',
        hi: 'पोषक तत्वों (नाइट्रेट व फॉस्फेट) की अधिकता से शैवाल प्रस्फुटन (Algal Bloom) होता है; कार्बनिक पदार्थों के अपघटन से जैव-रासायनिक ऑक्सीजन मांग (BOD) तेजी से बढ़ जाती है और घुलित ऑक्सीजन (DO) घट जाती है, जिससे मछलियों व जलीय जीवों की मृत्यु होने लगती है',
      },
      D: {
        en: 'The lake water turns into pure distilled water free of microbes',
        pa: 'ਝੀਲ ਦਾ ਪਾਣੀ ਸੂਖਮ ਜੀਵਾਂ ਤੋਂ ਰਹਿਤ ਸ਼ੁੱਧ ਕਸ਼ੀਦਤ ਪਾਣੀ ਬਣ ਜਾਂਦਾ ਹੈ',
        hi: 'झील का पानी सूक्ष्मजीवों से मुक्त शुद्ध आसुत जल बन जाता है',
      },
    },
    correct: 'C',
    explanation: {
      en: 'Eutrophication is the nutrient enrichment of water bodies by nitrates and phosphates from fertilizers/sewage. It triggers explosive growth of algae ("algal bloom") and aquatic weeds like water hyacinth (Eichhornia, "Terror of Bengal"). Aerobic bacteria decomposing this organic load consume oxygen, causing Biochemical Oxygen Demand (BOD) to surge and Dissolved Oxygen (DO) to drop sharply, suffocating aquatic life.',
      pa: 'ਯੂਟ੍ਰੋਫਿਕੇਸ਼ਨ (ਸੁਪੋਸ਼ਣ) ਪਾਣੀ ਦੇ ਸਰੋਤਾਂ ਵਿੱਚ ਖਾਦਾਂ ਅਤੇ ਸੀਵਰੇਜ ਦੇ ਨਾਈਟ੍ਰੇਟ ਤੇ ਫਾਸਫੇਟ ਮਿਲਣ ਨਾਲ ਹੁੰਦਾ ਹੈ। ਇਸ ਨਾਲ ਕਾਈ (Algal Bloom) ਅਤੇ ਜਲ-ਕੁੰਭੀ ਬਹੁਤ ਵਧ ਜਾਂਦੀ ਹੈ। ਜੈਵਿਕ ਕਚਰੇ ਨੂੰ ਗਾਲਣ ਲਈ ਬੈਕਟੀਰੀਆ ਪਾਣੀ ਦੀ ਆਕਸੀਜਨ ਵਰਤ ਲੈਂਦੇ ਹਨ, ਜਿਸ ਨਾਲ BOD ਵਧ ਜਾਂਦੀ ਹੈ ਅਤੇ ਘੁਲੀ ਹੋਈ ਆਕਸੀਜਨ (DO) ਘਟ ਜਾਂਦੀ ਹੈ।',
      hi: 'यूट्रोफिकेशन (सुपोषण) जल निकायों में उर्वरकों व सीवेज के नाइट्रेट तथा फॉस्फेट मिलने से होता है। इससे शैवाल प्रस्फुटन (Algal Bloom) और जलकुंभी की अत्यधिक वृद्धि होती है। कार्बनिक पदार्थों के अपघटन में जीवाणु ऑक्सीजन का उपभोग कर लेते हैं, जिससे BOD बढ़ जाती है और घुलित ऑक्सीजन (DO) घट जाती है।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-env-12',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'What is "Biomagnification" (Biological Magnification), and why do non-biodegradable toxicants like DDT and Mercury reach their highest concentration in apex predators such as fish-eating birds (causing eggshell thinning)?',
      pa: '"ਬਾਇਓਮੈਗਨੀਫਿਕੇਸ਼ਨ" (ਜੈਵਿਕ ਆਵਰਧਨ) ਕੀ ਹੈ, ਅਤੇ ਡੀ.ਡੀ.ਟੀ. (DDT) ਤੇ ਪਾਰੇ (Mercury) ਵਰਗੇ ਅਣ-ਗਲਣਸ਼ੀਲ ਜ਼ਹਿਰੀਲੇ ਪਦਾਰਥਾਂ ਦੀ ਮਾਤਰਾ ਮੱਛੀ ਖਾਣ ਵਾਲੇ ਪੰਛੀਆਂ ਵਰਗੇ ਸਿਖਰਲੇ ਸ਼ਿਕਾਰੀਆਂ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਕਿਉਂ ਹੋ ਜਾਂਦੀ ਹੈ?',
      hi: '"बायोमैग्निफिकेशन" (जैविक आवर्धन) क्या है, और डीडीटी (DDT) तथा पारे (Mercury) जैसे अजैव-निम्नीकरणीय विषाक्त पदार्थों की सांद्रता मछली खाने वाले पक्षियों जैसे शीर्ष भक्षियों में सर्वाधिक क्यों हो जाती है?',
    },
    options: {
      A: {
        en: 'Because DDT and Mercury are water-soluble and excreted immediately by herbivores',
        pa: 'ਕਿਉਂਕਿ ਡੀ.ਡੀ.ਟੀ. ਅਤੇ ਪਾਰਾ ਪਾਣੀ ਵਿੱਚ ਘੁਲਣਸ਼ੀਲ ਹਨ ਅਤੇ ਸ਼ਾਕਾਹਾਰੀ ਜੀਵਾਂ ਦੁਆਰਾ ਤੁਰੰਤ ਬਾਹਰ ਕੱਢ ਦਿੱਤੇ ਜਾਂਦੇ ਹਨ',
        hi: 'क्योंकि डीडीटी और पारा जल में घुलनशील हैं और शाकाहारी जीवों द्वारा तुरंत उत्सर्जित कर दिए जाते हैं',
      },
      B: {
        en: 'Because producers synthesize DDT during photosynthesis',
        pa: 'ਕਿਉਂਕਿ ਪੌਦੇ ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ ਦੌਰਾਨ ਡੀ.ਡੀ.ਟੀ. ਬਣਾਉਂਦੇ ਹਨ',
        hi: 'क्योंकि पौधे प्रकाश संश्लेषण के दौरान डीडीटी का निर्माण करते हैं',
      },
      C: {
        en: 'Because apex predators drink more water than phytoplankton',
        pa: 'ਕਿਉਂਕਿ ਸਿਖਰਲੇ ਸ਼ਿਕਾਰੀ ਫਾਈਟੋਪਲੈਂਕਟਨ ਨਾਲੋਂ ਵੱਧ ਪਾਣੀ ਪੀਂਦੇ ਹਨ',
        hi: 'क्योंकि शीर्ष भक्षी फाइटोप्लैंकटन की तुलना में अधिक पानी पीते हैं',
      },
      D: {
        en: 'Because persistent lipophilic (fat-soluble) toxicants cannot be metabolized or excreted, so their concentration increases progressively at each successive trophic level of the food chain (Water -> Zooplankton -> Small Fish -> Large Fish -> Fish-eating Birds, where DDT disrupts calcium metabolism and thins eggshells)',
        pa: 'ਕਿਉਂਕਿ ਇਹ ਚਰਬੀ ਵਿੱਚ ਘੁਲਣਸ਼ੀਲ (fat-soluble) ਜ਼ਹਿਰੀਲੇ ਪਦਾਰਥ ਸਰੀਰ ਵਿੱਚੋਂ ਪਚਦੇ ਜਾਂ ਬਾਹਰ ਨਹੀਂ ਨਿਕਲਦੇ, ਇਸ ਲਈ ਭੋਜਨ ਲੜੀ ਦੇ ਹਰੇਕ ਅਗਲੇ ਪੋਸ਼ਣ ਪੱਧਰ (ਪਾਣੀ -> ਜ਼ੂਪਲੈਂਕਟਨ -> ਛੋਟੀ ਮੱਛੀ -> ਵੱਡੀ ਮੱਛੀ -> ਮੱਛੀ ਖਾਣ ਵਾਲੇ ਪੰਛੀ) ਤੇ ਇਹਨਾਂ ਦੀ ਸੰਘਣਤਾ ਵਧਦੀ ਜਾਂਦੀ ਹੈ ਅਤੇ ਪੰਛੀਆਂ ਵਿੱਚ ਕੈਲਸ਼ੀਅਮ ਮੈਟਾਬੋਲਿਜ਼ਮ ਵਿਗੜਨ ਨਾਲ ਅੰਡਿਆਂ ਦੇ ਖੋਲ ਪਤਲੇ ਹੋ ਕੇ ਟੁੱਟ ਜਾਂਦੇ ਹਨ',
        hi: 'क्योंकि ये वसा-घुलनशील विषाक्त पदार्थ उपापचयित या उत्सर्जित नहीं हो पाते, इसलिए खाद्य श्रृंखला के प्रत्येक क्रमिक पोषण स्तर (जल -> जूप्लैंकटन -> छोटी मछली -> बड़ी मछली -> मत्स्य-भक्षी पक्षी) पर इनकी सांद्रता बढ़ती जाती है और पक्षियों में कैल्शियम उपापचय बाधित होने से अंडों के कवच पतले होकर समय से पहले टूट जाते हैं',
      },
    },
    correct: 'D',
    explanation: {
      en: 'Biomagnification refers to the progressive increase in concentration of a persistent toxicant (such as DDT or Methylmercury) at successive trophic levels in a food chain. In NCERT’s classic aquatic food chain example, DDT increases from 0.003 ppb in water to 0.04 ppm in zooplankton, 0.5 ppm in small fish, 2 ppm in large fish, and 25 ppm in fish-eating birds, where high DDT interferes with calcium metabolism, causing premature breaking of thin eggshells.',
      pa: 'ਬਾਇਓਮੈਗਨੀਫਿਕੇਸ਼ਨ (ਜੈਵਿਕ ਆਵਰਧਨ) ਭੋਜਨ ਲੜੀ ਦੇ ਹਰੇਕ ਅਗਲੇ ਪੋਸ਼ਣ ਪੱਧਰ ਤੇ ਡੀ.ਡੀ.ਟੀ. (DDT) ਜਾਂ ਪਾਰੇ ਵਰਗੇ ਜ਼ਹਿਰੀਲੇ ਪਦਾਰਥਾਂ ਦੀ ਸੰਘਣਤਾ ਵਿੱਚ ਲਗਾਤਾਰ ਵਾਧੇ ਨੂੰ ਕਹਿੰਦੇ ਹਨ। NCERT ਅਨੁਸਾਰ ਪਾਣੀ ਵਿੱਚ 0.003 ppb ਡੀ.ਡੀ.ਟੀ. ਵਧਦੇ ਹੋਏ ਮੱਛੀ ਖਾਣ ਵਾਲੇ ਪੰਛੀਆਂ ਵਿੱਚ 25 ppm ਤੱਕ ਪਹੁੰਚ ਜਾਂਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਪੰਛੀਆਂ ਦੇ ਅੰਡਿਆਂ ਦੇ ਖੋਲ ਪਤਲੇ ਹੋ ਕੇ ਸਮੇਂ ਤੋਂ ਪਹਿਲਾਂ ਟੁੱਟ ਜਾਂਦੇ ਹਨ।',
      hi: 'बायोमैग्निफिकेशन (जैविक आवर्धन) खाद्य श्रृंखला के प्रत्येक क्रमिक पोषण स्तर पर डीडीटी (DDT) या पारे जैसे विषाक्त पदार्थों की सांद्रता में क्रमिक वृद्धि को कहते हैं। NCERT के अनुसार जल में 0.003 ppb डीडीटी बढ़ते हुए मत्स्य-भक्षी पक्षियों में 25 ppm तक पहुँच जाता है, जिससे पक्षियों के अंडों के कवच पतले होकर समय से पहले टूट जाते हैं।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-env-13',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Match the following environmental pollution-induced diseases with their causative heavy metal or chemical contaminant in water:',
      pa: 'ਪਾਣੀ ਦੇ ਪ੍ਰਦੂਸ਼ਣ ਕਾਰਨ ਹੋਣ ਵਾਲੀਆਂ ਹੇਠ ਲਿਖੀਆਂ ਬਿਮਾਰੀਆਂ ਦਾ ਉਹਨਾਂ ਦੇ ਜ਼ਿੰਮੇਵਾਰ ਭਾਰੀ ਧਾਤੂ ਜਾਂ ਰਸਾਇਣਕ ਪ੍ਰਦੂਸ਼ਕ ਨਾਲ ਸਹੀ ਮਿਲਾਨ ਕਰੋ:',
      hi: 'जल प्रदूषण के कारण होने वाले निम्नलिखित रोगों का उनके उत्तरदायी भारी धातु या रासायनिक प्रदूषक के साथ सही मिलान करें:',
    },
    options: {
      A: {
        en: 'Minamata Disease: Mercury (Hg); Itai-Itai (Ouch-Ouch) Disease: Cadmium (Cd); Blue Baby Syndrome (Methaemoglobinaemia): Excess Nitrate (NO3-); Blackfoot Disease: Arsenic (As)',
        pa: 'ਮਿਨਾਮਾਤਾ ਰੋਗ: ਪਾਰਾ (Mercury - Hg); ਇਤਾਈ-ਇਤਾਈ ਰੋਗ: ਕੈਡਮੀਅਮ (Cadmium - Cd); ਬਲੂ ਬੇਬੀ ਸਿੰਡਰੋਮ (ਮੈਥੀਮੋਗਲੋਬੀਨੇਮੀਆ): ਨਾਈਟ੍ਰੇਟ (Nitrate - NO3-) ਦੀ ਬਹੁਤਾਤ; ਬਲੈਕਫੁੱਟ ਰੋਗ: ਆਰਸੈਨਿਕ (Arsenic - As)',
        hi: 'मिनामाता रोग: पारा (Mercury - Hg); इताई-इताई रोग: कैडमियम (Cadmium - Cd); ब्लू बेबी सिंड्रोम (मेथेमोग्लोबिनेमिया): नाइट्रेट (Nitrate - NO3-) की अधिकता; ब्लैकफुट रोग: आर्सेनिक (Arsenic - As)',
      },
      B: {
        en: 'Minamata Disease: Cadmium; Itai-Itai Disease: Mercury; Blue Baby Syndrome: Fluoride',
        pa: 'ਮਿਨਾਮਾਤਾ ਰੋਗ: ਕੈਡਮੀਅਮ; ਇਤਾਈ-ਇਤਾਈ ਰੋਗ: ਪਾਰਾ; ਬਲੂ ਬੇਬੀ ਸਿੰਡਰੋਮ: ਫਲੋਰਾਈਡ',
        hi: 'मिनामाता रोग: कैडमियम; इताई-इताई रोग: पारा; ब्लू बेबी सिंड्रोम: फ्लोराइड',
      },
      C: {
        en: 'Minamata Disease: Arsenic; Itai-Itai Disease: Lead; Blue Baby Syndrome: Iron',
        pa: 'ਮਿਨਾਮਾਤਾ ਰੋਗ: ਆਰਸੈਨਿਕ; ਇਤਾਈ-ਇਤਾਈ ਰੋਗ: ਸਿੱਕਾ (Lead); ਬਲੂ ਬੇਬੀ ਸਿੰਡਰੋਮ: ਲੋਹਾ',
        hi: 'मिनामाता रोग: आर्सेनिक; इताई-इताई रोग: सीसा (Lead); ब्लू बेबी सिंड्रोम: लोहा',
      },
      D: {
        en: 'Minamata Disease: Nitrate; Itai-Itai Disease: Arsenic; Blackfoot Disease: Cadmium',
        pa: 'ਮਿਨਾਮਾਤਾ ਰੋਗ: ਨਾਈਟ੍ਰੇਟ; ਇਤਾਈ-ਇਤਾਈ ਰੋਗ: ਆਰਸੈਨਿਕ; ਬਲੈਕਫੁੱਟ ਰੋਗ: ਕੈਡਮੀਅਮ',
        hi: 'मिनामाता रोग: नाइट्रेट; इताई-इताई रोग: आर्सेनिक; ब्लैकफुट रोग: कैडमियम',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Classic water pollution diseases: (1) Minamata Disease (neurological syndrome first discovered in Minamata Bay, Japan in 1956) is caused by Mercury (methylmercury) poisoning in fish; (2) Itai-Itai ("Ouch-Ouch") disease causing painful bone softening and kidney failure is caused by Cadmium (Cd) contamination; (3) Blue Baby Syndrome (Methaemoglobinaemia, reducing oxygen-carrying capacity of blood in infants) is caused by excess Nitrate (>45–50 mg/L) in drinking water; (4) Blackfoot Disease is caused by chronic Arsenic (As) exposure; and (5) Knock-Knee Syndrome / Dental & Skeletal Fluorosis is caused by excess Fluoride.',
      pa: 'ਜਲ ਪ੍ਰਦੂਸ਼ਣ ਨਾਲ ਹੋਣ ਵਾਲੇ ਪ੍ਰਮੁੱਖ ਰੋਗ: (1) ਮਿਨਾਮਾਤਾ ਰੋਗ — ਪਾਰੇ (Mercury) ਦੇ ਪ੍ਰਦੂਸ਼ਣ ਕਾਰਨ; (2) ਇਤਾਈ-ਇਤਾਈ ਰੋਗ (ਹੱਡੀਆਂ ਅਤੇ ਗੁਰਦਿਆਂ ਦਾ ਰੋਗ) — ਕੈਡਮੀਅਮ (Cadmium) ਕਾਰਨ; (3) ਬਲੂ ਬੇਬੀ ਸਿੰਡਰੋਮ (ਬੱਚਿਆਂ ਦੇ ਖੂਨ ਵਿੱਚ ਆਕਸੀਜਨ ਲੈ ਜਾਣ ਦੀ ਸਮਰੱਥਾ ਘਟਣਾ) — ਪੀਣ ਵਾਲੇ ਪਾਣੀ ਵਿੱਚ ਨਾਈਟ੍ਰੇਟ (Nitrate) ਦੀ ਬਹੁਤਾਤ ਕਾਰਨ; ਅਤੇ (4) ਬਲੈਕਫੁੱਟ ਰੋਗ — ਆਰਸੈਨਿਕ (Arsenic) ਕਾਰਨ ਹੁੰਦਾ ਹੈ।',
      hi: 'जल प्रदूषण जनित प्रमुख रोग: (1) मिनामाता रोग — पारे (Mercury) के प्रदूषण से; (2) इताई-इताई रोग (हड्डियों व गुर्दे का रोग) — कैडमियम (Cadmium) से; (3) ब्लू बेबी सिंड्रोम (शिशुओं के रक्त में ऑक्सीजन वहन क्षमता घटना) — पेयजल में नाइट्रेट (Nitrate) की अधिकता से; और (4) ब्लैकफुट रोग — आर्सेनिक (Arsenic) के प्रदूषण से होता है।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-env-14',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Launched on 30 June 2008, India’s National Action Plan on Climate Change (NAPCC) outlines how many core "National Missions", and which of the following is NOT one of those eight original missions?',
      pa: '30 ਜੂਨ 2008 ਨੂੰ ਜਾਰੀ ਕੀਤੀ ਗਈ ਭਾਰਤ ਦੀ "ਜਲਵਾਯੂ ਪਰਿਵਰਤਨ ਤੇ ਰਾਸ਼ਟਰੀ ਕਾਰਜ ਯੋਜਨਾ" (NAPCC) ਵਿੱਚ ਕਿੰਨੇ ਮੁੱਖ "ਰਾਸ਼ਟਰੀ ਮਿਸ਼ਨ" ਸ਼ਾਮਲ ਹਨ, ਅਤੇ ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਉਹਨਾਂ ਅੱਠ ਮੂਲ ਮਿਸ਼ਨਾਂ ਵਿੱਚੋਂ ਇੱਕ ਨਹੀਂ ਹੈ?',
      hi: '30 जून 2008 को प्रारंभ की गई भारत की "जलवायु परिवर्तन पर राष्ट्रीय कार्य योजना" (NAPCC) में कितने मूल "राष्ट्रीय मिशन" शामिल हैं, और निम्नलिखित में से कौन-सा उन आठ मूल मिशनों में से एक नहीं है?',
    },
    options: {
      A: {
        en: '8 Missions; National Solar Mission and National Mission for Enhanced Energy Efficiency are included',
        pa: '8 ਮਿਸ਼ਨ; ਰਾਸ਼ਟਰੀ ਸੌਰ ਮਿਸ਼ਨ ਅਤੇ ਊਰਜਾ ਕੁਸ਼ਲਤਾ ਵਧਾਉਣ ਲਈ ਰਾਸ਼ਟਰੀ ਮਿਸ਼ਨ ਇਸ ਵਿੱਚ ਸ਼ਾਮਲ ਹਨ',
        hi: '8 मिशन; राष्ट्रीय सौर मिशन और संवर्धित ऊर्जा दक्षता के लिए राष्ट्रीय मिशन इसमें शामिल हैं',
      },
      B: {
        en: '8 Missions; "National Mission on Deep Ocean Nuclear Mining" is NOT one of the eight NAPCC missions (the 8 missions are: Solar, Enhanced Energy Efficiency, Sustainable Habitat, Water, Sustaining the Himalayan Ecosystem, Green India, Sustainable Agriculture, and Strategic Knowledge for Climate Change)',
        pa: '8 ਮਿਸ਼ਨ; "ਡੀਪ ਓਸ਼ੀਅਨ ਨਿਊਕਲੀਅਰ ਮਾਈਨਿੰਗ ਮਿਸ਼ਨ" NAPCC ਦੇ ਅੱਠ ਮਿਸ਼ਨਾਂ ਵਿੱਚੋਂ ਨਹੀਂ ਹੈ (8 ਮੂਲ ਮਿਸ਼ਨ ਹਨ: ਸੌਰ ਮਿਸ਼ਨ, ਊਰਜਾ ਕੁਸ਼ਲਤਾ, ਟਿਕਾਊ ਨਿਵਾਸ, ਜਲ ਮਿਸ਼ਨ, ਹਿਮਾਲੀਅਨ ਪਰਿਸਥਿਤੀ ਤੰਤਰ, ਗ੍ਰੀਨ ਇੰਡੀਆ, ਟਿਕਾਊ ਖੇਤੀਬਾੜੀ ਅਤੇ ਜਲਵਾਯੂ ਪਰਿਵਰਤਨ ਲਈ ਰਣਨੀਤਕ ਗਿਆਨ)',
        hi: '8 मिशन; "डीप ओशन न्यूक्लियर माइनिंग मिशन" NAPCC के आठ मिशनों में शामिल नहीं है (8 मूल मिशन हैं: सौर मिशन, संवर्धित ऊर्जा दक्षता, सतत पर्यावास, राष्ट्रीय जल मिशन, हिमालयी पारिस्थितिकी तंत्र, हरित भारत/ग्रीन इंडिया, सतत कृषि और जलवायु परिवर्तन हेतु रणनीतिक ज्ञान)',
      },
      C: {
        en: '12 Missions; National Mission for a Green India is excluded',
        pa: '12 ਮਿਸ਼ਨ; ਗ੍ਰੀਨ ਇੰਡੀਆ ਮਿਸ਼ਨ ਇਸ ਵਿੱਚ ਸ਼ਾਮਲ ਨਹੀਂ ਹੈ',
        hi: '12 मिशन; हरित भारत (ग्रीन इंडिया) मिशन इसमें शामिल नहीं है',
      },
      D: {
        en: '5 Missions; National Water Mission is excluded',
        pa: '5 ਮਿਸ਼ਨ; ਰਾਸ਼ਟਰੀ ਜਲ ਮਿਸ਼ਨ ਇਸ ਵਿੱਚ ਸ਼ਾਮਲ ਨਹੀਂ ਹੈ',
        hi: '5 मिशन; राष्ट्रीय जल मिशन इसमें शामिल नहीं है',
      },
    },
    correct: 'B',
    explanation: {
      en: 'Launched on 30 June 2008, the National Action Plan on Climate Change (NAPCC) comprises 8 core National Missions: (1) National Solar Mission, (2) National Mission for Enhanced Energy Efficiency, (3) National Mission on Sustainable Habitat, (4) National Water Mission, (5) National Mission for Sustaining the Himalayan Ecosystem, (6) National Mission for a Green India, (7) National Mission for Sustainable Agriculture, and (8) National Mission on Strategic Knowledge for Climate Change.',
      pa: '30 ਜੂਨ 2008 ਨੂੰ ਸ਼ੁਰੂ ਕੀਤੀ ਗਈ "ਜਲਵਾਯੂ ਪਰਿਵਰਤਨ ਤੇ ਰਾਸ਼ਟਰੀ ਕਾਰਜ ਯੋਜਨਾ" (NAPCC) ਵਿੱਚ 8 ਰਾਸ਼ਟਰੀ ਮਿਸ਼ਨ ਸ਼ਾਮਲ ਹਨ: (1) ਰਾਸ਼ਟਰੀ ਸੌਰ ਮਿਸ਼ਨ, (2) ਊਰਜਾ ਕੁਸ਼ਲਤਾ ਮਿਸ਼ਨ, (3) ਟਿਕਾਊ ਨਿਵਾਸ ਮਿਸ਼ਨ, (4) ਰਾਸ਼ਟਰੀ ਜਲ ਮਿਸ਼ਨ, (5) ਹਿਮਾਲੀਅਨ ਪਰਿਸਥਿਤੀ ਤੰਤਰ ਦੀ ਸੰਭਾਲ ਮਿਸ਼ਨ, (6) ਗ੍ਰੀਨ ਇੰਡੀਆ ਮਿਸ਼ਨ, (7) ਟਿਕਾਊ ਖੇਤੀਬਾੜੀ ਮਿਸ਼ਨ, ਅਤੇ (8) ਜਲਵਾਯੂ ਪਰਿਵਰਤਨ ਲਈ ਰਣਨੀਤਕ ਗਿਆਨ ਮਿਸ਼ਨ।',
      hi: '30 जून 2008 को प्रारंभ की गई "जलवायु परिवर्तन पर राष्ट्रीय कार्य योजना" (NAPCC) में 8 राष्ट्रीय मिशन शामिल हैं: (1) राष्ट्रीय सौर मिशन, (2) संवर्धित ऊर्जा दक्षता मिशन, (3) सतत पर्यावास मिशन, (4) राष्ट्रीय जल मिशन, (5) हिमालयी पारिस्थितिकी तंत्र संरक्षण मिशन, (6) हरित भारत (ग्रीन इंडिया) मिशन, (7) सतत कृषि मिशन, और (8) जलवायु परिवर्तन हेतु रणनीतिक ज्ञान मिशन।',
    },
    difficulty: 'hard',
  },
  {
    id: 'q-ppsc-clk-env-15',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which gaseous pollutants emitted from thermal power plants, oil refineries, and automobile exhausts react with atmospheric water vapour to form Sulphuric Acid (H2SO4) and Nitric Acid (HNO3), causing "Acid Rain" (pH below 5.6) and "Marble Cancer" of monuments like the Taj Mahal?',
      pa: 'ਥਰਮਲ ਪਾਵਰ ਪਲਾਂਟਾਂ, ਤੇਲ ਰਿਫਾਇਨਰੀਆਂ ਅਤੇ ਵਾਹਨਾਂ ਦੇ ਧੂੰਏਂ ਵਿੱਚੋਂ ਨਿਕਲਣ ਵਾਲੀਆਂ ਕਿਹੜੀਆਂ ਗੈਸਾਂ ਵਾਯੂਮੰਡਲ ਦੇ ਜਲ-ਵਾਸ਼ਪਾਂ ਨਾਲ ਕਿਰਿਆ ਕਰਕੇ ਸਲਫਿਊਰਿਕ ਐਸਿਡ (H2SO4) ਅਤੇ ਨਾਈਟ੍ਰਿਕ ਐਸਿਡ (HNO3) ਬਣਾਉਂਦੀਆਂ ਹਨ, ਜਿਸ ਨਾਲ "ਤੇਜ਼ਾਬੀ ਵਰਖਾ" (Acid Rain — pH 5.6 ਤੋਂ ਘੱਟ) ਅਤੇ ਤਾਜ ਮਹਿਲ ਦਾ "ਮਾਰਬਲ ਕੈਂਸਰ" ਹੁੰਦਾ ਹੈ?',
      hi: 'ताप विद्युत संयंत्रों, तेल रिफाइनरियों और वाहनों के धुएं से निकलने वाली कौन-सी गैसें वायुमंडलीय जलवाष्प के साथ अभिक्रिया कर सल्फ्यूरिक अम्ल (H2SO4) और नाइट्रिक अम्ल (HNO3) बनाती हैं, जिससे "अम्लीय वर्षा" (Acid Rain — pH 5.6 से कम) और ताजमहल का "मार्बल कैंसर" होता है?',
    },
    options: {
      A: {
        en: 'Methane (CH4) and Ammonia (NH3)',
        pa: 'ਮੀਥੇਨ (CH4) ਅਤੇ ਅਮੋਨੀਆ (NH3)',
        hi: 'मीथेन (CH4) और अमोनिया (NH3)',
      },
      B: {
        en: 'Carbon Monoxide (CO) and Hydrogen Sulphide (H2S)',
        pa: 'ਕਾਰਬਨ ਮੋਨੋਆਕਸਾਈਡ (CO) ਅਤੇ ਹਾਈਡ੍ਰੋਜਨ ਸਲਫ਼ਾਈਡ (H2S)',
        hi: 'कार्बन मोनोऑक्साइड (CO) और हाइड्रोजन सल्फाइड (H2S)',
      },
      C: {
        en: 'Oxides of Sulphur (SO2) and Oxides of Nitrogen (NOx)',
        pa: 'ਸਲਫ਼ਰ ਦੇ ਆਕਸਾਈਡ (SO2) ਅਤੇ ਨਾਈਟ੍ਰੋਜਨ ਦੇ ਆਕਸਾਈਡ (NOx)',
        hi: 'सल्फर के ऑक्साइड (SO2) और नाइट्रोजन के ऑक्साइड (NOx)',
      },
      D: {
        en: 'Chlorofluorocarbons (CFCs) and Argon (Ar)',
        pa: 'ਕਲੋਰੋਫਲੋਰੋਕਾਰਬਨ (CFCs) ਅਤੇ ਆਰਗਨ (Ar)',
        hi: 'क्लोरोफ्लोरोकार्बन (CFCs) और आर्गन (Ar)',
      },
    },
    correct: 'C',
    explanation: {
      en: 'Normal rainwater has a pH of ~5.6 due to dissolved CO2 forming weak carbonic acid. When pH drops below 5.6 due to oxidation of Sulphur Dioxide (SO2 -> H2SO4) and Nitrogen Oxides (NOx -> HNO3) in the atmosphere, it is called Acid Rain. Acid rain reacts with the calcium carbonate (CaCO3) of white marble to form calcium sulphate, causing yellowing and corrosion known as "Stone Leprosy" or "Marble Cancer".',
      pa: 'ਸਧਾਰਨ ਮੀਂਹ ਦੇ ਪਾਣੀ ਦਾ pH ਲਗਭਗ 5.6 ਹੁੰਦਾ ਹੈ। ਜਦੋਂ ਵਾਯੂਮੰਡਲ ਵਿੱਚ ਸਲਫ਼ਰ ਡਾਈਆਕਸਾਈਡ (SO2) ਅਤੇ ਨਾਈਟ੍ਰੋਜਨ ਦੇ ਆਕਸਾਈਡ (NOx) ਪਾਣੀ ਨਾਲ ਮਿਲ ਕੇ ਸਲਫਿਊਰਿਕ ਐਸਿਡ (H2SO4) ਅਤੇ ਨਾਈਟ੍ਰਿਕ ਐਸਿਡ (HNO3) ਬਣਾਉਂਦੇ ਹਨ, ਤਾਂ ਮੀਂਹ ਦਾ pH 5.6 ਤੋਂ ਘਟ ਜਾਂਦਾ ਹੈ ਜਿਸ ਨੂੰ "ਤੇਜ਼ਾਬੀ ਵਰਖਾ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
      hi: 'सामान्य वर्षा जल का pH लगभग 5.6 होता है। जब वायुमंडल में सल्फर डाइऑक्साइड (SO2) और नाइट्रोजन के ऑक्साइड (NOx) जलवाष्प से अभिक्रिया कर सल्फ्यूरिक अम्ल (H2SO4) और नाइट्रिक अम्ल (HNO3) बनाते हैं, तो वर्षा जल का pH 5.6 से कम हो जाता है जिसे "अम्लीय वर्षा" कहा जाता है।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-env-16',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which international organization publishes the "Red Data Book" (IUCN Red List of Threatened Species) on pink pages for critically endangered species, and where is its global headquarters located?',
      pa: 'ਕਿਹੜੀ ਅੰਤਰਰਾਸ਼ਟਰੀ ਸੰਸਥਾ ਖ਼ਤਰੇ ਵਿੱਚ ਪਈਆਂ ਪ੍ਰਜਾਤੀਆਂ ਦੀ ਸੂਚੀ ਵਾਲੀ "ਰੈੱਡ ਡਾਟਾ ਬੁੱਕ" (Red Data Book) ਪ੍ਰਕਾਸ਼ਿਤ ਕਰਦੀ ਹੈ, ਅਤੇ ਇਸ ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ (Headquarters) ਕਿੱਥੇ ਸਥਿਤ ਹੈ?',
      hi: 'कौन-सा अंतर्राष्ट्रीय संगठन संकटग्रस्त प्रजातियों की सूची वाली "रेड डाटा बुक" (Red Data Book) प्रकाशित करता है, और इसका वैश्विक मुख्यालय कहाँ स्थित है?',
    },
    options: {
      A: {
        en: 'United Nations Environment Programme (UNEP); Nairobi, Kenya',
        pa: 'ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਵਾਤਾਵਰਣ ਪ੍ਰੋਗਰਾਮ (UNEP); ਨੈਰੋਬੀ, ਕੀਨੀਆ',
        hi: 'संयुक्त राष्ट्र पर्यावरण कार्यक्रम (UNEP); नैरोबी, केन्या',
      },
      B: {
        en: 'World Wide Fund for Nature (WWF); Geneva, Switzerland',
        pa: 'ਵਰਲਡ ਵਾਈਡ ਫੰਡ ਫਾਰ ਨੇਚਰ (WWF); ਜਨੇਵਾ, ਸਵਿਟਜ਼ਰਲੈਂਡ',
        hi: 'वर्ल्ड वाइड फंड फॉर नेचर (WWF); जिनेवा, स्विट्जरलैंड',
      },
      C: {
        en: 'Greenpeace International; Amsterdam, Netherlands',
        pa: 'ਗ੍ਰੀਨਪੀਸ ਇੰਟਰਨੈਸ਼ਨਲ; ਐਮਸਟਰਡਮ, ਨੀਦਰਲੈਂਡਜ਼',
        hi: 'ग्रीनपीस इंटरनेशनल; एम्स्टर्डम, नीदरलैंड',
      },
      D: {
        en: 'International Union for Conservation of Nature (IUCN, founded in 1948); Gland, Switzerland',
        pa: 'ਇੰਟਰਨੈਸ਼ਨਲ ਯੂਨੀਅਨ ਫਾਰ ਕੰਜ਼ਰਵੇਸ਼ਨ ਆਫ਼ ਨੇਚਰ (IUCN, 1948 ਵਿੱਚ ਸਥਾਪਿਤ); ਗਲਾਂਡ (Gland), ਸਵਿਟਜ਼ਰਲੈਂਡ',
        hi: 'अंतर्राष्ट्रीय प्रकृति संरक्षण संघ (IUCN, 1948 में स्थापित); ग्लांड (Gland), स्विट्जरलैंड',
      },
    },
    correct: 'D',
    explanation: {
      en: 'Founded in 1948 and headquartered in Gland, Switzerland, the International Union for Conservation of Nature (IUCN) publishes the Red Data Book / IUCN Red List of Threatened Species (initiated in 1964), classifying species into 9 categories including Extinct (EX), Critically Endangered (CR), Endangered (EN), and Vulnerable (VU). Note: UNEP is headquartered in Nairobi (Kenya), while WWF is also headquartered in Gland (Switzerland).',
      pa: '1948 ਵਿੱਚ ਸਥਾਪਿਤ "ਇੰਟਰਨੈਸ਼ਨਲ ਯੂਨੀਅਨ ਫਾਰ ਕੰਜ਼ਰਵੇਸ਼ਨ ਆਫ਼ ਨੇਚਰ" (IUCN), ਜਿਸ ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਗਲਾਂਡ (ਸਵਿਟਜ਼ਰਲੈਂਡ) ਵਿਖੇ ਹੈ, 1964 ਤੋਂ ਸੰਕਟਗ੍ਰਸਤ ਪ੍ਰਜਾਤੀਆਂ ਬਾਰੇ "ਰੈੱਡ ਡਾਟਾ ਬੁੱਕ" (Red Data Book) ਜਾਰੀ ਕਰਦੀ ਹੈ। (UNEP ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਨੈਰੋਬੀ, ਕੀਨੀਆ ਵਿਖੇ ਹੈ)।',
      hi: '1948 में स्थापित "अंतर्राष्ट्रीय प्रकृति संरक्षण संघ" (IUCN), जिसका मुख्यालय ग्लांड (स्विट्जरलैंड) में है, 1964 से संकटग्रस्त प्रजातियों की "रेड डाटा बुक" (Red Data Book) प्रकाशित करता है। (UNEP का मुख्यालय नैरोबी, केन्या में है)।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-env-17',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which wildlife sanctuary located in Fazilka district (Abohar) of Punjab is famous as Asia’s largest open wildlife sanctuary protecting the State Animal of Punjab—the Blackbuck (Antilope cervicapra / ਕਾਲਾ ਹਿਰਨ)—through the traditional conservation ethos of the Bishnoi community?',
      pa: 'ਪੰਜਾਬ ਦੇ ਫਾਜ਼ਿਲਕਾ ਜ਼ਿਲ੍ਹੇ (ਅਬੋਹਰ) ਵਿੱਚ ਸਥਿਤ ਕਿਹੜੀ ਜੰਗਲੀ ਜੀਵ ਰੱਖ ਬਿਸ਼ਨੋਈ ਭਾਈਚਾਰੇ ਦੇ ਸਹਿਯੋਗ ਨਾਲ ਪੰਜਾਬ ਦੇ ਰਾਜ ਪਸ਼ੂ "ਕਾਲੇ ਹਿਰਨ" (Blackbuck / Antilope cervicapra) ਦੀ ਸੁਰੱਖਿਆ ਲਈ ਏਸ਼ੀਆ ਦੀ ਸਭ ਤੋਂ ਵੱਡੀ ਖੁੱਲ੍ਹੀ ਜੰਗਲੀ ਜੀਵ ਰੱਖ ਵਜੋਂ ਪ੍ਰਸਿੱਧ ਹੈ?',
      hi: 'पंजाब के फाजिल्का जिले (अबोहर) में स्थित कौन-सा वन्यजीव अभयारण्य बिश्नोई समुदाय के पारंपरिक संरक्षण सहयोग से पंजाब के राज्य पशु "काला हिरण" (Blackbuck / Antilope cervicapra) के संरक्षण हेतु एशिया के सबसे बड़े खुले अभयारण्य के रूप में प्रसिद्ध है?',
    },
    options: {
      A: {
        en: 'Abohar Wildlife Sanctuary (Fazilka district); Punjab’s State Animal: Blackbuck, State Bird: Northern Goshawk (Baaz), State Tree: Sheesham (Tahli), State Aquatic Animal: Indus River Dolphin (Bhullan)',
        pa: 'ਅਬੋਹਰ ਜੰਗਲੀ ਜੀਵ ਰੱਖ (ਫਾਜ਼ਿਲਕਾ ਜ਼ਿਲ੍ਹਾ); ਪੰਜਾਬ ਦਾ ਰਾਜ ਪਸ਼ੂ: ਕਾਲਾ ਹਿਰਨ (Blackbuck), ਰਾਜ ਪੰਛੀ: ਬਾਜ਼ (Northern Goshawk), ਰਾਜ ਰੁੱਖ: ਟਾਹਲੀ (Sheesham), ਰਾਜ ਜਲ-ਜੀਵ: ਸਿੰਧ ਡੌਲਫਿਨ (ਭੁੱਲਣ)',
        hi: 'अबोहर वन्यजीव अभयारण्य (फाजिल्का जिला); पंजाब का राज्य पशु: काला हिरण (Blackbuck), राज्य पक्षी: बाज (Northern Goshawk), राज्य वृक्ष: शीशम (टाहली), राज्य जलीय जीव: सिंधु डॉल्फिन (भुल्लन)',
      },
      B: {
        en: 'Bir Moti Bagh Wildlife Sanctuary (Patiala)',
        pa: 'ਬੀੜ ਮੋਤੀ ਬਾਗ ਜੰਗਲੀ ਜੀਵ ਰੱਖ (ਪਟਿਆਲਾ)',
        hi: 'बीड़ मोती बाग वन्यजीव अभयारण्य (पटियाला)',
      },
      C: {
        en: 'Kathlaur Kushlian Wildlife Sanctuary (Pathankot)',
        pa: 'ਕਥਲੌਰ ਕੁਸ਼ਲੀਆਂ ਜੰਗਲੀ ਜੀਵ ਰੱਖ (ਪਠਾਨਕੋਟ)',
        hi: 'कथलौर कुशलियां वन्यजीव अभयारण्य (पठानकोट)',
      },
      D: {
        en: 'Jhajjar Bachauli Wildlife Sanctuary (Rupnagar)',
        pa: 'ਝੱਜਰ ਬਚੌਲੀ ਜੰਗਲੀ ਜੀਵ ਰੱਖ (ਰੂਪਨਗਰ)',
        hi: 'झज्जर बचौली वन्यजीव अभयारण्य (रूपनगर)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Abohar Wildlife Sanctuary (spread across 13 Bishnoi villages in Fazilka district) is an open sanctuary famous for protecting the Blackbuck (Antilope cervicapra), the State Animal of Punjab. For PPSC/PSSSB exams, remember Punjab’s state symbols: State Animal = Blackbuck (Kala Hiran), State Bird = Northern Goshawk (Baaz / Accipiter gentilis), State Tree = Sheesham (Dalbergia sissoo / Tahli), and State Aquatic Animal = Indus River Dolphin (Platanista minor / Bhullan, declared in 2019). Note: Punjab has 13 Wildlife Sanctuaries, 4 Community Reserves, and 0 National Parks.',
      pa: 'ਫਾਜ਼ਿਲਕਾ ਜ਼ਿਲ੍ਹੇ ਦੇ ਅਬੋਹਰ ਖੇਤਰ ਦੇ 13 ਬਿਸ਼ਨੋਈ ਪਿੰਡਾਂ ਵਿੱਚ ਫੈਲੀ "ਅਬੋਹਰ ਜੰਗਲੀ ਜੀਵ ਰੱਖ" ਪੰਜਾਬ ਦੇ ਰਾਜ ਪਸ਼ੂ "ਕਾਲੇ ਹਿਰਨ" (Blackbuck) ਦੀ ਸੰਭਾਲ ਲਈ ਪ੍ਰਸਿੱਧ ਹੈ। ਪੰਜਾਬ ਦੇ ਰਾਜ ਚਿੰਨ੍ਹ: ਰਾਜ ਪਸ਼ੂ = ਕਾਲਾ ਹਿਰਨ, ਰਾਜ ਪੰਛੀ = ਬਾਜ਼ (Northern Goshawk), ਰਾਜ ਰੁੱਖ = ਟਾਹਲੀ (Sheesham), ਅਤੇ ਰਾਜ ਜਲ-ਜੀਵ = ਸਿੰਧ ਡੌਲਫਿਨ (ਭੁੱਲਣ)। ਯਾਦ ਰੱਖੋ ਕਿ ਪੰਜਾਬ ਵਿੱਚ ਕੋਈ ਵੀ ਨੈਸ਼ਨਲ ਪਾਰਕ (National Park = 0) ਨਹੀਂ ਹੈ।',
      hi: 'फाजिल्का जिले के अबोहर क्षेत्र के 13 बिश्नोई गांवों में फैला "अबोहर वन्यजीव अभयारण्य" पंजाब के राज्य पशु "काला हिरण" (Blackbuck) के संरक्षण के लिए प्रसिद्ध है। पंजाब के राज्य प्रतीक: राज्य पशु = काला हिरण, राज्य पक्षी = बाज (Northern Goshawk), राज्य वृक्ष = शीशम (टाहली), और राज्य जलीय जीव = सिंधु डॉल्फिन (भुल्लन)। ध्यान रहे कि पंजाब में कोई भी राष्ट्रीय उद्यान (National Park = 0) नहीं है।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-env-18',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'In which type of ecosystem is the "Pyramid of Biomass" inverted (with primary consumers having a larger standing crop biomass than primary producers at any given instant)?',
      pa: 'ਕਿਸ ਪ੍ਰਕਾਰ ਦੇ ਪਰਿਸਥਿਤੀ ਤੰਤਰ (Ecosystem) ਵਿੱਚ "ਬਾਇਓਮਾਸ ਦਾ ਪਿਰਾਮਿਡ" (Pyramid of Biomass) ਉਲਟਾ (Inverted) ਹੁੰਦਾ ਹੈ, ਜਿੱਥੇ ਕਿਸੇ ਵੇਲੇ ਉਤਪਾਦਕਾਂ ਨਾਲੋਂ ਪ੍ਰਾਇਮਰੀ ਖਪਤਕਾਰਾਂ ਦਾ ਜੀਵ-ਭਾਰ ਵੱਧ ਹੁੰਦਾ ਹੈ?',
      hi: 'किस प्रकार के पारिस्थितिकी तंत्र (Ecosystem) में "जैव-भार का पिरामिड" (Pyramid of Biomass) उल्टा (Inverted) होता है, जहाँ किसी समय उत्पादकों की तुलना में प्राथमिक उपभोक्ताओं का जैव-भार अधिक होता है?',
    },
    options: {
      A: {
        en: 'Tropical Rainforest Ecosystem',
        pa: 'ਊਸ਼ਣ-ਕਟੀਬੰਧੀ ਬਰਸਾਤੀ ਜੰਗਲ ਦਾ ਪਰਿਸਥਿਤੀ ਤੰਤਰ',
        hi: 'उष्णकटिबंधीय वर्षावन पारिस्थितिकी तंत्र',
      },
      B: {
        en: 'Marine / Pond (Aquatic) Ecosystem (where microscopic phytoplankton have a smaller standing biomass than zooplankton and fish)',
        pa: 'ਸਮੁੰਦਰੀ / ਤਾਲਾਬ (ਜਲ) ਪਰਿਸਥਿਤੀ ਤੰਤਰ (ਜਿੱਥੇ ਸੂਖਮ ਫਾਈਟੋਪਲੈਂਕਟਨ ਦਾ ਜੀਵ-ਭਾਰ ਜ਼ੂਪਲੈਂਕਟਨ ਅਤੇ ਮੱਛੀਆਂ ਨਾਲੋਂ ਘੱਟ ਹੁੰਦਾ ਹੈ)',
        hi: 'समुद्री / तालाब (जलीय) पारिस्थितिकी तंत्र (जहाँ सूक्ष्म फाइटोप्लैंकटन का जैव-भार जूप्लैंकटन और मछलियों की तुलना में कम होता है)',
      },
      C: {
        en: 'Grassland Ecosystem',
        pa: 'ਘਾਹ ਦੇ ਮੈਦਾਨ ਦਾ ਪਰਿਸਥਿਤੀ ਤੰਤਰ',
        hi: 'घास के मैदान का पारिस्थितिकी तंत्र',
      },
      D: {
        en: 'Tundra Ecosystem',
        pa: 'ਟੁੰਡਰਾ ਪਰਿਸਥਿਤੀ ਤੰਤਰ',
        hi: 'टुंड्रा पारिस्थितिकी तंत्र',
      },
    },
    correct: 'B',
    explanation: {
      en: 'In an aquatic (marine or pond) ecosystem, the Pyramid of Biomass is inverted because the primary producers are microscopic phytoplankton with very short life cycles and rapid turnover, so their standing crop biomass at any given time is smaller than the biomass of zooplankton and large fish feeding on them. Conversely, in forest and grassland ecosystems, the Pyramid of Biomass is upright.',
      pa: 'ਸਮੁੰਦਰੀ ਜਾਂ ਤਾਲਾਬ (ਜਲ) ਪਰਿਸਥਿਤੀ ਤੰਤਰ ਵਿੱਚ "ਬਾਇਓਮਾਸ ਦਾ ਪਿਰਾਮਿਡ" ਉਲਟਾ (Inverted) ਹੁੰਦਾ ਹੈ ਕਿਉਂਕਿ ਉੱਥੇ ਮੁੱਖ ਉਤਪਾਦਕ ਸੂਖਮ ਫਾਈਟੋਪਲੈਂਕਟਨ (Phytoplankton) ਹੁੰਦੇ ਹਨ ਜਿਨ੍ਹਾਂ ਦਾ ਕਿਸੇ ਇੱਕ ਸਮੇਂ ਕੁੱਲ ਜੀਵ-ਭਾਰ ਉਹਨਾਂ ਨੂੰ ਖਾਣ ਵਾਲੇ ਜ਼ੂਪਲੈਂਕਟਨ ਅਤੇ ਮੱਛੀਆਂ ਦੇ ਜੀਵ-ਭਾਰ ਨਾਲੋਂ ਘੱਟ ਹੁੰਦਾ ਹੈ।',
      hi: 'समुद्री या तालाब (जलीय) पारिस्थितिकी तंत्र में "जैव-भार का पिरामिड" उल्टा (Inverted) होता है क्योंकि वहाँ प्राथमिक उत्पादक सूक्ष्म फाइटोप्लैंकटन होते हैं जिनका किसी निश्चित समय पर कुल जैव-भार उन पर निर्भर जूप्लैंकटन और मछलियों के जैव-भार से कम होता है।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-env-19',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which organisms act as sensitive "Bio-indicators" of atmospheric Sulphur Dioxide (SO2) pollution because they rapidly die out in SO2-polluted industrial and urban air, and what symbiotic association do they represent?',
      pa: 'ਕਿਹੜੇ ਜੀਵ ਵਾਯੂਮੰਡਲ ਵਿੱਚ ਸਲਫ਼ਰ ਡਾਈਆਕਸਾਈਡ (SO2) ਪ੍ਰਦੂਸ਼ਣ ਦੇ ਸੰਵੇਦਨਸ਼ੀਲ "ਜੈਵਿਕ-ਸੂਚਕ" (Bio-indicators) ਵਜੋਂ ਕੰਮ ਕਰਦੇ ਹਨ ਕਿਉਂਕਿ ਉਹ SO2 ਨਾਲ ਪ੍ਰਦੂਸ਼ਿਤ ਹਵਾ ਵਿੱਚ ਉੱਗ ਨਹੀਂ ਸਕਦੇ, ਅਤੇ ਉਹ ਕਿਹੜੇ ਦੋ ਜੀਵਾਂ ਦੇ ਸਹਿਜੀਵੀ ਸਬੰਧ ਨੂੰ ਦਰਸਾਉਂਦੇ ਹਨ?',
      hi: 'कौन-से जीव वायुमंडल में सल्फर डाइऑक्साइड (SO2) प्रदूषण के संवेदनशील "जैव-संकेतक" (Bio-indicators) के रूप में कार्य करते हैं क्योंकि वे SO2-प्रदूषित वायु में नष्ट हो जाते हैं, और वे किन दो जीवों के सहजीवी संबंध को दर्शाते हैं?',
    },
    options: {
      A: {
        en: 'Mycorrhiza; symbiotic association between Fungi and Roots of higher plants',
        pa: 'ਮਾਈਕੋਰਾਈਜ਼ਾ; ਉੱਲੀ (Fungi) ਅਤੇ ਉੱਚ ਪੌਦਿਆਂ ਦੀਆਂ ਜੜ੍ਹਾਂ ਦਾ ਸਹਿਜੀਵੀ ਸਬੰਧ',
        hi: 'माइकोराइजा; कवक और उच्च पादपों की जड़ों का सहजीवी संबंध',
      },
      B: {
        en: 'Bacteriophages; viruses infecting bacteria',
        pa: 'ਬੈਕਟੀਰੀਓਫੇਜ; ਜੀਵਾਣੂਆਂ ਨੂੰ ਸੰਕ੍ਰਮਿਤ ਕਰਨ ਵਾਲੇ ਵਾਇਰਸ',
        hi: 'बैक्टीरियोफेज; जीवाणुओं को संक्रमित करने वाले विषाणु',
      },
      C: {
        en: 'Lichens; mutualistic symbiotic association between an Alga (Phycobiont — prepares food) and a Fungus (Mycobiont — absorbs water/minerals and provides shelter)',
        pa: 'ਲਾਈਕਨ (Lichens); ਕਾਈ/ਐਲਗੀ (Phycobiont — ਭੋਜਨ ਬਣਾਉਂਦੀ ਹੈ) ਅਤੇ ਉੱਲੀ/ਫੰਗਸ (Mycobiont — ਪਾਣੀ ਤੇ ਆਸਰਾ ਦਿੰਦੀ ਹੈ) ਵਿਚਕਾਰ ਸਹਿਜੀਵੀ ਸਬੰਧ',
        hi: 'लाइकेन (Lichens); शैवाल (Phycobiont — भोजन बनाता है) और कवक (Mycobiont — जल व आश्रय प्रदान करता है) के बीच सहजीवी संबंध',
      },
      D: {
        en: 'Corals; symbiotic association between Cnidarian polyps and Zooxanthellae',
        pa: 'ਮੂੰਗਾ (Corals); ਪੌਲਿਪਸ ਅਤੇ ਜ਼ੂਜ਼ੈਂਥੇਲੇ ਵਿਚਕਾਰ ਸਹਿਜੀਵੀ ਸਬੰਧ',
        hi: 'प्रवाल (Corals); पॉलिप्स और जूजैंथेले के बीच सहजीवी संबंध',
      },
    },
    correct: 'C',
    explanation: {
      en: 'Lichens are a mutualistic symbiotic association between an Alga (Phycobiont, which performs photosynthesis) and a Fungus (Mycobiont, which provides structural shelter and absorbs water and minerals). Because lichens absorb water and nutrients directly from the atmosphere and lack a protective cuticle, they are extremely sensitive to Sulphur Dioxide (SO2) and serve as natural bio-indicators of air pollution (and pioneer species in lithosere/primary succession on bare rocks).',
      pa: 'ਲਾਈਕਨ (Lichens) ਕਾਈ (Algae) ਅਤੇ ਉੱਲੀ (Fungi) ਦੇ ਆਪਸੀ ਸਹਿਜੀਵੀ ਸਬੰਧ (Symbiosis) ਤੋਂ ਬਣਦੇ ਹਨ। ਇਹ ਹਵਾ ਵਿੱਚ ਸਲਫ਼ਰ ਡਾਈਆਕਸਾਈਡ (SO2) ਦੇ ਪ੍ਰਦੂਸ਼ਣ ਪ੍ਰਤੀ ਬਹੁਤ ਸੰਵੇਦਨਸ਼ੀਲ ਹੁੰਦੇ ਹਨ ਅਤੇ SO2 ਪ੍ਰਦੂਸ਼ਿਤ ਥਾਵਾਂ ਤੇ ਨਹੀਂ ਉੱਗਦੇ, ਜਿਸ ਕਾਰਨ ਇਹ ਹਵਾ ਪ੍ਰਦੂਸ਼ਣ ਦੇ ਕੁਦਰਤੀ ਸੂਚਕ (Bio-indicators) ਮੰਨੇ ਜਾਂਦੇ ਹਨ।',
      hi: 'लाइकेन (Lichens) शैवाल (Algae) और कवक (Fungi) के सहजीवी संबंध (Symbiosis) से बनते हैं। ये वायु में सल्फर डाइऑक्साइड (SO2) प्रदूषण के प्रति अत्यंत संवेदनशील होते हैं और SO2 प्रदूषित क्षेत्रों में नहीं उगते, इसलिए इन्हें वायु प्रदूषण का प्राकृतिक जैव-संकेतक (Bio-indicator) माना जाता है।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-env-20',
    topicId: 'sst-geo-environment',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Jointly launched by India and France during COP-21 in Paris (2015), where is the permanent Secretariat of the "International Solar Alliance" (ISA) headquartered in India?',
      pa: 'ਪੈਰਿਸ ਵਿੱਚ COP-21 (2015) ਦੌਰਾਨ ਭਾਰਤ ਅਤੇ ਫਰਾਂਸ ਵੱਲੋਂ ਸਾਂਝੇ ਤੌਰ ਤੇ ਸ਼ੁਰੂ ਕੀਤੇ ਗਏ "ਅੰਤਰਰਾਸ਼ਟਰੀ ਸੌਰ ਗੱਠਜੋੜ" (International Solar Alliance — ISA) ਦਾ ਸਥਾਈ ਮੁੱਖ ਦਫ਼ਤਰ ਭਾਰਤ ਵਿੱਚ ਕਿੱਥੇ ਸਥਿਤ ਹੈ?',
      hi: 'पेरिस में COP-21 (2015) के दौरान भारत और फ्रांस द्वारा संयुक्त रूप से प्रारंभ किए गए "अंतर्राष्ट्रीय सौर गठबंधन" (International Solar Alliance — ISA) का स्थायी मुख्यालय भारत में कहाँ स्थित है?',
    },
    options: {
      A: {
        en: 'Gandhinagar, Gujarat',
        pa: 'ਗਾਂਧੀਨਗਰ, ਗੁਜਰਾਤ',
        hi: 'गांधीनगर, गुजरात',
      },
      B: {
        en: 'Bengaluru, Karnataka',
        pa: 'ਬੈਂਗਲੁਰੂ, ਕਰਨਾਟਕ',
        hi: 'बेंगलुरु, कर्नाटक',
      },
      C: {
        en: 'New Delhi',
        pa: 'ਨਵੀਂ ਦਿੱਲੀ',
        hi: 'नई दिल्ली',
      },
      D: {
        en: 'Gurugram, Haryana (at the National Institute of Solar Energy campus)',
        pa: 'ਗੁਰੂਗ੍ਰਾਮ, ਹਰਿਆਣਾ (ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਆਫ਼ ਸੋਲਰ ਐਨਰਜੀ ਕੈਂਪਸ ਵਿਖੇ)',
        hi: 'गुरुग्राम, हरियाणा (राष्ट्रीय सौर ऊर्जा संस्थान परिसर में)',
      },
    },
    correct: 'D',
    explanation: {
      en: 'The International Solar Alliance (ISA) was jointly launched by Indian PM Narendra Modi and French President François Hollande on 30 November 2015 at COP-21 in Paris to mobilize solar energy deployment (especially among "Suryaputra" countries between the Tropics of Cancer and Capricorn, later opened to all UN member states). Its headquarters is at the National Institute of Solar Energy (NISE) campus in Gurugram, Haryana—making it the first treaty-based international intergovernmental organization headquartered in India.',
      pa: 'ਅੰਤਰਰਾਸ਼ਟਰੀ ਸੌਰ ਗੱਠਜੋੜ (ISA) ਦੀ ਸ਼ੁਰੂਆਤ 30 ਨਵੰਬਰ 2015 ਨੂੰ ਪੈਰਿਸ (COP-21) ਵਿਖੇ ਭਾਰਤ ਅਤੇ ਫਰਾਂਸ ਵੱਲੋਂ ਸਾਂਝੇ ਤੌਰ ਤੇ ਕੀਤੀ ਗਈ ਸੀ। ਇਸ ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਹਰਿਆਣਾ ਦੇ ਗੁਰੂਗ੍ਰਾਮ (ਗੁੜਗਾਓਂ) ਵਿੱਚ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਆਫ਼ ਸੋਲਰ ਐਨਰਜੀ (NISE) ਵਿਖੇ ਸਥਿਤ ਹੈ।',
      hi: 'अंतर्राष्ट्रीय सौर गठबंधन (ISA) की शुरुआत 30 नवंबर 2015 को पेरिस (COP-21) में भारत और फ्रांस द्वारा संयुक्त रूप से की गई थी। इसका मुख्यालय हरियाणा के गुरुग्राम में राष्ट्रीय सौर ऊर्जा संस्थान (NISE) परिसर में स्थित है।',
    },
    difficulty: 'easy',
  },

  // ===========================================================================
  // 5. INDIAN & PUNJAB ECONOMY (topicId: 'indian-economy') — 20 MCQs
  // ===========================================================================
  {
    id: 'q-ppsc-clk-eco-1',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'In National Income accounting, which macroeconomic aggregate is traditionally defined as "National Income" (NNP at Factor Cost), and how is it derived from Gross Domestic Product at Market Price (GDP_MP)?',
      pa: 'ਰਾਸ਼ਟਰੀ ਆਮਦਨ ਲੇਖਾਕਾਰੀ ਵਿੱਚ, ਕਿਸ ਸਮਸ਼ਟੀ-ਆਰਥਿਕ ਮਾਪਦੰਡ ਨੂੰ ਰਵਾਇਤੀ ਤੌਰ ਤੇ "ਰਾਸ਼ਟਰੀ ਆਮਦਨ" (ਸਾਧਨ ਲਾਗਤ ਤੇ ਸ਼ੁੱਧ ਰਾਸ਼ਟਰੀ ਉਤਪਾਦ — NNP_FC) ਕਿਹਾ ਜਾਂਦਾ ਹੈ, ਅਤੇ ਇਸ ਨੂੰ ਬਾਜ਼ਾਰ ਕੀਮਤ ਤੇ ਕੁੱਲ ਘਰੇਲੂ ਉਤਪਾਦ (GDP_MP) ਤੋਂ ਕਿਵੇਂ ਪ੍ਰਾਪਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ?',
      hi: 'राष्ट्रीय आय लेखांकन में, किस समष्टि-आर्थिक समुच्चय को पारंपरिक रूप से "राष्ट्रीय आय" (साधन लागत पर शुद्ध राष्ट्रीय उत्पाद — NNP_FC) कहा जाता है, और इसे बाजार कीमत पर सकल घरेलू उत्पाद (GDP_MP) से कैसे प्राप्त किया जाता है?',
    },
    options: {
      A: {
        en: 'NNP at Factor Cost (NNP_FC) = GDP_MP + Net Factor Income from Abroad (NFIA) - Depreciation (Consumption of Fixed Capital) - Net Indirect Taxes (Indirect Taxes - Subsidies)',
        pa: 'ਸਾਧਨ ਲਾਗਤ ਤੇ ਸ਼ੁੱਧ ਰਾਸ਼ਟਰੀ ਉਤਪਾਦ (NNP_FC) = GDP_MP + ਵਿਦੇਸ਼ਾਂ ਤੋਂ ਪ੍ਰਾਪਤ ਸ਼ੁੱਧ ਸਾਧਨ ਆਮਦਨ (NFIA) - ਘਸਾਈ (Depreciation) - ਸ਼ੁੱਧ ਅਪ੍ਰਤੱਖ ਟੈਕਸ (ਅਪ੍ਰਤੱਖ ਟੈਕਸ - ਸਬਸਿਡੀਆਂ)',
        hi: 'साधन लागत पर शुद्ध राष्ट्रीय उत्पाद (NNP_FC) = GDP_MP + विदेशों से प्राप्त शुद्ध साधन आय (NFIA) - मूल्यह्रास (Depreciation) - शुद्ध अप्रत्यक्ष कर (अप्रत्यक्ष कर - सब्सिडी)',
      },
      B: {
        en: 'NNP at Factor Cost = GDP_MP - NFIA + Depreciation + Indirect Taxes',
        pa: 'NNP_FC = GDP_MP - NFIA + ਘਸਾਈ + ਅਪ੍ਰਤੱਖ ਟੈਕਸ',
        hi: 'NNP_FC = GDP_MP - NFIA + मूल्यह्रास + अप्रत्यक्ष कर',
      },
      C: {
        en: 'GNP at Market Price = GDP_MP - Depreciation - Subsidies',
        pa: 'GNP_MP = GDP_MP - ਘਸਾਈ - ਸਬਸਿਡੀਆਂ',
        hi: 'GNP_MP = GDP_MP - मूल्यह्रास - सब्सिडी',
      },
      D: {
        en: 'NDP at Market Price = GDP_MP + Depreciation + Net Indirect Taxes',
        pa: 'NDP_MP = GDP_MP + ਘਸਾਈ + ਸ਼ੁੱਧ ਅਪ੍ਰਤੱਖ ਟੈਕਸ',
        hi: 'NDP_MP = GDP_MP + मूल्यह्रास + शुद्ध अप्रत्यक्ष कर',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Net National Product at Factor Cost (NNP_FC) is the purest measure of National Income. Starting from GDP at Market Price (GDP_MP): (1) Add Net Factor Income from Abroad (NFIA) to convert Domestic (GDP) to National (GNP_MP); (2) Subtract Depreciation to convert Gross (GNP) to Net (NNP_MP); and (3) Subtract Net Indirect Taxes (Indirect Taxes minus Subsidies) to convert Market Price to Factor Cost (NNP_FC).',
      pa: 'ਸਾਧਨ ਲਾਗਤ ਤੇ ਸ਼ੁੱਧ ਰਾਸ਼ਟਰੀ ਉਤਪਾਦ (NNP_FC) ਨੂੰ "ਰਾਸ਼ਟਰੀ ਆਮਦਨ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ। GDP_MP ਵਿੱਚ ਵਿਦੇਸ਼ਾਂ ਤੋਂ ਸ਼ੁੱਧ ਸਾਧਨ ਆਮਦਨ (NFIA) ਜੋੜ ਕੇ GNP_MP ਬਣਦਾ ਹੈ; ਉਸ ਵਿੱਚੋਂ ਘਸਾਈ (Depreciation) ਘਟਾ ਕੇ NNP_MP ਮਿਲਦਾ ਹੈ; ਅਤੇ ਸ਼ੁੱਧ ਅਪ੍ਰਤੱਖ ਟੈਕਸ (ਅਪ੍ਰਤੱਖ ਟੈਕਸ - ਸਬਸਿਡੀਆਂ) ਘਟਾ ਕੇ NNP_FC ਪ੍ਰਾਪਤ ਹੁੰਦਾ ਹੈ।',
      hi: 'साधन लागत पर शुद्ध राष्ट्रीय उत्पाद (NNP_FC) को "राष्ट्रीय आय" कहा जाता है। GDP_MP में विदेशों से प्राप्त शुद्ध साधन आय (NFIA) जोड़कर GNP_MP बनता है; उसमें से मूल्यह्रास (Depreciation) घटाकर NNP_MP मिलता है; और शुद्ध अप्रत्यक्ष कर (अप्रत्यक्ष कर - सब्सिडी) घटाकर NNP_FC प्राप्त होता है।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-eco-2',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Who was the first person to estimate India’s National Income and Per Capita Income (at Rs. 20 per annum in 1867–68) in his book "Poverty and Un-British Rule in India", and which organization under MoSPI currently compiles and releases official National Income estimates in India?',
      pa: 'ਆਪਣੀ ਪੁਸਤਕ "Poverty and Un-British Rule in India" ਵਿੱਚ ਭਾਰਤ ਦੀ ਰਾਸ਼ਟਰੀ ਆਮਦਨ ਅਤੇ ਪ੍ਰਤੀ ਵਿਅਕਤੀ ਆਮਦਨ (1867-68 ਵਿੱਚ 20 ਰੁਪਏ ਸਾਲਾਨਾ) ਦਾ ਪਹਿਲਾ ਅਨੁਮਾਨ ਕਿਸ ਨੇ ਲਗਾਇਆ ਸੀ, ਅਤੇ ਵਰਤਮਾਨ ਵਿੱਚ ਭਾਰਤ ਵਿੱਚ ਰਾਸ਼ਟਰੀ ਆਮਦਨ ਦੇ ਅਧਿਕਾਰਤ ਅੰਕੜੇ ਕਿਹੜੀ ਸੰਸਥਾ ਜਾਰੀ ਕਰਦੀ ਹੈ?',
      hi: 'अपनी पुस्तक "Poverty and Un-British Rule in India" में भारत की राष्ट्रीय आय और प्रति व्यक्ति आय (1867–68 में 20 रुपये प्रति वर्ष) का प्रथम अनुमान किसने लगाया था, और वर्तमान में भारत में राष्ट्रीय आय के आधिकारिक आंकड़े कौन-सी संस्था जारी करती है?',
    },
    options: {
      A: {
        en: 'R.C. Dutt; Reserve Bank of India (RBI)',
        pa: 'ਆਰ.ਸੀ. ਦੱਤ; ਭਾਰਤੀ ਰਿਜ਼ਰਵ ਬੈਂਕ (RBI)',
        hi: 'आर.सी. दत्त; भारतीय रिजर्व बैंक (RBI)',
      },
      B: {
        en: 'Dadabhai Naoroji ("Grand Old Man of India"); National Statistical Office (NSO, formed by merging CSO and NSSO in 2019 under MoSPI)',
        pa: 'ਦਾਦਾਭਾਈ ਨੌਰੋਜੀ ("ਗ੍ਰੈਂਡ ਓਲਡ ਮੈਨ ਆਫ਼ ਇੰਡੀਆ"); ਨੈਸ਼ਨਲ ਸਟੈਟਿਸਟੀਕਲ ਆਫ਼ਿਸ (NSO — 2019 ਵਿੱਚ CSO ਅਤੇ NSSO ਦੇ ਰਲੇਵੇਂ ਨਾਲ ਬਣਿਆ)',
        hi: 'दादाभाई नौरोजी ("ग्रैंड ओल्ड मैन ऑफ इंडिया"); राष्ट्रीय सांख्यिकी कार्यालय (NSO — 2019 में CSO और NSSO के विलय से गठित)',
      },
      C: {
        en: 'Gopal Krishna Gokhale; Finance Commission of India',
        pa: 'ਗੋਪਾਲ ਕ੍ਰਿਸ਼ਨ ਗੋਖਲੇ; ਭਾਰਤ ਦਾ ਵਿੱਤ ਕਮਿਸ਼ਨ',
        hi: 'गोपाल कृष्ण गोखले; भारत का वित्त आयोग',
      },
      D: {
        en: 'M.G. Ranade; Department of Economic Affairs',
        pa: 'ਐੱਮ.ਜੀ. ਰਾਨਾਡੇ; ਆਰਥਿਕ ਮਾਮਲਿਆਂ ਦਾ ਵਿਭਾਗ',
        hi: 'एम.जी. रानाडे; आर्थिक कार्य विभाग',
      },
    },
    correct: 'B',
    explanation: {
      en: 'Dadabhai Naoroji propounded the "Drain of Wealth" theory and made the first attempt to estimate India’s National Income in 1867–68 (estimating per capita income at Rs. 20). Later, Prof. V.K.R.V. Rao made the first scientific estimate in 1931–32, and P.C. Mahalanobis chaired the National Income Committee (1949). Official National Income statistics (with Base Year 2011–12) are compiled by the National Statistical Office (NSO, formerly Central Statistical Organisation / CSO) under the Ministry of Statistics and Programme Implementation (MoSPI).',
      pa: 'ਦਾਦਾਭਾਈ ਨੌਰੋਜੀ ਨੇ 1867-68 ਵਿੱਚ ਭਾਰਤ ਦੀ ਰਾਸ਼ਟਰੀ ਆਮਦਨ ਦਾ ਪਹਿਲਾ ਅਨੁਮਾਨ (ਪ੍ਰਤੀ ਵਿਅਕਤੀ ਆਮਦਨ 20 ਰੁਪਏ) ਲਗਾਇਆ ਅਤੇ "ਧਨ ਦੇ ਨਿਕਾਸ" (Drain of Wealth) ਦਾ ਸਿਧਾਂਤ ਦਿੱਤਾ (ਵਿਗਿਆਨਕ ਅਨੁਮਾਨ 1931-32 ਵਿੱਚ ਵੀ.ਕੇ.ਆਰ.ਵੀ. ਰਾਓ ਨੇ ਲਗਾਇਆ)। ਵਰਤਮਾਨ ਵਿੱਚ ਰਾਸ਼ਟਰੀ ਆਮਦਨ ਦੇ ਅੰਕੜੇ (ਅਧਾਰ ਸਾਲ 2011-12) ਰਾਸ਼ਟਰੀ ਅੰਕੜਾ ਦਫ਼ਤਰ (NSO / ਪਹਿਲਾਂ CSO) ਵੱਲੋਂ ਜਾਰੀ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।',
      hi: 'दादाभाई नौरोजी ने 1867–68 में भारत की राष्ट्रीय आय का प्रथम अनुमान (प्रति व्यक्ति आय 20 रुपये) लगाया और "धन के निष्कासन" (Drain of Wealth) का सिद्धांत दिया (प्रथम वैज्ञानिक अनुमान 1931–32 में डॉ. वी.के.आर.वी. राव ने लगाया)। वर्तमान में राष्ट्रीय आय के आंकड़े (आधार वर्ष 2011–12) राष्ट्रीय सांख्यिकी कार्यालय (NSO / पूर्व में CSO) द्वारा जारी किए जाते हैं।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-eco-3',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'On the recommendation of which Commission was the Reserve Bank of India (RBI) established on 1 April 1935 under the RBI Act, 1934, when was it nationalised, and who were its first Governor and first Indian Governor respectively?',
      pa: 'ਕਿਸ ਕਮਿਸ਼ਨ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ ਭਾਰਤੀ ਰਿਜ਼ਰਵ ਬੈਂਕ (RBI) ਦੀ ਸਥਾਪਨਾ RBI ਐਕਟ, 1934 ਤਹਿਤ 1 ਅਪ੍ਰੈਲ 1935 ਨੂੰ ਹੋਈ, ਇਸ ਦਾ ਰਾਸ਼ਟਰੀਕਰਨ ਕਦੋਂ ਹੋਇਆ, ਅਤੇ ਇਸ ਦੇ ਕ੍ਰਮਵਾਰ ਪਹਿਲੇ ਗਵਰਨਰ ਤੇ ਪਹਿਲੇ ਭਾਰਤੀ ਗਵਰਨਰ ਕੌਣ ਸਨ?',
      hi: 'किस आयोग की सिफारिश पर भारतीय रिजर्व बैंक (RBI) की स्थापना RBI अधिनियम, 1934 के तहत 1 अप्रैल 1935 को हुई, इसका राष्ट्रीयकरण कब हुआ, तथा इसके क्रमशः प्रथम गवर्नर और प्रथम भारतीय गवर्नर कौन थे?',
    },
    options: {
      A: {
        en: 'Narasimham Committee; nationalised on 19 July 1969; James Taylor and B. Rama Rau',
        pa: 'ਨਰਸਿਮਹਮ ਕਮੇਟੀ; 19 ਜੁਲਾਈ 1969 ਨੂੰ ਰਾਸ਼ਟਰੀਕਰਨ; ਜੇਮਜ਼ ਟੇਲਰ ਅਤੇ ਬੀ. ਰਾਮਾ ਰਾਓ',
        hi: 'नरसिम्हम समिति; 19 जुलाई 1969 को राष्ट्रीयकरण; जेम्स टेलर और बी. रामा राव',
      },
      B: {
        en: 'Sivaraman Committee; nationalised on 15 April 1980; Osborne Smith and L.K. Jha',
        pa: 'ਸ਼ਿਵਰਾਮਨ ਕਮੇਟੀ; 15 ਅਪ੍ਰੈਲ 1980 ਨੂੰ ਰਾਸ਼ਟਰੀਕਰਨ; ਓਸਬੋਰਨ ਸਮਿਥ ਅਤੇ ਐੱਲ.ਕੇ. ਝਾਅ',
        hi: 'शिवरामन समिति; 15 अप्रैल 1980 को राष्ट्रीयकरण; ओसबोर्न स्मिथ और एल.के. झा',
      },
      C: {
        en: 'Hilton Young Commission (Royal Commission on Indian Currency and Finance, 1926); nationalised on 1 January 1949; First Governor: Sir Osborne Smith; First Indian Governor: Sir C.D. Deshmukh',
        pa: 'ਹਿਲਟਨ ਯੰਗ ਕਮਿਸ਼ਨ (1926); 1 ਜਨਵਰੀ 1949 ਨੂੰ ਰਾਸ਼ਟਰੀਕਰਨ; ਪਹਿਲੇ ਗਵਰਨਰ: ਸਰ ਓਸਬੋਰਨ ਸਮਿਥ; ਪਹਿਲੇ ਭਾਰਤੀ ਗਵਰਨਰ: ਸਰ ਸੀ.ਡੀ. ਦੇਸ਼ਮੁਖ',
        hi: 'हिल्टन यंग आयोग (1926); 1 जनवरी 1949 को राष्ट्रीयकरण; प्रथम गवर्नर: सर ओसबोर्न स्मिथ; प्रथम भारतीय गवर्नर: सर सी.डी. देशमुख',
      },
      D: {
        en: 'Urjit Patel Committee; nationalised on 26 January 1950; C.D. Deshmukh and Manmohan Singh',
        pa: 'ਉਰਜਿਤ ਪਟੇਲ ਕਮੇਟੀ; 26 ਜਨਵਰੀ 1950 ਨੂੰ ਰਾਸ਼ਟਰੀਕਰਨ; ਸੀ.ਡੀ. ਦੇਸ਼ਮੁਖ ਅਤੇ ਮਨਮੋਹਨ ਸਿੰਘ',
        hi: 'उर्जित पटेल समिति; 26 जनवरी 1950 को राष्ट्रीयकरण; सी.डी. देशमुख और मनमोहन सिंह',
      },
    },
    correct: 'C',
    explanation: {
      en: 'Based on the recommendations of the Hilton Young Commission (Royal Commission on Indian Currency and Finance, 1926), the Reserve Bank of India was established on 1 April 1935 under the RBI Act, 1934 (initially headquartered in Calcutta and permanently moved to Mumbai in 1937). It was nationalised on 1 January 1949. Sir Osborne Smith was its first Governor (1935–37), and Sir Chintaman Dwarkanath (C.D.) Deshmukh was its first Indian Governor (1943–49).',
      pa: 'ਹਿਲਟਨ ਯੰਗ ਕਮਿਸ਼ਨ (1926) ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ ਭਾਰਤੀ ਰਿਜ਼ਰਵ ਬੈਂਕ (RBI) ਦੀ ਸਥਾਪਨਾ 1 ਅਪ੍ਰੈਲ 1935 ਨੂੰ ਹੋਈ (ਮੁੱਖ ਦਫ਼ਤਰ 1937 ਵਿੱਚ ਕਲਕੱਤੇ ਤੋਂ ਮੁੰਬਈ ਤਬਦੀਲ ਹੋਇਆ) ਅਤੇ 1 ਜਨਵਰੀ 1949 ਨੂੰ ਇਸ ਦਾ ਰਾਸ਼ਟਰੀਕਰਨ ਕੀਤਾ ਗਿਆ। ਸਰ ਓਸਬੋਰਨ ਸਮਿਥ ਇਸ ਦੇ ਪਹਿਲੇ ਗਵਰਨਰ ਅਤੇ ਸਰ ਸੀ.ਡੀ. ਦੇਸ਼ਮੁਖ ਪਹਿਲੇ ਭਾਰਤੀ ਗਵਰਨਰ ਸਨ।',
      hi: 'हिल्टन यंग आयोग (1926) की सिफारिश पर भारतीय रिजर्व बैंक (RBI) की स्थापना 1 अप्रैल 1935 को हुई (मुख्यालय 1937 में कलकत्ता से मुंबई स्थानांतरित हुआ) और 1 जनवरी 1949 को इसका राष्ट्रीयकरण किया गया। सर ओसबोर्न स्मिथ इसके प्रथम गवर्नर और सर सी.डी. देशमुख प्रथम भारतीय गवर्नर थे।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-eco-4',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which of the following correctly defines the quantitative Monetary Policy instruments of the Reserve Bank of India—Repo Rate, Cash Reserve Ratio (CRR), and Statutory Liquidity Ratio (SLR)?',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਵਿਕਲਪ ਭਾਰਤੀ ਰਿਜ਼ਰਵ ਬੈਂਕ (RBI) ਦੀ ਮੌਦ੍ਰਿਕ ਨੀਤੀ ਦੇ ਗਿਣਾਤਮਕ ਸਾਧਨਾਂ — ਰੈਪੋ ਰੇਟ (Repo Rate), ਨਕਦ ਰਾਖਵਾਂ ਅਨੁਪਾਤ (CRR), ਅਤੇ ਵਿਧਾਨਕ ਤਰਲਤਾ ਅਨੁਪਾਤ (SLR) — ਨੂੰ ਸਹੀ ਰੂਪ ਵਿੱਚ ਪਰਿਭਾਸ਼ਿਤ ਕਰਦਾ ਹੈ?',
      hi: 'निम्नलिखित में से कौन-सा विकल्प भारतीय रिजर्व बैंक (RBI) की मौद्रिक नीति के मात्रात्मक उपकरणों — रेपो दर (Repo Rate), नकद आरक्षित अनुपात (CRR), और वैधानिक तरलता अनुपात (SLR) — को सही रूप से परिभाषित करता है?',
    },
    options: {
      A: {
        en: 'Repo Rate is the rate at which banks lend to farmers; CRR is gold kept by customers; SLR is tax paid to the Finance Ministry',
        pa: 'ਰੈਪੋ ਰੇਟ ਉਹ ਦਰ ਹੈ ਜਿਸ ਤੇ ਬੈਂਕ ਕਿਸਾਨਾਂ ਨੂੰ ਕਰਜ਼ਾ ਦਿੰਦੇ ਹਨ; CRR ਗਾਹਕਾਂ ਦਾ ਸੋਨਾ ਹੈ; SLR ਵਿੱਤ ਮੰਤਰਾਲੇ ਨੂੰ ਦਿੱਤਾ ਟੈਕਸ ਹੈ',
        hi: 'रेपो दर वह दर है जिस पर बैंक किसानों को ऋण देते हैं; CRR ग्राहकों का सोना है; SLR वित्त मंत्रालय को दिया गया कर है',
      },
      B: {
        en: 'CRR is the share of deposits banks keep with themselves in government bonds; SLR is the cash kept strictly with RBI',
        pa: 'CRR ਬੈਂਕਾਂ ਵੱਲੋਂ ਆਪਣੇ ਕੋਲ ਸਰਕਾਰੀ ਬਾਂਡਾਂ ਵਿੱਚ ਰੱਖਿਆ ਹਿੱਸਾ ਹੈ; SLR ਸਿਰਫ਼ RBI ਕੋਲ ਰੱਖੀ ਨਕਦੀ ਹੈ',
        hi: 'CRR बैंकों द्वारा अपने पास सरकारी बॉन्ड में रखा गया हिस्सा है; SLR केवल RBI के पास रखी गई नकदी है',
      },
      C: {
        en: 'Repo Rate is the rate at which RBI borrows from commercial banks; Reverse Repo is the rate at which RBI lends to banks',
        pa: 'ਰੈਪੋ ਰੇਟ ਉਹ ਦਰ ਹੈ ਜਿਸ ਤੇ RBI ਵਪਾਰਕ ਬੈਂਕਾਂ ਤੋਂ ਉਧਾਰ ਲੈਂਦਾ ਹੈ; ਰਿਵਰਸ ਰੈਪੋ ਉਹ ਦਰ ਹੈ ਜਿਸ ਤੇ RBI ਬੈਂਕਾਂ ਨੂੰ ਉਧਾਰ ਦਿੰਦਾ ਹੈ',
        hi: 'रेपो दर वह दर है जिस पर RBI वाणिज्यिक बैंकों से उधार लेता है; रिवर्स रेपो वह दर है जिस पर RBI बैंकों को उधार देता है',
      },
      D: {
        en: 'Repo Rate is the policy interest rate at which RBI lends short-term liquidity to commercial banks against government securities; CRR is the percentage of Net Demand and Time Liabilities (NDTL) that commercial banks must hold as cash reserves with the RBI (earning no interest); SLR is the percentage of NDTL that banks must maintain with themselves in liquid assets (cash, gold, or unencumbered government securities)',
        pa: 'ਰੈਪੋ ਰੇਟ ਉਹ ਵਿਆਜ ਦਰ ਹੈ ਜਿਸ ਤੇ RBI ਸਰਕਾਰੀ ਪ੍ਰਤੀਭੂਤੀਆਂ ਦੇ ਬਦਲੇ ਵਪਾਰਕ ਬੈਂਕਾਂ ਨੂੰ ਥੋੜ੍ਹੇ ਸਮੇਂ ਦਾ ਕਰਜ਼ਾ ਦਿੰਦਾ ਹੈ; CRR ਬੈਂਕਾਂ ਦੀਆਂ ਕੁੱਲ ਜਮ੍ਹਾਂ ਰਾਸ਼ੀਆਂ (NDTL) ਦਾ ਉਹ ਪ੍ਰਤੀਸ਼ਤ ਹੈ ਜੋ ਬੈਂਕਾਂ ਨੂੰ RBI ਕੋਲ ਨਕਦ ਰੂਪ ਵਿੱਚ ਰੱਖਣਾ ਪੈਂਦਾ ਹੈ; SLR ਉਹ ਪ੍ਰਤੀਸ਼ਤ ਹੈ ਜੋ ਬੈਂਕਾਂ ਨੂੰ ਆਪਣੇ ਕੋਲ ਤਰਲ ਸੰਪਤੀਆਂ (ਨਕਦੀ, ਸੋਨਾ ਜਾਂ ਸਰਕਾਰੀ ਪ੍ਰਤੀਭੂਤੀਆਂ) ਵਜੋਂ ਰੱਖਣਾ ਪੈਂਦਾ ਹੈ',
        hi: 'रेपो दर वह नीतिगत ब्याज दर है जिस पर RBI सरकारी प्रतिभूतियों के बदले वाणिज्यिक बैंकों को अल्पकालिक तरलता (ऋण) देता है; CRR बैंकों की शुद्ध मांग और सावधि देयताओं (NDTL) का वह प्रतिशत है जिसे बैंकों को RBI के पास नकद रूप में रखना अनिवार्य है; SLR वह प्रतिशत है जिसे बैंकों को स्वयं के पास तरल परिसंपत्तियों (नकदी, सोना या सरकारी प्रतिभूतियां) में रखना होता है',
      },
    },
    correct: 'D',
    explanation: {
      en: 'Under RBI’s Liquidity Adjustment Facility (LAF), Repo Rate is the benchmark policy rate at which RBI lends short-term funds to banks against collateral of government securities (to curb inflation, RBI hikes the Repo Rate). Standing Deposit Facility (SDF, introduced in 2022 without collateral) and Reverse Repo Rate absorb excess liquidity from banks. CRR (Cash Reserve Ratio) is the fraction of NDTL kept as cash with the RBI, while SLR (Statutory Liquidity Ratio) is the fraction of NDTL maintained by banks themselves in cash, gold, or approved government securities.',
      pa: 'ਰੈਪੋ ਰੇਟ ਉਹ ਨੀਤੀਗਤ ਦਰ ਹੈ ਜਿਸ ਤੇ RBI ਵਪਾਰਕ ਬੈਂਕਾਂ ਨੂੰ ਥੋੜ੍ਹੇ ਸਮੇਂ ਲਈ ਕਰਜ਼ਾ ਦਿੰਦਾ ਹੈ (ਮਹਿੰਗਾਈ ਰੋਕਣ ਲਈ RBI ਰੈਪੋ ਰੇਟ ਵਧਾਉਂਦਾ ਹੈ)। CRR (ਨਕਦ ਰਾਖਵਾਂ ਅਨੁਪਾਤ) ਬੈਂਕਾਂ ਦੀਆਂ ਕੁੱਲ ਦੇਣਦਾਰੀਆਂ (NDTL) ਦਾ ਉਹ ਹਿੱਸਾ ਹੈ ਜੋ ਬੈਂਕਾਂ ਨੂੰ RBI ਕੋਲ ਨਕਦ ਰੱਖਣਾ ਪੈਂਦਾ ਹੈ, ਜਦਕਿ SLR (ਵਿਧਾਨਕ ਤਰਲਤਾ ਅਨੁਪਾਤ) ਬੈਂਕਾਂ ਨੂੰ ਆਪਣੇ ਕੋਲ ਨਕਦੀ, ਸੋਨੇ ਜਾਂ ਸਰਕਾਰੀ ਪ੍ਰਤੀਭੂਤੀਆਂ ਦੇ ਰੂਪ ਵਿੱਚ ਰੱਖਣਾ ਪੈਂਦਾ ਹੈ।',
      hi: 'रेपो दर वह नीतिगत दर है जिस पर RBI वाणिज्यिक बैंकों को अल्पकालिक ऋण देता है (मुद्रास्फीति नियंत्रित करने के लिए RBI रेपो दर बढ़ाता है)। CRR (नकद आरक्षित अनुपात) बैंकों की कुल देयताओं (NDTL) का वह हिस्सा है जिसे RBI के पास नकद रखना होता है, जबकि SLR (वैधानिक तरलता अनुपात) बैंकों को स्वयं के पास नकदी, स्वर्ण या सरकारी प्रतिभूतियों के रूप में रखना होता है।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-eco-5',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'When the Reserve Bank of India conducts "Open Market Operations" (OMOs) to combat high inflation and suck excess money supply (liquidity) out of the economy, what action does it take?',
      pa: 'ਜਦੋਂ ਭਾਰਤੀ ਰਿਜ਼ਰਵ ਬੈਂਕ (RBI) ਉੱਚ ਮਹਿੰਗਾਈ ਨੂੰ ਰੋਕਣ ਅਤੇ ਅਰਥਵਿਵਸਥਾ ਵਿੱਚੋਂ ਵਾਧੂ ਪੈਸੇ ਦੀ ਸਪਲਾਈ (ਤਰਲਤਾ) ਨੂੰ ਘਟਾਉਣ ਲਈ "ਖੁੱਲ੍ਹੇ ਬਾਜ਼ਾਰ ਦੀਆਂ ਕਿਰਿਆਵਾਂ" (Open Market Operations — OMOs) ਕਰਦਾ ਹੈ, ਤਾਂ ਉਹ ਕੀ ਕਦਮ ਚੁੱਕਦਾ ਹੈ?',
      hi: 'जब भारतीय रिजर्व बैंक (RBI) उच्च मुद्रास्फीति को नियंत्रित करने और अर्थव्यवस्था से अतिरिक्त मुद्रा आपूर्ति (तरलता) को सोखने के लिए "खुले बाजार की क्रियाएं" (Open Market Operations — OMOs) संचालित करता है, तो वह क्या कदम उठाता है?',
    },
    options: {
      A: {
        en: 'RBI sells Government Securities (G-Secs) in the open market to commercial banks and financial institutions',
        pa: 'RBI ਖੁੱਲ੍ਹੇ ਬਾਜ਼ਾਰ ਵਿੱਚ ਵਪਾਰਕ ਬੈਂਕਾਂ ਅਤੇ ਵਿੱਤੀ ਸੰਸਥਾਵਾਂ ਨੂੰ ਸਰਕਾਰੀ ਪ੍ਰਤੀਭੂਤੀਆਂ (Government Securities) ਵੇਚਦਾ ਹੈ',
        hi: 'RBI खुले बाजार में वाणिज्यिक बैंकों और वित्तीय संस्थाओं को सरकारी प्रतिभूतियां (Government Securities) बेचता है',
      },
      B: {
        en: 'RBI buys Government Securities from commercial banks and lowers the Cash Reserve Ratio (CRR)',
        pa: 'RBI ਵਪਾਰਕ ਬੈਂਕਾਂ ਤੋਂ ਸਰਕਾਰੀ ਪ੍ਰਤੀਭੂਤੀਆਂ ਖਰੀਦਦਾ ਹੈ ਅਤੇ CRR ਘਟਾਉਂਦਾ ਹੈ',
        hi: 'RBI वाणिज्यिक बैंकों से सरकारी प्रतिभूतियां खरीदता है और CRR घटाता है',
      },
      C: {
        en: 'RBI reduces the Repo Rate and Bank Rate simultaneously',
        pa: 'RBI ਰੈਪੋ ਰੇਟ ਅਤੇ ਬੈਂਕ ਰੇਟ ਦੋਵਾਂ ਨੂੰ ਇੱਕੋ ਸਮੇਂ ਘਟਾਉਂਦਾ ਹੈ',
        hi: 'RBI रेपो दर और बैंक दर दोनों को एक साथ घटाता है',
      },
      D: {
        en: 'RBI prints new currency notes to distribute free credit to commercial banks',
        pa: 'RBI ਵਪਾਰਕ ਬੈਂਕਾਂ ਨੂੰ ਮੁਫ਼ਤ ਕਰਜ਼ਾ ਵੰਡਣ ਲਈ ਨਵੇਂ ਨੋਟ ਛਾਪਦਾ ਹੈ',
        hi: 'RBI वाणिज्यिक बैंकों को मुफ्त ऋण बांटने के लिए नए नोट छापता है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Open Market Operations (OMOs) refer to the buying and selling of Government Securities (G-Secs / Treasury Bills) by the RBI in the open market. During inflation, to contract liquidity (money supply), the RBI SELLS government securities to banks, thereby absorbing their lendable cash reserves. Conversely, during a recession/liquidity crunch, the RBI BUYS government securities to inject money into the banking system.',
      pa: 'ਖੁੱਲ੍ਹੇ ਬਾਜ਼ਾਰ ਦੀਆਂ ਕਿਰਿਆਵਾਂ (OMOs) ਤਹਿਤ RBI ਸਰਕਾਰੀ ਪ੍ਰਤੀਭੂਤੀਆਂ ਦੀ ਖਰੀਦ-ਵੇਚ ਕਰਦਾ ਹੈ। ਮਹਿੰਗਾਈ ਦੇ ਸਮੇਂ ਬਾਜ਼ਾਰ ਵਿੱਚੋਂ ਵਾਧੂ ਤਰਲਤਾ (ਪੈਸੇ ਦੀ ਸਪਲਾਈ) ਘਟਾਉਣ ਲਈ RBI ਵਪਾਰਕ ਬੈਂਕਾਂ ਨੂੰ ਸਰਕਾਰੀ ਪ੍ਰਤੀਭੂਤੀਆਂ ਵੇਚਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਬੈਂਕਾਂ ਕੋਲ ਕਰਜ਼ਾ ਦੇਣ ਲਈ ਨਕਦੀ ਘਟ ਜਾਂਦੀ ਹੈ।',
      hi: 'खुले बाजार की क्रियाओं (OMOs) के अंतर्गत RBI सरकारी प्रतिभूतियों का क्रय-विक्रय करता है। मुद्रास्फीति के समय बाजार से अतिरिक्त तरलता (मुद्रा आपूर्ति) सोखने के लिए RBI वाणिज्यिक बैंकों को सरकारी प्रतिभूतियां बेचता है, जिससे बैंकों के पास ऋण देने योग्य नकदी घट जाती है।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-eco-6',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which inflation index is used by the 6-member Monetary Policy Committee (MPC) of the RBI as the nominal anchor for flexible inflation targeting (4% with a tolerance band of +/- 2%, i.e., 2% to 6%), and how are "Stagflation" and the "Phillips Curve" defined?',
      pa: 'RBI ਦੀ 6-ਮੈਂਬਰੀ ਮੌਦ੍ਰਿਕ ਨੀਤੀ ਕਮੇਟੀ (MPC) ਵੱਲੋਂ ਮਹਿੰਗਾਈ ਨੂੰ ਨਿਯੰਤਰਿਤ ਕਰਨ (4% +/- 2%, ਭਾਵ 2% ਤੋਂ 6%) ਲਈ ਕਿਹੜਾ ਮਹਿੰਗਾਈ ਸੂਚਕ-ਅੰਕ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ, ਅਤੇ "ਸਟੈਗਫਲੇਸ਼ਨ" (Stagflation) ਤੇ "ਫਿਲਿਪਸ ਵਕਰ" (Phillips Curve) ਕੀ ਦਰਸਾਉਂਦੇ ਹਨ?',
      hi: 'RBI की 6-सदस्यीय मौद्रिक नीति समिति (MPC) द्वारा नम्य मुद्रास्फीति लक्ष्यीकरण (4% +/- 2%, अर्थात् 2% से 6%) के लिए किस मूल्य सूचकांक को आधार बनाया जाता है, तथा "स्टैगफ्लेशन" (Stagflation) और "फिलिप्स वक्र" (Phillips Curve) क्या दर्शाते हैं?',
    },
    options: {
      A: {
        en: 'Wholesale Price Index (WPI, covering services only); Stagflation is high GDP growth with zero inflation',
        pa: 'ਥੋਕ ਮੁੱਲ ਸੂਚਕ-ਅੰਕ (WPI); ਸਟੈਗਫਲੇਸ਼ਨ ਜ਼ੀਰੋ ਮਹਿੰਗਾਈ ਦੇ ਨਾਲ ਉੱਚ ਆਰਥਿਕ ਵਿਕਾਸ ਹੈ',
        hi: 'थोक मूल्य सूचकांक (WPI); स्टैगफ्लेशन शून्य मुद्रास्फीति के साथ उच्च आर्थिक वृद्धि है',
      },
      B: {
        en: 'Consumer Price Index — Combined (CPI-C, released by NSO with Base Year 2012); "Stagflation" is the simultaneous occurrence of persistent high inflation, economic stagnation (slow/negative GDP growth), and high unemployment; the "Phillips Curve" shows an inverse short-run relationship between the rate of inflation and the rate of unemployment',
        pa: 'ਖਪਤਕਾਰ ਮੁੱਲ ਸੂਚਕ-ਅੰਕ — ਸੰਯੁਕਤ (CPI-Combined, NSO ਵੱਲੋਂ ਜਾਰੀ); "ਸਟੈਗਫਲੇਸ਼ਨ" ਉੱਚ ਮਹਿੰਗਾਈ ਦੇ ਨਾਲ-ਨਾਲ ਆਰਥਿਕ ਖੜੋਤ (ਮੰਦੀ) ਅਤੇ ਉੱਚ ਬੇਰੁਜ਼ਗਾਰੀ ਦੀ ਸਥਿਤੀ ਹੈ; "ਫਿਲਿਪਸ ਵਕਰ" ਮਹਿੰਗਾਈ ਦੀ ਦਰ ਅਤੇ ਬੇਰੁਜ਼ਗਾਰੀ ਦੀ ਦਰ ਵਿਚਕਾਰ ਉਲਟ (Inverse) ਸਬੰਧ ਦਰਸਾਉਂਦਾ ਹੈ',
        hi: 'उपभोक्ता मूल्य सूचकांक — संयुक्त (CPI-Combined, NSO द्वारा जारी); "स्टैगफ्लेशन" (निस्पंद-स्फीति) उच्च मुद्रास्फीति के साथ-साथ आर्थिक गतिरोध (मंदी) और उच्च बेरोजगारी की स्थिति है; "फिलिप्स वक्र" मुद्रास्फीति की दर और बेरोजगारी की दर के बीच व्युत्क्रमानुपाती (Inverse) संबंध दर्शाता है',
      },
      C: {
        en: 'GDP Deflator; Phillips Curve shows the relationship between tax rate and tax revenue',
        pa: 'GDP ਡਿਫਲੇਟਰ; ਫਿਲਿਪਸ ਵਕਰ ਟੈਕਸ ਦਰ ਅਤੇ ਟੈਕਸ ਮਾਲੀਏ ਵਿਚਕਾਰ ਸਬੰਧ ਦਰਸਾਉਂਦਾ ਹੈ',
        hi: 'GDP अपस्फीतिकारक; फिलिप्स वक्र कर की दर और कर राजस्व के बीच संबंध दर्शाता है',
      },
      D: {
        en: 'Index of Industrial Production (IIP); Stagflation is a fall in general price level',
        pa: 'ਉਦਯੋਗਿਕ ਉਤਪਾਦਨ ਸੂਚਕ-ਅੰਕ (IIP); ਸਟੈਗਫਲੇਸ਼ਨ ਕੀਮਤਾਂ ਵਿੱਚ ਗਿਰਾਵਟ ਹੈ',
        hi: 'औद्योगिक उत्पादन सूचकांक (IIP); स्टैगफ्लेशन सामान्य मूल्य स्तर में गिरावट है',
      },
    },
    correct: 'B',
    explanation: {
      en: 'On the recommendation of the Urjit Patel Committee (2014), India adopted Consumer Price Index - Combined (CPI-C, compiled by NSO; whereas WPI is compiled by the Office of the Economic Adviser, DPIIT, Ministry of Commerce & Industry and excludes services) as the headline inflation target (4% +/- 2%) for the 6-member Monetary Policy Committee (MPC, chaired by the RBI Governor). Stagflation = Stagnation + Inflation (high inflation + high unemployment). The Phillips Curve shows an inverse relationship between inflation and unemployment (whereas the Laffer Curve relates tax rates to tax revenue, and the Lorenz Curve / Gini Coefficient measures income inequality).',
      pa: 'ਉਰਜਿਤ ਪਟੇਲ ਕਮੇਟੀ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ RBI ਦੀ 6-ਮੈਂਬਰੀ ਮੌਦ੍ਰਿਕ ਨੀਤੀ ਕਮੇਟੀ (MPC) ਵੱਲੋਂ NSO ਦੁਆਰਾ ਜਾਰੀ ਕੀਤੇ ਜਾਂਦੇ "ਖਪਤਕਾਰ ਮੁੱਲ ਸੂਚਕ-ਅੰਕ - ਸੰਯੁਕਤ" (CPI-Combined) ਦੇ ਆਧਾਰ ਤੇ ਮਹਿੰਗਾਈ ਨੂੰ 4% (+/- 2%) ਦੇ ਦਾਇਰੇ ਵਿੱਚ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ (ਜਦਕਿ WPI ਵਿੱਚ ਸੇਵਾਵਾਂ ਸ਼ਾਮਲ ਨਹੀਂ ਹੁੰਦੀਆਂ)। "ਸਟੈਗਫਲੇਸ਼ਨ" ਉੱਚ ਮਹਿੰਗਾਈ ਅਤੇ ਉੱਚ ਬੇਰੁਜ਼ਗਾਰੀ/ਮੰਦੀ ਦਾ ਸੁਮੇਲ ਹੈ, ਅਤੇ "ਫਿਲਿਪਸ ਵਕਰ" ਮਹਿੰਗਾਈ ਤੇ ਬੇਰੁਜ਼ਗਾਰੀ ਵਿਚਕਾਰ ਉਲਟ ਸਬੰਧ ਦਿਖਾਉਂਦਾ ਹੈ।',
      hi: 'उर्जित पटेल समिति की सिफारिश पर RBI की 6-सदस्यीय मौद्रिक नीति समिति (MPC) द्वारा NSO द्वारा जारी "उपभोक्ता मूल्य सूचकांक - संयुक्त" (CPI-Combined) के आधार पर मुद्रास्फीति को 4% (+/- 2%) के दायरे में रखा जाता है (जबकि WPI में सेवाएं शामिल नहीं होतीं)। "स्टैगफ्लेशन" उच्च मुद्रास्फीति और उच्च बेरोजगारी/मंदी का सह-अस्तित्व है, तथा "फिलिप्स वक्र" मुद्रास्फीति और बेरोजगारी के बीच विपरीत संबंध दर्शाता है।',
    },
    difficulty: 'hard',
  },
  {
    id: 'q-ppsc-clk-eco-7',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'In Union Budget fiscal accounting, how is "Primary Deficit" calculated from "Fiscal Deficit", and what did the FRBM Act, 2003 aim to achieve?',
      pa: 'ਕੇਂਦਰੀ ਬਜਟ ਦੀ ਰਾਜਕੋਸ਼ੀ ਲੇਖਾਕਾਰੀ ਵਿੱਚ, "ਰਾਜਕੋਸ਼ੀ ਘਾਟੇ" (Fiscal Deficit) ਤੋਂ "ਪ੍ਰਾਇਮਰੀ ਘਾਟਾ" (Primary Deficit) ਕਿਵੇਂ ਕੱਢਿਆ ਜਾਂਦਾ ਹੈ, ਅਤੇ FRBM ਐਕਟ, 2003 ਦਾ ਮੁੱਖ ਉਦੇਸ਼ ਕੀ ਸੀ?',
      hi: 'केंद्रीय बजट के राजकोषीय लेखांकन में, "राजकोषीय घाटे" (Fiscal Deficit) से "प्राथमिक घाटा" (Primary Deficit) कैसे निकाला जाता है, और FRBM अधिनियम, 2003 का मुख्य उद्देश्य क्या था?',
    },
    options: {
      A: {
        en: 'Primary Deficit = Revenue Deficit - Grants for Creation of Capital Assets',
        pa: 'ਪ੍ਰਾਇਮਰੀ ਘਾਟਾ = ਮਾਲੀਆ ਘਾਟਾ - ਪੂੰਜੀਗਤ ਸੰਪਤੀਆਂ ਦੇ ਨਿਰਮਾਣ ਲਈ ਗ੍ਰਾਂਟਾਂ',
        hi: 'प्राथमिक घाटा = राजस्व घाटा - पूंजीगत परिसंपत्तियों के सृजन हेतु अनुदान',
      },
      B: {
        en: 'Primary Deficit = Total Expenditure - Total Revenue Receipts',
        pa: 'ਪ੍ਰਾਇਮਰੀ ਘਾਟਾ = ਕੁੱਲ ਖ਼ਰਚਾ - ਕੁੱਲ ਮਾਲੀਆ ਪ੍ਰਾਪਤੀਆਂ',
        hi: 'प्राथमिक घाटा = कुल व्यय - कुल राजस्व प्राप्तियां',
      },
      C: {
        en: 'Primary Deficit = Fiscal Deficit minus Interest Payments on previous borrowings; the Fiscal Responsibility and Budget Management (FRBM) Act, 2003 aimed to enforce fiscal discipline, reduce Fiscal Deficit (towards 3% of GDP), and eliminate Revenue Deficit',
        pa: 'ਪ੍ਰਾਇਮਰੀ ਘਾਟਾ = ਰਾਜਕੋਸ਼ੀ ਘਾਟਾ (Fiscal Deficit) ਘਟਾਓ ਵਿਆਜ ਦੀਆਂ ਅਦਾਇਗੀਆਂ (Interest Payments); FRBM ਐਕਟ, 2003 ਦਾ ਉਦੇਸ਼ ਰਾਜਕੋਸ਼ੀ ਅਨੁਸ਼ਾਸਨ ਲਿਆਉਣਾ, ਰਾਜਕੋਸ਼ੀ ਘਾਟੇ ਨੂੰ ਘਟਾਉਣਾ ਅਤੇ ਮਾਲੀਆ ਘਾਟੇ ਨੂੰ ਖ਼ਤਮ ਕਰਨਾ ਸੀ',
        hi: 'प्राथमिक घाटा = राजकोषीय घाटा (Fiscal Deficit) घटाव ब्याज भुगतान (Interest Payments); FRBM अधिनियम, 2003 का उद्देश्य राजकोषीय अनुशासन लागू करना, राजकोषीय घाटे को कम करना और राजस्व घाटे को समाप्त करना था',
      },
      D: {
        en: 'Primary Deficit = Fiscal Deficit + Interest Payments',
        pa: 'ਪ੍ਰਾਇਮਰੀ ਘਾਟਾ = ਰਾਜਕੋਸ਼ੀ ਘਾਟਾ + ਵਿਆਜ ਦੀਆਂ ਅਦਾਇਗੀਆਂ',
        hi: 'प्राथमिक घाटा = राजकोषीय घाटा + ब्याज भुगतान',
      },
    },
    correct: 'C',
    explanation: {
      en: 'Fiscal Deficit represents the total borrowing requirements of the government in a financial year: Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Creating Capital Receipts). Primary Deficit = Fiscal Deficit - Interest Payments (it shows how much of current government borrowing is going towards meeting expenses other than past debt interest). Effective Revenue Deficit = Revenue Deficit - Grants for creation of capital assets. The FRBM Act, 2003 institutionalized fiscal discipline and deficit reduction targets in India.',
      pa: 'ਰਾਜਕੋਸ਼ੀ ਘਾਟਾ (Fiscal Deficit) ਸਰਕਾਰ ਦੀ ਕੁੱਲ ਉਧਾਰ ਲੈਣ ਦੀ ਲੋੜ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ। ਪ੍ਰਾਇਮਰੀ ਘਾਟਾ (Primary Deficit) = ਰਾਜਕੋਸ਼ੀ ਘਾਟਾ - ਪੁਰਾਣੇ ਕਰਜ਼ਿਆਂ ਤੇ ਵਿਆਜ ਦੀ ਅਦਾਇਗੀ (Interest Payments)। FRBM ਐਕਟ, 2003 ਸਰਕਾਰੀ ਘਾਟੇ ਨੂੰ ਘਟਾਉਣ ਅਤੇ ਵਿੱਤੀ ਅਨੁਸ਼ਾਸਨ ਬਣਾਉਣ ਲਈ ਲਾਗੂ ਕੀਤਾ ਗਿਆ ਸੀ।',
      hi: 'राजकोषीय घाटा (Fiscal Deficit) सरकार की कुल उधार आवश्यकता को दर्शाता है। प्राथमिक घाटा (Primary Deficit) = राजकोषीय घाटा - ब्याज भुगतान (Interest Payments)। FRBM अधिनियम, 2003 राजकोषीय अनुशासन और घाटे को नियंत्रित करने के लिए लागू किया गया था।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-eco-8',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Goods and Services Tax (GST), a destination-based value-added indirect tax enacted via the 101st Constitutional Amendment Act, 2016, came into force across India on which date, on the recommendation of which Task Force, and which tax component is levied on inter-state supplies?',
      pa: '101ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 2016 ਰਾਹੀਂ ਬਣਾਇਆ ਗਿਆ ਵਸਤੂ ਅਤੇ ਸੇਵਾ ਕਰ (GST — ਇੱਕ ਮੰਜ਼ਿਲ-ਅਧਾਰਤ ਅਪ੍ਰਤੱਖ ਟੈਕਸ) ਭਾਰਤ ਵਿੱਚ ਕਿਸ ਮਿਤੀ ਨੂੰ ਲਾਗੂ ਹੋਇਆ, ਕਿਸ ਟਾਸਕ ਫੋਰਸ ਨੇ ਇਸ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਕੀਤੀ ਸੀ, ਅਤੇ ਅੰਤਰ-ਰਾਜੀ ਸਪਲਾਈ ਤੇ ਇਸ ਦਾ ਕਿਹੜਾ ਹਿੱਸਾ ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ?',
      hi: '101वें संविधान संशोधन अधिनियम, 2016 द्वारा अधिनियमित वस्तु एवं सेवा कर (GST — एक गंतव्य-आधारित अप्रत्यक्ष कर) भारत में किस तिथि से लागू हुआ, किस टास्क फोर्स ने इसकी सिफारिश की थी, और अंतर-राज्यीय आपूर्ति पर इसका कौन-सा घटक लगाया जाता है?',
    },
    options: {
      A: {
        en: '1 April 2016; Raja Chelliah Committee; SGST',
        pa: '1 ਅਪ੍ਰੈਲ 2016; ਰਾਜਾ ਚੇਲਈਆ ਕਮੇਟੀ; SGST',
        hi: '1 अप्रैल 2016; राजा चेलैया समिति; SGST',
      },
      B: {
        en: '8 November 2016; N.K. Singh Committee; UTGST',
        pa: '8 ਨਵੰਬਰ 2016; ਐੱਨ.ਕੇ. ਸਿੰਘ ਕਮੇਟੀ; UTGST',
        hi: '8 नवंबर 2016; एन.के. सिंह समिति; UTGST',
      },
      C: {
        en: '26 January 2018; Rangarajan Committee; CGST',
        pa: '26 ਜਨਵਰੀ 2018; ਰੰਗਰਾਜਨ ਕਮੇਟੀ; CGST',
        hi: '26 जनवरी 2018; रंगराजन समिति; CGST',
      },
      D: {
        en: '1 July 2017; Vijay Kelkar Task Force; Integrated GST (IGST — levied and collected by the Centre under Article 269A and apportioned between the Union and the destination State)',
        pa: '1 ਜੁਲਾਈ 2017; ਵਿਜੇ ਕੇਲਕਰ ਟਾਸਕ ਫੋਰਸ; ਏਕੀਕ੍ਰਿਤ ਜੀ.ਐੱਸ.ਟੀ. (IGST — ਅਨੁਛੇਦ 269A ਤਹਿਤ ਅੰਤਰ-ਰਾਜੀ ਵਪਾਰ ਤੇ ਕੇਂਦਰ ਦੁਆਰਾ ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ ਅਤੇ ਕੇਂਦਰ ਤੇ ਮੰਜ਼ਿਲ ਵਾਲੇ ਰਾਜ ਵਿਚਕਾਰ ਵੰਡਿਆ ਜਾਂਦਾ ਹੈ)',
        hi: '1 जुलाई 2017; विजय केलकर टास्क फोर्स; एकीकृत जीएसटी (IGST — अनुच्छेद 269A के तहत अंतर-राज्यीय व्यापार पर केंद्र द्वारा लगाया जाता है और केंद्र व गंतव्य राज्य के बीच विभाजित होता है)',
      },
    },
    correct: 'D',
    explanation: {
      en: 'First recommended by the Vijay Kelkar Task Force on implementation of the FRBM Act (2003/2004) and modelled on Canada’s dual GST structure, GST was introduced via the 101st Constitutional Amendment Act, 2016 (122nd Constitutional Amendment Bill; Assam was the first state to ratify it) and implemented on 1 July 2017. Intra-state supplies attract CGST + SGST (or UTGST), whereas inter-state supplies and imports attract Integrated GST (IGST) under Article 269A.',
      pa: 'ਵਿਜੇ ਕੇਲਕਰ ਟਾਸਕ ਫੋਰਸ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਅਤੇ ਕੈਨੇਡਾ ਦੇ ਦੋਹਰੇ GST ਮਾਡਲ ਤੇ ਅਧਾਰਤ, ਜੀ.ਐੱਸ.ਟੀ. 101ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 2016 ਰਾਹੀਂ 1 ਜੁਲਾਈ 2017 ਤੋਂ ਲਾਗੂ ਹੋਇਆ (ਅਸਾਮ ਇਸ ਨੂੰ ਪਾਸ ਕਰਨ ਵਾਲਾ ਪਹਿਲਾ ਰਾਜ ਸੀ)। ਰਾਜ ਦੇ ਅੰਦਰ ਵਪਾਰ ਤੇ CGST + SGST ਲੱਗਦਾ ਹੈ ਅਤੇ ਦੋ ਰਾਜਾਂ ਵਿਚਕਾਰ (ਅੰਤਰ-ਰਾਜੀ) ਵਪਾਰ ਤੇ ਅਨੁਛੇਦ 269A ਤਹਿਤ IGST ਲੱਗਦਾ ਹੈ।',
      hi: 'विजय केलकर टास्क फोर्स की सिफारिश और कनाडा के दोहरे GST मॉडल पर आधारित, जीएसटी 101वें संविधान संशोधन अधिनियम, 2016 द्वारा 1 जुलाई 2017 से लागू हुआ (असम इसे अनुमोदित करने वाला पहला राज्य था)। राज्य के भीतर व्यापार पर CGST + SGST लगता है और अंतर-राज्यीय व्यापार पर अनुच्छेद 269A के तहत IGST लगता है।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-eco-9',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which of the following pairs of India’s Five-Year Plans and their underlying economic models or core priorities is correctly matched?',
      pa: 'ਭਾਰਤ ਦੀਆਂ ਪੰਜ-ਸਾਲਾ ਯੋਜਨਾਵਾਂ ਅਤੇ ਉਹਨਾਂ ਦੇ ਆਰਥਿਕ ਮਾਡਲਾਂ ਜਾਂ ਮੁੱਖ ਤਰਜੀਹਾਂ ਦਾ ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਜੋੜਾ ਸਹੀ ਸੁਮੇਲ ਖਾਂਦਾ ਹੈ?',
      hi: 'भारत की पंचवर्षीय योजनाओं और उनके आर्थिक मॉडलों या मुख्य प्राथमिकताओं का निम्नलिखित में से कौन-सा युग्म सही सुमेलित है?',
    },
    options: {
      A: {
        en: 'First Five-Year Plan (1951–56): Harrod-Domar Model focusing on Agriculture & Irrigation (Bhakra-Nangal, Hirakud, Damodar Valley); Second Five-Year Plan (1956–61): P.C. Mahalanobis Model focusing on Rapid Heavy Industrialisation (Bhilai, Durgapur, Rourkela steel plants); Fifth Five-Year Plan (1974–78, prepared by D.P. Dhar): "Garibi Hatao" (Poverty Alleviation) and Attainment of Self-Reliance',
        pa: 'ਪਹਿਲੀ ਪੰਜ-ਸਾਲਾ ਯੋਜਨਾ (1951–56): ਹੈਰੋਡ-ਡੋਮਰ ਮਾਡਲ — ਖੇਤੀਬਾੜੀ ਅਤੇ ਸਿੰਚਾਈ (ਭਾਖੜਾ-ਨੰਗਲ, ਹੀਰਾਕੁੰਡ); ਦੂਜੀ ਪੰਜ-ਸਾਲਾ ਯੋਜਨਾ (1956–61): ਪੀ.ਸੀ. ਮਹਾਲਨੋਬਿਸ ਮਾਡਲ — ਭਾਰੀ ਉਦਯੋਗੀਕਰਨ (ਭਿਲਾਈ, ਦੁਰਗਾਪੁਰ, ਰਾਉਰਕੇਲਾ ਸਟੀਲ ਪਲਾਂਟ); ਪੰਜਵੀਂ ਪੰਜ-ਸਾਲਾ ਯੋਜਨਾ (1974–78, ਡੀ.ਪੀ. ਧਰ): "ਗ਼ਰੀਬੀ ਹਟਾਓ" ਅਤੇ ਆਤਮ-ਨਿਰਭਰਤਾ',
        hi: 'प्रथम पंचवर्षीय योजना (1951–56): हैरोड-डोमर मॉडल — कृषि एवं सिंचाई (भाखड़ा-नांगल, हीराकुंड); द्वितीय पंचवर्षीय योजना (1956–61): पी.सी. महालनोबिस मॉडल — तीव्र भारी औद्योगीकरण (भिलाई, दुर्गापुर, राउरकेला इस्पात संयंत्र); पांचवीं पंचवर्षीय योजना (1974–78, डी.पी. धर): "गरीबी हटाओ" और आत्मनिर्भरता की प्राप्ति',
      },
      B: {
        en: 'First Plan: Mahalanobis Model; Second Plan: Harrod-Domar Model; Fifth Plan: LPG Reforms',
        pa: 'ਪਹਿਲੀ ਯੋਜਨਾ: ਮਹਾਲਨੋਬਿਸ ਮਾਡਲ; ਦੂਜੀ ਯੋਜਨਾ: ਹੈਰੋਡ-ਡੋਮਰ ਮਾਡਲ; ਪੰਜਵੀਂ ਯੋਜਨਾ: LPG ਸੁਧਾਰ',
        hi: 'प्रथम योजना: महालनोबिस मॉडल; द्वितीय योजना: हैरोड-डोमर मॉडल; पांचवीं योजना: LPG सुधार',
      },
      C: {
        en: 'Third Plan (1961–66): Rolling Plan; Fourth Plan: Plan Holiday (1966–69)',
        pa: 'ਤੀਜੀ ਯੋਜਨਾ (1961–66): ਰੋਲਿੰਗ ਪਲਾਨ; ਚੌਥੀ ਯੋਜਨਾ: ਯੋਜਨਾ ਛੁੱਟੀ (1966–69)',
        hi: 'तृतीय योजना (1961–66): रोलिंग प्लान; चौथी योजना: योजना अवकाश (1966–69)',
      },
      D: {
        en: 'Eighth Plan: Gadgil Formula; Twelfth Plan (2012–17): Heavy Steel Plants only',
        pa: 'ਅੱਠਵੀਂ ਯੋਜਨਾ: ਗਾਡਗਿਲ ਫਾਰਮੂਲਾ; ਬਾਰ੍ਹਵੀਂ ਯੋਜਨਾ (2012–17): ਸਿਰਫ਼ ਭਾਰੀ ਸਟੀਲ ਪਲਾਂਟ',
        hi: 'आठवीं योजना: गाडगिल फॉर्मूला; बारहवीं योजना (2012–17): केवल भारी इस्पात संयंत्र',
      },
    },
    correct: 'A',
    explanation: {
      en: 'The First Five-Year Plan (1951–56) was based on the Harrod-Domar model with top priority to agriculture and irrigation projects like Bhakra-Nangal. The Second Plan (1956–61) followed the Nehru-Mahalanobis model focusing on heavy industries and the 1956 Industrial Policy Resolution. After the Third Plan (1961–66), India experienced a "Plan Holiday" (1966–69) of three annual plans when the Green Revolution was launched. The Fifth Plan (1974–78) focused on "Garibi Hatao" and Minimum Needs Programme. The Twelfth Plan (2012–17) had the theme "Faster, More Inclusive and Sustainable Growth".',
      pa: 'ਪਹਿਲੀ ਪੰਜ-ਸਾਲਾ ਯੋਜਨਾ (1951–56) ਹੈਰੋਡ-ਡੋਮਰ ਮਾਡਲ ਤੇ ਅਧਾਰਤ ਸੀ ਜਿਸ ਵਿੱਚ ਖੇਤੀਬਾੜੀ ਤੇ ਭਾਖੜਾ-ਨੰਗਲ ਵਰਗੇ ਸਿੰਚਾਈ ਪ੍ਰੋਜੈਕਟਾਂ ਨੂੰ ਤਰਜੀਹ ਦਿੱਤੀ ਗਈ। ਦੂਜੀ ਯੋਜਨਾ (1956–61) ਪੀ.ਸੀ. ਮਹਾਲਨੋਬਿਸ ਮਾਡਲ ਤੇ ਅਧਾਰਤ ਸੀ ਜਿਸ ਵਿੱਚ ਭਾਰੀ ਉਦਯੋਗਾਂ (ਭਿਲਾਈ, ਦੁਰਗਾਪੁਰ, ਰਾਉਰਕੇਲਾ) ਤੇ ਜ਼ੋਰ ਦਿੱਤਾ ਗਿਆ। 1966–69 ਦੌਰਾਨ "ਯੋਜਨਾ ਛੁੱਟੀ" (Plan Holiday) ਰਹੀ ਅਤੇ ਪੰਜਵੀਂ ਯੋਜਨਾ (1974–78) ਵਿੱਚ "ਗ਼ਰੀਬੀ ਹਟਾਓ" ਦਾ ਟੀਚਾ ਰੱਖਿਆ ਗਿਆ।',
      hi: 'प्रथम पंचवर्षीय योजना (1951–56) हैरोड-डोमर मॉडल पर आधारित थी जिसमें कृषि और भाखड़ा-नांगल जैसी सिंचाई परियोजनाओं को प्राथमिकता दी गई। द्वितीय योजना (1956–61) पी.सी. महालनोबिस मॉडल पर आधारित थी जिसमें भारी उद्योगों (भिलाई, दुर्गापुर, राउरकेला) पर बल दिया गया। 1966–69 के दौरान "योजना अवकाश" (Plan Holiday) रहा और पांचवीं योजना (1974–78) में "गरीबी हटाओ" का लक्ष्य रखा गया।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-eco-10',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'On which date was NITI Aayog (National Institution for Transforming India) established by a Union Cabinet resolution replacing the 65-year-old Planning Commission (set up on 15 March 1950), and how does NITI Aayog differ structurally from the Planning Commission?',
      pa: '65 ਸਾਲ ਪੁਰਾਣੇ ਯੋਜਨਾ ਕਮਿਸ਼ਨ (15 ਮਾਰਚ 1950 ਨੂੰ ਸਥਾਪਿਤ) ਦੀ ਥਾਂ ਤੇ ਕੇਂਦਰੀ ਮੰਤਰੀ ਮੰਡਲ ਦੇ ਮਤੇ ਰਾਹੀਂ ਨੀਤੀ ਆਯੋਗ (NITI Aayog) ਦੀ ਸਥਾਪਨਾ ਕਿਸ ਮਿਤੀ ਨੂੰ ਕੀਤੀ ਗਈ, ਅਤੇ ਨੀਤੀ ਆਯੋਗ ਯੋਜਨਾ ਕਮਿਸ਼ਨ ਤੋਂ ਕਿਵੇਂ ਵੱਖਰਾ ਹੈ?',
      hi: '65 वर्ष पुराने योजना आयोग (15 मार्च 1950 को स्थापित) के स्थान पर केंद्रीय मंत्रिमंडल के प्रस्ताव द्वारा नीति आयोग (NITI Aayog) की स्थापना किस तिथि को की गई, और नीति आयोग संरचनात्मक रूप से योजना आयोग से किस प्रकार भिन्न है?',
    },
    options: {
      A: {
        en: '15 August 2014; NITI Aayog is a constitutional body under Article 280 that allocates tax funds',
        pa: '15 ਅਗਸਤ 2014; ਨੀਤੀ ਆਯੋਗ ਅਨੁਛੇਦ 280 ਤਹਿਤ ਇੱਕ ਸੰਵਿਧਾਨਕ ਸੰਸਥਾ ਹੈ',
        hi: '15 अगस्त 2014; नीति आयोग अनुच्छेद 280 के तहत एक संवैधानिक निकाय है',
      },
      B: {
        en: '1 January 2015; NITI Aayog is a non-constitutional, non-statutory executive policy "Think Tank" chaired by the Prime Minister, promoting "Cooperative and Competitive Federalism" with a Governing Council comprising all State Chief Ministers and UT Lt. Governors, and unlike the Planning Commission it does NOT have power to allocate financial funds',
        pa: '1 ਜਨਵਰੀ 2015; ਨੀਤੀ ਆਯੋਗ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਦੀ ਪ੍ਰਧਾਨਗੀ ਹੇਠ ਇੱਕ ਗੈਰ-ਸੰਵਿਧਾਨਕ, ਗੈਰ-ਕਾਨੂੰਨੀ (ਕਾਰਜਕਾਰੀ ਮਤੇ ਰਾਹੀਂ ਬਣਿਆ) ਨੀਤੀਗਤ "ਥਿੰਕ ਟੈਂਕ" ਹੈ ਜੋ "ਸਹਿਕਾਰੀ ਅਤੇ ਮੁਕਾਬਲੇਬਾਜ਼ ਸੰਘਵਾਦ" ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਦਾ ਹੈ (ਇਸ ਦੀ ਗਵਰਨਿੰਗ ਕੌਂਸਲ ਵਿੱਚ ਸਾਰੇ ਰਾਜਾਂ ਦੇ ਮੁੱਖ ਮੰਤਰੀ ਸ਼ਾਮਲ ਹੁੰਦੇ ਹਨ) ਅਤੇ ਯੋਜਨਾ ਕਮਿਸ਼ਨ ਦੇ ਉਲਟ ਇਸ ਕੋਲ ਵਿੱਤੀ ਫੰਡ ਵੰਡਣ ਦੀ ਸ਼ਕਤੀ ਨਹੀਂ ਹੈ',
        hi: '1 जनवरी 2015; नीति आयोग प्रधानमंत्री की अध्यक्षता में एक गैर-संवैधानिक एवं गैर-सांविधिक (मंत्रिमंडलीय प्रस्ताव से गठित) नीतिगत "थिंक टैंक" है जो "सहकारी एवं प्रतिस्पर्धी संघवाद" को बढ़ावा देता है (इसकी शासी परिषद में सभी राज्यों के मुख्यमंत्री शामिल होते हैं) और योजना आयोग के विपरीत इसके पास वित्तीय निधि आवंटित करने की शक्ति नहीं है',
      },
      C: {
        en: '2 October 2014; NITI Aayog is a statutory body created by an Act of Parliament',
        pa: '2 ਅਕਤੂਬਰ 2014; ਨੀਤੀ ਆਯੋਗ ਸੰਸਦ ਦੇ ਕਾਨੂੰਨ ਰਾਹੀਂ ਬਣੀ ਇੱਕ ਵਿਧਾਨਕ ਸੰਸਥਾ ਹੈ',
        hi: '2 अक्टूबर 2014; नीति आयोग संसद के अधिनियम द्वारा गठित एक सांविधिक निकाय है',
      },
      D: {
        en: '1 April 2015; NITI Aayog is chaired by the Union Finance Minister and prepares Five-Year Plans',
        pa: '1 ਅਪ੍ਰੈਲ 2015; ਨੀਤੀ ਆਯੋਗ ਦੀ ਪ੍ਰਧਾਨਗੀ ਕੇਂਦਰੀ ਵਿੱਤ ਮੰਤਰੀ ਕਰਦਾ ਹੈ ਅਤੇ ਇਹ ਪੰਜ-ਸਾਲਾ ਯੋਜਨਾਵਾਂ ਬਣਾਉਂਦਾ ਹੈ',
        hi: '1 अप्रैल 2015; नीति आयोग की अध्यक्षता केंद्रीय वित्त मंत्री करते हैं और यह पंचवर्षीय योजनाएं बनाता है',
      },
    },
    correct: 'B',
    explanation: {
      en: 'NITI Aayog (National Institution for Transforming India) was constituted on 1 January 2015 via an executive resolution of the Union Cabinet (hence it is neither a constitutional nor a statutory body). The Prime Minister is its Chairperson; Arvind Panagariya was its first Vice-Chairperson and Sindhushree Khullar its first CEO. Unlike the top-down Planning Commission, NITI Aayog follows a bottom-up "Think Tank" approach, fosters Cooperative Federalism via its Governing Council (all CMs and Lt. Governors), and has no power to allocate funds (which now rests with the Finance Ministry and Finance Commission).',
      pa: 'ਨੀਤੀ ਆਯੋਗ (National Institution for Transforming India) ਦੀ ਸਥਾਪਨਾ 1 ਜਨਵਰੀ 2015 ਨੂੰ ਕੇਂਦਰੀ ਮੰਤਰੀ ਮੰਡਲ ਦੇ ਮਤੇ ਰਾਹੀਂ ਕੀਤੀ ਗਈ ਸੀ (ਇਸ ਲਈ ਇਹ ਨਾ ਤਾਂ ਸੰਵਿਧਾਨਕ ਸੰਸਥਾ ਹੈ ਅਤੇ ਨਾ ਹੀ ਕਾਨੂੰਨੀ/ਵਿਧਾਨਕ)। ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਇਸ ਦਾ ਪਦੇਨ ਚੇਅਰਪਰਸਨ ਹੁੰਦਾ ਹੈ (ਅਰਵਿੰਦ ਪਨਗੜ੍ਹੀਆ ਇਸ ਦੇ ਪਹਿਲੇ ਉਪ-ਚੇਅਰਮੈਨ ਸਨ)। ਇਹ "ਹੇਠਾਂ ਤੋਂ ਉੱਪਰ" (Bottom-up) ਪਹੁੰਚ ਤੇ ਕੰਮ ਕਰਨ ਵਾਲਾ ਥਿੰਕ ਟੈਂਕ ਹੈ।',
      hi: 'नीति आयोग (National Institution for Transforming India) की स्थापना 1 जनवरी 2015 को केंद्रीय मंत्रिमंडल के प्रस्ताव द्वारा की गई थी (अतः यह न तो संवैधानिक निकाय है और न ही सांविधिक)। प्रधानमंत्री इसके पदेन अध्यक्ष होते हैं (अरविंद पनगढ़िया इसके प्रथम उपाध्यक्ष थे)। यह "बॉटम-अप" (Bottom-up) दृष्टिकोण पर कार्य करने वाला थिंक टैंक है।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-eco-11',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Who are respectively honoured as the "Father of the Green Revolution in the World" and the "Father of the Green Revolution in India", and which premier agricultural university established at Ludhiana in 1962 spearheaded the Green Revolution in Punjab?',
      pa: 'ਕ੍ਰਮਵਾਰ "ਵਿਸ਼ਵ ਵਿੱਚ ਹਰੀ ਕ੍ਰਾਂਤੀ ਦੇ ਪਿਤਾਮਾ" ਅਤੇ "ਭਾਰਤ ਵਿੱਚ ਹਰੀ ਕ੍ਰਾਂਤੀ ਦੇ ਪਿਤਾਮਾ" ਵਜੋਂ ਕਿਸ ਨੂੰ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ, ਅਤੇ 1962 ਵਿੱਚ ਲੁਧਿਆਣਾ ਵਿਖੇ ਸਥਾਪਿਤ ਕਿਸ ਖੇਤੀਬਾੜੀ ਯੂਨੀਵਰਸਿਟੀ ਨੇ ਪੰਜਾਬ ਵਿੱਚ ਹਰੀ ਕ੍ਰਾਂਤੀ ਦੀ ਅਗਵਾਈ ਕੀਤੀ?',
      hi: 'क्रमशः "विश्व में हरित क्रांति के जनक" और "भारत में हरित क्रांति के जनक" के रूप में किसे जाना जाता है, तथा 1962 में लुधियाना में स्थापित किस कृषि विश्वविद्यालय ने पंजाब में हरित क्रांति का नेतृत्व किया?',
    },
    options: {
      A: {
        en: 'Dr. Verghese Kurien and Dr. Hiralal Chaudhuri; Guru Angad Dev Veterinary University',
        pa: 'ਡਾ. ਵਰਗੀਜ਼ ਕੁਰੀਅਨ ਅਤੇ ਡਾ. ਹੀਰਾਲਾਲ ਚੌਧਰੀ; ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਵੈਟਰਨਰੀ ਯੂਨੀਵਰਸਿਟੀ',
        hi: 'डॉ. वर्गीज कुरियन और डॉ. हीरालाल चौधरी; गुरु अंगद देव वेटरनरी विश्वविद्यालय',
      },
      B: {
        en: 'William Gaud and Sam Pitroda; Punjabi University Patiala',
        pa: 'ਵਿਲੀਅਮ ਗੌਡ ਅਤੇ ਸੈਮ ਪਿਤਰੋਦਾ; ਪੰਜਾਬੀ ਯੂਨੀਵਰਸਿਟੀ ਪਟਿਆਲਾ',
        hi: 'विलियम गॉड और सैम पित्रोदा; पंजाबी विश्वविद्यालय पटियाला',
      },
      C: {
        en: 'Dr. Norman E. Borlaug (Nobel Peace Prize 1970 — developer of Mexican dwarf wheat) and Dr. M.S. Swaminathan (Bharat Ratna 2024); Punjab Agricultural University (PAU), Ludhiana (established in 1962, where Dr. Dilbagh Singh Athwal developed PV-18 and Kalyan Sona wheat and the world’s first pearl millet hybrid HB-1)',
        pa: 'ਡਾ. ਨੌਰਮਨ ਈ. ਬੋਰਲੌਗ (1970 ਨੋਬਲ ਸ਼ਾਂਤੀ ਪੁਰਸਕਾਰ — ਮੈਕਸੀਕਨ ਬੌਣੀ ਕਣਕ ਦੇ ਖੋਜੀ) ਅਤੇ ਡਾ. ਐੱਮ.ਐੱਸ. ਸਵਾਮੀਨਾਥਨ (ਭਾਰਤ ਰਤਨ 2024); ਪੰਜਾਬ ਐਗਰੀਕਲਚਰਲ ਯੂਨੀਵਰਸਿਟੀ (PAU), ਲੁਧਿਆਣਾ (1962 ਵਿੱਚ ਸਥਾਪਿਤ, ਜਿੱਥੇ ਡਾ. ਦਿਲਬਾਗ ਸਿੰਘ ਅਠਵਾਲ ਨੇ ਕਲਿਆਣ ਸੋਨਾ ਤੇ PV-18 ਕਣਕ ਅਤੇ ਬਾਜਰੇ ਦੀ ਪਹਿਲੀ ਹਾਈਬ੍ਰਿਡ ਕਿਸਮ HB-1 ਵਿਕਸਤ ਕੀਤੀ)',
        hi: 'डॉ. नॉर्मन ई. बोरलॉग (1970 नोबेल शांति पुरस्कार — मैक्सिकन बौनी गेहूं के जनक) और डॉ. एम.एस. स्वामीनाथन (भारत रत्न 2024); पंजाब कृषि विश्वविद्यालय (PAU), लुधियाना (1962 में स्थापित, जहाँ डॉ. दिलबाग सिंह अठवाल ने कल्याण सोना व PV-18 गेहूं तथा बाजरे की प्रथम संकर किस्म HB-1 विकसित की)',
      },
      D: {
        en: 'C. Subramaniam and Gurcharan Singh Kalkat; Guru Nanak Dev University Amritsar',
        pa: 'ਸੀ. ਸੁਬਰਾਮਨੀਅਮ ਅਤੇ ਗੁਰਚਰਨ ਸਿੰਘ ਕਾਲਕਟ; ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਯੂਨੀਵਰਸਿਟੀ ਅੰਮ੍ਰਿਤਸਰ',
        hi: 'सी. सुब्रमण्यम और गुरचरण सिंह कालकट; गुरु नानक देव विश्वविद्यालय अमृतसर',
      },
    },
    correct: 'C',
    explanation: {
      en: 'While William Gaud coined the term "Green Revolution" (1968), American agronomist Dr. Norman Borlaug is the Father of the Green Revolution globally, and Dr. M.S. Swaminathan (with then Food & Agriculture Minister C. Subramaniam) is the Father of the Green Revolution in India (launched in 1966–67 using High-Yielding Varieties like Lerma Rojo 64A, Sonora 64, Kalyan Sona, and Sonalika for wheat, and IR-8 "Miracle Rice" for paddy). Established in 1962 and inaugurated by PM Jawaharlal Nehru in July 1963, Punjab Agricultural University (PAU), Ludhiana—along with scientists like Dr. Dilbagh Singh Athwal and Dr. Gurcharan Singh Kalkat—made Punjab the "Granary / Breadbasket of India". Note: Dr. Verghese Kurien is the Father of the White Revolution (Operation Flood, 1970).',
      pa: 'ਡਾ. ਨੌਰਮਨ ਬੋਰਲੌਗ ਨੂੰ ਵਿਸ਼ਵ ਵਿੱਚ ਅਤੇ ਡਾ. ਐੱਮ.ਐੱਸ. ਸਵਾਮੀਨਾਥਨ ਨੂੰ ਭਾਰਤ ਵਿੱਚ "ਹਰੀ ਕ੍ਰਾਂਤੀ ਦਾ ਪਿਤਾਮਾ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ। 1966-67 ਵਿੱਚ ਸ਼ੁਰੂ ਹੋਈ ਹਰੀ ਕ੍ਰਾਂਤੀ ਵਿੱਚ ਮੈਕਸੀਕਨ ਬੌਣੀ ਕਣਕ ਦੀਆਂ ਉੱਚ-ਝਾੜ ਵਾਲੀਆਂ ਕਿਸਮਾਂ (Sonora-64, Lerma Rojo, ਕਲਿਆਣ ਸੋਨਾ, ਸੋਨਾਲੀਕਾ, PV-18) ਅਤੇ ਝੋਨੇ ਦੀ IR-8 ਕਿਸਮ ਵਰਤੀ ਗਈ। 1962 ਵਿੱਚ ਸਥਾਪਿਤ ਪੰਜਾਬ ਐਗਰੀਕਲਚਰਲ ਯੂਨੀਵਰਸਿਟੀ (PAU), ਲੁਧਿਆਣਾ (ਅਤੇ ਡਾ. ਦਿਲਬਾਗ ਸਿੰਘ ਅਠਵਾਲ) ਨੇ ਪੰਜਾਬ ਨੂੰ "ਭਾਰਤ ਦਾ ਅੰਨ ਭੰਡਾਰ" ਬਣਾਉਣ ਵਿੱਚ ਇਤਿਹਾਸਕ ਭੂਮਿਕਾ ਨਿਭਾਈ। (ਡਾ. ਵਰਗੀਜ਼ ਕੁਰੀਅਨ ਚਿੱਟੀ ਕ੍ਰਾਂਤੀ / ਓਪਰੇਸ਼ਨ ਫਲੱਡ ਦੇ ਪਿਤਾਮਾ ਹਨ)।',
      hi: 'डॉ. नॉर्मन बोरलॉग को विश्व में और डॉ. एम.एस. स्वामीनाथन को भारत में "हरित क्रांति का जनक" कहा जाता है। 1966–67 में प्रारंभ हुई हरित क्रांति में मैक्सिकन बौनी गेहूं की उच्च उपज वाली किस्मों (सोनोरा-64, लर्मा रोजो, कल्याण सोना, सोनालिका, PV-18) और धान की IR-8 किस्म का उपयोग हुआ। 1962 में स्थापित पंजाब कृषि विश्वविद्यालय (PAU), लुधियाना (और डॉ. दिलबाग सिंह अठवाल) ने पंजाब को "भारत का अन्न भंडार" बनाने में ऐतिहासिक भूमिका निभाई। (डॉ. वर्गीज कुरियन श्वेत क्रांति / ऑपरेशन फ्लड के जनक हैं)।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-eco-12',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which statutory/expert body under the Ministry of Agriculture & Farmers Welfare recommends Minimum Support Prices (MSP) for 22 mandated crops (plus Fair and Remunerative Price / FRP for Sugarcane), and which body gives the final approval to the MSP?',
      pa: 'ਖੇਤੀਬਾੜੀ ਅਤੇ ਕਿਸਾਨ ਭਲਾਈ ਮੰਤਰਾਲੇ ਅਧੀਨ ਕਿਹੜੀ ਸੰਸਥਾ 22 ਲਾਜ਼ਮੀ ਫ਼ਸਲਾਂ ਲਈ ਘੱਟੋ-ਘੱਟ ਸਮਰਥਨ ਮੁੱਲ (MSP) ਅਤੇ ਗੰਨੇ ਲਈ ਉਚਿਤ ਤੇ ਲਾਹੇਵੰਦ ਮੁੱਲ (FRP) ਦੀ ਸਿਫ਼ਾਰਸ਼ ਕਰਦੀ ਹੈ, ਅਤੇ MSP ਨੂੰ ਅੰਤਿਮ ਪ੍ਰਵਾਨਗੀ ਕੌਣ ਦਿੰਦਾ ਹੈ?',
      hi: 'कृषि एवं किसान कल्याण मंत्रालय के अधीन कौन-सा निकाय 22 अधिदेशित फसलों के लिए न्यूनतम समर्थन मूल्य (MSP) तथा गन्ने के लिए उचित एवं लाभकारी मूल्य (FRP) की सिफारिश करता है, और MSP को अंतिम स्वीकृति कौन देता है?',
    },
    options: {
      A: {
        en: 'Food Corporation of India (FCI) recommends; NITI Aayog approves',
        pa: 'ਭਾਰਤੀ ਖੁਰਾਕ ਨਿਗਮ (FCI) ਸਿਫ਼ਾਰਸ਼ ਕਰਦਾ ਹੈ; ਨੀਤੀ ਆਯੋਗ ਪ੍ਰਵਾਨਗੀ ਦਿੰਦਾ ਹੈ',
        hi: 'भारतीय खाद्य निगम (FCI) सिफारिश करता है; नीति आयोग मंजूरी देता है',
      },
      B: {
        en: 'NABARD recommends; Reserve Bank of India approves',
        pa: 'ਨਾਬਾਰਡ (NABARD) ਸਿਫ਼ਾਰਸ਼ ਕਰਦਾ ਹੈ; ਭਾਰਤੀ ਰਿਜ਼ਰਵ ਬੈਂਕ ਪ੍ਰਵਾਨਗੀ ਦਿੰਦਾ ਹੈ',
        hi: 'नाबार्ड (NABARD) सिफारिश करता है; भारतीय रिजर्व बैंक मंजूरी देता है',
      },
      C: {
        en: 'APEDA recommends; GST Council approves',
        pa: 'APEDA ਸਿਫ਼ਾਰਸ਼ ਕਰਦਾ ਹੈ; ਜੀ.ਐੱਸ.ਟੀ. ਕੌਂਸਲ ਪ੍ਰਵਾਨਗੀ ਦਿੰਦੀ ਹੈ',
        hi: 'एपीडा (APEDA) सिफारिश करता है; जीएसटी परिषद मंजूरी देती है',
      },
      D: {
        en: 'Commission for Agricultural Costs and Prices (CACP, originally established in January 1965 as Agricultural Prices Commission) recommends based on A2+FL / C2 cost formulas; the Cabinet Committee on Economic Affairs (CCEA, chaired by the Prime Minister) grants final approval',
        pa: 'ਖੇਤੀਬਾੜੀ ਲਾਗਤਾਂ ਅਤੇ ਕੀਮਤਾਂ ਬਾਰੇ ਕਮਿਸ਼ਨ (CACP — ਜਨਵਰੀ 1965 ਵਿੱਚ ਖੇਤੀਬਾੜੀ ਕੀਮਤ ਕਮਿਸ਼ਨ ਵਜੋਂ ਸਥਾਪਿਤ) A2+FL / C2 ਲਾਗਤ ਦੇ ਆਧਾਰ ਤੇ ਸਿਫ਼ਾਰਸ਼ ਕਰਦਾ ਹੈ; ਅਤੇ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਦੀ ਪ੍ਰਧਾਨਗੀ ਵਾਲੀ "ਆਰਥਿਕ ਮਾਮਲਿਆਂ ਬਾਰੇ ਕੈਬਨਿਟ ਕਮੇਟੀ" (CCEA) ਅੰਤਿਮ ਮਨਜ਼ੂਰੀ ਦਿੰਦੀ ਹੈ',
        hi: 'कृषि लागत और मूल्य आयोग (CACP — जनवरी 1965 में कृषि मूल्य आयोग के रूप में स्थापित) A2+FL / C2 लागत के आधार पर सिफारिश करता है; और प्रधानमंत्री की अध्यक्षता वाली "आर्थिक मामलों की मंत्रिमंडलीय समिति" (CCEA) अंतिम स्वीकृति देती है',
      },
    },
    correct: 'D',
    explanation: {
      en: 'Established on 1 January 1965 as the Agricultural Prices Commission (renamed CACP in 1985; along with FCI established in 1965 under the Food Corporations Act, 1964), the Commission for Agricultural Costs and Prices (CACP) recommends MSPs for 22 mandated crops (14 Kharif crops, 6 Rabi crops, and 2 commercial crops—Jute and Copra) plus Fair and Remunerative Price (FRP) for Sugarcane. Final approval is given by the Cabinet Committee on Economic Affairs (CCEA) chaired by the Prime Minister.',
      pa: '1 ਜਨਵਰੀ 1965 ਨੂੰ ਸਥਾਪਿਤ "ਖੇਤੀਬਾੜੀ ਲਾਗਤਾਂ ਅਤੇ ਕੀਮਤਾਂ ਬਾਰੇ ਕਮਿਸ਼ਨ" (CACP, ਜਿਸ ਦਾ ਪਹਿਲਾਂ ਨਾਂ ਖੇਤੀਬਾੜੀ ਕੀਮਤ ਕਮਿਸ਼ਨ ਸੀ; 1965 ਵਿੱਚ ਹੀ FCI ਦੀ ਸਥਾਪਨਾ ਹੋਈ) 22 ਫ਼ਸਲਾਂ (14 ਸਾਉਣੀ, 6 ਹਾੜ੍ਹੀ ਅਤੇ 2 ਵਪਾਰਕ ਫ਼ਸਲਾਂ) ਲਈ MSP ਅਤੇ ਗੰਨੇ ਲਈ FRP ਦੀ ਸਿਫ਼ਾਰਸ਼ ਕਰਦਾ ਹੈ। ਇਸ ਨੂੰ ਅੰਤਿਮ ਮਨਜ਼ੂਰੀ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਦੀ ਪ੍ਰਧਾਨਗੀ ਵਾਲੀ "ਆਰਥਿਕ ਮਾਮਲਿਆਂ ਬਾਰੇ ਕੈਬਨਿਟ ਕਮੇਟੀ" (CCEA) ਦਿੰਦੀ ਹੈ।',
      hi: '1 जनवरी 1965 को स्थापित "कृषि लागत और मूल्य आयोग" (CACP, पूर्व नाम कृषि मूल्य आयोग; 1965 में ही FCI की स्थापना हुई) 22 फसलों (14 खरीफ, 6 रबी और 2 वाणिज्यिक फसलों) के लिए MSP तथा गन्ने के लिए FRP की सिफारिश करता है। इसे अंतिम मंजूरी प्रधानमंत्री की अध्यक्षता वाली "आर्थिक मामलों की मंत्रिमंडलीय समिति" (CCEA) देती है।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-eco-13',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'On which date and on the recommendation of which Committee was the National Bank for Agriculture and Rural Development (NABARD) established as India’s apex rural development bank?',
      pa: 'ਭਾਰਤ ਦੇ ਸਿਖਰਲੇ ਪੇਂਡੂ ਵਿਕਾਸ ਬੈਂਕ ਵਜੋਂ "ਰਾਸ਼ਟਰੀ ਖੇਤੀਬਾੜੀ ਅਤੇ ਪੇਂਡੂ ਵਿਕਾਸ ਬੈਂਕ" (NABARD) ਦੀ ਸਥਾਪਨਾ ਕਿਸ ਮਿਤੀ ਨੂੰ ਅਤੇ ਕਿਸ ਕਮੇਟੀ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ ਕੀਤੀ ਗਈ ਸੀ?',
      hi: 'भारत के शीर्ष ग्रामीण विकास बैंक के रूप में "राष्ट्रीय कृषि और ग्रामीण विकास बैंक" (NABARD) की स्थापना किस तिथि को और किस समिति की सिफारिश पर की गई थी?',
    },
    options: {
      A: {
        en: '12 July 1982 (during the Sixth Five-Year Plan, headquartered in Mumbai); on the recommendation of the B. Sivaraman Committee (CRAFICARD, 1979)',
        pa: '12 ਜੁਲਾਈ 1982 (ਛੇਵੀਂ ਪੰਜ-ਸਾਲਾ ਯੋਜਨਾ ਦੌਰਾਨ, ਮੁੱਖ ਦਫ਼ਤਰ ਮੁੰਬਈ); ਬੀ. ਸ਼ਿਵਰਾਮਨ ਕਮੇਟੀ (CRAFICARD, 1979) ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ',
        hi: '12 जुलाई 1982 (छठी पंचवर्षीय योजना के दौरान, मुख्यालय मुंबई); बी. शिवरामन समिति (CRAFICARD, 1979) की सिफारिश पर',
      },
      B: {
        en: '2 October 1975; on the recommendation of the M. Narasimham Working Group',
        pa: '2 ਅਕਤੂਬਰ 1975; ਐੱਮ. ਨਰਸਿਮਹਮ ਵਰਕਿੰਗ ਗਰੁੱਪ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ',
        hi: '2 अक्टूबर 1975; एम. नरसिम्हम कार्यदल की सिफारिश पर',
      },
      C: {
        en: '1 July 1955; on the recommendation of the All India Rural Credit Survey Committee (Gorwala Committee)',
        pa: '1 ਜੁਲਾਈ 1955; ਗੋਰਵਾਲਾ ਕਮੇਟੀ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ',
        hi: '1 जुलाई 1955; गोरवाला समिति की सिफारिश पर',
      },
      D: {
        en: '2 April 1990; on the recommendation of the Nachiket Mor Committee',
        pa: '2 ਅਪ੍ਰੈਲ 1990; ਨਚਿਕੇਤ ਮੋਰ ਕਮੇਟੀ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ',
        hi: '2 अप्रैल 1990; नचिकेत मोर समिति की सिफारिश पर',
      },
    },
    correct: 'A',
    explanation: {
      en: 'NABARD (National Bank for Agriculture and Rural Development, headquartered in Mumbai) was established on 12 July 1982 under the NABARD Act, 1981 (during the 6th Five-Year Plan) on the recommendation of the B. Sivaraman Committee (Committee to Review Arrangements for Institutional Credit for Agriculture and Rural Development — CRAFICARD). Note: Regional Rural Banks (RRBs) were set up on 2 October 1975 (first being Prathama Bank in Moradabad, UP) on the recommendation of the M. Narasimham Committee; State Bank of India (SBI) was formed on 1 July 1955 (from Imperial Bank of India) on the recommendation of the A.D. Gorwala Committee; and SIDBI was established on 2 April 1990 (headquartered in Lucknow).',
      pa: 'ਨਾਬਾਰਡ (NABARD — ਮੁੱਖ ਦਫ਼ਤਰ ਮੁੰਬਈ) ਦੀ ਸਥਾਪਨਾ 12 ਜੁਲਾਈ 1982 ਨੂੰ (ਛੇਵੀਂ ਪੰਜ-ਸਾਲਾ ਯੋਜਨਾ ਦੌਰਾਨ) ਬੀ. ਸ਼ਿਵਰਾਮਨ ਕਮੇਟੀ (CRAFICARD) ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ ਕੀਤੀ ਗਈ ਸੀ। ਯਾਦ ਰੱਖੋ: ਖੇਤਰੀ ਪੇਂਡੂ ਬੈਂਕ (RRBs) 2 ਅਕਤੂਬਰ 1975 ਨੂੰ ਐੱਮ. ਨਰਸਿਮਹਮ ਕਮੇਟੀ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ ਬਣੇ; ਸਟੇਟ ਬੈਂਕ ਆਫ਼ ਇੰਡੀਆ (SBI) 1 ਜੁਲਾਈ 1955 ਨੂੰ ਗੋਰਵਾਲਾ ਕਮੇਟੀ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ ਬਣਿਆ; ਅਤੇ SIDBI 2 ਅਪ੍ਰੈਲ 1990 ਨੂੰ (ਮੁੱਖ ਦਫ਼ਤਰ ਲਖਨਊ) ਸਥਾਪਿਤ ਹੋਇਆ।',
      hi: 'नाबार्ड (NABARD — मुख्यालय मुंबई) की स्थापना 12 जुलाई 1982 को (छठी पंचवर्षीय योजना के दौरान) बी. शिवरामन समिति (CRAFICARD) की सिफारिश पर की गई थी। ध्यान रखें: क्षेत्रीय ग्रामीण बैंक (RRBs) 2 अक्टूबर 1975 को एम. नरसिम्हम समिति की सिफारिश पर बने; भारतीय स्टेट बैंक (SBI) 1 जुलाई 1955 को गोरवाला समिति की सिफारिश पर बना; और सिडबी (SIDBI) 2 अप्रैल 1990 को (मुख्यालय लखनऊ) स्थापित हुआ।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-eco-14',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'In which year was the Securities and Exchange Board of India (SEBI) initially constituted as a non-statutory body, in which year was it granted statutory powers by an Act of Parliament following the Harshad Mehta securities scam, and where is its headquarters located?',
      pa: 'ਭਾਰਤੀ ਪ੍ਰਤੀਭੂਤੀ ਅਤੇ ਵਟਾਂਦਰਾ ਬੋਰਡ (SEBI) ਦਾ ਗਠਨ ਸ਼ੁਰੂ ਵਿੱਚ ਇੱਕ ਗੈਰ-ਕਾਨੂੰਨੀ ਸੰਸਥਾ ਵਜੋਂ ਕਿਸ ਸਾਲ ਹੋਇਆ, ਕਿਸ ਸਾਲ ਸੰਸਦ ਦੇ ਐਕਟ ਰਾਹੀਂ ਇਸ ਨੂੰ ਵਿਧਾਨਕ (Statutory) ਦਰਜਾ ਮਿਲਿਆ, ਅਤੇ ਇਸ ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਕਿੱਥੇ ਹੈ?',
      hi: 'भारतीय प्रतिभूति और विनिमय बोर्ड (SEBI) का गठन प्रारंभ में एक गैर-सांविधिक निकाय के रूप में किस वर्ष हुआ, किस वर्ष संसद के अधिनियम द्वारा इसे सांविधिक (Statutory) दर्जा प्रदान किया गया, और इसका मुख्यालय कहाँ स्थित है?',
    },
    options: {
      A: {
        en: 'Constituted in 1991; Statutory status in 1999; Headquarters in New Delhi',
        pa: '1991 ਵਿੱਚ ਗਠਨ; 1999 ਵਿੱਚ ਵਿਧਾਨਕ ਦਰਜਾ; ਮੁੱਖ ਦਫ਼ਤਰ ਨਵੀਂ ਦਿੱਲੀ',
        hi: '1991 में गठन; 1999 में सांविधिक दर्जा; मुख्यालय नई दिल्ली',
      },
      B: {
        en: 'Constituted on 12 April 1988; granted Statutory status on 30 January 1992 (under the SEBI Act, 1992); Headquarters in Mumbai ( regulates India’s capital and securities markets)',
        pa: '12 ਅਪ੍ਰੈਲ 1988 ਨੂੰ ਗਠਨ; 30 ਜਨਵਰੀ 1992 ਨੂੰ SEBI ਐਕਟ, 1992 ਤਹਿਤ ਵਿਧਾਨਕ (Statutory) ਦਰਜਾ; ਮੁੱਖ ਦਫ਼ਤਰ ਮੁੰਬਈ ਵਿਖੇ (ਭਾਰਤ ਦੇ ਪੂੰਜੀ ਅਤੇ ਸ਼ੇਅਰ ਬਾਜ਼ਾਰ ਨੂੰ ਨਿਯੰਤਰਿਤ ਕਰਦਾ ਹੈ)',
        hi: '12 अप्रैल 1988 को गठन; 30 जनवरी 1992 को SEBI अधिनियम, 1992 के तहत सांविधिक (Statutory) दर्जा; मुख्यालय मुंबई में (भारत के पूंजी एवं प्रतिभूति बाजार का नियामक)',
      },
      C: {
        en: 'Constituted in 1982; Statutory status in 1988; Headquarters in Kolkata',
        pa: '1982 ਵਿੱਚ ਗਠਨ; 1988 ਵਿੱਚ ਵਿਧਾਨਕ ਦਰਜਾ; ਮੁੱਖ ਦਫ਼ਤਰ ਕੋਲਕਾਤਾ',
        hi: '1982 में गठन; 1988 में सांविधिक दर्जा; मुख्यालय कोलकाता',
      },
      D: {
        en: 'Constituted in 1999; Statutory status in 2003; Headquarters in Hyderabad',
        pa: '1999 ਵਿੱਚ ਗਠਨ; 2003 ਵਿੱਚ ਵਿਧਾਨਕ ਦਰਜਾ; ਮੁੱਖ ਦਫ਼ਤਰ ਹੈਦਰਾਬਾਦ',
        hi: '1999 में गठन; 2003 में सांविधिक दर्जा; मुख्यालय हैदराबाद',
      },
    },
    correct: 'B',
    explanation: {
      en: 'SEBI (Securities and Exchange Board of India) was initially constituted on 12 April 1988 as a non-statutory body by a resolution of the Government of India. It was given statutory powers on 30 January 1992 through the SEBI Act, 1992. Headquartered at Bandra Kurla Complex in Mumbai, SEBI regulates the securities/capital market (stock exchanges like BSE and NSE, mutual funds, FPIs) and protects investor interests. (Note: IRDAI, regulator of insurance, was set up in 1999/2000 on the Malhotra Committee’s recommendation and is headquartered in Hyderabad; PFRDA, regulator of pensions, got statutory status in 2013 and is in New Delhi).',
      pa: 'ਸੇਬੀ (SEBI) ਦੀ ਸਥਾਪਨਾ 12 ਅਪ੍ਰੈਲ 1988 ਨੂੰ ਇੱਕ ਗੈਰ-ਕਾਨੂੰਨੀ ਸੰਸਥਾ ਵਜੋਂ ਹੋਈ ਸੀ ਅਤੇ 30 ਜਨਵਰੀ 1992 ਨੂੰ "SEBI ਐਕਟ, 1992" ਰਾਹੀਂ ਇਸ ਨੂੰ ਵਿਧਾਨਕ (Statutory) ਦਰਜਾ ਦਿੱਤਾ ਗਿਆ। ਇਸ ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਮੁੰਬਈ ਵਿਖੇ ਹੈ ਅਤੇ ਇਹ ਭਾਰਤ ਦੇ ਪੂੰਜੀ/ਸ਼ੇਅਰ ਬਾਜ਼ਾਰ (BSE, NSE, Mutual Funds) ਨੂੰ ਨਿਯੰਤਰਿਤ ਕਰਦਾ ਹੈ। (ਬੀਮਾ ਰੈਗੂਲੇਟਰ IRDAI ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਹੈਦਰਾਬਾਦ ਵਿਖੇ ਹੈ)।',
      hi: 'सेबी (SEBI) की स्थापना 12 अप्रैल 1988 को एक गैर-सांविधिक निकाय के रूप में हुई थी और 30 जनवरी 1992 को "SEBI अधिनियम, 1992" के माध्यम से इसे सांविधिक (Statutory) दर्जा दिया गया। इसका मुख्यालय मुंबई में है और यह भारत के पूंजी/प्रतिभूति बाजार (BSE, NSE, म्यूचुअल फंड) का नियमन करता है। (बीमा नियामक IRDAI का मुख्यालय हैदराबाद में है)।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-eco-15',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'In India’s Balance of Payments (BoP) accounts, how are transactions classified between the "Current Account" and the "Capital Account", and what are the four official components of India’s Foreign Exchange (Forex) Reserves held by the RBI?',
      pa: 'ਭਾਰਤ ਦੇ ਭੁਗਤਾਨ ਸੰਤੁਲਨ (Balance of Payments — BoP) ਖਾਤਿਆਂ ਵਿੱਚ "ਚਾਲੂ ਖਾਤੇ" (Current Account) ਅਤੇ "ਪੂੰਜੀ ਖਾਤੇ" (Capital Account) ਵਿਚਕਾਰ ਲੈਣ-ਦੇਣ ਨੂੰ ਕਿਵੇਂ ਵੰਡਿਆ ਜਾਂਦਾ ਹੈ, ਅਤੇ RBI ਕੋਲ ਮੌਜੂਦ ਭਾਰਤ ਦੇ ਵਿਦੇਸ਼ੀ ਮੁਦਰਾ ਭੰਡਾਰ (Forex Reserves) ਦੇ ਚਾਰ ਅਧਿਕਾਰਤ ਹਿੱਸੇ ਕਿਹੜੇ ਹਨ?',
      hi: 'भारत के भुगतान संतुलन (Balance of Payments — BoP) खातों में "चालू खाते" (Current Account) और "पूंजी खाते" (Capital Account) के बीच लेनदेन को कैसे वर्गीकृत किया जाता है, तथा RBI के पास रखे गए भारत के विदेशी मुद्रा भंडार (Forex Reserves) के चार आधिकारिक घटक कौन-से हैं?',
    },
    options: {
      A: {
        en: 'Current Account includes FDI and FPI; Capital Account includes Merchandise Exports and Imports',
        pa: 'ਚਾਲੂ ਖਾਤੇ ਵਿੱਚ FDI ਅਤੇ FPI ਸ਼ਾਮਲ ਹਨ; ਪੂੰਜੀ ਖਾਤੇ ਵਿੱਚ ਵਸਤੂਆਂ ਦੀ ਦਰਾਮਦ-ਬਰਾਮਦ ਸ਼ਾਮਲ ਹੈ',
        hi: 'चालू खाते में FDI और FPI शामिल हैं; पूंजी खाते में वस्तुओं का आयात-निर्यात शामिल है',
      },
      B: {
        en: 'Current Account includes External Commercial Borrowings; Forex Reserves include Silver and Crude Oil reserves',
        pa: 'ਚਾਲੂ ਖਾਤੇ ਵਿੱਚ ਬਾਹਰੀ ਵਪਾਰਕ ਕਰਜ਼ੇ ਸ਼ਾਮਲ ਹਨ; ਵਿਦੇਸ਼ੀ ਮੁਦਰਾ ਭੰਡਾਰ ਵਿੱਚ ਚਾਂਦੀ ਅਤੇ ਕੱਚਾ ਤੇਲ ਸ਼ਾਮਲ ਹਨ',
        hi: 'चालू खाते में बाह्य वाणिज्यिक उधार शामिल हैं; विदेशी मुद्रा भंडार में चांदी और कच्चा तेल शामिल हैं',
      },
      C: {
        en: 'Current Account records trade in Merchandise Goods (Visible trade) and Invisibles (Services, Investment Income, and Remittances/Unilateral Transfers); Capital Account records cross-border asset/liability flows (FDI, FPI, External Commercial Borrowings, NRI Deposits); and India’s 4 Forex Reserve components are: (1) Foreign Currency Assets (FCAs — largest share), (2) Gold Reserves, (3) Special Drawing Rights (SDRs), and (4) Reserve Tranche Position (RTP) in the IMF',
        pa: 'ਚਾਲੂ ਖਾਤਾ (Current Account) ਵਸਤੂਆਂ ਦੇ ਵਪਾਰ (ਦ੍ਰਿਸ਼ ਵਪਾਰ) ਅਤੇ ਅਦ੍ਰਿਸ਼ ਮਦਾਂ (ਸੇਵਾਵਾਂ, ਨਿਵੇਸ਼ ਆਮਦਨ ਅਤੇ ਪ੍ਰਵਾਸੀ ਭਾਰਤੀਆਂ ਵੱਲੋਂ ਭੇਜਿਆ ਪੈਸਾ/Remittances) ਨੂੰ ਦਰਜ ਕਰਦਾ ਹੈ; ਪੂੰਜੀ ਖਾਤਾ (Capital Account) FDI, FPI, ਬਾਹਰੀ ਕਰਜ਼ੇ ਅਤੇ NRI ਜਮ੍ਹਾਂ ਰਾਸ਼ੀਆਂ ਨੂੰ ਦਰਜ ਕਰਦਾ ਹੈ; ਅਤੇ ਵਿਦੇਸ਼ੀ ਮੁਦਰਾ ਭੰਡਾਰ ਦੇ 4 ਹਿੱਸੇ ਹਨ: (1) ਵਿਦੇਸ਼ੀ ਮੁਦਰਾ ਸੰਪਤੀਆਂ (FCAs — ਸਭ ਤੋਂ ਵੱਡਾ ਹਿੱਸਾ), (2) ਸੋਨੇ ਦੇ ਭੰਡਾਰ (Gold), (3) ਵਿਸ਼ੇਸ਼ ਆਹਰਣ ਅਧਿਕਾਰ (SDRs), ਅਤੇ (4) IMF ਵਿੱਚ ਰਿਜ਼ਰਵ ਟ੍ਰਾਂਚ ਪੁਜ਼ੀਸ਼ਨ (RTP)',
        hi: 'चालू खाता (Current Account) वस्तुओं के व्यापार (दृश्य व्यापार) और अदृश्य मदों (सेवाओं, निवेश आय और प्रेषण/Remittances) को दर्ज करता है; पूंजी खाता (Capital Account) FDI, FPI, बाह्य वाणिज्यिक उधार और NRI जमाओं को दर्ज करता है; तथा विदेशी मुद्रा भंडार के 4 घटक हैं: (1) विदेशी मुद्रा परिसंपत्तियां (FCAs — सबसे बड़ा हिस्सा), (2) स्वर्ण भंडार (Gold), (3) विशेष आहरण अधिकार (SDRs), और (4) IMF में रिजर्व ट्रेंच पोजिशन (RTP)',
      },
      D: {
        en: 'Remittances sent by Punjabis abroad are recorded in the Capital Account as Sovereign Debt',
        pa: 'ਵਿਦੇਸ਼ਾਂ ਵਿੱਚ ਵਸਦੇ ਪੰਜਾਬੀਆਂ ਵੱਲੋਂ ਭੇਜਿਆ ਪੈਸਾ ਪੂੰਜੀ ਖਾਤੇ ਵਿੱਚ ਸਰਕਾਰੀ ਕਰਜ਼ੇ ਵਜੋਂ ਦਰਜ ਹੁੰਦਾ ਹੈ',
        hi: 'विदेशों में बसे भारतीयों द्वारा भेजा गया धन पूंजी खाते में संप्रभु ऋण के रूप में दर्ज होता है',
      },
    },
    correct: 'C',
    explanation: {
      en: 'In the Balance of Payments (BoP): (1) The Current Account comprises Visible Trade (export and import of physical goods, i.e., Balance of Trade) and Invisible Trade (Services like IT/software, factor income, and unilateral transfers/remittances sent home by overseas Indians—where India is the world’s #1 remittance recipient); (2) The Capital Account comprises asset/liability flows like Foreign Direct Investment (FDI), Foreign Portfolio Investment (FPI), External Commercial Borrowings (ECBs), and NRI deposits. India’s Foreign Exchange Reserves (managed by RBI) consist of 4 items: Foreign Currency Assets (FCAs, largest component), Gold, Special Drawing Rights (SDRs — "Paper Gold" of IMF), and Reserve Tranche Position (RTP) with the IMF.',
      pa: 'ਭੁਗਤਾਨ ਸੰਤੁਲਨ (BoP) ਦੇ ਚਾਲੂ ਖਾਤੇ (Current Account) ਵਿੱਚ ਵਸਤੂਆਂ ਦੀ ਦਰਾਮਦ-ਬਰਾਮਦ (ਵਪਾਰ ਸੰਤੁਲਨ) ਅਤੇ ਅਦ੍ਰਿਸ਼ ਮਦਾਂ (ਸੇਵਾਵਾਂ, ਨਿਵੇਸ਼ ਆਮਦਨ ਅਤੇ ਵਿਦੇਸ਼ਾਂ ਤੋਂ ਭੇਜੇ ਗਏ Remittances) ਸ਼ਾਮਲ ਹੁੰਦੇ ਹਨ, ਜਦਕਿ ਪੂੰਜੀ ਖਾਤੇ (Capital Account) ਵਿੱਚ FDI, FPI, ਬਾਹਰੀ ਕਰਜ਼ੇ ਅਤੇ NRI ਜਮ੍ਹਾਂ ਰਾਸ਼ੀਆਂ ਸ਼ਾਮਲ ਹੁੰਦੀਆਂ ਹਨ। RBI ਕੋਲ ਮੌਜੂਦ ਵਿਦੇਸ਼ੀ ਮੁਦਰਾ ਭੰਡਾਰ ਦੇ 4 ਹਿੱਸੇ ਹਨ: (1) ਵਿਦੇਸ਼ੀ ਮੁਦਰਾ ਸੰਪਤੀਆਂ (FCAs), (2) ਸੋਨਾ (Gold), (3) ਵਿਸ਼ੇਸ਼ ਆਹਰਣ ਅਧਿਕਾਰ (SDRs), ਅਤੇ (4) IMF ਕੋਲ ਰਿਜ਼ਰਵ ਟ੍ਰਾਂਚ ਪੁਜ਼ੀਸ਼ਨ (RTP)।',
      hi: 'भुगतान संतुलन (BoP) के चालू खाते (Current Account) में वस्तुओं का आयात-निर्यात (व्यापार संतुलन) और अदृश्य मदें (सेवाएं, निवेश आय और विदेशों से भेजे गए प्रेषण/Remittances) शामिल होते हैं, जबकि पूंजी खाते (Capital Account) में FDI, FPI, बाह्य ऋण और NRI जमाएं आती हैं। RBI के पास मौजूद विदेशी मुद्रा भंडार के 4 घटक हैं: (1) विदेशी मुद्रा परिसंपत्तियां (FCAs), (2) स्वर्ण (Gold), (3) विशेष आहरण अधिकार (SDRs), और (4) IMF में रिजर्व ट्रेंच पोजिशन (RTP)।',
    },
    difficulty: 'hard',
  },
  {
    id: 'q-ppsc-clk-eco-16',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'In the history of Indian banking, on which two dates were 14 major commercial banks (with deposits over Rs. 50 crore) and 6 more commercial banks (with deposits over Rs. 200 crore) nationalised respectively, and which committee spearheaded the post-1991 banking sector reforms?',
      pa: 'ਭਾਰਤੀ ਬੈਂਕਿੰਗ ਦੇ ਇਤਿਹਾਸ ਵਿੱਚ, ਕ੍ਰਮਵਾਰ ਕਿਹੜੀਆਂ ਦੋ ਮਿਤੀਆਂ ਨੂੰ 14 ਵੱਡੇ ਵਪਾਰਕ ਬੈਂਕਾਂ (50 ਕਰੋੜ ਰੁਪਏ ਤੋਂ ਵੱਧ ਜਮ੍ਹਾਂ ਰਾਸ਼ੀ ਵਾਲੇ) ਅਤੇ 6 ਹੋਰ ਵਪਾਰਕ ਬੈਂਕਾਂ (200 ਕਰੋੜ ਰੁਪਏ ਤੋਂ ਵੱਧ ਜਮ੍ਹਾਂ ਰਾਸ਼ੀ ਵਾਲੇ) ਦਾ ਰਾਸ਼ਟਰੀਕਰਨ ਕੀਤਾ ਗਿਆ ਸੀ, ਅਤੇ 1991 ਤੋਂ ਬਾਅਦ ਦੇ ਬੈਂਕਿੰਗ ਸੁਧਾਰ ਕਿਸ ਕਮੇਟੀ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ ਹੋਏ?',
      hi: 'भारतीय बैंकिंग के इतिहास में, क्रमशः किन दो तिथियों को 14 बड़े वाणिज्यिक बैंकों (50 करोड़ रुपये से अधिक जमा वाले) और 6 अन्य वाणिज्यिक बैंकों (200 करोड़ रुपये से अधिक जमा वाले) का राष्ट्रीयकरण किया गया था, तथा 1991 के बाद के बैंकिंग सुधार किस समिति की सिफारिश पर हुए?',
    },
    options: {
      A: {
        en: '19 July 1969 (14 banks) and 15 April 1980 (6 banks, including Punjab & Sind Bank); M. Narasimham Committee (1991 and 1998)',
        pa: '19 ਜੁਲਾਈ 1969 (14 ਬੈਂਕ) ਅਤੇ 15 ਅਪ੍ਰੈਲ 1980 (6 ਬੈਂਕ, ਪੰਜਾਬ ਐਂਡ ਸਿੰਧ ਬੈਂਕ ਸਮੇਤ); ਐੱਮ. ਨਰਸਿਮਹਮ ਕਮੇਟੀ (1991 ਅਤੇ 1998)',
        hi: '19 जुलाई 1969 (14 बैंक) और 15 अप्रैल 1980 (6 बैंक, पंजाब एंड सिंध बैंक सहित); एम. नरसिम्हम समिति (1991 और 1998)',
      },
      B: {
        en: '1 January 1949 (14 banks) and 1 July 1955 (6 banks); Raghuram Rajan Committee',
        pa: '1 ਜਨਵਰੀ 1949 (14 ਬੈਂਕ) ਅਤੇ 1 ਜੁਲਾਈ 1955 (6 ਬੈਂਕ); ਰਘੂਰਾਮ ਰਾਜਨ ਕਮੇਟੀ',
        hi: '1 जनवरी 1949 (14 बैंक) और 1 जुलाई 1955 (6 बैंक); रघुराम राजन समिति',
      },
      C: {
        en: '26 January 1950 (14 banks) and 2 October 1975 (6 banks); P.J. Nayak Committee',
        pa: '26 ਜਨਵਰੀ 1950 (14 ਬੈਂਕ) ਅਤੇ 2 ਅਕਤੂਬਰ 1975 (6 ਬੈਂਕ); ਪੀ.ਜੇ. ਨਾਇਕ ਕਮੇਟੀ',
        hi: '26 जनवरी 1950 (14 बैंक) और 2 अक्टूबर 1975 (6 बैंक); पी.जे. नायक समिति',
      },
      D: {
        en: '1 April 1935 (14 banks) and 12 July 1982 (6 banks); Basel Committee',
        pa: '1 ਅਪ੍ਰੈਲ 1935 (14 ਬੈਂਕ) ਅਤੇ 12 ਜੁਲਾਈ 1982 (6 ਬੈਂਕ); ਬੇਸਲ ਕਮੇਟੀ',
        hi: '1 अप्रैल 1935 (14 बैंक) और 12 जुलाई 1982 (6 बैंक); बेसल समिति',
      },
    },
    correct: 'A',
    explanation: {
      en: 'During PM Indira Gandhi’s tenure, the first phase of bank nationalisation took place on 19 July 1969 when 14 major private commercial banks with deposits of Rs. 50 crore or more (including Punjab National Bank, founded at Lahore on 19 May 1894 with Lala Lajpat Rai and Dyal Singh Majithia) were nationalised. The second phase occurred on 15 April 1980 when 6 more banks with deposits of Rs. 200 crore or more (including Punjab & Sind Bank, founded at Amritsar in 1908 by Bhai Vir Singh, Sir Sunder Singh Majithia, and Sardar Tarlochan Singh) were nationalised. Post-1991 banking reforms (SARFAESI Act, prudential norms, CRAR, reduction of SLR/CRR) were guided by the M. Narasimham Committees I (1991) and II (1998).',
      pa: 'ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਇੰਦਰਾ ਗਾਂਧੀ ਦੇ ਕਾਰਜਕਾਲ ਦੌਰਾਨ 19 ਜੁਲਾਈ 1969 ਨੂੰ ਪਹਿਲੇ ਪੜਾਅ ਵਿੱਚ 50 ਕਰੋੜ ਰੁਪਏ ਜਾਂ ਵੱਧ ਜਮ੍ਹਾਂ ਰਾਸ਼ੀ ਵਾਲੇ 14 ਵੱਡੇ ਬੈਂਕਾਂ (ਪੰਜਾਬ ਨੈਸ਼ਨਲ ਬੈਂਕ ਸਮੇਤ, ਜਿਸ ਦੀ ਸਥਾਪਨਾ 1894 ਵਿੱਚ ਲਾਹੌਰ ਵਿਖੇ ਲਾਲਾ ਲਾਜਪਤ ਰਾਏ ਤੇ ਦਿਆਲ ਸਿੰਘ ਮਜੀਠੀਆ ਨੇ ਕੀਤੀ ਸੀ) ਦਾ ਰਾਸ਼ਟਰੀਕਰਨ ਹੋਇਆ। ਦੂਜੇ ਪੜਾਅ ਵਿੱਚ 15 ਅਪ੍ਰੈਲ 1980 ਨੂੰ 200 ਕਰੋੜ ਰੁਪਏ ਤੋਂ ਵੱਧ ਜਮ੍ਹਾਂ ਰਾਸ਼ੀ ਵਾਲੇ 6 ਹੋਰ ਬੈਂਕਾਂ (1908 ਵਿੱਚ ਅੰਮ੍ਰਿਤਸਰ ਵਿਖੇ ਸਥਾਪਿਤ ਪੰਜਾਬ ਐਂਡ ਸਿੰਧ ਬੈਂਕ ਸਮੇਤ) ਦਾ ਰਾਸ਼ਟਰੀਕਰਨ ਹੋਇਆ। 1991 ਤੋਂ ਬਾਅਦ ਦੇ ਬੈਂਕਿੰਗ ਸੁਧਾਰ ਐੱਮ. ਨਰਸਿਮਹਮ ਕਮੇਟੀ (1991 ਅਤੇ 1998) ਦੀਆਂ ਸਿਫ਼ਾਰਸ਼ਾਂ ਤੇ ਹੋਏ।',
      hi: 'प्रधानमंत्री इंदिरा गांधी के कार्यकाल में 19 जुलाई 1969 को प्रथम चरण में 50 करोड़ रुपये या अधिक जमा वाले 14 बड़े बैंकों (पंजाब नेशनल बैंक सहित, जिसकी स्थापना 1894 में लाहौर में लाला लाजपत राय व दयाल सिंह मजीठिया ने की थी) का राष्ट्रीयकरण हुआ। दूसरे चरण में 15 अप्रैल 1980 को 200 करोड़ रुपये से अधिक जमा वाले 6 अन्य बैंकों (1908 में अमृतसर में स्थापित पंजाब एंड सिंध बैंक सहित) का राष्ट्रीयकरण हुआ। 1991 के बाद के बैंकिंग सुधार एम. नरसिम्हम समिति (1991 और 1998) की सिफारिशों पर आधारित थे।',
    },
    difficulty: 'medium',
  },
  {
    id: 'q-ppsc-clk-eco-17',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'In which year did India launch the New Economic Policy (LPG Reforms — Liberalisation, Privatisation, and Globalisation) in response to a severe Balance of Payments crisis, and who served as the Prime Minister and Union Finance Minister at that time?',
      pa: 'ਭੁਗਤਾਨ ਸੰਤੁਲਨ (BoP) ਦੇ ਗੰਭੀਰ ਸੰਕਟ ਦੇ ਹੱਲ ਵਜੋਂ ਭਾਰਤ ਨੇ ਕਿਸ ਸਾਲ ਨਵੀਂ ਆਰਥਿਕ ਨੀਤੀ (LPG ਸੁਧਾਰ — ਉਦਾਰੀਕਰਨ, ਨਿੱਜੀਕਰਨ ਅਤੇ ਵਿਸ਼ਵੀਕਰਨ) ਲਾਗੂ ਕੀਤੀ, ਅਤੇ ਉਸ ਸਮੇਂ ਭਾਰਤ ਦੇ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਅਤੇ ਕੇਂਦਰੀ ਵਿੱਤ ਮੰਤਰੀ ਕੌਣ ਸਨ?',
      hi: 'भुगतान संतुलन (BoP) के गंभीर संकट के समाधान हेतु भारत ने किस वर्ष नई आर्थिक नीति (LPG सुधार — उदारीकरण, निजीकरण और वैश्वीकरण) लागू की, और उस समय भारत के प्रधानमंत्री तथा केंद्रीय वित्त मंत्री कौन थे?',
    },
    options: {
      A: {
        en: '1985; Prime Minister Rajiv Gandhi and Finance Minister V.P. Singh',
        pa: '1985; ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਰਾਜੀਵ ਗਾਂਧੀ ਅਤੇ ਵਿੱਤ ਮੰਤਰੀ ਵੀ.ਪੀ. ਸਿੰਘ',
        hi: '1985; प्रधानमंत्री राजीव गांधी और वित्त मंत्री वी.पी. सिंह',
      },
      B: {
        en: 'July 1991 (New Industrial Policy announced on 24 July 1991); Prime Minister P.V. Narasimha Rao and Finance Minister Dr. Manmohan Singh',
        pa: 'ਜੁਲਾਈ 1991 (24 ਜੁਲਾਈ 1991 ਨੂੰ ਨਵੀਂ ਉਦਯੋਗਿਕ ਨੀਤੀ ਦਾ ਐਲਾਨ); ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਪੀ.ਵੀ. ਨਰਸਿਮਹਾ ਰਾਓ ਅਤੇ ਵਿੱਤ ਮੰਤਰੀ ਡਾ. ਮਨਮੋਹਨ ਸਿੰਘ',
        hi: 'जुलाई 1991 (24 जुलाई 1991 को नई औद्योगिक नीति की घोषणा); प्रधानमंत्री पी.वी. नरसिम्हा राव और वित्त मंत्री डॉ. मनमोहन सिंह',
      },
      C: {
        en: '1996; Prime Minister H.D. Deve Gowda and Finance Minister P. Chidambaram',
        pa: '1996; ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਐੱਚ.ਡੀ. ਦੇਵੇਗੌੜਾ ਅਤੇ ਵਿੱਤ ਮੰਤਰੀ ਪੀ. ਚਿਦੰਬਰਮ',
        hi: '1996; प्रधानमंत्री एच.डी. देवेगौड़ा और वित्त मंत्री पी. चिदंबरम',
      },
      D: {
        en: '1999; Prime Minister Atal Bihari Vajpayee and Finance Minister Yashwant Sinha',
        pa: '1999; ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਅਟਲ ਬਿਹਾਰੀ ਵਾਜਪਾਈ ਅਤੇ ਵਿੱਤ ਮੰਤਰੀ ਯਸ਼ਵੰਤ ਸਿਨਹਾ',
        hi: '1999; प्रधानमंत्री अटल बिहारी वाजपेयी और वित्त मंत्री यशवंत सिन्हा',
      },
    },
    correct: 'B',
    explanation: {
      en: 'In July 1991, facing a severe Balance of Payments crisis (when forex reserves fell to barely two weeks of import cover), Prime Minister P.V. Narasimha Rao and Finance Minister Dr. Manmohan Singh launched the landmark LPG (Liberalisation, Privatisation, Globalisation) economic reforms and the New Industrial Policy on 24 July 1991—dismantling the "License-Permit-Quota Raj", devaluing the Rupee, slashing import tariffs, and opening the economy to foreign investment.',
      pa: 'ਜੁਲਾਈ 1991 ਵਿੱਚ ਭੁਗਤਾਨ ਸੰਤੁਲਨ ਦੇ ਗੰਭੀਰ ਸੰਕਟ ਦੌਰਾਨ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਪੀ.ਵੀ. ਨਰਸਿਮਹਾ ਰਾਓ ਅਤੇ ਵਿੱਤ ਮੰਤਰੀ ਡਾ. ਮਨਮੋਹਨ ਸਿੰਘ ਨੇ ਇਤਿਹਾਸਕ LPG (ਉਦਾਰੀਕਰਨ, ਨਿੱਜੀਕਰਨ ਅਤੇ ਵਿਸ਼ਵੀਕਰਨ) ਆਰਥਿਕ ਸੁਧਾਰ ਅਤੇ 24 ਜੁਲਾਈ 1991 ਦੀ ਨਵੀਂ ਉਦਯੋਗਿਕ ਨੀਤੀ ਲਾਗੂ ਕੀਤੀ, ਜਿਸ ਨਾਲ "ਲਾਈਸੈਂਸ-ਕੋਟਾ ਰਾਜ" ਦਾ ਖਾਤਮਾ ਹੋਇਆ।',
      hi: 'जुलाई 1991 में भुगतान संतुलन के गंभीर संकट के दौरान प्रधानमंत्री पी.वी. नरसिम्हा राव और वित्त मंत्री डॉ. मनमोहन सिंह ने ऐतिहासिक LPG (उदारीकरण, निजीकरण और वैश्वीकरण) आर्थिक सुधार और 24 जुलाई 1991 की नई औद्योगिक नीति लागू की, जिससे "लाइसेंस-कोटा राज" की समाप्ति हुई।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-eco-18',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'In Punjab’s Gross State Value Added (GSVA), which sector contributes the largest share today, and why does Punjab have a uniquely high share of the Primary (Agriculture & Allied) sector compared to the national average?',
      pa: 'ਪੰਜਾਬ ਦੇ ਕੁੱਲ ਰਾਜ ਮੁੱਲ ਵਾਧੇ (GSVA) ਵਿੱਚ ਵਰਤਮਾਨ ਸਮੇਂ ਕਿਸ ਖੇਤਰ ਦਾ ਯੋਗਦਾਨ ਸਭ ਤੋਂ ਵੱਧ ਹੈ, ਅਤੇ ਰਾਸ਼ਟਰੀ ਔਸਤ ਦੇ ਮੁਕਾਬਲੇ ਪੰਜਾਬ ਦੀ ਆਰਥਿਕਤਾ ਵਿੱਚ ਪ੍ਰਾਇਮਰੀ (ਖੇਤੀਬਾੜੀ ਅਤੇ ਸਹਾਇਕ) ਖੇਤਰ ਦਾ ਹਿੱਸਾ ਕਾਫ਼ੀ ਉੱਚਾ ਕਿਉਂ ਹੈ?',
      hi: 'पंजाब के सकल राज्य मूल्य वर्धन (GSVA) में वर्तमान में किस क्षेत्र का योगदान सर्वाधिक है, और राष्ट्रीय औसत की तुलना में पंजाब की अर्थव्यवस्था में प्राथमिक (कृषि एवं संबद्ध) क्षेत्र का हिस्सा उल्लेखनीय रूप से अधिक क्यों है?',
    },
    options: {
      A: {
        en: 'Secondary (Mining) Sector contributes 70%; because Punjab has India’s largest coal and iron ore reserves',
        pa: 'ਸੈਕੰਡਰੀ (ਖਣਨ) ਖੇਤਰ ਦਾ ਯੋਗਦਾਨ 70% ਹੈ; ਕਿਉਂਕਿ ਪੰਜਾਬ ਕੋਲ ਕੋਲੇ ਅਤੇ ਲੋਹੇ ਦੇ ਸਭ ਤੋਂ ਵੱਡੇ ਭੰਡਾਰ ਹਨ',
        hi: 'द्वितीयक (खनन) क्षेत्र का योगदान 70% है; क्योंकि पंजाब के पास कोयले और लौह अयस्क के सबसे बड़े भंडार हैं',
      },
      B: {
        en: 'Primary Sector contributes 85%; Tertiary Sector contributes only 5%',
        pa: 'ਪ੍ਰਾਇਮਰੀ ਖੇਤਰ ਦਾ ਯੋਗਦਾਨ 85% ਹੈ; ਸੇਵਾ ਖੇਤਰ ਦਾ ਸਿਰਫ਼ 5% ਹੈ',
        hi: 'प्राथमिक क्षेत्र का योगदान 85% है; सेवा क्षेत्र का केवल 5% है',
      },
      C: {
        en: 'Tertiary (Services) Sector contributes the largest share (~46–48% of Punjab’s GSVA), followed by the Primary (Agriculture & Livestock) Sector (~28–30%, vs ~18% nationally) and the Secondary (Manufacturing/Industry) Sector (~23–25%); Punjab’s high Primary share is driven by ~82% cropping intensity/net sown area, ~99.8% irrigation coverage, and top per-capita milk availability',
        pa: 'ਤੀਜਾ (ਸੇਵਾਵਾਂ / Tertiary) ਖੇਤਰ ਪੰਜਾਬ ਦੇ GSVA ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ (~46–48%) ਯੋਗਦਾਨ ਪਾਉਂਦਾ ਹੈ, ਜਿਸ ਤੋਂ ਬਾਅਦ ਪ੍ਰਾਇਮਰੀ (ਖੇਤੀਬਾੜੀ ਅਤੇ ਪਸ਼ੂ-ਪਾਲਣ) ਖੇਤਰ (~28–30%, ਜੋ ਰਾਸ਼ਟਰੀ ਔਸਤ ~18% ਨਾਲੋਂ ਕਾਫ਼ੀ ਵੱਧ ਹੈ) ਅਤੇ ਸੈਕੰਡਰੀ (ਉਦਯੋਗ) ਖੇਤਰ (~23–25%) ਆਉਂਦੇ ਹਨ; ਪੰਜਾਬ ਦੇ ਕੁੱਲ ਰਕਬੇ ਦਾ ~82% ਹਿੱਸਾ ਖੇਤੀ ਹੇਠ ਹੋਣ, ~99.8% ਸਿੰਚਾਈ ਸਹੂਲਤ ਅਤੇ ਦੁੱਧ ਉਤਪਾਦਨ (ਪਸ਼ੂ-ਪਾਲਣ) ਕਾਰਨ ਪ੍ਰਾਇਮਰੀ ਖੇਤਰ ਮਜ਼ਬੂਤ ਹੈ',
        hi: 'तृतीयक (सेवा / Tertiary) क्षेत्र पंजाब के GSVA में सर्वाधिक (~46–48%) योगदान देता है, जिसके बाद प्राथमिक (कृषि एवं पशुपालन) क्षेत्र (~28–30%, जो राष्ट्रीय औसत ~18% से काफी अधिक है) और द्वितीयक (उद्योग) क्षेत्र (~23–25%) आते हैं; पंजाब के कुल क्षेत्रफल का ~82% शुद्ध बोया गया क्षेत्र होने, ~99.8% सिंचाई कवरेज और उच्च प्रति व्यक्ति दुग्ध उपलब्धता के कारण प्राथमिक क्षेत्र सुदृढ़ है',
      },
      D: {
        en: 'Secondary Sector contributes 60% due to marine shipping ports in Punjab',
        pa: 'ਪੰਜਾਬ ਵਿੱਚ ਸਮੁੰਦਰੀ ਬੰਦਰਗਾਹਾਂ ਕਾਰਨ ਸੈਕੰਡਰੀ ਖੇਤਰ ਦਾ ਯੋਗਦਾਨ 60% ਹੈ',
        hi: 'पंजाब में समुद्री बंदरगाहों के कारण द्वितीयक क्षेत्र का योगदान 60% है',
      },
    },
    correct: 'C',
    explanation: {
      en: 'According to Punjab Economic Survey data, the Tertiary (Services) sector is the largest contributor to Punjab’s GSVA (~46–48%), followed by the Primary (Agriculture, Livestock & Allied) sector (~28–30%, significantly above the all-India average of ~18%) and the Secondary (Industrial) sector (~23–25%). Despite having only 1.54% of India’s geographical area, Punjab has ~99.8% irrigated cropped area, ~190% cropping intensity, contributes ~20–25% of rice and ~35–45% of wheat to the Central Pool (FCI), and ranks at the top in per capita milk availability.',
      pa: 'ਪੰਜਾਬ ਆਰਥਿਕ ਸਰਵੇਖਣ ਅਨੁਸਾਰ, ਪੰਜਾਬ ਦੇ GSVA ਵਿੱਚ ਸੇਵਾਵਾਂ (Tertiary) ਖੇਤਰ ਦਾ ਹਿੱਸਾ ਸਭ ਤੋਂ ਵੱਧ (~46-48%) ਹੈ, ਜਿਸ ਤੋਂ ਬਾਅਦ ਪ੍ਰਾਇਮਰੀ (ਖੇਤੀਬਾੜੀ ਅਤੇ ਪਸ਼ੂ-ਪਾਲਣ) ਖੇਤਰ (~28-30%, ਰਾਸ਼ਟਰੀ ਔਸਤ ~18% ਤੋਂ ਕਾਫ਼ੀ ਵੱਧ) ਅਤੇ ਸੈਕੰਡਰੀ (ਉਦਯੋਗਿਕ) ਖੇਤਰ (~23-25%) ਆਉਂਦੇ ਹਨ। ਭਾਰਤ ਦੇ ਸਿਰਫ਼ 1.54% ਰਕਬੇ ਦੇ ਬਾਵਜੂਦ ਪੰਜਾਬ ਕੇਂਦਰੀ ਅੰਨ ਭੰਡਾਰ (FCI) ਵਿੱਚ ਕਣਕ ਅਤੇ ਚੌਲਾਂ ਦਾ ਪ੍ਰਮੁੱਖ ਯੋਗਦਾਨ ਪਾਉਂਦਾ ਹੈ।',
      hi: 'पंजाब आर्थिक सर्वेक्षण के अनुसार, पंजाब के GSVA में तृतीयक (सेवा) क्षेत्र का हिस्सा सर्वाधिक (~46-48%) है, जिसके बाद प्राथमिक (कृषि एवं पशुपालन) क्षेत्र (~28-30%, राष्ट्रीय औसत ~18% से काफी अधिक) और द्वितीयक (औद्योगिक) क्षेत्र (~23-25%) आते हैं। भारत के मात्र 1.54% क्षेत्रफल के बावजूद पंजाब केंद्रीय पूल (FCI) में गेहूं और चावल का प्रमुख योगदानकर्ता है।',
    },
    difficulty: 'hard',
  },
  {
    id: 'q-ppsc-clk-eco-19',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Which of the following correctly matches the famous industrial cities of Punjab with their signature manufacturing specializations?',
      pa: 'ਪੰਜਾਬ ਦੇ ਪ੍ਰਸਿੱਧ ਉਦਯੋਗਿਕ ਸ਼ਹਿਰਾਂ ਅਤੇ ਉਹਨਾਂ ਦੇ ਮੁੱਖ ਨਿਰਮਾਣ ਉਦਯੋਗਾਂ ਦਾ ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਮਿਲਾਨ ਬਿਲਕੁਲ ਸਹੀ ਹੈ?',
      hi: 'पंजाब के प्रसिद्ध औद्योगिक शहरों और उनके प्रमुख विनिर्माण उद्योगों का निम्नलिखित में से कौन-सा मिलान पूर्णतः सही है?',
    },
    options: {
      A: {
        en: 'Ludhiana: Ship-building; Jalandhar: Tea Processing; Mandi Gobindgarh: Diamond Cutting',
        pa: 'ਲੁਧਿਆਣਾ: ਜਹਾਜ਼ ਨਿਰਮਾਣ; ਜਲੰਧਰ: ਚਾਹ ਪ੍ਰੋਸੈਸਿੰਗ; ਮੰਡੀ ਗੋਬਿੰਦਗੜ੍ਹ: ਹੀਰਾ ਤਰਾਸ਼ਣਾ',
        hi: 'लुधियाना: पोत निर्माण; जालंधर: चाय प्रसंस्करण; मंडी गोबिंदगढ़: हीरा तराशना',
      },
      B: {
        en: 'Amritsar: Rail Coach Factory; Kapurthala: Oil Refinery; Bathinda: Sports Goods',
        pa: 'ਅੰਮ੍ਰਿਤਸਰ: ਰੇਲ ਕੋਚ ਫੈਕਟਰੀ; ਕਪੂਰਥਲਾ: ਤੇਲ ਰਿਫਾਇਨਰੀ; ਬਠਿੰਡਾ: ਖੇਡਾਂ ਦਾ ਸਮਾਨ',
        hi: 'अमृतसर: रेल कोच फैक्ट्री; कपूरथला: तेल रिफाइनरी; बठिंडा: खेल का सामान',
      },
      C: {
        en: 'Nangal: Silk Weaving; Dhariwal: Petrochemicals; Mohali: Jute Mills',
        pa: 'ਨੰਗਲ: ਰੇਸ਼ਮ ਬੁਣਾਈ; ਧਾਰੀਵਾਲ: ਪੈਟਰੋਕੈਮੀਕਲ; ਮੋਹਾਲੀ: ਪਟਸਨ ਮਿੱਲਾਂ',
        hi: 'नांगल: रेशम बुनाई; धारीवाल: पेट्रोकेमिकल; मोहाली: जूट मिलें',
      },
      D: {
        en: 'Ludhiana ("Manchester of India/Punjab"): Hosiery, Knitwear & Bicycle/Cycle Parts; Jalandhar: Sports Goods & Leather Products; Mandi Gobindgarh (Fatehgarh Sahib — "Steel Town of Punjab"): Iron & Steel Rolling Mills; Kapurthala: Rail Coach Factory (RCF, 1986); Bathinda (Phulokhari): Guru Gobind Singh Oil Refinery (HMEL) & NFL Fertilizers; Dhariwal (Gurdaspur): Woollen Textiles',
        pa: 'ਲੁਧਿਆਣਾ ("ਪੰਜਾਬ/ਭਾਰਤ ਦਾ ਮਾਨਚੈਸਟਰ"): ਹੌਜ਼ਰੀ, ਉੱਨੀ ਕੱਪੜੇ ਅਤੇ ਸਾਈਕਲ ਉਦਯੋਗ; ਜਲੰਧਰ: ਖੇਡਾਂ ਦਾ ਸਮਾਨ ਅਤੇ ਚਮੜਾ ਉਦਯੋਗ; ਮੰਡੀ ਗੋਬਿੰਦਗੜ੍ਹ (ਫ਼ਤਹਿਗੜ੍ਹ ਸਾਹਿਬ — "ਪੰਜਾਬ ਦੀ ਸਟੀਲ ਨਗਰੀ"): ਲੋਹਾ ਅਤੇ ਸਟੀਲ ਰੋਲਿੰਗ ਮਿੱਲਾਂ; ਕਪੂਰਥਲਾ: ਰੇਲ ਕੋਚ ਫੈਕਟਰੀ (RCF, 1986); ਬਠਿੰਡਾ: ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਤੇਲ ਰਿਫਾਇਨਰੀ (HMEL) ਅਤੇ ਖਾਦ ਕਾਰਖਾਨਾ (NFL); ਧਾਰੀਵਾਲ (ਗੁਰਦਾਸਪੁਰ): ਉੱਨੀ ਕੱਪੜਾ ਮਿੱਲਾਂ',
        hi: 'लुधियाना ("पंजाब/भारत का मैनचेस्टर"): होजरी, निटवियर और साइकिल उद्योग; जालंधर: खेल का सामान और चमड़ा उद्योग; मंडी गोबिंदगढ़ (फतेहगढ़ साहिब — "पंजाब की इस्पात नगरी"): लोहा एवं स्टील रोलिंग मिलें; कपूरथला: रेल कोच फैक्ट्री (RCF, 1986); बठिंडा: गुरु गोबिंद सिंह तेल रिफाइनरी (HMEL) और उर्वरक कारखाना (NFL); धारीवाल (गुरदासपुर): ऊनी वस्त्र उद्योग',
      },
    },
    correct: 'D',
    explanation: {
      en: 'Key industrial hubs of Punjab frequently asked in PPSC/PSSSB exams: Ludhiana is the Hosiery, Knitwear, Bicycle, and Sewing Machine hub ("Manchester of Punjab"); Jalandhar is famous for Sports Goods, Hand Tools, and Leather; Mandi Gobindgarh (in Fatehgarh Sahib district) is the "Steel Town of Punjab" (secondary steel rolling mills); Kapurthala houses the Rail Coach Factory (RCF, established in 1986); Patiala houses the Diesel Loco Modernisation Works (DMW); Nangal and Bathinda house National Fertilizers Limited (NFL) plants; Bathinda (Phulokhari) houses the Guru Gobind Singh Refinery; Dhariwal (Gurdaspur) is famous for the New Egerton Woollen Mills; and SAS Nagar (Mohali) is the IT, Semiconductor (SCL), and Biotech hub.',
      pa: 'ਪੰਜਾਬ ਦੇ ਪ੍ਰਮੁੱਖ ਉਦਯੋਗਿਕ ਕੇਂਦਰ: ਲੁਧਿਆਣਾ — ਹੌਜ਼ਰੀ, ਸਾਈਕਲ ਅਤੇ ਸਿਲਾਈ ਮਸ਼ੀਨ ਉਦਯੋਗ ("ਪੰਜਾਬ ਦਾ ਮਾਨਚੈਸਟਰ"); ਜਲੰਧਰ — ਖੇਡਾਂ ਦਾ ਸਮਾਨ, ਹੈਂਡ ਟੂਲਜ਼ ਅਤੇ ਚਮੜਾ ਉਦਯੋਗ; ਮੰਡੀ ਗੋਬਿੰਦਗੜ੍ਹ (ਫ਼ਤਹਿਗੜ੍ਹ ਸਾਹਿਬ) — "ਪੰਜਾਬ ਦੀ ਸਟੀਲ ਨਗਰੀ"; ਕਪੂਰਥਲਾ — ਰੇਲ ਕੋਚ ਫੈਕਟਰੀ (RCF, 1986); ਪਟਿਆਲਾ — ਡੀਜ਼ਲ ਲੋਕੋ ਮਾਡਰਨਾਈਜ਼ੇਸ਼ਨ ਵਰਕਸ (DMW); ਨੰਗਲ ਅਤੇ ਬਠਿੰਡਾ — ਨੈਸ਼ਨਲ ਫਰਟੀਲਾਈਜ਼ਰਜ਼ ਲਿਮਟਿਡ (NFL); ਬਠਿੰਡਾ (ਫੁੱਲੋਖਾਰੀ) — ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਤੇਲ ਰਿਫਾਇਨਰੀ; ਧਾਰੀਵਾਲ (ਗੁਰਦਾਸਪੁਰ) — ਉੱਨੀ ਕੱਪੜਾ ਮਿੱਲ; ਅਤੇ ਮੋਹਾਲੀ — ਆਈ.ਟੀ. (IT) ਅਤੇ ਸੈਮੀਕੰਡਕਟਰ ਹੱਬ।',
      hi: 'पंजाब के प्रमुख औद्योगिक केंद्र: लुधियाना — होजरी, साइकिल और सिलाई मशीन उद्योग ("पंजाब का मैनचेस्टर"); जालंधर — खेल का सामान, हैंड टूल्स और चमड़ा उद्योग; मंडी गोबिंदगढ़ (फतेहगढ़ साहिब) — "पंजाब की इस्पात नगरी"; कपूरथला — रेल कोच फैक्ट्री (RCF, 1986); पटियाला — डीजल लोको आधुनिकीकरण कारखाना (DMW); नांगल और बठिंडा — नेशनल फर्टिलाइजर्स लिमिटेड (NFL); बठिंडा (फुलोखारी) — गुरु गोबिंद सिंह तेल रिफाइनरी; धारीवाल (गुरदासपुर) — ऊनी वस्त्र मिल; और मोहाली — आईटी एवं सेमीकंडक्टर हब।',
    },
    difficulty: 'easy',
  },
  {
    id: 'q-ppsc-clk-eco-20',
    topicId: 'indian-economy',
    ...PPSC_CLERK_COMMON_META,
    question: {
      en: 'Match the following Agricultural Revolutions in India with the commodities they represent:',
      pa: 'ਭਾਰਤ ਦੀਆਂ ਹੇਠ ਲਿਖੀਆਂ ਖੇਤੀਬਾੜੀ ਕ੍ਰਾਂਤੀਆਂ ਦਾ ਉਹਨਾਂ ਨਾਲ ਸਬੰਧਤ ਉਤਪਾਦਾਂ ਨਾਲ ਸਹੀ ਮਿਲਾਨ ਕਰੋ:',
      hi: 'भारत की निम्नलिखित कृषि क्रांतियों का उनसे संबंधित उत्पादों के साथ सही मिलान करें:',
    },
    options: {
      A: {
        en: 'Yellow Revolution: Milk; White Revolution: Oilseeds; Blue Revolution: Jute; Golden Fibre Revolution: Fish',
        pa: 'ਪੀਲੀ ਕ੍ਰਾਂਤੀ: ਦੁੱਧ; ਚਿੱਟੀ ਕ੍ਰਾਂਤੀ: ਤੇਲ ਬੀਜ; ਨੀਲੀ ਕ੍ਰਾਂਤੀ: ਪਟਸਨ; ਸੁਨਹਿਰੀ ਰੇਸ਼ਾ ਕ੍ਰਾਂਤੀ: ਮੱਛੀ',
        hi: 'पीली क्रांति: दूध; श्वेत क्रांति: तिलहन; नीली क्रांति: जूट; स्वर्ण रेशा क्रांति: मत्स्य',
      },
      B: {
        en: 'Silver Revolution: Cotton; Silver Fibre Revolution: Eggs; Round Revolution: Tomatoes',
        pa: 'ਸਿਲਵਰ ਕ੍ਰਾਂਤੀ: ਕਪਾਹ; ਸਿਲਵਰ ਫਾਈਬਰ ਕ੍ਰਾਂਤੀ: ਅੰਡੇ; ਗੋਲ ਕ੍ਰਾਂਤੀ: ਟਮਾਟਰ',
        hi: 'रजत क्रांति: कपास; रजत रेशा क्रांति: अंडा; गोल क्रांति: टमाटर',
      },
      C: {
        en: 'Yellow Revolution: Oilseeds (Mustard/Sunflower); White Revolution (Operation Flood): Milk & Dairy; Blue Revolution: Fish & Aquaculture; Golden Revolution: Horticulture, Honey & Fruits; Golden Fibre Revolution: Jute; Silver Fibre Revolution: Cotton; Silver Revolution: Eggs & Poultry; Pink Revolution: Onion, Prawn & Pharmaceuticals; Round Revolution: Potato',
        pa: 'ਪੀਲੀ ਕ੍ਰਾਂਤੀ: ਤੇਲ ਬੀਜ (ਸਰ੍ਹੋਂ/ਸੂਰਜਮੁਖੀ); ਚਿੱਟੀ ਕ੍ਰਾਂਤੀ (ਓਪਰੇਸ਼ਨ ਫਲੱਡ): ਦੁੱਧ ਅਤੇ ਡੇਅਰੀ; ਨੀਲੀ ਕ੍ਰਾਂਤੀ: ਮੱਛੀ ਪਾਲਣ; ਸੁਨਹਿਰੀ ਕ੍ਰਾਂਤੀ: ਬਾਗਬਾਨੀ, ਸ਼ਹਿਦ ਅਤੇ ਫਲ; ਗੋਲਡਨ ਫਾਈਬਰ ਕ੍ਰਾਂਤੀ: ਪਟਸਨ (Jute); ਸਿਲਵਰ ਫਾਈਬਰ ਕ੍ਰਾਂਤੀ: ਕਪਾਹ (Cotton); ਸਿਲਵਰ ਕ੍ਰਾਂਤੀ: ਅੰਡੇ ਅਤੇ ਪੋਲਟਰੀ; ਗੁਲਾਬੀ ਕ੍ਰਾਂਤੀ: ਪਿਆਜ਼ ਅਤੇ ਝੀਂਗਾ ਮੱਛੀ; ਗੋਲ ਕ੍ਰਾਂਤੀ: ਆਲੂ',
        hi: 'पीली क्रांति: तिलहन (सरसों/सूरजमुखी); श्वेत क्रांति (ऑपरेशन फ्लड): दुग्ध एवं डेयरी; नीली क्रांति: मत्स्य पालन; स्वर्ण क्रांति: बागवानी, शहद एवं फल; स्वर्ण रेशा (Golden Fibre) क्रांति: जूट (पटसन); रजत रेशा (Silver Fibre) क्रांति: कपास; रजत क्रांति: अंडा एवं कुक्कुट; गुलाबी क्रांति: प्याज एवं झींगा; गोल क्रांति: आलू',
      },
      D: {
        en: 'Grey Revolution: Meat; Red Revolution: Fertilizers; Black Revolution: Milk',
        pa: 'ਸਲੇਟੀ ਕ੍ਰਾਂਤੀ: ਮੀਟ; ਲਾਲ ਕ੍ਰਾਂਤੀ: ਖਾਦਾਂ; ਕਾਲੀ ਕ੍ਰਾਂਤੀ: ਦੁੱਧ',
        hi: 'भूरी/धूसर क्रांति: मांस; लाल क्रांति: उर्वरक; काली क्रांति: दूध',
      },
    },
    correct: 'C',
    explanation: {
      en: 'Comprehensive list of India’s Agricultural Revolutions: Green = Foodgrains (Wheat & Rice); White (Operation Flood, Dr. Verghese Kurien) = Milk/Dairy; Yellow (Sam Pitroda) = Edible Oilseeds; Blue (Dr. Hiralal Chaudhuri & Dr. Arun Krishnan) = Fish/Aquaculture; Golden (Nirpakh Tutej) = Horticulture, Fruits & Honey; Golden Fibre = Jute; Silver Fibre = Cotton; Silver (Indira Gandhi) = Eggs & Poultry; Pink (Durgesh Patel) = Onion, Prawn & Pharmaceuticals; Red (Vishal Tewari) = Meat & Tomato; Round = Potato; Grey = Fertilizers; and Black = Petroleum/Crude Oil.',
      pa: 'ਭਾਰਤ ਦੀਆਂ ਪ੍ਰਮੁੱਖ ਖੇਤੀਬਾੜੀ ਕ੍ਰਾਂਤੀਆਂ: ਹਰੀ ਕ੍ਰਾਂਤੀ = ਅਨਾਜ (ਕਣਕ ਅਤੇ ਝੋਨਾ); ਚਿੱਟੀ ਕ੍ਰਾਂਤੀ (ਡਾ. ਵਰਗੀਜ਼ ਕੁਰੀਅਨ) = ਦੁੱਧ; ਪੀਲੀ ਕ੍ਰਾਂਤੀ = ਤੇਲ ਬੀਜ; ਨੀਲੀ ਕ੍ਰਾਂਤੀ = ਮੱਛੀ ਪਾਲਣ; ਸੁਨਹਿਰੀ ਕ੍ਰਾਂਤੀ = ਬਾਗਬਾਨੀ, ਫਲ ਅਤੇ ਸ਼ਹਿਦ; ਗੋਲਡਨ ਫਾਈਬਰ = ਪਟਸਨ (Jute); ਸਿਲਵਰ ਫਾਈਬਰ = ਕਪਾਹ (Cotton); ਸਿਲਵਰ ਕ੍ਰਾਂਤੀ = ਅੰਡੇ; ਗੁਲਾਬੀ ਕ੍ਰਾਂਤੀ = ਪਿਆਜ਼ ਅਤੇ ਝੀਂਗਾ; ਲਾਲ ਕ੍ਰਾਂਤੀ = ਮੀਟ ਅਤੇ ਟਮਾਟਰ; ਗੋਲ ਕ੍ਰਾਂਤੀ = ਆਲੂ; ਅਤੇ ਸਲੇਟੀ (Grey) ਕ੍ਰਾਂਤੀ = ਖਾਦਾਂ (Fertilizers)।',
      hi: 'भारत की प्रमुख कृषि क्रांतियां: हरित क्रांति = खाद्यान्न (गेहूं व चावल); श्वेत क्रांति (डॉ. वर्गीज कुरियन) = दुग्ध; पीली क्रांति = तिलहन; नीली क्रांति = मत्स्य पालन; स्वर्ण क्रांति = बागवानी, फल व शहद; स्वर्ण रेशा = जूट; रजत रेशा = कपास; रजत क्रांति = अंडा; गुलाबी क्रांति = प्याज व झींगा; लाल क्रांति = मांस व टमाटर; गोल क्रांति = आलू; और धूसर (Grey) क्रांति = उर्वरक।',
    },
    difficulty: 'easy',
  },
];
