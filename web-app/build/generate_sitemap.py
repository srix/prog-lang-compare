#!/usr/bin/env python3
"""
Generate sitemap.xml for all pages in the site.
Includes the main index page and all concept pages.
"""

import os
import glob
from datetime import datetime
from xml.etree.ElementTree import Element, SubElement, ElementTree
import subprocess

# Paths
DOCS_DIR = os.path.join(os.path.dirname(__file__), '..', 'docs')
CONCEPTS_DIR = os.path.join(DOCS_DIR, 'concepts')
SITEMAP_FILE = os.path.join(DOCS_DIR, 'sitemap.xml')

# Base URL
BASE_URL = 'https://prog-lang-compare.netlify.app'


def get_git_last_modified(file_path):
    """Get the last modified date of a file from git history."""
    try:
        result = subprocess.run(
            ['git', 'log', '-1', '--format=%cI', file_path],
            capture_output=True,
            text=True,
            cwd=DOCS_DIR
        )
        if result.returncode == 0 and result.stdout.strip():
            # Parse ISO 8601 date and convert to W3C Datetime format
            date_str = result.stdout.strip()
            # Just return the date part (YYYY-MM-DD)
            return date_str.split('T')[0]
    except Exception as e:
        print(f"Warning: Could not get git date for {file_path}: {e}")

    # Fallback to file modification time
    try:
        mtime = os.path.getmtime(file_path)
        return datetime.fromtimestamp(mtime).strftime('%Y-%m-%d')
    except:
        return datetime.now().strftime('%Y-%m-%d')


def generate_sitemap():
    """Generate the sitemap.xml file."""

    print("Generating sitemap.xml...")

    # Create root element
    urlset = Element('urlset')
    urlset.set('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')

    # Add main index page
    url = SubElement(urlset, 'url')
    loc = SubElement(url, 'loc')
    loc.text = f'{BASE_URL}/'
    lastmod = SubElement(url, 'lastmod')
    lastmod.text = get_git_last_modified(os.path.join(DOCS_DIR, 'index.html'))
    changefreq = SubElement(url, 'changefreq')
    changefreq.text = 'weekly'
    priority = SubElement(url, 'priority')
    priority.text = '1.0'

    print(f"Added main index page")

    # Add all concept pages
    page_count = 0
    if os.path.exists(CONCEPTS_DIR):
        # Find all HTML files in concepts directory
        html_files = glob.glob(os.path.join(CONCEPTS_DIR, '**', '*.html'), recursive=True)

        for html_file in html_files:
            # Get relative path from docs directory
            rel_path = os.path.relpath(html_file, DOCS_DIR)

            # Convert to URL
            url_path = rel_path.replace(os.sep, '/')

            # Determine if this is a language landing page (concepts/{lang}.html)
            # vs a concept page (concepts/{lang}/{concept}.html)
            path_parts = rel_path.split(os.sep)
            is_language_landing = (len(path_parts) == 2 and
                                 path_parts[0] == 'concepts' and
                                 path_parts[1].endswith('.html'))

            # Create URL entry
            url = SubElement(urlset, 'url')
            loc = SubElement(url, 'loc')
            loc.text = f'{BASE_URL}/{url_path}'

            lastmod = SubElement(url, 'lastmod')
            lastmod.text = get_git_last_modified(html_file)

            changefreq = SubElement(url, 'changefreq')
            changefreq.text = 'weekly' if is_language_landing else 'monthly'

            priority = SubElement(url, 'priority')
            priority.text = '0.9' if is_language_landing else '0.8'

            page_count += 1

        print(f"Added {page_count} concept pages")
    else:
        print(f"Warning: Concepts directory not found: {CONCEPTS_DIR}")

    # Write sitemap to file
    tree = ElementTree(urlset)

    # Pretty print the XML
    indent_xml(urlset)

    tree.write(SITEMAP_FILE, encoding='utf-8', xml_declaration=True)

    print(f"\n✓ Successfully generated sitemap.xml!")
    print(f"  Total URLs: {page_count + 1}")
    print(f"  Output file: {SITEMAP_FILE}")

    return page_count + 1


def indent_xml(elem, level=0):
    """Add pretty-printing indentation to XML."""
    i = "\n" + level * "  "
    if len(elem):
        if not elem.text or not elem.text.strip():
            elem.text = i + "  "
        if not elem.tail or not elem.tail.strip():
            elem.tail = i
        for child in elem:
            indent_xml(child, level + 1)
        if not child.tail or not child.tail.strip():
            child.tail = i
    else:
        if level and (not elem.tail or not elem.tail.strip()):
            elem.tail = i


if __name__ == '__main__':
    generate_sitemap()
