In Scala, Boolean is a datatype that can have one of two possible values, either true or false. It is used to represent logical expressions and decision-making in a program. Here are some examples of how to use Boolean in Scala:

Example 1: Initializing a Boolean variable

```scala
val x: Boolean = true
val y: Boolean = false
```

Example 2: Using Boolean operators

```scala
val x: Boolean = true
val y: Boolean = false

// Logical AND operator
val z1 = x && y // false

// Logical OR operator
val z2 = x || y // true

// Logical NOT operator
val z3 = !x // false
```

Example 3: Comparing Boolean values

```scala
val x: Boolean = true
val y: Boolean = false

// Equal operator
val z1 = x == y // false

// Not-equal operator
val z2 = x != y // true
```

Example 4: Using Boolean values in If-else statements

```scala
val x: Boolean = true

if (x) {
  println("Value of x is true")
} else {
  println("Value of x is false")
}
```
Output: `Value of x is true`

These are some basic examples of using Boolean in Scala. Boolean values are often used for decision-making and logical operations in a program.