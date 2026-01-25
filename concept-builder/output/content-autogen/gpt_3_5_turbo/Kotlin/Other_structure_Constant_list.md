In Kotlin, a constant list can be created using the `listOf` function. Once a list is declared as a constant variable, it cannot be modified.

Here is an example code snippet to create a constant list of numbers:

```kotlin
val numbers = listOf(1, 2, 3, 4, 5)
```

In this code snippet, the variable `numbers` is declared as a constant using the `val` keyword. The `listOf` function is used to create a list of numbers.

Similarly, we can create a constant list of strings using the same `listOf` function as follows:

```kotlin
val names = listOf("John", "Mary", "Tom", "Emily")
```

In this code snippet, the variable `names` is declared as a constant and assigned a list of strings using the `listOf` function.

To access an element in a constant list, we can use its index as follows:

```kotlin
val numbers = listOf(1, 2, 3, 4, 5)
val firstNumber = numbers[0] // retrieves the first element (1)
```

In this code snippet, the variable `firstNumber` is assigned the first element of the `numbers` list.

We can also loop through a constant list using a `for` loop as follows:

```kotlin
val names = listOf("John", "Mary", "Tom", "Emily")
for (name in names) {
    println("Name: $name")
}
```

In this code snippet, we use a `for` loop to loop through the `names` list and print each element.