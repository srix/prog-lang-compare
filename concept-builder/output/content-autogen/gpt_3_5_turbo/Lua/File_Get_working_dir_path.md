In Lua, the built-in function `os.getcwd()` is used to get the path of the current working directory.

Here is an example:

```lua
-- Get the current working directory
local directory = os.getcwd()

-- Print the directory path
print("The current working directory is: " .. directory)
```

This code will output the path of the current working directory. For example, if the current working directory is `/Users/username/Documents/`, the output will be:

```
The current working directory is: /Users/username/Documents/
```

You can use this path to access files in the current working directory or to change the working directory using the `os.chdir(path)` function.