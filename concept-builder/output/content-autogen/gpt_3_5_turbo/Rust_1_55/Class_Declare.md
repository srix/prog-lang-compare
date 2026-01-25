In Rust, a class is called a struct. To declare a struct, you can use the `struct` keyword followed by the name of the struct and its properties inside curly braces.

Here is an example of how to declare a simple struct in Rust:

```rust
struct Person {
    name: String,
    age: u8,
    id_number: u32,
}
```

In this example, we declared a struct named `Person` with three properties: `name` of type `String`, `age` of type `u8`, and `id_number` of type `u32`.

To create an instance of this struct, we can use the `new` method like so:

```rust
let person = Person {
    name: String::from("John Doe"),
    age: 30,
    id_number: 1234567890,
};
```

This creates a new `Person` with the given values for each property.

You can also define methods for your struct by using the `impl` keyword like so:

```rust
impl Person {
    fn is_adult(&self) -> bool {
        self.age >= 18
    }
}
```

In this example, we defined a method named `is_adult` that takes a reference to `self` and returns a boolean indicating whether or not the person is an adult (age 18 or older).

You can use this method on a `Person` instance like so:

```rust
let person = Person {
    name: String::from("John Doe"),
    age: 30,
    id_number: 1234567890,
};

println!("{}", person.is_adult());
// Output: true
```