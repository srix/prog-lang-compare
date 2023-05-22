In Scala, the `if` statement can also be used as an expression that returns a value. This is referred to as an `if-else` expression, which can be used for conditional assignment using the `val` keyword.

Here's an example:

```scala
// Assigning a value based on a condition
val x = if (2 + 2 == 4) 42 else 0

// Printing the value of x
println(x)
```

In this example, the `if` condition checks whether `2 + 2` is equal to `4`. If this condition is true, then the value of `x` is assigned to `42`. Otherwise, the value of `x` is assigned to `0`. Finally, the value of `x` is printed.

We can also use the `if` statement as an expression in a block of code. Here's an example:

```scala
// Conditional assignment using if expression in a block
val y =
  if (2 + 2 == 4) {
    // block of code
    val z = 42
    z * 2
  } else {
    // block of code
    val z = 0
    z * 2
  }

// Printing the value of y
println(y)
```

In this example, the `if` condition checks whether `2 + 2` is equal to `4`. If this condition is true, then a block of code is executed, which includes the assignment of `z` to `42`. The value of `z` multiplied by `2` is returned and assigned to `y`. Otherwise, a different block of code is executed, which includes the assignment of `z` to `0`. The value of `z` multiplied by `2` is returned and assigned to `y`. Finally, the value of `y` is printed.