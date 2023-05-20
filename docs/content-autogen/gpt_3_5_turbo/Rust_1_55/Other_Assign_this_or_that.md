In Rust 1.55, the `if-else` expression can be used to assign either `this` value or `that` value, depending on a condition. Here's an example:

```rust
let condition = true;
let result = if condition {
    "this"
} else {
    "that"
};
println!("{}", result);
```

In this example, the variable `condition` is set to `true`, which means the `if` block will be executed. The `if` block returns the string `"this"`, which is then assigned to the variable `result`.

If `condition` was instead set to `false`, the `else` block would be executed, and the string `"that"` would be assigned to `result`.

This syntax can also be used with more complex expressions. Here's an example of using the `if-else` expression to assign a value based on the length of a vector:

```rust
let numbers = vec![1, 2, 3];
let result = if numbers.len() > 2 {
    "long"
} else {
    "short"
};
println!("{}", result);
```

In this example, the `if` block will be executed if the length of the `numbers` vector is greater than 2. If it is, the string `"long"` will be assigned to `result`. Otherwise, the string `"short"` will be assigned to `result`.