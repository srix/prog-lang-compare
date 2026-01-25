In C#, we can write data to a file using the File class or StreamWriter class. Here's an example using both methods:

Example using the File class:

```
using System;
using System.IO;

class Program
{
    static void Main(string[] args)
    {
        string content = "This is some sample content to write to a file.";

        // write to a file using the File class
        File.WriteAllText("myFile.txt", content);

        Console.WriteLine("File written successfully.");
    }
}
```

Example using the StreamWriter class:

```
using System;
using System.IO;

class Program
{
    static void Main(string[] args)
    {
        string content = "This is some sample content to write to a file.";

        // write to a file using the StreamWriter class
        using (StreamWriter writer = new StreamWriter("myFile.txt"))
        {
            writer.WriteLine(content);
        }

        Console.WriteLine("File written successfully.");
    }
}
```

Both of these examples will create a file named "myFile.txt" in the current directory and write the contents of the `content` string to the file. The difference is in the method used to write to the file - `File.WriteAllText` writes the entire contents of the string to the file at once, while `StreamWriter` writes the data one line at a time. It's important to note that when using `StreamWriter`, we should always enclose it in a `using` block to ensure that the file is properly closed and disposed of when we're finished writing to it.