In Swift, you can declare a method or function using the `func` keyword followed by the function name, parameter list (if any) in parentheses, and the return type (if any). Here are a few examples:

1. A simple function that takes no parameters and returns a string:

```swift
func sayHello() -> String {
    return "Hello"
}
```

2. A function that takes two integers and returns their sum:

```swift
func addNumbers(_ a: Int, _ b: Int) -> Int {
    return a + b
}
```

In the above example, the underscore before each parameter name indicates that they are unnamed parameters.

3. A function that takes an array of strings and returns a concatenated string:

```swift
func joinStrings(_ strings: [String]) -> String {
    return strings.joined(separator: " ")
}
```

Here, the function takes an array of strings as a parameter, and returns a single string that is a concatenation of all the strings in the array, separated by a space.

4. A method that belongs to a class:

```swift
class Person {
    var name: String
    
    init(name: String) {
        self.name = name
    }
    
    func introduce() {
        print("Hi, my name is \(name)")
    }
}

let john = Person(name: "John")
john.introduce() // Output: "Hi, my name is John"
```

In the above example, the `Person` class has a method called `introduce` which doesn't take any parameter but prints out a message including the name of the `Person` object.