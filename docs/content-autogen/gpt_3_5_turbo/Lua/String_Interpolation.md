In Lua, string interpolation can be achieved with the help of the concatenation operator `..` or by using the `string.format()` function. 

Here are some examples:

1. Using concatenation operator:

```
local name = "John"
local greeting = "Hello " .. name .. "!"
print(greeting) -- Output: Hello John!
```

2. Using `string.format()` function:

```
local name = "John"
local age = 30
local message = string.format("My name is %s and I am %d years old.", name, age)
print(message) -- Output: My name is John and I am 30 years old.
```

In the example above, `%s` is a placeholder for a string and `%d` is a placeholder for a decimal number. The values of `name` and `age` are passed as arguments to `string.format()` in the order they appear in the string. 

Both methods work effectively for string interpolation in Lua, but `string.format()` is more useful in situations where you need to format the string with more complex patterns or need to control the precision of the decimal numbers.