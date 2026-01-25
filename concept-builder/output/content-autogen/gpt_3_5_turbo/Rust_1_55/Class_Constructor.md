In Rust, constructors are known as `associated functions`. They are used to create new instances of a struct or an enum. To define an associated function in Rust, you use the `impl` block and the `::new` notation. Here's an example of a simple struct named `Rectangle`:

```
struct Rectangle {
    length: u32,
    width: u32,
}
```

To create a constructor for this struct, you need to define an associated function that returns a new instance of the struct. Here's an example of a constructor for the `Rectangle` struct:

```
impl Rectangle {
    fn new(length: u32, width: u32) -> Rectangle {
        Rectangle {
            length,
            width
        }
    }
}
```

In the above example, `new` is the name of the associated function. It takes two parameters `length` and `width`, both of type `u32`. The function then creates and returns a new instance of the `Rectangle` struct.

To use the constructor, you can call it like this:

```
let rect = Rectangle::new(10, 20);
```

This will create a new instance of the `Rectangle` struct with a `length` of 10 and a `width` of 20.

Here's another example that demonstrates the use of constructors with an enum:

```
enum Color {
    Red(u8, u8, u8),
    Green(u8, u8, u8),
    Blue(u8, u8, u8),
}

impl Color {
    fn new_red(r: u8, g: u8, b: u8) -> Color {
        Color::Red(r, g, b)
    }
    
    fn new_green(r: u8, g: u8, b: u8) -> Color {
        Color::Green(r, g, b)
    }
    
    fn new_blue(r: u8, g: u8, b: u8) -> Color {
        Color::Blue(r, g, b)
    }
}
```

In the above example, `Color` is an enum with three variants: `Red`, `Green`, and `Blue`. Each variant takes three parameters of type `u8`, representing the RGB values for the corresponding color. The `Color` struct also has three associated functions that serve as constructors for the `Red`, `Green`, and `Blue` variants. These constructors simply create a new instance of the `Color` enum and return it with the appropriate variant.

You can use these constructors like this:

```
let red = Color::new_red(255, 0, 0);
let green = Color::new_green(0, 255, 0);
let blue = Color::new_blue(0, 0, 255);
```

Each of these calls creates a new instance of the `Color` enum with the appropriate variant and RGB values.