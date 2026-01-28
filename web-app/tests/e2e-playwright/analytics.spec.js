const { test, expect } = require('@playwright/test');

test.describe('Analytics Integration', () => {
    const GA_ID = 'G-V0E6QSYD2C';

    test('should have Google Analytics tag on Home page', async ({ page }) => {
        await page.goto('/');
        const gaScript = await page.locator(`script[src*="googletagmanager.com/gtag/js?id=${GA_ID}"]`);
        await expect(gaScript).toHaveCount(1);
    });

    test('should have Google Analytics tag on About page', async ({ page }) => {
        await page.goto('/about.html');
        const gaScript = await page.locator(`script[src*="googletagmanager.com/gtag/js?id=${GA_ID}"]`);
        await expect(gaScript).toHaveCount(1);
    });

    test('should have Google Analytics tag on 404 page', async ({ page }) => {
        await page.goto('/404.html');
        const gaScript = await page.locator(`script[src*="googletagmanager.com/gtag/js?id=${GA_ID}"]`);
        await expect(gaScript).toHaveCount(1);
    });

    test('should track interactions (mocked)', async ({ page }) => {
        await page.goto('/');

        // Mock gtag
        await page.evaluate(() => {
            window.gtagCalls = [];
            window.gtag = function (command, eventName, params) {
                window.gtagCalls.push({ command, eventName, params });
            };
        });

        // 1. Theme Toggle
        await page.click('#themeToggle');
        const themeCalls = await page.evaluate(() => window.gtagCalls.filter(c => c.eventName === 'theme_toggle'));
        expect(themeCalls.length).toBeGreaterThan(0);
        expect(themeCalls[0].params.event_category).toBe('interaction');

        // 2. Language Toggle
        // Click the first language toggle
        await page.click('#allLanguages a.toggle-vis:first-child');
        const langCalls = await page.evaluate(() => window.gtagCalls.filter(c => c.eventName === 'language_toggle'));
        expect(langCalls.length).toBeGreaterThan(0);

        // 3. TOC Click (Concept Selection)
        // Wait for table to load
        await page.waitForSelector('#langTable');
        // Click the first subconcept in TOC
        await page.click('#toc ul ul li a:first-child');
        const conceptCalls = await page.evaluate(() => window.gtagCalls.filter(c => c.eventName === 'concept_select'));
        expect(conceptCalls.length).toBeGreaterThan(0);
    });

    test('should track about page interactions (mocked)', async ({ page }) => {
        await page.goto('/about.html');

        // Mock gtag
        await page.evaluate(() => {
            window.gtagCalls = [];
            window.gtag = function (command, eventName, params) {
                window.gtagCalls.push({ command, eventName, params });
            };
        });

        // 1. Click a personal link (e.g., srix.net)
        // We use evaluate to trigger the click event directly to avoid any navigation issues in the test environment
        await page.evaluate(() => {
            const link = document.querySelector('.link-list a[href*="srix.net"]');
            // Ensure we prevent default to avoid navigation
            link.addEventListener('click', (e) => e.preventDefault());
            link.click();
        });

        const outboundCalls = await page.evaluate(() => window.gtagCalls.filter(c => c.eventName === 'outbound_click'));
        expect(outboundCalls.length).toBeGreaterThan(0);
        expect(outboundCalls[0].params.event_label).toContain('srix.net');

        // 2. Click Back Link
        await page.evaluate(() => {
            const backLink = document.querySelector('.back-link');
            if (backLink) {
                backLink.addEventListener('click', (e) => e.preventDefault());
                backLink.click();
            }
        });
        const internalCalls = await page.evaluate(() => window.gtagCalls.filter(c => c.eventName === 'internal_click'));
        expect(internalCalls.length).toBeGreaterThan(0);
        expect(internalCalls[0].params.event_label).toBe('back_to_home');
    });

    // Checking a sample generated concept page
    // Using a path that we know exists from the 'grep' check in the previous task
    test('should have Google Analytics tag on a Concept page', async ({ page }) => {
        // We'll target a Python concept page which is likely to exist
        await page.goto('/concepts-ssg/python-310/array-add.html');
        const gaScript = await page.locator(`script[src*="googletagmanager.com/gtag/js?id=${GA_ID}"]`);
        await expect(gaScript).toHaveCount(1);
    });
});
