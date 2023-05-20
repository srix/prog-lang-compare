In Python, you can create private methods within a class by prefixing the method name with double underscores (like `__method_name()`). This makes the method name name-mangled and inaccessible from outside the class.

Here's an example of how private methods can be used in Python 3.10:

```
class MyClass:
    def __init__(self):
        self.__private_attribute = "I am a private attribute"
    
    def __private_method(self):
        print("I am a private method")
    
    def public_method(self):
        print(self.__private_attribute)
        self.__private_method()

obj = MyClass()
obj.public_method()  # Output: "I am a private attribute"
                     #         "I am a private method"
```

In this example, `__private_attribute` is a private attribute accessible only from within the class. Similarly, `__private_method` is a private method that can be accessed only by other methods within the class (`public_method()` in this case).

When we create an object of the class (`obj`), we can call the public method (`public_method()`) which in turn accesses the private attribute (`self.__private_attribute`) and private method (`self.__private_method()`) of the class. 

If we try to access the private method or attribute from outside the class, we'll get an `AttributeError`. 

For example:

```
obj = MyClass()
obj.__private_attribute  # Raises AttributeError: 'MyClass' object has no attribute '__private_attribute'

obj.__private_method()  # Raises AttributeError: 'MyClass' object has no attribute '__private_method'
``` 

Note: It's worth mentioning that name-mangling is not a security feature, but rather a naming convention that helps reduce the risk of naming conflicts in larger codebases.