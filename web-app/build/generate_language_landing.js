#!/usr/bin/env node

/**
 * Generate language landing pages for SEO.
 * Creates an index page for each programming language with links to all its concepts.
 */

const fs = require('fs');
const path = require('path');
const { loadFromYaml, getSafeName, slugify } = require('./helper');

// Paths
const SCRIPT_DIR = __dirname;
// New Structure relative to web-app/build
const CONTENT_DIR = path.resolve(SCRIPT_DIR, '../../concept-builder/output/content-autogen/gpt_3_5_turbo');
const CONCEPTS_DIR = path.resolve(SCRIPT_DIR, '../public/concepts-ssg');
const PROG_LANGS_YAML = path.resolve(SCRIPT_DIR, '../../concept-builder/config/prog_langs.yaml');

// Base URL
const BASE_URL = 'https://prog-lang-compare.netlify.app';

function generateLanguageLandingPage(language, concepts) {
    const slug = slugify(language);
    const languageDisplay = language.replace(/_/g, ' ');

    // Group concepts by category
    const categories = {};

    concepts.forEach(conceptKey => {
        const parts = conceptKey.split('_');
        if (parts.length > 1) {
            const category = parts[0];
            const subconcept = parts.slice(1).join('_');

            if (!categories[category]) {
                categories[category] = [];
            }

            categories[category].push({
                key: conceptKey,
                name: subconcept.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), // Title Case approximation
                slug: slugify(conceptKey)
            });
        }
    });

    // Sort categories
    const sortedCategories = Object.keys(categories).sort().map(key => ({
        name: key,
        items: categories[key]
    }));

    // Build concept cards HTML
    let allConceptsHtml = '';

    sortedCategories.forEach(category => {
        const categoryName = category.name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

        // Sort subconcepts by name
        const subconcepts = category.items.sort((a, b) => a.name.localeCompare(b.name));

        const subconceptCards = subconcepts.map(sc =>
            `<div class="concept-card"><a href="${slug}/${sc.slug}.html">${sc.name}</a></div>`
        ).join('');

        allConceptsHtml += `
        <section class="category-section">
            <h3>${categoryName}</h3>
            <div class="grid">
                ${subconceptCards}
            </div>
        </section>
        `;
    });

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <script>
        (function() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', savedTheme);
        })();
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Primary Meta Tags -->
    <title>${languageDisplay} Programming Concepts - Prog Lang Compare</title>
    <meta name="title" content="${languageDisplay} Programming Concepts - Prog Lang Compare">
    <meta name="description" content="Learn ${languageDisplay} programming with ${concepts.length} detailed concept explanations and code examples. Compare syntax, features, and best practices with other languages.">
    <meta name="keywords" content="${languageDisplay}, programming, code examples, syntax, tutorial, reference">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${BASE_URL}/concepts-ssg/${slug}.html">
    <meta property="og:title" content="${languageDisplay} Programming Concepts">
    <meta property="og:description" content="Learn ${languageDisplay} with ${concepts.length} detailed concept explanations and code examples.">
    <meta property="og:image" content="${BASE_URL}/social-preview.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${BASE_URL}/concepts-ssg/${slug}.html">
    <meta property="twitter:title" content="${languageDisplay} Programming Concepts">
    <meta property="twitter:description" content="Learn ${languageDisplay} with ${concepts.length} detailed concept explanations.">
    <meta property="twitter:image" content="${BASE_URL}/social-preview.png">

    <!-- Canonical URL -->
    <link rel="canonical" href="${BASE_URL}/concepts-ssg/${slug}.html">

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="../favicon.svg">

    <link rel="stylesheet" href="../styles.css">
    <!-- Highlight.js theme is controlled by custom CSS -->

    <style>
        /* Minimal critical overrides if needed, otherwise rely on styles.css */
        body {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        /* Adjustments for static pages layout */
        .intro {
            font-size: 18px;
            color: var(--text-secondary);
            margin-bottom: 40px;
        }

        .stats {
            background: var(--bg-primary);
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 40px;
            box-shadow: var(--shadow-sm);
            border: 1px solid var(--border-color);
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }

        .stat-item {
            text-align: center;
        }

        .stat-number {
            font-size: 36px;
            font-weight: bold;
            color: var(--primary);
        }

        .stat-label {
            font-size: 14px;
            color: var(--text-secondary);
            margin-top: 5px;
        }

        .category-section {
            margin-bottom: 40px;
        }

        h2, h3 {
            color: var(--text-primary);
            margin-bottom: 20px;
        }

        h3 {
            font-size: 24px;
            border-left: 4px solid var(--primary);
            padding-left: 15px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 15px;
            margin-bottom: 30px;
        }

        .concept-card {
            background: var(--bg-primary);
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: var(--shadow-sm);
            border: 1px solid var(--border-color);
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .concept-card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        .concept-card a {
            text-decoration: none;
            color: var(--primary);
            font-weight: 500;
        }

        .concept-card a:hover {
            text-decoration: underline;
        }

        footer {
            margin-top: 60px;
            padding-top: 20px;
            border-top: 2px solid var(--border-color);
            text-align: center;
            color: var(--text-secondary);
            font-size: 14px;
        }

        footer a {
            color: var(--primary);
            text-decoration: none;
        }

        footer a:hover {
            text-decoration: underline;
        }

        @media (max-width: 768px) {
            body {
                padding: 15px;
            }

            h1 {
                font-size: 28px;
            }

            .intro {
                font-size: 16px;
            }

            .grid {
                grid-template-columns: 1fr;
            }
        }
    </style>

    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "${languageDisplay} Programming Concepts",
        "description": "Learn ${languageDisplay} programming with ${concepts.length} detailed concept explanations and code examples.",
        "url": "${BASE_URL}/concepts/${slug}.html",
        "isPartOf": {
            "@type": "WebSite",
            "name": "Prog Lang Compare",
            "url": "${BASE_URL}"
        },
        "about": {
            "@type": "ComputerLanguage",
            "name": "${languageDisplay}"
        }
    }
    </script>
</head>
<body>
    <!-- Dark Mode Toggle -->
    <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">
        <svg id="sunIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg id="moonIcon" style="display: none;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    </button>

    <nav>
        <a href="../index.html">← Back to Language Comparison Table</a>
    </nav>

    <header>
        <div class="header-controls">
            <h1>${languageDisplay} Programming Concepts</h1>
            <div class="github-cta">
                <span>Find this useful? Support us:</span>
                <script async defer src="https://buttons.github.io/buttons.js"></script>
                <a class="github-button" href="https://github.com/srix/prog-lang-compare" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star srix/prog-lang-compare on GitHub">Star on GitHub</a>
            </div>
        </div>
        <p class="intro">Explore ${languageDisplay} programming with detailed explanations and code examples across ${concepts.length} concepts.</p>
    </header>

    <div class="stats">
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-number">${concepts.length}</div>
                <div class="stat-label">Concepts Covered</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">${Object.keys(categories).length}</div>
                <div class="stat-label">Categories</div>
            </div>
        </div>
    </div>

    <main>
        <h2>All Concepts</h2>
        ${allConceptsHtml}
    </main>

    <footer>
        <p>Content generated using AI | <a href="https://github.com/srix/prog-lang-compare" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
    </footer>

    <script src="../theme.js"></script>
</body>
</html>`;

    // Save the page
    const outputPath = path.join(CONCEPTS_DIR, `${slug}.html`);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html, 'utf8');

    return outputPath;
}

function generateAllLanguageLandingPages() {
    console.log("Generating language landing pages...");
    console.log(`Content directory: ${CONTENT_DIR}`);
    console.log(`Output directory: ${CONCEPTS_DIR}`);
    console.log("");

    // Load languages
    let languages = [];
    try {
        const langsData = loadFromYaml(PROG_LANGS_YAML);
        languages = langsData['Programming Languages'] || [];
    } catch (e) {
        console.error(`Error loading languages: ${e}`);
        return 0;
    }

    console.log(`Found ${languages.length} languages`);
    console.log("");

    let generatedCount = 0;

    languages.forEach(lang => {
        const safeLang = getSafeName(lang);
        const jsonFile = path.join(CONTENT_DIR, `${safeLang}.json`);

        if (!fs.existsSync(jsonFile)) {
            console.log(`⚠ Warning: JSON file not found for ${lang}: ${jsonFile}`);
            return;
        }

        try {
            // Load language content
            const content = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));

            // Generate landing page
            const outputPath = generateLanguageLandingPage(lang, Object.keys(content));

            console.log(`✓ Generated: ${lang} (${Object.keys(content).length} concepts) -> ${path.basename(outputPath)}`);
            generatedCount++;

        } catch (e) {
            console.error(`✗ Error generating ${lang}: ${e}`);
        }
    });

    console.log("");
    console.log(`✓ Successfully generated ${generatedCount} language landing pages!`);
    console.log(`  Output directory: ${CONCEPTS_DIR}`);

    return generatedCount;
}

if (require.main === module) {
    const count = generateAllLanguageLandingPages();
    process.exit(count > 0 ? 0 : 1);
}

module.exports = { generateLanguageLandingPage };
