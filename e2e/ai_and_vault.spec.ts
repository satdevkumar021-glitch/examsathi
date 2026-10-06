import { test, expect } from '@playwright/test';

test.describe('ExamSathi AI Generator, Study Vault & Knowledge Deep-Dive Suite', () => {

  test('01. /ai-generator loads, validates quota, loads preset, and generates MCQs', async ({ page }) => {
    await page.goto('/ai-generator/');

    // Verify Title & Header
    await expect(page.locator('h1')).toContainText(/AI Practice Drill Generator/i);
    await expect(page.locator('text=/DPDP Act 2023 Compliant/i')).toBeVisible();

    // Verify Quota indicator
    const quotaIndicator = page.locator('text=/[0-9] \/ 5 Drills Left Today/i');
    await expect(quotaIndicator).toBeVisible();

    // Click quick preset button for Harappa
    const presetBtn = page.locator('button:has-text("हड़प्पा")').first();
    await presetBtn.click();

    // Verify textarea populated
    const textarea = page.locator('textarea');
    const textVal = await textarea.inputValue();
    expect(textVal.length).toBeGreaterThan(50);

    // Click Generate MCQs
    const generateBtn = page.locator('button:has-text("Generate 5 Practice MCQs")');
    await generateBtn.click();

    // Wait for generation to complete
    await expect(page.locator('text=/Generated CBT Set/i')).toBeVisible({ timeout: 5000 });

    // Verify CBT Launch and Vault Save buttons
    const cbtLaunchBtn = page.locator('button:has-text("Start CBT Mock")');
    await expect(cbtLaunchBtn).toBeVisible();

    const saveVaultBtn = page.locator('button:has-text("Save to Vault")');
    await expect(saveVaultBtn).toBeVisible();
  });

  test('02. Mock Test Hub and Dashboard render AI Drill Generator entry points', async ({ page }) => {
    // Check Mock Test Hub
    await page.goto('/mock-test/');
    const mockAiLink = page.locator('a[href^="/ai-generator"]');
    await expect(mockAiLink).toBeVisible();

    // Check Dashboard
    await page.goto('/dashboard/');
    const dashAiLink = page.locator('a[href^="/ai-generator"]');
    await expect(dashAiLink).toBeVisible();
  });

  test('03. Profile Study Vault renders Notes, Starred Favorites, and WhatsApp Share', async ({ page }) => {
    await page.goto('/profile/');

    // Check Study Vault title
    await expect(page.locator('h3:has-text("Study Vault")')).toBeVisible();

    // Check tabs
    const notesTab = page.locator('button:has-text("Notes")');
    const starredTab = page.locator('button:has-text("Starred")');
    const bookmarksTab = page.locator('button:has-text("Saved Later")');

    await expect(notesTab).toBeVisible();
    await expect(starredTab).toBeVisible();
    await expect(bookmarksTab).toBeVisible();

    // Click Starred tab
    await starredTab.click();
    await page.waitForTimeout(200);

    // Click Saved Later tab
    await bookmarksTab.click();
    await page.waitForTimeout(200);

    // Verify WhatsApp Share button is present and valid
    const whatsappBtn = page.locator('a:has-text("Share on WhatsApp")');
    await expect(whatsappBtn).toBeVisible();
    const href = await whatsappBtn.getAttribute('href');
    expect(href).toContain('api.whatsapp.com');
  });

  test('04. Question Results render Lesson Notes deep-dive links for revision', async ({ page }) => {
    await page.goto('/results/1/');
    await page.waitForTimeout(500);

    // Verify Lesson Notes deep link button is present
    const lessonNotesLinks = page.locator('a:has-text("Lesson Notes 📖")');
    expect(await lessonNotesLinks.count()).toBeGreaterThan(0);

    // Check that first link points to /lesson/
    const firstHref = await lessonNotesLinks.first().getAttribute('href');
    expect(firstHref).toContain('/lesson/');
  });

  test('05. Onboarding Guide Modal guides first-time users and can be re-opened from profile', async ({ page }) => {
    await page.goto('/profile/');
    await page.waitForTimeout(300);

    // Click Platform Guidance & Onboarding Tour button
    const tourBtn = page.locator('button:has-text("Platform Guidance & Onboarding Tour")');
    await expect(tourBtn).toBeVisible();
    await tourBtn.click();

    // Verify modal is visible
    const modalHeading = page.locator('#onboarding-guide-title');
    await expect(modalHeading).toBeVisible();
    await expect(modalHeading).toContainText(/परीक्षा साथी/i);

    // Click Next
    const nextBtn = page.locator('button:has-text("Next")');
    await nextBtn.click();
    await expect(modalHeading).toContainText(/CBT/i);

    // Click Next again
    await nextBtn.click();
    await expect(modalHeading).toContainText(/AI/i);

    // Click Next again
    await nextBtn.click();
    await expect(modalHeading).toContainText(/लाइब्रेरी/i);

    // Complete tour
    const startBtn = page.locator('button:has-text("Start Learning")');
    await startBtn.click();
    await expect(modalHeading).not.toBeVisible();
  });

});
