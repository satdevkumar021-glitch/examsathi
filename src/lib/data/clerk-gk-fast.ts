import type { Lesson } from './lessons/types';
import data from './content/clerk-gk-100.json';
import type { Question } from './questions';
import type { Subject } from './exams';
const english = (en: string) => ({ en, hi: en, pa: en });
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
  const wrong = [item.wrong1, item.wrong2, item.wrong3];
  const options = Object.fromEntries(keys.map(key => [key, english(key === correct ? item.answer : wrong.shift()!)])) as Question['options'];
  return {
    id: `gk-revision-2026-${String(index + 1).padStart(3,'0')}`,
    topicId: 'clerk-gk-fast-practice', subjectId: 'clerk-gk-practice',
    examTag: 'AI-assisted original GK practice — independent review pending; NOT PYQ',
    subtopic: english(item.subject), question: english(item.prompt), options, correct,
    explanation: english(item.explanation), difficulty: 'easy', editorialStatus: 'authored',
    availableLanguages: ['en'], explanationLanguages: ['en'], source: references[item.subject],
  };
});
export const CLERK_GK_FAST_SUBJECT: Subject = {
  id: 'clerk-gk-practice', name: 'GK revision practice', nameHindi: 'सामान्य ज्ञान अभ्यास', namePunjabi: 'ਆਮ ਗਿਆਨ ਅਭਿਆਸ', emoji: '⚡',
  chapters: [{ id:'clerk-gk-fast', name:'100-question static GK set', nameHindi:'100 प्रश्नों का स्थिर GK सेट', namePunjabi:'100 ਸਵਾਲਾਂ ਦਾ ਸਥਿਰ GK ਸੈੱਟ',
    topics:[{id:'clerk-gk-fast-practice',name:'GK: Polity, History, Geography, Science and Punjab',nameHindi:'GK: राजव्यवस्था, इतिहास, भूगोल, विज्ञान और पंजाब',namePunjabi:'GK: ਰਾਜ ਪ੍ਰਬੰਧ, ਇਤਿਹਾਸ, ਭੂਗੋਲ, ਵਿਗਿਆਨ ਅਤੇ ਪੰਜਾਬ',
      subtopics:['20 questions per subject; English only; Hindi/Punjabi translation pending; independent review pending; original revision, not official paper'], examQuestions:'Practice only; no official topic allocation claimed',difficulty:'easy'}] }],
};

const escapeHtml = (value: string) => value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const revisionContent = '<p>AI-GENERATED revision sheet — independent editorial review pending. English only; Hindi and Punjabi translations pending. This is a static GK revision aid, not complete syllabus notes.</p>' + data.map(item => `<section><h3>${escapeHtml(item.subject)}: ${escapeHtml(item.prompt)}</h3><p><strong>${escapeHtml(item.answer)}</strong>. ${escapeHtml(item.explanation)}</p></section>`).join('');
export const CLERK_GK_FAST_LESSON: Lesson = {
 id:'clerk-gk-fast-practice',topicId:'clerk-gk-fast-practice',subjectId:'clerk-gk-practice',category:'general',
 title:{en:'GK revision sheet: 100 practice concepts',hi:'GK पुनरावृत्ति: 100 अभ्यास बिंदु',pa:'GK ਦੁਹਰਾਈ: 100 ਅਭਿਆਸ ਬਿੰਦੂ'},
 examRelevance:'Static GK revision for clerical preparation; not an official full-paper syllabus.',estimatedTime:'45 minutes',
 availableLanguages:['en'],coverageStatus:'foundation',editorialStatus:'authored',practiceSource:'authored-only',
 content:english(revisionContent),summary:english('Revise five areas: Indian polity, history, geography, science and Punjab GK. Distinguish adoption from commencement, units from quantities, and source facts from guessed current affairs.'),
 keyNotes:{en:['20 questions per subject.','Static facts only; no current-affairs coverage claimed.','Review explanations after submitting.'],hi:['English revision text; Hindi translation pending.'],pa:['English revision text; Punjabi translation pending.']},
 flashcards:data.map(item=>({q:english(item.prompt),a:english(`${item.answer}. ${item.explanation}`)})),videos:[],bookRefs:[],sources:Object.values(references),
};
