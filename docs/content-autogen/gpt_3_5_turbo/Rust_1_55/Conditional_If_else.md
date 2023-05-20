In Rust 1.55, if/else statements are used to make decisions in your program based on certain conditions. The basic syntax for an if/else statement in Rust is as follows:

```rust
if condition {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}
```

Here's an example that demonstrates how to use if/else in Rust:

```rust
fn main() {
    let number = 10;

    if number > 0 {
        println!("The number is positive");
    } else if number < 0 {
        println!("The number is negative");
    } else {
        println!("The number is zero");
    }
}
```

In this example, we're testing whether the variable `number` is greater than, less than, or equal to zero, and printing out a message accordingly. If `number` is greater than zero, we'll print "The number is positive". If it's less than zero, we'll print "The number is negative". And if it's equal to zero, we'll print "The number is zero".

Another important aspect of if/else statements in Rust is that their conditions must be of type bool. That means you can't test the value of a string with an if/else statement, for example. Here's an example that shows how to do this:

```rust
fn main() {
    let name = "Alice";

    if name == "Alice" {
        println!("Hello, Alice!");
    } else if name == "Bob" {
        println!("Hello, Bob!");
    } else {
        println!("Hello, stranger!");
    }
}
```

In this example, we're testing whether the variable `name` contains the string "Alice", "Bob, or anything else. Here we are comparing string values in if / else statements. 

These are some basic examples of using if/else in Rust. You can use if/else statements in a wide variety of ways depending on the needs of your program.