In Swift, default values can be assigned to arguments in a function or method. These values will be used if the argument is not passed when the function is called.

Here's how to use default values in Swift functions or methods:

```swift
func greet(_ name: String = "World") {
  print("Hello, \(name)!")
}

greet() // Output: Hello, World!
greet("John") // Output: Hello, John!
```

In the example above, the `greet()` function has a default value of `"World"` for the `name` parameter. If `name` isn't passed as an argument when the function is called, it will use `"World"` instead.

When the `greet()` function is called without a parameter, it prints "Hello, World!". When it is called with the parameter `"John"`, it prints "Hello, John!".

You can also set default values for multiple parameters:

```swift
func greet(_ name: String = "World", at time: String = "morning") {
  print("Good \(time), \(name)!")
}

greet() // Output: Good morning, World!
greet("John") // Output: Good morning, John!
greet("John", at: "evening") // Output: Good evening, John!
```

In this example, the `greet()` function has default values of `"World"` for the `name` parameter and `"morning"` for the `time` parameter. 

When `greet()` is called without any arguments, it uses the default values and prints "Good morning, World!". 

When `greet()` is called with only one argument, it uses the default value for `time` and prints "Good morning, John!". 

When `greet()` is called with both arguments, it uses the values passed to the function and prints "Good evening, John!".