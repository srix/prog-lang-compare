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
Generate static HTML pages for each language-concept combination.
This creates 2,512 SEO-friendly pages that search engines can index.
"""

import os
import json
import re
import subprocess
import datetime
from helper import load_from_yaml, get_safename

# Paths
DOCS_DIR = os.path.join(os.path.dirname(__file__), '..', 'docs')
CONTENT_DIR = os.path.join(DOCS_DIR, 'content-autogen', 'gpt_3_5_turbo')
CONCEPTS_OUTPUT_DIR = os.path.join(DOCS_DIR, 'concepts')
PROG_LANGS_YAML = os.path.join(DOCS_DIR, 'prog_langs.yaml')
PROG_CONCEPTS_YAML = os.path.join(DOCS_DIR, 'prog_lang_concepts.yaml')

# Base URL for canonical links
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


def get_last_modified_date(file_path):
    """Get last modified date from git history or filesystem."""
    try:
        # Try to get date from git
        result = subprocess.run(
            ['git', 'log', '-1', '--format=%cI', file_path],
            capture_output=True,
            text=True,
            cwd=os.path.dirname(__file__)
        )
        if result.returncode == 0 and result.stdout.strip():
            # Extract date part (YYYY-MM-DD)
            return result.stdout.strip().split('T')[0]
    except:
        pass

    # Fallback to file modification time
    try:
        if os.path.exists(file_path):
            mtime = os.path.getmtime(file_path)
            return datetime.datetime.fromtimestamp(mtime).strftime('%Y-%m-%d')
    except:
        pass

    # Final fallback
    return datetime.datetime.now().strftime('%Y-%m-%d')


def markdown_to_html(markdown_text):
    """
    Simple markdown to HTML conversion for code blocks and basic formatting.
    This is a basic implementation - for production, consider using a library.
    """
    if not markdown_text:
        return ""

    # Escape HTML special characters first
    html = markdown_text

    # Convert code blocks (```)
    html = re.sub(
        r'```(\w*)\n(.*?)```',
        r'<pre><code class="language-\1">\2</code></pre>',
        html,
        flags=re.DOTALL
    )

    # Convert inline code (`)
    html = re.sub(r'`([^`]+)`', r'<code>\1</code>', html)

    # Convert paragraphs
    paragraphs = html.split('\n\n')
    html_paragraphs = []
    for para in paragraphs:
        para = para.strip()
        if para.startswith('<pre>'):
            html_paragraphs.append(para)
        elif para:
            # Replace single newlines with <br>
            para = para.replace('\n', '<br>\n')
            html_paragraphs.append(f'<p>{para}</p>')

    html = '\n'.join(html_paragraphs)

    return html


def generate_related_languages_section(current_language, concept_slug, all_languages):
    """Generate HTML section showing this concept in other languages."""
    if not all_languages:
        return ""

    # Filter out current language
    other_languages = [lang for lang in all_languages if lang != current_language]

    if not other_languages:
        return ""

    # Generate language links
    language_links = []
    for lang in other_languages:
        lang_slug = slugify(lang)
        lang_display = lang.replace('_', ' ')
        language_links.append(
            f'<a href="../{lang_slug}/{concept_slug}.html">{lang_display}</a>'
        )

    links_html = ''.join(language_links)

    return f"""
            <section class="related-concepts" style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
                <h2 style="font-size: 20px; margin-bottom: 15px; color: #2c3e50;">See this concept in other languages</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px;">
                    {links_html}
                </div>
                <style>
                    .related-concepts a {{
                        padding: 8px 12px;
                        background: #f5f5f5;
                        border-radius: 4px;
                        text-decoration: none;
                        color: #0066cc;
                        display: inline-block;
                        text-align: center;
                        transition: background 0.2s, transform 0.2s;
                    }}
                    .related-concepts a:hover {{
                        background: #e5e7eb;
                        transform: translateY(-2px);
                    }}
                </style>
            </section>
"""


def generate_page_template(language, concept_key, concept_title, content_html, category, all_languages=None):
    """Generate HTML template for a concept page."""

    # Parse concept key to get readable title
    parts = concept_key.split('_')
    if len(parts) > 1:
        subconcept = ' '.join(parts[1:]).replace('_', ' ')
        full_title = f"{subconcept} in {language}"
    else:
        full_title = f"{concept_title} in {language}"

    # Generate description
    description = f"Learn how to {subconcept.lower()} in {language}. See code examples and detailed explanations." if len(parts) > 1 else f"Programming concept {concept_title} in {language} with examples."

    # Clean language name for display
    language_display = language.replace('_', ' ')

    # URL paths
    concept_slug = slugify(concept_key)
    language_slug = slugify(language)
    page_url = f"{BASE_URL}/concepts/{language_slug}/{concept_slug}.html"

    # Get last modified date from git or filesystem
    safe_lang_name = get_safename(language)
    json_file = os.path.join(CONTENT_DIR, f"{safe_lang_name}.json")
    date_modified = get_last_modified_date(json_file)

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Primary Meta Tags -->
    <title>{full_title} - Prog Lang Compare</title>
    <meta name="title" content="{full_title} - Prog Lang Compare">
    <meta name="description" content="{description}">
    <meta name="keywords" content="{language}, {concept_title}, programming, code examples, syntax, {category}">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="{page_url}">
    <meta property="og:title" content="{full_title}">
    <meta property="og:description" content="{description}">
    <meta property="og:image" content="{BASE_URL}/social-preview.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{page_url}">
    <meta property="twitter:title" content="{full_title}">
    <meta property="twitter:description" content="{description}">
    <meta property="twitter:image" content="{BASE_URL}/social-preview.png">

    <!-- Canonical URL -->
    <link rel="canonical" href="{page_url}">

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="../../favicon.svg">

    <!-- Inline Critical CSS -->
    <style>
        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}

        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9f9f9;
            padding: 20px;
        }}

        .container {{
            max-width: 900px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }}

        nav.breadcrumb {{
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
            font-size: 14px;
        }}

        nav.breadcrumb a {{
            color: #0066cc;
            text-decoration: none;
        }}

        nav.breadcrumb a:hover {{
            text-decoration: underline;
        }}

        nav.breadcrumb span {{
            color: #666;
            margin: 0 5px;
        }}

        h1 {{
            color: #2c3e50;
            margin-bottom: 10px;
            font-size: 28px;
        }}

        .meta {{
            color: #666;
            font-size: 14px;
            margin-bottom: 30px;
            padding: 10px;
            background-color: #f5f5f5;
            border-left: 4px solid #0066cc;
        }}

        .content {{
            margin-top: 20px;
        }}

        .content p {{
            margin-bottom: 15px;
        }}

        .content pre {{
            background-color: #f4f4f4;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
            margin: 15px 0;
            border: 1px solid #ddd;
        }}

        .content code {{
            background-color: #f4f4f4;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', Courier, monospace;
            font-size: 14px;
        }}

        .content pre code {{
            background-color: transparent;
            padding: 0;
        }}

        .back-link {{
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #eee;
        }}

        .back-link a {{
            color: #0066cc;
            text-decoration: none;
            font-weight: 500;
        }}

        .back-link a:hover {{
            text-decoration: underline;
        }}

        footer {{
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            text-align: center;
            color: #666;
            font-size: 14px;
        }}
    </style>

    <!-- Structured Data -->
    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "{full_title}",
        "description": "{description}",
        "keywords": "{language}, {concept_title}, programming",
        "url": "{page_url}",
        "datePublished": "2023-06-09",
        "dateModified": "{date_modified}",
        "author": {{
            "@type": "Organization",
            "name": "Prog Lang Compare"
        }},
        "publisher": {{
            "@type": "Organization",
            "name": "Prog Lang Compare",
            "url": "{BASE_URL}"
        }},
        "mainEntityOfPage": {{
            "@type": "WebPage",
            "@id": "{page_url}"
        }}
    }}
    </script>
</head>
<body>
    <div class="container">
        <!-- Breadcrumb Navigation -->
        <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="../../index.html">Home</a>
            <span>›</span>
            <a href="../{language_slug}.html">{language_display}</a>
            <span>›</span>
            <span>{concept_title}</span>
        </nav>

        <!-- Main Content -->
        <main>
            <h1>{full_title}</h1>

            <div class="meta">
                <strong>Category:</strong> {category} |
                <strong>Language:</strong> {language_display}
            </div>

            <article class="content">
                {content_html}
            </article>

            {generate_related_languages_section(language, concept_slug, all_languages) if all_languages else ""}

            <div class="back-link">
                <a href="../../index.html">← Back to Full Comparison Table</a>
            </div>
        </main>

        <footer>
            <p>Content generated using AI | <a href="https://github.com/srix/prog-lang-compare" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
        </footer>
    </div>
</body>
</html>"""

    return html


def get_category_for_concept(concept_key, concepts_data):
    """Find which category a concept belongs to."""
    # Remove the 'title' key if it exists
    concepts = {k: v for k, v in concepts_data.items() if k != 'title'}

    for category, subconcepts in concepts.items():
        if subconcepts and isinstance(subconcepts, dict):
            for subconcept_key in subconcepts.keys():
                # Create the composite key
                composite_key = f"{category}_{subconcept_key.replace(' ', '_').replace('?', '_').replace('/', '_')}"
                if composite_key == concept_key or subconcept_key.replace(' ', '_') in concept_key:
                    return category

    # Default to extracting category from concept_key
    return concept_key.split('_')[0] if '_' in concept_key else 'General'


def generate_all_pages():
    """Generate all static HTML pages."""

    # Load configurations
    print("Loading configurations...")
    languages_data = load_from_yaml(PROG_LANGS_YAML)
    concepts_data = load_from_yaml(PROG_CONCEPTS_YAML)

    languages = languages_data.get('Programming Languages', [])

    print(f"Found {len(languages)} languages")

    total_pages = 0

    # Process each language
    for language in languages:
        safe_lang_name = get_safename(language)
        json_file = os.path.join(CONTENT_DIR, f"{safe_lang_name}.json")

        if not os.path.exists(json_file):
            print(f"Warning: JSON file not found for {language}: {json_file}")
            continue

        print(f"\nProcessing {language}...")

        # Load language content
        with open(json_file, 'r', encoding='utf-8') as f:
            content = json.load(f)

        # Create language directory
        language_slug = slugify(language)
        lang_dir = os.path.join(CONCEPTS_OUTPUT_DIR, language_slug)
        os.makedirs(lang_dir, exist_ok=True)

        # Generate page for each concept
        for concept_key, markdown_content in content.items():
            concept_slug = slugify(concept_key)

            # Get category
            category = get_category_for_concept(concept_key, concepts_data)

            # Convert markdown to HTML
            content_html = markdown_to_html(markdown_content)

            # Generate HTML page
            html = generate_page_template(
                language=language,
                concept_key=concept_key,
                concept_title=concept_key.replace('_', ' '),
                content_html=content_html,
                category=category,
                all_languages=languages
            )

            # Save page
            output_file = os.path.join(lang_dir, f"{concept_slug}.html")
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(html)

            total_pages += 1

        print(f"  Generated {len(content)} pages for {language}")

    print(f"\n✓ Successfully generated {total_pages} static HTML pages!")
    print(f"  Output directory: {CONCEPTS_OUTPUT_DIR}")

    return total_pages


if __name__ == '__main__':
    generate_all_pages()
