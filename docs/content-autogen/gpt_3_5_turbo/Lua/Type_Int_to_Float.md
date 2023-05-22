In Lua, to convert an integer to a float, you simply need to add a decimal point followed by zero:

```lua
local integer = 5
local float = 5.0
```

In this example, the variable `integer` is an integer with the value of 5, whereas `float` is a floating-point number with the same value.

Another way to convert an integer to a float in Lua is by using the `tonumber` function:

```lua
local integer = 5
local float = tonumber(integer)
```

In the above example, the `tonumber` function converts the integer variable `integer` to a floating-point number and assigns it to the `float` variable. 

It is important to note that in Lua, any arithmetic operation with a float and an integer will automatically convert the integer into a float. For example:

```lua
local x = 10
local y = 2.5

local z = x + y -- z will be a float (12.5)
```
In this example, the variable `x` is an integer and the variable `y` is a float. However, when they are added together, Lua automatically converts `x` to a float, resulting in `z` being a float with the value of 12.5.