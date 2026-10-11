import type { Question } from './questions';

const tr = (en: string, hi: string, pa: string) => ({ en, hi, pa });
const keys = ['A', 'B', 'C', 'D'] as const;
/** Fifty computed exercises across five skills. Not fifty new concepts or PYQs. */
export const CLERK_DATA_PRACTICE: Question[] = Array.from({ length: 10 }, (_, dataset) => {
  const first = 40 + dataset * 8, second = first * 2, third = first * 3;
  const table = tr(`Practice table ${dataset + 1}: centre P = ${first}, Q = ${second}, R = ${third} candidates.`,
    `अभ्यास तालिका ${dataset + 1}: केंद्र P = ${first}, Q = ${second}, R = ${third} अभ्यर्थी।`,
    `ਅਭਿਆਸ ਸਾਰਣੀ ${dataset + 1}: ਕੇਂਦਰ P = ${first}, Q = ${second}, R = ${third} ਉਮੀਦਵਾਰ।`);
  const tasks = [
    { skill: 'total', q: tr('What is the total across all three centres?', 'तीनों केंद्रों का कुल कितना है?', 'ਤਿੰਨਾਂ ਕੇਂਦਰਾਂ ਦਾ ਕੁੱਲ ਕਿੰਨਾ ਹੈ?'),
      values: [first + second + third, first + second, second + third, third - first],
      reasons: [tr('Add all three counts.', 'तीनों संख्याएँ जोड़ें।', 'ਤਿੰਨੇ ਗਿਣਤੀਆਂ ਜੋੜੋ।'), tr('This omits R.', 'इसमें R छूट गया है।', 'ਇਸ ਵਿੱਚ R ਛੱਡਿਆ ਗਿਆ ਹੈ।'), tr('This omits P.', 'इसमें P छूट गया है।', 'ਇਸ ਵਿੱਚ P ਛੱਡਿਆ ਗਿਆ ਹੈ।'), tr('This is a difference, not the total.', 'यह अंतर है, कुल नहीं।', 'ਇਹ ਫਰਕ ਹੈ, ਕੁੱਲ ਨਹੀਂ।')], working: `${first} + ${second} + ${third} = ${first + second + third}` },
    { skill: 'difference', q: tr('How many more candidates are at R than Q?', 'R पर Q से कितने अधिक अभ्यर्थी हैं?', 'R ਵਿੱਚ Q ਨਾਲੋਂ ਕਿੰਨੇ ਵੱਧ ਉਮੀਦਵਾਰ ਹਨ?'),
      values: [third - second, third + second, third - first, second + first],
      reasons: [tr('Subtract Q from R.', 'R में से Q घटाएँ।', 'R ਵਿੱਚੋਂ Q ਘਟਾਓ।'), tr('Adding does not give a difference.', 'जोड़ने से अंतर नहीं मिलता।', 'ਜੋੜ ਨਾਲ ਫਰਕ ਨਹੀਂ ਮਿਲਦਾ।'), tr('This compares R with P instead of Q.', 'इसमें R की तुलना P से हुई है।', 'ਇਹ R ਦੀ ਤੁਲਨਾ P ਨਾਲ ਕਰਦਾ ਹੈ।'), tr('This adds P and Q instead of comparing R and Q.', 'यह P और Q का योग है।', 'ਇਹ P ਅਤੇ Q ਦਾ ਜੋੜ ਹੈ।')], working: `${third} − ${second} = ${third - second}` },
    { skill: 'mean', q: tr('What is the arithmetic mean of the three centre counts?', 'तीनों केंद्रों की संख्या का अंकगणितीय औसत कितना है?', 'ਤਿੰਨਾਂ ਕੇਂਦਰਾਂ ਦੀ ਗਿਣਤੀ ਦਾ ਅੰਕਗਣਿਤ ਔਸਤ ਕਿੰਨਾ ਹੈ?'),
      values: [(first + second + third) / 3, first + second + third, (first + second + third) / 2, first],
      reasons: [tr('Divide the total by three centres.', 'कुल को तीन केंद्रों से भाग दें।', 'ਕੁੱਲ ਨੂੰ ਤਿੰਨ ਕੇਂਦਰਾਂ ਨਾਲ ਵੰਡੋ।'), tr('This is the total before division.', 'यह भाग देने से पहले का कुल है।', 'ਇਹ ਵੰਡਣ ਤੋਂ ਪਹਿਲਾਂ ਦਾ ਕੁੱਲ ਹੈ।'), tr('There are three observations, not two.', 'प्रेक्षण तीन हैं, दो नहीं।', 'ਨਿਰੀਖਣ ਤਿੰਨ ਹਨ, ਦੋ ਨਹੀਂ।'), tr('This is only the first count.', 'यह केवल पहली संख्या है।', 'ਇਹ ਸਿਰਫ਼ ਪਹਿਲੀ ਗਿਣਤੀ ਹੈ।')], working: `(${first} + ${second} + ${third}) ÷ 3 = ${(first + second + third) / 3}` },
    { skill: 'share', q: tr('What percentage of the total is at R?', 'कुल का कितना प्रतिशत R पर है?', 'ਕੁੱਲ ਦਾ ਕਿੰਨਾ ਪ੍ਰਤੀਸ਼ਤ R ਵਿੱਚ ਹੈ?'),
      values: [50, 300, 200, 100],
      reasons: [tr('Use the all-centre total as the denominator.', 'हर में सभी केंद्रों का कुल लें।', 'ਹਰ ਵਿੱਚ ਸਾਰੇ ਕੇਂਦਰਾਂ ਦਾ ਕੁੱਲ ਲਵੋ।'), tr('This uses P as the denominator.', 'इसमें हर P की संख्या है।', 'ਇਸ ਵਿੱਚ ਹਰ P ਦੀ ਗਿਣਤੀ ਹੈ।'), tr('This calculates the increase from P to R.', 'यह P से R की प्रतिशत वृद्धि है।', 'ਇਹ P ਤੋਂ R ਦਾ ਪ੍ਰਤੀਸ਼ਤ ਵਾਧਾ ਹੈ।'), tr('R is only part of the total, not all of it.', 'R कुल का केवल एक भाग है।', 'R ਕੁੱਲ ਦਾ ਸਿਰਫ਼ ਇੱਕ ਹਿੱਸਾ ਹੈ।')], working: `${third} ÷ ${first + second + third} × 100 = 50%` },
    { skill: 'change', q: tr('What is the percentage increase from the P count to the Q count?', 'P की संख्या से Q की संख्या तक प्रतिशत वृद्धि कितनी है?', 'P ਦੀ ਗਿਣਤੀ ਤੋਂ Q ਦੀ ਗਿਣਤੀ ਤੱਕ ਪ੍ਰਤੀਸ਼ਤ ਵਾਧਾ ਕਿੰਨਾ ਹੈ?'),
      values: [100, 50, 200, 25],
      reasons: [tr('Divide the increase by the original P count.', 'वृद्धि को मूल P की संख्या से भाग दें।', 'ਵਾਧੇ ਨੂੰ ਮੂਲ P ਦੀ ਗਿਣਤੀ ਨਾਲ ਵੰਡੋ।'), tr('This incorrectly divides by the final Q count.', 'यह गलत रूप से अंतिम Q की संख्या से भाग देता है।', 'ਇਹ ਗਲਤੀ ਨਾਲ ਅੰਤਿਮ Q ਦੀ ਗਿਣਤੀ ਨਾਲ ਵੰਡਦਾ ਹੈ।'), tr('This is Q as a percentage of P, before subtracting the original 100%.', 'यह मूल 100% घटाए बिना Q का P के सापेक्ष प्रतिशत है।', 'ਇਹ ਮੂਲ 100% ਘਟਾਏ ਬਿਨਾਂ Q ਦਾ P ਦੇ ਮੁਕਾਬਲੇ ਪ੍ਰਤੀਸ਼ਤ ਹੈ।'), tr('This is P as a percentage of the P-and-R subtotal, a different comparison.', 'यह P और R के उपकुल में P का प्रतिशत है, अलग तुलना।', 'ਇਹ P ਅਤੇ R ਦੇ ਉਪਕੁੱਲ ਵਿੱਚ P ਦਾ ਪ੍ਰਤੀਸ਼ਤ ਹੈ, ਵੱਖਰੀ ਤੁਲਨਾ।')], working: `(${second} − ${first}) ÷ ${first} × 100 = 100%` },
  ];
  return tasks.map((task, index): Question => {
    const rotation = (dataset + index) % 4;
    const options = {} as Question['options'];
    const distractorExplanations = {} as NonNullable<Question['distractorExplanations']>;
    task.values.forEach((value, option) => {
      const key = keys[(option + rotation) % 4];
      options[key] = tr(String(value), String(value), String(value));
      distractorExplanations[key] = task.reasons[option];
    });
    return { id: `gen-clerk-data-${dataset + 1}-${task.skill}`, topicId: 'clerk-data-analysis', subjectId: 'clerk-reasoning',
      examTag: 'AI-GENERATED computed practice — needs human review; not PYQ',
      conceptGroupId: `data-${task.skill}`, learningObjective: task.skill,
      question: tr(`${table.en} ${task.q.en}`, `${table.hi} ${task.q.hi}`, `${table.pa} ${task.q.pa}`),
      options, correct: keys[rotation], distractorExplanations,
      explanation: tr(`${task.working}. ${task.reasons[0].en}`, `${task.working}। ${task.reasons[0].hi}`, `${task.working}। ${task.reasons[0].pa}`),
      difficulty: index < 2 ? 'easy' : index < 4 ? 'medium' : 'hard',
      originType: 'computed-variant', reviewStatus: 'draft', editorialStatus: 'authored',
      availableLanguages: ['en', 'hi', 'pa'], explanationLanguages: ['en', 'hi', 'pa'],
    };
  });
}).flat();
