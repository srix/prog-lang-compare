In Scala, we can reduce an array to a single value by applying a specific function to each element of the array and accumulating the result iteratively. The `reduce` or `reduceLeft` method can be used for this purpose.

`reduce` takes a binary function that combines two elements of the array and returns a single result. It applies this function to each element of the array, starting from the first element, and accumulates the result iteratively.

Here is an example of using `reduce` to calculate the sum of all elements in an array:

```
val arr = Array(1, 2, 3, 4, 5)
val sum = arr.reduce((a, b) => a + b)
println(sum) // output: 15
```

In this example, the `reduce` method applies the binary function `(a, b) => a + b` to the elements of the array iteratively. The output is the sum of all elements, which is 15.

Alternatively, we can use `reduceLeft` method which works similarly, but starts from the left-most element.

```
val arr = Array(1, 2, 3, 4, 5)
val sum = arr.reduceLeft((a, b) => a + b)
println(sum) // output: 15
``` 

Both `reduce` and `reduceLeft` methods can be used to reduce an array to a single value with different binary functions, such as `max`, `min`, or user-defined functions.