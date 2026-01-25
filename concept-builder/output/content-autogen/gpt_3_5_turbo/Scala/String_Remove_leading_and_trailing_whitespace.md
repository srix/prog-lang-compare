In Scala, we can remove leading and trailing whitespaces from a string using the `trim` method, which is used to remove all the leading and trailing spaces or any other characters that are considered whitespaces.

Here is an example code snippet to do it in Scala:

```scala
val str = "   Scala Programming   "
println(str.trim) // Output: "Scala Programming"
```

In the above example, `str.trim` will remove all the leading and trailing whitespace characters from the string `str` and return the remaining string "Scala Programming".