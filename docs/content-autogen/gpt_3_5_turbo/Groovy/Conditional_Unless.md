In Groovy, unless is used as a conditional statement that executes code only if the given condition is false. The usage of "unless" in Groovy is similar to "if not". Here is an example:

Suppose you want to print the message "Good Evening" only if the time of the day is not morning. The following code snippet uses unless to achieve this:

```
def timeOfDay = "morning"
unless(timeOfDay == "morning") {
    println("Good Evening")
}
```

In the above code, the unless statement checks if the value of the timeOfDay variable is morning. Since it is morning, the code block inside the curly braces is not executed and no message is printed.

Now consider the following code snippet:

```
def timeOfDay = "evening"
unless(timeOfDay == "morning") {
    println("Good Evening")
}
```

Here, the unless statement checks if the value of the timeOfDay variable is morning. Since it is not morning, the code block inside the curly braces is executed and the message "Good Evening" is printed on the console.

In conclusion, unless is a useful conditional statement that can be used to execute code when a specific condition is false. It provides a simple and readable way to write code in Groovy.