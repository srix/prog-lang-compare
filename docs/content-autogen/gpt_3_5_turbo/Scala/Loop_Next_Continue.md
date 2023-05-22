In Scala, `next` and `continue` are used as flow control commands inside loops to skip an iteration and move to the next one without executing the remaining statements in the current iteration. 

Here is an example of using `next` inside a `for` loop:

```
val numbers = Range(1, 10)
for (num <- numbers) {
  if (num == 5) {
    next // skip iteration if num equals 5
  }
  println(num) // will print all numbers except 5
}
```

In this example, the loop iterates over numbers from 1 to 9. When the value of `num` becomes 5, the `next` command is executed, which causes the loop to skip to the next iteration without executing the `println` statement, so "5" is not printed.

Here is an example of using `continue` inside a `while` loop:

```
var i = 0
while(i < 10) {
  i += 1
  if (i % 2 == 0) {
    continue // skip iteration if i is even
  }
  println(i) // will print only odd numbers
}
```

In this example, the loop increments the value of `i` in each iteration until it reaches 10. When `i` is even, the `continue` command is executed, which causes the loop to skip to the next iteration without executing the `println` statement, so only odd numbers are printed.