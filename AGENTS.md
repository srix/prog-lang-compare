# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

A static website comparing 21+ programming languages across 108 concepts. Two components:
- **Concept Builder** (`concept-builder/`): Python + OpenAI — generates content JSON/Markdown. Requires `OPENAI_API_KEY`; optional for web-app dev since pre-generated content exists in `concept-builder/output/`.
- **Web App** (`web-app/`): Node.js SSG + vanilla JS frontend. See `CLAUDE.md` for all build/test/run commands.

### Running the app

1. Build: `./build.sh` (wipes `web-app/public/`, copies assets, runs SSG — generates ~2400 HTML pages)
2. Serve: `python3 web-app/dev_serve.py` (serves on port 8080)

### Testing

- **Jest unit tests**: `cd web-app && npm test` (19 tests, runs in ~1s)
- **Playwright E2E**: `cd web-app && npm run test:e2e` (27 tests against Chromium; auto-starts HTTP server on port 8080 via Playwright config)
- Playwright browsers must be installed first: `cd web-app && npx playwright install --with-deps chromium`

### Gotchas

- `web-app/public/` is volatile — `./build.sh` deletes it entirely before rebuilding. Never store hand-edited files there.
- The Playwright config (`web-app/playwright.config.js`) auto-starts its own `python3 -m http.server 8080 -d public` web server; do not start a separate server on port 8080 before running E2E tests, or use `reuseExistingServer` behavior.
- Node deprecation warnings about `punycode` during Jest runs are harmless and can be ignored.
- Python packages install to `~/.local/bin`; if running `pytest` directly, use `python3 -m pytest`.
