Sure, iterating over an array with index is a common operation in Kotlin programming. You can use the `indices` property of an array to iterate over the elements of the array and their indices. Here's the code for iterating over an array with index in Kotlin:

```
fun main() {
    val numbers = arrayOf(1, 2, 3, 4, 5)

    // iterate over the array with index
    for (i in numbers.indices) {
        println("Element at index $i is ${numbers[i]}")
    }
}
```

The output of the above code would be:

```
Element at index 0 is 1
Element at index 1 is 2
Element at index 2 is 3
Element at index 3 is 4
Element at index 4 is 5
```

As you can see, we first create an array of integers called `numbers` and then use the `indices` property to get a range of valid array indices. We then use a `for` loop to iterate over this range and print out the element at each index in the array.