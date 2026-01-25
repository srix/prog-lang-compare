const { test, expect } = require('@playwright/test');

test.describe('Static Concept Pages (SSG)', () => {
    const testPage = '/concepts-ssg/dart/array-index-of-element.html';
    const haskellPage = '/concepts-ssg/haskell/array-index-of-element.html';

    test.beforeEach(async ({ page }) => {
        // Assume the server is running on localhost:8080 or as configured in playwright.config.js
        await page.goto(testPage);
    });

    test('Dark Mode - Related Concepts section uses theme variables', async ({ page }) => {
        const relatedSection = page.locator('.related-concepts');
        const header = relatedSection.locator('h2');

        // Toggle Dark Mode
        await page.click('#themeToggle');
        await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

        // Check that the header color is not the old hardcoded #2c3e50
        // We check the computed style to ensure it adapts.
        const color = await header.evaluate((el) => window.getComputedStyle(el).color);
        // rgb(241, 245, 249) is --text-primary in dark mode (#f1f5f9)
        expect(color).not.toBe('rgb(44, 62, 80)'); // #2c3e50
    });

    test('Syntax Highlighting - Code blocks are highlighted on load', async ({ page }) => {
        const codeBlock = page.locator('pre code.language-dart').first();

        // Wait for highlighting to be applied (hljs adds hljs class)
        await expect(codeBlock).toHaveClass(/hljs/);

        // Verify that there are internal spans (indicating highlight tokens)
        const tokenCount = await codeBlock.locator('span').count();
        expect(tokenCount).toBeGreaterThan(0);
    });

    test('Syntax Highlighting - Extra languages (Haskell) are supported', async ({ page }) => {
        await page.goto(haskellPage);
        const codeBlock = page.locator('pre code.language-haskell').first();

        // Ensure the haskell module loaded and applied
        await expect(codeBlock).toHaveClass(/hljs/);
        const tokenCount = await codeBlock.locator('span').count();
        expect(tokenCount).toBeGreaterThan(0);
    });

    test('Flicker Prevention - Inline theme script is present in head', async ({ page }) => {
        const scriptInHead = await page.evaluate(() => {
            const scripts = Array.from(document.querySelectorAll('head script'));
            return scripts.some(s => s.textContent.includes('localStorage.getItem(\'theme\')'));
        });
        expect(scriptInHead).toBe(true);
    });

    test('Theme persistence across navigation', async ({ page }) => {
        // Switch to dark mode
        await page.click('#themeToggle');
        await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

        // Navigate to another static page
        await page.goto(haskellPage);

        // Verify dark mode is still active
        await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    });
});
