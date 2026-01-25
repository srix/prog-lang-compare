In Scala, we can use reflection to check whether a class has a method or not. Reflection is a powerful feature in Scala that enables us to inspect and manipulate classes, objects, and functions at runtime. The following are the steps to check if a class has a method in Scala:

Step 1: Import the necessary reflection libraries
```scala
import scala.reflect.runtime.universe._
import scala.reflect._
```

Step 2: Get the class symbol for the class whose method you want to check
```scala
val symbol = typeOf[MyClass].typeSymbol.asClass
```

Step 3: Get the method symbol for the method you want to check.
```scala
val methodSymbol = symbol.typeSignature.member(TermName("myMethod")).asMethod
```
In the above line of code, "MyClass" is the name of the class and "myMethod" is the name of the method.

Step 4: Check if the method symbol is defined in the class symbol using the "isMethod" method.
```scala
println(methodSymbol.isMethod)
```
This will print "true" if the method is defined in the class symbol, otherwise it will print "false".

Here's an example code snippet that demonstrates how to check if a given class has a method named "myMethod":

```scala
object ReflectionExample extends App {
  import scala.reflect.runtime.universe._
  import scala.reflect._

  // Define a class with a method
  class MyClass {
    def myMethod() = println("Hello world!")
  }

  // Get the class symbol for MyClass
  val symbol = typeOf[MyClass].typeSymbol.asClass

  // Get the method symbol for the method named "myMethod"
  val methodSymbol = symbol.typeSignature.member(TermName("myMethod")).asMethod

  // Check if myMethod is defined in MyClass
  println(methodSymbol.isMethod)
}
```

The output of the above code will be "true" since the method "myMethod" is defined in the class "MyClass".