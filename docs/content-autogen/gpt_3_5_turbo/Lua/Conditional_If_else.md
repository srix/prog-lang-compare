If/else is a conditional statement used in Lua to control the flow of execution based on a given condition. The if statement will execute the block of code between the “then” keyword and “end” if the given condition is true. If the condition is false, the code between the “else” keyword and “end” will be executed. 

Here is an example of using if/else in Lua:

```
-- Setting a variable
age = 19

-- conditional statement with if/else
if age >= 18 then
  print("You are old enough to vote.")
else
  print("You are not old enough to vote yet.")
end
```

In this example, if the value of the `age` variable is equal to or greater than 18, the message "You are old enough to vote." will be displayed in the console. If the value of `age` is less than 18, the message "You are not old enough to vote yet." will be displayed.

Additionally, we can also use nested if statements to check multiple conditions. Here's an example of a nested if statement:

```
-- Setting variables
score = 80
name = "John"

-- Nested conditional statements
if score > 70 then
  if name == "John" then
    print("Congratulations John, you passed the exam!")
  else
    print("Sorry, you did not pass the exam.")
  end
else
  print("Sorry, you did not pass the exam.")
end
```

In this example, if the value of `score` is greater than 70, then the nested if statement will check the value of the `name` variable. If the `name` value is equal to "John", the message "Congratulations John, you passed the exam!" will be displayed. If the `name` value is anything else, the message "Sorry, you did not pass the exam." will be displayed. If the `score` value is less than or equal to 70, the message "Sorry, you did not pass the exam." will be displayed.