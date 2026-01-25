Ternary operators are useful when we want to assign a value to a variable based on a condition.

In Rust, we can use the ternary operator by using the following syntax:

```
<condition> ? <value if true> : <value if false>
```

Here, the `<condition>` is the Boolean expression that we want to check. If the condition is true, the `<value if true>` is returned, otherwise `<value if false>` is returned.

For example:

```rust
fn main() {
    let x = 5;
    let y = if x > 0 { "positive" } else { "negative" };
    println!("The number is {}", y);

    let is_even = if x % 2 == 0 { true } else { false };
    let result = is_even ? "even" : "odd";
    println!("The number is {}", result);
}
```

The output of this code will be:

```
The number is positive
The number is odd
```

In the first example, we use the `if` statement to assign the value of `y` based on whether `x` is positive or negative.

In the second example, we use the ternary operator to assign the value of `result` based on whether `x` is even or odd. We first check whether `x` is even, then assign the appropriate string value to `result`.