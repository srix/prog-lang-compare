#!/usr/bin/env node

/**
 * Generate sitemap.xml for all pages in the site.
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { execSync } = require('child_process');

// Paths
const SCRIPT_DIR = __dirname;
const DOCS_DIR = path.resolve(SCRIPT_DIR, '../public');
const CONCEPTS_DIR = path.resolve(DOCS_DIR, 'concepts-ssg');
const SITEMAP_FILE = path.join(DOCS_DIR, 'sitemap.xml');

// Base URL
const BASE_URL = 'https://prog-lang-compare.netlify.app';

function getGitLastModified(filePath) {
    try {
        const result = execSync(`git log -1 --format=%cI "${filePath}"`, {
            cwd: DOCS_DIR,
            encoding: 'utf8',
            stdio: ['pipe', 'pipe', 'ignore']
        });

        if (result && result.trim()) {
            return result.trim().split('T')[0];
        }
    } catch (e) {
        console.warn(`Warning: Could not get git date for ${filePath}`);
    }

    try {
        const stats = fs.statSync(filePath);
        return stats.mtime.toISOString().split('T')[0];
    } catch (e) {
        return new Date().toISOString().split('T')[0];
    }
}

function generateSitemap() {
    console.log("Generating sitemap.xml...");

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    // Add main index page
    const indexFile = path.join(DOCS_DIR, 'index.html');
    const indexLastMod = getGitLastModified(indexFile);

    xml += `  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${indexLastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
`;
    console.log("Added main index page");

    // Add all concept pages
    let pageCount = 0;

    if (fs.existsSync(CONCEPTS_DIR)) {
        const htmlFiles = glob.sync(path.join(CONCEPTS_DIR, '**/*.html'));

        htmlFiles.forEach(htmlFile => {
            const relPath = path.relative(DOCS_DIR, htmlFile);
            const urlPath = relPath.split(path.sep).join('/'); // Ensure forward slashes

            // Determine priority
            const pathParts = relPath.split(path.sep);
            const isLanguageLanding = pathParts.length === 2 &&
                pathParts[0] === 'concepts-ssg' &&
                pathParts[1].endsWith('.html');

            const lastMod = getGitLastModified(htmlFile);
            const changefreq = isLanguageLanding ? 'weekly' : 'monthly';
            const priority = isLanguageLanding ? '0.9' : '0.8';

            xml += `  <url>
    <loc>${BASE_URL}/${urlPath}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
            pageCount++;
        });

        console.log(`Added ${pageCount} concept pages`);
    } else {
        console.log(`Warning: Concepts directory not found: ${CONCEPTS_DIR}`);
    }

    xml += `</urlset>`;

    fs.writeFileSync(SITEMAP_FILE, xml, 'utf8');

    console.log(`\n✓ Successfully generated sitemap.xml!`);
    console.log(`  Total URLs: ${pageCount + 1}`);
    console.log(`  Output file: ${SITEMAP_FILE}`);

    return pageCount + 1;
}

if (require.main === module) {
    generateSitemap();
}

module.exports = { generateSitemap };
