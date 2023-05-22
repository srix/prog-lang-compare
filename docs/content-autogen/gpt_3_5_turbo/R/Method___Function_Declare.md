In R, you declare a function using the `function()` keyword. Here's an example function that accepts two arguments and returns the sum:

```
sum_numbers <- function(x, y) {
  sum <- x + y
  return(sum)
}
```

In this example, `sum_numbers` is the name of the function, and it accepts two arguments (`x` and `y`). The body of the function calculates the sum of the two arguments using the `+` operator, and then the `return()` statement returns the result.

To call the function, you can use its name and pass in the arguments:

```
result <- sum_numbers(3, 4)
# result is now 7
```

You can also declare methods, which are functions that operate on a specific object or class. Here's an example of a method that operates on a `hello` object:

```
hello <- "Hello, World!"

to_uppercase <- function(str) {
  return(toupper(str))
}

result <- to_uppercase(hello)
# result is now "HELLO, WORLD!"
```

In this example, `to_uppercase` is a method that accepts a string argument (`str`), and it uses the `toupper()` function to convert the string to uppercase before returning the result. The `hello` object is passed to the method as an argument, and the resulting string is assigned to `result`.