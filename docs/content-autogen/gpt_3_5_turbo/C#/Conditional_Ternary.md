Ternary operator in C# is also called the conditional operator. It is a shorthand way of writing an if-else statement. It is represented by the '?' symbol and is written in the following format:
```
(condition) ? (value1) : (value2);
```

If the condition is true, the value1 is returned, otherwise, the value2 is returned.

Here's an example:

```csharp
int a = 5;
int b = 10;

int maxNumber = (a > b) ? a : b;

Console.WriteLine(maxNumber);
```

In this example, we have two variables, `a` and `b`. We want to find the maximum value, so we use the ternary operator to do that. The condition we use is `a > b`, which returns false, so the value of `b` is returned and assigned to the `maxNumber` variable.

Another example:

```csharp
int age = 20;
string isAdult = (age >= 18) ? "Yes" : "No";

Console.WriteLine($"Is the person an adult? {isAdult}");
```

In this example, we want to check if the person is an adult or not based on their age. If the age is greater than or equal to 18, the value of `isAdult` will be "Yes", otherwise, it will be "No". The output will be "Is the person an adult? Yes" since the age is 20.