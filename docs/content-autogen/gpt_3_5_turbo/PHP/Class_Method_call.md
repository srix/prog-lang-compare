Sure, I'd be happy to explain how to call a method in a class in PHP!

To call a method in a class, you first need to create an instance of the class using the `new` keyword. Once you have created an instance of the class, you can call its methods using the `->` operator followed by the name of the method.

Here's an example class with a method:

```
class MyClass {
  public function myMethod() {
    echo "Hello, world!";
  }
}
```

To call the `myMethod()` method in this class, you would create an instance of the class and then call the method on that instance, like so:

```
$myObject = new MyClass();
$myObject->myMethod(); // Output: Hello, world!
```

In this example, we first create a new instance of the `MyClass` class using the `new` keyword. Then we call the class's `myMethod()` method by using the `->` operator followed by the name of the method. This causes the method to be executed, which in turn outputs the string "Hello, world!" to the screen.

I hope that helps! Let me know if you have any more questions.