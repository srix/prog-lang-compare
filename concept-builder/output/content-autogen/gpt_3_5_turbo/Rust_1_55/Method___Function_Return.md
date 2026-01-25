In Rust, we use the `return` keyword to return a value from a method or function.

Here's an example function that takes two integers as input and returns their sum:

```rust
fn add(a: i32, b: i32) -> i32 {
    let sum = a + b;
    return sum;
}
```

In this example, the `add()` function takes two arguments `a` and `b`, both of type `i32` (32-bit integer). Inside the function, we create a new variable `sum` by adding `a` and `b` together.

Finally, we use the `return` keyword to return the value of `sum` back to the caller.

To call this function and get the result, we can use the following code:

```rust
fn main() {
    let result = add(10, 20);
    println!("Result: {}", result); // Output: Result: 30
}
```

This code declares a new variable `result` and assigns to it the value returned by calling the `add()` function with arguments `10` and `20`. We then use `println!()` macro to display the result.

We can also omit the `return` keyword and let Rust implicitly return the value of the last expression in a function:

```rust
fn subtract(a: i32, b: i32) -> i32 {
    let difference = a - b;
    difference // Implicit return
}
```

Here, `subtract()` function takes two arguments `a` and `b`, both of type `i32`. Inside the function, we create a new variable `difference` by subtracting `b` from `a`.

We don't need to use `return` keyword in this case because the last line of the function `difference` is an expression that Rust implicitly returns the value of.

To call this function and get the result, we can use the following code:

```rust
fn main() {
    let result = subtract(30, 12);
    println!("Result: {}", result); // Output: Result: 18
}
```

This code declares a new variable `result` and assigns to it the value returned by calling the `subtract()` function with arguments `30` and `12`. We then use `println!()` macro to display the result.