In C#, you can get the full directory path using the `System.IO.Path` namespace. Here is an example:

```csharp
string directoryPath = Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);

Console.WriteLine(directoryPath);
```

This will give you the full path to the directory where the current executable is located. If you want to specify a different file or directory, you can replace `System.Reflection.Assembly.GetExecutingAssembly().Location` with the path or file name of your choice.

You can also use the `Directory.GetCurrentDirectory()` method to get the current working directory:

```csharp
string directoryPath = Directory.GetCurrentDirectory();

Console.WriteLine(directoryPath);
```

This will give you the full path to the current working directory. Note that if you change the current working directory using the `Directory.SetCurrentDirectory()` method, the result of this call will also change accordingly.

Finally, if you need to combine paths, you can use the `Path.Combine()` method:

```csharp
string parentDirectory = @"C:\Users\UserName";
string childDirectory = "Downloads";
string fullDirectoryPath = Path.Combine(parentDirectory, childDirectory);

Console.WriteLine(fullDirectoryPath);
```

This will give you the full path to the `Downloads` directory, assuming that it is located under `C:\Users\UserName`.