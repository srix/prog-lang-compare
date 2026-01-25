In Visual Basic .NET, you can get the value of a key in a hash using the following syntax:

```
Dim myHash As New Hashtable()
myHash("key1") = "value1"
myHash("key2") = "value2"
Dim value As String = myHash("key1")
```

In the code above, we first create a new `Hashtable` object named `myHash`. We then add two key-value pairs to it using the `()` syntax. Finally, we retrieve the value associated with the `"key1"` key using the `myHash("key1")` syntax and store it in the `value` variable.

Another way to get the value of a key in a hash in Visual Basic .NET is to use the `TryGetValue` method, as shown in the code below:

```
Dim myHash As New Hashtable()
myHash("key1") = "value1"
myHash("key2") = "value2"
Dim value As Object
If myHash.TryGetValue("key1", value) Then
    Console.WriteLine("The value of key1 is " & value.ToString())
End If
```

In the code above, we first create a new `Hashtable` object named `myHash`. We then add two key-value pairs to it using the `()` syntax. Finally, we use the `TryGetValue` method to retrieve the value associated with the `"key1"` key. The `TryGetValue` method takes two parameters: the key to search for, and a variable to store the value if the key is found. If the key is found, `TryGetValue` returns `True` and stores the value in the `value` variable. We can then use the value as needed.