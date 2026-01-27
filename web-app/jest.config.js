module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  collectCoverageFrom: [
    'docs/script.js',
    '!**node_modules/**',
    '!**/vendor/**'
  ],
  testPathIgnorePatterns: ['/node_modules/', '/tests/e2e-playwright/'],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text', 'lcov'],
  verbose: true
};
