In Rust, you can run a command through the command line interface or directly from a Rust program.

To run a command in Rust via the command line interface, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the directory containing your Rust project.
3. Type `cargo run --` followed by the command you want to run. For example, if you want to run the `ls` command to list all files in the current directory, you would type `cargo run -- ls`. 

Here's an example of running the `ls` command in Rust 1.55 via the command line interface:

```
$ cargo run -- ls
    Finished dev [unoptimized + debuginfo] target(s) in 0.06s
     Running `ls`
Cargo.lock  Cargo.toml  src  target
```

Note that the `cargo run --` prefix is used to build and run the Rust program, and the `ls` command is passed as an argument to the Rust program.

To run a command directly from a Rust program, use the `std::process::Command` module. Here's an example of running the `ls` command via Rust code:

```rust
use std::process::Command;

fn main() {
    let output = Command::new("ls")
                    .output()
                    .expect("failed to execute command");

    println!("stdout: {}", String::from_utf8_lossy(&output.stdout));
    println!("stderr: {}", String::from_utf8_lossy(&output.stderr));
}
```

This code creates a `Command` object with the `ls` command, executes it, and stores the output in the `output` variable. The `String::from_utf8_lossy` function is used to print the output as a string. 

Running this code would produce output similar to the command line interface example:

```
stdout: Cargo.lock
Cargo.toml
src
target

stderr: 
```

Note that the `Command::new` method takes the command as a string argument, and the `output` method is used to run the command and capture its output. The `expect` method is used to handle any errors that may occur during command execution.