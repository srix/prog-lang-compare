In C#, we can check if a string is a number by using the `int.TryParse()` or `double.TryParse()` methods.

The `int.TryParse()` method attempts to convert the string representation of a number to an integer, and returns a boolean value that indicates whether the conversion succeeded. Here's an example:

```
string input = "123";

if (int.TryParse(input, out int result))
{
    Console.WriteLine("Input is a valid integer: " + result);
}
else
{
    Console.WriteLine("Input is not a valid integer.");
}
```

This code checks if the input string "123" is a valid integer by calling `int.TryParse()` with the `out` parameter `result`. If the conversion is successful, the method returns `true` and writes "Input is a valid integer: 123" to the console. Otherwise, it returns `false` and writes "Input is not a valid integer." to the console.

Similarly, the `double.TryParse()` method attempts to convert the string representation of a number to a double, and returns a boolean value that indicates whether the conversion succeeded. Here's an example:

```
string input = "3.14";

if (double.TryParse(input, out double result))
{
    Console.WriteLine("Input is a valid double: " + result);
}
else
{
    Console.WriteLine("Input is not a valid double.");
}
```

This code checks if the input string "3.14" is a valid double by calling `double.TryParse()` with the `out` parameter `result`. If the conversion is successful, the method returns `true` and writes "Input is a valid double: 3.14" to the console. Otherwise, it returns `false` and writes "Input is not a valid double." to the console.