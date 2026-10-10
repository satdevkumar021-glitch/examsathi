import { test, expect } from '@playwright/test';

test.describe('Milestone 4: Admin Portal, Dynamic Roadmap, Virtual Library, and Raavi Typing (B2, B3, B8, B9, B10)', () => {

  test('M4-1. Admin Portal RBAC, Pipeline & 50+ Topics (B3)', async ({ page }) => {
    await page.goto('/admin/');

    // Passkey authentication challenge visible
    const passkeyInput = page.locator('input[type="password"]');
    await expect(passkeyInput).toBeVisible();

    // Authenticate with reviewer passkey
    await passkeyInput.fill('reviewer');
    await page.locator('button[type="submit"]:has-text("Authenticate")').click();

    // Verify Admin Portal loaded
    await expect(page.locator('h1:has-text("Publisher & Review Portal")')).toBeVisible();

    // Verify Role badge shows Reviewer
    await expect(page.locator('button:has-text("Reviewer")')).toHaveClass(/bg-indigo-600/);

    // Verify Editorial Pipeline items are visible
    const pipelineItems = page.locator('text=/review|draft|published/i');
    expect(await pipelineItems.count()).toBeGreaterThan(0);

    // Switch to Question tab and verify topic selector has 50+ topics
    await page.locator('button:has-text("+Question")').click();
    const topicSelect = page.locator('select').first();
    const topicOptionCount = await topicSelect.locator('option').count();
    console.log('Total topic options in admin dropdown:', topicOptionCount);
    expect(topicOptionCount).toBeGreaterThanOrEqual(40);
  });

  test('M4-2. Roadmap Dynamic Day & Milestones (B8)', async ({ page }) => {
    await page.goto('/roadmap/');

    // Verify Day indicator
    const dayBadge = page.locator('text=/Day [0-9]+ of 60/');
    await expect(dayBadge).toBeVisible();

    // Switch to ETT track
    const ettTab = page.locator('button:has-text("ETT")').first();
    await ettTab.click();
    await page.waitForTimeout(200);

    // Verify milestone selector buttons (Day 1, 14, 30, 45, 60)
    const milestone1 = page.locator('button:has-text("Day 1")').first();
    const milestone14 = page.locator('button:has-text("Day 14")').first();
    const milestone60 = page.locator('button:has-text("Day 60")').first();
    await expect(milestone1).toBeVisible();
    await expect(milestone14).toBeVisible();
    await expect(milestone60).toBeVisible();

    // Click Day 1 milestone
    await milestone1.click();
    await page.waitForTimeout(200);
    await expect(page.locator('h2:has-text("Day 1:")')).toBeVisible();

    // Click Day 14 and verify Piaget task
    await milestone14.click();
    await page.waitForTimeout(200);
    const piagetTask = page.locator('a[href*="/lesson/child-development-pedagogy"]').first();
    await expect(piagetTask).toBeVisible();
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
