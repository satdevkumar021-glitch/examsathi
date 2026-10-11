// Audit helper: inventories question provenance fields (year/examTag/originType/reviewStatus) per source file.
import { readFileSync } from 'node:fs'; import path from 'node:path'; import vm from 'node:vm'; import ts from 'typescript';
const cache=new Map();const window={localStorage:{getItem:()=>null,setItem(){},removeItem(){}},dispatchEvent(){}};
function load(f){f=path.resolve(f);if(!path.extname(f))f+='.ts';if(f.endsWith('.json'))return{default:JSON.parse(readFileSync(f,'utf8'))};if(cache.has(f))return cache.get(f).exports;const l={exports:{}};cache.set(f,l);const js=ts.transpileModule(readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;vm.runInNewContext(js,{module:l,exports:l.exports,require:n=>load(n.startsWith('@/')?path.resolve('src',n.slice(2)):path.resolve(path.dirname(f),n)),window,Event:class{},Date,Math,Set,Map,process,console});return l.exports;}
const { ALL_QUESTIONS } = load('src/lib/data/questions.ts');
const by = (fn) => { const m = {}; for (const q of ALL_QUESTIONS) { const k = fn(q); m[k] = (m[k] || 0) + 1; } return m; };
const out = {
  total: ALL_QUESTIONS.length,
  originType: by(q => q.originType || '(none)'),
  reviewStatus: by(q => q.reviewStatus || '(none)'),
  withYear: ALL_QUESTIONS.filter(q => q.year !== undefined).length,
  withYearByOrigin: by(q => q.year !== undefined ? (q.originType || '(none)') : 'no-year'),
  pyqLikeTagsWithoutSource: ALL_QUESTIONS.filter(q => /PYQ|Previous Year|\b20[0-2]\d\b/i.test(q.examTag || '') && !(q.sourceUrl || q.source || q.answerKeyUrl)).length,
  sampleYearTags: [...new Set(ALL_QUESTIONS.filter(q => q.year !== undefined).map(q => `${q.year}|${q.examTag}|${q.originType}`))].slice(0, 25),
  fields: [...new Set(ALL_QUESTIONS.flatMap(q => Object.keys(q)))],
};
process.stdout.write(JSON.stringify(out, null, 2));
