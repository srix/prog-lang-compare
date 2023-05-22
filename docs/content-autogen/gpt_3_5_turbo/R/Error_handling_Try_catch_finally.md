The try/catch/finally block in R allows a programmer to handle errors that may occur while executing a block of code, while ensuring that certain actions are performed regardless of the outcome. Here's an example of how to use try/catch/finally in R:

```
# example program that throws an error
divide_numbers <- function(x, y) {
  if (y == 0) {
    stop("Cannot divide by zero")
  } else {
    return(x / y)
  }
}

# example usage of try/catch/finally
tryCatch({
  result <- divide_numbers(10, 2)
  print(result)
  result2 <- divide_numbers(10, 0)
  print(result2)
}, error = function(e) {
  print(paste("Error:", e))
}, finally = {
  print("Finally block executed")
})
```

In this example, we define a function `divide_numbers` that divides two numbers and throws an error if the second number is zero. We then use a tryCatch block to call `divide_numbers` twice, once with a non-zero divisor and once with a zero divisor. 

The try block will execute the code within it, but if any error occurs (such as dividing by zero), it will jump straight to the catch block and execute the code within it. In this example, the catch block will print an error message and then continue with the program once it's done. 

Finally, the finally block will always execute, regardless of whether an error occurred or not. In this example, it prints a simple message. 

Overall, using try/catch/finally allows us to write code that gracefully handles errors and ensures that necessary clean-up tasks are executed, even when things go wrong.