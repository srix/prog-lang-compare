In Rust, static methods are defined using the `impl` block on the class/struct, and the `impl` block is associated with the name of the class/struct. The `impl` block includes all the methods that we want to define for that particular class/struct.

Here's an example of defining a static method in Rust 1.55:

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    // defining a static method that returns a new instance of Rectangle struct
    fn new(width: u32, height: u32) -> Rectangle {
        Rectangle { width, height }
    }
}

fn main() {
    // calling the static method to create a new instance of Rectangle struct
    let rect = Rectangle::new(10, 20);
}
```

Here, we are defining a `struct` called `Rectangle` and defining a `new` static method inside `impl Rectangle`. The `new` method takes in two arguments `width` and `height`, creates a new instance of the `Rectangle` struct with the given dimensions, and returns it.

To call the static method, we use the syntax `Rectangle::new(10, 20)` and store the returned instance in the `rect` variable.

You can also call a static method directly on the struct, like this:

```rust
let rect = Rectangle::new(10, 20);
```

This creates a new `Rectangle` instance with the given dimensions and stores it in the `rect` variable.