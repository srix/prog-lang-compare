Inheritance is a mechanism in object-oriented programming that allows you to define a new class based on an existing class, in which the new class inherits all the properties and methods of the existing class. In Swift, you can use the `class` keyword to define a class, and the `super` keyword to refer to the superclass.

Here is an example of a `Vehicle` class that contains basic properties and methods that describe a vehicle:

```swift
class Vehicle {
    var brand: String
    var model: String
    var year: Int

    init(brand: String, model: String, year: Int) {
        self.brand = brand
        self.model = model
        self.year = year
    }

    func startEngine() {
        print("Starting the engine of \(brand) \(model)")
    }

    func stopEngine() {
        print("Stopping the engine of \(brand) \(model)")
    }

    func drive() {
        print("Driving \(brand) \(model)")
    }
}
```

Now, let's say we want to create a `Car` class that is a subclass of `Vehicle`. We can do this by using the `class` keyword followed by the subclass name, and then specifying the superclass name using a colon and the superclass name:

```swift
class Car: Vehicle {
    var numWheels: Int

    init(numWheels: Int, brand: String, model: String, year: Int) {
        self.numWheels = numWheels
        super.init(brand: brand, model: model, year: year)
    }

    func honk() {
        print("Honking the horn of \(brand) \(model)")
    }
}
```

In this subclass, we've added a new property `numWheels`, and a new method `honk()`. We've also added an `init` method that takes in arguments for both the subclass and superclass properties, and calls the superclass `init` method using `super.init()`. This ensures that the superclass properties are initialized before the subclass properties.

Now, we can create a `Car` object:

```swift
let myCar = Car(numWheels: 4, brand: "Toyota", model: "Camry", year: 2020)
```

We can access the superclass methods and properties using the `super` keyword:

```swift
myCar.startEngine() // prints "Starting the engine of Toyota Camry"
myCar.stopEngine() // prints "Stopping the engine of Toyota Camry"
myCar.drive() // prints "Driving Toyota Camry"
```

And, we can access the subclass properties and methods:

```swift
myCar.honk() // prints "Honking the horn of Toyota Camry"
print(myCar.numWheels) // prints 4
```