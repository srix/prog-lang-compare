In Scala, `if/else` is used to execute different code blocks based on a given condition. The syntax of `if/else` construct in Scala is as follows:

```scala
if (condition) {
     // code block to be executed
} else {
     // code block to be executed if condition is false
}
```

Here, if the condition provided in the parentheses evaluates to `true`, then the code block within the first curly braces will be executed. Otherwise, the code block within the second curly braces will be executed. 

Example:

```scala
val num1 = 10
val num2 = 20

if (num1 < num2) {
  println("num2 is greater than num1")
} else {
  println("num1 is greater than num2")
}
```

Output:
```
num2 is greater than num1
```

Another example:

```scala
val num = 10

if (num % 2 == 0) {
  println("The number is even")
} else {
  println("The number is odd")
}
```

Output:
```
The number is even
```

In addition to `if/else`, Scala also provides an `else if` construct for multiple conditional statements. Here's an example:

```scala
val num = 0

if (num > 0) {
    println("The number is positive")
} else if (num < 0) {
    println("The number is negative")
} else {
    println("The number is zero")
}
```

Output:
```
The number is zero
```

In this example, if the number is greater than zero, the code block within the first `if` statement will be executed. If the number is less than zero, the code block within the `else if` statement will be executed. Otherwise, the code block within the `else` statement will be executed.