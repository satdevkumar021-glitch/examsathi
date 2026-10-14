import { test, expect } from '@playwright/test';

// Suppress the first-visit onboarding dialog (it overlays the page) except in the test that exercises it.
const skipOnboarding = () => { localStorage.setItem('examsathi_onboarding_completed', 'true'); };

test.describe('ExamSathi AI Generator, Study Vault & Knowledge Deep-Dive Suite', () => {

  test('01. /ai-generator loads, loads a preset and generates a practice set', async ({ page }) => {
    await page.addInitScript(skipOnboarding);
    await page.goto('/ai-generator/');

    await expect(page.locator('h1')).toContainText(/Notes & AI Practice Generator/i);
    await expect(page.locator('text=/Files are read on this device/i')).toBeVisible();

    // Quick preset fills the textarea
    await page.locator('button:has-text("हड़प्पा")').first().click();
    const textVal = await page.locator('textarea').inputValue();
    expect(textVal.length).toBeGreaterThan(50);

    // Local recall generation works without any cloud key
    await page.locator('button:has-text("Generate up to 5 recall MCQs")').click();
    await expect(page.locator('text=/Generated CBT Set/i')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('button:has-text("Save to Vault")')).toBeVisible();
  });

  test('02. Dashboard and Mock Test Hub link to the notes generator', async ({ page }) => {
    await page.addInitScript(skipOnboarding);
    await page.goto('/dashboard/');
    await expect(page.locator('a[href*="/ai-generator"]').first()).toBeVisible();

    // On the hub the banner lives inside the collapsed "More options" panel
    await page.goto('/mock-test/');
    const aiLink = page.locator('a[href*="/ai-generator"]');
    await expect(aiLink).toBeHidden();
    await page.locator('summary:has-text("More options")').click();
    await expect(aiLink).toBeVisible();
  });

  test('03. Profile study vault renders notes, starred and saved-later lists', async ({ page }) => {
    await page.addInitScript(skipOnboarding);
    await page.goto('/profile/');

    // Default language is Hindi: नोट्स / पसंदीदा / बाद के लिए
    const notesTab = page.locator('button[aria-pressed]:has-text("नोट्स")');
    const starredTab = page.locator('button[aria-pressed]:has-text("पसंदीदा")');
    const savedTab = page.locator('button[aria-pressed]:has-text("बाद के लिए")');
    await expect(notesTab).toBeVisible();
    await expect(starredTab).toBeVisible();
    await expect(savedTab).toBeVisible();

    await starredTab.click();
    await expect(starredTab).toHaveAttribute('aria-pressed', 'true');
    await savedTab.click();
    await expect(savedTab).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('text=/इस सूची में कोई सामग्री नहीं है/')).toBeVisible();

    await expect(page.locator('button:has-text("बैकअप डाउनलोड करें")')).toBeVisible();
  });

  test('04. A finished practice attempt shows the review with lesson deep-links', async ({ page }) => {
    await page.addInitScript(skipOnboarding);
    await page.goto('/mock-test/ppsc-clerk/?exam=punjab-clerk&count=5&set=1&mode=exam');
    await page.locator('button:has-text("Submit")').waitFor({ timeout: 15000 });
    await page.locator('button:has-text("Submit")').click();
    await page.waitForURL(/\/results\//, { timeout: 15000 });

    // Review is scored by the server, then shows lesson links for revision
    const lessonLinks = page.locator('a:has-text("Lesson Notes 📖")');
    await expect(lessonLinks.first()).toBeVisible({ timeout: 15000 });
    expect(await lessonLinks.first().getAttribute('href')).toContain('/lesson/');
  });

  test('05. Onboarding guide can be re-opened from the profile and completed', async ({ page }) => {
    await page.addInitScript(skipOnboarding);
    await page.goto('/profile/');

    await page.locator('button:has-text("प्लेटफ़ॉर्म गाइड")').click();
    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible();
    await expect(dialog).toContainText('1/4');

    // Language is Hindi: आगे = Next
    for (const step of ['2/4', '3/4', '4/4']) {
      await dialog.locator('button:has-text("आगे")').click();
      await expect(dialog).toContainText(step);
    }
    await dialog.locator('button:has-text("पूरा")').click();
    await expect(dialog).toBeHidden();
  });

});
