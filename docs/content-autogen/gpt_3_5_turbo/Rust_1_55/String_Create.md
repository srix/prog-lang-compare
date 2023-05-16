To create a string in Rust, you can use the `String` type which represents a growable string. Here's an example of how to create a string in Rust:

```rust
// Create an empty string
let my_string = String::new();

// Create a string with initial value
let my_string = String::from("Hello, world!");

// Concatenate two strings
let hello = String::from("Hello, ");
let world = String::from("world!");
let my_string = hello + &world;

// Append a character to a string
let mut my_string = String::from("Hello");
my_string.push(' ');

// Append a string to a string
let mut my_string = String::from("Hello");
let world = String::from(", world!");
my_string.push_str(&world);
```

In the code above, we create a string `my_string` with different methods. First, we create an empty `String` with `String::new()`. Second, we create a string with an initial value using `String::from()`. Third, we concatenate two strings using the `+` operator. Note that we need to use `&world` to get a reference to the second string because the `+` operator takes ownership of the first string. Fourth, we append a character to a string using the `push()` method. And fifth, we append a string to a string using the `push_str()` method.