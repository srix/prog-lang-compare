To check if a value is null in Lua, you can use the `nil` keyword. The `nil` value represents the absence of a value and can be used to test if a variable has been initialized or not. Here's an example:

```
local myVariable = nil
if myVariable == nil then
  print("myVariable is nil")
end
```

To check if a value is true or false in Lua, you can use the boolean operators `and` and `or`. Here are some examples:

```
local myBool = true
if myBool == true then
  print("myBool is true")
end

local anotherBool = false
if not anotherBool then
  print("anotherBool is false")
end
```

In the second example, we use the `not` operator to check if the value of `anotherBool` is false.