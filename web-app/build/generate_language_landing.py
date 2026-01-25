#!/usr/bin/env python3
# Copyright 2026 Programming Language Comparison Contributors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""
Generate language landing pages for SEO.
Creates an index page for each programming language with links to all its concepts.
Fixes breadcrumb 404s in concept pages.
"""

import os
import json
import re
import sys
from helper import load_from_yaml, get_safename

# Paths
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
# Paths
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
# New Structure
CONTENT_DIR = os.path.join(SCRIPT_DIR, '..', '..', 'concept-builder', 'output', 'content-autogen', 'gpt_3_5_turbo')
CONCEPTS_DIR = os.path.join(SCRIPT_DIR, '..', 'public', 'concepts-ssg')
PROG_LANGS_YAML = os.path.join(SCRIPT_DIR, '..', '..', 'concept-builder', 'config', 'prog_langs.yaml')

# Base URL
BASE_URL = 'https://prog-lang-compare.netlify.app'


def slugify(text):
    """Convert text to URL-friendly slug."""
    # Remove special characters and convert to lowercase
    # Also replace underscores with hyphens to match language landing pages
    text = text.replace('_', '-')
    slug = re.sub(r'[^\w\s-]', '', text.lower())
    # Replace whitespace with hyphens
    slug = re.sub(r'[-\s]+', '-', slug)
    return slug.strip('-')


def generate_language_landing_page(language, concepts):
    """Generate a landing page for a specific language."""
    slug = slugify(language)
    safe_name = get_safename(language)
    language_display = language.replace('_', ' ')

    # Group concepts by category (first part before underscore)
    categories = {}
    for concept_key in concepts:
        # Extract category from concept key (e.g., "Datatypes_Primitives" -> "Datatypes")
        parts = concept_key.split('_')
        if len(parts) > 1:
            category = parts[0]
            subconcept = '_'.join(parts[1:])

            if category not in categories:
                categories[category] = []
            categories[category].append({
                'key': concept_key,
                'name': subconcept.replace('_', ' ').title(),
                'slug': slugify(concept_key)
            })

    # Sort categories
    sorted_categories = sorted(categories.items())

    # Build concept cards HTML
    all_concepts_html = ""
    for category, subconcepts in sorted_categories:
        category_name = category.replace('_', ' ').title()
        subconcept_cards = ''.join([
            f'<div class="concept-card"><a href="{slug}/{sc["slug"]}.html">{sc["name"]}</a></div>'
            for sc in sorted(subconcepts, key=lambda x: x['name'])
        ])

        all_concepts_html += f"""
        <section class="category-section">
            <h3>{category_name}</h3>
            <div class="grid">
                {subconcept_cards}
            </div>
        </section>
        """

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Primary Meta Tags -->
    <title>{language_display} Programming Concepts - Prog Lang Compare</title>
    <meta name="title" content="{language_display} Programming Concepts - Prog Lang Compare">
    <meta name="description" content="Learn {language_display} programming with {len(concepts)} detailed concept explanations and code examples. Compare syntax, features, and best practices with other languages.">
    <meta name="keywords" content="{language_display}, programming, code examples, syntax, tutorial, reference">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{BASE_URL}/concepts-ssg/{slug}.html">
    <meta property="og:title" content="{language_display} Programming Concepts">
    <meta property="og:description" content="Learn {language_display} with {len(concepts)} detailed concept explanations and code examples.">
    <meta property="og:image" content="{BASE_URL}/social-preview.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{BASE_URL}/concepts-ssg/{slug}.html">
    <meta property="twitter:title" content="{language_display} Programming Concepts">
    <meta property="twitter:description" content="Learn {language_display} with {len(concepts)} detailed concept explanations.">
    <meta property="twitter:image" content="{BASE_URL}/social-preview.png">

    <!-- Canonical URL -->
    <link rel="canonical" href="{BASE_URL}/concepts-ssg/{slug}.html">

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="../favicon.svg">

    <link rel="stylesheet" href="../styles.css">
    <!-- Highlight.js theme is controlled by custom CSS -->

    <style>
        /* Minimal critical overrides if needed, otherwise rely on styles.css */
        body {{
            max-width: 1200px;
            margin: 0 auto;
        }}
        
        /* Adjustments for static pages layout */
        .intro {{
            font-size: 18px;
            color: var(--text-secondary);
            margin-bottom: 40px;
        }}

        .stats {{
            background: var(--bg-primary);
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 40px;
            box-shadow: var(--shadow-sm);
            border: 1px solid var(--border-color);
        }}

        .stats-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }}

        .stat-item {{
            text-align: center;
        }}

        .stat-number {{
            font-size: 36px;
            font-weight: bold;
            color: var(--primary);
        }}

        .stat-label {{
            font-size: 14px;
            color: var(--text-secondary);
            margin-top: 5px;
        }}

        .category-section {{
            margin-bottom: 40px;
        }}

        h2, h3 {{
            color: var(--text-primary);
            margin-bottom: 20px;
        }}

        h3 {{
            font-size: 24px;
            border-left: 4px solid var(--primary);
            padding-left: 15px;
        }}

        .grid {{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 15px;
            margin-bottom: 30px;
        }}

        .concept-card {{
            background: var(--bg-primary);
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: var(--shadow-sm);
            border: 1px solid var(--border-color);
            transition: transform 0.2s, box-shadow 0.2s;
        }}

        .concept-card:hover {{
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }}

        .concept-card a {{
            text-decoration: none;
            color: var(--primary);
            font-weight: 500;
        }}

        .concept-card a:hover {{
            text-decoration: underline;
        }}

        footer {{
            margin-top: 60px;
            padding-top: 20px;
            border-top: 2px solid var(--border-color);
            text-align: center;
            color: var(--text-secondary);
            font-size: 14px;
        }}

        footer a {{
            color: var(--primary);
            text-decoration: none;
        }}

        footer a:hover {{
            text-decoration: underline;
        }}

        @media (max-width: 768px) {{
            body {{
                padding: 15px;
            }}

            h1 {{
                font-size: 28px;
            }}

            .intro {{
                font-size: 16px;
            }}

            .grid {{
                grid-template-columns: 1fr;
            }}
        }}
    </style>

    <!-- Structured Data -->
    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "{language_display} Programming Concepts",
        "description": "Learn {language_display} programming with {len(concepts)} detailed concept explanations and code examples.",
        "url": "{BASE_URL}/concepts/{slug}.html",
        "isPartOf": {{
            "@type": "WebSite",
            "name": "Prog Lang Compare",
            "url": "{BASE_URL}"
        }},
        "about": {{
            "@type": "ComputerLanguage",
            "name": "{language_display}"
        }}
    }}
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
            <h1>{language_display} Programming Concepts</h1>
            <div class="github-cta">
                <span>Find this useful? Support us:</span>
                <script async defer src="https://buttons.github.io/buttons.js"></script>
                <a class="github-button" href="https://github.com/srix/prog-lang-compare" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star srix/prog-lang-compare on GitHub">Star on GitHub</a>
            </div>
        </div>
        <p class="intro">Explore {language_display} programming with detailed explanations and code examples across {len(concepts)} concepts.</p>
    </header>

    <div class="stats">
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-number">{len(concepts)}</div>
                <div class="stat-label">Concepts Covered</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">{len(categories)}</div>
                <div class="stat-label">Categories</div>
            </div>
        </div>
    </div>

    <main>
        <h2>All Concepts</h2>
        {all_concepts_html}
    </main>

    <footer>
        <p>Content generated using AI | <a href="https://github.com/srix/prog-lang-compare" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
    </footer>

    <script src="../theme.js"></script>
</body>
</html>"""

    # Save the page
    output_path = os.path.join(CONCEPTS_DIR, f'{slug}.html')
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)

    return output_path


def generate_all_language_landing_pages():
    """Generate landing pages for all languages."""

    print("Generating language landing pages...")
    print(f"Content directory: {CONTENT_DIR}")
    print(f"Output directory: {CONCEPTS_DIR}")
    print("")

    # Load languages
    try:
        langs_data = load_from_yaml(PROG_LANGS_YAML)
        languages = langs_data.get('Programming Languages', [])
    except Exception as e:
        print(f"Error loading languages: {e}")
        return 0

    print(f"Found {len(languages)} languages")
    print("")

    generated_count = 0

    for lang in languages:
        safe_lang = get_safename(lang)
        json_file = os.path.join(CONTENT_DIR, f'{safe_lang}.json')

        if not os.path.exists(json_file):
            print(f"⚠ Warning: JSON file not found for {lang}: {json_file}")
            continue

        try:
            # Load language content
            with open(json_file, 'r', encoding='utf-8') as f:
                content = json.load(f)

            # Generate landing page
            output_path = generate_language_landing_page(lang, list(content.keys()))

            print(f"✓ Generated: {lang} ({len(content)} concepts) -> {os.path.basename(output_path)}")
            generated_count += 1

        except Exception as e:
            print(f"✗ Error generating {lang}: {e}")

    print("")
    print(f"✓ Successfully generated {generated_count} language landing pages!")
    print(f"  Output directory: {CONCEPTS_DIR}")

    return generated_count


if __name__ == '__main__':
    count = generate_all_language_landing_pages()
    sys.exit(0 if count > 0 else 1)
