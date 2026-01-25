To run a command in C#, we can make use of the `Process` class in the System.Diagnostics namespace. 

Here's an example that shows how to run the `ipconfig` command in C#:

```csharp
using System.Diagnostics;

ProcessStartInfo processInfo = new ProcessStartInfo 
{
    FileName = "cmd.exe", 
    Arguments = "/c ipconfig",
    RedirectStandardOutput = true,
    UseShellExecute = false,
    CreateNoWindow = true
};

Process process = new Process 
{
    StartInfo = processInfo
};

process.Start(); // Starts the command execution

string output = process.StandardOutput.ReadToEnd(); // Reads the output of the command

process.WaitForExit(); // Waits for the command to finish

// Do something with the output (e.g. print it)
Console.WriteLine(output);
```

In this example, we're creating an instance of the `ProcessStartInfo` class to set up the command to run. We're setting the `FileName` property to `cmd.exe` (since we want to run the `ipconfig` command in the command prompt) and the `Arguments` property to `/c ipconfig` (where `/c` tells the command prompt to execute the following command and then terminate).

We're also setting the `RedirectStandardOutput` property to true, which tells the process to redirect the output of the command to a `StandardOutput` stream that we can read programmatically. We're also setting `UseShellExecute` to false and `CreateNoWindow` to true to prevent the command prompt window from showing up.

Then we're creating an instance of the `Process` class and setting its StartInfo property to the `processInfo` object we created earlier. Finally, we're starting the process, reading the output of the command, waiting for the process to finish executing, and doing something with the output (in this case, printing it to the console). 

Note that the `StartInfo` property can be modified in many ways to set up different commands with different arguments. The example above is just a simple illustration.