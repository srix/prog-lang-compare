In Visual Basic .NET, we can add an element to a hash using the "Dictionary" class.

Here's an example:

```vb.net
' Create a new dictionary object
Dim myDict As New Dictionary(Of String, String)

' Add elements to the dictionary
myDict.Add("Key1", "Value1")
myDict.Add("Key2", "Value2")

' Add a new element to the dictionary
myDict.Add("Key3", "Value3")
```

In the example above, we first create a new dictionary object using the "Dictionary" class. We then add two elements to the dictionary using the "Add" method, with the keys "Key1" and "Key2" and values "Value1" and "Value2" respectively.

Finally, we add a new element to the dictionary using the "Add" method again, this time with the key "Key3" and value "Value3".

You can access the elements in the dictionary using the key as shown below:

```vb.net
' Accessing the elements in the dictionary
Dim val As String = myDict("Key1")
Console.WriteLine(val) ' Outputs "Value1"
```

In the code above, we access the value associated with the key "Key1" in the dictionary and store it in the "val" variable. We then print the value to the console using the "WriteLine" method.