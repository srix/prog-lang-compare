To get the first and last element of an array in Rust 1.55, you can use the `first()` and `last()` methods provided by the `iter()` function.

Here's an example:

```rust
fn main() {
    let arr = [1, 2, 3, 4, 5];
    let first = arr.iter().next(); // Get the first element
    let last = arr.iter().last(); // Get the last element
    println!("First element: {:?}", first);
    println!("Last element: {:?}", last);
}
```

This code will print:

```
First element: Some(1)
Last element: Some(5)
```

Note that `first()` and `last()` return an `Option` type, meaning that they will return `None` if the array is empty. Therefore, you should handle this case accordingly to avoid potential runtime errors.

Also note that the returned values are wrapped in an `Option` type, so you need to use the `unwrap()` method to actually get the value. Alternatively, you can use pattern matching or other methods to handle the `Option` type.