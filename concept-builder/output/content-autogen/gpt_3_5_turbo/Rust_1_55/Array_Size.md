In Rust 1.55, you can get the size of an array using the `len()` method.

Here is an example code that shows how to get the size of an array in Rust:

```rust
fn main() {
    let arr = [1, 2, 3, 4, 5];
    let size = arr.len();
    println!("The size of the array is: {}", size);
}
```

In this example, we initialize an array of size 5, and then call the `len()` method on it to get its size. The `len()` method returns the number of elements in the array, which in this case is 5. We then print the size of the array to the console.

Output:
```
The size of the array is: 5
```

You can use the `len()` method on arrays of any type in Rust to get their size. Just replace `arr` with your array name in the example code above.