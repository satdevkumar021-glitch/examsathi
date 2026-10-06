import { test, expect } from '@playwright/test';

test.describe('Milestone 5 Regression Suite (B5, B6, B7)', () => {

  test('M5-1. B7: Central examination track renders SSC CGL, MTS, CTET P2, UGC NET, UTET', async ({ page }) => {
    await page.goto('/exams/central/');
    await expect(page).toHaveURL(/.*\/exams\/central\/?/);

    // Verify all central exams are present in the DOM
    const examCards = page.locator('div[data-testid="exam-card"], div.rounded-2xl.border');
    const pageText = await page.textContent('body');

    expect(pageText).toContain('SSC CGL');
    expect(pageText).toContain('SSC MTS');
    expect(pageText).toContain('CTET Paper 2');
    expect(pageText).toContain('UGC NET Paper 1');
    expect(pageText).toContain('UTET');

    console.log('Central track successfully verified with all required national exams.');
  });

  test('M5-2. B7: Haryana and Rajasthan expanded tracks render ETT PRT and Police Constable', async ({ page }) => {
    // Check Haryana
    await page.goto('/exams/haryana/');
    let pageText = await page.textContent('body');
    expect(pageText).toContain('Haryana PRT Primary Teacher');
    expect(pageText).toContain('HTET');
    expect(pageText).toContain('Haryana Police Constable');

    // Check Rajasthan
    await page.goto('/exams/rajasthan/');
    pageText = await page.textContent('body');
    expect(pageText).toContain('Rajasthan Police Constable');
    expect(pageText).toContain('REET Level 1');
    expect(pageText).toContain('REET Level 2');
    expect(pageText).toContain('Rajasthan 3rd Grade Teacher');

    console.log('Haryana PRT and Rajasthan Police Constable tracks successfully verified.');
  });

  test('M5-3. B5: Lesson view renders authentic recruiting body, verifiedOn date, and difficulty tiers', async ({ page }) => {
    // 1. ETT Pedagogy lesson
    await page.goto('/lesson/child-development-pedagogy/');
    let bodyText = await page.textContent('body');
    expect(bodyText).toContain('Education Recruitment Board (ERB), Punjab');
    expect(bodyText).toContain('Verified on 15 March 2024');
    expect(bodyText).toContain('Easy, Moderate, Hard');

    // 2. Computer awareness lesson
    await page.goto('/lesson/computer-awareness/');
    bodyText = await page.textContent('body');
    expect(bodyText).toContain('Punjab Subordinate Services Selection Board (PSSSB)');
    expect(bodyText).toContain('Verified on 15 March 2024');

    // 3. Fundamental rights lesson
    await page.goto('/lesson/fundamental-rights/');
    bodyText = await page.textContent('body');
    expect(bodyText).toContain('Ministry of Law and Justice');
    expect(bodyText).toContain('Verified on 15 March 2024');

    console.log('Lesson view official source attributions and difficulty tiers verified.');
  });

  test('M5-4. B6: Data-derived metrics & Honest claims across landing page and mock test portal', async ({ page }) => {
    // 1. Landing page KPIs
    await page.goto('/');
    const pageText = await page.textContent('body');

    // Check that landing page has 27 recruitments and 20-Yr PYQ archive
    expect(pageText).toContain('27');
    expect(pageText).toContain('Recruitments');
    expect(pageText).toContain('20-Yr');
    expect(pageText).toContain('PYQ Archive');
    expect(pageText).not.toContain('100,000+ Questions');

    // 2. Mock Test Hub
    await page.goto('/mock-test/');
    const mockText = await page.textContent('body');
    expect(mockText).toContain('20-Year PYQ Archive (2004–2024)');
    expect(mockText).toContain('Dynamic CBT Sets');
    expect(mockText).not.toContain('100,000+ Topic MCQs');

    console.log('Data-derived metrics and consistent 20-Year archive verified.');
  });

});
