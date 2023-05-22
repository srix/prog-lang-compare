In R, a private method is a method that can only be accessed within the object it belongs to and cannot be accessed outside of the object. 

To create a private method in R, we use the `<<-` assignment operator instead of the usual `<-` operator. This makes the method a part of the object and inaccessible outside of it.

Here is an example:

```
# Define a Student class with a private method 'print_details'

Student <- function(name, age, gender) {
  details <- list(
    name = name,
    age = age,
    gender = gender
  )
  
  # Define print_details as a private method
  details$print_details <<- function() {
    cat("Name:", details$name, "\n")
    cat("Age:", details$age, "\n")
    cat("Gender:", details$gender, "\n")
  }
  
  return(details)
}

# Create a student object
s1 <- Student("John", 25, "Male")

# Try to access print_details outside of the object (returns an error)
s1$print_details()

# Access print_details within the object
s1$print_details()
```
In the above example, we define a `Student` class that has a private method `print_details` which is only accessible within the `Student` object. We use the `<<-` operator to define `print_details` as a private method, thereby making it inaccessible outside of the `Student` object.

When we try to access `print_details` outside of the object `s1`, it returns an error message. However, we can access it within the object by calling `s1$print_details()`, which prints the student's name, age, and gender.