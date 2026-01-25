A field in a class in Swift is just a variable or property that is declared within the scope of a class. It can be used to store data or state information that is specific to that class instance. Here is an example of how to use a field in a class in Swift:

```swift
class Person {
    var name: String
    var age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
    
    func introduce() {
        print("Hi, my name is \(name) and I am \(age) years old.")
    }
}

let john = Person(name: "John", age: 25)
john.introduce() //prints "Hi, my name is John and I am 25 years old."
```

In this example, the `Person` class has two fields, `name` and `age`. These fields are declared as variables (`var`) and are initialized through the `init` method. The `introduce` method uses these fields to print out a message introducing the person. 

When creating an instance of the `Person` class, we pass in values for the `name` and `age` fields as parameters to the `init` method. These values are then assigned to the fields and can be accessed and manipulated throughout the instance's lifecycle. 

Overall, fields in classes in Swift allow for the storage and tracking of specific data related to an object, which can be used to modify the object's behavior or communicate information to the user.