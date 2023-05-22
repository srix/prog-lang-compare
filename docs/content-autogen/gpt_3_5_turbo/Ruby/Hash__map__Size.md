In Ruby, you can get the size of a hash (number of key-value pairs) using the `size` or `length` method. Here are some examples:

Example 1:

```
hash1 = { "a" => 100, "b" => 200, "c" => 300 }
puts hash1.size      # output: 3
puts hash1.length    # output: 3
```

In this example, we create a hash `hash1` with three key-value pairs. We then call the `size` and `length` methods on the hash to get the number of key-value pairs, which is `3`.

Example 2:

```
hash2 = { "foo" => :bar, 42 => "answer", [1, 2, 3] => "array" }
puts hash2.size      # output: 3
puts hash2.length    # output: 3
```

In this example, we create a hash `hash2` with three key-value pairs. The keys in this hash are different data types, including a string, integer, and array. We then call the `size` and `length` methods on the hash to get the number of key-value pairs, which is again `3`.

So, to summarize, you can use either the `size` or `length` method to get the number of key-value pairs in a hash in Ruby.