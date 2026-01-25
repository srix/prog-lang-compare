To count the number of elements in an array matching a certain condition in Swift, you can use the `filter()` function followed by the `count` property. Here's an example:

```swift
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenCount = numbers.filter { $0 % 2 == 0 }.count
print("The number of even numbers in the array is: \(evenCount)") 
```

In the example above, the `numbers` array contains 10 elements. Using the `filter()` function with the condition `$0 % 2 == 0`, we're able to filter out only those elements which are even. The resultant list would be `[2, 4, 6, 8, 10]`. Calling `.count` on this filtered list returns its length - which is 5. 

This approach allows us to count the number of elements in an array matching a specific condition quickly and easily.