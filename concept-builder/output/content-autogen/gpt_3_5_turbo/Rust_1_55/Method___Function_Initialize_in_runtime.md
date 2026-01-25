In Rust, functions can be treated as first-class citizens, meaning they can be created, passed around and used like any other value. This means that methods and functions can be initialized at runtime, just like any other variable.

To initialize a method or function at runtime in Rust, we can use closures. Closures are functions that can capture variables from their surrounding environment and can be stored and executed at a later time. Here is an example of how to initialize a closure:

```rust
fn main() {
    let add = |a: i32, b: i32| -> i32 { a + b }; // closure taking two i32 arguments and returning an i32

    let result = add(3, 5);
    println!("The result is: {}", result);
}
```

In this example, we create a closure named `add` that takes two arguments of type `i32` and returns their sum as `i32`. We then call this closure and store the result in a variable named `result`. Finally, we print the result to the console using `println!` macro.

Another way to initialize a function at runtime is by using function pointers. Function pointers are a way to store the address of a function in a variable. Here is an example:

```rust
fn main() {
    let add = |a: i32, b: i32| -> i32 { a + b };
    let add_fn: fn(i32, i32) -> i32 = add; // storing closure in a function pointer

    let result = add_fn(3, 5);
    println!("The result is: {}", result);
}
```

In this example, we create a closure named `add` as before, and we then store its address in a function pointer named `add_fn`. We then call this function pointer and store the result in a variable named `result`. Finally, we print the result to the console.

These are two ways to initialize a method or function at runtime in Rust: using closures or function pointers. Both methods are powerful tools for building flexible and dynamic code in Rust.