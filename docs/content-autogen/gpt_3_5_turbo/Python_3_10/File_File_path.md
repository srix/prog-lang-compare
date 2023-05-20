In Python 3.10, you can use the `__file__` attribute to get the file path of the current script. 

Here's an example:

```python
import os

# Get the file path of the current script
file_path = os.path.abspath(__file__)

print(file_path)
```

This will output the absolute file path of the current script.

Alternatively, if you want to get the file path of a specific file, you can use the `os.path.abspath()` function with the file name:

```python
import os

# Get the file path of a specific file
file_path = os.path.abspath("example.txt")

print(file_path)
```

This will output the absolute file path of `example.txt` file.