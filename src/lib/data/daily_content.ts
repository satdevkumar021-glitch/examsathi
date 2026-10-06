// ============================================================
// ExamSathi - Daily Content Hub
// Thought of the day, GK events, mini-quizzes, current affairs
// Content is date-indexed (YYYY-MM-DD format).
// In production, this comes from a database via API.
// For the static site, we seed key dates.
// ============================================================

export interface DailyContent {
  date: string; // YYYY-MM-DD
  thought: {
    text: { hi: string; pa: string; en: string };
    author: { hi: string; pa: string; en: string };
  };
  gkEvent: {
    title: { hi: string; pa: string; en: string };
    description: { hi: string; pa: string; en: string };
    source: string;
  } | null;
  miniQuiz?: {
    question: { hi: string; pa: string; en: string };
    options: {
      A: { hi: string; pa: string; en: string };
      B: { hi: string; pa: string; en: string };
      C: { hi: string; pa: string; en: string };
      D: { hi: string; pa: string; en: string };
    };
    correct: 'A' | 'B' | 'C' | 'D';
    explanation: { hi: string; pa: string; en: string };
  };
}

export const DAILY_CONTENT: Record<string, DailyContent> = {
  '10-02': { // 2 October (month-day key for recurring annual events)
    date: '10-02',
    thought: {
      text: {
        hi: 'जहाँ प्रेम है, वहाँ जीवन है।',
        pa: 'ਜਿੱਥੇ ਪਿਆਰ ਹੈ, ਉੱਥੇ ਜ਼ਿੰਦਗੀ ਹੈ।',
        en: 'Where there is love, there is life.',
      },
      author: { hi: 'महात्मा गांधी', pa: 'ਮਹਾਤਮਾ ਗਾਂਧੀ', en: 'Mahatma Gandhi' },
    },
    gkEvent: {
      title: {
        hi: 'गांधी जयंती और शास्त्री जयंती',
        pa: 'ਗਾਂਧੀ ਜਯੰਤੀ ਅਤੇ ਸ਼ਾਸਤਰੀ ਜਯੰਤੀ',
        en: 'Gandhi Jayanti & Shastri Jayanti',
      },
      description: {
        hi: '2 अक्टूबर 1869 को मोहनदास करमचंद गांधी का जन्म पोरबंदर, गुजरात में हुआ था। इसी दिन 1904 में लाल बहादुर शास्त्री का भी जन्म हुआ था। संयुक्त राष्ट्र ने 2 अक्टूबर को अंतर्राष्ट्रीय अहिंसा दिवस घोषित किया है।',
        pa: '2 ਅਕਤੂਬਰ 1869 ਨੂੰ ਮਹਾਤਮਾ ਗਾਂਧੀ ਦਾ ਜਨਮ ਪੋਰਬੰਦਰ, ਗੁਜਰਾਤ ਵਿੱਚ ਹੋਇਆ। ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਨੇ ਇਸ ਦਿਨ ਨੂੰ ਅੰਤਰਰਾਸ਼ਟਰੀ ਅਹਿੰਸਾ ਦਿਵਸ ਘੋਸ਼ਿਤ ਕੀਤਾ ਹੈ।',
        en: 'Mahatma Gandhi was born on 2 October 1869 in Porbandar, Gujarat. Lal Bahadur Shastri was also born on this day in 1904. The UN declared 2 October as the International Day of Non-Violence.',
      },
      source: 'Government of India, National Portal',
    },
    miniQuiz: {
      question: {
        hi: 'महात्मा गांधी का जन्म किस राज्य में हुआ था?',
        pa: 'ਮਹਾਤਮਾ ਗਾਂਧੀ ਦਾ ਜਨਮ ਕਿਸ ਰਾਜ ਵਿੱਚ ਹੋਇਆ ਸੀ?',
        en: 'In which state was Mahatma Gandhi born?',
      },
      options: {
        A: { hi: 'राजस्थान', pa: 'ਰਾਜਸਥਾਨ', en: 'Rajasthan' },
        B: { hi: 'गुजरात', pa: 'ਗੁਜਰਾਤ', en: 'Gujarat' },
        C: { hi: 'महाराष्ट्र', pa: 'ਮਹਾਰਾਸ਼ਟਰ', en: 'Maharashtra' },
        D: { hi: 'मध्य प्रदेश', pa: 'ਮੱਧ ਪ੍ਰਦੇਸ਼', en: 'Madhya Pradesh' },
      },
      correct: 'B',
      explanation: {
        hi: 'महात्मा गांधी का जन्म 2 अक्टूबर 1869 को पोरबंदर, गुजरात में हुआ था।',
        pa: 'ਮਹਾਤਮਾ ਗਾਂਧੀ ਦਾ ਜਨਮ 2 ਅਕਤੂਬਰ 1869 ਨੂੰ ਪੋਰਬੰਦਰ, ਗੁਜਰਾਤ ਵਿੱਚ ਹੋਇਆ ਸੀ।',
        en: 'Mahatma Gandhi was born on 2 October 1869 in Porbandar, Gujarat.',
      },
    },
  },
  '01-26': { // 26 January — Republic Day
    date: '01-26',
    thought: {
      text: {
        hi: 'विविधता में एकता ही भारत की शक्ति है।',
        pa: 'ਵਿਭਿੰਨਤਾ ਵਿੱਚ ਏਕਤਾ ਭਾਰਤ ਦੀ ਤਾਕਤ ਹੈ।',
        en: 'Unity in diversity is the strength of India.',
      },
      author: { hi: 'डॉ. बी. आर. अम्बेडकर', pa: 'ਡਾ. ਬੀ. ਆਰ. ਅੰਬੇਡਕਰ', en: 'Dr. B. R. Ambedkar' },
    },
    gkEvent: {
      title: {
        hi: 'गणतंत्र दिवस — भारतीय संविधान लागू हुआ',
        pa: 'ਗਣਤੰਤਰ ਦਿਵਸ — ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਲਾਗੂ ਹੋਇਆ',
        en: 'Republic Day — Indian Constitution came into force',
      },
      description: {
        hi: '26 जनवरी 1950 को भारत का संविधान लागू हुआ और भारत एक गणतंत्र बना। इसी दिन को गणतंत्र दिवस के रूप में मनाया जाता है। भारतीय संविधान विश्व का सबसे बड़ा लिखित संविधान है।',
        pa: '26 ਜਨਵਰੀ 1950 ਨੂੰ ਭਾਰਤ ਦਾ ਸੰਵਿਧਾਨ ਲਾਗੂ ਹੋਇਆ। ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੁਨੀਆ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਲਿਖਤੀ ਸੰਵਿਧਾਨ ਹੈ।',
        en: 'On 26 January 1950, the Constitution of India came into force, making India a Republic. The Indian Constitution is the longest written constitution in the world.',
      },
      source: 'Constitution of India, Government of India',
    },
  },
  '08-15': { // 15 August — Independence Day
    date: '08-15',
    thought: {
      text: {
        hi: 'आराम हराम है।',
        pa: 'ਆਰਾਮ ਹਰਾਮ ਹੈ।',
        en: 'Rest is sin (Aram Haram Hai).',
      },
      author: { hi: 'जवाहरलाल नेहरू', pa: 'ਜਵਾਹਰਲਾਲ ਨਹਿਰੂ', en: 'Jawaharlal Nehru' },
    },
    gkEvent: {
      title: {
        hi: 'स्वतंत्रता दिवस — भारत स्वतंत्र हुआ',
        pa: 'ਆਜ਼ਾਦੀ ਦਿਵਸ — ਭਾਰਤ ਆਜ਼ਾਦ ਹੋਇਆ',
        en: 'Independence Day — India became free',
      },
      description: {
        hi: '15 अगस्त 1947 को भारत को ब्रिटिश शासन से स्वतंत्रता मिली। पहले प्रधानमंत्री जवाहरलाल नेहरू ने दिल्ली के लाल किले पर राष्ट्रीय ध्वज फहराया।',
        pa: '15 ਅਗਸਤ 1947 ਨੂੰ ਭਾਰਤ ਨੇ ਆਜ਼ਾਦੀ ਹਾਸਲ ਕੀਤੀ। ਪਹਿਲੇ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਜਵਾਹਰਲਾਲ ਨਹਿਰੂ ਨੇ ਦਿੱਲੀ ਦੇ ਲਾਲ ਕਿਲੇ ਤੋਂ ਤਿਰੰਗਾ ਲਹਿਰਾਇਆ।',
        en: 'On 15 August 1947, India gained independence from British rule. First Prime Minister Jawaharlal Nehru hoisted the national flag at Red Fort, Delhi.',
      },
      source: 'Government of India, National Portal',
    },
  },
  '01-12': { // 12 January — National Youth Day
    date: '01-12',
    thought: {
      text: {
        hi: 'उठो, जागो और तब तक मत रुको जब तक लक्ष्य प्राप्त न हो जाए।',
        pa: 'ਉੱਠੋ, ਜਾਗੋ ਅਤੇ ਉਦੋਂ ਤੱਕ ਨਾ ਰੁਕੋ ਜਦੋਂ ਤੱਕ ਟੀਚਾ ਪ੍ਰਾਪਤ ਨਾ ਹੋ ਜਾਵੇ।',
        en: 'Arise, awake, and stop not until the goal is reached.',
      },
      author: { hi: 'स्वामी विवेकानंद', pa: 'ਸਵਾਮੀ ਵਿਵੇਕਾਨੰਦ', en: 'Swami Vivekananda' },
    },
    gkEvent: {
      title: {
        hi: 'राष्ट्रीय युवा दिवस — स्वामी विवेकानंद जयंती',
        pa: 'ਰਾਸ਼ਟਰੀ ਯੁਵਾ ਦਿਵਸ — ਸਵਾਮੀ ਵਿਵੇਕਾਨੰਦ ਜਯੰਤੀ',
        en: 'National Youth Day — Swami Vivekananda Jayanti',
      },
      description: {
        hi: '12 जनवरी 1863 को स्वामी विवेकानंद का जन्म कोलकाता में हुआ था। उनके जन्मदिवस को 1985 से भारत में प्रतिवर्ष "राष्ट्रीय युवा दिवस" के रूप में मनाया जाता है। 1893 में उन्होंने शिकागो विश्व धर्म संसद में ऐतिहासिक भाषण दिया था।',
        pa: '12 ਜਨਵਰੀ 1863 ਨੂੰ ਸਵਾਮੀ ਵਿਵੇਕਾਨੰਦ ਦਾ ਜਨਮ ਕੋਲਕਾਤਾ ਵਿੱਚ ਹੋਇਆ ਸੀ। 1985 ਤੋਂ ਇਸ ਦਿਨ ਨੂੰ ਰਾਸ਼ਟਰੀ ਯੁਵਾ ਦਿਵਸ ਵਜੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ। 1893 ਵਿੱਚ ਉਹਨਾਂ ਨੇ ਸ਼ਿਕਾਗੋ ਵਿੱਚ ਇਤਿਹਾਸਕ ਭਾਸ਼ਣ ਦਿੱਤਾ ਸੀ।',
        en: 'Swami Vivekananda was born on 12 January 1863 in Kolkata. His birthday has been celebrated as National Youth Day across India since 1985. In 1893, he delivered his historic address at the Chicago Parliament of Religions.',
      },
      source: 'Ministry of Youth Affairs and Sports, Government of India',
    },
    miniQuiz: {
      question: {
        hi: 'स्वामी विवेकानंद ने विश्व धर्म संसद में ऐतिहासिक भाषण किस शहर में और किस वर्ष दिया था?',
        pa: 'ਸਵਾਮੀ ਵਿਵੇਕਾਨੰਦ ਨੇ ਵਿਸ਼ਵ ਧਰਮ ਸੰਸਦ ਵਿੱਚ ਇਤਿਹਾਸਕ ਭਾਸ਼ਣ ਕਿਸ ਸ਼ਹਿਰ ਅਤੇ ਕਿਸ ਸਾਲ ਦਿੱਤਾ ਸੀ?',
        en: 'In which city and year did Swami Vivekananda deliver his historic Parliament of Religions speech?',
      },
      options: {
        A: { hi: 'लंदन, 1890', pa: 'ਲੰਡਨ, 1890', en: 'London, 1890' },
        B: { hi: 'शिकागो, 1893', pa: 'ਸ਼ਿਕਾਗੋ, 1893', en: 'Chicago, 1893' },
        C: { hi: 'न्यूयॉर्क, 1895', pa: 'ਨਿਊਯਾਰਕ, 1895', en: 'New York, 1895' },
        D: { hi: 'पेरिस, 1900', pa: 'ਪੈਰਿਸ, 1900', en: 'Paris, 1900' },
      },
      correct: 'B',
      explanation: {
        hi: 'स्वामी विवेकानंद ने 11 सितंबर 1893 को शिकागो (अमेरिका) की विश्व धर्म संसद में "अमेरिका के भाइयो और बहनो" के संबोधन से अपना ऐतिहासिक भाषण शुरू किया था।',
        pa: 'ਸਵਾਮੀ ਵਿਵੇਕਾਨੰਦ ਨੇ 1893 ਵਿੱਚ ਸ਼ਿਕਾਗੋ ਵਿਖੇ ਵਿਸ਼ਵ ਧਰਮ ਸੰਸਦ ਵਿੱਚ ਇਤਿਹਾਸਕ ਭਾਸ਼ਣ ਦਿੱਤਾ ਸੀ।',
        en: 'Swami Vivekananda delivered his famous address beginning with "Sisters and Brothers of America" at Chicago in September 1893.',
      },
    },
  },
  '01-23': { // 23 January — Parakram Diwas (Netaji Subhas Chandra Bose)
    date: '01-23',
    thought: {
      text: {
        hi: 'तुम मुझे खून दो, मैं तुम्हें आजादी दूंगा!',
        pa: 'ਤੁਸੀਂ ਮੈਨੂੰ ਖੂਨ ਦਿਓ, ਮੈਂ ਤੁਹਾਨੂੰ ਆਜ਼ਾਦੀ ਦਿਆਂਗਾ!',
        en: 'Give me blood, and I shall give you freedom!',
      },
      author: { hi: 'नेताजी सुभाष चंद्र बोस', pa: 'ਨੇਤਾਜੀ ਸੁਭਾਸ਼ ਚੰਦਰ ਬੋਸ', en: 'Netaji Subhas Chandra Bose' },
    },
    gkEvent: {
      title: {
        hi: 'पराक्रम दिवस — नेताजी सुभाष चंद्र बोस जयंती',
        pa: 'ਪਰਾਕ੍ਰਮ ਦਿਵਸ — ਨੇਤਾਜੀ ਸੁਭਾਸ਼ ਚੰਦਰ ਬੋਸ ਜਯੰਤੀ',
        en: 'Parakram Diwas — Netaji Subhas Chandra Bose Jayanti',
      },
      description: {
        hi: '23 जनवरी 1897 को कटक (ओडिशा) में नेताजी सुभाष चंद्र बोस का जन्म हुआ था। भारत सरकार उनके जन्मदिन को "पराक्रम दिवस" के रूप में मनाती है। उन्होंने आजाद हिंद फौज (INA) का पुनर्गठन कर भारत की आजादी की लड़ाई लड़ी।',
        pa: '23 ਜਨਵਰੀ 1897 ਨੂੰ ਕਟਕ ਵਿਖੇ ਨੇਤਾਜੀ ਸੁਭਾਸ਼ ਚੰਦਰ ਬੋਸ ਦਾ ਜਨਮ ਹੋਇਆ। ਇਸ ਦਿਨ ਨੂੰ ਪਰਾਕ੍ਰਮ ਦਿਵਸ ਵਜੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
        en: 'Netaji Subhas Chandra Bose was born on 23 January 1897 in Cuttack, Odisha. The Government of India commemorates this day as Parakram Diwas honoring his leadership of the Indian National Army (INA).',
      },
      source: 'Ministry of Culture, Government of India',
    },
    miniQuiz: {
      question: {
        hi: 'नेताजी सुभाष चंद्र बोस ने "आजाद हिंद सरकार" (Provisional Government of Free India) की स्थापना 1943 में कहाँ की थी?',
        pa: 'ਨੇਤਾਜੀ ਸੁਭਾਸ਼ ਚੰਦਰ ਬੋਸ ਨੇ 1943 ਵਿੱਚ "ਆਜ਼ਾਦ ਹਿੰਦ ਸਰਕਾਰ" ਦੀ ਸਥਾਪਨਾ ਕਿੱਥੇ ਕੀਤੀ ਸੀ?',
        en: 'Where did Netaji Subhas Chandra Bose establish the Provisional Government of Free India in 1943?',
      },
      options: {
        A: { hi: 'टोक्यो', pa: 'ਟੋਕੀਓ', en: 'Tokyo' },
        B: { hi: 'सिंगापुर', pa: 'ਸਿੰਗਾਪੁਰ', en: 'Singapore' },
        C: { hi: 'रंगून', pa: 'ਰੰਗੂਨ', en: 'Rangoon' },
        D: { hi: 'बर्लिन', pa: 'ਬਰਲਿਨ', en: 'Berlin' },
      },
      correct: 'B',
      explanation: {
        hi: 'नेताजी ने 21 अक्टूबर 1943 को सिंगापुर के कैथे सिनेमा हॉल में स्वतंत्र भारत की अस्थायी सरकार (आजाद हिंद सरकार) की स्थापना की थी।',
        pa: 'ਨੇਤਾਜੀ ਨੇ 21 ਅਕਤੂਬਰ 1943 ਨੂੰ ਸਿੰਗਾਪੁਰ ਵਿੱਚ ਆਜ਼ਾਦ ਹਿੰਦ ਸਰਕਾਰ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ ਸੀ।',
        en: 'Netaji founded the Provisional Government of Azad Hind on 21 October 1943 in Singapore.',
      },
    },
  },
  '01-30': { // 30 January — Martyrs' Day (Shaheed Diwas)
    date: '01-30',
    thought: {
      text: {
        hi: 'अहिंसा सबसे बड़ा कर्तव्य है।',
        pa: 'ਅਹਿੰਸਾ ਸਭ ਤੋਂ ਵੱਡਾ ਕਰਤੱਵ ਹੈ।',
        en: 'Non-violence is the greatest duty.',
      },
      author: { hi: 'महात्मा गांधी', pa: 'ਮਹਾਤਮਾ ਗਾਂਧੀ', en: 'Mahatma Gandhi' },
    },
    gkEvent: {
      title: {
        hi: 'शहीद दिवस — महात्मा गांधी की पुण्यतिथि',
        pa: 'ਸ਼ਹੀਦ ਦਿਵਸ — ਮਹਾਤਮਾ ਗਾਂਧੀ ਦੀ ਬਰਸੀ',
        en: 'Martyrs\' Day — Mahatma Gandhi Martyrdom Day',
      },
      description: {
        hi: '30 जनवरी 1948 को नई दिल्ली के बिड़ला हाउस में नाथूराम गोडसे ने राष्ट्रपिता महात्मा गांधी की गोली मारकर हत्या कर दी थी। देश की स्वतंत्रता के लिए प्राण न्योछावर करने वाले शहीदों के सम्मान में इस दिन 2 मिनट का मौन रखा जाता है।',
        pa: '30 ਜਨਵਰੀ 1948 ਨੂੰ ਮਹਾਤਮਾ ਗਾਂਧੀ ਦੀ ਹੱਤਿਆ ਕਰ ਦਿੱਤੀ ਗਈ ਸੀ। ਇਸ ਦਿਨ ਨੂੰ ਸ਼ਹੀਦ ਦਿਵਸ ਵਜੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
        en: 'On 30 January 1948, Mahatma Gandhi was assassinated by Nathuram Godse at Birla House, New Delhi. India observes Martyrs\' Day (Shaheed Diwas) on this date to honor all freedom fighters.',
      },
      source: 'Government of India, National Portal',
    },
    miniQuiz: {
      question: {
        hi: 'महात्मा गांधी की समाधि स्थल का नाम क्या है और यह कहाँ स्थित है?',
        pa: 'ਮਹਾਤਮਾ ਗਾਂਧੀ ਦੀ ਸਮਾਧੀ ਦਾ ਕੀ ਨਾਮ ਹੈ?',
        en: 'What is the name of Mahatma Gandhi\'s memorial in New Delhi?',
      },
      options: {
        A: { hi: 'शांति वन', pa: 'ਸ਼ਾਂਤੀ ਵਨ', en: 'Shanti Vana' },
        B: { hi: 'राजघाट', pa: 'ਰਾਜਘਾਟ', en: 'Raj Ghat' },
        C: { hi: 'विजय घाट', pa: 'ਵਿਜੇ ਘਾਟ', en: 'Vijay Ghat' },
        D: { hi: 'शक्ति स्थल', pa: 'ਸ਼ਕਤੀ ਸਥਲ', en: 'Shakti Sthal' },
      },
      correct: 'B',
      explanation: {
        hi: 'महात्मा गांधी का समाधि स्थल "राजघाट" नई दिल्ली में यमुना नदी के तट पर स्थित है।',
        pa: 'ਮਹਾਤਮਾ ਗਾਂਧੀ ਦਾ ਸਮਾਧੀ ਸਥਾਨ "ਰਾਜਘਾਟ" ਨਵੀਂ ਦਿੱਲੀ ਵਿੱਚ ਹੈ।',
        en: 'Raj Ghat is the memorial dedicated to Mahatma Gandhi located on the banks of the Yamuna River in New Delhi.',
      },
    },
  },
  '02-28': { // 28 February — National Science Day
    date: '02-28',
    thought: {
      text: {
        hi: 'सफलता का रहस्य अपने लक्ष्य के प्रति अडिग रहना है।',
        pa: 'ਸਫਲਤਾ ਦਾ ਰਾਜ਼ ਆਪਣੇ ਟੀਚੇ ਪ੍ਰਤੀ ਦ੍ਰਿੜ੍ਹ ਰਹਿਣਾ ਹੈ।',
        en: 'Success comes to those who dedicate themselves to their goals.',
      },
      author: { hi: 'सर सी.वी. रमन', pa: 'ਸਰ ਸੀ.ਵੀ. ਰਮਨ', en: 'Sir C.V. Raman' },
    },
    gkEvent: {
      title: {
        hi: 'राष्ट्रीय विज्ञान दिवस — रमन प्रभाव की खोज',
        pa: 'ਰਾਸ਼ਟਰੀ ਵਿਗਿਆਨ ਦਿਵਸ — ਰਮਨ ਪ੍ਰਭਾਵ ਦੀ ਖੋਜ',
        en: 'National Science Day — Discovery of Raman Effect',
      },
      description: {
        hi: '28 फरवरी 1928 को भारतीय भौतिक विज्ञानी सर सी.वी. रमन ने "रमन प्रभाव" (Raman Effect) की खोज की थी। इसके लिए उन्हें 1930 में भौतिकी का नोबेल पुरस्कार मिला। 1987 से भारत में यह दिन राष्ट्रीय विज्ञान दिवस के रूप में मनाया जाता है।',
        pa: '28 ਫਰਵਰੀ 1928 ਨੂੰ ਸਰ ਸੀ.ਵੀ. ਰਮਨ ਨੇ ਰਮਨ ਪ੍ਰਭਾਵ ਦੀ ਖੋਜ ਕੀਤੀ ਜਿਸ ਲਈ ਉਹਨਾਂ ਨੂੰ 1930 ਵਿੱਚ ਨੋਬਲ ਪੁਰਸਕਾਰ ਮਿਲਿਆ।',
        en: 'On 28 February 1928, Sir C.V. Raman discovered the Raman Effect, winning the 1930 Nobel Prize in Physics. National Science Day has been observed in India annually since 1987.',
      },
      source: 'Department of Science and Technology, Government of India',
    },
    miniQuiz: {
      question: {
        hi: 'सर सी.वी. रमन को किस वर्ष भौतिकी का नोबेल पुरस्कार प्रदान किया गया था?',
        pa: 'ਸਰ ਸੀ.ਵੀ. ਰਮਨ ਨੂੰ ਕਿਸ ਸਾਲ ਭੌਤਿਕ ਵਿਗਿਆਨ ਵਿੱਚ ਨੋਬਲ ਪੁਰਸਕਾਰ ਮਿਲਿਆ ਸੀ?',
        en: 'In which year was Sir C.V. Raman awarded the Nobel Prize in Physics?',
      },
      options: {
        A: { hi: '1913', pa: '1913', en: '1913' },
        B: { hi: '1930', pa: '1930', en: '1930' },
        C: { hi: '1947', pa: '1947', en: '1947' },
        D: { hi: '1954', pa: '1954', en: '1954' },
      },
      correct: 'B',
      explanation: {
        hi: 'सर सी.वी. रमन को 1930 में प्रकाश के प्रकीर्णन (रमन प्रभाव) पर शोध हेतु भौतिकी का नोबेल पुरस्कार मिला। वे विज्ञान में नोबेल पाने वाले पहले एशियाई थे।',
        pa: 'ਸਰ ਸੀ.ਵੀ. ਰਮਨ ਨੂੰ 1930 ਵਿੱਚ ਭੌਤਿਕ ਵਿਗਿਆਨ ਦਾ ਨੋਬਲ ਪੁਰਸਕਾਰ ਮਿਲਿਆ ਸੀ।',
        en: 'Sir C.V. Raman received the Nobel Prize in Physics in 1930 for his work on the scattering of light.',
      },
    },
  },
  '03-08': { // 8 March — International Women's Day
    date: '03-08',
    thought: {
      text: {
        hi: 'महिलाएं समाज की वास्तविक वास्तुकार हैं।',
        pa: 'ਔਰਤਾਂ ਸਮਾਜ ਦੀਆਂ ਅਸਲ ਨਿਰਮਾਤਾ ਹਨ।',
        en: 'Women are the real architects of society.',
      },
      author: { hi: 'हैरियट बीचर स्टोव', pa: 'ਹੈਰੀਅਟ ਬੀਚਰ ਸਟੋਵ', en: 'Harriet Beecher Stowe' },
    },
    gkEvent: {
      title: {
        hi: 'अंतर्राष्ट्रीय महिला दिवस',
        pa: 'ਅੰਤਰਰਾਸ਼ਟਰੀ ਮਹਿਲਾ ਦਿਵਸ',
        en: 'International Women\'s Day',
      },
      description: {
        hi: 'प्रतिवर्ष 8 मार्च को विश्वभर में अंतर्राष्ट्रीय महिला दिवस मनाया जाता है। यह दिन महिलाओं की सामाजिक, आर्थिक, सांस्कृतिक और राजनीतिक उपलब्धियों को रेखांकित करने और लैंगिक समानता को बढ़ावा देने के लिए समर्पित है। संयुक्त राष्ट्र ने 1977 में इसे आधिकारिक मान्यता दी।',
        pa: 'ਹਰ ਸਾਲ 8 ਮਾਰਚ ਨੂੰ ਅੰਤਰਰਾਸ਼ਟਰੀ ਮਹਿਲਾ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ ਜੋ ਔਰਤਾਂ ਦੇ ਹੱਕਾਂ ਅਤੇ ਬਰਾਬਰੀ ਲਈ ਸਮਰਪਿਤ ਹੈ।',
        en: 'Observed globally on 8 March, International Women\'s Day celebrates the social, economic, cultural, and political achievements of women, while accelerating gender parity. The UN officially recognized it in 1977.',
      },
      source: 'United Nations (UN Women)',
    },
    miniQuiz: {
      question: {
        hi: 'भारत में प्रत्येक वर्ष 13 फरवरी को "राष्ट्रीय महिला दिवस" किसकी जयंती के उपलक्ष्य में मनाया जाता है?',
        pa: 'ਭਾਰਤ ਵਿੱਚ 13 ਫਰਵਰੀ ਨੂੰ "ਰਾਸ਼ਟਰੀ ਮਹਿਲਾ ਦਿਵਸ" ਕਿਸਦੀ ਯਾਦ ਵਿੱਚ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ?',
        en: 'In India, National Women\'s Day is celebrated on 13 February in honor of which pioneer?',
      },
      options: {
        A: { hi: 'इंदिरा गांधी', pa: 'ਇੰਦਰਾ ਗਾਂਧੀ', en: 'Indira Gandhi' },
        B: { hi: 'सरोजिनी नायडू', pa: 'ਸਰੋਜਿਨੀ ਨਾਇਡੂ', en: 'Sarojini Naidu' },
        C: { hi: 'सावित्रीबाई फुले', pa: 'ਸਾਵਿਤਰੀਬਾਈ ਫੂਲੇ', en: 'Savitribai Phule' },
        D: { hi: 'रानी लक्ष्मीबाई', pa: 'ਰਾਣੀ ਲਕਸ਼ਮੀਬਾਈ', en: 'Rani Lakshmibai' },
      },
      correct: 'B',
      explanation: {
        hi: 'भारत कोकिला सरोजिनी नायडू के जन्मदिवस (13 फरवरी 1879) को भारत में राष्ट्रीय महिला दिवस के रूप में मनाया जाता है।',
        pa: 'ਸਰੋਜਿਨੀ ਨਾਇਡੂ ਦੇ ਜਨਮ ਦਿਨ (13 ਫਰਵਰੀ) ਨੂੰ ਭਾਰਤ ਵਿੱਚ ਰਾਸ਼ਟਰੀ ਮਹਿਲਾ ਦਿਵਸ ਵਜੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
        en: 'National Women\'s Day in India is celebrated on 13 February to mark the birth anniversary of Sarojini Naidu (Nightingale of India).',
      },
    },
  },
  '03-22': { // 22 March — World Water Day
    date: '03-22',
    thought: {
      text: {
        hi: 'रहिमन पानी राखिये, बिन पानी सब सून।',
        pa: 'ਪਾਣੀ ਬਿਨਾਂ ਸਭ ਕੁਝ ਸੁੰਞਾ ਹੈ, ਪਾਣੀ ਦੀ ਸੰਭਾਲ ਕਰੋ।',
        en: 'Water is life, and clean water means health.',
      },
      author: { hi: 'कवि रहीम', pa: 'ਕਵੀ ਰਹੀਮ', en: 'Rahim Das' },
    },
    gkEvent: {
      title: {
        hi: 'विश्व जल दिवस — जल संरक्षण का संकल्प',
        pa: 'ਵਿਸ਼ਵ ਜਲ ਦਿਵਸ — ਪਾਣੀ ਦੀ ਸੰਭਾਲ ਦਾ ਸੰਕਲਪ',
        en: 'World Water Day — Fresh Water Conservation',
      },
      description: {
        hi: 'संयुक्त राष्ट्र द्वारा 22 मार्च को विश्व जल दिवस मनाया जाता है। इसका उद्देश्य मीठे पानी के महत्व के बारे में जागरूकता बढ़ाना और स्थायी जल संसाधन प्रबंधन का समर्थन करना है। 1993 में पहला विश्व जल दिवस आयोजित हुआ था।',
        pa: 'ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਵੱਲੋਂ 22 ਮਾਰਚ ਨੂੰ ਵਿਸ਼ਵ ਜਲ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ ਤਾਂ ਜੋ ਪਾਣੀ ਦੀ ਸੰਭਾਲ ਪ੍ਰਤੀ ਜਾਗਰੂਕਤਾ ਫੈਲਾਈ ਜਾ ਸਕੇ।',
        en: 'World Water Day is observed globally on 22 March following the 1992 UN Conference on Environment and Development (UNCED) in Rio de Janeiro, advocating for the sustainable management of freshwater resources.',
      },
      source: 'United Nations (UN-Water)',
    },
    miniQuiz: {
      question: {
        hi: 'संयुक्त राष्ट्र के सतत विकास लक्ष्यों (SDGs) में स्वच्छ जल और स्वच्छता किस लक्ष्य संख्या के अंतर्गत है?',
        pa: 'ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਦੇ SDGs ਵਿੱਚ ਸਾਫ਼ ਪਾਣੀ ਅਤੇ ਸਵੱਛਤਾ ਕਿਹੜਾ ਟੀਚਾ (Goal) ਹੈ?',
        en: 'Which Sustainable Development Goal (SDG) addresses Clean Water and Sanitation?',
      },
      options: {
        A: { hi: 'SDG 3', pa: 'SDG 3', en: 'SDG 3' },
        B: { hi: 'SDG 6', pa: 'SDG 6', en: 'SDG 6' },
        C: { hi: 'SDG 11', pa: 'SDG 11', en: 'SDG 11' },
        D: { hi: 'SDG 13', pa: 'SDG 13', en: 'SDG 13' },
      },
      correct: 'B',
      explanation: {
        hi: 'SDG 6 का लक्ष्य 2030 तक सभी के लिए स्वच्छ पानी और स्वच्छता की उपलब्धता सुनिश्चित करना है।',
        pa: 'SDG 6 ਸਭ ਲਈ ਸਾਫ਼ ਪਾਣੀ ਅਤੇ ਸਵੱਛਤਾ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ ਹੈ।',
        en: 'Sustainable Development Goal 6 (SDG 6) aims to ensure availability and sustainable management of water and sanitation for all.',
      },
    },
  },
  '03-23': { // 23 March — Shaheed Diwas (Bhagat Singh, Rajguru, Sukhdev)
    date: '03-23',
    thought: {
      text: {
        hi: 'इंकलाब जिंदाबाद! वे मुझे मार सकते हैं, लेकिन मेरे विचारों को नहीं।',
        pa: 'ਇਨਕਲਾਬ ਜ਼ਿੰਦਾਬਾਦ! ਉਹ ਮੈਨੂੰ ਮਾਰ ਸਕਦੇ ਹਨ, ਪਰ ਮੇਰੇ ਵਿਚਾਰਾਂ ਨੂੰ ਨਹੀਂ।',
        en: 'Inquilab Zindabad! They may kill me, but they cannot kill my ideas.',
      },
      author: { hi: 'शहीद-ए-आजम भगत सिंह', pa: 'ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ', en: 'Shaheed Bhagat Singh' },
    },
    gkEvent: {
      title: {
        hi: 'शहीदी दिवस — भगत सिंह, राजगुरु और सुखदेव का बलिदान',
        pa: 'ਸ਼ਹੀਦੀ ਦਿਵਸ — ਭਗਤ ਸਿੰਘ, ਰਾਜਗੁਰੂ ਤੇ ਸੁਖਦੇਵ ਦਾ ਬਲੀਦਾਨ',
        en: 'Shaheedi Diwas — Martyrdom of Bhagat Singh, Rajguru & Sukhdev',
      },
      description: {
        hi: '23 मार्च 1931 को लाहौर सेंट्रल जेल में महान क्रांतिकारी सरदार भगत सिंह, शिवराम राजगुरु और सुखदेव थापर को ब्रिटिश हुकूमत ने फांसी दी थी। हुसैनीवाला (पंजाब) में सतलुज तट पर उनका अंतिम संस्कार किया गया, जहाँ राष्ट्रीय शहीद स्मारक स्थित है।',
        pa: '23 ਮਾਰਚ 1931 ਨੂੰ ਲਾਹੌਰ ਜੇਲ੍ਹ ਵਿੱਚ ਭਗਤ ਸਿੰਘ, ਰਾਜਗੁਰੂ ਅਤੇ ਸੁਖਦੇਵ ਨੂੰ ਫਾਂਸੀ ਦਿੱਤੀ ਗਈ ਸੀ। ਹੁਸੈਨੀਵਾਲਾ (ਫ਼ਿਰੋਜ਼ਪੁਰ) ਵਿਖੇ ਕੌਮੀ ਸ਼ਹੀਦੀ ਸਮਾਰਕ ਸਥਿਤ ਹੈ।',
        en: 'On 23 March 1931, Bhagat Singh, Shivaram Rajguru, and Sukhdev Thapar were hanged by the British in Lahore Central Jail for the Lahore Conspiracy case. The National Martyrs Memorial stands at Hussainiwala, Punjab.',
      },
      source: 'Government of Punjab, Cultural Affairs',
    },
    miniQuiz: {
      question: {
        hi: 'भगत सिंह और बटुकेश्वर दत्त ने सेंट्रल असेंबली (दिल्ली) में बम कब फेंका था?',
        pa: 'ਭਗਤ ਸਿੰਘ ਅਤੇ ਬਟੁਕੇਸ਼ਵਰ ਦੱਤ ਨੇ ਕੇਂਦਰੀ ਅਸੈਂਬਲੀ ਵਿੱਚ ਬੰਬ ਕਦੋਂ ਸੁੱਟਿਆ ਸੀ?',
        en: 'When did Bhagat Singh and Batukeshwar Dutt throw smoke bombs in the Central Legislative Assembly?',
      },
      options: {
        A: { hi: '8 अप्रैल 1929', pa: '8 ਅਪ੍ਰੈਲ 1929', en: '8 April 1929' },
        B: { hi: '23 मार्च 1931', pa: '23 ਮਾਰਚ 1931', en: '23 March 1931' },
        C: { hi: '17 दिसंबर 1928', pa: '17 ਦਸੰਬਰ 1928', en: '17 December 1928' },
        D: { hi: '9 अगस्त 1925', pa: '9 ਅਗਸਤ 1925', en: '9 August 1925' },
      },
      correct: 'A',
      explanation: {
        hi: '8 अप्रैल 1929 को पब्लिक सेफ्टी बिल और ट्रेड डिस्प्यूट्स बिल के विरोध में "बहरों को सुनाने हेतु" असेंबली में बम फेंका गया था।',
        pa: '8 ਅਪ੍ਰੈਲ 1929 ਨੂੰ ਭਗਤ ਸਿੰਘ ਤੇ ਬਟੁਕੇਸ਼ਵਰ ਦੱਤ ਨੇ ਅਸੈਂਬਲੀ ਵਿੱਚ ਬੰਬ ਸੁੱਟਿਆ ਸੀ।',
        en: 'On 8 April 1929, Bhagat Singh and Batukeshwar Dutt threw non-lethal bombs in the Central Assembly to protest repressive bills.',
      },
    },
  },
  '04-07': { // 7 April — World Health Day
    date: '04-07',
    thought: {
      text: {
        hi: 'स्वास्थ्य ही सबसे बड़ा धन है, संतोष सबसे बड़ा खजाना।',
        pa: 'ਸਿਹਤ ਹੀ ਸਭ ਤੋਂ ਵੱਡਾ ਧਨ ਹੈ ਅਤੇ ਸੰਤੁਸ਼ਟੀ ਸਭ ਤੋਂ ਵੱਡਾ ਖ਼ਜ਼ਾਨਾ।',
        en: 'It is health that is real wealth and not pieces of gold and silver.',
      },
      author: { hi: 'महात्मा गांधी', pa: 'ਮਹਾਤਮਾ ਗਾਂਧੀ', en: 'Mahatma Gandhi' },
    },
    gkEvent: {
      title: {
        hi: 'विश्व स्वास्थ्य दिवस — WHO स्थापना दिवस',
        pa: 'ਵਿਸ਼ਵ ਸਿਹਤ ਦਿਵਸ — WHO ਸਥਾਪਨਾ ਦਿਵਸ',
        en: 'World Health Day — WHO Foundation Day',
      },
      description: {
        hi: '7 अप्रैल 1948 को विश्व स्वास्थ्य संगठन (WHO) की स्थापना हुई थी। इसका मुख्यालय जिनेवा (स्विट्जरलैंड) में है। प्रत्येक वर्ष 7 अप्रैल को वैश्विक स्वास्थ्य मुद्दों पर ध्यान केंद्रित करने हेतु विश्व स्वास्थ्य दिवस मनाया जाता है।',
        pa: '7 ਅਪ੍ਰੈਲ 1948 ਨੂੰ ਵਿਸ਼ਵ ਸਿਹਤ ਸੰਗਠਨ (WHO) ਦੀ ਸਥਾਪਨਾ ਹੋਈ ਸੀ। ਇਸਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਜਿਨੇਵਾ ਵਿੱਚ ਹੈ।',
        en: 'World Health Day marks the founding of the World Health Organization (WHO) on 7 April 1948, headquartered in Geneva, Switzerland. It raises global awareness for public health priorities.',
      },
      source: 'World Health Organization (WHO)',
    },
    miniQuiz: {
      question: {
        hi: 'विश्व स्वास्थ्य संगठन (WHO) का मुख्यालय किस शहर में स्थित है?',
        pa: 'ਵਿਸ਼ਵ ਸਿਹਤ ਸੰਗਠਨ (WHO) ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਕਿੱਥੇ ਹੈ?',
        en: 'Where is the headquarters of the World Health Organization (WHO) located?',
      },
      options: {
        A: { hi: 'पेरिस, फ्रांस', pa: 'ਪੈਰਿਸ, ਫਰਾਂਸ', en: 'Paris, France' },
        B: { hi: 'न्यूयॉर्क, अमेरिका', pa: 'ਨਿਊਯਾਰਕ, ਅਮਰੀਕਾ', en: 'New York, USA' },
        C: { hi: 'जिनेवा, स्विट्जरलैंड', pa: 'ਜਿਨੇਵਾ, ਸਵਿਟਜ਼ਰਲੈਂਡ', en: 'Geneva, Switzerland' },
        D: { hi: 'रोम, इटली', pa: 'ਰੋਮ, ਇਟਲੀ', en: 'Rome, Italy' },
      },
      correct: 'C',
      explanation: {
        hi: 'WHO का मुख्यालय जिनेवा, स्विट्जरलैंड में स्थित है। इसके वर्तमान महानिदेशक डॉ. टेड्रोस अधानोम घेब्रेयेसस हैं।',
        pa: 'WHO ਦਾ ਹੈੱਡਕੁਆਰਟਰ ਜਿਨੇਵਾ (ਸਵਿਟਜ਼ਰਲੈਂਡ) ਵਿੱਚ ਹੈ।',
        en: 'WHO is headquartered in Geneva, Switzerland.',
      },
    },
  },
  '04-13': { // 13 April — Jallianwala Bagh Massacre & Vaisakhi
    date: '04-13',
    thought: {
      text: {
        hi: 'शहीदों की चिताओं पर लगेंगे हर बरस मेले, वतन पर मरने वालों का यही बाकी निशां होगा।',
        pa: 'ਸ਼ਹੀਦਾਂ ਦੀਆਂ ਚਿਤਾਵਾਂ \'ਤੇ ਲੱਗਣਗੇ ਹਰ ਵਰ੍ਹੇ ਮੇਲੇ, ਵਤਨ \'ਤੇ ਮਿਟਣ ਵਾਲਿਆਂ ਦਾ ਏਹੀ ਬਾਕੀ ਨਿਸ਼ਾਨ ਹੋਵੇਗਾ।',
        en: 'The sacrifices of our martyrs shall forever illuminate the destiny of the nation.',
      },
      author: { hi: 'जगदंबा प्रसाद मिश्र \'हितैषी\'', pa: 'ਜਗਦੰਬਾ ਪ੍ਰਸਾਦ ਮਿਸ਼ਰਾ', en: 'Jagdamba Prasad Mishra' },
    },
    gkEvent: {
      title: {
        hi: 'जलियांवाला बाग नरसंहार (1919) एवं बैसाखी पर्व',
        pa: 'ਜਲਿਆਂਵਾਲਾ ਬਾਗ ਸਾਕੇ ਦੀ ਯਾਦ (1919) ਅਤੇ ਵਿਸਾਖੀ',
        en: 'Jallianwala Bagh Massacre (1919) & Vaisakhi',
      },
      description: {
        hi: '13 अप्रैल 1919 को अमृतसर के जलियांवाला बाग में रॉलेट एक्ट के विरोध में एकत्र निहत्थी सभा पर जनरल डायर ने अंधाधुंध गोलियां चलवाईं। इसी विरोध में रवींद्रनाथ टैगोर ने अपनी "नाइटहुड" उपाधि त्याग दी थी। 13 अप्रैल 1699 को गुरु गोबिंद सिंह जी ने खालसा पंथ की स्थापना की थी।',
        pa: '13 ਅਪ੍ਰੈਲ 1919 ਨੂੰ ਅੰਮ੍ਰਿਤਸਰ ਵਿਖੇ ਜਨਰਲ ਡਾਇਰ ਨੇ ਨਿਹੱਥੇ ਲੋਕਾਂ \'ਤੇ ਗੋਲੀਆਂ ਚਲਵਾਈਆਂ। 13 ਅਪ੍ਰੈਲ 1699 ਨੂੰ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਖਾਲਸਾ ਪੰਥ ਸਾਜਿਆ ਸੀ।',
        en: 'On 13 April 1919, British troops under General Reginald Dyer fired upon unarmed civilians at Jallianwala Bagh, Amritsar. Rabindranath Tagore renounced his knighthood in protest. 13 April 1699 also marks the creation of Khalsa by Guru Gobind Singh Ji.',
      },
      source: 'Government of India, National Archives',
    },
    miniQuiz: {
      question: {
        hi: 'जलियांवाला बाग हत्याकांड की जांच हेतु ब्रिटिश सरकार द्वारा किस आयोग का गठन किया गया था?',
        pa: 'ਜਲਿਆਂਵਾਲਾ ਬਾਗ ਸਾਕੇ ਦੀ ਜਾਂਚ ਲਈ ਅੰਗਰੇਜ਼ ਸਰਕਾਰ ਨੇ ਕਿਹੜਾ ਕਮਿਸ਼ਨ ਬਣਾਇਆ ਸੀ?',
        en: 'Which commission was appointed by the British Government to investigate the Jallianwala Bagh massacre?',
      },
      options: {
        A: { hi: 'साइमन कमीशन', pa: 'ਸਾਈਮਨ ਕਮਿਸ਼ਨ', en: 'Simon Commission' },
        B: { hi: 'हंटर आयोग', pa: 'ਹੰਟਰ ਕਮਿਸ਼ਨ', en: 'Hunter Commission' },
        C: { hi: 'क्रिप्स मिशन', pa: 'ਕ੍ਰਿਪਸ ਮਿਸ਼ਨ', en: 'Cripps Mission' },
        D: { hi: 'सैडलर आयोग', pa: 'ਸੈਡਲਰ ਕਮਿਸ਼ਨ', en: 'Sadler Commission' },
      },
      correct: 'B',
      explanation: {
        hi: 'लॉर्ड विलियम हंटर की अध्यक्षता में अक्टूबर 1919 में हंटर आयोग (Disorders Inquiry Committee) का गठन किया गया था।',
        pa: 'ਅੰਗਰੇਜ਼ਾਂ ਨੇ ਜਾਂਚ ਲਈ ਹੰਟਰ ਕਮਿਸ਼ਨ (Hunter Commission) ਗਠਿਤ ਕੀਤਾ ਸੀ।',
        en: 'The Hunter Commission (Disorders Inquiry Committee) was established in 1919 to investigate the Amritsar massacre.',
      },
    },
  },
  '04-14': { // 14 April — Ambedkar Jayanti
    date: '04-14',
    thought: {
      text: {
        hi: 'शिक्षित बनो, संगठित रहो, संघर्ष करो।',
        pa: 'ਸਿੱਖਿਅਤ ਬਣੋ, ਸੰਗਠਿਤ ਰਹੋ, ਸੰਘਰਸ਼ ਕਰੋ।',
        en: 'Educate, Agitate, Organise.',
      },
      author: { hi: 'बाबा साहेब डॉ. बी.आर. अम्बेडकर', pa: 'ਬਾਬਾ ਸਾਹਿਬ ਡਾ. ਬੀ.ਆਰ. ਅੰਬੇਡਕਰ', en: 'Dr. B.R. Ambedkar' },
    },
    gkEvent: {
      title: {
        hi: 'अम्बेडकर जयंती — भारतीय संविधान निर्माता का जन्मदिवस',
        pa: 'ਅੰਬੇਡਕਰ ਜਯੰਤੀ — ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੇ ਨਿਰਮਾਤਾ ਦਾ ਜਨਮ ਦਿਹਾੜਾ',
        en: 'Ambedkar Jayanti — Birth Anniversary of Father of Indian Constitution',
      },
      description: {
        hi: '14 अप्रैल 1891 को महू (मध्य प्रदेश) में डॉ. भीमराव रामजी अम्बेडकर का जन्म हुआ था। वे संविधान सभा की प्रारूप समिति (Drafting Committee) के अध्यक्ष और स्वतंत्र भारत के प्रथम कानून मंत्री थे। 1990 में उन्हें मरणोपरांत भारत रत्न से सम्मानित किया गया।',
        pa: '14 ਅਪ੍ਰੈਲ 1891 ਨੂੰ ਡਾ. ਬੀ.ਆਰ. ਅੰਬੇਡਕਰ ਦਾ ਜਨਮ ਮਹੂ (ਮੱਧ ਪ੍ਰਦੇਸ਼) ਵਿੱਚ ਹੋਇਆ ਸੀ। ਉਹ ਸੰਵਿਧਾਨ ਦੀ ਡਰਾਫਟਿੰਗ ਕਮੇਟੀ ਦੇ ਚੇਅਰਮੈਨ ਸਨ। 1990 ਵਿੱਚ ਭਾਰਤ ਰਤਨ ਦਿੱਤਾ ਗਿਆ।',
        en: 'Dr. B.R. Ambedkar was born on 14 April 1891 in Mhow, MP. He served as Chairman of the Constitution Drafting Committee and independent India\'s first Law Minister. He was posthumously conferred the Bharat Ratna in 1990.',
      },
      source: 'Ministry of Social Justice and Empowerment, Government of India',
    },
    miniQuiz: {
      question: {
        hi: 'डॉ. बी.आर. अम्बेडकर ने किस अधिकार को संविधान की "आत्मा और हृदय" (Heart and Soul) कहा था?',
        pa: 'ਡਾ. ਅੰਬੇਡਕਰ ਨੇ ਕਿਸ ਅਧਿਕਾਰ ਨੂੰ ਸੰਵਿਧਾਨ ਦਾ "ਦਿਲ ਅਤੇ ਆਤਮਾ" ਕਿਹਾ ਸੀ?',
        en: 'Which Fundamental Right was termed the "Heart and Soul of the Constitution" by Dr. B.R. Ambedkar?',
      },
      options: {
        A: { hi: 'समानता का अधिकार (अनुच्छेद 14)', pa: 'ਬਰਾਬਰੀ ਦਾ ਅਧਿਕਾਰ (ਅਨੁਛੇਦ 14)', en: 'Right to Equality (Article 14)' },
        B: { hi: 'स्वतंत्रता का अधिकार (अनुच्छेद 19)', pa: 'ਆਜ਼ਾਦੀ ਦਾ ਅਧਿਕਾਰ (ਅਨੁਛੇਦ 19)', en: 'Right to Freedom (Article 19)' },
        C: { hi: 'संवैधानिक उपचारों का अधिकार (अनुच्छेद 32)', pa: 'ਸੰਵਿਧਾਨਕ ਉਪਚਾਰਾਂ ਦਾ ਅਧਿਕਾਰ (ਅਨੁਛੇਦ 32)', en: 'Right to Constitutional Remedies (Article 32)' },
        D: { hi: 'धार्मिक स्वतंत्रता का अधिकार (अनुच्छेद 25)', pa: 'ਧਾਰਮਿਕ ਆਜ਼ਾਦੀ ਦਾ ਅਧਿਕਾਰ (ਅਨੁਛੇਦ 25)', en: 'Right to Freedom of Religion (Article 25)' },
      },
      correct: 'C',
      explanation: {
        hi: 'अनुच्छेद 32 (संवैधानिक उपचारों का अधिकार) नागरिकों को मौलिक अधिकारों के संरक्षण हेतु सीधे सुप्रीम कोर्ट जाने की शक्ति देता है।',
        pa: 'ਅਨੁਛੇਦ 32 (ਸੰਵਿਧਾਨਕ ਉਪਚਾਰ) ਨੂੰ ਸੰਵਿਧਾਨ ਦੀ ਆਤਮਾ ਕਿਹਾ ਗਿਆ ਹੈ।',
        en: 'Article 32 allows citizens to move the Supreme Court via writs for the enforcement of Fundamental Rights.',
      },
    },
  },
  '04-22': { // 22 April — Earth Day
    date: '04-22',
    thought: {
      text: {
        hi: 'पृथ्वी सभी मनुष्यों की आवश्यकताओं को पूरा करने के लिए पर्याप्त है, लेकिन उनके लालच को नहीं।',
        pa: 'ਧਰਤੀ ਹਰ ਇਨਸਾਨ ਦੀ ਲੋੜ ਪੂਰੀ ਕਰ ਸਕਦੀ ਹੈ, ਪਰ ਲਾਲਚ ਨਹੀਂ।',
        en: 'The Earth provides enough to satisfy every man\'s need, but not every man\'s greed.',
      },
      author: { hi: 'महात्मा गांधी', pa: 'ਮਹਾਤਮਾ ਗਾਂਧੀ', en: 'Mahatma Gandhi' },
    },
    gkEvent: {
      title: {
        hi: 'विश्व पृथ्वी दिवस (Earth Day)',
        pa: 'ਵਿਸ਼ਵ ਧਰਤੀ ਦਿਵਸ (Earth Day)',
        en: 'World Earth Day',
      },
      description: {
        hi: '22 अप्रैल को वैश्विक स्तर पर पृथ्वी दिवस मनाया जाता है। पहली बार 1970 में अमेरिकी सीनेटर गेलॉर्ड नेल्सन के नेतृत्व में पर्यावरण संरक्षण के प्रति जागरूकता फैलाने हेतु इसका आयोजन हुआ था। 2016 में इसी दिन ऐतिहासिक पेरिस जलवायु समझौते पर हस्ताक्षर हुए थे।',
        pa: '22 ਅਪ੍ਰੈਲ ਨੂੰ ਵਿਸ਼ਵ ਧਰਤੀ ਦਿਵਸ ਵਜੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ ਤਾਂ ਜੋ ਵਾਤਾਵਰਣ ਦੀ ਸੁਰੱਖਿਆ ਲਈ ਜਾਗਰੂਕਤਾ ਫੈਲਾਈ ਜਾ ਸਕੇ। ਪਹਿਲੀ ਵਾਰ 1970 ਵਿੱਚ ਮਨਾਇਆ ਗਿਆ ਸੀ।',
        en: 'First celebrated on 22 April 1970 initiated by US Senator Gaylord Nelson, Earth Day coordinates environmental protection actions worldwide. In 2016, the landmark Paris Agreement on climate change was opened for signature on Earth Day.',
      },
      source: 'Earthday.org / United Nations Environment Programme (UNEP)',
    },
    miniQuiz: {
      question: {
        hi: 'प्रथम पृथ्वी शिखर सम्मेलन (First Earth Summit) 1992 में किस शहर में आयोजित हुआ था?',
        pa: 'ਪਹਿਲਾ ਧਰਤੀ ਸੰਮੇਲਨ (Earth Summit) 1992 ਵਿੱਚ ਕਿਸ ਸ਼ਹਿਰ ਵਿੱਚ ਹੋਇਆ ਸੀ?',
        en: 'In which city was the first Earth Summit (UNCED) held in 1992?',
      },
      options: {
        A: { hi: 'क्योटो, जापान', pa: 'ਕਿਓਟੋ, ਜਾਪਾਨ', en: 'Kyoto, Japan' },
        B: { hi: 'रियो डी जेनेरियो, ब्राजील', pa: 'ਰੀਓ ਡੀ ਜਨੇਰੀਓ, ਬ੍ਰਾਜ਼ੀਲ', en: 'Rio de Janeiro, Brazil' },
        C: { hi: 'पेरिस, फ्रांस', pa: 'ਪੈਰਿਸ, ਫਰਾਂਸ', en: 'Paris, France' },
        D: { hi: 'स्टॉकहोम, स्वीडन', pa: 'ਸਟਾਕਹੋਮ, ਸਵੀਡਨ', en: 'Stockholm, Sweden' },
      },
      correct: 'B',
      explanation: {
        hi: '1992 में रियो डी जेनेरियो (ब्राजील) में संयुक्त राष्ट्र पर्यावरण और विकास सम्मेलन (UNCED) आयोजित हुआ था जिसे "रियो समिट" या पृथ्वी शिखर सम्मेलन कहा जाता है।',
        pa: '1992 ਦਾ ਧਰਤੀ ਸੰਮੇਲਨ ਰੀਓ ਡੀ ਜਨੇਰੀਓ (ਬ੍ਰਾਜ਼ੀਲ) ਵਿੱਚ ਹੋਇਆ ਸੀ।',
        en: 'The United Nations Conference on Environment and Development (Earth Summit) took place in Rio de Janeiro, Brazil in June 1992.',
      },
    },
  },
  '05-01': { // 1 May — International Labour Day / Maharashtra & Gujarat Day
    date: '05-01',
    thought: {
      text: {
        hi: 'श्रम के बिना कुछ भी प्राप्त नहीं होता, परिश्रम ही सफलता की कुंजी है।',
        pa: 'ਮਿਹਨਤ ਬਿਨਾਂ ਕੁਝ ਹਾਸਲ ਨਹੀਂ ਹੁੰਦਾ, ਮਿਹਨਤ ਹੀ ਸਫਲਤਾ ਦੀ ਕੁੰਜੀ ਹੈ।',
        en: 'Genius begins great works; labor alone finishes them.',
      },
      author: { hi: 'जोसेफ जौबर्ट', pa: 'ਜੋਸਫ਼ ਜੌਬਰਟ', en: 'Joseph Joubert' },
    },
    gkEvent: {
      title: {
        hi: 'अंतर्राष्ट्रीय मजदूर दिवस (Labour Day) एवं महाराष्ट्र-गुजरात स्थापना',
        pa: 'ਅੰਤਰਰਾਸ਼ਟਰੀ ਮਜ਼ਦੂਰ ਦਿਵਸ ਅਤੇ ਮਹਾਰਾਸ਼ਟਰ-ਗੁਜਰਾਤ ਦਿਵਸ',
        en: 'International Workers\' Day (May Day) & Maharashtra/Gujarat Day',
      },
      description: {
        hi: '1 मई को विश्वभर में अंतर्राष्ट्रीय श्रमिक दिवस मनाया जाता है (1886 शिकागो हेमार्केट आंदोलन की स्मृति में 8 घंटे कार्यदिवस की मांग)। भारत में 1 मई 1923 को मद्रास में लेबर किसान पार्टी ने पहली बार मई दिवस मनाया। 1 मई 1960 को बंबई राज्य के विभाजन से महाराष्ट्र और गुजरात का गठन हुआ।',
        pa: '1 ਮਈ ਨੂੰ ਮਜ਼ਦੂਰ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ। ਭਾਰਤ ਵਿੱਚ 1923 ਵਿੱਚ ਚੇਨਈ ਵਿਖੇ ਪਹਿਲੀ ਵਾਰ ਮਨਾਇਆ ਗਿਆ। 1 ਮਈ 1960 ਨੂੰ ਮਹਾਰਾਸ਼ਟਰ ਅਤੇ ਗੁਜਰਾਤ ਬਣੇ।',
        en: 'May Day honors the historic 1886 Chicago Haymarket affair fighting for an 8-hour workday. In India, May Day was first observed in Madras in 1923 by Singaravelu Chettiar. On 1 May 1960, Bombay State was split into Maharashtra and Gujarat.',
      },
      source: 'International Labour Organization (ILO)',
    },
    miniQuiz: {
      question: {
        hi: 'अंतर्राष्ट्रीय श्रम संगठन (ILO) का मुख्यालय कहाँ स्थित है?',
        pa: 'ਅੰਤਰਰਾਸ਼ਟਰੀ ਮਜ਼ਦੂਰ ਸੰਗਠਨ (ILO) ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਕਿੱਥੇ ਹੈ?',
        en: 'Where is the headquarters of the International Labour Organization (ILO)?',
      },
      options: {
        A: { hi: 'लंदन', pa: 'ਲੰਡਨ', en: 'London' },
        B: { hi: 'जिनेवा', pa: 'ਜਿਨੇਵਾ', en: 'Geneva' },
        C: { hi: 'वॉशिंगटन डीसी', pa: 'ਵਾਸ਼ਿੰਗਟਨ ਡੀਸੀ', en: 'Washington D.C.' },
        D: { hi: 'विएना', pa: 'ਵੀਏਨਾ', en: 'Vienna' },
      },
      correct: 'B',
      explanation: {
        hi: 'ILO की स्थापना 1919 में वर्साय संधि द्वारा हुई थी और इसका मुख्यालय जिनेवा (स्विट्जरलैंड) में है। इसे 1969 में नोबेल शांति पुरस्कार मिला।',
        pa: 'ILO ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਜਿਨੇਵਾ ਵਿੱਚ ਹੈ।',
        en: 'The International Labour Organization (ILO), founded in 1919, is headquartered in Geneva, Switzerland.',
      },
    },
  },
  '05-31': { // 31 May — World No Tobacco Day
    date: '05-31',
    thought: {
      text: {
        hi: 'स्वास्थ्य सबसे बड़ा उपहार है, इसे किसी व्यसन की भेंट न चढ़ाएं।',
        pa: 'ਸਿਹਤ ਸਭ ਤੋਂ ਵੱਡਾ ਤੋਹਫ਼ਾ ਹੈ, ਇਸਨੂੰ ਨਸ਼ਿਆਂ ਦੀ ਭੇਟ ਨਾ ਚੜ੍ਹਾਓ।',
        en: 'Tobacco leaves you breathless; choose health, not smoke.',
      },
      author: { hi: 'स्वास्थ्य संदेश', pa: 'ਸਿਹਤ ਸੁਨੇਹਾ', en: 'Public Health Proverb' },
    },
    gkEvent: {
      title: {
        hi: 'विश्व तंबाकू निषेध दिवस (World No Tobacco Day)',
        pa: 'ਵਿਸ਼ਵ ਤੰਬਾਕੂ ਵਿਰੋਧੀ ਦਿਵਸ',
        en: 'World No Tobacco Day',
      },
      description: {
        hi: 'विश्व स्वास्थ्य संगठन (WHO) के सदस्य देशों द्वारा प्रतिवर्ष 31 मई को विश्व तंबाकू निषेध दिवस मनाया जाता है। इसका उद्देश्य तंबाकू के सेवन से होने वाले स्वास्थ्य जोखिमों और घातक बीमारियों (कैंसर, हृदय रोग) के प्रति जागरूकता बढ़ाना है। 1987 में इसे शुरू किया गया था।',
        pa: '31 ਮਈ ਨੂੰ WHO ਵੱਲੋਂ ਤੰਬਾਕੂ ਦੇ ਨੁਕਸਾਨਾਂ ਪ੍ਰਤੀ ਜਾਗਰੂਕਤਾ ਫੈਲਾਉਣ ਲਈ ਵਿਸ਼ਵ ਤੰਬਾਕੂ ਰੋਕੂ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
        en: 'Created in 1987 by WHO member states, World No Tobacco Day is observed on 31 May to draw global attention to the tobacco epidemic and the preventable death and disease it causes.',
      },
      source: 'World Health Organization (WHO)',
    },
    miniQuiz: {
      question: {
        hi: 'तंबाकू में कौन सा प्रमुख हानिकारक एल्कलॉइड पाया जाता है जो लत का कारण बनता है?',
        pa: 'ਤੰਬਾਕੂ ਵਿੱਚ ਕਿਹੜਾ ਹਾਨੀਕਾਰਕ ਤੱਤ ਪਾਇਆ ਜਾਂਦਾ ਹੈ ਜੋ ਨਸ਼ੇ ਦਾ ਕਾਰਨ ਬਣਦਾ ਹੈ?',
        en: 'Which addictive psychoactive chemical compound is found in tobacco leaves?',
      },
      options: {
        A: { hi: 'कैफीन', pa: 'ਕੈਫੀਨ', en: 'Caffeine' },
        B: { hi: 'निकोटीन', pa: 'ਨਿਕੋਟੀਨ', en: 'Nicotine' },
        C: { hi: 'मॉर्फिन', pa: 'ਮਾਰਫੀਨ', en: 'Morphine' },
        D: { hi: 'एट्रोपिन', pa: 'ਐਟ੍ਰੋਪੀਨ', en: 'Atropine' },
      },
      correct: 'B',
      explanation: {
        hi: 'तंबाकू के पौधे की पत्तियों में "निकोटीन" (Nicotine) पाया जाता है जो केंद्रीय तंत्रिका तंत्र पर प्रभाव डालता है और अत्यधिक नशीला होता है।',
        pa: 'ਤੰਬਾਕੂ ਵਿੱਚ ਨਿਕੋਟੀਨ (Nicotine) ਨਾਮਕ ਤੱਤ ਹੁੰਦਾ ਹੈ।',
        en: 'Nicotine is a potent parasympathomimetic alkaloid found in tobacco plants causing strong physical and psychological addiction.',
      },
    },
  },
  '06-05': { // 5 June — World Environment Day
    date: '06-05',
    thought: {
      text: {
        hi: 'प्रकृति हमारी जरूरतें पूरी कर सकती है, लेकिन लालच नहीं। पर्यावरण की रक्षा ही जीवन की रक्षा है।',
        pa: 'ਕੁਦਰਤ ਸਾਡੀਆਂ ਲੋੜਾਂ ਪੂਰੀਆਂ ਕਰਦੀ ਹੈ। ਵਾਤਾਵਰਣ ਦੀ ਸੰਭਾਲ ਹੀ ਜ਼ਿੰਦਗੀ ਦੀ ਸੰਭਾਲ ਹੈ।',
        en: 'In nature nothing exists alone; protect the environment to protect our future.',
      },
      author: { hi: 'राचेल कार्सन', pa: 'ਰੇਚਲ ਕਾਰਸਨ', en: 'Rachel Carson' },
    },
    gkEvent: {
      title: {
        hi: 'विश्व पर्यावरण दिवस (World Environment Day)',
        pa: 'ਵਿਸ਼ਵ ਵਾਤਾਵਰਣ ਦਿਵਸ',
        en: 'World Environment Day',
      },
      description: {
        hi: '5 जून 1972 को स्टॉकहोम (स्वीडन) में संयुक्त राष्ट्र मानव पर्यावरण सम्मेलन शुरू हुआ था, जिसके फलस्वरूप संयुक्त राष्ट्र पर्यावरण कार्यक्रम (UNEP) की स्थापना हुई। 1973 से प्रतिवर्ष 5 जून को "विश्व पर्यावरण दिवस" मनाया जाता है।',
        pa: '5 ਜੂਨ 1972 ਨੂੰ ਸਟਾਕਹੋਮ ਸੰਮੇਲਨ ਤੋਂ ਬਾਅਦ UNEP ਦੀ ਸਥਾਪਨਾ ਹੋਈ ਅਤੇ 1973 ਤੋਂ ਵਿਸ਼ਵ ਵਾਤਾਵਰਣ ਦਿਵਸ ਮਨਾਇਆ ਜਾ ਰਿਹਾ ਹੈ।',
        en: 'Led by UNEP and held annually on 5 June since 1973, World Environment Day grew out of the 1972 Stockholm Conference on the Human Environment, serving as the largest global platform for public environmental outreach.',
      },
      source: 'United Nations Environment Programme (UNEP)',
    },
    miniQuiz: {
      question: {
        hi: 'संयुक्त राष्ट्र पर्यावरण कार्यक्रम (UNEP) का मुख्यालय किस शहर में स्थित है?',
        pa: 'ਯੂਨਾਈਟਿਡ ਨੇਸ਼ਨਜ਼ ਐਨਵਾਇਰਨਮੈਂਟ ਪ੍ਰੋਗਰਾਮ (UNEP) ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਕਿੱਥੇ ਹੈ?',
        en: 'Where is the headquarters of the United Nations Environment Programme (UNEP)?',
      },
      options: {
        A: { hi: 'नैरोबी, केन्या', pa: 'ਨੈਰੋਬੀ, ਕੀਨੀਆ', en: 'Nairobi, Kenya' },
        B: { hi: 'पेरिस, फ्रांस', pa: 'ਪੈਰਿਸ, ਫਰਾਂਸ', en: 'Paris, France' },
        C: { hi: 'न्यूयॉर्क, अमेरिका', pa: 'ਨਿਊਯਾਰਕ, ਅਮਰੀਕਾ', en: 'New York, USA' },
        D: { hi: 'जिनेवा, स्विट्जरलैंड', pa: 'ਜਿਨੇਵਾ, ਸਵਿਟਜ਼ਰਲੈਂਡ', en: 'Geneva, Switzerland' },
      },
      correct: 'A',
      explanation: {
        hi: 'UNEP की स्थापना 1972 में हुई थी और इसका मुख्यालय नैरोबी (केन्या) में स्थित है। यह विकासशील देशों में स्थापित पहला प्रमुख संयुक्त राष्ट्र मुख्यालय था।',
        pa: 'UNEP ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਨੈਰੋਬੀ (ਕੀਨੀਆ) ਵਿੱਚ ਹੈ।',
        en: 'UNEP was established in 1972 and is headquartered in Nairobi, Kenya.',
      },
    },
  },
  '06-21': { // 21 June — International Yoga Day & Summer Solstice
    date: '06-21',
    thought: {
      text: {
        hi: 'योगः कर्मसु कौशलम् — योग कर्मों में कुशलता है।',
        pa: 'ਯੋਗ ਮਨ ਅਤੇ ਸਰੀਰ ਨੂੰ ਇਕਸਾਰ ਕਰਨ ਦਾ ਸਾਧਨ ਹੈ।',
        en: 'Yoga is the journey of the self, through the self, to the self.',
      },
      author: { hi: 'श्रीमद्भगवद्गीता', pa: 'ਭਗਵਤ ਗੀਤਾ', en: 'The Bhagavad Gita' },
    },
    gkEvent: {
      title: {
        hi: 'अंतर्राष्ट्रीय योग दिवस एवं ग्रीष्म संक्रांति',
        pa: 'ਅੰਤਰਰਾਸ਼ਟਰੀ ਯੋਗ ਦਿਵਸ',
        en: 'International Day of Yoga & Summer Solstice',
      },
      description: {
        hi: 'प्रधानमंत्री नरेंद्र मोदी के प्रस्ताव पर 11 दिसंबर 2014 को संयुक्त राष्ट्र महासभा (UNGA) ने सर्वसम्मति से 21 जून को "अंतर्राष्ट्रीय योग दिवस" घोषित किया। 21 जून 2015 को पहला योग दिवस मनाया गया। उत्तरी गोलार्ध में 21 जून वर्ष का सबसे लंबा दिन (ग्रीष्म संक्रांति) होता है।',
        pa: 'ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਮੋਦੀ ਦੇ ਪ੍ਰਸਤਾਵ \'ਤੇ UN ਨੇ 21 ਜੂਨ ਨੂੰ ਅੰਤਰਰਾਸ਼ਟਰੀ ਯੋਗ ਦਿਵਸ ਐਲਾਨਿਆ। 21 ਜੂਨ 2015 ਨੂੰ ਪਹਿਲਾ ਯੋਗ ਦਿਵਸ ਮਨਾਇਆ ਗਿਆ ਸੀ।',
        en: 'Proposed by PM Narendra Modi at the UNGA in Sept 2014, the UN adopted 21 June as International Day of Yoga with a record 177 co-sponsoring nations. First celebrated in 2015, the date coincides with the Northern Hemisphere\'s Summer Solstice.',
      },
      source: 'Ministry of Ayush, Government of India / United Nations',
    },
    miniQuiz: {
      question: {
        hi: 'प्रथम अंतर्राष्ट्रीय योग दिवस 21 जून 2015 को भारत में मुख्य रूप से कहाँ आयोजित हुआ था?',
        pa: 'ਪਹਿਲਾ ਅੰਤਰਰਾਸ਼ਟਰੀ ਯੋਗ ਦਿਵਸ 2015 ਵਿੱਚ ਮੁੱਖ ਤੌਰ \'ਤੇ ਕਿੱਥੇ ਮਨਾਇਆ ਗਿਆ ਸੀ?',
        en: 'Where was the mega gathering of the 1st International Yoga Day held in India on 21 June 2015?',
      },
      options: {
        A: { hi: 'कर्तव्य पथ (राजपथ), नई दिल्ली', pa: 'ਰਾਜਪਥ, ਨਵੀਂ ਦਿੱਲੀ', en: 'Rajpath (Kartavya Path), New Delhi' },
        B: { hi: 'ऋषिकेश, उत्तराखंड', pa: 'ਰਿਸ਼ੀਕੇਸ਼, ਉੱਤਰਾਖੰਡ', en: 'Rishikesh, Uttarakhand' },
        C: { hi: 'वाराणसी, उत्तर प्रदेश', pa: 'ਵਾਰਾਣਸੀ, ਉੱਤਰ ਪ੍ਰਦੇਸ਼', en: 'Varanasi, UP' },
        D: { hi: 'मैसूर पैलेस, कर्नाटक', pa: 'ਮੈਸੂਰ, ਕਰਨਾਟਕ', en: 'Mysuru, Karnataka' },
      },
      correct: 'A',
      explanation: {
        hi: 'राजपथ (नई दिल्ली) पर 35,985 लोगों ने 84 देशों के प्रतिनिधियों के साथ 21 योग आसन किए और दो गिनीज वर्ल्ड रिकॉर्ड बनाए।',
        pa: 'ਰਾਜਪਥ (ਨਵੀਂ ਦਿੱਲੀ) ਵਿਖੇ 35,000 ਤੋਂ ਵੱਧ ਲੋਕਾਂ ਨੇ ਯੋਗ ਕੀਤਾ ਸੀ।',
        en: 'Over 35,985 participants gathered on Rajpath, New Delhi, creating two Guinness World Records for the largest yoga lesson and most nationalities participating.',
      },
    },
  },
  '07-11': { // 11 July — World Population Day
    date: '07-11',
    thought: {
      text: {
        hi: 'सतत विकास के लिए जनसंख्या और संसाधनों के बीच संतुलन अनिवार्य है।',
        pa: 'ਵਿਕਾਸ ਲਈ ਜਨਸੰਖਿਆ ਅਤੇ ਕੁਦਰਤੀ ਸਾਧਨਾਂ ਵਿਚਕਾਰ ਸੰਤੁਲਨ ਜ਼ਰੂਰੀ ਹੈ।',
        en: 'Balancing population growth with planet resources is key to a sustainable future.',
      },
      author: { hi: 'यूएन जनसंख्या कोष', pa: 'ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ', en: 'UNFPA Message' },
    },
    gkEvent: {
      title: {
        hi: 'विश्व जनसंख्या दिवस (World Population Day)',
        pa: 'ਵਿਸ਼ਵ ਜਨਸੰਖਿਆ ਦਿਵਸ',
        en: 'World Population Day',
      },
      description: {
        hi: '11 जुलाई 1987 को विश्व की जनसंख्या 5 अरब (Five Billion Day) पार कर गई थी। इससे प्रेरित होकर संयुक्त राष्ट्र विकास कार्यक्रम (UNDP) ने 1989 में प्रतिवर्ष 11 जुलाई को विश्व जनसंख्या दिवस मनाने का निर्णय लिया, ताकि परिवार नियोजन, लैंगिक समानता और गरीबी उन्मूलन पर ध्यान केंद्रित किया जा सके।',
        pa: '11 ਜੁਲਾਈ 1987 ਨੂੰ ਵਿਸ਼ਵ ਦੀ ਆਬਾਦੀ 5 ਅਰਬ ਹੋਈ ਸੀ। UNDP ਨੇ 1989 ਤੋਂ ਇਸ ਦਿਨ ਨੂੰ ਵਿਸ਼ਵ ਜਨਸੰਖਿਆ ਦਿਵਸ ਵਜੋਂ ਮਨਾਉਣਾ ਸ਼ੁਰੂ ਕੀਤਾ।',
        en: 'Established by UNDP in 1989 inspired by the "Five Billion Day" on 11 July 1987, World Population Day focuses global attention on reproductive health, gender equality, youth development, and sustainable urbanization.',
      },
      source: 'United Nations Population Fund (UNFPA)',
    },
    miniQuiz: {
      question: {
        hi: 'भारत में पहली बार विधिवत एवं संपूर्ण दशकीय जनगणना (Decennial Census) किस वर्ष कराई गई थी?',
        pa: 'ਭਾਰਤ ਵਿੱਚ ਪਹਿਲੀ ਸੰਪੂਰਨ ਮਰਦਮਸ਼ੁਮਾਰੀ ਕਿਸ ਸਾਲ ਹੋਈ ਸੀ?',
        en: 'In which year was the first synchronized, complete decennial census conducted in India?',
      },
      options: {
        A: { hi: '1872', pa: '1872', en: '1872' },
        B: { hi: '1881', pa: '1881', en: '1881' },
        C: { hi: '1901', pa: '1901', en: '1901' },
        D: { hi: '1951', pa: '1951', en: '1951' },
      },
      correct: 'B',
      explanation: {
        hi: 'भारत में पहली गैर-समकालिक जनगणना 1872 में लॉर्ड मेयो के काल में हुई थी, जबकि पहली पूर्ण दशकीय समकालिक जनगणना 1881 में लॉर्ड रिपन के कार्यकाल में डब्ल्यू.सी. प्लोडेन के नेतृत्व में हुई।',
        pa: '1881 ਵਿੱਚ ਲਾਰਡ ਰਿਪਨ ਦੇ ਸਮੇਂ ਪਹਿਲੀ ਸੰਪੂਰਨ ਦਸ-ਸਾਲਾ ਮਰਦਮਸ਼ੁਮਾਰੀ ਹੋਈ ਸੀ।',
        en: 'While the first non-synchronous census was in 1872 under Mayo, the first complete decennial census across British India took place in 1881 under Viceroy Ripon.',
      },
    },
  },
  '08-09': { // 9 August — Quit India Movement Day & Nagasaki Day
    date: '08-09',
    thought: {
      text: {
        hi: 'करो या मरो (Do or Die) — हम या तो भारत को आजाद कराएंगे या इस प्रयास में अपने प्राण दे देंगे।',
        pa: 'ਕਰੋ ਜਾਂ ਮਰੋ — ਅਸੀਂ ਭਾਰਤ ਨੂੰ ਆਜ਼ਾਦ ਕਰਾਵਾਂਗੇ ਜਾਂ ਕੁਰਬਾਨ ਹੋ ਜਾਵਾਂਗੇ।',
        en: 'Do or Die. We shall either free India or die in the attempt.',
      },
      author: { hi: 'महात्मा गांधी', pa: 'ਮਹਾਤਮਾ ਗਾਂਧੀ', en: 'Mahatma Gandhi' },
    },
    gkEvent: {
      title: {
        hi: 'भारत छोड़ो आंदोलन दिवस (अगस्त क्रांति)',
        pa: 'ਭਾਰਤ ਛੱਡੋ ਅੰਦੋਲਨ ਦਿਵਸ (ਅਗਸਤ ਕ੍ਰਾਂਤੀ)',
        en: 'Quit India Movement Day (August Kranti Din)',
      },
      description: {
        hi: '8 अगस्त 1942 को बॉम्बे के गोवालिया टैंक मैदान (अगस्त क्रांति मैदान) में कांग्रेस अधिवेशन में "भारत छोड़ो प्रस्ताव" पारित हुआ और 9 अगस्त 1942 को आंदोलन शुरू हुआ। गांधी जी ने "करो या मरो" का ऐतिहासिक नारा दिया। अरुणा आसफ अली ने गोवालिया टैंक पर तिरंगा फहराया था।',
        pa: '9 ਅਗਸਤ 1942 ਨੂੰ ਮਹਾਤਮਾ ਗਾਂਧੀ ਨੇ "ਕਰੋ ਜਾਂ ਮਰੋ" ਦੇ ਨਾਅਰੇ ਨਾਲ ਭਾਰਤ ਛੱਡੋ ਅੰਦੋਲਨ ਸ਼ੁਰੂ ਕੀਤਾ ਸੀ। ਅਰੁਣਾ ਆਸਫ ਅਲੀ ਨੇ ਗੋਵਾਲੀਆ ਟੈਂਕ \'ਤੇ ਝੰਡਾ ਲਹਿਰਾਇਆ।',
        en: 'On 8 August 1942 at Gowalia Tank Maidan (August Kranti Maidan) in Bombay, the AICC passed the Quit India Resolution. Launched on 9 August, Mahatma Gandhi gave the clarion call "Do or Die". Aruna Asaf Ali hoisted the national flag.',
      },
      source: 'National Archives of India, Ministry of Culture',
    },
    miniQuiz: {
      question: {
        hi: '1942 के भारत छोड़ो आंदोलन के दौरान भूमिगत रेडियो स्टेशन (Underground Congress Radio) का संचालन किसने किया था?',
        pa: '1942 ਦੇ ਭਾਰਤ ਛੱਡੋ ਅੰਦੋਲਨ ਦੌਰਾਨ ਗੁਪਤ ਰੇਡੀਓ ਕਿਸਨੇ ਚਲਾਇਆ ਸੀ?',
        en: 'Who operated the secret underground Congress Radio during the Quit India Movement in 1942?',
      },
      options: {
        A: { hi: 'सरोजिनी नायडू', pa: 'ਸਰੋਜਿਨੀ ਨਾਇਡੂ', en: 'Sarojini Naidu' },
        B: { hi: 'उषा मेहता', pa: 'ਊਸ਼ਾ ਮਹਿਤਾ', en: 'Usha Mehta' },
        C: { hi: 'सुचेता कृपलानी', pa: 'ਸੁਚੇਤਾ ਕ੍ਰਿਪਲਾਨੀ', en: 'Sucheta Kripalani' },
        D: { hi: 'मातंगिनी हाजरा', pa: 'ਮਾਤੰਗਿਨੀ ਹਾਜ਼ਰਾ', en: 'Matangini Hazra' },
      },
      correct: 'B',
      explanation: {
        hi: 'डॉ. उषा मेहता और उनके सहयोगियों ने मुंबई से गुप्त कांग्रेस रेडियो का संचालन किया था जिससे आंदोलन की खबरें प्रसारित की जाती थीं।',
        pa: 'ਡਾ. ਊਸ਼ਾ ਮਹਿਤਾ ਨੇ ਗੁਪਤ ਰੇਡੀਓ ਦਾ ਸੰਚਾਲਨ ਕੀਤਾ ਸੀ।',
        en: 'Dr. Usha Mehta established and operated the underground Congress Radio broadcasting news of the freedom struggle across India.',
      },
    },
  },
  '08-29': { // 29 August — National Sports Day (Major Dhyan Chand)
    date: '08-29',
    thought: {
      text: {
        hi: 'खेल केवल जीतना नहीं, बल्कि राष्ट्र का गौरव बढ़ाना और अनुशासन सिखाना है।',
        pa: 'ਖੇਡਾਂ ਅਨੁਸ਼ਾਸਨ ਅਤੇ ਦੇਸ਼ ਦਾ ਮਾਣ ਵਧਾਉਂਦੀਆਂ ਹਨ।',
        en: 'Sports teach discipline, passion, and the spirit of serving the nation.',
      },
      author: { hi: 'मेजर ध्यानचंद', pa: 'ਮੇਜਰ ਧਿਆਨ ਚੰਦ', en: 'Major Dhyan Chand' },
    },
    gkEvent: {
      title: {
        hi: 'राष्ट्रीय खेल दिवस — हॉकी के जादूगर मेजर ध्यानचंद जयंती',
        pa: 'ਰਾਸ਼ਟਰੀ ਖੇਡ ਦਿਵਸ — ਮੇਜਰ ਧਿਆਨ ਚੰਦ ਜਯੰਤੀ',
        en: 'National Sports Day — Major Dhyan Chand Birth Anniversary',
      },
      description: {
        hi: '29 अगस्त 1905 को प्रयागराज में जन्मे "हॉकी के जादूगर" मेजर ध्यानचंद के जन्मदिन को राष्ट्रीय खेल दिवस के रूप में मनाया जाता है। उनके नेतृत्व में भारत ने 1928 (एम्सटर्डम), 1932 (लॉस एंजिल्स) और 1936 (बर्लिन) ओलंपिक में स्वर्ण पदक जीते। इसी दिन राष्ट्रपति भवन में खेल रत्न व अर्जुन पुरस्कार प्रदान किए जाते हैं।',
        pa: '29 ਅਗਸਤ 1905 ਨੂੰ ਜਨਮੇ ਹਾਕੀ ਦੇ ਜਾਦੂਗਰ ਮੇਜਰ ਧਿਆਨ ਚੰਦ ਦੀ ਯਾਦ ਵਿੱਚ ਰਾਸ਼ਟਰੀ ਖੇਡ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ। ਭਾਰਤ ਨੇ 1928, 1932, 1936 ਓਲੰਪਿਕ ਵਿੱਚ ਸੋਨ ਤਗਮੇ ਜਿੱਤੇ ਸਨ।',
        en: 'Born on 29 August 1905, hockey wizard Major Dhyan Chand helped India clinch Olympic gold medals in 1928, 1932, and 1936. India honors him annually on National Sports Day with the presentation of Khel Ratna, Arjuna, and Dronacharya awards.',
      },
      source: 'Ministry of Youth Affairs and Sports, Government of India',
    },
    miniQuiz: {
      question: {
        hi: 'भारत के सर्वोच्च खेल सम्मान "राजीव गांधी खेल रत्न पुरस्कार" का नाम बदलकर 2021 में क्या रखा गया?',
        pa: 'ਭਾਰਤ ਦੇ ਸਭ ਤੋਂ ਵੱਡੇ ਖੇਡ ਪੁਰਸਕਾਰ ਦਾ ਨਾਮ ਬਦਲ ਕੇ 2021 ਵਿੱਚ ਕੀ ਰੱਖਿਆ ਗਿਆ?',
        en: 'What was India\'s highest sports award renamed to in August 2021?',
      },
      options: {
        A: { hi: 'भारत खेल रत्न पुरस्कार', pa: 'ਭਾਰਤ ਖੇਲ ਰਤਨ', en: 'Bharat Khel Ratna' },
        B: { hi: 'मेजर ध्यानचंद खेल रत्न पुरस्कार', pa: 'ਮੇਜਰ ਧਿਆਨ ਚੰਦ ਖੇਲ ਰਤਨ', en: 'Major Dhyan Chand Khel Ratna Award' },
        C: { hi: 'ओलंपिक खेल रत्न पुरस्कार', pa: 'ਓਲੰਪਿਕ ਖੇਲ ਰਤਨ', en: 'Olympic Khel Ratna' },
        D: { hi: 'राष्ट्रीय खेल सम्मान', pa: 'ਰਾਸ਼ਟਰੀ ਖੇਡ ਸਨਮਾਨ', en: 'National Sports Honor' },
      },
      correct: 'B',
      explanation: {
        hi: 'अगस्त 2021 में भारत सरकार ने देश के सर्वोच्च खेल सम्मान का नाम बदलकर "मेजर ध्यानचंद खेल रत्न पुरस्कार" कर दिया।',
        pa: 'ਇਸਦਾ ਨਾਮ "ਮੇਜਰ ਧਿਆਨ ਚੰਦ ਖੇਲ ਰਤਨ ਪੁਰਸਕਾਰ" ਰੱਖਿਆ ਗਿਆ।',
        en: 'In August 2021, the Government of India officially renamed the Rajiv Gandhi Khel Ratna Award to Major Dhyan Chand Khel Ratna Award.',
      },
    },
  },
  '09-05': { // 5 September — Teachers' Day (Dr. Sarvepalli Radhakrishnan)
    date: '09-05',
    thought: {
      text: {
        hi: 'शिक्षक वह नहीं जो छात्र के दिमाग में तथ्य ठूंसे, बल्कि वह है जो उसे सोचने के लिए प्रेरित करे।',
        pa: 'ਅਧਿਆਪਕ ਉਹ ਨਹੀਂ ਜੋ ਸਿਰਫ ਤੱਥ ਰਟਾਵੇ, ਸਗੋਂ ਉਹ ਹੈ ਜੋ ਵਿਦਿਆਰਥੀ ਨੂੰ ਸੋਚਣ ਦੇ ਯੋਗ ਬਣਾਵੇ।',
        en: 'Teachers should be the best minds in the country.',
      },
      author: { hi: 'डॉ. सर्वपल्ली राधाकृष्णन', pa: 'ਡਾ. ਸਰਵਪੱਲੀ ਰਾਧਾਕ੍ਰਿਸ਼ਣਨ', en: 'Dr. Sarvepalli Radhakrishnan' },
    },
    gkEvent: {
      title: {
        hi: 'शिक्षक दिवस — डॉ. सर्वपल्ली राधाकृष्णन जयंती',
        pa: 'ਅਧਿਆਪਕ ਦਿਵਸ — ਡਾ. ਸਰਵਪੱਲੀ ਰਾਧਾਕ੍ਰਿਸ਼ਣਨ ਜਯੰਤੀ',
        en: 'Teachers\' Day — Dr. Sarvepalli Radhakrishnan Birthday',
      },
      description: {
        hi: '5 सितंबर 1888 को जन्मे महान दार्शनिक, शिक्षाविद और भारत के प्रथम उपराष्ट्रपति व द्वितीय राष्ट्रपति डॉ. सर्वपल्ली राधाकृष्णन के जन्मदिवस को 1962 से भारत में "शिक्षक दिवस" के रूप में मनाया जाता है। उन्हें 1954 में प्रथम भारत रत्न से सम्मानित किया गया था।',
        pa: '5 ਸਤੰਬਰ 1888 ਨੂੰ ਜਨਮੇ ਭਾਰਤ ਦੇ ਪਹਿਲੇ ਉਪ-ਰਾਸ਼ਟਰਪਤੀ ਅਤੇ ਦੂਜੇ ਰਾਸ਼ਟਰਪਤੀ ਡਾ. ਰਾਧਾਕ੍ਰਿਸ਼ਣਨ ਦੇ ਜਨਮ ਦਿਨ ਨੂੰ 1962 ਤੋਂ ਅਧਿਆਪਕ ਦਿਵਸ ਵਜੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
        en: 'Celebrated since 1962, Teachers\' Day honors the birth anniversary of eminent philosopher, statesman, India\'s first Vice President and second President, Dr. Sarvepalli Radhakrishnan. He was among the first recipients of the Bharat Ratna in 1954.',
      },
      source: 'Ministry of Education, Government of India',
    },
    miniQuiz: {
      question: {
        hi: 'वर्ष 1954 में जब पहली बार "भारत रत्न" प्रदान किया गया, तो डॉ. राधाकृष्णन के साथ अन्य दो विभूतियां कौन थीं?',
        pa: '1954 ਵਿੱਚ ਪਹਿਲੀ ਵਾਰ ਭਾਰਤ ਰਤਨ ਡਾ. ਰਾਧਾਕ੍ਰਿਸ਼ਣਨ ਦੇ ਨਾਲ ਹੋਰ ਕਿਨ੍ਹਾਂ ਨੂੰ ਮਿਲਿਆ ਸੀ?',
        en: 'Who were the other two inaugural recipients of the Bharat Ratna alongside Dr. S. Radhakrishnan in 1954?',
      },
      options: {
        A: { hi: 'जवाहरलाल नेहरू और सरदार पटेल', pa: 'ਜਵਾਹਰਲਾਲ ਨਹਿਰੂ ਤੇ ਸਰਦਾਰ ਪਟੇਲ', en: 'Jawaharlal Nehru & Sardar Patel' },
        B: { hi: 'सी. राजगोपालाचारी और डॉ. सी.वी. रमन', pa: 'ਸੀ. ਰਾਜਗੋਪਾਲਾਚਾਰੀ ਤੇ ਡਾ. ਸੀ.ਵੀ. ਰਮਨ', en: 'C. Rajagopalachari & Dr. C.V. Raman' },
        C: { hi: 'डॉ. राजेन्द्र प्रसाद और बी.आर. अम्बेडकर', pa: 'ਡਾ. ਰਾਜਿੰਦਰ ਪ੍ਰਸਾਦ ਤੇ ਬੀ.ਆਰ. ਅੰਬੇਡਕਰ', en: 'Dr. Rajendra Prasad & B.R. Ambedkar' },
        D: { hi: 'भगवान दास और एम. विश्वेश्वरैया', pa: 'ਭਗਵਾਨ ਦਾਸ ਤੇ ਐਮ. ਵਿਸ਼ਵੇਸ਼ਵਰਈਆ', en: 'Bhagwan Das & M. Visvesvaraya' },
      },
      correct: 'B',
      explanation: {
        hi: '1954 में प्रथम भारत रत्न तीन महान हस्तियों — डॉ. सर्वपल्ली राधाकृष्णन, सी. राजगोपालाचारी और सर सी.वी. रमन को दिया गया था।',
        pa: '1954 ਵਿੱਚ ਡਾ. ਰਾਧਾਕ੍ਰਿਸ਼ਣਨ, ਸੀ. ਰਾਜਗੋਪਾਲਾਚਾਰੀ ਅਤੇ ਸਰ ਸੀ.ਵੀ. ਰਮਨ ਨੂੰ ਭਾਰਤ ਰਤਨ ਮਿਲਿਆ ਸੀ।',
        en: 'The 1954 inaugural Bharat Ratna awards were presented to C. Rajagopalachari, Dr. S. Radhakrishnan, and Sir C.V. Raman.',
      },
    },
  },
  '09-15': { // 15 September — Engineer's Day (M. Visvesvaraya) & International Day of Democracy
    date: '09-15',
    thought: {
      text: {
        hi: 'काम ऐसा करो कि वह खुद अपनी गुणवत्ता बयां करे। कर्म ही पूजा है।',
        pa: 'ਕੰਮ ਅਜਿਹਾ ਕਰੋ ਕਿ ਉਹ ਖ਼ੁਦ ਆਪਣੀ ਕੁਆਲਿਟੀ ਦੱਸੇ।',
        en: 'Remember, your work may be only to sweep a room, but make that room clean so that all who enter will know that a master swept it.',
      },
      author: { hi: 'सर एम. विश्वेश्वरैया', pa: 'ਸਰ ਐਮ. ਵਿਸ਼ਵੇਸ਼ਵਰਈਆ', en: 'Sir M. Visvesvaraya' },
    },
    gkEvent: {
      title: {
        hi: 'अभियंता दिवस (Engineer\'s Day) — सर एम. विश्वेश्वरैया जयंती',
        pa: 'ਇੰਜੀਨੀਅਰਜ਼ ਦਿਵਸ — ਸਰ ਐਮ. ਵਿਸ਼ਵੇਸ਼ਵਰਈਆ ਜਯੰਤੀ',
        en: 'Engineers\' Day — Sir M. Visvesvaraya Birth Anniversary',
      },
      description: {
        hi: '15 सितंबर 1861 को कर्नाटक के मुद्दनाहल्ली में जन्मे भारत के महान सिविल इंजीनियर एवं मैसूर के 19वें दीवान सर मोक्षगुंडम विश्वेश्वरैया के सम्मान में भारत, श्रीलंका और तंजानिया में "अभियंता दिवस" मनाया जाता है। उन्होंने कृष्णराज सागर (KRS) बांध का निर्माण कराया और स्वचालित फ्लडगेट का आविष्कार किया। 1955 में उन्हें भारत रत्न मिला।',
        pa: '15 ਸਤੰਬਰ 1861 ਨੂੰ ਜਨਮੇ ਮਹਾਨ ਇੰਜੀਨੀਅਰ ਸਰ ਐਮ. ਵਿਸ਼ਵੇਸ਼ਵਰਈਆ ਦੀ ਯਾਦ ਵਿੱਚ ਇੰਜੀਨੀਅਰਜ਼ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ। 1955 ਵਿੱਚ ਉਹਨਾਂ ਨੂੰ ਭਾਰਤ ਰਤਨ ਮਿਲਿਆ ਸੀ।',
        en: 'Born on 15 September 1861, Sir Mokshagundam Visvesvaraya engineered landmark flood protection systems in Hyderabad, the Krishna Raja Sagara Dam in Mandya, and invented automatic sluice floodgates. India celebrates Engineers\' Day on his birthday since 1968.',
      },
      source: 'Institution of Engineers (India) / Government of India',
    },
    miniQuiz: {
      question: {
        hi: 'सर एम. विश्वेश्वरैया द्वारा डिजाइन किया गया प्रसिद्ध "कृष्णराज सागर बांध" (KRS Dam) किस नदी पर स्थित है?',
        pa: 'ਸਰ ਐਮ. ਵਿਸ਼ਵੇਸ਼ਵਰਈਆ ਦੁਆਰਾ ਬਣਾਇਆ ਗਿਆ ਕ੍ਰਿਸ਼ਣਰਾਜ ਸਾਗਰ ਬੰਨ੍ਹ ਕਿਸ ਨਦੀ \'ਤੇ ਹੈ?',
        en: 'On which river is the Krishna Raja Sagara (KRS) Dam located in Karnataka?',
      },
      options: {
        A: { hi: 'कृष्णा नदी', pa: 'ਕ੍ਰਿਸ਼ਨਾ ਨਦੀ', en: 'Krishna River' },
        B: { hi: 'कावेरी नदी', pa: 'ਕਾਵੇਰੀ ਨਦੀ', en: 'Cauvery (Kaveri) River' },
        C: { hi: 'गोदावरी नदी', pa: 'ਗੋਦਾਵਰੀ ਨਦੀ', en: 'Godavari River' },
        D: { hi: 'तुंगभद्रा नदी', pa: 'ਤੁੰਗਭਦਰਾ ਨਦੀ', en: 'Tungabhadra River' },
      },
      correct: 'B',
      explanation: {
        hi: 'कृष्णराज सागर बांध कर्नाटक के मांड्या जिले में कावेरी नदी पर स्थित है, जिसके पास विश्व प्रसिद्ध वृंदावन गार्डन है।',
        pa: 'KRS ਬੰਨ੍ਹ ਕਾਵੇਰੀ ਨਦੀ ਉੱਤੇ ਕਰਨਾਟਕ ਵਿੱਚ ਸਥਿਤ ਹੈ।',
        en: 'The KRS Dam was built across the Kaveri River in Mandya district, Karnataka.',
      },
    },
  },
  '09-25': { // 25 September — Antyodaya Diwas (Pandit Deendayal Upadhyaya)
    date: '09-25',
    thought: {
      text: {
        hi: 'अंतिम पंक्ति में खड़े व्यक्ति का उत्थान ही वास्तविक विकास है (अंत्योदय)।',
        pa: 'ਆਖਰੀ ਕਤਾਰ ਵਿੱਚ ਖੜ੍ਹੇ ਵਿਅਕਤੀ ਦਾ ਵਿਕਾਸ ਹੀ ਅਸਲ ਤਰੱਕੀ ਹੈ।',
        en: 'The measure of economic progress is the condition of the person at the lowest rung of society.',
      },
      author: { hi: 'पंडित दीनदयाल उपाध्याय', pa: 'ਪੰਡਿਤ ਦੀਨਦਿਆਲ ਉਪਾਧਿਆਏ', en: 'Pt. Deendayal Upadhyaya' },
    },
    gkEvent: {
      title: {
        hi: 'अंत्योदय दिवस — पंडित दीनदयाल उपाध्याय जयंती',
        pa: 'ਅੰਤਯੋਦਿਆ ਦਿਵਸ — ਪੰਡਿਤ ਦੀਨਦਿਆਲ ਉਪਾਧਿਆਏ ਜਯੰਤੀ',
        en: 'Antyodaya Diwas — Pt. Deendayal Upadhyaya Jayanti',
      },
      description: {
        hi: '25 सितंबर 1916 को मथुरा में जन्मे प्रखर विचारक और "एकात्म मानववाद" (Integral Humanism) के प्रणेता पंडित दीनदयाल उपाध्याय के जन्मदिवस को भारत सरकार 2014 से "अंत्योदय दिवस" के रूप में मनाती है। इसका उद्देश्य समाज के सबसे अंतिम और कमजोर वर्ग के उत्थान के लिए सरकारी योजनाओं को समर्पित करना है।',
        pa: '25 ਸਤੰਬਰ ਨੂੰ ਪੰਡਿਤ ਦੀਨਦਿਆਲ ਉਪਾਧਿਆਏ ਦੀ ਯਾਦ ਵਿੱਚ ਅੰਤਯੋਦਿਆ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ। ਉਹਨਾਂ ਨੇ "ਏਕਾਤਮ ਮਾਨਵਵਾਦ" ਦਾ ਸਿਧਾਂਤ ਦਿੱਤਾ ਸੀ।',
        en: 'Observed since 2014, Antyodaya Diwas commemorates the birth anniversary of Pt. Deendayal Upadhyaya (born 25 Sept 1916), philosopher of "Integral Humanism". The philosophy emphasizes uplifting the last underprivileged citizen in the societal queue.',
      },
      source: 'Ministry of Rural Development, Government of India',
    },
    miniQuiz: {
      question: {
        hi: 'पंडित दीनदयाल उपाध्याय ने किस प्रमुख दार्शनिक अवधारणा का प्रतिपादन किया था?',
        pa: 'ਪੰਡਿਤ ਦੀਨਦਿਆਲ ਉਪਾਧਿਆਏ ਨੇ ਕਿਹੜਾ ਪ੍ਰਮੁੱਖ ਫਲਸਫਾ ਦਿੱਤਾ ਸੀ?',
        en: 'Which political and socioeconomic philosophy was propounded by Pt. Deendayal Upadhyaya?',
      },
      options: {
        A: { hi: 'सर्वोदय', pa: 'ਸਰਵੋਦਿਆ', en: 'Sarvodaya' },
        B: { hi: 'एकात्म मानववाद (Integral Humanism)', pa: 'ਏਕਾਤਮ ਮਾਨਵਵਾਦ', en: 'Integral Humanism' },
        C: { hi: 'द्वंद्वात्मक भौतिकवाद', pa: 'ਭੌਤਿਕਵਾਦ', en: 'Dialectical Materialism' },
        D: { hi: 'उपयोगितावाद', pa: 'ਉਪਯੋਗਤਾਵਾਦ', en: 'Utilitarianism' },
      },
      correct: 'B',
      explanation: {
        hi: 'दीनदयाल उपाध्याय ने 1965 में "एकात्म मानववाद" (Integral Humanism) का प्रतिपादन किया जिसमें व्यक्ति, समाज, प्रकृति और आत्मा के समन्वय पर बल दिया गया।',
        pa: 'ਉਹਨਾਂ ਨੇ "ਏਕਾਤਮ ਮਾਨਵਵਾਦ" ਦਾ ਸਿਧਾਂਤ ਦਿੱਤਾ ਸੀ।',
        en: 'Pt. Deendayal Upadhyaya formulated the philosophy of "Integral Humanism" in April 1965.',
      },
    },
  },
  '10-31': { // 31 October — Rashtriya Ekta Diwas (Sardar Vallabhbhai Patel)
    date: '10-31',
    thought: {
      text: {
        hi: 'कठिन से कठिन समय में भी एकता ही हमारी सबसे बड़ी ढाल है।',
        pa: 'ਔਖੇ ਸਮੇਂ ਵਿੱਚ ਵੀ ਏਕਤਾ ਸਾਡੀ ਸਭ ਤੋਂ ਵੱਡੀ ਤਾਕਤ ਹੈ।',
        en: 'Manpower without unity is not a strength unless it is harmonized and united properly.',
      },
      author: { hi: 'लौह पुरुष सरदार वल्लभभाई पटेल', pa: 'ਸਰਦਾਰ ਵੱਲਭਭਾਈ ਪਟੇਲ', en: 'Sardar Vallabhbhai Patel' },
    },
    gkEvent: {
      title: {
        hi: 'राष्ट्रीय एकता दिवस — लौह पुरुष सरदार पटेल जयंती',
        pa: 'ਰਾਸ਼ਟਰੀ ਏਕਤਾ ਦਿਵਸ — ਸਰਦਾਰ ਵੱਲਭਭਾਈ ਪਟੇਲ ਜਯੰਤੀ',
        en: 'National Unity Day (Rashtriya Ekta Diwas)',
      },
      description: {
        hi: '31 अक्टूबर 1875 को गुजरात के नडियाद में जन्मे भारत के प्रथम उप-प्रधानमंत्री और गृह मंत्री सरदार वल्लभभाई पटेल के जन्मदिन को 2014 से "राष्ट्रीय एकता दिवस" के रूप में मनाया जाता है। उन्होंने 560 से अधिक देशी रियासतों का भारतीय संघ में विलय कर अखंड भारत का निर्माण किया। गुजरात के केवड़िया में 182 मीटर ऊंची "स्टैच्यू ऑफ यूनिटी" उनकी स्मृति में बनी है।',
        pa: '31 ਅਕਤੂਬਰ ਨੂੰ ਲੋਹ ਪੁਰਸ਼ ਸਰਦਾਰ ਵੱਲਭਭਾਈ ਪਟੇਲ ਦੀ ਯਾਦ ਵਿੱਚ ਰਾਸ਼ਟਰੀ ਏਕਤਾ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ। ਉਹਨਾਂ ਨੇ 560 ਤੋਂ ਵੱਧ ਰਿਆਸਤਾਂ ਨੂੰ ਭਾਰਤ ਵਿੱਚ ਮਿਲਾਇਆ। ਸਟੈਚੂ ਆਫ ਯੂਨਿਟੀ (182 ਮੀਟਰ) ਗੁਜਰਾਤ ਵਿੱਚ ਸਥਿਤ ਹੈ।',
        en: 'Celebrated since 2014, National Unity Day marks the birth of Sardar Vallabhbhai Patel (Iron Man of India), who integrated over 560 princely states into the Indian Union. The 182-metre Statue of Unity at Kevadia, Gujarat honors his legacy as the world\'s tallest statue.',
      },
      source: 'Ministry of Home Affairs, Government of India',
    },
    miniQuiz: {
      question: {
        hi: 'वल्लभभाई पटेल को "सरदार" की उपाधि किस आंदोलन की सफलता के बाद बारडोली की महिलाओं की ओर से दी गई थी?',
        pa: 'ਵੱਲਭਭਾਈ ਪਟੇਲ ਨੂੰ "ਸਰਦਾਰ" ਦੀ ਉਪਾਧੀ ਕਿਸ ਅੰਦੋਲਨ ਤੋਂ ਬਾਅਦ ਮਿਲੀ ਸੀ?',
        en: 'Following which historic agrarian movement was Vallabhbhai Patel conferred the title "Sardar" by local women?',
      },
      options: {
        A: { hi: 'खेड़ा सत्याग्रह 1918', pa: 'ਖੇੜਾ ਸੱਤਿਆਗ੍ਰਹਿ 1918', en: 'Kheda Satyagraha 1918' },
        B: { hi: 'बारडोली सत्याग्रह 1928', pa: 'ਬਾਰਡੋਲੀ ਸੱਤਿਆਗ੍ਰਹਿ 1928', en: 'Bardoli Satyagraha 1928' },
        C: { hi: 'चंपारण सत्याग्रह 1917', pa: 'ਚੰਪਾਰਨ ਸੱਤਿਆਗ੍ਰਹਿ 1917', en: 'Champaran Satyagraha 1917' },
        D: { hi: 'नमक सत्याग्रह 1930', pa: 'ਨਮਕ ਸੱਤਿਆਗ੍ਰਹਿ 1930', en: 'Salt Satyagraha 1930' },
      },
      correct: 'B',
      explanation: {
        hi: '1928 में बारडोली (गुजरात) में बढ़े हुए लगान के विरुद्ध सफल किसान सत्याग्रह के नेतृत्व के बाद महिलाओं की ओर से गांधी जी ने उन्हें "सरदार" की उपाधि दी।',
        pa: '1928 ਦੇ ਬਾਰਡੋਲੀ ਸੱਤਿਆਗ੍ਰਹਿ ਤੋਂ ਬਾਅਦ ਉਹਨਾਂ ਨੂੰ "ਸਰਦਾਰ" ਕਿਹਾ ਜਾਣ ਲੱਗਿਆ।',
        en: 'Following the victorious 1928 Bardoli Satyagraha against British tax hikes, the women of Bardoli bestowed the title "Sardar" upon him via Mahatma Gandhi.',
      },
    },
  },
  '11-01': { // 1 November — Formation Day of Haryana, MP, Karnataka, Kerala, Punjab, Chhattisgarh
    date: '11-01',
    thought: {
      text: {
        hi: 'राज्यों की सांस्कृतिक विविधता ही भारत के संघीय ढांचे की वास्तविक सुंदरता है।',
        pa: 'ਰਾਜਾਂ ਦੀ ਸੱਭਿਆਚਾਰਕ ਵਿਭਿੰਨਤਾ ਹੀ ਭਾਰਤ ਦੀ ਅਸਲ ਸੁੰਦਰਤਾ ਹੈ।',
        en: 'The diverse linguistic and cultural tapestry of our states strengthens the Union.',
      },
      author: { hi: 'राष्ट्रीय एकता संदेश', pa: 'ਕੌਮੀ ਏਕਤਾ ਸੁਨੇਹਾ', en: 'National Integration Theme' },
    },
    gkEvent: {
      title: {
        hi: 'हरियाणा, पंजाब, म.प्र., कर्नाटक, केरल एवं छत्तीसगढ़ स्थापना दिवस',
        pa: 'ਹਰਿਆਣਾ, ਪੰਜਾਬ, ਮੱਧ ਪ੍ਰਦੇਸ਼, ਕਰਨਾਟਕ ਅਤੇ ਕੇਰਲ ਸਥਾਪਨਾ ਦਿਵਸ',
        en: 'State Formation Day (Haryana, Punjab, MP, Karnataka, Kerala, Chhattisgarh)',
      },
      description: {
        hi: '1 नवंबर भारत के कई राज्यों के लिए ऐतिहासिक है: 1966 में भाषा के आधार पर पंजाब के पुनर्गठन से हरियाणा (17वां राज्य) और वर्तमान पंजाब बने; 1956 में राज्य पुनर्गठन अधिनियम द्वारा मध्य प्रदेश, कर्नाटक (मैसूर) और केरल का गठन हुआ; तथा 1 नवंबर 2000 को छत्तीसगढ़ (26वां राज्य) बना।',
        pa: '1 ਨਵੰਬਰ 1966 ਨੂੰ ਪੰਜਾਬ ਦਾ ਪੁਨਰਗਠਨ ਹੋਇਆ ਅਤੇ ਹਰਿਆਣਾ ਵੱਖਰਾ ਰਾਜ ਬਣਿਆ। 1 ਨਵੰਬਰ 1956 ਨੂੰ ਮੱਧ ਪ੍ਰਦੇਸ਼, ਕਰਨਾਟਕ ਤੇ ਕੇਰਲ ਬਣੇ ਅਤੇ 2000 ਵਿੱਚ ਛੱਤੀਸਗੜ੍ਹ ਬਣਿਆ।',
        en: '1 November marks the foundation day of several Indian states: Haryana and reorganized Punjab were established in 1966; Madhya Pradesh, Karnataka, and Kerala were formed under the States Reorganisation Act 1956; and Chhattisgarh was carved out in 2000.',
      },
      source: 'Government of India, Ministry of Home Affairs',
    },
    miniQuiz: {
      question: {
        hi: '1 नवंबर 1966 को हरियाणा राज्य का गठन किस आयोग की सिफारिशों के आधार पर किया गया था?',
        pa: '1 ਨਵੰਬਰ 1966 ਨੂੰ ਹਰਿਆਣਾ ਕਿਸ ਕਮਿਸ਼ਨ ਦੀ ਸਿਫਾਰਸ਼ \'ਤੇ ਬਣਿਆ ਸੀ?',
        en: 'On the recommendation of which commission was Haryana carved out of Punjab on 1 November 1966?',
      },
      options: {
        A: { hi: 'फजल अली आयोग', pa: 'ਫਜ਼ਲ ਅਲੀ ਕਮਿਸ਼ਨ', en: 'Fazal Ali Commission' },
        B: { hi: 'जे.सी. शाह आयोग (Shah Commission)', pa: 'ਜੇ.ਸੀ. ਸ਼ਾਹ ਕਮਿਸ਼ਨ', en: 'J.C. Shah Commission' },
        C: { hi: 'सरकारिया आयोग', pa: 'ਸਰਕਾਰੀਆ ਕਮਿਸ਼ਨ', en: 'Sarkaria Commission' },
        D: { hi: 'धर आयोग', pa: 'ਧਰ ਕਮਿਸ਼ਨ', en: 'Dhar Commission' },
      },
      correct: 'B',
      explanation: {
        hi: 'न्यायमूर्ति जे.सी. शाह की अध्यक्षता वाले शाह आयोग (Shah Commission) की सिफारिश पर 18वें संविधान संशोधन अधिनियम द्वारा 1 नवंबर 1966 को हरियाणा का गठन हुआ।',
        pa: 'ਜੇ.ਸੀ. ਸ਼ਾਹ ਕਮਿਸ਼ਨ ਦੀ ਸਿਫਾਰਸ਼ \'ਤੇ ਹਰਿਆਣਾ ਬਣਿਆ ਸੀ।',
        en: 'The Punjab Reorganisation Act 1966 was based on the recommendations of the Justice J.C. Shah Commission.',
      },
    },
  },
  '11-14': { // 14 November — Children's Day / World Diabetes Day
    date: '11-14',
    thought: {
      text: {
        hi: 'बच्चे बगीचे की कलियों जैसे हैं, उनका पालन-पोषण सावधानी और प्यार से किया जाना चाहिए।',
        pa: 'ਬੱਚੇ ਬਗੀਚੇ ਦੀਆਂ ਕਲੀਆਂ ਵਾਂਗ ਹਨ, ਉਹਨਾਂ ਦੀ ਦੇਖਭਾਲ ਪਿਆਰ ਨਾਲ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ।',
        en: 'Children are like buds in a garden and should be carefully and lovingly nurtured.',
      },
      author: { hi: 'पंडित जवाहरलाल नेहरू', pa: 'ਪੰਡਿਤ ਜਵਾਹਰਲਾਲ ਨਹਿਰੂ', en: 'Pt. Jawaharlal Nehru' },
    },
    gkEvent: {
      title: {
        hi: 'बाल दिवस — पंडित जवाहरलाल नेहरू जयंती',
        pa: 'ਬਾਲ ਦਿਵਸ — ਪੰਡਿਤ ਜਵਾਹਰਲਾਲ ਨਹਿਰੂ ਜਯੰਤੀ',
        en: 'Children\'s Day (Bal Diwas) — Nehru Jayanti',
      },
      description: {
        hi: '14 नवंबर 1889 को प्रयागराज में जन्मे स्वतंत्र भारत के प्रथम प्रधानमंत्री पंडित जवाहरलाल नेहरू के जन्मदिवस को "बाल दिवस" के रूप में मनाया जाता है। बच्चे उन्हें प्यार से "चाचा नेहरू" कहते थे। उन्होंने IIT, IIM और AIIMS जैसे उच्च शिक्षण संस्थानों की नींव रखी थी।',
        pa: '14 ਨਵੰਬਰ 1889 ਨੂੰ ਜਨਮੇ ਭਾਰਤ ਦੇ ਪਹਿਲੇ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਜਵਾਹਰਲਾਲ ਨਹਿਰੂ ਦੇ ਜਨਮ ਦਿਨ ਨੂੰ ਬਾਲ ਦਿਵਸ ਵਜੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ। ਬੱਚੇ ਉਹਨਾਂ ਨੂੰ "ਚਾਚਾ ਨਹਿਰੂ" ਕਹਿੰਦੇ ਸਨ।',
        en: 'Celebrated across India on 14 November, Children\'s Day marks the birth of Pt. Jawaharlal Nehru (born 1889), independent India\'s first Prime Minister. Fondly called "Chacha Nehru", he championed universal primary education and founded institutions like IITs and AIIMS.',
      },
      source: 'Government of India, National Portal',
    },
    miniQuiz: {
      question: {
        hi: 'पंडित जवाहरलाल नेहरू द्वारा जेल में रहते हुए लिखी गई विश्व प्रसिद्ध पुस्तक कौन सी है?',
        pa: 'ਪੰਡਿਤ ਜਵਾਹਰਲਾਲ ਨਹਿਰੂ ਦੁਆਰਾ ਲਿਖੀ ਗਈ ਮਸ਼ਹੂਰ ਕਿਤਾਬ ਕਿਹੜੀ ਹੈ?',
        en: 'Which iconic book was written by Jawaharlal Nehru during his imprisonment at Ahmednagar Fort (1942–1945)?',
      },
      options: {
        A: { hi: 'माई एक्सपेरिमेंट्स विद ट्रुथ', pa: 'ਮਾਈ ਐਕਸਪੈਰੀਮੈਂਟਸ ਵਿਦ ਟਰੁੱਥ', en: 'My Experiments with Truth' },
        B: { hi: 'डिस्कवरी ऑफ इंडिया (भारत की खोज)', pa: 'ਡਿਸਕਵਰੀ ਆਫ਼ ਇੰਡੀਆ (ਭਾਰਤ ਦੀ ਖੋਜ)', en: 'The Discovery of India' },
        C: { hi: 'इंडिया डिवाइडेड', pa: 'ਇੰਡੀਆ ਡਿਵਾਈਡਿਡ', en: 'India Divided' },
        D: { hi: 'आनंदमठ', pa: 'ਆਨੰਦਮੱਠ', en: 'Anandamath' },
      },
      correct: 'B',
      explanation: {
        hi: 'नेहरू जी ने 1944 में अहमदनगर किला जेल में "द डिस्कवरी ऑफ इंडिया" (The Discovery of India) लिखी थी।',
        pa: 'ਉਹਨਾਂ ਨੇ "The Discovery of India" ਕਿਤਾਬ ਲਿਖੀ ਸੀ।',
        en: 'Pt. Nehru penned "The Discovery of India" while imprisoned by the British at Ahmednagar Fort following the Quit India movement.',
      },
    },
  },
  '11-26': { // 26 November — Constitution Day (Samvidhan Diwas)
    date: '11-26',
    thought: {
      text: {
        hi: 'संविधान चाहे कितना भी अच्छा क्यों न हो, यदि उसे लागू करने वाले लोग अच्छे नहीं होंगे तो वह बुरा साबित होगा।',
        pa: 'ਸੰਵਿਧਾਨ ਕਿੰਨਾ ਵੀ ਚੰਗਾ ਕਿਉਂ ਨਾ ਹੋਵੇ, ਜੇਕਰ ਚਲਾਉਣ ਵਾਲੇ ਚੰਗੇ ਨਾ ਹੋਣ ਤਾਂ ਉਹ ਮਾੜਾ ਸਾਬਤ ਹੋਵੇਗਾ।',
        en: 'However good a Constitution may be, if those who implement it are not good, it will prove to be bad.',
      },
      author: { hi: 'डॉ. बी.आर. अम्बेडकर', pa: 'ਡਾ. ਬੀ.ਆਰ. ਅੰਬੇਡਕਰ', en: 'Dr. B.R. Ambedkar' },
    },
    gkEvent: {
      title: {
        hi: 'संविधान दिवस — संविधान अंगीकृत हुआ (1949)',
        pa: 'ਸੰਵਿਧਾਨ ਦਿਵਸ — ਸੰਵਿਧਾਨ ਸਵੀਕਾਰ ਕੀਤਾ ਗਿਆ (1949)',
        en: 'Constitution Day (Samvidhan Diwas) — Adoption in 1949',
      },
      description: {
        hi: '26 नवंबर 1949 को भारत की संविधान सभा ने औपचारिक रूप से भारतीय संविधान को अंगीकृत (Adopt), अधिनियमित (Enact) और आत्मार्पित किया था। इसे बनाने में 2 वर्ष 11 महीने 18 दिन लगे थे। भारत सरकार ने 2015 से 26 नवंबर को "संविधान दिवस" के रूप में मनाना शुरू किया।',
        pa: '26 ਨਵੰਬਰ 1949 ਨੂੰ ਸੰਵਿਧਾਨ ਸਭਾ ਨੇ ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਨੂੰ ਅਪਣਾਇਆ ਸੀ। ਇਸ ਨੂੰ ਬਣਾਉਣ ਵਿੱਚ 2 ਸਾਲ 11 ਮਹੀਨੇ 18 ਦਿਨ ਲੱਗੇ। 2015 ਤੋਂ ਇਸਨੂੰ ਸੰਵਿਧਾਨ ਦਿਵਸ ਵਜੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
        en: 'On 26 November 1949, the Constituent Assembly of India formally adopted the Constitution, which took 2 years, 11 months, and 18 days to draft. In 2015, on Dr. Ambedkar\'s 125th birth anniversary year, the Government of India designated 26 November as Constitution Day.',
      },
      source: 'Ministry of Law and Justice, Government of India',
    },
    miniQuiz: {
      question: {
        hi: 'भारतीय संविधान सभा के स्थायी अध्यक्ष (Permanent President) कौन चुने गए थे?',
        pa: 'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਸਭਾ ਦੇ ਸਥਾਈ ਪ੍ਰਧਾਨ ਕੌਣ ਚੁਣੇ ਗਏ ਸਨ?',
        en: 'Who was elected as the permanent President of the Constituent Assembly of India on 11 December 1946?',
      },
      options: {
        A: { hi: 'डॉ. सच्चिदानंद सिन्हा', pa: 'ਡਾ. ਸੱਚਿਦਾਨੰਦ ਸਿਨਹਾ', en: 'Dr. Sachchidananda Sinha' },
        B: { hi: 'डॉ. राजेन्द्र प्रसाद', pa: 'ਡਾ. ਰਾਜਿੰਦਰ ਪ੍ਰਸਾਦ', en: 'Dr. Rajendra Prasad' },
        C: { hi: 'डॉ. बी.आर. अम्बेडकर', pa: 'ਡਾ. ਬੀ.ਆਰ. ਅੰਬੇਡਕਰ', en: 'Dr. B.R. Ambedkar' },
        D: { hi: 'बी.एन. राव', pa: 'ਬੀ.ਐਨ. ਰਾਓ', en: 'B.N. Rau' },
      },
      correct: 'B',
      explanation: {
        hi: '9 दिसंबर 1946 को डॉ. सच्चिदानंद सिन्हा अस्थायी अध्यक्ष बने थे, जबकि 11 दिसंबर 1946 को डॉ. राजेन्द्र प्रसाद को स्थायी अध्यक्ष निर्वाचित किया गया।',
        pa: '11 ਦਸੰਬਰ 1946 ਨੂੰ ਡਾ. ਰਾਜਿੰਦਰ ਪ੍ਰਸਾਦ ਸੰਵਿਧਾਨ ਸਭਾ ਦੇ ਸਥਾਈ ਪ੍ਰਧਾਨ ਚੁਣੇ ਗਏ ਸਨ।',
        en: 'Dr. Rajendra Prasad was elected permanent President of the Constituent Assembly on 11 December 1946 (Dr. Sinha was temporary president).',
      },
    },
  },
  '12-04': { // 4 December — Indian Navy Day
    date: '12-04',
    thought: {
      text: {
        hi: 'शं नो वरुणः — समुद्र के देवता वरुण हमारे लिए मंगलकारी हों।',
        pa: 'ਭਾਰਤੀ ਜਲ ਸੈਨਾ ਸਾਡੇ ਸਮੁੰਦਰੀ ਤੱਟਾਂ ਦੀ ਰਖਵਾਲੀ ਕਰਦੀ ਹੈ।',
        en: 'Sham No Varunah — May the Lord of the Oceans be auspicious unto us.',
      },
      author: { hi: 'भारतीय नौसेना आदर्श वाक्य', pa: 'ਭਾਰਤੀ ਜਲ ਸੈਨਾ ਆਦਰਸ਼ ਵਾਕ', en: 'Indian Navy Motto (Rigveda)' },
    },
    gkEvent: {
      title: {
        hi: 'भारतीय नौसेना दिवस (Indian Navy Day) — ऑपरेशन ट्राइडेंट',
        pa: 'ਭਾਰਤੀ ਜਲ ਸੈਨਾ ਦਿਵਸ — ਆਪਰੇਸ਼ਨ ਟ੍ਰਾਈਡੈਂਟ (1971)',
        en: 'Indian Navy Day — Operation Trident (1971)',
      },
      description: {
        hi: '4 दिसंबर को 1971 के भारत-पाक युद्ध में भारतीय नौसेना के "ऑपरेशन ट्राइडेंट" (Operation Trident) की ऐतिहासिक विजय की स्मृति में नौसेना दिवस मनाया जाता है। 4 दिसंबर 1971 की रात मिसाइल बोट्स (आईएनएस निपात, निर्घट, वीर) ने कराची बंदरगाह पर हमला कर पाकिस्तानी नौसेना को भारी क्षति पहुंचाई थी।',
        pa: '4 ਦਸੰਬਰ 1971 ਨੂੰ ਭਾਰਤੀ ਜਲ ਸੈਨਾ ਨੇ "ਆਪਰੇਸ਼ਨ ਟ੍ਰਾਈਡੈਂਟ" ਤਹਿਤ ਕਰਾਚੀ ਬੰਦਰਗਾਹ \'ਤੇ ਹਮਲਾ ਕਰਕੇ ਜਿੱਤ ਹਾਸਲ ਕੀਤੀ ਸੀ। ਇਸਦੀ ਯਾਦ ਵਿੱਚ ਨੇਵੀ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
        en: 'Navy Day celebrates Operation Trident on 4 December 1971, when the Indian Navy launched anti-ship missile attacks on Karachi Harbor during the Indo-Pak War, sinking Pakistani destroyer PNS Khaibar and minesweeper PNS Muhafiz without any Indian casualties.',
      },
      source: 'Indian Navy, Ministry of Defence',
    },
    miniQuiz: {
      question: {
        hi: '1971 के युद्ध में कराची बंदरगाह पर सफल मिसाइल हमले वाले ऑपरेशन का क्या नाम था?',
        pa: '1971 ਵਿੱਚ ਕਰਾਚੀ ਬੰਦਰਗਾਹ \'ਤੇ ਹਮਲੇ ਵਾਲੇ ਆਪਰੇਸ਼ਨ ਦਾ ਕੀ ਨਾਮ ਸੀ?',
        en: 'What was the code name of the Indian Navy\'s missile attack operation on Karachi harbor on 4 December 1971?',
      },
      options: {
        A: { hi: 'ऑपरेशन विजय', pa: 'ਆਪਰੇਸ਼ਨ ਵਿਜੇ', en: 'Operation Vijay' },
        B: { hi: 'ऑपरेशन ट्राइडेंट', pa: 'ਆਪਰੇਸ਼ਨ ਟ੍ਰਾਈਡੈਂਟ', en: 'Operation Trident' },
        C: { hi: 'ऑपरेशन मेघदूत', pa: 'ਆਪਰੇਸ਼ਨ ਮੇਘਦੂਤ', en: 'Operation Meghdoot' },
        D: { hi: 'ऑपरेशन सफेद सागर', pa: 'ਆਪਰੇਸ਼ਨ ਸਫੇਦ ਸਾਗਰ', en: 'Operation Safed Sagar' },
      },
      correct: 'B',
      explanation: {
        hi: '4 दिसंबर 1971 को शुरू किए गए इस साहसिक अभियान का नाम "ऑपरेशन ट्राइडेंट" (Operation Trident) था।',
        pa: 'ਇਸ ਆਪਰੇਸ਼ਨ ਦਾ ਨਾਮ "ਆਪਰੇਸ਼ਨ ਟ੍ਰਾਈਡੈਂਟ" ਸੀ।',
        en: 'Operation Trident was the Indian Navy\'s offensive operation launched on Karachi port during the 1971 war.',
      },
    },
  },
  '12-10': { // 10 December — Human Rights Day
    date: '12-10',
    thought: {
      text: {
        hi: 'सभी मनुष्य जन्म से स्वतंत्र और अधिकारों व गरिमा में समान हैं।',
        pa: 'ਸਾਰੇ ਮਨੁੱਖ ਜਨਮ ਤੋਂ ਆਜ਼ਾਦ ਅਤੇ ਬਰਾਬਰ ਅਧਿਕਾਰਾਂ ਵਾਲੇ ਹਨ।',
        en: 'All human beings are born free and equal in dignity and rights.',
      },
      author: { hi: 'मानवाधिकारों की सार्वभौम घोषणा', pa: 'ਯੂਡੀਐੱਚਆਰ (UDHR)', en: 'Universal Declaration of Human Rights' },
    },
    gkEvent: {
      title: {
        hi: 'अंतर्राष्ट्रीय मानवाधिकार दिवस (Human Rights Day)',
        pa: 'ਅੰਤਰਰਾਸ਼ਟਰੀ ਮਨੁੱਖੀ ਅਧਿਕਾਰ ਦਿਵਸ',
        en: 'International Human Rights Day',
      },
      description: {
        hi: '10 दिसंबर 1948 को पेरिस में संयुक्त राष्ट्र महासभा ने "मानवाधिकारों की सार्वभौम घोषणा" (UDHR) को अंगीकार किया था। 1950 से प्रतिवर्ष 10 दिसंबर को विश्वभर में मानवाधिकार दिवस मनाया जाता है। भारत में राष्ट्रीय मानवाधिकार आयोग (NHRC) की स्थापना 12 अक्टूबर 1993 को हुई थी।',
        pa: '10 ਦਸੰਬਰ 1948 ਨੂੰ ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਨੇ ਮਨੁੱਖੀ ਅਧਿਕਾਰਾਂ ਦਾ ਵਿਸ਼ਵਵਿਆਪੀ ਐਲਾਨਨਾਮਾ (UDHR) ਪਾਸ ਕੀਤਾ ਸੀ। ਭਾਰਤ ਵਿੱਚ NHRC 1993 ਵਿੱਚ ਬਣਿਆ।',
        en: 'On 10 December 1948, the UN General Assembly adopted the Universal Declaration of Human Rights (UDHR) in Paris. In India, the National Human Rights Commission (NHRC) was established under the Protection of Human Rights Act on 12 October 1993.',
      },
      source: 'United Nations / National Human Rights Commission of India',
    },
    miniQuiz: {
      question: {
        hi: 'भारत के राष्ट्रीय मानवाधिकार आयोग (NHRC) के अध्यक्ष के रूप में किसे नियुक्त किया जा सकता है?',
        pa: 'ਭਾਰਤ ਦੇ ਰਾਸ਼ਟਰੀ ਮਨੁੱਖੀ ਅਧਿਕਾਰ ਕਮਿਸ਼ਨ (NHRC) ਦਾ ਚੇਅਰਪਰਸਨ ਕੌਣ ਬਣ ਸਕਦਾ ਹੈ?',
        en: 'Who is eligible to be appointed as the Chairperson of the National Human Rights Commission (NHRC) of India?',
      },
      options: {
        A: { hi: 'सुप्रीम कोर्ट के मुख्य न्यायाधीश या न्यायाधीश रहे व्यक्ति', pa: 'ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਸਾਬਕਾ ਚੀਫ਼ ਜਸਟਿਸ ਜਾਂ ਜੱਜ', en: 'A retired Chief Justice or Judge of the Supreme Court' },
        B: { hi: 'भारत के अटॉर्नी जनरल', pa: 'ਭਾਰਤ ਦੇ ਅਟਾਰਨੀ ਜਨਰਲ', en: 'Attorney General of India' },
        C: { hi: 'राज्यसभा के उपसभापति', pa: 'ਰਾਜ ਸਭਾ ਦੇ ਡਿਪਟੀ ਚੇਅਰਮੈਨ', en: 'Deputy Chairman of Rajya Sabha' },
        D: { hi: 'केंद्रीय विधि मंत्री', pa: 'ਕੇਂਦਰੀ ਕਾਨੂੰਨ ਮੰਤਰੀ', en: 'Union Law Minister' },
      },
      correct: 'A',
      explanation: {
        hi: '2019 के संशोधन अनुसार सुप्रीम कोर्ट के सेवानिवृत्त मुख्य न्यायाधीश या अन्य न्यायाधीश NHRC के अध्यक्ष नियुक्त हो सकते हैं।',
        pa: 'ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਰਿਟਾਇਰਡ ਚੀਫ਼ ਜਸਟਿਸ ਜਾਂ ਜੱਜ NHRC ਦੇ ਚੇਅਰਮੈਨ ਬਣ ਸਕਦੇ ਹਨ।',
        en: 'Under the 2019 amended act, a person who has been a Chief Justice of India or a Judge of the Supreme Court is eligible to be NHRC Chairperson.',
      },
    },
  },
  '12-16': { // 16 December — Vijay Diwas
    date: '12-16',
    thought: {
      text: {
        hi: 'शौर्य, पराक्रम और बलिदान ही भारतीय सशस्त्र सेनाओं की पहचान है।',
        pa: 'ਬਹਾਦਰੀ ਅਤੇ ਕੁਰਬਾਨੀ ਭਾਰਤੀ ਫੌਜ ਦੀ ਪਛਾਣ ਹੈ।',
        en: 'Victory belongs to the most persevering and valiant soldiers.',
      },
      author: { hi: 'सैम मानेकशॉ (फील्ड मार्शल)', pa: 'ਫੀਲਡ ਮਾਰਸ਼ਲ ਸੈਮ ਮਾਨੇਕਸ਼ਾਅ', en: 'Field Marshal Sam Manekshaw' },
    },
    gkEvent: {
      title: {
        hi: 'विजय दिवस — 1971 भारत-पाक युद्ध विजय एवं बांग्लादेश मुक्ति',
        pa: 'ਵਿਜੇ ਦਿਵਸ — 1971 ਭਾਰਤ-ਪਾਕਿ ਜੰਗ ਜਿੱਤ',
        en: 'Vijay Diwas — 1971 War Victory & Bangladesh Liberation',
      },
      description: {
        hi: '16 दिसंबर 1971 को 13 दिनों के युद्ध के बाद पाकिस्तानी सेनापति लेफ्टिनेंट जनरल ए.ए.के. नियाजी ने ढाका में 93,000 पाकिस्तानी सैनिकों के साथ भारतीय सेना (लेफ्टिनेंट जनरल जे.एस. अरोड़ा) के समक्ष आत्मसमर्पण किया। यह द्वितीय विश्व युद्ध के बाद सबसे बड़ा सैन्य आत्मसमर्पण था और इसके फलस्वरूप बांग्लादेश का उदय हुआ।',
        pa: '16 ਦਸੰਬਰ 1971 ਨੂੰ ਢਾਕਾ ਵਿਖੇ 93,000 ਪਾਕਿਸਤਾਨੀ ਫੌਜੀਆਂ ਨੇ ਭਾਰਤੀ ਫੌਜ ਅੱਗੇ ਹਥਿਆਰ ਸੁੱਟੇ ਸਨ ਅਤੇ ਬੰਗਲਾਦੇਸ਼ ਹੋਂਦ ਵਿੱਚ ਆਇਆ ਸੀ। ਇਸਨੂੰ ਵਿਜੇ ਦਿਵਸ ਵਜੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
        en: 'On 16 December 1971, Pakistani commander Lt. Gen. A.A.K. Niazi surrendered 93,000 troops to Indian Eastern Army Commander Lt. Gen. J.S. Aurora in Dhaka, ending the 13-day war and birthing the sovereign nation of Bangladesh.',
      },
      source: 'Indian Army, Ministry of Defence',
    },
    miniQuiz: {
      question: {
        hi: '1971 के भारत-पाक युद्ध के समय भारतीय थल सेना के प्रमुख (Army Chief) कौन थे, जिन्हें बाद में फील्ड मार्शल बनाया गया?',
        pa: '1971 ਦੀ ਜੰਗ ਵੇਲੇ ਭਾਰਤੀ ਫੌਜ ਦੇ ਮੁਖੀ ਕੌਣ ਸਨ?',
        en: 'Who was the Chief of the Army Staff of India during the 1971 Indo-Pak war who later became India\'s first Field Marshal?',
      },
      options: {
        A: { hi: 'के.एम. करियप्पा', pa: 'ਕੇ.ਐਮ. ਕਰਿਅੱਪਾ', en: 'K.M. Cariappa' },
        B: { hi: 'सैम मानेकशॉ', pa: 'ਸੈਮ ਮਾਨੇਕਸ਼ਾਅ', en: 'Sam Manekshaw' },
        C: { hi: 'जगजीत सिंह अरोड़ा', pa: 'ਜਗਜੀਤ ਸਿੰਘ ਅਰੋੜਾ', en: 'Jagjit Singh Aurora' },
        D: { hi: 'के. सुंदरजी', pa: 'ਕੇ. ਸੁੰਦਰਜੀ', en: 'K. Sundarji' },
      },
      correct: 'B',
      explanation: {
        hi: 'जनरल सैम मानेकशॉ (Sam Hormusji Framji Jamshedji Manekshaw) 1971 युद्ध में सेना प्रमुख थे। 1973 में उन्हें भारत का पहला फील्ड मार्शल बनाया गया।',
        pa: 'ਜਨਰਲ ਸੈਮ ਮਾਨੇਕਸ਼ਾਅ 1971 ਜੰਗ ਵੇਲੇ ਫੌਜ ਮੁਖੀ ਸਨ।',
        en: 'General Sam Manekshaw led the Indian Armed Forces during the 1971 war and was promoted to Field Marshal in January 1973.',
      },
    },
  },
  '12-22': { // 22 December — National Mathematics Day (Srinivasa Ramanujan)
    date: '12-22',
    thought: {
      text: {
        hi: 'मेरे लिए किसी समीकरण का तब तक कोई अर्थ नहीं है जब तक वह ईश्वर के विचार को व्यक्त न करे।',
        pa: 'ਗਣਿਤ ਕੁਦਰਤ ਦੇ ਨਿਯਮਾਂ ਨੂੰ ਸਮਝਣ ਦੀ ਸਭ ਤੋਂ ਸੁੰਦਰ ਭਾਸ਼ਾ ਹੈ।',
        en: 'An equation for me has no meaning unless it expresses a thought of God.',
      },
      author: { hi: 'श्रीनिवास रामानुजन', pa: 'ਸ਼੍ਰੀਨਿਵਾਸ ਰਾਮਾਨੁਜਨ', en: 'Srinivasa Ramanujan' },
    },
    gkEvent: {
      title: {
        hi: 'राष्ट्रीय गणित दिवस — श्रीनिवास रामानुजन जयंती',
        pa: 'ਰਾਸ਼ਟਰੀ ਗਣਿਤ ਦਿਵਸ — ਸ਼੍ਰੀਨਿਵਾਸ ਰਾਮਾਨੁਜਨ ਜਯੰਤੀ',
        en: 'National Mathematics Day — Srinivasa Ramanujan Jayanti',
      },
      description: {
        hi: '22 दिसंबर 1887 को तमिलनाडु के इरोड में जन्मे विश्व के महानतम गणितज्ञों में से एक श्रीनिवास रामानुजन के जन्मदिवस को 2012 से "राष्ट्रीय गणित दिवस" के रूप में मनाया जाता है। उन्होंने संख्या सिद्धांत, अनंत श्रेणियां और सतत भिन्न (Continued Fractions) में 3,900 से अधिक सूत्र दिए। 1729 को हार्डी-रामानुजन संख्या कहा जाता है।',
        pa: '22 ਦਸੰਬਰ 1887 ਨੂੰ ਜਨਮੇ ਮਹਾਨ ਗਣਿਤ ਸ਼ਾਸਤਰੀ ਸ਼੍ਰੀਨਿਵਾਸ ਰਾਮਾਨੁਜਨ ਦੀ ਯਾਦ ਵਿੱਚ ਰਾਸ਼ਟਰੀ ਗਣਿਤ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ। 1729 ਨੂੰ ਰਾਮਾਨੁਜਨ ਨੰਬਰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
        en: 'Celebrated annually on 22 December since 2012, National Mathematics Day honors the genius prodigy Srinivasa Ramanujan (1887–1920) who made pathbreaking contributions to mathematical analysis, number theory, infinite series, and partitions.',
      },
      source: 'Department of Science and Technology, Government of India',
    },
    miniQuiz: {
      question: {
        hi: 'किस संख्या को "हार्डी-रामानुजन संख्या" (Hardy-Ramanujan Number / Taxicab Number) कहा जाता है?',
        pa: 'ਕਿਸ ਸੰਖਿਆ ਨੂੰ "ਹਾਰਡੀ-ਰਾਮਾਨੁਜਨ ਨੰਬਰ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
        en: 'Which number is famously known as the Hardy-Ramanujan Taxicab number?',
      },
      options: {
        A: { hi: '1526', pa: '1526', en: '1526' },
        B: { hi: '1729', pa: '1729', en: '1729' },
        C: { hi: '1887', pa: '1887', en: '1887' },
        D: { hi: '1947', pa: '1947', en: '1947' },
      },
      correct: 'B',
      explanation: {
        hi: '1729 सबसे छोटी संख्या है जिसे दो अलग-अलग तरीकों से दो घनों के योग के रूप में लिखा जा सकता है: 1³ + 12³ = 1729 और 9³ + 10³ = 1729।',
        pa: '1729 ਉਹ ਸਭ ਤੋਂ ਛੋਟੀ ਸੰਖਿਆ ਹੈ ਜਿਸਨੂੰ ਦੋ ਵੱਖਰੇ ਤਰੀਕਿਆਂ ਨਾਲ ਘਣ (Cubes) ਦੇ ਜੋੜ ਵਜੋਂ ਲਿਖਿਆ ਜਾ ਸਕਦਾ ਹੈ (1³+12³ ਅਤੇ 9³+10³)।',
        en: '1729 is the smallest number expressible as the sum of two cubes in two different ways (1³ + 12³ = 9³ + 10³ = 1729).',
      },
    },
  },
  '12-25': { // 25 December — Good Governance Day (Atal Bihari Vajpayee) & Christmas
    date: '12-25',
    thought: {
      text: {
        hi: 'छोटे मन से कोई बड़ा नहीं होता, टूटे मन से कोई खड़ा नहीं होता।',
        pa: 'ਛੋਟੇ ਮਨ ਨਾਲ ਕੋਈ ਵੱਡਾ ਨਹੀਂ ਹੁੰਦਾ, ਟੁੱਟੇ ਮਨ ਨਾਲ ਕੋਈ ਖੜ੍ਹਾ ਨਹੀਂ ਹੁੰਦਾ।',
        en: 'Empowering the individual means empowering the nation. Good governance is the key.',
      },
      author: { hi: 'अटल बिहारी वाजपेयी', pa: 'ਅਟਲ ਬਿਹਾਰੀ ਵਾਜਪਾਈ', en: 'Atal Bihari Vajpayee' },
    },
    gkEvent: {
      title: {
        hi: 'सुशासन दिवस (Good Governance Day) एवं क्रिसमस',
        pa: 'ਸੁਸ਼ਾਸਨ ਦਿਵਸ ਅਤੇ ਕ੍ਰਿਸਮਸ',
        en: 'Good Governance Day (Sushasan Diwas) & Christmas',
      },
      description: {
        hi: '25 दिसंबर 1924 को ग्वालियर में जन्मे भारत के पूर्व प्रधानमंत्री एवं भारत रत्न अटल बिहारी वाजपेयी के जन्मदिन को 2014 से "सुशासन दिवस" (Good Governance Day) के रूप में मनाया जाता है। उनके कार्यकाल में 1998 में पोखरण-2 परमाणु परीक्षण, स्वर्णिम चतुर्भुज योजना और प्रधानमंत्री ग्राम सड़क योजना शुरू हुई। इसी दिन ईसाई समुदाय क्रिसमस पर्व मनाता है।',
        pa: '25 ਦਸੰਬਰ 1924 ਨੂੰ ਜਨਮੇ ਸਾਬਕਾ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਅਟਲ ਬਿਹਾਰੀ ਵਾਜਪਾਈ ਦੀ ਯਾਦ ਵਿੱਚ 2014 ਤੋਂ ਸੁਸ਼ਾਸਨ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ। ਇਸ ਦਿਨ ਕ੍ਰਿਸਮਸ ਵੀ ਮਨਾਈ ਜਾਂਦੀ ਹੈ।',
        en: 'Good Governance Day is observed on 25 December to honor former Prime Minister Atal Bihari Vajpayee (born 1924). His leadership brought the 1998 Pokhran-II nuclear tests, Sarva Shiksha Abhiyan, and the Golden Quadrilateral highway network. 25 December is also celebrated globally as Christmas.',
      },
      source: 'Ministry of Personnel, Public Grievances and Pensions, Government of India',
    },
    miniQuiz: {
      question: {
        hi: 'अटल बिहारी वाजपेयी के प्रधानमंत्रित्व काल में मई 1998 में पोखरण (राजस्थान) में किए गए परमाणु परीक्षण का कोड नाम क्या था?',
        pa: 'ਮਈ 1998 ਵਿੱਚ ਪੋਖਰਣ ਪਰਮਾਣੂ ਪ੍ਰੀਖਣ ਦਾ ਕੋਡ ਨਾਮ ਕੀ ਸੀ?',
        en: 'What was the code name of the Pokhran-II nuclear tests conducted under PM Atal Bihari Vajpayee in May 1998?',
      },
      options: {
        A: { hi: 'स्माइलिंग बुद्धा (Smiling Buddha)', pa: 'ਸਮਾਈਲਿੰਗ ਬੁੱਧਾ', en: 'Smiling Buddha' },
        B: { hi: 'ऑपरेशन शक्ति (Operation Shakti)', pa: 'ਆਪਰੇਸ਼ਨ ਸ਼ਕਤੀ', en: 'Operation Shakti' },
        C: { hi: 'ऑपरेशन पराक्रम', pa: 'ਆਪਰੇਸ਼ਨ ਪਰਾਕ੍ਰਮ', en: 'Operation Parakram' },
        D: { hi: 'ऑपरेशन विजय', pa: 'ਆਪਰੇਸ਼ਨ ਵਿਜੇ', en: 'Operation Vijay' },
      },
      correct: 'B',
      explanation: {
        hi: '11 और 13 मई 1998 को पोखरण में 5 परमाणु परीक्षण किए गए जिसका कोड नाम "ऑपरेशन शक्ति" (Operation Shakti) था। 11 मई को राष्ट्रीय प्रौद्योगिकी दिवस मनाया जाता है। (1974 के प्रथम परीक्षण का नाम स्माइलिंग बुद्धा था)।',
        pa: '1998 ਦੇ ਪੋਖਰਣ-2 ਪਰਮਾਣੂ ਪ੍ਰੀਖਣ ਦਾ ਕੋਡ ਨਾਮ "ਆਪਰੇਸ਼ਨ ਸ਼ਕਤੀ" ਸੀ।',
        en: 'The Pokhran-II nuclear tests conducted on 11 & 13 May 1998 were codenamed Operation Shakti (Pokhran-I in 1974 was Smiling Buddha).',
      },
    },
  },
};

/**
 * Get daily content for today's date.
 * Uses month-day key (MM-DD) for recurring annual events.
 */
export function getTodayContent(lang: 'hi' | 'pa' | 'en' = 'hi'): {
  thought: string;
  thoughtAuthor: string;
  gkTitle: string | null;
  gkDescription: string | null;
  gkSource: string | null;
  miniQuiz: DailyContent['miniQuiz'] | null;
} | null {
  const today = new Date();
  const monthDay = `${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
  const content = DAILY_CONTENT[monthDay];
  if (!content) return null;
  return {
    thought: content.thought.text[lang],
    thoughtAuthor: content.thought.author[lang],
    gkTitle: content.gkEvent?.title[lang] ?? null,
    gkDescription: content.gkEvent?.description[lang] ?? null,
    gkSource: content.gkEvent?.source ?? null,
    miniQuiz: content.miniQuiz ?? null,
  };
}
