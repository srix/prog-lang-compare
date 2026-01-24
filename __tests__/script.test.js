/**
 * Tests for script.js utility functions
 *
 * Note: Since script.js relies heavily on jQuery, DataTables, and DOM manipulation,
 * these tests focus on the pure utility functions that can be tested in isolation.
 */

const { describe, expect, test } = require('@jest/globals');

// Mock the getSafeName function from script.js
// In a real implementation, you would import/export this from script.js
function getSafeName(value) {
    const regex = /[&\/\\, +()$~%.'":*?<>{}-]/g;
    let newvalue = value.replace(regex, "_");
    return newvalue;
}

describe('getSafeName', () => {
    test('converts Python version string correctly', () => {
        expect(getSafeName('Python 3.10')).toBe('Python_3_10');
    });

    test('converts JavaScript version with dash correctly', () => {
        expect(getSafeName('JavaScript - ECMAScript 2021')).toBe('JavaScript___ECMAScript_2021');
    });

    test('converts Rust version correctly', () => {
        expect(getSafeName('Rust 1.55')).toBe('Rust_1_55');
    });

    test('handles special characters', () => {
        expect(getSafeName('test.name')).toBe('test_name');
        expect(getSafeName('test name')).toBe('test_name');
        expect(getSafeName('test,name')).toBe('test_name');
        expect(getSafeName('test-name')).toBe('test_name');
        expect(getSafeName('test?name')).toBe('test_name');
        expect(getSafeName('test(name)')).toBe('test_name_');
        expect(getSafeName('test/name')).toBe('test_name');
        expect(getSafeName('test\\name')).toBe('test_name');
    });

    test('handles Visual Basic .NET correctly', () => {
        expect(getSafeName('Visual Basic .NET')).toBe('Visual_Basic__NET');
    });

    test('handles Objective-C correctly', () => {
        expect(getSafeName('Objective-C')).toBe('Objective_C');
    });

    test('handles C++ correctly', () => {
        expect(getSafeName('C++')).toBe('C__');
    });

    test('handles empty string', () => {
        expect(getSafeName('')).toBe('');
    });

    test('handles string without special characters', () => {
        expect(getSafeName('Python')).toBe('Python');
        expect(getSafeName('Rust')).toBe('Rust');
    });

    test('handles multiple consecutive special characters', () => {
        expect(getSafeName('test...name')).toBe('test___name');
        expect(getSafeName('test   name')).toBe('test___name');
    });

    test('handles all special characters in regex', () => {
        const allSpecialChars = '&/\\, +()$~%.\'":*?<>{}-';
        const result = getSafeName(allSpecialChars);
        // All should be replaced with underscores
        // All should be replaced with underscores
        expect(result).toBe('______________________');
    });
});

describe('Language name transformations', () => {
    test('all real programming languages from project', () => {
        const languageTests = [
            { input: 'Dart', expected: 'Dart' },
            { input: 'Go', expected: 'Go' },
            { input: 'Groovy', expected: 'Groovy' },
            { input: 'Haskell', expected: 'Haskell' },
            { input: 'Java 20', expected: 'Java_20' },
            { input: 'JavaScript - ECMAScript 2021', expected: 'JavaScript___ECMAScript_2021' },
            { input: 'Julia', expected: 'Julia' },
            { input: 'Kotlin', expected: 'Kotlin' },
            { input: 'Lua', expected: 'Lua' },
            { input: 'MATLAB', expected: 'MATLAB' },
            { input: 'Objective-C', expected: 'Objective_C' },
            { input: 'PHP', expected: 'PHP' },
            { input: 'Perl', expected: 'Perl' },
            { input: 'Python 3.10', expected: 'Python_3_10' },
            { input: 'R', expected: 'R' },
            { input: 'Ruby', expected: 'Ruby' },
            { input: 'Rust 1.55', expected: 'Rust_1_55' },
            { input: 'Scala', expected: 'Scala' },
            { input: 'Swift', expected: 'Swift' },
            { input: 'TypeScript', expected: 'TypeScript' },
            { input: 'Visual Basic .NET', expected: 'Visual_Basic__NET' }
        ];

        languageTests.forEach(({ input, expected }) => {
            expect(getSafeName(input)).toBe(expected);
        });
    });
});
