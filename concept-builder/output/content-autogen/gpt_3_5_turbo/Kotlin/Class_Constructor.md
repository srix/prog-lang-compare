In Kotlin, a constructor is a special member function that is called when an instance or object of a class is created. Constructors can help initialize class properties or members when an object of the class is created.

Here are the basic syntax and examples of how to use constructors in Kotlin:

1. Primary Constructor

The primary constructor in Kotlin is defined as part of the class header. It can have parameters and is responsible for initializing the primary properties of the class.

```kotlin
class Person(val name: String, val age: Int) {
    init {
        println("Name is $name")
        println("Age is $age")
    }
}
```

In this example, we define a class Person with primary constructor parameters `name` and `age`. Inside the `init` block, we print the `name` and `age` values. 

To create an instance of the class and pass values to the constructor, we can use the following code:

```kotlin
val person = Person("John", 25)
```

This creates a new `person` object with `name` set to "John" and `age` set to 25. 

2. Secondary Constructor

In Kotlin, a class can have one or more secondary constructors, which are defined inside the class body. They are written using the constructor keyword followed by the parameter list.

```kotlin
class Person {
    var name: String = ""
    var age: Int = 0

    constructor(name: String, age: Int) {
        this.name = name
        this.age = age
    }
}
```

This is an example of a secondary constructor for the Person class. It takes two parameters `name` and `age` and initializes the `name` and `age` properties. 

To create an instance of the class using this constructor, we can use the following code:

```kotlin
val person = Person("John", 25)
```

This creates a new `person` object with `name` set to "John" and `age` set to 25.

3. Empty Constructor

If a class does not have any constructors defined, Kotlin provides an empty constructor. It does not take any parameters and simply initializes the class with default values.

```kotlin
class Person {
    var name: String = ""
    var age: Int = 0
}
```

In this example, we define an empty constructor for the Person class. 

To create an instance of the class using the empty constructor, we can use the following code:

```kotlin
val person = Person()
```

This creates a new `person` object with default property values of `name` set to an empty string and `age` set to 0.