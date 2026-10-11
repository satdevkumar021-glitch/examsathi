import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {chromium} from '@playwright/test';
const base=process.env.EXAMSATHI_TEST_URL||'http://127.0.0.1:3103';
const browser=await chromium.launch({headless:true});const page=await browser.newPage({viewport:{width:390,height:844}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
try{
 await page.goto(`${base}/mock-test/?exam=punjab-clerk`,{waitUntil:'domcontentloaded'});
 await page.getByRole('link',{name:'Set 1 · 50 questions',exact:false}).waitFor({timeout:60000});
 // Allow the delayed guide to appear on the hub; it must disappear automatically on entering a test.
 await page.waitForTimeout(1600);
 if(await page.getByRole('dialog').isVisible())await page.getByRole('button',{name:/Skip guide|मार्गदर्शन छोड़ें|ਮਾਰਗਦਰਸ਼ਨ ਛੱਡੋ/}).click();
 await page.getByRole('link',{name:'Set 1 · 50 questions',exact:false}).click();
 await page.getByRole('button',{name:'Next',exact:true}).waitFor({timeout:60000});
 await page.waitForTimeout(1600);assert.equal(await page.getByRole('dialog').count(),0);
 assert.match(await page.locator('body').innerText(),/Question 1 of 50/);
 const firstQuestion=await page.locator('h3').innerText();
 await page.getByRole('button',{name:'हिं',exact:true}).click();assert.match(await page.locator('h3').innerText(),/[\u0900-\u097f]/);
 await page.getByRole('button',{name:'ਪੰ',exact:true}).click();assert.match(await page.locator('h3').innerText(),/[\u0a00-\u0a7f]/);
 await page.getByRole('button',{name:'50',exact:true}).click();
 await page.getByRole('button',{name:'Submit & Check Level',exact:true}).click();
 await page.getByRole('link',{name:/Next 50 questions — Set 2/}).waitFor({timeout:60000});
 await mkdir('docs/verification',{recursive:true});await page.screenshot({path:'docs/verification/CLERK_NEXT_50_PUBLIC.png',fullPage:true});
 await page.getByRole('link',{name:/Next 50 questions — Set 2/}).click();
 await page.getByRole('button',{name:'Next',exact:true}).waitFor({timeout:60000});
 assert.match(page.url(),/packSet=2/);assert.match(await page.locator('body').innerText(),/Revision set 2\/4/);assert.match(await page.locator('body').innerText(),/Question 1 of 50/);
 assert.notEqual(await page.locator('h3').innerText(),firstQuestion);
 assert.equal(errors.length,0,errors.join('\n'));
 const report={base,mobile:'390x844',set1:50,nextSet2:50,translations:true,onboardingDoesNotBlock:true,pageErrors:errors};await writeFile('docs/verification/CLERK_200_UI.json',JSON.stringify(report,null,2));console.log(report);
}catch(error){console.error(page.url(),(await page.locator('body').innerText()).slice(-5000));throw error;}finally{await browser.close();}
