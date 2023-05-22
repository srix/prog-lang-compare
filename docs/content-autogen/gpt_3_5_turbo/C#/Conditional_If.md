In C#, "if" is a conditional statement used to execute a block of code only if the specified condition is true. The syntax of "if" statement in C# is as follows:

```
if (condition)
{
    // code to be executed if the condition is true
}
```

Here are some examples to illustrate the usage of "if" in C#:

Example 1:

```
int x = 10;

if (x > 5)
{
    Console.WriteLine("x is greater than 5");
}

// Output: x is greater than 5
```

Explanation: In this example, the if condition checks if the value of x is greater than 5. Since the value of x is 10, the condition is true, and the code within the curly braces is executed, which prints the message "x is greater than 5" to the console.

Example 2:

```
int age = 20;

if (age >= 18)
{
    Console.WriteLine("You are eligible to vote");
}
else
{
    Console.WriteLine("You are not eligible to vote");
}

// Output: You are eligible to vote
```

Explanation: In this example, the if condition checks if the value of the variable age is greater than or equal to 18. Since the value of age is 20, the condition is true, and the message "You are eligible to vote" is printed to the console. If the condition was false, i.e., the age was less than 18, the message "You are not eligible to vote" would be printed.

Example 3:

```
int a = 5;
int b = 10;

if (a > b)
{
    Console.WriteLine("a is greater than b");
}
else if (b > a)
{
    Console.WriteLine("b is greater than a");
}
else
{
    Console.WriteLine("a and b are equal");
}

// Output: b is greater than a
```

Explanation: In this example, the if condition checks if the value of a is greater than the value of b. Since the value of a is less than b, the condition is false. The else-if block then checks if the value of b is greater than the value of a, which is true. So, the message "b is greater than a" is printed to the console. If both conditions were false, which would happen only if a and b were equal, the message "a and b are equal" would be printed.