To remove part of a string in Rust, you can use the `replace()` function from the `std::string::String` module. Here is an example:

```rust
fn main() {
    let mut s = String::from("Hello, world!");

    // Remove a substring using the `replace()` function
    s.replace("world", "");

    println!("{}", s); // Output: "Hello, !"
}
```

In this example, we first create a `String` value containing the phrase "Hello, world!". We then use the `replace()` function to remove the word "world" from the string. We pass "world" as the first argument to `replace()`, and an empty string as the second argument. This tells Rust to find all occurrences of "world" in the string and replace them with an empty string.

When we print out the value of `s` after calling `replace()`, we can see that the word "world" has been removed, leaving us with the string "Hello, !".