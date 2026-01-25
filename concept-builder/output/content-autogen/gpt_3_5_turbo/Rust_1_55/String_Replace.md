To replace a substring within a string in Rust 1.55, you can use the `replace` method. This method takes two arguments as strings: the substring to be replaced and the replacement substring. Here's an example:

```rust
let mut my_string = String::from("Hello, world!");
let new_string = my_string.replace("world", "Rust");
println!("{}", new_string);
```

In the above example, we create a `String` variable called `my_string` with the value `"Hello, world!"`. We then use the `replace` method to replace the substring `"world"` with `"Rust"`, and store the result in a new `String` variable called `new_string`. Finally, we print the value of the new string, which should be `"Hello, Rust!"`.

Here's another example, where we replace all occurrences of a substring within a string:

```rust
let mut my_string = String::from("The quick brown fox jumps over the lazy dog.");
let new_string = my_string.replace("the", "a");
println!("{}", new_string);
```

In this example, we replace all occurrences of the substring `"the"` with `"a"`. The resulting string should be `"The quick brown fox jumps over a lazy dog."`.

Using the `replace` method is an easy and efficient way to replace substrings within a larger string in Rust.