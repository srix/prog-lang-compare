Inheritance is a key feature of object-oriented programming (OOP) where a subclass inherits the properties and behaviors of a superclass. In Java, inheritance is achieved using the `extends` keyword. Let's look at an example:

```java
public class Animal {
    String name;
    int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void eat() {
        System.out.println(name + " is eating.");
    }

    public void sleep() {
        System.out.println(name + " is sleeping.");
    }
}

public class Dog extends Animal {
    String breed;

    public Dog(String name, int age, String breed) {
        super(name, age);
        this.breed = breed;
    }

    public void bark() {
        System.out.println(name + " is barking.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Sparky", 3, "Golden Retriever");
        dog.eat(); // Output: Sparky is eating.
        dog.sleep(); // Output: Sparky is sleeping.
        dog.bark(); // Output: Sparky is barking.
    }
}
```

In the example above, we have a `Animal` superclass with two properties (`name` and `age`) and two methods (`eat()` and `sleep()`). The `Dog` subclass extends `Animal` and adds a new property (`breed`) and a new method (`bark()`).

In the `Dog` constructor, we call the `super()` method to initialize the `name` and `age` properties from the `Animal` superclass.

In the `Main` class, we create an instance of `Dog` and call the methods from both the `Animal` superclass and the `Dog` subclass.

Inheritance allows us to reuse code and create a hierarchy of classes that share common properties and behaviors.