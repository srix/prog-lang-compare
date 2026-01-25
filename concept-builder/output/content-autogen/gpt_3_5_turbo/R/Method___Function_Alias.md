In R, an `alias` is a secondary name given to a function that helps to remember the function or makes it more intuitive to the user.

To create an `alias` in R, we use the `alias()` function. The syntax for creating an alias in R is as follows:

```R
alias(new.function.name <- existing.function.name)
```

Here, `new.function.name` is the alias name that will be assigned to the `existing.function.name`.

Let's consider an example to illustrate this. Suppose we want to create an alias for the `summary()` function that will help us to remember the function easily. We can create a new function name "summarize()" as an alias for the existing function "summary()" as follows:

```R
alias(summarize <- summary)
```

Now, we can use the new function "summarize()" to get the summary of a numeric vector:

```R
# Create a numeric vector
x <- c(1,2,3,4,5)

# Use the new function "summarize()" to get the summary of the vector
summarize(x)

# Output
#    Min. 1st Qu.  Median    Mean 3rd Qu.    Max. 
#   1.000   2.000   3.000   3.000   4.000   5.000 
```

As you can see, we got the same output as we would have got by using the `summary()` function. By creating an alias, we have made it easier to remember the function "summarize()" instead of "summary()".

In this way, we can create an alias for any existing function in R to make it more accessible or intuitive to the user.