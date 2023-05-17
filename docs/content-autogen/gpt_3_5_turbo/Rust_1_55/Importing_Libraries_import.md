In Rust, a library is a collection of reusable code that can be used in multiple programs. Importing libraries in Rust is done using the `use` keyword followed by the path to the library.

Here is an example of importing the standard `rand` library:

```rust
use rand::Rng;

fn main() {
    let mut rng = rand::thread_rng();
    let num = rng.gen_range(1, 11);
    println!("Random number between 1 and 10: {}", num);
}
```

In this example, we are using `rand::Rng` from the `rand` library to generate a random number between 1 and 10. To use the `gen_range` method, we also need to bring `thread_rng` into scope with `let mut rng = rand::thread_rng();`.

Another example is importing a custom library located in the same directory as our Rust file:

```rust
mod my_library;

use my_library::hello_world;

fn main() {
    hello_world();
}
```

In this example, we are importing the `hello_world` function from the `my_library` module. We first need to declare the module with `mod my_library;`, and then we can import and use the function with `use my_library::hello_world;`.

Overall, importing libraries in Rust is straightforward and flexible, allowing you to easily use external and internal code in your programs.