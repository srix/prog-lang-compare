In Kotlin, you can import another file or class using the import keyword. To import a class, you need to specify the package and the class name separated by a dot. In Kotlin, everything is inside a package, so you need to specify the package of the class you want to import.

Here is an example of importing a class:

Suppose you have a class named `HelloWorld` defined in a package named `com.example.demo`. You can import this class in another file as follows:

```
import com.example.demo.HelloWorld

fun main(args: Array<String>) {
    val obj = HelloWorld()
    obj.sayHello()
}
```

In this example, we imported the `HelloWorld` class from the `com.example.demo` package. We then instantiated an object of the `HelloWorld` class and called its `sayHello()` method.

You can also import all the classes in a package using the wild card (*):

```
import com.example.demo.*

fun main(args: Array<String>) {
    val obj = HelloWorld()
    obj.sayHello()
}
```

In this example, we imported all the classes in the `com.example.demo` package using the star (*) symbol. We then instantiated an object of the `HelloWorld` class and called its `sayHello()` method.

In summary, you can import a class or a package in Kotlin using the import keyword followed by the package and class name separated by a dot.