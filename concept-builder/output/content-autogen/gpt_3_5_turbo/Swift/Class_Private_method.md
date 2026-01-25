In Swift, private methods are those that can be accessed only within the class or struct they are defined in. Private methods provide enhanced encapsulation and data hiding so that implementation details of a class or struct can be kept hidden from the outside world. Below is an example on how to use private methods in Swift:

```swift
class Student {
  private var name: String
  private var age: Int
  
  init(name: String, age: Int) {
    self.name = name
    self.age = age
  }
  
  func printDetails() {
    // Accessing private method within class
    self.printAge()
  }
  
  private func printAge() {
    print("Age: \(self.age)")
  }
}

let student = Student(name: "John", age: 20)
student.printDetails()
// Output: Age: 20

// Attempting to access private method outside the class will result in a compile-time error
// student.printAge() // This will throw a compiler error
```

In the example above, we define a `Student` class with two private properties: `name` and `age`. We also define two methods: `printDetails()` and `printAge()`. `printDetails()` is a public method that can be accessed outside the class and it calls the private `printAge()` method within the `Student` class. The `printAge()` method, on the other hand, is marked as private and can only be accessed within the class. 

When we create an instance of `Student` and call `printDetails()`, it successfully calls the private `printAge()` method and prints the age of the student. But if we try to call `printAge()` from outside the class, we get a compiler error as it is a private method and cannot be accessed from outside the class.