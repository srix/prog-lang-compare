In Scala, you can check if a string is a number using the `toInt`, `toDouble`, or `toLong` methods. These methods are available on any String in Scala and they returns an `Option` type, which will contain the converted value if the string is a number, or `None` if the conversion fails.

Here's an example:

```scala
val str1 = "123"
val str2 = "12.34"
val str3 = "abc"

val num1 = str1.toInt
val num2 = str2.toDouble
val num3 = str3.toLong

if (num1.isDefined) {
  println("str1 is a number: " + num1.get)
} else {
  println("str1 is not a number")
}

if (num2.isDefined) {
  println("str2 is a number: " + num2.get)
} else {
  println("str2 is not a number")
}

if (num3.isDefined) {
  println("str3 is a number: " + num3.get)
} else {
  println("str3 is not a number")
}
```

In this example, `str1` is a valid integer, so `num1` will contain the integer value `123`. `str2` is a valid double, so `num2` will contain the double value `12.34`. Finally, `str3` is not a valid number, so `num3` will be `None`.

The output of this program will be:

```
str1 is a number: 123
str2 is a number: 12.34
str3 is not a number
```