In Rust, `if` is used to create conditional expressions that evaluate to either true or false. The general syntax of the `if` statement is:

```
if condition {
    // code to execute if the condition is true
} else {
    // code to execute if the condition is false
}
```

Here's an example:

```
fn main() {
    let x = 10;
    if x == 10 {
        println!("x is equal to 10");
    } else {
        println!("x is not equal to 10");
    }
}
```

This code sets the variable `x` to 10 and then checks if `x` is equal to 10 using the `if` statement. If it is, the program prints "x is equal to 10". If it's not, the program prints "x is not equal to 10".

You can also use `if` statements as expressions, like this:

```
fn main() {
    let x = 10;
    let y = if x == 10 { 5 } else { 15 };
    println!("y is {}", y);
}
```

In this example, the `y` variable is assigned a value based on the result of the `if` statement. If `x` is equal to 10, `y` is assigned the value 5. Otherwise, `y` is assigned the value 15. The program then prints the value of `y`.

Keep in mind that Rust requires that you include parentheses around the condition, like this:

```
if (condition) {
    // code to execute if the condition is true
}
```

This helps make the code easier to read and understand.