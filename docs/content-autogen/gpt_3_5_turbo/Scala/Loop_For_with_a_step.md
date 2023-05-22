In Scala, a `for` loop can be used to iterate over elements of a collection or a range of values. Here is how you can use a `for` loop with a step:

- Using Range and Step

Suppose you want to iterate over a range of numbers starting from 0 with a step of 2, up to a maximum limit. Here is how you can use a `for` loop to achieve this:

```scala
for (i <- Range(0, 10, 2)) {
  println(i)
}
```

Output:
```
0
2
4
6
8
```

In the above example, the `Range(0, 10, 2)` method creates a range of numbers starting from 0 (inclusive) and ending at 10 (exclusive) with a step of 2.

- Using a Collection

You can also use a `for` loop to iterate over elements of a collection with a step. Here is an example:

```scala
val numList = List(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
for (i <- 0 to numList.length-1 by 2) {
  println(numList(i))
}
```

Output:
```
1
3
5
7
9
```

In the above example, we are iterating over the indices of the `numList` list using a step of 2, and printing the element at each index using `numList(i)` syntax.

These are the ways in which you can use the `for` loop with step in Scala.