In Visual Basic .NET, if/else statements are used to execute certain code blocks based on certain conditions. The basic syntax of if/else statement in Visual Basic .NET is as follows:
```
If (condition) Then
    ' Code to execute if the condition is true
Else
    ' Code to execute if the condition is false
End If
```
Here is an example of using if/else statement:

```
Dim num1 As Integer = 10
Dim num2 As Integer = 20

If num1 > num2 Then 
    Console.WriteLine("num1 is greater than num2")
Else 
    Console.WriteLine("num2 is greater than num1")
End If
```

In this example, if the condition 'num1 > num2' is true, then the code inside the if statement will execute, which will output `"num1 is greater than num2"` to the console. If the condition is false, then the code inside the else statement will execute, which will output `"num2 is greater than num1"`.

You can also use nested if/else statements to check multiple conditions, such as:

```
Dim age As Integer = 18

If age >= 18 Then
    If age = 18 Then
        Console.WriteLine("You just reached adulthood")
    Else
        Console.WriteLine("You are an adult")
    End If
Else
    Console.WriteLine("You are not an adult yet")
End If
```

In this example, the outer if statement checks if `age` is greater than or equal to 18. If it is, the code within the if statement is executed. If `age` is exactly 18, then the code within the nested if statement will execute and output `"You just reached adulthood"` to the console. Otherwise, the code within the else statement is executed, which outputs `"You are an adult"`. If `age` is less than 18, the code within the outer else statement executes, which outputs `"You are not an adult yet"`.