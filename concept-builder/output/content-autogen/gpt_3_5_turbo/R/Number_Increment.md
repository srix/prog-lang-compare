In R, We can increment a number by adding a value to it. The simplest way to increment a number is to use the plus `+` operator. 

Here are a few examples:

Example 1: Incrementing a single number by 1:

```
# Initialize a variable with value 5
x <- 5

# Increment the value of x by 1
x <- x + 1
```

Output:
```
> x
[1] 6
```

Example 2: Incrementing a vector of numbers by 2:

```
# Initialize a vector with values 1, 2, 3, and 4
y <- c(1, 2, 3, 4)

# Increment the values of y by 2
y <- y + 2
```

Output:
```
> y
[1] 3 4 5 6
```

Example 3: Incrementing a matrix of numbers by 3:

```
# Initialize a 2x2 matrix with values 1, 2, 3, and 4
z <- matrix(c(1, 2, 3, 4), nrow=2)

# Increment the values of z by 3
z <- z + 3
```

Output:
```
     [,1] [,2]
[1,]    4    6
[2,]    5    7
``` 

These are just a few examples of how to increment a number in R. The approach remains the same for arrays or any other numerical data type as well.