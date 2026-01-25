To get the path of the sister directory in C#, you can use the `Directory.GetParent` method to get the parent directory of a given path and then combine it with the name of the sister directory using the `Path.Combine` method. Here's an example of how to do this:

```csharp
using System;
using System.IO;

class Program {
    static void Main(string[] args) {
        string path = @"C:\parent\child\";
        string sisterDirName = "sister";

        // Get the parent directory
        string parentDirPath = Directory.GetParent(path).FullName;

        // Combine the parent directory path with the sister directory name
        string sisterDirPath = Path.Combine(parentDirPath, sisterDirName);

        Console.WriteLine("Sister directory path: " + sisterDirPath);
    }
}
```

In this example, we first define the path to the child directory as `@"C:\parent\child\"`. We then specify the name of the sister directory as `"sister"`. We then use the `Directory.GetParent` method to get the parent directory of the child directory, which is `"C:\parent"`. We then combine this parent directory path with the name of the sister directory using the `Path.Combine` method to get the path to the sister directory, which is `"C:\parent\sister"`. Finally, we print out this path using `Console.WriteLine`.