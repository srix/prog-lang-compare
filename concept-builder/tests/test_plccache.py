import pytest
import os
import tempfile
import shutil
import sys

# Add builder directory to path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))

import plccache
import helper


class TestPlccache:
    """Test the plccache module"""

    def setup_method(self):
        """Set up test fixtures before each test"""
        # Reset global cache state
        plccache.cache = {}
        plccache.lang_concepts = {}

        # Create temporary cache directory
        self.temp_cache_dir = tempfile.mkdtemp()
        self.original_cache_path = '.cache'

    def teardown_method(self):
        """Clean up after each test"""
        # Remove temporary cache directory
        if os.path.exists(self.temp_cache_dir):
            shutil.rmtree(self.temp_cache_dir)

        # Reset global state
        plccache.cache = {}
        plccache.lang_concepts = {}

    def test_load_creates_cache(self):
        """Test that load initializes cache correctly"""
        lang_concepts_yaml = {
            'Datatypes': {
                'Primitives': 'Explain primitive types in {lang}'
            }
        }

        # Temporarily change cache directory
        original_get_safename = helper.get_safename
        proglang = "Python 3.10"

        # Mock the cache file path
        cache_file = os.path.join(self.temp_cache_dir, f'{helper.get_safename(proglang)}.yaml')

        # Create cache directory
        os.makedirs(os.path.dirname(cache_file), exist_ok=True)

        # Manually set up cache file for testing
        helper.save_to_yaml(cache_file, {})

        # Load with non-existent cache (should handle gracefully)
        with tempfile.TemporaryDirectory() as tmpdir:
            plccache.load(lang_concepts_yaml, proglang)

        # Verify lang_concepts is set
        assert plccache.lang_concepts == lang_concepts_yaml

    def test_is_cache_exist_with_existing_cache(self):
        """Test cache existence check when cache exists"""
        # Set up cache and lang_concepts
        plccache.lang_concepts = {
            'Datatypes': {
                'Primitives': 'Explain primitive types in {lang}'
            }
        }
        plccache.cache = {
            'Datatypes': {
                'Primitives': 'Explain primitive types in {lang}'
            }
        }

        # Should return True when cache matches
        assert plccache.is_cache_exist('Python', 'Datatypes', 'Primitives') is True

    def test_is_cache_exist_with_different_prompt(self):
        """Test cache existence check when prompt has changed"""
        # Set up cache with old prompt
        plccache.lang_concepts = {
            'Datatypes': {
                'Primitives': 'NEW: Explain primitive types in {lang}'
            }
        }
        plccache.cache = {
            'Datatypes': {
                'Primitives': 'OLD: Explain primitive types in {lang}'
            }
        }

        # Should return False when prompts differ
        assert plccache.is_cache_exist('Python', 'Datatypes', 'Primitives') is False

    def test_is_cache_exist_with_missing_concept(self):
        """Test cache existence check when concept doesn't exist"""
        plccache.lang_concepts = {
            'Datatypes': {
                'Primitives': 'Explain primitive types in {lang}'
            }
        }
        plccache.cache = {}

        # Should return False when cache is empty
        assert plccache.is_cache_exist('Python', 'Datatypes', 'Primitives') is False

    def test_is_cache_exist_with_missing_subconcept(self):
        """Test cache existence check when subconcept doesn't exist"""
        plccache.lang_concepts = {
            'Datatypes': {
                'Primitives': 'Explain primitive types in {lang}',
                'NewSubconcept': 'New prompt'
            }
        }
        plccache.cache = {
            'Datatypes': {
                'Primitives': 'Explain primitive types in {lang}'
            }
        }

        # Should return False for missing subconcept
        assert plccache.is_cache_exist('Python', 'Datatypes', 'NewSubconcept') is False

    def test_update_creates_cache_entry(self):
        """Test that update creates a new cache entry"""
        with tempfile.TemporaryDirectory() as base_tmpdir:
            # Create a nested directory so that ../ works
            tmpdir = os.path.join(base_tmpdir, 'subdir')
            os.makedirs(tmpdir)
            # Change cache directory temporarily
            original_cwd = os.getcwd()
            os.chdir(tmpdir)

            plccache.lang_concepts = {
                'Datatypes': {
                    'Primitives': 'Explain primitive types in {lang}'
                }
            }
            plccache.cache = {}

            proglang = "Python 3.10"
            plccache.update(proglang, 'Datatypes', 'Primitives')

            # Verify cache was updated
            assert 'Datatypes' in plccache.cache
            assert 'Primitives' in plccache.cache['Datatypes']
            assert plccache.cache['Datatypes']['Primitives'] == 'Explain primitive types in {lang}'

            # Verify cache file was created (the code uses ../.cache)
            cache_file = f'../.cache/{helper.get_safename(proglang)}.yaml'
            assert os.path.exists(cache_file)

            # Restore original directory
            os.chdir(original_cwd)

    def test_update_preserves_existing_cache(self):
        """Test that update preserves existing cache entries"""
        with tempfile.TemporaryDirectory() as base_tmpdir:
            # Create a nested directory so that ../ works
            tmpdir = os.path.join(base_tmpdir, 'subdir')
            os.makedirs(tmpdir)
            original_cwd = os.getcwd()
            os.chdir(tmpdir)

            plccache.lang_concepts = {
                'Datatypes': {
                    'Primitives': 'Prompt 1',
                    'Complex': 'Prompt 2'
                }
            }
            plccache.cache = {
                'Datatypes': {
                    'Primitives': 'Prompt 1'
                }
            }

            proglang = "Python 3.10"
            plccache.update(proglang, 'Datatypes', 'Complex')

            # Verify both entries exist
            assert 'Primitives' in plccache.cache['Datatypes']
            assert 'Complex' in plccache.cache['Datatypes']
            assert plccache.cache['Datatypes']['Primitives'] == 'Prompt 1'
            assert plccache.cache['Datatypes']['Complex'] == 'Prompt 2'

            os.chdir(original_cwd)

    def test_update_with_none_cache(self):
        """Test that update handles None cache gracefully"""
        with tempfile.TemporaryDirectory() as base_tmpdir:
            # Create a nested directory so that ../ works
            tmpdir = os.path.join(base_tmpdir, 'subdir')
            os.makedirs(tmpdir)
            original_cwd = os.getcwd()
            os.chdir(tmpdir)

            plccache.lang_concepts = {
                'Datatypes': {
                    'Primitives': 'Explain primitive types in {lang}'
                }
            }
            plccache.cache = None

            proglang = "Python 3.10"
            plccache.update(proglang, 'Datatypes', 'Primitives')

            # Should create a new cache
            assert plccache.cache is not None
            assert 'Datatypes' in plccache.cache

            os.chdir(original_cwd)
