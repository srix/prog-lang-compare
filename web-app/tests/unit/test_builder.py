import sys
import os
import unittest

# Add the build directory to sys.path so we can import from it
# Current file is in web-app/tests/unit
# Build directory is web-app/build
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'build')))

from generate_static_pages import slugify as static_slugify
from generate_language_landing import slugify as landing_slugify

class TestBuilderSlugify(unittest.TestCase):
    def test_static_pages_slugify(self):
        """Test slugify function in generate_static_pages.py"""
        # Test 1: Underscores should be replaced by hyphens (The Fix)
        self.assertEqual(static_slugify("array_count"), "array-count")
        
        # Test 2: Standard text
        self.assertEqual(static_slugify("Array Count"), "array-count")
        
        # Test 3: Special characters
        self.assertEqual(static_slugify("C++"), "c")
        self.assertEqual(static_slugify("C#"), "c") 
        # Note: Current implementation removes special chars. 
        # Verify this is expected behavior for other special chars:
        self.assertEqual(static_slugify("Type (String)"), "type-string")

        # Test 4: Mixed separators
        self.assertEqual(static_slugify("Mixed_Case-Input"), "mixed-case-input")

    def test_landing_pages_slugify(self):
        """Test slugify function in generate_language_landing.py"""
        # This function was already using hyphens, but let's verify it matches
        self.assertEqual(landing_slugify("array_count"), "array-count")
        self.assertEqual(landing_slugify("Swift"), "swift")
        self.assertEqual(landing_slugify("Objective-C"), "objective-c")

    def test_consistency(self):
        """Ensure both builders produce the same slug for key inputs"""
        inputs = [
            "array_count",
            "Array Count",
            "String: Split",
            "file_read"
        ]
        
        for text in inputs:
            self.assertEqual(
                static_slugify(text), 
                landing_slugify(text), 
                f"Slug generation inconsistent for '{text}'"
            )

if __name__ == '__main__':
    unittest.main()
