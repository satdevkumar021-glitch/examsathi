import type { Question } from './questions';
/** Finite solved exercises. Variants are counted separately from authored/past-paper items. */
export function generateReasoningPractice(topicId: string, count: number): Question[] {
 if(topicId !== 'ssc-cgl-reasoning') return [];
 const result:Question[]=[];
 const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 const ordinal=(value:number)=>`${value}${value%100>=11 && value%100<=13 ? 'th' : value%10===1 ? 'st' : value%10===2 ? 'nd' : value%10===3 ? 'rd' : 'th'}`;
 const hindiDays=['सोमवार','मंगलवार','बुधवार','गुरुवार','शुक्रवार','शनिवार','रविवार'];
 const days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
 for(let i=0;i<Math.min(count,1000);i++) {
  const n=Math.floor(i/8)+2,kind=i%8;
  let en:string,hi:string,answer:string,wrong:string[],explanation:string,subtopic:string;
  if(kind===0) {
   const step=n%7+2,start=n*3;
   en=`Find the missing term: ${start}, ${start+step}, ${start+2*step}, ?, ${start+4*step}.`;
   hi=`लुप्त पद ज्ञात करें: ${start}, ${start+step}, ${start+2*step}, ?, ${start+4*step}।`;
   answer=String(start+3*step);wrong=[String(start+3*step+1),String(start+3*step-1),String(start+3*step+2)];
   explanation=`Successive terms increase by ${step}; the missing term is ${start} + 3 × ${step} = ${answer}.`;subtopic='Number series';
  } else if(kind===1) {
   const word=letters[n%26]+letters[Math.floor(n/26)%26]+letters[(n*7)%26],shift=n%5+1;
   const encode=(s:number)=>word.split('').map(c=>letters[(letters.indexOf(c)+s)%26]).join('');
   en=`Each letter is shifted forward ${shift} place(s), wrapping Z to A. How is ${word} coded?`;
   hi=`हर अक्षर ${shift} स्थान आगे जाता है और Z के बाद A आता है। ${word} का कूट क्या होगा?`;
   answer=encode(shift);wrong=[encode(shift+1),encode(shift+2),encode(shift+3)];explanation=`Apply a shift of ${shift} independently to each letter, with alphabetic wraparound: ${word} → ${answer}.`;subtopic='Letter coding';
  } else if(kind===2) {
   const total=n+20,left=n%12+2;
   en=`A row has ${total} people. Rina is ${ordinal(left)} from the left. What is her position from the right?`;
   hi=`एक पंक्ति में ${total} व्यक्ति हैं। रीना बाएँ से ${left}वें स्थान पर है। दाएँ से उसका स्थान क्या है?`;
   answer=String(total-left+1);wrong=[String(total-left),String(total-left+2),String(total-left+3)];explanation=`Right position = total − left position + 1 = ${total} − ${left} + 1 = ${answer}.`;subtopic='Ranking';
  } else if(kind===3) {
   const start=n%7,elapsed=n+8;
   en=`Today is ${days[start]}. What day will it be ${elapsed} days later?`;
   hi=`आज ${hindiDays[start]} है। ${elapsed} दिनों के बाद कौन सा दिन होगा?`;
   const index=(start+elapsed)%7;answer=days[index];wrong=[days[(index+1)%7],days[(index+2)%7],days[(index+3)%7]];explanation=`Weekdays repeat every 7 days. Advance ${elapsed%7} days from ${days[start]} to reach ${answer}.`;subtopic='Calendar cycles';
  } else if(kind===4) {
   const north=n+4,south=n-1;
   en=`A person walks ${north} m north and then ${south} m south on the same straight line. How far north of the starting point are they?`;
   hi=`एक व्यक्ति उसी सीधी रेखा पर ${north} मीटर उत्तर और फिर ${south} मीटर दक्षिण चलता है। वह आरंभ बिंदु से कितने मीटर उत्तर है?`;
   // Use differing net displacements so exercises are not merely reworded identical answers.
   const extra=n%9;en=en.replace(`${south} m south`,`${south+extra} m south`);hi=hi.replace(`${south} मीटर दक्षिण`,`${south+extra} मीटर दक्षिण`);
   const displacement=north-south-extra;
   en=en.replace('How far north of the starting point are they?','What is their signed northward displacement (south is negative)?');hi=hi.replace('वह आरंभ बिंदु से कितने मीटर उत्तर है?', 'उसका चिह्न सहित उत्तर दिशा में विस्थापन क्या है? दक्षिण को ऋणात्मक मानें।');
   answer=String(displacement);wrong=[String(displacement+2),String(displacement-2),String(north+south+extra)];explanation=`Signed displacement = northward movement − southward movement = ${north} − ${south+extra} = ${answer} m. Distance travelled is different.`;subtopic='Directions and displacement';
  } else if(kind===5) {
   const a=n+12,b=n+8,overlap=n%7+2;
   en=`In a club, ${a} members play chess, ${b} play badminton and ${overlap} play both. How many play at least one of these games?`;
   hi=`एक क्लब में ${a} सदस्य शतरंज, ${b} बैडमिंटन और ${overlap} दोनों खेलते हैं। कम से कम एक खेल खेलने वाले सदस्य कितने हैं?`;
   answer=String(a+b-overlap);wrong=[String(a+b),String(a+b+overlap),String(a+b-overlap+1)];explanation=`Add the two counts and subtract the overlap counted twice: ${a} + ${b} − ${overlap} = ${answer}.`;subtopic='Sets and overlap';
  } else if(kind===6) {
   const k=n%8+2,base=(n+2)*k;
   en=`Which number is NOT divisible by ${k}? Options start near ${base}.`;
   hi=`${k} से कौन सी संख्या विभाजित नहीं होती? विकल्प ${base} के आसपास हैं।`;
   answer=String(base+1);wrong=[String(base),String(base+k),String(base+2*k)];explanation=`${base}, ${base+k} and ${base+2*k} are multiples of ${k}; ${base+1} leaves remainder 1.`;subtopic='Classification';
  } else {
   const a=n+3,b=n+4;
   en=`In an analogy, x is paired with x². If ${a} is paired with ${a*a}, what should ${b} be paired with?`;
   hi=`एक समानता में x का जोड़ा x² है। यदि ${a} का जोड़ा ${a*a} है, तो ${b} का जोड़ा क्या होगा?`;
   answer=String(b*b);wrong=[String(b*b+1),String(b*b-1),String(b*b+2)];explanation=`The stated rule is squaring: ${b} × ${b} = ${answer}. Apply the specified rule rather than inventing another.`;subtopic='Number analogy';
  }
  if(new Set([answer,...wrong]).size!==4)throw new Error(`Invalid options for reasoning ${i}`);
  const correct=(['A','B','C','D'] as const)[(Math.floor(i/8)+i)%4],distractors=[...wrong];
  const options=Object.fromEntries(['A','B','C','D'].map(key=>{const value=key===correct?answer:distractors.shift()!;return[key,{en:value,hi:kind===3?hindiDays[days.indexOf(value)]:value,pa:value}]})) as Question['options'];
  result.push({id:`gen-reasoning-${topicId}-${i}`,topicId,subjectId:'reasoning',examTag:'Computed reasoning practice — not a past paper',question:{en,hi},options,correct,explanation:{en:explanation,hi:explanation},difficulty:'medium',subtopic:{en:subtopic,hi:subtopic},availableLanguages:['en','hi'],explanationLanguages:['en'],originType:'computed-variant',reviewStatus:'reviewed'});
 }
 return result;
}
