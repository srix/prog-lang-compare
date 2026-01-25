In Visual Basic .NET, you can use the `Application.StartupPath` property to get the directory path of the application that is currently executing. Here is an example:

```
Dim appPath As String = Application.StartupPath
Console.WriteLine(appPath)
```

This will print the directory path of the application to the console.

Alternatively, you can use the `System.IO.Path.GetDirectoryName` method to get the directory path of a specific file. Here is an example:

```
Dim filePath As String = "C:\Temp\example.txt"
Dim dirPath As String = Path.GetDirectoryName(filePath)
Console.WriteLine(dirPath)
```

This will print the directory path of the `example.txt` file to the console. 

It's important to note that both `Application.StartupPath` and `Path.GetDirectoryName` return the directory path as a string, so you can use it in your code as needed.