Certainly!

In Rust, you can convert an integer to a string using the `to_string()` method which is available for all integer types. Here's an example:

```rust
let x: i32 = 123;
let y = x.to_string();
println!("{} is now a string: {}", x, y);
```

In this example, we first create an `i32` integer `x` with the value of `123`. We then call the `to_string()` method on `x` which returns a new `String` that contains the string representation of `x`. We store this new `String` in `y` and then print out both `x` and `y` using `println!()`.

You can do the same thing with other integer types such as `u32`, `i64`, and `u64`. Here's another example using a `u64`:

```rust
let my_number: u64 = 9876543210;
let my_string = my_number.to_string();
println!("Integer: {}\nString: {}", my_number, my_string);
```

In this example, we create a `u64` integer called `my_number` with the value of `9876543210`. We then convert it to a string using `my_number.to_string()`, store it in `my_string` and then print out both the integer and the string using `println!()`.