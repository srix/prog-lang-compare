#!/usr/bin/env python3
"""
Verify that all URLs in sitemap.xml correspond to existing files.
"""

import os
import sys
import xml.etree.ElementTree as ET

def verify_sitemap(sitemap_path, docs_dir):
    """Parse sitemap and verify all URLs have corresponding files."""

    # Parse sitemap XML
    tree = ET.parse(sitemap_path)
    root = tree.getroot()

    # XML namespace for sitemap
    ns = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}

    missing_files = []
    checked_urls = []

    # Extract all URLs
    for url_elem in root.findall('ns:url/ns:loc', ns):
        url = url_elem.text

        # Remove domain to get path
        path = url.replace('https://prog-lang-compare.netlify.app', '')

        # Convert path to file path
        if path == '/' or path == '':
            file_path = os.path.join(docs_dir, 'index.html')
        elif path.endswith('/'):
            file_path = os.path.join(docs_dir, path[1:] + 'index.html')
        else:
            file_path = os.path.join(docs_dir, path[1:])

        checked_urls.append((url, file_path))

        # Check if file exists
        if not os.path.exists(file_path):
            missing_files.append((url, file_path))

    return checked_urls, missing_files

if __name__ == '__main__':
    # Point to public directory which is one level up from build
    sitemap_path = os.path.join(os.path.dirname(__file__), '..', 'public', 'sitemap.xml')
    docs_dir = os.path.join(os.path.dirname(__file__), '..', 'public')

    print(f"Verifying sitemap URLs...")
    print(f"Sitemap: {sitemap_path}")
    print(f"Base directory: {docs_dir}\n")

    checked, missing = verify_sitemap(sitemap_path, docs_dir)

    print(f"✓ Total URLs checked: {len(checked)}")

    if missing:
        print(f"✗ Missing files (404s): {len(missing)}\n")
        print("Missing files:")
        for url, file_path in missing[:50]:  # Show first 50
            print(f"  URL: {url}")
            print(f"  Expected file: {file_path}\n")

        if len(missing) > 50:
            print(f"  ... and {len(missing) - 50} more")

        sys.exit(1)
    else:
        print("✓ All URLs have corresponding files!")
        print("✓ No 404 errors found!\n")
        sys.exit(0)
