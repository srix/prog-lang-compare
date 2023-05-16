String interpolation in Rust is done using the `format!()` macro. The syntax for string interpolation is similar to other programming languages, with curly braces `{}` used to indicate where the interpolated values should be placed.

Here is the basic syntax of the `format!()` macro:

```rust
let string = format!("My name is {} and I am {} years old", name, age);
```

In this example, the `{}` characters within the string represent placeholders for variables. When the `format!()` macro is executed, the variables are substituted into the placeholders, and the resulting string is returned.

Here's a simple example that demonstrates string interpolation in Rust:

```rust
let name = "John";
let age = 42;

let message = format!("My name is {} and I am {} years old", name, age);

println!("{}", message); // Output: My name is John and I am 42 years old
```

In this example, the values of the `name` and `age` variables are interpolated into the string using the `format!()` macro. The resulting string is stored in the `message` variable and printed to the console using the `println!()` macro.

The `format!()` macro also supports named placeholders, which can make the code more readable and maintainable. Here's an example that demonstrates named placeholders:

```rust
let person = ("John", 42);

let message = format!("My name is {name} and I am {age} years old", name=person.0, age=person.1);

println!("{}", message); // Output: My name is John and I am 42 years old
```

In this example, we use tuple to store name and age. The `name` and `age` values are passed in as named arguments to the `format!()` macro, making the code more readable.

That's how string interpolation in Rust works with the `format!()` macro.