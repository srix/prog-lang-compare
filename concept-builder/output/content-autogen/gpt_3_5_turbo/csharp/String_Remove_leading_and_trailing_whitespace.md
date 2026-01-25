In C#, you can trim leading and trailing whitespaces from a string using the `Trim()` method. Here's an example:

```csharp
string str = "   remove   whitespace   ";
string trimmedStr = str.Trim();
Console.WriteLine(trimmedStr);
```

Output: `remove   whitespace`

In the above example, the `Trim()` method is called on the `str` string variable, which removes the leading and trailing whitespaces in the string and assigns the result to the `trimmedStr` variable. The `Console.WriteLine()` method is then used to display the trimmed string on the console.

You can also remove specific characters from the beginning or end of a string using the `TrimStart()` and `TrimEnd()` methods respectively. For example:

```csharp
string str = "###remove##whitespace###";
string trimmedStr = str.TrimStart('#').TrimEnd('#');
Console.WriteLine(trimmedStr);
```

Output: `remove##whitespace`

In the above example, the `TrimStart()` method is used to remove all leading `#` characters from the `str` variable, followed by calling the `TrimEnd()` method to remove all trailing `#` characters. The resulting trimmed string is assigned to the `trimmedStr` variable and displayed on the console using the `Console.WriteLine()` method.