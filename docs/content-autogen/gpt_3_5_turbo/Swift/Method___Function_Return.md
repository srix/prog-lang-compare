In Swift, returning a value from a function or method is done using the `return` keyword followed by the value to be returned. Here's an example of a function that returns the sum of two numbers:

```swift
func sum(_ a: Int, _ b: Int) -> Int {
    return a + b
}

// Example usage:
let x = 2
let y = 3
let result = sum(x, y)  // result is 5
```

In this example, the function `sum` takes two integers as input parameters, adds them together, and then returns the result as an integer.

Here's another example of a function that returns a string:

```swift
func greeting(for name: String) -> String {
    return "Hello, \(name)!"
}

// Example usage:
let username = "John"
let message = greeting(for: username)  // message is "Hello, John!"
```

In this example, the function `greeting` takes a string as an input parameter (representing a person's name), creates a greeting message by concatenating the name with a static string, and then returns the greeting message as another string.