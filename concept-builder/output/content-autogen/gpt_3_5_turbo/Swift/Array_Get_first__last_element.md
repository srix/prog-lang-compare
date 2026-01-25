To get the first and last element of an array in Swift, you can use the `first` and `last` properties respectively. Here is an example:

```swift
var numbers = [1, 2, 3, 4, 5]

let firstElement = numbers.first // Returns 1
let lastElement = numbers.last // Returns 5
```

If the array is empty, `first` and `last` will both return `nil`. In this case, you can use the `safe` subscript operator to avoid a runtime error:

```swift
let emptyArray = [Int]()

if let firstElement = emptyArray.safe[0], let lastElement = emptyArray.safe[emptyArray.count - 1] {
    // Do something with the first and last element
}
else {
    // Handle the case where the array is empty
}
``` 

The `safe` subscript operator allows you to access an array element by index, and returns `nil` if the index is out of bounds. You can define this operator as an extension to the `Collection` protocol like this:

```swift
extension Collection {
    subscript(safe index: Index) -> Element? {
        return indices.contains(index) ? self[index] : nil
    }
}
``` 

With this extension, you can safely access an element of any collection by index without needing to check if the index is within bounds.