In R, floating-point numbers are numbers with decimals. They can be used to represent non-integer values such as 3.14 or 0.5. Here are a few examples to help you understand the usage of float numbers in R:

1. Assigning float values to variables

To assign a float value to a variable in R, simply use the assignment operator ' <- ' or ' = '. Here's an example:

```
a <- 3.14
b = 0.5
```

2. Performing arithmetic operations with float values

You can perform arithmetic operations with float values just like you would with integers. Here are a few examples:

```
x <- 3.25
y <- 1.75

# Addition
z1 <- x + y  # 5
z2 <- y + 2  # 3.75

# Subtraction
z3 <- x - y  # 1.5
z4 <- y - 2  # -0.25

# Multiplication
z5 <- x * y  # 5.6875
z6 <- y * 2  # 3.5

# Division
z7 <- x / y  # 1.857142
z8 <- y / 2  # 0.875
```

3. Formatting float values

You can format float values to display a specific number of decimal places using the `round()` function. For example:

```
x <- 3.14159
y <- 1.234567

round(x, 2) # 3.14
round(y, 3) # 1.235
```

These are only a few examples of how to use float numbers in R. Floats are used extensively in data analysis because they allow for greater precision in calculations.