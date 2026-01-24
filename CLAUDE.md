# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a programming language comparison website that generates AI-powered content comparing syntax and concepts across 23+ programming languages. The site is deployed to Netlify at https://prog-lang-compare.netlify.app

**Architecture:**
- **Static Site**: Hosted on Netlify from the `docs/` directory
- **AI Content Generation**: Python builder scripts use OpenAI API to generate language concept explanations
- **Caching System**: Prevents regenerating unchanged content
- **SEO Optimization**: Generates 2,500+ static HTML pages for search engine indexing

## Content Generation Pipeline

```
docs/prog_lang_concepts.yaml + docs/prog_langs.yaml
    ↓
builder/main.py (OpenAI API calls with caching)
    ↓
docs/content-autogen/gpt_3_5_turbo/{language}.json
    ↓
builder/generate_static_pages.py
    ↓
docs/concepts/{language}/{concept}.html (2,500+ pages)
    ↓
builder/generate_sitemap.py
    ↓
docs/sitemap.xml
```

## Key Python Builder Scripts

### builder/main.py
The primary content generator. Reads concept templates from YAML, makes concurrent OpenAI API calls, and generates markdown content for each language-concept pair.

**Important**: Uses `plccache.py` to check `.cache/` before making API calls. Only generates content for new/modified concepts.

**Run**: `python builder/main.py`

### builder/generate_static_pages.py
Converts JSON content to SEO-friendly HTML pages with meta tags, structured data, and breadcrumbs.

**Run**: `python builder/generate_static_pages.py`

### builder/generate_sitemap.py
Generates `sitemap.xml` for all pages using git history for last modified dates.

**Run**: `python builder/generate_sitemap.py`

## Development Workflow

### Quick Start

**One-time Setup:**
```bash
# Python environment
pip install -r requirements.txt

# Configure API keys
cp .env.example .env
# Edit .env with your OpenAI API keys
```

### Build Commands

**Quick build (recommended):**
```bash
./build.sh
```

This runs all build steps in order:
1. Generates language landing pages (21 pages)
2. Generates concept pages (2,500+ pages)
3. Generates sitemap.xml
4. Shows build summary

**Manual build steps:**
```bash
# Step 1: Generate AI content (uses cache, only generates new)
python builder/main.py

# Step 2: Generate language landing pages
python builder/generate_language_landing.py

# Step 3: Generate static HTML concept pages
python builder/generate_static_pages.py

# Step 4: Generate sitemap
python builder/generate_sitemap.py
```

### Preview Locally

```bash
cd docs && python -m http.server 8000
# Visit http://localhost:8000
```

**Linting:**
```bash
npx eslint docs/script.js
```

### Running Tests
```bash
npx jest
```
This runs unit tests for utility functions and JSDOM tests for frontend interactions (copy button, etc.).

### Environment Configuration

The `.env` file contains OpenAI API credentials:
- `OPENAI_API_KEY`
- `OPENAI_ORGANISATION_ID`

**Setup**: Copy `.env.example` to `.env` and add your API keys.

**Security**: Never commit `.env` to git. Use GitHub Secrets for CI/CD.

## Directory Structure

```
docs/                           # Netlify deployment directory
├── index.html                  # Main comparison table (loads dynamically)
├── script.js                   # Frontend JS for interactive table
├── prog_lang_concepts.yaml     # Concept definitions with prompts
├── prog_langs.yaml             # List of supported languages
├── sitemap.xml                 # Auto-generated sitemap
├── robots.txt                  # SEO crawler instructions
├── concepts/                   # Static SEO pages (2,500+ files)
│   ├── {language}/
│   │   └── {concept}.html
└── content-autogen/            # AI-generated content
    └── gpt_3_5_turbo/
        └── {language}.json     # All concepts for one language

builder/                        # Python content generators
├── main.py                     # AI content generator
├── generate_language_landing.py  # NEW: Language index pages
├── generate_static_pages.py   # HTML page generator (updated with internal linking)
├── generate_sitemap.py         # Sitemap generator (updated for landing pages)
├── generate_social_image.py   # NEW: Social preview image generator
├── helper.py                   # YAML loading, safe naming
├── openaihelper.py            # OpenAI API wrapper (upgraded to v1.x)
└── plccache.py                # Cache management

.cache/                         # Tracks generated content to avoid regeneration
logs/                          # Builder execution logs
build.sh                       # NEW: One-command build script
requirements.txt               # NEW: Python dependencies
.env.example                   # NEW: API key template
__tests__/                     # Unit and DOM tests
```

## Data Files

### docs/prog_lang_concepts.yaml
Defines all programming concepts with prompt templates using `{lang}` placeholder.

**Structure:**
```yaml
Datatypes:
  Primitives: "Explain about primitive types in {lang} with examples."
String:
  Create: "Explain how to create a string in {lang} with examples."
  Concatenation: "Explain how to concatenate strings in {lang} with examples."
```

### docs/prog_langs.yaml
Lists all supported programming languages.

**Structure:**
```yaml
Programming Languages:
  - Python 3.10
  - JavaScript - ECMAScript 2021
  - Rust 1.55
  # ... 20+ more languages
```

## Caching System

The caching system (`.cache/` + `plccache.py`) prevents redundant API calls:

1. `plccache.load()` - Loads cache for a language
2. `plccache.is_cache_exist()` - Checks if concept exists in cache
3. `plccache.update()` - Marks concept as generated

**To regenerate all content**: Delete `.cache/` directory before running `builder/main.py`

## Frontend (docs/index.html + script.js)

The main page dynamically loads language JSON files and renders an interactive comparison table. Users can:
- Select which languages to display
- Compare concepts side-by-side
- Click through to detailed static pages

## Deployment

The site auto-deploys from the `docs/` directory on the `main` branch via Netlify. After regenerating content:

```bash
git add docs/
git commit -m "feat: Update language comparison content"
git push origin main
```

## Python Environment

Uses Python 3.11 with virtual environment:
```bash
source .venv-3.11/bin/activate
pip install -r requirements.txt  # If exists
```

Key dependencies: `openai`, `pyyaml`, `tenacity`, `requests`

## Important Notes

- **Content is AI-generated**: All language explanations come from OpenAI API
- **Concurrent generation**: Uses ThreadPoolExecutor for parallel API calls
- **Logging**: Check `logs/` directory for execution logs (timestamped)
- **Safe naming**: `helper.get_safename()` converts language names to filesystem-safe strings
- **No Node build**: Despite `node_modules/`, there's no active Node.js build process
