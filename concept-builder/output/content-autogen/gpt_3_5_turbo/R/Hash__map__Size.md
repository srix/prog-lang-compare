In R, we can get the size of a hash object using the `length` function. Here's an example:

```R
library(hash)

# Create a hash object
myhash <- hash(letters, LETTERS)

# Get the size of the hash using the length function
length(myhash)
```

Output:
```
[1] 52
```

In the above example, we created a hash object named `myhash` using the `hash` function from the `hash` package. We passed two vectors, `letters` and `LETTERS`, as the keys and values in the hash object.

To get the size of the hash, we simply called the `length` function on the `myhash` object and it returned the number of key-value pairs in the hash, which is 52 in this case.