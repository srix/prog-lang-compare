In R, we can assign a value to a variable if it does not already exist using the `<-` or `=` operator. This is useful when we are not sure if a variable has been previously defined, and we want to ensure it has a value for subsequent operations.

Here is an example:

```R
# Check if variable x exists
if(!exists('x')){
  # If it does not exist, assign a value to it
  x <- 10
}

# Now we can use variable x
y <- x + 5
print(y) # Output: 15
```

In this example, we first check if the variable `x` exists by using the `exists` function. If it does not exist, we assign a value of `10` to `x`. Finally, we use `x` in subsequent operations. 

Note: It is recommended to use `if(!exists())` only when necessary, as too many such checks may slow down performance.