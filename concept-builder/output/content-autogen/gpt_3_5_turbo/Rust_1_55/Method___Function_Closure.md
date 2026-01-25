Closure in Rust can be defined as an anonymous function that can capture the environment variables in its surrounding scope. This means it can access all the variable and functions declared outside the closure function, even after the parent function has returned.

To use closure in Rust 1.55, you can declare it using the `||` syntax. Here's an example:

```rust
let name = "John";
let age = 30;

let details = || {
    println!("Name: {}", name); // Accessing "name" variable from parent function
    println!("Age: {}", age);  // Accessing "age" variable from parent function
};

details(); // Invoking the closure
```

In the above example, the closure `details` captures the `name` and `age` variables from its parent function. It then prints their values when invoked later.

We can also pass arguments to a closure, just like a regular function. Here's an example:

```rust
let add_numbers = |x: i32, y: i32| {
    x + y // Closure returns the sum of given numbers
};

let sum = add_numbers(5, 10); // Invoking the closure with arguments
println!("Sum is: {}", sum); // Output: Sum is: 15
```

In the above example, the closure `add_numbers` takes two `i32` integers, adds them, and returns their sum. We can invoke the closure just like a regular function by passing two integers as arguments.

Closure in Rust 1.55 can also be used as a callback function. For example:

```rust
fn process_data(data: Vec<i32>, callback: impl Fn(i32) -> i32) -> Vec<i32> {
    let mut results = Vec::new();

    for item in data {
        results.push(callback(item)); // Applying the closure to each item
    }

    results // Returning the results
}

let data = vec![1, 2, 3, 4, 5];

let doubled = process_data(data, |x| {
    x * 2 // Closure that doubles the given value
});

println!("Doubled data: {:?}", doubled); // Output: Doubled data: [2, 4, 6, 8, 10]
```

In the above example, the `process_data` function takes a `Vec<i32>` and a closure as arguments. The closure is applied to each item in the vector to transform it. Finally, the transformed data is returned and printed. Here, we're passing a closure that doubles the given value to `process_data` function.