In Rust language, `struct` is a way to define a custom data type that contains a set of named fields, relieving the programmer from the burden of dealing with multiple variables. In order to use `struct`, you have to define it first.

Here is an example of a simple `struct` definition:

```rust
struct Rectangle {
    width: u32,
    height: u32,
}
```

This defines a struct named `Rectangle` that has two fields: `width` and `height`, both of which are unsigned 32-bit integers (`u32`).

Once you have defined a struct, you can create instances of it, which are similar to objects in other languages. Here is an example of how to create an instance of the `Rectangle` struct:

```rust
let rect = Rectangle { width: 10, height: 20 };
```

This creates an instance of `Rectangle` called `rect`, with `width` set to 10 and `height` set to 20.

You can access the fields of a struct using dot notation, like this:

```rust
println!("The width of the rectangle is {}", rect.width);
```

This will output "The width of the rectangle is 10".

In addition to storing data, structs can also have methods associated with them. Here's an example of how to define a method for the `Rectangle` struct that calculates its area:

```rust
impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}
```

This defines a method called `area` that takes a reference to `self` (the instance of the struct) and returns the area of the rectangle (which is simply the product of its width and height).

You can call this method on an instance of the struct using dot notation, like this:

```rust
println!("The area of the rectangle is {}", rect.area());
```

This will output "The area of the rectangle is 200".

These are just a few examples of how to use `struct` in Rust. By defining custom data types, you can make your code more expressive and easier to work with.