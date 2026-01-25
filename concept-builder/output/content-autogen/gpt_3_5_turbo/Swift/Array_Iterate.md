To iterate over an array in Swift, you can use a `for`-`in` loop. Here's an example:

```swift
let numbers = [1, 2, 3, 4, 5]

for number in numbers {
    print(number)
}
```

In the example above, we have an array of integers called `numbers`. We use a `for`-`in` loop to iterate over each element in the array and print it to the console.

You can also use the `enumerated()` method to iterate over an array and access both the index and the value of each element. Here's an example:

```swift
let fruits = ["apple", "banana", "orange"]

for (index, fruit) in fruits.enumerated() {
    print("Index: \(index), Fruit: \(fruit)")
}
```

In the example above, we have an array of strings called `fruits`. We use the `enumerated()` method to iterate over the array and access both the index and the value of each element. We then print out the index and value to the console using string interpolation.