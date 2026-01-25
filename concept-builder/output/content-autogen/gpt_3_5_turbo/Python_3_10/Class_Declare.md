To declare a class in Python 3.10 we use the `class` keyword followed by the name of the class and a colon. The code block following the colon contains the methods and attributes of the class.

Here is an example of declaring a simple class called `Person`:

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_hello(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")

person = Person("John", 30)
person.say_hello() # output: "Hello, my name is John and I am 30 years old."
```

In this example, the `Person` class has an `__init__` method which takes a `name` and `age` parameter and initializes the `name` and `age` instance variables. The `say_hello` method prints a greeting using the `name` and `age` instance variables.

We then create an instance of the class by calling the `Person` constructor with the arguments "John" and 30. We can then call the `say_hello` method on the `person` object. The output will be "Hello, my name is John and I am 30 years old.".