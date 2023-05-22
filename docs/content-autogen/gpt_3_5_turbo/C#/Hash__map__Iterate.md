In C#, iterating over a hash can be done using the `foreach` loop. Here's an example:

```csharp
// Creating a hash table
Hashtable myHashTable = new Hashtable();

// Adding some key-value pairs
myHashTable.Add("John", "Smith");
myHashTable.Add("Jane", "Doe");
myHashTable.Add("Bob", "Johnson");

// Looping through the hash table
foreach (DictionaryEntry entry in myHashTable)
{
    Console.WriteLine("{0}: {1}", entry.Key, entry.Value);
}
```

In this example, we first create a new `Hashtable` and add some key-value pairs. 

We then use a `foreach` loop to iterate over the hash. In each iteration, the `DictionaryEntry` type is used to hold the current key-value pair. The `Key` property is used to retrieve the key, and the `Value` property is used to retrieve the value. 

Finally, we print the key-value pairs to the console using `Console.WriteLine()`. 

The output for this code will be:

```
John: Smith
Jane: Doe
Bob: Johnson
```