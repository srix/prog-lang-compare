To check if a string is a number in Lua, you can use the `tonumber` function, which tries to convert the given string to a number and returns `nil` if the conversion fails.

Here's an example code that demonstrates the usage of `tonumber`:

```lua
local str = "123"
local num = tonumber(str)

if num then
  print("The string is a number:", num)
else
  print("The string is not a number")
end
```

In this example, the `str` variable holds the string "123". The `tonumber` function is called with this string as an argument, and the return value is saved into the `num` variable.

The `if` statement checks if `num` is not `nil` (which means the conversion was successful) and prints a message that the string is a number, along with the converted value. Otherwise, it prints a message that the string is not a number.


Another example is:

```lua
local str = "abc123"
local num = tonumber(str)

if num then
  print("The string is a number:", num)
else
  print("The string is not a number")
end
```

In this example, the `str` variable holds the string "abc123", which is not a valid number. The `tonumber` function will fail to convert it to a number and thus return `nil`. The `if` statement checks if `num` is `nil` and prints a message that the string is not a number.