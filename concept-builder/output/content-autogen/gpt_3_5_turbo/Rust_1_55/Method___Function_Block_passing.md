Block passing is a feature in Rust 1.55 that allows one to pass a block of code as an argument to a function. This can be useful when you want to pass a block of code that needs to be executed later. It is syntax sugar for closures.

Here's an example:

```rust
fn main() {
    let res = print_message(|| {
        println!("Hello, world!");
    });
}

fn print_message<F: FnOnce() -> R, R>(f: F) -> R {
    f()
}
```

In this example, we define a function called `print_message` that takes a closure as an argument. The `||` syntax is used to define a closure with no arguments. We then pass this closure as an argument to the `print_message` function.

When `print_message` is called, it executes the closure and returns its result. In this case, the closure simply prints a message to the console. 

Block passing is also useful when working with asynchronous code. Here's an example:

```rust
async fn do_something<F: FnOnce() -> R, R>(f: F) -> R {
    f()
}

async fn main() {
    let res = do_something(|| {
        async {
            // Perform some asynchronous operation here
        }
    }).await;
}
```

In this example, we define an `async` function called `do_something` that takes a closure as an argument. The closure contains an `async` block that performs some asynchronous operation.

When `do_something` is called, it executes the closure and returns its result. We then `await` the result in `main`. 

In summary, block passing is a useful feature in Rust 1.55 that allows one to pass a block of code as an argument to a function. It can be used for both synchronous and asynchronous code and is helpful in cases where you need to execute a block of code later.