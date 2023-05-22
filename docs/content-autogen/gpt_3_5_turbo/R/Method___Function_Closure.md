In R, a closure is a function that captures the environment in which it was defined. This means that it has access to the local variables in the environment where it was defined, even if it is called in a different environment. 

Here's an example of how to use closure in R:

```
# Define a function that returns another function
makeAdder <- function(x) {
  function(y) {
    x + y
  }
}

# Call the makeAdder function to create a new function
add5 <- makeAdder(5)

# Call the add5 function with a parameter
add5(10) # Output: 15
```

In this example, the `makeAdder` function returns another function that adds its argument to the variable `x`. When we call `makeAdder(5)`, it returns a new function that has captured the value of `x` as 5. We can then use that new function, `add5`, to add 5 to any value we pass to it, as demonstrated in the last line of code. 

This is a simple example, but closures can be powerful tools, especially in functional programming. They allow us to create and return new functions with specific behavior that depends on variables in a specific environment.