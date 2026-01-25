In Swift, `for` is a loop statement that allows you to execute a block of code repeatedly. The `for` loop works by specifying a range or a collection of elements to iterate over:

1. Using a Range with for loop:

```swift
for i in 0..<5 {
  print(i) // Prints 0 to 4
}
```
In this example, we iterate over a range of `0..<5`. The range specifies values from 0 up to, but not including, 5. The loop executes 5 times and prints each value of `i`.

2. Using a Collection with for loop:

```swift
let numbers = [1, 2, 3, 4, 5]
for number in numbers {
  print(number) // Prints 1 to 5
}
```
In this example, we iterate over an array of integers named `numbers`. The loop executes as many times as there are elements in the array, each time assigning the current element to the constant `number`.

3. Using Step with for loop:

```swift
for i in stride(from: 0, to: 12, by: 2) {
  print(i) // Prints 0, 2, 4, 6, 8, 10
}
```
In this example, we use `stride(from:to:by:)` to iterate over a range of even numbers from 0 up to, but not including, 12. The loop executes 6 times and prints each even number from 0 to 10.

You can use a similar `stride(from:through:by:)` method to include the upper bound value in the loop.