In C#, the "not" operator is denoted with the exclamation mark (!). It's used as a logical operator that reverses the boolean value of an expression. Here are some examples of using the "not" operator in C#:

1. Reversing a boolean value: 

```csharp
bool isHappy = true;
bool isNotHappy = !isHappy; // "!" reverses the boolean value
Console.WriteLine(isNotHappy); // Output: False
```

2. Using "not" in an if statement:

```csharp
int num = 10;
if(!(num == 5)) { // Reverses the boolean result of the expression "num == 5"
    Console.WriteLine("The number is not equal to 5.");
} // Output: The number is not equal to 5.
```

3. Creating a function that returns the opposite of a boolean value:

```csharp
public static bool OppositeBool(bool boolValue) {
    return !boolValue; // Returns the opposite of the input boolean value
}

bool isSunny = true;
bool isNotSunny = OppositeBool(isSunny);
Console.WriteLine(isNotSunny); // Output: False
```