Ternary is a shorthand way of writing if/else statements in Lua. It uses the syntax (condition) and "?" followed by the expression to execute if the condition is true, then followed by ":" and finally the expression to execute if the condition is false.

Here is an example:

```
local number = 5
local message = number > 0 and "Positive number" or "Negative number"
print(message)
```

In the above example, the ternary operator `(number > 0 and "Positive number" or "Negative number")` checks if `number` is greater than 0. If it is, then it returns the string "Positive number", otherwise it returns "Negative number". 

The result of the ternary operator is then assigned to the variable `message` which is printed to the console.

Another example of using ternary in Lua:

```
local x = 7
local y = x > 10 and 20 or 30
print(y)
```

In this example, the ternary operator `(x > 10 and 20 or 30)` checks whether `x` is greater than 10. If it is, then it returns 20, otherwise it returns 30.

The result of the ternary operator is assigned to the variable `y`, which is then printed to the console. In this case, since `x` is not greater than 10, the output will be 30.