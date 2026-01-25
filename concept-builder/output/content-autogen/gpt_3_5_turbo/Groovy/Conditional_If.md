In Groovy, 'if' is a conditional statement that allows you to execute a certain set of instructions based on a specific condition. The basic syntax for the 'if' statement in Groovy is as follows:

```
if (condition) {
    // instructions to execute if condition is true
}
```

Here, if the condition is true, then the instructions within the curly brackets will be executed. If the condition is false, then the instructions will be skipped. 

Let's take a few examples:

Example 1:

```
def age = 20

if (age >= 18) {
    println("You are eligible to vote.")
}
```

In this example, we are checking if the age of a person is greater than or equal to 18. If it is true, then the message "You are eligible to vote." will be printed. 

Example 2:

```
def marks = 68

if (marks >= 60) {
    println("Congratulations! You have passed the exam.")
} else {
    println("Sorry, you have failed the exam.")
}
```

In this example, we are checking if the marks scored by a student are greater than or equal to 60. If it is true, then the message "Congratulations! You have passed the exam." will be printed. If the condition is false, then the message "Sorry, you have failed the exam." will be printed.

Example 3:

```
def role = "admin"

if (role == "admin") {
    println("You have full access.")
} else if (role == "user") {
    println("You have limited access.")
} else {
    println("Invalid role.")
}
```

In this example, we are checking the role of a user. If the role is "admin", then the message "You have full access." will be printed. If the role is "user", then the message "You have limited access." will be printed. If the role is neither "admin" nor "user", the message "Invalid role." will be printed.

These are just a few examples, but there are many more ways to use 'if' statements in Groovy.