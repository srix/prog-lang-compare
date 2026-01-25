In Scala, we can use the `zipWithIndex` method to iterate over an array with an index. Here's an example:

```
val arr = Array("apple", "banana", "orange")

for ((elem, index) <- arr.zipWithIndex) {
  println(s"$index: $elem")
}
```

Output:
```
0: apple
1: banana
2: orange
```

In the above example, the `zipWithIndex` method is called on the array `arr`, which returns a new collection of pairs where each element of the original array is paired with its index. The `for` loop then iterates over this collection, and for each pair, it prints the index and the element to the console.

Alternatively, we can also use the `indices` method to iterate over an array's indices and then access the elements using these indices. Here's an example:

```
val arr = Array("apple", "banana", "orange")

for (index <- arr.indices) {
  println(s"$index: ${arr(index)}")
}
```

Output:
```
0: apple
1: banana
2: orange
```

In the above example, the `indices` method is called on the array `arr`, which returns a collection of indices for the array. The `for` loop then iterates over this collection, and for each index, it prints the index and the element at that index to the console.