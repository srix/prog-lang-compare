In R, "not" is typically represented using the exclamation mark (`!`), which is used as a logical operator to negate a logical value. It returns a Boolean value of `TRUE` if the input is `FALSE`, and `FALSE` if the input is `TRUE`.

Here are some examples:
```
x <- 5
y <- 10

# check if x is not equal to y
!(x == y)  # returns TRUE

# check if x is not greater than y
!(x > y)  # returns TRUE

# check if y is not divisible by x
!(y %% x == 0)  # returns FALSE
```

You can also use `!=` to check for inequality in R. For example:
```
a <- 3
b <- 5

# check if a is not equal to b
a != b  # returns TRUE
```