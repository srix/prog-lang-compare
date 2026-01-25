In Rust, `until` is not a keyword or reserved word. Instead, it can be emulated using a loop with a boolean condition, as follows:

```rust
fn main() {
    let mut num = 0;
    while num < 10 {
        println!("{}", num);
        num += 1;
    }
}
```

The above code produces output of numbers 0 through 9. 

Alternatively, if we want to execute a loop until a certain condition is true, we can use the `loop` keyword and `break` statement as follows:

```rust
fn main() {
    let mut num = 0;
    loop {
        if num >= 10 {
            break;
        }
        println!("{}", num);
        num += 1;
    }
}
```

The above code will also produce output of numbers 0 through 9, but uses a `loop` and `break` to achieve it. 

Note that the `loop` construct can be useful in situations where the condition to terminate the loop is more complex than a simple comparison.