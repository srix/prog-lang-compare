Sure, a multidimensional array is an array within an array. It can be two-dimensional, three-dimensional or even more.

In Kotlin, we can create a multidimensional array using the `Array()` constructor. Here is a simple example of how to create a two-dimensional array of integers and initialize it with some values:

```kotlin
// Creating a 2D array of integers with 3 row and 2 column
val arr: Array<Array<Int>> = Array(3) { Array(2) { 0 } }

// Initializing values to the 2D array
arr[0] = arrayOf(1, 2)
arr[1] = arrayOf(3, 4)
arr[2] = arrayOf(5, 6)

// Accessing values from the 2D array
println(arr[1][0]) // Output: 3
```

In the above example, we created a two-dimensional array of integers with 3 rows and 2 columns. We initialized it with 0 as default value using the `Array()` constructor with two arguments - the first argument is the size of the array and the second argument is the lambda function that creates the inner arrays.

Next, we initialized the 2D array with some values using the `arrayOf()` function. Finally, we accessed the value of the second element of the first row using `arr[1][0]`.

Similarly, we can create a three-dimensional array using the `Array()` constructor with three arguments:

```kotlin
// Creating a 3D array of strings with 2 row, 3 column and 2 depth
val arr3D: Array<Array<Array<String>>> = Array(2) { Array(3) { Array(2) { "" } } }

// Initializing values to the 3D array
arr3D[0][0] = arrayOf("a", "b")
arr3D[0][1] = arrayOf("c", "d")
arr3D[0][2] = arrayOf("e", "f")
arr3D[1][0] = arrayOf("g", "h")
arr3D[1][1] = arrayOf("i", "j")
arr3D[1][2] = arrayOf("k", "l")

// Accessing values from the 3D array
println(arr3D[1][0][0]) // Output: g
```

In the above example, we created a three-dimensional array of strings with 2 rows, 3 columns, and 2 depths. We initialized it with an empty string using the `Array()` constructor with three arguments.

Next, we initialized it with some values using the `arrayOf()` function. Finally, we accessed the value of the first element of the first row of the second depth using `arr3D[1][0][0]`.

In this way, we can create and initialize a multidimensional array in Kotlin.