Ternary operators are conditional expressions that work like an `if-else` statement and are used in one line of code. In Julia, the syntax of the ternary operator is `condition ? value_if_true : value_if_false`. 

Here's an example to illustrate its use:

```julia
x = 5
y = if x > 3
	x * 2
else
	x / 2
end
println(y) # output: 10

# Using the ternary operator
y = x > 3 ? x * 2 : x / 2
println(y) # output: 10
```

In the above example, the value of `y` depends on whether `x > 3` is true or false. In the `if-else` statement, the value of `y` is calculated based on the condition. The same thing can be achieved with the ternary operator, and it takes up less space. 

Another example:

```julia
x = 7
is_even = (x % 2 == 0)

# Using if-else
if is_even
    println("x is even")
else
    println("x is odd")
end

# Using the ternary operator
is_even ? println("x is even") : println("x is odd")
```

In the above example, the program checks if `x` is even. The `if-else` statement checks if `is_even` is true or false and prints the appropriate message. The same can be achieved using the ternary operator, which again is shorter and more concise.