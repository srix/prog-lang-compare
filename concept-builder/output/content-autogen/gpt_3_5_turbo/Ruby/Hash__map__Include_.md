In Ruby, we can check if a hash includes a key using the `include?` method. The `include?` method returns a boolean value `true` if the hash includes the given key, and `false` otherwise. Here is an example:

```
# Define a hash
my_hash = { name: "John", age: 30, city: "New York" }

# Check if the hash includes a key
puts my_hash.include?(:name)        #=> true
puts my_hash.include?(:address)     #=> false
```

In the above example, we define a hash `my_hash` with three key-value pairs. We then call the `include?` method on `my_hash` object twice to check if the hash includes the keys `:name` and `:address`. The first call returns `true` since `:name` key is present in the hash, while the second call returns `false` since `:address` key is not present in the hash.