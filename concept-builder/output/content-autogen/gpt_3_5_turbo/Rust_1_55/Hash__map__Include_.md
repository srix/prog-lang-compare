In Rust, you can check if a hash (also known as a hashmap) includes a key using the `contains_key` method. 

Here's an example:

```
use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    
    // Insert some key-value pairs
    map.insert("apple", 3);
    map.insert("banana", 2);
    map.insert("cherry", 5);
    
    // Check if the hash includes the key "banana"
    if map.contains_key("banana") {
        println!("The hash includes the key 'banana'");
    }
    
    // Check if the hash includes the key "pear"
    if !map.contains_key("pear") {
        println!("The hash does not include the key 'pear'");
    }
}
```

In this example, we create a `HashMap` and insert some key-value pairs. Then, we use `contains_key` to check if the hash includes the keys "banana" and "pear", and print a message accordingly. 

Note that `contains_key` returns a `bool` value indicating whether the key is present in the hash or not.