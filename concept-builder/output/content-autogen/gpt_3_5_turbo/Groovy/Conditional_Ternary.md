Ternary operators in Groovy are used to simplify the if-else syntax in situations where there are only two possible outcomes. Essentially, the ternary operator is used to create a conditional expression that evaluates to a boolean value.

The syntax for the ternary operator is as follows:

```
condition ? result1 : result2
```

Here, condition is the expression that is evaluated to a boolean value, and result1 and result2 are the values that are returned based on the evaluation of the condition. If the condition is true, result1 is returned. If the condition is false, result2 is returned.

Let's see some examples of using ternary operator in Groovy:

Example 1:
```
def num = 10
def result = num > 5 ? "Number is greater than 5" : "Number is less than or equal to 5"
println(result)
```
Output:
```
Number is greater than 5
```

This example assigns a value to the `result` variable based on whether `num` is greater than 5. If it is, the string "Number is greater than 5" is returned. If it isn't, the string "Number is less than or equal to 5" is returned.

Example 2:
```
def age = 18
println(age >= 18 ? "You are an adult" : "You are not an adult yet")
```
Output:
```
You are an adult
```
This example uses a ternary operator to print the appropriate message depending on the age of the person. If the age is greater than or equal to 18, the string "You are an adult" is printed. Otherwise, the string "You are not an adult yet" is printed.

Example 3:
```
def animals = ["cat", "dog", "bird"]
println(animals.contains("cat") ? "Cats are present" : "Cats are not present")
```
Output:
```
Cats are present
```
In this example, a ternary operator is used to check if a particular value (`"cat"`) is present in an array. If the value is present, the string "Cats are present" is printed. If it isn't, the string "Cats are not present" is printed.

Overall, the ternary operator is a concise and effective way to simplify if-else syntax in Groovy.