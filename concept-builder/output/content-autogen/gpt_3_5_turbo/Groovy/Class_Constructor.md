In Groovy, constructors are used to initialize the instance variables of a class when an object of that class is created. They have the same name as the class and are defined using the keyword `def`.

Here is an example of a class with a constructor:

```
class Student {
    def firstName
    def lastName

    def Student(String firstName, String lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}
```

In this example, we define a `Student` class with two instance variables: `firstName` and `lastName`. We also define a constructor with the signature `def Student(String firstName, String lastName)` that initializes these variables with the passed parameters.

To create an object of this class, we simply call the `new` keyword:

```
def student = new Student("John", "Doe")
```

This creates a new `Student` object with the `firstName` value of "John" and the `lastName` value of "Doe".

You can also provide default values for parameters in the constructor, like so:

```
class Student {
    def firstName
    def lastName

    def Student(String firstName = "John", String lastName = "Doe") {
        this.firstName = firstName
        this.lastName = lastName
    }
}
```

Here, if no parameters are passed to the constructor, the instance variables will be initialized with the default values of "John" and "Doe".

Overall, constructors in Groovy are a simple and efficient way to initialize instance variables when an object is created, allowing for more streamlined and organized code.