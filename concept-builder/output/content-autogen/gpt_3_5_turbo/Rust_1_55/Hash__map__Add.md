In Rust, the `HashMap` collection is used to represent a hash (also known as a dictionary or map) of key-value pairs. To add an element to a hash, you can use the `insert()` method of the `HashMap`. Here's an example:

```rust
use std::collections::HashMap;

fn main() {
    let mut hash_map = HashMap::new();

    // Add a key-value pair to the hash map
    hash_map.insert("apple", 3);

    // Print the hash map
    println!("{:?}", hash_map);
}
```

In this example, we first create a new, empty hash map using the `HashMap::new()` function. We then use the `insert()` method of this hash map to add a new key-value pair with the key "apple" and the value 3. Finally, we print out the entire hash map using the `{:?}` format specifier.

You can also add multiple key-value pairs to a hash in a single `insert()` call by passing in a tuple of key-value pairs. Here's an example:

```rust
use std::collections::HashMap;

fn main() {
    let mut hash_map = HashMap::new();

    // Add multiple key-value pairs to the hash map
    hash_map.insert("apple", 3);
    hash_map.insert("banana", 2);
    hash_map.insert("orange", 5);

    // Print the hash map
    println!("{:?}", hash_map);
}
```

In this case, we again use the `HashMap::new()` function to create a new hash map, but we add three key-value pairs to it in a single `insert()` call. This time, we print out the entire hash map using the `{:?}` format specifier as before.

Note that when you add a new key-value pair to a hash in Rust using the `insert()` method, if the key already exists in the hash, its previous value will be replaced with the new value.