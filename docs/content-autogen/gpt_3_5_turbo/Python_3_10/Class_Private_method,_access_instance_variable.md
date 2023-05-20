In Python, instance variables are generally considered to be private and can be accessed or modified using private methods.

To access instance variables in a private method in Python 3.10, you will need to use the self parameter. The self parameter is a reference to the current instance of the class. By using self, you can access instance variables from within private methods.

Here is an example:

```python
class MyClass:
    def __init__(self, name):
        self.__name = name
        
    def __private_method(self):
        print(f"My name is {self.__name}")
        
my_class = MyClass("John")
my_class.__private_method() # This will throw an AttributeError because the method is private

# Accessing private method using name mangling
my_class._MyClass__private_method() # Output: "My name is John"
```

In the above example, the private method `__private_method` accesses the instance variable `__name` using the `self` parameter. To access the private method from outside the class, you can use name mangling by prefixing the method name with `_classname`. In this case, the private method `__private_method` can be accessed as `_MyClass__private_method()`.

It is worth noting that even though Python does not have true private access control, the use of name mangling provides a convention that developers should not access private variables or methods from outside the class.