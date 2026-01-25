Regex (regular expressions) is a powerful tool that allows pattern matching and manipulation of text. In Lua, we can use the built-in `string.match()` function to apply regex. Here are some examples to demonstrate how to use regex in Lua:

1. Simple pattern matching:

```
local text = "The quick brown fox jumps over the lazy dog"
local pattern = "fox"
local match = string.match(text, pattern)
print(match) -- Output: fox
```

In this example, we use the pattern "fox" to match a substring in the text. The `string.match()` function returns the first occurrence of the pattern in the text.

2. Character classes:

```
local text = "The quick brown fox jumps over the lazy dog"
local pattern = "%a+" -- matches one or more alphabetic characters
for w in string.gmatch(text, pattern) do
    print(w)
end
```

In this example, we use the `%a+` pattern to match one or more alphabetic characters in the text. The `string.gmatch()` function returns an iterator that can be used in a loop to find all occurrences of the pattern.

3. Capturing groups:

```
local text = "My phone number is (123) 456-7890"
local pattern = "%((%d+)%) (%d+)-(%d+)"
local area_code, prefix, suffix = string.match(text, pattern)
print(area_code, prefix, suffix) -- Output: 123 456 7890
```

In this example, we use a pattern with capturing groups to extract the area code, prefix, and suffix of a phone number from the text. The `( )` captures the matched substring and makes it available as a separate value in the `string.match()` function call.

Regex patterns can be complex and require practice to master. Lua documentation describes several predefined patterns that can be used out of the box. Once developers learn the syntax, they have lots of flexibility to manipulate strings.