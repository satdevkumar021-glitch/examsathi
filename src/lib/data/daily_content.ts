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
