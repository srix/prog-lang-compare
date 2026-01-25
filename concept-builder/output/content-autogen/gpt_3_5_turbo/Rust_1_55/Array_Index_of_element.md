In Rust, you can get the index of an element in an array by using the `iter()` method and the `position()` method. The `iter()` method returns an iterator over the elements of an array, while the `position()` method returns the position of the first element that satisfies a given predicate.

Here's an example code snippet to demonstrate getting the index of an element in an array in Rust 1.55:

```rust
fn main() {
    let fruits = ["apple", "banana", "orange", "grape", "pear"];

    // Find the position of "orange" in the array
    let position = fruits.iter().position(|&x| x == "orange");

    match position {
        Some(i) => println!("The index of 'orange' is: {}", i),
        None => println!("'orange' is not in the array."),
    }
}
```

In this example, the `fruits` array contains five elements. We use the `iter()` method to create an iterator over the elements of the `fruits` array and then use the `position()` method to find the position of the element that matches the string "orange". The `position()` method returns an `Option<usize>` value, which represents the position of the element if it is found in the array, and `None` if it is not found.

We then use a `match` statement to pattern match on the `Option<usize>` value and print out the index if it is found, or a message if it is not found.

If you run this code, the output will be:

```
The index of 'orange' is: 2
``` 

which indicates that "orange" is at position 2 in the `fruits` array.