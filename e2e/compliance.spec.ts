import { test, expect } from '@playwright/test';

test.describe('ExamSathi Google AdSense & DPDP Legal Compliance Suite', () => {

  test('01. Landing page renders policy footer links', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);

    await expect(page.locator('a[href^="/privacy-policy"]').first()).toBeVisible();
    await expect(page.locator('a[href^="/terms"]').first()).toBeVisible();
    await expect(page.locator('a[href^="/about"]').first()).toBeVisible();
    await expect(page.locator('a[href^="/contact"]').first()).toBeVisible();
  });

  test('02. /privacy-policy renders DPDP Act 2023 and Google AdSense disclosures', async ({ page }) => {
    await page.goto('/privacy-policy/');
    await page.waitForTimeout(500);

    await expect(page.locator('h1')).toContainText(/Privacy Policy|गोपनीयता नीति/i);
    await expect(page.locator('text=/DPDP Act 2023/i').first()).toBeVisible();
    await expect(page.locator('text=/Google AdSense/i').first()).toBeVisible();
    await expect(page.locator('text=privacy@examsathi.in').first()).toBeVisible();
  });

  test('03. /terms renders platform terms and official disclaimers', async ({ page }) => {
    await page.goto('/terms/');
    await page.waitForTimeout(500);

    await expect(page.locator('h1')).toContainText(/Terms of Service|सेवा की शर्तें/i);
    await expect(page.locator('text=/NOT an official agency/i')).toBeVisible();
    await expect(page.locator('text=/Non-Commercial Use/i')).toBeVisible();
  });

  test('04. /about renders educational mission and authoritative sources', async ({ page }) => {
    await page.goto('/about/');
    await page.waitForTimeout(500);

    await expect(page.locator('h1')).toContainText(/About ExamSathi|हमारे बारे में/i);
    await expect(page.locator('text=/Punjab School Education Board/i')).toBeVisible();
    await expect(page.locator('text=/NCERT/i')).toBeVisible();
    await expect(page.locator('text=/FSRS Spaced Repetition/i')).toBeVisible();
  });

  test('05. /contact renders support email and errata reporting protocol', async ({ page }) => {
    await page.goto('/contact/');
    await page.waitForTimeout(500);

    await expect(page.locator('h1')).toContainText(/Contact & Support|संपर्क करें/i);
    await expect(page.locator('text=support@examsathi.in')).toBeVisible();
    await expect(page.locator('text=/Report Question Errata/i')).toBeVisible();
  });

  test('06. ads.txt is served and contains authorized publisher declaration', async ({ request }) => {
    const response = await request.get('/ads.txt');
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('google.com');
  });

});
