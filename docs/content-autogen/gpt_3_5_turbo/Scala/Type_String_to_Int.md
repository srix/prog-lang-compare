In Scala, we can convert a string to an integer using the `toInt` method provided by the `String` class. Here's an example:

```scala
val str = "123"
val num = str.toInt
println(num) // Output: 123
```

In the above code, we declared a string variable `str` with the value "123". We then called the `toInt` method on `str` and assigned the result to the integer variable `num`. The `println` statement then prints the value of `num`.

We can also use the `Integer.parseInt` method to convert a string to integer.

```scala
val str = "456"
val num = Integer.parseInt(str)
println(num) // Output: 456
```

Here, we declared the same string variable `str` with the value "456". We used the `Integer.parseInt()` method to convert the string to an integer and assigned the result to the integer variable `num`. The `println` statement then prints the value of `num`.