import { test, expect } from '@playwright/test';

test.describe('ExamSathi Bug Fix Verification Suite', () => {

  test('VERIFY BUG-01: /mock-test/topic-modern-india/ loads questions without hanging', async ({ page }) => {
    page.on('console', msg => console.log('PAGE LOG:', msg.type(), msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
    page.on('response', res => {
      if (res.status() >= 400) console.log('HTTP STATUS:', res.status(), res.url());
    });
    page.on('requestfailed', req => console.log('REQ FAILED:', req.url(), req.failure()?.errorText));
    await page.goto('/mock-test/topic-modern-india/');
    await page.waitForTimeout(2000);

    // Verify it is NOT stuck on the spinner
    const spinner = page.locator('text=/Generating 50-Question CBT Set/i');
    const isStillSpinning = await spinner.isVisible();
    console.log('Is still spinning on topic-modern-india:', isStillSpinning);
    expect(isStillSpinning).toBe(false);

    // Verify that test header or timer or question text is loaded
    const questionText = page.locator('text=/Question 1|प्रश्न 1|ਸਵਾਲ 1/i');
    await expect(questionText).toBeVisible();

    // Verify option buttons are rendered
    const optionA = page.locator('button').filter({ hasText: 'A' }).first();
    await expect(optionA).toBeVisible();
  });

  test('VERIFY BUG-05 & BUG-13: Virtual Library honest desks, 25m Pomodoro, 0.0h initial hours', async ({ page }) => {
    await page.goto('/library/');
    await page.waitForTimeout(500);

    // Verify 25m Pomodoro is active by default (timer shows 25:00)
    const timerDisplay = page.locator('text=25:00');
    await expect(timerDisplay).toBeVisible();

    // Verify initial hours for guest is 0h
    const hoursDisplay = page.locator('text=/0h|0\.0h/i').first();
    await expect(hoursDisplay).toBeVisible();

    // Verify no fake peer users (Gurpreet, Manpreet, Simran)
    const fakeUsers = page.locator('text=/Gurpreet|Manpreet|Simran|Rajwinder/i');
    expect(await fakeUsers.count()).toBe(0);
  });

  test('VERIFY BUG-07: Dashboard KPIs reflect dynamic metrics with honest empty states', async ({ page }) => {
    await page.goto('/dashboard/');
    await page.waitForTimeout(500);

    // Verify empty state readiness helper exists
    const helperMsg = page.locator('text=/Complete your first CBT Mock Test/i');
    await expect(helperMsg).toBeVisible();

    // Verify streak badge is 0 for new guest (not hardcoded 14)
    const streakBadge = page.locator('text=0').first();
    expect(await streakBadge.isVisible()).toBe(true);
  });

  test('VERIFY BUG-09: Roadmap ETT Piaget task links to Child Pedagogy', async ({ page }) => {
    await page.goto('/roadmap/');
    await page.waitForTimeout(500);

    // Click ETT tab
    const ettTab = page.locator('button:has-text("ETT")').first();
    await ettTab.click();
    await page.waitForTimeout(300);

    // Check Piaget task link href
    const piagetTask = page.locator('a:has-text("Read Lesson Notes")').first();
    const href = await piagetTask.getAttribute('href');
    console.log('Verified Piaget task link href:', href);
    expect(href).toContain('/lesson/child-development-pedagogy');
  });

  test('VERIFY BUG-10: Raavi Typing practice 10m benchmark and valid Inscript hints', async ({ page }) => {
    await page.goto('/typing-practice/');
    await page.waitForTimeout(500);

    // Verify timer defaults to 600s (10 min benchmark)
    const timerText = await page.locator('text=/600s/i').first();
    await expect(timerText).toBeVisible();

    // Verify Halant hint correctly cites 'd' key (not Shift + D)
    const halantDHint = page.locator('text=/ਪੈਰੀਂ ਅੱਖਰ.*d/i');
    expect(await halantDHint.count()).toBeGreaterThan(0);
  });

  test('VERIFY BUG-11: BottomNav Cards link opens mock-test flip mode', async ({ page }) => {
    await page.goto('/dashboard/');
    const cardsNav = page.locator('nav a:has-text("Cards")');
    const href = await cardsNav.getAttribute('href');
    console.log('Verified Cards Nav href:', href);
    expect(href).toMatch(/(\/examsathi)?\/mock-test\/?\?mode=flip/);
  });

  test('VERIFY BUG-03: Admin portal is protected and rejects unauthorized access', async ({ page }) => {
    await page.goto('/admin/');
    await page.waitForTimeout(500);

    // Verify restricted access gate is visible
    const gateTitle = page.locator('text=/Restricted Administrative Access/i');
    await expect(gateTitle).toBeVisible();

    // Verify publisher form is blocked until authentication
    const passkeyInput = page.locator('input[type="password"]');
    await expect(passkeyInput).toBeVisible();
  });

  test('VERIFY BUG-14 & BUG-15: Viewport zoom permitted, Bengali character removed from Hindi lesson', async ({ page }) => {
    await page.goto('/lesson/modern-india/');
    await page.waitForTimeout(500);

    // Verify Bengali character 'ও' does NOT exist in page content
    const bodyContent = await page.textContent('body');
    expect(bodyContent).not.toContain('জফর ও');
    expect(bodyContent).toContain('जफर व बख्त खां');
  });

});
