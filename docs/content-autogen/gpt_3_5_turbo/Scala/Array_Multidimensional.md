In Scala, we can create a multidimensional array, also known as a nested array, by representing each element as an array of elements. Thus, to create a 2D array, we represent each element as an array of values.

Here is an example of how to create and initialize a 2D array in Scala:

```
// Create a 2D array with 3 rows and 4 columns and initialize it
val myArray = Array.ofDim[Int](3, 4)

// Initialize the elements of the array
myArray(0)(0) = 1
myArray(0)(1) = 2
myArray(0)(2) = 3
myArray(0)(3) = 4

myArray(1)(0) = 5
myArray(1)(1) = 6
myArray(1)(2) = 7
myArray(1)(3) = 8

myArray(2)(0) = 9
myArray(2)(1) = 10
myArray(2)(2) = 11
myArray(2)(3) = 12
```

In this example, `Array.ofDim[Int](3, 4)` creates a 2D array with 3 rows and 4 columns. We then initialize the elements of the array by accessing each element with the syntax `myArray(row)(column)` and assigning a value to it.

Here is an example of creating and initializing a 3D array in Scala:

```
// Create a 3D array with 2 rows, 3 columns, and 4 depth and initialize it
val myArray = Array.ofDim[Int](2, 3, 4)

// Initialize the elements of the array
myArray(0)(0)(0) = 1
myArray(0)(0)(1) = 2
myArray(0)(0)(2) = 3
myArray(0)(0)(3) = 4

myArray(0)(1)(0) = 5
myArray(0)(1)(1) = 6
myArray(0)(1)(2) = 7
myArray(0)(1)(3) = 8

myArray(0)(2)(0) = 9
myArray(0)(2)(1) = 10
myArray(0)(2)(2) = 11
myArray(0)(2)(3) = 12

myArray(1)(0)(0) = 13
myArray(1)(0)(1) = 14
myArray(1)(0)(2) = 15
myArray(1)(0)(3) = 16

myArray(1)(1)(0) = 17
myArray(1)(1)(1) = 18
myArray(1)(1)(2) = 19
myArray(1)(1)(3) = 20

myArray(1)(2)(0) = 21
myArray(1)(2)(1) = 22
myArray(1)(2)(2) = 23
myArray(1)(2)(3) = 24
```

In this example, `Array.ofDim[Int](2, 3, 4)` creates a 3D array with 2 rows, 3 columns, and 4 depth. We then initialize the elements of the array by accessing each element with the syntax `myArray(row)(column)(depth)` and assigning a value to it.