In Visual Basic .NET, the "If...Then...Else" statement can be used to assign "this" or "that" depending on the result of a logical condition. 

For example, consider the following code:

```
Dim num As Integer = 10
Dim result As String

If num > 0 Then
   result = "This"
Else
   result = "That"
End If
```

In this code, the variable "num" is assigned the value of 10. We then use the "If...Then...Else" statement to check if "num" is greater than 0. If it is, the variable "result" is assigned the value of "This". Otherwise, the variable "result" is assigned the value of "That".

Another way to assign "this" or "that" is by using the ternary operator. The ternary operator is a shorter way of writing an If...Then...Else statement in one line.

```
Dim num As Integer = 10
Dim result As String = If(num > 0, "This", "That")
```

In this code, we use the ternary operator to assign the value of "result" based on the result of the logical condition ("num > 0"). If the condition is true, "result" is assigned the value of "This", otherwise, it is assigned the value of "That".