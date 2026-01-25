To import a library in C#, we use the `using` statement. The `using` statement tells the compiler which namespace to look in when resolving names. Here is an example:

```csharp
using System;
 
namespace MyNamespace
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, world!");
        }
    }
}
```

In the above example, we `using` the `System` namespace to gain access to the `Console` class.

You can also import multiple namespaces by using multiple `using` statements:

```csharp
using System;
using System.Collections.Generic;
 
namespace MyNamespace
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = new List<int>();
            numbers.Add(1);
            numbers.Add(2);
 
            Console.WriteLine("The number of items in the list is: " + numbers.Count);
        }
    }
}
```

In this example, we use the `using` statement to import the `System` namespace as well as the `System.Collections.Generic` namespace to be able to use the `List` class.