In Python, a function is defined using the `def` keyword and can be called by its name to execute the code inside the function. However, it is also possible to create and initialize a function at runtime using the following methods:

1. `lambda` function:
Lambda functions are anonymous functions that are defined using the `lambda` keyword, which takes any number of arguments and returns the result of a single expression. Here's an example of how to initialize a `lambda` function:

```
multiply = lambda x, y: x * y
result = multiply(5, 10)
print(result)
```

Output:
```
50
```

2. Function objects:
In Python, functions are first-class objects, which means they can be passed around like any other value. We can create a function object at runtime using the `def` keyword and assigning it to a variable. Here's an example:

```
def say_hello(name):
    print(f"Hello, {name}!")

greeting = say_hello
greeting("John")
```

Output:
```
Hello, John!
```

3. `exec` function:
The `exec` function can execute arbitrary Python code at runtime. We can use this to define and initialize a function as follows:

```
def_name = "add"
def_body = "def add(x, y):\n    return x + y\n"
exec(def_body)
result = add(5, 10)
print(result)
```

Output:
```
15
```

In this example, we first define a string variable `def_body` that contains the code for a function. We then use the `exec` function to execute this code, which defines the `add` function. We can then call the `add` function like any other function.