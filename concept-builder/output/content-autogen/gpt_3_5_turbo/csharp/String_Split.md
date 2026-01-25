In C#, a string can be split into an array of substrings using the `Split()` method, which takes one or more separator characters as an argument. Here is an example:

```csharp
string myString = "Hello, World!";
string[] myArray = myString.Split(','); // Split the string at the comma

foreach (string word in myArray)
{
    Console.WriteLine(word);
}
```

Output:
```
Hello
 World!
```

Another example:

```csharp
string myString = "The quick brown fox jumps over the lazy dog";
string[] myArray = myString.Split(' '); // Split the string at spaces

foreach (string word in myArray)
{
    Console.WriteLine(word);
}
```

Output:
```
The
quick
brown
fox
jumps
over
the
lazy
dog
```