In Rust 1.55, numbers can be compared using comparison operators. The comparison operators are:

- `<` (less than)
- `>` (greater than)
- `<=` (less than or equal to)
- `>=` (greater than or equal to)

Here are some examples of how to use these operators in Rust:

```
fn main() {
    let x = 10;
    let y = 5;
    
    // Less than
    if x < y {
        println!("x is less than y");
    }
    
    // Greater than
    if x > y {
        println!("x is greater than y");
    }
    
    // Less than or equal to
    if x <= y {
        println!("x is less than or equal to y");
    }
    
    // Greater than or equal to
    if x >= y {
        println!("x is greater than or equal to y");
    }
}
```

In this example, the `x` variable is set to `10` and the `y` variable is set to `5`. We then use the comparison operators to compare these two numbers.

The first `if` statement checks if `x` is less than `y`, which is not true, so it will not print anything.

The second `if` statement checks if `x` is greater than `y`, which is true, so it will print `x is greater than y`.

The third `if` statement checks if `x` is less than or equal to `y`, which is not true, so it will not print anything.

The fourth `if` statement checks if `x` is greater than or equal to `y`, which is true, so it will print `x is greater than or equal to y`.