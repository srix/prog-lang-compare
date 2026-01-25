In Rust, you can check whether a value is null/true/false using the following constructs:

1. To check if a value is null, you can use the Option<T> type which represents an optional value that can either be Some(T) or None. You can then check if the value is None using an "if let" statement.

Here's an example:

```rust
let mut x: Option<i32> = None;
if let Some(val) = x {
    // do something with val
} else {
    // handle the None case
}
```

In this example, we declare a mutable variable "x" of type Option<i32> and set it to None. We then use an "if let" statement to check whether "x" contains a value or not. If it contains a value, we bind the value to the variable "val" and execute the code block inside "if let". Otherwise, we execute the code block inside "else".

2. To check if a value is true or false, you can use a boolean expression in an "if" statement.

Here's an example:

```rust
let x: bool = true;
if x {
    // do something if x is true
} else {
    // do something if x is false
}
```

In this example, we declare a variable "x" of type bool and set it to true. We then use an "if" statement to check whether "x" is true or false. If it is true, we execute the code block inside "if". Otherwise, we execute the code block inside "else".