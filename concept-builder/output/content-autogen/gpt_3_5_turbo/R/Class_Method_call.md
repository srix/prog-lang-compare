Sure! In R, we call a method in a class by using the “$” operator, which allows us to access the class’s properties and methods.

For example, let's say we have a class called "Person" that has a method called "greet". We create an instance of this class using the "new" keyword:

```
person <- new("Person")
```

To call the "greet" method, we use the "$" operator like this:

```
person$greet()
```

We can also pass arguments to the method by enclosing them in parentheses:

```
person$greet("Hello")
```

Here's a complete example:

```
# Define the Person class
Person <- setClass("Person", list(
  name = "character",
  age = "numeric"
))

# Define the greet method
setMethod("greet",
  signature = "Person",
  function(object, message) {
    print(paste(object$name, "says:", message))
  }
)

# Create a Person instance and call the greet method
person <- new("Person", name="John", age=25)
person$greet("Hello there!")
```

This will output:

```
[1] "John says: Hello there!"
```