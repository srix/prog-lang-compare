In C#, you can generate random numbers using the `Random` class. Here's an example:

```csharp
Random rnd = new Random();
int randomNumber = rnd.Next(1, 101); // generates a random number between 1 and 100
```

In the above example, we create a `Random` object called `rnd`. Then, we use the `Next()` method to generate a random integer between 1 and 100 (inclusive).

Here's an example that generates a random double:

```csharp
Random rnd = new Random();
double randomNumber = rnd.NextDouble() * 10; // generates a random number between 0 and 10
```

In the above example, we use the `NextDouble()` method to generate a random double between 0.0 and 1.0 (exclusive). We then multiply this number by 10 to get a random double between 0.0 and 10.0.