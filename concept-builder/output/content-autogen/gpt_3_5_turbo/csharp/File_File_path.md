In C#, there are several ways to get the file path. Here are three examples:

1. Using the `Application.StartupPath` property:

```csharp
string path = Application.StartupPath;
Console.WriteLine("File path: {0}", path);
```

2. Using the `Assembly.GetExecutingAssembly()` method along with the `Location` property:

```csharp
string path = Assembly.GetExecutingAssembly().Location;
Console.WriteLine("File path: {0}", path);
```

3. Using the `Environment.CurrentDirectory` property:

```csharp
string path = Environment.CurrentDirectory;
Console.WriteLine("File path: {0}", path);
```

All three of these examples will output the file path to the console. The method you choose will depend on your specific needs and the context of your program.