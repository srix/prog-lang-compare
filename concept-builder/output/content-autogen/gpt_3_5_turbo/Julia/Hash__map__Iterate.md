In Julia, you can iterate over a hash using the `for` loop. Below is an example of how to iterate over a hash:

```julia
# Create a hash
hash = Dict("A" => 1, "B" => 2, "C" => 3)

# Iterate over the hash
for (key, value) in hash
    println("Key: $key, Value: $value")
end
```

This will output the following:

```
Key: B, Value: 2
Key: A, Value: 1
Key: C, Value: 3
```

As you can see, the `for` loop iterates over each key-value pair in the hash and prints out the key and value. You can access the key and value individually by using the `key` and `value` variables within the loop, respectively.

You can also iterate over just the keys or just the values in the hash using the `keys` and `values` functions, respectively, like this:

```julia
# Iterate over the keys
for key in keys(hash)
    println("Key: $key")
end

# Iterate over the values
for value in values(hash)
    println("Value: $value")
end
```

These will output:

```
Key: B
Key: A
Key: C

Value: 2
Value: 1
Value: 3
```

In summary, iterating over a hash in Julia is easy using the `for` loop, and you can easily access the key and value of each element in the hash.