import { readFileSync, writeFileSync } from 'node:fs';
const groups = ['computer', 'pedagogy', 'science', 'regional', 'english', 'evs', 'hindi', 'teaching', 'language'];
const units = groups.map(group => ({group, items: readFileSync(`src/lib/data/content/${group}-foundations.tsv`, 'utf8').trim().split('\n').map((line,index) => {
 const fields = line.split('|');
 if(fields.length !== 7) throw new Error(`${group}:${index+1}: expected 7 fields`);
 const [subtopic,prompt,answer,...rest] = fields;
 const distractors = rest.slice(0,3), explanation=rest[3];
 if(new Set([answer,...distractors].map(v=>v.trim().toLowerCase())).size!==4) throw new Error(`${group}:${index+1}: repeated option`);
 return {id:`foundation-${group}-${index+1}`,subtopic,prompt,answer,distractors,explanation};
})}));
writeFileSync('src/lib/data/content/foundation-content.json', JSON.stringify(units,null,2)+'\n');
console.log(groups.map((group,i)=>`${group}: ${units[i].items.length} authored questions`).join('\n'));
