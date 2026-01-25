In Scala, you can check if an element is present in an array using the `contains` method of the array.

Here is an example:

```scala
val arr = Array(1, 2, 3, 4, 5)

// Check if the array contains the element 3
if (arr.contains(3)) {
  println("Element 3 is present in the array")
} else {
  println("Element 3 is not present in the array")
}
```

Output:
```
Element 3 is present in the array
```

In case you want to check if an element is present in a list or any other collection, you can use the `contains` method as well. Here's an example with a list:

```scala
val list = List("apple", "banana", "orange")

// Check if the list contains the element "banana"
if (list.contains("banana")) {
  println("Element 'banana' is present in the list")
} else {
  println("Element 'banana' is not present in the list")
}
```

Output:
```
Element 'banana' is present in the list
```