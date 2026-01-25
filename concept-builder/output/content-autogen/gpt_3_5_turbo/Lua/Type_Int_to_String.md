Sure! In Lua, you can convert an integer to a string using the `tostring()` function. Here's an example:

```lua
local num = 42
print(type(num)) -- output: "number"

-- Convert number to string
local str = tostring(num)
print(type(str)) -- output: "string"
print(str) -- output: "42"
```

In this example, `num` is an integer with a value of `42`. The `tostring()` function is used to convert `num` to a string, which is then stored in the variable `str`. Finally, we print the type of `str` (which should be `"string"`) and the value of `str` (which should be `"42"`).

Here's another example where we use `tostring()` to convert the result of a mathematical expression to a string:

```lua
local result = 10 + 20
local str = tostring(result)

print("The result is: " .. str) -- output: "The result is: 30"
```

In this example, we perform a simple math operation (`10 + 20`) and store the result in the `result` variable. We then convert `result` to a string using `tostring()` and store the result in the `str` variable. Finally, we print a message that includes the value of `str` (which should be `"30"`, since `10 + 20` equals `30`).

I hope that helps! Let me know if you have any questions.