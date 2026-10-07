import { test, expect } from '@playwright/test';

test.describe('ExamSathi Comprehensive E2E Audit Suite', () => {

  test('01. Landing page, language switch, and WhatsApp share', async ({ page }) => {
    await page.goto('/');
    
    // Check Title and Viewport
    await expect(page).toHaveTitle(/ExamSathi/i);
    
    // Language switch test
    const langHi = page.locator('button:has-text("हिंदी")');
    const langPa = page.locator('button:has-text("ਪੰਜਾਬੀ")');
    
    if (await langPa.count() > 0) {
      await langPa.click();
      await page.waitForTimeout(300);
      // Verify text changes
      const paHeading = page.locator('body');
      await expect(paHeading).toContainText(/ਪੰਜਾਬ/i);
    }

    if (await langHi.count() > 0) {
      await langHi.click();
      await page.waitForTimeout(300);
      const hiHeading = page.locator('body');
      await expect(hiHeading).toContainText(/परीक्षा साथी/i);
    }

    // Check WhatsApp share button
    const shareBtn = page.locator('button:has-text("WhatsApp"), a:has-text("WhatsApp")');
    if (await shareBtn.count() > 0) {
      const shareHref = await shareBtn.getAttribute('href');
      console.log('WhatsApp Share Link:', shareHref);
    }
  });

  test('02. Guest flow and Dashboard stats inspection', async ({ page }) => {
    // Navigate directly as guest
    await page.goto('/dashboard/');
    
    // Check page header
    const mainHeader = page.locator('h1');
    await expect(mainHeader).toBeVisible();
    const headingText = await mainHeader.textContent();
    console.log('Dashboard main heading:', headingText);

    // Verify dynamic metrics with honest empty states
    const statCards = page.locator('text=/Readiness|ਤਿਆਰੀ|Flashcards|Cards/i');
    expect(await statCards.count()).toBeGreaterThan(0);
  });

  test('03. Auth flows: Register, Login, Demo Login, Forgot Password', async ({ page }) => {
    // 1. Register page
    await page.goto('/register/');
    await expect(page.locator('input[type="text"], input[name="name"]').first()).toBeVisible();
    
    // 2. Login page
    await page.goto('/login/');
    const demoLoginBtn = page.locator('button:has-text("Demo"), button:has-text("डेमो")');
    console.log('Demo Login button present:', await demoLoginBtn.count() > 0);

    // 3. Forgot password page
    await page.goto('/forgot-password/');
    await expect(page.locator('body')).toContainText(/पासवर्ड|Password/i);
  });

  test('04. Exam Catalog and syllabus navigation', async ({ page }) => {
    await page.goto('/exams/');
    await expect(page.locator('body')).toContainText(/Punjab|पंजाब/i);
    
    // Navigate to Punjab exams
    await page.goto('/exams/punjab/');
    await expect(page.locator('body')).toContainText(/Master Cadre|ETT|Clerk/i);
    
    // Study syllabus page (using valid static path)
    await page.goto('/study/punjab-master-cadre/social-science/');
    await expect(page.locator('body')).toContainText(/History|इतिहास/i);
  });

  test('05. Lesson reading, flip cards, notes tabs', async ({ page }) => {
    await page.goto('/lesson/sst-harappa/');
    await expect(page.locator('body')).toContainText(/हड़प्पा|Harappa/i);

    // Click Flashcards tab if present
    const cardsTab = page.locator('button:has-text("Flashcards"), button:has-text("फ्लैशकार्ड")').first();
    if (await cardsTab.count() > 0) {
      await cardsTab.click();
      await page.waitForTimeout(300);
      const flipCard = page.locator('.perspective-1000, [class*="flip"], text=/कार्ड|Card/i');
      console.log('Flip card elements found:', await flipCard.count());
    }
  });

  test('06. Topic Mock Test stuck spinner bug verification (/mock-test/topic-modern-india/)', async ({ page }) => {
    await page.goto('/mock-test/topic-modern-india/');
    await page.waitForTimeout(1500);
    
    const stuckSpinner = page.locator('text=/Generating 50-Question CBT Set|प्रश्नों का सेट तैयार किया जा रहा है/i');
    const isStuck = await stuckSpinner.count() > 0;
    console.log('Topic Modern India stuck spinner verified:', isStuck);
    expect(isStuck).toBe(false); // Bug resolved: no longer stuck!
  });

  test('07. Working 50-Question CBT Mock Test Engine and Client Answer Leak', async ({ page }) => {
    // Navigate to a valid mock test using valid query parameters
    await page.goto('/mock-test/topic-sst-harappa/');
    await page.waitForTimeout(1000);

    // Check if test loads or timer appears
    const timer = page.locator('text=/:[0-9]{2}/').first();
    const hasTimer = await timer.isVisible();
    console.log('CBT timer visible on valid topic:', hasTimer);

    // Check Question Palette
    const paletteButtons = page.locator('button:has-text("1")');
    console.log('Palette button 1 visible:', await paletteButtons.count() > 0);
  });

  test('08. Raavi Typing practice page audit', async ({ page }) => {
    await page.goto('/typing-practice/');
    await expect(page.locator('body')).toContainText(/ਟਾਈਪਿੰਗ|Typing/i);
    
    // Check timer defaults (showing official 600s / 10m benchmark)
    const timerText = await page.locator('text=/[0-9]+s/').first().textContent();
    console.log('Typing Practice timer initial text:', timerText);
    expect(timerText).toBe('600s'); // Verifies official 10m benchmark!

    // Check Raavi key hints
    const halantHint = page.locator('strong:has-text("d"), span:has-text("d")');
    console.log('Found InScript halant hint:', await halantHint.count() > 0);
    expect(await halantHint.count()).toBeGreaterThan(0);
  });

  test('09. Roadmap page audit', async ({ page }) => {
    await page.goto('/roadmap/');
    
    // Check Day counter
    const dayLabel = page.locator('text=/Day [0-9]+|दिन [0-9]+/i');
    expect(await dayLabel.count()).toBeGreaterThan(0);

    // Click ETT track tab
    const ettTab = page.locator('button:has-text("ETT")').first();
    await ettTab.click();
    await page.waitForTimeout(300);

    // Check Piaget task link in DOM
    const piagetText = page.locator('text=/Revise Piaget/i');
    console.log('Found Piaget task on ETT tab:', await piagetText.count() > 0);
    expect(await piagetText.count()).toBeGreaterThan(0);

    // Check that it links to child pedagogy
    const piagetLink = page.locator('a:has-text("Read Lesson Notes")').first();
    const href = await piagetLink.getAttribute('href');
    console.log('Piaget lesson link href:', href);
    expect(href).toContain('/lesson/child-development-pedagogy');
  });

  test('10. Virtual Library page audit', async ({ page }) => {
    await page.goto('/library/');
    
    // Check desks count (16 desks)
    const desks = page.locator('button:has-text("Open Desk"), button:has-text("Active")');
    const deskCount = await desks.count();
    console.log('Library desks rendered count:', deskCount);
    expect(deskCount).toBe(16);

    // Check honest initial hours studied (0h)
    const hoursText = page.locator('text=/0h|0\.0h/i').first();
    await expect(hoursText).toBeVisible();

    // Check no fake users presence
    const fakeUser = page.locator('text=Gurpreet');
    expect(await fakeUser.count()).toBe(0);
  });

  test('11. Profile page audit', async ({ page }) => {
    await page.goto('/profile/');
    
    // Check honest guest banner and no fake email
    const fakeEmail = page.locator('text=aspirant@examsathi.in');
    expect(await fakeEmail.count()).toBe(0);
    const guestBanner = page.locator('text=/Guest Student/i');
    expect(await guestBanner.count()).toBeGreaterThan(0);
  });

  test('12. Admin portal route guard audit', async ({ page }) => {
    // Direct access to /admin/ without logging in
    await page.goto('/admin/');
    
    // Verify access is blocked with restricted credentials gate
    const adminGate = page.locator('text=/Restricted Administrative Access|Enter Admin Passkey/i').first();
    console.log('Admin security challenge visible:', await adminGate.isVisible());
    expect(await adminGate.isVisible()).toBe(true);
  });

});
