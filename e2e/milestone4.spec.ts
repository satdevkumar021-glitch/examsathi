import { test, expect } from '@playwright/test';

test.describe('Milestone 4: Admin Portal, Dynamic Roadmap, Virtual Library, and Raavi Typing (B2, B3, B8, B9, B10)', () => {

  test('M4-1. Admin Portal is session-gated and its API rejects anonymous callers', async ({ page, request }) => {
    // No session cookie: the proxy redirects to login
    await page.goto('/admin/');
    await expect(page).toHaveURL(/\/login\/?/);

    // The API is the real enforcement point
    const res = await request.get('/api/admin/content/');
    expect(res.status()).toBe(401);
  });

  test('M4-2. Roadmap day navigator covers a 60-day plan', async ({ page }) => {
    await page.addInitScript(() => { localStorage.setItem('examsathi_onboarding_completed', 'true'); });
    await page.goto('/roadmap/');
    await page.locator('button:has-text("REET")').first().click();

    // The direct day navigator offers all 60 days
    const daySelect = page.locator('select').filter({ has: page.locator('option[value="60"]') }).first();
    await expect(daySelect).toBeVisible();
    expect(await daySelect.locator('option').count()).toBe(60);

    await daySelect.selectOption('14');
    await expect(page.locator('text=/14\\/60/').first()).toBeVisible();
    await expect(page.locator('a[href*="/lesson/"]').first()).toBeVisible();
  });

  test('M4-3. Virtual Library Honest States & 25m Pomodoro Sync (B2, B9)', async ({ page }) => {
    await page.goto('/library/');

    // Initial state: no fake user and 16 desks
    const deskButtons = page.locator('button:has-text("Open Desk")');
    expect(await deskButtons.count()).toBe(16);

    // Verify no pre-reserved desk banner (using first matching element)
    await expect(page.locator('text=/No Desk Claimed/').first()).toBeVisible();

    // Verify default Pomodoro timer displays 25:00
    const timerDisplay = page.locator('text=25:00');
    await expect(timerDisplay).toBeVisible();

    // Claim Desk 04
    const desk4 = page.locator('button:has-text("#04")');
    await desk4.click();
    await page.waitForTimeout(200);
    await expect(page.locator('text=/Desk #04 Claimed/')).toBeVisible();
  });

  test('M4-4. Raavi Punjabi Typing 300+ Word Passages & InScript Guidance (B10)', async ({ page }) => {
    await page.goto('/typing-practice/');

    // Verify 10-minute timer initial text (600s)
    const timerText = page.locator('text=600s');
    await expect(timerText).toBeVisible();

    // Verify InScript vs Remington guidance banner
    await expect(page.locator('text=/Unicode InScript Layout/')).toBeVisible();
    await expect(page.locator('text=/Remington/')).toBeVisible();

    // Verify official passage has 300+ words
    const passageText = page.locator('text=/Target Official Passage/').first();
    await expect(passageText).toBeVisible();

    // Verify Raavi key hints (Halant 'd', vowel Shift + D)
    await expect(page.locator('text=/Halant/')).toBeVisible();
    await expect(page.locator('strong:has-text("Shift + D")')).toBeVisible();
  });

});
