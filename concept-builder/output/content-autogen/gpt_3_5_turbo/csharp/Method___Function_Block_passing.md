In C#, Block passing is a technique where we can pass a block of code as a parameter to a method. This technique is commonly known as lambda expressions or anonymous methods.

Syntax of Block Passing:

```csharp
delegate return_type delegate_name(parameters)
```

Here, the delegate_name is the name of the delegate. The parameters are the arguments that need to be passed to the delegate. The return_type is the data type that the delegate would return.

Example 1: Using Block passing with a delegate method

```csharp
delegate void Print(int value);

class Program
{
    static void Main()
    {
        // Using a delegate with block passing
        Print print = delegate (int value)
        {
            Console.WriteLine("Value: {0}", value);
        };

        // Calling the delegate method
        print(10);
    }
}
```

Output: Value: 10

Example 2: Using Block passing with lambda expression

```csharp
delegate int Operation(int a, int b);

class Program
{
    static void Main()
    {
        // Using a lambda expression with block passing
        Operation operation = (a, b) =>
        {
            return a + b;
        };

        // Calling the delegate method
        int result = operation(10, 20);
        Console.WriteLine("Result: {0}", result);
    }
}
```

Output: Result: 30

In the above example, we defined a delegate method called Operation that takes two integers as parameters and returns an integer. We used a lambda expression with block passing to define the delegate method. Finally, we called the delegate method to add two numbers and stored the result in the result variable.