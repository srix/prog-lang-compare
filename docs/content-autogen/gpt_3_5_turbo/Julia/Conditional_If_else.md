In Julia, we use if/else statements to execute different codes based on boolean conditions. The basic syntax for an if/else statement is as follows:

```
if condition
    # some code to execute if the condition is true
else
    # some code to execute if the condition is false
end
```

Here's an example:

```
x = 7

if x < 5
    println("The value of x is less than 5.")
else
    println("The value of x is greater than or equal to 5.")
end
```

In this example, we are checking if the value of `x` is less than 5. Since `x` has a value of 7, the condition is false and the statement "The value of x is greater than or equal to 5." is printed.

We can also add multiple conditions using elseif:

```
x = 7

if x < 5
    println("The value of x is less than 5.")
elseif x == 5
    println("The value of x is equal to 5.")
else
    println("The value of x is greater than 5.")
end
```

In this example, we are checking if the value of `x` is less than 5. If the condition is false, we check if the value is equal to 5. If the second condition is also false, we print "The value of x is greater than 5." since no other condition holds true in the statement.