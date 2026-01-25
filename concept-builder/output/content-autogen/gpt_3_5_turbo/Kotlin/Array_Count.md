To count the number of elements in an array matching a condition in Kotlin, you can use the `count()` function. This function takes a lambda expression indicating the condition to match and returns the number of elements that fulfill that condition. You can use this function with any array type in Kotlin.

Here's an example of how to count the number of even elements in an array of integers:

```kotlin
val numbers = arrayOf(1, 2, 3, 4, 5, 6)
val evenCount = numbers.count { it % 2 == 0 }
println("There are $evenCount even numbers in the array.")
```

Output:
```
There are 3 even numbers in the array.
```

In this example, we create an array of integers `numbers` and use the `count()` function to count the number of elements that are even. The lambda expression `{ it % 2 == 0 }` checks if the element is even by taking the modulus of the element with `2`. The function returns `3`, which is the number of even elements in the array.

You can use any condition in the lambda expression to count elements in an array that match that condition.