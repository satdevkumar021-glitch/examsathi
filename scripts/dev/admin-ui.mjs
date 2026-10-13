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
} catch (error) {
  failn++; console.log('FAIL script error: ' + (error?.message || error).split('\n')[0]);
} finally {
  await browser.close();
}
console.log(`\n${pass} passed, ${failn} failed`);
process.exit(failn ? 1 : 0);
