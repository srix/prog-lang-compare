In Visual Basic .NET, you can replace a substring within a string by using the `Replace` method. The `Replace` method takes two arguments: the original string and the replacement string.

Here's an example:

```vb.net
Dim myString As String = "The quick brown fox jumps over the lazy dog."
Dim newString As String = myString.Replace("fox", "cat")
```

In this example, the `Replace` method replaces the word "fox" with "cat" in the `myString` variable and assigns the updated string to the `newString` variable. The output will be:

    The quick brown cat jumps over the lazy dog.

You can also use the `Replace` method to replace multiple occurrences of a substring within a string by using the optional `count` parameter. This parameter specifies the maximum number of replacements to make. Here's an example:

```vb.net
Dim myString As String = "The quick brown fox jumps over the lazy dog."
Dim newString As String = myString.Replace("o", "0", 2)
```

In this example, the `Replace` method replaces the first two occurrences of the letter "o" with "0" in the `myString` variable and assigns the updated string to the `newString` variable. The output will be:

    The quick br0wn f0x jumps over the lazy dog.

Note that the `Replace` method is case-sensitive, meaning that it will only replace substrings that match exactly. If you want to perform a case-insensitive replace, you can use the `StringComparison` enumeration. Here's an example:

```vb.net
Dim myString As String = "The quick brown fox jumps over the lazy dog."
Dim newString As String = myString.Replace("the", "a", StringComparison.OrdinalIgnoreCase)
```

In this example, the `Replace` method replaces the word "the" with "a" in the `myString` variable in a case-insensitive manner and assigns the updated string to the `newString` variable. The output will be:

    A quick brown fox jumps over a lazy dog.