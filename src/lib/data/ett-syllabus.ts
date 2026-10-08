/** Archival research, not certification of the next recruitment's syllabus. */
export const ETT_SYLLABUS_REFERENCE = {
  recruitment: '5994 posts',
  paper: 'Paper B',
  version: '1 December 2022 archival document',
  checkedOn: '2026-10-08',
  status: 'publisher-unreachable' as const,
  publisher: 'https://educationrecruitmentboard.com/ETT5994/',
  mirror: 'https://entri.app/blog/wp-content/uploads/2022/12/SyllabusPaperB01_12_2022.pdf',
  upcomingNotification: 'pending' as const,
};

export const ETT_REFERENCE_SUBJECTS = [
  { name: 'Punjabi', hi: 'पंजाबी', pa: 'ਪੰਜਾਬੀ', marks: 40, status: 'Gurmukhi transcription and topic mapping pending' },
  { name: 'General Science', hi: 'सामान्य विज्ञान', pa: 'ਆਮ ਵਿਗਿਆਨ', marks: 40, status: '25 units transcribed from the English headings; detailed teaching breakdown below' },
  { name: 'Mathematics', hi: 'गणित', pa: 'ਗਣਿਤ', marks: 40, status: 'Gurmukhi transcription and topic mapping pending' },
  { name: 'Social Science', hi: 'सामाजिक विज्ञान', pa: 'ਸਮਾਜਿਕ ਵਿਗਿਆਨ', marks: 40, status: 'Gurmukhi transcription and topic mapping pending' },
  { name: 'English', hi: 'अंग्रेज़ी', pa: 'ਅੰਗਰੇਜ਼ੀ', marks: 20, status: 'Passage comprehension; grammar; vocabulary; Punjabi ↔ English translation. Detailed mapping pending' },
  { name: 'Hindi', hi: 'हिंदी', pa: 'ਹਿੰਦੀ', marks: 20, status: 'Grammar headings visible; full transcription and detailed mapping pending' },
] as const;

// Unit names follow the archive. Subtopics are our teaching breakdown, not official wording.
export const ETT_SCIENCE_UNITS = [
  ['motion', 'Motion', 'गति', 'ਗਤੀ', ['Distance and displacement', 'Speed and velocity', 'Acceleration', 'Distance–time and velocity–time graphs']],
  ['force', 'Force and laws of motion', 'बल और गति के नियम', 'ਬਲ ਅਤੇ ਗਤੀ ਦੇ ਨਿਯਮ', ['Inertia', 'Newton’s laws', 'Momentum', 'Conservation of momentum']],
  ['gravitation', 'Gravitation', 'गुरुत्वाकर्षण', 'ਗੁਰੁਤਵਾਕਰਸ਼ਣ', ['Universal gravitation', 'Free fall', 'Mass and weight', 'Buoyancy and Archimedes’ principle']],
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
