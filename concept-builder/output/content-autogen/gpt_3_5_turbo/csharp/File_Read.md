In C#, reading a file is done through the System.IO namespace, which provides a rich set of classes for file handling. Here's an example of how to read a file in C#:

```csharp
// Import the necessary namespace
using System.IO;

// Define the file path
string filePath = "C:\\example.txt";

// Check if the file exists
if (File.Exists(filePath))
{
    // Open the file and read its contents
    using (StreamReader reader = new StreamReader(filePath))
    {
        string line;
        while ((line = reader.ReadLine()) != null)
        {
            Console.WriteLine(line);
        }
    }
}
else
{
    Console.WriteLine("File not found!");
}
```

In this example, we first import the System.IO namespace, which provides the necessary classes for file handling. We then define the file path of the file we want to read. We check if the file exists using the File.Exists() method.

If the file exists, we open it using the StreamReader class, which is a convenient way to read text from a file. We use the ReadLine() method to read each line of the file and print it to the console. Once we're done reading the file, we close it using the using statement to ensure that it's properly disposed.

If the file doesn't exist, we simply print an error message.