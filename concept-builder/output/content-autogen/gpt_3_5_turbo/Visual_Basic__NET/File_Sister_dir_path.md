To get the sister directory path in Visual Basic .NET, you can use the `Path.GetFullPath` method and the `Path.GetDirectoryName` method. Here's an example code snippet:

```
Dim currentDir As String = "C:\MyProjects\Project1\SubFolder1"
Dim parentDir As String = Path.GetDirectoryName(Path.GetFullPath(currentDir))
Dim sisterDir As String = Path.Combine(parentDir, "SubFolder2")
Console.WriteLine(sisterDir)
```

In this example, the `currentDir` variable is set to the path of a subfolder (SubFolder1) within a project folder (Project1). The `parentDir` variable is then set to the full path of the parent directory of SubFolder1 (C:\MyProjects\Project1 in this case). Finally, the `sisterDir` variable is set to the full path of a sister directory of SubFolder1 within the same parent directory (C:\MyProjects\Project1\SubFolder2 in this case). The `Console.WriteLine` method is used to display the `sisterDir` variable in the console window.

You can modify this code according to your folder structure and needs.