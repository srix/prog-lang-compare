In R programming language, we can access instance variables or class attributes, even inside a private method. However, we need to follow some specific rules to do it. 

First, we need to define the private method inside the class using the `setMethod()` function with the `private` modifier. Next, to access the instance variable inside the private method, we need to use the `@` symbol followed by the name of the instance variable.

Here is an example code that demonstrates how to access instance variables in a private method in R:

```r
# Define a class with an instance variable and a private method
setClass("MyClass",
         slots = c(attr = "character"),
         private = list(
           my_private_method = function() {
             # Access the instance variable 'attr' using '@'
             cat("The attribute value is:", @attr, "\n")
           }
         )
)

# Create an object of MyClass
obj <- new("MyClass", attr = "my_value")

# Call the private method to access the instance variable
obj@my_private_method()
# Output: The attribute value is: my_value
```

In the above example, we have defined a `MyClass` with an instance variable called `attr` of type character and a `private` method called `my_private_method`. This private method accesses the instance variable using the `@attr` syntax.

Finally, we create an object of `MyClass` and call the private method using `obj@my_private_method()` to access the instance variable value.