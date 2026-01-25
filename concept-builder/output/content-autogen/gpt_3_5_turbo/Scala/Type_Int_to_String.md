Sure, I can definitely help you with that! 

To convert an integer to a string in Scala, you can use the `toString()` method. Here's an example:

```scala
val num: Int = 123
val str: String = num.toString
println(str)
```

In this example, we have an integer `num` with a value of 123. We can convert it to a string by calling the `toString()` method and assigning the result to a new variable `str`. Finally, we print out the value of `str`, which will be the string "123".

You can also pass in a radix (base) to the `toString()` method if you want to convert the integer to a string in a different base. For example:

```scala
val num: Int = 10
val str: String = num.toString(2)
println(str)
```

In this example, we have an integer `num` with a value of 10. We're using the `toString()` method with a radix of 2, which means the integer will be converted to a binary string. The resulting value of `str` will be "1010".

I hope this helps! Let me know if you have any more questions.