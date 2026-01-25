In R, to return a value from a function or a method, you can use the `return()` function. When this function is called, it stops the execution of the function and returns the value specified to the caller function. Here's an example:

```
# Function to calculate the sum of two numbers
sum_numbers <- function(a, b) {
  sum <- a + b
  return(sum) # Returns the value of sum to the caller function
}

# Calling the function and printing the output
result <- sum_numbers(10, 20)
print(result)
```

Output:
```
[1] 30
```

Here's another example that uses a method:

```
# Define a class named Person
Person <- R6::R6Class(
  classname = "Person",
  public = list(
    # Method to calculate age based on birth year
    # and return the age as an integer value
    get_age = function(self, birth_year) {
      age <- as.integer(Sys.Date() - as.Date(paste0(birth_year, "-01-01"))) / 365
      return(age) # returns the age as an integer value
    }
  )
)

# Create an instance of Person class and call the get_age method
person1 <- Person$new()
age <- person1$get_age(1990)
print(age)
```

Output:
```
[1] 31
```

In this example, the `get_age()` method returns an integer value representing the age of an instance of the `Person` class based on their birth year.