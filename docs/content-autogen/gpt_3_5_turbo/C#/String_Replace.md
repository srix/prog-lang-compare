To replace a specific substring within a string in C#, we can use the built-in `Replace()` method provided by the `string` class. This method takes two string arguments: the first string argument represents the substring that we want to replace, and the second string argument represents the new substring that we want to replace it with.

Here is an example of how to replace a substring within a string in C#:

```csharp
string originalString = "The quick brown fox jumps over the lazy dog";
string substringToReplace = "brown";
string newSubstring = "red";

string replacedString = originalString.Replace(substringToReplace, newSubstring);

Console.WriteLine(replacedString);
```

This code will output `The quick red fox jumps over the lazy dog`, replacing the substring "brown" with "red".

In addition, the `Replace()` method is case-sensitive, so if you want to replace a substring regardless of its capitalization, you can use `StringComparison.OrdinalIgnoreCase` as the third argument of the `Replace()` method.

```csharp
string originalString = "The QUIck brown fox jumps over the lazy dog";
string substringToReplace = "quick";
string newSubstring = "lazy";

string replacedString = originalString.Replace(substringToReplace, newSubstring, StringComparison.OrdinalIgnoreCase);

Console.WriteLine(replacedString);
```

This code will output `The lazy brown fox jumps over the lazy dog`, replacing the substring "quick" with "lazy", regardless of capitalization.