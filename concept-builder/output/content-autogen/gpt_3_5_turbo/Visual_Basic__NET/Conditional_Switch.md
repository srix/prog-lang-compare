In Visual Basic .NET, the switch statement is used to execute different cases based on a given expression. The switch statement is used to compare an expression to a list of cases and execute the case that matches. 

Here is an example of how to use the switch statement in Visual Basic .NET:

```
Select Case expression
    Case value1
        'code to execute when expression is equal to value1
    Case value2
        'code to execute when expression is equal to value2
    Case Else
        'code to execute when no cases match the expression
End Select
```

The **Select Case** statement specifies the expression to compare. The **Case** statements specify the individual values to compare against the expression.

For example, the following code snippet shows how to use the switch statement to perform different actions based on the value of a variable:

```vb.net
Dim dayOfWeek As String = "Monday"

Select Case dayOfWeek
    Case "Monday"
        Console.WriteLine("Do laundry")
    Case "Tuesday"
        Console.WriteLine("Grocery shopping")
    Case "Wednesday"
        Console.WriteLine("Clean the house")
    Case Else
        Console.WriteLine("No plans for today")
End Select
```

In this example, the variable **dayOfWeek** contains the value "Monday". The switch statement compares this value to the different cases and executes the code for the first matching case, which in this case is "Do laundry".

If the value of the variable is not equal to any of the cases specified, the code in the **Case Else** block will execute.

Note that the switch statement can also be used with numeric values, dates, and other data types.