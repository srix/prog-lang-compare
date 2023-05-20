In Python 3.10, you can use the "field" syntax to declare instance variables in a more concise and readable way. Here's an example:

```
class Person:
    name: str
    age: int = 0
    height: float = 0.0
```

In this example, we have defined a class called "Person" with three fields: "name", "age", and "height". "name" is declared as a string, while "age" and "height" are integers and floats respectively. We have also initialized "age" and "height" to zero, although this is optional.

Now we can create instances of the Person class and set their attributes. Here's how:

```
person1 = Person()
person1.name = "Alice"
person1.age = 25
person1.height = 1.65

person2 = Person()
person2.name = "Bob"
person2.age = 30
person2.height = 1.80
```

In this example, we created two instances of the Person class: "person1" and "person2". We set their attributes using dot notation.

Using the "field" syntax can make your code more readable and easier to understand by clearly declaring the instance variables as fields of the class. It also ensures that the variables are only accessible within the class instance, helping to prevent unwanted modification or access.