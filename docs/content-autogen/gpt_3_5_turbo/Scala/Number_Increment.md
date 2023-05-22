In Scala, there are several ways to increment a number. Here are three examples:

1. Using the `+=` operator:
```
var num = 5
num += 1
println(num) // Outputs 6
```
Here, `+=` is a shorthand for `num = num + 1`. The `var` keyword declares `num` as a mutable variable that can be changed.

2. Using the `++` operator:
```
var num = 5
num++
println(num) // Outputs 6
```
The `++` operator increments the value of `num` by 1. This is also a shorthand for `num = num + 1`.

3. Using the `match` expression:
```
val num = 5
val incremented = num match {
  case x => x + 1
}
println(incremented) // Outputs 6
```
Here, we use a `match` expression to increment the value of `num`. The `case x => x + 1` part of the expression matches any value of `num` and returns it incremented by 1. The `val` keyword declares `incremented` as an immutable variable that cannot be changed.