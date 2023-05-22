In C#, we can compare numbers using comparison operators. The comparison operators include:

1. Greater than (>): returns true if the left operand is greater than the right operand.
2. Greater than or equal to (>=): returns true if the left operand is greater than or equal to the right operand.
3. Less than (<): returns true if the left operand is less than the right operand.
4. Less than or equal to (<=): returns true if the left operand is less than or equal to the right operand.
5. Equals (==): returns true if the left operand is equal to the right operand.
6. Not equals (!=): returns true if the left operand is not equal to the right operand.

Here are some examples of comparing numbers in C#:

```csharp
int a = 5;
int b = 10;

// greater than
if (b > a)
{
    Console.WriteLine("b is greater than a");
}

// greater than or equal to
if (a >= 5)
{
    Console.WriteLine("a is greater than or equal to 5");
}

// less than
if (a < b)
{
    Console.WriteLine("a is less than b");
}

// less than or equal to
if (b <= 10)
{
    Console.WriteLine("b is less than or equal to 10");
}

// equals
if (a == b)
{
    Console.WriteLine("a is equal to b");
}
else
{
    Console.WriteLine("a is not equal to b");
}

// not equal
if (a != b)
{
    Console.WriteLine("a is not equal to b");
}
else
{
    Console.WriteLine("a is equal to b");
}
```

Output:
```
b is greater than a
a is greater than or equal to 5
a is less than b
b is less than or equal to 10
a is not equal to b
a is not equal to b
```
