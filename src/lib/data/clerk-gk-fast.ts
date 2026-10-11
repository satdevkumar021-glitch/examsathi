import type { Lesson } from './lessons/types';
import data from './content/clerk-gk-100.json';
import translated from './content/clerk-gk-translations.json';
import type { Question } from './questions';
import type { Subject } from './exams';
const text = (en: string, hi: string, pa: string) => ({en,hi,pa});
type Row = typeof data[number];
type TranslatedFields = Omit<Row, 'subject'>;
const translations = translated as Record<string, {hi:TranslatedFields;pa:TranslatedFields}>;
const field = (item:Row,key:keyof TranslatedFields) => text(item[key],translations[item.prompt].hi[key],translations[item.prompt].pa[key]);
const subjectName = (name:string) => text(name,({Polity:'राजव्यवस्था',History:'इतिहास',Geography:'भूगोल',Science:'विज्ञान','Punjab GK':'पंजाब सामान्य ज्ञान'} as Record<string,string>)[name],({Polity:'ਰਾਜ ਪ੍ਰਬੰਧ',History:'ਇਤਿਹਾਸ',Geography:'ਭੂਗੋਲ',Science:'ਵਿਗਿਆਨ','Punjab GK':'ਪੰਜਾਬ ਆਮ ਗਿਆਨ'} as Record<string,string>)[name]);
export const GK_TOPIC_IDS: Record<string, string> = {Polity:'gk-polity-foundation',History:'gk-history-foundation',Geography:'gk-geography-foundation',Science:'gk-science-foundation','Punjab GK':'gk-punjab-foundation'};
const keys = ['A', 'B', 'C', 'D'] as const;
const references: Record<string, {title:string;url:string}> = {
  Polity: { title: 'Study reference: Legislative Department — Constitution of India', url: 'https://legislative.gov.in/constitution-of-india/' },
  History: { title: 'Study reference: NCERT history textbooks', url: 'https://ncert.nic.in/textbook.php' },
  Geography: { title: 'Study reference: NCERT geography textbooks', url: 'https://ncert.nic.in/textbook.php' },
  Science: { title: 'Study reference: NCERT science textbooks', url: 'https://ncert.nic.in/textbook.php' },
  'Punjab GK': { title: 'Study reference: Punjab Government — Know Punjab', url: 'https://punjab.gov.in/know-punjab/' },
};
/** Original AI-assisted revision, not PYQs. Study references are not item-level review certificates. */
export const CLERK_GK_FAST_QUESTIONS: Question[] = data.map((item, index) => {
  const correct = keys[index % 4];
  const wrong: (keyof TranslatedFields)[] = ['wrong1','wrong2','wrong3'];
  const options = Object.fromEntries(keys.map(key => [key, field(item,key === correct ? 'answer' : wrong.shift()!)])) as Question['options'];
  return {
    id: `gk-revision-2026-${String(index + 1).padStart(3,'0')}`,
    topicId: GK_TOPIC_IDS[item.subject], subjectId: 'clerk-gk-practice',
    examTag: 'AI-assisted original GK practice — independent review pending; NOT PYQ',
    subtopic: subjectName(item.subject), question: field(item,'prompt'), options, correct,
    explanation: field(item,'explanation'), difficulty: 'easy', editorialStatus: 'authored',
    availableLanguages: ['en','hi','pa'], explanationLanguages: ['en','hi','pa'], source: references[item.subject],
  };
});
export const CLERK_GK_FAST_SUBJECT: Subject = {
  id: 'clerk-gk-practice', name: 'GK revision practice', nameHindi: 'सामान्य ज्ञान अभ्यास', namePunjabi: 'ਆਮ ਗਿਆਨ ਅਭਿਆਸ', emoji: '⚡',
  chapters: [{ id:'clerk-gk-fast', name:'100-question static GK set', nameHindi:'100 प्रश्नों का स्थिर GK सेट', namePunjabi:'100 ਸਵਾਲਾਂ ਦਾ ਸਥਿਰ GK ਸੈੱਟ',
    topics:[{id:'clerk-gk-fast-practice',name:'GK: Polity, History, Geography, Science and Punjab',nameHindi:'GK: राजव्यवस्था, इतिहास, भूगोल, विज्ञान और पंजाब',namePunjabi:'GK: ਰਾਜ ਪ੍ਰਬੰਧ, ਇਤਿਹਾਸ, ਭੂਗੋਲ, ਵਿਗਿਆਨ ਅਤੇ ਪੰਜਾਬ',
      subtopics:['20 questions per subject; English, Hindi and Punjabi; independent review pending; original revision, not official paper'], examQuestions:'Practice only; no official topic allocation claimed',difficulty:'easy'}, ...Object.entries(GK_TOPIC_IDS).map(([name,id])=>({id,name:`GK: ${name}`,nameHindi:({Polity:'राजव्यवस्था',History:'इतिहास',Geography:'भूगोल',Science:'विज्ञान','Punjab GK':'पंजाब सामान्य ज्ञान'} as Record<string,string>)[name],namePunjabi:({Polity:'ਰਾਜ ਪ੍ਰਬੰਧ',History:'ਇਤਿਹਾਸ',Geography:'ਭੂਗੋਲ',Science:'ਵਿਗਿਆਨ','Punjab GK':'ਪੰਜਾਬ ਆਮ ਗਿਆਨ'} as Record<string,string>)[name],subtopics:['20 original practice questions; independent editorial review pending'],examQuestions:'Practice only',difficulty:'easy' as const}))] }],
};

const escapeHtml = (value: string) => value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const warning = text('AI-GENERATED revision sheet and translations — independent editorial review pending. This is a static GK revision aid, not complete syllabus notes.','AI-जनित पुनरावृत्ति और अनुवाद — स्वतंत्र समीक्षा बाकी है। यह स्थिर सामान्य ज्ञान अभ्यास है, पूरा पाठ्यक्रम नहीं।','AI ਦੁਆਰਾ ਬਣਾਈ ਦੁਹਰਾਈ ਅਤੇ ਅਨੁਵਾਦ — ਸੁਤੰਤਰ ਸਮੀਖਿਆ ਬਾਕੀ ਹੈ। ਇਹ ਸਥਿਰ ਆਮ ਗਿਆਨ ਦਾ ਅਭਿਆਸ ਹੈ, ਪੂਰਾ ਸਿਲੇਬਸ ਨਹੀਂ।');
const summary = text('Revise Indian polity, history, geography, science and Punjab GK. Review each explanation after practice.','भारतीय राजव्यवस्था, इतिहास, भूगोल, विज्ञान और पंजाब सामान्य ज्ञान दोहराएँ। अभ्यास के बाद हर व्याख्या पढ़ें।','ਭਾਰਤੀ ਰਾਜ ਪ੍ਰਬੰਧ, ਇਤਿਹਾਸ, ਭੂਗੋਲ, ਵਿਗਿਆਨ ਅਤੇ ਪੰਜਾਬ ਆਮ ਗਿਆਨ ਦੁਹਰਾਓ। ਅਭਿਆਸ ਤੋਂ ਬਾਅਦ ਹਰ ਵਿਆਖਿਆ ਪੜ੍ਹੋ।');
function makeLesson(id:string, rows:Row[], subject?:string):Lesson {
 const content = Object.fromEntries((['en','hi','pa'] as const).map(lang=>[lang,`<p>${warning[lang]}</p>`+rows.map(item=>`<section><h3>${escapeHtml(subjectName(item.subject)[lang])}: ${escapeHtml(field(item,'prompt')[lang])}</h3><p><strong>${escapeHtml(field(item,'answer')[lang])}</strong>. ${escapeHtml(field(item,'explanation')[lang])}</p></section>`).join('')])) as Lesson['content'];
 return {
 id,topicId:id,subjectId:'clerk-gk-practice',category:'general',
 title:subject?subjectName(subject):text('GK revision sheet: 100 practice concepts','GK पुनरावृत्ति: 100 अभ्यास बिंदु','GK ਦੁਹਰਾਈ: 100 ਅਭਿਆਸ ਬਿੰਦੂ'),
 examRelevance:'Static GK revision for clerical preparation; not an official full-paper syllabus.',estimatedTime:subject?'10 minutes':'45 minutes',
 availableLanguages:['en','hi','pa'],coverageStatus:'foundation',editorialStatus:'authored',practiceSource:'authored-only',content,summary,
 keyNotes:{en:['20 questions per subject.','Static facts; not current affairs.','Independent editorial and translation review pending.'],hi:['हर विषय में 20 प्रश्न।','स्थिर तथ्य; समसामयिकी नहीं।','स्वतंत्र संपादकीय और अनुवाद समीक्षा बाकी है।'],pa:['ਹਰ ਵਿਸ਼ੇ ਵਿੱਚ 20 ਸਵਾਲ।','ਸਥਿਰ ਤੱਥ; ਚਾਲੂ ਘਟਨਾਵਾਂ ਨਹੀਂ।','ਸੁਤੰਤਰ ਸੰਪਾਦਕੀ ਅਤੇ ਅਨੁਵਾਦ ਸਮੀਖਿਆ ਬਾਕੀ ਹੈ।']},
 flashcards:rows.map(item=>({q:field(item,'prompt'),a:Object.fromEntries((['en','hi','pa'] as const).map(lang=>[lang,`${field(item,'answer')[lang]}. ${field(item,'explanation')[lang]}`])) as Lesson['summary']})),videos:[],bookRefs:[],sources:subject?[references[subject]]:Object.values(references),
 };
}
export const CLERK_GK_FAST_LESSON = makeLesson('clerk-gk-fast-practice',data);
export const CLERK_GK_FAST_LESSONS: Record<string, Lesson> = {'clerk-gk-fast-practice': CLERK_GK_FAST_LESSON,...Object.fromEntries(Object.entries(GK_TOPIC_IDS).map(([subject,id])=>[id,makeLesson(id,data.filter(item=>item.subject===subject),subject)]))};
