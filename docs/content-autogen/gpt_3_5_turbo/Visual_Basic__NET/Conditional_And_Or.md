In Visual Basic .NET, the "And" and "Or" keywords are used to perform logical operations on Boolean values.

The "And" operator returns a Boolean value of True if both operands are True. The "Or" operator returns a Boolean value of True if at least one of the operands is True.

Here are some examples of how to use "And" and "Or" in Visual Basic .NET:

1. Using "And" operator:

```
Dim x As Integer = 10
Dim y As Integer = 5
If x > 5 And y < 10 Then
    MsgBox("Both conditions are true.")
End If
```

In this example, the "And" operator is used to check whether both x is greater than 5 and y is less than 10 are true. Since both conditions are true, the message box will be displayed.

2. Using "Or" operator:

```
Dim name As String = "John"
If name = "John" Or name = "Jane" Then
    MsgBox("The name is either John or Jane.")
End If
```

In this example, the "Or" operator is used to check whether the name variable is either "John" or "Jane". Since the name variable is "John", the message box will be displayed.

Note: It's important to use parentheses when combining multiple "And" and "Or" operators, to ensure that they are evaluated correctly. For example:

```
If (x > 5 And y < 10) Or z = 0 Then
    'Do something
End If
```

This ensures that the operations in the parentheses are evaluated before the "Or" operator.