Splitting a string means dividing it into smaller parts. In Visual Basic .NET, you can split a string using the `Split()` method of the `String` class. This method returns an array of strings that contains all the substrings of the original string that are separated by a specified separator character or a set of characters.

Here is the syntax of the `Split()` method:

```vb.net
Public Function Split(separator As Char(), count As Integer) As String()
```

The `Split()` method takes two arguments:
- The `separator` argument is an array of characters that separates the substrings. If you don't specify the separator character, the method uses whitespace characters (spaces, tabs, and newlines) as the default separator.
- The `count` argument is an integer that specifies the maximum number of substrings to return. If you don't specify the count, the method returns all possible substrings.

Here's an example of how to split a string in Visual Basic .NET:

```vb.net
Dim myString As String = "Hello, World!"
Dim myArray As String()

' Split the string using the default separator
myArray = myString.Split()

' Display the substrings
For Each substring As String In myArray
    Console.WriteLine(substring)
Next

' Split the string using a comma as separator
myArray = myString.Split(","c)

' Display the substrings
For Each substring As String In myArray
    Console.WriteLine(substring)
Next
```

In the first example, the `Split()` method splits the `myString` variable using whitespace characters as the separator. The output of the program is:

```
Hello,
World!
```

In the second example, the `Split()` method splits the `myString` variable using a comma as the separator. The output of the program is:

```
Hello
 World!
```