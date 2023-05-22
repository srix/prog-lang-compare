In Scala, to check if a value is null, true or false, you can use the following methods:

1. isNull: This method is used to check if a given value is null.

Example:

```scala
val value: String = null

if (value == null) {
  println("Value is null")
} else {
  println("Value is not null")
}
```

The output will be "Value is null".

2. isTrue: This method is used to check if a given Boolean value is true.

Example:

```scala
val result: Boolean = true

if (result.isTrue) {
  println("Result is true")
} else {
  println("Result is false")
}
```

The output will be "Result is true".

3. isFalse: This method is used to check if a given Boolean value is false.

Example:

```scala
val result: Boolean = false

if (result.isFalse) {
  println("Result is false")
} else {
  println("Result is true")
}
```

The output will be "Result is false".