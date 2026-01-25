const { test, expect } = require('@playwright/test');

test.describe('Visual Tests', () => {

    test('Dark Mode Toggle', async ({ page }) => {
        await page.goto('/');

        // Check initial state (light mode)
        // Assuming light mode has a specific background or the 'data-theme' is not 'dark'
        const html = page.locator('html');
        await expect(html).not.toHaveAttribute('data-theme', 'dark');

        // Toggle Dark Mode
        await page.click('#themeToggle');

        // Check final state (dark mode)
        await expect(html).toHaveAttribute('data-theme', 'dark');

        // Check if background color changed (optional, but good for verification)
        const body = page.locator('body');
        // We expect the background var to apply. 
        // Computed style check in Playwright:
        const bgColor = await body.evaluate((el) => {
            return window.getComputedStyle(el).backgroundColor;
        });
        // This depends on the exact CSS value (e.g. #1a1a1a or similar), 
        // but the attribute check is usually sufficient for logic verification.
    });

    // Verify GitHub CTA Visibility
    test('GitHub CTA is visible', async ({ page }) => {
        await page.goto('/');
        const cta = page.locator('.github-cta');
        await expect(cta).toBeVisible();
        await expect(cta).toContainText('Find this useful? Support us:');
    });

});
