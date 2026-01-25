In R, block passing refers to passing a block of code as an argument to a function. This can be useful in situations where you need to perform a certain operation repeatedly within a larger function.

Here is an example of how to use block passing in R:

```
# Define a function that takes a block of code as an argument
myFunc <- function(codeBlock) {
  # Perform some operation before the block of code
  print("Before the block of code")
  
  # Run the block of code
  eval(substitute(codeBlock), parent.frame())
  
  # Perform some operation after the block of code
  print("After the block of code")
}

# Call the function with a block of code as an argument
myFunc({
  # The block of code to be passed
  x <- 2 + 2
  print(x)
})
```

In this example, we define a function `myFunc` that takes a block of code as an argument. The `eval(substitute(codeBlock), parent.frame())` line evaluates the block of code within the context of the current environment.

When we call `myFunc` with a block of code as an argument, we define the block of code using curly braces `{}` and include any necessary code within it. In this case, we're simply assigning the value 4 to a variable `x` and then printing its value using `print(x)`.

The output of running this code will be:

```
[1] "Before the block of code"
[1] 4
[1] "After the block of code"
```

This demonstrates how block passing allows us to define and execute a block of code within the context of another function.