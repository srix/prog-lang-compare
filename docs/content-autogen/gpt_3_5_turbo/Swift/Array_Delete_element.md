To delete an element from an array in Swift, you can use the `remove(at:)` method or the `removeAll()` method.

Here's an example using the `remove(at:)` method:

```swift
var colors = ["Red", "Green", "Blue", "Yellow"]
colors.remove(at: 1) // Removes "Green" from the array
print(colors) // Prints ["Red", "Blue", "Yellow"]
```

In this example, we create an array of colors and then use the `remove(at:)` method to remove the second element ("Green") from the array. The result is an array with three elements: "Red", "Blue", and "Yellow".

Here's an example using the `removeAll()` method:

```swift
var numbers = [1, 2, 3, 4, 5]
numbers.removeAll() // Removes all elements from the array
print(numbers) // Prints "[]"
```

In this example, we create an array of numbers and then use the `removeAll()` method to remove all elements from the array. The result is an empty array.