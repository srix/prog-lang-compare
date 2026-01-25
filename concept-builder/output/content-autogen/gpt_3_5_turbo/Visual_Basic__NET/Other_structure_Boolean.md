Boolean refers to a data type in Visual Basic .NET that can represent the value of true/false or yes/no. Below are examples of how to use Boolean in Visual Basic .NET:

1. Declaring a Boolean variable:

```
Dim isStudent As Boolean
```

2. Assigning a value to a Boolean variable:

```
isStudent = True
```

3. Using Boolean operators to compare values:

```
Dim num1 As Integer = 5
Dim num2 As Integer = 10
Dim result As Boolean

result = num1 < num2 'result will be true because 5 is less than 10
```

4. Using Boolean conditions in if statements:

```
Dim age As Integer = 20

If age >= 18 Then
    Console.WriteLine("You are an adult.")
Else
    Console.WriteLine("You are not yet an adult.")
End If
```

In this example, the condition "age >= 18" evaluates to true or false depending on the value of the age variable, which determines if the person is an adult.

5. Using Boolean in a loop termination condition:

```
Dim i As Integer = 0
Dim finished As Boolean = False

While Not finished
    Console.WriteLine("The value of i is: " & i)
    i += 1
    
    If i = 10 Then
        finished = True
    End If
End While
```

This loop will continue to iterate as long as the variable "finished" is false, which is only changed to true when the value of i becomes 10.

Boolean values can be used in many situations where you need to evaluate conditions or make decisions based on true or false outcomes.