To get the value of a key in a hash in Rust 1.55, you can use the `get` method of the `HashMap` struct.

Here's an example code snippet to demonstrate how to use `get` method:

```rust
use std::collections::HashMap;

fn main() {
    let mut fruit_counts = HashMap::new();
    fruit_counts.insert("apple", 3);
    fruit_counts.insert("banana", 2);
    fruit_counts.insert("orange", 1);

    let count_of_apples = fruit_counts.get("apple");

    match count_of_apples {
        Some(count) => println!("Number of apples: {}", count),
        None => println!("There are no apples.")
    }
}
```

In the example above, we create a new `HashMap` called `fruit_counts` and insert some key-value pairs into it using the `insert` method. We then retrieve the value associated with the key `"apple"` using the `get` method and store it in the variable `count_of_apples`.

Since the `get` method returns an `Option<&V>` type, we use a `match` statement to handle both cases where the key is found and where it is not found. If the key is found, we print the value associated with it, otherwise, we print a message indicating that the key was not found.

Note that the `get` method returns a reference to the value associated with the key, so if you want to modify the value, you will need to use an appropriate reference. For example:

```rust
if let Some(count) = fruit_counts.get_mut("apple") {
    *count += 1;
}
``` 

In the code above, we use the `get_mut` method to get a mutable reference to the value associated with the key `"apple"`, and we then increment the value by one using the `*` operator to dereference the mutable reference.