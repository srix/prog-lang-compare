In Lua, to get the maximum or minimum of two numbers, we can use the functions `math.max()` and `math.min()` respectively.

The syntax for using `math.max()` is: `math.max(number1, number2)` and it will return the maximum value between number1 and number2.

Example:

```
local num1 = 10
local num2 = 20
local max_num = math.max(num1, num2)

print("The maximum between " .. num1 .. " and " .. num2 .. " is " .. max_num)
```

Output:
```
The maximum between 10 and 20 is 20
```

The syntax for using `math.min()` is: `math.min(number1, number2)` and it will return the minimum value between number1 and number2.

Example:

```
local num1 = 10
local num2 = 20
local min_num = math.min(num1, num2)

print("The minimum between " .. num1 .. " and " .. num2 .. " is " .. min_num)
```

Output:
```
The minimum between 10 and 20 is 10
```