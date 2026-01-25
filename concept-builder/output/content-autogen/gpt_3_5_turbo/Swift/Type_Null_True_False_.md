In Swift, you can check if a value is null or not by using the optional binding syntax. Here's an example:

```swift
// Optional variable
var optionalValue: Int? = 5

// Check if optionalValue is not null
if let value = optionalValue {
    print("optionalValue is not null. Its value is \(value)")
} else {
    print("optionalValue is null")
}
```

In this example, the optionalValue variable is declared as an optional type using the question mark `?`. The `if let` statement checks if its value is not null and assigns it to the `value` constant. If the value is null, the `else` block is executed.

To check if a boolean value is true or false, you can use the `if` statement. Here's an example:

```swift
// Boolean variable
let isEven = true

// Check if the boolean value is true
if isEven {
    print("The boolean value is true")
} else {
    print("The boolean value is false")
}
```

In this example, the `if` statement checks if the `isEven` boolean value is `true`. If it is, the first block of code is executed. If it's `false`, the second block is executed.