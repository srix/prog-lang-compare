In Rust, multiple arguments can be passed to a method or function using the syntax `(arg1: type1, arg2: type2, ...)`. Here's an example of how to define a simple function that takes two arguments of type `i32` and returns their sum:

```rust
fn add_numbers(x: i32, y: i32) -> i32 {
    x + y
}
```

In this example, the function `add_numbers` takes two arguments of type `i32` called `x` and `y` and returns their sum as an `i32`.

To call this function with specific values, you would simply pass in the arguments in the correct order:

```rust
let result = add_numbers(3, 5);
```

In this case, the call to `add_numbers` with arguments `3` and `5` would return `8`, which would be stored in the variable `result`.

Here's another example that shows a function that takes two arguments: a `&str` and an `i32`:

```rust
fn print_message(message: &str, count: i32) {
    for i in 0..count {
        println!("{}. {}", i + 1, message);
    }
}
```

In this example, the function `print_message` takes two arguments: a `&str` called `message` and an `i32` called `count`. The function then prints the `message` `count` number of times.

To call this function with a specific message and count, you could do the following:

```rust
print_message("Hello, world!", 3);
```

This would output:

```
1. Hello, world!
2. Hello, world!
3. Hello, world!
```

In summary, in Rust, you can define functions that take multiple arguments and then call these functions by passing in the correct number and types of arguments.