In Rust, inheritance is implemented using trait objects. A trait is a collection of methods that define a certain behavior. A trait object is a reference or a pointer to an instance of a type that implements a certain trait.

To create a trait, use the `trait` keyword followed by the trait name and its methods. For example:

```rust
trait Drawable {
    fn draw(&self);
}
```

This defines a trait called `Drawable` that has a single method `draw()`.

To implement this trait for a struct, use the `impl` keyword followed by the trait name and its implementation. For example:

```rust
struct Circle {
    x: f64,
    y: f64,
    radius: f64,
}

impl Drawable for Circle {
    fn draw(&self) {
        // drawing code here...
    }
}
```

This implements the `Drawable` trait for the `Circle` struct, and provides an implementation for the `draw()` method.

To use inheritance in Rust, we can create a new trait that inherits from another trait using the `: ParentTrait` syntax. For example:

```rust
trait HasArea: Drawable {
    fn area(&self) -> f64;
}
```

This defines a new trait called `HasArea` that inherits from `Drawable` and adds a new method `area()`. Any type that implements `HasArea` must also implement `Drawable`.

To implement this new trait, we can use the `impl` keyword followed by the trait name and its implementation:

```rust
impl HasArea for Circle {
    fn area(&self) -> f64 {
        3.14 * self.radius * self.radius
    }
}
```

This implements the `HasArea` trait for the `Circle` struct, and provides an implementation for the `area()` method.

Now we can create a vector of `Box<dyn Drawable>` trait objects and add a `Circle` object to it:

```rust
let mut shapes: Vec<Box<dyn Drawable>> = Vec::new();
let circle = Box::new(Circle {
    x: 0.0,
    y: 0.0,
    radius: 1.0,
});
shapes.push(circle);
```

We can then loop through the vector and call the `draw()` method on each object:

```rust
for shape in &shapes {
    shape.draw();
}
```

This will call the `draw()` method on the `Circle` object we added earlier.

Similarly, we can call the `area()` method on objects that implement the `HasArea` trait:

```rust
for shape in &shapes {
    if let Some(has_area) = shape.as_ref().downcast_ref::<dyn HasArea>() {
        println!("Area: {}", has_area.area());
    }
}
```

This will print the area of the `Circle` object we added earlier, as it implements the `HasArea` trait.