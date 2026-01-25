const { test, expect, devices } = require('@playwright/test');

test.use({ ...devices['Pixel 5'] });

test.describe('Mobile Responsiveness', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should not have horizontal page scroll on homepage', async ({ page }) => {
        const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
        const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
        expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
    });

    test('should wrap language chips on mobile', async ({ page }) => {
        const chips = page.locator('.toggle-vis');
        const firstChip = chips.first();
        const lastChip = chips.last();

        const firstBox = await firstChip.boundingBox();
        const lastBox = await lastChip.boundingBox();

        // On mobile, chips should wrap, so they won't all be on the same Y coordinate
        expect(lastBox.y).toBeGreaterThan(firstBox.y);
    });

    test('should have horizontally scrollable table container', async ({ page }) => {
        const tableWrapper = page.locator('#langTable_wrapper');
        await expect(tableWrapper).toHaveCSS('overflow-x', 'auto');
    });

    test('should not have UI overlap in header on mobile concept page', async ({ page }) => {
        // Navigate to a known concept page
        await page.goto('/concepts-ssg/python-310/datatypes-primitives.html');

        const header = page.locator('h1');
        const cta = page.locator('.github-cta');

        const hBox = await header.boundingBox();
        const cBox = await cta.boundingBox();

        // Verify CTA is below header (stacked) on narrow viewport
        // On mobile, they should be vertically separated if they are stacked
        expect(cBox.y).toBeGreaterThan(hBox.y + hBox.height * 0.5);
    });

    test('should hide sidebar and show menu toggle on mobile', async ({ page }) => {
        const sidebar = page.locator('.sidebar');
        const menuToggle = page.locator('.menu-toggle');

        // Sidebar should be off-screen
        const box = await sidebar.boundingBox();
        expect(box.x).toBeLessThan(0);

        // Menu toggle should be visible
        await expect(menuToggle).toBeVisible();
    });
});
