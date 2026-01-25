To define a static method in a class R, you need to use the `@staticmethod` decorator followed by the function definition. Here is a simple example:

```
class R:
    @staticmethod
    def print_hello():
        print("Hello, World!")
```

In this example, we define a class R with a static method `print_hello()`. This method doesn't require an instance of the class to be called, you can call it using the class itself, like this:

```
R.print_hello()
```

This will execute the `print_hello()` method and output `Hello, World!`.

Another example is a static method that calculates the sum of two numbers:

```
class Calculator:
    @staticmethod
    def add(x, y):
        return x + y
```

In this example, we define a class Calculator with a static method `add()`. This method takes two arguments, `x` and `y`, and returns their sum. You can call this method using the class itself, like this:

```
result = Calculator.add(2, 3)
print(result)  # Output: 5
```

This will execute the `add()` method with arguments `2` and `3`, and output `5`.