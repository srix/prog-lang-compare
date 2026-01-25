In Swift, you can concatenate two arrays using the `+` operator or the `+=` compound assignment operator.

Here's an example using the `+` operator:

```swift
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let concatenatedArray = array1 + array2
print(concatenatedArray) // Output: [1, 2, 3, 4, 5, 6]
```

Here's an example using the `+=` compound assignment operator:

```swift
var array1 = [1, 2, 3]
let array2 = [4, 5, 6]
array1 += array2
print(array1) // Output: [1, 2, 3, 4, 5, 6]
```

In both examples, we declare two arrays and then concatenate them using either the `+` or `+=` operator. The first example shows how to concatenate without modifying the original arrays, while the second example demonstrates how to modify the first array by using the `+=` operator.