In Python, we can access instance variables from within a private method by using the `self` keyword, which refers to the current instance of the class. Private methods in Python are denoted by using the double underscores (`__`) prefix before the method name.

Here is an example:

```
class MyClass:
    def __init__(self, var):
        self.__my_var = var

    def __private_method(self):
        print("This is a private method")
        print("My variable value is:", self.__my_var)

    def public_method(self):
        print("This is a public method")
        self.__private_method()

obj = MyClass("hello")
obj.public_method()
```

In this example, we have a class `MyClass` that has an instance variable `__my_var`. We define a private method `__private_method()` that prints a message and also prints the value of the instance variable `__my_var`. The public method `public_method()` calls the private method `__private_method()`.

When we create an object of class `MyClass` and call the public method `public_method()`, it will call the private method `__private_method()` and print both messages, as well as the value of the instance variable `__my_var`. 

Note that it is generally considered bad practice to access instance variables from a private method because it defeats the purpose of encapsulation. Private methods should only interact with other class methods and not directly with instance variables.