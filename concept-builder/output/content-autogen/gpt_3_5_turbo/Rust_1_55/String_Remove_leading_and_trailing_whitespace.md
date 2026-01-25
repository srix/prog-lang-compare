In Rust 1.55, to remove leading and trailing whitespaces from a string, you can use the `trim()` method that is available on any string slice or string type. `trim()` method returns a new string slice with leading and trailing spaces removed.

Here is an example:

```rust
fn main() {
    let my_string = "   Rust programming language is awesome!   ";
    let trimmed_string = my_string.trim();

    println!("Original string: {}", my_string);
    println!("Trimmed string:  {}", trimmed_string);
}
```

Output:
```
Original string:    Rust programming language is awesome!   
Trimmed string:  Rust programming language is awesome!
```

In this example, the `trim()` method is called on a string slice `my_string` that contains leading and trailing whitespaces. A new string slice `trimmed_string` is created by calling the `trim()` method on `my_string`, which removes the leading and trailing whitespaces. The original `my_string` remains unchanged.

Note that the `trim()` method only removes leading and trailing whitespaces. If there are other whitespace characters like tabs or newlines in the middle of the string, they will not be removed by the `trim()` method.