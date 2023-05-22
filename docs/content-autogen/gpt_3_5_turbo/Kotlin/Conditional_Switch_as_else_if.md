In Kotlin, "switch" statement is replaced by "when" expression. The "when" expression is a more flexible and powerful option to replace several "else if" statements. 

Syntax of when expression:

```kotlin
when (variable) {
   value1 -> statement1
   value2 -> statement2
   ...
   else -> statementN
}
```

Here, the "variable" can be any expression and the "value1", "value2", etc., represent the possible values for that expression. 

If we want to use a "when" expression as an "else if" statement, we can use the "else" keyword to represent the default case.

Here is an example of using a "when" expression as an "else if" statement:

```kotlin
fun main(args: Array<String>) {
   val num = 3
   when (num) {
      1 -> println("One")
      2 -> println("Two")
      3 -> println("Three")
      else -> println("Unknown number")
   }
}
```

In this example, the "num" variable is checked for values 1, 2, and 3. If it is any of these values, the corresponding statement is executed. If "num" is not any of these values, the "else" block is executed.