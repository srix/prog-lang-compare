Sure, to get the index of an element in an array in R, you can use the `which()` function or the indexing operator `[ ]`. Here are some examples:

Example 1: Using the `which()` function

```
# Create an example array
my_array <- c("apple", "banana", "cherry", "durian")

# Use which() function to get index of "cherry"
which(my_array == "cherry")
# Output: 3
```

Example 2: Using the indexing operator `[ ]`

```
# Create an example array
my_array <- c("apple", "banana", "cherry", "durian")

# Use indexing operator to get index of "banana"
which(my_array == "banana")
# Output: 2
```

Note that if the element you're looking for appears more than once in the array, `which()` and indexing operator will return the indices of all occurrences.