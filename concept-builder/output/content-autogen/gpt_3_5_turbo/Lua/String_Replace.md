In Lua, you can replace a substring within a string using the `string.gsub()` function. 

The syntax of the function is as follows:

`string.gsub(mainString, pattern, replacementString, [maxReplacements])`

- `mainString` is the original string that you want to modify
- `pattern` is the substring that you want to replace
- `replacementString` is the new substring that will replace the pattern
- `maxReplacements` (optional) is the maximum number of replacements you want to make. If not specified, all occurrences of the pattern will be replaced.

Here's an example:

```lua
local myString = "The quick brown fox jumps over the lazy dog"
local newString = string.gsub(myString, "fox", "kangaroo")
print(newString) -- The quick brown kangaroo jumps over the lazy dog
```

In this example, the `string.gsub()` function is used to replace "fox" with "kangaroo" in `myString`. The resulting string, "The quick brown kangaroo jumps over the lazy dog", is stored in `newString`. 

You can also use regular expressions to match more complex patterns. Here's an example:

```lua
local date = "Today is 01/01/2022"
local newDate = string.gsub(date, "%d+/%d+/%d+", "tomorrow")
print(newDate) -- Today is tomorrow
```

In this example, the `%d+/%d+/%d+` pattern matches a date in the format "dd/mm/yyyy" (where `dd`, `mm`, and `yyyy` are numbers), and replaces it with the string "tomorrow". The resulting string, "Today is tomorrow", is stored in `newDate`.