In Lua, you can convert a string to an integer using the tonumber() function. Here is an example:

```lua
local str = "123"  -- this is a string
local num = tonumber(str) -- convert the string to an integer
print(num)  -- output: 123
```

If you try to convert a non-numeric string to an integer, the tonumber() function will return nil. For example:

```lua
local str = "hello"  -- this is not a number
local num = tonumber(str) -- convert the string to an integer
print(num)  -- output: nil
```

You can also convert a string with a hexadecimal number to an integer by providing the second argument to the tonumber() function as the base of the number. For example:

```lua
local str = "FF" -- this is a hexadecimal string
local num = tonumber(str, 16) -- convert the hexadecimal string to an integer
print(num)  -- output: 255
```