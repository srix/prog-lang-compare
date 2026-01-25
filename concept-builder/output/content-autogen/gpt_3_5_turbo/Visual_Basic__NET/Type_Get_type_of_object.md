In Visual Basic .NET, to retrieve the type of an object, you can use the GetType() method. 

Here is an example:

```vb.net
Dim myObject As Object
myObject = "Hello, World!"
Dim myType As Type = myObject.GetType()
Console.WriteLine("The type of myObject is: " & myType.Name)
```

This will output:

```
The type of myObject is: String
```

Another example:

```vb.net
Dim myObject As Object
myObject = New List(Of Integer)()
Dim myType As Type = myObject.GetType()
Console.WriteLine("The type of myObject is: " & myType.Name)
```

This will output:

```
The type of myObject is: List`1
```

Note that the GetType() method returns a Type object which provides information about the type, such as its name, its properties, and the methods it provides.