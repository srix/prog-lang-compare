In R, a `switch` statement allows you to perform different actions based on a given value or condition. It is similar to an `if-else` statement but can be more concise for multiple possibilities.

The basic syntax for a `switch` statement in R is:

```R
switch(EXPR, 
       CASE1 = expr1, 
       CASE2 = expr2, 
       ..., 
       default = expr.def)
```

where `EXPR` is the expression or variable to be evaluated, `CASE1`, `CASE2`, etc. are the possible values of `EXPR` and the corresponding expressions to be evaluated, and `expr.def` is the default expression to be evaluated if no other cases match.

Here is an example of how to use the `switch` statement in R:

```R
# Creating a function that uses switch statement to determine the day of the week
get_day <- function(num) {
  return(switch(num,
                "1" = "Monday", 
                "2" = "Tuesday", 
                "3" = "Wednesday", 
                "4" = "Thursday", 
                "5" = "Friday", 
                "6" = "Saturday",
                "7" = "Sunday",
                "Invalid Day"))
}

# Testing the function for some values
get_day(1) # "Monday"
get_day(3) # "Wednesday"
get_day(10) # "Invalid Day"
```

In this example, a function called `get_day()` is defined that takes in a number as a parameter and uses the `switch` statement to return the corresponding day of the week as a string. If the input number is not valid, it returns "Invalid Day".

Another example of using the `switch` statement is to categorize the heights of people:

```R
# Creating a function that uses switch statement to categorize the height of a person
categorize_height <- function(height) {
  category <- switch(TRUE,
                     height < 150 ~ "Short",
                     height >= 150 & height < 170 ~ "Average",
                     height >= 170 & height < 190 ~ "Tall",
                     height >= 190 ~ "Very Tall",
                     "Invalid Height")
  
  return(category)
}

# Testing the function for some values
categorize_height(140) # "Short"
categorize_height(160) # "Average"
categorize_height(185) # "Tall"
categorize_height(200) # "Very Tall"
categorize_height(50) # "Invalid Height"
```

In this example, a function called `categorize_height()` is defined that takes in a height as a parameter and uses the `switch` statement to categorize the height of the person into categories like "Short", "Average", "Tall", or "Very Tall". If the input height is not valid, it returns "Invalid Height".