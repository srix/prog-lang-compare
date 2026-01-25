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
# Paths
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
# New Structure:
#   SCRIPT_DIR = web-app/build
#   CONTENT_DIR = ../../concept-builder/output/content-autogen/gpt_3_5_turbo
#   CONCEPTS_OUTPUT_DIR = ../public/concepts
#   CONFIG_DIR = ../../concept-builder/config

CONTENT_DIR = os.path.join(SCRIPT_DIR, '..', '..', 'concept-builder', 'output', 'content-autogen', 'gpt_3_5_turbo')
CONCEPTS_OUTPUT_DIR = os.path.join(SCRIPT_DIR, '..', 'public', 'concepts')
PROG_LANGS_YAML = os.path.join(SCRIPT_DIR, '..', '..', 'concept-builder', 'config', 'prog_langs.yaml')
PROG_CONCEPTS_YAML = os.path.join(SCRIPT_DIR, '..', '..', 'concept-builder', 'config', 'prog_lang_concepts.yaml')
TEMPLATE_DIR = os.path.join(SCRIPT_DIR, '..', 'src')

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

    # Load template
    template_path = os.path.join(TEMPLATE_DIR, 'concept_template.html')
    # If template doesn't exist yet (first run/migration), allow fallback or error. 
    # For now, we assume we will create it next.
    if not os.path.exists(template_path):
        # Fallback simplistic template if missing during dev
        print(f"Warning: Template not found at {template_path}")
        return "<html><body>Template not found</body></html>"

    with open(template_path, 'r', encoding='utf-8') as f:
        template = f.read()

    # Replacements
    html = template.replace('{{full_title}}', full_title)
    html = html.replace('{{description}}', description)
    html = html.replace('{{language}}', language)
    html = html.replace('{{concept_title}}', concept_title)
    html = html.replace('{{category}}', category)
    html = html.replace('{{page_url}}', page_url)
    html = html.replace('{{BASE_URL}}', BASE_URL)
    html = html.replace('{{date_modified}}', date_modified)
    html = html.replace('{{language_slug}}', language_slug)
    html = html.replace('{{language_display}}', language_display)
    html = html.replace('{{content_html}}', content_html)
    
    # Optional sections
    related_section = generate_related_languages_section(language, concept_slug, all_languages) if all_languages else ""
    html = html.replace('{{related_concepts}}', related_section)

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
