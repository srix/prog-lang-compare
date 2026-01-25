To import libraries in Visual Basic .NET, the `Imports` statement is used at the top of the code file. This statement specifies the namespace of the library that is being imported. Once the library is imported, its classes, methods and properties can be accessed without fully qualifying them.

Here are a few examples of how to import libraries in Visual Basic .NET:

Example 1 - Importing the `System` namespace:
```vb.net
Imports System

Public Class ExampleClass
    Public Sub DoSomething()
        ' Use classes and methods from the System namespace without fully qualifying them
        Dim now As Date = Date.Now
        Console.WriteLine("The current date and time is: {0}", now.ToString())
    End Sub
End Class
```

Example 2 - Importing a specific class from a namespace:
```vb.net
Imports System.IO.File

Public Class ExampleClass
    Public Sub DoSomething()
        ' Use methods from the File class without fully qualifying them
        Dim contents As String = ReadAllText("C:\example\file.txt")
        Console.WriteLine("The file content is: {0}", contents)
    End Sub
End Class
```

Example 3 - Importing a custom namespace:
```vb.net
Imports MyProject.MyNamespace

Public Class ExampleClass
    Public Sub DoSomething()
        ' Use classes and properties from the MyNamespace namespace without fully qualifying them
        Dim myObject As New MyClass()
        myObject.MyProperty = "Hello World!"
    End Sub
End Class
```