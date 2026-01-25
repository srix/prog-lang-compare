In Scala, a constructor is defined with the same name as the class. There are two types of constructors in Scala:

1. Primary Constructor
2. Auxiliary Constructor

## Primary Constructor

The primary constructor in Scala is defined along with the class definition. It can take zero or more parameters:

```scala
class Person(var name: String, var age: Int) {
    println("Person created")

    def introduce(): Unit = {
        println(s"My name is $name and I am $age years old.")
    }
}
```

In the above example, `name` and `age` are the parameters of the primary constructor. When an object of the class is created, the primary constructor is called automatically, and it prints "Person created".

## Auxiliary Constructor

The auxiliary constructors in Scala are defined with the name "this". There can be multiple auxiliary constructors defined in a class, but they must call either another auxiliary constructor or the primary constructor of the class.

```scala
class Person(var name: String, var age: Int) {
    def this(name: String) {
        this(name, 0)
    }

    def introduce(): Unit = {
        println(s"My name is $name and I am $age years old.")
    }
}
```

In the above example, an auxiliary constructor is defined, which takes only the `name` parameter. It calls the primary constructor using `this(name, 0)` which initializes `age` with 0.

Now, let's create objects of the `Person` class and print their introduction:

```scala
val person1 = new Person("John", 30)
person1.introduce() // My name is John and I am 30 years old.

val person2 = new Person("Jane")
person2.introduce() // My name is Jane and I am 0 years old.
```

In the above example, we have created two objects of the `Person` class using the primary and the auxiliary constructors.