In Swift, we use the `sqrt()` function to calculate the square root of a number. The `sqrt()` function takes a numeric argument and returns the square root of that number. Here's an example:

```swift
let number = 25
let squareRoot = sqrt(Double(number))
print(squareRoot) // Output: 5.0
```

In this example, we first declare a constant `number` and set it to 25. We then call the `sqrt()` function and pass in `number` as an argument. Since `sqrt()` takes a `Double` argument, we need to convert `number` to a `Double` using the `Double()` initializer. Finally, we print the result to the console.

We can also calculate the square root of decimal numbers using the `sqrt()` function. Here's an example:

```swift
let decimalNumber = 2.25
let decimalSquareRoot = sqrt(decimalNumber)
print(decimalSquareRoot) // Output: 1.5
```

In this example, we declare a constant `decimalNumber` and set it to 2.25. We then call the `sqrt()` function on `decimalNumber` and print the result to the console. Note that since `decimalNumber` is already a `Double`, we don't need to convert it before calling `sqrt()`.