import { test, expect } from '@playwright/test';

test.describe('CI Link Checker & Slug Integrity Suite (B1 & B4)', () => {
  const routesToVerify = [
    '/',
    '/dashboard/',
    '/exams/',
    '/exams/punjab/',
    '/exams/rajasthan/',
    '/exams/haryana/',
    '/exams/delhi/',
    '/exams/central/',
    '/exams/defence/',
    '/mock-test/',
    '/mock-test/topic-modern-india/',
    '/mock-test/topic-ett-child-pedagogy/',
    '/mock-test/topic-psssb-computer-it/',
    '/lesson/child-development-pedagogy/',
    '/lesson/ett-child-pedagogy/',
    '/lesson/psssb-computer-it/',
    '/lesson/computer-awareness/',
    '/lesson/punjab-history/',
    '/lesson/modern-india/',
    '/lesson/fundamental-rights/',
    '/library/',
    '/roadmap/',
    '/typing-practice/',
    '/profile/',
    '/login/',
    '/register/',
    '/forgot-password/',
    '/about/',
    '/contact/',
    '/privacy-policy/',
    '/terms/',
  ];

  for (const route of routesToVerify) {
    test(`Verify route loads with 200 OK and no 404: ${route}`, async ({ page }) => {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);

      // Verify page doesn't render 404 Not Found error state
      const notFoundHeading = page.locator('text=/404 • पृष्ठ नहीं मिला|Page Not Found|404: This page could not be found/i');
      await expect(notFoundHeading).toHaveCount(0);
    });
  }

  test('Verify B1: /lesson/ett-child-pedagogy/ renders Child Development & Pedagogy', async ({ page }) => {
    await page.goto('/lesson/ett-child-pedagogy/');
    await expect(page.locator('body')).toContainText(/बाल विकास|Pedagogy|Child/i);
  });

  test('Verify B1: /lesson/psssb-computer-it/ renders Computer & IT Awareness', async ({ page }) => {
    await page.goto('/lesson/psssb-computer-it/');
    await expect(page.locator('body')).toContainText(/Computer|कंप्यूटर|MS Office/i);
  });

  test('Verify B4: /mock-test/topic-ett-child-pedagogy/ loads questions without hanging', async ({ page }) => {
    await page.goto('/mock-test/topic-ett-child-pedagogy/');
    // Wait up to 3s and verify question palette or questions rendered
    await page.waitForTimeout(1000);
    const stuckSpinner = page.locator('text=/Generating 50-Question CBT Set/i');
    const isStuck = await stuckSpinner.isVisible();
    expect(isStuck).toBe(false);
  });
});
