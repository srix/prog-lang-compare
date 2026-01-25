In C#, we can add an element to a hash by using the `Add()` method or the indexer `[]`. Here are some examples:

Using `Add()` method:
```csharp
// create a new hash
var myHash = new Dictionary<string, int>();

// add elements to the hash
myHash.Add("apple", 2);
myHash.Add("banana", 3);
myHash.Add("orange", 4);
```

Using indexer `[]`:
```csharp
// create a new hash
var myHash = new Dictionary<string, int>();

// add elements to the hash using the indexer
myHash["apple"] = 2;
myHash["banana"] = 3;
myHash["orange"] = 4;
```

Both of these methods will add elements to a hash in C#. The `Add()` method throws an exception if the key already exists in the hash, whereas the indexer `[]` will overwrite the existing value if the key already exists.

Here is an example of how to add an element to a hash using the `Add()` method and then print out all the elements in the hash:

```csharp
// create a new hash
var myHash = new Dictionary<string, int>();

// add elements to the hash using the Add() method
myHash.Add("apple", 2);
myHash.Add("banana", 3);
myHash.Add("orange", 4);

// print out all the elements in the hash
foreach (var kvp in myHash)
{
    Console.WriteLine($"{kvp.Key}: {kvp.Value}");
}
```

Output:
```
apple: 2
banana: 3
orange: 4
```