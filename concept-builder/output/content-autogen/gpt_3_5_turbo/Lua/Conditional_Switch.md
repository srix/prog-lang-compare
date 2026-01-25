In Lua, the `switch` keyword does not exist. However, we can simulate the functionality of `switch` using a series of `if` statements. Here's an example:

```
-- Suppose we want to print a different message depending on the value of a variable x

x = 2

if x == 1 then
  print("x is one")

elseif x == 2 then
  print("x is two")

elseif x == 3 then
  print("x is three")

else
  print("x is not one, two or three")
end
```

In the example above, we have used multiple `if` statements to simulate the functionality of a `switch` statement. If the value of `x` matches any of the conditions specified in the `if` statements, then the corresponding message will be printed. If none of the conditions match, then the final `else` block will execute.

Note that the order of the conditions matters, as only the first condition that matches the value of `x` will be executed.