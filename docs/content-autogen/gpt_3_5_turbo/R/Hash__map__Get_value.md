In R, you can get the value of a key in a hash by simply providing the key in the square brackets. Here's an example:

```R
# create a hash table
hash_table <- list()

# add some key-value pairs
hash_table["apple"] <- 1
hash_table["banana"] <- 2
hash_table["cherry"] <- 3

# get the value of the "banana" key
value <- hash_table["banana"]

# print the value of the "banana" key
print(value)
```

In the above code, we first create an empty hash table `hash_table`. We then add three key-value pairs to the hash table using the square bracket notation. Finally, we use the square bracket notation again to retrieve the value associated with the "banana" key and store it in a variable called `value`.

When we print the value of the `value` variable using the `print()` function, we get the output `2`, which is the value associated with the "banana" key in the hash table.