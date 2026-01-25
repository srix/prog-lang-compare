In Rust, you can create a hash table using the `HashMap` data structure from the standard library. Here’s an example of how to create a `HashMap` with a `String` key and an `i32` value:

```rust
use std::collections::HashMap;

fn main() {
    // Create a new HashMap
    let mut my_hash_map = HashMap::new();

    // Insert key-value pairs into the HashMap
    my_hash_map.insert(String::from("Alice"), 32);
    my_hash_map.insert(String::from("Bob"), 27);
    my_hash_map.insert(String::from("Charlie"), 45);

    // Access a value in the HashMap
    println!("Charlie's age is {}", my_hash_map.get("Charlie").unwrap());

    // Update a value in the HashMap
    my_hash_map.insert(String::from("Bob"), 28);

    // Remove a key-value pair from the HashMap
    my_hash_map.remove("Charlie");

    // Iterate over the HashMap
    for (key, value) in &my_hash_map {
        println!("{} is {} years old", key, value);
    }
}
```

In the example above, we first import the `HashMap` struct from the `collections` module. We then create a new instance of `HashMap` by calling the `new()` method, and insert three key-value pairs into it using the `insert()` method. We can access a value in the `HashMap` using the `get()` method, and update a value using the `insert()` method with the same key.

We can remove a key-value pair from the `HashMap` using the `remove()` method, and iterate over all the key-value pairs using a `for` loop and the `iter()` method. Note that we use a reference to the `HashMap` in the `for` loop to avoid taking ownership of the structure.

This is a basic example, but the `HashMap` in Rust offers many more features and options for customization.