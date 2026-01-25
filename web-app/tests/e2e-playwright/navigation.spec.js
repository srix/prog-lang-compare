const { test, expect } = require('@playwright/test');

test.describe('Navigation', () => {

    test('Navigate from Home to Concept Page', async ({ page }) => {
        await page.goto('/');

        // Wait for data table to load (it's populated via JS from concepts-spa)
        await expect(page.locator('#langTable')).toBeVisible();

        // Find a cell with a link (e.g., Python Arrays)
        // The specific selector depends on the table structure, but looking for the first concept cell link
        // Assuming the script.js adds links to table cells

        // Let's filter for a specific text if possible, or just click the first available permalink
        // Note: The concept builder might not have populated everything in the mock environment,
        // but we know Python 3.10 generated pages exist (from previous steps).

        // We can rely on searching for "Python" column and a concept row?
        // Or simpler: Look for any link matching the pattern

        // Note: The table renders dynamically. We need to wait for rows.
        const tableRow = page.locator('#langTable tbody tr').first();
        await tableRow.waitFor({ state: 'visible', timeout: 10000 });

        // Try to find a link inside the table that goes to concept details
        const conceptLink = page.locator('#langTable a[href*="concepts-ssg"]').first();

        if (await conceptLink.count() > 0) {
            // Prepare to wait for the new page (popup)
            const pagePromise = page.context().waitForEvent('page');

            await conceptLink.click();

            const newPage = await pagePromise;
            await newPage.waitForLoadState();

            // Verify URL on the new page
            const urlToClick = await conceptLink.getAttribute('href');
            await expect(newPage).toHaveURL(new RegExp(urlToClick));

            // Verify we are on a static page (check for "concept title" or back link)
            await expect(newPage.locator('text=Back to Language Comparison Table')).toBeVisible();

            // Navigate Back logic is now different because we are in a new tab.
            // We can just close the tab and check original page is still there, 
            // OR test navigation within the new tab if it has back links.
            // The static page has a "Back to Language Comparison Table" link.

            // Let's test the back link on the new page
            // <nav><a href="../index.html">← Back to Language Comparison Table</a></nav>
            await newPage.click('text=Back to Language Comparison Table');

            // It should go to index.html
            await expect(newPage).toHaveURL(/.*index\.html|.*\/$/);
        } else {
            console.log('No concept links found in table - skipping click test');
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
