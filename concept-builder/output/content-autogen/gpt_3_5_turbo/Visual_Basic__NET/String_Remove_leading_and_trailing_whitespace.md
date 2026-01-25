In Visual Basic .NET, you can remove leading and trailing whitespaces from a string using the Trim() function. Here's an example:

```vb.net
Dim myString As String = "   Hello World   "
myString = myString.Trim()
Console.WriteLine(myString) ' Output: "Hello World"
```

In this example, the `Trim()` function is called on the `myString` variable, which contains leading and trailing whitespaces. The function removes these whitespaces and assigns the result back to `myString`. The `Console.WriteLine()` statement then displays the trimmed string.

Here's another example that shows how to remove only leading or trailing whitespaces:

```vb.net
Dim myString As String = "   Hello World   "
myString = myString.TrimStart()
Console.WriteLine(myString) ' Output: "Hello World   "

myString = myString.TrimEnd()
Console.WriteLine(myString) ' Output: "   Hello World"
```

In the first example, the `TrimStart()` function is used to remove only the leading whitespaces, leaving the trailing whitespaces intact. In the second example, the `TrimEnd()` function is used to remove only the trailing whitespaces, leaving the leading whitespaces intact.

Note that the `Trim()` function removes all types of whitespace characters, including spaces, tabs, and line breaks. If you want to remove only spaces, you can use the `Trim()` function in combination with the `Replace()` function:

```vb.net
Dim myString As String = "   Hello World   "
myString = myString.Replace(" ", "").Trim()
Console.WriteLine(myString) ' Output: "HelloWorld"
```

In this example, the spaces are first replaced with empty strings using the `Replace()` function. Then, the `Trim()` function is called to remove any remaining leading or trailing whitespaces. The resulting string is "HelloWorld".