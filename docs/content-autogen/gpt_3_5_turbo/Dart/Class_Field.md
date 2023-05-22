In Dart, fields are used to represent the characteristics or properties of a class. Fields can be either instance variables or class variables. 

Instance variables are fields that belong to instances of a class. They can have individual values for each object created from the class. Class variables, on the other hand, belong to the class itself and are shared by all instances of the class.

Here's an example of using instance variables in a class:

```dart
class Car {
  String make;
  String model;
  int year;

  Car(String make, String model, int year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  void printCarInfo() {
    print('Make: $make, Model: $model, Year: $year');
  }
}

void main() {
  Car myCar = new Car('Toyota', 'Corolla', 2015);
  myCar.printCarInfo();
}
```

In this example, the `Car` class has three instance variables: `make`, `model`, and `year`. These variables are assigned values using the constructor when a new object is created. The `printCarInfo()` method is used to print the values of these fields for an instance of the class.

Now let's look at an example of using class variables in a class:

```dart
class Counter {
  static int count = 0;

  void incrementCount() {
    count++;
  }

  void printCount() {
    print('Count: $count');
  }
}

void main() {
  Counter c1 = new Counter();
  c1.incrementCount();
  c1.printCount();

  Counter c2 = new Counter();
  c2.incrementCount();
  c2.printCount();
  
  // Output:
  // Count: 1
  // Count: 2
}
```

In this example, the `Counter` class has a static class variable called `count`. This variable is shared by all instances of the class. The `incrementCount()` method is used to increment the `count` field for a `Counter` object, and the `printCount()` method is used to print the value of the `count` field for any `Counter` object. When two `Counter` objects are created and `incrementCount()` is called on each, the `printCount()` method shows that the `count` field has been incremented for both objects.

In summary, fields in Dart are a way to represent the characteristics or properties of a class, using either instance variables or class variables, depending on whether the field should be unique to each object or shared by all objects of the class.