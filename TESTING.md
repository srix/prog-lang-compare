# Testing Guide

This document describes the testing infrastructure for the Programming Language Comparison project.

## Overview

The project has two test suites:

1. **Python Tests** - Tests for builder scripts using pytest
2. **JavaScript Tests** - Tests for frontend code using Jest

## JavaScript Tests

### Setup

Install test dependencies:

```bash
npm install
```

This installs:
- `jest` - Testing framework
- `@jest/globals` - Jest global functions
- `jest-environment-jsdom` - DOM environment for testing

### Running Tests

**Run all JavaScript tests:**
```bash
npm test
```

**Run with coverage:**
```bash
npm run test:coverage
```

**Run in watch mode (useful during development):**
```bash
npm run test:watch
```

### Test Structure

```
__tests__/
└── script.test.js      # Tests for script.js utility functions
```

### What's Tested

#### `script.test.js`
- `getSafeName()` - JavaScript implementation of safe name conversion
- Language name transformations for all 21+ supported languages
- Special character handling
- Edge cases (empty strings, multiple special chars, etc.)

### Coverage Reports

After running `npm run test:coverage`, view the HTML report:

```bash
open coverage/index.html  # macOS
xdg-open coverage/index.html  # Linux
start coverage/index.html  # Windows
```

## Continuous Integration

### GitHub Actions (Recommended)

Create `.github/workflows/test.yml`:

```yaml
name: Tests

on: [push, pull_request]

jobs:
  python-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      - run: pip install -r requirements.txt
      - run: pytest --cov=builder --cov-report=xml
      - uses: codecov/codecov-action@v3

  javascript-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm test -- --coverage
```

## Writing New Tests

### Python Test Example

```python
import pytest
import os
import sys
# Add src directory to path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))
from helper import get_safename

def test_get_safename():
    """Test safe name conversion"""
    assert get_safename("Python 3.10") == "Python_3_10"
```

### JavaScript Test Example

```javascript
const { describe, expect, test } = require('@jest/globals');

describe('getSafeName', () => {
    test('converts language names correctly', () => {
        expect(getSafeName('Python 3.10')).toBe('Python_3_10');
    });
});
```

## Best Practices

1. **Test Coverage**: Aim for >80% coverage on utility functions
2. **Isolation**: Use temporary directories/mocks for file operations
3. **Descriptive Names**: Test names should describe what they test
4. **Edge Cases**: Test empty inputs, None/null, special characters
5. **Clean Up**: Use pytest fixtures or teardown to clean temporary files

## Debugging Tests

### Python Tests

```bash
# Run with print statements visible
pytest -s

# Drop into debugger on failure
pytest --pdb

# Run last failed tests only
pytest --lf
```

### JavaScript Tests

```bash
# Run with verbose output
npm test -- --verbose

# Run specific test file
npm test -- script.test.js

# Update snapshots (if using snapshot testing)
npm test -- -u
```

## Test Configuration

### pytest.ini

```ini
[pytest]
testpaths = tests
python_files = test_*.py
python_classes = Test*
python_functions = test_*
addopts = -v --tb=short --cov=builder
```

### jest.config.js

```javascript
module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  collectCoverageFrom: ['docs/script.js'],
  verbose: true
};
```

## Troubleshooting

### Common Issues

**ModuleNotFoundError in Python tests:**
```bash
# Make sure you're in the project root
cd /path/to/proglangcompare
cd concept-builder && pytest
```

**Jest cannot find modules:**
```bash
# Clear Jest cache
npm test -- --clearCache
```

**Coverage not showing:**
```bash
# Ensure test files match the pattern
cd concept-builder && pytest tests/test_*.py --cov=src
```

## Future Improvements

- [ ] Add integration tests for builder pipeline
- [ ] Add E2E tests with Playwright/Cypress
- [ ] Add visual regression tests for UI
- [ ] Set up pre-commit hooks to run tests
- [ ] Add performance benchmarks
- [ ] Add mutation testing with pytest-mutpy
