Boolean in Lua is a data type that represents logical values where the possible values are `true` and `false`. Boolean values are often used in conditional expressions to determine the flow of execution in a Lua program. Here are examples of how to use boolean in Lua:

1. Assigning boolean values to variables:

```lua
local isRaining = true
local isSunny = false
```

2. Using boolean operators in conditional expressions:

```lua
local age = 18
if age >= 18 and age <= 30 then
  print("You are eligible for the job.")
else
  print("Sorry, you are not eligible for the job.")
end
```

3. Using boolean values as function return types:

```lua
local function isEven(number)
  return number % 2 == 0
end

print(isEven(4))  -- Outputs: true
print(isEven(7))  -- Outputs: false
```

4. Using boolean values in table operations:

```lua
local myTable = {
  name = "John",
  age = 25,
}
print(myTable.age ~= nil)  -- Outputs: true
print(myTable.height ~= nil) -- Outputs: false
```

In Lua, all values other than nil and false are considered `true` in boolean expressions. This means that any non-nil and non-false value evaluates to `true`.