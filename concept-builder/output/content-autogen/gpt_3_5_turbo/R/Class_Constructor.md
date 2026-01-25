In R programming language, constructors are used to create objects of a class. Constructors are special functions that are used to initialize the objects with default or user-defined values.

Here is an example of how to create a constructor in R:

```
# Define a class Student with constructor function
Student <- setRefClass("Student", 
  fields = list(name="character", age="numeric", marks="list"),
  methods = list(
    # Constructor function to initialize the object
    initialize = function(name, age, marks) {
      # Set default values for name, age, and marks fields
      if(missing(name)) name <- "John Doe"
      if(missing(age)) age <- 18
      if(missing(marks)) marks <- list()
      # Set values for the fields
      name <<- name
      age <<- age
      marks <<- marks
    },
    # Method to add a mark to marks field
    addMark = function(subject, mark) {
      marks[[subject]] <<- mark
    }
  )
)
```

In this example, we have defined a class `Student` with three fields: `name`, `age`, and `marks`. We have also defined a constructor function `initialize` to initialize the object with default or user-defined values.

Now we can use this constructor to create objects of the `Student` class, like this:

```
# Create an object of Student class with default values
s1 <- Student()

# Create an object of Student class with user-defined values
s2 <- Student("Alice Smith", 20, list(Maths=90, Science=85))

# Add a mark to s1 object
s1$addMark("English", 75)
```

In this example, we have created two objects `s1` and `s2` of the `Student` class with default and user-defined values respectively. We have also added a mark to the `s1` object using the `addMark` method.