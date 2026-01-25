In R, the if/else statement allows you to create a decision-making structure that executes different lines of code depending on whether a condition is true or false. Here's an example:

```
# Define a variable
x <- 5

# If/else statement
if(x > 10) {
  print("x is greater than 10")
} else {
  print("x is less than or equal to 10")
}
```

In this example, we first define a variable `x` with a value of 5. The if/else statement then evaluates whether `x` is greater than 10. Since `x` is not greater than 10, the else block is executed and "x is less than or equal to 10" is printed to the console.

Let's look at another example. Suppose we have a vector of exam scores and we want to create a new vector indicating whether each score is a passing grade (greater than or equal to 60) or a failing grade (less than 60):

```
# Define a vector of exam scores
scores <- c(78, 56, 92, 40, 85)

# Create a new vector indicating passing/failing grades
pass_fail <- ifelse(scores >= 60, "pass", "fail")

# Print the resulting vector
print(pass_fail)
```

In this example, we use the `ifelse()` function instead of a standard if/else statement. The `ifelse()` function takes three arguments: a logical vector (in this case, `scores >= 60`), a value to return if the condition is true, and a value to return if the condition is false. The `ifelse()` function then applies the condition to each element in the vector `scores` and returns a new vector in which passing grades are labeled "pass" and failing grades are labeled "fail". The resulting vector, `pass_fail`, is then printed to the console.