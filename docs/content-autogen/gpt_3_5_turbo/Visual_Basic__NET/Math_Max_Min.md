To get the maximum or minimum of two numbers in Visual Basic .NET, you can use the Math.Max() and Math.Min() functions. These functions take two numbers as arguments and return the maximum or minimum of the two. Here are some examples:

Example 1: Get the maximum of two numbers
```
Dim num1 As Integer = 10
Dim num2 As Integer = 20
Dim max As Integer = Math.Max(num1, num2)
Console.WriteLine("The maximum of {0} and {1} is {2}", num1, num2, max)
```
Output:
```
The maximum of 10 and 20 is 20
```

Example 2: Get the minimum of two numbers
```
Dim num1 As Double = 15.6
Dim num2 As Double = 12.3
Dim min As Double = Math.Min(num1, num2)
Console.WriteLine("The minimum of {0} and {1} is {2}", num1, num2, min)
```
Output:
```
The minimum of 15.6 and 12.3 is 12.3
```
In these examples, the Math.Max() function is used to get the maximum of two integers, and the Math.Min() function is used to get the minimum of two double type variables.