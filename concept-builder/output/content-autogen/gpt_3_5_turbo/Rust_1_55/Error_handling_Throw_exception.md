In Rust, throwing an exception is known as "panicking". Exceptions are thrown with the `panic!` macro. Here is an example of using `panic!` to raise an exception with a custom message:

```rust
fn main() {
    let x = 42;
    if x > 100 {
        panic!("Value of x is too high!");
    } else {
        println!("Value of x is {}", x);
    }
}
```

In this example, if the value of `x` is greater than `100`, the program will panic with the custom message `"Value of x is too high!"`. Otherwise, it will print the value of `x`.

You can also use `panic!` to raise exceptions without custom messages:

```rust
fn main() {
    let x: Option<i32> = None;
    let y = x.unwrap();
}
```

In this example, we attempt to unwrap a `None` value, which will result in a panic with the default error message `"called `Option::unwrap()` on a `None` value"`.

It's worth noting that panicking should be used sparingly in Rust, as it can make it difficult for other code to recover from errors. In general, it's better to use Rust's built-in error handling mechanisms (`Result` and `Option`) to handle errors in a more structured way, rather than relying on panicking.