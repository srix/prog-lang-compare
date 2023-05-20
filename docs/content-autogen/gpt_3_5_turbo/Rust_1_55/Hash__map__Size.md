In Rust 1.55, you can get the size of a hash (also known as a HashMap) using the `len` method. Here's an example:

```rust
use std::collections::HashMap;

fn main() {
    let mut hash_map = HashMap::new();
    hash_map.insert("key1", "value1");
    hash_map.insert("key2", "value2");
    hash_map.insert("key3", "value3");

    let hash_size = hash_map.len();
    println!("The hash map size is {}", hash_size);
}
```

In this example, we create a new `HashMap` called `hash_map` and insert three key-value pairs into it. We then call the `len` method on `hash_map` and store the result in a variable called `hash_size`. Finally, we use `println!` to print the size of the hash map. The output will be:

```
The hash map size is 3
```

Note that the `len` method returns the number of key-value pairs in the hash map. If you want to get the actual size of the hash table (i.e. the number of buckets), you can use the `capacity` method instead.