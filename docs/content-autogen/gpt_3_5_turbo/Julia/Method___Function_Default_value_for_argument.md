In Julia, you can define a default value for a function argument by using the syntax `argname=defaultvalue`. This allows the user to omit the argument when calling the function, in which case the default value will be used instead. Here's an example:

```julia
function greet(name="friend")
    println("Hello, $name!")
end

greet() #outputs "Hello, friend!"
greet("Alice") #outputs "Hello, Alice!"
```

In the above example, the `greet()` function has a default value of `"friend"` for the `name` argument. If the user calls `greet()` without an argument, the function will output "Hello, friend!". If the user calls `greet("Alice")`, the function will output "Hello, Alice!".