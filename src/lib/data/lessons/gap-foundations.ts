import type { Lesson } from './types';
import { FOUNDATION_CONTENT, makeFoundationLesson } from '../foundation-content';
const text = (en: string) => ({en,hi:en,pa:en});
/** Named preparation modules. Presence is explicitly foundational, never a completeness claim. */
const plans: Array<[string,string,string[]]> = [
 ['punjab-history-deep','Punjab history: institutions, Sikh period and colonial change',['sst-punjab-history-deep','sst-punjab-sikh']],
 ['raj-history-police','Rajasthan history and heritage',['raj-history-pratap','raj-culture-festivals']],
 ['science-tech-police','Science, technology and digital literacy',['physics-concepts','chemistry-concepts','biology-concepts','computer-awareness']],
 ['rajasthan-heritage-forts','Rajasthan forts, culture and historical interpretation',['raj-history-pratap','raj-culture-festivals']],
 ['hindi-grammar-deep','Hindi grammar: sentence structure and word formation',['hindi-vyakaran']],
 ['cdp-htet-l1','Primary child development and inclusive pedagogy',['child-development-pedagogy']],
 ['cdp-htet-l2','Adolescent learning and secondary-school pedagogy',['cdp-adolescent','child-development-pedagogy']],
 ['subject-specific-htet-l2','HTET subject foundations: mathematics, science and social studies',['mathematics-core','physics-concepts','chemistry-concepts','biology-concepts','sst-medieval-india','sst-india-geography','sst-fundamental-rights']],
 ['haryana-history-rakhigarhi','Haryana archaeology and historical chronology',[]],
 ['haryana-geography-rivers','Haryana relief, rivers and land use',[]],
 ['haryana-agri-husbandry','Haryana agriculture and animal husbandry',[]],
 ['computer-it-basics','Computer applications and office productivity',['computer-awareness']],
 ['delhi-historical-heritage','Delhi history: settlements, monuments and capital',[]],
 ['delhi-police-computer-apps','Delhi Police computer applications',['computer-awareness']],
 ['general-science-concepts','General science: physical, chemical and living systems',['physics-concepts','chemistry-concepts','biology-concepts']],
 ['elementary-mathematics','Elementary arithmetic: percentages, ratio, interest and measurement',['quantitative-aptitude','percent','ratio']],
 ['primary-mathematics','Primary mathematics and teaching',['mathematics-core']],
 ['primary-environmental-studies','Primary environmental studies and inquiry',[]],
 ['primary-language-one','Language I: comprehension and language teaching',['language-teaching-foundations']],
 ['primary-language-two','Language II: communication and second-language teaching',['language-teaching-foundations']],
 ['cdp-adolescent','Adolescent development, identity and learning',[]],
 ['social-studies-p2','Social studies: history, geography, civics and economy',['sst-harappa','sst-medieval-india','sst-national-movement','sst-india-geography','sst-fundamental-rights','sst-legislature','sst-indian-economy-deep']],
 ['teaching-aptitude','Teaching and research: evidence, assessment and ethics',[]],
 ['ict-net','ICT, information literacy and data interpretation',['computer-awareness','ssc-cgl-reasoning']],
 ['gk-agniveer','General knowledge foundations for Army preparation',['sst-national-movement','sst-fundamental-rights','sst-india-geography','army-military-heritage']],
 ['science-agniveer','General science and mathematics for Army preparation',['general-science-concepts','elementary-mathematics']],
 ['army-military-heritage','Armed Forces: ranks, honours and operations',[]],
 ['english-grammar-syntax','English grammar, comprehension and editing',[]],
];
const context: Record<string, Array<[string,string]>> = {
 'cdp-adolescent': [
  ["Identity and autonomy","Adolescence involves changing roles and increasing opportunities for independent decisions. Do not assume that every learner follows one fixed timetable or expresses identity in the same way. Offer choices with clear boundaries, listen without humiliation, and help learners examine reasons and consequences. Developmental theories are frameworks for interpretation rather than a diagnosis of a particular student."],
  ["Peer relationships","Belonging can influence participation, motivation and behaviour. A supportive classroom makes it possible to ask questions and admit uncertainty without ridicule. Plan collaborative tasks with clear roles and individual accountability. Respond to exclusion and bullying promptly; do not treat public embarrassment as a teaching strategy or assume every peer group has the same effects."],
  ["Reasoning and learning","Use problems requiring explanation, evidence and comparison of alternatives. Abstract ideas still benefit from concrete examples and representations. Ask learners to state assumptions, examine counterexamples and explain why a method applies. Prior knowledge and task familiarity affect performance, so one unsuccessful abstract task does not establish a permanent limit on ability."],
  ["Assessment and support","Use short diagnostic tasks to locate gaps before providing targeted practice. Formative feedback should identify a specific improvement and an opportunity to use it. A final test summarizes achievement; it does not replace ongoing observation. Distinguish an access barrier from a conceptual misunderstanding and provide suitable supports without lowering expectations indiscriminately."],
 ],
 'teaching-aptitude': [
  ["Teaching goals and methods","Start with a learning outcome stated as something a learner can explain, apply or evaluate. Choose examples and activities that make this outcome visible. A lecture can introduce a framework, discussion can compare interpretations, and practice can develop application. No single method is automatically best; the choice depends on the goal, learners, resources and evidence of learning."],
  ["Evidence and assessment","Assessment should elicit the capability that the learning goal describes. A recall question does not by itself demonstrate analysis, and a fast answer does not prove deep understanding. Use criteria to interpret responses, examine error patterns and provide actionable feedback. Consistency of scoring and validity of interpretation are related but different concerns."],
  ["Research designs","A research question defines what is being investigated. A hypothesis is a testable proposed explanation, not a conclusion guaranteed to be true. Descriptive designs describe patterns; an appropriate experimental design can investigate causal claims. Correlation alone cannot rule out confounding or reverse causation. Match the design and measurement to the claim being made."],
  ["Population and sampling","Define the population before choosing a sample. A sampling frame can omit relevant members, and a convenience sample can differ systematically from the intended population. A larger sample does not automatically remove selection bias. Report selection methods, limitations and uncertainty so readers can judge what the evidence supports and where generalization is unjustified."],
  ["Ethics and academic writing","Obtain appropriate consent, protect identifiable information and avoid collecting data unnecessary for the question. Participation should be voluntary and risks understood. Cite the ideas and evidence used, distinguish quotation from paraphrase, and never fabricate observations. A clear report explains the method and limitations so that its claims can be examined rather than accepted on authority alone."],
 ],
 'language-teaching-foundations': [
  ["Comprehension","Read for meaning rather than treating a passage as a collection of isolated difficult words. Identify the central claim, the evidence used and the relationships between sentences. Separate an explicitly stated fact from an inference or an unsupported assumption. When answering a comprehension question, locate the relevant evidence and check that the chosen option does not overstate the passage."],
  ["Language learning","Learners develop language through meaningful listening, speaking, reading and writing opportunities. Fluency and accuracy serve different purposes and both need support. During a meaning-focused conversation, correcting every minor error can interrupt participation; during a focused editing task, explicit feedback can be useful. Select feedback based on the purpose and the learner's current needs."],
  ["Multilingual classrooms","A learner's home language can support concepts, identity and participation. Comparing expressions across languages can reveal similarities and differences without ranking languages as superior or inferior. For Language I and Language II, confirm the languages permitted by the current examination bulletin and select different examination languages where required. These foundations do not supply every language-specific grammar or reading text."],
  ["Materials and assessment","Use accessible passages, stories, dialogue and purposeful writing tasks at an appropriate level. A grammar exercise can assess a selected rule but cannot capture all communication ability. Combine evidence from reading, discussion and writing, and explain success criteria. Diagnose whether difficulty arises from vocabulary, sentence structure, background knowledge or inference before prescribing more practice."],
  ["Remedial teaching","Target the actual difficulty with short, meaningful practice. For a reader who identifies facts but struggles with inference, ask for a conclusion and the clues supporting it. For a writer struggling with sentence boundaries, compare complete and incomplete examples and revise a short paragraph. Check later work for transfer; merely repeating the same exercise does not prove durable learning."],
 ],
 'primary-mathematics': [
  ["Numbers and place value","Use objects, drawings and place-value representations to connect quantities with numerals. Explain why ten units can be regrouped as one ten rather than teaching carrying as an unexplained trick. Compare numbers using value, not the apparent length of a spoken name. Ask learners to explain a grouping and verify it with another representation."],
  ["Operations and fractions","Connect addition and subtraction as related operations and multiplication with equal groups and arrays. A fraction refers to equal parts of a specified whole; the whole must be identified when comparing fractions. For example, one half of a small item need not be larger than one quarter of a much larger item. Use consistent wholes before introducing symbolic comparison."],
  ["Shapes and measurement","Identify shapes by properties such as sides and vertices, not only by a familiar orientation. Rotate a square and discuss which properties remain. Keep perimeter and area distinct: perimeter measures boundary length, while area measures covered surface using square units. Use a grid to justify why a rectangle's area equals the number of rows multiplied by the number of unit squares per row."],
  ["Time, money and data","Connect clock reading to elapsed-time problems and money calculations to clear units. When a price is expressed in rupees and paise, convert before combining values. Read a chart's title, labels and scale before comparing quantities. A larger picture in a pictograph represents a larger amount only if the key says so; an appealing image is not a substitute for a defined scale."],
  ["Teaching and diagnosis","Invite multiple solution methods and ask learners to compare them. A wrong answer can reveal a useful pattern: treating every operation as addition, ignoring regrouping, or counting unequal parts as equal fractions. Diagnose the reasoning with a short task, then provide a representation that tests the learner's rule. Assessment should include explanation as well as a final numerical answer."],
 ],
};
const ownSources: Record<string, Array<{title:string;url:string}>> = {
 'haryana-history-rakhigarhi':[{title:'Haryana Government — history',url:'https://haryana.gov.in/history/'}],
 'haryana-geography-rivers':[{title:'Haryana Government — geography',url:'https://haryana.gov.in/geography/'}],
 'haryana-agri-husbandry':[{title:'National Dairy Research Institute',url:'https://ndri.res.in/'},{title:'CCS Haryana Agricultural University',url:'https://hau.ac.in/'}],
 'delhi-historical-heritage':[{title:'New Delhi district — history',url:'https://dmnewdelhi.delhi.gov.in/history/'}],
 'rajasthan-heritage-forts':[{title:'UNESCO — Hill Forts of Rajasthan',url:'https://whc.unesco.org/en/list/247/'}],
 'army-military-heritage':[{title:'Ministry of Defence — Gallantry Awards',url:'https://www.gallantryawards.gov.in/'}],
 'teaching-aptitude':[{title:'UGC NET — publisher syllabus directory',url:'https://www.ugcnetonline.in/syllabus-new.php'}],
};
export function buildGapLessons(base: Record<string,Lesson>): Record<string,Lesson> {
 const result: Record<string,Lesson> = {};
 const customIds = ['language-teaching-foundations',...plans.filter(([, ,references])=>!references.length).map(([id])=>id),'primary-mathematics'];
 for(const id of customIds) {
  const items = FOUNDATION_CONTENT.flatMap(unit=>unit.items.filter(item=>unit.group === 'regional' ? item.subtopic.startsWith(id+'/') : id === 'language-teaching-foundations' ? unit.group === 'language' : id === 'english-grammar-syntax' ? unit.group === 'english' : id === 'primary-environmental-studies' ? unit.group === 'evs' : id === 'cdp-adolescent' ? unit.group === 'pedagogy' && item.subtopic === 'Adolescence' : id === 'teaching-aptitude' ? unit.group === 'teaching' || unit.group === 'pedagogy' && item.subtopic === 'Research' : false));
  const lesson=makeFoundationLesson(id,plans.find(([key])=>key===id)?.[1] || 'Language teaching foundations',id,items);
  for(const [heading,body] of context[id] || []) {
   lesson.sections!.push({heading:text(heading),text:text(body)});
   for(const language of ['en','hi','pa'] as const) lesson.content[language]+=`<h2>${heading}</h2><p>${body}</p>`;
  }
  if(ownSources[id])lesson.sources=ownSources[id];
  result[id]=lesson;
 }
 for(const [id,title,references] of plans) {
  if(result[id]) continue;
  const components=references.map(key=>result[key] || base[key]).filter((value):value is Lesson=>Boolean(value));
  if(!components.length)throw new Error(`No source content for ${id}`);
  const content=components.map(lesson=>`<h2>${lesson.title.en}</h2>${lesson.content.en}`).join('');
  result[id]={...components[0],id,topicId:id,title:text(title),content:text(content),
   summary:text(`Foundation module for ${title}. Review the linked sections and examples. Current recruitment-specific detail and independent editorial review remain pending.`),
   flashcards:[...new Map(components.flatMap(lesson=>lesson.flashcards).map(card=>[card.q.en,card])).values()],
   sources:[...new Map([...components.flatMap(lesson=>lesson.sources || []),...(ownSources[id] || [])].map(source=>[source.url,source])).values()],
   documents:[...new Map(components.flatMap(lesson=>lesson.documents || []).map(doc=>[doc.url,doc])).values()],
   availableLanguages:['en'],coverageStatus:'foundation',editorialStatus:'authored',videos:[],syllabusReference:undefined,
   examRelevance:'Foundation study module; verify the current notification. Combined subject modules require choosing the relevant subject in the official exam.',
  };
 }
 return result;
}
