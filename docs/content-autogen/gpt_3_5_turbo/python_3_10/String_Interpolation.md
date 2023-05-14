In Python 3.10, string interpolation has been significantly improved with the introduction of the `f-string` (formatted string literal) syntax. 

To use string interpolation in Python 3.10:

1. Start the string with the letter "f" or "F".
2. Inside the string, use curly braces {} to indicate the variable or expression to be interpolated.

Here are some examples:

Example 1: Interpolating string variables
```python
name = "Alice"
age = 25
print(f"My name is {name} and I am {age} years old.")
```
Output:
```
My name is Alice and I am 25 years old.
```

Example 2: Interpolating mathematical expressions
```python
x = 10
y = 5
print(f"The result of {x} + {y} is {x + y}.")
```
Output:
```
The result of 10 + 5 is 15.
```

Example 3: Interpolating attributes of objects
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person = Person("Bob", 30)
print(f"{person.name} is {person.age} years old.")
```
Output:
```
Bob is 30 years old.
```

Example 4: Interpolating dictionary values 
```python
person = {'name': 'Charlie', 'age': 35}
print(f"{person['name']} is {person['age']} years old.")
```
Output:
```
Charlie is 35 years old.
```