import { readFileSync, writeFileSync } from 'node:fs';
const audit=JSON.parse(readFileSync('src/lib/data/coverage-audit.json','utf8'));
const urls=[...new Set(audit.exams.flatMap(exam=>exam.topics.flatMap(topic=>topic.documents)))];
const results=[]; let cursor=0;
await Promise.all(Array.from({length:6},async()=>{
 while(cursor<urls.length){const url=urls[cursor++];
  try { const response=await fetch(url,{signal:AbortSignal.timeout(8000),headers:{Range:'bytes=0-511'}}); results.push({url,status:response.status,contentType:response.headers.get('content-type'),result:response.ok?'reachable':'unverified-or-unavailable'}); await response.body?.cancel(); }
  catch {results.push({url,result:'could-not-verify-network-or-certificate'});}
 }
}));
writeFileSync('docs/verification/RESOURCE_LINK_CHECK_2026-10-08.json',JSON.stringify({checkedOn:'2026-10-08',note:'HTTP reachability is not a guarantee of topic relevance, current syllabus, licence or complete file contents. Network/certificate failures are not classified as dead links.',results},null,2));
console.log({total:results.length,reachable:results.filter(r=>r.result==='reachable').length,notVerified:results.filter(r=>r.result!=='reachable').length});
