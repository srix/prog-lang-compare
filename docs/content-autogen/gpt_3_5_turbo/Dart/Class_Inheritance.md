Inheritance is a feature of object-oriented programming that allows developers to create a new class from an existing one. The new class inherits all the properties and methods of the parent or base class, as well as any interfaces implemented by the parent class.

Here's an example in Dart:

```dart
// Parent class
class Car {
  String make;
  String model;
  int year;

  void startEngine() {
    print("Starting engine for $make $model $year");
  }
}

// Child class
class ElectricCar extends Car {
  int batteryCapacity;

  void chargeBattery(int amount) {
    batteryCapacity += amount;
    print("Charging $amount kWh");
  }
}

// Usage
void main() {
  ElectricCar tesla = ElectricCar();
  tesla.make = "Tesla";
  tesla.model = "Model S";
  tesla.year = 2021;
  tesla.batteryCapacity = 80;
  tesla.startEngine(); // Starting engine for Tesla Model S 2021
  tesla.chargeBattery(10); // Charging 10 kWh
}
```

In this example, we have a `Car` class that has properties for the make, model, and year. It also has a method for starting the engine.

Then we have an `ElectricCar` class that extends the `Car` class. It adds a property for the battery capacity and a method for charging the battery.

When we create an instance of the `ElectricCar` class and set the properties, we can call the `startEngine` method from the parent class. We can also call the `chargeBattery` method from the child class.

Inheritance is useful for minimizing code duplication, as well as creating a hierarchy of classes that share common functionality.