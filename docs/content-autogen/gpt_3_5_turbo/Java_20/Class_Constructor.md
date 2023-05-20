In Java, a constructor is a special method that is used to initialize an object of a class. When an object is created using the `new` keyword, the constructor is called to initialize the object. 

Here's an example of a constructor for a Car class:

```
public class Car {
    String make;
    String model;
    int year;

    public Car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
```

In this example, the `Car` class has three instance variables: `make`, `model`, and `year`. The constructor takes three parameters to initialize these variables.

To create a new `Car` object using the constructor, you would use the following code:

```
Car myCar = new Car("Toyota", "Camry", 2021);
```

This creates a new `Car` object with the make "Toyota", model "Camry", and year 2021.

Here's another example of a constructor for a Student class:

```
public class Student {
    String name;
    int age;
    String major;

    public Student(String name, int age, String major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }

    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Major: " + major);
    }
}
```

In this example, the `Student` class has three instance variables: `name`, `age`, and `major`. The constructor takes three parameters to initialize these variables.

The `Student` class also has a method called `displayInfo()` that prints out the values of the instance variables.

To create a new `Student` object using the constructor and call the `displayInfo()` method, you would use the following code:

```
Student myStudent = new Student("John", 20, "Computer Science");
myStudent.displayInfo();
```

This creates a new `Student` object with the name "John", age 20, and major "Computer Science", and then calls the `displayInfo()` method to print out the values of the instance variables.