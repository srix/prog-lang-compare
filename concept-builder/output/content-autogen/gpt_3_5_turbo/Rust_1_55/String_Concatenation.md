In Rust, you can concatenate strings using the `+` operator. Here's an example:

```rust
fn main() {
    let word1 = "Hello";
    let word2 = "World";

    let hello_world = word1.to_string() + " " + word2;

    println!("{}", hello_world);
}
```

In this example, we declare two variables `word1` and `word2`, both of which are string literals. We then concatenate them using the `+` operator, and store the result in a new variable called `hello_world`. Finally, we print out the contents of `hello_world`.

Alternatively, you can use the `format!()` macro to concatenate strings like this:

```rust
fn main() {
    let word1 = "Hello";
    let word2 = "World";

    let hello_world = format!("{} {}", word1, word2);

    println!("{}", hello_world);
}
```

In this example, we use the `format!()` macro to concatenate the strings. Inside the `format!()` macro, we specify the format string, followed by the variables we want to include in the string, separated by commas. The resulting string is stored in the `hello_world` variable, which we then print out.