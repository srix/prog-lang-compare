To iterate over an array in Visual Basic .NET, you can use the For Each loop or traditional For loop. Here are examples for both methods:

1. For Each loop:
```
Dim myArray() As Integer = {1, 2, 3, 4, 5}
For Each num As Integer In myArray
   Console.WriteLine(num)
Next
```
This code will print each element of the array to the console.

2. Traditional For loop:
```
Dim myArray() As Integer = {1, 2, 3, 4, 5}
For i As Integer = 0 To myArray.Length - 1
   Console.WriteLine(myArray(i))
Next
```
This code will also print each element of the array to the console.

In both examples, the loop iterates through each element in the array and executes the block of code within the loop for each element. The For Each loop is more concise and automatically detects the type of element in the array, while the traditional For loop allows you to access the index of each element.