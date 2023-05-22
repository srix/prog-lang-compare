In Kotlin, you can change all elements of an array using various methods. Here are some examples of how to do it:

1. Using a for loop:
```
val numbers = arrayOf(1, 2, 3, 4, 5)
for (i in numbers.indices) {
    numbers[i] *= 2
}
println(numbers.contentToString()) // [2, 4, 6, 8, 10]
```

2. Using the map() function:
```
val numbers = arrayOf(1, 2, 3, 4, 5)
numbers = numbers.map { it * 2 }.toTypedArray()
println(numbers.contentToString()) // [2, 4, 6, 8, 10]
```

3. Using the forEach() function:
```
val numbers = arrayOf(1, 2, 3, 4, 5)
numbers.forEachIndexed { index, value -> numbers[index] = value * 2 }
println(numbers.contentToString()) // [2, 4, 6, 8, 10]
```

Note that in all of these examples, we create an array of numbers and then multiply each element by 2 to change all elements in the array. The resulting array is printed out using the `contentToString()` function.