import type { Subject, Topic } from './exams';

/** Archival mirror only: primary publication and amendments still need checking. */
export const CLERK_SYLLABUS_EVIDENCE = {
  notification: '11/2025 — regular Clerk',
  status: 'provisional-archive',
  publisher: 'PSSSB (document attribution; primary download pending)',
  officialUrl: 'https://sssb.punjab.gov.in',
  mirrorUrl: 'https://punjabjobalert.com/wp-content/uploads/2026/01/Syllabus-Clerk-Advt-11-of-2025.pdf',
  inspectedOn: '2026-10-10',
  warning: 'Preparation outline, not certified complete content. The mirror is not an authenticated primary download. Specialised Clerk posts have separate requirements.',
} as const;

function topic(id: string, en: string, hi: string, pa: string, subtopics: string[]): Topic {
  return { id, name: en, nameHindi: hi, namePunjabi: pa, subtopics,
    examQuestions: 'No topic-level allocation verified', difficulty: 'medium' };
}

/** Reuse canonical library IDs. Availability of an overview does not certify its subtopics. */
export const CLERK_SHARED_SUBJECTS: Subject[] = [
  {
    id: 'clerk-general-awareness', name: 'General awareness', nameHindi: 'सामान्य जागरूकता', namePunjabi: 'ਆਮ ਜਾਣਕਾਰੀ', emoji: '🌏',
    chapters: [{ id: 'clerk-gk-core', name: 'Static and current awareness', nameHindi: 'स्थिर और समसामयिक ज्ञान', namePunjabi: 'ਸਥਿਰ ਅਤੇ ਸਮਕਾਲੀ ਗਿਆਨ', topics: [
      topic('constitution', 'Indian polity', 'भारतीय राजव्यवस्था', 'ਭਾਰਤੀ ਰਾਜ ਪ੍ਰਬੰਧ', ['Constitutional and governance issues']),
      topic('sst-geo-environment', 'Environment', 'पर्यावरण', 'ਵਾਤਾਵਰਨ', ['Environmental issues']),
      topic('clerk-current-affairs', 'Current affairs', 'समसामयिकी', 'ਸਮਕਾਲੀ ਘਟਨਾਵਾਂ', ['National and international developments; dated source review required']),
      topic('general-science-concepts', 'Science and technology', 'विज्ञान और प्रौद्योगिकी', 'ਵਿਗਿਆਨ ਅਤੇ ਤਕਨਾਲੋਜੀ', ['Scientific and technological developments']),
      topic('indian-economy', 'Economy', 'अर्थव्यवस्था', 'ਅਰਥਵਿਵਸਥਾ', ['Economic issues']),
      topic('modern-india', 'Indian history and independence', 'भारतीय इतिहास और स्वतंत्रता', 'ਭਾਰਤੀ ਇਤਿਹਾਸ ਅਤੇ ਆਜ਼ਾਦੀ', ['Indian history; special emphasis on freedom struggle']),
      topic('clerk-sports', 'Sports', 'खेल', 'ਖੇਡਾਂ', ['Sporting events and developments']),
      topic('clerk-cinema-literature', 'Cinema and literature', 'सिनेमा और साहित्य', 'ਸਿਨੇਮਾ ਅਤੇ ਸਾਹਿਤ', ['Cinema; literature']),
      topic('physical-geography', 'Geography', 'भूगोल', 'ਭੂਗੋਲ', ['Geographical concepts and issues']),
    ] }],
  },
  {
    id: 'clerk-reasoning', name: 'Reasoning and numerical skills', nameHindi: 'तर्क और संख्यात्मक कौशल', namePunjabi: 'ਤਰਕ ਅਤੇ ਅੰਕੀ ਹੁਨਰ', emoji: '🧩',
    chapters: [{ id: 'clerk-reasoning-core', name: 'Reasoning, numbers and data', nameHindi: 'तर्क, संख्याएँ और आँकड़े', namePunjabi: 'ਤਰਕ, ਅੰਕ ਅਤੇ ਅੰਕੜੇ', topics: [
      topic('ssc-cgl-reasoning', 'Logical and analytical reasoning', 'तार्किक और विश्लेषणात्मक क्षमता', 'ਤਰਕਸ਼ੀਲ ਅਤੇ ਵਿਸ਼ਲੇਸ਼ਣਾਤਮਕ ਯੋਗਤਾ', ['Logical, analytical and mental ability; shared foundation, Clerk depth review pending']),
      topic('clerk-data-analysis', 'Data interpretation', 'आँकड़ा विश्लेषण', 'ਅੰਕੜਾ ਵਿਸ਼ਲੇਸ਼ਣ', ['Charts; tables; graphical data; spreadsheets']),
    ] }],
  },
  {
    id: 'clerk-english', name: 'English language', nameHindi: 'अंग्रेजी भाषा', namePunjabi: 'ਅੰਗਰੇਜ਼ੀ ਭਾਸ਼ਾ', emoji: '🔤',
    chapters: [{ id: 'clerk-english-core', name: 'Grammar and vocabulary', nameHindi: 'व्याकरण और शब्दावली', namePunjabi: 'ਵਿਆਕਰਨ ਅਤੇ ਸ਼ਬਦਾਵਲੀ', topics: [
      topic('english-grammar-lit', 'English grammar and usage', 'अंग्रेजी व्याकरण और प्रयोग', 'ਅੰਗਰੇਜ਼ੀ ਵਿਆਕਰਨ ਅਤੇ ਵਰਤੋਂ', ['Sentence grammar; subject–verb agreement; modifiers; articles; prepositions; speech; voice; error correction; spelling; synonyms and antonyms; idioms; word substitution; gap filling']),
    ] }],
  },
  {
    id: 'clerk-punjabi-language', name: 'Part B Punjabi', nameHindi: 'भाग B पंजाबी', namePunjabi: 'ਭਾਗ ਬੀ ਪੰਜਾਬੀ', emoji: 'ੳ',
    chapters: [{ id: 'clerk-punjabi-core', name: 'Punjabi grammar and usage', nameHindi: 'पंजाबी व्याकरण और प्रयोग', namePunjabi: 'ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਅਤੇ ਵਰਤੋਂ', topics: [
      topic('punjabi-grammar', 'Punjabi language practice', 'पंजाबी भाषा अभ्यास', 'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਅਭਿਆਸ', ['Spelling and correction; affixes; synonyms and antonyms; nouns, pronouns and verbs; gender and number; proverbs and idioms; translation; word substitution']),
    ] }],
  },
];
