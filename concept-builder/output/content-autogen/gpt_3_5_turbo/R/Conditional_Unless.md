Unless is a conditional statement used in R programming language. It is used to control the flow of a program. It allows you to execute a block of code when the specified condition is false and vice versa.

Here's the syntax of the unless statement in R:

```
unless (condition) {
     statement
}
```

Here, `condition` is an expression that evaluates to a boolean value (TRUE or FALSE) and `statement` is the code that you want to execute when the condition is FALSE.

Examples:

Suppose you want to print "Hello World" only when the number is less than 5. You can use the `unless` statement as follows:

```

number <- 3
 
unless (number < 5) {
   print("Hello World")
}
```

Output:

```
NULL
```

As the condition is true, the code inside the block won't be executed.

Another example:

Suppose you have a list of names and you want to check if the list is empty or not. If the list is empty, you want the program to print a message saying "The list is empty". You can use the `unless` statement as follows:

```
names <- c()
 
unless (length(names) > 0) {
   print("The list is empty")
}
```

Output:

```
[1] "The list is empty"
```

As the condition is false, the code inside the block is executed and the message is printed.