# AGENTS.md

## Cursor Cloud specific instructions

This is a monorepo with two components. See `CLAUDE.md` for full command reference.

### Services

| Component | Purpose | Dev Command |
|---|---|---|
| **Web App** (`web-app/`) | JS static site generator + frontend | `python3 web-app/dev_serve.py` (port 8080) |
| **Concept Builder** (`concept-builder/`) | Python AI content generation | `cd concept-builder/src && python3 main.py` (requires `OPENAI_API_KEY`) |

### Non-obvious notes

- The `web-app/public/` directory is volatile — it gets wiped by `./build.sh`. Always rebuild before serving or running E2E tests.
- The full site build (`./build.sh`) takes ~17s and generates ~2,400 HTML pages. It must complete before starting the dev server or running Playwright E2E tests.
- Playwright E2E tests auto-start their own HTTP server on port 8080 via the `webServer` config in `playwright.config.js`. Kill any existing server on that port before running `npm run test:e2e`.
- Python packages install to `~/.local/bin` which may not be on `PATH`. Use `python3 -m pytest` instead of bare `pytest` for reliability.
- Content JSON files are pre-generated and committed. The OpenAI API key is only needed to regenerate content from scratch, not for building or testing the web app.
- Playwright requires Chromium: install with `cd web-app && npx playwright install --with-deps chromium`.

### Quick verification

```bash
# Run all checks
cd /workspace/web-app && npm test              # Jest unit tests (19 tests)
cd /workspace/concept-builder && python3 -m pytest tests/ -v  # pytest (17 tests)
cd /workspace && ./build.sh                    # Full site build
cd /workspace/web-app && npx playwright test   # E2E tests (27 tests)
```
