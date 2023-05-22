Switch statement is used to test a variable against a list of values. In Groovy, you can use `switch` statement to execute different parts of code for different cases.

Here's the syntax of a switch statement in Groovy:

```
switch (variable) {
   case value1:
      // code to be executed if variable is equal to value1
      break;
   case value2:
      // code to be executed if variable is equal to value2
      break;
   ...
   default:
      // code to be executed if variable doesn't match any of the cases
}
```
 
Here's an example of using a switch statement in Groovy:

```
def day = "Monday"

switch (day) {
   case "Monday":
      println("Today is Monday")
      break
   case "Tuesday":
      println("Today is Tuesday")
      break
   case "Wednesday":
      println("Today is Wednesday")
      break
   default:
      println("Today is not a weekday")
}
```

In the above example, if the value of the variable `day` is "Monday", the code inside the first case statement will be executed. Similarly, if the value of variable `day` is "Tuesday", the code inside the second case statement will be executed, and so on.

If the value of `day` doesn't match any of the cases, the code inside the default statement will be executed.

That's how you can use switch statement in Groovy.