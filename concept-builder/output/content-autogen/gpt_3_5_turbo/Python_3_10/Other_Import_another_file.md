In Python, we can use the `import` statement to include code from other files in our program. To import a module or a file in Python 3.10, follow the following syntax:

```python
import <module_name>
```

Here's an example:

Assume we have a file called `my_module.py` that defines a function called `greet`:

```python
# my_module.py 
def greet(name):
    print(f"Hello, {name}!")
```

We can import the `greet` function from `my_module.py` into another file like this:

```python
# main.py
import my_module

my_module.greet("John")
```

Output:
```
Hello, John!
```

Another approach to importing a specific function from the module is by using the `from` keyword. Here's an example:

```python
# my_module.py
def square(x):
    return x * x

def cube(x):
    return x * x * x
```

We can import just the `square` function from `my_module.py` file into another file like this:

```python
# main.py
from my_module import square

print(square(3))
```

Output: 
```
9
```

Finally, you can also give aliases to modules by using the `as` keyword. Here's an example:

```python
# my_module.py
def calculate_product(x, y):
    return x * y

# main.py
import my_module as mm

print(mm.calculate_product(3, 4))
```

Output: 
```
12
``` 

These are just some basic examples of how to import modules or files in Python 3.10. There are other ways to import modules, including importing specific variables, classes, or methods.