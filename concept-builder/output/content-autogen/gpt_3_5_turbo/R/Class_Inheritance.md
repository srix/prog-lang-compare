Inheritance is a fundamental concept in object-oriented programming (OOP) that helps you to reuse code and establish a hierarchical relationship between the classes. In R, inheritance is achieved using the `extends` function.

Here's an example of how to use inheritance in R:

```
# Define parent class
setClass("Animal",
         slots = c(name = "character", age = "numeric"))

# Define child classes that inherit from Animal
setClass("Mammal",
         contains = "Animal",
         slots = c(fur_color = "character"))

setClass("Bird",
         contains = "Animal",
         slots = c(wing_span = "numeric"))

# Create objects of child classes
dog <- new("Mammal", name = "Buddy", age = 5, fur_color = "brown")
penguin <- new("Bird", name = "Opus", age = 3, wing_span = 30)

# Access slots of parent class
dog@name # "Buddy"
penguin@age # 3 (age is a common slot in parent class Animal)

# Access slots of child classes
dog@fur_color # "brown"
penguin@wing_span # 30
```

In the above code, we defined a parent class `Animal` with two slots "name" and "age". We then defined two child classes `Mammal` and `Bird` that inherit from the parent class `Animal` and have additional slots "fur_color" and "wing_span", respectively. We created two objects `dog` and `penguin` of the child classes and accessed their slots using the `@` symbol.

By using inheritance, we avoided duplicating the slots "name" and "age" in the child classes and reused them from the parent class. This makes the code easier to maintain and extend.