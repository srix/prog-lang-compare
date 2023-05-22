In Scala, we call a method in a class by using the dot notation on an instance or object of the class. Here is an example:

```scala
class MyClass {
  def greet(name: String): Unit = {
    println(s"Hello, $name!")
  }
}

// Create an instance of MyClass
val myObj = new MyClass()

// Call the greet method on the instance
myObj.greet("John")
```

In this example, we define a `MyClass` with a method `greet` that takes a `String` parameter `name` and prints a greeting message. We then create an instance of `MyClass` called `myObj` using the `new` keyword. Finally, we call the `greet` method on `myObj` by using the dot notation with the method name and passing an argument of `"John"`.

The output of this program will be:

```scala
Hello, John!
```