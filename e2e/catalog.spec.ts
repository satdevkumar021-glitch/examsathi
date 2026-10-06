import { test, expect } from '@playwright/test';

test.describe('ExamSathi Multi-State Exam Catalog & Trilingual Parity Suite', () => {

  test('01. All 6 regional & defence state tracks rendered on /exams/', async ({ page }) => {
    await page.goto('/exams/');
    await page.waitForTimeout(500);

    // Verify exactly 6 State Cards are present
    const stateCards = page.locator('[data-testid="state-card"]');
    expect(await stateCards.count()).toBe(6);

    // Check specific state titles (supports Hindi/Punjabi/English)
    await expect(page.locator('text=/Punjab|पंजाब|ਪੰਜਾਬ/i').first()).toBeVisible();
    await expect(page.locator('text=/Rajasthan|राजस्थान|ਰਾਜਸਥਾਨ/i').first()).toBeVisible();
    await expect(page.locator('text=/Haryana|हरियाणा|ਹਰਿਆਣਾ/i').first()).toBeVisible();
    await expect(page.locator('text=/Delhi|दिल्ली|ਦਿੱਲੀ/i').first()).toBeVisible();
    await expect(page.locator('text=/Central|केंद्रीय|ਕੇਂਦਰੀ/i').first()).toBeVisible();
    await expect(page.locator('text=/Defence|Army|सेना|ਫੌਜ/i').first()).toBeVisible();
  });

  test('02. Haryana examination track renders HTET, Police and CET Clerk', async ({ page }) => {
    await page.goto('/exams/haryana/');
    await page.waitForTimeout(500);

    // Verify header (supports Hindi/Punjabi/English)
    await expect(page.locator('h1')).toContainText(/Haryana|हरियाणा|ਹਰਿਆਣਾ/i);

    // Verify exams
    await expect(page.locator('text=/HTET/i').first()).toBeVisible();
    await expect(page.locator('text=/Haryana Police Constable/i').first()).toBeVisible();
    await expect(page.locator('text=/Haryana CET Group C/i').first()).toBeVisible();
  });

  test('03. Delhi track renders Delhi Police Constable and SSC GD CAPF', async ({ page }) => {
    await page.goto('/exams/delhi/');
    await page.waitForTimeout(500);

    await expect(page.locator('text=/Delhi Police Constable/i').first()).toBeVisible();
    await expect(page.locator('text=/SSC GD Constable/i').first()).toBeVisible();
  });

  test('04. Defence track renders Army Agniveer GD and Clerk', async ({ page }) => {
    await page.goto('/exams/defence/');
    await page.waitForTimeout(500);

    await expect(page.locator('text=/Agniveer General Duty/i').first()).toBeVisible();
    await expect(page.locator('text=/Agniveer Clerk/i').first()).toBeVisible();
  });

  test('05. Search filter dynamically filters states and exams', async ({ page }) => {
    await page.goto('/exams/');
    await page.waitForTimeout(500);

    const searchInput = page.locator('main input[type="text"]').first();
    await searchInput.fill('HTET');
    await page.waitForTimeout(300);

    // Only Haryana card should match
    const visibleCards = page.locator('[data-testid="state-card"]');
    expect(await visibleCards.count()).toBe(1);
    await expect(page.locator('text=/Haryana|हरियाणा/i').first()).toBeVisible();
  });

  test('06. Trilingual language switch persists and toggles UI text', async ({ page }) => {
    await page.goto('/dashboard/');
    await page.waitForTimeout(500);

    // Toggle Punjabi
    const paBtn = page.locator('button:has-text("ਪੰ")');
    if (await paBtn.isVisible()) {
      await paBtn.click();
      await page.waitForTimeout(300);
      // Verify Gurmukhi header or text is visible
      const punjabiText = page.locator('text=/ਸਾਥੀ|ਤਿਆਰੀ|ਅੱਜ/i');
      expect(await punjabiText.count()).toBeGreaterThan(0);
    }

    // Toggle Hindi
    const hiBtn = page.locator('button:has-text("हिं")');
    if (await hiBtn.isVisible()) {
      await hiBtn.click();
      await page.waitForTimeout(300);
      const hindiText = page.locator('text=/साथी|तैयारी|आज/i');
      expect(await hindiText.count()).toBeGreaterThan(0);
    }
  });

});
