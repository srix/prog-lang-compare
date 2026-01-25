In Julia, the `if` statement is used for conditional evaluation. The `if` statement can be used in combination with the assignment operator `=` to conditionally assign a value to a variable.

Here's an example:

```
x = 10

if x > 5
    y = "x is greater than 5"
else
    y = "x is less than or equal to 5"
end

println(y)
```

In this example, if the value of `x` is greater than 5, the string "x is greater than 5" will be assigned to the variable `y`. Otherwise, the string "x is less than or equal to 5" will be assigned to `y`. Finally, the value of `y` is printed using the `println` function.

Another way to write this would be to use the ternary operator:

```
x = 10

y = x > 5 ? "x is greater than 5" : "x is less than or equal to 5"

println(y)
```

In this example, the ternary operator `?` is used along with the assignment operator `=` to assign a value to `y` based on the result of the condition `x > 5`. If the condition is true, "x is greater than 5" is assigned to `y`. Otherwise, "x is less than or equal to 5" is assigned to `y`. Finally, the value of `y` is printed using the `println` function.