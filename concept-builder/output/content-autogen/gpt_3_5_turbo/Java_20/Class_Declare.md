To declare a class in Java, you must use the `class` keyword followed by the name of the class. Below are examples of how to declare a class in Java:

Example 1: Simple Class Declaration

```
public class MyClass {
   // Class Body
}
```

Example 2: Class Declaration with a Private Field and Public Method

```
public class Person {
    private String name;
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getName() {
        return name;
    }
}
```

Example 3: Class Declaration with Constructor

```
public class Car {
    private String color;
    private String make;
    
    public Car(String color, String make) {
        this.color = color;
        this.make = make;
    }
    
    public String getColor() {
        return color;
    }
    
    public String getMake() {
        return make;
    }
}
```

Example 4: Class Declaration with Inheritance

```
public class Animal {
    public void eat() {
        System.out.println("The animal is eating.");
    }
}

public class Dog extends Animal {
    public void bark() {
        System.out.println("Woof woof!");
    }
}

```

Example 5: Class Declaration with Interfaces

```
interface Employee {
    void setSalary(double salary);
    double getSalary();
}

public class Manager implements Employee {
    private double salary;
    
    public void setSalary(double salary) {
        this.salary = salary;
    }
    
    public double getSalary() {
        return salary;
    }
}
```