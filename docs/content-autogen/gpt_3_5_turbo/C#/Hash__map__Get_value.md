In C#, you can get the value of a key in a hash by using the square brackets `[]` and passing the key as the index. Here's an example:

```csharp
using System;
using System.Collections.Generic;

class Program {
    static void Main(string[] args) {
        // Create a hash table
        Dictionary<string, int> grades = new Dictionary<string, int>();
        grades.Add("Alice", 90);
        grades.Add("Bob", 85);
        grades.Add("Charlie", 95);

        // Get the value of a key
        int aliceGrade = grades["Alice"];
        Console.WriteLine("Alice's grade: {0}", aliceGrade);

        // Handling exceptions
        int eveGrade;
        if (grades.TryGetValue("Eve", out eveGrade)) {
            Console.WriteLine("Eve's grade: {0}", eveGrade);
        } else {
            Console.WriteLine("Eve's grade does not exist.");
        }
    }
}
```

In the example above, we created a hash table `grades` and added three key-value pairs. To get the value of the "Alice" key, we use `grades["Alice"]` which returns the value of 90. 

If the key does not exist, attempting to access it with the square brackets will throw a `KeyNotFoundException`. To avoid this, we can use the `TryGetValue` method to safely retrieve the value and also check if the key exists. In the example, we attempted to retrieve the grade of a non-existing student "Eve" and handle the exception by printing a message.