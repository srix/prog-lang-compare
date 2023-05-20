In Rust 1.55, you can get the first and last element of an array using indexing.

To get the first element of an array, you can use the index `[0]`. For example:

```rust
let array = [1, 2, 3, 4, 5];
let first_element = array[0];
println!("The first element is: {}", first_element);
```

This would output `The first element is: 1`.

To get the last element of an array, you can use the index `array.len() - 1`. For example:

```rust
let array = [1, 2, 3, 4, 5];
let last_element = array[array.len() - 1];
println!("The last element is: {}", last_element);
```

This would output `The last element is: 5`.

Alternatively, you can use the `first()` and `last()` methods available in Rust's standard library. For example:

```rust
let array = [1, 2, 3, 4, 5];
let first_element = array.first().unwrap();
let last_element = array.last().unwrap();
println!("The first element is: {}", first_element);
println!("The last element is: {}", last_element);
```

This would output:

```
The first element is: 1
The last element is: 5
```