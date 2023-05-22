To concatenate two arrays in R, we can use the `c()` function or `append()` function. Here are some examples:

Example 1: Using `c()` function
```
# create two arrays
x <- c(1, 2, 3)
y <- c(4, 5, 6)

# concatenate two arrays using c() function
z <- c(x, y)
print(z)
```
Output:
```
[1] 1 2 3 4 5 6
```

Example 2: Using `append()` function
```
# create two arrays
x <- c(1, 2, 3)
y <- c(4, 5, 6)

# concatenate two arrays using append() function
z <- append(x, y)
print(z)
```
Output:
```
[1] 1 2 3 4 5 6
```

Both `c()` and `append()` functions can be used to concatenate arrays in R. However, `append()` function also allows you to specify the position where you want to concatenate the second array.