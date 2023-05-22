In Scala, the `unless` keyword is not a built-in construct of the language. However, it can be created using a combination of the `if` and `!` (logical NOT) operators.

Here's an example of using `unless` in Scala:

```scala
val x = 10

if (!(x % 2 == 0)) {
  println("x is odd")
}

// The above code is equivalent to:
unless (x % 2 == 0) {
  println("x is odd")
}
```

In this example, we first check if `x` is odd using the `%` (modulo) operator to get the remainder when `x` is divided by `2`, and then negate the result using the `!` operator. If the expression is true (i.e., `x` is odd), we print a message to the console.

The `unless` statement in the second half of the code has the same effect as the `if` statement, except that it reads more naturally. However, this requires defining the `unless` function as follows:

```scala
def unless(condition: => Boolean)(codeBlock: => Unit) = {
  if (!condition) codeBlock
}
```

With this code, you can use `unless` as a regular function that takes a condition and a code block.