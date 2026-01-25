To convert a string to an integer in R, you can use the `as.integer()` function. This function takes a vector as input and returns a new vector with the values coerced to integers. Here's an example:

```
# Create a string vector
my_string <- c("123", "456", "789")

# Convert the string vector to an integer vector
my_integer <- as.integer(my_string)

# Print the result
print(my_integer)
```

This will output:

```
[1] 123 456 789
```

If you attempt to convert a non-numeric string, like `"hello"`, you'll get an NA value in the resulting vector:

```
# Attempt to convert a non-numeric string to an integer
my_string <- "hello"
my_integer <- as.integer(my_string)

# Print the result
print(my_integer)
```

This will output:

```
[1] NA
```

It's important to note that if there are any non-numeric characters in your string vector, the `as.integer()` function will return an error. In this case, you'll need to remove or modify those characters before converting your string to an integer.