In Visual Basic .NET, we can check if an array includes an element using the 'Contains' method which returns a Boolean value (either True or False). If the element is present in the array, Contains method returns True, otherwise, it returns False.

Here's an example of how to check if an element is present in an array:

```
Dim arr() As Integer = {1, 2, 5, 7, 9}
Dim element As Integer = 5
If arr.Contains(element) Then
    Console.WriteLine("The element is present in the array.")
Else
    Console.WriteLine("The element is not present in the array.")
End If
```

In this example, we have an array 'arr' with elements {1, 2, 5, 7, 9} and we want to check if the element '5' is present in the array or not. We use the Contains method to check if the element is present. Since '5' is present in the array, the output of this program would be:

```
"The element is present in the array."
```

Similarly, if we want to check the presence of an element that is not present in the array, for example, element '4', then the output would be:

```
"The element is not present in the array."
```