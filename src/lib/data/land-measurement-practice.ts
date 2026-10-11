import type { Question } from './questions';
/** Local units vary. Every exercise states its own conversion assumptions. */
export function generateLandMeasurementPractice(topicId: string, count: number): Question[] {
  if (topicId !== 'patwari-agriculture-accounts') return [];
  const questions: Question[] = [];
  for (let i = 0; i < Math.min(Math.max(0,count),100); i++) {
    const n = Math.floor(i/5)+1, kind=i%5;
    let prompt:string, answer:number, explanation:string, subtopic:string;
    if (kind===0) {
      prompt=`For this exercise, 1 kanal = 20 marlas. Convert ${n+2} kanals to marlas.`;
      answer=(n+2)*20; explanation=`Multiply kanals by 20: ${n+2} × 20 = ${answer} marlas.`; subtopic='Kanal and marla conversion';
    } else if(kind===1) {
      prompt=`For this exercise, 1 acre = 8 kanals. Convert ${n+1} acres to kanals.`;
      answer=(n+1)*8; explanation=`Multiply acres by 8: ${n+1} × 8 = ${answer} kanals.`; subtopic='Acre and kanal conversion';
    } else if(kind===2) {
      const kanals=n+3, marlas=n%20;
      prompt=`For this exercise, 1 kanal = 20 marlas. A holding contains ${kanals} kanals and ${marlas} marlas. Express the total in marlas.`;
      answer=kanals*20+marlas; explanation=`Convert the kanal portion, then add the remainder: ${kanals} × 20 + ${marlas} = ${answer} marlas.`; subtopic='Mixed-unit area';
    } else if(kind===3) {
      const length=n+12,width=n+5;
      prompt=`A rectangular field measures ${length} metres by ${width} metres. What is its area in square metres?`;
      answer=length*width; explanation=`Rectangle area = length × width = ${length} × ${width} = ${answer} square metres.`; subtopic='Field area';
    } else {
      const length=n+18,width=n+4;
      prompt=`A rectangular field measures ${length} metres by ${width} metres. What is its perimeter in metres?`;
      answer=2*(length+width); explanation=`Perimeter = twice the sum of adjacent side lengths = 2 × (${length} + ${width}) = ${answer} metres. This is a length, not an area.`; subtopic='Boundary measurement';
    }
    const correct=(['A','B','C','D'] as const)[(Math.floor(i/5)+i)%4];
    const wrong=[answer+1,answer-1,answer+2];
    const labels=(value:number)=>({en:String(value),hi:String(value),pa:String(value)});
    const options=Object.fromEntries(['A','B','C','D'].map(key=>[key,labels(key===correct?answer:wrong.shift()!)])) as Question['options'];
    questions.push({id:`gen-land-${i}`,topicId,subjectId:'patwari',examTag:'Computed land-measurement exercise — not a past paper',question:{en:prompt,hi:prompt,pa:prompt},options,correct,explanation:{en:explanation,hi:explanation,pa:explanation},subtopic:{en:subtopic,hi:subtopic},difficulty:'easy',availableLanguages:['en'],originType:'computed-variant',reviewStatus:'reviewed'});
  }
  return questions;
}
