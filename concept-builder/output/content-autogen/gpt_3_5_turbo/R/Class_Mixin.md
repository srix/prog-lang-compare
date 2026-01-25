In R, mixins are used to combine functionality from multiple classes through inheritance. To use a mixin in R, you need to create a new class that inherits both from the base class and the mixin class. Here's an example:

```
# define the mixin class
my_mixin <- setRefClass("MyMixin", methods = list(
  say_hello = function() {
    cat("Hello, world!\n")
  }
))

# define the base class
my_base <- setRefClass("MyBase", methods = list(
  my_method = function() {
    cat("This is my method\n")
  }
))

# define the new class that inherits from both the base class and the mixin class
my_class <- setRefClass("MyClass", contains = c("MyBase", "MyMixin"))

# create an instance of the new class and call methods from both the base class and mixin class
obj <- my_class$new()
obj$my_method()
obj$say_hello()
```

In this example, we first define the `MyMixin` class with a single method `say_hello`. We also define the `MyBase` class with a single method `my_method`. Then, we create a new class `MyClass` that inherits from both `MyBase` and `MyMixin`. Finally, we create an instance of the `MyClass` and call both `my_method` and `say_hello` on the instance.

Mixins are useful when you want to add a small piece of functionality to a class without modifying its interface or creating a new subclass.