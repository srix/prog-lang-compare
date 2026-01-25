In Rust 1.55, the `sqrt()` function is available in the standard library, which allows you to calculate the square root of a number. 

Here's an example of how to use `sqrt()`:

```rust
fn main() {
    let num: f64 = 16.0;
    let sqrt_num = num.sqrt();
    println!("The square root of {} is {}", num, sqrt_num);
}
```

In this example, `num` is a variable of type `f64` that holds the number we want to calculate the square root of. The `sqrt()` function is called on the `num` variable, and the result is stored in the `sqrt_num` variable. Finally, the `println!()` macro is used to print the original number and its square root.

The output of this code will be:

```
The square root of 16 is 4
```

You can also use the `sqrt()` function with other numeric types such as `u32`, `i64`, etc. For example:

```rust
fn main() {
    let num: u32 = 36;
    let sqrt_num = (num as f64).sqrt();
    println!("The square root of {} is {}", num, sqrt_num);
}
```

In this example, `num` is a variable of type `u32` that holds the number we want to calculate the square root of. However, since `sqrt()` only works with floating-point numbers, we need to convert `num` to a `f64` using the `as` keyword. The result of `sqrt()` is stored in the `sqrt_num` variable and printed using the `println!()` macro.

The output of this example will be:

```
The square root of 36 is 6
```