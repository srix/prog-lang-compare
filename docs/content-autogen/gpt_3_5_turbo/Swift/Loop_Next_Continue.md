`next` and `continue` are used in loops to skip the current iteration of a loop and move to the next. 

Here's an example of how to use `continue` in a `for` loop in Swift:

```
for i in 1...10 {
    if i % 2 == 0 {
        continue
    }
    print(i)
}
```

In this example, the loop will only print the odd numbers between 1 and 10. When the loop comes to an even `i` value, the `continue` statement is executed, causing the loop to immediately move on to the next iteration.

Here's an example of how to use `next` in a `while` loop in Swift:

```
var i = 0
while i < 10 {
    i += 1
    if i % 2 == 0 {
        next
    }
    print(i)
}
```

In this example, the loop will only print the odd numbers between 1 and 10. When the `if` statement evaluates to true, the `next` statement is executed, causing the loop to immediately move on to the next iteration.