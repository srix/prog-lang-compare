To get the directory path in Rust 1.55, you can use the `std::env::current_dir()` function.

Here's an example code snippet:

```rust
use std::env;

fn main() {
    let current_dir = env::current_dir().unwrap();
    println!("Current directory: {:?}", current_dir);
}
```

This will print the current directory path as a `PathBuf` object. 

You can also convert this `PathBuf` object to a string using the `.to_str()` method like this:

```rust
use std::env;

fn main() {
    let current_dir = env::current_dir().unwrap();
    println!("Current directory: {}", current_dir.to_str().unwrap());
}
```

This will print the current directory path as a string.