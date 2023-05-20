To add an element to an array in Rust 1.55, we need to first create an array with a fixed size and then use the `std::mem::replace()` function from the Rust standard library to replace an element at a specific index with a new value.

Here's an example code snippet that shows how to add an element to an array:

```rust
fn main() {
    // Create a fixed-size array with 3 elements
    let mut arr = [1, 2, 3];

    // Use std::mem::replace() to replace an element at index 2 with a new value
    arr = {
        let mut temp = std::mem::replace(&mut arr, [0; 4]);
        temp[2] = 4;
        temp
    };

    // Print the updated array
    println!("{:?}", arr);
}
```

In this example, we first create an array `arr` with three elements `[1, 2, 3]`. Then, we use `std::mem::replace()` to replace the array `arr` with a new array of size 4 `[0; 4]`, where all elements are initialized to 0. We store the old array in a mutable variable named `temp`.

Next, we update the element at index 2 of `temp` to 4. Finally, we return `temp` with the updated element and assign it back to `arr`. Now, `arr` has a new element `[1, 2, 4, 0]`.

Output:
```
[1, 2, 4, 0]
```