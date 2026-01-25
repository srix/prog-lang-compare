To change all elements of an array in Rust 1.55, you can use a `for` loop or any other loop construct that iterates over the elements of the array. Here's an example using a `for` loop:

```rust
fn main() {
    let mut array = [1, 2, 3, 4, 5];
    
    for i in 0..array.len() {
        array[i] *= 2;
    }
    
    println!("{:?}", array); // Output: [2, 4, 6, 8, 10]
}
```

In this example, we first initialize an array `array` with some values using array literal syntax. Then, we use a `for` loop to iterate over the indices of the array from `0` to `array.len() - 1`. Inside the loop, we multiply the value at each index by `2`. Finally, we print the modified array using the `println!` macro.

Another way to change all elements of an array in Rust is to use the `iter_mut()` method and a closure:

```rust
fn main() {
    let mut array = [1, 2, 3, 4, 5];
    
    array.iter_mut().for_each(|x| *x *= 2);
    
    println!("{:?}", array); // Output: [2, 4, 6, 8, 10]
}
```

In this example, we call the `iter_mut()` method on the array to get an iterator over mutable references to its elements. We then use the `for_each()` method on the iterator and pass it a closure that multiplies each element by `2` using dereferencing (`*x`). Finally, we print the modified array using the `println!` macro.