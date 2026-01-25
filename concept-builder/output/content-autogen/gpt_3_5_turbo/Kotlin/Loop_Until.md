In Kotlin, `until` is used to create a range that excludes the specified end value. Here are a few examples of how `until` can be used:

Example 1: Using `until` in a loop

```kotlin
for(i in 0 until 10){
    println(i) // will print 0 to 9
}
```

Here, the loop will iterate from 0 to 9, but the number 10 will be excluded.

Example 2: Creating a range using `until`

```kotlin
val range = 1 until 5 // creates a range from 1 to 4
println(range.contains(5)) // prints false
```

In this example, we create a range from 1 to 4 using `until`, which excludes 5. The `contains` method is used to check if the number 5 is present in the range, which correctly returns false.

Example 3: Using `until` to iterate over a list

```kotlin
val myList = listOf("apple", "banana", "orange", "grapes", "watermelon")
for(i in 0 until 3){
    println(myList[i]) // will print the first three elements of the list
}
```

In this case, we use `until` to iterate over the first three elements of a list. The loop will run from 0 to 2 and print the corresponding elements in the list.