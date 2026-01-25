Ternary operator is a shorthand conditional expression which also used in Kotlin like most of the programming languages. It provides a shorter way to express simple if-else statements in a single line.

In Kotlin, the ternary operator is expressed using a question mark "?" followed by a colon ":". Here is the syntax:

```
variable = (condition) ? value1 : value2
```

- If the condition is true, then the value1 is assigned to the variable.
- If the condition is false, then the value2 is assigned to the variable.

Here is an example:

```
fun main() {
    val number = 7
    val result = if (number % 2 == 0) "Even" else "Odd"
    println(result)
}
```

In the above example, we used if-else statement to check whether the number is even or odd. We can simplify this code using a ternary operator:

```
fun main() {
    val number = 7
    val result = if (number % 2 == 0) "Even" else "Odd"
    println(result)
}
```

This code is equivalent to the previous example. Here, if the number is even, it will return "Even" string, otherwise, it will return "Odd" string.