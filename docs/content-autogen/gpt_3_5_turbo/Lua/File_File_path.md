To get the file path in Lua, you can use the `debug` library. The `debug.getinfo()` function can be used to retrieve information about the currently executing function, including the file path. Here's an example:

```lua
-- get the file path of the current script
local info = debug.getinfo(1,'S')
local path = info.source:sub(2)

print(path)
```

The `debug.getinfo()` function takes two arguments: the level of the stack to inspect (in this case, `1` for the current function), and a string specifying what information to retrieve. The `'S'` argument requests the source file name and line number.

The `info` variable will contain a table with information about the current script, including the file path. The `source` field of the table contains the path, but includes a `@` prefix, which can be removed using the `string.sub()` function.

Alternatively, if you simply want to get the file path of the Lua script in which your code is executing, you can use the `arg` global variable, which contains the command line arguments used to launch the script. Here's an example:

```lua
-- get the file path of the current script using arg
local path = arg[0]

print(path)
```

The `arg` variable is an array containing the command line arguments used to launch the Lua script. The first element (`arg[0]`) is the name of the script itself, including the full file path.