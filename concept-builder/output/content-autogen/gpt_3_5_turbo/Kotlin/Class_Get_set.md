In Kotlin, get/set is used to access the private fields of a class and to set or get their values. 

Here's an example:

```
class Person() {
    private var name: String = ""
    
    // Getter method
    fun getName(): String {
        return name
    }
    
    // Setter method
    fun setName(newName: String) {
        name = newName
    }
}
```

Here, the `name` property is declared as private, which means it cannot be accessed from outside the class. To access the value of `name` from outside the class, we define a getter method `getName()` that returns the value of `name`. Similarly, to set the value of `name` from outside the class, we define a setter method `setName()` that takes a new value for `name`.

However, Kotlin provides a more concise way of defining getters and setters through properties.

```
class Person() {
    var name: String = ""
        get() = field
        set(value) {
            field = value
        }
}
```

In this example, we define the `name` property with its getter and setter methods. The `field` property inside the getter and setter is used to access the underlying field of the property, which is `name` in this case. 

Now, we can access and modify the `name` property of an instance of the `Person` class as follows:

```
val person = Person()
person.name = "John"    // sets the value of name to "John"
println(person.name)   // prints "John"
```

We can also simplify the code further using the shorthand notation for getters and setters:

```
class Person() {
    var name: String = ""
        get() = field
        set(value) = run { field = value }
}
```

Here, we use the `run` function along with assignment to set the value of `name`. The shorthand notation can be used if the logic inside the getter and setter methods is simple enough.