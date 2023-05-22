In Swift, "block passing" refers to the concept of taking a block of code or closure as an argument and executing it later within a function.

Here's an example:

```swift
func performCalculation(_ a: Int, _ b: Int, using operation: (Int, Int) -> Int) -> Int {
    return operation(a, b)
}

let addClosure = { (a: Int, b: Int) -> Int in
    return a + b
}

let subtractClosure = { (a: Int, b: Int) -> Int in
    return a - b
}

let result1 = performCalculation(3, 4, using: addClosure) // result1 = 7
let result2 = performCalculation(9, 2, using: subtractClosure) // result2 = 7
```

In the example above, we define a function `performCalculation` that takes two integer arguments `a` and `b`, and a closure `operation` that takes two integers and returns an integer. The function simply calls the `operation` closure with the given arguments and returns the result.

We then define two closures `addClosure` and `subtractClosure` that perform addition and subtraction operations, respectively. We use these closures as arguments to the `performCalculation` function and pass in the integers `3` and `4` (in the case of `addClosure`) and `9` and `2` (in the case of `subtractClosure`).

The function executes the passed-in closure with the given arguments and returns the result. In the case of `addClosure`, the result is `7` (since `3 + 4 = 7`), while in the case of `subtractClosure`, the result is also `7` (since `9 - 2 = 7`). This demonstrates how block passing can be used to pass different blocks of code to a function to achieve different results.