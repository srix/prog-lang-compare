In Julia, a method or function can be declared using the `function` keyword. Here's an example:

```
function greet(name)
    println("Hello, $name!")
end
```

This `greet` function takes a single argument `name`, and prints out a personalized greeting using string interpolation.

Another example with multiple arguments: 

```
function add_numbers(x, y)
    return x + y
end
```

This `add_numbers` function takes two arguments `x` and `y`, and returns the sum of these two values. 

In Julia, it is also possible to declare a function with default arguments. For instance:

```
function greet(name="Julia")
    println("Hello, $name!")
end
```

This `greet` function takes an optional argument `name`, which defaults to "Julia" if no value is provided. 

It is also important to note that Julia supports multiple dispatch, which means that functions can have different implementations depending on the types of their arguments. For example:

```
function square(x::Integer)
    return x * x
end

function square(x::Float64)
    return x * x
end
```

These two `square` functions have different implementations for integer and float arguments. Julia will automatically choose the appropriate implementation based on the type of argument passed to the function.