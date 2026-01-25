Ternary operator in Visual Basic .NET allows evaluating a condition and returning a value based on the condition. The syntax of the ternary operator in Visual Basic .NET is as follows:

```
condition ? statement1 : statement2
```

If the condition is true, then the statement1 is executed, and the result is returned. If the condition is false, then the statement2 is executed, and the result is returned. 

Here's an example:

```
Dim num1, num2, max As Integer

num1 = 5
num2 = 10

max = If(num1 > num2, num1, num2)

Console.WriteLine("The maximum number between {0} and {1} is {2}", num1, num2, max)
```

In the above example, the ternary operator is used to find the maximum between two numbers. If num1 is greater than num2, then num1 is returned, else num2 is returned. The result is stored in the "max" variable. 

Output:
```
The maximum number between 5 and 10 is 10
```

Another example:

```
Dim age, access As Integer

age = 18

access = If(age >= 18, 1, 0)

If access = 1 Then
    Console.WriteLine("Access granted!")
Else
    Console.WriteLine("Access denied!")
End If
```

In this example, the ternary operator is used to check whether a person is eligible for access based on their age. If the age is greater than or equal to 18, then "1" is returned, else "0" is returned. The result is stored in the "access" variable. If the access variable is 1, then access is granted, else access is denied.

Output:
```
Access granted!
```