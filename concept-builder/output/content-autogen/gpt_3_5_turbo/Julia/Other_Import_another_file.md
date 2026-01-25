In Julia, you can import functions or other objects from another file by using the `include()` function or `using` keyword. Here are examples of both methods:

1.Using `include()`:
Suppose we have a file named `my_module.jl` with the following function definition:

```julia
function greet(name)
    println("Hello, $name!")
end
```

To import this function in another file, we can use `include()` as follows:

```julia
include("my_module.jl")

greet("John")
```

The `include()` function reads the content of `my_module.jl` and runs it inside the calling program. This adds all the definitions in `my_module.jl` to the namespace of the calling program.

2.Using `using`:
Suppose we have a file named `my_module.jl` with the following module definition:

```julia
module MyModule

export greet

function greet(name)
    println("Hello, $name!")
end

end # module
```

To import this function in another file, we can use the `using` keyword and import the module:

```julia
using .MyModule

greet("John")
```

This makes the `greet()` function available in the calling program's namespace under the `MyModule` module.

Note that in the second example, the `.` before `MyModule` tells Julia to look for `MyModule` in the current module, allowing us to use relative imports.