In Swift, `if` and `else` statements are used to make decisions based on certain conditions. The syntax for `if` statement is:

```
if condition {
    // Code to execute if condition is true    
}
```

If the condition in the `if` statement is true, the code inside the block will be executed. If the condition is false, the code block will be skipped.

Here is an example:

```
let x = 10

if x > 5 {
    print("x is greater than 5")
}
```

In this example, `x` is set to `10`. The `if` statement checks if `x` is greater than `5`. Since `x` is indeed greater than `5`, the code inside the block will be executed and the string `x is greater than 5` will be printed to the console.

You can also include an `else` block to provide an alternative instruction when the condition is not met. The syntax for `if/else` statement in Swift is:

```
if condition {
    // Code to execute if condition is true    
} else {
    // Code to execute if condition is false
}
```

Here is an example:

```
let y = 3

if y > 5 {
    print("y is greater than 5")
} else {
    print("y is less than or equal to 5")
}
```

In this example, `y` is set to `3`. The `if` statement checks if `y` is greater than `5`. Since `y` is less than `5`, the code inside the `else` block will be executed and the string `y is less than or equal to 5` will be printed to the console.