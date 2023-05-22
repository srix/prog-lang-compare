To get the square root of a number in Lua, you can use the math.sqrt() function. Here's an example:

```lua
-- Getting the square root of a number
local num = 25
local sqrt_num = math.sqrt(num)

print(sqrt_num) -- Output: 5
```

In this example, we assign the value of 25 to the variable `num`. Then we use the `math.sqrt()` function to get its square root, which is assigned to the variable `sqrt_num`. Finally, we print the value of `sqrt_num`, which should be 5.

Here's another example with user input:

```lua
-- Getting the square root of a number entered by the user
print("Enter a number: ")
local num = tonumber(io.read()) -- Convert user input to a number

local sqrt_num = math.sqrt(num)

print("The square root of " .. num .. " is " .. sqrt_num)
```

In this example, we prompt the user to enter a number, which is then converted to a number using `tonumber()`. Then, we compute the square root using `math.sqrt()`. Finally, we print the result using the concatenation operator `..` to combine strings and values.