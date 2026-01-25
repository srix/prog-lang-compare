In R, arguments are parameters that are passed to a function or method to perform specific tasks. These arguments can be used to control various aspects of the function or method's behavior such as input data, output results, etc. Here's an example of a function with multiple arguments:

```R
# Function with multiple arguments
myFunction <- function(x, y, z) {
  result <- x + y + z
  return(result)
}

# Call function with arguments
myFunction(2, 3, 4)
```

In the above example, we defined a function called `myFunction` that takes three arguments, `x`, `y`, and `z`. The function adds the values of these arguments and returns the result. We called the function with the values `2`, `3`, and `4` as arguments, respectively.

Another example is of a method with multiple arguments is `plot()` function, which takes multiple arguments to customize the plot. Here's an example:

```R
# Plot with multiple arguments
x <- c(1, 2, 3, 4, 5)
y <- c(2, 4, 5, 4, 2)

plot(x, y, type = "o", col = "red", pch = 16, lty = 2)
```

In this example, we plotted a simple line graph by passing `x` and `y` vectors as arguments to the `plot()` function. The additional arguments like `type = "o"`, `col = "red"`, `pch = 16`, and `lty = 2` were used to customize the plot. `type` argument specifies the type of plot, `col` argument specifies the color of the plot, `pch` argument specifies the shape of the points, and `lty` argument specifies the type of line.

In summary, using multiple arguments in R allows us to perform more complex functions or methods by adjusting different parameters for the given input data.