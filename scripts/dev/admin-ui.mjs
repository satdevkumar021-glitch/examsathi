// Drives the admin page in a real browser against scripts/dev/fake-supabase.mjs. See docs/LOCAL_TESTING.md.
// The app must be BUILT with NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321 so the browser client is configured.
import { chromium } from '@playwright/test';

const B = process.env.SMOKE_URL || 'http://localhost:3200';
const ROLES = { 'tok-educator': ['11111111-1111-4111-8111-111111111111', 'edu@x.in', 'educator'], 'tok-reviewer': ['22222222-2222-4222-8222-222222222222', 'rev@x.in', 'reviewer'] };
let pass = 0, failn = 0;
const ok = (n, c, x = '') => { if (c) pass++; else failn++; console.log((c ? 'PASS ' : 'FAIL ') + n + (c ? '' : '  ' + x)); };

async function session(browser, token) {
  const [id, email, role] = ROLES[token];
  const now = Math.floor(Date.now() / 1000);
  const value = { access_token: token, refresh_token: 'r', token_type: 'bearer', expires_in: 3600, expires_at: now + 3600,
    user: { id, email, aud: 'authenticated', app_metadata: { role }, user_metadata: {}, created_at: new Date().toISOString() } };
  const context = await browser.newContext();
  await context.addCookies([{ name: 'sb-127-auth-token', value: 'base64-' + Buffer.from(JSON.stringify(value)).toString('base64url'), url: B }]);
  const page = await context.newPage();
  await page.addInitScript(() => localStorage.setItem('examsathi_onboarding_completed', 'true'));
  return { page, context };
}

const browser = await chromium.launch();
try {
  const { page, context } = await session(browser, 'tok-educator');
  await page.goto(B + '/admin/');
  await page.getByRole('button', { name: /\+Question/ }).click();

  // Create a draft with a typo, Hindi + Punjabi, options typed once.
  await page.getByLabel('Hindi (हिन्दी)').fill('पंजाब की राजधानी कौन सी है?');
  await page.getByLabel('Punjabi (ਪੰਜਾਬੀ)').fill('ਪੰਜਾਬ ਦੀ ਰਾਜਧਾਨੀ ਕਿਹੜੀ ਹੈ?');
  await page.getByLabel('English', { exact: true }).fill('What is the capitol of Punjab?');
  for (const [k, v] of [['A', 'Chandigarh'], ['B', 'Amritsar'], ['C', 'Ludhiana'], ['D', 'Patiala']]) await page.getByLabel(`Option ${k}`, { exact: true }).fill(v);
  await page.getByLabel('Explanation', { exact: true }).fill('Chandigarh is the capital.');
  await page.getByRole('button', { name: /Save as Draft/ }).click();
  await page.getByText('recorded as "DRAFT"').waitFor();
  ok('a question with Punjabi text saves as a draft', true);

  const card = page.locator('div.rounded-2xl', { hasText: 'capitol' }).first();
  ok('the card shows the typo', await card.isVisible());
  ok('the author sees Edit on their draft', await card.getByRole('button', { name: 'Edit', exact: true }).isVisible());
  await card.getByRole('button', { name: 'Edit', exact: true }).click();

  ok('edit mode is announced', await page.getByText('Editing a saved question').isVisible());
  ok('the form is pre-filled (English)', (await page.getByLabel('English', { exact: true }).inputValue()) === 'What is the capitol of Punjab?');
  ok('the form is pre-filled (Punjabi)', (await page.getByLabel('Punjabi (ਪੰਜਾਬੀ)').inputValue()).startsWith('ਪੰਜਾਬ'));
  ok('options typed once stay in the single-box view', !(await page.getByLabel(/Option A \(/).count()));

  await page.getByLabel('English', { exact: true }).fill('What is the capital of Punjab?');
  await page.getByRole('button', { name: 'Save changes' }).click();
  await page.getByText('Changes saved.').waitFor();
  ok('fixing the typo saves in place', await page.getByText('What is the capital of Punjab?').first().isVisible().catch(() => false) || (await page.content()).includes('capital of Punjab'));
  ok('the old typo is gone from the pipeline', !(await page.content()).includes('capitol'));
  ok('no duplicate item was created', (await page.getByText(/Pipeline \(1\)/).count()) === 1);

  // Edit again and send straight to review; once under review the Edit button must disappear.
  const card2 = page.locator('div.rounded-2xl', { hasText: 'capital of Punjab' }).first();
  await card2.getByRole('button', { name: 'Edit', exact: true }).click();
  await page.getByRole('button', { name: 'Save and submit for review' }).click();
  await page.getByText('submitted for review').waitFor();
  const inReview = page.locator('div.rounded-2xl', { hasText: 'capital of Punjab' }).first();
  ok('an item under review shows no Edit button', (await inReview.getByRole('button', { name: 'Edit', exact: true }).count()) === 0);
  ok('the author can withdraw it', await inReview.getByRole('button', { name: 'Withdraw to draft' }).isVisible());

  // Per-language view appears when text differs by language.
  await inReview.getByRole('button', { name: 'Withdraw to draft' }).click();
  await page.getByText('Item status changed to "DRAFT"').waitFor();
  await page.locator('div.rounded-2xl', { hasText: 'capital of Punjab' }).first().getByRole('button', { name: 'Edit', exact: true }).click();
  await page.getByLabel('Write options and explanation separately').check();
  await page.getByLabel('Option A (pa)').fill('ਚੰਡੀਗੜ੍ਹ');
  await page.getByRole('button', { name: 'Save changes' }).click();
  await page.getByText('Changes saved.').waitFor();
  await page.locator('div.rounded-2xl', { hasText: 'capital of Punjab' }).first().getByRole('button', { name: 'Edit', exact: true }).click();
  ok('re-opening text with a Punjabi option reopens the per-language view (nothing is lost)', (await page.getByLabel('Option A (pa)').inputValue()) === 'ਚੰਡੀਗੜ੍ਹ');
  await page.getByRole('button', { name: 'Cancel' }).click();
  ok('Cancel returns to the pipeline without saving', await page.getByText('Editorial Review Pipeline').isVisible());
  await context.close();

  // A reviewer must not see Edit on someone else's draft.
  const rev = await session(browser, 'tok-reviewer');
  await rev.page.goto(B + '/admin/');
  await rev.page.getByText('Editorial Review Pipeline').waitFor();
  ok("a reviewer sees no Edit button on another author's draft", (await rev.page.getByRole('button', { name: 'Edit', exact: true }).count()) === 0);
  await rev.context.close();

  // ---- Lessons, videos and links: author -> reviewer -> student ----
  const TOPIC = 'modern-india';
  const author = await session(browser, 'tok-educator');
  const ap = author.page;
  await ap.goto(B + '/admin/');
  await ap.getByRole('button', { name: /\+Video/ }).click();
  await ap.getByLabel('Target Topic').selectOption(TOPIC);
  await ap.getByLabel('Video title').fill('1857 revolt in one lecture');
  await ap.getByLabel('YouTube link or video id').fill('https://evil.example/watch?v=dQw4w9WgXcQ');
  ok('a non-YouTube link is flagged as you type', await ap.getByText('not a YouTube link').isVisible());
  await ap.getByLabel('YouTube link or video id').fill('https://youtu.be/dQw4w9WgXcQ?si=abc');
  ok('a YouTube link shows the id that will be stored', await ap.getByText('dQw4w9WgXcQ').first().isVisible());
  await ap.getByLabel('Channel (optional)').fill('StudyIQ');
  await ap.getByRole('button', { name: 'Submit for Review' }).click();
  await ap.getByText('Video recorded as "REVIEW"').waitFor();
  ok('the educator submits a video through the form', true);

  await ap.getByRole('button', { name: /\+Link/ }).click();
  await ap.getByLabel('Target Topic').selectOption(TOPIC);
  await ap.getByLabel('Title', { exact: true }).fill('NCERT Class 8 history');
  await ap.getByLabel('Link (https)').fill('https://ncert.nic.in/textbook.php');
  await ap.getByRole('button', { name: 'Submit for Review' }).click();
  await ap.getByText('Link recorded as "REVIEW"').waitFor();
  ok('the educator submits a document link through the form', true);

  await ap.getByRole('button', { name: /\+Lesson/ }).click();
  await ap.getByLabel('Target Topic').selectOption(TOPIC);
  await ap.getByLabel('Lesson title (en)').fill('Causes of 1857');
  await ap.getByLabel('Lesson text (en)').fill('Greased cartridges.\n\n<img src=x onerror=window.__xss=1>');
  await ap.getByRole('button', { name: 'Submit for Review' }).click();
  await ap.getByText('Lesson recorded as "REVIEW"').waitFor();
  ok('the educator submits a lesson through the form', true);
  ok('students see none of it while it is under review', await (async () => {
    const sp = await (await browser.newContext()).newPage();
    await sp.addInitScript(() => localStorage.setItem('examsathi_onboarding_completed', 'true'));
    await sp.goto(B + `/lesson/${TOPIC}/`);
    await sp.getByRole('button', { name: /Videos|वीडियो/ }).first().click();
    const none = (await sp.locator('iframe[src*="youtube"]').count()) === 0;
    await sp.close();
    return none;
  })());

  // The reviewer sees what students would get, and approves the three items.
  const rv = await session(browser, 'tok-reviewer');
  const rp = rv.page;
  await rp.goto(B + '/admin/');
  await rp.getByText('1857 revolt in one lecture').first().waitFor();
  ok('the reviewer sees a video preview with a way to check it first', await rp.getByText('Check the video before approving').isVisible());
  ok('the reviewer sees a link preview', await rp.getByText('Open the link before approving').isVisible());
  ok('the reviewer sees the lesson text exactly as stored', await rp.getByText('Greased cartridges.').first().isVisible());
  for (let i = 0; i < 3; i++) {
    await rp.getByRole('button', { name: /Approve & Publish/ }).first().click();
    await rp.getByText('Item status changed to "PUBLISHED"').waitFor();
    await rp.waitForTimeout(150);
  }
  ok('the reviewer publishes all three', (await rp.getByText('PUBLISHED').count()) >= 3);

  // A student opens the lesson page.
  const student = await (await browser.newContext()).newPage();
  await student.addInitScript(() => localStorage.setItem('examsathi_onboarding_completed', 'true'));
  await student.goto(B + `/lesson/${TOPIC}/`);
  await student.getByText('Causes of 1857').waitFor();
  ok('the student sees the educator lesson on the Read tab', await student.getByText('Greased cartridges.').isVisible());
  ok('the lesson is attributed as reviewed educator work', await student.getByText(/approved by a reviewer|समीक्षक द्वारा स्वीकृत/).first().isVisible());
  ok('educator markup is shown as text, not run', (await student.evaluate(() => window.__xss === 1)) === false && (await student.locator('section[aria-label="Lessons from educators"] img').count()) === 0);
  ok('the markup text itself is visible, proving it was escaped', await student.getByText('<img src=x onerror=window.__xss=1>').isVisible());
  await student.getByRole('button', { name: /Videos|वीडियो/ }).first().click();
  const frame = student.locator('iframe[src*="youtube-nocookie.com/embed/dQw4w9WgXcQ"]');
  ok('the student sees the educator video embedded from the stored id only', (await frame.count()) === 1);
  ok('the video uses the privacy-enhanced domain and a referrer policy', (await frame.getAttribute('referrerpolicy')) === 'strict-origin-when-cross-origin');
  ok('the video shows the educator label', await student.getByText(/Chosen by an educator|शिक्षक द्वारा चुना गया/).isVisible());
  await student.getByRole('button', { name: /PDFs|दस्तावेज|ਸਰੋਤ/ }).first().click();
  const link = student.locator('a[href="https://ncert.nic.in/textbook.php"]');
  ok('the student sees the educator link', (await link.count()) === 1);
  ok('the link opens in a new tab without leaking the opener', (await link.getAttribute('rel')) === 'noopener noreferrer nofollow' && (await link.getAttribute('target')) === '_blank');
  ok('the page leaks no staff details', !(await student.content()).match(/edu@x\.in|rev@x\.in/));

  // Editing a resource keeps its content and respects the same rules as questions.
  await ap.reload();
  await ap.getByText('1857 revolt in one lecture').first().waitFor();
  const liveCard = ap.locator('div.rounded-2xl', { hasText: '1857 revolt in one lecture' }).first();
  ok('the card is shown as published', await liveCard.getByText('published', { exact: true }).isVisible());
  ok('a published item shows no Edit button, even to its author', (await liveCard.getByRole('button', { name: 'Edit', exact: true }).count()) === 0);
  await author.context.close(); await rv.context.close(); await student.context().close();
} catch (error) {
  failn++; console.log('FAIL script error: ' + (error?.message || error).split('\n')[0]);
} finally {
  await browser.close();
}
console.log(`\n${pass} passed, ${failn} failed`);
process.exit(failn ? 1 : 0);
