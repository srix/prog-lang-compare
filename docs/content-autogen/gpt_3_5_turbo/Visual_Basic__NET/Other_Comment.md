Commenting is a very important aspect of programming in any language including Visual Basic .NET. Comments are used to explain the code or to add notes that help other developers understand what the code is doing. 

In Visual Basic .NET, there are two ways to add comments to your code: 

1. Single-Line Comments

Single-line comments are used to add comments on a single line. To create a single-line comment, start with an apostrophe (') and then add your comment. For example:

```
' This is a single-line comment in Visual Basic .NET
```

Any text after the apostrophe symbol will not be executed by the compiler. Single-line comments are usually used for simple explanations of code or for temporary comments that can be removed at a later stage.

2. Multi-Line Comments

Multi-line comments are used to add comments that span multiple lines. To create a multi-line comment, use the following syntax:

```
' This is a multi-line comment
' This comment spans multiple lines
' Note that each line starts with an apostrophe symbol
```

Alternatively, you can use the following syntax to create multi-line comments:

```
'This is a multi-line comment that spans 
'multiple lines within a single comment block
'This is another line of the same comment block
'To end the block, use a final apostrophe
'To keep the apostrophe from showing up in the comment, use a space before it
```

In general, multi-line comments are used for more detailed explanations of code or for commenting out entire sections of code that are not needed at the moment.

Here's an example of how you can include comments in your code:

```
' This is a comment in Visual Basic .NET
Public Class ExampleClass
    ' Here's another comment
    Public Sub ExampleMethod(ByVal param1 As String, ByVal param2 As Integer)
        ' This is a comment within a method
        ' Do something with the parameters
    End Sub
End Class
```

Remember that comments are important because they help make your code more readable and maintainable, and they can save you and other developers a lot of time and effort in the long run.