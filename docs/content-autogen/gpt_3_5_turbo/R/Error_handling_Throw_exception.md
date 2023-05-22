In R, to throw an exception we use the `stop()` function. Here are some examples:

1. Throw an exception with a custom message:

```R
x <- -5
if (x < 0) {
  stop("x should be greater than or equal to zero")
}
```

This will throw an exception with the message "x should be greater than or equal to zero" if `x` is less than zero.

2. Throw an exception with a default message:

```R
y <- NULL
if (is.null(y)) {
  stop("y is NULL")
}
```

This will throw an exception with the message "y is NULL" if `y` is `NULL`.

3. Throw an exception with a custom condition:

```R
z <- "some string"
if (!is.numeric(z)) {
  stop("z should be a numeric value", call. = FALSE)
}
```

This will throw an exception with the message "z should be a numeric value" if `z` is not a numeric value. The `call. = FALSE` argument is used to suppress the output of the call stack.

Overall, `stop()` function is useful in handling errors and exceptions in your R code.