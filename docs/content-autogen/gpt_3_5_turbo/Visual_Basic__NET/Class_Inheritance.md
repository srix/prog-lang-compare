Inheritance is a mechanism in Visual Basic .NET through which one class can derive the functionality (fields and methods) from another class. The class that is being inherited is known as the base class (or superclass), and the class that inherits the base class is known as the derived class (or subclass).

To create a derived class in Visual Basic .NET, you need to use the `Inherits` keyword and specify the name of the base class after it. Here's an example:

```vb.net
Public Class Animal
    Public Property Name As String

    Public Sub New(name As String)
        Me.Name = name
    End Sub

    Public Overridable Sub Speak()
        Console.WriteLine("I am an animal.")
    End Sub
End Class

Public Class Dog
    Inherits Animal

    Public Sub New(name As String)
        MyBase.New(name)
    End Sub

    Public Overrides Sub Speak()
        Console.WriteLine("I am a dog named {0}.", Name)
    End Sub
End Class
```

The `Animal` class is the base class that has a property `Name` and a method `Speak()`. The `Dog` class is the derived class that inherits the `Name` property and `Speak()` method from the `Animal` class. It also has its own constructor that calls the `Animal` class constructor using the `MyBase` keyword.

The `Override` keyword is used in the `Speak()` method of the `Dog` class to indicate that it is overriding the `Speak()` method of the `Animal` class. This means that when the `Speak()` method is called on a `Dog` object, it will execute the code in the `Dog` class's `Speak()` method instead of the `Animal` class's `Speak()` method.

Here's an example of how to use the `Dog` class:

```vb.net
Dim myDog As New Dog("Fido")
myDog.Speak() ' Output: I am a dog named Fido.
```

In this example, we create a new `Dog` object with the name "Fido" and call its `Speak()` method. The output will be "I am a dog named Fido.", which is the custom message defined in the `Dog` class's `Speak()` method.

In summary, inheritance in Visual Basic .NET allows you to create new classes based on existing ones, which can save you time and effort in writing new code. By reusing the code from the base class, you can focus on adding new functionality to the derived class.