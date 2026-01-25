In Visual Basic .NET, we can concatenate two arrays using the Concat method of the Array class, which creates a new array that contains all the elements of the original arrays in the order they were specified. Here is an example code snippet:
```vb
Dim array1() As Integer = {1, 2, 3}
Dim array2() As Integer = {4, 5, 6}
Dim resultArray() As Integer = Array.Concat(array1, array2)
```
In the above example, we have created two integer arrays named array1 and array2. We then use the Concat method of the Array class to combine the two arrays into a new array named resultArray. The resulting merged array contains all elements from the original arrays in ascending order. 

We can also concatenate arrays of different data types. Here is an example that concatenates string arrays:
```vb
Dim names() As String = {"John", "Mary", "Bob"}
Dim addresses() As String = {"123 Main St", "456 Elm St"}

Dim combined() As String = Array.Concat(names, addresses)
```
In the above code, we have merged the two string arrays (names and addresses) into a new array named combined using the Concat method. The result is an array containing all the elements of the two arrays in the order they were specified.