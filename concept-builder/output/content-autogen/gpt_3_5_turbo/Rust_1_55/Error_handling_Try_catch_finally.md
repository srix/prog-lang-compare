In Rust, the `try` keyword is used to handle errors in a manner similar to `try/catch` in other programming languages. The basic syntax for using `try` is as follows:

```rust
fn main() -> Result<(), String> {
    let result = some_function()?;
    println!("Result is {:?}", result);
    Ok(())
}
```

Here, `some_function()` returns a `Result` type, which can be either `Ok` or `Err`. If `Ok`, the function returns the result. If `Err`, the `?` operator returns the `Err` variant and the code inside the `main()` function does not execute.

The `try` keyword can also be used with `match` statements to handle specific error types, in the following way:

```rust
fn main() -> Result<(), String> {
    let result = some_function()?;

    match result {
        Ok(val) => println!("The result is {}", val),
        Err(err) => eprintln!("Error occurred: {:?}", err),
    }

    Ok(())
}
```

If `some_function()` returns `Ok`, the code inside the `Ok` branch will be executed. Otherwise, the code inside the `Err` branch will be executed, allowing you to handle the specific error type.

`finally` blocks are not available in Rust, but you can approximate the same behavior using the `std::mem::drop` function. For example:

```rust
fn main() -> Result<(), String> {
    let file = std::fs::File::open("file.txt").map_err(|err| err.to_string())?;
    let _guard = FileGuard { file };

    // Do something with the file...

    Ok(())
}

struct FileGuard {
    file: std::fs::File,
}

impl Drop for FileGuard {
    fn drop(&mut self) {
        println!("Closing file...");
        std::mem::drop(&mut self.file);
    }
}
```

Here, `FileGuard` is a struct with a `std::fs::File` member, which is taken as an argument in its `Drop` implementation. When `FileGuard` goes out of scope, its `Drop` implementation is invoked, which calls `std::mem::drop` on the file, closing it. This pattern can be used to approximate the behavior of a `finally` block.