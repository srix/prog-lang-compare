# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This project has been refactored into two distinct components:

1.  **Concept Builder** (`concept-builder/`): AI content generation engine.
2.  **Web App** (`web-app/`): Static Site Generator (SSG) and Frontend.

## 1. Concept Builder
**Location**: `concept-builder/`
Validates configurations and uses LLMs (OpenAI) to generate raw content (JSON/Markdown).

### Commands
-   **Install Dependencies**:
    ```bash
    pip install -r concept-builder/requirements.txt
    ```
-   **Run Content Generation**:
    ```bash
    cd concept-builder/src
    python3 main.py
    ```
    *Reads config from `../config/` and outputs to `../output/`*

### Structure
-   `src/`: Python source (`main.py`, `openaihelper.py`)
-   `config/`: YAML configurations (`prog_langs.yaml`, `prog_lang_concepts.yaml`)
-   `output/`: Generated content (`content-autogen/`)

## 2. Web App
**Location**: `web-app/`
Consumes generated content to build the static website.

### Commands
-   **Install Dependencies**:
    ```bash
    cd web-app
    npm install
    pip install -r requirements.txt
    ```
-   **Run Tests** (Unit + E2E):
    ```bash
    cd web-app
    npm test
    ```
    *Runs Python unit tests (via Jest wrapper or manual) and JS/DOM tests.*
    *To run Python unit tests manually: `export PYTHONPATH=$PYTHONPATH:$(pwd)/web-app/build && python3 web-app/tests/unit/test_builder.py`*

-   **Build Site**:
    ```bash
    cd web-app/build
    python3 generate_language_landing.py
    python3 generate_static_pages.py
    python3 generate_sitemap.py
    ```
    *Outputs to `../public/`*

-   **Preview**:
    ```bash
    cd web-app/public
    python3 -m http.server 8000
    ```

### Structure
-   `build/`: Python SSG scripts (`generate_static_pages.py`, etc.)
-   `src/`: Frontend source (`index.html`, `js/`, `css/`)
-   `public/`: Final static site output (HTML/assets)
-   `tests/`:
    -   `unit/`: Python tests for SSG logic
    -   `e2e/`: Jest/JSDOM tests for Frontend interactions

## Deployment
The `web-app/public` directory is the artifact to be deployed (e.g., to Netlify).
