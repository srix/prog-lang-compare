In Kotlin, there are multiple ways to get the unique elements of an array. Here are some examples:

1. Use the `distinct()` function: This function returns a new list containing distinct elements from the source list.

```kotlin
val numbers = arrayOf(1, 2, 3, 2, 4, 5, 3, 6)

val uniqueNumbers = numbers.distinct()

println(uniqueNumbers) // Output: [1, 2, 3, 4, 5, 6]
```

2. Use the `toSet()` function: This function creates a new set containing the elements of the source array, which automatically removes duplicates since sets only contain unique elements.

```kotlin
val fruits = arrayOf("apple", "banana", "apple", "orange", "pear", "banana")

val uniqueFruits = fruits.toSet().toTypedArray()

println(uniqueFruits) // Output: [apple, banana, orange, pear]
```

3. Use a loop and a mutable set: This approach involves iterating through the array and adding elements to a mutable set, which automatically removes duplicates.

```kotlin
val animals = arrayOf("cat", "dog", "cat", "hamster", "goldfish", "hamster")

val uniqueAnimals = mutableSetOf<String>()

for (animal in animals) {
    uniqueAnimals.add(animal)
}

println(uniqueAnimals.toTypedArray()) // Output: [cat, dog, hamster, goldfish]
```

Any of these approaches will allow you to easily get the unique elements of an array in Kotlin.