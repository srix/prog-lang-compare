In Visual Basic .NET, the "break" statement is used to exit or terminate a loop or a switch statement before its natural conclusion. Here are some examples of how to use the "break" statement in different scenarios:

1. Exiting a for Loop:
```
For i As Integer = 1 To 10
    If i = 5 Then
        Exit For 'Exit the loop when i = 5
    End If
    Console.WriteLine(i)
Next
```
In this example, the loop will iterate from 1 to 10 and print the value of i. However, when i equals 5, the "break" statement called "Exit For" will break out of the loop immediately without executing the remaining iterations.

2. Exiting a While Loop:
```
Dim i = 0
While i < 10
    If i = 5 Then
        Exit While 'Exit the loop when i = 5
    End If
    Console.WriteLine(i)
    i += 1
End While
```
In this example, the loop will continue to iterate until i is less than 10. When i equals 5, the "break" statement called "Exit While" will break out of the loop and stop executing the code inside the loop.

3. Exiting a Do While Loop:
```
Dim i = 0
Do While i < 10
    If i = 5 Then
        Exit Do 'Exit the loop when i = 5
    End If
    Console.WriteLine(i)
    i += 1
Loop
```
This example is similar to the previous one, but the loop is written as a "Do While" instead of a "While" loop. The "break" statement called "Exit Do" will break out of the loop when i equals 5.

4. Exiting a Switch Statement:
```
Select Case grade
    Case "A"
        Console.WriteLine("Excellent")
    Case "B"
        Console.WriteLine("Good")
    Case "C"
        Console.WriteLine("Fair")
    Case "D"
        Console.WriteLine("Needs Improvement")
    Case "F"
        Console.WriteLine("Failed")
    Case Else
        Console.WriteLine("Invalid Grade")
        Exit Select 'Break out of the switch statement
End Select
```
In this example, a switch statement is used to evaluate the value of the "grade" variable. If "grade" matches one of the cases, the corresponding message is printed to the console. However, if "grade" does not match any of the cases (i.e., it is an invalid grade), the "break" statement called "Exit Select" will break out of the switch statement and stop executing the remaining cases.