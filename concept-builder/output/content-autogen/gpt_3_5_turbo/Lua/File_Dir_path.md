In Lua, you can get the directory path of a file using the `debug.getinfo()` function. Here's an example code snippet:

```lua
function getDirPath()
  local path = debug.getinfo(1, "S").source:sub(2)
  return path:match("(.*/)")
end

print(getDirPath()) -- prints the directory path of the current file
```

In the above code snippet, `debug.getinfo` function is used to retrieve information about the current function (in this case, the `getDirPath` function). The second argument to the function, `"S"`, specifies that we want to retrieve the source file name. We then use Lua string functions to extract the directory path from the source file name.

The code retrieves the directory path of the current file by extracting the source file name from the information returned by `debug.getinfo()`, and then trimming it to get just the directory path.

Note: This approach may not work as expected in all cases, especially when the Lua script is executed from an external program.