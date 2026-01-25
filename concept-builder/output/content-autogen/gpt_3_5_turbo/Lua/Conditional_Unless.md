In Lua, `unless` is not a keyword. However, you can achieve the same functionality as `unless` by using `if not` conditionals.

The basic syntax of `if not` statement is as follows:

```
if not(condition) then
   -- code to execute if condition is false
end
```

Here's an example of how to use `if not` statement to implement `unless` functionality:

```
-- Define a variable
local number = 10

-- Print a message if the number is not equal to 5
if not(number == 5) then
   print("The number is not equal to 5")
end
```

In this example, the if statement will execute only if the condition inside the `not` expression is false. If the value of `number` was 5, then the code inside the if statement would not execute because (5 == 5) evaluates to true, and so the `not` expression would evaluate to false.

Thus, by using `if not` conditionals, you can implement the functionality of `unless` in Lua.