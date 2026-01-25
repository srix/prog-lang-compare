In R, we can initialize a method or function in runtime using the `do.call()` function which allows us to pass the function as a variable and call it with its arguments. Here is an example:

Suppose we have the following function defined:
```
add_numbers <- function(x,y) {
   return (x+y)
}
```
We can initialize it in runtime using the `do.call()` function as follows:
```
# Define the function name as a variable
fun_name <- "add_numbers"

# Define the arguments as a list
args_list <- list(x = 2, y = 3)

# Call the function with the arguments
result <- do.call(fun_name, args_list)

# Print the output
print(result)
```
Output: `5`

In the above code, we first defined the function name as a variable `fun_name`, and the arguments as a list `args_list`. Then, we called the `do.call()` function with the function name variable and the argument list to execute the function with the given arguments. Finally, we printed the output.