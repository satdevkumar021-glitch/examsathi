import { CLERK_GK_FAST_QUESTIONS } from './clerk-gk-fast';
import reasoningComputer from './content/clerk-extra-reasoning-computer.json';
import languages from './content/clerk-extra-languages.json';
import type { Question } from './questions';
import type { Subject } from './exams';
export const CLERK_REVISION_TOPIC = 'clerk-revision-200';
const subjectIds:Record<string,string>={'Reasoning & Maths':'clerk-revision-reasoning','Computer & ICT':'clerk-revision-computer','Punjabi Language':'clerk-revision-punjabi','English Language':'clerk-revision-english'};
const keys=['A','B','C','D'] as const;
export const CLERK_EXTRA_QUESTIONS:Question[]=[...reasoningComputer,...languages].map((item,index)=>{
 const correct=keys[(index*7+1)%4];
 const local=(field:'prompt'|'answer'|'wrong1'|'wrong2'|'wrong3'|'explanation')=>({en:item[field],hi:item.translations.hi[field],pa:item.translations.pa[field]});
 const wrong:('wrong1'|'wrong2'|'wrong3')[]=['wrong1','wrong2','wrong3'];
 return {id:`clerk-revision-extra-${String(index+1).padStart(3,'0')}`,topicId:subjectIds[item.subject],subjectId:'clerk-revision',question:local('prompt'),options:Object.fromEntries(keys.map(key=>[key,local(key===correct?'answer':wrong.shift()!)])) as Question['options'],correct,explanation:local('explanation'),difficulty:'easy',editorialStatus:'authored',availableLanguages:['en','hi','pa'],explanationLanguages:['en','hi','pa'],examTag:'AI-generated original practice; editorial and translation review pending; NOT PYQ'};
});
/** Fixed numbered revision sets: deterministic membership, 50 each, no cross-set repeats. Not an official-paper blueprint. */
export function clerkRevisionSet(setNumber:number):Question[]{
 if(!Number.isInteger(setNumber)||setNumber<1||setNumber>4)return [];
 return [...CLERK_GK_FAST_QUESTIONS,...CLERK_EXTRA_QUESTIONS].filter((_,index)=>index%4===setNumber-1);
}
export const CLERK_REVISION_SUBJECT:Subject={id:'clerk-revision',name:'Punjab Clerk revision sets',nameHindi:'पंजाब क्लर्क पुनरावृत्ति सेट',namePunjabi:'ਪੰਜਾਬ ਕਲਰਕ ਦੁਹਰਾਈ ਸੈੱਟ',emoji:'📝',chapters:[{id:'clerk-revision-pack',name:'Original mixed practice',nameHindi:'मौलिक मिश्रित अभ्यास',namePunjabi:'ਮੂਲ ਮਿਲਿਆ-ਜੁਲਿਆ ਅਭਿਆਸ',topics:[{id:CLERK_REVISION_TOPIC,name:'Punjab Clerk: 200-question revision pack',nameHindi:'पंजाब क्लर्क: 200 प्रश्न अभ्यास',namePunjabi:'ਪੰਜਾਬ ਕਲਰਕ: 200 ਸਵਾਲ ਅਭਿਆਸ',subtopics:['GK, Punjab GK, Reasoning, Maths, ICT, Punjabi and English. Partial static revision; current affairs and complete syllabus not covered.'],difficulty:'easy',examQuestions:'Practice allocation; not official pattern'},...Object.entries(subjectIds).map(([name,id])=>({id,name,nameHindi:({'Reasoning & Maths':'तर्कशक्ति और गणित','Computer & ICT':'कंप्यूटर और ICT','Punjabi Language':'पंजाबी भाषा','English Language':'अंग्रेजी भाषा'} as Record<string,string>)[name],namePunjabi:({'Reasoning & Maths':'ਤਰਕ ਸ਼ਕਤੀ ਅਤੇ ਗਣਿਤ','Computer & ICT':'ਕੰਪਿਊਟਰ ਅਤੇ ICT','Punjabi Language':'ਪੰਜਾਬੀ ਭਾਸ਼ਾ','English Language':'ਅੰਗਰੇਜ਼ੀ ਭਾਸ਼ਾ'} as Record<string,string>)[name],subtopics:['AI-generated original practice; independent review pending'],difficulty:'easy' as const,examQuestions:'Practice only'}))]}]};

import type { Lesson } from './lessons/types';
const escapeHtml=(value:string)=>value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const revisionSummary={en:'AI-generated practice explanations and recall cards. Independent editorial and translation review pending. Full teaching notes and full syllabus coverage remain incomplete.',hi:'AI-जनित अभ्यास व्याख्याएँ और पुनरावृत्ति कार्ड। स्वतंत्र संपादकीय और अनुवाद समीक्षा बाकी है। विस्तृत पाठ और पूरे पाठ्यक्रम का कवरेज अधूरा है।',pa:'AI ਦੁਆਰਾ ਬਣਾਈਆਂ ਅਭਿਆਸ ਵਿਆਖਿਆਵਾਂ ਅਤੇ ਦੁਹਰਾਈ ਕਾਰਡ। ਸੁਤੰਤਰ ਸੰਪਾਦਕੀ ਅਤੇ ਅਨੁਵਾਦ ਸਮੀਖਿਆ ਬਾਕੀ ਹੈ। ਵਿਸਤ੍ਰਿਤ ਪਾਠ ਅਤੇ ਪੂਰੇ ਸਿਲੇਬਸ ਦੀ ਸਮੱਗਰੀ ਅਧੂਰੀ ਹੈ।'};
export const CLERK_REVISION_LESSONS:Record<string,Lesson>=Object.fromEntries(CLERK_REVISION_SUBJECT.chapters[0].topics.map(topic=>{
 const qs=topic.id===CLERK_REVISION_TOPIC?[...CLERK_GK_FAST_QUESTIONS,...CLERK_EXTRA_QUESTIONS]:CLERK_EXTRA_QUESTIONS.filter(q=>q.topicId===topic.id);
 const content=Object.fromEntries((['en','hi','pa'] as const).map(lang=>[lang,`<p>${revisionSummary[lang]}</p>`+qs.map(q=>`<section><h3>${escapeHtml(q.question[lang] || q.question.en)}</h3><p><strong>${escapeHtml(q.options[q.correct][lang] || q.options[q.correct].en)}</strong></p><p>${escapeHtml(q.explanation[lang] || q.explanation.en)}</p></section>`).join('')])) as Lesson['content'];
 return [topic.id,{id:topic.id,topicId:topic.id,subjectId:'clerk-revision',category:'clerk',title:{en:topic.name,hi:topic.nameHindi||topic.name,pa:topic.namePunjabi||topic.name},examRelevance:'Original Punjab Clerk revision; not an official full-paper blueprint',estimatedTime:'20 minutes',practiceSource:'authored-only',availableLanguages:['en','hi','pa'],editorialStatus:'authored',coverageStatus:'foundation',content,summary:revisionSummary,keyNotes:{en:[revisionSummary.en],hi:[revisionSummary.hi],pa:[revisionSummary.pa]},flashcards:qs.map(q=>({q:{en:q.question.en,hi:q.question.hi,pa:q.question.pa||q.question.en},a:{en:`${q.options[q.correct].en}. ${q.explanation.en}`,hi:`${q.options[q.correct].hi}. ${q.explanation.hi}`,pa:`${q.options[q.correct].pa}. ${q.explanation.pa}`}})),videos:[],bookRefs:[]} satisfies Lesson];
}));
