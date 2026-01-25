In Visual Basic .NET, you can use the times operator (*) to perform multiplication operations. Here are examples of using times in Visual Basic .NET:

Example 1: Multiply two numbers
```
Dim num1 As Integer = 5
Dim num2 As Integer = 10
Dim result As Integer

result = num1 * num2
Console.WriteLine("The result of {0} * {1} is {2}", num1, num2, result)
' Output: The result of 5 * 10 is 50
```

Example 2: Multiply decimal and integer
```
Dim num1 As Integer = 5
Dim num2 As Decimal = 3.5
Dim result As Decimal

result = num1 * num2
Console.WriteLine("The result of {0} * {1} is {2}", num1, num2, result)
' Output: The result of 5 * 3.5 is 17.5
```

Example 3: Multiply using input from the user
```
Dim num1, num2, result As Integer

Console.Write("Enter first number: ")
num1 = Integer.Parse(Console.ReadLine())

Console.Write("Enter second number: ")
num2 = Integer.Parse(Console.ReadLine())

result = num1 * num2
Console.WriteLine("The result of {0} * {1} is {2}", num1, num2, result)
' Output: Enter first number: 5
'         Enter second number: 10
'         The result of 5 * 10 is 50
```