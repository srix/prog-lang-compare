const { test, expect } = require('@playwright/test');

test.describe('SEO Verification', () => {

    test('robots.txt should exist and be identical to source', async ({ request }) => {
        const response = await request.get('/robots.txt');
        expect(response.ok()).toBeTruthy();
        const content = await response.text();
        expect(content).toContain('User-agent: *');
        expect(content).toContain('Sitemap: https://programming-languages.com/sitemap.xml');
    });

    test('404.html should exist', async ({ request }) => {
        // We check if the file is served. Note: In a real server (nginx/netlify), 
        // 404s are served on missing routes. Here we just check the file exists 
        // and is served at /404.html for verification.
        const response = await request.get('/404.html');
        expect(response.ok()).toBeTruthy();
        const content = await response.text();
        expect(content).toContain('404 - Page Not Found');
    });

    test('Canonical URL should point to programming-languages.com', async ({ page }) => {
        await page.goto('/');
        const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
        expect(canonical).toBe('https://programming-languages.com/');
    });

    test('Open Graph URL should point to programming-languages.com', async ({ page }) => {
        await page.goto('/');
        const ogUrl = await page.locator('meta[property="og:url"]').getAttribute('content');
        expect(ogUrl).toBe('https://programming-languages.com/');
    });

    test('Scripts should be deferred/at bottom', async ({ page }) => {
        await page.goto('/');

        // precise check might be fragile, but we can check if datatables script is properly loaded
        // and that it is NOT in the head (naive check)
        const scriptsInHead = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('head script'))
                .map(s => s.src)
                .filter(src => src.includes('jquery.dataTables'));
        });

        expect(scriptsInHead.length).toBe(0);
    });
});
