To get the index of an element in an array in Scala, you can use the `indexOf` method. This method takes an argument that represents the element you want to find the index of. It returns the index of the first occurrence of the element in the array, or -1 if the element is not found.

Here is an example:

```scala
val arr = Array(1, 2, 3, 4, 5)
val index = arr.indexOf(3)
println(index) // Output: 2
```

In this example, we create an array `arr` of integers. We then use the `indexOf` method to find the index of the element `3`. The returned value is `2` since `3` is at index `2` in the array.

If the element is not found in the array, the `indexOf` method returns `-1`. Here is an example:

```scala
val arr = Array("apple", "banana", "orange")
val index = arr.indexOf("grape")
println(index) // Output: -1
```

In this example, we create an array `arr` of strings. We then use the `indexOf` method to find the index of the element `"grape"`. Since `"grape"` is not found in the array, the returned value is `-1`.