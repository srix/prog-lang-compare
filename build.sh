#!/bin/bash
set -e

echo "🔨 Building Programming Language Comparison Site"
echo ""


# echo "Step 0/4: Generating Content (Optional, skipped by default)"
# # python concept-builder/src/main.py

cd "$(dirname "$0")/web-app/build"

echo "Step 1/4: Generating language landing pages..."
python3 generate_language_landing.py

echo ""
echo "Step 2/4: Generating static concept pages..."
python3 generate_static_pages.py

echo ""
echo "Step 3/4: Generating sitemap..."
python3 generate_sitemap.py

echo ""
echo "Step 4/4: Counting generated pages..."
cd ..
PAGE_COUNT=$(find public/concepts -name '*.html' | wc -l)
SITEMAP_SIZE=$(du -h public/sitemap.xml | cut -f1)

echo ""
echo "✅ Build complete!"
echo "   📄 Generated $PAGE_COUNT pages"
echo "   🗺️  Sitemap: docs/sitemap.xml ($SITEMAP_SIZE)"
echo ""
echo "Preview locally:"
echo "   cd docs && python -m http.server 8000"
echo "   Then visit: http://localhost:8000"
