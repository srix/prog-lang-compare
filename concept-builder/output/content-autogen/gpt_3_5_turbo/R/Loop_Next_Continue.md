In R, `next` and `continue` are used to skip certain iterations during a loop. The difference between `next` and `continue` is that `next` skips the current iteration while continuing with the next iteration in the loop, whereas `continue` stops the current iteration and goes on with the next one.

Here are some examples:

```
# Example 1: Using next to skip specific iterations in a for loop 
for (i in 1:10) {
  if (i %% 2 == 0) {    # if i is even number, skip the loop iteration
    next
  }
  print(i)
}
# Output: 1 3 5 7 9
```

In this example, we used `next` to skip the loop iteration for even numbers. The print statement is only executed for odd numbers.

```
# Example 2: Using continue to skip specific iterations in a while loop
i <- 0
while (i < 10) {
  i <- i + 1
  if (i %% 2 == 0) {  # if i is even number, skip the loop iteration
    next
  }
  print(i)
}
# Output: 1 3 5 7 9
```

In this example, we used `next` to skip the loop iteration for even numbers in a `while` loop.

```
# Example 3: Using continue to skip the current iteration in a for loop
for (i in 1:10) {
  if (i == 5) {    # if i is equal to 5, stop the current iteration
    next
  }
  print(i)
}
# Output: 1 2 3 4 6 7 8 9 10
```

In this example, we used `next` to skip the current iteration when `i` is 5. The loop continues with the next iteration.

```
# Example 4: Using break to exit the loop when a condition is met
for (i in 1:10) {
  if (i == 5) {    # if i is equal to 5, exit the loop
    break
  }
  print(i)
}
# Output: 1 2 3 4
```

In this example, we used `break` to exit the loop when `i` is 5. The loop terminates and the next line of code is executed.