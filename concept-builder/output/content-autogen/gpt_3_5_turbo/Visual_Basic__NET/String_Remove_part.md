To remove part of a string in Visual Basic .NET, you can use the `Remove` method of the `String` class. Here is an example:

```
Dim originalString As String = "Hello World"
Dim startIndex As Integer = 6 'Index of the first character to remove
Dim lengthToRemove As Integer = 5 'Number of characters to remove
Dim modifiedString As String = originalString.Remove(startIndex, lengthToRemove)

Console.WriteLine("Original String: " & originalString)
Console.WriteLine("Modified String: " & modifiedString)
```

In this example, the `originalString` variable contains the string "Hello World". The `Remove` method is used to remove 5 characters starting from index 6 (which corresponds to the space character between "Hello" and "World"). The resulting `modifiedString` variable contains the string "Hello". The output of the program would be:

```
Original String: Hello World
Modified String: Hello
```

You can also use the `Substring` method of the `String` class to achieve the same result. Here is an example:

```
Dim originalString As String = "Hello World"
Dim startIndex As Integer = 0 'Index of the first character to keep
Dim endIndex As Integer = 5 'Index of the last character to keep
Dim modifiedString As String = originalString.Substring(startIndex, endIndex - startIndex + 1)

Console.WriteLine("Original String: " & originalString)
Console.WriteLine("Modified String: " & modifiedString)
```

In this example, the `Substring` method is used to extract a portion of the `originalString` variable. The `startIndex` variable specifies the index of the first character to keep (in this case, it is the first character of the string), and the `endIndex` variable specifies the index of the last character to keep (in this case, it is the fifth character of the string). The `modifiedString` variable contains the string "Hello". The output of the program would be:

```
Original String: Hello World
Modified String: Hello
```