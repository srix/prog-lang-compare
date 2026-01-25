In Rust, iterating over a hash (or HashMap) is done using its `iter()` method, which returns an iterator of key-value pairs. Here's an example:

```rust
use std::collections::HashMap;

fn main() {
    let mut scores = HashMap::new();
    scores.insert("Alice", 92);
    scores.insert("Bob", 85);
    scores.insert("Charlie", 78);
    
    for (key, value) in &scores {
        println!("{}: {}", key, value);
    }
}
```

In this example, we first create a new HashMap called `scores` and insert three key-value pairs into it. Then we use a `for` loop to iterate over the HashMap using the `&scores` reference, which allows us to borrow the HashMap immutably.

Inside the loop, we use pattern matching to destructure each key-value pair into its constituent parts: `key` and `value`. We then print these values to the console using `println!()`.

The output of this program should be:

```
Alice: 92
Charlie: 78
Bob: 85
```

Note that the order of the key-value pairs may be different than the order in which they were inserted into the HashMap, since the HashMap does not maintain any particular order.