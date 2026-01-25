In R, a structure or a struct is a type of data object that contains several elements, each with its own data type.

Here's a simple example of how to define and use a struct in R: 

```
# define the struct
student <- list(name="", age=0, grade="")

# initialize a student object
my_student <- student
my_student$name <- "John"
my_student$age <- 18
my_student$grade <- "A"

# print the student object
print(my_student)
```

This code creates a struct called `student` with three elements: `name`, `age`, and `grade`. The naming convention for the elements is to use the `$` sign to access them.

We then create a new object `my_student` by copying the initial `student` object. We then set the values of each element to create a new student record that we print out using the `print` function.

This is a basic example, but it shows how you can define a struct, initialize an object with that struct, and then use that object to store and manipulate data.