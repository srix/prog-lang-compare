In Visual Basic .NET, you can get the working directory path using the following code:

```vb.net
Dim workingDirectoryPath As String = Environment.CurrentDirectory
```

This code sets the value of the `workingDirectoryPath` variable to the current working directory path. You can also use the `My.Application.Info.DirectoryPath` property to get the path of the directory that contains the application executable file.

```vb.net
Dim applicationDirectoryPath As String = My.Application.Info.DirectoryPath
```

Here is an example that demonstrates both methods:

```vb.net
Dim workingDirectoryPath As String = Environment.CurrentDirectory
Dim applicationDirectoryPath As String = My.Application.Info.DirectoryPath

Console.WriteLine("Working Directory Path: " & workingDirectoryPath)
Console.WriteLine("Application Directory Path: " & applicationDirectoryPath)
```

When you execute this example, it will output the current working directory path and the directory path of the application executable file.