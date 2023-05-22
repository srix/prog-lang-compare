In Lua, a constant is a variable whose value cannot be changed during the program's execution. Creating a constant in Lua is simple - all you need to do is prefix the variable name with the keyword 'const'. Once defined, the constant cannot be reassigned a new value.

Here are some examples to better illustrate how to use constants in Lua:

```
-- defining a constant to hold pi value
const PI = 3.14159 

-- using the constant to calculate circle area
local radius = 5
local area = PI * (radius ^ 2) 
print(area) -- output: 78.53975

-- attempting to reassign a constant value will generate an error
PI = 3.0 -- error: attempt to assign to const variable
```

```
-- defining a constant to hold the maximum number of tries
const MAX_TRIES = 3

-- using the constant to limit a loop
local tries = 0
while tries < MAX_TRIES do
   print("Try #" .. tries)
   tries = tries + 1
end
```

In the above examples, we see how to define a constant and use it within calculations and loops. Also, we see that attempting to modify the constant value after its definition will lead to a runtime error.