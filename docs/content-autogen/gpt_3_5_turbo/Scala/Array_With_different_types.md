In Scala, we can create an array with different types using the `Any` type, which is the superclass of all Scala classes.

Here is an example of creating an array with different types:

```scala
val myArray: Array[Any] = Array("Hello", 123, 4.56, true)
```

In this example, the `myArray` variable is declared as an array of `Any` type, which means it can hold any type of object. The array is then initialized with four elements of different types, including a string, an integer, a double, and a boolean.

We can also create an array with different types using a tuple. Here is an example:

```scala
val myArray: Array[Any] = Array(("John", 30), ("Jane", 25), ("Bob", true))
```

In this example, the `myArray` variable is declared as an array of `Any` type, which means it can hold any type of object. The array is then initialized with three tuples, each containing two elements of different types. The first tuple contains a string and an integer, the second tuple contains a string and an integer, and the third tuple contains a string and a boolean.