In R, try-catch-finally is used to handle errors and exceptions that occur during program execution. The basic structure of try-catch-finally is:

```
tryCatch(expr, ..., finally)
```

where "expr" is the expression that may raise an error, catch handlers are specified as arguments to tryCatch and "finally" is an expression that will always be executed, regardless of whether an error occurred.

Here's an example of using try-catch-finally with a message in R:

```
# Define the function to be tested
division <- function(x, y) {
  return(x/y)
}

# Try dividing
tryCatch({
  division(6,0)
}, error = function(e) {
  message("Error: ", e$message)
}, finally = {
  message("Division attempted")
})
```

In this example, the "division" function attempts to divide 6 by 0, which will raise a divide-by-zero error. The tryCatch block is used to handle the potential error and print a message to the console. The "finally" statement ensures that a closure is executed, regardless of whether or not an error is thrown.

The output of the above code block will be:

```
Error: division by zero
Division attempted
```

Here, the error message is "Error: division by zero”, and "Division attempted" is printed with either the message.