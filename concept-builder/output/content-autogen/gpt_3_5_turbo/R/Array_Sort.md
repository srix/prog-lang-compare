To sort an array in R, you can use the `sort` function. The `sort` function sorts the elements of a vector or a matrix by ascending order by default. Here are some examples:

Sorting a vector:

```
# Create a vector
x <- c(5, 3, 8, 1, 6)

# Sort the vector in ascending order
sort(x)
```

Output:
```
[1] 1 3 5 6 8
```

Sorting a matrix:

```
# Create a matrix
m <- matrix(c(5, 3, 8, 1, 6, 2), ncol = 2)

# Sort the rows of the matrix in ascending order
t(apply(m, 1, sort))
```

Output:
```
[,1] [,2]
[1,]    3    5
[2,]    1    8
[3,]    2    6
```

Sorting a data frame:

```
# Create a data frame
df <- data.frame(x = c(5, 3, 8, 1, 6), y = c("c", "b", "e", "a", "d"))

# Sort the data frame by x in ascending order
df[order(df$x), ]
```

Output:
```
  x y
4 1 a
2 3 b
1 5 c
5 6 d
3 8 e
```

You can also sort in descending order by specifying `decreasing = TRUE`.