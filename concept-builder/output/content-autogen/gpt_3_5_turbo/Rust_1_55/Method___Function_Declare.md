In Rust, methods and functions are declared using the `fn` keyword. Here's an example of how to declare a basic function that returns an integer:

```rust
fn add_numbers(a: i32, b: i32) -> i32 {
    return a + b;
}
```

This function is named `add_numbers` and takes two arguments, both of which are `i32` integers. The function returns the sum of the two integers which is also an `i32`.

Here's an example of how to declare a method in Rust:

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        return self.width * self.height;
    }
}
```

This method called `area` is defined within the `impl` block of the `Rectangle` struct. It takes a reference to `self` as an argument and calculates the area of the rectangle using its `width` and `height` fields. The method returns the area as a `u32`.

Note that Rust conventionally uses the snake_case naming convention for functions and methods. The arguments and return types of a function or a method must be declared in the function signature with the correct type. Finally, the return keyword is optional as Rust functions or methods can implicitly return the last expression in them.