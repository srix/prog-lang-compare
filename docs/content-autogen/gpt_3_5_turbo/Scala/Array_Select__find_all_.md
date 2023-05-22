In Scala, we can use filter function to find all the elements in an array that satisfy a given condition. 

Here is an example:

Suppose we have an array of integers as follows:

```scala
val arr = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
```

If we want to find all the even numbers in this array, we can use the filter function as follows:

```scala
val evenNumbers = arr.filter(x => x % 2 == 0)
```

The anonymous function `x => x % 2 == 0` passed to the `filter` method will return `true` for all even numbers and `false` for all odd numbers. Therefore, the `filter` method will create a new array containing only even numbers.

We can print the resulting array to see the output:

```scala
println(evenNumbers.mkString(", "))
```

This will output:

```
2, 4, 6, 8, 10
```

Similarly, we can find all elements in an array that satisfy any other condition by modifying the anonymous function inside the filter method accordingly.