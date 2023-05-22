In Julia, to get the size of a hash, you can use the `sizeof()` function. The `sizeof()` function returns the number of bytes allocated for an object. Here's an example:

```julia
# create a dictionary
my_dict = Dict("A" => 1, "B" => 2, "C" => 3)

# get size of dictionary
dict_size = sizeof(my_dict)

# print size of dictionary
println("Size of dictionary: ", dict_size, " bytes")
```

Output:
```
Size of dictionary: 288 bytes
```

In this example, `my_dict` is a dictionary object with three key-value pairs. The `sizeof()` function is used to get the size of `my_dict`, and the result is stored in the `dict_size` variable. Finally, we print the size of the dictionary using `println()`.