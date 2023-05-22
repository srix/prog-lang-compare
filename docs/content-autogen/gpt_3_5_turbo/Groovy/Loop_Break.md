In Groovy, the `break` statement is used to exit out of loops. It is commonly used with the `for` and `while` loops, and it terminates the loop immediately when the condition is met.

Here are some examples of how to use the break statement in Groovy:

1. Using `break` with a `for` loop:

```
for (i in 1..10) {
  if (i == 5) {
    break
  }
  println(i)
}
```

Output: 1 2 3 4

In this example, the loop will iterate from 1 to 10, but when the value of `i` becomes 5, the `break` statement is executed and the loop is terminated.

2. Using `break` with a `while` loop:

```
def i = 1

while (i <= 10) {
  if (i == 5) {
    break
  }
  println(i)
  i++
}
```

Output: 1 2 3 4

In this example, the loop will continue as long as the value of `i` is less than or equal to 10. However, when the value of `i` becomes 5, the `break` statement is executed and the loop is terminated.

3. Using `break` with a `switch` statement:

```
def x = 2

switch (x) {
  case 1:
    println("One")
    break
  case 2:
    println("Two")
    break
  default:
    println("Other")
}
```

Output: Two

In this example, the `switch` statement checks the value of `x`. When the value is 2, the `break` statement is executed and the code exits out of the `switch` statement.

Note that the `break` statement can also be used with nested loops. When used in a nested loop, `break` only terminates the inner loop and execution continues with the next iteration of the outer loop.