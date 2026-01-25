To get the maximum and minimum value of two numbers in C#, we can use the built-in Math.Max() and Math.Min() methods. Math.Max(a,b) returns the greater of two values, while Math.Min(a,b) returns the smaller of two values:

Here's an example:

```
int num1 = 10;
int num2 = 20;

int max = Math.Max(num1, num2); // returns 20
int min = Math.Min(num1, num2); // returns 10

Console.WriteLine("Maximum value is: " + max);
Console.WriteLine("Minimum value is: " + min);
```

The output of the code above will be:

```
Maximum value is: 20
Minimum value is: 10
```