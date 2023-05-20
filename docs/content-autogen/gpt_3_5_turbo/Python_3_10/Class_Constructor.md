In Python, a constructor is used to initialize an object of a class. It is called automatically when an object is created. Here is an example that demonstrates how to define and use a constructor in Python 3.10:

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print(f"My name is {self.name} and I am {self.age} years old.")

# Create a new Person object
p = Person("John", 25)
p.introduce()  # output: "My name is John and I am 25 years old."
```

In this example, `Person` is a class that has a constructor (`__init__`) which takes two parameters (`name` and `age`). When a new `Person` object is created with `Person("John", 25)`, the constructor is called automatically with the values passed to it. These values are then used to set the `name` and `age` attributes of the object.

The `introduce` method is a simple method of the `Person` class that prints out a message containing the `name` and `age` of the person. When the `introduce` method is called on the `p` object, it outputs the message "My name is John and I am 25 years old."