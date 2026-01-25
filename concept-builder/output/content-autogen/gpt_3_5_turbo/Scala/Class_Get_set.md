In Scala, get/set methods are used to access the values of fields in an object, and ensure they are modified safely.

Here's an example:

```
class Person(var name: String, var age: Int) {
    def getName(): String = name
    def getAge(): Int = age

    def setName(name: String): Unit = {
        this.name = name
    }

    def setAge(age: Int): Unit = {
        this.age = age
    }
}
```

In the example above, we have a `Person` class that has a `String` name and an `Int` age. To access these values, we've created `getName` and `getAge` methods that simply return their respective field values.

However, if we want to modify these values from outside of the class, we wouldn't want just anybody to do it. We want to ensure that the values are changed safely, so we need to use `set` methods.

In this example, we've created `setName` and `setAge` methods that take in new values for their respective fields. They then use the `this` keyword to refer to the object's fields and reassign them.

Here's an example usage:

```
val person = new Person("John", 25)
println(person.getName()) // prints "John"
println(person.getAge()) // prints 25

person.setName("Jane")
person.setAge(30)

println(person.getName()) // prints "Jane"
println(person.getAge()) // prints 30
```

With `set` methods, we can control how the fields are being modified and ensure that no unexpected changes are happening.