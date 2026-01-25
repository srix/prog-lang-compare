The `break` keyword in Rust is used to abruptly terminate loops. When the `break` keyword is executed inside a loop, the loop immediately terminates its execution and control is transferred to the next statement after the loop.

Here are some examples:

```rust
// Example 1: Using break to find the first even number in a range

fn main() {
    let mut i = 0;
    while i <= 10 {
        if i % 2 == 0 {
            println!("First even number in range: {}", i);
            break;
        }
        i += 1;
    }
}
```

In this example, the `while` loop iterates over a range of numbers from 0 to 10. The `if` condition checks if the current number is even or not. If the number is even, it prints the message and breaks out of the loop, thereby finding the first even number in the range.

```rust
// Example 2: Using break to terminate an infinite loop

fn main() {
    let mut i = 0;
    loop {
        if i >= 10 {
            break;
        }
        println!("Number: {}", i);
        i += 1;
    }
}
```

In this example, the `loop` creates an infinite loop. The `if` condition checks if the current number is greater than or equal to 10. If the condition is true, it breaks out of the loop and the program continues to execute the statements after the loop. Therefore, the loop prints all the numbers from 0 to 9 and then terminates.

These are just some simple examples of using `break` in Rust. It's a commonly used keyword when working with loops and conditionals in Rust programming.