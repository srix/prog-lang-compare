To find the first element of an array in R, you can use the indexing notation by specifying the index as 1. Here's an example:

Suppose we have an array called `my_array` with elements `[2, 4, 6, 8]`. We can find the first element of this array using the following code:

```R
my_array <- c(2, 4, 6, 8)
first_element <- my_array[1]
print(first_element) # Output: [1] 2
```

In this example, we first create an array `my_array` using the `c()` function, which concatenates the values into a vector-like structure. We then use the indexing notation `[1]` to access the first element of the array and store it in the variable `first_element`. Finally, we print the value of `first_element` using the `print()` function. The output shows that the first element of `my_array` is 2.