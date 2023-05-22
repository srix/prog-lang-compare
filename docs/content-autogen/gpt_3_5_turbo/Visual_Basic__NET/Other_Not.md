In Visual Basic .NET, the "not" operator is used to perform logical negation on a boolean expression. It returns the opposite value of a boolean expression, either "True" or "False". The syntax for "not" operator is as follows:

```
result = Not expression
```

Here, "expression" is the boolean expression or value that needs to be negated, and "result" is a boolean variable that holds the resultant value. 

Here are some examples of using "not" operator in Visual Basic .NET:

Example 1:
```
Dim a As Boolean = True
Dim b As Boolean
b = Not a
Console.WriteLine(b)
```
Output:
```
False
```
In this example, we declare a boolean variable "a" and assign it the value of "True". Then, we apply "not" operator on it and assign the result to another variable "b". Finally, we print the value of "b", which is "False".

Example 2:
```
Dim x As Integer = 10
Dim y As Integer = 20
Dim result As Boolean
result = Not (x > y)
Console.WriteLine(result)
```
Output:
```
True
```
In this example, we declare two integer variables "x" and "y" and assign them the values of 10 and 20 respectively. Then, we apply the comparison operator ">" on "x" and "y", which evaluates to "False" as 10 is not greater than 20. We then apply "not" operator on the result of this expression using parentheses and assign the final value to a boolean variable "result". Finally, we print the value of "result", which is "True" as the original expression was false and its negation is true.

Example 3:
```
Dim isValid As Boolean = False
If Not isValid Then
    Console.WriteLine("Data is invalid!")
End If
```
Output:
```
Data is invalid!
```
In this example, we declare a boolean variable "isValid" and assign it the value of "False". Then, we use "not" operator in an "If" statement to check if "isValid" is not true. Since "isValid" is false, the condition becomes true and the message "Data is invalid!" is printed on the console.

I hope these examples help you understand the usage of "not" operator in Visual Basic .NET.