In Lua, you can use the `string.match()` function along with a regular expression to extract the parent directory path from a given file path or directory path. Here's an example:

```lua
local path = "/home/user/documents/file.txt"
local parent_dir = string.match(path, "(.+)/[^/]+") or "/"

print(parent_dir) -- output: /home/user/documents
```

In the above example, the regular expression `(.+)/[^/]+` matches any non-empty substring that ends with a slash (`/`) followed by one or more non-slash characters. The parentheses around the `.+` capture the matched substring into a capture group, which we can then retrieve using the `string.match()` function.

If the `string.match()` function returns `nil` (i.e., if the regular expression does not match the input string), we set the `parent_dir` variable to the root directory path (`/`) as a fallback.

Another example:

```lua
local path = "C:\\Users\\user\\Documents\\file.txt"
local parent_dir = string.match(path, "(.+)\\[^\\]+") or "C:\\"

print(parent_dir) -- output: C:\Users\user\Documents
```

In the above example, we use the backslash (`\`) as the path separator instead of the forward slash (`/`). We need to escape the backslashes with another backslash in the regular expression, so the matching pattern becomes `(.+)\\[^\\]+`. We also set the fallback value to the root directory path for Windows systems (`C:\`).