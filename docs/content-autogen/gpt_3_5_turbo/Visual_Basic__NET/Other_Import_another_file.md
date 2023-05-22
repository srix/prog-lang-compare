In Visual Basic .NET, there are various ways to import or incorporate another file into a project. The most common way is to use the `Imports` statement or to include a reference to an external file. Below are examples of each method:

1. Using the `Imports` statement

The `Imports` statement enables you to use types and members from another namespace without having to qualify the name with its namespace. Here's an example:

```vb
' 1. Create a new VB Module file and save it as "Utilities.vb" 
Module Utilities
    Public Function Multiply(ByVal x As Integer, ByVal y As Integer) As Integer
        Return x * y
    End Function
End Module

' 2. In the main program file, add the Imports statement at the top
Imports <Namespace_Name> ' Replace <Namespace_Name> with the name of the namespace that you want to import

' 3. Call the function
Module Main
    Sub Main()
        Dim result As Integer = Multiply(5, 10)
        Console.WriteLine("The result is {0}", result)
    End Sub
End Module
```

In the above example, we have created a new module file named "Utilities.vb" and defined a simple function named "Multiply". Then, in the main program file, we have imported the Utilities namespace by using the `Imports` statement and called the Multiply function.

2. Including a reference to an external file

If you have an external file that contains a class or module that you want to use, then you need to add a reference to that file. Here's an example:

```vb
' 1. Create a new VB Class Library project and save it as "MyLibrary.vbproj".
Public Class MyClass
    Public Function Add(ByVal x As Integer, ByVal y As Integer) As Integer
        Return x + y
    End Function
End Class

' 2. In the main program file, add the reference to the project
'    by right-clicking the References folder in Solution Explorer 
'    and selecting "Add Reference".
'    Find the project and select it. 
'    Then click OK.

' 3. Call the function
Module Main
    Sub Main()
        Dim obj As New MyClass()
        Dim result As Integer = obj.Add(5, 10)
        Console.WriteLine("The result is {0}", result)
    End Sub
End Module
```

In the above example, we have created a new class library project named "MyLibrary.vbproj" and defined a class named "MyClass". Then, in the main program file, we have added a reference to the "MyLibrary" project and created an instance of the MyClass object to call the Add function.