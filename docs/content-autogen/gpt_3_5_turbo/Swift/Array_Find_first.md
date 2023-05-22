To find the first element of an array in Swift, you can use the `first` property. Here's an example:

```swift
let array = [1, 2, 3, 4, 5]
let firstElement = array.first
print(firstElement) // Output: Optional(1)
```

In this example, we have an array of integers `[1, 2, 3, 4, 5]`. We use the `first` property of the array to get the first element of the array and assign that value to the `firstElement` constant. 

Notice that the `first` property returns an optional value, which means it could return `nil` if the array is empty. To handle that case, you can use an `if let` statement or a nil coalescing operator (`??`) to provide a default value:

```swift
let emptyArray = [Int]()
let firstElement = emptyArray.first ?? 0
print(firstElement) // Output: 0
```

In this case, we have an empty array of integers. We try to get the first element of the array using the `first` property, but that would return `nil`. Therefore, we use the nil coalescing operator (`??`) to provide a default value of `0` in case the array is empty. The result of the `firstElement` constant is `0`.