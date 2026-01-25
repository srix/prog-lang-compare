# Programming Language Comparison

A side-by-side comparison of popular programming languages, powered by AI. Compare syntax and concepts across 21+ languages including Python, JavaScript, Rust, Java, Go, and more.

🌐 **Live Site**: [https://prog-lang-compare.netlify.app](https://prog-lang-compare.netlify.app)

## Project Overview

This project is divided into two distinct components:

1.  **Concept Builder** (`concept-builder/`):
    -   Validates configurations.
    -   Uses OpenAI (GPT-3.5 Turbo) to generate detailed concept explanations.
    -   Outputs raw content in JSON/Markdown format.

2.  **Web App** (`web-app/`):
    -   **Frontend**: Vanilla JS, custom CSS, and HTML templates.
    -   **Build System**: Node.js scripts (SSG) that consume the generated content and build 2,500+ SEO-optimized static HTML pages.

## Directory Structure

```
.
├── concept-builder/          # AI Content Generation
│   ├── src/                  # Python scripts (main.py, openaihelper.py)
│   ├── config/               # YAML configurations (languages, concepts)
│   └── output/               # Generated content (JSON/Markdown)
│
├── web-app/                  # Website & SSG
│   ├── build/                # Static Site Generator scripts
│   ├── src/                  # Frontend source (html, js, css)
│   ├── public/               # Final built site (artifact to deploy)
│   └── tests/                # Unit and E2E tests
│
└── README.md
```

## Quick Start

### 1. Concept Builder (Generate Content)

This step communicates with OpenAI to generate explanations. You can skip this if you just want to work on the frontend using existing data.

```bash
# Setup
cd concept-builder
pip install -r requirements.txt
cp ../.env .env  # Ensure you have OPENAI_API_KEY

# Run
cd src
python3 main.py
```

### 2. Web App (Build Site)

This generates the static website from the content in `concept-builder/output`.

```bash
# Setup
npm install

# Build Site
./build.sh


# The site is now in web-app/public/
```

### 3. Preview Locally

```bash
cd web-app/public
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Testing

### Web App Tests

We use **Jest** for frontend testing and a python wrapper for SSG unit tests.

```bash
cd web-app
npm test
```
*   Runs JSDOM tests for `script.js` (copy buttons, table logic).
*   Runs Jest unit tests for `generator content` (checking static page output).

## Architecture

```mermaid
flowchart TD
    config[Config YAMLs] --> builder(Concept Builder)
    openai(OpenAI API) --> builder
    builder --> output[Raw Content (JSON)]

    output --> ssg(Web App SSG)
    templates[HTML/CSS/JS] --> ssg
    ssg --> public[Public Satic Site]

    public --> netlify(Netlify)
```

## Features

-   🔍 **21+ Languages**: Python, JS, Rust, Go, Java, Swift, Kotlin, etc.
-   📚 **108+ Concepts**: Arrays, Loops, Classes, Async/Await, etc.
-   🎨 **Modern UI**: Dark/Light mode toggle, Syntax Highlighting (Highlight.js).
-   ⚡ **Performance**: 2,500+ pre-rendered static pages for SEO.
-   🔗 **Seamless Navigation**: All internal links navigate within the same tab for a smooth browsing experience.
-   ⭐ **GitHub CTA**: Integrated "Star on GitHub" call-to-action.
-   🔎 **Interactive**: DataTables-powered search and filtering.

## Contributing

1.  Fork the repo.
2.  **Add a Language**: Edit `concept-builder/config/prog_langs.yaml`.
3.  **Add a Concept**: Edit `concept-builder/config/prog_lang_concepts.yaml`.
4.  Run `npm test` in `web-app` to ensure stability.
5.  Submit a PR!

## License

Apache License 2.0. See [LICENSE](LICENSE) for details.
