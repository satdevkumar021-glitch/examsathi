// ============================================================
// ExamSathi - Comprehensive Question Bank (PYQs & Model Questions)
// Master Cadre, PSSSB Clerk, Police, REET, CTET
// ============================================================

export interface Question {
  id: string;
  topicId: string;
  subjectId: string;
  examId?: string; // e.g. 'master-cadre', 'clerk', 'police', 'patwari', 'reet', 'ctet'
  examTag: string; // e.g., 'Punjab Master Cadre 2022', 'PSSSB Clerk 2023'
  question: { hi: string; pa?: string; en: string };
  options: {
    A: { hi: string; pa?: string; en: string };
    B: { hi: string; pa?: string; en: string };
    C: { hi: string; pa?: string; en: string };
    D: { hi: string; pa?: string; en: string };
  };
  correct: 'A' | 'B' | 'C' | 'D';
  explanation: { hi: string; pa?: string; en: string };
  thought?: { hi: string; pa?: string; en: string }; // Strategic Examiner Insight & Elimination Technique
  difficulty: 'easy' | 'medium' | 'hard';
  year: number;
}

export const QUESTIONS: Question[] = [
  // -------------------------------------------------------------
  // MODERN INDIA
  // -------------------------------------------------------------
  {
    id: 'q-mod-1',
    topicId: 'modern-india',
    subjectId: 'social-science',
    examTag: 'Punjab Master Cadre 2022',
    question: {
      hi: 'प्लासी का प्रसिद्ध युद्ध 23 जून 1757 को किस नदी के तट पर लड़ा गया था?',
      pa: 'ਪਲਾਸੀ ਦੀ ਮਸ਼ਹੂਰ ਲੜਾਈ 23 ਜੂਨ 1757 ਨੂੰ ਕਿਸ ਦਰਿਆ ਦੇ ਕੰਢੇ ਲੜੀ ਗਈ ਸੀ?',
      en: 'On the banks of which river was the famous Battle of Plassey fought on 23 June 1757?',
    },
    options: {
      A: { hi: 'हुगली नदी', pa: 'ਹੁਗਲੀ ਦਰਿਆ', en: 'Hooghly River' },
      B: { hi: 'भागीरथी नदी', pa: 'ਭਾਗੀਰਥੀ ਦਰਿਆ', en: 'Bhagirathi River' },
      C: { hi: 'पद्मा नदी', pa: 'ਪਦਮਾ ਦਰਿਆ', en: 'Padma River' },
      D: { hi: 'दामोदर नदी', pa: 'ਦਾਮੋਦਰ ਦਰਿਆ', en: 'Damodar River' },
    },
    correct: 'B',
    explanation: {
      hi: 'प्लासी का युद्ध पश्चिम बंगाल के नदिया जिले में भागीरथी नदी के तट पर लड़ा गया था, जिसमें रॉबर्ट क्लाइव ने मीर जाफर के विश्वासघात के कारण नवाब सिराजुद्दौला को पराजित किया।',
      pa: 'ਪਲਾਸੀ ਪੱਛਮੀ ਬੰਗਾਲ ਦੇ ਨਦੀਆ ਜ਼ਿਲ੍ਹੇ ਵਿੱਚ ਭਾਗੀਰਥੀ ਦਰਿਆ ਦੇ ਕੰਢੇ ਸਥਿਤ ਹੈ।',
      en: 'The Battle of Plassey was fought on the banks of the Bhagirathi River in Nadia district of West Bengal.',
    },
    difficulty: 'medium',
    year: 2022,
  },
  {
    id: 'q-mod-2',
    topicId: 'modern-india',
    subjectId: 'social-science',
    examTag: 'Punjab Master Cadre 2021',
    question: {
      hi: '1857 के विद्रोह के समय भारत का गवर्नर जनरल कौन था?',
      pa: '1857 ਦੇ ਗ਼ਦਰ ਸਮੇਂ ਭਾਰਤ ਦਾ ਗਵਰਨਰ ਜਨਰਲ ਕੌਣ ਸੀ?',
      en: 'Who was the Governor-General of India during the 1857 Revolt?',
    },
    options: {
      A: { hi: 'लॉर्ड डलहौजी', pa: 'ਲਾਰਡ ਡਲਹੌਜ਼ੀ', en: 'Lord Dalhousie' },
      B: { hi: 'लॉर्ड कैनिंग', pa: 'ਲਾਰਡ ਕੈਨਿੰਗ', en: 'Lord Canning' },
      C: { hi: 'लॉर्ड रिपन', pa: 'ਲਾਰਡ ਰਿਪਨ', en: 'Lord Ripon' },
      D: { hi: 'लॉर्ड वेलेस्ली', pa: 'ਲਾਰਡ ਵੈਲਜ਼ਲੀ', en: 'Lord Wellesley' },
    },
    correct: 'B',
    explanation: {
      hi: '1857 के विद्रोह के समय लॉर्ड कैनिंग भारत के गवर्नर जनरल थे। 1858 के अधिनियम के बाद वे ही भारत के प्रथम वायसराय भी बने।',
      pa: '1857 ਦੇ ਵਿਦਰੋਹ ਸਮੇਂ ਲਾਰਡ ਕੈਨਿੰਗ ਗਵਰਨਰ ਜਨਰਲ ਸਨ ਅਤੇ 1858 ਵਿੱਚ ਪਹਿਲੇ ਵਾਇਸਰਾਏ ਬਣੇ।',
      en: 'Lord Canning was the Governor-General during the 1857 Revolt and later became the first Viceroy under the Government of India Act 1858.',
    },
    difficulty: 'easy',
    year: 2021,
  },
  {
    id: 'q-mod-3',
    topicId: 'modern-india',
    subjectId: 'social-science',
    examTag: 'PSSSB Clerk 2023',
    question: {
      hi: 'भारतीय राष्ट्रीय कांग्रेस के 1885 के प्रथम अधिवेशन में कुल कितने प्रतिनिधियों ने भाग लिया था?',
      pa: 'ਭਾਰਤੀ ਰਾਸ਼ਟਰੀ ਕਾਂਗਰਸ ਦੇ 1885 ਦੇ ਪਹਿਲੇ ਇਜਲਾਸ ਵਿੱਚ ਕਿੰਨੇ ਡੈਲੀਗੇਟਾਂ ਨੇ ਹਿੱਸਾ ਲਿਆ ਸੀ?',
      en: 'How many delegates attended the first session of the Indian National Congress in 1885?',
    },
    options: {
      A: { hi: '52 प्रतिनिधि', pa: '52 ਡੈਲੀਗੇਟ', en: '52 delegates' },
      B: { hi: '72 प्रतिनिधि', pa: '72 ਡੈਲੀਗੇਟ', en: '72 delegates' },
      C: { hi: '85 प्रतिनिधि', pa: '85 ਡੈਲੀਗੇਟ', en: '85 delegates' },
      D: { hi: '102 प्रतिनिधि', pa: '102 ਡੈਲੀਗੇਟ', en: '102 delegates' },
    },
    correct: 'B',
    explanation: {
      hi: 'बॉम्बे के गोकुलदास तेजपाल संस्कृत कॉलेज में 28 दिसंबर 1885 को आयोजित प्रथम अधिवेशन में 72 प्रतिनिधियों ने भाग लिया था। अध्यक्षता व्योमेश चंद्र बनर्जी ने की थी।',
      pa: 'ਬੰਬਈ ਵਿਖੇ ਹੋਏ ਪਹਿਲੇ ਇਜਲਾਸ ਵਿੱਚ 72 ਡੈਲੀਗੇਟਾਂ ਨੇ ਭਾਗ ਲਿਆ ਸੀ। ਪ੍ਰਧਾਨ ਡਬਲਿਊ.ਸੀ. ਬੈਨਰਜੀ ਸਨ।',
      en: 'Exactly 72 delegates attended the inaugural session of INC held at Gokuldas Tejpal Sanskrit College, Bombay in December 1885 under W.C. Bonnerjee.',
    },
    difficulty: 'easy',
    year: 2023,
  },
  {
    id: 'q-mod-4',
    topicId: 'modern-india',
    subjectId: 'social-science',
    examTag: 'Punjab Master Cadre 2020',
    question: {
      hi: 'महात्मा गांधी ने 1930 में प्रसिद्ध दांडी मार्च किस स्थान से प्रारंभ किया था?',
      pa: 'ਮਹਾਤਮਾ ਗਾਂਧੀ ਨੇ 1930 ਵਿੱਚ ਦਾਂਡੀ ਮਾਰਚ ਕਿੱਥੋਂ ਸ਼ੁਰੂ ਕੀਤਾ ਸੀ?',
      en: 'From which place did Mahatma Gandhi begin the famous Dandi March in 1930?',
    },
    options: {
      A: { hi: 'वर्धा आश्रम', pa: 'ਵਰਧਾ ਆਸ਼ਰਮ', en: 'Wardha Ashram' },
      B: { hi: 'साबरमती आश्रम (अहमदाबाद)', pa: 'ਸਾਬਰਮਤੀ ਆਸ਼ਰਮ', en: 'Sabarmati Ashram (Ahmedabad)' },
      C: { hi: 'पोरबंदर', pa: 'ਪੋਰਬੰਦਰ', en: 'Porbandar' },
      D: { hi: 'चंपारण', pa: 'ਚੰਪਾਰਨ', en: 'Champaran' },
    },
    correct: 'B',
    explanation: {
      hi: '12 मार्च 1930 को गांधी जी ने अपने 78 चुने हुए अनुयायियों के साथ साबरमती आश्रम से दांडी (गुजरात तट) तक 388 किमी की पैदल यात्रा शुरू की थी।',
      pa: '12 ਮਾਰਚ 1930 ਨੂੰ ਸਾਬਰਮਤੀ ਆਸ਼ਰਮ ਤੋਂ 78 ਸਾਥੀਆਂ ਨਾਲ ਦਾਂਡੀ ਮਾਰਚ ਸ਼ੁਰੂ ਕੀਤਾ ਸੀ।',
      en: 'Gandhiji commenced the historic march on March 12, 1930 from Sabarmati Ashram in Ahmedabad, concluding at Dandi on April 6, 1930.',
    },
    difficulty: 'easy',
    year: 2020,
  },
  {
    id: 'q-mod-5',
    topicId: 'modern-india',
    subjectId: 'social-science',
    examTag: 'Punjab Lecturer Cadre 2021',
    question: {
      hi: 'चौरी-चौरा की ऐतिहासिक घटना किस तारीख को हुई थी, जिसके बाद असहयोग आंदोलन वापस लिया गया था?',
      pa: 'ਚੌਰੀ-ਚੌਰਾ ਦੀ ਹਿੰਸਕ ਘਟਨਾ ਕਿਸ ਮਿਤੀ ਨੂੰ ਵਾਪਰੀ ਸੀ?',
      en: 'On which date did the Chauri Chaura incident occur, leading to the withdrawal of Non-Cooperation Movement?',
    },
    options: {
      A: { hi: '1 जनवरी 1922', pa: '1 ਜਨਵਰੀ 1922', en: '1 January 1922' },
      B: { hi: '5 फरवरी 1922', pa: '5 ਫਰਵਰੀ 1922', en: '5 February 1922' },
      C: { hi: '12 मार्च 1922', pa: '12 ਮਾਰਚ 1922', en: '12 March 1922' },
      D: { hi: '13 अप्रैल 1922', pa: '13 ਅਪ੍ਰੈਲ 1922', en: '13 April 1922' },
    },
    correct: 'B',
    explanation: {
      hi: '5 फरवरी 1922 को गोरखपुर के चौरी-चौरा में भीड़ ने पुलिस थाने को आग लगा दी जिसमें 22 पुलिसकर्मी मारे गए। गांधी जी ने 12 फरवरी को बारदोली में आंदोलन वापस ले लिया।',
      pa: '5 ਫਰਵਰੀ 1922 ਨੂੰ ਚੌਰੀ-ਚੌਰਾ ਕਾਂਡ ਹੋਇਆ ਸੀ ਅਤੇ 12 ਫਰਵਰੀ ਨੂੰ ਅੰਦੋਲਨ ਵਾਪਸ ਲਿਆ ਗਿਆ।',
      en: 'The incident took place on February 5, 1922 at Chauri Chaura (Gorakhpur), prompting Gandhi to formally withdraw the movement on February 12, 1922.',
    },
    difficulty: 'medium',
    year: 2021,
  },

  // -------------------------------------------------------------
  // PUNJAB HISTORY & SIKH GURUS
  // -------------------------------------------------------------
  {
    id: 'q-pun-1',
    topicId: 'punjab-history',
    subjectId: 'social-science',
    examTag: 'Punjab Master Cadre 2022',
    question: {
      hi: 'श्री गुरु अर्जुन देव जी ने आदि ग्रंथ साहिब का संकलन किस वर्ष पूर्ण किया था?',
      pa: 'ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦਾ ਸੰਕਲਨ ਕਿਸ ਸਾਲ ਮੁਕੰਮਲ ਕੀਤਾ ਸੀ?',
      en: 'In which year did Sri Guru Arjan Dev Ji complete the compilation of the Adi Granth?',
    },
    options: {
      A: { hi: '1599 ई.', pa: '1599 ਈ.', en: '1599 CE' },
      B: { hi: '1604 ई.', pa: '1604 ਈ.', en: '1604 CE' },
      C: { hi: '1606 ई.', pa: '1606 ਈ.', en: '1606 CE' },
      D: { hi: '1609 ई.', pa: '1609 ਈ.', en: '1609 CE' },
    },
    correct: 'B',
    explanation: {
      hi: 'पंचम पातशाह श्री गुरु अर्जुन देव जी ने 1604 ई. में आदि ग्रंथ का संकलन संपन्न कर हरिमंदिर साहिब में प्रकाश किया। प्रथम मुख्य ग्रंथी बाबा बुड्ढा जी बने।',
      pa: '1604 ਈਸਵੀ ਵਿੱਚ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ ਆਦਿ ਗ੍ਰੰਥ ਦਾ ਸੰਕਲਨ ਮੁਕੰਮਲ ਕੀਤਾ ਅਤੇ ਬਾਬਾ ਬੁੱਢਾ ਜੀ ਪਹਿਲੇ ਗ੍ਰੰਥੀ ਥਾਪੇ ਗਏ।',
      en: 'Guru Arjan Dev Ji completed the compilation of Adi Granth in 1604 CE, and it was installed at Sri Harmandir Sahib with Baba Buddha Ji as the first Head Granthi.',
    },
    difficulty: 'easy',
    year: 2022,
  },
  {
    id: 'q-pun-2',
    topicId: 'punjab-history',
    subjectId: 'social-science',
    examTag: 'Punjab Police SI 2021',
    question: {
      hi: 'अकाल तख्त साहिब की नींव 1609 ई. में किस सिख गुरु साहिब द्वारा रखी गई थी?',
      pa: 'ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਦੀ ਨੀਂਹ 1609 ਈਸਵੀ ਵਿੱਚ ਕਿਸ ਗੁਰੂ ਸਾਹਿਬ ਵੱਲੋਂ ਰੱਖੀ ਗਈ ਸੀ?',
      en: 'By which Sikh Guru was the foundation of Sri Akal Takht Sahib laid in 1609 CE?',
    },
    options: {
      A: { hi: 'श्री गुरु रामदास जी', pa: 'ਸ੍ਰੀ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ', en: 'Sri Guru Ram Das Ji' },
      B: { hi: 'श्री गुरु हरगोबिंद साहिब जी', pa: 'ਸ੍ਰੀ ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ', en: 'Sri Guru Hargobind Sahib Ji' },
      C: { hi: 'श्री गुरु तेग बहादुर जी', pa: 'ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ', en: 'Sri Guru Teg Bahadur Ji' },
      D: { hi: 'श्री गुरु गोबिंद सिंह जी', pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ', en: 'Sri Guru Gobind Singh Ji' },
    },
    correct: 'B',
    explanation: {
      hi: 'छठे गुरु श्री गुरु हरगोबिंद साहिब जी ने 1609 में हरिमंदिर साहिब के सामने अकाल तख्त (काल से रहित का सिंहासन) की स्थापना की तथा मीरी और पीरी की दो तलवारें धारण कीं।',
      pa: 'ਛੇਵੇਂ ਪਾਤਸ਼ਾਹ ਸ੍ਰੀ ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਨੇ 1609 ਵਿੱਚ ਅਕਾਲ ਤਖ਼ਤ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ।',
      en: 'Sixth Guru, Sri Guru Hargobind Sahib Ji established the Akal Takht in 1609 CE representing temporal sovereignty alongside spiritual authority (Miri and Piri).',
    },
    difficulty: 'easy',
    year: 2021,
  },
  {
    id: 'q-pun-3',
    topicId: 'punjab-history',
    subjectId: 'social-science',
    examTag: 'PSSSB Patwari 2023',
    question: {
      hi: 'महाराजा रणजीत सिंह और ब्रिटिश ईस्ट इंडिया कंपनी के बीच अमृतसर की संधि किस वर्ष हस्ताक्षरित हुई थी?',
      pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਅਤੇ ਅੰਗਰੇਜ਼ਾਂ ਵਿਚਕਾਰ ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ ਕਿਸ ਸਾਲ ਹੋਈ ਸੀ?',
      en: 'In which year was the Treaty of Amritsar signed between Maharaja Ranjit Singh and the British?',
    },
    options: {
      A: { hi: '1799 ई.', pa: '1799 ਈ.', en: '1799 CE' },
      B: { hi: '1802 ई.', pa: '1802 ਈ.', en: '1802 CE' },
      C: { hi: '1809 ई.', pa: '1809 ਈ.', en: '1809 CE' },
      D: { hi: '1839 ई.', pa: '1839 ਈ.', en: '1839 CE' },
    },
    correct: 'C',
    explanation: {
      hi: '25 अप्रैल 1809 को चार्ल्स मेटकाफ और महाराजा रणजीत सिंह के बीच अमृतसर की संधि हुई। सतलुज नदी को दोनों राज्यों के बीच सीमा माना गया।',
      pa: '25 ਅਪ੍ਰੈਲ 1809 ਨੂੰ ਸੰਧੀ ਹੋਈ, ਜਿਸ ਰਾਹੀਂ ਸਤਲੁਜ ਦਰਿਆ ਨੂੰ ਸੀਮਾ ਨਿਰਧਾਰਿਤ ਕੀਤਾ ਗਿਆ।',
      en: 'Signed on April 25, 1809 between Charles Metcalfe and Maharaja Ranjit Singh, establishing River Satluj as the permanent border.',
    },
    difficulty: 'easy',
    year: 2023,
  },
  {
    id: 'q-pun-4',
    topicId: 'punjab-history',
    subjectId: 'social-science',
    examTag: 'Punjab Master Cadre 2022',
    question: {
      hi: 'द्वितीय आंग्ल-सिख युद्ध के पश्चात किस ब्रिटिश गवर्नर जनरल ने 29 मार्च 1849 को पंजाब के विलय की घोषणा की थी?',
      pa: 'ਦੂਜੀ ਐਂਗਲੋ-ਸਿੱਖ ਜੰਗ ਤੋਂ ਬਾਅਦ 29 ਮਾਰਚ 1849 ਨੂੰ ਕਿਸ ਨੇ ਪੰਜਾਬ ਦੇ ਰਲੇਵੇਂ ਦਾ ਐਲਾਨ ਕੀਤਾ ਸੀ?',
      en: 'Which Governor-General proclaimed the annexation of Punjab on 29 March 1849 after the 2nd Anglo-Sikh War?',
    },
    options: {
      A: { hi: 'लॉर्ड हार्डिंग', pa: 'ਲਾਰਡ ਹਾਰਡਿੰਗ', en: 'Lord Hardinge' },
      B: { hi: 'लॉर्ड डलहौजी', pa: 'ਲਾਰਡ ਡਲਹੌਜ਼ੀ', en: 'Lord Dalhousie' },
      C: { hi: 'लॉर्ड ऑकलैंड', pa: 'ਲਾਰਡ ਆਕਲੈਂਡ', en: 'Lord Auckland' },
      D: { hi: 'लॉर्ड एलनबरो', pa: 'ਲਾਰਡ ਐਲਨਬਰੋ', en: 'Lord Ellenborough' },
    },
    correct: 'B',
    explanation: {
      hi: 'लॉर्ड डलहौजी ने गुजरात के युद्ध (तोपों की लड़ाई) के बाद 29 मार्च 1849 को पंजाब के ब्रिटिश साम्राज्य में विलय की आधिकारिक घोषणा की।',
      pa: 'ਲਾਰਡ ਡਲਹੌਜ਼ੀ ਨੇ 29 ਮਾਰਚ 1849 ਨੂੰ ਪੰਜਾਬ ਨੂੰ ਬ੍ਰਿਟਿਸ਼ ਸਾਮਰਾਜ ਵਿੱਚ ਮਿਲਾ ਲਿਆ।',
      en: 'Lord Dalhousie issued the proclamation annexing Punjab on March 29, 1849 following the decisive battle of Gujrat.',
    },
    difficulty: 'medium',
    year: 2022,
  },

  // -------------------------------------------------------------
  // INDIAN POLITY - FUNDAMENTAL RIGHTS
  // -------------------------------------------------------------
  {
    id: 'q-pol-1',
    topicId: 'fundamental-rights',
    subjectId: 'social-science',
    examTag: 'Punjab Master Cadre 2022',
    question: {
      hi: 'संविधान के किस अनुच्छेद के तहत अस्पृश्यता (Untouchability) को पूर्णतः समाप्त घोषित किया गया है?',
      pa: 'ਸੰਵਿਧਾਨ ਦੇ ਕਿਸ ਅਨੁਛੇਦ ਅਧੀਨ ਛੂਤ-ਛਾਤ ਦਾ ਖਾਤਮਾ ਕੀਤਾ ਗਿਆ ਹੈ?',
      en: 'Under which article of the Constitution is untouchability completely abolished?',
    },
    options: {
      A: { hi: 'अनुच्छेद 15', pa: 'ਅਨੁਛੇਦ 15', en: 'Article 15' },
      B: { hi: 'अनुच्छेद 16', pa: 'ਅਨੁਛੇਦ 16', en: 'Article 16' },
      C: { hi: 'अनुच्छेद 17', pa: 'ਅਨੁਛੇਦ 17', en: 'Article 17' },
      D: { hi: 'अनुच्छेद 18', pa: 'ਅਨੁਛੇਦ 18', en: 'Article 18' },
    },
    correct: 'C',
    explanation: {
      hi: 'अनुच्छेद 17 अस्पृश्यता का अंत करता है तथा इसका किसी भी रूप में आचरण विधि के अनुसार दंडनीय अपराध घोषित किया गया है।',
      pa: 'ਅਨੁਛੇਦ 17 ਛੂਤ-ਛਾਤ ਦਾ ਮੁਕੰਮਲ ਖਾਤਮਾ ਕਰਦਾ ਹੈ।',
      en: 'Article 17 abolishes untouchability and forbids its practice in any form, making it a punishable offence.',
    },
    difficulty: 'easy',
    year: 2022,
  },
  {
    id: 'q-pol-2',
    topicId: 'fundamental-rights',
    subjectId: 'social-science',
    examTag: 'Punjab Master Cadre 2021',
    question: {
      hi: 'डॉ. बी.आर. अंबेडकर ने किस मौलिक अधिकार को "संविधान का हृदय और आत्मा" कहा था?',
      pa: 'ਡਾ. ਬੀ.ਆਰ. ਅੰਬੇਡਕਰ ਨੇ ਕਿਸ ਅਧਿਕਾਰ ਨੂੰ ਸੰਵਿਧਾਨ ਦਾ ਦਿਲ ਤੇ ਆਤਮਾ ਕਿਹਾ ਸੀ?',
      en: 'Which fundamental right was described by Dr. B.R. Ambedkar as the "Heart and Soul of the Constitution"?',
    },
    options: {
      A: { hi: 'समता का अधिकार (Art. 14)', pa: 'ਸਮਾਨਤਾ ਦਾ ਅਧਿਕਾਰ', en: 'Right to Equality (Art. 14)' },
      B: { hi: 'धार्मिक स्वतंत्रता का अधिकार (Art. 25)', pa: 'ਧਾਰਮਿਕ ਆਜ਼ਾਦੀ ਦਾ ਅਧਿਕਾਰ', en: 'Right to Freedom of Religion (Art. 25)' },
      C: { hi: 'संवैधानिक उपचारों का अधिकार (Art. 32)', pa: 'ਸੰਵਿਧਾਨਕ ਉਪਚਾਰਾਂ ਦਾ ਅਧਿਕਾਰ', en: 'Right to Constitutional Remedies (Art. 32)' },
      D: { hi: 'शिक्षा का अधिकार (Art. 21A)', pa: 'ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ', en: 'Right to Education (Art. 21A)' },
    },
    correct: 'C',
    explanation: {
      hi: 'अनुच्छेद 32 को डॉ. अंबेडकर ने संविधान की आत्मा कहा क्योंकि इसके अभाव में अन्य सभी मौलिक अधिकार अर्थहीन हो जाते हैं।',
      pa: 'ਅਨੁਛੇਦ 32 ਸੁਪਰੀਮ ਕੋਰਟ ਨੂੰ 5 ਰਿੱਟਾਂ ਜਾਰੀ ਕਰਨ ਦਾ ਅਧਿਕਾਰ ਦਿੰਦਾ ਹੈ।',
      en: 'Article 32 allows citizens to approach the Supreme Court directly for the enforcement of fundamental rights via writs.',
    },
    difficulty: 'easy',
    year: 2021,
  },
  {
    id: 'q-pol-3',
    topicId: 'fundamental-rights',
    subjectId: 'social-science',
    examTag: 'REET Level 2 2022',
    question: {
      hi: 'शिक्षा का अधिकार (अनुच्छेद 21A) किस संविधान संशोधन अधिनियम द्वारा संविधान में जोड़ा गया था?',
      pa: 'ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ (21A) ਕਿਹੜੀ ਸੰਵਿਧਾਨਕ ਸੋਧ ਰਾਹੀਂ ਜੋੜਿਆ ਗਿਆ ਸੀ?',
      en: 'By which Constitutional Amendment was the Right to Education (Art. 21A) inserted into the Constitution?',
    },
    options: {
      A: { hi: '42वां संशोधन 1976', pa: '42ਵੀਂ ਸੋਧ 1976', en: '42nd Amendment 1976' },
      B: { hi: '44वां संशोधन 1978', pa: '44ਵੀਂ ਸੋਧ 1978', en: '44th Amendment 1978' },
      C: { hi: '86वां संशोधन 2002', pa: '86ਵੀਂ ਸੋਧ 2002', en: '86th Amendment 2002' },
      D: { hi: '91वां संशोधन 2003', pa: '91ਵੀਂ ਸੋਧ 2003', en: '91st Amendment 2003' },
    },
    correct: 'C',
    explanation: {
      hi: '86वें संविधान संशोधन 2002 द्वारा अनुच्छेद 21A जोड़कर 6 से 14 वर्ष तक के सभी बच्चों के लिए निःशुल्क और अनिवार्य शिक्षा को मौलिक अधिकार बनाया गया।',
      pa: '86ਵੀਂ ਸੋਧ 2002 ਰਾਹੀਂ 6 ਤੋਂ 14 ਸਾਲ ਦੇ ਬੱਚਿਆਂ ਲਈ ਲਾਜ਼ਮੀ ਸਿੱਖਿਆ ਦਾ ਮੌਲਿਕ ਅਧਿਕਾਰ ਬਣਾਇਆ ਗਿਆ।',
      en: 'The 86th Constitutional Amendment Act, 2002 added Article 21A, ensuring free and compulsory education for children aged 6-14 years.',
    },
    difficulty: 'easy',
    year: 2022,
  },
  {
    id: 'q-pol-4',
    topicId: 'fundamental-rights',
    subjectId: 'social-science',
    examTag: 'Punjab Clerk 2023',
    question: {
      hi: 'जब किसी व्यक्ति को गैरकानूनी रूप से हिरासत में लिया जाता है, तो न्यायालय कौन-सी रिट (Writ) जारी करता है?',
      pa: 'ਗੈਰ-ਕਾਨੂੰਨੀ ਹਿਰਾਸਤ ਖਿਲਾਫ ਅਦਾਲਤ ਕਿਹੜੀ ਰਿੱਟ ਜਾਰੀ ਕਰਦੀ ਹੈ?',
      en: 'Which writ is issued by the court when a person is unlawfully detained or arrested?',
    },
    options: {
      A: { hi: 'परमादेश (Mandamus)', pa: 'ਪਰਮਾਦੇਸ਼', en: 'Mandamus' },
      B: { hi: 'बन्दी प्रत्यक्षीकरण (Habeas Corpus)', pa: 'ਬੰਦੀ ਪ੍ਰਤੱਖੀਕਰਨ', en: 'Habeas Corpus' },
      C: { hi: 'अधिकार पृच्छा (Quo-Warranto)', pa: 'ਅਧਿਕਾਰ ਪੁੱਛਗਿੱਛ', en: 'Quo-Warranto' },
      D: { hi: 'उत्प्रेषण (Certiorari)', pa: 'ਉਤਪ੍ਰੇਸ਼ਣ', en: 'Certiorari' },
    },
    correct: 'B',
    explanation: {
      hi: 'हेबियस कॉर्पस (Habeas Corpus) का शाब्दिक अर्थ है "सशरीर प्रस्तुत करो"। यह रिट किसी भी व्यक्ति को गैरकानूनी हिरासत से तुरंत रिहा करने का आदेश देती है।',
      pa: 'ਬੰਦੀ ਪ੍ਰਤੱਖੀਕਰਨ (Habeas Corpus) ਗੈਰ-ਕਾਨੂੰਨੀ ਗ੍ਰਿਫ਼ਤਾਰੀ ਵਿਰੁੱਧ ਜਾਰੀ ਹੁੰਦੀ ਹੈ।',
      en: 'Habeas Corpus literally means "to produce the body", ordering the authority holding a person to bring them before court to check the legality of detention.',
    },
    difficulty: 'medium',
    year: 2023,
  },

  // -------------------------------------------------------------
  // PUNJAB CLERK & COMPUTER AWARENESS
  // -------------------------------------------------------------
  {
    id: 'q-clk-1',
    topicId: 'punjab-clerk-prep',
    subjectId: 'clerk-special',
    examTag: 'PSSSB Clerk 2023',
    question: {
      hi: 'PSSSB क्लर्क परीक्षा में पंजाबी टाइपिंग के लिए न्यूनतम गति और शुद्धता का मानक क्या है?',
      pa: 'PSSSB ਕਲਰਕ ਇਮਤਿਹਾਨ ਵਿੱਚ ਪੰਜਾਬੀ ਟਾਈਪਿੰਗ ਦੀ ਘੱਟੋ-ਘੱਟ ਸਪੀਡ ਅਤੇ ਐਕੂਰੇਸੀ ਕਿੰਨੀ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ?',
      en: 'What is the required speed and accuracy for Punjabi typing in the PSSSB Clerk exam?',
    },
    options: {
      A: { hi: '25 WPM तथा 90% शुद्धता', pa: '25 WPM ਅਤੇ 90% ਸ਼ੁੱਧਤਾ', en: '25 WPM and 90% accuracy' },
      B: { hi: '30 WPM तथा 92% शुद्धता (रावी फॉन्ट)', pa: '30 WPM ਅਤੇ 92% ਸ਼ੁੱਧਤਾ (ਰਾਵੀ ਫੌਂਟ)', en: '30 WPM and 92% accuracy (Raavi Font)' },
      C: { hi: '35 WPM तथा 95% शुद्धता', pa: '35 WPM ਅਤੇ 95% ਸ਼ੁੱਧਤਾ', en: '35 WPM and 95% accuracy' },
      D: { hi: '40 WPM तथा 90% शुद्धता', pa: '40 WPM ਅਤੇ 90% ਸ਼ੁੱਧਤਾ', en: '40 WPM and 90% accuracy' },
    },
    correct: 'B',
    explanation: {
      hi: 'PSSSB क्लर्क भर्ती में रावी फॉन्ट (Unicode) पर 10 मिनट में 300 शब्द (30 WPM) टाइप करने होते हैं और न्यूनतम 92% शुद्धता अनिवार्य है।',
      pa: 'ਰਾਵੀ ਫੌਂਟ ਵਿੱਚ 30 WPM ਅਤੇ 92% ਐਕੂਰੇਸੀ ਲਾਜ਼ਮੀ ਹੈ।',
      en: 'PSSSB mandates 30 WPM on Raavi font with at least 92% accuracy over a 10-minute session (300 words).',
    },
    difficulty: 'easy',
    year: 2023,
  },
  {
    id: 'q-clk-2',
    topicId: 'punjab-clerk-prep',
    subjectId: 'clerk-special',
    examTag: 'PSSSB Clerk 2022',
    question: {
      hi: 'MS Word में वर्तनी और व्याकरण की जांच (Spelling & Grammar Check) हेतु कौन-सी फंक्शन कुंजी (Function Key) का प्रयोग किया जाता है?',
      pa: 'ਐਮ.ਐਸ. ਵਰਡ ਵਿੱਚ ਸਪੈਲਿੰਗ ਚੈੱਕ ਕਰਨ ਲਈ ਕਿਹੜੀ ਫੰਕਸ਼ਨ ਕੀਅ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?',
      en: 'Which Function Key is used in MS Word to trigger Spell Check and Grammar review?',
    },
    options: {
      A: { hi: 'F2', pa: 'F2', en: 'F2' },
      B: { hi: 'F5', pa: 'F5', en: 'F5' },
      C: { hi: 'F7', pa: 'F7', en: 'F7' },
      D: { hi: 'F12', pa: 'F12', en: 'F12' },
    },
    correct: 'C',
    explanation: {
      hi: 'MS Word तथा अन्य ऑफिस सॉफ्टवेयर में F7 कुंजी दबाने से तुरंत Spelling and Grammar डायलॉग बॉक्स खुलता है।',
      pa: 'F7 ਕੀਅ ਸਪੈਲਿੰਗ ਅਤੇ ਵਿਆਕਰਨ ਜਾਂਚ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ।',
      en: 'F7 launches the Spelling and Grammar verification tool in Microsoft Office programs.',
    },
    difficulty: 'easy',
    year: 2022,
  },

  // -------------------------------------------------------------
  // WORLD HISTORY
  // -------------------------------------------------------------
  {
    id: 'q-wh-1',
    topicId: 'world-history',
    subjectId: 'social-science',
    examTag: 'Punjab Master Cadre SST 2022',
    question: {
      hi: 'फ्रांसीसी क्रांति के दौरान बास्तील के जेलखाने का पतन किस ऐतिहासिक तिथि को हुआ था?',
      pa: 'ਬਾਸਤੀਲ ਜੇਲ੍ਹ ਦਾ ਪਤਨ ਕਿਸ ਮਿਤੀ ਨੂੰ ਹੋਇਆ ਸੀ?',
      en: 'On which historic date did the storming of the Bastille occur during the French Revolution?',
    },
    options: {
      A: { hi: '4 जुलाई 1776', pa: '4 ਜੁਲਾਈ 1776', en: '4 July 1776' },
      B: { hi: '14 जुलाई 1789', pa: '14 ਜੁਲਾਈ 1789', en: '14 July 1789' },
      C: { hi: '26 अगस्त 1789', pa: '26 ਅਗਸਤ 1789', en: '26 August 1789' },
      D: { hi: '21 जनवरी 1793', pa: '21 ਜਨਵਰੀ 1793', en: '21 January 1793' },
    },
    correct: 'B',
    explanation: {
      hi: '14 जुलाई 1789 को पेरिस में क्रांतिकारियों ने बास्तील के निरंकुशता के प्रतीक दुर्ग को ध्वस्त किया। यह फ्रांस का राष्ट्रीय दिवस भी है।',
      pa: '14 ਜੁਲਾਈ 1789 ਨੂੰ ਬਾਸਤੀਲ ਦਾ ਪਤਨ ਹੋਇਆ।',
      en: 'On 14 July 1789, the medieval fortress and prison in Paris known as the Bastille was stormed, marking the outbreak of the French Revolution.',
    },
    difficulty: 'easy',
    year: 2022,
  },

  // -------------------------------------------------------------
  // JUDICIARY & LOCAL GOVT
  // -------------------------------------------------------------
  {
    id: 'q-jud-1',
    topicId: 'judiciary',
    subjectId: 'social-science',
    examTag: 'Punjab Master Cadre Civics 2021',
    question: {
      hi: 'सर्वोच्च न्यायालय में न्यायाधीशों की सेवानिवृत्ति की आयु कितनी निर्धारित है?',
      pa: 'ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਜੱਜਾਂ ਦੀ ਰਿਟਾਇਰਮੈਂਟ ਉਮਰ ਕਿੰਨੀ ਹੈ?',
      en: 'What is the retirement age for Judges of the Supreme Court of India?',
    },
    options: {
      A: { hi: '60 वर्ष', pa: '60 ਸਾਲ', en: '60 Years' },
      B: { hi: '62 वर्ष', pa: '62 ਸਾਲ', en: '62 Years' },
      C: { hi: '65 वर्ष', pa: '65 ਸਾਲ', en: '65 Years' },
      D: { hi: '70 वर्ष', pa: '70 ਸਾਲ', en: '70 Years' },
    },
    correct: 'C',
    explanation: {
      hi: 'सर्वोच्च न्यायालय के न्यायाधीश 65 वर्ष की आयु तक पद पर रहते हैं, जबकि उच्च न्यायालय के न्यायाधीश 62 वर्ष की आयु में सेवानिवृत्त होते हैं।',
      pa: 'ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਜੱਜ 65 ਸਾਲ ਦੀ ਉਮਰ ਤੱਕ ਸੇਵਾ ਕਰਦੇ ਹਨ।',
      en: 'Supreme Court judges retire at 65 years, while High Court judges retire at 62.',
    },
    difficulty: 'easy',
    year: 2021,
  },
  {
    id: 'q-lg-1',
    topicId: 'local-govt',
    subjectId: 'social-science',
    examTag: 'PSSSB Patwari 2021',
    question: {
      hi: '73वें संविधान संशोधन अधिनियम द्वारा संविधान में कौन सी अनुसूची जोड़ी गई और इसमें कितने विषय हैं?',
      pa: '73ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਰਾਹੀਂ ਕਿਹੜੀ ਅਨੁਸੂਚੀ ਸ਼ਾਮਲ ਕੀਤੀ ਗਈ ਸੀ?',
      en: 'Which Schedule was added by the 73rd Constitutional Amendment and how many subjects does it contain?',
    },
    options: {
      A: { hi: '10वीं अनुसूची (10 विषय)', pa: '10ਵੀਂ ਅਨੁਸੂਚੀ', en: '10th Schedule (10 subjects)' },
      B: { hi: '11वीं अनुसूची (29 विषय)', pa: '11ਵੀਂ ਅਨੁਸੂਚੀ (29 ਵਿਸ਼ੇ)', en: '11th Schedule (29 subjects)' },
      C: { hi: '12वीं अनुसूची (18 विषय)', pa: '12ਵੀਂ ਅਨੁਸੂਚੀ', en: '12th Schedule (18 subjects)' },
      D: { hi: '9वीं अनुसूची (25 विषय)', pa: '9ਵੀਂ ਅਨੁਸੂਚੀ', en: '9th Schedule (25 subjects)' },
    },
    correct: 'B',
    explanation: {
      hi: '73वें संशोधन (1992) द्वारा संविधान में भाग 9 और 11वीं अनुसूची जोड़ी गई जिसमें पंचायतों हेतु 29 विषय दिए गए हैं।',
      pa: '11ਵੀਂ ਅਨੁਸੂਚੀ ਵਿੱਚ ਪੰਚਾਇਤਾਂ ਲਈ 29 ਵਿਸ਼ੇ ਹਨ।',
      en: 'The 73rd Amendment added the 11th Schedule with 29 functional items for Panchayats.',
    },
    difficulty: 'medium',
    year: 2021,
  },

  // -------------------------------------------------------------
  // ECONOMICS
  // -------------------------------------------------------------
  {
    id: 'q-eco-1',
    topicId: 'indian-economy',
    subjectId: 'social-science',
    examTag: 'Punjab Master Cadre Economics 2022',
    question: {
      hi: 'विशुद्ध राष्ट्रीय आय (National Income) की आधिकारिक माप निम्नलिखित में से किसे माना जाता है?',
      pa: 'ਰਾਸ਼ਟਰੀ ਆਮਦਨ ਦਾ ਅਸਲ ਮਾਪ ਕੀ ਹੈ?',
      en: 'Which of the following aggregates is officially considered as the true National Income of a country?',
    },
    options: {
      A: { hi: 'बाजार मूल्य पर GDP (GDP at MP)', pa: 'GDP at MP', en: 'GDP at Market Price' },
      B: { hi: 'साधन लागत पर NNP (NNP at FC)', pa: 'NNP at FC', en: 'NNP at Factor Cost' },
      C: { hi: 'बाजार मूल्य पर GNP (GNP at MP)', pa: 'GNP at MP', en: 'GNP at Market Price' },
      D: { hi: 'साधन लागत पर NDP (NDP at FC)', pa: 'NDP at FC', en: 'NDP at Factor Cost' },
    },
    correct: 'B',
    explanation: {
      hi: 'साधन लागत पर शुद्ध राष्ट्रीय उत्पाद (NNP at Factor Cost) को ही अर्थशास्त्र में आधिकारिक तौर पर राष्ट्रीय आय कहा जाता है।',
      pa: 'NNP at FC ਨੂੰ ਰਾਸ਼ਟਰੀ ਆਮਦਨ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ।',
      en: 'Net National Product at Factor Cost (NNP at FC) is defined as the official National Income.',
    },
    difficulty: 'medium',
    year: 2022,
  },

  // -------------------------------------------------------------
  // SCIENCE (Physics, Chemistry, Biology)
  // -------------------------------------------------------------
  {
    id: 'q-phy-1',
    topicId: 'physics-concepts',
    subjectId: 'science',
    examTag: 'Punjab Master Cadre Science 2022',
    question: {
      hi: 'निकट दृष्टि दोष (Myopia) के निवारण हेतु किस प्रकार के लेंस का उपयोग किया जाता है?',
      pa: 'ਮਾਇਓਪੀਆ ਨੂੰ ਠੀਕ ਕਰਨ ਲਈ ਕਿਹੜਾ ਲੈਂਜ਼ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
      en: 'Which type of lens is prescribed to correct Myopia (near-sightedness)?',
    },
    options: {
      A: { hi: 'उत्तल लेंस (Convex Lens)', pa: 'ਉੱਤਲ ਲੈਂਜ਼', en: 'Convex Lens' },
      B: { hi: 'अवतल लेंस (Concave Lens)', pa: 'ਅਵਤਲ ਲੈਂਜ਼', en: 'Concave Lens' },
      C: { hi: 'बेलनाकार लेंस (Cylindrical Lens)', pa: 'ਬੇਲਨਾਕਾਰ ਲੈਂਜ਼', en: 'Cylindrical Lens' },
      D: { hi: 'द्विफोकसी लेंस (Bifocal Lens)', pa: 'ਬਾਈਫੋਕਲ ਲੈਂਜ਼', en: 'Bifocal Lens' },
    },
    correct: 'B',
    explanation: {
      hi: 'मायोपिया में दूर की वस्तु का प्रतिबिंब रेटिना के आगे बन जाता है, जिसे फैलाने (diverge करने) हेतु अवतल लेंस (Concave lens) लगाया जाता है।',
      pa: 'ਮਾਇਓਪੀਆ ਲਈ ਅਵਤਲ ਲੈਂਜ਼ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
      en: 'A concave lens diverges incoming light rays to focus properly on the retina for myopic eyes.',
    },
    difficulty: 'easy',
    year: 2022,
  },
  {
    id: 'q-ch-1',
    topicId: 'chemistry-concepts',
    subjectId: 'science',
    examTag: 'Punjab Master Cadre Science 2021',
    question: {
      hi: 'पॉलिंग पैमाने (Pauling Scale) पर आधुनिक आवर्त सारणी में सर्वाधिक विद्युत ऋणात्मक तत्व कौन सा है?',
      pa: 'ਆਵਰਤੀ ਸਾਰਣੀ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਇਲੈਕਟ੍ਰੋਨੈਗੇਟਿਵ ਤੱਤ ਕਿਹੜਾ ਹੈ?',
      en: 'Which is the most electronegative element in the modern periodic table on Pauling scale?',
    },
    options: {
      A: { hi: 'ऑक्सीजन (O)', pa: 'ਆਕਸੀਜਨ', en: 'Oxygen (O)' },
      B: { hi: 'क्लोरीन (Cl)', pa: 'ਕਲੋਰੀਨ', en: 'Chlorine (Cl)' },
      C: { hi: 'फ्लोरीन (F)', pa: 'ਫਲੋਰੀਨ (F)', en: 'Fluorine (F)' },
      D: { hi: 'नाइट्रोजन (N)', pa: 'ਨਾਈਟ੍ਰੋਜਨ', en: 'Nitrogen (N)' },
    },
    correct: 'C',
    explanation: {
      hi: 'फ्लोरीन की विद्युत ऋणात्मकता 4.0 होती है, जो आवर्त सारणी के सभी तत्वों में सर्वाधिक है।',
      pa: 'ਫਲੋਰੀਨ (F) ਦੀ ਇਲੈਕਟ੍ਰੋਨੈਗੇਟਿਵਿਟੀ ਸਭ ਤੋਂ ਵੱਧ 4.0 ਹੈ।',
      en: 'Fluorine has the highest electronegativity of 4.0 on the Pauling scale.',
    },
    difficulty: 'easy',
    year: 2021,
  },
  {
    id: 'q-bio-1',
    topicId: 'biology-concepts',
    subjectId: 'science',
    examTag: 'Punjab Master Cadre Science 2022',
    question: {
      hi: 'कोशिका का "शक्तिगृह" (Powerhouse of the Cell) किसे कहा जाता है?',
      pa: 'ਸੈੱਲ ਦਾ ਪਾਵਰਹਾਊਸ ਕਿਸਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
      en: 'Which organelle is universally known as the "Powerhouse of the Cell"?',
    },
    options: {
      A: { hi: 'राइबोसोम (Ribosome)', pa: 'ਰਾਈਬੋਸੋਮ', en: 'Ribosome' },
      B: { hi: 'माइटोकॉन्ड्रिया (Mitochondria)', pa: 'ਮਾਈਟੋਕੌਂਡਰੀਆ', en: 'Mitochondria' },
      C: { hi: 'लाइसोसोम (Lysosome)', pa: 'ਲਾਈਸੋਸੋਮ', en: 'Lysosome' },
      D: { hi: 'गॉल्जीकाय (Golgi apparatus)', pa: 'ਗਾਲਜੀਕਾਏ', en: 'Golgi Apparatus' },
    },
    correct: 'B',
    explanation: {
      hi: 'माइटोकॉन्ड्रिया में कोशिकीय श्वसन द्वारा ऊर्जा एटीपी (ATP) के रूप में उत्पन्न होती है, इसलिए इसे कोशिका का पावरहाउस कहते हैं।',
      pa: 'ਮਾਈਟੋਕੌਂਡਰੀਆ ਵਿੱਚ ATP ਬਣਦੀ ਹੈ।',
      en: 'Mitochondria generate most of the chemical energy needed by the cell in the form of ATP.',
    },
    difficulty: 'easy',
    year: 2022,
  },

  // -------------------------------------------------------------
  // MATHEMATICS CORE & QUANTITATIVE APTITUDE
  // -------------------------------------------------------------
  {
    id: 'q-mat-1',
    topicId: 'mathematics-core',
    subjectId: 'mathematics',
    examTag: 'Punjab Master Cadre Math 2022',
    question: {
      hi: 'द्विघात समीकरण ax² + bx + c = 0 के मूल वास्तविक और समान (Real and Equal) होने की क्या शर्त है?',
      pa: 'ਕੁਆਡ੍ਰੈਟਿਕ ਸਮੀਕਰਣ ਦੇ ਮੂਲ ਬਰਾਬਰ ਹੋਣ ਦੀ ਸ਼ਰਤ ਕੀ ਹੈ?',
      en: 'What is the condition for the quadratic equation ax² + bx + c = 0 to have real and equal roots?',
    },
    options: {
      A: { hi: 'b² - 4ac > 0', pa: 'b² - 4ac > 0', en: 'b² - 4ac > 0' },
      B: { hi: 'b² - 4ac = 0', pa: 'b² - 4ac = 0', en: 'b² - 4ac = 0' },
      C: { hi: 'b² - 4ac < 0', pa: 'b² - 4ac < 0', en: 'b² - 4ac < 0' },
      D: { hi: 'b² + 4ac = 0', pa: 'b² + 4ac = 0', en: 'b² + 4ac = 0' },
    },
    correct: 'B',
    explanation: {
      hi: 'जब विविक्तकर (Discriminant) D = b² - 4ac = 0 होता है, तो समीकरण के दोनों मूल वास्तविक और समान (-b/2a) होते हैं।',
      pa: "D = b² - 4ac = 0 ਹੋਣ 'ਤੇ ਮੂਲ ਬਰਾਬਰ ਹੁੰਦੇ ਹਨ।",
      en: 'When the discriminant D = b² - 4ac = 0, roots are real and identical.',
    },
    difficulty: 'easy',
    year: 2022,
  },
  {
    id: 'q-qa-1',
    topicId: 'quantitative-aptitude',
    subjectId: 'general-aptitude',
    examTag: 'PSSSB Clerk 2023',
    question: {
      hi: '2 वर्ष के लिए मूलधन P पर R% वार्षिक दर से चक्रवृद्धि ब्याज और साधारण ब्याज के अंतर का सूत्र क्या है?',
      pa: '2 ਸਾਲਾਂ ਦੇ CI ਤੇ SI ਦੇ ਅੰਤਰ ਦਾ ਫਾਰਮੂਲਾ ਕੀ ਹੈ?',
      en: 'What is the formula for the difference between CI and SI for a principal P at rate R% for 2 years?',
    },
    options: {
      A: { hi: 'P × (R / 100)', pa: 'P × (R / 100)', en: 'P × (R / 100)' },
      B: { hi: 'P × (R / 100)²', pa: 'P × (R / 100)²', en: 'P × (R / 100)²' },
      C: { hi: '2P × (R / 100)', pa: '2P × (R / 100)', en: '2P × (R / 100)' },
      D: { hi: 'P × (R / 200)²', pa: 'P × (R / 200)²', en: 'P × (R / 200)²' },
    },
    correct: 'B',
    explanation: {
      hi: '2 वर्षों के चक्रवृद्धि ब्याज (CI) और साधारण ब्याज (SI) का अंतर Difference = P(R/100)² होता है।',
      pa: '2 ਸਾਲਾਂ ਦਾ ਅੰਤਰ = P(R/100)²।',
      en: 'The formula for the 2-year difference between CI and SI is P(R/100)².',
    },
    difficulty: 'easy',
    year: 2023,
  },

  // -------------------------------------------------------------
  // PUNJABI PAPER A & SAHITYA
  // -------------------------------------------------------------
  {
    id: 'q-pa-1',
    topicId: 'punjabi-paper-a',
    subjectId: 'punjabi',
    examTag: 'Punjab Qualifying Paper A 2023',
    question: {
      hi: 'गुरमुखी लिपि में कुल कितने स्वर वाहक (Swar Vahak) अक्षर हैं?',
      pa: 'ਗੁਰਮੁਖੀ ਲਿਪੀ ਵਿੱਚ ਕੁੱਲ ਕਿੰਨੇ ਸਵਰ ਵਾਹਕ ਅੱਖਰ ਹਨ?',
      en: 'How many vowel bearer characters exist in the Gurmukhi script?',
    },
    options: {
      A: { hi: '2 (ੳ, ਅ)', pa: '2', en: '2' },
      B: { hi: '3 (ੳ, ਅ, ੲ)', pa: '3 (ੳ, ਅ, ੲ)', en: '3 (ੳ, ਅ, ੲ)' },
      C: { hi: '5', pa: '5', en: '5' },
      D: { hi: '10', pa: '10', en: '10' },
    },
    correct: 'B',
    explanation: {
      hi: 'गुरमुखी लिपि में 3 स्वर वाहक (ੳ, ਅ, ੲ) होते हैं जिनसे 10 स्वर ध्वनियां (लगां) बनती हैं।',
      pa: 'ਗੁਰਮੁਖੀ ਵਿੱਚ 3 ਸਵਰ ਵਾਹਕ ੳ, ਅ, ੲ ਹਨ।',
      en: 'There are 3 vowel bearers (ੳ, ਅ, ੲ) in Gurmukhi that generate 10 vowel signs.',
    },
    difficulty: 'easy',
    year: 2023,
  },
  {
    id: 'q-ps-1',
    topicId: 'punjabi-sahitya',
    subjectId: 'punjabi',
    examTag: 'Punjab Master Cadre Punjabi 2022',
    question: {
      hi: 'पंजाबी साहित्य में "बिरहा दा सुल्तान" किसे कहा जाता है?',
      pa: 'ਪੰਜਾਬੀ ਸਾਹਿਤ ਵਿੱਚ "ਬਿਰਹਾ ਦਾ ਸੁਲਤਾਨ" ਕਿਸ ਕਵੀ ਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
      en: 'Which poet is commemorated as the "Birha da Sultan" in Punjabi literature?',
    },
    options: {
      A: { hi: 'भाई वीर सिंह', pa: 'ਭਾਈ ਵੀਰ ਸਿੰਘ', en: 'Bhai Vir Singh' },
      B: { hi: 'शिव कुमार बटालवी', pa: 'ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ', en: 'Shiv Kumar Batalvi' },
      C: { hi: 'प्रो. मोहन सिंह', pa: 'ਪ੍ਰੋ. ਮੋਹਨ ਸਿੰਘ', en: 'Prof. Mohan Singh' },
      D: { hi: 'वारिस शाह', pa: 'ਵਾਰਿਸ ਸ਼ਾਹ', en: 'Waris Shah' },
    },
    correct: 'B',
    explanation: {
      hi: 'शिव कुमार बटालवी को उनके दर्द और वियोग भरे गीतों व काव्य-नाटक "लूणा" के कारण "बिरहा दा सुल्तान" कहा जाता है।',
      pa: 'ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ ਨੂੰ ਬਿਰਹਾ ਦਾ ਸੁਲਤਾਨ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
      en: 'Shiv Kumar Batalvi is acclaimed as the Sultan of Pathos (Birha da Sultan).',
    },
    difficulty: 'easy',
    year: 2022,
  },

  // -------------------------------------------------------------
  // HINDI SAHITYA & VYAKARAN
  // -------------------------------------------------------------
  {
    id: 'q-hs-1',
    topicId: 'hindi-sahitya',
    subjectId: 'hindi',
    examTag: 'Punjab Master Cadre Hindi 2022',
    question: {
      hi: 'हिंदी भाषा के लिए पहला ज्ञानपीठ पुरस्कार 1968 में किस कवि को और किस रचना के लिए दिया गया था?',
      pa: 'ਹਿੰਦੀ ਦਾ ਪਹਿਲਾ ਗਿਆਨਪੀਠ ਕਿਸਨੂੰ ਮਿਲਿਆ?',
      en: 'Who won the first Jnanpith Award in Hindi literature in 1968 and for which work?',
    },
    options: {
      A: { hi: 'रामधारी सिंह दिनकर (उर्वशी)', pa: 'ਰਾਮਧਾਰੀ ਸਿੰਘ ਦਿਨਕਰ', en: 'Ramdhari Singh Dinkar (Urvashi)' },
      B: { hi: 'सुमित्रानंदन पंत (चिदंबरा)', pa: 'ਸੁਮਿੱਤਰਾਨੰਦਨ ਪੰਤ (ਚਿਦੰਬਰਾ)', en: 'Sumitranandan Pant (Chidambara)' },
      C: { hi: 'महादेवी वर्मा (यामा)', pa: 'ਮਹਾਦੇਵੀ ਵਰਮਾ', en: 'Mahadevi Varma (Yama)' },
      D: { hi: 'अज्ञेय (कितनी नावों में कितनी बार)', pa: 'ਅਗਿਆਤ', en: 'Agyeya' },
    },
    correct: 'B',
    explanation: {
      hi: 'सुमित्रानंदन पंत को वर्ष 1968 में उनके काव्य संग्रह "चिदंबरा" के लिए हिंदी का प्रथम ज्ञानपीठ पुरस्कार प्राप्त हुआ।',
      pa: 'ਸੁਮਿੱਤਰਾਨੰਦਨ ਪੰਤ ਨੂੰ 1968 ਵਿੱਚ ਚਿਦੰਬਰਾ ਲਈ ਪਹਿਲਾ ਗਿਆਨਪੀਠ ਮਿਲਿਆ।',
      en: 'Sumitranandan Pant received the first Hindi Jnanpith Award in 1968 for Chidambara.',
    },
    difficulty: 'easy',
    year: 2022,
  },
  {
    id: 'q-hv-1',
    topicId: 'hindi-vyakaran',
    subjectId: 'hindi',
    examTag: 'Punjab Master Cadre Hindi 2021',
    question: {
      hi: 'काव्यशास्त्र में किस रस को "रसराज" (रसों का राजा) कहा गया है?',
      pa: 'ਰਸਾਂ ਦਾ ਰਾਜਾ ਕਿਸਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
      en: 'Which Rasa is designated as "Rasaraj" (King of Rasas) in Indian Poetics?',
    },
    options: {
      A: { hi: 'वीर रस', pa: 'ਵੀਰ ਰਸ', en: 'Veer Rasa' },
      B: { hi: 'करुण रस', pa: 'ਕਰੁਣ ਰਸ', en: 'Karun Rasa' },
      C: { hi: 'श्रृंगार रस', pa: 'ਸ਼੍ਰਿੰਗਾਰ ਰਸ', en: 'Shringar Rasa' },
      D: { hi: 'शांत रस', pa: 'ਸ਼ਾਂਤ ਰਸ', en: 'Shant Rasa' },
    },
    correct: 'C',
    explanation: {
      hi: 'श्रृंगार रस (स्थायी भाव: रति) को सभी रसों में श्रेष्ठ होने के कारण रसराज कहा जाता है।',
      pa: 'ਸ਼੍ਰਿੰਗਾਰ ਰਸ ਨੂੰ ਰਸਰਾਜ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
      en: 'Shringar Rasa (erotic/romantic emotion) is canonically referred to as the King of Rasas.',
    },
    difficulty: 'easy',
    year: 2021,
  },

  // -------------------------------------------------------------
  // ENGLISH GRAMMAR & LITERATURE
  // -------------------------------------------------------------
  {
    id: 'q-eng-1',
    topicId: 'english-grammar-lit',
    subjectId: 'english',
    examTag: 'Punjab Master Cadre English 2022',
    question: {
      hi: 'विलियम शेक्सपियर के सॉनेट (Shakespearean Sonnet) की राइम स्कीम क्या है?',
      pa: 'ਸ਼ੇਕਸਪੀਅਰ ਦੇ ਸੌਨੇਟ ਦੀ ਰਾਈਮ ਸਕੀਮ ਕੀ ਹੈ?',
      en: 'What is the standard rhyme scheme of a Shakespearean (English) Sonnet?',
    },
    options: {
      A: { hi: 'ABBA ABBA CDE CDE', pa: 'ABBA ABBA CDE CDE', en: 'ABBA ABBA CDE CDE' },
      B: { hi: 'ABAB CDCD EFEF GG', pa: 'ABAB CDCD EFEF GG', en: 'ABAB CDCD EFEF GG' },
      C: { hi: 'ABAB BCBC CDCD EE', pa: 'ABAB BCBC CDCD EE', en: 'ABAB BCBC CDCD EE' },
      D: { hi: 'AABB CCDD EEFF GG', pa: 'AABB CCDD EEFF GG', en: 'AABB CCDD EEFF GG' },
    },
    correct: 'B',
    explanation: {
      hi: 'शेक्सपिरियन सॉनेट में 3 चतुष्पदी (Quatrains) और 1 दोहा (Couplet) होता है, जिसकी राइम स्कीम ABAB CDCD EFEF GG होती है।',
      pa: 'ਰਾਈਮ ਸਕੀਮ ABAB CDCD EFEF GG ਹੁੰਦੀ ਹੈ।',
      en: 'A Shakespearean sonnet consists of three quatrains and a couplet rhyming ABAB CDCD EFEF GG.',
    },
    difficulty: 'easy',
    year: 2022,
  },

  // -------------------------------------------------------------
  // PATWARI & POLICE
  // -------------------------------------------------------------
  {
    id: 'q-pat-1',
    topicId: 'patwari-agriculture-accounts',
    subjectId: 'patwari-special',
    examTag: 'Punjab Patwari 2021',
    question: {
      hi: 'पंजाब में 1 एकड़ (किल्ला) में कितने कनाल और कितने वर्ग गज होते हैं?',
      pa: 'ਪੰਜਾਬ ਵਿੱਚ 1 ਕਿੱਲੇ ਵਿੱਚ ਕਿੰਨੇ ਕਨਾਲ ਹੁੰਦੇ ਹਨ?',
      en: 'How many Kanals and square yards constitute 1 Acre (Killa) in Punjab revenue standards?',
    },
    options: {
      A: { hi: '4 कनाल (2420 वर्ग गज)', pa: '4 ਕਨਾਲ', en: '4 Kanals (2420 sq yards)' },
      B: { hi: '8 कनाल (4840 वर्ग गज)', pa: '8 ਕਨਾਲ (4840 ਵਰਗ ਗਜ਼)', en: '8 Kanals (4840 sq yards)' },
      C: { hi: '10 कनाल (5000 वर्ग गज)', pa: '10 ਕਨਾਲ', en: '10 Kanals (5000 sq yards)' },
      D: { hi: '12 कनाल (6000 वर्ग गज)', pa: '12 ਕਨਾਲ', en: '12 Kanals (6000 sq yards)' },
    },
    correct: 'B',
    explanation: {
      hi: 'पंजाब में 1 किल्ले / एकड़ में 8 कनाल होते हैं (1 कनाल = 20 मरला), जो 4840 वर्ग गज अथवा 43,560 वर्ग फीट के बराबर होता है।',
      pa: '1 ਕਿੱਲਾ = 8 ਕਨਾਲ = 4840 ਵਰਗ ਗਜ਼ = 43,560 ਵਰਗ ਫੁੱਟ।',
      en: 'In Punjab, 1 Acre (Killa) = 8 Kanals = 4,840 square yards = 43,560 square feet.',
    },
    difficulty: 'easy',
    year: 2021,
  },
  {
    id: 'q-pol-1',
    topicId: 'police-law-basics',
    subjectId: 'police-special',
    examTag: 'Punjab Police SI 2021',
    question: {
      hi: 'किस ऐतिहासिक मामले में सर्वोच्च न्यायालय ने पुलिस द्वारा गिरफ्तारी हेतु 11 अनिवार्य दिशानिर्देश जारी किए?',
      pa: 'ਕਿਸ ਕੇਸ ਵਿੱਚ ਗ੍ਰਿਫ਼ਤਾਰੀ ਨਿਯਮ ਜਾਰੀ ਹੋਏ?',
      en: 'In which landmark case did the Supreme Court lay down 11 mandatory guidelines for arrest and detention by police?',
    },
    options: {
      A: { hi: 'मेनका गांधी बनाम भारत संघ (1978)', pa: 'ਮੇਨਕਾ ਗਾਂਧੀ ਕੇਸ', en: 'Maneka Gandhi vs Union of India (1978)' },
      B: { hi: 'डी.के. बसु बनाम पश्चिम बंगाल राज्य (1997)', pa: 'ਡੀ.ਕੇ. ਬਾਸੂ ਬਨਾਮ ਪੱਛਮੀ ਬੰਗਾਲ (1997)', en: 'D.K. Basu vs State of West Bengal (1997)' },
      C: { hi: 'केशवानंद भारती केस (1973)', pa: 'ਕੇਸ਼ਵਾਨੰਦ ਭਾਰਤੀ ਕੇਸ', en: 'Kesavananda Bharati case (1973)' },
      D: { hi: 'विशाखा बनाम राजस्थान राज्य (1997)', pa: 'ਵਿਸ਼ਾਖਾ ਕੇਸ', en: 'Vishaka vs State of Rajasthan (1997)' },
    },
    correct: 'B',
    explanation: {
      hi: 'डी.के. बसु मामले (1997) में सर्वोच्च न्यायालय ने पुलिस हिरासत में यातना रोकने और पारदर्शी गिरफ्तारी हेतु 11 बिंदु तय किए।',
      pa: 'ਡੀ.ਕੇ. ਬਾਸੂ ਕੇਸ ਵਿੱਚ ਗ੍ਰਿਫ਼ਤਾਰੀ ਸੰਬੰਧੀ ਨਿਯਮ ਦਿੱਤੇ ਗਏ।',
      en: 'D.K. Basu vs State of West Bengal (1997) established binding guidelines for police arrest and detention.',
    },
    difficulty: 'easy',
    year: 2021,
  },

  // -------------------------------------------------------------
  // CHILD DEVELOPMENT & PEDAGOGY
  // -------------------------------------------------------------
  {
    id: 'q-cdp-1',
    topicId: 'child-development-pedagogy',
    subjectId: 'pedagogy',
    examTag: 'CTET / REET 2022',
    question: {
      hi: 'जीन पियाजे के अनुसार "संरक्षण" (Conservation) की क्षमता बालक में किस अवस्था में विकसित होती है?',
      pa: 'ਪਿਆਜੇ ਅਨੁਸਾਰ ਕੰਜ਼ਰਵੇਸ਼ਨ ਕਿਸ ਸਟੇਜ ਵਿੱਚ ਆਉਂਦੀ ਹੈ?',
      en: 'According to Jean Piaget, during which stage does a child develop the concept of Conservation?',
    },
    options: {
      A: { hi: 'संवेदी-पेशीय अवस्था (Sensorimotor)', pa: 'ਸੰਵੇਦੀ-ਪੇਸ਼ੀ ਅਵਸਥਾ', en: 'Sensorimotor Stage' },
      B: { hi: 'पूर्व-संक्रियात्मक अवस्था (Pre-operational)', pa: 'ਪੂਰਵ-ਸੰਕ੍ਰਿਆਤਮਕ ਅਵਸਥਾ', en: 'Pre-operational Stage' },
      C: { hi: 'मूर्त संक्रियात्मक अवस्था (Concrete Operational)', pa: 'ਮੂਰਤ ਸੰਕ੍ਰਿਆਤਮਕ ਅਵਸਥਾ', en: 'Concrete Operational Stage' },
      D: { hi: 'औपचारिक संक्रियात्मक अवस्था (Formal Operational)', pa: 'ਅਮੂਰਤ ਸੰਕ੍ਰਿਆਤਮਕ ਅਵਸਥਾ', en: 'Formal Operational Stage' },
    },
    correct: 'C',
    explanation: {
      hi: 'मूर्त संक्रियात्मक अवस्था (7-11 वर्ष) में बालक में संरक्षण (Conservation), पलटावी (Reversibility) और वर्गीकरण की क्षमता आती है।',
      pa: 'ਮੂਰਤ ਸੰਕ੍ਰਿਆਤਮਕ ਅਵਸਥਾ (7-11 ਸਾਲ) ਵਿੱਚ ਕੰਜ਼ਰਵੇਸ਼ਨ ਆਉਂਦੀ ਹੈ।',
      en: 'Conservation and reversibility emerge in the Concrete Operational Stage (ages 7 to 11).',
    },
    difficulty: 'easy',
    year: 2022,
  },

  // -------------------------------------------------------------
  // RAJASTHAN GK
  // -------------------------------------------------------------
  {
    id: 'q-raj-1',
    topicId: 'rajasthan-gk-heritage',
    subjectId: 'rajasthan-gk',
    examTag: 'REET Level 1 2022',
    question: {
      hi: 'अरावली पर्वतमाला की सर्वोच्च चोटी "गुरु शिखर" (1722 मीटर) राजस्थान के किस जिले में स्थित है?',
      pa: 'ਗੁਰੂ ਸ਼ਿਖਰ ਕਿਸ ਜ਼ਿਲ੍ਹੇ ਵਿੱਚ ਸਥਿਤ ਹੈ?',
      en: 'In which district of Rajasthan is Guru Shikhar (1,722 m), the highest peak of Aravallis, located?',
    },
    options: {
      A: { hi: 'उदयपुर', pa: 'ਉਦੈਪੁਰ', en: 'Udaipur' },
      B: { hi: 'सिरोही (माउंट आबू)', pa: 'ਸਿਰੋਹੀ (ਮਾਊਂਟ ਆਬੂ)', en: 'Sirohi (Mount Abu)' },
      C: { hi: 'राजसमंद', pa: 'ਰਾਜਸਮੰਦ', en: 'Rajsamand' },
      D: { hi: 'जयपुर', pa: 'ਜੈਪੁਰ', en: 'Jaipur' },
    },
    correct: 'B',
    explanation: {
      hi: 'गुरु शिखर (1722 मीटर) सिरोही जिले के माउंट आबू में स्थित है, जिसे कर्नल जेम्स टॉड ने "संतों का शिखर" कहा था।',
      pa: 'ਗੁਰੂ ਸ਼ਿਖਰ ਸਿਰੋਹੀ ਜ਼ਿਲ੍ਹੇ ਦੇ ਮਾਊਂਟ ਆਬੂ ਵਿੱਚ ਹੈ।',
      en: 'Guru Shikhar is situated in Mount Abu within Sirohi district of Rajasthan.',
    },
    difficulty: 'easy',
    year: 2022,
  },
];

import { REFERENCE_SST_QUESTIONS } from './questions/reference_questions';
import { SST_MISSING_QUESTIONS } from './questions/sst_missing_questions';
import { MASTER_CADRE_10YR_PYQS } from './questions/master_cadre_pyqs';
import { TWENTY_YEAR_EXAM_PYQS } from './questions/twenty_year_pyqs';

export const ALL_QUESTIONS: Question[] = [
  ...QUESTIONS,
  ...REFERENCE_SST_QUESTIONS,
  ...SST_MISSING_QUESTIONS,
  ...MASTER_CADRE_10YR_PYQS,
  ...TWENTY_YEAR_EXAM_PYQS,
];

// Topic alias mapping to ensure cross-compatibility between syllabus IDs and reference IDs
const TOPIC_ALIASES: Record<string, string[]> = {
  'ancient-india': ['sst-harappa', 'sst-buddhism-jainism', 'sst-maurya'],
  'medieval-india': ['sst-medieval-india', 'sst-punjab-sikh'],
  'punjab-history': ['sst-punjab-history-deep', 'sst-punjab-sikh'],
  'modern-india': ['sst-national-movement'],
  'fundamental-rights': ['sst-fundamental-rights', 'sst-constitution'],
  'parliament': ['sst-legislature', 'sst-executive'],
  'judiciary': ['sst-judiciary'],
  'local-govt': ['sst-federal-local'],
  'indian-economy': ['sst-indian-economy-deep', 'sst-economic-sectors', 'sst-national-income', 'sst-demand-supply', 'sst-inflation-employment', 'sst-development', 'sst-trade'],
  'world-history': ['sst-world-history-modern', 'sst-renaissance', 'sst-french-revolution', 'sst-industrial-revolution', 'sst-world-wars'],
  'punjab-geography': ['sst-geo-punjab', 'sst-geo-monsoon'],
  'physical-geography': ['sst-india-geography', 'sst-geo-earth', 'sst-geo-atmosphere', 'sst-geo-tectonics', 'sst-geo-landforms', 'sst-geo-oceans', 'sst-geo-environment'],
};

export function getQuestionsByTopic(topicId: string): Question[] {
  // 1. Direct match
  const directMatches = ALL_QUESTIONS.filter(q => q.topicId === topicId);
  if (directMatches.length > 0) return directMatches;

  // 2. Alias match
  const aliases = TOPIC_ALIASES[topicId];
  if (aliases && aliases.length > 0) {
    const aliasMatches = ALL_QUESTIONS.filter(q => aliases.includes(q.topicId));
    if (aliasMatches.length > 0) return aliasMatches;
  }

  // 3. Reverse alias match (if queried with a reference ID)
  for (const [canonicalId, refList] of Object.entries(TOPIC_ALIASES)) {
    if (refList.includes(topicId)) {
      const canonicalMatches = ALL_QUESTIONS.filter(q => q.topicId === canonicalId);
      if (canonicalMatches.length > 0) return canonicalMatches;
    }
  }

  // 4. Fallback to general question pool
  return ALL_QUESTIONS.slice(0, 10);
}

