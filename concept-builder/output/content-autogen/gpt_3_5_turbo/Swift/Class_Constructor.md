In Swift, a constructor is used to initialize an object of a class. Constructors are created using the `init()` method, which is called when a new instance of the class is created.

Here are some examples:

### Basic constructor

```swift
class Person {
    var name: String
    var age: Int

    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
}

let person1 = Person(name: "John", age: 25)
print(person1.name) // Output: John
print(person1.age) // Output: 25
```

In the above code, we have created a `Person` class that has a name and age property. We have also created a constructor that takes two parameters `name` and `age`, and initializes the object with these values.

### Default constructor

```swift
class Person {
    var name: String
    var age: Int

    init() {
        self.name = "Unknown"
        self.age = 0
    }
}

let person2 = Person()
print(person2.name) // Output: Unknown
print(person2.age) // Output: 0
```

In the above code, we have created a default constructor for the `Person` class, which initializes the `name` and `age` properties to default values.

### Convenience constructor

```swift
class Person {
    var name: String
    var age: Int

    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }

    convenience init(name: String) {
        self.init(name: name, age: 0)
    }
}

let person3 = Person(name: "Susan")
print(person3.name) // Output: Susan
print(person3.age) // Output: 0
```

In the above code, we have created a convenience constructor for the `Person` class, which initializes the `name` property and sets the `age` property to 0. It calls the primary constructor using `self.init()` with the `age` value set to 0.

We can create as many constructors as needed for a class to support different initialization scenarios.