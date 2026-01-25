`next` and `continue` are two control flow constructs in Rust, used to skip to the next iteration of a loop. 

`next` is used within a loop and it skips to the next iteration of the loop and continues execution from there. For example:

```rust
let mut count = 0;

loop {
    count += 1;
    if count == 5 {
        next; // Skip to the next iteration if the count is 5
    }
    println!("{}", count);
    if count == 10 {
        break;
    }
}
```

In this example, the loop will iterate from 1 to 10, but when `count` equals 5, the loop will execute `next;` and skip to the next iteration, so that 5 will not be printed.

`continue` is similar to `next`, but it is used inside a loop to skip a specific iteration based on a conditional. For example:

```rust
for i in 1..=10 {
    if i % 3 == 0 {
        continue; // Skip the iteration if i is divisible by 3
    }
    println!("{}", i);
}
```

In this example, the loop will iterate from 1 to 10, but any iteration where `i` is divisible by 3 will be skipped using `continue`. 

Both `next` and `continue` are helpful when you want to skip some values or processing in a loop based on certain conditions.