In C#, getting the current working directory path is quite easy using the `Directory.GetCurrentDirectory` method. Here's an example:

```csharp
using System;
using System.IO;

class Program {
    static void Main(string[] args) {
        string workingDirectory = Directory.GetCurrentDirectory();
        Console.WriteLine("The current working directory is: " + workingDirectory);
    }
}
```

This will output something like "The current working directory is: C:\my-project". 

You can also get the same result with the `Environment.CurrentDirectory` property:

```csharp
using System;

class Program {
    static void Main(string[] args) {
        string workingDirectory = Environment.CurrentDirectory;
        Console.WriteLine("The current working directory is: " + workingDirectory);
    }
}
```

Both approaches will work and give you the current working directory path.