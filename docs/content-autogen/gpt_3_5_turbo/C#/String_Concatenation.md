In C#, you can concatenate strings using the "+" operator. Here is an example of how to concatenate two strings using the "+" operator:

```csharp
string firstName = "John";
string lastName = "Doe";
string fullName = firstName + " " + lastName;
Console.WriteLine(fullName);
```

Output: "John Doe"

You can also use the string.Concat() method to concatenate multiple strings. Here is an example:

```csharp
string str1 = "Hello";
string str2 = "world";
string str3 = "!";
string result = string.Concat(str1, " ", str2, str3);
Console.WriteLine(result);
```

Output: "Hello world!" 

Alternatively, you can use the $"{variable}" syntax to insert variables into strings:

```csharp
string name = "Alice";
int age = 25;
string message = $"My name is {name} and I am {age} years old.";
Console.WriteLine(message);
```

Output: "My name is Alice and I am 25 years old."