To get the parent directory path in Visual Basic .NET, you can use the GetDirectoryName method of the Path class, along with the ".." syntax to reference the parent directory. Here's an example:

```
Dim filePath As String = "C:\path\to\file.txt"
Dim parentDirPath As String = Path.GetDirectoryName(filePath) & "\.."
```

In this example, the variable `filePath` contains the file path for which you want to get the parent directory path. The `Path.GetDirectoryName` method returns the directory path of the file (in this case, "C:\path\to"), and then we append "\.." to reference the directory's parent in the file system. The resulting value, `parentDirPath`, would be "C:\path".

Alternatively, you can use the DirectoryInfo class to achieve the same result. Here's another example:

```
Dim filePath As String = "C:\path\to\file.txt"
Dim fileInfo As New FileInfo(filePath)
Dim parentDirPath As String = fileInfo.Directory.Parent.FullName
```

Here, we create a new FileInfo object using the file path, and then access its `Directory.Parent.FullName` property to get the full path of the parent directory. Again, the resulting `parentDirPath` value would be "C:\path".