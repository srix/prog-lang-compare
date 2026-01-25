In Swift, you can use the `Set` type to get unique elements of an array. A set is an unordered collection of distinct hashable values. You can simply create a Set from your array, which automatically removes duplicates, and then convert the Set back to an array if you need to.

Here's an example:

```swift
let numbers = [1, 2, 3, 2, 4, 5, 1]
let uniqueNumbers = Array(Set(numbers)) // [1, 2, 3, 4, 5]
```

In this example, we first define an array `numbers` with some duplicate elements. Then we create a Set from `numbers` by initializing a new Set with the array's elements. This creates a Set with only the unique elements from the array. Finally, we convert the Set back to an array using the `Array` initializer. The resulting `uniqueNumbers` array contains only the unique elements from the original `numbers` array, in the same order as they appeared in the original array.