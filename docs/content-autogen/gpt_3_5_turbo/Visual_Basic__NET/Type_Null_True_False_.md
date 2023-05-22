In Visual Basic .NET, you can check if a value is null/true/false by using various methods. Here are some examples:

1. Using IsNothing() Method:

The IsNothing() method is used to check if a value is null or not. Here's an example:

```
Dim myValue As Integer = Nothing

If IsNothing(myValue) Then
   Console.WriteLine("The value is null")
Else
   Console.WriteLine("The value is not null")
End If
```

2. Using IsTrue() and IsFalse() Methods:

The IsTrue() and IsFalse() methods are used to check if a value is true or false. Here are some examples:

```
Dim myValue As Boolean = True

If myValue.IsTrue Then
   Console.WriteLine("The value is true")
Else
   Console.WriteLine("The value is false")
End If
```

```
Dim myValue As Boolean = False

If myValue.IsFalse Then
   Console.WriteLine("The value is false")
Else
   Console.WriteLine("The value is true")
End If
```

3. Using the Is operator:

The Is operator is used to compare object references, which can be used to check if a value is null or not. Here's an example:

```
Dim myValue As Integer = Nothing

If myValue Is Nothing Then
   Console.WriteLine("The value is null")
Else
   Console.WriteLine("The value is not null")
End If
```

I hope this helps!