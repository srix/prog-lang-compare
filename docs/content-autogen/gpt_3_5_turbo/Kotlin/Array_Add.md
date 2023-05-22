Sure! 

To add an element in an array in Kotlin, we use the "+" operator or the "plus()" method. Here is an example of each approach:

Using the "+" operator:
```kotlin
// Initializing an array
var numbers = arrayOf(1, 2, 3, 4, 5)

// Adding a new element to the array
numbers += 6

// Printing the updated array
println(numbers.contentToString()) // [1, 2, 3, 4, 5, 6]
```

Using the "plus()" method:
```kotlin
// Initializing an array
var names = arrayOf("Alice", "Bob", "Charlie")

// Adding a new element to the array
names = names.plus("David")

// Printing the updated array
println(names.contentToString()) // ["Alice", "Bob", "Charlie", "David"]
```

Note that both approaches create a new array with the added element, the original array is not modified.