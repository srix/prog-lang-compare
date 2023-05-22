In Lua, `if` is a conditional statement used for making decisions based on certain conditions. It allows you to execute a block of code only if a certain condition is met. `if` statements can be combined with `else` and `elseif` statements to provide multiple conditions and outcomes.

The general syntax for `if` statements in Lua is as follows:

```
if(condition)
  then
    --code to execute if condition is true
end
```

Here is an example of using `if` in Lua:

```
local x = 10
if(x > 5) then
  print("x is greater than 5")
end
```

In this example, the condition is `x > 5`. If `x` is greater than 5, then the code block inside the `if` statement will be executed, which in this case is a simple print statement.

You can also use `else` statements to provide an alternative code block to execute if the condition is not true. Here is an example:

```
local x = 2
if(x > 5) then
  print("x is greater than 5")
else
  print("x is less than or equal to 5")
end
```

In this case, since the value of `x` is not greater than 5, the code block inside the `else` statement is executed instead of the one inside the `if` statement.

Lastly, `elseif` statements can be used to provide multiple conditions to check. Here is an example:

```
local x = 3
if(x > 5) then
  print("x is greater than 5")
elseif(x < 5) then
  print("x is less than 5")
else
  print("x is equal to 5")
end
```

In this example, since the value of `x` is less than 5, the code block inside the `elseif` statement is executed. If `x` were equal to 5, then the code block inside the `else` statement would be executed instead.