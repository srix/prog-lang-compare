To generate random numbers in Python 3.10, you can use the built-in `random` module. This module provides a wide range of functions to generate random numbers and sequences. Here are some examples:

### Generate a random integer between two numbers
You can use the `randint()` function to generate a random integer between two specified numbers. For example, to generate a random integer between 1 and 10:

```python
import random

x = random.randint(1, 10)
print(x)
```

Output:
```
6
```

### Generate a random float between two numbers
You can use the `uniform()` function to generate a random float between two specified numbers. For example, to generate a random float between 0 and 1:

```python
import random

x = random.uniform(0, 1)
print(x)
```

Output:
```
0.6724468632278536
```

### Generate a random element from a list
You can use the `choice()` function to randomly select an element from a list. For example, to randomly select a color from a list of colors:

```python
import random

colors = ['red', 'green', 'blue']
x = random.choice(colors)
print(x)
```

Output:
```
blue
```

### Generate a random sample from a list
You can use the `sample()` function to randomly select a sample of elements from a list without replacement. For example, to randomly select 3 elements from a list of numbers:

```python
import random

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
x = random.sample(numbers, 3)
print(x)
```

Output:
```
[5, 9, 1]
```

### Shuffle a list randomly
You can use the `shuffle()` function to randomly shuffle the elements in a list. For example, to shuffle a list of numbers:

```python
import random

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
random.shuffle(numbers)
print(numbers)
```

Output (random order of numbers):
```
[6, 9, 8, 5, 2, 7, 3, 1, 4]
```