import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {writeFile} from 'node:fs/promises';
const base=process.env.RELEASE_URL||'http://127.0.0.1:3105';
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:390,height:844}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
try{
 await page.goto(base+'/mock-test/?exam=punjab-clerk');
 await page.getByRole('searchbox',{name:'Find a topic'}).fill('GK: Science');
 await page.getByRole('button',{name:'Start 20 questions',exact:true}).waitFor({timeout:60000});
 await page.getByRole('button',{name:'Start 20 questions',exact:true}).click();
 await page.getByRole('button',{name:'Next',exact:true}).waitFor({timeout:60000});
 assert.match(page.url(),/exam=punjab-clerk/);
 for(const [label,script] of [['हिं',/[\u0900-\u097f]/],['ਪੰ',/[\u0a00-\u0a7f]/]]){
  await page.getByRole('button',{name:label,exact:true}).click();
  assert.match((await page.locator('h3').allTextContents()).join(' '),script);
 }
 await page.goto(base+'/mock-test/topic-clerk-revision-200/?exam=punjab-clerk&set=1&count=50&mode=exam&fresh=1');
 await page.getByRole('button',{name:'Next',exact:true}).waitFor({timeout:60000});
 assert.match(await page.locator('body').innerText(),/Question 1 of 50/);
 await page.screenshot({path:'docs/verification/RELEASE_MOBILE_2026-10-13.png',fullPage:true});
 assert.equal(errors.length,0,errors.join('\n'));
 console.log(JSON.stringify({base,science20:true,examPreserved:true,hindi:true,punjabi:true,clerk50:true,errors}));
}finally{await browser.close()}
