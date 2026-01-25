In Visual Basic .NET, to get the size of a hash, you can use the `Count` property, which returns the number of key-value pairs in the hash. Here is an example:

```
Dim myHash As New Hashtable()

myHash.Add("key1", "value1")
myHash.Add("key2", "value2")
myHash.Add("key3", "value3")

Dim size As Integer = myHash.Count

Console.WriteLine("The size of the hash is " & size)
```

In this example, we create a `Hashtable` object and add three key-value pairs to it. We then use the `Count` property to get the size of the hash and store it in the `size` variable. Finally, we use `Console.WriteLine` to output the size of the hash to the console.

Alternatively, you can use the `Capacity` property to get or set the number of elements that the hash can contain before it needs to be resized. Here's an example:

```
Dim myHash As New Hashtable(10)

myHash.Add("key1", "value1")
myHash.Add("key2", "value2")
myHash.Add("key3", "value3")

Dim capacity As Integer = myHash.Capacity

Console.WriteLine("The capacity of the hash is " & capacity)
```

In this example, we create a `Hashtable` object with an initial capacity of 10. We add three key-value pairs to it and then use the `Capacity` property to get the initial capacity of the hash. Finally, we use `Console.WriteLine` to output the capacity of the hash to the console.