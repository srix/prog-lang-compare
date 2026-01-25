Sure, here's how to define a static method in Python 3.10:

In Python, you can define a static method in a class by using the `@staticmethod` decorator before the method definition. A static method is a method that belongs to a class, not an instance of that class. Thus, it's not associated with any instance of the class.

Here's the syntax for defining a static method in a Python class:

```python
class MyClass:
    @staticmethod
    def my_static_method(param1, param2):
        # do something
        pass
```

In the above code, we defined a static method `my_static_method`. We used the `@staticmethod` decorator to indicate that this method is a static method.

Here's an example:

```python
class Calculator:
    @staticmethod
    def add(a, b):
        return a + b

print(Calculator.add(2, 3))  # Output: 5
```

In the above example, we defined a static method `add` in the `Calculator` class. We used the `@staticmethod` decorator to indicate that this method is a static method. We called the static method using the class name `Calculator.add(2, 3)` and it returned the sum of the two values.