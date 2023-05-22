In Julia, a private method refers to a function that is accessible only within the module in which it is defined. To define a private method, the keyword `private` is used before the function declaration.

Here is an example:

```julia
module MyModule

export public_method

function private_method()
    println("This is a private method")
end

function public_method()
    println("This is a public method")
    private_method()
end

end
```

In this example, the module `MyModule` defines two functions - `private_method` and `public_method`. The `private_method` is defined as a private method using the `private` keyword. The `public_method` is defined as a public method and it calls the `private_method`.

If we try to call the `private_method` from outside the module, we will get an error because it is not accessible outside of the module:

```julia
julia> MyModule.private_method()
ERROR: UndefVarError: private_method not defined
Stacktrace:
 [1] top-level scope at REPL[2]:1
```

However, we can call the `public_method` from anywhere because it is a public method:

```julia
julia> MyModule.public_method()
This is a public method
This is a private method
```

In this example, the `public_method` calls the `private_method` successfully because they are both defined within the same module.

In summary, private methods are useful in Julia to hide implementation details of a module from other modules or programs and to prevent unintended usage of certain functions.