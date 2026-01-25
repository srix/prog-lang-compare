#!/bin/bash

echo "🔨 Building Programming Language Comparison Site"
echo ""

# Initialize build
echo "Cleaning public directory..."
rm -rf web-app/public
mkdir -p web-app/public

# Install dependencies (only NPM needed now)
echo "Installing NPM dependencies..."
cd web-app
npm install > /dev/null 2>&1
cd ..

# Copy static assets
echo "Copying static assets..."
cp web-app/src/index.html web-app/public/
cp web-app/src/css/styles.css web-app/public/
cp web-app/src/js/script.js web-app/public/
cp web-app/src/js/theme.js web-app/public/
cp web-app/src/assets/favicon.svg web-app/public/
cp LICENSE web-app/public/

# Copy config files
echo "Copying config files..."
cp concept-builder/config/prog_langs.yaml web-app/public/
cp concept-builder/config/prog_lang_concepts.yaml web-app/public/

# Copy data files for SPA fetch logic
echo "Copying data files..."
mkdir -p web-app/public/concepts-spa

# Flatten the structure: copy all .json files from subdirectories to concepts-spa root
find concept-builder/output/content-autogen/gpt_3_5_turbo -name "*.json" -exec cp {} web-app/public/concepts-spa/ \;

# Run SSG using Node.js scripts
echo "Step 1/3: Generating language landing pages..."
node web-app/build/generate_language_landing.js

echo "Step 2/3: Generating static concept pages..."
node web-app/build/generate_static_pages.js

echo "Step 3/3: Generating sitemap..."
node web-app/build/generate_sitemap.js

# Count files
FILE_COUNT=$(find web-app/public -name "*.html" | wc -l)

echo ""
echo "✅ Build complete!"
echo "   📄 Generated $FILE_COUNT pages"
echo "   🗺️  Sitemap: web-app/public/sitemap.xml"
echo ""
echo "Preview locally:"
echo "   cd web-app/public && python3 -m http.server 8080"
echo "   Then visit: http://localhost:8080"
