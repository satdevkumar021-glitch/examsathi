import type { Lesson } from './types';
const modules: Array<{ id: string; title: string; subject: string; notes: Array<[string, string]> }> = [
  { id: 'percent', title: 'Percentages', subject: 'mathematics', notes: [
    ['Meaning', 'A percentage expresses a quantity per hundred: p% = p/100.'],
    ['Percentage of a number', 'Multiply the base quantity by p/100. For example, 15% of 200 is 30.'],
    ['Percentage change', 'Percentage change = (new value − original value) / original value × 100.'],
    ['Successive changes', 'Two signed percentage changes a and b combine to a + b + ab/100.'],
    ['Reverse calculation', 'If a value increased by p%, divide the final value by 1 + p/100 to find the original.'],
    ['Percentage points', 'A change from 20% to 30% is 10 percentage points, but a 50% relative increase.'],
    ['Fraction equivalents', '1/2 = 50%, 1/4 = 25%, 1/5 = 20%, and 1/8 = 12.5%.'],
    ['Common trap', 'Always identify the base. An increase followed by an equal percentage decrease does not restore the original.'],
  ] },
  { id: 'ratio', title: 'Ratio & proportion', subject: 'mathematics', notes: [
    ['Ratio', 'A ratio a:b compares two quantities in the same units.'],
    ['Simplifying ratios', 'Divide both terms by their greatest common divisor. Thus 18:24 simplifies to 3:4.'],
    ['Sharing a total', 'To share total T in ratio a:b, the first share is Ta/(a+b) and the second is Tb/(a+b).'],
    ['Proportion', 'If a/b = c/d, then ad = bc.'],
    ['Direct proportion', 'In direct proportion, y/x is constant. Doubling x doubles y.'],
    ['Inverse proportion', 'In inverse proportion, xy is constant. Doubling x halves y.'],
    ['Equivalent ratios', 'Multiplying every term by the same nonzero factor preserves a ratio.'],
    ['Units', 'Convert units first: 1 metre to 50 centimetres is 100:50, or 2:1.'],
  ] },
  { id: 'ssc-cgl-quant', title: 'SSC quantitative aptitude: study map', subject: 'mathematics', notes: [
    ['Number system', 'Revise factors, multiples, primes, HCF, LCM, divisibility, integers, fractions and decimals.'],
    ['Arithmetic', 'Connect percentages with ratio, average, discount, profit, loss and interest.'],
    ['Work rates', 'If a worker finishes a job in t days, their work rate is 1/t jobs per day. Add rates for combined work.'],
    ['Speed', 'Speed = distance / time. Convert km/h to m/s by multiplying by 5/18.'],
    ['Algebra', 'Use identities, factorisation and linear equations; substitute a result back into the original expression.'],
    ['Geometry', 'Revise angle relationships, triangle similarity, circle theorems and coordinate basics.'],
    ['Mensuration', 'Keep lengths, areas and volumes in consistent units; area uses squared units and volume uses cubed units.'],
    ['Data interpretation', 'Read chart labels and units before calculating totals, ratios or percentage changes.'],
  ] },
  { id: 'ssc-cgl-reasoning', title: 'Reasoning: systematic problem solving', subject: 'reasoning', notes: [
    ['Analogy', 'Identify the relationship in the first pair before applying it to the second pair.'],
    ['Classification', 'Choose the item that does not share the defining rule; avoid incidental similarities.'],
    ['Number series', 'Test differences, ratios and alternating subsequences; verify a rule across every transition.'],
    ['Coding', 'Track a consistent letter or number transformation. Use A=1 through Z=26 only when the question defines that rule.'],
    ['Directions', 'Represent north and east as positive axes; add movements before calculating displacement.'],
    ['Blood relations', 'Draw a family tree and preserve the direction of each relationship.'],
    ['Syllogisms', 'Use only the stated premises; a real-world assumption is not a valid deduction.'],
    ['Arrangement', 'Write fixed positions first, then apply adjacency, ordering and exclusion constraints.'],
  ] },
  { id: 'child-development-pedagogy', title: 'Child development & inclusive teaching', subject: 'pedagogy', notes: [
    ['Growth and development', 'Growth concerns quantitative physical changes. Development includes qualitative changes in abilities and functioning.'],
    ['Individual differences', 'Learners develop at different rates. Use varied examples and flexible support rather than ranking children by one task.'],
    ['Piaget', 'Piaget described sensorimotor, preoperational, concrete operational and formal operational stages. Stage ages are approximate.'],
    ['Vygotsky', 'The zone of proximal development distinguishes independent performance from performance with suitable guidance.'],
    ['Scaffolding', 'Scaffolding is temporary, adjustable support that is gradually removed as competence grows.'],
    ['Formative assessment', 'Formative assessment uses evidence during learning to improve teaching and provide actionable feedback.'],
    ['Inclusive education', 'Inclusive teaching removes barriers to participation through accessible materials, appropriate accommodations and respectful expectations.'],
    ['Constructivism', 'Learners actively build understanding by connecting experiences with prior knowledge; misconceptions should be explored and addressed.'],
  ] },
  { id: 'science-concepts', title: 'General science: foundations', subject: 'science', notes: [
    ['Measurement', 'The SI base unit of length is the metre, mass is the kilogram and time is the second.'],
    ['Speed and velocity', 'Speed is scalar; velocity includes direction. Acceleration is the rate of change of velocity.'],
    ['Force', 'For constant mass, Newton’s second law gives force = mass × acceleration.'],
    ['Electric current', 'Electric current is charge passing a point per unit time; its SI unit is the ampere.'],
    ['Matter', 'An element contains one kind of atom. A compound contains elements chemically combined in a fixed proportion.'],
    ['Acids and bases', 'For aqueous solutions at about 25°C, pH below 7 is acidic, pH 7 is neutral and pH above 7 is basic.'],
    ['Cells', 'Cells are basic structural and functional units of living organisms. Plant cells have a cell wall outside the membrane.'],
    ['Photosynthesis', 'Photosynthesis uses light energy to form carbohydrates from carbon dioxide and water, releasing oxygen in oxygenic organisms.'],
  ] },
];
const escape = (text: string) => text.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
export const SUPPLEMENTAL_LESSONS: Record<string, Lesson> = Object.fromEntries(modules.map(module => {
  const content = `<p>Foundation study notes. The expanded question sets are practice variants, not previous-year papers. English source text is retained when a reviewed translation is not yet available.</p>${module.notes.map(([title, note]) => `<section><h3>${escape(title)}</h3><p>${escape(note)}</p></section>`).join('')}`;
  return [module.id, {
    id: module.id, topicId: module.id, subjectId: module.subject, category: module.subject === 'mathematics' ? 'math' : module.subject === 'pedagogy' ? 'pedagogy' : module.subject === 'science' ? 'science' : 'general',
    title: { en: module.title, hi: module.title, pa: module.title }, examRelevance: 'Foundation preparation. Refer to the current official syllabus for paper-specific requirements.', estimatedTime: '20 minutes', content: { en: content, hi: content, pa: content },
    summary: { en: module.notes.map(n => n[0]).join(' • '), hi: module.notes.map(n => n[0]).join(' • '), pa: module.notes.map(n => n[0]).join(' • ') },
    keyNotes: { en: module.notes.map(n => n[1]), hi: module.notes.map(n => n[1]), pa: module.notes.map(n => n[1]) },
    flashcards: module.notes.map(([title, answer], i) => ({ id: `${module.id}-foundation-${i}`, q: { en: `Explain: ${title}`, hi: `Explain: ${title}`, pa: `Explain: ${title}` }, a: { en: answer, hi: answer, pa: answer }, difficulty: 'easy' })),
    videos: [{ title: `${module.title}: search NCERT official videos`, channel: 'NCERT Official', url: `https://www.youtube.com/ncertofficial/search?query=${encodeURIComponent(module.title)}`, language: 'hi/en' }],
    bookRefs: [{ title: 'NCERT textbooks', author: 'NCERT', chapters: 'Choose the relevant class and subject in the official catalogue.', type: 'ncert' }],
    documents: [{ title: 'NCERT textbook PDFs — choose class and chapter', url: 'https://ncert.nic.in/textbook.php', language: 'hi/en', type: 'textbook' }, { title: 'ePathshala multilingual textbook catalogue', url: 'https://epathshala.nic.in/', language: 'multiple', type: 'official' }],
    sources: [{ title: 'NCERT textbook catalogue', url: 'https://ncert.nic.in/textbook.php' }],
  } satisfies Lesson];
}));
