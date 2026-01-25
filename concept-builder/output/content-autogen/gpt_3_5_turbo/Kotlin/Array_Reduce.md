In Kotlin, reducing an array to a single value can be achieved through the use of the `reduce` and `fold` functions. These functions allow us to apply a given operation to each element of the array and accumulate the result into a single value.

The `reduce` function takes an associative binary operation that combines two values and applies it to the elements of the array one-by-one, accumulating the result as it goes. The final result is a single value that represents the accumulation of all the elements.

Here's an example of using `reduce` to calculate the sum of all the elements in an array of integers:

```kotlin
val numbers = arrayOf(1, 2, 3, 4, 5)
val sum = numbers.reduce { acc, num -> acc + num }
println(sum) // Output: 15
```

In this example, we start with an initial value of `acc` equal to the first element of the array (`1`) and we add each subsequent element to it one-by-one. The final result is the sum of all the elements in the array.

The `fold` function works similarly to `reduce`, but it also allows us to specify an initial value for the accumulation. Here's an example of using `fold` to calculate the product of all the elements in an array of integers starting from an initial value of `1`:

```kotlin
val numbers = arrayOf(1, 2, 3, 4, 5)
val product = numbers.fold(1) { acc, num -> acc * num }
println(product) // Output: 120
```

In this example, we start with an initial value of `acc` equal to `1` and we multiply each subsequent element to it one-by-one. The final result is the product of all the elements in the array.