In Swift, we can get the size of an array using the `count` property. Here's an example:

```swift
let numbers = [1, 2, 3, 4, 5]
let size = numbers.count
print(size) // Output: 5
```

In this example, `count` returns the number of elements in the `numbers` array, which is 5. 

We can also get the size of an empty array:

```swift
let emptyArray = [Int]()
let emptyArraySize = emptyArray.count
print(emptyArraySize) // Output: 0
```

In this example, `count` returns 0 since the `emptyArray` contains no elements.