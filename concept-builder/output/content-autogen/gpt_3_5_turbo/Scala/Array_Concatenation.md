In Scala, we can concatenate two arrays using the `++` operator. Here's an example:

```scala
val array1 = Array(1, 2, 3)
val array2 = Array(4, 5, 6)

val concatenatedArray = array1 ++ array2
println(concatenatedArray.mkString(", ")) // Output: 1, 2, 3, 4, 5, 6
```

In the above example, we first create two arrays `array1` and `array2` containing elements of `Int` type. We then concatenate the two arrays using the `++` operator and store the result in the `concatenatedArray` variable. Finally, we print the elements of the concatenated array using the `mkString` method.

We can also concatenate arrays of different types. Here's an example:

```scala
val array1 = Array(1, 2, 3)
val array2 = Array("four", "five", "six")

val concatenatedArray = array1 ++ array2
println(concatenatedArray.mkString(", ")) // Output: 1, 2, 3, four, five, six
```

In the above example, we concatenate an array of integers with an array of strings, resulting in an array of `Any` type.