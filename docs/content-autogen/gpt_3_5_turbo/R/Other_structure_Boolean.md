In R, a boolean variable is a variable that can only hold one of two values: `TRUE` or `FALSE`. The boolean values `TRUE` and `FALSE` are often used in conditional statements to determine which block of code should be executed. Here are some examples of how to use booleans in R:

1. Simple boolean variable assignment

```
is_raining <- TRUE
if (is_raining) {
  print("Bring an umbrella!")
} else {
  print("Enjoy the outdoor!")
}
```

In this example, we assign the boolean value `TRUE` to the variable `is_raining`. Then we use an `if` statement to print a message depending on the value of `is_raining`.

2. Boolean operators

```
x <- 5
y <- 2
(x > y) # Output: TRUE
(x == y) # Output: FALSE
(x != y) # Output: TRUE
(x >= y) # Output: TRUE
(x <= y) # Output: FALSE
```

In this example, we create two variables `x` and `y`. Then we use boolean operators such as `>`, `==`, `!=`, `>=`, and `<=` to compare the two variables.

3. Boolean functions

```
all(c(TRUE, FALSE, TRUE)) # Output: FALSE
any(c(TRUE, FALSE, TRUE)) # Output: TRUE
```

In this example, we use two boolean functions: `all()` and `any()`. The `all()` function returns `TRUE` if all of the elements of a vector are `TRUE`. In this case, since there is a `FALSE` element in the vector, `all()` returns `FALSE`. The `any()` function returns `TRUE` if at least one of the elements of a vector is `TRUE`. In this case, since there are two `TRUE` elements in the vector, `any()` returns `TRUE`.