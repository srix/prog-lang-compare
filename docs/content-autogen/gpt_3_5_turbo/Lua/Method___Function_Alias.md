In Lua, an alias is a way to give a variable or function a different name, which can be more descriptive or easier to use. An alias is created using the `local` keyword, followed by the desired name, an equal sign (`=`), and the original variable or function.

Here are some examples of how to use alias in Lua:

1. Alias for a long variable name:

```lua
local myLongVariableName = 42
local myVar = myLongVariableName

print(myVar) -- Output: 42
```

2. Alias for a function:

```lua
local function myVeryLongFunctionName(x)
  return x * x
end

local square = myVeryLongFunctionName

print(square(5)) -- Output: 25
```

3. Alias with a table:

```lua
local t = {
  someLongKeyName = "foo"
}

local key = t.someLongKeyName

print(key) -- Output: "foo"
```

In all these examples, the alias provides a more concise or readable way to refer to the original variable or function. However, aliases can also be used to rename a variable or function to something that better describes its purpose, making the code easier to read and understand.