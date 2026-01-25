To return a value in Scala, you can use the `return` keyword or let the last statement of the block return the value.

Here is an example using `return` keyword:

```scala
def sum(a: Int, b: Int): Int = {
  val result = a + b
  return result
}
```

Here is an example without using `return` keyword:

```scala
def sum(a: Int, b: Int): Int = {
  a + b
}
```

You can call the `sum` function like this: 

```scala
val result = sum(2, 3)
println(result) // Output: 5
```

In both examples, the `sum` function returns the sum of two integers passed as arguments. The first one uses `return` keyword to explicitly return the value, while the second one lets the last statement of the block (which is the addition of `a` and `b`) implicitly return the value.