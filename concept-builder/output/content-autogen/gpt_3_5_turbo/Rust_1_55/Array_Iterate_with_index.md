To iterate over an array with index in Rust 1.55, you can use the `iter()` method and the `enumerate()` method.

Here's an example:

```rust
fn main() {
    let a = [10, 20, 30];

    for (index, value) in a.iter().enumerate() {
        println!("a[{}] = {}", index, value);
    }
}
```

In this example, we're iterating over the array `a` with the `iter()` method. The `enumerate()` method returns an iterator that yields tuples containing the index and the value of each item in the array. We're using a `for` loop to loop over the iterator and print out each tuple.

The output of this program would be:

```
a[0] = 10
a[1] = 20
a[2] = 30
```

You can also use pattern matching to unpack the values from the tuple:

```rust
fn main() {
    let a = [10, 20, 30];

    for (index, &value) in a.iter().enumerate() {
        println!("a[{}] = {}", index, value);
    }
}
```

In this example, we're using pattern matching to bind the value of each tuple to the variable `value`. We're using the `&` operator to create a reference to the value, so we can avoid copying the value. The output of this program would be the same as the previous example.