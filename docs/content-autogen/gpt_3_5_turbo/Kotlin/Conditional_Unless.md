`unless` is not a built-in keyword in Kotlin, but it can be implemented using an if-else statement. The `unless` statement can be used in place of an `if` statement where it evaluates a boolean condition and executes its code block if the condition is false.

Here's an example:

```
fun main() {
    val number = 10
    unless(number > 20) { // Call the unless function and pass in the boolean expression
        println("The number is less than or equals to 20.")
    }
}

fun unless(condition: Boolean, body: () -> Unit) {
    if (!condition) {
        body()
    }
}
```

Output:

```
The number is less than or equals to 20.
```

In the code above, we first define the `unless` function which takes in two parameters: a boolean condition and a lambda function `body`. The `unless` function then invokes the `body` function if the given `condition` is false.

In the `main` function, we then use the `unless` function to output a message if the `number` variable is less than or equals to 20.