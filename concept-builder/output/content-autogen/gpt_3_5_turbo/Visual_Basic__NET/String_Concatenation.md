In Visual Basic .NET, you can concatenate (join together) two or more strings by using the ampersand operator (&) or the plus sign (+) operator. 

Here are some examples:

1. Using the ampersand operator (&):

```vb.net
Dim firstName As String = "John"
Dim lastName As String = "Smith"
Dim fullName As String = firstName & " " & lastName

Console.WriteLine(fullName) 'Output: John Smith
```

2. Using the plus sign (+) operator:

```vb.net
Dim message As String = "Hello" + ", " + "World!"

Console.WriteLine(message) 'Output: Hello, World!
```

3. Concatenating multiple strings:

```vb.net
Dim str1 As String = "The"
Dim str2 As String = "quick"
Dim str3 As String = "brown"
Dim str4 As String = "fox"
Dim str5 As String = "jumps"

Dim sentence As String = str1 & " " & str2 & " " & str3 & " " & str4 & " " & str5 & " over the lazy dog."

Console.WriteLine(sentence) 'Output: The quick brown fox jumps over the lazy dog.
```

It's also worth noting that you can use the String.Concat method to concatenate multiple strings together:

```vb.net
Dim str1 As String = "The"
Dim str2 As String = "quick"
Dim str3 As String = "brown"
Dim str4 As String = "fox"
Dim str5 As String = "jumps"

Dim sentence As String = String.Concat(str1, " ", str2, " ", str3, " ", str4, " ", str5, " over the lazy dog.")

Console.WriteLine(sentence) 'Output: The quick brown fox jumps over the lazy dog.
```