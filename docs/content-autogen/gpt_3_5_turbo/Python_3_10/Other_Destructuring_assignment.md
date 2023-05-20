Destructuring assignment is a shorthand syntax in Python that allows you to extract values from an iterable or a sequence into individual variables. In Python 3.10, a new syntax for specifying defaults has been added, which makes destructuring more powerful.

Here are a few examples to illustrate how to use destructuring assignment in Python 3.10:

1. Destructuring a tuple:

```python
tuple1 = (10, 20, 30)
a, b, c = tuple1
print(a, b, c)   # Output: 10 20 30
```

2. Destructuring a list:

```python
list1 = [10, 20, 30]
a, b, c = list1
print(a, b, c)   # Output: 10 20 30
```

3. Destructuring with default values:

```python
person = {'name': 'John', 'age': 30}
name = person.get('name', 'Unknown')
age = person.get('age', 'Unknown')
print(name, age)   # Output: John 30

# Alternatively, in Python 3.10 you can use the new syntax:

person = {'name': 'John'}
name, age = person.get('name', 'Unknown'), person.get('age', 'Unknown')
print(name, age)   # Output: John Unknown
```

4. Destructuring with nested structures:

```python
data = {
    'person': {'name': 'John', 'age': 30},
    'scores': [80, 90, 95]
}
person_name = data['person']['name']
person_age = data['person']['age']
score1, score2, score3 = data['scores']
print(person_name, person_age, score1, score2, score3)   # Output: John 30 80 90 95

# Alternatively, you can use destructuring:

{'person': {'name': person_name, 'age': person_age}, 'scores': [score1, score2, score3]} = data
print(person_name, person_age, score1, score2, score3)   # Output: John 30 80 90 95
```