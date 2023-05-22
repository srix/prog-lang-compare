In Scala, the "if-else" expression can be used to assign either "this" or "that" to a variable based on a condition. 

The general syntax is: 

```
val variableName = if(condition) thisValue else thatValue
```

Here's an example:

```
val number = 10

val result = if(number > 5) "this" else "that"

println(result) // Output: "this"
```

The variable "result" is assigned to "this" because the condition "number > 5" is true. If the condition was false, "result" would have been assigned to "that". 

In this example, the condition was a simple comparison operator, but it could be any valid condition in Scala.