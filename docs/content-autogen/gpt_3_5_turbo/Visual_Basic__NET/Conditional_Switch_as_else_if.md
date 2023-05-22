In Visual Basic .NET, the "switch" statement can be used as an alternative to multiple "else if" statements to select among several alternatives based on the value of a single expression. The syntax for using a "switch" statement is as follows:

```
Select Case <expression>
   Case <value1>
      'statements
   Case <value2>
      'statements
   Case <value3>
      'statements
   Case Else
      'statements
End Select
```

Here, "<expression>" is the expression that will be evaluated and "<value1>", "<value2>", etc. are the possible values that the expression may equal. The "Case Else" statement is executed if none of the other cases match the expression.

Here is an example:

```
Dim grade As Char = "B"

Select Case grade
   Case "A"
      Console.WriteLine("Excellent")
   Case "B"
      Console.WriteLine("Good")
   Case "C"
      Console.WriteLine("Average")
   Case "D"
      Console.WriteLine("Below Average")
   Case Else
      Console.WriteLine("Fail")
End Select
```

In this example, the expression being evaluated is the value of the variable "grade". If "grade" is equal to "A", "Excellent" will be printed to the console. If "grade" is equal to "B", "Good" will be printed to the console. If "grade" is equal to "C", "Average" will be printed to the console. If "grade" is equal to "D", "Below Average" will be printed to the console. If "grade" is anything else, "Fail" will be printed to the console.

Thus, using the "switch" statement can make code easier to read and can save time when many "else if" statements need to be executed.