#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { fetchGitHubStars, generateGitHubButtonHtml } = require('./fetch_github_stars');

const SRC_FILE = path.resolve(__dirname, '../src/index.html');
const DEST_FILE = path.resolve(__dirname, '../public/index.html');

async function processIndex() {
    console.log("Processing index.html...");

    // Create public directory if it doesn't exist (though usually handled by build.sh)
    const destDir = path.dirname(DEST_FILE);
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }

    // Read source
    let html = fs.readFileSync(SRC_FILE, 'utf8');

    // Fetch stars
    console.log("Fetching GitHub stars...");
    const stars = await fetchGitHubStars();
    console.log(`Stars fetched: ${stars}`);

    // Generate Button HTML
    const buttonHtml = generateGitHubButtonHtml(stars);

    // Replace placeholder
    if (html.includes('{{github_button}}')) {
        html = html.replace('{{github_button}}', buttonHtml);
        console.log("Replaced {{github_button}} placeholder.");
    } else {
        console.warn("Warning: {{github_button}} placeholder not found in index.html");
    }

    // Write to public
    fs.writeFileSync(DEST_FILE, html, 'utf8');
    console.log(`Written to ${DEST_FILE}`);
}

processIndex().catch(err => {
    console.error("Error processing index.html:", err);
    process.exit(1);
});
