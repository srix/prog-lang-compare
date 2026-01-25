In Swift, you can declare a class using the `class` keyword followed by the name of the class. Here's an example:

```swift
class Person {
    var name: String
    var age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
    
    func sayHello() {
        print("Hello, my name is \(name) and I am \(age) years old.")
    }
}
```

In the code above, we have declared a `Person` class with two properties (`name` and `age`) and one method (`sayHello()`). The `init()` method initializes the `name` and `age` properties with the values passed in as parameters. The `sayHello()` method prints a string to the console that includes the `name` and `age` properties.

You can create an instance of the `Person` class like this:

```swift
let person = Person(name: "John", age: 30)
person.sayHello() // Output: "Hello, my name is John and I am 30 years old."
```