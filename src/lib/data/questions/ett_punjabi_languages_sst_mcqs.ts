import type { Question } from '../questions';

const ETT_COMMON_META = {
  originType: 'authored-original' as const,
  reviewStatus: 'reviewed' as const,
  editorialStatus: 'reviewed' as const,
  availableLanguages: ['en', 'pa', 'hi'] as const,
  explanationLanguages: ['en', 'pa', 'hi'] as const,
  rightsProvenance: {
    source: 'PSEB / NCERT Curriculum & ERB Punjab ETT Recruitment Syllabus Blueprint',
    accessType: 'educational-original' as const,
    verifiedBy: 'ExamSathi ETT Curriculum Engine',
    verifiedDate: '2026-04-12',
  },
  source: {
    title: 'PSEB / NCERT Standard Textbooks & ERB ETT Syllabus Blueprint',
    url: 'https://www.pseb.ac.in/',
  },
};

export const ETT_PUNJABI_LANGUAGES_SST_MCQS: Question[] = [
  // ===========================================================================
  // TOPIC 1: ETT PAPER A — PUNJABI SCRIPT, PHONETICS & DIALECTS
  // topicId: 'ett-paper-a-punjabi-script-phonetics-dialects' (10 MCQs)
  // ===========================================================================
  {
    id: 'q-ett-pa-a1-1',
    topicId: 'ett-paper-a-punjabi-script-phonetics-dialects',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level B)',
    question: {
      en: 'Which regional dialect (Uptasha / ਉਪਭਾਸ਼ਾ) of Punjabi has been adopted as the standard literary and official language (ਟਕਸਾਲੀ ਭਾਸ਼ਾ) of Eastern Punjab?',
      pa: 'ਪੰਜਾਬੀ ਦੀ ਕਿਹੜੀ ਉਪਭਾਸ਼ਾ ਨੂੰ ਪੂਰਬੀ ਪੰਜਾਬ ਦੀ ਮਿਆਰੀ ਸਾਹਿਤਕ ਅਤੇ ਦਫ਼ਤਰੀ ਭਾਸ਼ਾ (ਟਕਸਾਲੀ ਭਾਸ਼ਾ) ਵਜੋਂ ਪ੍ਰਵਾਨ ਕੀਤਾ ਗਿਆ ਹੈ?',
      hi: 'पंजाबी की किस उपभाषा को पूर्वी पंजाब की मानक साहित्यिक और कार्यालयी भाषा (टकसाली भाषा) के रूप में स्वीकार किया गया है?',
    },
    options: {
      A: {
        en: 'Majhi — spoken in the core Bari Doab region of Amritsar and Gurdaspur',
        pa: 'ਮਾਝੀ — ਅੰਮ੍ਰਿਤਸਰ ਅਤੇ ਗੁਰਦਾਸਪੁਰ ਦੇ ਕੇਂਦਰੀ ਬਾਰੀ ਦੁਆਬ ਖੇਤਰ ਵਿੱਚ ਬੋਲੀ ਜਾਣ ਵਾਲੀ',
        hi: 'माझी — अमृतसर और गुरदासपुर के केंद्रीय बारी दोआब क्षेत्र में बोली जाने वाली',
      },
      B: {
        en: 'Malwai — spoken south of the Sutlej river in Ludhiana and Bathinda',
        pa: 'ਮਲਵਈ — ਸਤਲੁਜ ਦਰਿਆ ਦੇ ਦੱਖਣ ਵੱਲ ਲੁਧਿਆਣਾ ਅਤੇ ਬਠਿੰਡਾ ਵਿੱਚ ਬੋਲੀ ਜਾਣ ਵਾਲੀ',
        hi: 'मलवई — सतलुज नदी के दक्षिण में लुधियाना और बठिंडा में बोली जाने वाली',
      },
      C: {
        en: 'Doabi — spoken in the Bist Doab tract between the Beas and Sutlej rivers',
        pa: 'ਦੁਆਬੀ — ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ ਦਰਿਆਵਾਂ ਦੇ ਵਿਚਕਾਰ ਬਿਸਤ ਦੁਆਬ ਖੇਤਰ ਵਿੱਚ ਬੋਲੀ ਜਾਣ ਵਾਲੀ',
        hi: 'दोआबी — ब्यास और सतलुज नदियों के बीच बिस्त दोआब क्षेत्र में बोली जाने वाली',
      },
      D: {
        en: 'Puadhi — spoken in the eastern belt bordering Haryana and Himachal Pradesh',
        pa: 'ਪੁਆਧੀ — ਹਰਿਆਣਾ ਅਤੇ ਹਿਮਾਚਲ ਪ੍ਰਦੇਸ਼ ਨਾਲ ਲੱਗਦੇ ਪੂਰਬੀ ਖਿੱਤੇ ਵਿੱਚ ਬੋਲੀ ਜਾਣ ਵਾਲੀ',
        hi: 'पुआधी — हरियाणा और हिमाचल प्रदेश से सटे पूर्वी क्षेत्र में बोली जाने वाली',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Majhi, spoken in the heartland ("Majha") of Punjab (Amritsar, Tarn Taran, Gurdaspur, Pathankot), is recognized as the standard/Taksali dialect of Punjabi for education, administration, and literature.',
      pa: 'ਮਾਝੇ ਦੇ ਕੇਂਦਰੀ ਖੇਤਰ (ਅੰਮ੍ਰਿਤਸਰ, ਤਰਨ ਤਾਰਨ, ਗੁਰਦਾਸਪੁਰ, ਪਠਾਨਕੋਟ) ਵਿੱਚ ਬੋਲੀ ਜਾਣ ਵਾਲੀ ਮਾਝੀ ਉਪਭਾਸ਼ਾ ਨੂੰ ਪੰਜਾਬੀ ਦੀ ਟਕਸਾਲੀ (ਮਿਆਰੀ) ਭਾਸ਼ਾ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ।',
      hi: 'माझा के केंद्रीय क्षेत्र (अमृतसर, तरन तारन, गुरदासपुर, पठानकोट) में बोली जाने वाली माझी उपभाषा को पंजाबी की टकसाली (मानक) भाषा माना जाता है।',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pa-a1-2',
    topicId: 'ett-paper-a-punjabi-script-phonetics-dialects',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level I)',
    question: {
      en: 'Which of the following four-district groups strictly represents the geographical belt where the Majhi dialect is natively spoken in Indian Punjab?',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਚਾਰ ਜ਼ਿਲ੍ਹਿਆਂ ਦਾ ਸਮੂਹ ਭਾਰਤੀ ਪੰਜਾਬ ਵਿੱਚ ਮਾਝੀ ਉਪਭਾਸ਼ਾ ਦੇ ਭੂਗੋਲਿਕ ਖੇਤਰ ਨੂੰ ਸਹੀ ਰੂਪ ਵਿੱਚ ਦਰਸਾਉਂਦਾ ਹੈ?',
      hi: 'निम्नलिखित में से कौन-सा चार जिलों का समूह भारतीय पंजाब में माझी उपभाषा के भौगोलिक क्षेत्र को सही रूप में दर्शाता है?',
    },
    options: {
      A: {
        en: 'Amritsar, Tarn Taran, Gurdaspur, and Pathankot',
        pa: 'ਅੰਮ੍ਰਿਤਸਰ, ਤਰਨ ਤਾਰਨ, ਗੁਰਦਾਸਪੁਰ ਅਤੇ ਪਠਾਨਕੋਟ',
        hi: 'अमृतसर, तरन तारन, गुरदासपुर और पठानकोट',
      },
      B: {
        en: 'Jalandhar, Hoshiarpur, Kapurthala, and Shaheed Bhagat Singh Nagar',
        pa: 'ਜਲੰਧਰ, ਹੁਸ਼ਿਆਰਪੁਰ, ਕਪੂਰਥਲਾ ਅਤੇ ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ ਨਗਰ',
        hi: 'जालंधर, होशियारपुर, कपूरथला और शहीद भगत सिंह नगर',
      },
      C: {
        en: 'Amritsar, Jalandhar, Ludhiana, and Patiala',
        pa: 'ਅੰਮ੍ਰਿਤਸਰ, ਜਲੰਧਰ, ਲੁਧਿਆਣਾ ਅਤੇ ਪਟਿਆਲਾ',
        hi: 'अमृतसर, जालंधर, लुधियाना और पटियाला',
      },
      D: {
        en: 'Rupnagar, SAS Nagar (Mohali), Patiala, and Fatehgarh Sahib',
        pa: 'ਰੂਪਨਗਰ, ਐੱਸ.ਏ.ਐੱਸ. ਨਗਰ (ਮੋਹਾਲੀ), ਪਟਿਆਲਾ ਅਤੇ ਫ਼ਤਹਿਗੜ੍ਹ ਸਾਹਿਬ',
        hi: 'रूपनगर, एस.ए.एस. नगर (मोहाली), पटियाला और फतेहगढ़ साहिब',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Indian Punjab, Majhi is spoken in the four districts lying between the Ravi and Beas rivers: Amritsar, Tarn Taran, Gurdaspur, and Pathankot. Jalandhar, Hoshiarpur, Kapurthala, and SBS Nagar form the Doabi belt.',
      pa: 'ਭਾਰਤੀ ਪੰਜਾਬ ਵਿੱਚ ਰਾਵੀ ਅਤੇ ਬਿਆਸ ਦਰਿਆਵਾਂ ਦੇ ਵਿਚਕਾਰ ਸਥਿਤ ਚਾਰ ਜ਼ਿਲ੍ਹਿਆਂ—ਅੰਮ੍ਰਿਤਸਰ, ਤਰਨ ਤਾਰਨ, ਗੁਰਦਾਸਪੁਰ ਅਤੇ ਪਠਾਨਕੋਟ—ਵਿੱਚ ਮਾਝੀ ਉਪਭਾਸ਼ਾ ਬੋਲੀ ਜਾਂਦੀ ਹੈ।',
      hi: 'भारतीय पंजाब में रावी और ब्यास नदियों के बीच स्थित चार जिलों—अमृतसर, तरन तारन, गुरदासपुर और पठानकोट—में माझी उपभाषा बोली जाती है।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pa-a1-3',
    topicId: 'ett-paper-a-punjabi-script-phonetics-dialects',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level I)',
    question: {
      en: 'In which group of districts of Punjab is the Puadhi dialect predominantly spoken, and what is one of its characteristic pronouns for "we" (ਅਸੀਂ)?',
      pa: 'ਪੰਜਾਬ ਦੇ ਕਿਹੜੇ ਜ਼ਿਲ੍ਹਿਆਂ ਦੇ ਸਮੂਹ ਵਿੱਚ ਪੁਆਧੀ ਉਪਭਾਸ਼ਾ ਮੁੱਖ ਤੌਰ ਤੇ ਬੋਲੀ ਜਾਂਦੀ ਹੈ ਅਤੇ ਇਸ ਵਿੱਚ "ਅਸੀਂ" ਦੀ ਥਾਂ ਕਿਹੜਾ ਪੜਨਾਂਵ ਪ੍ਰਚਲਿਤ ਹੈ?',
      hi: 'पंजाब के किन जिलों के समूह में पुआधी उपभाषा मुख्य रूप से बोली जाती है और इसमें "असीं" (हम) के स्थान पर कौन-सा सर्वनाम प्रचलित है?',
    },
    options: {
      A: {
        en: 'Rupnagar, SAS Nagar (Mohali), and eastern Patiala — using "म्हा / ਹਮ" (ਹਮ) and "ਮਾਹਰਾ"',
        pa: 'ਰੂਪਨਗਰ, ਐੱਸ.ਏ.ਐੱਸ. ਨਗਰ (ਮੋਹਾਲੀ) ਅਤੇ ਪੂਰਬੀ ਪਟਿਆਲਾ — "ਹਮ" ਅਤੇ "ਮਾਹਰਾ" ਦੀ ਵਰਤੋਂ',
        hi: 'रूपनगर, एस.ए.एस. नगर (मोहाली) और पूर्वी पटियाला — "हम" और "माहरा" का प्रयोग',
      },
      B: {
        en: 'Ferozepur, Fazilka, Faridkot, and Moga — using "ਆਪਾਂ" and dropping initial "ਹ"',
        pa: 'ਫ਼ਿਰੋਜ਼ਪੁਰ, ਫ਼ਾਜ਼ਿਲਕਾ, ਫ਼ਰੀਦਕੋਟ ਅਤੇ ਮੋਗਾ — "ਆਪਾਂ" ਦੀ ਵਰਤੋਂ ਅਤੇ ਸ਼ੁਰੂਆਤੀ "ਹ" ਦਾ ਲੋਪ',
        hi: 'फिरोजपुर, फाजिल्का, फरीदकोट और मोगा — "आपां" का प्रयोग और प्रारंभिक "ह" का लोप',
      },
      C: {
        en: 'Jalandhar, Kapurthala, and Hoshiarpur — replacing initial "ਵ" with "ਬ"',
        pa: 'ਜਲੰਧਰ, ਕਪੂਰਥਲਾ ਅਤੇ ਹੁਸ਼ਿਆਰਪੁਰ — ਸ਼ੁਰੂਆਤੀ "ਵ" ਦੀ ਥਾਂ "ਬ" ਦੀ ਵਰਤੋਂ',
        hi: 'जालंधर, कपूरथला और होशियारपुर — प्रारंभिक "व" के स्थान पर "ब" का प्रयोग',
      },
      D: {
        en: 'Amritsar, Tarn Taran, and Gurdaspur — using "ਅਸਾਂ" and retroflex lateral "ਲ਼"',
        pa: 'ਅੰਮ੍ਰਿਤਸਰ, ਤਰਨ ਤਾਰਨ ਅਤੇ ਗੁਰਦਾਸਪੁਰ — "ਅਸਾਂ" ਅਤੇ ਉਲਟ-ਜੀਭੀ "ਲ਼" ਦੀ ਵਰਤੋਂ',
        hi: 'अमृतसर, तरन तारन और गुरदासपुर — "असां" और मूर्धन्य "ल़" का प्रयोग',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Puadhi is spoken in the eastern region ("Puadh") covering Rupnagar (Ropar), SAS Nagar (Mohali), parts of Fatehgarh Sahib, eastern Patiala, and Rajpura. Influenced by adjoining Bangru/Haryanvi, it uses forms like "ਹਮ" (we), "ਮਾਹਰਾ" (our), and "ਥਾਰਾ" (your).',
      pa: 'ਪੁਆਧੀ ਉਪਭਾਸ਼ਾ ਰੂਪਨਗਰ (ਰੋਪੜ), ਐੱਸ.ਏ.ਐੱਸ. ਨਗਰ (ਮੋਹਾਲੀ), ਪੂਰਬੀ ਪਟਿਆਲਾ (ਰਾਜਪੁਰਾ) ਅਤੇ ਫ਼ਤਹਿਗੜ੍ਹ ਸਾਹਿਬ ਦੇ ਕੁਝ ਹਿੱਸਿਆਂ ਵਿੱਚ ਬੋਲੀ ਜਾਂਦੀ ਹੈ। ਇਸ ਵਿੱਚ "ਅਸੀਂ/ਸਾਡਾ" ਲਈ "ਹਮ/ਮਾਹਰਾ" ਵਰਗੇ ਰੂਪ ਵਰਤੇ ਜਾਂਦੇ ਹਨ।',
      hi: 'पुआधी उपभाषा रूपनगर (रोपड़), एस.ए.एस. नगर (मोहाली), पूर्वी पटियाला (राजपुरा) और फतेहगढ़ साहिब के कुछ भागों में बोली जाती है। इसमें "असीं/साडा" के लिए "हम/माहरा" जैसे रूप प्रयुक्त होते हैं।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pa-a1-4',
    topicId: 'ett-paper-a-punjabi-script-phonetics-dialects',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level B)',
    question: {
      en: 'How many total letters are there in the modern Gurmukhi alphabet after adding the 6 dotted letters of the "Navin Toli" (ਨਵੀਂ ਟੋਲੀ) to the traditional 35 letters (ਪੈਂਤੀ ਅੱਖਰੀ), and which letter was added most recently by the Punjabi Dept. for retroflex lateral sound?',
      pa: 'ਪੁਰਾਤਨ 35 ਅੱਖਰੀ (ਪੈਂਤੀ) ਵਿੱਚ "ਨਵੀਂ ਟੋਲੀ" ਦੇ 6 ਬਿੰਦੀ ਵਾਲੇ ਅੱਖਰ ਜੋੜਨ ਤੋਂ ਬਾਅਦ ਆਧੁਨਿਕ ਗੁਰਮੁਖੀ ਵਰਣਮਾਲਾ ਵਿੱਚ ਕੁੱਲ ਕਿੰਨੇ ਅੱਖਰ ਹੋ ਗਏ ਹਨ, ਅਤੇ ਤਾਲਵੀ/ਉਲਟ-ਜੀਭੀ ਧੁਨੀ ਲਈ ਸਭ ਤੋਂ ਅਖੀਰ ਵਿੱਚ ਕਿਹੜਾ ਛੇਵਾਂ ਅੱਖਰ ਜੋੜਿਆ ਗਿਆ ਸੀ?',
      hi: 'प्राचीन 35 अक्षरी (पैंती) में "नवीं टोली" के 6 बिंदी वाले अक्षर जोड़ने के बाद आधुनिक गुरमुखी वर्णमाला में कुल कितने अक्षर हो गए हैं, और मूर्धन्य पाश्विक ध्वनि के लिए सबसे अंत में कौन-सा छठा अक्षर जोड़ा गया था?',
    },
    options: {
      A: {
        en: '41 letters in total; the sixth dotted letter added last is "ਲ਼" (Lalla pair bindi)',
        pa: 'ਕੁੱਲ 41 ਅੱਖਰ; ਸਭ ਤੋਂ ਅਖੀਰ ਵਿੱਚ ਜੋੜਿਆ ਗਿਆ ਛੇਵਾਂ ਬਿੰਦੀ ਵਾਲਾ ਅੱਖਰ "ਲ਼" (ਲੱਲੇ ਪੈਰ ਬਿੰਦੀ) ਹੈ',
        hi: 'कुल 41 अक्षर; सबसे अंत में जोड़ा गया छठा बिंदी वाला अक्षर "ल़" (लल्ले पैर बिंदी) है',
      },
      B: {
        en: '40 letters in total; the last dotted letter added is "ਫ਼" (Phapha pair bindi)',
        pa: 'ਕੁੱਲ 40 ਅੱਖਰ; ਸਭ ਤੋਂ ਅਖੀਰ ਵਿੱਚ ਜੋੜਿਆ ਗਿਆ ਬਿੰਦੀ ਵਾਲਾ ਅੱਖਰ "ਫ਼" (ਫੱਫੇ ਪੈਰ ਬਿੰਦੀ) ਹੈ',
        hi: 'कुल 40 अक्षर; सबसे अंत में जोड़ा गया बिंदी वाला अक्षर "फ़" (फप्फे पैर बिंदी) है',
      },
      C: {
        en: '41 letters in total; the sixth dotted letter added last is "ਜ਼" (Jajja pair bindi)',
        pa: 'ਕੁੱਲ 41 ਅੱਖਰ; ਸਭ ਤੋਂ ਅਖੀਰ ਵਿੱਚ ਜੋੜਿਆ ਗਿਆ ਛੇਵਾਂ ਬਿੰਦੀ ਵਾਲਾ ਅੱਖਰ "ਜ਼" (ਜੱਜੇ ਪੈਰ ਬਿੰਦੀ) ਹੈ',
        hi: 'कुल 41 अक्षर; सबसे अंत में जोड़ा गया छठा बिंदी वाला अक्षर "ज़" (जज्जे पैर बिंदी) है',
      },
      D: {
        en: '38 letters in total; the last dotted letter added is "ਸ਼" (Sassa pair bindi)',
        pa: 'ਕੁੱਲ 38 ਅੱਖਰ; ਸਭ ਤੋਂ ਅਖੀਰ ਵਿੱਚ ਜੋੜਿਆ ਗਿਆ ਬਿੰਦੀ ਵਾਲਾ ਅੱਖਰ "ਸ਼" (ਸੱਸੇ ਪੈਰ ਬਿੰਦੀ) ਹੈ',
        hi: 'कुल 38 अक्षर; सबसे अंत में जोड़ा गया बिंदी वाला अक्षर "श" (सस्से पैर बिंदी) है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Traditional Gurmukhi had 35 letters (Painti Akhari). Five letters (ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼) were added for Persian/Arabic loanwords, and later "ਲ਼" was added by the Punjabi Department, bringing the Navin Toli to 6 letters and total Gurmukhi letters to 41.',
      pa: 'ਮੂਲ ਗੁਰਮੁਖੀ ਵਿੱਚ 35 ਅੱਖਰ ਸਨ। ਫ਼ਾਰਸੀ ਧੁਨੀਆਂ ਲਈ 5 ਅੱਖਰ (ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼) ਅਤੇ ਬਾਅਦ ਵਿੱਚ ਪੰਜਾਬੀ ਵਿਭਾਗ ਵੱਲੋਂ ਉਲਟ-ਜੀਭੀ ਧੁਨੀ ਲਈ 6ਵਾਂ ਅੱਖਰ "ਲ਼" ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ, ਜਿਸ ਨਾਲ ਨਵੀਂ ਟੋਲੀ ਵਿੱਚ 6 ਅਤੇ ਕੁੱਲ ਵਰਣਮਾਲਾ ਵਿੱਚ 41 ਅੱਖਰ ਹੋ ਗਏ।',
      hi: 'मूल गुरमुखी में 35 अक्षर थे। फ़ारसी ध्वनियों के लिए 5 अक्षर (श, ख़, ग़, ज़, फ़) और बाद में पंजाबी विभाग द्वारा मूर्धन्य ध्वनि के लिए छठा अक्षर "ल़" शामिल किया गया, जिससे नवीं टोली में 6 और कुल वर्णमाला में 41 अक्षर हो गए।',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pa-a1-5',
    topicId: 'ett-paper-a-punjabi-script-phonetics-dialects',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level I)',
    question: {
      en: 'According to the 3–4–3 vowel-matra (ਲਗਾਂ) compatibility rule of the three Gurmukhi vowel bearers (ਸਵਰ ਵਾਹਕ — ੳ, ਅ, ੲ), which option accurately matches each vowel bearer with the exact matras it takes?',
      pa: 'ਗੁਰਮੁਖੀ ਦੇ ਤਿੰਨ ਸਵਰ ਵਾਹਕਾਂ (ੳ, ਅ, ੲ) ਨਾਲ ਲਗਾਂ ਲੱਗਣ ਦੇ 3–4–3 ਨਿਯਮ ਅਨੁਸਾਰ, ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਜੁੱਟ ਹਰੇਕ ਸਵਰ ਵਾਹਕ ਨਾਲ ਲੱਗਣ ਵਾਲੀਆਂ ਸਹੀ ਲਗਾਂ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ?',
      hi: 'गुरमुखी के तीन स्वर वाहकों (ੳ, ਅ, ੲ) के साथ मात्राएँ (लगां) लगने के 3–4–3 नियम के अनुसार, निम्नलिखित में से कौन-सा विकल्प प्रत्येक स्वर वाहक के साथ लगने वाली सही मात्राओं को दर्शाता है?',
    },
    options: {
      A: {
        en: 'ੳ (3: ਔਂਕੜ, ਦੁਲੈਂਕੜ, ਹੋੜਾ); ਅ (4: ਮੁਕਤਾ, ਕੰਨਾ, ਦੁਲਾਵਾਂ, ਕਨੌੜਾ); ੲ (3: ਸਿਹਾਰੀ, ਬਿਹਾਰੀ, ਲਾਂ)',
        pa: 'ੳ (3: ਔਂਕੜ, ਦੁਲੈਂਕੜ, ਹੋੜਾ — ਉ, ਊ, ਓ); ਅ (4: ਮੁਕਤਾ, ਕੰਨਾ, ਦੁਲਾਵਾਂ, ਕਨੌੜਾ — ਅ, ਆ, ਐ, ਔ); ੲ (3: ਸਿਹਾਰੀ, ਬਿਹਾਰੀ, ਲਾਂ — ਇ, ਈ, ਏ)',
        hi: 'ੳ (3: औंकड़, दुलैंकड़, होड़ा — उ, ऊ, ओ); ਅ (4: मुकता, कन्ना, दुलावां, कनौड़ा — अ, आ, ऐ, औ); ੲ (3: सिहारी, बिहारी, लां — इ, ई, ए)',
      },
      B: {
        en: 'ੳ (3: ਸਿਹਾਰੀ, ਬਿਹਾਰੀ, ਲਾਂ); ਅ (4: ਮੁਕਤਾ, ਕੰਨਾ, ਹੋੜਾ, ਕਨੌੜਾ); ੲ (3: ਔਂਕੜ, ਦੁਲੈਂਕੜ, ਦੁਲਾਵਾਂ)',
        pa: 'ੳ (3: ਸਿਹਾਰੀ, ਬਿਹਾਰੀ, ਲਾਂ); ਅ (4: ਮੁਕਤਾ, ਕੰਨਾ, ਹੋੜਾ, ਕਨੌੜਾ); ੲ (3: ਔਂਕੜ, ਦੁਲੈਂਕੜ, ਦੁਲਾਵਾਂ)',
        hi: 'ੳ (3: सिहारी, बिहारी, लां); ਅ (4: मुकता, कन्ना, होड़ा, कनौड़ा); ੲ (3: औंकड़, दुलैंकड़, दुलावां)',
      },
      C: {
        en: 'ੳ (4: ਮੁਕਤਾ, ਔਂਕੜ, ਦੁਲੈਂਕੜ, ਹੋੜਾ); ਅ (3: ਕੰਨਾ, ਦੁਲਾਵਾਂ, ਕਨੌੜਾ); ੲ (3: ਸਿਹਾਰੀ, ਬਿਹਾਰੀ, ਲਾਂ)',
        pa: 'ੳ (4: ਮੁਕਤਾ, ਔਂਕੜ, ਦੁਲੈਂਕੜ, ਹੋੜਾ); ਅ (3: ਕੰਨਾ, ਦੁਲਾਵਾਂ, ਕਨੌੜਾ); ੲ (3: ਸਿਹਾਰੀ, ਬਿਹਾਰੀ, ਲਾਂ)',
        hi: 'ੳ (4: मुकता, औंकड़, दुलैंकड़, होड़ा); ਅ (3: कन्ना, दुलावां, कनੌड़ा); ੲ (3: सिहारी, बिहारी, लां)',
      },
      D: {
        en: 'ੳ (3: ਔਂਕੜ, ਦੁਲੈਂਕੜ, ਕਨੌੜਾ); ਅ (4: ਮੁਕਤਾ, ਕੰਨਾ, ਲਾਂ, ਹੋੜਾ); ੲ (3: ਸਿਹਾਰੀ, ਬਿਹਾਰੀ, ਦੁਲਾਵਾਂ)',
        pa: 'ੳ (3: ਔਂਕੜ, ਦੁਲੈਂਕੜ, ਕਨੌੜਾ); ਅ (4: ਮੁਕਤਾ, ਕੰਨਾ, ਲਾਂ, ਹੋੜਾ); ੲ (3: ਸਿਹਾਰੀ, ਬਿਹਾਰੀ, ਦੁਲਾਵਾਂ)',
        hi: 'ੳ (3: औंकड़, दुलैंकड़, कनौड़ा); ਅ (4: मुकता, कन्ना, लां, होड़ा); ੲ (3: सिहारी, बिहारी, दुलावां)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Punjabi has 3 vowel bearers (ੳ, ਅ, ੲ) that combine with 10 matras (ਲਗਾਂ) in a 3–4–3 pattern to form 10 vowel sounds (ਸਵਰ ਧੁਨੀਆਂ): ੳ takes 3 (ਉ, ਊ, ਓ), ਅ takes 4 (ਅ, ਆ, ਐ, ਔ), and ੲ takes 3 (ਇ, ਈ, ਏ). Note that ੳ with Hora is written with an open top (ਓ).',
      pa: 'ਗੁਰਮੁਖੀ ਦੇ ਤਿੰਨ ਸਵਰ ਵਾਹਕਾਂ (ੳ, ਅ, ੲ) ਨਾਲ 3–4–3 ਦੇ ਨਿਯਮ ਅਨੁਸਾਰ 10 ਲਗਾਂ ਲੱਗ ਕੇ 10 ਸਵਰ ਧੁਨੀਆਂ ਬਣਦੀਆਂ ਹਨ: ੳ ਨਾਲ 3 (ਉ, ਊ, ਓ), ਅ ਨਾਲ 4 (ਅ, ਆ, ਐ, ਔ) ਅਤੇ ੲ ਨਾਲ 3 (ਇ, ਈ, ਏ)।',
      hi: 'गुरमुखी के तीन स्वर वाहकों (ੳ, ਅ, ੲ) के साथ 3–4–3 के नियम के अनुसार 10 मात्राएँ लगकर 10 स्वर ध्वनियाँ बनती हैं: ੳ के साथ 3 (उ, ऊ, ओ), ਅ के साथ 4 (अ, आ, ऐ, औ) और ੲ के साथ 3 (इ, ई, ए)।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pa-a1-6',
    topicId: 'ett-paper-a-punjabi-script-phonetics-dialects',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level B)',
    question: {
      en: 'Which of the following sets represents the five nasal consonants (ਅਨੁਨਾਸਕੀ / ਨਾਸਕੀ ਵਿਅੰਜਨ) located at the end of the five traditional vargas (ਕਵਰਗ ਤੋਂ ਪਵਰਗ) in the Gurmukhi script?',
      pa: 'ਗੁਰਮੁਖੀ ਵਰਣਮਾਲਾ ਦੇ ਪੰਜ ਵਰਗਾਂ (ਕਵਰਗ ਤੋਂ ਪਵਰਗ) ਦੇ ਅੰਤ ਵਿੱਚ ਆਉਣ ਵਾਲੇ ਪੰਜ ਅਨੁਨਾਸਕੀ (ਨਾਸਕੀ) ਵਿਅੰਜਨ ਕਿਹੜੇ ਹਨ?',
      hi: 'गुरमुखी वर्णमाला के पाँच वर्गों (कवर्ग से पवर्ग) के अंत में आने वाले पाँच अनुनासिक (नासिक्य) व्यंजन कौन-से हैं?',
    },
    options: {
      A: {
        en: 'ਙ, ਞ, ਣ, ਨ, ਮ — wherein ਙ and ਞ never begin a standard Punjabi word',
        pa: 'ਙ, ਞ, ਣ, ਨ, ਮ — ਜਿਨ੍ਹਾਂ ਵਿੱਚੋਂ ਙ ਅਤੇ ਞ ਨਾਲ ਪੰਜਾਬੀ ਦਾ ਕੋਈ ਸ਼ਬਦ ਸ਼ੁਰੂ ਨਹੀਂ ਹੁੰਦਾ',
        hi: 'ਙ (ङ), ਞ (ञ), ਣ (ण), ਨ (न), ਮ (म) — जिनमें से ਙ और ਞ से कोई शब्द शुरू नहीं होता',
      },
      B: {
        en: 'ਯ, ਰ, ਲ, ਵ, ੜ — which occupy the Antimgutt (ਅੰਤਿਮ ਵਰਗ) of the Painti',
        pa: 'ਯ, ਰ, ਲ, ਵ, ੜ — ਜੋ ਪੈਂਤੀ ਅੱਖਰੀ ਦੇ ਅੰਤਿਮ ਵਰਗ ਵਿੱਚ ਆਉਂਦੇ ਹਨ',
        hi: 'ਯ (य), ਰ (र), ਲ (ल), ਵ (व), ੜ (ड़) — जो पैंती अक्षरी के अंतिम वर्ग में आते हैं',
      },
      C: {
        en: 'ਘ, ਝ, ਢ, ਧ, ਭ — which produce tonal contours in modern Punjabi',
        pa: 'ਘ, ਝ, ਢ, ਧ, ਭ — ਜੋ ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਵਿੱਚ ਸੁਰ-ਯੁਕਤ ਧੁਨੀਆਂ ਪੈਦਾ ਕਰਦੇ ਹਨ',
        hi: 'ਘ (घ), ਝ (झ), ਢ (ढ), ਧ (ध), ਭ (भ) — जो आधुनिक पंजाबी में तान (सुर) पैदा करते हैं',
      },
      D: {
        en: 'ਣ, ਨ, ਮ, ੜ, ਲ਼ — all five consonants that cannot occur word-initially',
        pa: 'ਣ, ਨ, ਮ, ੜ, ਲ਼ — ਉਹ ਪੰਜ ਵਿਅੰਜਨ ਜੋ ਸ਼ਬਦ ਦੇ ਸ਼ੁਰੂ ਵਿੱਚ ਨਹੀਂ ਆਉਂਦੇ',
        hi: 'ਣ (ण), ਨ (न), ਮ (म), ੜ (ड़), ਲ਼ (ल़) — वे पाँच व्यंजन जो शब्द के आरंभ में नहीं आते',
      },
    },
    correct: 'A',
    explanation: {
      en: 'The five nasal consonants (ਨਾਸਕੀ ਵਿਅੰਜਨ) in Gurmukhi are ਙ, ਞ, ਣ, ਨ, and ਮ (the 5th letter of each varga from Kavarg to Pavarg). Among them, ਙ, ਞ, and ਣ (along with ੜ and ਲ਼) never appear at the beginning of a standard Punjabi word.',
      pa: 'ਗੁਰਮੁਖੀ ਵਿੱਚ ਪੰਜ ਨਾਸਕੀ (ਅਨੁਨਾਸਕੀ) ਵਿਅੰਜਨ ਹਨ: ਙ, ਞ, ਣ, ਨ, ਮ। ਇਹਨਾਂ ਵਿੱਚੋਂ ਙ, ਞ ਅਤੇ ਣ (ਅਤੇ ੜ, ਲ਼) ਤੋਂ ਪੰਜਾਬੀ ਦਾ ਕੋਈ ਵੀ ਮਿਆਰੀ ਸ਼ਬਦ ਸ਼ੁਰੂ ਨਹੀਂ ਹੁੰਦਾ।',
      hi: 'गुरमुखी में पाँच अनुनासिक (नासिक्य) व्यंजन हैं: ਙ, ਞ, ਣ, ਨ, ਮ। इनमें से ਙ, ਞ और ਣ (तथा ੜ, ਲ਼) से पंजाबी का कोई भी मानक शब्द प्रारंभ नहीं होता।',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pa-a1-7',
    topicId: 'ett-paper-a-punjabi-script-phonetics-dialects',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level A)',
    question: {
      en: 'Regarding the Gurmukhi Lagakhar (ਲਗਾਖਰ — ਬਿੰਦੀ, ਟਿੱਪੀ, ਅੱਧਕ), how many matras (ਲਗਾਂ) take Bindi (ਬਿੰਦੀ) versus Tippi (ਟਿੱਪੀ), and which exception applies when a vowel matra is attached to Ura (ੳ)?',
      pa: 'ਗੁਰਮੁਖੀ ਦੇ ਲਗਾਖਰਾਂ (ਬਿੰਦੀ, ਟਿੱਪੀ, ਅੱਧਕ) ਦੇ ਨਿਯਮਾਂ ਅਨੁਸਾਰ, ਬਿੰਦੀ ਅਤੇ ਟਿੱਪੀ ਕ੍ਰਮਵਾਰ ਕਿੰਨੀਆਂ ਲਗਾਂ ਨਾਲ ਲੱਗਦੇ ਹਨ ਅਤੇ "ੳ" (ਊੜਾ) ਨਾਲ ਔਂਕੜ ਜਾਂ ਦੁਲੈਂਕੜ ਆਉਣ ਤੇ ਕਿਹੜਾ ਵਿਸ਼ੇਸ਼ ਨਿਯਮ ਲਾਗੂ ਹੁੰਦਾ ਹੈ?',
      hi: 'गुरमुखी के लगाखर (बिंदी, टिप्पी, अद्धक) के नियमों के अनुसार, बिंदी और टिप्पी क्रमशः कितनी मात्राओं (लगां) के साथ लगते हैं और "ੳ" (ऊड़ा) के साथ औंकड़ या दुलैंकड़ आने पर कौन-सा विशेष नियम लागू होता है?',
    },
    options: {
      A: {
        en: 'Bindi takes 6 matras and Tippi takes 4 matras; however, with ੳ (ਉ, ਊ), Bindi is used instead of Tippi (e.g., ਉਂਗਲ, ਊਂਘ)',
        pa: 'ਬਿੰਦੀ 6 ਲਗਾਂ ਨਾਲ ਅਤੇ ਟਿੱਪੀ 4 ਲਗਾਂ ਨਾਲ ਲੱਗਦੀ ਹੈ; ਪਰ "ੳ" ਨੂੰ ਔਂਕੜ ਜਾਂ ਦੁਲੈਂਕੜ (ਉ, ਊ) ਹੋਣ ਤੇ ਟਿੱਪੀ ਦੀ ਥਾਂ ਬਿੰਦੀ ਲੱਗਦੀ ਹੈ (ਜਿਵੇਂ: ਉਂਗਲ, ਊਂਘ)',
        hi: 'बिंदी 6 मात्राओं के साथ और टिप्पी 4 मात्राओं के साथ लगती है; परंतु "ੳ" पर औंकड़ या दुलैंकड़ (उ, ऊ) होने पर टिप्पी के स्थान पर बिंदी लगती है (जैसे: ਉਂਗਲ, ਊਂਘ)',
      },
      B: {
        en: 'Bindi takes 5 matras and Tippi takes 5 matras; with ੳ (ਉ, ਊ), Addhak is used instead of Tippi',
        pa: 'ਬਿੰਦੀ 5 ਲਗਾਂ ਨਾਲ ਅਤੇ ਟਿੱਪੀ 5 ਲਗਾਂ ਨਾਲ ਲੱਗਦੀ ਹੈ; "ੳ" (ਉ, ਊ) ਨਾਲ ਟਿੱਪੀ ਦੀ ਥਾਂ ਅੱਧਕ ਲੱਗਦਾ ਹੈ',
        hi: 'बिंदी 5 मात्राओं के साथ और टिप्पी 5 मात्राओं के साथ लगती है; "ੳ" (उ, ऊ) के साथ टिप्पी के स्थान पर अद्धक लगता है',
      },
      C: {
        en: 'Bindi takes 4 matras and Tippi takes 6 matras; with ੳ (ਉ, ਊ), neither Bindi nor Tippi can be used',
        pa: 'ਬਿੰਦੀ 4 ਲਗਾਂ ਨਾਲ ਅਤੇ ਟਿੱਪੀ 6 ਲਗਾਂ ਨਾਲ ਲੱਗਦੀ ਹੈ; "ੳ" (ਉ, ਊ) ਨਾਲ ਬਿੰਦੀ ਜਾਂ ਟਿੱਪੀ ਨਹੀਂ ਲੱਗ ਸਕਦੀ',
        hi: 'बिंदी 4 मात्राओं के साथ और टिप्पी 6 मात्राओं के साथ लगती है; "ੳ" (उ, ऊ) के साथ बिंदी या टिप्पी नहीं लग सकती',
      },
      D: {
        en: 'Bindi takes 7 matras and Tippi takes 3 matras; with ੲ (ਇ, ਈ), Tippi replaces Bindi in all words',
        pa: 'ਬਿੰਦੀ 7 ਲਗਾਂ ਨਾਲ ਅਤੇ ਟਿੱਪੀ 3 ਲਗਾਂ ਨਾਲ ਲੱਗਦੀ ਹੈ; "ੲ" (ਇ, ਈ) ਨਾਲ ਹਮੇਸ਼ਾ ਬਿੰਦੀ ਦੀ ਥਾਂ ਟਿੱਪੀ ਲੱਗਦੀ ਹੈ',
        hi: 'बिंदी 7 मात्राओं के साथ और टिप्पी 3 मात्राओं के साथ लगती है; "ੲ" (इ, ई) के साथ हमेशा बिंदी के स्थान पर टिप्पी लगती है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Bindi is used with 6 long/diphthong matras (ਕੰਨਾ, ਬਿਹਾਰੀ, ਲਾਂ, ਦੁਲਾਵਾਂ, ਹੋੜਾ, ਕਨੌੜਾ). Tippi is used with 4 matras on consonants (ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ, ਦੁਲੈਂਕੜ). However, when ਔਂਕੜ or ਦੁਲੈਂਕੜ is attached to ੳ (forming ਉ or ਊ), the top dome of ੳ prevents Tippi, so Bindi is used instead (e.g., ਉਂਗਲ, ਊਂਠ/ਊਂਘ)—making 8 total vowel-form contexts for Bindi if ੳ exceptions are counted separately.',
      pa: 'ਸਧਾਰਨ ਨਿਯਮ ਅਨੁਸਾਰ ਬਿੰਦੀ 6 ਲਗਾਂ (ਕੰਨਾ, ਬਿਹਾਰੀ, ਲਾਂ, ਦੁਲਾਵਾਂ, ਹੋੜਾ, ਕਨੌੜਾ) ਨਾਲ ਅਤੇ ਟਿੱਪੀ 4 ਲਗਾਂ (ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ, ਦੁਲੈਂਕੜ) ਨਾਲ ਲੱਗਦੀ ਹੈ। ਪਰ ਜਦੋਂ "ੳ" ਨਾਲ ਔਂਕੜ ਜਾਂ ਦੁਲੈਂਕੜ (ਉ, ਊ) ਹੋਵੇ, ਤਾਂ ਉੱਪਰ ਜਗ੍ਹਾ ਨਾ ਹੋਣ ਕਾਰਨ ਟਿੱਪੀ ਦੀ ਥਾਂ ਬਿੰਦੀ ਵਰਤੀ ਜਾਂਦੀ ਹੈ (ਜਿਵੇਂ: ਉਂਗਲ, ਊਂਘ)।',
      hi: 'सामान्य नियम के अनुसार बिंदी 6 मात्राओं (कन्ना, बिहारी, लां, दुलावां, होड़ा, कनौड़ा) के साथ और टिप्पी 4 मात्राओं (मुकता, सिहारी, औंकड़, दुलैंकड़) के साथ लगती है। किंतु जब "ੳ" के साथ औंकड़ या दुलैंकड़ (उ, ऊ) हो, तो ऊपर स्थान न होने के कारण टिप्पी के स्थान पर बिंदी लगती है (जैसे: ਉਂਗਲ, ਊਂਘ)।',
    },
    difficulty: 'hard',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pa-a1-8',
    topicId: 'ett-paper-a-punjabi-script-phonetics-dialects',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level I)',
    question: {
      en: 'With which matras (ਲਗਾਂ) is the Gurmukhi Lagakhar "Addhak" (ਅੱਧਕ — ੱ) used to indicate consonant gemination (ਦੁੱਤ/ਦੂਹਰੀ ਧੁਨੀ), including in assimilated English loanwords?',
      pa: 'ਗੁਰਮੁਖੀ ਵਿੱਚ ਕਿਸੇ ਅੱਖਰ ਦੀ ਦੂਹਰੀ ਆਵਾਜ਼ (ਦਬਾਅ) ਪ੍ਰਗਟ ਕਰਨ ਲਈ "ਅੱਧਕ" (ੱ) ਦੀ ਵਰਤੋਂ ਕਿਹੜੀਆਂ ਲਗਾਂ ਨਾਲ ਕੀਤੀ ਜਾਂਦੀ ਹੈ?',
      hi: 'गुरमुखी में किसी अक्षर के द्वित्व उच्चारण (दबाव) को प्रकट करने के लिए "अद्धक" (ੱ) का प्रयोग किन मात्राओं के साथ किया जाता है?',
    },
    options: {
      A: {
        en: 'With 3 short matras (ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ) and additionally with Dulavan (ਦੁਲਾਵਾਂ) in English loanwords like ਪੈੱਨ and ਬੈੱਡ',
        pa: '3 ਲਘੂ ਲਗਾਂ (ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ) ਨਾਲ ਅਤੇ ਅੰਗਰੇਜ਼ੀ ਦੇ ਤਤਸਮ ਸ਼ਬਦਾਂ ਵਿੱਚ ਦੁਲਾਵਾਂ (ੈ) ਨਾਲ (ਜਿਵੇਂ ਪੈੱਨ, ਬੈੱਡ)',
        hi: '3 लघु मात्राओं (मुकता, सिहारी, औंकड़) के साथ तथा अंग्रेजी के शब्दों में दुलावां (ੈ) के साथ (जैसे ਪੈੱਨ, ਬੈੱਡ)',
      },
      B: {
        en: 'With all 10 matras of Gurmukhi whenever any consonant is pronounced with high tone',
        pa: 'ਗੁਰਮੁਖੀ ਦੀਆਂ ਸਾਰੀਆਂ 10 ਲਗਾਂ ਨਾਲ ਜਦੋਂ ਵੀ ਕਿਸੇ ਵਿਅੰਜਨ ਦਾ ਉਚਾਰਨ ਉੱਚੀ ਸੁਰ ਵਿੱਚ ਹੋਵੇ',
        hi: 'गुरमुखी की सभी 10 मात्राओं के साथ जब भी किसी व्यंजन का उच्चारण उच्च तान में हो',
      },
      C: {
        en: 'Only with Kanna (ਕੰਨਾ), Bihari (ਬਿਹਾਰੀ), and Dulainkar (ਦੁਲੈਂਕੜ) before nasal consonants',
        pa: 'ਕੇਵਲ ਕੰਨਾ, ਬਿਹਾਰੀ ਅਤੇ ਦੁਲੈਂਕੜ ਨਾਲ ਜਦੋਂ ਅੱਗੇ ਕੋਈ ਨਾਸਕੀ ਵਿਅੰਜਨ ਆਵੇ',
        hi: 'केवल कन्ना, बिहारी और दुलैंकड़ के साथ जब आगे कोई अनुनासिक व्यंजन आए',
      },
      D: {
        en: 'Only with Lavan (ਲਾਂ) and Hora (ਹੋੜਾ) in Sanskrit tatsama words borrowed into Punjabi',
        pa: 'ਕੇਵਲ ਲਾਂ ਅਤੇ ਹੋੜਾ ਨਾਲ ਜੋ ਸੰਸਕ੍ਰਿਤ ਦੇ ਤਤਸਮ ਸ਼ਬਦਾਂ ਵਿੱਚ ਵਰਤੇ ਜਾਂਦੇ ਹਨ',
        hi: 'केवल लां और होड़ा के साथ जो संस्कृत के तत्सम शब्दों में प्रयुक्त होते हैं',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Addhak (ੱ) is placed above the preceding letter to double the following consonant. In native Punjabi words it occurs with the 3 short vowels (Laghu Lagas): Mukta (ਸੱਪ), Sihari (ਇੱਕ), and Aunkar (ਕੁੱਤਾ). In English loanwords, it is also used with Dulavan (ਪੈੱਨ, ਚੈੱਕ, ਬੈੱਡ).',
      pa: 'ਅੱਧਕ (ੱ) ਜਿਸ ਅੱਖਰ ਦੀ ਆਵਾਜ਼ ਦੂਹਰੀ ਕਰਨੀ ਹੋਵੇ, ਉਸ ਤੋਂ ਪਹਿਲੇ ਅੱਖਰ ਉੱਤੇ ਲੱਗਦਾ ਹੈ। ਇਹ ਮੂਲ ਰੂਪ ਵਿੱਚ 3 ਲਘੂ ਲਗਾਂ—ਮੁਕਤਾ (ਸੱਪ), ਸਿਹਾਰੀ (ਇੱਕ), ਔਂਕੜ (ਕੁੱਤਾ)—ਅਤੇ ਅੰਗਰੇਜ਼ੀ ਸ਼ਬਦਾਂ ਵਿੱਚ ਦੁਲਾਵਾਂ (ਪੈੱਨ, ਬੈੱਡ) ਨਾਲ ਲੱਗਦਾ ਹੈ।',
      hi: 'अद्धक (ੱ) जिस अक्षर की ध्वनि दोगुनी करनी हो, उससे पहले अक्षर के ऊपर लगता है। यह मूल रूप से 3 लघु मात्राओं—मुकता (ਸੱਪ), सिहारी (ਇੱਕ), औंकड़ (ਕੁੱਤਾ)—तथा अंग्रेजी शब्दों में दुलावां (ਪੈੱਨ, ਬੈੱਡ) के साथ लगता है।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pa-a1-9',
    topicId: 'ett-paper-a-punjabi-script-phonetics-dialects',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level I)',
    question: {
      en: 'Which are the only three subscript consonants (ਦੁੱਤ ਅੱਖਰ / ਪੈਰੀਂ ਪੈਣ ਵਾਲੇ ਅੱਖਰ) in the Gurmukhi script, and which modern Punjabi word correctly uses the subscript "ਵ" (ਵਾਵਾ)?',
      pa: 'ਗੁਰਮੁਖੀ ਲਿਪੀ ਵਿੱਚ ਪੈਰੀਂ ਪੈਣ ਵਾਲੇ ਤਿੰਨ ਦੁੱਤ ਅੱਖਰ ਕਿਹੜੇ ਹਨ ਅਤੇ ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜੇ ਸ਼ਬਦ ਵਿੱਚ ਪੈਰੀਂ "ਵ" (੍ਵ) ਦੀ ਸਹੀ ਵਰਤੋਂ ਹੋਈ ਹੈ?',
      hi: 'गुरमुखी लिपि में पैर में लगने वाले तीन संयुक्त/दुत्त अक्षर कौन-से हैं और निम्नलिखित में से किस शब्द में पैर में "ਵ" (੍ਵ) का सही प्रयोग हुआ है?',
    },
    options: {
      A: {
        en: 'ਹ, ਰ, ਵ — with subscript "ਵ" used in words like "ਸ੍ਵੈ-ਜੀਵਨੀ" (autobiography) and "ਸ੍ਵਰ" (vowel)',
        pa: 'ਹ, ਰ, ਵ — ਅਤੇ ਪੈਰੀਂ "ਵ" (੍ਵ) ਦੀ ਵਰਤੋਂ "ਸ੍ਵੈ-ਜੀਵਨੀ" ਅਤੇ "ਸ੍ਵਰ" ਵਰਗੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਹੁੰਦੀ ਹੈ',
        hi: 'ਹ (ह), ਰ (र), ਵ (व) — तथा पैर में "ਵ" (੍ਵ) का प्रयोग "ਸ੍ਵੈ-ਜੀਵਨੀ" और "ਸ੍ਵਰ" जैसे शब्दों में होता है',
      },
      B: {
        en: 'ਹ, ਰ, ਯ — with subscript "ਯ" used in words like "ਵਿਦਿਆ" and "ਕਿਰਿਆ"',
        pa: 'ਹ, ਰ, ਯ — ਅਤੇ ਪੈਰੀਂ "ਯ" ਦੀ ਵਰਤੋਂ "ਵਿਦਿਆ" ਅਤੇ "ਕਿਰਿਆ" ਵਰਗੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਹੁੰਦੀ ਹੈ',
        hi: 'ਹ (ह), ਰ (र), ਯ (य) — तथा पैर में "ਯ" का प्रयोग "ਵਿਦਿਆ" और "ਕਿਰਿਆ" जैसे शब्दों में होता है',
      },
      C: {
        en: 'ਰ, ਲ, ਵ — with subscript "ਲ" used in words like "ਪ੍ਰਕਾਸ਼" and "ਕ੍ਰਿਪਾ"',
        pa: 'ਰ, ਲ, ਵ — ਅਤੇ ਪੈਰੀਂ "ਲ" ਦੀ ਵਰਤੋਂ "ਪ੍ਰਕਾਸ਼" ਅਤੇ "ਕ੍ਰਿਪਾ" ਵਰਗੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਹੁੰਦੀ ਹੈ',
        hi: 'ਰ (र), ਲ (ल), ਵ (व) — तथा पैर में "ਲ" का प्रयोग "ਪ੍ਰਕਾਸ਼" और "ਕ੍ਰਿਪਾ" जैसे शब्दों में होता है',
      },
      D: {
        en: 'ਹ, ਵ, ੜ — with subscript "ੜ" used in words like "ਪੜ੍ਹਾਈ" and "ਚੜ੍ਹਾਈ"',
        pa: 'ਹ, ਵ, ੜ — ਅਤੇ ਪੈਰੀਂ "ੜ" ਦੀ ਵਰਤੋਂ "ਪੜ੍ਹਾਈ" ਅਤੇ "ਚੜ੍ਹਾਈ" ਵਰਗੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਹੁੰਦੀ ਹੈ',
        hi: 'ਹ (ह), ਵ (व), ੜ (ड़) — तथा पैर में "ੜ" का प्रयोग "ਪੜ੍ਹਾਈ" और "ਚੜ੍ਹਾਈ" जैसे शब्दों में होता है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Only three letters in Gurmukhi are written as subscript characters (ਦੁੱਤ ਅੱਖਰ) at the foot of another letter: ਹ (੍), ਰ (੍ਰ), and ਵ (੍ਵ). For example: ਪੜ੍ਹ (ਪੈਰੀਂ ਹ), ਪ੍ਰੇਮ (ਪੈਰੀਂ ਰ), and ਸ੍ਵੈ-ਮਾਣ / ਸ੍ਵੈ-ਜੀਵਨੀ (ਪੈਰੀਂ ਵ).',
      pa: 'ਗੁਰਮੁਖੀ ਲਿਪੀ ਵਿੱਚ ਸਿਰਫ਼ ਤਿੰਨ ਦੁੱਤ ਅੱਖਰ (ਪੈਰੀਂ ਪੈਣ ਵਾਲੇ ਅੱਖਰ) ਹਨ: ਹ (੍), ਰ (੍ਰ), ਅਤੇ ਵ (੍ਵ)। ਉਦਾਹਰਨ ਵਜੋਂ: ਪੜ੍ਹਨਾ (ਪੈਰੀਂ ਹ), ਪ੍ਰਕਾਸ਼ (ਪੈਰੀਂ ਰ), ਅਤੇ ਸ੍ਵੈ-ਜੀਵਨੀ (ਪੈਰੀਂ ਵ)।',
      hi: 'गुरमुखी लिपि में केवल तीन दुत्त अक्षर (पैर में लगने वाले अक्षर) हैं: ਹ (੍), ਰ (੍ਰ), और ਵ (੍ਵ)। उदाहरण के लिए: ਪੜ੍ਹਨਾ (पैर में ह), ਪ੍ਰਕਾਸ਼ (पैर में र), और ਸ੍ਵੈ-ਜੀਵਨੀ (पैर में व)।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pa-a1-10',
    topicId: 'ett-paper-a-punjabi-script-phonetics-dialects',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level A)',
    question: {
      en: 'Choose the option in which ALL FOUR Punjabi words are written in 100% orthographically correct standard Gurmukhi spelling (ਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ):',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਉਹ ਵਿਕਲਪ ਚੁਣੋ ਜਿਸ ਵਿੱਚ ਸਾਰੇ ਚਾਰੇ ਸ਼ਬਦ ਟਕਸਾਲੀ ਪੰਜਾਬੀ ਦੇ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਬਿਲਕੁਲ ਸ਼ੁੱਧ (ਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ) ਲਿਖੇ ਹੋਏ ਹਨ:',
      hi: 'निम्नलिखित में से वह विकल्प चुनें जिसमें सभी चारों शब्द मानक पंजाबी के नियमों के अनुसार पूर्णतः शुद्ध (शुद्ध शब्द-जोड़) लिखे गए हैं:',
    },
    options: {
      A: {
        en: 'ਸਹਿਯੋਗ, ਸ਼ਹਿਰ, ਅਧਿਆਪਕ, ਵਿਗਿਆਨ',
        pa: 'ਸਹਿਯੋਗ, ਸ਼ਹਿਰ, ਅਧਿਆਪਕ, ਵਿਗਿਆਨ',
        hi: 'ਸਹਿਯੋਗ, ਸ਼ਹਿਰ, ਅਧਿਆਪਕ, ਵਿਗਿਆਨ',
      },
      B: {
        en: 'ਸੈਹਯੋਗ, ਸ਼ੈਹਰ, ਅਧਯਾਪਕ, ਵਿਗਯਾਨ',
        pa: 'ਸੈਹਯੋਗ, ਸ਼ੈਹਰ, ਅਧਯਾਪਕ, ਵਿਗਯਾਨ',
        hi: 'ਸੈਹਯੋਗ, ਸ਼ੈਹਰ, ਅਧਯਾਪਕ, ਵਿਗਯਾਨ',
      },
      C: {
        en: 'ਸਹਿਯੋਗ, ਸ਼ੈਹਰ, ਅਧਿਆਪਕ, ਵਿਗਯਾਨ',
        pa: 'ਸਹਿਯੋਗ, ਸ਼ੈਹਰ, ਅਧਿਆਪਕ, ਵਿਗਯਾਨ',
        hi: 'ਸਹਿਯੋਗ, ਸ਼ੈਹਰ, ਅਧਿਆਪਕ, ਵਿਗਯਾਨ',
      },
      D: {
        en: 'ਸਹਯੋਗ, ਸ਼ਹਿਰ, ਅਧਿਯਾਪਕ, ਵਿਗਿਆਨ',
        pa: 'ਸਹਯੋਗ, ਸ਼ਹਿਰ, ਅਧਿਯਾਪਕ, ਵਿਗਿਆਨ',
        hi: 'ਸਹਯੋਗ, ਸ਼ਹਿਰ, ਅਧਿਯਾਪਕ, ਵਿਗਿਆਨ',
      },
    },
    correct: 'A',
    explanation: {
      en: 'According to standard Gurmukhi orthography rules: when medial "ਹ" produces an "ਐ" colouring in pronunciation, it is written with a Sihari on "ਹ" (ਸਹਿਯੋਗ, ਸ਼ਹਿਰ, ਮਹਿਲ), not Dulavan on the preceding letter; and Sanskrit clusters like ਧ੍ਯ/ਗ੍ਯ are written with Sihari + ਆ (ਅਧਿਆਪਕ, ਵਿਗਿਆਨ, ਅਭਿਆਸ).',
      pa: 'ਪੰਜਾਬੀ ਸ਼ਬਦ-ਜੋੜ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਸ਼ਬਦ ਦੇ ਵਿਚਕਾਰ ਆਉਣ ਵਾਲੇ "ਹ" ਤੋਂ ਪਹਿਲਾਂ ਦੁਲਾਵਾਂ ਦੀ ਥਾਂ "ਹ" ਨੂੰ ਸਿਹਾਰੀ ਲੱਗਦੀ ਹੈ (ਸਹਿਯੋਗ, ਸ਼ਹਿਰ) ਅਤੇ ਸੰਸਕ੍ਰਿਤ ਦੇ ਸੰਯੁਕਤ ਰੂਪਾਂ ਨੂੰ "ਇ + ਆ" (ਅਧਿਆਪਕ, ਵਿਗਿਆਨ) ਵਜੋਂ ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ।',
      hi: 'पंजाबी वर्तनी नियमों के अनुसार शब्द के मध्य में आने वाले "ਹ" से पहले दुलावां के स्थान पर "ਹ" को सिहारी लगती है (ਸਹਿਯੋਗ, ਸ਼ਹਿਰ) और संस्कृत के संयुक्त रूपों को "ਇ + ਆ" (ਅਧਿਆਪਕ, ਵਿਗਿਆਨ) के रूप में लिखा जाता है।',
    },
    difficulty: 'hard',
    ...ETT_COMMON_META,
  },

  // ===========================================================================
  // TOPIC 2: ETT PAPER A — PUNJABI GRAMMAR, VOCABULARY & IDIOMS
  // topicId: 'ett-paper-a-punjabi-grammar-vocabulary-idioms' (10 MCQs)
  // ===========================================================================
  {
    id: 'q-ett-pa-a2-1',
    topicId: 'ett-paper-a-punjabi-grammar-vocabulary-idioms',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level B)',
    question: {
      en: 'Into how many types is the Noun (ਨਾਂਵ) classified in Punjabi grammar, and to which category do the words "ਜਮਾਤ, ਫ਼ੌਜ, ਇੱਜੜ, ਡਾਰ" belong?',
      pa: 'ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਵਿੱਚ ਅਰਥਾਂ ਦੇ ਪੱਖ ਤੋਂ ਨਾਂਵ ਦੀਆਂ ਕਿੰਨੀਆਂ ਕਿਸਮਾਂ ਹਨ ਅਤੇ "ਜਮਾਤ, ਫ਼ੌਜ, ਇੱਜੜ, ਡਾਰ" ਸ਼ਬਦ ਕਿਸ ਕਿਸਮ ਦੇ ਨਾਂਵ ਹਨ?',
      hi: 'पंजाबी व्याकरण में अर्थ की दृष्टि से संज्ञा (ਨਾਂਵ) के कितने भेद हैं और "ਜਮਾਤ, ਫ਼ੌਜ, ਇੱਜੜ, ਡਾਰ" शब्द किस प्रकार की संज्ञा हैं?',
    },
    options: {
      A: {
        en: '5 types of Noun; these words are Collective Nouns (ਇਕੱਠਵਾਚਕ ਨਾਂਵ)',
        pa: 'ਨਾਂਵ ਦੀਆਂ 5 ਕਿਸਮਾਂ ਹਨ; ਇਹ ਸ਼ਬਦ "ਇਕੱਠਵਾਚਕ ਨਾਂਵ" ਹਨ',
        hi: 'संज्ञा के 5 भेद हैं; ये शब्द "समूहवाचक संज्ञा" (ਇਕੱਠਵਾਚਕ ਨਾਂਵ) हैं',
      },
      B: {
        en: '6 types of Noun; these words are Material Nouns (ਵਸਤੂਵਾਚਕ ਨਾਂਵ)',
        pa: 'ਨਾਂਵ ਦੀਆਂ 6 ਕਿਸਮਾਂ ਹਨ; ਇਹ ਸ਼ਬਦ "ਵਸਤੂਵਾਚਕ ਨਾਂਵ" ਹਨ',
        hi: 'संज्ञा के 6 भेद हैं; ये शब्द "द्रव्यवाचक संज्ञा" (ਵਸਤੂਵਾਚਕ ਨਾਂਵ) हैं',
      },
      C: {
        en: '5 types of Noun; these words are Abstract Nouns (ਭਾਵਵਾਚਕ ਨਾਂਵ)',
        pa: 'ਨਾਂਵ ਦੀਆਂ 5 ਕਿਸਮਾਂ ਹਨ; ਇਹ ਸ਼ਬਦ "ਭਾਵਵਾਚਕ ਨਾਂਵ" ਹਨ',
        hi: 'संज्ञा के 5 भेद हैं; ये शब्द "भाववाचक संज्ञा" (ਭਾਵਵਾਚਕ ਨਾਂਵ) हैं',
      },
      D: {
        en: '4 types of Noun; these words are Proper Nouns (ਖ਼ਾਸ / ਨਿਜਵਾਚਕ ਨਾਂਵ)',
        pa: 'ਨਾਂਵ ਦੀਆਂ 4 ਕਿਸਮਾਂ ਹਨ; ਇਹ ਸ਼ਬਦ "ਖ਼ਾਸ ਨਾਂਵ" ਹਨ',
        hi: 'संज्ञा के 4 भेद हैं; ये शब्द "व्यक्तिवाचक संज्ञा" (ਖ਼ਾਸ ਨਾਂਵ) हैं',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Punjabi grammar classifies Nouns (ਨਾਂਵ) into 5 types: ਆਮ/ਜਾਤੀਵਾਚਕ (Common), ਖ਼ਾਸ/ਨਿਜਵਾਚਕ (Proper), ਵਸਤੂਵਾਚਕ (Material: ਸੋਨਾ, ਤੇਲ, ਕਣਕ), ਇਕੱਠਵਾਚਕ (Collective: ਜਮਾਤ, ਫ਼ੌਜ, ਇੱਜੜ, ਡਾਰ, ਸਭਾ), and ਭਾਵਵਾਚਕ (Abstract: ਮਿਠਾਸ, ਬੁਢਾਪਾ, ਸੱਚਾਈ).',
      pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਨਾਂਵ ਦੀਆਂ 5 ਕਿਸਮਾਂ ਹੁੰਦੀਆਂ ਹਨ: ਆਮ ਨਾਂਵ, ਖ਼ਾਸ ਨਾਂਵ, ਵਸਤੂਵਾਚਕ ਨਾਂਵ, ਇਕੱਠਵਾਚਕ ਨਾਂਵ ਅਤੇ ਭਾਵਵਾਚਕ ਨਾਂਵ। "ਜਮਾਤ, ਫ਼ੌਜ, ਇੱਜੜ, ਡਾਰ" ਗਿਣਨਯੋਗ ਜੀਵਾਂ ਜਾਂ ਵਸਤਾਂ ਦੇ ਸਮੂਹ ਨੂੰ ਪ੍ਰਗਟ ਕਰਦੇ ਹਨ, ਇਸ ਲਈ ਇਹ ਇਕੱਠਵਾਚਕ ਨਾਂਵ ਹਨ।',
      hi: 'पंजाबी में संज्ञा (ਨਾਂਵ) के 5 भेद होते हैं: आम नांव, ख़ास नांव, वस्तुवाचक नांव, इकठवाचक नांव और भाववाचक नांव। "ਜਮਾਤ, ਫ਼ੌਜ, ਇੱਜੜ, ਡਾਰ" समूह का बोध कराते हैं, इसलिए ये इकठवाचक नांव (समूहवाचक संज्ञा) हैं।',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pa-a2-2',
    topicId: 'ett-paper-a-punjabi-grammar-vocabulary-idioms',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level A)',
    question: {
      en: 'Compare the two sentences: (1) "ਮੁੰਡੇ ਨੇ ਆਪ ਸਾਰਾ ਕੰਮ ਕੀਤਾ।" and (2) "ਆਪ ਜੀ ਅੰਦਰ ਆਓ।" — How is the pronoun "ਆਪ" classified in Sentence (1) versus Sentence (2) among the 6 types of Punjabi Pronouns (ਪੜਨਾਂਵ)?',
      pa: 'ਦੋਵਾਂ ਵਾਕਾਂ ਦੀ ਤੁਲਨਾ ਕਰੋ: (1) "ਮੁੰਡੇ ਨੇ ਆਪ ਸਾਰਾ ਕੰਮ ਕੀਤਾ।" ਅਤੇ (2) "ਆਪ ਜੀ ਅੰਦਰ ਆਓ।" — ਪੰਜਾਬੀ ਪੜਨਾਂਵ ਦੀਆਂ 6 ਕਿਸਮਾਂ ਵਿੱਚੋਂ ਵਾਕ (1) ਅਤੇ ਵਾਕ (2) ਵਿੱਚ "ਆਪ" ਸ਼ਬਦ ਕ੍ਰਮਵਾਰ ਕਿਹੜਾ ਪੜਨਾਂਵ ਹੈ?',
      hi: 'दोनों वाक्यों की तुलना करें: (1) "ਮੁੰਡੇ ਨੇ ਆਪ ਸਾਰਾ ਕੰਮ ਕੀਤਾ।" और (2) "ਆਪ ਜੀ ਅੰਦਰ ਆਓ।" — पंजाबी सर्वनाम (ਪੜਨਾਂਵ) के 6 भेदों में से वाक्य (1) और वाक्य (2) में "ਆਪ" शब्द क्रमशः कौन-सा सर्वनाम है?',
    },
    options: {
      A: {
        en: 'In (1) it is a Reflexive Pronoun (ਨਿਜਵਾਚਕ ਪੜਨਾਂਵ); in (2) it is a Second-Person Personal Pronoun (ਮੱਧਮ ਪੁਰਖ ਪੁਰਖਵਾਚਕ ਪੜਨਾਂਵ)',
        pa: 'ਵਾਕ (1) ਵਿੱਚ "ਨਿਜਵਾਚਕ ਪੜਨਾਂਵ" ਹੈ; ਵਾਕ (2) ਵਿੱਚ "ਪੁਰਖਵਾਚਕ ਪੜਨਾਂਵ (ਮੱਧਮ ਪੁਰਖ)" ਹੈ',
        hi: 'वाक्य (1) में "निजवाचक सर्वनाम" (ਨਿਜਵਾਚਕ ਪੜਨਾਂਵ) है; वाक्य (2) में "पुरुषवाचक सर्वनाम (मध्यम पुरुष)" है',
      },
      B: {
        en: 'In (1) it is a Personal Pronoun (ਪੁਰਖਵਾਚਕ ਪੜਨਾਂਵ); in (2) it is a Relative Pronoun (ਸੰਬੰਧਵਾਚਕ ਪੜਨਾਂਵ)',
        pa: 'ਵਾਕ (1) ਵਿੱਚ "ਪੁਰਖਵਾਚਕ ਪੜਨਾਂਵ" ਹੈ; ਵਾਕ (2) ਵਿੱਚ "ਸੰਬੰਧਵਾਚਕ ਪੜਨਾਂਵ" ਹੈ',
        hi: 'वाक्य (1) में "पुरुषवाचक सर्वनाम" है; वाक्य (2) में "संबंधवाचक सर्वनाम" है',
      },
      C: {
        en: 'In both (1) and (2) it is strictly a Reflexive Pronoun (ਨਿਜਵਾਚਕ ਪੜਨਾਂਵ)',
        pa: 'ਦੋਵਾਂ ਵਾਕਾਂ (1) ਅਤੇ (2) ਵਿੱਚ ਇਹ ਕੇਵਲ "ਨਿਜਵਾਚਕ ਪੜਨਾਂਵ" ਹੀ ਹੈ',
        hi: 'दोनों वाक्यों (1) और (2) में यह केवल "निजवाचक सर्वनाम" ही है',
      },
      D: {
        en: 'In (1) it is a Demonstrative Pronoun (ਨਿਸ਼ਚੇਵਾਚਕ ਪੜਨਾਂਵ); in (2) it is an Indefinite Pronoun (ਅਨਿਸ਼ਚੇਵਾਚਕ ਪੜਨਾਂਵ)',
        pa: 'ਵਾਕ (1) ਵਿੱਚ "ਨਿਸ਼ਚੇਵਾਚਕ ਪੜਨਾਂਵ" ਹੈ; ਵਾਕ (2) ਵਿੱਚ "ਅਨਿਸ਼ਚੇਵਾਚਕ ਪੜਨਾਂਵ" ਹੈ',
        hi: 'वाक्य (1) में "निश्चयवाचक सर्वनाम" है; वाक्य (2) में "अनिश्चयवाचक सर्वनाम" है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Punjabi has 6 types of Pronouns (ਪੁਰਖਵਾਚਕ, ਨਿਜਵਾਚਕ, ਨਿਸ਼ਚੇਵਾਚਕ, ਅਨਿਸ਼ਚੇਵਾਚਕ, ਸੰਬੰਧਵਾਚਕ, ਪ੍ਰਸ਼ਨਵਾਚਕ). When "ਆਪ" accompanies the subject to emphasize "by oneself" (ਮੁੰਡੇ ਨੇ ਆਪ...), it is a ਨਿਜਵਾਚਕ ਪੜਨਾਂਵ (Reflexive Pronoun). When "ਆਪ / ਆਪ ਜੀ" is used honorifically to address the listener ("You"), it functions as a ਮੱਧਮ ਪੁਰਖ ਪੁਰਖਵਾਚਕ ਪੜਨਾਂਵ.',
      pa: 'ਜਦੋਂ "ਆਪ" ਸ਼ਬਦ ਵਾਕ ਦੇ ਕਰਤਾ ਦੇ ਨਾਲ ਆ ਕੇ ਉਸ ਦੀ ਵਿਸ਼ੇਸ਼ਤਾ ਦੱਸੇ (ਮੁੰਡੇ ਨੇ ਆਪ...), ਤਾਂ ਉਹ "ਨਿਜਵਾਚਕ ਪੜਨਾਂਵ" ਹੁੰਦਾ ਹੈ। ਪਰ ਜਦੋਂ "ਆਪ ਜੀ" ਸਤਿਕਾਰ ਵਜੋਂ ਸੁਣਨ ਵਾਲੇ (ਤੁਸੀਂ) ਦੀ ਥਾਂ ਵਰਤਿਆ ਜਾਵੇ, ਤਾਂ ਉਹ "ਪੁਰਖਵਾਚਕ ਪੜਨਾਂਵ (ਮੱਧਮ ਪੁਰਖ)" ਹੁੰਦਾ ਹੈ।',
      hi: 'जब "ਆਪ" शब्द वाक्य के कर्ता के साथ आकर "स्वयं" का बोध कराए (ਮੁੰਡੇ ਨੇ ਆਪ...), तो वह "निजवाचक पड़नांव" होता है। किंतु जब "ਆਪ ਜੀ" आदरसूचक रूप में श्रोता (तुसीं/आप) के लिए प्रयुक्त हो, तो वह "पुरखवाचक पड़नांव (मध्यम पुरुष)" होता है।',
    },
    difficulty: 'hard',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pa-a2-3',
    topicId: 'ett-paper-a-punjabi-grammar-vocabulary-idioms',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level I)',
    question: {
      en: 'How many types of Adjectives (ਵਿਸ਼ੇਸ਼ਣ) exist in Punjabi grammar, and what is the key grammatical difference between "ਇਹ ਕਿਤਾਬ ਮੇਰੀ ਹੈ" and "ਇਹ ਮੇਰੀ ਕਿਤਾਬ ਹੈ"?',
      pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਵਿਸ਼ੇਸ਼ਣ ਦੀਆਂ ਕਿੰਨੀਆਂ ਕਿਸਮਾਂ ਹਨ, ਅਤੇ "ਇਹ ਕਿਤਾਬ ਮੇਰੀ ਹੈ" ਤੇ "ਇਹ ਮੇਰੀ ਕਿਤਾਬ ਹੈ" ਵਾਕਾਂ ਵਿੱਚ ਸ਼ਬਦ "ਇਹ" ਦੇ ਵਿਆਕਰਨਕ ਰੂਪ ਵਿੱਚ ਕੀ ਅੰਤਰ ਹੈ?',
      hi: 'पंजाबी में विशेषण के कितने भेद हैं, और "ਇਹ ਕਿਤਾਬ ਮੇਰੀ ਹੈ" तथा "ਇਹ ਮੇਰੀ ਕਿਤਾਬ ਹੈ" वाक्यों में शब्द "ਇਹ" के व्याकरणिक रूप में क्या अंतर है?',
    },
    options: {
      A: {
        en: '5 types of Adjectives; in "ਇਹ ਕਿਤਾਬ ਮੇਰੀ ਹੈ", "ਇਹ" is a Demonstrative Adjective (ਨਿਸ਼ਚੇਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ), whereas in "ਇਹ ਮੇਰੀ ਕਿਤਾਬ ਹੈ", "ਇਹ" is a Demonstrative Pronoun (ਨਿਸ਼ਚੇਵਾਚਕ ਪੜਨਾਂਵ)',
        pa: 'ਵਿਸ਼ੇਸ਼ਣ ਦੀਆਂ 5 ਕਿਸਮਾਂ ਹਨ; "ਇਹ ਕਿਤਾਬ ਮੇਰੀ ਹੈ" ਵਿੱਚ "ਇਹ" ਨਿਸ਼ਚੇਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ ਹੈ, ਜਦਕਿ "ਇਹ ਮੇਰੀ ਕਿਤਾਬ ਹੈ" ਵਿੱਚ "ਇਹ" ਨਿਸ਼ਚੇਵਾਚਕ ਪੜਨਾਂਵ ਹੈ',
        hi: 'विशेषण के 5 भेद हैं; "ਇਹ ਕਿਤਾਬ ਮੇਰੀ ਹੈ" में "ਇਹ" निश्चयवाचक विशेषण है, जबकि "ਇਹ ਮੇਰੀ ਕਿਤਾਬ ਹੈ" में "ਇਹ" निश्चयवाचक सर्वनाम है',
      },
      B: {
        en: '6 types of Adjectives; in both sentences "ਇਹ" functions purely as a Pronominal Adjective (ਪੜਨਾਂਵੀ ਵਿਸ਼ੇਸ਼ਣ)',
        pa: 'ਵਿਸ਼ੇਸ਼ਣ ਦੀਆਂ 6 ਕਿਸਮਾਂ ਹਨ; ਦੋਵਾਂ ਵਾਕਾਂ ਵਿੱਚ "ਇਹ" ਕੇਵਲ ਪੜਨਾਂਵੀ ਵਿਸ਼ੇਸ਼ਣ ਵਜੋਂ ਕੰਮ ਕਰਦਾ ਹੈ',
        hi: 'विशेषण के 6 भेद हैं; दोनों वाक्यों में "ਇਹ" केवल सार्वनामिक विशेषण के रूप में कार्य करता है',
      },
      C: {
        en: '4 types of Adjectives; in "ਇਹ ਕਿਤਾਬ ਮੇਰੀ ਹੈ", "ਇਹ" is a Numeral Adjective (ਸੰਖਿਆਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ)',
        pa: 'ਵਿਸ਼ੇਸ਼ਣ ਦੀਆਂ 4 ਕਿਸਮਾਂ ਹਨ; "ਇਹ ਕਿਤਾਬ ਮੇਰੀ ਹੈ" ਵਿੱਚ "ਇਹ" ਸੰਖਿਆਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ ਹੈ',
        hi: 'विशेषण के 4 भेद हैं; "ਇਹ ਕਿਤਾਬ ਮੇਰੀ ਹੈ" में "ਇਹ" संख्यावाचक विशेषण है',
      },
      D: {
        en: '5 types of Adjectives; in "ਇਹ ਕਿਤਾਬ ਮੇਰੀ ਹੈ", "ਇਹ" is a Quantitative Adjective (ਪਰਿਮਾਣਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ)',
        pa: 'ਵਿਸ਼ੇਸ਼ਣ ਦੀਆਂ 5 ਕਿਸਮਾਂ ਹਨ; "ਇਹ ਕਿਤਾਬ ਮੇਰੀ ਹੈ" ਵਿੱਚ "ਇਹ" ਪਰਿਮਾਣਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ ਹੈ',
        hi: 'विशेषण के 5 भेद हैं; "ਇਹ ਕਿਤਾਬ ਮੇਰੀ ਹੈ" में "ਇਹ" परिमाणवाचक विशेषण है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Punjabi has 5 types of Adjectives (ਗੁਣਵਾਚਕ, ਸੰਖਿਆਵਾਚਕ, ਪਰਿਮਾਣਵਾਚਕ, ਨਿਸ਼ਚੇਵਾਚਕ, ਪੜਨਾਂਵੀ). When "ਇਹ/ਉਹ" immediately precedes and points to a noun ("ਇਹ ਕਿਤਾਬ"), it becomes a Demonstrative Adjective (ਨਿਸ਼ਚੇਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ); when it stands alone for the noun ("ਇਹ ਮੇਰੀ ਕਿਤਾਬ ਹੈ"), it is a ਨਿਸ਼ਚੇਵਾਚਕ ਪੜਨਾਂਵ.',
      pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਵਿਸ਼ੇਸ਼ਣ ਦੀਆਂ 5 ਕਿਸਮਾਂ ਹਨ: ਗੁਣਵਾਚਕ, ਸੰਖਿਆਵਾਚਕ, ਪਰਿਮਾਣਵਾਚਕ, ਨਿਸ਼ਚੇਵਾਚਕ ਅਤੇ ਪੜਨਾਂਵੀ ਵਿਸ਼ੇਸ਼ਣ। ਜਦੋਂ "ਇਹ" ਨਾਂਵ (ਕਿਤਾਬ) ਦੇ ਬਿਲਕੁਲ ਪਹਿਲਾਂ ਆ ਕੇ ਇਸ਼ਾਰਾ ਕਰ ਕੇ ਵਿਸ਼ੇਸ਼ਤਾ ਦੱਸੇ ("ਇਹ ਕਿਤਾਬ ਮੇਰੀ ਹੈ"), ਤਾਂ ਇਹ ਨਿਸ਼ਚੇਵਾਚਕ ਵਿਸ਼ੇਸ਼ਣ ਹੈ; ਨਹੀਂ ਤਾਂ ਨਿਸ਼ਚੇਵਾਚਕ ਪੜਨਾਂਵ ਹੈ।',
      hi: 'पंजाबी में विशेषण के 5 भेद हैं: गुणवाचक, संख्यावाचक, परिमाणवाचक, निश्चयवाचक और सार्वनामिक (पड़नांवी) विशेषण। जब "ਇਹ" संज्ञा (ਕਿਤਾਬ) के ठीक पहले आकर उसकी ओर संकेत करे ("ਇਹ ਕਿਤਾਬ ਮੇਰੀ ਹੈ"), तो यह निश्चयवाचक विशेषण होता है, अन्यथा निश्चयवाचक सर्वनाम।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pa-a2-4',
    topicId: 'ett-paper-a-punjabi-grammar-vocabulary-idioms',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level I)',
    question: {
      en: 'What are the correct First Causative (ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ) and Second Causative (ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ) forms of the base verb "ਪੜ੍ਹਨਾ" (to read/study)?',
      pa: 'ਮੂਲ ਕਿਰਿਆ "ਪੜ੍ਹਨਾ" ਤੋਂ ਬਣਨ ਵਾਲੀ "ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ" ਅਤੇ "ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ" ਦਾ ਸਹੀ ਜੁੱਟ ਕਿਹੜਾ ਹੈ?',
      hi: 'मूल क्रिया "ਪੜ੍ਹਨਾ" (पढ़ना) से बनने वाली "प्रथम प्रेरणार्थक क्रिया" और "द्वितीय प्रेरणार्थक क्रिया" का सही युग्म कौन-सा है?',
    },
    options: {
      A: {
        en: 'First Causative: ਪੜ੍ਹਾਉਣਾ (to teach); Second Causative: ਪੜ੍ਹਵਾਉਣਾ (to have someone taught by a third person)',
        pa: 'ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ: ਪੜ੍ਹਾਉਣਾ; ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ: ਪੜ੍ਹਵਾਉਣਾ',
        hi: 'प्रथम प्रेरणार्थक: ਪੜ੍ਹਾਉਣਾ (पढ़ाना); द्वितीय प्रेरणार्थक: ਪੜ੍ਹਵਾਉਣਾ (पढ़वाना)',
      },
      B: {
        en: 'First Causative: ਪੜ੍ਹਵਾਉਣਾ; Second Causative: ਪੜ੍ਹਾਉਣਾ',
        pa: 'ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ: ਪੜ੍ਹਵਾਉਣਾ; ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ: ਪੜ੍ਹਾਉਣਾ',
        hi: 'प्रथम प्रेरणार्थक: ਪੜ੍ਹਵਾਉਣਾ; द्वितीय प्रेरणार्थक: ਪੜ੍ਹਾਉਣਾ',
      },
      C: {
        en: 'First Causative: ਪੜ੍ਹਿਆ; Second Causative: ਪੜ੍ਹਾਇਆ',
        pa: 'ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ: ਪੜ੍ਹਿਆ; ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ: ਪੜ੍ਹਾਇਆ',
        hi: 'प्रथम प्रेरणार्थक: ਪੜ੍ਹਿਆ; द्वितीय प्रेरणार्थक: ਪੜ੍ਹਾਇਆ',
      },
      D: {
        en: 'First Causative: ਪੜ੍ਹਨ; Second Causative: ਪੜ੍ਹਾਉਣ',
        pa: 'ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ: ਪੜ੍ਹਨ; ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ: ਪੜ੍ਹਾਉਣ',
        hi: 'प्रथम प्रेरणार्थक: ਪੜ੍ਹਨ; द्वितीय प्रेरणार्थक: ਪੜ੍ਹਾਉਣ',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Punjabi grammar, when the subject zelf performs the action, it is ਸਾਧਾਰਨ ਕਿਰਿਆ (ਪੜ੍ਹਨਾ). When the subject directs/helps another to act, it is ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ (ਪੜ੍ਹਾਉਣਾ, ਲਿਖਾਉਣਾ, ਕਰਨਾ → ਕਰਾਉਣਾ). When the subject gets the work done through a third agent, it is ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ (ਪੜ੍ਹਵਾਉਣਾ, ਲਿਖਵਾਉਣਾ, ਕਰਵਾਉਣਾ).',
      pa: 'ਜਦੋਂ ਕਰਤਾ ਆਪ ਕੰਮ ਕਰਨ ਦੀ ਬਜਾਏ ਕਿਸੇ ਦੂਜੇ ਤੋਂ ਕਰਵਾਏ, ਉਸ ਨੂੰ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ ਕਹਿੰਦੇ ਹਨ। ਮੂਲ ਕਿਰਿਆ "ਪੜ੍ਹਨਾ" ਤੋਂ ਪਹਿਲੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ "ਪੜ੍ਹਾਉਣਾ" ਅਤੇ ਕਿਸੇ ਤੀਜੀ ਧਿਰ ਰਾਹੀਂ ਕੰਮ ਕਰਵਾਉਣ ਲਈ ਦੂਜੀ ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ "ਪੜ੍ਹਵਾਉਣਾ" ਬਣਦੀ ਹੈ।',
      hi: 'मूल क्रिया "ਪੜ੍ਹਨਾ" से प्रथम प्रेरणार्थक क्रिया "ਪੜ੍ਹਾਉਣਾ" और किसी तीसरे व्यक्ति के माध्यम से कार्य करवाने के लिए द्वितीय प्रेरणार्थक क्रिया "ਪੜ੍ਹਵਾਉਣਾ" बनती है।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pa-a2-5',
    topicId: 'ett-paper-a-punjabi-grammar-vocabulary-idioms',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level I)',
    question: {
      en: 'Identify the correct Prefix (ਅਗੇਤਰ) in the word "ਨਿਰਉਤਸ਼ਾਹ" and the correct Suffix (ਪਿਛੇਤਰ) in the word "ਪੜ੍ਹਾਕੂ":',
      pa: '"ਨਿਰਉਤਸ਼ਾਹ" ਸ਼ਬਦ ਵਿੱਚ ਲੱਗਿਆ ਸਹੀ ਅਗੇਤਰ ਅਤੇ "ਪੜ੍ਹਾਕੂ" ਸ਼ਬਦ ਵਿੱਚ ਲੱਗਿਆ ਸਹੀ ਪਿਛੇਤਰ ਚੁਣੋ:',
      hi: '"ਨਿਰਉਤਸ਼ਾਹ" शब्द में लगा सही उपसर्ग (अगेतर) और "ਪੜ੍ਹਾਕੂ" शब्द में लगा सही प्रत्यय (पिछेतर) चुनें:',
    },
    options: {
      A: {
        en: 'Prefix: ਨਿਰ (ਨਿਰ + ਉਤਸ਼ਾਹ); Suffix: ਆਕੂ (ਪੜ੍ਹ + ਆਕੂ)',
        pa: 'ਅਗੇਤਰ: ਨਿਰ (ਨਿਰ + ਉਤਸ਼ਾਹ); ਪਿਛੇਤਰ: ਆਕੂ (ਪੜ੍ਹ + ਆਕੂ)',
        hi: 'अगेतर (उपसर्ग): ਨਿਰ (ਨਿਰ + ਉਤਸ਼ਾਹ); पिछेतर (प्रत्यय): ਆਕੂ (ਪੜ੍ਹ + ਆਕੂ)',
      },
      B: {
        en: 'Prefix: ਨਿ (ਨਿ + ਰਉਤਸ਼ਾਹ); Suffix: ਕੂ (ਪੜ੍ਹਾ + ਕੂ)',
        pa: 'ਅਗੇਤਰ: ਨਿ (ਨਿ + ਰਉਤਸ਼ਾਹ); ਪਿਛੇਤਰ: ਕੂ (ਪੜ੍ਹਾ + ਕੂ)',
        hi: 'अगेतर (उपसर्ग): ਨਿ (ਨਿ + ਰਉਤਸ਼ਾਹ); पिछेतर (प्रत्यय): ਕੂ (ਪੜ੍ਹਾ + ਕੂ)',
      },
      C: {
        en: 'Prefix: ਨਿਰਉ (ਨਿਰਉ + ਤਸ਼ਾਹ); Suffix: ਊ (ਪੜ੍ਹਾਕ + ਊ)',
        pa: 'ਅਗੇਤਰ: ਨਿਰਉ (ਨਿਰਉ + ਤਸ਼ਾਹ); ਪਿਛੇਤਰ: ਊ (ਪੜ੍ਹਾਕ + ਊ)',
        hi: 'अगेतर (उपसर्ग): ਨਿਰਉ (ਨਿਰਉ + ਤਸ਼ਾਹ); पिछेतर (प्रत्यय): ਊ (ਪੜ੍ਹਾਕ + ਊ)',
      },
      D: {
        en: 'Prefix: ਨਿਰਤ (ਨਿਰਤ + ਸ਼ਾਹ); Suffix: ਹਾਕੂ (ਪੜ + ਹਾਕੂ)',
        pa: 'ਅਗੇਤਰ: ਨਿਰਤ (ਨਿਰਤ + ਸ਼ਾਹ); ਪਿਛੇਤਰ: ਹਾਕੂ (ਪੜ + ਹਾਕੂ)',
        hi: 'अगेतर (उपसर्ग): ਨਿਰਤ (ਨਿਰਤ + ਸ਼ਾਹ); पिछेतर (प्रत्यय): ਹਾਕੂ (ਪੜ + ਹਾਕੂ)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'When isolating an Agetar (Prefix) or Pichhetar (Suffix), the remaining base word (ਮੂਲ ਸ਼ਬਦ) must be meaningful. In "ਨਿਰਉਤਸ਼ਾਹ", the prefix is "ਨਿਰ" and the base word is "ਉਤਸ਼ਾਹ". In "ਪੜ੍ਹਾਕੂ", the verbal root is "ਪੜ੍ਹ" and the suffix is "ਆਕੂ" (as in ਲੜਾਕੂ = ਲੜ + ਆਕੂ).',
      pa: 'ਅਗੇਤਰ ਜਾਂ ਪਿਛੇਤਰ ਵੱਖ ਕਰਨ ਵੇਲੇ ਮੂਲ ਸ਼ਬਦ ਸਾਰਥਕ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ। "ਨਿਰਉਤਸ਼ਾਹ" ਵਿੱਚ ਮੂਲ ਸ਼ਬਦ "ਉਤਸ਼ਾਹ" ਹੈ ਅਤੇ ਅਗੇਤਰ "ਨਿਰ" ਹੈ। "ਪੜ੍ਹਾਕੂ" ਵਿੱਚ ਧਾਤੂ/ਮੂਲ ਸ਼ਬਦ "ਪੜ੍ਹ" ਹੈ ਅਤੇ ਪਿਛੇਤਰ "ਆਕੂ" ਹੈ (ਜਿਵੇਂ ਲੜ + ਆਕੂ = ਲੜਾਕੂ)।',
      hi: 'उपसर्ग या प्रत्यय अलग करते समय मूल शब्द सार्थक होना चाहिए। "ਨਿਰਉਤਸ਼ਾਹ" में मूल शब्द "ਉਤਸ਼ਾਹ" और अगेतर "ਨਿਰ" है। "ਪੜ੍ਹਾਕੂ" में मूल धातु "ਪੜ੍ਹ" और पिछेतर "ਆਕੂ" है।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pa-a2-6',
    topicId: 'ett-paper-a-punjabi-grammar-vocabulary-idioms',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level B)',
    question: {
      en: 'Which option correctly gives a valid Synonym (ਸਮਾਨਾਰਥਕ ਸ਼ਬਦ) of "ਉਸਤਤ" and the exact Antonym (ਵਿਰੋਧਾਰਥਕ ਸ਼ਬਦ) of "ਸੰਖੇਪ"?',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਵਿਕਲਪ ਕ੍ਰਮਵਾਰ "ਉਸਤਤ" ਦਾ ਸਹੀ ਸਮਾਨਾਰਥਕ ਸ਼ਬਦ ਅਤੇ "ਸੰਖੇਪ" ਦਾ ਸਹੀ ਵਿਰੋਧਾਰਥਕ ਸ਼ਬਦ ਦਰਸਾਉਂਦਾ ਹੈ?',
      hi: 'निम्नलिखित में से कौन-सा विकल्प क्रमशः "ਉਸਤਤ" का सही समानार्थक शब्द और "ਸੰਖੇਪ" का सही विपरीतार्थक (विलोम) शब्द दर्शाता है?',
    },
    options: {
      A: {
        en: 'Synonym of ਉਸਤਤ: ਵਡਿਆਈ / ਪ੍ਰਸ਼ੰਸਾ; Antonym of ਸੰਖੇਪ: ਵਿਸਥਾਰ',
        pa: '"ਉਸਤਤ" ਦਾ ਸਮਾਨਾਰਥਕ: ਵਡਿਆਈ / ਪ੍ਰਸ਼ੰਸਾ; "ਸੰਖੇਪ" ਦਾ ਵਿਰੋਧਾਰਥਕ: ਵਿਸਥਾਰ',
        hi: '"ਉਸਤਤ" का समानार्थक: ਵਡਿਆਈ / ਪ੍ਰਸ਼ੰਸਾ; "ਸੰਖੇਪ" का विलोम: ਵਿਸਥਾਰ',
      },
      B: {
        en: 'Synonym of ਉਸਤਤ: ਨਿੰਦਿਆ / ਚੁਗਲੀ; Antonym of ਸੰਖੇਪ: ਨਿਚੋੜ',
        pa: '"ਉਸਤਤ" ਦਾ ਸਮਾਨਾਰਥਕ: ਨਿੰਦਿਆ / ਚੁਗਲੀ; "ਸੰਖੇਪ" ਦਾ ਵਿਰੋਧਾਰਥਕ: ਨਿਚੋੜ',
        hi: '"ਉਸਤਤ" का समानार्थक: ਨਿੰਦਿਆ / ਚੁਗਲੀ; "ਸੰਖੇਪ" का विलोम: ਨਿਚੋੜ',
      },
      C: {
        en: 'Synonym of ਉਸਤਤ: ਹੰਕਾਰ / ਗ਼ਰੂਰ; Antonym of ਸੰਖੇਪ: ਸਾਰਾਂਸ਼',
        pa: '"ਉਸਤਤ" ਦਾ ਸਮਾਨਾਰਥਕ: ਹੰਕਾਰ / ਗ਼ਰੂਰ; "ਸੰਖੇਪ" ਦਾ ਵਿਰੋਧਾਰਥਕ: ਸਾਰਾਂਸ਼',
        hi: '"ਉਸਤਤ" का समानार्थक: ਹੰਕਾਰ / ਗ਼ਰੂਰ; "ਸੰਖੇਪ" का विलोम: ਸਾਰਾਂਸ਼',
      },
      D: {
        en: 'Synonym of ਉਸਤਤ: ਨਿਮਰਤਾ / ਹਲੀਮੀ; Antonym of ਸੰਖੇਪ: ਛੋਟਾ',
        pa: '"ਉਸਤਤ" ਦਾ ਸਮਾਨਾਰਥਕ: ਨਿਮਰਤਾ / ਹਲੀਮੀ; "ਸੰਖੇਪ" ਦਾ ਵਿਰੋਧਾਰਥਕ: ਛੋਟਾ',
        hi: '"ਉਸਤਤ" का समानार्थक: ਨਿਮਰਤਾ / ਹਲੀਮੀ; "ਸੰਖੇਪ" का विलोम: ਛੋਟਾ',
      },
    },
    correct: 'A',
    explanation: {
      en: '"ਉਸਤਤ" means praise or eulogy; its synonyms are ਵਡਿਆਈ, ਪ੍ਰਸ਼ੰਸਾ, ਸਿਫ਼ਤ, ਸਲਾਘਾ (and its antonym is ਨਿੰਦਿਆ). "ਸੰਖੇਪ" means brief/concise; its exact antonym is "ਵਿਸਥਾਰ" (detailed expansion).',
      pa: '"ਉਸਤਤ" ਦੇ ਸਮਾਨਾਰਥਕ ਸ਼ਬਦ ਹਨ—ਵਡਿਆਈ, ਪ੍ਰਸ਼ੰਸਾ, ਸਿਫ਼ਤ, ਸਲਾਘਾ (ਅਤੇ ਇਸ ਦਾ ਵਿਰੋਧੀ ਸ਼ਬਦ "ਨਿੰਦਿਆ" ਹੈ)। "ਸੰਖੇਪ" ਦਾ ਅਰਥ ਛੋਟਾ ਰੂਪ ਹੈ ਅਤੇ ਇਸ ਦਾ ਵਿਰੋਧਾਰਥਕ ਸ਼ਬਦ "ਵਿਸਥਾਰ" ਹੈ।',
      hi: '"ਉਸਤਤ" (स्तुति) के समानार्थक शब्द हैं—ਵਡਿਆਈ, ਪ੍ਰਸ਼ੰਸਾ, ਸਿਫ਼ਤ, ਸਲਾਘਾ (तथा इसका विलोम "ਨਿੰਦਿਆ" है)। "ਸੰਖੇਪ" का विलोम शब्द "ਵਿਸਥਾਰ" है।',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pa-a2-7',
    topicId: 'ett-paper-a-punjabi-grammar-vocabulary-idioms',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level A)',
    question: {
      en: 'Which single polysemous Punjabi word (ਬਹੁ-ਅਰਥਕ ਸ਼ਬਦ) carries ALL FOUR of these distinct meanings: (1) a field boundary ridge, (2) sulking heat/humid闷ness, (3) twist in a rope, and (4) wrinkle/cramp in the stomach or brow?',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਇੱਕੋ ਬਹੁ-ਅਰਥਕ ਸ਼ਬਦ ਇਹਨਾਂ ਚਾਰਾਂ ਅਰਥਾਂ ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ: (1) ਖੇਤ ਦਾ ਬੰਨਾ, (2) ਗਰਮੀ ਜਾਂ ਹੁੰਮਸ, (3) ਰੱਸੀ ਦਾ ਮਰੋੜਾ/ਵਲ਼, ਅਤੇ (4) ਮੱਥੇ ਦੀ ਤਿਉੜੀ ਜਾਂ ਢਿੱਡ ਦਾ ਮਰੋੜ?',
      hi: 'निम्नलिखित में से कौन-सा एक ही अनेकार्थक (बहु-अर्थक) पंजाबी शब्द इन चारों अर्थों में प्रयुक्त होता है: (1) खेत की मेंड़, (2) गर्मी या उमस, (3) रस्सी की ऐंठन/बल, और (4) माथे की शिकन या पेट की मरोड़?',
    },
    options: {
      A: {
        en: 'ਵੱਟ (Vatt)',
        pa: 'ਵੱਟ',
        hi: 'ਵੱਟ (वट्ट)',
      },
      B: {
        en: 'ਹਾਰ (Haar)',
        pa: 'ਹਾਰ',
        hi: 'ਹਾਰ (हार)',
      },
      C: {
        en: 'ਉੱਤਰ (Uttar)',
        pa: 'ਉੱਤਰ',
        hi: 'ਉੱਤਰ (उत्तर)',
      },
      D: {
        en: 'تਾਰ / ਤਾਰ (Taar)',
        pa: 'ਤਾਰ',
        hi: 'ਤਾਰ (तार)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Punjabi, "ਵੱਟ" is a classic polysemous word (ਬਹੁ-ਅਰਥਕ ਸ਼ਬਦ) meaning: (1) ਖੇਤ ਦੀ ਵੱਟ (boundary ridge of a field), (2) ਗਰਮੀ/ਹੁੰਮਸ ("ਅੱਜ ਬੜਾ ਵੱਟ ਹੈ"), (3) ਰੱਸੀ ਦਾ ਵੱਟ (twist in a string/rope), and (4) ਮੱਥੇ ਦੇ ਵੱਟ / ਢਿੱਡ ਵਿੱਚ ਵੱਟ ਪੈਣੇ (wrinkle/stomach cramp or displeasure).',
      pa: 'ਪੰਜਾਬੀ ਵਿੱਚ "ਵੱਟ" ਇੱਕ ਪ੍ਰਮੁੱਖ ਬਹੁ-ਅਰਥਕ ਸ਼ਬਦ ਹੈ ਜਿਸ ਦੇ ਵੱਖ-ਵੱਖ ਪ੍ਰਸੰਗਾਂ ਵਿੱਚ ਅਰਥ ਹਨ: ਖੇਤ ਦਾ ਬੰਨਾ (ਵੱਟ), ਹੁੰਮਸ ਜਾਂ ਗਰਮੀ, ਰੱਸੀ ਨੂੰ ਵੱਟ ਦੇਣਾ (ਮਰੋੜਾ), ਅਤੇ ਮੱਥੇ ਉੱਤੇ ਵੱਟ ਪਾਉਣਾ ਜਾਂ ਢਿੱਡ ਵਿੱਚ ਵੱਟ ਪੈਣਾ।',
      hi: 'पंजाबी में "ਵੱਟ" एक प्रमुख बहु-अर्थक शब्द है जिसके विभिन्न अर्थ हैं: खेत की मेंड़, उमस या गर्मी, रस्सी का बल/ऐंठन, तथा माथे पर शिकन या पेट में मरोड़ पड़ना।',
    },
    difficulty: 'hard',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pa-a2-8',
    topicId: 'ett-paper-a-punjabi-grammar-vocabulary-idioms',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level B)',
    question: {
      en: 'In Punjabi one-word substitution (ਬਹੁਤੇ ਸ਼ਬਦਾਂ ਦੀ ਥਾਂ ਇੱਕ ਸ਼ਬਦ), what is the exact term for "ਉਹ ਥਾਂ ਜਿੱਥੇ ਸਰਕਾਰੀ ਸਿੱਕੇ ਘੜੇ ਜਾਂਦੇ ਹਨ" (a place where coins are minted)?',
      pa: '"ਬਹੁਤੇ ਸ਼ਬਦਾਂ ਦੀ ਥਾਂ ਇੱਕ ਸ਼ਬਦ" ਅਨੁਸਾਰ "ਉਹ ਥਾਂ ਜਿੱਥੇ ਸਰਕਾਰੀ ਸਿੱਕੇ ਘੜੇ ਜਾਂਦੇ ਹਨ" ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
      hi: '"अनेक शब्दों के लिए एक शब्द" के अनुसार पंजाबी में "ਉਹ ਥਾਂ ਜਿੱਥੇ ਸਰਕਾਰੀ ਸਿੱਕੇ ਘੜੇ ਜਾਂਦੇ ਹਨ" (वह स्थान जहाँ सरकारी सिक्के ढाले जाते हैं) को क्या कहा जाता है?',
    },
    options: {
      A: {
        en: 'ਟਕਸਾਲ (Taksal — Mint)',
        pa: 'ਟਕਸਾਲ',
        hi: 'ਟਕਸਾਲ (टकसाल)',
      },
      B: {
        en: 'ਖ਼ਜ਼ਾਨਾ (Khazana — Treasury)',
        pa: 'ਖ਼ਜ਼ਾਨਾ',
        hi: 'ਖ਼ਜ਼ਾਨਾ (खज़ाना)',
      },
      C: {
        en: 'ਕੁਠਾਲੀ (Kuthali — Crucible for melting gold/silver)',
        pa: 'ਕੁਠਾਲੀ',
        hi: 'ਕੁਠਾਲੀ (कुठाली)',
      },
      D: {
        en: 'ਅਜਾਇਬ-ਘਰ (Ajaib-ghar — Museum)',
        pa: 'ਅਜਾਇਬ-ਘਰ',
        hi: 'ਅਜਾਇਬ-ਘਰ (अजायबघर)',
      },
    },
    correct: 'A',
    explanation: {
      en: '"ਟਕਸਾਲ" (Mint) is the place where official coins/currency are struck ("ਜਿੱਥੇ ਸਿੱਕੇ ਘੜੇ ਜਾਂਦੇ ਹਨ"). From "ਟਕਸਾਲ" comes the adjective "ਟਕਸਾਲੀ" (standard/authentic, as in ਟਕਸਾਲੀ ਭਾਸ਼ਾ). Note that "ਕੁਠਾਲੀ" is the small earthen pot used by a goldsmith to melt metal.',
      pa: 'ਜਿੱਥੇ ਸਰਕਾਰੀ ਸਿੱਕੇ ਘੜੇ ਜਾਂਦੇ ਹਨ, ਉਸ ਥਾਂ ਨੂੰ "ਟਕਸਾਲ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ (ਅਤੇ ਇਸੇ ਤੋਂ ਮਿਆਰੀ ਭਾਸ਼ਾ ਲਈ "ਟਕਸਾਲੀ" ਸ਼ਬਦ ਬਣਿਆ ਹੈ)। ਸੋਨਾ-ਚਾਂਦੀ ਪਿਘਲਾਉਣ ਵਾਲੀ ਭੱਠੀ/برਤਨ ਨੂੰ "ਕੁਠਾਲੀ" ਕਹਿੰਦੇ ਹਨ।',
      hi: 'जहाँ सरकारी सिक्के ढाले जाते हैं, उस स्थान को "ਟਕਸਾਲ" (टकसाल) कहा जाता है (इसी से मानक भाषा के लिए "ਟਕਸਾਲੀ" शब्द बना है)। सोना-चाँदी गलाने के पात्र को "ਕੁਠਾਲੀ" कहते हैं।',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pa-a2-9',
    topicId: 'ett-paper-a-punjabi-grammar-vocabulary-idioms',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level I)',
    question: {
      en: 'Among the 13 standard punctuation marks (ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ) in Punjabi, which punctuation mark is used to show the elision/omission of a letter inside a word, such as in "\'ਚ" (for ਵਿੱਚ) or "\'ਤੇ" (for ਉੱਤੇ)?',
      pa: 'ਪੰਜਾਬੀ ਦੇ 13 ਪ੍ਰਮੁੱਖ ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹਾਂ ਵਿੱਚੋਂ ਕਿਸੇ ਸ਼ਬਦ ਦੇ ਛੱਡੇ ਗਏ ਅੱਖਰ ਨੂੰ ਦਰਸਾਉਣ ਲਈ (ਜਿਵੇਂ "ਵਿੱਚ" ਲਈ "\'ਚ" ਜਾਂ "ਉੱਤੇ" ਲਈ "\'ਤੇ") ਕਿਹੜਾ ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
      hi: 'पंजाबी के 13 प्रमुख विराम चिह्नों में से किसी शब्द के लुप्त अक्षर को दर्शाने के लिए (जैसे "ਵਿੱਚ" के लिए "\'ਚ" या "ਉੱਤੇ" के लिए "\'ਤੇ") कौन-सा विराम चिह्न प्रयुक्त होता है?',
    },
    options: {
      A: {
        en: 'ਛੁੱਟ ਮਰੋੜੀ ( ’ — Apostrophe)',
        pa: 'ਛੁੱਟ ਮਰੋੜੀ ( ’ )',
        hi: 'ਛੁੱਟ ਮਰੋੜੀ ( ’ — अपॉस्ट्रॉफी / लोप चिह्न)',
      },
      B: {
        en: 'ਬਿੰਦੀ ਕਾਮਾ ( ; — Semicolon)',
        pa: 'ਬਿੰਦੀ ਕਾਮਾ ( ; )',
        hi: 'ਬਿੰਦੀ ਕਾਮਾ ( ; — अर्धविराम)',
      },
      C: {
        en: 'ਜੋੜਨੀ ( - — Hyphen)',
        pa: 'ਜੋੜਨੀ ( - )',
        hi: 'ਜੋੜਨੀ ( - — योजक चिह्न)',
      },
      D: {
        en: 'ਦੁਬਿੰਦੀ ਡੈਸ਼ ( :- — Colon Dash)',
        pa: 'ਦੁਬਿੰਦੀ ਡੈਸ਼ ( :- )',
        hi: 'ਦੁਬਿੰਦੀ ਡੈਸ਼ ( :- — विवरण चिह्न)',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Punjabi grammar, there are 13 standard punctuation marks (ਡੰਡੀ, ਪ੍ਰਸ਼ਨ ਚਿੰਨ੍ਹ, ਵਿਸਮਿਕ ਚਿੰਨ੍ਹ, ਕਾਮਾ, ਬਿੰਦੀ ਕਾਮਾ, ਦੁਬਿੰਦੀ, ਡੈਸ਼, ਦੁਬਿੰਦੀ ਡੈਸ਼, ਪੁੱਠੇ ਕਾਮੇ, ਬਰੈਕਟ, ਜੋੜਨੀ, ਬਿੰਦੀ, ਛੁੱਟ ਮਰੋੜੀ). "ਛੁੱਟ ਮਰੋੜੀ" (’) is used when part of a word is omitted in speech/writing, e.g., \'ਚ (ਵਿੱਚ), \'ਤੇ (ਉੱਤੇ), \'ਕੱਠੇ (ਇਕੱਠੇ).',
      pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਕਿਸੇ ਸ਼ਬਦ ਦੇ ਕਿਸੇ ਅੱਖਰ ਦੇ ਲੋਪ (ਛੁੱਟ ਜਾਣ) ਨੂੰ ਪ੍ਰਗਟ ਕਰਨ ਲਈ "ਛੁੱਟ ਮਰੋੜੀ" ( ’ ) ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਜਾਂਦੀ ਹੈ; ਜਿਵੇਂ: ਵਿੱਚ → \'ਚ, ਉੱਤੇ → \'ਤੇ, ਇਕੱਲਾ → \'ਕੱਲਾ।',
      hi: 'पंजाबी में किसी शब्द के किसी अक्षर के लोप (छूट जाने) को प्रकट करने के लिए "ਛੁੱਟ ਮਰੋੜੀ" ( ’ ) का प्रयोग किया जाता है; जैसे: ਵਿੱਚ → \'ਚ, ਉੱਤੇ → \'ਤੇ।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pa-a2-10',
    topicId: 'ett-paper-a-punjabi-grammar-vocabulary-idioms',
    subjectId: 'punjabi',
    examId: 'ett-paper-a',
    examTag: 'Punjab ETT Paper A (Level I)',
    question: {
      en: 'By what grammatical process are the feminine nouns in the pairs "ਮਾਸੜ → ਮਾਸੀ", "ਫੁੱਫੜ → ਭੂਆ", and "ਪਿਤਾ → ਮਾਤਾ" formed in Punjabi?',
      pa: 'ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਵਿੱਚ "ਮਾਸੜ → ਮਾਸੀ", "ਫੁੱਫੜ → ਭੂਆ" ਅਤੇ "ਪਿਤਾ → ਮਾਤਾ" ਦੇ ਲਿੰਗ-ਬਦਲੋ ਜੁੱਟ ਕਿਸ ਨਿਯਮ ਅਧੀਨ ਬਣਦੇ ਹਨ?',
      hi: 'पंजाबी व्याकरण में "ਮਾਸੜ → ਮਾਸੀ", "ਫੁੱਫੜ → ਭੂਆ" और "ਪਿਤਾ → ਮਾਤਾ" के लिंग-परिवर्तन युग्म किस नियम के अंतर्गत बनते हैं?',
    },
    options: {
      A: {
        en: 'By using lexically distinct or suppletive kinship stems rather than adding a standard feminine suffix to the masculine noun',
        pa: 'ਪੁਲਿੰਗ ਸ਼ਬਦ ਦੇ ਪਿੱਛੇ ਸਧਾਰਨ ਪਿਛੇਤਰ ਲਾਉਣ ਦੀ ਬਜਾਏ ਵੱਖਰੇ ਮੂਲ/ਰਿਸ਼ਤਾ-ਸੂਚਕ ਸ਼ਬਦਾਂ ਰਾਹੀਂ (ਜਿੱਥੇ ਇਸਤਰੀ ਲਿੰਗ ਮੂਲ ਹੁੰਦਾ ਹੈ ਜਾਂ ਪੂਰਾ ਸ਼ਬਦ ਬਦਲਦਾ ਹੈ)',
        hi: 'पुल्लिंग शब्द के पीछे सामान्य प्रत्यय लगाने के बजाय भिन्न मूल/संबंध-सूचक शब्दों द्वारा (जहाँ स्त्रीलिंग मूल होता है या पूरा शब्द बदलता है)',
      },
      B: {
        en: 'By uniformly adding the suffix "-ਣੀ" (ਨੀ) to every masculine kinship noun in Punjabi',
        pa: 'ਹਰੇਕ ਪੁਲਿੰਗ ਰਿਸ਼ਤਾ-ਸੂਚਕ ਨਾਂਵ ਦੇ ਅੰਤ ਵਿੱਚ "-ਣੀ" ਪਿਛੇਤਰ ਲਗਾ ਕੇ',
        hi: 'प्रत्येक पुल्लिंग संबंध-सूचक संज्ञा के अंत में "-ਣੀ" प्रत्यय लगाकर',
      },
      C: {
        en: 'By replacing the final Mukta consonant with a Kanna (-ਆ) in the feminine form',
        pa: 'ਅੰਤਲੇ ਮੁਕਤਾ ਅੱਖਰ ਨੂੰ ਇਸਤਰੀ ਲਿੰਗ ਵਿੱਚ ਕੰਨਾ (-ਆ) ਲਗਾ ਕੇ',
        hi: 'अंतिम मुकता अक्षर को स्त्रीलिंग में कन्ना (-ਆ) लगाकर',
      },
      D: {
        en: 'By keeping the exact same word form for both masculine and feminine genders without any change',
        pa: 'ਪੁਲਿੰਗ ਅਤੇ ਇਸਤਰੀ ਲਿੰਗ ਦੋਵਾਂ ਲਈ ਬਿਨਾਂ ਕਿਸੇ ਤਬਦੀਲੀ ਦੇ ਇੱਕੋ ਸ਼ਬਦ ਰੱਖ ਕੇ',
        hi: 'पुल्लिंग और स्त्रीलिंग दोनों के लिए बिना किसी परिवर्तन के एक ही शब्द रखकर',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Punjabi kinship terms like ਮਾਸੀ → ਮਾਸੜ, ਭੂਆ → ਫੁੱਫੜ, ਭੈਣ → ਭਣੋਈਆ, and ਨਣਾਨ → ਨਣਦੋਈਆ, the masculine marriage-relation noun is actually derived from the feminine kinship term, or completely distinct lexical stems are used (ਪਿਤਾ → ਮਾਤਾ, ਭਰਾ → ਭੈਣ, ਸਹੁਰਾ → ਸੱਸ, ਜਵਾਈ → ਧੀ).',
      pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਕਈ ਰਿਸ਼ਤਾ-ਸੂਚਕ ਸ਼ਬਦਾਂ (ਜਿਵੇਂ ਪਿਤਾ-ਮਾਤਾ, ਭਰਾ-ਭੈਣ, ਸਹੁਰਾ-ਸੱਸ) ਵਿੱਚ ਪੂਰਾ ਸ਼ਬਦ ਬਦਲ ਜਾਂਦਾ ਹੈ, ਅਤੇ "ਮਾਸੀ ਤੋਂ ਮਾਸੜ", "ਭੂਆ ਤੋਂ ਫੁੱਫੜ", "ਭੈਣ ਤੋਂ ਭਣੋਈਆ" ਵਿੱਚ ਇਸਤਰੀ ਲਿੰਗ ਸ਼ਬਦ ਮੂਲ ਹੁੰਦਾ ਹੈ ਜਿਸ ਤੋਂ ਪੁਲਿੰਗ ਬਣਦਾ ਹੈ।',
      hi: 'पंजाबी में कई संबंध-सूचक शब्दों (जैसे ਪਿਤਾ-ਮਾਤਾ, ਭਰਾ-ਭੈਣ, ਸਹੁਰਾ-ਸੱਸ) में पूरा शब्द बदल जाता है, तथा "ਮਾਸੀ से ਮਾਸੜ", "ਭੂਆ से ਫੁੱਫੜ" में स्त्रीलिंग शब्द से पुल्लिंग रूप व्युत्पन्न होता है।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },

  // ===========================================================================
  // TOPIC 3: ETT PAPER B — PUNJABI FOLK LITERATURE & CULTURE
  // topicId: 'ett-punjabi-1' (10 MCQs)
  // ===========================================================================
  {
    id: 'q-ett-pb-p1-1',
    topicId: 'ett-punjabi-1',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level B)',
    question: {
      en: 'In Punjabi wedding folk songs, what is the exact ceremonial distinction between "Suhag" (ਸੁਹਾਗ) and "Ghorian" (ਘੋੜੀਆਂ)?',
      pa: 'ਪੰਜਾਬੀ ਵਿਆਹ ਦੇ ਲੋਕ-ਗੀਤਾਂ ਵਿੱਚ "ਸੁਹਾਗ" ਅਤੇ "ਘੋੜੀਆਂ" ਵਿੱਚ ਮੁੱਖ ਅੰਤਰ ਕੀ ਹੈ?',
      hi: 'पंजाबी विवाह के लोक-गीतों में "सुहाग" (ਸੁਹਾਗ) और "घोड़ियाँ" (ਘੋੜੀਆਂ) में मुख्य अंतर क्या है?',
    },
    options: {
      A: {
        en: 'Suhag are sung at the bride\'s home expressing her auspicious marital wishes, while Ghorian are sung at the groom\'s home praising his lineage and wedding procession',
        pa: '"ਸੁਹਾਗ" ਵਿਆਹ ਵਾਲੀ ਕੁੜੀ ਦੇ ਘਰ ਗਾਏ ਜਾਂਦੇ ਹਨ ਅਤੇ "ਘੋੜੀਆਂ" ਵਿਆਹੁਲੇ ਮੁੰਡੇ ਦੇ ਘਰ ਗਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ',
        hi: '"सुहाग" विवाह वाली कन्या के घर गाए जाते हैं और "घोड़ियाँ" वर (लड़के) के घर गाई जाती हैं',
      },
      B: {
        en: 'Suhag are sung at the groom\'s home during Sehra-bandi, while Ghorian are sung at the bride\'s home during Doli departure',
        pa: '"ਸੁਹਾਗ" ਮੁੰਡੇ ਦੇ ਘਰ ਸਿਹਰਾ-ਬੰਦੀ ਸਮੇਂ ਗਾਏ ਜਾਂਦੇ ਹਨ ਅਤੇ "ਘੋੜੀਆਂ" ਕੁੜੀ ਦੇ ਘਰ ਡੋਲੀ ਤੋਰਨ ਸਮੇਂ ਗਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ',
        hi: '"सुहाग" लड़के के घर सेहरा-बंदी के समय गाए जाते हैं और "घोड़ियाँ" लड़की के घर डोली विदाई के समय गाई जाती हैं',
      },
      C: {
        en: 'Both Suhag and Ghorian are satirical songs sung exclusively to tease the groom\'s father (ਕੁੜਮ)',
        pa: '"ਸੁਹਾਗ" ਅਤੇ "ਘੋੜੀਆਂ" ਦੋਵੇਂ ਜਾਂਞੀਆਂ ਅਤੇ ਕੁੜਮ ਨੂੰ ਮਖੌਲ ਕਰਨ ਲਈ ਗਾਏ ਜਾਣ ਵਾਲੇ ਵਿਅੰਗਮਈ ਗੀਤ ਹਨ',
        hi: '"सुहाग" और "घोड़ियाँ" दोनों बारातियों और समधी से हास्य-व्यंग्य करने के लिए गाए जाने वाले गीत हैं',
      },
      D: {
        en: 'Suhag are sung only on the birth of a son, while Ghorian are sung during the festival of Teej in Sawan',
        pa: '"ਸੁਹਾਗ" ਪੁੱਤਰ ਦੇ ਜਨਮ ਸਮੇਂ ਗਾਏ ਜਾਂਦੇ ਹਨ ਅਤੇ "ਘੋੜੀਆਂ" ਸਾਉਣ ਮਹੀਨੇ ਤੀਆਂ ਦੇ ਤਿਉਹਾਰ ਤੇ ਗਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ',
        hi: '"सुहाग" पुत्र के जन्म पर गाए जाते हैं और "घोड़ियाँ" सावन के महीने में तीज के त्योहार पर गाई जाती हैं',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Punjabi folk tradition, "ਸੁਹਾਗ" are lyrical songs sung by women on the bride\'s side (ਕੁੜੀ ਦੇ ਵਿਆਹ ਵੇਲੇ), often addressed to her father (ਬਾਬਲ), expressing her feelings and prayers for a happy married life. "ਘੋੜੀਆਂ" are sung on the groom\'s side (ਮੁੰਡੇ ਦੇ ਵਿਆਹ ਵੇਲੇ).',
      pa: 'ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਵਿੱਚ ਵਿਆਹ ਦੇ ਦਿਨਾਂ ਦੌਰਾਨ ਕੁੜੀ ਦੇ ਘਰ ਇਸਤਰੀਆਂ ਵੱਲੋਂ ਗਾਏ ਜਾਣ ਵਾਲੇ ਮੰਗਲ ਗੀਤਾਂ ਨੂੰ "ਸੁਹਾਗ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ (ਜਿਵੇਂ: "ਦੇਈਂ ਦੇਈਂ ਵੇ ਬਾਬਲਾ ਉਸ ਘਰੇ..."), ਜਦਕਿ ਮੁੰਡੇ ਦੇ ਘਰ ਗਾਏ ਜਾਣ ਵਾਲੇ ਗੀਤਾਂ ਨੂੰ "ਘੋੜੀਆਂ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
      hi: 'पंजाबी संस्कृति में विवाह के दिनों में कन्या के घर स्त्रियों द्वारा गाए जाने वाले मंगल गीतों को "सुहाग" कहा जाता है, जबकि वर (लड़के) के घर गाए जाने वाले गीतों को "घोड़ियाँ" कहा जाता है।',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-p1-2',
    topicId: 'ett-punjabi-1',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'During a traditional Punjabi wedding, what are "Sithnian" (ਸਿੱਠਣੀਆਂ) and "Chhand Paraga" (ਛੰਦ ਪਰਾਗਾ)?',
      pa: 'ਪੰਜਾਬੀ ਵਿਆਹ ਦੀਆਂ ਰਸਮਾਂ ਵਿੱਚ "ਸਿੱਠਣੀਆਂ" ਅਤੇ "ਛੰਦ ਪਰਾਗਾ" ਕੀ ਹਨ?',
      hi: 'पंजाबी विवाह की रस्मों में "सिठणियाँ" (ਸਿੱਠਣੀਆਂ) और "छंद परागा" (ਛੰਦ ਪਰਾਗਾ) क्या हैं?',
    },
    options: {
      A: {
        en: 'Sithnian are witty satirical songs sung by the bride\'s side to tease the groom\'s party (ਜਾਂਞੀ), and Chhand Paraga are poetic verses recited by the groom before his sisters-in-law (ਸਾਲੀਆਂ)',
        pa: '"ਸਿੱਠਣੀਆਂ" ਕੁੜੀ ਵਾਲਿਆਂ ਵੱਲੋਂ ਜਾਂਞੀਆਂ/ਬਰਾਤੀਆਂ ਨੂੰ ਮਿੱਠੀ ਚੋਭ ਲਾਉਣ ਵਾਲੇ ਵਿਅੰਗ-ਗੀਤ ਹਨ, ਅਤੇ "ਛੰਦ ਪਰਾਗਾ" ਲਾੜੇ ਵੱਲੋਂ ਸਾਲੀਆਂ ਅੱਗੇ ਸੁਣਾਏ ਜਾਣ ਵਾਲੇ ਕਾਵਿ-ਬੰਦ ਹਨ',
        hi: '"सिठणियाँ" वधू पक्ष द्वारा बारातियों पर मीठा व्यंग्य कसने वाले लोक-गीत हैं, और "छंद परागा" दूल्हे द्वारा सालियों के सामने सुनाए जाने वाले काव्य-छंद हैं',
      },
      B: {
        en: 'Sithnian are mourning songs sung at funerals, and Chhand Paraga are devotional hymns sung at the Gurdwara',
        pa: '"ਸਿੱਠਣੀਆਂ" ਗ਼ਮੀ ਦੇ ਮੌਕੇ ਗਾਏ ਜਾਣ ਵਾਲੇ ਗੀਤ ਹਨ, ਅਤੇ "ਛੰਦ ਪਰਾਗਾ" ਧਾਰਮਿਕ ਸਮਾਗਮ ਵਿੱਚ ਗਾਏ ਜਾਣ ਵਾਲੇ ਸ਼ਬਦ ਹਨ',
        hi: '"सिठणियाँ" शोक के अवसर पर गाए जाने वाले गीत हैं, और "छंद परागा" धार्मिक समारोह में गाए जाने वाले भजन हैं',
      },
      C: {
        en: 'Sithnian are lullabies sung for infants, and Chhand Paraga are harvest songs sung during Baisakhi',
        pa: '"ਸਿੱਠਣੀਆਂ" ਬੱਚਿਆਂ ਨੂੰ ਸੁਲਾਉਣ ਵਾਲੀਆਂ ਲੋਰੀਆਂ ਹਨ, ਅਤੇ "ਛੰਦ ਪਰਾਗਾ" ਵਿਸਾਖੀ ਵੇਲੇ ਵਾਢੀ ਦੇ ਗੀਤ ਹਨ',
        hi: '"सिठणियाँ" बच्चों को सुलाने वाली लोरियाँ हैं, और "छंद परागा" बैसाखी पर कटाई के गीत हैं',
      },
      D: {
        en: 'Both Sithnian and Chhand Paraga are types of embroidered Phulkari shawls gifted by the maternal uncle (ਮਾਮਾ)',
        pa: '"ਸਿੱਠਣੀਆਂ" ਅਤੇ "ਛੰਦ ਪਰਾਗਾ" ਦੋਵੇਂ ਨਾਨਕਿਆਂ ਵੱਲੋਂ ਦਿੱਤੀ ਜਾਣ ਵਾਲੀ ਫੁਲਕਾਰੀ ਦੀਆਂ ਕਿਸਮਾਂ ਹਨ',
        hi: '"सिठणियाँ" और "छंद परागा" दोनों ननिहाल पक्ष द्वारा दी जाने वाली फुलकारी के प्रकार हैं',
      },
    },
    correct: 'A',
    explanation: {
      en: '"ਸਿੱਠਣੀਆਂ" are humorous, sharp-witted satirical songs sung by women of the bride\'s village/family targeting the groom, his parents (ਕੁੜਮ/ਕੁੜਮਣੀ), and the baratis (ਜਾਂਞੀ). "ਛੰਦ ਪਰਾਗਾ" ("ਛੰਦ ਪਰਾਗੇ ਆਈਏ ਜਾਈਏ...") are rhyming couplets recited by the groom when teased by the bride\'s sisters and friends inside the home.',
      pa: '"ਸਿੱਠਣੀਆਂ" ਵਿਆਹ ਸਮੇਂ ਮੇਲਣਾਂ ਵੱਲੋਂ ਬਰਾਤੀਆਂ (ਜਾਂਞੀਆਂ) ਅਤੇ ਕੁੜਮ-ਕੁੜਮਣੀ ਨੂੰ ਹਾਸੇ-ਠੱਠੇ ਵਿੱਚ ਮਿੱਠੀਆਂ ਚੋਭਾਂ ਲਾਉਣ ਵਾਲੇ ਲੋਕ-ਗੀਤ ਹਨ। "ਛੰਦ ਪਰਾਗਾ" ਲਾੜੇ ਵੱਲੋਂ ਸਾਲੀਆਂ ਦੀ ਫ਼ਰਮਾਇਸ਼ ਉੱਤੇ ਸੁਣਾਏ ਜਾਣ ਵਾਲੇ ਕਾਵਿ-ਟੋਟੇ ਹਨ।',
      hi: '"सिठणियाँ" विवाह के समय वधू पक्ष की स्त्रियों द्वारा बारातियों और समधी-समधिन पर हास्य-व्यंग्य कसने वाले लोक-गीत हैं। "छंद परागा" दूल्हे द्वारा सालियों के आग्रह पर सुनाए जाने वाले काव्य-छंद हैं।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-p1-3',
    topicId: 'ett-punjabi-1',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level A)',
    question: {
      en: 'In Punjabi folk literature connected with mourning rites, what is the precise difference between "Alahunian" (ਅਲਾਹੁਣੀਆਂ) and "Keerne" (ਕੀਰਨੇ)?',
      pa: 'ਪੰਜਾਬੀ ਦੇ ਸ਼ੋਕ-ਗੀਤਾਂ ਵਿੱਚ "ਅਲਾਹੁਣੀਆਂ" ਅਤੇ "ਕੀਰਨੇ" ਵਿੱਚ ਕੀ ਬੁਨਿਆਦੀ ਅੰਤਰ ਹੈ?',
      hi: 'पंजाबी के शोक-गीतों में "अलाहुणियाँ" (ਅਲਾਹੁਣੀਆਂ) और "कीरने" (ਕੀਰਨੇ) में क्या मूलभूत अंतर है?',
    },
    options: {
      A: {
        en: 'Alahunian are collective rhythmic mourning chants led by a professional woman (ਮਰਾਸਣ/ਨੈਣ) in a circle (ਸਿਆਪਾ), whereas Keerne are spontaneous individual laments of personal grief by a close female relative',
        pa: '"ਅਲਾਹੁਣੀਆਂ" ਸਿਆਪੇ ਸਮੇਂ ਸਮੂਹਿਕ ਰੂਪ ਵਿੱਚ (ਮਰਾਸਣ/ਨੈਣ ਦੀ ਅਗਵਾਈ ਹੇਠ) ਉਚਾਰੇ ਜਾਣ ਵਾਲੇ ਲੈਅਬੱਧ ਸ਼ੋਕ-ਗੀਤ ਹਨ, ਜਦਕਿ "ਕੀਰਨੇ" ਕਿਸੇ ਨਜ਼ਦੀਕੀ ਰਿਸ਼ਤੇਦਾਰ ਔਰਤ ਵੱਲੋਂ ਇਕੱਲੇ ਤੌਰ ਤੇ ਪਾਏ ਜਾਣ ਵਾਲੇ ਵਿਰਲਾਪ ਦੇ ਬੋਲ ਹਨ',
        hi: '"अलाहुणियाँ" सियापे के समय सामूहिक रूप में (मरासण/नाइन के नेतृत्व में) गाए जाने वाले लयबद्ध शोक-गीत हैं, जबकि "कीरने" किसी निकट संबंधी स्त्री द्वारा व्यक्तिगत रूप से किए जाने वाले विलाप के बोल हैं',
      },
      B: {
        en: 'Alahunian are sung only by men at the cremation ground, whereas Keerne are sung by children on the 13th day',
        pa: '"ਅਲਾਹੁਣੀਆਂ" ਕੇਵਲ ਮਰਦਾਂ ਵੱਲੋਂ ਸ਼ਮਸ਼ਾਨ ਘਾਟ ਵਿੱਚ ਗਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ, ਜਦਕਿ "ਕੀਰਨੇ" ਬੱਚਿਆਂ ਵੱਲੋਂ ਤੇਰ੍ਹਵੇਂ ਤੇ ਗਾਏ ਜਾਂਦੇ ਹਨ',
        hi: '"अलाहुणियाँ" केवल पुरुषों द्वारा श्मशान घाट में गाई जाती हैं, जबकि "कीरने" बच्चों द्वारा तेरहवीं पर गाए जाते हैं',
      },
      C: {
        en: 'Alahunian are joyful songs of farewell to a pilgrim, whereas Keerne are devotional folk ballads of Gugga Pir',
        pa: '"ਅਲਾਹੁਣੀਆਂ" ਤੀਰਥ ਯਾਤਰਾ ਤੇ ਜਾਣ ਵੇਲੇ ਗਾਏ ਜਾਣ ਵਾਲੇ ਗੀਤ ਹਨ, ਜਦਕਿ "ਕੀਰਨੇ" ਗੁੱਗੇ ਪੀਰ ਦੀਆਂ ਭੇਟਾਂ ਹਨ',
        hi: '"अलाहुणियाँ" तीर्थ यात्रा पर जाते समय गाए जाने वाले गीत हैं, जबकि "कीरने" गुग्गा पीर की भेंटें हैं',
      },
      D: {
        en: 'Keerne are sung in a group chorus accompanied by Dholak, whereas Alahunian are silent prayers without words',
        pa: '"ਕੀਰਨੇ" ਢੋਲਕੀ ਦੇ ਨਾਲ ਸਮੂਹ ਵਿੱਚ ਗਾਏ ਜਾਂਦੇ ਹਨ, ਜਦਕਿ "ਅਲਾਹੁਣੀਆਂ" ਬਿਨਾਂ ਬੋਲਾਂ ਤੋਂ ਮੌਨ ਪ੍ਰਾਰਥਨਾਵਾਂ ਹਨ',
        hi: '"कीरने" ढोलक के साथ समूह में गाए जाते हैं, जबकि "अलाहुणियाँ" बिना शब्दों की मौन प्रार्थनाएँ हैं',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Both "ਅਲਾਹੁਣੀਆਂ" and "ਕੀਰਨੇ" are mourning folk forms (ਸ਼ੋਕ ਗੀਤ). "ਅਲਾਹੁਣੀ" is a structured, collective lament accompanied by rhythmic chest-beating (ਸਿਆਪਾ) led by a professional leader (ਨੈਣ/ਮਰਾਸਣ) and echoed by the group. "ਕੀਰਨਾ" is an individual, deeply personal poetic outburst of grief without group chorus.',
      pa: '"ਅਲਾਹੁਣੀਆਂ" ਅਤੇ "ਕੀਰਨੇ" ਦੋਵੇਂ ਮੌਤ ਦੇ ਸਮੇਂ ਦੇ ਸ਼ੋਕ-ਗੀਤ ਹਨ। "ਅਲਾਹੁਣੀਆਂ" ਸਿਆਪੇ ਦੇ ਨਾਲ ਸਮੂਹਿਕ ਰੂਪ ਵਿੱਚ (ਨੈਣ ਜਾਂ ਮਰਾਸਣ ਦੀ ਅਗਵਾਈ ਵਿੱਚ) ਗਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ, ਜਦਕਿ "ਕੀਰਨਾ" ਵਿਛੜੇ ਜੀਅ ਦੇ ਦੁੱਖ ਵਿੱਚ ਕਿਸੇ ਔਰਤ ਵੱਲੋਂ ਇਕੱਲੇ ਤੌਰ ਤੇ ਪਾਇਆ ਜਾਣ ਵਾਲਾ ਵਿਰਲਾਪ ਹੈ।',
      hi: '"अलाहुणियाँ" और "कीरने" दोनों मृत्यु के अवसर के शोक-गीत हैं। "अलाहुणियाँ" सियापे के साथ सामूहिक रूप में गाई जाती हैं, जबकि "कीरना" किसी स्त्री द्वारा व्यक्तिगत रूप से किया जाने वाला करुण विलाप है।',
    },
    difficulty: 'hard',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-p1-4',
    topicId: 'ett-punjabi-1',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'Which Punjabi short folk verse form is famous as a "one-and-a-half line" (ਢਾਈ ਟੁਕੜੀਆਂ / ਡੇਢ ਸਤਰ) poetic composition where the first short line sets a visual image and the second line delivers the emotional message (e.g., "ਕੋਠੇ ਤੇ ਕਾਂ ਬੋਲੇ, ਚਿੱਠੀ ਮੇਰੇ ਮਾਹੀਏ ਦੀ, ਵਿੱਚ ਮੇਰਾ ਨਾਂ ਬੋਲੇ")?',
      pa: 'ਪੰਜਾਬੀ ਲੋਕ-ਕਾਵਿ ਦਾ ਕਿਹੜਾ ਰੂਪ "ਡੇਢ ਸਤਰ" (ਜਾਂ ਤਿੰਨ ਨਿੱਕੀਆਂ ਤੁਕਾਂ) ਦੀ ਰਚਨਾ ਵਜੋਂ ਪ੍ਰਸਿੱਧ ਹੈ ਜਿਸ ਦੀ ਪਹਿਲੀ ਤੁਕ ਪ੍ਰਤੀਕ ਸਿਰਜਦੀ ਹੈ ਅਤੇ ਅਗਲੀ ਤੁਕ ਦਿਲ ਦਾ ਭਾਵ ਪ੍ਰਗਟ ਕਰਦੀ ਹੈ (ਜਿਵੇਂ: "ਕੋਠੇ ਤੇ ਕਾਂ ਬੋਲੇ, ਚਿੱਠੀ ਮੇਰੇ ਮਾਹੀਏ ਦੀ, ਵਿੱਚ ਮੇਰਾ ਨਾਂ ਬੋਲੇ")?',
      hi: 'पंजाबी लोक-काव्य का कौन-सा रूप "डेढ़ पंक्ति" (या तीन छोटी तुकों) की रचना के रूप में प्रसिद्ध है जिसकी पहली तुक बिंब रचती है और अगली तुक हृदय का भाव प्रकट करती है (जैसे: "ਕੋਠੇ ਤੇ ਕਾਂ ਬੋਲੇ, ਚਿੱਠੀ ਮੇਰੇ ਮਾਹੀਏ ਦੀ, ਵਿੱਚ ਮੇਰਾ ਨਾਂ ਬੋਲੇ")?',
    },
    options: {
      A: {
        en: 'Mahiya (ਮਾਹੀਆ — also called ਬਾਲੋ-ਮਾਹੀਆ)',
        pa: 'ਮਾਹੀਆ (ਜਿਸ ਨੂੰ ਬਾਲੋ-ਮਾਹੀਆ ਵੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ)',
        hi: 'माहीआ (ਮਾਹੀਆ — जिसे बालो-माहीआ भी कहा जाता है)',
      },
      B: {
        en: 'Sadd (ਸੱਦ — long narrative call of the Malwa region)',
        pa: 'ਸੱਦ (ਮਾਲਵੇ ਦੇ ਇਲਾਕੇ ਦਾ ਲੰਮਾ ਬਿਰਤਾਂਤਕ ਕਾਵਿ-ਰੂਪ)',
        hi: 'सद्द (ਸੱਦ — मालवा क्षेत्र का लंबा आख्यानक काव्य-रूप)',
      },
      C: {
        en: 'Pattal (ਪੱਤਲ — verse recited to untie the groom\'s dining feast)',
        pa: 'ਪੱਤਲ (ਵਿਆਹ ਸਮੇਂ ਜੰਞ ਦੀ ਰੋਟੀ ਬੰਨ੍ਹਣ ਅਤੇ ਖੋਲ੍ਹਣ ਵਾਲਾ ਕਾਵਿ-ਰੂਪ)',
        hi: 'पत्तल (ਪੱਤਲ — विवाह में बारात का भोजन बाँधने और खोलने वाला काव्य-रूप)',
      },
      D: {
        en: 'Vaar (ਵਾਰ — heroic ballad of war and martyrdom)',
        pa: 'ਵਾਰ (ਯੁੱਧ ਅਤੇ ਬਹਾਦਰੀ ਦਾ ਬਿਰਤਾਂਤਕ ਕਾਵਿ-ਰੂਪ)',
        hi: 'वार (ਵਾਰ — युद्ध और वीरता का आख्यानक काव्य-रूप)',
      },
    },
    correct: 'A',
    explanation: {
      en: '"ਮਾਹੀਆ" (Mahiya) is one of the most popular miniature folk forms of West Punjab/Pothohar and all of Punjab. Metrically structured as a 1.5-line (ਡੇਢ ਸਤਰ) or 3-hemistich verse where the 1st and 3rd segments rhyme ("ਕੋਠੇ ਤੇ ਕਾਂ ਬੋਲੇ / ਚਿੱਠੀ ਮੇਰੇ ਮਾਹੀਏ ਦੀ / ਵਿੱਚ ਮੇਰਾ ਨਾਂ ਬੋਲੇ"), it expresses longing and love.',
      pa: '"ਮਾਹੀਆ" ਪੰਜਾਬੀ ਲੋਕ-ਕਾਵਿ ਦਾ ਇੱਕ ਬੇਹੱਦ ਹਰਮਨ-ਪਿਆਰਾ ਨਿੱਕਾ ਕਾਵਿ-ਰੂਪ ਹੈ ਜਿਸ ਦੀ ਬਣਤਰ ਡੇਢ ਸਤਰ (ਤਿੰਨ ਨਿੱਕੀਆਂ ਤੁਕਾਂ, ਜਿਨ੍ਹਾਂ ਵਿੱਚੋਂ ਪਹਿਲੀ ਅਤੇ ਤੀਜੀ ਦਾ ਤੁਕਾਂਤ ਮਿਲਦਾ ਹੈ) ਵਾਲੀ ਹੁੰਦੀ ਹੈ।',
      hi: '"माहीआ" (ਮਾਹੀਆ) पंजाबी लोक-काव्य का अत्यंत लोकप्रिय लघु काव्य-रूप है जिसकी संरचना डेढ़ पंक्ति (तीन छोटी तुकें, जिनमें पहली और तीसरी तुक में तुकांत मिलता है) की होती है।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-p1-5',
    topicId: 'ett-punjabi-1',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level B)',
    question: {
      en: 'In whose memory is the famous "Chhapar Mela" (ਛਪਾਰ ਦਾ ਮੇਲਾ) held in Ludhiana district during the Desi month of Bhadon (ਭਾਦੋਂ ਸੁਦੀ ਚੌਦਸ), and what ritual do devotees perform there?',
      pa: 'ਲੁਧਿਆਣਾ ਜ਼ਿਲ੍ਹੇ ਵਿੱਚ ਭਾਦੋਂ ਦੇ ਮਹੀਨੇ (ਭਾਦੋਂ ਸੁਦੀ ਚੌਦਸ ਨੂੰ) ਲੱਗਣ ਵਾਲਾ ਪ੍ਰਸਿੱਧ "ਛਪਾਰ ਦਾ ਮੇਲਾ" ਕਿਸ ਦੀ ਯਾਦ ਵਿੱਚ ਲੱਗਦਾ ਹੈ ਅਤੇ ਉੱਥੇ ਸ਼ਰਧਾਲੂ ਕੀ ਰਸਮ ਨਿਭਾਉਂਦੇ ਹਨ?',
      hi: 'लुधियाना जिले में भादों के महीने (भाद्रपद शुक्ल चतुर्दशी को) लगने वाला प्रसिद्ध "छपार का मेला" (ਛਪਾਰ ਦਾ ਮੇਲਾ) किसकी स्मृति में लगता है और वहाँ श्रद्धालु क्या रस्म निभाते हैं?',
    },
    options: {
      A: {
        en: 'Gugga Pir (ਗੁੱਗਾ ਪੀਰ) at Gugga Mari; devotees scoop earth seven times (ਮਿੱਟੀ ਕੱਢਣਾ) seeking protection from snakes',
        pa: 'ਗੁੱਗੇ ਪੀਰ ਦੀ ਯਾਦ ਵਿੱਚ (ਗੁੱਗੇ ਦੀ ਮਾੜੀ ਤੇ); ਸ਼ਰਧਾਲੂ ਸੱਪਾਂ ਤੋਂ ਰੱਖਿਆ ਲਈ ਸੱਤ ਵਾਰ ਮਿੱਟੀ ਕੱਢਦੇ ਹਨ',
        hi: 'गुग्गा पीर की स्मृति में (गुग्गा की माड़ी पर); श्रद्धालु सर्पों से रक्षा के लिए सात बार मिट्टी निकालते हैं',
      },
      B: {
        en: 'Seetla Mata (ਸੀਤਲਾ ਮਾਤਾ); devotees offer overnight sweet gulgule (ਬਾਸੜੀਆ) to donkeys',
        pa: 'ਸੀਤਲਾ ਮਾਤਾ ਦੀ ਯਾਦ ਵਿੱਚ; ਸ਼ਰਧਾਲੂ ਬੇਹੇ ਗੁਲਗੁਲੇ (ਬਾਸੜੀਆ) ਭੇਟ ਕਰਦੇ ਹਨ ਅਤੇ ਖੋਤਿਆਂ ਦੀ ਪੂਜਾ ਕਰਦੇ ਹਨ',
        hi: 'शीतला माता की स्मृति में; श्रद्धालु बासी गुलगुले (बासड़िया) चढ़ाते हैं और गधों की पूजा करते हैं',
      },
      C: {
        en: 'Baba Farid Shakarganj (ਬਾਬਾ ਫ਼ਰੀਦ ਜੀ); devotees offer salt and brooms at his shrine',
        pa: 'ਬਾਬਾ ਫ਼ਰੀਦ ਸ਼ਕਰਗੰਜ ਜੀ ਦੀ ਯਾਦ ਵਿੱਚ; ਸ਼ਰਧਾਲੂ ਨਮਕ ਅਤੇ ਝਾੜੂ ਚੜ੍ਹਾਉਂਦੇ ਹਨ',
        hi: 'बाबा फ़रीद शकरगंज जी की स्मृति में; श्रद्धालु नमक और झाड़ू चढ़ाते हैं',
      },
      D: {
        en: 'Pir Baba Mohkam Din (ਪੀਰ ਬਾਬਾ ਮੋਹਕਮ ਦੀਨ); devotees light clay lamps for three nights in Phaggan',
        pa: 'ਪੀਰ ਬਾਬਾ ਮੋਹਕਮ ਦੀਨ ਦੀ ਯਾਦ ਵਿੱਚ; ਸ਼ਰਧਾਲੂ ਫੱਗਣ ਮਹੀਨੇ ਤਿੰਨ ਰਾਤਾਂ ਦੀਵੇ ਬਾਲਦੇ ਹਨ',
        hi: 'पीर बाबा मोहकम दीन की स्मृति में; श्रद्धालु फाल्गुन मास में तीन रातें दीपक जलाते हैं',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Chhapar Mela (ਛਪਾਰ ਦਾ ਮੇਲਾ) in Ludhiana district is held on Bhadon Sudi 14 (ਭਾਦੋਂ ਦੀ ਚੌਦਸ) at the shrine (ਮਾੜੀ) of Gugga Pir, revered as the lord of snakes. Devotees perform the ritual of scooping earth ("ਮਿੱਟੀ ਕੱਢਣਾ"). By contrast, Seetla Mata & donkey worship with sweet gulgule occur at Jarag Mela (ਜਰਗ ਦਾ ਮੇਲਾ), and Pir Mohkam Din is venerated at Jagraon Roshni Mela.',
      pa: 'ਛਪਾਰ ਦਾ ਮੇਲਾ (ਜ਼ਿਲ੍ਹਾ ਲੁਧਿਆਣਾ) ਭਾਦੋਂ ਸੁਦੀ ਚੌਦਸ ਨੂੰ ਗੁੱਗੇ ਪੀਰ ਦੀ ਮਾੜੀ ਉੱਤੇ ਲੱਗਦਾ ਹੈ ਜਿੱਥੇ ਸ਼ਰਧਾਲੂ ਮਿੱਟੀ ਕੱਢਣ ਦੀ ਰਸਮ ਕਰਦੇ ਹਨ। ਸੀਤਲਾ ਮਾਤਾ ਅਤੇ ਬੇਹੇ ਗੁਲਗੁਲਿਆਂ (ਬਾਸੜੀਆ) ਵਾਲਾ ਮੇਲਾ "ਜਰਗ ਦਾ ਮੇਲਾ" ਹੈ, ਅਤੇ ਪੀਰ ਮੋਹਕਮ ਦੀਨ ਦੀ ਦਰਗਾਹ ਉੱਤੇ "ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ" ਦਾ ਮੇਲਾ ਲੱਗਦਾ ਹੈ।',
      hi: 'छपार का मेला (जिला लुधियाना) भादों सुदी चौदस को गुग्गा पीर की माड़ी पर लगता है जहाँ श्रद्धालु मिट्टी निकालने की रस्म करते हैं। शीतला माता और बासी गुलगुलों (बासड़िया) वाला मेला "जरग का मेला" है, तथा पीर मोहकम दीन की दरगाह पर "जगराओं की रौशनी" का मेला लगता है।',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-p1-6',
    topicId: 'ett-punjabi-1',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'Match the following traditional fairs of Punjab with the Desi (Bikrami) month and place where they are celebrated:\n1. Jarag Mela (ਜਰਗ ਦਾ ਮੇਲਾ — ਬਹਿੜੀਏ ਦਾ ਮੇਲਾ)\n2. Roshni Mela of Jagraon (ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ)\n3. Maghi Mela (ਮਾਘੀ ਦਾ ਮੇਲਾ)',
      pa: 'ਪੰਜਾਬ ਦੇ ਹੇਠ ਲਿਖੇ ਪ੍ਰਸਿੱਧ ਮੇਲਿਆਂ ਦਾ ਉਹਨਾਂ ਦੇ ਦੇਸੀ ਮਹੀਨੇ ਅਤੇ ਸਥਾਨ ਨਾਲ ਸਹੀ ਮਿਲਾਨ ਕਰੋ:\n1. ਜਰਗ ਦਾ ਮੇਲਾ (ਬਹਿੜੀਏ ਦਾ ਮੇਲਾ)\n2. ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ ਦਾ ਮੇਲਾ\n3. ਮਾਘੀ ਦਾ ਮੇਲਾ',
      hi: 'पंजाब के निम्नलिखित प्रसिद्ध मेलों का उनके देसी (विक्रमी) महीने और स्थान के साथ सही मिलान करें:\n1. जरग का मेला (बहड़िए का मेला)\n2. जगराओं की रौशनी का मेला\n3. माघी का मेला',
    },
    options: {
      A: {
        en: '1 → Chet month (Payal/Ludhiana, Seetla Mata); 2 → Phaggan month (Jagraon, Pir Mohkam Din); 3 → 1st Magh (Sri Muktsar Sahib, 40 Mukte)',
        pa: '1 → ਚੇਤ ਮਹੀਨਾ (ਪਾਇਲ/ਲੁਧਿਆਣਾ, ਸੀਤਲਾ ਮਾਤਾ); 2 → ਫੱਗਣ ਮਹੀਨਾ (ਜਗਰਾਉਂ, ਪੀਰ ਮੋਹਕਮ ਦੀਨ); 3 → 1 ਮਾਘ (ਸ੍ਰੀ ਮੁਕਤਸਰ ਸਾਹਿਬ, 40 ਮੁਕਤੇ)',
        hi: '1 → चैत्र मास (पायल/लुधियाना, शीतला माता); 2 → फाल्गुन मास (जगराओं, पीर मोहकम दीन); 3 → 1 माघ (श्री मुक्तसर साहिब, 40 मुक्ते)',
      },
      B: {
        en: '1 → Bhadon month (Chhapar); 2 → Vaisakh month (Talwandi Sabo); 3 → Poh month (Fatehgarh Sahib)',
        pa: '1 → ਭਾਦੋਂ ਮਹੀਨਾ (ਛਪਾਰ); 2 → ਵਿਸਾਖ ਮਹੀਨਾ (ਤਲਵੰਡੀ ਸਾਬੋ); 3 → ਪੋਹ ਮਹੀਨਾ (ਫ਼ਤਹਿਗੜ੍ਹ ਸਾਹਿਬ)',
        hi: '1 → भादों मास (छपार); 2 → बैसाख मास (तलवंडी साबो); 3 → पौष मास (फतेहगढ़ साहिब)',
      },
      C: {
        en: '1 → Phaggan month (Jagraon); 2 → Chet month (Jarag); 3 → Sawan month (Anandpur Sahib)',
        pa: '1 → ਫੱਗਣ ਮਹੀਨਾ (ਜਗਰਾਉਂ); 2 → ਚੇਤ ਮਹੀਨਾ (ਜਰਗ); 3 → ਸਾਉਣ ਮਹੀਨਾ (ਅਨੰਦਪੁਰ ਸਾਹਿਬ)',
        hi: '1 → फाल्गुन मास (जगराओं); 2 → चैत्र मास (जरग); 3 → सावन मास (आनंदपुर साहिब)',
      },
      D: {
        en: '1 → Katak month (Amritsar); 2 → Magh month (Muktsar); 3 → Chet month (Anandpur Sahib)',
        pa: '1 → ਕੱਤਕ ਮਹੀਨਾ (ਅੰਮ੍ਰਿਤਸਰ); 2 → ਮਾਘ ਮਹੀਨਾ (ਮੁਕਤਸਰ); 3 → ਚੇਤ ਮਹੀਨਾ (ਅਨੰਦਪੁਰ ਸਾਹਿਬ)',
        hi: '1 → कार्तिक मास (अमृतसर); 2 → माघ मास (मुक्तसर); 3 → चैत्र मास (आनंदपुर साहिब)',
      },
    },
    correct: 'A',
    explanation: {
      en: '(1) Jarag Mela (ਜਰਗ ਦਾ ਮੇਲਾ / ਬਹਿੜੀਏ ਦਾ ਮੇਲਾ) is held in the month of Chet in village Jarag (Tehsil Payal, Dist. Ludhiana) in honour of Seetla Mata. (2) Jagraon Roshni Mela is held from 14 to 16 Phaggan at the Dargah of Sufi saint Pir Baba Mohkam Din. (3) Maghi Mela is held on 1st Magh at Sri Muktsar Sahib in memory of the Forty Liberated Ones (ਚਾਲੀ ਮੁਕਤੇ).',
      pa: '(1) ਜਰਗ ਦਾ ਮੇਲਾ (ਬਹਿੜੀਏ ਦਾ ਮੇਲਾ) ਚੇਤ ਦੇ ਮਹੀਨੇ ਸੀਤਲਾ ਮਾਤਾ ਦੀ ਪੂਜਾ ਲਈ ਲੱਗਦਾ ਹੈ। (2) ਜਗਰਾਵਾਂ ਦੀ ਰੌਸ਼ਨੀ ਦਾ ਮੇਲਾ ਫੱਗਣ ਮਹੀਨੇ (14–16 ਫੱਗਣ) ਸੂਫ਼ੀ ਫ਼ਕੀਰ ਪੀਰ ਬਾਬਾ ਮੋਹਕਮ ਦੀਨ ਦੀ ਮਜ਼ਾਰ ਤੇ ਲੱਗਦਾ ਹੈ। (3) ਮਾਘੀ ਦਾ ਮੇਲਾ 1 ਮਾਘ ਨੂੰ ਸ੍ਰੀ ਮੁਕਤਸਰ ਸਾਹਿਬ ਵਿਖੇ ਚਾਲੀ ਮੁਕਤਿਆਂ ਦੀ ਸ਼ਹੀਦੀ ਦੀ ਯਾਦ ਵਿੱਚ ਲੱਗਦਾ ਹੈ।',
      hi: '(1) जरग का मेला (बहड़िए का मेला) चैत्र मास में शीतला माता की पूजा के लिए लगता है। (2) जगराओं की रौशनी का मेला फाल्गुन मास (14–16 फाल्गुन) में पीर बाबा मोहकम दीन की दरगाह पर लगता है। (3) माघी का मेला 1 माघ को श्री मुक्तसर साहिब में चालीस मुक्तों की स्मृति में लगता है।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-p1-7',
    topicId: 'ett-punjabi-1',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level A)',
    question: {
      en: 'In the traditional art of Punjabi Phulkari (ਫੁਲਕਾਰੀ), how do "Chope" (ਚੋਪ), "Subhar" (ਸੁਬਰ), and "Bagh" (ਬਾਗ਼) differ in ceremony and embroidery design?',
      pa: 'ਪੰਜਾਬੀ ਲੋਕ-ਕਲਾ "ਫੁਲਕਾਰੀ" ਦੀਆਂ ਕਿਸਮਾਂ—"ਚੋਪ", "ਸੁਬਰ" ਅਤੇ "ਬਾਗ਼"—ਵਿੱਚ ਰਸਮੀ ਵਰਤੋਂ ਅਤੇ ਕਢਾਈ ਦੇ ਪੱਖ ਤੋਂ ਕੀ ਵਿਸ਼ੇਸ਼ ਅੰਤਰ ਹੈ?',
      hi: 'पंजाबी लोक-कला "फुलकारी" के प्रकारों—"चोप" (ਚੋਪ), "सुबर" (ਸੁਬਰ) और "बाग़" (ਬਾਗ਼)—में रस्मी प्रयोग और कढ़ाई की दृष्टि से क्या विशेष अंतर है?',
    },
    options: {
      A: {
        en: 'Chope is embroidered by the maternal grandmother (ਨਾਨੀ) with double-running stitch for the Chura/bathing ceremony; Subhar has 5 central/corner motifs worn by the bride during Pheras (ਲਾਵਾਂ); Bagh is so densely embroidered that the base khaddar cloth is invisible',
        pa: '"ਚੋਪ" ਨਾਨੀ ਵੱਲੋਂ ਦੋਹਰੇ ਤੋਪੇ ਨਾਲ ਕੱਢ ਕੇ ਚੂੜਾ ਚੜ੍ਹਾਉਣ ਵੇਲੇ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ; "ਸੁਬਰ" (ਵਿਚਕਾਰ 5 ਫੁੱਲਾਂ ਵਾਲੀ) ਲਾਵਾਂ/ਫੇਰਿਆਂ ਸਮੇਂ ਦੁਲਹਨ ਉੱਤੇ ਤਾਣੀ ਜਾਂਦੀ ਹੈ; ਅਤੇ "ਬਾਗ਼" ਵਿੱਚ ਕਢਾਈ ਇੰਨੀ ਸੰਘਣੀ ਹੁੰਦੀ ਹੈ ਕਿ ਹੇਠਲਾ ਖੱਦਰ ਦਿਸਦਾ ਹੀ ਨਹੀਂ',
        hi: '"चोप" नानी द्वारा दोहरे टांके से काढ़कर चूड़ा चढ़ाने के समय दी जाती है; "सुबर" (मध्य में 5 फूलों वाली) लावां/फेरों के समय दुल्हन ओढ़ती है; और "बाग़" में कढ़ाई इतनी घनी होती है कि नीचे का खद्दर दिखाई ही नहीं देता',
      },
      B: {
        en: 'Chope is worn by the groom on his turban; Subhar is a black shawl worn in mourning; Bagh is a plain unembroidered red dupatta',
        pa: '"ਚੋਪ" ਲਾੜੇ ਵੱਲੋਂ ਪੱਗ ਉੱਤੇ ਬੰਨ੍ਹੀ ਜਾਂਦੀ ਹੈ; "ਸੁਬਰ" ਸੋਗ ਵੇਲੇ ਲਈ ਜਾਣ ਵਾਲੀ ਕਾਲੀ ਚਾਦਰ ਹੈ; ਅਤੇ "ਬਾਗ਼" ਬਿਨਾਂ ਕਢਾਈ ਵਾਲੀ ਲਾਲ ਚੁੰਨੀ ਹੈ',
        hi: '"चोप" दूल्हे द्वारा पगड़ी पर बाँधी जाती है; "सुबर" शोक के समय ओढ़ी जाने वाली काली चादर है; और "बाग़" बिना कढ़ाई वाली लाल चुनरी है',
      },
      C: {
        en: 'Bagh is embroidered only on the edges with mirrors; Chope has only five floral motifs in the centre; Subhar covers the entire cloth leaving no fabric visible',
        pa: '"ਬਾਗ਼" ਵਿੱਚ ਕੇਵਲ ਕੰਢਿਆਂ ਉੱਤੇ ਸ਼ੀਸ਼ੇ ਲੱਗੇ ਹੁੰਦੇ ਹਨ; "ਚੋਪ" ਦੇ ਵਿਚਕਾਰ ਕੇਵਲ ਪੰਜ ਫੁੱਲ ਹੁੰਦੇ ਹਨ; ਅਤੇ "ਸੁਬਰ" ਵਿੱਚ ਸਾਰਾ ਕੱਪੜਾ ਕਢਾਈ ਨਾਲ ਢਕਿਆ ਹੁੰਦਾ ਹੈ',
        hi: '"बाग़" में केवल किनारों पर शीशे लगे होते हैं; "चोप" के मध्य में केवल पाँच फूल होते हैं; और "सुबर" में पूरा कपड़ा कढ़ाई से ढका होता है',
      },
      D: {
        en: 'All three are woven on power looms in Amritsar using gold zari thread (ਤਿੱਲਾ) rather than untwisted silk thread (ਪੱਟ)',
        pa: 'ਇਹ ਤਿੰਨੇ ਕਿਸਮਾਂ ਪੱਟ (ਰੇਸ਼ਮੀ ਧਾਗੇ) ਦੀ ਬਜਾਏ ਮਸ਼ੀਨਾਂ ਉੱਤੇ ਸੁਨਹਿਰੀ ਤਿੱਲੇ ਨਾਲ ਬੁਣੀਆਂ ਜਾਂਦੀਆਂ ਹਨ',
        hi: 'ये तीनों प्रकार पट्ट (रेशमी धागे) के बजाय मशीनों पर सुनहरे तिल्ले से बुने जाते हैं',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Phulkari uses untwisted silk thread ("ਪੱਟ") on handspun khaddar. (1) "ਚੋਪ" is prepared by the maternal grandmother (ਨਾਨੀ) using Holbein stitch (identical on both sides) and draped over the bride during Vatna/Chura ceremonies. (2) "ਸੁਬਰ" is a red Phulkari with 5 floral motifs in the centre and four corners, worn by the bride during the wedding rounds (ਲਾਵਾਂ/ਫੇਰੇ). (3) "ਬਾਗ਼" covers the entire surface with geometric embroidery so no base cloth shows.',
      pa: 'ਫੁਲਕਾਰੀ ਖੱਦਰ ਉੱਤੇ ਰੇਸ਼ਮੀ ਧਾਗੇ (ਪੱਟ) ਨਾਲ ਪੁੱਠੇ ਪਾਸਿਓਂ ਕੱਢੀ ਜਾਂਦੀ ਹੈ। "ਚੋਪ" ਨਾਨਕਿਆਂ (ਨਾਨੀ) ਵੱਲੋਂ ਚੂੜਾ ਚੜ੍ਹਾਉਣ ਸਮੇਂ ਕੁੜੀ ਨੂੰ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ ਜਿਸ ਦੀ ਕਢਾਈ ਦੋਵੇਂ ਪਾਸੇ ਇੱਕੋ ਜਿਹੀ ਹੁੰਦੀ ਹੈ। "ਸੁਬਰ" ਫੇਰਿਆਂ/ਲਾਵਾਂ ਵੇਲੇ ਕੁੜੀ ਉੱਤੇ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ। "ਬਾਗ਼" ਵਿੱਚ ਸਾਰਾ ਖੱਦਰ ਕਢਾਈ ਨਾਲ ਭਰਿਆ ਹੁੰਦਾ ਹੈ।',
      hi: 'फुलकारी खद्दर पर रेशमी धागे (पट्ट) से उल्टी तरफ से काढ़ी जाती है। "चोप" नानी द्वारा चूड़ा चढ़ाने की रस्म में दी जाती है जिसकी कढ़ाई दोनों ओर एक जैसी होती है। "सुबर" फेरों/लावां के समय दुल्हन ओढ़ती है। "बाग़" में पूरा खद्दर कढ़ाई से ढका होता है।',
    },
    difficulty: 'hard',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-p1-8',
    topicId: 'ett-punjabi-1',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level B)',
    question: {
      en: 'Match the following traditional Punjabi ornaments (ਗਹਿਣੇ) with the correct body part on which they are worn:\n1. Saggi Phull (ਸੱਗੀ ਫੁੱਲ)\n2. Pippal Pattian (ਪਿੱਪਲ ਪੱਤੀਆਂ)\n3. Kaintha (ਕੈਂਠਾ)\n4. Gokhru (ਗੋਖੜੂ)',
      pa: 'ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਦੇ ਹੇਠ ਲਿਖੇ ਰਵਾਇਤੀ ਗਹਿਣਿਆਂ ਦਾ ਸਰੀਰ ਦੇ ਸਹੀ ਅੰਗ ਨਾਲ ਮਿਲਾਨ ਕਰੋ:\n1. ਸੱਗੀ ਫੁੱਲ\n2. ਪਿੱਪਲ ਪੱਤੀਆਂ\n3. ਕੈਂਠਾ\n4. ਗੋਖੜੂ',
      hi: 'पंजाबी संस्कृति के निम्नलिखित पारंपरिक आभूषणों का शरीर के सही अंग के साथ मिलान करें:\n1. सग्गी फुल्ल (ਸੱਗੀ ਫੁੱਲ)\n2. पिप्पल पत्तियाँ (ਪਿੱਪਲ ਪੱਤੀਆਂ)\n3. कैंठा (ਕੈਂਠਾ)\n4. गोखड़ू (ਗੋਖੜੂ)',
    },
    options: {
      A: {
        en: '1 → Woman\'s head (ਸਿਰ); 2 → Woman\'s ears (ਕੰਨ); 3 → Man\'s neck (ਮਰਦਾਂ ਦੇ ਗਲ਼); 4 → Woman\'s wrist (ਗੁੱਟ / ਬਾਂਹ)',
        pa: '1 → ਔਰਤਾਂ ਦੇ ਸਿਰ ਦਾ ਗਹਿਣਾ; 2 → ਔਰਤਾਂ ਦੇ ਕੰਨਾਂ ਦਾ ਗਹਿਣਾ; 3 → ਮਰਦਾਂ ਦੇ ਗਲ਼ ਦਾ ਗਹਿਣਾ; 4 → ਔਰਤਾਂ ਦੇ ਗੁੱਟ (ਬਾਂਹ) ਦਾ ਗਹਿਣਾ',
        hi: '1 → स्त्रियों के सिर का आभूषण; 2 → स्त्रियों के कानों का आभूषण; 3 → पुरुषों के गले का आभूषण; 4 → स्त्रियों की कलाई (बाँह) का आभूषण',
      },
      B: {
        en: '1 → Woman\'s nose (ਨੱਕ); 2 → Woman\'s ankles (ਪੈਰ); 3 → Woman\'s forehead (ਮੱਥਾ); 4 → Man\'s ears (ਮਰਦਾਂ ਦੇ ਕੰਨ)',
        pa: '1 → ਔਰਤਾਂ ਦੇ ਨੱਕ ਦਾ ਗਹਿਣਾ; 2 → ਔਰਤਾਂ ਦੇ ਪੈਰਾਂ ਦਾ ਗਹਿਣਾ; 3 → ਔਰਤਾਂ ਦੇ ਮੱਥੇ ਦਾ ਗਹਿਣਾ; 4 → ਮਰਦਾਂ ਦੇ ਕੰਨਾਂ ਦਾ ਗਹਿਣਾ',
        hi: '1 → स्त्रियों की नाक का आभूषण; 2 → स्त्रियों के पैरों का आभूषण; 3 → स्त्रियों के माथे का आभूषण; 4 → पुरुषों के कानों का आभूषण',
      },
      C: {
        en: '1 → Woman\'s ears (ਕੰਨ); 2 → Woman\'s head (ਸਿਰ); 3 → Woman\'s wrist (ਗੁੱਟ); 4 → Man\'s neck (ਮਰਦਾਂ ਦੇ ਗਲ਼)',
        pa: '1 → ਔਰਤਾਂ ਦੇ ਕੰਨਾਂ ਦਾ ਗਹਿਣਾ; 2 → ਔਰਤਾਂ ਦੇ ਸਿਰ ਦਾ ਗਹਿਣਾ; 3 → ਔਰਤਾਂ ਦੇ ਗੁੱਟ ਦਾ ਗਹਿਣਾ; 4 → ਮਰਦਾਂ ਦੇ ਗਲ਼ ਦਾ ਗਹਿਣਾ',
        hi: '1 → स्त्रियों के कानों का आभूषण; 2 → स्त्रियों के सिर का आभूषण; 3 → स्त्रियों की कलाई का आभूषण; 4 → पुरुषों के गले का आभूषण',
      },
      D: {
        en: '1 → Woman\'s neck (ਗਲ਼); 2 → Woman\'s waist (ਲੱਕ); 3 → Man\'s wrist (ਮਰਦਾਂ ਦੇ ਗੁੱਟ); 4 → Woman\'s toes (ਪੈਰਾਂ ਦੀਆਂ ਉਂਗਲਾਂ)',
        pa: '1 → ਔਰਤਾਂ ਦੇ ਗਲ਼ ਦਾ ਗਹਿਣਾ; 2 → ਔਰਤਾਂ ਦੇ ਲੱਕ ਦਾ ਗਹਿਣਾ; 3 → ਮਰਦਾਂ ਦੇ ਗੁੱਟ ਦਾ ਗਹਿਣਾ; 4 → ਪੈਰਾਂ ਦੀਆਂ ਉਂਗਲਾਂ ਦਾ ਗਹਿਣਾ',
        hi: '1 → स्त्रियों के गले का आभूषण; 2 → स्त्रियों की कमर का आभूषण; 3 → पुरुषों की कलाई का आभूषण; 4 → पैरों की उँगलियों का आभूषण',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Punjabi culture: (1) ਸੱਗੀ ਫੁੱਲ (along with ਚੌਂਕ, ਬਘਿਆੜੀ, ਸ਼ਿੰਗਾਰ ਪੱਟੀ) is worn on a woman\'s head; (2) ਪਿੱਪਲ ਪੱਤੀਆਂ (along with ਬੁੰਦੇ, ਕਾਂਟੇ, ਡੇਢੂ, ਲੋਟਣ) is worn in the ears; (3) ਕੈਂਠਾ (along with ਤਵੀਤ, ਨਾਮ) is a classic men\'s neck ornament famous in Bhangra; and (4) ਗੋਖੜੂ (along with ਕੰਗਣ, ਬਾਜੂਬੰਦ, ਪਹੁੰਚੀ) is worn on the wrist.',
      pa: 'ਪੰਜਾਬੀ ਗਹਿਣਿਆਂ ਵਿੱਚ "ਸੱਗੀ ਫੁੱਲ" ਔਰਤਾਂ ਦੇ ਸਿਰ ਉੱਤੇ ਗੁੰਦੇ ਵਾਲਾਂ ਵਿੱਚ ਸਜਾਇਆ ਜਾਂਦਾ ਹੈ; "ਪਿੱਪਲ ਪੱਤੀਆਂ" ਕੰਨਾਂ ਦਾ ਗਹਿਣਾ ਹੈ; "ਕੈਂਠਾ" ਮਰਦਾਂ ਦੇ ਗਲ਼ ਦਾ ਪ੍ਰਮੁੱਖ ਗਹਿਣਾ ਹੈ; ਅਤੇ "ਗੋਖੜੂ" ਔਰਤਾਂ ਦੇ ਗੁੱਟ (ਬਾਂਹ) ਉੱਤੇ ਪਹਿਨਿਆ ਜਾਣ ਵਾਲਾ ਸੋਨੇ ਦਾ ਭਾਰੀ ਕੜਾ/ਗਹਿਣਾ ਹੈ।',
      hi: 'पंजाबी आभूषणों में "सग्गी फुल्ल" स्त्रियों के सिर पर पहना जाता है; "पिप्पल पत्तियाँ" कानों का आभूषण है; "कैंठा" पुरुषों के गले का प्रमुख आभूषण है; और "गोखड़ू" स्त्रियों की कलाई (बाँह) पर पहना जाने वाला आभूषण है।',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-p1-9',
    topicId: 'ett-punjabi-1',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'Which group of folk dances is performed exclusively by Punjabi women (ਇਸਤਰੀਆਂ ਦੇ ਲੋਕ-ਨਾਚ), as opposed to men\'s folk dances like Bhangra, Jhumar, and Luddi?',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਜੁੱਟ ਕੇਵਲ ਪੰਜਾਬੀ ਔਰਤਾਂ (ਇਸਤਰੀਆਂ) ਦੇ ਲੋਕ-ਨਾਚਾਂ ਨਾਲ ਸੰਬੰਧਿਤ ਹੈ?',
      hi: 'निम्नलिखित में से कौन-सा समूह केवल पंजाबी स्त्रियों (महिलाओं) के लोक-नृत्यों से संबंधित है?',
    },
    options: {
      A: {
        en: 'Giddha (ਗਿੱਧਾ), Sammi (ਸੰਮੀ), and Kikli (ਕਿੱਕਲੀ)',
        pa: 'ਗਿੱਧਾ, ਸੰਮੀ ਅਤੇ ਕਿੱਕਲੀ',
        hi: 'गिद्धा, सम्मी और किक्कली',
      },
      B: {
        en: 'Jhumar (ਝੂੰਮਰ), Malwai Giddha (ਮਲਵਈ ਗਿੱਧਾ), andankara / ਧਮਾਲ (Dhamal)',
        pa: 'ਝੂੰਮਰ, ਮਲਵਈ ਗਿੱਧਾ ਅਤੇ ਧਮਾਲ',
        hi: 'झूमर, मलवई गिद्धा और धमाल',
      },
      C: {
        en: 'Bhangra (ਭੰਗੜਾ), Julli (ਜੁੱਲੀ), and Dankara (ਡੰਡਾਸ)',
        pa: 'ਭੰਗੜਾ, ਜੁੱਲੀ ਅਤੇ ਡੰਡਾਸ',
        hi: 'भंगड़ा, जुल्ली और डंडास',
      },
      D: {
        en: 'Gatka (ਗੱਤਕਾ), Jhumar (ਝੂੰਮਰ), and Bhangra (ਭੰਗੜਾ)',
        pa: 'ਗੱਤਕਾ, ਝੂੰਮਰ ਅਤੇ ਭੰਗੜਾ',
        hi: 'गतका, झूमर और भंगड़ा',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Giddha (ਗਿੱਧਾ), Sammi (ਸੰਮੀ — originating from the Sandal Bar region of West Punjab), and Kikli (ਕਿੱਕਲੀ — whirling hand-in-hand dance of young girls, often seen as the nursery of Giddha) are women\'s folk dances. Note that "ਮਲਵਈ ਗਿੱਧਾ" (ਬਾਬਿਆਂ ਦਾ ਗਿੱਧਾ), "ਝੂੰਮਰ" (Sandal Bar), "ਧਮਾਲ", and "ਜੁੱਲੀ" are men\'s folk dances.',
      pa: 'ਗਿੱਧਾ, ਸੰਮੀ (ਸਾਂਦਲ ਬਾਰ ਦੇ ਇਲਾਕੇ ਦਾ ਪ੍ਰਸਿੱਧ ਨਾਚ) ਅਤੇ ਕਿੱਕਲੀ (ਕੁੜੀਆਂ ਵੱਲੋਂ ਹੱਥਾਂ ਦੀ ਕਰੰਗੜੀ ਪਾ ਕੇ ਘੁੰਮਣ ਵਾਲਾ ਨਾਚ) ਪੰਜਾਬੀ ਇਸਤਰੀਆਂ ਦੇ ਲੋਕ-ਨਾਚ ਹਨ। ਧਿਆਨ ਰਹੇ ਕਿ "ਮਲਵਈ ਗਿੱਧਾ" (ਬਾਬਿਆਂ ਦਾ ਗਿੱਧਾ), "ਝੂੰਮਰ" ਅਤੇ "ਧਮਾਲ" ਮਰਦਾਂ ਦੇ ਲੋਕ-ਨਾਚ ਹਨ।',
      hi: 'गिद्धा, सम्मी (सांदल बार क्षेत्र का प्रसिद्ध नृत्य) और किक्कली (लड़कियों द्वारा हाथों की कंघी बनाकर घूमने वाला नृत्य) पंजाबी स्त्रियों के लोक-नृत्य हैं। ध्यान रहे कि "मलवई गिद्धा" (बाबਿਆਂ का गिद्धा), "झूमर" और "धमाल" पुरुषों के लोक-नृत्य हैं।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-p1-10',
    topicId: 'ett-punjabi-1',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'Which traditional Punjabi children\'s folk game is described by the verse "ਕੋਟਲਾ ਛਪਾਕੀ ਜੁੰਮੇ ਰਾਤ ਆਈ ਏ, ਜਿਹੜਾ ਅੱਗੇ ਪਿੱਛੇ ਦੇਖੇ ਉਹਦੀ ਸ਼ਾਮਤ ਆਈ ਏ"?',
      pa: '"ਕੋਟਲਾ ਛਪਾਕੀ ਜੁੰਮੇ ਰਾਤ ਆਈ ਏ, ਜਿਹੜਾ ਅੱਗੇ ਪਿੱਛੇ ਦੇਖੇ ਉਹਦੀ ਸ਼ਾਮਤ ਆਈ ਏ" — ਇਹ ਲੋਕ-ਕਾਵਿ ਬੋਲ ਪੰਜਾਬ ਦੀ ਕਿਹੜੀ ਵਿਰਾਸਤੀ ਲੋਕ-ਖੇਡ ਨਾਲ ਸੰਬੰਧਿਤ ਹਨ ਅਤੇ ਇਸ ਵਿੱਚ ਕੀ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
      hi: '"ਕੋਟਲਾ ਛਪਾਕੀ ਜੁੰਮੇ ਰਾਤ ਆਈ ਏ, ਜਿਹੜਾ ਅੱਗੇ ਪਿੱਛੇ ਦੇਖੇ ਉਹਦੀ ਸ਼ਾਮਤ ਆਈ ਏ" — ये लोक-काव्य बोल पंजाब के किस पारंपरिक लोक-खेल से संबंधित हैं और इसमें किस वस्तु का प्रयोग होता है?',
    },
    options: {
      A: {
        en: 'Kotla Chhapaki (ਕੋਟਲਾ ਛਪਾਕੀ) — played by children sitting in a circle while one player runs around holding a twisted cloth whip (ਕੋਟਲਾ)',
        pa: 'ਕੋਟਲਾ ਛਪਾਕੀ — ਜਿਸ ਵਿੱਚ ਬੱਚੇ ਦਾਇਰੇ ਵਿੱਚ ਬੈਠਦੇ ਹਨ ਅਤੇ ਵਾਰੀ ਦੇਣ ਵਾਲਾ ਬੱਚਾ ਕੱਪੜੇ ਦਾ ਵੱਟਿਆ ਹੋਇਆ "ਕੋਟਲਾ" ਲੈ ਕੇ ਦੁਆਲੇ ਘੁੰਮਦਾ ਹੈ',
        hi: 'कोटला छपाकी — जिसमें बच्चे घेरे में बैठते हैं और बारी देने वाला बच्चा कपड़े का बंटा हुआ "कोटला" लेकर चारों ओर घूमता है',
      },
      B: {
        en: 'Bhanda Bhandaria (ਭੰਡਾ ਭੰਡਾਰੀਆ) — played by stacking fists one on top of another',
        pa: 'ਭੰਡਾ ਭੰਡਾਰੀਆ — ਜਿਸ ਵਿੱਚ ਬੱਚੇ ਇੱਕ-ਦੂਜੇ ਦੀਆਂ ਮੁੱਠੀਆਂ ਉੱਤੇ ਮੁੱਠੀਆਂ ਰੱਖ ਕੇ ਖੇਡਦੇ ਹਨ',
        hi: 'भंडा भंडारिया — जिसमें बच्चे एक-दूसरे की मुट्ठियों के ऊपर मुट्ठियाँ रखकर खेलते हैं',
      },
      C: {
        en: 'Oonch Neech (ਊਚ-ਨੀਚ) — played by standing on elevated mounds versus lower ground',
        pa: 'ਊਚ-ਨੀਚ — ਜਿਸ ਵਿੱਚ ਉੱਚੀ ਅਤੇ ਨੀਵੀਂ ਥਾਂ ਉੱਤੇ ਖੜ੍ਹ ਕੇ ਦਾਈ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ',
        hi: 'ऊँच-नीच — जिसमें ऊँचे और नीचे स्थान पर खड़े होकर दाम दिया जाता है',
      },
      D: {
        en: 'Pithu Garam (ਪਿੱਠੂ ਗਰਮ) — played with a rubber ball and seven flat stone discs (ਠੀਕਰੀਆਂ)',
        pa: 'ਪਿੱਠੂ ਗਰਮ — ਜਿਸ ਵਿੱਚ ਗੇਂਦ ਅਤੇ ਸੱਤ ਠੀਕਰੀਆਂ ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਜਾਂਦੀ ਹੈ',
        hi: 'पिट्ठू गरम — जिसमें गेंद और सात ठिकरियों का प्रयोग किया जाता है',
      },
    },
    correct: 'A',
    explanation: {
      en: '"ਕੋਟਲਾ ਛਪਾਕੀ" is a classic Punjabi children\'s circle game where children sit facing inward, chanting "ਕੋਟਲਾ ਛਪਾਕੀ ਜੁੰਮੇ ਰਾਤ ਆਈ ਏ...", while one child walks behind the circle holding a twisted cloth ("ਕੋਟਲਾ") and secretly drops it behind a seated player.',
      pa: '"ਕੋਟਲਾ ਛਪਾਕੀ" ਪੰਜਾਬ ਦੇ ਬੱਚਿਆਂ ਦੀ ਪ੍ਰਸਿੱਧ ਲੋਕ-ਖੇਡ ਹੈ ਜਿਸ ਵਿੱਚ ਬੱਚੇ ਗੋਲ ਚੱਕਰ ਬਣਾ ਕੇ ਬੈਠ ਜਾਂਦੇ ਹਨ ਅਤੇ ਇੱਕ ਬੱਚਾ ਕੱਪੜੇ ਨੂੰ ਵੱਟ ਕੇ ਬਣਾਇਆ "ਕੋਟਲਾ" ਹੱਥ ਵਿੱਚ ਫੜ ਕੇ ਗੀਤ ਗਾਉਂਦਾ ਹੋਇਆ ਚੱਕਰ ਦੇ ਬਾਹਰ ਘੁੰਮਦਾ ਹੈ।',
      hi: '"कोटला छपाकी" पंजाब के बच्चों का प्रसिद्ध लोक-खेल है जिसमें बच्चे गोल घेरे में बैठ जाते हैं और एक बच्चा कपड़े को ऐंठकर बनाया गया "कोटला" हाथ में लेकर गीत गाते हुए घेरे के बाहर घूमता है।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
 
  // ===========================================================================
  // TOPIC 4: ETT PAPER B — PUNJABI IDIOMS, PROVERBS, SENTENCE TRANSFORMATION & TRANSLATION
  // topicId: 'ett-punjabi-3' (10 MCQs)
  // ===========================================================================
  {
    id: 'q-ett-pb-p3-1',
    topicId: 'ett-punjabi-3',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level B)',
    question: {
      en: 'What is the structural and grammatical difference between a Punjabi "Muhavra" (ਮੁਹਾਵਰਾ — Idiom) and an "Akhan" (ਅਖਾਣ — Proverb)?',
      pa: 'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਵਿੱਚ "ਮੁਹਾਵਰੇ" ਅਤੇ "ਅਖਾਣ" (ਲੋਕੋਕਤੀ) ਵਿੱਚ ਬਣਤਰ ਅਤੇ ਵਿਆਕਰਨ ਪੱਖੋਂ ਬੁਨਿਆਦੀ ਅੰਤਰ ਕੀ ਹੈ?',
      hi: 'पंजाबी भाषा में "मुहावरे" (ਮੁਹਾਵਰਾ) और "अखाण" (ਅਖਾਣ / लोकोक्ति) में संरचना और व्याकरण की दृष्टि से मूलभूत अंतर क्या है?',
    },
    options: {
      A: {
        en: 'A Muhavra is a verb-phrase fragment usually ending in an infinitive marker (-ਣਾ / -ਣੀ / -ਣੇ) that inflects inside a sentence, whereas an Akhan is a complete, independent folk statement reflecting collective life-experience',
        pa: '"ਮੁਹਾਵਰਾ" ਇੱਕ ਵਾਕੰਸ਼ ਹੁੰਦਾ ਹੈ ਜਿਸ ਦੇ ਅੰਤ ਵਿੱਚ ਆਮ ਤੌਰ ਤੇ ਕਿਰਿਆਵੀ ਰੂਪ (ਣਾ, ਣੀ, ਣੇ) ਆਉਂਦਾ ਹੈ ਅਤੇ ਇਹ ਵਾਕ ਦਾ ਅੰਗ ਬਣ ਕੇ ਬਦਲਦਾ ਹੈ; ਜਦਕਿ "ਅਖਾਣ" ਆਪਣੇ-ਆਪ ਵਿੱਚ ਪੂਰਨ ਤੇ ਸੁਤੰਤਰ ਵਾਕ ਹੁੰਦਾ ਹੈ',
        hi: '"मुहावरा" एक वाक्यांश होता है जिसके अंत में प्रायः क्रिया रूप (ਣਾ, ਣੀ, ਣੇ) आता है और यह वाक्य का अंग बनकर बदलता है; जबकि "अखाण" अपने-आप में पूर्ण एवं स्वतंत्र वाक्य होता है',
      },
      B: {
        en: 'An Akhan always ends with "-ਣਾ" or "-ਣੀ", whereas a Muhavra is always a two-line rhyming verse',
        pa: '"ਅਖਾਣ" ਦੇ ਅੰਤ ਵਿੱਚ ਹਮੇਸ਼ਾ "ਣਾ" ਜਾਂ "ਣੀ" ਆਉਂਦਾ ਹੈ, ਜਦਕਿ "ਮੁਹਾਵਰਾ" ਹਮੇਸ਼ਾ ਦੋ ਤੁਕਾਂ ਵਾਲਾ ਕਾਵਿ-ਬੰਦ ਹੁੰਦਾ ਹੈ',
        hi: '"अखाण" के अंत में हमेशा "ਣਾ" या "ਣੀ" आता है, जबकि "मुहावरा" हमेशा दो पंक्तियों वाला काव्य-छंद होता है',
      },
      C: {
        en: 'A Muhavra is always interpreted literally word-for-word, whereas an Akhan has no figurative meaning',
        pa: '"ਮੁਹਾਵਰੇ" ਦੇ ਹਮੇਸ਼ਾ ਸ਼ਾਬਦਿਕ ਅਰਥ ਲਏ ਜਾਂਦੇ ਹਨ, ਜਦਕਿ "ਅਖਾਣ" ਦਾ ਕੋਈ ਭਾਵ-ਅਰਥ ਨਹੀਂ ਹੁੰਦਾ',
        hi: '"मुहावरे" का हमेशा शाब्दिक अर्थ लिया जाता है, जबकि "अखाण" का कोई भावार्थ नहीं होता',
      },
      D: {
        en: 'Both Muhavra and Akhan are identical grammatical units and neither can be used inside prose sentences',
        pa: '"ਮੁਹਾਵਰਾ" ਅਤੇ "ਅਖਾਣ" ਵਿਆਕਰਨਕ ਤੌਰ ਤੇ ਬਿਲਕੁਲ ਇੱਕੋ ਜਿਹੇ ਹਨ ਅਤੇ ਵਾਰਤਕ ਵਿੱਚ ਨਹੀਂ ਵਰਤੇ ਜਾ ਸਕਦੇ',
        hi: '"मुहावरा" और "अखाण" व्याकरणिक रूप से बिल्कुल एक समान हैं और गद्य में प्रयुक्त नहीं हो सकते',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Punjabi grammar, a Muhavra (ਮੁਹਾਵਰਾ) is an idiomatic phrase (ਵਾਕੰਸ਼) usually ending in "-ਣਾ / -ਣੀ" (e.g., ਅੱਖਾਂ ਵਿੱਚ ਘੱਟਾ ਪਾਉਣਾ, ਹੱਥ ਪੀਲੇ ਕਰਨਾ) that must be conjugated within a sentence. An Akhan (ਅਖਾਣ) is a complete, unalterable proverbial statement (e.g., ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ) encapsulating centuries of folk wisdom.',
      pa: 'ਮੁਹਾਵਰਾ ਇੱਕ ਅਜਿਹਾ ਵਾਕੰਸ਼ ਹੈ ਜਿਸ ਦੇ ਅੰਤ ਵਿੱਚ ਆਮ ਤੌਰ ਤੇ "ਣਾ/ਣੀ" ਆਉਂਦਾ ਹੈ ਅਤੇ ਇਹ ਵਾਕ ਵਿੱਚ ਕਾਲ/ਲਿੰਗ/ਵਚਨ ਅਨੁਸਾਰ ਰੂਪ ਬਦਲਦਾ ਹੈ। ਇਸ ਦੇ ਉਲਟ, ਅਖਾਣ (ਲੋਕੋਕਤੀ) ਇੱਕ ਪੂਰਨ, ਸੁਤੰਤਰ ਅਤੇ ਅਟੱਲ ਵਾਕ ਹੁੰਦਾ ਹੈ ਜੋ ਲੋਕ-ਅਨੁਭਵ ਵਿੱਚੋਂ ਉਪਜਿਆ ਸੱਚ ਬਿਆਨ ਕਰਦਾ ਹੈ।',
      hi: 'मुहावरा एक वाक्यांश है जिसके अंत में प्रायः "ਣਾ/ਣੀ" आता है और यह वाक्य में काल/लिंग/वचन के अनुसार रूप बदलता है। इसके विपरीत, अखाण (लोकोक्ति) एक पूर्ण, स्वतंत्र और अपरिवर्तनीय वाक्य होता है।',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-p3-2',
    topicId: 'ett-punjabi-3',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level B)',
    question: {
      en: 'Match the following Punjabi idioms (ਮੁਹਾਵਰੇ) with their exact figurative meanings:\n1. ਉੱਨੀ-ਇੱਕੀ ਦਾ ਫ਼ਰਕ ਹੋਣਾ\n2. ਅੱਖਾਂ ਵਿੱਚ ਘੱਟਾ ਪਾਉਣਾ\n3. ਹੱਥ ਪੀਲੇ ਕਰਨਾ\n4. ਘਿਓ ਦੇ ਦੀਵੇ ਬਾਲਣਾ',
      pa: 'ਹੇਠ ਲਿਖੇ ਪੰਜਾਬੀ ਮੁਹਾਵਰਿਆਂ ਦਾ ਉਹਨਾਂ ਦੇ ਸਹੀ ਅਰਥਾਂ ਨਾਲ ਮਿਲਾਨ ਕਰੋ:\n1. ਉੱਨੀ-ਇੱਕੀ ਦਾ ਫ਼ਰਕ ਹੋਣਾ\n2. ਅੱਖਾਂ ਵਿੱਚ ਘੱਟਾ ਪਾਉਣਾ\n3. ਹੱਥ ਪੀਲੇ ਕਰਨਾ\n4. ਘਿਓ ਦੇ ਦੀਵੇ ਬਾਲਣਾ',
      hi: 'निम्नलिखित पंजाबी मुहावरों का उनके सही अर्थों के साथ मिलान करें:\n1. ਉੱਨੀ-ਇੱਕੀ ਦਾ ਫ਼ਰਕ ਹੋਣਾ\n2. ਅੱਖਾਂ ਵਿੱਚ ਘੱਟਾ ਪਾਉਣਾ\n3. ਹੱਥ ਪੀਲੇ ਕਰਨਾ\n4. ਘਿਓ ਦੇ ਦੀਵੇ ਬਾਲਣਾ',
    },
    options: {
      A: {
        en: '1 → Very slight difference (ਬਹੁਤ ਥੋੜ੍ਹਾ ਫ਼ਰਕ ਹੋਣਾ); 2 → To deceive (ਧੋਖਾ ਦੇਣਾ); 3 → To get a daughter married (ਧੀ ਦਾ ਵਿਆਹ ਕਰਨਾ); 4 → To celebrate joyously (ਬਹੁਤ ਖ਼ੁਸ਼ੀ ਮਨਾਉਣਾ)',
        pa: '1 → ਬਹੁਤ ਥੋੜ੍ਹਾ ਫ਼ਰਕ ਹੋਣਾ; 2 → ਧੋਖਾ ਦੇਣਾ; 3 → ਕੁੜੀ/ਧੀ ਦਾ ਵਿਆਹ ਕਰਨਾ; 4 → ਬਹੁਤ ਖ਼ੁਸ਼ੀ ਮਨਾਉਣਾ',
        hi: '1 → बहुत थोड़ा अंतर होना; 2 → धोखा देना; 3 → लड़की/पुत्री का विवाह करना; 4 → बहुत खुशियाँ मनाना',
      },
      B: {
        en: '1 → Huge difference (ਬਹੁਤ ਵੱਡਾ ਫ਼ਰਕ ਹੋਣਾ); 2 → To flatter (ਚਾਪਲੂਸੀ ਕਰਨਾ); 3 → To cook food (ਰੋਟੀ ਪਕਾਉਣਾ); 4 → To waste money (ਪੈਸਾ ਬਰਬਾਦ ਕਰਨਾ)',
        pa: '1 → ਬਹੁਤ ਵੱਡਾ ਫ਼ਰਕ ਹੋਣਾ; 2 → ਚਾਪਲੂਸੀ ਕਰਨਾ; 3 → ਰੋਟੀ ਪਕਾਉਣਾ; 4 → ਪੈਸਾ ਬਰਬਾਦ ਕਰਨਾ',
        hi: '1 → बहुत बड़ा अंतर होना; 2 → चापलूसी करना; 3 → खाना पकाना; 4 → पैसा बर्बाद करना',
      },
      C: {
        en: '1 → To quarrel (ਲੜਾਈ ਕਰਨਾ); 2 → To help secretly (ਗੁਪਤ ਮਦਦ ਕਰਨਾ); 3 → To apply henna on festival (ਮਹਿੰਦੀ ਲਾਉਣਾ); 4 → To performarti (ਪੂਜਾ ਕਰਨਾ)',
        pa: '1 → ਲੜਾਈ ਕਰਨਾ; 2 → ਗੁਪਤ ਮਦਦ ਕਰਨਾ; 3 → ਤਿਉਹਾਰ ਤੇ ਮਹਿੰਦੀ ਲਾਉਣਾ; 4 → ਪੂਜਾ ਕਰਨਾ',
        hi: '1 → झगड़ा करना; 2 → गुप्त सहायता करना; 3 → त्योहार पर मेहंदी लगाना; 4 → पूजा करना',
      },
      D: {
        en: '1 → To deceive (ਧੋਖਾ ਦੇਣਾ); 2 → Very slight difference (ਬਹੁਤ ਥੋੜ੍ਹਾ ਫ਼ਰਕ ਹੋਣਾ); 3 → To celebrate (ਖ਼ੁਸ਼ੀ ਮਨਾਉਣਾ); 4 → To marry off (ਵਿਆਹ ਕਰਨਾ)',
        pa: '1 → ਧੋਖਾ ਦੇਣਾ; 2 → ਬਹੁਤ ਥੋੜ੍ਹਾ ਫ਼ਰਕ ਹੋਣਾ; 3 → ਖ਼ੁਸ਼ੀ ਮਨਾਉਣਾ; 4 → ਵਿਆਹ ਕਰਨਾ',
        hi: '1 → धोखा देना; 2 → बहुत थोड़ा अंतर होना; 3 → खुशियाँ मनाना; 4 → विवाह करना',
      },
    },
    correct: 'A',
    explanation: {
      en: '(1) "ਉੱਨੀ-ਇੱਕੀ ਦਾ ਫ਼ਰਕ ਹੋਣਾ" means a negligible/minor difference (ਬਹੁਤ ਮਾਮੂਲੀ ਅੰਤਰ ਹੋਣਾ — contrast with "ਜ਼ਮੀਨ-ਅਸਮਾਨ ਦਾ ਫ਼ਰਕ ਹੋਣਾ"). (2) "ਅੱਖਾਂ ਵਿੱਚ ਘੱਟਾ ਪਾਉਣਾ" means to deceive/hoodwink (ਧੋਖਾ ਦੇਣਾ). (3) "ਹੱਥ ਪੀਲੇ ਕਰਨਾ" means to marry off a daughter (ਵਿਆਹ ਕਰਨਾ). (4) "ਘਿਓ ਦੇ ਦੀਵੇ ਬਾਲਣਾ" means to rejoice greatly (ਬਹੁਤ ਖ਼ੁਸ਼ੀਆਂ ਮਨਾਉਣਾ).',
      pa: '(1) ਉੱਨੀ-ਇੱਕੀ ਦਾ ਫ਼ਰਕ ਹੋਣਾ = ਬਹੁਤ ਥੋੜ੍ਹਾ ਫ਼ਰਕ ਹੋਣਾ; (2) ਅੱਖਾਂ ਵਿੱਚ ਘੱਟਾ ਪਾਉਣਾ = ਧੋਖਾ ਦੇਣਾ; (3) ਹੱਥ ਪੀਲੇ ਕਰਨਾ = ਕੁੜੀ ਦਾ ਵਿਆਹ ਕਰਨਾ; (4) ਘਿਓ ਦੇ ਦੀਵੇ ਬਾਲਣਾ = ਬਹੁਤ ਖ਼ੁਸ਼ੀਆਂ ਮਨਾਉਣਾ।',
      hi: '(1) ਉੱਨੀ-ਇੱਕੀ ਦਾ ਫ਼ਰਕ ਹੋਣਾ = बहुत मामूली अंतर होना; (2) ਅੱਖਾਂ ਵਿੱਚ ਘੱਟਾ ਪਾਉਣਾ = आँखों में धूल झोंकना (धोखा देना); (3) ਹੱਥ ਪੀਲੇ ਕਰਨਾ = विवाह करना; (4) ਘਿਓ ਦੇ ਦੀਵੇ ਬਾਲਣਾ = घी के दीये जलाना (अत्यधिक खुशियाँ मनाना)।',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-p3-3',
    topicId: 'ett-punjabi-3',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'Which Punjabi proverb (ਅਖਾਣ) is used for a person who meddles or claims importance in someone else\'s affair without even being invited?',
      pa: 'ਜਦੋਂ ਕੋਈ ਵਿਅਕਤੀ ਬਿਨਾਂ ਬੁਲਾਏ ਕਿਸੇ ਦੇ ਕੰਮ ਵਿੱਚ ਟੰਗ ਅੜਾਵੇ ਅਤੇ ਆਪਣੀ ਚੌਧਰ ਜਤਾਵੇ, ਤਾਂ ਉਸ ਉੱਤੇ ਕਿਹੜਾ ਪੰਜਾਬੀ ਅਖਾਣ ਢੁਕਦਾ ਹੈ?',
      hi: 'जब कोई व्यक्ति बिना बुलाए किसी के काम में दखल दे और अपना अधिकार जताए, तो उस पर कौन-सी पंजाबी लोकोक्ति (अखाण) सटीक बैठती है?',
    },
    options: {
      A: {
        en: 'ਸੱਦੀ ਨਾ ਬੁਲਾਈ, ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ',
        pa: 'ਸੱਦੀ ਨਾ ਬੁਲਾਈ, ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ',
        hi: 'ਸੱਦੀ ਨਾ ਬੁਲਾਈ, ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ (मान न मान मैं तेरा मेहमान)',
      },
      B: {
        en: 'ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ',
        pa: 'ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ',
        hi: 'ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ (ऊँची दुकान फीका पकवान)',
      },
      C: {
        en: 'ਆਪੇ ਮੈਂ ਰੱਜੀ ਪੁੱਜੀ, ਆਪੇ ਮੇਰੇ ਬੱਚੇ ਜੀਣ',
        pa: 'ਆਪੇ ਮੈਂ ਰੱਜੀ ਪੁੱਜੀ, ਆਪੇ ਮੇਰੇ ਬੱਚੇ ਜੀਣ',
        hi: 'ਆਪੇ ਮੈਂ ਰੱਜੀ ਪੁੱਜੀ, ਆਪੇ ਮੇਰੇ ਬੱਚੇ ਜੀਣ (अपने मुँह मियाँ मिट्ठू बनना)',
      },
      D: {
        en: 'ਸੌ ਹੱਥ ਰੱਸਾ ਸਿਰੇ ਤੇ ਗੰਢ',
        pa: 'ਸੌ ਹੱਥ ਰੱਸਾ ਸਿਰੇ ਤੇ ਗੰਢ',
        hi: 'ਸੌ ਹੱਥ ਰੱਸਾ ਸਿਰੇ ਤੇ ਗੰਢ (सौ बात की एक बात)',
      },
    },
    correct: 'A',
    explanation: {
      en: '"ਸੱਦੀ ਨਾ ਬੁਲਾਈ, ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ" literally means "Neither invited nor called, yet claiming to be the groom\'s elder aunt"—used when someone interferes or seeks prominence uninvited. By contrast, "ਉੱਚੀ ਦੁਕਾਨ ਫਿੱਕਾ ਪਕਵਾਨ" means great boast, small roast; and "ਆਪੇ ਮੈਂ ਰੱਜੀ ਪੁੱਜੀ, ਆਪੇ ਮੇਰੇ ਬੱਚੇ ਜੀਣ" means self-praise.',
      pa: '"ਸੱਦੀ ਨਾ ਬੁਲਾਈ, ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ" ਅਖਾਣ ਉਦੋਂ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ ਜਦੋਂ ਕੋਈ ਬਿਨਾਂ ਪੁੱਛੇ-ਸੱਦੇ ਬਦੋਬਦੀ ਕਿਸੇ ਦੇ ਮਾਮਲੇ ਵਿੱਚ ਵੜ ਕੇ ਚੌਧਰੀ ਬਣੇ। "ਆਪੇ ਮੈਂ ਰੱਜੀ ਪੁੱਜੀ, ਆਪੇ ਮੇਰੇ ਬੱਚੇ ਜੀਣ" ਦਾ ਅਰਥ ਆਪਣੇ ਮੂੰਹੋਂ ਆਪਣੀ ਵਡਿਆਈ ਕਰਨਾ ਹੈ।',
      hi: '"ਸੱਦੀ ਨਾ ਬੁਲਾਈ, ਮੈਂ ਲਾੜੇ ਦੀ ਤਾਈ" लोकोक्ति तब प्रयुक्त होती है जब कोई बिना बुलाए किसी के मामले में हस्तक्षेप कर अपना बड़प्पन जताए।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-p3-4',
    topicId: 'ett-punjabi-3',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'What is the true meaning of the Punjabi proverb "ਆਪੇ ਮੈਂ ਰੱਜੀ ਪੁੱਜੀ, ਆਪੇ ਮੇਰੇ ਬੱਚੇ ਜੀਣ"?',
      pa: 'ਪੰਜਾਬੀ ਅਖਾਣ "ਆਪੇ ਮੈਂ ਰੱਜੀ ਪੁੱਜੀ, ਆਪੇ ਮੇਰੇ ਬੱਚੇ ਜੀਣ" ਕਿਸ ਸਥਿਤੀ ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
      hi: 'पंजाबी लोकोक्ति "ਆਪੇ ਮੈਂ ਰੱਜੀ ਪੁੱਜੀ, ਆਪੇ ਮੇਰੇ ਬੱਚੇ ਜੀਣ" किस स्थिति में प्रयुक्त होती है?',
    },
    options: {
      A: {
        en: 'When a person praises themselves and their own possessions with their own mouth (ਆਪਣੇ ਮੂੰਹੋਂ ਆਪਣੀ ਵਡਿਆਈ ਆਪ ਕਰਨੀ)',
        pa: 'ਜਦੋਂ ਕੋਈ ਵਿਅਕਤੀ ਆਪਣੇ ਮੂੰਹੋਂ ਆਪਣੀ ਅਤੇ ਆਪਣੇ ਟੱਬਰ ਦੀ ਵਡਿਆਈ ਆਪ ਹੀ ਕਰੀ ਜਾਵੇ',
        hi: 'जब कोई व्यक्ति अपने मुँह से अपनी और अपने परिवार की प्रशंसा स्वयं ही करता रहे (अपने मुँह मियाँ मिट्ठू बनना)',
      },
      B: {
        en: 'When an entire family works hard in the fields to earn an honest livelihood',
        pa: 'ਜਦੋਂ ਸਾਰਾ ਪਰਿਵਾਰ ਖੇਤਾਂ ਵਿੱਚ ਸਖ਼ਤ ਮਿਹਨਤ ਕਰ ਕੇ ਹੱਕ-ਹਲਾਲ ਦੀ ਕਮਾਈ ਕਰੇ',
        hi: 'जब पूरा परिवार खेतों में कड़ी मेहनत करके ईमानदारी की कमाई करे',
      },
      C: {
        en: 'When someone blames their tools or companions for their own personal failure',
        pa: 'ਜਦੋਂ ਕੋਈ ਆਪਣੀ ਨਾਲਾਇਕੀ ਦਾ ਦੋਸ਼ ਦੂਜਿਆਂ ਜਾਂ ਸੰਦਾਂ ਦੇ ਸਿਰ ਮੜ੍ਹ ਦੇਵੇ',
        hi: 'जब कोई अपनी अयोग्यता का दोष दूसरों या साधनों के सिर मढ़ दे (नाच न जाने आँगन टेढ़ा)',
      },
      D: {
        en: 'When outer appearance is grand and showy, but inner quality is hollow and inferior',
        pa: 'ਜਦੋਂ ਬਾਹਰੋਂ ਦਿਖਾਵਾ ਬਹੁਤ ਜ਼ਿਆਦਾ ਹੋਵੇ ਪਰ ਅੰਦਰੋਂ ਗੁਣਵੱਤਾ ਬਿਲਕੁਲ ਫਿੱਕੀ ਹੋਵੇ',
        hi: 'जब बाहर से दिखावा बहुत अधिक हो परंतु भीतर से गुणवत्ता बिल्कुल फीकी हो',
      },
    },
    correct: 'A',
    explanation: {
      en: '"ਆਪੇ ਮੈਂ ਰੱਜੀ ਪੁੱਜੀ, ਆਪੇ ਮੇਰੇ ਬੱਚੇ ਜੀਣ" (like "ਆਪਣੇ ਮੂੰਹੋਂ ਮੀਆਂ ਮਿੱਠੂ ਬਣਨਾ") is used for someone who indulges in self-congratulation and self-praise without anyone else acknowledging them.',
      pa: '"ਆਪੇ ਮੈਂ ਰੱਜੀ ਪੁੱਜੀ, ਆਪੇ ਮੇਰੇ ਬੱਚੇ ਜੀਣ" ਅਖਾਣ ਉਸ ਵਿਅਕਤੀ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ ਜੋ ਆਪਣੇ ਮੂੰਹੋਂ ਆਪਣੀ ਸਿਫ਼ਤ ਜਾਂ ਵਡਿਆਈ ਆਪ ਹੀ ਕਰੀ ਜਾਵੇ।',
      hi: '"ਆਪੇ ਮੈਂ ਰੱਜੀ ਪੁੱਜੀ, ਆਪੇ ਮੇਰੇ ਬੱਚੇ ਜੀਣ" लोकोक्ति उस व्यक्ति के लिए प्रयुक्त होती है जो अपने मुँह से अपनी प्रशंसा स्वयं ही करता रहे।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-p3-5',
    topicId: 'ett-punjabi-3',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'On the basis of clause structure (ਬਣਤਰ ਦੇ ਆਧਾਰ ਤੇ), classify the following three Punjabi sentences:\n(1) "ਮਿਹਨਤੀ ਵਿਦਿਆਰਥੀ ਹਮੇਸ਼ਾ ਸਫ਼ਲ ਹੁੰਦੇ ਹਨ।"\n(2) "ਸੂਰਜ ਨਿਕਲਿਆ ਅਤੇ ਹਨੇਰਾ ਦੂਰ ਹੋ ਗਿਆ।"\n(3) "ਜੋ ਵਿਦਿਆਰਥੀ ਮਿਹਨਤ ਕਰਦੇ ਹਨ, ਉਹ ਜ਼ਰੂਰ ਸਫ਼ਲ ਹੁੰਦੇ ਹਨ।"',
      pa: 'ਬਣਤਰ ਦੇ ਆਧਾਰ ਤੇ ਹੇਠ ਲਿਖੇ ਤਿੰਨਾਂ ਵਾਕਾਂ ਦੀ ਸਹੀ ਕਿਸਮ ਦੱਸੋ:\n(1) "ਮਿਹਨਤੀ ਵਿਦਿਆਰਥੀ ਹਮੇਸ਼ਾ ਸਫ਼ਲ ਹੁੰਦੇ ਹਨ।"\n(2) "ਸੂਰਜ ਨਿਕਲਿਆ ਅਤੇ ਹਨੇਰਾ ਦੂਰ ਹੋ ਗਿਆ।"\n(3) "ਜੋ ਵਿਦਿਆਰਥੀ ਮਿਹਨਤ ਕਰਦੇ ਹਨ, ਉਹ ਜ਼ਰੂਰ ਸਫ਼ਲ ਹੁੰਦੇ ਹਨ।"',
      hi: 'संरचना (बणतर) के आधार पर निम्नलिखित तीनों वाक्यों का सही भेद बताएँ:\n(1) "ਮਿਹਨਤੀ ਵਿਦਿਆਰਥੀ ਹਮੇਸ਼ਾ ਸਫ਼ਲ ਹੁੰਦੇ ਹਨ।"\n(2) "ਸੂਰਜ ਨਿਕਲਿਆ ਅਤੇ ਹਨੇਰਾ ਦੂਰ ਹੋ ਗਿਆ।"\n(3) "ਜੋ ਵਿਦਿਆਰਥੀ ਮਿਹਨਤ ਕਰਦੇ ਹਨ, ਉਹ ਜ਼ਰੂਰ ਸਫ਼ਲ ਹੁੰਦੇ ਹਨ।"',
    },
    options: {
      A: {
        en: '(1) Simple Sentence (ਸਧਾਰਨ ਵਾਕ), (2) Compound Sentence (ਸੰਯੁਕਤ ਵਾਕ), (3) Complex Sentence (ਮਿਸ਼ਰਤ ਵਾਕ)',
        pa: '(1) ਸਧਾਰਨ ਵਾਕ, (2) ਸੰਯੁਕਤ ਵਾਕ, (3) ਮਿਸ਼ਰਤ ਵਾਕ',
        hi: '(1) साधारण/सरल वाक्य (ਸਧਾਰਨ ਵਾਕ), (2) संयुक्त वाक्य (ਸੰਯੁਕਤ ਵਾਕ), (3) मिश्रित वाक्य (ਮਿਸ਼ਰਤ ਵਾਕ)',
      },
      B: {
        en: '(1) Compound Sentence (ਸੰਯੁਕਤ ਵਾਕ), (2) Complex Sentence (ਮਿਸ਼ਰਤ ਵਾਕ), (3) Simple Sentence (ਸਧਾਰਨ ਵਾਕ)',
        pa: '(1) ਸੰਯੁਕਤ ਵਾਕ, (2) ਮਿਸ਼ਰਤ ਵਾਕ, (3) ਸਧਾਰਨ ਵਾਕ',
        hi: '(1) संयुक्त वाक्य, (2) मिश्रित वाक्य, (3) साधारण वाक्य',
      },
      C: {
        en: '(1) Simple Sentence (ਸਧਾਰਨ ਵਾਕ), (2) Complex Sentence (ਮਿਸ਼ਰਤ ਵਾਕ), (3) Compound Sentence (ਸੰਯੁਕਤ ਵਾਕ)',
        pa: '(1) ਸਧਾਰਨ ਵਾਕ, (2) ਮਿਸ਼ਰਤ ਵਾਕ, (3) ਸੰਯੁਕਤ ਵਾਕ',
        hi: '(1) साधारण वाक्य, (2) मिश्रित वाक्य, (3) संयुक्त वाक्य',
      },
      D: {
        en: '(1) Complex Sentence (ਮਿਸ਼ਰਤ ਵਾਕ), (2) Compound Sentence (ਸੰਯੁਕਤ ਵਾਕ), (3) Simple Sentence (ਸਧਾਰਨ ਵਾਕ)',
        pa: '(1) ਮਿਸ਼ਰਤ ਵਾਕ, (2) ਸੰਯੁਕਤ ਵਾਕ, (3) ਸਧਾਰਨ ਵਾਕ',
        hi: '(1) मिश्रित वाक्य, (2) संयुक्त वाक्य, (3) साधारण वाक्य',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Structurally, Punjabi sentences are of 3 types: (1) ਸਧਾਰਨ ਵਾਕ has one finite verb (ਇੱਕ ਉਦੇਸ਼ ਤੇ ਇੱਕ ਵਿਧੇਅ/ਕਿਰਿਆ); (2) ਸੰਯੁਕਤ ਵਾਕ joins two independent clauses (ਸਮਾਨ ਉਪਵਾਕ) with coordinating conjunctions (ਸਮਾਨ ਯੋਜਕ: ਅਤੇ, ਪਰ, ਜਾਂ, ਸਗੋਂ); (3) ਮਿਸ਼ਰਤ ਵਾਕ has one principal clause (ਪ੍ਰਧਾਨ ਉਪਵਾਕ) and one or more subordinate clauses (ਅਧੀਨ ਉਪਵਾਕ) introduced by subordinating conjunctions (ਕਿ, ਜੋ...ਉਹ, ਜੇ...ਤਾਂ, ਕਿਉਂਕਿ).',
      pa: 'ਬਣਤਰ ਪੱਖੋਂ ਵਾਕ ਤਿੰਨ ਪ੍ਰਕਾਰ ਦੇ ਹੁੰਦੇ ਹਨ: (1) "ਮਿਹਨਤੀ ਵਿਦਿਆਰਥੀ ਹਮੇਸ਼ਾ ਸਫ਼ਲ ਹੁੰਦੇ ਹਨ" ਵਿੱਚ ਇੱਕੋ ਕਿਰਿਆ ਹੈ, ਸੋ ਇਹ ਸਧਾਰਨ ਵਾਕ ਹੈ। (2) "ਸੂਰਜ ਨਿਕਲਿਆ ਅਤੇ ਹਨੇਰਾ ਦੂਰ ਹੋ ਗਿਆ" ਵਿੱਚ ਦੋ ਸੁਤੰਤਰ ਉਪਵਾਕ ਸਮਾਨ ਯੋਜਕ "ਅਤੇ" ਨਾਲ ਜੁੜੇ ਹਨ, ਸੋ ਇਹ ਸੰਯੁਕਤ ਵਾਕ ਹੈ। (3) "ਜੋ ਵਿਦਿਆਰਥੀ ਮਿਹਨਤ ਕਰਦੇ ਹਨ, ਉਹ ਜ਼ਰੂਰ ਸਫ਼ਲ ਹੁੰਦੇ ਹਨ" ਵਿੱਚ ਪ੍ਰਧਾਨ ਅਤੇ ਅਧੀਨ ਉਪਵਾਕ ਹਨ, ਸੋ ਇਹ ਮਿਸ਼ਰਤ ਵਾਕ ਹੈ।',
      hi: 'संरचना की दृष्टि से वाक्य तीन प्रकार के होते हैं: (1) एक ही मुख्य क्रिया वाला "ਸਧਾਰਨ ਵਾਕ" (सरल वाक्य), (2) समान योजक "ਅਤੇ" से जुड़े दो स्वतंत्र उपवाक्यों वाला "ਸੰਯੁਕਤ ਵਾਕ" (संयुक्त वाक्य), और (3) प्रधान तथा आश्रित उपवाक्य ("ਜੋ...ਉਹ") वाला "ਮਿਸ਼ਰਤ ਵਾਕ" (मिश्रित वाक्य)।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-p3-6',
    topicId: 'ett-punjabi-3',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level A)',
    question: {
      en: 'In Punjabi sentence transformation (ਵਾਕ ਵਟਾਂਦਰਾ), which option transforms the affirmative sentence "ਸਿਆਣੇ ਬੰਦੇ ਹਮੇਸ਼ਾ ਸੱਚ ਬੋਲਦੇ ਹਨ" into a Negative Sentence (ਨਾਂਹ-ਵਾਚਕ ਵਾਕ) WITHOUT changing its core meaning (ਅਰਥ ਬਦਲੇ ਬਿਨਾਂ)?',
      pa: 'ਵਾਕ ਵਟਾਂਦਰਾ ਦੇ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਹਾਂ-ਵਾਚਕ ਵਾਕ "ਸਿਆਣੇ ਬੰਦੇ ਹਮੇਸ਼ਾ ਸੱਚ ਬੋਲਦੇ ਹਨ" ਨੂੰ ਅਰਥ ਬਦਲੇ ਬਿਨਾਂ ਸਹੀ "ਨਾਂਹ-ਵਾਚਕ ਵਾਕ" ਵਿੱਚ ਬਦਲੋ:',
      hi: 'वाक्य रूपांतरण के नियमों के अनुसार सकारात्मक वाक्य "ਸਿਆਣੇ ਬੰਦੇ ਹਮੇਸ਼ਾ ਸੱਚ ਬੋਲਦੇ ਹਨ" को अर्थ बदले बिना सही "नकारात्मक वाक्य" (ਨਾਂਹ-ਵਾਚਕ ਵਾਕ) में बदलें:',
    },
    options: {
      A: {
        en: 'ਸਿਆਣੇ ਬੰਦੇ ਕਦੇ ਵੀ ਝੂਠ ਨਹੀਂ ਬੋਲਦੇ ਹਨ।',
        pa: 'ਸਿਆਣੇ ਬੰਦੇ ਕਦੇ ਵੀ ਝੂਠ ਨਹੀਂ ਬੋਲਦੇ ਹਨ।',
        hi: 'ਸਿਆਣੇ ਬੰਦੇ ਕਦੇ ਵੀ ਝੂਠ ਨਹੀਂ ਬੋਲਦੇ ਹਨ। (समझदार व्यक्ति कभी झूठ नहीं बोलते हैं।)',
      },
      B: {
        en: 'ਸਿਆਣੇ ਬੰਦੇ ਹਮੇਸ਼ਾ ਸੱਚ ਨਹੀਂ ਬੋਲਦੇ ਹਨ।',
        pa: 'ਸਿਆਣੇ ਬੰਦੇ ਹਮੇਸ਼ਾ ਸੱਚ ਨਹੀਂ ਬੋਲਦੇ ਹਨ।',
        hi: 'ਸਿਆਣੇ ਬੰਦੇ ਹਮੇਸ਼ਾ ਸੱਚ ਨਹੀਂ ਬੋਲਦੇ ਹਨ।',
      },
      C: {
        en: 'ਕੀ ਸਿਆਣੇ ਬੰਦੇ ਹਮੇਸ਼ਾ ਸੱਚ ਬੋਲਦੇ ਹਨ?',
        pa: 'ਕੀ ਸਿਆਣੇ ਬੰਦੇ ਹਮੇਸ਼ਾ ਸੱਚ ਬੋਲਦੇ ਹਨ?',
        hi: 'ਕੀ ਸਿਆਣੇ ਬੰਦੇ ਹਮੇਸ਼ਾ ਸੱਚ ਬੋਲਦੇ ਹਨ?',
      },
      D: {
        en: 'ਮੂਰਖ ਬੰਦੇ ਹਮੇਸ਼ਾ ਝੂਠ ਬੋਲਦੇ ਹਨ।',
        pa: 'ਮੂਰਖ ਬੰਦੇ ਹਮੇਸ਼ਾ ਝੂਠ ਬੋਲਦੇ ਹਨ।',
        hi: 'ਮੂਰਖ ਬੰਦੇ ਹਮੇਸ਼ਾ ਝੂਠ ਬੋਲਦੇ ਹਨ।',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In classic grammatical transformation without altering meaning, converting an affirmative sentence ("ਹਮੇਸ਼ਾ ਸੱਚ ਬੋਲਦੇ ਹਨ") to a negative sentence requires replacing the key word with its antonym along with negation ("ਕਦੇ ਵੀ ਝੂਠ ਨਹੀਂ ਬੋਲਦੇ ਹਨ"). Simply inserting "ਨਹੀਂ" ("ਸੱਚ ਨਹੀਂ ਬੋਲਦੇ") reverses the meaning in formal transformation.',
      pa: 'ਜਦੋਂ ਹਾਂ-ਵਾਚਕ ਵਾਕ ਨੂੰ ਅਰਥ ਬਦਲੇ ਬਿਨਾਂ ਨਾਂਹ-ਵਾਚਕ ਵਾਕ ਵਿੱਚ ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਵਿਰੋਧੀ ਸ਼ਬਦ ਦੇ ਨਾਲ "ਨਹੀਂ/ਕਦੇ ਨਹੀਂ" ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ: "ਹਮੇਸ਼ਾ ਸੱਚ ਬੋਲਦੇ ਹਨ" → "ਕਦੇ ਵੀ ਝੂਠ ਨਹੀਂ ਬੋਲਦੇ ਹਨ"।',
      hi: 'जब सकारात्मक वाक्य को अर्थ बदले बिना नकारात्मक वाक्य में बदला जाता है, तो विलोम शब्द के साथ निषेध ("ਕਦੇ ਵੀ ਝੂਠ ਨਹੀਂ ਬੋਲਦੇ ਹਨ") का प्रयोग किया जाता है।',
    },
    difficulty: 'hard',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-p3-7',
    topicId: 'ett-punjabi-3',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'Choose the correct Passive Voice (ਕਰਮਣੀ ਵਾਚ) transformation of the Active Voice (ਕਰਤਰੀ ਵਾਚ) Punjabi sentence: "ਕਿਸਾਨ ਨੇ ਖੇਤ ਵਿੱਚ ਕਣਕ ਬੀਜੀ।"?',
      pa: 'ਕਰਤਰੀ ਵਾਚ ਵਾਕ "ਕਿਸਾਨ ਨੇ ਖੇਤ ਵਿੱਚ ਕਣਕ ਬੀਜੀ।" ਦਾ ਸਹੀ "ਕਰਮਣੀ ਵਾਚ" ਰੂਪ ਚੁਣੋ:',
      hi: 'कर्तृवाच्य वाक्य "ਕਿਸਾਨ ਨੇ ਖੇਤ ਵਿੱਚ ਕਣਕ ਬੀਜੀ।" का सही "कर्मवाच्य" (ਕਰਮਣੀ ਵਾਚ) रूप चुनें:',
    },
    options: {
      A: {
        en: 'ਕਿਸਾਨ ਦੁਆਰਾ ਖੇਤ ਵਿੱਚ ਕਣਕ ਬੀਜੀ ਗਈ।',
        pa: 'ਕਿਸਾਨ ਦੁਆਰਾ ਖੇਤ ਵਿੱਚ ਕਣਕ ਬੀਜੀ ਗਈ।',
        hi: 'ਕਿਸਾਨ ਦੁਆਰਾ ਖੇਤ ਵਿੱਚ ਕਣਕ ਬੀਜੀ ਗਈ। (किसान द्वारा खेत में गेहूँ बोया गया।)',
      },
      B: {
        en: 'ਕਿਸਾਨ ਖੇਤ ਵਿੱਚ ਕਣਕ ਬੀਜਦਾ ਹੈ ਅਤੇ ਪਾਣੀ ਲਾਉਂਦਾ ਹੈ।',
        pa: 'ਕਿਸਾਨ ਖੇਤ ਵਿੱਚ ਕਣਕ ਬੀਜਦਾ ਹੈ ਅਤੇ ਪਾਣੀ ਲਾਉਂਦਾ ਹੈ।',
        hi: 'ਕਿਸਾਨ ਖੇਤ ਵਿੱਚ ਕਣਕ ਬੀਜਦਾ ਹੈ ਅਤੇ ਪਾਣੀ ਲਾਉਂਦਾ ਹੈ।',
      },
      C: {
        en: 'ਕਿਸਾਨ ਨੇ ਖੇਤ ਵਿੱਚ ਕਣਕ ਨਹੀਂ ਬੀਜੀ।',
        pa: 'ਕਿਸਾਨ ਨੇ ਖੇਤ ਵਿੱਚ ਕਣਕ ਨਹੀਂ ਬੀਜੀ।',
        hi: 'ਕਿਸਾਨ ਨੇ ਖੇਤ ਵਿੱਚ ਕਣਕ ਨਹੀਂ ਬੀਜੀ।',
      },
      D: {
        en: 'ਕਿਸਾਨ ਤੋਂ ਖੇਤ ਵਿੱਚ ਬੈਠਿਆ ਨਹੀਂ ਜਾਂਦਾ।',
        pa: 'ਕਿਸਾਨ ਤੋਂ ਖੇਤ ਵਿੱਚ ਬੈਠਿਆ ਨਹੀਂ ਜਾਂਦਾ।',
        hi: 'ਕਿਸਾਨ ਤੋਂ ਖੇਤ ਵਿੱਚ ਬੈਠਿਆ ਨਹੀਂ ਜਾਂਦਾ।',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Kartari Vach (ਕਰਤਰੀ ਵਾਚ), the subject (ਕਰਤਾ) is primary ("ਕਿਸਾਨ ਨੇ ਖੇਤ ਵਿੱਚ ਕਣਕ ਬੀਜੀ"). When converted into Karmani Vach (ਕਰਮਣੀ ਵਾਚ), the object ("ਕਣਕ") becomes primary, the postposition "ਨੇ" after the subject is replaced by "ਦੁਆਰਾ / ਰਾਹੀਂ / ਵੱਲੋਂ", and the auxiliary "ਗਈ / ਗਿਆ" is added ("ਕਿਸਾਨ ਦੁਆਰਾ ਖੇਤ ਵਿੱਚ ਕਣਕ ਬੀਜੀ ਗਈ"). Option D illustrates Bhav Vach (ਭਾਵ ਵਾਚ).',
      pa: 'ਕਰਤਰੀ ਵਾਚ ਨੂੰ ਕਰਮਣੀ ਵਾਚ ਵਿੱਚ ਬਦਲਣ ਵੇਲੇ ਕਰਤਾ ਨਾਲ ਲੱਗੇ ਸੰਬੰਧਕ "ਨੇ" ਦੀ ਥਾਂ "ਦੁਆਰਾ / ਰਾਹੀਂ / ਵੱਲੋਂ" ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ ਅਤੇ ਕਿਰਿਆ ਕਰਮ ("ਕਣਕ") ਦੇ ਅਨੁਸਾਰ "ਬੀਜੀ ਗਈ" ਵਿੱਚ ਬਦਲ ਜਾਂਦੀ ਹੈ।',
      hi: 'कर्तृवाच्य को कर्मवाच्य (ਕਰਮਣੀ ਵਾਚ) में बदलते समय कर्ता के परसर्ग "ਨੇ" के स्थान पर "ਦੁਆਰਾ / ਰਾਹੀਂ / ਵੱਲੋਂ" लगाया जाता है और क्रिया कर्म ("ਕਣਕ") के अनुसार "ਬੀਜੀ ਗਈ" हो जाती है।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-p3-8',
    topicId: 'ett-punjabi-3',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level B)',
    question: {
      en: 'Which option provides the most idiomatic and accurate Punjabi translation of the English proverb: "All that glitters is not gold"?',
      pa: 'ਅੰਗਰੇਜ਼ੀ ਦੀ ਪ੍ਰਸਿੱਧ ਕਹਾਵਤ "All that glitters is not gold" ਦਾ ਸਭ ਤੋਂ ਢੁਕਵਾਂ ਅਤੇ ਮੁਹਾਵਰੇਦਾਰ ਪੰਜਾਬੀ ਅਨੁਵਾਦ ਕਿਹੜਾ ਹੈ?',
      hi: 'अंग्रेजी की प्रसिद्ध कहावत "All that glitters is not gold" का सबसे सटीक और मुहावरेदार पंजाबी अनुवाद कौन-सा है?',
    },
    options: {
      A: {
        en: 'ਹਰ ਚਮਕਦੀ ਚੀਜ਼ ਸੋਨਾ ਨਹੀਂ ਹੁੰਦੀ। (ਜਾਂ: ਹਾਥੀ ਦੇ ਦੰਦ ਖਾਣ ਦੇ ਹੋਰ ਤੇ ਦਿਖਾਉਣ ਦੇ ਹੋਰ)',
        pa: 'ਹਰ ਚਮਕਦੀ ਚੀਜ਼ ਸੋਨਾ ਨਹੀਂ ਹੁੰਦੀ।',
        hi: 'ਹਰ ਚਮਕਦੀ ਚੀਜ਼ ਸੋਨਾ ਨਹੀਂ ਹੁੰਦੀ। (हर चमकने वाली चीज़ सोना नहीं होती।)',
      },
      B: {
        en: 'ਸੋਨਾ ਹਮੇਸ਼ਾ ਹਨੇਰੇ ਵਿੱਚ ਚਮਕਦਾ ਰਹਿੰਦਾ ਹੈ।',
        pa: 'ਸੋਨਾ ਹਮੇਸ਼ਾ ਹਨੇਰੇ ਵਿੱਚ ਚਮਕਦਾ ਰਹਿੰਦਾ ਹੈ।',
        hi: 'ਸੋਨਾ ਹਮੇਸ਼ਾ ਹਨੇਰੇ ਵਿੱਚ ਚਮਕਦਾ ਰਹਿੰਦਾ ਹੈ।',
      },
      C: {
        en: 'ਜਿੱਥੇ ਚਾਹ ਉੱਥੇ ਰਾਹ।',
        pa: 'ਜਿੱਥੇ ਚਾਹ ਉੱਥੇ ਰਾਹ।',
        hi: 'ਜਿੱਥੇ ਚਾਹ ਉੱਥੇ ਰਾਹ।',
      },
      D: {
        en: 'ਇਮਾਨਦਾਰੀ ਸਭ ਤੋਂ ਉੱਤਮ ਨੀਤੀ ਹੈ।',
        pa: 'ਇਮਾਨਦਾਰੀ ਸਭ ਤੋਂ ਉੱਤਮ ਨੀਤੀ ਹੈ।',
        hi: 'ਇਮਾਨਦਾਰੀ ਸਭ ਤੋਂ ਉੱਤਮ ਨੀਤੀ ਹੈ।',
      },
    },
    correct: 'A',
    explanation: {
      en: '"All that glitters is not gold" translates directly and idiomatically into Punjabi as "ਹਰ ਚਮਕਦੀ ਚੀਜ਼ ਸੋਨਾ ਨਹੀਂ ਹੁੰਦੀ।" Note: "Where there is a will, there is a way" = "ਜਿੱਥੇ ਚਾਹ ਉੱਥੇ ਰਾਹ"; "Honesty is the best policy" = "ਇਮਾਨਦਾਰੀ ਸਭ ਤੋਂ ਉੱਤਮ ਨੀਤੀ ਹੈ।".',
      pa: '"All that glitters is not gold" ਦਾ ਸਹੀ ਪੰਜਾਬੀ ਅਨੁਵਾਦ "ਹਰ ਚਮਕਦੀ ਚੀਜ਼ ਸੋਨਾ ਨਹੀਂ ਹੁੰਦੀ" ਹੈ। ("Where there is a will, there is a way" = ਜਿੱਥੇ ਚਾਹ ਉੱਥੇ ਰਾਹ; "Honesty is the best policy" = ਇਮਾਨਦਾਰੀ ਸਭ ਤੋਂ ਉੱਤਮ ਨੀਤੀ ਹੈ)।',
      hi: '"All that glitters is not gold" का सही पंजाबी अनुवाद "ਹਰ ਚਮਕਦੀ ਚੀਜ਼ ਸੋਨਾ ਨਹੀਂ ਹੁੰਦੀ" है।',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-p3-9',
    topicId: 'ett-punjabi-3',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level A)',
    question: {
      en: 'In official administrative Punjabi terminology (ਦਫ਼ਤਰੀ ਸ਼ਬਦਾਵਲੀ), what is the exact Punjabi translation of the English sentence: "Ignorance of law is no excuse"?',
      pa: 'ਦਫ਼ਤਰੀ ਅਤੇ ਕਾਨੂੰਨੀ ਸ਼ਬਦਾਵਲੀ ਅਨੁਸਾਰ ਅੰਗਰੇਜ਼ੀ ਵਾਕ "Ignorance of law is no excuse" ਦਾ ਸਹੀ ਪੰਜਾਬੀ ਅਨੁਵਾਦ ਕੀ ਹੈ?',
      hi: 'कार्यालयी एवं विधिक शब्दावली के अनुसार अंग्रेजी वाक्य "Ignorance of law is no excuse" का सही पंजाबी अनुवाद क्या है?',
    },
    options: {
      A: {
        en: 'ਕਾਨੂੰਨ ਦੀ ਅਗਿਆਨਤਾ ਕੋਈ ਬਹਾਨਾ (ਉਜ਼ਰ) ਨਹੀਂ ਹੈ।',
        pa: 'ਕਾਨੂੰਨ ਦੀ ਅਗਿਆਨਤਾ ਕੋਈ ਬਹਾਨਾ (ਉਜ਼ਰ) ਨਹੀਂ ਹੈ।',
        hi: 'ਕਾਨੂੰਨ ਦੀ ਅਗਿਆਨਤਾ ਕੋਈ ਬਹਾਨਾ (ਉਜ਼ਰ) ਨਹੀਂ ਹੈ। (कानून की अनभिज्ञता कोई बहाना नहीं है।)',
      },
      B: {
        en: 'ਕਾਨੂੰਨ ਤੋੜਨ ਵਾਲੇ ਨੂੰ ਕਦੇ ਮੁਆਫ਼ੀ ਨਹੀਂ ਮਿਲਦੀ।',
        pa: 'ਕਾਨੂੰਨ ਤੋੜਨ ਵਾਲੇ ਨੂੰ ਕਦੇ ਮੁਆਫ਼ੀ ਨਹੀਂ ਮਿਲਦੀ।',
        hi: 'ਕਾਨੂੰਨ ਤੋੜਨ ਵਾਲੇ ਨੂੰ ਕਦੇ ਮੁਆਫ਼ੀ ਨਹੀਂ ਮਿਲਦੀ।',
      },
      C: {
        en: 'ਕਾਨੂੰਨ ਦੇ ਸਾਹਮਣੇ ਸਾਰੇ ਨਾਗਰਿਕ ਬਰਾਬਰ ਹਨ।',
        pa: 'ਕਾਨੂੰਨ ਦੇ ਸਾਹਮਣੇ ਸਾਰੇ ਨਾਗਰਿਕ ਬਰਾਬਰ ਹਨ।',
        hi: 'ਕਾਨੂੰਨ ਦੇ ਸਾਹਮਣੇ ਸਾਰੇ ਨਾਗਰਿਕ ਬਰਾਬਰ ਹਨ।',
      },
      D: {
        en: 'ਇਨਸਾਫ਼ ਵਿੱਚ ਦੇਰੀ ਇਨਸਾਫ਼ ਤੋਂ ਇਨਕਾਰ ਹੈ।',
        pa: 'ਇਨਸਾਫ਼ ਵਿੱਚ ਦੇਰੀ ਇਨਸਾਫ਼ ਤੋਂ ਇਨਕਾਰ ਹੈ।',
        hi: 'ਇਨਸਾਫ਼ ਵਿੱਚ ਦੇਰੀ ਇਨਸਾਫ਼ ਤੋਂ ਇਨਕਾਰ ਹੈ।',
      },
    },
    correct: 'A',
    explanation: {
      en: '"Ignorance of law is no excuse" is rendered in standard Punjabi legal/administrative translation as "ਕਾਨੂੰਨ ਦੀ ਅਗਿਆਨਤਾ ਕੋਈ ਬਹਾਨਾ (ਜਾਂ ਉਜ਼ਰ) ਨਹੀਂ ਹੈ।" Note that Option C translates "All citizens are equal before the law" and Option D translates "Justice delayed is justice denied".',
      pa: '"Ignorance of law is no excuse" ਦਾ ਸਹੀ ਅਤੇ ਮਿਆਰੀ ਪੰਜਾਬੀ ਅਨੁਵਾਦ "ਕਾਨੂੰਨ ਦੀ ਅਗਿਆਨਤਾ ਕੋਈ ਬਹਾਨਾ (ਉਜ਼ਰ) ਨਹੀਂ ਹੈ" ਬਣਦਾ ਹੈ। ("Justice delayed is justice denied" = ਇਨਸਾਫ਼ ਵਿੱਚ ਦੇਰੀ ਇਨਸਾਫ਼ ਤੋਂ ਇਨਕਾਰ ਹੈ)।',
      hi: '"Ignorance of law is no excuse" का मानक पंजाबी अनुवाद "ਕਾਨੂੰਨ ਦੀ ਅਗਿਆਨਤਾ ਕੋਈ ਬਹਾਨਾ (ਉਜ਼ਰ) ਨਹੀਂ ਹੈ" होता है।',
    },
    difficulty: 'hard',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-p3-10',
    topicId: 'ett-punjabi-3',
    subjectId: 'ett-punjabi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'Convert the Complex Sentence (ਮਿਸ਼ਰਤ ਵਾਕ) "ਜਦੋਂ ਮੀਂਹ ਪਿਆ, ਤਾਂ ਫ਼ਸਲਾਂ ਖਿੜ ਉੱਠੀਆਂ" into a Simple Sentence (ਸਧਾਰਨ ਵਾਕ) without changing its meaning:',
      pa: 'ਮਿਸ਼ਰਤ ਵਾਕ "ਜਦੋਂ ਮੀਂਹ ਪਿਆ, ਤਾਂ ਫ਼ਸਲਾਂ ਖਿੜ ਉੱਠੀਆਂ" ਨੂੰ ਅਰਥ ਬਦਲੇ ਬਿਨਾਂ "ਸਧਾਰਨ ਵਾਕ" ਵਿੱਚ ਬਦਲੋ:',
      hi: 'मिश्रित वाक्य "ਜਦੋਂ ਮੀਂਹ ਪਿਆ, ਤਾਂ ਫ਼ਸਲਾਂ ਖਿੜ ਉੱਠੀਆਂ" को अर्थ बदले बिना "सरल/साधारण वाक्य" (ਸਧਾਰਨ ਵਾਕ) में बदलें:',
    },
    options: {
      A: {
        en: 'ਮੀਂਹ ਪੈਣ ਨਾਲ ਫ਼ਸਲਾਂ ਖਿੜ ਉੱਠੀਆਂ।',
        pa: 'ਮੀਂਹ ਪੈਣ ਨਾਲ ਫ਼ਸਲਾਂ ਖਿੜ ਉੱਠੀਆਂ।',
        hi: 'ਮੀਂਹ ਪੈਣ ਨਾਲ ਫ਼ਸਲਾਂ ਖਿੜ ਉੱਠੀਆਂ। (वर्षा होने से फसलें खिल उठीं।)',
      },
      B: {
        en: 'ਮੀਂਹ ਪਿਆ ਅਤੇ ਫ਼ਸਲਾਂ ਖਿੜ ਉੱਠੀਆਂ।',
        pa: 'ਮੀਂਹ ਪਿਆ ਅਤੇ ਫ਼ਸਲਾਂ ਖਿੜ ਉੱਠੀਆਂ।',
        hi: 'ਮੀਂਹ ਪਿਆ ਅਤੇ ਫ਼ਸਲਾਂ ਖਿੜ ਉੱਠੀਆਂ।',
      },
      C: {
        en: 'ਕਿਉਂਕਿ ਮੀਂਹ ਪਿਆ ਸੀ, ਇਸ ਲਈ ਫ਼ਸਲਾਂ ਖਿੜ ਉੱਠੀਆਂ।',
        pa: 'ਕਿਉਂਕਿ ਮੀਂਹ ਪਿਆ ਸੀ, ਇਸ ਲਈ ਫ਼ਸਲਾਂ ਖਿੜ ਉੱਠੀਆਂ।',
        hi: 'ਕਿਉਂਕਿ ਮੀਂਹ ਪਿਆ ਸੀ, ਇਸ ਲਈ ਫ਼ਸਲਾਂ ਖਿੜ ਉੱਠੀਆਂ।',
      },
      D: {
        en: 'ਜੇ ਮੀਂਹ ਪਵੇਗਾ, ਤਾਂ ਫ਼ਸਲਾਂ ਖਿੜ ਉੱਠਣਗੀਆਂ।',
        pa: 'ਜੇ ਮੀਂਹ ਪਵੇਗਾ, ਤਾਂ ਫ਼ਸਲਾਂ ਖਿੜ ਉੱਠਣਗੀਆਂ।',
        hi: 'ਜੇ ਮੀਂਹ ਪਵੇਗਾ, ਤਾਂ ਫ਼ਸਲਾਂ ਖਿੜ ਉੱਠਣਗੀਆਂ।',
      },
    },
    correct: 'A',
    explanation: {
      en: 'To convert the complex sentence "ਜਦੋਂ ਮੀਂਹ ਪਿਆ, ਤਾਂ ਫ਼ਸਲਾਂ ਖਿੜ ਉੱਠੀਆਂ" into a Simple Sentence (ਸਧਾਰਨ ਵਾਕ), the subordinate clause "ਜਦੋਂ ਮੀਂਹ ਪਿਆ" is reduced to a non-finite participial/gerundive phrase "ਮੀਂਹ ਪੈਣ ਨਾਲ", leaving only one finite verb ("ਖਿੜ ਉੱਠੀਆਂ"). Option B ("ਮੀਂਹ ਪਿਆ ਅਤੇ...") is a Compound Sentence (ਸੰਯੁਕਤ ਵਾਕ).',
      pa: 'ਮਿਸ਼ਰਤ ਵਾਕ ਨੂੰ ਸਧਾਰਨ ਵਾਕ ਵਿੱਚ ਬਦਲਣ ਲਈ ਅਧੀਨ ਉਪਵਾਕ ("ਜਦੋਂ ਮੀਂਹ ਪਿਆ") ਨੂੰ ਕਿਰਿਆਵੀ ਨਾਂਵ ਵਾਕੰਸ਼ ("ਮੀਂਹ ਪੈਣ ਨਾਲ") ਵਿੱਚ ਬਦਲ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ ਤਾਂ ਜੋ ਵਾਕ ਵਿੱਚ ਇੱਕੋ ਸਮਾਪਕ ਕਿਰਿਆ ("ਖਿੜ ਉੱਠੀਆਂ") ਰਹਿ ਜਾਵੇ। ਵਿਕਲਪ B ਸੰਯੁਕਤ ਵਾਕ ਹੈ।',
      hi: 'मिश्रित वाक्य को साधारण वाक्य (ਸਧਾਰਨ ਵਾਕ) में बदलने के लिए आश्रित उपवाक्य ("ਜਦੋਂ ਮੀਂਹ ਪਿਆ") को पदबंध ("ਮੀਂਹ ਪੈਣ ਨਾਲ") में बदल दिया जाता है जिससे वाक्य में एक ही समापिका क्रिया ("ਖਿੜ ਉੱਠੀਆਂ") रह जाती है।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },

  // ===========================================================================
  // TOPIC 5: ETT PAPER B — SOCIAL STUDIES (PUNJAB HISTORY, INDIA, CIVICS & GEOGRAPHY)
  // topicId: 'ett-sst-history-3' (10 MCQs)
  // ===========================================================================
  {
    id: 'q-ett-pb-sst-1',
    topicId: 'ett-sst-history-3',
    subjectId: 'ett-social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level B)',
    question: {
      en: 'Which town on the banks of the Ravi River was founded by Sri Guru Nanak Dev Ji after completing his four Udasis (preaching journeys), and in which group of hymns did he condemn Babur\'s invasion of Saidpur (Eminabad)?',
      pa: 'ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਨੇ ਆਪਣੀਆਂ ਚਾਰ ਉਦਾਸੀਆਂ ਪੂਰੀਆਂ ਕਰਨ ਉਪਰੰਤ ਰਾਵੀ ਦਰਿਆ ਦੇ ਕੰਢੇ ਕਿਹੜਾ ਨਗਰ ਵਸਾਇਆ ਸੀ, ਅਤੇ ਸੈਦਪੁਰ (ਐਮਨਾਬਾਦ) ਉੱਤੇ ਬਾਬਰ ਦੇ ਹਮਲੇ ਦੇ ਜ਼ੁਲਮਾਂ ਵਿਰੁੱਧ ਕਿਹੜੀ ਬਾਣੀ ਉਚਾਰੀ ਸੀ?',
      hi: 'श्री गुरु नानक देव जी ने अपनी चार उदासियाँ (यात्राएँ) पूरी करने के पश्चात रावी नदी के तट पर कौन-सा नगर बसाया था, और सैदपुर (ऐमनाबाद) पर बाबर के आक्रमण के अत्याचारों के विरुद्ध कौन-सी वाणी रची थी?',
    },
    options: {
      A: {
        en: 'Kartarpur (in 1521–22 CE); four hymns collectively known as "Babur Vani" (ਬਾਬਰਵਾਣੀ)',
        pa: 'ਕਰਤਾਰਪੁਰ (1521–22 ਈ. ਵਿੱਚ); ਚਾਰ ਸ਼ਬਦਾਂ ਦਾ ਸਮੂਹ ਜਿਸ ਨੂੰ "ਬਾਬਰਵਾਣੀ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ',
        hi: 'करतारपुर (1521–22 ई. में); चार शब्दों का समूह जिसे "बाबरवाणी" (ਬਾਬਰਵਾਣੀ) कहा जाता है',
      },
      B: {
        en: 'Khadur Sahib (in 1539 CE); "Sidh Gosht" (ਸਿੱਧ ਗੋਸ਼ਟਿ)',
        pa: 'ਖਡੂਰ ਸਾਹਿਬ (1539 ਈ. ਵਿੱਚ); "ਸਿੱਧ ਗੋਸ਼ਟਿ" ਬਾਣੀ',
        hi: 'खडूर साहिब (1539 ई. में); "सिद्ध गोष्टि" वाणी',
      },
      C: {
        en: 'Goindwal Sahib (in 1546 CE); "Asa di Vaar" (ਆਸਾ ਦੀ ਵਾਰ)',
        pa: 'ਗੋਇੰਦਵਾਲ ਸਾਹਿਬ (1546 ਈ. ਵਿੱਚ); "ਆਸਾ ਦੀ ਵਾਰ" ਬਾਣੀ',
        hi: 'गोइंदवाल साहिब (1546 ई. में); "आसा दी वार" वाणी',
      },
      D: {
        en: 'Kiratpur Sahib (in 1626 CE); "Bara Maha Tukhari" (ਬਾਰਹ ਮਾਹਾ ਤੁਖਾਰੀ)',
        pa: 'ਕੀਰਤਪੁਰ ਸਾਹਿਬ (1626 ਈ. ਵਿੱਚ); "ਬਾਰਹ ਮਾਹਾ ਤੁਖਾਰੀ" ਬਾਣੀ',
        hi: 'कीरतपुर साहिब (1626 ई. में); "बारह माहा तुखारी" वाणी',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Sri Guru Nanak Dev Ji (born 15 April 1469 at Rai Bhoe di Talwandi / Nankana Sahib) founded Kartarpur on the right bank of the Ravi river around 1521–22 CE and institutionalised Sangat and Pangat there. During Babur\'s invasion of Saidpur (1520–21), Guru Ji composed four poignant hymns in Rag Asa and Tilang known as "Babur Vani" ("ਏਤੀ ਮਾਰ ਪਈ ਕਰਲਾਣੇ ਤੈਂ ਕੀ ਦਰਦੁ ਨ ਆਇਆ").',
      pa: 'ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਨੇ ਚਾਰ ਉਦਾਸੀਆਂ ਤੋਂ ਬਾਅਦ ਰਾਵੀ ਦਰਿਆ ਦੇ ਕੰਢੇ "ਕਰਤਾਰਪੁਰ" ਨਗਰ ਵਸਾਇਆ ਅਤੇ ਉੱਥੇ ਸੰਗਤ-ਪੰਗਤ ਦੀ ਪ੍ਰਥਾ ਚਲਾਈ। ਬਾਬਰ ਦੇ ਸੈਦਪੁਰ (ਐਮਨਾਬਾਦ) ਹਮਲੇ ਸਮੇਂ ਹੋਈ ਤਬਾਹੀ ਬਾਰੇ ਗੁਰੂ ਜੀ ਨੇ ਚਾਰ ਸ਼ਬਦ ਉਚਾਰੇ ਜਿਨ੍ਹਾਂ ਨੂੰ "ਬਾਬਰਵਾਣੀ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
      hi: 'श्री गुरु नानक देव जी ने चार उदासियों के बाद रावी नदी के तट पर "करतारपुर" नगर बसाया। बाबर के सैदपुर (ऐमनाबाद) आक्रमण के समय हुए अत्याचारों का वर्णन गुरु जी ने "बाबरवाणी" के चार शब्दों में किया।',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-sst-2',
    topicId: 'ett-sst-history-3',
    subjectId: 'ett-social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'Arrange the following landmark events of the Sikh Guru period in correct chronological order with their exact historical years:\n1. Compilation and installation of the Adi Granth at Harmandir Sahib by Guru Arjan Dev Ji\n2. Construction of Sri Akal Takht Sahib (Akal Bunga) by Guru Hargobind Sahib Ji\n3. Martyrdom of Guru Tegh Bahadur Ji at Chandni Chowk, Delhi\n4. Creation of the Khalsa Panth at Kesgarh Sahib, Anandpur Sahib by Guru Gobind Singh Ji',
      pa: 'ਗੁਰੂ-ਕਾਲ ਦੀਆਂ ਹੇਠ ਲਿਖੀਆਂ ਇਤਿਹਾਸਕ ਘਟਨਾਵਾਂ ਨੂੰ ਉਹਨਾਂ ਦੇ ਸਹੀ ਸੰਨ ਸਮੇਤ ਕਾਲਕ੍ਰਮ ਅਨੁਸਾਰ ਚੁਣੋ:\n1. ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਵੱਲੋਂ ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ ਦੀ ਸੰਪਾਦਨਾ ਅਤੇ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਵਿਖੇ ਪ੍ਰਕਾਸ਼\n2. ਸ੍ਰੀ ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਵੱਲੋਂ ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਦੀ ਉਸਾਰੀ\n3. ਚਾਂਦਨੀ ਚੌਕ, ਦਿੱਲੀ ਵਿਖੇ ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਦੀ ਸ਼ਹਾਦਤ\n4. ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਵੱਲੋਂ ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ (ਅਨੰਦਪੁਰ ਸਾਹਿਬ) ਵਿਖੇ ਖ਼ਾਲਸਾ ਪੰਥ ਦੀ ਸਾਜਨਾ',
      hi: 'गुरु-काल की निम्नलिखित ऐतिहासिक घटनाओं को उनके सही वर्ष सहित कालक्रमानुसार चुनें:\n1. श्री गुरु अर्जन देव जी द्वारा आदि ग्रंथ का संकलन और हरिमंदिर साहिब में प्रकाश\n2. श्री गुरु हरगोबिंद साहिब जी द्वारा श्री अकाल तख़्त साहिब का निर्माण\n3. चाँदनी चौक, दिल्ली में श्री गुरु तेग़ बहादुर जी की शहादत\n4. श्री गुरु गोबिंद सिंह जी द्वारा केसगढ़ साहिब (आनंदपुर साहिब) में ख़ालसा पंथ की स्थापना',
    },
    options: {
      A: {
        en: '1 (1604 CE) → 2 (1606 CE) → 3 (1675 CE) → 4 (1699 CE)',
        pa: '1 (1604 ਈ.) → 2 (1606 ਈ.) → 3 (1675 ਈ.) → 4 (1699 ਈ.)',
        hi: '1 (1604 ई.) → 2 (1606 ई.) → 3 (1675 ई.) → 4 (1699 ई.)',
      },
      B: {
        en: '1 (1588 CE) → 2 (1604 CE) → 3 (1666 CE) → 4 (1704 CE)',
        pa: '1 (1588 ਈ.) → 2 (1604 ਈ.) → 3 (1666 ਈ.) → 4 (1704 ਈ.)',
        hi: '1 (1588 ई.) → 2 (1604 ई.) → 3 (1666 ई.) → 4 (1704 ई.)',
      },
      C: {
        en: '2 (1604 CE) → 1 (1606 CE) → 4 (1675 CE) → 3 (1699 CE)',
        pa: '2 (1604 ਈ.) → 1 (1606 ਈ.) → 4 (1675 ਈ.) → 3 (1699 ਈ.)',
        hi: '2 (1604 ई.) → 1 (1606 ई.) → 4 (1675 ई.) → 3 (1699 ई.)',
      },
      D: {
        en: '1 (1604 CE) → 2 (1621 CE) → 3 (1699 CE) → 4 (1708 CE)',
        pa: '1 (1604 ਈ.) → 2 (1621 ਈ.) → 3 (1699 ਈ.) → 4 (1708 ਈ.)',
        hi: '1 (1604 ई.) → 2 (1621 ई.) → 3 (1699 ई.) → 4 (1708 ई.)',
      },
    },
    correct: 'A',
    explanation: {
      en: '(1) Adi Granth was compiled by the 5th Guru, Sri Guru Arjan Dev Ji (with Bhai Gurdas Ji as scribe), and installed at Harmandir Sahib in 1604 CE with Baba Buddha Ji as first Granthi. (2) Sri Akal Takht Sahib was established in 1606 CE by the 6th Guru, Sri Guru Hargobind Sahib Ji, along with Miri-Piri. (3) The 9th Guru, Sri Guru Tegh Bahadur Ji, attained martyrdom in 1675 CE. (4) Khalsa Panth was created on Baisakhi, 1699 CE.',
      pa: '(1) ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ ਦਾ ਸੰਕਲਨ ਅਤੇ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਵਿਖੇ ਪਹਿਲਾ ਪ੍ਰਕਾਸ਼ 1604 ਈ. ਵਿੱਚ ਹੋਇਆ (ਪਹਿਲੇ ਗ੍ਰੰਥੀ ਬਾਬਾ ਬੁੱਢਾ ਜੀ ਅਤੇ ਲਿਖਾਰੀ ਭਾਈ ਗੁਰਦਾਸ ਜੀ)। (2) ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਦੀ ਸਿਰਜਣਾ 1606 ਈ. ਵਿੱਚ ਹੋਈ। (3) ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਦੀ ਸ਼ਹਾਦਤ 1675 ਈ. ਵਿੱਚ ਹੋਈ। (4) ਖ਼ਾਲਸਾ ਪੰਥ ਦੀ ਸਾਜਨਾ ਵਿਸਾਖੀ ਵਾਲੇ ਦਿਨ 1699 ਈ. ਵਿੱਚ ਹੋਈ।',
      hi: '(1) आदि ग्रंथ का संकलन व पहला प्रकाश 1604 ई. में हुआ। (2) श्री अकाल तख़्त साहिब की स्थापना 1606 ई. में हुई। (3) श्री गुरु तेग़ बहादुर जी की शहादत 1675 ई. में हुई। (4) ख़ालसा पंथ की स्थापना बैसाखी 1699 ई. में हुई।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-sst-3',
    topicId: 'ett-sst-history-3',
    subjectId: 'ett-social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'From which place in Malwa did Sri Guru Gobind Singh Ji write the Persian verse epistle "Zafarnama" (ਜ਼ਫ਼ਰਨਾਮਾ) to Mughal Emperor Aurangzeb, and who carried it to Ahmednagar?',
      pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਮੁਗ਼ਲ ਬਾਦਸ਼ਾਹ ਔਰੰਗਜ਼ੇਬ ਨੂੰ ਫ਼ਾਰਸੀ ਭਾਸ਼ਾ ਵਿੱਚ ਲਿਖਿਆ ਇਤਿਹਾਸਕ ਪੱਤਰ "ਜ਼ਫ਼ਰਨਾਮਾ" ਮਾਲਵੇ ਦੇ ਕਿਸ ਅਸਥਾਨ ਤੋਂ ਲਿਖਿਆ ਸੀ ਅਤੇ ਇਸ ਨੂੰ ਔਰੰਗਜ਼ੇਬ ਕੋਲ ਕੌਣ ਲੈ ਕੇ ਗਿਆ ਸੀ?',
      hi: 'श्री गुरु गोबिंद सिंह जी ने मुग़ल बादशाह औरंगज़ेब को फ़ारसी भाषा में लिखा ऐतिहासिक पत्र "ज़फ़रनामा" (ਜ਼ਫ਼ਰਨਾਮਾ) मालवा के किस स्थान से लिखा था और इसे औरंगज़ेब के पास कौन लेकर गया था?',
    },
    options: {
      A: {
        en: 'From Dina Kangar (in 1705 CE); delivered by Bhai Daya Singh Ji and Bhai Dharam Singh Ji',
        pa: 'ਦੀਨਾ ਕਾਂਗੜ ਤੋਂ (1705 ਈ. ਵਿੱਚ); ਭਾਈ ਦਇਆ ਸਿੰਘ ਜੀ ਅਤੇ ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ ਰਾਹੀਂ ਭੇਜਿਆ ਗਿਆ',
        hi: 'दीना कांगड़ से (1705 ई. में); भाई दया सिंह जी और भाई धरम सिंह जी द्वारा भेजा गया',
      },
      B: {
        en: 'From Machhiwara (in 1704 CE); delivered by Nabi Khan and Ghani Khan',
        pa: 'ਮਾਛੀਵਾੜਾ ਤੋਂ (1704 ਈ. ਵਿੱਚ); ਨਬੀ ਖ਼ਾਂ ਅਤੇ ਗ਼ਨੀ ਖ਼ਾਂ ਰਾਹੀਂ ਭੇਜਿਆ ਗਿਆ',
        hi: 'माछीवाड़ा से (1704 ई. में); नबी ख़ाँ और ग़नी ख़ाँ द्वारा भेजा गया',
      },
      C: {
        en: 'From Paonta Sahib (in 1688 CE); delivered by Pir Budhu Shah',
        pa: 'ਪਾਉਂਟਾ ਸਾਹਿਬ ਤੋਂ (1688 ਈ. ਵਿੱਚ); ਪੀਰ ਬੁੱਧੂ ਸ਼ਾਹ ਰਾਹੀਂ ਭੇਜਿਆ ਗਿਆ',
        hi: 'पांवटा साहिब से (1688 ई. में); पीर बुद्धू शाह द्वारा भेजा गया',
      },
      D: {
        en: 'From Nanded (in 1708 CE); delivered by Banda Singh Bahadur',
        pa: 'ਨਾਂਦੇੜ ਤੋਂ (1708 ਈ. ਵਿੱਚ); ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਰਾਹੀਂ ਭੇਜਿਆ ਗਿਆ',
        hi: 'नांदेड़ से (1708 ई. में); बाबा बंदा सिंह बहादुर द्वारा भेजा गया',
      },
    },
    correct: 'A',
    explanation: {
      en: 'After the Battle of Chamkaur (December 1704), Sri Guru Gobind Singh Ji reached village Dina Kangar (now in Moga district) in 1705 CE and composed the "Zafarnama" ("Epistle of Victory") in Persian verse rebuking Aurangzeb for breaking his solemn oaths. Bhai Daya Singh Ji and Bhai Dharam Singh Ji delivered it to Aurangzeb in the Deccan.',
      pa: 'ਚਮਕੌਰ ਦੀ ਗੜ੍ਹੀ ਦੀ ਜੰਗ ਤੋਂ ਬਾਅਦ ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਮਾਲਵੇ ਦੇ ਪਿੰਡ "ਦੀਨਾ ਕਾਂਗੜ" ਵਿਖੇ 1705 ਈ. ਵਿੱਚ ਫ਼ਾਰਸੀ ਭਾਸ਼ਾ ਵਿੱਚ "ਜ਼ਫ਼ਰਨਾਮਾ" (ਜਿੱਤ ਦੀ ਚਿੱਠੀ) ਲਿਖਿਆ ਅਤੇ ਇਸ ਨੂੰ ਭਾਈ ਦਇਆ ਸਿੰਘ ਜੀ ਤੇ ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ ਹੱਥ ਦੱਖਣ (ਅਹਿਮਦਨਗਰ) ਵਿਖੇ ਔਰੰਗਜ਼ੇਬ ਕੋਲ ਭੇਜਿਆ।',
      hi: 'चमकौर के युद्ध के पश्चात श्री गुरु गोबिंद सिंह जी ने मालवा के गाँव "दीना कांगड़" से 1705 ई. में फ़ारसी भाषा में "ज़फ़रनामा" (विजय-पत्र) लिखा और इसे भाई दया सिंह जी तथा भाई धरम सिंह जी के माध्यम से औरंगज़ेब के पास भेजा।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-sst-4',
    topicId: 'ett-sst-history-3',
    subjectId: 'ett-social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'In which decisive battle fought in May 1710 did Baba Banda Singh Bahadur defeat and kill Wazir Khan, the Mughal Faujdar of Sirhind, and which place did he make the capital of the first Sikh state?',
      pa: 'ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੇ ਮਈ 1710 ਈ. ਵਿੱਚ ਕਿਹੜੀ ਇਤਿਹਾਸਕ ਲੜਾਈ ਵਿੱਚ ਸਰਹਿੰਦ ਦੇ ਮੁਗ਼ਲ ਫ਼ੌਜਦਾਰ ਵਜ਼ੀਰ ਖ਼ਾਂ ਨੂੰ ਮਾਰ ਕੇ ਸਰਹਿੰਦ ਫ਼ਤਹਿ ਕੀਤਾ ਅਤੇ ਪਹਿਲੇ ਸਿੱਖ ਰਾਜ ਦੀ ਰਾਜਧਾਨੀ ਕਿਸ ਨੂੰ ਬਣਾਇਆ?',
      hi: 'बाबा बंदा सिंह बहादुर ने मई 1710 ई. में किस ऐतिहासिक युद्ध में सरहिंद के मुग़ल फ़ौजदार वज़ीर ख़ाँ को पराजित कर सरहिंद पर विजय प्राप्त की और प्रथम सिख राज्य की राजधानी किसे बनाया?',
    },
    options: {
      A: {
        en: 'Battle of Chappar Chiri (12 May 1710); established capital at Lohgarh (Mukhlispur) and abolished the Mughal Zamindari system',
        pa: 'ਚੱਪੜਚਿੜੀ ਦੀ ਲੜਾਈ (12 ਮਈ 1710); ਲੋਹਗੜ੍ਹ (ਮੁਖ਼ਲਿਸਪੁਰ) ਨੂੰ ਰਾਜਧਾਨੀ ਬਣਾਇਆ ਅਤੇ ਜ਼ਿਮੀਂਦਾਰੀ ਪ੍ਰਥਾ ਖ਼ਤਮ ਕੀਤੀ',
        hi: 'चप्पड़चिड़ी का युद्ध (12 मई 1710); लोहगढ़ (मुख़लिसपुर) को राजधानी बनाया और ज़मींदारी प्रथा समाप्त की',
      },
      B: {
        en: 'Battle of Gurdas Nangal (1715); established capital at Lahore and signed a treaty with Farrukhsiyar',
        pa: 'ਗੁਰਦਾਸ ਨੰਗਲ ਦੀ ਲੜਾਈ (1715); ਲਾਹੌਰ ਨੂੰ ਰਾਜਧਾਨੀ ਬਣਾਇਆ ਅਤੇ ਫ਼ਰੁਖ਼ਸੀਅਰ ਨਾਲ ਸੰਧੀ ਕੀਤੀ',
        hi: 'गुरदास नंगल का युद्ध (1715); लाहौर को राजधानी बनाया और फ़र्रुख़सियर के साथ संधि की',
      },
      C: {
        en: 'Battle of Bhangani (1688); established capital at Anandpur Sahib and issued Nanakshahi coins at Multan',
        pa: 'ਭੰਗਾਣੀ ਦੀ ਲੜਾਈ (1688); ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਨੂੰ ਰਾਜਧਾਨੀ ਬਣਾਇਆ ਅਤੇ ਮੁਲਤਾਨ ਤੋਂ ਸਿੱਕੇ ਜਾਰੀ ਕੀਤੇ',
        hi: 'भंगाणी का युद्ध (1688); आनंदपुर साहिब को राजधानी बनाया और मुल्तान से सिक्के जारी किए',
      },
      D: {
        en: 'Battle of Nadaun (1691); established capital at Sirhind and appointed Baj Singh as Governor of Delhi',
        pa: 'ਨਦੌਣ ਦੀ ਲੜਾਈ (1691); ਸਰਹਿੰਦ ਨੂੰ ਰਾਜਧਾਨੀ ਬਣਾਇਆ ਅਤੇ ਬਾਜ ਸਿੰਘ ਨੂੰ ਦਿੱਲੀ ਦਾ ਸੂਬੇਦਾਰ ਲਾਇਆ',
        hi: 'नदौन का युद्ध (1691); सरहिंद को राजधानी बनाया और बाज सिंह को दिल्ली का सूबेदार नियुक्त किया',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Baba Banda Singh Bahadur (originally Lachhman Dev / Madho Das Bairagi) defeated Wazir Khan of Sirhind in the Battle of Chappar Chiri on 12 May 1710. He appointed Bhai Baj Singh as Subedar of Sirhind, fortified Mukhlispur and renamed it "Lohgarh" as his capital, struck coins in the name of Guru Nanak-Guru Gobind Singh, and abolished the Mughal Zamindari system, making tillers owners of the land.',
      pa: 'ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੇ 12 ਮਈ 1710 ਨੂੰ ਚੱਪੜਚਿੜੀ ਦੇ ਮੈਦਾਨ ਵਿੱਚ ਸਰਹਿੰਦ ਦੇ ਸੂਬੇਦਾਰ ਵਜ਼ੀਰ ਖ਼ਾਂ ਨੂੰ ਹਰਾ ਕੇ ਮਾਰ ਦਿੱਤਾ। ਉਹਨਾਂ ਨੇ ਮੁਖ਼ਲਿਸਪੁਰ ਦੇ ਕਿਲ੍ਹੇ ਦਾ ਨਾਂ "ਲੋਹਗੜ੍ਹ" ਰੱਖ ਕੇ ਉਸ ਨੂੰ ਰਾਜਧਾਨੀ ਬਣਾਇਆ, ਗੁਰੂ ਨਾਨਕ-ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਨਾਂ ਦੇ ਸਿੱਕੇ ਚਲਾਏ ਅਤੇ ਜ਼ਿਮੀਂਦਾਰੀ ਪ੍ਰਥਾ ਖ਼ਤਮ ਕਰ ਕੇ ਹਲ਼ ਵਾਹੁਣ ਵਾਲੇ ਕਿਸਾਨਾਂ ਨੂੰ ਜ਼ਮੀਨ ਦੇ ਮਾਲਕ ਬਣਾਇਆ।',
      hi: 'बाबा बंदा सिंह बहादुर ने 12 मई 1710 को चप्पड़चिड़ी के युद्ध में सरहिंद के सूबेदार वज़ीर ख़ाँ को पराजित कर मार डाला। उन्होंने मुख़लिसपुर का नाम "लोहगढ़" रखकर उसे अपनी राजधानी बनाया और ज़मींदारी प्रथा समाप्त कर किसानों को भूमि का स्वामी बनाया।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-sst-5',
    topicId: 'ett-sst-history-3',
    subjectId: 'ett-social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'To which Sikh Misl did Maharaja Ranjit Singh belong, when did he capture Lahore, and between whom was the Treaty of Amritsar signed on 25 April 1809 fixing the Sutlej River as the boundary?',
      pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦਾ ਸੰਬੰਧ ਕਿਹੜੀ ਸਿੱਖ ਮਿਸਲ ਨਾਲ ਸੀ, ਉਹਨਾਂ ਨੇ ਲਾਹੌਰ ਉੱਤੇ ਕਦੋਂ ਕਬਜ਼ਾ ਕੀਤਾ, ਅਤੇ 25 ਅਪ੍ਰੈਲ 1809 ਦੀ "ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ" (ਜਿਸ ਨਾਲ ਸਤਲੁਜ ਦਰਿਆ ਸਰਹੱਦ ਮਿਥਿਆ ਗਿਆ) ਕਿਸ-ਕਿਸ ਵਿਚਕਾਰ ਹੋਈ ਸੀ?',
      hi: 'महाराजा रणजीत सिंह का संबंध किस सिख मिसल से था, उन्होंने लाहौर पर कब अधिकार किया, और 25 अप्रैल 1809 की "अमृतसर की संधि" (जिससे सतलुज नदी सीमा निर्धारित हुई) किसके बीच हुई थी?',
    },
    options: {
      A: {
        en: 'Sukerchakia Misl; captured Lahore in July 1799; Treaty of Amritsar signed between Maharaja Ranjit Singh and Charles T. Metcalfe (representing Governor-General Lord Minto I)',
        pa: 'ਸ਼ੁੱਕਰਚੱਕੀਆ ਮਿਸਲ; ਜੁਲਾਈ 1799 ਵਿੱਚ ਲਾਹੌਰ ਫ਼ਤਹਿ ਕੀਤਾ; ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਅਤੇ ਚਾਰਲਸ ਮੈਟਕਾਫ਼ (ਗਵਰਨਰ-ਜਨਰਲ ਲਾਰਡ ਮਿੰਟੋ ਪਹਿਲੇ ਦੇ ਪ੍ਰਤੀਨਿਧ) ਵਿਚਕਾਰ ਹੋਈ',
        hi: 'शुकरचकिया मिसल; जुलाई 1799 में लाहौर विजित किया; अमृतसर की संधि महाराजा रणजीत सिंह और चार्ल्स मेटकाफ़ (गवर्नर-जनरल लॉर्ड मिंटो प्रथम के दूत) के बीच हुई',
      },
      B: {
        en: 'Ahluwalia Misl; captured Lahore in 1805; Treaty of Amritsar signed between Maharaja Ranjit Singh and Lord Dalhousie',
        pa: 'ਆਹਲੂਵਾਲੀਆ ਮਿਸਲ; 1805 ਵਿੱਚ ਲਾਹੌਰ ਫ਼ਤਹਿ ਕੀਤਾ; ਸੰਧੀ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਅਤੇ ਲਾਰਡ ਡਲਹੌਜ਼ੀ ਵਿਚਕਾਰ ਹੋਈ',
        hi: 'आहलूवालिया मिसल; 1805 में लाहौर विजित किया; संधि महाराजा रणजीत सिंह और लॉर्ड डलहौज़ी के बीच हुई',
      },
      C: {
        en: 'Bhangi Misl; captured Lahore in 1792; Treaty of Amritsar signed between Maharaja Ranjit Singh and Lord Hardinge',
        pa: 'ਭੰਗੀ ਮਿਸਲ; 1792 ਵਿੱਚ ਲਾਹੌਰ ਫ਼ਤਹਿ ਕੀਤਾ; ਸੰਧੀ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਅਤੇ ਲਾਰਡ ਹਾਰਡਿੰਗ ਵਿਚਕਾਰ ਹੋਈ',
        hi: 'भंगी मिसल; 1792 में लाहौर विजित किया; संधि महाराजा रणजीत सिंह और लॉर्ड हार्डिंग के बीच हुई',
      },
      D: {
        en: 'Phulkian Misl; captured Lahore in 1801; Treaty of Amritsar signed between Maharaja Ranjit Singh and Warren Hastings',
        pa: 'ਫੂਲਕੀਆ ਮਿਸਲ; 1801 ਵਿੱਚ ਲਾਹੌਰ ਫ਼ਤਹਿ ਕੀਤਾ; ਸੰਧੀ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਅਤੇ ਵਾਰਨ ਹੇਸਟਿੰਗਜ਼ ਵਿਚਕਾਰ ਹੋਈ',
        hi: 'फूलकिया मिसल; 1801 में लाहौर विजित किया; संधि महाराजा रणजीत सिंह और वारेन हेस्टिंग्स के बीच हुई',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Maharaja Ranjit Singh (born 13 Nov 1780 at Gujranwala to Maha Singh of the Sukerchakia Misl) captured Lahore from the Bhangi Sardars on 7 July 1799 and was crowned Maharaja on Baisakhi 1801. On 25 April 1809, he signed the Treaty of Amritsar with British envoy Charles T. Metcalfe (under Governor-General Lord Minto I), making the Sutlej river the eastern boundary of his kingdom.',
      pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਸ਼ੁੱਕਰਚੱਕੀਆ ਮਿਸਲ ਦੇ ਸਰਦਾਰ ਮਹਾਂ ਸਿੰਘ ਦੇ ਸਪੁੱਤਰ ਸਨ। ਉਹਨਾਂ ਨੇ ਜੁਲਾਈ 1799 ਵਿੱਚ ਭੰਗੀ ਸਰਦਾਰਾਂ ਤੋਂ ਲਾਹੌਰ ਜਿੱਤ ਕੇ ਆਪਣੀ ਰਾਜਧਾਨੀ ਬਣਾਇਆ। 25 ਅਪ੍ਰੈਲ 1809 ਨੂੰ ਲਾਰਡ ਮਿੰਟੋ ਪਹਿਲੇ ਦੇ ਦੂਤ ਚਾਰਲਸ ਮੈਟਕਾਫ਼ ਨਾਲ "ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ" ਹੋਈ ਜਿਸ ਰਾਹੀਂ ਸਤਲੁਜ ਦਰਿਆ ਨੂੰ ਸਰਹੱਦ ਮੰਨਿਆ ਗਿਆ।',
      hi: 'महाराजा रणजीत सिंह शुकरचकिया मिसल से संबंधित थे। उन्होंने जुलाई 1799 में भंगी सरदारों से लाहौर जीता। 25 अप्रैल 1809 को लॉर्ड मिंटो प्रथम के दूत चार्ल्स मेटकाफ़ के साथ "अमृतसर की संधि" हुई जिससे सतलुज नदी सीमा बनी।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-sst-6',
    topicId: 'ett-sst-history-3',
    subjectId: 'ett-social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level A)',
    question: {
      en: 'Which battle of the First Anglo-Sikh War (1845–46) witnessed the heroic martyrdom of General Sham Singh Attariwala on 10 February 1846, and on what exact date did Lord Dalhousie annex Punjab after the Second Anglo-Sikh War (Battle of Gujrat, "Battle of Guns")?',
      pa: 'ਪਹਿਲੀ ਐਂਗਲੋ-ਸਿੱਖ ਜੰਗ (1845–46) ਦੀ ਕਿਹੜੀ ਲੜਾਈ ਵਿੱਚ 10 ਫਰਵਰੀ 1846 ਨੂੰ ਜਨਰਲ ਸ਼ਾਮ ਸਿੰਘ ਅਟਾਰੀਵਾਲਾ ਸ਼ਹੀਦ ਹੋਏ ਸਨ, ਅਤੇ ਦੂਜੀ ਐਂਗਲੋ-ਸਿੱਖ ਜੰਗ (ਗੁਜਰਾਤ ਦੀ "ਤੋਪਾਂ ਦੀ ਲੜਾਈ") ਤੋਂ ਬਾਅਦ ਲਾਰਡ ਡਲਹੌਜ਼ੀ ਨੇ ਪੰਜਾਬ ਨੂੰ ਅੰਗਰੇਜ਼ੀ ਰਾਜ ਵਿੱਚ ਕਦੋਂ ਸ਼ਾਮਲ ਕੀਤਾ?',
      hi: 'प्रथम आंग्ल-सिख युद्ध (1845–46) की किस लड़ाई में 10 फरवरी 1846 को जनरल शाम सिंह अटारीवाला शहीद हुए थे, और द्वितीय आंग्ल-सिख युद्ध (गुजरात की "तोपों की लड़ाई") के बाद लॉर्ड डलहौज़ी ने पंजाब का ब्रिटिश साम्राज्य में विलय कब किया?',
    },
    options: {
      A: {
        en: 'Battle of Sobraon (ਸਭਰਾਵਾਂ ਦੀ ਲੜਾਈ, 10 Feb 1846); Annexation of Punjab on 29 March 1849',
        pa: 'ਸਭਰਾਵਾਂ ਦੀ ਲੜਾਈ (10 ਫਰਵਰੀ 1846); ਪੰਜਾਬ ਦਾ ਅੰਗਰੇਜ਼ੀ ਰਾਜ ਵਿੱਚ ਰਲੇਵਾਂ 29 ਮਾਰਚ 1849 ਨੂੰ ਹੋਇਆ',
        hi: 'सभरावां (सोबरांव) का युद्ध (10 फरवरी 1846); पंजाब का ब्रिटिश साम्राज्य में विलय 29 मार्च 1849 को हुआ',
      },
      B: {
        en: 'Battle of Mudki (ਮੁਦਕੀ ਦੀ ਲੜਾਈ, 18 Dec 1845); Annexation of Punjab on 9 March 1846',
        pa: 'ਮੁਦਕੀ ਦੀ ਲੜਾਈ (18 ਦਸੰਬਰ 1845); ਪੰਜਾਬ ਦਾ ਰਲੇਵਾਂ 9 ਮਾਰਚ 1846 ਨੂੰ ਹੋਇਆ',
        hi: 'मुदकी का युद्ध (18 दिसंबर 1845); पंजाब का विलय 9 मार्च 1846 को हुआ',
      },
      C: {
        en: 'Battle of Chillianwala (ਚਿੱਲਿਆਂਵਾਲਾ ਦੀ ਲੜਾਈ, 13 Jan 1849); Annexation of Punjab on 16 December 1846',
        pa: 'ਚਿੱਲਿਆਂਵਾਲਾ ਦੀ ਲੜਾਈ (13 ਜਨਵਰੀ 1849); ਪੰਜਾਬ ਦਾ ਰਲੇਵਾਂ 16 ਦਸੰਬਰ 1846 ਨੂੰ ਹੋਇਆ',
        hi: 'चिल्लियाँवाला का युद्ध (13 जनवरी 1849); पंजाब का विलय 16 दिसंबर 1846 को हुआ',
      },
      D: {
        en: 'Battle of Aliwal (ਅਲੀਵਾਲ ਦੀ ਲੜਾਈ, 28 Jan 1846); Annexation of Punjab on 15 August 1857',
        pa: 'ਅਲੀਵਾਲ ਦੀ ਲੜਾਈ (28 ਜਨਵਰੀ 1846); ਪੰਜਾਬ ਦਾ ਰਲੇਵਾਂ 15 ਅਗਸਤ 1857 ਨੂੰ ਹੋਇਆ',
        hi: 'अलीवाल का युद्ध (28 जनवरी 1846); पंजाब का विलय 15 अगस्त 1857 को हुआ',
      },
    },
    correct: 'A',
    explanation: {
      en: 'The First Anglo-Sikh War (1845–46, under Governor-General Lord Hardinge) saw five battles: Mudki, Ferozeshah, Baddowal, Aliwal, and Sobraon (10 Feb 1846, where General Sham Singh Attariwala fought to martyrdom despite Tej Singh & Lal Singh\'s treachery). After the Second Anglo-Sikh War (1848–49: Ramnagar, Chillianwala, Multan, and Gujrat on 21 Feb 1849 called the "Battle of Guns"), Lord Dalhousie annexed Punjab on 29 March 1849, deposing young Maharaja Duleep Singh.',
      pa: 'ਪਹਿਲੀ ਐਂਗਲੋ-ਸਿੱਖ ਜੰਗ (1845–46) ਦੀ ਆਖ਼ਰੀ ਅਤੇ ਫ਼ੈਸਲਾਕੁੰਨ ਲੜਾਈ "ਸਭਰਾਵਾਂ ਦੀ ਲੜਾਈ" (10 ਫਰਵਰੀ 1846) ਵਿੱਚ ਜਨਰਲ ਸ਼ਾਮ ਸਿੰਘ ਅਟਾਰੀਵਾਲਾ ਬਹਾਦਰੀ ਨਾਲ ਲੜਦੇ ਹੋਏ ਸ਼ਹੀਦ ਹੋਏ। ਦੂਜੀ ਐਂਗਲੋ-ਸਿੱਖ ਜੰਗ (1848–49) ਦੀ ਗੁਜਰਾਤ ਦੀ ਲੜਾਈ ("ਤੋਪਾਂ ਦੀ ਲੜਾਈ") ਤੋਂ ਬਾਅਦ ਲਾਰਡ ਡਲਹੌਜ਼ੀ ਨੇ 29 ਮਾਰਚ 1849 ਨੂੰ ਪੰਜਾਬ ਨੂੰ ਅੰਗਰੇਜ਼ੀ ਸਾਮਰਾਜ ਵਿੱਚ ਮਿਲਾ ਲਿਆ।',
      hi: 'प्रथम आंग्ल-सिख युद्ध की अंतिम लड़ाई "सभरावां का युद्ध" (10 फरवरी 1846) में जनरल शाम सिंह अटारीवाला शहीद हुए। द्वितीय आंग्ल-सिख युद्ध (1848–49) में गुजरात के युद्ध ("तोपों की लड़ाई") के बाद लॉर्ड डलहौज़ी ने 29 मार्च 1849 को पंजाब का ब्रिटिश साम्राज्य में विलय कर लिया।',
    },
    difficulty: 'hard',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-sst-7',
    topicId: 'ett-sst-history-3',
    subjectId: 'ett-social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'Match the following socio-religious and revolutionary freedom movements of Punjab with their key founders and historical milestones:\n1. Namdhari (Kuka) Movement on Baisakhi 1857 at Bhaini Sahib\n2. Ghadar Party in 1913 at San Francisco (Astoria)\n3. Naujawan Bharat Sabha in March 1926 at Lahore',
      pa: 'ਪੰਜਾਬ ਦੀਆਂ ਹੇਠ ਲਿਖੀਆਂ ਸੁਤੰਤਰਤਾ ਲਹਿਰਾਂ ਦਾ ਉਹਨਾਂ ਦੇ ਮੋਢੀਆਂ ਨਾਲ ਸਹੀ ਮਿਲਾਨ ਕਰੋ:\n1. ਭੈਣੀ ਸਾਹਿਬ ਵਿਖੇ ਵਿਸਾਖੀ 1857 ਨੂੰ ਸ਼ੁਰੂ ਹੋਈ ਨਾਮਧਾਰੀ (ਕੂਕਾ) ਲਹਿਰ\n2. 1913 ਵਿੱਚ ਸੈਨ ਫ਼ਰਾਂਸਿਸਕੋ (ਅਸਟੋਰੀਆ) ਵਿਖੇ ਸਥਾਪਿਤ ਗ਼ਦਰ ਪਾਰਟੀ\n3. ਮਾਰਚ 1926 ਵਿੱਚ ਲਾਹੌਰ ਵਿਖੇ ਸਥਾਪਿਤ ਨੌਜਵਾਨ ਭਾਰਤ ਸਭਾ',
      hi: 'पंजाब के निम्नलिखित स्वतंत्रता आंदोलनों का उनके संस्थापकों के साथ सही मिलान करें:\n1. भैणी साहिब में बैसाखी 1857 को प्रारंभ हुआ नामधारी (कूका) आंदोलन\n2. 1913 में सैन फ्रांसिस्को (अस्टोरिया) में स्थापित ग़दर पार्टी\n3. मार्च 1926 में लाहौर में स्थापित नौजवान भारत सभा',
    },
    options: {
      A: {
        en: '1 → Baba Ram Singh Ji; 2 → Baba Sohan Singh Bhakna (President) & Lala Hardayal; 3 → Shaheed Bhagat Singh',
        pa: '1 → ਬਾਬਾ ਰਾਮ ਸਿੰਘ ਜੀ; 2 → ਬਾਬਾ ਸੋਹਣ ਸਿੰਘ ਭਕਨਾ (ਪ੍ਰਧਾਨ) ਅਤੇ ਲਾਲਾ ਹਰਦਿਆਲ; 3 → ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ',
        hi: '1 → बाबा राम सिंह जी; 2 → बाबा सोहन सिंह भकना (अध्यक्ष) एवं लाला हरदयाल; 3 → शहीद भगत सिंह',
      },
      B: {
        en: '1 → Baba Gurdit Singh; 2 → Shaheed Udham Singh; 3 → Lala Lajpat Rai',
        pa: '1 → ਬਾਬਾ ਗੁਰਦਿੱਤ ਸਿੰਘ; 2 → ਸ਼ਹੀਦ ਊਧਮ ਸਿੰਘ; 3 → ਲਾਲਾ ਲਾਜਪਤ ਰਾਏ',
        hi: '1 → बाबा गुरदित्त सिंह; 2 → शहीद उधम सिंह; 3 → लाला लाजपत राय',
      },
      C: {
        en: '1 → Baba Dayal Ji; 2 → Kartar Singh Sarabha; 3 → Madan Lal Dhingra',
        pa: '1 → ਬਾਬਾ ਦਿਆਲ ਜੀ; 2 → ਕਰਤਾਰ ਸਿੰਘ ਸਰਾਭਾ; 3 → ਮਦਨ ਲਾਲ ਢੀਂਗਰਾ',
        hi: '1 → बाबा दयाल जी; 2 → करतार सिंह सराभा; 3 → मदन लाल ढींगरा',
      },
      D: {
        en: '1 → ठाकुर Singh Sandhawalia; 2 → Rash Behari Bose; 3 → Saifuddin Kitchlew',
        pa: '1 → ਠਾਕੁਰ ਸਿੰਘ ਸੰਧਾਵਾਲੀਆ; 2 → ਰਾਸ ਬਿਹਾਰੀ ਬੋਸ; 3 → ਸੈਫ਼ੂਦੀਨ ਕਿਚਲੂ',
        hi: '1 → ठाकुर सिंह संधावालिया; 2 → रास बिहारी बोस; 3 → सैफुद्दीन किचलू',
      },
    },
    correct: 'A',
    explanation: {
      en: '(1) Satguru Ram Singh Ji launched the Namdhari (Kuka) Movement at Bhaini Sahib (Ludhiana) on Baisakhi 1857, pioneering Swadeshi and non-cooperation (boycott of British courts, postal services, and foreign cloth). (2) The Ghadar Party was founded in 1913 with Baba Sohan Singh Bhakna as founding President, Lala Hardayal as General Secretary, and Kartar Singh Sarabha managing the "Ghadar" paper at Yugantar Ashram, San Francisco. (3) Shaheed Bhagat Singh founded the Naujawan Bharat Sabha in Lahore in March 1926.',
      pa: '(1) ਨਾਮਧਾਰੀ (ਕੂਕਾ) ਲਹਿਰ ਦੀ ਸ਼ੁਰੂਆਤ ਸਤਿਗੁਰੂ ਰਾਮ ਸਿੰਘ ਜੀ ਨੇ 1857 ਨੂੰ ਭੈਣੀ ਸਾਹਿਬ (ਲੁਧਿਆਣਾ) ਤੋਂ ਕੀਤੀ। (2) ਗ਼ਦਰ ਪਾਰਟੀ ਦੀ ਸਥਾਪਨਾ 1913 ਵਿੱਚ ਬਾਬਾ ਸੋਹਣ ਸਿੰਘ ਭਕਨਾ (ਪ੍ਰਧਾਨ) ਅਤੇ ਲਾਲਾ ਹਰਦਿਆਲ ਦੀ ਅਗਵਾਈ ਹੇਠ ਸੈਨ ਫ਼ਰਾਂਸਿਸਕੋ ਵਿਖੇ ਹੋਈ। (3) ਨੌਜਵਾਨ ਭਾਰਤ ਸਭਾ ਦੀ ਸਥਾਪਨਾ ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ ਨੇ ਮਾਰਚ 1926 ਵਿੱਚ ਲਾਹੌਰ ਵਿਖੇ ਕੀਤੀ।',
      hi: '(1) नामधारी (कूका) आंदोलन का सूत्रपात बाबा राम सिंह जी ने 1857 में भैणी साहिब से किया। (2) ग़दर पार्टी की स्थापना 1913 में बाबा सोहन सिंह भकना (अध्यक्ष) और लाला हरदयाल के नेतृत्व में हुई। (3) नौजवान भारत सभा की स्थापना शहीद भगत सिंह ने मार्च 1926 में लाहौर में की।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-sst-8',
    topicId: 'ett-sst-history-3',
    subjectId: 'ett-social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level B)',
    question: {
      en: 'What is the exact seat distribution representing Punjab in the State Legislative Assembly (Vidhan Sabha), Lok Sabha, and Rajya Sabha respectively, and what is the nature of the Punjab Legislature today?',
      pa: 'ਪੰਜਾਬ ਵਿੱਚ ਕ੍ਰਮਵਾਰ ਵਿਧਾਨ ਸਭਾ, ਲੋਕ ਸਭਾ ਅਤੇ ਰਾਜ ਸਭਾ ਦੀਆਂ ਕੁੱਲ ਕਿੰਨੀਆਂ ਸੀਟਾਂ ਹਨ, ਅਤੇ ਵਰਤਮਾਨ ਵਿੱਚ ਪੰਜਾਬ ਵਿਧਾਨ ਮੰਡਲ ਦੀ ਬਣਤਰ ਕਿਹੋ ਜਿਹੀ ਹੈ?',
      hi: 'पंजाब में क्रमशः विधान सभा, लोक सभा और राज्य सभा की कुल कितनी सीटें हैं, और वर्तमान में पंजाब विधानमंडल की संरचना कैसी है?',
    },
    options: {
      A: {
        en: '117 Vidhan Sabha seats, 13 Lok Sabha seats, and 7 Rajya Sabha seats; Unicameral (ਇੱਕ-ਸਦਨੀ — Vidhan Parishad was abolished in Jan 1970)',
        pa: 'ਵਿਧਾਨ ਸਭਾ: 117 ਸੀਟਾਂ, ਲੋਕ ਸਭਾ: 13 ਸੀਟਾਂ, ਰਾਜ ਸਭਾ: 7 ਸੀਟਾਂ; ਇੱਕ-ਸਦਨੀ (ਵਿਧਾਨ ਪ੍ਰੀਸ਼ਦ ਜਨਵਰੀ 1970 ਵਿੱਚ ਖ਼ਤਮ ਕਰ ਦਿੱਤੀ ਗਈ ਸੀ)',
        hi: 'विधान सभा: 117 सीटें, लोक सभा: 13 सीटें, राज्य सभा: 7 सीटें; एकसदनीय (विधान परिषद जनवरी 1970 में समाप्त कर दी गई थी)',
      },
      B: {
        en: '90 Vidhan Sabha seats, 10 Lok Sabha seats, and 5 Rajya Sabha seats; Bicameral (ਦੋ-ਸਦਨੀ)',
        pa: 'ਵਿਧਾਨ ਸਭਾ: 90 ਸੀਟਾਂ, ਲੋਕ ਸਭਾ: 10 ਸੀਟਾਂ, ਰਾਜ ਸਭਾ: 5 ਸੀਟਾਂ; ਦੋ-ਸਦਨੀ',
        hi: 'विधान सभा: 90 सीटें, लोक सभा: 10 सीटें, राज्य सभा: 5 सीटें; द्विसदनीय',
      },
      C: {
        en: '117 Vidhan Sabha seats, 14 Lok Sabha seats, and 10 Rajya Sabha seats; Bicameral (ਦੋ-ਸਦਨੀ)',
        pa: 'ਵਿਧਾਨ ਸਭਾ: 117 ਸੀਟਾਂ, ਲੋਕ ਸਭਾ: 14 ਸੀਟਾਂ, ਰਾਜ ਸਭਾ: 10 ਸੀਟਾਂ; ਦੋ-ਸਦਨੀ',
        hi: 'विधान सभा: 117 सीटें, लोक सभा: 14 सीटें, राज्य सभा: 10 सीटें; द्विसदनीय',
      },
      D: {
        en: '68 Vidhan Sabha seats, 4 Lok Sabha seats, and 3 Rajya Sabha seats; Unicameral (ਇੱਕ-ਸਦਨੀ)',
        pa: 'ਵਿਧਾਨ ਸਭਾ: 68 ਸੀਟਾਂ, ਲੋਕ ਸਭਾ: 4 ਸੀਟਾਂ, ਰਾਜ ਸਭਾ: 3 ਸੀਟਾਂ; ਇੱਕ-ਸਦਨੀ',
        hi: 'विधान सभा: 68 सीटें, लोक सभा: 4 सीटें, राज्य सभा: 3 सीटें; एकसदनीय',
      },
    },
    correct: 'A',
    explanation: {
      en: 'After the Punjab Reorganisation Act of 1 November 1966, present-day Punjab has 117 Legislative Assembly (Vidhan Sabha) constituencies, sends 13 members to the Lok Sabha, and sends 7 members to the Rajya Sabha. Punjab\'s Upper House (Vidhan Parishad) was abolished with effect from January 1970, making it a unicameral (ਇੱਕ-ਸਦਨੀ) legislature.',
      pa: 'ਪੰਜਾਬ ਵਿੱਚ ਵਿਧਾਨ ਸਭਾ ਦੀਆਂ 117 ਸੀਟਾਂ, ਲੋਕ ਸਭਾ ਦੀਆਂ 13 ਸੀਟਾਂ ਅਤੇ ਰਾਜ ਸਭਾ ਦੀਆਂ 7 ਸੀਟਾਂ ਹਨ। ਜਨਵਰੀ 1970 ਵਿੱਚ ਵਿਧਾਨ ਪ੍ਰੀਸ਼ਦ ਖ਼ਤਮ ਹੋਣ ਤੋਂ ਬਾਅਦ ਪੰਜਾਬ ਦਾ ਵਿਧਾਨ ਮੰਡਲ ਇੱਕ-ਸਦਨੀ (Unicameral) ਹੈ। (ਹਰਿਆਣਾ ਵਿੱਚ 90/10/5 ਅਤੇ ਹਿਮਾਚਲ ਵਿੱਚ 68/4/3 ਸੀਟਾਂ ਹਨ)।',
      hi: 'पंजाब में विधान सभा की 117 सीटें, लोक सभा की 13 सीटें और राज्य सभा की 7 सीटें हैं। जनवरी 1970 में विधान परिषद की समाप्ति के बाद पंजाब का विधानमंडल एकसदनीय (Unicameral) है।',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-sst-9',
    topicId: 'ett-sst-history-3',
    subjectId: 'ett-social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'Under the Indian Constitution, which Article was added by the 86th Constitutional Amendment Act, 2002 to make free and compulsory education for children aged 6–14 years a Fundamental Right, and which Constitutional Amendment gave constitutional status to Panchayati Raj Institutions (Part IX, 11th Schedule, 29 subjects)?',
      pa: 'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਵਿੱਚ 86ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ (2002) ਰਾਹੀਂ 6 ਤੋਂ 14 ਸਾਲ ਦੇ ਬੱਚਿਆਂ ਲਈ ਮੁਫ਼ਤ ਅਤੇ ਲਾਜ਼ਮੀ ਸਿੱਖਿਆ ਨੂੰ ਮੌਲਿਕ ਅਧਿਕਾਰ ਬਣਾਉਣ ਲਈ ਕਿਹੜਾ ਅਨੁਛੇਦ ਜੋੜਿਆ ਗਿਆ, ਅਤੇ ਪੰਚਾਇਤੀ ਰਾਜ ਸੰਸਥਾਵਾਂ (ਭਾਗ 9, 11ਵੀਂ ਅਨੁਸੂਚੀ, 29 ਵਿਸ਼ੇ) ਨੂੰ ਸੰਵਿਧਾਨਕ ਦਰਜਾ ਕਿਸ ਸੋਧ ਰਾਹੀਂ ਮਿਲਿਆ?',
      hi: 'भारतीय संविधान में 86वें संविधान संशोधन (2002) द्वारा 6 से 14 वर्ष के बच्चों के लिए निःशुल्क एवं अनिवार्य शिक्षा को मौलिक अधिकार बनाने हेतु कौन-सा अनुच्छेद जोड़ा गया, और पंचायती राज संस्थाओं (भाग 9, 11वीं अनुसूची, 29 विषय) को संवैधानिक दर्जा किस संशोधन द्वारा मिला?',
    },
    options: {
      A: {
        en: 'Article 21A (Right to Education under Part III); 73rd Constitutional Amendment Act, 1992 (enforced on 24 April 1993)',
        pa: 'ਅਨੁਛੇਦ 21A (ਭਾਗ ਤੀਜਾ ਅਧੀਨ ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ); 73ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 1992 (24 ਅਪ੍ਰੈਲ 1993 ਤੋਂ ਲਾਗੂ)',
        hi: 'अनुच्छेद 21A (भाग III के अंतर्गत शिक्षा का अधिकार); 73वाँ संविधान संशोधन अधिनियम, 1992 (24 अप्रैल 1993 से लागू)',
      },
      B: {
        en: 'Article 32 (Right to Constitutional Remedies); 42nd Constitutional Amendment Act, 1976',
        pa: 'ਅਨੁਛੇਦ 32 (ਸੰਵਿਧਾਨਕ ਉਪਚਾਰਾਂ ਦਾ ਅਧਿਕਾਰ); 42ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 1976',
        hi: 'अनुच्छेद 32 (संवैधानिक उपचारों का अधिकार); 42वाँ संविधान संशोधन अधिनियम, 1976',
      },
      C: {
        en: 'Article 45 (Directive Principles); 74th Constitutional Amendment Act, 1992 (12th Schedule, 18 subjects)',
        pa: 'ਅਨੁਛੇਦ 45 (ਰਾਜ ਦੀ ਨੀਤੀ ਦੇ ਨਿਰਦੇਸ਼ਕ ਸਿਧਾਂਤ); 74ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 1992 (12ਵੀਂ ਅਨੁਸੂਚੀ, 18 ਵਿਸ਼ੇ)',
        hi: 'अनुच्छेद 45 (राज्य के नीति निदेशक तत्व); 74वाँ संविधान संशोधन अधिनियम, 1992 (12वीं अनुसूची, 18 विषय)',
      },
      D: {
        en: 'Article 19 (Right to Freedom); 44th Constitutional Amendment Act, 1978',
        pa: 'ਅਨੁਛੇਦ 19 (ਸੁਤੰਤਰਤਾ ਦਾ ਅਧਿਕਾਰ); 44ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 1978',
        hi: 'अनुच्छेद 19 (स्वतंत्रता का अधिकार); 44वाँ संविधान संशोधन अधिनियम, 1978',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Fundamental Rights are enshrined in Part III (Articles 12–35) of the Indian Constitution. The 86th Amendment Act, 2002 inserted Article 21A making free and compulsory education for children aged 6–14 a Fundamental Right (and added the 11th Fundamental Duty under Art. 51A(k)). The 73rd Amendment Act, 1992 (effective 24 April 1993 — National Panchayati Raj Day) gave constitutional status to rural three-tier Panchayati Raj (Part IX, Art. 243–243O, 11th Schedule with 29 subjects).',
      pa: '86ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ (2002) ਰਾਹੀਂ ਸੰਵਿਧਾਨ ਦੇ ਭਾਗ ਤੀਜੇ (ਮੌਲਿਕ ਅਧਿਕਾਰ, ਅਨੁਛੇਦ 12–35) ਵਿੱਚ "ਅਨੁਛੇਦ 21A" ਜੋੜ ਕੇ 6–14 ਸਾਲ ਦੇ ਬੱਚਿਆਂ ਲਈ ਸਿੱਖਿਆ ਨੂੰ ਮੌਲਿਕ ਅਧਿਕਾਰ ਬਣਾਇਆ ਗਿਆ। 73ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ (1992, ਲਾਗੂ 24 ਅਪ੍ਰੈਲ 1993) ਰਾਹੀਂ ਪੰਚਾਇਤੀ ਰਾਜ ਨੂੰ ਸੰਵਿਧਾਨਕ ਦਰਜਾ ਅਤੇ 11ਵੀਂ ਅਨੁਸੂਚੀ (29 ਵਿਸ਼ੇ) ਦਿੱਤੀ ਗਈ।',
      hi: '86वें संविधान संशोधन (2002) द्वारा भाग III (मौलिक अधिकार, अनुच्छेद 12–35) में "अनुच्छेद 21A" जोड़कर 6–14 वर्ष के बच्चों की शिक्षा को मौलिक अधिकार बनाया गया। 73वें संविधान संशोधन (1992, लागू 24 अप्रैल 1993) द्वारा पंचायती राज को संवैधानिक दर्जा और 11वीं अनुसूची (29 विषय) प्रदान की गई।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-sst-10',
    topicId: 'ett-sst-history-3',
    subjectId: 'ett-social-science',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level A)',
    question: {
      en: 'Which of the following geographical statements regarding the Doabs of Punjab, India\'s Standard Meridian (IST), and the Green Revolution in Punjab is 100% accurate?',
      pa: 'ਪੰਜਾਬ ਦੇ ਦੁਆਬਿਆਂ, ਭਾਰਤੀ ਮਿਆਰੀ ਸਮਾਂ ਰੇਖਾ (IST) ਅਤੇ ਪੰਜਾਬ ਵਿੱਚ ਹਰੀ ਕ੍ਰਾਂਤੀ ਬਾਰੇ ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਭੂਗੋਲਿਕ ਕਥਨ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਹੀ ਹੈ?',
      hi: 'पंजाब के दोआबों, भारतीय मानक समय रेखा (IST) और पंजाब में हरित क्रांति के संबंध में निम्नलिखित में से कौन-सा भौगोलिक कथन पूर्णतः सत्य है?',
    },
    options: {
      A: {
        en: 'Bist Jalandhar Doab lies between Beas and Sutlej, Bari Doab lies between Beas and Ravi, IST 82°30\'E is 5 hours 30 minutes ahead of GMT, and Dr. M.S. Swaminathan led India\'s Green Revolution in the mid-1960s with HYV wheat seeds centered in Punjab (PAU Ludhiana est. 1962)',
        pa: 'ਬਿਸਤ ਜਲੰਧਰ ਦੁਆਬ ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ ਵਿਚਕਾਰ ਹੈ, ਬਾਰੀ ਦੁਆਬ ਬਿਆਸ ਅਤੇ ਰਾਵੀ ਵਿਚਕਾਰ ਹੈ, ਭਾਰਤੀ ਮਿਆਰੀ ਸਮਾਂ ਰੇਖਾ (82°30\' ਪੂਰਬੀ) ਗ੍ਰੀਨਵਿਚ ਸਮੇਂ ਤੋਂ 5 ਘੰਟੇ 30 ਮਿੰਟ ਅੱਗੇ ਹੈ, ਅਤੇ ਭਾਰਤ ਵਿੱਚ ਹਰੀ ਕ੍ਰਾਂਤੀ ਦੇ ਪਿਤਾਮਾ ਡਾ. ਐੱਮ.ਐੱਸ. ਸਵਾਮੀਨਾਥਨ ਹਨ',
        hi: 'बिस्त जालंधर दोआब ब्यास और सतलुज के बीच है, बारी दोआब ब्यास और रावी के बीच है, भारतीय मानक देशांतर (82°30\' पूर्व) ग्रीनविच समय से 5 घंटे 30 मिनट आगे है, और भारत में हरित क्रांति के जनक डॉ. एम.एस. स्वामीनाथन हैं',
      },
      B: {
        en: 'Bist Doab lies between Ravi and Chenab, Bari Doab lies between Chenab and Jhelum, and IST 82°30\'W is 5 hours 30 minutes behind GMT',
        pa: 'ਬਿਸਤ ਦੁਆਬ ਰਾਵੀ ਅਤੇ ਚਨਾਬ ਵਿਚਕਾਰ ਹੈ, ਬਾਰੀ ਦੁਆਬ ਚਨਾਬ ਅਤੇ ਜਿਹਲਮ ਵਿਚਕਾਰ ਹੈ, ਅਤੇ ਭਾਰਤੀ ਮਿਆਰੀ ਸਮਾਂ ਗ੍ਰੀਨਵਿਚ ਤੋਂ 5 ਘੰਟੇ 30 ਮਿੰਟ ਪਿੱਛੇ ਹੈ',
        hi: 'बिस्त दोआब रावी और चिनाब के बीच है, बारी दोआब चिनाब और झेलम के बीच है, और भारतीय मानक समय ग्रीनविच से 5 घंटे 30 मिनट पीछे है',
      },
      C: {
        en: 'Chaj Doab lies between Beas and Sutlej, Rachna Doab lies between Sutlej and Ghaggar, and Dr. Verghese Kurien is the father of the Green Revolution',
        pa: 'ਚੱਜ ਦੁਆਬ ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ ਵਿਚਕਾਰ ਹੈ, ਰਚਨਾ ਦੁਆਬ ਸਤਲੁਜ ਅਤੇ ਘੱਗਰ ਵਿਚਕਾਰ ਹੈ, ਅਤੇ ਡਾ. ਵਰਗੀਜ਼ ਕੁਰੀਅਨ ਹਰੀ ਕ੍ਰਾਂਤੀ ਦੇ ਪਿਤਾਮਾ ਹਨ',
        hi: 'चज दोआब ब्यास और सतलुज के बीच है, रचना दोआब सतलुज और घग्गर के बीच है, और डॉ. वर्गीज कुरियन हरित क्रांति के जनक हैं',
      },
      D: {
        en: 'Sindh Sagar Doab lies in eastern Punjab between Beas and Ravi, and the Tropic of Cancer (23°30\'N) passes directly through Ludhiana and Jalandhar',
        pa: 'ਸਿੰਧ ਸਾਗਰ ਦੁਆਬ ਪੂਰਬੀ ਪੰਜਾਬ ਵਿੱਚ ਬਿਆਸ ਅਤੇ ਰਾਵੀ ਵਿਚਕਾਰ ਹੈ, ਅਤੇ ਕਰਕ ਰੇਖਾ (23°30\' ਉੱਤਰ) ਲੁਧਿਆਣਾ ਤੇ ਜਲੰਧਰ ਵਿੱਚੋਂ ਲੰਘਦੀ ਹੈ',
        hi: 'सिंध सागर दोआब पूर्वी पंजाब में ब्यास और रावी के बीच है, और कर्क रेखा (23°30\' उत्तर) लुधियाना तथा जालंधर से होकर गुजरती है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'The five Doabs created by Emperor Akbar\'s naming convention are: (1) Bist Jalandhar Doab (Beas + Sutlej), (2) Bari Doab (Beas + Ravi), (3) Rachna Doab (Ravi + Chenab), (4) Chaj Doab (Chenab + Jhelum), and (5) Sindh Sagar Doab (Jhelum/Chenab + Indus). India\'s Standard Meridian (82°30\'E, passing near Mirzapur, UP) is +5:30 ahead of GMT. The Green Revolution (1966–67) using Mexican dwarf HYV wheat was led globally by Norman Borlaug and in India by Dr. M.S. Swaminathan, with Punjab Agricultural University (PAU Ludhiana, 1962) playing a pivotal role.',
      pa: 'ਪੰਜ ਦੁਆਬ ਹਨ: ਬਿਸਤ ਦੁਆਬ (ਬਿਆਸ ਤੇ ਸਤਲੁਜ), ਬਾਰੀ ਦੁਆਬ (ਬਿਆਸ ਤੇ ਰਾਵੀ), ਰਚਨਾ ਦੁਆਬ (ਰਾਵੀ ਤੇ ਚਨਾਬ), ਚੱਜ ਦੁਆਬ (ਚਨਾਬ ਤੇ ਜਿਹਲਮ) ਅਤੇ ਸਿੰਧ ਸਾਗਰ ਦੁਆਬ (ਜਿਹਲਮ ਤੇ ਸਿੰਧ)। ਭਾਰਤ ਦੀ ਮਿਆਰੀ ਸਮਾਂ ਰੇਖਾ 82°30\' ਪੂਰਬੀ ਦਿਸ਼ਾਂਤਰ (ਮਿਰਜ਼ਾਪੁਰ, ਯੂ.ਪੀ.) ਗ੍ਰੀਨਵਿਚ (GMT) ਤੋਂ 5 ਘੰਟੇ 30 ਮਿੰਟ ਅੱਗੇ ਹੈ। ਭਾਰਤ ਵਿੱਚ ਹਰੀ ਕ੍ਰਾਂਤੀ (1966–67) ਦੇ ਪਿਤਾਮਾ ਡਾ. ਐੱਮ.ਐੱਸ. ਸਵਾਮੀਨਾਥਨ (ਅਤੇ ਵਿਸ਼ਵ ਪੱਧਰ ਤੇ ਨੌਰਮਨ ਬੋਰਲੌਗ) ਹਨ।',
      hi: 'पाँच दोआब हैं: बिस्त दोआब (ब्यास व सतलुज), बारी दोआब (ब्यास व रावी), रचना दोआब (रावी व चिनाब), चज दोआब (चिनाब व झेलम) और सिंध सागर दोआब (झेलम व सिंधु)। भारत की मानक देशांतर रेखा 82°30\' पूर्व (मिर्जापुर, उ.प्र.) GMT से 5 घंटे 30 मिनट आगे है। भारत में हरित क्रांति के जनक डॉ. एम.एस. स्वामीनाथन हैं।',
    },
    difficulty: 'hard',
    ...ETT_COMMON_META,
  },

  // ===========================================================================
  // TOPIC 6: ETT PAPER B — GENERAL ENGLISH (GRAMMAR, VOCABULARY & TRANSLATION)
  // topicId: 'ett-english-2' (10 MCQs)
  // ===========================================================================
  {
    id: 'q-ett-pb-eng-1',
    topicId: 'ett-english-2',
    subjectId: 'ett-english',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level B)',
    question: {
      en: 'Fill in the blanks with the most appropriate Articles: "_____ MLA from our constituency is _____ alumnus of _____ university Located near _____ Sutlej."',
      pa: 'ਖ਼ਾਲੀ ਥਾਵਾਂ ਵਿੱਚ ਸਹੀ Articles (a / an / the) ਭਰੋ: "_____ MLA from our constituency is _____ alumnus of _____ university located near _____ Sutlej."',
      hi: 'रिक्त स्थानों में सही Articles (a / an / the) भरें: "_____ MLA from our constituency is _____ alumnus of _____ university located near _____ Sutlej."',
    },
    options: {
      A: {
        en: 'An, an, a, the — because "MLA" starts with vowel sound /ɛm/, "alumnus" with vowel sound /ə/, "university" with consonant sound /juː/, and river names take "the"',
        pa: 'An, an, a, the — ਕਿਉਂਕਿ "MLA" ਸਵਰ ਧੁਨੀ (ਐੱਮ) ਨਾਲ, "alumnus" ਸਵਰ ਧੁਨੀ (ਅ) ਨਾਲ, "university" ਵਿਅੰਜਨ ਧੁਨੀ (ਯੂ) ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ ਅਤੇ ਦਰਿਆ ਦੇ ਨਾਂ ਅੱਗੇ "the" ਲੱਗਦਾ ਹੈ',
        hi: 'An, an, a, the — क्योंकि "MLA" स्वर ध्वनि (एम) से, "alumnus" स्वर ध्वनि (अ) से, "university" व्यंजन ध्वनि (यू) से शुरू होता है और नदी के नाम से पहले "the" लगता है',
      },
      B: {
        en: 'A, an, an, the — because "M" is a consonant letter and "U" is a vowel letter in the English alphabet',
        pa: 'A, an, an, the — ਕਿਉਂਕਿ ਅੰਗਰੇਜ਼ੀ ਵਰਣਮਾਲਾ ਵਿੱਚ "M" ਵਿਅੰਜਨ ਅੱਖਰ ਹੈ ਅਤੇ "U" ਸਵਰ ਅੱਖਰ ਹੈ',
        hi: 'A, an, an, the — क्योंकि अंग्रेजी वर्णमाला में "M" व्यंजन अक्षर है और "U" स्वर अक्षर है',
      },
      C: {
        en: 'The, a, an, a — because abbreviations take "the" and river names take "a"',
        pa: 'The, a, an, a — ਕਿਉਂਕਿ ਸੰਖੇਪ ਰੂਪਾਂ ਅੱਗੇ "the" ਅਤੇ ਦਰਿਆਵਾਂ ਦੇ ਨਾਂ ਅੱਗੇ "a" ਲੱਗਦਾ ਹੈ',
        hi: 'The, a, an, a — क्योंकि संक्षिप्त रूपों से पहले "the" और नदियों के नाम से पहले "a" लगता है',
      },
      D: {
        en: 'An, a, a, no article — because river names in India do not take any definite article',
        pa: 'An, a, a, no article — ਕਿਉਂਕਿ ਭਾਰਤ ਦੇ ਦਰਿਆਵਾਂ ਦੇ ਨਾਂ ਅੱਗੇ ਕੋਈ ਆਰਟੀਕਲ ਨਹੀਂ ਲੱਗਦਾ',
        hi: 'An, a, a, no article — क्योंकि भारत की नदियों के नाम से पहले कोई आर्टिकल नहीं लगता',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Indefinite articles "a" and "an" are governed by initial phonetic sound, not spelling: "MLA" begins with the vowel sound /ɛm/ → "an MLA"; "alumnus" begins with /ə/ → "an alumnus"; "university" (like European, one-rupee note) begins with the consonant glide /juː/ → "a university". Names of rivers, mountain ranges, and holy books take the definite article "the" ("the Sutlej").',
      pa: 'ਅੰਗਰੇਜ਼ੀ ਵਿਆਕਰਨ ਵਿੱਚ "a/an" ਦੀ ਵਰਤੋਂ ਸ਼ਬਦ ਦੀ ਪਹਿਲੀ ਧੁਨੀ (ਆਵਾਜ਼) ਅਨੁਸਾਰ ਹੁੰਦੀ ਹੈ: "MLA" ਦੀ ਆਵਾਜ਼ "ਐੱਮ" (ਸਵਰ) ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ → an MLA; "alumnus" → an alumnus; "university" ਦੀ ਆਵਾਜ਼ "ਯੂ" (ਵਿਅੰਜਨ) ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ → a university; ਅਤੇ ਦਰਿਆਵਾਂ ਦੇ ਨਾਂ ਅੱਗੇ "the" ਲੱਗਦਾ ਹੈ (the Sutlej)।',
      hi: 'अंग्रेजी व्याकरण में "a/an" का प्रयोग शब्द की प्रारंभिक ध्वनि के अनुसार होता है: "MLA" की ध्वनि "एम" (स्वर) से शुरू होती है → an MLA; "alumnus" → an alumnus; "university" की ध्वनि "यू" (व्यंजन) से शुरू होती है → a university; तथा नदियों के नाम से पहले "the" लगता है (the Sutlej)।',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-eng-2',
    topicId: 'ett-english-2',
    subjectId: 'ett-english',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'Choose the correct set of Prepositions to complete the three sentences: (1) "I prefer tea _____ coffee." (2) "His uncle died _____ cholera." (3) "She has been teaching in this primary school _____ 2019."',
      pa: 'ਤਿੰਨਾਂ ਵਾਕਾਂ ਨੂੰ ਪੂਰਾ ਕਰਨ ਲਈ ਸਹੀ Prepositions (ਸੰਬੰਧਕਾਂ) ਦਾ ਜੁੱਟ ਚੁਣੋ: (1) "I prefer tea _____ coffee." (2) "His uncle died _____ cholera." (3) "She has been teaching in this primary school _____ 2019."',
      hi: 'तीनों वाक्यों को पूरा करने के लिए सही Prepositions का समूह चुनें: (1) "I prefer tea _____ coffee." (2) "His uncle died _____ cholera." (3) "She has been teaching in this primary school _____ 2019."',
    },
    options: {
      A: {
        en: '(1) to, (2) of, (3) since',
        pa: '(1) to, (2) of, (3) since',
        hi: '(1) to, (2) of, (3) since',
      },
      B: {
        en: '(1) than, (2) from, (3) for',
        pa: '(1) than, (2) from, (3) for',
        hi: '(1) than, (2) from, (3) for',
      },
      C: {
        en: '(1) over, (2) by, (3) from',
        pa: '(1) over, (2) by, (3) from',
        hi: '(1) over, (2) by, (3) from',
      },
      D: {
        en: '(1) to, (2) with, (3) for',
        pa: '(1) to, (2) with, (3) for',
        hi: '(1) to, (2) with, (3) for',
      },
    },
    correct: 'A',
    explanation: {
      en: '(1) Verbs and Latin comparatives like "prefer, senior, junior, superior, inferior, prior" take the preposition "to" (never "than"). (2) When a person dies directly of a disease/illness, we use "die of" (died of cholera / cancer), whereas "die from" is used for external causes like overwork or a wound. (3) "since" is used for a specific point in time (since 2019), while "for" is used for a period/duration of time (for five years).',
      pa: '(1) "prefer, senior, junior, superior" ਨਾਲ ਹਮੇਸ਼ਾ "to" ਲੱਗਦਾ ਹੈ ("than" ਨਹੀਂ)। (2) ਕਿਸੇ ਬਿਮਾਰੀ ਨਾਲ ਮੌਤ ਹੋਣ ਤੇ "die of" ਲੱਗਦਾ ਹੈ (died of cholera)। (3) ਨਿਸ਼ਚਿਤ ਸਮੇਂ (Point of time — 2019) ਲਈ "since" ਅਤੇ ਸਮੇਂ ਦੀ ਮਿਆਦ (Period of time) ਲਈ "for" ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
      hi: '(1) "prefer, senior, junior, superior" के साथ हमेशा "to" लगता है ("than" नहीं)। (2) किसी बीमारी से मृत्यु होने पर "die of" लगता है (died of cholera)। (3) निश्चित समय-बिंदु (2019) के लिए "since" और समयावधि के लिए "for" प्रयुक्त होता है।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-eng-3',
    topicId: 'ett-english-2',
    subjectId: 'ett-english',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'Select the correct Determiners to fill in the blanks: "_____ knowledge is a dangerous thing, and _____ friends he had also left him in his hour of crisis."',
      pa: 'ਖ਼ਾਲੀ ਥਾਵਾਂ ਲਈ ਸਹੀ Determiners ਚੁਣੋ: "_____ knowledge is a dangerous thing, and _____ friends he had also left him in his hour of crisis."',
      hi: 'रिक्त स्थानों के लिए सही Determiners चुनें: "_____ knowledge is a dangerous thing, and _____ friends he had also left him in his hour of crisis."',
    },
    options: {
      A: {
        en: 'A little, the few — "A little" means some (positive small amount of an uncountable noun), and "the few" means all of the small number that existed (countable noun with defining clause "he had")',
        pa: 'A little, the few — ਕਿਉਂਕਿ ਅਣਗਿਣਤ ਨਾਂਵ (knowledge) ਦੀ ਥੋੜ੍ਹੀ ਮਾਤਰਾ ਲਈ "A little" ਅਤੇ ਗਿਣਨਯੋਗ ਨਾਂਵ (friends he had) ਦੀ ਸਾਰੀ ਥੋੜ੍ਹੀ ਗਿਣਤੀ ਲਈ "the few" ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ',
        hi: 'A little, the few — क्योंकि अगणनीय संज्ञा (knowledge) की थोड़ी मात्रा के लिए "A little" और गणनीय संज्ञा (friends he had) की संपूर्ण थोड़ी संख्या के लिए "the few" आता है',
      },
      B: {
        en: 'A few, the little — because "knowledge" is countable and "friends" is uncountable',
        pa: 'A few, the little — ਕਿਉਂਕਿ "knowledge" ਗਿਣਨਯੋਗ ਹੈ ਅਤੇ "friends" ਅਣਗਿਣਤ ਹੈ',
        hi: 'A few, the little — क्योंकि "knowledge" गणनीय है और "friends" अगणनीय है',
      },
      C: {
        en: 'Little, few — because both clauses refer to plural countable nouns without qualifiers',
        pa: 'Little, few — ਕਿਉਂਕਿ ਦੋਵੇਂ ਉਪਵਾਕ ਬਹੁਵਚਨ ਗਿਣਨਯੋਗ ਨਾਂਵਾਂ ਨੂੰ ਦਰਸਾਉਂਦੇ ਹਨ',
        hi: 'Little, few — क्योंकि दोनों उपवाक्य बहुवचन गणनीय संज्ञाओं को दर्शाते हैं',
      },
      D: {
        en: 'Much, any — because the sentence is interrogative in structure',
        pa: 'Much, any — ਕਿਉਂਕਿ ਵਾਕ ਦੀ ਬਣਤਰ ਪ੍ਰਸ਼ਨਵਾਚਕ ਹੈ',
        hi: 'Much, any — क्योंकि वाक्य की संरचना प्रश्नवाचक है',
      },
    },
    correct: 'A',
    explanation: {
      en: '"Little / a little / the little" are used with uncountable nouns (knowledge, water, money): "A little knowledge is a dangerous thing" (some/incomplete knowledge). "Few / a few / the few" are used with plural countable nouns (friends, books): when followed by a defining relative clause like "friends he had", we use "the few" (meaning whatever small number of friends he possessed).',
      pa: '"Little / a little / the little" ਅਣਗਿਣਤ ਨਾਂਵਾਂ (Uncountable nouns: knowledge) ਨਾਲ ਲੱਗਦੇ ਹਨ ("A little knowledge is a dangerous thing")। "Few / a few / the few" ਗਿਣਨਯੋਗ ਬਹੁਵਚਨ ਨਾਂਵਾਂ (Countable nouns: friends) ਨਾਲ ਲੱਗਦੇ ਹਨ; ਜਦੋਂ ਅੱਗੇ ਵਿਸ਼ੇਸ਼ ਉਪਵਾਕ ("he had") ਹੋਵੇ ਤਾਂ "the few" ਲੱਗਦਾ ਹੈ।',
      hi: '"Little / a little / the little" अगणनीय संज्ञाओं (knowledge) के साथ आते हैं ("A little knowledge is a dangerous thing")। "Few / a few / the few" बहुवचन गणनीय संज्ञाओं (friends) के साथ आते हैं; जब आगे विशेषण उपवाक्य ("he had") हो, तो "the few" का प्रयोग होता है।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-eng-4',
    topicId: 'ett-english-2',
    subjectId: 'ett-english',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level A)',
    question: {
      en: 'According to the rules of Subject-Verb Agreement (Concord), choose the correct verb forms for the two sentences:\n(1) "The Headmaster, along with all the teachers, _____ present at the morning assembly."\n(2) "Neither the captain nor the players _____ responsible for the delay."',
      pa: 'Subject-Verb Agreement ਦੇ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਦੋਵਾਂ ਵਾਕਾਂ ਲਈ ਸਹੀ ਕਿਰਿਆ ਰੂਪ ਚੁਣੋ:\n(1) "The Headmaster, along with all the teachers, _____ present at the morning assembly."\n(2) "Neither the captain nor the players _____ responsible for the delay."',
      hi: 'Subject-Verb Agreement के नियमों के अनुसार दोनों वाक्यों के लिए सही क्रिया रूप चुनें:\n(1) "The Headmaster, along with all the teachers, _____ present at the morning assembly."\n(2) "Neither the captain nor the players _____ responsible for the delay."',
    },
    options: {
      A: {
        en: '(1) was — agrees with the first subject "The Headmaster" before "along with"; (2) were — agrees with the nearer subject "the players" after "nor"',
        pa: '(1) was — ਕਿਉਂਕਿ "along with" ਹੋਣ ਤੇ ਕਿਰਿਆ ਪਹਿਲੇ ਕਰਤਾ (The Headmaster) ਅਨੁਸਾਰ ਲੱਗਦੀ ਹੈ; (2) were — ਕਿਉਂਕਿ "Neither...nor" ਵਿੱਚ ਕਿਰਿਆ ਨੇੜਲੇ ਕਰਤਾ (the players) ਅਨੁਸਾਰ ਲੱਗਦੀ ਹੈ',
        hi: '(1) was — क्योंकि "along with" होने पर क्रिया प्रथम कर्ता (The Headmaster) के अनुसार लगती है; (2) were — क्योंकि "Neither...nor" में क्रिया निकटतम कर्ता (the players) के अनुसार लगती है',
      },
      B: {
        en: '(1) were — agrees with "all the teachers"; (2) was — agrees with "the captain"',
        pa: '(1) were — "all the teachers" ਅਨੁਸਾਰ; (2) was — "the captain" ਅਨੁਸਾਰ',
        hi: '(1) were — "all the teachers" के अनुसार; (2) was — "the captain" के अनुसार',
      },
      C: {
        en: '(1) were — because both subjects are plural in combined meaning; (2) were — because "neither" always takes a plural verb',
        pa: '(1) were — ਕਿਉਂਕਿ ਦੋਵੇਂ ਕਰਤਾ ਮਿਲ ਕੇ ਬਹੁਵਚਨ ਬਣਦੇ ਹਨ; (2) were — ਕਿਉਂਕਿ "neither" ਨਾਲ ਹਮੇਸ਼ਾ ਬਹੁਵਚਨ ਕਿਰਿਆ ਲੱਗਦੀ ਹੈ',
        hi: '(1) were — क्योंकि दोनों कर्ता मिलकर बहुवचन बनते हैं; (2) were — क्योंकि "neither" के साथ सदैव बहुवचन क्रिया लगती है',
      },
      D: {
        en: '(1) was; (2) was — because both sentences begin with singular nouns',
        pa: '(1) was; (2) was — ਕਿਉਂਕਿ ਦੋਵੇਂ ਵਾਕ ਇੱਕਵਚਨ ਨਾਂਵ ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦੇ ਹਨ',
        hi: '(1) was; (2) was — क्योंकि दोनों वाक्य एकवचन संज्ञा से प्रारंभ होते हैं',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Rule 1: When two subjects are joined by "as well as, along with, together with, in addition to, accompanied by", the verb agrees with the FIRST subject ("The Headmaster" → singular "was"). Rule 2 (Proximity Rule): When two subjects are joined by "Either...or, Neither...nor, Not only...but also", the verb agrees with the NEARER subject ("the players" → plural "were").',
      pa: 'ਨਿਯਮ 1: ਜਦੋਂ ਦੋ ਕਰਤਾ "along with, as well as, together with" ਨਾਲ ਜੁੜੇ ਹੋਣ, ਤਾਂ ਕਿਰਿਆ ਪਹਿਲੇ ਕਰਤਾ ("The Headmaster" — ਇੱਕਵਚਨ) ਅਨੁਸਾਰ "was" ਲੱਗਦੀ ਹੈ। ਨਿਯਮ 2: ਜਦੋਂ ਦੋ ਕਰਤਾ "Neither...nor / Either...or" ਨਾਲ ਜੁੜੇ ਹੋਣ, ਤਾਂ ਕਿਰਿਆ ਨੇੜਲੇ (ਦੂਜੇ) ਕਰਤਾ ("the players" — ਬਹੁਵਚਨ) ਅਨੁਸਾਰ "were" ਲੱਗਦੀ ਹੈ।',
      hi: 'नियम 1: जब दो कर्ता "along with, as well as, together with" से जुड़े हों, तो क्रिया प्रथम कर्ता ("The Headmaster" — एकवचन) के अनुसार "was" लगती है। नियम 2: जब दो कर्ता "Neither...nor / Either...or" से जुड़े हों, तो क्रिया निकटतम कर्ता ("the players" — बहुवचन) के अनुसार "were" लगती है।',
    },
    difficulty: 'hard',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-eng-5',
    topicId: 'ett-english-2',
    subjectId: 'ett-english',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'Choose the correct Passive Voice transformation of the interrogative sentence: "Who taught you Punjabi grammar?"',
      pa: 'ਪ੍ਰਸ਼ਨਵਾਚਕ ਵਾਕ "Who taught you Punjabi grammar?" ਦਾ ਸਹੀ Passive Voice ਰੂਪ ਚੁਣੋ:',
      hi: 'प्रश्नवाचक वाक्य "Who taught you Punjabi grammar?" का सही Passive Voice रूप चुनें:',
    },
    options: {
      A: {
        en: 'By whom were you taught Punjabi grammar? (or: By whom was Punjabi grammar taught to you?)',
        pa: 'By whom were you taught Punjabi grammar? (ਜਾਂ: By whom was Punjabi grammar taught to you?)',
        hi: 'By whom were you taught Punjabi grammar? (या: By whom was Punjabi grammar taught to you?)',
      },
      B: {
        en: 'Who was taught you Punjabi grammar by?',
        pa: 'Who was taught you Punjabi grammar by?',
        hi: 'Who was taught you Punjabi grammar by?',
      },
      C: {
        en: 'By whom you were taught Punjabi grammar?',
        pa: 'By whom you were taught Punjabi grammar?',
        hi: 'By whom you were taught Punjabi grammar?',
      },
      D: {
        en: 'By whom have you been taught Punjabi grammar?',
        pa: 'By whom have you been taught Punjabi grammar?',
        hi: 'By whom have you been taught Punjabi grammar?',
      },
    },
    correct: 'A',
    explanation: {
      en: 'An active interrogative sentence starting with "Who" in the Simple Past tense ("taught" = V2) transforms into Passive Voice using "By whom + was/were + Subject + V3?". Note that in direct questions, the auxiliary verb ("were") must precede the subject ("you"): "By whom were you taught Punjabi grammar?" (not "By whom you were...").',
      pa: '"Who" ਨਾਲ ਸ਼ੁਰੂ ਹੋਣ ਵਾਲੇ Past Indefinite (taught) ਦੇ ਪ੍ਰਸ਼ਨਵਾਚਕ ਵਾਕ ਨੂੰ Passive Voice ਵਿੱਚ ਬਦਲਣ ਵੇਲੇ "By whom + was/were + Subject + V3?" ਬਣਤਰ ਵਰਤੀ ਜਾਂਦੀ ਹੈ: "By whom were you taught Punjabi grammar?"। ਧਿਆਨ ਰਹੇ ਕਿ ਪ੍ਰਸ਼ਨਵਾਚਕ ਵਾਕ ਵਿੱਚ ਸਹਾਇਕ ਕਿਰਿਆ "were" ਕਰਤਾ "you" ਤੋਂ ਪਹਿਲਾਂ ਆਉਂਦੀ ਹੈ।',
      hi: '"Who" से शुरू होने वाले Past Indefinite (taught) के प्रश्नवाचक वाक्य को Passive Voice में बदलते समय "By whom + was/were + Subject + V3?" संरचना का प्रयोग होता है: "By whom were you taught Punjabi grammar?"।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-eng-6',
    topicId: 'ett-english-2',
    subjectId: 'ett-english',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'Convert the following sentence from Direct Speech to Indirect Narration: The teacher said to the students, "The Earth revolves around the Sun."',
      pa: 'Direct Speech ਤੋਂ Indirect Narration ਵਿੱਚ ਬਦਲੋ: The teacher said to the students, "The Earth revolves around the Sun."',
      hi: 'Direct Speech से Indirect Narration में बदलें: The teacher said to the students, "The Earth revolves around the Sun."',
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
        en: 'The teacher asked the students whether the Earth revolves around the Sun.',
        pa: 'The teacher asked the students whether the Earth revolves around the Sun.',
        hi: 'The teacher asked the students whether the Earth revolves around the Sun.',
      },
      D: {
        en: 'The teacher said to the students that the Earth had revolved around the Sun.',
        pa: 'The teacher said to the students that the Earth had revolved around the Sun.',
        hi: 'The teacher said to the students that the Earth had revolved around the Sun.',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Even when the reporting verb is in the past tense ("said to" → "told"), if the reported speech expresses a universal truth, scientific law, proverb, or habitual fact ("The Earth revolves around the Sun"), its tense DOES NOT change in Indirect Speech ("revolves" remains "revolves").',
      pa: 'Indirect Narration ਦੇ ਨਿਯਮ ਅਨੁਸਾਰ, ਭਾਵੇਂ ਰਿਪੋਰਟਿੰਗ ਕਿਰਿਆ ਭੂਤਕਾਲ ("said to" → "told") ਵਿੱਚ ਹੋਵੇ, ਪਰ ਜੇ ਰਿਪੋਰਟਡ ਸਪੀਚ ਵਿੱਚ ਕੋਈ ਸਰਵ-ਵਿਆਪਕ ਸੱਚ (Universal Truth) ਜਾਂ ਵਿਗਿਆਨਕ ਤੱਥ ("The Earth revolves around the Sun") ਹੋਵੇ, ਤਾਂ ਉਸ ਦਾ ਕਾਲ (Tense) ਨਹੀਂ ਬਦਲਦਾ।',
      hi: 'Indirect Narration के नियम के अनुसार, यदि रिपोर्टेड स्पीच में कोई सार्वभौमिक सत्य (Universal Truth) या वैज्ञानिक तथ्य हो, तो रिपोर्टिंग क्रिया भूतकाल में होने पर भी उसका काल (Tense) नहीं बदलता ("revolves" ही रहता है)।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-eng-7',
    topicId: 'ett-english-2',
    subjectId: 'ett-english',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level A)',
    question: {
      en: 'Spot the grammatical error in the sentence: "One of the boy (A) / who have been selected for the scholarship (B) / is my younger brother, and we discussed about the matter yesterday. (C)"',
      pa: 'ਦਿੱਤੇ ਗਏ ਵਾਕ ਵਿੱਚ ਵਿਆਕਰਨਕ ਗ਼ਲਤੀਆਂ ਦੀ ਪਛਾਣ ਕਰੋ: "One of the boy (A) / who have been selected for the scholarship (B) / is my younger brother, and we discussed about the matter yesterday. (C)"',
      hi: 'दिए गए वाक्य में व्याकरणिक त्रुटियों की पहचान करें: "One of the boy (A) / who have been selected for the scholarship (B) / is my younger brother, and we discussed about the matter yesterday. (C)"',
    },
    options: {
      A: {
        en: '"One of the" must be followed by a plural noun ("One of the boys"), and the transitive verb "discussed" never takes the preposition "about" ("discussed the matter")',
        pa: '"One of the" ਤੋਂ ਬਾਅਦ ਬਹੁਵਚਨ ਨਾਂਵ ("One of the boys") ਆਉਂਦਾ ਹੈ, ਅਤੇ ਸਕਰਮਕ ਕਿਰਿਆ "discussed" ਨਾਲ ਕਦੇ ਵੀ "about" ਨਹੀਂ ਲੱਗਦਾ ("discussed the matter")',
        hi: '"One of the" के बाद बहुवचन संज्ञा ("One of the boys") आती है, और सकर्मक क्रिया "discussed" के साथ कभी "about" नहीं लगता ("discussed the matter")',
      },
      B: {
        en: 'The main verb "is my younger brother" should be changed to plural "are my younger brothers"',
        pa: 'ਮੁੱਖ ਕਿਰਿਆ "is my younger brother" ਦੀ ਥਾਂ ਬਹੁਵਚਨ "are my younger brothers" ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ',
        hi: 'मुख्य क्रिया "is my younger brother" के स्थान पर बहुवचन "are my younger brothers" होना चाहिए',
      },
      C: {
        en: 'The relative pronoun "who" should be replaced by "which" for human beings',
        pa: 'ਮਨੁੱਖਾਂ ਲਈ ਸੰਬੰਧਵਾਚਕ ਪੜਨਾਂਵ "who" ਦੀ ਥਾਂ "which" ਦੀ ਵਰਤੋਂ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ',
        hi: 'मनुष्यों के लिए संबंधवाचक सर्वनाम "who" के स्थान पर "which" का प्रयोग होना चाहिए',
      },
      D: {
        en: 'The word "yesterday" requires the Present Perfect tense ("have discussed") instead of Simple Past',
        pa: '"yesterday" ਸ਼ਬਦ ਦੇ ਨਾਲ Simple Past ਦੀ ਬਜਾਏ Present Perfect ("have discussed") ਲੱਗਣਾ ਚਾਹੀਦਾ ਹੈ',
        hi: '"yesterday" शब्द के साथ Simple Past के बजाय Present Perfect ("have discussed") लगना चाहिए',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Two classic exam error-spotting rules apply here: (1) "One of the + Plural Noun" ("One of the boys"), where the relative pronoun "who" refers to "boys" (taking "have been"), while the main subject "One" takes singular "is". (2) Transitive verbs like "discuss, describe, order, enter (a room), resemble, marry (in active voice)" do not take prepositions after them ("discussed the matter", NOT "discussed about").',
      pa: 'ਇੱਥੇ ਦੋ ਮਹੱਤਵਪੂਰਨ ਨਿਯਮ ਲਾਗੂ ਹੁੰਦੇ ਹਨ: (1) "One of the" ਤੋਂ ਬਾਅਦ ਹਮੇਸ਼ਾ ਬਹੁਵਚਨ ਨਾਂਵ ("One of the boys") ਆਉਂਦਾ ਹੈ। (2) "discuss, describe, resemble, order" ਵਰਗੀਆਂ ਸਕਰਮਕ ਕਿਰਿਆਵਾਂ ਤੋਂ ਬਾਅਦ ਸੰਬੰਧਕ "about/to" ਨਹੀਂ ਲੱਗਦਾ ("we discussed the matter" ਸ਼ੁੱਧ ਹੈ)।',
      hi: 'यहाँ दो महत्वपूर्ण नियम लागू होते हैं: (1) "One of the" के बाद सदैव बहुवचन संज्ञा ("One of the boys") आती है। (2) "discuss, describe, resemble" जैसी सकर्मक क्रियाओं के बाद "about" का प्रयोग नहीं होता ("we discussed the matter" शुद्ध है)।',
    },
    difficulty: 'hard',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-eng-8',
    topicId: 'ett-english-2',
    subjectId: 'ett-english',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level B)',
    question: {
      en: 'Match the following English idioms and one-word substitutions with their exact meanings:\n1. "To burn the midnight oil"\n2. "At the eleventh hour"\n3. One who looks at the bright side of things',
      pa: 'ਹੇਠ ਲਿਖੇ ਅੰਗਰੇਜ਼ੀ ਮੁਹਾਵਰਿਆਂ ਅਤੇ ਬਹੁਤੇ ਸ਼ਬਦਾਂ ਦੀ ਥਾਂ ਇੱਕ ਸ਼ਬਦ ਦਾ ਸਹੀ ਅਰਥਾਂ ਨਾਲ ਮਿਲਾਨ ਕਰੋ:\n1. "To burn the midnight oil"\n2. "At the eleventh hour"\n3. One who looks at the bright side of things',
      hi: 'निम्नलिखित अंग्रेजी मुहावरों और अनेक शब्दों के लिए एक शब्द का सही अर्थों से मिलान करें:\n1. "To burn the midnight oil"\n2. "At the eleventh hour"\n3. One who looks at the bright side of things',
    },
    options: {
      A: {
        en: '1 → To study or work late into the night; 2 → At the very last possible moment; 3 → Optimist (ਆਸ਼ਾਵਾਦੀ)',
        pa: '1 → ਦੇਰ ਰਾਤ ਤੱਕ ਸਖ਼ਤ ਮਿਹਨਤ ਜਾਂ ਪੜ੍ਹਾਈ ਕਰਨਾ; 2 → ਬਿਲਕੁਲ ਆਖ਼ਰੀ ਮੌਕੇ ਤੇ (ਐਨ ਮੌਕੇ ਤੇ); 3 → Optimist (ਆਸ਼ਾਵਾਦੀ)',
        hi: '1 → देर रात तक कड़ी मेहनत या पढ़ाई करना; 2 → बिल्कुल अंतिम क्षण में (ऐन मौके पर); 3 → Optimist (आशावादी)',
      },
      B: {
        en: '1 → To waste fuel needlessly; 2 → At 11 o\'clock in the morning; 3 → Pessimist (ਨਿਰਾਸ਼ਾਵਾਦੀ)',
        pa: '1 → ਤੇਲ ਬਰਬਾਦ ਕਰਨਾ; 2 → ਸਵੇਰੇ ਗਿਆਰਾਂ ਵਜੇ; 3 → Pessimist (ਨਿਰਾਸ਼ਾਵਾਦੀ)',
        hi: '1 → तेल बर्बाद करना; 2 → सुबह ग्यारह बजे; 3 → Pessimist (निराशावादी)',
      },
      C: {
        en: '1 → To start a quarrel; 2 → Early in advance; 3 → Atheist (ਨਾਸਤਿਕ)',
        pa: '1 → ਝਗੜਾ ਸ਼ੁਰੂ ਕਰਨਾ; 2 → ਸਮੇਂ ਤੋਂ ਬਹੁਤ ਪਹਿਲਾਂ; 3 → Atheist (ਨਾਸਤਿਕ)',
        hi: '1 → झगड़ा शुरू करना; 2 → समय से बहुत पहले; 3 → Atheist (नास्तिक)',
      },
      D: {
        en: '1 → To sleep early; 2 → Every eleven hours; 3 → Philanthropist (ਪਰਉਪਕਾਰੀ)',
        pa: '1 → ਜਲਦੀ ਸੌਂ ਜਾਣਾ; 2 → ਹਰ ਗਿਆਰਾਂ ਘੰਟੇ ਬਾਅਦ; 3 → Philanthropist (ਪਰਉਪਕਾਰੀ)',
        hi: '1 → जल्दी सो जाना; 2 → हर ग्यारह घंटे बाद; 3 → Philanthropist (परोपकारी)',
      },
    },
    correct: 'A',
    explanation: {
      en: '(1) "To burn the midnight oil" means to read, study, or work late into the night (ਦੇਰ ਰਾਤ ਤੱਕ ਮਿਹਨਤ ਕਰਨੀ). (2) "At the eleventh hour" means at the latest possible moment / last minute (ਐਨ ਆਖ਼ਰੀ ਮੌਕੇ ਤੇ). (3) One who looks at the bright side of things is an "Optimist" (ਆਸ਼ਾਵਾਦੀ), whereas one who looks at the dark side is a "Pessimist" (ਨਿਰਾਸ਼ਾਵਾਦੀ).',
      pa: '(1) "To burn the midnight oil" = ਦੇਰ ਰਾਤ ਤੱਕ ਪੜ੍ਹਾਈ ਜਾਂ ਸਖ਼ਤ ਮਿਹਨਤ ਕਰਨਾ। (2) "At the eleventh hour" = ਬਿਲਕੁਲ ਆਖ਼ਰੀ ਵੇਲੇ (ਐਨ ਮੌਕੇ ਤੇ)। (3) "One who looks at the bright side of things" = Optimist (ਆਸ਼ਾਵਾਦੀ)।',
      hi: '(1) "To burn the midnight oil" = देर रात तक कठिन परिश्रम या अध्ययन करना। (2) "At the eleventh hour" = अंतिम क्षण में। (3) आशावादी दृष्टिकोण रखने वाला = Optimist (आशावादी)।',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-eng-9',
    topicId: 'ett-english-2',
    subjectId: 'ett-english',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'Which option correctly identifies a valid Synonym of "Benevolent" and the exact Antonym of "Opaque"?',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਵਿਕਲਪ ਕ੍ਰਮਵਾਰ "Benevolent" ਦਾ ਸਹੀ ਸਮਾਨਾਰਥਕ (Synonym) ਅਤੇ "Opaque" ਦਾ ਸਹੀ ਵਿਰੋਧਾਰਥਕ (Antonym) ਦਰਸਾਉਂਦਾ ਹੈ?',
      hi: 'निम्नलिखित में से कौन-सा विकल्प क्रमशः "Benevolent" का सही पर्यायवाची (Synonym) और "Opaque" का सही विलोम (Antonym) दर्शाता है?',
    },
    options: {
      A: {
        en: 'Synonym of Benevolent: Kind / Charitable (ਦਿਆਲੂ / ਪਰਉਪਕਾਰੀ); Antonym of Opaque: Transparent (ਪਾਰਦਰਸ਼ੀ)',
        pa: '"Benevolent" ਦਾ ਸਮਾਨਾਰਥਕ: Kind / Charitable (ਦਿਆਲੂ / ਪਰਉਪਕਾਰੀ); "Opaque" ਦਾ ਵਿਰੋਧਾਰਥਕ: Transparent (ਪਾਰਦਰਸ਼ੀ)',
        hi: '"Benevolent" का पर्यायवाची: Kind / Charitable (दयालु / परोपकारी); "Opaque" का विलोम: Transparent (पारदर्शी)',
      },
      B: {
        en: 'Synonym of Benevolent: Malevolent / Cruel; Antonym of Opaque: Cloudy',
        pa: '"Benevolent" ਦਾ ਸਮਾਨਾਰਥਕ: Malevolent / Cruel; "Opaque" ਦਾ ਵਿਰੋਧਾਰਥਕ: Cloudy',
        hi: '"Benevolent" का पर्यायवाची: Malevolent / Cruel; "Opaque" का विलोम: Cloudy',
      },
      C: {
        en: 'Synonym of Benevolent: Arrogant / Hostile; Antonym of Opaque: Obscure',
        pa: '"Benevolent" ਦਾ ਸਮਾਨਾਰਥਕ: Arrogant / Hostile; "Opaque" ਦਾ ਵਿਰੋਧਾਰਥਕ: Obscure',
        hi: '"Benevolent" का पर्यायवाची: Arrogant / Hostile; "Opaque" का विलोम: Obscure',
      },
      D: {
        en: 'Synonym of Benevolent: Stingy / Miserly; Antonym of Opaque: Dense',
        pa: '"Benevolent" ਦਾ ਸਮਾਨਾਰਥਕ: Stingy / Miserly; "Opaque" ਦਾ ਵਿਰੋਧਾਰਥਕ: Dense',
        hi: '"Benevolent" का पर्यायवाची: Stingy / Miserly; "Opaque" का विलोम: Dense',
      },
    },
    correct: 'A',
    explanation: {
      en: '"Benevolent" (from Latin bene = well + volens = wishing) means kind, generous, and charitable (ਦਿਆਲੂ/ਪਰਉਪਕਾਰੀ); its antonym is "Malevolent". "Opaque" (ਅਪਾਰਦਰਸ਼ੀ) means not allowing light to pass through; its exact antonym is "Transparent" (ਪਾਰਦਰਸ਼ੀ) or "Lucid/Clear".',
      pa: '"Benevolent" ਦਾ ਅਰਥ ਦਿਆਲੂ ਜਾਂ ਪਰਉਪਕਾਰੀ ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ ਇਸ ਦਾ ਸਮਾਨਾਰਥਕ (Synonym) "Kind / Charitable" ਹੈ (ਅਤੇ ਵਿਰੋਧੀ ਸ਼ਬਦ Malevolent ਹੈ)। "Opaque" (ਅਪਾਰਦਰਸ਼ੀ) ਦਾ ਸਹੀ ਵਿਰੋਧਾਰਥਕ (Antonym) "Transparent" (ਪਾਰਦਰਸ਼ੀ) ਹੈ।',
      hi: '"Benevolent" का अर्थ दयालु या परोपकारी होता है, इसलिए इसका पर्यायवाची "Kind / Charitable" है। "Opaque" (अपारदर्शी) का सही विलोम शब्द "Transparent" (पारदर्शी) है।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-eng-10',
    topicId: 'ett-english-2',
    subjectId: 'ett-english',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'Choose the most accurate English translation of the Punjabi sentence: "ਮੁੰਡੇ ਸਵੇਰ ਤੋਂ ਮੈਦਾਨ ਵਿੱਚ ਫੁੱਟਬਾਲ ਖੇਡ ਰਹੇ ਹਨ।"',
      pa: 'ਪੰਜਾਬੀ ਵਾਕ "ਮੁੰਡੇ ਸਵੇਰ ਤੋਂ ਮੈਦਾਨ ਵਿੱਚ ਫੁੱਟਬਾਲ ਖੇਡ ਰਹੇ ਹਨ।" ਦਾ ਸਹੀ ਅੰਗਰੇਜ਼ੀ ਅਨੁਵਾਦ ਚੁਣੋ:',
      hi: 'पंजाबी वाक्य "ਮੁੰਡੇ ਸਵੇਰ ਤੋਂ ਮੈਦਾਨ ਵਿੱਚ ਫੁੱਟਬਾਲ ਖੇਡ ਰਹੇ ਹਨ।" (लड़के सुबह से मैदान में फुटबॉल खेल रहे हैं।) का सही अंग्रेजी अनुवाद चुनें:',
    },
    options: {
      A: {
        en: 'The boys have been playing football in the ground since morning.',
        pa: 'The boys have been playing football in the ground since morning.',
        hi: 'The boys have been playing football in the ground since morning.',
      },
      B: {
        en: 'The boys are playing football in the ground from morning.',
        pa: 'The boys are playing football in the ground from morning.',
        hi: 'The boys are playing football in the ground from morning.',
      },
      C: {
        en: 'The boys have been playing football in the ground for morning.',
        pa: 'The boys have been playing football in the ground for morning.',
        hi: 'The boys have been playing football in the ground for morning.',
      },
      D: {
        en: 'The boys had played football in the ground since morning.',
        pa: 'The boys had played football in the ground since morning.',
        hi: 'The boys had played football in the ground since morning.',
      },
    },
    correct: 'A',
    explanation: {
      en: 'When an action started in the past ("ਸਵੇਰ ਤੋਂ" — since morning) and is still continuing in the present ("ਖੇਡ ਰਹੇ ਹਨ"), English requires the Present Perfect Continuous Tense ("have/has been + V-ing") rather than Simple Present Continuous ("are playing"), and "morning" is a point of time taking "since" ("since morning").',
      pa: 'ਜਦੋਂ ਕੋਈ ਕੰਮ ਭੂਤਕਾਲ ਵਿੱਚ ਕਿਸੇ ਨਿਸ਼ਚਿਤ ਸਮੇਂ ("ਸਵੇਰ ਤੋਂ") ਤੋਂ ਸ਼ੁਰੂ ਹੋ ਕੇ ਵਰਤਮਾਨ ਵਿੱਚ ਵੀ ਜਾਰੀ ਹੋਵੇ ("ਖੇਡ ਰਹੇ ਹਨ"), ਤਾਂ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ Present Perfect Continuous Tense ("have been playing") ਅਤੇ ਨਿਸ਼ਚਿਤ ਸਮੇਂ ਲਈ "since morning" ਦੀ ਵਰਤੋਂ ਹੁੰਦੀ ਹੈ।',
      hi: 'जब कोई कार्य भूतकाल के निश्चित समय ("ਸਵੇਰ ਤੋਂ" — सुबह से) से प्रारंभ होकर वर्तमान में भी जारी हो ("ਖੇਡ ਰਹੇ ਹਨ"), तो अंग्रेजी में Present Perfect Continuous Tense ("have been playing") और "since morning" का प्रयोग होता है।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },

  // ===========================================================================
  // TOPIC 7: ETT PAPER B — HINDI LANGUAGE (DEVANAGARI, GRAMMAR, VOCABULARY & TRANSLATION)
  // topicId: 'ett-hindi-4' (10 MCQs)
  // ===========================================================================
  {
    id: 'q-ett-pb-hin-1',
    topicId: 'ett-hindi-4',
    subjectId: 'ett-hindi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level B)',
    question: {
      en: 'In the Devanagari वर्णमाला (alphabet), how are the four Conjunct Consonants (संयुक्त व्यंजन — क्ष, त्र, ज्ञ, श्र) phonetically decomposed into their constituent consonant + vowel-less consonant components?',
      pa: 'ਦੇਵਨਾਗਰੀ (ਹਿੰਦੀ) ਵਰਣਮਾਲਾ ਵਿੱਚ ਚਾਰ ਸੰਯੁਕਤ ਵਿਅੰਜਨਾਂ (क्ष, त्र, ज्ञ, श्र) ਦਾ ਸਹੀ ਵਰਣ-ਵਿੱਛੇਦ (ਬਣਤਰ) ਕੀ ਹੈ?',
      hi: 'देवनागरी (हिंदी) वर्णमाला में चार संयुक्त व्यंजनों (क्ष, त्र, ज्ञ, श्र) का सही वर्ण-विच्छेद (संरचना) क्या है?',
    },
    options: {
      A: {
        en: 'क्ष = क् + ष; त्र = त् + र; ज्ञ = ज् + ञ; श्र = श् + र',
        pa: 'क्ष = क् + ष; त्र = त् + र; ज्ञ = ज् + ञ; श्र = श् + र',
        hi: 'क्ष = क् + ष; त्र = त् + र; ज्ञ = ज् + ञ; श्र = श् + र',
      },
      B: {
        en: 'क्ष = क + श; त्र = त + र; ज्ञ = ग् + य; श्र = स् + र',
        pa: 'क्ष = क + श; त्र = त + र; ज्ञ = ग् + य; श्र = स् + र',
        hi: 'क्ष = क + श; त्र = त + र; ज्ञ = ग् + य; श्र = स् + र',
      },
      C: {
        en: 'क्ष = क् + स; त्र = त् + ऋ; ज्ञ = ज् + य; श्र = ष + र',
        pa: 'क्ष = क् + स; त्र = त् + ऋ; ज्ञ = ज् + य; श्र = ष + र',
        hi: 'क्ष = क् + स; त्र = त् + ऋ; ज्ञ = ज् + य; श्र = ष + र',
      },
      D: {
        en: 'क्ष = छ् + ष; त्र = द् + र; ज्ञ = ग् + ञ; श्र = श् + ऋ',
        pa: 'क्ष = छ् + ष; त्र = द् + र; ज्ञ = ग् + ञ; श्र = श् + ऋ',
        hi: 'क्ष = छ् + ष; त्र = द् + र; ज्ञ = ग् + ञ; श्र = श् + ऋ',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Hindi Devanagari grammar, the four standard Sanyukt Vyanjan (संयुक्त व्यंजन) are formed by combining a halant (vowel-less) first consonant with a second consonant: क्ष = क् + ष (or क् + ष् + अ), त्र = त् + र, ज्ञ = ज् + ञ (note: NOT ग् + य, even though pronounced "ग्य" in modern Hindi), and श्र = श् + र. Therefore, in a Hindi dictionary, "क्ष" comes immediately after "क", and "ज्ञ" comes after "ज".',
      pa: 'ਹਿੰਦੀ ਵਿਆਕਰਨ ਵਿੱਚ ਚਾਰ ਸੰਯੁਕਤ ਵਿਅੰਜਨ ਹਨ: क्ष = क् + ष, त्र = त् + र, ज्ञ = ज् + ञ (ਨਾ ਕਿ ग् + य), ਅਤੇ श्र = श् + र। ਪਹਿਲੇ ਵਿਅੰਜਨ ਦੇ ਹੇਠਾਂ ਹਲੰਤ (੍) ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ ਕਿਉਂਕਿ ਉਹ ਸਵਰ-ਰਹਿਤ ਹੁੰਦਾ ਹੈ।',
      hi: 'हिंदी व्याकरण में चार संयुक्त व्यंजन हैं: क्ष = क् + ष, त्र = त् + र, ज्ञ = ज् + ञ (ध्यान रहे: ग् + य नहीं), तथा श्र = श् + र। प्रथम व्यंजन स्वर-रहित (हलंत युक्त) होता है। इसी कारण हिंदी शब्दकोश में "क्ष" का स्थान "क" के बाद और "ज्ञ" का स्थान "ज" के बाद आता है।',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-hin-2',
    topicId: 'ett-hindi-4',
    subjectId: 'ett-hindi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'In Hindi phonetics, how are stops (स्पर्श व्यंजन) classified into "Alpapran" (अल्पप्राण) and "Mahapran" (महाप्राण) across the five vargas, and what is the place of articulation (उच्चारण स्थान) of "चवर्ग" (च, छ, ज, झ, ञ)?',
      pa: 'ਹਿੰਦੀ ਧੁਨੀ-ਵਿਗਿਆਨ ਵਿੱਚ ਪੰਜ ਵਰਗਾਂ ਦੇ ਸਪਰਸ਼ ਵਿਅੰਜਨਾਂ ਨੂੰ "ਅਲਪਪ੍ਰਾਣ" (अल्पप्राण) ਅਤੇ "ਮਹਾਪ੍ਰਾਣ" (महाप्राण) ਵਿੱਚ ਕਿਵੇਂ ਵੰਡਿਆ ਜਾਂਦਾ ਹੈ, ਅਤੇ "ਚਵਰਗ" (च, छ, ज, झ, ञ) ਦਾ ਉਚਾਰਨ ਸਥਾਨ ਕੀ ਹੈ?',
      hi: 'हिंदी ध्वनि-विज्ञान में पाँचों वर्गों के स्पर्श व्यंजनों को "अल्पप्राण" और "महाप्राण" में किस क्रम में बाँटा जाता है, तथा "चवर्ग" (च, छ, ज, झ, ञ) का उच्चारण स्थान क्या है?',
    },
    options: {
      A: {
        en: 'Alpapran: 1st, 3rd, and 5th letters of each varga (plus य, र, ल, व); Mahapran: 2nd and 4th letters of each varga (plus श, ष, स, ह); Place of articulation of चवर्ग is Talavya / Palatal (तालव्य)',
        pa: 'ਅਲਪਪ੍ਰਾਣ: ਹਰੇਕ ਵਰਗ ਦਾ 1ਲਾ, 3ਜਾ ਅਤੇ 5ਵਾਂ ਅੱਖਰ (ਅਤੇ य, र, ल, व); ਮਹਾਪ੍ਰਾਣ: ਹਰੇਕ ਵਰਗ ਦਾ 2ਜਾ ਅਤੇ 4ਥਾ ਅੱਖਰ (ਅਤੇ श, ष, स, ह); ਚਵਰਗ ਦਾ ਉਚਾਰਨ ਸਥਾਨ "ਤਾਲਵੀ" (तालव्य) ਹੈ',
        hi: 'अल्पप्राण: प्रत्येक वर्ग का 1ला, 3रा और 5वाँ वर्ण (तथा य, र, ल, व); महाप्राण: प्रत्येक वर्ग का 2रा और 4था वर्ण (तथा श, ष, स, ह); चवर्ग का उच्चारण स्थान "तालव्य" (तालु) है',
      },
      B: {
        en: 'Alpapran: 1st and 2nd letters of each varga; Mahapran: 3rd, 4th, and 5th letters; Place of articulation of चवर्ग is Kanthya (कंठ्य)',
        pa: 'ਅਲਪਪ੍ਰਾਣ: ਹਰੇਕ ਵਰਗ ਦਾ 1ਲਾ ਅਤੇ 2ਜਾ ਅੱਖਰ; ਮਹਾਪ੍ਰਾਣ: 3ਜਾ, 4ਥਾ ਅਤੇ 5ਵਾਂ ਅੱਖਰ; ਚਵਰਗ ਦਾ ਉਚਾਰਨ ਸਥਾਨ "ਕੰਠੀ" (कंठ्य) ਹੈ',
        hi: 'अल्पप्राण: प्रत्येक वर्ग का 1ला और 2रा वर्ण; महाप्राण: 3रा, 4था और 5वाँ वर्ण; चवर्ग का उच्चारण स्थान "कंठ्य" है',
      },
      C: {
        en: 'Alpapran: 2nd and 4th letters of each varga; Mahapran: 1st, 3rd, and 5th letters; Place of articulation of चवर्ग is Murdhanya (मूर्धन्य)',
        pa: 'ਅਲਪਪ੍ਰਾਣ: ਹਰੇਕ ਵਰਗ ਦਾ 2ਜਾ ਅਤੇ 4ਥਾ ਅੱਖਰ; ਮਹਾਪ੍ਰਾਣ: 1ਲਾ, 3ਜਾ ਅਤੇ 5ਵਾਂ ਅੱਖਰ; ਚਵਰਗ ਦਾ ਉਚਾਰਨ ਸਥਾਨ "ਮੂਰਧਨੀ" (मूर्धन्य) ਹੈ',
        hi: 'अल्पप्राण: प्रत्येक वर्ग का 2रा और 4था वर्ण; महाप्राण: 1ला, 3रा और 5वाँ वर्ण; चवर्ग का उच्चारण स्थान "मूर्धन्य" है',
      },
      D: {
        en: 'Alpapran: 3rd, 4th, and 5th letters; Mahapran: 1st and 2nd letters; Place of articulation of चवर्ग is Dantya (दंत्य)',
        pa: 'ਅਲਪਪ੍ਰਾਣ: 3ਜਾ, 4ਥਾ ਅਤੇ 5ਵਾਂ ਅੱਖਰ; ਮਹਾਪ੍ਰਾਣ: 1ਲਾ ਅਤੇ 2ਜਾ ਅੱਖਰ; ਚਵਰਗ ਦਾ ਉਚਾਰਨ ਸਥਾਨ "ਦੰਤੀ" (दंत्य) ਹੈ',
        hi: 'अल्पप्राण: 3रा, 4था और 5वाँ वर्ण; महाप्राण: 1ला और 2रा वर्ण; चवर्ग का उच्चारण स्थान "दंत्य" है',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Based on breath force (प्राणवायु): Alpapran (unaspirated) includes the 1st, 3rd, and 5th consonants of each varga (e.g., क, ग, ङ) plus Antahstha (य, र, ल, व). Mahapran (aspirated) includes the 2nd and 4th consonants (e.g., ख, घ) plus Ushma (श, ष, स, ह). Note: Based on vocal-cord vibration, 1st & 2nd are अघोष (voiceless) while 3rd, 4th & 5th are सघोष/घोष (voiced). चवर्ग (च, छ, ज, झ, ञ) and इ, ई, य, श are Talavya (तालव्य).',
      pa: 'ਸਾਹ ਦੀ ਮਾਤਰਾ (ਪ੍ਰਾਣਵਾਯੂ) ਦੇ ਆਧਾਰ ਤੇ ਹਰੇਕ ਵਰਗ ਦਾ 1ਲਾ, 3ਜਾ ਅਤੇ 5ਵਾਂ ਵਰਣ (ਅਤੇ य, र, ल, व) "ਅਲਪਪ੍ਰਾਣ" ਹੁੰਦੇ ਹਨ, ਜਦਕਿ 2ਜਾ ਅਤੇ 4ਥਾ ਵਰਣ (ਅਤੇ श, ष, स, ह) "ਮਹਾਪ੍ਰਾਣ" ਹੁੰਦੇ ਹਨ। ਚਵਰਗ (च, छ, ज, झ, ञ) ਦਾ ਉਚਾਰਨ ਤਾਲੂ ਤੋਂ ਹੋਣ ਕਾਰਨ ਇਹ "ਤਾਲਵੀ" (तालव्य) ਵਿਅੰਜਨ ਹਨ।',
      hi: 'श्वास वायु (प्राण) की मात्रा के आधार पर प्रत्येक वर्ग का 1ला, 3रा और 5वाँ वर्ण (तथा य, र, ल, व) "अल्पप्राण" होते हैं, जबकि 2रा और 4था वर्ण (तथा श, ष, स, ह) "महाप्राण" होते हैं। चवर्ग (च, छ, ज, झ, ञ) का उच्चारण स्थान "तालव्य" (तालु) है।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-hin-3',
    topicId: 'ett-hindi-4',
    subjectId: 'ett-hindi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level B)',
    question: {
      en: 'In Hindi grammar, on the basis of morphological inflection (रूप-परिवर्तन / विकार के आधार पर), which four parts of speech constitute "Vikari Shabd" (विकारी शब्द) and which four constitute "Avikari / Avyay Shabd" (अविकारी / अव्यय शब्द)?',
      pa: 'ਹਿੰਦੀ ਵਿਆਕਰਨ ਵਿੱਚ ਰੂਪ-ਪਰਿਵਰਤਨ (ਵਿਕਾਰ) ਦੇ ਆਧਾਰ ਤੇ ਕਿਹੜੇ ਚਾਰ ਸ਼ਬਦ-ਭੇਦ "ਵਿਕਾਰੀ ਸ਼ਬਦ" (विकारी शब्द) ਅਤੇ ਕਿਹੜੇ ਚਾਰ "ਅਵਿਕਾਰੀ / ਅਵਯ ਸ਼ਬਦ" (अविकारी शब्द) ਅਖਵਾਉਂਦੇ ਹਨ?',
      hi: 'हिंदी व्याकरण में रूप-परिवर्तन (विकार) के आधार पर कौन-से चार शब्द-भेद "विकारी शब्द" और कौन-से चार "अविकारी (अव्यय) शब्द" कहलाते हैं?',
    },
    options: {
      A: {
        en: 'Vikari (4): संज्ञा, सर्वनाम, विशेषण, क्रिया; Avikari (4): क्रिया-विशेषण, संबंधबोधक, समुच्चयबोधक, विस्मयादिबोधक',
        pa: 'ਵਿਕਾਰੀ (4): संज्ञा, सर्वनाम, विशेषण, क्रिया; ਅਵਿਕਾਰੀ (4): क्रिया-विशेषण, संबंधबोधक, समुच्चयबोधक, विस्मयादिबोधक',
        hi: 'विकारी (4): संज्ञा, सर्वनाम, विशेषण, क्रिया; अविकारी (4): क्रिया-विशेषण, संबंधबोधक, समुच्चयबोधक, विस्मयादिबोधक',
      },
      B: {
        en: 'Vikari (4): तत्सम, तद्भव, देशज, विदेशी; Avikari (4): रूढ़, यौगिक, योगरूढ़, संकर',
        pa: 'ਵਿਕਾਰੀ (4): तत्सम, तद्भव, देशज, विदेशी; ਅਵਿਕਾਰੀ (4): रूढ़, यौगिक, योगरूढ़, संकर',
        hi: 'विकारी (4): तत्सम, तद्भव, देशज, विदेशी; अविकारी (4): रूढ़, यौगिक, योगरूढ़, संकर',
      },
      C: {
        en: 'Vikari (4): क्रिया-विशेषण, संबंधबोधक, समुच्चयबोधक, निपात; Avikari (4): संज्ञा, सर्वनाम, विशेषण, क्रिया',
        pa: 'ਵਿਕਾਰੀ (4): क्रिया-विशेषण, संबंधबोधक, समुच्चयबोधक, निपात; ਅਵਿਕਾਰੀ (4): संज्ञा, सर्वनाम, विशेषण, क्रिया',
        hi: 'विकारी (4): क्रिया-विशेषण, संबंधबोधक, समुच्चयबोधक, निपात; अविकारी (4): संज्ञा, सर्वनाम, विशेषण, क्रिया',
      },
      D: {
        en: 'Vikari (4): एकार्थक, अनेकार्थक, पर्यायवाची, विलोम; Avikari (4): उपसर्ग, प्रत्यय, संधि, समास',
        pa: 'ਵਿਕਾਰੀ (4): एकार्थक, अनेकार्थक, पर्यायवाची, विलोम; ਅਵਿਕਾਰੀ (4): उपसर्ग, प्रत्यय, संधि, समास',
        hi: 'विकारी (4): एकार्थक, अनेकार्थक, पर्यायवाची, विलोम; अविकारी (4): उपसर्ग, प्रत्यय, संधि, समास',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Words that change their form according to gender, number, or case (लिंग, वचन, कारक, काल) are called Vikari Shabd (विकारी शब्द): संज्ञा (Noun), सर्वनाम (Pronoun), विशेषण (Adjective), and क्रिया (Verb). Words that remain invariant across all grammatical contexts are called Avikari or Avyay (अविकारी / अव्यय): क्रिया-विशेषण (Adverb), संबंधबोधक (Postposition), समुच्चयबोधक (Conjunction), and विस्मयादिबोधक (Interjection), along with निपात.',
      pa: 'ਲਿੰਗ, ਵਚਨ, ਕਾਰਕ ਅਤੇ ਕਾਲ ਅਨੁਸਾਰ ਜਿਨ੍ਹਾਂ ਸ਼ਬਦਾਂ ਦਾ ਰੂਪ ਬਦਲ ਜਾਂਦਾ ਹੈ ਉਹਨਾਂ ਨੂੰ "ਵਿਕਾਰੀ ਸ਼ਬਦ" ਕਹਿੰਦੇ ਹਨ (संज्ञा, सर्वनाम, विशेषण, क्रिया)। ਜਿਨ੍ਹਾਂ ਸ਼ਬਦਾਂ ਦਾ ਰੂਪ ਕਦੇ ਨਹੀਂ ਬਦਲਦਾ ਉਹਨਾਂ ਨੂੰ "ਅਵਿਕਾਰੀ ਜਾਂ ਅਵਯ ਸ਼ਬਦ" ਕਹਿੰਦੇ ਹਨ (क्रिया-विशेषण, संबंधबोधक, समुच्चयबोधक, विस्मयादिबोधक)।',
      hi: 'लिंग, वचन, कारक और काल के कारण जिन शब्दों के रूप में परिवर्तन होता है उन्हें "विकारी शब्द" कहते हैं (संज्ञा, सर्वनाम, विशेषण, क्रिया)। जिनके रूप में कभी कोई परिवर्तन नहीं होता उन्हें "अविकारी या अव्यय शब्द" कहते हैं (क्रिया-विशेषण, संबंधबोधक, समुच्चयबोधक, विस्मयादिबोधक)।',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-hin-4',
    topicId: 'ett-hindi-4',
    subjectId: 'ett-hindi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'Choose the option that correctly pairs each Sanskrit "Tatsam" (तत्सम) word with its evolved Hindi "Tadbhav" (तद्भव) equivalent:',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਉਹ ਵਿਕਲਪ ਚੁਣੋ ਜਿਸ ਵਿੱਚ ਹਰੇਕ ਸੰਸਕ੍ਰਿਤ "ਤਤਸਮ" (तत्सम) ਸ਼ਬਦ ਦੇ ਸਾਹਮਣੇ ਉਸ ਦਾ ਸਹੀ ਹਿੰਦੀ "ਤਦਭਵ" (तद्भव) ਰੂਪ ਦਿੱਤਾ ਗਿਆ ਹੈ:',
      hi: 'निम्नलिखित में से वह विकल्प चुनें जिसमें प्रत्येक संस्कृत "तत्सम" शब्द के सामने उसका सही हिंदी "तद्भव" रूप दिया गया है:',
    },
    options: {
      A: {
        en: 'गोधूम → गेहूँ; हरिद्रा → हल्दी; घृत → घी; क्षीर → खीर',
        pa: 'गोधूम → गेहूँ (ਕਣਕ); हरिद्रा → हल्दी (ਹਲਦੀ); घृत → घी (ਘਿਓ); क्षीर → खीर (ਖੀਰ)',
        hi: 'गोधूम → गेहूँ; हरिद्रा → हल्दी; घृत → घी; क्षीर → खीर',
      },
      B: {
        en: 'गेहूँ → गोधूम; हल्दी → हरिद्रा; घी → घृत; खीर → क्षीर',
        pa: 'गेहूँ → गोधूम; हल्दी → हरिद्रा; घी → घृत; खीर → क्षीर',
        hi: 'गेहूँ → गोधूम; हल्दी → हरिद्रा; घी → घृत; खीर → क्षीर',
      },
      C: {
        en: 'गोधूम → गाय; हरिद्रा → हरा; घृत → घड़ा; क्षीर → नीर',
        pa: 'गोधूम → गाय; हरिद्रा → हरा; घृत → घड़ा; क्षीर → नीर',
        hi: 'गोधूम → गाय; हरिद्रा → हरा; घृत → घड़ा; क्षीर → नीर',
      },
      D: {
        en: 'अग्नि → अनल; सूर्य → रवि; मयूर → केकी; दुग्ध → पय',
        pa: 'अग्नि → अनल; सूर्य → रवि; मयूर → केकी; दुग्ध → पय',
        hi: 'अग्नि → अनल; सूर्य → रवि; मयूर → केकी; दुग्ध → पय',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Tatsam (तत्सम) words are Sanskrit words used unmodified in Hindi, whereas Tadbhav (तद्भव) words have evolved phonetically through Prakrit/Apabhramsha: गोधूम (Tatsam) → गेहूँ (Tadbhav); हरिद्रा → हल्दी; घृत → घी; क्षीर → खीर; दुग्ध → दूध; दधि → दही; आम्र → आम; कर्पूर → कपूर.',
      pa: 'ਸੰਸਕ੍ਰਿਤ ਦੇ ਜੋ ਸ਼ਬਦ ਬਿਨਾਂ ਕਿਸੇ ਪਰਿਵਰਤਨ ਦੇ ਹਿੰਦੀ ਵਿੱਚ ਵਰਤੇ ਜਾਂਦੇ ਹਨ ਉਹਨਾਂ ਨੂੰ "ਤਤਸਮ" (तत्सम) ਅਤੇ ਜੋ ਰੂਪ ਬਦਲ ਕੇ ਆਏ ਹਨ ਉਹਨਾਂ ਨੂੰ "ਤਦਭਵ" (तद्भव) ਕਹਿੰਦੇ ਹਨ: गोधूम → गेहूँ, हरिद्रा → हल्दी, घृत → घी, क्षीर → खीर।',
      hi: 'संस्कृत के जो शब्द ज्यों-के-त्यों हिंदी में प्रयुक्त होते हैं उन्हें "तत्सम" तथा जो रूप बदलकर हिंदी में आए हैं उन्हें "तद्भव" कहते हैं: गोधूम (तत्सम) → गेहूँ (तद्भव), हरिद्रा → हल्दी, घृत → घी, क्षीर → खीर। (विकल्प D में पर्यायवाची शब्द दिए गए हैं)।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-hin-5',
    topicId: 'ett-hindi-4',
    subjectId: 'ett-hindi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'Identify the correct Prefix (उपसर्ग) in the Hindi word "अत्याचार" and the correct Suffix (प्रत्यय) along with the base noun in the word "सामाजिक":',
      pa: 'ਹਿੰਦੀ ਸ਼ਬਦ "अत्याचार" ਵਿੱਚ ਲੱਗਿਆ ਸਹੀ ਉਪਸਰਗ (अगेतर) ਅਤੇ "सामाजिक" ਸ਼ਬਦ ਵਿੱਚ ਲੱਗਿਆ ਮੂਲ ਸ਼ਬਦ ਤੇ ਪ੍ਰਤਿਅ (पिछेतर) ਚੁਣੋ:',
      hi: 'हिंदी शब्द "अत्याचार" में प्रयुक्त सही उपसर्ग तथा "सामाजिक" शब्द में प्रयुक्त मूल शब्द एवं प्रत्यय चुनें:',
    },
    options: {
      A: {
        en: 'Prefix in अत्याचार: अति (अति + आचार by Yan Sandhi); Base word & Suffix in सामाजिक: समाज + इक',
        pa: '"अत्याचार" ਵਿੱਚ ਉਪਸਰਗ: अति (अति + आचार); "सामाजिक" ਵਿੱਚ ਮੂਲ ਸ਼ਬਦ ਤੇ ਪ੍ਰਤਿਅ: समाज + इक',
        hi: '"अत्याचार" में उपसर्ग: अति (अति + आचार); "सामाजिक" में मूल शब्द एवं प्रत्यय: समाज + इक',
      },
      B: {
        en: 'Prefix in अत्याचार: अत्य (अत्य + आचार); Base word & Suffix in सामाजिक: सामाज + इक',
        pa: '"अत्याचार" ਵਿੱਚ ਉਪਸਰਗ: अत्य (अत्य + आचार); "सामाजिक" ਵਿੱਚ ਮੂਲ ਸ਼ਬਦ ਤੇ ਪ੍ਰਤਿਅ: सामाज + इक',
        hi: '"अत्याचार" में उपसर्ग: अत्य (अत्य + आचार); "सामाजिक" में मूल शब्द एवं प्रत्यय: सामाज + इक',
      },
      C: {
        en: 'Prefix in अत्याचार: अ (अ + त्याचार); Base word & Suffix in सामाजिक: समाज + क',
        pa: '"अत्याचार" ਵਿੱਚ ਉਪਸਰਗ: अ (अ + त्याचार); "सामाजिक" ਵਿੱਚ ਮੂਲ ਸ਼ਬਦ ਤੇ ਪ੍ਰਤਿਅ: समाज + क',
        hi: '"अत्याचार" में उपसर्ग: अ (अ + त्याचार); "सामाजिक" में मूल शब्द एवं प्रत्यय: समाज + क',
      },
      D: {
        en: 'Prefix in अत्याचार: आ (आ + त्याचार); Base word & Suffix in सामाजिक: साम + आजिक',
        pa: '"अत्याचार" ਵਿੱਚ ਉਪਸਰਗ: आ (आ + त्याचार); "सामाजिक" ਵਿੱਚ ਮੂਲ ਸ਼ਬਦ ਤੇ ਪ੍ਰਤਿਅ: साम + आजिक',
        hi: '"अत्याचार" में उपसर्ग: आ (आ + त्याचार); "सामाजिक" में मूल शब्द एवं प्रत्यय: साम + आजिक',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In "अत्याचार", the prefix (उपसर्ग) is "अति" + base word "आचार" (by Yan Sandhi इ + आ = या → अत्याचार; similarly अत्यधिक = अति + अधिक). In "सामाजिक", the base word is "समाज" + suffix "इक" (when the Taddhit suffix "-इक" is added, it lengthens the initial vowel अ → आ by Adi Vriddhi: समाज + इक = सामाजिक, इतिहास + इक = ऐतिहासिक).',
      pa: '"अत्याचार" ਵਿੱਚ ਯਣ ਸੰਧੀ ਨਿਯਮ (इ + आ = या) ਅਨੁਸਾਰ ਉਪਸਰਗ "अति" ਅਤੇ ਮੂਲ ਸ਼ਬਦ "आचार" ਹੈ। "सामाजिक" ਵਿੱਚ ਮੂਲ ਸ਼ਬਦ "समाज" ਅਤੇ ਪ੍ਰਤਿਅ "इक" ਹੈ ("इक" ਪ੍ਰਤਿਅ ਲੱਗਣ ਨਾਲ ਪਹਿਲੇ ਅੱਖਰ "स" ਦਾ "सा" ਹੋ ਜਾਂਦਾ ਹੈ)।',
      hi: '"अत्याचार" में यण संधि (इ + आ = या) के अनुसार उपसर्ग "अति" और मूल शब्द "आचार" है। "सामाजिक" में मूल शब्द "समाज" और प्रत्यय "इक" है ("इक" प्रत्यय जुड़ने पर प्रथम स्वर में आदि-वृद्धि होकर "स" का "सा" हो जाता है, जैसे इतिहास + इक = ऐतिहासिक)।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-hin-6',
    topicId: 'ett-hindi-4',
    subjectId: 'ett-hindi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level B)',
    question: {
      en: 'Which option correctly lists three authentic Synonyms (पर्यायवाची शब्द) of "कमल" (Lotus) and the exact Antonym (विलोम शब्द) of "स्थावर" (Immovable/Stationary)?',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਵਿਕਲਪ ਕ੍ਰਮਵਾਰ "कमल" (ਕਮਲ) ਦੇ ਤਿੰਨ ਸਹੀ ਸਮਾਨਾਰਥਕ (पर्यायवाची) ਸ਼ਬਦ ਅਤੇ "स्थावर" ਦਾ ਸਹੀ ਵਿਰੋਧਾਰਥਕ (विलोम) ਸ਼ਬਦ ਦਰਸਾਉਂਦਾ ਹੈ?',
      hi: 'निम्नलिखित में से कौन-सा विकल्प क्रमशः "कमल" के तीन सही पर्यायवाची शब्द और "स्थावर" का सही विलोम शब्द दर्शाता है?',
    },
    options: {
      A: {
        en: 'Synonyms of कमल: पंकज, जलज, नीरज (born in mud/water); Antonym of स्थावर: जंगम (movable)',
        pa: '"कमल" ਦੇ ਸਮਾਨਾਰਥਕ: पंकज, जलज, नीरज; "स्थावर" ਦਾ ਵਿਲੋਮ: जंगम',
        hi: '"कमल" के पर्यायवाची: पंकज, जलज, नीरज; "स्थावर" का विलोम: जंगम',
      },
      B: {
        en: 'Synonyms of कमल: जलद, नीरद, वारिद; Antonym of स्थावर: स्थिर',
        pa: '"कमल" ਦੇ ਸਮਾਨਾਰਥਕ: जलद, नीरद, वारिद; "स्थावर" ਦਾ ਵਿਲੋਮ: स्थिर',
        hi: '"कमल" के पर्यायवाची: जलद, नीरद, वारिद; "स्थावर" का विलोम: स्थिर',
      },
      C: {
        en: 'Synonyms of कमल: जलधि, नीरधि, पयोधि; Antonym of स्थावर: अचल',
        pa: '"कमल" ਦੇ ਸਮਾਨਾਰਥਕ: जलधि, नीरधि, पयोधि; "स्थावर" ਦਾ ਵਿਲੋਮ: अचल',
        hi: '"कमल" के पर्यायवाची: जलधि, नीरधि, पयोधि; "स्थावर" का विलोम: अचल',
      },
      D: {
        en: 'Synonyms of कमल: भानु, भास्कर, दिवाकर; Antonym of स्थावर: चेतन',
        pa: '"कमल" ਦੇ ਸਮਾਨਾਰਥਕ: भानु, भास्कर, दिवाकर; "स्थावर" ਦਾ ਵਿਲੋਮ: चेतन',
        hi: '"कमल" के पर्यायवाची: भानु, भास्कर, दिवाकर; "स्थावर" का विलोम: चेतन',
      },
    },
    correct: 'A',
    explanation: {
      en: 'Adding "-ज" (born of) to words for water/mud yields synonyms of Lotus (कमल): पंकज, जलज, नीरज, सरोज, अरविंद, राजीव. (Adding "-द" gives Cloud/बादल: जलद, नीरद; adding "-धि" gives Ocean/समुद्र: जलधि, नीरधि). The classic antonym of "स्थावर" (immovable/stationary) is "जंगम" (movable), while the antonym of "जड़" is "चेतन".',
      pa: 'ਪਾਣੀ ਦੇ ਸਮਾਨਾਰਥਕ ਸ਼ਬਦਾਂ ਪਿੱਛੇ "ज" (ਜਨਮ ਲੈਣ ਵਾਲਾ) ਲਗਾਉਣ ਨਾਲ "कमल" ਦੇ ਸਮਾਨਾਰਥਕ ਬਣਦੇ ਹਨ: पंकज, जलज, नीरज, सरोज (ਜਦਕਿ "द" ਨਾਲ ਬੱਦਲ—जलद, नीरद ਅਤੇ "धि" ਨਾਲ ਸਮੁੰਦਰ—जलधि ਬਣਦੇ ਹਨ)। "स्थावर" (ਸਥਿਰ) ਦਾ ਸਹੀ ਵਿਲੋਮ ਸ਼ਬਦ "जंगम" (ਗਤੀਸ਼ੀਲ) ਹੈ।',
      hi: 'जल के पर्यायवाची शब्दों में "ज" (जन्म लेने वाला) जोड़ने से "कमल" के पर्यायवाची बनते हैं: पंकज, जलज, नीरज, सरोज, राजीव (जबकि "द" से बादल—जलद, नीरद और "धि" से समुद्र—जलधि बनते हैं)। "स्थावर" का सटीक विलोम शब्द "जंगम" है।',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-hin-7',
    topicId: 'ett-hindi-4',
    subjectId: 'ett-hindi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'In Hindi polysemous vocabulary (अनेकार्थी शब्द), which three distinct meanings are carried by the word "कनक" (famous from the couplet "कनक कनक ते सौ गुनी मादकता अधिकाय")?',
      pa: 'ਹਿੰਦੀ ਦੇ ਅਨੇਕਾਰਥੀ ਸ਼ਬਦਾਂ (अनेकार्थी शब्द) ਵਿੱਚ "कनक" ਸ਼ਬਦ ਦੇ ਤਿੰਨ ਪ੍ਰਮੁੱਖ ਅਰਥ ਕਿਹੜੇ ਹਨ?',
      hi: 'हिंदी के अनेकार्थी शब्दों में "कनक" शब्द के तीन प्रमुख अर्थ कौन-से हैं (जो "कनक कनक ते सौ गुनी मादकता अधिकाय" दोहे में भी प्रयुक्त हैं)?',
    },
    options: {
      A: {
        en: 'सोना (Gold), धतूरा (Thorn-apple / Datura), और गेहूँ (Wheat)',
        pa: 'सोना (ਸੋਨਾ), धतूरा (ਧਤੂਰਾ), ਅਤੇ गेहूँ (ਕਣਕ)',
        hi: 'सोना (स्वर्ण), धतूरा, और गेहूँ (तथा पलाश)',
      },
      B: {
        en: 'चाँदी (Silver), कमल (Lotus), और बादल (Cloud)',
        pa: 'चाँदी (ਚਾਂਦੀ), कमल (ਕਮਲ), ਅਤੇ बादल (ਬੱਦਲ)',
        hi: 'चाँदी, कमल, और बादल',
      },
      C: {
        en: 'पानी (Water), मोती (Pearl), और चमक (Lustre)',
        pa: 'पानी (ਪਾਣੀ), मोती (ਮੋਤੀ), ਅਤੇ चमक (ਚਮਕ)',
        hi: 'पानी, मोती, और चमक (प्रतिष्ठा)',
      },
      D: {
        en: 'बाल (Hair), सेना (Army), और पत्ता (Leaf)',
        pa: 'बाल (ਵਾਲ), सेना (ਫ਼ੌਜ), ਅਤੇ पत्ता (ਪੱਤਾ)',
        hi: 'बाल, सेना, और पत्ता',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Hindi, "कनक" is a famous Anekarthi (polysemous) word meaning: (1) सोना (Gold), (2) धतूरा (Datura — intoxicating plant), and (3) गेहूँ (Wheat) / पलाश. Note that Option C (पानी, मोती, चमक/मान-सम्मान) gives the three meanings of "पानी" in "रहिमन पानी राखिए", and Option D gives meanings of "दल" / "कच".',
      pa: 'ਹਿੰਦੀ ਵਿੱਚ "कनक" ਇੱਕ ਪ੍ਰਸਿੱਧ ਅਨੇਕਾਰਥੀ ਸ਼ਬਦ ਹੈ ਜਿਸ ਦੇ ਮੁੱਖ ਅਰਥ ਹਨ: ਸੋਨਾ (स्वर्ण), ਧਤੂਰਾ (धतूरा), ਅਤੇ ਕਣਕ (गेहूँ)। (ਵਿਕਲਪ C ਵਿੱਚ "पानी" ਸ਼ਬਦ ਦੇ ਤਿੰਨ ਅਰਥ—ਪਾਣੀ, ਮੋਤੀ ਦੀ ਚਮਕ ਅਤੇ ਇੱਜ਼ਤ—ਦਿੱਤੇ ਗਏ ਹਨ)।',
      hi: 'हिंदी में "कनक" एक प्रसिद्ध अनेकार्थी शब्द है जिसके प्रमुख अर्थ हैं: सोना (स्वर्ण), धतूरा, और गेहूँ (तथा पलाश)। (विकल्प C में "पानी" के तीन अर्थ—जल, मोती की चमक और मान-सम्मान—दिए गए हैं)।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-hin-8',
    topicId: 'ett-hindi-4',
    subjectId: 'ett-hindi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level A)',
    question: {
      en: 'Choose the option in which ALL FOUR Hindi words are written with 100% orthographically correct spelling (शुद्ध वर्तनी):',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਉਹ ਵਿਕਲਪ ਚੁਣੋ ਜਿਸ ਵਿੱਚ ਸਾਰੇ ਚਾਰੇ ਹਿੰਦੀ ਸ਼ਬਦ ਬਿਲਕੁਲ ਸ਼ੁੱਧ (शुद्ध वर्तनी) ਲਿਖੇ ਹੋਏ ਹਨ:',
      hi: 'निम्नलिखित में से वह विकल्प चुनें जिसमें सभी चारों हिंदी शब्द वर्तनी की दृष्टि से पूर्णतः शुद्ध (शुद्ध वर्तनी) लिखे गए हैं:',
    },
    options: {
      A: {
        en: 'कवयित्री, उज्ज्वल, आशीर्वाद, जीजीविषा',
        pa: 'कवयित्री, उज्ज्वल, आशीर्वाद, जीजीविषा',
        hi: 'कवयित्री, उज्ज्वल, आशीर्वाद, जिजीविषा (कवयित्री, उज्ज्वल, आशीर्वाद)',
      },
      B: {
        en: 'कवियत्री, उज्वल, आर्शीवाद, जिजीविषा',
        pa: 'कवियत्री, उज्वल, आर्शीवाद, जिजीविषा',
        hi: 'कवियत्री, उज्वल, आर्शीवाद, जिजीविषा',
      },
      C: {
        en: 'कवयित्री, उज्जवल, आशीर्वाद, पूज्यनीय',
        pa: 'कवयित्री, उज्जवल, आशीर्वाद, पूज्यनीय',
        hi: 'कवयित्री, उज्जवल, आशीर्वाद, पूज्यनीय',
      },
      D: {
        en: 'कवयीत्री, उज्ज्वल, आशिर्वाद, संयासी',
        pa: 'कवयीत्री, उज्ज्वल, आशिर्वाद, संयासी',
        hi: 'कवयीत्री, उज्ज्वल, आशिर्वाद, संयासी',
      },
    },
    correct: 'A',
    explanation: {
      en: '(1) The feminine of "कवि" is spelled "कवयित्री" (no matra on व, chhoti इ on य). (2) "उत् + ज्वल" by consonant sandhi has TWO half-j\'s: "उज्ज्वल". (3) In "आशीर्वाद" (आशीः + वाद), the Reph (र्) is pronounced after शी and therefore placed on top of वा ("आशीर्वाद", NOT "आर्शीवाद"). Note: in Option C, "पूज्यनीय" is incorrect (correct forms are "पूजनीय" or "पूज्य"), and in Option D, "संयासी" is incorrect (correct is "संन्यासी").',
      pa: '(1) "कवि" ਦਾ ਇਸਤਰੀ ਲਿੰਗ "कवयित्री" ਹੁੰਦਾ ਹੈ ("व" ਉੱਤੇ ਸਿਹਾਰੀ ਨਹੀਂ ਲੱਗਦੀ)। (2) "उत् + ज्वल = उज्ज्वल" ਵਿੱਚ ਦੋ ਅੱਧੇ "ज" (ज्ज्व) ਆਉਂਦੇ ਹਨ। (3) "आशीर्वाद" ਵਿੱਚ "र" ਦੀ ਰੇਫ਼ "वा" ਦੇ ਉੱਪਰ ਲੱਗਦੀ ਹੈ ("आर्शीवाद" ਗ਼ਲਤ ਹੈ)। ("पूज्यनीय" ਗ਼ਲਤ ਹੈ, ਸ਼ੁੱਧ ਰੂਪ "पूजनीय" ਜਾਂ "पूज्य" ਹੁੰਦਾ ਹੈ)।',
      hi: '(1) "कवि" का स्त्रीलिंग "कवयित्री" होता है ("व" पर मात्रा नहीं लगती)। (2) "उत् + ज्वल = उज्ज्वल" में दो आधे "ज" (ज्ज्व) होते हैं। (3) "आशीर्वाद" में रेफ़ (र्) "वा" के ऊपर लगता है ("आर्शीवाद" अशुद्ध है)। (विकल्प C में "पूज्यनीय" अशुद्ध है, शुद्ध शब्द "पूजनीय" या "पूज्य" होता है)।',
    },
    difficulty: 'hard',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-hin-9',
    topicId: 'ett-hindi-4',
    subjectId: 'ett-hindi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level I)',
    question: {
      en: 'Match the following Hindi idioms and proverbs (मुहावरे एवं लोकोक्तियाँ) with their exact meanings:\n1. "गागर में सागर भरना"\n2. "अंधों में काना राजा"\n3. "नाच न जाने आँगन टेढ़ा"',
      pa: 'ਹੇਠ ਲਿਖੇ ਹਿੰਦੀ ਮੁਹਾਵਰਿਆਂ ਅਤੇ ਲੋਕੋਕਤੀਆਂ ਦਾ ਉਹਨਾਂ ਦੇ ਸਹੀ ਅਰਥਾਂ ਨਾਲ ਮਿਲਾਨ ਕਰੋ:\n1. "गागर में सागर भरना"\n2. "अंधों में काना राजा"\n3. "नाच न जाने आँगन टेढ़ा"',
      hi: 'निम्नलिखित हिंदी मुहावरों एवं लोकोक्तियों का उनके सही अर्थों के साथ मिलान करें:\n1. "गागर में सागर भरना"\n2. "अंधों में काना राजा"\n3. "नाच न जाने आँगन टेढ़ा"',
    },
    options: {
      A: {
        en: '1 → थोड़े शब्दों में बहुत गहरी/बड़ी बात कहना; 2 → मूर्खों या अज्ञानियों के बीच कम ज्ञान वाले को भी श्रेष्ठ माना जाना; 3 → स्वयं काम न आने पर साधन या दूसरों में दोष निकालना',
        pa: '1 → ਥੋੜ੍ਹੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਬਹੁਤ ਵੱਡੀ/ਡੂੰਘੀ ਗੱਲ ਕਹਿਣਾ (ਕੁੱਜੇ ਵਿੱਚ ਸਮੁੰਦਰ ਬੰਦ ਕਰਨਾ); 2 → ਮੂਰਖਾਂ ਵਿੱਚ ਘੱਟ ਗਿਆਨ ਵਾਲੇ ਨੂੰ ਵੀ ਸਿਆਣਾ ਮੰਨਿਆ ਜਾਣਾ (ਅੰਨ੍ਹਿਆਂ ਵਿੱਚ ਕਾਣਾ ਰਾਜਾ); 3 → ਆਪ ਕੰਮ ਨਾ ਆਉਣ ਤੇ ਸਾਧਨਾਂ ਵਿੱਚ ਨੁਕਸ ਕੱਢਣਾ (ਨਾਚ ਨਾ ਜਾਣੇ ਵਿਹੜਾ ਡਿੰਗਾ)',
        hi: '1 → थोड़े शब्दों में बहुत गहरी/बड़ी बात कहना; 2 → मूर्खों या अज्ञानियों के बीच अल्पज्ञ को भी श्रेष्ठ माना जाना; 3 → स्वयं काम न आने पर साधन या दूसरों में दोष निकालना',
      },
      B: {
        en: '1 → छोटे बर्तन में समुद्र का पानी भरना; 2 → अंधे लोगों का राजा बनना; 3 → आँगन की मरम्मत करवाना',
        pa: '1 → ਛੋਟੇ ਘੜੇ ਵਿੱਚ ਸਮੁੰਦਰ ਦਾ ਪਾਣੀ ਭਰਨਾ; 2 → ਅੰਨ੍ਹੇ ਲੋਕਾਂ ਦਾ ਰਾਜਾ ਬਣਨਾ; 3 → ਵਿਹੜੇ ਦੀ ਮੁਰੰਮਤ ਕਰਵਾਉਣਾ',
        hi: '1 → छोटे बर्तन में समुद्र का पानी भरना; 2 → अंधे लोगों का राजा बनना; 3 → आँगन की मरम्मत करवाना',
      },
      C: {
        en: '1 → बहुत अधिक बोलना; 2 → विद्वानों की सभा में सम्मान पाना; 3 → नृत्य कला में निपुण होना',
        pa: '1 → ਬਹੁਤ ਜ਼ਿਆਦਾ ਬੋਲਣਾ; 2 → ਵਿਦਵਾਨਾਂ ਦੀ ਸਭਾ ਵਿੱਚ ਸਨਮਾਨ ਪਾਉਣਾ; 3 → ਨਾਚ ਕਲਾ ਵਿੱਚ ਮਾਹਰ ਹੋਣਾ',
        hi: '1 → बहुत अधिक बोलना; 2 → विद्वानों की सभा में सम्मान पाना; 3 → नृत्य कला में निपुण होना',
      },
      D: {
        en: '1 → असंभव कार्य करना; 2 → कपटी मित्र होना; 3 → बिना परिश्रम के फल पाना',
        pa: '1 → ਅਸੰਭਵ ਕੰਮ ਕਰਨਾ; 2 → ਕਪਟੀ ਮਿੱਤਰ ਹੋਣਾ; 3 → ਬਿਨਾਂ ਮਿਹਨਤ ਦੇ ਫਲ਼ ਮਿਲਣਾ',
        hi: '1 → असंभव कार्य करना; 2 → कपटी मित्र होना; 3 → बिना परिश्रम के फल पाना',
      },
    },
    correct: 'A',
    explanation: {
      en: '(1) "गागर में सागर भरना" (Punjabi equivalent: ਕੁੱਜੇ ਵਿੱਚ ਸਮੁੰਦਰ ਬੰਦ ਕਰਨਾ) means expressing profound wisdom in very few words (famous for Poet Bihari\'s couplets). (2) "अंधों में काना राजा" (ਅੰਨ੍ਹਿਆਂ ਵਿੱਚ ਕਾਣਾ ਰਾਜਾ) means a person of little knowledge being revered among the ignorant. (3) "नाच न जाने आँगन टेढ़ा" (ਨਾਚ ਨਾ ਜਾਣੇ ਵਿਹੜਾ ਡਿੰਗਾ) means a bad workman blames his tools.',
      pa: '(1) "गागर में सागर भरना" (ਪੰਜਾਬੀ: ਕੁੱਜੇ ਵਿੱਚ ਸਮੁੰਦਰ ਬੰਦ ਕਰਨਾ) = ਥੋੜ੍ਹੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਵੱਡੀ ਗੱਲ ਕਹਿਣਾ। (2) "अंधों में काना राजा" (ਅੰਨ੍ਹਿਆਂ ਵਿੱਚ ਕਾਣਾ ਰਾਜਾ) = ਮੂਰਖਾਂ ਵਿੱਚ ਥੋੜ੍ਹੇ ਗਿਆਨ ਵਾਲੇ ਦੀ ਪੁੱਛ ਹੋਣਾ। (3) "नाच न जाने आँगन टेढ़ा" (ਨਾਚ ਨਾ ਜਾਣੇ ਵਿਹੜਾ ਡਿੰਗਾ) = ਆਪਣੀ ਅਯੋਗਤਾ ਛੁਪਾਉਣ ਲਈ ਸਾਧਨਾਂ ਵਿੱਚ ਦੋਸ਼ ਕੱਢਣਾ।',
      hi: '(1) "गागर में सागर भरना" = थोड़े शब्दों में गूढ़ या बड़ी बात कहना (कवि बिहारी के दोहों के लिए प्रसिद्ध)। (2) "अंधों में काना राजा" = मूर्खों में अल्पज्ञानी का सम्मान होना। (3) "नाच न जाने आँगन टेढ़ा" = अपनी अयोग्यता छिपाने के लिए साधनों पर दोष मढ़ना।',
    },
    difficulty: 'medium',
    ...ETT_COMMON_META,
  },
  {
    id: 'q-ett-pb-hin-10',
    topicId: 'ett-hindi-4',
    subjectId: 'ett-hindi',
    examId: 'punjab-ett',
    examTag: 'Punjab ETT Paper B (Level B)',
    question: {
      en: 'Choose the most accurate Punjabi translation (ਪੰਜਾਬੀ ਅਨੁਵਾਦ) of the Hindi sentence: "परिश्रम ही सफलता की कुंजी है और समय अमूल्य धन है।"',
      pa: 'ਹਿੰਦੀ ਵਾਕ "परिश्रम ही सफलता की कुंजी है और समय अमूल्य धन है।" ਦਾ ਬਿਲਕੁਲ ਸਹੀ ਅਤੇ ਮਿਆਰੀ ਪੰਜਾਬੀ ਅਨੁਵਾਦ ਚੁਣੋ:',
      hi: 'हिंदी वाक्य "परिश्रम ही सफलता की कुंजी है और समय अमूल्य धन है।" का सबसे सटीक और मानक पंजाबी अनुवाद (ਪੰਜਾਬੀ ਅਨੁਵਾਦ) चुनें:',
    },
    options: {
      A: {
        en: 'ਮਿਹਨਤ ਹੀ ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ ਹੈ ਅਤੇ ਸਮਾਂ ਅਨਮੋਲ ਧਨ ਹੈ।',
        pa: 'ਮਿਹਨਤ ਹੀ ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ ਹੈ ਅਤੇ ਸਮਾਂ ਅਨਮੋਲ ਧਨ ਹੈ।',
        hi: 'ਮਿਹਨਤ ਹੀ ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ ਹੈ ਅਤੇ ਸਮਾਂ ਅਨਮੋਲ ਧਨ ਹੈ।',
      },
      B: {
        en: 'ਸਫ਼ਲਤਾ ਹੀ ਮਿਹਨਤ ਦੀ ਕੁੰਜੀ ਹੈ ਅਤੇ ਧਨ ਨਾਲ ਸਮਾਂ ਖਰੀਦਿਆ ਜਾ ਸਕਦਾ ਹੈ।',
        pa: 'ਸਫ਼ਲਤਾ ਹੀ ਮਿਹਨਤ ਦੀ ਕੁੰਜੀ ਹੈ ਅਤੇ ਧਨ ਨਾਲ ਸਮਾਂ ਖਰੀਦਿਆ ਜਾ ਸਕਦਾ ਹੈ।',
        hi: 'ਸਫ਼ਲਤਾ ਹੀ ਮਿਹਨਤ ਦੀ ਕੁੰਜੀ ਹੈ ਅਤੇ ਧਨ ਨਾਲ ਸਮਾਂ ਖਰੀਦਿਆ ਜਾ ਸਕਦਾ ਹੈ।',
      },
      C: {
        en: 'ਮਿਹਨਤ ਕਰਨ ਵਾਲੇ ਨੂੰ ਕਦੇ ਵੀ ਸਮੇਂ ਦੀ ਲੋੜ ਨਹੀਂ ਪੈਂਦੀ।',
        pa: 'ਮਿਹਨਤ ਕਰਨ ਵਾਲੇ ਨੂੰ ਕਦੇ ਵੀ ਸਮੇਂ ਦੀ ਲੋੜ ਨਹੀਂ ਪੈਂਦੀ।',
        hi: 'ਮਿਹਨਤ ਕਰਨ ਵਾਲੇ ਨੂੰ ਕਦੇ ਵੀ ਸਮੇਂ ਦੀ ਲੋੜ ਨਹੀਂ ਪੈਂਦੀ।',
      },
      D: {
        en: 'ਆਲਸ ਮਨੁੱਖ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਦੁਸ਼ਮਣ ਹੈ ਅਤੇ ਸਮਾਂ ਬੀਤ ਜਾਂਦਾ ਹੈ।',
        pa: 'ਆਲਸ ਮਨੁੱਖ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਦੁਸ਼ਮਣ ਹੈ ਅਤੇ ਸਮਾਂ ਬੀਤ ਜਾਂਦਾ ਹੈ।',
        hi: 'ਆਲਸ ਮਨੁੱਖ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਦੁਸ਼ਮਣ ਹੈ ਅਤੇ ਸਮਾਂ ਬੀਤ ਜਾਂਦਾ ਹੈ।',
      },
    },
    correct: 'A',
    explanation: {
      en: 'In Hindi-to-Punjabi translation (ਹਿੰਦੀ ਤੋਂ ਪੰਜਾਬੀ ਅਨੁਵਾਦ): "परिश्रम" translates to "ਮਿਹਨਤ", "ही" to "ਹੀ", "सफलता की कुंजी" to "ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ", "और" to "ਅਤੇ", "समय" to "ਸਮਾਂ", and "अमूल्य धन" to "ਅਨਮੋਲ (ਜਾਂ ਅਮੁੱਲਾ) ਧਨ", giving: "ਮਿਹਨਤ ਹੀ ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ ਹੈ ਅਤੇ ਸਮਾਂ ਅਨਮੋਲ ਧਨ ਹੈ।".',
      pa: 'ਹਿੰਦੀ ਤੋਂ ਪੰਜਾਬੀ ਅਨੁਵਾਦ ਵਿੱਚ "परिश्रम" = ਮਿਹਨਤ, "सफलता की कुंजी" = ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ, "और" = ਅਤੇ, "समय" = ਸਮਾਂ, ਅਤੇ "अमूल्य धन" = ਅਨਮੋਲ ਧਨ। ਇਸ ਲਈ ਸਹੀ ਅਨੁਵਾਦ ਹੈ: "ਮਿਹਨਤ ਹੀ ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ ਹੈ ਅਤੇ ਸਮਾਂ ਅਨਮੋਲ ਧਨ ਹੈ।"',
      hi: 'हिंदी से पंजाबी अनुवाद में "परिश्रम" = ਮਿਹਨਤ, "सफलता की कुंजी" = ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ, "और" = ਅਤੇ, "समय" = ਸਮਾਂ, तथा "अमूल्य धन" = ਅਨਮੋਲ ਧਨ। अतः सही अनुवाद है: "ਮਿਹਨਤ ਹੀ ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ ਹੈ ਅਤੇ ਸਮਾਂ ਅਨਮੋਲ ਧਨ ਹੈ।"',
    },
    difficulty: 'easy',
    ...ETT_COMMON_META,
  },
];
