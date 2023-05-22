In Kotlin, a field in a class is a variable declared inside a class that is used to hold data that belongs to instances of that class. Fields in Kotlin are declared using the "var" or "val" keyword depending on whether the field's value will change or not. 

Here's an example:

```kotlin
class Person {
  var name: String = ""  // "var" keyword is used for a mutable property
  val age: Int = 0       // "val" keyword is used for an immutable property
}
```

In the above example, the `Person` class has two fields, `name` and `age`. The `name` field is mutable, which means its value can be changed, whereas the `age` field is immutable, which means its value cannot be changed once it is set.

To use these fields, we first need to create an instance of the `Person` class and then we can access its fields using the dot notation.

```kotlin
fun main() {
    val person = Person()
    person.name = "John"
    println("Name: ${person.name}, Age: ${person.age}")
}
```

In the above example, we create a new instance of the `Person` class and set the `name` field to "John". We then print the value of both fields using string interpolation.

Output:
```
Name: John, Age: 0
```

As we can see, the `name` field got the value we set, but the `age` field is still 0 because it was declared as immutable and its value cannot be changed.

In summary, fields in Kotlin are used to hold data that belongs to instances of a class. They are declared using the "var" or "val" keywords depending on whether they should be mutable or immutable. We can access and modify the value of a field using the dot notation on an instance of the class.