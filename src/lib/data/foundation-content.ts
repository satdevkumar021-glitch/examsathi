import data from './content/foundation-content.json';
import type { Question } from './questions';
import type { Lesson } from './lessons/types';
export type FoundationItem = typeof data[number]['items'][number];
export const FOUNDATION_CONTENT = data;
const english = (value: string) => ({ en: value, hi: value, pa: value });
const source = (group: string, subtopic = '') => group === 'regional' ? subtopic.startsWith('haryana-agri-') ? {title:'CCS Haryana Agricultural University — crop and farm learning resources',url:'https://hau.ac.in/'} : subtopic.startsWith('army-') ? {title:'Ministry of Defence — gallantry awards and service heritage',url:'https://www.gallantryawards.gov.in/'} : subtopic.startsWith('delhi-') ? {title:'New Delhi district — historical background',url:'https://dmnewdelhi.delhi.gov.in/history/'} : {title:'Haryana Government — historical and geographical background',url:'https://haryana.gov.in/'} : group === 'teaching' ? {title:'UGC NET — syllabus directory and research foundations',url:'https://www.ugcnetonline.in/syllabus-new.php'} : group === 'computer' ? {title:'NCERT textbooks and computer-science learning materials',url:'https://ncert.nic.in/textbook.php'} : {title:'NCERT textbooks and teacher education resources',url:'https://ncert.nic.in/textbook.php'};
const topicFor = (group: string, subtopic: string) => group === 'language' ? 'language-teaching-foundations' : group === 'teaching' ? 'teaching-aptitude' : group === 'hindi' ? 'hindi-vyakaran' : group === 'evs' ? 'primary-environmental-studies' : group === 'english' ? 'english-grammar-syntax' : group === 'regional' ? subtopic.split('/')[0] : group === 'computer' ? 'computer-awareness' : group === 'pedagogy' ? subtopic === 'Research' ? 'teaching-aptitude' : subtopic === 'Adolescence' ? 'cdp-adolescent' : 'child-development-pedagogy' : subtopic === 'Physics' ? 'physics-concepts' : subtopic === 'Chemistry' ? 'chemistry-concepts' : 'biology-concepts';
export const FOUNDATION_QUESTIONS: Question[] = data.flatMap(unit => unit.items.map((item,index) => {
 const correct = (['A','B','C','D'] as const)[index % 4];
 const wrong = [...item.distractors];
 const options = Object.fromEntries(['A','B','C','D'].map(key=>[key,english(key === correct ? item.answer : wrong.shift()!)])) as Question['options'];
 return {id:item.id,topicId:topicFor(unit.group,item.subtopic),subjectId:unit.group,examTag:'Original foundation practice — not a past paper',question:english(item.prompt),options,correct,explanation:english(item.explanation),subtopic:english(item.subtopic),difficulty:'medium' as const,availableLanguages:(unit.group === 'hindi' ? ['hi'] : ['en']) as ('en' | 'hi')[],editorialStatus:'authored' as const,source:source(unit.group,item.subtopic)};
}));
export function makeFoundationLesson(id: string, title: string, subjectId: string, items: FoundationItem[]): Lesson {
 const subtopics = [...new Set(items.map(item=>item.subtopic))];
 const sections = subtopics.map(subtopic=>({heading:english(subtopic),text:english(items.filter(item=>item.subtopic===subtopic).map(item=>`${item.prompt} ${item.answer}. ${item.explanation}`).join('\n\n'))}));
 const escape=(value:string)=>value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
 const content = sections.map(section=>`<h2>${escape(section.heading.en)}</h2><p>${escape(section.text.en).replace(/\n\n/g,'</p><p>')}</p>`).join('');
 return {id,topicId:id,subjectId,category:'general',title:english(title),examRelevance:'Foundation practice for mapped outlines. Detailed notification-specific alignment and independent review remain pending.',estimatedTime:`${Math.max(10,Math.ceil(content.split(/\s+/).length/160))} min`,content:english(content),summary:english(`Study the ${subtopics.join(', ')} units, explain each answer, then use the topic practice to check understanding. This is foundation content, not a complete official syllabus.`),keyNotes:englishArray(items.slice(0,12).map(item=>item.explanation)),flashcards:items.map(item=>({id:`card-${item.id}`,q:english(item.prompt),a:english(`${item.answer}. ${item.explanation}`)})),videos:[],bookRefs:[],sources:[source(subjectId)],sections,availableLanguages:['en'],coverageStatus:'foundation',editorialStatus:'authored'};
}
function englishArray(values: string[]) { return {en:values,hi:values,pa:values}; }
export const FOUNDATION_LESSONS: Record<string,Lesson> = Object.fromEntries([
 ['computer-awareness','Computer and digital-literacy foundations','computer'],
 ['child-development-pedagogy','Child development and classroom practice','pedagogy'],
 ['physics-concepts','Physics: concepts, units and applications','science'],
 ['chemistry-concepts','Chemistry: matter, reactions and separation','science'],
 ['biology-concepts','Biology: cells, systems and ecology','science'],
 ['hindi-vyakaran','Hindi grammar: examples and explanations','hindi'],
].map(([id,title,group])=>[id,makeFoundationLesson(id,title,group,data.find(unit=>unit.group===group)!.items.filter(item=>topicFor(group,item.subtopic)===id))]));
