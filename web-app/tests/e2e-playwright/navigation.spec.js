const { test, expect } = require('@playwright/test');

test.describe('Navigation', () => {

    test('Navigate from Home to Concept Page', async ({ page }) => {
        await page.goto('/');

        // Wait for data table to load (it's populated via JS from concepts-spa)
        await expect(page.locator('#langTable')).toBeVisible();

        // Wait for rows to be populated
        const tableRow = page.locator('#langTable tbody tr').first();
        await tableRow.waitFor({ state: 'visible', timeout: 10000 });

        // Find a concept permalink inside the table
        const conceptLink = page.locator('#langTable a[href*="concepts-ssg"]').first();

        if (await conceptLink.count() > 0) {
            // Verify the link does NOT have target="_blank"
            const targetAttr = await conceptLink.getAttribute('target');
            expect(targetAttr).toBeNull();

            // Verify the link does NOT contain the external link icon (↗)
            const linkText = await conceptLink.textContent();
            expect(linkText).not.toContain('↗');

            // Get the URL before clicking
            const urlToClick = await conceptLink.getAttribute('href');

            // Click the link (should navigate in same tab)
            await conceptLink.click();

            // Wait for navigation to complete
            await page.waitForLoadState();

            // Verify we navigated to the concept page in the SAME tab
            await expect(page).toHaveURL(new RegExp(urlToClick));

            // Verify we are on a static page (check for back link)
            await expect(page.locator('text=Back to Language Comparison Table')).toBeVisible();

            // Navigate back using the back link
            await page.click('text=Back to Language Comparison Table');

            // Should return to index
            await expect(page).toHaveURL(/.*index\.html|.*\/$/);
        } else {
            console.log('No concept links found in table - skipping click test');
        }
    });

    test('Language Header Links Navigate in Same Tab', async ({ page }) => {
        await page.goto('/');

        // Wait for table to load
        await expect(page.locator('#langTable')).toBeVisible();

        // Find a language header link (e.g., to rust-155.html)
        const headerLink = page.locator('th a[href*="concepts-ssg"]').first();

        if (await headerLink.count() > 0) {
            // Verify the link does NOT have target="_blank"
            const targetAttr = await headerLink.getAttribute('target');
            expect(targetAttr).toBeNull();

            // Verify the link does NOT contain the external link icon (↗)
            const linkText = await headerLink.textContent();
            expect(linkText).not.toContain('↗');

            // Get the URL before clicking
            const urlToClick = await headerLink.getAttribute('href');

            // Click the link
            await headerLink.click();

            // Wait for navigation
            await page.waitForLoadState();

            // Verify we navigated to the landing page in the SAME tab
            await expect(page).toHaveURL(new RegExp(urlToClick));

            // Verify we're on a language landing page
            await expect(page.locator('h1')).toBeVisible();
        } else {
            console.log('No language header links found - skipping test');
        }
    });

    test('Static Page Navigation', async ({ page }) => {
        // Direct access to a generated page
        // We know `rust-155.html` exists from previous tasks
        await page.goto('/concepts-ssg/rust-155.html');

        await expect(page.locator('h1')).toContainText('Rust 1.55');

        // Check Theme Toggle on static page
        const html = page.locator('html');
        await expect(html).not.toHaveAttribute('data-theme', 'dark');
        await page.click('#themeToggle');
        await expect(html).toHaveAttribute('data-theme', 'dark');
    });

});
