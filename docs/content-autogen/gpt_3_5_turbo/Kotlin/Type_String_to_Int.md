In Kotlin, you can use the `toInt()` function to convert a string to an integer. 

Here's an example:

```
fun main() {
  val stringNumber = "42"
  val intNumber = stringNumber.toInt()
  println(intNumber) // prints 42
}
```

In this example, we have a string variable called `stringNumber` that contains the value `"42"`. We then use the `toInt()` function to convert it to an integer and store the result in a variable called `intNumber`. Finally, we use `println()` to print the value of `intNumber` to the console.

An important thing to note is that if the string cannot be converted to an integer, a `NumberFormatException` will be thrown. 

```
fun main() {
  val stringNumber = "not a number"
  val intNumber = stringNumber.toInt() // throws NumberFormatException
  println(intNumber)
}
```

In this example, the string `"not a number"` cannot be converted to an integer, and so `toInt()` throws a `NumberFormatException`.