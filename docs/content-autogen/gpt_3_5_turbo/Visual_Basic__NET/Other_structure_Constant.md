A constant is a data item whose value cannot be changed during the program's execution. In Visual Basic .NET, you can declare a constant using the `Const` keyword. The syntax for declaring a constant is as follows:

```
Const constantName As dataType = value
```

Here, `constantName` is the name of the constant, `dataType` is the data type of the constant, and `value` is the initial value assigned to the constant.

Here are some examples of using constants in Visual Basic .NET:

Example 1:
```
Const PI As Double = 3.14159
Dim radius As Double = 5
Dim area As Double = PI * radius * radius
Console.WriteLine("Area of circle = " & area)
```

In this example, we declare a constant named `PI` of type `Double` and assign it the value `3.14159`. We use this constant to calculate the area of a circle using the formula A = πr². 

Example 2:
```
Const MAX_VALUE As Integer = 100
Dim value As Integer = 75
If value > MAX_VALUE Then
    Console.WriteLine("Value is greater than " & MAX_VALUE)
Else
    Console.WriteLine("Value is less than or equal to " & MAX_VALUE)
End If
```

In this example, we declare a constant named `MAX_VALUE` of type `Integer` and assign it the value `100`. We use this constant in an `If` statement to compare the value of a variable named `value`. If `value` is greater than `MAX_VALUE`, we print a message indicating that the value is greater than the maximum value. Otherwise, we print a message indicating that the value is less than or equal to the maximum value.

Example 3:
```
Const GREETING As String = "Hello, world!"
Console.WriteLine(GREETING)
```

In this example, we declare a constant named `GREETING` of type `String` and assign it the value `"Hello, world!"`. We print the value of this constant using the `Console.WriteLine` statement.

These are just a few examples of how you can use constants in Visual Basic .NET. Constants are often used to define values that are used repeatedly in a program, making the code easier to understand and maintain.