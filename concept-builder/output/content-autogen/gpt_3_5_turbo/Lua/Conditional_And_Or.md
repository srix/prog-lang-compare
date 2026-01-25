In Lua, the `and` and `or` keywords provide logical operators for combining and applying conditional expressions. Here is how to use and/or in Lua with examples:

1. `and` operator:

The `and` operator returns the first operand if it is `false` or `nil`, otherwise, it returns the second operand. Here is an example:

```lua
local a = nil
local b = "hello"
local c = a and b
print(c) -- nil

local d = false
local e = "world"
local f = d and e
print(f) -- false
```
In the first example, since `a` is `nil`, the `and` operator returns `nil` and assigns it to `c`. In the second example, since `d` is `false`, the `and` operator returns `false` and assigns it to `f`.

2. `or` operator:

The `or` operator returns the first operand if it is not `false` or `nil`, otherwise, it returns the second operand. Here is an example:

```lua
local a = nil
local b = "hello"
local c = a or b
print(c) -- hello

local d = false
local e = "world"
local f = d or e
print(f) -- world
```
In the first example, since `a` is `nil`, the `or` operator returns `b` and assigns it to `c`. In the second example, since `d` is `false`, the `or` operator returns `e` and assigns it to `f`.