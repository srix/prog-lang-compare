The ternary operator is a compact way to write `if` statements in R. It takes the following form:

`condition` ? `expression_if_true` : `expression_if_false`

If `condition` is true, then `expression_if_true` is evaluated; otherwise, `expression_if_false` is evaluated.

Here are a few examples to show how to use the ternary operator in R:

```r
# Example 1: Determine if a number is positive or negative
x <- 10

# Using if/else statement
if (x > 0) {
  result <- "positive"
} else {
  result <- "negative"
}
print(result)

# Using ternary operator
result <- ifelse(x > 0, "positive", "negative")
print(result)


# Example 2: Extracting digits from a number
number <- 123456

# Using if/else statement
if (number > 999) {
  digits <- substr(number, 2, 4)
} else {
  digits <- substr(number, 1, 3)
}
print(digits)

# Using ternary operator
digits <- ifelse(number > 999, substr(number, 2, 4), substr(number, 1, 3))
print(digits)
```

Note that the `ifelse` function is a vectorized version of the ternary operator, which allows you to evaluate the condition on a vector of values. It returns a vector of the same length as the input vector, where each element is the result of the corresponding element from the input vector being evaluated by the ternary operator.