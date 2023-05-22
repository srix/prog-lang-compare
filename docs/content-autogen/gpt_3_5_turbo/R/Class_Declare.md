In R, a class represents a blueprint for a data structure that provides various properties and methods that can be applied to the data. Here's how you can declare a class in R:

1. Using `setClass()` function: This is the most common way of defining a new class in R. Here's an example:

```r
setClass("Person", 
         slots = c(name = "character", 
                   age = "integer",
                   gender = "character"))
```

Here we created a new class called `Person` and defined three slots or attributes for it: `name`, `age`, and `gender`. Each slot has a specific data type assigned to it.

2. Using `setOldClass()` function: This function is used to define a new class that inherits from an already defined class. Here's an example:

```r
setOldClass("Employee", representation(name = "character",
                                        age = "integer",
                                        gender = "character"),
                                        class = "Person")
```

Here we created a new class called `Employee` that inherits from the `Person` class.

3. Using `createClass()` function: This function is used to create a new class that inherits from multiple parent classes. Here's an example:

```r
setClass("Manager", 
         slots = c(department = "character",
                   subordinates = "list"),
         contains = c("Employee"))
```

Here we created a new class called `Manager` with two slots: `department` and `subordinates`. The class also inherits from the `Employee` and can access its properties and methods.

Once a class is defined, you can create objects or instances of that class using the `new()` function. For example:

```r
person1 <- new("Person", name = "Alice", age = 25, gender = "Female")
```

Here we created a new object of the `Person` class named `person1` and assigned values to its attributes.