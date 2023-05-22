In Dart, private methods and variables can be defined using an underscore prefix before the name. Private methods can only be accessed within the same dart library. Here is an example of how to define and use a private method in Dart:

```
class ExampleClass {
  String _privateMethod() {
    // private method definition
    return "This is a private method.";
  }
  
  void publicMethod() {
    // public method that calls private method
    print(_privateMethod());
  }
}

void main() {
  ExampleClass example = ExampleClass();
  example.publicMethod(); // Output: This is a private method.
  
  // This would produce an error as the private method can only be accessed within the same library
  // print(example._privateMethod());
}
```

In this example, we have defined a private method `_privateMethod()` that returns a string. This private method can only be called within the same class or library and cannot be accessed from outside. We have also defined a public method `publicMethod()` that calls the private method. When we call the `publicMethod()`, It will call the `_privateMethod()`.
