import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {chromium} from '@playwright/test';
const base=process.env.EXAMSATHI_TEST_URL||'http://127.0.0.1:3103';
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:390,height:844}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
try {
 await page.goto(`${base}/mock-test/?exam=punjab-clerk`,{waitUntil:'domcontentloaded'});
 await page.getByRole('searchbox',{name:'Find a topic'}).waitFor({timeout:60000});
 assert.equal(await page.getByRole('combobox',{name:'Selected exam'}).inputValue(),'punjab-clerk');
 assert.equal(await page.getByRole('button',{name:'Questions coming soon'}).count(),0);
 assert.equal(await page.locator('details[open]').count(),0);
 await page.getByRole('searchbox',{name:'Find a topic'}).fill('GK: Science');
 assert.equal(await page.getByRole('button',{name:'Start 20 questions',exact:true}).count(),1);
 await mkdir('docs/verification',{recursive:true});
 await page.screenshot({path:'docs/verification/GK_SIMPLE_MOBILE.png',fullPage:true});
 await page.getByRole('button',{name:'Start 20 questions',exact:true}).click();
 await page.getByRole('button',{name:'Next',exact:true}).waitFor({timeout:60000});
 assert.match(page.url(),/topic-gk-science-foundation/);assert.match(page.url(),/exam=punjab-clerk/);
 assert.match(await page.locator('body').innerText(),/Question 1 of 20/);
 assert.match(await page.locator('body').innerText(),/Topic: GK: Science/);
 for(const [label,script] of [['हिं',/[\u0900-\u097f]/],['ਪੰ',/[\u0a00-\u0a7f]/]]) {
  await page.getByRole('button',{name:label,exact:true}).click();
  const question=await page.locator('h3').allTextContents();assert.match(question.join(' '),script);
  assert.doesNotMatch(await page.locator('body').innerText(),/Translation pending/);
 }
 await page.screenshot({path:'docs/verification/GK_PUNJABI_MOBILE.png',fullPage:true});
 await page.getByRole('button',{name:'Next',exact:true}).click();
 assert.match(await page.locator('body').innerText(),/Question 2 of 20/);
 await page.goto(`${base}/mock-test/topic-clerk-gk-fast-practice/?exam=punjab-clerk&count=100&mode=exam&fresh=1`,{waitUntil:'domcontentloaded'});
 await page.getByRole('button',{name:'Next',exact:true}).waitFor({timeout:60000});
 assert.match(await page.locator('body').innerText(),/Question 1 of 100/);
 assert.equal(errors.length,0,errors.join('\n'));
 const report={base,mobile:'390x844',examPreserved:true,readyOnly:true,search:true,science20:true,hindi:true,punjabi:true,parent100:true,errors};
 await writeFile('docs/verification/GK_MULTILINGUAL_UI.json',JSON.stringify(report,null,2));console.log(report);
} finally {await browser.close();}
