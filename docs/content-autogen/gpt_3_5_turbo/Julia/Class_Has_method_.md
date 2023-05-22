In Julia, we can check if a class has a method using the `method_exists()` function. Here is an example:

```julia
# Define a class
struct ExampleClass
    x::Int
    y::Int
end

# Define a method for the class
foo(a::ExampleClass) = println("The values of x and y are $(a.x) and $(a.y)")

# Check if the class has the method
println(method_exists(foo, Tuple{ExampleClass})) # true

# Check if a different class has the same method
struct AnotherClass
    z::Float64
end
println(method_exists(foo, Tuple{AnotherClass})) # false
```

In the code above, we define an `ExampleClass` with two fields `x` and `y`. Then, we define a method `foo` that takes an `ExampleClass` object as an argument, and prints the values of its fields. We use the `method_exists()` function to check if the `ExampleClass` has the `foo()` method. Since `ExampleClass` has the method, the output is `true`.

Finally, we define a different class `AnotherClass` with a single field `z`. We use `method_exists()` to check if `AnotherClass` has the `foo()` method. Since `AnotherClass` does not have the method, the output is `false`.