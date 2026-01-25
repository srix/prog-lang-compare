In C#, you can use the `Directory.GetParent` method to obtain the parent directory path of a given file or directory. Here is an example:

```csharp
string filePath = @"C:\MyFolder\MyFile.txt";

// Get the parent directory path
string parentPath = Directory.GetParent(filePath).FullName;

// Output the parent directory path
Console.WriteLine(parentPath);
```

This will output the parent directory path: `C:\MyFolder`

Here is another example for a directory path:

```csharp
string dirPath = @"C:\MyFolder\SubFolder";

// Get the parent directory path
string parentPath = Directory.GetParent(dirPath).FullName;

// Output the parent directory path
Console.WriteLine(parentPath);
```

This will output the parent directory path: `C:\MyFolder`