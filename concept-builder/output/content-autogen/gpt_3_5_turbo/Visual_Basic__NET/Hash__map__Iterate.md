In Visual Basic .NET, you can iterate over a hash using the `For Each...Next` loop. Here's an example:

```
Dim myHash As New Hashtable()
myHash.Add("Name", "John")
myHash.Add("Age", 30)
myHash.Add("City", "New York")

For Each key As Object In myHash.Keys
    Console.WriteLine(key.ToString() & ": " & myHash(key).ToString())
Next
```

In this example, we create a new hash table called `myHash`, and we add three key-value pairs to it: "Name", "Age", and "City". Then, we use a `For Each...Next` loop to iterate over the keys in the hash table. For each key, we output the key and its corresponding value using the `Console.WriteLine` method.

The output of the above code will be:

```
Name: John
Age: 30
City: New York
```

Note that the `Hashtable` class is an older implementation of a hash table in .NET. If you're using a newer version of .NET, you might prefer to use a `Dictionary` instead. Here's an example of iterating over a `Dictionary` in VB.NET:

```
Dim myDict As New Dictionary(Of String, String)()
myDict.Add("Name", "John")
myDict.Add("Age", "30")
myDict.Add("City", "New York")

For Each pair As KeyValuePair(Of String, String) In myDict
    Console.WriteLine(pair.Key & ": " & pair.Value)
Next
```

In this example, we create a new `Dictionary` called `myDict` and add three key-value pairs to it. Then, we use a `For Each...Next` loop to iterate over the key-value pairs in the dictionary. For each pair, we output the key and value using the `Console.WriteLine` method.

The output of the above code will be:

```
Name: John
Age: 30
City: New York
```