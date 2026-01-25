In Swift, we can simply return an array using the `return` keyword and specifying the array that we want to return. Here's an example:

```swift
func fruits() -> [String] {
    let fruitsArray = ["apple", "banana", "orange", "mango"]
    return fruitsArray
}
```

In the above example, the function `fruits()` returns an array of strings i.e. the array of fruits. We declare a constant `fruitsArray` and initialize it with four fruits, then we return this array.

Another example:

```swift
func evenNumbers() -> [Int] {
    var numbersArray = [Int]()
    for i in 1...10 {
        if i % 2 == 0 {
            numbersArray.append(i)
        }
    }
    return numbersArray
}
```

In the second example, the function `evenNumbers()` generates an array of even numbers from 1 to 10. We first declare an empty integer array `numbersArray`, then use a for loop to iterate from 1 to 10. If the number is even we append it to our array, then finally return the array.