In Lua, we do not have an explicit `else if` statement, but we can achieve the same functionality using the `switch` construct provided by the language. Here's how you can use `switch` as `else if` in Lua:

1. Define a `switch` statement with a variable that will be evaluated for a variety of different values:

```
local myVariable = 5

switch (myVariable) do
  -- Different cases for the variable:
  case 1:
    print("Variable is 1")
    break
  case 2:
    print("Variable is 2")
    break
  case 3:
    print("Variable is 3")
    break
  -- Default case if the variable does not match any of the above cases:
  default:
    print("Variable is not 1, 2, or 3")
end
```

In this example, if `myVariable` has the value of `1`, then the statement `print("Variable is 1")` will be executed. If the variable has the value of `2`, then the statement `print("Variable is 2")` will be executed. If the variable has the value of `3`, then the statement `print("Variable is 3")` will be executed. If the variable does not have any of those values, then the statement `print("Variable is not 1, 2, or 3")` will be executed.

2. You can also use the `switch` statement to evaluate expressions:

```
switch (myVariable % 2) do
  case 0:
    print("Variable is even")
    break
  case 1:
    print("Variable is odd")
    break
end
```

In this example, the `switch` statement is evaluating the expression `myVariable % 2`, which means it will return either `0` or `1`. If the expression returns `0`, then the statement `print("Variable is even")` will be executed. If the expression returns `1`, then the statement `print("Variable is odd")` will be executed.

These are two examples of how to use `switch` as `else if` in Lua. By using the `switch` construct, we can easily evaluate different cases or expressions and execute specific statements based on those evaluations.