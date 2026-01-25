In Rust, arrays are fixed-size collections of elements of the same type. However, you can create an array with different types by using the `Any` trait and dynamic dispatch.

Here's an example of how to create an array with different types in Rust 1.55:

```rust
use std::any::Any;

fn main() {
    let arr: [&dyn Any; 3] = [
        &1, 
        &"hello", 
        &vec![1, 2, 3]
    ];

    for element in arr.iter() {
        if let Some(int_value) = element.downcast_ref::<i32>() {
            println!("Found an integer: {}", int_value);
        } else if let Some(string_value) = element.downcast_ref::<&str>() {
            println!("Found a string: {}", string_value);
        } else if let Some(vec_value) = element.downcast_ref::<Vec<i32>>() {
            println!("Found a vector: {:?}", vec_value);
        }
    }
}
```

In this example, we create an array named `arr` with a length of 3. Instead of specifying the element type explicitly, we use the `&dyn Any` type, which means that each element of the array is a reference to an object that implements the `Any` trait. We then initialize the array with three elements of different types: an integer, a string, and a vector.

To access the elements of the array, we use a `for` loop to iterate over the elements in the array. We then use the `downcast_ref()` method of each element to check its type and assign it to a variable of the appropriate type. If the element cannot be downcast to any of the specified types, the `if let` conditions will fail and we will not get any output.

Note that using arrays with different types violates Rust's type safety guarantees and can lead to runtime errors if care is not taken to ensure that each element is of the expected type. Therefore, it is generally recommended to use Rust's strongly-typed data structures whenever possible.