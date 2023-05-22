Sure, here's an explanation of how to remove leading and trailing whitespaces from a string in Lua:

In Lua, you can use the `string.gsub()` function along with a pattern to replace any leading or trailing whitespace characters with an empty string. Here's an example:

```lua
str = "   Hello, world!  "
cleanStr = string.gsub(str, "^%s*(.-)%s*$", "%1")
print(cleanStr) -- Output: "Hello, world!"
```

This code creates a string `str` that has leading and trailing whitespace characters. It then uses `string.gsub()` with a pattern that matches any leading or trailing whitespace characters (denoted by `%s*`) and captures the rest of the string (denoted by `(.-)`). The `%1` in the replacement part of the function represents the captured string, effectively cutting off any leading or trailing whitespace characters.

The output of `cleanStr` shows that the code successfully removed the leading and trailing whitespace characters from the original string.