In Lua, to remove part of a string, you can use the `string.sub()` function or the `string.gsub()` function.

1. Using `string.sub()`: `string.sub()` returns a substring of the given string. You can specify the start and end indices to remove the desired portion of the string. Here's an example:

```lua
local str = "Hello, World!"
local start_index = 1
local end_index = 5
local result = string.sub(str, start_index, end_index)
print(result) -- Output: "Hello"
```

In the above example, we are removing the first 5 characters from the given string.

2. Using `string.gsub()`: `string.gsub()` allows you to search for a specific pattern in the string and replace it. You can use this function to remove a specific portion of the string by replacing it with an empty string (`""`). Here's an example:

```lua
local str = "Hello, World!"
local pattern = "Hello, "
local result = string.gsub(str, pattern, "")
print(result) -- Output: "World!"
```

In the above example, we are removing the pattern "Hello, " from the given string by replacing it with an empty string. The `string.gsub()` function will replace every instance of the pattern in the string.