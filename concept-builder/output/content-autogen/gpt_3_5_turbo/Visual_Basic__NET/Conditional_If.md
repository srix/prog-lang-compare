In Visual Basic .NET, the "if" statement is used to conditionally execute blocks of code based on the evaluation of a boolean expression. The basic syntax for the "if" statement is:

```
If [boolean expression] Then
  [code to execute if the expression is true]
End If
```

You can also use an optional "Else" clause to execute code if the expression evaluates to false:

```
If [boolean expression] Then
  [code to execute if the expression is true]
Else
  [code to execute if the expression is false]
End If
```

Here are two examples of how to use the "if" statement in Visual Basic .NET:

Example 1:

```vb.net
Dim number As Integer = 5

If number > 0 Then
  Console.WriteLine("The number is positive")
End If
```

In this example, the "if" statement checks if the variable "number" is greater than zero. If this condition is true, the program will print the message "The number is positive" to the console.

Example 2:

```vb.net
Dim age As Integer = 18

If age >= 18 Then
  Console.WriteLine("You are old enough to vote")
Else
  Console.WriteLine("You are not old enough to vote")
End If
```

In this example, the "if" statement checks if the variable "age" is greater than or equal to 18. If this condition is true, the program will print the message "You are old enough to vote" to the console. If the condition is false, the program will print the message "You are not old enough to vote".