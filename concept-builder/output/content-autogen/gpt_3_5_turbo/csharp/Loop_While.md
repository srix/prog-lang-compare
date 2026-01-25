In C#, the "while" statement is used to execute a block of code repeatedly as long as a specified condition evaluates to true. Here is the basic syntax of a "while" loop:

```csharp
while (condition)
{
   // Code to be executed
}
```

The loop will continue to execute the code block repeatedly until the condition becomes false. Here are a few examples:

Example 1: Print numbers from 1 to 10 using a while loop

```csharp
int i = 1;
while (i <= 10)
{
    Console.WriteLine(i);
    i++;
}
```

This code will print the numbers from 1 to 10 on the console.

Example 2: Calculate the sum of numbers from 1 to 100 using a while loop

```csharp
int sum = 0;
int i = 1;
while (i <= 100)
{
    sum += i;
    i++;
}
Console.WriteLine(sum);
```

This code will calculate the sum of numbers from 1 to 100 and print it on the console.

Example 3: Read numbers from the console until the user enters -1

```csharp
int number = 0;
while (number != -1)
{
    Console.WriteLine("Enter a number (-1 to exit):");
    number = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine("You entered " + number);
}
```

This code will keep asking the user to enter numbers until they enter -1. It will display each number entered by the user on the console.