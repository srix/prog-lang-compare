In Dart, instance variables can only be accessed within the class they are defined in. Private methods and variables in Dart are denoted by prefixing the identifier name with an underscore (_). Therefore, to access an instance variable in a private method in Dart, you can simply use the variable name within the private method.

Here is an example code snippet demonstrating how to access an instance variable within a private method in Dart:

```
class Person {
  String _name;
  
  void _privateMethod() {
    print('My name is $_name');
  }
  
  void setName(String name) {
    _name = name;
    _privateMethod();
  }
}
```

In this example, the private method `_privateMethod()` accesses the private instance variable `_name` using the `_name` identifier within the method body. This method is called within the `setName()` public method, which sets the value of the `_name` variable and then calls `_privateMethod()` to print the value of the variable.

Note that you cannot access private variables or methods of another class, even if they are inherited by a child class.