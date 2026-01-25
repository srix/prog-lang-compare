In Python 3.10, we can use the `hasattr()` built-in function to check if a class has a method or not. The `hasattr()` function takes two arguments: the object to check and the method name to look for. It returns `True` if the method is found, and `False` otherwise.

Here's an example. Let's assume we have a class named `Person` that has two methods, `__init__()` and `greet()`. We can check if the class has the `greet()` method as follows:

```python
class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print(f"Hello, my name is {self.name}.")


# check if the Person class has the greet() method
if hasattr(Person, "greet"):
    print("Person class has the greet() method.")
else:
    print("Person class does not have the greet() method.")
```

The output of the above code will be: `Person class has the greet() method.`

On the other hand, if we check if the `Person` class has a method named `walk()`, which it doesn't, the output will be: `Person class does not have the walk() method.`

```python
# check if the Person class has the walk() method
if hasattr(Person, "walk"):
    print("Person class has the walk() method.")
else:
    print("Person class does not have the walk() method.")
```

I hope this helps!