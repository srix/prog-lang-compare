In Rust 1.55, you can find the first element of an array using indexing. 

Here is an example:

```rust
fn main() {
    let numbers = [1, 2, 3, 4, 5];
    let first_number = numbers[0];
    println!("The first number is {}", first_number);
}
```

Output:
```
The first number is 1
```

In this example, we create an array called `numbers` with five elements. To find the first element, we use indexing, which is done by writing the name of the array followed by the index of the element we want to access inside square brackets.

Since Rust arrays are zero-indexed, the first element of the array has an index of 0. So to find the first element of the `numbers` array, we use the index `0`.

We then assign the value of the first element to a variable called `first_number`, and print it to the console using `println!()`.