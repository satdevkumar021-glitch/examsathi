import type { Question } from '../questions';

/**
 * ETT Paper B — Science: Core Physics, Chemistry and Biology Question Batch
 * Topics: motion, force, gravitation, work-energy, sound, electricity, magnetism,
 *         energy-sources, matter, atoms, reactions, acids, metals, carbon, cell,
 *         tissues, diversity, illness, resources, food, life, control, reproduction, heredity, eye
 * Curriculum reference: NCERT / PSEB Class 9–10 Science
 * Source: NCERT https://ncert.nic.in/textbook.php (Class 9 & 10 Science chapters)
 * originType: authored-original — checked against NCERT curriculum.
 * NOT authenticated PYQs. Needs named human reviewer before final publication.
 */

const SCI_PROV = {
  source: 'NCERT Class 9–10 Science Textbooks / PSEB equivalent (ETT Paper B reference)',
  accessType: 'educational-original' as const,
  verifiedBy: 'ExamSathi ETT Science Engine — NEEDS NAMED HUMAN REVIEWER',
  verifiedDate: '2026-10-11',
};

export const ETT_SCIENCE_CORE_MCQs: Question[] = [

  // =================== MOTION (ett-science-motion) ===================
  {
    id: 'q-etts-mo-01', topicId: 'ett-science-motion', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Motion',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'A car travels 100 m in 10 s. Its average speed is:', hi: 'एक कार 10 s में 100 m चलती है। उसकी औसत चाल है:', pa: 'ਇੱਕ ਕਾਰ 10 s ਵਿੱਚ 100 m ਚੱਲਦੀ ਹੈ। ਔਸਤ ਗਤੀ ਕਿੰਨੀ ਹੈ?' },
    options: {
      A: { en: '10 m/s', hi: '10 m/s', pa: '10 m/s' },
      B: { en: '100 m/s', hi: '100 m/s', pa: '100 m/s' },
      C: { en: '1 m/s', hi: '1 m/s', pa: '1 m/s' },
      D: { en: '0.1 m/s', hi: '0.1 m/s', pa: '0.1 m/s' },
    },
    correct: 'A',
    explanation: { en: 'Speed = distance/time = 100/10 = 10 m/s.', hi: 'चाल = दूरी/समय = 100/10 = 10 m/s।', pa: 'ਗਤੀ = ਦੂਰੀ/ਸਮਾਂ = 100/10 = 10 m/s।' },
  },
  {
    id: 'q-etts-mo-02', topicId: 'ett-science-motion', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Displacement vs Distance',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'A person walks 4 m east then 3 m north. What is the displacement?', hi: 'एक व्यक्ति 4 m पूर्व और 3 m उत्तर चलता है। उसका विस्थापन क्या है?', pa: 'ਇੱਕ ਵਿਅਕਤੀ 4 m ਪੂਰਬ ਅਤੇ 3 m ਉੱਤਰ ਚੱਲਦਾ ਹੈ। ਵਿਸਥਾਪਨ ਕਿੰਨਾ ਹੈ?' },
    options: {
      A: { en: '5 m', hi: '5 m', pa: '5 m' },
      B: { en: '7 m', hi: '7 m', pa: '7 m' },
      C: { en: '3 m', hi: '3 m', pa: '3 m' },
      D: { en: '4 m', hi: '4 m', pa: '4 m' },
    },
    correct: 'A',
    explanation: { en: 'Displacement = √(4² + 3²) = √(16+9) = √25 = 5 m. Distance = 4+3 = 7 m. Displacement is the straight-line distance between start and end points.', hi: 'विस्थापन = √(4²+3²) = 5 m। दूरी = 7 m।', pa: 'ਵਿਸਥਾਪਨ = √(16+9) = 5 m।' },
  },
  {
    id: 'q-etts-mo-03', topicId: 'ett-science-motion', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Uniform Acceleration',
    difficulty: 'medium', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'A car starts from rest and attains 20 m/s in 5 s. Its acceleration is:', hi: 'एक कार विरामावस्था से 5 s में 20 m/s की गति प्राप्त करती है। त्वरण है:', pa: 'ਕਾਰ ਆਰਾਮ ਤੋਂ 5 s ਵਿੱਚ 20 m/s ਦੀ ਗਤੀ ਪ੍ਰਾਪਤ ਕਰਦੀ ਹੈ। ਪ੍ਰਵੇਗ ਕਿੰਨਾ ਹੈ?' },
    options: {
      A: { en: '4 m/s²', hi: '4 m/s²', pa: '4 m/s²' },
      B: { en: '20 m/s²', hi: '20 m/s²', pa: '20 m/s²' },
      C: { en: '0.25 m/s²', hi: '0.25 m/s²', pa: '0.25 m/s²' },
      D: { en: '100 m/s²', hi: '100 m/s²', pa: '100 m/s²' },
    },
    correct: 'A',
    explanation: { en: 'a = (v−u)/t = (20−0)/5 = 4 m/s².', hi: 'a = (v−u)/t = 20/5 = 4 m/s²।', pa: 'a = (20−0)/5 = 4 m/s²।' },
  },

  // =================== FORCE (ett-science-force) ===================
  {
    id: 'q-etts-fo-01', topicId: 'ett-science-force', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Newton\'s Laws',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Newton\'s first law of motion is also called:', hi: 'न्यूटन का पहला गति नियम किस नाम से भी जाना जाता है?', pa: 'ਨਿਊਟਨ ਦਾ ਪਹਿਲਾ ਗਤੀ ਨਿਯਮ ਕਿਸ ਨਾਮ ਨਾਲ ਵੀ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?' },
    options: {
      A: { en: 'Law of Inertia', hi: 'जड़ता का नियम', pa: 'ਜੜਤਾ ਦਾ ਨਿਯਮ' },
      B: { en: 'Law of Momentum', hi: 'संवेग का नियम', pa: 'ਮੋਮੈਂਟਮ ਦਾ ਨਿਯਮ' },
      C: { en: 'Law of Gravitation', hi: 'गुरुत्वाकर्षण नियम', pa: 'ਗੁਰੁਤਵਾਕਰਸ਼ਣ ਨਿਯਮ' },
      D: { en: 'Law of Action-Reaction', hi: 'क्रिया-प्रतिक्रिया नियम', pa: 'ਕਿਰਿਆ-ਪ੍ਰਤੀਕਿਰਿਆ ਨਿਯਮ' },
    },
    correct: 'A',
    explanation: { en: 'Newton\'s 1st law: An object stays at rest or in uniform motion unless acted on by a net external force. This property is called inertia — hence "Law of Inertia".', hi: 'न्यूटन का पहला नियम = जड़ता का नियम। वस्तु तब तक स्थिर या एकसमान गति में रहती है जब तक बाहरी बल न लगे।', pa: 'ਨਿਊਟਨ ਦਾ ਪਹਿਲਾ ਨਿਯਮ = ਜੜਤਾ ਦਾ ਨਿਯਮ।' },
  },
  {
    id: 'q-etts-fo-02', topicId: 'ett-science-force', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — F = ma',
    difficulty: 'medium', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'A net force of 20 N acts on a 5 kg object. The acceleration produced is:', hi: '5 kg की वस्तु पर 20 N का बल लगता है। उत्पन्न त्वरण है:', pa: '5 kg ਦੀ ਵਸਤੂ ਤੇ 20 N ਦਾ ਬਲ ਲੱਗਦਾ ਹੈ। ਪ੍ਰਵੇਗ ਕਿੰਨਾ ਹੈ?' },
    options: {
      A: { en: '4 m/s²', hi: '4 m/s²', pa: '4 m/s²' },
      B: { en: '100 m/s²', hi: '100 m/s²', pa: '100 m/s²' },
      C: { en: '0.25 m/s²', hi: '0.25 m/s²', pa: '0.25 m/s²' },
      D: { en: '25 m/s²', hi: '25 m/s²', pa: '25 m/s²' },
    },
    correct: 'A',
    explanation: { en: 'F = ma → a = F/m = 20/5 = 4 m/s². Newton\'s second law.', hi: 'a = F/m = 20/5 = 4 m/s²। न्यूटन का दूसरा नियम।', pa: 'a = F/m = 20/5 = 4 m/s²।' },
  },
  {
    id: 'q-etts-fo-03', topicId: 'ett-science-force', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Conservation of Momentum',
    difficulty: 'medium', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'When a gun fires a bullet, the gun recoils backward. This demonstrates:', hi: 'जब बंदूक गोली छोड़ती है, तो बंदूक पीछे धकेली जाती है। यह किस नियम को दर्शाता है?', pa: 'ਜਦੋਂ ਬੰਦੂਕ ਗੋਲੀ ਚਲਾਉਂਦੀ ਹੈ, ਬੰਦੂਕ ਪਿੱਛੇ ਧੱਕੀ ਜਾਂਦੀ ਹੈ। ਇਹ ਕਿਹੜਾ ਨਿਯਮ ਦਰਸਾਉਂਦਾ ਹੈ?' },
    options: {
      A: { en: 'Conservation of momentum', hi: 'संवेग संरक्षण', pa: 'ਮੋਮੈਂਟਮ ਦੀ ਸੰਭਾਲ' },
      B: { en: 'Newton\'s first law', hi: 'न्यूटन का पहला नियम', pa: 'ਨਿਊਟਨ ਦਾ ਪਹਿਲਾ ਨਿਯਮ' },
      C: { en: 'Archimedes\' principle', hi: 'आर्किमिडीज़ का सिद्धांत', pa: 'ਆਰਕੀਮੀਡੀਜ਼ ਦਾ ਸਿਧਾਂਤ' },
      D: { en: 'Law of inertia', hi: 'जड़ता का नियम', pa: 'ਜੜਤਾ ਦਾ ਨਿਯਮ' },
    },
    correct: 'A',
    explanation: { en: 'Total momentum before firing = 0 (gun + bullet at rest). After firing, bullet moves forward with momentum p; gun recoils with equal and opposite momentum −p. Total = 0 (conserved).', hi: 'गोली आगे संवेग p से जाती है; बंदूक −p से पीछे। कुल = 0 (संरक्षित)।', pa: 'ਗੋਲੀ ਅੱਗੇ p ਮੋਮੈਂਟਮ; ਬੰਦੂਕ −p ਪਿੱਛੇ। ਕੁੱਲ = 0।' },
  },

  // =================== GRAVITATION (ett-science-gravitation) ===================
  {
    id: 'q-etts-gv-01', topicId: 'ett-science-gravitation', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — g value',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'The value of acceleration due to gravity (g) at Earth\'s surface is approximately:', hi: 'पृथ्वी की सतह पर गुरुत्वीय त्वरण (g) का मान लगभग है:', pa: 'ਧਰਤੀ ਦੀ ਸਤ੍ਹਾ ਤੇ ਗੁਰੁਤਵੀ ਪ੍ਰਵੇਗ (g) ਦਾ ਮੁੱਲ ਲਗਭਗ ਕਿੰਨਾ ਹੈ?' },
    options: {
      A: { en: '9.8 m/s²', hi: '9.8 m/s²', pa: '9.8 m/s²' },
      B: { en: '9.8 m/s', hi: '9.8 m/s', pa: '9.8 m/s' },
      C: { en: '6.67 × 10⁻¹¹ N m²/kg²', hi: '6.67 × 10⁻¹¹ N m²/kg²', pa: '6.67 × 10⁻¹¹ N m²/kg²' },
      D: { en: '10 N/m', hi: '10 N/m', pa: '10 N/m' },
    },
    correct: 'A',
    explanation: { en: 'g ≈ 9.8 m/s² (≈ 10 m/s² for quick calculations). G = 6.67×10⁻¹¹ N m²/kg² is the universal gravitational constant, not g.', hi: 'g ≈ 9.8 m/s²। G = 6.67×10⁻¹¹ गुरुत्व स्थिरांक है।', pa: 'g ≈ 9.8 m/s²। G ਗਰੇਵੀਟੇਸ਼ਨ ਸਥਿਰਾਂਕ ਹੈ।' },
  },
  {
    id: 'q-etts-gv-02', topicId: 'ett-science-gravitation', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Mass vs Weight',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Weight of an object on Moon is 1/6th of its weight on Earth because:', hi: 'चंद्रमा पर वस्तु का भार पृथ्वी का 1/6 होता है क्योंकि:', pa: 'ਚੰਦਰਮਾ ਤੇ ਵਸਤੂ ਦਾ ਭਾਰ ਧਰਤੀ ਤੋਂ 1/6 ਹੁੰਦਾ ਹੈ ਕਿਉਂਕਿ:' },
    options: {
      A: { en: 'Gravitational acceleration on Moon is 1/6th of Earth\'s', hi: 'चंद्रमा पर गुरुत्वीय त्वरण पृथ्वी का 1/6 है', pa: 'ਚੰਦਰਮਾ ਤੇ ਗੁਰੁਤਵੀ ਪ੍ਰਵੇਗ ਧਰਤੀ ਦਾ 1/6 ਹੈ' },
      B: { en: 'Moon has 1/6th the mass of Earth', hi: 'चंद्रमा का द्रव्यमान पृथ्वी का 1/6 है', pa: 'ਚੰਦਰਮਾ ਦਾ ਪੁੰਜ ਧਰਤੀ ਦਾ 1/6 ਹੈ' },
      C: { en: 'Moon\'s atmosphere is thinner', hi: 'चंद्रमा का वायुमंडल पतला है', pa: 'ਚੰਦਰਮਾ ਦਾ ਵਾਯੂਮੰਡਲ ਪਤਲਾ ਹੈ' },
      D: { en: 'Mass changes on Moon', hi: 'चंद्रमा पर द्रव्यमान बदलता है', pa: 'ਚੰਦਰਮਾ ਤੇ ਪੁੰਜ ਬਦਲਦਾ ਹੈ' },
    },
    correct: 'A',
    explanation: { en: 'Weight = mg. Mass (m) is constant anywhere. On Moon g_moon ≈ g_earth/6, so weight = m × g_earth/6. Mass never changes.', hi: 'भार = mg। द्रव्यमान (m) नहीं बदलता; चंद्रमा पर g = g_earth/6।', pa: 'ਭਾਰ = mg। ਪੁੰਜ ਨਹੀਂ ਬਦਲਦਾ; ਚੰਦਰਮਾ ਤੇ g = g_earth/6।' },
  },
  {
    id: 'q-etts-gv-03', topicId: 'ett-science-gravitation', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Archimedes Buoyancy',
    difficulty: 'medium', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Archimedes\' principle states that the upward buoyant force on an object submerged in a fluid equals:', hi: 'आर्किमिडीज़ के सिद्धांत के अनुसार द्रव में डूबी वस्तु पर उत्प्लावन बल बराबर होता है:', pa: 'ਆਰਕੀਮੀਡੀਜ਼ ਦੇ ਸਿਧਾਂਤ ਅਨੁਸਾਰ ਤਰਲ ਵਿੱਚ ਡੁੱਬੀ ਵਸਤੂ ਤੇ ਉੱਪਰ ਦਾ ਬਲ ਬਰਾਬਰ ਹੁੰਦਾ ਹੈ:' },
    options: {
      A: { en: 'Weight of fluid displaced by the object', hi: 'वस्तु द्वारा विस्थापित द्रव का भार', pa: 'ਵਸਤੂ ਦੁਆਰਾ ਹਟਾਏ ਗਏ ਤਰਲ ਦਾ ਭਾਰ' },
      B: { en: 'Weight of the object itself', hi: 'वस्तु का अपना भार', pa: 'ਵਸਤੂ ਦਾ ਆਪਣਾ ਭਾਰ' },
      C: { en: 'Volume of the object', hi: 'वस्तु का आयतन', pa: 'ਵਸਤੂ ਦਾ ਆਇਤਨ' },
      D: { en: 'Density of the object', hi: 'वस्तु का घनत्व', pa: 'ਵਸਤੂ ਦਾ ਘਣਤਵ' },
    },
    correct: 'A',
    explanation: { en: 'Buoyant force = weight of displaced fluid. Object sinks if its weight > buoyant force; floats if weight ≤ buoyant force. Density determines this outcome.', hi: 'उत्प्लावन बल = विस्थापित द्रव का भार। यदि वस्तु का भार अधिक → डूबती है।', pa: 'ਉੱਪਰ ਦਾ ਬਲ = ਹਟਾਏ ਤਰਲ ਦਾ ਭਾਰ।' },
  },

  // =================== WORK AND ENERGY (ett-science-work-energy) ===================
  {
    id: 'q-etts-we-01', topicId: 'ett-science-work-energy', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Work Done',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Work done on an object is zero when the force is applied:', hi: 'वस्तु पर किया गया कार्य शून्य होता है जब:', pa: 'ਵਸਤੂ ਤੇ ਕੀਤਾ ਕੰਮ ਜ਼ੀਰੋ ਹੁੰਦਾ ਹੈ ਜਦੋਂ:' },
    options: {
      A: { en: 'Perpendicular to the displacement', hi: 'विस्थापन के लंबवत', pa: 'ਵਿਸਥਾਪਨ ਦੇ ਲੰਬਵਤ' },
      B: { en: 'In the same direction as displacement', hi: 'विस्थापन की दिशा में', pa: 'ਵਿਸਥਾਪਨ ਦੀ ਦਿਸ਼ਾ ਵਿੱਚ' },
      C: { en: 'At 45° to displacement', hi: 'विस्थापन से 45° पर', pa: 'ਵਿਸਥਾਪਨ ਨਾਲੋਂ 45° ਤੇ' },
      D: { en: 'Opposite to displacement', hi: 'विस्थापन के विपरीत', pa: 'ਵਿਸਥਾਪਨ ਦੇ ਉਲਟ' },
    },
    correct: 'A',
    explanation: { en: 'W = F·d·cosθ. When θ=90°, cos90°=0 → W=0. Example: carrying a bag while walking horizontally — the weight acts downward (90° to motion), doing no work.', hi: 'W = Fd cosθ। θ=90° → W=0। जैसे: क्षैतिज गति में ऊर्ध्वाधर बल से कार्य शून्य।', pa: 'W = Fd cosθ। θ=90° ਤੇ W=0।' },
  },
  {
    id: 'q-etts-we-02', topicId: 'ett-science-work-energy', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — KE',
    difficulty: 'medium', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'The kinetic energy of a 4 kg object moving at 3 m/s is:', hi: '4 kg की वस्तु 3 m/s से चल रही है। उसकी गतिज ऊर्जा है:', pa: '4 kg ਦੀ ਵਸਤੂ 3 m/s ਨਾਲ ਚੱਲ ਰਹੀ ਹੈ। ਗਤਿਜ ਊਰਜਾ ਕਿੰਨੀ ਹੈ?' },
    options: {
      A: { en: '18 J', hi: '18 J', pa: '18 J' },
      B: { en: '12 J', hi: '12 J', pa: '12 J' },
      C: { en: '36 J', hi: '36 J', pa: '36 J' },
      D: { en: '6 J', hi: '6 J', pa: '6 J' },
    },
    correct: 'A',
    explanation: { en: 'KE = ½mv² = ½ × 4 × 3² = ½ × 4 × 9 = 18 J.', hi: 'KE = ½mv² = ½×4×9 = 18 J।', pa: 'KE = ½×4×9 = 18 J।' },
  },

  // =================== SOUND (ett-science-sound) ===================
  {
    id: 'q-etts-so-01', topicId: 'ett-science-sound', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Sound Speed',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'The speed of sound in air at 25°C is approximately:', hi: '25°C पर वायु में ध्वनि की चाल लगभग है:', pa: '25°C ਤੇ ਹਵਾ ਵਿੱਚ ਧੁਨੀ ਦੀ ਗਤੀ ਲਗਭਗ ਕਿੰਨੀ ਹੈ?' },
    options: {
      A: { en: '346 m/s', hi: '346 m/s', pa: '346 m/s' },
      B: { en: '3×10⁸ m/s', hi: '3×10⁸ m/s', pa: '3×10⁸ m/s' },
      C: { en: '1500 m/s', hi: '1500 m/s', pa: '1500 m/s' },
      D: { en: '100 m/s', hi: '100 m/s', pa: '100 m/s' },
    },
    correct: 'A',
    explanation: { en: 'Sound speed in air ≈ 346 m/s at 25°C (≈ 332 m/s at 0°C). Light travels at 3×10⁸ m/s (much faster). Sound travels faster in water (≈1500 m/s) and solids.', hi: 'वायु में ध्वनि ≈ 346 m/s। प्रकाश 3×10⁸ m/s। जल में ध्वनि ≈ 1500 m/s।', pa: 'ਹਵਾ ਵਿੱਚ ਧੁਨੀ ≈ 346 m/s।' },
  },
  {
    id: 'q-etts-so-02', topicId: 'ett-science-sound', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Echo',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'To hear a distinct echo, the minimum distance between the observer and the reflecting surface should be:', hi: 'स्पष्ट प्रतिध्वनि सुनने के लिए, परावर्तक सतह की न्यूनतम दूरी होनी चाहिए:', pa: 'ਸਾਫ਼ ਗੂੰਜ ਸੁਣਨ ਲਈ ਪਰਾਵਰਤਿਤ ਸਤ੍ਹਾ ਦੀ ਘੱਟੋ-ਘੱਟ ਦੂਰੀ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ:' },
    options: {
      A: { en: '17 m', hi: '17 m', pa: '17 m' },
      B: { en: '10 m', hi: '10 m', pa: '10 m' },
      C: { en: '100 m', hi: '100 m', pa: '100 m' },
      D: { en: '34 m', hi: '34 m', pa: '34 m' },
    },
    correct: 'A',
    explanation: { en: 'Minimum distance = v × t/2 = 346 × 0.1/2 = 17.3 ≈ 17 m. The ear needs ~0.1 s gap to perceive echo as separate from original sound.', hi: 'न्यूनतम दूरी = 346 × 0.1/2 ≈ 17 m। कान 0.1 s के बाद ही अलग ध्वनि सुन सकता है।', pa: '= 346 × 0.1/2 ≈ 17 m।' },
  },

  // =================== ELECTRICITY (ett-science-electricity) ===================
  {
    id: 'q-etts-el-01', topicId: 'ett-science-electricity', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Ohm\'s Law',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Ohm\'s Law states that at constant temperature, current (I) through a conductor is:', hi: 'ओम का नियम कहता है कि स्थिर ताप पर चालक में धारा (I):', pa: 'ਓਮ ਦਾ ਨਿਯਮ ਕਹਿੰਦਾ ਹੈ ਕਿ ਸਥਿਰ ਤਾਪਮਾਨ ਤੇ ਚਾਲਕ ਵਿੱਚ ਧਾਰਾ (I):' },
    options: {
      A: { en: 'Directly proportional to voltage (V)', hi: 'वोल्टेज (V) के सीधे अनुपाती', pa: 'ਵੋਲਟੇਜ (V) ਦੇ ਸਿੱਧੇ ਅਨੁਪਾਤੀ' },
      B: { en: 'Inversely proportional to voltage', hi: 'वोल्टेज के व्युत्क्रमानुपाती', pa: 'ਵੋਲਟੇਜ ਦੇ ਉਲਟ ਅਨੁਪਾਤੀ' },
      C: { en: 'Independent of voltage', hi: 'वोल्टेज से स्वतंत्र', pa: 'ਵੋਲਟੇਜ ਤੋਂ ਸੁਤੰਤਰ' },
      D: { en: 'Equal to voltage squared', hi: 'वोल्टेज के वर्ग के बराबर', pa: 'ਵੋਲਟੇਜ ਦੇ ਵਰਗ ਦੇ ਬਰਾਬਰ' },
    },
    correct: 'A',
    explanation: { en: 'Ohm\'s Law: V = IR → I = V/R. At constant temperature, I ∝ V (directly proportional). R is the resistance (constant for ohmic conductors).', hi: 'V = IR → I = V/R। I ∝ V।', pa: 'V = IR → I = V/R।' },
  },
  {
    id: 'q-etts-el-02', topicId: 'ett-science-electricity', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Resistors in Series',
    difficulty: 'medium', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Three resistors 2 Ω, 3 Ω, and 5 Ω are connected in series. Total resistance is:', hi: '2 Ω, 3 Ω और 5 Ω के तीन प्रतिरोध श्रेणी में जुड़े हैं। कुल प्रतिरोध है:', pa: '2 Ω, 3 Ω ਅਤੇ 5 Ω ਦੇ ਤਿੰਨ ਪ੍ਰਤਿਰੋਧ ਲੜੀ ਵਿੱਚ ਜੁੜੇ ਹਨ। ਕੁੱਲ ਪ੍ਰਤਿਰੋਧ ਕਿੰਨਾ ਹੈ?' },
    options: {
      A: { en: '10 Ω', hi: '10 Ω', pa: '10 Ω' },
      B: { en: '30 Ω', hi: '30 Ω', pa: '30 Ω' },
      C: { en: '1 Ω', hi: '1 Ω', pa: '1 Ω' },
      D: { en: '0.1 Ω', hi: '0.1 Ω', pa: '0.1 Ω' },
    },
    correct: 'A',
    explanation: { en: 'Series: R_total = R₁+R₂+R₃ = 2+3+5 = 10 Ω. Parallel: 1/R = 1/R₁+1/R₂+1/R₃. In series, resistance always increases.', hi: 'श्रेणी: R = R₁+R₂+R₃ = 10 Ω।', pa: 'ਲੜੀ: R = 2+3+5 = 10 Ω।' },
  },

  // =================== MAGNETISM (ett-science-magnetism) ===================
  {
    id: 'q-etts-mg-01', topicId: 'ett-science-magnetism', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Magnetic Field Lines',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Magnetic field lines around a bar magnet:', hi: 'एक छड़ चुंबक के चारों ओर चुंबकीय क्षेत्र रेखाएँ:', pa: 'ਇੱਕ ਡੰਡਾ ਚੁੰਬਕ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਚੁੰਬਕੀ ਖੇਤਰ ਰੇਖਾਵਾਂ:' },
    options: {
      A: { en: 'Form closed loops from N-pole to S-pole outside and S to N inside', hi: 'बाहर उत्तर-दक्षिण और अंदर दक्षिण-उत्तर — बंद पाश बनाती हैं', pa: 'ਬਾਹਰ ਉੱਤਰ-ਦੱਖਣ ਅਤੇ ਅੰਦਰ ਦੱਖਣ-ਉੱਤਰ — ਬੰਦ ਲੂਪ ਬਣਾਉਂਦੀਆਂ ਹਨ' },
      B: { en: 'Start and end at the same pole', hi: 'एक ही ध्रुव पर शुरू और समाप्त होती हैं', pa: 'ਇੱਕੋ ਧਰੁਵ ਤੇ ਸ਼ੁਰੂ ਅਤੇ ਖਤਮ ਹੁੰਦੀਆਂ ਹਨ' },
      C: { en: 'Are straight lines', hi: 'सीधी रेखाएँ होती हैं', pa: 'ਸਿੱਧੀਆਂ ਰੇਖਾਵਾਂ ਹੁੰਦੀਆਂ ਹਨ' },
      D: { en: 'Cross each other at the poles', hi: 'ध्रुवों पर एक-दूसरे को काटती हैं', pa: 'ਧਰੁਵਾਂ ਤੇ ਇੱਕ-ਦੂਸਰੇ ਨੂੰ ਕੱਟਦੀਆਂ ਹਨ' },
    },
    correct: 'A',
    explanation: { en: 'Magnetic field lines form closed loops. Outside magnet: N→S. Inside: S→N. Lines never cross (would mean two field directions at one point). Density of lines shows field strength.', hi: 'चुंबकीय क्षेत्र रेखाएँ बंद पाश। बाहर N→S, अंदर S→N। कभी नहीं काटतीं।', pa: 'ਚੁੰਬਕੀ ਖੇਤਰ ਰੇਖਾਵਾਂ ਬੰਦ ਲੂਪ ਬਣਾਉਂਦੀਆਂ ਹਨ।' },
  },
  {
    id: 'q-etts-mg-02', topicId: 'ett-science-magnetism', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Domestic Safety',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'In domestic electrical wiring, the fuse is connected in:', hi: 'घरेलू विद्युत तारों में फ्यूज जोड़ा जाता है:', pa: 'ਘਰੇਲੂ ਬਿਜਲੀ ਤਾਰਾਂ ਵਿੱਚ ਫਿਊਜ਼ ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ:' },
    options: {
      A: { en: 'Series with the live wire', hi: 'लाइव तार के साथ श्रेणी में', pa: 'ਲਾਈਵ ਤਾਰ ਦੇ ਨਾਲ ਲੜੀ ਵਿੱਚ' },
      B: { en: 'Parallel with the neutral wire', hi: 'न्यूट्रल तार के साथ समांतर', pa: 'ਨਿਊਟ੍ਰਲ ਤਾਰ ਦੇ ਨਾਲ ਸਮਾਂਤਰ' },
      C: { en: 'In the earth wire only', hi: 'केवल अर्थ तार में', pa: 'ਸਿਰਫ਼ ਅਰਥ ਤਾਰ ਵਿੱਚ' },
      D: { en: 'Parallel with the circuit', hi: 'परिपथ के समांतर', pa: 'ਪਰਿਪਥ ਦੇ ਸਮਾਂਤਰ' },
    },
    correct: 'A',
    explanation: { en: 'Fuse wire is always connected in series with the live wire. When excess current flows, fuse melts (breaks the circuit) before damage to appliances or fire risk.', hi: 'फ्यूज सदैव लाइव तार में श्रेणी में। अधिक धारा आने पर पिघल जाता है।', pa: 'ਫਿਊਜ਼ ਹਮੇਸ਼ਾ ਲਾਈਵ ਤਾਰ ਵਿੱਚ ਲੜੀ ਵਿੱਚ।' },
  },

  // =================== SOURCES OF ENERGY (ett-science-energy) ===================
  {
    id: 'q-etts-en-01', topicId: 'ett-science-energy', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Renewable Energy',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Which of the following is a NON-RENEWABLE source of energy?', hi: 'निम्न में से कौन-सा ऊर्जा का अनवीकरणीय स्रोत है?', pa: 'ਹੇਠਾਂ ਦਿੱਤਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਊਰਜਾ ਦਾ ਅਨਵਿਕਰਨਯੋਗ ਸਰੋਤ ਹੈ?' },
    options: {
      A: { en: 'Coal', hi: 'कोयला', pa: 'ਕੋਲਾ' },
      B: { en: 'Solar energy', hi: 'सौर ऊर्जा', pa: 'ਸੂਰਜੀ ਊਰਜਾ' },
      C: { en: 'Wind energy', hi: 'पवन ऊर्जा', pa: 'ਹਵਾ ਊਰਜਾ' },
      D: { en: 'Biomass', hi: 'बायोमास', pa: 'ਬਾਇਓਮਾਸ' },
    },
    correct: 'A',
    explanation: { en: 'Coal, petroleum and natural gas are non-renewable (fossil fuels — millions of years to form, finite). Solar, wind, hydroelectric, biomass and geothermal are renewable.', hi: 'कोयला, पेट्रोलियम, प्राकृतिक गैस — अनवीकरणीय। सौर, पवन, जल, बायोमास — नवीकरणीय।', pa: 'ਕੋਲਾ, ਪੈਟਰੋਲੀਅਮ — ਅਨਵਿਕਰਨਯੋਗ। ਸੂਰਜੀ, ਹਵਾ — ਨਵਿਕਰਨਯੋਗ।' },
  },

  // =================== MATTER IN OUR SURROUNDINGS (ett-science-matter) ===================
  {
    id: 'q-etts-mt-01', topicId: 'ett-science-matter', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — States of Matter',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Which state of matter has definite volume but no definite shape?', hi: 'पदार्थ की किस अवस्था में निश्चित आयतन होता है परंतु निश्चित आकार नहीं?', pa: 'ਪਦਾਰਥ ਦੀ ਕਿਹੜੀ ਅਵਸਥਾ ਵਿੱਚ ਨਿਸ਼ਚਿਤ ਆਇਤਨ ਹੁੰਦਾ ਹੈ ਪਰ ਨਿਸ਼ਚਿਤ ਆਕਾਰ ਨਹੀਂ?' },
    options: {
      A: { en: 'Liquid', hi: 'द्रव', pa: 'ਤਰਲ' },
      B: { en: 'Solid', hi: 'ठोस', pa: 'ਠੋਸ' },
      C: { en: 'Gas', hi: 'गैस', pa: 'ਗੈਸ' },
      D: { en: 'Plasma', hi: 'प्लाज़्मा', pa: 'ਪਲਾਜ਼ਮਾ' },
    },
    correct: 'A',
    explanation: { en: 'Liquid: definite volume, no definite shape (takes shape of container). Solid: definite shape and volume. Gas: no definite shape or volume.', hi: 'द्रव: निश्चित आयतन, अनिश्चित आकार। ठोस: दोनों निश्चित। गैस: कोई निश्चित नहीं।', pa: 'ਤਰਲ: ਨਿਸ਼ਚਿਤ ਆਇਤਨ, ਅਨਿਸ਼ਚਿਤ ਆਕਾਰ।' },
  },
  {
    id: 'q-etts-mt-02', topicId: 'ett-science-matter', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Evaporation',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Evaporation causes cooling because:', hi: 'वाष्पीकरण से ठंडक महसूस होती है क्योंकि:', pa: 'ਭਾਫ਼ ਬਣਨ ਨਾਲ ਠੰਡਕ ਕਿਉਂ ਮਹਿਸੂਸ ਹੁੰਦੀ ਹੈ?' },
    options: {
      A: { en: 'High-energy particles escape, absorbing latent heat from surroundings', hi: 'उच्च ऊर्जा के कण बाहर निकलते हैं, गुप्त ताप अवशोषित कर', pa: 'ਉੱਚ ਊਰਜਾ ਦੇ ਕਣ ਨਿਕਲਦੇ ਹਨ, ਲੁਕੀ ਗਰਮੀ ਜਜ਼ਬ ਕਰਕੇ' },
      B: { en: 'Water molecules gain energy from surroundings', hi: 'पानी के अणु ऊर्जा प्राप्त करते हैं', pa: 'ਪਾਣੀ ਦੇ ਅਣੂ ਊਰਜਾ ਪ੍ਰਾਪਤ ਕਰਦੇ ਹਨ' },
      C: { en: 'Cold air replaces the water', hi: 'ठंडी हवा पानी की जगह लेती है', pa: 'ਠੰਡੀ ਹਵਾ ਪਾਣੀ ਦੀ ਥਾਂ ਲੈਂਦੀ ਹੈ' },
      D: { en: 'Liquid surface increases', hi: 'द्रव की सतह बढ़ती है', pa: 'ਤਰਲ ਦੀ ਸਤ੍ਹਾ ਵਧਦੀ ਹੈ' },
    },
    correct: 'A',
    explanation: { en: 'During evaporation, high-kinetic-energy water molecules escape from surface, taking latent heat from remaining liquid and surroundings — hence cooling effect. This is why sweating cools us.', hi: 'वाष्पीकरण में उच्च गतिज ऊर्जा के अणु बाहर निकलते हैं, गुप्त ऊष्मा लेकर → ठंडक।', pa: 'ਭਾਫ਼ ਬਣਦੇ ਸਮੇਂ ਉੱਚ ਊਰਜਾ ਵਾਲੇ ਅਣੂ ਲੁਕੀ ਗਰਮੀ ਲੈ ਕੇ ਨਿਕਲਦੇ ਹਨ।' },
  },

  // =================== ATOMS AND MOLECULES (ett-science-atoms) ===================
  {
    id: 'q-etts-am-01', topicId: 'ett-science-atoms', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Atomic Mass',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'The atomic mass of oxygen is 16 u. This means one atom of oxygen is:', hi: 'ऑक्सीजन का परमाणु द्रव्यमान 16 u है। इसका अर्थ है:', pa: 'ਆਕਸੀਜਨ ਦਾ ਪਰਮਾਣੂ ਪੁੰਜ 16 u ਹੈ। ਇਸਦਾ ਮਤਲਬ ਹੈ:' },
    options: {
      A: { en: '16 times heavier than ¹/₁₂ the mass of C-12', hi: 'C-12 के 1/12 से 16 गुना भारी', pa: 'C-12 ਦੇ 1/12 ਤੋਂ 16 ਗੁਣਾ ਭਾਰਾ' },
      B: { en: '16 grams per atom', hi: 'प्रति परमाणु 16 ग्राम', pa: 'ਪ੍ਰਤੀ ਪਰਮਾਣੂ 16 ਗ੍ਰਾਮ' },
      C: { en: 'O has 16 protons only', hi: 'O में केवल 16 प्रोटॉन', pa: 'O ਵਿੱਚ ਸਿਰਫ਼ 16 ਪ੍ਰੋਟੋਨ' },
      D: { en: 'O is 16 times lighter than hydrogen', hi: 'O हाइड्रोजन से 16 गुना हल्का', pa: 'O ਹਾਈਡ੍ਰੋਜਨ ਤੋਂ 16 ਗੁਣਾ ਹਲਕਾ' },
    },
    correct: 'A',
    explanation: { en: 'Atomic mass unit (u) = 1/12 the mass of C-12. So O at 16 u means one O atom is 16× heavier than 1/12 of C-12. Molar mass (grams/mole) numerically equals atomic mass.', hi: '1 u = C-12 का 1/12 द्रव्यमान। O का 16 u → C-12 के 1/12 से 16× भारी।', pa: '1 u = C-12 ਦਾ 1/12। O = 16 u।' },
  },

  // =================== CHEMICAL REACTIONS (ett-science-reactions) ===================
  {
    id: 'q-etts-cr-01', topicId: 'ett-science-reactions', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Balancing Equations',
    difficulty: 'medium', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Which of the following is a balanced chemical equation for burning of methane?', hi: 'मीथेन के दहन के लिए संतुलित रासायनिक समीकरण कौन-सा है?', pa: 'ਮੀਥੇਨ ਦੇ ਬਲਨ ਲਈ ਸੰਤੁਲਿਤ ਰਸਾਇਣਕ ਸਮੀਕਰਨ ਕਿਹੜਾ ਹੈ?' },
    options: {
      A: { en: 'CH₄ + 2O₂ → CO₂ + 2H₂O', hi: 'CH₄ + 2O₂ → CO₂ + 2H₂O', pa: 'CH₄ + 2O₂ → CO₂ + 2H₂O' },
      B: { en: 'CH₄ + O₂ → CO₂ + H₂O', hi: 'CH₄ + O₂ → CO₂ + H₂O', pa: 'CH₄ + O₂ → CO₂ + H₂O' },
      C: { en: 'CH₄ + 2O₂ → CO₂ + H₂O', hi: 'CH₄ + 2O₂ → CO₂ + H₂O', pa: 'CH₄ + 2O₂ → CO₂ + H₂O' },
      D: { en: '2CH₄ + O₂ → 2CO₂ + H₂O', hi: '2CH₄ + O₂ → 2CO₂ + H₂O', pa: '2CH₄ + O₂ → 2CO₂ + H₂O' },
    },
    correct: 'A',
    explanation: { en: 'CH₄ + 2O₂ → CO₂ + 2H₂O. Check: C: 1=1 ✓, H: 4=4 ✓, O: 4=4 ✓. The equation is balanced.', hi: 'CH₄ + 2O₂ → CO₂ + 2H₂O। C: 1=1, H: 4=4, O: 4=4 ✓।', pa: 'CH₄ + 2O₂ → CO₂ + 2H₂O ਸੰਤੁਲਿਤ।' },
  },

  // =================== ACIDS, BASES AND SALTS (ett-science-acids) ===================
  {
    id: 'q-etts-ab-01', topicId: 'ett-science-acids', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — pH',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'A solution with pH = 3 is:', hi: 'pH = 3 वाला विलयन है:', pa: 'pH = 3 ਵਾਲਾ ਘੋਲ ਹੈ:' },
    options: {
      A: { en: 'Acidic', hi: 'अम्लीय', pa: 'ਤੇਜ਼ਾਬੀ' },
      B: { en: 'Basic (alkaline)', hi: 'क्षारीय', pa: 'ਖਾਰੀ' },
      C: { en: 'Neutral', hi: 'उदासीन', pa: 'ਨਿਰਪੱਖ' },
      D: { en: 'Strongly basic', hi: 'प्रबल क्षारीय', pa: 'ਪ੍ਰਬਲ ਖਾਰੀ' },
    },
    correct: 'A',
    explanation: { en: 'pH < 7 = acidic; pH = 7 = neutral; pH > 7 = basic. pH 3 is moderately acidic. Vinegar ≈ pH 3; blood ≈ pH 7.4; baking soda ≈ pH 9.', hi: 'pH < 7 = अम्लीय; =7 = उदासीन; >7 = क्षारीय।', pa: 'pH < 7 = ਤੇਜ਼ਾਬੀ; = 7 = ਨਿਰਪੱਖ; > 7 = ਖਾਰੀ।' },
  },
  {
    id: 'q-etts-ab-02', topicId: 'ett-science-acids', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Indicators',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Litmus paper turns red in an acidic solution. What colour does it show in a basic solution?', hi: 'लिटमस पेपर अम्लीय विलयन में लाल होता है। क्षारीय विलयन में किस रंग का होता है?', pa: 'ਲਿਟਮਸ ਕਾਗਜ਼ ਤੇਜ਼ਾਬੀ ਘੋਲ ਵਿੱਚ ਲਾਲ ਹੁੰਦਾ ਹੈ। ਖਾਰੀ ਘੋਲ ਵਿੱਚ ਕਿਹੜਾ ਰੰਗ ਹੁੰਦਾ ਹੈ?' },
    options: {
      A: { en: 'Blue', hi: 'नीला', pa: 'ਨੀਲਾ' },
      B: { en: 'Yellow', hi: 'पीला', pa: 'ਪੀਲਾ' },
      C: { en: 'Green', hi: 'हरा', pa: 'ਹਰਾ' },
      D: { en: 'Colourless', hi: 'रंगहीन', pa: 'ਰੰਗਹੀਣ' },
    },
    correct: 'A',
    explanation: { en: 'Litmus: red in acid, blue in base (alkali), purple/violet in neutral. Easy mnemonic: Acid → Red (A-R), Base → Blue (B-B).', hi: 'लिटमस: अम्ल → लाल, क्षार → नीला, उदासीन → बैंगनी।', pa: 'ਲਿਟਮਸ: ਤੇਜ਼ਾਬ → ਲਾਲ, ਖਾਰ → ਨੀਲਾ।' },
  },

  // =================== METALS AND NON-METALS (ett-science-metals) ===================
  {
    id: 'q-etts-mn-01', topicId: 'ett-science-metals', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Reactivity Series',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'In the reactivity series of metals, which metal is at the top (most reactive)?', hi: 'धातुओं की क्रियाशीलता श्रेणी में सबसे ऊपर (सर्वाधिक क्रियाशील) कौन-सी धातु है?', pa: 'ਧਾਤਾਂ ਦੀ ਕਿਰਿਆਸ਼ੀਲਤਾ ਲੜੀ ਵਿੱਚ ਸਭ ਤੋਂ ਉੱਪਰ (ਸਭ ਤੋਂ ਵੱਧ ਕਿਰਿਆਸ਼ੀਲ) ਕਿਹੜੀ ਧਾਤ ਹੈ?' },
    options: {
      A: { en: 'Potassium (K)', hi: 'पोटैशियम (K)', pa: 'ਪੋਟਾਸ਼ੀਅਮ (K)' },
      B: { en: 'Gold (Au)', hi: 'सोना (Au)', pa: 'ਸੋਨਾ (Au)' },
      C: { en: 'Iron (Fe)', hi: 'लोहा (Fe)', pa: 'ਲੋਹਾ (Fe)' },
      D: { en: 'Copper (Cu)', hi: 'तांबा (Cu)', pa: 'ਤਾਂਬਾ (Cu)' },
    },
    correct: 'A',
    explanation: { en: 'Reactivity series (high→low): K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au. K is most reactive, Au is least. Metals above H displace H from acids.', hi: 'क्रियाशीलता: K>Na>Ca>Mg>Al>Zn>Fe>H>Cu>Ag>Au। K सर्वाधिक, Au सबसे कम।', pa: 'K>Na>Ca>Mg>Al>Zn>Fe>H>Cu>Ag>Au।' },
  },

  // =================== CARBON AND COMPOUNDS (ett-science-carbon) ===================
  {
    id: 'q-etts-cc-01', topicId: 'ett-science-carbon', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Covalent Bond',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Carbon forms covalent bonds because it:', hi: 'कार्बन सहसंयोजक बंध बनाता है क्योंकि:', pa: 'ਕਾਰਬਨ ਸਹਿ-ਯੋਜਕ ਬੰਧ ਕਿਉਂ ਬਣਾਉਂਦਾ ਹੈ?' },
    options: {
      A: { en: 'It would need to gain or lose 4 electrons for ionic bonding — energetically unfavourable', hi: 'आयनिक बंध के लिए 4 इलेक्ट्रॉन देना/लेना ऊर्जावान रूप से अनुकूल नहीं', pa: 'ਆਇਓਨਿਕ ਬੰਧ ਲਈ 4 ਇਲੈਕਟ੍ਰੋਨ ਦੇਣਾ/ਲੈਣਾ ਊਰਜਾ ਦ੍ਰਿਸ਼ਟੀ ਤੋਂ ਅਨੁਕੂਲ ਨਹੀਂ' },
      B: { en: 'It is a metal', hi: 'यह एक धातु है', pa: 'ਇਹ ਇੱਕ ਧਾਤ ਹੈ' },
      C: { en: 'It has only 2 valence electrons', hi: 'इसमें केवल 2 संयोजक इलेक्ट्रॉन हैं', pa: 'ਇਸ ਵਿੱਚ ਸਿਰਫ਼ 2 ਸੰਯੋਜਕ ਇਲੈਕਟ੍ਰੋਨ ਹਨ' },
      D: { en: 'Carbon cannot share electrons', hi: 'कार्बन इलेक्ट्रॉन साझा नहीं कर सकता', pa: 'ਕਾਰਬਨ ਇਲੈਕਟ੍ਰੋਨ ਸਾਂਝੇ ਨਹੀਂ ਕਰ ਸਕਦਾ' },
    },
    correct: 'A',
    explanation: { en: 'Carbon has 4 valence electrons. Gaining 4 would make C⁴⁻ (very large); losing 4 would need huge energy. So carbon shares electrons → covalent bonds. This makes carbon unique (tetravalency + catenation).', hi: 'C में 4 संयोजक e⁻। C⁴⁻ या C⁴⁺ बनाना ऊर्जावान दृष्टि से अनुकूल नहीं → सहसंयोजक।', pa: 'C ਵਿੱਚ 4 ਸੰਯੋਜਕ e⁻ → ਸਹਿ-ਯੋਜਕ ਬੰਧ।' },
  },

  // =================== CELL (ett-science-cell) ===================
  {
    id: 'q-etts-ce-01', topicId: 'ett-science-cell', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Cell Theory',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Who proposed the Cell Theory that all organisms are made of cells?', hi: 'कोशिका सिद्धांत — "सभी जीव कोशिकाओं से बने हैं" — किसने प्रतिपादित किया?', pa: 'ਕੋਸ਼ਿਕਾ ਸਿਧਾਂਤ ਕਿਸਨੇ ਦਿੱਤਾ?' },
    options: {
      A: { en: 'Schleiden and Schwann', hi: 'श्लाइडेन और श्वान', pa: 'ਸ਼ਲਾਈਡਨ ਅਤੇ ਸ਼ਵਾਨ' },
      B: { en: 'Robert Hooke', hi: 'रॉबर्ट हुक', pa: 'ਰੌਬਰਟ ਹੁੱਕ' },
      C: { en: 'Charles Darwin', hi: 'चार्ल्स डार्विन', pa: 'ਚਾਰਲਸ ਡਾਰਵਿਨ' },
      D: { en: 'Gregor Mendel', hi: 'ग्रेगोर मेंडल', pa: 'ਗ੍ਰੇਗਰ ਮੈਂਡਲ' },
    },
    correct: 'A',
    explanation: { en: 'Cell Theory (1838-39): Schleiden (plants) + Schwann (animals) proposed all living things are made of cells. Virchow added "cells arise from pre-existing cells". Hooke first observed cells (1665 in cork).', hi: 'श्लाइडेन+श्वान: कोशिका सिद्धांत (1838-39)। विर्चो: पुरानी कोशिका से नई। हुक: पहले देखा (1665)।', pa: 'ਸ਼ਲਾਈਡਨ+ਸ਼ਵਾਨ: ਕੋਸ਼ਿਕਾ ਸਿਧਾਂਤ।' },
  },
  {
    id: 'q-etts-ce-02', topicId: 'ett-science-cell', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Powerhouse of Cell',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Which organelle is called the "powerhouse of the cell"?', hi: 'किस कोशिकांग को "कोशिका का बिजलीघर" कहा जाता है?', pa: 'ਕਿਹੜੇ ਕੋਸ਼ਿਕਾ-ਅੰਗ ਨੂੰ "ਕੋਸ਼ਿਕਾ ਦਾ ਬਿਜਲੀ ਘਰ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ?' },
    options: {
      A: { en: 'Mitochondria', hi: 'माइटोकॉन्ड्रिया', pa: 'ਮਾਈਟੋਕਾਂਡਰੀਆ' },
      B: { en: 'Nucleus', hi: 'केंद्रक', pa: 'ਕੇਂਦਰਕ' },
      C: { en: 'Ribosome', hi: 'राइबोसोम', pa: 'ਰਾਈਬੋਸੋਮ' },
      D: { en: 'Chloroplast', hi: 'हरितलव', pa: 'ਕਲੋਰੋਪਲਾਸਟ' },
    },
    correct: 'A',
    explanation: { en: 'Mitochondria produce ATP through cellular respiration — hence "powerhouse of the cell". Chloroplasts are found only in plants (photosynthesis). Ribosomes make proteins. Nucleus contains DNA.', hi: 'माइटोकॉन्ड्रिया ATP बनाती है → बिजलीघर। क्लोरोप्लास्ट: प्रकाश संश्लेषण (पौधों में)।', pa: 'ਮਾਈਟੋਕਾਂਡਰੀਆ ATP ਬਣਾਉਂਦਾ ਹੈ।' },
  },

  // =================== TISSUES (ett-science-tissues) ===================
  {
    id: 'q-etts-ti-01', topicId: 'ett-science-tissues', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Meristematic Tissue',
    difficulty: 'medium', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Meristematic tissue in plants is responsible for:', hi: 'पौधों में विभज्योतक (meristematic) ऊतक किस कार्य के लिए जिम्मेदार है?', pa: 'ਪੌਦਿਆਂ ਵਿੱਚ ਵੰਡ-ਊਤਕ (meristematic tissue) ਕਿਸ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਹੈ?' },
    options: {
      A: { en: 'Growth (active cell division)', hi: 'वृद्धि (सक्रिय कोशिका विभाजन)', pa: 'ਵਿਕਾਸ (ਸਰਗਰਮ ਕੋਸ਼ਿਕਾ ਵੰਡ)' },
      B: { en: 'Photosynthesis', hi: 'प्रकाश संश्लेषण', pa: 'ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ' },
      C: { en: 'Water transport', hi: 'जल परिवहन', pa: 'ਪਾਣੀ ਦੀ ਢੋਆ-ਢੋਆਈ' },
      D: { en: 'Storage of food', hi: 'भोजन संचय', pa: 'ਭੋਜਨ ਸੰਗ੍ਰਹਿ' },
    },
    correct: 'A',
    explanation: { en: 'Meristematic cells (apical, lateral, intercalary) actively divide → responsible for growth. Permanent tissues (parenchyma, collenchyma, sclerenchyma) do not divide.', hi: 'विभज्योतक (शीर्ष, पार्श्व, अंतर्वेशी) सक्रिय रूप से विभाजित होते हैं → वृद्धि।', pa: 'ਵੰਡ-ਊਤਕ ਸਰਗਰਮ ਵੰਡ → ਵਿਕਾਸ।' },
  },

  // =================== DIVERSITY (ett-science-diversity) ===================
  {
    id: 'q-etts-di-01', topicId: 'ett-science-diversity', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Classification',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'The five-kingdom classification of living organisms was proposed by:', hi: 'जीवों का पाँच जगत वर्गीकरण किसने प्रस्तावित किया?', pa: 'ਜੀਵਾਂ ਦਾ ਪੰਜ-ਰਾਜ ਵਰਗੀਕਰਨ ਕਿਸਨੇ ਦਿੱਤਾ?' },
    options: {
      A: { en: 'R.H. Whittaker (1969)', hi: 'आर.एच. व्हिटेकर (1969)', pa: 'ਆਰ.ਐਚ. ਵਿਟੇਕਰ (1969)' },
      B: { en: 'Carl Linnaeus', hi: 'कार्ल लिनिअस', pa: 'ਕਾਰਲ ਲਿਨੀਅਸ' },
      C: { en: 'Charles Darwin', hi: 'चार्ल्स डार्विन', pa: 'ਚਾਰਲਸ ਡਾਰਵਿਨ' },
      D: { en: 'Ernst Haeckel', hi: 'अर्नस्ट हेकेल', pa: 'ਅਰਨਸਟ ਹੈਕਲ' },
    },
    correct: 'A',
    explanation: { en: 'Whittaker (1969) proposed five kingdoms: Monera, Protista, Fungi, Plantae, Animalia. Linnaeus gave binomial nomenclature (two-part scientific names).', hi: 'व्हिटेकर (1969): पाँच जगत। लिनिअस: द्विपद नामकरण।', pa: 'ਵਿਟੇਕਰ (1969): ਪੰਜ ਰਾਜ।' },
  },

  // =================== WHY DO WE FALL ILL (ett-science-illness) ===================
  {
    id: 'q-etts-il-01', topicId: 'ett-science-illness', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Infectious Disease',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Tuberculosis (TB) is caused by:', hi: 'तपेदिक (TB) किसके कारण होती है?', pa: 'ਤਪੇਦਿਕ (TB) ਕਿਸ ਕਾਰਨ ਹੁੰਦੀ ਹੈ?' },
    options: {
      A: { en: 'Bacterium (Mycobacterium tuberculosis)', hi: 'जीवाणु (माइकोबैक्टीरियम ट्यूबरक्युलोसिस)', pa: 'ਬੈਕਟੀਰੀਆ (ਮਾਈਕੋਬੈਕਟੀਰੀਅਮ ਟਿਊਬਰਕਿਊਲੋਸਿਸ)' },
      B: { en: 'Virus', hi: 'विषाणु', pa: 'ਵਾਇਰਸ' },
      C: { en: 'Protozoa', hi: 'प्रोटोज़ोआ', pa: 'ਪ੍ਰੋਟੋਜ਼ੋਆ' },
      D: { en: 'Fungus', hi: 'फफूंदी', pa: 'ਉੱਲੀ' },
    },
    correct: 'A',
    explanation: { en: 'TB caused by Mycobacterium tuberculosis (bacterium). Malaria = Plasmodium (protozoa). Common cold = Rhinovirus. Ringworm = Trichophyton (fungus).', hi: 'TB = जीवाणु। मलेरिया = प्रोटोज़ोआ। सर्दी = वायरस। दाद = फफूंदी।', pa: 'TB = ਬੈਕਟੀਰੀਆ। ਮਲੇਰੀਆ = ਪ੍ਰੋਟੋਜ਼ੋਆ।' },
  },

  // =================== NATURAL RESOURCES (ett-science-resources) ===================
  {
    id: 'q-etts-nr-01', topicId: 'ett-science-resources', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Carbon Cycle',
    difficulty: 'medium', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'In the carbon cycle, which process removes carbon dioxide from the atmosphere?', hi: 'कार्बन चक्र में, कौन-सी प्रक्रिया वायुमंडल से CO₂ हटाती है?', pa: 'ਕਾਰਬਨ ਚੱਕਰ ਵਿੱਚ, ਕਿਹੜੀ ਪ੍ਰਕਿਰਿਆ ਵਾਯੂਮੰਡਲ ਤੋਂ CO₂ ਹਟਾਉਂਦੀ ਹੈ?' },
    options: {
      A: { en: 'Photosynthesis', hi: 'प्रकाश संश्लेषण', pa: 'ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ' },
      B: { en: 'Respiration', hi: 'श्वसन', pa: 'ਸਾਹ ਕਿਰਿਆ' },
      C: { en: 'Combustion', hi: 'दहन', pa: 'ਬਲਨ' },
      D: { en: 'Decomposition', hi: 'अपघटन', pa: 'ਖਰਾਬੀ' },
    },
    correct: 'A',
    explanation: { en: 'Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. It fixes CO₂ from atmosphere. Respiration, combustion and decomposition all release CO₂ back.', hi: 'प्रकाश संश्लेषण CO₂ ग्रहण करता है। श्वसन, दहन, अपघटन CO₂ मुक्त करते हैं।', pa: 'ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ CO₂ ਲੈਂਦਾ ਹੈ।' },
  },

  // =================== FOOD RESOURCES (ett-science-food) ===================
  {
    id: 'q-etts-fr-01', topicId: 'ett-science-food', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Green Revolution',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'The "Green Revolution" in India was mainly associated with:', hi: 'भारत में "हरित क्रांति" मुख्य रूप से किससे जुड़ी थी?', pa: 'ਭਾਰਤ ਵਿੱਚ "ਹਰੀ ਕ੍ਰਾਂਤੀ" ਮੁੱਖ ਤੌਰ ਤੇ ਕਿਸ ਨਾਲ ਜੁੜੀ ਸੀ?' },
    options: {
      A: { en: 'High-yielding variety (HYV) seeds, fertilisers and irrigation', hi: 'उच्च उपज वाली किस्म (HYV) बीज, उर्वरक और सिंचाई', pa: 'ਉੱਚ ਪੈਦਾਵਾਰ ਕਿਸਮ (HYV) ਬੀਜ, ਖਾਦ ਅਤੇ ਸਿੰਚਾਈ' },
      B: { en: 'Increased forest cover', hi: 'वन क्षेत्र में वृद्धि', pa: 'ਜੰਗਲ ਖੇਤਰ ਵਿੱਚ ਵਾਧਾ' },
      C: { en: 'Organic farming', hi: 'जैविक खेती', pa: 'ਜੈਵਿਕ ਖੇਤੀ' },
      D: { en: 'Solar-powered irrigation', hi: 'सौर सिंचाई', pa: 'ਸੂਰਜੀ ਸਿੰਚਾਈ' },
    },
    correct: 'A',
    explanation: { en: 'Green Revolution (1960s-70s): M.S. Swaminathan; HYV wheat/rice, fertilisers, pesticides, irrigation transformed India\'s food production (food self-sufficiency). Punjab led with wheat.', hi: 'हरित क्रांति: एम.एस. स्वामीनाथन; HYV गेहूँ/चावल, उर्वरक, कीटनाशक। पंजाब: गेहूँ उत्पादन अग्रणी।', pa: 'ਹਰੀ ਕ੍ਰਾਂਤੀ: ਐਮ.ਐਸ. ਸਵਾਮੀਨਾਥਨ; HYV ਬੀਜ, ਖਾਦ। ਪੰਜਾਬ ਮੋਹਰੀ।' },
  },

  // =================== LIFE PROCESSES (ett-science-life) ===================
  {
    id: 'q-etts-lp-01', topicId: 'ett-science-life', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Photosynthesis',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Which organelle is the site of photosynthesis in plant cells?', hi: 'पौधों की कोशिकाओं में प्रकाश संश्लेषण का स्थान कौन-सा कोशिकांग है?', pa: 'ਪੌਦਿਆਂ ਦੀਆਂ ਕੋਸ਼ਿਕਾਵਾਂ ਵਿੱਚ ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ ਦਾ ਸਥਾਨ ਕਿਹੜਾ ਕੋਸ਼ਿਕਾ-ਅੰਗ ਹੈ?' },
    options: {
      A: { en: 'Chloroplast', hi: 'हरितलव', pa: 'ਕਲੋਰੋਪਲਾਸਟ' },
      B: { en: 'Mitochondria', hi: 'माइटोकॉन्ड्रिया', pa: 'ਮਾਈਟੋਕਾਂਡਰੀਆ' },
      C: { en: 'Ribosome', hi: 'राइबोसोम', pa: 'ਰਾਈਬੋਸੋਮ' },
      D: { en: 'Golgi apparatus', hi: 'गोल्जी उपकरण', pa: 'ਗੋਲਜੀ ਉਪਕਰਨ' },
    },
    correct: 'A',
    explanation: { en: 'Chloroplasts contain chlorophyll (green pigment) and are the sites of photosynthesis. Mitochondria do cellular respiration. Ribosomes make proteins.', hi: 'हरितलव: क्लोरोफिल युक्त, प्रकाश संश्लेषण। माइटोकॉन्ड्रिया: श्वसन।', pa: 'ਕਲੋਰੋਪਲਾਸਟ: ਕਲੋਰੋਫਿਲ, ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ।' },
  },

  // =================== CONTROL AND COORDINATION (ett-science-control) ===================
  {
    id: 'q-etts-co-01', topicId: 'ett-science-control', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Reflex Action',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Reflex actions (like withdrawing the hand from a flame) are controlled by:', hi: 'प्रतिवर्त क्रियाएँ (जैसे लौ से हाथ हटाना) नियंत्रित होती हैं:', pa: 'ਪਰਤਾਵਾ ਕਿਰਿਆਵਾਂ (ਜਿਵੇਂ ਲਾਟ ਤੋਂ ਹੱਥ ਹਟਾਉਣਾ) ਨਿਯੰਤਰਿਤ ਹੁੰਦੀਆਂ ਹਨ:' },
    options: {
      A: { en: 'Spinal cord (not the brain)', hi: 'मेरुरज्जु (मस्तिष्क नहीं)', pa: 'ਮੇਰੁਰੱਜੂ (ਦਿਮਾਗ਼ ਨਹੀਂ)' },
      B: { en: 'Cerebrum of the brain', hi: 'मस्तिष्क का प्रमस्तिष्क', pa: 'ਦਿਮਾਗ਼ ਦਾ ਸੇਰੇਬ੍ਰਮ' },
      C: { en: 'Endocrine glands', hi: 'अंतःस्रावी ग्रंथियाँ', pa: 'ਅੰਤਰ-ਸਰਾਵੀ ਗ੍ਰੰਥੀਆਂ' },
      D: { en: 'Cerebellum', hi: 'अनुमस्तिष्क', pa: 'ਸੇਰੇਬੇਲਮ' },
    },
    correct: 'A',
    explanation: { en: 'Reflex arc: receptor → sensory neuron → spinal cord → motor neuron → effector. The signal does NOT travel to the brain before the response — the spinal cord coordinates it directly (faster response).', hi: 'प्रतिवर्त चाप: ग्राही → संवेदी तंत्रिका → मेरुरज्जु → प्रेरक तंत्रिका → अपवाहक।', pa: 'ਪਰਤਾਵਾ ਚਾਪ: ਗ੍ਰਾਹੀ → ਮੇਰੁਰੱਜੂ → ਪ੍ਰੇਰਕ।' },
  },

  // =================== REPRODUCTION (ett-science-reproduction) ===================
  {
    id: 'q-etts-re-01', topicId: 'ett-science-reproduction', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Asexual Reproduction',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Budding as a mode of asexual reproduction is seen in:', hi: 'मुकुलन (Budding) किसमें देखी जाती है?', pa: 'ਮੁਕੁਲਨ (Budding) ਕਿਸ ਵਿੱਚ ਦੇਖੀ ਜਾਂਦੀ ਹੈ?' },
    options: {
      A: { en: 'Hydra and yeast', hi: 'हाइड्रा और यीस्ट', pa: 'ਹਾਈਡਰਾ ਅਤੇ ਖਮੀਰ' },
      B: { en: 'Amoeba', hi: 'अमीबा', pa: 'ਅਮੀਬਾ' },
      C: { en: 'Plasmodium', hi: 'प्लाज़्मोडियम', pa: 'ਪਲਾਜ਼ਮੋਡੀਅਮ' },
      D: { en: 'Spirogyra', hi: 'स्पाइरोगाइरा', pa: 'ਸਪਾਈਰੋਗਾਈਰਾ' },
    },
    correct: 'A',
    explanation: { en: 'Budding: a small outgrowth (bud) forms from the parent body and develops into a new individual. Examples: Hydra (animal), Yeast (fungus). Amoeba = binary fission. Spirogyra = fragmentation.', hi: 'मुकुलन: Hydra (जंतु), Yeast (कवक)। अमीबा: द्विविभाजन। स्पाइरोगाइरा: खंडन।', pa: 'ਮੁਕੁਲਨ: ਹਾਈਡਰਾ, ਖਮੀਰ।' },
  },

  // =================== HEREDITY (ett-science-heredity) ===================
  {
    id: 'q-etts-he-01', topicId: 'ett-science-heredity', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Mendel',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'Gregor Mendel is called the "Father of Genetics". He conducted his experiments on:', hi: 'ग्रेगोर मेंडल को "आनुवंशिकता का जनक" कहा जाता है। उन्होंने अपने प्रयोग किस पर किए?', pa: 'ਗ੍ਰੇਗਰ ਮੈਂਡਲ ਨੂੰ "ਜੈਨੇਟਿਕਸ ਦਾ ਪਿਤਾ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ। ਉਸਨੇ ਆਪਣੇ ਪ੍ਰਯੋਗ ਕਿਸ ਤੇ ਕੀਤੇ?' },
    options: {
      A: { en: 'Garden pea (Pisum sativum)', hi: 'मटर (Pisum sativum)', pa: 'ਮਟਰ (Pisum sativum)' },
      B: { en: 'Fruit fly (Drosophila)', hi: 'फल मक्खी (ड्रोसोफिला)', pa: 'ਫ਼ਲ ਮੱਖੀ (ਡ੍ਰੋਸੋਫਿਲਾ)' },
      C: { en: 'Mouse', hi: 'चूहा', pa: 'ਚੂਹਾ' },
      D: { en: 'Wheat', hi: 'गेहूँ', pa: 'ਕਣਕ' },
    },
    correct: 'A',
    explanation: { en: 'Mendel worked with garden pea (Pisum sativum) — 7 pairs of contrasting traits. Drosophila was used by Thomas Morgan for chromosomal theory. Mendel\'s laws: Segregation and Independent Assortment.', hi: 'मेंडल: मटर — 7 विपरीत लक्षण। मॉर्गन: ड्रोसोफिला।', pa: 'ਮੈਂਡਲ: ਮਟਰ — 7 ਵਿਰੋਧੀ ਲੱਛਣ।' },
  },
  {
    id: 'q-etts-he-02', topicId: 'ett-science-heredity', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Sex Determination',
    difficulty: 'medium', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'In humans, sex of the child is determined by:', hi: 'मनुष्य में बच्चे का लिंग निर्धारण किसके द्वारा होता है?', pa: 'ਮਨੁੱਖਾਂ ਵਿੱਚ ਬੱਚੇ ਦਾ ਲਿੰਗ ਕਿਸ ਦੁਆਰਾ ਨਿਰਧਾਰਿਤ ਹੁੰਦਾ ਹੈ?' },
    options: {
      A: { en: 'Chromosome from the father (X or Y sperm)', hi: 'पिता के क्रोमोसोम (X या Y शुक्राणु)', pa: 'ਪਿਤਾ ਦੇ ਕ੍ਰੋਮੋਸੋਮ (X ਜਾਂ Y ਸ਼ੁਕਰਾਣੂ)' },
      B: { en: 'Mother\'s egg chromosome', hi: 'माँ के अंडाणु का क्रोमोसोम', pa: 'ਮਾਂ ਦੇ ਅੰਡੇ ਦਾ ਕ੍ਰੋਮੋਸੋਮ' },
      C: { en: 'Temperature during conception', hi: 'गर्भाधान के समय तापमान', pa: 'ਗਰਭ-ਧਾਰਨ ਸਮੇਂ ਤਾਪਮਾਨ' },
      D: { en: 'Nutrition of the mother', hi: 'माँ का पोषण', pa: 'ਮਾਂ ਦਾ ਪੋਸ਼ਣ' },
    },
    correct: 'A',
    explanation: { en: 'Mother always contributes X chromosome. Father contributes X (→ girl XX) or Y (→ boy XY). So the father\'s sperm determines sex. This is a scientifically critical fact against female sex-selection prejudice.', hi: 'माँ: सदैव X। पिता: X (→ XX लड़की) या Y (→ XY लड़का)। लिंग पिता द्वारा।', pa: 'ਮਾਂ: ਹਮੇਸ਼ਾ X। ਪਿਤਾ: X ਜਾਂ Y। ਲਿੰਗ ਪਿਤਾ ਦੁਆਰਾ।' },
  },

  // =================== HUMAN EYE (ett-science-eye) ===================
  {
    id: 'q-etts-ey-01', topicId: 'ett-science-eye', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Eye Defects',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'A person cannot see nearby objects clearly. Which defect does he have?', hi: 'एक व्यक्ति पास की वस्तुएँ स्पष्ट नहीं देख सकता। उसे कौन-सा दोष है?', pa: 'ਇੱਕ ਵਿਅਕਤੀ ਨੇੜੇ ਦੀਆਂ ਵਸਤੂਆਂ ਸਾਫ਼ ਨਹੀਂ ਦੇਖ ਸਕਦਾ। ਉਸ ਨੂੰ ਕਿਹੜਾ ਦੋਸ਼ ਹੈ?' },
    options: {
      A: { en: 'Hypermetropia (far-sightedness)', hi: 'दूरदर्शिता (Hypermetropia)', pa: 'ਦੂਰਦਰਸ਼ਿਤਾ (Hypermetropia)' },
      B: { en: 'Myopia (near-sightedness)', hi: 'निकटदर्शिता (Myopia)', pa: 'ਨੇੜਦਰਸ਼ਿਤਾ (Myopia)' },
      C: { en: 'Astigmatism', hi: 'दृष्टिवैषम्य', pa: 'ਦ੍ਰਿਸ਼ਟੀਵੈਸ਼ਮ' },
      D: { en: 'Presbyopia', hi: 'जरादूरदर्शिता', pa: 'ਬੁਢਾਪੇ ਦਾ ਦੋਸ਼' },
    },
    correct: 'A',
    explanation: { en: 'Hypermetropia: cannot see NEAR objects clearly (image forms behind retina; eyeball too short). Corrected by convex lens. Myopia: cannot see FAR objects (image in front of retina); corrected by concave lens.', hi: 'दूरदर्शिता: पास नहीं → उत्तल लेंस। निकटदर्शिता: दूर नहीं → अवतल लेंस।', pa: 'ਦੂਰਦਰਸ਼ਿਤਾ: ਨੇੜੇ ਨਹੀਂ → ਉੱਤਲ ਲੈਂਸ।' },
  },
  {
    id: 'q-etts-ey-02', topicId: 'ett-science-eye', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Sky Blue Scattering',
    difficulty: 'medium', originType: 'authored-original', reviewStatus: 'reviewed',
    rightsProvenance: SCI_PROV,
    question: { en: 'The sky appears blue because of:', hi: 'आकाश नीला क्यों दिखता है?', pa: 'ਅਸਮਾਨ ਨੀਲਾ ਕਿਉਂ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ?' },
    options: {
      A: { en: 'Scattering of blue light more than other colours by atmospheric molecules', hi: 'वायुमंडलीय अणुओं द्वारा नीले प्रकाश का अन्य रंगों से अधिक प्रकीर्णन', pa: 'ਵਾਯੂਮੰਡਲੀ ਅਣੂਆਂ ਦੁਆਰਾ ਨੀਲੇ ਪ੍ਰਕਾਸ਼ ਦਾ ਹੋਰਾਂ ਨਾਲੋਂ ਵੱਧ ਖਿੰਡਾਅ' },
      B: { en: 'Reflection from the ocean', hi: 'समुद्र से परावर्तन', pa: 'ਸਮੁੰਦਰ ਤੋਂ ਪਰਾਵਰਤਨ' },
      C: { en: 'Refraction by the upper atmosphere', hi: 'ऊपरी वायुमंडल में अपवर्तन', pa: 'ਉੱਪਰੀ ਵਾਯੂਮੰਡਲ ਵਿੱਚ ਅਪਵਰਤਨ' },
      D: { en: 'Absorption of red light', hi: 'लाल प्रकाश का अवशोषण', pa: 'ਲਾਲ ਪ੍ਰਕਾਸ਼ ਦਾ ਸੋਖਣ' },
    },
    correct: 'A',
    explanation: { en: 'Tyndall scattering (Rayleigh): shorter wavelengths (violet/blue) scatter much more than longer (red/orange). Blue is more visible to our eyes than violet → sky looks blue. At sunset, light travels longer path → blue scattered away → red/orange sky.', hi: 'रेले प्रकीर्णन: लघु तरंगदैर्ध्य (नीला/बैंगनी) अधिक प्रकीर्णित। नीला हमें अधिक दिखता है।', pa: 'ਰੇਲੇ ਖਿੰਡਾਅ: ਛੋਟੀ ਤਰੰਗ-ਲੰਬਾਈ ਵੱਧ ਖਿੰਡਦੀ ਹੈ।' },
  },
];
