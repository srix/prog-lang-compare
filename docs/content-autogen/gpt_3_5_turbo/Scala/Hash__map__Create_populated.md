Creating a hash in Scala involves using the `Map` data structure. A `Map` is a container that stores key-value pairs. In the case of hashes, the key is a unique identifier used to access the value.

Here's an example of how to create a Hash (Map) in Scala:

```scala
// Creating a hash where keys are String and values are Int
val hash = Map("apple" -> 1, "banana" -> 2, "orange" -> 3)

// Accessing values using their keys
println(hash("apple")) // Output: 1
println(hash("banana")) // Output: 2
println(hash("orange")) // Output: 3
```

In the example above, we created a `Map` variable called `hash` with three key-value pairs. The first part of each pair (e.g. "apple", "banana", "orange") is the key and the second part (e.g. 1, 2, 3) is the value associated with that key.

To access a specific value in the hash, you can use the key in square brackets (e.g. `hash("apple")`). This will output the associated value (e.g. 1).