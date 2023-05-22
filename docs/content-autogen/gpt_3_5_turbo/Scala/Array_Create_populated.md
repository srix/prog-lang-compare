To create an array in Scala, you can use the "Array" keyword followed by a set of parentheses. You can specify the length of the array by passing in the number of elements within the parentheses, or you can pass in the actual elements themselves.

Here are some examples:

1. Creating an array with a specified length:
```
val myArray = new Array[Int](5)
```
This creates an empty array of integers with a length of 5.

2. Creating an array with specified elements:
```
val myArray = Array(1, 2, 3, 4, 5)
```
This creates an array of integers with the elements 1 through 5.

3. Creating an array of strings:
```
val myArray = Array("hello", "world")
```
This creates an array of strings with two elements, "hello" and "world".

4. Creating a two-dimensional array:
```
val myArray = Array.ofDim[Int](3, 3)
```
This creates a two-dimensional array of integers with dimensions 3x3.

Note that Scala arrays are mutable, meaning that you can modify its elements.