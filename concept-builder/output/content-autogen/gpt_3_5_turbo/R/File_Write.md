To write a file in R, you can use the `write()` or `write.table()` functions. Here are some examples:

1. Write a dataframe to a CSV file:

```
# create a dataframe
df <- data.frame(A = c(1, 2, 3), B = c("a", "b", "c"))

# write to a CSV file
write.csv(df, file = "my_data.csv", row.names = FALSE)
```

This will create a file called "my_data.csv" in your working directory. The `row.names = FALSE` argument tells R not to include row names in the output.

2. Write a vector to a text file:

```
# create a vector
x <- c(1, 2, 3)

# write to a text file
write(x, file = "my_vector.txt")
```

This will create a file called "my_vector.txt" in your working directory.

3. Write a matrix to a tab-delimited file:

```
# create a matrix
m <- matrix(c(1, 2, 3, 4, 5, 6), ncol = 2)

# write to a tab-delimited file
write.table(m, file = "my_matrix.txt", sep = "\t")
```

This will create a file called "my_matrix.txt" in your working directory, with tab-separated values. The `sep = "\t"` argument specifies the delimiter to use.