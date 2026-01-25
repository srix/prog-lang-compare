import pytest
import os
import tempfile
import yaml
import sys

# Add builder directory to path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))

from helper import get_safename, load_from_yaml, save_to_yaml


class TestGetSafename:
    """Test the get_safename function"""

    def test_basic_conversion(self):
        """Test basic character replacements"""
        assert get_safename("Python 3.10") == "Python_3_10"
        assert get_safename("JavaScript - ECMAScript 2021") == "JavaScript___ECMAScript_2021"
        assert get_safename("Rust 1.55") == "Rust_1_55"

    def test_special_characters(self):
        """Test that all special characters are replaced"""
        assert get_safename("test.name") == "test_name"
        assert get_safename("test name") == "test_name"
        assert get_safename("test,name") == "test_name"
        assert get_safename("test-name") == "test_name"
        assert get_safename("test?name") == "test_name"
        assert get_safename("test(name)") == "test_name_"
        assert get_safename("test/name") == "test_name"
        assert get_safename("test\\name") == "test_name"

    def test_empty_string(self):
        """Test empty string returns empty string"""
        assert get_safename("") == ""

    def test_no_special_chars(self):
        """Test string without special characters"""
        assert get_safename("Python") == "Python"
        assert get_safename("Rust") == "Rust"

    def test_real_language_names(self):
        """Test with actual programming language names from the project"""
        assert get_safename("Visual Basic .NET") == "Visual_Basic__NET"
        assert get_safename("Objective-C") == "Objective_C"
        # Special mappings
        assert get_safename("C++") == "cpp"
        assert get_safename("C#") == "csharp"


class TestYamlFunctions:
    """Test YAML loading and saving functions"""

    def test_save_and_load_yaml(self):
        """Test saving and loading YAML files"""
        test_data = {
            'concept1': {
                'subconcept1': 'prompt1',
                'subconcept2': 'prompt2'
            },
            'concept2': {
                'subconcept3': 'prompt3'
            }
        }

        with tempfile.TemporaryDirectory() as tmpdir:
            filepath = os.path.join(tmpdir, 'test.yaml')

            # Save the data
            save_to_yaml(filepath, test_data)

            # Verify file exists
            assert os.path.exists(filepath)

            # Load the data back
            loaded_data = load_from_yaml(filepath)

            # Verify data matches
            assert loaded_data == test_data

    def test_save_yaml_creates_directory(self):
        """Test that save_to_yaml creates parent directories"""
        with tempfile.TemporaryDirectory() as tmpdir:
            filepath = os.path.join(tmpdir, 'nested', 'dirs', 'test.yaml')
            test_data = {'key': 'value'}

            # Save to nested path
            save_to_yaml(filepath, test_data)

            # Verify directory and file were created
            assert os.path.exists(filepath)
            assert os.path.isdir(os.path.dirname(filepath))

            # Verify content
            loaded_data = load_from_yaml(filepath)
            assert loaded_data == test_data

    def test_load_yaml_with_unicode(self):
        """Test loading YAML with unicode characters"""
        test_data = {
            'language': 'Python 🐍',
            'description': 'A programming language'
        }

        with tempfile.TemporaryDirectory() as tmpdir:
            filepath = os.path.join(tmpdir, 'unicode.yaml')
            save_to_yaml(filepath, test_data)
            loaded_data = load_from_yaml(filepath)
            assert loaded_data == test_data

    def test_load_yaml_file_not_found(self):
        """Test loading non-existent YAML file raises exception"""
        with pytest.raises(FileNotFoundError):
            load_from_yaml('/nonexistent/path/file.yaml')
