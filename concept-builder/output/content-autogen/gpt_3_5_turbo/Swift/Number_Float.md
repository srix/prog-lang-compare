In Swift, a floating-point number is a number with a fractional component, which means it can represent numbers with decimal points. Float is a data type that represents single precision floating-point numbers (32-bit), while Double represents double precision floating-point numbers (64-bit). Here are some examples of how to use float numbers in Swift:

```swift
// declare a float variable
var floatNum: Float = 3.14159

// declare a double variable
var doubleNum: Double = 1234.5678

// declare a constant with a float value
let pi: Float = 3.14

// declare a constant with a double value
let gravity: Double = 9.81
```

Note that when using a float or double number in an arithmetic operation, Swift will automatically promote the result to the most precise data type. For example:

```swift
let a: Float = 3.2
let b: Double = 2.1

let c = a + b // c is of type Double
```

It is important to use the appropriate data type for your calculations based on the required precision and range of values you need to represent.