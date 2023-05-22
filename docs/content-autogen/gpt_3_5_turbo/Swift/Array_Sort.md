Sure! Sorting an array in Swift is actually quite easy. Swift provides built-in methods to sort arrays in ascending or descending order.

Here is an example of how to sort an array of integers in ascending order:

```swift
var numbers = [5, 3, 9, 1, 7]
numbers.sort()
print(numbers) // output: [1, 3, 5, 7, 9]
```

This code initializes an array of integers called `numbers`, which is then sorted using the `sort()` method provided by Swift. The sorted array is then printed to the console using `print()`.

If you want to sort the array in descending order, you can use the `sort(by:)` method and pass in a closure that specified the sorting criteria.

Here is an example of how to the sort an array of integers in descending order:

```swift
var numbers = [5, 3, 9, 1, 7]
numbers.sort { $0 > $1 }
print(numbers) // output: [9, 7, 5, 3, 1]
```

This code sorts the `numbers` array in descending order using a closure that compares each pair of elements and returns `true` if the first element is greater than the second. The sorted array is then printed to the console using `print()`. 

Hope this helps!