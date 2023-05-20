In Rust 1.55, we can use the `or_insert()` method of the `std::collections::HashMap` to assign a value if it doesn't already exist. 

Here's an example:

``` rust
use std::collections::HashMap;

// create a new hashmap
let mut my_map = HashMap::new();

// using or_insert() to assign a value if it doesn't already exist
my_map.entry("Key1").or_insert(10);
my_map.entry("Key2").or_insert(20);

// print the values
println!("Value of Key1: {:?}", my_map.get("Key1"));
println!("Value of Key2: {:?}", my_map.get("Key2"));
```

In this example, we create a new `HashMap` called `my_map`, and then use the `or_insert()` method to add values if the key doesn't already exist. We use the `entry()` method to get the value associated with a key. If the key doesn't exist, `or_insert()` inserts the given value into the map and returns a mutable reference to the value.

You can also use a closure with `or_insert()` to specify how to create the value if it doesn't exist. Here's an example:

``` rust
let mut my_map = HashMap::new();

// using closure with or_insert() to assign a value if it doesn't already exist
my_map.entry(3).or_insert_with(|| vec![1, 2, 3]);

// print the value
println!("Value: {:?}", my_map.get(&3));
```

In this example, we use the `or_insert_with()` method with a closure that returns a new `Vec` containing the values 1, 2, and 3. This closure is only called if the key doesn't already exist in the map.

I hope this helps! Let me know if you have any other questions.