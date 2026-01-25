# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This project is divided into two distinct components:

1.  **Concept Builder** (`concept-builder/`): Python-based AI content generation engine.
2.  **Web App** (`web-app/`): JavaScript-only Static Site Generator (SSG) and Frontend.

## 1. Concept Builder
**Location**: `concept-builder/`
Validates configurations and uses LLMs (OpenAI) to generate raw content (JSON/Markdown).

### Commands
-   **Install Dependencies**: `pip install -r concept-builder/requirements.txt`
-   **Run Content Generation**: `cd concept-builder/src && python3 main.py`

## 2. Web App
**Location**: `web-app/`
Consumes generated content to build the static website. **Strict JavaScript-only stack.**

### Commands
-   **Install Dependencies**: `cd web-app && npm install`
-   **Full Build**: `./build.sh` (Cleans public/, copies assets, and runs SSG scripts)
-   **JS Build Scripts**:
    - `node web-app/build/generate_language_landing.js`
    - `node web-app/build/generate_static_pages.js`
    - `node web-app/build/generate_sitemap.js`
-   **Run Tests**:
    - **Unit/Logic Tests** (Jest): `npm test`
    - **E2E/Visual Tests** (Playwright): `npm run test:e2e`
-   **Preview**: `cd web-app/public && python3 -m http.server 8080`

### Architecture & Standards
-   **No Python in Web App**: All SSG logic and tests MUST be in JavaScript (Node.js/NPM).
-   **SSG-SPA Bridge**: The SSG generates static pages (`concepts-ssg/`) while the SPA fetches data from `concepts-spa/`.
-   **Consistency Rule**: Logic for sanitizing names (`getSafeName`) and generating URLs (`slugify`) MUST be identical in `web-app/build/helper.js` and `web-app/src/js/script.js`.
-   **Public Directory**: Always treat `web-app/public` as volatile. It is wiped and rebuilt by `./build.sh`.

### Coding Standards
-   **Naming**: Use PascalCase for language names in data, but sanitized snake_case/kebab-case for filenames/slugs via `getSafeName` and `slugify`.
-   **Scripts**: Prefer modular JS build scripts. Use `fs`, `path`, and `child_process` for filesystem tasks.
-   **Mobile-First**: All frontend changes MUST be mobile-friendly. Use responsive media queries and ensure no horizontal overflow.
-   **Testing**: All new logic MUST be accompanied by Jest unit tests. Visual changes MUST be verified with Playwright, including mobile viewports.

## Deployment
The `web-app/public` directory is the final artifact for production deployment.
