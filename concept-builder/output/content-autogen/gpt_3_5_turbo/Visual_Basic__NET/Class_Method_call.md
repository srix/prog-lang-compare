To call a method in a class using Visual Basic .NET, follow these steps:

1. Create an instance of the class. 
You can create an instance of the class using the `New` keyword and the name of the class. Here's an example:

```vb
Dim book As New Book()
```

2. Call the method by using the instance name followed by the method name. 
To call a method from the class, you can use the name of the instance, followed by the name of the method with parentheses. Here's an example:

```vb
book.Display()
```

This will call the `Display` method in the `Book` class.

Here's a full example of calling a method in a class:

```vb
'Class definition with a method'
Public Class Book
    Public Sub Display()
        Console.WriteLine("I am a book.")
    End Sub
End Class

'Main method'
Sub Main()
    'Create an instance of the class.'
    Dim book As New Book()

    'Call the method using the instance name.'
    book.Display()

    'Output: I am a book.'
End Sub
```

In this example, we create an instance of the `Book` class, call the `Display` method, and output the result. You can modify the `Display` method to perform some other action specific to your program.