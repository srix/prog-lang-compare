In C#, null, true, and false are keywords used to denote absence of a value, boolean true, and boolean false respectively. To check if a value is null or not, you can use the conditional `if` statement with the "equal to null" operator `==`. Here's an example:

```csharp
string name = "John";
if (name == null)
{
    Console.WriteLine("Name is null");
}
else
{
    Console.WriteLine("Name is not null");
}

// Output: Name is not null
```

To check if a boolean value is true or false, you can use the `if` statement with the corresponding keyword. Here's an example:

```csharp
bool isRaining = false;
if (isRaining)
{
    Console.WriteLine("It is raining");
}
else
{
    Console.WriteLine("It is not raining");
}

// Output: It is not raining
```

You can also use the negation operator `!` to reverse the boolean value. For instance:

```csharp
bool isSunny = true;
if (!isSunny)
{
    Console.WriteLine("It's not sunny");
}
else
{
    Console.WriteLine("It's sunny");
}

// Output: It's sunny
```