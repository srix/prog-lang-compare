const fs = require('fs');
const path = require('path');
const { generateLanguageLandingPage } = require('../../build/generate_language_landing');

// Mock filesystem
jest.mock('fs');
jest.mock('path');

describe('Generator Content', () => {
    const mockJoin = (...args) => args.join('/');
    const mockResolve = (...args) => args.join('/');

    beforeAll(() => {
        path.join.mockImplementation(mockJoin);
        path.resolve.mockImplementation(mockResolve);
        path.dirname.mockReturnValue('dirname');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('generateLanguageLandingPage produces correct HTML content', () => {
        // Setup mocks
        fs.existsSync.mockReturnValue(true);
        fs.mkdirSync.mockImplementation(() => { });
        fs.writeFileSync.mockImplementation(() => { });

        const language = "Test_Lang";
        const concepts = ["Concept_One", "Concept_Two"];

        // Execute
        generateLanguageLandingPage(language, concepts);

        // Verify writeFileSync called
        expect(fs.writeFileSync).toHaveBeenCalled();

        // Inspect valid HTML content from the call
        const writtenContent = fs.writeFileSync.mock.calls[0][1];

        // Assertions for critical elements
        expect(writtenContent).toContain('<link rel="stylesheet" href="../styles.css">');
        expect(writtenContent).toContain('<script src="../theme.js"></script>');
        expect(writtenContent).toContain('id="themeToggle"');
        expect(writtenContent).toContain('class="github-cta"');
        expect(writtenContent).toContain('Find this useful? Support us:');
        expect(writtenContent).toContain('Star on GitHub');
    });
});
