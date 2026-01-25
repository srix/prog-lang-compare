In Visual Basic .NET, you can use the `IsNumeric()` function to check if a string is a number or not. 

Here's an example code snippet to check if a string is a number:

```
Dim userInput As String = "12345"
If IsNumeric(userInput) Then
    Console.WriteLine("The input is a number.")
Else
    Console.WriteLine("The input is not a number.")
End If
```

In the code snippet above, we define a string variable called `userInput` and assign it the value "12345". We then use the `IsNumeric()` function to check if the value of `userInput` is numeric or not. If the input is numeric, the program will output "The input is a number." to the console. If it is not, the program will output "The input is not a number."

Here's another example that shows what happens when the input is not a number:

```
Dim userInput As String = "hello"
If IsNumeric(userInput) Then
    Console.WriteLine("The input is a number.")
Else
    Console.WriteLine("The input is not a number.")
End If
```

In this example, we set the value of `userInput` to "hello", which is not a number. When we run the program, it will output "The input is not a number." to the console.

Note that the `IsNumeric()` function will return `True` for numeric values represented as strings, such as "-123.45". However, it will also return `True` for other non-numeric values such as currency symbols, so it's important to use additional validation to ensure that the input is actually a valid number.