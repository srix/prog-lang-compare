The `while` loop in Groovy allows us to execute a block of code repeatedly as long as the given condition is true. The basic syntax of a `while` loop in Groovy is as follows:

```
while (condition) {
    // code to be executed
}
```

In this syntax, the `condition` is the expression that is evaluated before each iteration. If the condition is true, the code inside the loop is executed. The loop continues until the condition becomes false.

Here is an example of a `while` loop that prints the numbers from 1 to 10:

```
int i = 1
while (i <= 10) {
    println(i)
    i++
}
```

In this example, the `condition` is `i <= 10`. The loop runs as long as `i` is less than or equal to 10. Within the loop, we first print the value of `i`, and then increment `i` by 1 using `i++`.

Another example of a `while` loop that reads input from the user until they enter the word "quit":

```
String input = ""
while (input != "quit") {
    println("Enter a value (or 'quit' to exit):")
    input = System.console().readLine()
    println("You entered: $input")
}
```

In this example, we initialize `input` to an empty string. Inside the loop, we prompt the user to enter a value. We then read the user's input using the `readLine()` method of the `System.console()` object. If the user enters "quit", the loop will terminate because the `input` variable will be set to "quit" and the condition `input != "quit"` will evaluate to false. If any other value is entered, we print the value using string interpolation (`$input`). The loop will continue to prompt the user for input until they enter "quit".