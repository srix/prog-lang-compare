In Julia, the `this` keyword refers to the current object being operated on, while the `that` keyword is not a reserved word. However, you can assign values to variables using either the `=` symbol or the `x .= y` syntax to assign a value to an array. Here are examples of both:

Using the `=` symbol:

```julia
# Assigning a value to a variable
x = 5
println(x) # Output: 5

# Assigning a value to an array
y = [1, 2, 3]
y[1] = 4
println(y) # Output: [4, 2, 3]
```

Using the `.= ` syntax:

```julia
# Assigning a value to an array
x = [1, 2, 3]
y = [4, 5, 6]
x .= y
println(x) # Output: [4, 5, 6]
```

Note that the `.= ` syntax is used to assign the entire array `y` to the corresponding elements of `x`. If `=` had been used instead, `x` would have just been assigned the value of `y` without copying elements.