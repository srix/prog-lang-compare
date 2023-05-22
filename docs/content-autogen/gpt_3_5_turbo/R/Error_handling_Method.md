In R, we can use tryCatch() function to implement try/catch/finally concept. Here's an example of how to use it in a method:

```
divide <- function(num1, num2) {
  tryCatch({
    result <- num1 / num2
    print(result)
  }, error = function(e) {
    cat("Error occurred:", conditionMessage(e), "\n")
  }, finally = {
    cat("Operation completed!\n")
  })
}

divide(6, 3)
# Output: 2
# Operation completed!

divide(6, 0)
# Output: Error occurred: / by zero 
# Operation completed!
```

In this example, we have defined a method `divide` that takes two input parameters `num1` and `num2`. Inside the method, we use `tryCatch()` to handle any errors that might occur while performing the division operation.

If there is no error, we print the result to the console. If there is an error (such as dividing by zero), we catch the error and print a custom error message to the console. Finally, the `finally` block gets executed after the previous two blocks (whether an error occurred or not).

In the first call to `divide` method, we provide valid inputs (6 and 3), so the result (2) is printed to the console and then "Operation completed!" gets printed.

However, in the second call, we pass one of the inputs as 0, which causes a divide by zero error. The error message is printed to the console along with the "Operation completed!" message.