#!/usr/bin/env node

/**
 * Generate static HTML pages for each language-concept combination.
 * This creates 2,512 SEO-friendly pages that search engines can index.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { loadFromYaml, getSafeName, slugify } = require('./helper');

// Paths
const SCRIPT_DIR = __dirname;
const CONTENT_DIR = path.resolve(SCRIPT_DIR, '../../concept-builder/output/content-autogen/gpt_3_5_turbo');
const CONCEPTS_OUTPUT_DIR = path.resolve(SCRIPT_DIR, '../public/concepts-ssg');
const PROG_LANGS_YAML = path.resolve(SCRIPT_DIR, '../../concept-builder/config/prog_langs.yaml');
const PROG_CONCEPTS_YAML = path.resolve(SCRIPT_DIR, '../../concept-builder/config/prog_lang_concepts.yaml');
const TEMPLATE_DIR = path.resolve(SCRIPT_DIR, '../src');

// Base URL
const BASE_URL = 'https://prog-lang-compare.netlify.app';

function getLastModifiedDate(filePath) {
    try {
        // Try to get date from git
        // Use relative path for git command
        const relPath = path.relative(path.dirname(__filename), filePath);
        const result = execSync(`git log -1 --format=%cI "${filePath}"`, {
            cwd: path.dirname(__filename),
            encoding: 'utf8',
            stdio: ['pipe', 'pipe', 'ignore'] // suppress stderr
        });

        if (result && result.trim()) {
            return result.trim().split('T')[0];
        }
    } catch (e) {
        // ignore
    }

    try {
        // Fallback to file modification time
        if (fs.existsSync(filePath)) {
            const stats = fs.statSync(filePath);
            return stats.mtime.toISOString().split('T')[0];
        }
    } catch (e) {
        // ignore
    }

    return new Date().toISOString().split('T')[0];
}

function markdownToHtml(markdownText) {
    if (!markdownText) return "";

    let html = markdownText;

    // Convert code blocks (```)
    html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
        return `<pre><code class="language-${lang}">${code}</code></pre>`;
    });

    // Convert inline code (`)
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Convert paragraphs
    const paragraphs = html.split('\n\n');
    const htmlParagraphs = paragraphs.map(para => {
        para = para.trim();
        if (!para) return '';

        if (para.startsWith('<pre>')) {
            return para;
        } else {
            // Replace single newlines with <br>
            para = para.replace(/\n/g, '<br>\n');
            return `<p>${para}</p>`;
        }
    }).filter(Boolean);

    return htmlParagraphs.join('\n');
}

function generateRelatedLanguagesSection(currentLanguage, conceptSlug, allLanguages) {
    if (!allLanguages || !Array.isArray(allLanguages)) return "";

    const otherLanguages = allLanguages.filter(lang => lang !== currentLanguage);
    if (!otherLanguages.length) return "";

    const languageLinks = otherLanguages.map(lang => {
        const langSlug = slugify(lang);
        const langDisplay = lang.replace(/_/g, ' ');
        return `<a href="../${langSlug}/${conceptSlug}.html">${langDisplay}</a>`;
    }).join('');

    return `
            <section class="related-concepts" style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
                <h2 style="font-size: 20px; margin-bottom: 15px; color: #2c3e50;">See this concept in other languages</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px;">
                    ${languageLinks}
                </div>
                <style>
                    .related-concepts a {
                        padding: 8px 12px;
                        background: #f5f5f5;
                        border-radius: 4px;
                        text-decoration: none;
                        color: #0066cc;
                        display: inline-block;
                        text-align: center;
                        transition: background 0.2s, transform 0.2s;
                    }
                    .related-concepts a:hover {
                        background: #e5e7eb;
                        transform: translateY(-2px);
                    }
                </style>
            </section>
`;
}

function generatePageTemplate(language, conceptKey, conceptTitle, contentHtml, category, allLanguages) {
    // Parse concept key
    const parts = conceptKey.split('_');
    let subconcept = "";
    let fullTitle = "";

    if (parts.length > 1) {
        subconcept = parts.slice(1).join(' ').replace(/_/g, ' ');
        fullTitle = `${subconcept} in ${language}`;
    } else {
        fullTitle = `${conceptTitle} in ${language}`;
    }

    // Generate description
    const description = parts.length > 1
        ? `Learn how to ${subconcept.toLowerCase()} in ${language}. See code examples and detailed explanations.`
        : `Programming concept ${conceptTitle} in ${language} with examples.`;

    const languageDisplay = language.replace(/_/g, ' ');
    const conceptSlug = slugify(conceptKey);
    const languageSlug = slugify(language);
    const pageUrl = `${BASE_URL}/concepts-ssg/${languageSlug}/${conceptSlug}.html`;

    const safeLangName = getSafeName(language);
    const jsonFile = path.join(CONTENT_DIR, `${safeLangName}.json`);
    const dateModified = getLastModifiedDate(jsonFile);

    const templatePath = path.join(TEMPLATE_DIR, 'concept_template.html');
    if (!fs.existsSync(templatePath)) {
        console.error(`Warning: Template not found at ${templatePath}`);
        return "<html><body>Template not found</body></html>";
    }

    let template = fs.readFileSync(templatePath, 'utf8');

    // Replacements
    template = template.replace(/\{\{full_title\}\}/g, fullTitle);
    template = template.replace(/\{\{description\}\}/g, description);
    template = template.replace(/\{\{language\}\}/g, language);
    template = template.replace(/\{\{concept_title\}\}/g, conceptTitle);
    template = template.replace(/\{\{category\}\}/g, category);
    template = template.replace(/\{\{page_url\}\}/g, pageUrl);
    template = template.replace(/\{\{BASE_URL\}\}/g, BASE_URL);
    template = template.replace(/\{\{date_modified\}\}/g, dateModified);
    template = template.replace(/\{\{language_slug\}\}/g, languageSlug);
    template = template.replace(/\{\{language_display\}\}/g, languageDisplay);
    template = template.replace(/\{\{content_html\}\}/g, contentHtml || ''); // Handle potential undefined

    // Optional sections
    const relatedSection = allLanguages ? generateRelatedLanguagesSection(language, conceptSlug, allLanguages) : "";
    template = template.replace(/\{\{related_concepts\}\}/g, relatedSection);

    return template;
}

function getCategoryForConcept(conceptKey, conceptsData) {
    const concepts = { ...conceptsData };
    delete concepts.title;

    for (const category in concepts) {
        const subconcepts = concepts[category];
        if (subconcepts && typeof subconcepts === 'object') {
            for (const subconceptKey in subconcepts) {
                // Approximate composite key logic from python script
                // The python script does complex replacement, we'll try to match basics
                // composite_key = f"{category}_{subconcept_key.replace(' ', '_').replace('?', '_').replace('/', '_')}"
                const processedSubKey = subconceptKey.replace(/ /g, '_').replace(/\?/g, '_').replace(/\//g, '_');
                const compositeKey = `${category}_${processedSubKey}`;

                if (compositeKey === conceptKey || conceptKey.includes(processedSubKey)) {
                    return category;
                }
            }
        }
    }

    return conceptKey.includes('_') ? conceptKey.split('_')[0] : 'General';
}

function generateAllPages() {
    console.log("Loading configurations...");
    const languagesData = loadFromYaml(PROG_LANGS_YAML);
    const conceptsData = loadFromYaml(PROG_CONCEPTS_YAML);

    const languages = languagesData['Programming Languages'] || [];
    console.log(`Found ${languages.length} languages`);

    let totalPages = 0;

    languages.forEach(language => {
        const safeLangName = getSafeName(language);
        const jsonFile = path.join(CONTENT_DIR, `${safeLangName}.json`);

        if (!fs.existsSync(jsonFile)) {
            console.log(`Warning: JSON file not found for ${language}: ${jsonFile}`);
            return;
        }

        console.log(`\nProcessing ${language}...`);

        const content = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));

        const languageSlug = slugify(language);
        const langDir = path.join(CONCEPTS_OUTPUT_DIR, languageSlug);
        fs.mkdirSync(langDir, { recursive: true });

        Object.keys(content).forEach(conceptKey => {
            const markdownContent = content[conceptKey];
            const conceptSlug = slugify(conceptKey);
            const category = getCategoryForConcept(conceptKey, conceptsData);
            const contentHtml = markdownToHtml(markdownContent);

            const html = generatePageTemplate(
                language,
                conceptKey,
                conceptKey.replace(/_/g, ' '),
                contentHtml,
                category,
                languages
            );

            const outputFile = path.join(langDir, `${conceptSlug}.html`);
            fs.writeFileSync(outputFile, html, 'utf8');
            totalPages++;
        });

        console.log(`  Generated ${Object.keys(content).length} pages for ${language}`);
    });

    console.log(`\n✓ Successfully generated ${totalPages} static HTML pages!`);
    console.log(`  Output directory: ${CONCEPTS_OUTPUT_DIR}`);

    return totalPages;
}

if (require.main === module) {
    const count = generateAllPages();
    // process.exit is not strictly necessary unless async ops hang, but good for robust scripts
}

module.exports = { generateAllPages };
