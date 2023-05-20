In Java, a field is a variable that belongs to a class or an object. It stores the data that can be accessed and modified by the code in the class. Here are some examples of how to use fields in a Java class:

1. Declaring a field in a class:

```java
public class Person {
  String name;
  int age;
}
```

In this example, the `Person` class has two fields: `name` of type `String` and `age` of type `int`.

2. Initializing a field with a value:

```java
public class Student {
  String name = "John Smith";
  int age = 18;
}
```

In this example, the `Student` class has two fields `name` and `age` that are initialized with default values.

3. Accessing and modifying a field:

```java
public class Car {
  String color;
  
  public void setColor(String newColor) {
    color = newColor;
  }
  
  public String getColor() {
    return color;
  }
}

// Main program
Car mycar = new Car();
mycar.setColor("red");
System.out.println(mycar.getColor());
```

In this example, the `Car` class has a field `color`, which can be set and retrieved using the methods `setColor()` and `getColor()`. The `mycar` object is created and its color is set to "red" using the `setColor()` method. Then, the `getColor()` method is called and the output is "red".

Fields are an essential part of Java classes as they allow us to store and retrieve data within objects.