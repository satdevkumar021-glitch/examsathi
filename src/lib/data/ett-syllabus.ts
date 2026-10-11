import subjectMap from './ett-subject-map.json';
import type { Subject, Topic } from './exams';
/** Archival research, not certification of the next recruitment's syllabus. */
export const ETT_SYLLABUS_REFERENCE = {
  recruitment: '5994 posts',
  paper: 'Paper B',
  version: 'Archival filename dated 1 December 2022',
  checkedOn: '2026-10-09',
  scanSha256: 'f88a56067d11e63db9acdec68d027fba21f6aa8b6b47478fff9e80beafd29bcd',
  transcriptionMethod: 'Visual inspection of all four scanned pages',
  status: 'publisher-unreachable' as const,
  publisher: 'https://educationrecruitmentboard.com/ETT5994/',
  mirror: 'https://entri.app/blog/wp-content/uploads/2022/12/SyllabusPaperB01_12_2022.pdf',
  upcomingNotification: 'pending' as const,
};

export const ETT_REFERENCE_SUBJECTS = [
  { name: 'Punjabi', hi: 'पंजाबी', pa: 'ਪੰਜਾਬੀ', marks: 40, status: 'Archival headings mapped; detailed teaching material pending' },
  { name: 'General Science', hi: 'सामान्य विज्ञान', pa: 'ਆਮ ਵਿਗਿਆਨ', marks: 40, status: 'Archival headings mapped; detailed teaching material pending' },
  { name: 'Mathematics', hi: 'गणित', pa: 'ਗਣਿਤ', marks: 40, status: 'Archival headings mapped; detailed teaching material pending' },
  { name: 'Social Science', hi: 'सामाजिक विज्ञान', pa: 'ਸਮਾਜਿਕ ਵਿਗਿਆਨ', marks: 40, status: 'Archival headings mapped; detailed teaching material pending' },
  { name: 'English', hi: 'अंग्रेज़ी', pa: 'ਅੰਗਰੇਜ਼ੀ', marks: 20, status: 'Archival headings mapped; detailed teaching material pending' },
  { name: 'Hindi', hi: 'हिंदी', pa: 'ਹਿੰਦੀ', marks: 20, status: 'Archival headings mapped; detailed teaching material pending' },
] as const;

// Unit names follow the archive. Subtopics are our teaching breakdown, not official wording.
export const ETT_SCIENCE_UNITS = [
  ['motion', 'Motion', 'गति', 'ਗਤੀ', ['Distance and displacement', 'Speed and velocity', 'Acceleration', 'Distance–time and velocity–time graphs']],
  ['force', 'Force and laws of motion', 'बल और गति के नियम', 'ਬਲ ਅਤੇ ਗਤੀ ਦੇ ਨਿਯਮ', ['Inertia', 'Newton’s laws', 'Momentum', 'Conservation of momentum']],
  ['gravitation', 'Gravitation', 'गुरुत्वाकर्षण', 'ਗੁਰੁਤਵਾਕਰਸ਼ਣ', ['Universal gravitation', 'Free fall', 'Mass and weight', 'Buoyancy and Archimedes’ principle']],
  ['work-energy', 'Work and energy', 'कार्य और ऊर्जा', 'ਕੰਮ ਅਤੇ ਊਰਜਾ', ['Work done by a force', 'Kinetic and potential energy', 'Conservation of energy', 'Power and units']],
  ['sound', 'Sound', 'ध्वनि', 'ਧੁਨੀ', ['Wave propagation', 'Frequency and pitch', 'Amplitude and loudness', 'Echo and ultrasound']],
  ['light', 'Light reflection and refraction', 'प्रकाश: परावर्तन और अपवर्तन', 'ਪ੍ਰਕਾਸ਼: ਪਰਾਵਰਤਨ ਅਤੇ ਅਪਵਰਤਨ', ['Reflection and plane mirrors', 'Spherical mirrors and ray diagrams', 'Mirror formula and sign convention', 'Refraction and refractive index', 'Lenses, lens formula and power']],
  ['electricity', 'Electricity', 'विद्युत', 'ਬਿਜਲੀ', ['Current and potential difference', 'Ohm’s law and resistance', 'Series and parallel circuits', 'Heating effect and electric power']],
  ['magnetism', 'Magnetism', 'चुंबकत्व', 'ਚੁੰਬਕਤਾ', ['Magnetic field lines', 'Field of a current-carrying conductor', 'Force on a conductor', 'Domestic circuits and safety']],
  ['energy', 'Sources of energy', 'ऊर्जा के स्रोत', 'ਊਰਜਾ ਦੇ ਸਰੋਤ', ['Conventional sources', 'Solar and wind energy', 'Biomass and hydroelectricity', 'Environmental trade-offs']],
  ['matter', 'Matter in our surroundings', 'हमारे आसपास के पदार्थ', 'ਸਾਡੇ ਆਲੇ-ਦੁਆਲੇ ਦਾ ਪਦਾਰਥ', ['Particle model', 'States of matter', 'Changes of state', 'Evaporation']],
  ['atoms', 'Atoms and molecules', 'परमाणु और अणु', 'ਪਰਮਾਣੂ ਅਤੇ ਅਣੂ', ['Laws of chemical combination', 'Atoms and molecules', 'Valency and formulae', 'Atomic and molecular mass']],
  ['reactions', 'Chemical reactions and equations', 'रासायनिक अभिक्रियाएँ और समीकरण', 'ਰਸਾਇਣਕ ਕਿਰਿਆਵਾਂ ਅਤੇ ਸਮੀਕਰਨ', ['Balancing equations', 'Reaction types', 'Oxidation and reduction', 'Corrosion and rancidity']],
  ['acids', 'Acids, bases and salts', 'अम्ल, क्षार और लवण', 'ਤੇਜ਼ਾਬ, ਖਾਰ ਅਤੇ ਲੂਣ', ['Indicators', 'pH', 'Neutralisation', 'Common salts and uses']],
  ['metals', 'Metals and non-metals', 'धातु और अधातु', 'ਧਾਤਾਂ ਅਤੇ ਅਧਾਤਾਂ', ['Physical and chemical properties', 'Reactivity series', 'Ionic compounds', 'Extraction and corrosion']],
  ['carbon', 'Carbon and its compounds', 'कार्बन और उसके यौगिक', 'ਕਾਰਬਨ ਅਤੇ ਇਸ ਦੇ ਯੋਗਿਕ', ['Covalent bonding', 'Hydrocarbons and homologous series', 'Functional groups', 'Ethanol, ethanoic acid and soaps']],
  ['cell', 'The fundamental unit of life', 'जीवन की मूल इकाई', 'ਜੀਵਨ ਦੀ ਮੁੱਢਲੀ ਇਕਾਈ', ['Cell membrane and transport', 'Nucleus', 'Cell organelles', 'Plant and animal cells']],
  ['tissues', 'Tissues', 'ऊतक', 'ਟਿਸ਼ੂ', ['Plant tissues', 'Epithelial tissue', 'Connective tissue', 'Muscular and nervous tissue']],
  ['diversity', 'Diversity of living organisms', 'जीवों की विविधता', 'ਜੀਵਾਂ ਦੀ ਵਿਭਿੰਨਤਾ', ['Classification principles', 'Plant groups', 'Animal groups', 'Scientific naming']],
  ['illness', 'Why do we fall ill?', 'हम बीमार क्यों पड़ते हैं?', 'ਅਸੀਂ ਬੀਮਾਰ ਕਿਉਂ ਹੁੰਦੇ ਹਾਂ?', ['Health and disease', 'Infectious and non-infectious disease', 'Transmission', 'Prevention and treatment']],
  ['resources', 'Natural resources', 'प्राकृतिक संसाधन', 'ਕੁਦਰਤੀ ਸਰੋਤ', ['Air and water', 'Soil', 'Biogeochemical cycles', 'Pollution']],
  ['food', 'Improvement in food resources', 'खाद्य संसाधनों में सुधार', 'ਭੋਜਨ ਸਰੋਤਾਂ ਵਿੱਚ ਸੁਧਾਰ', ['Crop variety improvement', 'Crop production and protection', 'Animal husbandry', 'Fisheries and beekeeping']],
  ['life', 'Life processes', 'जैव प्रक्रम', 'ਜੀਵਨ ਕਿਰਿਆਵਾਂ', ['Nutrition', 'Respiration', 'Transportation', 'Excretion']],
  ['control', 'Control and coordination', 'नियंत्रण और समन्वय', 'ਨਿਯੰਤਰਣ ਅਤੇ ਤਾਲਮੇਲ', ['Nervous system', 'Reflex action', 'Plant responses', 'Hormones']],
  ['reproduction', 'Reproduction in organisms', 'जीवों में प्रजनन', 'ਜੀਵਾਂ ਵਿੱਚ ਪ੍ਰਜਨਨ', ['Asexual reproduction', 'Sexual reproduction in plants', 'Human reproduction', 'Reproductive health']],
  ['heredity', 'Heredity and evolution', 'आनुवंशिकता और विकास', 'ਵਿਰਾਸਤ ਅਤੇ ਵਿਕਾਸ', ['Inherited variation', 'Mendelian inheritance', 'Sex determination', 'Evolution and speciation']],
  ['eye', 'The human eye and colourful world', 'मानव नेत्र और रंगबिरंगा संसार', 'ਮਨੁੱਖੀ ਅੱਖ ਅਤੇ ਰੰਗੀਨ ਸੰਸਾਰ', ['Eye and accommodation', 'Vision defects', 'Prism and dispersion', 'Scattering of light']],
] as const;

export const ETT_MAPPED_GROUPS = subjectMap;
export const ETT_ARCHIVAL_HEADING_COUNT = subjectMap.reduce<number>((total, group) => total + group.units.length, ETT_SCIENCE_UNITS.length);

/** Only explicitly mapped unit IDs supply ETT practice; no generic TET fallback. */
const LIGHT_NAMES = [
  ['परावर्तन और समतल दर्पण', 'ਪਰਾਵਰਤਨ ਅਤੇ ਸਮਤਲ ਦਰਪਣ'],
  ['गोलीय दर्पण और किरण आरेख', 'ਗੋਲੀ ਦਰਪਣ ਅਤੇ ਕਿਰਨ ਚਿੱਤਰ'],
  ['दर्पण सूत्र और चिह्न परिपाटी', 'ਦਰਪਣ ਸੂਤਰ ਅਤੇ ਚਿੰਨ੍ਹ ਰਵਾਇਤ'],
  ['अपवर्तन और अपवर्तनांक', 'ਅਪਵਰਤਨ ਅਤੇ ਅਪਵਰਤਨ ਅੰਕ'],
  ['लेंस, लेंस सूत्र और क्षमता', 'ਲੈਂਸ, ਲੈਂਸ ਸੂਤਰ ਅਤੇ ਸ਼ਕਤੀ'],
];
export const ETT_READY_TOPIC_IDS = new Set<string>([
  'ett-light-reflection',
  'ett-punjabi-1',
  'ett-punjabi-3',
  'ett-math-2',
  'ett-math-4',
  'ett-math-11',
  'ett-math-17',
  'ett-science-motion',
  'ett-science-acids',
  'ett-sst-history-3',
  'ett-english-2',
  'ett-hindi-4',
]);

export function buildEttSubjects(): Subject[] {
  const result: Subject[] = [];
  for (const subject of ETT_REFERENCE_SUBJECTS) {
    const groups = subject.name === 'Social Science' ? subjectMap.filter(group => group.id.startsWith('sst-'))
      : subjectMap.filter(group => group.id === (subject.name === 'Mathematics' ? 'math' : subject.name.toLowerCase()));
    if (subject.name === 'General Science') {
      result.push({ id: 'ett-science', name: subject.name, nameHindi: subject.hi, namePunjabi: subject.pa, emoji: '🔬',
        chapters: ETT_SCIENCE_UNITS.map(([id, en, hi, pa, subtopics]) => ({
          id: `ett-science-${id}`, name: en, nameHindi: hi, namePunjabi: pa,
          topics: id === 'light' ? subtopics.map((name, index): Topic => ({
            id: index === 0 ? 'ett-light-reflection' : `ett-light-${index + 1}`,
            name, nameHindi: LIGHT_NAMES[index][0], namePunjabi: LIGHT_NAMES[index][1],
            subtopics: [], sourcePages: [1], materialStatus: index === 0 ? undefined : 'pending',
            examQuestions: 'Not assigned by the archive', difficulty: 'medium',
          })) : [{ id: `ett-science-${id}`, name: en, nameHindi: hi, namePunjabi: pa,
            subtopics: [...subtopics], sourcePages: [id === 'eye' ? 2 : 1],
            materialStatus: ETT_READY_TOPIC_IDS.has(`ett-science-${id}`) ? undefined : 'pending',
            examQuestions: 'Not assigned by the archive', difficulty: 'medium' }],
        })),
      });
    } else {
      result.push({ id: `ett-${subject.name.toLowerCase().replaceAll(' ', '-')}`, name: subject.name, nameHindi: subject.hi, namePunjabi: subject.pa, emoji: '📚',
        chapters: groups.map(group => ({ id: `ett-${group.id}`, name: group.title.en, nameHindi: group.title.hi, namePunjabi: group.title.pa,
          topics: group.units.map((unit): Topic => ({ id: unit.id, name: unit.title.en, nameHindi: unit.title.hi, namePunjabi: unit.title.pa,
            subtopics: [...unit.studyTopics.en], sourcePages: [unit.sourcePage],
            materialStatus: ETT_READY_TOPIC_IDS.has(unit.id) ? undefined : 'pending',
            examQuestions: 'Not assigned by the archive', difficulty: 'medium' })),
        })),
      });
    }
  }
  return result;
}

