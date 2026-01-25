In Visual Basic .NET, you can use get and set methods in your class to control access to class properties, and ensure that the values assigned to them meet certain requirements.

The get method is used to retrieve the value of a property, while the set method is used to assign a value to a property.

Here's an example of how to use get/set in a class:

```
Public Class Person
    Private _name As String

    Public Property Name() As String
        Get
            Return _name
        End Get
        Set(ByVal value As String)
            If Not String.IsNullOrEmpty(value) Then
                _name = value
            End If
        End Set
    End Property
End Class
```

In this example, we have a class called "Person" with a private variable called "_name". We use a property called "Name" to control access to this variable. 

The get method simply returns the value of "_name". The set method, on the other hand, ensures that the value being assigned to the property is not null or empty before assigning it to "_name".

We can then use this class as follows:

```
Dim person as New Person()

person.Name = "John Doe" ' This is valid
person.Name = "" ' This is invalid and will be ignored
```

By using get/set in our class, we have added an extra level of data validation and ensured that our class is more robust.