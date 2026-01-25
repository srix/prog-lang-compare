In Lua, we can use the `package.path` variable to get the current directory path and then append the sibling directory name to get the path of the sister directory.

Here is an example:

```lua
-- Get the current directory path
local currentDir = package.path:match("(.-)[^%.]+$")

-- Append the sibling directory name to get the sister directory path
local sisterDir = currentDir .. "../sisterDir/"

-- Print the sister directory path
print(sisterDir)
```

In the above example, we are using the `string.match()` function to extract the current directory path by matching everything up to the last `/` character. We then append `../sisterDir/` to get the path of the sister directory.

This approach can be helpful when we have a Lua script file inside a directory and we want to access another directory that is at the same level as the current directory.