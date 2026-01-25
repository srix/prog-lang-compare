In Lua, float numbers, also known as floating-point numbers, are used to represent decimal numbers. They have a fractional component and can be positive or negative. To use float numbers in Lua, you simply write the number with a decimal point.

Here are a few examples:

1. Declare a float number variable:

```
local num = 3.1415
```

2. Perform arithmetic operations with float numbers:

```
local x = 2.5
local y = 1.2
local sum = x + y
local diff = x - y
local product = x * y
local quotient = x / y
```

3. Use float numbers in loops:

```
for i = 0, 1, 0.1 do
   print(i)
end
```

This will print all the float numbers from 0 to 1 in increments of 0.1.

4. Use float numbers in conditionals:

```
if x > 1.0 then
   print("x is greater than 1.0")
else
   print("x is less than or equal to 1.0")
end
```

In this example, we are using a float number to compare with the integer 1.

It is important to note that float numbers in Lua may not always be exact due to the way they are internally represented in the computer's memory. Therefore, there may be some rounding errors in calculations involving float numbers.