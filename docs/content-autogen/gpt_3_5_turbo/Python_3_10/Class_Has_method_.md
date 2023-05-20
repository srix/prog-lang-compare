In Python 3.10, you can use the `hasattr()` built-in function to check if a class has a method. 

The `hasattr()` function takes two arguments: the object to check and a string that represents the name of the method you want to check for.

Here is an example code snippet:

```python
class MyClass:
    def my_method(self):
        pass

# Check if MyClass has a method called "my_method"
if hasattr(MyClass, "my_method"):
    print("MyClass has a method called 'my_method'")
else:
    print("MyClass does not have a method called 'my_method'")
```

This will output:

```
MyClass has a method called 'my_method'
```

If you want to check for a built-in method, you can use the `dir()` function to get a list of all the attributes (including methods) of the class. Here is an example code snippet:

```python
class MyClass:
    pass

# Check if MyClass has a built-in method called "__init__"
if "__init__" in dir(MyClass):
    print("MyClass has a built-in method called '__init__'")
else:
    print("MyClass does not have a built-in method called '__init__'")
```

This will output:

```
MyClass has a built-in method called '__init__'
```