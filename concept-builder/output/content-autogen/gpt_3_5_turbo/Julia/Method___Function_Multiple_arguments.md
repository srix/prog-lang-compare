In Julia, multiple arguments can be passed to a method or function by including them within the parentheses when defining the function. Here's an example of how to define a method with multiple arguments:

```julia
function add_numbers(x::Int, y::Int, z::Int)
    return x + y + z
end
```

In this example, the function `add_numbers()` accepts three arguments `x`, `y`, and `z`, each of which must be of type `Int`. The function returns the sum of the three arguments.

To use the `add_numbers()` function, we can simply call it with three integer arguments:

```julia
result = add_numbers(1, 2, 3)
println(result)
```

This will output `6`, indicating that the function successfully computed the sum of the three arguments.

We can also define a function with optional arguments using the `?` syntax. Here's an example:

```julia
function greet(name, greeting="Hello")
    println("$greeting, $name!")
end
```

In this example, the `greet()` function accepts two arguments - a `name` and an optional `greeting` (which defaults to "Hello"). The function then prints the greeting followed by the name.

We can call this function with just a name, which will use the default greeting:

```julia
greet("Julia")
```

This will output `Hello, Julia!`.

Alternatively, we can pass in a custom greeting:

```julia
greet("Julia", "Good morning")
```

This will output `Good morning, Julia!`.