// ============================================================
// ExamSathi - Catalog Expansion for Haryana, Delhi, Defence,
// and Advanced State Recruitment Exams
// Authoritative Patterns compiled from BSEH, HSSC, SSC, RPSC, RSMSSB, and Indian Armed Forces
// ============================================================

import type { Exam } from './exams';

// ---------------------------------------------------------------------------
// 1. HARYANA EXAMINATIONS (BSEH & HSSC)
// ---------------------------------------------------------------------------
export const HARYANA_EXAMS: Exam[] = [
  {
    id: 'haryana-htet',
    state: 'haryana',
    // NOTE: This is a combined legacy entry covering all HTET levels (PRT/TGT/PGT).
    // Learners should prefer the level-specific entries: htet-l1 (PRT) and htet-l2 (TGT)
    // which are defined in exams.ts. This combined entry is retained for legacy question
    // pool compatibility and the mock engine, but is not a separate official exam variant.
    name: 'HTET (Haryana Teacher Eligibility Test)',
    nameHindi: 'हरियाणा शिक्षक पात्रता परीक्षा (HTET)',
    namePunjabi: 'ਹਰਿਆਣਾ ਅਧਿਆਪਕ ਯੋਗਤਾ ਪ੍ਰੀਖਿਆ',
    body: 'Board of School Education Haryana (BSEH), Bhiwani',
    level: 'PRT (L1), TGT (L2), PGT (L3)',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes (150 Mins)',
    negativeMarking: false,
    officialWebsite: 'https://bseh.org.in',
    emoji: '📝',
    color: '#059669',
    syllabusStatus: 'provisional-archive' as const,
    sections: [
      { name: 'Child Development & Pedagogy', nameHindi: 'बाल विकास व शिक्षाशास्त्र', marks: 30, questions: 30 },
      { name: 'Language I (Hindi)', nameHindi: 'अनिवार्य सामान्य हिंदी', marks: 15, questions: 15 },
      { name: 'Language II (English)', nameHindi: 'सामान्य अंग्रेजी', marks: 15, questions: 15 },
      { name: 'Quantitative Aptitude & Reasoning', nameHindi: 'गणित व मानसिक योग्यता', marks: 20, questions: 20 },
      { name: 'Haryana General Knowledge & Current Affairs', nameHindi: 'हरियाणा सामान्य ज्ञान व समसामयिकी', marks: 10, questions: 10 },
      { name: 'Subject Domain Specialization', nameHindi: 'विषय डोमेन विशेषज्ञता', marks: 60, questions: 60 },
    ],
    subjects: [
      {
        id: 'haryana-htet-core',
        name: 'HTET Core & Haryana GK',
        nameHindi: 'HTET कोर व हरियाणा सामान्य ज्ञान',
        emoji: '🌾',
        chapters: [
          {
            id: 'haryana-gk-history',
            name: 'Haryana History, Geography & Culture',
            nameHindi: 'हरियाणा का इतिहास, भूगोल व संस्कृति',
            topics: [
              {
                id: 'haryana-history-rakhigarhi',
                name: 'Ancient Haryana, Rakhigarhi & Mahabharata Era',
                nameHindi: 'प्राचीन हरियाणा, राखीगढ़ी व महाभारत काल',
                subtopics: [
                  'Indus Valley sites in Haryana: Rakhigarhi (largest Harappan site), Banawali (barley, clay plough), Mitathal',
                  'Kurukshetra: Battle of Mahabharata, Jyotisar (Bhagavad Gita sermon by Krishna)',
                  'Harshavardhana capital at Thanesar (Kurukshetra), Banabhatta Harshacharita',
                  'Battles of Panipat: 1st (1526 Babur vs Ibrahim Lodi), 2nd (1556 Akbar/Bairam Khan vs Hemu), 3rd (1761 Marathas vs Ahmad Shah Abdali)',
                  'Formation of Haryana on 1 November 1966 on recommendation of Shah Commission (18th Constitutional Amendment)',
                ],
                examQuestions: '4-6',
                difficulty: 'medium',
              },
              {
                id: 'haryana-geography-rivers',
                name: 'Haryana Rivers, Climate & Agriculture',
                nameHindi: 'हरियाणा के प्रमुख दरिया, जलवायु व कृषि',
                subtopics: [
                  'Yamuna river (eastern boundary with UP), Ghaggar (northern seasonal river), Saraswati rejuvenation project, Markanda, Sahibi',
                  'Shivalik Hills in North (Karoh peak 1467m highest in Morni Hills, Panchkula)',
                  'Aravalli Range in South-West (Dhosi Hill 652m in Mahendragarh)',
                  'Murrah Buffalo ("Black Gold" of Haryana), Central Institute for Research on Buffaloes (CIRB Hisar), NDRI Karnal',
                ],
                examQuestions: '4-6',
                difficulty: 'medium',
              },
            ],
          },
          {
            id: 'htet-child-pedagogy',
            name: 'Child Development & Educational Psychology',
            nameHindi: 'बाल विकास व शिक्षा मनोविज्ञान',
            topics: [
              {
                id: 'child-development-pedagogy',
                name: 'Child Development, Piaget, Kohlberg & Vygotsky',
                nameHindi: 'बाल विकास: पियाजे, कोहलबर्ग व वाइगोत्स्की सिद्धांत',
                subtopics: [
                  'Piaget: Schemas, Assimilation, Accommodation, 4 stages of cognitive development',
                  'Kohlberg: 3 levels and 6 stages of moral development',
                  'Vygotsky: Socio-cultural theory, More Knowledgeable Other (MKO), Zone of Proximal Development (ZPD)',
                  'Inclusive Education, RTE Act 2009, NEP 2020 5+3+3+4 structure',
                ],
                examQuestions: '30',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'haryana-police-constable',
    state: 'haryana',
    name: 'Haryana Police Constable',
    nameHindi: 'हरियाणा पुलिस कांस्टेबल भर्ती',
    namePunjabi: 'ਹਰਿਆਣਾ ਪੁਲਿਸ ਕਾਂਸਟੇਬਲ',
    body: 'Haryana Staff Selection Commission (HSSC), Panchkula',
    level: '10+2 Level',
    totalMarks: 100,
    duration: '105 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://hssc.gov.in',
    emoji: '👮',
    color: '#047857',
    sections: [
      { name: 'General Studies & Science', nameHindi: 'सामान्य अध्ययन व विज्ञान', marks: 20, questions: 20 },
      { name: 'Haryana GK & Culture', nameHindi: 'हरियाणा सामान्य ज्ञान', marks: 25, questions: 25 },
      { name: 'Computer Fundamentals', nameHindi: 'कंप्यूटर ज्ञान', marks: 10, questions: 10 },
      { name: 'Agriculture & Animal Husbandry', nameHindi: 'कृषि व पशुपालन', marks: 15, questions: 15 },
      { name: 'Reasoning & Mathematics', nameHindi: 'तर्कशक्ति व गणित', marks: 20, questions: 20 },
      { name: 'General Hindi & English', nameHindi: 'सामान्य हिंदी व अंग्रेजी', marks: 10, questions: 10 },
    ],
    subjects: [
      {
        id: 'haryana-police-domain',
        name: 'Haryana Police Specialized Curriculum',
        nameHindi: 'हरियाणा पुलिस विशेष पाठ्यक्रम',
        emoji: '🛡️',
        chapters: [
          {
            id: 'haryana-agri-animal',
            name: 'Agriculture, Animal Husbandry & Police Administration',
            nameHindi: 'कृषि, पशुपालन व हरियाणा पुलिस प्रशासन',
            topics: [
              {
                id: 'haryana-agri-husbandry',
                name: 'Agriculture Patterns & Animal Husbandry Breeds',
                nameHindi: 'हरियाणा की फसलें, कृषि चक्र व पशु नस्लें',
                subtopics: [
                  'Kharif and Rabi cropping calendar in Haryana; Basmati rice of Taraori (Karnal), wheat belt',
                  'Murrah buffalo, Hariana cow breed, Sahiwal, livestock census',
                  'National Dairy Research Institute (NDRI) Karnal, Chaudhary Charan Singh HAU Hisar',
                  'Haryana Police Range headquarters (Ambala, Karnal, Hisar, Rohtak, South Range Rewari), Police Commissionerates (Gurugram, Faridabad, Panchkula, Sonipat)',
                ],
                examQuestions: '10-15',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'haryana-cet-clerk',
    state: 'haryana',
    name: 'Haryana CET Group C (Clerk & Patwari)',
    nameHindi: 'हरियाणा CET ग्रुप सी (क्लर्क व पटवारी)',
    namePunjabi: 'ਹਰਿਆਣਾ ਸੀ.ਈ.ਟੀ. ਕਲਰਕ',
    body: 'Haryana Staff Selection Commission (HSSC)',
    level: 'Graduation / 10+2 Level',
    totalMarks: 100,
    duration: '105 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://hssc.gov.in',
    emoji: '📂',
    color: '#0d9488',
    sections: [
      { name: 'Haryana History, GK & Literature', nameHindi: 'हरियाणा इतिहास, सामान्य ज्ञान व साहित्य (25%)', marks: 25, questions: 25 },
      { name: 'General Awareness & Science', nameHindi: 'सामान्य ज्ञान व विज्ञान', marks: 15, questions: 15 },
      { name: 'Math & Reasoning', nameHindi: 'गणित व रीजनिंग', marks: 20, questions: 20 },
      { name: 'Hindi & English Languages', nameHindi: 'हिंदी व अंग्रेजी भाषा', marks: 20, questions: 20 },
      { name: 'Computer Knowledge', nameHindi: 'कंप्यूटर ज्ञान', marks: 10, questions: 10 },
      { name: 'Subject/Post Domain', nameHindi: 'पद संबंधित विषय', marks: 10, questions: 10 },
    ],
    subjects: [
      {
        id: 'hssc-cet-core',
        name: 'HSSC CET Syllabus',
        nameHindi: 'एचएसएससी सीईटी पाठ्यक्रम',
        emoji: '📊',
        chapters: [
          {
            id: 'haryana-clerk-aptitude',
            name: 'Aptitude & Computer Fundamentals',
            nameHindi: 'योग्यता व कंप्यूटर ज्ञान',
            topics: [
              {
                id: 'computer-it-basics',
                name: 'Computer Applications & Office Suite',
                nameHindi: 'कंप्यूटर अनुप्रयोग व एमएस ऑफिस',
                subtopics: ['MS Word shortcuts, Excel formulas, PowerPoint, Networking, Internet protocols'],
                examQuestions: '10',
                difficulty: 'easy',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'haryana-ett-prt',
    state: 'haryana',
    name: 'Haryana PRT Primary Teacher (JBT / D.El.Ed Cadre)',
    nameHindi: 'हरियाणा प्राथमिक शिक्षक भर्ती (PRT / JBT)',
    namePunjabi: 'ਹਰਿਆਣਾ ਪ੍ਰਾਇਮਰੀ ਅਧਿਆਪਕ ਭਰਤੀ',
    body: 'Board of School Education Haryana (BSEH) / HSSC',
    level: 'PRT - Classes 1 to 5',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://bseh.org.in',
    emoji: '👶',
    color: '#059669',
    sections: [
      { name: 'Child Development & Pedagogy', nameHindi: 'बाल विकास व शिक्षाशास्त्र', marks: 30, questions: 30 },
      { name: 'Language I (Hindi)', nameHindi: 'अनिवार्य हिंदी भाषा', marks: 15, questions: 15 },
      { name: 'Language II (English)', nameHindi: 'सामान्य अंग्रेजी', marks: 15, questions: 15 },
      { name: 'Quantitative Aptitude, Reasoning & Haryana GK', nameHindi: 'गणित, रीजनिंग व हरियाणा सामान्य ज्ञान', marks: 30, questions: 30 },
      { name: 'Mathematics & Environmental Studies (EVS)', nameHindi: 'गणित व पर्यावरण अध्ययन', marks: 60, questions: 60 },
    ],
    subjects: [
      {
        id: 'haryana-prt-domain',
        name: 'Haryana PRT Core Curriculum',
        nameHindi: 'हरियाणा पीआरटी पाठ्यक्रम',
        emoji: '📚',
        chapters: [
          {
            id: 'haryana-prt-pedagogy',
            name: 'Primary Pedagogy & EVS',
            nameHindi: 'प्राथमिक शिक्षाशास्त्र व पर्यावरण',
            topics: [
              {
                id: 'child-development-pedagogy',
                name: 'Primary Child Development & Learning Concepts',
                nameHindi: 'प्राथमिक बाल विकास व अधिगम सिद्धांत',
                subtopics: ['Piaget, Kohlberg, Vygotsky, Inclusive Classrooms, Learning Disabilities, RTE 2009'],
                examQuestions: '30',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// 2. DELHI & CAPF / CENTRAL POLICE
// ---------------------------------------------------------------------------
export const DELHI_EXAMS: Exam[] = [
  {
    id: 'delhi-police-constable',
    state: 'delhi',
    name: 'Delhi Police Constable (Executive)',
    nameHindi: 'दिल्ली पुलिस कांस्टेबल (कार्यकारी) भर्ती',
    namePunjabi: 'ਦਿੱਲੀ ਪੁਲਿਸ ਕਾਂਸਟੇਬਲ',
    body: 'Staff Selection Commission (SSC) & Delhi Police',
    level: '10+2 Senior Secondary Level',
    totalMarks: 100,
    duration: '90 Minutes (1.5 Hours)',
    negativeMarking: 0.25,
    officialWebsite: 'https://delhipolice.gov.in',
    emoji: '🚔',
    color: '#0284c7',
    sections: [
      { name: 'General Knowledge & Current Affairs', nameHindi: 'सामान्य ज्ञान व समसामयिकी', marks: 50, questions: 50 },
      { name: 'Reasoning Ability', nameHindi: 'तर्कशक्ति (रीजनिंग)', marks: 25, questions: 25 },
      { name: 'Numerical Ability (Maths)', nameHindi: 'संख्यात्मक अभियोग्यता (गणित)', marks: 15, questions: 15 },
      { name: 'Computer Fundamentals, MS Excel & Internet', nameHindi: 'कंप्यूटर ज्ञान व इंटरनेट', marks: 10, questions: 10 },
    ],
    subjects: [
      {
        id: 'delhi-police-curriculum',
        name: 'Delhi Police Exam Syllabus',
        nameHindi: 'दिल्ली पुलिस परीक्षा पाठ्यक्रम',
        emoji: '🏛️',
        chapters: [
          {
            id: 'delhi-gk-history',
            name: 'Delhi History, National Polity & Culture',
            nameHindi: 'दिल्ली का इतिहास, राष्ट्रीय राजव्यवस्था व संस्कृति',
            topics: [
              {
                id: 'delhi-historical-heritage',
                name: 'Delhi Through The Ages (Tomars to Modern Capital)',
                nameHindi: 'दिल्ली का ऐतिहासिक परिदृश्य व राष्ट्रीय धरोहर',
                subtopics: [
                  'Anangpal Tomar (founder of Lal Kot / Qila Rai Pithora), Prithviraj Chauhan',
                  'Delhi Sultanate: Slave dynasty (Qutb Minar, Iron Pillar of Mehrauli), Alauddin Khalji (Siri Fort), Tughlaqs (Tughlaqabad), Lodis',
                  'Mughal Delhi: Shahjahanabad, Red Fort (1638-1648), Jama Masjid',
                  'Transfer of British Indian Capital from Calcutta to Delhi (1911 Delhi Durbar, King George V), Lutyens and Baker architecture (Rashtrapati Bhavan, Parliament House)',
                  'National Capital Territory of Delhi: 69th Constitutional Amendment Act 1991 (Article 239AA), Lieutenant Governor & Elected Assembly powers',
                ],
                examQuestions: '8-12',
                difficulty: 'medium',
              },
              {
                id: 'delhi-police-computer-apps',
                name: 'Computer Applications: MS Word, Excel & Networking',
                nameHindi: 'कंप्यूटर फंडामेंटल्स: एमएस वर्ड, एक्सेल व इंटरनेट',
                subtopics: [
                  'MS Word: Open/Close document, Text formatting, Table creation, Paragraph alignment, Header/Footer',
                  'MS Excel: Cell referencing, SUM, AVERAGE, COUNT, IF formulas, Rows and Columns',
                  'Communication: Web browsers, Search engines, URL, HTTP/HTTPS, FTP, Email (CC, BCC, SMTP, POP3)',
                ],
                examQuestions: '10',
                difficulty: 'easy',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'central-capf-gd',
    state: 'delhi',
    name: 'SSC GD Constable (CAPF - BSF, CISF, CRPF, ITBP, SSB)',
    nameHindi: 'एसएससी जीडी कांस्टेबल (केंद्रीय सशस्त्र पुलिस बल)',
    namePunjabi: 'ਕੇਂਦਰੀ ਅਰਧ ਸੈਨਿਕ ਬਲ (CAPF) ਜੀ.ਡੀ.',
    body: 'Staff Selection Commission (SSC) / Ministry of Home Affairs',
    level: '10th Matriculation Pass',
    totalMarks: 160,
    duration: '60 Minutes (1 Hour)',
    negativeMarking: 0.50,
    officialWebsite: 'https://ssc.gov.in',
    emoji: '🎖️',
    color: '#0369a1',
    sections: [
      { name: 'General Intelligence & Reasoning', nameHindi: 'सामान्य बुद्धिमत्ता व तर्कशक्ति', marks: 40, questions: 20 },
      { name: 'General Knowledge & General Awareness', nameHindi: 'सामान्य ज्ञान व सामान्य चेतना', marks: 40, questions: 20 },
      { name: 'Elementary Mathematics', nameHindi: 'प्रारंभिक गणित', marks: 40, questions: 20 },
      { name: 'English or Hindi (Candidate Choice)', nameHindi: 'अंग्रेजी अथवा हिंदी भाषा', marks: 40, questions: 20 },
    ],
    subjects: [
      {
        id: 'capf-gd-curriculum',
        name: 'SSC GD Exam Curriculum',
        nameHindi: 'एसएससी जीडी पाठ्यक्रम',
        emoji: '🛡️',
        chapters: [
          {
            id: 'capf-gd-general-studies',
            name: 'General Awareness & Elementary Math',
            nameHindi: 'सामान्य जागरूकता व प्रारंभिक गणित',
            topics: [
              {
                id: 'general-science-concepts',
                name: 'General Science: Physics, Chemistry & Biology',
                nameHindi: 'सामान्य विज्ञान: भौतिकी, रसायन व जीव विज्ञान',
                subtopics: ['SI units, Light, Sound, Common chemical compounds, Human digestive and circulatory systems, Vitamins'],
                examQuestions: '6-8',
                difficulty: 'easy',
              },
              {
                id: 'elementary-mathematics',
                name: 'Elementary Mathematics: Arithmetic Speed Techniques',
                nameHindi: 'प्रारंभिक गणित: अंकगणित व त्वरित हल तकनीक',
                subtopics: ['Number systems, Decimals, Fractions, Ratio & Proportion, Percentages, Profit & Loss, Simple & Compound Interest, Time & Work'],
                examQuestions: '20',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// 3. DEFENCE EXAMINATIONS (INDIAN ARMED FORCES)
// ---------------------------------------------------------------------------
export const DEFENCE_EXAMS: Exam[] = [
  {
    id: 'army-agniveer-gd',
    state: 'defence',
    // Sub-track: overlaps with primary 'army-agniveer' (exams.ts). Marked provisional-archive
    // until source document distinguishes this from the parent track content.
    name: 'Indian Army Agniveer General Duty (GD)',
    nameHindi: 'भारतीय सेना अग्निवीर जनरल ड्यूटी (GD)',
    namePunjabi: 'ਭਾਰਤੀ ਫੌਜ ਅਗਨੀਵੀਰ ਜਨਰਲ ਡਿਊਟੀ',
    body: 'Join Indian Army (Headquarters Recruiting Zone)',
    level: 'Class 10th / Matric with 45% aggregate',
    totalMarks: 100,
    duration: '60 Minutes (1 Hour)',
    negativeMarking: 0.50,
    officialWebsite: 'https://joinindianarmy.nic.in',
    emoji: '⚔️',
    color: '#ca8a04',
    syllabusStatus: 'provisional-archive' as const,
    sections: [
      { name: 'General Knowledge', nameHindi: 'सामान्य ज्ञान', marks: 30, questions: 15 },
      { name: 'General Science', nameHindi: 'सामान्य विज्ञान', marks: 30, questions: 15 },
      { name: 'Mathematics', nameHindi: 'गणित', marks: 30, questions: 15 },
      { name: 'Logical Reasoning', nameHindi: 'तर्कशक्ति (लॉजिकल रीजनिंग)', marks: 10, questions: 5 },
    ],
    subjects: [
      {
        id: 'army-gd-curriculum',
        name: 'Army Agniveer GD Curriculum',
        nameHindi: 'सेना अग्निवीर जीडी पाठ्यक्रम',
        emoji: '🪖',
        chapters: [
          {
            id: 'army-gd-domain',
            name: 'Military General Knowledge & Science',
            nameHindi: 'सैन्य सामान्य ज्ञान व विज्ञान',
            topics: [
              {
                id: 'agniveer-gk-military',
                name: 'Agniveer General Knowledge: Armed Forces, Military Heritage & Geography',
                nameHindi: 'अग्निवीर सामान्य ज्ञान: भारतीय सशस्त्र बल, सैन्य परंपराएं, भारत का भूगोल एवं संविधान',
                namePunjabi: 'ਅਗਨੀਵੀਰ ਜਨਰਲ ਨਾਲਜ: ਭਾਰਤੀ ਹਥਿਆਰਬੰਦ ਫੌਜਾਂ, ਫੌਜੀ ਵਿਰਾਸਤ, ਭੂਗੋਲ ਅਤੇ ਸੰਵਿਧਾਨ',
                subtopics: [
                  'Three Services commands & headquarters: Army (7 commands, New Delhi HQ), Navy (3 commands), Air Force (7 commands)',
                  'Rank equivalents across Army, Navy and Air Force (e.g. Captain = Lieutenant = Flight Lieutenant; Major = Lt Commander = Squadron Leader)',
                  'Gallantry awards: Param Vir Chakra (Major Somnath Sharma 1st recipient, Captain Vikram Batra 1999 Kargil), Maha Vir Chakra, Vir Chakra, Ashok Chakra',
                  'Major military operations: Operation Polo (1948 Hyderabad), Operation Vijay (1961 Goa & 1999 Kargil), Operation Meghdoot (1984 Siachen), Operation Blue Star (1984)',
                  'National Symbols, Capital, Currencies, Major Rivers, Borders, Mountain Passes, and Constitution of India basics',
                ],
                examQuestions: '15',
                difficulty: 'easy',
              },
              {
                id: 'agniveer-general-science',
                name: 'Agniveer General Science: Physics, Chemistry & Biology Matric Essentials',
                nameHindi: 'अग्निवीर सामान्य विज्ञान: भौतिकी, रसायन एवं जीव विज्ञान (मैट्रिक स्तर)',
                namePunjabi: 'ਅਗਨੀਵੀਰ ਜਨਰਲ ਸਾਇੰਸ: ਭੌਤਿਕ ਵਿਗਿਆਨ, ਰਸਾਇਣ ਵਿਗਿਆਨ ਅਤੇ ਜੀਵ ਵਿਗਿਆਨ (ਦਸਵੀਂ ਪੱਧਰ)',
                subtopics: [
                  'Physics: SI units, work, power, energy, gravitation, simple machines, reflection, refraction, and Ohm law',
                  'Chemistry: Elements, mixtures, compounds, physical and chemical changes, acids, bases, salts, metals and non-metals',
                  'Biology: Cell structure, human body organs, digestion, blood circulation, respiration, vitamins and deficiency diseases',
                ],
                examQuestions: '15',
                difficulty: 'easy',
              },
              {
                id: 'agniveer-math-foundation',
                name: 'Agniveer Elementary Mathematics: Arithmetic, Algebra, Geometry, Mensuration & Trigonometry',
                nameHindi: 'अग्निवीर प्रारंभिक गणित: अंकगणित, बीजगणित, क्षेत्रमिति एवं त्रिकोणमिति',
                namePunjabi: 'ਅਗਨੀਵੀਰ ਮੁੱਢਲਾ ਗਣਿਤ: ਅੰਕਗਣਿਤ, ਅਲਜਬਰਾ, ਖੇਤਰਮਿਤੀ (ਮੈਂਸੁਰੇਸ਼ਨ) ਅਤੇ ਤ੍ਰਿਕੋਣਮਿਤੀ',
                subtopics: [
                  'Arithmetic: Number systems, HCF & LCM, decimal fractions, square roots, percentages, ratio and proportion, profit and loss',
                  'Commercial Math: Simple and compound interest, time, work and distance, unitary method',
                  'Algebra & Mensuration: Basic formulas (a+b)², factorization, area and perimeter of circle, triangle, rectangle, volume of cylinder and sphere',
                  'Trigonometry: Simple trigonometric ratios (sin, cos, tan 0° to 90°) and basic heights and distances',
                ],
                examQuestions: '15',
                difficulty: 'easy',
              },
              {
                id: 'agniveer-reasoning-ability',
                name: 'Agniveer Logical Reasoning: Coding-Decoding, Number Series, Blood Relations & Directions',
                nameHindi: 'अग्निवीर तार्किक क्षमता: कोडिंग-डिकोडिंग, श्रेणी, रक्त संबंध एवं दिशा ज्ञान',
                namePunjabi: 'ਅਗਨੀਵੀਰ ਤਰਕਸ਼ਕਤੀ (ਰੀਜ਼ਨਿੰਗ): ਕੋਡਿੰਗ-ਡੀਕੋਡਿੰਗ, ਸੰਖਿਆ ਲੜੀ, ਖੂਨ ਦੇ ਰਿਸ਼ਤੇ ਅਤੇ ਦਿਸ਼ਾ ਗਿਆਨ',
                subtopics: [
                  'Number series, alphabet series, coding-decoding, odd man out, analogy',
                  'Blood relations, direction sense test, order and ranking, Venn diagrams, logical arrangement of words',
                ],
                examQuestions: '5',
                difficulty: 'easy',
              },
              {
                id: 'army-military-heritage',
                name: 'Indian Armed Forces Heritage, Ranks & Honours Overview',
                nameHindi: 'भारतीय सशस्त्र बल: रैंक संरचना, युद्ध व सर्वोच्च सम्मान समग्र अवलोकन',
                subtopics: [
                  'Three Services commands & headquarters: Army (7 commands, New Delhi HQ), Navy (3 commands), Air Force (7 commands)',
                  'Rank equivalents across Army, Navy and Air Force (e.g. Captain = Lieutenant = Flight Lieutenant; Major = Lt Commander = Squadron Leader)',
                  'Gallantry awards: Param Vir Chakra (Major Somnath Sharma 1st recipient, Captain Vikram Batra 1999 Kargil), Maha Vir Chakra, Vir Chakra, Ashok Chakra',
                  'Major military operations: Operation Polo (1948 Hyderabad), Operation Vijay (1961 Goa & 1999 Kargil), Operation Meghdoot (1984 Siachen), Operation Blue Star (1984)',
                ],
                examQuestions: '8-10',
                difficulty: 'easy',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'army-agniveer-clerk',
    state: 'defence',
    name: 'Indian Army Agniveer Clerk / Store Keeper (SKT)',
    nameHindi: 'भारतीय सेना अग्निवीर क्लर्क / एसकेटी',
    namePunjabi: 'ਭਾਰਤੀ ਫੌਜ ਅਗਨੀਵੀਰ ਕਲਰਕ',
    body: 'Join Indian Army',
    level: '10+2 Intermediate (60% aggregate with English & Maths/Accounts)',
    totalMarks: 200,
    duration: '60 Minutes (1 Hour)',
    negativeMarking: 1.00,
    officialWebsite: 'https://joinindianarmy.nic.in',
    emoji: '📑',
    color: '#b45309',
    syllabusStatus: 'provisional-archive' as const,
    sections: [
      { name: 'Part I: General Knowledge', nameHindi: 'भाग 1: सामान्य ज्ञान', marks: 20, questions: 5 },
      { name: 'Part I: General Science', nameHindi: 'भाग 1: सामान्य विज्ञान', marks: 20, questions: 5 },
      { name: 'Part I: Mathematics', nameHindi: 'भाग 1: गणित', marks: 40, questions: 10 },
      { name: 'Part I: Computer Science', nameHindi: 'भाग 1: कंप्यूटर विज्ञान', marks: 20, questions: 5 },
      { name: 'Part II: General English (Qualifying 32 Marks)', nameHindi: 'भाग 2: सामान्य अंग्रेजी (अनिवार्य 32 अंक)', marks: 100, questions: 25 },
    ],
    subjects: [
      {
        id: 'army-clerk-curriculum',
        name: 'Army Clerk Core Curriculum',
        nameHindi: 'सेना क्लर्क विशेष पाठ्यक्रम',
        emoji: '📖',
        chapters: [
          {
            id: 'army-clerk-english-grammar',
            name: 'English Language Mastery for Army Clerk',
            nameHindi: 'अंग्रेजी भाषा व व्याकरण',
            topics: [
              {
                id: 'english-grammar-syntax',
                name: 'Parts of Speech, Comprehension & Voice/Narration',
                nameHindi: 'पार्ट्स ऑफ स्पीच, कॉम्प्रिहेंशन व एक्टिव-पैसिव',
                subtopics: [
                  'Reading comprehension passages with direct fact retrieval',
                  'Subject-Verb Agreement, Prepositions, Conjunctions, Articles (A, An, The)',
                  'Active and Passive Voice transformations; Direct and Indirect Speech',
                  'Idioms and Phrases, Synonyms and Antonyms, One Word Substitution',
                ],
                examQuestions: '25',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// 4. PUNJAB & RAJASTHAN CATALOG ADDITIONS
// ---------------------------------------------------------------------------
export const PUNJAB_ADDITIONAL_EXAMS: Exam[] = [
  {
    id: 'punjab-pstet',
    state: 'punjab',
    name: 'PSTET (Punjab State Teacher Eligibility Test)',
    nameHindi: 'पंजाब राज्य शिक्षक पात्रता परीक्षा (PSTET)',
    namePunjabi: 'ਪੰਜਾਬ ਰਾਜ ਅਧਿਆਪਕ ਯੋਗਤਾ ਪ੍ਰੀਖਿਆ (PSTET)',
    body: 'State Council of Educational Research and Training (SCERT) Punjab',
    level: 'Paper 1 (Class 1-5) & Paper 2 (Class 6-8)',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://pstet.pseb.ac.in',
    emoji: '🎓',
    color: '#6366f1',
    syllabusStatus: 'provisional-archive' as const,
    sections: [
      { name: 'Child Development & Pedagogy', nameHindi: 'बाल विकास व शिक्षाशास्त्र', marks: 30, questions: 30 },
      { name: 'Language I (Punjabi Compulsory)', nameHindi: 'पंजाबी भाषा (अनिवार्य)', marks: 30, questions: 30 },
      { name: 'Language II (English)', nameHindi: 'अंग्रेजी भाषा', marks: 30, questions: 30 },
      { name: 'Mathematics / Science OR Social Science', nameHindi: 'विषय डोमेन (गणित/विज्ञान अथवा सामाजिक अध्ययन)', marks: 60, questions: 60 },
    ],
    subjects: [
      {
        id: 'pstet-curriculum',
        name: 'PSTET Core Pedagogy & Punjabi',
        nameHindi: 'PSTET शिक्षाशास्त्र व पंजाबी',
        emoji: '📚',
        chapters: [
          {
            id: 'pstet-core-pedagogy',
            name: 'Educational Psychology & Inclusive Pedagogy',
            nameHindi: 'शिक्षा मनोविज्ञान व समावेशी शिक्षा',
            topics: [
              {
                id: 'pstet-cdp-core',
                name: 'Child Development, Learning Theories (Piaget, Vygotsky, Kohlberg) & Inclusive Education',
                nameHindi: 'बाल विकास, अधिगम सिद्धांत (पियाजे, वाइगोत्स्की, कोहलबर्ग) एवं समावेशी शिक्षा',
                namePunjabi: 'ਬਾਲ ਵਿਕਾਸ, ਸਿੱਖਣ ਸਿਧਾਂਤ (ਪਿਆਜੇ, ਵਾਈਗੋਤਸਕੀ, ਕੋਹਲਬਰਗ) ਅਤੇ ਸਮਾਵੇਸ਼ੀ ਸਿੱਖਿਆ',
                subtopics: [
                  'Child Development: Growth vs development principles, heredity vs environment, socialization agencies',
                  'Cognitive & Moral Theories: Jean Piaget 4 stages, Lev Vygotsky (ZPD, scaffolding, MKO), Lawrence Kohlberg 3 levels 6 stages',
                  'Intelligence & Personality: Howard Gardner multiple intelligences, emotional intelligence, individual differences',
                  'Learning Paradigms: Behaviorism (Pavlov, Skinner, Thorndike) vs Constructivism; Motivation and learning transfer',
                  'Inclusive Education & CCE: CWSN (ADHD, Dyslexia, Autism, Gifted), RTE Act 2009, NEP 2020 pedagogical structure',
                ],
                examQuestions: '30',
                difficulty: 'medium',
              },
              {
                id: 'pstet-punjabi-pedagogy',
                name: 'Punjabi Language Pedagogy: LSRW Skills, Teaching Methods & CCE',
                nameHindi: 'पंजाबी भाषा शिक्षण शास्त्र: भाषाई कौशल (LSRW), शिक्षण विधियां एवं सतत व्यापक मूल्यांकन',
                namePunjabi: 'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਅਧਿਆਪਨ: ਭਾਸ਼ਾਈ ਕੌਸ਼ਲ (ਸੁਣਨਾ, ਬੋਲਣਾ, ਪੜ੍ਹਨਾ, ਲਿਖਣਾ), ਵਿਧੀਆਂ ਤੇ ਮੁਲਾਂਕਣ',
                subtopics: [
                  'Language Acquisition: Chomsky Language Acquisition Device (LAD), Mother tongue importance in primary education',
                  'Four Basic Skills (LSRW): Sunana, Bolana, Parhna, Likhana pedagogical sequence and common speech defects',
                  'Teaching Methods: Play-way, Kindergarten, Direct method, Grammar translation, Inductive vs Deductive grammar',
                  'Teaching-Learning Materials: Multi-sensory TLM, textbook evaluation criteria, library usage',
                  'Evaluation & Remedial Teaching: Diagnostic testing, error analysis in Gurmukhi spelling, Continuous Comprehensive Evaluation (CCE)',
                ],
                examQuestions: '15',
                difficulty: 'medium',
              },
              {
                id: 'pstet-english-pedagogy',
                name: 'English Language Teaching (ELT): Acquisition vs Learning & Methodology',
                nameHindi: 'अंग्रेजी भाषा शिक्षण शास्त्र: भाषा अर्जन बनाम अधिगम, सिद्धांत एवं उपचारात्मक शिक्षण',
                namePunjabi: 'ਅੰਗਰੇਜ਼ੀ ਭਾਸ਼ਾ ਅਧਿਆਪਨ (ELT): ਸਿੱਖਣ ਸਿਧਾਂਤ, ਵਿਧੀਆਂ ਅਤੇ ਉਪਚਾਰਾਤਮਕ ਸਿੱਖਿਆ',
                subtopics: [
                  'Second Language Acquisition: Krashen 5 hypotheses (Acquisition-Learning, Monitor, Natural Order, Input i+1, Affective Filter)',
                  'ELT Approaches: Grammar-Translation Method (GTM), Direct Method, Audio-Lingual Method, Communicative Language Teaching (CLT)',
                  'Skills Development: Sub-skills of reading (Skimming, Scanning, Intensive, Extensive), mechanics of writing',
                  'Phonetics & English in India: Place and manner of articulation, silent letters, stress, rhythm, English as global/associate official language',
                  'Assessment & Remediation: Types of questions, formative vs summative assessment, remedial strategies for first-generation learners',
                ],
                examQuestions: '15',
                difficulty: 'medium',
              },
              {
                id: 'pstet-math-pedagogy',
                name: 'Mathematics Pedagogy: Nature of Math, Curriculum Placement & Diagnostic Teaching',
                nameHindi: 'गणित शिक्षण शास्त्र: गणित की प्रकृति, पाठ्यक्रम में स्थान, निदानात्मक व उपचारात्मक शिक्षण',
                namePunjabi: 'ਗਣਿਤ ਅਧਿਆਪਨ: ਗਣਿਤ ਦੀ ਪ੍ਰਕਿਰਤੀ, ਪਾਠਕ੍ਰਮ ਵਿੱਚ ਸਥਾਨ, ਨਿਦਾਨਾਤਮਕ ਅਤੇ ਉਪਚਾਰਾਤਮਕ ਸਿੱਖਿਆ',
                subtopics: [
                  'Nature of Mathematics: Logical, abstract, hierarchical, precision; Mathematization of child thought (David Wheeler)',
                  'Curriculum Integration: NCF 2005 position paper on teaching of mathematics, concrete to abstract progression',
                  'Pedagogical Approaches: Inductive-Deductive, Analytic-Synthetic, Problem Solving, Heuristic (Armstrong), Project method',
                  'Mathematical Tools & Manipulatives: Abacus, Geo-board, Dienes blocks, Tangram, graph paper',
                  'Diagnostic & Remedial Teaching: Dyscalculia, identifying systematic errors in place value, fractions, word problems',
                ],
                examQuestions: '15',
                difficulty: 'medium',
              },
              {
                id: 'pstet-evs-pedagogy',
                name: 'EVS Pedagogy: Integrated EVS, 6 Themes & Activity-Based Learning',
                nameHindi: 'पर्यावरण अध्ययन (EVS) शिक्षण शास्त्र: एकीकृत EVS, 6 मुख्य विषय एवं गतिविधि आधारित शिक्षण',
                namePunjabi: 'ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ (EVS) ਅਧਿਆਪਨ: ਏਕੀਕ੍ਰਿਤ EVS, 6 ਮੁੱਖ ਵਿਸ਼ੇ ਅਤੇ ਗਤੀਵਿਧੀ-ਅਧਾਰਿਤ ਸਿੱਖਿਆ',
                subtopics: [
                  'Scope & Integration: Composite area integrating Science, Social Studies, and Environmental Education (Classes 3 to 5)',
                  'NCF 2005 Six EVS Themes: Family & Friends, Food, Shelter, Water, Travel, Things We Make and Do',
                  'Pedagogical Principles: Child-centered, experiential learning, field trips, community as a learning resource',
                  'Activities & Projects: Surveys, interviews, experiments, environmental campaigns, local biodiversity mapping',
                  'Assessment in EVS: Indicators of learning, anecdotal records, portfolios, rating scales, rubrics',
                ],
                examQuestions: '15',
                difficulty: 'medium',
              },
              {
                id: 'child-development-pedagogy',
                name: 'Cognitive Theories: Piaget, Vygotsky & Kohlberg Overview',
                nameHindi: 'संज्ञानात्मक सिद्धांत: पियाजे, वाइगोत्स्की व कोहलबर्ग समग्र अवलोकन',
                subtopics: ['Piaget stages, Vygotsky scaffolding, RTE Act 2009, NCF 2005 principles'],
                examQuestions: '30',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'punjab-lecturer-cadre',
    state: 'punjab',
    name: 'Punjab Lecturer Cadre (School Education)',
    nameHindi: 'पंजाब स्कूल शिक्षा लेक्चरर कैडर',
    namePunjabi: 'ਪੰਜਾਬ ਸਕੂਲ ਸਿੱਖਿਆ ਲੈਕਚਰਾਰ ਕੈਡਰ',
    body: 'Education Recruitment Board (ERB), Punjab',
    level: 'PGT - Senior Secondary Classes 11 & 12',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://educationrecruitmentboard.com',
    emoji: '🏛️',
    color: '#4f46e5',
    syllabusStatus: 'provisional-archive' as const,
    sections: [
      { name: 'Paper A - Compulsory Punjabi Qualifying', nameHindi: 'पंजाबी अर्हता परीक्षा', marks: 50, questions: 50, qualifying: true },
      { name: 'Paper B - Post Graduate Subject Domain', nameHindi: 'स्नातकोत्तर विषय विशेषज्ञता', marks: 150, questions: 150 },
    ],
    subjects: [
      {
        id: 'lecturer-history-specialization',
        name: 'Lecturer Cadre History & Political Science',
        nameHindi: 'लेक्चरर इतिहास व राजनीति विज्ञान',
        emoji: '📜',
        chapters: [
          {
            id: 'lecturer-advanced-history',
            name: 'Advanced Indian History & Historiography',
            nameHindi: 'उन्नत भारतीय इतिहास व इतिहास-लेखन',
            topics: [
              {
                id: 'punjab-history-deep',
                name: 'Sikh Guru Period, Banda Bahadur & Maharaja Ranjit Singh',
                nameHindi: 'सिख गुरु काल, बंदा सिंह बहादुर व महाराजा रणजीत सिंह',
                subtopics: ['Guru period administration, Misal organization, Anglo-Sikh Wars, Treaty of Lahore 1846'],
                examQuestions: '25-30',
                difficulty: 'hard',
              },
            ],
          },
        ],
      },
    ],
  },
];

export const RAJASTHAN_ADDITIONAL_EXAMS: Exam[] = [
  {
    id: 'rajasthan-3rd-grade',
    state: 'rajasthan',
    name: 'Rajasthan 3rd Grade Teacher (Mains)',
    nameHindi: 'राजस्थान तृतीय श्रेणी अध्यापक मुख्य परीक्षा (रीट मेन्स)',
    namePunjabi: 'ਰਾਜਸਥਾਨ ਤੀਜੀ ਸ਼੍ਰੇਣੀ ਅਧਿਆਪਕ ਭਰਤੀ',
    body: 'Rajasthan Staff Selection Board (RSMSSB), Jaipur',
    level: 'Level 1 (Classes 1-5) & Level 2 (Classes 6-8)',
    totalMarks: 300,
    duration: '2 Hours 30 Minutes (150 Mins)',
    negativeMarking: 0.66,
    officialWebsite: 'https://rsmssb.rajasthan.gov.in',
    emoji: '👨‍🏫',
    color: '#dc2626',
    syllabusStatus: 'provisional-archive' as const,
    sections: [
      { name: 'Rajasthan Geography, History & Culture', nameHindi: 'राजस्थान का भौगोलिक, ऐतिहासिक व सांस्कृतिक ज्ञान', marks: 100, questions: 50 },
      { name: 'Rajasthan General Knowledge, RTE 2009 & Educational Scenario', nameHindi: 'राजस्थान सामान्य ज्ञान, RTE व शैक्षिक परिदृश्य', marks: 80, questions: 40 },
      { name: 'School Subject Domain Knowledge', nameHindi: 'संबंधित विद्यालय विषय ज्ञान', marks: 120, questions: 60 },
    ],
    subjects: [
      {
        id: 'rsmssb-3rd-grade-core',
        name: 'Rajasthan 3rd Grade Teacher Curriculum',
        nameHindi: 'रीट मेन्स 3rd ग्रेड पाठ्यक्रम',
        emoji: '🏜️',
        chapters: [
          {
            id: 'rajasthan-gk-culture',
            name: 'Rajasthan Heritage, Forts & Fairs',
            nameHindi: 'राजस्थान धरोहर, दुर्ग व मेले',
            topics: [
              {
                id: 'rajasthan-geography-drainage',
                name: 'Rajasthan Geography: 4 Physical Divisions, Drainage Systems, Lakes & Minerals',
                nameHindi: 'राजस्थान भूगोल: भौतिक प्रदेश, अपवाह तंत्र (नदियां व झीलें), जलवायु एवं खनिज संपदा',
                namePunjabi: 'ਰਾਜਸਥਾਨ ਭੂਗੋਲ: ਭੌਤਿਕ ਵੰਡ, ਨਦੀ ਪ੍ਰਣਾਲੀ, ਝੀਲਾਂ, ਜਲਵਾਯੂ ਅਤੇ ਖਣਿਜ ਸੰਪਤੀ',
                subtopics: [
                  'Four Physical Divisions: Western Sandy Plain (Thar Desert 61.11%), Aravalli Range (Guru Shikhar 1722m), Eastern Plains (Chhappan Plain), Hadoti Plateau',
                  'Three Drainage Systems: Arabian Sea (Luni, Mahi - cuts Tropic of Cancer twice), Bay of Bengal (Chambal, Banas 512km), Inland drainage (Ghaggar, Kantli)',
                  'Saline & Freshwater Lakes: Sambhar Lake (8.7% salt production, Ramsar site 1990), Pachpadra, Pichola, Rajsamand (Rajprashasti on Nau Chowki Pal)',
                  'Climate & Soils: Koppen classification (BWhw, BShw, Cwg, Aw), Agro-climatic zones, Soil types and conservation',
                  'Mineral Wealth: 100% monopoly in Wollastonite and Jasper; Lead-Zinc (Zawar, Rampura-Agucha), Copper (Khetri), Rock Phosphate (Jhamarkotra)',
                ],
                examQuestions: '20-25',
                difficulty: 'medium',
              },
              {
                id: 'rajasthan-history-culture',
                name: 'Rajasthan History & Heritage: Ancient Civilizations, Forts, 1857 Revolt & Lok Devtas',
                nameHindi: 'राजस्थान इतिहास एवं संस्कृति: प्राचीन सभ्यताएं, दुर्ग, 1857 क्रांति, लोक देवता एवं मेले',
                namePunjabi: 'ਰਾਜਸਥਾਨ ਇਤਿਹਾਸ ਤੇ ਸੱਭਿਆਚਾਰ: ਪ੍ਰਾਚੀਨ ਸੱਭਿਅਤਾਵਾਂ, ਕਿਲ੍ਹੇ, 1857 ਵਿਦਰੋਹ, ਲੋਕ ਦੇਵਤੇ ਅਤੇ ਮੇਲੇ',
                subtopics: [
                  'Ancient Sites: Kalibanga (Hanumangarh - ploughed field, fire altars), Ganeshwar (Sikar - mother of copper cultures), Ahar (Udaipur)',
                  'Medieval Heroes: Maharana Pratap (Battle of Haldighati 1576, Chetak), Rao Chandrasen (Forgotten Hero of Marwar)',
                  '1857 Revolt in Rajasthan: 6 military cantonments (Naseerabad, Neemuch, Erinpura, Deoli, Beawar, Kherwara), Auwa Thakur Kushal Singh',
                  'Integration of Rajasthan: 7 stages (March 17, 1948 Matsya Sangh to November 1, 1950/1956 present Rajasthan, Sardar Patel)',
                  'Art & Architecture: 6 UNESCO Hill Forts (Chittorgarh, Kumbhalgarh, Ranthambore, Amber, Jaisalmer, Gagron), Haveli frescoes, Stepwells',
                  'Folk Culture: Panchpir (Ramdevji, Pabuji, Gogaji, Mehaji, Harbhuji), Folk dances (Ghoomar, Kalbelia UNESCO 2010, Agni Nritya)',
                ],
                examQuestions: '25-30',
                difficulty: 'hard',
              },
              {
                id: 'rajasthan-edu-psychology-rte',
                name: 'Educational Psychology, RTE Act 2009 & Rajasthan RTE Rules 2011',
                nameHindi: 'शैक्षिक मनोविज्ञान, बाल अधिकार (RTE Act 2009), राजस्थान RTE नियम 2011 एवं शैक्षिक परिदृश्य',
                namePunjabi: 'ਸਿੱਖਿਆ ਮਨੋਵਿਗਿਆਨ, RTE ਐਕਟ 2009, ਰਾਜਸਥਾਨ RTE ਨਿਯਮ 2011 ਅਤੇ ਰਾਜ ਵਿੱਦਿਅਕ ਪਰਿਦ੍ਰਿਸ਼',
                subtopics: [
                  'Educational Psychology: Role in teaching-learning, developmental stages of learner (Infancy, Childhood, Adolescence)',
                  'Learning & Personality: Theories of learning, Motivation and achievement, Individual differences, Personality assessment',
                  'RTE Act 2009: 7 chapters, 38 sections; Section 12(1)(c) 25% free seats for disadvantaged, Section 16 non-detention (amended 2019), Pupil-Teacher Ratio (PTR)',
                  'Rajasthan RTE Rules 2011: 10 parts, 29 rules; State Advisory Council, Grievance redressal mechanisms',
                  'Rajasthan Educational Scenario: DIET, SCERT Udaipur, SMILE program, Rajasthan Ke Shiksha Mein Badhte Kadam (RKSMBK), Mahatama Gandhi English Medium Schools',
                ],
                examQuestions: '20-25',
                difficulty: 'medium',
              },
              {
                id: 'rajasthan-heritage-forts',
                name: 'UNESCO Hill Forts of Rajasthan & Culture Overview',
                nameHindi: 'राजस्थान के 6 यूनेस्को पहाड़ी दुर्ग व लोक देवियां समग्र अवलोकन',
                subtopics: [
                  '6 UNESCO Hill Forts of Rajasthan: Chittorgarh, Kumbhalgarh (36 km great wall), Ranthambore, Amber (Jaipur), Jaisalmer (Sonar Qila), Gagron (Water fort)',
                  'Folk Deities: Panchpir (Ramdevji, Pabuji, Gogaji, Mehaji Manglia, Harbhuji)',
                  'Peasant & Tribal Movements: Bijolia Movement (longest non-violent 1897-1941, Vijay Singh Pathik), Begu, Mangarh Dham massacre 1913 (Govind Giri)',
                ],
                examQuestions: '15-20',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'rajasthan-police-si',
    state: 'rajasthan',
    name: 'Rajasthan Sub-Inspector (RPSC SI)',
    nameHindi: 'राजस्थान पुलिस उप-निरीक्षक (SI) भर्ती',
    namePunjabi: 'ਰਾਜਸਥਾਨ ਪੁਲਿਸ ਸਬ-ਇੰਸਪੈਕਟਰ',
    body: 'Rajasthan Public Service Commission (RPSC), Ajmer',
    level: 'Graduation Degree Level',
    totalMarks: 400,
    duration: '4 Hours (2 Hours per Paper)',
    negativeMarking: 0.66,
    officialWebsite: 'https://rpsc.rajasthan.gov.in',
    emoji: '⭐',
    color: '#b91c1c',
    sections: [
      { name: 'Paper I: General Hindi', nameHindi: 'पेपर 1: सामान्य हिंदी', marks: 200, questions: 100 },
      { name: 'Paper II: General Knowledge & General Science', nameHindi: 'पेपर 2: सामान्य ज्ञान व सामान्य विज्ञान', marks: 200, questions: 100 },
    ],
    subjects: [
      {
        id: 'rpsc-si-curriculum',
        name: 'RPSC SI Exam Curriculum',
        nameHindi: 'आरपीएससी एसआई पाठ्यक्रम',
        emoji: '🎖️',
        chapters: [
          {
            id: 'si-hindi-grammar',
            name: 'General Hindi Grammar & Sandhi/Samas',
            nameHindi: 'सामान्य हिंदी व्याकरण व संधि/समास',
            topics: [
              {
                id: 'hindi-grammar-deep',
                name: 'Hindi Vyakaran: Sandhi, Samas, Upsarg, Pratyay',
                nameHindi: 'हिंदी व्याकरण: संधि, समास, उपसर्ग, प्रत्यय व वाक्य शुद्धि',
                subtopics: ['Sandhi (Swar, Vyanjan, Visarga), Samas, Upsarg and Pratyay, Tatsam-Tadbhav, Vakya shuddhi, Muhavare'],
                examQuestions: '100',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'rajasthan-police-constable',
    state: 'rajasthan',
    // NOTE: A primary 'rajasthan-police' entry (exams.ts) also exists with different sections.
    // Both need a source notification PDF to confirm which cycle/post each represents.
    name: 'Rajasthan Police Constable',
    nameHindi: 'राजस्थान पुलिस कांस्टेबल भर्ती',
    namePunjabi: 'ਰਾਜਸਥਾਨ ਪੁਲਿਸ ਕਾਂਸਟੇਬਲ',
    body: 'Rajasthan Police Recruitment Board / Police Headquarters Jaipur',
    level: '12th Senior Secondary Level',
    totalMarks: 150,
    duration: '2 Hours (120 Minutes)',
    negativeMarking: 0.25,
    officialWebsite: 'https://police.rajasthan.gov.in',
    emoji: '🛡️',
    color: '#b91c1c',
    syllabusStatus: 'provisional-archive' as const,
    sections: [
      { name: 'Reasoning, Logic & Basic Computer Knowledge', nameHindi: 'तार्किक योग्यता व कंप्यूटर सामान्य ज्ञान', marks: 60, questions: 60 },
      { name: 'General Knowledge, General Science, Current Affairs & Women/Child Crimes Law', nameHindi: 'सामान्य ज्ञान, सामान्य विज्ञान, समसामयिकी व महिला एवं बाल अपराध कानून', marks: 45, questions: 45 },
      { name: 'Rajasthan History, Culture, Geography, Economy & Polity', nameHindi: 'राजस्थान का इतिहास, कला-संस्कृति, भूगोल व अर्थव्यवस्था', marks: 45, questions: 45 },
    ],
    subjects: [
      {
        id: 'raj-police-constable-domain',
        name: 'Rajasthan Police Constable Curriculum',
        nameHindi: 'राजस्थान पुलिस कांस्टेबल पाठ्यक्रम',
        emoji: '🚔',
        chapters: [
          {
            id: 'raj-constable-core',
            name: 'Reasoning, Computer & Rajasthan Heritage',
            nameHindi: 'रीजनिंग, कंप्यूटर व राजस्थान धरोहर',
            topics: [
              {
                id: 'rajasthan-gk-heritage',
                name: 'Rajasthan History, Forts, Geography & Police Law',
                nameHindi: 'राजस्थान का इतिहास, दुर्ग, भूगोल व पुलिस विधि',
                subtopics: ['Mewar, Marwar, 1857 Revolt, Prajamandal, Aravalli, POCSO Act & IPC/BNS Women Safety provisions'],
                examQuestions: '45',
                difficulty: 'medium',
              },
              {
                id: 'computer-awareness',
                name: 'Basic Computer Literacy & Operating Systems',
                nameHindi: 'मूल कंप्यूटर ज्ञान व एमएस ऑफिस',
                subtopics: ['Hardware, RAM, ROM, MS Office, Internet, Cyber Crime & IT Act fundamentals'],
                examQuestions: '30',
                difficulty: 'easy',
              },
            ],
          },
        ],
      },
    ],
  },
];
