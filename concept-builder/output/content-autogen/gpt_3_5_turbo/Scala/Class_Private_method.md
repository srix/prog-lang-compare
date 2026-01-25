In Scala, a private method is a method that can only be accessed within the scope of the class/object it belongs to. It cannot be accessed by any other class or object outside of its scope. 

To declare a private method in Scala, use the keyword "private" before the method name. For example:

```
class MyClass {
  private def myPrivateMethod(x: Int): Int = {
    x * x
  }
}
```

In the above example, we have declared a private method called "myPrivateMethod" inside a class called "MyClass". This method can only be accessed within the class "MyClass". 

Here's an example of how to use a private method inside the same class:

```
class MyClass {
  private def myPrivateMethod(x: Int): Int = {
    x * x
  }

  def publicMethod(x: Int): Int = {
    myPrivateMethod(x) + 1
  }
}
```

In the above example, we have declared a public method called "publicMethod". This method can be accessed by any object of the class "MyClass". Inside this method, we are calling the private method "myPrivateMethod" which returns the square of a number and adding 1 to it.

However, if we try to access this private method outside the class, we'll get a compilation error. For example:

```
class AnotherClass {
  val obj = new MyClass
  obj.myPrivateMethod(5) // This will throw an error as myPrivateMethod is inaccessible
}
```

In conclusion, private methods in Scala are useful to encapsulate certain functionality that should not be exposed outside the class/object. It ensures that the methods are only used as intended and helps prevent any unintended modifications.