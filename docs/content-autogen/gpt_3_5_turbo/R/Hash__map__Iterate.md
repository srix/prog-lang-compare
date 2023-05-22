In R, we can iterate over a hash using a for loop. A hash is also known as a named list in R. There are two ways to create a hash in R:

1. Using the list function and naming the elements:

```
hash <- list(a = 1, b = 2, c = 3)
```

2. Using the `hash` package:

```
library(hash)
hash <- hash(a = 1, b = 2, c = 3)
```

To iterate over a hash, we can use the names function to get the names of the elements in the hash. Then we can use a for loop to loop through the names and access the values in the hash using the `[[]]` notation. Here's an example:

```
# Creating a hash using the list function
hash <- list(a = 1, b = 2, c = 3)

# Iterating over the hash with a for loop
for (name in names(hash)) {
  value <- hash[[name]]
  print(paste(name, value))
}
```

This will output:

```
[1] "a 1"
[1] "b 2"
[1] "c 3"
```

In the for loop, we're looping through the names of the elements in the hash using `names(hash)`. We're then accessing the value of each element using `hash[[name]]`, where `name` is the name of the element. We're then printing out the name and value using `paste(name, value)` and the `print` function.