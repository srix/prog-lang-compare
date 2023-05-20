In Python 3.10, you can use the `__file__` attribute to get the full path of the current module. Here's an example:

```python
import os

# Get the directory path of the current module
dir_path = os.path.dirname(os.path.abspath(__file__))

# Print the directory path
print(dir_path)
```

In this example, `os.path.abspath(__file__)` gets the full path of the current module, and `os.path.dirname()` gets the directory path of the module. The `os.path.abspath()` function converts the relative path to an absolute path so that `os.path.dirname()` can work correctly.

You can also use the `Path` class from the `pathlib` module to get the directory path. Here's an example:

```python
from pathlib import Path

# Get the directory path of the current module
dir_path = Path(__file__).resolve().parent

# Print the directory path
print(dir_path)
```

In this example, `Path(__file__).resolve()` gets the full path of the current module, and `.parent` gets the parent directory path. The `resolve()` method resolves any symbolic links and converts the relative path to an absolute path.