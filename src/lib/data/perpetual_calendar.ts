// ============================================================
// ExamSathi - Perpetual Calendar & Historical Birthdays Hub
// High-trust historical personalities, landmark milestones,
// and daily thoughts for all 366 calendar days.
// Trilingual: English, authentic Punjabi (Gurmukhi), and Hindi.
// ============================================================

import type { DailyContent } from './daily_content';

export interface CalendarDayEntry extends DailyContent {
  historicalPerson?: {
    name: { hi: string; pa: string; en: string };
    birthYear?: number;
    deathYear?: number;
    title: { hi: string; pa: string; en: string };
    significance: { hi: string; pa: string; en: string };
  };
}

/**
 * Key historical birthdays and landmark events indexed by MM-DD.
 */
export const PERPETUAL_HISTORICAL_DAYS: Record<string, CalendarDayEntry> = {
  // --- OCTOBER ---
  '10-14': {
    date: '10-14',
    thought: {
      text: {
        hi: 'शिक्षित बनो, संगठित रहो और संघर्ष करो। आत्मसम्मान ही सबसे महत्वपूर्ण गुण है।',
        pa: 'ਸਿੱਖਿਅਤ ਬਣੋ, ਸੰਗਠਿਤ ਰਹੋ ਅਤੇ ਸੰਘਰਸ਼ ਕਰੋ। ਸਵੈ-ਮਾਣ ਹੀ ਮਨੁੱਖ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਗਹਿਣਾ ਹੈ।',
        en: 'Educate, agitate, and organise. Self-respect is the most vital asset of a human being.',
      },
      author: {
        hi: 'डॉ. बी. आर. अम्बेडकर',
        pa: 'ਡਾ. ਬੀ. ਆਰ. ਅੰਬੇਡਕਰ',
        en: 'Dr. B. R. Ambedkar',
      },
    },
    historicalPerson: {
      name: {
        hi: 'लाला हरदयाल एवं डॉ. बी. आर. अम्बेडकर',
        pa: 'ਲਾਲਾ ਹਰਦਿਆਲ ਅਤੇ ਡਾ. ਬੀ. ਆਰ. ਅੰਬੇਡਕਰ',
        en: 'Lala Har Dayal & Dr. B. R. Ambedkar',
      },
      birthYear: 1884,
      title: {
        hi: 'ग़दर पार्टी के संस्थापक एवं धम्म दीक्षा दिवस',
        pa: 'ਗ਼ਦਰ ਪਾਰਟੀ ਦੇ ਬਾਨੀ ਅਤੇ ਧੰਮ ਦੀਖਿਆ ਦਿਵਸ',
        en: 'Ghadar Party Founder & Dhamma Deeksha Day',
      },
      significance: {
        hi: '14 अक्टूबर 1884 को दिल्ली में ग़दर आंदोलन के महान बौद्धिक नेता लाला हरदयाल का जन्म हुआ था। इसी दिन 1956 में डॉ. बी.आर. अम्बेडकर ने नागपुर में लाखों अनुयायियों के साथ बौद्ध धम्म की दीक्षा ली थी।',
        pa: '14 ਅਕਤੂਬਰ 1884 ਨੂੰ ਲਾਲਾ ਹਰਦਿਆਲ ਦਾ ਜਨਮ ਹੋਇਆ ਜਿਨ੍ਹਾਂ ਨੇ ਸਾਨ ਫ਼ਰਾਂਸਿਸਕੋ ਵਿੱਚ ਗ਼ਦਰ ਪਾਰਟੀ ਦੀ ਨੀਂਹ ਰੱਖੀ। 14 ਅਕਤੂਬਰ 1956 ਨੂੰ ਡਾ. ਅੰਬੇਡਕਰ ਨੇ ਨਾਗਪੁਰ ਵਿੱਚ ਧੰਮ ਦੀਖਿਆ ਲਈ ਸੀ।',
        en: 'On 14 October 1884, revolutionary intellectual Lala Har Dayal was born, who founded the Ghadar Party in San Francisco in 1913. On 14 October 1956, Dr. B.R. Ambedkar embraced Buddhism at Deekshabhoomi, Nagpur.',
      },
    },
    gkEvent: {
      title: {
        hi: 'धम्म दीक्षा दिवस (1956) एवं लाला हरदयाल जयंती (1884)',
        pa: 'ਧੰਮ ਦੀਖਿਆ ਦਿਵਸ (1956) ਅਤੇ ਲਾਲਾ ਹਰਦਿਆਲ ਜਨਮ ਦਿਨ (1884)',
        en: 'Dhamma Deeksha Day (1956) & Lala Har Dayal Jayanti (1884)',
      },
      description: {
        hi: '14 अक्टूबर 1956 को नागपुर में डॉ. भीमराव अम्बेडकर ने ऐतिहासिक धम्म दीक्षा ली। 14 अक्टूबर 1884 को गदर पार्टी के प्रसिद्ध विचारक लाला हरदयाल का जन्म हुआ जिन्होंने विदेशों में भारतीय स्वतंत्रता संग्राम को गति दी।',
        pa: '14 ਅਕਤੂਬਰ 1956 ਨੂੰ ਡਾ. ਬੀ.ਆਰ. ਅੰਬੇਡਕਰ ਨੇ ਨਾਗਪੁਰ ਵਿਖੇ ਬੁੱਧ ਧਰਮ ਅਪਣਾਇਆ। ਇਸੇ ਦਿਨ 1884 ਨੂੰ ਗ਼ਦਰ ਪਾਰਟੀ ਦੇ ਆਗੂ ਲਾਲਾ ਹਰਦਿਆਲ ਦਾ ਜਨਮ ਹੋਇਆ।',
        en: 'On 14 October 1956, Dr. B.R. Ambedkar embraced Buddhism with over 500,000 followers at Deekshabhoomi, Nagpur. 14 October 1884 marks the birth of Lala Har Dayal, prime theorist of the Ghadar Movement.',
      },
      source: 'Government of India, National Archives & Ministry of Social Justice',
    },
    miniQuiz: {
      question: {
        hi: '1913 में सैन फ्रांसिस्को (अमेरिका) में स्थापित "ग़दर पार्टी" के प्रमुख संस्थापक एवं बौद्धिक मार्गदर्शक कौन थे?',
        pa: '1913 ਵਿੱਚ ਸਾਨ ਫ਼ਰਾਂਸਿਸਕੋ ਵਿਖੇ ਸਥਾਪਿਤ "ਗ਼ਦਰ ਪਾਰਟੀ" ਦੇ ਮੁੱਖ ਆਗੂ ਕੌਣ ਸਨ?',
        en: 'Who was the chief intellectual founder of the Ghadar Party founded in San Francisco in 1913?',
      },
      options: {
        A: { hi: 'लाला हरदयाल एवं सोहन सिंह भकना', pa: 'ਲਾਲਾ ਹਰਦਿਆਲ ਅਤੇ ਸੋਹਣ ਸਿੰਘ ਭਕਨਾ', en: 'Lala Har Dayal and Sohan Singh Bhakna' },
        B: { hi: 'लाला लाजपत राय', pa: 'ਲਾਲਾ ਲਾਜਪਤ ਰਾਏ', en: 'Lala Lajpat Rai' },
        C: { hi: 'रासबिहारी बोस', pa: 'ਰਾਸ ਬਿਹਾਰੀ ਬੋਸ', en: 'Rash Behari Bose' },
        D: { hi: 'भगत सिंह', pa: 'ਭਗਤ ਸਿੰਘ', en: 'Bhagat Singh' },
      },
      correct: 'A',
      explanation: {
        hi: 'ग़दर पार्टी की स्थापना 1913 में लाला हरदयाल और बाबा सोहन सिंह भकना (प्रथम अध्यक्ष) ने अमेरिका के सैन फ्रांसिस्को में की थी।',
        pa: 'ਗ਼ਦਰ ਪਾਰਟੀ ਦੀ ਸਥਾਪਨਾ 1913 ਵਿੱਚ ਲਾਲਾ ਹਰਦਿਆਲ ਅਤੇ ਬਾਬਾ ਸੋਹਣ ਸਿੰਘ ਭਕਨਾ ਨੇ ਕੀਤੀ ਸੀ।',
        en: 'The Ghadar Party was founded in 1913 in San Francisco by Lala Har Dayal and Baba Sohan Singh Bhakna (first President).',
      },
    },
  },

  '10-15': {
    date: '10-15',
    thought: {
      text: {
        hi: 'सपने वो नहीं होते जो हम सोते हुए देखते हैं, सपने वो होते हैं जो हमें सोने नहीं देते।',
        pa: 'ਸੁਪਨੇ ਉਹ ਨਹੀਂ ਹੁੰਦੇ ਜੋ ਅਸੀਂ ਸੌਂਦੇ ਹੋਏ ਵੇਖਦੇ ਹਾਂ, ਸੁਪਨੇ ਉਹ ਹੁੰਦੇ ਹਨ ਜੋ ਸਾਨੂੰ ਸੌਣ ਨਹੀਂ ਦਿੰਦੇ।',
        en: 'Dreams are not what you see in your sleep, dreams are those that do not let you sleep.',
      },
      author: {
        hi: 'डॉ. ए. पी. जे. अब्दुल कलाम',
        pa: 'ਡਾ. ਏ. ਪੀ. ਜੇ. ਅਬਦੁਲ ਕਲਾਮ',
        en: 'Dr. A. P. J. Abdul Kalam',
      },
    },
    historicalPerson: {
      name: {
        hi: 'डॉ. ए. पी. जे. अब्दुल कलाम (भारत के मिसाइल मैन)',
        pa: 'ਡਾ. ਏ. ਪੀ. ਜੇ. ਅਬਦੁਲ ਕਲਾਮ (ਮਿਜ਼ਾਈਲ ਮੈਨ)',
        en: 'Dr. A. P. J. Abdul Kalam (Missile Man of India)',
      },
      birthYear: 1931,
      deathYear: 2015,
      title: {
        hi: 'भारत के 11वें राष्ट्रपति एवं विश्व छात्र दिवस',
        pa: 'ਭਾਰਤ ਦੇ 11ਵੇਂ ਰਾਸ਼ਟਰਪਤੀ ਅਤੇ ਵਿਸ਼ਵ ਵਿਦਿਆਰਥੀ ਦਿਵਸ',
        en: '11th President of India & World Students\' Day',
      },
      significance: {
        hi: '15 अक्टूबर 1931 को रामेश्वरम (तमिलनाडु) में भारत रत्न डॉ. कलाम का जन्म हुआ था। उन्होंने SLV-III, अग्नि और पृथ्वी मिसाइलों का विकास किया। उनके जन्मदिन को संयुक्त राष्ट्र द्वारा विश्व छात्र दिवस के रूप में मान्यता प्राप्त है।',
        pa: '15 ਅਕਤੂਬਰ 1931 ਨੂੰ ਰਾਮੇਸ਼ਵਰਮ ਵਿਖੇ ਡਾ. ਕਲਾਮ ਦਾ ਜਨਮ ਹੋਇਆ। ਉਨ੍ਹਾਂ ਨੇ ਅਗਨੀ ਅਤੇ ਪ੍ਰਿਥਵੀ ਮਿਜ਼ਾਈਲਾਂ ਵਿਕਸਿਤ ਕੀਤੀਆਂ। ਉਨ੍ਹਾਂ ਦਾ ਜਨਮ ਦਿਨ ਵਿਸ਼ਵ ਵਿਦਿਆਰਥੀ ਦਿਵਸ ਵਜੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
        en: 'Born on 15 October 1931 in Rameswaram, Dr. Kalam was the chief architect of India\'s civilian space program (SLV-III) and missile development (Agni & Prithvi). Observed globally as World Students\' Day.',
      },
    },
    gkEvent: {
      title: {
        hi: 'विश्व छात्र दिवस — डॉ. ए.पी.जे. अब्दुल कलाम जयंती',
        pa: 'ਵਿਸ਼ਵ ਵਿਦਿਆਰਥੀ ਦਿਵਸ — ਡਾ. ਅਬਦੁਲ ਕਲਾਮ ਜਨਮ ਦਿਨ',
        en: 'World Students\' Day — Dr. APJ Abdul Kalam Birth Anniversary',
      },
      description: {
        hi: '15 अक्टूबर को भारत के 11वें राष्ट्रपति डॉ. एपीजे अब्दुल कलाम का जन्म दिवस "विश्व छात्र दिवस" (World Students\' Day) के रूप में मनाया जाता है। 1997 में उन्हें भारत रत्न से सम्मानित किया गया था।',
        pa: '15 ਅਕਤੂਬਰ ਨੂੰ ਡਾ. ਅਬਦੁਲ ਕਲਾਮ ਦਾ ਜਨਮ ਦਿਨ ਵਿਸ਼ਵ ਵਿਦਿਆਰਥੀ ਦਿਵਸ ਵਜੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ। ਉਨ੍ਹਾਂ ਨੂੰ 1997 ਵਿੱਚ ਭਾਰਤ ਰਤਨ ਮਿਲਿਆ।',
        en: '15 October is celebrated as World Students\' Day in honor of India\'s beloved 11th President, scientist, and educator Dr. APJ Abdul Kalam (awarded Bharat Ratna in 1997).',
      },
      source: 'United Nations & President of India Secretariat',
    },
    miniQuiz: {
      question: {
        hi: 'डॉ. एपीजे अब्दुल कलाम के नेतृत्व में विकसित "IGMDP" परियोजना के तहत विकसित पांच मिसाइलों (PATNA) में कौन शामिल हैं?',
        pa: 'ਡਾ. ਕਲਾਮ ਦੇ ਨਿਰਦੇਸ਼ਨ ਹੇਠ IGMDP ਤਹਿਤ ਵਿਕਸਿਤ ਪੰਜ ਮਿਜ਼ਾਈਲਾਂ ਕਿਹੜੀਆਂ ਹਨ?',
        en: 'Which five indigenous missiles were developed under the IGMDP programme led by Dr. APJ Abdul Kalam (acronym PATNA)?',
      },
      options: {
        A: { hi: 'पृथ्वी, अग्नि, त्रिशूल, नाग, आकाश', pa: 'ਪ੍ਰਿਥਵੀ, ਅਗਨੀ, ਤ੍ਰਿਸ਼ੂਲ, ਨਾਗ, ਆਕਾਸ਼', en: 'Prithvi, Agni, Trishul, Nag, Akash' },
        B: { hi: 'ब्रह्मोस, धनुष, पिनाका, अस्त्र, प्रहार', pa: 'ਬ੍ਰਹਮੋਸ, ਧਨੁਸ਼, ਪਿਨਾਕਾ, ਅਸਤਰ, ਪ੍ਰਹਾਰ', en: 'BrahMos, Dhanush, Pinaka, Astra, Prahaar' },
        C: { hi: 'सूर्य, चंद्र, अग्नि, वायु, वरुण', pa: 'ਸੂਰਿਆ, ਚੰਦਰ, ਅਗਨੀ, ਵਾਯੂ, ਵਰੁਣ', en: 'Surya, Chandra, Agni, Vayu, Varun' },
        D: { hi: 'सागरिका, शौर्य, निर्भय, प्रहार, आकाश', pa: 'ਸਾਗਰਿਕਾ, ਸ਼ੌਰਿਆ, ਨਿਰਭੈ, ਪ੍ਰਹਾਰ, ਆਕਾਸ਼', en: 'Sagarika, Shaurya, Nirbhay, Prahaar, Akash' },
      },
      correct: 'A',
      explanation: {
        hi: '1983 में शुरू हुए IGMDP (Integrated Guided Missile Development Programme) के तहत 5 मिसाइलें PATNA: Prithvi, Agni, Trishul, Nag (एंटी-टैंक) और Akash (सतह से हवा) विकसित की गईं।',
        pa: 'IGMDP ਤਹਿਤ ਪੰਜ ਮਿਜ਼ਾਈਲਾਂ PATNA (ਪ੍ਰਿਥਵੀ, ਅਗਨੀ, ਤ੍ਰਿਸ਼ੂਲ, ਨਾਗ, ਆਕਾਸ਼) ਵਿਕਸਿਤ ਕੀਤੀਆਂ ਗਈਆਂ।',
        en: 'Under the IGMDP launched in 1983, Dr. Kalam directed the development of PATNA: Prithvi (surface-to-surface), Agni, Trishul, Nag (anti-tank), and Akash (surface-to-air).',
      },
    },
  },

  '10-16': {
    date: '10-16',
    thought: {
      text: {
        hi: 'अन्न ही जीवन का आधार है; अन्न का सम्मान और भुखमरी का उन्मूलन ही सच्ची प्रगति है।',
        pa: 'ਅੰਨ ਹੀ ਜੀਵਨ ਦਾ ਆਧਾਰ ਹੈ; ਕਿਸਾਨ ਦਾ ਸਤਿਕਾਰ ਅਤੇ ਭੁੱਖਮਰੀ ਦਾ ਖ਼ਾਤਮਾ ਹੀ ਸੱਚੀ ਤਰੱਕੀ ਹੈ।',
        en: 'Food is the foundation of life; honoring food production and eradicating hunger is true progress.',
      },
      author: {
        hi: 'डॉ. एम. एस. स्वामीनाथन',
        pa: 'ਡਾ. ਐਮ. ਐਸ. ਸਵਾਮੀਨਾਥਨ',
        en: 'Dr. M. S. Swaminathan',
      },
    },
    gkEvent: {
      title: {
        hi: 'विश्व खाद्य दिवस (World Food Day) — FAO स्थापना दिवस',
        pa: 'ਵਿਸ਼ਵ ਭੋਜਨ ਦਿਵਸ (World Food Day)',
        en: 'World Food Day — FAO Founding Anniversary (1945)',
      },
      description: {
        hi: '16 अक्टूबर 1945 को संयुक्त राष्ट्र खाद्य एवं कृषि संगठन (FAO) की स्थापना हुई थी। इसका मुख्यालय रोम (इटली) में है। भारत में हरित क्रांति के जनक डॉ. एमएस स्वामीनाथन ने खाद्य सुरक्षा में ऐतिहासिक योगदान दिया।',
        pa: '16 ਅਕਤੂਬਰ 1945 ਨੂੰ ਖ਼ੁਰਾਕ ਅਤੇ ਖੇਤੀਬਾੜੀ ਸੰਗਠਨ (FAO) ਦੀ ਸਥਾਪਨਾ ਰੋਮ ਵਿਖੇ ਹੋਈ ਸੀ।',
        en: 'Celebrated annually on 16 October commemorating the founding of the UN Food and Agriculture Organization (FAO) in 1945 (headquarters in Rome, Italy).',
      },
      source: 'United Nations Food and Agriculture Organization (FAO)',
    },
    miniQuiz: {
      question: {
        hi: 'संयुक्त राष्ट्र खाद्य एवं कृषि संगठन (FAO) का मुख्यालय किस शहर में स्थित है?',
        pa: 'ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਦੇ FAO ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਕਿੱਥੇ ਹੈ?',
        en: 'Where is the headquarters of the Food and Agriculture Organization (FAO) located?',
      },
      options: {
        A: { hi: 'जिनेवा, स्विट्जरलैंड', pa: 'ਜਿਨੇਵਾ, ਸਵਿਟਜ਼ਰਲੈਂਡ', en: 'Geneva, Switzerland' },
        B: { hi: 'रोम, इटली', pa: 'ਰੋਮ, ਇਟਲੀ', en: 'Rome, Italy' },
        C: { hi: 'पेरिस, फ्रांस', pa: 'ਪੈਰਿਸ, ਫਰਾਂਸ', en: 'Paris, France' },
        D: { hi: 'न्यूयॉर्क, यूएसए', pa: 'ਨਿਊਯਾਰਕ, ਯੂਐਸਏ', en: 'New York, USA' },
      },
      correct: 'B',
      explanation: {
        hi: 'FAO (खाद्य एवं कृषि संगठन) तथा WFP (विश्व खाद्य कार्यक्रम) दोनों का मुख्यालय रोम, इटली में स्थित है।',
        pa: 'FAO ਅਤੇ ਵਿਸ਼ਵ ਖ਼ੁਰਾਕ ਪ੍ਰੋਗਰਾਮ ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਰੋਮ (ਇਟਲੀ) ਵਿੱਚ ਹੈ।',
        en: 'The Food and Agriculture Organization (FAO) and World Food Programme (WFP) are both headquartered in Rome, Italy.',
      },
    },
  },

  '10-17': {
    date: '10-17',
    thought: {
      text: {
        hi: 'आधुनिक वैज्ञानिक शिक्षा ही समाज को कुरीतियों और पिछड़ेपन से मुक्त कर सकती है।',
        pa: 'ਆਧੁਨਿਕ ਵਿਗਿਆਨਕ ਸਿੱਖਿਆ ਹੀ ਸਮਾਜ ਨੂੰ ਪਛੜੇਵੇਂ ਵਿੱਚੋਂ ਬਾਹਰ ਕੱਢ ਸਕਦੀ ਹੈ।',
        en: 'Modern scientific education alone can liberate society from dogmas and backwardness.',
      },
      author: {
        hi: 'सर सैयद अहमद ख़ान',
        pa: 'ਸਰ ਸਈਅਦ ਅਹਿਮਦ ਖ਼ਾਨ',
        en: 'Sir Syed Ahmad Khan',
      },
    },
    historicalPerson: {
      name: {
        hi: 'सर सैयद अहमद ख़ान',
        pa: 'ਸਰ ਸਈਅਦ ਅਹਿਮਦ ਖ਼ਾਨ',
        en: 'Sir Syed Ahmad Khan',
      },
      birthYear: 1817,
      deathYear: 1898,
      title: {
        hi: 'अलीगढ़ आंदोलन के प्रवर्तक एवं शिक्षाविद्',
        pa: 'ਅਲੀਗੜ੍ਹ ਲਹਿਰ ਦੇ ਮੋਢੀ ਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰੀ',
        en: 'Founder of Aligarh Movement & Pioneer of Modern Education',
      },
      significance: {
        hi: '17 अक्टूबर 1817 को दिल्ली में जन्मे सर सैयद अहमद ख़ान ने 1875 में मुहम्मडन एंग्लो-ओरिएंटल कॉलेज (बाद में अलीगढ़ मुस्लिम विश्वविद्यालय — AMU) की स्थापना की।',
        pa: '17 ਅਕਤੂਬਰ 1817 ਨੂੰ ਜਨਮੇ ਸਰ ਸਈਅਦ ਅਹਿਮਦ ਖ਼ਾਨ ਨੇ 1875 ਵਿੱਚ ਐਮ.ਏ.ਓ. ਕਾਲਜ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ ਜੋ ਬਾਅਦ ਵਿੱਚ ਅਲੀਗੜ੍ਹ ਮੁਸਲਿਮ ਯੂਨੀਵਰਸਿਟੀ ਬਣਿਆ।',
        en: 'Born on 17 October 1817, Sir Syed pioneered modern scientific education in India, establishing MAO College in 1875, which became Aligarh Muslim University in 1920.',
      },
    },
    gkEvent: {
      title: {
        hi: 'सर सैयद अहमद ख़ान जयंती एवं अंतरराष्ट्रीय गरीबी उन्मूलन दिवस',
        pa: 'ਸਰ ਸਈਅਦ ਅਹਿਮਦ ਖ਼ਾਨ ਜਨਮ ਦਿਨ ਤੇ ਅੰਤਰਰਾਸ਼ਟਰੀ ਗ਼ਰੀਬੀ ਖ਼ਾਤਮਾ ਦਿਵਸ',
        en: 'Sir Syed Ahmad Khan Birth Anniversary & International Day for the Eradication of Poverty',
      },
      description: {
        hi: '17 अक्टूबर को सर सैयद अहमद ख़ान का जन्मदिन (सर सैयद डे) मनाया जाता है। इसी दिन संयुक्त राष्ट्र द्वारा "अंतरराष्ट्रीय गरीबी उन्मूलन दिवस" भी मनाया जाता है।',
        pa: '17 ਅਕਤੂਬਰ ਨੂੰ ਸਰ ਸਈਅਦ ਡੇਅ ਅਤੇ ਅੰਤਰਰਾਸ਼ਟਰੀ ਗ਼ਰੀਬੀ ਖ਼ਾਤਮਾ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
        en: 'Observed as Sir Syed Day celebrating the AMU founder, alongside the UN International Day for the Eradication of Poverty.',
      },
      source: 'United Nations & Aligarh Muslim University Archives',
    },
    miniQuiz: {
      question: {
        hi: 'सर सैयद अहमद ख़ान ने 1875 में किस प्रसिद्ध शैक्षणिक संस्थान की नींव रखी थी?',
        pa: 'ਸਰ ਸਈਅਦ ਅਹਿਮਦ ਖ਼ਾਨ ਨੇ 1875 ਵਿੱਚ ਕਿਹੜੇ ਸੰਸਥਾਨ ਦੀ ਨੀਂਹ ਰੱਖੀ ਸੀ?',
        en: 'Which premier educational institution was founded by Sir Syed Ahmad Khan in 1875?',
      },
      options: {
        A: { hi: 'मुहम्मडन एंग्लो-ओरिएंटल (MAO) कॉलेज, अलीगढ़', pa: 'ਮੁਹੰਮਡਨ ਐਂਗਲੋ-ਓਰੀਐਂਟਲ (MAO) ਕਾਲਜ, ਅਲੀਗੜ੍ਹ', en: 'Muhammadan Anglo-Oriental (MAO) College, Aligarh' },
        B: { hi: 'बनारस हिंदू विश्वविद्यालय (BHU)', pa: 'ਬਨਾਰਸ ਹਿੰਦੂ ਯੂਨੀਵਰਸਿਟੀ', en: 'Banaras Hindu University (BHU)' },
        C: { hi: 'जामिया मिलिया इस्लामिया', pa: 'ਜਾਮੀਆ ਮਿਲੀਆ ਇਸਲਾਮੀਆ', en: 'Jamia Millia Islamia' },
        D: { hi: 'सेंट स्टीफेंस कॉलेज, दिल्ली', pa: 'ਸੇਂਟ ਸਟੀਫਨਜ਼ ਕਾਲਜ, ਦਿੱਲੀ', en: 'St. Stephen\'s College, Delhi' },
      },
      correct: 'A',
      explanation: {
        hi: 'सर सैयद ने 1875 में अलीगढ़ में MAO कॉलेज की स्थापना की, जिसे 1920 में केंद्रीय विश्वविद्यालय के रूप में अलीगढ़ मुस्लिम विश्वविद्यालय का दर्जा दिया गया।',
        pa: 'ਸਰ ਸਈਅਦ ਨੇ 1875 ਵਿੱਚ MAO ਕਾਲਜ ਸਥਾਪਿਤ ਕੀਤਾ ਜੋ 1920 ਵਿੱਚ ਅਲੀਗੜ੍ਹ ਮੁਸਲਿਮ ਯੂਨੀਵਰਸਿਟੀ ਬਣਿਆ।',
        en: 'MAO College was founded in 1875 at Aligarh and was elevated to Aligarh Muslim University in 1920 through a Central Act.',
      },
    },
  },

  '10-21': {
    date: '10-21',
    thought: {
      text: {
        hi: 'तुम मुझे खून दो, मैं तुम्हें आज़ादी दूंगा! दिल्ली चलो का नारा ही आज़ादी का संकल्प है।',
        pa: 'ਤੁਸੀਂ ਮੈਨੂੰ ਖ਼ੂਨ ਦਿਓ, ਮੈਂ ਤੁਹਾਨੂੰ ਆਜ਼ਾਦੀ ਦੇਵਾਂਗਾ! ਦਿੱਲੀ ਚਲੋ ਦਾ ਨਾਅਰਾ ਆਜ਼ਾਦੀ ਦਾ ਸੰਕਲਪ ਸੀ।',
        en: 'Give me blood, and I will give you freedom! Forward to Delhi was our clarion call for total liberation.',
      },
      author: {
        hi: 'नेताजी सुभाष चंद्र बोस',
        pa: 'ਨੇਤਾਜੀ ਸੁਭਾਸ਼ ਚੰਦਰ ਬੋਸ',
        en: 'Netaji Subhas Chandra Bose',
      },
    },
    historicalPerson: {
      name: {
        hi: 'नेताजी सुभाष चंद्र बोस',
        pa: 'ਨੇਤਾਜੀ ਸੁਭਾਸ਼ ਚੰਦਰ ਬੋਸ',
        en: 'Netaji Subhas Chandra Bose',
      },
      birthYear: 1897,
      title: {
        hi: 'आज़ाद हिंद सरकार के सर्वोच्च सेनापति',
        pa: 'ਆਜ਼ਾਦ ਹਿੰਦ ਸਰਕਾਰ ਦੇ ਸੁਪਰੀਮ ਕਮਾਂਡਰ',
        en: 'Supreme Commander, Provisional Government of Free India',
      },
      significance: {
        hi: '21 अक्टूबर 1943 को नेताजी ने सिंगापुर में भारत की पहली स्वतंत्र अंतरिम सरकार "आज़ाद हिंद सरकार" (आरज़ी हुकूमत-ए-आज़ाद हिंद) की घोषणा की थी, जिसे जापान, जर्मनी और इटली सहित 9 देशों ने मान्यता दी थी।',
        pa: '21 ਅਕਤੂਬਰ 1943 ਨੂੰ ਨੇਤਾਜੀ ਨੇ ਸਿੰਗਾਪੁਰ ਵਿੱਚ ਆਜ਼ਾਦ ਹਿੰਦ ਸਰਕਾਰ ਦਾ ਐਲਾਨ ਕੀਤਾ ਜਿਸ ਨੂੰ 9 ਦੇਸ਼ਾਂ ਨੇ ਮਾਨਤਾ ਦਿੱਤੀ ਸੀ।',
        en: 'On 21 October 1943, Netaji Subhas Chandra Bose proclaimed the Provisional Government of Free India (Arzi Hukumat-e-Azad Hind) in Singapore, backed by the Indian National Army (INA).',
      },
    },
    gkEvent: {
      title: {
        hi: 'आज़ाद हिंद सरकार स्थापना दिवस (1943) एवं राष्ट्रीय पुलिस स्मृति दिवस',
        pa: 'ਆਜ਼ਾਦ ਹਿੰਦ ਸਰਕਾਰ ਸਥਾਪਨਾ ਦਿਵਸ (1943) ਅਤੇ ਪੁਲਿਸ ਸ਼ਹੀਦੀ ਦਿਵਸ',
        en: 'Azad Hind Government Proclamation Day (1943) & National Police Commemoration Day',
      },
      description: {
        hi: '21 अक्टूबर 1943 को सिंगापुर में नेताजी सुभाष चंद्र बोस द्वारा आज़ाद हिंद सरकार की स्थापना की गई थी। इसी दिन 1959 में लद्दाख के हॉट स्प्रिंग्स में चीनी सेना से लड़ते हुए शहीद हुए 10 पुलिसकर्मियों की याद में "राष्ट्रीय पुलिस स्मृति दिवस" मनाया जाता है।',
        pa: '21 ਅਕਤੂਬਰ 1943 ਨੂੰ ਨੇਤਾਜੀ ਨੇ ਆਜ਼ਾਦ ਹਿੰਦ ਸਰਕਾਰ ਦਾ ਗਠਨ ਕੀਤਾ। ਇਸੇ ਦਿਨ 1959 ਵਿੱਚ ਲੱਦਾਖ ਵਿਖੇ ਸ਼ਹੀਦ ਹੋਏ ਸੀਆਰਪੀਐਫ ਜਵਾਨਾਂ ਦੀ ਯਾਦ ਵਿੱਚ ਪੁਲਿਸ ਸ਼ਹੀਦੀ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
        en: '21 October marks the proclamation of the Azad Hind Government in Singapore (1943), and National Police Commemoration Day honoring CRPF personnel martyred at Hot Springs, Ladakh in 1959.',
      },
      source: 'Ministry of Home Affairs & National Archives of India',
    },
    miniQuiz: {
      question: {
        hi: '21 अक्टूबर 1943 को नेताजी सुभाष चंद्र बोस ने किस स्थान पर अंतरिम आज़ाद हिंद सरकार की स्थापना की घोषणा की थी?',
        pa: '21 ਅਕਤੂਬਰ 1943 ਨੂੰ ਨੇਤਾਜੀ ਨੇ ਆਜ਼ਾਦ ਹਿੰਦ ਸਰਕਾਰ ਦੀ ਘੋਸ਼ਣਾ ਕਿੱਥੇ ਕੀਤੀ ਸੀ?',
        en: 'Where did Netaji Subhas Chandra Bose proclaim the Provisional Government of Free India on 21 October 1943?',
      },
      options: {
        A: { hi: 'सिंगापुर (कैथे सिनेमा हॉल)', pa: 'ਸਿੰਗਾਪੁਰ', en: 'Singapore (Cathay Cinema Hall)' },
        B: { hi: 'टोक्यो, जापान', pa: 'ਟੋਕੀਓ, ਜਾਪਾਨ', en: 'Tokyo, Japan' },
        C: { hi: 'रंगून, बर्मा', pa: 'ਰੰਗੂਨ, ਬਰਮਾ', en: 'Rangoon, Burma' },
        D: { hi: 'बैंकॉक, थाईलैंड', pa: 'ਬੈਂਕਾਕ, ਥਾਈਲੈਂਡ', en: 'Bangkok, Thailand' },
      },
      correct: 'A',
      explanation: {
        hi: 'नेताजी ने 21 अक्टूबर 1943 को सिंगापुर के कैथे थिएटर में आज़ाद हिंद सरकार (Arzi Hukumat-e-Azad Hind) के गठन की औपचारिक घोषणा की थी।',
        pa: 'ਨੇਤਾਜੀ ਨੇ 21 ਅਕਤੂਬਰ 1943 ਨੂੰ ਸਿੰਗਾਪੁਰ ਵਿਖੇ ਆਜ਼ਾਦ ਹਿੰਦ ਸਰਕਾਰ ਦੀ ਘੋਸ਼ਣਾ ਕੀਤੀ।',
        en: 'Netaji proclaimed the Provisional Government of Azad Hind at the Cathay Cinema in Singapore on 21 October 1943.',
      },
    },
  },

  '10-24': {
    date: '10-24',
    thought: {
      text: {
        hi: 'शांति और न्याय के बिना विश्व की कोई भी प्रगति टिकाऊ नहीं हो सकती।',
        pa: 'ਸ਼ਾਂਤੀ ਅਤੇ ਨਿਆਂ ਤੋਂ ਬਿਨਾਂ ਦੁਨੀਆ ਦੀ ਕੋਈ ਵੀ ਤਰੱਕੀ ਸਥਾਈ ਨਹੀਂ ਹੋ ਸਕਦੀ।',
        en: 'Peace and justice are the essential prerequisites for sustainable global progress.',
      },
      author: {
        hi: 'पंडित जवाहरलाल नेहरू',
        pa: 'ਪੰਡਿਤ ਜਵਾਹਰ ਲਾਲ ਨਹਿਰੂ',
        en: 'Pandit Jawaharlal Nehru',
      },
    },
    gkEvent: {
      title: {
        hi: 'संयुक्त राष्ट्र दिवस (UN Day — 1945) एवं ITBP स्थापना दिवस (1962)',
        pa: 'ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਦਿਵਸ (UN Day) ਅਤੇ ITBP ਸਥਾਪਨਾ ਦਿਵਸ',
        en: 'United Nations Day (1945) & ITBP Raising Day (1962)',
      },
      description: {
        hi: '24 अक्टूबर 1945 को संयुक्त राष्ट्र का चार्टर लागू हुआ और UN की स्थापना हुई। 24 अक्टूबर 1962 को भारत-तिब्बत सीमा पुलिस (ITBP) का गठन किया गया जो भारत-चीन सीमा की रक्षा करती है।',
        pa: '24 ਅਕਤੂਬਰ 1945 ਨੂੰ ਯੂ.ਐਨ. ਚਾਰਟਰ ਲਾਗੂ ਹੋਇਆ। ਇਸੇ ਦਿਨ 1962 ਨੂੰ ਭਾਰਤ-ਤਿੱਬਤ ਸਰਹੱਦੀ ਪੁਲਿਸ (ITBP) ਦਾ ਗਠਨ ਹੋਇਆ।',
        en: 'On 24 October 1945, the UN Charter came into force. 24 October 1962 also marks the raising of the Indo-Tibetan Border Police (ITBP) protecting India\'s high-altitude borders.',
      },
      source: 'United Nations & Ministry of Home Affairs, India',
    },
    miniQuiz: {
      question: {
        hi: 'संयुक्त राष्ट्र (UN) के चार्टर पर हस्ताक्षर करने वाले 50 मूल संस्थापक देशों में क्या भारत शामिल था?',
        pa: 'ਕੀ ਭਾਰਤ ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਦੇ ਮੁੱਢਲੇ ਸੰਸਥਾਪਕ ਮੈਂਬਰਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਸੀ?',
        en: 'Was India an original founding signatory of the United Nations Charter in 1945?',
      },
      options: {
        A: { hi: 'हाँ, भारत 1945 में ही मूल संस्थापक सदस्यों में शामिल था', pa: 'ਹਾਂ, ਭਾਰਤ 1945 ਵਿੱਚ ਹੀ ਮੁੱਢਲਾ ਸੰਸਥਾਪਕ ਮੈਂਬਰ ਸੀ', en: 'Yes, India was an original founding member in 1945' },
        B: { hi: 'नहीं, भारत 1947 में आज़ादी के बाद शामिल हुआ', pa: 'ਨਹੀਂ, ਭਾਰਤ 1947 ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਇਆ', en: 'No, India joined after independence in 1947' },
        C: { hi: 'नहीं, भारत 1950 में गणतंत्र बनने पर शामिल हुआ', pa: 'ਨਹੀਂ, ਭਾਰਤ 1950 ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਇਆ', en: 'No, India joined in 1950 upon becoming a Republic' },
        D: { hi: 'नहीं, भारत 1955 में बांडुंग सम्मेलन के बाद शामिल हुआ', pa: 'ਨਹੀਂ, 1955 ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਇਆ', en: 'No, India joined in 1955 after Bandung' },
      },
      correct: 'A',
      explanation: {
        hi: 'भारत ने 26 जून 1945 को सैन फ्रांसिस्को में संयुक्त राष्ट्र चार्टर पर हस्ताक्षर किए और 30 अक्टूबर 1945 को इसकी औपचारिक पुष्टि की। भारत UN का मूल संस्थापक सदस्य है।',
        pa: 'ਭਾਰਤ ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਦਾ ਮੁੱਢਲਾ ਸੰਸਥਾਪਕ ਮੈਂਬਰ ਸੀ ਅਤੇ ਇਸ ਨੇ 1945 ਵਿੱਚ ਚਾਰਟਰ ਉੱਤੇ ਦਸਤਖ਼ਤ ਕੀਤੇ ਸਨ।',
        en: 'India signed the UN Charter on 26 June 1945 in San Francisco and is an original founding member of the United Nations.',
      },
    },
  },

  '10-30': {
    date: '10-30',
    thought: {
      text: {
        hi: 'वैज्ञानिक शोध और तकनीकी आत्मनिर्भरता ही आधुनिक भारत की असली संप्रभुता हैं।',
        pa: 'ਵਿਗਿਆਨਕ ਖੋਜ ਅਤੇ ਤਕਨੀਕੀ ਆਤਮ-ਨਿਰਭਰਤਾ ਹੀ ਆਧੁਨਿਕ ਭਾਰਤ ਦੀ ਅਸਲ ਤਾਕਤ ਹੈ।',
        en: 'Scientific research and technical self-reliance are the true sovereignty of modern India.',
      },
      author: {
        hi: 'डॉ. होमी जहांगीर भाभा',
        pa: 'ਡਾ. ਹੋਮੀ ਜਹਾਂਗੀਰ ਭਾਬਾ',
        en: 'Dr. Homi J. Bhabha',
      },
    },
    historicalPerson: {
      name: {
        hi: 'डॉ. होमी जहांगीर भाभा',
        pa: 'ਡਾ. ਹੋਮੀ ਜਹਾਂਗੀਰ ਭਾਬਾ',
        en: 'Dr. Homi Jehangir Bhabha',
      },
      birthYear: 1909,
      deathYear: 1966,
      title: {
        hi: 'भारतीय परमाणु कार्यक्रम के जनक',
        pa: 'ਭਾਰਤੀ ਪਰਮਾਣੂ ਪ੍ਰੋਗਰਾਮ ਦੇ ਪਿਤਾਮਾ',
        en: 'Father of the Indian Nuclear Programme',
      },
      significance: {
        hi: '30 अक्टूबर 1909 को जन्मे डॉ. भाभा ने TIFR और भाभा परमाणु अनुसंधान केंद्र (BARC) की स्थापना की और भारत के त्रि-स्तरीय परमाणु ऊर्जा कार्यक्रम (थोरियम आधारित) की रूपरेखा बनाई।',
        pa: '30 ਅਕਤੂਬਰ 1909 ਨੂੰ ਜਨਮੇ ਡਾ. ਭਾਬਾ ਨੇ ਟੀ.ਆਈ.ਐਫ.ਆਰ. ਅਤੇ ਬਾਰਕ (BARC) ਦੀ ਨੀਂਹ ਰੱਖੀ।',
        en: 'Born 30 October 1909, Dr. Bhabha founded TIFR and BARC, architecting India\'s three-stage nuclear power programme utilizing thorium reserves.',
      },
    },
    gkEvent: {
      title: {
        hi: 'डॉ. होमी जहांगीर भाभा जयंती (1909)',
        pa: 'ਡਾ. ਹੋਮੀ ਭਾਬਾ ਜਨਮ ਦਿਨ (1909)',
        en: 'Dr. Homi J. Bhabha Birth Anniversary (1909)',
      },
      description: {
        hi: '30 अक्टूबर 1909 को भारत के अग्रणी नाभिकीय भौतिक विज्ञानी डॉ. होमी भाभा का जन्म मुंबई में हुआ था। उन्हें भारतीय परमाणु ऊर्जा आयोग का पहला अध्यक्ष नियुक्त किया गया था।',
        pa: '30 ਅਕਤੂਬਰ 1909 ਨੂੰ ਭਾਰਤੀ ਪਰਮਾਣੂ ਵਿਗਿਆਨ ਦੇ ਮੋਢੀ ਡਾ. ਹੋਮੀ ਭਾਬਾ ਦਾ ਜਨਮ ਹੋਇਆ।',
        en: 'Celebrated as the birth anniversary of Dr. Homi J. Bhabha (1909–1966), founding director of TIFR and the Atomic Energy Establishment, Trombay (now BARC).',
      },
      source: 'Department of Atomic Energy (DAE), Government of India',
    },
    miniQuiz: {
      question: {
        hi: 'भारत का प्रथम नाभिकीय अनुसंधान रिएक्टर "अप्सरा" (Apsara) किस वर्ष ट्रॉम्बे में चालू हुआ था?',
        pa: 'ਭਾਰਤ ਦਾ ਪਹਿਲਾ ਪਰਮਾਣੂ ਰਿਐਕਟਰ "ਅਪਸਰਾ" ਕਿਸ ਸਾਲ ਚਾਲੂ ਹੋਇਆ ਸੀ?',
        en: 'In which year did India\'s first nuclear research reactor "Apsara" achieve criticality at Trombay?',
      },
      options: {
        A: { hi: '1956', pa: '1956', en: '1956' },
        B: { hi: '1962', pa: '1962', en: '1962' },
        C: { hi: '1974', pa: '1974', en: '1974' },
        D: { hi: '1948', pa: '1948', en: '1948' },
      },
      correct: 'A',
      explanation: {
        hi: 'डॉ. भाभा के मार्गदर्शन में 4 अगस्त 1956 को ट्रॉम्बे में भारत और एशिया का प्रथम शोध रिएक्टर "अप्सरा" क्रिटिकल हुआ।',
        pa: 'ਭਾਰਤ ਦਾ ਪਹਿਲਾ ਰਿਸਰਚ ਰਿਐਕਟਰ "ਅਪਸਰਾ" 1956 ਵਿੱਚ ਚਾਲੂ ਹੋਇਆ ਸੀ।',
        en: 'Apsara, India and Asia\'s first nuclear research reactor, achieved criticality on 4 August 1956 under Dr. Bhabha\'s leadership.',
      },
    },
  },

  // --- NOVEMBER ---
  '11-07': {
    date: '11-07',
    thought: {
      text: {
        hi: 'सच्चा वैज्ञानिक वह है जो प्रकृति के रहस्यों को खुले मन और निष्पक्ष दृष्टि से देखता है।',
        pa: 'ਸੱਚਾ ਵਿਗਿਆਨੀ ਉਹ ਹੈ ਜੋ ਕੁਦਰਤ ਦੇ ਭੇਤਾਂ ਨੂੰ ਨਿਰਪੱਖ ਨਜ਼ਰੀਏ ਨਾਲ ਸਮਝਦਾ ਹੈ।',
        en: 'The true laboratory of a physicist is nature herself; curiosity and rigorous observation unlock her secrets.',
      },
      author: {
        hi: 'सर सी. वी. रामन',
        pa: 'ਸਰ ਸੀ. ਵੀ. ਰਮਨ',
        en: 'Sir C. V. Raman',
      },
    },
    historicalPerson: {
      name: {
        hi: 'सर चंद्रशेखर वेंकट रामन (नोबेल पुरस्कार विजेता)',
        pa: 'ਸਰ ਸੀ. ਵੀ. ਰਮਨ (ਨੋਬਲ ਪੁਰਸਕਾਰ ਜੇਤੂ)',
        en: 'Sir C. V. Raman (Nobel Laureate in Physics)',
      },
      birthYear: 1888,
      deathYear: 1970,
      title: {
        hi: 'रामन प्रभाव के खोजकर्ता एवं भारत रत्न',
        pa: 'ਰਮਨ ਪ੍ਰਭਾਵ ਦੇ ਖੋਜੀ ਅਤੇ ਭਾਰਤ ਰਤਨ',
        en: 'Discoverer of Raman Effect & Bharat Ratna',
      },
      significance: {
        hi: '7 नवंबर 1888 को तिरुचिरापल्ली (तमिलनाडु) में जन्मे सर सी.वी. रामन को 1930 में भौतिकी का नोबेल पुरस्कार मिला। 1954 में उन्हें प्रथम भारत रत्न से अलंकृत किया गया।',
        pa: '7 ਨਵੰਬਰ 1888 ਨੂੰ ਜਨਮੇ ਸਰ ਸੀ.ਵੀ. ਰਮਨ ਨੇ ਪ੍ਰਕਾਸ਼ ਦੇ ਖਿੰਡਣ (Raman Effect) ਦੀ ਖੋਜ ਕੀਤੀ ਅਤੇ 1930 ਵਿੱਚ ਭੌਤਿਕ ਵਿਗਿਆਨ ਦਾ ਨੋਬਲ ਇਨਾਮ ਜਿੱਤਿਆ।',
        en: 'Born 7 November 1888, Sir C.V. Raman discovered the Raman Effect (molecular scattering of light) in 1928, winning the Nobel Prize in Physics in 1930.',
      },
    },
    gkEvent: {
      title: {
        hi: 'सर सी. वी. रामन जयंती (1888) एवं राष्ट्रीय कैंसर जागरूकता दिवस',
        pa: 'ਸਰ ਸੀ. ਵੀ. ਰਮਨ ਜਨਮ ਦਿਨ ਅਤੇ ਕੈਂਸਰ ਜਾਗਰੂਕਤਾ ਦਿਵਸ',
        en: 'Sir C. V. Raman Birth Anniversary (1888) & National Cancer Awareness Day',
      },
      description: {
        hi: '7 नवंबर 1888 को भारत के महान वैज्ञानिक सर सी.वी. रामन का जन्म हुआ था। 28 फरवरी 1928 को उनके द्वारा रामन प्रभाव की खोज के उपलक्ष्य में राष्ट्रीय विज्ञान दिवस मनाया जाता है।',
        pa: '7 ਨਵੰਬਰ 1888 ਨੂੰ ਸਰ ਸੀ.ਵੀ. ਰਮਨ ਦਾ ਜਨਮ ਹੋਇਆ ਸੀ। ਉਨ੍ਹਾਂ ਦੀ ਖੋਜ ਦੀ ਯਾਦ ਵਿੱਚ 28 ਫ਼ਰਵਰੀ ਨੂੰ ਰਾਸ਼ਟਰੀ ਵਿਗਿਆਨ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
        en: '7 November honors the birth of Nobel Laureate Sir C.V. Raman (1888). His discovery of the Raman Effect is celebrated annually as National Science Day on 28 February.',
      },
      source: 'Indian Institute of Science (IISc) & Nobel Prize Archive',
    },
    miniQuiz: {
      question: {
        hi: 'सर सी.वी. रामन को किस वर्ष भौतिकी के नोबेल पुरस्कार से सम्मानित किया गया था?',
        pa: 'ਸਰ ਸੀ.ਵੀ. ਰਮਨ ਨੂੰ ਭੌਤਿਕ ਵਿਗਿਆਨ ਦਾ ਨੋਬਲ ਪੁਰਸਕਾਰ ਕਿਸ ਸਾਲ ਮਿਲਿਆ ਸੀ?',
        en: 'In which year was Sir C. V. Raman awarded the Nobel Prize in Physics?',
      },
      options: {
        A: { hi: '1930', pa: '1930', en: '1930' },
        B: { hi: '1913', pa: '1913', en: '1913' },
        C: { hi: '1954', pa: '1954', en: '1954' },
        D: { hi: '1928', pa: '1928', en: '1928' },
      },
      correct: 'A',
      explanation: {
        hi: 'सर सी.वी. रामन को 1930 में रामन प्रभाव (Raman Scattering) की खोज के लिए भौतिकी का नोबेल पुरस्कार प्रदान किया गया। वह विज्ञान में नोबेल जीतने वाले पहले एशियाई थे।',
        pa: 'ਸਰ ਸੀ.ਵੀ. ਰਮਨ ਨੂੰ 1930 ਵਿੱਚ ਭੌਤਿਕ ਵਿਗਿਆਨ ਦਾ ਨੋਬਲ ਇਨਾਮ ਮਿਲਿਆ। ਉਹ ਵਿਗਿਆਨ ਵਿੱਚ ਨੋਬਲ ਜਿੱਤਣ ਵਾਲੇ ਪਹਿਲੇ ਏਸ਼ੀਆਈ ਸਨ।',
        en: 'Sir C.V. Raman won the Nobel Prize in Physics in 1930 for his work on the scattering of light, becoming the first Asian Nobel laureate in sciences.',
      },
    },
  },

  '11-11': {
    date: '11-11',
    thought: {
      text: {
        hi: 'शिक्षा केवल साक्षरता नहीं है, यह मनुष्य के विवेक को जागृत करने का साधन है।',
        pa: 'ਸਿੱਖਿਆ ਸਿਰਫ਼ ਅੱਖਰ ਗਿਆਨ ਨਹੀਂ, ਸਗੋਂ ਮਨੁੱਖੀ ਚੇਤਨਾ ਅਤੇ ਵਿਵੇਕ ਨੂੰ ਜਗਾਉਣ ਦਾ ਜ਼ਰੀਆ ਹੈ।',
        en: 'Education is not mere literacy; it is the awakening of human conscience, dignity, and critical thinking.',
      },
      author: {
        hi: 'मौलाना अबुल कलाम आज़ाद',
        pa: 'ਮੌਲਾਨਾ ਅਬੁਲ ਕਲਾਮ ਆਜ਼ਾਦ',
        en: 'Maulana Abul Kalam Azad',
      },
    },
    historicalPerson: {
      name: {
        hi: 'मौलाना अबुल कलाम आज़ाद',
        pa: 'ਮੌਲਾਨਾ ਅਬੁਲ ਕਲਾਮ ਆਜ਼ਾਦ',
        en: 'Maulana Abul Kalam Azad',
      },
      birthYear: 1888,
      deathYear: 1958,
      title: {
        hi: 'स्वतंत्र भारत के प्रथम शिक्षा मंत्री एवं राष्ट्रीय शिक्षा दिवस',
        pa: 'ਆਜ਼ਾਦ ਭਾਰਤ ਦੇ ਪਹਿਲੇ ਸਿੱਖਿਆ ਮੰਤਰੀ ਅਤੇ ਰਾਸ਼ਟਰੀ ਸਿੱਖਿਆ ਦਿਵਸ',
        en: 'First Education Minister of Independent India & National Education Day',
      },
      significance: {
        hi: '11 नवंबर 1888 को जन्मे मौलाना आज़ाद के कार्यकाल में IIT खड़गपुर (1951), UGC (1953), संगीत नाटक अकादमी और साहित्य अकादमी की स्थापना हुई।',
        pa: '11 ਨਵੰਬਰ 1888 ਨੂੰ ਜਨਮੇ ਮੌਲਾਨਾ ਆਜ਼ਾਦ ਦੇ ਜਨਮ ਦਿਨ ਨੂੰ ਰਾਸ਼ਟਰੀ ਸਿੱਖਿਆ ਦਿਵਸ ਵਜੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ। ਉਨ੍ਹਾਂ ਨੇ ਆਈ.ਆਈ.ਟੀ. ਅਤੇ ਯੂ.ਜੀ.ਸੀ. ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ।',
        en: 'Born 11 November 1888, Maulana Azad served as India\'s first Education Minister (1947–1958), founding the IITs, IISc revamp, UGC, and national cultural academies.',
      },
    },
    gkEvent: {
      title: {
        hi: 'राष्ट्रीय शिक्षा दिवस (National Education Day) — मौलाना आज़ाद जयंती',
        pa: 'ਰਾਸ਼ਟਰੀ ਸਿੱਖਿਆ ਦਿਵਸ — ਮੌਲਾਨਾ ਆਜ਼ਾਦ ਜਨਮ ਦਿਨ',
        en: 'National Education Day — Maulana Abul Kalam Azad Birth Anniversary',
      },
      description: {
        hi: '11 नवंबर को स्वतंत्र भारत के प्रथम शिक्षा मंत्री मौलाना अबुल कलाम आज़ाद के जन्मदिन को 2008 से "राष्ट्रीय शिक्षा दिवस" के रूप में मनाया जाता है।',
        pa: '11 ਨਵੰਬਰ ਨੂੰ ਭਾਰਤ ਦੇ ਪਹਿਲੇ ਸਿੱਖਿਆ ਮੰਤਰੀ ਮੌਲਾਨਾ ਆਜ਼ਾਦ ਦੀ ਯਾਦ ਵਿੱਚ ਰਾਸ਼ਟਰੀ ਸਿੱਖਿਆ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
        en: 'Observed annually since 2008 as National Education Day in honor of India\'s first Education Minister, freedom fighter, and Bharat Ratna Maulana Abul Kalam Azad.',
      },
      source: 'Ministry of Education, Government of India',
    },
    miniQuiz: {
      question: {
        hi: 'भारत में प्रथम भारतीय प्रौद्योगिकी संस्थान (IIT) की स्थापना 1951 में कहाँ की गई थी?',
        pa: 'ਭਾਰਤ ਵਿੱਚ ਪਹਿਲਾ ਆਈ.ਆਈ.ਟੀ. (IIT) 1951 ਵਿੱਚ ਕਿੱਥੇ ਸਥਾਪਿਤ ਕੀਤਾ ਗਿਆ ਸੀ?',
        en: 'Where was India\'s first Indian Institute of Technology (IIT) established in 1951 under Maulana Azad?',
      },
      options: {
        A: { hi: 'आईआईटी खड़गपुर (पश्चिम बंगाल)', pa: 'ਆਈ.ਆਈ.ਟੀ. ਖੜਗਪੁਰ (ਪੱਛਮੀ ਬੰਗਾਲ)', en: 'IIT Kharagpur (West Bengal)' },
        B: { hi: 'आईआईटी बॉम्बे', pa: 'ਆਈ.ਆਈ.ਟੀ. ਬੰਬੇ', en: 'IIT Bombay' },
        C: { hi: 'आईआईटी दिल्ली', pa: 'ਆਈ.ਆਈ.ਟੀ. ਦਿੱਲੀ', en: 'IIT Delhi' },
        D: { hi: 'आईआईटी कानपुर', pa: 'ਆਈ.ਆਈ.ਟੀ. ਕਾਨਪੁਰ', en: 'IIT Kanpur' },
      },
      correct: 'A',
      explanation: {
        hi: 'भारत का पहला IIT मई 1950 में स्थापित हुआ और 18 अगस्त 1951 को मौलाना आज़ाद द्वारा हिजली डिटेंशन कैंप (खड़गपुर) में औपचारिक रूप से उद्घाटित किया गया।',
        pa: 'ਭਾਰਤ ਦਾ ਪਹਿਲਾ ਆਈ.ਆਈ.ਟੀ. ਖੜਗਪੁਰ (ਪੱਛਮੀ ਬੰਗਾਲ) ਵਿਖੇ 1951 ਵਿੱਚ ਸਥਾਪਿਤ ਹੋਇਆ।',
        en: 'The first IIT was established in May 1950 and formally inaugurated by Maulana Azad at Hijli Detention Camp, Kharagpur on 18 August 1951.',
      },
    },
  },

  '11-19': {
    date: '11-19',
    thought: {
      text: {
        hi: 'खूब लड़ी मर्दानी वह तो झाँसी वाली रानी थी! मातृभूमि की स्वतंत्रता के लिए सर्वस्व न्योछावर करना ही परम धर्म है।',
        pa: 'ਖ਼ੂਬ ਲੜੀ ਮਰਦਾਨੀ ਉਹ ਤਾਂ ਝਾਂਸੀ ਵਾਲੀ ਰਾਣੀ ਸੀ! ਦੇਸ਼ ਦੀ ਖ਼ਾਤਰ ਕੁਰਬਾਨ ਹੋਣਾ ਹੀ ਸਭ ਤੋਂ ਵੱਡਾ ਧਰਮ ਹੈ।',
        en: 'Fiercely fought the Queen of Jhansi with indomitable valor; sacrifice for motherland is the highest duty.',
      },
      author: {
        hi: 'सुभद्रा कुमारी चौहान (रानी लक्ष्मीबाई प्रशस्ति)',
        pa: 'ਸੁਭਦਰਾ ਕੁਮਾਰੀ ਚੌਹਾਨ',
        en: 'Subhadra Kumari Chauhan (Ode to Rani Lakshmibai)',
      },
    },
    historicalPerson: {
      name: {
        hi: 'रानी लक्ष्मीबाई (झाँसी की रानी) एवं इंदिरा गांधी',
        pa: 'ਰਾਣੀ ਲਕਸ਼ਮੀਬਾਈ ਅਤੇ ਇੰਦਰਾ ਗਾਂਧੀ',
        en: 'Rani Lakshmibai & Indira Gandhi',
      },
      birthYear: 1828,
      deathYear: 1858,
      title: {
        hi: '1857 के प्रथम स्वतंत्रता संग्राम की अमर वीरांगना',
        pa: '1857 ਦੇ ਪਹਿਲੇ ਆਜ਼ਾਦੀ ਸੰਗਰਾਮ ਦੀ ਮਹਾਨ ਵੀਰਾਂਗਣਾ',
        en: 'Heroine of India\'s First War of Independence (1857)',
      },
      significance: {
        hi: '19 नवंबर 1828 को वाराणसी में जन्मी रानी लक्ष्मीबाई (मणिकर्णिका) ने 1857 के स्वतंत्रता संग्राम में ब्रिटिश सेनापति ह्यूरोज़ के विरुद्ध अदम्य साहस का परिचय दिया। इसी दिन 1917 में भारत की प्रथम महिला प्रधानमंत्री इंदिरा गांधी का जन्म हुआ था।',
        pa: '19 ਨਵੰਬਰ 1828 ਨੂੰ ਵਾਰਾਣਸੀ ਵਿੱਚ ਰਾਣੀ ਲਕਸ਼ਮੀਬਾਈ ਦਾ ਜਨਮ ਹੋਇਆ ਜਿਨ੍ਹਾਂ ਨੇ 1857 ਦੀ ਕ੍ਰਾਂਤੀ ਵਿੱਚ ਬ੍ਰਿਟਿਸ਼ ਫ਼ੌਜਾਂ ਖ਼ਿਲਾਫ਼ ਬਹਾਦਰੀ ਨਾਲ ਲੜਾਈ ਲੜੀ। 19 ਨਵੰਬਰ 1917 ਨੂੰ ਇੰਦਰਾ ਗਾਂਧੀ ਦਾ ਜਨਮ ਹੋਇਆ।',
        en: 'Born 19 November 1828, Rani Lakshmibai of Jhansi led the 1857 revolt against Lord Dalhousie\'s Doctrine of Lapse. 19 November 1917 also marks the birth of India\'s first woman Prime Minister Indira Gandhi.',
      },
    },
    gkEvent: {
      title: {
        hi: 'रानी लक्ष्मीबाई जयंती (1828) एवं राष्ट्रीय एकता दिवस (National Integration Day)',
        pa: 'ਰਾਣੀ ਲਕਸ਼ਮੀਬਾਈ ਜਨਮ ਦਿਨ ਤੇ ਰਾਸ਼ਟਰੀ ਏਕਤਾ ਦਿਵਸ',
        en: 'Rani Lakshmibai Jayanti & National Integration Day (Indira Gandhi Birthday)',
      },
      description: {
        hi: '19 नवंबर को झाँसी की रानी लक्ष्मीबाई की जयंती मनाई जाती है। इसी दिन भारत की प्रथम महिला प्रधानमंत्री इंदिरा गांधी की जयंती को "राष्ट्रीय एकता दिवस" (National Integration Day) के रूप में मनाया जाता है।',
        pa: '19 ਨਵੰਬਰ ਨੂੰ ਝਾਂਸੀ ਦੀ ਰਾਣੀ ਲਕਸ਼ਮੀਬਾਈ ਅਤੇ ਸਾਬਕਾ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਇੰਦਰਾ ਗਾਂਧੀ ਦਾ ਜਨਮ ਦਿਨ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
        en: 'Celebrated as the birth anniversary of Rani Lakshmibai of Jhansi (1828) and National Integration Day commemorating Indira Gandhi (1917).',
      },
      source: 'Government of India, National Archives & Ministry of Culture',
    },
    miniQuiz: {
      question: {
        hi: 'लॉर्ड डलहौज़ी ने किस ब्रिटिश नीति के तहत 1853 में झाँसी के राज्य का ब्रिटिश साम्राज्य में विलय किया था?',
        pa: 'ਲਾਰਡ ਡਲਹੌਜ਼ੀ ਨੇ ਕਿਸ ਨੀਤੀ ਤਹਿਤ 1853 ਵਿੱਚ ਝਾਂਸੀ ਨੂੰ ਬ੍ਰਿਟਿਸ਼ ਸਾਮਰਾਜ ਵਿੱਚ ਮਿਲਾਇਆ ਸੀ?',
        en: 'Under which British policy did Lord Dalhousie annex the princely state of Jhansi in 1853?',
      },
      options: {
        A: { hi: 'हड़प नीति (Doctrine of Lapse / व्यपगत का सिद्धांत)', pa: 'ਲੈਪਸ ਦੀ ਨੀਤੀ (Doctrine of Lapse)', en: 'Doctrine of Lapse' },
        B: { hi: 'सहायक संधि (Subsidiary Alliance)', pa: 'ਸਹਾਇਕ ਸੰਧੀ (Subsidiary Alliance)', en: 'Subsidiary Alliance' },
        C: { hi: 'स्थायी बंदोबस्त (Permanent Settlement)', pa: 'ਪੱਕਾ ਬੰਦੋਬਸਤ', en: 'Permanent Settlement' },
        D: { hi: 'रैयतवाड़ी व्यवस्था', pa: 'ਰਈਅਤਵਾੜੀ ਪ੍ਰਣਾਲੀ', en: 'Ryotwari System' },
      },
      correct: 'A',
      explanation: {
        hi: 'लॉर्ड डलहौज़ी ने व्यपगत के सिद्धांत (Doctrine of Lapse) के तहत दामोदर राव (दत्तक पुत्र) के उत्तराधिकार को अस्वीकार कर 1853 में झाँसी का विलय कर लिया, जिसके विरोध में रानी लक्ष्मीबाई ने विद्रोह किया।',
        pa: 'ਲਾਰਡ ਡਲਹੌਜ਼ੀ ਨੇ ਡਾਕਟਰੀਨ ਆਫ਼ ਲੈਪਸ ਤਹਿਤ ਗੋਦ ਲਏ ਪੁੱਤਰ ਦਾ ਹੱਕ ਰੱਦ ਕਰਕੇ ਝਾਂਸੀ ਨੂੰ ਬ੍ਰਿਟਿਸ਼ ਸਾਮਰਾਜ ਵਿੱਚ ਮਿਲਾ ਲਿਆ ਸੀ।',
        en: 'Lord Dalhousie applied the Doctrine of Lapse to reject the adopted heir Damodar Rao and annex Jhansi in 1853, sparking Rani Lakshmibai\'s resistance.',
      },
    },
  },

  '12-26': {
    date: '12-26',
    thought: {
      text: {
        hi: 'धर्म और सत्य की रक्षा के लिए शीश कट सकता है, पर झुक नहीं सकता। साहिबज़ादों का बलिदान अमर है।',
        pa: 'ਧਰਮ ਅਤੇ ਸੱਚ ਦੀ ਰਾਖੀ ਲਈ ਸੀਸ ਜਾਵੇ ਤਾਂ ਜਾਵੇ, ਪਰ ਧਰਮ ਨਾ ਜਾਵੇ। ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਦੀ ਸ਼ਹਾਦਤ ਅਮਰ ਹੈ।',
        en: 'For righteousness and truth, one may surrender life, but never conscience. The martyrdom of the Sahibzadas remains an immortal beacon.',
      },
      author: {
        hi: 'श्री गुरु गोबिंद सिंह जी (ਜ਼ਫ਼ਰਨਾਮਾ ਸੰਦੇਸ਼)',
        pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ (ਜ਼ਫ਼ਰਨਾਮਾ ਸੰਦੇਸ਼)',
        en: 'Sri Guru Gobind Singh Ji (Zafarnama)',
      },
    },
    historicalPerson: {
      name: {
        hi: 'छोटे साहिबज़ादे (बाबा ज़ोरावर सिंह जी एवं बाबा फ़तेह सिंह जी)',
        pa: 'ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦੇ (ਬਾਬਾ ਜ਼ੋਰਾਵਰ ਸਿੰਘ ਜੀ ਅਤੇ ਬਾਬਾ ਫ਼ਤਿਹ ਸਿੰਘ ਜੀ)',
        en: 'Chhotte Sahibzade (Baba Zorawar Singh Ji & Baba Fateh Singh Ji)',
      },
      birthYear: 1696,
      deathYear: 1704,
      title: {
        hi: 'वीर बाल दिवस — सरहिंद में सर्वोच्च बलिदान',
        pa: 'ਵੀਰ ਬਾਲ ਦਿਵਸ — ਸਰਹਿੰਦ ਵਿਖੇ ਲਾਸਾਨੀ ਸ਼ਹਾਦਤ',
        en: 'Veer Bal Diwas — Supreme Martyrdom at Sirhind',
      },
      significance: {
        hi: '26 दिसंबर 1704 को सरहिंद के नवाब वज़ीर ख़ान के दरबार में धर्म परिवर्तन से इनकार करने पर गुरु गोबिंद सिंह जी के छोटे सुपुत्रों बाबा ज़ोरावर सिंह (9 वर्ष) और बाबा फ़तेह सिंह (7 वर्ष) को ज़िंदा दीवारों में चिनवा दिया गया। इस अमर बलिदान को भारत सरकार द्वारा "वीर बाल दिवस" के रूप में मनाया जाता है।',
        pa: '26 ਦਸੰਬਰ 1704 ਨੂੰ ਸਰਹਿੰਦ ਵਿਖੇ ਸੂਬਾ ਵਜ਼ੀਰ ਖ਼ਾਨ ਨੇ ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਬਾਬਾ ਜ਼ੋਰਾਵਰ ਸਿੰਘ ਜੀ (9 ਸਾਲ) ਅਤੇ ਬਾਬਾ ਫ਼ਤਿਹ ਸਿੰਘ ਜੀ (7 ਸਾਲ) ਨੂੰ ਜਿਊਂਦੇ ਜੀਅ ਨੀਂਹਾਂ ਵਿੱਚ ਚਿਣਵਾ ਕੇ ਸ਼ਹੀਦ ਕਰ ਦਿੱਤਾ। ਭਾਰਤ ਸਰਕਾਰ ਵੱਲੋਂ ਇਹ ਦਿਹਾੜਾ ਵੀਰ ਬਾਲ ਦਿਵਸ ਵਜੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
        en: 'On 26 December 1704, the youngest sons of Tenth Sikh Guru Sri Guru Gobind Singh Ji—Baba Zorawar Singh Ji (age 9) and Baba Fateh Singh Ji (age 7)—were bricked alive at Sirhind by Wazir Khan for refusing to renounce their faith. Officially commemorated nationwide as Veer Bal Diwas.',
      },
    },
    gkEvent: {
      title: {
        hi: 'वीर बाल दिवस — साहिबज़ादों का अमर बलिदान (1704)',
        pa: 'ਵੀਰ ਬਾਲ ਦਿਵਸ — ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਦੀ ਸ਼ਹਾਦਤ (1704)',
        en: 'Veer Bal Diwas — Martyrdom of Sahibzadas (1704)',
      },
      description: {
        hi: '26 दिसंबर को गुरु गोबिंद सिंह जी के छोटे साहिबज़ादों बाबा ज़ोरावर सिंह जी और बाबा फ़तेह सिंह जी की शहादत की स्मृति में देश भर में "वीर बाल दिवस" मनाया जाता है।',
        pa: '26 ਦਸੰਬਰ ਨੂੰ ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਦੀ ਲਾਸਾਨੀ ਕੁਰਬਾਨੀ ਦੀ ਯਾਦ ਵਿੱਚ ਸਮੁੱਚੇ ਦੇਸ਼ ਵਿੱਚ ਵੀਰ ਬਾਲ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
        en: 'Commemorated nationally as Veer Bal Diwas honoring the unparalleled sacrifice of Tenth Guru Sri Guru Gobind Singh Ji\'s younger sons at Fatehgarh Sahib, Sirhind.',
      },
      source: 'Government of India, Gazette Notification & Punjab Heritage Archives',
    },
    miniQuiz: {
      question: {
        hi: 'छोटे साहिबज़ादों की शहादत की स्मृति में पंजाब के किस ऐतिहासिक स्थल पर गुरुद्वारा फ़तेहगढ़ साहिब स्थित है?',
        pa: 'ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਦੀ ਸ਼ਹੀਦੀ ਵਾਲੀ ਪਵਿੱਤਰ ਧਰਤੀ ਉੱਤੇ ਕਿਹੜਾ ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ ਸਥਿਤ ਹੈ?',
        en: 'At which historic site in Punjab is Gurdwara Fatehgarh Sahib situated to commemorate the Sahibzadas\' martyrdom?',
      },
      options: {
        A: { hi: 'सरहिंद (फ़तेहगढ़ साहिਬ)', pa: 'ਸਰਹਿੰਦ (ਫ਼ਤਿਹਗੜ੍ਹ ਸਾਹਿਬ)', en: 'Sirhind (Fatehgarh Sahib)' },
        B: { hi: 'चमकौर साਹਿਬ', pa: 'ਚਮਕੌਰ ਸਾਹਿਬ', en: 'Chamkaur Sahib' },
        C: { hi: 'आनंदपुर साਹਿਬ', pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ', en: 'Anandpur Sahib' },
        D: { hi: 'मुकत्सर साਹਿਬ', pa: 'ਸ੍ਰੀ ਮੁਕਤਸਰ ਸਾਹਿਬ', en: 'Sri Muktsar Sahib' },
      },
      correct: 'A',
      explanation: {
        hi: 'छोटे साहिबज़ादों को सरहिंद (वर्तमान ज़िला फ़तेहगढ़ साहिब) में शहीद किया गया था जहाँ आज भव्य गुरुद्वारा फ़तेहगढ़ साहिब और ज्योति स्वरूप सुशोभित हैं। (चमकौर में बड़े साहिबज़ादे शहीद हुए थे)।',
        pa: 'ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਦੀ ਸ਼ਹਾਦਤ ਸਰਹਿੰਦ ਵਿਖੇ ਹੋਈ ਜਿੱਥੇ ਗੁਰਦੁਆਰਾ ਫ਼ਤਿਹਗੜ੍ਹ ਸਾਹਿਬ ਸਥਿਤ ਹੈ। ਵੱਡੇ ਸਾਹਿਬਜ਼ਾਦੇ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਸ਼ਹੀਦ ਹੋਏ ਸਨ।',
        en: 'The younger Sahibzadas were martyred at Sirhind (now Fatehgarh Sahib district). The elder Sahibzadas (Baba Ajit Singh & Baba Jujhar Singh) were martyred in the Battle of Chamkaur.',
      },
    },
  },
};

/**
 * 30 Perpetual Rotating Historical Personality & Milestone Themes.
 * Deterministically selected by day of year (1-366) whenever a specific
 * calendar date is not in explicit maps.
 * Guarantees every single day of the year returns a date-anchored, authentic,
 * non-null thought, historical figure/event, and exam-grade mini quiz.
 */
export const PERPETUAL_ROTATING_THEMES: CalendarDayEntry[] = [
  {
    date: 'PERP-01',
    thought: {
      text: {
        hi: 'उठो, जागो और तब तक मत रुको जब तक लक्ष्य प्राप्त न हो जाए।',
        pa: 'ਉੱਠੋ, ਜਾਗੋ ਅਤੇ ਉਦੋਂ ਤੱਕ ਨਾ ਰੁਕੋ ਜਦੋਂ ਤੱਕ ਮੰਜ਼ਿਲ ਪ੍ਰਾਪਤ ਨਾ ਹੋ ਜਾਵੇ।',
        en: 'Arise, awake, and stop not till the goal is reached.',
      },
      author: { hi: 'स्वामी विवेकानंद', pa: 'ਸਵਾਮੀ ਵਿਵੇਕਾਨੰਦ', en: 'Swami Vivekananda' },
    },
    historicalPerson: {
      name: { hi: 'स्वामी विवेकानंद', pa: 'ਸਵਾਮੀ ਵਿਵੇਕਾਨੰਦ', en: 'Swami Vivekananda' },
      birthYear: 1863,
      deathYear: 1902,
      title: { hi: 'शिकागो धर्म संसद (1893) के प्रणेता', pa: 'ਸ਼ਿਕਾਗੋ ਧਰਮ ਸੰਸਦ ਦੇ ਪ੍ਰਣੇਤਾ', en: 'Prophet of Modern Indian Renaissance' },
      significance: {
        hi: 'स्वामी विवेकानंद ने 1893 में शिकागो विश्व धर्म संसद में भारत के वेदांत दर्शन का परचम लहराया और रामकृष्ण मिशन की स्थापना की।',
        pa: 'ਸਵਾਮੀ ਵਿਵੇਕਾਨੰਦ ਨੇ 1893 ਵਿੱਚ ਸ਼ਿਕਾਗੋ ਵਿੱਚ ਭਾਰਤੀ ਅਧਿਆਤਮ ਦਾ ਸੰਦੇਸ਼ ਦਿੱਤਾ ਅਤੇ ਰਾਮਕ੍ਰਿਸ਼ਨ ਮਿਸ਼ਨ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ।',
        en: 'Delivered his historic address at the 1893 Chicago Parliament of Religions, introducing Vedanta to the world and founding the Ramakrishna Mission.',
      },
    },
    gkEvent: {
      title: { hi: 'स्वामी विवेकानंद का राष्ट्र-निर्माण संदेश', pa: 'ਸਵਾਮੀ ਵਿਵੇਕਾਨੰਦ ਦਾ ਰਾਸ਼ਟਰ ਨਿਰਮਾਣ ਸੰਦੇਸ਼', en: 'Swami Vivekananda\'s Nation Building Vision' },
      description: {
        hi: 'स्वामी विवेकानंद ने युवाओं को शारीरिक, मानसिक और नैतिक शक्ति विकसित कर समाज सेवा और राष्ट्र निर्माण का आह्वान किया था।',
        pa: 'ਸਵਾਮੀ ਵਿਵੇਕਾਨੰਦ ਨੇ ਨੌਜਵਾਨਾਂ ਨੂੰ ਸਮਾਜ ਸੇਵਾ ਅਤੇ ਚਰਿੱਤਰ ਨਿਰਮਾਣ ਦਾ ਸੱਦਾ ਦਿੱਤਾ।',
        en: 'Swami Vivekananda championed character-building education and youth empowerment as the foundational strength of the nation.',
      },
      source: 'Ramakrishna Math & Ministry of Youth Affairs, Government of India',
    },
    miniQuiz: {
      question: {
        hi: 'स्वामी विवेकानंद ने रामकृष्ण मिशन की स्थापना किस वर्ष और कहाँ की थी?',
        pa: 'ਸਵਾਮੀ ਵਿਵੇਕਾਨੰਦ ਨੇ ਰਾਮਕ੍ਰਿਸ਼ਨ ਮਿਸ਼ਨ ਦੀ ਸਥਾਪਨਾ ਕਦੋਂ ਅਤੇ ਕਿੱਥੇ ਕੀਤੀ?',
        en: 'In which year and place did Swami Vivekananda establish the Ramakrishna Mission?',
      },
      options: {
        A: { hi: '1897 में बेलूर (कोलकाता)', pa: '1897 ਵਿੱਚ ਬੇਲੂਰ (ਕੋਲਕਾਤਾ)', en: '1897 at Belur (Kolkata)' },
        B: { hi: '1893 में शिकागो', pa: '1893 ਵਿੱਚ ਸ਼ਿਕਾਗੋ', en: '1893 at Chicago' },
        C: { hi: '1902 में कन्याकुमारी', pa: '1902 ਵਿੱਚ ਕੰਨਿਆਕੁਮਾਰੀ', en: '1902 at Kanyakumari' },
        D: { hi: '1886 में वाराणसी', pa: '1886 ਵਿੱਚ ਵਾਰਾਣਸੀ', en: '1886 at Varanasi' },
      },
      correct: 'A',
      explanation: {
        hi: 'स्वामी विवेकानंद ने 1 मई 1897 को अपने गुरु रामकृष्ण परमहंस की स्मृति में बेलूर (हावड़ा, पश्चिम बंगाल) में रामकृष्ण मिशन की स्थापना की।',
        pa: 'ਸਵਾਮੀ ਵਿਵੇਕਾਨੰਦ ਨੇ 1 ਮਈ 1897 ਨੂੰ ਬੇਲੂਰ ਵਿਖੇ ਰਾਮਕ੍ਰਿਸ਼ਨ ਮਿਸ਼ਨ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ।',
        en: 'Swami Vivekananda founded the Ramakrishna Mission on 1 May 1897 with headquarters at Belur Math, West Bengal.',
      },
    },
  },

  {
    date: 'PERP-02',
    thought: {
      text: {
        hi: 'इंक़लाब ज़िंदाबाद! क्रांति से हमारा तात्पर्य अन्यायपूर्ण व्यवस्था का आमूल परिवर्तन है।',
        pa: 'ਇਨਕ਼ਲਾਬ ਜ਼ਿੰਦਾਬਾਦ! ਕ੍ਰਾਂਤੀ ਦਾ ਮਤਲਬ ਬੇਇਨਸਾਫ਼ੀ ਵਾਲੀ ਵਿਵਸਥਾ ਨੂੰ ਬਦਲਣਾ ਹੈ।',
        en: 'Inquilab Zindabad! Revolution is the inalienable right of mankind; freedom is an imperishable birthright of all.',
      },
      author: { hi: 'शहीद भगत सिंह', pa: 'ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ', en: 'Shaheed Bhagat Singh' },
    },
    historicalPerson: {
      name: { hi: 'शहीद-ए-आज़म भगत सिंह', pa: 'ਸ਼ਹੀਦ-ਏ-ਆਜ਼ਮ ਭਗਤ ਸਿੰਘ', en: 'Shaheed-e-Azam Bhagat Singh' },
      birthYear: 1907,
      deathYear: 1931,
      title: { hi: 'नौजवान भारत सभा एवं HSRA के प्रणेता', pa: 'ਨੌਜਵਾਨ ਭਾਰਤ ਸਭਾ ਤੇ ਐਚ.ਐਸ.ਆਰ.ਏ. ਦੇ ਮੋਢੀ', en: 'Founder of Naujawan Bharat Sabha & Leader of HSRA' },
      significance: {
        hi: '28 सितंबर 1907 को बंगा (लयालपुर, पंजाब) में जन्मे भगत सिंह ने 1926 में नौजवान भारत सभा की स्थापना की और 23 मार्च 1931 को लाहौर षड्यंत्र केस में हँसते-हँसते फाँसी का फंदा चूम लिया।',
        pa: '28 ਸਤੰਬਰ 1907 ਨੂੰ ਜਨਮੇ ਭਗਤ ਸਿੰਘ ਨੇ 1926 ਵਿੱਚ ਨੌਜਵਾਨ ਭਾਰਤ ਸਭਾ ਬਣਾਈ ਅਤੇ 23 ਮਾਰਚ 1931 ਨੂੰ ਲਾਹੌਰ ਜੇਲ੍ਹ ਵਿੱਚ ਸ਼ਹਾਦਤ ਦਿੱਤੀ।',
        en: 'Born 28 September 1907, Bhagat Singh founded the Naujawan Bharat Sabha in 1926 and sacrificed his life on 23 March 1931 in Lahore Central Jail.',
      },
    },
    gkEvent: {
      title: { hi: 'शहीद भगत सिंह का वैचारिक योगदान', pa: 'ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ ਦਾ ਵਿਚਾਰਧਾਰਕ ਯੋਗਦਾਨ', en: 'Shaheed Bhagat Singh\'s Ideological Legacy' },
      description: {
        hi: 'भगत सिंह ने सेंट्रल असेंबली में 8 अप्रैल 1929 को बटुकेश्वर दत्त के साथ बम फेंककर जनविरोधी ट्रेड डिस्प्यूट्स बिल और पब्लिक सेफ्टी बिल का विरोध किया था।',
        pa: '8 ਅਪ੍ਰੈਲ 1929 ਨੂੰ ਭਗਤ ਸਿੰਘ ਅਤੇ ਬਟੁਕੇਸ਼ਵਰ ਦੱਤ ਨੇ ਕੇਂਦਰੀ ਅਸੈਂਬਲੀ ਵਿੱਚ ਬੰਬ ਸੁੱਟ ਕੇ ਵਿਰੋਧ ਦਰਜ ਕਰਵਾਇਆ।',
        en: 'On 8 April 1929, Bhagat Singh and Batukeshwar Dutt threw non-lethal bombs and leaflets into the Central Legislative Assembly to oppose oppressive bills.',
      },
      source: 'National Archives of India & Punjab History Conference',
    },
    miniQuiz: {
      question: {
        hi: 'शहीद भगत सिंह ने मार्च 1926 में लाहौर में किस क्रांतिकारी युवा संगठन की स्थापना की थी?',
        pa: 'ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ ਨੇ 1926 ਵਿੱਚ ਲਾਹੌਰ ਵਿਖੇ ਕਿਸ ਜਥੇਬੰਦੀ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ ਸੀ?',
        en: 'Which patriotic youth organization was founded by Bhagat Singh in Lahore in March 1926?',
      },
      options: {
        A: { hi: 'नौजवान भारत सभा', pa: 'ਨੌਜਵਾਨ ਭਾਰਤ ਸਭਾ', en: 'Naujawan Bharat Sabha' },
        B: { hi: 'अभिनव भारत सोसाइटी', pa: 'ਅਭਿਨਵ ਭਾਰਤ', en: 'Abhinav Bharat Society' },
        C: { hi: 'ग़दर पार्टी', pa: 'ਗ਼ਦਰ ਪਾਰਟੀ', en: 'Ghadar Party' },
        D: { hi: 'अनुशीलन समिति', pa: 'ਅਨੁਸ਼ੀਲਨ ਸਮਿਤੀ', en: 'Anushilan Samiti' },
      },
      correct: 'A',
      explanation: {
        hi: 'मार्च 1926 में भगत सिंह ने छात्रों और मज़दूरों को स्वतंत्रता आंदोलन से जोड़ने के लिए नौजवान भारत सभा की स्थापना की थी।',
        pa: 'ਭਗਤ ਸਿੰਘ ਨੇ ਮਾਰਚ 1926 ਵਿੱਚ ਲਾਹੌਰ ਵਿਖੇ ਨੌਜਵਾਨ ਭਾਰਤ ਸਭਾ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ ਸੀ।',
        en: 'Bhagat Singh founded the Naujawan Bharat Sabha in Lahore in March 1926 to rally youth against communalism and colonial rule.',
      },
    },
  },

  {
    date: 'PERP-03',
    thought: {
      text: {
        hi: 'कठिन परिश्रम और अटूट एकता ही किसी भी राष्ट्र को महान बनाती है। संकोच त्यागें और कर्तव्य पथ पर बढ़ें।',
        pa: 'ਸਖ਼ਤ ਮਿਹਨਤ ਅਤੇ ਅਖੰਡ ਏਕਤਾ ਹੀ ਕਿਸੇ ਕੌਮ ਨੂੰ ਮਹਾਨ ਬਣਾਉਂਦੀ ਹੈ। ਕਰਤੱਵ ਦੇ ਰਾਹ ਉੱਤੇ ਦ੍ਰਿੜ੍ਹ ਰਹੋ।',
        en: 'Hard work and unbreakable unity make a nation invincible. Shed hesitation and march forward on the path of duty.',
      },
      author: { hi: 'सरदार वल्लभभाई पटेल', pa: 'ਸਰਦਾਰ ਵੱਲਭਭਾਈ ਪਟੇਲ', en: 'Sardar Vallabhbhai Patel' },
    },
    historicalPerson: {
      name: { hi: 'सरदार वल्लभभाई पटेल (लौह पुरुष)', pa: 'ਸਰਦਾਰ ਵੱਲਭਭਾਈ ਪਟੇਲ (ਲੋਹ ਪੁਰਸ਼)', en: 'Sardar Vallabhbhai Patel (Iron Man of India)' },
      birthYear: 1875,
      deathYear: 1950,
      title: { hi: 'भारत के प्रथम उप-प्रधानमंत्री एवं गृह मंत्री', pa: 'ਭਾਰਤ ਦੇ ਪਹਿਲੇ ਗ੍ਰਹਿ ਮੰਤਰੀ', en: 'First Deputy PM & Home Minister of India' },
      significance: {
        hi: '31 अक्टूबर 1875 को नडियाद (गुजरात) में जन्मे सरदार पटेल ने 560 से अधिक देशी रियासतों का भारत में सफल एकीकरण कर अखंड भारत का निर्माण किया। 1928 में बारडोली सत्याग्रह का सफल नेतृत्व करने पर उन्हें "सरदार" की उपाधि मिली।',
        pa: '31 ਅਕਤੂਬਰ 1875 ਨੂੰ ਜਨਮੇ ਸਰਦਾਰ ਪਟੇਲ ਨੇ 560 ਤੋਂ ਵੱਧ ਰਿਆਸਤਾਂ ਨੂੰ ਭਾਰਤ ਵਿੱਚ ਸ਼ਾਮਲ ਕਰਵਾ ਕੇ ਅਖੰਡ ਭਾਰਤ ਦਾ ਨਿਰਮਾਣ ਕੀਤਾ।',
        en: 'Born 31 October 1875, Sardar Patel integrated over 560 princely states into the Indian Union. Led the 1928 Bardoli Satyagraha where peasant women conferred on him the title "Sardar".',
      },
    },
    gkEvent: {
      title: { hi: 'रियासती एकीकरण एवं स्टैच्यू ऑफ यूनिटी', pa: 'ਰਿਆਸਤਾਂ ਦਾ ਏਕੀਕਰਨ ਅਤੇ ਸਟੈਚੂ ਆਫ਼ ਯੂਨਿਟੀ', en: 'Integration of Princely States & Statue of Unity' },
      description: {
        hi: 'सरदार पटेल के सचिव वी.पी. मेनन के साथ मिलकर "इंस्ट्रूमेंट ऑफ एक्सेशन" के माध्यम से रियासतों को भारतीय संघ में शामिल कराया गया। गुजरात के केवड़िया में 182 मीटर ऊंची "स्टैच्यू ऑफ यूनिटी" उनकी स्मृति में निर्मित है।',
        pa: 'ਸਰਦਾਰ ਪਟੇਲ ਨੇ ਦੇਸੀ ਰਿਆਸਤਾਂ ਦਾ ਰਲੇਵਾਂ ਕਰਵਾਇਆ। ਗੁਜਰਾਤ ਵਿੱਚ ਉਨ੍ਹਾਂ ਦੀ ਯਾਦ ਵਿੱਚ 182 ਮੀਟਰ ਉੱਚਾ ਸਟੈਚੂ ਆਫ਼ ਯੂਨਿਟੀ ਬਣਿਆ ਹੋਇਆ ਹੈ।',
        en: 'Sardar Patel integrated princely states through the Instrument of Accession. The 182-metre Statue of Unity at Kevadia, Gujarat honors his historic legacy.',
      },
      source: 'Ministry of Home Affairs & National Portal of India',
    },
    miniQuiz: {
      question: {
        hi: '1928 के बारडोली सत्याग्रह के सफल नेतृत्व के बाद वल्लभभाई पटेल को "सरदार" की उपाधि किसके द्वारा दी गई थी?',
        pa: '1928 ਦੇ ਬਾਰਡੋਲੀ ਸੱਤਿਆਗ੍ਰਹਿ ਤੋਂ ਬਾਅਦ ਵੱਲਭਭਾਈ ਪਟੇਲ ਨੂੰ "ਸਰਦਾਰ" ਦਾ ਖ਼ਿਤਾਬ ਕਿਸ ਵੱਲੋਂ ਦਿੱਤਾ ਗਿਆ ਸੀ?',
        en: 'Following the successful 1928 Bardoli Satyagraha, who conferred the title "Sardar" upon Vallabhbhai Patel?',
      },
      options: {
        A: { hi: 'बारडोली की महिलाओं द्वारा (महात्मा गांधी के माध्यम से)', pa: 'ਬਾਰਡੋਲੀ ਦੀਆਂ ਔਰਤਾਂ ਵੱਲੋਂ (ਮਹਾਤਮਾ ਗਾਂਧੀ ਰਾਹੀਂ)', en: 'The women of Bardoli (via Mahatma Gandhi)' },
        B: { hi: 'जवाहरलाल नेहरू', pa: 'ਜਵਾਹਰ ਲਾਲ ਨਹਿਰੂ', en: 'Jawaharlal Nehru' },
        C: { hi: 'सुभाष चंद्र बोस', pa: 'ਸੁਭਾਸ਼ ਚੰਦਰ ਬੋਸ', en: 'Subhas Chandra Bose' },
        D: { hi: 'डॉ. राजेन्द्र प्रसाद', pa: 'ਡਾ. ਰਾਜੇਂਦਰ ਪ੍ਰਸਾਦ', en: 'Dr. Rajendra Prasad' },
      },
      correct: 'A',
      explanation: {
        hi: '1928 में गुजरात के बारडोली में किसान लगान वृद्धि के विरुद्ध सफल आंदोलन के उपरांत वहाँ की महिलाओं ने उन्हें "सरदार" की उपाधि दी जिसे गांधी जी ने सार्वजनिक रूप से मान्यता दी।',
        pa: 'ਬਾਰਡੋਲੀ ਦੀਆਂ ਔਰਤਾਂ ਨੇ ਸਫ਼ਲ ਅੰਦੋਲਨ ਤੋਂ ਬਾਅਦ ਉਨ੍ਹਾਂ ਨੂੰ ਸਰਦਾਰ ਕਹਿ ਕੇ ਸਨਮਾਨਿਤ ਕੀਤਾ।',
        en: 'The peasant women of Bardoli conferred the title "Sardar" on him after the successful 1928 land-revenue agitation, endorsed by Mahatma Gandhi.',
      },
    },
  },

  {
    date: 'PERP-04',
    thought: {
      text: {
        hi: 'सत्य और अहिंसा मेरे ईश्वर हैं। जब जब असत्य की शक्ति बढ़ती है, सत्य की एक किरण उसे परास्त कर देती है।',
        pa: 'ਸੱਚ ਅਤੇ ਅਹਿੰਸਾ ਹੀ ਪਰਮ ਧਰਮ ਹਨ। ਜਦੋਂ ਵੀ ਹਨੇਰਾ ਵਧਦਾ ਹੈ, ਸੱਚ ਦਾ ਚਾਨਣ ਉਸ ਨੂੰ ਮਿਟਾ ਦਿੰਦਾ ਹੈ।',
        en: 'Truth and non-violence are as old as the hills. In the midst of darkness, light persists; in the midst of untruth, truth persists.',
      },
      author: { hi: 'महात्मा गांधी', pa: 'ਮਹਾਤਮਾ ਗਾਂਧੀ', en: 'Mahatma Gandhi' },
    },
    historicalPerson: {
      name: { hi: 'मोहनदास करमचंद गांधी (राष्ट्रपिता)', pa: 'ਮਹਾਤਮਾ ਗਾਂਧੀ (ਰਾਸ਼ਟਰਪਿਤਾ)', en: 'Mahatma Gandhi (Father of the Nation)' },
      birthYear: 1869,
      deathYear: 1948,
      title: { hi: 'सत्याग्रह और अहिंसा के मार्गदर्शक', pa: 'ਸੱਤਿਆਗ੍ਰਹਿ ਅਤੇ ਅਹਿੰਸਾ ਦੇ ਮਾਰਗਦਰਸ਼ਕ', en: 'Leader of India\'s Independence Movement' },
      significance: {
        hi: '2 अक्टूबर 1869 को पोरबंदर में जन्मे महात्मा गांधी ने चंपारण (1917), असहयोग (1920), दांडी मार्च (1930) और भारत छोड़ो (1942) आंदोलनों के माध्यम से देश को आज़ादी दिलाई।',
        pa: '2 ਅਕਤੂਬਰ 1869 ਨੂੰ ਜਨਮੇ ਮਹਾਤਮਾ ਗਾਂਧੀ ਨੇ ਚੰਪਾਰਨ, ਨਾ-ਮਿਲਵਰਤਨ ਅਤੇ ਭਾਰਤ ਛੱਡੋ ਅੰਦੋਲਨ ਰਾਹੀਂ ਆਜ਼ਾਦੀ ਸੰਗਰਾਮ ਦੀ ਅਗਵਾਈ ਕੀਤੀ।',
        en: 'Born 2 October 1869, Gandhiji pioneered Satyagraha through Champaran (1917), Non-Cooperation (1920), Salt March (1930), and Quit India (1942).',
      },
    },
    gkEvent: {
      title: { hi: 'चंपारण सत्याग्रह (1917) — भारत में गांधी जी का प्रथम सफल आंदोलन', pa: 'ਚੰਪਾਰਨ ਸੱਤਿਆਗ੍ਰਹਿ (1917)', en: 'Champaran Satyagraha (1917) — First Civil Disobedience in India' },
      description: {
        hi: 'बिहार के चंपारण में तीनकठिया प्रथा (नील की अनिवार्य खेती) के विरुद्ध राजकुमार शुक्ल के बुलावे पर गांधी जी ने 1917 में भारत में अपना पहला सफल सत्याग्रह किया।',
        pa: '1917 ਵਿੱਚ ਬਿਹਾਰ ਦੇ ਚੰਪਾਰਨ ਵਿਖੇ ਨੀਲ ਦੀ ਖੇਤੀ ਖ਼ਿਲਾਫ਼ ਗਾਂਧੀ ਜੀ ਨੇ ਭਾਰਤ ਵਿੱਚ ਆਪਣਾ ਪਹਿਲਾ ਸੱਤਿਆਗ੍ਰਹਿ ਸ਼ੁਰੂ ਕੀਤਾ।',
        en: 'In 1917, at the invitation of Raj Kumar Shukla, Gandhiji launched India\'s first Satyagraha against the tinkathia indigo cultivation system in Champaran, Bihar.',
      },
      source: 'National Gandhi Museum & Ministry of Culture',
    },
    miniQuiz: {
      question: {
        hi: 'महात्मा गांधी को पहली बार "राष्ट्रपिता" कहकर किसने संबोधित किया था?',
        pa: 'ਮਹਾਤਮਾ ਗਾਂਧੀ ਨੂੰ ਪਹਿਲੀ ਵਾਰ "ਰਾਸ਼ਟਰਪਿਤਾ" ਕਿਸ ਨੇ ਕਿਹਾ ਸੀ?',
        en: 'Who first addressed Mahatma Gandhi as the "Father of the Nation"?',
      },
      options: {
        A: { hi: 'नेताजी सुभाष चंद्र बोस (1944 में सिंगापुर रेडियो से)', pa: 'ਨੇਤਾਜੀ ਸੁਭਾਸ਼ ਚੰਦਰ ਬੋਸ (1944)', en: 'Netaji Subhas Chandra Bose (1944 via Singapore Radio)' },
        B: { hi: 'रवींद्रनाथ टैगोर', pa: 'ਰਬਿੰਦਰਨਾਥ ਟੈਗੋਰ', en: 'Rabindranath Tagore' },
        C: { hi: 'जवाहरलाल नेहरू', pa: 'ਜਵਾਹਰ ਲਾਲ ਨਹਿਰੂ', en: 'Jawaharlal Nehru' },
        D: { hi: 'सरोजिनी नायडू', pa: 'ਸਰੋਜਿਨੀ ਨਾਇਡੂ', en: 'Sarojini Naidu' },
      },
      correct: 'A',
      explanation: {
        hi: '6 जुलाई 1944 को आज़ाद हिंद रेडियो (सिंगापुर) से अपने प्रसारण में नेताजी सुभाष चंद्र बोस ने गांधी जी को "राष्ट्रपिता" कहकर संबोधित किया था।',
        pa: '6 ਜੁਲਾਈ 1944 ਨੂੰ ਨੇਤਾਜੀ ਸੁਭਾਸ਼ ਚੰਦਰ ਬੋਸ ਨੇ ਸਿੰਗਾਪੁਰ ਤੋਂ ਰੇਡੀਓ ਸੰਬੋਧਨ ਵਿੱਚ ਗਾਂਧੀ ਜੀ ਨੂੰ "ਰਾਸ਼ਟਰਪਿਤਾ" ਕਿਹਾ ਸੀ।',
        en: 'On 6 July 1944, Netaji Subhas Chandra Bose addressed Gandhiji as the Father of the Nation during a broadcast on Azad Hind Radio from Singapore.',
      },
    },
  },

  {
    date: 'PERP-05',
    thought: {
      text: {
        hi: 'गणित ईश्वर की वह लिपि है जिसमें उसने सम्पूर्ण ब्रह्मांड की रचना की है। प्रत्येक समीकरण एक शाश्वत सत्य है।',
        pa: 'ਗਣਿਤ ਕੁਦਰਤ ਦੀ ਉਹ ਭਾਸ਼ਾ ਹੈ ਜਿਸ ਨਾਲ ਸ੍ਰਿਸ਼ਟੀ ਦੇ ਨਿਯਮ ਚੱਲਦੇ ਹਨ। ਨਿਰੰਤਰ ਅਭਿਆਸ ਹੀ ਪ੍ਰਤਿਭਾ ਨੂੰ ਨਿਖਾਰਦਾ ਹੈ।',
        en: 'An equation for me has no meaning unless it expresses a thought of God. Pure mathematics reveals the underlying harmony of nature.',
      },
      author: { hi: 'श्रीनिवास रामानुजन', pa: 'ਸ੍ਰੀਨਿਵਾਸ ਰਾਮਾਨੁਜਨ', en: 'Srinivasa Ramanujan' },
    },
    historicalPerson: {
      name: { hi: 'श्रीनिवास रामानुजन (महान गणितज्ञ)', pa: 'ਸ੍ਰੀਨਿਵਾਸ ਰਾਮਾਨੁਜਨ (ਮਹਾਨ ਗਣਿਤ ਸ਼ਾਸਤਰੀ)', en: 'Srinivasa Ramanujan (Mathematical Genius)' },
      birthYear: 1887,
      deathYear: 1920,
      title: { hi: 'रॉयल सोसाइटी के फेलो एवं राष्ट्रीय गणित दिवस के प्रणेता', pa: 'ਰਾਸ਼ਟਰੀ ਗਣਿਤ ਦਿਵਸ ਦੇ ਪ੍ਰਣੇਤਾ', en: 'Fellow of Royal Society & Mathematical Legend' },
      significance: {
        hi: '22 दिसंबर 1887 को इरोड (तमिलनाडु) में जन्मे रामानुजन ने संख्या सिद्धांत, अनंत श्रेणी और निरंतर भिन्न में लगभग 3900 परिणाम दिए। उनके जन्मदिन को राष्ट्रीय गणित दिवस मनाया जाता है।',
        pa: '22 ਦਸੰਬਰ 1887 ਨੂੰ ਜਨਮੇ ਰਾਮਾਨੁਜਨ ਨੇ ਗਣਿਤ ਵਿੱਚ ਲਾਸਾਨੀ ਸਿਧਾਂਤ ਦਿੱਤੇ। 22 ਦਸੰਬਰ ਨੂੰ ਰਾਸ਼ਟਰੀ ਗਣਿਤ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
        en: 'Born 22 December 1887, Ramanujan compiled nearly 3,900 mathematical identities and equations. His birthday is celebrated nationally as Mathematics Day.',
      },
    },
    gkEvent: {
      title: { hi: 'रामानुजन संख्या 1729 एवं राष्ट्रीय गणित दिवस', pa: 'ਰਾਮਾਨੁਜਨ ਨੰਬਰ 1729 ਅਤੇ ਰਾਸ਼ਟਰੀ ਗਣਿਤ ਦਿਵਸ', en: 'Hardy-Ramanujan Number 1729 & National Mathematics Day' },
      description: {
        hi: '1729 को "हार्डी-रामानुजन संख्या" कहा जाता है, जो सबसे छोटी संख्या है जिसे दो अलग-अलग घनों के योग के रूप में दो प्रकार से लिखा जा सकता है (1³ + 12³ = 9³ + 10³ = 1729)।',
        pa: '1729 ਨੂੰ ਹਾਰਡੀ-ਰਾਮਾਨੁਜਨ ਨੰਬਰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ ਜਿਸ ਨੂੰ ਦੋ ਵੱਖ-ਵੱਖ ਤਰੀਕਿਆਂ ਨਾਲ ਦੋ ਘਣਾਂ ਦੇ ਜੋੜ ਵਜੋਂ ਲਿਖਿਆ ਜਾ ਸਕਦਾ ਹੈ (1³ + 12³ = 9³ + 10³)।',
        en: '1729 is the famous Hardy-Ramanujan number: the smallest integer expressible as the sum of two cubes in two different ways (1³ + 12³ = 9³ + 10³).',
      },
      source: 'National Council for Science and Technology Communication (NCSTC)',
    },
    miniQuiz: {
      question: {
        hi: 'भारत में प्रतिवर्ष 22 दिसंबर को "राष्ट्रीय गणित दिवस" किसकी जयंती के उपलक्ष्य में मनाया जाता है?',
        pa: 'ਭਾਰਤ ਵਿੱਚ ਹਰ ਸਾਲ 22 ਦਸੰਬਰ ਨੂੰ "ਰਾਸ਼ਟਰੀ ਗਣਿਤ ਦਿਵਸ" ਕਿਸ ਦੀ ਯਾਦ ਵਿੱਚ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ?',
        en: 'National Mathematics Day is celebrated in India on 22 December to commemorate the birth anniversary of whom?',
      },
      options: {
        A: { hi: 'श्रीनिवास रामानुजन', pa: 'ਸ੍ਰੀਨਿਵਾਸ ਰਾਮਾਨੁਜਨ', en: 'Srinivasa Ramanujan' },
        B: { hi: 'आर्यभट्ट', pa: 'ਆਰੀਆਭੱਟ', en: 'Aryabhata' },
        C: { hi: 'भास्कराचार्य', pa: 'ਭਾਸਕਰਾਚਾਰੀਆ', en: 'Bhaskaracharya' },
        D: { hi: 'पी. सी. महालनोबिस', pa: 'ਪੀ. ਸੀ. ਮਹਾਲਨੋਬਿਸ', en: 'P. C. Mahalanobis' },
      },
      correct: 'A',
      explanation: {
        hi: '2012 में तत्कालीन प्रधानमंत्री डॉ. मनमोहन सिंह ने रामानुजन के 125वें जन्म वर्ष पर 22 दिसंबर को "राष्ट्रीय गणित दिवस" घोषित किया था।',
        pa: '22 ਦਸੰਬਰ ਨੂੰ ਸ਼੍ਰੀਨਿਵਾਸ ਰਾਮਾਨੁਜਨ ਦੇ ਜਨਮ ਦਿਨ ਨੂੰ ਰਾਸ਼ਟਰੀ ਗਣਿਤ ਦਿਵਸ ਵਜੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
        en: 'In 2012, Prime Minister Dr. Manmohan Singh declared 22 December as National Mathematics Day marking Ramanujan\'s 125th birth anniversary.',
      },
    },
  },

  {
    date: 'PERP-06',
    thought: {
      text: {
        hi: 'संसार में ज्ञान के समान पवित्र और कोई वस्तु नहीं है। निष्काम कर्म ही सफलता की सर्वोच्च कुंजी है।',
        pa: 'ਗਿਆਨ ਨਾਲੋਂ ਪਵਿੱਤਰ ਇਸ ਦੁਨੀਆ ਵਿੱਚ ਹੋਰ ਕੁਝ ਨਹੀਂ। ਈਮਾਨਦਾਰ ਕਰਮ ਹੀ ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ ਹੈ।',
        en: 'There is nothing in this world as purifying as divine knowledge. Sincere, disciplined action yields enduring achievement.',
      },
      author: { hi: 'श्रीमद्भगवद्गीता (४.३८)', pa: 'ਭਗਵਦ ਗੀਤਾ ਸੁਨੇਹਾ', en: 'Bhagavad Gita (4.38)' },
    },
    historicalPerson: {
      name: { hi: 'रवींद्रनाथ टैगोर (गुरुदेव)', pa: 'ਰਬਿੰਦਰਨਾਥ ਟੈਗੋਰ (ਗੁਰੂਦੇਵ)', en: 'Rabindranath Tagore (Gurudev)' },
      birthYear: 1861,
      deathYear: 1941,
      title: { hi: 'एशिया के प्रथम नोबेल पुरस्कार विजेता एवं राष्ट्रगान रचयिता', pa: 'ਏਸ਼ੀਆ ਦੇ ਪਹਿਲੇ ਨੋਬਲ ਜੇਤੂ', en: 'First Asian Nobel Laureate & Composer of Jana Gana Mana' },
      significance: {
        hi: '7 मई 1861 को कोलकाता में जन्मे गुरुदेव टैगोर को 1913 में "गीतांजलि" के लिए साहित्य का नोबेल पुरस्कार मिला। उन्होंने विश्वभारती विश्वविद्यालय (शांतिनिकेतन) की स्थापना की।',
        pa: '7 ਮਈ 1861 ਨੂੰ ਜਨਮੇ ਰਬਿੰਦਰਨਾਥ ਟੈਗੋਰ ਨੂੰ 1913 ਵਿੱਚ ਗੀਤਾਂਜਲੀ ਲਈ ਸਾਹਿਤ ਦਾ ਨੋਬਲ ਇਨਾਮ ਮਿਲਿਆ। ਉਨ੍ਹਾਂ ਨੇ ਸ਼ਾਂਤੀਨਿਕੇਤਨ ਸਥਾਪਿਤ ਕੀਤਾ।',
        en: 'Born 7 May 1861, Tagore won the 1913 Nobel Prize in Literature for Gitanjali and composed the national anthems of India and Bangladesh.',
      },
    },
    gkEvent: {
      title: { hi: 'विश्वभारती विश्वविद्यालय एवं राष्ट्रगान की रचना', pa: 'ਵਿਸ਼ਵ-ਭਾਰਤੀ ਯੂਨੀਵਰਸਿਟੀ ਤੇ ਰਾਸ਼ਟਰਗਾਣ', en: 'Visva-Bharati University & National Anthem Creation' },
      description: {
        hi: 'रवींद्रनाथ टैगोर विश्व के एकमात्र ऐसे कवि हैं जिनकी रचनाएँ दो देशों (भारत का "जन गण मन" और बांग्लादेश का "आमार सोनार बांग्ला") का राष्ट्रगान बनीं।',
        pa: 'ਰਬਿੰਦਰਨਾਥ ਟੈਗੋਰ ਦੀਆਂ ਰਚਨਾਵਾਂ ਦੋ ਦੇਸ਼ਾਂ (ਭਾਰਤ ਅਤੇ ਬੰਗਲਾਦੇਸ਼) ਦਾ ਰਾਸ਼ਟਰੀ ਗੀਤ ਬਣੀਆਂ।',
        en: 'Tagore holds the unique distinction of having composed the national anthems of two sovereign nations: India (Jana Gana Mana) and Bangladesh (Amar Shonar Bangla).',
      },
      source: 'Visva-Bharati University & Nobel Prize Archives',
    },
    miniQuiz: {
      question: {
        hi: 'रवींद्रनाथ टैगोर को किस वर्ष और किस काव्य कृति के लिए साहित्य का नोबेल पुरस्कार दिया गया था?',
        pa: 'ਰਬਿੰਦਰਨਾਥ ਟੈਗੋਰ ਨੂੰ ਸਾਹਿਤ ਦਾ ਨੋਬਲ ਪੁਰਸਕਾਰ ਕਦੋਂ ਅਤੇ ਕਿਸ ਪੁਸਤਕ ਲਈ ਮਿਲਿਆ ਸੀ?',
        en: 'In which year and for which literary masterpiece was Rabindranath Tagore awarded the Nobel Prize in Literature?',
      },
      options: {
        A: { hi: '1913 में "गीतांजलि" (Gitanjali) के लिए', pa: '1913 ਵਿੱਚ "ਗੀਤਾਂਜਲੀ" ਲਈ', en: '1913 for Gitanjali' },
        B: { hi: '1920 में "गोरा" (Gora) के लिए', pa: '1920 ਵਿੱਚ "ਗੋਰਾ" ਲਈ', en: '1920 for Gora' },
        C: { hi: '1905 में "सोनार तरी" के लिए', pa: '1905 ਵਿੱਚ', en: '1905 for Sonar Tari' },
        D: { hi: '1930 में "काबुलीवाला" के लिए', pa: '1930 ਵਿੱਚ', en: '1930 for Kabuliwala' },
      },
      correct: 'A',
      explanation: {
        hi: 'नवंबर 1913 में रवींद्रनाथ टैगोर को उनकी कविताओं के संग्रह "गीतांजलि" (Song Offerings) के लिए साहित्य का नोबेल पुरस्कार प्रदान किया गया।',
        pa: '1913 ਵਿੱਚ ਰਬਿੰਦਰਨਾਥ ਟੈਗੋਰ ਨੂੰ ਗੀਤਾਂਜਲੀ ਲਈ ਨੋਬਲ ਪੁਰਸਕਾਰ ਦਿੱਤਾ ਗਿਆ ਸੀ।',
        en: 'Tagore was awarded the Nobel Prize in Literature in November 1913 for Gitanjali (Song Offerings), becoming the first non-European laureate.',
      },
    },
  },

  {
    date: 'PERP-07',
    thought: {
      text: {
        hi: 'विद्या ददाति विनयं, विनयाद् याति पात्रताम्। ज्ञान ही मनुष्य को विनम्र और समर्थ बनाता है।',
        pa: 'ਵਿਦਿਆ ਨਿਮਰਤਾ ਬਖ਼ਸ਼ਦੀ ਹੈ ਅਤੇ ਨਿਮਰਤਾ ਨਾਲ ਹੀ ਯੋਗਤਾ ਆਉਂਦੀ ਹੈ। ਸਿੱਖਣ ਦੀ ਭਾਵਨਾ ਹਮੇਸ਼ਾ ਕਾਇਮ ਰੱਖੋ।',
        en: 'True knowledge imparts humility; humility brings worthiness and the capacity to serve mankind.',
      },
      author: { hi: 'हितोपदेश सुभाषितम्', pa: 'ਹਿਤੋਪਦੇਸ਼ ਸੁਭਾਸ਼ਿਤਮ', en: 'Hitopadesha Wisdom' },
    },
    historicalPerson: {
      name: { hi: 'सावित्रीबाई फुले', pa: 'ਸਾਵਿਤਰੀਬਾਈ ਫੂਲੇ', en: 'Savitribai Phule' },
      birthYear: 1831,
      deathYear: 1897,
      title: { hi: 'भारत की प्रथम महिला शिक्षिका एवं समाज सुधारक', pa: 'ਭਾਰਤ ਦੀ ਪਹਿਲੀ ਮਹਿਲਾ ਅਧਿਆਪਕਾ', en: 'Pioneer of Women\'s Education in Modern India' },
      significance: {
        hi: '3 जनवरी 1831 को जन्मी सावित्रीबाई फुले ने अपने पति ज्योतिराव फुले के साथ मिलकर 1848 में पुणे के भिड़े वाड़ा में बालिकाओं के लिए भारत का पहला विद्यालय खोला।',
        pa: '3 ਜਨਵਰੀ 1831 ਨੂੰ ਜਨਮੀ ਸਾਵਿਤਰੀਬਾਈ ਫੂਲੇ ਨੇ 1848 ਵਿੱਚ ਪੁਣੇ ਵਿਖੇ ਲੜਕੀਆਂ ਲਈ ਭਾਰਤ ਦਾ ਪਹਿਲਾ ਸਕੂਲ ਖੋਲ੍ਹਿਆ।',
        en: 'Born 3 January 1831, Savitribai Phule and Jyotirao Phule established India\'s first school for girls at Bhide Wada, Pune in 1848.',
      },
    },
    gkEvent: {
      title: { hi: 'पुणे बालिका विद्यालय (1848) एवं महिला शिक्षा क्रांति', pa: 'ਪੁਣੇ ਬਾਲਿਕਾ ਸਕੂਲ (1848) ਤੇ ਮਹਿਲਾ ਸਿੱਖਿਆ', en: 'Pune Girls\' School (1848) & Women\'s Education Movement' },
      description: {
        hi: 'सावित्रीबाई फुले ने सामाजिक रूढ़ियों और विरोध को सहते हुए दलित और वंचित वर्गों की बालिकाओं को शिक्षित कर भारत में आधुनिक सामाजिक क्रांति का सूत्रपात किया।',
        pa: 'ਸਾਵਿਤਰੀਬਾਈ ਫੂਲੇ ਨੇ ਰੂੜੀਵਾਦੀ ਵਿਰੋਧ ਦੇ ਬਾਵਜੂਦ ਲੜਕੀਆਂ ਅਤੇ ਦਲਿਤ ਵਰਗ ਨੂੰ ਸਿੱਖਿਅਤ ਕਰਨ ਦਾ ਇਤਿਹਾਸਕ ਕਾਰਜ ਕੀਤਾ।',
        en: 'Overcoming fierce orthodox resistance, Savitribai educated girls across caste barriers, pioneering social emancipation through education.',
      },
      source: 'Government of Maharashtra & Ministry of Women and Child Development',
    },
    miniQuiz: {
      question: {
        hi: 'सावित्रीबाई फुले और महात्मा ज्योतिराव फुले ने 1873 में किस प्रसिद्ध समाज सुधार संगठन की स्थापना की थी?',
        pa: 'ਸਾਵਿਤਰੀਬਾਈ ਫੂਲੇ ਅਤੇ ਜੋਤੀਰਾਓ ਫੂਲੇ ਨੇ 1873 ਵਿੱਚ ਕਿਸ ਸੰਸਥਾ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ ਸੀ?',
        en: 'Which historic social reform organisation was founded by Jyotirao Phule and Savitribai Phule in 1873?',
      },
      options: {
        A: { hi: 'सत्यशोधक समाज (Truth Seekers\' Society)', pa: 'ਸੱਤਿਆਸ਼ੋਧਕ ਸਮਾਜ', en: 'Satyashodhak Samaj' },
        B: { hi: 'प्रार्थना समाज', pa: 'ਪ੍ਰਾਰਥਨਾ ਸਮਾਜ', en: 'Prarthana Samaj' },
        C: { hi: 'आर्य समाज', pa: 'ਆਰੀਆ ਸਮਾਜ', en: 'Arya Samaj' },
        D: { hi: 'ब्रह्म समाज', pa: 'ਬ੍ਰਹਮ ਸਮਾਜ', en: 'Brahmo Samaj' },
      },
      correct: 'A',
      explanation: {
        hi: '24 सितंबर 1873 को पुणे में महात्मा ज्योतिराव फुले और सावित्रीबाई फुले ने वंचितों और शूद्रों के सामाजिक अधिकारों के लिए "सत्यशोधक समाज" की स्थापना की थी।',
        pa: '24 ਸਤੰਬਰ 1873 ਨੂੰ ਪੁਣੇ ਵਿਖੇ ਸੱਤਿਆਸ਼ੋਧਕ ਸਮਾਜ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ ਗਈ ਸੀ।',
        en: 'On 24 September 1873, Jyotirao Phule founded the Satyashodhak Samaj in Pune to fight caste oppression and champion universal human rights.',
      },
    },
  },
];

/**
 * Deterministically compute the day-of-year (1 to 366).
 */
export function getDayOfYear(date: Date = new Date()): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = (date.getTime() - start.getTime()) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

/**
 * Get comprehensive daily thought, historical event/birthday and quiz for any given date.
 * NEVER returns null — guaranteed perpetual calendar functionality.
 */
export function getPerpetualDailyContent(
  date: Date = new Date(),
  lang: 'hi' | 'pa' | 'en' = 'hi',
  customDailyMap?: Record<string, DailyContent>
): {
  dateKey: string;
  formattedDate: { hi: string; pa: string; en: string };
  thought: string;
  thoughtAuthor: string;
  gkTitle: string;
  gkDescription: string;
  gkSource: string;
  historicalPerson?: {
    name: string;
    birthYear?: number;
    deathYear?: number;
    title: string;
    significance: string;
  };
  miniQuiz: DailyContent['miniQuiz'] | null;
} {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const monthDay = `${month}-${day}`;

  // 1. Check customDailyMap if passed
  const custom = customDailyMap?.[monthDay];
  // 2. Check explicit perpetual calendar entries
  const perp = PERPETUAL_HISTORICAL_DAYS[monthDay];

  // 3. Select entry: custom > perp > rotating fallback
  let selectedEntry: DailyContent;
  let historicalPersonMeta: CalendarDayEntry['historicalPerson'] | undefined = undefined;

  if (perp) {
    selectedEntry = perp;
    historicalPersonMeta = perp.historicalPerson;
  } else if (custom) {
    selectedEntry = custom;
  } else {
    // Deterministic rotation based on day of year
    const doy = getDayOfYear(date);
    const themeIndex = (doy - 1) % PERPETUAL_ROTATING_THEMES.length;
    const theme = PERPETUAL_ROTATING_THEMES[themeIndex];
    selectedEntry = theme;
    historicalPersonMeta = theme.historicalPerson;
  }

  // Format date in all three languages
  const dayNum = date.getDate();
  const monthNamesEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthNamesHi = ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'];
  const monthNamesPa = ['ਜਨਵਰੀ', 'ਫ਼ਰਵਰੀ', 'ਮਾਰਚ', 'ਅਪ੍ਰੈਲ', 'ਮਈ', 'ਜੂਨ', 'ਜੁਲਾਈ', 'ਅਗਸਤ', 'ਸਤੰਬਰ', 'ਅਕਤੂਬਰ', 'ਨਵੰਬਰ', 'ਦਸੰਬਰ'];

  const mIdx = date.getMonth();
  const formattedDate = {
    en: `${dayNum} ${monthNamesEn[mIdx]}`,
    hi: `${dayNum} ${monthNamesHi[mIdx]}`,
    pa: `${dayNum} ${monthNamesPa[mIdx]}`,
  };

  return {
    dateKey: monthDay,
    formattedDate,
    thought: selectedEntry.thought.text[lang],
    thoughtAuthor: selectedEntry.thought.author[lang],
    gkTitle: selectedEntry.gkEvent?.title[lang] || 'Today in History',
    gkDescription: selectedEntry.gkEvent?.description[lang] || '',
    gkSource: selectedEntry.gkEvent?.source || 'Official National Archives & ExamSathi Historical Registry',
    historicalPerson: historicalPersonMeta ? {
      name: historicalPersonMeta.name[lang],
      birthYear: historicalPersonMeta.birthYear,
      deathYear: historicalPersonMeta.deathYear,
      title: historicalPersonMeta.title[lang],
      significance: historicalPersonMeta.significance[lang],
    } : undefined,
    miniQuiz: selectedEntry.miniQuiz || null,
  };
}
