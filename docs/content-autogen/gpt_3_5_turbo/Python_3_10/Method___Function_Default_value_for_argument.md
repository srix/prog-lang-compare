In Python, it is possible to define a default value for an argument in a method or function. This default value will be used if the caller does not provide a value for that particular argument. This feature is useful when you have a method or function with many parameters, but some of them will be commonly used with the same value.

Here's an example that demonstrates how to use default value for argument in a function in Python:

``` python
def greet(name, message="Hello,"):
    print(message, name)

greet("John") # Output: Hello, John
greet("Mary", "Hi,") # Output: Hi, Mary
```

In this code, we've defined a `greet()` function that has two parameters: `name` and `message`. We've used the assignment operator to define a default value for `message` as `"Hello,"`.

If the caller of the function doesn't provide a value for `message`, then the default value will be used. So when we call `greet("John")`, it will print `"Hello, John"` because we didn't pass a value for `message`.

However, if we call `greet("Mary", "Hi,")`, it will print `"Hi, Mary"` because we passed a different value for `message`.

Note that the parameters with default values must be the last ones in the list of the parameters. For example, the following code will raise an error:

``` python
def greet(message="Hello,", name):
    print(message, name)
```

This is because in the method signature, `message` is defined before `name`, but `message` has a default value, so it is expected to come after `name`.