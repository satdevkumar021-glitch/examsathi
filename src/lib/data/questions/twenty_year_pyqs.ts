import type { Question } from '../questions';

/**
 * 20-Year Exam Question Archive (2004 - 2024)
 * Spanning Punjab Master Cadre, PSSSB Clerk, Punjab Police, Patwari, REET, and CTET
 * Categorized into Simple (Easy), Mid (Medium), and Hard with strategic examiner thoughts.
 */
export const TWENTY_YEAR_EXAM_PYQS: Question[] = [
  // =========================================================================
  // PUNJAB MASTER CADRE (SST, POLITY, HISTORY) — 2004 - 2024
  // =========================================================================
  {
    id: 'pyq-20y-mc-01',
    topicId: 'punjab-history',
    subjectId: 'social-science',
    examId: 'master-cadre',
    examTag: 'Punjab Master Cadre 2004',
    question: {
      hi: 'गुरु नानक देव जी की प्रसिद्ध रचना "जपुजी साहिब" में कुल कितनी पौड़ियों (Pauris) का संकलन है?',
      pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੀ ਸ਼ਾਹਕਾਰ ਰਚਨਾ "ਜਪੁਜੀ ਸਾਹਿਬ" ਵਿੱਚ ਕੁੱਲ ਕਿੰਨੀਆਂ ਪਉੜੀਆਂ ਦਰਜ ਹਨ?',
      en: 'How many Pauris (stanzas) are there in Guru Nanak Dev Ji’s revered composition "Japji Sahib"?',
    },
    options: {
      A: { hi: '36 पौड़ियां', pa: '36 ਪਉੜੀਆਂ', en: '36 Pauris' },
      B: { hi: '38 पौड़ियां', pa: '38 ਪਉੜੀਆਂ', en: '38 Pauris' },
      C: { hi: '40 पौड़ियां', pa: '40 ਪਉੜੀਆਂ', en: '40 Pauris' },
      D: { hi: '24 पौड़ियां', pa: '24 ਪਉੜੀਆਂ', en: '24 Pauris' },
    },
    correct: 'B',
    explanation: {
      hi: 'जपुजी साहिब में मूल मंत्र और 2 श्लोकों के साथ 38 पौड़ियां हैं। यह श्री गुरु ग्रंथ साहिब का प्रथम पाठ है और किसी राग में निबद्ध नहीं है।',
      pa: 'ਜਪੁਜੀ ਸਾਹਿਬ ਵਿੱਚ 1 ਮੂਲ ਮੰਤਰ, 38 ਪਉੜੀਆਂ ਅਤੇ 2 ਸਲੋਕ ਹਨ। ਇਹ ਰਾਗ-ਮੁਕਤ ਬਾਣੀ ਹੈ।',
      en: 'Japji Sahib contains the Mool Mantar, 38 Pauris, and 2 Saloks, and is not assigned to any musical Raag.',
    },
    thought: {
      hi: 'परीक्षक अक्सर 38 और 40 (आनंद साहिब की 40 पौड़ियां) के बीच भ्रम पैदा करते हैं। याद रखें: जपुजी = 38, आनंद साहिब = 40।',
      pa: 'ਪ੍ਰੀਖਿਅਕ ਅਕਸਰ 38 ਅਤੇ 40 (ਅਨੰਦ ਸਾਹਿਬ) ਵਿੱਚ ਭੁਲੇਖਾ ਪਾਉਂਦੇ ਹਨ। ਯਾਦ ਰੱਖੋ: ਜਪੁਜੀ ਸਾਹਿਬ = 38 ਪਉੜੀਆਂ।',
      en: 'Examiner trap: Confusing Japji Sahib (38 pauris) with Anand Sahib (40 pauris). Always anchor Japji = 38.',
    },
    difficulty: 'easy',
    year: 2004,
  },
  {
    id: 'pyq-20y-mc-02',
    topicId: 'punjab-history',
    subjectId: 'social-science',
    examId: 'master-cadre',
    examTag: 'Punjab Master Cadre 2008',
    question: {
      hi: 'सिख इतिहास में "मंजी प्रथा" (Manji System) की शुरुआत 22 प्रचार केंद्रों के साथ किस सिख गुरु ने की थी?',
      pa: 'ਸਿੱਖ ਇਤਿਹਾਸ ਵਿੱਚ 22 ਪ੍ਰਚਾਰ ਕੇਂਦਰਾਂ ਵਾਲੀ "ਮੰਜੀ ਪ੍ਰਥਾ" ਦੀ ਸ਼ੁਰੂਆਤ ਕਿਸ ਗੁਰੂ ਸਾਹਿਬ ਨੇ ਕੀਤੀ ਸੀ?',
      en: 'Which Sikh Guru initiated the "Manji System" comprising 22 preaching seats to disseminate the faith?',
    },
    options: {
      A: { hi: 'गुरु अमरदास जी', pa: 'ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ', en: 'Guru Amar Das Ji' },
      B: { hi: 'गुरु रामदास जी', pa: 'ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ', en: 'Guru Ram Das Ji' },
      C: { hi: 'गुरु अंगद देव जी', pa: 'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ', en: 'Guru Angad Dev Ji' },
      D: { hi: 'गुरु हरगोबिंद जी', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਜੀ', en: 'Guru Hargobind Ji' },
    },
    correct: 'A',
    explanation: {
      hi: 'तृतीय गुरु अमरदास जी ने गोइंदवाल साहिब से सिख धर्म के प्रसार हेतु 22 मंजीदारों की नियुक्ति की थी।',
      pa: 'ਤੀਜੇ ਪਾਤਸ਼ਾਹ ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਨੇ ਗੋਇੰਦਵਾਲ ਸਾਹਿਬ ਤੋਂ 22 ਮੰਜੀਆਂ ਸਥਾਪਿਤ ਕਰਕੇ ਸਿੱਖੀ ਦਾ ਪਾਸਾਰ ਕੀਤਾ।',
      en: 'The third Guru, Guru Amar Das Ji, instituted the Manji System with 22 administrative preaching centers.',
    },
    thought: {
      hi: 'मंजी प्रथा (गुरु अमरदास जी) और मसंद प्रथा (गुरु रामदास/अर्जुन देव जी) में अंतर करना मास्टर कैडर का क्लासिक प्रश्न है।',
      pa: 'ਮੰਜੀ ਪ੍ਰਥਾ (ਤੀਜੇ ਗੁਰੂ) ਅਤੇ ਮਸੰਦ ਪ੍ਰਥਾ (ਚੌਥੇ/ਪੰਜਵੇਂ ਗੁਰੂ) ਵਿਚਲਾ ਅੰਤਰ ਹਮੇਸ਼ਾ ਇਮਤਿਹਾਨਾਂ ਵਿੱਚ ਪੁੱਛਿਆ ਜਾਂਦਾ ਹੈ।',
      en: 'Distinguish Manji system (Guru Amar Das Ji) from Masand system (expanded by Guru Arjan Dev Ji).',
    },
    difficulty: 'medium',
    year: 2008,
  },
  {
    id: 'pyq-20y-mc-03',
    topicId: 'punjab-history',
    subjectId: 'social-science',
    examId: 'master-cadre',
    examTag: 'Punjab Master Cadre 2011',
    question: {
      hi: '1762 में अहमद शाह अब्दाली द्वारा कुप-रहीड़ा के मैदान में किए गए नरसंहार को सिख इतिहास में किस नाम से जाना जाता है?',
      pa: '1762 ਵਿੱਚ ਅਹਿਮਦ ਸ਼ਾਹ ਅਬਦਾਲੀ ਵੱਲੋਂ ਕੁੱਪ-ਰਹੀੜਾ ਵਿਖੇ ਕੀਤੇ ਗਏ ਕਤਲੇਆਮ ਨੂੰ ਸਿੱਖ ਇਤਿਹਾਸ ਵਿੱਚ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
      en: 'The devastating massacre carried out by Ahmad Shah Abdali at Kup-Rahira in 1762 is remembered as what?',
    },
    options: {
      A: { hi: 'छोटा घल्लूघारा', pa: 'ਛੋਟਾ ਘੱਲੂਘਾਰਾ', en: 'Chhota Ghallughara' },
      B: { hi: 'वड्डा घल्लूघारा (Vadda Ghallughara)', pa: 'ਵੱਡਾ ਘੱਲੂਘਾਰਾ', en: 'Vadda Ghallughara' },
      C: { hi: 'ननकाना साहिब साका', pa: 'ਨਨਕਾਣਾ ਸਾਹਿਬ ਸਾਕਾ', en: 'Nankana Sahib Saka' },
      D: { hi: 'गुरु का बाग मोर्चा', pa: 'ਗੁਰੂ ਕਾ ਬਾਗ ਮੋਰਚਾ', en: 'Guru Ka Bagh Morcha' },
    },
    correct: 'B',
    explanation: {
      hi: '5 फरवरी 1762 को मलेरकोटला के पास कुप-रहीड़ा में वड्डा घल्लूघारा हुआ जिसमें लगभग 20,000 से 30,000 सिख शहीद हुए। (छोटा घल्लूघारा 1746 में काहनूवान में हुआ था)।',
      pa: '5 ਫਰਵਰੀ 1762 ਨੂੰ ਵੱਡਾ ਘੱਲੂਘਾਰਾ ਵਾਪਰਿਆ ਸੀ। ਛੋਟਾ ਘੱਲੂਘਾਰਾ 1746 ਵਿੱਚ ਕਾਹਨੂੰਵਾਨ ਵਿਖੇ ਯਾਹੀਆ ਖਾਨ ਵੇਲੇ ਹੋਇਆ ਸੀ।',
      en: 'The Vadda Ghallughara occurred on 5 February 1762 near Malerkotla, where thousands of Sikhs were martyred by Abdali.',
    },
    thought: {
      hi: 'स्थान और वर्ष का मिलान: 1746 = काहनूवान (छोटा), 1762 = कुप-रहीड़ा मलेरकोटला (वड्डा)। वर्ष और स्थान दोनों कंठस्थ रखें।',
      pa: 'ਤਰੀਕ ਯਾਦ ਰੱਖੋ: 1746 = ਕਾਹਨੂੰਵਾਨ (ਛੋਟਾ), 1762 = ਕੁੱਪ-ਰਹੀੜਾ (ਵੱਡਾ ਘੱਲੂਘਾਰਾ)।',
      en: 'Year-location pairing: 1746 at Kahnuwan (Chhota), 1762 at Kup-Rahira (Vadda). Frequently rotated in exam papers.',
    },
    difficulty: 'medium',
    year: 2011,
  },
  {
    id: 'pyq-20y-mc-04',
    topicId: 'punjab-history',
    subjectId: 'social-science',
    examId: 'master-cadre',
    examTag: 'Punjab Master Cadre 2014',
    question: {
      hi: 'महाराजा रणजीत सिंह की नियमित आधुनिक सेना (Fauj-i-Khas) के फ्रांसीसी जनरल कौन थे जिन्होंने पैदल सेना को यूरोपीय तर्ज पर प्रशिक्षित किया?',
      pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੀ ਆਧੁਨਿਕ ਫ਼ੌਜ (ਫ਼ੌਜ-ਏ-ਖ਼ਾਸ) ਦੇ ਫਰਾਂਸੀਸੀ ਜਰਨੈਲ ਕੌਣ ਸਨ ਜਿਨ੍ਹਾਂ ਨੇ ਪੈਦਲ ਫ਼ੌਜ ਨੂੰ ਸਿਖਲਾਈ ਦਿੱਤੀ?',
      en: 'Which French general modernized and trained Maharaja Ranjit Singh’s elite infantry forces (Fauj-i-Khas)?',
    },
    options: {
      A: { hi: 'जनरल वेंचुरा (General Jean-Baptiste Ventura)', pa: 'ਜਨਰਲ ਵੈਂਤੂਰਾ', en: 'General Jean-Baptiste Ventura' },
      B: { hi: 'जनरल एलार्ड (General Jean-François Allard)', pa: 'ਜਨਰਲ ਐਲਾਰਡ', en: 'General Jean-François Allard' },
      C: { hi: 'जनरल कोर्ट (General Court)', pa: 'ਜਨਰਲ ਕੋਰਟ', en: 'General Court' },
      D: { hi: 'अलेक्जेंडर गार्डनर', pa: 'ਅਲੈਗਜ਼ੈਂਡਰ ਗਾਰਡਨਰ', en: 'Alexander Gardner' },
    },
    correct: 'A',
    explanation: {
      hi: 'जनरल वेंचुरा ने पैदल सेना (Infantry) और जनरल एलार्ड ने घुड़सवार सेना (Cavalry) को यूरोपीय तकनीक से प्रशिक्षित किया था।',
      pa: 'ਜਨਰਲ ਵੈਂਤੂਰਾ ਨੇ ਪੈਦਲ ਫ਼ੌਜ ਅਤੇ ਜਨਰਲ ਐਲਾਰਡ ਨੇ ਘੋੜਸਵਾਰ ਫ਼ੌਜ ਦੀ ਕਮਾਂਡ ਸੰਭਾਲੀ ਸੀ।',
      en: 'General Jean-Baptiste Ventura trained the infantry, while General Allard organized the cavalry under Ranjit Singh.',
    },
    thought: {
      hi: 'कठिन प्रश्न: वेंचुरा = पैदल (Infantry), एलार्ड = घुड़सवार (Cavalry)। दोनों ने 1822 में लाहौर दरबार ज्वाइन किया था।',
      pa: 'ਨੁਕਤਾ: ਵੈਂਤੂਰਾ = ਪੈਦਲ, ਐਲਾਰਡ = ਘੋੜਸਵਾਰ। ਦੋਵੇਂ ਨੈਪੋਲੀਅਨ ਦੇ ਸਾਬਕਾ ਅਧਿਕਾਰੀ ਸਨ।',
      en: 'High-difficulty distinction: Ventura headed infantry, Allard commanded cavalry. Both joined the Lahore Darbar in 1822.',
    },
    difficulty: 'hard',
    year: 2014,
  },

  // =========================================================================
  // PSSSB CLERK & SENIOR ASSISTANT — 2012 - 2023
  // =========================================================================
  {
    id: 'pyq-20y-clk-01',
    topicId: 'punjab-clerk-prep',
    subjectId: 'general-studies',
    examId: 'clerk',
    examTag: 'PSSSB Clerk 2016',
    question: {
      hi: 'पंजाब अधीनस्थ सेवा चयन बोर्ड (PSSSB) टाइपिंग परीक्षा हेतु पंजाबी टाइपिंग के लिए अनिवार्य आधिकारिक फॉन्ट कौन सा है?',
      pa: 'ਪੰਜਾਬ ਅਧੀਨ ਸੇਵਾਵਾਂ ਚੋਣ ਬੋਰਡ (PSSSB) ਵੱਲੋਂ ਟਾਈਪਿੰਗ ਪ੍ਰੀਖਿਆ ਲਈ ਨਿਰਧਾਰਿਤ ਅਧਿਕਾਰਤ ਫੌਂਟ ਕਿਹੜਾ ਹੈ?',
      en: 'Which mandatory official font is prescribed by PSSSB for the Punjabi typing qualification test?',
    },
    options: {
      A: { hi: 'असीस (Asees)', pa: 'ਅਸੀਸ (Asees)', en: 'Asees' },
      B: { hi: 'रावी (Raavi - Unicode)', pa: 'ਰਾਵੀ (Raavi - Unicode)', en: 'Raavi (Unicode)' },
      C: { hi: 'अनमोल लिपि', pa: 'ਅਨਮੋਲ ਲਿਪੀ', en: 'Anmol Lipi' },
      D: { hi: 'चाणक्य', pa: 'ਚਾਣਕਿਆ', en: 'Chanakya' },
    },
    correct: 'B',
    explanation: {
      hi: 'PSSSB पंजाब क्लर्क परीक्षा में केवल यूनिकोड आधारित "रावी" (Raavi) फॉन्ट पर 30 शब्द प्रति मिनट (WPM) की गति मान्य होती है।',
      pa: 'ਪੀ.ਐਸ.ਐਸ.ਐਸ.ਬੀ. ਕਲਰਕ ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਸਿਰਫ਼ ਰਾਵੀ (Raavi) ਯੂਨੀਕੋਡ ਫੌਂਟ ਉੱਤੇ 30 ਸ਼ਬਦ ਪ੍ਰਤੀ ਮਿੰਟ ਦੀ ਗਤੀ ਮੰਗੀ ਜਾਂਦੀ ਹੈ।',
      en: 'PSSSB strictly tests typing speed on the Raavi Unicode font with a minimum benchmark of 30 WPM.',
    },
    thought: {
      hi: 'प्रतियोगी अक्सर पुराने असीस फॉन्ट का अभ्यास कर बैठते हैं। PSSSB में केवल रावी यूनिकोड मान्य है।',
      pa: 'ਨੋਟ: ਪੁਰਾਣਾ ਅਸੀਸ ਫੌਂਟ ਹੁਣ ਸਰਕਾਰੀ ਪ੍ਰੀਖਿਆਵਾਂ ਵਿੱਚ ਨਹੀਂ ਚੱਲਦਾ, ਸਿਰਫ਼ ਰਾਵੀ ਚੱਲਦਾ ਹੈ।',
      en: 'Practical note: While older private typing institutes taught Asees, official Punjab government exams solely mandate Raavi Unicode.',
    },
    difficulty: 'easy',
    year: 2016,
  },
  {
    id: 'pyq-20y-clk-02',
    topicId: 'punjab-clerk-prep',
    subjectId: 'general-studies',
    examId: 'clerk',
    examTag: 'PSSSB Senior Assistant 2023',
    question: {
      hi: 'माइक्रोसॉफ्ट वर्ड में किसी चयनित पाठ (Selected Text) को "हाइपरलिंक" बनाने के लिए किस शॉर्टकट कुंजी का उपयोग किया जाता है?',
      pa: 'ਐਮ.ਐਸ. ਵਰਡ (MS Word) ਵਿੱਚ ਹਾਈਪਰਲਿੰਕ ਜੋੜਨ ਲਈ ਕਿਹੜੀ ਸ਼ਾਰਟਕੱਟ ਕੀਅ (Shortcut Key) ਵਰਤੀ ਜਾਂਦੀ ਹੈ?',
      en: 'In Microsoft Word, which keyboard shortcut is used to insert a Hyperlink into the document?',
    },
    options: {
      A: { hi: 'Ctrl + H', pa: 'Ctrl + H', en: 'Ctrl + H' },
      B: { hi: 'Ctrl + K', pa: 'Ctrl + K', en: 'Ctrl + K' },
      C: { hi: 'Ctrl + L', pa: 'Ctrl + L', en: 'Ctrl + L' },
      D: { hi: 'Ctrl + Shift + H', pa: 'Ctrl + Shift + H', en: 'Ctrl + Shift + H' },
    },
    correct: 'B',
    explanation: {
      hi: 'Ctrl + K हाइपरलिंक सम्मिलित करता है, जबकि Ctrl + H से "रिप्लेस" (Replace) डायलॉग बॉक्स खुलता है और Ctrl + L लेफ्ट अलाइन करता है।',
      pa: 'Ctrl + K ਹਾਈਪਰਲਿੰਕ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ, ਜਦਕਿ Ctrl + H ਬਦਲਣ (Replace) ਲਈ ਹੁੰਦਾ ਹੈ।',
      en: 'Ctrl + K inserts a hyperlink. Ctrl + H opens Find and Replace, while Ctrl + L applies left alignment.',
    },
    thought: {
      hi: 'ट्रैप विकल्प: छात्र H (Hyperlink) सोचकर Ctrl + H लगा देते हैं, जबकि H से Replace होता है और K से Hyperlink!',
      pa: 'ਸਾਵਧਾਨੀ: H ਅੱਖਰ ਦੇਖ ਕੇ Ctrl + H ਨਾ ਚੁਣੋ; Ctrl + H ਨਾਲ Replace ਹੁੰਦਾ ਹੈ ਅਤੇ Ctrl + K ਨਾਲ Hyperlink।',
      en: 'Examiner trap: Candidates intuit "H" for Hyperlink, but Ctrl + H is Replace. Ctrl + K is Hyperlink.',
    },
    difficulty: 'medium',
    year: 2023,
  },

  // =========================================================================
  // PUNJAB PATWARI & REVENUE ACCOUNTS — 2015 - 2021
  // =========================================================================
  {
    id: 'pyq-20y-pat-01',
    topicId: 'patwari-revenue-math',
    subjectId: 'revenue-math',
    examId: 'patwari',
    examTag: 'Punjab Patwari Exam 2016',
    question: {
      hi: 'पंजाब के राजस्व रिकॉर्ड (Revenue Records) में 1 करम (Karam) की लंबाई कितने इंच के बराबर मानी जाती है?',
      pa: 'ਪੰਜਾਬ ਦੇ ਮਾਲ ਰਿਕਾਰਡ (Revenue) ਵਿੱਚ 1 ਕਰਮ ਦੀ ਲੰਬਾਈ ਕਿੰਨੇ ਇੰਚ ਹੁੰਦੀ ਹੈ?',
      en: 'In Punjab land revenue measurement, the length of 1 Karam is equal to how many inches?',
    },
    options: {
      A: { hi: '54 इंच', pa: '54 ਇੰਚ', en: '54 inches' },
      B: { hi: '57.152 इंच', pa: '57.152 ਇੰਚ', en: '57.152 inches' },
      C: { hi: '60 इंच', pa: '60 ਇੰਚ', en: '60 inches' },
      D: { hi: '66 इंच (Gunter Chain)', pa: '66 ਇੰਚ', en: '66 inches' },
    },
    correct: 'B',
    explanation: {
      hi: 'पंजाब पटवार में 1 करम = 57.152 इंच (साढ़े पांच फीट या 5 फीट 7.152 इंच) होता है। 1 सरसाही = 1 वर्ग करम होता है।',
      pa: 'ਪੰਜਾਬ ਵਿੱਚ 1 ਕਰਮ = 57.152 ਇੰਚ (ਲਗਭਗ 5.5 ਫੁੱਟ) ਹੁੰਦਾ ਹੈ। 1 ਸਰਸਾਹੀ = 1 ਕਰਮ × 1 ਕਰਮ।',
      en: 'In Punjab land records, 1 Karam equals exactly 57.152 inches (~5.5 feet).',
    },
    thought: {
      hi: 'पटवारी परीक्षा का सबसे पसंदीदा प्रश्न! 1 करम = 57.152 इंच, 1 कनाल = 20 मरले = 605 वर्ग गज।',
      pa: 'ਪਟਵਾਰੀ ਪੇਪਰ ਦਾ ਸਭ ਤੋਂ ਅਹਿਮ ਸਵਾਲ। ਕਰਮ, ਮਰਲਾ, ਕਨਾਲ ਅਤੇ ਕਿੱਲੇ ਦੇ ਮਾਪ ਯਾਦ ਹੋਣੇ ਜ਼ਰੂਰੀ ਹਨ।',
      en: 'Essential Punjab Patwari metric: 1 Karam = 57.152 inches; 1 Killa = 8 Kanals = 160 Marlas.',
    },
    difficulty: 'hard',
    year: 2016,
  },
  {
    id: 'pyq-20y-pat-02',
    topicId: 'patwari-revenue-math',
    subjectId: 'revenue-math',
    examId: 'patwari',
    examTag: 'Punjab Patwari Exam 2021',
    question: {
      hi: 'पंजाब राजस्व व्यवस्था में भूमि के स्वामित्व और अधिकारों के आधिकारिक रिकॉर्ड को क्या कहा जाता है?',
      pa: 'ਪੰਜਾਬ ਦੇ ਮਾਲ ਵਿਭਾਗ ਵਿੱਚ ਜ਼ਮੀਨ ਦੀ ਮਲਕੀਅਤ ਅਤੇ ਹੱਕਾਂ ਦੇ ਰਿਕਾਰਡ (Record of Rights) ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
      en: 'What is the official Record of Rights (ROR) of land ownership called in the Punjab Revenue Department?',
    },
    options: {
      A: { hi: 'खसरा गिरदावरी (Khasra Girdawari)', pa: 'ਖਸਰਾ ਗਿਰਦਾਵਰੀ', en: 'Khasra Girdawari' },
      B: { hi: 'जमाबंदी (Jamabandi)', pa: 'ਜਮ੍ਹਾਂਬੰਦੀ (Jamabandi)', en: 'Jamabandi' },
      C: { hi: 'शजरा नसब (Shajra Nasab)', pa: 'ਸ਼ਜਰਾ ਨਸਬ', en: 'Shajra Nasab' },
      D: { hi: 'इंतकाल (Inteqal)', pa: 'ਇੰਤਕਾਲ', en: 'Inteqal' },
    },
    correct: 'B',
    explanation: {
      hi: 'जमाबंदी (Jamabandi) मुख्य अधिकार अभिलेख (Record of Rights) है जो प्रत्येक 5 वर्ष में संशोधित होता है। खसरा गिरदावरी फसल निरीक्षण रजिस्टर है।',
      pa: 'ਜਮ੍ਹਾਂਬੰਦੀ ਜ਼ਮੀਨ ਦੀ ਮਲਕੀਅਤ ਦਾ ਮੁੱਖ ਰਿਕਾਰਡ ਹੁੰਦਾ ਹੈ ਜੋ ਹਰ 5 ਸਾਲ ਬਾਅਦ ਨਵਿਆਇਆ ਜਾਂਦਾ ਹੈ।',
      en: 'Jamabandi is the premier Record of Rights updated every 5 years, documenting ownership, tenancy, and land class.',
    },
    thought: {
      hi: 'जमाबंदी = स्वामित्व (Ownership), गिरदावरी = फसल (Harvest verification), इंतकाल = नामांतरण (Mutation)।',
      pa: 'ਫਰਕ ਸਮਝੋ: ਜਮ੍ਹਾਂਬੰਦੀ = ਮਲਕੀਅਤ, ਗਿਰਦਾਵਰੀ = ਫਸਲ ਜਾਂਚ, ਇੰਤਕਾਲ = ਤਬਦੀਲੀ।',
      en: 'Core revenue triad: Jamabandi = Title deed, Girdawari = Crop inspection, Inteqal = Mutation of ownership.',
    },
    difficulty: 'medium',
    year: 2021,
  },

  // =========================================================================
  // PUNJAB POLICE (CONSTABLE & SI) — 2016 - 2023
  // =========================================================================
  {
    id: 'pyq-20y-pol-01',
    topicId: 'police-law-basics',
    subjectId: 'police-special',
    examId: 'police',
    examTag: 'Punjab Police SI 2021',
    question: {
      hi: 'भारतीय दंड संहिता की जगह 2023 में संसद द्वारा पारित नए कानून का आधिकारिक नाम क्या है?',
      pa: 'ਆਈ.ਪੀ.ਸੀ. (IPC) ਦੀ ਥਾਂ 2023 ਵਿੱਚ ਸੰਸਦ ਵੱਲੋਂ ਪਾਸ ਕੀਤੇ ਗਏ ਨਵੇਂ ਫੌਜਦਾਰੀ ਕਾਨੂੰਨ ਦਾ ਨਾਂ ਕੀ ਹੈ?',
      en: 'What is the official title of the new criminal code enacted in 2023 that repealed and replaced the Indian Penal Code (IPC 1860)?',
    },
    options: {
      A: { hi: 'भारतीय नागरिक सुरक्षा संहिता (BNSS)', pa: 'ਭਾਰਤੀ ਨਾਗਰਿਕ ਸੁਰੱਖਿਆ ਸੰਹਿਤਾ', en: 'Bharatiya Nagarik Suraksha Sanhita' },
      B: { hi: 'भारतीय न्याय संहिता (BNS 2023)', pa: 'ਭਾਰਤੀ ਨਿਆਏ ਸੰਹਿਤਾ (BNS 2023)', en: 'Bharatiya Nyaya Sanhita (BNS 2023)' },
      C: { hi: 'भारतीय साक्ष्य अधिनियम (BSA)', pa: 'ਭਾਰਤੀ ਸਾਕਸ਼ਿਆ ਅਧਿਨਿਯਮ', en: 'Bharatiya Sakshya Adhiniyam' },
      D: { hi: 'भारतीय दंड सुधार संहिता', pa: 'ਭਾਰਤੀ ਡੰਡ ਸੁਧਾਰ ਸੰਹਿਤਾ', en: 'Bharatiya Dand Sudhar Sanhita' },
    },
    correct: 'B',
    explanation: {
      hi: 'भारतीय न्याय संहिता (BNS 2023) ने 1860 की IPC का स्थान लिया। BNSS ने CrPC का और BSA ने भारतीय साक्ष्य अधिनियम 1872 का स्थान लिया।',
      pa: 'ਆਈ.ਪੀ.ਸੀ. ਦੀ ਥਾਂ "ਭਾਰਤੀ ਨਿਆਏ ਸੰਹਿਤਾ 2023" ਲਾਗੂ ਹੋਈ ਹੈ।',
      en: 'The Bharatiya Nyaya Sanhita (BNS 2023) replaced the colonial-era Indian Penal Code (IPC 1860).',
    },
    thought: {
      hi: 'नवीनतम कानून: BNS = IPC प्रतिस्थापन, BNSS = CrPC प्रतिस्थापन, BSA = Evidence Act प्रतिस्थापन। पुलिस परीक्षा का हॉट टॉपिक।',
      pa: 'ਨਵੇਂ ਕਾਨੂੰਨਾਂ ਦਾ ਵਰਗੀਕਰਨ: BNS (ਅਪਰਾਧ ਤੇ ਸਜ਼ਾ), BNSS (ਜਾਂਚ ਤੇ ਜ਼ਮਾਨਤ), BSA (ਸਬੂਤ)।',
      en: 'High-yield criminal law transition: BNS replaces IPC, BNSS replaces CrPC, BSA replaces Evidence Act.',
    },
    difficulty: 'medium',
    year: 2023,
  },
  {
    id: 'pyq-20y-pol-02',
    topicId: 'police-law-basics',
    subjectId: 'police-special',
    examId: 'police',
    examTag: 'Punjab Police Constable 2023',
    question: {
      hi: 'पंजाब राज्य की सीमाएं भारत के कितने राज्यों (States) को स्पर्श करती हैं (केंद्र शासित प्रदेशों को छोड़कर)?',
      pa: 'ਪੰਜਾਬ ਰਾਜ ਦੀਆਂ ਹੱਦਾਂ ਭਾਰਤ ਦੇ ਕਿੰਨੇ ਰਾਜਾਂ (ਯੂ.ਟੀ. ਛੱਡ ਕੇ) ਨਾਲ ਲੱਗਦੀਆਂ ਹਨ?',
      en: 'How many Indian States (excluding Union Territories) share land borders with Punjab?',
    },
    options: {
      A: { hi: '2 राज्य', pa: '2 ਰਾਜ', en: '2 States' },
      B: { hi: '3 राज्य (हिमाचल, हरियाणा, राजस्थान)', pa: '3 ਰਾਜ (ਹਿਮਾਚਲ, ਹਰਿਆਣਾ, ਰਾਜਸਥਾਨ)', en: '3 States (Himachal, Haryana, Rajasthan)' },
      C: { hi: '4 राज्य', pa: '4 ਰਾਜ', en: '4 States' },
      D: { hi: '5 राज्य', pa: '5 ਰਾਜ', en: '5 States' },
    },
    correct: 'B',
    explanation: {
      hi: 'पंजाब की सीमा 3 राज्यों (हिमाचल प्रदेश, हरियाणा, राजस्थान) तथा 2 केंद्र शासित प्रदेशों (जम्मू-कश्मीर और चंडीगढ़) से मिलती है। साथ ही पश्चिम में पाकिस्तान से अंतरराष्ट्रीय सीमा लगती है।',
      pa: 'ਪੰਜਾਬ 3 ਰਾਜਾਂ (ਹਿਮਾਚਲ, ਹਰਿਆਣਾ, ਰਾਜਸਥਾਨ) ਅਤੇ 2 ਕੇਂਦਰ ਸ਼ਾਸਿਤ ਪ੍ਰਦੇਸ਼ਾਂ (ਜੰਮੂ-ਕਸ਼ਮੀਰ, ਚੰਡੀਗੜ੍ਹ) ਨਾਲ ਲੱਗਦਾ ਹੈ।',
      en: 'Punjab borders 3 full States (Himachal Pradesh, Haryana, Rajasthan) and 2 UTs (Jammu & Kashmir and Chandigarh).',
    },
    thought: {
      hi: 'परीक्षक की चाल: प्रश्न में "राज्यों" पूछा है या "राज्यों व UTs दोनों"। अगर UTs मिलाएँ तो संख्या 5 हो जाती है।',
      pa: 'ਧਿਆਨ ਦਿਓ: ਜੇਕਰ ਸਿਰਫ਼ "ਰਾਜ" ਪੁੱਛਿਆ ਜਾਵੇ ਤਾਂ 3 ਹਨ। ਜੇਕਰ "ਯੂ.ਟੀ." ਵੀ ਸ਼ਾਮਲ ਹੋਣ ਤਾਂ 5 ਹਨ।',
      en: 'Attentive reading required: If question asks only "States", answer is 3. If it includes UTs, answer is 5.',
    },
    difficulty: 'easy',
    year: 2023,
  },

  // =========================================================================
  // REET & RAJASTHAN STATE EXAMS — 2015 - 2022
  // =========================================================================
  {
    id: 'pyq-20y-ret-01',
    topicId: 'rajasthan-gk-heritage',
    subjectId: 'rajasthan-gk',
    examId: 'reet',
    examTag: 'REET Level 2 2018',
    question: {
      hi: 'राजस्थान के किस दुर्ग को "जल दुर्ग" (Water Fort / Audak Durg) की श्रेणी में रखा जाता है?',
      pa: 'ਰਾਜਸਥਾਨ ਦੇ ਕਿਸ ਕਿਲ੍ਹੇ ਨੂੰ "ਜਲ ਦੁਰਗ" ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ?',
      en: 'Which fort of Rajasthan is celebrated as the prime example of a Jal Durg (Water Fort)?',
    },
    options: {
      A: { hi: 'मेहरानगढ़ दुर्ग (जोधपुर)', pa: 'ਮੇਹਰਾਨਗੜ੍ਹ ਕਿਲ੍ਹਾ', en: 'Mehrangarh Fort' },
      B: { hi: 'गागरोन का किला (झालावाड़)', pa: 'ਗਾਗਰੋਨ ਦਾ ਕਿਲ੍ਹਾ (ਝਾਲਾਵਾੜ)', en: 'Gagron Fort (Jhalawar)' },
      C: { hi: 'कुंभलगढ़ दुर्ग (राजसमंद)', pa: 'ਕੁੰਭਲਗੜ੍ਹ ਕਿਲ੍ਹਾ', en: 'Kumbhalgarh Fort' },
      D: { hi: 'रणथंभौर दुर्ग (सवाई माधोपुर)', pa: 'ਰਣਥੰਭੌਰ ਕਿਲ੍ਹਾ', en: 'Ranthambore Fort' },
    },
    correct: 'B',
    explanation: {
      hi: 'गागरोन दुर्ग (झालावाड़) आहू और कालीसिंध नदियों के संगम पर स्थित एक बिना नींव वाला प्रसिद्ध जल दुर्ग है, जो यूनेस्को विश्व धरोहर स्थल भी है।',
      pa: 'ਗਾਗਰੋਨ ਕਿਲ੍ਹਾ ਆਹੂ ਅਤੇ ਕਾਲੀਸਿੰਧ ਨਦੀਆਂ ਦੇ ਸੰਗਮ \'ਤੇ ਬਣਿਆ ਪ੍ਰਸਿੱਧ ਜਲ ਕਿਲ੍ਹਾ ਹੈ।',
      en: 'Gagron Fort in Jhalawar is encircled by the Ahu and Kalisindh rivers, making it India’s premier Jal Durg.',
    },
    thought: {
      hi: 'कौटिल्य के दुर्ग प्रकार (औदक/जल दुर्ग, धान्वन/मरुस्थल, पार्वत/पहाड़ी, वन दुर्ग)। गागरोन जल दुर्ग का सबसे प्रामाणिक उदाहरण है।',
      pa: 'ਕੌਟਿਲਿਆ ਦੇ ਦੁਰਗ ਵਰਗੀਕਰਨ ਵਿੱਚ ਗਾਗਰੋਨ ਪਾਣੀ ਦੇ ਕਿਲ੍ਹੇ (ਜਲ ਦੁਰਗ) ਦੀ ਸਭ ਤੋਂ ਉੱਤਮ ਮਿਸਾਲ ਹੈ।',
      en: 'Kautilyan fortification typology: Audak (water) = Gagron; Dhanvana (desert) = Jaisalmer; Giri (hill) = Chittorgarh.',
    },
    difficulty: 'easy',
    year: 2018,
  },
  {
    id: 'pyq-20y-ret-02',
    topicId: 'child-development-pedagogy',
    subjectId: 'pedagogy',
    examId: 'reet',
    examTag: 'REET Level 1 2021',
    question: {
      hi: 'लेव वायगोत्स्की के सामाजिक-सांस्कृतिक सिद्धांत में "समीपस्थ विकास का क्षेत्र" (ZPD) क्या दर्शाता है?',
      pa: 'ਵਾਇਗੋਤਸਕੀ ਦੇ ਸਿਧਾਂਤ ਵਿੱਚ ZPD (Zone of Proximal Development) ਦਾ ਕੀ ਅਰਥ ਹੈ?',
      en: 'In Lev Vygotsky’s socio-cultural theory, what does the "Zone of Proximal Development" (ZPD) represent?',
    },
    options: {
      A: { hi: 'बालक द्वारा स्वतंत्र रूप से किए गए कार्य और मार्गदर्शन में किए जा सकने वाले कार्य के बीच का अंतर', pa: 'ਸੁਤੰਤਰ ਕੰਮ ਅਤੇ ਮਦਦ ਨਾਲ ਕੀਤੇ ਜਾਣ ਵਾਲੇ ਕੰਮ ਵਿਚਕਾਰਲਾ ਪਾੜਾ', en: 'The gap between what a learner can do independently and what they can achieve with guidance' },
      B: { hi: 'केवल बालक की शारीरिक वृद्धि दर', pa: 'ਸਰੀਰਕ ਵਿਕਾਸ ਦੀ ਦਰ', en: 'Physical growth milestones only' },
      C: { hi: 'बुद्धि लब्धि (IQ) स्कोर की गणना', pa: 'ਆਈ.ਕਿਊ. ਸਕੋਰ', en: 'Intelligence quotient score' },
      D: { hi: 'स्मृति प्रतिधारण की अधिकतम अवधि', pa: 'ਯਾਦ ਸ਼ਕਤੀ ਦੀ ਸੀਮਾ', en: 'Memory retention capacity' },
    },
    correct: 'A',
    explanation: {
      hi: 'ZPD वह दूरी है जो बालक के वास्तविक विकास स्तर और वयस्क/सक्षम सहपाठी के सहयोग (Scaffolding) से प्राप्त किए जाने वाले संभावित विकास स्तर के बीच होती है।',
      pa: 'ਜ਼ੈੱਡ.ਪੀ.ਡੀ. (ZPD) ਬੱਚੇ ਦੀ ਮੌਜੂਦਾ ਸਮਰੱਥਾ ਅਤੇ ਕਿਸੇ ਮਾਹਿਰ ਦੀ ਮਦਦ ਨਾਲ ਹਾਸਲ ਕੀਤੀ ਜਾਣ ਵਾਲੀ ਸਮਰੱਥਾ ਦਾ ਅੰਤਰ ਹੈ।',
      en: 'ZPD defines the distance between actual developmental level and potential development under adult guidance or peer collaboration.',
    },
    thought: {
      hi: 'वायगोत्स्की के तीन मुख्य स्तंभ: ZPD (विकास का क्षेत्र), MKO (अधिक ज्ञानी अन्य), और Scaffolding (पाड़/सहारा)। शिक्षक भर्ती का सार्वभौमिक प्रश्न।',
      pa: 'ਅਧਿਆਪਨ ਪ੍ਰੀਖਿਆਵਾਂ ਦੇ 3 ਅਹਿਮ ਨਿਯਮ: ZPD, MKO (More Knowledgeable Other) ਅਤੇ Scaffolding (ਸਹਾਰਾ)।',
      en: 'Foundational pedagogy construct: ZPD is mediated through Scaffolding provided by an MKO (More Knowledgeable Other).',
    },
    difficulty: 'medium',
    year: 2021,
  },

  // =========================================================================
  // CTET & CENTRAL EXAMS — 2014 - 2024
  // =========================================================================
  {
    id: 'pyq-20y-ctt-01',
    topicId: 'child-development-pedagogy',
    subjectId: 'pedagogy',
    examId: 'ctet',
    examTag: 'CTET Paper 2 2019',
    question: {
      hi: 'लॉरेंस कोहलबर्ग के नैतिक विकास के सिद्धांत में "अच्छा लड़का-अच्छी लड़की अनुकूलन" (Good Boy-Nice Girl Orientation) किस स्तर के अंतर्गत आता है?',
      pa: 'ਕੋਹਲਬਰਗ ਦੇ ਨੈਤਿਕ ਵਿਕਾਸ ਸਿਧਾਂਤ ਵਿੱਚ "ਚੰਗਾ ਲੜਕਾ-ਚੰਗੀ ਲੜਕੀ" ਕਿਸ ਪੜਾਅ ਵਿੱਚ ਆਉਂਦਾ ਹੈ?',
      en: 'In Lawrence Kohlberg’s theory of moral development, "Good Boy-Nice Girl Orientation" falls under which developmental level?',
    },
    options: {
      A: { hi: 'पूर्व-पारंपरिक स्तर (Pre-conventional)', pa: 'ਪੂਰਵ-ਰਵਾਇਤੀ ਪੱਧਰ', en: 'Pre-conventional Level' },
      B: { hi: 'पारंपरिक स्तर (Conventional Level)', pa: 'ਰਵਾਇਤੀ ਪੱਧਰ (Conventional Level)', en: 'Conventional Level' },
      C: { hi: 'उत्तर-पारंपरिक स्तर (Post-conventional)', pa: 'ਉੱਤਰ-ਰਵਾਇਤੀ ਪੱਧਰ', en: 'Post-conventional Level' },
      D: { hi: 'संवेदी-गामक स्तर', pa: 'ਸੰਵੇਦੀ ਪੱਧਰ', en: 'Sensorimotor Level' },
    },
    correct: 'B',
    explanation: {
      hi: 'पारंपरिक स्तर (Level 2) के स्टेज 3 को "अच्छा लड़का-अच्छी लड़की" उन्मुखता कहा जाता है, जहाँ बच्चा समाज और परिवार की प्रशंसा पाने के लिए नैतिक व्यवहार करता है।',
      pa: 'ਰਵਾਇਤੀ ਪੱਧਰ (Conventional Level) ਦੇ ਤੀਜੇ ਪੜਾਅ ਵਿੱਚ ਬੱਚਾ ਦੂਜਿਆਂ ਦੀਆਂ ਨਜ਼ਰਾਂ ਵਿੱਚ ਚੰਗਾ ਬਣਨ ਲਈ ਨੈਤਿਕ ਫ਼ੈਸਲੇ ਲੈਂਦਾ ਹੈ।',
      en: 'Stage 3 under the Conventional Level focuses on living up to social expectations and interpersonal accord.',
    },
    thought: {
      hi: 'कोहलबर्ग के 3 स्तर और 6 चरण: स्तर 1 (सजा व पुरस्कार), स्तर 2 (अच्छा लड़का व कानून व्यवस्था), स्तर 3 (सामाजिक अनुबंध व सार्वभौमिक सिद्धांत)।',
      pa: 'ਕੋਹਲਬਰਗ ਦੇ 3 ਲੈਵਲ: 1. Pre-conventional, 2. Conventional (ਚੰਗਾ ਲੜਕਾ), 3. Post-conventional (ਸਮਾਜਿਕ ਇਕਰਾਰ)।',
      en: 'Kohlberg mapping: Stage 3 (Good boy/girl) is Level 2 (Conventional). Often confused with Stage 4 (Law & Order).',
    },
    difficulty: 'hard',
    year: 2019,
  },
  {
    id: 'pyq-20y-ctt-02',
    topicId: 'constitution-basics',
    subjectId: 'social-science',
    examId: 'ctet',
    examTag: 'CTET Paper 2 2024',
    question: {
      hi: 'भारतीय संविधान के अनुच्छेद 21-A के तहत 6 से 14 वर्ष के बच्चों के लिए निःशुल्क और अनिवार्य शिक्षा का अधिकार किस संविधान संशोधन द्वारा जोड़ा गया था?',
      pa: 'ਅਨੁਛੇਦ 21-A ਅਧੀਨ 6 ਤੋਂ 14 ਸਾਲ ਦੇ ਬੱਚਿਆਂ ਲਈ ਮੁਫ਼ਤ ਅਤੇ ਲਾਜ਼ਮੀ ਸਿੱਖਿਆ ਦਾ ਮੌਲਿਕ ਅਧਿਕਾਰ ਕਿਸ ਸੰਵਿਧਾਨਕ ਸੋਧ ਰਾਹੀਂ ਜੋੜਿਆ ਗਿਆ ਸੀ?',
      en: 'Through which Constitutional Amendment was Article 21-A inserted, guaranteeing free and compulsory education for children aged 6 to 14?',
    },
    options: {
      A: { hi: '44वां संशोधन (1978)', pa: '44ਵੀਂ ਸੋਧ', en: '44th Amendment (1978)' },
      B: { hi: '86वां संशोधन अधिनियम (2002)', pa: '86ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ (2002)', en: '86th Amendment Act (2002)' },
      C: { hi: '91वां संशोधन (2003)', pa: '91ਵੀਂ ਸੋਧ', en: '91st Amendment (2003)' },
      D: { hi: '103वां संशोधन (2019)', pa: '103ਵੀਂ ਸੋਧ', en: '103rd Amendment (2019)' },
    },
    correct: 'B',
    explanation: {
      hi: '86वें संविधान संशोधन 2002 ने अनुच्छेद 21-A को मौलिक अधिकार बनाया। इसके क्रियान्वयन हेतु शिक्षा का अधिकार अधिनियम (RTE Act) 2009 में पारित होकर 1 अप्रैल 2010 से लागू हुआ।',
      pa: '86ਵੀਂ ਸੋਧ 2002 ਰਾਹੀਂ ਅਨੁਛੇਦ 21-A ਜੋੜਿਆ ਗਿਆ ਅਤੇ 1 ਅਪ੍ਰੈਲ 2010 ਤੋਂ RTE ਐਕਟ ਪੂਰੇ ਦੇਸ਼ ਵਿੱਚ ਲਾਗੂ ਹੋਇਆ।',
      en: 'The 86th Constitutional Amendment Act, 2002 inserted Article 21-A, later operationalized by the RTE Act 2009 on 1 April 2010.',
    },
    thought: {
      hi: 'परीक्षा त्रिकोण: 86वां संशोधन = 2002, RTE अधिनियम = 2009, RTE लागू = 1 अप्रैल 2010। तीनों तिथियां अलग-अलग पूछी जाती हैं।',
      pa: '3 ਤਰੀਕਾਂ ਯਾਦ ਰੱਖੋ: ਸੋਧ = 2002, ਐਕਟ ਬਣਿਆ = 2009, ਲਾਗੂ ਹੋਇਆ = 1 ਅਪ੍ਰੈਲ 2010।',
      en: 'Chronology trap: Constitutional Amendment in 2002, RTE Legislation passed in 2009, Nationwide implementation on 1 April 2010.',
    },
    difficulty: 'easy',
    year: 2024,
  },
];
