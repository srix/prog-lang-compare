In R, get() and set() functions are used to retrieve and modify the values of an object's property or field respectively. You can use get() to access the value of an object's property and set() to modify its value.

Here is an example of a simple class in R with two properties:

```
# Define a simple class
myClass <- setRefClass("myClass",
  fields = list(
    x = "numeric",
    y = "numeric"
  )
)
```

Here, the class has two properties: x and y. You can instantiate an object of this class by calling new() function:

```
# Creating an instance of the class
obj <- myClass$new(x = 10, y = 20)
```

To access the value of a property, use the get() function.

```
# Accessing property values using get() function
x_value <- get(obj, "x")
y_value <- get(obj, "y")

# Printing the property values
cat("x=",x_value, "\n")
cat("y=",y_value, "\n")
```

To modify the value of a property, use the set() function.

```
# Modifying property values using set() function
set(obj, "x", 100)
set(obj, "y", 200)

# Accessing modified property values
x_value_modified <- get(obj, "x")
y_value_modified <- get(obj, "y")

# Printing the modified property values
cat("Modified x=",x_value_modified, "\n")
cat("Modified y=",y_value_modified, "\n")
```

This will modify the value of x and y fields of the object.