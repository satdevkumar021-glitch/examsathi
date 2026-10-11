// Audit helper: shows which source exam labels feed shared GK topics, to detect depth/level leakage
// (e.g. Master Cadre graduate-level items reaching Clerk/CAPF/Agniveer GK pools) and topic-level empty pools.
import { readFileSync } from 'node:fs'; import path from 'node:path'; import vm from 'node:vm'; import ts from 'typescript';
const cache=new Map();const window={localStorage:{getItem:()=>null,setItem(){},removeItem(){}},dispatchEvent(){}};
function load(f){f=path.resolve(f);if(!path.extname(f))f+='.ts';if(f.endsWith('.json'))return{default:JSON.parse(readFileSync(f,'utf8'))};if(cache.has(f))return cache.get(f).exports;const l={exports:{}};cache.set(f,l);const js=ts.transpileModule(readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;vm.runInNewContext(js,{module:l,exports:l.exports,require:n=>load(n.startsWith('@/')?path.resolve('src',n.slice(2)):path.resolve(path.dirname(f),n)),window,Event:class{},Date,Math,Set,Map,process,console});return l.exports;}
const engine = load('src/lib/data/question_bank_engine.ts');
const shared = { 'punjab-clerk': 'general-science-concepts', 'central-capf-gd': 'general-science-concepts', 'army-agniveer': 'science-agniveer', 'rajasthan-police': 'science-tech-police', 'htet-l2': 'subject-specific-htet-l2', 'reet-level2-science-math': 'physics-concepts' };
const result = { sharedTopicLabels: {}, zeroAuthoredTopicPools: {} };
for (const [exam, topic] of Object.entries(shared)) {
  const pool = engine.getQuestionPool({ examId: exam, topicId: topic }).filter(q => !q.id.startsWith('gen-'));
  const tags = {}; for (const q of pool) { const t = (q.examTag || '').replace(/\s+\d{4}.*$/, ''); tags[t] = (tags[t] || 0) + 1; }
  result.sharedTopicLabels[`${exam}/${topic}`] = { authored: pool.length, masterCadreLabelled: pool.filter(q => /Master Cadre|Lecturer/i.test(q.examTag || '')).length, hardItems: pool.filter(q => q.difficulty === 'hard').length, tags };
}
for (const [exam, topic] of [['reet-level1','primary-mathematics'],['ctet-paper1','primary-mathematics'],['rajasthan-police','raj-history-police'],['rajasthan-3rd-grade','rajasthan-heritage-forts'],['central-capf-gd','elementary-mathematics'],['ssc-cgl','ssc-cgl-quant']]) {
  const pool = engine.getQuestionPool({ examId: exam, topicId: topic });
  result.zeroAuthoredTopicPools[`${exam}/${topic}`] = { total: pool.length, generated: pool.filter(q => q.id.startsWith('gen-')).length };
}
process.stdout.write(JSON.stringify(result, null, 2));
