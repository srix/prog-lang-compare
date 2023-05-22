In Visual Basic .NET, float numbers are represented by the Single data type. Float numbers are used to represent decimal values that have fractional parts. 

To declare a variable as a float number, use the Single keyword:

```
Dim myFloat As Single
```

You can assign a value to a float variable using the following syntax:

```
myFloat= 3.14159
```

Here's an example of using float numbers in Visual Basic .NET:

```
' Declare two variables as Single
Dim num1 As Single
Dim num2 As Single

' Assign values to the variables
num1 = 3.14
num2 = 2.71

' Perform arithmetic operations
Dim sum As Single = num1 + num2
Dim difference As Single = num1 - num2
Dim product As Single = num1 * num2
Dim quotient As Single = num1 / num2

' Display the results
Console.WriteLine("Sum: " & sum)
Console.WriteLine("Difference: " & difference)
Console.WriteLine("Product: " & product)
Console.WriteLine("Quotient: " & quotient)
```

In this example, we declare two variables as Single, assign values to them, and perform arithmetic operations such as addition, subtraction, multiplication, and division. We then display the results using the Console.WriteLine() method.

Note that Single variables can store values with a precision of up to 7 digits. If you need higher precision, consider using the Double data type instead.