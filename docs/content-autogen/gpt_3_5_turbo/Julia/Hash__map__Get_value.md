In Julia, the value of a key in a hash (also known as a dictionary) can be obtained by using the square brackets `[]` with the key name as the index. Here is an example:

```
# Creating a hash with key-value pairs
julia> my_dict = Dict("apple" => 2, "orange" => 5, "banana" => 1)
Dict{String, Int64} with 3 entries:
  "orange" => 5
  "apple" => 2
  "banana" => 1

# Getting the value of a specific key
julia> my_dict["orange"]
5
```

In the example above, we create a dictionary or a hash using the `Dict()` function with three key-value pairs. Then, to access the value of a specific key, we use the square brackets `[]` with the key name as the index - in this case "orange". The output is the value associated with this key, which is `5`.

If the key does not exist in the hash, an error will be thrown. To prevent this from happening, we can use the `get()` function instead, which returns a default value if the key is not found. Here's an example:

```
# Using get() function to get the value of a key
julia> my_dict = Dict("apple" => 2, "orange" => 5, "banana" => 1)
Dict{String, Int64} with 3 entries:
  "orange" => 5
  "apple" => 2
  "banana" => 1

julia> get(my_dict, "grape", 0)
0
```

In this example, we use the `get()` function to try to get the value associated with "grape". Since this key does not exist in our dictionary, it returns the default value of `0`.