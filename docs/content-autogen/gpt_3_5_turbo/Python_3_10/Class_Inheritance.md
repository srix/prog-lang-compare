In Python, inheritance allows us to define a class that inherits all the properties and methods of another class. The class that is being inherited from is known as the parent or base class, while the class that is inheriting from the parent class is known as the child or derived class.

To define a class that inherits from a base class in Python, we specify the base class in parentheses after the name of the derived class. Here is an example:

```python
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
        
    def make_sound(self):
        pass


class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, species="Dog")
        self.breed = breed
        
    def make_sound(self):
        return "Woof!"
        
        
class Cat(Animal):
    def __init__(self, name):
        super().__init__(name, species="Cat")
        
    def make_sound(self):
        return "Meow!"
```

In this example, we have defined a parent class `Animal` which has an `__init__` method that initializes the `name` and `species` attributes, as well as a `make_sound` method that does nothing (since different animals will have different sounds). We then define two child classes, `Dog` and `Cat`, that inherit from the `Animal` class. 

The `Dog` class overrides the `__init__` method to include a `breed` attribute, and overrides the `make_sound` method to return "Woof!" for all dogs. The `Cat` class overrides the `__init__` method to only include a `name` attribute (since all cats are the same species), and overrides the `make_sound` method to return "Meow!" for all cats.

We can now create instances of these classes and call their methods:

```python
dog = Dog("Fido", "Golden Retriever")
cat = Cat("Whiskers")

print(dog.name)  # Fido
print(dog.species)  # Dog
print(dog.breed)  # Golden Retriever

print(cat.name)  # Whiskers
print(cat.species)  # Cat

print(dog.make_sound())  # Woof!
print(cat.make_sound())  # Meow!
```

As we can see from the output, the `Dog` and `Cat` classes have inherited the `name` and `species` attributes from the `Animal` class, and have also overridden the `make_sound` method to provide animal-specific behavior.