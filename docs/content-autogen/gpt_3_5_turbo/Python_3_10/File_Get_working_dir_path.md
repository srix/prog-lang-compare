In Python 3.10, the `Path` object is more commonly used to represent paths and files. To get the current working directory path, you can use the `Path.cwd()` method which returns a `Path` object representing the current working directory.

Here's an example:

```python
from pathlib import Path

# Get the current working directory path
cwd_path = Path.cwd()

# Print the path as a string
print(f"The current working directory is: {cwd_path}")
```

This will output something like:

```
The current working directory is: /Users/username/Documents/my-project
```

You can also use the `os` module to get the current working directory path as a string by calling `os.getcwd()`. Here's an example:

```python
import os

# Get the current working directory path as a string
cwd_path_str = os.getcwd()

# Print the path as a string
print(f"The current working directory is: {cwd_path_str}")
```

This will output something like:

```
The current working directory is: /Users/username/Documents/my-project
```