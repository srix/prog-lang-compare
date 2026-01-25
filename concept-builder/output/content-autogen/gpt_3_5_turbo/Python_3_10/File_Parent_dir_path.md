In Python 3.10, the `pathlib` module provides a convenient way to work with file paths. You can use the `Path.parent` attribute to get the parent directory of a file or directory.

Here is an example of how to get the parent directory of a file:

```python
from pathlib import Path

file_path = Path('/path/to/my/file.txt')
parent_dir_path = file_path.parent
print(parent_dir_path)  # Output: /path/to/my
```

And here's how to get the parent directory of a directory:

```python
from pathlib import Path

dir_path = Path('/path/to/my/folder/')
parent_dir_path = dir_path.parent
print(parent_dir_path)  # Output: /path/to/my
```

Note that the `Path.parent` attribute returns a `Path` object, not a string. If you need the parent directory path as a string, you can use the `str()` function:

```python
parent_dir_str = str(parent_dir_path)
print(parent_dir_str)  # Output: /path/to/my
```