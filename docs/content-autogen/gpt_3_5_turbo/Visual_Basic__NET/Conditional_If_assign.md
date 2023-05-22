In Visual Basic .NET, the "If" statement is used for decision-making. "If" statement allows a program to execute different sets of statements depending on whether a certain condition is true or false.

The basic syntax of the "If" statement is:

```
If condition Then
    'statements
End If
```

Where `condition` is an expression that evaluates to either true or false and `statements` are the code to be executed if the condition is true.

Here is an example:

```
Dim num As Integer = 5

If num > 0 Then
    Console.WriteLine("Number is positive.")
End If
```

In this example, if `num` is greater than zero, the message "Number is positive" is printed to the console.

The "If" statement can be extended using the "Else" keyword to execute a different set of statements if the condition is false.

Here is an example:

```
Dim num As Integer = -5

If num > 0 Then
    Console.WriteLine("Number is positive.")
Else
    Console.WriteLine("Number is not positive.")
End If
```

In this example, since `num` is less than zero, the message "Number is not positive" is printed to the console.

The "If" statement can be further extended using the "ElseIf" keyword to test multiple conditions in a single statement.

Here is an example:

```
Dim num As Integer = 0

If num > 0 Then
    Console.WriteLine("Number is positive.")
ElseIf num < 0 Then
    Console.WriteLine("Number is negative.")
Else
    Console.WriteLine("Number is zero.")
End If
```

In this example, since `num` is zero, the message "Number is zero" is printed to the console.

Finally, the "If" statement can be used with the assignment operator to assign a value to a variable based on a condition.

Here is an example:

```
Dim num As Integer = 0

num = If(num > 0, 1, -1)
Console.WriteLine("The value of num is " & num)
```

In this example, `num` is assigned the value of 1 if it is greater than zero, otherwise it is assigned the value of -1. The message "The value of num is 0" is printed to the console because `num` is initially 0.