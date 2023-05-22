Using regular expressions in Visual Basic .NET can be accomplished using the `System.Text.RegularExpressions` namespace. This namespace provides classes for compiling and executing regular expressions, as well as tools for pattern matching and substitution.

Here's an example of how to use regex in Visual Basic .NET:

```vb.net
Imports System.Text.RegularExpressions

Module Module1
    Sub Main()
        Dim input As String = "The quick brown fox jumps over the lazy dog"
        Dim pattern As String = "\b\w{4}\b" 'matches 4-letter words
        
        Dim matches As MatchCollection = Regex.Matches(input, pattern)
        
        For Each match As Match In matches
            Console.WriteLine(match.Value) 'prints "quick", "brown", "jumps", "over", "lazy"
        Next
    End Sub
End Module
```

In this example, we import the `System.Text.RegularExpressions` namespace and define a `String` variable `input` with our text. We then define a `String` variable `pattern` that will match 4-letter words using the `\b` character to match word boundaries and `\w` to match word character symbols.

We then use the `Regex.Matches` method to execute the regular expression pattern `pattern` on the input string `input` and retrieve all matches as a `MatchCollection`. The `MatchCollection` contains a collection of `Match` objects, each representing a match found in the input string.

Finally, we iterate over the `MatchCollection` using a `For Each` loop and print the matched words using the `Match.Value` property.