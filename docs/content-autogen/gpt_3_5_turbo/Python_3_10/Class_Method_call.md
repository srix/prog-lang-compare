In Python, a method is a function that belongs to an object. To call a method in a class, you need to create an instance of the class and then call the method using the dot notation. Here's an example:

```python
class MyClass:
    def hello(self):
        print("Hello, world!")

my_object = MyClass()
my_object.hello()
```

In this example, we define a class called `MyClass` with a method called `hello()`. The `hello()` method simply prints "Hello, world!" to the console. We then create an instance of the `MyClass` class and assign it to the variable `my_object`. Finally, we call the `hello()` method on the `my_object` instance using the dot notation.

The output of the code will be:

```
Hello, world!
```

Here's another example where we pass arguments to the method:

```python
class Rectangle:
    def calculate_area(self, width, height):
        return width * height

my_rect = Rectangle()
area = my_rect.calculate_area(5, 10)
print(area)
```

In this example, we define a class called `Rectangle` with a method called `calculate_area()`. The `calculate_area()` method takes two arguments: `width` and `height`. The method multiplies them together and returns the result. We then create an instance of the `Rectangle` class and assign it to the variable `my_rect`. Finally, we call the `calculate_area()` method on the `my_rect` instance, passing in the values `5` and `10` for the `width` and `height` arguments, respectively. We store the result in a variable called `area` and print it to the console.

The output of the code will be:

```
50
```