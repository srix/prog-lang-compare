In R, the `break` statement is used to terminate the execution of a loop in certain conditions. It can be used in both `for` loops and `while` loops.

Here are some examples:

Example 1: Using break in a for loop

```
for (i in 1:10) {
  if (i == 5) {
    break
  }
  print(i)
}
```
Output:
```
[1] 1
[1] 2
[1] 3
[1] 4
```

In this example, the `for` loop is set to iterate over the numbers 1 to 10. Inside the loop, there is an if statement that checks if the current value of `i` is equal to 5. If it is, the `break` statement is executed which causes the loop to terminate immediately. As a result, the loop only iterates up to 4 and the remaining iterations are skipped.

Example 2: Using break in a while loop

```
i <- 1

while (i <= 10) {
  if (i == 5) {
    break
  }
  print(i)
  i <- i + 1
}
```
Output:
```
[1] 1
[1] 2
[1] 3
[1] 4
```

This example shows how to use `break` in a `while` loop. Initially, the value of `i` is set to 1. As long as `i` is less than or equal to 10, the loop will continue to run. Inside the loop, an if statement checks if the current value of `i` is equal to 5. Once `i` equals 5, the `break` statement is executed and the loop immediately terminates. As a result, only the numbers 1 to 4 are printed.

In both examples, the `break` statement is used to terminate the loop prematurely based on a certain condition.