In Rust, we can import another file using the `mod` keyword followed by the name of the file or the module we want to import. The file or module can be either a `*.rs` file or a directory containing an `mod.rs` file. 

Here's an example of importing a file named `helper.rs`: 

```
// main.rs
mod helper; // import helper.rs

fn main() {
    helper::say_hello(); // call function from helper.rs
}

// helper.rs
pub fn say_hello() {
    println!("Hello from helper!");
}
```

In the example above, we import the `helper.rs` file into the `main.rs` file using the `mod` keyword. We then call the exported function `say_hello()` from within `main()` by using the module name prefix with the function name.

In case we have a directory with an `mod.rs` file, we can use the following syntax:

```
// main.rs
mod helpers;

fn main() {
    helpers::print_message();
}

// helpers/mod.rs
pub fn print_message() {
    println!("This is a message from helpers!");
}
```

In this example, we have a `helpers` directory with an `mod.rs` file. We import the module into `main.rs` using the module name `helpers` and then call the exported function `print_message()` using the same syntax mentioned earlier.

It's worth noting that `mod` declarations obey the visibility rules just like any other Rust item. A module declared with `pub` can be accessed from other modules in the same crate, whereas a module declared without `pub` can only be accessed within the same module in which it is declared.