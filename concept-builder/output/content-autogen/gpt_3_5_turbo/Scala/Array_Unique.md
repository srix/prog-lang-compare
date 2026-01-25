To get the unique elements of an array in Scala, you can use the `distinct` method. This method returns a new array that contains only the distinct elements from the original array in the order they appear.

Here is an example of using `distinct` to get the unique elements of an array:

```scala
val arr = Array(1, 2, 3, 2, 4, 3, 5)
val uniqueArr = arr.distinct

println(uniqueArr.mkString(", ")) // Output: 1, 2, 3, 4, 5
```

In this example, we created an array with duplicate elements and assigned it to the `arr` variable. Then, we used the `distinct` method to get a new array with only unique elements and assigned it to the `uniqueArr` variable. Finally, we printed the unique elements of the array using the `mkString` method. The output shows that we have successfully obtained the unique elements of the original array.

Note that the `distinct` method only works with arrays of primitive types and with objects that implement the `hashCode` and `equals` methods. If you need to get the unique elements of an array of custom objects, you need to implement the `hashCode` and `equals` methods for that class.