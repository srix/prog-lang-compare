In Kotlin, we can use the `in` operator or the `contains()` method to check if an array includes an element.

Here are examples of both methods:

Using the `in` operator:

``` kotlin
val array = arrayOf("apple", "banana", "orange")
if ("banana" in array) {
    println("Array contains 'banana'")
} else {
    println("Array does not contain 'banana'")
}
```

Output: `Array contains 'banana'`

Using the `contains()` method:

``` kotlin
val array = arrayOf("apple", "banana", "orange")
if (array.contains("pear")) {
    println("Array contains 'pear'")
} else {
    println("Array does not contain 'pear'")
}
```

Output: `Array does not contain 'pear'`

In both cases, the `if` statement checks whether the element exists in the array or not. If it exists, it prints a message indicating that the array contains the element. If it doesn't exist, it prints a message indicating that the array does not contain the element.