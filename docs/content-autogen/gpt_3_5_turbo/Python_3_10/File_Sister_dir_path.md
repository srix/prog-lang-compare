In Python 3.10, you can get the path of a sibling directory (i.e., the directory that is at the same level as the current directory) using the `pathlib` module.

Here's an example:

```
from pathlib import Path

# Get the path of the current directory
current_dir = Path.cwd()

# Get the path of the parent directory
parent_dir = current_dir.parent

# Get the path of the sibling directory
sibling_dir = parent_dir / "sibling_directory"

# Print the path of the sibling directory
print(sibling_dir)
```

In this example, `Path.cwd()` returns the path of the current directory, `parent_dir` gets the parent directory of the current directory, and `sibling_dir` gets the path of the sibling directory by appending the name of the sibling directory (in this case "sibling_directory") to the path of the parent directory.

You can replace "sibling_directory" with the name of the actual sibling directory you want to get the path for.