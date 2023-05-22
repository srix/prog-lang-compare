In C#, a boolean is a data type that can only have one of two values: "true" or "false". It is often used in decision-making statements like if-else statements, loops, and switch statements.

Here are a few examples of how you can use boolean in C#:

Example 1: Using a boolean variable in a decision-making statement
```
bool isRaining = true;

if (isRaining)
{
    Console.WriteLine("Bring an umbrella!");
}
else
{
    Console.WriteLine("Leave your umbrella at home.");
}
```
Output:
```
Bring an umbrella!
```
Explanation: In this example, a boolean variable named "isRaining" has been initialized with the value "true". The if statement checks if the value of "isRaining" is true. Since it is true, the code inside the if block is executed, and the message "Bring an umbrella!" is displayed.

Example 2: Using logical operators to combine boolean expressions
```
bool isSunny = true;
bool isWarm = false;

if (isSunny && isWarm)
{
    Console.WriteLine("Perfect weather for a picnic!");
}
else if (!isSunny && !isWarm)
{
    Console.WriteLine("Stay inside and watch a movie.");
}
else
{
    Console.WriteLine("It's not picnic weather.");
}
```
Output:
```
It's not picnic weather.
```
Explanation: In this example, two boolean variables "isSunny" and "isWarm" have been initialized with the values "true" and "false" respectively. The if-else statement checks these values using logical operators ("&&" and "!") to determine what message to display.

Example 3: Assigning the result of a boolean expression to a variable
```
bool isEven = (10 % 2 == 0);

if (isEven)
{
    Console.WriteLine("The number is even.");
}
else
{
    Console.WriteLine("The number is odd.");
}
```
Output:
```
The number is even.
```
Explanation: In this example, a boolean variable "isEven" has been initialized with the result of the expression "10 % 2 == 0", which is true because 10 is evenly divisible by 2 without producing a remainder. The if statement checks if "isEven" is true and displays an appropriate message.