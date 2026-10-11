import type { Question } from '../questions';

// ============================================================================
// ETT PAPER B — Batch 2 Questions
// Covers empty ETT topic pools across Science, Math, SST, Hindi, English, Punjabi
// ETT Paper B: 200 marks total, NO negative marking (Advt. 6635 archival pattern)
// All questions: authored-original, draft status
// Topics covered: ett-science-force, ett-science-sound, ett-science-cell,
//   ett-science-matter, ett-science-reactions, ett-science-metals, ett-science-food,
//   ett-math-1, ett-math-5, ett-math-6, ett-math-9, ett-math-12, ett-math-15,
//   ett-sst-history-1 to -4, ett-sst-civics-1 to -3, ett-sst-geography-1 to -3,
//   ett-punjabi-2, ett-hindi-4, ett-english-2
// ============================================================================

export const ETT_PAPER_B_BATCH2: Question[] = [

  // =========================================================================
  // ETT SCIENCE — FORCE AND LAWS OF MOTION (ett-science-force)
  // =========================================================================
  {
    id: 'ett-sci-force-1',
    topicId: 'ett-science-motion',
    subjectId: 'science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Science',
    question: {
      hi: 'न्यूटन के गति के प्रथम नियम को किस अन्य नाम से जाना जाता है?',
      pa: 'ਨਿਊਟਨ ਦੇ ਗਤੀ ਦੇ ਪਹਿਲੇ ਨਿਯਮ ਨੂੰ ਕਿਸ ਹੋਰ ਨਾਂ ਨਾਲ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?',
      en: 'By what other name is Newton\'s First Law of Motion known?',
    },
    options: {
      A: { hi: 'ऊर्जा का नियम', pa: 'ਊਰਜਾ ਦਾ ਨਿਯਮ', en: 'Law of Energy' },
      B: { hi: 'जड़ता का नियम', pa: 'ਜੜਤਾ ਦਾ ਨਿਯਮ', en: 'Law of Inertia' },
      C: { hi: 'क्रिया-प्रतिक्रिया का नियम', pa: 'ਕਿਰਿਆ-ਪ੍ਰਤੀਕਿਰਿਆ ਦਾ ਨਿਯਮ', en: 'Law of Action-Reaction' },
      D: { hi: 'संवेग का नियम', pa: 'ਸੰਵੇਗ ਦਾ ਨਿਯਮ', en: 'Law of Momentum' },
    },
    correct: 'B',
    explanation: {
      hi: 'न्यूटन का प्रथम नियम (जड़ता का नियम) कहता है कि कोई वस्तु अपनी विरामावस्था या एकसमान गति की अवस्था में तब तक बनी रहती है जब तक कोई बाह्य बल न लगे।',
      pa: 'ਨਿਊਟਨ ਦੇ ਪਹਿਲੇ ਨਿਯਮ (ਜੜਤਾ ਦੇ ਨਿਯਮ) ਅਨੁਸਾਰ ਕੋਈ ਵਸਤੂ ਉਦੋਂ ਤੱਕ ਆਪਣੀ ਅਵਸਥਾ ਨਹੀਂ ਬਦਲਦੀ ਜਦੋਂ ਤੱਕ ਬਾਹਰੀ ਬਲ ਨਾ ਲੱਗੇ।',
      en: 'Newton\'s First Law (Law of Inertia) states that a body remains at rest or in uniform motion unless acted upon by an external force.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
  {
    id: 'ett-sci-force-2',
    topicId: 'ett-science-motion',
    subjectId: 'science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Science',
    question: {
      hi: '10 kg द्रव्यमान की वस्तु पर 5 N का बल लगाने पर उत्पन्न त्वरण कितना होगा?',
      pa: '10 kg ਪੁੰਜ ਦੀ ਵਸਤੂ \'ਤੇ 5 N ਬਲ ਲਾਉਣ \'ਤੇ ਕਿੰਨਾ ਪ੍ਰਵੇਗ ਪੈਦਾ ਹੋਵੇਗਾ?',
      en: 'What acceleration is produced when a force of 5 N acts on a mass of 10 kg?',
    },
    options: {
      A: { hi: '2 m/s²', pa: '2 m/s²', en: '2 m/s²' },
      B: { hi: '0.5 m/s²', pa: '0.5 m/s²', en: '0.5 m/s²' },
      C: { hi: '50 m/s²', pa: '50 m/s²', en: '50 m/s²' },
      D: { hi: '15 m/s²', pa: '15 m/s²', en: '15 m/s²' },
    },
    correct: 'B',
    explanation: {
      hi: 'न्यूटन के द्वितीय नियम से F = ma, इसलिए a = F/m = 5/10 = 0.5 m/s²',
      pa: 'ਨਿਊਟਨ ਦੇ ਦੂਜੇ ਨਿਯਮ ਤੋਂ F = ma, ਇਸ ਲਈ a = F/m = 5/10 = 0.5 m/s²',
      en: 'From Newton\'s Second Law: F = ma, so a = F/m = 5/10 = 0.5 m/s².',
    },
    difficulty: 'medium',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
  {
    id: 'ett-sci-force-3',
    topicId: 'ett-science-motion',
    subjectId: 'science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Science',
    question: {
      hi: 'न्यूटन के तृतीय नियम के अनुसार प्रत्येक क्रिया के लिए होती है:',
      pa: 'ਨਿਊਟਨ ਦੇ ਤੀਜੇ ਨਿਯਮ ਅਨੁਸਾਰ ਹਰੇਕ ਕਿਰਿਆ ਦੇ ਲਈ ਹੁੰਦੀ ਹੈ:',
      en: 'According to Newton\'s Third Law, every action has:',
    },
    options: {
      A: { hi: 'कोई प्रतिक्रिया नहीं होती', pa: 'ਕੋਈ ਪ੍ਰਤੀਕਿਰਿਆ ਨਹੀਂ ਹੁੰਦੀ', en: 'No reaction' },
      B: { hi: 'दोगुनी प्रतिक्रिया होती है', pa: 'ਦੁੱਗਣੀ ਪ੍ਰਤੀਕਿਰਿਆ ਹੁੰਦੀ ਹੈ', en: 'A double reaction' },
      C: { hi: 'बराबर और विपरीत प्रतिक्रिया होती है', pa: 'ਬਰਾਬਰ ਅਤੇ ਉਲਟ ਪ੍ਰਤੀਕਿਰਿਆ ਹੁੰਦੀ ਹੈ', en: 'An equal and opposite reaction' },
      D: { hi: 'आधी प्रतिक्रिया होती है', pa: 'ਅੱਧੀ ਪ੍ਰਤੀਕਿਰਿਆ ਹੁੰਦੀ ਹੈ', en: 'A half reaction' },
    },
    correct: 'C',
    explanation: {
      hi: 'न्यूटन का तृतीय नियम: प्रत्येक क्रिया की बराबर और विपरीत प्रतिक्रिया होती है। दोनों बल परिमाण में समान और दिशा में विपरीत होते हैं।',
      pa: 'ਨਿਊਟਨ ਦਾ ਤੀਜਾ ਨਿਯਮ: ਹਰੇਕ ਕਿਰਿਆ ਦੀ ਬਰਾਬਰ ਅਤੇ ਉਲਟ ਪ੍ਰਤੀਕਿਰਿਆ ਹੁੰਦੀ ਹੈ।',
      en: 'Newton\'s Third Law: For every action there is an equal and opposite reaction. Both forces are equal in magnitude but opposite in direction.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },

  // =========================================================================
  // ETT SCIENCE — SOUND (ett-science-sound)
  // =========================================================================
  {
    id: 'ett-sci-sound-1',
    topicId: 'ett-science-motion',
    subjectId: 'science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Science',
    question: {
      hi: 'ध्वनि किस माध्यम से नहीं गुजर सकती?',
      pa: 'ਆਵਾਜ਼ ਕਿਸ ਮਾਧਿਅਮ ਤੋਂ ਨਹੀਂ ਲੰਘ ਸਕਦੀ?',
      en: 'Through which medium cannot sound travel?',
    },
    options: {
      A: { hi: 'ठोस', pa: 'ਠੋਸ', en: 'Solid' },
      B: { hi: 'द्रव', pa: 'ਤਰਲ', en: 'Liquid' },
      C: { hi: 'गैस', pa: 'ਗੈਸ', en: 'Gas' },
      D: { hi: 'निर्वात', pa: 'ਨਿਰਵਾਤ', en: 'Vacuum' },
    },
    correct: 'D',
    explanation: {
      hi: 'ध्वनि एक यांत्रिक तरंग है जिसे संचरण के लिए माध्यम की आवश्यकता होती है। निर्वात (vacuum) में कोई माध्यम नहीं होने के कारण ध्वनि निर्वात से नहीं गुजर सकती।',
      pa: 'ਆਵਾਜ਼ ਇੱਕ ਮਕੈਨੀਕਲ ਤਰੰਗ ਹੈ ਜਿਸ ਲਈ ਮਾਧਿਅਮ ਜ਼ਰੂਰੀ ਹੈ। ਨਿਰਵਾਤ ਵਿੱਚ ਕੋਈ ਮਾਧਿਅਮ ਨਹੀਂ, ਇਸ ਲਈ ਆਵਾਜ਼ ਨਿਰਵਾਤ ਵਿੱਚੋਂ ਨਹੀਂ ਲੰਘ ਸਕਦੀ।',
      en: 'Sound is a mechanical wave that requires a medium to travel. Since vacuum has no medium, sound cannot travel through it.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
  {
    id: 'ett-sci-sound-2',
    topicId: 'ett-science-motion',
    subjectId: 'science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Science',
    question: {
      hi: 'मनुष्य द्वारा सुनी जा सकने वाली ध्वनि की आवृत्ति परास क्या है?',
      pa: 'ਮਨੁੱਖ ਦੁਆਰਾ ਸੁਣੀ ਜਾ ਸਕਣ ਵਾਲੀ ਆਵਾਜ਼ ਦੀ ਬਾਰੰਬਾਰਤਾ ਕੀ ਹੈ?',
      en: 'What is the frequency range of sound audible to humans?',
    },
    options: {
      A: { hi: '1 Hz to 100 Hz', pa: '1 Hz ਤੋਂ 100 Hz', en: '1 Hz to 100 Hz' },
      B: { hi: '20 Hz to 20,000 Hz', pa: '20 Hz ਤੋਂ 20,000 Hz', en: '20 Hz to 20,000 Hz' },
      C: { hi: '100 Hz to 50,000 Hz', pa: '100 Hz ਤੋਂ 50,000 Hz', en: '100 Hz to 50,000 Hz' },
      D: { hi: '10,000 Hz to 1,00,000 Hz', pa: '10,000 Hz ਤੋਂ 1,00,000 Hz', en: '10,000 Hz to 1,00,000 Hz' },
    },
    correct: 'B',
    explanation: {
      hi: 'मनुष्य 20 Hz से 20,000 Hz (20 kHz) की आवृत्ति वाली ध्वनि सुन सकते हैं। 20 Hz से कम को अवश्राव्य (infrasound) और 20 kHz से अधिक को पराश्राव्य (ultrasound) कहते हैं।',
      pa: 'ਮਨੁੱਖ 20 Hz ਤੋਂ 20,000 Hz ਤੱਕ ਦੀ ਆਵਾਜ਼ ਸੁਣ ਸਕਦੇ ਹਨ। 20 Hz ਤੋਂ ਘੱਟ ਨੂੰ ਅਵਸ਼ਰਾਵਯ ਅਤੇ 20 kHz ਤੋਂ ਵੱਧ ਨੂੰ ਅਲਟਰਾਸਾਊਂਡ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
      en: 'Humans can hear sound from 20 Hz to 20,000 Hz (20 kHz). Below 20 Hz is infrasound; above 20 kHz is ultrasound.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },

  // =========================================================================
  // ETT SCIENCE — MATTER (ett-science-matter)
  // =========================================================================
  {
    id: 'ett-sci-matter-1',
    topicId: 'ett-science-acids',
    subjectId: 'science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Science',
    question: {
      hi: 'पदार्थ की अवस्था जिसमें निश्चित आकार और निश्चित आयतन दोनों होते हैं, वह है:',
      pa: 'ਪਦਾਰਥ ਦੀ ਉਹ ਅਵਸਥਾ ਜਿਸ ਵਿੱਚ ਨਿਸ਼ਚਿਤ ਆਕਾਰ ਅਤੇ ਨਿਸ਼ਚਿਤ ਆਇਤਨ ਦੋਵੇਂ ਹੁੰਦੇ ਹਨ, ਉਹ ਹੈ:',
      en: 'The state of matter that has both a definite shape and a definite volume is:',
    },
    options: {
      A: { hi: 'गैस', pa: 'ਗੈਸ', en: 'Gas' },
      B: { hi: 'द्रव', pa: 'ਤਰਲ', en: 'Liquid' },
      C: { hi: 'ठोस', pa: 'ਠੋਸ', en: 'Solid' },
      D: { hi: 'प्लाज्मा', pa: 'ਪਲਾਜ਼ਮਾ', en: 'Plasma' },
    },
    correct: 'C',
    explanation: {
      hi: 'ठोस पदार्थ में अणु अत्यंत पास-पास और सुव्यवस्थित होते हैं। इसलिए इसका आकार और आयतन दोनों निश्चित होते हैं। द्रव का आयतन निश्चित लेकिन आकार अनिश्चित होता है।',
      pa: 'ਠੋਸ ਵਿੱਚ ਅਣੂ ਬਹੁਤ ਨੇੜੇ ਅਤੇ ਸੁਵਿਵਸਥਿਤ ਹੁੰਦੇ ਹਨ। ਇਸ ਲਈ ਇਸਦਾ ਆਕਾਰ ਅਤੇ ਆਇਤਨ ਦੋਵੇਂ ਨਿਸ਼ਚਿਤ ਹੁੰਦੇ ਹਨ।',
      en: 'In a solid, molecules are closely packed and orderly. Hence both shape and volume are definite. A liquid has definite volume but no definite shape.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
  {
    id: 'ett-sci-matter-2',
    topicId: 'ett-science-acids',
    subjectId: 'science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Science',
    question: {
      hi: 'बर्फ का पानी बनना किस प्रकार का परिवर्तन है?',
      pa: 'ਬਰਫ਼ ਦਾ ਪਾਣੀ ਬਣਨਾ ਕਿਸ ਕਿਸਮ ਦਾ ਬਦਲਾਅ ਹੈ?',
      en: 'Ice melting into water is an example of:',
    },
    options: {
      A: { hi: 'रासायनिक परिवर्तन', pa: 'ਰਸਾਇਣਕ ਬਦਲਾਅ', en: 'Chemical change' },
      B: { hi: 'भौतिक परिवर्तन', pa: 'ਭੌਤਿਕ ਬਦਲਾਅ', en: 'Physical change' },
      C: { hi: 'जैविक परिवर्तन', pa: 'ਜੀਵ-ਵਿਗਿਆਨਕ ਬਦਲਾਅ', en: 'Biological change' },
      D: { hi: 'नाभिकीय परिवर्तन', pa: 'ਨਿਊਕਲੀ ਬਦਲਾਅ', en: 'Nuclear change' },
    },
    correct: 'B',
    explanation: {
      hi: 'बर्फ का पानी बनना एक भौतिक परिवर्तन है क्योंकि केवल अवस्था बदलती है, रासायनिक संरचना (H₂O) नहीं बदलती और परिवर्तन उत्क्रमणीय है।',
      pa: 'ਬਰਫ਼ ਦਾ ਪਾਣੀ ਬਣਨਾ ਭੌਤਿਕ ਬਦਲਾਅ ਹੈ ਕਿਉਂਕਿ ਸਿਰਫ਼ ਅਵਸਥਾ ਬਦਲਦੀ ਹੈ, ਰਸਾਇਣਕ ਬਣਤਰ (H₂O) ਨਹੀਂ।',
      en: 'Ice melting is a physical change because only the state changes; the chemical composition (H₂O) remains the same and the change is reversible.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },

  // =========================================================================
  // ETT SCIENCE — CELL (ett-science-cell)
  // =========================================================================
  {
    id: 'ett-sci-cell-1',
    topicId: 'ett-science-acids',
    subjectId: 'science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Science',
    question: {
      hi: 'कोशिका का "ऊर्जागृह" (Powerhouse) किसे कहा जाता है?',
      pa: 'ਸੈੱਲ ਦਾ "ਊਰਜਾਘਰ" (Powerhouse) ਕਿਸਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
      en: 'Which organelle is called the "Powerhouse" of the cell?',
    },
    options: {
      A: { hi: 'राइबोसोम', pa: 'ਰਾਈਬੋਸੋਮ', en: 'Ribosome' },
      B: { hi: 'नाभिक (Nucleus)', pa: 'ਕੇਂਦਰਕ (Nucleus)', en: 'Nucleus' },
      C: { hi: 'माइटोकॉन्ड्रिया', pa: 'ਮਾਈਟੋਕੌਂਡਰੀਆ', en: 'Mitochondria' },
      D: { hi: 'गॉल्जी काय', pa: 'ਗੌਲਜੀ ਕਾਯ', en: 'Golgi body' },
    },
    correct: 'C',
    explanation: {
      hi: 'माइटोकॉन्ड्रिया में ATP (ऊर्जा की मुद्रा) का निर्माण होता है। इसलिए इसे कोशिका का ऊर्जागृह कहा जाता है। यह श्वसन की प्रक्रिया द्वारा ऊर्जा उत्पन्न करता है।',
      pa: 'ਮਾਈਟੋਕੌਂਡਰੀਆ ਵਿੱਚ ATP (ਊਰਜਾ ਦੀ ਮੁਦਰਾ) ਬਣਦੀ ਹੈ। ਇਸ ਲਈ ਇਸਨੂੰ ਸੈੱਲ ਦਾ ਊਰਜਾਘਰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
      en: 'Mitochondria produce ATP (the energy currency of the cell) through cellular respiration. Hence they are called the powerhouse of the cell.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
  {
    id: 'ett-sci-cell-2',
    topicId: 'ett-science-acids',
    subjectId: 'science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Science',
    question: {
      hi: 'पादप (Plant) कोशिका में जन्तु (Animal) कोशिका से अनुपस्थित अंगक कौन सा है?',
      pa: 'ਪੌਦੇ ਦੇ ਸੈੱਲ ਵਿੱਚ ਜਾਨਵਰ ਦੇ ਸੈੱਲ ਤੋਂ ਗੈਰਹਾਜ਼ਰ ਅੰਗਕ ਕਿਹੜਾ ਹੈ?',
      en: 'Which organelle is present in plant cells but absent in animal cells?',
    },
    options: {
      A: { hi: 'माइटोकॉन्ड्रिया', pa: 'ਮਾਈਟੋਕੌਂਡਰੀਆ', en: 'Mitochondria' },
      B: { hi: 'कोशिका भित्ति (Cell wall)', pa: 'ਸੈੱਲ ਦੀਵਾਰ (Cell wall)', en: 'Cell wall' },
      C: { hi: 'राइबोसोम', pa: 'ਰਾਈਬੋਸੋਮ', en: 'Ribosome' },
      D: { hi: 'नाभिक', pa: 'ਕੇਂਦਰਕ', en: 'Nucleus' },
    },
    correct: 'B',
    explanation: {
      hi: 'कोशिका भित्ति (Cell wall) सेलुलोज से बनी होती है और केवल पादप कोशिकाओं में पाई जाती है। जन्तु कोशिकाओं में केवल कोशिका झिल्ली (cell membrane) होती है।',
      pa: 'ਸੈੱਲ ਦੀਵਾਰ (Cell wall) ਸੈਲੂਲੋਜ਼ ਤੋਂ ਬਣੀ ਹੈ ਅਤੇ ਸਿਰਫ਼ ਪੌਦਿਆਂ ਦੇ ਸੈੱਲਾਂ ਵਿੱਚ ਮਿਲਦੀ ਹੈ।',
      en: 'Cell wall, made of cellulose, is present only in plant cells. Animal cells have only a cell membrane, not a cell wall.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },

  // =========================================================================
  // ETT SCIENCE — METALS AND NON-METALS (ett-science-metals)
  // =========================================================================
  {
    id: 'ett-sci-metals-1',
    topicId: 'ett-science-acids',
    subjectId: 'science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Science',
    question: {
      hi: 'धातुओं का वह गुण जिससे उन्हें पतली चादर में बदला जा सकता है, कहलाता है:',
      pa: 'ਧਾਤਾਂ ਦਾ ਉਹ ਗੁਣ ਜਿਸ ਨਾਲ ਉਨ੍ਹਾਂ ਨੂੰ ਪਤਲੀ ਚਾਦਰ ਵਿੱਚ ਬਦਲਿਆ ਜਾ ਸਕਦਾ ਹੈ, ਕਹਿਲਾਉਂਦਾ ਹੈ:',
      en: 'The property of metals by which they can be beaten into thin sheets is called:',
    },
    options: {
      A: { hi: 'तन्यता (Ductility)', pa: 'ਤਨਯਤਾ (Ductility)', en: 'Ductility' },
      B: { hi: 'आघातवर्ध्यता (Malleability)', pa: 'ਆਘਾਤਵਰਧਯਤਾ (Malleability)', en: 'Malleability' },
      C: { hi: 'चालकता (Conductivity)', pa: 'ਚਾਲਕਤਾ (Conductivity)', en: 'Conductivity' },
      D: { hi: 'चमक (Lustre)', pa: 'ਚਮਕ (Lustre)', en: 'Lustre' },
    },
    correct: 'B',
    explanation: {
      hi: 'आघातवर्ध्यता (Malleability) धातुओं का वह गुण है जिसके कारण उन्हें पतली चादरों में बदला जा सकता है। सोना और चाँदी अत्यधिक आघातवर्ध्य धातुएँ हैं। तन्यता से धातुओं को तारों में खींचा जाता है।',
      pa: 'ਆਘਾਤਵਰਧਯਤਾ (Malleability) ਉਹ ਗੁਣ ਹੈ ਜਿਸ ਨਾਲ ਧਾਤਾਂ ਨੂੰ ਪਤਲੀਆਂ ਚਾਦਰਾਂ ਵਿੱਚ ਬਦਲਿਆ ਜਾ ਸਕਦਾ ਹੈ। ਸੋਨਾ ਅਤੇ ਚਾਂਦੀ ਬਹੁਤ ਆਘਾਤਵਰਧਯ ਹਨ।',
      en: 'Malleability is the property of metals that allows them to be beaten into thin sheets. Gold and silver are highly malleable. Ductility refers to drawing metals into wires.',
    },
    difficulty: 'medium',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
  {
    id: 'ett-sci-metals-2',
    topicId: 'ett-science-acids',
    subjectId: 'science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Science',
    question: {
      hi: 'निम्नलिखित में से कौन सी अधातु (non-metal) विद्युत की सुचालक है?',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਅਧਾਤੂ (non-metal) ਬਿਜਲੀ ਦੀ ਸੁਚਾਲਕ ਹੈ?',
      en: 'Which of the following non-metals is a good conductor of electricity?',
    },
    options: {
      A: { hi: 'सल्फर (Sulphur)', pa: 'ਸਲਫ਼ਰ', en: 'Sulphur' },
      B: { hi: 'ग्रेफाइट (Graphite)', pa: 'ਗ੍ਰੈਫਾਈਟ', en: 'Graphite' },
      C: { hi: 'फॉस्फोरस (Phosphorus)', pa: 'ਫਾਸਫ਼ੋਰਸ', en: 'Phosphorus' },
      D: { hi: 'क्लोरीन (Chlorine)', pa: 'ਕਲੋਰੀਨ', en: 'Chlorine' },
    },
    correct: 'B',
    explanation: {
      hi: 'ग्रेफाइट कार्बन का एक अपरूप (allotrope) है जो अधातु होने के बावजूद विद्युत का सुचालक है क्योंकि इसमें मुक्त इलेक्ट्रॉन होते हैं। यह पेंसिल की सींक और इलेक्ट्रोड में प्रयुक्त होता है।',
      pa: 'ਗ੍ਰੈਫਾਈਟ ਕਾਰਬਨ ਦਾ ਇੱਕ ਅਪਰੂਪ ਹੈ ਜੋ ਅਧਾਤੂ ਹੋਣ ਦੇ ਬਾਵਜੂਦ ਬਿਜਲੀ ਦਾ ਸੁਚਾਲਕ ਹੈ।',
      en: 'Graphite, an allotrope of carbon, is a non-metal that conducts electricity due to its free electrons. It is used in pencils and electrodes.',
    },
    difficulty: 'medium',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },

  // =========================================================================
  // ETT SCIENCE — FOOD (ett-science-food)
  // =========================================================================
  {
    id: 'ett-sci-food-1',
    topicId: 'ett-science-acids',
    subjectId: 'science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Science',
    question: {
      hi: 'हरे पौधे अपना भोजन किस प्रक्रिया से बनाते हैं?',
      pa: 'ਹਰੇ ਪੌਦੇ ਆਪਣਾ ਭੋਜਨ ਕਿਸ ਪ੍ਰਕਿਰਿਆ ਨਾਲ ਬਣਾਉਂਦੇ ਹਨ?',
      en: 'By which process do green plants prepare their food?',
    },
    options: {
      A: { hi: 'श्वसन', pa: 'ਸਾਹ ਕਿਰਿਆ', en: 'Respiration' },
      B: { hi: 'किण्वन', pa: 'ਖ਼ਮੀਰੀਕਰਨ', en: 'Fermentation' },
      C: { hi: 'प्रकाश संश्लेषण', pa: 'ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ', en: 'Photosynthesis' },
      D: { hi: 'उत्सर्जन', pa: 'ਨਿਕਾਸ', en: 'Excretion' },
    },
    correct: 'C',
    explanation: {
      hi: 'हरे पौधे प्रकाश संश्लेषण (Photosynthesis) द्वारा सूर्य के प्रकाश, CO₂ और जल से ग्लूकोज बनाते हैं। क्लोरोफिल इस प्रक्रिया में महत्वपूर्ण भूमिका निभाता है।',
      pa: 'ਹਰੇ ਪੌਦੇ ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ ਰਾਹੀਂ ਸੂਰਜ ਦੀ ਰੌਸ਼ਨੀ, CO₂ ਅਤੇ ਪਾਣੀ ਤੋਂ ਗਲੂਕੋਜ਼ ਬਣਾਉਂਦੇ ਹਨ।',
      en: 'Green plants prepare food through photosynthesis, using sunlight, CO₂ and water to produce glucose. Chlorophyll plays a key role in this process.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },

  // =========================================================================
  // ETT MATHEMATICS — NUMBER SYSTEMS (ett-math-1)
  // =========================================================================
  {
    id: 'ett-math-ns-1',
    topicId: 'ett-math-2',
    subjectId: 'mathematics',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Mathematics',
    question: {
      hi: '√2 किस प्रकार की संख्या है?',
      pa: '√2 ਕਿਸ ਕਿਸਮ ਦੀ ਸੰਖਿਆ ਹੈ?',
      en: 'What type of number is √2?',
    },
    options: {
      A: { hi: 'परिमेय संख्या (Rational)', pa: 'ਪਰਿਮੇਯ ਸੰਖਿਆ (Rational)', en: 'Rational number' },
      B: { hi: 'अपरिमेय संख्या (Irrational)', pa: 'ਅਪਰਿਮੇਯ ਸੰਖਿਆ (Irrational)', en: 'Irrational number' },
      C: { hi: 'पूर्ण संख्या (Natural)', pa: 'ਕੁਦਰਤੀ ਸੰਖਿਆ (Natural)', en: 'Natural number' },
      D: { hi: 'पूर्णांक (Integer)', pa: 'ਪੂਰਨਾਂਕ (Integer)', en: 'Integer' },
    },
    correct: 'B',
    explanation: {
      hi: '√2 = 1.41421356… एक अपरिमेय संख्या है क्योंकि इसे p/q (जहाँ p और q पूर्णांक हैं, q≠0) के रूप में नहीं लिखा जा सकता। इसका दशमलव न समाप्त होता है न आवर्ती।',
      pa: '√2 = 1.41421... ਇੱਕ ਅਪਰਿਮੇਯ ਸੰਖਿਆ ਹੈ ਕਿਉਂਕਿ ਇਸਨੂੰ p/q ਰੂਪ ਵਿੱਚ ਨਹੀਂ ਲਿਖਿਆ ਜਾ ਸਕਦਾ।',
      en: '√2 = 1.41421... is an irrational number because it cannot be expressed as p/q where p and q are integers and q ≠ 0. Its decimal is non-terminating and non-repeating.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
  {
    id: 'ett-math-ns-2',
    topicId: 'ett-math-2',
    subjectId: 'mathematics',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Mathematics',
    question: {
      hi: '72 और 96 का LCM क्या होगा?',
      pa: '72 ਅਤੇ 96 ਦਾ LCM ਕੀ ਹੋਵੇਗਾ?',
      en: 'What is the LCM of 72 and 96?',
    },
    options: {
      A: { hi: '24', pa: '24', en: '24' },
      B: { hi: '144', pa: '144', en: '144' },
      C: { hi: '288', pa: '288', en: '288' },
      D: { hi: '576', pa: '576', en: '576' },
    },
    correct: 'C',
    explanation: {
      hi: '72 = 2³ × 3², 96 = 2⁵ × 3. LCM = सभी अभाज्य गुणनखंडों की अधिकतम घात = 2⁵ × 3² = 32 × 9 = 288.',
      pa: '72 = 2³ × 3², 96 = 2⁵ × 3. LCM = 2⁵ × 3² = 32 × 9 = 288.',
      en: '72 = 2³ × 3², 96 = 2⁵ × 3. LCM = highest powers of all prime factors = 2⁵ × 3² = 32 × 9 = 288.',
    },
    difficulty: 'medium',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },

  // =========================================================================
  // ETT MATHEMATICS — PROBABILITY (ett-math-18)
  // =========================================================================
  {
    id: 'ett-math-prob-1',
    topicId: 'ett-math-17',
    subjectId: 'mathematics',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Mathematics',
    question: {
      hi: 'एक सिक्के को उछाले जाने पर चित (Head) आने की प्रायिकता क्या है?',
      pa: 'ਇੱਕ ਸਿੱਕਾ ਸੁੱਟਣ \'ਤੇ ਚਿੱਤ (Head) ਆਉਣ ਦੀ ਸੰਭਾਵਨਾ ਕੀ ਹੈ?',
      en: 'What is the probability of getting a Head when a fair coin is tossed?',
    },
    options: {
      A: { hi: '1', pa: '1', en: '1' },
      B: { hi: '0', pa: '0', en: '0' },
      C: { hi: '1/2', pa: '1/2', en: '1/2' },
      D: { hi: '2', pa: '2', en: '2' },
    },
    correct: 'C',
    explanation: {
      hi: 'एक सिक्के में दो परिणाम होते हैं: चित (H) और पट (T)। चित के लिए अनुकूल परिणाम = 1, कुल परिणाम = 2. प्रायिकता = 1/2.',
      pa: 'ਇੱਕ ਸਿੱਕੇ ਵਿੱਚ ਦੋ ਨਤੀਜੇ ਹੁੰਦੇ ਹਨ: ਚਿੱਤ (H) ਅਤੇ ਪੱਟ (T). ਚਿੱਤ ਲਈ ਅਨੁਕੂਲ ਨਤੀਜਾ = 1, ਕੁੱਲ ਨਤੀਜੇ = 2. ਸੰਭਾਵਨਾ = 1/2.',
      en: 'A fair coin has two outcomes: Head and Tail. Favorable outcomes for Head = 1, total outcomes = 2. Probability = 1/2.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
  {
    id: 'ett-math-prob-2',
    topicId: 'ett-math-17',
    subjectId: 'mathematics',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Mathematics',
    question: {
      hi: 'एक पासे (dice) को फेंकने पर अभाज्य (prime) संख्या आने की प्रायिकता क्या है?',
      pa: 'ਇੱਕ ਪਾਸੇ (dice) ਸੁੱਟਣ \'ਤੇ ਅਭਾਜ ਸੰਖਿਆ (prime number) ਆਉਣ ਦੀ ਸੰਭਾਵਨਾ ਕੀ ਹੈ?',
      en: 'What is the probability of getting a prime number when a fair die is thrown?',
    },
    options: {
      A: { hi: '1/6', pa: '1/6', en: '1/6' },
      B: { hi: '1/2', pa: '1/2', en: '1/2' },
      C: { hi: '2/3', pa: '2/3', en: '2/3' },
      D: { hi: '1/3', pa: '1/3', en: '1/3' },
    },
    correct: 'B',
    explanation: {
      hi: 'पासे पर 1 से 6 तक अंक होते हैं। अभाज्य संख्याएँ हैं: 2, 3, 5 (कुल 3). प्रायिकता = 3/6 = 1/2.',
      pa: 'ਪਾਸੇ \'ਤੇ 1 ਤੋਂ 6 ਤੱਕ ਅੰਕ ਹੁੰਦੇ ਹਨ। ਅਭਾਜ ਸੰਖਿਆਵਾਂ ਹਨ: 2, 3, 5 (ਕੁੱਲ 3). ਸੰਭਾਵਨਾ = 3/6 = 1/2.',
      en: 'A die has numbers 1–6. Prime numbers are 2, 3, 5 (total 3). Probability = 3/6 = 1/2.',
    },
    difficulty: 'medium',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },

  // =========================================================================
  // ETT MATHEMATICS — TRIGONOMETRY (ett-math-12)
  // =========================================================================
  {
    id: 'ett-math-trig-1',
    topicId: 'ett-math-4',
    subjectId: 'mathematics',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Mathematics',
    question: {
      hi: 'sin 30° का मान क्या होता है?',
      pa: 'sin 30° ਦਾ ਮੁੱਲ ਕੀ ਹੁੰਦਾ ਹੈ?',
      en: 'What is the value of sin 30°?',
    },
    options: {
      A: { hi: '1', pa: '1', en: '1' },
      B: { hi: '√3/2', pa: '√3/2', en: '√3/2' },
      C: { hi: '1/2', pa: '1/2', en: '1/2' },
      D: { hi: '1/√2', pa: '1/√2', en: '1/√2' },
    },
    correct: 'C',
    explanation: {
      hi: 'मानक मान: sin 0° = 0, sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2, sin 90° = 1. अतः sin 30° = 1/2.',
      pa: 'ਮਾਨਕ ਮੁੱਲ: sin 0° = 0, sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2, sin 90° = 1. ਇਸ ਲਈ sin 30° = 1/2.',
      en: 'Standard values: sin 0°=0, sin 30°=1/2, sin 45°=1/√2, sin 60°=√3/2, sin 90°=1. So sin 30° = 1/2.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
  {
    id: 'ett-math-trig-2',
    topicId: 'ett-math-4',
    subjectId: 'mathematics',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Mathematics',
    question: {
      hi: 'एक खंभे की ऊँचाई 10 m है। यदि उसकी छाया की लंबाई 10√3 m हो, तो सूर्य का उन्नयन कोण (angle of elevation) क्या है?',
      pa: 'ਇੱਕ ਖੰਭੇ ਦੀ ਉਚਾਈ 10 m ਹੈ। ਜੇ ਇਸਦੀ ਛਾਂ ਦੀ ਲੰਬਾਈ 10√3 m ਹੋਵੇ, ਤਾਂ ਸੂਰਜ ਦਾ ਉੱਚਾਈ ਕੋਣ ਕੀ ਹੈ?',
      en: 'A pole of height 10 m casts a shadow of length 10√3 m. What is the angle of elevation of the sun?',
    },
    options: {
      A: { hi: '45°', pa: '45°', en: '45°' },
      B: { hi: '60°', pa: '60°', en: '60°' },
      C: { hi: '30°', pa: '30°', en: '30°' },
      D: { hi: '90°', pa: '90°', en: '90°' },
    },
    correct: 'C',
    explanation: {
      hi: 'tan θ = ऊँचाई / छाया = 10 / (10√3) = 1/√3. tan 30° = 1/√3. अतः उन्नयन कोण = 30°.',
      pa: 'tan θ = ਉਚਾਈ / ਛਾਂ = 10 / (10√3) = 1/√3. tan 30° = 1/√3. ਇਸ ਲਈ ਕੋਣ = 30°.',
      en: 'tan θ = height / shadow = 10 / (10√3) = 1/√3. Since tan 30° = 1/√3, the angle of elevation = 30°.',
    },
    difficulty: 'medium',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },

  // =========================================================================
  // ETT MATHEMATICS — SURFACE AREA AND VOLUME (ett-math-15)
  // =========================================================================
  {
    id: 'ett-math-vol-1',
    topicId: 'ett-math-11',
    subjectId: 'mathematics',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Mathematics',
    question: {
      hi: '7 cm त्रिज्या और 10 cm ऊँचाई के बेलन (cylinder) का आयतन क्या होगा? (π = 22/7)',
      pa: '7 cm ਅਰਧਵਿਆਸ ਅਤੇ 10 cm ਉਚਾਈ ਦੇ ਸਿਲੰਡਰ ਦਾ ਆਇਤਨ ਕੀ ਹੋਵੇਗਾ? (π = 22/7)',
      en: 'Find the volume of a cylinder with radius 7 cm and height 10 cm. (π = 22/7)',
    },
    options: {
      A: { hi: '1540 cm³', pa: '1540 cm³', en: '1540 cm³' },
      B: { hi: '2200 cm³', pa: '2200 cm³', en: '2200 cm³' },
      C: { hi: '770 cm³', pa: '770 cm³', en: '770 cm³' },
      D: { hi: '440 cm³', pa: '440 cm³', en: '440 cm³' },
    },
    correct: 'A',
    explanation: {
      hi: 'बेलन का आयतन = πr²h = (22/7) × 7² × 10 = (22/7) × 49 × 10 = 22 × 7 × 10 = 1540 cm³.',
      pa: 'ਸਿਲੰਡਰ ਦਾ ਆਇਤਨ = πr²h = (22/7) × 49 × 10 = 1540 cm³.',
      en: 'Volume of cylinder = πr²h = (22/7) × 7² × 10 = (22/7) × 49 × 10 = 22 × 70 = 1540 cm³.',
    },
    difficulty: 'medium',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },

  // =========================================================================
  // ETT SST — HISTORY: GURU NANAK AND SIKH HISTORY (ett-sst-history-3)
  // =========================================================================
  {
    id: 'ett-sst-h3-1',
    topicId: 'ett-sst-history-3',
    subjectId: 'social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Social Science',
    question: {
      hi: 'गुरु नानक देव जी का जन्म कहाँ हुआ था?',
      pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ ਜਨਮ ਕਿੱਥੇ ਹੋਇਆ ਸੀ?',
      en: 'Where was Guru Nanak Dev Ji born?',
    },
    options: {
      A: { hi: 'ਅੰਮ੍ਰਿਤਸਰ', pa: 'ਅੰਮ੍ਰਿਤਸਰ', en: 'Amritsar' },
      B: { hi: 'ਤਲਵੰਡੀ (ਨਨਕਾਣਾ ਸਾਹਿਬ)', pa: 'ਤਲਵੰਡੀ (ਨਨਕਾਣਾ ਸਾਹਿਬ)', en: 'Talwandi (Nankana Sahib)' },
      C: { hi: 'ਕਰਤਾਰਪੁਰ', pa: 'ਕਰਤਾਰਪੁਰ', en: 'Kartarpur' },
      D: { hi: 'ਸੁਲਤਾਨਪੁਰ ਲੋਧੀ', pa: 'ਸੁਲਤਾਨਪੁਰ ਲੋਧੀ', en: 'Sultanpur Lodhi' },
    },
    correct: 'B',
    explanation: {
      hi: 'गुरु नानक देव जी का जन्म 15 अप्रैल 1469 को तलवंडी (अब नानकाना साहिब, पाकिस्तान) में हुआ था। उनके पिता मेहता कालू और माता तृप्ता जी थीं।',
      pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ ਜਨਮ 15 ਅਪ੍ਰੈਲ 1469 ਨੂੰ ਤਲਵੰਡੀ (ਹੁਣ ਨਨਕਾਣਾ ਸਾਹਿਬ, ਪਾਕਿਸਤਾਨ) ਵਿਖੇ ਹੋਇਆ। ਉਨ੍ਹਾਂ ਦੇ ਪਿਤਾ ਮਹਿਤਾ ਕਾਲੂ ਅਤੇ ਮਾਤਾ ਤ੍ਰਿਪਤਾ ਜੀ ਸਨ।',
      en: 'Guru Nanak Dev Ji was born on 15 April 1469 at Talwandi (now Nankana Sahib, Pakistan). His father was Mehta Kalu and mother was Mata Tripta.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
  {
    id: 'ett-sst-h3-2',
    topicId: 'ett-sst-history-3',
    subjectId: 'social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Social Science',
    question: {
      hi: 'गुरु नानक देव जी के तीन मूल सिद्धांत कौन से हैं?',
      pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੇ ਤਿੰਨ ਮੁੱਖ ਸਿਧਾਂਤ ਕਿਹੜੇ ਹਨ?',
      en: 'What are the three core principles of Guru Nanak Dev Ji\'s teachings?',
    },
    options: {
      A: { hi: 'ਸੇਵਾ, ਸਿਮਰਨ, ਸੰਗਤ', pa: 'ਸੇਵਾ, ਸਿਮਰਨ, ਸੰਗਤ', en: 'Seva, Simran, Sangat' },
      B: { hi: 'ਨਾਮ ਜਪੋ, ਕਿਰਤ ਕਰੋ, ਵੰਡ ਛਕੋ', pa: 'ਨਾਮ ਜਪੋ, ਕਿਰਤ ਕਰੋ, ਵੰਡ ਛਕੋ', en: 'Naam Japo, Kirat Karo, Wand Chhako' },
      C: { hi: 'ਪੰਜ ਕਕਾਰ, ਅੰਮ੍ਰਿਤ, ਗੁਰਬਾਣੀ', pa: 'ਪੰਜ ਕਕਾਰ, ਅੰਮ੍ਰਿਤ, ਗੁਰਬਾਣੀ', en: 'Five Ks, Amrit, Gurbani' },
      D: { hi: 'ਸੰਗਤ, ਪੰਗਤ, ਲੰਗਰ', pa: 'ਸੰਗਤ, ਪੰਗਤ, ਲੰਗਰ', en: 'Sangat, Pangat, Langar' },
    },
    correct: 'B',
    explanation: {
      hi: 'गुरु नानक देव जी ने तीन मूल सिद्धांत दिए: नाम जपो (ईश्वर का नाम जपना), किरत करो (ईमानदारी से कमाई करना), वंड छको (कमाई दूसरों के साथ बाँटना)।',
      pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੇ ਤਿੰਨ ਮੁੱਖ ਸਿਧਾਂਤ ਹਨ: ਨਾਮ ਜਪੋ (ਪਰਮਾਤਮਾ ਦਾ ਨਾਮ ਜਪਣਾ), ਕਿਰਤ ਕਰੋ (ਇਮਾਨਦਾਰੀ ਨਾਲ ਕਿਰਤ), ਵੰਡ ਛਕੋ (ਮਿਲ ਕੇ ਖਾਣਾ)।',
      en: 'Guru Nanak Dev Ji gave three core teachings: Naam Japo (recite God\'s name), Kirat Karo (earn honestly), Wand Chhako (share with others).',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
  {
    id: 'ett-sst-h3-3',
    topicId: 'ett-sst-history-3',
    subjectId: 'social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Social Science',
    question: {
      hi: 'श्री गुरु ग्रंथ साहिब जी का संकलन किस गुरु ने करवाया?',
      pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀ ਸੰਪਾਦਨਾ ਕਿਸ ਗੁਰੂ ਨੇ ਕਰਵਾਈ?',
      en: 'Which Guru compiled Sri Guru Granth Sahib Ji?',
    },
    options: {
      A: { hi: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ', en: 'Guru Nanak Dev Ji' },
      B: { hi: 'ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ', pa: 'ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ', en: 'Guru Ram Das Ji' },
      C: { hi: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ', pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ', en: 'Guru Arjan Dev Ji' },
      D: { hi: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ', en: 'Guru Gobind Singh Ji' },
    },
    correct: 'C',
    explanation: {
      hi: 'गुरु अर्जन देव जी ने 1604 में श्री गुरु ग्रंथ साहिब जी का संकलन करवाया। इसे "आदि ग्रंथ" भी कहते हैं। लिखाई का कार्य भाई गुरदास जी ने किया।',
      pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ 1604 ਵਿੱਚ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀ ਸੰਪਾਦਨਾ ਕੀਤੀ। ਇਸਨੂੰ "ਆਦਿ ਗ੍ਰੰਥ" ਵੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ। ਲਿਖਾਈ ਭਾਈ ਗੁਰਦਾਸ ਜੀ ਨੇ ਕੀਤੀ।',
      en: 'Guru Arjan Dev Ji compiled Sri Guru Granth Sahib Ji (Adi Granth) in 1604. It was transcribed by Bhai Gurdas Ji at Amritsar.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },

  // =========================================================================
  // ETT SST — HISTORY: KHALSA AND GURU GOBIND SINGH (ett-sst-history-5)
  // =========================================================================
  {
    id: 'ett-sst-h5-1',
    topicId: 'ett-sst-history-3',
    subjectId: 'social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Social Science',
    question: {
      hi: 'गुरु गोबिंद सिंह जी ने खालसा पंथ की स्थापना किस वर्ष और स्थान पर की?',
      pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਖਾਲਸਾ ਪੰਥ ਦੀ ਸਥਾਪਨਾ ਕਿਸ ਸਾਲ ਅਤੇ ਕਿੱਥੇ ਕੀਤੀ?',
      en: 'In which year and place did Guru Gobind Singh Ji establish the Khalsa Panth?',
    },
    options: {
      A: { hi: '1699, ਅਨੰਦਪੁਰ ਸਾਹਿਬ', pa: '1699, ਅਨੰਦਪੁਰ ਸਾਹਿਬ', en: '1699, Anandpur Sahib' },
      B: { hi: '1675, ਦਿੱਲੀ', pa: '1675, ਦਿੱਲੀ', en: '1675, Delhi' },
      C: { hi: '1708, ਨਾਂਦੇੜ', pa: '1708, ਨਾਂਦੇੜ', en: '1708, Nanded' },
      D: { hi: '1716, ਅੰਮ੍ਰਿਤਸਰ', pa: '1716, ਅੰਮ੍ਰਿਤਸਰ', en: '1716, Amritsar' },
    },
    correct: 'A',
    explanation: {
      hi: 'गुरु गोबिंद सिंह जी ने वैसाखी 1699 को आनंदपुर साहिब में पाँच प्यारों (पंज प्यारे) को अमृत छकाकर खालसा पंथ की स्थापना की। पाँच ककार (केस, कंघा, कड़ा, कृपाण, कच्छा) की परंपरा शुरू हुई।',
      pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਵਿਸਾਖੀ 1699 ਨੂੰ ਆਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿੱਚ ਪੰਜ ਪਿਆਰਿਆਂ ਨੂੰ ਅੰਮ੍ਰਿਤ ਛਕਾ ਕੇ ਖਾਲਸਾ ਪੰਥ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ। ਪੰਜ ਕਕਾਰਾਂ ਦੀ ਪਰੰਪਰਾ ਸ਼ੁਰੂ ਹੋਈ।',
      en: 'Guru Gobind Singh Ji founded the Khalsa Panth on Vaisakhi 1699 at Anandpur Sahib by initiating the Panj Pyare (Five Beloved). The tradition of Five Ks (Panj Kakar) began.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },

  // =========================================================================
  // ETT SST — CIVICS: DEMOCRACY (ett-sst-civics-1)
  // =========================================================================
  {
    id: 'ett-sst-civ1-1',
    topicId: 'ett-sst-history-3',
    subjectId: 'social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Social Science',
    question: {
      hi: 'प्रजातंत्र (लोकतंत्र) की सबसे प्रसिद्ध परिभाषा किसने दी: "जनता का, जनता के लिए, जनता द्वारा शासन"?',
      pa: 'ਲੋਕਤੰਤਰ ਦੀ ਸਭ ਤੋਂ ਮਸ਼ਹੂਰ ਪਰਿਭਾਸ਼ਾ ਕਿਸਨੇ ਦਿੱਤੀ: "ਲੋਕਾਂ ਦਾ, ਲੋਕਾਂ ਦੁਆਰਾ, ਲੋਕਾਂ ਲਈ ਸ਼ਾਸਨ"?',
      en: 'Who gave the famous definition of democracy: "Government of the people, by the people, for the people"?',
    },
    options: {
      A: { hi: 'ਜਾਰਜ ਵਾਸ਼ਿੰਗਟਨ', pa: 'ਜਾਰਜ ਵਾਸ਼ਿੰਗਟਨ', en: 'George Washington' },
      B: { hi: 'ਅਬ੍ਰਾਹਮ ਲਿੰਕਨ', pa: 'ਅਬ੍ਰਾਹਮ ਲਿੰਕਨ', en: 'Abraham Lincoln' },
      C: { hi: 'ਜਵਾਹਰਲਾਲ ਨਹਿਰੂ', pa: 'ਜਵਾਹਰਲਾਲ ਨਹਿਰੂ', en: 'Jawaharlal Nehru' },
      D: { hi: 'ਮਹਾਤਮਾ ਗਾਂਧੀ', pa: 'ਮਹਾਤਮਾ ਗਾਂਧੀ', en: 'Mahatma Gandhi' },
    },
    correct: 'B',
    explanation: {
      hi: 'अमेरिकी राष्ट्रपति अब्राहम लिंकन ने 1863 में गेटिसबर्ग भाषण में लोकतंत्र की यह प्रसिद्ध परिभाषा दी थी।',
      pa: 'ਅਮਰੀਕੀ ਰਾਸ਼ਟਰਪਤੀ ਅਬ੍ਰਾਹਮ ਲਿੰਕਨ ਨੇ 1863 ਵਿੱਚ ਗੈਟਿਸਬਰਗ ਭਾਸ਼ਣ ਵਿੱਚ ਇਹ ਪਰਿਭਾਸ਼ਾ ਦਿੱਤੀ।',
      en: 'US President Abraham Lincoln gave this famous definition of democracy in his Gettysburg Address in 1863.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
  {
    id: 'ett-sst-civ1-2',
    topicId: 'ett-sst-history-3',
    subjectId: 'social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Social Science',
    question: {
      hi: 'भारत में सार्वभौम वयस्क मताधिकार का अर्थ है कि मतदान का अधिकार दिया जाता है:',
      pa: 'ਭਾਰਤ ਵਿੱਚ ਵਿਆਪਕ ਬਾਲਗ ਮਤਾਧਿਕਾਰ ਦਾ ਅਰਥ ਹੈ ਕਿ ਵੋਟ ਦਾ ਅਧਿਕਾਰ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ:',
      en: 'Universal Adult Franchise in India means the right to vote is given to:',
    },
    options: {
      A: { hi: 'ਸਿਰਫ਼ ਪੜ੍ਹੇ-ਲਿਖੇ ਨਾਗਰਿਕਾਂ ਨੂੰ', pa: 'ਸਿਰਫ਼ ਪੜ੍ਹੇ-ਲਿਖੇ ਨਾਗਰਿਕਾਂ ਨੂੰ', en: 'Only educated citizens' },
      B: { hi: 'ਸਿਰਫ਼ ਟੈਕਸ ਅਦਾਇਗੀਕਾਰਾਂ ਨੂੰ', pa: 'ਸਿਰਫ਼ ਟੈਕਸ ਅਦਾਇਗੀਕਾਰਾਂ ਨੂੰ', en: 'Only taxpayers' },
      C: { hi: '18 ਸਾਲ ਜਾਂ ਵੱਧ ਉਮਰ ਦੇ ਸਾਰੇ ਨਾਗਰਿਕਾਂ ਨੂੰ', pa: '18 ਸਾਲ ਜਾਂ ਵੱਧ ਉਮਰ ਦੇ ਸਾਰੇ ਨਾਗਰਿਕਾਂ ਨੂੰ', en: 'All citizens aged 18 or above' },
      D: { hi: 'ਸਿਰਫ਼ ਸਰਕਾਰੀ ਕਰਮਚਾਰੀਆਂ ਨੂੰ', pa: 'ਸਿਰਫ਼ ਸਰਕਾਰੀ ਕਰਮਚਾਰੀਆਂ ਨੂੰ', en: 'Only government employees' },
    },
    correct: 'C',
    explanation: {
      hi: 'भारत में 18 वर्ष या उससे अधिक आयु के सभी नागरिकों को जाति, धर्म, लिंग, शिक्षा या संपत्ति के आधार पर भेदभाव किए बिना मताधिकार दिया जाता है। यह 1989 में 61वें संशोधन से 21 से 18 वर्ष हुआ।',
      pa: 'ਭਾਰਤ ਵਿੱਚ 18 ਸਾਲ ਜਾਂ ਵੱਧ ਉਮਰ ਦੇ ਸਾਰੇ ਨਾਗਰਿਕਾਂ ਨੂੰ ਜਾਤ, ਧਰਮ, ਲਿੰਗ ਜਾਂ ਸੰਪਤੀ ਦੇ ਆਧਾਰ \'ਤੇ ਭੇਦ ਕੀਤੇ ਬਿਨਾਂ ਵੋਟ ਦਾ ਅਧਿਕਾਰ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।',
      en: 'In India, all citizens aged 18+ have the right to vote regardless of caste, religion, gender, literacy or property. The voting age was lowered from 21 to 18 by the 61st Amendment in 1989.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },

  // =========================================================================
  // ETT SST — CIVICS: FUNDAMENTAL RIGHTS (ett-sst-civics-2)
  // =========================================================================
  {
    id: 'ett-sst-civ2-1',
    topicId: 'ett-sst-history-3',
    subjectId: 'social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Social Science',
    question: {
      hi: 'भारतीय संविधान के किस अनुच्छेद में 14 वर्ष से कम आयु के बच्चों को किसी भी कारखाने या खान में काम करने पर रोक है?',
      pa: 'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੇ ਕਿਸ ਅਨੁਛੇਦ ਵਿੱਚ 14 ਸਾਲ ਤੋਂ ਘੱਟ ਉਮਰ ਦੇ ਬੱਚਿਆਂ ਨੂੰ ਕਿਸੇ ਕਾਰਖਾਨੇ ਜਾਂ ਖਾਣ ਵਿੱਚ ਕੰਮ ਕਰਨ \'ਤੇ ਪਾਬੰਦੀ ਹੈ?',
      en: 'Which Article of the Indian Constitution prohibits employment of children below 14 years in factories or mines?',
    },
    options: {
      A: { hi: 'ਧਾਰਾ 14', pa: 'ਧਾਰਾ 14', en: 'Article 14' },
      B: { hi: 'ਧਾਰਾ 21A', pa: 'ਧਾਰਾ 21A', en: 'Article 21A' },
      C: { hi: 'ਧਾਰਾ 24', pa: 'ਧਾਰਾ 24', en: 'Article 24' },
      D: { hi: 'ਧਾਰਾ 32', pa: 'ਧਾਰਾ 32', en: 'Article 32' },
    },
    correct: 'C',
    explanation: {
      hi: 'अनुच्छेद 24 के अनुसार 14 वर्ष से कम आयु के बच्चों को किसी कारखाने, खान या अन्य खतरनाक रोजगार में काम पर नहीं रखा जा सकता। यह बाल श्रम पर रोक लगाता है।',
      pa: 'ਧਾਰਾ 24 ਅਨੁਸਾਰ 14 ਸਾਲ ਤੋਂ ਘੱਟ ਉਮਰ ਦੇ ਬੱਚਿਆਂ ਨੂੰ ਕਿਸੇ ਕਾਰਖਾਨੇ, ਖਾਣ ਜਾਂ ਹੋਰ ਖ਼ਤਰਨਾਕ ਕੰਮ ਵਿੱਚ ਨਹੀਂ ਰੱਖਿਆ ਜਾ ਸਕਦਾ।',
      en: 'Article 24 prohibits employment of children below 14 years in any factory, mine or hazardous occupation. This prevents child labour.',
    },
    difficulty: 'medium',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
  {
    id: 'ett-sst-civ2-2',
    topicId: 'ett-sst-history-3',
    subjectId: 'social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Social Science',
    question: {
      hi: 'भारतीय संविधान में शिक्षा का अधिकार (Right to Education) किस अनुच्छेद के तहत मूल अधिकार बना?',
      pa: 'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਵਿੱਚ ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ ਕਿਸ ਧਾਰਾ ਤਹਿਤ ਮੌਲਿਕ ਅਧਿਕਾਰ ਬਣਿਆ?',
      en: 'Under which Article of the Indian Constitution did the Right to Education become a Fundamental Right?',
    },
    options: {
      A: { hi: 'ਧਾਰਾ 19', pa: 'ਧਾਰਾ 19', en: 'Article 19' },
      B: { hi: 'ਧਾਰਾ 21A', pa: 'ਧਾਰਾ 21A', en: 'Article 21A' },
      C: { hi: 'ਧਾਰਾ 45', pa: 'ਧਾਰਾ 45', en: 'Article 45' },
      D: { hi: 'ਧਾਰਾ 51A', pa: 'ਧਾਰਾ 51A', en: 'Article 51A' },
    },
    correct: 'B',
    explanation: {
      hi: '86वें संवैधानिक संशोधन 2002 द्वारा अनुच्छेद 21A जोड़ा गया जिसके तहत 6-14 वर्ष के बच्चों को मुफ्त और अनिवार्य शिक्षा का मूल अधिकार दिया गया।',
      pa: '86ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ 2002 ਦੁਆਰਾ ਧਾਰਾ 21A ਜੋੜੀ ਗਈ ਜਿਸ ਤਹਿਤ 6-14 ਸਾਲ ਦੇ ਬੱਚਿਆਂ ਨੂੰ ਮੁਫ਼ਤ ਅਤੇ ਲਾਜ਼ਮੀ ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ ਮਿਲਿਆ।',
      en: 'The 86th Constitutional Amendment 2002 added Article 21A, giving children aged 6–14 the Fundamental Right to free and compulsory education (RTE Act 2009).',
    },
    difficulty: 'medium',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },

  // =========================================================================
  // ETT SST — GEOGRAPHY: INDIA OVERVIEW (ett-sst-geography-1)
  // =========================================================================
  {
    id: 'ett-sst-geo1-1',
    topicId: 'ett-sst-history-3',
    subjectId: 'social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Social Science',
    question: {
      hi: 'भारत का क्षेत्रफल विश्व के कुल भूमि क्षेत्र का लगभग कितने प्रतिशत है?',
      pa: 'ਭਾਰਤ ਦਾ ਖੇਤਰਫਲ ਸੰਸਾਰ ਦੇ ਕੁੱਲ ਭੂਮੀ ਖੇਤਰ ਦਾ ਲਗਭਗ ਕਿੰਨੇ ਪ੍ਰਤੀਸ਼ਤ ਹੈ?',
      en: 'India\'s land area is approximately what percentage of the world\'s total land area?',
    },
    options: {
      A: { hi: '1.5%', pa: '1.5%', en: '1.5%' },
      B: { hi: '2.4%', pa: '2.4%', en: '2.4%' },
      C: { hi: '3.7%', pa: '3.7%', en: '3.7%' },
      D: { hi: '4.5%', pa: '4.5%', en: '4.5%' },
    },
    correct: 'B',
    explanation: {
      hi: 'भारत का कुल क्षेत्रफल लगभग 32.87 लाख वर्ग किमी है जो विश्व के कुल भूमि क्षेत्र का लगभग 2.4% है। भारत क्षेत्रफल की दृष्टि से विश्व का 7वाँ सबसे बड़ा देश है।',
      pa: 'ਭਾਰਤ ਦਾ ਕੁੱਲ ਖੇਤਰਫਲ ਲਗਭਗ 32.87 ਲੱਖ ਵਰਗ ਕਿਮੀ ਹੈ ਜੋ ਸੰਸਾਰ ਦੇ ਕੁੱਲ ਭੂਮੀ ਖੇਤਰ ਦਾ ਲਗਭਗ 2.4% ਹੈ।',
      en: 'India\'s total area is about 3.287 million km², which is approximately 2.4% of the world\'s total land area. India is the 7th largest country by area.',
    },
    difficulty: 'medium',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
  {
    id: 'ett-sst-geo1-2',
    topicId: 'ett-sst-history-3',
    subjectId: 'social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B — Social Science',
    question: {
      hi: 'भारत की मानक मध्याह्न रेखा (Standard Meridian) कौन सी है?',
      pa: 'ਭਾਰਤ ਦੀ ਮਿਆਰੀ ਮੱਧਿਆਹਨ ਰੇਖਾ ਕਿਹੜੀ ਹੈ?',
      en: 'What is the Standard Meridian of India?',
    },
    options: {
      A: { hi: '72°30\'E', pa: '72°30\'E', en: '72°30\'E' },
      B: { hi: '80°30\'E', pa: '80°30\'E', en: '80°30\'E' },
      C: { hi: '82°30\'E', pa: '82°30\'E', en: '82°30\'E' },
      D: { hi: '90°E', pa: '90°E', en: '90°E' },
    },
    correct: 'C',
    explanation: {
      hi: 'भारत की मानक मध्याह्न रेखा 82°30\'E देशांतर है जो उत्तर प्रदेश के इलाहाबाद (प्रयागराज) के निकट से गुजरती है। IST (Indian Standard Time) = UTC + 5:30 घंटे।',
      pa: 'ਭਾਰਤ ਦੀ ਮਿਆਰੀ ਮੱਧਿਆਹਨ ਰੇਖਾ 82°30\'E ਦੇਸ਼ਾਂਤਰ ਹੈ ਜੋ ਇਲਾਹਾਬਾਦ (ਪ੍ਰਯਾਗਰਾਜ) ਨੇੜੇ ਲੰਘਦੀ ਹੈ।',
      en: 'India\'s Standard Meridian is 82°30\'E longitude, passing near Allahabad (Prayagraj) in UP. IST = UTC + 5:30 hours.',
    },
    difficulty: 'medium',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },

  // =========================================================================
  // ETT PUNJABI — CULTURAL TRADITIONS (ett-punjabi-2)
  // =========================================================================
  {
    id: 'ett-pa2-1',
    topicId: 'ett-punjabi-3',
    subjectId: 'punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper A — Punjabi',
    question: {
      hi: 'ਵਿਸਾਖੀ ਦਾ ਤਿਉਹਾਰ ਪੰਜਾਬ ਵਿੱਚ ਕਦੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ?',
      pa: 'ਵਿਸਾਖੀ ਦਾ ਤਿਉਹਾਰ ਪੰਜਾਬ ਵਿੱਚ ਕਦੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ?',
      en: 'When is the festival of Vaisakhi celebrated in Punjab?',
    },
    options: {
      A: { hi: '13 ਜਨਵਰੀ', pa: '13 ਜਨਵਰੀ', en: '13 January' },
      B: { hi: '13-14 ਅਪ੍ਰੈਲ', pa: '13-14 ਅਪ੍ਰੈਲ', en: '13–14 April' },
      C: { hi: '15 ਅਗਸਤ', pa: '15 ਅਗਸਤ', en: '15 August' },
      D: { hi: '1 ਨਵੰਬਰ', pa: '1 ਨਵੰਬਰ', en: '1 November' },
    },
    correct: 'B',
    explanation: {
      hi: 'ਵਿਸਾਖੀ ਹਰ ਸਾਲ 13 ਜਾਂ 14 ਅਪ੍ਰੈਲ ਨੂੰ ਮਨਾਈ ਜਾਂਦੀ ਹੈ। ਇਹ ਕਣਕ ਦੀ ਫ਼ਸਲ ਦਾ ਤਿਉਹਾਰ ਹੈ ਅਤੇ 1699 ਵਿੱਚ ਖਾਲਸਾ ਪੰਥ ਦੀ ਸਥਾਪਨਾ ਦੀ ਯਾਦ ਵਿੱਚ ਵੀ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
      pa: 'ਵਿਸਾਖੀ ਹਰ ਸਾਲ 13 ਜਾਂ 14 ਅਪ੍ਰੈਲ ਨੂੰ ਮਨਾਈ ਜਾਂਦੀ ਹੈ। ਇਹ ਕਣਕ ਦੀ ਫ਼ਸਲ ਦਾ ਤਿਉਹਾਰ ਹੈ ਅਤੇ 1699 ਵਿੱਚ ਖਾਲਸਾ ਪੰਥ ਦੀ ਸਥਾਪਨਾ ਦੀ ਯਾਦ ਵਿੱਚ ਵੀ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
      en: 'Vaisakhi is celebrated on 13 or 14 April annually. It marks the wheat harvest season and also commemorates the founding of the Khalsa Panth in 1699.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
  {
    id: 'ett-pa2-2',
    topicId: 'ett-punjabi-3',
    subjectId: 'punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper A — Punjabi',
    question: {
      hi: 'ਪੰਜਾਬ ਵਿੱਚ "ਲੋਹੜੀ" ਦਾ ਤਿਉਹਾਰ ਕਿਸ ਮਹੀਨੇ ਵਿੱਚ ਅਤੇ ਕਿਸ ਦੀ ਖ਼ੁਸ਼ੀ ਵਿੱਚ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ?',
      pa: 'ਪੰਜਾਬ ਵਿੱਚ "ਲੋਹੜੀ" ਦਾ ਤਿਉਹਾਰ ਕਿਸ ਮਹੀਨੇ ਵਿੱਚ ਅਤੇ ਕਿਸ ਦੀ ਖ਼ੁਸ਼ੀ ਵਿੱਚ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ?',
      en: 'In which month is "Lohri" celebrated in Punjab and what does it mark?',
    },
    options: {
      A: { hi: 'ਅਪ੍ਰੈਲ, ਕਣਕ ਦੀ ਵਾਢੀ', pa: 'ਅਪ੍ਰੈਲ, ਕਣਕ ਦੀ ਵਾਢੀ', en: 'April, wheat harvest' },
      B: { hi: 'ਜਨਵਰੀ, ਪੋਹ ਮਹੀਨੇ ਦੇ ਅੰਤ ਅਤੇ ਨਵੀਂ ਫ਼ਸਲ ਦਾ ਸੁਆਗਤ', pa: 'ਜਨਵਰੀ, ਪੋਹ ਮਹੀਨੇ ਦੇ ਅੰਤ ਅਤੇ ਨਵੀਂ ਫ਼ਸਲ ਦਾ ਸੁਆਗਤ', en: 'January, end of Poh month and welcoming new crops' },
      C: { hi: 'ਅਕਤੂਬਰ, ਦਸਹਿਰਾ ਦੇ ਨੇੜੇ', pa: 'ਅਕਤੂਬਰ, ਦਸਹਿਰਾ ਦੇ ਨੇੜੇ', en: 'October, near Dussehra' },
      D: { hi: 'ਨਵੰਬਰ, ਗੁਰੂ ਪਰਬ', pa: 'ਨਵੰਬਰ, ਗੁਰੂ ਪਰਬ', en: 'November, Guru Parb' },
    },
    correct: 'B',
    explanation: {
      hi: 'ਲੋਹੜੀ ਮਕਰ ਸੰਕ੍ਰਾਂਤੀ ਤੋਂ ਇੱਕ ਦਿਨ ਪਹਿਲਾਂ 13 ਜਨਵਰੀ ਨੂੰ ਮਨਾਈ ਜਾਂਦੀ ਹੈ। ਇਹ ਸਰਦੀ ਦੀ ਸਮਾਪਤੀ, ਨਵੀਂ ਫ਼ਸਲ ਅਤੇ ਘਰ ਵਿੱਚ ਨਵੇਂ ਜੀਅ ਦਾ ਸੁਆਗਤ ਕਰਦੀ ਹੈ।',
      pa: 'ਲੋਹੜੀ ਮਕਰ ਸੰਕ੍ਰਾਂਤੀ ਤੋਂ ਇੱਕ ਦਿਨ ਪਹਿਲਾਂ 13 ਜਨਵਰੀ ਨੂੰ ਮਨਾਈ ਜਾਂਦੀ ਹੈ। ਇਹ ਸਰਦੀ ਦੀ ਸਮਾਪਤੀ, ਨਵੀਂ ਫ਼ਸਲ ਅਤੇ ਪਰਿਵਾਰ ਦੀ ਖ਼ੁਸ਼ਹਾਲੀ ਦਾ ਤਿਉਹਾਰ ਹੈ।',
      en: 'Lohri is celebrated on 13 January, the day before Makar Sankranti. It marks the end of winter, the new harvest (sugarcane/sesame) and the birth of a new child in the family.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
  {
    id: 'ett-pa2-3',
    topicId: 'ett-punjabi-3',
    subjectId: 'punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper A — Punjabi',
    question: {
      hi: 'ਪੰਜਾਬ ਦਾ ਰਾਜ ਨਾਚ ਕਿਹੜਾ ਹੈ?',
      pa: 'ਪੰਜਾਬ ਦਾ ਰਾਜ ਨਾਚ ਕਿਹੜਾ ਹੈ?',
      en: 'What is the state dance of Punjab?',
    },
    options: {
      A: { hi: 'ਕਥਕ', pa: 'ਕਥਕ', en: 'Kathak' },
      B: { hi: 'ਭਰਤਨਾਟਿਅਮ', pa: 'ਭਰਤਨਾਟਿਅਮ', en: 'Bharatanatyam' },
      C: { hi: 'ਭੰਗੜਾ', pa: 'ਭੰਗੜਾ', en: 'Bhangra' },
      D: { hi: 'ਕੁਚੀਪੁੜੀ', pa: 'ਕੁਚੀਪੁੜੀ', en: 'Kuchipudi' },
    },
    correct: 'C',
    explanation: {
      hi: 'ਭੰਗੜਾ ਪੰਜਾਬ ਦਾ ਪਰੰਪਰਾਗਤ ਲੋਕ ਨਾਚ ਹੈ ਜੋ ਅਸਲ ਵਿੱਚ ਵਿਸਾਖੀ ਦੌਰਾਨ ਕਣਕ ਦੀ ਵਾਢੀ ਦੀ ਖ਼ੁਸ਼ੀ ਵਿੱਚ ਕੀਤਾ ਜਾਂਦਾ ਸੀ। ਗਿੱਧਾ ਔਰਤਾਂ ਦਾ ਲੋਕ ਨਾਚ ਹੈ।',
      pa: 'ਭੰਗੜਾ ਪੰਜਾਬ ਦਾ ਪਰੰਪਰਾਗਤ ਲੋਕ ਨਾਚ ਹੈ। ਇਹ ਅਸਲ ਵਿੱਚ ਵਿਸਾਖੀ \'ਤੇ ਕਣਕ ਦੀ ਵਾਢੀ ਦੀ ਖ਼ੁਸ਼ੀ ਵਿੱਚ ਕੀਤਾ ਜਾਂਦਾ ਸੀ। ਗਿੱਧਾ ਔਰਤਾਂ ਦਾ ਲੋਕ ਨਾਚ ਹੈ।',
      en: 'Bhangra is the traditional folk dance of Punjab, originally performed during Vaisakhi to celebrate the wheat harvest. Giddha is the women\'s folk dance.',
    },
    difficulty: 'easy',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },

  // =========================================================================
  // ETT HINDI — INFLECTING WORD CLASSES (ett-hindi-4)
  // Nouns, Pronouns, Adjectives, Verbs
  // =========================================================================
  {
    id: 'ett-hindi4-1',
    topicId: 'ett-hindi-4',
    subjectId: 'hindi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper A — Hindi',
    question: {
      hi: 'निम्नलिखित में से कौन सा शब्द स्त्रीलिंग है?',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਸ਼ਬਦ ਇਸਤਰੀਲਿੰਗ ਹੈ?',
      en: 'Which of the following words is feminine gender (स्त्रीलिंग)?',
    },
    options: {
      A: { hi: 'घोड़ा', pa: 'ਘੋੜਾ', en: 'घोड़ा (horse-male)' },
      B: { hi: 'मेज़', pa: 'ਮੇਜ਼', en: 'मेज़ (table)' },
      C: { hi: 'पेड़', pa: 'ਰੁੱਖ', en: 'पेड़ (tree)' },
      D: { hi: 'कमरा', pa: 'ਕਮਰਾ', en: 'कमरा (room)' },
    },
    correct: 'B',
    explanation: {
      hi: 'मेज़ स्त्रीलिंग शब्द है। घोड़ा, पेड़ और कमरा पुल्लिंग शब्द हैं। हिंदी में जड़ वस्तुओं का लिंग याद करना पड़ता है: मेज़ (स्त्री), कुर्सी (स्त्री), पंखा (पुल्लिंग), दरवाज़ा (पुल्लिंग)।',
      pa: 'ਮੇਜ਼ ਇਸਤਰੀਲਿੰਗ ਸ਼ਬਦ ਹੈ। ਹਿੰਦੀ ਵਿੱਚ ਜਮਾਦ ਵਸਤਾਂ ਦਾ ਲਿੰਗ ਯਾਦ ਕਰਨਾ ਪੈਂਦਾ ਹੈ।',
      en: '"मेज़" (table) is a feminine (स्त्रीलिंग) noun. "घोड़ा", "पेड़" and "कमरा" are masculine. In Hindi, genders of inanimate objects must be memorised.',
    },
    difficulty: 'medium',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
  {
    id: 'ett-hindi4-2',
    topicId: 'ett-hindi-4',
    subjectId: 'hindi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper A — Hindi',
    question: {
      hi: '"राम ने सेब खाया।" इस वाक्य में "राम" किस कारक में है?',
      pa: '"ਰਾਮ ਨੇ ਸੇਬ ਖਾਧਾ।" ਇਸ ਵਾਕ ਵਿੱਚ "ਰਾਮ" ਕਿਸ ਕਾਰਕ ਵਿੱਚ ਹੈ?',
      en: 'In the sentence "राम ने सेब खाया", what is the case (कारक) of "राम"?',
    },
    options: {
      A: { hi: 'संप्रदान कारक', pa: 'ਸੰਪ੍ਰਦਾਨ ਕਾਰਕ', en: 'Dative (संप्रदान)' },
      B: { hi: 'कर्ता कारक', pa: 'ਕਰਤਾ ਕਾਰਕ', en: 'Nominative (कर्ता)' },
      C: { hi: 'कर्म कारक', pa: 'ਕਰਮ ਕਾਰਕ', en: 'Accusative (कर्म)' },
      D: { hi: 'करण कारक', pa: 'ਕਰਣ ਕਾਰਕ', en: 'Instrumental (करण)' },
    },
    correct: 'B',
    explanation: {
      hi: '"राम" इस वाक्य में क्रिया "खाना" करने वाला है इसलिए कर्ता कारक है। विभक्ति चिह्न "ने" का प्रयोग सकर्मक क्रिया के भूतकाल में होता है।',
      pa: '"ਰਾਮ" ਇਸ ਵਾਕ ਵਿੱਚ ਕਿਰਿਆ "ਖਾਣਾ" ਕਰਨ ਵਾਲਾ ਹੈ ਇਸ ਲਈ ਕਰਤਾ ਕਾਰਕ ਹੈ। "ਨੇ" ਵਿਭਕਤੀ ਚਿੰਨ੍ਹ ਸਕਰਮਕ ਕਿਰਿਆ ਦੇ ਭੂਤਕਾਲ ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
      en: '"राम" is the doer of the verb "खाना" so it is in the nominative/subject case (कर्ता कारक). The postposition "ने" is used with transitive verbs in past tense.',
    },
    difficulty: 'medium',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },

  // =========================================================================
  // ETT ENGLISH — GRAMMAR (ett-english-2)
  // =========================================================================
  {
    id: 'ett-eng2-1',
    topicId: 'ett-english-2',
    subjectId: 'english',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper A — English',
    question: {
      hi: 'Change the following sentence into passive voice: "She writes a letter."',
      pa: 'Change the following sentence into passive voice: "She writes a letter."',
      en: 'Change the following sentence into passive voice: "She writes a letter."',
    },
    options: {
      A: { hi: 'A letter is written by her.', pa: 'A letter is written by her.', en: 'A letter is written by her.' },
      B: { hi: 'A letter was written by her.', pa: 'A letter was written by her.', en: 'A letter was written by her.' },
      C: { hi: 'A letter has been written by her.', pa: 'A letter has been written by her.', en: 'A letter has been written by her.' },
      D: { hi: 'A letter will be written by her.', pa: 'A letter will be written by her.', en: 'A letter will be written by her.' },
    },
    correct: 'A',
    explanation: {
      hi: 'Present Simple Active: She writes a letter. Passive structure: Object + is/am/are + V3 + by + Subject. "Letter" is singular, third person → "is written". A letter is written by her.',
      pa: 'Present Simple Active: She writes a letter. Passive: A letter is written by her. (Object + is/are/am + V3 + by + Subject)',
      en: 'For Present Simple Active "She writes a letter", the passive is: Object (A letter) + is/are + V3 (written) + by + Subject (her). → A letter is written by her.',
    },
    difficulty: 'medium',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
  {
    id: 'ett-eng2-2',
    topicId: 'ett-english-2',
    subjectId: 'english',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper A — English',
    question: {
      hi: 'Change into Indirect Speech: He said, "I am going to school."',
      pa: 'Change into Indirect Speech: He said, "I am going to school."',
      en: 'Change into Indirect Speech: He said, "I am going to school."',
    },
    options: {
      A: { hi: 'He said that he is going to school.', pa: 'He said that he is going to school.', en: 'He said that he is going to school.' },
      B: { hi: 'He said that he was going to school.', pa: 'He said that he was going to school.', en: 'He said that he was going to school.' },
      C: { hi: 'He said that he would go to school.', pa: 'He said that he would go to school.', en: 'He said that he would go to school.' },
      D: { hi: 'He told that I am going to school.', pa: 'He told that I am going to school.', en: 'He told that I am going to school.' },
    },
    correct: 'B',
    explanation: {
      hi: 'Direct speech reporting verb is "said" (past). So the present continuous "am going" shifts back to past continuous "was going". Pronoun "I" changes to "he". → He said that he was going to school.',
      pa: 'Reporting verb "said" (past) ਹੈ ਇਸ ਲਈ "am going" ਬਦਲ ਕੇ "was going" ਬਣਦਾ ਹੈ। "I" ਬਦਲ ਕੇ "he" ਬਣਦਾ ਹੈ।',
      en: 'Since the reporting verb "said" is past tense, we apply backshift: "am going" → "was going". "I" changes to "he". → He said that he was going to school.',
    },
    difficulty: 'medium',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
  {
    id: 'ett-eng2-3',
    topicId: 'ett-english-2',
    subjectId: 'english',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper A — English',
    question: {
      hi: 'Fill in the blank with the correct article: "She is _____ honest woman."',
      pa: 'Fill in the blank with the correct article: "She is _____ honest woman."',
      en: 'Fill in the blank with the correct article: "She is _____ honest woman."',
    },
    options: {
      A: { hi: 'a', pa: 'a', en: 'a' },
      B: { hi: 'an', pa: 'an', en: 'an' },
      C: { hi: 'the', pa: 'the', en: 'the' },
      D: { hi: 'no article', pa: 'no article', en: 'no article' },
    },
    correct: 'B',
    explanation: {
      hi: 'Articles "a" और "an" का प्रयोग उच्चारण के आधार पर होता है, अक्षर के आधार पर नहीं। "Honest" का उच्चारण "ɒnɪst" (vowel sound "o" से शुरू) है इसलिए "an" का प्रयोग होता है।',
      pa: '"Honest" ਦਾ ਉਚਾਰਨ ਸਵਰ ਧੁਨੀ ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ (h ਚੁੱਪ ਹੈ) ਇਸ ਲਈ "an" ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
      en: '"Honest" starts with a vowel sound (the "h" is silent, pronounced "ɒnɪst"). So we use "an" before vowel sounds, not "a". → "an honest woman".',
    },
    difficulty: 'medium',
    originType: 'authored-original',
    editorialStatus: 'authored',
  },
];
