const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

/**
 * Loads the yaml file containing content
 * @param {string} yamlFile - Absolute path to yaml file
 * @returns {Object} Parsed content
 */
function loadFromYaml(yamlFile) {
    try {
        const fileContents = fs.readFileSync(yamlFile, 'utf8');
        return yaml.load(fileContents);
    } catch (e) {
        console.error(e);
        return {};
    }
}

/**
 * Converts value to a filesystem-safe name
 * @param {string} value
 * @returns {string}
 */
function getSafeName(value) {
    // Special case mappings for languages with problematic characters
    const specialMappings = {
        'C#': 'csharp',
        'C++': 'cpp',
    };

    // Check if value matches a special case (exact match)
    if (specialMappings[value]) {
        return specialMappings[value];
    }

    // Generic character translation for other cases
    // Replace . , - ? ( ) / \ # + and SPACE with underscore
    return value.replace(/[.,\-?()\/\\#+ ]/g, '_');
}

/**
 * Convert text to URL-friendly slug.
 * Matches Python implementation:
 * 1. Replace underscores with hyphens
 * 2. Remove special characters, keep alphanumeric, hyphen, space
 * 3. Replace spaces with hyphens
 * 4. Lowercase
 * @param {string} text
 * @returns {string}
 */
function slugify(text) {
    let slug = text.replace(/_/g, '-');
    slug = slug.toLowerCase();
    slug = slug.replace(/[^\w\s-]/g, ''); // Remove non-word chars (except space and hyphen)
    slug = slug.replace(/[-\s]+/g, '-'); // Replace spaces and hyphens with single hyphen
    return slug.replace(/^-+|-+$/g, ''); // Strip leading/trailing hyphens
}

module.exports = {
    loadFromYaml,
    getSafeName,
    slugify
};
