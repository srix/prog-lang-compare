In C#, we can use the `Distinct` method to get the unique elements of an array. Here's an example:

```csharp
int[] numbers = { 1, 2, 2, 3, 3, 4, 5, 5 };
int[] uniqueNumbers = numbers.Distinct().ToArray();

foreach (int number in uniqueNumbers)
{
    Console.WriteLine(number);
}
```

Output:

```
1
2
3
4
5
```

In this example, we first define an array `numbers` with some duplicate elements. We then use the `Distinct` method to get the unique elements, and convert the result to an array using `ToArray()`. Finally, we use a foreach loop to iterate over the unique elements and print them to the console.

Note that the `Distinct` method only works for arrays of reference types (`class`) or value types that implement the `IEquatable<T>` interface. For arrays of other value types (e.g. `struct`), we can use `Enumerable.DistinctBy` method available through `System.Linq.Expressions`. For example:

```csharp
struct Person
{
    public string Name { get; set; }
    public int Age { get; set; }
}

Person[] people = {
    new Person { Name = "Alice", Age = 20 },
    new Person { Name = "Bob", Age = 20 },
    new Person { Name = "Charlie", Age = 30 },
    new Person { Name = "Alice", Age = 25 },
};

Person[] uniquePeople = people
    .GroupBy(p => p.Name)
    .Select(g => g.First())
    .ToArray();

foreach (Person person in uniquePeople)
{
    Console.WriteLine($"{person.Name} ({person.Age})");
}
```

Output:

```
Alice (20)
Bob (20)
Charlie (30)
``` 

In this example, we define a `Person` struct and an array of `Person` objects with some duplicate elements. We use the `GroupBy` method to group the objects by `Name`, and then select the first object from each group using `Select`. Finally, we convert the result to an array, and iterate over the unique `Person` objects to print their names and ages to the console.